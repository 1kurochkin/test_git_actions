import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import ClassesPanePage from "../../../support/pageobjects/ClassesPanePage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();
const classesPanePage = new ClassesPanePage();

const issueId = "@STREAM-2929";
const tmsId = "@C-8073";

describe("Classes Test Suite", function () {
  it(
    "Verify Sort by is working " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      this.skip();
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);

      classesPage.visitPage();
      cy.assertVisible([
        classesPage.getResultsByCategory(),
        classesPage.getFirstClassTitle(),
      ]);

      const sortingOptions = [
        {
          name: "Oldest First",
          getButton: () => classesPage.getFiltersDropdownSelectOldestButton(),
        },
        {
          name: "Newest First",
          getButton: () => classesPage.getFiltersDropdownSelectNewestButton(),
        },
        {
          name: "Shortest First",
          getButton: () => classesPage.getFiltersDropdownSelectShortestButton(),
        },
        {
          name: "Longest First",
          getButton: () => classesPage.getFiltersDropdownSelectLongestButton(),
        },
      ];

      sortingOptions.forEach((sortingOption) => {
        classesPage
          .getFirstClassDate()
          .getTextFromElement()
          .then((previousDate) => {
            cy.intercept("POST", "**/workouts/search").as("searchWorkouts");
            executeSortingOption(sortingOption);
            classesPage
              .getSortBySelectedOption()
              .assertTextEquals(sortingOption.name);

            cy.wait("@searchWorkouts").then((interception) => {
              const workout = interception?.response?.body?.hits[0];
              const workoutName = workout?.name;

              classesPage.getFirstClassTitle().assertTextContains(workoutName);
              classesPage.getFirstClassTitle().click({ force: true });

              classesPanePage
                .getClassNameHeader()
                .assertTextContains(workoutName);
              classesPanePage.getClosePaneButton().click();

              classesPage
                .getFirstClassDate()
                .assertTextNotContains(previousDate);
            });
          });
      });
    },
  );

  this.beforeEach(() => {
    cy.setMetadataToAllureReport(createAllureMetadata());
  });

  function createAllureMetadata() {
    const metadataManager = new AllureMetadataManager();
    metadataManager.setDescription(
      "Filtring by Newest and opening first class in pane has an incorrect name in Prod Environment",
    );
    metadataManager.setIssue(issueId);
    metadataManager.setTMS(tmsId);
    metadataManager.setOwner("Mauro Gonzalez");
    return metadataManager;
  }

  function executeSortingOption(sortingOptionWithFunction) {
    classesPage.getSortByButton().click({ force: true });
    sortingOptionWithFunction.getButton().click({ force: true });
  }
});
