<script setup name="P5Title">
import { computed } from "@vue/reactivity"
import { ref } from "vue"

const props = defineProps({
    content: { type: String, default: '', require: true }, // 文本内容
    size: { type: String, default: 'middium' }, // 字体大小
    selected_bg_color: { type: String, default: '#000' }, // 选中字体的背景颜色
    selected_font_color: { type: String, default: '#fff' }, // 选中字体的字体颜色
    font_color: { type: String, default: '#000' }, // 选中字体的字体颜色
    animation: { type: Boolean, default: false } // 背景动画
})


// 此处用于获得p标签元素
const text_dom = ref(null)

// 选择需要添加特殊样式的字符
const getSelectedIdx = computed(() => {
    const check_list = [' ', ',', '，', '.', '。', '!', '！', '?', '？']
    let idx_map = check_list.includes(props.content[1]) ? {} : { 1: 1 }

    for (let i = 2; i < props.content.length; i++) {
        if (!check_list.includes(props.content[i]) && check_list.includes(props.content[i - 2]))
            idx_map[i] = 1
    }

    return idx_map
})


// 设置额外的class
const getExtraCass = computed(() => {
    const text_animation = props.animation ? 'p5-text-animation' : ''
    return `text-size-${props.size} ${text_animation}`
})

// 设置额外的style
const getSpanStyle = computed(() => (idx) => {
    let degree = Math.random() < 0.5 ? Math.random() * 10 : -Math.random() * 10

    return {
        'color': getSelectedIdx.value[idx] === 1 ? props.selected_font_color : props.font_color,
        'background-color': getSelectedIdx.value[idx] === 1 ? props.selected_bg_color : '',
        'transform': `rotate(${degree}deg)`
    }
})
</script>
    
<template>
    <p class="p5-text-ctn" :class="getExtraCass" ref="text_dom">
        <span v-for="(str, idx) in content" :style="getSpanStyle(idx)">{{str}}</span>
    </p>
</template>
