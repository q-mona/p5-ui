<script setup name='P5Crowd'>
import { onMounted, reactive, ref, watch } from 'vue';
import c0 from '../../../assets/images/crowd/crowd0.png'
import c1 from '../../../assets/images/crowd/crowd1.png'
import c2 from '../../../assets/images/crowd/crowd2.png'
import c3 from '../../../assets/images/crowd/crowd3.png'
import c4 from '../../../assets/images/crowd/crowd4.png'
import c5 from '../../../assets/images/crowd/crowd5.png'
import c6 from '../../../assets/images/crowd/crowd6.png'
import c7 from '../../../assets/images/crowd/crowd7.png'
import c8 from '../../../assets/images/crowd/crowd8.png'
import c9 from '../../../assets/images/crowd/crowd9.png'
import c10 from '../../../assets/images/crowd/crowd10.png'
import c11 from '../../../assets/images/crowd/crowd11.png'

const props = defineProps({
    config: { type: Object, default: {} },
    idx: { type: String, default: '' },
    onClose: { type: Function, default: () => { } }
})

const crowd_imgs = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11]
const p5_crowd = ref(null)
const img_list = []
const img_num = crowd_imgs.length
const img_set = new Set()
let ctx = null
let animation_idx = null

const default_config = reactive({
    width: window.innerWidth,
    height: window.innerHeight,
    loop: true,
    pause: false,
    fixed: false,
    end: false,
    resize: false,
    opacity: 1,
    step: 2
})

window.addEventListener('resize', () => {
    if (default_config.resize && p5_crowd.value) {
        p5_crowd.value.width = window.innerWidth
        p5_crowd.value.height = window.innerHeight
    }
})

const initCanvas = () => {
    for (const key in props.config) {
        default_config[key] = props.config[key]
    }
    p5_crowd.value.width = default_config.width
    p5_crowd.value.height = default_config.height
    ctx = p5_crowd.value.getContext('2d')
}

const initImgList = () => {
    for (let i = 0; i < img_num * 2; i++) {
        const img = crowd_imgs[i % img_num]
        const temp_img = new Image()
        temp_img.src = img
        img_list.push({
            img: temp_img,
            step: Math.random() * default_config.step + default_config.step,
            step_y: Math.random() * 0.2 + 0.2,
            x: p5_crowd.value.width + i * 100,
            y: 20,
            flag_x: i < img_num ? true : false,
            flag_y: true,
            idx: i
        })
    }
}

const updateImgList = () => {
    img_set.clear()
    default_config.end = false
    img_list.forEach((item, idx) => {
        item.step = Math.random() * default_config.step + default_config.step
        item.step_y = Math.random() * 0.2 + 0.2
        item.x = p5_crowd.value.width + idx * 100
    })
}

const render = () => {
    ctx.clearRect(0, 0, p5_crowd.value.width, p5_crowd.value.height)
    ctx.beginPath()
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fillRect(0, 0, p5_crowd.value.width, p5_crowd.value.height)
    img_list.forEach((item, idx) => {
        if (item.img.complete) {
            if (item.x >= -item.img.width) {
                item.x -= item.step
                if (item.flag_y) {
                    if (item.y - item.step_y >= 0)
                        item.y -= item.step_y
                    else
                        item.flag_y = false
                }
                else {
                    if (item.y + item.step_y <= 20)
                        item.y += item.step_y
                    else
                        item.flag_y = true
                }
                ctx.save()
                if (item.flag_x) {
                    ctx.scale(-1, 1)
                    ctx.translate(-p5_crowd.value.width, 0)
                }
                ctx.drawImage(item.img, 0, 0, item.img.width, item.img.height,
                    item.x, item.y, p5_crowd.value.height / 2, p5_crowd.value.height)
                ctx.restore()
            }
            else {
                img_set.add(item.idx)
                if (img_set.size == img_num * 2) {
                    if (default_config.loop)
                        updateImgList()
                    else {
                        default_config.end = true
                    }
                }
                else if (img_set.size == img_num * 2 - 2 && !default_config.loop) {
                    default_config.opacity = 0
                }
            }
        }
    })
    ctx.save()
    ctx.shadowBlur = 100;
    ctx.fillStyle = "rgb(0,0,0,0.2)"
    ctx.shadowColor = "#8360c3"
    ctx.fillRect(0, 0, p5_crowd.value.width, p5_crowd.value.height)
    ctx.restore()
}

const update = () => {
    if (!default_config.pause) {
        render()
    }
    animation_idx = requestAnimationFrame(update)
}

onMounted(() => {
    initCanvas()
    initImgList()
    update()
})

watch(default_config, (val, oldval) => {
    if (val.end && !val.loop) {
        remove()
    }
})

const pause = () => {
    default_config.pause = true
}

const resume = () => {
    default_config.pause = false
}

const remove = () => {
    props.onClose()
    cancelAnimationFrame(animation_idx)
    if (props.idx == '') {
        p5_crowd.value.remove()
        p5_crowd.value = null
    }
    else {
        let dom = document.querySelector('#' + props.idx)
        dom.remove()
        dom = null
    }
}

defineExpose({
    pause,
    resume,
    remove
})
</script>

<template>
    <canvas ref="p5_crowd" class="p5-crowd" :class="[default_config.fixed ? 'p5-crowd-fixed' : '']"
        :style="{ 'opacity': default_config.opacity }"></canvas>
</template>