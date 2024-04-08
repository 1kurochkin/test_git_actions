import ShopifyHeader from "../pageobjects/ShopifyHeader.js";
import "./GeneralCommands.js";
import CollectionsPage from "../pageobjects/CollectionsPage.js";
import TotalTransformationBundlePage from "../pageobjects/TotalTransformationBundleProductPage.js";
import ProductsPage from "../pageobjects/ProductsPage.js";
import CheckoutPage from "../pageobjects/CheckoutPage.js";
import SignatureBundlePage from "../pageobjects/SignatureBundleProductPage";
import StreamingMembershipFreeBundlePage from "../pageobjects/StreamingMembershipBundleProductPage.js";

const shopifyHeader = new ShopifyHeader();
const collectionsPage = new CollectionsPage();
const totalTransformationBundlePage = new TotalTransformationBundlePage();
const signatureBundlePage = new SignatureBundlePage();
const productsPage = new ProductsPage();
const checkoutPage = new CheckoutPage();
const streamingMembershipFreeBundlePage =
  new StreamingMembershipFreeBundlePage();

/**
 * Asserts item's name, type and quantity
 * Users needs to store token when logging in
 * ex: cy.assertShopifyDataCartContainsItem("Name", "Bundle", "1")
 */
Cypress.Commands.add(
  "assertShopifyDataCartContainsItem",
  function (expectedItemName, expectedItemType, expectedItemQuantity) {
    cy.window().then((win) => {
      const data = win.Alpine.store("cart").data;

      const foundItem = data?.items?.find((item) => {
        return item.product_title
          .toLowerCase()
          .includes(expectedItemName.toLowerCase());
      });

      if (!foundItem) {
        throw new Error(
          "Item " + expectedItemName + " is not present in data cart!",
        );
      }
      expect(foundItem?.product_title).to.include(expectedItemName);
      expect(foundItem?.product_type).to.include(expectedItemType);
      expect(foundItem?.quantity + "").to.include(expectedItemQuantity);
    });
  },
);

/**
 * Asserts attribute value in data cart
 * ex: cy.assertShopifyDataCartAttribute("items_subtotal_price", 313123)
 */
Cypress.Commands.add(
  "assertShopifyDataCartAttribute",
  function (attributeName, expectedValue) {
    cy.window().then((win) => {
      const data = win.Alpine.store("cart").data;
      expect(data?.[attributeName] + "").to.include(expectedValue);
    });
  },
);

/**
 * Adds 'Free trial classes' to the shopping cart
 */

Cypress.Commands.add("addFreeTrialToCart", function () {
  streamingMembershipFreeBundlePage.visitPage();
  streamingMembershipFreeBundlePage
    .getTryClassesFreeButton()
    .click({ force: true });
});

/**
 * Adds Streaming Membership Seven Days Free to cart and validate it
 * ex: cy.addStreamingMembershipSevenDaysFreeToCartAndValidateIt()
 */
Cypress.Commands.add(
  "addStreamingMembershipSevenDaysFreeToCartAndValidateIt",
  function () {
    shopifyHeader.getShopButton().trigger("mouseover", { force: true });
    shopifyHeader.getBundles().click();
    cy.assertVisible([collectionsPage.getTitle()]);

    cy.addFreeTrialToCart();

    cy.assertVisible([productsPage.getProductTitle()]);

    cy.assertVisible([
      productsPage.getSideCartSection(),
      productsPage.getFirstProductTitleFromSideCart(),
    ]);
    const streamingMembershipFreeBundleNamePromise = productsPage
      .getProductTitle()
      .getTextFromElement();

    streamingMembershipFreeBundleNamePromise.then((bundleName) => {
      productsPage
        .getFirstProductTitleFromSideCart()
        .assertTextContains(bundleName);
      productsPage
        .getFirstProductQuantityFromSideCart()
        .assertTextContains("1");

      productsPage
        .getFirstProductSubTotalPriceFromSideCart()
        .assertTextContains("free");
      productsPage.getFreeSubtotalFromSideCart().assertTextContains("free");
    });
  },
);

/**
 * Adds TTB to cart with afterpay and validate it's present in checkout page
 * ex: cy.addTotalTranformationBundleToCartWithAfterPayAndValidateItem()
 */
