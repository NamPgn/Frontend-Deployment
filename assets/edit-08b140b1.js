import{af as m,w as u,j as e,aW as t}from"./vendor-5f4444f9.js";import{e as f,q as c,ac as d}from"./index-e767e9f8.js";const h=()=>{const{handleSubmit:r,register:i}=m(),a=f(),{id:l}=u(),n=async o=>{const s=new FormData;s.append("url",o.url[0]),s.append("_id",l),(await a(d(s))).payload.success?t.success("edit successfully"):t.error("edit failed")};return e.jsx("div",{children:e.jsxs("form",{onSubmit:r(n),children:[e.jsx("input",{...i("url"),type:"file",className:`text-[#000] underline text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          `}),e.jsx(c,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{h as default};
