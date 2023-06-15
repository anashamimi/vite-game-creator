import './assets/style/general.scss'

import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index'

const app = createApp(App)

app.use(router)

createApp(App).use(router).mount('#app')
