import{s as d,k as p,r as t,g as h,u as g,h as b,an as x,j as e,b as f,am as i,p as y,ao as S,Q as v,w as E}from"./index.fcd50a9b.js";const w=d.img`
width: 200px; height: 200px; objectFit: cover ;
`,N=()=>{const{register:U,handleSubmit:n,reset:u,control:a}=p(),[r,c]=t.exports.useState({});t.exports.useState(0);const o=h(),{id:m}=g();return b(),t.exports.useEffect(()=>{(async()=>{const{payload:s}=await o(x(m));c(s),u(s)})()},[]),e("div",{children:f("form",{onSubmit:n(async s=>{const l=new FormData;(await o(S(s))).payload.success?v.success(`S\u1EEDa ${l.append("username",s.username)} th\xE0nh c\xF4ng`,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):E("L\u1ED7i!")}),children:[e(i,{name:"username",label:"User name",control:a,rules:void 0}),e(i,{name:"role",label:"Role",control:a,rules:void 0}),e("div",{className:"w-2/12",children:e(w,{src:r?r.image:"",className:"img-radius rounded",alt:"User-Profile-Image"})}),e(y,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{N as default};