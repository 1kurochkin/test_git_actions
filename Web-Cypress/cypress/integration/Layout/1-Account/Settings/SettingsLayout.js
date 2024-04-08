import SettingsPage from "../../../../support/pageobjects/SettingsPage.js";

const settingsPage = new SettingsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button

describe("Settings POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Settings POM", function () {
    //Login and navigate to Settings page
    cy.loginSubscribedUser();
    cy.wait(500);
    cy.scrollTo("top");
    settingsPage.visitSettingsPage();
    cy.wait(1000);

    cy.appHeaderSubscribed();

    const visibleSelectors = [
      //Body Side Nav
      settingsPage.getBodySideNavAccountLink,
      settingsPage.getBodySideNavSettingsLink,
      settingsPage.getBodySideNavSubscriptionsLink,
      settingsPage.getBodySideNavCommunicationsLink,
      settingsPage.getBodySideNavLogoutLink,

      //Body FeedFM
      settingsPage.getBodyToggleClosedCaptionsButton,
      settingsPage.getBodyToggleFeedFMButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Settings Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.loginSubscribedUser();

        cy.waitForAppPageLoad();

        settingsPage.visitSettingsPage();

        cy.appHeaderSubscribed(exclude);

        settingsPage.getResponsiveSettingsDropdownIcon().click();

        const visibleSelectors = [
          //Body Side Nav
          settingsPage.getResponsiveAccountLink,
          settingsPage.getResponsiveSettingsLink,
          settingsPage.getResponsiveMembershipLink,
          settingsPage.getResponsiveCommunicationsLink,
          settingsPage.getResponsiveLogoutLink,

          //Body FeedFM
          settingsPage.getBodyToggleClosedCaptionsButton,
          settingsPage.getBodyToggleFeedFMButton,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveAppFooter();
      },
    );
  });
});
