import{r as s,j as e,D as P,_ as g,F as ee,n as N,G as te,i as ae,g as re,H as D,I as A,J as r,d as h,K as p,O as se,Q as l,T as L,V as z,e as o,W as O,X as ne,Y as ce,Z as ie,$ as le,a0 as oe,a1 as v,a2 as de,w as b,x as k,a3 as pe,a4 as M,E,a5 as he,a6 as ue,a7 as ye,a8 as ge}from"./index.fd71ae88.js";var me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"};const xe=me;var R=function(n,c){return e(P,{...g(g({},n),{},{ref:c,icon:xe})})};R.displayName="ClearOutlined";const fe=s.exports.forwardRef(R);var Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"};const ve=Ce;var $=function(n,c){return e(P,{...g(g({},n),{},{ref:c,icon:ve})})};$.displayName="CloseCircleOutlined";const we=s.exports.forwardRef($);var Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"};const Ae=Se;var T=function(n,c){return e(P,{...g(g({},n),{},{ref:c,icon:Ae})})};T.displayName="SendOutlined";const Oe=s.exports.forwardRef(T),H=s.exports.memo(({defaultValue:i,placeholder:n,style:c,options:u,...m})=>e(ee,{placeholder:n,defaultValue:i,style:c,options:u,allowClear:!0,...m})),be=s.exports.memo(({product:i,length:n,isLoading:c})=>{const[u,m]=s.exports.useState(9),d=N(t=>t.category.category),{seri:y}=s.exports.useContext(te)||[],{user:w}=s.exports.useContext(ae),[I,_]=s.exports.useState(""),[f,S]=s.exports.useState(!1),[V,j]=s.exports.useState([]),x=re();let C=i;s.exports.useEffect(()=>{x(D(u))},[f]);const B=t=>{x(ie(t))},F=t=>{x(le(t))},Y=t=>{m(t),x(D(t))};I&&(C=i.filter(t=>t.isApproved==!1),I=="Select"&&i.map(t=>C.push(t)));const K=async()=>{(await oe(V)).data.success==!0?(S(!f),v.success("Delete products successfully")):v.error("Error deleting products")},Q=async t=>{(await x(ue(t))).payload.success?v.success("Delete product successfully"):v.error("Error deleting product")},G=t=>{_(t)},J={selectedRowKeys:V,onChange:t=>{j(t)}},U=async t=>{const a=await ye(t);a.data.success==!0?(b(a.data.message),S(!f)):k("L\u1ED7i r\u1ED3i!")},W=async t=>{const a=await ge(t);a.data.success==!0?(b(a.data.message),S(!f)):k("L\u1ED7i r\u1ED3i!")},X=async()=>{const t=await de();t.data.suscess==!0?b(t.data.message):k(t.data.message)},Z=[{title:"Name",dataIndex:"name",key:"name",width:200},{title:"Category",key:"category",dataIndex:"category",width:200},{title:"View",key:"view",dataIndex:"view",width:100},{title:"Seri",key:"seri",dataIndex:"seri",width:100},{title:"Copyright",key:"copyright",dataIndex:"copyright",width:100},{title:"Active",dataIndex:"isActive",key:"isActive",width:90},{title:"Trailer",dataIndex:"trailer",key:"trailer",width:100},{title:"Country",dataIndex:"country",key:"country",width:100},{title:"Year",dataIndex:"year",key:"year",width:100},{title:"Options",dataIndex:"options",key:"options",width:100},{title:"Sidebar",key:"sidebar",dataIndex:"sidebar",width:100},{title:"Action",key:"action",dataIndex:"action",width:140,fixed:"right",render:(t,a)=>{switch(w==null?void 0:w.role){case 0:return e(p,{children:e(o,{to:"/",children:e(r,{type:"text",shape:"circle",children:e(M,{})})})});case 1:return h(p,{children:[e(o,{to:"/",children:e(r,{type:"text",shape:"circle",children:e(M,{})})}),e(o,{to:`/dashboard/product/edit/${a.key}`,children:e(r,{type:"text",danger:!0,shape:"circle",children:e(E,{})})})]});case 2:return h(p,{children:[(a==null?void 0:a.isApproved)==!0?h(p,{children:[e(r,{className:"flex items-center mb-2",icon:e(pe,{}),ghost:!0,type:"text",style:{color:"#000"},disabled:a.isApproved==!0,children:"Approved"}),e(r,{onClick:()=>W(a.key),icon:e(we,{}),className:"flex items-center w-full justify-center mb-2",danger:!0,children:"Approval"})]}):e(p,{children:e(r,{onClick:()=>U(a.key),icon:e(Oe,{}),className:"flex items-center w-full justify-center",type:"primary",children:"Approve"})}),h("div",{className:"flex",children:[e(o,{to:"/d/"+a.key+"?c="+a.idCategory,children:e(r,{type:"text",shape:"circle",children:e(M,{})})}),e(o,{to:`/dashboard/product/edit/${a.key}`,children:e(r,{type:"text",danger:!0,shape:"circle",children:e(E,{})})}),e(L,{title:"Delete the product",onConfirm:()=>Q(a.key),okText:"Yes",cancelText:"No",children:e(r,{type:"text",shape:"circle",className:"ml-2",children:e(z,{})})}),e(r,{type:"text",shape:"circle",className:"ml-2",children:e(he,{type:"success"})})]})]})}}}],q=C&&C.map(t=>({key:t._id,name:t.name,trailer:t.trailer?"true":"false",category:d&&d.data.map(a=>{if(a._id===t.category)return a.name}),view:e(A,{color:"#2db7f5",children:t.view}),sidebar:y&&y.map((a,Me)=>a._id===t.typeId&&a.name),seri:t.seri,copyright:t.copyright,isActive:t.server2||t.dailyMotionServer?e(A,{color:"success",children:"Video active"}):e(A,{color:"error",children:"No video"}),options:t.options,country:t.country?t.country:"null",year:t.year?t.year:"null",isApproved:t.isApproved,idCategory:t.category,option:[e(r,{children:"Add Option"})]}));return h(p,{children:[h(se,{gutter:[10,10],align:"middle",style:{marginBottom:"10px"},children:[e(l,{children:e(L,{title:"Delete the products",onConfirm:K,okText:"Yes",cancelText:"No",children:e(r,{icon:e(z,{}),className:"flex items-center",children:"Delete"})})}),e(l,{children:e(o,{to:"/dashboard/product/add",children:e(r,{icon:e(O,{}),type:"primary",className:"flex items-center",children:"Add Product"})})}),e(l,{children:e(o,{icon:e(O,{}),to:"/dashboard/product/creacting",children:e(r,{className:"bg-green-400 ",children:"Add Multiple"})})}),e(l,{children:e(o,{to:"/dashboard/product/add",children:e(r,{className:"bg-yellow-400",children:"Export PDF"})})}),e(l,{children:e(o,{to:"/dashboard/product/add",children:e(r,{className:"bg-purple-500",shape:"round",children:"Export Excel"})})}),e(l,{children:e(H,{placeholder:"Category",onChange:B,style:{width:300},options:d&&(d==null?void 0:d.data.map((t,a)=>({label:t.name,value:t._id})))})}),e(l,{children:e(H,{placeholder:"Approval",onChange:G,style:{width:300},options:[{value:!0,label:"Approve"},{value:!1,label:"Approved"}],children:void 0})}),e(l,{children:e("div",{className:"form-outline",children:e("input",{type:"search",placeholder:"search...",className:"form-control p-2 rounded bg-[#fff] shadow-sm",onChange:t=>F(t.target.value)})})}),e(l,{children:h(r,{onClick:()=>X(),icon:e(O,{}),danger:!0,className:"flex items-center",children:[e(fe,{}),"Clear Products Redis"]})})]}),e(ne,{spinning:c,delay:void 0,children:e(ce,{rowSelection:J,expandable:{expandedRowRender:t=>e(p,{children:t.option})},columns:Z,dataSource:q,scroll:{x:1500,y:1e3},pagination:{defaultPageSize:40,showSizeChanger:!0,pageSizeOptions:["40","80","120"],current:u,onChange:Y,total:n}})})]})}),Pe=()=>{const{product:i,length:n}=N(y=>y.product.value),c=N(y=>y.product.isLoading),u=s.exports.useMemo(()=>i,[i]),m=s.exports.useMemo(()=>n,[n]),d=s.exports.useMemo(()=>c,[c]);return e(p,{children:e(be,{product:u,isLoading:d,length:m})})};export{Pe as default};
