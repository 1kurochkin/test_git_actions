import AppHeader from "../../../support/pageobjects/AppHeader";
import SeriesDetailsPage from "../../../support/pageobjects/SeriesDetailsPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const appHeader = new AppHeader();
const seriesDetailPage = new SeriesDetailsPage();

const seriesId = "4Nl2KDlt5IM2apEpFAibUo";
const seriesUrl = "phase-and-function-PHF0921";
const seriesName = "PHASE & FUNCTION";

const issueId = "@STREAM-2686";
const tmsId = "@C-7703";

describe("Series Test Suite", function () {
  it(
    "Leave enrolled series " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      seriesDetailPage.visitSeriesDetailsPage(seriesUrl);

      cy.assertVisible([seriesDetailPage.getTitle()]);
      seriesDetailPage.getTitle().assertTextContains(seriesName);

      seriesDetailPage.getBodyLeaveThisSeriesButton().click({ force: true });
      seriesDetailPage.getConfirmLeaveThisSeriesButton().click({ force: true });

      cy.assertVisible([
        seriesDetailPage.getBodyJoinThisSeriesButton(),
        seriesDetailPage.getTrainersSection(),
        seriesDetailPage.getEquipmentUsedSection(),
        seriesDetailPage.getClassTypesSection(),
        seriesDetailPage.getFocusSection(),
      ]);
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());

    cy.loginRechargeUserAndStoreAuthToken();
    cy.assertVisible([appHeader.getHomeButton(), appHeader.getClassesButton()]);
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
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }
});
