import{u as d,a as p,c as h,j as e,b as t,L as f,Q as n,d as g}from"./index.5874b747.js";import{u as b}from"./index.esm.6a90453c.js";import{c as v,a as i,o as x}from"./yup.module.a5e2e2d1.js";const N=r=>r.user.error,E=()=>{const r=v().shape({username:i().required().test("is-email","Username must not contain @",a=>!a.includes("@")).max(10,"Your Name value must be at most 10 characters long").matches(/^[A-Za-z]+$/),password:i().required().max(10,"Password value must be at most 10 characters long")}).required(),{register:o,handleSubmit:u,formState:{errors:s}}=b({resolver:x(r)}),c=d(),m=p(),l=h(N);return e("div",{className:"mb-5",children:e("form",{className:"container formContainer",onSubmit:u(a=>{l==!1?(n.success("Login Success",c(g(a))),m("/")):n.error("Login failure")}),children:t("div",{children:[t("div",{className:"inputGroup des",children:[e("input",{type:"text",className:"input",...o("username"),required:"",placeholder:"Username",autoComplete:"off"}),s.username&&e("p",{children:s.username.message})]}),t("div",{className:"inputGroup des",children:[e("input",{type:"password",className:"input",...o("password"),placeholder:"Pass",required:"",autoComplete:"off"}),s.password&&e("p",{children:s.password.message})]}),e("button",{className:"btn btn-primary",children:"\u0110\u0103ng nh\u1EADp"}),e(f,{to:"/auth/signup",style:{margin:"0px 10px",color:"#0d6efd"},children:" \u0110\u0103ng k\xED "})]})})})};export{E as default};
