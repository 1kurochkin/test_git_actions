class FavoriteWorkoutSeeAllPage {
  /**
   * Visits the Favorite Workouts See All page.
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/workouts/favorites");
  }

  /**
   * [WORKOUTS] TITLE.
   */
  getWorkoutsTitle() {
    return cy
      .get('div[class="left floated ten wide column"]')
      .contains("Favorites");
  }

  /**
   * [WORKOUTS] WORKOUTS TEXT AND NUMBER.
   */
  getNumberOfWorkoutsText() {
    return cy
      .get('div[class="right aligned right floated six wide column"]')
      .contains("Workout");
  }

  /**
   * [WORKOUTS] WORKOUTS TITLE AND NUMBER.
   */
  getCardGridWrapper() {
    return cy.get('div [class*="card-grid-wrapper-module--grid--"]');
  }

  /**
   * [WORKOUTS] GET ALL WORKOUT CARDS.
   */
  getAllWorkoutsCards() {
    return cy.get('div[class="ui fluid card"]');
  }

  /**
   * [WORKOUTS] GET FIRST WORKOUT CARD.
   */
  getFirstWorkoutCard() {
    return cy.get('div[class="ui fluid card"]').eq(0);
  }

  /**
   * [WORKOUTS] GET SECOND WORKOUT CARD.
   */
  getSecondWorkoutCard() {
    return cy.get('div[class="ui fluid card"]').eq(1);
  }

  /**
   * [WORKOUTS] GET THIRD WORKOUT CARD.
   */
  getThirdWorkoutCard() {
    return cy.get('div[class="ui fluid card"]').eq(2);
  }

  /**
   * [WORKOUTS] GET FOURTH WORKOUT CARD.
   */
  getFourthWorkoutCard() {
    return cy.get('div[class="ui fluid card"]').eq(3);
  }

  /**
   * [WORKOUTS] GET FAVORITE BUTTON.
   */
  getFavoriteButton() {
    return cy
      .get('div[class="ui fluid card"]')
      .find('button[class*="favorite-button-module--favorite-button"]');
  }
}
export default FavoriteWorkoutSeeAllPage;
