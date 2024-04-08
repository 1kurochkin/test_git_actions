/**
 * Set useful allure environment variables
 * ex: cy.setAllureEnvironmentVariables("");
 */
Cypress.Commands.add("setAllureEnvironmentVariables", () => {
  cy.allure().writeEnvironmentInfo({
    Current_Environment: Cypress.env("APP_BASE_URL"),
    OS: Cypress.platform,
    Browser: Cypress.browser.name,
    Version: Cypress.browser.version,
  });
});

/**
 * Set useful allure environment variables
 * ex: cy.setMetadataToAllureReport(allureMetadataManager);
 */
Cypress.Commands.add("setMetadataToAllureReport", (metadataManager) => {
  if (
    metadataManager?.issue &&
    metadataManager?.issue?.name &&
    metadataManager?.issue?.url
  ) {
    cy.allure().issue(metadataManager.issue.name, metadataManager.issue.url);
  }

  if (
    metadataManager?.tms &&
    metadataManager?.tms?.name &&
    metadataManager?.tms?.url
  ) {
    cy.allure().tms(metadataManager.tms.name, metadataManager.tms.url);
  }

  if (metadataManager?.owner) {
    cy.allure().owner(metadataManager.owner);
  }

  if (metadataManager?.description) {
    cy.allure().description(metadataManager.description);
  }

  if (metadataManager?.tags) {
    cy.allure().tag(...metadataManager.tags);
  }

  if (
    metadataManager?.link &&
    metadataManager?.link?.url &&
    metadataManager?.link?.name &&
    metadataManager?.link?.type
  ) {
    cy.allure().link(
      metadataManager?.link?.url,
      metadataManager?.link?.name,
      metadataManager?.link?.type,
    );
  }
});
