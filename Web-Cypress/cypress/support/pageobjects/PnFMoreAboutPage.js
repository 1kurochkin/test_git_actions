class PnFMoreAbout {
  /**
   * Visits the More About Page
   */
  visitMoreAboutPage(phase) {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/more-about/" + phase, {
      failOnStatusCode: false,
    });
  }

  /**
   * Returns the More About header
   */
  getMoreAboutHeaderText() {
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
   * Returns the More About Icon
   */
  getMoreAboutIcon() {
    return cy.get('div[class*="phase-header-info-title"] i[class*="pv-icon"]');
  }

  /**
   * Returns the Menstrual progress bar
   */
  getMenstrualProgressBar() {
    return cy.get('div[class*="progress-bar-module--progress-block"]').eq(0);
  }

  /**
   * Returns the Follicular progress bar
   */
  getFollicularProgressBar() {
    return cy.get('div[class*="progress-bar-module--progress-block"]').eq(1);
  }

  /**
   * Returns the Ovulatory progress bar
   */
  getOvulatoryProgressBar() {
    return cy.get('div[class*="progress-bar-module--progress-block"]').eq(2);
  }

  /**
   * Returns the Luteal progress bar
   */
  getLutealProgressBar() {
    return cy.get('div[class*="progress-bar-module--progress-block"]').eq(3);
  }

  /**
   * Returns the Phase Days text
   */
  getPhaseDaysText() {
    return cy.get('div[class*="phases-length-container"] p[class*="days"]');
  }

  /**
   * Returns the Pencil Icon
   */
  getPencilIcon() {
    return cy.get(
      'a[href="/questionnaires/phase-and-function/edit-my-cycle"] i[class*="pv-icon"]',
    );
  }

  /**
   * Returns the right arrow for the More About page
   */
  getRightArrowLink() {
    return cy.get('a[class*="pv-arrow-right"][href*="/more-about/"]');
  }

  /**
   * Returns the Left arrow for the More About page
   */
  getLeftArrowLink() {
    return cy.get('a[class*="pv-arrow-left"][href*="/more-about/"]');
  }

  /**
   * Returns the Hormones Header text
   */
  getHormonesHeaderText() {
    return cy.get(
      'div[class*="phase-enrolled-hormones"] h2[class*="bold upper margin--0"]',
    );
  }

  /**
   * Returns the Hormones body text
   */
  getHormonesBodyText() {
    return cy.get(
      'div[class*="phase-enrolled-hormones"] div[class*="row padding-top--0"]',
    );
  }

  /**
   * Returns the Hormones graph Image
   */
  getHormonesGraphImage() {
    return cy.get(
      'div[class*="phase-enrolled-hormones"] img[alt="Hormones graphic"]',
    );
  }

  /**
   * Returns the Mind Icon separator
   */
  getFirstSeparatorMindIcon() {
    return cy.get(
      'div[class*="phase-enrolled-separator"] i[class="pv-icon pv-mind"]',
    );
  }

  /**
   * Returns the Mind Header Text
   */
  getMindHeaderText() {
    return cy
      .get(
        'div[class*="ui grid justifyContent-center"] h2[class*="bold upper margin--0"]',
      )
      .eq(1);
  }

  /**
   * Returns the Mind Body Text
   */
  getMindBodyText() {
    return cy
      .get(
        'div[class*="ui grid justifyContent-center"] div[class*="row padding-top--0"]',
      )
      .eq(1);
  }

  /**
   * Returns the Movement Icon separator
   */
  getSecondSeparatorMovementIcon() {
    return cy.get(
      'div[class*="phase-enrolled-separator"] i[class="pv-icon pv-movement"]',
    );
  }

  /**
   * Returns the Movement Header Text
   */
  getMovementHeaderText() {
    return cy
      .get(
        'div[class*="ui grid justifyContent-center"] h2[class*="bold upper margin--0"]',
      )
      .eq(2);
  }

  /**
   * Returns the Movement Body Text
   */
  getMovementBodyText() {
    return cy
      .get(
        'div[class*="ui grid justifyContent-center"] div[class*="row padding-top--0"]',
      )
      .eq(2);
  }

  /**
   * Returns the Movement Tip Header Text
   */
  getMovementTipHeaderText() {
    return cy
      .get(
        'div[class*="heading-paragraph-module"] h4[class*="bold upper margin--0"]',
      )
      .eq(0);
  }

  /**
   * Returns the Movement Tip Body Text
   */
  getMovementTipBodyText() {
    return cy
      .get(
        'div[class*="heading-paragraph-module"] div[class*="row padding-top--0"]',
      )
      .eq(0);
  }

  /**
   * Returns the Phase Library Carousel Next Button
   */
  getPhaseLibraryCarouselNextButton() {
    return cy.get(
      'div[class*="carousel-header-buttons"] button[class*="buttonNext"]',
    );
  }

  /**
   * Returns the Phase Library Carousel Back Button
   */
  getPhaseLibraryCarouselBackButton() {
    return cy.get(
      'div[class*="carousel-header-buttons"] button[class*="buttonBack"]',
    );
  }

  /**
   * Returns the Phase Library See All Link
   */
  getPhaseLibrarySeeAllLink(phase) {
    return cy.get('a[href="/series/chapters/' + phase + '-phase/"]');
  }

  /**
   * Returns the Phase Library First Workout Video Link
   */
  getPhaseLibraryFirstWorkoutVideoLink() {
    return cy
      .get('li[class*="slideHorizontal"]')
      .eq(1)
      .find('div[class="ui fluid card"] a[href*="/video"]');
  }

  /**
   * Returns the Phase Library First Workout Details page link
   */
  getPhaseLibraryFirstWorkoutDetailsPageLink() {
    return cy
      .get('li[class*="slideHorizontal"]')
      .eq(1)
      .find('div[class*="content workout-card-module"] a[href*="/workouts/"]');
  }

  /**
   * Returns the Phase Library First Workout Content
   */
  getPhaseLibraryFirstWorkoutContent() {
    return cy
      .get('li[class*="slideHorizontal"]')
      .eq(1)
      .find('div[class*="content workout-card-module"]');
  }

  /**
   * Returns the Phase Library First Workout Favorite Button
   */
  getPhaseLibraryFirstWorkoutFavoriteButton() {
    return cy
      .get('li[class*="slideHorizontal"]')
      .eq(1)
      .find('button[class*="favorite-button-module"]');
  }

  /**
   * Returns the Meals Icon separator
   */
  getThirdSeparatorMealsIcon() {
    return cy.get(
      'div[class*="phase-enrolled-separator"] i[class="pv-icon pv-meals"]',
    );
  }

  /**
   * Returns the Meals Header Text
   */
  getMealsHeaderText() {
    return cy
      .get(
        'div[class*="ui grid justifyContent-center"] h2[class*="bold upper margin--0"]',
      )
      .eq(3);
  }

  /**
   * Returns the Meals Body Text
   */
  getMealsBodyText() {
    return cy
      .get(
        'div[class*="ui grid justifyContent-center"] div[class*="row padding-top--0"]',
      )
      .eq(4);
  }

  /**
   * Returns the Foods to Avoid Header Text
   */
  getFoodsToAvoidHeaderText() {
    return cy
      .get(
        'div[class*="heading-paragraph-module"] h4[class*="bold upper margin--0"]',
      )
      .eq(1);
  }

  /**
   * Returns the Foods to Avoid Body Text
   */
  getFoodsToAvoidBodyText() {
    return cy
      .get(
        'div[class*="heading-paragraph-module"] div[class*="row padding-top--0"]',
      )
      .eq(1);
  }

  /**
   * Returns the Foods link
   */
  getFoodsLink(phase) {
    return cy.get(
      'div[class*="widget-icon-module"] a[href="/foods/' + phase + '"]',
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

  /**
   * Returns the Sources link
   */
  getSourcesLink() {
    return cy.get(
      'div[class*="footer-link-right-module"] a[href="/sources/phase-and-function"]',
    );
  }
}
export default PnFMoreAbout;
