class SignUpClassPage {
  /**
   *  Visits the page.
   */
  visitPage() {
    return cy.visit("/pages/sign-up-for-a-class");
  }

  /**
   *  Returns Sign up for a class Header.
   */
  getSignUpHeader() {
    return cy
      .get('div[class="page-template__header"]')
      .contains("Sign up for a class", { matchCase: false });
  }

  /**
   *  Returns Find a Class section filter.
   */
  getFindClassFilter() {
    return cy.get('button[class*="bw-header__filter-link"]');
  }

  /**
   *  Returns Find a Class section My Account Button.
   */
  getMyAccountButton() {
    return cy.get('button[class="bw-header__account-link"]');
  }

  /**
   *  Returns Day Section
   */
  getDaySection() {
    return cy.get('div[class="bw-widget__day"]');
  }

  /**
   *  Returns Find a Class section Full Calendar Button.
   */
  getFullCalendarButton() {
    return cy.get('button[class="bw-fullcal-button"]');
  }

  /**
   *  Returns Class Book Now Button.
   */
  getBookNowButton() {
    return cy.get('a[class="bw-widget__cta signup_now"]').eq(0);
  }

  /**
   *  Returns Class View Details Button.
   */
  getViewDetailsButton() {
    return cy.get('button[class*="bw-session__detail-link"]').eq(0);
  }

  /**
   *  Returns Class Name text.
   */
  getClassNameText() {
    return cy.get('div[class="bw-session__name"]').eq(0);
  }

  /**
   *  Returns Class Staff text.
   */
  getClassStaffText() {
    return cy.get('div[class="bw-session__staff"]').eq(0);
  }

  /**
   *  Returns Class Time.
   */
  getClassTime() {
    return cy.get('div[class="bw-session__time"]').eq(0);
  }
}
export default SignUpClassPage;
