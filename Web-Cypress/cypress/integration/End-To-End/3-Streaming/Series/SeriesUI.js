import SeriesPage from "../../../../support/pageobjects/SeriesPage";

const seriesPage = new SeriesPage();

describe("Series Page Should", function () {
  it("Show the expected UI for a non logged in user", function () {
    seriesPage.visitPage();

    cy.get(".css-d9b5d3 > .MuiTypography-root").should("have.text", "Series");
    cy.get(".MuiCardContent-root > .MuiTypography-overline").should(
      "be.visible",
    );
    cy.get(".MuiTypography-h3").should("be.visible");
    cy.get(".MuiCardContent-root > .MuiTypography-h5").should("be.visible");
    cy.get(".MuiCardContent-root > .MuiButtonBase-root").should(
      "have.text",
      "Learn more",
    );
    cy.get(".css-1n46ktv > .MuiCardMedia-root").should("be.visible");
    cy.get(
      ":nth-child(2) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-fy6nux",
    ).should("have.text", "Get Started");
    cy.get(
      ":nth-child(2) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .MuiTypography-body1",
    ).should(
      "have.text",
      "Whether it’s your first time here, or you want to get back to basics, you’re in the right place.",
    );
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .css-1xg2rii > .MuiCardMedia-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-tu9byl > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("contain.text", "classes");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > [alt="Trainer 0"]',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-body1',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .css-1xg2rii > .MuiCardMedia-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-tu9byl > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("contain.text", "classes");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > [alt="Trainer 0"]',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-body1',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .MuiTypography-root > b',
    ).should("have.text", "Equipment: ");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .css-1xg2rii > .MuiCardMedia-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-tu9byl > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("contain.text", "classes");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > [alt="Trainer 0"]',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-body1',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .MuiTypography-root > b',
    ).should("have.text", "Equipment: ");
    cy.get(
      ':nth-child(2) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .MuiTypography-root',
    ).should("be.visible");
    cy.get(":nth-child(2) > .css-1yczt55 > .css-1u2x6i6 > .css-19hj0k5").should(
      "be.visible",
    );
    cy.get(
      ":nth-child(3) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-fy6nux",
    ).should("have.text", "Women's Wellness");
    cy.get(
      ":nth-child(3) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-14v62tf",
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .MuiTypography-body1",
    ).should(
      "have.text",
      "No two people—or their bodies—are the same. We have something for every-body. ",
    );
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .css-1xg2rii > .MuiCardMedia-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-tu9byl > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("contain.text", "classes");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > [alt="Trainer 0"]',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-body1',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .css-1rooq90 > b',
    ).should("have.text", "Equipment: ");
    cy.get(
      ":nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid" +
        '-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .css-1rooq90',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-tu9byl > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("contain.text", "classes");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .css-1gv0ski',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-body1',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .css-1rooq90 > b',
    ).should("have.text", "Equipment: ");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .css-1rooq90',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-tu9byl > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1j22doa',
    ).should("have.text", "25 - 39 min | 22 classes | 4 weeks");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > [alt="Trainer 0"]',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .MuiTypography-body2',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-body1',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .css-1rooq90',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .css-1rooq90 > b',
    ).should("have.text", "Equipment: ");
    cy.get(
      ":nth-child(4) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-fy6nux",
    ).should("have.text", "Focused Programs");
    cy.get(
      ":nth-child(4) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .MuiTypography-body1",
    ).should(
      "have.text",
      "Looking for a focused burn? Need some extra recovery? On the go? We have a series for you. ",
    );
    cy.get(":nth-child(4) > .css-1yczt55 > .css-1u2x6i6 > .css-19hj0k5").should(
      "be.visible",
    );
    cy.get(":nth-child(3) > .css-1yczt55 > .css-1u2x6i6 > .css-19hj0k5").should(
      "be.visible",
    );
    cy.get(
      ':nth-child(4) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .css-1xg2rii > .MuiCardMedia-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-tu9byl > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("contain.text", "classes");
    cy.get(
      ':nth-child(4) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .css-1gv0ski',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-body1',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .css-1rooq90 > b',
    ).should("have.text", "Equipment: ");
    cy.get(
      ':nth-child(4) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .css-1rooq90',
    ).should("be.visible");
    cy.get(
      ":nth-child(4) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2)",
    ).should("be.visible");
    cy.get(
      ":nth-child(4) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3)",
    ).should("be.visible");
    cy.get(":nth-child(4) > .css-1yczt55 > .css-1u2x6i6 > .css-19hj0k5").should(
      "be.visible",
    );
    cy.get(
      ":nth-child(5) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-fy6nux",
    ).should("have.text", "Full Body Strength");
    cy.get(
      ":nth-child(5) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-14v62tf",
    ).should("be.visible");
    cy.get(":nth-child(5) > .css-1yczt55 > .css-1u2x6i6 > .css-19hj0k5").should(
      "be.visible",
    );
    cy.get(
      ":nth-child(5) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .MuiTypography-body1",
    ).should("have.text", "Start building full body strength today.");
    cy.get(
      ':nth-child(5) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .css-1xg2rii > .MuiCardMedia-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(5) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-tu9byl > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(5) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("contain.text", "classes");
    cy.get(
      ':nth-child(5) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > [alt="Trainer 0"]',
    ).should("be.visible");
    cy.get(
      ':nth-child(5) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(5) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-body1',
    ).should("be.visible");
    cy.get(
      ':nth-child(5) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .MuiTypography-root > b',
    ).should("have.text", "Equipment: ");
    cy.get(
      ':nth-child(5) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ":nth-child(5) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2)",
    ).should("be.visible");
    cy.get(
      ":nth-child(5) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3)",
    ).should("be.visible");
    cy.get(
      ":nth-child(6) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-fy6nux",
    ).should("have.text", "Movement Therapy");
    cy.get(
      ":nth-child(6) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .css-1uzh0z > .MuiBox-root > .css-14v62tf",
    ).should("be.visible");
    cy.get(
      ":nth-child(6) > .css-1yczt55 > .css-1u2x6i6 > .css-6ul0ll > .MuiTypography-body1",
    ).should(
      "have.text",
      "Physical therapy-inspired workouts, co-created with clinicians, to help manage sensitivities, injuries and pain.",
    );
    cy.get(":nth-child(6) > .css-1yczt55 > .css-1u2x6i6 > .css-19hj0k5").should(
      "be.visible",
    );
    cy.get(
      ':nth-child(6) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .css-1xg2rii > .MuiCardMedia-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-tu9byl > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("contain.text", "classes");
    cy.get(
      ':nth-child(6) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .css-1gv0ski',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-1t81pc5 > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .MuiTypography-body1',
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .MuiTypography-root > b',
    ).should("have.text", "Equipment: ");
    cy.get(
      ':nth-child(6) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(1) > [data-test="Classes-SeriesCard"] > .MuiCardContent-root > .css-ywxmld > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ":nth-child(6) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(2)",
    ).should("be.visible");
    cy.get(
      ":nth-child(6) > .css-1yczt55 > .css-q66yov > .MuiGrid-container > :nth-child(3)",
    ).should("be.visible");
    cy.get(".css-1qc1zbs > .MuiButtonBase-root").should(
      "have.text",
      "View All Series A-Z",
    );
  });
});
