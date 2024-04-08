/* eslint-disable prefer-const */
import AppHeader from "../../support/pageobjects/AppHeader.js";
import AppFooter from "../../support/pageobjects/AppFooter.js";
import "./GeneralCommands.js";

const appHeader = new AppHeader();
const appFooter = new AppFooter();

/**
 * Validates all of the selectors in the App Header for a Guest.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.appHeaderGuest(exclude);'
 */
Cypress.Commands.add("appHeaderGuest", function (array_) {
  if (array_ === undefined) {
    array_ = [];
  }

  cy.scrollTo("top", { ensureScrollable: false });

  let visibleSelectors = [
    appHeader.getPvolveLogoButton,
    appHeader.getHomeButton,
    appHeader.getClassesButton,
    appHeader.getSeriesButton,
    appHeader.getFreeTrialButton,
    appHeader.getToggleDropDownButton,
  ];

  let stringVisibleSelectors = [
    "appHeader.getPvolveLogoButton",
    "appHeader.getHomeButton",
    "appHeader.getClassesButton",
    "appHeader.getSeriesButton",
    "appHeader.getFreeTrialButton",
    "appHeader.getToggleDropDownButton",
  ];

  let visibleDropdownSelectors = [
    appHeader.getDropDownLoginButton,
    appHeader.getDropDownShopButton,
  ];

  let stringVisibleDropdownSelectors = [
    "appHeader.getDropDownLoginButton",
    "appHeader.getDropDownShopButton",
  ];

  for (const array of array_) {
    if (stringVisibleSelectors.includes(array)) {
      visibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
      stringVisibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
    }

    if (stringVisibleDropdownSelectors.includes(array)) {
      visibleDropdownSelectors.splice(
        stringVisibleDropdownSelectors.indexOf(array),
        1,
      );
      stringVisibleDropdownSelectors.splice(
        stringVisibleDropdownSelectors.indexOf(array),
        1,
      );
    }
  }

  cy.assertVisible(visibleSelectors);

  cy.wait(500);
  appHeader.getToggleDropDownButton().click({ force: true });
  cy.scrollTo("top", { ensureScrollable: false });
  cy.assertVisible(visibleDropdownSelectors);
  appHeader.getDropDownOverlayContainer().click("topLeft");
});

/**
 * Validates all of the selectors in the App Header for an Unsubscribed User.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.appHeaderUnsubscribed(exclude);'
 */
Cypress.Commands.add("appHeaderUnsubscribed", function (array_) {
  if (array_ === undefined) {
    array_ = [];
  }

  cy.scrollTo("top", { ensureScrollable: false });

  let visibleSelectors = [
    appHeader.getPvolveLogoButton,
    appHeader.getHomeButton,
    appHeader.getClassesButton,
    appHeader.getSeriesButton,
    appHeader.getShopButton,
    appHeader.getToggleDropDownButton,
  ];

  let stringVisibleSelectors = [
    "appHeader.getPvolveLogoButton",
    "appHeader.getHomeButton",
    "appHeader.getClassesButton",
    "appHeader.getSeriesButton",
    "appHeader.getShopButton",
    "appHeader.getToggleDropDownButton",
  ];

  let visibleDropdownSelectors = [
    appHeader.getDropDownAccountButton,
    appHeader.getDropDownShopButton,
    appHeader.getDropDownLogoutButton,
  ];

  let stringVisibleDropdownSelectors = [
    "appHeader.getDropDownAccountButton",
    "appHeader.getDropDownShopButton",
    "appHeader.getDropDownLogoutButton",
  ];

  for (const array of array_) {
    if (stringVisibleSelectors.includes(array)) {
      visibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
      stringVisibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
    }

    if (stringVisibleDropdownSelectors.includes(array)) {
      visibleDropdownSelectors.splice(
        stringVisibleDropdownSelectors.indexOf(array),
        1,
      );
      stringVisibleDropdownSelectors.splice(
        stringVisibleDropdownSelectors.indexOf(array),
        1,
      );
    }
  }

  cy.assertVisible(visibleSelectors);

  cy.wait(500);
  appHeader.getToggleDropDownButton().click({ force: true });
  cy.scrollTo("top", { ensureScrollable: false });
  cy.assertVisible(visibleDropdownSelectors);
  appHeader.getDropDownOverlayContainer().click("topLeft");
});

/**
 * Validates all of the selectors in the App Header for a Subscribed User.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.appHeaderSubscribed(exclude);'
 */
