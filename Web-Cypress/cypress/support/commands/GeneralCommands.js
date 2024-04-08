/**
 * Assert the entered array of elements is visible.
 *
 * ex: cy.assertVisible(array);
 */
Cypress.Commands.add("assertVisible", function (array) {
  for (const array_ of array) {
    array_.scrollIntoView().should("be.visible");
  }
});

const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
  if (opts.displayName === "script" || opts.name === "request") {
    return;
  }
  return origLog(opts, ...other);
};

/**
 * Assert the entered array of elements is not visible.
 *
 * ex: cy.assertNotVisible(array);
 */
Cypress.Commands.add("assertNotVisible", function (array) {
  for (const array_ of array) {
    array_.should("not.be.visible");
  }
});

/**
 * Assert the entered array of elements exists.
 *
 * Avoid using this when possible.
 *
 * ex: cy.assertExist(array);
 */
Cypress.Commands.add("assertExist", function (array) {
  for (const array_ of array) {
    array_.should("exist");
  }
});

/**
 * Assert the entered array of elements not exists.
 *
 * Avoid using this when possible.
 *
 * ex: cy.assertNotExist(array);
 */
Cypress.Commands.add("assertNotExist", function (array) {
  for (const array_ of array) {
    array_().should("not.exist");
  }
});

/**
 * Assert the entered element has certain attribute.
 *
 * ex: element.assertAttribute( attributeName, attributeValue);
 */
Cypress.Commands.add(
  "assertAttribute",
  { prevSubject: true },
  (element, attributeName, attributeValue) => {
    cy.wrap(element).should("have.attr", attributeName, attributeValue);
  },
);

/**
 * Assert the entered element contains certain value value in its attribtute.
 *
 * ex: element.assertAttributeContains(attributeName, attributeValue);
 */
Cypress.Commands.add(
  "assertAttributeContains",
  { prevSubject: true },
  (element, attributeName, attributeValueSubstring) => {
    cy.wrap(element).should(($el) => {
      const actualAttributeValue = $el.attr(attributeName);
      expect(actualAttributeValue).to.match(
        new RegExp(attributeValueSubstring),
      );
    });
  },
);

/**
 * Assert the entered element has certain attribute.
 *
 * ex: element.assertProperty(propertyName, propertyValue);
 */
Cypress.Commands.add(
  "assertProperty",
  { prevSubject: true },
  (element, propertyName, propertyValue) => {
    cy.wrap(element).should("have.prop", propertyName, propertyValue);
  },
);

/**
 * Assert the entered element has certain css.
 *
 * ex: element.assertCss(cssName, cssValue);
 */
Cypress.Commands.add(
  "assertCss",
  { prevSubject: true },
  (element, cssName, cssValue) => {
    cy.wrap(element).should("have.css", cssName, cssValue);
  },
);

/**
 * Assert the entered element is enabled.
 *
 * ex: element.assertIsEnabled(true);
 */
Cypress.Commands.add(
  "assertIsEnabled",
  { prevSubject: true },
  (element, validateIsEnabled) => {
    if (validateIsEnabled) {
      cy.wrap(element).should("not.have.attr", "disabled");
    } else {
      cy.wrap(element).should("have.attr", "disabled");
    }
  },
);

/**
 * Assert the entered element contains expectedText.
 *
 * ex: element.assertTextContains(element, expectedText);
 */
Cypress.Commands.add(
  "assertTextContains",
  { prevSubject: true },
  (element, expectedText) => {
    cy.wrap(element).should(($el) => {
      const actualText = $el.text();
      const normalizedActualText = actualText
        .toLowerCase()
        .trim()
        .replace(/[\t\n]/g, "");
      const normalizedExpectedValue = expectedText
        .trim()
        .toLowerCase()
        .replace(/[\t\n]/g, "");
      expect(normalizedActualText).to.include(normalizedExpectedValue);
    });
  },
);

/**
 * Assert the entered element does not contain expectedText.
 *
 * ex: element.assertTextNotContains(element, expectedText);
 */
Cypress.Commands.add(
  "assertTextNotContains",
  { prevSubject: true },
  (element, expectedText) => {
    cy.wrap(element).should(($el) => {
      const actualText = $el.text();
      const normalizedActualText = actualText
        .trim()
        .toLowerCase()
        .replace(/[\t\n]/g, "");
      const normalizedExpectedValue = expectedText
        .trim()
        .toLowerCase()
        .replace(/[\t\n]/g, "");
      expect(normalizedActualText).to.not.include(normalizedExpectedValue);
    });
  },
);

