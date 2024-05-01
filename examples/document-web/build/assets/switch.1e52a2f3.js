import{_ as f}from"./componentCtn.393f8439.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as c,x as g,c as V,h as e,f as s,i as m,F as z,g as _,o as x,K as I,L as S}from"./@vue.5c2d1131.js";const r=a=>(I("data-v-72901ec8"),a=a(),S(),a),y=r(()=>s("p",null,"\u5973\u795E\u5F02\u95FB\u5F555\u4E2D\u7684\u5F00\u5173\u7EC4\u4EF6",-1)),B={class:"title"},U=r(()=>s("p",null,"\u5F00\u5173\u7EC4\u4EF6\u7684\u6548\u679C\u5C55\u793A",-1)),k={class:"com_title_ctn"},C={class:"title"},F={__name:"switch",setup(a){const v=c(`<template>
    <p5-switch v-model="sw_value1" size="large"></p5-switch>
    <p5-switch v-model="sw_value2" size="medium"></p5-switch>
    <p5-switch v-model="sw_value3" size="small"></p5-switch>
</template>

<script setup>
import { ref } from 'vue'

const sw_value1 = ref(true)
const sw_value2 = ref(false)
const sw_value3 = ref(true)
<\/script>`),d=c(!0),p=c(!1),u=c(!0),w=g([{\u5C5E\u6027\u540D\u79F0:"size",\u7C7B\u578B:"String",\u5FC5\u987B:"false",\u521D\u59CB\u503C:"medium",\u63CF\u8FF0:"large/medium/small"}]);return(N,t)=>{const i=_("p5-title"),n=_("p5-switch"),o=_("p5-tableItem"),h=_("p5-table");return x(),V(z,null,[e(i,{content:"Switch \u5F00\u5173",size:"large"}),y,s("div",B,[e(i,{content:"\u6548\u679C\u5C55\u793A",size:"large"}),U,e(f,{code:v.value},{default:m(()=>[s("div",k,[e(n,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=l=>d.value=l),size:"large"},null,8,["modelValue"]),e(n,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=l=>p.value=l),size:"medium"},null,8,["modelValue"]),e(n,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=l=>u.value=l),size:"small"},null,8,["modelValue"])])]),_:1},8,["code"])]),s("div",C,[e(i,{content:"\u7EC4\u4EF6\u5C5E\u6027",size:"large"}),e(h,{table_data:w,style:{"margin-top":"20px"}},{default:m(()=>[e(o,{label:"\u5C5E\u6027\u540D\u79F0",width:"100"}),e(o,{label:"\u7C7B\u578B",width:"100"}),e(o,{label:"\u5FC5\u987B",width:"100"}),e(o,{label:"\u521D\u59CB\u503C",width:"100"})]),_:1},8,["table_data"])])],64)}}},$=b(F,[["__scopeId","data-v-72901ec8"]]);export{$ as default};