Cypress.Commands.add("appHeaderSubscribed", function (array_) {
  if (array_ === undefined) {
    array_ = [];
  }

  cy.scrollTo("top", { ensureScrollable: false });

  let visibleSelectors = [
    appHeader.getPvolveLogoButton,
    appHeader.getHomeButton,
    appHeader.getClassesButton,
    appHeader.getSeriesButton,
    appHeader.getShopButton,
    appHeader.getToggleDropDownButton,
  ];

  let stringVisibleSelectors = [
    "appHeader.getPvolveLogoButton",
    "appHeader.getHomeButton",
    "appHeader.getClassesButton",
    "appHeader.getSeriesButton",
    "appHeader.getShopButton",
    "appHeader.getToggleDropDownButton",
  ];

  let visibleDropdownSelectors = [
    appHeader.getDropDownAccountButton,
    appHeader.getDropDownShopButton,
    appHeader.getDropDownLogoutButton,
  ];

  let stringVisibleDropdownSelectors = [
    "appHeader.getDropDownAccountButton",
    "appHeader.getDropDownShopButton",
    "appHeader.getDropDownLogoutButton",
  ];

  for (const array of array_) {
    if (stringVisibleSelectors.includes(array)) {
      visibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
      stringVisibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
    }

    if (stringVisibleDropdownSelectors.includes(array)) {
      visibleDropdownSelectors.splice(
        stringVisibleDropdownSelectors.indexOf(array),
        1,
      );
      stringVisibleDropdownSelectors.splice(
        stringVisibleDropdownSelectors.indexOf(array),
        1,
      );
    }
  }

  cy.assertVisible(visibleSelectors);

  cy.wait(500);
  appHeader.getToggleDropDownButton().click({ force: true });
  cy.scrollTo("top", { ensureScrollable: false });
  cy.assertVisible(visibleDropdownSelectors);
  appHeader.getDropDownOverlayContainer().click("topLeft");
});

Cypress.Commands.add("appFooter", function (array_) {
  if (array_ === undefined) {
    array_ = [];
  }

  let visibleSelectors = [
    appFooter.getFooterFaqs,
    appFooter.getFooterReturnPolicy,
    appFooter.getFooterEducationDiscount,
    appFooter.getFooterFirstResponderDiscount,
    appFooter.getFooterCareers,
    appFooter.getFooterContact,
    appFooter.getFooterTrainerJobs,
    appFooter.getFooterAbout,
    appFooter.getFooterAdvisoryBoard,
    appFooter.getFooterPress,
    appFooter.getFooterAffiliatePrograms,
    appFooter.getFooterFranchising,
    appFooter.getFooterCorporatePartnership,
    appFooter.getFooterInstagram,
    appFooter.getFooterYoutube,
    appFooter.getFooterFacebook,
    appFooter.getFooterTwitter,
    appFooter.getFooterPinterest,
    appFooter.getFooterLinkedIn,
    appFooter.getFooterPrivacyPolicy,
    appFooter.getFooterTermsOfService,
    appFooter.getFooterLiabilityWaiver,
    appFooter.getFooterDoNotSellMyInfo,
  ];

  let stringVisibleSelectors = [
    "appFooter.getFooterFaqs",
    "appFooter.getFooterReturnPolicy",
    "appFooter.getFooterEducationDiscount",
    "appFooter.getFooterFirstResponderDiscount",
    "appFooter.getFooterCareers",
    "appFooter.getFooterContact",
    "appFooter.getFooterTrainerJobs",
    "appFooter.getFooterAbout",
    "appFooter.getFooterAdvisoryBoard",
    "appFooter.getFooterPress",
    "appFooter.getFooterAffiliatePrograms",
    "appFooter.getFooterFranchising",
    "appFooter.getFooterCorporatePartnership",
    "appFooter.getFooterInstagram",
    "appFooter.getFooterYoutube",
    "appFooter.getFooterFacebook",
    "appFooter.getFooterTwitter",
    "appFooter.getFooterPinterest",
    "appFooter.getFooterLinkedIn",
    "appFooter.getFooterPrivacyPolicy",
    "appFooter.getFooterTermsOfService",
    "appFooter.getFooterLiabilityWaiver",
    "appFooter.getFooterDoNotSellMyInfo",
  ];

  for (const array of array_) {
    if (stringVisibleSelectors.includes(array)) {
      visibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
      stringVisibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
    }
  }

  cy.assertVisible(visibleSelectors);
});

/**
 * Validates all of the selectors in the App Footer in Responsive View.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.responsiveAppFooter(exclude);'
 */
