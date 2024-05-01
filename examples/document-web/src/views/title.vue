<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'

const code = ref(`<template>
    <p5-title content="超大标题" size="extra-large"></p5-title>

    <p5-title content="大标题" size="large" 
        font_color="#ff0022" selected_font_color="#000" selected_bg_color="#ff0022"></p5-title>

    <p5-title content="中标题" size="medium"></p5-title>

    <p5-title content="小标题" size="small" 
        font_color="#ff0022" selected_font_color="#000" selected_bg_color="#ff0022"></p5-title>
</template>`)

const attr = reactive({
    content: { type: 'String', require: 'true' }, // 文本内容
    size: { type: 'String', default: 'medium' }, // 字体大小
    selected_bg_color: { type: 'String', default: '#000' }, // 选中字体的背景颜色
    selected_font_color: { type: 'String', default: '#fff' }, // 选中字体的字体颜色
    font_color: { type: 'String', default: '#000' }, // 选中字体的字体颜色
    animation: { type: 'Boolean', default: 'false' } // 背景动画
})

const table_data = reactive([
    {
        '属性名称' : 'content',
        '类型' : 'String',
        '必须' : 'true',
        '初始值' : '--',
        '描述' : '内容'
    },
    {
        '属性名称' : 'size',
        '类型' : 'String',
        '必须' : 'false',
        '初始值' : 'medium',
        '描述' : 'extra-large/large/medium/small'
    },
    {
        '属性名称' : 'selected_bg_color',
        '类型' : 'String',
        '必须' : 'false',
        '初始值' : '#000',
        '描述' : '16进制/RGB/英文(red,blue,...)'
    },
    {
        '属性名称' : 'selected_font_color',
        '类型' : 'String',
        '必须' : 'false',
        '初始值' : '#fff',
        '描述' : '16进制/RGB/英文(red,blue,...)'
    },
    {
        '属性名称' : 'font_color',
        '类型' : 'String',
        '必须' : 'false',
        '初始值' : '#000',
        '描述' : '16进制/RGB/英文(red,blue,...)'
    },
    {
        '属性名称' : 'animation',
        '类型' : 'Boolean',
        '必须' : 'false',
        '初始值' : 'false',
        '描述' : '是否显示触摸动画'
    },
])
</script>

<template>
    <p5-title content="Title 标题" size="large"></p5-title>
    <p>女神异闻录5中的标题组件</p>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>标题组件的效果展示</p>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-title content="超大标题" size="extra-large" :animation="true"></p5-title>
                <p5-title sty content="大标题" size="large" font_color="#ff0022" selected_font_color="#000"
                    selected_bg_color="#ff0022"></p5-title>
                <p5-title content="中标题" size="medium"></p5-title>
                <p5-title content="小标题" size="small" font_color="#ff0022" selected_font_color="#000"
                    selected_bg_color="#ff0022"></p5-title>
            </div>
        </ComponentCtn>
    </div>

    <div class="title">
        <p5-title content="组件属性" size="large"></p5-title>
        <p5-table :table_data="table_data" style="margin-top: 20px;">
            <p5-tableItem label="属性名称" width="200"></p5-tableItem>
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