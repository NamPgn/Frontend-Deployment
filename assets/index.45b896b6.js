import{r as e,j as t,L as i,B as d,F as o,T as c,ao as u}from"./index.ae49c545.js";const y=()=>{const r=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],[a,l]=e.exports.useState([]);e.exports.useEffect(()=>{(async()=>{const{data:s}=await u();l(s)})()},[]);const n={stt:a._id,url:a.url,action:t("span",{children:t(i,{to:`/admin/trailerUrl/${a._id}`,children:t(d,{type:"primary",style:{background:"#1677ff"},children:"Edit"})})})};return t(o,{children:t(c,{columns:r,dataSource:[n]})})};export{y as default};
