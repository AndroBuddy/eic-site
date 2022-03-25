import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueScrollTo from 'vue-scrollto'

createApp(App).use(VueScrollTo, {offset: -92.94}).mount('#app')
