import{u as d,c as i,r as n,b9 as o,j as e}from"./index.73504b2c.js";import{b as m}from"./index.127bbc30.js";import{I as c}from"./index.a7267d7a.js";import{T as g}from"./Table.7633ec64.js";const l=[{title:"Name",dataIndex:"name",key:"name",render:a=>e("a",{children:a})},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Image",dataIndex:"image",key:"image"}],k=()=>{const a=d(),s=i(m);n.exports.useEffect(()=>{a(o())},[]);const r=s.map(t=>({key:t._id,name:t.username,age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"],image:e(c,{width:150,height:200,style:{objectFit:"cover"},src:t.image})}));return e("div",{children:e(g,{columns:l,dataSource:r,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","20","30"]}})})};export{k as default};