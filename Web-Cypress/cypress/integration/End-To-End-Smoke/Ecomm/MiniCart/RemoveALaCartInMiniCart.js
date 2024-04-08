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

const issueId = "@ECOMM-2188";
const tmsId = "@C-8756";

describe("Mini Cart Test Suite", function () {
  it(
    "Remove A La Carte in Mini Cart " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      const itemIndex = 0;
      const itemName = "P.ball";
      const expectedTotalAfterRemovingInDataCart = 0;
      const expectedItemsAfterRemovingInCart = 0;

      cy.addALaCartProductToCart(itemName);
      cy.removeItemInMiniCart(
        itemIndex,
        expectedItemsAfterRemovingInCart,
        expectedTotalAfterRemovingInDataCart,
      );
      cy.assertVisible([productsPage.getCartIsEmptyTitleFromSideCart()]);
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
