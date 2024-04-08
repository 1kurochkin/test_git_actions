import SignUpClassPage from "../../../support/pageobjects/SignUpClassPage";

const signUpClassPage = new SignUpClassPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Sign Up For Class Page Selector Validation Test", function () {
  it("Validates all of the Selectors on the Sign Up For Class Page", function () {
    signUpClassPage.visitPage();
    cy.waitForShopifyPageLoad();

    cy.shopifyHeaderGuest();

    const notVisibleSelectors = [
      //[BODY]
      signUpClassPage.getViewDetailsButton,
    ];
    cy.assertNotVisible(notVisibleSelectors);

    const visibleSelectors = [
      //[BODY]
      signUpClassPage.getSignUpHeader,
      signUpClassPage.getFindClassFilter,
      signUpClassPage.getMyAccountButton,
      signUpClassPage.getFullCalendarButton,
      signUpClassPage.getBookNowButton,
      signUpClassPage.getClassNameText,
      signUpClassPage.getClassStaffText,
      signUpClassPage.getDaySection,
      signUpClassPage.getClassTime,
    ];
    cy.assertVisible(visibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Sign Up for Class page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        signUpClassPage.visitPage();

        cy.waitForShopifyPageLoad();

        cy.responsiveShopifyHeaderGuest();

        const notVisibleSelectors = [
          //[BODY]
          signUpClassPage.getViewDetailsButton,
        ];
        cy.assertNotVisible(notVisibleSelectors);

        const visibleSelectors = [
          //[BODY]
          signUpClassPage.getSignUpHeader,
          signUpClassPage.getFindClassFilter,
          signUpClassPage.getMyAccountButton,
          signUpClassPage.getFullCalendarButton,
          signUpClassPage.getBookNowButton,
          signUpClassPage.getClassNameText,
          signUpClassPage.getClassStaffText,
          signUpClassPage.getDaySection,
          signUpClassPage.getClassTime,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
