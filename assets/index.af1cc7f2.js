import{s as l,r as i,i as C,b as o,j as e,c as r,l as n,x,bi as b,bj as T}from"./index.599ff1bc.js";import{d as f}from"./type.9685e711.js";const k=l.div``,S=l.div`
align-items: center;
`,N=()=>{const[h,p]=i.exports.useState(""),u=async(a,s)=>{await f(a,{typeId:s})},y=a=>{p(a)},m=async a=>{await T(a,{TypeId:h})},{seri:c,loadingSeri:_}=i.exports.useContext(C)||{},g=c?c.map((a,s)=>({key:s,stt:s+1,name:a.name,path:a.path,product:a.products?a.products.map((t,d)=>o(S,{className:"d-flex",children:[e(k,{className:"mr-2",children:t.name}),e(r,{to:`/dashboard/product/edit/${t._id}`,children:e(n,{children:"Edit"})}),e(n,{onClick:()=>u(t._id,a._id),type:"primary",danger:!0,className:"ml-2",children:"C\xFAt"}),e(n,{type:"primary",onClick:()=>m(t._id),className:"ml-2",children:"Push"})]},d)):"Tr\u1ED1ng!",categorymain:a.categorymain?a.categorymain.map((t,d)=>e(r,{to:"/dashboard/types/CatemainProduct/"+t.cates._id,children:e("div",{children:t.cates.name})},d)):"Tr\u1ED1ng!",createdAt:a.createdAt,action:e("span",{children:o(r,{to:`/dashboard/trailerUrl/${a._id}`,children:[e(n,{children:"Edit"}),e(n,{danger:!0,className:"ml-2",children:"C\xFAt"})]})}),checked:e("input",{className:"form-check-input",type:"radio",name:"123",id:"defaultCheck1",onChange:()=>y(a._id)})})):"";return e(x,{columns:b,dataSource:g,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","20","30"]}})};export{N as default};
