import SubscriptionPage from "../../../support/pageobjects/SubscriptionPage.js";
import CancelPage from "../../../support/pageobjects/CancelPage.js";

const subscriptionPage = new SubscriptionPage();
const cancelPage = new CancelPage();

describe("Segment - Cancel Subscription", function () {
  it("Segment - Cancel Subscription", function () {
    //Login
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"App Subscription Cancel Step Viewed"')) {
        req.alias = "cancelStepViewed";
      } else if (
        req.body.includes('"event":"App Subscription Cancellation Submitted"')
      ) {
        req.alias = "cancelSubscription";
      } else if (req.body.includes('"event":"App Subscription Page Viewed"')) {
        req.alias = "subscriptionPageViewed";
      }
    });

    //Navigate to Cancel page
    subscriptionPage.visitSubscriptionPage();
    cy.wait("@subscriptionPageViewed");

    //Reactivate account if inactive
    cy.get('div[class*="bottom aligned two"] div[class*="right aligned"]')
      .eq(0)
      .then(($button) => {
        if ($button.text().includes("Reactivate")) {
          subscriptionPage.getReactivateSubscriptionButton().click();
        }
      });

    subscriptionPage.getBodyCancelSubscriptionButton().click();
    cy.wait("@cancelStepViewed");

    //First page
    cancelPage.getCancelSubscriptionLink().click();
    cy.wait("@cancelStepViewed");

    //Second page
    cancelPage.getCancelAnywayButton().click();
    cy.wait("@cancelSubscription");
    cy.wait("@subscriptionPageViewed");

    //Reactivate
    cy.url({ timeout: 10000 }).should(
      "equal",
      Cypress.env("APP_BASE_URL") + "/account/subscription",
    );
    cy.intercept("GET", "/commerce/v1/payment/get").as("getPayment");
    cy.reload();
    cy.wait("@getPayment", { timeout: 15000 });
    subscriptionPage.getReactivateSubscriptionButton().click();
    subscriptionPage.getBodyCancelSubscriptionButton().should("be.visible");
  });
});
