import{r as e,s as a}from"./use-translate.c063e05d.js";function p(f,{args:l=[],done:i,canceled:s}){if(f){const t=f.apply(null,l);e(t)?t.then(r=>{r?i():s&&s()}).catch(a):t?i():s&&s()}else i()}export{p as c};
