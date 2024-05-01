<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'

const code = ref(`<template>
    <p5-switch v-model="sw_value1" size="large"></p5-switch>
    <p5-switch v-model="sw_value2" size="medium"></p5-switch>
    <p5-switch v-model="sw_value3" size="small"></p5-switch>
</template>

<script setup>
import { ref } from 'vue'

const sw_value1 = ref(true)
const sw_value2 = ref(false)
const sw_value3 = ref(true)
<\/script>`)

const sw_value1 = ref(true)
const sw_value2 = ref(false)
const sw_value3 = ref(true)
const table_data = reactive([
{
        '属性名称' : 'size',
        '类型' : 'String',
        '必须' : 'false',
        '初始值' : 'medium',
        '描述' : 'large/medium/small'
    }
])
</script>
                
<template>
    <p5-title content="Switch 开关" size="large"></p5-title>
    <p>女神异闻录5中的开关组件</p>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>开关组件的效果展示</p>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-switch v-model="sw_value1" size="large"></p5-switch>
                <p5-switch v-model="sw_value2" size="medium"></p5-switch>
                <p5-switch v-model="sw_value3" size="small"></p5-switch>
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
.com_title_ctn {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>