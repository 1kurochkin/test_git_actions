class OptumActivatePage {
  /**
   * Visits the Optum Activate page.
   */
  visitPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") +
        "/optum/activate/?product=renewactive&sector=government",
    );
  }

  /**
   * Returns the email input field.
   */
  getEmailInput() {
    return cy.get('input[id="email"]');
  }

  /**
   * Returns the confirmation code input field.
   */
  getConfirmationCodeInput() {
    return cy.get('input[id="confirmationCode"]');
  }

  /**
   * Returns the Redeem Now button.
   */
  getRedeemNowButton() {
    return cy.get('button[class*="ui big"]').contains("Redeem Now");
  }

  /**
   * Returns the Log in link.
   */
  getLogInLink() {
    return cy.get('a[href*="/continue"]');
  }

  /**
   * Returns the Terms of Service link.
   */
  getTermsOfServiceLink() {
    return cy.get('a[href*="/terms-of-service"]');
  }

  /**
   * Returns the Pvolve logo.
   */
  getPvolveLogo() {
    return cy.get('i[class*="pv-logo-name"]');
  }

  /**
   * Returns the Renew Active image.
   */
  getRenewActiveImage() {
    return cy.get('img[alt*="RA Logo"]');
  }

  /**
   * Returns the See More Link.
   */
  getSeeMoreLink() {
    return cy.get('a[href*="#education"]');
  }

  /**
   * Returns the header section.
   */
  getHeaderSection() {
    return cy.get('div[class*="partners-header-module"]');
  }

  /**
   * Returns the education section.
   */
  getEducationSection() {
    return cy.get('div[class*="partners-education"]');
  }

  /**
   * Returns the testimonials section.
   */
  getTestimonialsSection() {
    return cy.get('div[class*="partners-testimonials"]');
  }

  /**
   * Returns the clinical section.
   */
  getClinicalSection() {
    return cy.get(
      'div[class*="partners-clinical-advisory-module--clinical-advisory"]',
    );
  }

  /**
   * Returns the Email Error message.
   */
  getEmailErrorMessage() {
    return cy.get('div[id*="email-error-message"]');
  }

  /**
   * Returns the Confirmation Code Error message.
   */
  getConfirmationCodeErrorMessage() {
    return cy.get('div[id*="confirmationCode-error-message"]');
  }

  /**
   * [RESPONSIVE] Returns the See More Link.
   */
  getResponsiveSeeMoreLink() {
    return cy.get('a[href*="#benefits"]');
  }
}
export default OptumActivatePage;
