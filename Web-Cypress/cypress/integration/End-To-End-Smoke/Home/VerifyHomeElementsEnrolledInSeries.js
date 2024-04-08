import HomePage from "../../../support/pageobjects/HomePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const homePage = new HomePage();

const seriesId = "4Nl2KDlt5IM2apEpFAibUo";

const issueId = "@STREAM-2766";
const tmsId = "@C-8055";

describe("Home Test Suite", function () {
  it(
    "Verify Home page elements (Enrolled in a series) " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      const welcomePattern = new RegExp(
        `Welcome back, [a-zA-Z0-9-]+(?:-[a-zA-Z0-9]+)*!$`,
      );

      homePage.visitPage();
      homePage.getTitle().assertTextMatchesPattern(welcomePattern);
      cy.assertVisible([
        homePage.getOnDemandStatsLabel(),
        homePage.getLvsStatsLabel(),
        homePage.getHoursStatsLabel(),
        homePage.getWeeklyCalendarContainer(),
        homePage.getLeaveFromSeriesButton(),
        homePage.getFirstClassTitle(),
        homePage.getNoFavoritesFromFavoriteSection(),
      ]);
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
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }
});
