class HomePage {
  /**
   * Visits the Home page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/home");
  }

  /**
   * Returns title
   */
  getTitle() {
    return cy.get('[data-test-id="home-page-title"]');
  }

  /**
   * Returns fist series name
   */
  getFirstSeriesWorkoutsCompleted() {
    return cy.get('[data-test-id="series-enrollment-progress-title"]');
  }

  /**
   * Returns fist series name
   */
  getFirstSeriesName() {
    return cy.get('[data-test-id="series-name"]');
  }

  /**
   * Returns workout cards from series
   */
  getWorkoutCardsFromSeries() {
    return cy.get("div[data-test='Classes-SeriesClassCard']");
  }

  /**
   * Returns workout card container
   */
  getWorkoutCardFromSeries(index) {
    return this.getWorkoutCardsFromSeries().eq(index);
  }

  /**
   * Returns first workout card title button
   */
  getFirstWorkoutTitleFromSeries() {
    return this.getWorkoutCardsFromSeries().find("h6").first();
  }

  /**
   * Returns last workout workout title button from series
   */
  getLastWorkoutTitleFromSeries() {
    return this.getWorkoutCardsFromSeries().find("h6").last();
  }

  /**
   * Returns first card workout title button
   */
  getFirstWorkoutFavoriteButtonFromSeries() {
    return this.getWorkoutCardsFromSeries()
      .find("button[data-test='SeriesClassCard-Favorite-Button']")
      .first();
  }

  /**
   * Returns first card workout circle button
   */
  getFirstWorkoutCircleButtonFromSeries() {
    return this.getWorkoutCardsFromSeries()
      .find("svg[data-testid='CheckOutlinedIcon']")
      .first();
  }

  /**
   * Returns workout cards from series
   */
  getWorkoutCards() {
    return cy.get('div[data-test="Classes-ClassCard"');
  }

  /**
   * Returns first card workout title button
   */
  getFirstClassTitle() {
    return cy.get('[data-test-id="workout-card-title"]').first();
  }

  /**
   * Returns first favorite workout
   */
  getFirstFavoriteWorkout() {
    return cy
      .get(
        '[data-test-id="favorites-container"] [data-test-id="workout-card-title"]',
      )
      .first();
  }

  /**
   * Returns no favorites yet label
   */
  getNoFavoritesFromFavoriteSection() {
    return cy.get('svg[data-testid="FavoriteRoundedIcon"]').next();
  }

  /**
   * Returns on demand stats label
   */
  getOnDemandStatsLabel() {
    return cy.get('[data-test-id="get-on-demand-stats-label"]');
  }

  /**
   * Returns lvs stats label
   */
  getLvsStatsLabel() {
    return cy.get('[data-test-id="get-lvs-stats-label"]');
  }

  /**
   * Returns hours stats label
   */
  getHoursStatsLabel() {
    return cy.get('[data-test-id="get-hours-stats-label"]');
  }

  /**
   * Returns calendar container
   */
  getWeeklyCalendarContainer() {
    return cy.get('[data-test-id="get-weekly-calendar"]');
  }

  /**
   * Returns start series buttons
   */
  getStartSeriesButtons() {
    return cy.get('[data-app-button-name*="StartSeries-Button"]');
  }

  /**
   * Returns manage workouts button
   */
  getManageWorkoutsButton() {
    return cy.get('[data-test-id="get-manage-workouts-button"]');
  }

  /**
   * Returns leave from series button
   */
  getLeaveFromSeriesButton() {
    return cy.get('[data-test-id="get-leave-from-series-button"]');
  }

  /**
   * Returns confirm leave from series button
   */
  getConfirmLeaveFromSeriesButton() {
    return cy.get('[data-test-id="get-confirm-leave-series-button"]');
  }

  /**
   * Retrieves all days of week with completed workout
   */
  getDaysOfWeekWithCompletedWorkout() {
    return cy.get('[data-testid="CheckIcon"]');
  }

  /**
   * Retrieves day of week with latest completed workout
   */
  getDayOfWeekWithLatestCompletedWorkout() {
    return cy.get('[data-testid="CheckIcon"]').last();
  }

  /**
   * Retrieves titles of latest completed workout after hovering
   */
  getDayOfWeekWithLatestCompletedWorkoutTitle() {
    return cy.get('[id="mouse-over-all-stats-popover"] h6');
  }
}

export default HomePage;
