<script setup>
import { ref, onMounted } from 'vue';
onMounted(() => {
    hljs.highlightAll()
})

const npm_code = ref(`# npm
$ npm install p5-ui --save

# yarn
$ yarn add p5-ui

# pnpm
$ pnpm install p5-ui`)

const import_full_code = ref(`// In main.js
import { createApp } from 'vue'
import App from './App.vue'

import P5UI from 'p5-ui'
import 'p5-ui/dist/style.css'

const app = createApp(App)
app.use(P5UI)
app.mount('#app')`)

const import_demand_code = ref(`// In main.js
import { createApp } from 'vue'
import App from './App.vue'

import {P5Button, P5Switch} from 'p5-ui'
import 'p5-ui/dist/style.css'

const app = createApp(App)
app.component(P5Button.name, P5Button)
app.component(P5Switch.name, P5Switch)
app.mount('#app')
`)

const all_components = ref(`import {
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
} from 'p5-ui';`)
</script>

<template>
    <p5-title content="快速开始" size="large"></p5-title>
    <p>本节将介绍如何在项目中使用
        <p5-text style="display: inline;">Persona5 UI</p5-text>
    </p>

    <div class="title">
        <p5-title content="NPM安装" size="large"></p5-title>
        <!-- <highlightjs autodetect language='javascript' code="npm i p5-ui -S" /> -->
        <pre><code class="language-javascript">{{npm_code}}</code></pre>
    </div>

    <div class="title">
        <p5-title content="引入P5UI" size="large"></p5-title>
        <p>你可以引入整个P5UI，或是根据需要仅引入部分组件。</p>

        <p5-title content="-完整引入-" size="small"></p5-title>
        <!-- <highlightjs autodetect language='javascript' :code="import_full_code" /> -->
        <pre><code class="language-javascript">{{import_full_code}}</code></pre>

        <p5-title content="-按需引入-" size="small"></p5-title>
        <!-- <highlightjs autodetect language='javascript' :code="import_demand_code" /> -->
        <pre><code class="language-javascript">{{import_demand_code}}</code></pre>

        <p>完整组件列表和引入方式</p>
        <pre><code class="language-javascript">{{all_components}}</code></pre>
    </div>

</template>
