import{h as d,bO as i,j as r,L as o,b as l,bP as c}from"./index.d7c66afc.js";const h=()=>{const{id:n}=d(),{data:t,error:p,isLoading:u}=i(c+`/category/products/${n}`),s=[...t||""].sort((e,a)=>Number(e.seri)<Number(a.seri)?1:-1);return r("div",{children:s.length>0?r("div",{className:"product_seri_item",children:s?s.map((e,a)=>r("div",{style:{textAlign:"center"},children:r(o,{to:"/detail/"+e._id+`?category=${e.category}?name=${e.name+" "+e.seri} `,children:e.trailer?l("button",{type:"button",className:"btn d-flex  btn-dark ",style:{padding:"8px 9px",fontSize:"14px"},children:[r("span",{children:e.seri}),r("span",{children:"Raw"})]}):r("button",{type:"button",className:"btn btn-dark",style:{padding:"6px 20px",boxShadow:"0 0 2px #999"},children:e.seri})})},a)):"Loading..."}):r("div",{className:"des",children:r("p",{style:{padding:"5px",border:"1px solid #999"},children:"Ch\u01B0a c\u1EADp nh\u1EADt!"})})})};export{h as default};
