import{f as c,r as l,j as r,b as u,B as m,aa as d,Q as e,ab as p}from"./index.b286332e.js";import{u as f}from"./index.esm.6eefa7db.js";import{r as b}from"./index.8df5f78c.js";const S=()=>{const{handleSubmit:s,register:h,reset:a,control:i}=f(),o=c();return l.exports.useEffect(()=>{(async()=>{const{data:n}=await d();a(n)})()},[]),r("div",{children:u("form",{onSubmit:s(t=>{t?(e.success("edit successfully"),o(p(t))):e.error("edit failed")}),children:[b("url","Trailer",i,{required:!0}),r(m,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{S as default};