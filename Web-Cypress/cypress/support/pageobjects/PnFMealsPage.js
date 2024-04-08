class PnFMeals {
  /**
   * Visits the Meals Page
   */
  visitMealsPage(phase) {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/meals/" + phase, {
      failOnStatusCode: false,
    });
  }

  /**
   * Returns the Meals header
   */
  getMealsHeaderText() {
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
   * Returns the Meals Icon
   */
  getMealsIcon() {
    return cy.get('div[class*="phase-header-info-title"] i[class*="pv-icon"]');
  }

  /**
   * Returns the Meals Description Text
   */
  getMealsDescriptionText() {
    return cy.get('p[class*="p1 phase-meals-layout-module"]');
  }

  /**
   * Returns the Foods List link in the Meals Description
   */
  getFoodsListLink(phase) {
    return cy
      .get('p[class*="p1 phase-meals-layout-module"]')
      .find('a[href="/foods/' + phase + '"]');
  }

  /**
   * Returns the right arrow for the meals page
   */
  getRightArrowLink() {
    return cy.get('a[class*="pv-arrow-right"][href*="/meals/"]');
  }

  /**
   * Returns the Left arrow for the meals page
   */
  getLeftArrowLink() {
    return cy.get('a[class*="pv-arrow-left"][href*="/meals/"]');
  }

  /**
   * Returns the Breakfast tab
   */
  getBreakfastTab() {
    return cy.get('div[class*="ui pointing secondary menu"').find("a").eq(0);
  }

  /**
   * Returns the Lunch tab
   */
  getLunchTab() {
    return cy.get('div[class*="ui pointing secondary menu"').find("a").eq(1);
  }

  /**
   * Returns the Dinner tab
   */
  getDinnerTab() {
    return cy.get('div[class*="ui pointing secondary menu"').find("a").eq(2);
  }

  /**
   * Returns the First header of the shown meals
   * Note: This does not change if the selected tab changes
   */
  getMealsTabFirstMealLink() {
    return cy.get('div[class*="tabs-module--tabs-content"] h4').eq(0).find("a");
  }

  /**
   * Returns the Second header of the shown meals
   * Note: This does not change if the selected tab changes
   */
  getMealsTabSecondMealLink() {
    return cy.get('div[class*="tabs-module--tabs-content"] h4').eq(1).find("a");
  }

  /**
   * Returns the Third header of the shown meals
   * Note: This does not change if the selected tab changes
   */
  getMealsTabThirdMealLink() {
    return cy.get('div[class*="tabs-module--tabs-content"] h4').eq(2).find("a");
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
   * Returns the Foods link
   */
  getFoodsLink(phase) {
    return cy.get(
      'div[class*="widget-icon-module"] a[href="/foods/' + phase + '"]',
    );
  }
}
export default PnFMeals;
