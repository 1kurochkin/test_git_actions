describe("APP_BASE_URL Test", () => {
  it("Determines if APP_BASE_URL defined in config is correct", () => {
    cy.viewport(1920, 1080);

    cy.visit(Cypress.env("APP_BASE_URL") + "/continue");
    cy.url().should("eq", Cypress.env("APP_BASE_URL") + "/continue/");
  });
});
