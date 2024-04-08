import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";
import ProductsPage from "../../../../support/pageobjects/ProductsPage";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const productsPage = new ProductsPage();

const issueId = "@ECOMM-2206";
const tmsId = "@C-8994";

describe("Shopping Test Suite", function () {
  it(
    "Verify Carousel Content with TTB in Cart " + issueId + " " + tmsId,
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

      productsPage
        .getAllUpsellItems()
        .assertTextNotContains("Precision Mat")
        .assertTextNotContains("P.ball")
        .assertTextNotContains("P.band")
        .assertTextNotContains("P.3 Trainer")
        .assertTextNotContains("Slant Board")
        .assertTextNotContains("Heavy Ankle Band")
        .assertTextNotContains("Light Ankle Band")
        .assertTextNotContains("2 lb. Hand Weights")
        .assertTextNotContains("Gliders")
        .assertTextNotContains("1.5lb Ankle Weights")
        .assertTextNotContains("3lb Ankle Weights")
        .assertTextNotContains("Precision Foam Roller")
        .assertTextNotContains("Massage Balls")
        .assertTextNotContains("7 Days of FREE Streaming")
        .assertElementsLength(3);
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Ivan Kurochkin");
    return metadataManager;
  }
});
