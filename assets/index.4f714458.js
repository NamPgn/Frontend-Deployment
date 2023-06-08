import{T as h,D as d,a as p}from"./index.752b70d1.js";import{s as a,u,a as m,j as i,L as o,b as r,c as x,d as g}from"./index.78ce00f6.js";const E=a.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 10px;
@media (max-width:1024px){
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
@media (max-width:768px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
`,y=a.div`
`,v=a.div`
&:hover{
  cursor: pointer;
}
`,D=a.img`
border-radius: 5px;
`,S=a.div`
width: 220px;
height: 350px;
@media(1024px){
  width: 220px;
height: 350px;
}
@media(768px){
  width: 120px;
height: 250px;
}
`,f=a.div`
margin:10px 0;
font-weight:500;
`,w=()=>{const{id:s}=u(),{data:e,isLoading:n,isError:c}=m(g+`/categorymain/${s}`);return n?i(o,{}):c?"L\u1ED7i r\u1ED3i":i(h,{className:"col-md-10",children:r("div",{children:[r(d,{children:["Trang ch\u1EE7 - ",e.name]}),i(p,{children:e.name}),i(d,{className:"mt-3",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."}),i(E,{className:"mt-4",children:e.products&&e.products.length?e.products.map((t,l)=>i(y,{children:r(v,{children:[i(x,{to:"/d/"+t._id+`?c=${t.categorymain}?n=${t.name+" "+t.seri} `,children:i(S,{children:i(D,{src:t.image})})}),i(f,{children:t.name}),i(d,{children:e.name})]})},l)):"Ch\u01B0a c\u1EADp nh\u1EADt!"})]})})};export{S as Div,E as DivStyled,y as DivStyledContent,D as DivStyledImage,v as DivStyledItem,f as DivStyledTitleItem,w as default};
