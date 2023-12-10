const cucumber = require("cypress-cucumber-preprocessor").default
const { defineConfig } = require("cypress");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
// await preprocessor.addCucumberPreprocessorPlugin(on, config);
// on("file:preprocessor", browserify.default(config));
// return config;
// }

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents
    (on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on),
      on('file:preprocessor',cucumber())
    },
    specPattern:"cypress/e2e/*.feature",
    numTestsKeptInMemory: 10,
    watchForFileChanges: false,
    viewportWidth: 1000,
    viewportHeight: 600,
    waitForAnimations: true,
    animationDistanceTreshold: 10,
    defaultCommandTimeout: 5000,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    video: true,
    failOnStatusCode: false
  },
});
