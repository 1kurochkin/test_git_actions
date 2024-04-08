import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";
import DigitalMembershipPage from "../../../../support/pageobjects/DigitalMembershipPage";
import Recover9ProductPage from "../../../../support/pageobjects/Recover9ProductPage";

const productsPage = new ProductsPage();
const shopifyHeader = new ShopifyHeader();
const digitalMembershipPage = new DigitalMembershipPage();
const recover9Product = new Recover9ProductPage();

function verifyAddToCart() {
  if (Cypress.env("APP_BASE_URL") === "https://app.pvolve.com") {
    return cy
      .get('button[class="btn-add-to-cart"]')
      .invoke("text")
      .then((text) => {
        const capitalText = text.toUpperCase();

        expect(capitalText.replaceAll(" ", "")).to.include("ADDTOCART");
      });
  } else {
    return cy
      .get('button[class="btn-add-to-cart"]')
      .invoke("text")
      .then((text) => {
        const capitalText = text.toUpperCase();

        try {
          expect(capitalText.replaceAll(" ", "")).to.include("ADDTOCART");
        } catch (e) {
          try {
            expect(capitalText.replaceAll(" ", "")).to.include("PRE-ORDER");
          } catch (error) {
            expect(capitalText.replaceAll(" ", "")).to.include("SOLDOUT");
          }
        }
      });
  }
}

describe("Guest - All Products Test", function () {
  it("Digital-Membership Product Page", function () {
    productsPage.visitProductPage("streaming-access");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    const visibleSelectors = [
      digitalMembershipPage.get12monthAddToCartButton,
      digitalMembershipPage.get1monthAddToCartButton,
      digitalMembershipPage.get12monthMembershipLink,
      digitalMembershipPage.get1monthMembershipLink,
    ];
    cy.assertVisible(visibleSelectors);
  });

  it("Essentials Kit Product Page", function () {
    productsPage.visitProductPage("essentials-kit");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage
      .getBodyProductTitle()
      .contains("essentials kit", { matchCase: false });

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyAddToCartButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("Total Transformation Kit Product Page", function () {
    productsPage.visitProductPage("total-transformation-kit");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("transformation kit");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("P.Ball Starter Kit Product Page", function () {
    productsPage.visitProductPage("p-ball-3-months-streaming-kit");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage
      .getBodyProductTitle()
      .contains("p.ball kit", { matchCase: false });

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("P.Ball Product Page", function () {
    productsPage.visitProductPage("p-ball-strap-pump");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("p.ball");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodyMintColorButton,
      productsPage.getBodyGrayColorButton,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("P.Band Product Page", function () {
    productsPage.visitProductPage("p-band");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("p.band");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("P.3 Trainer Product Page", function () {
    productsPage.visitProductPage("p-3");
    cy.wait(1000);

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("p.3 trainer");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("Gliders Product Page", function () {
    productsPage.visitProductPage("gliders-teal");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("gliders");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("Precision Mat Product Page", function () {
    productsPage.visitProductPage("precision-mat");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("precision mat");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("P.Mat Product Page", function () {
    productsPage.visitProductPage("p-mat-new");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("p.mat");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("P.Volve Slant Board Product Page", function () {
    productsPage.visitProductPage("pvolve-slant-board");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("slant board");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("Precision Foam Roller Product Page", function () {
    productsPage.visitProductPage("precision-foam-roller");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("precision foam roller");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("2lb Hand Weights Product Page", function () {
    productsPage.visitProductPage("2lb-hand-weights-black");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("hand weights");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("3lb Ankle Weights Product Page", function () {
    productsPage.visitProductPage("3-lb-ankle-weights");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("ankle weights");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("1.5lb Ankle Weights Product Page", function () {
    productsPage.visitProductPage("1-5-lb-ankle-weights");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("ankle weights");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("Massage Stick Product Page", function () {
    productsPage.visitProductPage("massage-stick");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("massage stick");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("Heavy Ankle Band Product Page", function () {
    productsPage.visitProductPage("heavy-ankle-band");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("heavy ankle band");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("Light Ankle Band Product Page", function () {
    productsPage.visitProductPage("light-ankle-band");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("light ankle band");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,

      //[BODY] Gallery
      productsPage.getBodyGalleryItemOne,
      productsPage.getBodyGalleryItemTwo,
      productsPage.getBodyGalleryNextButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("Glider Floor Protectors Product Page", function () {
    productsPage.visitProductPage("glider-gloves");

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    productsPage.getBodyProductTitle().contains("glider floor protectors");

    const visibleSelectors = [
      //[BODY] Product
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodyBenefitsSection,
      productsPage.getBodyUpsellItemOneAddToCartButton,
      productsPage.getBodyFAQAccordianOneButton,
    ];
    cy.assertVisible(visibleSelectors);

    verifyAddToCart();
  });

  it("Recover 9 Product Page", function () {
    recover9Product.visitRecover9Page();
    cy.waitForShopifyPageLoad();

    shopifyHeader.getHeaderLoginLink().should("be.visible");

    const visibleSelectors = [
      productsPage.getBodyBuyNowButton,
      productsPage.getBodyAddToCartButton,
      productsPage.getBodyQuantityDropDown,
      productsPage.getBodySlideshowPreviousArrowButton,
      productsPage.getBodySlideshowNextArrowButton,
      productsPage.getBodySlideshowFirstButton,
      productsPage.getBodySlideshowSecondButton,
      productsPage.getBodyFAQAccordianOneButton,
      productsPage.getBodyFAQAccordianTwoButton,
    ];
    cy.assertVisible(visibleSelectors);
  });
});
