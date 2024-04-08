import "./commands/AppHeaderFooterCommands.js";
import "./commands/ShopifyHeaderFooterCommands.js";
import "./commands/GeneralCommands.js";
import "./commands/AuthenticationCommands.js";
import "./commands/ApiRequestCommands.js";
import "./commands/WorkoutsApiCommands.js";
import "./commands/SeriesApiCommands.js";
import "./commands/AllureCommands.js";
import "./commands/LvsApiCommands.js";
import "./commands/LvsCommands.js";
import "./commands/VideoCompleteCommands.js";
import "./commands/ActivationCodeCommands.js";
import "./commands/ShopifyCommands.js";
import "./commands/MiniCartCommands.js";
import "@shelex/cypress-allure-plugin";
import registerCypressGrep from "@cypress/grep";

/*
 * There are unhandled exceptions caused by page code.
 * The following instructs Cypress to continue the test.
 */
Cypress.on("uncaught:exception", function (err, runnable) {
  return false;
});

const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
  if (
    opts.displayName === "fetch" ||
    opts.displayName == "xhr" ||
    opts.name == "uncaught exception"
  ) {
    return;
  }
  return origLog(opts, ...other);
};

/**
 * Registering cypress grep to run test cases using tags as needed
 */
registerCypressGrep();
