class StudioPage {
  /**
   * Navigates to the New York studio page.
   */
  visitPage() {
    return cy.visit("/pages/new-york");
  }

  /**
   * Returns the See Full Schedule button element.
   */
  getSeeFullScheduleButton() {
    return cy.get('a[href*="/pages/sign-up-for-a-class"]');
  }

  /**
   * Returns the Intro Offer tab element.
   */
  getIntroOfferTab() {
    return cy.get('span[class*="builder-tab-wrap"]').eq(0);
  }

  /**
   * Checks the heading test for the Intro Offer tab element.
   */
  getIntroOfferTabText() {
    return cy
      .get('span[class*="builder-tab-wrap"]')
      .eq(0)
      .contains("Intro Offer");
  }

  /**
   * Returns the Intro Offer tab Buy Now button element.
   */
  getIntroOfferTabBuyNowButton() {
    return cy.get('a[href*="/classic/ws"]').eq(0);
  }

  /**
   * Returns the Memberships tab element.
   */
  getMembershipsTab() {
    return cy.get('span[class*="builder-tab-wrap"]').eq(1);
  }

  /**
   * Checks the heading text for the Memberships tab.
   */
  getMembershipsTabText() {
    return cy
      .get('span[class*="builder-tab-wrap"]')
      .eq(1)
      .contains("Memberships");
  }

  /**
   * Returns the Memberships Tab Mini Burn cards Buy button element.
   */
  getMembershipsTabMiniBurnBuyButton() {
    return cy.get('a[href*="/classic/ws"]').eq(0);
  }

  /**
   * Returns the Memberships Tab Unlimited Burn Buy button element.
   */
  getMembershipsTabUnlimitedBurnBuyButton() {
    return cy.get('a[href*="/classic/ws"]').eq(1);
  }

  /**
   * Returns the Packages Tab element
   */
  getPackagesTab() {
    return cy.get('span[class*="builder-tab-wrap"]').eq(2);
  }

  /**
   * Checks the heading text of the Packages Tab element.
   */
  getPackagesTabText() {
    return cy.get('span[class*="builder-tab-wrap"]').eq(2).contains("Packages");
  }

  /**
   * Returns the Packages Tab Drop In Buy button element.
   */
  getPackagesTabDropInBuyButton() {
    return cy.get('a[href*="/classic/ws"]').eq(0);
  }

  /**
   * Returns the Packages Tab 5 Class Pack Buy button element.
   */
  getPackagesTab5ClassPackBuyButton() {
    return cy.get('a[href*="/classic/ws"]').eq(1);
  }

  /**
   * Returns the Packages Tab 10 Class Pack Buy button element.
   */
  getPackagesTab10ClassPackBuyButton() {
    return cy.get('a[href*="/classic/ws"]').eq(2);
  }

  /**
   * Returns the Personal Training Tab element.
   */
  getPersonalTrainingTab() {
    return cy.get('span[class*="builder-tab-wrap"]').eq(3);
  }

  /**
   * Confirms the Personal Training Tab element text.
   */
  getPersonalTrainingTabText() {
    return cy
      .get('span[class*="builder-tab-wrap"]')
      .eq(3)
      .contains("Personal Training");
  }

  /**
   * Returns the Private Training Person "Learn More" button element.
   */
  getPrivateTrainingInPersonLearnMoreButton() {
    return cy.get('a[href*="/pages/private-sessions"]').eq(0);
  }

  /**
   * Returns the Virtual Private Training "Learn More" button element.
   */
  getPrivateTrainingVirtualLearnMoreButton() {
    return cy.get('a[href*="/pages/private-sessions"]').eq(1);
  }

  /**
   * Returns The Foundation column element.
   */
  getTheFoundationColumn() {
    return cy.get('div[builder-id="builder-e5945a2d5f5d4636bcfd0f6ee39d3826"]');
  }

  /**
   * Verifies that The Foundation element heading text is accurate.
   */
  getTheFoundationColumnHeadingText() {
    return this.getTheFoundationColumn().contains("The Foundation");
  }

  /**
   * Returns The Foundation See Classes button element.
   */
  getTheFoundationSeeClassesButton() {
    return cy.get('a[href*="/pages/the-foundation-nyc"]').eq(0);
  }

  /**
   * Returns the Responsive version of The Foundation column element.
   */
  getResponsiveTheFoundationColumn() {
    return cy.get('div[builder-id="builder-20024e74c2c545ceacd6497df77b5193"]');
  }

  /**
   * Verifies the heading text of the Responsive version of The Foundation
   * column element.
   */
  getResponsiveTheFoundationColumnHeadingText() {
    return this.getResponsiveTheFoundationColumn().contains("The Foundation");
  }

