class ContinuePage {
  /**
   * Visits the page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/continue");
  }

  /**
   * Returns the Pvolve Logo button that returns to the homepage
   */
  getPvolveLogoButton() {
    return cy.get('a[href*="pvolve.com"]');
  }

  /**
   * Returns the close button that exits the page
   */
  getCloseButton() {
    return cy.get('button[class*="square-close-button"]');
  }

  /**
   * [SOCIAL LOGIN] Returns the Social Login button for Apple
   */
  getAppleLoginButton() {
    return cy.get('i[class="pv-icon pv-apple"]');
  }

  /**
   * [SOCIAL LOGIN] Returns the Social Login button for Google
   */
  getGoogleLoginButton() {
    return cy.get('i[class="pv-icon pv-google"]');
  }

  /**
   * [SOCIAL LOGIN] Returns the Social Login button for Facebook
   */
  getFacebookLoginButton() {
    return cy.get('i[class="pv-icon pv-facebook"]');
  }

  /**
   * Returns the Email field
   */
  getEmailForm() {
    return cy.get('input[name="email"]');
  }

  /**
   * Returns the Invalid Error text when invalid email is entered
   */
  getInvalidErrorText() {
    return cy.get('div[class*="info-msg"]');
  }

  /**
   * Returns the Submit button for email login
   */
  getSubmitButton() {
    return cy.get('button[type="submit"]');
  }

  /**
   * Returns the Terms of Service link
   */
  getTermsOfServiceLink() {
    return cy.get('a[href*="terms-of-service"]');
  }
}
export default ContinuePage;
