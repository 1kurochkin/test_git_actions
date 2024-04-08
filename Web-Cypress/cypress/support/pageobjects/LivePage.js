class LivePage {
  /**
   * Visits the Live page
   */
  visitPage() {
    return cy.visit(Cypress.env("APP_BASE_URL") + "/live");
  }

  /**
   * Returns Live Virtual Studio Title
   */
  getLiveVirtualStudioTitle() {
    return cy.get('h2[data-test-id="get-lvs-title"]');
  }

  /**
   * Returns Live Virtual Studio Title Background image
   */
  getLiveVirtualStudioBackgroundImage() {
    return cy.get('[data-test-id="get-lvs-image"]');
  }

  /**
   * Returns Live Virtual Studio Title Background image
   */
  getLiveVirtualStudioDescription() {
    return cy.get('[data-test-id="get-lvs-description"]');
  }

  /**
   * Returns All Calendar selectors
   */
  getAllCalendarSelectors() {
    return cy.get("button > p");
  }

  /**
   * Returns Calendar select by date
   */
  navigateNextOnCalendar() {
    return cy.get('[data-testid="NavigateNextIcon"]');
  }

  /**
   * Returns Current month year selector
   */
  getCurrentMonthYearLVSEventsLabel() {
    return cy.get('[data-test-id="get-selected-date-lvs-event-label"]');
  }

  /**
   * Returns Timezone info image
   */
  getTimezoneInfoImage() {
    return cy.get("svg[data-testid='InfoRoundedIcon']");
  }

  /**
   * Returns Timezone info disclaimer
   */
  getTimezoneInfoDisclaimer() {
    return cy.get('[data-test-id="get-timezone-disclaimer"]');
  }

  /**
   * Returns current date
   */
  getCurrentDate() {
    return cy.get('[data-test-id="get-live-current-date"] > h4');
  }

  /**
   * Returns first lvs class with reserve button
   */
  getReserveButtonFirstLVSClass() {
    return cy.get('[data-test-id="get-reserve-button"]').first();
  }

  /**
   * Returns first lvs class with cancel button
   */
  getCancelButtonFirstLVSClass() {
    return cy.get('[data-test-id="get-cancel-button-first-lvs-class"]');
  }

  /**
   * Returns cancel button top lvs reservation
   */
  getCancelLVSButton() {
    return cy.get(
      '[data-test-id="get-lvs-next-class-container"] [data-test-id="get-cancel-button-first-lvs-class"]',
    );
  }

  /**
   * Returns popup title
   */
  getPopupTitle() {
    return cy.get('[id="customized-dialog-title"]');
  }

  /**
   * Returns popup close button
   */
  getPopupCloseButton() {
    return cy.get('[data-testid="CloseIcon"]');
  }

  /**
   * Returns popup confirm button
   */
  getPopupConfirmButton() {
    return cy.get('[data-test-id="get-popup-confirmation-button"]');
  }
}
export default LivePage;
