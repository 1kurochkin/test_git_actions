import HomePage from "../../../support/pageobjects/HomePage";
import TAGS from "../../../support/utils/tags.js";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";

const homePage = new HomePage();

const seriesId = "4Nl2KDlt5IM2apEpFAibUo";

const issueId = "@STREAM-2926";
const tmsId = "@C-8070";

describe("Home Test Suite", function () {
  it(
    "Verify User is able to leave series from home page " +
      issueId +
      " " +
      tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      homePage.visitPage();
      homePage.getLeaveFromSeriesButton().click({ force: true });
      homePage.getConfirmLeaveFromSeriesButton().click({ force: true });
      cy.assertNotExist([homePage.getFirstSeriesName]);
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
    cy.loginRechargeUserAndStoreAuthToken();

    if (seriesId) {
      cy.enrollToSeries(seriesId);
    }
  });

  this.afterEach(() => {
    if (seriesId) {
      cy.leaveFromSeries(seriesId);
    }
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Ivan Kurochkin");
    return metadataManager;
  }
});
