import{c as C,t as A,a as S}from"./use-translate.55dc92d8.js";import{n as F,t as I,w as E}from"./with-install.c8955fea.js";import{H as m,f as R}from"./constant.80c6de18.js";import{u as D}from"./use-placeholder.99d4b06d.js";import{I as x}from"./index.f787d2de.js";import{z as p,D as z,e,r as N,o as P,a as y,w as c,B as r,F as L}from"./vue-libs.b1f02cae.js";import{T as g}from"./function-call.a491c68d.js";import"./use-height.33100b66.js";import"./mount-component.bb4140aa.js";import"./use-expose.07028ce8.js";import"./index.6ac6c56d.js";import"./interceptor.58bac5b6.js";import"./use-touch.491278bc.js";import"./use-lazy-render.15986b8e.js";import"./on-popup-reopen.a7f9dc8b.js";import"./index.eccc6437.js";import"./index.64be35d3.js";const[O,n]=C("nav-bar"),U={title:String,fixed:Boolean,zIndex:F,border:I,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var H=p({name:O,props:U,emits:["click-left","click-right"],setup(a,{emit:t,slots:l}){const i=z(),u=D(i,n),d=s=>t("click-left",s),o=s=>t("click-right",s),b=()=>l.left?l.left():[a.leftArrow&&e(x,{class:n("arrow"),name:"arrow-left"},null),a.leftText&&e("span",{class:n("text")},[a.leftText])],B=()=>l.right?l.right():e("span",{class:n("text")},[a.rightText]),h=()=>{const{title:s,fixed:k,border:j,zIndex:_}=a,w=A(_),v=a.leftArrow||a.leftText||l.left,T=a.rightText||l.right;return e("div",{ref:i,style:w,class:[n({fixed:k,"safe-area-inset-top":a.safeAreaInsetTop}),{[R]:j}]},[e("div",{class:n("content")},[v&&e("div",{class:[n("left"),m],onClick:d},[b()]),e("div",{class:[n("title"),"van-ellipsis"]},[l.title?l.title():s]),T&&e("div",{class:[n("right"),m],onClick:o},[B()])])])};return()=>a.fixed&&a.placeholder?u(h):h()}});const f=E(H),nt=p({setup(a){const t=S({"zh-CN":{useSlot:"\u4F7F\u7528\u63D2\u69FD",showBack:"\u8FD4\u56DE\u4E0A\u7EA7",rightButton:"\u53F3\u4FA7\u6309\u94AE"},"en-US":{useSlot:"Use Slot",showBack:"Back",rightButton:"Right Button"}}),l=()=>g(t("back")),i=()=>g(t("button"));return(u,d)=>{const o=N("demo-block");return P(),y(L,null,[e(o,{title:r(t)("basicUsage")},{default:c(()=>[e(r(f),{title:r(t)("title")},null,8,["title"])]),_:1},8,["title"]),e(o,{title:r(t)("showBack")},{default:c(()=>[e(r(f),{title:r(t)("title"),"left-text":r(t)("back"),"left-arrow":"",onClickRight:i},null,8,["title","left-text"])]),_:1},8,["title"]),e(o,{title:r(t)("rightButton")},{default:c(()=>[e(r(f),{title:r(t)("title"),"left-text":r(t)("back"),"right-text":r(t)("button"),"left-arrow":"",onClickLeft:l,onClickRight:i},null,8,["title","left-text","right-text"])]),_:1},8,["title"]),e(o,{title:r(t)("useSlot")},{default:c(()=>[e(r(f),{title:r(t)("title"),"left-text":r(t)("back"),"left-arrow":""},{right:c(()=>[e(r(x),{name:"search",size:"18"})]),_:1},8,["title","left-text"])]),_:1},8,["title"])],64)}}});export{nt as default};
