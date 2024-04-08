import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";

//import ProductsPage from "../pageobjects/ProductsPage.js";

//const productsPage = new ProductsPage();

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const productsPage = new ProductsPage();

const issueId = "@ECOMM-2186";
const tmsId = "@C-8238";

describe("Mini Cart Test Suite", function () {
  it(
    "Incrementing A La Carte in Mini Cart " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      cy.addALaCartProductToCart("P.ball");
      const expectedQuantityAfterIncreasing = 2;
      productsPage
        .getFirstProductTotalPriceFromSideCart()
        .getTextFromElement()
        .then((price) => {
          const priceWithoutFormat = parseFloat(price.replace(/[^\d.]/g, ""));
          const expectedPrice =
            priceWithoutFormat * expectedQuantityAfterIncreasing;

          cy.incrementItemInMiniCart(0, expectedQuantityAfterIncreasing);

          productsPage
            .getFirstProductTotalPriceFromSideCart()
            .assertTextContains("" + expectedPrice);
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
    metadataManager.setOwner("Mauro Gonzalez");
    return metadataManager;
  }
});
