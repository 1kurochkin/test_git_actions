import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";

const productsPage = new ProductsPage();

const productURL = "usi-essentials-kit";
const productTitle = "USI essentials kit";
const productPrice = "249.99";

describe("USI Essentials Kit Selector Validation Test", function () {
  it("Validates all of the selectors for the USI Essentials kit", function () {
    productsPage.visitProductPage(productURL);

    productsPage
      .getBodyProductTitle()
      .contains(productTitle, { matchCase: false });

    productsPage.getProductPrice().contains(productPrice);

    productsPage.getBodySlideshowFirstButton().click({ force: true });
    productsPage.getBodySlideshowSecondButton().click({ force: true });
    productsPage.getBodySlideshowThirdButton().click({ force: true });

    productsPage.getBodyCustomerReviewsQuestionsButton().click({ force: true });
    productsPage.getBodyCustomerReviewsReviewsButton().click({ force: true });

    productsPage.getBodyProductDetailsOne().scrollIntoView();
    productsPage.getBodyProductDetailsOne().click({ force: true });
    productsPage.getBodyProductDetailsTwo().click({ force: true });
    productsPage.getBodyProductDetailsThree().click({ force: true });

    cy.scrollTo("top");
    productsPage.getBodyUpsellItemOne().click({ force: true });
    productsPage.getBodyUpsellItemTwo().click({ force: true });

    /* Disabled rest of test because always sold out on QA
        productsPage.getBodyAddToCartButton().click({ force: true });

        cy.wait(1500);
        shopifyHeader.getHeaderMiniCartFirstItemRemoveButton().click({ force: true });
        cy.wait(1500);
        shopifyHeader.getHeaderMiniCartFirstItemRemoveButton().click({ force: true });
        cy.wait(1500);

        shopifyHeader.getHeaderMiniCartFirstItemTitleText().contains(productTitle);

        shopifyHeader.getHeaderMiniCartFirstItemPriceText().contains(productPrice);

        shopifyHeader.getHeaderMiniCartReviewOrderLink().click({ force: true });

        cartPage.getBodyFirstProductTitleLink().contains(productTitle);

        cartPage.getBodySubtotalText().contains(productPrice);

        cartPage.getBodyAnyDigitalGoodsCheckoutButton().click({ force: true });

        customCheckoutPage.getCartTotalText().contains(totalPrice);

        customCheckoutPage.getCartPromoCodeField().type(promoCode);
        customCheckoutPage.getCartApplyPromoCodeButton().click();
        cy.wait(1000);

        customCheckoutPage.getCartTotalText().contains(totalPriceAfterPromo);

        customCheckoutPage.getCartPromoCodeField().type(promoCode);
        customCheckoutPage.getCartRemovePromoCodeButton().click();
        cy.wait(1000);

        customCheckoutPage.getCartTotalText().contains(totalPrice);

        customCheckoutPage.getCartPromoCodeField().type(promoCode);
        customCheckoutPage.getCartApplyPromoCodeButton().click();
        cy.wait(1000);

        customCheckoutPage.getCartTotalText().contains(totalPriceAfterPromo);

        customCheckoutPage.getAccountEmailField().type(Cypress.env('emailUnsubscribed'));
        customCheckoutPage.getAccountNextButton().click();
        customCheckoutPage.getAccountEmailPasswordField().type(Cypress.env('password'));
        customCheckoutPage.getAccountNextButton().click();

        customCheckoutPage.getShippingFirstNameField().type("John");
        customCheckoutPage.getShippingLastNameField().type("Doe");
        customCheckoutPage.getShippingAddressField().type("1111 Test Dr.");
        customCheckoutPage.getShippingApartmentSuiteField().type("C");
        customCheckoutPage.getShippingCityField().type("Sonoma");
        customCheckoutPage.getShippingStateDropdownMenu().select("California");
        customCheckoutPage.getShippingZipcodeField().type("42424");
        customCheckoutPage.getShippingNextButton().click();
        cy.wait(1000);

        customCheckoutPage.getMethodFirstMethodPriceText().contains("free", { matchCase: false });
        */
  });
});
