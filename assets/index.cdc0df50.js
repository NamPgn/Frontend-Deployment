import{u,a as h,j as e,L as o,b as n,c as m,d as E}from"./index.94ba3f66.js";import{T as y,D as s,a as D}from"./index.36d0af50.js";import{DivStyled as p,DivStyledContent as v,DivStyledItem as S,Div as C,DivStyledImage as x,DivStyledTitleItem as A}from"./index.8b67b05b.js";import"./CartAdmin.6887e21c.js";import"./moment.9709ab41.js";const I=({idProp:r})=>{const{id:a}=u(),{data:i,isLoading:l,isError:c}=h(E+`/type/${r||a}`);return l?e(o,{}):c?"L\u1ED7i r\u1ED3i":n(y,{className:"col-md-10",children:[n("div",{style:{display:r?"none":"block"},children:[n(s,{children:["Trang ch\u1EE7 - ",i?i.name:""]}),e(D,{children:i?i.name:""}),e(s,{className:"mt-3 mb-5",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."})]}),i?e(p,{children:i.products&&i.products.length?i.products.map((t,d)=>e(v,{children:n(S,{children:[e(m,{to:"/d/"+t._id+`?c=${t.typeId}?n=${t.name+" "+t.seri} `,children:e(C,{children:e(x,{src:t.image})})}),e(A,{children:t.name}),e(s,{children:i.name})]})},d)):"Ch\u01B0a c\u1EADp nh\u1EADt!"}):""]})};export{I as default};
