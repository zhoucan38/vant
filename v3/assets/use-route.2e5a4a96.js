import{P as n}from"./vue-libs.b1f02cae.js";const c={to:[String,Object],url:String,replace:Boolean};function s({to:e,url:o,replace:t,$router:r}){e&&r?r[t?"replace":"push"](e):o&&(t?location.replace(o):location.href=o)}function i(){const e=n().proxy;return()=>s(e)}export{s as a,c as r,i as u};
