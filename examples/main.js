import { createApp } from 'vue'
import App from './App.vue'

// import {P5Button, P5Switch, P5Text} from '../dist/p5-ui.js'

// import P5UI from '../dist/p5-ui.js'
// import '../dist/style.css'

import P5UI from '../src/index'


const app = createApp(App)
app.use(P5UI)
// app.component(P5Button.name, P5Button)
// app.component(P5Switch.name, P5Switch)

app.mount('#app')
