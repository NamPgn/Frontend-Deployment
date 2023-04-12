import{R as m,_ as p,s as r,h as g,f as E,u as y,r as n,bm as f,j as e,b as a,bv as x}from"./index.49430263.js";import{c as _}from"./index.127bbc30.js";const b=m.lazy(()=>p(()=>import("./SeriNumberMovie.26756c13.js"),["assets/SeriNumberMovie.26756c13.js","assets/index.49430263.js","assets/index.96956c0a.css"])),s=r.div``;r.span``;const i=r.p``;r.button``;const v=r.div`
  font-size:20px;
  margin-bottom:10px;
`,D=r.img`
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:3px;
`,S=()=>{const{id:c}=g(),l=E(_),d=y(),[o,h]=n.exports.useState([]);return n.exports.useEffect(()=>{d(f()),(async()=>{const{data:u}=await x(c);h(u)})()},[c]),e(s,{className:"",children:l.map(t=>{if(t._id==c)return e(s,{style:{margin:"20px"},children:a(s,{style:{color:"#fff"},children:[a(s,{className:"d-flex detail_video",children:[e(s,{className:"data_img mb-5",children:e(D,{src:t.linkImg,alt:""})}),a(s,{children:[e(s,{className:"category",children:e(v,{children:t.name})}),a(s,{className:"loai des",children:[e(i,{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"}),a(i,{children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",o.sumSeri]}),e(i,{children:"Th\u1EDDi gian: 15-20 ph\xFAt "}),e(i,{children:"N\u0103m ph\xE1t h\xE0nh : 2023"}),e(i,{children:"Ki\u1EC3u: Thuy\u1EBFt minh"})]}),e("br",{}),e(b,{})]})]}),a(s,{className:"des",children:[e(s,{className:"h6",children:"N\u1ED9i dung Phim: "}),e(i,{children:t.des})]})]})},t._id)})})};export{S as default};
