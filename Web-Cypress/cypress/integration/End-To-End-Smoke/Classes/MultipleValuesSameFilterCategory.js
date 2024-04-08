import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();

const issueId = "@STREAM-2641";
const tmsId = "@C-8079";

describe("Classes Test Suite", function () {
  it(
    "Multiple valid Filter query (same filter category) " +
      issueId +
      " " +
      tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);

      classesPage.visitPage();
      cy.assertVisible([classesPage.getResultsByCategory()]);

      //select filter options
      classesPage
        .getResultsByCategory()
        .getTextFromElement()
        .then((initialResults) => {
          const initialResultsNumber =
            classesPage.getResultsNumberByCategory(initialResults);
          filterByOption(
            ["515Mins", "2635Mins"],
            () => classesPage.getFiltersClassLengthAccordionButton(),
            (option) => classesPage.getFiltersClassLengthFilterButton(option),
          );
          clearSearch(initialResultsNumber);
          filterByOption(
            ["SlowSteady", "EbbsFlows"],
            () => classesPage.getFiltersPacingAccordionButton(),
            (option) => classesPage.getFiltersPacingFilterButton(option),
          );
          clearSearch(initialResultsNumber);
          filterByOption(
            ["MaeveMcEwen", "DaniColeman"],
            () => classesPage.getFiltersTrainersAccordionButton(),
            (option) => classesPage.getFiltersTrainerFilterButton(option),
          );
          clearSearch(initialResultsNumber);
          filterByOption(
            ["PBall", "LightWeights"],
            () => classesPage.getFiltersEquipmentAccordionButton(),
            (option) => classesPage.getFiltersEquipmentFilterButton(option),
          );
          clearSearch(initialResultsNumber);
          filterByOption(
            ["FullBody", "UpperBody"],
            () => classesPage.getFiltersFocusAccordionButton(),
            (option) => classesPage.getFiltersFocusFilterButton(option),
          );
          clearSearch(initialResultsNumber);
          filterByOption(
            ["SculptMobility", "BasicTraining"],
            () => classesPage.getFiltersCollectionsAccordionButton(),
            (option) => classesPage.getFiltersCollectionsFilterButton(option),
          );
        });
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  function filterByOption(options, accordion, filterButton) {
    classesPage
      .getResultsByCategory()
      .getTextFromElement()
      .then((currentResultsByCategory) => {
        const currentResultsNumberByCategory =
          classesPage.getResultsNumberByCategory(currentResultsByCategory);
        classesPage.getFiltersButton().click({ force: true });
        accordion().click();

        options.forEach((option) => {
          filterButton(option).click({ force: true });
        });

        classesPage.getFiltersShowClassesButton().click({ force: true });
        validateWorkoutFilters(currentResultsNumberByCategory, options);
      });
  }

  function validateWorkoutFilters(currentResultsNumberByCategory, options) {
    options.forEach((option) => {
      cy.assertVisible([
        classesPage.getFiltersClearSelectedFilterButton(option),
      ]);
    });

    classesPage
      .getResultsByCategory()
      .should("not.include.text", currentResultsNumberByCategory);
  }

  function clearSearch(expectedResultsNumber) {
    classesPage.getFiltersClearAllFiltersButton().click({ force: true });
    classesPage
      .getResultsByCategory()
      .assertTextContains(expectedResultsNumber + "");
  }

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }
});
