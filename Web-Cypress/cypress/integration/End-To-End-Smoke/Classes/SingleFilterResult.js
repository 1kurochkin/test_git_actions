import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();

const issueId = "@STREAM-2640";
const tmsId = "@C-8078";

describe("Classes Test Suite", function () {
  it(
    "Single valid Filter query " + issueId + " " + tmsId,
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
        .then((resultsByCategory) => {
          const initialResultsNumber =
            classesPage.getResultsNumberByCategory(resultsByCategory);
          classesPage.getFiltersButton().click({ force: true });
          classesPage.getFiltersClassLengthAccordionButton().click();
          classesPage.getFiltersClassLengthFilterButton("515Mins").click();
          classesPage.getFiltersShowClassesButton().click();
          cy.assertVisible([
            classesPage.getFiltersClearSelectedFilterButton("515Mins"),
          ]);
          return new Cypress.Promise.all([initialResultsNumber]);
        })
        .then(([previousResults]) => {
          classesPage
            .getResultsByCategory()
            .should("not.include.text", previousResults);
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
