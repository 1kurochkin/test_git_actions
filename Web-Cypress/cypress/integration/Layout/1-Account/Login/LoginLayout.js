import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";
import LoginPage from "../../../../support/pageobjects/LoginPage.js";

const continuePage = new ContinuePage();
const loginPage = new LoginPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Login POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Login POM", function () {
    continuePage.visitPage();
    continuePage.getEmailForm().type(Cypress.env("emailSubscribed"));
    continuePage.getSubmitButton().click();

    const visibleSelectors = [
      loginPage.getPvolveLogoButton,
      loginPage.getPasswordForm,
      loginPage.getShowHidePasswordButton,
      loginPage.getSubmitButton,
      loginPage.getForgotPasswordLink,
      loginPage.getGoBackLink,
    ];
    cy.assertVisible(visibleSelectors);

    loginPage.getFirstNameText().contains("Test").should("be.visible");
    loginPage.getPasswordForm().type("definitelywrongpassword");
    loginPage.getSubmitButton().click();
    loginPage.getInvalidPasswordError().should("be.visible");
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Login Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        continuePage.visitPage();
        continuePage.getEmailForm().type(Cypress.env("emailSubscribed"));
        continuePage.getSubmitButton().click();

        const visibleSelectors = [
          loginPage.getPvolveLogoButton,
          loginPage.getPasswordForm,
          loginPage.getShowHidePasswordButton,
          loginPage.getSubmitButton,
          loginPage.getForgotPasswordLink,
          loginPage.getGoBackLink,
        ];
        cy.assertVisible(visibleSelectors);

        loginPage.getFirstNameText().contains("Test").should("be.visible");
        loginPage.getPasswordForm().type("definitelywrongpassword");
        loginPage.getSubmitButton().click();
        loginPage.getInvalidPasswordError().should("be.visible");
      },
    );
  });
});