Cypress.Commands.add(
  "addTotalTranformationBundleToCartWithAfterPayAndValidateItem",
  function () {
    cy.openTotalTransformationBundle();

    totalTransformationBundlePage
      .getPayWithAfterPayButton()
      .click({ force: true });

    cy.assertVisible([
      checkoutPage.getAfterpayCollapsible(),
      checkoutPage.getFirstBundleItem(),
    ]);
  },
);

/**
 * Opens TTB from main page
 * It's expected to be on initial page
 * ex: cy.openStreamengMembershipFreeBundle()
 */
Cypress.Commands.add("openStreamengMembershipFreeBundle", function () {
  cy.addFreeTrialToCart();
  cy.assertVisible([totalTransformationBundlePage.getProductTitle()]);
});

/**
 * Adds Multiple Streaming Membership Seven Days Free to cart and validate it
 * ex: cy.addMultipleStreamingMembershipSevenDaysFreeToCartAndValidateIt()
 */
Cypress.Commands.add(
  "addMultipleStreamingMembershipSevenDaysFreeToCartAndValidateIt",
  function () {
    cy.addStreamingMembershipSevenDaysFreeToCartAndValidateIt();
    cy.openStreamengMembershipFreeBundle();
    productsPage.getFirstProductQuantityFromSideCart().assertTextContains("1");
  },
);

/**
 * Opens Product from main page
 * It's expected to be on collections page
 * ex: cy.openProduct("P.ball")
 */
Cypress.Commands.add("openProduct", function (productName) {
  const product = collectionsPage.getProductByName(productName);
  cy.assertVisible([collectionsPage.getSectionTitle()]);

  product.click({ force: true });
  productsPage.getProductTitle().assertTextContains(productName);
});

/**
 * Opens Product from main page
 * It's expected to be on product detail or TTB product Streaming Membership produc
 * ex: cy.validateProductSectionLoads()
 */
Cypress.Commands.add("validateProductSectionLoads", function () {
  cy.assertVisible([
    productsPage.getProductTitle(),
    productsPage.getCarouselContainer(),
    productsPage.getSelectedImageMediaContainer(),
    productsPage.getProductPrice(),
    productsPage.getProductDescriptionContainer(),
    productsPage.getReviewsSection(),
  ]);
});

/**
 * Open a La Cart Product from main page
 *
 * ex: cy.openALaCartProduct("P.band")
 */
Cypress.Commands.add("openALaCartProduct", function (productName) {
  shopifyHeader.getShopButton().trigger("mouseover", { force: true });
  shopifyHeader.getEquipment().click({ force: true });

  cy.openProduct(productName);
  cy.validateProductSectionLoads();
  cy.assertVisible([
    productsPage.getAddToCartButton(),
    productsPage.getDimensionAndMaterialsContainer(),
    productsPage.getHowToUserContainer(),
    productsPage.getMoreDetailsContainer(),
  ]);
});

/**
 * Add a La Carte Product to cart from main page
 *
 * ex: cy.addALaCartProductToCart("P.band")
 */
Cypress.Commands.add("addALaCartProductToCart", function (productName) {
  cy.openALaCartProduct(productName);
  productsPage.getProductTitle().assertTextContains(productName);
  productsPage.getAddToCartButton().assertIsEnabled(true);
  productsPage.getAddToCartButton().click({ force: true });
  productsPage
    .getIncrementProductQuantityButtonFromSideCart()
    .assertIsEnabled(true);

  cy.assertVisible([productsPage.getSideCartSection()]);
  productsPage
    .getFirstProductTitleFromSideCart()
    .assertTextContains(productName);
  productsPage.getFirstProductQuantityFromSideCart().assertTextContains("1");
  productsPage.getTotalItemsInCart().assertTextContains("1");
  cy.assertShopifyDataCartContainsItem(productName, "Equipment", "1");
});

/**
 * Open Total Transformation Bundle from main page
 *
 * ex: cy.openTotalTransformationBundle()
 */
Cypress.Commands.add("openTotalTransformationBundle", function () {
  shopifyHeader.getShopButton().trigger("mouseover", { force: true });
  shopifyHeader.getBundles().click({ force: true });
  cy.assertVisible([collectionsPage.getTitle()]);

  collectionsPage.getTotalTransformationBundle().click({ force: true });
  cy.assertVisible([totalTransformationBundlePage.getProductTitle()]);
});

/**
 * Open Signature Bundle from main page
 *
 * ex: cy.openSignatureBundle()
 */
