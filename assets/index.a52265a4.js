import{u as l,a as u,j as a,L as h,M as m,b as i,c as o,N as E,d as y}from"./index.78f0544f.js";import{D as t,a as v,b as D,c as p,d as g,e as S,f as x,g as C}from"./Type.d90fdfc8.js";const T=()=>{const{id:r}=l(),{data:e,isLoading:n,isError:c}=u(y+`/categorymain/${r}`);return n?a(h,{}):c?a(m,{}):a("div",{className:"col-md-10",children:i("div",{className:"p-3",children:[i(t,{children:["Trang ch\u1EE7 - ",e.name]}),a(v,{className:"text-white",children:e.name}),a(t,{className:"mt-3",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."}),a(D,{className:"mt-4",children:e.products&&e.products.length?e.products.map((s,d)=>a(p,{children:i(g,{children:[a(o,{to:"/d/"+s._id+`?c=${s.categorymain}?n=${s.name+" "+s.seri} `,children:a(S,{children:a(x,{src:s.image})})}),a(C,{children:s.name}),a(t,{children:e.name})]})},d)):a(E,{})})]})})};export{T as default};
