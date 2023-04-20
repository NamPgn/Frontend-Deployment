import{s as a,b as i,j as e,L as d,S as o}from"./index.8920a4b1.js";const t=a.div``,m=a.div``,x=a.div`
padding:20px;
`,g=a.div`
width: 100%;
height:100%; 
`,s=a.p``,v=a.img`
  width:100%;
  height:100%;
`,c=a.div`
  margin: 40px 0px;
`,p=({category:n,isLoading:r})=>i(x,{children:[e(c,{className:"text-light all_movie underline text-3xl font-extrabold dark:text-white",children:"Hh 3d"}),r===!1?e(t,{className:"categoryMovie",children:n?n.map((l,h)=>e(t,{className:"movie_css",children:e(t,{children:i(g,{className:"cateConten cateItem",children:[e(d,{to:"/q/"+l._id+`?n=${l.name}`,children:e(v,{src:l.linkImg,alt:""})}),e(t,{className:"cateTitle text-light mt-1",children:e(d,{to:"/q/"+l._id+`?n=${l.name}`,children:e(s,{children:l.name})})}),e(t,{className:"release_date mt-2 mb-2",children:i(t,{style:{fontWeight:"500"},children:[l.sumSeri," T\u1EADp"]})}),e(t,{className:"des",children:e(s,{className:"h6",children:"Full h\u0111/Vietsub"})}),e(t,{className:"release_date",children:e(s,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},h)):""}):e(t,{className:"text-light text-center",children:"Ch\u1EDD 1 ch\xFAt..."}),i(m,{children:[e(c,{style:{color:"#fff"},className:"text-light all_movie underline text-3xl font-extrabold dark:text-white",children:"Phim l\u1EBB"}),e(o,{idProp:"643fb6b667a17cd6a2ee3ace"})]})]});export{p as default};
