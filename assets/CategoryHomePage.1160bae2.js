import{s,b as a,j as e,L as c}from"./index.d2fd6520.js";const t=s.div``,o=s.div`
padding:20px;
`,m=s.div`
width: 100%;
height:100%; 
`,i=s.p``,x=s.img`
  width:100%;
  height:100%;
`,d=s.div`
  margin: 40px 0px;
`,N=({category:n,isLoading:r})=>a(o,{children:[e(d,{className:"text-light all_movie underline text-3xl font-extrabold dark:text-white",children:"Hh 3d"}),r===!1?e(t,{className:"categoryMovie",children:n?n.map((l,h)=>e(t,{className:"movie_css",children:e(t,{children:a(m,{className:"cateConten cateItem",children:[e(c,{to:"/q/"+l._id+`?n=${l.name}`,children:e(x,{src:l.linkImg,alt:""})}),e(t,{className:"cateTitle text-light mt-1",children:e(c,{to:"/q/"+l._id+`?n=${l.name}`,children:e(i,{children:l.name})})}),e(t,{className:"release_date mt-2 mb-2",children:a(t,{style:{fontWeight:"500"},children:[l.sumSeri," T\u1EADp"]})}),e(t,{className:"des",children:e(i,{className:"h6",children:"Full h\u0111/Vietsub"})}),e(t,{className:"release_date",children:e(i,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},h)):""}):e(t,{className:"text-light text-center",children:"Ch\u1EDD 1 ch\xFAt..."}),a(d,{style:{color:"#fff"},className:"des",children:["News Movie",e(i,{className:"text-secondary",children:"Updating....."})]})]});export{N as default};
