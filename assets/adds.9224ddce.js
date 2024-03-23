import{s,g as r,h as c,k as u,j as t,d as m,bc as d,Q as h}from"./index.938e011a.js";const p=s.div`
display: flex;
justifyContent: center;
textAlign: center; 
height: 100vh ;
`,x=s.button`
margin: 20px 0;
`,b=s.form`

`,f=s.input``,A=()=>{const n=r(),a=c(),{handleSubmit:o,register:i}=u();return t(p,{children:m(b,{onSubmit:o(l=>{const e=new FormData;e.append("xlsx",l.xlsx[0]),n(d(e)),a("/dashboard/users"),h.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[t("label",{className:"form-label",children:"Default file input example"}),t(f,{type:"file",...i("xlsx"),className:"form-control",id:"customFile"}),t(x,{className:"btn btn-success",children:"Submit"})]})})};export{A as default};
