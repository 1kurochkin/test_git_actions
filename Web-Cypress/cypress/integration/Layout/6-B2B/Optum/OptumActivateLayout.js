import OptumActivatePage from "../../../../support/pageobjects/OptumActivatePage.js";

const optumActivatePage = new OptumActivatePage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Optum Activate Page Selector Validation test", function () {
  it("Validates all of the selectors on the Optum Activate page", function () {
    if (
      Cypress.env("APP_BASE_URL") === "https://app.qa.pvolve.com" ||
      Cypress.env("APP_BASE_URL") === "https://app.qa2.pvolve.com" ||
      Cypress.env("APP_BASE_URL") === "https://app.dev.pvolve.com"
    ) {
      optumActivatePage.visitPage();

      const visibleSelectors = [
        optumActivatePage.getEmailInput,
        optumActivatePage.getConfirmationCodeInput,
        optumActivatePage.getRedeemNowButton,
        optumActivatePage.getLogInLink,
        optumActivatePage.getTermsOfServiceLink,
        optumActivatePage.getPvolveLogo,
        optumActivatePage.getRenewActiveImage,
        optumActivatePage.getSeeMoreLink,
        optumActivatePage.getHeaderSection,
        optumActivatePage.getEducationSection,
        optumActivatePage.getTestimonialsSection,
        optumActivatePage.getClinicalSection,
      ];
      cy.assertVisible(visibleSelectors);

      optumActivatePage
        .getEmailInput()
        .type("pvolvetestautomation+unusedgmail.com");
      optumActivatePage.getConfirmationCodeInput().type("Test Code");
      optumActivatePage.getPvolveLogo().click();

      optumActivatePage.getEmailErrorMessage().should("be.visible");
      optumActivatePage.getConfirmationCodeErrorMessage().should("be.visible");

      optumActivatePage
        .getEmailInput()
        .clear()
        .type("pvolvetestautomation+unused@gmail.com");
      optumActivatePage.getConfirmationCodeInput().clear().type("A638638940");
      optumActivatePage.getPvolveLogo().click();

      optumActivatePage.getEmailErrorMessage().should("not.exist");
      optumActivatePage.getConfirmationCodeErrorMessage().should("not.exist");
    } else {
      cy.log("Cannot test in this environment");
    }
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Optum Activate Page Validation for  " +
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

          const visibleSelectors = [
            optumActivatePage.getEmailInput,
            optumActivatePage.getConfirmationCodeInput,
            optumActivatePage.getRedeemNowButton,
            optumActivatePage.getLogInLink,
            optumActivatePage.getTermsOfServiceLink,
            optumActivatePage.getPvolveLogo,
            optumActivatePage.getRenewActiveImage,
            optumActivatePage.getResponsiveSeeMoreLink,
            optumActivatePage.getHeaderSection,
            optumActivatePage.getEducationSection,
            optumActivatePage.getTestimonialsSection,
            optumActivatePage.getClinicalSection,
          ];
          cy.assertVisible(visibleSelectors);

          optumActivatePage
            .getEmailInput()
            .type("pvolvetestautomation+unusedgmail.com");
          optumActivatePage.getConfirmationCodeInput().type("Test Code");
          optumActivatePage.getPvolveLogo().click();

          optumActivatePage.getEmailErrorMessage().should("be.visible");
          optumActivatePage
            .getConfirmationCodeErrorMessage()
            .should("be.visible");

          optumActivatePage
            .getEmailInput()
            .clear()
            .type("pvolvetestautomation+unused@gmail.com");
          optumActivatePage
            .getConfirmationCodeInput()
            .clear()
            .type("A638638940");
          optumActivatePage.getPvolveLogo().click();

          optumActivatePage.getEmailErrorMessage().should("not.exist");
          optumActivatePage
            .getConfirmationCodeErrorMessage()
            .should("not.exist");
        } else {
          cy.log("Cannot test in this environment");
        }
      },
    );
  });
});
