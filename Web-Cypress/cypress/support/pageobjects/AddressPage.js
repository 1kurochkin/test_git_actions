class AddressPage {
  /**
   * Visits the Address page
   */
  visitAddressPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/account/subscription/address",
      { failOnStatusCode: false },
    );
  }

  /**
   * Returns the Address field
   */
  getAddressField() {
    return cy.get('input[id="subscription-address-1"]');
  }

  /**
   * Returns the Address required error message when the Address field is empty
   */
  getAddressRequiredErrorMessage() {
    return cy.get('div[id="subscription-address-1-error-message"]');
  }

  /**
   * Returns the Address 2 field
   */
  getAddress2Field() {
    return cy.get('input[id="subcriptions-address-2"]');
  }

  /**
   * Returns the City field
   */
  getCityField() {
    return cy.get('input[id="subscription-city"]');
  }

  /**
   * Returns the City required error message when the City field is empty
   */
  getCityRequiredErrorMessage() {
    return cy.get('div[id="subscription-city-error-message"]');
  }

  /**
   * Returns the State field drop down menu
   */
  getStateFieldDropDown() {
    return cy.get('div[id="subscription-province_code"]');
  }

  /**
   * Returns the State options from the State field
   */
  getStateFieldOptions() {
    return cy.get('div[id="subscription-province_code"] div[role="option"]');
  }

  /**
   * Returns the Zip Code field
   */
  getZipCodeField() {
    return cy.get('input[id="subscription-zip"]');
  }

  /**
   * Returns the Zip required error message when the Zip Code field is empty
   */
  getZipCodeRequiredErrorMessage() {
    return cy.get('div[id="subscription-zip-error-message"]');
  }

  /**
   * Returns the Country field drop down menu
   */
  getCountryFieldDropDown() {
    return cy.get('div[id="subscription-country_code"]');
  }

  /**
   * Returns the Country options from the Country field
   */
  getCountryFieldOptions() {
    return cy.get('div[id="subscription-country_code"] div[role="option"]');
  }

  /**
   * Returns the Update button
   */
  getUpdateButton() {
    return cy.get('button[class*="ui"]').contains("Update");
  }

  /**
   * Returns the Cancel button
   */
  getCancelButton() {
    return cy.get('button[class*="ui"]').contains("Cancel");
  }
}

export default AddressPage;
