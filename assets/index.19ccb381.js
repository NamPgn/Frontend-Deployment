import{u as i,L as d,M as n,a as c,N as p,b as u}from"./index.90e70e68.js";import{M as y}from"./index.78420347.js";import{y as g,j as r}from"./vendor.66f3a2e0.js";const M=()=>{const{id:t}=g(),{data:a,isLoading:e,isError:o}=i(u+`/categorymain/${t}`);if(e)return r(d,{});if(o)return r(n,{});const s=[...a.category,...a.products];return r(y,{data:a,children:s.length?r(c,{type:"category",gutter:[16,16],child:s}):r(p,{})})};export{M as default};
