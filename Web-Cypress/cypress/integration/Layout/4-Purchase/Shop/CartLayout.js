import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";
import CollectionsPage from "../../../../support/pageobjects/CollectionsPage.js";
import CartPage from "../../../../support/pageobjects/CartPage.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";

const shopifyHeader = new ShopifyHeader();
const productsPage = new ProductsPage();
const collectionsPage = new CollectionsPage();
const cartPage = new CartPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Cart POM Selector Validation Test", function () {
  it("Validates all of the selectors in the cart POM", function () {
    collectionsPage.visitEquipmentPage();
    collectionsPage.getBodyProductSix().click();
    cy.wait(2000);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(2000);
    collectionsPage.visitEquipmentPage();
    cy.url().should("include", "/collections");
    collectionsPage.getBodyProductTwo().click();
    cy.wait(2000);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(3000);
    shopifyHeader.getHeaderMiniCartReviewOrderLink().click({ force: true });
    cy.url().should("include", "/cart");

    cy.shopifyHeaderGuest();

    const notVisibleSelectors = [
      cartPage.getFirstProductQuantityDropDown,
      cartPage.getSecondProductQuantityDropDown,
    ];
    cy.assertExist(notVisibleSelectors);

    const visibleSelectors = [
      //[BODY]
      cartPage.getBodyContinueShoppingLink,
      cartPage.getBodyFirstProductRemoveButton,
      cartPage.getBodyFirstProductTitleLink,
      cartPage.getBodySecondProductRemoveButton,
      cartPage.getBodySecondProductTitleLink,
      cartPage.getBodyPhysicalGoodsOnlyCheckoutButton,
      cartPage.getBodyReturnPolicyTitle,
      cartPage.getBodyOvernight2DayShippingTitle,
      cartPage.getBodyInternationalShippingTitle,
    ];
    cy.assertVisible(visibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Cart Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        collectionsPage.visitEquipmentPage();
        collectionsPage.getBodyProductSix().click();
        cy.wait(2000);
        productsPage.getBodyAddToCartButton().click({ force: true });
        cy.wait(2000);
        collectionsPage.visitEquipmentPage();
        cy.url().should("include", "/collections");
        collectionsPage.getBodyProductTwo().click();
        cy.wait(2000);
        productsPage.getBodyAddToCartButton().click({ force: true });
        cy.wait(3000);
        shopifyHeader.getHeaderMiniCartReviewOrderLink().click({ force: true });
        cy.url().should("include", "/cart");

        cy.responsiveShopifyHeaderGuest();

        const notVisibleSelectors = [
          cartPage.getFirstProductQuantityDropDown,
          cartPage.getSecondProductQuantityDropDown,
          cartPage.getBodyContinueShoppingLink,
        ];
        cy.assertExist(notVisibleSelectors);

        const visibleSelectors = [
          //[BODY]
          cartPage.getBodyFirstProductRemoveButton,
          cartPage.getBodyFirstProductTitleLink,
          cartPage.getBodySecondProductRemoveButton,
          cartPage.getBodySecondProductTitleLink,
          cartPage.getBodyPhysicalGoodsOnlyCheckoutButton,
          cartPage.getBodyReturnPolicyTitle,
          cartPage.getBodyOvernight2DayShippingTitle,
          cartPage.getBodyInternationalShippingTitle,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
