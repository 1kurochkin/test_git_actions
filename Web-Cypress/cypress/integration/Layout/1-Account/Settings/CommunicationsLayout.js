import CommunicationsPage from "../../../../support/pageobjects/CommunicationsPage.js";

const communicationsPage = new CommunicationsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];
const exclude = ["appHeader.getShopButton"]; //Responsive only has DropDown Shop button

describe("Communications POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Communications POM", function () {
    //Login and navigate to Communications page
    cy.loginSubscribedUser();
    cy.wait(500);
    cy.scrollTo("top");
    communicationsPage.visitCommunicationsPage();
    cy.wait(1000);

    cy.appHeaderSubscribed();

    const visibleSelectors = [
      //Body Side Nav
      communicationsPage.getBodySideNavAccountLink,
      communicationsPage.getBodySideNavSettingsLink,
      communicationsPage.getBodySideNavSubscriptionsLink,
      communicationsPage.getBodySideNavCommunicationsLink,
      communicationsPage.getBodySideNavLogoutLink,

      //Body FeedFM
      communicationsPage.getBodyToggleReceiveEmailsButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.appFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Communications Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);
        cy.loginSubscribedUser();

        cy.waitForAppPageLoad();

        communicationsPage.visitCommunicationsPage();

        cy.appHeaderSubscribed(exclude);

        communicationsPage.getResponsiveCommunicationsDropdownIcon().click();

        const visibleSelectors = [
          //Body Side Nav
          communicationsPage.getResponsiveAccountLink,
          communicationsPage.getResponsiveSettingsLink,
          communicationsPage.getResponsiveMembershipLink,
          communicationsPage.getResponsiveCommunicationsLink,
          communicationsPage.getResponsiveLogoutLink,

          //Body Form
          communicationsPage.getBodyToggleReceiveEmailsButton,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveAppFooter();
      },
    );
  });
});
