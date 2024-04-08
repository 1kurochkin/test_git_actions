import OptumSignUpPage from "../../../../support/pageobjects/OptumSignUpPage.js";
import OptumActivatePage from "../../../../support/pageobjects/OptumActivatePage.js";

const optumActivatePage = new OptumActivatePage();
const optumSignUpPage = new OptumSignUpPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Optum SignUp POM Selector Validation Test", function () {
  it("Validates all of the selectors in the OptumSignUp POM", function () {
    if (
      Cypress.env("APP_BASE_URL") === "https://app.qa.pvolve.com" ||
      Cypress.env("APP_BASE_URL") === "https://app.qa2.pvolve.com" ||
      Cypress.env("APP_BASE_URL") === "https://app.dev.pvolve.com"
    ) {
      optumActivatePage.visitPage();
      optumActivatePage
        .getEmailInput()
        .clear()
        .type("pvolvetestautomation+unused@gmail.com");
      optumActivatePage.getConfirmationCodeInput().clear().type("A638638940");
      optumActivatePage.getRedeemNowButton().click();

      const visibleSelectors = [
        optumSignUpPage.getPvolveLogoButton,
        optumSignUpPage.getGreenBannerMessage,
        optumSignUpPage.getFirstNameField,
        optumSignUpPage.getLastNameField,
        optumSignUpPage.getCreatePasswordField,
        optumSignUpPage.getShowPasswordButton,
        optumSignUpPage.getKeepMeUpToDateCheckbox,
        optumSignUpPage.getCreateAccountButton,
        optumSignUpPage.getGoBackButton,
      ];
      cy.assertVisible(visibleSelectors);
    } else {
      cy.log("Cannot test in this environment");
    }
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Optum Sign Up Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        if (
          Cypress.env("APP_BASE_URL") === "https://app.qa.pvolve.com" ||
          Cypress.env("APP_BASE_URL") === "https://app.qa2.pvolve.com" ||
          Cypress.env("APP_BASE_URL") === "https://app.dev.pvolve.com"
        ) {
          cy.viewport(size.width, size.height);

          optumActivatePage.visitPage();
          optumActivatePage
            .getEmailInput()
            .clear()
            .type("pvolvetestautomation+unused@gmail.com");
          optumActivatePage
            .getConfirmationCodeInput()
            .clear()
            .type("A638638940");
          optumActivatePage.getRedeemNowButton().click();

          const visibleSelectors = [
            optumSignUpPage.getPvolveLogoButton,
            optumSignUpPage.getGreenBannerMessage,
            optumSignUpPage.getFirstNameField,
            optumSignUpPage.getLastNameField,
            optumSignUpPage.getCreatePasswordField,
            optumSignUpPage.getShowPasswordButton,
            optumSignUpPage.getKeepMeUpToDateCheckbox,
            optumSignUpPage.getCreateAccountButton,
            optumSignUpPage.getGoBackButton,
          ];
          cy.assertVisible(visibleSelectors);
        } else {
          cy.log("Cannot test in this environment");
        }
      },
    );
  });
});
