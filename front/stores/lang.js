import { defineStore } from 'pinia'

export const useLang = defineStore('lang', {
  state: () => ({
    lang: 'en',
  }),

  getters: {
  },

  actions: {
    setLang(lang) {
      this.lang = lang
    },
  },
})
