class CheckoutPage {
  /**
   * Visits the page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/checkout");
  }

  /**
   * Returns payment buttons section
   */
  getCheckoutMainContent() {
    return cy.get('[id="checkout-main"]');
  }

  /**
   * Returns first bundle object
   */
  getFirstBundleItem() {
    return this.getProducts().contains("Bundle", { matchCase: false }).first();
  }

  /**
   * Returns first streaming object
   */
  getFirstStreamingItem() {
    return this.getProducts()
      .contains("Digital Membership", { matchCase: false })
      .first();
  }

  /**
   * Returns return to cart link
   * TODO: Update locator
   */
  getReturnToCartLink() {
    return cy.get('[id="cart-link"]').first();
  }

  /**
   * Returns products
   * TODO: Update locator
   */
  getProducts() {
    return cy.get('[role="table"] [role="row"] [role="cell"] p');
  }

  getAfterpayCollapsible() {
    return cy.get('[id="basic-Afterpay-collapsible"]');
  }

  getPaypalCollapsible() {
    return cy.get('[id="basic-PAYPAL_EXPRESS-collapsible"]');
  }

  getCreditCardsCollapsible() {
    return cy.get('[id="basic-creditCards-collapsible"]');
  }
}
export default CheckoutPage;
