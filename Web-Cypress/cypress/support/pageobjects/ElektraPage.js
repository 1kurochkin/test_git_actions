class ElektraPage {
  /**
   *  Visits Elektra page
   */
  visitPage() {
    return cy.visit("/pages/elektra");
  }

  /**
   *  Returns top Elektra link.
   */
  getHeroElektraLink() {
    return cy.get('a[href*="elektrahealth.com"]').eq(0);
  }

  /**
   *  Returns Hero Learn More button.
   */
  getHeroLearnMoreButton() {
    return cy.get('a[data-cta-name*="hero-checkout-button"]');
  }

  /**
   *  Returns Middle looping video.
   */
  getMidLoopingVideo() {
    return cy.get('iframe[src*="vimeo.com"]');
  }

  /**
   *  Returns Middle Elektra Health Link.
   */
  getMidElektraHealthLink() {
    return cy.get('a[href*="elektrahealth.com"]').eq(1);
  }

  /**
   *  Returns Middle Start The Series button.
   */
  getMidStartTheSeriesButton() {
    return cy.get('span[data-cta-name*="mid-series-button"]').eq(0); //comment out in test
  }

  /**
   *  Returns Middle Get Moving Button.
   */
  getMidGetMovingButton() {
    return cy.get('span[data-cta-name="mid-series-button"]').eq(1); //comment out in test
  }

  /**
   *  Returns Elektra Expert link
   */
  getElektraExpertLink() {
    return cy.get('a[href*="elektrahealth.com"]').eq(2);
  }

  /**
   *  Returns P.Volve Expert link
   */
  getPVolveExpertLink() {
    return cy.get('a[href*="pvolve.com/pages/antonietta"]');
  }

  /**
   *  Returns Product section Promo code text.
   */
  getProductPromoCodeText() {
    return cy
      .get('span[class*="builder-text"]')
      .contains("Use code MENO30 for $30");
  }

  /**
   *  Returns Product image carousel.
   */
  getProductImageCarousel() {
    return cy.get('div[id="kit"] div[class="builder-carousel"]');
  }

  /**
   *  Returns Product Add To Cart button.
   */
  getProductAddToCartButton() {
    return cy
      .get('a[class*="builder-block"]')
      .contains("Add To Cart", { matchCase: false });
  }

  /**
   *  Returns First Product Detail Accordion Title.
   */
  getFirstProductAccordionTitle() {
    return cy.get('div[class*="builder-accordion-title"][data-index="0"]');
  }

  /**
   *  Returns Second Product Detail Accordion Title.
   */
  getSecondProductAccordionTitle() {
    return cy.get('div[class*="builder-accordion-title"][data-index="1"]');
  }

  /**
   *  Returns Third Product Detail Accordion Title.
   */
  getThirdProductAccordionTitle() {
    return cy.get('div[class*="builder-accordion-title"][data-index="2"]');
  }

  /**
   *  Returns testimonies text carousel.
   */
  getTestimonyTextCarousel() {
    return cy.get('div[class*="slick-slide"][data-index="1"]');
  }

  /**
   *  Returns Bottom Get Access Button.
   */
  getBottomGetAccessButton() {
    return cy.get('a[data-cta-name*="bottom-checkout-button"]');
  }
}
export default ElektraPage;
