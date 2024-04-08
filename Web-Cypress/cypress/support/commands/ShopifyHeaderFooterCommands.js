/* eslint-disable prefer-const */
import ShopifyHeader from "../../support/pageobjects/ShopifyHeader.js";
import ShopifyFooter from "../../support/pageobjects/ShopifyFooter.js";
import "./GeneralCommands.js";

const shopifyHeader = new ShopifyHeader();
const shopifyFooter = new ShopifyFooter();

/**
 * Validates all of the selectors in the Shopify Header for a Guest.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.shopifyHeaderGuest(exclude);'
 */
Cypress.Commands.add("shopifyHeaderGuest", function (array_) {
  if (Cypress.env("BASE_URL") === "https://www.pvolve.com") {
    if (array_ === undefined) {
      array_ = [];
    }

    cy.scrollTo("top", { ensureScrollable: false });

    //About Subnav
    let visibleAboutSubNavSelectors = [
      shopifyHeader.getHeaderAboutSubNavOurStoryButton,
      shopifyHeader.getHeaderAboutSubNavOurMethodButton,
    ];

    let stringVisibleAboutSubNavSelectors = [
      "shopifyHeader.getHeaderAboutSubNavOurStoryButton",
      "shopifyHeader.getHeaderAboutSubNavOurMethodButton",
    ];

    //Streaming SubNav - Logged Out
    let visibleLoggedOutStreamingSubNavSelectors = [
      shopifyHeader.getHeaderStreamingSubNavMembershipButton,
      shopifyHeader.getHeaderStreamingSubNavWorkoutsButton,
      shopifyHeader.getHeaderStreamingSubNavSeriesButton,
    ];

    let stringVisibleLoggedOutStreamingSubNavSelectors = [
      "shopifyHeader.getHeaderStreamingSubNavMembershipButton",
      "shopifyHeader.getHeaderStreamingSubNavWorkoutsButton",
      "shopifyHeader.getHeaderStreamingSubNavSeriesButton",
    ];

    //Studios SubNav
    let visibleStudiosSubNavSelectors = [
      shopifyHeader.getHeaderStudioSubNavNewYorkButton,
      shopifyHeader.getHeaderStudioSubNavChicagoButton,
      shopifyHeader.getHeaderStudioSubNavLosAngelesButton,
      shopifyHeader.getHeaderStudioSubNavVirtualStudioButton,
    ];

    let stringVisibleStudiosSubNavSelectors = [
      "shopifyHeader.getHeaderStudioSubNavNewYorkButton",
      "shopifyHeader.getHeaderStudioSubNavChicagoButton",
      "shopifyHeader.getHeaderStudioSubNavLosAngelesButton",
      "shopifyHeader.getHeaderStudioSubNavVirtualStudioButton",
    ];

    //Shop SubNav
    let visibleShopSubNavSelectors = [
      shopifyHeader.getHeaderShopSubNavAllButton,
      shopifyHeader.getHeaderShopSubNavKitsButton,
      shopifyHeader.getHeaderShopSubNavEquipmentButton,
      shopifyHeader.getHeaderShopSubNavDigitalMembershipButton,
    ];

    let stringVisibleShopSubNavSelectors = [
      "shopifyHeader.getHeaderShopSubNavAllButton",
      "shopifyHeader.getHeaderShopSubNavKitsButton",
      "shopifyHeader.getHeaderShopSubNavEquipmentButton",
      "shopifyHeader.getHeaderShopSubNavDigitalMembershipButton",
    ];

    //Blog SubNav
    let visibleBlogSubNavSelectors = [
      shopifyHeader.getHeaderBlogSubNavAllButton,
      shopifyHeader.getHeaderBlogSubNavFitnessButton,
      shopifyHeader.getHeaderBlogSubNavLifestyleButton,
      shopifyHeader.getHeaderBlogSubNavNutritionButton,
      shopifyHeader.getHeaderBlogSubNavTravelButton,
      shopifyHeader.getHeaderBlogSubNavTestimonialsButton,
      shopifyHeader.getHeaderBlogSubNavWomensWellnessButton,
    ];

    let stringVisibleBlogSubNavSelectors = [
      "shopifyHeader.getHeaderBlogSubNavAllButton",
      "shopifyHeader.getHeaderBlogSubNavFitnessButton",
      "shopifyHeader.getHeaderBlogSubNavLifestyleButton",
      "shopifyHeader.getHeaderBlogSubNavNutritionButton",
      "shopifyHeader.getHeaderBlogSubNavTravelButton",
      "shopifyHeader.getHeaderBlogSubNavTestimonialsButton",
      "shopifyHeader.getHeaderBlogSubNavWomensWellnessButton",
    ];

    let visibleSelectors = [
      //Header Top Nav
      shopifyHeader.getHeaderPvolveLogoButton,
      shopifyHeader.getHeaderAboutButton,
      shopifyHeader.getHeaderStreamingButton,
      shopifyHeader.getHeaderStudiosButton,
      shopifyHeader.getHeaderShopButton,
      shopifyHeader.getHeaderBlogButton,
      shopifyHeader.getHeaderLoginLink,
      shopifyHeader.getHeaderFreeTrialButton,
    ];

    let stringVisibleSelectors = [
      //Header Top Nav
      "shopifyHeader.getHeaderPvolveLogoButton",
      "shopifyHeader.getHeaderAboutButton",
      "shopifyHeader.getHeaderStreamingButton",
      "shopifyHeader.getHeaderStudiosButton",
      "shopifyHeader.getHeaderShopButton",
      "shopifyHeader.getHeaderBlogButton",
      "shopifyHeader.getHeaderLoginLink",
      "shopifyHeader.getHeaderFreeTrialButton",
    ];

    for (const array of array_) {
      if (stringVisibleAboutSubNavSelectors.includes(array)) {
        visibleAboutSubNavSelectors.splice(
          stringVisibleAboutSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleAboutSubNavSelectors.splice(
          stringVisibleAboutSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleLoggedOutStreamingSubNavSelectors.includes(array)) {
        visibleLoggedOutStreamingSubNavSelectors.splice(
          stringVisibleLoggedOutStreamingSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleLoggedOutStreamingSubNavSelectors.splice(
          stringVisibleLoggedOutStreamingSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleStudiosSubNavSelectors.includes(array)) {
        visibleStudiosSubNavSelectors.splice(
          stringVisibleStudiosSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleStudiosSubNavSelectors.splice(
          stringVisibleStudiosSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleShopSubNavSelectors.includes(array)) {
        visibleShopSubNavSelectors.splice(
          stringVisibleShopSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleShopSubNavSelectors.splice(
          stringVisibleShopSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleBlogSubNavSelectors.includes(array)) {
        visibleBlogSubNavSelectors.splice(
          stringVisibleBlogSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleBlogSubNavSelectors.splice(
          stringVisibleBlogSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleSelectors.includes(array)) {
        visibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
        stringVisibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
      }
    }

    cy.scrollTo("top", { ensureScrollable: false });

    cy.assertExist(visibleAboutSubNavSelectors);

    shopifyHeader.getHeaderStreamingButton().trigger("mouseover");
    cy.wait(500);
    shopifyHeader.getHeaderStreamingButton().trigger("mouseover");
    cy.assertExist(visibleLoggedOutStreamingSubNavSelectors);

    shopifyHeader.getHeaderStudiosButton().trigger("mouseover");
    cy.assertExist(visibleStudiosSubNavSelectors);

    shopifyHeader.getHeaderShopButton().trigger("mouseover");
    cy.assertExist(visibleShopSubNavSelectors);

    shopifyHeader.getHeaderBlogButton().trigger("mouseover");
    cy.assertExist(visibleBlogSubNavSelectors);

    cy.assertExist(visibleSelectors);
  }
});

/**
 * Validates all of the selectors in the Shopify Header for an Unsubscribed User.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.shopifyHeaderUnsubscribed(exclude);'
 */
Cypress.Commands.add("shopifyHeaderUnsubscribed", function (array_) {
  if (Cypress.env("BASE_URL") === "https://www.pvolve.com") {
    if (array_ === undefined) {
      array_ = [];
    }

    cy.scrollTo("top", { ensureScrollable: false });

    //About Subnav
    let visibleAboutSubNavSelectors = [
      shopifyHeader.getHeaderAboutSubNavOurStoryButton,
      shopifyHeader.getHeaderAboutSubNavOurMethodButton,
    ];

    let stringVisibleAboutSubNavSelectors = [
      "shopifyHeader.getHeaderAboutSubNavOurStoryButton",
      "shopifyHeader.getHeaderAboutSubNavOurMethodButton",
    ];

    let visibleLoggedOutStreamingSubNavSelectors = [
      shopifyHeader.getHeaderStreamingSubNavMembershipButton,
      shopifyHeader.getHeaderStreamingSubNavWorkoutsButton,
      shopifyHeader.getHeaderStreamingSubNavSeriesButton,
    ];

    let stringVisibleLoggedOutStreamingSubNavSelectors = [
      "shopifyHeader.getHeaderStreamingSubNavMembershipButton",
      "shopifyHeader.getHeaderStreamingSubNavWorkoutsButton",
      "shopifyHeader.getHeaderStreamingSubNavSeriesButton",
    ];

    //Studios SubNav
    let visibleStudiosSubNavSelectors = [
      shopifyHeader.getHeaderStudioSubNavNewYorkButton,
      shopifyHeader.getHeaderStudioSubNavChicagoButton,
      shopifyHeader.getHeaderStudioSubNavLosAngelesButton,
      shopifyHeader.getHeaderStudioSubNavVirtualStudioButton,
    ];

    let stringVisibleStudiosSubNavSelectors = [
      "shopifyHeader.getHeaderStudioSubNavNewYorkButton",
      "shopifyHeader.getHeaderStudioSubNavChicagoButton",
      "shopifyHeader.getHeaderStudioSubNavLosAngelesButton",
      "shopifyHeader.getHeaderStudioSubNavVirtualStudioButton",
    ];

    //Shop SubNav
    let visibleShopSubNavSelectors = [
      shopifyHeader.getHeaderShopSubNavAllButton,
      shopifyHeader.getHeaderShopSubNavKitsButton,
      shopifyHeader.getHeaderShopSubNavEquipmentButton,
      shopifyHeader.getHeaderShopSubNavDigitalMembershipButton,
    ];

    let stringVisibleShopSubNavSelectors = [
      "shopifyHeader.getHeaderShopSubNavAllButton",
      "shopifyHeader.getHeaderShopSubNavKitsButton",
      "shopifyHeader.getHeaderShopSubNavEquipmentButton",
      "shopifyHeader.getHeaderShopSubNavDigitalMembershipButton",
    ];

    //Blog SubNav
    let visibleBlogSubNavSelectors = [
      shopifyHeader.getHeaderBlogSubNavAllButton,
      shopifyHeader.getHeaderBlogSubNavFitnessButton,
      shopifyHeader.getHeaderBlogSubNavLifestyleButton,
      shopifyHeader.getHeaderBlogSubNavNutritionButton,
      shopifyHeader.getHeaderBlogSubNavTravelButton,
      shopifyHeader.getHeaderBlogSubNavTestimonialsButton,
      shopifyHeader.getHeaderBlogSubNavWomensWellnessButton,
    ];

    let stringVisibleBlogSubNavSelectors = [
      "shopifyHeader.getHeaderBlogSubNavAllButton",
      "shopifyHeader.getHeaderBlogSubNavFitnessButton",
      "shopifyHeader.getHeaderBlogSubNavLifestyleButton",
      "shopifyHeader.getHeaderBlogSubNavNutritionButton",
      "shopifyHeader.getHeaderBlogSubNavTravelButton",
      "shopifyHeader.getHeaderBlogSubNavTestimonialsButton",
      "shopifyHeader.getHeaderBlogSubNavWomensWellnessButton",
    ];

    let visibleSelectors = [
      shopifyHeader.getHeaderPvolveLogoButton,
      shopifyHeader.getHeaderAboutButton,
      shopifyHeader.getHeaderStreamingButton,
      shopifyHeader.getHeaderStudiosButton,
      shopifyHeader.getHeaderShopButton,
      shopifyHeader.getHeaderBlogButton,
      shopifyHeader.getHeaderMiniCartButton,
    ];

    let stringVisibleSelectors = [
      "shopifyHeader.getHeaderPvolveLogoButton",
      "shopifyHeader.getHeaderAboutButton",
      "shopifyHeader.getHeaderStreamingButton",
      "shopifyHeader.getHeaderStudiosButton",
      "shopifyHeader.getHeaderShopButton",
      "shopifyHeader.getHeaderBlogButton",
      "shopifyHeader.getHeaderLoginLink",
      "shopifyHeader.getHeaderFreeTrialButton",
      "shopifyHeader.getHeaderMiniCartButton",
    ];

    let visibleDropdownSelectors = [
      shopifyHeader.getHeaderDropDownItemAccount,
      shopifyHeader.getHeaderDropDownItemSettings,
      shopifyHeader.getHeaderDropDownItemCommunications,
      shopifyHeader.getHeaderDropDownItemLogout,
    ];

    let stringVisibleDropdownSelectors = [
      "shopifyHeader.getHeaderDropDownItemAccount",
      "shopifyHeader.getHeaderDropDownItemSettings",
      "shopifyHeader.getHeaderDropDownItemCommunications",
      "shopifyHeader.getHeaderDropDownItemLogout",
    ];

    for (const array of array_) {
      if (stringVisibleAboutSubNavSelectors.includes(array)) {
        visibleAboutSubNavSelectors.splice(
          stringVisibleAboutSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleAboutSubNavSelectors.splice(
          stringVisibleAboutSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleLoggedOutStreamingSubNavSelectors.includes(array)) {
        visibleLoggedOutStreamingSubNavSelectors.splice(
          stringVisibleLoggedOutStreamingSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleLoggedOutStreamingSubNavSelectors.splice(
          stringVisibleLoggedOutStreamingSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleStudiosSubNavSelectors.includes(array)) {
        visibleStudiosSubNavSelectors.splice(
          stringVisibleStudiosSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleStudiosSubNavSelectors.splice(
          stringVisibleStudiosSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleShopSubNavSelectors.includes(array)) {
        visibleShopSubNavSelectors.splice(
          stringVisibleShopSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleShopSubNavSelectors.splice(
          stringVisibleShopSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleBlogSubNavSelectors.includes(array)) {
        visibleBlogSubNavSelectors.splice(
          stringVisibleBlogSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleBlogSubNavSelectors.splice(
          stringVisibleBlogSubNavSelectors.indexOf(array),
          1,
        );
      }

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

    cy.scrollTo("top", { ensureScrollable: false });

    cy.assertExist(visibleAboutSubNavSelectors);

    shopifyHeader.getHeaderStreamingButton().trigger("mouseover");
    cy.wait(500);
    shopifyHeader.getHeaderStreamingButton().trigger("mouseover");
    cy.assertExist(visibleLoggedOutStreamingSubNavSelectors);

    shopifyHeader.getHeaderStudiosButton().trigger("mouseover");
    cy.assertExist(visibleStudiosSubNavSelectors);

    shopifyHeader.getHeaderShopButton().trigger("mouseover");
    cy.assertExist(visibleShopSubNavSelectors);

    shopifyHeader.getHeaderBlogButton().trigger("mouseover");
    cy.assertExist(visibleBlogSubNavSelectors);

    cy.assertExist(visibleSelectors);

    // KeepPass for ECOMM-1091 - ECOMM-1095
    if (Cypress.env("APP_BASE_URL") === "https://app.pvolve.com") {
      shopifyHeader.getHeaderDropDownMenu().click();
      cy.wait(2000);
      cy.assertExist(visibleDropdownSelectors);
    }
  }
});

/**
 * Validates all of the selectors in the Shopify Header for a Subscribed User.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.shopifyHeaderSubscribed(exclude);'
 */
Cypress.Commands.add("shopifyHeaderSubscribed", function (array_) {
  if (Cypress.env("BASE_URL") === "https://www.pvolve.com") {
    if (array_ === undefined) {
      array_ = [];
    }

    cy.scrollTo("top", { ensureScrollable: false });

    let visibleLoggedInStreamingSubNavSelectors = [
      shopifyHeader.getHeaderStreamingSubNavMyPlanButton,
      shopifyHeader.getHeaderStreamingSubNavWorkoutsButton,
      shopifyHeader.getHeaderStreamingSubNavSeriesButton,
    ];

    let stringVisibleLoggedInStreamingSubNavSelectors = [
      "shopifyHeader.getHeaderStreamingSubNavMyPlanButton",
      "shopifyHeader.getHeaderStreamingSubNavWorkoutsButton",
      "shopifyHeader.getHeaderStreamingSubNavSeriesButton",
    ];

    //Studios SubNav
    let visibleStudiosSubNavSelectors = [
      shopifyHeader.getHeaderStudioSubNavNewYorkButton,
      shopifyHeader.getHeaderStudioSubNavChicagoButton,
      shopifyHeader.getHeaderStudioSubNavLosAngelesButton,
      shopifyHeader.getHeaderStudioSubNavVirtualStudioButton,
    ];

    let stringVisibleStudiosSubNavSelectors = [
      "shopifyHeader.getHeaderStudioSubNavNewYorkButton",
      "shopifyHeader.getHeaderStudioSubNavChicagoButton",
      "shopifyHeader.getHeaderStudioSubNavLosAngelesButton",
      "shopifyHeader.getHeaderStudioSubNavVirtualStudioButton",
    ];

    //Shop SubNav
    let visibleShopSubNavSelectors = [
      shopifyHeader.getHeaderShopSubNavAllButton,
      shopifyHeader.getHeaderShopSubNavKitsButton,
      shopifyHeader.getHeaderShopSubNavEquipmentButton,
      shopifyHeader.getHeaderShopSubNavDigitalMembershipButton,
    ];

    let stringVisibleShopSubNavSelectors = [
      "shopifyHeader.getHeaderShopSubNavAllButton",
      "shopifyHeader.getHeaderShopSubNavKitsButton",
      "shopifyHeader.getHeaderShopSubNavEquipmentButton",
      "shopifyHeader.getHeaderShopSubNavDigitalMembershipButton",
    ];

    //Blog SubNav
    let visibleBlogSubNavSelectors = [
      shopifyHeader.getHeaderBlogSubNavAllButton,
      shopifyHeader.getHeaderBlogSubNavFitnessButton,
      shopifyHeader.getHeaderBlogSubNavLifestyleButton,
      shopifyHeader.getHeaderBlogSubNavNutritionButton,
      shopifyHeader.getHeaderBlogSubNavTravelButton,
      shopifyHeader.getHeaderBlogSubNavTestimonialsButton,
      shopifyHeader.getHeaderBlogSubNavWomensWellnessButton,
    ];

    let stringVisibleBlogSubNavSelectors = [
      "shopifyHeader.getHeaderBlogSubNavAllButton",
      "shopifyHeader.getHeaderBlogSubNavFitnessButton",
      "shopifyHeader.getHeaderBlogSubNavLifestyleButton",
      "shopifyHeader.getHeaderBlogSubNavNutritionButton",
      "shopifyHeader.getHeaderBlogSubNavTravelButton",
      "shopifyHeader.getHeaderBlogSubNavTestimonialsButton",
      "shopifyHeader.getHeaderBlogSubNavWomensWellnessButton",
    ];

    let visibleSelectors = [
      shopifyHeader.getHeaderPvolveLogoButton,
      shopifyHeader.getHeaderStreamingButton,
      shopifyHeader.getHeaderStudiosButton,
      shopifyHeader.getHeaderShopButton,
      shopifyHeader.getHeaderBlogButton,
      shopifyHeader.getHeaderMiniCartButton,
    ];

    let stringVisibleSelectors = [
      "shopifyHeader.getHeaderPvolveLogoButton",
      "shopifyHeader.getHeaderStreamingButton",
      "shopifyHeader.getHeaderStudiosButton",
      "shopifyHeader.getHeaderShopButton",
      "shopifyHeader.getHeaderBlogButton",
      "shopifyHeader.getHeaderMiniCartButton",
    ];

    let visibleDropdownSelectors = [
      shopifyHeader.getHeaderDropDownItemAccount,
      shopifyHeader.getHeaderDropDownItemSettings,
      shopifyHeader.getHeaderDropDownItemMembership,
      shopifyHeader.getHeaderDropDownItemCommunications,
      //shopifyHeader.getHeaderDropDownItemReferAFriend, ON HOLD FOR TRACKING
      shopifyHeader.getHeaderDropDownItemLogout,
    ];

    let stringVisibleDropdownSelectors = [
      "shopifyHeader.getHeaderDropDownItemAccount",
      "shopifyHeader.getHeaderDropDownItemSettings",
      "shopifyHeader.getHeaderDropDownItemMembership",
      "shopifyHeader.getHeaderDropDownItemCommunications",
      //'shopifyHeader.getHeaderDropDownItemReferAFriend', ON HOLD FOR TRACKING
      "shopifyHeader.getHeaderDropDownItemLogout",
    ];

    for (const array of array_) {
      if (stringVisibleLoggedInStreamingSubNavSelectors.includes(array)) {
        visibleLoggedInStreamingSubNavSelectors.splice(
          stringVisibleLoggedInStreamingSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleLoggedInStreamingSubNavSelectors.splice(
          stringVisibleLoggedInStreamingSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleStudiosSubNavSelectors.includes(array)) {
        visibleStudiosSubNavSelectors.splice(
          stringVisibleStudiosSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleStudiosSubNavSelectors.splice(
          stringVisibleStudiosSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleShopSubNavSelectors.includes(array)) {
        visibleShopSubNavSelectors.splice(
          stringVisibleShopSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleShopSubNavSelectors.splice(
          stringVisibleShopSubNavSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleBlogSubNavSelectors.includes(array)) {
        visibleBlogSubNavSelectors.splice(
          stringVisibleBlogSubNavSelectors.indexOf(array),
          1,
        );
        stringVisibleBlogSubNavSelectors.splice(
          stringVisibleBlogSubNavSelectors.indexOf(array),
          1,
        );
      }

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

    cy.scrollTo("top", { ensureScrollable: false });

    shopifyHeader.getHeaderStreamingButton().trigger("mouseover");
    cy.wait(500);
    shopifyHeader.getHeaderStreamingButton().trigger("mouseover");
    cy.assertExist(visibleLoggedInStreamingSubNavSelectors);

    shopifyHeader.getHeaderStudiosButton().trigger("mouseover");
    cy.assertExist(visibleStudiosSubNavSelectors);

    shopifyHeader.getHeaderShopButton().trigger("mouseover");
    cy.assertExist(visibleShopSubNavSelectors);

    shopifyHeader.getHeaderBlogButton().trigger("mouseover");
    cy.assertExist(visibleBlogSubNavSelectors);

    cy.assertExist(visibleSelectors);

    // KeepPass for ECOMM-1091 - ECOMM-1095
    if (Cypress.env("APP_BASE_URL") === "https://app.pvolve.com") {
      shopifyHeader.getHeaderDropDownMenu().click();
      cy.wait(2000);
      cy.assertExist(visibleDropdownSelectors);
    }
  }
});

/**
 * Validates all of the selectors in the Shopify Footer.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.shopifyFooter(exclude);'
 */
Cypress.Commands.add("shopifyFooter", function (array_) {
  if (Cypress.env("BASE_URL") === "https://www.pvolve.com") {
    if (array_ === undefined) {
      array_ = [];
    }

    cy.scrollTo("bottom", { ensureScrollable: false });

    let visibleSelectors = [
      shopifyFooter.getFooter,
      shopifyFooter.getFooterContactEmailForm,
      shopifyFooter.getFooterContactEmailSubmitButton,
      shopifyFooter.getFooterFaqs,
      shopifyFooter.getFooterReturnPolicy,
      shopifyFooter.getFooterAffiliatePrograms,
      shopifyFooter.getFooterEducationDiscount,
      shopifyFooter.getFooterFirstResponderDiscount,
      shopifyFooter.getFooterCareers,
      shopifyFooter.getFooterOurStory,
      shopifyFooter.getFooterOurMethod,
      shopifyFooter.getFooterAdvisoryBoard,
      shopifyFooter.getFooterFranchising,
      shopifyFooter.getFooterCorporatePartnership,
      shopifyFooter.getFooterInstagram,
      shopifyFooter.getFooterYoutube,
      shopifyFooter.getFooterFacebook,
      shopifyFooter.getFooterTwitter,
      shopifyFooter.getFooterPinterest,
      shopifyFooter.getFooterLinkedIn,
      shopifyFooter.getFooterPrivacyPolicy,
      shopifyFooter.getFooterTermsOfService,
      shopifyFooter.getFooterLiabilityWaiver,
    ];

    let stringVisibleSelectors = [
      "shopifyFooter.getFooter",
      "shopifyFooter.getFooterContactEmailForm",
      "shopifyFooter.getFooterContactEmailSubmitButton",
      "shopifyFooter.getFooterFaqs",
      "shopifyFooter.getFooterReturnPolicy",
      "shopifyFooter.getFooterAffiliatePrograms",
      "shopifyFooter.getFooterEducationDiscount",
      "shopifyFooter.getFooterFirstResponderDiscount",
      "shopifyFooter.getFooterCareers",
      "shopifyFooter.getFooterOurStory",
      "shopifyFooter.getFooterOurMethod",
      "shopifyFooter.getFooterAdvisoryBoard",
      "shopifyFooter.getFooterFranchising",
      "shopifyFooter.getFooterCorporatePartnership",
      "shopifyFooter.getFooterInstagram",
      "shopifyFooter.getFooterYoutube",
      "shopifyFooter.getFooterFacebook",
      "shopifyFooter.getFooterTwitter",
      "shopifyFooter.getFooterPinterest",
      "shopifyFooter.getFooterLinkedIn",
      "shopifyFooter.getFooterPrivacyPolicy",
      "shopifyFooter.getFooterTermsOfService",
      "shopifyFooter.getFooterLiabilityWaiver",
    ];

    for (const array of array_) {
      if (stringVisibleSelectors.includes(array)) {
        visibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
        stringVisibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
      }
    }

    cy.assertVisible(visibleSelectors);
  }
});

/**
 * Validates all of the selectors in the Shopify Header for a Guest in Responsive view.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.responsiveShopifyHeaderGuest(exclude);'
 */
Cypress.Commands.add("responsiveShopifyHeaderGuest", function (array_) {
  if (Cypress.env("BASE_URL") === "https://www.pvolve.com") {
    if (array_ === undefined) {
      array_ = [];
    }

    let nonVisibleSelectors = [
      shopifyHeader.getResponsiveStreamingHeader,
      shopifyHeader.getResponsiveStudiosHeader,
      shopifyHeader.getResponsiveAboutHeader,
      shopifyHeader.getResponsiveShopHeader,
      shopifyHeader.getResponsiveBlogHeader,
      shopifyHeader.getResponsiveOurMethodLink,
      shopifyHeader.getResponsiveOurStoryLink,
      shopifyHeader.getResponsiveMembershipLink,
      shopifyHeader.getResponsiveWorkoutsLink,
      shopifyHeader.getResponsiveSeriesLink,
      shopifyHeader.getResponsiveNewYorkLink,
      shopifyHeader.getResponsiveChicagoLink,
      shopifyHeader.getResponsiveLosAngelesLink,
      shopifyHeader.getResponsiveVirtualStudioLink,
      shopifyHeader.getResponsiveAllShopLink,
      shopifyHeader.getResponsiveKitsLink,
      shopifyHeader.getResponsiveEquipmentLink,
      shopifyHeader.getResponsiveStreamingAccessLink,
      shopifyHeader.getResponsiveAllBlogLink,
      shopifyHeader.getResponsiveFitnessLink,
      shopifyHeader.getResponsiveLifestyleLink,
      shopifyHeader.getResponsiveNutritionLink,
      shopifyHeader.getResponsiveTravelLink,
      shopifyHeader.getResponsiveTestimonialsLink,
      shopifyHeader.getResponsiveWomensWellnessLink,
    ];

    let stringNonVisibleSelectors = [
      "shopifyHeader.getResponsiveStreamingHeader",
      "shopifyHeader.getResponsiveStudiosHeader",
      "shopifyHeader.getResponsiveAboutHeader",
      "shopifyHeader.getResponsiveShopHeader",
      "shopifyHeader.getResponsiveBlogHeader",
      "shopifyHeader.getResponsiveOurMethodLink",
      "shopifyHeader.getResponsiveOurStoryLink",
      "shopifyHeader.getResponsiveMembershipLink",
      "shopifyHeader.getResponsiveWorkoutsLink",
      "shopifyHeader.getResponsiveSeriesLink",
      "shopifyHeader.getResponsiveNewYorkLink",
      "shopifyHeader.getResponsiveChicagoLink",
      "shopifyHeader.getResponsiveLosAngelesLink",
      "shopifyHeader.getResponsiveVirtualStudioLink",
      "shopifyHeader.getResponsiveAllShopLink",
      "shopifyHeader.getResponsiveKitsLink",
      "shopifyHeader.getResponsiveEquipmentLink",
      "shopifyHeader.getResponsiveStreamingAccessLink",
      "shopifyHeader.getResponsiveAllBlogLink",
      "shopifyHeader.getResponsiveFitnessLink",
      "shopifyHeader.getResponsiveLifestyleLink",
      "shopifyHeader.getResponsiveNutritionLink",
      "shopifyHeader.getResponsiveTravelLink",
      "shopifyHeader.getResponsiveTestimonialsLink",
      "shopifyHeader.getResponsiveWomensWellnessLink",
    ];

    let visibleSelectors = [
      shopifyHeader.getResponsiveCloseButton,
      shopifyHeader.getResponsiveLogInLink,
      shopifyHeader.getResponsiveFreeTrialLink,
    ];

    let stringVisibleSelectors = [
      "shopifyHeader.getResponsiveCloseButton",
      "shopifyHeader.getResponsiveLogInLink",
      "shopifyHeader.getResponsiveFreeTrialLink",
    ];

    let headerVisibleSelectors = [
      shopifyHeader.getHeaderPvolveLogoButton,
      shopifyHeader.getResponsiveHeaderFreeTrialCTA,
      shopifyHeader.getResponsiveMenuButton,
      shopifyHeader.getHeaderMiniCartButton,
    ];

    let stringHeaderVisibleSelectors = [
      "shopifyHeader.getHeaderPvolveLogoButton",
      "shopifyHeader.getResponsiveHeaderFreeTrialCTA",
      "shopifyHeader.getResponsiveMenuButton",
      "shopifyHeader.getHeaderMiniCartButton",
    ];

    for (const array of array_) {
      if (stringNonVisibleSelectors.includes(array)) {
        nonVisibleSelectors.splice(stringNonVisibleSelectors.indexOf(array), 1);
        stringNonVisibleSelectors.splice(
          stringNonVisibleSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleSelectors.includes(array)) {
        visibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
        stringVisibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
      }

      if (stringHeaderVisibleSelectors.includes(array)) {
        headerVisibleSelectors.splice(
          stringHeaderVisibleSelectors.indexOf(array),
          1,
        );
        stringHeaderVisibleSelectors.splice(
          stringHeaderVisibleSelectors.indexOf(array),
          1,
        );
      }
    }

    cy.scrollTo("top", { ensureScrollable: false });

    cy.assertExist(headerVisibleSelectors);

    shopifyHeader.getResponsiveMenuButton().click();
    cy.assertExist(nonVisibleSelectors);

    cy.assertVisible(visibleSelectors);

    shopifyHeader.getResponsiveCloseButton().click({ force: true });
  }
});

/**
 * Validates all of the selectors in the Shopify Header for an Unsubscribed user in Responsive view.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.responsiveShopifyHeaderUnsubscribed(exclude);'
 */
Cypress.Commands.add("responsiveShopifyHeaderUnsubscribed", function (array_) {
  if (Cypress.env("BASE_URL") === "https://www.pvolve.com") {
    if (array_ === undefined) {
      array_ = [];
    }

    let nonVisibleSelectors = [
      shopifyHeader.getResponsiveAboutHeader,
      shopifyHeader.getResponsiveShopHeader,
      shopifyHeader.getResponsiveBlogHeader,
      shopifyHeader.getResponsiveOurMethodLink,
      shopifyHeader.getResponsiveOurStoryLink,
      shopifyHeader.getResponsiveMembershipLink,
      shopifyHeader.getResponsiveWorkoutsLink,
      shopifyHeader.getResponsiveSeriesLink,
      shopifyHeader.getResponsiveNewYorkLink,
      shopifyHeader.getResponsiveChicagoLink,
      shopifyHeader.getResponsiveLosAngelesLink,
      shopifyHeader.getResponsiveVirtualStudioLink,
      shopifyHeader.getResponsiveAllShopLink,
      shopifyHeader.getResponsiveKitsLink,
      shopifyHeader.getResponsiveEquipmentLink,
      shopifyHeader.getResponsiveStreamingAccessLink,
      shopifyHeader.getResponsiveAllBlogLink,
      shopifyHeader.getResponsiveFitnessLink,
      shopifyHeader.getResponsiveLifestyleLink,
      shopifyHeader.getResponsiveNutritionLink,
      shopifyHeader.getResponsiveTravelLink,
      shopifyHeader.getResponsiveTestimonialsLink,
      shopifyHeader.getResponsiveWomensWellnessLink,
    ];

    let stringNonVisibleSelectors = [
      "shopifyHeader.getResponsiveStudiosHeader",
      "shopifyHeader.getResponsiveAboutHeader",
      "shopifyHeader.getResponsiveShopHeader",
      "shopifyHeader.getResponsiveBlogHeader",
      "shopifyHeader.getResponsiveOurMethodLink",
      "shopifyHeader.getResponsiveOurStoryLink",
      "shopifyHeader.getResponsiveMembershipLink",
      "shopifyHeader.getResponsiveWorkoutsLink",
      "shopifyHeader.getResponsiveSeriesLink",
      "shopifyHeader.getResponsiveNewYorkLink",
      "shopifyHeader.getResponsiveChicagoLink",
      "shopifyHeader.getResponsiveLosAngelesLink",
      "shopifyHeader.getResponsiveVirtualStudioLink",
      "shopifyHeader.getResponsiveAllShopLink",
      "shopifyHeader.getResponsiveKitsLink",
      "shopifyHeader.getResponsiveEquipmentLink",
      "shopifyHeader.getResponsiveStreamingAccessLink",
      "shopifyHeader.getResponsiveAllBlogLink",
      "shopifyHeader.getResponsiveFitnessLink",
      "shopifyHeader.getResponsiveLifestyleLink",
      "shopifyHeader.getResponsiveNutritionLink",
      "shopifyHeader.getResponsiveTravelLink",
      "shopifyHeader.getResponsiveTestimonialsLink",
      "shopifyHeader.getResponsiveWomensWellnessLink",
    ];

    let existSelectors = [shopifyHeader.getResponsiveStreamingHeader];

    let stringExistSelectors = ["shopifyHeader.getResponsiveStreamingHeader"];

    let visibleSelectors = [
      shopifyHeader.getResponsiveCloseButton,
      shopifyHeader.getResponsiveAccountLink,
      shopifyHeader.getResponsiveSettingsLink,
      shopifyHeader.getResponsiveCommunicationsLink,
      shopifyHeader.getResponsiveLogoutLink,
    ];

    let stringVisibleSelectors = [
      "shopifyHeader.getResponsiveCloseButton",
      "shopifyHeader.getResponsiveAccountLink",
      "shopifyHeader.getResponsiveSettingsLink",
      "shopifyHeader.getResponsiveCommunicationsLink",
      "shopifyHeader.getResponsiveLogoutLink",
    ];

    let headerVisibleSelectors = [
      shopifyHeader.getHeaderPvolveLogoButton,
      shopifyHeader.getResponsiveHeaderFreeTrialCTA,
      shopifyHeader.getResponsiveMenuButton,
      shopifyHeader.getHeaderMiniCartButton,
    ];

    let stringHeaderVisibleSelectors = [
      "shopifyHeader.getHeaderPvolveLogoButton",
      "shopifyHeader.getResponsiveHeaderFreeTrialCTA",
      "shopifyHeader.getResponsiveMenuButton",
      "shopifyHeader.getHeaderMiniCartButton",
    ];

    for (const array of array_) {
      if (stringNonVisibleSelectors.includes(array)) {
        nonVisibleSelectors.splice(stringNonVisibleSelectors.indexOf(array), 1);
        stringNonVisibleSelectors.splice(
          stringNonVisibleSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleSelectors.includes(array)) {
        visibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
        stringVisibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
      }

      if (stringExistSelectors.includes(array)) {
        existSelectors.splice(stringExistSelectors.indexOf(array), 1);
        stringExistSelectors.splice(stringExistSelectors.indexOf(array), 1);
      }

      if (stringHeaderVisibleSelectors.includes(array)) {
        headerVisibleSelectors.splice(
          stringHeaderVisibleSelectors.indexOf(array),
          1,
        );
        stringHeaderVisibleSelectors.splice(
          stringHeaderVisibleSelectors.indexOf(array),
          1,
        );
      }
    }

    cy.scrollTo("top", { ensureScrollable: false });

    cy.assertExist(headerVisibleSelectors);

    shopifyHeader.getResponsiveMenuButton().click();
    cy.assertExist(nonVisibleSelectors);

    cy.assertVisible(visibleSelectors);

    shopifyHeader.getResponsiveCloseButton().click({ force: true });
  }
});

/**
 * Validates all of the selectors in the Shopify Header for a Subscribed user in Responsive view.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.responsiveShopifyHeaderSubscribed(exclude);'
 */
Cypress.Commands.add("responsiveShopifyHeaderSubscribed", function (array_) {
  if (Cypress.env("BASE_URL") === "https://www.pvolve.com") {
    if (array_ === undefined) {
      array_ = [];
    }

    let nonVisibleSelectors = [
      shopifyHeader.getResponsiveStreamingHeader,
      shopifyHeader.getResponsiveStudiosHeader,
      shopifyHeader.getResponsiveShopHeader,
      shopifyHeader.getResponsiveBlogHeader,
      shopifyHeader.getResponsiveMyPlanLink,
      shopifyHeader.getResponsiveWorkoutsLink,
      shopifyHeader.getResponsiveSeriesLink,
      shopifyHeader.getResponsiveNewYorkLink,
      shopifyHeader.getResponsiveChicagoLink,
      shopifyHeader.getResponsiveLosAngelesLink,
      shopifyHeader.getResponsiveVirtualStudioLink,
      shopifyHeader.getResponsiveAllShopLink,
      shopifyHeader.getResponsiveKitsLink,
      shopifyHeader.getResponsiveEquipmentLink,
      shopifyHeader.getResponsiveStreamingAccessLink,
      shopifyHeader.getResponsiveAllBlogLink,
      shopifyHeader.getResponsiveFitnessLink,
      shopifyHeader.getResponsiveLifestyleLink,
      shopifyHeader.getResponsiveNutritionLink,
      shopifyHeader.getResponsiveTravelLink,
      shopifyHeader.getResponsiveTestimonialsLink,
      shopifyHeader.getResponsiveWomensWellnessLink,
    ];

    let stringNonVisibleSelectors = [
      "shopifyHeader.getResponsiveStreamingHeader",
      "shopifyHeader.getResponsiveStudiosHeader",
      "shopifyHeader.getResponsiveShopHeader",
      "shopifyHeader.getResponsiveBlogHeader",
      "shopifyHeader.getResponsiveMyPlanLink",
      "shopifyHeader.getResponsiveWorkoutsLink",
      "shopifyHeader.getResponsiveSeriesLink",
      "shopifyHeader.getResponsiveNewYorkLink",
      "shopifyHeader.getResponsiveChicagoLink",
      "shopifyHeader.getResponsiveLosAngelesLink",
      "shopifyHeader.getResponsiveVirtualStudioLink",
      "shopifyHeader.getResponsiveAllShopLink",
      "shopifyHeader.getResponsiveKitsLink",
      "shopifyHeader.getResponsiveEquipmentLink",
      "shopifyHeader.getResponsiveStreamingAccessLink",
      "shopifyHeader.getResponsiveAllBlogLink",
      "shopifyHeader.getResponsiveFitnessLink",
      "shopifyHeader.getResponsiveLifestyleLink",
      "shopifyHeader.getResponsiveNutritionLink",
      "shopifyHeader.getResponsiveTravelLink",
      "shopifyHeader.getResponsiveTestimonialsLink",
      "shopifyHeader.getResponsiveWomensWellnessLink",
    ];

    let visibleSelectors = [
      shopifyHeader.getResponsiveCloseButton,
      shopifyHeader.getResponsiveAccountLink,
      shopifyHeader.getResponsiveSettingsLink,
      shopifyHeader.getResponsiveSubscriptionLink,
      shopifyHeader.getResponsiveCommunicationsLink,
      shopifyHeader.getResponsiveLogoutLink,
      //shopifyHeader.getResponsiveReferFriendLink ON HOLD FOR TRACKING
    ];

    let stringVisibleSelectors = [
      "shopifyHeader.getResponsiveCloseButton",
      "shopifyHeader.getResponsiveAccountLink",
      "shopifyHeader.getResponsiveSettingsLink",
      "shopifyHeader.getResponsiveSubscriptionLink",
      "shopifyHeader.getResponsiveCommunicationsLink",
      "shopifyHeader.getResponsiveLogoutLink",
      //'shopifyHeader.getResponsiveReferFriendLink' ON HOLD FOR TRACKING
    ];

    let headerVisibleSelectors = [
      shopifyHeader.getHeaderPvolveLogoButton,
      shopifyHeader.getResponsiveHeaderFreeTrialCTA,
      shopifyHeader.getResponsiveMenuButton,
      shopifyHeader.getHeaderMiniCartButton,
    ];

    let stringHeaderVisibleSelectors = [
      "shopifyHeader.getHeaderPvolveLogoButton",
      "shopifyHeader.getResponsiveHeaderFreeTrialCTA",
      "shopifyHeader.getResponsiveMenuButton",
      "shopifyHeader.getHeaderMiniCartButton",
    ];

    for (const array of array_) {
      if (stringNonVisibleSelectors.includes(array)) {
        nonVisibleSelectors.splice(stringNonVisibleSelectors.indexOf(array), 1);
        stringNonVisibleSelectors.splice(
          stringNonVisibleSelectors.indexOf(array),
          1,
        );
      }

      if (stringVisibleSelectors.includes(array)) {
        visibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
        stringVisibleSelectors.splice(stringVisibleSelectors.indexOf(array), 1);
      }

      if (stringHeaderVisibleSelectors.includes(array)) {
        headerVisibleSelectors.splice(
          stringHeaderVisibleSelectors.indexOf(array),
          1,
        );
        stringHeaderVisibleSelectors.splice(
          stringHeaderVisibleSelectors.indexOf(array),
          1,
        );
      }
    }

    cy.scrollTo("top", { ensureScrollable: false });

    cy.assertExist(headerVisibleSelectors);

    shopifyHeader.getResponsiveMenuButton().click();
    cy.assertExist(nonVisibleSelectors);

    cy.assertVisible(visibleSelectors);

    shopifyHeader.getResponsiveCloseButton().click({ force: true });
  }
});

/**
 * Validates all of the selectors in the Shopify Footer in Responsive view.
 *
 * Exclude usage:
 * Declare array with selectors to exclude as string
 * 'let exclude = ['appHeader.getFreeTrialButton'];'
 *
 * Call command with array in parameter
 * 'cy.responsiveShopifyFooter(exclude);'
 */
Cypress.Commands.add("responsiveShopifyFooter", function (array_) {
  if (Cypress.env("BASE_URL") === "https://www.pvolve.com") {
    if (array_ === undefined) {
      array_ = [];
    }

    cy.scrollTo("bottom", { ensureScrollable: false });

    let footerVisibleSelectors = [
      shopifyFooter.getResponsiveSupportButton,
      shopifyFooter.getResponsiveAboutButton,
      shopifyFooter.getResponsiveSocialButton,
      shopifyFooter.getResponsiveLegalButton,
    ];

    let stringFooterVisibleSelectors = [
      "shopifyFooter.getResponsiveSupportButton",
      "shopifyFooter.getResponsiveAboutButton",
      "shopifyFooter.getResponsiveSocialButton",
      "shopifyFooter.getResponsiveLegalButton",
    ];

    let supportVisibleSelectors = [
      shopifyFooter.getResponsiveFAQLink,
      shopifyFooter.getResponsiveReturnsLink,
      shopifyFooter.getResponsiveEducationDiscountLink,
      shopifyFooter.getResponsiveFirstResponderDiscountLink,
      shopifyFooter.getResponsiveCareersLink,
      shopifyFooter.getResponsiveContactLink,
      shopifyFooter.getResponsiveTrainerJobsLink,
    ];

    let stringSupportVisibleSelectors = [
      "shopifyFooter.getResponsiveFAQLink",
      "shopifyFooter.getResponsiveReturnsLink",
      "shopifyFooter.getResponsiveEducationDiscountLink",
      "shopifyFooter.getResponsiveFirstResponderDiscountLink",
      "shopifyFooter.getResponsiveCareersLink",
      "shopifyFooter.getResponsiveContactLink",
      "shopifyFooter.getResponsiveTrainerJobsLink",
    ];

    let aboutVisibleSelectors = [
      shopifyFooter.getResponsiveOurStoryLink,
      shopifyFooter.getResponsiveOurMethodLink,
      shopifyFooter.getResponsiveAdvisoryBoardLink,
      shopifyFooter.getResponsiveAffiliateProgramLink,
      shopifyFooter.getResponsiveFranchisingLink,
      shopifyFooter.getResponsiveCorporatePartnershipLink,
    ];

    let stringAboutVisibleSelectors = [
      "shopifyFooter.getResponsiveOurStoryLink",
      "shopifyFooter.getResponsiveOurMethodLink",
      "shopifyFooter.getResponsiveAdvisoryBoardLink",
      "shopifyFooter.getResponsiveAffiliateProgramLink",
      "shopifyFooter.getResponsiveFranchisingLink",
      "shopifyFooter.getResponsiveCorporatePartnershipLink",
    ];

    let socialVisibleSelectors = [
      shopifyFooter.getResponsiveInstagramLink,
      shopifyFooter.getResponsiveYouTubeLink,
      shopifyFooter.getResponsiveFacebookLink,
      shopifyFooter.getResponsiveTwitterLink,
      shopifyFooter.getResponsivePinterestLink,
      shopifyFooter.getResponsiveLinkedInLink,
    ];

    let stringSocialVisibleSelectors = [
      "shopifyFooter.getResponsiveInstagramLink",
      "shopifyFooter.getResponsiveYouTubeLink",
      "shopifyFooter.getResponsiveFacebookLink",
      "shopifyFooter.getResponsiveTwitterLink",
      "shopifyFooter.getResponsivePinterestLink",
      "shopifyFooter.getResponsiveLinkedInLink",
    ];

    let legalVisibleSelectors = [
      shopifyFooter.getResponsivePrivacyPolicyLink,
      shopifyFooter.getResponsiveTOSLink,
      shopifyFooter.getResponsiveLiabilityWaiverLink,
      shopifyFooter.getResponsiveDoNotSellMyInfoLink,
    ];

    let stringLegalVisibleSelectors = [
      "shopifyFooter.getResponsivePrivacyPolicyLink",
      "shopifyFooter.getResponsiveTOSLink",
      "shopifyFooter.getResponsiveLiabilityWaiverLink",
      "shopifyFooter.getResponsiveDoNotSellMyInfoLink",
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

    shopifyFooter.getResponsiveSupportButton().click();
    cy.assertVisible(supportVisibleSelectors);
    shopifyFooter.getResponsiveSupportButton().click();

    shopifyFooter.getResponsiveAboutButton().click();
    cy.assertVisible(aboutVisibleSelectors);
    shopifyFooter.getResponsiveAboutButton().click();

    shopifyFooter.getResponsiveSocialButton().click();
    cy.assertVisible(socialVisibleSelectors);
    shopifyFooter.getResponsiveSocialButton().click();

    shopifyFooter.getResponsiveLegalButton().click();
    cy.assertVisible(legalVisibleSelectors);
    shopifyFooter.getResponsiveLegalButton().click();
  }
});
