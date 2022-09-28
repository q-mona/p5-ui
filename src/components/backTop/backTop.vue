<script setup name='P5BackTop'>
import { onMounted, ref } from 'vue';
import { debounce } from '../../utils/tool.js'
const props = defineProps({
    scroll_height: { type: Number, default: 0 },
    right: { type: Number, default: 40 },
    bottom: { type: Number, default: 40 }
})

const is_hidden = ref(true)
function sroll() {
    let scroll_top = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll_top > props.scroll_height) {
        is_hidden.value = false
    }
    else {
        is_hidden.value = true
    }
}
const toTop = ()=>{
    document.documentElement.scrollTop = document.body.scrollTop = 0
}

onMounted(() => {
    window.onscroll = debounce(sroll, 100)
})
</script>

<template>
    <div class="p5-top-ctn" :style="{right:right +'px', bottom:bottom +'px'}" :hidden="is_hidden" @click="toTop">
        <img src="../../assets/images/back-top.png" alt="back top">
    </div>
</template>
