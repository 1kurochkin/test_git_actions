import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPanePage from "../../../support/pageobjects/ClassesPanePage";
import HomePage from "../../../support/pageobjects/HomePage";
import SeriesDetailsPage from "../../../support/pageobjects/SeriesDetailsPage";
import SeriesPage from "../../../support/pageobjects/SeriesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const appHeader = new AppHeader();
const seriesPage = new SeriesPage();
const seriesDetailPage = new SeriesDetailsPage();
const homePage = new HomePage();
const classesPanePage = new ClassesPanePage();
let seriesId = null;
let workoutId = null;
let seriesNamePromise = null;

const issueId = "@STREAM-2769";
const tmsId = "@C-7685";

describe("Home Test Suite", function () {
  it(
    "Verify enrolled Series is displayed in home page " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.intercept("GET", "/tsapi/workouts/**").as("workouts");
      seriesPage.getBodyFirstCategoryFirstSeriesLink().click({ force: true });
      cy.assertVisible([seriesDetailPage.getTitle()]);
      seriesDetailPage.getBodyJoinThisSeriesButton().click({ force: true });

      cy.wait("@workouts").then((interception) => {
        seriesNamePromise = seriesDetailPage.getTitle().getTextFromElement();
        seriesDetailPage.getFirstWorkoutTitle().click({ force: true });

        cy.url().then((url) => {
          const match = url.match(/\/detail\/([^]+)/);
          const workoutSlug = match ? match[1] : null;
          const workouts = interception.response.body.items;
          const workout = workouts.find((item) => item.slug === workoutSlug);
          workoutId = workout?.id;
          const videoDuration = workout?.video.duration;

          cy.startWorkoutSession(workoutId).then((interception) => {
            const sessionId = interception.body.session_id;
            const workoutsCompleted = "1 of " + workouts.length + " completed";

            cy.endWorkoutSession(workoutId, sessionId, videoDuration);
            homePage.visitPage();

            seriesNamePromise.then((seriesName) => {
              homePage.getFirstSeriesName().assertTextContains(seriesName);
            });
            homePage.getTitle().assertTextContains("Welcome back");
            homePage.getFirstWorkoutTitleFromSeries().click({ force: true });
            cy.assertExist([
              classesPanePage.getTrainersPicture(),
              classesPanePage.getTrainersName(),
            ]);
            classesPanePage.getClosePaneButton().click({ force: true });

            homePage.visitPage();
            homePage.getLastWorkoutTitleFromSeries().scrollIntoView();
            homePage
              .getFirstSeriesWorkoutsCompleted()
              .assertTextContains(workoutsCompleted);
            homePage
              .getFirstWorkoutFavoriteButtonFromSeries()
              .click({ force: true });

            if (workouts && workouts.length > 2) {
              homePage.getWorkoutCardFromSeries(1).assertCss("opacity", "1");
              homePage.getWorkoutCardFromSeries(2).assertCss("opacity", "0.6");
            }
            cy.assertVisible([
              homePage.getFirstWorkoutCircleButtonFromSeries(),
            ]);
          });
        });
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

    cy.wait("@allSeries").then((interception) => {
      seriesId = interception.response.body.series[0].series_id;
      cy.leaveFromSeries(seriesId);
    });
  });

  this.afterEach(() => {
    if (workoutId) {
      cy.removeFromFavorites(workoutId);
    }

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
