<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'
import { P5Message } from 'p5-ui'

const code = ref(`<template>
    <p5-button @click="mission('default')">任务开始</p5-button>
    <p5-button @click="mission('clear')">任务成功</p5-button>
    <p5-button @click="mission('fail')">任务失败</p5-button>
</template>

<script setup>
import { P5Message } from 'p5-ui'

const mission = (msg_type) => {
    if (msg_type == 'default') {
        P5Message({})
    }
    else if (msg_type == 'clear') {
        P5Message({ type: 'clear' })
    }
    else if (msg_type == 'fail') {
        P5Message({ type: 'fail' })
    }
}
<\/script>`)

const attr = reactive({
    type: { type: String, default: 'default' }, // 消息类别
    duration: { type: Number, default: 3000 } // 消息持续时间
})

const mission = (msg_type) => {
    if (msg_type == 'default') {
        P5Message({})
    }
    else if (msg_type == 'clear') {
        P5Message({ type: 'clear' })
    }
    else if (msg_type == 'fail') {
        P5Message({ type: 'fail' })
    }
}

const table_data = reactive([
    {
        '属性名称': 'type',
        '类型': 'String',
        '必须': 'false',
        '初始值': 'default',
        '描述': '消息类型：default/clear/fail'
    },
    {
        '属性名称': 'duration',
        '类型': 'Number',
        '必须': 'false',
        '初始值': '3000',
        '描述': '显示时间，单位ms'
    }
])

const func_data = reactive([
    {
        '方法名称': 'P5Message',
        '参数': '{type, duration}',
        '返回值': 'void',
        '描述': '消息框触发函数'
    }
])
</script>
            
<template>
    <p5-title content="Message 消息" size="large"></p5-title>
    <p>女神异闻录5中的消息组件</p>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>消息组件的效果展示</p>
        <p>注意，在调用P5Message时，<p5-text style="display: inline;">参数请用 { } 包裹</p5-text>，即使是没有参数！</p>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-button @click="mission('default')">任务开始</p5-button>
                <p5-button @click="mission('clear')">任务成功</p5-button>
                <p5-button @click="mission('fail')">任务失败</p5-button>
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
            <p5-tableItem label="参数" width="200"></p5-tableItem>
            <p5-tableItem label="返回值" width="100"></p5-tableItem>
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