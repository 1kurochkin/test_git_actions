import AccountPage from "../../../../support/pageobjects/AccountPage.js";
import PasswordPage from "../../../../support/pageobjects/PasswordPage.js";

const accountPage = new AccountPage();
const passwordPage = new PasswordPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Password POM Selector Validation Test", function () {
  it("Validates all of the selectors in the /account/password POM", function () {
    //Login and navigate to Password page
    cy.loginUnsubscribedUser();
    cy.waitForShopifyPageLoad();

    accountPage.visitAccountPage();
    accountPage.getBodyChangePasswordButton().click();

    const visibleSelectors = [
      passwordPage.getCurrentPasswordField,
      passwordPage.getViewCurrentPasswordButton,
      passwordPage.getNewPasswordField,
      passwordPage.getViewNewPasswordButton,
      passwordPage.getSavePasswordButton,
    ];
    cy.assertVisible(visibleSelectors);
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Password Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.loginUnsubscribedUser();

        cy.waitForShopifyPageLoad();

        passwordPage.visitPage();

        const visibleSelectors = [
          passwordPage.getCurrentPasswordField,
          passwordPage.getViewCurrentPasswordButton,
          passwordPage.getNewPasswordField,
          passwordPage.getViewNewPasswordButton,
          passwordPage.getSavePasswordButton,
        ];
        cy.assertVisible(visibleSelectors);
      },
    );
  });
});
