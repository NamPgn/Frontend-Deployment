import{f as o,g as i,j as r,q as n,S as p,E as u,p as c}from"./index.0c8a5872.js";import{A as d}from"./index.f6cfc275.js";import"./index.esm.7e8c0556.js";import"./index.5124fe53.js";const l=[{type:"text",field:"username",disable:!1},{type:"password",field:"password",disable:!1},{type:"repassword",field:"repassword",disable:!0}],A=()=>{const e=o(),a=i();return r(d,{onSubmit:async t=>{const s=await e(n(t));s.payload.success?(p(s.payload.message),a("/auth/signin")):u(s.payload.message)},formTitle:"Signup",formDescription:"Just some details to get you in.!",submitButtonText:"Signup",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:()=>{c.success("\u0110ang c\u1EADp nh\u1EADt!")},redirect:"/auth/signin",array:l})};export{A as default};