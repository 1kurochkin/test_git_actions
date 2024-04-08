import AccountPage from "../../../../support/pageobjects/AccountPage.js";

const accountPage = new AccountPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button

describe("Account POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Account POM", function () {
    //Login and navigate to Account page
    cy.loginSubscribedUser();
    cy.wait(500);
    cy.scrollTo("top");
    accountPage.visitAccountPage();
    accountPage
      .getBodyFirstNameField()
      .should("be.visible", { timeout: 10000 });

    cy.appHeaderSubscribed();

    const visibleSelectors = [
      //Body Side Nav
      accountPage.getBodySideNavAccountLink,
      accountPage.getBodySideNavSettingsLink,
      accountPage.getBodySideNavSubscriptionsLink,
      accountPage.getBodySideNavCommunicationsLink,
      accountPage.getBodySideNavLogoutLink,

      //Body Form
      accountPage.getBodyFirstNameField,
      accountPage.getBodyLastNameField,
      accountPage.getBodyEmailField,
      accountPage.getBodyBirthdayField,
      accountPage.getBodyGenderDropDown,
      accountPage.getBodyPhoneCountrySelector,
      accountPage.getBodyPhoneNumberField,
      accountPage.getBodySaveButton,
      accountPage.getBodyChangePasswordButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Account Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.loginSubscribedUser();

        cy.waitForAppPageLoad();

        accountPage.visitAccountPage();

        cy.appHeaderSubscribed(exclude);

        accountPage.getResponsiveAccountDropdownIcon().click();

        const visibleSelectors = [
          //Body Side Nav
          accountPage.getResponsiveAccountLink,
          accountPage.getResponsiveSettingsLink,
          accountPage.getResponsiveMembershipLink,
          accountPage.getResponsiveCommunicationsLink,
          accountPage.getResponsiveLogoutLink,

          //Body Form
          accountPage.getBodyFirstNameField,
          accountPage.getBodyLastNameField,
          accountPage.getBodyEmailField,
          accountPage.getBodyBirthdayField,
          accountPage.getBodyGenderDropDown,
          accountPage.getBodyPhoneCountrySelector,
          accountPage.getBodyPhoneNumberField,
          accountPage.getBodySaveButton,
          accountPage.getBodyChangePasswordButton,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveAppFooter();
      },
    );
  });
});
