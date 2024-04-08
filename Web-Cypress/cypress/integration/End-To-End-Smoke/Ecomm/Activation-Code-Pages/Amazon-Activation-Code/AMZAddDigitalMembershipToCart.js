import AllureMetadataManager from "../../../../../support/utils/AllureMetadataManager.js";
import TAGS from "../../../../../support/utils/tags.js";

const issueId = "@ECOMM-2201";
const tmsId = "@C-8880";

describe("Activation Code Test Suite", function () {
  it(
    "AMZ - Add 12 Month Subscription " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.setShopifyCookie();

      cy.add12MonthDigitalMembershipWithAmazonActivationCodeAndValidateIt(
        "12 Month Digital Membership",
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
