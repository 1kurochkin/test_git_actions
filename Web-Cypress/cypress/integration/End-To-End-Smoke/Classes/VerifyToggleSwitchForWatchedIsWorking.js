import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();

const issueId = "@STREAM-2928";
const tmsId = "@C-8075";

describe("Classes Test Suite", function () {
  it(
    "Verify toggle switch for Watched is working " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
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
          classesPage.getFiltersWatchedToggleButton().click({ force: true });
          classesPage
            .getFiltersWatchedToggleButton()
            .assertAttributeContains("class", "Mui-checked");

          classesPage.getFiltersShowClassesButton().click({ force: true });
          cy.assertVisible([
            classesPage.getFiltersClearSelectedFilterButton("Watched"),
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

    cy.loginRechargeUserAndStoreAuthToken();
    cy.assertVisible([appHeader.getHomeButton(), appHeader.getClassesButton()]);
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Mauro Gonzalez");
    return metadataManager;
  }
});
