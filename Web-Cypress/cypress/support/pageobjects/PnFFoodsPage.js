class PnFFoods {
  /**
   * Visits the Foods Page
   */
  visitFoodsPage(phase) {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/foods/" + phase, {
      failOnStatusCode: false,
    });
  }

  /**
   * Returns the Foods header
   */
  getFoodsHeaderText() {
    return cy.get(
      'div[class*="display-column justifyContent-center padding-left--large"] h1',
    );
  }

  /**
   * Returns the Background
   */
  getBackgroundColor(phase) {
    return cy.get('div[class*="bgcolor-pv-' + phase + '"]');
  }

  /**
   * Returns the Foods Icon
   */
  getFoodsIcon() {
    return cy.get('div[class*="phase-header-info-title"] i[class*="pv-icon"]');
  }

  /**
   * Returns the Foods Description Text
   */
  getFoodsDescriptionText() {
    return cy.get('p[class*="p1 phase-foods-layout-module"]');
  }

  /**
   * Returns the right arrow for the foods page
   */
  getRightArrowLink() {
    return cy.get('a[class*="pv-arrow-right"][href*="/foods/"]');
  }

  /**
   * Returns the Left arrow for the foods page
   */
  getLeftArrowLink() {
    return cy.get('a[class*="pv-arrow-left"][href*="/foods/"]');
  }

  /**
   * Returns the Carbs tab
   */
  getCarbsTab() {
    return cy.get('div[class*="ui pointing secondary menu"').find("a").eq(0);
  }

  /**
   * Returns the Proteins tab
   */
  getProteinsTab() {
    return cy.get('div[class*="ui pointing secondary menu"').find("a").eq(1);
  }

  /**
   * Returns the Fats tab
   */
  getFatsTab() {
    return cy.get('div[class*="ui pointing secondary menu"').find("a").eq(2);
  }

  /**
   * Returns the Extras tab
   */
  getExtrasTab() {
    return cy.get('div[class*="ui pointing secondary menu"').find("a").eq(3);
  }

  /**
   * Returns the Avoid tab
   * Note: this tab does not currently exist on the Follicular Foods page
   */
  getAvoidTab() {
    return cy.get('div[class*="ui pointing secondary menu"').find("a").eq(4);
  }

  /**
   * Returns the first header text shown under the tabs
   * Note: This does not change if the selected tab changes
   */
  getFirstHeaderText() {
    return cy.get(
      'div[class*="tabs-module--tabs-content"] h2[class="bold upper"]',
    );
  }

  /**
   * Returns the pie chart image
   */
  getFoodsPieChartImage() {
    return cy.get(
      'div[class*="justifyContent-center"] img[class*="phase-foods-pie"]',
    );
  }

  /**
   * Returns the Tool Tip header text
   */
  getHowUseToolTipHeaderText() {
    return cy.get('div[class*="tooltip-module--tooltip-container"]');
  }

  /**
   * Returns the Tool Tip Content text
   * Note: this will not be visible unless the mouse is over the header
   */
  getToolTipContentText() {
    return cy.get('div[class*="tooltip-text-container"]');
  }

  /**
   * Returns the Weight Loss header text
   */
  getWeightLossHeaderText() {
    return cy.get(
      'div[class*="phase-foods-weight"] h2[class*="phase-foods-weight-title"]',
    );
  }

  /**
   * Returns the Weight Loss content text
   */
  getWeightLossContentText() {
    return cy.get(
      'div[class*="phase-foods-weight"] p[class*="phase-foods-weight-text"]',
    );
  }

  /**
   * Returns the Download PDF Link
   */
  getDownloadPDFLink() {
    return cy.get(
      'div[class*="border-block-with-button"] a[href*=".pdf"][class*="ui big button"]',
    );
  }

  /**
   * Returns the Details link
   */
  getDetailsLink(phase) {
    return cy.get(
      'div[class*="widget-icon-module"] a[href="/more-about/' + phase + '"]',
    );
  }

  /**
   * Returns the Library link
   */
  getLibraryLink(phase) {
    return cy.get(
      'div[class*="widget-icon-module"] a[href="/series/chapters/' +
        phase +
        '-phase"]',
    );
  }

  /**
   * Returns the Meals link
   */
  getMealsLink(phase) {
    return cy.get(
      'div[class*="widget-icon-module"] a[href="/meals/' + phase + '"]',
    );
  }
}
export default PnFFoods;
