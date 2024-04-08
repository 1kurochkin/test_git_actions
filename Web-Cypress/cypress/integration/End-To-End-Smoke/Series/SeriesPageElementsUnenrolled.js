import AppHeader from "../../../support/pageobjects/AppHeader";
import SeriesDetailsPage from "../../../support/pageobjects/SeriesDetailsPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const appHeader = new AppHeader();
const seriesDetailPage = new SeriesDetailsPage();

const seriesUrl = "phase-and-function-PHF0921";
const seriesName = "PHASE & FUNCTION";

const issueId = "@STREAM-2772";
const tmsId = "@C-8122";

describe("Series Test Suite", function () {
  it(
    "Series page elements (unenrolled) " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);

      seriesDetailPage.visitSeriesDetailsPage(seriesUrl);
      cy.assertVisible([seriesDetailPage.getTitle()]);
      seriesDetailPage.getTitle().assertTextContains(seriesName);

      cy.assertVisible([
        seriesDetailPage.getDescription(),
        seriesDetailPage.getBodyJoinThisSeriesButton(),
        seriesDetailPage.getTrainersSection(),
        seriesDetailPage.getEquipmentUsedSection(),
        seriesDetailPage.getClassTypesSection(),
        seriesDetailPage.getFocusSection(),
        seriesDetailPage.getSuggestedScheduleTitle(),
        seriesDetailPage.getRelatedContentTitle(),
        seriesDetailPage.getTalksContainer(),
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
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }
});
