class PnFResultsPage {
  /**
   * Visits the Results page
   */
  visitResultsPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/welcome/phase-and-function",
      { failOnStatusCode: false },
    );
  }

  /**
   * Returns the Edit my Cycle button.
   */
  getEditMyCycleLink() {
    return cy.get(
      'div[class*="first-details-row"] a[href="/questionnaires/phase-and-function/edit-my-cycle"]',
    );
  }

  /**
   * Returns the Phase Header.
   */
  getPhaseHeader() {
    return cy.get(
      'div[class*="first-details-row"] span[class*="current-phase-underline"]',
    );
  }

  /**
   * Returns the More About [Phase] link.
   */
  getPhaseMoreAboutLink(phase) {
    return cy.get(
      'div[class*="more-about-row"] a[href*="/more-about/' + phase + '"]',
    );
  }

  /**
   * Returns the Go To My Plan link.
   */
  getGoToMyPlanLink() {
    return cy.get('div[class*="getting-started-row"] a[href="/my-plan"]');
  }

  /**
   * Returns the Menstrual Progress Bar.
   */
  getMenstrualProgressBar() {
    return cy.get(
      'div[class*="progress-bar-module"][class*="bgcolor-pv-menstrual"]',
    );
  }

  /**
   * Returns the Follicular Progress Bar.
   */
  getFollicularProgressBar() {
    return cy.get(
      'div[class*="progress-bar-module"][class*="bgcolor-pv-follicular"]',
    );
  }

  /**
   * Returns the Ovulatory Progress Bar.
   */
  getOvulatoryProgressBar() {
    return cy.get(
      'div[class*="progress-bar-module"][class*="bgcolor-pv-ovulatory"]',
    );
  }

  /**
   * Returns the Luteal Progress Bar.
   */
  getLutealProgressBar() {
    return cy.get(
      'div[class*="progress-bar-module"][class*="bgcolor-pv-luteal"]',
    );
  }
}
export default PnFResultsPage;
