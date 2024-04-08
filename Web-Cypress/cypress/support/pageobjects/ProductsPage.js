class ProductsPage {
  /**
   * Visits the P.Ball product page (Physical goods only)
   */
  visitPBallPage() {
    return cy.visit("/products/p-ball-strap-pump");
  }

  /**
   * Visits a specified product page
   *
   * Ex. productsPage.visitProductPage('streaming-access');
   */
  visitProductPage(product) {
    return cy.visit("/products/" + product);
  }

  /**
   * Returns the Title of the product.
   *
   * Ex. productsPage.getBodyProductTitle().contains("digital membership");
   */
  getProductTitle() {
    return cy.get('h1[class*="font-RightGroteskCompactBlack"]');
  }

  /**
   * Returns the Title of the product by provided product name.
   *
   * Ex. productsPage.getBodyProductTitle("digital membership");
   */
  getProductTitleByName(productName) {
    return cy
      .get('h4[x-text="sidecartItem.product_title"]')
      .contains(productName, { matchCase: false });
  }

  /**
   * Returns carousel container
   * TODO: Update locator
   */
  getCarouselContainer() {
    return cy.get('div[class*="product-page-carousel-thumbs"]');
  }

  /**
   * Returns current image
   * TODO: Update locator
   */
  getSelectedImageMediaContainer() {
    return cy.get("div.product-page-carousel div.swiper-slide-active");
  }

  /**
   * Returns product price
   */
  getProductPrice() {
    return cy.get('[id="product-price"]');
  }

  /**
   * Returns product full price when product has discount
   * TODO: Update locator
   */
  getProductFullPrice() {
    return cy.get('p[class*="line-through"]').contains("$");
  }

  /**
   * Returns product description
   * TODO: Update locator
   */
  getProductDescriptionContainer() {
    return cy.get('[class*="product-description"]');
  }

  /**
   * Returns 30-days returns info
   * TODO: Update locator
   */
  getReturnsPolicyInfo() {
    return cy.get("p").contains("30-Day Returns", { matchCase: false });
  }

  /**
   * Returns ground shipping and domestic return info
   * TODO: Update locator
   */
  getGroundShippingAndDomesticReturnInfo() {
    return cy.get("p").contains("Free Ground Shipping & Domestic Returns", {
      matchCase: false,
    });
  }

  /**
   * Returns dimension and materials container
   * TODO: Update locator
   */
  getDimensionAndMaterialsContainer() {
    return cy
      .get("h6")
      .contains("Dimensions & Materials", { matchCase: false });
  }

  /**
   * Returns how to use container
   * TODO: Update locator
   */
  getHowToUserContainer() {
    return cy.get("h6").contains("How To Use", { matchCase: false });
  }

  /**
   * Returns more details container
   * TODO: Update locator
   */
  getMoreDetailsContainer() {
    return cy.get("h6").contains("More Details", { matchCase: false });
  }

  /**
   * Returns Add to Cart button
   * TODO: Update locator
   */
  getAddToCartButton() {
    return cy
      .get('[data-cta-name="add_to_cart_cta"]')
      .contains("Add to Cart", { matchCase: false });
  }

  /**
   * Returns Pay with after pay bytton
   * TODO: Update locator
   */
  getPayWithAfterPayButton() {
    return cy.get('[id="afterpay-button"]');
  }

  /**
   * Returns Ultimate Streaming membership section
   * TODO: Update locator
   */
  getUltimateStreamingMembershipSection() {
    return cy
      .get("h3")
      .contains("Ultimate Streaming Membership", { matchCase: false })
      .parentsUntil('div[x-data*="$store"]')
      .eq(0);
  }

  /**
   * Returns class types section
   * TODO: Update locator
   */
  getExploreClassTypesSection() {
    return cy
      .get("h3")
      .contains("Explore Class Types", { matchCase: false })
      .parentsUntil('div[x-data*="$store"]')
      .eq(0);
  }

  /**
   * Returns reviews section
   */
  getReviewsSection() {
    return cy.get('[id="reviews"]');
  }

  /**
   * Returns side cart button
   */
  getCartButton() {
    return cy.get('[data-cta-name="cart"]');
  }

  /**
   * Retuns side cart section
   * Sidecart must be open
   */
  getSideCartSection() {
    return cy.get('[id="shopify-section-sidecart"] > div');
  }

  /**
   * Returns all product titles from sidecart
   * Sidecart must be open
   */
  getAllProductsTitleFromSideCart() {
    return cy.get('[x-text="sidecartItem.product_title"]');
  }

  /**
   * Returns first product title from sidecart
   * Sidecart must be open
   */
  getFirstProductTitleFromSideCart() {
    return this.getAllProductsTitleFromSideCart().first();
  }

  /**
   * Returns first product quantity from sidecart by provided index parameter
   * Sidecart must be open
   * Ex. productsPage.getFirstProductQuantityFromSideCart(0);
   */
  getFirstProductQuantityFromSideCart(productOrder = 0) {
    return cy.get('[x-text="sidecartItem.quantity"]').eq(productOrder);
  }

  /**
   * Returns first product price from sidecart
   * Sidecart must be open
   * TODO: Update locator
   */
  getFirstProductTotalPriceFromSideCart() {
    return this.getSideCartSection()
      .find('p[class*="line-through"], [class="font-bold"]')
      .first();
  }

  /**
   * Returns first product price from sidecart
   * Sidecart must be open
   * TODO: Update locator
   */
  getFirstProductSubTotalPriceFromSideCart() {
    return this.getSideCartSection().find('[class="font-bold"]').first();
  }

  /**
   * Returns first product quantity decrement button from sidecart
   * Sidecart must be open
   * TODO: Update locator
   */
  getDecrementProductQuantityButtonFromSideCart(product) {
    return this.getFirstProductQuantityFromSideCart(product)
      .parent("div")
      .prev("button");
  }

  /**
   * Returns first product quantity increment button from sidecart
   * Sidecart must be open
   * TODO: Update locator, complex to find!!!!
   */
  getIncrementProductQuantityButtonFromSideCart(product) {
    return this.getFirstProductQuantityFromSideCart(product)
      .parent("div")
      .nextAll("button")
      .each(($el, index, $list) => {
        if (index === $list.length - 1 || $el.is("button")) {
          return cy.wrap($el).should("be.visible");
        }
      })
      .then(($button) => {
        return $button;
      });
  }

  /**
   * Returns first product remove button from sidecart
   * Sidecart must be open
   * TODO: Update locator
   */
  getRemoveProductQuantityButtonFromSideCart(product) {
    return cy
      .get('div[id="shopify-section-sidecart"] div[class*="text-right"] button')
      .eq(product);
  }

  /**
   * Returns total items in minicart
   * Sidecart must be open
   * TODO: Update locator
   */
  getTotalItemsInCart() {
    return cy.get('div[id="shopify-section-sidecart"] h2 > span');
  }

  /**
   * Returns "Your cart is empty" from the side cart when it's empty
   * Sidecart must be open
   * TODO: Update locator
   */
  getCartIsEmptyTitleFromSideCart() {
    return this.getSideCartSection().get("h3").contains("Your cart is empty");
  }

  /**
   * Returns "SHOP OUR MOST POPULAR BUNDLE" from the side cart when it's empty
   * Sidecart must be open
   * TODO: Update locator
   */
  getShopMostPopularBundleTitleFromSideCart() {
    return this.getSideCartSection()
      .get("div")
      .contains("SHOP OUR MOST POPULAR BUNDLE");
  }

  /**
   * Returns "Signature Bundle" add to cart button from the side cart when it's empty
   * Sidecart must be open
   * TODO: Update locator
   */
  getSignatureBundleFromSideCart() {
    return this.getSideCartSection().get("div").contains("Signature Bundle");
  }

  /**
   * Returns subtotal from sidecart
   * Sidecart must be open
   * TODO: Update locator
   */
  getSubtotalFromSideCart() {
    return cy.get("p").contains("Subtotal").next("div");
  }

  /**
   * Returns subtotal from sidecart
   * Sidecart must be open
   * TODO: Update locator
   */
  getFreeSubtotalFromSideCart() {
    return cy.get("div.font-bold").contains("Free", { matchCase: false });
  }

  /**
   * Returns total from sidecart
   * Sidecart must be open
   * TODO: Update locator
   */
  getFreeTotalFromSideCart() {
    return cy.contains("span", "free", { matchCase: false });
  }

  /**
   * Returns checout button
   * Sidecart must be open
   */
  getCheckoutButton() {
    return cy.get('[data-cta-name="checkout-button"]');
  }

  /**
   * Returns close button from sidecart
   * Sidecart must be open
   */
  getCloseSideCartButton() {
    return cy.get('button[data-cta-name="close-cart"]');
  }

  /**
   * Returns already added bundle in cart error
   * TODO: Update locator, name too long
   */
  getYouMayNeedCheckoutOneBundleError() {
    return cy
      .get('div[class*="alert-error"] p')
      .contains(
        "It looks like you already have a bundle in your cart. You may only checkout with one bundle at a time",
        { matchCase: false },
      );
  }

  /**
   * Returns all items from upsell carousel that are visible.
   * Note: DOM contains several upsell items but they're invisible (they use display: none)
   * Sidecart must be open
   * TODO: Update locator
   */
  getAllUpsellItems() {
    return cy.get(
      'div[x-data*="sidecartUpsell"] div:not([style*="display: none"]).swiper-slide a[class*="tracking-normal"]',
    );
  }

  /**
   * Returns Upsell items carousel by index
   * Sidecart must be open
   * TODO: Update locator
   */
  getUpsellItemsCarousel(upsellItemIndex = 0) {
    return this.getAllUpsellItems().eq(upsellItemIndex);
  }

  /**
   * Returns Upsell items carousel by name
   * Sidecart must be open
   * TODO: Update locator
   */
  getUpsellItemsCarouselByName(upsellItemName) {
    return this.getAllUpsellItems().contains(upsellItemName, {
      matchCase: false,
    });
  }

  /**
   * Returns Add to cart button from upsell items carousel
   * Sidecart must be open
   * TODO: Update locator
   */
  getAddToCartButtonFromUpsellItemsCarousel(upsellItemName) {
    return this.getUpsellItemsCarouselByName(upsellItemName)
      .parentsUntil('div[class*="items-start"]')
      .find("button");
  }

  getUpsellSwiperPagination(index) {
    return cy.get('div[id="upsell-swiper-pagination"] span').eq(index);
  }
}

export default ProductsPage;
