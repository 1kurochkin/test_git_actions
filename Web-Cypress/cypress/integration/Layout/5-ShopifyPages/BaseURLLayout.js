import BaseURLPage from "../../../support/pageobjects/BaseURLPage.js";

const baseURLPage = new BaseURLPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("BaseURL POM Selector Validation Test", function () {
  it("Validates all of the selectors in the BaseURL POM", function () {
    baseURLPage.visitPage();

    cy.shopifyHeaderGuest();

    const visibleSelectors = [
      baseURLPage.getPromoBanner,
      baseURLPage.getHeroText,
      baseURLPage.getHeroTakeOurQuizButton,
      baseURLPage.getFirstSectionHeaderText,
      baseURLPage.getFirstSectionMethodLink,
      baseURLPage.getSecondSectionHeaderText,
      baseURLPage.getSecondSectionEquipmentLink,
      baseURLPage.getThirdSectionHeaderText,
      baseURLPage.getThirdSectionInPersonLink,
      baseURLPage.getThirdSectionOnlineLink,
      baseURLPage.getFourthSectionHeaderText,
      baseURLPage.getFourthSectionPBallKitLink,
      baseURLPage.getFourthSectionEssentialsKitLink,
      baseURLPage.getFourthSectionTTKKitLink,
      baseURLPage.getFourthSectionFindMyPerfectKitButton,
      baseURLPage.getFifthSectionHeaderText,
      baseURLPage.getFifthSectionMeetAdvisoryLink,
      baseURLPage.getSixthSectionHeaderText,
      baseURLPage.getSixthSectionReadTestimonialsLink,
      baseURLPage.getSeventhSectionHeaderText,
      baseURLPage.getEighthSectionBodyText,
      baseURLPage.getNinthSectionHeaderText,
      baseURLPage.getNinthSectionFirstBlogLink,
      baseURLPage.getNinthSectionCarouselNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    cy.shopifyFooter();
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Base URL Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        baseURLPage.visitPage();

        cy.responsiveShopifyHeaderGuest();

        const visibleSelectors = [
          baseURLPage.getPromoBanner,
          baseURLPage.getHeroText,
          baseURLPage.getHeroTakeOurQuizButton,
          baseURLPage.getFirstSectionHeaderText,
          baseURLPage.getFirstSectionMethodLink,
          baseURLPage.getSecondSectionHeaderText,
          baseURLPage.getSecondSectionEquipmentLink,
          baseURLPage.getThirdSectionHeaderText,
          baseURLPage.getThirdSectionInPersonLink,
          baseURLPage.getThirdSectionOnlineLink,
          baseURLPage.getFourthSectionHeaderText,
          baseURLPage.getFourthSectionPBallKitLink,
          baseURLPage.getFourthSectionEssentialsKitLink,
          baseURLPage.getFourthSectionTTKKitLink,
          baseURLPage.getFourthSectionFindMyPerfectKitButton,
          baseURLPage.getFifthSectionHeaderText,
          baseURLPage.getFifthSectionMeetAdvisoryLink,
          baseURLPage.getSixthSectionHeaderText,
          baseURLPage.getSixthSectionReadTestimonialsLink,
          baseURLPage.getSeventhSectionHeaderText,
          baseURLPage.getEighthSectionBodyText,
          baseURLPage.getNinthSectionHeaderText,
          baseURLPage.getNinthSectionFirstBlogLink,
        ];
        cy.assertVisible(visibleSelectors);

        cy.responsiveShopifyFooter();
      },
    );
  });
});
