export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Hashima Islands — DayZ',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, height=device-height, user-scalable=no, initial-scale=1',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), a abandoned island off Nagasaki.',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Hashima Islands — DayZ' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), a abandoned island off Nagasaki.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://hashima.gg/images/share-hashima.png',
      },
      { hid: 'og:url', property: 'og:url', content: 'https://hashima.gg' },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Hashima Islands — DayZ' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), a abandoned island off Nagasaki.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://setetres.st/images/share-hashima.png',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@200;500&display=swap" rel="stylesheet',
      },
    ],
  },
  css: ['@/assets/application.css'],
  loading: {
    color: '#ffffff',
    height: '3px',
    failedColor: '#f51a1a',
    throttle: 0,
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxt/postcss8',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: '/',
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
