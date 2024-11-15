import{ae as m,w as u,j as e,as as s}from"./vendor-c6feb40d.js";import{a as f,c,af as d}from"./index-3a949f9b.js";const h=()=>{const{handleSubmit:t,register:i}=m(),a=f(),{id:l}=u(),n=async o=>{const r=new FormData;r.append("url",o.url[0]),r.append("_id",l),(await a(d(r))).payload.success?s.success("edit successfully"):s.error("edit failed")};return e.jsx("div",{children:e.jsxs("form",{onSubmit:t(n),children:[e.jsx("input",{...i("url"),type:"file",className:`text-[#000] underline text-sm text-grey-500\r
            file:mr-5 file:py-2 file:px-6\r
            file:rounded-full file:border-0\r
            file:text-sm file:font-medium\r
            file:bg-blue-50 file:text-blue-700\r
            hover:file:cursor-pointer hover:file:bg-amber-50\r
            hover:file:text-amber-700\r
          `}),e.jsx(c,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{h as default};
