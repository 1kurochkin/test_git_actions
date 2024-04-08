import ProductsPage from "./ProductsPage";

class SignatureBundlePage extends ProductsPage {
  /**
   * Visits the Total Transformation bundle product page
   */
  visitPage() {
    return cy.visit("/products/signature-bundle");
  }

  /**
   * Returns what's included container
   * TODO: Update locator
   */
  getWhatsIncludedContainer() {
    return cy.get("h6").contains("Whats included", { matchCase: false });
  }

  /**
   * Returns results container
   * TODO: Update locator
   */
  getResultsContainer() {
    return cy.get("h6").contains("Results", { matchCase: false });
  }

  /**
   * Returns home trial container
   * TODO: Update locator
   */
  getHomeTrialContainer() {
    return cy.get("h6").contains("Home Trial", { matchCase: false });
  }
}
export default SignatureBundlePage;
