import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import CheckoutPage from "../../../../support/pageobjects/CheckoutPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import TotalTransformationBundlePage from "../../../../support/pageobjects/TotalTransformationBundleProductPage.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const totalTransformationBundlePage = new TotalTransformationBundlePage();
const checkoutPage = new CheckoutPage();

const issueId = "@ECOMM-2153";
const tmsId = "@C-8628";

describe("Product Description Pages (PDP) Test Suite", function () {
  it(
    "Add Non-Afterpay Bundle to Cart (w/ Afterpay TTB in Cart) " +
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

      cy.addTotalTranformationBundleToCartWithAfterPayAndValidateItem();
      checkoutPage.getReturnToCartLink().click({ force: true });
      shopifyHeader.getCloseButtonFromMiniCart().click();
      cy.openTotalTransformationBundle();

      totalTransformationBundlePage.getAddToCartButton().then(($button) => {
        if ($button.is(":enabled")) {
          cy.wrap($button).click();
        }
        cy.assertVisible([
          totalTransformationBundlePage.getYouMayNeedCheckoutOneBundleError(),
        ]);
        totalTransformationBundlePage
          .getAddToCartButton()
          .assertIsEnabled(false);
        totalTransformationBundlePage
          .getPayWithAfterPayButton()
          .assertIsEnabled(false);
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
