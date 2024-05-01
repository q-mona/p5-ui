<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'

const code_hover = ref(`<template>
    <div class="p5-hover-animation-mix">混合触摸动画<\/div>
    <p class="p5-hover-animation-gray">灰色触摸动画<\/p>
<\/template>`)

const code_progress = ref(`<template>
    <div class="progress_title_ctn p5-scrollbar">
        <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
        <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
        <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
        <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
        <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
        <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
        <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
        <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
        <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
    </div>
</template>

<style>
.progress_title_ctn {
    width: 400px;
    height: 200px;
    overflow: auto;
}
</style>`)

const code_css = ref(`::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-thumb {
    height: 4px;
    background-color: white;
}

::-webkit-scrollbar-corner {
    display: none;
}`)
const attr = reactive({
    size: { type: 'String', default: 'medium' }, // 字体大小
})
</script>
        
<template>
    <p5-title content="全局CSS" size="large"></p5-title>
    <p>此处，您可以直接在组件上添加相应的class，来实现部分样式。</p>
    <p>并且，您只需引入<p5-text style="display: inline;">快速开始</p5-text>处的全局css，无需引入其他css文件。</p>
    <p>如果动画出现问题，请确认您的组件满足<p5-text style="display: inline;">position: relative & z-index>=1</p5-text>。</p>

    <div class="title">
        <p5-title content="触摸特效" size="large"></p5-title>
        <p>触摸特效的效果展示</p>
        <p>一共有两种动画：<p5-text style="display: inline;">p5-hover-animation-mix & p5-hover-animation-gray</p5-text>。</p>

        <ComponentCtn :code="code_hover">
            <div class="com_title_ctn">
                <div class="p5-hover-animation-mix">混合触摸动画</div>
                <p class="p5-hover-animation-gray">灰色触摸动画</p>
            </div>
        </ComponentCtn>
    </div>


    <div class="title">
        <p5-title content="滚动条" size="large"></p5-title>
        <p>滚动条的效果展示</p>
        <p>只需要在组件class上添加 <p5-text style="display: inline;">p5-scrollbar</p5-text> 即可。</p>
        <ComponentCtn :code="code_progress">
            <div class="progress_title_ctn p5-scrollbar">
                <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
                <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
                <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
                <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
                <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
                <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
                <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
                <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
                <p5-text style="width: 600px;" size="extra-large">滚动条的效果展示 滚动条的效果展示 滚动条的效果展示</p5-text>
            </div>
        </ComponentCtn>

        <p>如果您想全局引用滚动条，可以将如下css样式添加到全局css文件中：</p>
        <pre><code class="language-javascript">{{code_css}}</code></pre>
    </div>
</template>
        
<style scoped>
.com_title_ctn {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.progress_title_ctn {
    width: 400px;
    height: 200px;
    overflow: auto;
}
</style>