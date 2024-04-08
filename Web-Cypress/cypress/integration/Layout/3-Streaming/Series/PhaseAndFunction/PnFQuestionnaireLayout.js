import SeriesDetailsPage from "../../../../../support/pageobjects/SeriesDetailsPage.js";
import PhaseAndFunctionPage from "../../../../../support/pageobjects/PhaseFunctionsPage.js";
import PnFQuestionnairePage from "../../../../../support/pageobjects/PnFQuestionnairePage.js";

const seriesDetailsPage = new SeriesDetailsPage();
const phaseAndFunctionPage = new PhaseAndFunctionPage();
const pnFQuestionnairePage = new PnFQuestionnairePage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("PnFQuestionnaire POM Selector Validation Test", function () {
  it("Validates all of the selectors in the PnFQuestionnaire POM", function () {
    //Login and navigate to Phase and Function Questionnaire
    cy.loginSubscribedUserPhaseFunction();
    cy.wait(2000);
    seriesDetailsPage.visitSeriesDetailsPage("phase-and-function");
    phaseAndFunctionPage.getJoinThisSeriesButton().click();

    const visibleWelcomeSelectors = [
      pnFQuestionnairePage.getLeftImage,
      pnFQuestionnairePage.getWelcomePageInformationText,
      pnFQuestionnairePage.getCloseButton,
    ];
    cy.assertVisible(visibleWelcomeSelectors);

    pnFQuestionnairePage
      .getWelcomePageLetsGoButton()
      .should("be.visible")
      .click();

    const visibleFirstPageSelectors = [
      pnFQuestionnairePage.getLeftImage,
      pnFQuestionnairePage.getCloseButton,
    ];
    cy.assertVisible(visibleFirstPageSelectors);

    pnFQuestionnairePage.getDaysField().should("be.visible").type("555");
    pnFQuestionnairePage.getFirstPageInvalidText().should("be.visible");
    pnFQuestionnairePage.getDaysField().clear();
    pnFQuestionnairePage.getDaysField().should("be.visible").type("5");
    pnFQuestionnairePage.getNextButton().should("be.visible").click();

    const visibleSecondPageSelectors = [
      pnFQuestionnairePage.getLeftImage,
      pnFQuestionnairePage.getBackButton,
      pnFQuestionnairePage.getCloseButton,
    ];
    cy.assertVisible(visibleSecondPageSelectors);

    pnFQuestionnairePage.getDaysField().should("be.visible").type("555");
    pnFQuestionnairePage.getSecondPageInvalidText().should("be.visible");
    pnFQuestionnairePage.getDaysField().clear();
    pnFQuestionnairePage.getDaysField().should("be.visible").type("22");
    pnFQuestionnairePage.getNextButton().should("be.visible").click();

    const visibleThirdPageSelectors = [
      pnFQuestionnairePage.getLeftImage,
      pnFQuestionnairePage.getBackButton,
      pnFQuestionnairePage.getCloseButton,
    ];
    cy.assertVisible(visibleThirdPageSelectors);

    pnFQuestionnairePage.getCalendarDays().first().click();
    pnFQuestionnairePage.getSubmitButton().should("be.visible").click();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - PnF Questionnaire Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.loginSubscribedUserPhaseFunction();
        cy.wait(2000);
        seriesDetailsPage.visitSeriesDetailsPage("phase-and-function");
        phaseAndFunctionPage.getJoinThisSeriesButton().click();

        const visibleWelcomeSelectors = [
          pnFQuestionnairePage.getWelcomePageInformationText,
          pnFQuestionnairePage.getCloseButton,
        ];
        cy.assertVisible(visibleWelcomeSelectors);

        pnFQuestionnairePage
          .getWelcomePageLetsGoButton()
          .should("be.visible")
          .click();

        const visibleFirstPageSelectors = [pnFQuestionnairePage.getCloseButton];
        cy.assertVisible(visibleFirstPageSelectors);

        pnFQuestionnairePage.getDaysField().should("be.visible").type("555");
        pnFQuestionnairePage.getFirstPageInvalidText().should("be.visible");
        pnFQuestionnairePage.getDaysField().clear();
        pnFQuestionnairePage.getDaysField().should("be.visible").type("5");
        pnFQuestionnairePage.getNextButton().should("be.visible").click();

        const visibleSecondPageSelectors = [
          pnFQuestionnairePage.getBackButton,
          pnFQuestionnairePage.getCloseButton,
        ];
        cy.assertVisible(visibleSecondPageSelectors);

        pnFQuestionnairePage.getDaysField().should("be.visible").type("555");
        pnFQuestionnairePage.getSecondPageInvalidText().should("be.visible");
        pnFQuestionnairePage.getDaysField().clear();
        pnFQuestionnairePage.getDaysField().should("be.visible").type("22");
        pnFQuestionnairePage.getNextButton().should("be.visible").click();

        const visibleThirdPageSelectors = [
          pnFQuestionnairePage.getBackButton,
          pnFQuestionnairePage.getCloseButton,
        ];
        cy.assertVisible(visibleThirdPageSelectors);

        pnFQuestionnairePage.getCalendarDays().first().click();
        pnFQuestionnairePage.getSubmitButton().should("be.visible").click();
      },
    );
  });
});
