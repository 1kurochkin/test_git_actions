import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();

let selectedWorkout;

const issueId = "@STREAM-2927";
const tmsId = "@C-8074";

describe("Classes Test Suite", function () {
  it(
    "Verify toggle for Favorites is working " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      classesPage.visitPage();
      cy.assertVisible([classesPage.getResultsByCategory()]);

      classesPage.getFiltersButton().click({ force: true });
      classesPage.getFiltersFavoriteToggleButton().click({ force: true });
      classesPage
        .getFiltersFavoriteToggleButton()
        .assertAttributeContains("class", "Mui-checked");

      classesPage.getFiltersShowClassesButton().click({ force: true });

      cy.assertVisible([
        classesPage.getFiltersClearSelectedFilterButton("Favorited"),
      ]);
      classesPage.getResultsByCategory().assertTextEquals("1 results");
      classesPage.getFirstClassTitle().assertTextContains(selectedWorkout.name);
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());

    cy.loginRechargeUserAndStoreAuthToken();
    cy.assertVisible([appHeader.getHomeButton(), appHeader.getClassesButton()]);
    addWorkoutToFavorites();
  });

  this.afterEach(() => {
    if (selectedWorkout.id) {
      cy.removeFromFavorites(selectedWorkout.id);
    }
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }

  function addWorkoutToFavorites() {
    cy.getWorkouts(0, 100).then((response) => {
      const workouts = response?.body?.hits;
      const randomIndex = Math.floor(Math.random() * workouts.length);
      const workout = workouts[randomIndex];
      selectedWorkout = { id: workout?.id, name: workout?.name };
      cy.log(selectedWorkout.name, selectedWorkout.id);
      cy.addToFavorites(selectedWorkout.id);
    });
  }
});
