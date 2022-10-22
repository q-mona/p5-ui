<script setup name='P5Notification'>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import Characters from './character.js'
import { getImageFile } from '../../utils/tool.js'
import P5Title from '../title/title.vue'

const props = defineProps({
    top: { type: Number, default: 100 },
    left: { type: Number, default: 100 },
    character: { type: String, default: 'mona' },
    content: { type: String, default: '' },
    idx: { type: String, require: true }
})


const character_name = ref(Characters[props.character])

watch(() => props.character, (value, old_value) => {
    character_name.value = value
})

const move_left = ref(0)
let timer = null
onMounted(() => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        move_left.value = props.left
    }, 0)
})


const destroyDom = () => {
    document.querySelector(`#${props.idx}`).remove()
}

onBeforeUnmount(() => {
    clearInterval(timer)
    timer = null
})
</script>

<template>
    <div class="p5-noti-ctn" :style="{top: top+'px', left: move_left+'px'}" @click="destroyDom">
        <div class="p5-noti-sub-ctn">
            <img class="p5-portrait-img" :src="getImageFile(`portraits/${character}.png`)" alt="">

            <div class="p5-dialog-ctn">
                <img class="p5-dialog-img" src="../../assets/images/notification.png" alt="">

                <div class="p5-noti-title">
                    <p5-title :content="character_name" size="small"></p5-title>
                </div>

                <div class="p5-noti-text">
                    {{content}}
                </div>
            </div>
        </div>
    </div>
</template>
