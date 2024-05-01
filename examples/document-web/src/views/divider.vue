<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'

const code = ref(`<template>
    <p5-divider></p5-divider>
    <p5-divider style="width: 200px"></p5-divider>
    <p5-divider style="height: 100px;" direction="vertical"></p5-divider>
</template>`)

const attr = reactive({
    direction: { type: String, default: 'horizontal' }
})

const table_data = reactive([
    {
        '属性名称': 'direction',
        '类型': 'String',
        '必须': 'false',
        '初始值': 'horizontal',
        '描述': 'horizontal/vertical'
    }
])
</script>
                    
<template>
    <p5-title content="Divider 分隔符" size="large"></p5-title>
    <p>女神异闻录5中的分隔符组件</p>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>分隔符组件的效果展示。</p>
        <p>垂直分割符需要设置组件style的<p5-text style="display:inline"> height </p5-text>属性。</p>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-divider></p5-divider>
                <p5-divider style="width: 200px"></p5-divider>
                <p5-divider style="height: 100px;" direction="vertical"></p5-divider>
            </div>
        </ComponentCtn>
    </div>

    <div class="title">
        <p5-title content="组件属性" size="large"></p5-title>
        <p5-table :table_data="table_data" style="margin-top: 20px;">
            <p5-tableItem label="属性名称" width="150"></p5-tableItem>
            <p5-tableItem label="类型" width="100"></p5-tableItem>
            <p5-tableItem label="必须" width="100"></p5-tableItem>
            <p5-tableItem label="初始值" width="150"></p5-tableItem>
        </p5-table>
    </div>
</template>
                    
<style scoped>
.com_title_ctn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>