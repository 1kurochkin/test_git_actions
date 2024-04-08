import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();

const issueId = "@ECOMM-2168";
const tmsId = "@C-8689";

describe("Product Description Pages (PDP) Test Suite", function () {
  it(
    "Add Trial Bundle to Cart from PDP with a bundle in cart " +
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

      cy.addStreamingMembershipSevenDaysFreeToCartWithBundleInCartAndValidateIt(
        "Total Transformation Bundle",
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
    metadataManager.setOwner("Farit Majul");
    return metadataManager;
  }
});
