import{c as S,b as j,l as V}from"./use-translate.c063e05d.js";import{n as y,t as h,m as A,w as T}from"./with-install.3e872450.js";import{F as x}from"./constant.80c6de18.js";import{u as C}from"./use-expose.147062de.js";import{z as M,e as N}from"./vue-libs.84e059bd.js";const[k,I]=S("form"),O={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:y,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:h,validateTrigger:A("onBlur"),showErrorMessage:h,errorMessageAlign:String};var _=M({name:k,props:O,emits:["submit","failed"],setup(i,{emit:c,slots:l}){const{children:r,linkChildren:p}=j(x),a=e=>e?r.filter(t=>e.includes(t.name)):r,g=e=>new Promise((t,n)=>{const o=[];a(e).reduce((B,E)=>B.then(()=>{if(!o.length)return E.validate().then(f=>{f&&o.push(f)})}),Promise.resolve()).then(()=>{o.length?n(o):t()})}),v=e=>new Promise((t,n)=>{const o=a(e);Promise.all(o.map(s=>s.validate())).then(s=>{s=s.filter(Boolean),s.length?n(s):t()})}),b=e=>{const t=r.find(n=>n.name===e);return t?new Promise((n,o)=>{t.validate().then(s=>{s?o(s):n()})}):Promise.reject()},d=e=>typeof e=="string"?b(e):i.validateFirst?g(e):v(e),F=e=>{typeof e=="string"&&(e=[e]),a(e).forEach(n=>{n.resetValidation()})},u=(e,t)=>{r.some(n=>n.name===e?(n.$el.scrollIntoView(t),!0):!1)},P=()=>r.reduce((e,t)=>(e[t.name]=t.formValue.value,e),{}),m=()=>{const e=P();d().then(()=>c("submit",e)).catch(t=>{c("failed",{values:e,errors:t}),i.scrollToError&&t[0].name&&u(t[0].name)})},w=e=>{V(e),m()};return p({props:i}),C({submit:m,validate:d,scrollToField:u,resetValidation:F}),()=>{var e;return N("form",{class:I(),onSubmit:w},[(e=l.default)==null?void 0:e.call(l)])}}});const W=T(_);export{W as F};
