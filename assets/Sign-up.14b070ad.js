import{g as o,h as i,j as r,C as n,v as p,w as u,y as c}from"./index.fcd50a9b.js";import{A as d}from"./index.738635df.js";import"./index.e5a1e8a0.js";const l=[{type:"text",field:"username",disable:!1},{type:"password",field:"password",disable:!1},{type:"repassword",field:"repassword",disable:!0}],b=()=>{const e=o(),a=i();return r(d,{onSubmit:async t=>{const s=await e(n(t));s.payload.success?(p(s.payload.message),a("/auth/signin")):u(s.payload.message)},formTitle:"Signup",formDescription:"Just some details to get you in.!",submitButtonText:"Signup",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:()=>{c.success("\u0110ang c\u1EADp nh\u1EADt!")},redirect:"/auth/signin",array:l})};export{b as default};