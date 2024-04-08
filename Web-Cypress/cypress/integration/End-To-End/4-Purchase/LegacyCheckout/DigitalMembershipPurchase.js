import LegacyCheckoutPage from "../../../../support/pageobjects/LegacyCheckoutPage.js";
import DigitalMembershipPage from "../../../../support/pageobjects/DigitalMembershipPage.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";

const legacyCheckoutPage = new LegacyCheckoutPage();
const digitalMembershipPage = new DigitalMembershipPage();
const shopifyHeader = new ShopifyHeader();

describe("Unsubscribed User - Digital Membership Purchase", function () {
  it("Unsubscribed User - Digital Membership Purchase", function () {
    if (Cypress.env("BASE_URL") === "https://www.pvolve.com") {
      digitalMembershipPage.visitDigitalMembershipPage();
      cy.waitForShopifyPageLoad();

      cy.intercept("GET", "/cart.js").as("getCart");
      digitalMembershipPage.get1monthAddToCartButton().click({ force: true });

      shopifyHeader.getHeaderMiniCartCheckoutButton().click({ force: true });

      //Information page
      legacyCheckoutPage.getEmailInput().clear();
      legacyCheckoutPage.getEmailInput().type("pvolvetest@QLautomation.com");
      legacyCheckoutPage.getBillingFirstNameInput().clear();
      cy.wait(200);
      legacyCheckoutPage.getBillingFirstNameInput().type("Test");
      legacyCheckoutPage.getBillingLastNameInput().clear();
      cy.wait(200);
      legacyCheckoutPage.getBillingLastNameInput().type("Tester");
      cy.wait(200);
      legacyCheckoutPage.getBillingStreetAddressInput().type("DO NOT SHIP");
      cy.wait(200);
      legacyCheckoutPage.getBillingApartmentAddressInput().type("No");
      cy.wait(200);
      legacyCheckoutPage.getBillingPostalCodeInput().type("95476");
      cy.wait(200);
      legacyCheckoutPage.getBillingCityInput().type("DO NOT SHIP");
      legacyCheckoutPage.getBillingStateInputDropdown().select("California");
      legacyCheckoutPage.getPhoneInput().type("9999999999");
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

      //Assert tax
      //Currently disabled due to no valid state for digital membership tax.
      /*legacyCheckoutPage.getTotalPriceText().then(function ($total) {
                const total = $total.text();
                expect(parseFloat(total.split('$')[1])).to.not.equal(subtotal);
            });*/
    } else {
      //Full test is not ran on QA because link redirects to PROD
      digitalMembershipPage.visitDigitalMembershipPage();
      cy.waitForShopifyPageLoad();

      digitalMembershipPage.get1monthAddToCartButton().should("be.visible");
    }
  });
});
