<script setup name="P5Button">
import { computed } from '@vue/reactivity';

const getBtnStyle = computed(() => {
    let degree_x = Math.random() < 0.5 ? 1 + Math.random() * 1.5 : -1 - Math.random() * 1.5
    return { 'transform': `skewX(${degree_x}deg)` }
})
</script>

<template>
    <div class="p5-btn-ctn" :style="getBtnStyle">
        <slot></slot>
    </div>
</template>
