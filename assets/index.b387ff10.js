import{u,a as h,j as e,L as o,b as n,c as m,d as y}from"./index.2593662f.js";import{T as E,D as a,a as p}from"./index.8eb40db9.js";import{DivStyled as D,DivStyledContent as v,DivStyledItem as S,Div as x,DivStyledImage as C,DivStyledTitleItem as g}from"./index.ea4972cf.js";import"./CartAdmin.c482597c.js";import"./moment.9709ab41.js";const j=({idProp:i})=>{const{id:r}=u(),{data:t,isLoading:l,isError:d}=h(y+`/type/${i||r}`);return l?e(o,{}):d?"L\u1ED7i r\u1ED3i":n(E,{className:"col-md-10",style:{padding:i?"0px":"15px"},children:[n("div",{style:{display:i?"none":"block"},children:[n(a,{children:["Trang ch\u1EE7 - ",t?t.name:""]}),e(p,{children:t?t.name:""}),e(a,{className:"mt-3 mb-5",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."})]}),t?e(D,{children:t.products&&t.products.length?t.products.map((s,c)=>e(v,{children:n(S,{children:[e(m,{to:"/d/"+s._id+`?c=${s.typeId}?n=${s.name+" "+s.seri} `,children:e(x,{children:e(C,{src:s.image})})}),e(g,{children:s.name}),e(a,{children:t.name})]})},c)):"Ch\u01B0a c\u1EADp nh\u1EADt!"}):""]})};export{j as default};
