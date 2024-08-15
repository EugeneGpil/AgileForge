// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        'normalize.css/normalize.css',
        'admin-lte-css-only/css/adminlte.css',
    ],
    modules: [
        '@vesp/nuxt-fontawesome',
    ],
})
