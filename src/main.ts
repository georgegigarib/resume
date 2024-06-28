import '@/assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugins } from '@/infrastructure/plugins/allPlugins'

import 'vue3-toastify/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
//fix this for each with what we just do

plugins.forEach((plugin) => app.use(plugin.plugin, plugin.options))

app.mount('#app')
