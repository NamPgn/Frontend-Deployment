import{r as n,j as t,L as i,B as o,F as c,T as u,aq as x}from"./index.de18c56b.js";const y=()=>{const s=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],[r,l]=n.exports.useState([]);n.exports.useEffect(()=>{(async()=>{const{data:e}=await x();l(e)})()},[]);const d=r?r.map((a,e)=>({key:a._id,stt:e+1,url:a.url,action:t("span",{children:t(i,{to:`/admin/trailerUrl/${a._id}`,children:t(o,{type:"button",style:{background:"#1677ff"},children:"Edit"})})})})):"";return t(c,{children:t(u,{columns:s,dataSource:d})})};export{y as default};
