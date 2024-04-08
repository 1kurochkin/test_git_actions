const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

//For reading config files
const fs = require("fs-extra");
const path = require("path");
const deepmerge = require("deepmerge");

function getConfigurationByFile(envFile, testFile, blankFilePath, baseURL) {
  //Sets the desired envFile path
  const pathToEnvFile = path.resolve(
    `cypress/config-files/${envFile.replace(";", "")}.json`,
  );

  //synchronously reads json file
  let envFilefs = fs.readJsonSync(pathToEnvFile);
  let pathToTestFile;

  //If a baseUrl is set, sets the environment file to only have the baseUrl
  if (baseURL != "default") {
    envFilefs = { baseUrl: `${baseURL}` };
  }

  if (testFile == "**/*.*") {
    fs.writeFileSync(blankFilePath, JSON.stringify(envFilefs));
    return;
  } else {
    //Sets the desired testFile path
    pathToTestFile = path.resolve(
      `cypress/config-files/${testFile.replace(";", "")}.json`,
    );
  }

  //synchronously reads json file
  const testFilefs = fs.readJsonSync(pathToTestFile);

  //If more than two config files are desired use deepmerge.all
  const mergedObject = deepmerge(envFilefs, testFilefs);

  //Synchronously re-writes the desired file
  fs.writeFileSync(blankFilePath, JSON.stringify(mergedObject, undefined, 2));
  return;
}
module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: 1,
  pageLoadTimeout: 70000,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  chromeWebSecurity: false,
  projectId: "2dzpc1",
  video: false,

  blockHosts: [
    "*.fivetran.com",
    "*.google-analytics.com",
    "*.doubleclick.net",
    "*.hotjar.com",
    "*.googletagmanager.com",
    "*.adroll.com",
    "*.pnterest.com",
    "*.braze.com ",
    "*.smile.io",
    "*.sinter-collect.com",
    "*.bing.com",
    "*.clarity.ms",
    "*.sonobi.com",
    "discountoncart.com",
    "my.jst.ai",
  ],
  env: {
    screenSizes: {
      mobile: {
        width: 360,
        height: 750,
      },
      largePhone: {
        width: 650,
        height: 1024,
      },
      tablet: {
        width: 1020,
        height: 1024,
      },
    },
  },
  e2e: {
    experimentalStudio: true,
    // specPattern(config) {
    //   const testFile = config.env.testFile || "**/*.*";
    //   let pathToTestFile;
    //   if (testFile != "**/*.*") {
    //     //Sets the desired testFile path
    //     pathToTestFile = path.resolve(
    //       `cypress/config-files/${testFile.replace(";", "")}.json`,
    //     );
    //
    //     const testFilefs = fs.readJsonSync(pathToTestFile);
    //
    //     const temp_testObj = JSON.parse(testFilefs);
    //     return temp_testObj["specPattern"];
    //   }
    // },
    specPattern: "cypress/integration/End-To-End-Smoke/**",
    setupNodeEvents(on, config) {
      const envFile = config.env.envFile || "qa";
      const testFile = config.env.testFile || "**/*.*";
      const blankFilePath = path.resolve("cypress/config-files/blank.json");
      const baseURL = config.env.baseUrl || "default";

      on("before:browser:launch", (_, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });

      allureWriter(on, config);

      getConfigurationByFile(envFile, testFile, blankFilePath, baseURL);

      return fs.readJsonSync(blankFilePath);
    },
  },
});
