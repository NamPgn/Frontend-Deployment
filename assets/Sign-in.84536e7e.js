import{u,a as c,c as l,j as e,b as m,L as p,Q as r,d}from"./index.c8717817.js";import{u as h}from"./index.esm.80f29fd9.js";const f=s=>s.user.error,x=()=>{const{register:s,handleSubmit:a}=h(),t=u(),n=c(),i=l(f);return e("div",{className:"mb-5",children:e("form",{className:"container formContainer",onSubmit:a(o=>{i===!0?r.error("Login failure"):(t(d(o)),r.success("Login Success"),n("/"))}),children:m("div",{children:[e("div",{className:"inputGroup",children:e("input",{type:"text",className:"input",...s("username"),required:"",placeholder:"Email",autoComplete:"off"})}),e("div",{className:"inputGroup",children:e("input",{type:"password",className:"input",...s("password"),placeholder:"Pass",required:"",autoComplete:"off"})}),e("button",{className:"btn btn-primary",children:"\u0110\u0103ng nh\u1EADp"}),e(p,{to:"/auth/signup",style:{margin:"0px 10px",color:"#0d6efd"},children:" \u0110\u0103ng k\xED "})]})})})};export{x as default};
