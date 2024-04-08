import ClassesPanePage from "../../../support/pageobjects/ClassesPanePage";
import HomePage from "../../../support/pageobjects/HomePage";
import VideoPage from "../../../support/pageobjects/VideoPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const homePage = new HomePage();
const classesPanePage = new ClassesPanePage();
const videoPage = new VideoPage();
let seriesId;
let workoutsCount;
const secondsToPlayVideo = 5;

let initialWorkoutsCompleted;
let initialMinutesCompleted;

const issueId = "@STREAM-2924";
const tmsId = "@C-7689";

describe("Home Test Suite", function () {
  it(
    "Verify series is updated when a workout is completed " +
      issueId +
      " " +
      tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      homePage.visitPage();
      cy.assertVisible([homePage.getFirstSeriesName()]);

      cy.intercept("GET", "**/previewVideo").as("previewVideo");
      homePage.getFirstWorkoutTitleFromSeries().click({ force: true });

      cy.wait("@previewVideo").then((interception) => {
        const workoutId = interception.request.url
          .split("/workout/")[1]
          .split("/")[0];

        classesPanePage
          .getClassDurationTime()
          .getTextFromElement()
          .then((text) => {
            // Calculating % to be completed in seconds
            const videoDuration = parseInt(
              text.match(/\d+(\.\d+)?/)[0] * 60 * 0.95,
            );
            cy.completeWorkoutSession({ id: workoutId, videoDuration }).then(
              () => {
                const completedWorkoutsLabel =
                  "1 of " + workoutsCount + " completed";

                classesPanePage.getPlayVideoButton().click({ force: true });
                cy.assertVisible([videoPage.getPauseButton()]);
                cy.assertVideoReachedSeconds(
                  videoPage.getVideo(),
                  secondsToPlayVideo,
                );
                videoPage.getPauseButton().click({ force: true });
                videoPage.getCloseButton().click();
                homePage.visitPage();
                cy.getWorkoutsStats((body) => validateStats(body));
                homePage
                  .getFirstSeriesWorkoutsCompleted()
                  .assertTextContains(completedWorkoutsLabel);

                // check course has the circle due to completion
                cy.assertVisible([
                  homePage.getFirstWorkoutCircleButtonFromSeries(),
                ]);
              },
            );
          });
      });
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());

    cy.loginRechargeUserSeveralWorkoutsCompletedAndStoreAuthToken();
    storeSeries().then(() => {
      if (seriesId) {
        cy.enrollToSeries(seriesId);
        cy.log("Enrolled to " + seriesId);
      }
      storeStats();
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

  function storeStats() {
    cy.getWorkoutsStats().then((response) => {
      const stats = response?.body?.data?.stats;

      initialWorkoutsCompleted = stats.total_completed;
      initialMinutesCompleted = stats.total_minutes;
    });
  }

  function storeSeries() {
    return cy.getAllSeries().then((response) => {
      const allSeries = response?.body?.items;
      if (allSeries && allSeries.length > 0) {
        const randomIndex = Math.floor(Math.random() * allSeries.length);
        const series = allSeries[randomIndex];
        seriesId = series.id;
        workoutsCount = series.workoutsCount;
      }
    });
  }

  function validateStats(body) {
    const stats = body?.data?.stats;
    expect(stats.total_completed).to.eq(initialWorkoutsCompleted + 1);
    expect(stats.total_minutes).to.be.at.least(initialMinutesCompleted + 1);
  }
});
