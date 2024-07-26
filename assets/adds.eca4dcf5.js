import{s as e,z as r,a9 as c,j as s,f as m,aQ as u}from"./vendor.7a0224e0.js";import{u as p,T as d}from"./index.7624cc79.js";const h=e.div`
  display: flex;
  justifycontent: center;
  textalign: center;
  height: 100vh;
`,x=e.input``,y=()=>{const a=p(),n=r(),{handleSubmit:i,register:o}=c();return s(h,{children:m("form",{onSubmit:i(l=>{const t=new FormData;t.append("xlsx",l.xlsx[0]),a(d(t)),n("/dashboard/users"),u.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[s("label",{className:"form-label",children:"Default file input example"}),s(x,{type:"file",...o("xlsx"),className:"form-control",id:"customFile"}),s("button",{className:"btn btn-success mt-3",children:"Submit"})]})})};export{y as default};
