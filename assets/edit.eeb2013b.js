import{ah as n,y as m,j as t,f as u,aY as s}from"./vendor.66f3a2e0.js";import{e as f,q as c,ae as d}from"./index.90e70e68.js";const y=()=>{const{handleSubmit:r,register:i}=n(),a=f(),{id:l}=m();return t("div",{children:u("form",{onSubmit:r(async o=>{const e=new FormData;e.append("url",o.url[0]),e.append("_id",l),(await a(d(e))).payload.success?s.success("edit successfully"):s.error("edit failed")}),children:[t("input",{...i("url"),type:"file",className:"text-[#000] underline text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 "}),t(c,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{y as default};
