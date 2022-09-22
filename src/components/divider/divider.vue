<script setup name="P5Divider">
import { computed } from '@vue/reactivity';

const props = defineProps({
    direction: { type: String, default: 'horizontal' }
})

const getDirectionClass = computed(() => {
    return props.direction === 'horizontal' ? 'p5-divider-horizontal' : 'p5-divider-vertical'
})
</script>

<template>
    <div class="p5-divider-ctn" :class="[getDirectionClass]"></div>
</template>
