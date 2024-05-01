<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'

const code = ref(`<template>
    <p5-backTop></p5-backTop>
</template>`)

const table_data = reactive([
{
        '属性名称' : 'scroll_height',
        '类型' : 'Number',
        '必须' : 'false',
        '初始值' : '0',
        '描述' : '滚动一定的距离才出现，单位px'
    },
{
        '属性名称' : 'right',
        '类型' : 'Number',
        '必须' : 'false',
        '初始值' : '40',
        '描述' : '距离屏幕右侧的距离，单位px'
    },
{
        '属性名称' : 'bottom',
        '类型' : 'Number',
        '必须' : 'false',
        '初始值' : '40',
        '描述' : '距离屏幕底部的距离，单位px'
    }
])
</script>
                
<template>
    <p5-title content="BackTop 返回顶部" size="large"></p5-title>
    <p>女神异闻录5中的返回顶部组件</p>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>返回顶部组件的效果展示</p>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-text size="extra-large">将页面滑倒底部</p5-text>
                <p5-text size="extra-large">按钮会在屏幕右下出现</p5-text>
                <p5-text size="extra-large">将页面滑倒底部</p5-text>
                <p5-text size="extra-large">按钮会在屏幕右下出现</p5-text>
                <p5-text size="extra-large">将页面滑倒底部</p5-text>
                <p5-text size="extra-large">按钮会在屏幕右下出现</p5-text>
                <p5-text size="extra-large">将页面滑倒底部</p5-text>
                <p5-text size="extra-large">按钮会在屏幕右下出现</p5-text>
                <p5-text size="extra-large">将页面滑倒底部</p5-text>
                <p5-text size="extra-large">按钮会在屏幕右下出现</p5-text>
                <p5-text size="extra-large">将页面滑倒底部</p5-text>
                <p5-text size="extra-large">按钮会在屏幕右下出现</p5-text>
                <p5-text size="extra-large">将页面滑倒底部</p5-text>
                <p5-text size="extra-large">按钮会在屏幕右下出现</p5-text>
                <p5-text size="extra-large">将页面滑倒底部</p5-text>
                <p5-text size="extra-large">按钮会在屏幕右下出现</p5-text>
                <p5-text size="extra-large">将页面滑倒底部</p5-text>
                <p5-text size="extra-large">按钮会在屏幕右下出现</p5-text>
            </div>
        </ComponentCtn>
    </div>

    <div class="title">
        <p5-title content="组件属性" size="large"></p5-title>
        <p5-table :table_data="table_data" style="margin-top: 20px;">
            <p5-tableItem label="属性名称" width="150"></p5-tableItem>
            <p5-tableItem label="类型" width="100"></p5-tableItem>
            <p5-tableItem label="必须" width="100"></p5-tableItem>
            <p5-tableItem label="初始值" width="100"></p5-tableItem>
        </p5-table>
    </div>
</template>
                
<style scoped>
</style>