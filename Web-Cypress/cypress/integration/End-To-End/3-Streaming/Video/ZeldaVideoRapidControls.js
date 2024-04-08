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

describe("Subscribed User - Zelda Video Rapid Controls", function () {
  it("Subscribed User - Zelda Video Rapid Controls", function () {
    //User logs into a subscribed account
    cy.loginSubscribedUser();

    cy.waitForAppPageLoad();

    zeldaVideoPage.visitVideoPage(
      "40-min-full-body-strength-and-burn-ROO0522-S2",
    );

    //Set state to zero
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    zeldaVideoPage.getProgressSlider().should("be.visible");
    cy.wait("@getVideoEvents", { timeout: 10000 });
    zeldaVideoPage.getProgressSlider().click(0, 0, { force: true });

    //Flake fix, preview is covering play/pause buttons
    zeldaVideoPage.getVolumeMenuButton().click({ force: true });
    zeldaVideoPage.getVolumeMenuButton().click({ force: true });

    //Rapid Pause/Play button
    zeldaVideoPage.getVideoPauseButton().click();
    zeldaVideoPage.getVideoPlayButton().click();
    zeldaVideoPage.getVideoPauseButton().click();
    zeldaVideoPage.getVideoPlayButton().click();
    zeldaVideoPage.getVideoPauseButton().should("be.visible");

    //Rapid Volume button
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });
    zeldaVideoPage.getVolumeMenuButton().click({ force: true });
    zeldaVideoPage.getVolumeMenuButton().click({ force: true });
    zeldaVideoPage.getVolumeMenuButton().click({ force: true });
    zeldaVideoPage.getVolumeMenuButton().click({ force: true });
    cy.wait(2000);
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.not.equal(
        convertToTime(beforeCurrentTime),
      );
    });
    cy.wait(1000);

    //Rapid Fast Forward four times
    zeldaVideoPage.getFastForwardButton().click();
    zeldaVideoPage.getFastForwardButton().click();
    zeldaVideoPage.getFastForwardButton().click();
    zeldaVideoPage.getFastForwardButton().click();
    cy.wait(3000);

    //Time is greater than 39 seconds
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      expect(convertToTime($currentTime.text())).to.be.greaterThan(39, {
        timeout: 6000,
      });
    });

    //Rapid Rewind five times
    zeldaVideoPage.getRewindButton().click();
    zeldaVideoPage.getRewindButton().click();
    zeldaVideoPage.getRewindButton().click();
    zeldaVideoPage.getRewindButton().click();
    zeldaVideoPage.getRewindButton().click();
    cy.wait(1000);

    //Time is less than 5 seconds
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      expect(convertToTime($currentTime.text())).to.be.lessThan(5, {
        timeout: 5000,
      });
    });

    //Rapidly click progress bar in random locations, last click in middle
    zeldaVideoPage.getProgressSlider().click(800, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(200, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(1200, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(900, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(100, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(1400, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(700, 0, { force: true });
    cy.wait(1000);

    //Time is greater than 120 seconds
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      expect(convertToTime($currentTime.text())).to.be.greaterThan(120, {
        timeout: 6000,
      });
    });

    //Rapidly click progress bar in random locations, last click at beginning
    zeldaVideoPage.getProgressSlider().click(800, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(200, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(1200, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(900, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(100, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(1400, 0, { force: true });
    zeldaVideoPage.getProgressSlider().click(0, 0, { force: true });
    cy.wait(2000);

    //Time is less than 5 seconds
    zeldaVideoPage.getCurrentTimeText().then(function ($currentTime) {
      expect(convertToTime($currentTime.text())).to.be.lessThan(5, {
        timeout: 5000,
      });
    });
  });
});
