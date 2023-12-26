import{s,g as r,h as c,k as u,j as t,b as m,bc as h,Q as d}from"./index.bf3385a7.js";const p=s.div`
display: flex;
justifyContent: center;
textAlign: center; 
height: 100vh ;
`,x=s.button`
margin: 20px 0;
`,b=s.form`

`,f=s.input``,A=()=>{const n=r(),a=c(),{handleSubmit:o,register:i}=u();return t(p,{children:m(b,{onSubmit:o(l=>{const e=new FormData;e.append("xlsx",l.xlsx[0]),n(h(e)),a("/dashboard/users"),d.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right"})}),children:[t("label",{className:"form-label",children:"Default file input example"}),t(f,{type:"file",...i("xlsx"),className:"form-control",id:"customFile"}),t(x,{className:"btn btn-success",children:"Submit"})]})})};export{A as default};
