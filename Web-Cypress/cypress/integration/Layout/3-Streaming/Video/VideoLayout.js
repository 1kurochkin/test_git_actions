import VideoPage from "../../../../support/pageobjects/VideoPage.js";
import SeriesDetailsPage from "../../../../support/pageobjects/SeriesDetailsPage.js";

const seriesDetailsPage = new SeriesDetailsPage();
const videoPage = new VideoPage();

describe("Video POM Selector Validation Test", function () {
  it("Validates all of the selectors in the /video POM", function () {
    seriesDetailsPage.visitSeriesDetailsPage("30-day-evolution2");
    seriesDetailsPage.getBodyWeekOneFirstWorkoutVideoLink().click();
    videoPage.getForwardButton().click();

    const visibleSelectors = [
      videoPage.getTitleText,
      videoPage.getCloseButton,
      videoPage.getFullscreenButton,
      videoPage.getRemainingTimeText,
      videoPage.getPauseButton,
      videoPage.getRewindButton,
      videoPage.getForwardButton,
      videoPage.getVolumeButton,
    ];
    cy.assertVisible(visibleSelectors);
    videoPage.getForwardButton().click();

    videoPage.getProgressSlider().should("be.visible");
    videoPage.getCurrentTimeText().should("not.be.visible");
  });
});
