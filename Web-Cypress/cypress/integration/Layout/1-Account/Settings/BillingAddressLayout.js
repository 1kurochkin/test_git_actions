import AddressPage from "../../../../support/pageobjects/AddressPage";

const addressPage = new AddressPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Address POM Selector Validation Test", function () {
  it("Validate all of the selectors in the Address POM", function () {
    // Login and navigate to Address page
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();
    addressPage.visitAddressPage();

    // Get requred field error messages to display
    addressPage.getAddressField().click();
    addressPage.getAddress2Field().click();

    const visibleSelectors = [
      addressPage.getAddressField,
      addressPage.getAddressRequiredErrorMessage,
      addressPage.getAddress2Field,
      addressPage.getCityField,
      addressPage.getCityRequiredErrorMessage,
      addressPage.getZipCodeField,
      addressPage.getZipCodeRequiredErrorMessage,
      addressPage.getUpdateButton,
      addressPage.getCancelButton,
    ];
    cy.assertVisible(visibleSelectors);

    // Check drop down fields
    addressPage.getStateFieldDropDown().click();
    addressPage.getStateFieldOptions().eq(1).should("be.visible");
    addressPage.getCountryFieldDropDown().click();
    addressPage.getCountryFieldOptions().eq(1).should("be.visible");
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Address Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        // Login and navigate to Address page
        cy.loginSubscribedUser();
        cy.waitForAppPageLoad();
        addressPage.visitAddressPage();

        // Get requred field error messages to display
        addressPage.getAddressField().click();
        addressPage.getAddress2Field().click();

        const visibleSelectors = [
          addressPage.getAddressField,
          addressPage.getAddressRequiredErrorMessage,
          addressPage.getAddress2Field,
          addressPage.getCityField,
          addressPage.getCityRequiredErrorMessage,
          addressPage.getZipCodeField,
          addressPage.getZipCodeRequiredErrorMessage,
          addressPage.getUpdateButton,
          addressPage.getCancelButton,
        ];
        cy.assertVisible(visibleSelectors);

        // Check drop down fields
        addressPage.getStateFieldDropDown().click();
        addressPage.getStateFieldOptions().eq(1).should("be.visible");
        addressPage.getCountryFieldDropDown().click();
        addressPage.getCountryFieldOptions().eq(1).should("be.visible");
      },
    );
  });
});
