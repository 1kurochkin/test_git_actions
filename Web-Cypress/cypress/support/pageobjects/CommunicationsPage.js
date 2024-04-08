class CommunicationsPage {
  /**
   * Visits the Communications page
   */
  visitCommunicationsPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/account/communications", {
      failOnStatusCode: false,
    });
  }

  /**
   * [SIDE NAV] Returns the Account link from Side Navigation section.
   */
  getBodySideNavAccountLink() {
    return cy.get(
      'a[class*="item account-module--account-menu-item"][href="/account"]',
    );
  }

  /**
   * [SIDE NAV] Returns the Settings link from Side Navigation section.
   */
  getBodySideNavSettingsLink() {
    return cy.get(
      'a[class*="item account-module--account-menu-item"][href="/account/settings"]',
    );
  }

  /**
   * [SIDE NAV] Returns the Subscriptions link from Side Navigation section.
   */
  getBodySideNavSubscriptionsLink() {
    return cy.get(
      'a[class*="item account-module--account-menu-item"][href="/account/subscription"]',
    );
  }

  /**
   * [SIDE NAV] Returns the Communications link from Side Navigation section.
   */
  getBodySideNavCommunicationsLink() {
    return cy.get(
      'a[class*="item account-module--account-menu-item"][href="/account/communications"]',
    );
  }

  /**
   * [SIDE NAV] Returns the Logout link from Side Navigation section.
   */
  getBodySideNavLogoutLink() {
    return cy.get(
      'a[class*="item account-module--account-menu-item"][href="/logout"]',
    );
  }

  /**
   *  Returns the Receive Emails button.
   */
  getBodyToggleReceiveEmailsButton() {
    return cy.get('div[class*="switch-toggle-button switch-toggle-button"]');
  }

  /**
   * Returns the responsive Communications Dropdown Icon
   */
  getResponsiveCommunicationsDropdownIcon() {
    return cy.get('div[class*="open-menu"] i[class*="pv-chevron"]');
  }

  /**
   * Returns the responsive Account link
   *
   * Note: Only visible after the dropdown icon has been clicked
   */
  getResponsiveAccountLink() {
    return cy.get('div[class*="account-menu"] a[href="/account"]');
  }

  /**
   * Returns the responsive Settings link
   *
   * Note: Only visible after the dropdown icon has been clicked
   */
  getResponsiveSettingsLink() {
    return cy.get('div[class*="account-menu"] a[href*="/account/settings"]');
  }

  /**
   * Returns the responsive Membership link
   *
   * Note: Only visible after the dropdown icon has been clicked
   */
  getResponsiveMembershipLink() {
    return cy.get(
      'div[class*="account-menu"] a[href*="/account/subscription"]',
    );
  }

  /**
   * Returns the responsive Communications link
   *
   * Note: Only visible after the dropdown icon has been clicked
   */
  getResponsiveCommunicationsLink() {
    return cy.get(
      'div[class*="account-menu"] a[href*="/account/communications"]',
    );
  }

  /**
   * Returns the responsive Logout link
   *
   * Note: Only visible after the dropdown icon has been clicked
   */
  getResponsiveLogoutLink() {
    return cy.get('div[class*="account-menu"] a[href*="/logout"]');
  }
}
export default CommunicationsPage;
