# Vue3 Persona5 UI
<p align="center">
  <img width="300px" src="src/assets/logo.png">
</p>  
This project is still under development~

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

# Document
由于懒得再续费文档网站的服务器了，组件文档就以截图的形式放下面了。
examples文件夹里有文档网站的源码(examples/document-web)，npm install 后可直接npm run dev运行。  
打包后的文档网页(examples/document-web/build, 可直接在本地打开)
### 全局css
<p align="center">
  <img width="300px" src="examples/document-imgs/1-css.png">
</p> 

### 图标
<p align="center">
  <img width="300px" src="examples/document-imgs/2-icon.png">
</p> 

### 标题
<p align="center">
  <img width="300px" src="examples/document-imgs/3-title.png">
</p> 

### 文字
<p align="center">
  <img width="300px" src="examples/document-imgs/4-text.png">
</p> 

### 滑块
<p align="center">
  <img width="300px" src="examples/document-imgs/5-slider.png">
</p> 

### 开关
<p align="center">
  <img width="300px" src="examples/document-imgs/6-switch.png">
</p> 

### 消息
<p align="center">
  <img width="300px" src="examples/document-imgs/7-message.png">
</p> 

### 提示
<p align="center">
  <img width="300px" src="examples/document-imgs/8-notifi.png">
</p> 

### 返回顶部
<p align="center">
  <img width="300px" src="examples/document-imgs/9-backtop.png">
</p> 

### 分隔符
<p align="center">
  <img width="300px" src="examples/document-imgs/10-divider.png">
</p> 

### 上传
<p align="center">
  <img width="300px" src="examples/document-imgs/11-upload.png">
</p> 

### 动画
<p align="center">
  <img width="300px" src="examples/document-imgs/12-crowd.png">
</p> 