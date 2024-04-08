import MyPlanPage from "../../../../support/pageobjects/MyPlanPage.js";

const myPlanPage = new MyPlanPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button

describe("MyPlan POM Selector Validation Test", function () {
  it("Validates all of the selectors in the /myplan POM", function () {
    //Login
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    cy.appHeaderSubscribed();

    const visibleSelectors = [
      //Body - Hero Section
      myPlanPage.getBodyHero,
      myPlanPage.getBodyHeroVideo,
      myPlanPage.getBodyHeroDescriptionAddToFavoritesButton,
      myPlanPage.getBodyHeroCarouselBackButton,
      myPlanPage.getBodyHeroCarouselMiddleButton,
      myPlanPage.getBodyHeroCarouselNextButton,

      //Body - This Week Section
      myPlanPage.getBodyThisWeek,

      //Body - Favorites Section
      myPlanPage.getBodyFavorites,
    ];
    cy.assertVisible(visibleSelectors);

    myPlanPage.getBodyHeroVideo().then(($state) => {
      if ($state.find('a[class*="play-button"]').length > 0) {
        myPlanPage.getBodyHeroVideoPlayButton().should("be.visible");
      } else if ($state.find('a[class*="action-row"]').length > 0) {
        const visibleResumeStateSelectors = [
          myPlanPage.getResumePlayButtonText,
          myPlanPage.getResumeRestartButton,
          myPlanPage.getResumePlayButton,
        ];
        cy.assertVisible(visibleResumeStateSelectors);
      }
    });

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - My Plan Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        //Login
        cy.loginSubscribedUser();

        cy.appHeaderSubscribed(exclude);

        const myPlanVisibleSelectors = [
          //Body - Hero Section
          myPlanPage.getBodyHero,
          myPlanPage.getBodyHeroVideo,
          myPlanPage.getBodyHeroDescriptionAddToFavoritesButton,
          myPlanPage.getBodyHeroCarouselBackButton,
          myPlanPage.getBodyHeroCarouselMiddleButton,
          myPlanPage.getBodyHeroCarouselNextButton,

          //Body - This Week Section
          myPlanPage.getBodyThisWeek,

          //Body - Favorites Section
          myPlanPage.getBodyFavorites,
        ];
        cy.assertVisible(myPlanVisibleSelectors);

        myPlanPage.getBodyHeroVideo().then(($state) => {
          if ($state.find('a[class*="play-button"]').length > 0) {
            myPlanPage.getBodyHeroVideoPlayButton().should("be.visible");
          } else if ($state.find('a[class*="action-row"]').length > 0) {
            const visibleResumeStateSelectors = [
              myPlanPage.getResumePlayButtonText,
              myPlanPage.getResumeRestartButton,
              myPlanPage.getResumePlayButton,
            ];
            cy.assertVisible(visibleResumeStateSelectors);
          }
        });

        //Footer
        cy.responsiveAppFooter();
      },
    );
  });
});
