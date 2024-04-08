import ShopifyHeader from "../../../support/pageobjects/ShopifyHeader.js";
import ProductsPage from "../../../support/pageobjects/ProductsPage.js";

const shopifyHeader = new ShopifyHeader();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const productsPage = new ProductsPage();

describe("Shopify Header and Footer POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Shopify Header for a Guest", function () {
    cy.visit("/");
    cy.waitForShopifyPageLoad();

    cy.shopifyHeaderGuest();
  });

  it("Validates all of the selectors in the Shopify Header for an Unsubscribed User", function () {
    cy.loginUnsubscribedUser();
    cy.waitForShopifyPageLoad();

    cy.shopifyHeaderUnsubscribed();
  });

  it("Validates all of the selectors in the Shopify Header for a Subscribed User", function () {
    cy.loginSubscribedUser();

    cy.waitForAppPageLoad();

    productsPage.visitPBallPage();
    cy.waitForShopifyPageLoad();

    cy.shopifyHeaderSubscribed();
  });

  it("Validates all of the selectors in the Shopify Mini Cart", function () {
    productsPage.visitPBallPage();
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(1000);

    //Minicart Items
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(1000);

    const notVisibleMiniCartSelectors = [
      shopifyHeader.getHeaderMiniCartFirstItemImageLink,
      shopifyHeader.getHeaderMiniCartFirstItemQuantityDropDown,
      shopifyHeader.getHeaderMiniCartFirstItemRemoveButton,
      shopifyHeader.getHeaderMiniCartCheckoutButton,
      shopifyHeader.getHeaderMiniCartReviewOrderLink,
    ];
    cy.assertNotVisible(notVisibleMiniCartSelectors);

    // Removed due to issues with the API
    // shopifyHeader.getHeaderMiniCartPayPalButton().should('exist');
  });

  it("Validates all of the selectors in the Shopify Footer", function () {
    cy.visit("/");
    cy.waitForShopifyPageLoad();

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Shopify Header verification for " +
        size.width +
        ", " +
        size.height +
        " for a Guest",
      function () {
        cy.viewport(size.width, size.height);

        cy.visit("/");

        cy.waitForShopifyPageLoad();

        cy.responsiveShopifyHeaderGuest();
      },
    );

    it(
      "Responsive - Shopify Header verification for " +
        size.width +
        ", " +
        size.height +
        " for an Unsubscribed User",
      function () {
        cy.viewport(size.width, size.height);

        cy.loginUnsubscribedUser();

        cy.waitForShopifyPageLoad();

        cy.responsiveShopifyHeaderUnsubscribed();
      },
    );

    it(
      "Responsive - Shopify Header verification for " +
        size.width +
        ", " +
        size.height +
        " for a Subscribed User",
      function () {
        cy.viewport(size.width, size.height);

        cy.loginSubscribedUser();

        cy.waitForAppPageLoad();

        productsPage.visitPBallPage();

        cy.waitForShopifyPageLoad();

        cy.responsiveShopifyHeaderSubscribed();
      },
    );

    it(
      "Responsive - Shopify Footer verification for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.visit("/");

        cy.waitForShopifyPageLoad();

        cy.responsiveShopifyFooter();
      },
    );
  });
});
