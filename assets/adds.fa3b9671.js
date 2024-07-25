import{s as e,U as r,ah as c,j as s,f as m,aY as u}from"./vendor.bb3b024f.js";import{e as h,a0 as p}from"./index.f648472f.js";const d=e.div`
  display: flex;
  justifycontent: center;
  textalign: center;
  height: 100vh;
`,x=e.input``,y=()=>{const a=h(),n=r(),{handleSubmit:i,register:o}=c();return s(d,{children:m("form",{onSubmit:i(l=>{const t=new FormData;t.append("xlsx",l.xlsx[0]),a(p(t)),n("/dashboard/users"),u.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[s("label",{className:"form-label",children:"Default file input example"}),s(x,{type:"file",...o("xlsx"),className:"form-control",id:"customFile"}),s("button",{className:"btn btn-success mt-3",children:"Submit"})]})})};export{y as default};
