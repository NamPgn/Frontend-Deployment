import{f as n,r as m,a as e,j as t,a9 as u,Q as a,aa as d}from"./index.0fbcf04d.js";import{u as f}from"./index.esm.3fb90449.js";const x=()=>{const{handleSubmit:r,register:i,reset:l}=f(),c=n();return m.exports.useEffect(()=>{(async()=>{const{data:o}=await u();l(o)})()},[]),e("div",{children:t("form",{onSubmit:r(s=>{s?(a.success("edit successfully"),c(d(s))):a.error("edit failed")}),children:[t("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Product name"}),e("input",{type:"text",...i("url"),className:"form-control"})]}),e("button",{className:"btn btn-primary",children:"Submit"})]})})};export{x as default};