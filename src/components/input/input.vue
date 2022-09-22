<script setup name='P5Input'>
import { computed } from '@vue/reactivity';
import { onMounted, reactive, ref, watch } from 'vue';

const props = defineProps({
    length: { type: Number, default: 10 },
    type: { type: String, default: 'text' }
})

// 保存各个input的dom
const input_list = ref([])
// const input_value = ref([])
const getInputDom = (el) => {
    input_list.value.push(el)
    // input_value.value.push('')
}

// 设置input自动focus
const input_flag = ref(false)

const setInputFlag = (val) => {
    input_flag.value = val
}


const setInputFocus = (idx, key_type) => {
    if (key_type === 'input') {
        if (input_flag.value) {
            if (idx + 1 < props.length)
                input_list.value[idx+1].focus()
        }
        console.log(idx, input_flag.value)
    }
    else if (key_type === 'delete') {
        input_flag.value = false
        if (idx - 1 >= 0)
            input_list.value[idx - 1].focus()
    }
}

let temp = new Array(props.length).fill('')
const input_value = ref(temp)
watch(input_value, (cur, pre) => {
    console.log('xxx', cur, pre)
})

onMounted(() => {

})
</script>

<template>
    <div class="p5-input-ctn">
        <input :ref="getInputDom" @compositionstart="setInputFlag(false)" @compositionend="setInputFlag(true)"
            @keyup="setInputFocus(idx, 'input')" @keyup.delete="setInputFocus(idx, 'delete')"
            v-for="(val, idx) in length" maxlength="1" :type="type" v-model="input_value[idx]" />
    </div>
</template>
