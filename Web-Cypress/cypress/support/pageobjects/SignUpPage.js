class SignUpPage {
  /**
   * [PROMO BANNER] Returns the Promo Banner button from the top of the page.
   */
  getPromoBannerButton() {
    return cy.get(
      'div[class*="promo-banner-module"] a[class*="promo-banner-module"]',
    );
  }

  /**
   * Returns the P.Volve Logo button from the top of the page.
   */
  getPvolveLogoButton() {
    return cy.get('a[title*="Return to the P.volve homepage"]');
  }

  /**
   * [FORM] Returns the First Name field.
   */
  getFirstNameField() {
    return cy.get('input[name="firstName"]');
  }

  /**
   * [FORM] Returns the Last Name field.
   */
  getLastNameField() {
    return cy.get('input[name="lastName"]');
  }

  /**
   * [FORM] Returns the Create Password field.
   */
  getCreatePasswordField() {
    return cy.get('input[name="password"]');
  }

  /**
   * Returns the Invalid Error text when invalid text is entered
   */
  getInvalidErrorText() {
    return cy.get('div[class*="info-msg"]');
  }

  /**
   * [FORM] Returns the Show Password button.
   */
  getShowPasswordButton() {
    return cy.get('i[class*="pv-eyeball"]');
  }

  /**
   * Returns the Keep me up to date with P.volve news checkbox.
   */
  getKeepMeUpToDateCheckbox() {
    return cy.get('input[id="optIn"]');
  }

  /**
   * Returns the Create Account button.
   */
  getCreateAccountButton() {
    return cy.get('button[type="submit"]').contains("Create Account");
  }

  /**
   * Returns the Go Back button.
   */
  getGoBackButton() {
    return cy.get('a[href="/continue"]').contains("Go back");
  }
}
export default SignUpPage;
