class MethodsPage {
  /**
   * Visits the Our Method page
   */
  visitPage() {
    return cy.visit("/pages/method");
  }

  /**
   * Returns the Header text in the hero image
   */
  getHeroImageHeaderText() {
    return cy
      .get('span[class*="builder-text"] p')
      .contains("THE P.VOLVE METHOD", { matchCase: false });
  }

  /**
   * Returns the Take Our Quiz to Get Started button in hero section
   */
  getHeroTakeQuizButton() {
    return cy.get('[data-cta-name="hero-freetrial-button"]');
  }

  /**
   * Returns the Header text in the first Section
   */
  getFirstSectionHeaderText() {
    return cy
      .get('span[class*="builder-text"] p')
      .contains("Our Approach", { matchCase: false });
  }

  /**
   * Returns the Video element in the first section
   */
  getFirstSectionVideo() {
    return cy.get('video[class*="builder-video"]');
  }

  /**
   * Returns the Header text in the second Section
   */
  getSecondSectionHeaderText() {
    return cy
      .get('span[class*="builder-text"] p')
      .contains("What Are the Results?", { matchCase: false });
  }

  /**
   * Returns the Take Our Quiz to Get Started button in second section
   */
  getSecondSectionTakeQuizButton() {
    return cy.get('[data-cta-name="freetrial-button"]');
  }
}
export default MethodsPage;