Cypress.Commands.add("openSignatureBundle", function () {
  shopifyHeader.getShopButton().trigger("mouseover", { force: true });
  shopifyHeader.getBundles().click({ force: true });
  cy.assertVisible([collectionsPage.getTitle()]);

  collectionsPage.getSignatureBundle().click({ force: true });
  cy.assertVisible([signatureBundlePage.getProductTitle()]);
});

/**
 * Add Bundle to cart from main page
 *
 * ex: cy.addBundleToCart("Signature Bundle")
 */
Cypress.Commands.add("addBundleToCart", function (bundleName) {
  productsPage.getAddToCartButton().click({ force: true });
  cy.assertVisible([
    productsPage.getSideCartSection(),
    productsPage.getFirstProductTitleFromSideCart(),
  ]);

  productsPage.getFirstProductQuantityFromSideCart().assertTextContains("1");

  productsPage
    .getFirstProductTotalPriceFromSideCart()
    .getTextFromElement()
    .then((bundlePrice) => {
      productsPage.getSubtotalFromSideCart().assertTextContains(bundlePrice);
      cy.assertShopifyDataCartAttribute(
        "items_subtotal_price",
        bundlePrice.replace(/[^\d]/g, ""),
      );
    });
  cy.assertShopifyDataCartContainsItem(bundleName, "Bundle", 1);
});

/**
 * Add Total Transformation Bundle to cart from main page
 *
 * ex: cy.addTotalTransformationBundleToCart()
 */
Cypress.Commands.add("addTotalTransformationBundleToCart", function () {
  cy.openTotalTransformationBundle();
  cy.addBundleToCart("Total Transformation Bundle");
});

/**
 * Add Signature Bundle to cart from main page
 *
 * ex: cy.addSignatureBundleToCart()
 */
Cypress.Commands.add("addSignatureBundleToCart", function () {
  cy.openSignatureBundle();
  cy.addBundleToCart("Signature Bundle");
});

/**
 * Adds  Streaming Membership Seven Days Free to cart with one bundle product in the cart already and validate it
 * ex: cy.addStreamingMembershipSevenDaysFreeToCartWithBundleInCartAndValidateIt()
 */
Cypress.Commands.add(
  "addStreamingMembershipSevenDaysFreeToCartWithBundleInCartAndValidateIt",
  function (bundleName) {
    cy.addTotalTransformationBundleToCart();
    totalTransformationBundlePage.getCloseSideCartButton().click();
    streamingMembershipFreeBundlePage.visitPage();
    streamingMembershipFreeBundlePage
      .getTryClassesFreeButton()
      .assertIsEnabled(false);
    cy.assertVisible([
      streamingMembershipFreeBundlePage.getAlreadyHasAMembershipInCart(),
    ]);

    streamingMembershipFreeBundlePage.getCartButton().click();
    streamingMembershipFreeBundlePage
      .getFirstProductTitleFromSideCart()
      .assertTextContains(bundleName);
    streamingMembershipFreeBundlePage
      .getFirstProductQuantityFromSideCart()
      .assertTextContains("1");
  },
);

/*
 * Decrement item in mini cart
 * It's expected the mini cart contains at least one item
 * ex: cy.decrementItemInMiniCart(itemIndex = 0, expectedItemsAfterDecreasing = 0)
 */
Cypress.Commands.add(
  "decrementItemInMiniCart",
  function (itemIndex, expectedItemsAfterDecreasing = 0) {
    productsPage
      .getDecrementProductQuantityButtonFromSideCart(itemIndex)
      .click({ force: true });

    if (expectedItemsAfterDecreasing === 0) {
      cy.assertVisible([productsPage.getCartIsEmptyTitleFromSideCart()]);
    }

    productsPage
      .getTotalItemsInCart()
      .assertTextContains("" + expectedItemsAfterDecreasing);
    cy.assertShopifyDataCartAttribute(
      "item_count",
      expectedItemsAfterDecreasing,
    );
  },
);

/**
 * Increment item in mini cart
 * It's expected the mini cart contains at least one item
 * ex: cy.incrementProductItemInMiniCart(itemIndex = 0, expectedItemsAfterIncreasing= 1)
 */
