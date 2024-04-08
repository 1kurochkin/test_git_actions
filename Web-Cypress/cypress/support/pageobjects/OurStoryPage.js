class OurStoryPage {
  /**
   * Navigate to the Our Story page
   */
  visitPage() {
    return cy.visit("/pages/our-story");
  }

  /**
   * Returns and checks for the How It All Began header text
   */
  getHowItAllBeganHeaderText() {
    return cy.get('span[class*="builder-text"]').contains("HOW IT ALL BEGAN");
  }

  /**
   * Returns the video wrapper
   */
  getVideoWrapper() {
    return cy.get('iframe[src*="video/"]');
  }

  /**
   * Verifies the Built For Women Like Us element text
   */
  getBuiltForWomenLikeUsText() {
    return cy
      .get('span[class*="builder-text"]')
      .contains("BUILT FOR WOMEN LIKE US");
  }

  /**
   * [Carousel] Returns the carousel
   */
  getCarousel() {
    return cy.get('div[class="builder-carousel"]').eq(0);
  }

  /**
   * [Carousel] Returns the carousel next button
   */
  getCarouselNextButton() {
    return cy
      .get(
        'div[class="builder-carousel"] div[class*="slick-next"] div[class*="builder-block builder-"]',
      )
      .eq(0);
  }

  /**
   * [Carousel] Returns the carousel back button
   */
  getCarouselBackButton() {
    return cy
      .get(
        'div[class="builder-carousel"] div[class*="slick-prev"] div[class*="builder-block builder-"]',
      )
      .eq(0);
  }

  /**
   * [Carousel] Verifies some text on the first carousel slide
   */
  getCarouselFirstSlideText() {
    return this.getCarousel().contains("— Julie, President");
  }

  /**
   * [Carousel] Verifies some text on the second carousel slide
   */
  getCarouselSecondSlideText() {
    return this.getCarousel().contains("Antonietta, VP of Talent and Training");
  }

  /**
   * Returns Take Our Quiz button element
   */
  getTakeOurQuizButton() {
    return cy.get('a[href*="quiz.pvolve.com"]');
  }

  /**
   * Verification of the Footer Quote
   * 'I must know my body - so I can know myself.'
   */
  getFooterQuoteOneText() {
    return cy
      .get('span[class*="builder-text"]')
      .contains("I must know my body - so I can know myself.");
  }

  /**
   * Verification of the Footer Quote
   * 'And when I know myself, I will live a better life.'
   */
  getFooterQuoteTwoText() {
    return cy
      .get('span[class*="builder-text"]')
      .contains("And when I know myself, I will live a better life.");
  }
}

export default OurStoryPage;
