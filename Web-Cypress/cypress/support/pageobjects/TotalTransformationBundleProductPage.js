import ProductsPage from "./ProductsPage";

class TotalTransformationBundlePage extends ProductsPage {
  /**
   * Visits the Total Transformation bundle product page
   */
  visitPage() {
    return cy.visit("/products/total-transformation-bundle");
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

  /**
   * Returns 3 signature pieces section
   * TODO: Update locator
   */
  get3SignaturePiecesSection() {
    return cy
      .get("h3")
      .contains("3 Signature Pieces", { matchCase: false })
      .parentsUntil('div[x-data*="$store"]');
  }

  /**
   * Returns 8 more sculpting section
   * TODO: Update locator
   */
  get8MoreSculptingSection() {
    return cy
      .get("h3")
      .contains("8 more sculpting", { matchCase: false })
      .parentsUntil('div[x-data*="$store"]');
  }

  /**
   * Returns 2 recovery tools section
   * TODO: Update locator
   */
  get2RecoveryToolsSection() {
    return cy
      .get("h3")
      .contains("2 Recovery Tools", { matchCase: false })
      .parentsUntil('div[x-data*="$store"]');
  }
}
export default TotalTransformationBundlePage;
