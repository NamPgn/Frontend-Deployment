import{M as p,ai as u,aj as t,j as d,m as l}from"./vendor-172e24aa.js";import{a as g,F as f,G as h,o as y,p as b}from"./index-4cc36f73.js";const x=[{type:"text",field:"username",disable:!1},{type:"password",field:"password",disable:!1}],S=()=>{const o=g(),r=p(),i=u().shape({username:t().required(),password:t().required().min(3,"Password tối thiểu 6 kí tự")}),c=async m=>{var s,e;const a=await o(h(m));a.payload&&((s=a==null?void 0:a.payload)!=null&&s.success)?(y((e=a.payload)==null?void 0:e.message),r("/")):b(a.payload.message)},n=()=>{l.success("Đang cập nhật!")};return d.jsx(f,{onSubmit:c,formTitle:"Login",formHeader:"Welcome Back .!",formIntro:"Skip the lag ?",submitButtonText:"Login",formDescription:"Glad you’re back.!",checkedAccount:"Don’t have an account ? Signup",handleMessage:n,redirect:"/signup",array:x,schemaPage:i})};export{S as default};