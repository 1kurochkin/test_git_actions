class PasswordPage {
  /**
   * Visit the Password page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/account/password", {
      failOnStatusCode: false,
    });
  }

  /**
   * Returns the Close button at top right.
   */
  getCloseButton() {
    return cy.get('button[class*="square-close-button-module--closeButton"]');
  }

  /**
   * Returns the Current Password field.
   */
  getCurrentPasswordField() {
    return cy.get('input[name="oldPassword"]');
  }

  /**
   * Returns the View Current Password button.
   */
  getViewCurrentPasswordButton() {
    return cy.get('i[class*="pv-icon"]').eq(0);
  }

  /**
   * Returns the New Password field.
   */
  getNewPasswordField() {
    return cy.get('input[name="newPassword"]');
  }

  /**
   * Returns the View New Password button.
   */
  getViewNewPasswordButton() {
    return cy.get('i[class*="pv-icon"]').eq(1);
  }

  /**
   * Returns the SavePassword button.
   */
  getSavePasswordButton() {
    return cy.get('button[class*="ui primary"]').contains("SAVE PASSWORD");
  }
}
export default PasswordPage;
