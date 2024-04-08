class NewWorkoutsPage {
  /**
   * Visits the /workouts/new page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/workouts/new");
  }

  /**
   * [NEW WORKOUTS] TITLE.
   */
  getNewWorkoutsTitle() {
    return cy
      .get('div[class="left floated ten wide column"]')
      .contains("New Workouts");
  }

  /**
   * [NEW WORKOUTS] WORKOUTS TEXT AND NUMBER.
   */
  getNumberOfWorkoutsText() {
    return cy
      .get('div[class="right aligned right floated six wide column"]')
      .contains("Workout");
  }

  /**
   * [NEW WORKOUTS] WORKOUTS TITLE AND NUMBER.
   */
  getCardGridWrapper() {
    return cy.get('div [class*="card-grid-wrapper-module--grid--"]');
  }

  /**
   * [NEW WORKOUTS] GET ALL WORKOUT CARDS.
   */
  getAllWorkoutsCards() {
    return cy.get('div[class="ui fluid card"]');
  }

  /**
   * [NEW WORKOUTS] GET FIRST WORKOUT CARD.
   */
  getFirstWorkoutCard() {
    return cy.get('div[class="ui fluid card"]').eq(0);
  }

  /**
   * [NEW WORKOUTS] GET SECOND WORKOUT CARD.
   */
  getSecondWorkoutCard() {
    return cy.get('div[class="ui fluid card"]').eq(1);
  }

  /**
   * [NEW WORKOUTS] GET THIRD WORKOUT CARD.
   */
  getThirdWorkoutCard() {
    return cy.get('div[class="ui fluid card"]').eq(2);
  }

  /**
   * [NEW WORKOUTS] GET FOURTH WORKOUT CARD.
   */
  getFourthWorkoutCard() {
    return cy.get('div[class="ui fluid card"]').eq(3);
  }

  /**
   * [NEW WORKOUTS][CARDS] Returns the 30 min Full Body Definition Card.
   */
  get30minFullBodyDefinitionCard() {
    return cy
      .get('div[class*="header workout-card-module--header"]')
      .contains("30 min Full Body Definition");
  }

  /**
   * [NEW WORKOUTS][CARDS] Returns the 20 min lower body sculpt card.
   */
  get20MinLowerBodySculptCard() {
    return cy
      .get('div[class*="header workout-card-module--header"]')
      .contains("20 min lower body sculpt");
  }

  /**
   * [NEW WORKOUTS][CARDS] Returns the 15 Min Upper Body Sculpt card.
   */
  get15MinUpperBodySculptCard() {
    return cy
      .get('div[class*="header workout-card-module--header"]')
      .contains("15 Min Upper Body Sculpt");
  }

  /**
   * [NEW WORKOUTS][CARDS] Returns the 15 Min Lower Body Burn card.
   */
  get15MinLowerBodyBurnCard() {
    return cy
      .get('div[class*="header workout-card-module--header"]')
      .contains("15 Min Lower Body Burn");
  }

  /**
   * [NEW WORKOUTS][CARDS] Returns the 55 Min Full Body Sculpt card.
   */
  get55MinFullBodySculptCard() {
    return cy
      .get('div[class*="header workout-card-module--header"]')
      .contains("55 Min Full Body Sculpt");
  }

  /**
   * [NEW WORKOUTS][CARDS] Returns the 20 Min Full Body Sculpt card.
   */
  get20MinFullBodySculptCard() {
    return cy
      .get('div[class*="header workout-card-module--header"]')
      .contains("20 Min Full Body Sculpt");
  }

  /**
   * [NEW WORKOUTS][CARDS] Returns the 30 Min Lower Body Sculpt card.
   */
  get30MinLowerBodySculptCard() {
    return cy
      .get('div[class*="header workout-card-module--header"]')
      .contains("30 Min Lower Body Sculpt");
  }
}
export default NewWorkoutsPage;
