import{s,u as l,a as c,j as t,b as m,bi as u,Q as d}from"./index.e2c873a8.js";import{u as h}from"./index.esm.8e185013.js";const x=s.div`
display: flex;
justifyContent: center;
textAlign: center; 
height: 100vh ;
`,p=s.button`
margin: 20px 0;
`,b=s.form`

`,f=s.input``,S=()=>{const n=l(),a=c(),{handleSubmit:i,register:o}=h();return t(x,{children:m(b,{onSubmit:i(r=>{const e=new FormData;e.append("xlsx",r.xlsx[0]),n(u(e)),a("/admin/users"),d.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[t("label",{className:"form-label",for:"customFile",children:"Default file input example"}),t(f,{type:"file",...o("xlsx"),className:"form-control",id:"customFile"}),t(p,{className:"btn btn-success",children:"Submit"})]})})};export{S as default};
