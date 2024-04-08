class SubscriptionPage {
  /**
   * Visits the Subscription page
   */
  visitSubscriptionPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/account/subscription", {
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
   * Returns the Title text.
   */
  getBodyTitleText() {
    return cy
      .get('h1[class*="bold upper"]')
      .contains("Membership", { matchCase: false });
  }

  /**
   * Returns the Next Payment text.
   */
  getBodyNextPaymentText() {
    return cy
      .get('p[class*="p2"]')
      .contains("next payment on", { matchCase: false });
  }

  /**
   * Returns the Cancel Subscription button.
   */
  getBodyCancelSubscriptionButton() {
    return cy.get('a[href*="/account/subscription/cancel"]', {
      timeout: 10000,
    });
  }

  /**
   * Returns the Reactive Subscription button.
   */
  getReactivateSubscriptionButton() {
    return cy.get("button").contains("Reactivate", { matchCase: false });
  }

  /**
   * Returns the Plan Info text.
   */
  getBodyPlanInfoText() {
    return cy.get("p").contains("month", { matchCase: false });
  }

  /**
   * Returns the Change Plan/Apply Promo button.
   */
  getBodyChangePlanApplyPromoButton() {
    return cy.get('a[href*="/account/subscription/update"]');
  }

  /**
   * Returns the Credit Card Info text.
   */
  getBodyCreditCardInfoText() {
    return cy
      .get('p[class*="p2 margin--0"]', { timeout: 10000 })
      .contains("visa", { matchCase: false });
  }

  /**
   * Returns the Update Payment button.
   */
  getBodyUpdatePaymentButton() {
    return cy.get('a[href*="/account/payment/update"]');
  }
  /**
   * Returns the Add Billing Address button.
   */
  getBodyAddBillingAddressButton() {
    return cy.get('a[href="/account/subscription/address"]');
  }

  /**
   * Returns the No Payment Method alert.
   */
  getNoPaymentMethodAlert() {
    return cy.get('div[class*="ui red inverted segment banner-module"]', {
      timeout: 10000,
    });
  }

  /**
   * Returns the responsive Subscription Dropdown Icon
   */
  getResponsiveSubscriptionDropdownIcon() {
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
export default SubscriptionPage;
