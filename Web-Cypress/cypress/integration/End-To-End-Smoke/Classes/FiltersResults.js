import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();

const issueId = "@STREAM-2580";
const tmsId = "@C-7692";

describe("Classes Test Suite", function () {
  it(
    "Verify Filters are working correctly (3 filter different categories) " +
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
      filterByClassLengthEquipmentAndBodyFocus(
        "2635Mins",
        "PBall",
        "LowerBody",
      );
      classesPage.getFiltersClearAllFiltersButton().click({ force: true });
      filterByClassLengthEquipmentAndBodyFocus("515Mins", "PBand", "UpperBody");
      classesPage.getFiltersClearAllFiltersButton().click({ force: true });
      filterByClassLengthEquipmentAndBodyFocus(
        "1625Mins",
        "PBand",
        "UpperBody",
      );
      classesPage.getFiltersClearAllFiltersButton().click({ force: true });
      filterByPacingTrainersAndCollections(
        "EbbsFlows",
        "DaniColeman",
        "SculptMobility",
      );
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  function filterByClassLengthEquipmentAndBodyFocus(
    classLengthOption,
    equipmentOption,
    bodyFocusOption,
  ) {
    classesPage.getFiltersButton().click({ force: true });
    classesPage.getFiltersClassLengthAccordionButton().click();
    classesPage
      .getFiltersClassLengthFilterButton(classLengthOption)
      .click({ force: true });
    classesPage.getFiltersEquipmentAccordionButton().click();
    classesPage
      .getFiltersEquipmentFilterButton(equipmentOption)
      .click({ force: true });
    classesPage.getFiltersFocusAccordionButton().click();
    classesPage
      .getFiltersFocusFilterButton(bodyFocusOption)
      .click({ force: true });
    classesPage.getFiltersShowClassesButton().click({ force: true });

    validateAndChangeWorkoutTypes([
      classLengthOption,
      equipmentOption,
      bodyFocusOption,
    ]);
  }

  function filterByPacingTrainersAndCollections(
    pacingOption,
    trainersOption,
    collectionOption,
  ) {
    classesPage.getFiltersButton().click({ force: true });
    classesPage.getFiltersPacingAccordionButton().click();
    classesPage
      .getFiltersPacingFilterButton(pacingOption)
      .click({ force: true });
    classesPage.getFiltersTrainersAccordionButton().click();
    classesPage
      .getFiltersTrainerFilterButton(trainersOption)
      .click({ force: true });
    classesPage.getFiltersCollectionsAccordionButton().click();
    classesPage
      .getFiltersCollectionsFilterButton(collectionOption)
      .click({ force: true });
    classesPage.getFiltersShowClassesButton().click({ force: true });

    validateAndChangeWorkoutTypes(
      [pacingOption, trainersOption, collectionOption],
      false,
    );
  }

  function validateAndChangeWorkoutTypes(options, validateResults = true) {
    options.forEach((option) => {
      cy.assertVisible([
        classesPage.getFiltersClearSelectedFilterButton(option),
      ]);
    });

    if (!validateResults) {
      cy.assertVisible[classesPage.getNotExactMatchesLabel()];
    } else {
      cy.assertVisible([
        classesPage.getFiltersSelectedEquipmentOnlyButton(),
        classesPage.getFiltersAdditionalEquipmentButton(),
      ]);
      classesPage
        .getFirstClassTitle()
        .getTextFromElement()
        .then((previousClassTitle) => {
          classesPage
            .getFiltersAdditionalEquipmentButton()
            .click({ force: true });
          classesPage
            .getFirstClassTitle()
            .should("not.include.text", previousClassTitle);
        });
    }
  }

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Carlos Rodríguez");
    return metadataManager;
  }
});
