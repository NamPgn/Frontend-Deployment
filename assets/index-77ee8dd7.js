import{r as n,j as e}from"./vendor-0710fd16.js";import{g as o,e as d,ag as i,c as l,q as t,ae as u,s as p,ah as x}from"./index-b2596b2e.js";const h=a=>a.cart.value,m=()=>{const a=o(h),r=d();n.useEffect(()=>{r(i())},[]);const c=a&&a.filter(s=>s.user!==null).map((s,g)=>({key:s._id,stt:s._id,ProductName:s.product?s.product.name+" "+s.product.seri:"",user:s.user.username,permission:s.user.role==0?"User":"Admin",action:e.jsxs("span",{children:[e.jsx(l,{to:`/dashboard/trailerUrl/${s._id}`,children:e.jsx(t,{danger:!0,children:"Edit"})}),e.jsx(t,{onClick:()=>r(u(s._id)),className:"ml-2",children:"Del"})]})}));return e.jsx("div",{children:e.jsx(p,{columns:x,dataSource:c,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})};export{m as default};