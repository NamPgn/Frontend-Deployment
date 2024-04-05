import{s as e,g as r,h as c,k as m,j as s,d as u,be as d,V as h}from"./index.326cfc28.js";const p=e.div`
  display: flex;
  justifycontent: center;
  textalign: center;
  height: 100vh;
`,x=e.input``,g=()=>{const a=r(),n=c(),{handleSubmit:i,register:o}=m();return s(p,{children:u("form",{onSubmit:i(l=>{const t=new FormData;t.append("xlsx",l.xlsx[0]),a(d(t)),n("/dashboard/users"),h.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[s("label",{className:"form-label",children:"Default file input example"}),s(x,{type:"file",...o("xlsx"),className:"form-control",id:"customFile"}),s("button",{className:"btn btn-success mt-3",children:"Submit"})]})})};export{g as default};
