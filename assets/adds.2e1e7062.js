import{s as e,Q as r,ag as c,j as s,f as m,aX as u}from"./vendor.47cf65fa.js";import{e as p,a0 as d}from"./index.517fbead.js";const h=e.div`
  display: flex;
  justifycontent: center;
  textalign: center;
  height: 100vh;
`,x=e.input``,y=()=>{const a=p(),n=r(),{handleSubmit:i,register:o}=c();return s(h,{children:m("form",{onSubmit:i(l=>{const t=new FormData;t.append("xlsx",l.xlsx[0]),a(d(t)),n("/dashboard/users"),u.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[s("label",{className:"form-label",children:"Default file input example"}),s(x,{type:"file",...o("xlsx"),className:"form-control",id:"customFile"}),s("button",{className:"btn btn-success mt-3",children:"Submit"})]})})};export{y as default};
