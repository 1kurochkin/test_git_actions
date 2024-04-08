class VirtualStudioPage {
  /**
   * Navigates to the Virtual Studio classes page
   */
  visitPage() {
    return cy.visit("/pages/virtual-studio-classes");
  }

  /**
   * Returns See Full Schedule button
   */
  getSeeFullScheduleButton() {
    return cy.get('a[href*="/pages/virtual-studio-classes#schedule"]');
  }

  /**
   * Returns Book Now button
   */
  getBookNowButton() {
    return cy.get('a[href*="/pages/virtual-studio-schedule"]');
  }

  /**
   * Returns Get Access button
   */
  getGetAccessButton() {
    return cy.get('a[href*="/checkout/?sku=12month_trial7"]');
  }

  /**
   * Returns Have Question Mail To Email link
   */
  getHaveQuestionsMailToEmailLink() {
    return cy.get('a[href="mailto:virtual@pvolve.com"]');
  }

  /**
   * Returns the element for the Date Picker
   */
  getDatePicker() {
    return cy.get(".bw-datepicker");
  }

  /**
   * Returns the element for the mobile responsive Calendar table element
   */
  getCalendarTable() {
    return cy.get('table[class*="bw-calendar"]');
  }

  /**
   * Returns the element for the mobile filter button
   */
  getMobileFilterButton() {
    return cy.get('button[class*="bw-header__filter-link"]').eq(0);
  }

  /**
   * Returns the element for the Filter button
   */
  getDesktopFilterButton() {
    return cy.get('button[class*="bw-header__filter-link"]').eq(1);
  }

  /**
   * Returns the element for the first virtual class in the list
   */
  getVirtualClassListItem2() {
    // KEEPPASS - Book button is somteims missing on first list item
    return cy.get("div.bw-session").eq(1);
  }

  /**
   * Returns the element for the first virtual class time frame
   */
  getVirtualClassTimeFrame() {
    return cy.get("div.bw-session").eq(1).find('span[class="hc_time"]');
  }

  /**
   * Returns the element for the first virtual class session name
   */
  getVirtualClassSessionName() {
    return cy.get("div.bw-session").eq(1).find('div[class="bw-session__name"]');
  }

  /**
   * Returns the element for the first virtual class session staff
   */
  getVirtualClassSessionStaff() {
    return cy
      .get("div.bw-session")
      .eq(1)
      .find('div[class="bw-session__staff"]');
  }

  /**
   * Returns the element for the first virtual class book button
   */
  getVirtualClassBookButton() {
    return cy
      .get("div.bw-session")
      .eq(1)
      .find('a[class="bw-widget__cta signup_now"]');
  }

  /**
   * Returns the element for the 2nd virtual class view details button
   */
  getVirtualClassViewDetailsButton() {
    return cy
      .get("div.bw-session")
      .eq(1)
      .find('span[class*="bw-session__detail-link-text--closed"]');
  }
}

export default VirtualStudioPage;
