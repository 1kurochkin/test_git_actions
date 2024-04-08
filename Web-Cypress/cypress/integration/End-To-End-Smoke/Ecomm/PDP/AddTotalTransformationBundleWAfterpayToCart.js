import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";

import CheckoutPage from "../../../../support/pageobjects/CheckoutPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";
const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const checkoutPage = new CheckoutPage();

const issueId = "@ECOMM-2152";
const tmsId = "@C-8576";

describe("Product Description Pages (PDP) Test Suite", function () {
  it(
    "Add TTB Bundle to Cart from PDP (w/ Afterpay) " + issueId + " " + tmsId,
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

      checkoutPage.getProducts().assertElementsLength(1);
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
