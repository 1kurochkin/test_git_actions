import VideoPage from "../../../../support/pageobjects/VideoPage.js";
import SeriesDetailsPage from "../../../../support/pageobjects/SeriesDetailsPage.js";

const seriesDetailsPage = new SeriesDetailsPage();
const videoPage = new VideoPage();

describe("Subscribed User - Legacy FeedFM Functionality and Layout", function () {
  it("Subscribed User - Legacy FeedFM Functionality and Layout", function () {
    //Login and navigate to workout video
    cy.loginSubscribedUser();

    cy.waitForAppPageLoad();

    seriesDetailsPage.visitSeriesDetailsPage("30-day-evolution2");
    seriesDetailsPage.getBodyWeekOneFirstWorkoutVideoLink().click();

    //Wait for video to load
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    videoPage.getProgressSlider().should("be.visible");
    cy.wait("@getVideoEvents", { timeout: 10000 });

    videoPage.getFeedFMButton().trigger("mouseover");
    cy.get("body").then(($body) => {
      if ($body.find('i[class*="pv-play-outline"]').length > 0) {
        videoPage.getFeedFMPlayButton().should("be.visible");
      } else {
        videoPage.getFeedFMPauseButton().should("be.visible");
      }
    });
    videoPage.getFeedFMSkipButton().should("be.visible");
    videoPage.getFeedFMOpenStationsButton().trigger("mouseover");

    //Set station back to default if it isnt
    cy.intercept("PUT", "/user/v1/attribute/user").as("getFeedFMUpdate");
    videoPage.getFeedFMHipHopStationButton().click();
    cy.wait("@getFeedFMUpdate", { timeout: 10000 });

    //All stations show
    videoPage.getFeedFMPopStationButton().should("be.visible");
    videoPage.getFeedFMElectronicStationButton().should("be.visible");
    videoPage.getFeedFMHipHopStationButton().should("be.visible");
    videoPage.getFeedFMChillStationButton().should("be.visible");
    videoPage.getFeedFMThrowbackStationButton().should("be.visible");

    //All station backgrounds show
    videoPage.getFeedFMPopStationButtonBackground().should("be.visible");
    videoPage.getFeedFMElectronicStationButtonBackground().should("be.visible");
    videoPage.getFeedFMHipHopStationButtonBackground().should("be.visible");
    videoPage.getFeedFMChillStationButtonBackground().should("be.visible");
    //KeepPass for QB-326
    //videoPage.getFeedFMThrowbackStationButtonBackground().should('be.visible');

    //FeedFM close button is visible
    videoPage.getFeedFMCloseStationsButton().should("be.visible");

    //User clicks Pop station
    videoPage.getFeedFMThrowbackStationButton().trigger("mouseover");
    cy.intercept("PUT", "/user/v1/attribute/user").as("getFeedFMUpdate");
    videoPage.getFeedFMPopStationButton().click();
    cy.wait("@getFeedFMUpdate", { timeout: 10000 });

    //User exits video and returns to it
    videoPage.getCloseButton().click();
    seriesDetailsPage.getBodyWeekOneFirstWorkoutVideoLink().click();

    //Wait for video to load
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    videoPage.getProgressSlider().should("be.visible");
    cy.wait("@getVideoEvents", { timeout: 10000 });

    videoPage.getFeedFMButton().trigger("mouseover");
    videoPage.getFeedFMOpenStationsButton().trigger("mouseover");
    videoPage.getFeedFMPopStationActiveButton().should("be.visible");

    //Set station back to default
    cy.intercept("PUT", "*.pvolve.com/user/v1/attribute/user").as(
      "getFeedFMUpdate",
    );
    videoPage.getFeedFMHipHopStationButton().click();
    cy.wait("@getFeedFMUpdate", { timeout: 10000 });
    cy.intercept("PUT", "*.pvolve.com/user/v1/attribute/user").as(
      "getFeedFMUpdate",
    );
    cy.wait("@getFeedFMUpdate", { timeout: 10000 });
  });
});
