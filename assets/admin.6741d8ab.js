import{g as o,l as i,aq as n,r as c,ar as d,j as a,ak as m,as as p,at as u}from"./index.a3a7a6a2.js";import{T as l}from"./index.a1a6619e.js";const A=()=>{const s=o(),t=i(n);c.exports.useEffect(()=>{s(d())},[]);const r=t.map(e=>({key:e._id,name:e.username,role:e.role==1?"Admin":"Super Admin",status:a(l,{color:"success",children:"Active"}),tags:["nice","developer"],image:a(m,{width:150,height:200,style:{objectFit:"cover"},src:e.image})}));return a(p,{columns:u,dataSource:r,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","20","30"]}})};export{A as default};
