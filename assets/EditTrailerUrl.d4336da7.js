import{s as e,h as d,u as b,r as f,a as p,j as s,b as a,bx as h,Q as r,by as y}from"./index.49430263.js";import{u as x}from"./index.esm.55a4d311.js";const i=e.div``,S=e.button``,g=e.input``,v=()=>{const{handleSubmit:l,register:c,reset:n}=x(),{id:o}=d(),u=b();return f.exports.useEffect(()=>{(async()=>{const{data:m}=await h(o);n(m)})()},[]),p(),s(i,{children:a("form",{onSubmit:l(t=>{t?(r.success("edit successfully"),u(y(t))):r.error("edit failed")}),children:[a(i,{className:"mb-3",children:[s("label",{className:"form-label",children:"Product name"}),s(g,{type:"text",...c("url"),className:"form-control"})]}),s(S,{className:"btn btn-primary",children:"Submit"})]})})};export{v as default};
