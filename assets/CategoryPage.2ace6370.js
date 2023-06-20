import{s as t,e as N,f as D,u as f,r as m,g as b,b as r,j as e,L as x,h as y,k as C,n as A,o as S,M as w,p as _,C as T}from"./index.086f2bd3.js";const $=n=>n.category.isLoading,l=t.div``,L=t.div`
@media (mix-width:768px){
  width:250px;
}
`;t.span``;const g=t.p``,k=t.div`
  font-size:18px;
  color:#fff;
  margin:0 20px;
`,P=({id:n})=>{const i=N(D),h=f();return N($),m.exports.useEffect(()=>{h(b(n)),window.scrollTo({top:0,behavior:"smooth"})},[n]),r(l,{children:[e(k,{className:"underline text-3xl ",children:"Li\xEAn quan"}),e(l,{className:"categoryMovie px-3 mt-5",children:i?i.map((s,c)=>e(l,{className:"movie_css",children:e(l,{children:r(L,{className:"cateConten cateItem",style:{width:"100%"},children:[e(x,{to:"/q/"+s._id+`?n=${s.name}`,children:e("img",{style:{width:"100%"},src:s.linkImg,alt:""})}),e(l,{className:"cateTitle text-white mt-1",children:e(x,{to:"/q/"+s._id+`?n=${s.name}`,children:e(g,{children:s.name})})}),e(l,{className:"release_date",children:r(g,{children:["T\u1ED5ng ",s.sumSeri," t\u1EADp"]})}),e(l,{className:"release_date",children:e(g,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},c)):"Tr\u1ED1ng!"})]})},u=t.div``,E=t.span``,v=t.button`
padding: 9px 20px;
background: #000;
font-size: 15px;
border-radius: 3px;
`,q=t.div`
background: #00000052;
padding: 20px;
border-radius: 2px;
`,R=()=>{const{id:n}=y(),{data:i,error:h,isLoading:s}=C(A+`/category/products/${n}`),c=[...i||""].sort((a,p)=>Number(a.seri)<Number(p.seri)?1:-1);return s?e(S,{}):h?e("div",{children:"L\u1ED7i r\u1ED3i"}):e(q,{children:e(u,{className:"product_seri_item",children:c.length>0&&c?c.map((a,p)=>(console.log(a),e(u,{style:{textAlign:"center"},children:e(x,{to:"/d/"+a._id+`?c=${a.category}?n=${a.name+" "+a.seri} `,children:a.trailer?r(v,{type:"button",className:"btn d-flex  btn-dark ",children:[e(E,{children:a.seri}),e(E,{children:"Raw"})]}):e(v,{type:"button",className:"",children:a.seri})})},p))):e(u,{className:"des",children:e(u,{style:{padding:"5px",border:"1px solid #999",fontSize:"12px"},children:"Ch\u01B0a c\u1EADp nh\u1EADt!"})})})})},d=t.div``,o=t.p``,j=t.div`
  font-size:20px;
  margin-bottom:10px;
`,z=t.img`
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:3px;
`,B=()=>{const{id:n}=y(),{category:i,isLoading:h}=m.exports.useContext(w);return h?e(_,{}):e(d,{children:i?i.map((s,c)=>s._id==n?e(d,{style:{margin:"20px"},children:r(d,{style:{color:"#fff"},children:[r(d,{className:"d-flex detail_video",children:[e(d,{className:"data_img mb-5",children:e(z,{src:s.linkImg,alt:""})}),r(d,{children:[e(d,{className:"category",children:e(j,{children:s.name})}),r(d,{className:"loai des",children:[e(o,{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"}),r(o,{children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",s._id==n?s.sumSeri:""]}),e(o,{children:"Th\u1EDDi gian: 15-20 ph\xFAt "}),e(o,{children:"N\u0103m ph\xE1t h\xE0nh : 2023"}),e(o,{children:"Ki\u1EC3u: Thuy\u1EBFt minh"})]}),e("br",{}),e(R,{})]})]}),r(d,{className:"des",children:[e(d,{className:"h6",children:"N\u1ED9i dung Phim: "}),e(o,{children:s.des})]})]})},c):""):""})},I=()=>{const{id:n}=y(),{state:i}=m.exports.useContext(T);return r("div",{className:i?"w-11/12":"w-9/12",children:[e("div",{className:"d-flex",children:e(B,{})}),e(P,{id:n})]})};export{I as default};
