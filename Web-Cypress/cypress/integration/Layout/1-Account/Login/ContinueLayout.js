import ContinuePage from "../../../../support/pageobjects/ContinuePage.js";

const continuePage = new ContinuePage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Continue POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Continue POM", function () {
    continuePage.visitPage();

    const visibleSelectors = [
      continuePage.getPvolveLogoButton,
      continuePage.getAppleLoginButton,
      continuePage.getGoogleLoginButton,
      continuePage.getFacebookLoginButton,
      continuePage.getEmailForm,
      continuePage.getSubmitButton,
      continuePage.getTermsOfServiceLink,
    ];
    cy.assertVisible(visibleSelectors);
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Continue Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        continuePage.visitPage();

        /*
                Adding this if statement as a keepPass for QAB-149.
                This if block can be removed once QAB-149 is resolved.
            */
        if (size.width < 600) {
          const visibleSelectors = [
            continuePage.getPvolveLogoButton,
            continuePage.getAppleLoginButton,
            continuePage.getGoogleLoginButton,
            continuePage.getFacebookLoginButton,
            continuePage.getEmailForm,
            continuePage.getSubmitButton,
            continuePage.getTermsOfServiceLink,
          ];
          cy.assertVisible(visibleSelectors);
        } else {
          const visibleSelectors = [
            continuePage.getPvolveLogoButton,
            continuePage.getAppleLoginButton,
            continuePage.getGoogleLoginButton,
            continuePage.getFacebookLoginButton,
            continuePage.getEmailForm,
            continuePage.getSubmitButton,
            continuePage.getTermsOfServiceLink,
          ];
          cy.assertVisible(visibleSelectors);
        }
      },
    );
  });
});
