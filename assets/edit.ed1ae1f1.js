import{k as n,u as o,j as t,d as u,p as f,c8 as m,ag as r}from"./index.d2b6b3ee.js";const p=()=>{const{handleSubmit:s,register:i}=n(),{id:a}=o();return t("div",{children:u("form",{onSubmit:s(async l=>{const e=new FormData;e.append("file",l.file[0]),e.append("_id",a),(await m(e)).data.success?r.success("edit successfully"):r.error("edit failed")}),children:[t("input",{...i("file"),type:"file",className:"text-[#000] underline text-sm text-grey-500\r file:mr-5 file:py-2 file:px-6\r file:rounded-full file:border-0\r file:text-sm file:font-medium\r file:bg-blue-50 file:text-blue-700\r hover:file:cursor-pointer hover:file:bg-amber-50\r hover:file:text-amber-700\r "}),t(f,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{p as default};
