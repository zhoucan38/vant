import{A as _,a,b as u}from"./index.9c8427f5.js";import{c as I,e as k,u as j,a as A}from"./use-translate.c063e05d.js";import{n as h,u as E,w as F}from"./with-install.3e872450.js";import{r as P,u as y}from"./use-route.841a0e09.js";import{B as D,I as w}from"./index.e4144f06.js";import{z as b,e as n,A as v,r as S,o as N,a as T,w as c,B as t,F as z}from"./vue-libs.84e059bd.js";import{T as B}from"./function-call.c634b611.js";import"./use-expose.147062de.js";import"./index.58421abc.js";import"./constant.80c6de18.js";import"./index.2c29c7c5.js";import"./mount-component.190e1c69.js";import"./index.9369b636.js";import"./interceptor.897e55bf.js";import"./use-touch.a752672a.js";import"./use-lazy-render.0b8d6da1.js";import"./on-popup-reopen.b9a88023.js";import"./index.392981b6.js";const[O,p]=I("action-bar-icon"),R=k({},P,{dot:Boolean,text:String,icon:String,color:String,badge:h,iconClass:E,badgeProps:Object,iconPrefix:String});var U=b({name:O,props:R,setup(r,{slots:o}){const i=y();j(_);const s=()=>{const{dot:d,badge:x,icon:l,color:f,iconClass:C,badgeProps:m,iconPrefix:g}=r;return o.icon?n(D,v({dot:d,class:p("icon"),content:x},m),{default:o.icon}):n(w,{tag:"div",dot:d,name:l,badge:x,color:f,class:[p("icon"),C],badgeProps:m,classPrefix:g},null)};return()=>n("div",{role:"button",class:p(),tabindex:0,onClick:i},[s(),o.default?o.default():r.text])}});const e=F(U);const ct=b({setup(r){const o=A({"zh-CN":{icon1:"\u5BA2\u670D",icon2:"\u8D2D\u7269\u8F66",icon3:"\u5E97\u94FA",button1:"\u52A0\u5165\u8D2D\u7269\u8F66",button2:"\u7ACB\u5373\u8D2D\u4E70",iconBadge:"\u5FBD\u6807\u63D0\u793A",collected:"\u5DF2\u6536\u85CF",clickIcon:"\u70B9\u51FB\u56FE\u6807",clickButton:"\u70B9\u51FB\u6309\u94AE",customIconColor:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",customButtonColor:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"},"en-US":{icon1:"Icon1",icon2:"Icon2",icon3:"Icon3",button1:"Button",button2:"Button",iconBadge:"Icon Badge",collected:"Collected",clickIcon:"Click Icon",clickButton:"Click Button",customIconColor:"Custom Icon Color",customButtonColor:"Custom Button Color"}}),i=()=>B(o("clickIcon")),s=()=>B(o("clickButton"));return(d,x)=>{const l=S("demo-block");return N(),T(z,null,[n(l,{title:t(o)("basicUsage")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),onClick:i},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2"),onClick:i},null,8,["text"]),n(t(e),{icon:"shop-o",text:t(o)("icon3"),onClick:i},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2"),onClick:s},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("iconBadge")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",dot:"",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",badge:"5",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"shop-o",badge:"12",text:t(o)("icon3")},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customIconColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),color:"#ee0a24"},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"star",text:t(o)("collected"),color:"#ff5000"},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customButtonColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(u),{color:"#be99ff",type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{color:"#7232dd",type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{ct as default};
