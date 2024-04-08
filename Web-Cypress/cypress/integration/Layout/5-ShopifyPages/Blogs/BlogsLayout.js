import BlogsPage from "../../../../support/pageobjects/BlogsPage.js";

const blogsPage = new BlogsPage();
const sizes = [
  Cypress.env("screenSizes").mobile,
  Cypress.env("screenSizes").largePhone,
  Cypress.env("screenSizes").tablet,
];

describe("Blogs POM Selector Validation Test", function () {
  it("Validates all of the selectors in the Blogs POM", function () {
    blogsPage.visitPage();

    cy.shopifyHeaderGuest();

    const visibleSelectors = [
      //Featured blog entry
      blogsPage.getFeaturedBlogItemLink,

      //Main blog entries
      blogsPage.getGridBlogItem1Link,
      blogsPage.getGridBlogItem2Link,
      blogsPage.getGridBlogItem3Link,
      blogsPage.getGridBlogItem4Link,
      blogsPage.getGridBlogItem5Link,
      blogsPage.getGridBlogItem6Link,
      blogsPage.getGridBlogItem7Link,
      blogsPage.getGridBlogItem8Link,
      blogsPage.getGridBlogItem9Link,
      blogsPage.getGridBlogItem10Link,
      blogsPage.getGridBlogItem11Link,
      blogsPage.getGridBlogItem12Link,

      //Previous & Next page buttons
      blogsPage.getDisabledPreviousPageButton,
      blogsPage.getEnabledNextPageButton,
    ];
    cy.assertVisible(visibleSelectors);
    blogsPage.getEnabledPreviousPageButton().should("not.exist");

    //KeepPass for ECOMM-340
    /*cy.responsiveShopifyFooter();*/
  });

  sizes.forEach((size) => {
    it(
      "Responsive - Blogs Page Validation for  " +
        size.width +
        ", " +
        size.height,
      function () {
        cy.viewport(size.width, size.height);

        blogsPage.visitPage();

        cy.responsiveShopifyHeaderGuest();

        const visibleSelectors = [
          //Featured blog entry
          blogsPage.getFeaturedBlogItemLink,

          //Main blog entries
          blogsPage.getGridBlogItem1Link,
          blogsPage.getGridBlogItem2Link,
          blogsPage.getGridBlogItem3Link,
          blogsPage.getGridBlogItem4Link,
          blogsPage.getGridBlogItem5Link,
          blogsPage.getGridBlogItem6Link,
          blogsPage.getGridBlogItem7Link,
          blogsPage.getGridBlogItem8Link,
          blogsPage.getGridBlogItem9Link,
          blogsPage.getGridBlogItem10Link,
          blogsPage.getGridBlogItem11Link,
          blogsPage.getGridBlogItem12Link,

          //Previous & Next page buttons
          blogsPage.getDisabledPreviousPageButton,
          blogsPage.getEnabledNextPageButton,
        ];
        cy.assertVisible(visibleSelectors);
        blogsPage.getEnabledPreviousPageButton().should("not.exist");

        //KeepPass for ECOMM-340
        /*cy.responsiveShopifyFooter();*/
      },
    );
  });
});
