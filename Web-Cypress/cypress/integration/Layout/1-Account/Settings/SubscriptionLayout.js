import SubscriptionPage from "../../../../support/pageobjects/SubscriptionPage.js";

const subscriptionPage = new SubscriptionPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button

describe("Subscription POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Subscription POM", function () {
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

    cy.appHeaderSubscribed();

    const visibleSelectors = [
      //Body Side Nav
      subscriptionPage.getBodySideNavAccountLink,
      subscriptionPage.getBodySideNavSettingsLink,
      subscriptionPage.getBodySideNavSubscriptionsLink,
      subscriptionPage.getBodySideNavCommunicationsLink,
      subscriptionPage.getBodySideNavLogoutLink,

      //Body
      subscriptionPage.getBodyTitleText,
      subscriptionPage.getBodyNextPaymentText,
      subscriptionPage.getBodyCancelSubscriptionButton,
      subscriptionPage.getBodyPlanInfoText,
      subscriptionPage.getBodyChangePlanApplyPromoButton,
      subscriptionPage.getBodyUpdatePaymentButton,
      subscriptionPage.getBodyAddBillingAddressButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.get('p[class*="p2"]').then(($el) => {
      if ($el.hasClass("p2 margin--0")) {
        subscriptionPage.getBodyCreditCardInfoText();
      } else {
        subscriptionPage.getNoPaymentMethodAlert();
      }
    });

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Subscription Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.loginSubscribedUser();

        cy.waitForAppPageLoad();

        subscriptionPage.visitSubscriptionPage();

        cy.waitForAppPageLoad();

        cy.scrollTo("top");

        cy.appHeaderSubscribed(exclude);

        subscriptionPage.getResponsiveSubscriptionDropdownIcon().click();

        const visibleSelectors = [
          //Body Side Nav
          subscriptionPage.getResponsiveAccountLink,
          subscriptionPage.getResponsiveSettingsLink,
          subscriptionPage.getResponsiveMembershipLink,
          subscriptionPage.getResponsiveCommunicationsLink,
          subscriptionPage.getResponsiveLogoutLink,

          //Body
          //subscriptionPage.getBodyTitleText, Commented out until QAB-124 is fixed
          subscriptionPage.getBodyNextPaymentText,
          subscriptionPage.getBodyCancelSubscriptionButton,
          subscriptionPage.getBodyPlanInfoText,
          subscriptionPage.getBodyChangePlanApplyPromoButton,
          subscriptionPage.getBodyUpdatePaymentButton,
          subscriptionPage.getBodyAddBillingAddressButton,
        ];
        cy.assertVisible(visibleSelectors);

        cy.get('p[class*="p2"]').then(($el) => {
          if ($el.hasClass("p2 margin--0")) {
            subscriptionPage.getBodyCreditCardInfoText();
          } else {
            subscriptionPage.getNoPaymentMethodAlert();
          }
        });

        cy.responsiveAppFooter();
      },
    );
  });
});
