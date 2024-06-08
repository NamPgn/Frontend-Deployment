import{s as d,i as p,r as t,k as h,u as b,a_ as x,j as s,d as g,aZ as n,at as y,y as f,Q as S,x as E}from"./index.ca5c0489.js";const v=d.img`
  width: 200px;
  height: 200px;
  objectfit: cover;
`,j=()=>{const{handleSubmit:i,reset:c,control:a}=p(),[r,m]=t.exports.useState({});t.exports.useState(0);const o=h(),{id:u}=b();return t.exports.useEffect(()=>{(async()=>{const{payload:e}=await o(x(u));m(e),c(e)})()},[]),s("div",{children:g("form",{onSubmit:i(async e=>{const l=new FormData;(await o(f(e))).payload.success?S.success(`S\u1EEDa ${l.append("username",e.username)} th\xE0nh c\xF4ng`,{progress:void 0,theme:"light"}):E("L\u1ED7i!")}),children:[s(n,{name:"username",label:"User name",control:a,rules:void 0}),s(n,{name:"role",label:"Role",control:a,rules:void 0}),s("div",{className:"w-2/12",children:s(v,{src:r?r.image:"",className:"img-radius rounded",alt:"User-Profile-Image"})}),s(y,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]})})};export{j as default};
