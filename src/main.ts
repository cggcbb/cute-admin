import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import naive from './plugins/naive'
import '@/assets/styles/transition.less'

const app = createApp(App)
app.use(router).use(pinia).use(naive)

router.isReady().then(() => {
  app.mount('#app')
})
