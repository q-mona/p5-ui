<script setup name='p5Icon'>
import { computed } from '@vue/reactivity';
import '../../assets/svgs/p5-icon-btn.js'
import '../../assets/svgs/p5-icon-party.js'

const props = defineProps({
    name: { type: String, require: true },
    type: { type: String, default: 'btn' },
})

const svg_class = computed(() => `p5-svg-${props.type}`)
</script>

<template>
    <div class="p5-svg-ctn">
        <svg :class="[svg_class]">
            <use :xlink:href="'#'+name" />
        </svg>
    </div>
</template>
