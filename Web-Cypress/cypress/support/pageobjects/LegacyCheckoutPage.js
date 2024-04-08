class LegacyCheckoutPage {
  /**
   * Returns the Email Input field in Contact Information section.
   */
  getEmailInput() {
    return cy.get('input[id="checkout_email"]', { timeout: 10000 });
  }

  /**
   * Returns the Marketing Checkbox under the Email input field.
   */
  getMarketingCheckbox() {
    return cy.get('input[id="checkout_buyer_accepts_marketing"]');
  }

  /**
   * Returns the Promo Code field.
   */
  getPromoCodeInput() {
    return cy.get('input[id="checkout_reduction_code"]');
  }

  /**
   * Returns the Promo Code Apply button.
   */
  getPromoCodeButton() {
    return cy.get('button[id="checkout_submit"]');
  }

  /**
   * Returns the SubTotal Price Text.
   */
  getSubTotalPriceText() {
    return cy.get(
      'tr[class*="subtotal"] span[class*="order-summary__emphasis"]',
    );
  }

  /**
   * Returns the Shipping Price Text.
   */
  getShippingPriceText() {
    return cy.get('tr[class*="shipping"] span[class*="order-summary"]');
  }

  /**
   * Returns the Total Price Text.
   */
  getTotalPriceText() {
    return cy.get('span[class*="payment-due__price"]');
  }

  /**
   * Returns the First Name field in the checkout section.
   */
  getFirstNameInput() {
    return cy.get('input[id="checkout_shipping_address_first_name"]');
  }

  /**
   * Returns the Last Name field in the checkout section.
   */
  getLastNameInput() {
    return cy.get('input[id="checkout_shipping_address_last_name"]');
  }

  /**
   * Returns the Street Address field in the checkout section.
   */
  getStreetAddressInput() {
    return cy.get('input[id="checkout_shipping_address_address1"]');
  }

  /**
   * Returns the Apartment Address field in the checkout section.
   */
  getApartmentAddressInput() {
    return cy.get('input[id="checkout_shipping_address_address2"]');
  }

  /**
   * Returns the City Address field in the checkout section.
   */
  getCityInput() {
    return cy.get('input[id="checkout_shipping_address_city"]');
  }

  /**
   * Returns the State field in the checkout section.
   */
  getStateInputDropdown() {
    return cy.get('select[id="checkout_shipping_address_province"]');
  }

  /**
   * Returns the Country field in the checkout section.
   */
  getCountryInput() {
    return cy.get('select[id="checkout_shipping_address_country"]');
  }

  /**
   * Returns the Postal Code Address field in the checkout section.
   */
  getPostalCodeInput() {
    return cy.get('input[id="checkout_shipping_address_zip"]');
  }

  /**
   * Returns the Phone field in the checkout section.
   */
  getPhoneInput() {
    return cy.get('input[placeholder="Phone"]');
  }

  /**
   * Returns the SMS opt-in Checkbox under the Email input field.
   */
  getSMSCheckbox() {
    return cy.get('input[id="ps_accepts_sms"]');
  }

  /**
   * Returns the Save Information Checkbox under the Email input field.
   */
  getSaveInformationCheckbox() {
    return cy.get('input[id="checkout_remember_me"]');
  }

  /**
   * Returns the Continue button on all steps.
   */
  getContinueButton() {
    return cy.get('button[id="continue_button"]');
  }

  /**
   * Returns the Shipping Section in the checkout section.
   */
  getShippingTypeSection() {
    return cy.get('div[class="section section--shipping-method"]');
  }

  /**
   * Returns the Shipping Method Ground Shipping.
   */
  getShippingMethodGroundRadioInput() {
    return cy.get('input[id*="ground20shipping203"]', { timeout: 10000 });
  }

  /**
   * Returns the Shipping Method FedEx 2Day.
   */
  getShippingMethodTwoDayRadioInput() {
    return cy.get('input[id*="fedex202day"]');
  }

  /**
   * Returns the Shipping Method FedEx Standard Overnight.
   */
  getShippingMethodOvernightRadioInput() {
    return cy.get('input[id*="fedex20standard20overnight"]');
  }

  /**
   * Returns the Shipping Method Free Shipping.
   */
  getShippingMethodFreeInput() {
    return cy.get('input[data-checkout-shipping-rate="Free"]', {
      timeout: 10000,
    });
  }

  /**
   * Returns to the Previous Step link.
   */
  getPreviousStepLink() {
    return cy.get('a[class="step__footer__previous-link"]');
  }

  /**
   * Returns the Content text of the Contact block.
   */
  getContactBlockContentText() {
    return cy.get('div[class="review-block__content"]').eq(0);
  }

  /**
   * Returns the Content text of the Ship To block.
   */
  getShipToBlockContentText() {
    return cy.get('div[class="review-block__content"]').eq(1);
  }

  /**
   * Returns the Content text of the Method block.
   */
  getMethodBlockContentText() {
    return cy.get('div[class="review-block__content"]').eq(2);
  }

  /**
   * Returns the Credit Card Radio Input.
   */
  getCreditCardRadioInput() {
    return cy.get('input[id*="checkout_payment_gateway"]').eq(0);
  }

  /**
   * Returns the PayPal Radio Input.
   */
  getPayPalRadioInput() {
    return cy.get('input[id*="checkout_payment_gateway"]').eq(1);
  }

  /**
   * Returns the Afterpay Radio Input.
   */
  getAfterpayRadioInput() {
    return cy.get('input[id*="checkout_payment_gateway"]').eq(2);
  }

  /**
   * [PAYMENT] Returns the Credit Card number input in the payment section.
   */
  getPaymentCreditCardNumberInput() {
    cy.get('div[data-card-field-placeholder="Card number"] iframe', {
      timeout: 10000,
    }).should(
      ($iframe) =>
        expect($iframe.contents().find('input[placeholder="Card number"]')).to
          .exist,
    );

    return cy
      .get('div[data-card-field-placeholder="Card number"] iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[placeholder="Card number"]');
      });
  }

  /**
   * [PAYMENT] Returns the Name on card input in the payment section.
   */
  getPaymentNameOnCardInput() {
    cy.get('div[data-card-field-placeholder="Name on card"] iframe', {
      timeout: 10000,
    }).should(
      ($iframe) =>
        expect($iframe.contents().find('input[placeholder="Name on card"]')).to
          .exist,
    );

    return cy
      .get('div[data-card-field-placeholder="Name on card"] iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[placeholder="Name on card"]');
      });
  }

  /**
   * [PAYMENT] Returns the Expiration date input in the payment section.
   */
  getPaymentExpirationDateInput() {
    cy.get(
      'div[data-card-field-placeholder="Expiration date (MM / YY)"] iframe',
      { timeout: 10000 },
    ).should(
      ($iframe) =>
        expect(
          $iframe
            .contents()
            .find('input[placeholder="Expiration date (MM / YY)"]'),
        ).to.exist,
    );

    return cy
      .get(
        'div[data-card-field-placeholder="Expiration date (MM / YY)"] iframe',
      )
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[placeholder="Expiration date (MM / YY)"]');
      });
  }

  /**
   * [PAYMENT] Returns the CVV number input in the payment section.
   */
  getPaymentCVVNumberInput() {
    cy.get('div[data-card-field-placeholder="Security code"] iframe', {
      timeout: 10000,
    }).should(
      ($iframe) =>
        expect($iframe.contents().find('input[placeholder="Security code"]')).to
          .exist,
    );

    return cy
      .get('div[data-card-field-placeholder="Security code"] iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[placeholder="Security code"]');
      });
  }

  /**
   * Returns the Same as Shipping Address Radio Input.
   */
  getSameAsShippingAddressRadioInput() {
    return cy.get('input[id*="checkout_different_billing_address_false"]');
  }

  /**
   * Returns the Different Billing Address Radio Input.
   */
  getDifferentBillingAddressRadioInput() {
    return cy.get('input[id*="checkout_different_billing_address_true"]');
  }

  /**
   * Returns the Billing First Name field in the checkout section.
   */
  getBillingFirstNameInput() {
    return cy.get('input[id="checkout_billing_address_first_name"]');
  }

  /**
   * Returns the Billing Last Name field in the checkout section.
   */
  getBillingLastNameInput() {
    return cy.get('input[id="checkout_billing_address_last_name"]');
  }

  /**
   * Returns the Billing Street Address field in the checkout section.
   */
  getBillingStreetAddressInput() {
    return cy.get('input[id="checkout_billing_address_address1"]');
  }

  /**
   * Returns the Billing Apartment Address field in the checkout section.
   */
  getBillingApartmentAddressInput() {
    return cy.get('input[id="checkout_billing_address_address2"]');
  }

  /**
   * Returns the Billing City Address field in the checkout section.
   */
  getBillingCityInput() {
    return cy.get('input[id="checkout_billing_address_city"]');
  }

  /**
   * Returns the Billing State field in the checkout section.
   */
  getBillingStateInputDropdown() {
    return cy.get('select[id="checkout_billing_address_province"]');
  }

  /**
   * Returns the Billing Country field in the checkout section.
   */
  getBillingCountryInput() {
    return cy.get('select[id="checkout_billing_address_country"]');
  }

  /**
   * Returns the Billing Postal Code Address field in the checkout section.
   */
  getBillingPostalCodeInput() {
    return cy.get('input[id="checkout_billing_address_zip"]');
  }

  /**
   * Returns the Billing Phone field in the checkout section.
   */
  getBillingPhoneInput() {
    return cy.get('input[id="checkout_billing_address_phone"]');
  }

  /**
   * Returns the Complete order button on all payment page.
   */
  getPaymentCompleteOrderButton() {
    return cy
      .get('button[id="continue_button"]')
      .contains("Complete order", { matchCase: false });
  }
}
export default LegacyCheckoutPage;
