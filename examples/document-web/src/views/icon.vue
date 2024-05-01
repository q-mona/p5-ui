<script setup name=''>
import { ref } from 'vue';
import ComponentCtn from '../components/componentCtn.vue'
import { P5Message } from 'p5-ui'

const code_btn = ref(`<template>
    <p5-icon type='btn' name="back" />
    <p5-icon type='btn' name="close" />
    <p5-icon type='btn' name="confirm" />
    <p5-icon type='btn' name="continue" />
    <p5-icon type='btn' name="reply" />
    <p5-icon type='btn' name="send" />
</template>`)

const code_party = ref(`<template>
    <p5-icon type='party' name="alibaba" />
    <p5-icon type='party' name="ann" />
    <p5-icon type='party' name="akechi" />
    <p5-icon type='party' name="justine" />
    <p5-icon type='party' name="caroline" />
    <p5-icon type='party' name="chihaya" />
    <p5-icon type='party' name="futaba" />
    <p5-icon type='party' name="haru" />
    <p5-icon type='party' name="hifumi" />
    <p5-icon type='party' name="ichiko" />
    <p5-icon type='party' name="makoto" />
    <p5-icon type='party' name="munehisa" />
    <p5-icon type='party' name="p5" />
    <p5-icon type='party' name="ryuji" />
    <p5-icon type='party' name="sadayo" />
    <p5-icon type='party' name="shinya" />
    <p5-icon type='party' name="sojiro" />
    <p5-icon type='party' name="tae" />
    <p5-icon type='party' name="toranosuke" />
    <p5-icon type='party' name="yusuke" />
    <p5-icon type='party' name="yuuki" />
</template>`)

const copy = (type, name) => {
    navigator.clipboard.writeText(`<p5-icon type="${type}" name="${name}" />`).then(() => {
        P5Message({ type: 'clear', duration: 2000 })
    })
}

</script>

<template>
    <p5-title content="Icon 图标" size="large"></p5-title>
    <p>女神异闻录5中的图标组件</p>
    <p5-text>点击图标可复制完整代码。</p5-text>

    <div class="title">
        <p5-title content="效果展示" size="large"></p5-title>
        <p>按钮图标</p>
        <ComponentCtn :code="code_btn">
            <div>
                <p5-icon style="cursor:pointer;" @click="copy('btn', 'back')" type='btn' name="back" />
                <p5-icon style="cursor:pointer;" @click="copy('btn', 'close')" type='btn' name="close" />
                <p5-icon style="cursor:pointer;" @click="copy('btn', 'confirm')" type='btn' name="confirm" />
                <p5-icon style="cursor:pointer;" @click="copy('btn', 'continue')" type='btn' name="continue" />
                <p5-icon style="cursor:pointer;" @click="copy('btn', 'reply')" type='btn' name="reply" />
                <p5-icon style="cursor:pointer;" @click="copy('btn', 'send')" type='btn' name="send" />
            </div>
        </ComponentCtn>

        <p>人物图标</p>
        <ComponentCtn :code="code_party">
            <div>
                <p5-icon style="cursor:pointer;" @click='copy("party", "alibaba")' type='party' name="alibaba" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "ann")' type='party' name="ann" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "akechi")' type='party' name="akechi" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "justine")' type='party' name="justine" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "caroline")' type='party' name="caroline" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "chihaya")' type='party' name="chihaya" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "futaba")' type='party' name="futaba" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "haru")' type='party' name="haru" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "hifumi")' type='party' name="hifumi" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "ichiko")' type='party' name="ichiko" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "makoto")' type='party' name="makoto" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "munehisa")' type='party' name="munehisa" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "p5")' type='party' name="p5" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "ryuji")' type='party' name="ryuji" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "sadayo")' type='party' name="sadayo" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "shinya")' type='party' name="shinya" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "sojiro")' type='party' name="sojiro" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "tae")' type='party' name="tae" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "toranosuke")' type='party' name="toranosuke" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "yusuke")' type='party' name="yusuke" />
                <p5-icon style="cursor:pointer;" @click='copy("party", "yuuki")' type='party' name="yuuki" />
            </div>
        </ComponentCtn>
    </div>
</template>

<style scoped>

</style>