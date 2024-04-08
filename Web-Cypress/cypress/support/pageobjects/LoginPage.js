class LoginPage {
  /**
   * Returns the Pvolve Logo button that returns to the homepage.
   */
  getPvolveLogoButton() {
    return cy.get('a[href*="pvolve.com"] i[class*="pv-icon pv-logo"]');
  }

  /**
   * Returns the email input field.
   */
  getEmailInput() {
    return cy.get('input[type="email"]');
  }

  /**
   * Returns the first name input field.
   */
  getFirstNameInput() {
    return cy.get('input[name="firstName"]');
  }

  /**
   * Returns the first name error.
   */
  getFirstNameError() {
    return cy.get("#signup-first-name-error-message");
  }

  /**
   * Returns the last name input field.
   */
  getLastNameInput() {
    return cy.get('input[name="lastName"]');
  }

  /**
   * Returns the last name error.
   */
  getLastNameError() {
    return cy.get("#signup-last-name-error-message");
  }

  /**
   * [LOGIN] Returns the TextBox area from password. Must chain contains off of it.
   *
   * Usage: loginPage.getFirstNameText().contains("Test");
   */
  getFirstNameText() {
    return cy.get('div[class*="six wide computer sixteen wide"]');
  }

  /**
   * [LOGIN] Returns the TextBox area from password.
   */
  getPasswordForm() {
    return cy.get('input[name="password"]');
  }

  /**
   * Returns the password error.
   */
  getPasswordError() {
    return cy.get("#signup-password-error-message");
  }

  /**
   * Returns forgot passwork link
   */
  getForgotPasswordLink() {
    return cy.get('a[href="/loginHelp"]');
  }

  /**
   * Returns the show password button.
   */
  getShowPassword() {
    return cy.get('span[class*="toggle-password"]');
  }

  /**
   * [LOGIN] Returns the submit button tab in the Login.
   */
  getSubmitButton() {
    return cy.get('button[type="submit"]');
  }

  /**
   * [LOGIN] Returns the title of the page.
   */
  getPageTitle() {
    return cy.contains("Create Your Account");
  }

  /**
   * [LOGIN] Returns the OTPIn field.
   */
  getOTPIn() {
    return cy.get('input[name="optIn"]');
  }

  /**
   * [LOGIN] Returns the acceptTerms field.
   */
  getAcceptTerms() {
    return cy.get('input[name="acceptTerms"]');
  }
}
export default LoginPage;
