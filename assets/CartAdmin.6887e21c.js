import{s as i,e as n,f as c,r as l,g as u,j as t,I as m,b as p,c as g,B as r,T as y}from"./index.94ba3f66.js";import{h as f}from"./moment.9709ab41.js";const h=a=>a.cart.value,x=i.div``,k=i.span``,S=()=>{const{cart:a}=n(h),s=c();l.exports.useEffect(()=>{s(u())},[]);const o=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Time",dataIndex:"time",key:"time"},{title:"Action",dataIndex:"action",key:"action"}],d=a?a.map((e,I)=>(console.log(e),{key:e._id,stt:e._id,ProductName:e.product.name+" "+e.product.seri,user:e.user.username,image:t(m,{width:60,height:80,style:{objectFit:"cover"},src:e.product.image?e.product.image:"https://i.pinimg.com/736x/0d/56/7a/0d567a768f35faab85b96f84691235d3.jpg"}),permission:e.user.role==0?"User":"Admin",Time:f(e.updatedAt).format("LTS DD-MM-YYYY"),action:p(k,{children:[t(g,{to:`/admin/trailerUrl/${e._id}`,children:t(r,{style:{background:"#1677ff"},type:"primary",children:"Edit"})}),t(r,{onClick:()=>s(deleteCommentSlice(e._id)),style:{background:"#dc3545"},type:"primary",className:"ml-2",children:"C\xFAt"})]})})):"";return t(x,{children:t(y,{columns:o,dataSource:d,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","15"]}})})},j=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));export{j as C,h as c};