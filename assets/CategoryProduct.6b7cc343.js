import{c,u as h,r as o,h as g,b as s,j as e,L as i,R as m,_ as u,k as p,m as y}from"./index.73504b2c.js";import{a as v}from"./index.127bbc30.js";import{i as x}from"./index.6c280bbf.js";const _=({id:a})=>{const r=c(v),l=h(),n=c(x);return o.exports.useEffect(()=>{l(g(a)),window.scrollTo({top:0,behavior:"smooth"})},[a]),s("div",{children:[e("h5",{style:{margin:"0 20px"},children:"Li\xEAn quan"}),n===!1?e("div",{className:"categoryMovie px-3 mt-5",children:r?r.map((t,d)=>e("div",{className:"movie_css",children:e("div",{children:s("div",{className:"cateConten cateItem",style:{width:"100%"},children:[e(i,{to:"/product/category/"+t._id+`?category=${t.name}`,children:e("img",{style:{width:"100%"},src:t.linkImg,alt:""})}),e("div",{className:"cateTitle text-light mt-1",children:e(i,{to:"/product/category/"+t._id+`?category=${t.name}`,children:e("p",{children:t.name})})}),e("div",{className:"release_date",children:s("p",{children:["T\u1ED5ng ",t.sumSeri," t\u1EADp"]})}),e("div",{className:"release_date",children:e("p",{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},d)):"Tr\u1ED1ng!"}):e("div",{className:"text-light text-center",children:"Ch\u1EDD 1 ch\xFAt..."})]})},N=m.lazy(()=>u(()=>import("./CategoryProductDesCriptionComponent.0b7d5841.js"),["assets/CategoryProductDesCriptionComponent.0b7d5841.js","assets/index.73504b2c.js","assets/index.c4e5f747.css","assets/index.127bbc30.js"])),E=()=>{const{id:a}=p();return s("div",{children:[e("div",{className:"d-flex",children:e(o.exports.Suspense,{fallback:e(y,{}),children:e(N,{})})}),e(_,{id:a})]})};export{E as default};