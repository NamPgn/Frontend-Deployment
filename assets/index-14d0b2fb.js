import{s as T,r as l,af as k,j as e,I as S}from"./vendor-6b39dd86.js";import{n as D,c as d,q as n,s as M,t as o,J as _,w as A,ak as N,al as V,k as i,l as u}from"./index-de6b145e.js";import{d as w,a as v,b as B}from"./type-ebfc3824.js";const E=T.div`
  align-items: center;
`,R=()=>{const[h,m]=l.useState(""),{handleSubmit:p,control:y}=k(),x=async(s,t)=>{await w(s,{typeId:t})},j=s=>{m(s)},g=async s=>{await V(s,{TypeId:h})},f=async s=>{(await v(s)).data.data.success==!0?i("Add Successfully"):u("Add Failure")},C=async s=>{(await B(s)).data.success==!0?i("Delete Successfully"):u("Delete Failure")},{seri:r}=l.useContext(D)||{},b=r?r.map((s,t)=>({key:t,stt:t+1,name:s.name,path:s.path,product:s.products.length?s.products.map((a,c)=>e.jsxs(E,{className:"d-flex",children:[e.jsx("div",{className:"mr-2",children:a.name}),e.jsx(d,{to:`/dashboard/product/edit/${a._id}`,children:e.jsx(n,{children:"Edit"})}),e.jsx(n,{onClick:()=>x(a._id,s._id),className:"ml-2",children:"Del"}),e.jsx(n,{onClick:()=>g(a._id),className:"ml-2",children:"Push"})]},c)):"Trống!",categorymain:s.categorymain?s.categorymain.map((a,c)=>e.jsx(d,{to:"/dashboard/types/CatemainProduct/"+a.cates._id,children:e.jsx("div",{children:a.cates.name})},c)):"Trống!",createdAt:s.createdAt,action:e.jsxs("span",{children:[e.jsx(d,{to:`/dashboard/type/${s._id}`,children:e.jsx(n,{children:"Edit"})}),e.jsx(n,{danger:!0,className:"ml-2",onClick:()=>C(s._id),children:"Del"})]}),checked:e.jsx("input",{className:"form-check-input",type:"radio",name:"123",id:"defaultCheck1",onChange:()=>j(s._id)})})):"";return e.jsxs(S.Fragment,{children:[e.jsx("form",{onSubmit:p(f),children:e.jsxs(M,{gutter:4,align:"middle",justify:"center",children:[e.jsx(o,{span:22,children:e.jsx(_,{name:"name",label:"Thêm",control:y,rules:void 0})}),e.jsx(o,{span:2,children:e.jsx(n,{htmlType:"submit",className:"mt-3",type:"primary",children:"Thêm"})})]})}),e.jsx(A,{columns:N,dataSource:b})]})};export{R as default};