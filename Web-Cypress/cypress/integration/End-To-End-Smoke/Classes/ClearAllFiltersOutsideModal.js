import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();

const issueId = "@STREAM-2771";
const tmsId = "@C-8083";

describe("Classes Test Suite", function () {
  it(
    "Clear all filters (part and outside of the Filter modal) " +
      issueId +
      " " +
      tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      const equipmentFilters = ["PBall", "PBand"];

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
        .then((resultsByCategory) => {
          const initialResultsNumber =
            classesPage.getResultsNumberByCategory(resultsByCategory);
          classesPage.getFiltersButton().click({ force: true });
          classesPage.getFiltersEquipmentAccordionButton().click();
          classesPage
            .getFiltersEquipmentFilterButton(equipmentFilters[0])
            .click();
          classesPage
            .getFiltersEquipmentFilterButton(equipmentFilters[1])
            .click();

          classesPage.getFiltersShowClassesButton().click();
          equipmentFilters.forEach((equipmentFilter) => {
            cy.assertVisible([
              classesPage.getFiltersClearSelectedFilterButton(equipmentFilter),
            ]);
          });

          // validates results after applying filters
          classesPage
            .getResultsByCategory()
            .should("not.include.text", initialResultsNumber);
        })
        .then(() => {
          classesPage
            .getFiltersClearSelectedFilterButton(equipmentFilters[0])
            .click({ force: true });

          classesPage
            .getResultsByCategory()
            .getTextFromElement()
            .then((previousResutsWithOneFilter) => {
              const previousResutsWithOneFilterNumber =
                classesPage.getResultsNumberByCategory(
                  previousResutsWithOneFilter,
                );

              // validates results after removing one filter
              classesPage
                .getResultsByCategory()
                .should("not.include.text", previousResutsWithOneFilterNumber);
            });
        });
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
