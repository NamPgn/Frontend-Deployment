import{s as l,r as t,f as p,u as h,g,a2 as b,j as e,b as f,k as x,a3 as y,Q as E,E as S}from"./index.46642890.js";import{u as v}from"./index.esm.afba8e56.js";import{r as i}from"./index.c10f7cc9.js";const N=l.img`
width: 200px; height: 200px; objectFit: cover ;
`,P=()=>{const{register:U,handleSubmit:n,reset:m,control:a}=v(),[r,c]=t.exports.useState({});t.exports.useState(0);const o=p(),{id:u}=h();return g(),t.exports.useEffect(()=>{(async()=>{const{payload:s}=await o(b(u));c(s),m(s)})()},[]),e("div",{children:f("form",{onSubmit:n(async s=>{const d=new FormData;(await o(y(s))).payload.success?E.success(`S\u1EEDa ${d.append("username",s.username)} th\xE0nh c\xF4ng`,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):S("L\u1ED7i!")}),children:[e("div",{className:"mb-3 ",children:i("username","User name",a)}),e("div",{className:"mb-3 ",children:i("role","Role",a)}),e("div",{className:"w-2/12",children:e(N,{src:r?r.image:"",className:"img-radius rounded",alt:"User-Profile-Image"})}),e(x,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{P as default};