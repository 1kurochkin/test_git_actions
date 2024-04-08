import BaseURLPage from "../../../../support/pageobjects/BaseURLPage.js";
import CollectionsPage from "../../../../support/pageobjects/CollectionsPage.js";
import ShopifyFooter from "../../../../support/pageobjects/ShopifyFooter.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import AllureMetadataManager from "../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../support/utils/tags.js";

const basePage = new BaseURLPage();
const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();
const collectionsPage = new CollectionsPage();

const itemsToCheck = 3;

const issueId = "@ECOMM-2171";
const tmsId = "@C-8247";

describe("Shopping Test Suite", function () {
  it(
    "View A La Carte Product Page " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.assertVisible([
        shopifyHeader.getHeader(),
        basePage.getMainContent(),
        shopifyFooter.getFooter(),
      ]);

      shopifyHeader.getShopButton().trigger("mouseover", { force: true });
      shopifyHeader.getEquipment().click({ force: true });

      const productNames = [];
      collectionsPage
        .getAllItems()
        .each(($item) => {
          cy.wrap($item)
            .getTextFromElement()
            .then((productName) => {
              productNames.push(productName);
            });
        })
        .then(() => {
          productNames
            .filter(
              (productName) => !productName.toLowerCase().includes("bundle"),
            )
            .splice(0, itemsToCheck)
            .forEach((productName) => {
              cy.openALaCartProduct(productName);
            });
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
