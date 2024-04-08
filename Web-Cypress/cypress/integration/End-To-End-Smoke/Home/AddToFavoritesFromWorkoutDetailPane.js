import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import ClassesPanePage from "../../../support/pageobjects/ClassesPanePage";
import HomePage from "../../../support/pageobjects/HomePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags.js";

const homePage = new HomePage();
const appHeader = new AppHeader();
const classesPanePage = new ClassesPanePage();
const classesPage = new ClassesPage();
let workoutId = null;
const timeExpressionRegex = /^\d+\s*(?:Min|Hr)?\s*/i;

const issueId = "@STREAM-2680";
const tmsId = "@C-8065";

describe("Home Test Suite", function () {
  it(
    "Add To Favorites From Workout Detail Pane " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      homePage.visitPage();
      homePage.getFirstClassTitle().click({ force: true });
      classesPanePage.getFavoriteButton().click({ force: true });
      classesPanePage
        .getFavoriteButton()
        .assertTextContains("Remove from favorites");
      classesPanePage.getClosePaneButton().click({ force: true });
      const classNameFromHomePromise = homePage
        .getFirstClassTitle()
        .getTextFromElement();

      // verify fav is added at fav section in home page and opening
      classNameFromHomePromise.then((className) => {
        homePage
          .getFirstFavoriteWorkout()
          .assertTextContains(className.replace(timeExpressionRegex, ""));
      });
      homePage.getFirstFavoriteWorkout().click({ force: true });
      const classNameFromPanePromise = classesPanePage
        .getClassNameHeader()
        .getTextFromElement();

      // verify fav is added when filtering on classes page by favorites
      classesPage.visitPage();
      classesPage.getFiltersButton().click({ force: true });
      classesPage.getFiltersFavoriteToggleButton().click({ force: true });
      classesPage.getFiltersShowClassesButton().click({ force: true });
      classNameFromPanePromise.then((className) => {
        className = className.replace(timeExpressionRegex, "");
        classesPage
          .getWorkoutTitleByName(className)
          .assertTextContains(className);
      });
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());

    cy.loginRechargeUserAndStoreAuthToken();
    cy.assertVisible([
      appHeader.getHomeButton(),
      appHeader.getClassesButton(),
      homePage.getFirstClassTitle(),
    ]);

    cy.intercept("GET", "**/previewVideo").as("previewVideo");
    homePage.getFirstClassTitle().click({ force: true });
    cy.wait("@previewVideo").then((interception) => {
      workoutId = interception.request.url.split("/workout/")[1].split("/")[0];
      if (workoutId) {
        cy.removeFromFavorites(workoutId);
      }
      classesPanePage.getClosePaneButton().click({ force: true });
    });
  });

  this.afterEach(() => {
    if (workoutId) {
      cy.removeFromFavorites(workoutId);
    }
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Mauro Gonzalez");
    return metadataManager;
  }
});
