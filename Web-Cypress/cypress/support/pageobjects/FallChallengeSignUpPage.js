class FallChallengeSignUpPage {
  /**
   *  Visits Fall Challenge Sign Up page.
   */
  visitPage() {
    return cy.visit(
      Cypress.env("APP_BASE_URL") + "/challenge/2022-fall-challenge",
    );
  }

  /**
   *  Returns top Hero header text.
   */
  getHeroHeaderText() {
    return cy.contains("Welcome to the Tone up for Fall Challenge!", {
      matchCase: false,
    });
  }

  /**
   *  Returns Sign Up button in the Hero section.
   */
  getHeroSignUpButton() {
    return cy.get("button").contains("Sign up", { matchCase: false });
  }

  /**
   *  Returns first accordion in the FAQ section.
   */
  getFirstFAQAccordionButton() {
    return cy
      .get('div[class*="Accordion"]')
      .contains("What can I expect from the challenge?", { matchCase: false });
  }

  /**
   *  Returns second accordion in the FAQ section.
   */
  getSecondFAQAccordionButton() {
    return cy
      .get('div[class*="Accordion"]')
      .contains("Who can join the challenge?", { matchCase: false });
  }

  /**
   *  Returns third accordion in the FAQ section.
   */
  getThirdFAQAccordionButton() {
    return cy
      .get('div[class*="Accordion"]')
      .contains("Which workouts count toward the challenge?", {
        matchCase: false,
      });
  }

  /**
   *  Returns fourth accordion in the FAQ section.
   */
  getFourthFAQAccordionButton() {
    return cy
      .get('div[class*="Accordion"]')
      .contains("Do I need equipment to do the challenge?", {
        matchCase: false,
      });
  }

  /**
   *  Returns fifth accordion in the FAQ section.
   */
  getFifthFAQAccordionButton() {
    return cy
      .get('div[class*="Accordion"]')
      .contains("What can I use the $50 reward on?", { matchCase: false });
  }

  /**
   *  Returns Trusted By text.
   */
  getTrustedByText() {
    return cy.contains("Trusted By", { matchCase: false });
  }
}
export default FallChallengeSignUpPage;
