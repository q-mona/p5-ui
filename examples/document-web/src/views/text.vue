<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'

const code = ref(`<template>
    <p5-text size="extra-large">女神异闻录5 皇家版</p5-text>
    <p5-text size="large">女神异闻录5 皇家版</p5-text>
    <p5-text size="medium">女神异闻录5 皇家版</p5-text>
    <p5-text size="small">女神异闻录5 皇家版</p5-text>
</template>`)

const table_data = reactive([
    {
        '属性名称': 'size',
        '类型': 'String',
        '必须': 'false',
        '初始值': 'medium',
        '描述': 'extra-large/large/medium/small'
    }
])
</script>
    
<template>
    <p5-title content="Text 文本" size="large"></p5-title>
    <p>女神异闻录5中的文本组件</p>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>文本的效果展示</p>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-text size="extra-large">女神异闻录5 皇家版</p5-text>
                <p5-text size="large">女神异闻录5 皇家版</p5-text>
                <p5-text size="medium">女神异闻录5 皇家版</p5-text>
                <p5-text size="small">女神异闻录5 皇家版</p5-text>
            </div>
        </ComponentCtn>
    </div>

    <div class="title">
        <p5-title content="组件属性" size="large"></p5-title>
        <p5-table :table_data="table_data" style="margin-top: 20px;">
            <p5-tableItem label="属性名称" width="100"></p5-tableItem>
            <p5-tableItem label="类型" width="100"></p5-tableItem>
            <p5-tableItem label="必须" width="100"></p5-tableItem>
            <p5-tableItem label="初始值" width="100"></p5-tableItem>
        </p5-table>
    </div>
</template>
    
<style scoped>

</style>