import{k as c,g as d,j as e,d as l,aW as n,p as i,bx as u,v as p,w as m}from"./index.f8c93c57.js";import{M as h}from"./index.5e364f63.js";import"./DownloadOutlined.e9231554.js";const S=()=>{const{handleSubmit:r,control:s}=c(),o=d();return e("div",{style:{display:"flex",justifyContent:"center",textAlign:"center",height:"100vh"},children:l("form",{onSubmit:r(async a=>{const t=new FormData;t.append("selectedSheets",a.selectedSheets),t.append("excelProduct",a.excelProduct),(await o(u(t))).payload.success==!0?p("Add product success"):m("Add product failure")}),children:[e(n,{name:"selectedSheets",label:"Index Sheet",control:s,rules:void 0}),e(h,{name:"excelProduct",label:"Add Multiple file",control:s}),e(i,{htmlType:"submit",type:"primary",children:"Create"})]})})};export{S as default};
