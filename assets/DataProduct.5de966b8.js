import{j as t,p as Y,s as A,r,g as q,e as B,q as Q,b as w,F as S,c as l,i as o,t as V,T as $,Q as f,v as G,w as H,E as J,h as I}from"./index.25c2f60c.js";import{P as K}from"./index.411f23ed.js";import{D as R}from"./DeleteOutlined.4ee4290b.js";import{E as U}from"./EditOutlined.781f2476.js";const W=({defaultValue:n,placeholder:i,style:s,options:a,...p})=>t(Y,{placeholder:i,defaultValue:n,style:s,options:a,allowClear:!0,...p}),y=A.div``,k=A.input``,Z=[{title:"Select",key:"all",dataIndex:"all",width:100,fixed:"left"},{title:"Name",dataIndex:"name",key:"name"},{title:"Category",key:"category",dataIndex:"category"},{title:"Seri",key:"Seri",dataIndex:"Seri",width:100},{title:"Copyright",key:"copyright",dataIndex:"copyright",width:100},{title:"Trailer",dataIndex:"trailer",key:"trailer",width:100},{title:"Year",dataIndex:"year",key:"year",width:100},{title:"Options",dataIndex:"options",key:"options"},{title:"Country",dataIndex:"country",key:"country",width:100},{title:"Action",key:"action",dataIndex:"action",width:120,fixed:"right"}],v=({product:n,length:i,isLoading:s})=>{const{category:a}=r.exports.useContext(q),[p,E]=r.exports.useState(""),[g,P]=r.exports.useState(""),[c,h]=r.exports.useState([]),[x,D]=r.exports.useState(!1),[N,_]=r.exports.useState(!1),[m,F]=r.exports.useState(3),C=B();r.exports.useEffect(()=>{C(Q(m)),document.title="Admin Page"},[N,m]);let d=n;p.length&&(d=n.filter(e=>e.name.toLowerCase().includes(p.toLowerCase()))),g&&(d=n.filter(e=>g==e.category),g=="Select"&&n.map(e=>d.push(e)));const L=e=>{c.includes(e)?h(c.filter(u=>u!==e)):h([...c,e])},M=()=>{D(!x),h(x?[]:n.map(e=>e._id))},T=async()=>{window.confirm(c)==!0&&(_(!0),f.success("X\xF3a t\u1EA5t c\u1EA3 th\xE0nh c\xF4ng"),await G(c))},O=async e=>{(await C(H(e))).payload.success?f.success("Delete product successfully"):f.error("Error deleting product")},j=e=>{console.log(e),J("Click on No")},z=e=>{P(e)},X=d?d.map((e,u)=>({key:e._id,all:t(y,{children:t(k,{className:"form-check-input",checked:c.includes(e._id),onChange:()=>L(e._id),type:"checkbox",id:"defaultCheck1"})}),name:e.name,trailer:e.trailer?"true":"false",category:a&&a.data.map(b=>{if(b._id===e.category)return b.name}),Seri:e.seri,copyright:e.copyright,options:e.options,country:e.country?e.country:"null",year:e.year?e.year:"null",action:w(S,{children:[t(l,{to:`/dashboard/product/edit/${e._id}`,children:t(o,{danger:!0,shape:"circle",children:t(U,{})})}),t(K,{title:"Delete the product",onConfirm:()=>O(e._id),onCancel:j,okText:"Yes",cancelText:"No",children:t(o,{shape:"circle",className:"ml-2",children:t(R,{})})})]})})):"";return w(S,{children:[t(k,{type:"checkbox",className:"mr-2",checked:x,name:"",onChange:()=>M()}),t(o,{onClick:()=>{T()},children:"X\xF3a"}),t(l,{to:"/dashboard/product/add",children:t(o,{style:{display:"inline-block",margin:"10px 10px",background:"#1677ff"},children:"Add Product"})}),t(l,{to:"/dashboard/product/creacting",children:t(o,{style:{display:"inline-block",margin:"10px 10px",background:"#28a745"},children:"Add Multiple"})}),t(l,{to:"/dashboard/product/add",children:t(o,{style:{display:"inline-block  ",margin:"10px 10px",background:"#eca52b"},children:"Export PDF"})}),t(l,{to:"/dashboard/product/add",children:t(o,{danger:!0,shape:"round",style:{display:"inline-block  ",margin:"10px 10px"},children:"Export Excel"})}),t(W,{placeholder:"Select",onChange:z,defaultValue:"Select",style:{width:300},options:a&&(a==null?void 0:a.data.map((e,u)=>({label:e.name,value:e._id}))),children:void 0}),t(y,{style:{display:"inline-block"},children:t(y,{className:"input-group ml-2",children:t(y,{className:"form-outline",children:t(k,{type:"search",id:"form1",placeholder:"search...",className:"form-control p-3 rounded",onChange:e=>{E(e.target.value)}})})})}),t(V,{spinning:s,delay:void 0,children:t($,{columns:Z,dataSource:X,scroll:{x:1500,y:1e3},pagination:{defaultPageSize:40,showSizeChanger:!0,pageSizeOptions:["40","80","120"],current:m,onChange:e=>{F(e)},total:i}})})]})},re=()=>{const{product:n,length:i}=I(a=>a.product.value),s=I(a=>a.product.isLoading);return t(S,{children:t(v,{product:n,isLoading:s,length:i})})};export{re as default};
