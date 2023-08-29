import{s as m,r as p,u as y,a as x,j as t,L as b,M as E,R as f,b as r,c,N as k,C as s,d as v}from"./index.25c2f60c.js";import{D as d,a as D,b as C}from"./Type.19184d21.js";import{i as S}from"./index.55236bf4.js";const N=m.div`
padding:20px;
border-radius:5px;
font-size:13px;
font-weight:500;
&:hover{
  cursor:pointer;
}
@media (min-width: 768px){
  font-size:16px;
}
@media (min-width: 1024px){
  font-size:17px;
}
`,A=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],P=()=>{const[i,o]=p.exports.useState(1),{id:g}=y(),{data:{data:e,length:h},isLoading:u,isError:l}=x(v+`/type/${g}?page=${i}`);return u?t(b,{}):l?t(E,{}):t(f.Fragment,{children:r("div",{className:"p-2",children:[r("div",{children:[r(d,{children:[t(c,{to:"/",children:"Trang ch\u1EE7"})," - ",e?e.name:""]}),t(D,{className:"text-white",children:e?e.name:""}),t(d,{className:"mt-3 mb-5",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."})]}),e.products.length==0&&e.category.length==0&&e.categorymain.length==0?t(k,{}):t(C,{children:e.products.length<=0&&e.categorymain.length<=0?e.category.map((a,n)=>t("div",{children:t(s,{title:a.name,link:"/q/"+a._id,image:a.linkImg,time:"Th\u1EDDi gian 15/20 ph\xFAt",typecm:e.name})},n)):e.category.length<=0&&e.categorymain.length<=0?e.products.map((a,n)=>t("div",{children:t(s,{title:a.name,link:"/d/"+a._id+`?c=${a.typeId}`,image:a.image,time:"Th\u1EDDi gian 1h/2h",typecm:e.name})},n)):e.categorymain.length>0&&e.products.length<=0&&e.category.length<=0?e.categorymain.map((a,n)=>t(c,{to:`/types/h/${a.cates._id}`,children:t(N,{className:"text-center text-gray text-[#fff]",style:A[n],children:a.cates.name})},n)):"123"}),t(S,{className:"text-end mt-12",currentPage:i,defaultCurrent:1,totalItems:h,pageSize:10,onChange:a=>o(a)})]})})};export{P as default};
