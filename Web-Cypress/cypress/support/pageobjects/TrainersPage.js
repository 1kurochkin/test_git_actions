class TrainersPage {
  /**
   * Visits Maeve Mcewen's trainer page
   */
  visitTrainerMaeveMcewenPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/trainers/maeve-mcewen");
  }

  /**
   * Returns the Name of the trainer.
   */
  getBodyTrainerNameText() {
    return cy.get(
      'div[class*="ten wide column padding--0"] h1[class="bold upper"]',
    );
  }

  /**
   * Returns the Bio of the trainer.
   */
  getBodyTrainerBioText() {
    return cy.get(
      'div[class*="ten wide column padding--0"] p[class="margin-right--large"]',
    );
  }

  /**
   * Returns the Image of the trainer.
   */
  getBodyTrainerImage() {
    return cy.get('div[class*="instructor-details-module--trainer-image"]');
  }

  /**
   * Returns the video preview image of the first card. If clicked, it will open the workout video directly.
   */
  getBodyFirstCardVideoLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(0)
      .find('i[class*="pv-icon pv-play"]');
  }
  /**
   * Returns the title/description container of the first card. If clicked, it will open the workout page associated with it.
   */
  getBodyFirstCardPageLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(0)
      .find(
        'div[class*="content workout-card-module--content"] a[href*="/workouts/"]',
      );
  }

  /**
   * Returns the favorite button of the first card.
   */
  getBodyFirstCardFavoriteButton() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(0)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * Returns the video preview image of the second card. If clicked, it will open the workout video directly.
   */
  getBodySecondCardVideoLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(1)
      .find('i[class*="pv-icon pv-play"]');
  }

  /**
   * Returns the title/description container of the second card. If clicked, it will open the workout page associated with it.
   */
  getBodySecondCardPageLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(1)
      .find(
        'div[class*="content workout-card-module--content"] a[href*="/workouts/"]',
      );
  }

  /**
   * Returns the favorite button of the second card.
   */
  getBodySecondCardFavoriteButton() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(1)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * Returns the video preview image of the third card. If clicked, it will open the workout video directly.
   */
  getBodyThirdCardVideoLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(2)
      .find('i[class*="pv-icon pv-play"]');
  }

  /**
   * Returns the title/description container of the third card. If clicked, it will open the workout page associated with it.
   */
  getBodyThirdCardPageLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(2)
      .find(
        'div[class*="content workout-card-module--content"] a[href*="/workouts/"]',
      );
  }

  /**
   * Returns the favorite button of the third card.
   */
  getBodyThirdCardFavoriteButton() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(2)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * Returns the video preview image of the fourth card. If clicked, it will open the workout video directly.
   */
  getBodyFourthCardVideoLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(3)
      .find('i[class*="pv-icon pv-play"]');
  }

  /**
   * Returns the title/description container of the fourth card. If clicked, it will open the workout page associated with it.
   */
  getBodyFourthCardPageLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(3)
      .find(
        'div[class*="content workout-card-module--content"] a[href*="/workouts/"]',
      );
  }

  /**
   * Returns the favorite button of the fourth card.
   */
  getBodyFourthCardFavoriteButton() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(3)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * [RESPONSIVE] Returns the Trainer Name text when in Responsive view.
   */
  getResponsiveTrainerNameText() {
    return cy.get('div[class*="column padding--0"] h1[class*="bold upper"]');
  }

  /**
   * [RESPONSIVE] Returns the Trainer Bio text when in Responsive view.
   */
  getResponsiveTrainerBioText() {
    return cy.get('div[class*="middle aligned row"] p');
  }
}
export default TrainersPage;
