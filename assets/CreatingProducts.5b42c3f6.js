import{ah as c,j as e,f as l}from"./vendor.bb3b024f.js";import{e as n,J as d,q as i,a1 as u,k as p,l as m}from"./index.45fbee5f.js";import{M as h}from"./index.b3ac44fe.js";const S=()=>{const{handleSubmit:r,control:s}=c(),o=n();return e("div",{style:{display:"flex",justifyContent:"center",textAlign:"center",height:"100vh"},children:l("form",{onSubmit:r(async a=>{const t=new FormData;t.append("selectedSheets",a.selectedSheets),t.append("excelProduct",a.excelProduct),(await o(u(t))).payload.success==!0?p("Add product success"):m("Add product failure")}),children:[e(d,{name:"selectedSheets",label:"Index Sheet",control:s,rules:void 0}),e(h,{name:"excelProduct",label:"Add Multiple file",control:s}),e(i,{htmlType:"submit",type:"primary",children:"Create"})]})})};export{S as default};
