import{s as c,b as a,j as e,L as i}from"./index.edcae809.js";const s=c.div``;c.span``;const t=c.p``,h=c.img`
  width:100%;
  height:100%;
`,o=({category:n,isLoading:d})=>a(s,{children:[e(s,{className:"text-light all_movie",children:"All Movie"}),d===!1?e(s,{className:"categoryMovie",children:n?n.map((l,r)=>e(s,{className:"movie_css",children:e(s,{children:a(s,{className:"cateConten cateItem",style:{width:"100%"},children:[e(i,{to:"/q/"+l._id+`?n=${l.name}`,children:e(h,{src:l.linkImg,alt:""})}),e(s,{className:"cateTitle text-light mt-1",children:e(i,{to:"/q/"+l._id+`?n=${l.name}`,children:e(t,{children:l.name})})}),e(s,{className:"release_date mt-2 mb-2",children:a(s,{style:{fontWeight:"500"},children:[l.sumSeri," T\u1EADp"]})}),e(s,{className:"des",children:e(t,{className:"h6",children:"Full h\u0111/Vietsub"})}),e(s,{className:"release_date",children:e(t,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},r)):""}):e(s,{className:"text-light text-center",children:"Ch\u1EDD 1 ch\xFAt..."}),a(s,{style:{color:"#fff",marginTop:"150px"},className:"des",children:["News Movie",e(t,{className:"text-secondary",children:"Updating....."})]})]});export{o as default};
