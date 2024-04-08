import DigitalMembershipPage from "../../../../support/pageobjects/DigitalMembershipPage";

const digitalMembershipPage = new DigitalMembershipPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Digital Membership POM Selector Validation Test", function () {
  it("Validates all of the selectors in the digital membership POM", function () {
    digitalMembershipPage.visitDigitalMembershipPage();
    cy.waitForShopifyPageLoad();

    cy.shopifyHeaderGuest();

    const visibleSelectors = [
      digitalMembershipPage.get12monthAddToCartButton,
      digitalMembershipPage.get1monthAddToCartButton,
      digitalMembershipPage.get12monthMembershipLink,
      digitalMembershipPage.get1monthMembershipLink,
    ];
    cy.assertVisible(visibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Products Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        digitalMembershipPage.visitDigitalMembershipPage();
        cy.waitForShopifyPageLoad();

        cy.responsiveShopifyHeaderGuest();

        const visibleSelectors = [
          digitalMembershipPage.get12monthAddToCartButton,
          digitalMembershipPage.get1monthAddToCartButton,
          digitalMembershipPage.get12monthMembershipLink,
          digitalMembershipPage.get1monthMembershipLink,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
