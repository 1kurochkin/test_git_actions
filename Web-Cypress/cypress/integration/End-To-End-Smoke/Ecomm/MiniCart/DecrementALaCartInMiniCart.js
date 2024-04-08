import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const productsPage = new ProductsPage();

const issueId = "@ECOMM-2187";
const tmsId = "@C-8236";

describe("Mini Cart Test Suite", function () {
  it(
    "Decrement A La Carte from Mini Cart " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      const productName = "P.ball";
      let expectedItems = 2;

      // Add a la cart items to mini cart
      cy.addALaCartProductToCart(productName);
      cy.incrementItemInMiniCart(0, expectedItems++);
      cy.incrementItemInMiniCart(0, expectedItems--);

      // Decrement items
      cy.decrementItemInMiniCart(0, expectedItems--);
      cy.decrementItemInMiniCart(0, expectedItems--);
      cy.decrementItemInMiniCart(0, expectedItems);
      cy.assertVisible([productsPage.getCartIsEmptyTitleFromSideCart()]);

      //check data cart!!!!
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
