import{n as m,g as u,r as p,c8 as h,j as t,e as o,d as g,K as n,J as r,E as f,T as y,V as C,Y as S,c9 as x,ca as A,a1 as d}from"./index.678d364b.js";import{I as D}from"./index.cbd7bb20.js";const M=s=>s.comment.value,E=()=>{const s=m(M),c=u();p.exports.useEffect(()=>{c(h())},[]);const l=async(e,a)=>{(await c(A({commentId:e,productId:a}))).payload?d.success("Delete comment successfully"):d.error("Error deleting comment")},i=s&&s.filter(e=>e.user!==null).map((e,a)=>({key:e._id,stt:a+1,name:e.commentContent,user:e.user.username,image:t(D,{width:60,height:80,style:{objectFit:"cover"},src:e.user.image}),product:t(o,{to:"/d/"+e.product._id+`?c=${e.product.category}`,children:e.product.name+" "+e.product.seri}),permission:e.role==0?"User":"Admin",day:e.createdAt.toString("DD-MM-YYYY"),action:g(n,{children:[t(o,{to:`/dashboard/comment/${e._id}`,children:t(r,{danger:!0,shape:"circle",children:t(f,{})})}),t(y,{title:"Delete the product",onConfirm:()=>l(e._id,e.product._id),okText:"Yes",cancelText:"No",children:t(r,{shape:"circle",className:"ml-2",children:t(C,{})})})]})}));return t(n,{children:t(S,{columns:x,dataSource:i,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})};export{E as default};
