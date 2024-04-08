import CollectionsPage from "../../../../support/pageobjects/CollectionsPage.js";
import ProductsPage from "../../../../support/pageobjects/ProductsPage.js";
import LegacyCheckoutPage from "../../../../support/pageobjects/LegacyCheckoutPage.js";
import ShopifyHeader from "../../../../support/pageobjects/ShopifyHeader.js";

const shopifyHeader = new ShopifyHeader();
const collectionsPage = new CollectionsPage();
const productsPage = new ProductsPage();
const legacyCheckoutPage = new LegacyCheckoutPage();

describe("Subscribed User - Physical goods purchase", function () {
  it("Subscribed User - Physical goods purchase", function () {
    //Login
    cy.loginSubscribedUser();

    //Navigate to legacy checkout with physical product
    cy.wait(3000);
    cy.scrollTo("top");
    collectionsPage.visitEquipmentPage();
    collectionsPage.getBodyProductOne().click();
    cy.wait(1500);
    productsPage.getBodyAddToCartButton().click({ force: true });
    cy.wait(1500);
    shopifyHeader.getHeaderMiniCartCheckoutButton().click({ force: true });

    //Fill form details from express checkout page
    legacyCheckoutPage.getFirstNameInput().type("John");
    legacyCheckoutPage.getLastNameInput().type("Doe");
    legacyCheckoutPage.getStreetAddressInput().type("1111 Test Dr.");
    legacyCheckoutPage.getApartmentAddressInput().type("C");
    legacyCheckoutPage.getPostalCodeInput().type("95476");
    legacyCheckoutPage.getCityInput().type("Sonoma");
    legacyCheckoutPage.getStateInputDropdown().select("California");
    legacyCheckoutPage.getPhoneInput().type("9999999999");
    legacyCheckoutPage.getContinueButton().click({ force: true });
    cy.wait(2000);

    //Check if  Shipping Section is visible are able to proceed payment
    cy.url().should("include", "contact_information&step=shipping_method");
    legacyCheckoutPage.getShippingTypeSection().should("be.visible");
    cy.wait(2000);
    legacyCheckoutPage.getContinueButton().click({ force: true });

    //Apply payment Checkout button
    cy.url().should("include", "step=payment_method");
    legacyCheckoutPage.getContinueButton().should("be.visible");
  });
});
