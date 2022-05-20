import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

App.use(axios);
createApp(App).mount('#app')
