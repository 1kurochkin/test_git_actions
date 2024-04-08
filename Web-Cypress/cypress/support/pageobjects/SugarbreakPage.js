class SugarbreakPage {
  /**
   *  Visits Sugarbreak Page.
   */
  visitPage() {
    return cy.visit("/pages/sugarbreak");
  }

  /**
   *  Returns Promo code text element.
   */
  getHeroPromoCodeText() {
    return cy
      .get('span[class*="builder-text"] p')
      .contains("for just $99 with code SGRBRK.");
  }

  /**
   *  Returns Hero Buy Now Button.
   */
  getHeroBuyNowButton() {
    return cy.get('a[data-cta-name*="hero-checkout-button"]');
  }

  /**
   *  Returns Sugarbreak site link.
   */
  getSugarbreakSiteLink() {
    return cy.get('a[href*="sugarbreak.com/pages/p-volve"]').eq(0);
  }

  /**
   *  Returns Mid Get Started button.
   */
  getMidGetStartedButton() {
    return cy.get('a[data-cta-name*="mid-checkout-button"]').eq(0);
  }

  /**
   *  Return First Diabetes Disclaimer Link
   */
  getFirstDisclaimerLink() {
    return cy.get('a[href*="diabetes.org/healthy-living"]').eq(0);
  }

  /**
   *  Return Second Diabetes Disclaimer Link
   */
  getSecondDisclaimerLink() {
    return cy.get('a[href*="diabetes.org/healthy-living"]').eq(1);
  }

  /**
   *  Returns Product Add To Cart button.
   */
  getProductAddToCartButton() {
    return cy.get('a[data-cta-name*="mid-checkout-button"]').eq(1);
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
   *  Returns Bottom Promo Code Text.
   */
  getMidBigPromoCodeText() {
    return cy.get('div[id*="kit"]').contains("SGRBRK");
  }

  /**
   *  Returns Bottom Buy Now Button.
   */
  getMidBuyNowButton() {
    return cy.get('a[data-cta-name*="mid-checkout-button"]').eq(2);
  }

  /**
   *  Returns Series Preview Video.
   */
  getSeriesPreviewVideo() {
    return cy.get('div[class="builder-embed"] iframe');
  }

  /**
   *  Returns Sugarbreak Expert Link.
   */
  getSugarbreakExpertLink() {
    return cy.get('a[href*="sugarbreak.com/pages/p-volve"]').eq(1);
  }

  /**
   *  Returns P. Volve Expert Link.
   */
  getPVolveExpertLink() {
    return cy.get('a[href*="pvolve.com/pages/maeve"]');
  }

  /**
   *  Returns Bottom Start Now Button.
   */
  getBottomStartNowButton() {
    return cy.get('a[data-cta-name*="bottom-checkout-button"]');
  }

  /**
   *  Returns bottom Promo code text.
   */
  getBottomPromoCodeText() {
    return cy
      .get('span[class*="builder-text"')
      .contains("product with code PVOLVEBSS");
  }
}
export default SugarbreakPage;
