class LoginHelpPage {
  /**
   * [LOGIN] Returns user to the Continue page.
   */
  getGoBackLink() {
    return cy.contains("Go back");
  }

  /**
   * Returns send email button
   */
  getSendEmailButton() {
    return cy.get('button[type="submit"]');
  }

  /**
   * Returns texts such as:
   * Check you email
   * An email was sent to email@email.com
   * Didn't get it?...
   */
  getTextContent() {
    return cy.get("p");
  }

  /**
   * Returns got it link
   */
  getGotItLink() {
    return cy.get('a[href="/continue"]');
  }

  /**
   * Returns resend email button
   */
  getResendEmailButton() {
    return cy.get("button.resend-email");
  }
}
export default LoginHelpPage;
