import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
//calendario
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)
app.use(VCalendar, {})
app.use(router)
app.mount('#app')
