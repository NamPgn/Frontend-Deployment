import{r as l,u as p,a as m,j as e,L as y,M as h,d as u,R as f,N as x,b as S,e as M,f as D,c as L}from"./index.ddf2d593.js";import{M as N,D as b,a as j}from"./index.3ef214e1.js";import{i as C}from"./index.ed781552.js";const $=()=>{const[r,n]=l.exports.useState(1),{id:o}=p(),{data:{data:t,length:c},isLoading:i,isError:g}=m(L+`/type/${o}?page=${r}`);if(i)return e(y,{});if(g)return e(h,{});let d=t.category.concat(t.products);return u(f.Fragment,{children:[e(N,{data:t,children:t.products.length==0&&t.category.length==0&&t.categorymain.length==0?e(x,{}):t.categorymain.length<=0?e(S,{type:"category",gutter:[16,16],child:d}):t.categorymain.length>0&&t.products.length<=0&&t.category.length<=0&&e(b,{children:t.categorymain.map((a,s)=>e(M,{to:`/types/h/${a.cates._id}`,children:e(j,{className:"text-center text-gray text-[#fff]",style:D[s],children:a.cates.name})},s))})}),e(C,{className:"text-end mt-12",currentPage:r,defaultCurrent:1,totalItems:c,pageSize:10,onChange:a=>n(a)})]})};export{$ as default};