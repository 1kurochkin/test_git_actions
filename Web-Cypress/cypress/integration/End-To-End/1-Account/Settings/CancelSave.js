import SubscriptionPage from "../../../../support/pageobjects/SubscriptionPage.js";
import CancelPage from "../../../../support/pageobjects/CancelPage.js";

const subscriptionPage = new SubscriptionPage();
const cancelPage = new CancelPage();

describe("Subscribed User - Cancel Save", function () {
  it("Subscribed User - Cancel Save", function () {
    //Login
    cy.loginSubscribedUser();

    cy.waitForAppPageLoad();

    //Navigate to Cancel page
    subscriptionPage.visitSubscriptionPage();

    //Reactivate account if inactive
    cy.get('div[class*="bottom aligned two"] div[class*="right aligned"]')
      .eq(0)
      .then(($button) => {
        if ($button.text().includes("Reactivate")) {
          subscriptionPage.getReactivateSubscriptionButton().click();
        }
      });

    subscriptionPage.getBodyCancelSubscriptionButton().click();

    //First page
    cancelPage.getContactButton().should("be.visible");
    cancelPage.getScheduleTrainerButton().should("be.visible");
    cancelPage.getCancelSubscriptionLink().click();

    //Second page
    cancelPage.getCancelAnywayButton().should("be.visible");
    cancelPage.getNevermindLink().should("be.visible");
    cancelPage.getNevermindLink().click();

    cy.url().should("include", "/my-plan");

    //User cancels subscription and reactivates
    subscriptionPage.visitSubscriptionPage();
    subscriptionPage.getBodyCancelSubscriptionButton().click();

    //First page
    cancelPage.getContactButton().should("be.visible");
    cancelPage.getScheduleTrainerButton().should("be.visible");
    cancelPage.getCancelSubscriptionLink().click();

    //Second page
    cancelPage.getCancelAnywayButton().should("be.visible");
    cancelPage.getNevermindLink().should("be.visible");
    cancelPage.getCancelAnywayButton().click();

    //Reactivate
    cy.url({ timeout: 10000 }).should(
      "equal",
      Cypress.env("APP_BASE_URL") + "/account/subscription",
    );
    cy.intercept("GET", "/commerce/v1/payment/get").as("getPayment");
    cy.reload();
    cy.scrollTo("top");
    cy.wait("@getPayment", { timeout: 15000 });
    subscriptionPage.getReactivateSubscriptionButton().click();
    subscriptionPage.getBodyCancelSubscriptionButton().should("be.visible");
  });
});
