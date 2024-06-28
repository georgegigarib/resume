import type { DefineDateTimeFormat } from 'vue-i18n'

export const datetimeFormats: Record<string, DefineDateTimeFormat> = {
  en: {
    shorter: {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    },
    short: {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    },
    long: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit'
    },
    longer: {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }
  }
}
