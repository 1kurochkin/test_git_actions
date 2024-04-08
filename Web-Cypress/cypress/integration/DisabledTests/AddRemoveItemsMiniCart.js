import CollectionsPage from "../../support/pageobjects/CollectionsPage.js";
import ProductsPage from "../../support/pageobjects/ProductsPage.js";
import ShopifyHeader from "../../support/pageobjects/ShopifyHeader.js";

const collectionsPage = new CollectionsPage();
const productsPage = new ProductsPage();
const shopifyHeader = new ShopifyHeader();

describe("Guest - Add and Remove Items from Mini-Cart", function () {
  it("Guest - Add and Remove Items from Mini-Cart", function () {
    collectionsPage.visitEquipmentPage();

    collectionsPage.getBodyProductTwo().click();
    cy.wait(1500);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(1500);
    collectionsPage.visitEquipmentPage();
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(1500);
    shopifyHeader
      .getHeaderMiniCartFirstItemRemoveButton()
      .click({ force: true });
    cy.wait(1500);

    collectionsPage.getBodyProductThree().click();
    cy.wait(1500);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(1500);
    collectionsPage.visitEquipmentPage();
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(1500);
    shopifyHeader
      .getHeaderMiniCartFirstItemRemoveButton()
      .click({ force: true });
    cy.wait(1500);

    collectionsPage.getBodyProductNine().click();
    cy.wait(1500);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(1500);
    collectionsPage.visitEquipmentPage();
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(1500);
    shopifyHeader
      .getHeaderMiniCartFirstItemRemoveButton()
      .click({ force: true });
    cy.wait(1500);

    collectionsPage.getBodyProductFive().click();
    cy.wait(1500);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(1500);
    collectionsPage.visitEquipmentPage();
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(1500);
    shopifyHeader
      .getHeaderMiniCartFirstItemRemoveButton()
      .click({ force: true });
    cy.wait(1500);

    collectionsPage.getBodyProductSix().click();
    cy.wait(1500);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(1500);
    collectionsPage.visitEquipmentPage();
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(1500);
    shopifyHeader
      .getHeaderMiniCartFirstItemRemoveButton()
      .click({ force: true });
    cy.wait(1500);

    collectionsPage.getBodyProductSeven().click();
    cy.wait(1500);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(1500);
    collectionsPage.visitEquipmentPage();
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(1500);
    shopifyHeader
      .getHeaderMiniCartFirstItemRemoveButton()
      .click({ force: true });
    cy.wait(1500);

    collectionsPage.getBodyProductEight().click();
    cy.wait(1500);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(1500);
    collectionsPage.visitEquipmentPage();
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(1500);
    shopifyHeader
      .getHeaderMiniCartFirstItemRemoveButton()
      .click({ force: true });
    cy.wait(1500);

    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(1500);

    cy.get(
      'div[data-component="mini-cart"] table[class="cart-table"] tbody tr a[class="cart-item__remove"]',
    ).should("not.exist");
  });
});
