import{r as u,j as e,a$ as h,b0 as x,as as d}from"./vendor-172e24aa.js";import{u as p,I as j,a as g,J as m,b as n,h as r,c as a,i as f,K as y,O as b}from"./index-4cc36f73.js";const S=()=>{const t=p(j),c=g();u.useEffect(()=>{c(m())},[]);const l=async s=>{const o=await c(b(s));o.payload&&o.payload.success?d.success("Successfully deleted"):d.error("Error deleting")},i=t&&t.map(s=>({key:s._id,name:s.username,email:s.email,image:e.jsx(h,{width:150,height:200,style:{objectFit:"cover"},src:s.image}),status:s.isActive==0?e.jsx(n,{color:"success",children:"Active"}):e.jsx(n,{color:"error",children:"No Active"}),role:s.role,action:e.jsxs(e.Fragment,{children:[e.jsx(r,{to:`${s._id}/edit`,children:e.jsx(a,{className:"mr-2",danger:!0,icon:e.jsx(x,{}),children:"Edit"})}),e.jsx(a,{onClick:()=>l(s._id),children:"Delete"})]})}));return e.jsxs(e.Fragment,{children:[e.jsx(r,{to:"/dashboard/user/add",children:e.jsx(a,{children:"Add User"})}),e.jsx(r,{to:"/dashboard/user/creatingUser",children:e.jsx(a,{style:{margin:"10px 10px"},children:"Import Excel"})}),e.jsx(r,{to:"/dashboard/product/add",children:e.jsx(a,{children:"Export PDF"})}),e.jsx(f,{columns:y,dataSource:i,pagination:{defaultPageSize:20,showSizeChanger:!0,pageSizeOptions:["20","40","60"]}})]})};export{S as default};