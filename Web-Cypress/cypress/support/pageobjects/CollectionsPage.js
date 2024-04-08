class CollectionsPage {
  /**
   * Visits the page
   */
  visitPage() {
    return cy.visit("/collections/all");
  }

  /**
   * Visit bundles collections
   */
  visitBundlesPage() {
    return cy.visit("/collections/bundles");
  }

  /**
   * Returns title
   */
  getTitle() {
    return cy.get('[id*="product-comparison"] h2');
  }

  /**
   * Returns section title
   * TODO: Update locator
   */
  getSectionTitle() {
    return cy.get('h1[class*="uppercase"]');
  }

  /**
   * Returns signature bundle link
   * TODO: Update locator
   */
  getSignatureBundle() {
    return cy
      .get('a[href*="signature-bundle"]')
      .contains("Signature", { matchCase: true });
  }

  /**
   * Returns signature bundle total price
   * TODO: Update locator
   */
  getSignatureBundleTotalPrice() {
    return this.getSignatureBundle()
      .parentsUntil('[class*="section-white"]')
      .find('p[class*="text-base"], p[class*="line-through"]');
  }

  /**
   * Returns total transformation bundle link
   * TODO: Update locator
   */
  getTotalTransformationBundle() {
    return cy
      .get('a[href*="total-transformation-bundle"]')
      .contains("Total Transformation", { matchCase: true });
  }

  /**
   * Returns total transformation bundle total price
   * TODO: Update locator
   */
  getTotalTransformationBundleTotalPrice() {
    return this.getTotalTransformationBundle()
      .parentsUntil('[class*="section-white"]')
      .find('p[class*="text-base"], p[class*="line-through"]');
  }

  /**
   * Returns streaming Membership Free bundle price
   * TODO: Update locator
   */
  getStreamingMembershipFreeBundlePrice() {
    return this.getTotalTransformationBundle()
      .parentsUntil('[class*="section-white"]')
      .find('p[class*="text-base"]');
  }

  /**
   * Returns product
   */
  getAllItems() {
    return cy.get('[class="card-title"]');
  }

  /**
   * Returns product title given its name
   */
  getProductByName(productName) {
    return cy
      .get('[class="card-title"]')
      .contains(productName, { matchCase: false });
  }
}

export default CollectionsPage;
