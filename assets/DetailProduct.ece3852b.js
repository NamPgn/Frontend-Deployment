import{r as c,u as d,T as o,U as h,a as u,V as f,i as p,W as b,X as N,j as e,F as g,b as a,Y as x,Z as v,L as y,C as k}from"./index.2e198e43.js";import"./jwt-decode.esm.19dc4d55.js";const D=()=>{const[i,w]=c.exports.useState(""),n=d(o),t=d(h),l=u(),{id:r}=f();return p(),c.exports.useEffect(()=>{l(b(r)),l(N())},[r]),e(g,{children:a(x.Fragment,{children:[e(v,{}),a("div",{className:"d-flex",children:[e("div",{className:"col-sm-9",children:e("div",{style:{margin:"12px 5px"},children:t?a("div",{children:[e("video",{title:"vimeo-player",controls:!0,autoPlay:!0,muted:!0,src:t.linkVideo,width:"100%",height:"100%",frameBorder:"0",allowFullScreen:!0}),a("div",{style:{color:"#fff",margin:"10px 10px",textAlign:"end"},children:[e("i",{className:"fa-solid fa-eye"}),t.price," View"]}),e("h4",{className:"mt-4 mb-4",children:t.name+" "+t.seri}),a("h5",{children:["T\u1EADp s\u1ED1 ",t.seri+" / 40"," "]}),e("div",{className:"d-flex",children:n.filter(s=>s.category==t.category).sort((s,m)=>Number(s.seri)<Number(m.seri)?1:-1).map(s=>e("div",{children:e(y,{to:"/detail/"+s._id,children:s._id==r?a("button",{className:"btnMovieSeri bg-primary",children:["T\u1EADp ",s.seri]}):a("button",{className:"btnMovieSeri",children:["T\u1EADp ",s.seri]})})},s._id))}),a("div",{className:"p-3 mt-3 mb-3 text-white rounded",style:{background:"rgb(0 0 0 / 47%)"},children:["B\u1EA3n quy\u1EC1n video thu\u1ED9c : ",a("a",{href:t.LinkCopyright,children:["  ",t.copyright," "]})]}),a("div",{className:"des mt-5 mb-5",children:[e("h5",{children:"N\u1ED9i dung Phim: "}),e("p",{children:t.descriptions}),e("h4",{className:"mt-5",children:"B\xECnh lu\u1EADn"}),e("section",{children:e("div",{className:"container py-5",children:e("div",{className:"row",children:e("div",{className:"col-md-12 col-lg-10 col-xl-8",children:a("div",{className:"card ",style:{background:"#fff",textAlign:"start"},children:[a("div",{className:"card-body",children:[a("div",{className:"d-flex flex-start align-items-center",children:[e("img",{className:"rounded-circle shadow-1-strong me-3 ",style:{objectFit:"cover"},src:i.image,alt:"avatar",width:"60",height:"60"}),a("div",{children:[e("h6",{className:"fw-bold text-dark mb-1",children:"Lily Coleman"}),e("p",{className:"  text-dark small mb-0",children:"Shared publicly - Jan 2020"})]})]}),e("p",{className:"mt-3 mb-4 pb-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat."}),a("div",{className:"small d-flex justify-content-start",children:[a("a",{href:"#!",className:"d-flex align-items-center me-3",children:[e("i",{className:"far fa-thumbs-up me-2 text-dark"}),e("p",{className:"mb-0",children:"Like"})]}),a("a",{href:"#!",className:"d-flex align-items-center me-3",children:[e("i",{className:"far fa-comment-dots me-2 text-dark"}),e("p",{className:"mb-0",children:"Comment"})]}),a("a",{href:"#!",className:"d-flex align-items-center me-3",children:[e("i",{className:"fas fa-share me-2 text-dark"}),e("p",{className:"mb-0",children:"Share"})]})]})]}),a("div",{className:"card-footer py-3 border-0",style:{background:"#f8f9fa"},children:[a("div",{className:"d-flex flex-start w-100",children:[e("img",{className:"rounded-circle shadow-1-strong me-3",src:i.image,style:{objectFit:"cover"},alt:"avatar",width:"40",height:"40"}),a("div",{className:"form-outline w-100",children:[e("textarea",{className:"form-control",id:"textAreaExample",rows:"4",style:{background:"background: #fff"}}),e("label",{className:"form-label",htmlFor:"textAreaExample",children:"Message"})]})]}),a("div",{className:"float-end mt-2 pt-1",children:[e("button",{type:"button",className:"btn btn-primary btn-sm",children:"Post comment"}),e("button",{type:"button",className:"btn btn-outline-primary btn-sm",children:"Cancel"})]})]})]})})})})})]})]}):""})}),e(k,{})]})]})})};export{D as default};
