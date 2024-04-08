import SubscriptionPage from "../../../../support/pageobjects/SubscriptionPage.js";
import PaymentUpdatePage from "../../../../support/pageobjects/PaymentUpdatePage.js";

const subscriptionPage = new SubscriptionPage();
const paymentUpdatePage = new PaymentUpdatePage();

describe("Subscribed User - Update Payment Information", function () {
  it("Subscribed User - Update Payment Information", function () {
    //Login and navigate to Subscription page
    cy.loginSubscribedUserPhaseFunction();
    cy.waitForAppPageLoad();

    subscriptionPage.visitSubscriptionPage();
    cy.waitForAppPageLoad();

    //Run payment update test only on dev, qa, and qa2
    cy.url().then(($url) => {
      if (
        $url.includes("qa.pvolve.com") ||
        $url.includes("qa2.pvolve.com") ||
        $url.includes("dev.pvolve.com")
      ) {
        //Wait for No Payment Method to not exist
        cy.wait(500);
        subscriptionPage.getNoPaymentMethodAlert().should("not.exist");
        cy.wait(500);
        subscriptionPage.getBodyUpdatePaymentButton().should("be.visible");

        //Open payment update page
        subscriptionPage.getBodyUpdatePaymentButton().click();

        //Revert card information to original if not correct
        cy.get('div[class="row"] div[class*="six wide"] p').then(($p) => {
          if ($p.text().includes("2026")) {
            paymentUpdatePage
              .getCurrentCardInformationText()
              .contains("visa ****4242 exp 4/2026", { timeout: 10000 });
          } else {
            paymentUpdatePage.getCardNumberField().type("4242424242424242");
            paymentUpdatePage.getExpirationField().type("0426");
            paymentUpdatePage.getCVCField().type("424");
            paymentUpdatePage.getZipcodeField().type("42424");
            paymentUpdatePage.getSavePaymentButton().click();
            subscriptionPage.getBodyUpdatePaymentButton().click();
            paymentUpdatePage
              .getCurrentCardInformationText()
              .contains("visa ****4242 exp 4/2026", { timeout: 10000 });
          }
        });
        paymentUpdatePage.getSavePaymentDisabledButton().should("be.visible");

        //Type new Credit Card number and save
        paymentUpdatePage.getCardNumberField().type("4242424242424242");
        paymentUpdatePage.getExpirationField().type("1124");
        paymentUpdatePage.getCVCField().type("424");
        paymentUpdatePage.getZipcodeField().type("42424");
        paymentUpdatePage.getSavePaymentButton().click();
        cy.url().should("include", "/account/subscription");
        cy.get("div").contains("Payment successfully updated.");

        //Change Credit Card back to old card
        subscriptionPage.getBodyUpdatePaymentButton().click();
        paymentUpdatePage
          .getCurrentCardInformationText()
          .contains("visa ****4242 exp 11/2024", { timeout: 10000 });
        paymentUpdatePage.getCardNumberField().type("4242424242424242");
        paymentUpdatePage.getExpirationField().type("0426");
        paymentUpdatePage.getCVCField().type("424");
        paymentUpdatePage.getZipcodeField().type("42424");
        cy.intercept("GET", "/commerce/v1/payment/get").as("getV1Payment");
        paymentUpdatePage.getSavePaymentButton().click();
        cy.wait("@getV1Payment");
      }
    });
  });
});
