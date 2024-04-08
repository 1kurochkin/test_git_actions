class PostSeriesFeedbackPage {
  /**
   * Returns the close button
   */
  getCloseButton() {
    return cy.get('div[class*="skip-option"] i[class*="pv-close"]');
  }

  /**
   * Returns the Share Feedback button
   */
  getShareFeedbackButton() {
    return cy
      .get('button[class*="ui big primary button"]')
      .contains("Share feedback (1 Min)");
  }

  /**
   * Returns the Next button
   */
  getNextButton() {
    return cy.get('button[class*="ui primary button"]').contains("Next");
  }

  /**
   * Returns the Back button
   */
  getBackButton() {
    return cy.get('button[class*="ui primary button"]').contains("Back");
  }

  /**
   * Returns the Agree option
   *
   * Available for Questions 1-3
   */
  getAgreeLabel() {
    return cy.get(
      'div[class*="selection-question"] label[aria-label*="Agree"]',
    );
  }

  /**
   * Returns the Undecided option
   *
   * Available for Questions 1-3
   */
  getUndecidedLabel() {
    return cy.get(
      'div[class*="selection-question"] label[aria-label*="Undecided"]',
    );
  }

  /**
   * Returns the Disagree option
   *
   * Available for Questions 1-3
   */
  getDisagreeLabel() {
    return cy.get(
      'div[class*="selection-question"] label[aria-label*="Disagree"]',
    );
  }

  /**
   * Returns the Too easy option
   *
   * Available for Question 4
   */
  getTooEasyLabel() {
    return cy.get(
      'div[class*="selection-question"] label[aria-label*="Too easy"]',
    );
  }

  /**
   * Returns the Right amount of challenge option
   *
   * Available for Question 4
   */
  getRightAmountLabel() {
    return cy.get(
      'div[class*="selection-question"] label[aria-label*="Right amount of challenge"]',
    );
  }

  /**
   * Returns the Too Challenging option
   *
   * Available for Question 4
   */
  getTooChallengingLabel() {
    return cy.get(
      'div[class*="selection-question"] label[aria-label*="Too challenging"]',
    );
  }

  /**
   * Returns the Text area input
   *
   * Available for Question 5
   */
  getTextAreaInput() {
    return cy.get('div[class*="input-question"] textarea');
  }

  /**
   * Returns the Done button
   */
  getDoneButton() {
    return cy.get('button[class*="ui primary button"]').contains("Done");
  }
}
export default PostSeriesFeedbackPage;
