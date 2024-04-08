class AppHeader {
  /**
   * Returns the Pvolve Logo button from the left of the Header.
   */
  getPvolveLogoButton() {
    return cy.get('[data-test="Header-Logo-Button"]');
  }

  /**
   *  Returns Home button.
   */
  getHomeButton() {
    return cy.get('[data-test-id="menu-home"]');
  }

  /**
   * Returns the 'Series' sub-navigation button.
   */
  getSeriesButton() {
    return cy.get('[data-test-id="menu-series"]');
  }

  /**
   * Returns the 'Live' sub-navigation button.
   */
  getLiveButton() {
    return cy.get('[data-test-id="menu-live"]');
  }

  /**
   *  Returns Classes button.
   */
  getClassesButton() {
    return cy.get('[data-test-id="menu-classes"]');
  }

  /**
   * Returns the 'Shop' navigation button.
   */
  getShopButton() {
    return cy.get('[data-testid="ShoppingBagOutlinedIcon"]');
  }

  /**
   * Returns the 'Locations' navigation button.
   */
  getLocationsButton() {
    return cy.get('[data-testid="PlaceOutlinedIcon"]');
  }
  /**
   * Returns the 'Frnachise' navigation button.
   */
  getFranchiseButton() {
    return cy.get('[data-testid="StorefrontOutlinedIcon"]');
  }

  /**
   * [LOGGED OUT] Returns the 'Free Trial' button.
   */
  getFreeTrialButton() {
    return cy.get('[data-test="Header-FreeTrial-Button"]');
  }

  /**
   * Returns the drop down menu button at top-right of Header.
   */
  getToggleDropDownButton() {
    return cy.get('[data-test="Header-ToggleMenu-Button"]');
  }

  /**
   * Returns the fullscreen overlay container when dropdown menu is open.
   *
   * Click this to close the dropdown menu.
   *
   * It wont be visible unless getToggleDropDownButton is clicked.
   */
  getDropDownOverlayContainer() {
    return cy.get('div[id="menu-navbar"]');
  }

  /**
   * Returns the 'Account' button in drop down menu.
   *
   * It wont be visible unless getToggleDropDownButton is clicked.
   */
  getDropDownAccountButton() {
    return cy.get('[data-test="Header-Dropdown-Account-Button"]');
  }

  /**
   * Returns the 'Logout' button in drop down menu.
   *
   * It wont be visible unless getToggleDropDownButton is clicked.
   */
  getDropDownLogoutButton() {
    return cy.get('[data-test="Header-Dropdown-Logout-Button"]');
  }

  /**
   * Returns the 'Login' button in drop down menu.
   *
   * It wont be visible unless getToggleDropDownButton is clicked.
   */
  getDropDownLoginButton() {
    return cy.get('[data-test="Header-Dropdown-Login-Button"]');
  }

  /**
   * Returns the 'Shop' button in drop down menu.
   *
   * It wont be visible unless getToggleDropDownButton is clicked.
   */
  getDropDownShopButton() {
    return cy.get('[data-test="Header-Dropdown-Shop-Button"]');
  }

  /**
   * Returns the 'Chicago Studio schedule' button in drop down menu.
   *
   * It wont be visible unless getToggleDropDownButton is clicked.
   */
  getDropDownChicagoStudioButton() {
    return cy.get('[data-test="Header-Dropdown-ChicagoStudioSchedule-Button"]');
  }

  /**
   * Returns the 'NYC Studio schedule' button in drop down menu.
   *
   * It wont be visible unless getToggleDropDownButton is clicked.
   */
  getDropDownNYCStudioButton() {
    return cy.get('[data-test="Header-Dropdown-NycStudioSchedule-Button"]');
  }

  /**
   * Returns the 'LA Studio schedule' button in drop down menu.
   *
   * It wont be visible unless getToggleDropDownButton is clicked.
   */
  getDropDownLAStudioButton() {
    return cy.get('[data-test="Header-Dropdown-LaStudioSchedule-Button"]');
  }

  /**
   * Returns the 'LVS Studio schedule' button in drop down menu.
   *
   * It wont be visible unless getToggleDropDownButton is clicked.
   */
  getDropDownLVSStudioButton() {
    return cy.get('[data-test="Header-Dropdown-LvsStudioSchedule-Button"]');
  }
}
export default AppHeader;
