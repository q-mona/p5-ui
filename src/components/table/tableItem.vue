<script setup name='P5TableItem'>
import { inject, onMounted } from 'vue';

const data = inject('data')
const props = defineProps({
    label: { type: String, require: true },
    width: { type: String, default: '' }
})

onMounted(() => {
    // console.log(data)
})
</script>

<template>

</template>
