export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Filmsommer Festival Mainz 2022',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Der Filmsommer Mainz ist die beste Open-Air-Kinoreihe im Rhein-Main-Gebiet. Umsonst und unter freiem Himmel.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      noIndexOnVercel(),
    ],
    link: [
      { rel: 'icon', type: "image/png", sizes: "32x32" , href: 'favicon-32x32.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/css/reset.css', '~assets/css/fonts.css'],

  env: {
    baseUrl: 'https://rypqx7qi.directus.app/',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // 'nuxt-windicss',
    '@nuxt/image',
  ],

  generate: {
    dir: 'public',
  },

  image: {
    domains: [
      'rypqx7qi.directus.app',
      'rypqx7qi.directus.app/',
      'directus.app',
    ],
    alias: {
      directus: 'https://rypqx7qi.directus.app',
    },
    dir: 'static',
    // staticFilename: '[publicPath]/images/[name]-[hash][ext]'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['Impressum', 'default', 'error'],
      },
    ],
  },
}

function noIndexOnVercel() {
  if (
    process.env.VERCEL_ENV === 'preview' ||
    process.env.VERCEL_ENV === 'development'
  ) {
    return {
      name: 'robots',
      content: 'noindex',
    }
  } else {
    return {
      name: 'robots',
      content: 'index, follow',
    }
  }
}
