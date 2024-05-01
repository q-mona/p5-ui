import{_ as x}from"./componentCtn.393f8439.js";import{J as r}from"./p5-ui.f22ef425.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as k,x as f,c as M,h as e,f as s,j as o,i as a,F as I,g as i,o as P,K as C,L as N}from"./@vue.5c2d1131.js";const b=n=>(C("data-v-45b3c5fe"),n=n(),N(),n),S=b(()=>s("p",null,"\u5973\u795E\u5F02\u95FB\u5F555\u4E2D\u7684\u6D88\u606F\u7EC4\u4EF6",-1)),z={class:"title"},$=b(()=>s("p",null,"\u6D88\u606F\u7EC4\u4EF6\u7684\u6548\u679C\u5C55\u793A",-1)),B={class:"com_title_ctn"},V={class:"title"},F={class:"title"},J={__name:"message",setup(n){const g=k(`<template>
    <p5-button @click="mission('default')">\u4EFB\u52A1\u5F00\u59CB</p5-button>
    <p5-button @click="mission('clear')">\u4EFB\u52A1\u6210\u529F</p5-button>
    <p5-button @click="mission('fail')">\u4EFB\u52A1\u5931\u8D25</p5-button>
</template>

<script setup>
import { P5Message } from 'p5-ui'

const mission = (msg_type) => {
    if (msg_type == 'default') {
        P5Message({})
    }
    else if (msg_type == 'clear') {
        P5Message({ type: 'clear' })
    }
    else if (msg_type == 'fail') {
        P5Message({ type: 'fail' })
    }
}
<\/script>`);f({type:{type:String,default:"default"},duration:{type:Number,default:3e3}});const _=c=>{c=="default"?r({}):c=="clear"?r({type:"clear"}):c=="fail"&&r({type:"fail"})},y=f([{\u5C5E\u6027\u540D\u79F0:"type",\u7C7B\u578B:"String",\u5FC5\u987B:"false",\u521D\u59CB\u503C:"default",\u63CF\u8FF0:"\u6D88\u606F\u7C7B\u578B\uFF1Adefault/clear/fail"},{\u5C5E\u6027\u540D\u79F0:"duration",\u7C7B\u578B:"Number",\u5FC5\u987B:"false",\u521D\u59CB\u503C:"3000",\u63CF\u8FF0:"\u663E\u793A\u65F6\u95F4\uFF0C\u5355\u4F4Dms"}]),v=f([{\u65B9\u6CD5\u540D\u79F0:"P5Message",\u53C2\u6570:"{type, duration}",\u8FD4\u56DE\u503C:"void",\u63CF\u8FF0:"\u6D88\u606F\u6846\u89E6\u53D1\u51FD\u6570"}]);return(c,l)=>{const p=i("p5-title"),h=i("p5-text"),d=i("p5-button"),t=i("p5-tableItem"),u=i("p5-table");return P(),M(I,null,[e(p,{content:"Message \u6D88\u606F",size:"large"}),S,s("div",z,[e(p,{content:"\u6548\u679C\u5C55\u793A",size:"large"}),$,s("p",null,[o("\u6CE8\u610F\uFF0C\u5728\u8C03\u7528P5Message\u65F6\uFF0C"),e(h,{style:{display:"inline"}},{default:a(()=>[o("\u53C2\u6570\u8BF7\u7528 { } \u5305\u88F9")]),_:1}),o("\uFF0C\u5373\u4F7F\u662F\u6CA1\u6709\u53C2\u6570\uFF01")]),e(x,{code:g.value},{default:a(()=>[s("div",B,[e(d,{onClick:l[0]||(l[0]=m=>_("default"))},{default:a(()=>[o("\u4EFB\u52A1\u5F00\u59CB")]),_:1}),e(d,{onClick:l[1]||(l[1]=m=>_("clear"))},{default:a(()=>[o("\u4EFB\u52A1\u6210\u529F")]),_:1}),e(d,{onClick:l[2]||(l[2]=m=>_("fail"))},{default:a(()=>[o("\u4EFB\u52A1\u5931\u8D25")]),_:1})])]),_:1},8,["code"])]),s("div",V,[e(p,{content:"\u7EC4\u4EF6\u5C5E\u6027",size:"large"}),e(u,{table_data:y,style:{"margin-top":"20px"}},{default:a(()=>[e(t,{label:"\u5C5E\u6027\u540D\u79F0",width:"150"}),e(t,{label:"\u7C7B\u578B",width:"100"}),e(t,{label:"\u5FC5\u987B",width:"100"}),e(t,{label:"\u521D\u59CB\u503C",width:"100"})]),_:1},8,["table_data"])]),s("div",F,[e(p,{content:"\u7EC4\u4EF6\u65B9\u6CD5",size:"large"}),e(u,{table_data:v,style:{"margin-top":"20px"}},{default:a(()=>[e(t,{label:"\u65B9\u6CD5\u540D\u79F0",width:"150"}),e(t,{label:"\u53C2\u6570",width:"200"}),e(t,{label:"\u8FD4\u56DE\u503C",width:"100"})]),_:1},8,["table_data"])])],64)}}},T=w(J,[["__scopeId","data-v-45b3c5fe"]]);export{T as default};
