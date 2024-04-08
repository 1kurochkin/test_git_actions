class OurClassesPage {
  /**
   *  Visits the page
   */
  visitPage() {
    return cy.visit("/pages/classes");
  }

  /**
   *  Returns top P.Volve Class text
   */
  getPVolveClassText() {
    return cy.get('div[builder-type*="blocks"]').eq(2);
  }

  /**
   *  Returns PVolve Class Image
   */
  getPVolveClassImage() {
    return cy.get('img[alt="pvolve-trainer"]');
  }

  /**
   *  Returns Class Types Video Container
   */
  getClassTypesVideoContainer() {
    return cy.get('div[class*="builder-block"] video[autoplay="true"]');
  }

  /**
   *  Returns Class Types Video Selector
   */
  getClassTypesVideoSelector() {
    return cy.get('div[class*="builder-block"').contains("Foundations");
  }

  /**
   *  Returns middle Free Trial button
   */
  getMidFreeTrialButton() {
    return cy.get('a[data-cta-name*="freetrial-button-mid"]');
  }

  /**
   *  Returns Movement Therapy Classes image collage
   */
  getMovementTherapyCollage() {
    return cy.get('div[class*="builder-image-sizer"]').eq(2);
  }

  /**
   *  Returns First Expert Link
   */
  getFirstExpertLink() {
    return cy.get('a[data-cta-name*="experts-button"]').eq(4);
  }

  /**
   *  Returns Second Expert Link
   */
  getSecondExpertLink() {
    return cy.get('a[data-cta-name*="experts-button"]').eq(5);
  }

  /**
   *  Returns Third Expert Link
   */
  getThirdExpertLink() {
    return cy.get('a[data-cta-name*="experts-button"]').eq(6);
  }

  /**
   *  Returns Fourth Expert Link
   */
  getFourthExpertLink() {
    return cy.get('a[data-cta-name*="experts-button"]').eq(7);
  }

  /**
   *  Returns Fifth Expert Link
   */
  getFifthExpertLink() {
    return cy.get('a[data-cta-name*="experts-button"]').eq(8);
  }

  /**
   *  Returns User quote text Carousel
   */
  getQuoteTextCarousel() {
    return cy.get('div[class="builder-carousel"]');
  }

  /**
   *  Returns Start Membership Button
   */
  getStartMembershipButton() {
    return cy.get('a[data-cta-name*="membershipPDP-button"]').eq(0);
  }

  /**
   *  Returns Learn More Button
   */
  getLearnMoreButton() {
    return cy.get('a[data-cta-name*="virtualstudio-button"]').eq(0);
  }

  /**
   *  Returns Choose Location Drop-down
   */
  getChooseLocationDropDown() {
    return cy.get('select[class*="builder-block"]').contains("Choose location");
  }

  /**
   *  Returns Explore our Studios button
   */
  getExploreStudiosButton() {
    return cy.get('span[data-cta-name="studios-button"]').eq(0);
  }
}
export default OurClassesPage;
