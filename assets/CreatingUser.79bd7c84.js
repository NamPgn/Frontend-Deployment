import{u as l}from"./index.esm.ecbe331c.js";import{s,u as c,a as m,j as t,b as u,D as p,Q as d}from"./index.ae49c545.js";const h=s.div`
display: flex;
justifyContent: center;
textAlign: center; 
height: 100vh ;
`,x=s.button`
margin: 20px 0;
`,b=s.form`

`,f=s.input``,D=()=>{const n=c(),a=m(),{handleSubmit:i,register:o}=l();return t(h,{children:u(b,{onSubmit:i(r=>{const e=new FormData;e.append("xlsx",r.xlsx[0]),n(p(e)),a("/admin/users"),d.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[t("label",{className:"form-label",children:"Default file input example"}),t(f,{type:"file",...o("xlsx"),className:"form-control",id:"customFile"}),t(x,{className:"btn btn-success",children:"Submit"})]})})};export{D as default};