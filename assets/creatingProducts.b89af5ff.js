import{k as c,g as d,j as e,d as l,aH as n,p as i,bf as p,v as u,w as m}from"./index.326cfc28.js";import{M as h}from"./index.a7e93f2e.js";import"./DeleteOutlined.454bbf8e.js";import"./DownloadOutlined.3aa77366.js";const A=()=>{const{handleSubmit:a,control:s}=c(),o=d();return e("div",{style:{display:"flex",justifyContent:"center",textAlign:"center",height:"100vh"},children:l("form",{onSubmit:a(async r=>{const t=new FormData;t.append("selectedSheets",r.selectedSheets),t.append("excelProduct",r.excelProduct),(await o(p(t))).payload.success==!0?u("Add product success"):m("Add product failure")}),children:[e(n,{name:"selectedSheets",label:"Index Sheet",control:s,rules:void 0}),e(h,{name:"excelProduct",label:"Add Multiple file",control:s}),e(i,{htmlType:"submit",type:"primary",children:"Create"})]})})};export{A as default};