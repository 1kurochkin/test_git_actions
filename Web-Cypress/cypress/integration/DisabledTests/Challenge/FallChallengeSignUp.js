import MyPlanPage from "../../../../support/pageobjects/MyPlanPage.js";
import FallChallengeSignUpPage from "../../../../support/pageobjects/FallChallengeSignUpPage.js";

const myPlanPage = new MyPlanPage();
const fallChallengeSignUpPage = new FallChallengeSignUpPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Fall Challenge - SignUp Page", function () {
  it("Validates all of the selectors in the /challenge/2022-fall-challenge POM", function () {
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    myPlanPage.getFallChallengeBannerClickHereButton().click();

    const visibleSelectors = [
      fallChallengeSignUpPage.getHeroHeaderText,
      fallChallengeSignUpPage.getHeroSignUpButton,
      fallChallengeSignUpPage.getFirstFAQAccordionButton,
      fallChallengeSignUpPage.getSecondFAQAccordionButton,
      fallChallengeSignUpPage.getThirdFAQAccordionButton,
      fallChallengeSignUpPage.getFourthFAQAccordionButton,
      fallChallengeSignUpPage.getFifthFAQAccordionButton,
      fallChallengeSignUpPage.getTrustedByText,
    ];
    cy.assertVisible(visibleSelectors);
  });
  sizes.forEach((size) => {
    it(
      "Responsive - Fall Challenge SignUp Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.loginSubscribedUser();
        cy.waitForAppPageLoad();

        myPlanPage.getFallChallengeBannerClickHereButton().click();

        const visibleSelectors = [
          fallChallengeSignUpPage.getHeroHeaderText,
          fallChallengeSignUpPage.getHeroSignUpButton,
          fallChallengeSignUpPage.getFirstFAQAccordionButton,
          fallChallengeSignUpPage.getSecondFAQAccordionButton,
          fallChallengeSignUpPage.getThirdFAQAccordionButton,
          fallChallengeSignUpPage.getFourthFAQAccordionButton,
          fallChallengeSignUpPage.getFifthFAQAccordionButton,
        ];
        cy.assertVisible(visibleSelectors);
      },
    );
  });
});
