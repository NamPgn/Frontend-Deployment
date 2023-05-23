import{s as t,n as y,e as v,r as f,o as D,b as r,j as e,c as m,u as x,a as b,d as C,L as A,k as S,p as _}from"./index.2ffb1ffe.js";import{a as T}from"./index.f9a8c38d.js";const $=n=>n.category.isLoading,l=t.div``,w=t.div`
@media (mix-width:768px){
  width:250px;
}
`;t.span``;const g=t.p``,L=t.div`
  font-size:18px;
  color:#fff;
  margin:0 20px;
`,k=({id:n})=>{const d=y(T),h=v();return y($),f.exports.useEffect(()=>{h(D(n)),window.scrollTo({top:0,behavior:"smooth"})},[n]),r(l,{children:[e(L,{className:"underline text-3xl font-extrabold dark:text-white",children:"Li\xEAn quan"}),e(l,{className:"categoryMovie px-3 mt-5",children:d?d.map((s,c)=>e(l,{className:"movie_css",children:e(l,{children:r(w,{className:"cateConten cateItem",style:{width:"100%"},children:[e(m,{to:"/q/"+s._id+`?n=${s.name}`,children:e("img",{style:{width:"100%"},src:s.linkImg,alt:""})}),e(l,{className:"cateTitle text-light mt-1",children:e(m,{to:"/q/"+s._id+`?n=${s.name}`,children:e(g,{children:s.name})})}),e(l,{className:"release_date",children:r(g,{children:["T\u1ED5ng ",s.sumSeri," t\u1EADp"]})}),e(l,{className:"release_date",children:e(g,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},c)):"Tr\u1ED1ng!"})]})},u=t.div``,N=t.span``,E=t.button`
padding: 9px 20px;
background: #000;
font-size: 15px;
border-radius: 3px;
`,P=t.div`
background: #00000052;
padding: 20px;
border-radius: 2px;
`,q=()=>{const{id:n}=x(),{data:d,error:h,isLoading:s}=b(C+`/category/products/${n}`),c=[...d||""].sort((a,p)=>Number(a.seri)<Number(p.seri)?1:-1);return s?e(A,{}):h?e("div",{children:"L\u1ED7i r\u1ED3i"}):e(P,{children:e(u,{className:"product_seri_item",children:c.length>0&&c?c.map((a,p)=>e(u,{style:{textAlign:"center"},children:e(m,{to:"/d/"+a._id+`?c=${a.category}?n=${a.name+" "+a.seri} `,children:a.trailer?r(E,{type:"button",className:"btn d-flex  btn-dark ",children:[e(N,{children:a.seri}),e(N,{children:"Raw"})]}):e(E,{type:"button",className:"",children:a.seri})})},p)):e(u,{className:"des",children:e(u,{style:{padding:"5px",border:"1px solid #999",fontSize:"12px"},children:"Ch\u01B0a c\u1EADp nh\u1EADt!"})})})})},i=t.div``,o=t.p``,R=t.div`
  font-size:20px;
  margin-bottom:10px;
`,j=t.img`
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:3px;
`,z=()=>{const{id:n}=x(),{category:d,isLoading:h}=f.exports.useContext(S);return h?e(_,{}):e(i,{children:d?d.map((s,c)=>s._id==n?e(i,{style:{margin:"20px"},children:r(i,{style:{color:"#fff"},children:[r(i,{className:"d-flex detail_video",children:[e(i,{className:"data_img mb-5",children:e(j,{src:s.linkImg,alt:""})}),r(i,{children:[e(i,{className:"category",children:e(R,{children:s.name})}),r(i,{className:"loai des",children:[e(o,{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"}),r(o,{children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",s._id==n?s.sumSeri:""]}),e(o,{children:"Th\u1EDDi gian: 15-20 ph\xFAt "}),e(o,{children:"N\u0103m ph\xE1t h\xE0nh : 2023"}),e(o,{children:"Ki\u1EC3u: Thuy\u1EBFt minh"})]}),e("br",{}),e(q,{})]})]}),r(i,{className:"des",children:[e(i,{className:"h6",children:"N\u1ED9i dung Phim: "}),e(o,{children:s.des})]})]})},c):""):""})},I=()=>{const{id:n}=x();return r("div",{children:[e("div",{className:"d-flex",children:e(z,{})}),e(k,{id:n})]})};export{I as default};
