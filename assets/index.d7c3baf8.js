import{l as d,g as o,r as i,bX as n,j as e,d as l,e as u,p as t,bS as p,K as h,bY as g}from"./index.9a3f2aa5.js";import{I as f}from"./index.d0ec3d12.js";const m=r=>r.cart.value,j=()=>{const r=d(m),s=o();i.exports.useEffect(()=>{s(n())},[]);const c=r&&r.filter(a=>a.user!==null).map((a,b)=>({key:a._id,stt:a._id,ProductName:a.product?a.product.name+" "+a.product.seri:"",user:a.user.username,image:e(f,{width:60,height:80,style:{objectFit:"cover"},src:a.product?a.product.image:"https://i.pinimg.com/736x/0d/56/7a/0d567a768f35faab85b96f84691235d3.jpg"}),permission:a.user.role==0?"User":"Admin",action:l("span",{children:[e(u,{to:`/dashboard/trailerUrl/${a._id}`,children:e(t,{danger:!0,children:"Edit"})}),e(t,{onClick:()=>s(p(a._id)),className:"ml-2",children:"Del"})]})}));return e("div",{children:e(h,{columns:g,dataSource:c,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})};export{j as default};
