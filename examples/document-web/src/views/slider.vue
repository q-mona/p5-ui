<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'

const code = ref(`<template>
    <p5-slider v-model="sl_value1" @change="handleChange" left_text="音量" 
        :min="50" :max="200" :width="200"></p5-slider>

    <p5-slider v-model="sl_value2" placement="bottom" left_text="音量-" right_text="音量+" ></p5-slider>
</template>

<script setup>
import { ref } from 'vue'

const sl_value1 = ref(100)
const sl_value2 = ref(50)

const handleChange = (value) => {
    console.log('capture slider change', value)
}
<\/script>`)

const attr = reactive({
    left_text: { type: String, default: '' }, // 左边文本
    right_text: { type: String, default: '' }, // 右边文本
    min: { type: Number, default: 0 }, // 最小值
    max: { type: Number, default: 100 }, // 最大值
    width: { type: Number, default: 100 }, // 整体宽度
    modelValue: { type: Number, require: true }, // 响应式的value
    placement: { type: String, default: 'top' }, // tip位置
    tip: { type: Boolean, default: true } // 是否显示tip
})

const sl_value1 = ref(100)
const sl_value2 = ref(50)
const handleChange = (value) => {
    console.log('capture slider change', value)
}

const table_data = reactive([
    {
        '属性名称': 'left_text',
        '类型': 'String',
        '必须': 'false',
        '初始值': '--',
        '描述': '左边文本'
    },
    {
        '属性名称': 'right_text',
        '类型': 'String',
        '必须': 'false',
        '初始值': '--',
        '描述': '右边文本'
    },
    {
        '属性名称': 'min',
        '类型': 'Number',
        '必须': 'false',
        '初始值': '0',
        '描述': '滑块最小值'
    },
    {
        '属性名称': 'max',
        '类型': 'Number',
        '必须': 'false',
        '初始值': '100',
        '描述': '滑块最大值'
    },
    {
        '属性名称': 'width',
        '类型': 'Number',
        '必须': 'false',
        '初始值': '100',
        '描述': '滑块宽度，单位px'
    },
    {
        '属性名称': 'placement',
        '类型': 'String',
        '必须': 'false',
        '初始值': 'top',
        '描述': 'tip的位置，top/bottom'
    },
    {
        '属性名称': 'tip',
        '类型': 'Boolean',
        '必须': 'false',
        '初始值': 'true',
        '描述': '是否显示tip'
    }
])

const func_data = reactive([
    {
        '方法名称': 'change',
        '参数': '当前滑块值：value',
        '返回值': 'void',
        '描述': '每次滑动滑块时触发'
    }
])
</script>
            
<template>
    <p5-title content="Slider 滑块" size="large"></p5-title>
    <p>女神异闻录5中的滑块组件</p>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>滑块组件的效果展示</p>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-slider v-model="sl_value1" left_text="音量" :min="50" :max="200" :width="200" @change="handleChange">
                </p5-slider>
                <p5-slider v-model="sl_value2" left_text="音量-" right_text="音量+" placement="bottom"></p5-slider>
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
            <p5-tableItem label="方法名称" width="100"></p5-tableItem>
            <p5-tableItem label="参数" width="200"></p5-tableItem>
            <p5-tableItem label="返回值" width="100"></p5-tableItem>
        </p5-table>
    </div>
</template>
            
<style scoped>
.com_title_ctn {
    display: flex;
    flex-direction: column;
}
</style>