Cypress.Commands.add(
  "incrementItemInMiniCart",
  function (itemIndex, expectedItemsAfterIncreasing = 1) {
    productsPage
      .getIncrementProductQuantityButtonFromSideCart(itemIndex)
      .click({ force: true });

    if (expectedItemsAfterIncreasing < 2) {
      cy.assertNotExist([productsPage.getCartIsEmptyTitleFromSideCart()]);
    }
    productsPage
      .getFirstProductQuantityFromSideCart()
      .assertTextContains("" + expectedItemsAfterIncreasing);
    productsPage
      .getTotalItemsInCart()
      .assertTextContains("" + expectedItemsAfterIncreasing);
    cy.assertShopifyDataCartAttribute(
      "item_count",
      expectedItemsAfterIncreasing,
    );
  },
);

/**
 * Assert bundle is not increasing
 * It's expected the mini cart open
 * ex: assertBundleIsNotIncreasing(0, "Total Transformation Bundle")
 */
Cypress.Commands.add(
  "assertBundleIsNotIncreasing",
  function (itemIndex, bundleName) {
    const incrementButtonInCart =
      productsPage.getIncrementProductQuantityButtonFromSideCart(itemIndex);

    incrementButtonInCart.then(($button) => {
      if ($button.is(":enabled")) {
        cy.wrap($button).click();
      }
      incrementButtonInCart.assertIsEnabled(false);
      productsPage
        .getFirstProductQuantityFromSideCart()
        .assertTextContains("1");
      cy.assertShopifyDataCartContainsItem(bundleName, "Bundle", "1");

      productsPage
        .getFirstProductTotalPriceFromSideCart()
        .getTextFromElement()
        .then((bundlePrice) => {
          productsPage
            .getSubtotalFromSideCart()
            .assertTextContains(bundlePrice);
        });
    });
  },
);

/**
 * Assert trial is not increasing
 * It's expected the mini cart open
 * ex: assertTrialIsNotIncreasing(0, "Total Transformation Bundle")
 */
Cypress.Commands.add(
  "assertTrialIsNotIncreasing",
  function (itemIndex, bundleName) {
    const incrementButtonInCart =
      productsPage.getIncrementProductQuantityButtonFromSideCart(itemIndex);

    incrementButtonInCart.then(($button) => {
      if ($button.is(":enabled")) {
        cy.wrap($button).click();
      }
      incrementButtonInCart.assertIsEnabled(false);
      productsPage
        .getFirstProductQuantityFromSideCart()
        .assertTextContains("1");
      cy.assertShopifyDataCartContainsItem(bundleName, "Streaming", "1");
    });
  },
);

/**
 * Adds  Streaming Membership Seven Days Free to cart with one bundle product in the cart already and validate it
 * ex: cy.addStreamingMembershipSevenDaysFreeToCartWithBundleInCartAndValidateIt()
 */
Cypress.Commands.add(
  "addBundleToCartWithStreamingMembershipSevenDaysFreeInCartAndValidateIt",
  function (freeTrialBundle, bundleName) {
    cy.addStreamingMembershipSevenDaysFreeToCartAndValidateIt();
    streamingMembershipFreeBundlePage.getCloseSideCartButton().click();
    cy.assertVisible([streamingMembershipFreeBundlePage.getProductTitle()]);

    totalTransformationBundlePage.visitPage();
    cy.assertVisible([
      productsPage.getAddToCartButton(),
      productsPage.getExploreClassTypesSection(),
    ]);

    productsPage.getProductFullPrice().then(($el) => {
      let totalTransformationBundlePricePromise;
      if ($el.length > 0 && $el.is(":visible")) {
        totalTransformationBundlePricePromise = cy
          .wrap($el)
          .getTextFromElement();
      } else {
        totalTransformationBundlePricePromise = totalTransformationBundlePage
          .getProductPrice()
          .getTextFromElement();
      }

      totalTransformationBundlePage.getAddToCartButton().click({ force: true });
      cy.assertVisible([totalTransformationBundlePage.getSideCartSection()]);

      productsPage.getCloseSideCartButton().click({ force: true });
      productsPage.getCartButton().click({ force: true });
      productsPage
        .getFirstProductQuantityFromSideCart()
        .assertTextContains("1");

      totalTransformationBundlePricePromise.then((bundlePrice) => {
        productsPage
          .getFirstProductTitleFromSideCart()
          .assertTextNotContains(freeTrialBundle);
        productsPage
          .getFirstProductTitleFromSideCart()
          .assertTextContains(bundleName);
        productsPage
          .getFirstProductTotalPriceFromSideCart()
          .assertTextContains(bundlePrice);
        productsPage.getSubtotalFromSideCart().assertTextContains(bundlePrice);
      });
    });
  },
);
