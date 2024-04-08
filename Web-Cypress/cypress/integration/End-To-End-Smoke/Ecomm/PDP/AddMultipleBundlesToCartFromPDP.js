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

const issueId = "@ECOMM-2139";
const tmsId = "@C-8573";

describe("Product Description Pages (PDP) Test Suite", function () {
  it(
    "Add Multiple Bundles to Cart from PDP " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      cy.addTotalTransformationBundleToCart();
      totalTransformationBundlePage.getCloseSideCartButton().click();

      totalTransformationBundlePage.getAddToCartButton().then(($button) => {
        if ($button.is(":enabled")) {
          cy.wrap($button).click();
        }
        cy.assertVisible([
          totalTransformationBundlePage.getYouMayNeedCheckoutOneBundleError(),
        ]);
      });
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
