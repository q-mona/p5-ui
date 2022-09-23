<script setup name='P5Text'>
import { computed } from '@vue/reactivity';

const props = defineProps({
    size: { type: String, default: 'medium' }
})

const getSizeClass = computed(() => `text-size-${props.size}`)
</script>

<template>
    <p class="p5-text" :class="[getSizeClass]">
        <slot></slot>
    </p>
</template>
