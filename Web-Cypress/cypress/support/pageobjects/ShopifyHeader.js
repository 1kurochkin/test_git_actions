class ShopifyHeader {
  /**
   * Returns header container
   */
  getHeader() {
    return cy.get('div[id="main-header"]');
  }

  /**
   *
   * Returns shop button from menu
   */
  getShopButton() {
    return cy.get('li[x-data*="showshopDropdown "] > span');
  }

  /**
   * Returns our method link from menu
   */
  getOurMethod() {
    return cy.get('a[data-cta-name="primarynav-our-method"]');
  }

  /**
   * Returns bundle link submenu from shop button
   * Only visible after clicking/hovering shop button
   */
  getBundles() {
    return cy.get('a[data-cta-name="primarynav-bundles"]');
  }

  /**
   * Returns equipment link submenu from shop button
   * Only visible after clicking/hovering shop button
   */
  getEquipment() {
    return cy.get('a[data-cta-name="primarynav-equipment"]');
  }

  /**
   * Returns main content
   */
  getCloseButtonFromMiniCart() {
    return cy.get('[data-cta-name="close-cart"');
  }
}
export default ShopifyHeader;
