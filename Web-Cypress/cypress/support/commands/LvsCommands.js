import LivePage from "../pageobjects/LivePage";

const livePage = new LivePage();

/**
 * Picks day in calendar in live page
 * Users needs to store token when logging in
 * ex: cy.pickNextDayInLvsCalendar(4)
 * max day should less than the 28, 29, 30, 31 days depending on month
 */
Cypress.Commands.add(
  "pickNextDayInLvsCalendar",
  (daysToMoveFromCurrentDate) => {
    let dateFoundInCalendar = false;
    const dateInFormats = generateDateInFormats(daysToMoveFromCurrentDate);

    livePage
      .getAllCalendarSelectors()
      .each(($button) => {
        const buttonText = $button.text().toLowerCase();
        if (
          buttonText === dateInFormats.shortFormat.toLowerCase() &&
          !dateFoundInCalendar
        ) {
          // Check if the button doesn't have the target text
          cy.wrap($button)
            .should("exist")
            .then(() => {
              dateFoundInCalendar = true;
              cy.wrap($button).click({ force: true });
            });
        }
      })
      .then(() => {
        cy.log("Was it found?", dateFoundInCalendar);
        if (!dateFoundInCalendar) {
          livePage.navigateNextOnCalendar().click({ force: true });
          cy.pickNextDayInLvsCalendar(daysToMoveFromCurrentDate);
        } else {
          livePage
            .getAllCalendarSelectors()
            .contains(dateInFormats.shortFormat, {
              timeout: 500,
              matchCase: false,
            })
            .click({ force: true });
          livePage
            .getCurrentDate()
            .assertTextContains(dateInFormats.longFormat);
        }
      });
  },
);

function generateDateInFormats(daysToMoveFromCurrentDate) {
  const dayInMilliseconds = 24 * 60 * 60 * 1000;
  const today = new Date();
  const newDate = new Date(
    today.getTime() + daysToMoveFromCurrentDate * dayInMilliseconds,
  );

  return {
    shortFormat:
      newDate.toLocaleDateString("en-US", { weekday: "short" }) +
      " " +
      newDate.getDate(),
    longFormat: newDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }),
  };
}
