import SeriesDetailsPage from "../../support/pageobjects/SeriesDetailsPage.js";
import PostSeriesFeedbackPage from "../../support/pageobjects/PostSeriesFeedbackPage.js";

const seriesDetailsPage = new SeriesDetailsPage();
const postSeriesFeedbackPage = new PostSeriesFeedbackPage();

const series = "wrist-technique-101-cwb0221";
const videos = [
  "10-min-wrist-modifications-CWB0221-S1",
  "10-min-wrist-mobilization-CWB0221-S2",
  "15-min-wrist-strengthening-CWB0221-S3",
];

describe("Subscribed User - Series Feedback Questionnaire", function () {
  it("Watches a series to completion then verifies the post series feedback", function () {
    cy.loginSubscribedUserVideoComplete();
    cy.waitForAppPageLoad(7500);

    seriesDetailsPage.visitSeriesDetailsPage(series);
    cy.waitForAppPageLoad();

    //If test starts with this series joined, then this will leave the series
    cy.get('button[class*="ui"]').then(($body) => {
      if ($body.text().includes("LEAVE THIS SERIES")) {
        seriesDetailsPage.getBodyLeaveThisSeriesButton().click();
        cy.intercept("GET", "/workouts/v1/series").as("getJoinSeriesButton");
        cy.wait("@getJoinSeriesButton");
      }
    });
    seriesDetailsPage.getBodyJoinThisSeriesButton().click();

    cy.videoComplete(videos);

    cy.intercept("POST", "https://m.stripe.com/6").as("getStripe");
    cy.wait("@getStripe", { timeout: 10000 });

    cy.wait(5000); //Note: this might not be necessary

    postSeriesFeedbackPage.getCloseButton().should("be.visible");
    postSeriesFeedbackPage.getShareFeedbackButton().click();

    const firstQuestionVisibleSelectors = [
      postSeriesFeedbackPage.getNextButton,
      postSeriesFeedbackPage.getBackButton,
      postSeriesFeedbackPage.getCloseButton,
      postSeriesFeedbackPage.getAgreeLabel,
      postSeriesFeedbackPage.getUndecidedLabel,
      postSeriesFeedbackPage.getDisagreeLabel,
    ];
    cy.assertVisible(firstQuestionVisibleSelectors);

    postSeriesFeedbackPage.getAgreeLabel().click();
    postSeriesFeedbackPage.getNextButton().click();

    const secondQuestionVisibleSelectors = [
      postSeriesFeedbackPage.getNextButton,
      postSeriesFeedbackPage.getBackButton,
      postSeriesFeedbackPage.getCloseButton,
      postSeriesFeedbackPage.getAgreeLabel,
      postSeriesFeedbackPage.getUndecidedLabel,
      postSeriesFeedbackPage.getDisagreeLabel,
    ];
    cy.assertVisible(secondQuestionVisibleSelectors);

    postSeriesFeedbackPage.getAgreeLabel().click();
    postSeriesFeedbackPage.getNextButton().click();

    const thirdQuestionVisibleSelectors = [
      postSeriesFeedbackPage.getNextButton,
      postSeriesFeedbackPage.getBackButton,
      postSeriesFeedbackPage.getCloseButton,
      postSeriesFeedbackPage.getAgreeLabel,
      postSeriesFeedbackPage.getUndecidedLabel,
      postSeriesFeedbackPage.getDisagreeLabel,
    ];
    cy.assertVisible(thirdQuestionVisibleSelectors);

    postSeriesFeedbackPage.getAgreeLabel().click();
    postSeriesFeedbackPage.getNextButton().click();

    const fourthQuestionVisibleSelectors = [
      postSeriesFeedbackPage.getNextButton,
      postSeriesFeedbackPage.getBackButton,
      postSeriesFeedbackPage.getCloseButton,
      postSeriesFeedbackPage.getTooEasyLabel,
      postSeriesFeedbackPage.getRightAmountLabel,
      postSeriesFeedbackPage.getTooChallengingLabel,
    ];
    cy.assertVisible(fourthQuestionVisibleSelectors);

    postSeriesFeedbackPage.getTooEasyLabel().click();
    postSeriesFeedbackPage.getNextButton().click();

    const fiveQuestionVisibleSelectors = [
      postSeriesFeedbackPage.getDoneButton,
      postSeriesFeedbackPage.getBackButton,
      postSeriesFeedbackPage.getTextAreaInput,
    ];
    cy.assertVisible(fiveQuestionVisibleSelectors);

    postSeriesFeedbackPage.getDoneButton().click();
  });
});
