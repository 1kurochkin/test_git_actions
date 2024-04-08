import SubscriptionPage from "../../../../support/pageobjects/SubscriptionPage.js";
import CancelPage from "../../../../support/pageobjects/CancelPage.js";

const subscriptionPage = new SubscriptionPage();
const cancelPage = new CancelPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Cancel POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Cancel POM", function () {
    //Login and navigate to Subscription page
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    subscriptionPage.visitSubscriptionPage();
    cy.waitForAppPageLoad();

    //Reactivate account if canceled
    cy.get('div[class*="bottom aligned two"] div[class*="right aligned"]')
      .eq(0)
      .then(($button) => {
        if ($button.text().includes("Reactivate")) {
          subscriptionPage.getReactivateSubscriptionButton().click();
        }
      });

    subscriptionPage.getBodyCancelSubscriptionButton().click();

    const visibleFirstPageSelectors = [
      cancelPage.getContactButton,
      cancelPage.getScheduleTrainerButton,
      cancelPage.getCancelSubscriptionLink,
    ];
    cy.assertVisible(visibleFirstPageSelectors);

    cancelPage.getCancelSubscriptionLink().click();

    const visibleSecondPageSelectors = [
      cancelPage.getCancelAnywayButton,
      cancelPage.getNevermindLink,
    ];
    cy.assertVisible(visibleSecondPageSelectors);
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Cancel Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        //Login and navigate to Subscription page
        cy.loginSubscribedUser();
        cy.waitForAppPageLoad();

        cancelPage.visitPage();

        const visibleFirstPageSelectors = [
          cancelPage.getContactButton,
          cancelPage.getScheduleTrainerButton,
          cancelPage.getCancelSubscriptionLink,
        ];
        cy.assertVisible(visibleFirstPageSelectors);

        cancelPage.getCancelSubscriptionLink().click();

        const visibleSecondPageSelectors = [
          cancelPage.getCancelAnywayButton,
          cancelPage.getNevermindLink,
        ];
        cy.assertVisible(visibleSecondPageSelectors);
      },
    );
  });
});
