import{r as n,j as s}from"./vendor-2321f3a2.js";import{u as o,a as i,al as l,h as d,c as t,aj as u,i as p,am as x}from"./index-783d9d7f.js";const h=r=>r.cart.value,S=()=>{const r=o(h),e=i();n.useEffect(()=>{e(l())},[]);const c=r&&r.filter(a=>a.user!==null).map((a,j)=>({key:a._id,stt:a._id,ProductName:a.product?a.product.name+" "+a.product.seri:"",user:a.user.username,permission:a.user.role==0?"User":"Admin",action:s.jsxs("span",{children:[s.jsx(d,{to:`/dashboard/trailerUrl/${a._id}`,children:s.jsx(t,{danger:!0,children:"Edit"})}),s.jsx(t,{onClick:()=>e(u(a._id)),className:"ml-2",children:"Del"})]})}));return s.jsx("div",{children:s.jsx(p,{columns:x,dataSource:c,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})};export{S as default};
