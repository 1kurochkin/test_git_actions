import ClassesPanePage from "../../../../support/pageobjects/ClassesPanePage.js";

const classesPanePage = new ClassesPanePage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Classes Pane POM Selector Validation Test", function () {
  it("Validates all of the selectors in the /classes/detail POM", function () {
    classesPanePage.visitPage("20-min-booty-sculpt-159172");

    const visibleSelectors = [
      classesPanePage.getClosePaneButton,
      classesPanePage.getDurationButton,
      classesPanePage.getFavoriteButton,
      classesPanePage.getClassNameHeader,
      classesPanePage.getAboutSectionHeader,
      classesPanePage.getClassBreakdownSectionHeader,
      classesPanePage.getPacingSectionHeader,
      classesPanePage.getEquipmentSectionHeader,
    ];
    cy.assertVisible(visibleSelectors);
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Classes Pane Page POM Validation for " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        classesPanePage.visitPage("20-min-booty-sculpt-159172");

        if (size.width > 599) {
          const visibleSelectors = [
            classesPanePage.getClosePaneButton,
            classesPanePage.getDurationButton,
            classesPanePage.getFavoriteButton,
            classesPanePage.getClassNameHeader,
            classesPanePage.getAboutSectionHeader,
            classesPanePage.getClassBreakdownSectionHeader,
            classesPanePage.getPacingSectionHeader,
            classesPanePage.getEquipmentSectionHeader,
          ];
          cy.assertVisible(visibleSelectors);
        } else {
          const existSelectors = [
            classesPanePage.getClosePaneButton,
            classesPanePage.getDurationButton,
            classesPanePage.getFavoriteButton,
            classesPanePage.getResponsiveClassNameHeader,
            classesPanePage.getAboutSectionHeader,
            classesPanePage.getClassBreakdownSectionHeader,
            classesPanePage.getPacingSectionHeader,
            classesPanePage.getEquipmentSectionHeader,
          ];
          cy.assertExist(existSelectors);
        }
      },
    );
  });
});
