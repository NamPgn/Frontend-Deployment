import{o as u,r as d,u as b,j as e,a as t,bw as f,Q as a,bx as p}from"./index.e6e2d6f7.js";import{u as h}from"./index.esm.0902a80d.js";import{u as g}from"./useDispatch.1cdbc2b0.js";const S=()=>{const{handleSubmit:r,register:i,reset:o}=h(),{id:c}=u(),l=g();d.exports.useEffect(()=>{(async()=>{const{data:m}=await f(c);o(m)})()},[]);const n=b();return e("div",{children:t("form",{onSubmit:r(s=>{s?(a.success("edit successfully"),l(p(s)),n("/admin/trailing")):a.error("edit failed")}),children:[t("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Product name"}),e("input",{type:"text",...i("trailer"),className:"form-control"})]}),e("button",{className:"btn btn-primary",children:"Submit"})]})})};export{S as default};
