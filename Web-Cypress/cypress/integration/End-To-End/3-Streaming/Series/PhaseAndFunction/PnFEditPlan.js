import MyPlanPage from "../../../../../support/pageobjects/MyPlanPage";
import PhaseFunctionPage from "../../../../../support/pageobjects/PhaseFunctionsPage";
import PnFQuestionnairePage from "../../../../../support/pageobjects/PnFQuestionnairePage";

const myPlanPage = new MyPlanPage();
const pnFQuestionnairePage = new PnFQuestionnairePage();
const phaseFunctionPage = new PhaseFunctionPage();
const dayjs = require("dayjs");

describe("Subscribed User - PnF Edit Plan", function () {
  it("Subscribed User - Changes the plan for a user in the PnF series", function () {
    cy.loginSubscribedUserPhaseFunctionSeries();

    cy.waitForAppPageLoad();

    let phase = "DEFAULT";

    myPlanPage
      .getPnFPhaseHeader()
      .invoke("text")
      .then((phaseText) => {
        phase = phaseText.replace(" phase", "");

        myPlanPage.getPnFEditCycleLink().click();
        if (phase == "menstrual") {
          const desiredDate = dayjs()
            .subtract(15, "days")
            .format("MMMM D, YYYY");

          pnFQuestionnairePage.getDaysField().clear().type("7");
          pnFQuestionnairePage.getNextButton().click();
          cy.wait(1000);
          pnFQuestionnairePage.getDaysField().clear().type("32");
          pnFQuestionnairePage.getNextButton().click();

          pnFQuestionnairePage.getCalendarDays().then(($date) => {
            if (
              $date.find('abbr[aria-label="' + desiredDate + '"]').length > 0
            ) {
              pnFQuestionnairePage
                .getCalendarDays()
                .find('abbr[aria-label="' + desiredDate + '"]')
                .click();
            } else {
              pnFQuestionnairePage.getBackCalendarMonthButton().click();
              pnFQuestionnairePage
                .getCalendarDays()
                .find('abbr[aria-label="' + desiredDate + '"]')
                .click();
            }
          });

          pnFQuestionnairePage.getSubmitButton().click();
          phaseFunctionPage.getGoToMyPlanButton().click();

          cy.waitForAppPageLoad(7000);

          myPlanPage
            .getPnFPhaseHeader()
            .invoke("text")
            .then((phaseText2) => {
              expect(phase).to.not.equal(phaseText2.replace(" phase", ""));
            });
        } else {
          const desiredDate = dayjs()
            .subtract(4, "days")
            .format("MMMM D, YYYY");

          pnFQuestionnairePage.getDaysField().clear().type("5");
          pnFQuestionnairePage.getNextButton().click();
          cy.wait(1000);
          pnFQuestionnairePage.getDaysField().clear().type("25");
          pnFQuestionnairePage.getNextButton().click();

          pnFQuestionnairePage.getCalendarDays().then(($date) => {
            if (
              $date.find('abbr[aria-label="' + desiredDate + '"]').length > 0
            ) {
              pnFQuestionnairePage
                .getCalendarDays()
                .find('abbr[aria-label="' + desiredDate + '"]')
                .click();
            } else {
              pnFQuestionnairePage.getBackCalendarMonthButton().click();
              pnFQuestionnairePage
                .getCalendarDays()
                .find('abbr[aria-label="' + desiredDate + '"]')
                .click();
            }
          });

          pnFQuestionnairePage.getSubmitButton().click();
          phaseFunctionPage.getGoToMyPlanButton().click();

          cy.wait(3000);

          myPlanPage
            .getPnFPhaseHeader()
            .invoke("text")
            .then((phaseText2) => {
              expect(phase).to.not.equal(phaseText2.replace(" phase", ""));
            });
        }
      });
  });
});
