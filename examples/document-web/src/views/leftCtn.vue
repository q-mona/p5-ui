<script setup name='leftCtn'>
import { reactive, ref } from 'vue';

const selected_idx = ref(0)
const emit = defineEmits(['handleClick'])
const navTo = (item, idx) => {
    if (item.link !== '')
        emit('handleClick', item.link)

    selected_idx.value = idx
}

const component_map_1 = reactive([
    { name: '开发指南', link: '', is_title: true },
    { name: '简介', link: 'intro', is_title: false, idx: 0 },
    { name: '快速开始', link: 'setup', is_title: false, idx: 1 }
])
const component_map_2 = reactive([
    { name: '组件', link: '', is_title: true },
    { name: '全局CSS', link: 'css', is_title: false, idx: 12 },
    { name: 'Icon 图标', link: 'icon', is_title: false, idx: 13 },
    { name: 'Title 标题', link: 'title', is_title: false, idx: 2 },
    { name: 'Text 文字', link: 'text', is_title: false, idx: 3 },
    { name: 'Button 按钮', link: 'button', is_title: false, idx: 4 },
    // { name: 'Input 输入框', link: 'input', is_title: false, idx: 5 },
    { name: 'Slider 滑块', link: 'slider', is_title: false, idx: 6 },
    { name: 'Switch 滑块', link: 'switch', is_title: false, idx: 7 },
    { name: 'Message 消息', link: 'message', is_title: false, idx: 8 },
    { name: 'Notification 提示', link: 'noti', is_title: false, idx: 9 },
    { name: 'BackTop 返回顶部', link: 'backtop', is_title: false, idx: 10 },
    { name: 'Divider 分隔符', link: 'divider', is_title: false, idx: 11 },
    { name: 'Upload 图片上传', link: 'upload', is_title: false, idx: 15 },
    { name: '动画', link: '', is_title: true },
    { name: 'Crowd 人群过场', link: 'crowd', is_title: false, idx: 14 }


])
</script>

<template>
    <div class="left-ctn">
        <div class="left-ctn-item">
            <div class="p5-hover-animation-gray" :style="{'margin-top': item.is_title&&idx!=0?'0':'15px'}" v-for="(item, idx) in component_map_1">
                <p5-title v-if="item.is_title" :content="item.name" size="extra-large"></p5-title>

                <p5-text v-else @click="navTo(item, item.idx)"
                    :style="{cursor:'pointer', 'border-right':selected_idx==item.idx?'4px black solid':''}">
                    {{item.name}}
                </p5-text>
            </div>
        </div>

        <div class="left-ctn-item scroll" style="margin-top: 20px;">
            <div class="p5-hover-animation-gray" :style="{'margin-top': item.is_title&&idx!=0?'0':'15px'}" v-for="(item, idx) in component_map_2">
                <p5-title v-if="item.is_title" :style="{'margin-top':item.name=='动画'?'10px':''}" :content="item.name" size="extra-large"></p5-title>

                <p5-text v-else @click="navTo(item, item.idx)"
                    :style="{cursor:'pointer', 'border-right':selected_idx==item.idx?'4px black solid':''}">
                    {{item.name}}
                </p5-text>
            </div>
        </div>
    </div>
</template>

<style>
.left-ctn {
    width: 15vw;
    box-sizing: border-box;
    position: sticky;
    top: 120px;
}

.left-ctn:first-child {
    height: 200px;
}

.scroll{
    height: 360px;
    overflow: auto;
}

.left-ctn-item {
    background-color: rgb(255, 255, 255, 0.8);
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
}
</style>