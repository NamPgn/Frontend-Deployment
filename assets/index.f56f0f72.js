import{s as A,r as i,m as S,G as k,d as c,j as a,e as r,J as n,R as M,O as _,Q as o,aJ as E,Y as N,ci as V,cj as w,w as u,x as h}from"./index.db3b6576.js";import{d as j,a as v,b as B}from"./type.b980c9eb.js";const P=A.div`
  align-items: center;
`,R=()=>{const[m,p]=i.exports.useState(""),{handleSubmit:y,control:g}=S(),C=async(e,t)=>{await j(e,{typeId:t})},b=e=>{p(e)},f=async e=>{await w(e,{TypeId:m})},T=async e=>{(await v(e)).data.data.success==!0?u("Add Successfully"):h("Add Failure")},x=async e=>{(await B(e)).data.success==!0?u("Delete Successfully"):h("Delete Failure")},{seri:l}=i.exports.useContext(k)||{},D=l?l.map((e,t)=>({key:t,stt:t+1,name:e.name,path:e.path,product:e.products.length?e.products.map((s,d)=>c(P,{className:"d-flex",children:[a("div",{className:"mr-2",children:s.name}),a(r,{to:`/dashboard/product/edit/${s._id}`,children:a(n,{children:"Edit"})}),a(n,{onClick:()=>C(s._id,e._id),className:"ml-2",children:"Del"}),a(n,{onClick:()=>f(s._id),className:"ml-2",children:"Push"})]},d)):"Tr\u1ED1ng!",categorymain:e.categorymain?e.categorymain.map((s,d)=>a(r,{to:"/dashboard/types/CatemainProduct/"+s.cates._id,children:a("div",{children:s.cates.name})},d)):"Tr\u1ED1ng!",createdAt:e.createdAt,action:c("span",{children:[a(r,{to:`/dashboard/type/${e._id}`,children:a(n,{children:"Edit"})}),a(n,{danger:!0,className:"ml-2",onClick:()=>x(e._id),children:"Del"})]}),checked:a("input",{className:"form-check-input",type:"radio",name:"123",id:"defaultCheck1",onChange:()=>b(e._id)})})):"";return c(M.Fragment,{children:[a("form",{onSubmit:y(T),children:c(_,{gutter:4,align:"middle",justify:"center",children:[a(o,{span:22,children:a(E,{name:"name",label:"Th\xEAm",control:g,rules:void 0})}),a(o,{span:2,children:a(n,{htmlType:"submit",className:"mt-3",type:"primary",children:"Th\xEAm"})})]})}),a(N,{columns:V,dataSource:D})]})};export{R as default};