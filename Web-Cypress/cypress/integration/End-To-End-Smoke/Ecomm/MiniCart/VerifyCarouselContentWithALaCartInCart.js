import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";
import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const productsPage = new ProductsPage();

const issueId = "@ECOMM-2197";
const tmsId = "@C-8991";

describe("Shopping Test Suite", function () {
  it(
    "Upsell Carousel - A La Carte Carousel Contents " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      const itemName = "P.ball";
      const freeStreamingItemName = "7 Days of Free Streaming";

      cy.addALaCartProductToCart(itemName);
      productsPage
        .getAllUpsellItems()
        .assertTextNotContains(itemName)
        .assertTextContains(freeStreamingItemName)
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
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }
});
