import{u as l}from"./index.esm.e1ec7421.js";import{s,e as c,f as m,j as t,b as u,aN as d,Q as h}from"./index.25c2f60c.js";const p=s.div`
display: flex;
justifyContent: center;
textAlign: center; 
height: 100vh ;
`,x=s.button`
margin: 20px 0;
`,b=s.form`

`,f=s.input``,S=()=>{const n=c(),a=m(),{handleSubmit:o,register:i}=l();return t(p,{children:u(b,{onSubmit:o(r=>{const e=new FormData;e.append("xlsx",r.xlsx[0]),n(d(e)),a("/dashboard/users"),h.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[t("label",{className:"form-label",children:"Default file input example"}),t(f,{type:"file",...i("xlsx"),className:"form-control",id:"customFile"}),t(x,{className:"btn btn-success",children:"Submit"})]})})};export{S as default};
