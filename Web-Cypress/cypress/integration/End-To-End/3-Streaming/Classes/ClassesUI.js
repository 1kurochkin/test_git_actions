import ClassesPage from "../../../../support/pageobjects/ClassesPage";

const classesPage = new ClassesPage();

describe("Classes Page Should", function () {
  it("Show the expected UI and allow the user to filter by category, by different filters and by name", function () {
    classesPage.visitPage();

    cy.get('[data-test="WorkoutCategory-AllClasses-Button"]').should(
      "have.text",
      "All Classes",
    );
    cy.get('[data-test="WorkoutCategory-GetStarted-Button"]').should(
      "have.text",
      "Get Started",
    );
    cy.get('[data-test="WorkoutCategory-StrengthSculpt-Button"]').should(
      "have.text",
      "Strength & Sculpt",
    );
    cy.get(
      '[data-test="WorkoutCategory-ProgressiveWeightTraining-Button"]',
    ).should("have.text", "Progressive Weight Training");
    cy.get('[data-test="WorkoutCategory-CardioBurn-Button"]').should(
      "have.text",
      "Cardio Burn",
    );
    cy.get('[data-test="WorkoutCategory-MatDefinition-Button"]').should(
      "have.text",
      "Mat Definition",
    );
    cy.get('[data-test="WorkoutCategory-RecoverStretch-Button"]').should(
      "have.text",
      "Recover & Stretch",
    );
    cy.get('[data-test="WorkoutCategory-MovementTherapy-Button"]').should(
      "have.text",
      "Movement Therapy",
    );
    cy.get('[data-test="WorkoutCategory-Meditation-Button"]').should(
      "have.text",
      "Meditation",
    );
    cy.get(".css-r32ezy > .MuiTypography-root").should(
      "have.text",
      "All Classes",
    );
    cy.get('[data-test="Classes-Filter-Button"]').should("be.enabled");
    cy.get(".css-he5eba > .MuiFormControl-root > .MuiInputBase-root").should(
      "be.visible",
    );
    cy.get(".css-1vbvadk").should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-ClassCard"] > .css-3budi0 > .MuiCardActions-root > .css-1omog99',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .MuiTypography-caption',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .MuiTypography-subtitle1',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-876wat > .css-nj4ukz',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-876wat > .addDivider',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-7onj6b > .MuiTypography-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(1) > [data-test="Classes-ClassCard"] > .MuiCardContent-root > .css-7onj6b > [data-test="ClassCard-Favorite-Button"] > .MuiSvgIcon-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > [data-test="Classes-ClassCard"] > .css-3budi0 > .MuiCardActions-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > [data-test="Classes-ClassCard"] > .css-3budi0 > .MuiCardActions-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > [data-test="Classes-ClassCard"] > .css-3budi0 > .MuiCardActions-root',
    ).should("be.visible");
    cy.get(
      ':nth-child(5) > [data-test="Classes-ClassCard"] > .css-3budi0 > .MuiCardActions-root',
    ).should("be.visible");
    cy.get('[data-test="WorkoutCategory-GetStarted-Button"]').click({
      force: true,
    });
    cy.get(".MuiTypography-h4").should("have.text", "Get Started");
    cy.get(".css-r32ezy > .MuiTypography-body1").should(
      "have.text",
      "Master the Method fundamentals and perfect your form for the strongest results possible. ",
    );
    cy.get('[data-test="WorkoutCategory-StrengthSculpt-Button"]').click({
      force: true,
    });
    cy.get(".MuiTypography-h4").should("have.text", "Strength & Sculpt");
    cy.get(".css-r32ezy > .MuiTypography-body1").should(
      "have.text",
      "Feel the burn in our signature class that focuses on control, resistance and the mind to body connection.",
    );
    cy.get(
      '[data-test="WorkoutCategory-ProgressiveWeightTraining-Button"]',
    ).click({ force: true });
    cy.get(".MuiTypography-h4").should(
      "have.text",
      "Progressive Weight Training",
    );
    cy.get(".css-r32ezy > .MuiTypography-body1").should(
      "have.text",
      "Build strength with a mix of weight training and dynamic, functional movement",
    );
    cy.get('[data-test="WorkoutCategory-CardioBurn-Button"]').click({
      force: true,
    });
    cy.get(".MuiTypography-h4").should("have.text", "Cardio Burn");
    cy.get(".css-r32ezy > .MuiTypography-body1").should(
      "have.text",
      "Bring on the heat with increased reps, quicker tempo and high-energy moves. Your heart will thank you.",
    );
    cy.get('[data-test="WorkoutCategory-MatDefinition-Button"]').click({
      force: true,
    });
    cy.get(".MuiTypography-h4").should("have.text", "Mat Definition");
    cy.get(".css-r32ezy > .MuiTypography-body1").should(
      "have.text",
      "It all starts with the core. Take it to the mat for complete core strength, inspired by traditional Mat Pilates.",
    );
    cy.get('[data-test="WorkoutCategory-RecoverStretch-Button"]').click({
      force: true,
    });
    cy.get(".MuiTypography-h4").should("have.text", "Recover & Stretch");
    cy.get(".css-r32ezy > .MuiTypography-body1").should(
      "have.text",
      "Connect to the mind and breath using restorative techniques to relax the muscles and unlock max results.",
    );
    cy.get('[data-test="WorkoutCategory-MovementTherapy-Button"]').click({
      force: true,
    });
    cy.get(".MuiTypography-h4").should("have.text", "Movement Therapy");
    cy.get(".css-r32ezy > .MuiTypography-body1").should(
      "have.text",
      "Exercises co-created with Physical Therapists to build overall body awareness and rebuild \tstrength and function.",
    );
    cy.get('[data-test="WorkoutCategory-Meditation-Button"]').click({
      force: true,
    });
    cy.get(".MuiTypography-h4").should("have.text", "Meditation");
    cy.get(".css-r32ezy > .MuiTypography-body1").should(
      "have.text",
      "Reduce stress and connect deeply to the mind and breath with a practice made to complement your entire wellness routine",
    );
    cy.get('[data-test="WorkoutCategory-AllClasses-Button"]').click({
      force: true,
    });
    cy.get(".MuiSelect-select > .MuiTypography-root").click({ force: true });
    cy.get('[data-test="Filters-DropdownSelect-Newest-Button"]').click({
      force: true,
    });
    cy.get(".MuiSelect-select > .MuiTypography-root").should(
      "have.text",
      "Newest First",
    );
    cy.get(".MuiSelect-select > .MuiTypography-root").click({ force: true });
    cy.get('[data-test="Filters-DropdownSelect-Oldest-Button"]').click({
      force: true,
    });
    cy.get(".MuiSelect-select > .MuiTypography-root").should(
      "have.text",
      "Oldest First",
    );
    cy.get(".MuiSelect-select > .MuiTypography-root").click({ force: true });
    cy.get('[data-test="Filters-DropdownSelect-Oldest-Button"]').click({
      force: true,
    });
    cy.get(".MuiSelect-select > .MuiTypography-root").click({ force: true });
    cy.get('[data-test="Filters-DropdownSelect-Shortest-Button"]').click({
      force: true,
    });
    cy.get(".MuiSelect-select > .MuiTypography-root").should(
      "have.text",
      "Shortest First",
    );
    cy.get(".MuiSelect-select").click({ force: true });
    cy.get('[data-test="Filters-DropdownSelect-Longest-Button"]').click({
      force: true,
    });
    cy.get(".MuiSelect-select > .MuiTypography-root").should(
      "have.text",
      "Longest First",
    );
    cy.get(".MuiSelect-select").click({ force: true });
    cy.get('[data-test="Filters-DropdownSelect-Newest-Button"]').click({
      force: true,
    });
    cy.get(".MuiButton-endIcon > .MuiSvgIcon-root").click({ force: true });
    cy.get('[data-test="FiltersDialog-515Mins-Button"] > .MuiChip-label').click(
      { force: true },
    );
    cy.get('[data-test="FiltersDialog-ShowClasses-Button"]').click({
      force: true,
    });
    cy.get(".MuiChip-label").should("have.text", "5 - 15 mins");
    cy.get('[data-test="Classes-ClearAllFilters-Button"]').click({
      force: true,
    });
    cy.get(".MuiButton-endIcon > .MuiSvgIcon-root").click({ force: true });
    cy.get(
      '[data-test="FiltersDialog-SlowSteady-Button"] > .MuiChip-label',
    ).click({ force: true });
    cy.get('[data-test="FiltersDialog-515Mins-Button"] > .MuiChip-label').click(
      { force: true },
    );
    cy.get(
      '[data-test="FiltersDialog-MaeveMcEwen-Button"] > .MuiChip-label',
    ).click({ force: true });
    cy.get(
      '[data-test="FiltersDialog-NoEquipment-Button"] > .MuiChip-label',
    ).click({ force: true });
    cy.get(
      '[data-test="FiltersDialog-FullBody-Button"] > .MuiChip-label',
    ).click({ force: true });
    cy.get(
      '[data-test="FiltersDialog-SculptMobility-Button"] > .MuiChip-label',
    ).click({ force: true });
    cy.get('[data-test="FiltersDialog-ShowClasses-Button"]').click({
      force: true,
    });
    cy.get(":nth-child(1) > .MuiChip-label").should(
      "have.text",
      "Slow & Steady",
    );
    cy.get(".css-l0gjvp > .MuiGrid-root > :nth-child(2)").should(
      "have.text",
      "5 - 15 mins",
    );
    cy.get(":nth-child(3) > .MuiChip-label").should(
      "have.text",
      "Maeve McEwen",
    );
    cy.get(":nth-child(4) > .MuiChip-label").should(
      "have.text",
      "No Equipment",
    );
    cy.get(":nth-child(5) > .MuiChip-label").should("have.text", "Full Body");
    cy.get(":nth-child(6) > .MuiChip-label").should(
      "have.text",
      "Sculpt & Mobility",
    );
    cy.get('[data-test="Classes-ClearAllFilters-Button"]').should(
      "have.text",
      "Clear all",
    );
    cy.get('[data-test="Classes-ClearAllFilters-Button"]').click({
      force: true,
    });
    cy.get("#outlined-search").type("Mat Full Body", { force: true });
    cy.get('[data-test="SearchBar-Search-Button"]').click({ force: true });
    cy.get(".css-1vbvadk").should("contain.text", '"Mat Full Body"');
  });
});
