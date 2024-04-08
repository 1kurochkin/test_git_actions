class AppFooter {
  /**
   * [FOOTER][STICKY-CTA] Returns the 'Try For Free' button in the Sticky CTA.
   */
  getStickyCTATryForFreeButton() {
    return cy.get('div[class*="floating-free-trial"] a[href*="month_trial"]');
  }

  /**
   * [FOOTER][STICKY-CTA] Returns the 'X' button in the Sticky CTA that closes it.
   */
  getStickyCTACloseButton() {
    return cy.get(
      'div[class*="floating-free-trial"] div[class*="start-trial-module--button-close"]',
    );
  }

  /**
   * [FOOTER][SUPPORT] Returns the 'faqs' link in the footer.
   */
  getFooterFaqs() {
    return cy.get('div[class*="footer-module"]').find('a[href*="pages/faq"]');
  }

  /**
   * [FOOTER][SUPPORT] Returns the 'return policy' link in the footer.
   */
  getFooterReturnPolicy() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="pages/return-policy"]');
  }

  /**
   * [FOOTER][SUPPORT] Returns the 'education discount' link in the footer.
   */
  getFooterEducationDiscount() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="pages/student-discount"]');
  }

  /**
   * [FOOTER][SUPPORT] Returns the 'first responder discount' link in the footer.
   */
  getFooterFirstResponderDiscount() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="pages/health-heroes"]');
  }

  /**
   * [FOOTER][SUPPORT] Returns the 'careers' link in the footer.
   */
  getFooterCareers() {
    return cy.get('div[class*="footer-module"]').find('[alt="Careers"]');
  }

  /**
   * [FOOTER][SUPPORT] Returns the 'contact' link in the footer.
   */
  getFooterContact() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="pages/contact"]');
  }

  /**
   * [FOOTER][SUPPORT] Returns the 'trainer jobs' link in the footer.
   */
  getFooterTrainerJobs() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="pages/trainer-jobs"]');
  }

  /**
   * [FOOTER][ABOUT] Returns the 'about' link in the footer.
   */
  getFooterAbout() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="pages/about-pvolve"]');
  }

  /**
   * [FOOTER][ABOUT] Returns the 'advisory board' link in the footer.
   */
  getFooterAdvisoryBoard() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="pages/advisory-board"]');
  }

  /**
   * [FOOTER][ABOUT] Returns the 'press' link in the footer.
   */
  getFooterPress() {
    return cy.get('div[class*="footer-module"]').find('a[href*="pages/press"]');
  }

  /**
   * [FOOTER][ABOUT] Returns the 'affiliate programs' link in the footer.
   */
  getFooterAffiliatePrograms() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="app.impact.com/campaign-mediapartner-signup/Pvolve"]');
  }

  /**
   * [FOOTER][ABOUT] Returns the 'franchising' link in the footer.
   */
  getFooterFranchising() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="www.pvolvefranchise.com"]');
  }

  /**
   * [FOOTER][ABOUT] Returns the 'corporate partnership' link in the footer.
   */
  getFooterCorporatePartnership() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="pages/corporate"]');
  }

  /**
   * [FOOTER][SOCIAL] Returns the 'instagram' link in the footer.
   */
  getFooterInstagram() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="www.instagram.com/pvolve"]');
  }

  /**
   * [FOOTER][SOCIAL] Returns the 'youtube' link in the footer.
   */
  getFooterYoutube() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="www.youtube.com/pvolvefitness"]');
  }

  /**
   * [FOOTER][SOCIAL] Returns the 'facebook' link in the footer.
   */
  getFooterFacebook() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="www.facebook.com/pvolve"]');
  }

  /**
   * [FOOTER][SOCIAL] Returns the 'twitter' link in the footer.
   */
  getFooterTwitter() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="twitter.com/pvolvefitness"]');
  }

  /**
   * [FOOTER][SOCIAL] Returns the 'pinterest' link in the footer.
   */
  getFooterPinterest() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="www.pinterest.com/pvolvefitness"]');
  }

  /**
   * [FOOTER][SOCIAL] Returns the 'linkedin' link in the footer.
   */
  getFooterLinkedIn() {
    return cy.get('div[class*="footer-module"]').find('[alt="Linkedin"]');
  }

  /**
   * [FOOTER][LEGAL] Returns the 'privacy policy' link in the footer.
   */
  getFooterPrivacyPolicy() {
    return cy.get('div[class*="footer-module"]').find('[alt="Privacy Policy"]');
  }

  /**
   * [FOOTER][LEGAL] Returns the 'terms of service' link in the footer.
   */
  getFooterTermsOfService() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="pages/terms-of-service"]');
  }

  /**
   * [FOOTER][LEGAL] Returns the 'liability waiver' link in the footer.
   */
  getFooterLiabilityWaiver() {
    return cy
      .get('div[class*="footer-module"]')
      .find('a[href*="pages/fitness-class-waiver"]');
  }

  /**
   * [FOOTER][LEGAL] Returns the 'do not sell my info' link in the footer.
   */
  getFooterDoNotSellMyInfo() {
    return cy
      .get('div[class*="footer-module"]')
      .find('[alt="do not sell my info"]');
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Support Icon in the footer.
   */
  getResponsiveSupportIcon() {
    return cy
      .get(
        'footer[class*="footer-module"] div[class*="accordion ui fluid"] div[class*="title"]',
      )
      .contains("support", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the FAQ link in the footer.
   *
   * NOTE: Only visible after the Support Icon has been clicked.
   */
  getResponsiveFAQLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/faq"]')
      .contains("FAQ", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Returns link in the footer.
   *
   * NOTE: Only visible after the Support Icon has been clicked.
   */
  getResponsiveReturnsLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/return-policy"]')
      .contains("Returns", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Education Discount link in the footer.
   *
   * NOTE: Only visible after the Support Icon has been clicked.
   */
  getResponsiveEducationDiscountLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/student-discount"]')
      .contains("Education Discount", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the First Responder Discount link in the footer.
   *
   * NOTE: Only visible after the Support Icon has been clicked.
   */
  getResponsiveFirstResponderDiscountLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/health-heroes"]')
      .contains("First Responder Discount", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Careers link in the footer.
   *
   * NOTE: Only visible after the Support Icon has been clicked.
   */
  getResponsiveCareersLink() {
    return cy
      .get(
        'a[class*="footer-module"][href*="https://www.linkedin.com/company/p-volve/"]',
      )
      .contains("Careers", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Contact link in the footer.
   *
   * NOTE: Only visible after the Support Icon has been clicked.
   */
  getResponsiveContactLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/contact"]')
      .contains("Contact", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Trainer Jobs link in the footer.
   *
   * NOTE: Only visible after the Support Icon has been clicked.
   */
  getResponsiveTrainerJobsLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/trainer-jobs"]')
      .contains("Trainer Jobs", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the About Icon in the footer.
   */
  getResponsiveAboutIcon() {
    return cy
      .get(
        'footer[class*="footer-module"] div[class*="accordion ui fluid"] div[class*="title"]',
      )
      .contains("about", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the About link in the footer.
   *
   * NOTE: Only visible after the About Icon has been clicked.
   */
  getResponsiveAboutLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/about-pvolve"]')
      .contains("About", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Advisory Board link in the footer.
   *
   * NOTE: Only visible after the About Icon has been clicked.
   */
  getResponsiveAdvisoryBoardLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/advisory-board"]')
      .contains("Advisory Board", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Press link in the footer.
   *
   * NOTE: Only visible after the About Icon has been clicked.
   */
  getResponsivePressLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/press"]')
      .contains("Press", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Affiliate Program link in the footer.
   *
   * NOTE: Only visible after the About Icon has been clicked.
   */
  getResponsiveAffiliateProgramLink() {
    return cy
      .get(
        'a[class*="footer-module"][href*="https://app.impact.com/campaign-mediapartner-signup/Pvolve.brand?execution=e1s1"]',
      )
      .contains("Affiliate Program", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Franchising link in the footer.
   *
   * NOTE: Only visible after the About Icon has been clicked.
   */
  getResponsiveFranchisingLink() {
    return cy
      .get('a[class*="footer-module"][href*="https://www.pvolvefranchise.com"]')
      .contains("Franchising", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Corporate Partnership link in the footer.
   *
   * NOTE: Only visible after the About Icon has been clicked.
   */
  getResponsiveCorporatePartnershipLink() {
    return cy
      .get('a[class*="footer-module"][href*="pages/corporate"]')
      .contains("Corporate Partnership", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Social Icon in the footer.
   */
  getResponsiveSocialIcon() {
    return cy
      .get(
        'footer[class*="footer-module"] div[class*="accordion ui fluid"] div[class*="title"]',
      )
      .contains("social", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Instagram link in the footer.
   *
   * NOTE: Only visible after the Social Icon has been clicked.
   */
  getResponsiveInstagramLink() {
    return cy
      .get(
        'a[class*="footer-module"][href*="https://www.instagram.com/pvolve"]',
      )
      .contains("Instagram", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the YouTube link in the footer.
   *
   * NOTE: Only visible after the Social Icon has been clicked.
   */
  getResponsiveYouTubeLink() {
    return cy
      .get(
        'a[class*="footer-module"][href*="https://www.youtube.com/pvolvefitness"]',
      )
      .contains("YouTube", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Facebook link in the footer.
   *
   * NOTE: Only visible after the Social Icon has been clicked.
   */
  getResponsiveFacebookLink() {
    return cy
      .get('a[class*="footer-module"][href*="https://www.facebook.com/pvolve"]')
      .contains("Facebook", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Twitter link in the footer.
   *
   * NOTE: Only visible after the Social Icon has been clicked.
   */
  getResponsiveTwitterLink() {
    return cy
      .get(
        'a[class*="footer-module"][href*="https://twitter.com/pvolvefitness"]',
      )
      .contains("Twitter", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Pinterest link in the footer.
   *
   * NOTE: Only visible after the Social Icon has been clicked.
   */
  getResponsivePinterestLink() {
    return cy
      .get(
        'a[class*="footer-module"][href*="https://www.pinterest.com/pvolvefitness/_shop/"]',
      )
      .contains("Pinterest", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the LinkedIn link in the footer.
   *
   * NOTE: Only visible after the Social Icon has been clicked.
   */
  getResponsiveLinkedInLink() {
    return cy
      .get(
        'a[class*="footer-module"][href*="https://www.linkedin.com/company/p-volve/"]',
      )
      .contains("Linkedin", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Legal Icon in the footer.
   */
  getResponsiveLegalIcon() {
    return cy
      .get(
        'footer[class*="footer-module"] div[class*="accordion ui fluid"] div[class*="title"]',
      )
      .contains("legal", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Privacy Policy link in the footer.
   *
   * NOTE: Only visible after the Legal Icon has been clicked.
   */
  getResponsivePrivacyPolicyLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/privacy-policy"]')
      .contains("Privacy Policy", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Terms of Service link in the footer.
   *
   * NOTE: Only visible after the Legal Icon has been clicked.
   */
  getResponsiveTOSLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/terms-of-service"]')
      .contains("Terms of Service", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Liability Waiver link in the footer.
   *
   * NOTE: Only visible after the Legal Icon has been clicked.
   */
  getResponsiveLiabilityWaiverLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/fitness-class-waiver"]')
      .contains("liability waiver", { matchCase: false });
  }

  /**
   * [RESPONSIVE][FOOTER] Returns the Do Not Sell My Info link in the footer.
   *
   * NOTE: Only visible after the Legal Icon has been clicked.
   */
  getResponsiveDoNotSellMyInfoLink() {
    return cy
      .get('a[class*="footer-module"][href*="/pages/privacy-policy"]')
      .contains("do not sell my info", { matchCase: false });
  }
}
export default AppFooter;
