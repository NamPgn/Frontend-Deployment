import{r,j as e,t as i,f as p}from"./vendor.bb3b024f.js";import{n as g,g as n,e as d,a3 as u,S as m,a as l}from"./index.c1f8a243.js";import{i as f}from"./index.1fa14f85.js";import{M as x}from"./index.18b109cf.js";function y(){const{setPage:o,page:a}=r.exports.useContext(g),s=n(t=>t.category.category),c=d();return r.exports.useEffect(()=>{c(u(a))},[a]),n(t=>t.category.isLoading)?e(m,{}):e(i,{children:p(x,{data:{name:"Danh m\u1EE5c"},children:[e(l,{type:"category",gutter:[16,16],child:s&&s.data}),e(f,{className:"text-center",currentPage:a,defaultCurrent:1,totalItems:s.length,pageSize:20,onChange:t=>o(t)})]})})}const E=()=>e(y,{});export{E as default};
