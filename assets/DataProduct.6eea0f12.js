import{s as f,r as a,h as B,f as L,t as M,j as t,I as O,b as g,F as k,c as o,B as r,v as T,Q as I,T as X,w as Q,i as Y}from"./index.78f0544f.js";const p=f.div``,$=f.button``,x=f.input``,q=[{title:"Select",key:"all",dataIndex:"all",width:100,fixed:"left"},{title:"Name",dataIndex:"name",key:"name"},{title:"Options",dataIndex:"options",key:"options"},{title:"Image",key:"image",dataIndex:"image"},{title:"Category",key:"category",dataIndex:"category"},{title:"Seri",key:"Seri",dataIndex:"Seri",width:100},{title:"Copyright",key:"copyright",dataIndex:"copyright",width:100},{title:"Trailer",dataIndex:"trailer",key:"trailer",width:100},{title:"Year",dataIndex:"year",key:"year",width:100},{title:"Country",dataIndex:"country",key:"country",width:100},{title:"Action",key:"action",dataIndex:"action",width:180,fixed:"right"}],G=({product:n,length:h})=>{const{category:c}=a.exports.useContext(B),[b,w]=a.exports.useState(""),[y,A]=a.exports.useState(""),[i,s]=a.exports.useState([]),[u,P]=a.exports.useState(!1),[F,_]=a.exports.useState(!1),[m,E]=a.exports.useState(1),C=L();a.exports.useEffect(()=>{C(M(m)),document.title="Admin Page"},[F,m]);let d=n;b.length&&(d=n.filter(e=>e.name.toLowerCase().includes(b.toLowerCase()))),y.length&&(d=n.filter(e=>y==e.category),y=="all"&&n.map(e=>d.push(e)));const D=e=>{i.includes(e)?s(i.filter(l=>l!==e)):s([...i,e])},N=()=>{P(!u),s(u?[]:n.map(e=>e._id))},j=async()=>{window.confirm(i)==!0&&(_(!0),I.success("X\xF3a t\u1EA5t c\u1EA3 th\xE0nh c\xF4ng"),await Q(i))},z=d?d.map((e,l)=>({key:e._id,all:t(p,{children:t(x,{className:"form-check-input",checked:i.includes(e._id),onChange:()=>D(e._id),type:"checkbox",id:"defaultCheck1"})}),name:e.name,options:e.options,category:c.data.map(S=>{if(S._id===e.category)return S.name}),image:t(O,{width:150,height:200,style:{objectFit:"cover"},src:e.image?e.image:"https://firebasestorage.googleapis.com/v0/b/mystorage-265d8.appspot.com/o/image%2Fdau-pha-thuong-khung-ova-3-hen-uoc-3-nam-856.jpg?alt=media&token=dca80d37-bb85-41a0-9fd5-c6e949e1db54"}),Seri:e.seri,copyright:e.copyright,trailer:e.trailer?"true":"false",country:e.country?e.country:"null",year:e.year?e.year:"null",action:g(k,{children:[t(o,{to:`/admin/product/edit/${e._id}`,children:t(r,{type:"primary",danger:!0,children:"Edit"})}),t(r,{style:{background:"#1677ff"},type:"primary",onClick:()=>{C(T(e._id)),I.success("delete product successfully")},children:"Delete"})]})})):"";return g(k,{children:[t(x,{type:"checkbox",checked:u,name:"",onChange:()=>N(),id:""}),t($,{onClick:()=>{j()},className:"btn_remove text-white",children:"X\xF3a"}),t(o,{to:"/admin/product/add",children:t(r,{type:"primary",shape:"round",style:{display:"inline-block",margin:"10px 10px",background:"#1677ff"},children:"Add Product"})}),t(o,{to:"/admin/product/creacting",children:t(r,{type:"primary",shape:"round",style:{display:"inline-block",margin:"10px 10px",background:"#28a745"},children:"Add Multiple"})}),t(o,{to:"/admin/product/add",children:t(r,{type:"primary",shape:"round",style:{display:"inline-block  ",margin:"10px 10px",background:"#eca52b"},children:"Export PDF"})}),g("select",{className:"form-select-sm",onChange:e=>A(e.target.value),style:{border:"none",padding:"10px",outline:"none",width:"250px"},"aria-label":".form-select-sm example",children:[t("option",{value:"all",children:"Open this select menu"}),c.data.map((e,l)=>t("option",{value:e._id,children:e.name},l))]}),t(o,{to:"/admin/product/add",children:t(r,{type:"primary",danger:!0,shape:"round",style:{display:"inline-block  ",margin:"10px 10px"},children:"Export Excel"})}),t(p,{style:{display:"inline-block"},children:t(p,{className:"input-group",children:t(p,{className:"form-outline",children:t(x,{type:"search",id:"form1",placeholder:"search...",className:"form-control p-3 rounded",onChange:e=>{w(e.target.value)}})})})}),t(X,{columns:q,dataSource:z,scroll:{x:1500,y:1e3},pagination:{defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:["10","20","30"],current:m,onChange:e=>{E(e)},total:h}})]})},J=()=>{const{product:n,length:h}=Y(c=>c.product.value);return t(k,{children:t(G,{product:n,length:h})})};export{J as default};
