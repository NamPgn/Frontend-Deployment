import{w as i,j as s}from"./vendor-4beb22e1.js";import{w as n,L as d,x as p,y as c,N as u,z as x}from"./index-58b46ce3.js";import{M as m}from"./index-e20b9734.js";const f=()=>{const{id:a}=i(),{data:r,isLoading:e,isError:o}=n(x+`/categorymain/${a}`);if(e)return s.jsx(d,{});if(o)return s.jsx(p,{});const t=[...r.category,...r.products];return s.jsx(m,{data:r,children:t.length?s.jsx(c,{type:"category",gutter:[16,16],child:t}):s.jsx(u,{})})};export{f as default};