import{u as l}from"./index.esm.dae98321.js";import{s,ab as c,ac as m,j as t,b as u,aH as p,an as d}from"./index.f3163f5b.js";const h=s.div`
display: flex;
justifyContent: center;
textAlign: center; 
height: 100vh ;
`,x=s.button`
margin: 20px 0;
`,b=s.form`

`,f=s.input``,S=()=>{const a=c(),n=m(),{handleSubmit:i,register:o}=l();return t(h,{children:u(b,{onSubmit:i(r=>{const e=new FormData;e.append("xlsx",r.xlsx[0]),a(p(e)),n("/admin/users"),d.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[t("label",{className:"form-label",children:"Default file input example"}),t(f,{type:"file",...o("xlsx"),className:"form-control",id:"customFile"}),t(x,{className:"btn btn-success",children:"Submit"})]})})};export{S as default};
