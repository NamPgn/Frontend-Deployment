import{s as r,u as l,a as o,j as i,L as h,b as a,c as m,d as p}from"./index.d03bb074.js";import{T as E,D as n,a as v}from"./index.4725c779.js";import"./CartAdmin.97ec7079.js";import"./moment.9709ab41.js";const y=r.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 10px;
`,D=r.div`
`,g=r.div`
&:hover{
  cursor: pointer;
}
`,x=r.img`
border-radius: 5px;
`,S=r.div`
width: 220px;
height: 350px;
`,C=r.div`
margin:10px 0;
font-weight:500;
`,B=()=>{const{id:s}=l(),{data:e,isLoading:d,isError:c}=o(p+`/categorymain/${s}`);return d?i(h,{}):c?"L\u1ED7i r\u1ED3i":i(E,{className:"col-md-10",children:a("div",{children:[a(n,{children:["Trang ch\u1EE7 - ",e.name]}),i(v,{children:e.name}),i(n,{className:"mt-3",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."}),i(y,{className:"mt-4",children:e.products&&e.products.length?e.products.map((t,u)=>i(D,{children:a(g,{children:[i(m,{to:"/d/"+t._id+`?c=${t.categorymain}?n=${t.name+" "+t.seri} `,children:i(S,{children:i(x,{src:t.image})})}),i(C,{children:t.name}),i(n,{children:e.name})]})},u)):"Ch\u01B0a c\u1EADp nh\u1EADt!"})]})})};export{S as Div,y as DivStyled,D as DivStyledContent,x as DivStyledImage,g as DivStyledItem,C as DivStyledTitleItem,B as default};
