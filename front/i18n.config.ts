import en from './i18n/en'
import ru from './i18n/ru'

// noinspection JSUnusedGlobalSymbols
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    ru,
  },
}))
