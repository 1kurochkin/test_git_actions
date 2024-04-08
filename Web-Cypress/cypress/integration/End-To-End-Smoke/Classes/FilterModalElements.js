import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();

const issueId = "@STREAM-2579";
const tmsId = "@C-8077";

describe("Classes Test Suite", function () {
  it(
    "Verify filter modal - elements " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);

      classesPage.visitPage();
      cy.assertVisible([classesPage.getResultsByCategory()]);

      classesPage.getFiltersButton().click({ force: true });
      cy.assertVisible([
        classesPage.getFiltersClassLengthAccordionButton(),
        classesPage.getFiltersPacingAccordionButton(),
        classesPage.getFiltersTrainersAccordionButton(),
        classesPage.getFiltersEquipmentAccordionButton(),
        classesPage.getFiltersFocusAccordionButton(),
        classesPage.getFiltersFavoriteToggleButton(),
        classesPage.getFiltersWatchedToggleButton(),
        classesPage.getFiltersClearButton(),
        classesPage.getFiltersShowClassesButton(),
      ]);
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
