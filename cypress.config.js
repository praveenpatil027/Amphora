const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
 
    specPattern: "cypress/e2e/**/*.{spec.js,feature}",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));
      return config;
    },
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: true,
    screenshotOnRunFailure: true,
    env: {
      amphoraUrl: "https://amphora.net/",
      petApiUrl: "https://petstore.swagger.io/v2",
    },
    
    viewportWidth: 1200,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000, 
    pageLoadTimeout: 60000,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    reporter: "mochawesome",
    reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
  }
  }
});
