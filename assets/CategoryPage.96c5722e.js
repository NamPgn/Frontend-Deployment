import{s as t,f as x,u as f,r as b,g as v,b as n,j as e,L as m,h as y,k as D,m as C,M as A,n as S}from"./index.d1cd217e.js";import{a as _}from"./index.127bbc30.js";const T=r=>r.category.isLoading,d=t.div``;t.span``;const p=t.p``,$=t.div`
  font-size:18px;
  color:#fff;
  margin:0 20px;
`,L=({id:r})=>{const a=x(_),h=f();return x(T),b.exports.useEffect(()=>{h(v(r)),window.scrollTo({top:0,behavior:"smooth"})},[r]),n(d,{children:[e($,{children:"Li\xEAn quan"}),e(d,{className:"categoryMovie px-3 mt-5",children:a?a.map((s,l)=>e(d,{className:"movie_css",children:e(d,{children:n(d,{className:"cateConten cateItem",style:{width:"100%"},children:[e(m,{to:"/q/"+s._id+`?category=${s.name}`,children:e("img",{style:{width:"100%"},src:s.linkImg,alt:""})}),e(d,{className:"cateTitle text-light mt-1",children:e(m,{to:"/q/"+s._id+`?category=${s.name}`,children:e(p,{children:s.name})})}),e(d,{className:"release_date",children:n(p,{children:["T\u1ED5ng ",s.sumSeri," t\u1EADp"]})}),e(d,{className:"release_date",children:e(p,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},l)):"Tr\u1ED1ng!"})]})},u=t.div``,N=t.span``,E=t.button`
padding: 9px 20px;
background: #000;
font-size: 15px;
border-radius: 3px;
`,k=t.div`
background: #00000052;
padding: 20px;
border-radius: 2px;
`,w=()=>{const{id:r}=y(),{data:a,error:h,isLoading:s}=D(C+`/category/products/${r}`),l=[...a||""].sort((c,g)=>Number(c.seri)<Number(g.seri)?1:-1);return e(k,{children:l.length>0?e(u,{className:"product_seri_item",children:l?l.map((c,g)=>e(u,{style:{textAlign:"center"},children:e(m,{to:"/d/"+c._id+`?c=${c.category}?n=${c.name+" "+c.seri} `,children:c.trailer?n(E,{type:"button",className:"btn d-flex  btn-dark ",children:[e(N,{children:c.seri}),e(N,{children:"Raw"})]}):e(E,{type:"button",className:"",children:c.seri})})},g)):"Loading..."}):e(u,{className:"des",children:e(u,{style:{padding:"5px",border:"1px solid #999"},children:"Ch\u01B0a c\u1EADp nh\u1EADt!"})})})},i=t.div``,o=t.p``,P=t.div`
  font-size:20px;
  margin-bottom:10px;
`,q=t.img`
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:3px;
`,R=()=>{const{id:r}=y(),{category:a,isLoading:h}=b.exports.useContext(A);return h?e(S,{}):e(i,{children:a?a.map((s,l)=>s._id==r?e(i,{style:{margin:"20px"},children:n(i,{style:{color:"#fff"},children:[n(i,{className:"d-flex detail_video",children:[e(i,{className:"data_img mb-5",children:e(q,{src:s.linkImg,alt:""})}),n(i,{children:[e(i,{className:"category",children:e(P,{children:s.name})}),n(i,{className:"loai des",children:[e(o,{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"}),n(o,{children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",s._id==r?s.sumSeri:""]}),e(o,{children:"Th\u1EDDi gian: 15-20 ph\xFAt "}),e(o,{children:"N\u0103m ph\xE1t h\xE0nh : 2023"}),e(o,{children:"Ki\u1EC3u: Thuy\u1EBFt minh"})]}),e("br",{}),e(w,{})]})]}),n(i,{className:"des",children:[e(i,{className:"h6",children:"N\u1ED9i dung Phim: "}),e(o,{children:a.des})]})]})},l):""):""})},F=()=>{const{id:r}=y();return n("div",{children:[e("div",{className:"d-flex",children:e(R,{})}),e(L,{id:r})]})};export{F as default};
