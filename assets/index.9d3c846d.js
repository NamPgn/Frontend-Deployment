import{n as p,a9 as g,g as m,r as f,aa as x,j as e,I as d,d as l,K as n,e as r,J as a,Y as y,ab as A,ac as b,a1 as i}from"./index.fd71ae88.js";import{I as D}from"./index.39c734e1.js";import{D as S}from"./DownloadOutlined.c8c7fcc1.js";const v=()=>{const t=p(g),o=m();f.exports.useEffect(()=>{o(x())},[]);const u=async s=>{const c=await o(b(s));c.payload&&c.payload.success?i.success("Successfully deleted"):i.error("Error deleting")},h=t&&t.map(s=>({key:s._id,name:s.username,email:s.email,image:e(D,{width:150,height:200,style:{objectFit:"cover"},src:s.image}),status:s.isActive==0?e(d,{color:"success",children:"Active"}):e(d,{color:"error",children:"No Active"}),role:s.role,action:l(n,{children:[e(r,{to:`${s._id}/edit`,children:e(a,{className:"mr-2",danger:!0,icon:e(S,{}),children:"Edit"})}),e(a,{onClick:()=>u(s._id),children:"Delete"})]})}));return l(n,{children:[e(r,{to:"/dashboard/user/add",children:e(a,{children:"Add User"})}),e(r,{to:"/dashboard/user/creatingUser",children:e(a,{style:{margin:"10px 10px"},children:"Import Excel"})}),e(r,{to:"/dashboard/product/add",children:e(a,{children:"Export PDF"})}),e(y,{columns:A,dataSource:h,pagination:{defaultPageSize:20,showSizeChanger:!0,pageSizeOptions:["20","40","60"]}})]})};export{v as default};
