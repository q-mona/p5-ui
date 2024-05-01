<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
    code: String,
    is_show: { type: Boolean, default: true }
})

const is_click = ref(props.is_show)

onMounted(() => {
    hljs.highlightAll()
})
</script>

<template>
    <div class="component-ctn">
        <slot></slot>

        <div v-if="is_click" :style="{'border-top': '1px solid black', 'margin-top': '10px'}">
            <!-- <p5-divider style="width:200px"></p5-divider> -->
            <pre><code class="language-html">{{code}}</code></pre>
            <!-- <highlightjs autodetect language='javascript' :code="code"/> -->
        </div>
        <!-- <div class="com-icon-ctn" @click="is_click=!is_click" :style="{'margin-top': is_click?'0':'10px'}">
            <img v-if="!is_click" src="../assets/images/down.png" alt="">
            <img v-if="is_click" src="../assets/images/up.png" alt="">
        </div> -->
    </div>
</template>

<style>
.component-ctn {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0 20px;
    margin: 10px 0;

    overflow: auto;
    border: 1px solid black;
    border-radius: 4px;

    /* transition: all 0.5s; */
}

.com-icon-ctn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    /* margin-top: 20px; */
    border-top: 1px solid black;
}

.com-icon-ctn:hover img {
    box-shadow: 0 0 4px coral;
}

.com-icon-ctn img {
    border-radius: 50%;

    width: 20px;
    height: 20px;
}
</style>
