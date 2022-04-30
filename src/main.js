import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:8000/api/'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization')

const app = createApp(App)
app.use(store).use(router).use(VueAxios, axios).mount('#app')
