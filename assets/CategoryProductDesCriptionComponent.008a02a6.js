import{R as o,_ as h,n as u,c as p,u as m,r as t,g,j as e,b as s,p as E,bw as v}from"./index.7633a770.js";import{c as x}from"./index.127bbc30.js";const _=o.lazy(()=>h(()=>import("./SeriNumberMovie.29ec70d8.js"),["assets/SeriNumberMovie.29ec70d8.js","assets/index.7633a770.js","assets/index.c4e5f747.css"])),N=()=>{const{id:i}=u(),r=p(x),c=m(),[d,n]=t.exports.useState([]);return t.exports.useEffect(()=>{c(g()),(async()=>{const{data:l}=await v(i);n(l)})()},[i]),e("div",{className:"",children:r.map(a=>{if(a._id==i)return e("div",{style:{margin:"20px"},children:s("div",{style:{color:"#fff"},children:[s("div",{className:"d-flex detail_video",children:[e("div",{className:"data_img mb-5",children:e("img",{src:a.linkImg,style:{width:"100%",height:"100%",borderRadius:"3px"},alt:""})}),s("div",{children:[e("div",{className:"category",children:e("h5",{children:a.name})}),s("div",{className:"loai des",children:[e("p",{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"}),s("p",{children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",d.sumSeri]}),e("p",{children:"Th\u1EDDi gian: 15-20 ph\xFAt "}),e("p",{children:"N\u0103m ph\xE1t h\xE0nh : 2023"}),e("p",{})]}),e("br",{}),e(t.exports.Suspense,{fallback:e(E,{}),children:e(_,{})})]})]}),s("div",{className:"des",children:[e("h5",{children:"N\u1ED9i dung Phim: "}),e("p",{children:a.des})]})]})},a._id)})})};export{N as default};
