import AllureMetadataManager from "../../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../../support/utils/tags.js";
import BaseURLPage from "../../../../../support/pageobjects/BaseURLPage.js";

const basePage = new BaseURLPage();

const issueId = "@ECOMM-2203";
const tmsId = "@C-8999";

describe("Activation Code Test Suite", function () {
  it(
    "AMZ - Add digital membership with trial in cart " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();
      basePage.visitPage();

      cy.addDigitalMembershipWithTrialInCart();
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
