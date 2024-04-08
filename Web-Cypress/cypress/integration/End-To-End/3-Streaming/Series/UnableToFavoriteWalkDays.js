import SeriesDetailsPage from "../../../../support/pageobjects/SeriesDetailsPage.js";

const seriesDetailsPage = new SeriesDetailsPage();

describe("Subscribed User - Unable to Favorite Walk Days", function () {
  it("Subscribed User - Unable to Favorite Walk Days", function () {
    cy.loginSubscribedUser();

    cy.waitForAppPageLoad();

    //navigates to the 30-day Evolution series detail page
    seriesDetailsPage.visitSeriesDetailsPage("30-day-evolution2");

    //Verifies the Walk Day card exists
    seriesDetailsPage.getBodyWeekOneSecondWorkoutCard();

    //Verifies the Walk Day does not have a Favorite button
    seriesDetailsPage
      .getBodyWeekOneSecondWorkoutCard()
      .find("button")
      .should("not.exist");

    //Verifies the Walk Day card does not have a Workout details page link
    seriesDetailsPage
      .getBodyWeekOneSecondWorkoutCard()
      .find("a")
      .should("not.exist");
  });
});
