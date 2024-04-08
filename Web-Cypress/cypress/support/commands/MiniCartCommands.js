import ProductsPage from "../pageobjects/ProductsPage.js";

const productsPage = new ProductsPage();

/**
 * Add upsell item
 * It's expected the mini cart contains at least one item
 * ex: cy.addUpsellItemToMiniCart(itemName, 2, 3)
 */
Cypress.Commands.add(
  "addUpsellItemToMiniCart",
  function (itemName, expectedItemsInCart, remainingItemsInCarousel) {
    //Add upsell item to cart
    productsPage.getAddToCartButtonFromUpsellItemsCarousel(itemName).click({
      force: true,
    });
    productsPage.getAddToCartButton().assertIsEnabled(true);

    //Check item is added in cart
    productsPage.getTotalItemsInCart().contains("" + expectedItemsInCart);
    productsPage
      .getFirstProductTitleFromSideCart()
      .assertTextContains(itemName);
    productsPage
      .getAllProductsTitleFromSideCart()
      .assertElementsLength(expectedItemsInCart);
    productsPage.getFirstProductQuantityFromSideCart().assertTextContains("1");

    //Check item is not present in upsell carousel
    productsPage.getAllUpsellItems().eq(0).assertTextNotContains(itemName);

    //Check upsell carousel items available
    productsPage
      .getAllUpsellItems()
      .assertElementsLength(remainingItemsInCarousel);
  },
);

/**
 * Add upsell item by index
 * It's expected the mini cart contains at least one item
 * ex: cy.addUpsellItemByIndexToMiniCart(itemIndex, 3, 3)
 */
Cypress.Commands.add(
  "addUpsellItemByIndexToMiniCart",
  function (itemIndex, expectedItemsInCart, remainingItemsInCarousel) {
    //Select product at index
    productsPage
      .getUpsellItemsCarousel(itemIndex)
      .getTextFromElement()
      .then((text) => {
        productsPage.getAllUpsellItems().eq(itemIndex).assertTextContains(text);
        cy.addUpsellItemToMiniCart(
          text.trim().replace(/[\t\n]/g, ""),
          expectedItemsInCart,
          remainingItemsInCarousel,
        );
      });
  },
);

/*
 * Remove item in mini cart
 * It's expected the mini cart contains at least one item
 * ex: cy.removeItemInMiniCart(0, 0, 0)
 */
Cypress.Commands.add(
  "removeItemInMiniCart",
  function (
    itemIndex,
    expectedItemsAfterRemovingInCart,
    expectedTotalAfterRemovingInDataCart,
  ) {
    productsPage
      .getRemoveProductQuantityButtonFromSideCart(itemIndex)
      .click({ force: true });

    //Check existing items in mini cart
    productsPage
      .getTotalItemsInCart()
      .assertTextEquals(expectedItemsAfterRemovingInCart);

    //Check item is removed in data cart
    cy.assertShopifyDataCartAttribute(
      "item_count",
      expectedItemsAfterRemovingInCart,
    );

    //Check subtotal has changed due to removing item
    cy.assertShopifyDataCartAttribute(
      "total_price",
      expectedTotalAfterRemovingInDataCart,
    );
  },

  /*
   * Assert item not longer present in mini cart
   * ex: cy.assertItemIsNotPresentInMiniCart("P.ball", 0)
   */
  Cypress.Commands.add(
    "assertItemIsNotPresentInMiniCart",
    function (itemName, expectedItemsInCart) {
      //Check existing items in mini cart
      productsPage.getTotalItemsInCart().assertTextEquals(expectedItemsInCart);

      let existsInMiniCart = false;
      if (expectedItemsInCart > 0) {
        //Check item is not present in cart
        productsPage
          .getAllProductsTitleFromSideCart()
          .each(($el) => {
            if (
              $el
                .text()
                .trim()
                .replace(/[\t\n]/g, "")
                .includes(itemName)
            ) {
              existsInMiniCart = true;
            }
          })
          .then(() => {
            expect(existsInMiniCart, itemName + " should not be found").to.be
              .false;
          });
      }
    },
  ),
);
