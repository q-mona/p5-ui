<script setup name='P5Slider'>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const props = defineProps({
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    min: { type: Number, default: 0 }
})

const is_hover = ref(false)
const img_src = ref("/src/assets/images/icon-star-white.png")

const showIconAnimation = (val) => {
    is_hover.value = val

    if (val) {
        img_src.value = "/src/assets/images/icon-star-black.png"
    } else {
        img_src.value = "/src/assets/images/icon-star-white.png"
    }
}
</script>

<template>
    <div class="p5-slider-ctn" :class="[is_hover?'p5-star-rotate':'']" @mouseenter="showIconAnimation(true)" @mouseleave="showIconAnimation(false)">
        <img :src="img_src" alt="star icon">
    </div>
</template>
