import { vueI18n } from '@/infrastructure/plugins/vue-i18n'
import { Vue3Toastify, toastifyOptions } from '@/infrastructure/plugins/vue3Toastify'

//make an interface for the plugins, i want t add options to the plugins
export interface Plugin {
  plugin: any
  options?: any
}
export { vueI18n }
export { Vue3Toastify }

export const plugins = [
  { plugin: vueI18n },
  { plugin: Vue3Toastify, options: toastifyOptions }
] as Plugin[]
