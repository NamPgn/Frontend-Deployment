import{n as p,ao as g,k as m,r as f,aJ as x,j as e,as as d,d as n,ap as l,e as r,at as a,az as y,aK as A,aL as D,Q as i}from"./index.88926157.js";import{I as S}from"./index.bcb1b361.js";import{D as b}from"./DownloadOutlined.fdf2aec9.js";const k=()=>{const t=p(g),o=m();f.exports.useEffect(()=>{o(x())},[]);const u=async s=>{const c=await o(D(s));c.payload&&c.payload.success?i.success("Successfully deleted"):i.error("Error deleting")},h=t&&t.map(s=>({key:s._id,name:s.username,image:e(S,{width:150,height:200,style:{objectFit:"cover"},src:s.image}),status:s.isActive==0?e(d,{color:"success",children:"Active"}):e(d,{color:"error",children:"No Active"}),role:s.role,action:n(l,{children:[e(r,{to:`${s._id}/edit`,children:e(a,{className:"mr-2",danger:!0,icon:e(b,{}),children:"Edit"})}),e(a,{onClick:()=>u(s._id),children:"Delete"})]})}));return n(l,{children:[e(r,{to:"/dashboard/user/add",children:e(a,{children:"Add User"})}),e(r,{to:"/dashboard/user/creatingUser",children:e(a,{style:{margin:"10px 10px"},children:"Import Excel"})}),e(r,{to:"/dashboard/product/add",children:e(a,{children:"Export PDF"})}),e(y,{columns:A,dataSource:h,pagination:{defaultPageSize:20,showSizeChanger:!0,pageSizeOptions:["20","40","60"]}})]})};export{k as default};