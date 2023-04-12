import{s as t,b as a,j as e,L as n}from"./index.49430263.js";const l=t.div``,m=t.div`
width: 100%;
height:100%; 
`,c=t.p``,o=t.img`
  width:100%;
  height:100%;
`,d=t.div`
  margin: 40px 0px;
`,N=({category:i,isLoading:h})=>a(l,{children:[e(d,{className:"text-light all_movie",children:"All Movie"}),h===!1?e(l,{className:"categoryMovie",children:i?i.map((s,r)=>e(l,{className:"movie_css",children:e(l,{children:a(m,{className:"cateConten cateItem",children:[e(n,{to:"/q/"+s._id+`?n=${s.name}`,children:e(o,{src:s.linkImg,alt:""})}),e(l,{className:"cateTitle text-light mt-1",children:e(n,{to:"/q/"+s._id+`?n=${s.name}`,children:e(c,{children:s.name})})}),e(l,{className:"release_date mt-2 mb-2",children:a(l,{style:{fontWeight:"500"},children:[s.sumSeri," T\u1EADp"]})}),e(l,{className:"des",children:e(c,{className:"h6",children:"Full h\u0111/Vietsub"})}),e(l,{className:"release_date",children:e(c,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},r)):""}):e(l,{className:"text-light text-center",children:"Ch\u1EDD 1 ch\xFAt..."}),a(d,{style:{color:"#fff"},className:"des",children:["News Movie",e(c,{className:"text-secondary",children:"Updating....."})]})]});export{N as default};
