class BlogsPage {
  /**
   * Visits blogs page
   */
  visitPage() {
    return cy.visit(Cypress.env("BASE_URL") + "/blogs/all");
  }

  /**
   * Returns the featured blog item link
   */
  getFeaturedBlogItemLink() {
    return cy.get('li[class*="blog-grid-featured-item"] a[href*="/blogs/"]');
  }

  /**
   * Returns the 1st blog-grid item link
   */
  getGridBlogItem1Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(0);
  }

  /**
   * Returns the 2nd blog-grid item link
   */
  getGridBlogItem2Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(1);
  }

  /**
   * Returns the 3rd blog-grid item link
   */
  getGridBlogItem3Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(2);
  }

  /**
   * Returns the 4th blog-grid item link
   */
  getGridBlogItem4Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(3);
  }

  /**
   * Returns the 5th blog-grid item link
   */
  getGridBlogItem5Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(4);
  }

  /**
   * Returns the 6th blog-grid item link
   */
  getGridBlogItem6Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(5);
  }

  /**
   * Returns the 7th blog-grid item link
   */
  getGridBlogItem7Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(6);
  }

  /**
   * Returns the 8th blog-grid item link
   */
  getGridBlogItem8Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(7);
  }

  /**
   * Returns the 9th blog-grid item link
   */
  getGridBlogItem9Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(8);
  }

  /**
   * Returns the 10th blog-grid item link
   */
  getGridBlogItem10Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(9);
  }

  /**
   * Returns the 11th blog-grid item link
   */
  getGridBlogItem11Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(10);
  }

  /**
   * Returns the 12th blog-grid item link
   */
  getGridBlogItem12Link() {
    return cy
      .get(
        'li[class*="blog-grid-item"] a[href*="/blogs"][class="blog-grid-item__link"]',
      )
      .eq(11);
  }

  /**
   * Returns the disabled previous page button
   */
  getDisabledPreviousPageButton() {
    return cy.get('div[class*="pagination__arrow"]').contains("Previous page");
  }

  /**
   * Returns the enabled previous page
   */
  getEnabledPreviousPageButton() {
    return cy.get('a[class*="pagination__arrow"]').contains("Previous page");
  }

  /**
   * Returns the disabled next page button
   */
  getDisabledNextPageButton() {
    return cy.get('div[class*="pagination__arrow"]').contains("Next page");
  }

  /**
   * Returns the enabled next page button
   */
  getEnabledNextPageButton() {
    return cy.get('a[class*="pagination__arrow"]').contains("Next page");
  }
}
export default BlogsPage;
