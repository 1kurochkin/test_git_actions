import AppHeader from "../../../support/pageobjects/AppHeader";
import SeriesDetailsPage from "../../../support/pageobjects/SeriesDetailsPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const appHeader = new AppHeader();
const seriesDetailPage = new SeriesDetailsPage();

const seriesId = "4Nl2KDlt5IM2apEpFAibUo";
const seriesUrl = "phase-and-function-PHF0921";
const seriesName = "PHASE & FUNCTION";

const issueId = "@STREAM-2773";
const tmsId = "@C-8299";

describe("Series Test Suite", function () {
  it(
    "Series page elements (enrolled) " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      seriesDetailPage.visitSeriesDetailsPage(seriesUrl);
      cy.assertVisible([seriesDetailPage.getTitle()]);
      seriesDetailPage.getTitle().assertTextContains(seriesName);
      seriesDetailPage.getBodyJoinThisSeriesButton().click({ force: true });

      cy.assertVisible([
        seriesDetailPage.getDescription(),
        seriesDetailPage.getBodyLeaveThisSeriesButton(),
        seriesDetailPage.getNextWorkoutSection(),
        seriesDetailPage.getOverallProgressSection(),
        seriesDetailPage.getSuggestedScheduleTitle(),
        seriesDetailPage.getRelatedContentTitle(),
        seriesDetailPage.getTalksContainer(),
      ]);
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());

    cy.loginRechargeUserAndStoreAuthToken();
    cy.assertVisible([appHeader.getHomeButton(), appHeader.getClassesButton()]);
    if (seriesId) {
      cy.leaveFromSeries(seriesId);
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
