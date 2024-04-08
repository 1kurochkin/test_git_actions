class ClassesPanePage {
  /**
   * Visits the entered Classes Pane page
   *
   * Example slug: '20-min-booty-sculpt-159172'
   *   this navigates to /classes/details/20-min-booty-sculpt-159172
   */
  visitPage(slug) {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/classes/detail/" + slug);
  }

  /**
   * Visits the entered Classes Pane page
   *
   * Example slug: '20-min-booty-sculpt-159172'
   *   this navigates to /classes/details/20-min-booty-sculpt-159172
   */
  visitPageFromHome(slug) {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/home/detail/" + slug);
  }

  /**
   *  Returns the Play Video button
   */
  getPlayVideoButton() {
    return cy.get('svg[data-test="WorkoutDetailsPane-Play-Button"]');
  }

  /**
   *  Returns the Close Pane button
   */
  getClosePaneButton() {
    return cy.get('button[data-test="WorkoutDetailsPane-Close-Button"]');
  }

  /**
   *  Returns the Class Duration
   */
  getClassDuration() {
    return cy.get('[data-test-id="class-duration"]');
  }

  /**
   *  Returns the Class Duration time
   * TODO: Update locator
   */
  getClassDurationTime() {
    return this.getClassDuration().next();
  }

  /**
   *  Returns the Favorite button
   */
  getDateOfReleaseButton() {
    return cy.get('[data-test-id="workout-release-date"]');
  }

  /**
   *  Returns the Favorite button
   */
  getFavoriteButton() {
    return cy.get('button[data-test="WorkoutDetailsPane-Favorite-Button"]');
  }

  /**
   *  Returns the Trainer's picture
   */
  getTrainersPicture() {
    return cy.get('[data-test-id="avatar"] > img');
  }

  /**
   * Returns the Trainer's namer
   */
  getTrainersName() {
    return cy.get('[data-test-id="avatar-trainers"] > [data-test-id="name"]');
  }

  /**
   *  Returns the Class name header
   */
  getClassNameHeader() {
    return cy.get('[data-test-id="workout-name"]');
  }

  /**
   *  Returns the About section header
   */
  getAboutSectionHeader() {
    return cy.get('[data-test-id="about"]');
  }

  /**
   *  Returns the Class Breakdown section header
   */
  getClassBreakdownSectionHeader() {
    return cy.get('[data-test-id="class-breakdown"]');
  }

  /**
   *  Returns the Pacing section header
   */
  getPacingSectionHeader() {
    return cy.get('[data-test-id="pacing"]');
  }

  /**
   *  Returns the Equipment section header
   */
  getEquipmentSectionHeader() {
    return cy.get('[data-test-id="equipment"]');
  }

  /**
   *  Returns the Focus section header
   */
  getBodyFocusSectionHeader() {
    return cy.get('[data-test-id="body-focus"]');
  }

  /**
   *  Returns the Collections section header
   */
  getCollectionsSectionHeader() {
    return cy.get('[data-test-id="collections"]');
  }
}
export default ClassesPanePage;
