import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';



const app = createApp(App)
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')

app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions);
