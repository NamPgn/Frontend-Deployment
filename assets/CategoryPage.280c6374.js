import{s as t,e as y,f as D,r as f,n as b,b as n,j as e,c as m,u as x,a as v,d as C,L as A,M as S,p as _}from"./index.94ba3f66.js";import{a as T}from"./index.127bbc30.js";const $=r=>r.category.isLoading,c=t.div``;t.span``;const g=t.p``,L=t.div`
  font-size:18px;
  color:#fff;
  margin:0 20px;
`,w=({id:r})=>{const d=y(T),h=D();return y($),f.exports.useEffect(()=>{h(b(r)),window.scrollTo({top:0,behavior:"smooth"})},[r]),n(c,{children:[e(L,{className:"underline text-3xl font-extrabold dark:text-white",children:"Li\xEAn quan"}),e(c,{className:"categoryMovie px-3 mt-5",children:d?d.map((s,l)=>e(c,{className:"movie_css",children:e(c,{children:n(c,{className:"cateConten cateItem",style:{width:"100%"},children:[e(m,{to:"/q/"+s._id+`?n=${s.name}`,children:e("img",{style:{width:"100%"},src:s.linkImg,alt:""})}),e(c,{className:"cateTitle text-light mt-1",children:e(m,{to:"/q/"+s._id+`?n=${s.name}`,children:e(g,{children:s.name})})}),e(c,{className:"release_date",children:n(g,{children:["T\u1ED5ng ",s.sumSeri," t\u1EADp"]})}),e(c,{className:"release_date",children:e(g,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},l)):"Tr\u1ED1ng!"})]})},u=t.div``,N=t.span``,E=t.button`
padding: 9px 20px;
background: #000;
font-size: 15px;
border-radius: 3px;
`,k=t.div`
background: #00000052;
padding: 20px;
border-radius: 2px;
`,P=()=>{const{id:r}=x(),{data:d,error:h,isLoading:s}=v(C+`/category/products/${r}`),l=[...d||""].sort((a,p)=>Number(a.seri)<Number(p.seri)?1:-1);return s?e(A,{}):h?"L\u1ED7i r\u1ED3i":e(k,{children:e(u,{className:"product_seri_item",children:l.length>0&&l?l.map((a,p)=>e(u,{style:{textAlign:"center"},children:e(m,{to:"/d/"+a._id+`?c=${a.category}?n=${a.name+" "+a.seri} `,children:a.trailer?n(E,{type:"button",className:"btn d-flex  btn-dark ",children:[e(N,{children:a.seri}),e(N,{children:"Raw"})]}):e(E,{type:"button",className:"",children:a.seri})})},p)):e(u,{className:"des",children:e(u,{style:{padding:"5px",border:"1px solid #999"},children:"Ch\u01B0a c\u1EADp nh\u1EADt!"})})})})},i=t.div``,o=t.p``,q=t.div`
  font-size:20px;
  margin-bottom:10px;
`,R=t.img`
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:3px;
`,j=()=>{const{id:r}=x(),{category:d,isLoading:h}=f.exports.useContext(S);return h?e(_,{}):e(i,{children:d?d.map((s,l)=>s._id==r?e(i,{style:{margin:"20px"},children:n(i,{style:{color:"#fff"},children:[n(i,{className:"d-flex detail_video",children:[e(i,{className:"data_img mb-5",children:e(R,{src:s.linkImg,alt:""})}),n(i,{children:[e(i,{className:"category",children:e(q,{children:s.name})}),n(i,{className:"loai des",children:[e(o,{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"}),n(o,{children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",s._id==r?s.sumSeri:""]}),e(o,{children:"Th\u1EDDi gian: 15-20 ph\xFAt "}),e(o,{children:"N\u0103m ph\xE1t h\xE0nh : 2023"}),e(o,{children:"Ki\u1EC3u: Thuy\u1EBFt minh"})]}),e("br",{}),e(P,{})]})]}),n(i,{className:"des",children:[e(i,{className:"h6",children:"N\u1ED9i dung Phim: "}),e(o,{children:s.des})]})]})},l):""):""})},I=()=>{const{id:r}=x();return n("div",{children:[e("div",{className:"d-flex",children:e(j,{})}),e(w,{id:r})]})};export{I as default};
