import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import CollectionsPage from "../../../../support/pageobjects/CollectionsPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import TotalTransformationBundlePage from "../../../../support/pageobjects/TotalTransformationBundleProductPage.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const collectionsPage = new CollectionsPage();
const totalTransformationBundlePage = new TotalTransformationBundlePage();

const issueId = "@ECOMM-2137";
const tmsId = "@C-8571";

describe("Product Description Pages (PDP) Test Suite", function () {
  it(
    "Load Bundle Product PDP " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE, TAGS.CHECK] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      shopifyHeader.getShopButton().trigger("mouseover", { force: true });
      shopifyHeader.getBundles().click();
      cy.assertVisible([collectionsPage.getTitle()]);

      collectionsPage.getTotalTransformationBundle().click();
      cy.validateProductSectionLoads();
      cy.assertVisible([
        totalTransformationBundlePage.getReturnsPolicyInfo(),
        totalTransformationBundlePage.getGroundShippingAndDomesticReturnInfo(),
        totalTransformationBundlePage.getWhatsIncludedContainer(),
        totalTransformationBundlePage.getResultsContainer(),
        totalTransformationBundlePage.getHomeTrialContainer(),
        totalTransformationBundlePage.get3SignaturePiecesSection(),
        totalTransformationBundlePage.get8MoreSculptingSection(),
        totalTransformationBundlePage.get2RecoveryToolsSection(),
        totalTransformationBundlePage.getUltimateStreamingMembershipSection(),
        totalTransformationBundlePage.getExploreClassTypesSection(),
      ]);

      //
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
