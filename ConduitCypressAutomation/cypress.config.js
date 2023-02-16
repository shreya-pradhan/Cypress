const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    url: 'https://next-realworld.vercel.app/',
    username: 'shreya19.sp@gmail.com',
    password: 'Test123$',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
