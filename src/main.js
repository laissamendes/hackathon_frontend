import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(createPinia())
app.use(router)
createApp(App).use(mdiVue, {
  icons: mdijs
})

app.mount('#app')
