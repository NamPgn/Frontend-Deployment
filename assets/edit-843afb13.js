import{d as o,u as m,j as e,Q as r}from"./vendor-0710fd16.js";import{q as f,a9 as u}from"./index-b2596b2e.js";const b=()=>{const{handleSubmit:s,register:i}=o(),{id:n}=m(),l=async a=>{const t=new FormData;t.append("file",a.file[0]),t.append("_id",n),(await u(t)).data.success?r.success("edit successfully"):r.error("edit failed")};return e.jsx("div",{children:e.jsxs("form",{onSubmit:s(l),children:[e.jsx("input",{...i("file"),type:"file",className:`text-[#000] underline text-sm text-grey-500\r
            file:mr-5 file:py-2 file:px-6\r
            file:rounded-full file:border-0\r
            file:text-sm file:font-medium\r
            file:bg-blue-50 file:text-blue-700\r
            hover:file:cursor-pointer hover:file:bg-amber-50\r
            hover:file:text-amber-700\r
          `}),e.jsx(f,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{b as default};
