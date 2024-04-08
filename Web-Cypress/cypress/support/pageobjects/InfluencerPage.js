class InfluencerPage {
  /**
   *  Visits Influencer Page.
   */
  visitPage() {
    return cy.visit("/pages/influencer");
  }

  /**
   *  Returns Promo Code text element.
   */
  getHeroPromoCodeText() {
    return cy
      .get('p[class="discount-code__text"]')
      .contains("Use code: INF25", { matchCase: false });
  }

  /**
   *  Returns Add to Cart button.
   */
  getHeroAddToCartButton() {
    return cy.get('a[class*="button"]').eq(1);
  }

  /**
   *  Returns first product Add To Cart button.
   */
  getFirstProductAddToCartButton() {
    return cy.get('a[href*="/cart"]').eq(0);
  }

  /**
   *  Returns second product Add To Cart button.
   */
  getSecondProductAddToCartButton() {
    return cy.get('a[href*="/cart"]').eq(1);
  }

  /**
   *  Returns third product Add To Cart button.
   */
  getThirdProductAddToCartButton() {
    return cy.get('a[href*="/cart"]').eq(2);
  }

  /**
   *  Returns Essential Kit Add To Cart button.
   */
  getEssentialKitAddToCartButton() {
    return cy
      .get('div[id="EK"] a[class*="button"]')
      .contains("Add To Cart", { matchCase: false });
  }

  /**
   *  Returns Trusted By text element.
   */
  getTrustedByText() {
    return cy
      .get('span[class*="builder-text"]')
      .contains("Trusted By", { matchCase: false });
  }

  /**
   *  Returns bottom Buy Now button.
   */
  getBottomShopNowButton() {
    return cy.get('a[href*="/cart"]').contains("Buy Now", { matchCase: false });
  }
}
export default InfluencerPage;
