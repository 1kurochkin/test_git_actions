import SubscriptionPage from "../../../../support/pageobjects/SubscriptionPage.js";
import SubscriptionUpdatePage from "../../../../support/pageobjects/SubscriptionUpdatePage.js";

const subscriptionPage = new SubscriptionPage();
const subscriptionUpdatePage = new SubscriptionUpdatePage();

describe("Subscribed User - Change Subscription Plan", function () {
  it("Subscribed User - Change Subscription Plan", function () {
    //User logs in and navigates to the Subscription page
    cy.loginSubscribedUser();
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
    subscriptionUpdatePage.get12MonthRadio().click();
    subscriptionUpdatePage.getSavePlanButton().click();

    //Confirmation Pop-up
    cy.get('div[class*="upgrade-plan-module--modal-inner"]').contains(
      "You are updating to a 12 months subscription for $95.88.",
      { matchCase: false },
    );
    cy.intercept("POST", "**/subscriptions/v1/subs/update").as("getUpdate");
    subscriptionUpdatePage.getPopupYesIAgreeButton().click({ force: true });
    cy.wait("@getUpdate");

    subscriptionPage.getBodyChangePlanApplyPromoButton().should("be.visible");
    cy.get('div[class*="twelve wide column"]').contains(
      "Plan successfully updated.",
      { matchCase: false },
    );

    //User changes plan back to 1 month
    subscriptionPage.getBodyChangePlanApplyPromoButton().click();
    subscriptionUpdatePage.get1MonthRadio().click();

    subscriptionUpdatePage.getSavePlanButton().then(($saveButton) => {
      if ($saveButton.attr("disabled")) {
        subscriptionUpdatePage.get6MonthRadio().click();
      }
    });

    subscriptionUpdatePage.getSavePlanButton().click();

    cy.intercept("POST", "**/subscriptions/v1/subs/update").as("getUpdate");
    subscriptionUpdatePage.getPopupYesIAgreeButton().click({ force: true });
    cy.wait("@getUpdate");
    subscriptionPage.getBodyChangePlanApplyPromoButton().should("be.visible");
  });
});
