import CollectionsPage from "../../../../support/pageobjects/CollectionsPage.js";
import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";

const collectionsPage = new CollectionsPage();
const productsPage = new ProductsPage();

describe("Subscribed User - Kit To Set", function () {
  it("Subscribed User - Kit To Set", function () {
    cy.loginSubscribedUser();
    cy.waitForAppPageLoad();

    //User hovers over and clicks the Kits button in AppHeader
    collectionsPage.visitKitsPage();

    //User sees that the URL says /collections/kits-entitled
    cy.url().should("includes", "/collections/kits-entitled");

    //User sees that the first Product is a Set
    collectionsPage.getBodyProductOne().should("include.text", "set");

    //User visits the Essentials Kit Product page
    productsPage.visitEssentialsKitPage();

    //User sees that the URL says /products/essentials-set
    cy.url().should("includes", "/products/essentials-set");

    //User sees that the Product title says Set
    productsPage.getBodyProductTitle().should("include.text", "set");
  });
});
