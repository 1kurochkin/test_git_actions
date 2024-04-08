import ProductsPage from "./ProductsPage";

class AmazonGetStartedPage extends ProductsPage {
  /**
   * Visits the Total Transformation bundle product page
   */
  visitPage() {
    return cy.visit("/pages/amazon-get-started");
  }

  /**
   * Returns Promo Code text element
   * TODO: Update locator
   */
  getPromoCodeTextBox() {
    return cy.get('input[name="code"][placeholder="Promo Code"]');
  }

  /**
   * Returns Activate Your Streaming Membership buttom
   * TODO: Update locator
   */
  getActivateYourStreamingMembershipButton() {
    return cy.get("button.w-full.btn.btn-primary.desktop\\:w-auto");
  }

  /**
   * Returns Error message already in cart
   * TODO: Update locator
   */
  getErrorMessageAlreadyInCart() {
    return cy.get(".text-errorLight", { force: true });
  }
}
export default AmazonGetStartedPage;
