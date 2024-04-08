import "./GeneralCommands.js";
import ProductsPage from "../pageobjects/ProductsPage.js";
import AmazonGetStartedPage from "../pageobjects/AmazonGetStartedPage.js";
import BaseURLPage from "../pageobjects/BaseURLPage.js";

const basePage = new BaseURLPage();

const productsPage = new ProductsPage();
const amazonGetStartedPage = new AmazonGetStartedPage();

/**
 * Validate AMZ activation discount code
 * It's expected the mini cart open
 * ex: cy.add12MonthDigitalMembershipWithAmazonActivationCodeAndValidateIt("12 Month Digital Membership")
 */
Cypress.Commands.add(
  "add12MonthDigitalMembershipWithAmazonActivationCodeAndValidateIt",
  function (bundleName) {
    cy.setDiscountCodeAndActivateIt();

    cy.assertVisible([amazonGetStartedPage.getSideCartSection()]);
    productsPage.getFirstProductQuantityFromSideCart().assertTextContains("1");
    productsPage
      .getFirstProductTitleFromSideCart()
      .assertTextContains(bundleName);
    cy.assertShopifyDataCartContainsItem(bundleName, "Streaming", "1");
    productsPage.getFreeTotalFromSideCart().assertTextContains("Free");
  },
);

/**
 * Adds  Bundle with Amzon Activation Code to cart With TTB in cart and validate it
 * should not proceed if TTB is already in cart
 * ex: cy.addTTBToCartWithAmazonActivationCode()
 */
Cypress.Commands.add("addTTBToCartWithAmazonActivationCode", function () {
  cy.addTotalTransformationBundleToCart();
  cy.setDiscountCodeAndActivateIt();
  cy.assertVisible([amazonGetStartedPage.getErrorMessageAlreadyInCart()]);
  amazonGetStartedPage.getCartButton().click();

  cy.assertVisible([productsPage.getSideCartSection()]);
});

/**
 * Goes to Amazon Activation Code page, set the discount code and activate it
 * ex: cy.setDiscountCodeAndActivateIt()
 * ex: cy.addTTBToCartWithAmazonActivationCode()
 */
Cypress.Commands.add("setDiscountCodeAndActivateIt", function () {
  amazonGetStartedPage.visitPage();
  amazonGetStartedPage
    .getPromoCodeTextBox()
    .type(Cypress.env("AMZDiscountCode"));
  amazonGetStartedPage.getActivateYourStreamingMembershipButton().click();
});

/**
 * Goes to Amazon Activation Code page, set the discount code and activate it
 * ex: cy.setDiscountCodeAndActivateIt()
 * ex: cy.addTTBToCartWithAmazonActivationCode()
 */
Cypress.Commands.add("addDigitalMembershipWithTrialInCart", function () {
  cy.addFreeTrialToCart();
  basePage.visitPage();
  cy.setDiscountCodeAndActivateIt();
  cy.assertVisible([amazonGetStartedPage.getErrorMessageAlreadyInCart()]);
});
