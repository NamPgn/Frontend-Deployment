import{r,j as e,aU as W,f as l,t as d,ai as E,aV as S,aW as X,aX as Z,aY as C,aZ as G,a_ as J,a$ as ee,E as k,aT as I,an as te}from"./vendor.bb3b024f.js";import{g as N,n as ae,f as se,e as re,o as O,p as v,q as s,s as ne,t as n,v as V,c,w as ce,x as ie,y as oe,z as de,B as le,k as b,l as P,C as pe,D as he,E as ue}from"./index.e3be4591.js";const L=r.exports.memo(({defaultValue:i,placeholder:p,style:h,options:u,...m})=>e(W,{placeholder:p,defaultValue:i,style:h,options:u,allowClear:!0,...m})),ye=r.exports.memo(({product:i,length:p,isLoading:h})=>{const[u,m]=r.exports.useState(9),o=N(t=>t.category.category),{seri:y}=r.exports.useContext(ae)||[],{user:w}=r.exports.useContext(se),[M,T]=r.exports.useState(""),[x,A]=r.exports.useState(!1),[D,z]=r.exports.useState([]),g=re();let f=i;r.exports.useEffect(()=>{g(O(u))},[x]);const R=t=>{g(ie(t))},_=t=>{g(oe(t))},j=t=>{m(t),g(O(t))};M&&(f=i.filter(t=>t.isApproved==!1),M=="Select"&&i.map(t=>f.push(t)));const B=async()=>{(await de(D)).data.success==!0?(A(!x),C.success("Delete products successfully")):C.error("Error deleting products")},Y=async t=>{(await g(pe(t))).payload.success?C.success("Delete product successfully"):C.error("Error deleting product")},F=t=>{T(t)},$={selectedRowKeys:D,onChange:t=>{z(t)}},K=async t=>{const a=await he(t);a.data.success==!0?(b(a.data.message),A(!x)):P("L\u1ED7i r\u1ED3i!")},U=async t=>{const a=await ue(t);a.data.success==!0?(b(a.data.message),A(!x)):P("L\u1ED7i r\u1ED3i!")},q=async()=>{const t=await le();t.data.suscess==!0?b(t.data.message):P(t.data.message)},H=[{title:"Name",dataIndex:"name",key:"name",width:200},{title:"Category",key:"category",dataIndex:"category",width:200},{title:"View",key:"view",dataIndex:"view",width:100},{title:"Seri",key:"seri",dataIndex:"seri",width:100},{title:"Copyright",key:"copyright",dataIndex:"copyright",width:100},{title:"Active",dataIndex:"isActive",key:"isActive",width:90},{title:"Trailer",dataIndex:"trailer",key:"trailer",width:100},{title:"Country",dataIndex:"country",key:"country",width:100},{title:"Year",dataIndex:"year",key:"year",width:100},{title:"Options",dataIndex:"options",key:"options",width:100},{title:"Sidebar",key:"sidebar",dataIndex:"sidebar",width:100},{title:"Action",key:"action",dataIndex:"action",width:140,fixed:"right",render:(t,a)=>{switch(w==null?void 0:w.role){case 0:return e(d,{children:e(c,{to:"/",children:e(s,{type:"text",shape:"circle",children:e(k,{})})})});case 1:return l(d,{children:[e(c,{to:"/",children:e(s,{type:"text",shape:"circle",children:e(k,{})})}),e(c,{to:`/dashboard/product/edit/${a.key}`,children:e(s,{type:"text",danger:!0,shape:"circle",children:e(I,{})})})]});case 2:return l(d,{children:[(a==null?void 0:a.isApproved)==!0?l(d,{children:[e(s,{className:"flex items-center mb-2",icon:e(G,{}),ghost:!0,type:"text",style:{color:"#000"},disabled:a.isApproved==!0,children:"Approved"}),e(s,{onClick:()=>U(a.key),icon:e(J,{}),className:"flex items-center w-full justify-center mb-2",danger:!0,children:"Approval"})]}):e(d,{children:e(s,{onClick:()=>K(a.key),icon:e(ee,{}),className:"flex items-center w-full justify-center",type:"primary",children:"Approve"})}),l("div",{className:"flex",children:[e(c,{to:"/d/"+a.key+"?c="+a.idCategory,children:e(s,{type:"text",shape:"circle",children:e(k,{})})}),e(c,{to:`/dashboard/product/edit/${a.key}`,children:e(s,{type:"text",danger:!0,shape:"circle",children:e(I,{})})}),e(V,{title:"Delete the product",onConfirm:()=>Y(a.key),okText:"Yes",cancelText:"No",children:e(s,{type:"text",shape:"circle",className:"ml-2",children:e(E,{})})}),e(s,{type:"text",shape:"circle",className:"ml-2",children:e(te,{type:"success"})})]})]})}}}],Q=f&&f.map(t=>({key:t._id,name:t.name,trailer:t.trailer?"true":"false",category:o&&o.data.map(a=>{if(a._id===t.category)return a.name}),view:e(v,{color:"#2db7f5",children:t.view}),sidebar:y&&y.map((a,ge)=>a._id===t.typeId&&a.name),seri:t.seri,copyright:t.copyright,isActive:t.server2||t.dailyMotionServer?e(v,{color:"success",children:"Video active"}):e(v,{color:"error",children:"No video"}),options:t.options,country:t.country?t.country:"null",year:t.year?t.year:"null",isApproved:t.isApproved,idCategory:t.category,option:[e(s,{children:"Add Option"})]}));return l(d,{children:[l(ne,{gutter:[10,10],align:"middle",style:{marginBottom:"10px"},children:[e(n,{children:e(V,{title:"Delete the products",onConfirm:B,okText:"Yes",cancelText:"No",children:e(s,{icon:e(E,{}),className:"flex items-center",children:"Delete"})})}),e(n,{children:e(c,{to:"/dashboard/product/add",children:e(s,{icon:e(S,{}),type:"primary",className:"flex items-center",children:"Add Product"})})}),e(n,{children:e(c,{icon:e(S,{}),to:"/dashboard/product/creacting",children:e(s,{className:"bg-green-400 ",children:"Add Multiple"})})}),e(n,{children:e(c,{to:"/dashboard/product/add",children:e(s,{className:"bg-yellow-400",children:"Export PDF"})})}),e(n,{children:e(c,{to:"/dashboard/product/add",children:e(s,{className:"bg-purple-500",shape:"round",children:"Export Excel"})})}),e(n,{children:e(L,{placeholder:"Category",onChange:R,style:{width:300},options:o&&(o==null?void 0:o.data.map((t,a)=>({label:t.name,value:t._id})))})}),e(n,{children:e(L,{placeholder:"Approval",onChange:F,style:{width:300},options:[{value:!0,label:"Approve"},{value:!1,label:"Approved"}],children:void 0})}),e(n,{children:e("div",{className:"form-outline",children:e("input",{type:"search",placeholder:"search...",className:"form-control p-2 rounded bg-[#fff] shadow-sm",onChange:t=>_(t.target.value)})})}),e(n,{children:l(s,{onClick:()=>q(),icon:e(S,{}),danger:!0,className:"flex items-center",children:[e(X,{}),"Clear Products Redis"]})})]}),e(Z,{spinning:h,delay:void 0,children:e(ce,{rowSelection:$,expandable:{expandedRowRender:t=>e(d,{children:t.option})},columns:H,dataSource:Q,scroll:{x:1500,y:1e3},pagination:{defaultPageSize:40,showSizeChanger:!0,pageSizeOptions:["40","80","120"],current:u,onChange:j,total:p}})})]})}),Ce=()=>{const{product:i,length:p}=N(y=>y.product.value),h=N(y=>y.product.isLoading),u=r.exports.useMemo(()=>i,[i]),m=r.exports.useMemo(()=>p,[p]),o=r.exports.useMemo(()=>h,[h]);return e(d,{children:e(ye,{product:u,isLoading:o,length:m})})};export{Ce as default};