import{l as i,g as m,r as u,be as p,j as t,aj as h,c as r,b as g,p as n,E as f,F as y,H as C,bf as S,bg as b,Q as c}from"./index.0109ef6d.js";import{M as D}from"./index.f3ed3d98.js";import{D as M}from"./DeleteOutlined.ffb9a165.js";const x=s=>s.comment.value,I=()=>{const s=i(x),a=m();u.exports.useEffect(()=>{a(p())},[]);const d=async(e,o)=>{(await a(b({commentId:e,productId:o}))).payload?c.success("Delete comment successfully"):c.error("Error deleting comment")},l=s&&s.filter(e=>e.user!==null).map((e,o)=>(console.log(e),{key:e._id,stt:o+1,name:e.commentContent,user:e.user.username,image:t(h,{width:60,height:80,style:{objectFit:"cover"},src:e.user.image}),product:t(r,{to:"/d/"+e.product._id+`?c=${e.product.category}`,children:e.product.name+" "+e.product.seri}),permission:e.role==0?"User":"Admin",day:e.createdAt.toString("DD-MM-YYYY"),action:g("span",{children:[t(r,{to:`/dashboard/comment/${e._id}`,children:t(n,{danger:!0,shape:"circle",children:t(f,{})})}),t(D,{title:"Delete the product",onConfirm:()=>d(e._id,e.product._id),okText:"Yes",cancelText:"No",children:t(n,{shape:"circle",className:"ml-2",children:t(M,{})})})]})}));return t(y,{children:t(C,{columns:S,dataSource:l,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})};export{I as default};