import{s as d,m as p,r as a,g as h,u as b,aZ as g,j as s,d as x,aY as n,ar as f,a_ as y,aB as S,x as E}from"./index.5f4e92ea.js";const v=d.img`
  width: 200px;
  height: 200px;
  objectfit: cover;
`,j=()=>{const{handleSubmit:i,reset:m,control:t}=p(),[r,c]=a.exports.useState({});a.exports.useState(0);const o=h(),{id:u}=b();return a.exports.useEffect(()=>{(async()=>{const{payload:e}=await o(g(u));c(e),m(e)})()},[]),s("div",{children:x("form",{onSubmit:i(async e=>{const l=new FormData;(await o(y(e))).payload.success?S.success(`S\u1EEDa ${l.append("username",e.username)} th\xE0nh c\xF4ng`,{progress:void 0,theme:"light"}):E("L\u1ED7i!")}),children:[s(n,{name:"username",label:"User name",control:t,rules:void 0}),s(n,{name:"role",label:"Role",control:t,rules:void 0}),s("div",{className:"w-2/12",children:s(v,{src:r?r.image:"",className:"img-radius rounded",alt:"User-Profile-Image"})}),s(f,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{j as default};
