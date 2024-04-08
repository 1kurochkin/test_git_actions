class AccountPage {
  /**
   * Visits the Account page
   */
  visitAccountPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/account");
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
    return cy.get("div").contains("Log out", { matchCase: false });
  }

  /**
   *  Returns the First Name field.
   */
  getBodyFirstNameField() {
    return cy.get('input[id="account-first-name"]');
  }

  /**
   *  Returns the Last Name field.
   */
  getBodyLastNameField() {
    return cy.get('input[id="account-last-name"]');
  }

  /**
   *  Returns the Email field. Disabled by design, not interactable.
   */
  getBodyEmailField() {
    return cy.get('input[id="account-email"]');
  }

  /**
   *  Returns the Birthday field.
   */
  getBodyBirthdayField() {
    return cy.get('input[id="account-birthday"]');
  }

  /**
   *  Returns the Gender drop down.
   */
  getBodyGenderDropDown() {
    return cy.get('div[id="account-gender"] div[role="alert"]');
  }

  /**
   *  Returns the Female Gender drop down item.
   */
  getBodyGenderFemaleDropDownItem() {
    return cy
      .get('div[class="visible menu transition"] div[role="option"]')
      .contains("Female", { matchCase: false });
  }

  /**
   *  Returns the Male Gender drop down item.
   */
  getBodyGenderMaleDropDownItem() {
    return cy
      .get('div[class="visible menu transition"] div[role="option"]')
      .contains("Male", { matchCase: false });
  }

  /**
   *  Returns the Non-Binary Gender drop down item.
   */
  getBodyGenderNonBinaryDropDownItem() {
    return cy
      .get('div[class="visible menu transition"] div[role="option"]')
      .contains("Non-Binary", { matchCase: false });
  }

  /**
   *  Returns the Other Gender drop down item.
   */
  getBodyGenderOtherDropDownItem() {
    return cy
      .get('div[class="visible menu transition"] div[role="option"]')
      .contains("Other", { matchCase: false });
  }

  /**
   *  Returns the Phone Country selector.
   */
  getBodyPhoneCountrySelector() {
    return cy.get('div[class="PhoneInputCountry"]');
  }

  /**
   *  Returns the Phone Number field.
   */
  getBodyPhoneNumberField() {
    return cy.get('input[name="phone"]');
  }

  /**
   * Returns the Invalid Error text when invalid text is entered.
   */
  getInvalidErrorText() {
    return cy.get('div[class*="info-msg"]');
  }

  /**
   *  Returns the Phone Number Opt-in Legal text.
   */
  getBodyPhoneNumberLegalText() {
    return cy
      .get('p[class="p3"]')
      .contains("By providing my phone number, I consent", {
        matchCase: false,
      });
  }

  /**
   *  Returns the Save button.
   */
  getBodySaveButton() {
    return cy
      .get('button[class*="ui secondary"]')
      .contains("Save", { matchCase: false });
  }

  /**
   *  Returns the Change Password button.
   */
  getBodyChangePasswordButton() {
    return cy
      .get('a[class*="ui primary button"]')
      .contains("Change Password", { matchCase: false });
  }

  /**
   * Returns the responsive Account Dropdown Icon
   */
  getResponsiveAccountDropdownIcon() {
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

  /**
   *  Confirm logout button in logout dialog.
   */
  getConfirmLogoutButton() {
    return cy.get("div[role='dialog'] button.yes-btn");
  }
}
export default AccountPage;
