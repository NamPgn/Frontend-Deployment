import{r as i,j as e,aS as re,a5 as oe,af as D,aT as ie,aU as S,aV as ne,aW as I,aX as ce,aY as le,aZ as de,as as c,a_ as pe,a$ as xe,b0 as he,E as k,al as ue}from"./vendor-c6feb40d.js";import{u as A,A as ge,M as ye,a as me,g as L,b as M,c as a,d as je,e as r,f as m,h as l,i as fe,j as we,s as be,k as Ce,l as ve,m as Se,n as ke,o as j,p as f,q as Ae,r as Me,t as Ee,v as Ne}from"./index-3a949f9b.js";import{P as Pe}from"./index-3e4929b2.js";const R=i.memo(({defaultValue:o,placeholder:w,style:g,options:b,...h})=>e.jsx(re,{placeholder:w,defaultValue:o,style:g,options:b,allowClear:!0,...h})),Fe=i.memo(()=>{const o=A(t=>t.product.value),w=A(t=>t.product.isLoading),[g,b]=i.useState(1),h=A(t=>t.category.category),[F,C]=i.useState(!1),{seri:E}=i.useContext(ge)||[],{user:v}=i.useContext(ye),[Oe,V]=i.useState(""),[d,p]=i.useState(!1),[y,U]=i.useState([]),x=me();i.useEffect(()=>{x(L(g))},[d]);const Y=t=>{x(we(t))},_=t=>{x(be(t))},z=t=>{b(t),x(L(t))},B=async()=>{(await Ce(y)).data.success==!0?(p(!d),c.success("Delete products successfully")):c.error("Error deleting products")},G=async()=>{(await ve(y)).data.success==!0?(p(!d),c.success("Approved Products Successfully")):c.error("Error deleting products")},$=async()=>{(await Se(y)).data.success==!0?(p(!d),c.success("Edit Products Successfully")):c.error("Error deleting products")},q=async t=>{(await x(Me(t))).payload.success?c.success("Delete product successfully"):c.error("Error deleting product")},K=t=>{V(t)},H={selectedRowKeys:y,onChange:t=>{U(t)}},Q=async t=>{const s=await Ee(t);s.data.success==!0?(j(s.data.message),p(!d)):f("Lỗi rồi!")},W=async t=>{const s=await Ne(t);s.data.success==!0?(j(s.data.message),p(!d)):f("Lỗi rồi!")},X=async()=>{const t=await ke();t.data.suscess==!0?j(t.data.message):f(t.data.message)},Z=()=>{C(!0)},J=()=>{C(!1)},ee=async()=>{(await x(Ae())).meta.requestStatus=="fulfilled"?(p(!d),C(!1),j("Suscess")):f("Error")},te=async()=>{try{const t=await fetch("http://localhost:8001/api/products/export/excel",{method:"GET",headers:{"Content-Type":"application/json"}});if(t.ok){const s=await t.blob(),u=window.URL.createObjectURL(s),n=document.createElement("a");n.href=u,n.download="data.xlsx",document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(u)}else console.error("Failed to download file")}catch(t){console.error("Error downloading the file:",t)}},se=[{title:"Name",dataIndex:"name",key:"name",width:120},{title:"Slug",dataIndex:"slug",key:"slug",width:200},{title:"Category",key:"category",dataIndex:"category",width:150},{title:"View",key:"view",dataIndex:"view",width:100},{title:"Seri",key:"seri",dataIndex:"seri",width:100},{title:"Copyright",key:"copyright",dataIndex:"copyright",width:100},{title:"Active",dataIndex:"isActive",key:"isActive",width:90},{title:"Trailer",dataIndex:"trailer",key:"trailer",width:100},{title:"Country",dataIndex:"country",key:"country",width:100},{title:"Year",dataIndex:"year",key:"year",width:100},{title:"Options",dataIndex:"options",key:"options",width:100},{title:"Sidebar",key:"sidebar",dataIndex:"sidebar",width:100},{title:"Action",key:"action",dataIndex:"action",width:140,fixed:"right",render:(t,s)=>{switch(v==null?void 0:v.role){case 0:return e.jsx(e.Fragment,{children:e.jsx(l,{to:"/",children:e.jsx(a,{type:"text",shape:"circle",children:e.jsx(k,{})})})});case 1:return e.jsxs(e.Fragment,{children:[e.jsx(l,{to:"/",children:e.jsx(a,{type:"text",shape:"circle",children:e.jsx(k,{})})}),e.jsx(l,{to:`/dashboard/product/edit/${s.key}`,children:e.jsx(a,{type:"text",danger:!0,shape:"circle",children:e.jsx(S,{})})})]});case 2:return e.jsxs(e.Fragment,{children:[(s==null?void 0:s.isApproved)==!0?e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"flex items-center mb-2",icon:e.jsx(pe,{}),ghost:!0,type:"text",style:{color:"#000"},disabled:s.isApproved==!0,children:"Approved"}),e.jsx(a,{onClick:()=>W(s.key),icon:e.jsx(xe,{}),className:"flex items-center w-full justify-center mb-2",danger:!0,children:"Approval"})]}):e.jsx(e.Fragment,{children:e.jsx(a,{onClick:()=>Q(s.key),icon:e.jsx(he,{}),className:"flex items-center w-full justify-center text-white bg-blue-500",children:"Approve"})}),e.jsxs("div",{className:"flex",children:[e.jsx(l,{to:"/d/"+s.slug,children:e.jsx(a,{type:"text",shape:"circle",children:e.jsx(k,{})})}),e.jsx(l,{to:`/dashboard/product/edit/${s.slug}`,children:e.jsx(a,{type:"text",danger:!0,shape:"circle",children:e.jsx(S,{})})}),e.jsx(m,{title:"Delete the product",onConfirm:()=>q(s.key),okText:"Yes",cancelText:"No",children:e.jsx(a,{type:"text",shape:"circle",className:"ml-2",children:e.jsx(D,{})})}),e.jsx(a,{type:"text",shape:"circle",className:"ml-2",children:e.jsx(ue,{type:"success"})})]})]})}}}],ae=(o==null?void 0:o.data)&&(o==null?void 0:o.data.map(t=>{var s,u,n,N,P,O;return{key:t._id,name:t.name,slug:t.slug,trailer:t.trailer?"true":"false",category:(s=t==null?void 0:t.category)==null?void 0:s.name,view:e.jsx(M,{color:"#2db7f5",children:t.view}),sidebar:E&&E.map((T,De)=>T._id===t.typeId&&T.name),seri:t.seri,copyright:t.copyright,isActive:t.server2||t.dailyMotionServer?e.jsx(M,{color:"success",children:"Video active"}):e.jsx(M,{color:"error",children:"No video"}),options:(u=t.category)==null?void 0:u.lang,country:(n=t.category)!=null&&n.country?(N=t.category)==null?void 0:N.country:"null",year:(P=t.category)!=null&&P.year?(O=t.category)==null?void 0:O.year:"null",isApproved:t.isApproved,idCategory:t.category,option:[e.jsx(a,{children:"Add Option"})]}}));return e.jsxs(e.Fragment,{children:[e.jsx(Pe,{title:"List Episode",subtitle:"List Episode"}),e.jsx(a,{className:"mb-2 bg-blue-500 text-white",onClick:Z,children:"Open"}),e.jsx(oe,{title:"Làm gì thì làm đi :))",onClose:J,open:F,children:e.jsxs(je,{gutter:[10,2],align:"middle",style:{marginBottom:"10px"},className:"flex flex-wrap items-center space-y-4",children:[e.jsx(r,{children:e.jsx(m,{title:"Delete The Movies",onConfirm:B,okText:"Yes",cancelText:"No",children:e.jsx(a,{icon:e.jsx(D,{}),className:"flex items-center bg-gradient-to-br from-pink-500 to-orange-400 text-white",children:"Delete Multiple Movies"})})}),e.jsx(r,{children:e.jsx(m,{title:"Approved Multiple Movies",onConfirm:G,okText:"Yes",cancelText:"No",children:e.jsx(a,{className:"flex items-center bg-amber-500 text-white",icon:e.jsx(ie,{}),children:"Approved Multiple"})})}),e.jsx(r,{children:e.jsx(m,{title:"Edit Multiple Movies",onConfirm:$,okText:"Yes",cancelText:"No",children:e.jsx(a,{icon:e.jsx(S,{}),className:"flex items-center bg-gradient-to-br from-purple-600 to-blue-500 text-white",children:"Encode Dailymotion Server Episode"})})}),e.jsx(r,{children:e.jsx(l,{to:"/dashboard/product/add",children:e.jsx(a,{icon:e.jsx(ne,{}),className:"flex items-center bg-blue-500 text-white",children:"Add Movie"})})}),e.jsx(r,{children:e.jsx(l,{to:"/dashboard/product/creacting",children:e.jsx(a,{className:"flex items-center bg-purple-500 text-white",icon:e.jsx(I,{}),children:"Add Multiple Movies"})})}),e.jsx(r,{children:e.jsx(l,{to:"/dashboard/product/export-pdf",children:e.jsx(a,{className:"bg-yellow-400 text-white",children:"Export PDF"})})}),e.jsx(r,{children:e.jsx(a,{icon:e.jsx(ce,{}),className:" bg-green-600 flex items-center",onClick:()=>te(),children:"Export Excel"})}),e.jsx(r,{children:e.jsx(R,{placeholder:"Category",onChange:Y,style:{width:300},options:h==null?void 0:h.data.map(t=>({label:t.name,value:t._id}))})}),e.jsx(r,{children:e.jsx(R,{placeholder:"Approval",onChange:K,style:{width:300},options:[{value:!0,label:"Approve"},{value:!1,label:"Not Approved"}]})}),e.jsx(r,{children:e.jsx("div",{className:"form-outline",children:e.jsx("input",{type:"search",placeholder:"search...",className:"form-control p-2 rounded bg-white shadow-sm w-full",onChange:t=>_(t.target.value)})})}),e.jsx(r,{children:e.jsx(a,{onClick:X,icon:e.jsx(le,{}),className:"flex items-center text-white bg-red-600",children:"Clear Products Redis"})}),e.jsx(r,{children:e.jsxs("button",{onClick:()=>ee(),type:"button",className:"gap-2 flex items-center py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100",children:[e.jsx(I,{}),"Generate Episode Movie"]})})]})}),e.jsx(de,{spinning:w,delay:void 0,children:e.jsx(fe,{rowSelection:H,expandable:{expandedRowRender:t=>e.jsx(e.Fragment,{children:t.option})},columns:se,dataSource:ae,scroll:{x:1500,y:1e3},pagination:{defaultPageSize:40,showSizeChanger:!0,pageSizeOptions:["40","80","120"],current:g,onChange:z,total:o==null?void 0:o.totalCount}})})]})});export{Fe as default};