import{d as u,u as m,j as e,Q as t}from"./vendor-0710fd16.js";import{e as d,q as f,a1 as c}from"./index-b2596b2e.js";const h=()=>{const{handleSubmit:s,register:i}=u(),l=d(),{id:a}=m(),n=async o=>{const r=new FormData;r.append("url",o.url[0]),r.append("_id",a),(await l(c(r))).payload.success?t.success("edit successfully"):t.error("edit failed")};return e.jsx("div",{children:e.jsxs("form",{onSubmit:s(n),children:[e.jsx("input",{...i("url"),type:"file",className:`text-[#000] underline text-sm text-grey-500\r
            file:mr-5 file:py-2 file:px-6\r
            file:rounded-full file:border-0\r
            file:text-sm file:font-medium\r
            file:bg-blue-50 file:text-blue-700\r
            hover:file:cursor-pointer hover:file:bg-amber-50\r
            hover:file:text-amber-700\r
          `}),e.jsx(f,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{h as default};
