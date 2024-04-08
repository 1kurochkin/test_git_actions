describe("baseUrl Test", () => {
  it("Determines if baseUrl defined in config is correct", () => {
    cy.viewport(1920, 1080);

    cy.visit("pages/method");
    cy.url().should("eq", Cypress.config().baseUrl + "/pages/method");
  });
});
