class SeriesPage {
  /**
   * Visits the Series page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/series");
  }

  /**
   * Returns title
   * TODO: update locator
   */
  getTitle() {
    return cy.get("h2").contains("Series", { matchCase: false });
  }

  /**
   * Returns Each Category.
   */
  getBodyEachCategory() {
    return cy.get("section");
  }

  /**
   * Returns the first Category Carousel Back Button
   */
  getBodyFirstCategoryCarouselBackButton() {
    return cy.get("section").eq(0).find("button > svg").first();
  }

  /**
   * Returns the first Category Carousel Next Button
   */
  getBodyFirstCategoryCarouselNextButton() {
    return cy.get("section").eq(0).find("button > svg").last();
  }

  /**
   * Returns the first Series of the first Category
   */
  getBodyFirstCategoryFirstSeriesLink() {
    return this.getBodyCategorySeriesLink(0, 0);
  }

  /**
   * Returns the second Series of the first Category
   */
  getBodyFirstCategorySecondSeriesLink() {
    return this.getBodyCategorySeriesLink(0, 1);
  }

  /**
   * Returns the See All Series A-Z Link
   */
  getBodySeeAllSeriesAZLink() {
    return cy.get("button").contains("See All", { matchCase: false });
  }

  /**
   *
   * Returns series link from specific section
   */
  getBodyCategorySeriesLink(sectionIndexNumber, seriesCardNumber) {
    return cy
      .get("section")
      .eq(sectionIndexNumber)
      .find('div[data-test="Classes-SeriesCard"] h5')
      .eq(seriesCardNumber);
  }
}
export default SeriesPage;
