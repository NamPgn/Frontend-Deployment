import{s,u as l,a as c,j as t,b as m,S as u,Q as d}from"./index.d2fd6520.js";import{u as h}from"./index.esm.0565efef.js";const x=s.div`
display: flex;
justifyContent: center;
textAlign: center; 
height: 100vh ;
`,p=s.button`
margin: 20px 0;
`,f=s.form`

`,b=s.input``,F=()=>{const n=l(),a=c(),{handleSubmit:o,register:i}=h();return t(x,{children:m(f,{onSubmit:o(r=>{const e=new FormData;e.append("xlsx",r.xlsx[0]),n(u(e)),a("/admin/users"),d.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[t("label",{className:"form-label",for:"customFile",children:"Default file input example"}),t(b,{type:"file",...i("xlsx"),className:"form-control",id:"customFile"}),t(p,{className:"btn btn-success",children:"Submit"})]})})};export{F as default};
