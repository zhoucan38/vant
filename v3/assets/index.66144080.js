import{c as F,e as N,p as E,V as f,D as K,I as S}from"./use-translate.55dc92d8.js";import{c as I,m as te,w as ae}from"./with-install.c8955fea.js";import{u as q}from"./use-expose.07028ce8.js";import{s as J,t as L,p as Q,a as R,g as U,b as ne}from"./utils.dae7cbe3.js";import{P as W}from"./index.fee8ba2e.js";import{z,D as b,C,N as X,q as g,x as h,e as B,A as Z}from"./vue-libs.b1f02cae.js";const[ue]=F("time-picker");var _=z({name:ue,props:N({},J,{minHour:I(0),maxHour:I(23),minMinute:I(0),maxMinute:I(59),modelValue:String}),emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:c,slots:$}){const d=u=>{const{minHour:e,maxHour:a,maxMinute:n,minMinute:r}=t;u||(u=`${f(e)}:${f(r)}`);let[m,s]=u.split(":");return m=f(K(+m,+e,+a)),s=f(K(+s,+r,+n)),`${m}:${s}`},i=b(),o=b(d(t.modelValue)),M=C(()=>[{type:"hour",range:[+t.minHour,+t.maxHour]},{type:"minute",range:[+t.minMinute,+t.maxMinute]}]),w=C(()=>M.value.map(({type:u,range:e})=>{let a=L(e[1]-e[0]+1,n=>f(e[0]+n));return t.filter&&(a=t.filter(u,a)),{type:u,values:a}})),x=C(()=>w.value.map(u=>({values:u.values.map(e=>t.formatter(u.type,e))}))),k=()=>{const u=o.value.split(":"),e=[t.formatter("hour",u[0]),t.formatter("minute",u[1])];g(()=>{var a;(a=i.value)==null||a.setValues(e)})},D=()=>{const[u,e]=i.value.getIndexes(),[a,n]=w.value,r=a.values[u]||a.values[0],m=n.values[e]||n.values[0];o.value=d(`${r}:${m}`),k()},V=()=>c("confirm",o.value),O=()=>c("cancel"),j=()=>{D(),g(()=>{g(()=>c("change",o.value))})};return X(()=>{k(),g(D)}),h(x,k),h(()=>[t.filter,t.maxHour,t.minMinute,t.maxMinute],D),h(()=>t.minHour,()=>{g(D)}),h(o,u=>c("update:modelValue",u)),h(()=>t.modelValue,u=>{u=d(u),u!==o.value&&(o.value=u,k())}),q({getPicker:()=>i.value&&R(i.value,D)}),()=>B(W,Z({ref:i,columns:x.value,onChange:j,onCancel:O,onConfirm:V},E(t,Q)),$)}});const A=new Date().getFullYear(),[oe]=F("date-picker");var G=z({name:oe,props:N({},J,{type:te("datetime"),modelValue:Date,minDate:{type:Date,default:()=>new Date(A-10,0,1),validator:S},maxDate:{type:Date,default:()=>new Date(A+10,11,31),validator:S}}),emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:c,slots:$}){const d=e=>{if(S(e)){const a=K(e.getTime(),t.minDate.getTime(),t.maxDate.getTime());return new Date(a)}},i=b(),o=b(d(t.modelValue)),M=(e,a)=>{const n=t[`${e}Date`],r=n.getFullYear();let m=1,s=1,v=0,y=0;return e==="max"&&(m=12,s=U(a.getFullYear(),a.getMonth()+1),v=23,y=59),a.getFullYear()===r&&(m=n.getMonth()+1,a.getMonth()+1===m&&(s=n.getDate(),a.getDate()===s&&(v=n.getHours(),a.getHours()===v&&(y=n.getMinutes())))),{[`${e}Year`]:r,[`${e}Month`]:m,[`${e}Date`]:s,[`${e}Hour`]:v,[`${e}Minute`]:y}},w=C(()=>{const{maxYear:e,maxDate:a,maxMonth:n,maxHour:r,maxMinute:m}=M("max",o.value||t.minDate),{minYear:s,minDate:v,minMonth:y,minHour:Y,minMinute:p}=M("min",o.value||t.minDate);let l=[{type:"year",range:[s,e]},{type:"month",range:[y,n]},{type:"day",range:[v,a]},{type:"hour",range:[Y,r]},{type:"minute",range:[p,m]}];switch(t.type){case"date":l=l.slice(0,3);break;case"year-month":l=l.slice(0,2);break;case"month-day":l=l.slice(1,3);break;case"datehour":l=l.slice(0,4);break}if(t.columnsOrder){const P=t.columnsOrder.concat(l.map(H=>H.type));l.sort((H,T)=>P.indexOf(H.type)-P.indexOf(T.type))}return l}),x=C(()=>w.value.map(({type:e,range:a})=>{let n=L(a[1]-a[0]+1,r=>f(a[0]+r));return t.filter&&(n=t.filter(e,n)),{type:e,values:n}})),k=C(()=>x.value.map(e=>({values:e.values.map(a=>t.formatter(e.type,a))}))),D=()=>{const e=o.value||t.minDate,{formatter:a}=t,n=x.value.map(r=>{switch(r.type){case"year":return a("year",`${e.getFullYear()}`);case"month":return a("month",f(e.getMonth()+1));case"day":return a("day",f(e.getDate()));case"hour":return a("hour",f(e.getHours()));case"minute":return a("minute",f(e.getMinutes()));default:return""}});g(()=>{var r;(r=i.value)==null||r.setValues(n)})},V=()=>{const{type:e}=t,a=i.value.getIndexes(),n=l=>{let P=0;x.value.forEach((T,ee)=>{l===T.type&&(P=ee)});const{values:H}=x.value[P];return ne(H[a[P]])};let r,m,s;e==="month-day"?(r=(o.value||t.minDate).getFullYear(),m=n("month"),s=n("day")):(r=n("year"),m=n("month"),s=e==="year-month"?1:n("day"));const v=U(r,m);s=s>v?v:s;let y=0,Y=0;e==="datehour"&&(y=n("hour")),e==="datetime"&&(y=n("hour"),Y=n("minute"));const p=new Date(r,m-1,s,y,Y);o.value=d(p)},O=()=>{c("update:modelValue",o.value),c("confirm",o.value)},j=()=>c("cancel"),u=()=>{V(),g(()=>{g(()=>c("change",o.value))})};return X(()=>{D(),g(V)}),h(k,D),h(o,(e,a)=>c("update:modelValue",a?e:null)),h(()=>[t.filter,t.maxDate],V),h(()=>t.minDate,()=>{g(V)}),h(()=>t.modelValue,e=>{var a;e=d(e),e&&e.valueOf()!==((a=o.value)==null?void 0:a.valueOf())&&(o.value=e)}),q({getPicker:()=>i.value&&R(i.value,V)}),()=>B(W,Z({ref:i,columns:k.value,onChange:u,onCancel:j,onConfirm:O},E(t,Q)),$)}});const[re,ie]=F("datetime-picker"),me=Object.keys(_.props),se=Object.keys(G.props),le=N({},_.props,G.props,{modelValue:[String,Date]});var ce=z({name:re,props:le,setup(t,{attrs:c,slots:$}){const d=b();return q({getPicker:()=>{var i;return(i=d.value)==null?void 0:i.getPicker()}}),()=>{const i=t.type==="time",o=i?_:G,M=E(t,i?me:se);return B(o,Z({ref:d,class:ie()},M,c),$)}}});const De=ae(ce);export{De as D};
