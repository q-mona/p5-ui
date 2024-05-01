<script setup>
import { ref, onMounted } from 'vue';
onMounted(()=>{
    hljs.highlightAll()
})
const code = ref(`# npm
$ npm install p5-ui --save

# yarn
$ yarn add p5-ui

# pnpm
$ pnpm install p5-ui`)
</script>

<template>
    <div class="intro-ctn">
        <img src="../assets/images/bg1.png" alt="">

        <div class="title">
            <p5-title content="使用须知" size="large"></p5-title>
            <p>本项目现在仍在随缘开发中~</p>
            <p>由于本项目用到了部分-webkit-的css属性，建议使用较新版本的浏览器
                <p5-text style="display: inline;"> (Chrome, Safari or Edge) </p5-text>
            </p>
        </div>

        <div class="title">
            <p5-title content="使用包管理器" size="large"></p5-title>
            <p>我们建议您使用包管理器
                <p5-text style="display: inline;"> (npm, yarn or pnpm) </p5-text>
                来安装本项目，
            </p>
            <p>
                然后您就可以使用打包工具，例如
                <p5-text style="display: inline;"> Vite or Webpack </p5-text>
                加载本组件库，方法如下：
            </p>
                
            <!-- <highlightjs autodetect language='javascript' :code="code" /> -->
            <pre><code class="language-javascript">{{code}}</code></pre>
            <p>
                如果您的网络环境不好，建议使用相关镜像服务<p5-text style="display: inline;"> cnpm </p5-text>或<p5-text style="display: inline;"> NPM 镜像 </p5-text>。
            </p>
        </div>

    </div>
</template>

<style>
.intro-ctn {
    position: relative;
}

.intro-ctn img {
    /* position: absolute; */
    width: 100%;
    height: auto;
    /* top: 0;
    left: 0; */
    object-fit: cover;
    border-radius: 4px;
    /* opacity: 0.2; */
    /* z-index: -1; */
}
</style>
