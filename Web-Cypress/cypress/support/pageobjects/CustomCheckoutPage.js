class CustomCheckoutPage {
  /**
   * Visits the page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/checkout");
  }

  /**
   * Visits the page with specificed SKU in cart
   */
  visitSKUPage(SKU) {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/checkout/?sku=" + SKU);
  }

  /**
   * [PROMO BANNER] Returns the Promo Banner button from the top of the page.
   */
  getPromoBannerButton() {
    return cy.get('div[class*="promo-banner-module"]');
  }

  /**
   * Returns the Pvolve Logo button from the top of the page.
   */
  getPvolveLogoButton() {
    return cy.get('a[title="Return to the P.volve homepage"]');
  }

  /**
   * [ACCOUNT] Returns the Apple button for creating account or logging in.
   */
  getAccountAppleButton() {
    return cy
      .get('form[id="account-form"] button[class*="social-button-module"]')
      .contains("Apple");
  }

  /**
   * [ACCOUNT] Returns the Google button for creating account or logging in.
   */
  getAccountGoogleButton() {
    return cy
      .get('form[id="account-form"] button[class*="social-button-module"]')
      .contains("Google");
  }

  /**
   * [ACCOUNT] Returns the Facebok button for creating account or logging in.
   */
  getAccountFacebookButton() {
    return cy
      .get('form[id="account-form"] button[class*="social-button-module"]')
      .contains("Facebook");
  }

  /**
   * [ACCOUNT] Returns the Email field for creating account or logging in.
   */
  getAccountEmailField() {
    return cy.get('form[id="account-form"] input[id="checkout-email"]');
  }

  /**
   * [ACCOUNT] Returns the Password field for logging into email.
   */
  getAccountEmailPasswordField() {
    return cy.get('form[id="account-form"] input[id="checkout-password"]');
  }

  /**
   * [ACCOUNT] Returns the Edit Email button for for logging into email.
   *
   * Its the pencil in the email field that only shows after next button is clicked.
   */
  getAccountEditEmailButton() {
    return cy.get('form[id="account-form"] i[class*="pv-pencil"]');
  }

  /**
   * [ACCOUNT] Returns the Show Password button in the password field.
   */
  getAccountShowPasswordButton() {
    return cy.get('form[id="account-form"] i[class*="pv-icon pv-eyeball"]');
  }

  /**
   * [ACCOUNT] Returns the Forgot Password button under the password field.
   */
  getAccountForgotPasswordButton() {
    return cy.get('form[id="account-form"] a[href="/loginHelp"]');
  }

  /**
   * [ACCOUNT] Returns the Next button under the email field.
   */
  getAccountNextButton() {
    return cy
      .get('form[id="account-form"] button[type="submit"]')
      .contains("Next");
  }

  /**
   * [SHIPPING] Returns the First Name field in the shipping section.
   */
  getShippingFirstNameField() {
    return cy.get(
      'form[id="shipping-address-form"] input[id="shipping-field-firstName"]',
    );
  }

  /**
   * [SHIPPING] Returns the Last Name field in the shipping section.
   */
  getShippingLastNameField() {
    return cy.get(
      'form[id="shipping-address-form"] input[id="shipping-field-lastName"]',
    );
  }

  /**
   * [SHIPPING] Returns the Address field in the shipping section.
   */
  getShippingAddressField() {
    return cy.get(
      'form[id="shipping-address-form"] input[id="shipping-field-address1"]',
    );
  }

  /**
   * [SHIPPING] Returns the Apartment,Suite,Etc. field in the shipping section.
   */
  getShippingApartmentSuiteField() {
    return cy.get(
      'form[id="shipping-address-form"] input[id="shipping-field-address2"]',
    );
  }

  /**
   * [SHIPPING] Returns the City field in the shipping section.
   */
  getShippingCityField() {
    return cy.get(
      'form[id="shipping-address-form"] input[id="shipping-field-city"]',
    );
  }

  /**
   * [SHIPPING] Returns the Country/Region dropdown menu in the shipping section.
   *
   * To select a country, Cypress's select() must be used.
   *
   * Example: customCheckoutPage.getShippingCountryDropdownMenu().select("Germany");
   */
  getShippingCountryDropdownMenu() {
    return cy.get(
      'form[id="shipping-address-form"] select[id="shipping-field-country"]',
    );
  }

  /**
   * [SHIPPING] Returns the State dropdown menu in the shipping section.
   *
   * To select a state, Cypress's select() must be used.
   *
   * Example: customCheckoutPage.getShippingStateDropdownMenu().select("California");
   */
  getShippingStateDropdownMenu() {
    return cy.get(
      'form[id="shipping-address-form"] select[id="shipping-field-province"]',
    );
  }

  /**
   * [SHIPPING] Returns the Zipcode field in the shipping section.
   */
  getShippingZipcodeField() {
    return cy.get(
      'form[id="shipping-address-form"] input[id="shipping-field-zip"]',
    );
  }

  /**
   * [SHIPPING] Returns the Next button in the shipping section.
   */
  getShippingNextButton() {
    return cy
      .get('form[id="shipping-address-form"] button[type="submit"]')
      .contains("Next");
  }

  /**
   * [SHIPPING] Returns the Change Address button in the shipping section.
   *
   * Must be in next section for this button to be visible.
   */
  getShippingChangeAddressButton() {
    return cy
      .get('a[class="text-links"]')
      .contains("change address", { matchCase: false });
  }

  /**
   * [METHOD] Returns the Ground Shipping radio button in the method section.
   */
  getMethodGroundShippingButton() {
    return cy.get('form[id="shipping-method-form"] input[type="radio"]').eq(0);
  }

  /**
   * [METHOD] Returns the Express Shipping radio button in the method section.
   */
  getMethodExpressShippingButton() {
    return cy.get('form[id="shipping-method-form"] input[type="radio"]').eq(1);
  }

  /**
   * [METHOD] Returns the Overnight Shipping radio button in the method section.
   */
  getMethodOvernightShippingButton() {
    return cy.get('form[id="shipping-method-form"] input[type="radio"]').eq(2);
  }

  /**
   * [METHOD] Returns the first Method Price text in the method section.
   *
   * Example: customCheckoutPage.getMethodFirstMethodPriceText().contains("free", { matchCase: false });
   */
  getMethodFirstMethodPriceText() {
    return cy
      .get(
        'form[id="shipping-method-form"] div[class*="checkout-module--shipping-method--"]',
      )
      .eq(0);
  }

  /**
   * [METHOD] Returns the second Method Price text in the method section.
   *
   * Example: customCheckoutPage.getMethodSecondMethodPriceText().contains("free", { matchCase: false });
   */
  getMethodSecondMethodPriceText() {
    return cy
      .get(
        'form[id="shipping-method-form"] div[class*="checkout-module--shipping-method--"]',
      )
      .eq(1);
  }

  /**
   * [METHOD] Returns the Next button in the method section.
   */
  getMethodNextButton() {
    return cy
      .get('form[id="shipping-method-form"] button[class*="shipping-method"]')
      .contains("Next");
  }

  /**
   * [PAYMENT] Returns the Card Number field in the payment section.
   */
  getPaymentCardNumberField() {
    cy.get(".__PrivateStripeElement > iframe").should(
      ($iframe) =>
        expect($iframe.contents().find('input[placeholder="Card number"]')).to
          .exist,
    );

    return cy
      .get('div[class="__PrivateStripeElement"] iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[placeholder="Card number"]');
      });
  }

  /**
   * [PAYMENT] Returns the Expiration field in the payment section.
   */
  getPaymentExpirationField() {
    cy.get(".__PrivateStripeElement > iframe").should(
      ($iframe) =>
        expect($iframe.contents().find('input[placeholder="MM / YY"]')).to
          .exist,
    );

    return cy
      .get('div[class="__PrivateStripeElement"] iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[placeholder="MM / YY"]');
      });
  }

  /**
   * [PAYMENT] Returns the CVC field in the payment section.
   */
  getPaymentCVCField() {
    cy.get(".__PrivateStripeElement > iframe").should(
      ($iframe) =>
        expect($iframe.contents().find('input[placeholder="CVC"]')).to.exist,
    );

    return cy
      .get('div[class="__PrivateStripeElement"] iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[placeholder="CVC"]');
      });
  }

  /**
   * [PAYMENT] Returns the Zipcode field in the payment section.
   *
   * Other payment fields must be filled before this field shows.
   */
  getPaymentZipcodeField() {
    cy.get(".__PrivateStripeElement > iframe").should(
      ($iframe) =>
        expect($iframe.contents().find('input[name="postal"]')).to.exist,
    );

    return cy
      .get('div[class="__PrivateStripeElement"] iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[name="postal"]');
      });
  }

  /**
   * [PAYMENT] Returns the Terms of Service link in the payment section.
   */
  getPaymentTermsOfServiceLink() {
    return cy.get('form[id="payment-form"] a[href*="/terms-of-service"]');
  }

  /**
   * [PAYMENT] Returns the Start Free Trial or Complete Order button in the payment section.
   */
  getPaymentSubmitOrderButton() {
    return cy.get('form[id="payment-form"] button[type="submit"]');
  }

  /**
   * [CART] Returns the Edit Cart link in the cart section.
   */
  getCartEditCartLink() {
    return cy
      .get('div[class*="checkout-module"] a[href*="/cart"]')
      .contains("edit cart");
  }

  /**
   * [CART] Returns the first Item Title text in the cart section.
   */
  getCartFirstItemTitleText() {
    return cy.get('div[class="item"]').eq(0).find('div[class="header"]');
  }

  /**
   * [CART] Returns the first Item Details text in the cart section.
   */
  getCartFirstItemDetailsText() {
    return cy.get('div[class="item"]').eq(0).find('div[class="meta"]').eq(0);
  }

  /**
   * [CART] Returns the first Item Price text in the cart section.
   */
  getCartFirstItemPriceText() {
    return cy.get('div[class="item"]').eq(0).find('div[class="meta"]').eq(1);
  }

  /**
   * [CART] Returns the Enter Promo Code button in the cart section. Clicking this hides or shows the promo code field.
   */
  getCartEnterPromoCodeButton() {
    return cy
      .get('div[class*="checkout-module"] h6[class="upper bold"]')
      .contains("Enter Promo Code", { matchCase: false });
  }

  /**
   * [CART] Returns the Promo Code field in the cart section.
   */
  getCartPromoCodeField() {
    return cy.get(
      'div[class*="checkout-module"] input[id="checkout-promo-code"]',
    );
  }

  /**
   * [CART] Returns the Apply button for the promo code.
   */
  getCartApplyPromoCodeButton() {
    return cy
      .get('div[class*="checkout-module"] button[type="submit"]')
      .contains("Apply", { matchCase: false });
  }

  /**
   * [CART] Returns the Remove button for the promo code.
   */
  getCartRemovePromoCodeButton() {
    return cy
      .get('div[class*="checkout-module"] button[type="submit"]')
      .contains("Remove", { matchCase: false });
  }

  /**
   * [CART] Returns the Subtotal for the cart.
   */
  getCartSubtotalText() {
    return cy.get("tbody > :nth-child(1) > .right").contains("$");
  }

  /**
   * [CART] Returns the Shipping Total text for the cart.
   */
  getCartShippingTotalText() {
    return cy.get("tbody :nth-child(2) > .right").contains("$");
  }

  /**
   * [CART] Returns the Taxes Total text for the cart.
   */
  getCartTaxesTotalText() {
    return cy.get("tbody :nth-child(3) > .right").contains("$");
  }

  /**
   * [CART] Returns the Total text for the cart.
   */
  getCartTotalText() {
    return cy.get('td[class*="checkout-module--table-total"]').contains("$");
  }

  /**
   * [FOOTER] Returns the Refund Policy link in the footer.
   */
  getFooterRefundPolicyLink() {
    return cy
      .get('div[class*="footer"] a[href*="refund-policy"]')
      .contains("refund policy");
  }

  /**
   * [FOOTER] Returns the Shipping Policy link in the footer.
   */
  getFooterShippingPolicyLink() {
    return cy
      .get('div[class*="footer"] a[href*="shipping-policy"]')
      .contains("shipping policy");
  }

  /**
   * [FOOTER] Returns the Terms of Service link in the footer.
   */
  getFooterTermsOfServiceLink() {
    return cy
      .get('div[class*="footer"] a[href*="terms-of-service"]')
      .contains("terms of service");
  }

  /**
   * Returns the Warning text that shows when entitled user
   * navigates to custom checkout with a subscription product.
   */
  getAlreadyEntitledWarningText() {
    return cy
      .get('div[class*="orange inverted"]')
      .contains("Looks like you already have streaming access.");
  }
}
export default CustomCheckoutPage;
