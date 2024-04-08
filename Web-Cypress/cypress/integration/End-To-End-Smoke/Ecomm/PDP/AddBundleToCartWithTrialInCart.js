import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import CheckoutPage from "../../../../support/pageobjects/CheckoutPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import TotalTransformationBundlePage from "../../../../support/pageobjects/TotalTransformationBundleProductPage.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const totalTransformationBundlePage = new TotalTransformationBundlePage();
const checkoutPage = new CheckoutPage();

const issueId = "@ECOMM-2141";
const tmsId = "@C-8575";

describe("Product Description Pages (PDP) Test Suite", function () {
  it(
    "Add Bundle to Cart with Trial from PDP " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      cy.addBundleToCartWithStreamingMembershipSevenDaysFreeInCartAndValidateIt(
        "Streaming Membership",
        "Total Transformation Bundle",
      );

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
    metadataManager.setDescription("New Checkout page version is in progress");
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Farit Majul");
    return metadataManager;
  }
});
