import{s as y,r as i,C as x,u as b,a as E,j as a,L as f,M as k,b as r,c,N as C,e as d,d as v}from"./index.ef8dd52a.js";import{D as o,a as D,b as S}from"./Type.000da10e.js";import{i as N}from"./index.15647451.js";const w=y.div`
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
`,A=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],z=()=>{const[s,g]=i.exports.useState(1),{state:h}=i.exports.useContext(x)||{},{id:u}=b(),{data:{data:e,length:l},isLoading:m,isError:p}=E(v+`/type/${u}?page=${s}`);return m?a(f,{}):p?a(k,{}):a("div",{className:h?"w-11/12":"w-10/12",children:r("div",{className:"p-2",children:[r("div",{children:[r(o,{children:[a(c,{to:"/",children:"Trang ch\u1EE7"})," - ",e?e.name:""]}),a(D,{className:"text-white",children:e?e.name:""}),a(o,{className:"mt-3 mb-5",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."})]}),e.products.length==0&&e.category.length==0&&e.categorymain.length==0?a(C,{}):a(S,{children:e.products.length<=0&&e.categorymain.length<=0?e.category.map((t,n)=>a("div",{children:a(d,{title:t.name,link:"/q/"+t._id+`?n=${t.name}`,image:t.linkImg,time:"Th\u1EDDi gian 15/20 ph\xFAt",typecm:e.name})},n)):e.category.length<=0&&e.categorymain.length<=0?e.products.map((t,n)=>a("div",{children:a(d,{title:t.name,link:"/d/"+t._id+`?c=${t.typeId}?n=${t.name+" "+t.seri} `,image:t.image,time:"Th\u1EDDi gian 1h/2h",typecm:e.name})},n)):e.categorymain.length>0&&e.products.length<=0&&e.category.length<=0?e.categorymain.map((t,n)=>a(c,{to:`/types/h/${t.cates._id}`,children:a(w,{className:"text-center text-gray text-[#fff]",style:A[n],children:t.cates.name})},n)):"123"}),a(N,{className:"text-end mt-12",currentPage:s,defaultCurrent:1,totalItems:l,pageSize:10,onChange:t=>g(t)})]})})};export{z as default};
