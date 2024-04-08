class PnFQuestionnairePage {
  /**
   * Returns the Close 'X' button at top right.
   */
  getCloseButton() {
    return cy.get('button[class*="square-close-button-module--closeButton"]');
  }

  /**
   * Returns the Image on the left side of the page.
   */
  getLeftImage() {
    return cy.get(
      'div[class*="column questionnaire-module--questionnaire-image-col"]',
    );
  }

  /**
   * Returns the Welcome Info text.
   */
  getWelcomePageInformationText() {
    return cy.get(
      'div[class*="question-intro-col"] div[class*="row margin-bottom"]',
    );
  }

  /**
   * Returns the Let`s Go button on the welcome page.
   */
  getWelcomePageLetsGoButton() {
    return cy
      .get('button[class*="ui large right floated button"]')
      .contains("LET'S GO");
  }

  /**
   * Returns the Next button.
   */
  getNextButton() {
    return cy
      .get('button[class*="ui large right floated button"]')
      .contains("NEXT");
  }

  /**
   * Returns the First Page Invalid text.
   */
  getFirstPageInvalidText() {
    return cy
      .get('div[class*="info-msg color-pv-red"]')
      .contains("any whole number between 1-10 days");
  }

  /**
   * Returns the Second Page Invalid text.
   */
  getSecondPageInvalidText() {
    return cy
      .get('div[class*="info-msg color-pv-red"]')
      .contains("supports cycles of 21-41 days");
  }

  /**
   * Returns the Submit button.
   */
  getSubmitButton() {
    return cy
      .get('button[class*="ui large right floated button"]')
      .contains("SUBMIT");
  }

  /**
   * Returns the Back button.
   */
  getBackButton() {
    return cy
      .get('span[class*="link-with-arrow pv-icon pv-arrow-left"]')
      .contains("Back");
  }

  /**
   * Returns the Days field.
   */
  getDaysField() {
    return cy.get('input[id="inputQuestion"]');
  }

  /**
   * Returns the Calendar Day buttons.
   *
   * Example: pnFQuestionnairePage.getCalendarDays().first().click();
   */
  getCalendarDays() {
    return cy.get('button[class*="month-view__days__day"]');
  }

  /**
   * Returns the Back Calendar month button.
   */
  getBackCalendarMonthButton() {
    return cy.get('button[class*="react-calendar__navigation__prev-button"]');
  }
}
export default PnFQuestionnairePage;
