/*
 * Page Object Model for <env>.pvolve.com
 */

class BaseURLPage {
  /**
   * Visits the page
   */
  visitPage() {
    return cy.visit("/");
  }

  /**
   * Opens cart in main page
   */
  openCart() {
    return cy.visit("/?cartOpen=true");
  }

  /**
   * Returns main content
   * TODO: Update locator
   */
  getMainContent() {
    return cy.get('[id="MainContent"]');
  }
}
export default BaseURLPage;
