class PaymentUpdatePage {
  /**
   * Visit the Payment Update page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/account/payment/update", {
      failOnStatusCode: false,
    });
  }

  /**
   * Returns the Close button at top right.
   */
  getCloseButton() {
    return cy.get('button[class*="square-close-button-module--closeButton"]');
  }

  /**
   * Returns the current Card information text.
   *
   * Usage: paymentUpdatePage.getCurrentCardInformationText().contains("visa ****4242 exp 4/2034")
   */
  getCurrentCardInformationText() {
    return cy.get('div[class="row"] div[class*="six wide"]');
  }

  /**
   * Returns the Card Number field.
   */
  getCardNumberField() {
    cy.get(".__PrivateStripeElement > iframe").should(
      ($iframe) =>
        expect($iframe.contents().find('input[placeholder="Card number"]')).to
          .exist,
    );

    return cy
      .get('div[class="__PrivateStripeElement"] iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find(
          'input[data-elements-stable-field-name="cardNumber"]',
        );
      });
  }

  /**
   * Returns the Expiration field.
   */
  getExpirationField() {
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
   * Returns the CVC field.
   *
   * Card number and Expiration fields must be filled before this field shows.
   */
  getCVCField() {
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
   * Returns the Zipcode field.
   *
   * Card number and Expiration fields must be filled before this field shows.
   */
  getZipcodeField() {
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
   * Returns the Save Payment button.
   */
  getSavePaymentButton() {
    return cy
      .get('button[class*="ui"]')
      .contains("Save Payment", { matchCase: false });
  }

  /**
   * Returns the Save Payment Disabled button.
   */
  getSavePaymentDisabledButton() {
    return cy
      .get('button[class*="ui disabled"]')
      .contains("Save Payment", { matchCase: false });
  }
}
export default PaymentUpdatePage;
