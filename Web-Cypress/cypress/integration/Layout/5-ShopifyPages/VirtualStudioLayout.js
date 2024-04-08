import VirtualStudioPage from "../../../support/pageobjects/VirtualStudioPage.js";

const virtualStudioPage = new VirtualStudioPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Virtual Studio Classes POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Virtual Studio Classes POM", function () {
    virtualStudioPage.visitPage();

    cy.shopifyHeaderGuest();

    const visibleSelectors = [
      virtualStudioPage.getSeeFullScheduleButton,
      virtualStudioPage.getBookNowButton,
      virtualStudioPage.getGetAccessButton,
      virtualStudioPage.getHaveQuestionsMailToEmailLink,
      virtualStudioPage.getDesktopFilterButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.scrollTo("bottom");

    const visibleSelectorsAfterScroll = [
      virtualStudioPage.getDatePicker,
      virtualStudioPage.getVirtualClassListItem2,
      virtualStudioPage.getVirtualClassTimeFrame,
      virtualStudioPage.getVirtualClassSessionName,
      virtualStudioPage.getVirtualClassSessionStaff,
      virtualStudioPage.getVirtualClassBookButton,
      virtualStudioPage.getVirtualClassViewDetailsButton,
    ];
    cy.assertVisible(visibleSelectorsAfterScroll);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Virtual Studio Classes Layout Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        virtualStudioPage.visitPage();

        cy.responsiveShopifyHeaderGuest();

        const visibleSelectors = [
          virtualStudioPage.getSeeFullScheduleButton,
          virtualStudioPage.getBookNowButton,
          virtualStudioPage.getGetAccessButton,
          virtualStudioPage.getHaveQuestionsMailToEmailLink,
          virtualStudioPage.getMobileFilterButton,
        ];
        cy.assertVisible(visibleSelectors);

        cy.scrollTo("bottom");

        const visibleSelectorsAfterScroll = [
          virtualStudioPage.getCalendarTable,
          virtualStudioPage.getVirtualClassListItem2,
          virtualStudioPage.getVirtualClassTimeFrame,
          virtualStudioPage.getVirtualClassSessionName,
          virtualStudioPage.getVirtualClassSessionStaff,
          virtualStudioPage.getVirtualClassBookButton,
          virtualStudioPage.getVirtualClassViewDetailsButton,
        ];
        cy.assertVisible(visibleSelectorsAfterScroll);

        const notVisibleSelectors = [
          virtualStudioPage.getDatePicker,
          virtualStudioPage.getDesktopFilterButton,
        ];
        cy.assertNotVisible(notVisibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
