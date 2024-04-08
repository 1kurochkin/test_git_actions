import AllSeriesPage from "../../../../support/pageobjects/AllSeriesPage.js";

const allSeriesPage = new AllSeriesPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("All Series POM Selector Validation Test", function () {
  it("Validates all of the selectors in the All Series POM", function () {
    allSeriesPage.visitPage();

    cy.appHeaderGuest();

    allSeriesPage.getAllSeriesHeader().should("be.visible");

    let seriesCount = 0;

    /**
     * Checks each Series card and expects it to have:
     * An Image, a series level, a series length, a header, a description,
     * and an equipment description
     */
    allSeriesPage.getAllSeriesCards().each(($el) => {
      seriesCount = seriesCount + 1;

      if ($el.find("img") > 0) {
        //Checks if an image exists
      } else {
        cy.log(seriesCount);
        cy.wrap($el).find("img");
      }

      if ($el.find('p[class*="series-card-module--series-level"]')) {
        //Checks if series level exists
      } else {
        cy.log(seriesCount);
        cy.wrap($el).find('p[class*="series-card-module--series-level"]');
      }

      if ($el.find('div[class*="series-card-module--series-length"]')) {
        //Checks if series length exists
      } else {
        cy.log(seriesCount);
        cy.wrap($el).find('div[class*="series-card-module--series-length"]');
      }

      if ($el.find('div[class*="series-card-module--header"]')) {
        //Checks if the series header exists
      } else {
        cy.log(seriesCount);
        cy.wrap($el).find('div[class*="series-card-module--header"]');
      }

      if ($el.find('div[class*="series-card-module--description"] p')) {
        //Checks if the series description exists
      } else {
        cy.log(seriesCount);
        cy.wrap($el).find('div[class*="series-card-module--description"] p');
      }

      if ($el.find('div[class="description"] p')) {
        //Checks if the equipment description exists
      } else {
        cy.log(seriesCount);
        cy.wrap($el).find('div[class="description"] p');
      }
    });

    allSeriesPage.getNumberOfSeriesText().each(($el) => {
      const numberOfSeries = parseInt(
        $el
          .text()
          // match number, including spaces as number
          //  separators
          .match(/([\d\s]+|$)/)[1]
          // remove non-numeric characters
          .replace(/[^\d]/g, ""),
        // interpret as base-10
        10,
      );

      expect(seriesCount).to.equal(numberOfSeries);
    });

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - All Series Page Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        allSeriesPage.visitPage();

        cy.appHeaderGuest();

        allSeriesPage.getAllSeriesHeader().should("be.visible");

        let seriesCount = 0;

        /**
         * Checks each Series card and expects it to have:
         * An Image, a series level, a series length, a header,
         * a description, and an equipment description
         */
        allSeriesPage.getAllSeriesCards().each(($el) => {
          seriesCount = seriesCount + 1;

          if ($el.find("img") > 0) {
            //Checks if an image exists
          } else {
            cy.log(seriesCount);
            cy.wrap($el).find("img");
          }

          if ($el.find('p[class*="series-card-module--series-level"]')) {
            //Checks if series level exists
          } else {
            cy.log(seriesCount);
            cy.wrap($el).find('p[class*="series-card-module--series-level"]');
          }

          if ($el.find('div[class*="series-card-module--series-length"]')) {
            //Checks if series length exists
          } else {
            cy.log(seriesCount);
            cy.wrap($el).find(
              'div[class*="series-card-module--series-length"]',
            );
          }

          if ($el.find('div[class*="series-card-module--header"]')) {
            //Checks if the series header exists
          } else {
            cy.log(seriesCount);
            cy.wrap($el).find('div[class*="series-card-module--header"]');
          }

          if ($el.find('div[class*="series-card-module--description"] p')) {
            //Checks if the series description exists
          } else {
            cy.log(seriesCount);
            cy.wrap($el).find(
              'div[class*="series-card-module--description"] p',
            );
          }

          if ($el.find('div[class="description"] p')) {
            //Checks if the equipment description exists
          } else {
            cy.log(seriesCount);
            cy.wrap($el).find('div[class="description"] p');
          }
        });

        allSeriesPage.getNumberOfSeriesText().each(($el) => {
          const numberOfSeries = parseInt(
            $el
              .text()
              // match number, including spaces as number
              //  separators
              .match(/([\d\s]+|$)/)[1]
              // remove non-numeric characters
              .replace(/[^\d]/g, ""),
            // interpret as base-10
            10,
          );

          expect(seriesCount).to.equal(numberOfSeries);
        });
        //Footer
        cy.responsiveAppFooter();
      },
    );
  });
});
