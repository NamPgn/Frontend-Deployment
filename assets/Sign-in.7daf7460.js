import{g as n,h as r,j as e,F as i,w as c,S as u,v as l,x as m}from"./index.609bf2b3.js";import{A as p}from"./index.08b7d43d.js";import"./index.1fd0347d.js";const d=[{type:"text",field:"username",disable:!1},{type:"password",field:"password",disable:!1}],A=()=>{const a=n(),o=r();return e(i,{children:e(p,{onSubmit:async t=>{const s=await a(c(t));s.payload&&s.payload.success?(u(s.payload.message),location.reload(),o("/")):l(s.error.message)},formTitle:"Login",formHeader:"Welcome Back .!",formIntro:"Skip the lag ?",submitButtonText:"Login",formDescription:"Glad you\u2019re back.!",checkedAccount:"Don\u2019t have an account ? Signup",handleMessage:()=>{m.success("\u0110ang c\u1EADp nh\u1EADt!")},redirect:"/auth/signup",array:d})})};export{A as default};
