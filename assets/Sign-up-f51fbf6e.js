import{O as m,ai as p,aj as s,ak as u,j as g,m as h}from"./vendor-fa914f0b.js";import{e as f,A as y,r as w,k as b,l as r}from"./index-82c47e67.js";const k=[{type:"text",field:"username",disable:!1},{type:"email",field:"email",disable:!1},{type:"password",field:"password",disable:!1},{type:"password",field:"repassword",disable:!1}],A=()=>{const i=f(),n=m(),o=p().shape({username:s().required(),password:s().required().min(3,"Password tối thiểu 6 kí tự"),email:s().required().email(),repassword:s().required().oneOf([u("password"),null],"Passwords must match")}),c=async l=>{var a,t;try{const e=await i(w(l));(a=e==null?void 0:e.payload)!=null&&a.success?(b(e.payload.message),n("/signin")):r(((t=e==null?void 0:e.payload)==null?void 0:t.message)||"Đăng nhập không thành công")}catch{r("Đăng nhập không thành công")}},d=()=>{h.success("Đang cập nhật!")};return g.jsx(y,{onSubmit:c,formTitle:"Signup",formDescription:"Just some details to get you in.!",submitButtonText:"Signup",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:d,redirect:"/signin",array:k,schemaPage:o})};export{A as default};
