import{k as o,g as u,u as m,j as r,d,p as c,bO as f,V as s}from"./index.ba23f416.js";const x=()=>{const{handleSubmit:t,register:i}=o(),l=u(),{id:a}=m();return r("div",{children:d("form",{onSubmit:t(async n=>{const e=new FormData;e.append("url",n.url[0]),e.append("_id",a),(await l(f(e))).payload.success?s.success("edit successfully"):s.error("edit failed")}),children:[r("input",{...i("url"),type:"file",className:"text-[#000] underline text-sm text-grey-500\r file:mr-5 file:py-2 file:px-6\r file:rounded-full file:border-0\r file:text-sm file:font-medium\r file:bg-blue-50 file:text-blue-700\r hover:file:cursor-pointer hover:file:bg-amber-50\r hover:file:text-amber-700\r "}),r(c,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{x as default};