import{s as y,r as s,e as F,v as N,j as t,I as j,B as r,A as z,Q as f,c as o,b as w,F as b,T as B,D as L,E as T,n as M}from"./index.fab02c97.js";const p=y.div``,Q=y.button``,m=y.input``,X=[{title:"Select",key:"all",dataIndex:"all",showOnResponse:!0,showOnDesktop:!0},{title:"Id",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name",showOnResponse:!0,showOnDesktop:!0},{title:"Price",dataIndex:"price",key:"price",showOnResponse:!0,showOnDesktop:!0},{title:"Image",key:"image",dataIndex:"image",showOnResponse:!0,showOnDesktop:!0},{title:"Category",key:"category",dataIndex:"category",showOnResponse:!0,showOnDesktop:!0},{title:"Seri",key:"Seri",dataIndex:"Seri",showOnResponse:!0,showOnDesktop:!0},{title:"Copyright",key:"copyright",dataIndex:"copyright",showOnResponse:!0,showOnDesktop:!0},{title:"Trailer",dataIndex:"trailer",key:"trailer"},{title:"Delete",key:"delete",dataIndex:"delete",showOnResponse:!0,showOnDesktop:!0},{title:"Edit",key:"edit",dataIndex:"edit",showOnResponse:!0,showOnDesktop:!0}],$=({product:a})=>{const[d,C]=s.exports.useState([]),[g,O]=s.exports.useState(""),[h,S]=s.exports.useState(""),[n,c]=s.exports.useState([]),[u,I]=s.exports.useState(!1),[D,A]=s.exports.useState(!1),k=F();s.exports.useEffect(()=>{(async()=>{C(await L())})(),k(N()),document.title="Admin Page"},[D]);let i=a;g.length&&(i=a.filter(e=>e.name.toLowerCase().includes(g.toLowerCase()))),h.length&&(i=a.filter(e=>h==e.category),h=="all"&&a.map(e=>i.push(e)));const _=e=>{n.includes(e)?c(n.filter(l=>l!==e)):c([...n,e])},E=()=>{I(!u),c(u?[]:a.map(e=>e._id))},P=async()=>{if(window.confirm(n)==!0)A(!0),f.success("X\xF3a t\u1EA5t c\u1EA3 th\xE0nh c\xF4ng"),await T(n);else return""},R=i?i.map((e,l)=>({key:e._id,all:t(p,{children:t(m,{className:"form-check-input",checked:n.includes(e._id),onChange:()=>_(e._id),type:"checkbox",id:"defaultCheck1"})}),name:e.name,price:e.price,category:d.map(x=>{if(x._id===e.category)return x.name}),image:t(j,{width:150,height:200,style:{objectFit:"cover"},src:e.image?e.image:"https://firebasestorage.googleapis.com/v0/b/mystorage-265d8.appspot.com/o/image%2Fdau-pha-thuong-khung-ova-3-hen-uoc-3-nam-856.jpg?alt=media&token=dca80d37-bb85-41a0-9fd5-c6e949e1db54"}),Seri:e.seri,copyright:e.copyright,trailer:e.trailer?"true":"false",delete:t(r,{style:{background:"#1677ff"},type:"primary",onClick:()=>{k(z(e._id)),f.success("delete product successfully")},children:"Delete"}),edit:t(o,{to:`/admin/product/edit/${e._id}`,children:t(r,{type:"primary",danger:!0,children:"Edit"})})})):"";return w(b,{children:[t(m,{type:"checkbox",checked:u,name:"",onChange:()=>E(),id:""}),t(Q,{onClick:()=>{P()},className:"btn_remove",children:t("i",{className:"fa-solid fa-trash text-light"})}),t(o,{to:"/admin/product/add",children:t(r,{type:"primary",shape:"round",style:{display:"inline-block",margin:"10px 10px",background:"#1677ff"},children:"Add Product"})}),t(o,{to:"/admin/product/creacting",children:t(r,{type:"primary",shape:"round",style:{display:"inline-block",margin:"10px 10px",background:"#28a745"},children:"Add Multiple"})}),t(o,{to:"/admin/product/add",children:t(r,{type:"primary",shape:"round",style:{display:"inline-block  ",margin:"10px 10px",background:"#eca52b"},children:"Export PDF"})}),w("select",{className:"form-select-sm",onChange:e=>S(e.target.value),style:{border:"none",padding:"10px",outline:"none",width:"250px"},"aria-label":".form-select-sm example",children:[t("option",{value:"all",children:"Open this select menu"}),d.map((e,l)=>t("option",{value:e._id,children:e.name},l))]}),t(o,{to:"/admin/product/add",children:t(r,{type:"primary",danger:!0,shape:"round",style:{display:"inline-block  ",margin:"10px 10px"},children:"Export Excel"})}),t(p,{style:{display:"inline-block"},children:t(p,{className:"input-group",children:t(p,{className:"form-outline",children:t(m,{type:"search",id:"form1",placeholder:"search...",className:"form-control",onChange:e=>{O(e.target.value)}})})})}),t(B,{columns:X,dataSource:R,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","20","30"]}})]})},v=()=>{const a=M(d=>d.product.value);return t(b,{children:t($,{product:a})})};export{v as default};
