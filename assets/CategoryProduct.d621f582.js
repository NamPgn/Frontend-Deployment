import{c,p as h,u as g,n as u,r as o,q as m,b as s,j as e,L as i,R as p,_ as y,s as v,t as x}from"./index.67b319be.js";const _=({id:a})=>{const r=c(h),l=g(),n=c(u);return o.exports.useEffect(()=>{l(m(a)),window.scrollTo({top:0,behavior:"smooth"})},[a]),s("div",{children:[e("h5",{style:{margin:"0 20px"},children:"Li\xEAn quan"}),n===!1?e("div",{className:"categoryMovie px-3 mt-5",children:r?r.map((t,d)=>e("div",{className:"movie_css",children:e("div",{children:s("div",{className:"cateConten cateItem",style:{width:"100%"},children:[e(i,{to:"/product/category/"+t._id+`?category=${t.name}`,children:e("img",{style:{width:"100%"},src:t.linkImg,alt:""})}),e("div",{className:"cateTitle text-light mt-1",children:e(i,{to:"/product/category/"+t._id+`?category=${t.name}`,children:e("p",{children:t.name})})}),e("div",{className:"release_date",children:e("p",{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},d)):"Tr\u1ED1ng!"}):e("div",{className:"text-light text-center",children:"Ch\u1EDD 1 ch\xFAt..."})]})},C=p.lazy(()=>y(()=>import("./CategoryProductDesCriptionComponent.62c560ae.js"),["assets/CategoryProductDesCriptionComponent.62c560ae.js","assets/index.67b319be.js","assets/index.d5f77962.css"])),f=()=>{const{id:a}=v();return s("div",{children:[e("div",{className:"d-flex",children:e(o.exports.Suspense,{fallback:e(x,{}),children:e(C,{})})}),e(_,{id:a})]})};export{f as default};
