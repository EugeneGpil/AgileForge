// https://nuxt.com/docs/api/configuration/nuxt-config
// noinspection JSUnusedGlobalSymbols
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: [
    'normalize.css/normalize.css',
    'admin-lte-css-only/css/adminlte.css',
  ],
  modules: [
    '@vesp/nuxt-fontawesome',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  imports: {
    dirs: [
      './stores',
    ],
  },
})
