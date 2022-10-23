<script setup name='P5Message'>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { getMsgImageFile } from '../../utils/tool.js'

const props = defineProps({
    type: { type: String, default: 'default' }, // 消息类别
    duration: { type: Number, default: 3000 } // 消息持续时间
})


const sword_move = ref(false) // 是否显示短剑动画
const msg_opacity = ref(1) // 消息透明度
const top = ref(0) // 消息顶部位置

// 设置消失时间
const getOpacityTime = computed(() => props.duration - 1000 > 0 ? props.duration - 1000 : props.duration)

let msg_timer = null
let opacity_timer = null
onMounted(() => {
    clearTimeout(msg_timer)
    clearTimeout(opacity_timer)

    msg_timer = setTimeout(() => {
        sword_move.value = true
        top.value = 160
    })

    opacity_timer = setTimeout(() => {
        msg_opacity.value = 0
    }, getOpacityTime.value)
})
</script>

<template>
    <div class="p5-msg-ctn" :style="{top: top + 'px'}">
        <div class="p5-msg-sub-ctn" :style="{'opacity': msg_opacity}">
            <img class="p5-msg-img" :src="getMsgImageFile(`${type}.png`)" alt="">
            <img class="p5-sword-img" :class="[sword_move?'p5-sword-animation':'']" src="../../assets/images/sword.png"
                alt="sword">
        </div>
    </div>
</template>
