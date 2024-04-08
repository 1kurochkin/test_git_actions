import MyPlanPage from "../../support/pageobjects/MyPlanPage.js";
import SeriesDetailsPage from "../../support/pageobjects/SeriesDetailsPage.js";

const myPlanPage = new MyPlanPage();
const seriesDetailsPage = new SeriesDetailsPage();

const series = "wrist-technique-101-cwb0221";
const workout_ID = ["6dyJd7SYga5Ef13yAus9dZ"];

describe("Subscribed User - Zelda Video Complete", function () {
  it("Watches a Zelda video to completion and verifies my plan has updated", function () {
    cy.loginSubscribedUserVideoComplete();
    cy.waitForAppPageLoad(7500);

    cy.get('div[class*="my-plan-module"]').then(($body) => {
      if ($body.find('div[class*="complete-congrats-box"]').length > 0) {
        seriesDetailsPage.visitSeriesDetailsPage(series);
        cy.waitForAppPageLoad();

        //Leave the series
        seriesDetailsPage.getBodyLeaveThisSeriesButton().click();
        cy.intercept("GET", "/workouts/v1/series").as("getJoinSeriesButton");
        cy.wait("@getJoinSeriesButton");

        myPlanPage.visitPage();
        cy.waitForAppPageLoad();
      }
    });

    myPlanPage
      .getBodyThisWeekAllTimeWorkouts()
      .invoke("text")
      .then((preVideoStats) => {
        cy.videoCompleteV2(workout_ID);
        cy.wait(750);

        myPlanPage.visitPage();
        cy.waitForAppPageLoad();
        cy.wait(4000);

        myPlanPage
          .getBodyThisWeekAllTimeWorkouts()
          .invoke("text")
          .then((postVideoStats) => {
            if (postVideoStats != preVideoStats) {
              myPlanPage.visitPage();
              cy.waitForAppPageLoad();
              cy.wait(1500);

              myPlanPage
                .getBodyThisWeekAllTimeWorkouts()
                .invoke("text")
                .then((postVideoStatsRetry) => {
                  expect(preVideoStats).to.not.equal(postVideoStatsRetry);
                });
            } else {
              expect(preVideoStats).to.not.equal(postVideoStats);
            }
          });

        myPlanPage.getBodyThisWeekTodaysActivityCheckmarkIcon({
          timeout: 7500,
        });

        const visibleSelectors = [
          myPlanPage.getVideoCompleteCompletedTodaySection,
          myPlanPage.getVideoCompleteCompletedTodayText,
          myPlanPage.getVideoCompleteCompletedTodayVideoCards,
          myPlanPage.getVideoCompleteWorkoutCompleteSection,
        ];
        cy.assertVisible(visibleSelectors);
      });
  });
});
