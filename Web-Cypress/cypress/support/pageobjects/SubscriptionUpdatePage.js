class SubscriptionUpdatePage {
  /**
   * Visit the Subscription Update page
   */
  visitPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/account/subscription/update",
      { failOnStatusCode: false },
    );
  }

  /**
   * Returns the Close button at top right.
   */
  getCloseButton() {
    return cy.get('button[class*="square-close-button-module--closeButton"]');
  }

  /**
   * Returns the 12 Month Subscription radio.
   */
  get12MonthRadio() {
    return cy
      .get('div[class*="radio checkbox"]')
      .contains("12-month", { matchCase: false });
  }

  /**
   * Returns the 12 Month Subscription Price text.
   */
  get12MonthPriceText() {
    return cy
      .get('div[class*="upgrade-plan-module--plan-details"]')
      .contains("$95.88 every 12 months", { matchCase: false });
  }

  /**
   * Returns the 1 Month Subscription radio.
   */
  get1MonthRadio() {
    return cy
      .get('div[class*="radio checkbox"]')
      .contains("1-month", { matchCase: false });
  }

  /**
   * Returns the 1 Month Subscription Price text.
   */
  get1MonthPriceText() {
    return cy
      .get('div[class*="upgrade-plan-module--plan-details"]')
      .contains("$19.99 a month", { matchCase: false });
  }

  /**
   * Returns the Promo Code field.
   */
  getPromoCodeField() {
    return cy.get('input[id="promoCode"]');
  }

  /**
   * Returns the Apply button for the Promo Code.
   */
  getApplyPromoCodeButton() {
    return cy
      .get('div[class*="promo-button"]')
      .contains("Apply", { matchCase: false });
  }

  /**
   * Returns the Save Plan button.
   */
  getSavePlanButton() {
    return cy.get("button").contains("Save Plan", { matchCase: false });
  }

  /**
   * Returns the Yes, I Agree button in the popup agreement.
   */
  getPopupYesIAgreeButton() {
    return cy.get("button").contains("YES, I AGREE", { matchCase: false });
  }

  /**
   * Returns the No, Take Me Back button in the popup agreement.
   */
  getPopupNoTakeMeBackButton() {
    return cy.get("button").contains("No, take me back", { matchCase: false });
  }
}
export default SubscriptionUpdatePage;
