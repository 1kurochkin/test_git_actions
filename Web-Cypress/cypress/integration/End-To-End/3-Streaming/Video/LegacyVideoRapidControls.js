import VideoPage from "../../../../support/pageobjects/VideoPage.js";
import SeriesDetailsPage from "../../../../support/pageobjects/SeriesDetailsPage.js";

const seriesDetailsPage = new SeriesDetailsPage();
const videoPage = new VideoPage();
let beforeCurrentTime = 0;
let afterCurrentTime = 0;

function convertToTime(stringTime) {
  const videoTime = new Date("01 Jan 1970 00:" + stringTime + " GMT").getTime();
  return videoTime / 1000;
}

describe("Subscribed User - Legacy Video Rapid Controls", function () {
  it("Subscribed User - Legacy Video Rapid Controls", function () {
    //User logs into a subscribed account
    cy.loginSubscribedUser();

    cy.waitForAppPageLoad();

    seriesDetailsPage.visitSeriesDetailsPage("30-day-evolution2");
    seriesDetailsPage.getBodyWeekOneFirstWorkoutVideoLink().click();

    //Set state to zero
    cy.intercept("POST", "/workouts/v1/video_events").as("getVideoEvents");
    videoPage.getProgressSlider().should("be.visible");
    cy.wait("@getVideoEvents", { timeout: 10000 });
    videoPage.getProgressSlider().click(0, 0, { force: true });

    //Rapid Pause/Play button
    videoPage.getPauseButton().click();
    videoPage.getPlayButton().click();
    videoPage.getPauseButton().click();
    videoPage.getPlayButton().click();
    videoPage.getPauseButton().should("be.visible");

    //Rapid Volume button
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });
    videoPage.getVolumeButton().click({ force: true });
    videoPage.getVolumeButton().click({ force: true });
    videoPage.getVolumeButton().click({ force: true });
    videoPage.getVolumeButton().click({ force: true });
    cy.wait(2000);
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.not.equal(
        convertToTime(beforeCurrentTime),
      );
    });
    cy.wait(1000);

    //Rapid Fast Forward four times
    videoPage.getForwardButton().click();
    videoPage.getForwardButton().click();
    videoPage.getForwardButton().click();
    videoPage.getForwardButton().click();
    cy.wait(3000);

    //Time is greater than 59 seconds
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      expect(convertToTime($currentTime.text())).to.be.greaterThan(59, {
        timeout: 6000,
      });
    });

    //Rapid Rewind five times
    videoPage.getRewindButton().click();
    videoPage.getRewindButton().click();
    videoPage.getRewindButton().click();
    videoPage.getRewindButton().click();
    videoPage.getRewindButton().click();
    cy.wait(1000);

    //Time is less than 5 seconds
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      expect(convertToTime($currentTime.text())).to.be.lessThan(5, {
        timeout: 5000,
      });
    });

    //Rapidly click progress bar in random locations, last click in middle
    videoPage.getProgressSlider().click(800, 0, { force: true });
    videoPage.getProgressSlider().click(200, 0, { force: true });
    videoPage.getProgressSlider().click(1200, 0, { force: true });
    videoPage.getProgressSlider().click(900, 0, { force: true });
    videoPage.getProgressSlider().click(100, 0, { force: true });
    videoPage.getProgressSlider().click(1400, 0, { force: true });
    videoPage.getProgressSlider().click(700, 0, { force: true });
    cy.wait(1000);

    //Time is greater than 120 seconds
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      expect(convertToTime($currentTime.text())).to.be.greaterThan(120, {
        timeout: 6000,
      });
    });

    //Rapidly click progress bar in random locations, last click at beginning
    videoPage.getProgressSlider().click(800, 0, { force: true });
    videoPage.getProgressSlider().click(200, 0, { force: true });
    videoPage.getProgressSlider().click(1200, 0, { force: true });
    videoPage.getProgressSlider().click(900, 0, { force: true });
    videoPage.getProgressSlider().click(100, 0, { force: true });
    videoPage.getProgressSlider().click(1400, 0, { force: true });
    videoPage.getProgressSlider().click(0, 0, { force: true });
    cy.wait(2000);

    //Time is less than 5 seconds
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      expect(convertToTime($currentTime.text())).to.be.lessThan(5, {
        timeout: 5000,
      });
    });
  });
});
