import{_ as y}from"./componentCtn.393f8439.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as u,x as m,c as C,h as t,f as e,j as a,i as l,F as I,g as s,o as z,K as N,L as S}from"./@vue.5c2d1131.js";const b=n=>(N("data-v-3b5aa053"),n=n(),S(),n),B=b(()=>e("p",null,"\u5973\u795E\u5F02\u95FB\u5F555\u4E2D\u7684\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6",-1)),V={class:"title"},F=b(()=>e("p",null,"\u4E0A\u4F20\u7EC4\u4EF6\u7684\u6548\u679C\u5C55\u793A",-1)),j={class:"com_title_ctn"},E={class:"title"},K={class:"title"},L={__name:"upload",setup(n){const f=u(`<template>
    <p5-upload ref="upload_dom" 
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"></p5-upload>

    <p5-button @click="handleClick">\u70B9\u51FB\u4E0A\u4F20</p5-button>
</template>

<script setup>
import { ref } from 'vue'

const upload_dom = ref(null)
const handleClick = ()=>{
    upload_dom.value.submit((res, err)=>{
        console.log(res, err)
    })
}
<\/script>`),h=m([{\u5C5E\u6027\u540D\u79F0:"size",\u7C7B\u578B:"Number",\u5FC5\u987B:"false",\u521D\u59CB\u503C:"1024",\u63CF\u8FF0:"\u9650\u5236\u56FE\u7247\u5927\u5C0F\uFF0C\u5355\u4F4Dkb"},{\u5C5E\u6027\u540D\u79F0:"action",\u7C7B\u578B:"String",\u5FC5\u987B:"false",\u521D\u59CB\u503C:"-",\u63CF\u8FF0:"\u540E\u7AEF\u63A5\u53E3\u5730\u5740"}]),v=m([{\u65B9\u6CD5\u540D\u79F0:"submit",\u53C2\u6570:"-",\u8FD4\u56DE\u503C:"(response, error)",\u63CF\u8FF0:"\u4E0A\u4F20\u56FE\u7247\u7684\u51FD\u6570"}]),_=u(null),g=()=>{_.value.submit((d,p)=>{console.log(d,p)})};return(d,p)=>{const c=s("p5-title"),i=s("p5-text"),k=s("p5-upload"),x=s("p5-button"),o=s("p5-tableItem"),r=s("p5-table");return z(),C(I,null,[t(c,{content:"Upload \u56FE\u7247\u4E0A\u4F20",size:"large"}),B,e("div",V,[t(c,{content:"\u6548\u679C\u5C55\u793A",size:"large"}),F,e("p",null,[a("\u6CE8\u610F\uFF0C\u5728\u4E0A\u4F20\u56FE\u7247\u65F6\uFF0C\u8BF7"),t(i,{style:{display:"inline"}},{default:l(()=>[a("\u624B\u52A8\u8C03\u7528")]),_:1}),a("submit\u51FD\u6570\uFF01")]),e("p",null,[a("\u672C\u7EC4\u4EF6\u4E5F\u652F\u6301"),t(i,{style:{display:"inline"}},{default:l(()=>[a("\u62D6\u62FD\u4E0A\u4F20")]),_:1}),a("~")]),t(y,{code:f.value},{default:l(()=>[e("div",j,[t(k,{ref_key:"upload_dom",ref:_,action:"https://run.mocky.io/v3/c49d5ea2-dc86-4207-aed4-4fbd731c8518"},null,512),t(x,{onClick:g},{default:l(()=>[a("\u70B9\u51FB\u4E0A\u4F20")]),_:1})])]),_:1},8,["code"])]),e("div",E,[t(c,{content:"\u7EC4\u4EF6\u5C5E\u6027",size:"large"}),t(r,{table_data:h,style:{"margin-top":"20px"}},{default:l(()=>[t(o,{label:"\u5C5E\u6027\u540D\u79F0",width:"150"}),t(o,{label:"\u7C7B\u578B",width:"100"}),t(o,{label:"\u5FC5\u987B",width:"100"}),t(o,{label:"\u521D\u59CB\u503C",width:"100"})]),_:1},8,["table_data"])]),e("div",K,[t(c,{content:"\u7EC4\u4EF6\u65B9\u6CD5",size:"large"}),t(r,{table_data:v,style:{"margin-top":"20px"}},{default:l(()=>[t(o,{label:"\u65B9\u6CD5\u540D\u79F0",width:"150"}),t(o,{label:"\u53C2\u6570",width:"100"}),t(o,{label:"\u8FD4\u56DE\u503C",width:"200"})]),_:1},8,["table_data"])])],64)}}},q=w(L,[["__scopeId","data-v-3b5aa053"]]);export{q as default};
