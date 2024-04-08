import ZeldaVideoPage from "../../../../support/pageobjects/ZeldaVideoPage.js";

const zeldaVideoPage = new ZeldaVideoPage();
let beforeCurrentTime = 0;
let afterCurrentTime = 0;

function convertToTime(stringTime) {
  const trimTime = stringTime.split(" / ");
  const videoTime = new Date(
    "01 Jan 1970 00:" + trimTime[0] + " GMT",
  ).getTime();
  return videoTime / 1000;
}

describe("Subscribed User - Zelda Video Playback and Controls", function () {
  it("Subscribed User - Zelda Video Playback and Controls", function () {
    //User logs into a subscriber account
    cy.loginSubscribedUser();
    cy.wait(2000);

    zeldaVideoPage.visitVideoPage("30-min-full-body-definition-AMD0421-S3");
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    cy.wait("@getVideoEvents", { timeout: 10000 });

    //User is taken to the video page
    cy.url().should("include", "/video");

    //User sees title and player controls
    const visibleControlSelectors = [
      zeldaVideoPage.getFullScreenButton,
      zeldaVideoPage.getVideoPauseButton,
      zeldaVideoPage.getRewindButton,
      zeldaVideoPage.getFastForwardButton,
    ];
    cy.assertVisible(visibleControlSelectors);

    //User clicks the Fast Forward button
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });
    zeldaVideoPage.getFastForwardButton().click({ force: true });
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    cy.wait("@getVideoEvents", { timeout: 10000 });

    //User sees timer has moved forward atleast ten seconds
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.not.equal(
        convertToTime(beforeCurrentTime),
      );
    });

    //User clicks the Rewind button
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });
    zeldaVideoPage.getRewindButton().click({ force: true });
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    cy.wait("@getVideoEvents", { timeout: 10000 });
    cy.wait(500);

    //User sees timer has moved backwards atleast ten seconds
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.not.equal(
        convertToTime(beforeCurrentTime),
      );
    });

    //User clicks the Pause button
    zeldaVideoPage.getVideoPauseButton().click();
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });

    //User waits two seconds
    cy.wait(2000);

    //User sees timer has not moved
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.equal(
        convertToTime(beforeCurrentTime),
      );
    });

    //User sees Pause button is now a Play button
    zeldaVideoPage.getVideoPlayButton().should("be.visible");
    zeldaVideoPage.getVideoPlayButton().click();

    //User clicks a point into the progress video bar
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });
    zeldaVideoPage.getProgressSlider().click(400, 0, { force: true });
    cy.wait(1000);

    //User sees timer has updated
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.not.equal(
        convertToTime(beforeCurrentTime),
      );
    });

    //To avoid Resume State problems
    zeldaVideoPage.getProgressSlider().click(0, 0, { force: true });
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    cy.wait("@getVideoEvents", { timeout: 10000 });

    //User clicks the volume button and sees labels for trainer and music
    zeldaVideoPage.getVolumeMenuButton().click();
    zeldaVideoPage.getMusicVolumeSlider().should("be.visible");
    zeldaVideoPage.getTrainerVolumeSlider().should("be.visible");

    //User sees the close button
    zeldaVideoPage.getCloseButton().should("exist");
  });
});
