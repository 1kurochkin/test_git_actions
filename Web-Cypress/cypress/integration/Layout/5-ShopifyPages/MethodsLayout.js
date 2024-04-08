import MethodsPage from "../../../support/pageobjects/MethodsPage.js";

const methodsPage = new MethodsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Methods POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Methods POM", function () {
    methodsPage.visitPage();
    cy.waitForShopifyPageLoad();

    cy.shopifyHeaderGuest();

    const visibleSelectors = [
      methodsPage.getHeroImageHeaderText,
      methodsPage.getHeroTakeQuizButton,
      methodsPage.getFirstSectionHeaderText,
      methodsPage.getFirstSectionVideo,
      methodsPage.getSecondSectionHeaderText,
      methodsPage.getSecondSectionTakeQuizButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Methods page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        methodsPage.visitPage();

        cy.waitForShopifyPageLoad();

        cy.responsiveShopifyHeaderGuest();

        const visibleSelectors = [
          methodsPage.getHeroImageHeaderText,
          methodsPage.getHeroTakeQuizButton,
          methodsPage.getFirstSectionHeaderText,
          methodsPage.getFirstSectionVideo,
          methodsPage.getSecondSectionHeaderText,
          methodsPage.getSecondSectionTakeQuizButton,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
