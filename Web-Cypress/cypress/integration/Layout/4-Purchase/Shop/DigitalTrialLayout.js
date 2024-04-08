import DigitalTrialPage from "../../../../support/pageobjects/DigitalTrialPage.js";

const digitalTrialPage = new DigitalTrialPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Digital Trial POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Digital Trial POM", function () {
    digitalTrialPage.visitPage();

    cy.shopifyHeaderGuest();

    const visibleSelectors = [
      digitalTrialPage.getEmailAddressInput,
      digitalTrialPage.getSubmitButton,
      digitalTrialPage.getFirstFAQAccordionTitle,
      digitalTrialPage.getFirstFQAAccordianButton,
    ];
    cy.assertVisible(visibleSelectors);

    digitalTrialPage.getTitleText();
    digitalTrialPage.getThankYouText();

    digitalTrialPage.getFirstFAQAccordionTitle().click();
    cy.assertVisible([digitalTrialPage.getFirstFQAAccordianButton]);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Digital Trial Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        digitalTrialPage.visitPage();

        cy.responsiveShopifyHeaderGuest();

        const visibleSelectors = [
          digitalTrialPage.getEmailAddressInput,
          digitalTrialPage.getSubmitButton,
          digitalTrialPage.getFirstFAQAccordionTitle,
          digitalTrialPage.getFirstFQAAccordianButton,
        ];
        cy.assertVisible(visibleSelectors);

        digitalTrialPage.getTitleText();
        digitalTrialPage.getThankYouText();

        digitalTrialPage.getFirstFAQAccordionTitle().click();
        cy.assertVisible([digitalTrialPage.getFirstFQAAccordianButton]);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
