class SettingsPage {
  /**
   * Visits the Settings page
   */
  visitSettingsPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/account/settings", {
      failOnStatusCode: false,
    });
  }

  /**
   * [SIDE NAV] Returns the Account link from Side Navigation section of the page.
   */
  getBodySideNavAccountLink() {
    return cy.get(
      'a[class*="item account-module--account-menu-item"][href="/account"]',
    );
  }

  /**
   * [SIDE NAV] Returns the Settings link from Side Navigation section of the page.
   */
  getBodySideNavSettingsLink() {
    return cy.get(
      'a[class*="item account-module--account-menu-item"][href="/account/settings"]',
    );
  }

  /**
   * [SIDE NAV] Returns the Subscriptions link from Side Navigation section of the page.
   */
  getBodySideNavSubscriptionsLink() {
    return cy.get(
      'a[class*="item account-module--account-menu-item"][href="/account/subscription"]',
    );
  }

  /**
   * [SIDE NAV] Returns the Communications link from Side Navigation section of the page.
   */
  getBodySideNavCommunicationsLink() {
    return cy.get(
      'a[class*="item account-module--account-menu-item"][href="/account/communications"]',
    );
  }

  /**
   * [SIDE NAV] Returns the Logout link from Side Navigation section of the page.
   */
  getBodySideNavLogoutLink() {
    return cy.get(
      'a[class*="item account-module--account-menu-item"][href="/logout"]',
    );
  }

  /**
   * Returns the Closed Caption Toggle button.
   */
  getBodyToggleClosedCaptionsButton() {
    return cy
      .get('div[class*="switch-toggle-button switch-toggle-button"]')
      .eq(0);
  }

  /**
   * Returns the Feed FM Toggle button.
   */
  getBodyToggleFeedFMButton() {
    return cy
      .get('div[class*="switch-toggle-button switch-toggle-button"]')
      .eq(1);
  }

  /**
   * Returns the responsive Settings Dropdown Icon
   */
  getResponsiveSettingsDropdownIcon() {
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
export default SettingsPage;
