class SpecialtyPainLandingPage {
  /**
   * Visits the Essentials Landing Page.
   */
  visitPage() {
    return cy.visit("/pages/nn-ad-specialty-relief-offer");
  }

  /**
   * Returns the View Your Exclusive Offer button in the Hero image.
   */
  getViewExclusiveOfferButton() {
    return cy.get(
      'a[data-cta-name="viewKits-hero"][href*="/pages/nn-ad-specialty-relief-offer"]',
    );
  }

  /**
   * Returns the Get Started Button
   */
  getGetStartedButton() {
    return cy.get(
      'a[data-cta-name="viewKits-secondBlock"][href*="pages/nn-ad-specialty-relief-offer#kits"]',
    );
  }

  /**
   * Returns the Add to Cart button in the middle of the page.
   */
  getAddToCartButton() {
    return cy.get(
      'a[data-cta-name="productAdded-mid"][href*="cart/add?id=31880943239225"]',
    );
  }

  /**
   * Returns the Video iFrame.
   */
  getVideoIFrame() {
    return cy.get('div[class="builder-custom-code"] iframe');
  }

  /**
   * Returns the First Carousel button.
   */
  getFirstCommentCarouselButton() {
    return cy.get('ul[class="slick-dots"]').find("li").eq(0);
  }

  /**
   * Returns the Second Carousel button.
   */
  getSecondCommentCarouselButton() {
    return cy.get('ul[class="slick-dots"]').find("li").eq(1);
  }

  /**
   * Returns the Third Carousel button.
   */
  getThirdCommentCarouselButton() {
    return cy.get('ul[class="slick-dots"]').find("li").eq(2);
  }

  /**
   * Returns the BuzzFeed Link.
   */
  getBuzzFeedLink() {
    return cy.get(
      'a[href="https://www.buzzfeed.com/hbraga/small-exercise-products"]',
    );
  }

  /**
   * Returns the VOGUE Link.
   */
  getVogueLink() {
    return cy.get(
      'a[href="https://www.vogue.co.uk/beauty/article/pvolve-review"]',
    );
  }

  /**
   * Returns the SELF Link.
   */
  getSelfLink() {
    return cy.get(
      'a[href="https://www.self.com/story/popular-at-home-workout-programs"]',
    );
  }

  /**
   * Returns the Women's Health Link.
   */
  getWomensHealthLink() {
    return cy.get(
      'a[href="https://www.womenshealthmag.com/fitness/g33771199/kate-bosworth-workout-routine/"]',
    );
  }

  /**
   * Returns the Well and Good Link.
   */
  getWellAndGoodLink() {
    return cy.get(
      'a[href="https://www.wellandgood.com/training-slow-twitch-muscle-fibers/"]',
    );
  }

  /**
   * Returns the Today Link.
   */
  getTodayLink() {
    return cy.get(
      'a[href="https://www.today.com/tmrw/p-volve-workout-s-getting-me-through-pandemic-t192197"]',
    );
  }

  /**
   * Returns the Lets Get Started button at the bottom of the page.
   */
  getLetsGetStartedButton() {
    return cy.get(
      'a[data-cta-name="productAdded-bottom"][href*="cart/add?id=31880943239225"]',
    );
  }
}
export default SpecialtyPainLandingPage;
