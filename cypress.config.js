const { defineConfig } = require("cypress");

const dotenv = require('dotenv')
dotenv.config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      // Variaveis de ambiente
      config.env = {
        USERNAME: process.env.USERNAME_TEST,
        PASSWORD: process.env.PASSWORD_TEST,
        URL:process.env.URL_TEST
      }

      return config

    },
  },
});
