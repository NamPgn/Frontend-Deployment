import{u as n}from"./index.esm.c7f73300.js";import{f as u,u as m,j as t,b as f,k as c,ao as d,Q as s}from"./index.ef8dd52a.js";const v=()=>{const{handleSubmit:r,register:i,reset:p,control:b}=n(),l=u(),{id:a}=m();return t("div",{children:f("form",{onSubmit:r(async o=>{const e=new FormData;e.append("url",o.url[0]),e.append("_id",a),(await l(d(e))).payload.success?s.success("edit successfully"):s.error("edit failed")}),children:[t("input",{...i("url"),type:"file",className:"text-[#000] underline text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 "}),t(c,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{v as default};
