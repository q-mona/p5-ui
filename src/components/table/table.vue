<script setup name='P5Table'>
import { computed } from '@vue/reactivity';
import { onMounted, provide, ref, useSlots } from 'vue';
const slots = useSlots()
const props = defineProps({
    table_data: { type: Array, default: [] },
    fix: { type: String, default: '' }
})

const ths = ref([])
const col_style = ref({})
const fix_right = computed(() => props.fix == 'right' || props.fix == 'left-right')
const fix_left = computed(() => props.fix == 'left' || props.fix == 'left-right')
const setColStyle = () => {
    let temp = {}
    ths.value.forEach(item => {
        temp[item] = {}
    })
    if (slots.default)
        slots.default().forEach((item, idx) => {
            for (const key in item.props) {
                if (key != 'label')
                    temp[item.props.label][key] = item.props[key]
            }
        })

    return temp
}

provide('data', props.table_data)
onMounted(() => {
    ths.value = Object.keys(props.table_data[0])
    col_style.value = setColStyle()
    // slots.default().forEach((item, idx) => {
    //     if(item.children)
    //         console.log(item.children.default())
    // })
})
</script>

<template>
    <div class="p5-table-ctn p5-scrollbar" :class="[fix_right?'p5-td-fix-right':'', fix_left?'p5-td-fix-left':'']">
        <table cellspacing="0">
            <thead>
                <tr>
                    <th v-for="(data, th_idx) in ths">{{data}}</th>
                </tr>
            </thead>
            <colgroup>
                <col v-for="(data, col_idx) in col_style" :width="data['width']">
            </colgroup>

            <tbody>
                <tr v-for="(data, data_idx) in table_data" class="p5-tr-onhover">
                    <td v-for="(item, td_idx) in data">{{item}}</td>
                </tr>
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>
