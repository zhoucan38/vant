import{c as q,u as de,f as G,l as Q,D as U,e as W,b as he,E as ge}from"./use-translate.55dc92d8.js";import{d as p,u as ve,a as be,n as X,b as Z,c as K,m as xe,t as Ce}from"./with-install.c8955fea.js";import{H as ee,a as Te}from"./constant.80c6de18.js";import{u as te}from"./use-expose.07028ce8.js";import{L as ye}from"./index.64be35d3.js";import{d as ne}from"./deep-clone.9a196a54.js";import{u as Ie}from"./use-touch.491278bc.js";import{z as oe,D as Y,H as we,x as F,e as r,C as ae}from"./vue-libs.b1f02cae.js";const se=200,le=300,Oe=15,[ie,z]=q("picker-column");function ke(t){const{transform:b}=window.getComputedStyle(t),i=b.slice(7,b.length-1).split(", ")[5];return Number(i)}const ce=Symbol(ie),J=t=>G(t)&&t.disabled;var He=oe({name:ie,props:{textKey:p(String),readonly:Boolean,allowHtml:Boolean,className:ve,itemHeight:p(Number),defaultIndex:be(0),swipeDuration:p(X),initialOptions:Z(),visibleItemCount:p(X)},emits:["change"],setup(t,{emit:b,slots:i}){let d,h,O,g,c;const T=Y(),a=we({index:t.defaultIndex,offset:0,duration:0,options:ne(t.initialOptions)}),x=Ie(),m=()=>a.options.length,P=()=>t.itemHeight*(+t.visibleItemCount-1)/2,_=o=>{o=U(o,0,m());for(let s=o;s<m();s++)if(!J(a.options[s]))return s;for(let s=o-1;s>=0;s--)if(!J(a.options[s]))return s},f=(o,s)=>{o=_(o)||0;const u=-o*t.itemHeight,v=()=>{o!==a.index&&(a.index=o,s&&b("change",o))};d&&u!==a.offset?c=v:v(),a.offset=u},N=o=>{JSON.stringify(o)!==JSON.stringify(a.options)&&(a.options=ne(o),f(t.defaultIndex))},S=o=>{d||t.readonly||(c=null,a.duration=se,f(o,!0))},y=o=>G(o)&&t.textKey in o?o[t.textKey]:o,k=o=>U(Math.round(-o/t.itemHeight),0,m()-1),D=(o,s)=>{const u=Math.abs(o/s);o=a.offset+u/.003*(o<0?-1:1);const v=k(o);a.duration=+t.swipeDuration,f(v,!0)},H=()=>{d=!1,a.duration=0,c&&(c(),c=null)},E=o=>{if(!t.readonly){if(x.start(o),d){const s=ke(T.value);a.offset=Math.min(0,s-P()),h=a.offset}else h=a.offset;a.duration=0,O=Date.now(),g=h,c=null}},$=o=>{if(t.readonly)return;x.move(o),x.isVertical()&&(d=!0,Q(o,!0)),a.offset=U(h+x.deltaY.value,-(m()*t.itemHeight),t.itemHeight);const s=Date.now();s-O>le&&(O=s,g=a.offset)},M=()=>{if(t.readonly)return;const o=a.offset-g,s=Date.now()-O;if(s<le&&Math.abs(o)>Oe){D(o,s);return}const v=k(a.offset);a.duration=se,f(v,!0),setTimeout(()=>{d=!1},0)},A=()=>{const o={height:`${t.itemHeight}px`};return a.options.map((s,u)=>{const v=y(s),B=J(s),R={role:"button",style:o,tabindex:B?-1:0,class:z("item",{disabled:B,selected:u===a.index}),onClick:()=>S(u)},V={class:"van-ellipsis",[t.allowHtml?"innerHTML":"textContent"]:v};return r("li",R,[i.option?i.option(s):r("div",V,null)])})},L=o=>{const{options:s}=a;for(let u=0;u<s.length;u++)if(y(s[u])===o)return f(u)},j=()=>a.options[a.index];return f(a.index),de(ce),te({state:a,setIndex:f,getValue:j,setValue:L,setOptions:N,stopMomentum:H}),F(()=>t.initialOptions,N),F(()=>t.defaultIndex,o=>f(o)),()=>r("div",{class:[z(),t.className],onTouchstart:E,onTouchmove:$,onTouchend:M,onTouchcancel:M},[r("ul",{ref:T,style:{transform:`translate3d(0, ${a.offset+P()}px, 0)`,transitionDuration:`${a.duration}ms`,transitionProperty:a.duration?"all":"none"},class:z("wrapper"),onTransitionend:H},[A()])])}});const[Me,C,ue]=q("picker"),Ne={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,itemHeight:K(44),showToolbar:Ce,swipeDuration:K(1e3),visibleItemCount:K(6),cancelButtonText:String,confirmButtonText:String},Se=W({},Ne,{columns:Z(),valueKey:String,defaultIndex:K(0),toolbarPosition:xe("top"),columnsFieldNames:Object});var _e=oe({name:Me,props:Se,emits:["confirm","cancel","change"],setup(t,{emit:b,slots:i}){const d=Y(!1),h=Y([]),{text:O,values:g,children:c}=W({text:t.valueKey||"text",values:"values",children:"children"},t.columnsFieldNames),{children:T,linkChildren:a}=he(ce);a();const x=ae(()=>ge(t.itemHeight)),m=ae(()=>{const e=t.columns[0];if(typeof e=="object"){if(c in e)return"cascade";if(g in e)return"object"}return"plain"}),P=()=>{var l;const e=[];let n={[c]:t.columns};for(;n&&n[c];){const I=n[c];let w=(l=n.defaultIndex)!=null?l:+t.defaultIndex;for(;I[w]&&I[w].disabled;)if(w<I.length-1)w++;else{w=0;break}e.push({[g]:n[c],className:n.className,defaultIndex:w}),n=I[w]}h.value=e},_=()=>{const{columns:e}=t;m.value==="plain"?h.value=[{[g]:e}]:m.value==="cascade"?P():h.value=e,d.value=h.value.some(n=>n[g]&&n[g].length!==0)},f=()=>T.map(e=>e.state.index),N=(e,n)=>{const l=T[e];l&&(l.setOptions(n),d.value=!0)},S=e=>{let n={[c]:t.columns};const l=f();for(let I=0;I<=e;I++)n=n[c][l[I]];for(;n&&n[c];)e++,N(e,n[c]),n=n[c][n.defaultIndex||0]},y=e=>T[e],k=e=>{const n=y(e);if(n)return n.getValue()},D=(e,n)=>{const l=y(e);l&&(l.setValue(n),m.value==="cascade"&&S(e))},H=e=>{const n=y(e);if(n)return n.state.index},E=(e,n)=>{const l=y(e);l&&(l.setIndex(n),m.value==="cascade"&&S(e))},$=e=>{const n=y(e);if(n)return n.state.options},M=()=>T.map(e=>e.getValue()),A=e=>{e.forEach((n,l)=>{D(l,n)})},L=e=>{e.forEach((n,l)=>{E(l,n)})},j=e=>{m.value==="plain"?b(e,k(0),H(0)):b(e,M(),f())},o=e=>{m.value==="cascade"&&S(e),m.value==="plain"?b("change",k(0),H(0)):b("change",M(),e)},s=()=>{T.forEach(e=>e.stopMomentum()),j("confirm")},u=()=>j("cancel"),v=()=>{if(i.title)return i.title();if(t.title)return r("div",{class:[C("title"),"van-ellipsis"]},[t.title])},B=()=>{const e=t.cancelButtonText||ue("cancel");return r("button",{type:"button",class:[C("cancel"),ee],onClick:u},[i.cancel?i.cancel():e])},R=()=>{const e=t.confirmButtonText||ue("confirm");return r("button",{type:"button",class:[C("confirm"),ee],onClick:s},[i.confirm?i.confirm():e])},V=()=>{if(t.showToolbar){const e=i.toolbar||i.default;return r("div",{class:C("toolbar")},[e?e():[B(),v(),R()]])}},re=()=>h.value.map((e,n)=>{var l;return r(He,{textKey:O,readonly:t.readonly,allowHtml:t.allowHtml,className:e.className,itemHeight:x.value,defaultIndex:(l=e.defaultIndex)!=null?l:+t.defaultIndex,swipeDuration:t.swipeDuration,initialOptions:e[g],visibleItemCount:t.visibleItemCount,onChange:()=>o(n)},{option:i.option})}),me=e=>{if(d.value){const n={height:`${x.value}px`},l={backgroundSize:`100% ${(e-x.value)/2}px`};return[r("div",{class:C("mask"),style:l},null),r("div",{class:[Te,C("frame")],style:n},null)]}},fe=()=>{const e=x.value*+t.visibleItemCount,n={height:`${e}px`};return r("div",{class:C("columns"),style:n,onTouchmove:Q},[re(),me(e)])};return F(()=>t.columns,_,{immediate:!0}),te({confirm:s,getValues:M,setValues:A,getIndexes:f,setIndexes:L,getColumnIndex:H,setColumnIndex:E,getColumnValue:k,setColumnValue:D,getColumnValues:$,setColumnValues:N}),()=>{var e,n;return r("div",{class:C()},[t.toolbarPosition==="top"?V():null,t.loading?r(ye,{class:C("loading")},null):null,(e=i["columns-top"])==null?void 0:e.call(i),fe(),(n=i["columns-bottom"])==null?void 0:n.call(i),t.toolbarPosition==="bottom"?V():null])}}});export{_e as _,Ne as p};
