import{f as m,u as d,r as c,bz as l,j as t,b as u,L as p,B as r,bA as y,F as g}from"./index.49430263.js";import{h}from"./moment.9709ab41.js";import{I as k}from"./index.9b2533fc.js";import{T as x}from"./Table.439fd4d9.js";import"./CloseOutlined.b23ae7b1.js";const f=a=>a.comment.value,T=()=>{const a=m(f),s=d();c.exports.useEffect(()=>{s(l())},[]);const n=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Product",dataIndex:"product",key:"product"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Time",dataIndex:"time",key:"time"},{title:"Action",dataIndex:"action",key:"action"}],i=a?a.map((e,o)=>({key:e._id,stt:o+1,name:e.commentContent,user:e.user.username+" T\u1EADp: ",image:t(k,{width:60,height:80,style:{objectFit:"cover"},src:e.user.image}),product:"product",permission:e.role==0?"User":"Admin",Time:h(e.createdAt).format("LTS DD-MM-YYYY"),action:u("span",{children:[t(p,{to:`/admin/trailerUrl/${e._id}`,children:t(r,{style:{background:"#1677ff"},type:"primary",children:"Edit"})}),t(r,{onClick:()=>s(y(e._id)),style:{background:"#dc3545"},type:"primary",className:"ml-2",children:"C\xFAt"})]})})):"";return t(g,{children:t(x,{columns:n,dataSource:i,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})};export{T as default};
