<script setup>
import ComponentCtn from '../components/componentCtn.vue'
import { reactive, ref } from 'vue'

const code = ref(`<template>
    <p5-button>女神异闻录5 无印</p5-button>

    <p5-button>
        <p5-title content="女神异闻录5 皇家版" :animation="true"
            font_color="#ff0022" selected_font_color="#000" selected_bg_color="#ff0022" ></p5-title>
    </p5-button>
</template>`)

const attr = reactive({
    size: { type: 'String', default: 'medium' }, // 字体大小
})
</script>
        
<template>
    <p5-title content="Button 按钮" size="large"></p5-title>
    <p>该部分仍在随缘开发中~</p>
    <p>女神异闻录5中的按钮组件</p>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>按钮组件的效果展示</p>
        <ComponentCtn :code="code">
            <div class="com_title_ctn">
                <p5-button>女神异闻录5 无印</p5-button>
                <p5-button>
                    <p5-title content="女神异闻录5 皇家版" font_color="#ff0022" selected_font_color="#000"
                        selected_bg_color="#ff0022" :animation="true"></p5-title>
                </p5-button>
            </div>
        </ComponentCtn>
    </div>
</template>
        
<style scoped>
.com_title_ctn {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>