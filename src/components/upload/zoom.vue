<script setup name='P5Zoom'>
const props = defineProps({
    img_src: { type: String, require: true },
    idx: { type: String, require: true }
})

const handleClick = ()=>{
    document.querySelector('#'+props.idx).remove()
}
</script>

<template>
    <div class="p5-zoom-ctn">
        <div class="p5-zoom-sub-ctn">
            <img class="p5-zoom-img" :src="img_src" alt="">
            <img @click="handleClick" class="p5-zoom-close" src="../../assets/images/upload/close.png" alt="">
        </div>
    </div>
</template>
