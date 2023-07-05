import{u as l}from"./index.esm.c7a6fc8a.js";import{s,f as c,g as m,a as t,j as u,Z as p,Q as d}from"./index.43929d27.js";const h=s.div`
display: flex;
justifyContent: center;
textAlign: center; 
height: 100vh ;
`,x=s.button`
margin: 20px 0;
`,f=s.form`

`,b=s.input``,S=()=>{const n=c(),a=m(),{handleSubmit:i,register:o}=l();return t(h,{children:u(f,{onSubmit:i(r=>{const e=new FormData;e.append("xlsx",r.xlsx[0]),n(p(e)),a("/admin/users"),d.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[t("label",{className:"form-label",children:"Default file input example"}),t(b,{type:"file",...o("xlsx"),className:"form-control",id:"customFile"}),t(x,{className:"btn btn-success",children:"Submit"})]})})};export{S as default};
