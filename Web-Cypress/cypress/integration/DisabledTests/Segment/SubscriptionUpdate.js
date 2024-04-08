import SubscriptionPage from "../../../support/pageobjects/SubscriptionPage.js";
import SubscriptionUpdatePage from "../../../support/pageobjects/SubscriptionUpdatePage.js";

const subscriptionPage = new SubscriptionPage();
const subscriptionUpdatePage = new SubscriptionUpdatePage();

describe("Segment - Update Subscription Plan", function () {
  it("Segment - Update Subscription Plan", function () {
    //User logs in and navigates to the Subscription page
    cy.loginSubscribedUser();
    cy.intercept("POST", " https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"App Subscription Update Page Viewed"')) {
        req.alias = "subscriptionUpdatePageViewed";
      } else if (
        req.body.includes(
          '"event":"App Subscription Update Confirmation Modal Viewed"',
        )
      ) {
        req.alias = "subscriptionUpdateConfirmationModalViewed";
      } else if (
        req.body.includes(
          '"event":"App Subscription Update Confirmation Modal Accepted"',
        )
      ) {
        req.alias = "subscriptionUpdateConfirmationModalAccepted";
      } else if (
        req.body.includes('"event":"App Subscription Plan Update Submitted"')
      ) {
        if (req.body.includes('"sku":"12month_trial0"')) {
          req.alias = "subscriptionUpdateSubmitted";
        } else if (req.body.includes('"sku":"1month_trial0"')) {
          req.alias = "subscriptionUpdateSubmitted";
        }
      } else if (req.body.includes('"event":"App Subscription Page Viewed"')) {
        req.alias = "subscriptionPageViewed";
      }
    });
    cy.wait(2000);

    cy.visit(Cypress.env("APP_BASE_URL") + "/account/subscription", {
      failOnStatusCode: false,
    });

    //Reactivate account if inactive
    cy.get('div[class*="bottom aligned two"] div[class*="right aligned"]')
      .eq(0)
      .then(($button) => {
        if ($button.text().includes("Reactivate")) {
          subscriptionPage.getReactivateSubscriptionButton().click();
        }
      });

    //User changes plan to 12 month
    subscriptionPage.getBodyChangePlanApplyPromoButton().click();
    cy.wait("@subscriptionUpdatePageViewed");

    subscriptionUpdatePage.get12MonthRadio().click();
    subscriptionUpdatePage.getSavePlanButton().click();
    cy.wait("@subscriptionUpdateConfirmationModalViewed");

    cy.intercept("POST", "**/subscriptions/v1/subs/update").as("getUpdate");
    subscriptionUpdatePage.getPopupYesIAgreeButton().click({ force: true });
    cy.wait([
      "@getUpdate",
      "@subscriptionUpdateConfirmationModalAccepted",
      "@subscriptionUpdateSubmitted",
    ]);

    //User changes plan back to 1 month
    subscriptionPage.getBodyChangePlanApplyPromoButton().click();
    subscriptionUpdatePage.get1MonthRadio().click();

    subscriptionUpdatePage.getSavePlanButton().then(($saveButton) => {
      if ($saveButton.attr("disabled")) {
        subscriptionUpdatePage.get12MonthRadio().click();
      }
    });

    subscriptionUpdatePage.getSavePlanButton().click();

    cy.intercept("POST", "**/subscriptions/v1/subs/update").as("getUpdate");
    subscriptionUpdatePage.getPopupYesIAgreeButton().click({ force: true });
    cy.wait("@getUpdate");
    subscriptionPage.getBodyChangePlanApplyPromoButton().should("be.visible");
  });
});
