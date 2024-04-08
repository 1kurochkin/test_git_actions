import HomePage from "../../../support/pageobjects/HomePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const homePage = new HomePage();

const issueId = "@STREAM-2767";
const tmsId = "@C-8298";

describe("Home Test Suite", function () {
  it(
    "Verify Home page elements (NOT enrolled in a series) " +
      issueId +
      " " +
      tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      const welcomePattern = new RegExp(
        `So good to see you, [a-zA-Z0-9-]+(?:-[a-zA-Z0-9]+)*!$`,
      );

      cy.loginRechargeUser();
      homePage.getTitle().assertTextMatchesPattern(welcomePattern);
      cy.assertVisible([
        homePage.getOnDemandStatsLabel(),
        homePage.getLvsStatsLabel(),
        homePage.getHoursStatsLabel(),
        homePage.getWeeklyCalendarContainer(),
        homePage.getFirstClassTitle(),
        ...Array.from(homePage.getStartSeriesButtons()),
        homePage.getNoFavoritesFromFavoriteSection(),
        homePage.getManageWorkoutsButton(),
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
