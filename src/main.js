import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueScrollTo from 'vue-scrollto'

createApp(App).use(VueScrollTo, {offset: -82}).mount('#app')
