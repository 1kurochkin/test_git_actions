class AllSeriesPage {
  /**
   * Visits the All Series page
   */
  visitPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/series/categories/all-series",
    );
  }

  /**
   * Returns the number of series text
   */
  getNumberOfSeriesText() {
    return cy
      .get('div[class*="ui container grid"] p[class="p3"]')
      .contains(" Series");
  }

  /**
   * Returns the All Series Header
   */
  getAllSeriesHeader() {
    return cy
      .get('div[class*="ui container grid"] h2')
      .contains("All Series", { matchCase: false });
  }

  /**
   * Returns each series card.
   */
  getAllSeriesCards() {
    return cy.get('a[class*="ui fluid card"]');
  }
}
export default AllSeriesPage;
