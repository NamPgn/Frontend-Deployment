import{e as d,f as c,r as m,au as l,j as t,I as u,b as p,c as y,B as n,av as g,F as h,T as k}from"./index.94ba3f66.js";import{h as x}from"./moment.9709ab41.js";const I=a=>a.comment.value,A=()=>{const a=d(I),s=c();m.exports.useEffect(()=>{s(l())},[]);const r=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Product",dataIndex:"product",key:"product"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Time",dataIndex:"time",key:"time"},{title:"Action",dataIndex:"action",key:"action"}],i=a?a.map((e,o)=>({key:e._id,stt:o+1,name:e.commentContent,user:e.user.username+" T\u1EADp: ",image:t(u,{width:60,height:80,style:{objectFit:"cover"},src:e.user.image}),product:"product",permission:e.role==0?"User":"Admin",Time:x(e.createdAt).format("LTS DD-MM-YYYY"),action:p("span",{children:[t(y,{to:`/admin/trailerUrl/${e._id}`,children:t(n,{style:{background:"#1677ff"},type:"primary",children:"Edit"})}),t(n,{onClick:()=>s(g(e._id)),style:{background:"#dc3545"},type:"primary",className:"ml-2",children:"C\xFAt"})]})})):"";return t(h,{children:t(k,{columns:r,dataSource:i,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})};export{A as default};