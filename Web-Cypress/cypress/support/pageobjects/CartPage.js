class CartPage {
  /**
   * Visits the Cart page
   */
  visitPage() {
    return cy.visit("/cart");
  }

  /**
   *  Returns the Continue Shopping link.
   */
  getBodyContinueShoppingLink() {
    return cy.get('a[href="/collections/all"]').contains("Continue Shopping");
  }

  /**
   *  Returns the Remove button of first product.
   */
  getBodyFirstProductRemoveButton() {
    return cy
      .get('form[class="cart-template__form"] td[class="cart-table__product"]')
      .eq(0)
      .find('a[class="cart-item__remove button--remove"]');
  }

  /**
   *  Returns the Title link of the first product.
   */
  getBodyFirstProductTitleLink() {
    return cy
      .get('form[class="cart-template__form"] td[class="cart-table__product"]')
      .eq(0)
      .find('a[class="cart-item__title"]');
  }

  /**
   *  Returns first product Quantity drop-down.
   */
  getFirstProductQuantityDropDown() {
    return cy
      .get('table[class="cart-table"] tbody tr')
      .eq(0)
      .find('select[name="quantity"]');
  }

  /**
   *  Returns second product Quantity drop-down
   */
  getSecondProductQuantityDropDown() {
    return cy
      .get('table[class="cart-table"] tbody tr')
      .eq(1)
      .find('select[name="quantity"]');
  }

  /**
   *  Returns the Remove button of second product.
   */
  getBodySecondProductRemoveButton() {
    return cy
      .get('form[class="cart-template__form"] td[class="cart-table__product"]')
      .eq(1)
      .find('a[class="cart-item__remove button--remove"]');
  }

  /**
   *  Returns the Title link of the second product.
   */
  getBodySecondProductTitleLink() {
    return cy
      .get('form[class="cart-template__form"] td[class="cart-table__product"]')
      .eq(1)
      .find('a[class="cart-item__title"]');
  }

  /**
   *  Returns the Minus Quantity button of the second product.
   */
  getBodySecondProductMinusQuantityButton() {
    return cy
      .get('form[class="cart-template__form"] td[class="cart-table__quantity"]')
      .eq(1)
      .find("button[data-minus]");
  }

  /**
   *  Returns the Plus Quantity button of the second product.
   */
  getBodySecondProductPlusQuantityButton() {
    return cy
      .get('form[class="cart-template__form"] td[class="cart-table__quantity"]')
      .eq(1)
      .find("button[data-plus]");
  }

  /**
   *  Returns the Remove button to remove third product.
   */
  getBodyThirdProductRemoveButton() {
    return cy
      .get('form[class="cart-template__form"] td[class="cart-table__product"]')
      .eq(2)
      .find('a[class="cart-item__remove button--remove"]');
  }

  /**
   *  Returns the Title link of the third product.
   */
  getBodyThirdProductTitleLink() {
    return cy
      .get('form[class="cart-template__form"] td[class="cart-table__product"]')
      .eq(2)
      .find('a[class="cart-item__title"]');
  }

  /**
   *  Returns the Minus Quantity button of the third product.
   */
  getBodyThirdProductMinusQuantityButton() {
    return cy
      .get('form[class="cart-template__form"] td[class="cart-table__quantity"]')
      .eq(2)
      .find("button[data-minus]");
  }

  /**
   *  Returns the Plus Quantity button of the third product.
   */
  getBodyThirdProductPlusQuantityButton() {
    return cy
      .get('form[class="cart-template__form"] td[class="cart-table__quantity"]')
      .eq(2)
      .find("button[data-plus]");
  }

  /**
   *  Returns the Subtotal text of whole cart.
   */
  getBodySubtotalText() {
    return cy.get('span[class="cart-total__value"]');
  }

  /**
   *  Returns the Checkout button if any digital goods are in the cart.
   *  It creates a new link that is on top of old checkout button.
   */
  getBodyAnyDigitalGoodsCheckoutButton() {
    return cy
      .get('a[class*="button"][href*="/checkout"]')
      .contains("Credit or Debit Card", { matchCase: false });
  }

  /**
   *  Returns the Checkout button if no digital goods are in cart.
   */
  getBodyPhysicalGoodsOnlyCheckoutButton() {
    return cy.get('input[class*="cart-template__checkout-button"]');
  }

  /**
   *  Returns the Return Policy title.
   */
  getBodyReturnPolicyTitle() {
    return cy
      .get('h2[class="cart-template__policy-title"]')
      .contains("Return Policy");
  }

  /**
   *  Returns the Overnight & 2-Day Policy title.
   */
  getBodyOvernight2DayShippingTitle() {
    return cy
      .get('h2[class="cart-template__policy-title"]')
      .contains("Overnight & 2 Day Shipping");
  }

  /**
   *  Returns the International Shipping Policy title.
   */
  getBodyInternationalShippingTitle() {
    return cy
      .get('h2[class="cart-template__policy-title"]')
      .contains("International Shipping");
  }
}
export default CartPage;
