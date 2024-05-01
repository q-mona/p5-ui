<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'
import { P5Notification } from 'p5-ui'

const code = ref(`<template>
    <p5-button @click="noti('mona', 200)">Mona的提示</p5-button>
    <p5-button @click="noti('ann', 400)">杏的提示</p5-button>
    <p5-button @click="noti('ryuji', 600)">龙司的提示</p5-button>
</template>

<script setup>
import { P5Notification } from 'p5-ui'

const noti = (character, top) => {
    P5Notification({content: 'Emm 我要说什么来着？', character, top})
}
<\/script>`)


const noti = (character, top) => {
    P5Notification({content: 'Emm 我要说什么来着？', character, top})
}

const table_data = reactive([
{
        '属性名称' : 'top',
        '类型' : 'Number',
        '必须' : 'false',
        '初始值' : '100',
        '描述' : '距离屏幕顶部的距离，单位px'
    },
{
        '属性名称' : 'left',
        '类型' : 'Number',
        '必须' : 'false',
        '初始值' : '100',
        '描述' : '距离屏幕左侧的距离，单位px'
    },
{
        '属性名称' : 'character',
        '类型' : 'String',
        '必须' : 'false',
        '初始值' : 'mona',
        '描述' : '提示的角色，角色对照表请移至下方'
    },
{
        '属性名称' : 'content',
        '类型' : 'String',
        '必须' : 'false',
        '初始值' : '--',
        '描述' : '提示内容'
    }
])

const func_data = reactive([
    {
        '方法名称': 'P5Notification',
        '参数': '{content, left, top, character}',
        '返回值': 'void',
        '描述': '提示框触发函数'
    }
])

const character_data = reactive([
    {
        '中文名':'摩尔 加纳',
        '对应编号': 'mona'
},
    {
        '中文名':'坂本 龙司',
        '对应编号': 'ryuji'
},
    {
        '中文名':'高卷 杏',
        '对应编号': 'ann'
},
    {
        '中文名':'喜多川 祐介',
        '对应编号': 'yusuke'
},
    {
        '中文名':'新岛 真',
        '对应编号': 'makoto'
},
    {
        '中文名':'佐仓 双叶',
        '对应编号': 'futaba'
},
    {
        '中文名':'奥村 春',
        '对应编号': 'haru'
},
    {
        '中文名':'明智 吾郎',
        '对应编号': 'akechi'
},
    {
        '中文名':'芳泽 霞',
        '对应编号': 'kasumi'
},
    {
        '中文名':'芳泽 堇',
        '对应编号': 'sumire'
},
    {
        '中文名':'拉雯妲',
        '对应编号': 'lavenza'
}])
</script>
                
<template>
    <p5-title content="Notification 提示" size="large"></p5-title>
    <p>女神异闻录5中的提示组件</p>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>提示组件的效果展示</p>
        <p>由于立绘较多，该组件的体积较大(1MB左右)，请酌情使用！</p>
        <p>注意，在调用P5Notification时，<p5-text style="display: inline;">参数请用 { } 包裹</p5-text>，即使是没有参数！</p>
        <p>提示框不会自动消失，需要点击提示后才关闭。</p>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-button @click="noti('mona', 200)">Mona的提示</p5-button>
                <p5-button @click="noti('ann', 400)">杏的提示</p5-button>
                <p5-button @click="noti('ryuji', 600)">龙司的提示</p5-button>
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
            <p5-tableItem label="参数" width="300"></p5-tableItem>
            <p5-tableItem label="返回值" width="100"></p5-tableItem>
        </p5-table>
    </div>

    <div class="title">
        <p5-title content="角色对照表" size="large"></p5-title>
        <p5-table :table_data="character_data" style="margin-top: 20px;">
            <p5-tableItem label="中文名"></p5-tableItem>
            <p5-tableItem label="对应编号"></p5-tableItem>
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