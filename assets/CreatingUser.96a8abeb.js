import{u as l}from"./index.esm.57a8eaf3.js";import{s,g as c,h as m,j as t,b as u,aS as h,Q as d}from"./index.599ff1bc.js";const p=s.div`
display: flex;
justifyContent: center;
textAlign: center; 
height: 100vh ;
`,x=s.button`
margin: 20px 0;
`,b=s.form`

`,f=s.input``,A=()=>{const n=c(),a=m(),{handleSubmit:o,register:i}=l();return t(p,{children:u(b,{onSubmit:o(r=>{const e=new FormData;e.append("xlsx",r.xlsx[0]),n(h(e)),a("/dashboard/users"),d.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[t("label",{className:"form-label",children:"Default file input example"}),t(f,{type:"file",...i("xlsx"),className:"form-control",id:"customFile"}),t(x,{className:"btn btn-success",children:"Submit"})]})})};export{A as default};
