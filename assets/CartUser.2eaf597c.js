import{c as l,i as u,o as p,u as g,r as m,g as f,bA as x,b as r,j as t,L as n,p as d,bB as y}from"./index.73504b2c.js";import{c as v}from"./index.27690e81.js";import{h as b}from"./moment.9709ab41.js";import{c as N}from"./index.127bbc30.js";const E=()=>{try{const{cart:a}=l(v),c=l(N),i=u(),h=p(i.token),s=g();return m.exports.useEffect(()=>{s(f()),s(x(h._id))},[]),r("div",{children:[r("h1",{className:"mb-4 text-3xl font-extrabold  dark:text-white md:text-5xl lg:text-6xl",children:[t("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400",children:"Better Data"})," Scalable AI."]}),t("p",{className:"text-lg font-normal  xs:text-xl text-light",children:"Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."}),r("div",{className:" d-flex align-items-center justify-content-between",style:{height:"100vh"},children:[t("div",{children:a&&a.length?a.map((e,o)=>t("div",{style:{padding:"20px 0"},children:r("div",{className:"d-flex align-items-center justify-content-between",children:[r("div",{className:"searhValue",children:[t(n,{to:"/detail/"+e.product._id+`?category=${e.product.category}?name=${decodeURI(e.product.name)+" "+e.product.seri} `,children:t("div",{className:"searchValueImg",children:t("img",{src:d(c,e.product.category).linkImg,style:{borderRadius:"5px"},alt:""})})}),t(n,{to:"/detail/"+e.product._id+`?category=${e.product.category}?name=${decodeURI(e.product.name)+" "+e.product.seri} `,children:r("div",{className:"des",children:[e.product.name+" "+e.product.seri,r("p",{className:"mt-2",children:["Ng\xE0y th\xEAm: ",b(e.date).format("LTS DD-MM-YYYY")]}),r("p",{children:["T\u1EADp: ",e.product.seri]}),r("p",{className:"mt-1",children:["Danh m\u1EE5c: ",d(c,e.product.category).name]})]})})]},o),t("div",{children:t("i",{class:"fa-solid fa-trash-can text-light"})})]})},o)):t("div",{style:{color:"#fff",textAlign:"center"},children:"Not Found"})}),t(y,{})]})]})}catch{return t("div",{style:{color:"#fff",textAlign:"center"},children:"\u0110\u0103ng nh\u1EADp"})}};export{E as default};