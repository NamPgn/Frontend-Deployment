import{g as t,h as n,j as r,x as i,v as c,w as u,y as p}from"./index.bf3385a7.js";import{A as l}from"./index.690b8289.js";import"./index.a240382d.js";const m=[{type:"text",field:"username",disable:!1},{type:"password",field:"password",disable:!1}],b=()=>{const e=t(),a=n();return r(l,{onSubmit:async o=>{const s=await e(i(o));s.payload&&s.payload.success?(c(s.payload.message),location.reload(),a("/")):u(s.error.message)},formTitle:"Login",formHeader:"Welcome Back .!",formIntro:"Skip the lag ?",submitButtonText:"Login",formDescription:"Glad you\u2019re back.!",checkedAccount:"Don\u2019t have an account ? Signup",handleMessage:()=>{p.success("\u0110ang c\u1EADp nh\u1EADt!")},redirect:"/signup",array:m})};export{b as default};