  /**
   * Returns the Responsive See Classes button element.
   */
  getResponsiveTheFoundationSeeClassesButton() {
    return cy.get('a[href*="/pages/the-foundation-nyc"]').eq(1);
  }

  /**
   * Returns the Strength & Sculpt column element.
   */
  getStrengthAndSculptColumn() {
    return cy.get('div[builder-id="builder-2a09ac2232ec4ac09ee01cf88e9f964b"]');
  }

  /**
   * Verifies the heading text for Strength & Sculpt column element
   */
  getStrengthAndSculptColumnHeadingText() {
    return this.getStrengthAndSculptColumn().contains("Strength & Sculpt");
  }

  /**
   * Returns the Strength & Sculpt See Classes button element.
   */
  getStrengthAndSculptSeeClassesButton() {
    return cy.get('a[href*="/pages/strength-and-sculpt-nyc"]').eq(0);
  }

  /**
   * Returns the Responsive Strength & Sculpt column
   */
  getResponsiveStrengthAndSculptColumn() {
    return cy.get('div[builder-id="builder-6809331c01984ec98a931698e0bc558c"]');
  }

  /**
   * Verifies heading text of Responsive Strength & Sculpt column element
   */
  getResponsiveStrengthAndSculptColumnHeadingText() {
    return this.getResponsiveStrengthAndSculptColumn().contains(
      "Strength & Sculpt",
    );
  }

  /**
   * Returns the Responsive Strength & Sculpt See Classes button element.
   */
  getResponsiveStrengthAndSculptSeeClassesButton() {
    return cy.get('a[href*="/pages/strength-and-sculpt-nyc"]').eq(1);
  }

  /**
   * Returns the Cardio Burn column element.
   */
  getCardioBurnColumn() {
    return cy.get('div[builder-id="builder-3e3d726856ce4858ad77790ecb9d71cb"]');
  }

  /**
   * Verifies the heading text for Cardio Workout column element
   */
  getCardioBurnColumnHeadingText() {
    return this.getCardioBurnColumn().contains("Cardio Burn");
  }

  /**
   * Returns the Cardio Burn See Classes button element.
   */
  getCardioBurnSeeClassesButton() {
    return cy.get('a[href*="/pages/cardio-burn-nyc"]').eq(0);
  }

  /**
   * Returns the Responsive Cardio Burn column element
   */
  getResponsiveCardioBurnColumn() {
    return cy.get('div[builder-id="builder-a67c3a8927e349f1bc0c2c4627dc8101"]');
  }

  /**
   * Verifies the heading text of Responsive Cardio Burn column element
   */
  getResponsiveCardioBurnColumnHeadingText() {
    return this.getResponsiveCardioBurnColumn().contains("Cardio Burn");
  }

  /**
   * Returns the Responsive Cardio Burn See Classes button element.
   */
  getResponsiveCardioBurnSeeClassesButton() {
    return cy.get('a[href*="/pages/cardio-burn-nyc"]').eq(1);
  }

  /**
   * Returns the Recover & Stretch column element.
   */
  getRecoverAndStretchColumn() {
    return cy.get('div[builder-id="builder-c2e6f784ebd14cff90ca7be56e6d828e"]');
  }

  /**
   * Verifies the heading text for Recover & Stretch column element
   */
  getRecoverAndStretchColumnHeadingText() {
    return this.getRecoverAndStretchColumn().contains("Recover & Stretch");
  }

  /**
   * Returns the Recover & Stretch See Classes button element.
   */
  getRecoverAndStretchSeeClassesButton() {
    return cy.get('a[href*="/pages/recover-and-stretch-nyc"]').eq(0);
  }

  /**
   * Returns the Responsive Recover & Stretch column element.
   */
  getResponsiveRecoverAndStretchColumn() {
    return cy.get('div[builder-id="builder-7c15a01a47a040feafe407052f3e76c3"]');
  }

  /**
   * Verifies the heading text of Responsive Recover & Stretch column element.
   */

  getResponsiveRecoverAndStretchColumnHeadingText() {
    return this.getResponsiveRecoverAndStretchColumn().contains(
      "Recover & Stretch",
    );
  }

  getResponsiveRecoverAndStretchSeeClassesButton() {
    return cy.get('a[href*="/pages/recover-and-stretch-nyc"]').eq(1);
  }

  /**
   * Verifies the heading text for the New York City Studio.
   */
  getStudioNameText() {
    return cy.get("div > span > p").eq(28).contains("New York City Studio");
  }

  /**
   * Returns the Email To Book button element.
   */
  getEmailToBookButton() {
    return cy.get('a[href="mailto:nycstudio@pvolve.com"]').eq(1);
  }

  /**
   * Returns the first Trainer Card element.
   */
  getFirstTrainerCard() {
    return cy.get('a[href*="/pages/antonietta"]');
  }
}

export default StudioPage;
