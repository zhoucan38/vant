import{e as a}from"./use-translate.55dc92d8.js";import{p as o}from"./Picker.449af095.js";const d=a({},o,{filter:Function,columnsOrder:Array,formatter:{type:Function,default:(e,t)=>t}}),f=Object.keys(o);function l(e,t){if(e<0)return[];const s=Array(e);let r=-1;for(;++r<e;)s[r]=t(r);return s}function m(e){if(!e)return 0;for(;Number.isNaN(parseInt(e,10));)if(e.length>1)e=e.slice(1);else return 0;return parseInt(e,10)}const p=(e,t)=>32-new Date(e,t-1,32).getDate(),h=(e,t)=>{const s=["setValues","setIndexes","setColumnIndex","setColumnValue"];return new Proxy(e,{get:(r,n)=>s.includes(n)?(...i)=>{r[n](...i),t()}:r[n]})};export{h as a,m as b,p as g,f as p,d as s,l as t};
