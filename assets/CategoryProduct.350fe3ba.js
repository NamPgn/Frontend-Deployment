import{u,$ as m,a as g,r as n,a0 as p,b as r,j as e,L as h,V as v,a1 as y,a2 as N,a3 as x,C as f,a4 as E}from"./index.2e198e43.js";const _=({id:s})=>{const d=u(m),c=g();return n.exports.useEffect(()=>{c(p(s))},[s]),r("div",{children:[e("h5",{children:"Li\xEAn quan"}),e("div",{className:"categoryMovie",children:d?d.map((t,l)=>e("div",{className:"movie_css",children:e("div",{children:r("div",{className:"cateConten cateItem",style:{width:"100%"},children:[e(h,{to:"/product/category/"+t._id+`?category=${t.name}`,children:e("img",{style:{width:"100%"},src:t.linkImg,alt:""})}),e("div",{className:"cateTitle text-light mt-1",children:e(h,{to:"/product/category/"+t._id+`?category=${t.name}`,children:e("p",{children:t.name})})}),e("div",{className:"release_date",children:e("p",{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},l)):""})]})},b=()=>{const{id:s}=v(),[d,c]=n.exports.useState([]),t=u(y),l=g();return n.exports.useEffect(()=>{(async()=>{const a=await E();c(a)})(),l(N())},[]),r("div",{children:[r("div",{className:"d-flex",children:[e("div",{className:"col-md-9",children:t.map(i=>{if(i._id==s)return e("div",{style:{margin:"20px"},children:r("div",{style:{color:"#fff"},children:[r("div",{className:"d-flex detail_video",children:[e("div",{style:{maxWidth:"200px"},className:"data_img",children:e("img",{src:i.linkImg,style:{width:"100%",borderRadius:"3px"},alt:""})}),r("div",{children:[e("div",{className:"category",children:e("p",{children:i.name})}),e("div",{className:"loai",children:e("p",{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"})}),e("div",{children:"S\u1ED1 t\u1EADp :"}),e("br",{}),e("div",{className:"product_seri_item",children:d.filter(({category:{_id:a}})=>a==s).sort((a,o)=>Number(a.seri)<Number(o.seri)?1:-1).map((a,o)=>e("div",{style:{border:"1px solid #fff",textAlign:"center",padding:"0 8px"},children:e(x,{to:"/detail/"+a._id,children:a?e("button",{type:"button",className:"btn btn-dark",children:a.seri}):""})},a._id))})]})]}),r("div",{className:"des",children:[e("h5",{children:"N\u1ED9i dung Phim: "}),e("p",{children:i.des})]})]})},i._id)})}),e(f,{})]}),e(_,{id:s})]})};export{b as default};
