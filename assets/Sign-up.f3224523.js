import{u as p}from"./index.esm.59c1907f.js";import{s as r,u as h,a as b,j as s,b as n,d as g,Q as N}from"./index.de18c56b.js";import{c as w,a as o,o as y}from"./yup.module.efeec60f.js";const e=r.div``,v=r.button``,c=r.input``,S=r.form``,$=()=>{const i=w().shape({username:o().required().test("is-email","Username must not contain @",t=>!t.includes("@")).max(15,"Your Name value must be at most 10 characters long").matches(/^[A-Za-z]+$/),password:o().required().max(15,"Password value must be at most 10 characters long")}),{register:m,handleSubmit:d,formState:{errors:a}}=p({resolver:y(i)}),l=h(),u=b();return s(S,{onSubmit:d(t=>{l(g(t)),N.success("Register Success"),u("/auth/signin")}),className:"vh-100",children:s(e,{className:"mb-5",children:s(e,{className:"formContainer containers ",children:n(e,{children:[n(e,{className:"mb-3 des",children:[s(c,{type:"text",className:"input",...m("username"),name:"username","aria-describedby":"emailHelp",placeholder:"Username"}),a.username&&s("p",{children:a.username.message})]}),n(e,{className:"mb-3 des",children:[s(c,{type:"password",className:"input",...m("password"),name:"password",placeholder:"Password",id:"exampleInputPassword1"}),a.password&&s("p",{children:a.password.message})]}),s(v,{className:"btn btn-primary",children:"Register"})]})})})})};export{$ as default};
