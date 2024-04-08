import AppHeader from "../../../support/pageobjects/AppHeader";
import HomePage from "../../../support/pageobjects/HomePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const appHeader = new AppHeader();
const homePage = new HomePage();

const minimumWorkoutsNeeded = 1000;
const pageSize = 10;
let totalWorkoutsCompleted = 0;
const workoutsToBeCompleted = [];

let initialWorkoutsCompleted;
let initialMinutesCompleted;

const issueId = "@STREAM-2821";
const tmsId = "@C-7683";

describe("Home Test Suite", function () {
  it(
    "Verify Stats increments - On-Demand " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      if (totalWorkoutsCompleted < minimumWorkoutsNeeded) {
        throw new Error("There are no enough workouts completed!");
      }

      const workoutToBeCompleted = workoutsToBeCompleted[0];

      cy.completeWorkoutSession(workoutToBeCompleted).then(() => {
        watingForBackendToProcessWorkoutCompletion();

        cy.getWorkoutsStats((body) => validateStats(body)).then(() => {
          //Day of week gets checked for completed workout
          cy.assertVisible([homePage.getDayOfWeekWithLatestCompletedWorkout()]);

          //On hover for day of week, you are displayed the workout that was completed
          validateHoveringOnCalendarCurrentDateWorkoutIsCompleted(
            workoutToBeCompleted,
          );

          //Hover on past days of week, you are displayed the workout(s) that were completed
          hoveringOnCalendarWorkoutsAlreadyCompleted();
        });
      });
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());

    cy.intercept("GET", "/stats/v2/workouts").as("workoutStats");
    cy.loginRechargeUserSeveralWorkoutsCompletedAndStoreAuthToken();
    cy.wait("@workoutStats")
      .then((interception) => {
        const workoutsAlreadyCompleted =
          interception.response.body?.data?.stats?.total_completed ?? 0;
        completeWorkouts(workoutsAlreadyCompleted);
        storeStats();
      })
      .then(() => {
        cy.assertVisible([
          appHeader.getHomeButton(),
          appHeader.getClassesButton(),
        ]);
      });
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }

  function completeWorkouts(workoutsAlreadyCompleted) {
    if (!isNaN(workoutsAlreadyCompleted)) {
      // send requests to retrieve remaining workouts
      cy.getWorkouts(0, pageSize)
        .then((response) => {
          response?.body?.hits?.map((item) => {
            const currentWorkout = {
              id: item?.id,
              videoDuration: item?.video?.duration,
              name: item?.name,
            };

            workoutsToBeCompleted.push(currentWorkout);
          });
        })
        .then(() => {
          totalWorkoutsCompleted = workoutsAlreadyCompleted;

          if (totalWorkoutsCompleted < minimumWorkoutsNeeded) {
            /*for (
              let i = totalWorkoutsCompleted;
              i < minimumWorkoutsNeeded;
              i++
            ) {
              const workout =
                workoutsToBeCompleted[i % workoutsToBeCompleted.length];
              totalWorkoutsCompleted++;
              cy.completeWorkoutSession(workout);
            }*/
          }
        });
    }
  }

  function storeStats() {
    cy.getWorkoutsStats().then((response) => {
      const stats = response?.body?.data?.stats;

      initialWorkoutsCompleted = stats.total_completed;
      initialMinutesCompleted = stats.total_minutes;
    });
  }

  function watingForBackendToProcessWorkoutCompletion() {
    cy.wait(5000);
    homePage.visitPage();
  }

  function validateStats(body) {
    const stats = body?.data?.stats;
    expect(stats.total_completed).to.eq(initialWorkoutsCompleted + 1);
    expect(stats.total_minutes).to.be.at.least(initialMinutesCompleted + 1);
  }

  function validateHoveringOnCalendarCurrentDateWorkoutIsCompleted(
    workoutToBeCompleted,
  ) {
    let workoutFoundAfterHovering = false;

    homePage
      .getDayOfWeekWithLatestCompletedWorkout()
      .trigger("mouseover", { force: true });
    homePage
      .getDayOfWeekWithLatestCompletedWorkoutTitle()
      .each(($element) => {
        if ($element.text().includes(workoutToBeCompleted.name)) {
          workoutFoundAfterHovering = true;
          cy.wrap($element).assertTextContains(workoutToBeCompleted.name);
        }
      })
      .then(() => {
        if (!workoutFoundAfterHovering) {
          throw new Error(
            "[" +
              workoutToBeCompleted.name +
              "] Workout is not present after hovering!",
          );
        }
      });
  }

  function hoveringOnCalendarWorkoutsAlreadyCompleted() {
    homePage.getDaysOfWeekWithCompletedWorkout().then((elements) => {
      const daysInCalendar = [...elements];

      if (daysInCalendar && daysInCalendar.length > 0) {
        daysInCalendar.forEach(($dayInCalendar) => {
          cy.wrap($dayInCalendar).trigger("mouseover", { force: true });
        });
      }
    });
  }
});
