import{s as e,u as d,e as b,r as f,f as p,j as s,b as a,ax as y,Q as r,ay as h}from"./index.fab02c97.js";import{u as x}from"./index.esm.f5e2cb30.js";const i=e.div``,S=e.button``,g=e.input``,v=()=>{const{handleSubmit:l,register:c,reset:n}=x(),{id:o}=d(),u=b();return f.exports.useEffect(()=>{(async()=>{const{data:m}=await y(o);n(m)})()},[]),p(),s(i,{children:a("form",{onSubmit:l(t=>{t?(r.success("edit successfully"),u(h(t))):r.error("edit failed")}),children:[a(i,{className:"mb-3",children:[s("label",{className:"form-label",children:"Product name"}),s(g,{type:"text",...c("url"),className:"form-control"})]}),s(S,{className:"btn btn-primary",children:"Submit"})]})})};export{v as default};
