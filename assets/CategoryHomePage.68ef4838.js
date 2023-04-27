import{s as i,b as a,j as e,c as d}from"./index.d03bb074.js";import o from"./index.fbf7fbcc.js";import"./index.4725c779.js";import"./CartAdmin.97ec7079.js";import"./moment.9709ab41.js";import"./index.8d649022.js";const t=i.div``,m=i.div``,x=i.div`
padding:20px;
`,p=i.div`
width: 100%;
height:100%; 
`,s=i.p``,g=i.img`
  width:100%;
  height:100%;
`,c=i.div`
  margin: 40px 0px;
`,b=({category:n,isLoading:r})=>a(x,{children:[e(c,{className:"text-light all_movie underline text-3xl font-extrabold dark:text-white",children:"Hh 3d"}),r===!1?e(t,{className:"categoryMovie",children:n?n.map((l,h)=>e(t,{className:"movie_css",children:e(t,{children:a(p,{className:"cateConten cateItem",children:[e(d,{to:"/q/"+l._id+`?n=${l.name}`,children:e(g,{src:l.linkImg,alt:""})}),e(t,{className:"cateTitle text-light mt-1",children:e(d,{to:"/q/"+l._id+`?n=${l.name}`,children:e(s,{children:l.name})})}),e(t,{className:"release_date mt-2 mb-2",children:a(t,{style:{fontWeight:"500"},children:[l.sumSeri," T\u1EADp"]})}),e(t,{className:"des",children:e(s,{className:"h6",children:"Full h\u0111/Vietsub"})}),e(t,{className:"release_date",children:e(s,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},h)):""}):e(t,{className:"text-light text-center",children:"Ch\u1EDD 1 ch\xFAt..."}),a(m,{children:[e(c,{style:{color:"#fff"},className:"text-light all_movie underline text-3xl font-extrabold dark:text-white",children:"Phim l\u1EBB"}),e(o,{idProp:"643fb6b667a17cd6a2ee3ace"})]})]});export{b as default};
