<script setup name='P5Crowd'>
import { onMounted, reactive, ref, watch } from 'vue';
import crowd_imgs from './image.js'

const props = defineProps({
    config: { type: Object, default: {} }
})
const p5_crowd = ref(null)
const img_list = []
const img_num = crowd_imgs.length
const img_set = new Set()
let ctx = null
let animation_idx = null

const default_config = reactive({
    width: window.innerWidth,
    height: window.innerHeight,
    canvas_idx: `canvas_${new Date().getTime()}`,
    loop: true,
    pause: false,
    fixed: false,
    end: false,
    resize: false,
    opacity: 1
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
}

const initImgList = () => {
    crowd_imgs.forEach((img, idx) => {
        const temp_img = new Image()
        temp_img.src = img
        img_list.push({
            img: temp_img,
            step: Math.random() * 3 + 2,
            x: p5_crowd.value.width + idx * 100,
            y: 0,
            flag: idx < img_num / 2 ? true : false // 控制移动方向(左/右)
        })
    })
}

const updateImgList = () => {
    img_set.clear()
    default_config.end = false
    img_list.forEach((item, idx) => {
        item.step = Math.random() * 3 + 2,
            item.x = p5_crowd.value.width + idx * 100
    })
}

const render = () => {
    ctx.clearRect(0, 0, p5_crowd.value.width, p5_crowd.value.height)
    ctx.fillRect(0, 0, p5_crowd.value.width, p5_crowd.value.height)
    img_list.forEach((item, idx) => {
        if (item.img.complete) {
            if (item.x >= -item.img.width) {
                item.x -= item.step

                ctx.save()
                if (item.flag) {
                    ctx.scale(-1, 1)
                    ctx.translate(-p5_crowd.value.width, 0)
                }
                ctx.drawImage(item.img, 0, 0, item.img.width, item.img.height,
                    item.x, item.y, p5_crowd.value.height/2, p5_crowd.value.height)
                // ctx.drawImage(item.img, 0, 0, item.img.width, item.img.height,
                //     item.x, item.y, p5_crowd.value.height / 2, p5_crowd.value.height)
                ctx.restore()
            }
            else {
                img_set.add(idx)
                if (img_set.size == img_num) {
                    if (default_config.loop)
                        updateImgList()
                    else {
                        default_config.end = true
                    }
                }
                else if(img_set.size == img_num - 2 && !default_config.loop){
                    default_config.opacity = 0
                }
            }
        }
    })
}

const update = () => {
    if (!default_config.pause) {
        render()
    }
    animation_idx = requestAnimationFrame(update)
}



onMounted(() => {
    ctx = p5_crowd.value.getContext('2d')
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
    cancelAnimationFrame(animation_idx)
    p5_crowd.value.remove()
}

defineExpose({
    pause,
    resume,
    remove
})
</script>

<template>
    <canvas :id="default_config.canvas_idx" ref="p5_crowd" class="p5-crowd" :class="[default_config.fixed?'p5-crowd-fixed':'']"
        :style="{'opacity': default_config.opacity}"></canvas>
</template>
