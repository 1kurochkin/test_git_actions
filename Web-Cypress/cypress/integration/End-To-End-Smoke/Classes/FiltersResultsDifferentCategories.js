import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();

const issueId = "@STREAM-2642";
const tmsId = "@C-8080";

describe("Classes Test Suite", function () {
  it(
    "Multiple valid Filter query (different filter categories) " +
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
      filterByClassLengthAndPacing("2635Mins", "EbbsFlows");
      classesPage.getFiltersClearAllFiltersButton().click({ force: true });
      filterByTrainersAndEquipment("DaniColeman", "PBand");
      classesPage.getFiltersClearAllFiltersButton().click({ force: true });
      filterByBodyFocusAndCollections("UpperBody", "SculptMobility");
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  function filterByClassLengthAndPacing(classLengthOption, pacingOption) {
    Cypress.Promise.all([
      classesPage.getResultsByCategory().getTextFromElement(),
    ]).then(([initialResultsByCategory]) => {
      const initialResultsNumberByCategory =
        classesPage.getResultsNumberByCategory(initialResultsByCategory);
      classesPage.getFiltersButton().click({ force: true });
      classesPage.getFiltersClassLengthAccordionButton().click();
      classesPage
        .getFiltersClassLengthFilterButton(classLengthOption)
        .click({ force: true });
      classesPage.getFiltersPacingAccordionButton().click();
      classesPage
        .getFiltersPacingFilterButton(pacingOption)
        .click({ force: true });
      classesPage.getFiltersShowClassesButton().click({ force: true });
      validateAndChangeWorkoutTypes(initialResultsNumberByCategory, [
        (classLengthOption, pacingOption),
      ]);
    });
  }

  function filterByTrainersAndEquipment(trainersOption, equipmentOption) {
    Cypress.Promise.all([
      classesPage.getResultsByCategory().getTextFromElement(),
    ]).then(([initialResultsByCategory]) => {
      const initialResultsNumberByCategory =
        classesPage.getResultsNumberByCategory(initialResultsByCategory);
      classesPage.getFiltersButton().click({ force: true });
      classesPage.getFiltersTrainersAccordionButton().click();
      classesPage
        .getFiltersTrainerFilterButton(trainersOption)
        .click({ force: true });
      classesPage.getFiltersEquipmentAccordionButton().click();
      classesPage
        .getFiltersEquipmentFilterButton(equipmentOption)
        .click({ force: true });
      classesPage.getFiltersShowClassesButton().click({ force: true });
      validateAndChangeWorkoutTypes(initialResultsNumberByCategory, [
        (trainersOption, equipmentOption),
      ]);
    });
  }

  function filterByBodyFocusAndCollections(trainersOption, equipmentOption) {
    Cypress.Promise.all([
      classesPage.getResultsByCategory().getTextFromElement(),
    ]).then(([initialResultsByCategory]) => {
      const initialResultsNumberByCategory =
        classesPage.getResultsNumberByCategory(initialResultsByCategory);
      classesPage.getFiltersButton().click({ force: true });
      classesPage.getFiltersFocusAccordionButton().click();
      classesPage
        .getFiltersFocusFilterButton(trainersOption)
        .click({ force: true });
      classesPage.getFiltersCollectionsAccordionButton().click();
      classesPage
        .getFiltersCollectionsFilterButton(equipmentOption)
        .click({ force: true });
      classesPage.getFiltersShowClassesButton().click({ force: true });
      validateAndChangeWorkoutTypes(initialResultsNumberByCategory, [
        (trainersOption, equipmentOption),
      ]);
    });
  }

  function validateAndChangeWorkoutTypes(
    initialResultsNumberByCategory,
    options,
  ) {
    options.forEach((option) => {
      cy.assertVisible([
        classesPage.getFiltersClearSelectedFilterButton(option),
      ]);
    });

    classesPage
      .getResultsByCategory()
      .should("not.include.text", initialResultsNumberByCategory);
  }

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }
});
