import AppHeader from "../../../support/pageobjects/AppHeader";
import ClassesPage from "../../../support/pageobjects/ClassesPage";
import AllureMetadataManager from "../../../support/utils/AllureMetadataManager";
import TAGS from "../../../support/utils/tags";

const appHeader = new AppHeader();
const classesPage = new ClassesPage();

const issueId = "@STREAM-2578";
const tmsId = "@C-8071";

describe("Classes Test Suite", function () {
  it(
    "Verify Categories at the top of the page " + issueId + " " + tmsId,
    { tags: [TAGS.SMOKE] },
    function () {
      cy.loginRechargeUser();
      cy.assertVisible([
        appHeader.getHomeButton(),
        appHeader.getClassesButton(),
      ]);

      classesPage.visitPage();
      cy.assertVisible([classesPage.getAllClassesButton()]);
      classesPage
        .getAllClassesButton()
        .assertAttribute("aria-selected", "true");
      cy.assertVisible([classesPage.getResultsByCategory()]);
      cy.assertVisible([classesPage.getFirstClassTitle()]);

      const categories = [
        [
          () => classesPage.getGetStartedButton(),
          "Get Started",
          "Master the Method fundamentals and perfect your form for the strongest results possible.",
          Cypress.env("APP_BASE_URL") + "/classes/categories/get-started",
        ],
        [
          () => classesPage.getStrengthAndSculptButton(),
          "Strength & Sculpt",
          "Feel the burn in our signature class that focuses on control, resistance and the mind to body connection",
          Cypress.env("APP_BASE_URL") +
            "/classes/categories/strength-and-sculpt",
        ],
        [
          () => classesPage.getProgressiveWeightTrainingButton(),
          "Progressive Weight Training",
          "Build strength with a mix of weight training and dynamic, functional movement",
          Cypress.env("APP_BASE_URL") +
            "/classes/categories/progressive-weight-training",
        ],
        [
          () => classesPage.getCardioBurnButton(),
          "Burn",
          "Bring on the heat with increased reps, quicker tempo and high-energy moves. Your heart will thank you",
          Cypress.env("APP_BASE_URL") + "/classes/categories/cardio-burn",
        ],
        [
          () => classesPage.getMatDefinitionButton(),
          "Mat Definition",
          "It all starts with the core. Take it to the mat for complete core strength, inspired by traditional Mat Pilates",
          Cypress.env("APP_BASE_URL") + "/classes/categories/mat-definition",
        ],
        [
          () => classesPage.getRecoverAndStretchButton(),
          "Recover & Stretch",
          "Connect to the mind and breath using restorative techniques to relax the muscles and unlock max results",
          Cypress.env("APP_BASE_URL") +
            "/classes/categories/recover-and-stretch",
        ],
        [
          () => classesPage.getMovementTherapyButton(),
          "Movement Therapy",
          "Exercises co-created with Physical Therapists to build overall body awareness and rebuild strength and function",
          Cypress.env("APP_BASE_URL") + "/classes/categories/movement-therapy",
        ],
        [
          () => classesPage.getMeditationButton(),
          "Meditation",
          "Reduce stress and connect deeply to the mind and breath with a practice made to complement your entire wellness routine",
          Cypress.env("APP_BASE_URL") + "/classes/categories/meditation",
        ],
      ];

      categories.forEach((category) => {
        Cypress.Promise.all([
          classesPage.getResultsByCategory().getTextFromElement(),
        ])
          .then(([previousResults]) => {
            previousResults =
              classesPage.getResultsNumberByCategory(previousResults);
            const promise = new Cypress.Promise.all([previousResults]);
            category[0]().click({ force: true });
            return promise;
          })
          .then(([previousResults]) => {
            cy.scrollTo("top");
            cy.assertUrl(category[3]);
            category[0]().assertAttribute("aria-selected", "true");
            category[0]().assertTextContains(category[1]);
            classesPage.getCategoryTitle().assertTextContains(category[1]);
            classesPage
              .getCategoryDescription()
              .assertTextContains(category[2]);
            classesPage
              .getResultsByCategory()
              .assertTextNotEquals(previousResults + "");
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
