import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

import './style.css'
import App from './App.vue'

import index from './router'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

createApp(App)
    .use(index)
    .use(createPinia())
    .use(i18n)
    .mount('#app')
