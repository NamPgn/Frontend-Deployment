import{r as p,j as s,a$ as h,aT as x,af as g,as as d}from"./vendor-172e24aa.js";import{u as f,a as j,ag as C,h as i,c as l,f as S,i as y,ah as A,ai as D}from"./index-63f2f19c.js";const M=t=>t.comment.value,I=()=>{const t=f(M),r=j();p.useEffect(()=>{r(C())},[]);const m=async(e,a)=>{(await r(D({commentId:e,productId:a}))).payload?d.success("Delete comment successfully"):d.error("Error deleting comment")},u=t&&t.filter(e=>e.user!==null).map((e,a)=>{var n,o,c;return{key:e._id,stt:a+1,name:e.commentContent,user:e.user.username,image:s.jsx(h,{width:60,height:80,style:{objectFit:"cover"},src:e.user.image}),product:s.jsx(i,{to:"/d/"+((n=e.products)==null?void 0:n.slug),children:((o=e.products)==null?void 0:o.name)+" "+((c=e.products)==null?void 0:c.seri)}),permission:e.role==0?"User":"Admin",day:e.createdAt.toString("DD-MM-YYYY"),action:s.jsxs(s.Fragment,{children:[s.jsx(i,{to:`/dashboard/comment/${e._id}`,children:s.jsx(l,{danger:!0,shape:"circle",children:s.jsx(x,{})})}),s.jsx(S,{title:"Delete the product",onConfirm:()=>m(e._id,e.product._id),okText:"Yes",cancelText:"No",children:s.jsx(l,{shape:"circle",className:"ml-2",children:s.jsx(g,{})})})]})}});return s.jsx(s.Fragment,{children:s.jsx(y,{columns:A,dataSource:u,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})};export{I as default};