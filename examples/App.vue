<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { P5Message, P5Notification } from '../src/index.js'
const text1 = computed(() => sw_value1.value ? '你好 世界' : '浮动空间，给定。官方，非递归！给?fd给定。')
const text2 = ref('为了在声明 props 和 emits 选项时获得完整的类型推导支持，我们可以使用 defineProps 和 defineEmits API，它们将自动地在 <script setup> 中可用。')


const sw_value1 = ref(true)
const sw_value2 = ref(false)
const sw_value3 = ref(true)

const sl_value1 = ref(0)
const sl_value2 = ref(150)

const slTest = (val) => {
  console.log(val)
}

const showMsg = () => {
  P5Notification({ content: 'hello!', top: 200, character: 'Ann' })
  P5Message({ type: Math.random() > 0.5 ? 'fail' : 'clear', duration: 20000 })
}

onMounted(() => { })


</script>

<template>
    <p5-slider @change="slTest" placement="top" v-model="sl_value1" left_text="小" right_text="大"></p5-slider>

  <!-- menu、滚动条、输入框 -->
  <div class="app-ctn">
    <p5-backTop :scroll_height="100"></p5-backTop>

    <p5-slider style="margin-top: 20px;" :width="200" :min="100" :max="200" v-model="sl_value2" left_text="音量">
    </p5-slider>


    <p5-divider></p5-divider>

    <div class="item-ctn">
      <p5-switch v-model="sw_value1"></p5-switch>
      <p5-switch v-model="sw_value2" size="small"></p5-switch>
      <p5-switch v-model="sw_value3" size="large"></p5-switch>
    </div>

    <p5-divider style="width: 300px;"></p5-divider>

    <p5-button>
      <p5-title @click="showMsg" font_color="#ff0022" selected_font_color="#000" selected_bg_color="#ff0022"
        :animation="true" content="异闻录 测试 Test"></p5-title>
    </p5-button>

    <p5-button style="margin-top: 10px;">
      按钮 组件 测试
    </p5-button>

    <p5-divider style="width: 400px;"></p5-divider>

    <p5-text size="large">你好世界</p5-text>

    <p5-title :content="text1" :animation="true"></p5-title>
    <p5-title @click="showMsg" style="max-width: 200px;" :content="text2"></p5-title>

    <p5-divider></p5-divider>

    <p5-input></p5-input>


  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

.app-ctn {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(158, 158, 158);
  padding: 20px;
}

.item-ctn {
  display: flex;
  width: 500px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
}
</style>