Cypress.Commands.add("responsiveAppFooter", function (array_) {
  if (array_ === undefined) {
    array_ = [];
  }

  cy.scrollTo("bottom", { ensureScrollable: false });

  let footerVisibleSelectors = [
    appFooter.getResponsiveSupportIcon,
    appFooter.getResponsiveAboutIcon,
    appFooter.getResponsiveSocialIcon,
    appFooter.getResponsiveLegalIcon,
  ];

  let stringFooterVisibleSelectors = [
    "appFooter.getResponsiveSupportIcon",
    "appFooter.getResponsiveAboutIcon",
    "appFooter.getResponsiveSocialIcon",
    "appFooter.getResponsiveLegalIcon",
  ];

  let supportVisibleSelectors = [
    appFooter.getResponsiveFAQLink,
    appFooter.getResponsiveReturnsLink,
    appFooter.getResponsiveEducationDiscountLink,
    appFooter.getResponsiveFirstResponderDiscountLink,
    appFooter.getResponsiveCareersLink,
    appFooter.getResponsiveContactLink,
    appFooter.getResponsiveTrainerJobsLink,
  ];

  let stringSupportVisibleSelectors = [
    "appFooter.getResponsiveFAQLink",
    "appFooter.getResponsiveReturnsLink",
    "appFooter.getResponsiveEducationDiscountLink",
    "appFooter.getResponsiveFirstResponderDiscountLink",
    "appFooter.getResponsiveCareersLink",
    "appFooter.getResponsiveContactLink",
    "appFooter.getResponsiveTrainerJobsLink",
  ];

  let aboutVisibleSelectors = [
    appFooter.getResponsiveAboutLink,
    appFooter.getResponsiveAdvisoryBoardLink,
    appFooter.getResponsivePressLink,
    appFooter.getResponsiveAffiliateProgramLink,
    appFooter.getResponsiveFranchisingLink,
    appFooter.getResponsiveCorporatePartnershipLink,
  ];

  let stringAboutVisibleSelectors = [
    "appFooter.getResponsiveAboutLink",
    "appFooter.getResponsiveAdvisoryBoardLink",
    "appFooter.getResponsivePressLink",
    "appFooter.getResponsiveAffiliateProgramLink",
    "appFooter.getResponsiveFranchisingLink",
    "appFooter.getResponsiveCorporatePartnershipLink",
  ];

  let socialVisibleSelectors = [
    appFooter.getResponsiveInstagramLink,
    appFooter.getResponsiveYouTubeLink,
    appFooter.getResponsiveFacebookLink,
    appFooter.getResponsiveTwitterLink,
    appFooter.getResponsivePinterestLink,
    appFooter.getResponsiveLinkedInLink,
  ];

  let stringSocialVisibleSelectors = [
    "appFooter.getResponsiveInstagramLink",
    "appFooter.getResponsiveYouTubeLink",
    "appFooter.getResponsiveFacebookLink",
    "appFooter.getResponsiveTwitterLink",
    "appFooter.getResponsivePinterestLink",
    "appFooter.getResponsiveLinkedInLink",
  ];

  let legalVisibleSelectors = [
    appFooter.getResponsivePrivacyPolicyLink,
    appFooter.getResponsiveTOSLink,
    appFooter.getResponsiveLiabilityWaiverLink,
    appFooter.getResponsiveDoNotSellMyInfoLink,
  ];

  let stringLegalVisibleSelectors = [
    "appFooter.getResponsivePrivacyPolicyLink",
    "appFooter.getResponsiveTOSLink",
    "appFooter.getResponsiveLiabilityWaiverLink",
    "appFooter.getResponsiveDoNotSellMyInfoLink",
  ];

  for (const array of array_) {
    if (stringFooterVisibleSelectors.includes(array)) {
      footerVisibleSelectors.splice(
        stringFooterVisibleSelectors.indexOf(array),
        1,
      );
      stringFooterVisibleSelectors.splice(
        stringFooterVisibleSelectors.indexOf(array),
        1,
      );
    }

    if (stringSupportVisibleSelectors.includes(array)) {
      supportVisibleSelectors.splice(
        stringSupportVisibleSelectors.indexOf(array),
        1,
      );
      stringSupportVisibleSelectors.splice(
        stringSupportVisibleSelectors.indexOf(array),
        1,
      );
    }

    if (stringAboutVisibleSelectors.includes(array)) {
      aboutVisibleSelectors.splice(
        stringAboutVisibleSelectors.indexOf(array),
        1,
      );
      stringAboutVisibleSelectors.splice(
        stringAboutVisibleSelectors.indexOf(array),
        1,
      );
    }

    if (stringSocialVisibleSelectors.includes(array)) {
      socialVisibleSelectors.splice(
        stringSocialVisibleSelectors.indexOf(array),
        1,
      );
      stringSocialVisibleSelectors.splice(
        stringSocialVisibleSelectors.indexOf(array),
        1,
      );
    }

    if (stringLegalVisibleSelectors.includes(array)) {
      legalVisibleSelectors.splice(
        stringLegalVisibleSelectors.indexOf(array),
        1,
      );
      stringLegalVisibleSelectors.splice(
        stringLegalVisibleSelectors.indexOf(array),
        1,
      );
    }
  }

  cy.assertVisible(footerVisibleSelectors);

  appFooter.getResponsiveSupportIcon().click();
  cy.assertVisible(supportVisibleSelectors);
  appFooter.getResponsiveSupportIcon().click();

  appFooter.getResponsiveAboutIcon().click();
  cy.assertVisible(aboutVisibleSelectors);
  appFooter.getResponsiveAboutIcon().click();

  appFooter.getResponsiveSocialIcon().click();
  cy.assertVisible(socialVisibleSelectors);
  appFooter.getResponsiveSocialIcon().click();

  appFooter.getResponsiveLegalIcon().click();
  cy.assertVisible(legalVisibleSelectors);
  appFooter.getResponsiveLegalIcon().click();
});
