import SubscriptionPage from "../../../../support/pageobjects/SubscriptionPage.js";
import SubscriptionUpdatePage from "../../../../support/pageobjects/SubscriptionUpdatePage.js";

const subscriptionPage = new SubscriptionPage();
const subscriptionUpdatePage = new SubscriptionUpdatePage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("SubscriptionUpdate POM Selector Validation Test", function () {
  it("Validates all of the selectors in the /account/subscription/update POM", function () {
    //Login and navigate to Subscription/Update page
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    subscriptionPage.visitSubscriptionPage();
    cy.waitForAppPageLoad();

    subscriptionPage.getBodyChangePlanApplyPromoButton().click();

    const visibleSelectors = [
      subscriptionUpdatePage.get12MonthRadio,
      subscriptionUpdatePage.get12MonthPriceText,
      subscriptionUpdatePage.get1MonthRadio,
      subscriptionUpdatePage.get1MonthPriceText,
      subscriptionUpdatePage.getPromoCodeField,
      subscriptionUpdatePage.getApplyPromoCodeButton,
      subscriptionUpdatePage.getSavePlanButton,
    ];
    cy.assertVisible(visibleSelectors);

    subscriptionUpdatePage.get12MonthRadio().click();
    subscriptionUpdatePage.getSavePlanButton().click();
    subscriptionUpdatePage.getPopupYesIAgreeButton().should("be.visible");
    subscriptionUpdatePage.getPopupNoTakeMeBackButton().should("be.visible");
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Subscription Update Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.loginSubscribedUser();

        cy.waitForAppPageLoad();

        subscriptionUpdatePage.visitPage();

        const visibleSelectors = [
          subscriptionUpdatePage.get12MonthRadio,
          subscriptionUpdatePage.get12MonthPriceText,
          subscriptionUpdatePage.get1MonthRadio,
          subscriptionUpdatePage.get1MonthPriceText,
          subscriptionUpdatePage.getPromoCodeField,
          subscriptionUpdatePage.getApplyPromoCodeButton,
          subscriptionUpdatePage.getSavePlanButton,
        ];
        cy.assertVisible(visibleSelectors);

        subscriptionUpdatePage.get12MonthRadio().click();
        subscriptionUpdatePage.getSavePlanButton().click();
        subscriptionUpdatePage.getPopupYesIAgreeButton().should("be.visible");
        subscriptionUpdatePage
          .getPopupNoTakeMeBackButton()
          .should("be.visible");
      },
    );
  });
});
