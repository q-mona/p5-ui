# Vue3 Persona5 UI
<p align="center">
  <img width="300px" src="src/assets/logo.png">
</p>  
This project is still under development~

# Document
To develop your website you could visit [our document](https://p5ui.morna.cn).

# Preview
<p align="center">
  <img width="300px" src="src/assets/preview.png">
</p>  

# Simple Usage
## Download
```
npm install p5-ui
```
## Full Import
```
// In main.js
import { createApp } from 'vue'
import App from './App.vue'

import P5UI from 'p5-ui'
import 'p5-ui/dist/style.css'

const app = createApp(App)
app.use(P5UI)
app.mount('#app')
```
## On-demand Import
```
// In main.js
import { createApp } from 'vue'
import App from './App.vue'

import {P5Button, P5Switch} from 'p5-ui'
import 'p5-ui/dist/style.css'

const app = createApp(App)
app.component(P5Button.name, P5Button)
app.component(P5Switch.name, P5Switch)
app.mount('#app')
```



