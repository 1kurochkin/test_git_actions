import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";
import LegacyCheckoutPage from "../../../../support/pageobjects/LegacyCheckoutPage.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";

const shopifyHeader = new ShopifyHeader();
const productsPage = new ProductsPage();
const legacyCheckoutPage = new LegacyCheckoutPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Legacy Checkout POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Legacy Checkout POM", function () {
    productsPage.visitPBallPage();
    cy.wait(1500);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(2000);
    shopifyHeader.getHeaderMiniCartCheckoutButton().click({ force: true });

    const informationVisibleSelectors = [
      legacyCheckoutPage.getEmailInput,
      legacyCheckoutPage.getMarketingCheckbox,
      legacyCheckoutPage.getPromoCodeInput,
      legacyCheckoutPage.getPromoCodeButton,
      legacyCheckoutPage.getSubTotalPriceText,
      legacyCheckoutPage.getShippingPriceText,
      legacyCheckoutPage.getTotalPriceText,
      legacyCheckoutPage.getFirstNameInput,
      legacyCheckoutPage.getLastNameInput,
      legacyCheckoutPage.getStreetAddressInput,
      legacyCheckoutPage.getApartmentAddressInput,
      legacyCheckoutPage.getCityInput,
      legacyCheckoutPage.getStateInputDropdown,
      legacyCheckoutPage.getCountryInput,
      legacyCheckoutPage.getPostalCodeInput,
      legacyCheckoutPage.getPhoneInput,
      legacyCheckoutPage.getSMSCheckbox,
      legacyCheckoutPage.getContinueButton,
      legacyCheckoutPage.getPreviousStepLink,
    ];
    cy.assertVisible(informationVisibleSelectors);

    legacyCheckoutPage.getEmailInput().clear();
    legacyCheckoutPage.getEmailInput().type("pvolveautomation_test@test.com");
    legacyCheckoutPage.getFirstNameInput().clear();
    cy.wait(200);
    legacyCheckoutPage.getFirstNameInput().type("Test");
    legacyCheckoutPage.getLastNameInput().clear();
    cy.wait(200);
    legacyCheckoutPage.getLastNameInput().type("Tester");
    cy.wait(200);
    legacyCheckoutPage.getStreetAddressInput().type("123 DO NOT SHIP street");
    cy.wait(200);
    legacyCheckoutPage.getApartmentAddressInput().type("No");
    cy.wait(200);
    legacyCheckoutPage.getPostalCodeInput().type("95476");
    cy.wait(200);
    legacyCheckoutPage.getCityInput().type("Sonoma");
    legacyCheckoutPage.getStateInputDropdown().select("California");
    legacyCheckoutPage.getPhoneInput().type("9999999999");
    legacyCheckoutPage.getContinueButton().click({ force: true });

    const shippingMethodVisibleSelectors = [
      legacyCheckoutPage.getContactBlockContentText,
      legacyCheckoutPage.getShipToBlockContentText,
      legacyCheckoutPage.getShippingTypeSection,
      legacyCheckoutPage.getShippingMethodGroundRadioInput,
      legacyCheckoutPage.getShippingMethodTwoDayRadioInput,
      legacyCheckoutPage.getShippingMethodOvernightRadioInput,
      legacyCheckoutPage.getContinueButton,
      legacyCheckoutPage.getPreviousStepLink,
    ];
    cy.assertVisible(shippingMethodVisibleSelectors);

    legacyCheckoutPage.getContinueButton().click({ force: true });

    const paymentVisibleSelectors = [
      legacyCheckoutPage.getContactBlockContentText,
      legacyCheckoutPage.getShipToBlockContentText,
      legacyCheckoutPage.getSubTotalPriceText,
      legacyCheckoutPage.getShippingPriceText,
      legacyCheckoutPage.getTotalPriceText,
      legacyCheckoutPage.getMethodBlockContentText,
      legacyCheckoutPage.getCreditCardRadioInput,
      legacyCheckoutPage.getPayPalRadioInput,
      legacyCheckoutPage.getAfterpayRadioInput,
      legacyCheckoutPage.getSameAsShippingAddressRadioInput,
      legacyCheckoutPage.getDifferentBillingAddressRadioInput,
      legacyCheckoutPage.getContinueButton,
      legacyCheckoutPage.getPreviousStepLink,
    ];
    cy.assertVisible(paymentVisibleSelectors);

    legacyCheckoutPage.getDifferentBillingAddressRadioInput().click();

    const billingAddressVisibleSelectors = [
      legacyCheckoutPage.getBillingFirstNameInput,
      legacyCheckoutPage.getBillingLastNameInput,
      legacyCheckoutPage.getBillingStreetAddressInput,
      legacyCheckoutPage.getBillingApartmentAddressInput,
      legacyCheckoutPage.getBillingCityInput,
      legacyCheckoutPage.getBillingStateInputDropdown,
      legacyCheckoutPage.getBillingCountryInput,
      legacyCheckoutPage.getBillingPostalCodeInput,
      legacyCheckoutPage.getBillingPhoneInput,
    ];
    cy.assertVisible(billingAddressVisibleSelectors);
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Legacy Checkout Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        productsPage.visitPBallPage();
        cy.wait(1500);
        productsPage.getBodyAddToCartButton().click({ force: true });
        cy.wait(2000);
        shopifyHeader.getHeaderMiniCartCheckoutButton().click({ force: true });

        const informationVisibleSelectors = [
          legacyCheckoutPage.getEmailInput,
          legacyCheckoutPage.getMarketingCheckbox,
          legacyCheckoutPage.getFirstNameInput,
          legacyCheckoutPage.getLastNameInput,
          legacyCheckoutPage.getStreetAddressInput,
          legacyCheckoutPage.getApartmentAddressInput,
          legacyCheckoutPage.getCityInput,
          legacyCheckoutPage.getStateInputDropdown,
          legacyCheckoutPage.getCountryInput,
          legacyCheckoutPage.getPostalCodeInput,
          legacyCheckoutPage.getPhoneInput,
          legacyCheckoutPage.getSMSCheckbox,
          legacyCheckoutPage.getContinueButton,
          legacyCheckoutPage.getPreviousStepLink,
        ];
        cy.assertVisible(informationVisibleSelectors);

        legacyCheckoutPage.getEmailInput().clear();
        legacyCheckoutPage
          .getEmailInput()
          .type("pvolveautomation_test@test.com");
        legacyCheckoutPage.getFirstNameInput().clear();
        cy.wait(200);
        legacyCheckoutPage.getFirstNameInput().type("Test");
        legacyCheckoutPage.getLastNameInput().clear();
        cy.wait(200);
        legacyCheckoutPage.getLastNameInput().type("Tester");
        cy.wait(200);
        legacyCheckoutPage
          .getStreetAddressInput()
          .type("123 DO NOT SHIP street");
        cy.wait(200);
        legacyCheckoutPage.getApartmentAddressInput().type("No");
        cy.wait(200);
        legacyCheckoutPage.getPostalCodeInput().type("95476");
        cy.wait(200);
        legacyCheckoutPage.getCityInput().type("Sonoma");
        legacyCheckoutPage.getStateInputDropdown().select("California");
        legacyCheckoutPage.getPhoneInput().type("9999999999");
        legacyCheckoutPage.getContinueButton().click({ force: true });

        const shippingMethodVisibleSelectors = [
          legacyCheckoutPage.getContactBlockContentText,
          legacyCheckoutPage.getShipToBlockContentText,
          legacyCheckoutPage.getShippingTypeSection,
          legacyCheckoutPage.getShippingMethodGroundRadioInput,
          legacyCheckoutPage.getShippingMethodTwoDayRadioInput,
          legacyCheckoutPage.getShippingMethodOvernightRadioInput,
          legacyCheckoutPage.getContinueButton,
          legacyCheckoutPage.getPreviousStepLink,
        ];
        cy.assertVisible(shippingMethodVisibleSelectors);

        legacyCheckoutPage.getContinueButton().click({ force: true });

        const paymentVisibleSelectors = [
          legacyCheckoutPage.getContactBlockContentText,
          legacyCheckoutPage.getShipToBlockContentText,
          legacyCheckoutPage.getMethodBlockContentText,
          legacyCheckoutPage.getCreditCardRadioInput,
          legacyCheckoutPage.getPayPalRadioInput,
          legacyCheckoutPage.getAfterpayRadioInput,
          legacyCheckoutPage.getSameAsShippingAddressRadioInput,
          legacyCheckoutPage.getDifferentBillingAddressRadioInput,
          legacyCheckoutPage.getContinueButton,
          legacyCheckoutPage.getPreviousStepLink,
        ];
        cy.assertVisible(paymentVisibleSelectors);

        legacyCheckoutPage.getDifferentBillingAddressRadioInput().click();

        const billingAddressVisibleSelectors = [
          legacyCheckoutPage.getBillingFirstNameInput,
          legacyCheckoutPage.getBillingLastNameInput,
          legacyCheckoutPage.getBillingStreetAddressInput,
          legacyCheckoutPage.getBillingApartmentAddressInput,
          legacyCheckoutPage.getBillingCityInput,
          legacyCheckoutPage.getBillingStateInputDropdown,
          legacyCheckoutPage.getBillingCountryInput,
          legacyCheckoutPage.getBillingPostalCodeInput,
          legacyCheckoutPage.getBillingPhoneInput,
        ];
        cy.assertVisible(billingAddressVisibleSelectors);
      },
    );
  });
});
