import{s as T,r as o,k as C,i as x,d,j as e,e as r,p as t,R as k,m as _,o as i,aH as f,K as D,bZ as M,b_ as N}from"./index.9a3f2aa5.js";import{d as A}from"./type.0782315e.js";const E=T.div`
  align-items: center;
`,j=()=>{const[h,m]=o.exports.useState(""),{handleSubmit:v,control:p}=C(),u=async(a,n)=>{await A(a,{typeId:n})},y=a=>{m(a)},g=async a=>{await N(a,{TypeId:h})},{seri:l}=o.exports.useContext(x)||{},b=l?l.map((a,n)=>({key:n,stt:n+1,name:a.name,path:a.path,product:a.products.length?a.products.map((s,c)=>d(E,{className:"d-flex",children:[e("div",{className:"mr-2",children:s.name}),e(r,{to:`/dashboard/product/edit/${s._id}`,children:e(t,{children:"Edit"})}),e(t,{onClick:()=>u(s._id,a._id),className:"ml-2",children:"Del"}),e(t,{onClick:()=>g(s._id),className:"ml-2",children:"Push"})]},c)):"Tr\u1ED1ng!",categorymain:a.categorymain?a.categorymain.map((s,c)=>e(r,{to:"/dashboard/types/CatemainProduct/"+s.cates._id,children:e("div",{children:s.cates.name})},c)):"Tr\u1ED1ng!",createdAt:a.createdAt,action:e("span",{children:d(r,{to:`/dashboard/type/${a._id}`,children:[e(t,{children:"Edit"}),e(t,{danger:!0,className:"ml-2",children:"Del"})]})}),checked:e("input",{className:"form-check-input",type:"radio",name:"123",id:"defaultCheck1",onChange:()=>y(a._id)})})):"";return d(k.Fragment,{children:[d(_,{gutter:4,align:"middle",justify:"center",children:[e(i,{span:22,children:e(f,{name:"name",label:"Th\xEAm",control:p,rules:void 0})}),e(i,{span:2,children:e(t,{htmlType:"submit",className:"mt-3",type:"primary",children:"Th\xEAm"})})]}),e(D,{columns:M,dataSource:b})]})};export{j as default};
