import{ah as n,y as m,j as r,f as u,aY as t}from"./vendor.bb3b024f.js";import{e as f,q as c,ae as d}from"./index.45fbee5f.js";const y=()=>{const{handleSubmit:s,register:i}=n(),a=f(),{id:l}=m();return r("div",{children:u("form",{onSubmit:s(async o=>{const e=new FormData;e.append("url",o.url[0]),e.append("_id",l),(await a(d(e))).payload.success?t.success("edit successfully"):t.error("edit failed")}),children:[r("input",{...i("url"),type:"file",className:"text-[#000] underline text-sm text-grey-500\r file:mr-5 file:py-2 file:px-6\r file:rounded-full file:border-0\r file:text-sm file:font-medium\r file:bg-blue-50 file:text-blue-700\r hover:file:cursor-pointer hover:file:bg-amber-50\r hover:file:text-amber-700\r "}),r(c,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{y as default};
