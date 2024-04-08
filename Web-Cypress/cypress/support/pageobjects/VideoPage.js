class VideoPage {
  /**
   * Visits the /classes/???????/video
   *
   * Ex: videoPage.visitVideoPage('30-min-full-body-definition-AMD0421-S3');
   */
  visitVideoPage(videoURL) {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/classes/" + videoURL + "/video",
      { failOnStatusCode: false },
    );
  }

  /**
   * Returns pause button
   */
  getPauseButton() {
    return cy.get('[data-test="VideoPlayer-Pause-Button"]');
  }

  /**
   * Returns play button
   */
  getPlayButton() {
    return cy.get('[data-test="VideoPlayer-Play-Button"]');
  }

  /**
   * Returns video element
   */
  getVideo() {
    return cy.get("video");
  }

  /**
   * Returns close videoplayer button
   */
  getCloseButton() {
    return cy.get('[data-test="VideoPlayer-Close-Button"]');
  }
}
export default VideoPage;
