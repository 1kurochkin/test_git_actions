class DigitalTrialPage {
  /**
   * Navigates to the digital trial page
   */
  visitPage() {
    return cy.visit("/pages/digital-trial");
  }

  /**
   * Returns the element for the email address input
   */
  getEmailAddressInput() {
    return cy.get('input[name="email"]');
  }

  /**
   * Returns the submit button element
   */
  getSubmitButton() {
    return cy.get('button[type="submit"]').contains("Get Started");
  }

  /**
   * Verifies the element with "Your Body Will" exists
   */
  getTitleText() {
    return cy.get("h1").contains("your body will");
  }

  /**
   * Verifies the element with "Thank You" exists
   */
  getThankYouText() {
    return cy.get("h2").contains("thank you");
  }

  /**
   * Returns the First FAQ accordian element
   */
  getFirstFAQAccordionTitle() {
    return cy.get("div[class*=accordion-container] button").contains("?").eq(0);
  }

  /**
   * Returns the First FAQ accordian button
   */
  getFirstFQAAccordianButton() {
    return cy.get("div[class*=accordion-container] button").eq(0);
  }
}

export default DigitalTrialPage;
