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

const issueId = "@ECOMM-2200";
const tmsId = "@C-8993";

describe("Shopping Test Suite", function () {
  it(
    "Verify Carousel Content with Single Bundle in Cart " +
      issueId +
      " " +
      tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      cy.addSignatureBundleToCart();

      productsPage
        .getAllUpsellItems()
        .assertTextNotContains("Precision Mat")
        .assertTextNotContains("Cushion Mat")
        .assertTextNotContains("P.ball")
        .assertTextNotContains("P.band")
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
