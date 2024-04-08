import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();

const issueId = "@ECOMM-2198";
const tmsId = "@C-8990";

describe("Mini Cart Test Suite", function () {
  it(
    "Upsell Carousel - Add to Cart from Carousel " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      const remainingItemsInCarousel = 3;
      let expectedItemsInCart = 2;

      cy.addALaCartProductToCart("P.ball");
      cy.addUpsellItemToMiniCart(
        "Streaming",
        expectedItemsInCart++,
        remainingItemsInCarousel,
      );
      cy.addUpsellItemByIndexToMiniCart(
        0,
        expectedItemsInCart,
        remainingItemsInCarousel,
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
