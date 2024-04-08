class MyPlanPage {
  /**
   * Visits the page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/my-plan");
  }

  /**
   * [HERO] Returns the Hero module. Not interactable, only used for validation.
   *
   * Ex: myPlanPage.getBodyHero().should('be.visible');
   */
  getBodyHero() {
    return cy.get('div[class*="my-plan-module--hero-section"]');
  }

  /**
   * [HERO] Returns the Hero Video container. Not interactable, only used for validation.
   *
   * Ex: myPlanPage.getBodyHeroVideo().should('be.visible');
   */
  getBodyHeroVideo() {
    return cy.get('div[class*="scheduled-workouts-module--video-container"]');
  }

  /**
   * [HERO] Returns the Hero Video Play Button.
   */
  getBodyHeroVideoPlayButton() {
    return cy.get('a[class*="scheduled-workouts-module--play-button"]');
  }

  /**
   * [HERO] Returns the Hero Description 'SEE MORE' link.
   */
  getBodyHeroDescriptionSeeMoreLink() {
    return cy.get('a[class*="scheduled-workouts-module--see-more"]');
  }

  /**
   * [HERO] Returns the Hero Description 'add to favorites' button.
   */
  getBodyHeroDescriptionAddToFavoritesButton() {
    return cy.get('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * [HERO] Returns the Hero carousel back arrow button.
   */
  getBodyHeroCarouselBackButton() {
    return cy.get('button[class*="carousel__back-button"]');
  }

  /**
   * [HERO] Returns the Hero carousel middle dot button that returns to current day.
   */
  getBodyHeroCarouselMiddleButton() {
    return cy.get('button[class*="carousel__dot"]');
  }

  /**
   * [HERO] Returns the Hero carousel next arrow button.
   */
  getBodyHeroCarouselNextButton() {
    return cy.get('button[class*="carousel__next-button"]');
  }

  /**
   * [SERIES] Returns the series carousel.
   */
  getSeriesCarousel() {
    return cy.get('div[class*="slideInner"]');
  }

  /**
   * [SERIES] Returns the "Today's Workout" Header text in series navigation.
   */
  getSeriesTodaysWorkoutHeaderText() {
    return cy
      .get(
        'div[class*="scheduled-workouts-module"] h1[class*="scheduled-workouts-module"]',
      )
      .contains("Today's Workout");
  }

  /**
   * [SERIES] Returns the title of Today's Workout.
   */
  getSeriesTodaysWorkoutTitle() {
    return cy.get(
      'div[class*="scheduled-workouts-module"] h4[class*="scheduled-workouts-module--workout-name"]',
    );
  }

  /**
   * [SERIES] Returns the "Tomorrow's Workout" Header text in series navigation.
   */
  getSeriesTomorrowsWorkoutHeaderText() {
    return cy
      .get(
        'div[class*="scheduled-workouts-module"] p[class*="scheduled-workouts-module"]',
      )
      .contains("Tomorrow's Workout");
  }

  /**
   * [SERIES] Returns the "Tomorrow's Workout" Header text for Rest and Walk days in series navigation.
   */
  getSeriesTomorrowsRestWalkDayWorkoutHeaderText() {
    return cy
      .get('div[class*="workout-schedule-module"]')
      .contains("Tomorrow's Workout");
  }

  /**
   * [SERIES] Returns the Play button of the video in the series.
   */
  getBodySeriesPlayButton() {
    return cy.get(
      'div[class*="scheduled-workouts-module"] a[class*="scheduled-workouts-module--play-button"]',
    );
  }

  /**
   * [SERIES] Returns the Link of the series, it also shows % complete text.
   */
  getBodySeriesLink() {
    return cy
      .get('li[class*="carousel__slide--visible"] a[href*="/series/"]')
      .contains("complete");
  }

  /**
   * [SERIES] Returns the Back button of the series.
   */
  getBodySeriesBackButton() {
    return cy.get(
      'div[class*="my-plan-module--page-section"] button[class*="carousel__back-button"]',
    );
  }

  /**
   * [SERIES] Returns the Return to Today button of the series.
   */
  getBodySeriesReturnToTodayButton() {
    return cy.get(
      'div[class*="my-plan-module--page-section"] button[class*="carousel__dot carousel__dot"]',
    );
  }

  /**
   * [SERIES] Returns the Next button of the series.
   */
  getBodySeriesNextButton() {
    return cy.get(
      'div[class*="my-plan-module--page-section"] button[class*="carousel__next-button"]',
    );
  }

  /**
   * [RESUME] Returns the Play button when in the Resume state.
   */
  getResumePlayButton() {
    return cy.get(
      'a[href*="/video"] div[class*="scheduled-workouts-module--resume-button"]',
    );
  }

  /**
   * [RESUME] Returns the Text next to the Play button in the Resume state.
   */
  getResumePlayButtonText() {
    return cy.get('div[class*="scheduled-workouts-module--caption"]');
  }

  /**
   * [RESUME] Returns the Restart button when in the Resume state.
   */
  getResumeRestartButton() {
    return cy.get(
      'a[href*="/video"] div[class*="scheduled-workouts-module--replay-button"]',
    );
  }

  /**
   * [PROMO] Returns the Promo module. Not interactable, only used for validation.
   *
   * Ex: myPlanPage.getBodyPromo().should('be.visible');
   */
  getBodyPromo() {
    return cy.get('div[class*="promo-module-a-module--promo-wrapper"]');
  }

  /**
   * [PROMO] Returns the Promo 'SHOP NOW' link.
   */
  getBodyPromoShopNowLink() {
    return cy
      .get('div[class*="promo-module-a-module--promo-wrapper"]')
      .contains("SHOP NOW");
  }

  /**
   * [THISWEEK] Returns the 'This Week' module. Not interactable, only used for validation.
   *
   * Ex: myPlanPage.getBodyThisWeek().should('be.visible');
   */
  getBodyThisWeek() {
    return cy.get('div[class*="this-week-module--this-week-wrapper"]');
  }

  /**
   * [THISWEEK] Returns the 'All time workouts number' module.
   */
  getBodyThisWeekAllTimeWorkouts() {
    return cy.get('div[class*="this-week-module--stat"] h1').eq(1);
  }

  /**
   * [THISWEEK] Returns Today's Weekday activity.
   */
  getBodyThisWeekTodaysActivity() {
    return cy.get('div[class*="this-week-module--today"]');
  }

  /**
   * [THISWEEK] Returns Today's Weekday activity checkmark icon.
   */
  getBodyThisWeekTodaysActivityCheckmarkIcon() {
    return cy.get(
      'div[class*="this-week-module--today"] i[class*="pv-icon pv-checkmark"]',
    );
  }

  /**
   * [FAVORITES] Returns the Favorites module. Not interactable, only used for validation.
   *
   * Ex: myPlanPage.getBodyFavorites().should('be.visible');
   */
  getBodyFavorites() {
    return cy.get('div[class*="workout-schedule-module"]');
  }

  /**
   * [FTU] Returns the Hero Title text in the FTU experience.
   */
  getFTUHeroTitle() {
    return cy
      .get('div[class*="first-time-user-hero-module"]')
      .contains("Your journey starts here", { matchCase: false });
  }

  /**
   * [FTU] Returns the No Equipment link in the FTU experience.
   */
  getFTUNoEquipmentLink() {
    return cy.get('div[id="tabs-component"] a').eq(0);
  }

  /**
   * [FTU] Returns the Equipment link in the FTU experience.
   */
  getFTUEquipmentLink() {
    return cy.get('div[id="tabs-component"] a').eq(1);
  }

  /**
   * [FTU] Returns the first Series Card link in the FTU experience.
   */
  getFTUFirstSeriesLink() {
    return cy.get('a[class*="series-card-module"]').eq(0);
  }

  /**
   * [FTU] Returns the second Series Card link in the FTU experience.
   */
  getFTUSecondSeriesLink() {
    return cy.get('a[class*="series-card-module"]').eq(1);
  }

  /**
   * Returns the Book 15 Minutes button in the FTU experience.
   */
  getFTUBook15MinutesButton() {
    return cy.get(
      'div[class*="first-time-user-hero-module--consultation-cta-section"] a',
    );
  }

  /**
   * [NEWWORKOUTS] Returns the first Title workout
   */
  getBodyNewWorkoutsFirstCardTiTle() {
    return cy
      .get('div[class="content workout-card-module--content"]')
      .find('div[class*="header workout-card-module--header"]');
  }

  /**
   * [Favourite] Returns the Added Favourite workout
   */
  getFavouriteWorkoutButton() {
    return cy
      .get('p[class*="workout-card-module--meta"]')
      .find('button[class*="favorite-button-module--favorite-button"]');
  }

  /**
   * [Favourite] Returns the Section Label from Favourite workout section
   */
  getFavouriteWorkoutSectionLabel() {
    return cy
      .get('div[class*="favorites-workouts-module--no-favorites-card"]')
      .contains("Love a workout?");
  }

  /**
   * [Favourite] Returns the See All Favorited workouts link
   */
  getFavouriteWorkoutsSeeAllLink() {
    return cy.get(
      'div[class*="workout-schedule-module--favorites"] a[href*="/workouts/favorites"]',
    );
  }

  /**
   * [Favourite] Returns the Favorite carousel back button
   */
  getFavouriteCarouselBackButton() {
    return cy.get(
      'div[class*="workout-schedule-module--favorites"] button[class*="buttonBack"]',
    );
  }

  /**
   * [Favourite] Returns the Favorite carousel next button
   */
  getFavouriteCarouselNextButton() {
    return cy.get(
      'div[class*="workout-schedule-module--favorites"] button[class*="buttonNext"]',
    );
  }

  /**
   * [Favourite] Returns the favorite carousel.
   */
  getFavouritesCarousel() {
    return cy.get('div[class*="favorites-spacing"]');
  }

  /**
   * [Favourite] Returns the favorite button of the first card.
   */
  getFavouritesFirstCardFavoriteButton() {
    return cy
      .get('div[class*="favorites-spacing"]')
      .find('button[class*="favorite-button-module--favorite-button"]')
      .eq(0);
  }

  /**
   * [PnF] Returns the Phase Header.
   */
  getPnFPhaseHeader() {
    return cy.get('div[class*="phase-details"] p[class*="phase-header"]');
  }

  /**
   * [PnF] Returns the color of the progress arrow.
   */
  getPnFProgressArrow(phase) {
    return cy.get(
      'div[class*="progress-arrow"] div[class*="pv-' + phase + '"]',
    );
  }

  /**
   * [PnF] Returns the edit cycle link.
   */
  getPnFEditCycleLink() {
    return cy.get(
      'div[class*="phase-controls"] a[href="/questionnaires/phase-and-function/edit-my-cycle"]',
    );
  }

  /**
   * [PnF] Returns the More About [Phase] link.
   */
  getPnFMoreAboutLink(phase) {
    return cy.get(
      'div[class*="phase-and-function-module--description"] a[href="/more-about/' +
        phase +
        '"]',
    );
  }

  /**
   * [PnF] Returns the Library [Phase] link.
   */
  getPnFLibraryLink(phase) {
    return cy.get(
      'div[class*="phase-and-function-module--widget-icons"] a[href="/series/chapters/' +
        phase +
        '-phase"]',
    );
  }

  /**
   * [PnF] Returns the Foods [Phase] link.
   */
  getPnFFoodsLink(phase) {
    return cy.get(
      'div[class*="phase-and-function-module--widget-icons"] a[href="/foods/' +
        phase +
        '"]',
    );
  }

  /**
   * [PnF] Returns the Meals [Phase] link.
   */
  getPnFMealsLink(phase) {
    return cy.get(
      'div[class*="phase-and-function-module--widget-icons"] a[href="/meals/' +
        phase +
        '"]',
    );
  }

  /**
   * [SERIES COMPLETE] Returns the Series Complete Banner.
   */
  getSeriesCompleteBanner() {
    return cy.get('div[class*="completed-container"]');
  }

  /**
   * [SERIES COMPLETE] Returns the Series Complete Icon.
   */
  getSeriesCompleteIcon() {
    return cy.get('div[class*="complete-badge-box"] i');
  }

  /**
   * [SERIES COMPLETE] Returns the Series Complete text.
   */
  getSeriesCompleteText() {
    return cy
      .get('div[class*="complete-congrats-box"] span')
      .contains("Congrats!");
  }

  /**
   * [SERIES COMPLETE] Returns the Series Complete Make your next move text.
   */
  getSeriesCompleteMakeYourNextMoveText() {
    return cy
      .get('div[class*="congrats-section"] h2')
      .contains("make your next move");
  }

  /**
   * [SERIES COMPLETE] Returns the Series Complete Series Carousel section.
   */
  getSeriesCompleteSeriesCarouselSection() {
    return cy.get('div[class*="series-carousel"]');
  }

  /**
   * [VIDEO COMPLETE] Returns the Video Complete Completed Today section.
   */
  getVideoCompleteCompletedTodaySection() {
    return cy.get('div[class*="completed-summary"]');
  }

  /**
   * [VIDEO COMPLETE] Returns the Video Complete Completed Today text.
   */
  getVideoCompleteCompletedTodayText() {
    return cy.get(
      'div[class*="completed-summary"] div[class*="completed-title"]',
    );
  }

  /**
   * [VIDEO COMPLETE] Returns the Video Complete Completed Today Video cards.
   */
  getVideoCompleteCompletedTodayVideoCards() {
    return cy.get(
      'div[class*="completed-summary"] div[class*="tiny-cards"] div[class*="workout-schedule-module"]',
    );
  }

  /**
   * [VIDEO COMPLETE] Returns the Video Complete Workout Complete Section.
   */
  getVideoCompleteWorkoutCompleteSection() {
    return cy.get('div[class*="completed-inner-box"]');
  }

  /**
   * [FALL CHALLENGE] Returns the Fall Challenge banner header text.
   */
  getFallChallengeBannerHeaderText() {
    return cy
      .get("p")
      .contains("Tone up for Fall Challenge", { matchCase: false });
  }

  /**
   * [FALL CHALLENGE] Returns the Fall Challenge banner Click Here button.
   */
  getFallChallengeBannerClickHereButton() {
    return cy.get('a[href*="/challenge/2022-fall-challenge"');
  }
}
export default MyPlanPage;
