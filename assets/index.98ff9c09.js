import{r as l,u as p,a as m,j as t,S as y,M as h,d as u,R as f,N as x,b as S,e as M,f as D,c as N}from"./index.a85d3386.js";import{M as b,D as j,a as C}from"./index.9109ae3d.js";import{i as P}from"./index.fe8f014a.js";const k=()=>{const[r,n]=l.exports.useState(1),{id:i}=p(),{data:{data:e,length:o},isLoading:c,isError:g}=m(N+`/type/${i}?page=${r}`);if(c)return t(y,{});if(g)return t(h,{});let d=[...e.category,...e.products];return u(f.Fragment,{children:[t(b,{data:e,children:e.products.length==0&&e.category.length==0&&e.categorymain.length==0?t(x,{}):e.categorymain.length<=0?t(S,{type:"category",gutter:[16,16],child:d}):e.categorymain.length>0&&e.products.length<=0&&e.category.length<=0&&t(j,{children:e.categorymain.map((a,s)=>t(M,{to:`/types/h/${a.cates._id}`,children:t(C,{className:"text-center text-gray text-[#fff]",style:D[s],children:a.cates.name})},s))})}),t(P,{className:"text-end mt-12",currentPage:r,defaultCurrent:1,totalItems:o,pageSize:10,onChange:a=>n(a)})]})};export{k as default};
