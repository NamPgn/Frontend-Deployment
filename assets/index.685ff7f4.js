import{r as e,a as t,c as n,B as s,o as c,T as o,ae as u}from"./index.bf9ea328.js";const y=()=>{const r=[{title:"Id",dataIndex:"_id",key:"_id"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],[a,i]=e.exports.useState([]);e.exports.useEffect(()=>{(async()=>{const{data:l}=await u();i(l)})()},[]);const d={_id:a._id,url:a.url,action:t("span",{children:t(n,{to:`/admin/trailerUrl/${a._id}`,children:t(s,{type:"primary",style:{background:"#1677ff"},children:"Edit"})})})};return t(c,{children:t(o,{columns:r,dataSource:[d]})})};export{y as default};
