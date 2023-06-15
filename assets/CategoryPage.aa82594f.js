import{s as n,n as y,e as D,r as v,y as f,b as r,j as e,c as m,u as x,a as b,d as C,L as A,x as S,z as _}from"./index.fab02c97.js";import{b as w}from"./index.5f92d736.js";const T=t=>t.category.isLoading,l=n.div``,$=n.div`
@media (mix-width:768px){
  width:250px;
}
`;n.span``;const g=n.p``,L=n.div`
  font-size:18px;
  color:#fff;
  margin:0 20px;
`,P=({id:t})=>{const d=y(w),h=D();return y(T),v.exports.useEffect(()=>{h(f(t)),window.scrollTo({top:0,behavior:"smooth"})},[t]),r(l,{children:[e(L,{className:"underline text-3xl ",children:"Li\xEAn quan"}),e(l,{className:"categoryMovie px-3 mt-5",children:d?d.map((s,c)=>e(l,{className:"movie_css",children:e(l,{children:r($,{className:"cateConten cateItem",style:{width:"100%"},children:[e(m,{to:"/q/"+s._id+`?n=${s.name}`,children:e("img",{style:{width:"100%"},src:s.linkImg,alt:""})}),e(l,{className:"cateTitle text-white mt-1",children:e(m,{to:"/q/"+s._id+`?n=${s.name}`,children:e(g,{children:s.name})})}),e(l,{className:"release_date",children:r(g,{children:["T\u1ED5ng ",s.sumSeri," t\u1EADp"]})}),e(l,{className:"release_date",children:e(g,{children:"Th\u1EDDi gian 20/12 ph\xFAt"})})]})})},c)):"Tr\u1ED1ng!"})]})},u=n.div``,N=n.span``,E=n.button`
padding: 9px 20px;
background: #000;
font-size: 15px;
border-radius: 3px;
`,k=n.div`
background: #00000052;
padding: 20px;
border-radius: 2px;
`,q=()=>{const{id:t}=x(),{data:d,error:h,isLoading:s}=b(C+`/category/products/${t}`),c=[...d||""].sort((i,p)=>Number(i.seri)<Number(p.seri)?1:-1);return s?e(A,{}):h?e("div",{children:"L\u1ED7i r\u1ED3i"}):e(k,{children:e(u,{className:"product_seri_item",children:c.length>0&&c?c.map((i,p)=>(console.log(i),e(u,{style:{textAlign:"center"},children:e(m,{to:"/d/"+i._id+`?c=${i.category}?n=${i.name+" "+i.seri} `,children:i.trailer?r(E,{type:"button",className:"btn d-flex  btn-dark ",children:[e(N,{children:i.seri}),e(N,{children:"Raw"})]}):e(E,{type:"button",className:"",children:i.seri})})},p))):e(u,{className:"des",children:e(u,{style:{padding:"5px",border:"1px solid #999",fontSize:"12px"},children:"Ch\u01B0a c\u1EADp nh\u1EADt!"})})})})},a=n.div``,o=n.p``,z=n.div`
  font-size:20px;
  margin-bottom:10px;
`,R=n.img`
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:3px;
`,j=()=>{const{id:t}=x(),{category:d,isLoading:h}=v.exports.useContext(S);return h?e(_,{}):e(a,{children:d?d.map((s,c)=>s._id==t?e(a,{style:{margin:"20px"},children:r(a,{style:{color:"#fff"},children:[r(a,{className:"d-flex detail_video",children:[e(a,{className:"data_img mb-5",children:e(R,{src:s.linkImg,alt:""})}),r(a,{children:[e(a,{className:"category",children:e(z,{children:s.name})}),r(a,{className:"loai des",children:[e(o,{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"}),r(o,{children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",s._id==t?s.sumSeri:""]}),e(o,{children:"Th\u1EDDi gian: 15-20 ph\xFAt "}),e(o,{children:"N\u0103m ph\xE1t h\xE0nh : 2023"}),e(o,{children:"Ki\u1EC3u: Thuy\u1EBFt minh"})]}),e("br",{}),e(q,{})]})]}),r(a,{className:"des",children:[e(a,{className:"h6",children:"N\u1ED9i dung Phim: "}),e(o,{children:s.des})]})]})},c):""):""})},I=()=>{const{id:t}=x();return r("div",{className:"w-9/12",children:[e("div",{className:"d-flex",children:e(j,{})}),e(P,{id:t})]})};export{I as default};
