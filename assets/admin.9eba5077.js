import{g as o,l as i,aI as n,r as c,aJ as d,j as a,T as m,aK as p,aL as u}from"./index.bf3385a7.js";import{I as l}from"./index.e51e4306.js";const A=()=>{const s=o(),t=i(n);c.exports.useEffect(()=>{s(d())},[]);const r=t.map(e=>({key:e._id,name:e.username,role:e.role==1?"Admin":"Super Admin",status:a(m,{color:"success",children:"Active"}),tags:["nice","developer"],image:a(l,{width:150,height:200,style:{objectFit:"cover"},src:e.image})}));return a(p,{columns:u,dataSource:r,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","20","30"]}})};export{A as default};
