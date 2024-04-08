import SubscriptionPage from "../../../../support/pageobjects/SubscriptionPage.js";
import PaymentUpdatePage from "../../../../support/pageobjects/PaymentUpdatePage.js";

const subscriptionPage = new SubscriptionPage();
const paymentUpdatePage = new PaymentUpdatePage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("PaymentUpdate POM Selector Validation Test", function () {
  it("Validates all of the selectors in the /account/payment/update POM", function () {
    //Login and navigate to PaymentUpdate page
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    subscriptionPage.visitSubscriptionPage();
    cy.wait(1000);
    subscriptionPage.getNoPaymentMethodAlert().should("not.exist");
    subscriptionPage.getBodyUpdatePaymentButton().click();

    const visibleSelectors = [
      paymentUpdatePage.getCurrentCardInformationText,
      paymentUpdatePage.getCardNumberField,
      paymentUpdatePage.getExpirationField,
      paymentUpdatePage.getSavePaymentDisabledButton,
    ];
    cy.assertVisible(visibleSelectors);

    paymentUpdatePage
      .getCardNumberField()
      .type(Cypress.env("creditCardNumber"));
    paymentUpdatePage
      .getExpirationField()
      .type(Cypress.env("creditCardExpiration"));
    paymentUpdatePage.getCVCField().type(Cypress.env("creditCardCVC"));
    paymentUpdatePage.getZipcodeField().type(Cypress.env("creditCardZip"));

    paymentUpdatePage.getSavePaymentButton().should("be.visible");
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Payment Update Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.loginSubscribedUser();
        cy.waitForAppPageLoad();

        paymentUpdatePage.visitPage();

        const visibleSelectors = [
          paymentUpdatePage.getCurrentCardInformationText,
          paymentUpdatePage.getCardNumberField,
          paymentUpdatePage.getExpirationField,
          paymentUpdatePage.getSavePaymentDisabledButton,
        ];
        cy.assertVisible(visibleSelectors);

        paymentUpdatePage
          .getCardNumberField()
          .type(Cypress.env("creditCardNumber"));
        paymentUpdatePage
          .getExpirationField()
          .type(Cypress.env("creditCardExpiration"));
        paymentUpdatePage.getCVCField().type(Cypress.env("creditCardCVC"));
        paymentUpdatePage.getZipcodeField().type(Cypress.env("creditCardZip"));

        paymentUpdatePage.getSavePaymentButton().should("be.visible");
      },
    );
  });
});
