class WorkoutsPage {
  /**
   * Visits the workouts page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/workouts");
  }

  /**
   * [NEWWORKOUTS] Returns the New Workouts module. Not interactable, only used for validation.
   *
   * Ex: workoutsPage.getBodyNewWorkouts().should('be.visible');
   */
  getBodyNewWorkouts() {
    return cy.contains(
      'div[class*="carousel-module--carousel-wrapper"]',
      "New Workouts",
    );
  }

  /**
   * [NEWWORKOUTS] Returns the New Workouts sections in 'New Workouts'.
   */
  getBodyNewWorkoutsNewWorkoutsSection() {
    return cy
      .contains(
        'div[class*="carousel-module--carousel-wrapper"]',
        "New Workouts",
      )
      .find('div[class*="slideInner"]')
      .eq(0);
  }

  /**
   * [NEWWORKOUTS] Returns the 'SEE ALL' link in 'New Workouts'.
   */
  getBodyNewWorkoutsSeeAllLink() {
    return cy
      .contains(
        'div[class*="carousel-module--carousel-wrapper"]',
        "New Workouts",
      )
      .find('a[href="/workouts/new"]');
  }

  /**
   * [NEWWORKOUTS] Returns the 'New Workouts' carousel back arrow button.
   */
  getBodyNewWorkoutsCarouselBackButton() {
    return cy
      .contains(
        'div[class*="carousel-module--carousel-wrapper"]',
        "New Workouts",
      )
      .find('button[class*="carousel__back-button"]');
  }

  /**
   * [NEWWORKOUTS] Returns the 'New Workouts' carousel next arrow button.
   */
  getBodyNewWorkoutsCarouselNextButton() {
    return cy
      .contains(
        'div[class*="carousel-module--carousel-wrapper"]',
        "New Workouts",
      )
      .find('button[class*="carousel__next-button"]');
  }

  /**
   * [NEWWORKOUTS] Returns a list of all visible Workout cards in the New Workouts rail.
   */
  getBodyNewWorkoutsCardsList() {
    return cy.get('li[class*="carousel__slide carousel__slide--visible"]');
  }

  /**
   * [NEWWORKOUTS] Returns the video preview image of the first card. If clicked, it will open the workout video directly.
   */
  getBodyNewWorkoutsFirstCardVideoLink() {
    return cy.get('a[class*="workout-card-module--video-link"]').eq(0);
  }

  /**
   * [NEWWORKOUTS] Returns the title/description container of the first card. If clicked, it will open the workout page associated with it.
   */
  getBodyNewWorkoutsFirstCardPageLink() {
    return cy
      .get('li[class*="carousel__slide carousel__slide--visible"]')
      .eq(0)
      .find('div[class*="content workout-card-module--content"]');
  }

