import{r,j as a}from"./vendor-0710fd16.js";import{c as i,q as n,s as o,$ as d,a0 as c}from"./index-b2596b2e.js";const p=()=>{const[t,s]=r.useState({});r.useEffect(()=>{(async()=>{const{data:l}=await c();s(l)})()},[]);const e={_id:t._id,url:t.url,action:a.jsx("span",{children:a.jsx(i,{to:`/dashboard/trailerUrl/${t._id}`,children:a.jsx(n,{type:"primary",style:{background:"#1677ff"},children:"Edit"})})})};return a.jsx(a.Fragment,{children:a.jsx(o,{columns:d,dataSource:[e]})})};export{p as default};
