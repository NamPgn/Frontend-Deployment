import{r as l,j as e,A as u,t as s,c as p,u as m,b5 as g,N as n,b as i,B as r,Q as h,b6 as y,F as x}from"./index.d7c66afc.js";import{u as f}from"./index.127bbc30.js";import{I as k}from"./index.9d905f07.js";import{T as b}from"./Table.684237ed.js";import"./CloseOutlined.f5a62365.js";var v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"};const w=v;var c=function(d,o){return e(u,{...s(s({},d),{},{ref:o,icon:w})})};c.displayName="DownloadOutlined";const I=l.exports.forwardRef(c),D=[{title:"Name",dataIndex:"name",key:"name",render:t=>e("a",{children:t})},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Image",dataIndex:"image",key:"image"},{title:"Action",key:"action"},{title:"Edit",dataIndex:"edit"},{title:"Remove",dataIndex:"remove"}],N=()=>{const t=p(f),d=m();l.exports.useEffect(()=>{d(g())},[]);const o=t?t.map(a=>({key:a._id,name:a.username,age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"],image:e(k,{width:150,height:200,style:{objectFit:"cover"},src:a.image}),edit:e(n,{to:`${a._id}/edit`,children:i(r,{type:"primary",danger:!0,shape:"round",icon:e(I,{}),children:[" ","Edit"," "]})}),remove:e(r,{style:{background:"#1677ff"},type:"primary",onClick:()=>h.success(`X\xF3a user ${a.username} th\xE0nh c\xF4ng`,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"},d(y(a._id))),children:"Delete"})})):"";return i(x,{children:[e(n,{to:"/admin/user/add",children:e(r,{style:{background:"#1677ff"},type:"primary",shape:"round",children:"Add User"})}),e(n,{to:"/admin/user/creatingUser",children:e(r,{type:"primary",shape:"round",style:{display:"inline-block",margin:"10px 10px",background:"#28a745"},children:"Import Excel"})}),e(n,{to:"/admin/product/add",children:e(r,{type:"primary",shape:"round",style:{display:"inline-block  ",margin:"10px 10px",background:"#eca52b"},children:"Export PDF"})}),e(b,{columns:D,dataSource:o,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","20","30"]}})]})};export{N as default};
