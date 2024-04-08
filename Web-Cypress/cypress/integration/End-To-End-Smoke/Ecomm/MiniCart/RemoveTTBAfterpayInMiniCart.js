import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import TotalTransformationBundlePage from "../../../../support/pageobjects/TotalTransformationBundleProductPage.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";
const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const totalTransformationBundlePage = new TotalTransformationBundlePage();

const issueId = "@ECOMM-2185";
const tmsId = "@C-8755";

const itemIndex = 0;
const itemName = "Total Transformation Bundle";
const expectedTotalAfterRemovingInDataCart = 0;
const expectedItemsAfterRemovingInCart = 0;

describe("Product Description Pages (PDP) Test Suite", function () {
  it(
    "Removing TTB Afterpay in Mini Cart " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();
      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      //cy.addTotalTranformationBundleToCartWithAfterPayAndValidateItem();

      // remove this after Ivan's PR is merged
      cy.openTotalTransformationBundle();
      totalTransformationBundlePage
        .getPayWithAfterPayButton()
        .click({ force: true });
      // Remove above block

      // Keep this portion
      basePage.visitPage();
      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);
      basePage.openCart();
      cy.removeItemInMiniCart(
        itemIndex,
        expectedItemsAfterRemovingInCart,
        expectedTotalAfterRemovingInDataCart,
      );
      cy.assertVisible([
        totalTransformationBundlePage.getCartIsEmptyTitleFromSideCart(),
      ]);
      cy.assertItemIsNotPresentInMiniCart(
        itemName,
        expectedItemsAfterRemovingInCart,
      );
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
