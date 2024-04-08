import ProductsPage from "./ProductsPage";

class StreamingMembershipFreeBundlePage extends ProductsPage {
  /**
   * Visits the Streaming Membership bundle product page
   */
  visitPage() {
    return cy.visit("products/streaming-membership");
  }

  /**
   * Returns "Try Classes Free for 7 Days" button
   * TODO: Update locator
   */
  getTryClassesFreeButton() {
    return cy
      .get('button[data-cta-name="add_to_cart_cta"]')
      .contains("Try Free for 7 Days", { matchCase: false });
  }

  /**
   * Returns "It looks like you already have a membership in your cart. You may only checkout with one membership at at time." message
   * TODO: Update locator, Name too long
   */
  getAlreadyHasAMembershipInCart() {
    return cy
      .get("p")
      .contains(
        "It looks like you already have a membership in your cart. You may only checkout with one membership at at time",
        { matchCase: false },
      );
  }
}

export default StreamingMembershipFreeBundlePage;
