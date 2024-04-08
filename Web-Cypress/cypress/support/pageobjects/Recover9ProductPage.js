class Recover9ProductPage {
  /**
   * Visits the Recover 9 product page
   */
  visitRecover9Page() {
    return cy.visit("/products/recover-9");
  }

  /**
   * Returns the All about your Recover 9.
   */
  getAllAboutRecover9Section() {
    return cy.get('div[data-component="products-description"]');
  }

  /**
   * Returns the Benefits section.
   */
  getBenefitsSection() {
    return cy.get('div[class="recover-9-benefits"]');
  }

  /**
   * Returns the Good Stuff section.
   */
  getGoodStuffSection() {
    return cy.get('div[class="good-stuff__container"]');
  }

  /**
   * Returns the first block image in Amino section.
   */
  getFirstBlockImageSection() {
    return cy.get('div[class*="recover-9__content"]').eq(0);
  }

  /**
   * Returns the second block image in Amino section.
   */
  getSecondBlockImageSection() {
    return cy.get('div[class*="recover-9__content"]').eq(1);
  }

  /**
   * Returns the third block image in Amino section.
   */
  getThirdBlockImageSection() {
    return cy.get('div[class*="recover-9__content"]').eq(2);
  }

  /**
   * Returns the fourth block image in Amino section.
   */
  getFourthBlockImageSection() {
    return cy.get('div[class*="recover-9__content"]').eq(3);
  }
}
export default Recover9ProductPage;
