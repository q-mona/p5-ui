<script setup name='P5Slider'>
import { ref, watch } from 'vue';

const props = defineProps({
    left_text: { type: String, default: '' }, // 左边文本
    right_text: { type: String, default: '' }, // 右边文本
    min: { type: Number, default: 0 }, // 最小值
    max: { type: Number, default: 100 }, // 最大值
    width: { type: Number, default: 100 }, // 整体宽度
    modelValue: { type: Number, require: true }, // 响应式的value
    placement: { type: String, default: 'top' }, // tip位置
    tip: { type: Boolean, default: true } // 是否显示tip
})

const emits = defineEmits(['update:modelValue', 'change', 'input'])
const temp_value = ref(props.modelValue)

// 值改变的响应事件
const changeValue = () => {
    emits('update:modelValue', Number(temp_value.value))
    emits('change', Number(temp_value.value))
}


const is_hover = ref(false) // 是否触发hover事件
const img_src = ref("/src/assets/images/icon-star-white.png") // tip图标地址

// 改变tip图标
const showIconAnimation = (val) => {
    is_hover.value = val

    if (val) {
        img_src.value = "/src/assets/images/icon-star-black.png"
    } else {
        img_src.value = "/src/assets/images/icon-star-white.png"
    }
}

// 响应式改变tip位置
const icon_position = ref((temp_value.value - props.min) / (props.max - props.min) * props.width - 18)

watch(temp_value, (value, oldValue) => {
    icon_position.value = (value - props.min) / (props.max - props.min) * props.width - 18
})
</script>

<template>
    <div class="p5-slider-ctn" @mouseenter="showIconAnimation(true)" @mouseleave="showIconAnimation(false)">
        <p5-text class="p5-slider-text-left">{{left_text}}</p5-text>

        <div class="p5-slider-bg" :style="{width: width + 'px'}">
            <span v-if="tip" :hidden="!is_hover" class="p5-slider-icon p5-text"
                :style="{left: icon_position + 'px', 'top': placement==='top'?'-30px':'24px'}">{{temp_value}}</span>

            <input class="p5-slider-progress" :class="[is_hover?'p5-slider-progress-hover':'p5-slider-progress-static']"
                type="range" :min="min" :max="max" v-model="temp_value" @change="changeValue" />
        </div>

        <p5-text class="p5-slider-text-right">{{right_text}}</p5-text>
    </div>
</template>
