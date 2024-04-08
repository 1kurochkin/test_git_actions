class SeriesDetailsPage {
  /**
   * Visits the /series/???????/
   *
   * Ex: seriesDetailsPage.visitSeriesDetailsPage('phase-and-function');
   */
  visitSeriesDetailsPage(seriesDetailsURL) {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/series/" + seriesDetailsURL,
      { failOnStatusCode: false },
    );
  }

  /**
   * Returns title
   */
  getTitle() {
    return cy.get('[data-test-id="get-title"]');
  }

  /**
   * Returns description
   */
  getDescription() {
    return cy.get('[data-test-id="get-description"] > p');
  }

  /**
   * Returns Trainers section.
   */
  getTrainersSection() {
    return cy.get('[data-test-id="get-trainers-section"]');
  }

  /**
   * Returns Equipmen Used section.
   */
  getEquipmentUsedSection() {
    return cy.get('[data-test-id="get-equipment-used-section"]');
  }

  /**
   * Returns Class Types section.
   */
  getClassTypesSection() {
    return cy.get('[data-test-id="get-class-types-section"]');
  }

  /**
   * Returns Focus section.
   */
  getFocusSection() {
    return cy.get('[data-test-id="get-focus-section"]');
  }

  /**
   * Returns Your Next Workout section.
   */
  getNextWorkoutSection() {
    return cy.get('[data-test-id="get-next-workout-section"]');
  }

  /**
   * Returns Your Next Workout section.
   */
  getOverallProgressSection() {
    return cy.get('[data-test-id="get-overall-progress-section"]').parent();
  }

  /**
   * Returns the Join This Series button.
   */
  getBodyJoinThisSeriesButton() {
    return cy.get(
      'button[data-app-button-name="HeroBannerTop-JoinSeries-Button"]',
    );
  }

  /**
   * Returns the Leave This Series button.
   */
  getBodyLeaveThisSeriesButton() {
    return cy.get(
      'button[data-app-button-name="HeroBannerTop-LeaveSeries-Button"]',
    );
  }

  /**
   * Returns the Confirm Leave Series button.
   */
  getConfirmLeaveThisSeriesButton() {
    return cy.get('[data-test-id="get-confirm-leave-series-button"]');
  }

  /**
   * Returns the first product link in Equipment Used section.
   */
  getBodyEquipmentUsedFirstProductLink() {
    return cy
      .get(
        'div[class*="equipment-used-module"] a[href*="pvolve.com/products/"]',
      )
      .eq(0);
  }

  /**
   * Returns first card class title button
   */
  getFirstWorkoutTitle() {
    return cy
      .get(
        "div[data-test='Classes-SeriesClassCard'] [data-test-id='workout-card-title']",
      )
      .first();
  }

  /**
   * Returns Suggested Schedule container
   */
  getSuggestedScheduleTitle() {
    return cy.get('[data-test-id="get-suggested-schedule-title"]');
  }

  /**
   * Returns Related Content container
   */
  getRelatedContentTitle() {
    return cy.get('[data-test-id="get-related-content"]');
  }

  /**
   * Returns Talks container
   */
  getTalksContainer() {
    return cy.get('[data-test="get-related-content-talks-container"]');
  }
}
export default SeriesDetailsPage;
