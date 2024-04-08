import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import CheckoutPage from "../../../../support/pageobjects/CheckoutPage.js";
import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const checkoutPage = new CheckoutPage();
const productsPage = new ProductsPage();

const issueId = "@ECOMM-2169";
const tmsId = "@C-8690";

describe("Product Description Pages (PDP) Test Suite", function () {
  it(
    "Add Trial to Cart (w/ Afterpay TTB in Cart) " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      cy.addTotalTranformationBundleToCartWithAfterPayAndValidateItem();
      checkoutPage.getReturnToCartLink().click({ force: true });
      shopifyHeader.getCloseButtonFromMiniCart().click();
      cy.assertVisible([shopifyHeader.getHeader()]);

      cy.addFreeTrialToCart();

      cy.assertVisible([productsPage.getSideCartSection()]);

      productsPage
        .getFirstProductTitleFromSideCart()
        .assertTextContains("Total Transformation Bundle");
      productsPage
        .getFirstProductQuantityFromSideCart()
        .assertTextContains("1");
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
