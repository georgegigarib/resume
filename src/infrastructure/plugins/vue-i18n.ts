import { datetimeFormats } from '@/infrastructure/local/datetimeFormats'
import { en } from '@/infrastructure/local/en.local'
import { es } from '@/infrastructure/local/es.local'

import { createI18n } from 'vue-i18n'

const [userLanguage] = navigator.language.split('-')

const vueI18n = createI18n({
  legacy: false,
  locale: userLanguage,
  fallbackLocale: 'en',
  datetimeFormats,
  missing: (locale, key) => {
    // eslint-disable-next-line no-console
    console.warn(`Missing translation key: ${key}, in locale: ${locale}`)
    return ''
  },
  messages: {
    en,
    es
  }
})

export { vueI18n }

// DOC:https://vue-i18n.intlify.dev/guide/essentials/started.html
