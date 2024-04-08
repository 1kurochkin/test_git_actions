class ClassesPage {
  /**
   * Visits the Classes page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/classes");
  }

  /**
   *  Returns the All Classes button
   */
  getAllClassesButton() {
    return cy.get('button[data-test="WorkoutCategory-AllClasses-Button"]');
  }

  /**
   *  Returns the Get Started button
   */
  getGetStartedButton() {
    return cy.get('button[data-test="WorkoutCategory-GetStarted-Button"]');
  }

  /**
   *  Returns the Strength & Sculpt button
   */
  getStrengthAndSculptButton() {
    return cy.get('button[data-test="WorkoutCategory-StrengthSculpt-Button"]');
  }

  /**
   *  Returns the Progressive Weight Training button
   */
  getProgressiveWeightTrainingButton() {
    return cy.get(
      'button[data-test="WorkoutCategory-ProgressiveWeightTraining-Button"]',
    );
  }

  /**
   *  Returns the Cardio Burn button
   */
  getCardioBurnButton() {
    return cy.get('button[data-test*="Burn"][data-test^="WorkoutCategory-"]');
  }

  /**
   *  Returns the Mat Definition button
   */
  getMatDefinitionButton() {
    return cy.get('button[data-test="WorkoutCategory-MatDefinition-Button"]');
  }

  /**
   *  Returns the Recover & Stretch button
   */
  getRecoverAndStretchButton() {
    return cy.get('button[data-test="WorkoutCategory-RecoverStretch-Button"]');
  }

  /**
   *  Returns the Movement Therapy button
   */
  getMovementTherapyButton() {
    return cy.get('button[data-test="WorkoutCategory-MovementTherapy-Button"]');
  }

  /**
   *  Returns the Meditation button
   */
  getMeditationButton() {
    return cy.get('button[data-test="WorkoutCategory-Meditation-Button"]');
  }

  /**
   * Returns the Classes Buttons Scroll Right button
   *
   * Note: Only visible when classes buttons scroll off screen to the right
   */
  getClassesButtonsScrollRightButton() {
    return cy.get('a[data-test="Classes-ScrollCategoriesRight-Button"]');
  }

  /**
   * Returns the Classes Buttons Scroll Left button
   *
   * Note: Only visible when classes buttons scroll off screen to the left
   */
  getClassesButtonsScrollLeftButton() {
    return cy.get('a[data-test="Classes-ScrollCategoriesLeft-Button"]');
  }

  /**
   *  Returns the Filters button
   */
  getFiltersButton() {
    return cy.get('button[data-test="Classes-Filter-Button"]');
  }

  /**
   * [FILTERS] Returns the Close button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersCloseButton() {
    return cy.get('button[data-test="FiltersDialog-Close-Button"]');
  }

  /**
   * [FILTERS] Returns the Clear button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersClearButton() {
    return cy.get('button[data-test="FiltersDialog-Clear-Button"]');
  }

  /**
   * [FILTERS] Returns the Show Classes button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersShowClassesButton() {
    return cy.get('button[data-test="FiltersDialog-ShowClasses-Button"]');
  }

  /**
   * [FILTERS] Returns the Class Length Accordion button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersClassLengthAccordionButton() {
    return cy.get(
      'div[data-test*="FiltersDialog-ToggleClassLengthAccordion-Button"]',
    );
  }

  /**
   * [FILTERS][CLASSLENGTH] Returns the Class Length Filter button for the
   *   entered duration
   *
   * Duration options are 515Mins, 1625Mins, 2635Mins, etc.
   * For more options inspect the filters and view the data-test tags
   * Default duration is 5-15 minutes.
   *
   * Note: Only visible after opening the Class Length Accordion.
   */
  getFiltersClassLengthFilterButton(duration) {
    if (duration == null) {
      duration = "515Mins";
    }
    return cy.get('div[data-test="FiltersDialog-' + duration + '-Button"]');
  }

  /**
   * [FILTERS] Returns the Pacing Accordion button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersPacingAccordionButton() {
    return cy.get(
      'div[data-test*="FiltersDialog-TogglePacingAccordion-Button"]',
    );
  }

  /**
   * [FILTERS][PACING] Returns the Pacing Filter button for the
   *   entered pace
   *
   * Pace options are SlowSteady, EbbsFlows, FastPaced
   * For more options inspect the filters and view the data-test tags
   * Default Pace is Slow & Steady.
   *
   * Note: Only visible after opening the Pacing Accordion.
   */
  getFiltersPacingFilterButton(pace) {
    if (pace == null) {
      pace = "SlowSteady";
    }
    return cy.get('div[data-test="FiltersDialog-' + pace + '-Button"]');
  }

  /**
   * [FILTERS] Returns the Live Virtual Studio Recordings Accordion button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersLiveVirtualStudioRecordingsAccordionButton() {
    return cy.get(
      'div[data-test*="FiltersDialog-ToggleLiveVirtualStudioRecordingsAccordion-Button"]',
    );
  }

  /**
   * [FILTERS][LVS] Returns the Live Virtual Studio Recording Filter
   *   button for the entered Checked radio button
   *
   * Radio button options are 0, 1, 2
   * For more options inspect the filters and view the data-test tags
   * Default Radio button is 0
   *
   * Note: Only visible after opening the Pacing Accordion.
   */
  getFiltersLiveVirtualStudioRecordingCheckedRadioButton(radioButton) {
    if (radioButton == null) {
      radioButton = 0;
    }
    return cy.get('svg[data-testid="RadioButtonCheckedIcon"]').eq(radioButton);
  }

  /**
   * [FILTERS][LVS] Returns the Live Virtual Studio Recording Filter
   *   button for the entered Unchecked radio button
   *
   * Radio button options are 0, 1, 2
   * For more options inspect the filters and view the data-test tags
   * Default Radio button is 1
   *
   * Note: Only visible after opening the Pacing Accordion.
   */
  getFiltersLiveVirtualStudioRecordingUncheckedRadioButton(radioButton) {
    if (radioButton == null) {
      radioButton = 1;
    }
    return cy
      .get('svg[data-testid="RadioButtonUncheckedIcon"]')
      .eq(radioButton);
  }

  /**
   * [FILTERS] Returns the Trainers Accordion button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersTrainersAccordionButton() {
    return cy.get(
      'div[data-test*="FiltersDialog-ToggleTrainersAccordion-Button"]',
    );
  }

  /**
   * [FILTERS][TRAINER] Returns the Trainer Filter button for
   *   the entered Trainer
   *
   * Trainer options are MaeveM, ZachM, StephenP, etc.
   * For more options inspect the filters and view the data-test tags
   * Default trainer is Maeve M.
   *
   * Note: Only visible after opening the Pacing Accordion.
   */
  getFiltersTrainerFilterButton(trainer) {
    if (trainer == null) {
      trainer = "Maeve";
    }
    return cy.get('div[data-test*="FiltersDialog-' + trainer + '"]');
  }

  /**
   * [FILTERS] Returns the Equipment Accordion button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersEquipmentAccordionButton() {
    return cy.get(
      'div[data-test*="FiltersDialog-ToggleEquipmentAccordion-Button"]',
    );
  }

  /**
   * [FILTERS][EQUIPMENT] Returns the Equipment button for
   *   the entered equipment
   *
   * Equipment options are NoEquipment, PBall, LightWeights, etc.
   * For more options inspect the filters and view the data-test tags
   * Default Equipment is no equipment
   *
   * Note: Only visible after opening the Pacing Accordion.
   */
  getFiltersEquipmentFilterButton(equipment) {
    if (equipment == null) {
      equipment = "NoEquipment";
    }
    return cy.get('div[data-test="FiltersDialog-' + equipment + '-Button"]');
  }

  /**
   * [FILTERS] Returns the Focus Accordion button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersFocusAccordionButton() {
    return cy.get(
      'div[data-test*="FiltersDialog-ToggleBodyFocusAccordion-Button"]',
    );
  }

  /**
   * [FILTERS][FOCUS] Returns the Focus button for
   *   the entered focus
   *
   * Focus options are FullBody, UpperBody, Lowerbody, etc.
   * For more options inspect the filters and view the data-test tags
   * Default Focus is Full Body
   *
   * Note: Only visible after opening the Pacing Accordion.
   */
  getFiltersFocusFilterButton(focus) {
    if (focus == null) {
      focus = "FullBody";
    }
    return cy.get('div[data-test="FiltersDialog-' + focus + '-Button"]');
  }

  /**
   * [FILTERS] Returns the Collections Accordion button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersCollectionsAccordionButton() {
    return cy.get(
      'div[data-test*="FiltersDialog-ToggleCollectionsAccordion-Button"]',
    );
  }

  /**
   * [FILTERS][Collections] Returns the Collections button for
   *   the entered collections
   *
   * Collections options are Modifications, Sculpt & Mobility, Sculpt & Run, etc.
   * For more options inspect the filters and view the data-test tags
   * Default Collections is Full Body
   *
   * Note: Only visible after opening the Pacing Accordion.
   */
  getFiltersCollectionsFilterButton(collection) {
    if (collection == null) {
      collection = "Modifications";
    }
    return cy.get('div[data-test="FiltersDialog-' + collection + '-Button"]');
  }

  /**
   * [FILTERS] Returns the Favorite Toggle button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersFavoriteToggleButton() {
    return cy.get('span[data-test="FiltersDialog-Favorites-Switch"]');
  }

  /**
   * [FILTERS] Returns the Watched Toggle button
   *
   * Note: Only visible after opening the Filters.
   */
  getFiltersWatchedToggleButton() {
    return cy.get('span[data-test="FiltersDialog-Watched-Switch"]');
  }

  /**
   * [FILTERS] Returns the Clear All filters button
   *
   * Note: Only visible after selecting a filter and selecting
   *   the show all button.
   */
  getFiltersClearAllFiltersButton() {
    return cy.get('button[data-test*="Classes-ClearAll"]');
  }

  /**
   * [FILTERS] Returns the Clear selected filter button
   *
   * Note: Only visible after selecting a filter and selecting
   *   the show all button.
   */
  getFiltersClearSelectedFilterButton(filter) {
    return cy.get('svg[data-test*="Classes-Remove' + filter + '"]');
  }

  /**
   * [FILTERS] Returns the Show Classes with Selected Equipment Only Button
   *
   * Note: Only visible after selecting an equipment filter and selecting
   *   the show all button.
   */
  getFiltersSelectedEquipmentOnlyButton() {
    return cy.get(
      'button[data-test="Equipment filter-Selected equipment only-Button"]',
    );
  }

  /**
   * [FILTERS] Returns the Show Classes with Selected Equipment and
   *   Additional Equipment Button
   *
   * Note: Only visible after selecting an equipment filter and selecting
   *   the show all button.
   */
  getFiltersAdditionalEquipmentButton() {
    return cy.get(
      'button[data-test="Equipment filter-Selected & additional equipment-Button"]',
    );
  }

  /**
   * Returns All workout class cards
   *
   * Note: It is possible to get the individual workout cards
   *   by using .eq()
   */
  getAllWorkoutClassCards() {
    return cy.get('div[data-test="Classes-ClassCard"]');
  }

  /**
   * [WORKOUTS] Returns the header for the entered workout class card
   *
   * Note: Default workout card is set to 0.
   */
  getWorkoutsClassCardHeader(workoutCard) {
    if (workoutCard == null) {
      workoutCard = 0;
    }
    return cy
      .get('div[data-test="Classes-ClassCard"]')
      .eq(workoutCard)
      .find("h6");
  }

  /**
   * [WORKOUTS] Returns the image for the entered workout class card
   *
   * Note: Default workout card is set to 0.
   */
  getWorkoutsClassCardImage(workoutCard) {
    if (workoutCard == null) {
      workoutCard = 0;
    }
    return cy
      .get('div[data-test="Classes-ClassCard"]')
      .eq(workoutCard)
      .find("img");
  }

  /**
   * [WORKOUTS] Returns the favorite button for the entered workout class card
   *
   * Note: Default workout card is set to 0.
   */
  getWorkoutsFavoriteButton(workoutCard) {
    if (workoutCard == null) {
      workoutCard = 0;
    }
    return cy
      .get('div[data-test="Classes-ClassCard"]')
      .eq(workoutCard)
      .find('button[data-test="WorkoutCard-Favorite-Button"]');
  }

  /**
   * Returns the Back to Top button
   */
  getBackToTopButton() {
    return cy.get('button[data-test="Classes-BackToTop-Button"]');
  }

  /**
   * Returns results on page
   */
  getResultsByCategory() {
    return cy.get('[data-test-id="workout-number-results"]');
  }

  /**
   * Returns results text on page
   */
  getResultsNumberByCategory(categoryResultsText) {
    const numericPart = categoryResultsText.replace(/[^0-9]/g, "");
    const numericValue = parseInt(numericPart, 10);
    return !isNaN(numericPart) ? numericValue : null;
  }

  /**
   * Returns category name
   */
  getCategoryTitle() {
    return cy.get('[data-test-id="category-title"]');
  }

  /**
   * Returns category description
   */
  getCategoryDescription() {
    return cy.get('[data-test-id="category-desc"]');
  }

  /**
   * Returns all cards title label
   */
  getAllWorkoutsTitle() {
    return cy.get('[data-test-id="workout-card-title"]');
  }

  /**
   * Returns first card class title label
   */
  getFirstClassTitle() {
    return cy.get('[data-test-id="workout-card-title"]').first();
  }

  /**
   * Returns workout title
   */
  getWorkoutTitleByName(workoutName) {
    return this.getAllWorkoutClassCards()
      .find("h6")
      .contains(workoutName, { matchCase: false });
  }

  /**
   * Returns empty results label
   */
  getNotExactMatchesLabel() {
    return cy.get('[data-test-id="not-exact-matches-label"]');
  }

  /**
   * Returns category name
   */
  getSearchTextInput() {
    return cy.get("input[id='outlined-search']");
  }

  /**
   * Returns Sort By button
   */
  getSortByButton() {
    return cy.get('[data-testid="ArrowDropDownIcon"]');
  }

  /**
   * Returns Sort By selected option
   * TODO: Update locator
   */
  getSortBySelectedOption() {
    return cy.get('div[aria-label="Filters Select Dropdown"] > h6');
  }

  /**
   * Returns first class date
   * TODO: Update locator
   */
  getFirstClassDate() {
    return this.getFirstClassTitle().prev();
  }

  /**
   * Returns Filters Dropdown Select Oldest Button
   */
  getFiltersDropdownSelectOldestButton() {
    return cy.get('[data-test="Filters-DropdownSelect-Oldest-Button"]');
  }

  /**
   * Returns Filters Dropdown Select Newest Button
   */
  getFiltersDropdownSelectNewestButton() {
    return cy.get('[data-test="Filters-DropdownSelect-Newest-Button"]');
  }

  /**
   * Returns Filters Dropdown Select Shortest Button
   */
  getFiltersDropdownSelectShortestButton() {
    return cy.get('[data-test="Filters-DropdownSelect-Shortest-Button"]');
  }

  /**
   * Returns Filters Dropdown Select Longest Button
   */
  getFiltersDropdownSelectLongestButton() {
    return cy.get('[data-test="Filters-DropdownSelect-Longest-Button"]');
  }
}
export default ClassesPage;
