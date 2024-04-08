import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";
import SignUpPage from "../../../../support/pageobjects/SignUpPage.js";

const continuePage = new ContinuePage();
const signUpPage = new SignUpPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("SignUp POM Selector Validation Test", function () {
  it("Validates all of the selectors in the /signup POM", function () {
    cy.visit(Cypress.env("APP_BASE_URL") + "/continue");
    continuePage.getEmailForm().type("pvolvetestautomation+unused@gmail.com");
    continuePage.getSubmitButton().click();

    const visibleSelectors = [
      signUpPage.getPvolveLogoButton,
      signUpPage.getFirstNameField,
      signUpPage.getLastNameField,
      signUpPage.getCreatePasswordField,
      signUpPage.getShowPasswordButton,
      signUpPage.getKeepMeUpToDateCheckbox,
      signUpPage.getCreateAccountButton,
      signUpPage.getGoBackButton,
    ];
    cy.assertVisible(visibleSelectors);
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Sign Up Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        cy.visit(Cypress.env("APP_BASE_URL") + "/continue");
        continuePage
          .getEmailForm()
          .type("pvolvetestautomation+unused@gmail.com");
        continuePage.getSubmitButton().click();

        const visibleSelectors = [
          signUpPage.getPvolveLogoButton,
          signUpPage.getFirstNameField,
          signUpPage.getLastNameField,
          signUpPage.getCreatePasswordField,
          signUpPage.getShowPasswordButton,
          signUpPage.getKeepMeUpToDateCheckbox,
          signUpPage.getCreateAccountButton,
          signUpPage.getGoBackButton,
        ];
        cy.assertVisible(visibleSelectors);
      },
    );
  });
});
