import{r as o,m as i,j as e,S as c,ap as d,d as g,b as m}from"./index.88926157.js";import{i as p}from"./index.e5db8256.js";import{M as u}from"./index.4b00a579.js";function x(){const{category:t,isLoading:a,setPage:r,page:n}=o.exports.useContext(i);return a?e(c,{}):e(d,{children:g(u,{data:{name:"Danh m\u1EE5c"},children:[e(m,{type:"category",gutter:[16,16],child:t&&t.data}),e(p,{className:"text-center",currentPage:n,defaultCurrent:1,totalItems:t.length,pageSize:20,onChange:s=>r(s)})]})})}const C=()=>e(x,{});export{C as default};