  /**
   * [NEWWORKOUTS] Returns the favorite button of the first card.
   */
  getBodyNewWorkoutsFirstCardFavoriteButton() {
    return cy
      .get('li[class*="carousel__slide carousel__slide--visible"]')
      .eq(0)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * [NEWWORKOUTS] Returns the video preview image of the second card. If clicked, it will open the workout video directly.
   */
  getBodyNewWorkoutsSecondCardVideoLink() {
    return cy.get('a[class*="workout-card-module--video-link"]').eq(1);
  }

  /**
   * [NEWWORKOUTS] Returns the title/description container of the second card. If clicked, it will open the workout page associated with it.
   */
  getBodyNewWorkoutsSecondCardPageLink() {
    return cy
      .get('li[class*="carousel__slide carousel__slide--visible"]')
      .eq(1)
      .find('div[class*="content workout-card-module--content"]');
  }

  /**
   * [NEWWORKOUTS] Returns the favorite button of the second card.
   */
  getBodyNewWorkoutsSecondCardFavoriteButton() {
    return cy
      .get('li[class*="carousel__slide carousel__slide--visible"]')
      .eq(1)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * [NEWWORKOUTS] Returns the video preview image of the third card. If clicked, it will open the workout video directly.
   */
  getBodyNewWorkoutsThirdCardVideoLink() {
    return cy.get('a[class*="workout-card-module--video-link"]').eq(2);
  }

  /**
   * [NEWWORKOUTS] Returns the title/description container of the third card. If clicked, it will open the workout page associated with it
   */
  getBodyNewWorkoutsThirdCardPageLink() {
    return cy
      .get('li[class*="carousel__slide carousel__slide--visible"]')
      .eq(2)
      .find('div[class*="content workout-card-module--content"]');
  }

  /**
   * [NEWWORKOUTS] Returns the favorite button of the third card.
   */
  getBodyNewWorkoutsThirdCardFavoriteButton() {
    return cy
      .get('li[class*="carousel__slide carousel__slide--visible"]')
      .eq(2)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * [NEWWORKOUTS] Returns the video preview image of the fourth card. If clicked, it will open the workout video directly.
   */
  getBodyNewWorkoutsFourthCardVideoLink() {
    return cy.get('a[class*="workout-card-module--video-link"]').eq(3);
  }

  /**
   * [NEWWORKOUTS] Returns the title/description container of the fourth card. If clicked, it will open the workout page associated with it
   */
  getBodyNewWorkoutsFourthCardPageLink() {
    return cy
      .get('li[class*="carousel__slide carousel__slide--visible"]')
      .eq(3)
      .find('div[class*="content workout-card-module--content"]');
  }

  /**
   * [NEWWORKOUTS] Returns the favorite button of the fourth card.
   */
  getBodyNewWorkoutsFourthCardFavoriteButton() {
    return cy
      .get('li[class*="carousel__slide carousel__slide--visible"]')
      .eq(3)
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * [NEWWORKOUTS] Returns the video preview image of the fifth card. If clicked, it will open the workout video directly.
   */
  getBodyNewWorkoutsFifthCardVideoLink() {
    return cy
      .get(
        'li[class*="carousel__slide carousel__slide--visible"] div[class*="workout-card-module--image-container"]',
      )
      .eq(4);
  }

  /**
   * [NEWWORKOUTS] Returns the title/description container of the fifth card. If clicked, it will open the workout page associated with it.
   */
  getBodyNewWorkoutsFifthCardPageLink() {
    return cy
      .get(
        'li[class*="carousel__slide carousel__slide--visible"] div[class*="content workout-card-module--content"]',
      )
      .eq(4);
  }

  /**
   * [NEWWORKOUTS] Returns the favorite button of the fifth card.
   */
  getBodyNewWorkoutsFifthCardFavoriteButton() {
    return cy
      .get(
        'li[class*="carousel__slide carousel__slide--visible"] button[class*="favorite-button-module--favorite-button"]',
      )
      .eq(4);
  }

  /**
   * [FILTERS] Returns the Filters module. Not interactable, only used for validation.
   *
   * Ex: workoutsPage.getBodyFilters().should('be.visible');
   */
  getBodyFilters() {
    return cy.get('div[class*="filters-module--filters-bar"]');
  }

  /**
   * [FILTERS] Returns the Equipment button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: workoutsPage.getBodyFiltersEquipment().click();
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
   * Ex: workoutsPage.getBodyFiltersLevel().click();
   */
  getBodyFiltersLevel() {
    return cy
      .get('div[class*="filters-module--filters-bar"]')
      .contains("level");
  }

  /**
   * [FILTERS] Returns the Duration button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: workoutsPage.getBodyFiltersDuration().click();
   */
  getBodyFiltersDuration() {
    return cy
      .get('div[class*="filters-module--filters-bar"]')
      .contains("duration");
  }

  /**
   * [FILTERS] Returns the Type button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: workoutsPage.getBodyFiltersType().click();
   */
  getBodyFiltersType() {
    return cy.get('div[class*="filters-module--filters-bar"]').contains("type");
  }

  /**
   * [FILTERS] Returns the Focus button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: workoutsPage.getBodyFiltersFocus().click();
   */
  getBodyFiltersFocus() {
    return cy
      .get('div[class*="filters-module--filters-bar"]')
      .contains("focus");
  }

  /**
   * [FILTERS] Returns the Trainer button in the Filters module.
   *
   * Must be clicked to show the contents.
   *
   * Ex: workoutsPage.getBodyFiltersTrainer().click();
   */
  getBodyFiltersTrainer() {
    return cy.get(":nth-child(6) > .divider").contains("trainer");
  }

  /**
   * [FILTERS] Returns the first checkbox in any of the drop-down menus.
   *
   * A drop-down menu must be clicked to make this element visible.
   *
   * Ex: workoutsPage.getBodyFiltersEquipment().click();
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
   * Ex: workoutsPage.getBodyFiltersEquipment().click();
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
   * Ex: workoutsPage.getBodyFiltersEquipment().click();
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
   * Ex: workoutsPage.getBodyFiltersEquipment().click();
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
   * Ex: workoutsPage.getBodyFiltersEquipment().click();
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
   * Ex: workoutsPage.getBodyFiltersEquipment().click();
   */
  getBodyFiltersCheckboxSix() {
    return cy
      .get(
        'div[class*="filters-module--filters-bar"] div[class*="menu transition visible"]',
      )
      .find(":nth-child(6) > .ui > label");
  }

  /**
   * [FILTERS] Returns the close button for the first filter pill.
   */
  getBodyFirstFiltersPillCloseButton() {
    return cy
      .get(
        'div[class*="FilterPills-module--filter-pill"] i[class="pv-icon pv-close color-pv-white"]',
      )
      .eq(0);
  }

  /**
   * [FILTERS] Returns the close button for the second filter pill.
   */
  getBodySecondFiltersPillCloseButton() {
    return cy
      .get(
        'div[class*="FilterPills-module--filter-pill"] i[class="pv-icon pv-close color-pv-white"]',
      )
      .eq(1);
  }

  /**
   * [FILTERS] Returns the close button for the third filter pill.
   */
  getBodyThirdFiltersPillCloseButton() {
    return cy
      .get(
        'div[class*="FilterPills-module--filter-pill"] i[class="pv-icon pv-close color-pv-white"]',
      )
      .eq(2);
  }

  /**
   * [Workouts] Returns the Workouts section. It's the 3x3 grid of workouts.
   *
   * Not interactable, only used for validation.
   *
   * Ex: workoutsPage.getBodyWorkouts().should('be.visible');
   */
  getBodyWorkouts() {
    return cy.get('div[class*="column grid"] div[class*="center aligned row"]');
  }

  /**
   * [Workouts] Returns all workout categories in the Workouts section.
   */
  getBodyWorkoutsCategories() {
    return cy.get('a[class*="workout-category"]');
  }

  /**
   * [Workouts] Returns the 'The Foundation' default card in the Workouts section.
   */
  getBodyWorkoutsCardTheFoundation() {
    return cy.get(
      'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(1)',
    );
  }

  /**
   * [Workouts] Returns the 'The Foundation' default card title in the Workouts section.
   */
  getBodyWorkoutsCardTheFoundationTitle() {
    return cy
      .get(
        'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(1)',
      )
      .find('div[class*="workout-category-image-text"]');
  }

  /**
   * [Workouts] Returns the 'Quick Boost' default card in the Workouts section.
   */
  getBodyWorkoutsCardQuickBoost() {
    return cy.get(
      'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(2)',
    );
  }

  /**
   * [Workouts] Returns the 'Quick Boost' default card title in the Workouts section.
   */
  getBodyWorkoutsCardQuickBoostTitle() {
    return cy
      .get(
        'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(2)',
      )
      .find('div[class*="workout-category-image-text"]');
  }

  /**
   * [Workouts] Returns the 'No Equipment' default card in the Workouts section.
   */
  getBodyWorkoutsCardNoEquipment() {
    return cy.get(
      'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(3)',
    );
  }

  /**
   * [Workouts] Returns the 'No Equipment' default card title in the Workouts section.
   */
  getBodyWorkoutsCardNoEquipmentTitle() {
    return cy
      .get(
        'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(3)',
      )
      .find('div[class*="workout-category-image-text"]');
  }

  /**
   * [Workouts] Returns the 'Strength & Sculpt' default card in the Workouts section.
   */
  getBodyWorkoutsCardStrengthSculpt() {
    return cy.get(
      'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(4)',
    );
  }

  /**
   * [Workouts] Returns the 'Strength Sculpt' default card title in the Workouts section.
   */
  getBodyWorkoutsCardStrengthSculptTitle() {
    return cy
      .get(
        'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(4)',
      )
      .find('div[class*="workout-category-image-text"]');
  }

  /**
   * [Workouts] Returns the 'Cardio Burn' default card in the Workouts section.
   */
  getBodyWorkoutsCardCardioBurn() {
    return cy.get(
      'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(5)',
    );
  }

  /**
   * [Workouts] Returns the 'Cardio Burn' default card title in the Workouts section.
   */
  getBodyWorkoutsCardCardioBurnTitle() {
    return cy
      .get(
        'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(5)',
      )
      .find('div[class*="workout-category-image-text"]');
  }

  /**
   * [Workouts] Returns the 'Recover & Stretch' default card in the Workouts section.
   */
  getBodyWorkoutsCardRecoverStretch() {
    return cy.get(
      'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(6)',
    );
  }

  /**
   * [Workouts] Returns the 'Recover & Stretch' default card title in the Workouts section.
   */
  getBodyWorkoutsCardRecoverStretchTitle() {
    return cy
      .get(
        'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(6)',
      )
      .find('div[class*="workout-category-image-text"]');
  }

  /**
   * [Workouts] Returns the 'Mat Definition' default card in the Workouts section.
   */
  getBodyWorkoutsCardMatDefinition() {
    return cy.get(
      'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(7)',
    );
  }

  /**
   * [Workouts] Returns the 'Mat Definition' default card title in the Workouts section.
   */
  getBodyWorkoutsCardMatDefinitionTitle() {
    return cy
      .get(
        'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(7)',
      )
      .find('div[class*="workout-category-image-text"]');
  }

  /**
   * [Workouts] Returns the 'Women's Wellness' default card in the Workouts section.
   */
  getBodyWorkoutsCardWomensWellness() {
    return cy.get(
      'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(8)',
    );
  }

  /**
   * [Workouts] Returns the 'Women's Wellness' default card title in the Workouts section.
   */
  getBodyWorkoutsCardWomensWellnessTitle() {
    return cy
      .get(
        'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(8)',
      )
      .find('div[class*="workout-category-image-text"]');
  }

  /**
   * [Workouts] Returns the 'Tutorials' default card in the Workouts section.
   */
  getBodyWorkoutsCardTutorials() {
    return cy.get(
      'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(9)',
    );
  }

  /**
   * [Workouts] Returns the 'Tutorials' default card title in the Workouts section.
   */
  getBodyWorkoutsCardTutorialsTitle() {
    return cy
      .get(
        'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(9)',
      )
      .find('div[class*="workout-category-image-text"]');
  }

  /**
   * [Workouts] Returns the 'Modifications' default card in the Workouts section.
   */
  getBodyWorkoutsCardModifications() {
    return cy.get(
      'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(10)',
    );
  }

  /**
   * [Workouts] Returns the 'Modifications' default card title in the Workouts section.
   */
  getBodyWorkoutsCardModificationsTitle() {
    return cy
      .get(
        'div[class*="column grid"] div[class*="center aligned row"] a[class*="column"]:nth-child(10)',
      )
      .find('div[class*="workout-category-image-text"]');
  }

  /**
   * [Workouts] Returns the first Close Filter button after a filter is added.
   */
  getBodyWorkoutsCloseFirstFilterButton() {
    return cy.get(
      'div[class*="center aligned sixteen wide"] div[class*="pill-module--pill"]:nth-child(1) i[class*="pv-icon pv-close"]',
    );
  }

  /**
   * [Workouts] Returns the second Close Filter button after a filter is added.
   */
  getBodyWorkoutsCloseSecondFilterButton() {
    return cy.get(
      'div[class*="center aligned sixteen wide"] div[class*="pill-module--pill"]:nth-child(2) i[class*="pv-icon pv-close"]',
    );
  }

  /**
   * [Workouts] Returns the third Close Filter button after a filter is added.
   */
  getBodyWorkoutsCloseThirdFilterButton() {
    return cy.get(
      'div[class*="center aligned sixteen wide"] div[class*="pill-module--pill"]:nth-child(3) i[class*="pv-icon pv-close"]',
    );
  }

  /**
   * [Workouts] Returns the fourth Close Filter button after a filter is added.
   */
  getBodyWorkoutsCloseFourthFilterButton() {
    return cy.get(
      'div[class*="center aligned sixteen wide"] div[class*="pill-module--pill"]:nth-child(4) i[class*="pv-icon pv-close"]',
    );
  }

  /**
   * [Workouts] Returns the video preview image of the first card after filters have been applied.
   *
   * Filters must be applied before this element will show.
   */
  getBodyWorkoutsCardFirstFilteredResultVideo() {
    return cy.get(
      'div[class*="card-grid-wrapper-module--grid"] div[class*="ui fluid card"]:nth-child(1) a[class*="workout-card-module--video-link"]',
    );
  }

  /**
   * [Workouts] Returns the card description of the first card after filters have been applied.
   *
   * Filters must be applied before this element will show.
   */
  getBodyWorkoutsCardFirstFilteredResultPage() {
    return cy.get(
      'div[class*="card-grid-wrapper-module--grid"] div[class*="ui fluid card"]:nth-child(1) div[class*="content workout-card-module--content"]',
    );
  }

  /**
   * [Workouts] Returns the favorite button of the first card after filters have been applied.
   *
   * Filters must be applied before this element will show.
   */
  getBodyWorkoutsCardFirstFilteredResultFavorite() {
    return cy.get(
      'div[class*="card-grid-wrapper-module--grid"] div[class*="ui fluid card"]:nth-child(1) p[class*="workout-card-module--fav-icon"]',
    );
  }

  /**
   * [Workouts] Returns the video preview image of the second card after filters have been applied.
   *
   * Filters must be applied before this element will show.
   */
  getBodyWorkoutsCardSecondFilteredResultVideo() {
    return cy.get(
      'div[class*="card-grid-wrapper-module--grid"] div[class*="ui fluid card"]:nth-child(2) a[class*="workout-card-module--video-link"]',
    );
  }

  /**
   * [Workouts] Returns the card description of the second card after filters have been applied.
   *
   * Filters must be applied before this element will show.
   */
  getBodyWorkoutsCardSecondFilteredResultPage() {
    return cy.get(
      'div[class*="card-grid-wrapper-module--grid"] div[class*="ui fluid card"]:nth-child(2) div[class*="content workout-card-module--content"]',
    );
  }

  /**
   * [Workouts] Returns the favorite button of the second card after filters have been applied.
   *
   * Filters must be applied before this element will show.
   */
  getBodyWorkoutsCardSecondFilteredResultFavorite() {
    return cy.get(
      'div[class*="card-grid-wrapper-module--grid"] div[class*="ui fluid card"]:nth-child(2) p[class*="workout-card-module--fav-icon"]',
    );
  }

  /**
   * [Workouts] Returns the video preview image of the third card after filters have been applied.
   *
   * Filters must be applied before this element will show.
   */
  getBodyWorkoutsCardThirdFilteredResultVideo() {
    return cy.get(
      'div[class*="card-grid-wrapper-module--grid"] div[class*="ui fluid card"]:nth-child(3) a[class*="workout-card-module--video-link"]',
    );
  }

  /**
   * [Workouts] Returns the card description of the third card after filters have been applied.
   *
   * Filters must be applied before this element will show.
   */
  getBodyWorkoutsCardThirdFilteredResultPage() {
    return cy.get(
      'div[class*="card-grid-wrapper-module--grid"] div[class*="ui fluid card"]:nth-child(3) div[class*="content workout-card-module--content"]',
    );
  }

  /**
   * [Workouts] Returns the favorite button of the third card after filters have been applied.
   *
   * Filters must be applied before this element will show.
   */
  getBodyWorkoutsCardThirdFilteredResultFavorite() {
    return cy.get(
      'div[class*="card-grid-wrapper-module--grid"] div[class*="ui fluid card"]:nth-child(3) p[class*="workout-card-module--fav-icon"]',
    );
  }

  /**
   * [Series] Returns the Find A Series button.
   */
  getBodyFindASeriesButton() {
    return cy.get('div[class*="border-block-container"] a[href="/series"]');
  }

  /**
   *  Returns the Start Free Trial button at the bottom of the page.
   */
  getBodyBottomStartFreeTrialButton() {
    return cy.get(
      'div[class*="right aligned four wide column"] a[class*="ui secondary button"][href*="month_trial"]',
    );
  }

  /**
   * [Series] P&F Premier Series Returns.
   */
  getPhaseFunctionSeries() {
    return cy
      .get('div[class*="header series-card-module--header"]')
      .contains("Phase & function");
  }

  /**
   * [NEW WORKOUTS][CARDS] Returns the 15 Min Full Body Sculpt Card.
   */
  get15MinFullBodySculptCard() {
    return cy
      .get('div[class*="header workout-card-module--header"]')
      .contains("15 min full body sculpt");
  }

  /**
   * [NEW WORKOUTS][CARDS] Returns the 20 Min Full Body Burn card.
   */
  get20MinFullBodyBurnCard() {
    return cy
      .get('div[class*="header workout-card-module--header"]')
      .contains("20 min full body burn");
  }

  /**
   * [FILTERS BAR][WORKOUTS] Returns the X Workouts card
   */
  getNumberOfWorkoutsFromFilter() {
    return cy
      .get(
        'div[class*="workouts-search-results-module"] div[class="justifyContent-space-between"]',
      )
      .contains("workouts");
  }

  /**
   * [FILTERS BAR][EQUIPMENT - NO EQUIPMENT] Returns the no equipment filter option
   */
  getNoEquipmentFilterOption() {
    return cy.get('div[class="ui checkbox"]').contains("no equipment");
  }

  /**
   * [FILTERS BAR][EQUIPMENT - NO EQUIPMENT] Returns the no equipment tag
   */
  getNoEquipmentFilterOptionTag() {
    return cy.get('div[class*="pill-module--pill"]').contains("no equipment");
  }

  /**
   * [FILTERS BAR][EQUIPMENT - NO EQUIPMENT] Returns the no equipment tag close button
   */
  getNoEquipmentFilterOptionTagClosebutton() {
    return cy.get('i[class="pv-icon pv-close color-pv-white"]');
  }

  /**
   * [FILTERS BAR][Level-Basic] Returns the beginner tag
   */
  getLevelFilterOptionTag() {
    return cy.get('div[class*="pill-module--pill"]').contains("beginner");
  }

  /**
   * [FILTERS BAR][LEVEL - BEGINNER] Returns the beginner filter option
   */
  getlevelBeginnerFilterOption() {
    return cy.get('div[class="ui checkbox"]').contains("beginner");
  }

  /**
   * [FILTERS] Returns the No Equipment filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getNoEquipmentFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("no equipment", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the P.Ball filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getPBallFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("p.ball", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Light Weights filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getLightWeightsFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("light weights", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Glider filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getGliderFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("glider", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the P.Band filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getPBandFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("p.band", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the P.3 Trainer filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getP3TrainerFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("p.3 trainer", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Light Ankle Band filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getLightAnkleBandFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("light ankle band", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Heavy Ankle Band filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getHeavyAnkleBandFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("heavy ankle band", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Light Ankle Weights filter.
   *
   * NOTE: In Responsive only visible after the Equipment Show More button has been clicked.
   */
  getLightAnkleWeightsFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("light ankle weights", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Heavy Ankle Weights filter.
   *
   * NOTE: In Responsive only visible after the Equipment Show More button has been clicked.
   */
  getHeavyAnkleWeightsFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("heavy ankle weights", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Slant Board filter.
   *
   * NOTE: In Responsive only visible after the Equipment Show More button has been clicked.
   */
  getSlantBoardFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("slant board", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Precision Mat filter.
   *
   * NOTE: In Responsive only visible after the Equipment Show More button has been clicked.
   */
  getPrecisionMatFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("precision mat", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Massage Ball filter.
   *
   * NOTE: In Responsive only visible after the Equipment Show More button has been clicked.
   */
  getMassageBallFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Massage Ball", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Foam Roller filter.
   *
   * NOTE: In Responsive only visible after the Equipment Show More button has been clicked.
   */
  getFoamRollerFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("foam roller", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Step filter.
   *
   * NOTE: In Responsive only visible after the Equipment Show More button has been clicked.
   */
  getStepFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("step", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Beginner filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getBeginnerFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("beginner", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Advanced filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getAdvancedFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("advanced", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the 1-15 MIN filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  get15MinFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("1 - 15 MIN", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the 16-30 MIN filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  get30MinFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("16 - 30 MIN", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the 31-45 MIN filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  get45MinFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("31 - 45 MIN", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the 46-60 MIN filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  get60MinFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("46 - 60 MIN", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the 61+ MIN filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  get61PlusMinFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("61+ MIN", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the The Foundation filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getFoundationFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("The Foundation", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Strength & Sculpt filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getStrengthAndSculptFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Strength & Sculpt", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Cardio Burn filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getCardioBurnFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Cardio Burn", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Recover & Stretch filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getRecoverAndStretchFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Recover & Stretch", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Mat Definition filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getMatDefinitionFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Mat Definition", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Live On Demand filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getLiveOnDemandFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Live On Demand", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Women's Wellness filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getWomensWellnessFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Women's Wellness", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Modifications filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getModificationsFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Modifications", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Meditation & Mindfulness filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getMeditationAndMindfullnessFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Meditation & Mindfulness", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Full Body filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getFullBodyFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Full Body", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Abs filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getAbsFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Abs", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Arms filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getArmsFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Arms", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Butt/Thighs filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getButtThighsFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Butt/Thighs", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Tone filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getToneFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Tone", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Elongate filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getElongateFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Elongate", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Balance filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getBalanceFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Balance", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Flexibility filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getFlexibilityFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Flexibility", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the Rotations / Mobility filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getRotationsMobilityFilter() {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains("Rotations / Mobility", { matchCase: false });
  }

  /**
   * [FILTERS] Returns the entered Filter.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   */
  getGenericFilter(filter) {
    return cy
      .get('div[class*="filters-module"] div[class*="checkbox"]')
      .contains(filter, { matchCase: false });
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
   * [RESPONSIVE][FILTERS] Returns the Type Section Show More button.
   *
   * NOTE: In Responsive only visible after the Filter Icon has been clicked.
   * NOTE: After being clicked turns into the Show Less button.
   */
  getResponsiveTypeSectionShowMoreButton() {
    return cy
      .get(
        'div[class*="filters-module"] button[class*="filters-module--show-button"]',
      )
      .eq(1);
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
   * [OPTUM] Returns the For You Title Text.
   */
  getOptumForYouTitleText() {
    return cy
      .get('div[class*="workouts-category-container"] p[class*="h3"]')
      .contains("for you", { matchcase: false });
  }

  /**
   * [OPTUM] Returns the See More Button.
   */
  getOptumSeeMoreButton() {
    return cy
      .get('div[class*="workouts-page-module--button-wrapper"] button')
      .contains("SEE MORE", { matchcase: false });
  }

  /**
   * [OPTUM] Returns the See Less Button.
   */
  getOptumSeeLessButton() {
    return cy
      .get('div[class*="workouts-page-module--button-wrapper"] button')
      .contains("SEE LESS", { matchcase: false });
  }
}
export default WorkoutsPage;
