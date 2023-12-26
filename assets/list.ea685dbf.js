import{r as c,j as e,F as T,_ as S,S as te,s as R,i as re,g as ae,G as se,T as D,p as a,b as y,H as p,m as ne,o as d,c as o,I as M,J as ce,K as ie,O as le,Q as x,U as oe,V as A,E as I,W as de,X as pe,v as E,w as L,Y as he,l as N}from"./index.bf3385a7.js";import{M as P}from"./index.d963af88.js";import{D as V}from"./DeleteOutlined.58cf4cf1.js";var ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"};const ye=ue;var _=function(i,l){return e(T,{...S(S({},i),{},{ref:l,icon:ye})})};_.displayName="CloseCircleOutlined";const ge=c.exports.forwardRef(_);var me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"};const fe=me;var j=function(i,l){return e(T,{...S(S({},i),{},{ref:l,icon:fe})})};j.displayName="SendOutlined";const xe=c.exports.forwardRef(j),z=c.exports.memo(({defaultValue:s,placeholder:i,style:l,options:n,...g})=>e(te,{placeholder:i,defaultValue:s,style:l,options:n,allowClear:!0,...g})),Se=R.div``,Ce=R.input``,ve=({product:s,length:i,isLoading:l})=>{const{category:n,seri:g,user:C}=c.exports.useContext(re),[k,$]=c.exports.useState(""),[m,F]=c.exports.useState(""),[B,Y]=c.exports.useState(""),[f,v]=c.exports.useState(!1),[b,K]=c.exports.useState([]),[w,H]=c.exports.useState(3),O=ae();c.exports.useEffect(()=>{O(se(w)),document.title="Admin Page"},[f,w]);let h=s;k.length&&(h=s.filter(t=>t.name.toLowerCase().includes(k.toLowerCase()))),m&&(h=s.filter(t=>m==t.category),m=="Select"&&s.map(t=>h.push(t))),B&&(h=s.filter(t=>t.isApproved==!1),m=="Select"&&s.map(t=>h.push(t)));const G=async()=>{(await le(b)).success?(v(!f),x.success("Delete products successfully")):x.error("Error deleting products")},J=async t=>{(await O(de(t))).payload.success?x.success("Delete product successfully"):x.error("Error deleting product")},Q=t=>{F(t)},U=t=>{Y(t)},W={selectedRowKeys:b,onChange:t=>{K(t)}},X=async t=>{const r=await pe(t);r.data.success==!0?(E(r.data.message),v(!f)):L("L\u1ED7i r\u1ED3i!")},q=async t=>{const r=await he(t);r.data.success==!0?(E(r.data.message),console.log(r),v(!f)):L("L\u1ED7i r\u1ED3i!")},Z=[{title:"Name",dataIndex:"name",key:"name"},{title:"Category",key:"category",dataIndex:"category"},{title:"Sidebar",key:"sidebar",dataIndex:"sidebar",width:100},{title:"Seri",key:"seri",dataIndex:"seri",width:100},{title:"Copyright",key:"copyright",dataIndex:"copyright",width:100},{title:"Active",dataIndex:"isActive",key:"isActive",width:90},{title:"Trailer",dataIndex:"trailer",key:"trailer",width:100},{title:"Country",dataIndex:"country",key:"country",width:100},{title:"Year",dataIndex:"year",key:"year",width:100},{title:"Options",dataIndex:"options",key:"options"},{title:"Action",key:"action",dataIndex:"action",width:140,fixed:"right",render:(t,r)=>{switch(C==null?void 0:C.role){case 0:return e(p,{children:e(o,{to:"/",children:e(a,{type:"text",shape:"circle",children:e(A,{})})})});case 1:return y(p,{children:[e(o,{to:"/",children:e(a,{type:"text",shape:"circle",children:e(A,{})})}),e(o,{to:`/dashboard/product/edit/${r.key}`,children:e(a,{type:"text",danger:!0,shape:"circle",children:e(I,{})})})]});case 2:return y(p,{children:[r.isApproved==!0?y(p,{children:[e(a,{className:"flex items-center mb-2",icon:e(oe,{}),ghost:!0,type:"text",style:{color:"#000"},disabled:r.isApproved==!0,children:"Approved"}),e(a,{onClick:()=>q(r.key),icon:e(ge,{}),className:"flex items-center w-full justify-center mb-2",danger:!0,children:"Approval"})]}):e(p,{children:e(a,{onClick:()=>X(r.key),icon:e(xe,{}),className:"flex items-center w-full justify-center",type:"primary",children:"Approve"})}),e(o,{to:"/d/"+r.key+"?c"+r.idCategory,children:e(a,{type:"text",shape:"circle",children:e(A,{})})}),e(o,{to:`/dashboard/product/edit/${r.key}`,children:e(a,{type:"text",danger:!0,shape:"circle",children:e(I,{})})}),e(P,{title:"Delete the product",onConfirm:()=>J(r.key),okText:"Yes",cancelText:"No",children:e(a,{type:"text",shape:"circle",className:"ml-2",children:e(V,{})})})]})}}}],ee=h&&h.map((t,r)=>({key:t._id,name:t.name,trailer:t.trailer?"true":"false",category:n&&n.data.map(u=>{if(u._id===t.category)return u.name}),sidebar:g&&g.map((u,Ae)=>u._id===t.typeId&&u.name),seri:t.seri,copyright:t.copyright,isActive:t.server2||t.dailymotion?e(D,{color:"success",children:"Video active"}):e(D,{color:"error",children:"No video"}),options:t.options,country:t.country?t.country:"null",year:t.year?t.year:"null",isApproved:t.isApproved,idCategory:t.category,option:[e(a,{children:"Add Option"})]}));return y(p,{children:[y(ne,{gutter:[10,10],align:"middle",style:{marginBottom:"10px"},children:[e(d,{children:e(P,{title:"Delete the products",onConfirm:G,okText:"Yes",cancelText:"No",children:e(a,{icon:e(V,{}),className:"flex items-center",children:"Delete"})})}),e(d,{children:e(o,{to:"/dashboard/product/add",children:e(a,{icon:e(M,{}),className:"flex items-center",children:"Add Product"})})}),e(d,{children:e(o,{icon:e(M,{}),to:"/dashboard/product/creacting",children:e(a,{children:"Add Multiple"})})}),e(d,{children:e(o,{to:"/dashboard/product/add",children:e(a,{children:"Export PDF"})})}),e(d,{children:e(o,{to:"/dashboard/product/add",children:e(a,{danger:!0,shape:"round",children:"Export Excel"})})}),e(d,{children:e(z,{placeholder:"Select",onChange:Q,defaultValue:"Select",style:{width:300},options:n&&(n==null?void 0:n.data.map((t,r)=>({label:t.name,value:t._id}))),children:void 0})}),e(d,{children:e(z,{placeholder:"Select",onChange:U,defaultValue:"Select",style:{width:300},options:[{value:!0,label:"Approve"},{value:!1,label:"Approved"}],children:void 0})}),e(d,{children:e(Se,{className:"form-outline",children:e(Ce,{type:"search",placeholder:"search...",className:"form-control p-2 rounded bg-[#fff]",onChange:t=>{$(t.target.value)}})})})]}),e(ce,{spinning:l,delay:void 0,children:e(ie,{rowSelection:W,expandable:{expandedRowRender:t=>e(p,{children:t.option})},columns:Z,dataSource:ee,scroll:{x:1500,y:1e3},pagination:{defaultPageSize:40,showSizeChanger:!0,pageSizeOptions:["40","80","120"],current:w,onChange:t=>{H(t)},total:i}})})]})},De=()=>{const{product:s,length:i}=N(n=>n.product.value),l=N(n=>n.product.isLoading);return e(p,{children:e(ve,{product:s,isLoading:l,length:i})})};export{De as default};
