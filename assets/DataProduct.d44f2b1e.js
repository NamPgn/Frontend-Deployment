import{s as y,r as n,u as E,k as R,j as t,m as F,B as r,Q as x,n as j,N as o,b as f,F as w,p as B,q as z,f as L}from"./index.49430263.js";import{I as T}from"./index.9b2533fc.js";import{T as M}from"./Table.439fd4d9.js";import"./CloseOutlined.b23ae7b1.js";const p=y.div``,$=y.button``,m=y.input``,q=[{title:"Select",key:"all",dataIndex:"all",showOnResponse:!0,showOnDesktop:!0},{title:"Id",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name",showOnResponse:!0,showOnDesktop:!0},{title:"Price",dataIndex:"price",key:"price",showOnResponse:!0,showOnDesktop:!0},{title:"Image",key:"image",dataIndex:"image",showOnResponse:!0,showOnDesktop:!0},{title:"Category",key:"category",dataIndex:"category",showOnResponse:!0,showOnDesktop:!0},{title:"Seri",key:"Seri",dataIndex:"Seri",showOnResponse:!0,showOnDesktop:!0},{title:"Copyright",key:"copyright",dataIndex:"copyright",showOnResponse:!0,showOnDesktop:!0},{title:"Trailer",dataIndex:"trailer",key:"trailer"},{title:"Delete",key:"delete",dataIndex:"delete",showOnResponse:!0,showOnDesktop:!0},{title:"Edit",key:"edit",dataIndex:"edit",showOnResponse:!0,showOnDesktop:!0}],Q=({product:a})=>{const[d,C]=n.exports.useState([]),[g,b]=n.exports.useState(""),[h,S]=n.exports.useState(""),[s,c]=n.exports.useState([]),[u,O]=n.exports.useState(!1),[I,D]=n.exports.useState(!1),k=E();n.exports.useEffect(()=>{(async()=>{C(await B())})(),k(R()),document.title="Admin Page"},[I]);let i=a;g.length&&(i=a.filter(e=>e.name.toLowerCase().includes(g.toLowerCase()))),h.length&&(i=a.filter(e=>h==e.category),h=="all"&&a.map(e=>i.push(e)));const _=e=>{s.includes(e)?c(s.filter(l=>l!==e)):c([...s,e])},P=()=>{O(!u),c(u?[]:a.map(e=>e._id))},N=async()=>window.confirm(s)==!0?(D(!0),x.success("X\xF3a t\u1EA5t c\u1EA3 th\xE0nh c\xF4ng"),await z(s)):"",A=i?i.map((e,l)=>({key:e._id,all:t(p,{children:t(m,{className:"form-check-input",checked:s.includes(e._id),onChange:()=>_(e._id),type:"checkbox",id:"defaultCheck1"})}),_id:e._id,name:e.name,price:e.price,category:F(d,e.category),image:t(T,{width:150,height:200,style:{objectFit:"cover"},src:e.image?e.image:"https://hoathinh3d.com/wp-content/uploads/2021/10/dau-pha-thuong-khung-ova-3-hen-uoc-3-nam-856-300x450.jpg"}),Seri:e.seri,copyright:e.copyright,trailer:e.trailer?"true":"false",delete:t(r,{style:{background:"#1677ff"},type:"primary",onClick:()=>x.success(`Delete ${e.name} Success!`,{position:"bottom-right",autoClose:5e3},k(j(e._id))),children:"Delete"}),edit:t(o,{to:`/admin/product/edit/${e._id}`,children:t(r,{type:"primary",danger:!0,children:"Edit"})})})):"";return f(w,{children:[t(m,{type:"checkbox",checked:u,name:"",onChange:()=>P(),id:""}),t($,{onClick:()=>{N()},className:"btn_remove",children:t("i",{className:"fa-solid fa-trash text-light"})}),t(o,{to:"/admin/product/add",children:t(r,{type:"primary",shape:"round",style:{display:"inline-block",margin:"10px 10px",background:"#1677ff"},children:"Add Product"})}),t(o,{to:"/admin/product/creacting",children:t(r,{type:"primary",shape:"round",style:{display:"inline-block",margin:"10px 10px",background:"#28a745"},children:"Add Multiple"})}),t(o,{to:"/admin/product/add",children:t(r,{type:"primary",shape:"round",style:{display:"inline-block  ",margin:"10px 10px",background:"#eca52b"},children:"Export PDF"})}),f("select",{className:"form-select-sm",onChange:e=>S(e.target.value),style:{border:"none",padding:"10px",outline:"none",width:"250px"},"aria-label":".form-select-sm example",children:[t("option",{value:"all",children:"Open this select menu"}),d.map((e,l)=>t("option",{value:e._id,children:e.name},l))]}),t(o,{to:"/admin/product/add",children:t(r,{type:"primary",danger:!0,shape:"round",style:{display:"inline-block  ",margin:"10px 10px"},children:"Export Excel"})}),t(p,{style:{display:"inline-block"},children:t(p,{className:"input-group",children:t(p,{className:"form-outline",children:t(m,{type:"search",id:"form1",placeholder:"search...",className:"form-control",onChange:e=>{b(e.target.value)}})})})}),t(M,{columns:q,mobileBreakPoint:768,dataSource:A,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","20","30"]}})]})},K=()=>{const a=L(d=>d.product.value);return t(w,{children:t(Q,{product:a})})};export{K as default};