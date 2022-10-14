<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref, reactive } from 'vue';
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
  P5Notification({ content: 'hello!', top: 200, character: 'kasumi' })
  P5Message({ type: Math.random() > 0.5 ? 'fail' : 'clear', duration: 3000 })
}

const t_data = reactive([
  {name:'自行车', year: '2012-21-32', price: 18432, address: '的肌肤-地方撒-打法'},
  {name:'多个', year: '2012-21-32', price: 24245, address: '进化就-地方撒-打法'},
  {name:'自行夫是德国车', year: '2012-21-32', price: 24, address: '的肌肤-的广泛共识-打法'},
  {name:'自第三个行车', year: '2012-21-32', price: 875224, address: '的肌肤-地方撒-a单独发给'},
  {name:'自第三个行车', year: '2012-21-32', price: 875224, address: '的肌肤-地方撒-a单独发给'},
  {name:'自第三个行车', year: '2012-21-32', price: 875224, address: '的肌肤-地方撒-a单独发给'},
  {name:'自第三个行车', year: '2012-21-32', price: 875224, address: '的肌肤-地方撒-a单独发给'},
  {name:'自第三个行车', year: '2012-21-32', price: 875224, address: '的肌肤-地方撒-a单独发给'},
  {name:'自第三个行车', year: '2012-21-32', price: 875224, address: '的肌肤-地方撒-a单独发给'},
  {name:'自第三个行车', year: '2012-21-32', price: 875224, address: '的肌肤-地方撒-a单独发给'},
  {name:'阿松大', year: '2012-21-32', price: 184312, address: '爱对方犯规-地方撒-打法'}
])
onMounted(() => { })
</script>

<template>

  <div class="app-ctn" >

    <div>
      <p5-icon  name='back' />
      <p5-icon  name='continue' />
      <p5-icon  name='close' />
      <p5-icon  name='confirm' />
      <p5-icon  name='reply' />
      <p5-icon  name='send' />
    </div>

    <div>
      <p5-icon type="party" name='akechi' />
      <p5-icon type="party" name='caroline' />
      <p5-icon type="party" name='ryuji' />
      <p5-icon type="party" name='p5' />
      <p5-icon type="party" name='alibaba' />
      <p5-icon type="party" name='ann' />
      <p5-icon type="party" name='futaba' />
      <p5-icon type="party" name='haru' />
    </div>

    <p5-table :table_data="t_data" style="height:200px" fix="left-right">
      <p5-tableItem label="name" width="150"></p5-tableItem>
      <p5-tableItem label="address" width="250"></p5-tableItem>
    </p5-table>
    <p5-slider @change="slTest" placement="top" v-model="sl_value1" left_text="小" right_text="大"></p5-slider>

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
