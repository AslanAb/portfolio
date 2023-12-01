import '@/style.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Vue3Lottie from 'vue3-lottie'
import { createI18n } from 'vue-i18n'
import { defaultLocale, languages } from './i18n'

const messages = Object.assign(languages)
const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
  locale: localStorage.getItem('locale') || defaultLocale,
  messages
})
const app = createApp(App)

app.use(router)
app.use(Vue3Lottie, { name: 'LottieAnimation' })
app.use(i18n)
app.mount('#app')