/**
 * Assert the entered element is not equals to expectedText.
 *
 * ex: element.assertTextNotEquals(expectedText);
 */
Cypress.Commands.add(
  "assertTextNotEquals",
  { prevSubject: true },
  (element, expectedText) => {
    cy.wrap(element).should("not.have.text", expectedText);
  },
);

/**
 * Assert the entered element is equals to expectedText.
 *
 * ex: element.assertTextEquals(expectedText);
 */
Cypress.Commands.add(
  "assertTextEquals",
  { prevSubject: true },
  (element, expectedText) => {
    cy.wrap(element).should("have.text", expectedText);
    //element.should("have.text", expectedText);
  },
);

/**
 * Assert element text matches pattern
 *
 * ex: cy.assertTextMatchesPattern(expectedPattern);
 */
Cypress.Commands.add(
  "assertTextMatchesPattern",
  { prevSubject: true },
  (element, expectedPattern) => {
    cy.wrap(element).invoke("text").should("match", expectedPattern);
  },
);

/**
 * Assert the current url
 *
 * ex: cy.assertUrl(expectedUrl);
 */
Cypress.Commands.add("assertUrl", function (expectedUrl) {
  cy.url().should("eq", expectedUrl);
});

/**
 * Assert current url matches pattern
 *
 * ex: cy.assertUrlPattern(assertUrlPattern);
 */
Cypress.Commands.add("assertUrlPattern", function (expectedUrlPattern) {
  cy.url().should("match", expectedUrlPattern);
});

/**
 * Assert video rearches target seconds
 *
 * ex: cy.assertVideoReachedSeconds(element, 2.5);
 */
Cypress.Commands.add(
  "assertVideoReachedSeconds",
  (videoElement, targetSecond) => {
    videoElement.then(($video) => {
      // Wait for the video to be loaded
      cy.wrap($video).assertProperty("readyState", 4);

      // Pause the video to reset its playback state
      $video[0].pause();

      // Seek the video to the beginning
      $video[0].currentTime = 0;

      // Play the video
      $video[0].play();

      // Assert video lasts more than the target seconds
      cy.wrap($video)
        .should("have.prop", "currentTime")
        .should("be.greaterThan", targetSecond);
    });
  },
);

/**
 * Assert elements has certain length
 *
 * ex: cy.assertElementsLength(3);
 */
Cypress.Commands.add(
  "assertElementsLength",
  { prevSubject: true },
  (elements, expectedItems) => {
    cy.wrap(elements).should("have.length", expectedItems);
  },
);

/**
 * Retrieves text from element
 *
 * ex: cy.getTextFromElement(element);
 */
Cypress.Commands.add("getTextFromElement", { prevSubject: true }, (element) => {
  return element.text();
});

/**
 * Waits for an app side page to finish loading.
 *
 * Time usage:
 * Declare the desired timeout time for the function in ms.
 * Default timeout time is 5000.
 *
 * ex: cy.waitForAppPageLoad(time);
 */
Cypress.Commands.add("waitForAppPageLoad", function (time) {
  if (time === undefined) {
    time = 5000;
  }

  //cy.intercept('POST', 'https://m.stripe.com/6').as('getStripeSix');
  //cy.wait('@getStripeSix', { timeout: time });
  cy.wait(time);
});

/**
 * Waits for a shopify side page to finish loading.
 *
 * Currently functionality is replaced with hardwait due to produce endpoint missing in areas on Shopify
 *
 * Time usage:
 * Declare the desired timeout time for the function in ms.
 * Default timeout time is 5000.
 *
 * ex: cy.waitForShopifyPageLoad(time);
 */
Cypress.Commands.add("waitForShopifyPageLoad", function () {
  /*if (time === undefined) {
          time = 5000;
      }

      cy.intercept('POST', 'https://monorail-edge.shopifysvc.com/v1/produce').as('getProduce');
      cy.wait('@getProduce', { timeout: time });*/
  cy.wait(2000);
});

/**
 * Set cookie to bypass shopify password page
 */
Cypress.Commands.add("setShopifyCookie", function () {
  cy.setCookie(
    "storefront_digest",
    "97c1dfd916f05d293a585689fc770fb05f69c596f05c3cbe73036fae0643b5be",
  );
});
