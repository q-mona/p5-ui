<script setup name='P5Upload'>
import { ref } from 'vue'
import P5Zoom from './zoom.js'
import ajax from './ajax.js'
import { getUploadImageFile } from '../../utils/tool.js'
const props = defineProps({
    size: { type: Number, default: 1024 },
    action: { type: String, default: '' }
})

const p5_input = ref(null)
const default_src = getUploadImageFile('default.png')
const img_src = ref(default_src)
const img_file = ref(null)
const show_delete = ref(false)

const handleClick = () => {
    if (img_src.value == default_src) {
        p5_input.value.click()
    }
}

const handleDrop = (event) => {
    if (!event.dataTransfer.files[0]) return

    const file = event.dataTransfer.files[0]
    if (file.size / 1024 < props.size) {
        const url = URL.createObjectURL(file)
        img_src.value = url
        img_file.value = file
    }
}

const handleChange = (event) => {
    if (!event.target.files[0]) return

    const file = event.target.files[0]
    if (file.size / 1024 < props.size) {
        const url = URL.createObjectURL(file)
        img_src.value = url
        img_file.value = file
    }

}

const zoom = () => {
    P5Zoom(img_src.value)
}

const handleMouse = (val) => {
    if (img_src.value == default_src)
        show_delete.value = false
    else
        show_delete.value = val

}
const deleteImg = () => {
    img_src.value = default_src
    show_delete.value = false
}

const submit = (callback) => {
    if (props.action == '' || img_src.value == default_src)
        return

    const params = new FormData()
    params.append('file', img_file.value)
    ajax(props.action, params, (res, err) => {
        callback(res, err)
    })
}
defineExpose({ submit })
</script>

<template>
    <div class="p5-upload-ctn" @click="handleClick" @mouseenter="handleMouse(true)" @mouseleave="handleMouse(false)"
        @drop.prevent="handleDrop" @dragover.prevent @dragenter.prevent>
        <img class="p5-upload-preview" :src="img_src" alt="upload img">

        <img @click.stop="deleteImg" :hidden="!show_delete" class="p5-upload-delete"
            src="../../assets/images/upload/close.png" alt="delete img">

        <img class="p5-star" style="top:10px; left:-15px" src="../../assets/images/upload/star.png" alt="star">
        <img class="p5-star" style="top:40px; right:-15px" src="../../assets/images/upload/star.png" alt="star">

        <img @click.stop="zoom" class="p5-zoom" style="bottom: -15px;right:-15px;"
            src="../../assets/images/upload/zoom.png" alt="star">

        <input ref="p5_input" type="file" accept="image/*" @change="handleChange">
    </div>
</template>
