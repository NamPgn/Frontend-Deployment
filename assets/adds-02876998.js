import{s as e,O as c,af as m,j as s,aV as u}from"./vendor-6b39dd86.js";import{e as p,$ as x}from"./index-c811195b.js";const d=e.div`
  display: flex;
  justifycontent: center;
  textalign: center;
  height: 100vh;
`,h=e.input``,g=()=>{const a=p(),n=c(),{handleSubmit:i,register:o}=m(),r=l=>{const t=new FormData;t.append("xlsx",l.xlsx[0]),a(x(t)),n("/dashboard/users"),u.success("Thêm user thành công",{position:"bottom-right"})};return s.jsx(d,{children:s.jsxs("form",{onSubmit:i(r),children:[s.jsx("label",{className:"form-label",children:"Default file input example"}),s.jsx(h,{type:"file",...o("xlsx"),className:"form-control",id:"customFile"}),s.jsx("button",{className:"btn btn-success mt-3",children:"Submit"})]})})};export{g as default};
