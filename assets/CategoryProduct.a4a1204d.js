import{m as n,r as c,n as d,a as r,j as e,L as o,e as h,_ as m,o as p,p as g}from"./index.e6e2d6f7.js";import{a as u}from"./index.127bbc30.js";import{u as y}from"./useDispatch.1cdbc2b0.js";const v=({id:t})=>{const s=n(u),i=y();return c.exports.useEffect(()=>{i(d(t)),window.scrollTo({top:0,behavior:"smooth"})},[t]),r("div",{children:[e("h5",{style:{margin:"0 20px"},children:"Li\xEAn quan"}),e("div",{className:"categoryMovie",children:s?s.map((a,l)=>e("div",{className:"movie_css",children:e("div",{children:r("div",{className:"cateConten cateItem",style:{width:"100%"},children:[e(o,{to:"/product/category/"+a._id+`?category=${a.name}`,children:e("img",{style:{width:"100%"},src:a.linkImg,alt:""})}),e("div",{className:"cateTitle text-light mt-1",children:e(o,{to:"/product/category/"+a._id+`?category=${a.name}`,children:e("p",{children:a.name})})}),e("div",{className:"release_date",children:e("p",{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},l)):""})]})},_=h.lazy(()=>m(()=>import("./CategoryProductComponent.348e0668.js"),["assets/CategoryProductComponent.348e0668.js","assets/index.e6e2d6f7.js","assets/index.268c190b.css","assets/index.127bbc30.js","assets/useDispatch.1cdbc2b0.js"])),C=()=>{const{id:t}=p();return r("div",{children:[e("div",{className:"d-flex",children:e(c.exports.Suspense,{fallback:e(g,{}),children:e(_,{})})}),e(v,{id:t})]})};export{C as default};
