import{ae as o,w as m,j as e,aW as r}from"./vendor-4beb22e1.js";import{c as f,at as u}from"./index-58b46ce3.js";const b=()=>{const{handleSubmit:s,register:i}=o(),{id:n}=m(),a=async l=>{const t=new FormData;t.append("file",l.file[0]),t.append("_id",n),(await u(t)).data.success?r.success("edit successfully"):r.error("edit failed")};return e.jsx("div",{children:e.jsxs("form",{onSubmit:s(a),children:[e.jsx("input",{...i("file"),type:"file",className:`text-[#000] underline text-sm text-grey-500\r
            file:mr-5 file:py-2 file:px-6\r
            file:rounded-full file:border-0\r
            file:text-sm file:font-medium\r
            file:bg-blue-50 file:text-blue-700\r
            hover:file:cursor-pointer hover:file:bg-amber-50\r
            hover:file:text-amber-700\r
          `}),e.jsx(f,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{b as default};
