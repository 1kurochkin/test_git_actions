import MyPlanPage from "../../../../support/pageobjects/MyPlanPage.js";
import FavoriteWorkoutSeeAllPage from "../../../../support/pageobjects/FavoriteWorkoutSeeAllPage.js";
import ClassesPage from "../../../../support/pageobjects/ClassesPage.js";

const myPlanPage = new MyPlanPage();
const favoriteWorkoutSeeAllPage = new FavoriteWorkoutSeeAllPage();
const classesPage = new ClassesPage();

function favoriteButton(index) {
  classesPage
    .getWorkoutsFavoriteButton(index)
    .find("svg")
    .then(($svg) => {
      if ($svg.hasClass("MuiSvgIcon-colorPrimary")) {
        classesPage.getWorkoutsFavoriteButton(index).click({ force: true });
      }
    });
}

function resetFavorite() {
  myPlanPage.getFavouritesCarousel().then(($el) => {
    if (
      $el.find('button[class*="favorite-button-module--favorite-button"]')
        .length > 0
    ) {
      myPlanPage.getFavouritesFirstCardFavoriteButton().click();
      cy.wait(500);
      resetFavorite();
    } else {
      return;
    }
  });
}

const arrayOfFavoritedWorkouts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("Subscribed User - Mass Favorites Classes", function () {
  it("Subscribed User - Mass Favorites Classes", function () {
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    myPlanPage.visitPage();
    cy.wait(3500);

    resetFavorite();

    classesPage.visitPage();

    //User mass favorites workouts
    arrayOfFavoritedWorkouts.forEach(($el) => {
      favoriteButton($el);
    });

    //User goes back to My Plan page
    cy.intercept("GET", "/user/v1/attribute").as("getAttribute");
    cy.go("back");
    cy.wait("@getAttribute");

    //The See All Link and carousel next/back buttons are visible in the Favourites section
    myPlanPage.getFavouriteCarouselNextButton().should("be.visible");
    myPlanPage.getFavouriteCarouselBackButton().should("be.visible");
    myPlanPage.getFavouriteWorkoutsSeeAllLink().should("be.visible");

    //Navigates to the Favorite See All page
    myPlanPage.getFavouriteWorkoutsSeeAllLink().click();
    cy.wait(2000);

    favoriteWorkoutSeeAllPage.getWorkoutsTitle().should("be.visible");
    favoriteWorkoutSeeAllPage.getNumberOfWorkoutsText().contains("10");

    favoriteWorkoutSeeAllPage.getAllWorkoutsCards().each(($el) => {
      cy.wrap($el).should("be.visible");
      cy.wrap($el).find('a[href*="/video"]');
      cy.wrap($el).find('div[class*="content"] a[href*="/workouts/"]');
    });

    //User mass unfavorites workouts
    arrayOfFavoritedWorkouts.reverse().forEach(($el) => {
      cy.wait(300);
      favoriteWorkoutSeeAllPage
        .getFavoriteButton()
        .eq($el)
        .should("be.visible");
      favoriteWorkoutSeeAllPage.getFavoriteButton().eq($el).click();
    });

    favoriteWorkoutSeeAllPage.getNumberOfWorkoutsText().contains("0");

    //User goes back to My Plan page
    cy.intercept("GET", "/user/v1/attribute").as("getAttribute");
    cy.go("back");
    cy.wait("@getAttribute");

    //No workouts are shown in the favorites section
    myPlanPage.getFavouriteWorkoutSectionLabel().then(($text) => {
      const txt = $text.text();
      expect(txt).to.equal("Love a workout?");
      myPlanPage.getFavouriteCarouselNextButton().should("not.exist");
      myPlanPage.getFavouriteCarouselBackButton().should("not.exist");
      myPlanPage.getFavouriteWorkoutsSeeAllLink().should("not.exist");
    });

    classesPage.visitPage();

    arrayOfFavoritedWorkouts.forEach(($el) => {
      classesPage
        .getWorkoutsFavoriteButton($el)
        .find("svg")
        .then(($svg) => {
          expect($svg).to.have.class("MuiSvgIcon-colorPrimary");
        });
    });
  });
});
