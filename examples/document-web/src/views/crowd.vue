<script setup>
import { reactive, ref } from 'vue';
import ComponentCtn from '../components/componentCtn.vue'
import { P5CreateCrowd } from 'p5-ui'

const crowd_dom1 = ref(null)

const config1 = reactive({
    width: 500,
    height: 300,
    step: 2
})

const code = ref(`<template>
    <p5-crowd ref="crowd_dom1" :config="config1"></p5-crowd>
    <div style="margin-top: 20px;">
        <p5-button @click="crowd_dom1.pause()">暂停</p5-button>
        <p5-button @click="crowd_dom1.resume()">继续</p5-button>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const crowd_dom1 = ref(null)
const config1 = reactive({
    width: 500,
    height: 300,
    step: 2
})
<\/script>`)


const showCrowd = () => {
    const crowd_func = P5CreateCrowd({ loop: false, resize: true, fixed: true, step: 3 }, () => {
        console.log('animation end')
    })
}

const code_fixed = ref(`<template>
    <p5-button @click="showCrowd">点击开始</p5-button>
</template>

<script setup>
import { P5CreateCrowd } from 'p5-ui';

const showCrowd = () => {
    const crowd_func = P5CreateCrowd({ loop: false, resize: true, fixed: true, step: 3 }, ()=>{
        console.log('animation end')
    })

    // crowd_func.pause()
    // crowd_func.resume()
    // crowd_func.remove()
}
<\/script>`)


const table_data = reactive([
    {
        '属性名称': 'width',
        '类型': 'Number',
        '必须': 'false',
        '初始值': 'window.innerWidth',
        '描述': '画布宽度'
    },
    {
        '属性名称': 'height',
        '类型': 'Number',
        '必须': 'false',
        '初始值': 'window.innerHeight',
        '描述': '画布高度'
    },
    {
        '属性名称': 'step',
        '类型': 'Number',
        '必须': 'false',
        '初始值': '2',
        '描述': '人物移动速度'
    },
    {
        '属性名称': 'loop',
        '类型': 'Boolean',
        '必须': 'false',
        '初始值': 'true',
        '描述': '是否循环播放'
    },
    {
        '属性名称': 'resize',
        '类型': 'Boolean',
        '必须': 'false',
        '初始值': 'false',
        '描述': '画布大小随窗口变化，全屏时使用！'
    }
])

const func_data = reactive([
    {
        '方法名称': 'remove',
        '参数': '-',
        '返回值': 'void',
        '描述': '移除canvas'
    },
    {
        '方法名称': 'resume',
        '参数': '-',
        '返回值': 'void',
        '描述': '继续动画'
    },
    {
        '方法名称': 'pause',
        '参数': '-',
        '返回值': 'void',
        '描述': '暂停动画'
    },
    {
        '方法名称': 'onClose',
        '参数': '-',
        '返回值': 'void',
        '描述': '动画结束的回调函数'
    }
])

</script>
        
<template>
    <p5-title content="Crowd 人群过场动画" size="large"></p5-title>
    <p>人群过场动画效果展示</p>
    <p>canvas大小默认为全屏，使用前注意调整~</p>
    <p>若设置<p5-text style="display: inline;"> loop=false </p5-text>，则canvas会在播放完毕时销毁。</p>

    <div class="title">
        <p5-title content="窗口化的效果展示" size="large"></p5-title>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-crowd ref="crowd_dom1" :config="config1"></p5-crowd>
                <div style="margin-top: 20px;">
                    <p5-button @click="crowd_dom1.pause()">暂停</p5-button>
                    <p5-button @click="crowd_dom1.resume()">继续</p5-button>
                </div>
            </div>
        </ComponentCtn>
    </div>


    <div class="title">
        <p><p5-title content="全屏的效果展示" size="large"></p5-title></p>
        
        <p5-text>我们推荐您使用js代码来生成全屏的过场动画</p5-text>
        <ComponentCtn :code="code_fixed">
            <div class="com_title_ctn">
                <p5-button @click="showCrowd">点击开始</p5-button>
            </div>
        </ComponentCtn>
    </div>


    <div class="title">
        <p5-title content="组件的config属性" size="large"></p5-title>
        <p5-table :table_data="table_data" style="margin-top: 20px;">
            <p5-tableItem label="属性名称" width="100"></p5-tableItem>
            <p5-tableItem label="类型" width="100"></p5-tableItem>
            <p5-tableItem label="必须" width="80"></p5-tableItem>
            <p5-tableItem label="初始值" width="200"></p5-tableItem>
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
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>