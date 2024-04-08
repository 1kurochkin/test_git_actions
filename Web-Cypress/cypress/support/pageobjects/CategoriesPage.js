class CategoriesPage {
  /**
   * Visits the The Foundation Category page (/workouts/categories/the-foundation/)
   */
  visitTheFoundationPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/workouts/categories/the-foundation/",
    );
  }

  /**
   * Visits the Quick Boost Category page (/workouts/categories/quick-boost)
   */
  visitQuickBoostPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/workouts/categories/quick-boost",
    );
  }

  /**
   * Visits the No Equipment Category page (/workouts/categories/no-equipment)
   */
  visitNoEquipmentPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/workouts/categories/no-equipment",
    );
  }

  /**
   * Visits the Strength and Sculpt Category page (/workouts/categories/strength-and-sculpt)
   */
  visitStrengthAndSculptPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/workouts/categories/strength-and-sculpt",
    );
  }

  /**
   * Visits the Cardio Burn Category page (/workouts/categories/cardio-burn)
   */
  visitCardioBurnPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/workouts/categories/cardio-burn",
    );
  }

  /**
   * Visits the Recover and Stretch Category page (/workouts/categories/recovery-and-stretch)
   */
  visitRecoverAndStretchPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/workouts/categories/recovery-and-stretch",
    );
  }

  /**
   * Visits the Mat Definition Category page (/workouts/categories/mat-definition)
   */
  visitMatDefinitionPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/workouts/categories/mat-definition",
    );
  }

  /**
   * Visits the Women's Wellness Category page (/workouts/categories/womens-wellness)
   */
  visitWomensWellnessPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/workouts/categories/womens-wellness",
    );
  }

  /**
   * Visits the Tutorials Category page (/workouts/categories/tutorials)
   */
  visitTutorialsPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/workouts/categories/tutorials",
    );
  }

  /**
   *  Returns the Back to Workouts link at top left of body.
   */
  getBodyBackToWorkoutsLink() {
    return cy
      .get('a[class*="link-with-arrow"]')
      .contains("Back to workouts", { matchCase: false });
  }

  /**
   *  Returns The Foundation category button.
   */
  getBodyTheFoundationCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/the-foundation"]')
      .contains("The Foundation");
  }

  /**
   *  Returns the Quick Boost category button.
   */
  getBodyQuickBoostCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/quick-boost"]')
      .contains("Quick Boost");
  }

  /**
   *  Returns the No Equipment category button.
   */
  getBodyNoEquipmentCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/no-equipment"]')
      .contains("No Equipment");
  }

  /**
   *  Returns the Strength & Sculpt category button.
   */
  getBodyStrengthSculptCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/strength-and-sculpt"]')
      .contains("Strength & Sculpt");
  }

  /**
   *  Returns the Cardio Burn category button.
   */
  getBodyCardioBurnCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/cardio-burn"]')
      .contains("Cardio Burn");
  }

  /**
   *  Returns the Recover & Stretch category button.
   */
  getBodyRecoverStretchCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/recovery-and-stretch"]')
      .contains("Recover & Stretch");
  }

  /**
   *  Returns the Mat Definition category button.
   */
  getBodyMatDefinitionCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/mat-definition"]')
      .contains("Mat Definition");
  }

  /**
   *  Returns the Women's Wellness category button.
   */
  getBodyWomensWellnessCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/womens-wellness"]')
      .contains("Women's Wellness");
  }

  /**
   *  Returns the Meditation & Mindfulness category button.
   */
  getBodyMeditationMindfulnessCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/meditation-and-mindfulness"]')
      .contains("Meditation & Mindfulness");
  }

  /**
   *  Returns the Modifications category button.
   */
  getBodyModificationCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/Modifications"]')
      .contains("Modifications");
  }

  /**
   *  Returns the Left Scroll Arrow button in categories.
   */
  getBodyCategoryLeftScrollButton() {
    return cy.get(
      'button[class*="workout-category-row-module--scroll-arrow-left"]',
    );
  }

  /**
   *  Returns the Right Scroll Arrow button in categories.
   */
  getBodyCategoryRightScrollButton() {
    return cy.get(
      'button[class*="workout-category-row-module--scroll-arrow-right"]',
    );
  }

  /**
   * [FILTERS] Returns the Equipment button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: categoriesPage.getBodyFiltersEquipment().click();
   */
  getBodyFiltersEquipment() {
    return cy
      .get('div[class*="filters-module--filters-bar"]')
      .contains("equipment");
  }

  /**
   * [FILTERS] Returns the Level button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: categoriesPage.getBodyFiltersLevel().click();
   */
  getBodyFiltersLevel() {
    return cy
      .get('div[class*="filters-module--filters-bar"]')
      .contains("level");
  }

  /**
   * [FILTERS] Returns the Length button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: categoriesPage.getBodyFiltersLength().click();
   */
  getBodyFiltersLength() {
    return cy
      .get('div[class*="filters-module--filters-bar"]')
      .contains("length");
  }

  /**
   * [FILTERS] Returns the Type button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: categoriesPage.getBodyFiltersType().click();
   */
  getBodyFiltersType() {
    return cy.get('div[class*="filters-module--filters-bar"]').contains("type");
  }

  /**
   * [FILTERS] Returns the Focus button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: categoriesPage.getBodyFiltersFocus().click();
   */
  getBodyFiltersFocus() {
    return cy
      .get('div[class*="filters-module--filters-bar"]')
      .contains("focus");
  }

  /**
   * [FILTERS] Returns the Benefit button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: categoriesPage.getBodyFiltersBenefit().click();
   */
  getBodyFiltersBenefit() {
    return cy
      .get('div[class*="filters-module--filters-bar"]')
      .contains("benefit");
  }

  /**
   * [FILTERS] Returns the Trainer button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: categoriesPage.getBodyFiltersTrainer().click();
   */
  getBodyFiltersTrainer() {
    return cy
      .get('div[class*="filters-module--filters-bar"]')
      .contains("trainer");
  }

  /**
   * [FILTERS] Returns the first checkbox in any of the drop-down menus.
   *
   * A drop-down menu must be clicked to make this element visible.
   *
   * Ex: categoriesPage.getBodyFiltersEquipment().click();
   */
  getBodyFiltersCheckboxOne() {
    return cy
      .get(
        'div[class*="filters-module--filters-bar"] div[class*="menu transition visible"]',
      )
      .find(":nth-child(1) > .ui > label");
  }

  /**
   * [FILTERS] Returns the second checkbox in any of the drop-down menus.
   *
   * A drop-down menu must be clicked to make this element visible.
   *
   * Ex: categoriesPage.getBodyFiltersEquipment().click();
   */
  getBodyFiltersCheckboxTwo() {
    return cy
      .get(
        'div[class*="filters-module--filters-bar"] div[class*="menu transition visible"]',
      )
      .find(":nth-child(2) > .ui > label");
  }

  /**
   * [FILTERS] Returns the third checkbox in any of the drop-down menus.
   *
   * A drop-down menu must be clicked to make this element visible.
   *
   * Ex: categoriesPage.getBodyFiltersEquipment().click();
   */
  getBodyFiltersCheckboxThree() {
    return cy
      .get(
        'div[class*="filters-module--filters-bar"] div[class*="menu transition visible"]',
      )
      .find(":nth-child(3) > .ui > label");
  }

  /**
   * [FILTERS] Returns the fourth checkbox in any of the drop-down menus.
   *
   * A drop-down menu must be clicked to make this element visible.
   *
   * Ex: categoriesPage.getBodyFiltersEquipment().click();
   */
  getBodyFiltersCheckboxFour() {
    return cy
      .get(
        'div[class*="filters-module--filters-bar"] div[class*="menu transition visible"]',
      )
      .find(":nth-child(4) > .ui > label");
  }

  /**
   * [FILTERS] Returns the fifth checkbox in any of the drop-down menus.
   *
   * A drop-down menu must be clicked to make this element visible.
   *
   * Ex: categoriesPage.getBodyFiltersEquipment().click();
   */
  getBodyFiltersCheckboxFive() {
    return cy
      .get(
        'div[class*="filters-module--filters-bar"] div[class*="menu transition visible"]',
      )
      .find(":nth-child(5) > .ui > label");
  }

  /**
   * [FILTERS] Returns the sixth checkbox in any of the drop-down menus.
   *
   * A drop-down menu must be clicked to make this element visible.
   *
   * Ex: categoriesPage.getBodyFiltersEquipment().click();
   */
  getBodyFiltersCheckboxSix() {
    return cy
      .get(
        'div[class*="filters-module--filters-bar"] div[class*="menu transition visible"]',
      )
      .find(":nth-child(6) > .ui > label");
  }

  /**
   *  Returns Favorite button at the inputted index.
   *
   * Ex: categoriesPage.getFavoriteButton(1);
   */
  getFavoriteButton(index) {
    return cy
      .get('div[class*="ui fluid card"]', { log: false })
      .find('button[class*="favorite-button-module--favorite-button"]', {
        log: false,
      })
      .eq(index);
  }

  /**
   *  Returns the video preview image of the first card. If clicked, it will open the workout video directly.
   */
  getBodyFirstCardVideoLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(0)
      .find('i[class*="pv-icon pv-play"]');
  }

  /**
   *  Returns the title/description container of the first card. If clicked, it will open the workout page associated with it.
   */
  getBodyFirstCardPageLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(0)
      .find('div[class*="content workout-card-module--content"]');
  }

  /**
   *  Returns the favorite button of the first card.
   */
  getBodyFirstCardFavoriteButton() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(0)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   *  Returns the video preview image of the second card. If clicked, it will open the workout video directly.
   */
  getBodySecondCardVideoLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(1)
      .find('i[class*="pv-icon pv-play"]');
  }

  /**
   *  Returns the title/description container of the second card. If clicked, it will open the workout page associated with it.
   */
  getBodySecondCardPageLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(1)
      .find('div[class*="content workout-card-module--content"]');
  }

  /**
   *  Returns the favorite button of the second card.
   */
  getBodySecondCardFavoriteButton() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(1)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   *  Returns the video preview image of the third card. If clicked, it will open the workout video directly.
   */
  getBodyThirdCardVideoLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(2)
      .find('i[class*="pv-icon pv-play"]');
  }

  /**
   *  Returns the title/description container of the third card. If clicked, it will open the workout page associated with it.
   */
  getBodyThirdCardPageLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(2)
      .find('div[class*="content workout-card-module--content"]');
  }

  /**
   *  Returns the favorite button of the third card.
   */
  getBodyThirdCardFavoriteButton() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(2)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   *  Returns the video preview image of the fourth card. If clicked, it will open the workout video directly.
   */
  getBodyFourthCardVideoLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(3)
      .find('i[class*="pv-icon pv-play"]');
  }

  /**
   *  Returns the title/description container of the fourth card. If clicked, it will open the workout page associated with it.
   */
  getBodyFourthCardPageLink() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(3)
      .find('div[class*="content workout-card-module--content"]');
  }

  /**
   *  Returns the favorite button of the fourth card.
   */
  getBodyFourthCardFavoriteButton() {
    return cy
      .get('div[class*="ui fluid card"]')
      .eq(3)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * [RESPONSIVE][FILTERS] Returns the Filter Icon.
   */
  getResponsiveFilterIcon() {
    return cy.get('i[class*="pv-icon pv-filters-horizontal-outline"]');
  }

  /**
   * [RESPONSIVE][FILTERS] Returns the Filter Close Icon.
   */
  getResponsiveFilterCloseIcon() {
    return cy.get('div[class*="filters-module"] i[class*="pv-icon pv-close"]');
  }

  /**
   * [RESPONSIVE][FILTERS] Returns the Equipment Section Show More button.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   * NOTE: After being clicked turns into the Show Less button.
   */
  getResponsiveEquipmentSectionShowMoreButton() {
    return cy
      .get(
        'div[class*="filters-module"] button[class*="filters-module--show-button"]',
      )
      .eq(0);
  }

  /**
   * [RESPONSIVE][FILTERS] Returns the Trainer Section Show More button.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   * NOTE: After being clicked turns into the Show Less button.
   */
  getResponsiveTrainerSectionShowMoreButton() {
    return cy
      .get(
        'div[class*="filters-module"] button[class*="filters-module--show-button"]',
      )
      .eq(2);
  }

  /**
   * [RESPONSIVE][FILTERS] Returns the Show Categories Button.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getResponsiveShowCategoriesButton() {
    return cy.get(
      'div[class*="filters-module--footer"] button[class*="ui medium fluid button"]',
    );
  }

  /**
   * [RESPONSIVE][FILTERS] Returns the Clear Filters Button.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getResponsiveClearFiltersButton() {
    return cy.get(
      'div[class*="filters-module--footer"] button[class*="secondary"]',
    );
  }

  /**
   * [OPTUM] Visits the Strength & Stability Category page (/workouts/categories/strength-and-stability)
   */
  visitOptumStrengthAndStabilityPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") +
        "/workouts/categories/strength-and-stability",
    );
  }

  /**
   * [OPTUM] Returns the Stretch & Mobility category button.
   */
  getOptumStretchMobilityCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/stretch-and-mobility"]')
      .contains("Stretch & Mobility");
  }

  /**
   * [OPTUM] Returns the Targeted Movement Therapy category button.
   */
  getOptumTargetedMovementCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/targeted-movement-therapy"]')
      .contains("Targeted Movement Therapy");
  }

  /**
   * [OPTUM] Returns the In Conversation category button.
   */
  getOptumInConversationCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/in-conversation"]')
      .contains("In Conversation");
  }

  /**
   * [OPTUM] Returns the Meditation and Mindfulness category button.
   */
  getOptumMeditationAndMindfulnessCategoryButton() {
    return cy
      .get('a[href*="/workouts/categories/meditation-and-mindfulness-optum"]')
      .contains("Meditation and Mindfulness");
  }
}
export default CategoriesPage;
