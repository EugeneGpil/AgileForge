import en from './i18n/en.js'
import ru from './i18n/ru.js'

// noinspection JSUnusedGlobalSymbols
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    ru,
  },
}))
