import{bC as o,j as t,b as n,L as c,B as r}from"./index.73504b2c.js";import{h as m}from"./moment.9709ab41.js";import{I as l}from"./index.a7267d7a.js";import{T as u}from"./Table.7633ec64.js";const f=()=>{const{data:a=[],error:p,isLoading:g}=o(),i=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Time",dataIndex:"time",key:"time"},{title:"Action",dataIndex:"action",key:"action"}],d=a?a.map((e,s)=>({key:e._id,stt:s+1,ProductName:e.product.name+" "+e.product.seri,user:e.user.username,image:t(l,{width:60,height:80,style:{objectFit:"cover"},src:e.product.image?e.product.image:"https://i.pinimg.com/736x/0d/56/7a/0d567a768f35faab85b96f84691235d3.jpg"}),permission:e.user.role==0?"User":"Admin",Time:m(e.updatedAt).format("LTS DD-MM-YYYY"),action:n("span",{children:[t(c,{to:`/admin/trailerUrl/${e._id}`,children:t(r,{style:{background:"#1677ff"},type:"primary",children:"Edit"})}),t(r,{onClick:()=>dispatch(deleteCommentSlice(e._id)),style:{background:"#dc3545"},type:"primary",className:"ml-2",children:"C\xFAt"})]})})):"";return t("div",{children:t(u,{columns:i,dataSource:d,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})};export{f as default};