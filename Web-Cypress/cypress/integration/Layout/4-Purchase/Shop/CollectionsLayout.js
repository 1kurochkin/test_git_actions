import CollectionsPage from "../../../../support/pageobjects/CollectionsPage.js";

const collectionsPage = new CollectionsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Collections POM Selector Validation Test", function () {
  it("Validates all of the selectors in the collections POM", function () {
    collectionsPage.visitEquipmentPage();

    cy.shopifyHeaderGuest();

    const visibleSelectors = [
      //[BODY] Product Items
      collectionsPage.getBodyProductOne,
      collectionsPage.getBodyProductTwo,
      collectionsPage.getBodyProductThree,
      collectionsPage.getBodyProductFour,
      collectionsPage.getBodyProductFive,
      collectionsPage.getBodyProductSix,
      collectionsPage.getBodyProductSeven,
      collectionsPage.getBodyProductEight,
      collectionsPage.getBodyProductNine,
      collectionsPage.getBodyProductTen,
      collectionsPage.getBodyProductEleven,
      collectionsPage.getBodyProductTwelve,
      collectionsPage.getBodyProductThirteen,
      collectionsPage.getBodyProductFourteen,
      collectionsPage.getBodyProductFifteen,
      collectionsPage.getBodyProductSixteen,

      //[BODY] Product Items
      collectionsPage.getBodyProductGridPreviousPageButton,
      collectionsPage.getBodyProductGridNextPageButton,
    ];
    cy.assertVisible(visibleSelectors);

    //Sort drop-down menu validation test
    collectionsPage
      .getBodySortDropDownMenu()
      .select("Price: Low to High", { force: true });
    collectionsPage.getBodySortDropDownMenu().contains("Price: Low to High");

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Collections Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        collectionsPage.visitEquipmentPage();

        cy.responsiveShopifyHeaderGuest();

        const visibleSelectors = [
          //[BODY] Product Items
          collectionsPage.getBodyProductOne,
          collectionsPage.getBodyProductTwo,
          collectionsPage.getBodyProductThree,
          collectionsPage.getBodyProductFour,
          collectionsPage.getBodyProductFive,
          collectionsPage.getBodyProductSix,
          collectionsPage.getBodyProductSeven,
          collectionsPage.getBodyProductEight,
          collectionsPage.getBodyProductNine,
          collectionsPage.getBodyProductTen,
          collectionsPage.getBodyProductEleven,
          collectionsPage.getBodyProductTwelve,
          collectionsPage.getBodyProductThirteen,
          collectionsPage.getBodyProductFourteen,
          collectionsPage.getBodyProductFifteen,
          collectionsPage.getBodyProductSixteen,

          //[BODY] Product Items
          collectionsPage.getBodyProductGridPreviousPageButton,
          collectionsPage.getBodyProductGridNextPageButton,
        ];
        cy.assertVisible(visibleSelectors);

        //Sort drop-down menu validation test
        collectionsPage
          .getBodySortDropDownMenu()
          .select("Price: Low to High", { force: true });
        collectionsPage
          .getBodySortDropDownMenu()
          .contains("Price: Low to High");

        cy.responsiveShopifyFooter();
      },
    );
  });
});
