const { defineConfig } = require("cypress");

//no '' to key values only to strings




module.exports = defineConfig({
    projectId: "ft5pt2",
    //chromeWebSecurity: false,
   defaultCommandTimeout: 8000,
   pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        },
        //specPattern: 'cypress/Intergration/examples/*.js'
      specPattern: 'cypress/Intergration/examples/*.js'

  },
});
