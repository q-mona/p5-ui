<script setup name='P5Text'>
import { watch, ref } from 'vue';

const props = defineProps({
    size: { type: String, default: 'medium' }
})

const size_lass = ref(`text-size-${props.size}`)

watch(()=>props.size, (value, oldValue)=>{
    size_lass.value = value
})
</script>

<template>
    <p class="p5-text" :class="[size_lass]">
        <slot></slot>
    </p>
</template>
