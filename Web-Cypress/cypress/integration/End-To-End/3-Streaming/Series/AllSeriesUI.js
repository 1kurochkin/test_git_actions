import SeriesPage from "../../../../support/pageobjects/SeriesPage";

const seriesPage = new SeriesPage();

describe("All Series Page Should", function () {
  it("Show the expected UI for a non logged in user", function () {
    seriesPage.visitPage();
    cy.get(".css-1qc1zbs > .MuiButtonBase-root").click({ force: true });

    cy.get(".css-d9b5d3 > .MuiTypography-root").should(
      "have.text",
      "All Series",
    );
    cy.get(
      ':nth-child(1) > [data-test="Classes-SeriesCard"] > .css-1xg2rii > .MuiCardMedia-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-tu9byl > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("contain.text", "classes");
    cy.get(
      ':nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .css-1gv0ski',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-body1',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .css-1rooq90 > b',
    ).should("have.text", "Equipment: ");
    cy.get(
      ':nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .css-1rooq90',
    ).should("be.visible");
    cy.get(".MuiGrid-container > :nth-child(2)").should("be.visible");
    cy.get(".MuiGrid-container > :nth-child(3)").should("be.visible");
    cy.get(".MuiGrid-container > :nth-child(4)").should("be.visible");
    cy.get(".MuiGrid-container > :nth-child(5)").should("be.visible");
    cy.get(".MuiGrid-container > :nth-child(6)").should("be.visible");
  });
});
