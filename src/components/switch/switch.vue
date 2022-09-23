<script setup name='P5Switch'>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const props = defineProps({
    modelValue: { type: Boolean, require: true },
    size: { type: String, default: 'medium' }
})

const emits = defineEmits(['update:modelValue'])

const changeValue = () => {
    emits('update:modelValue', !props.modelValue)
}

// 设置switch大小
const setSwitchSize = computed(() => `p5-switch-size-${props.size}`)

// 控制显示子图标显示
const is_show_sub_icon = ref(false)
const showSubIcon = (val) => {
    if (val) {
        is_show_sub_icon.value = true
    }
    else {
        is_show_sub_icon.value = false
    }
}
</script>

<template>
    <div class="p5-switch-ctn" :class="[modelValue?'p5-switch-on':'p5-switch-off', setSwitchSize]">
        <div class="p5-switch-bg-ctn">
            <span class="p5-switch-bg" :class="[is_show_sub_icon?'p5-switch-bg-move':'']"></span>
        </div>
        <span class="p5-switch-icon"></span>
        <span :class="[is_show_sub_icon?'p5-switch-sub-icon':'']"></span>
        <input type="checkbox" @click="changeValue" @mouseenter="showSubIcon(true)" @mouseleave="showSubIcon(false)" />
    </div>
</template>
