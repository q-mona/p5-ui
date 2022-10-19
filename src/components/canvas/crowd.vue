<script setup name='P5Crowd'>
import { onMounted, reactive, ref } from 'vue';
import crowd_imgs from './crowd.js'

const p5_crowd = ref(null)
const img_list = []
const img_num = 12


onMounted(() => {
    for (let i = 0; i < img_num; i++) {
        const img = new Image()
        img.src = crowd_imgs[i]
        img_list.push(img)
    }
    const ctx = p5_crowd.value.getContext('2d')

    // let i = 0
    // for (const img of img_list) {
    //     img.onload = () => {
    //         ctx.drawImage(img, 0, 0, img.width, img.height,
    //             i, 0, p5_crowd.value.height/2, p5_crowd.value.height)
    //         i += 50
    //     }
    // }
    let img = img_list[0]
    let x = 0, y = 0

    // setInterval(() => {
    //     ctx.fillRect(0, 0, p5_crowd.value.width, p5_crowd.value.height)
    //     ctx.drawImage(img, 0, 0, img.width, img.height,
    //         x, y, p5_crowd.value.height * 0.75, p5_crowd.value.height * 1.5)
    //     // ctx.clearRect(0, 0, 1024, 512)

    //     x += Math.random() * 20
    //     y = Math.random() < 0.5 ? -p5_crowd.value.height / 2 + Math.random() * 20 : -p5_crowd.value.height / 2 - Math.random() * 20
    // }, 100)
})
</script>

<template>
    <canvas width="1024" height="512" ref="p5_crowd"></canvas>
</template>
