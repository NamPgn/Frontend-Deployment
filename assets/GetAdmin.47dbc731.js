import{u as d,f as i,r as n,b9 as o,j as t}from"./index.49430263.js";import{b as m}from"./index.127bbc30.js";import{I as g}from"./index.9b2533fc.js";import{T as c}from"./Table.439fd4d9.js";import"./CloseOutlined.b23ae7b1.js";const p=[{title:"Name",dataIndex:"name",key:"name",render:e=>t("a",{children:e})},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Image",dataIndex:"image",key:"image"}],x=()=>{const e=d(),s=i(m);n.exports.useEffect(()=>{e(o())},[]);const r=s.map(a=>({key:a._id,name:a.username,age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"],image:t(g,{width:150,height:200,style:{objectFit:"cover"},src:a.image})}));return t(c,{columns:p,dataSource:r,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","20","30"]}})};export{x as default};
