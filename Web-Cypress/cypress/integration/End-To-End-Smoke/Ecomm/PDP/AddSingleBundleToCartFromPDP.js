import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import CheckoutPage from "../../../../support/pageobjects/CheckoutPage.js";
import CollectionsPage from "../../../../support/pageobjects/CollectionsPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import TotalTransformationBundlePage from "../../../../support/pageobjects/TotalTransformationBundleProductPage.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const collectionsPage = new CollectionsPage();
const totalTransformationBundlePage = new TotalTransformationBundlePage();
const checkoutPage = new CheckoutPage();

const issueId = "@ECOMM-2138";
const tmsId = "@C-8572";

describe("Product Description Pages (PDP) Test Suite", function () {
  it(
    "Add Single Bundle to Cart from PDP " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      shopifyHeader.getShopButton().trigger("mouseover", { force: true });
      shopifyHeader.getBundles().click();
      cy.assertVisible([collectionsPage.getTitle()]);

      const totalTransformationBundlePricePromise = collectionsPage
        .getTotalTransformationBundleTotalPrice()
        .getTextFromElement();

      collectionsPage.getTotalTransformationBundle().click();
      cy.assertVisible([totalTransformationBundlePage.getProductTitle()]);

      totalTransformationBundlePage.getAddToCartButton().click({ force: true });
      cy.assertVisible([
        totalTransformationBundlePage.getSideCartSection(),
        totalTransformationBundlePage.getFirstProductTitleFromSideCart(),
      ]);
      const totalTransformationBundleNamePromise = totalTransformationBundlePage
        .getFirstProductTitleFromSideCart()
        .getTextFromElement();

      totalTransformationBundlePage
        .getFirstProductQuantityFromSideCart()
        .assertTextContains("1");
      totalTransformationBundlePricePromise
        .then((bundlePrice) => {
          totalTransformationBundlePage
            .getFirstProductTotalPriceFromSideCart()
            .assertTextContains(bundlePrice);
          totalTransformationBundlePage
            .getSubtotalFromSideCart()
            .assertTextContains(bundlePrice);

          // remove non-numeric characters
          return new Cypress.Promise.all([bundlePrice.replace(/[^\d]/g, "")]);
        })
        .then(([bundlePrice]) => {
          totalTransformationBundleNamePromise.then((bundleName) => {
            cy.assertShopifyDataCartContainsItem(bundleName, "Bundle", "1");
          });
          cy.assertShopifyDataCartContainsItem("Membership", "Streaming", "1");
          cy.assertShopifyDataCartAttribute(
            "items_subtotal_price",
            bundlePrice,
          );
        });

      totalTransformationBundlePage.getCheckoutButton().click();
      cy.assertVisible([
        checkoutPage.getCheckoutMainContent(),
        checkoutPage.getFirstBundleItem(),
        checkoutPage.getFirstStreamingItem(),
      ]);
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }
});
