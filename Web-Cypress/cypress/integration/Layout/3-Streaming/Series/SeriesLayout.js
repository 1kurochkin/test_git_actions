import SeriesPage from "../../../../support/pageobjects/SeriesPage.js";

const seriesPage = new SeriesPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Series POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Series POM", function () {
    seriesPage.visitPage();
    cy.wait(1500);

    cy.appHeaderGuest();

    const visibleSelectors = [
      // Highlighted Series
      seriesPage.getHighlightedSeriesContainer,
      seriesPage.getHighlightedSeriesCarouselNextButton,
      seriesPage.getHighlightedSeriesCarouselBackButton,
      //Body
      seriesPage.getBodyFirstCategoryTitleText,
      seriesPage.getBodyFirstCategoryCarouselBackButton,
      seriesPage.getBodyFirstCategoryCarouselNextButton,
      seriesPage.getBodyFirstCategoryFirstSeriesLink,
      seriesPage.getBodyFirstCategorySecondSeriesLink,
      seriesPage.getBodyFirstCategoryThirdSeriesLink,
      seriesPage.getBodyFirstCategorySeeAllLink,

      seriesPage.getBodySecondCategoryTitleText,
      seriesPage.getBodySecondCategoryCarouselBackButton,
      seriesPage.getBodySecondCategoryCarouselNextButton,
      seriesPage.getBodySecondCategoryFirstSeriesLink,
      seriesPage.getBodySecondCategorySecondSeriesLink,
      seriesPage.getBodySecondCategoryThirdSeriesLink,
      seriesPage.getBodySecondCategorySeeAllLink,

      seriesPage.getBodyThirdCategoryTitleText,
      seriesPage.getBodyThirdCategoryCarouselBackButton,
      seriesPage.getBodyThirdCategoryCarouselNextButton,
      seriesPage.getBodyThirdCategoryFirstSeriesLink,
      seriesPage.getBodyThirdCategorySecondSeriesLink,
      seriesPage.getBodyThirdCategoryThirdSeriesLink,
      seriesPage.getBodyThirdCategorySeeAllLink,

      seriesPage.getBodySeeAllSeriesAZLink,
    ];
    cy.assertVisible(visibleSelectors);

    seriesPage.getHighlightedSeriesTitleText().eq(0).should("be.visible");

    cy.get("body").then(($body) => {
      if ($body.find('li[tabindex="0"] video').length > 0) {
        seriesPage.getHighlightedSeriesVideo().eq(0).should("be.visible");
      } else {
        seriesPage.getHighlightedSeriesImage().eq(0).should("be.visible");
      }
    });
    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Series Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        seriesPage.visitPage();
        cy.wait(1500);

        cy.appHeaderGuest();

        const seriesVisibleSelectors = [
          // Highlighted Series
          seriesPage.getHighlightedSeriesContainer,
          seriesPage.getHighlightedSeriesCarouselNextButton,
          seriesPage.getHighlightedSeriesCarouselBackButton,
          //Body
          seriesPage.getBodyFirstCategoryTitleText,
          seriesPage.getBodyFirstCategoryCarouselBackButton,
          seriesPage.getBodyFirstCategoryCarouselNextButton,
          seriesPage.getBodyFirstCategoryFirstSeriesLink,
          seriesPage.getBodyFirstCategorySeeAllLink,

          seriesPage.getBodySecondCategoryTitleText,
          seriesPage.getBodySecondCategoryCarouselBackButton,
          seriesPage.getBodySecondCategoryCarouselNextButton,
          seriesPage.getBodySecondCategoryFirstSeriesLink,
          seriesPage.getBodySecondCategorySeeAllLink,

          seriesPage.getBodyThirdCategoryTitleText,
          seriesPage.getBodyThirdCategoryCarouselBackButton,
          seriesPage.getBodyThirdCategoryCarouselNextButton,
          seriesPage.getBodyThirdCategoryFirstSeriesLink,
          seriesPage.getBodyThirdCategorySeeAllLink,

          seriesPage.getBodySeeAllSeriesAZLink,
        ];
        cy.assertVisible(seriesVisibleSelectors);

        seriesPage.getHighlightedSeriesTitleText().eq(0).should("be.visible");

        cy.get("body").then(($body) => {
          if ($body.find('li[tabindex="0"] video').length > 0) {
            seriesPage.getHighlightedSeriesVideo().eq(0).should("be.visible");
          } else {
            seriesPage.getHighlightedSeriesImage().eq(0).should("be.visible");
          }
        });

        const seriesExistsSelectors = [
          seriesPage.getBodyFirstCategorySecondSeriesLink,
          seriesPage.getBodyFirstCategoryThirdSeriesLink,
          seriesPage.getBodySecondCategorySecondSeriesLink,
          seriesPage.getBodySecondCategoryThirdSeriesLink,
          seriesPage.getBodyThirdCategorySecondSeriesLink,
          seriesPage.getBodyThirdCategoryThirdSeriesLink,
        ];
        cy.assertExist(seriesExistsSelectors);

        //Footer
        cy.responsiveAppFooter();
      },
    );
  });
});
