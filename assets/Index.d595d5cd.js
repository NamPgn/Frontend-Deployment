import{r as s,j as t,c as i,B as c,F as o,T as u,as as p}from"./index.2ffb1ffe.js";const y=()=>{const n=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],[r,l]=s.exports.useState([]);s.exports.useEffect(()=>{(async()=>{const{data:e}=await p();l(e)})()},[]);const d=r?r.map((a,e)=>({key:a._id,stt:e+1,url:a.url,action:t("span",{children:t(i,{to:`/admin/trailerUrl/${a._id}`,children:t(c,{type:"primary",style:{background:"#1677ff"},children:"Edit"})})})})):"";return t(o,{children:t(u,{columns:n,dataSource:d})})};export{y as default};
