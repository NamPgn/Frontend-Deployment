import{r as s,j as t,C as j,s as M,i as z,g as K,D as O,b as y,F as S,c as p,p as n,E as R,m as B,o as a,G as Y,H as G,I as H,J,Q as h,K as Q,l as w}from"./index.609bf2b3.js";import{M as P}from"./index.8e4b2f3d.js";import{D as X}from"./DeleteOutlined.d3930357.js";const $=s.exports.memo(({defaultValue:o,placeholder:c,style:d,options:r,...u})=>t(j,{placeholder:c,defaultValue:o,style:d,options:r,allowClear:!0,...u})),q=M.div``,U=M.input``,W=({product:o,length:c,isLoading:d})=>{const{category:r,seri:u}=s.exports.useContext(z),[x,b]=s.exports.useState(""),[m,E]=s.exports.useState("");s.exports.useState([]),s.exports.useState(!1);const[A,_]=s.exports.useState(!1),[f,F]=s.exports.useState([]),[g,L]=s.exports.useState(3),C=K();s.exports.useEffect(()=>{C(O(g)),document.title="Admin Page"},[A,g]);let l=o;x.length&&(l=o.filter(e=>e.name.toLowerCase().includes(x.toLowerCase()))),m&&(l=o.filter(e=>m==e.category),m=="Select"&&o.map(e=>l.push(e)));const N=async()=>{(await J(f)).success?(_(!0),h.success("Delete products successfully")):h.error("Error deleting products")},T=async e=>{(await C(Q(e))).payload.success?h.success("Delete product successfully"):h.error("Error deleting product")},V=e=>{E(e)},k={selectedRowKeys:f,onChange:e=>{F(e)}},I=l&&l.map((e,D)=>({key:e._id,name:e.name,trailer:e.trailer?"true":"false",category:r&&r.data.map(i=>{if(i._id===e.category)return i.name}),sidebar:u&&u.map((i,v)=>i._id===e.typeId&&i.name),Seri:e.seri,copyright:e.copyright,options:e.options,country:e.country?e.country:"null",year:e.year?e.year:"null",action:y(S,{children:[t(p,{to:`/dashboard/product/edit/${e._id}`,children:t(n,{danger:!0,shape:"circle",children:t(R,{})})}),t(P,{title:"Delete the product",onConfirm:()=>T(e._id),okText:"Yes",cancelText:"No",children:t(n,{shape:"circle",className:"ml-2",children:t(X,{})})})]})}));return y(S,{children:[y(B,{gutter:[10,10],align:"middle",style:{marginBottom:"10px"},children:[t(a,{children:t(P,{title:"Delete the products",onConfirm:N,okText:"Yes",cancelText:"No",children:t(n,{children:"X\xF3a"})})}),t(a,{children:t(p,{to:"/dashboard/product/add",children:t(n,{children:"Add Product"})})}),t(a,{children:t(p,{to:"/dashboard/product/creacting",children:t(n,{children:"Add Multiple"})})}),t(a,{children:t(p,{to:"/dashboard/product/add",children:t(n,{children:"Export PDF"})})}),t(a,{children:t(p,{to:"/dashboard/product/add",children:t(n,{danger:!0,shape:"round",children:"Export Excel"})})}),t(a,{children:t($,{placeholder:"Select",onChange:V,defaultValue:"Select",style:{width:300},options:r&&(r==null?void 0:r.data.map((e,D)=>({label:e.name,value:e._id}))),children:void 0})}),t(a,{children:t(q,{className:"form-outline",children:t(U,{type:"search",placeholder:"search...",className:"form-control p-2 rounded",onChange:e=>{b(e.target.value)}})})})]}),t(Y,{spinning:d,delay:void 0,children:t(G,{rowSelection:k,columns:H,dataSource:I,scroll:{x:1500,y:1e3},pagination:{defaultPageSize:40,showSizeChanger:!0,pageSizeOptions:["40","80","120"],current:g,onChange:e=>{L(e)},total:c}})})]})},se=()=>{const{product:o,length:c}=w(r=>r.product.value),d=w(r=>r.product.isLoading);return t(S,{children:t(W,{product:o,isLoading:d,length:c})})};export{se as default};
