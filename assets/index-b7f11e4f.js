import{r as n,j as s,ab as c,b4 as d,b5 as x}from"./vendor-c6feb40d.js";import{ac as j,c as m}from"./index-3a949f9b.js";const b=n.memo(({label:r,name:e,control:l,...p})=>s.jsxs("div",{className:"mt-2",children:[s.jsx("div",{children:s.jsx(j,{htmlFor:e,children:r+": "})}),s.jsx(c,{control:l,name:e,render:({field:a})=>s.jsx(d,{name:e,beforeUpload:()=>!1,onChange:i=>{var o;const t=i.fileList.slice(-1);a.onChange((o=t[0])==null?void 0:o.originFileObj)},children:s.jsx(m,{icon:s.jsx(x,{}),className:"my-2",children:"Click to Upload"})})})]}));export{b as M};