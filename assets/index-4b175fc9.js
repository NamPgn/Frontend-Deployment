import{r,j as t}from"./vendor-0710fd16.js";import{D as p,g as o,e as g,E as x,S as d,a as u}from"./index-b2596b2e.js";import{i as m}from"./index-8d119cce.js";import{M as l}from"./index-afadcf53.js";function f(){const{setPage:n,page:s}=r.useContext(p),e=o(a=>a.category.category),i=g();if(r.useEffect(()=>{i(x(s))},[s]),o(a=>a.category.isLoading))return t.jsx(d,{});const c={name:"Danh mục"};return t.jsx(t.Fragment,{children:t.jsxs(l,{data:c,children:[t.jsx(u,{type:"category",gutter:[16,16],child:e&&e.data}),t.jsx(m,{className:"text-center",currentPage:s,defaultCurrent:e&&e.totalPages,totalItems:e&&e.totalCount,pageSize:20,onChange:a=>n(a)})]})})}const D=()=>t.jsx(f,{});export{D as default};