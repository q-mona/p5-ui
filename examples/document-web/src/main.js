import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'


import P5UI from 'p5-ui'
// import { P5Upload } from 'p5-ui'
import 'p5-ui/dist/style.css'


const app = createApp(App)
app.use(router)
// app.component(P5Upload.name, P5Upload)
app.use(P5UI)

app.mount('#app')
