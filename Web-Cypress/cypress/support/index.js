/// <reference types="cypress" />
/// <reference types="../support" />
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "cypress-real-events/support";
import "cypress-audit/commands";
import "./commands/AppHeaderFooterCommands.js";
import "./commands/ShopifyHeaderFooterCommands.js";
import "./commands/ShopifyCommands.js";
import "./commands/ActivationCodeCommands.js";
import "./commands/GeneralCommands.js";
import "./commands/AuthenticationCommands.js";
import "./commands/ApiRequestCommands.js";
import "./commands/WorkoutsApiCommands.js";
import "./commands/SeriesApiCommands.js";
import "./commands/AllureCommands.js";
import "./commands/LvsApiCommands.js";
import "./commands/LvsCommands.js";
import "./commands/VideoCompleteCommands.js";
import "./commands/MiniCartCommands.js";
import "@shelex/cypress-allure-plugin";
import "@cypress-audit/commands";

/*
 * There are unhandled exceptions caused by page code.
 * The following instructs Cypress to continue the test.
 */
Cypress.on("uncaught:exception", function (err, runnable) {
  return false;
});

//Set cookie to bypass Shopify password page
/*beforeEach(() => {
  cy.setCookie(
    "storefront_digest",
    "97c1dfd916f05d293a585689fc770fb05f69c596f05c3cbe73036fae0643b5be",
  );
});*/

// Alternatively you can use CommonJS syntax:
// require('./commands')
