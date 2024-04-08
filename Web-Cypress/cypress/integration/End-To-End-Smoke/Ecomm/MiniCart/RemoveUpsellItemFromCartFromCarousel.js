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

const issueId = "@ECOMM-2199";
const tmsId = "@C-8992";

describe("Mini Cart Test Suite", function () {
  it(
    "Upsell Carousel - Remove from Cart upsell item from Carousel " +
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

      //Open mini cart
      cy.addALaCartProductToCart("P.ball");
      cy.assertVisible([productsPage.getProductTitleByName("P.ball")]);

      productsPage
        .getAddToCartButtonFromUpsellItemsCarousel("Streaming")
        .click({
          force: true,
        });

      cy.assertVisible([productsPage.getProductTitleByName("Streaming")]);
      //
      productsPage.getAddToCartButtonFromUpsellItemsCarousel("P.band").click({
        force: true,
      });

      cy.assertVisible([productsPage.getProductTitleByName("P.band")]);

      //"7 Days of FREE Streaming" item is removed via the trash can icon.
      productsPage
        .getRemoveProductQuantityButtonFromSideCart(1)
        .click({ force: true });

      cy.assertVisible([
        productsPage.getUpsellItemsCarouselByName("Streaming"),
      ]);
      productsPage.getAllUpsellItems().assertElementsLength(3);

      // Remove the item from the cart that was added from the carousel in test C8990 via the trash can icon button.
      productsPage
        .getRemoveProductQuantityButtonFromSideCart(1)
        .click({ force: true });

      cy.assertVisible([
        productsPage.getUpsellItemsCarouselByName("Streaming"),
      ]);
      productsPage.getUpsellSwiperPagination(1).click({ force: true });
      cy.assertVisible([productsPage.getUpsellItemsCarouselByName("P.ball")]);

      //Final item is removed from the mini cart via trash can icon button.
      productsPage
        .getRemoveProductQuantityButtonFromSideCart(0)
        .click({ force: true });

      cy.assertVisible([
        productsPage.getShopMostPopularBundleTitleFromSideCart(),
        productsPage.getSignatureBundleFromSideCart(),
      ]);
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
