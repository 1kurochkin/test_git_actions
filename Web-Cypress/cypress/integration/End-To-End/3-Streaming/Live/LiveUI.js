import LivePage from "../../../../support/pageobjects/LivePage";

const livePage = new LivePage();

describe("Live Page Should", function () {
  it("Show the expected UI for a non logged in user", function () {
    livePage.visitPage();

    cy.get(".css-n2pas3 > .MuiBox-root").should(
      "have.text",
      "LIVE VIRTUAL STUDIOBook a class to experience the energy of Live Virtual Studio.",
    );
    cy.get(".MuiContainer-root > .MuiTypography-h6").should("be.visible");
    cy.get(".css-5ddogt").should("be.visible");
    cy.get(".css-69i1ev > :nth-child(2)").should("be.visible");
    cy.get(".css-69i1ev > :nth-child(4)").should("be.visible");
    cy.get(".css-69i1ev > :nth-child(5)").should("be.visible");
    cy.get(".css-69i1ev > :nth-child(6)").should("be.visible");
    cy.get(".css-69i1ev > :nth-child(7)").should("be.visible");
    cy.get(".css-69i1ev > :nth-child(8)").should("be.visible");
    cy.get('[data-testid="NavigateNextIcon"]').should("be.visible");
    cy.get('[data-testid="InfoRoundedIcon"] > path').should("be.visible");
    cy.get(".css-cdzwmt > .MuiBox-root > .MuiTypography-root").should(
      "contain.text",
      "Times are in",
    );
    cy.get(".css-178fv7b > .MuiTypography-root").should("be.visible");
    cy.get(":nth-child(3) > .css-1rsyd76 > .MuiTypography-h5").should(
      "be.visible",
    );
    cy.get(":nth-child(3) > .css-1rsyd76 > .MuiTypography-h6").should(
      "be.visible",
    );
    cy.get(":nth-child(3) > .css-1rsyd76 > .MuiTypography-h6").should(
      "contain.text",
      "MIN",
    );
    cy.get(":nth-child(3) > .css-xb7w7w > .css-uiae4c").should("be.visible");
    cy.get(
      ":nth-child(3) > .css-xb7w7w > .css-18mkz5n > .css-1qzmbqx > .css-jl2pm3 > .MuiTypography-h5",
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > .css-xb7w7w > .css-18mkz5n > .css-1qzmbqx > .css-gwuuzz > .MuiTypography-subtitle1",
    ).should("have.text", "Equipment:");
    cy.get(
      ":nth-child(3) > .css-xb7w7w > .css-18mkz5n > .css-1qzmbqx > .css-jl2pm3 > .MuiTypography-h6",
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > .css-xb7w7w > .css-18mkz5n > .css-1qzmbqx > .css-gwuuzz > .MuiTypography-body1",
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > .css-xb7w7w > .css-18mkz5n > .css-1qzmbqx > .MuiButtonBase-root",
    ).should("have.text", "Free Trial");
    cy.get(":nth-child(3) > .css-xb7w7w > .css-18mkz5n > .css-1o51alk").should(
      "contain.text",
      "Description:",
    );
  });
});
