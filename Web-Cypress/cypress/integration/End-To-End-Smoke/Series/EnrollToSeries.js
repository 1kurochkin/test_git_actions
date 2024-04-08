import AppHeader from "../../../support/pageobjects/AppHeader";
import SeriesDetailsPage from "../../../support/pageobjects/SeriesDetailsPage";
import SeriesPage from "../../../support/pageobjects/SeriesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const appHeader = new AppHeader();
const seriesPage = new SeriesPage();
const seriesDetailPage = new SeriesDetailsPage();

let seriesId = null;
let firstSeriesNameFirstCategoryPromise = null;

const issueId = "@STREAM-2685";
const tmsId = "@C-7702";

describe("Series Test Suite", function () {
  it(
    "Enroll to a series " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      firstSeriesNameFirstCategoryPromise
        .then((firstSeriesNameFirstCategory) => {
          seriesPage
            .getBodyFirstCategoryFirstSeriesLink()
            .click({ force: true });
          cy.assertVisible([seriesDetailPage.getTitle()]);
          seriesDetailPage
            .getTitle()
            .assertTextContains(firstSeriesNameFirstCategory);
          seriesDetailPage.getBodyJoinThisSeriesButton().click({ force: true });
        })
        .then(() => {
          cy.assertVisible([
            seriesDetailPage.getBodyLeaveThisSeriesButton(),
            seriesDetailPage.getNextWorkoutSection(),
            seriesDetailPage.getOverallProgressSection(),
          ]);
        });
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());

    cy.loginRechargeUserAndStoreAuthToken();
    cy.assertVisible([appHeader.getHomeButton(), appHeader.getClassesButton()]);

    cy.intercept("GET", "/v2/workouts/series").as("allSeries");
    seriesPage.visitPage();
    cy.assertVisible([seriesPage.getTitle()]);
    firstSeriesNameFirstCategoryPromise = seriesPage
      .getBodyFirstCategoryFirstSeriesLink()
      .getTextFromElement();

    cy.wait("@allSeries").then((interception) => {
      seriesId = interception.response.body.series[0].series_id;
      cy.leaveFromSeries(seriesId);
    });
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
