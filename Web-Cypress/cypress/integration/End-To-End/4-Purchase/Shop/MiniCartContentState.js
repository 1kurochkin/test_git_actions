import CollectionsPage from "../../../../support/pageobjects/CollectionsPage.js";
import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";

const collectionsPage = new CollectionsPage();
const productsPage = new ProductsPage();
const shopifyHeader = new ShopifyHeader();

describe("Guest - Mini-Cart Content State", function () {
  it("Guest - Mini-Cart Content State", function () {
    collectionsPage.visitEquipmentPage();

    collectionsPage.getBodyProductTwo().click();
    cy.wait(2000);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(2000);
    collectionsPage.visitEquipmentPage();

    collectionsPage.getBodyProductSeven().click();
    cy.wait(2000);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(2000);
    collectionsPage.visitEquipmentPage();
    collectionsPage.getBodyProductSix().click();
    cy.wait(2000);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(2000);
    collectionsPage.visitEquipmentPage();
    shopifyHeader
      .getHeaderMiniCartQuantity()
      .contains("3")
      .should("be.visible");

    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(1000);
    shopifyHeader
      .getHeaderMiniCartFirstItemQuantityDropDown()
      .select("2", { force: true });
    cy.wait(1000);
    shopifyHeader
      .getHeaderMiniCartSecondItemQuantityDropDown()
      .select("2", { force: true });
    cy.wait(2000);
    shopifyHeader
      .getHeaderMiniCartQuantity()
      .contains("5")
      .should("be.visible");

    shopifyHeader
      .getHeaderStreamingSubNavWorkoutsButton()
      .click({ force: true });
    cy.go("back");
    shopifyHeader
      .getHeaderMiniCartQuantity()
      .contains("5")
      .should("be.visible");

    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(500);
    shopifyHeader
      .getHeaderMiniCartThirdItemRemoveButton()
      .click({ force: true });
    cy.wait(500);
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(500);
    shopifyHeader
      .getHeaderMiniCartSecondItemRemoveButton()
      .click({ force: true });
    cy.wait(500);
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(500);
    shopifyHeader
      .getHeaderMiniCartFirstItemRemoveButton()
      .click({ force: true });
    cy.wait(500);
    shopifyHeader.getHeaderMiniCartButton().click();
    cy.wait(500);
    cy.get(
      'div[data-component="mini-cart"] table[class="cart-table"] tbody tr a[class="cart-item__remove"]',
    ).should("not.exist");
  });
});
