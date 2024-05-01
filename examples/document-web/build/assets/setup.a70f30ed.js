import{m as u,a as p,c as _,h as e,f as t,j as n,i as d,t as a,F as P,g as s,o as h}from"./@vue.5c2d1131.js";const g={class:"title"},v={class:"language-javascript"},f={class:"title"},A=t("p",null,"\u4F60\u53EF\u4EE5\u5F15\u5165\u6574\u4E2AP5UI\uFF0C\u6216\u662F\u6839\u636E\u9700\u8981\u4EC5\u5F15\u5165\u90E8\u5206\u7EC4\u4EF6\u3002",-1),j={class:"language-javascript"},B={class:"language-javascript"},I=t("p",null,"\u5B8C\u6574\u7EC4\u4EF6\u5217\u8868\u548C\u5F15\u5165\u65B9\u5F0F",-1),x={class:"language-javascript"},C={__name:"setup",setup(y){u(()=>{hljs.highlightAll()});const i=p(`# npm
$ npm install p5-ui --save

# yarn
$ yarn add p5-ui

# pnpm
$ pnpm install p5-ui`),l=p(`// In main.js
import { createApp } from 'vue'
import App from './App.vue'

import P5UI from 'p5-ui'
import 'p5-ui/dist/style.css'

const app = createApp(App)
app.use(P5UI)
app.mount('#app')`),c=p(`// In main.js
import { createApp } from 'vue'
import App from './App.vue'

import {P5Button, P5Switch} from 'p5-ui'
import 'p5-ui/dist/style.css'

const app = createApp(App)
app.component(P5Button.name, P5Button)
app.component(P5Switch.name, P5Switch)
app.mount('#app')
`),r=p(`import {
    P5Icon,
    P5Title,
    P5Text,
    P5Button,
    P5Slider,
    P5Message,
    P5Notification,
    P5BackTop,
    P5Divider,
    P5Upload,
    P5Crowd,
    P5CreateCrowd
} from 'p5-ui';`);return(w,U)=>{const o=s("p5-title"),m=s("p5-text");return h(),_(P,null,[e(o,{content:"\u5FEB\u901F\u5F00\u59CB",size:"large"}),t("p",null,[n("\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 "),e(m,{style:{display:"inline"}},{default:d(()=>[n("Persona5 UI")]),_:1})]),t("div",g,[e(o,{content:"NPM\u5B89\u88C5",size:"large"}),t("pre",null,[t("code",v,a(i.value),1)])]),t("div",f,[e(o,{content:"\u5F15\u5165P5UI",size:"large"}),A,e(o,{content:"-\u5B8C\u6574\u5F15\u5165-",size:"small"}),t("pre",null,[t("code",j,a(l.value),1)]),e(o,{content:"-\u6309\u9700\u5F15\u5165-",size:"small"}),t("pre",null,[t("code",B,a(c.value),1)]),I,t("pre",null,[t("code",x,a(r.value),1)])])],64)}}};export{C as default};
