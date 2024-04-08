class PnFRecipe {
  /**
   * Visits the Recipe page
   */
  visitRecipePage(phase, recipe) {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/recipe/" + phase + "/" + recipe,
      { failOnStatusCode: false },
    );
  }

  /**
   * Returns the Phase Meals page link
   */
  getBackToPhaseMealsPageLink(phase) {
    return cy.get(
      'div[class*="phase-recipe-back"] a[href="/meals/' + phase + '"]',
    );
  }

  /**
   * Returns the Recipe Title text
   */
  getRecipeTitleText() {
    return cy.get('div[class*="hero-children"]');
  }

  /**
   * Returns the Recipe Image
   */
  getRecipeImage() {
    return cy.get(
      'div[class*="hero-with-image-module"] div[style*="background-image"',
    );
  }

  /**
   * Returns the Ingredients Title text
   */
  getIngredientsTitleText() {
    return cy.get('div[class*="wide column"] h3[class*="bold upper margin"');
  }

  /**
   * Returns the Ingredients Sub Title text
   */
  getIngredientsSubTitleText() {
    return cy.get('div[class*="wide column"] h4[class*="phase-recipe-serving"');
  }

  /**
   * Returns the list of Ingredients
   */
  getIngredientsList() {
    return cy
      .get('div[class*="wide column"]')
      .eq(0)
      .find('div[class*="icon-list-item"]');
  }

  /**
   * Returns the Directions Title text
   */
  getDirectionsTitleText() {
    return cy.get('div[class*="wide column"] h3[class*="bold upper"');
  }

  /**
   * Returns the list of Directions
   */
  getDirectionsList() {
    return cy
      .get('div[class*="phase-recipe-directions"]')
      .find('div[class*="icon-list-item"]');
  }

  /**
   * Returns the next recipe text
   */
  getNextRecipeText() {
    return cy.get(
      'div[class*="phase-recipe-next"] p[class*="phase-recipe-next-text"]',
    );
  }

  /**
   * Returns the next recipe link
   */
  getNextRecipeLink(phase) {
    return cy.get(
      'div[class*="phase-recipe-next"] a[href*="/recipe/' + phase + '/"]',
    );
  }
}
export default PnFRecipe;
