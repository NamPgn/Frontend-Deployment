import{s as d,x as c,f as o,r as l,aE as p,a as t,I as u,j as m,c as y,B as r,af as g,T as x}from"./index.812fc5d4.js";const h=a=>a.cart.value,f=d.div``,k=d.span``,b=()=>{const a=c(h),s=o();l.exports.useEffect(()=>{s(p())},[]);const i=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Action",dataIndex:"action",key:"action"}],n=a?a.map((e,I)=>({key:e._id,stt:e._id,ProductName:e.product?e.product.name+" "+e.product.seri:"",user:e.user.username,image:t(u,{width:60,height:80,style:{objectFit:"cover"},src:e.product?e.product.image:"https://i.pinimg.com/736x/0d/56/7a/0d567a768f35faab85b96f84691235d3.jpg"}),permission:e.user.role==0?"User":"Admin",action:m(k,{children:[t(y,{to:`/admin/trailerUrl/${e._id}`,children:t(r,{style:{background:"#1677ff"},type:"primary",children:"Edit"})}),t(r,{onClick:()=>s(g(e._id)),style:{background:"#dc3545"},type:"primary",className:"ml-2",children:"C\xFAt"})]})})):"";return t(f,{children:t(x,{columns:i,dataSource:n,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})};export{b as default};
