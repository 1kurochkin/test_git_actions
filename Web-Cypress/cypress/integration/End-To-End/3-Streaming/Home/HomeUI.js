import { login } from "../../utils/utils";

describe("Home Page Should", function () {
  it("Show the expected UI if you are logged in", function () {
    login();
    cy.get(".MuiTypography-h2").should("contain.text", "So good to see you,");
    cy.get(
      ":nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-fy6nux",
    ).should("have.text", "No Equipment Workouts");
    cy.get(
      ":nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-14v62tf",
    ).should("be.visible");
    cy.get(
      ":nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .MuiTypography-body1",
    ).should(
      "have.text",
      "New to Pvolve? Check out these bodyweight workouts to get started.",
    );
    cy.get(
      ':nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .css-3budi0 > .MuiCardActions-root > .css-dlya71',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .MuiTypography-caption',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-876wat > .css-nj4ukz',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-876wat > .addDivider',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-7onj6b > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-7onj6b > [data-test="ClassCard-Favorite-Button"] > .MuiSvgIcon-root',
    ).should("be.visible");
    cy.get(
      ":nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-19hj0k5",
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-fy6nux",
    ).should("have.text", "Get Started With Pvolve Equipment");
    cy.get(
      ":nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-14v62tf",
    ).should("be.visible");
    cy.get(
      ":nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiButtonBase-root",
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiButtonBase-root",
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .MuiTypography-body1",
    ).should(
      "have.text",
      "Learn the fundamentals of the method with these workouts.",
    );
    cy.get(
      ':nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .css-3budi0 > .MuiCardActions-root > .css-dlya71',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .MuiTypography-caption',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-876wat > .css-nj4ukz',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-876wat > .addDivider',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-7onj6b > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-7onj6b > [data-test="ClassCard-Favorite-Button"] > .MuiSvgIcon-root',
    ).should("be.visible");
    cy.get(
      ":nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-fy6nux",
    ).should("have.text", "Follow This Week's Plan");
    cy.get(
      ":nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-14v62tf",
    ).should("be.visible");
    cy.get(
      ":nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .MuiTypography-body1",
    ).should("be.visible");
    cy.get(
      ":nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .MuiTypography-body1",
    ).should(
      "have.text",
      "Here's our trainer-curated program, straight from the calendar. Follow along every week – Monday through Sunday. ",
    );
    cy.get(
      ':nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .css-3budi0 > .MuiCardActions-root > .css-dlya71',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .MuiTypography-caption',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-876wat > .css-nj4ukz',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-876wat > .addDivider',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-7onj6b > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-7onj6b > [data-test="ClassCard-Favorite-Button"] > .MuiSvgIcon-root',
    ).should("be.visible");
    cy.get(
      ":nth-child(5) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .MuiTypography-root",
    ).should("have.text", "Jump into a Series");
    cy.get(
      ":nth-child(5) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiButtonBase-root",
    ).should("have.text", "Browse All Series");
    cy.get(
      ".firstSeriesColor > .MuiCardContent-root > .MuiTypography-h6",
    ).should("be.visible");
    cy.get(
      ".firstSeriesColor > .MuiCardContent-root > .MuiTypography-body1",
    ).should("be.visible");
    cy.get(
      ".firstSeriesColor > .MuiCardActions-root > .MuiButton-contained",
    ).should("have.text", "Start Series");
    cy.get(".firstSeriesColor > .MuiCardActions-root > .MuiButton-text").should(
      "have.text",
      "Learn more",
    );
    cy.get(".css-ifu0n > :nth-child(1) > .MuiCardMedia-root").should(
      "be.visible",
    );
    cy.get(
      ".secondSeriesColor > .MuiCardContent-root > .MuiTypography-h6",
    ).should("be.visible");
    cy.get(
      ".secondSeriesColor > .MuiCardContent-root > .MuiTypography-body1",
    ).should("be.visible");
    cy.get(
      ".secondSeriesColor > .MuiCardActions-root > .MuiButton-contained",
    ).should("have.text", "Start Series");
    cy.get(
      ".secondSeriesColor > .MuiCardActions-root > .MuiButton-text",
    ).should("have.text", "Learn more");
    cy.get(":nth-child(2) > .MuiCardMedia-root").should("be.visible");
    cy.get(
      ":nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-fy6nux",
    ).should("have.text", "Jen's Picks");
    cy.get(
      ":nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-14v62tf",
    ).should("be.visible");
    cy.get(
      ":nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .MuiTypography-body1",
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .css-3budi0 > .MuiCardActions-root > .css-dlya71',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .MuiTypography-caption',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-876wat > .css-nj4ukz',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-876wat > .addDivider',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-7onj6b > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-7onj6b > [data-test="ClassCard-Favorite-Button"] > .MuiSvgIcon-root',
    ).should("be.visible");
    cy.get(
      ":nth-child(6) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .css-1yczt55 > .css-1u2x6i6 > .css-19hj0k5",
    ).should("be.visible");
    cy.get(
      ".css-1kawqjx > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .MuiTypography-root",
    ).should("have.text", "Favorites");
  });
});
