import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();

const issueId = "@STREAM-2770";
const tmsId = "@C-8072";

describe("Classes Test Suite", function () {
  it(
    "Verify Search Bar is working (valid search) " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      const validSearches = [
        "Arm",
        "Legs",
        "Meditation",
        "Butt",
        "Pelvic Floor",
      ];

      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);

      classesPage.visitPage();
      cy.assertVisible([classesPage.getResultsByCategory()]);

      validSearches.forEach((validSearch) => {
        classesPage
          .getResultsByCategory()
          .getTextFromElement()
          .then((resultsByCategory) => {
            const currentResultNumber =
              classesPage.getResultsNumberByCategory(resultsByCategory);
            classesPage
              .getSearchTextInput()
              .clear({ force: true })
              .type(validSearch + " {enter}", { force: true });

            classesPage
              .getResultsByCategory()
              .should("not.include.text", currentResultNumber);
            classesPage.getResultsByCategory().assertTextContains(validSearch);
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
