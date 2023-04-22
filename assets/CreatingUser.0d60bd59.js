import{s,f as l,h as c,j as t,b as m,P as u,Q as h}from"./index.94ba3f66.js";import{u as d}from"./index.esm.c0d18dc7.js";const x=s.div`
display: flex;
justifyContent: center;
textAlign: center; 
height: 100vh ;
`,p=s.button`
margin: 20px 0;
`,f=s.form`

`,b=s.input``,S=()=>{const n=l(),a=c(),{handleSubmit:o,register:i}=d();return t(x,{children:m(f,{onSubmit:o(r=>{const e=new FormData;e.append("xlsx",r.xlsx[0]),n(u(e)),a("/admin/users"),h.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[t("label",{className:"form-label",for:"customFile",children:"Default file input example"}),t(b,{type:"file",...i("xlsx"),className:"form-control",id:"customFile"}),t(p,{className:"btn btn-success",children:"Submit"})]})})};export{S as default};
