import{r as l,y as p,j as e,f as m,K as y}from"./vendor.66f3a2e0.js";import{u as h,S as u,M as f,N as x,a as S,c as M,d as D,b as N}from"./index.90e70e68.js";import{M as b,D as j,a as C}from"./index.78420347.js";import{i as P}from"./index.358d72cc.js";const A=()=>{const[r,n]=l.exports.useState(1),{id:o}=p(),{data:{data:t,length:i},isLoading:c,isError:g}=h(N+`/type/${o}?page=${r}`);if(c)return e(u,{});if(g)return e(f,{});let d=[...t.category,...t.products];return m(y.Fragment,{children:[e(b,{data:t,children:t.products.length==0&&t.category.length==0&&t.categorymain.length==0?e(x,{}):t.categorymain.length<=0?e(S,{type:"category",gutter:[16,16],child:d}):t.categorymain.length>0&&t.products.length<=0&&t.category.length<=0&&e(j,{children:t.categorymain.map((a,s)=>e(M,{to:`/types/h/${a.cates._id}`,children:e(C,{className:"text-center text-gray text-[#fff]",style:D[s],children:a.cates.name})},s))})}),e(P,{className:"text-end mt-12",currentPage:r,defaultCurrent:1,totalItems:i,pageSize:10,onChange:a=>n(a)})]})};export{A as default};
