const langLocalStorageKey = 'lang'

export default defineNuxtPlugin({
  hooks: {
    'app:beforeMount'() {
      const { setLocale } =  useNuxtApp().$i18n

      const localStorageLanguage = localStorage.getItem(langLocalStorageKey)
      if (localStorageLanguage) {
        setLocale(localStorageLanguage)

        return
      }

      const browserLangWithCountry = navigator.language

      const browserLang = browserLangWithCountry.substring(0, 2)

      localStorage.setItem(langLocalStorageKey, browserLang)

      setLocale(langLocalStorageKey, browserLang)
    },
  },
})
