class PhaseFunction {
  /**
   * Visits the Phase and Function Series details page
   */
  visitPnFSeriesDetailPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/series/phase-and-function",
      { failOnStatusCode: false },
    );
  }

  /**
   * Returns the Phase & Function Title.
   */
  getTitlePnF() {
    return cy
      .get('h1[class*="bold upper margin--0"]')
      .contains("Phase & Function");
  }

  /**
   * Returns the Series Time Info.
   */
  getSeriesTime() {
    return cy.get(".p0");
  }

  /**
   * Returns the Leave this series button.
   */
  getLeaveThisSeriesButton() {
    return cy
      .get('button[class*="ui secondary button"]')
      .contains("LEAVE THIS SERIES");
  }

  /**
   * Returns the button to Join the P&F series.
   */
  getJoinThisSeriesButton() {
    return cy.get('a[class*="ui primary button"]').contains("JOIN THIS SERIES");
  }

  /**
   * Returns the Edit pencil button.
   */
  getEditPencil() {
    return cy.get('i[class*="pv-icon pv-pencil"]');
  }

  /**
   * Returns the button to Join the P&F series.
   */
  getJoinTheSeriesText() {
    return cy.get('a[class*="text-links "]').contains("Join the series");
  }

  /**
   * Returns the Update your cycle Hyperlink text.
   */
  getUpdateYourCycleLink() {
    return cy.get('a[class*="text-links "]').contains("update your cycle");
  }

  /**
   * Returns the info Text.
   */
  getThePhasesSection() {
    return cy.get(".page-section");
  }

  /**
   * Returns the phases text
   */
  getThePhasesText() {
    return cy.get(".display--block");
  }

  /**
   * Returns the contributing experts title
   */
  getContributingText() {
    return cy
      .get('h2[class*="bold phase-and-function-module--experts-heading"]')
      .contains("CONTRIBUTING EXPERTS");
  }

  /**
   * Returns the instructor name 1
   */
  getContributingNameText1() {
    return cy
      .get('div[class*="row padding-bottom--0 padding-top--small"]')
      .contains("Alexia Acebo");
  }

  /**
   * Returns the instructor photo 1
   */
  getContributingPhoto1() {
    return cy.get('div[class*="five wide computer"]').find("img");
  }

  /**
   * Returns the instructor info 1
   */
  getContributingText1() {
    return cy.get('p[class*="experts-paragraph"]');
  }

  /**
   *  Returns the instructor name 2
   */
  getContributingNameText2() {
    return cy
      .get('div[class*="row padding-bottom--0 padding-top--small"]')
      .contains("Vanessa Risetto");
  }

  /**
   * Returns the instructor photo 2
   */
  getContributingPhoto2() {
    return cy.get('div[class*="five wide computer"]').find("img");
  }

  /**
   * Returns the instructor info 2
   */
  getContributingText2() {
    return cy.get('p[class*="experts-paragraph"]');
  }

  /**
   * Returns the instructor name 3
   */
  getContributingNameText3() {
    return cy
      .get('div[class*="row padding-bottom--0 padding-top--small"]')
      .contains("Dr. Suman Tewari");
  }

  /**
   * Returns the instructor photo 3
   */
  getContributingPhoto3() {
    return cy.get('div[class*="five wide computer column"]').find("img");
  }

  /**
   * Returns the instructor info 3
   */
  getContributingText3() {
    return cy.get('p[class*="experts-paragraph"]');
  }

  /**
   * Returns the Phase & Function Sub-title
   */
  getPhaseFunctionImagePanel() {
    return cy.get(
      'div[class*="column questionnaire-module--questionnaire-image-col"]',
    );
  }

  /**
   * Returns the welcome info text
   */
  getPhaseFunctionTextPanel() {
    return cy.get(
      'div[class*="column questionnaire-module--question-intro-col"]',
    );
  }

  /**
   * Returns the close button in Video
   */
  getPhaseFunctionCloseButton() {
    return cy.get('button[class*="square-close-button-module--closeButton"]');
  }

  /**
   * Returns the Let`s go button.
   */
  getPhaseFunctionLetsGoButton() {
    return cy
      .get('button[class*="ui large right floated button"]')
      .contains("LET'S GO");
  }

  /**
   * Returns the text box "days text"
   */
  getDaysTextBox() {
    return cy.get("#inputQuestion");
  }

  /**
   * Returns the title Welcome to Phase and Function
   */
  getPhaseFunctionTitle() {
    return cy
      .get('h2[class*="questionnaire-module--question-title"]')
      .contains("WELCOME TO PHASE & FUNCTION");
  }

  /**
   * Returns the next button
   */
  getNextButton() {
    return cy
      .get('button[class*="ui large right floated button"]')
      .contains("NEXT");
  }

  /**
   * Returns one calendar day
   * Example: PandF.getCalendar().first().click();
   */
  getCalendar() {
    return cy.get('button[class*="month-view__days__day"]');
  }

  /**
   * Returns the submit button
   */
  getSubmitButton() {
    return cy
      .get('button[class*="ui large right floated button"]')
      .contains("SUBMIT");
  }

  /**
   * Returns the my plan button
   */
  getGoToMyPlanButton() {
    return cy
      .get('a[class*="ui button welcome-module--go-to-my-plan-button"]')
      .contains("Go to My Plan");
  }

  /**
   * Returns the Menstrual icon.
   */
  getMenstrualIcon() {
    return cy.get(
      'i[class*="pv-icon pv-shape-1 phases-length-module--phases-length-icon"]',
    );
  }

  /**
   * Returns the menstrual hypertext
   */
  getMenstrualTextLink() {
    return cy
      .get('a[class*="phases-length-module--phase-description"]')
      .contains("menstrual");
  }

  /**
   * Returns the follicular icon
   */
  getFollicularIcon() {
    return cy.get(
      'i[class*="pv-icon pv-shape-2 phases-length-module--phases-length-icon"]',
    );
  }

  /**
   * Returns the follicular hypertext
   */
  getFollicularTextLink() {
    return cy
      .get('a[class*="phases-length-module--phase-description"]')
      .contains("follicular");
  }

  /**
   * Returns the ovulatory icon
   */
  getOvulatoryIcon() {
    return cy.get(
      'i[class*="pv-icon pv-shape-3 phases-length-module--phases-length-icon"]',
    );
  }

  /**
   * Returns the ovulatory hypertext
   */
  getOvulatoryTextLink() {
    return cy
      .get('a[class*="phases-length-module--phase-description"]')
      .contains("ovulatory");
  }

  /**
   * Returns the luteal icon
   */
  getLutealIcon() {
    return cy.get(
      'i[class*="pv-icon pv-shape-4 phases-length-module--phases-length-icon"]',
    );
  }

  /**
   * Returns the luteal hypertext
   */
  getLutealTextLink() {
    return cy
      .get('a[class*="phases-length-module--phase-description"')
      .contains("luteal");
  }

  /**
   * Returns the Sources and Additional reading hyperlink
   */
  getAdditionalReadingLink() {
    return cy
      .get(
        'a[class*="bold upper display-flex align-items--center link-with-arrow pv-icon-after pv-arrow-right"]',
      )
      .contains("SOURCES AND ADDITIONAL READING");
  }

  /**
   * Returns the Video into Preview
   */
  getPreviewVideo() {
    return cy.get('video[class*="vjs-tech"]');
  }

  /**
   * Returns the Close Video into Preview button
   */
  getPreviewVideoCloseButton() {
    return cy.get('button[class*="vjs-close-button vjs-control vjs-button"]');
  }

  /**
   * Returns the button to play Preview video
   */
  getPreviewPlayButton() {
    return cy
      .get(
        '[class*="ui icon button details-header-overlay-module--play-button"]',
      )
      .contains("Preview");
  }
}
export default PhaseFunction;
