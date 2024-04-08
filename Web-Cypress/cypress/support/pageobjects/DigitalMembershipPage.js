class DigitalMembershipPage {
  /**
   * Visits the Digital Membership page.
   */
  visitDigitalMembershipPage() {
    return cy.visit("/products/streaming-access", { failOnStatusCode: false });
  }

  /**
   * Returns 12 month Add to Cart button.
   */
  get12monthAddToCartButton() {
    return cy.get('a[data-cta-name="checkout-button"]').eq(0);
  }

  /**
   * Returns 1 month Add to Cart button.
   */
  get1monthAddToCartButton() {
    return cy.get('a[data-cta-name="checkout-button"]').eq(1);
  }

  /**
   * Returns 12 month membership link.
   */
  get12monthMembershipLink() {
    return cy.get('a[data-cta-name="checkout-button"]').eq(2);
  }

  /**
   * Returns 1 month membership link.
   */
  get1monthMembershipLink() {
    return cy.get('a[data-cta-name="checkout-button"]').eq(3);
  }

  /**
   *  Returns Membership In Cart Alert Pop-up.
   */
  getMembershipInCartAlert() {
    return cy.get('div[id="modal-new"]');
  }

  /**
   *  Returns Close button for Cart Alert Pop-up.
   */
  getMembershipInCartAlertCloseButton() {
    return cy.get('button[id="close-btn"]');
  }

  /**
   *  Returns View Cart button for Cart Alert Pop-up.
   */
  getMembershipInCartAlertViewCartButton() {
    return cy.get('div[id="modal-new"] a[href*="pvolve.com/cart"]');
  }

  /**
   *  Returns Text on Membership In Cart Alert Pop-up.
   */
  getMembershipInCartALertText() {
    return cy
      .get('span[class*="builder-text"]')
      .contains("cart already includes a membership", { matchCase: false });
  }
}
export default DigitalMembershipPage;
