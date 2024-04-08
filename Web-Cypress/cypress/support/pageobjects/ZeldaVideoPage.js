class ZeldaVideoPage {
  /**
   *  Visits the Zelda Video page
   */
  visitVideoPage(videoURL) {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/classes/video/" + videoURL,
      { failOnStatusCode: false },
    );
  }

  /**
   *  Returns video player pause button
   */
  getVideoPauseButton() {
    return cy.get('button[data-test="VideoPlayer-Pause-Button"]');
  }

  /**
   *  Returns video player pause button
   */
  getVideoPlayButton() {
    return cy.get('button[data-test="VideoPlayer-Play-Button"]');
  }

  /**
   *  Returns video player Rewind 10 seconds button
   */
  getRewindButton() {
    return cy.get('button[data-test="VideoPlayer-Replay10Seconds-Button"]');
  }

  /**
   *  Returns video player Fast Forward 10 seconds button
   */
  getFastForwardButton() {
    return cy.get('button[data-test="VideoPlayer-Forward10Seconds-Button"]');
  }

  /**
   * Returns the Progress Slider button.
   */
  getProgressSlider() {
    return cy.get('span[data-test="VideoPlayer-Progress-Input"]');
  }

  /**
   * Returns the Current Time text on the left of the progress bar.
   */
  getCurrentTimeText() {
    return cy.get('h5[class*="MuiTypography-h5"]').contains(" / ");
  }

  /**
   *  Returns video player FullScreen button
   */
  getFullScreenButton() {
    return cy.get('button[data-test="VideoPlayer-Fullscreen-Button"]');
  }

  /**
   *  Returns video player volume button
   */
  getVolumeMenuButton() {
    return cy.get('button[data-test="VideoPlayer-Volume-Button"]');
  }

  /**
   *  Returns video player secondary Music volume slider
   */
  getMusicVolumeSlider() {
    return cy.get('span[data-test="VideoPlayer-MusicVolume-Input"]');
  }

  /**
   *  Returns video player secondary Trainer volume slider
   */
  getTrainerVolumeSlider() {
    return cy.get('span[data-test="VideoPlayer-TrainerVolume-Input"]');
  }

  /**
   *  Returns video player Closed Captions button
   */
  getClosedCaptionsButton() {
    return cy.get('button[data-test="VideoPlayer-EnableCC-Button"]');
  }

  /**
   *  [FEEDFM] Returns video player Stations menu toggle stations button
   */
  getFeedFMToggleStationsButton() {
    return cy.get('button[data-test="MusicPlayer-ToggleStations-Button"]');
  }

  /**
   *  [FEEDFM] Returns video player FeedFM play button
   */
  getFeedFMPlayButton() {
    return cy.get('button[data-test="MusicPlayer-Play-Button"]');
  }

  /**
   *  [FEEDFM] Returns video player FeedFM pause button
   */
  getFeedFMPauseButton() {
    return cy.get('button[data-test="MusicPlayer-Pause-Button"]');
  }

  /**
   *  [FEEDFM] Returns video player FeedFM skip button
   */
  getFeedFMSkipButton() {
    return cy.get('button[data-test="MusicPlayer-SkipSong-Button"]');
  }

  /**
   *  [FEEDFM] Returns Pop FeedFM button
   */
  getFeedFMPopButton() {
    return cy.get('button[data-test="MusicPlayer-PopStation-Button"]');
  }

  /**
   *  [FEEDFM] Returns Pop FeedFM Icon
   */
  getFeedFMPopIcon() {
    return cy.get('button[data-test="MusicPlayer-PopStation-Button"] img');
  }

  /**
   *  [FEEDFM] Returns Pop FeedFM Now playing text
   */
  getFeedFMPopNowPlayingText() {
    return cy
      .get('button[data-test="MusicPlayer-PopStation-Button"]')
      .parent()
      .parent()
      .contains("Now playing", { matchcase: false });
  }

  /**
   *  [FEEDFM] Returns Electronic FeedFM button
   */
  getFeedFMElectronicButton() {
    return cy.get('button[data-test="MusicPlayer-ElectronicStation-Button"]');
  }
  /**
   *  [FEEDFM] Returns Electronic FeedFM button Icon
   */
  getFeedFMElectronicIcon() {
    return cy.get(
      'button[data-test="MusicPlayer-ElectronicStation-Button"] img',
    );
  }

  /**
   *  [FEEDFM] Returns Hip Hop FeedFM button
   */
  getFeedFMHipHopButton() {
    return cy.get('button[data-test="MusicPlayer-HipHopStation-Button"]');
  }

  /**
   *  [FEEDFM] Returns Hip Hop FeedFM Icon
   */
  getFeedFMHipHopIcon() {
    return cy.get('button[data-test="MusicPlayer-HipHopStation-Button"] img');
  }

  /**
   *  [FEEDFM] Returns Hip Hop FeedFM Now playing text
   */
  getFeedFMHipHopNowPlayingText() {
    return cy
      .get('button[data-test="MusicPlayer-HipHopStation-Button"]')
      .parent()
      .parent()
      .contains("Now playing", { matchcase: false });
  }

  /**
   *  [FEEDFM] Returns Chill FeedFM button
   */
  getFeedFMChillButton() {
    return cy.get('button[data-test="MusicPlayer-ChillStation-Button"]');
  }

  /**
   *  [FEEDFM] Returns Chill FeedFM Icon
   */
  getFeedFMChillIcon() {
    return cy.get('button[data-test="MusicPlayer-ChillStation-Button"] img');
  }

  /**
   *  [FEEDFM] Returns Chill FeedFM Now playing text
   */
  getFeedFMChillNowPlayingText() {
    return cy
      .get('button[data-test="MusicPlayer-ChillStation-Button"]')
      .parent()
      .parent()
      .contains("Now playing", { matchcase: false });
  }

  /**
   *  [FEEDFM] Returns Throwback FeedFM button
   */
  getFeedFMThrowbackButton() {
    return cy.get('button[data-test="MusicPlayer-ThrowbackStation-Button"]');
  }

  /**
   *  [FEEDFM] Returns Throwback FeedFM Icon
   */
  getFeedFMThrowbackIcon() {
    return cy.get(
      'button[data-test="MusicPlayer-ThrowbackStation-Button"] img',
    );
  }

  /**
   *  [FEEDFM] Returns Throwback FeedFM Now playing text
   */
  getFeedFMThrowbackNowPlayingText() {
    return cy
      .get('button[data-test="MusicPlayer-ThrowbackStation-Button"]')
      .parent()
      .parent()
      .contains("Now playing", { matchcase: false });
  }

  /**
   *  Returns video player Close button
   */
  getCloseButton() {
    return cy.get('button[data-test="VideoPlayer-Close-Button"]');
  }
}
export default ZeldaVideoPage;
