import{R as m,_ as p,s as c,h as g,c as E,u as y,r as n,bn as x,j as e,b as a,bw as f}from"./index.edcae809.js";import{c as _}from"./index.127bbc30.js";const b=m.lazy(()=>p(()=>import("./SeriNumberMovie.3f800dc1.js"),["assets/SeriNumberMovie.3f800dc1.js","assets/index.edcae809.js","assets/index.c7a94630.css"])),s=c.div``;c.span``;const i=c.p``;c.button``;const D=c.div`
  font-size:20px;
  margin-bottom:10px;
`,N=c.img`
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:3px;
`,S=()=>{const{id:r}=g(),l=E(_),d=y(),[o,h]=n.exports.useState([]);return n.exports.useEffect(()=>{d(x()),(async()=>{const{data:u}=await f(r);h(u)})()},[r]),e(s,{className:"",children:l.map(t=>{if(t._id==r)return e(s,{style:{margin:"20px"},children:a(s,{style:{color:"#fff"},children:[a(s,{className:"d-flex detail_video",children:[e(s,{className:"data_img mb-5",children:e(N,{src:t.linkImg,alt:""})}),a(s,{children:[e(s,{className:"category",children:e(D,{children:t.name})}),a(s,{className:"loai des",children:[e(i,{children:"Th\u1EC3 lo\u1EA1i : Ki\u1EBFm hi\u1EC7p, truy\u1EC7n"}),a(i,{children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",o.sumSeri]}),e(i,{children:"Th\u1EDDi gian: 15-20 ph\xFAt "}),e(i,{children:"N\u0103m ph\xE1t h\xE0nh : 2023"}),e(i,{children:"Ki\u1EC3u: Thuy\u1EBFt minh"})]}),e("br",{}),e(b,{})]})]}),a(s,{className:"des",children:[e(s,{className:"h6",children:"N\u1ED9i dung Phim: "}),e(i,{children:t.des})]})]})},t._id)})})};export{S as default};
