import{s as m,r as p,u as y,a as x,j as e,L as E,M as f,R as v,b as r,c as i,N as S,e as c,f as C,d as D}from"./index.599ff1bc.js";import{D as d,a as b,b as N}from"./Type.bcffcc4e.js";import{i as w}from"./index.e4640199.js";const A=m.div`
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
`,F=()=>{const[s,o]=p.exports.useState(1),{id:h}=y(),{data:{data:t,length:l},isLoading:g,isError:u}=x(D+`/type/${h}?page=${s}`);return g?e(E,{}):u?e(f,{}):e(v.Fragment,{children:r("div",{className:"p-2",children:[r("div",{children:[r(d,{children:[e(i,{to:"/",children:"Trang ch\u1EE7"})," - ",t?t.name:""]}),e(b,{className:"text-white",children:t?t.name:""}),e(d,{className:"mt-3 mb-5",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."})]}),t.products.length==0&&t.category.length==0&&t.categorymain.length==0?e(S,{}):t.products.length<=0&&t.categorymain.length<=0?e(c,{type:"category",gutter:[16,16],child:t.category}):t.category.length<=0&&t.categorymain.length<=0?e(c,{type:"types",gutter:t.products.length?[16,16]:0,child:t.products}):t.categorymain.length>0&&t.products.length<=0&&t.category.length<=0&&e(N,{children:t.categorymain.map((a,n)=>e(i,{to:`/types/h/${a.cates._id}`,children:e(A,{className:"text-center text-gray text-[#fff]",style:C[n],children:a.cates.name})},n))}),e(w,{className:"text-end mt-12",currentPage:s,defaultCurrent:1,totalItems:l,pageSize:10,onChange:a=>o(a)})]})})};export{F as default};
