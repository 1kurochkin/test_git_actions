class AffiliatePage {
  /**
   *  Visits Affiliate Page.
   */
  visitPage() {
    return cy.visit("/pages/affiliate");
  }

  /**
   *  Returns Promo Code text element.
   */
  getHeroPromoCodeText() {
    return cy
      .get('p[class="discount-code__text"]')
      .contains("USE CODE: AFF30", { matchCase: false });
  }

  /**
   *  Returns Add to Cart button.
   */
  getHeroAddToCartButton() {
    return cy.get('a[data-cta-name*="hero-checkout-button"]');
  }

  /**
   *  Returns product image carousel.
   */
  getProductImageCarousel() {
    return cy.get('div[id="kit"] div[class="builder-carousel"]');
  }

  /**
   *  Returns Product Add To Cart button.
   */
  getProductAddToCartButton() {
    return cy.get('a[data-cta-name*="cart-button"]');
  }

  /**
   *  Returns First Product Detail Accordion Title
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
   *  Returns Trusted By Text Element.
   */
  getTrustedByText() {
    return cy
      .get('span[class*="builder-text"]')
      .contains("Trusted By", { matchCase: false });
  }

  /**
   *  Returns Bottom Add To Cart button.
   */
  getBottomAddToCartButton() {
    return cy.get('a[data-cta-name*="checkout-button"]').eq(1);
  }
}
export default AffiliatePage;
