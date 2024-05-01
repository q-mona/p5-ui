<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'

const code = ref(`<template>
    <p5-upload ref="upload_dom" 
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"></p5-upload>

    <p5-button @click="handleClick">点击上传</p5-button>
</template>

<script setup>
import { ref } from 'vue'

const upload_dom = ref(null)
const handleClick = ()=>{
    upload_dom.value.submit((res, err)=>{
        console.log(res, err)
    })
}
<\/script>`)


const table_data = reactive([
    {
        '属性名称': 'size',
        '类型': 'Number',
        '必须': 'false',
        '初始值': '1024',
        '描述': '限制图片大小，单位kb'
    },
    {
        '属性名称': 'action',
        '类型': 'String',
        '必须': 'false',
        '初始值': '-',
        '描述': '后端接口地址'
    }
])

const func_data = reactive([
    {
        '方法名称': 'submit',
        '参数': '-',
        '返回值': '(response, error)',
        '描述': '上传图片的函数'
    }
])

const upload_dom = ref(null)
const handleClick = () => {
    upload_dom.value.submit((res, err) => {
        console.log(res, err)
    })
}
</script>
            
<template>
    <p5-title content="Upload 图片上传" size="large"></p5-title>
    <p>女神异闻录5中的图片上传组件</p>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>上传组件的效果展示</p>
        <p>注意，在上传图片时，请<p5-text style="display: inline;">手动调用</p5-text>submit函数！</p>
        <p>本组件也支持<p5-text style="display: inline;">拖拽上传</p5-text>~</p>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-upload ref="upload_dom" action="https://run.mocky.io/v3/c49d5ea2-dc86-4207-aed4-4fbd731c8518">
                </p5-upload>
                <p5-button @click="handleClick">点击上传</p5-button>
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

    <div class="title">
        <p5-title content="组件方法" size="large"></p5-title>
        <p5-table :table_data="func_data" style="margin-top: 20px;">
            <p5-tableItem label="方法名称" width="150"></p5-tableItem>
            <p5-tableItem label="参数" width="100"></p5-tableItem>
            <p5-tableItem label="返回值" width="200"></p5-tableItem>
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