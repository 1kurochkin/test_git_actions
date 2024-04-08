class CancelPage {
  /**
   * Visit the Cancel Subscription page
   */
  visitPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/account/subscription/cancel",
      { failOnStatusCode: false },
    );
  }

  /**
   * Returns the Close button.
   */
  getCloseButton() {
    return cy.get('button[class*="square-close-button-module"]');
  }

  /**
   * Returns the Contact button on page 1.
   */
  getContactButton() {
    return cy
      .get('a[href*="/pages/contact"]')
      .contains("CONTACT CUSTOMER SERVICE", { matchCase: false });
  }

  /**
   * Returns the Schedule Free Trainer Session button on page 1.
   */
  getScheduleTrainerButton() {
    return cy
      .get('a[href*="calendly.com/pvolve"]')
      .contains("SCHEDULE FREE TRAINER SESSION", { matchCase: false });
  }

  /**
   * Returns the 'No thanks, cancel my membership' link on page 1.
   */
  getCancelSubscriptionLink() {
    return cy
      .get('a[class*="cancel-subscription-module"]')
      .contains("No thanks, cancel my membership.", { matchCase: false });
  }

  /**
   * Returns the Cancel Anyway button on page 2.
   */
  getCancelAnywayButton() {
    return cy
      .get('button[class*="negative button"]')
      .contains("CANCEL ANYWAY", { matchCase: false });
  }

  /**
   * Returns the 'Nevermind! I want to keep working out.' link on page 2.
   */
  getNevermindLink() {
    return cy
      .get('a[class*="cancel-subscription-module"]')
      .contains("Nevermind! I want to keep working out.", { matchCase: false });
  }
}
export default CancelPage;
