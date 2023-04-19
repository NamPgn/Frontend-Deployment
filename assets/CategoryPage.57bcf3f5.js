import{s as t,f as x,u as f,r as b,g as v,b as n,j as e,L as m,h as y,k as D,m as C,M as A,n as S}from"./index.54b909e5.js";import{a as _}from"./index.127bbc30.js";const T=r=>r.category.isLoading,c=t.div``;t.span``;const p=t.p``,$=t.div`
  font-size:18px;
  color:#fff;
  margin:0 20px;
`,k=({id:r})=>{const d=x(_),h=f();return x(T),b.exports.useEffect(()=>{h(v(r)),window.scrollTo({top:0,behavior:"smooth"})},[r]),n(c,{children:[e($,{className:"underline text-3xl font-extrabold dark:text-white",children:"Li\xEAn quan"}),e(c,{className:"categoryMovie px-3 mt-5",children:d?d.map((s,l)=>e(c,{className:"movie_css",children:e(c,{children:n(c,{className:"cateConten cateItem",style:{width:"100%"},children:[e(m,{to:"/q/"+s._id+`?category=${s.name}`,children:e("img",{style:{width:"100%"},src:s.linkImg,alt:""})}),e(c,{className:"cateTitle text-light mt-1",children:e(m,{to:"/q/"+s._id+`?category=${s.name}`,children:e(p,{children:s.name})})}),e(c,{className:"release_date",children:n(p,{children:["T\u1ED5ng ",s.sumSeri," t\u1EADp"]})}),e(c,{className:"release_date",children:e(p,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},l)):"Tr\u1ED1ng!"})]})},u=t.div``,N=t.span``,E=t.button`
padding: 9px 20px;
background: #000;
font-size: 15px;
border-radius: 3px;
`,w=t.div`
background: #00000052;
padding: 20px;
border-radius: 2px;
`,L=()=>{const{id:r}=y(),{data:d,error:h,isLoading:s}=D(C+`/category/products/${r}`),l=[...d||""].sort((i,g)=>Number(i.seri)<Number(g.seri)?1:-1);return e(w,{children:l.length>0?e(u,{className:"product_seri_item",children:l?l.map((i,g)=>e(u,{style:{textAlign:"center"},children:e(m,{to:"/d/"+i._id+`?c=${i.category}?n=${i.name+" "+i.seri} `,children:i.trailer?n(E,{type:"button",className:"btn d-flex  btn-dark ",children:[e(N,{children:i.seri}),e(N,{children:"Raw"})]}):e(E,{type:"button",className:"",children:i.seri})})},g)):"Loading..."}):e(u,{className:"des",children:e(u,{style:{padding:"5px",border:"1px solid #999"},children:"Ch\u01B0a c\u1EADp nh\u1EADt!"})})})},a=t.div``,o=t.p``,P=t.div`
  font-size:20px;
  margin-bottom:10px;
`,q=t.img`
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:3px;
`,R=()=>{const{id:r}=y(),{category:d,isLoading:h}=b.exports.useContext(A);return h?e(S,{}):e(a,{children:d?d.map((s,l)=>s._id==r?e(a,{style:{margin:"20px"},children:n(a,{style:{color:"#fff"},children:[n(a,{className:"d-flex detail_video",children:[e(a,{className:"data_img mb-5",children:e(q,{src:s.linkImg,alt:""})}),n(a,{children:[e(a,{className:"category",children:e(P,{children:s.name})}),n(a,{className:"loai des",children:[e(o,{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"}),n(o,{children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",s._id==r?s.sumSeri:""]}),e(o,{children:"Th\u1EDDi gian: 15-20 ph\xFAt "}),e(o,{children:"N\u0103m ph\xE1t h\xE0nh : 2023"}),e(o,{children:"Ki\u1EC3u: Thuy\u1EBFt minh"})]}),e("br",{}),e(L,{})]})]}),n(a,{className:"des",children:[e(a,{className:"h6",children:"N\u1ED9i dung Phim: "}),e(o,{children:s.des})]})]})},l):""):""})},F=()=>{const{id:r}=y();return n("div",{children:[e("div",{className:"d-flex",children:e(R,{})}),e(k,{id:r})]})};export{F as default};
