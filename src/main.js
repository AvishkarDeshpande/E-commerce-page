import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)
app.use(Notifications).mount('#app')

