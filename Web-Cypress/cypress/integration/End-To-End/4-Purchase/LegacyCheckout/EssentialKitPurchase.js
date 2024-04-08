import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import LegacyCheckoutPage from "../../../../support/pageobjects/LegacyCheckoutPage.js";
import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";

const shopifyHeader = new ShopifyHeader();
const legacyCheckoutPage = new LegacyCheckoutPage();
const productsPage = new ProductsPage();

describe("Unsubscribed User - Essentials Kit Purchase", function () {
  it("Unsubscribed User - Essentials Kit Purchase", function () {
    productsPage.visitEssentialsKitPage();
    cy.wait(500);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(500);
    shopifyHeader.getHeaderMiniCartCheckoutButton().click({ force: true });

    //Information page
    legacyCheckoutPage.getEmailInput().clear();
    legacyCheckoutPage.getEmailInput().type("pvolvetest@QLautomation.com");
    legacyCheckoutPage.getFirstNameInput().clear();
    cy.wait(200);
    legacyCheckoutPage.getFirstNameInput().type("Test");
    legacyCheckoutPage.getLastNameInput().clear();
    cy.wait(200);
    legacyCheckoutPage.getLastNameInput().type("Tester");
    cy.wait(200);
    legacyCheckoutPage.getStreetAddressInput().type("DO NOT SHIP");
    cy.wait(200);
    legacyCheckoutPage.getApartmentAddressInput().type("No");
    cy.wait(200);
    legacyCheckoutPage.getPostalCodeInput().type("95476");
    cy.wait(200);
    legacyCheckoutPage.getCityInput().type("DO NOT SHIP");
    legacyCheckoutPage.getStateInputDropdown().select("California");
    legacyCheckoutPage.getPhoneInput().type("9999999999");
    legacyCheckoutPage.getContinueButton().click({ force: true });

    //Shipping page
    legacyCheckoutPage.getShippingMethodFreeInput().should("be.visible");
    legacyCheckoutPage.getContinueButton().click({ force: true });

    //Payment page
    legacyCheckoutPage
      .getPaymentCreditCardNumberInput()
      .type(Cypress.env("creditCardNumber"));
    legacyCheckoutPage.getPaymentNameOnCardInput().type("Test Tester");
    legacyCheckoutPage
      .getPaymentExpirationDateInput()
      .type(Cypress.env("creditCardExpiration"));
    legacyCheckoutPage
      .getPaymentCVVNumberInput()
      .type(Cypress.env("creditCardCVC"));
    legacyCheckoutPage.getPaymentCompleteOrderButton().should("be.visible");
  });
});
