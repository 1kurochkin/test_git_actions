import SeriesDetailsPage from "../../../../support/pageobjects/SeriesDetailsPage.js";
import VideoPage from "../../../../support/pageobjects/VideoPage.js";

const seriesDetailsPage = new SeriesDetailsPage();
const videoPage = new VideoPage();
// const videoPage = new ZeldaVideoPage();
let beforeCurrentTime = 0;
let afterCurrentTime = 0;

function convertToTime(stringTime) {
  const trimTime = stringTime.split(" / ");
  const videoTime = new Date(
    "01 Jan 1970 00:" + trimTime[0] + " GMT",
  ).getTime();
  return videoTime / 1000;
}

describe("Guest - Video Playback Controls and Paywall", function () {
  it("Guest - Video Playback Controls and Paywall", function () {
    seriesDetailsPage.visitSeriesDetailsPage("30-day-evolution2");
    seriesDetailsPage.getBodyWeekOneFirstWorkoutVideoLink().click();

    videoPage.getFullscreenButton().should("be.visible");

    //Video Controls
    videoPage.getPauseButton().should("be.visible");
    videoPage.getRewindButton().should("be.visible");
    videoPage.getForwardButton().should("be.visible");

    //User clicks the Fast Forward button
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });
    cy.wait(2000);
    videoPage.getForwardButton().click({ force: true });
    cy.wait(2000);

    //User sees timer has moved forward atleast ten seconds
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.not.equal(
        convertToTime(beforeCurrentTime),
      );
    });

    //User clicks the Rewind button
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });
    videoPage.getRewindButton().click({ force: true });
    cy.wait(2000);

    //User sees timer has moved backwards atleast ten seconds
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.not.equal(
        convertToTime(beforeCurrentTime),
      );
    });

    //User clicks the Pause button
    videoPage.getPauseButton().click();
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });

    //User waits two seconds
    cy.wait(2000);

    //User sees timer has not moved
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.equal(
        convertToTime(beforeCurrentTime),
      );
    });

    //User sees Pause button is now a Play button
    videoPage.getPlayButton().should("be.visible");
    videoPage.getPlayButton().click();

    //User clicks a point into the progress video bar
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      beforeCurrentTime = $currentTime.text();
    });
    videoPage.getProgressSlider().click(400, 0, { force: true });
    cy.wait(1000);

    //User sees timer has updated
    videoPage.getCurrentTimeText().then(function ($currentTime) {
      afterCurrentTime = $currentTime.text();
      expect(convertToTime(afterCurrentTime)).to.not.equal(
        convertToTime(beforeCurrentTime),
      );
    });

    //Guest sees trainer volume
    videoPage.getVolumeButton().click();
    videoPage.getVolumeTrainerLabel().should("be.visible");

    //Guest see paywall
    videoPage.getCloseButton().click();
    cy.url().should("include", "dup-trial-annual");
  });
});
