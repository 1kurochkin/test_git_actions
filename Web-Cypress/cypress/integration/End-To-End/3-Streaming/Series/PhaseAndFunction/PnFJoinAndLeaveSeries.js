import PhaseFunctionPage from "../../../../../support/pageobjects/PhaseFunctionsPage.js";
import PnFQuestionnairePage from "../../../../../support/pageobjects/PnFQuestionnairePage.js";

const phaseFunctionPage = new PhaseFunctionPage();
const pnFQuestionnairePage = new PnFQuestionnairePage();

describe("P&F Series Detail Page - Layout", function () {
  it("P&F Series Detail Page - Layout", function () {
    cy.loginSubscribedUserPhaseFunction();

    cy.waitForAppPageLoad();

    phaseFunctionPage.visitPnFSeriesDetailPage();

    cy.waitForAppPageLoad();

    //If test starts with this series joined, then this will leave the series
    cy.get('button[class*="ui"]').then(($body) => {
      if ($body.text().includes("LEAVE THIS SERIES")) {
        phaseFunctionPage.getLeaveThisSeriesButton().click();
        cy.intercept("GET", "/workouts/v1/series").as("getJoinSeriesButton");
        cy.wait("@getJoinSeriesButton");
      }
    });
    phaseFunctionPage.getPreviewPlayButton().should("be.visible");

    phaseFunctionPage.getJoinThisSeriesButton().should("be.visible");

    phaseFunctionPage.getPreviewPlayButton().click();
    cy.wait(2000);

    phaseFunctionPage.getPreviewVideo().should("be.visible");

    phaseFunctionPage.getPreviewVideoCloseButton().should("be.visible").click();

    cy.url().should(
      "includes",
      Cypress.env("APP_BASE_URL") + "/series/phase-and-function",
    );

    phaseFunctionPage.getJoinThisSeriesButton().click();
    cy.wait(2000);

    pnFQuestionnairePage.getLeftImage().should("be.visible");
    pnFQuestionnairePage.getWelcomePageInformationText().should("be.visible");
    pnFQuestionnairePage
      .getWelcomePageLetsGoButton()
      .should("be.visible")
      .click();
    pnFQuestionnairePage.getDaysField().type("5");
    pnFQuestionnairePage.getNextButton().click();
    cy.wait(1000);
    pnFQuestionnairePage.getDaysField().type("28");
    pnFQuestionnairePage.getNextButton().click();
    pnFQuestionnairePage.getCalendarDays().first().click();
    pnFQuestionnairePage.getSubmitButton().click();
    phaseFunctionPage.getGoToMyPlanButton().click();

    cy.waitForAppPageLoad();

    cy.intercept("GET", "/workouts/v1/series").as("getJoinSeriesButton");
    phaseFunctionPage.visitPnFSeriesDetailPage();
    cy.wait("@getJoinSeriesButton", { timeout: 15000 });

    phaseFunctionPage.getLeaveThisSeriesButton().click();
    cy.wait("@getJoinSeriesButton", { timeout: 15000 });
    phaseFunctionPage.getJoinThisSeriesButton().should("be.visible");
  });
});
