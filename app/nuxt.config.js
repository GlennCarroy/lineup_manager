const colors = require('vuetify/es5/util/colors')

module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  generate: {
    fallback: true
  },
  head: {
    titleTemplate: '%s - line-up-manager',
    title: 'line-up-manager',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes :{
        light: {
          primary: "#001867",
          secondary: '#ff6386',
          accent: "#0089ef"
        }
      }
      // dark: true,
      // themes: {
      //   dark: {
      //     primary: #f18b00,
      //     accent: colors.grey.darken3,
      //     secondary: colors.amber.darken3,
      //     info: colors.teal.lighten1,
      //     warning: colors.amber.base,
      //     error: colors.deepOrange.accent4,
      //     success: colors.green.accent3,
      //   },
      // },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
