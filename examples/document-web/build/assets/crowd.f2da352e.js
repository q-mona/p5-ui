import{_ as f}from"./componentCtn.393f8439.js";import{L as z}from"./p5-ui.f22ef425.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as _,x as p,c as N,h as e,f as t,j as n,i as o,F as B,g as a,o as L,K as S,L as V}from"./@vue.5c2d1131.js";const w=l=>(S("data-v-dbda9b3e"),l=l(),V(),l),$=w(()=>t("p",null,"\u4EBA\u7FA4\u8FC7\u573A\u52A8\u753B\u6548\u679C\u5C55\u793A",-1)),j=w(()=>t("p",null,"canvas\u5927\u5C0F\u9ED8\u8BA4\u4E3A\u5168\u5C4F\uFF0C\u4F7F\u7528\u524D\u6CE8\u610F\u8C03\u6574~",-1)),F={class:"title"},P={class:"com_title_ctn"},E={style:{"margin-top":"20px"}},H={class:"title"},K={class:"com_title_ctn"},T={class:"title"},W={class:"title"},q={__name:"crowd",setup(l){const i=_(null),b=p({width:500,height:300,step:2}),v=_(`<template>
    <p5-crowd ref="crowd_dom1" :config="config1"></p5-crowd>
    <div style="margin-top: 20px;">
        <p5-button @click="crowd_dom1.pause()">\u6682\u505C</p5-button>
        <p5-button @click="crowd_dom1.resume()">\u7EE7\u7EED</p5-button>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const crowd_dom1 = ref(null)
const config1 = reactive({
    width: 500,
    height: 300,
    step: 2
})
<\/script>`),h=()=>{z({loop:!1,resize:!0,fixed:!0,step:3},()=>{console.log("animation end")})},g=_(`<template>
    <p5-button @click="showCrowd">\u70B9\u51FB\u5F00\u59CB</p5-button>
</template>

<script setup>
import { P5CreateCrowd } from 'p5-ui';

