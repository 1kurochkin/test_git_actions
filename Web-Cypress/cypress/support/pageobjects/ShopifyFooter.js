class ShopifyFooter {
  /**
   * Returns footer container
   */
  getFooter() {
    return cy.get('div[id="shopify-section-footer"]');
  }
}
export default ShopifyFooter;
