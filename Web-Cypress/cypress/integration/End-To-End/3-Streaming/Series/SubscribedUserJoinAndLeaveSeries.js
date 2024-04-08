import MyPlanPage from "../../../../support/pageobjects/MyPlanPage.js";
import SeriesPage from "../../../../support/pageobjects/SeriesPage.js";
import SeriesDetailsPage from "../../../../support/pageobjects/SeriesDetailsPage.js";

const myPlanPage = new MyPlanPage();
const seriesPage = new SeriesPage();
const seriesDetailsPage = new SeriesDetailsPage();

describe("Subscribed User - Join and Leave a Series", function () {
  it("Subscribed User - Join and Leave a Series", function () {
    //Login
    cy.loginSubscribedUserSeries();

    cy.waitForAppPageLoad();

    //Navigate to series page and join a series
    seriesPage.visitPage();
    cy.wait(2000);

    seriesPage.getBodyFirstCategoryFirstSeriesLink().click();

    cy.wait(2000);

    //If test starts with this series joined, then this will leave the series
    cy.get('button[class*="ui"]').then(($body) => {
      if ($body.text().includes("LEAVE THIS SERIES")) {
        seriesDetailsPage.getBodyLeaveThisSeriesButton().click();
        cy.intercept("GET", "/workouts/v1/series").as("getJoinSeriesButton");
        cy.wait("@getJoinSeriesButton");
      }
    });
    seriesDetailsPage.getBodyJoinThisSeriesButton().click();

    //Navigate to My Plan page and assert that the series has been joined
    myPlanPage.visitPage();

    //myPlanPage.getBodySeriesNextButton().click();
    myPlanPage.getSeriesTodaysWorkoutHeaderText().should("be.visible");
    myPlanPage.getBodySeriesPlayButton().should("be.visible");

    //Click next to show tomorrow's workout
    myPlanPage.getBodySeriesNextButton().click();

    //conditional for if tomorrows workout is a rest or walk day
    myPlanPage.getSeriesCarousel().then(($body) => {
      if ($body.find('div[class*="scheduled-workouts-module"]') > 1) {
        myPlanPage.getSeriesTomorrowsWorkoutHeaderText().should("be.visible");
        //navigate back to series page
        myPlanPage.getBodySeriesLink().click();
      } else {
        myPlanPage
          .getSeriesTomorrowsRestWalkDayWorkoutHeaderText()
          .should("be.visible");
        //navigate back to series page
        cy.go("back");
      }
    });

    //Leave the series
    seriesDetailsPage.getBodyLeaveThisSeriesButton().click();
    cy.intercept("GET", "/workouts/v1/series").as("getJoinSeriesButton");
    cy.wait("@getJoinSeriesButton");
  });
});
