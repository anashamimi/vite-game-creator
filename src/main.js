import './assets/style/general.scss'

import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index.js'

createApp(App).use(router).mount('#app')
