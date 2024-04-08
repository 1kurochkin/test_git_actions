import CustomCheckoutPage from "../../../../support/pageobjects/CustomCheckoutPage.js";

const customCheckoutPage = new CustomCheckoutPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Custom Checkout POM Selector Validation Test", function () {
  it("Validates all of the selectors in the custom /checkout POM", function () {
    customCheckoutPage.visitSKUPage("TRANSKIT3MOGY");

    const visibleSelectors = [
      customCheckoutPage.getPvolveLogoButton,
      customCheckoutPage.getAccountAppleButton,
      customCheckoutPage.getAccountGoogleButton,
      customCheckoutPage.getAccountFacebookButton,
      customCheckoutPage.getAccountEmailField,
      customCheckoutPage.getAccountNextButton,
      customCheckoutPage.getCartEditCartLink,
      customCheckoutPage.getCartEnterPromoCodeButton,
      customCheckoutPage.getCartPromoCodeField,
      customCheckoutPage.getCartApplyPromoCodeButton,
      customCheckoutPage.getFooterRefundPolicyLink,
      customCheckoutPage.getFooterShippingPolicyLink,
      customCheckoutPage.getFooterTermsOfServiceLink,
    ];
    cy.assertVisible(visibleSelectors);

    customCheckoutPage
      .getAccountEmailField()
      .type(Cypress.env("emailUnsubscribed"));
    customCheckoutPage.getAccountNextButton().click();

    const visibleSelectorsPassword = [
      customCheckoutPage.getAccountEditEmailButton,
      customCheckoutPage.getAccountEmailPasswordField,
      customCheckoutPage.getAccountShowPasswordButton,
      customCheckoutPage.getAccountForgotPasswordButton,
    ];
    cy.assertVisible(visibleSelectorsPassword);

    customCheckoutPage
      .getAccountEmailPasswordField()
      .type(Cypress.env("password"));
    customCheckoutPage.getAccountNextButton().click();

    const visibleSelectorsShipping = [
      customCheckoutPage.getShippingFirstNameField,
      customCheckoutPage.getShippingLastNameField,
      customCheckoutPage.getShippingAddressField,
      customCheckoutPage.getShippingApartmentSuiteField,
      customCheckoutPage.getShippingCityField,
      customCheckoutPage.getShippingCountryDropdownMenu,
      customCheckoutPage.getShippingStateDropdownMenu,
      customCheckoutPage.getShippingZipcodeField,
    ];
    cy.assertVisible(visibleSelectorsShipping);

    customCheckoutPage.getShippingCountryDropdownMenu().select("Germany");
    customCheckoutPage.getShippingCountryDropdownMenu().contains("Germany");
    cy.wait(500);
    customCheckoutPage.getShippingCountryDropdownMenu().select("United States");

    customCheckoutPage.getShippingStateDropdownMenu().select("California");
    customCheckoutPage.getShippingStateDropdownMenu().contains("California");

    customCheckoutPage.getShippingFirstNameField().type("Never");
    customCheckoutPage.getShippingLastNameField().type("Gonna");
    customCheckoutPage.getShippingAddressField().type("Give");
    customCheckoutPage.getShippingApartmentSuiteField().type("You");
    customCheckoutPage.getShippingCityField().type("Up");
    customCheckoutPage.getShippingStateDropdownMenu().select("California");
    customCheckoutPage.getShippingZipcodeField().type("42424");
    customCheckoutPage.getShippingNextButton().click();

    const visibleSelectorsMethod = [
      customCheckoutPage.getMethodGroundShippingButton,
      customCheckoutPage.getMethodExpressShippingButton,
      customCheckoutPage.getMethodNextButton,
    ];
    cy.assertVisible(visibleSelectorsMethod);

    customCheckoutPage.getMethodNextButton().click();

    customCheckoutPage
      .getPaymentCardNumberField()
      .type(Cypress.env("creditCardNumber"));
    customCheckoutPage
      .getPaymentExpirationField()
      .type(Cypress.env("creditCardExpiration"));
    customCheckoutPage.getPaymentCVCField().type(Cypress.env("creditCardCVC"));

    const visibleSelectorsAfterLogin = [
      customCheckoutPage.getPaymentCardNumberField,
      customCheckoutPage.getPaymentExpirationField,
      customCheckoutPage.getPaymentCVCField,
      customCheckoutPage.getPaymentZipcodeField,
      customCheckoutPage.getPaymentTermsOfServiceLink,
      customCheckoutPage.getPaymentSubmitOrderButton,
    ];
    cy.assertVisible(visibleSelectorsAfterLogin);
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Custom Checkout Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        customCheckoutPage.visitSKUPage("TRANSKIT3MOGY");

        const visibleSelectors = [
          customCheckoutPage.getPvolveLogoButton,
          customCheckoutPage.getAccountAppleButton,
          customCheckoutPage.getAccountGoogleButton,
          customCheckoutPage.getAccountFacebookButton,
          customCheckoutPage.getAccountEmailField,
          customCheckoutPage.getAccountNextButton,
          customCheckoutPage.getCartEditCartLink,
          customCheckoutPage.getCartEnterPromoCodeButton,
          customCheckoutPage.getCartPromoCodeField,
          customCheckoutPage.getCartApplyPromoCodeButton,
          customCheckoutPage.getFooterRefundPolicyLink,
          customCheckoutPage.getFooterShippingPolicyLink,
          customCheckoutPage.getFooterTermsOfServiceLink,
        ];
        cy.assertVisible(visibleSelectors);

        customCheckoutPage
          .getAccountEmailField()
          .type(Cypress.env("emailUnsubscribed"));
        customCheckoutPage.getAccountNextButton().click();

        const visibleSelectorsPassword = [
          customCheckoutPage.getAccountEditEmailButton,
          customCheckoutPage.getAccountEmailPasswordField,
          customCheckoutPage.getAccountShowPasswordButton,
          customCheckoutPage.getAccountForgotPasswordButton,
        ];
        cy.assertVisible(visibleSelectorsPassword);

        customCheckoutPage
          .getAccountEmailPasswordField()
          .type(Cypress.env("password"));
        customCheckoutPage.getAccountNextButton().click();

        const visibleSelectorsShipping = [
          customCheckoutPage.getShippingFirstNameField,
          customCheckoutPage.getShippingLastNameField,
          customCheckoutPage.getShippingAddressField,
          customCheckoutPage.getShippingApartmentSuiteField,
          customCheckoutPage.getShippingCityField,
          customCheckoutPage.getShippingCountryDropdownMenu,
          customCheckoutPage.getShippingStateDropdownMenu,
          customCheckoutPage.getShippingZipcodeField,
        ];
        cy.assertVisible(visibleSelectorsShipping);

        customCheckoutPage.getShippingCountryDropdownMenu().select("Germany");
        customCheckoutPage.getShippingCountryDropdownMenu().contains("Germany");
        cy.wait(500);
        customCheckoutPage
          .getShippingCountryDropdownMenu()
          .select("United States");

        customCheckoutPage.getShippingStateDropdownMenu().select("California");
        customCheckoutPage
          .getShippingStateDropdownMenu()
          .contains("California");

        customCheckoutPage.getShippingFirstNameField().type("Never");
        customCheckoutPage.getShippingLastNameField().type("Gonna");
        customCheckoutPage.getShippingAddressField().type("Give");
        customCheckoutPage.getShippingApartmentSuiteField().type("You");
        customCheckoutPage.getShippingCityField().type("Up");
        customCheckoutPage.getShippingStateDropdownMenu().select("California");
        customCheckoutPage
          .getShippingZipcodeField()
          .type("42424", { force: true });
        customCheckoutPage.getShippingNextButton().click();

        const visibleSelectorsMethod = [
          customCheckoutPage.getMethodGroundShippingButton,
          customCheckoutPage.getMethodExpressShippingButton,
          customCheckoutPage.getMethodNextButton,
        ];
        cy.assertVisible(visibleSelectorsMethod);

        customCheckoutPage.getMethodNextButton().click();

        customCheckoutPage
          .getPaymentCardNumberField()
          .type(Cypress.env("creditCardNumber"), { force: true });
        customCheckoutPage
          .getPaymentExpirationField()
          .type(Cypress.env("creditCardExpiration"), { force: true });
        customCheckoutPage
          .getPaymentCVCField()
          .type(Cypress.env("creditCardCVC"), { force: true });

        const visibleSelectorsAfterLogin = [
          customCheckoutPage.getPaymentExpirationField,
          customCheckoutPage.getPaymentCVCField,
          customCheckoutPage.getPaymentZipcodeField,
          customCheckoutPage.getPaymentTermsOfServiceLink,
          customCheckoutPage.getPaymentSubmitOrderButton,
        ];
        cy.assertVisible(visibleSelectorsAfterLogin);

        const existSelectors = [customCheckoutPage.getPaymentCardNumberField];
        cy.assertExist(existSelectors);
      },
    );
  });
});
