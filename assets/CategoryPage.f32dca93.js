import{s as r,f as m,u as f,r as b,g as v,b as n,j as e,L as y,h as x,k as D,m as C,n as A}from"./index.e2c873a8.js";import{a as _,c as S}from"./index.127bbc30.js";const $=t=>t.category.isLoading,i=r.div``;r.span``;const p=r.p``,T=r.div`
  font-size:18px;
  color:#fff;
  margin:0 20px;
`,k=({id:t})=>{const d=m(_),h=f();return m($),b.exports.useEffect(()=>{h(v(t)),window.scrollTo({top:0,behavior:"smooth"})},[t]),n(i,{children:[e(T,{children:"Li\xEAn quan"}),e(i,{className:"categoryMovie px-3 mt-5",children:d?d.map((s,o)=>e(i,{className:"movie_css",children:e(i,{children:n(i,{className:"cateConten cateItem",style:{width:"100%"},children:[e(y,{to:"/q/"+s._id+`?category=${s.name}`,children:e("img",{style:{width:"100%"},src:s.linkImg,alt:""})}),e(i,{className:"cateTitle text-light mt-1",children:e(y,{to:"/q/"+s._id+`?category=${s.name}`,children:e(p,{children:s.name})})}),e(i,{className:"release_date",children:n(p,{children:["T\u1ED5ng ",s.sumSeri," t\u1EADp"]})}),e(i,{className:"release_date",children:e(p,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},o)):"Tr\u1ED1ng!"})]})},u=r.div``,N=r.span``,E=r.button`
padding: 9px 20px;
background: #000;
font-size: 15px;
border-radius: 3px;
`,w=r.div`
background: #00000052;
padding: 20px;
border-radius: 2px;
`,P=()=>{const{id:t}=x(),{data:d,error:h,isLoading:s}=D(C+`/category/products/${t}`),o=[...d||""].sort((c,g)=>Number(c.seri)<Number(g.seri)?1:-1);return e(w,{children:o.length>0?e(u,{className:"product_seri_item",children:o?o.map((c,g)=>e(u,{style:{textAlign:"center"},children:e(y,{to:"/d/"+c._id+`?c=${c.category}?n=${c.name+" "+c.seri} `,children:c.trailer?n(E,{type:"button",className:"btn d-flex  btn-dark ",children:[e(N,{children:c.seri}),e(N,{children:"Raw"})]}):e(E,{type:"button",className:"",children:c.seri})})},g)):"Loading..."}):e(u,{className:"des",children:e(u,{style:{padding:"5px",border:"1px solid #999"},children:"Ch\u01B0a c\u1EADp nh\u1EADt!"})})})},a=r.div``,l=r.p``,q=r.div`
  font-size:20px;
  margin-bottom:10px;
`,L=r.img`
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:3px;
`,R=()=>{const{id:t}=x(),d=m(S),h=f();return b.exports.useEffect(()=>{h(A())},[t]),e(a,{children:d.map(s=>s._id==t?e(a,{style:{margin:"20px"},children:n(a,{style:{color:"#fff"},children:[n(a,{className:"d-flex detail_video",children:[e(a,{className:"data_img mb-5",children:e(L,{src:s.linkImg,alt:""})}),n(a,{children:[e(a,{className:"category",children:e(q,{children:s.name})}),n(a,{className:"loai des",children:[e(l,{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"}),n(l,{children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",s._id==t?s.sumSeri:""]}),e(l,{children:"Th\u1EDDi gian: 15-20 ph\xFAt "}),e(l,{children:"N\u0103m ph\xE1t h\xE0nh : 2023"}),e(l,{children:"Ki\u1EC3u: Thuy\u1EBFt minh"})]}),e("br",{}),e(P,{})]})]}),n(a,{className:"des",children:[e(a,{className:"h6",children:"N\u1ED9i dung Phim: "}),e(l,{children:s.des})]})]})},s._id):"")})},F=()=>{const{id:t}=x();return n("div",{children:[e("div",{className:"d-flex",children:e(R,{})}),e(k,{id:t})]})};export{F as default};
