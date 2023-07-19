import{s as y,r as s,C as x,u as b,b as E,a,L as f,M as k,m as C,j as i,c,N as v,e as o,d as D}from"./index.0cc35d08.js";import{D as d,a as S,b as N}from"./Type.39e7a440.js";import{i as w}from"./index.5e1163d1.js";const A=y.div`
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
`,T=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],B=()=>{const[r,g]=s.exports.useState(1),{state:h}=s.exports.useContext(x),{id:l}=b(),{data:{data:e,length:u},isLoading:m,isError:p}=E(D+`/type/${l}?page=${r}`);return m?a(f,{}):p?a(k,{}):a(C.div,{className:h?"w-11/12":"w-10/12",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:i("div",{className:"p-2",children:[i("div",{children:[i(d,{children:[a(c,{to:"/",children:"Trang ch\u1EE7"})," - ",e?e.name:""]}),a(S,{className:"text-white",children:e?e.name:""}),a(d,{className:"mt-3 mb-5",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."})]}),e.products.length==0&&e.category.length==0&&e.categorymain.length==0?a(v,{}):a(N,{children:e.products.length<=0&&e.categorymain.length<=0?e.category.map((t,n)=>a("div",{children:a(o,{title:t.name,link:"/q/"+t._id+`?n=${t.name}`,image:t.linkImg,time:"Th\u1EDDi gian 15/20 ph\xFAt",typecm:e.name})},n)):e.category.length<=0&&e.categorymain.length<=0?e.products.map((t,n)=>a("div",{children:a(o,{title:t.name,link:"/d/"+t._id+`?c=${t.typeId}?n=${t.name+" "+t.seri} `,image:t.image,time:"Th\u1EDDi gian 1h/2h",typecm:e.name})},n)):e.categorymain.length>0&&e.products.length<=0&&e.category.length<=0?e.categorymain.map((t,n)=>a(c,{to:`/types/h/${t.cates._id}`,children:a(A,{className:"text-center text-gray text-[#fff]",style:T[n],children:t.cates.name})},n)):"123"}),a(w,{className:"text-end mt-12",currentPage:r,defaultCurrent:1,totalItems:u,pageSize:10,onChange:t=>g(t)})]})})};export{B as default};
