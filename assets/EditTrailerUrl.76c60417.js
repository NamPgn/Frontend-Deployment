import{p as m,u,r as d,a as b,j as s,b as t,bB as f,Q as a,bC as p}from"./index.11560ad9.js";import{u as h}from"./index.esm.20171fa0.js";const y=()=>{const{handleSubmit:r,register:i,reset:c}=h(),{id:l}=m(),o=u();return d.exports.useEffect(()=>{(async()=>{const{data:n}=await f(l);c(n)})()},[]),b(),s("div",{children:t("form",{onSubmit:r(e=>{e?(a.success("edit successfully"),o(p(e))):a.error("edit failed")}),children:[t("div",{className:"mb-3",children:[s("label",{className:"form-label",children:"Product name"}),s("input",{type:"text",...i("url"),className:"form-control"})]}),s("button",{className:"btn btn-primary",children:"Submit"})]})})};export{y as default};