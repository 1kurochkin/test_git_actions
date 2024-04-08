class FallChallengeStatsPage {
  /**
   * Visits the page
   */
  visitPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/challenge/2022-fall-challenge",
    );
  }

  /**
   * Returns the Welcome header
   */
  getWelcomeHeader() {
    return cy.get('div[class*="MuiBox-root"] h2');
  }

  /**
   * Returns the Welcome sub header
   */
  getWelcomeSubHeader() {
    return cy.get('div[class*="MuiBox-root"] h5');
  }

  /**
   * Returns the Challenge Workouts header
   */
  getChallengeWorkoutsHeader() {
    return cy
      .get('div[class*="MuiContainer-root"] div[class*="MuiContainer-root"] h4')
      .contains("Challenge Workouts");
  }

  /**
   * Returns the Challenge Workouts paragraph
   */
  getChallengeWorkoutsParagraph() {
    return cy.get(
      'div[class*="MuiContainer-root"] div[class*="MuiContainer-root"] p',
    );
  }

  /**
   * Returns the week header for the entered week
   *
   * getWeekHeader(0) returns the first week header.
   */
  getWeekHeader(week) {
    return cy
      .get(
        'div[class*="MuiContainer-root"] div[class*="MuiContainer-root"] div[class*="css-vrbak5"]',
      )
      .eq(week)
      .find("h6")
      .eq(0);
  }

  /**
   * Returns the first workout for the entered week
   *
   * getFirstWorkoutForWeek(0) returns the first workout of week 1.
   */
  getFirstWorkoutForWeek(week) {
    return cy
      .get(
        'div[class*="MuiContainer-root"] div[class*="MuiContainer-root"] div[class*="css-vrbak5"]',
      )
      .eq(week)
      .find('div[class="css-9ifc9c"]')
      .eq(0);
  }

  /**
   * Returns the Second workout for the entered week
   *
   * getSecondWorkoutForWeek(0) returns the second workout of week 1.
   */
  getSecondWorkoutForWeek(week) {
    return cy
      .get(
        'div[class*="MuiContainer-root"] div[class*="MuiContainer-root"] div[class*="css-vrbak5"]',
      )
      .eq(week)
      .find('div[class="css-9ifc9c"]')
      .eq(1);
  }

  /**
   * Returns the Third workout for the entered week
   *
   * getThirdWorkoutForWeek(0) returns the third workout of week 1.
   */
  getThirdWorkoutForWeek(week) {
    return cy
      .get(
        'div[class*="MuiContainer-root"] div[class*="MuiContainer-root"] div[class*="css-vrbak5"]',
      )
      .eq(week)
      .find('div[class="css-9ifc9c"]')
      .eq(2);
  }

  /**
   * Returns the FAQ Section
   */
  getFAQSection() {
    return cy
      .get(
        'div[class*="MuiContainer-root"] div[class*="MuiContainer-root"] div h4',
      )
      .contains("FAQ's");
  }
}
export default FallChallengeStatsPage;