const showCrowd = () => {
    const crowd_func = P5CreateCrowd({ loop: false, resize: true, fixed: true, step: 3 }, ()=>{
        console.log('animation end')
    })

    // crowd_func.pause()
    // crowd_func.resume()
    // crowd_func.remove()
}
<\/script>`),x=p([{\u5C5E\u6027\u540D\u79F0:"width",\u7C7B\u578B:"Number",\u5FC5\u987B:"false",\u521D\u59CB\u503C:"window.innerWidth",\u63CF\u8FF0:"\u753B\u5E03\u5BBD\u5EA6"},{\u5C5E\u6027\u540D\u79F0:"height",\u7C7B\u578B:"Number",\u5FC5\u987B:"false",\u521D\u59CB\u503C:"window.innerHeight",\u63CF\u8FF0:"\u753B\u5E03\u9AD8\u5EA6"},{\u5C5E\u6027\u540D\u79F0:"step",\u7C7B\u578B:"Number",\u5FC5\u987B:"false",\u521D\u59CB\u503C:"2",\u63CF\u8FF0:"\u4EBA\u7269\u79FB\u52A8\u901F\u5EA6"},{\u5C5E\u6027\u540D\u79F0:"loop",\u7C7B\u578B:"Boolean",\u5FC5\u987B:"false",\u521D\u59CB\u503C:"true",\u63CF\u8FF0:"\u662F\u5426\u5FAA\u73AF\u64AD\u653E"},{\u5C5E\u6027\u540D\u79F0:"resize",\u7C7B\u578B:"Boolean",\u5FC5\u987B:"false",\u521D\u59CB\u503C:"false",\u63CF\u8FF0:"\u753B\u5E03\u5927\u5C0F\u968F\u7A97\u53E3\u53D8\u5316\uFF0C\u5168\u5C4F\u65F6\u4F7F\u7528\uFF01"}]),C=p([{\u65B9\u6CD5\u540D\u79F0:"remove",\u53C2\u6570:"-",\u8FD4\u56DE\u503C:"void",\u63CF\u8FF0:"\u79FB\u9664canvas"},{\u65B9\u6CD5\u540D\u79F0:"resume",\u53C2\u6570:"-",\u8FD4\u56DE\u503C:"void",\u63CF\u8FF0:"\u7EE7\u7EED\u52A8\u753B"},{\u65B9\u6CD5\u540D\u79F0:"pause",\u53C2\u6570:"-",\u8FD4\u56DE\u503C:"void",\u63CF\u8FF0:"\u6682\u505C\u52A8\u753B"},{\u65B9\u6CD5\u540D\u79F0:"onClose",\u53C2\u6570:"-",\u8FD4\u56DE\u503C:"void",\u63CF\u8FF0:"\u52A8\u753B\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570"}]);return(A,d)=>{const c=a("p5-title"),u=a("p5-text"),k=a("p5-crowd"),r=a("p5-button"),s=a("p5-tableItem"),m=a("p5-table");return L(),N(B,null,[e(c,{content:"Crowd \u4EBA\u7FA4\u8FC7\u573A\u52A8\u753B",size:"large"}),$,j,t("p",null,[n("\u82E5\u8BBE\u7F6E"),e(u,{style:{display:"inline"}},{default:o(()=>[n(" loop=false ")]),_:1}),n("\uFF0C\u5219canvas\u4F1A\u5728\u64AD\u653E\u5B8C\u6BD5\u65F6\u9500\u6BC1\u3002")]),t("div",F,[e(c,{content:"\u7A97\u53E3\u5316\u7684\u6548\u679C\u5C55\u793A",size:"large"}),e(f,{code:v.value},{default:o(()=>[t("div",P,[e(k,{ref_key:"crowd_dom1",ref:i,config:b},null,8,["config"]),t("div",E,[e(r,{onClick:d[0]||(d[0]=y=>i.value.pause())},{default:o(()=>[n("\u6682\u505C")]),_:1}),e(r,{onClick:d[1]||(d[1]=y=>i.value.resume())},{default:o(()=>[n("\u7EE7\u7EED")]),_:1})])])]),_:1},8,["code"])]),t("div",H,[t("p",null,[e(c,{content:"\u5168\u5C4F\u7684\u6548\u679C\u5C55\u793A",size:"large"})]),e(u,null,{default:o(()=>[n("\u6211\u4EEC\u63A8\u8350\u60A8\u4F7F\u7528js\u4EE3\u7801\u6765\u751F\u6210\u5168\u5C4F\u7684\u8FC7\u573A\u52A8\u753B")]),_:1}),e(f,{code:g.value},{default:o(()=>[t("div",K,[e(r,{onClick:h},{default:o(()=>[n("\u70B9\u51FB\u5F00\u59CB")]),_:1})])]),_:1},8,["code"])]),t("div",T,[e(c,{content:"\u7EC4\u4EF6\u7684config\u5C5E\u6027",size:"large"}),e(m,{table_data:x,style:{"margin-top":"20px"}},{default:o(()=>[e(s,{label:"\u5C5E\u6027\u540D\u79F0",width:"100"}),e(s,{label:"\u7C7B\u578B",width:"100"}),e(s,{label:"\u5FC5\u987B",width:"80"}),e(s,{label:"\u521D\u59CB\u503C",width:"200"})]),_:1},8,["table_data"])]),t("div",W,[e(c,{content:"\u7EC4\u4EF6\u65B9\u6CD5",size:"large"}),e(m,{table_data:C,style:{"margin-top":"20px"}},{default:o(()=>[e(s,{label:"\u65B9\u6CD5\u540D\u79F0",width:"150"}),e(s,{label:"\u53C2\u6570",width:"200"}),e(s,{label:"\u8FD4\u56DE\u503C",width:"100"})]),_:1},8,["table_data"])])],64)}}},O=I(q,[["__scopeId","data-v-dbda9b3e"]]);export{O as default};
