import{l as Qt,n as es,p as ut,q as v,t as G,m as Y,r as i,j as e,v as ts,w as ss,s as x,x as as,y as ns,z as xt,A as rs,F as is,H as ht,G as os,J as mt,K as ls,O as ds,V as cs,W as us,X as xs,Y as hs,Z as ms,_ as pt,$ as ps,a0 as gs,a1 as ys,a2 as fs,a3 as Oe,B as js,a4 as ce,a5 as vs,a6 as le,u as De,a7 as gt,a8 as We,a9 as ws,R as ye,aa as bs,ab as yt,ac as ks,a as ee,ad as Ge,ae as Ye,af as Cs,U as ue,L as ft,ag as Ns,ah as Ne,ai as Se,aj as jt,ak as vt,al as wt,N as Ke,am as Ss,an as _s,ao as bt,ap as As,aq as kt,ar as Ts,as as Is,T as Ct,C as Ls,at as Ps,au as Es,d as Nt,i as _e,av as St,o as $s,c as _t,b as Ae,e as Rs,aw as fe,ax as re,ay as ie,az as zs,aA as Os,aB as Ds,S as Bs,E as be,aC as ke,aD as Ms,aE as Fs,aF as Vs,Q as B,aG as Us,aH as Hs,aI as qs,aJ as Ws,aK as Gs,aL as Xe,aM as Je,aN as Ys,aO as Ks,aP as Xs,aQ as Js,aR as Zs,aS as Qs,aT as ea,aU as ta,aV as sa,aW as Ze,aX as aa,aY as na,aZ as ra,a_ as ia,a$ as oa,b0 as la,b1 as da,b2 as ca,b3 as ua,b4 as xa,b5 as ha}from"./vendor-0710fd16.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const ma="modulepreload",pa=function(t){return"/"+t},Qe={},k=function(s,a,r){if(!a||a.length===0)return s();const n=document.getElementsByTagName("link");return Promise.all(a.map(o=>{if(o=pa(o),o in Qe)return;Qe[o]=!0;const l=o.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(!!r)for(let w=n.length-1;w>=0;w--){const p=n[w];if(p.href===o&&(!l||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${h}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":ma,l||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),l)return new Promise((w,p)=>{f.addEventListener("load",w),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})},$=()=>{const t=localStorage.getItem("token");if(t)return JSON.parse(t||"")},V=()=>Qt(),P=es,c=ut.create({baseURL:"https://node-6-jbbj.onrender.com/api"}),ga=ut.create({baseURL:{}.VITE_DATABASE_RENDER}),Q=$(),ya=async t=>await c.post("/signup",t),fa=async t=>await c.post("/signin",t),At=async()=>await c.get("user"),ja=async t=>await c.get("user_one/"+t),va=async t=>await c.delete("removeUser/"+t+`/${Q.user._id}`,{headers:{Authorization:`Bearer ${Q.token}`}}),wa=async t=>await c.put(`user/${t._id}/${Q.user._id}`,t,{headers:{Authorization:`Bearer ${Q.token}`}}),ba=async t=>await c.post("user/creating",t),ka=async t=>await c.get(`user/cart/${t}`),Ca=async(t,s)=>await c.post(`/user/upload/${t}`,s,{headers:{Authorization:`Bearer ${Q.token}`}}),Na=async t=>await c.post("/forgot-password",t),Sa=async(t,s,a)=>await c.post(`/reset-password/${t}/${s}`,a),_a=async t=>await c.post("/refreshToken",t),xe=$(),Aa=async()=>await c.get("/cart"),Ta=async t=>await c.post(`/cart/${xe.user._id}`,t,{headers:{Authorization:`Bearer ${xe.token}`}}),Ia=async(t,s)=>await c.post(`/cart/${t}/${xe.user._id}`,s,{headers:{Authorization:`Bearer ${xe.token}`}}),et=v("cartSlice",async()=>{const{data:t}=await Aa();return t}),Te=v("addCartSlice",async t=>{const{data:s}=await Ta(t);return s}),La=v("deleteCartSlice",async t=>{const{data:s,status:a}=await Ia(t.id,t);return s.data}),tt=v("user/login",async t=>{const{data:s}=await ya(t);return s}),Ce=v("user/signin",async t=>{const{data:s,status:a}=await fa(t);return s}),Pa=v("user/getAll",async()=>{const{data:t}=await At();return t.filter(a=>a.role==0)}),Ie=v("user/getUser_id",async t=>{const{data:s}=await ja(t);return s}),Ea=v("admin/getAdmin",async()=>{const{data:t}=await At();return t.filter(a=>a.role>=1)}),st=v("user/deteleUser",async t=>{const{data:s}=await va(t);return s}),$a=v("edit/editUser",async t=>{const{data:s}=await wa(t);return s}),Ra=v("user/importXlsx",async t=>{const{data:s}=await ba(t);return s}),at=v("findcart",async t=>{const{data:s}=await ka(t);return s.cart}),nt=v("uploadImage",async({id:t,formData:s})=>{const{data:a,status:r}=await Ca(t,s);return a}),Tt=G({name:"user",initialState:{value:[],cartUser:[],isLoading:!1,error:!1,login:{},isLogin:localStorage.getItem("isLogin")==="true",user:{}},reducers:{logout(t){localStorage.removeItem("token"),Y.success("Logout successful!"),t.isLogin=!1,localStorage.setItem("isLogin","false"),t.user={}}},extraReducers:t=>{t.addCase(tt.fulfilled,(s,a)=>{s.error=!1,s.value=a.payload.newUser}).addCase(tt.rejected,(s,a)=>{s.error=!0}),t.addCase(Ce.pending,(s,a)=>{s.isLoading=!0}).addCase(Ce.fulfilled,(s,a)=>{localStorage.setItem("token",JSON.stringify(a.payload)),s.login=a.payload,s.error=!1,s.isLogin=!0,s.isLoading=!1,s.user=a.payload.user,localStorage.setItem("isLogin","true")}).addCase(Ce.rejected,(s,a)=>{s.error=a.payload,s.isLoading=!1}),t.addCase(Pa.fulfilled,(s,a)=>{s.value=a.payload}),t.addCase(st.fulfilled,(s,a)=>{s.value=s.value.filter(r=>r._id!==a.payload._id)}).addCase(st.rejected,(s,a)=>{}),t.addCase(Ea.fulfilled,(s,a)=>{s.value=a.payload}),t.addCase($a.fulfilled,(s,a)=>{s.value.push(a.payload)}),t.addCase(Ra.fulfilled,(s,a)=>{s.value.unshift(a.payload)}),t.addCase(at.pending,(s,a)=>{s.isLoading=!0}).addCase(at.fulfilled,(s,a)=>{s.isLoading=!1,s.cartUser=a.payload}),t.addCase(Ie.fulfilled,(s,a)=>{s.user=a.payload,s.isLoading=!1}).addCase(Ie.pending,(s,a)=>{s.isLoading=!0}),t.addCase(nt.fulfilled,(s,a)=>{s.isLoading=!1,s.user=a.payload.data}).addCase(nt.pending,(s,a)=>{s.isLoading=!0}),t.addCase(La.fulfilled,(s,a)=>{const r=s.user.cart.filter(n=>n.product._id!==a.payload.product);s.user.cart=r})}}),{logout:za}=Tt.actions,Oa=Tt.reducer,oe=$(),D=i.createContext(null),Da=t=>{const s=V(),{user:a}=P(p=>p.user),r=localStorage.getItem("isLogin"),n=P(p=>p.user.isLogin),[o,l]=i.useState(!1),[h,u]=i.useState(!1),f=()=>{u(!h)};i.useEffect(()=>{oe&&s(Ie(oe.user._id))},[n,s,o]);const w={Auth:oe||"",user:a,isLoggedIn:r,isLoggedInState:n,setReset:l,handleClick:f,state:h};return e.jsx(D.Provider,{value:w,children:t.children})},_=i.memo(({level:t,children:s,...a})=>e.jsx(ts,{...a,children:s})),F=({color:t,children:s,...a})=>e.jsx(ss,{color:t,...a,children:s}),Ba=x.div`
height: 100vh;
`,It=x.div`
position: relative;
height: 100vh;
justify-content: center;
display: flex;
&>*{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
`,Lt=()=>e.jsx(Ba,{}),Ma=()=>{const{state:t}=i.useContext(D)??{};return e.jsx(as,{className:t?"w-11/12":"w-10/12",active:!0,title:{width:"20%"},paragraph:{rows:8,width:[300,200,400,100]},loading:!0,style:{height:"100vh",padding:"0 30px"}})},Fa=()=>e.jsx(It,{children:e.jsx(_,{type:"danger",children:"Lỗi rồi kiểm tra lại mạng của bạn hoặc tải lại trang..."})}),Pt=({size:t,children:s})=>e.jsx(It,{className:"w-full",children:e.jsxs("div",{role:"status",children:[e.jsxs("svg",{className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]})}),Et=()=>e.jsx(F,{color:"#108ee9",className:"mx-2",children:"Empty"}),$t=()=>e.jsx("p",{className:"text-white",children:"Trống!"}),Va=async t=>await c.get(t),O=t=>{const{data:s,error:a,mutate:r}=ns(t,Va);return{data:s?s.data:"",isLoading:!s&&!a,isError:a,mutate:r}},R="https://node-6-jbbj.onrender.com/api",Ua=(t,s)=>{t(za()),s("/")},y=({to:t,children:s,...a})=>e.jsx(xt,{to:t,...a,className:"link",children:s}),he=i.memo(({textColor:t,orientation:s,children:a,...r})=>e.jsx(rs,{style:{color:t,borderBlockStartColor:"#999"},className:"text-white",orientation:s,...r,children:a})),K=({src:t,alt:s,style:a,...r})=>e.jsx("img",{loading:"lazy",src:t,className:"m-5 w-full h-full",style:a,alt:s,...r}),M=(t,s)=>{const a=s?s.split("/"):null,r=a==null?void 0:a.indexOf("upload");return r!==-1&&(a==null||a.splice(r+1,0,`w_${t}/f_webp`)),a==null?void 0:a.join("/")},Ha=x.div`
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius:10px;
}
::-webkit-scrollbar {
  width: 2px;
}
`,qa=x.div`
background: rgb(28, 28, 30);
border-radius: 10px;
margin: 5px 0px;
`,Wa=()=>{const{data:{data:t}}=O("/category/filters");return e.jsxs("div",{className:"rounded des w-3/12 relative overflow-hidden lg:block md:hidden hidden bg-[#0000005e]",children:[e.jsx(he,{className:"m-0",textColor:"#fff",orientation:"left",children:"Xem thêm"}),e.jsx(Ha,{className:"absolute h-full w-full px-2 overflow-scroll",children:t&&(t==null?void 0:t.map((s,a)=>e.jsxs(qa,{className:"flex lg:gap-1 my-2 py-2",children:[e.jsx("div",{className:"w-3/12",children:e.jsx(y,{to:"/q/"+s.slug,children:e.jsx(K,{className:"m-0 h-full",src:M(100,s.linkImg),alt:s.name})},a)}),e.jsxs("div",{className:"w-9/12",children:[e.jsx(y,{style:{textDecoration:"none",color:"#999",fontSize:"13px"},to:"/q/"+s._id,children:s.name},a),e.jsxs(F,{color:"#108ee9",className:"text-[12px] text-[#999] my-2 block w-6/12 ",children:[" ",s.sumSeri+" Tập VietSub"]}),e.jsx(F,{color:"#2db7f5",children:s.type?s.type:"null"}),e.jsx("div",{className:"text-sm text-gray-400 mt-2",children:e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(_,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(_,{className:"mr-2 text-gray-300",children:s.typecm}),e.jsxs(_,{className:"text-gray-400 text-sm",children:["(",s.time,")"]})]})})]})]},a)))})]})},Rt=({content:t,settings:s})=>e.jsx(is,{...s,children:t}),lo=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],Ga=[e.jsx(ht,{}),e.jsx(os,{}),e.jsx(mt,{}),e.jsx(ls,{}),e.jsx(ds,{}),e.jsx(cs,{}),e.jsx(us,{}),e.jsx(xs,{}),e.jsx(hs,{})],co=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Action",dataIndex:"action",key:"action"}],uo=[{title:"Url",dataIndex:"url",key:"url"},{title:"Image",dataIndex:"image",key:"image"},{title:"Action",dataIndex:"action",key:"action"}],xo=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Path",dataIndex:"path",key:"path"},{title:"Product",dataIndex:"product",key:"product"},{title:"Categorymain",dataIndex:"categorymain",key:"categorymain"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"},{title:"Checked",dataIndex:"checked",key:"checked"}],ho=[{title:"Stt",dataIndex:"stt",key:"stt",width:100},{title:"Name",dataIndex:"name",key:"name",width:100},{title:"Slug",dataIndex:"slug",key:"slug",width:120},{title:"Image",dataIndex:"image",key:"Image",width:150},{title:"Duration",dataIndex:"duration",key:"duration",width:50},{title:"isActive",dataIndex:"isActive",key:"isActive",width:50},{title:"Year",dataIndex:"year",key:"year",width:50},{title:"Set",dataIndex:"set",key:"set",width:50},{title:"Week",dataIndex:"week",key:"week",width:50},{title:"Action",dataIndex:"action",key:"action",width:100}],mo=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Product",dataIndex:"product",key:"product"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Day",dataIndex:"day",key:"day"},{title:"Action",dataIndex:"action",key:"action"}],po=[{title:"Id",dataIndex:"_id",key:"_id"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],go=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Image",dataIndex:"image",key:"image"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"}],yo=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Role",dataIndex:"role",key:"role"},{title:"Status",dataIndex:"status",key:"status"},{title:"Image",dataIndex:"image",key:"image"}],fo=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Image",dataIndex:"image",key:"image"},{title:"Status",dataIndex:"status",key:"status"},{title:"Role",dataIndex:"role",key:"role"},{title:"Action",key:"action",dataIndex:"action",with:150}],Ya=[{title:"Name",dataIndex:"name",key:"name"},{title:"Action",dataIndex:"action",key:"action"}],Ka={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},Xa={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:3,responsive:[{breakpoint:1440,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}}]},H=$(),Ja=async t=>await c.post(`/week/${H.user._id}`,t,{headers:{Authorization:`Bearer ${H.token}`}}),Za=async t=>await c.delete(`/week/${t}/${H.user._id}`,{headers:{Authorization:`Bearer ${H.token}`}}),Qa=async t=>await c.get(`/week?w=${t}`),en=async(t,s)=>await c.post(`/week/category/${t}/${H.user._id}`,s,{headers:{Authorization:`Bearer ${H.token}`}}),X=i.createContext(null),tn=t=>{const[s,a]=i.useState(1),{data:r}=O(R+"/weeks"),{data:n}=O(R+"/background"),{data:o,isLoading:l}=O(R+"/types"),h={seri:o,loadingSeri:l,background:n,weeks:r,setPage:a,page:s};return e.jsx(X.Provider,{value:h,children:t.children})},q=i.memo(({level:t,children:s,...a})=>e.jsx(ms,{level:t,...a,children:s})),Le=i.memo(({title:t,link:s,image:a,sumSeri:r,time:n,typecm:o,year:l,products:h})=>{const u=h?h[h.length-1]:"";return e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"relative group",children:e.jsxs(y,{to:s,className:"block",children:[e.jsx("div",{className:"relative w-full h-[200px] md:h-[250px] lg:h-[320px]",children:e.jsx(K,{src:M(300,a),alt:t,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-2 py-1 font-medium",children:u?`Tập ${u.seri}`:e.jsx($t,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(pt,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4",children:e.jsx(y,{to:s,children:e.jsx(q,{level:5,style:{color:"#fff"},className:"text-xl md:text-2xl lg:text-3xl font-bold",children:t})})}),e.jsxs("div",{className:"text-sm text-gray-400 mt-2",children:[e.jsx("div",{className:"font-semibold",children:r?`${r} Tập`:""}),e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(_,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(_,{className:"mr-2 text-gray-300",children:o}),e.jsxs(_,{className:"text-gray-400 text-sm",children:["(",n,")"]})]}),e.jsx("div",{className:"font-semibold mt-2",children:l?`${l}`:""})]})]})});function sn(){var p;const{weeks:t}=i.useContext(X)||{},s=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],r=new Date().getDay(),[n,o]=i.useState(!0),[l,h]=i.useState(s[r]),[u,f]=i.useState([]),w=g=>{h(g)};return i.useEffect(()=>{const g=async()=>{const{data:S}=await Qa(l);f(S),o(!1)};o(!0),g()},[l]),e.jsxs("div",{className:"container mx-auto my-10",children:[e.jsx("div",{className:"px-4 lg:px-[150px] md:px-[100px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0",children:t&&t.map(g=>e.jsx("div",{className:l===g.name?"active border-none":"cursor-pointer",onClick:()=>w(g.name),children:e.jsx("div",{className:"text-[11px] md:text-[12px] lg:text-[14px] flex justify-center items-center px-4 py-2 text-white rounded-lg w-full",children:e.jsx("p",{children:g.name})})},g._id))}),e.jsx("div",{className:"my-5 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full",children:n?e.jsx(Lt,{}):e.jsx(Rt,{settings:Ka,content:(p=u==null?void 0:u.content)==null?void 0:p.map(g=>e.jsx("div",{className:"px-2",children:e.jsx(Le,{title:g.name,link:"/q/"+g.slug,image:g.linkImg,time:g.time,sumSeri:g.sumSeri,products:g.products})},g._id))})})]})}const I=i.memo(({gutter:t,justify:s,align:a,children:r,...n})=>e.jsx(ps,{gutter:t,justify:s,align:a,...n,children:r})),m=({children:t,...s})=>e.jsx(gs,{...s,children:t}),an=i.memo(({type:t,gutter:s,child:a,...r})=>e.jsx(I,{gutter:s,children:t==="category"?a&&a.length&&a.map((n,o)=>e.jsx(m,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(Le,{title:n.name,link:n.image?"/d/"+n.slug:"/q/"+n.slug,image:n.linkImg||n.image,time:n.time,year:n.year,sumSeri:n.sumSeri,products:n.products})},n._id)):a&&a.length?a.map((n,o)=>e.jsx(m,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(Le,{title:n.name,link:n.image?"/d/"+n.slug:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,sumSeri:n.sumSeri})},n._id)):e.jsx(Et,{})})),W=$(),nn=async t=>await c.get(`/categorys?page=${t}`),rn=async t=>await c.get(`/category/${t}`),on=async t=>await c.post(`/category/${W.user._id}`,t,{headers:{Authorization:`Bearer ${W.token}`}}),ln=async t=>await c.delete(`/category/${t}/${W.user._id}`,{headers:{Authorization:`Bearer ${W.token}`}}),dn=async t=>await c.post(`/category/${t.get("_id")}/${W.user._id}`,t,{headers:{Authorization:`Bearer ${W.token}`}}),cn=async t=>await c.get("/category/getAllCategoryNotRequest/"+t),un=async t=>await c.get(`/categorys/search?value=${t}`),xn=async(t,s)=>await c.post("/rating/"+t,s),hn=async t=>await c.post("/category/changeLatest",t),de=v("category/getAllcate",async t=>{const{data:s}=await nn(t);return s}),Pe=v("category/getOne",async t=>{const{data:s}=await rn(t);return s}),rt=v("getAll/Category",async t=>{const{data:s}=await cn(t);return s}),mn=v("add/Addcate",async t=>{const{data:s}=await on(t);return s}),pn=v("delete/DeleteCate",async t=>{const{data:s}=await ln(t);return s}),gn=v("update/Category",async t=>{const{data:s}=await dn(t);return s}),zt=()=>{const{data:t}=P(r=>r.category.category),s=P(r=>r.category.isLoading);P(r=>r.category.isError);const a=V();return i.useEffect(()=>{a(de(1))},[]),s?e.jsx("div",{className:"seriLoading",children:"Loading..."}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(q,{level:2,underline:!0,style:{color:"#fff"},strong:!0,className:"uppercase",children:"Xem Nhiều"}),e.jsx(y,{to:"/loadmore","aria-label":"Tải thêm nội dung",children:e.jsxs("div",{className:"text-[16px] text-[#fff] flex lg:text-[20px] md:text[18px] gap-3",children:[e.jsx("span",{className:"underline",children:"See More"}),e.jsx("span",{children:e.jsx(ys,{title:"Tải thêm nội dung..."})})]})})]}),e.jsx(an,{type:"category",gutter:[16,16],child:t})]})},yn=()=>{const{data:{data:t}}=O(R+"/category/latest");return e.jsxs("div",{children:[e.jsx("h2",{className:"text-white category text-md md:text-md pl-2 mb-2 mx-2 my-3 border-l-4  font-sans font-bold border-teal-400 dark:text-gray-200",children:"Mới Cập Nhật"}),e.jsx(Rt,{settings:Xa,content:t&&t.map((s,a)=>{const r=s.products[s.products.length-1];return e.jsx("div",{className:"px-2",children:e.jsxs("div",{className:"w-full flex flex-col items-center",children:[e.jsx("div",{className:"relative group",children:e.jsxs(y,{to:`/q/${s.slug}`,className:"block w-full",children:[e.jsx("div",{className:"relative h-[200px] w-[160px] md:w-[180px] lg:w-[200px]",children:e.jsx(K,{src:M(220,s.linkImg),alt:s.name,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-1 md:px-2 py-1 font-medium",children:r?`Tập ${r.seri}`:e.jsx($t,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(pt,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(y,{to:"/q/"+s.slug,children:e.jsx("div",{style:{color:"#999"},className:"text-sm md:text-md lg:text-md",children:s.name})})})]})},s._id)})})]})};function Ot({children:t}){const[s,a]=i.useState(!1),r=i.useRef(null);return i.useEffect(()=>{const n=new IntersectionObserver(o=>{o[0].isIntersecting&&a(!0)},{threshold:1});return r.current&&n.observe(r.current),()=>{r.current&&n.unobserve(r.current)}},[]),e.jsxs("div",{children:[s&&t,e.jsx("div",{ref:r,style:{height:"1px"}})]})}const fn=x.video``,jn=x.div`
  padding-bottom: 60%;
  @media (min-width: 768px) {
    padding-bottom: 50%;
  }
  @media (min-width: 1024px) {
    padding-bottom: 45%;
  }
`,vn=i.memo(()=>{const{data:t,isError:s}=O(R+"/trailer"),{state:a}=i.useContext(D);return s?e.jsx(Fa,{}):e.jsxs("div",{className:a?"p-3":"mt-3",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"lg:w-9/12 md:w-12/12 sm:w-full",children:e.jsxs("div",{className:"h-full",children:[e.jsx(jn,{className:"relative md:mx-2",children:e.jsx(fn,{className:"h-full absolute bg-black rounded",width:"100%",loop:!0,muted:!0,autoPlay:!0,controls:!0,src:t==null?void 0:t.url})}),e.jsx(yn,{})]})}),e.jsx(Wa,{})]}),e.jsx(sn,{}),e.jsx(Ot,{children:e.jsx(zt,{})})]})}),Be=({ogTitle:t,description:s,imageUrl:a,mainTitle:r,title:n,...o})=>e.jsxs(fs,{children:[e.jsx("title",{children:n}),e.jsx("meta",{property:"og:title",content:t}),e.jsx("meta",{property:"og:description",content:s}),e.jsx("meta",{property:"og:image",content:a}),Object.keys(o).map(l=>e.jsx("meta",{...o[l]},l))]}),wn=()=>e.jsxs(e.Fragment,{children:[e.jsx(Be,{ogTitle:"Hoạt Hình Trung Quốc",description:"Đấu Phá Thương Khung Phần 5",imageUrl:M(200,"https://res.cloudinary.com/daz3lejjo/image/upload/w_100/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),title:"Hoạt Hình 3D"}),e.jsx(vn,{})]}),C=$(),bn=async t=>await c.get(`products?page=${t}`),kn=async t=>await c.get(`product/${t}`),Cn=async t=>await c.delete(`/product/${t}/${C.user._id}`,{headers:{Authorization:`Bearer ${C.token}`}}),Nn=async t=>await c.post(`/product/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),Sn=async t=>await c.put(`/product/${t.get("_id")}/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),_n=async t=>await c.post("/products/creating",t,{}),An=async t=>await c.post(`/products/deleteMultiple/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),Tn=async t=>await c.get(`/category/products/${t}`),jo=async(t,s)=>await c.post(`/product/pushlist/${t}/${C.user._id}`,s,{headers:{Authorization:`Bearer ${C.token}`}}),vo=async(t,s)=>await ga.post(`/product/abyss/${t}/${C.user._id}`,s,{headers:{Authorization:`Bearer ${C.token}`}}),In=async t=>await c.post(`/product/approve/${t}/${C.user._id}`,null,{headers:{Authorization:`Bearer ${C.token}`}}),Ln=async t=>await c.post(`/product/approve/cancel/${t}/${C.user._id}`,null,{headers:{Authorization:`Bearer ${C.token}`}}),Pn=async t=>await c.get(`/product/filter?c=${t}`),En=async t=>await c.get(`/product/v?name=${t}`),$n=async()=>await c.post(`/products/clear/${C.user._id}`,null,{headers:{Authorization:`Bearer ${C.token}`}}),Rn=async t=>await c.post(`/products/approvedMultiple/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),zn=async t=>await c.post(`/products/encodeMultipleDailymotionServer/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),On=async()=>await c.post(`/products/autoAddEpisodeMovie/${C.user._id}`,null,{headers:{Authorization:`Bearer ${C.token}`}}),me=v("product/getProducts",async t=>{const{data:s}=await bn(t);return s}),Ee=v("product/getProduct",async t=>{const{data:s}=await kn(t);return s}),Dt=v("product/deleteProduct",async t=>{const{data:s}=await Cn(t);return s}),Dn=v("product/addProduct",async t=>{const{data:s,status:a}=await Nn(t);return s}),Bn=v("product/editProduct",async t=>{const{data:s}=await Sn(t);return s}),Mn=v("product/importDataFile",async t=>{const{data:s}=await _n(t);return s}),Fn=v("product/getAllProductDataByCategory",async t=>{const{data:s}=await Tn(t);return s}),Bt=v("product/filter",async t=>{const{data:s}=await Pn(t);return s}),Mt=v("product/Search",async t=>{const{data:s}=await En(t);return s}),Ft=v("product/autoAdd",async()=>{const{data:t}=await On();return t}),Vn=t=>t.product.getOneProduct,wo=t=>t.category.category,Un=t=>t.user.value,bo=t=>t.user.value,Hn=x.button`
  background-color: rgba(0, 0, 0, 0.24);
  border-radius: 0.2rem;
  text-align: center;
  color: #111827;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  color: #fff;
  font-size: 12px;

  @media (min-width: 768px) {
    padding: 0.6rem 0.6rem;
    font-size: 0.675rem;
  }

  @media (min-width: 1024px) {
    padding: 0.6rem 0.6rem;
    font-size: 0.785rem;
  }
`,it=x.button`
  width: 100%;
  padding: 6px 16px;
  background: rgba(122, 122, 122, 0.32);
  font-size: 12px;
  border-radius: 3px;

  @media (min-width: 768px) {
    font-size: 14px;
    padding: 8px 18px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
    padding: 9px 20px;
  }
`,qn=i.memo(({seriProduct:t})=>{var s,a;return e.jsx(I,{gutter:14,items:"center",children:(a=(s=t==null?void 0:t.category)==null?void 0:s.products)==null?void 0:a.map((r,n)=>r.isApproved==!0?e.jsx(m,{xl:3,lg:3,md:4,sm:4,xs:6,className:"mt-2",children:e.jsx(Oe,{className:({isActive:o,isPending:l})=>o?"activeSeri":"",to:"/d/"+r.slug,children:e.jsx(Hn,{className:r.seri&&"w-full",children:r.seri&&"Tập "+r.seri})})},n):"")})}),b=i.memo(({children:t,...s})=>e.jsx(js,{...s,children:t})),z=t=>Y.success(t),Vt=t=>Y.warning(t),E=t=>Y.error(t),Wn=({item:t,id:s})=>{var w;const a=V(),{Auth:r,user:n,isLoggedInState:o}=i.useContext(D),[l,h]=i.useState(!1),u={user:r?r.user._id:"",product:s};i.useEffect(()=>{var g,S;const p=(g=n==null?void 0:n.cart)==null?void 0:g.find(A=>A.product._id===s);h(((S=p==null?void 0:p.product)==null?void 0:S._id)===s)},[n.cart,s]);const f=()=>{!r&&o==!1?E("Bạn cần đăng nhập!"):l?Vt("Đã tồn tại trong yêu thích!"):(a(Te(u)),h(!0),z("Thêm vào danh sách yêu thích thành công!"))};return e.jsxs("div",{className:"lg:flex md:flex-row items-center @screen md:justify-between flex flex-col",children:[e.jsx(y,{to:"/q/"+((w=t==null?void 0:t.category)==null?void 0:w._id),className:"text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(q,{level:4,style:{color:"#fff"},className:"uppercase",children:t.name})}),e.jsx(b,{style:{color:"#fff"},icon:e.jsx(ce,{}),disabled:l,className:"flex items-center justify-center",onClick:()=>f(),children:l?"Đã yêu thích":"Thêm vào yêu thích"})]})},Gn=({getOneProductDetail:t})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{color:"#fff",margin:"10px 0"},children:t.seri?t.trailer?"Trailer "+t.seri:"Tập "+t.seri:""}),e.jsx("div",{className:"des text-[#999]",children:e.jsxs("p",{children:["Ngày đăng:"," ",vs(t.uploadDate).format("LTS DD-MM-YYYY")]})}),e.jsx("div",{style:{color:"#fff",margin:"10px 0"},className:"des",children:e.jsxs("div",{className:"text-[#999] flex items-center gap-2 lg:justify-start @screen justify-center",children:[e.jsx(le,{}),t.view*36," Lượt xem"]})}),e.jsxs("div",{className:"p-3 mt-3 mb-3 text-white rounded  flex items-center lg:justify-start @screen justify-center",style:{background:"rgb(0 0 0 / 47%)"},children:["Copyright video:",e.jsx("div",{className:"text-slate-400",children:" "+t.copyright})]})]}),Yn=x.div`
display:flex;
gap:0 10px;

@media(max-width:768px){
  display:block;
}
@media(min-width:1024px){
  display:flex;
}
`,Kn=x.div`
`,Xn=x.div`
font-size:13px;
@media(min-width: 1024px){
  font-size:15px;
}
`,Jn=x.div`
padding:5px;
@media(min-width: 1024px){
  padding: 15px;
}
`,Zn=x.div`
padding-bottom:62%;

@media(min-width: 768px){
  padding-bottom:52%;
}

@media(min-width: 1024px){
  padding-bottom:42%;
}
`,Qn=x.div`
 
`,er=t=>t.product.isLoading,tr=()=>{var p,g,S,A,L;const t=P(Vn),s=P(er),[a,r]=i.useState(""),{id:n}=De(),[o,l]=i.useState("dailyMotion"),h=V(),[u,f]=i.useState(""),w=gt();return i.useEffect(()=>{window.scrollTo(0,0)},[w]),i.useEffect(()=>{h(Ee(n));const U=We.AES.decrypt(t.dailyMotionServer?t.dailyMotionServer:"","24062003").toString(We.enc.Utf8);f(U),r(U)},[n,t.dailyMotionServer]),console.log(t.server2),e.jsxs(e.Fragment,{children:[e.jsx(Be,{ogTitle:t==null?void 0:t.name,description:(p=t.category)==null?void 0:p.des,imageUrl:(g=t.category)==null?void 0:g.linkImg}),e.jsx("div",{className:"flex justify-center mt-4",style:{gap:"10px"},children:e.jsx(Jn,{className:"col-md-12",children:t&&(s?e.jsx(Pt,{size:"large",children:void 0}):e.jsxs(e.Fragment,{children:[e.jsx(Zn,{className:"d-flex justify-content-center relative",children:t.dailyMotionServer!==""?e.jsx("iframe",{allowFullScreen:!0,title:"vimeo-player",className:"absolute",src:a,style:{width:"100%",height:"100%"}}):t.trailer!==""?e.jsx("iframe",{title:"vimeo-player",className:"absolute",style:{width:"100%",height:"100%"},src:t.trailer+"?autoplay=1&mute=1"}):e.jsx(ws,{icon:"Hiiiii!!",className:"absolute inset-0 text-white mt-5",subTitle:"Phim này đang trong quá trình cập nhật video. Vui lòng quay lại sau."})}),e.jsxs(Qn,{className:"mt-4 rounded",children:[e.jsx(he,{textColor:"#fff",orientation:"center",className:"text-white md:text-sm lg:text-base text-sm underline",children:"Chọn server:"}),e.jsxs("div",{className:"md:text-sm lg:text-base text-sm flex items-center justify-center gap-4 px-4 py-3",children:[e.jsx(b,{disabled:t.link==="",onClick:()=>{l("link1"),r(t.link)},className:`text-white cursor-pointer ${o==="link1"?"activeServer":""}`,children:"#S1"}),e.jsx(b,{onClick:()=>{l("server2"),r(t.server2)},disabled:!t.server2,className:`${t.server2?" text-white cursor-pointer":""} ${o==="server2"?"activeServer":""}`,children:"#S2"}),e.jsx(b,{onClick:()=>{l("dailyMotion"),r(u)},disabled:!t.dailyMotionServer,className:`${t.dailyMotionServer?"text-white cursor-pointer":""} ${o==="dailyMotion"?"activeServer":""}`,children:"#S3"})]})]}),e.jsxs(Yn,{className:"mt-2",children:[e.jsx(Kn,{className:"w-3/12",children:e.jsx(K,{className:"md:block hidden",alt:"Ảnh"+((S=t.category)==null?void 0:S.name),src:M(200,t&&(((A=t.category)==null?void 0:A.linkImg)||t.image))})}),e.jsxs(Xn,{className:"lg:w-9/12 md:w-full text-center lg:text-start",children:[e.jsx(Wn,{item:t,id:n}),e.jsx(Gn,{getOneProductDetail:t}),e.jsx(qn,{seriProduct:t}),e.jsxs("div",{className:"text-[#999] lg:text-md sm:text-sm mt-2 mb-2",children:[e.jsx(he,{textColor:"#fff",orientation:"left",children:"Mô tả:"}),t&&((L=t.category)==null?void 0:L.des)]})]})]})]}))})})]})},sr=()=>e.jsxs(ye.Fragment,{children:[e.jsx(i.Suspense,{fallback:e.jsx(Ma,{}),children:e.jsx(tr,{})}),e.jsx(Ot,{children:e.jsx(zt,{})})]}),ar=({data:t,isLoading:s})=>{var a;return s?e.jsx("div",{className:"seriLoading",children:"Loading...."}):e.jsx("div",{className:"bg-[#9b9b9b1f] h-[174px] overflow-y-scroll p-3 rounded-sm seriCategory",children:e.jsx(I,{gutter:[16,16],children:((a=t==null?void 0:t.products)==null?void 0:a.length)>0&&(t!=null&&t.products)?t.products.map((r,n)=>r.isApproved==!0?e.jsx(m,{lg:3,md:4,sm:5,xs:6,style:{textAlign:"center"},children:e.jsx(y,{to:"/d/"+r.slug,children:!r.dailyMotionServer&&r.trailer?e.jsx(it,{children:r.seri}):e.jsx(it,{className:"w-full text-white",variant:"ghost",size:"sm",children:r.seri})})},n):""):e.jsx(Et,{})})})},nr=i.memo(({id:t,averageRating:s,totalRatings:a})=>{const r=async n=>{const o={rating:n};try{await xn(t,o)}catch(l){console.error("Lỗi khi lưu đánh giá:",l)}};return e.jsxs("span",{className:"text-white flex items-center gap-2",children:[e.jsx(bs,{className:"mt-2 mb-2",value:s,onChange:r}),a>0?e.jsx("div",{className:"relative pt-1",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{children:e.jsxs("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200",children:["Vip ",s.toFixed(2),"/",a*115," Tổng số lượt đánh giá"]})})})}):""]})}),rr=()=>{const{id:t}=De(),s=V(),a=P(n=>n.category.details),r=P(n=>n.category.isLoading);return i.useEffect(()=>{s(Pe(t))},[t]),i.useEffect(()=>{a!=null&&a.name&&(document.title=a.name)},[a]),e.jsxs(e.Fragment,{children:[e.jsx(Be,{ogTitle:a.name,description:a==null?void 0:a.des,imageUrl:a==null?void 0:a.linkImg}),a&&e.jsx("div",{children:e.jsxs("div",{style:{color:"#fff"},children:[e.jsxs("div",{className:"md:flex lg:flex block gap-2 ",children:[e.jsx("div",{className:"mb-5 lg:w-3/12 md:w-3/12 md:h-full h-52 ",children:e.jsx("div",{className:"h-full w-full flex justify-center ",children:e.jsx(K,{className:"object-contain w-full h-full flex-grow",src:M(300,a.linkImg),alt:a.name})})}),e.jsxs("div",{className:"lg:w-9/12 md:w-9/12",children:[e.jsx("div",{className:"category text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(y,{to:"/q/"+a.slug,children:e.jsx(q,{type:"secondary",level:3,className:"md:text-[18px] lg:text-[20px] sm:text-[15px]",style:{textTransform:"capitalize",color:"#fff"},children:a.name})})}),e.jsxs("div",{className:"loai des text-[12px] md:text-[13px] lg:text-[14px]",children:[e.jsx("b",{children:a.anotherName}),e.jsx("br",{}),e.jsx(_,{style:{color:"#999"},children:"Tác giả :..."}),e.jsx("br",{}),e.jsx(_,{style:{color:"#999"},children:"Quốc gia : Chinese"}),e.jsx("div",{children:e.jsxs(_,{style:{color:"#999"},children:["Thể loại :"," ",e.jsx("span",{className:"p-1 bg-gray-500 rounded-sm",children:a.type})]})}),e.jsx("div",{children:e.jsxs(_,{style:{color:"#999"},children:["Tổng Số tập: ",a._id==t?a.sumSeri:""]})}),e.jsx("div",{children:e.jsx(_,{style:{color:"#999"},children:a.time+" "})}),e.jsx("div",{children:e.jsxs(_,{style:{color:"#999"},children:["Năm phát hành : ",a.year]})}),e.jsx("div",{}),e.jsx(F,{color:"#2db7f5",className:"my-2",children:a.isActive==0?"Đang chiếu":"Hoàn thành"}),e.jsxs("div",{id:"toast-simple",className:"flex mb-2 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800",role:"alert",children:[e.jsx(yt,{}),e.jsx("div",{className:"ps-4 text-sm font-normal",children:"Vietsub lúc 10h00 Thứ 4 hàng tuần"})]})]}),e.jsx(ar,{isLoading:r,data:a}),e.jsx(nr,{id:t,averageRating:a.averageRating,totalRatings:a.totalRatings})]})]}),e.jsxs("div",{className:"text-[#999] lg:text-[15px] md:text[14px] text-[13px]",children:[e.jsx(he,{textColor:"#fff",orientation:"left",children:"NỘI DUNG PHIM"}),a.des]})]})},a._id)]})},ir=()=>e.jsx(e.Fragment,{children:e.jsx(rr,{})});const ot=i.memo(({title:t,src:s,size:a,...r})=>e.jsx("div",{title:t,style:{cursor:"pointer"},children:e.jsx(ks,{size:a,color:"default",src:s,...r})})),$e=({isLoggedInState:t,style:s})=>{var l,h,u,f,w;const a=$(),r=ee(),n=V(),o=()=>{a?r("/cart/user"):E("Bạn cần đăng nhập!")};return e.jsx(ye.Fragment,{children:a&&t?e.jsx(Ge,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx(Ye,{content:e.jsxs(e.Fragment,{children:[e.jsx(y,{to:"/profile",children:e.jsxs(I,{style:{lineHeight:"0"},align:"middle",gutter:12,children:[e.jsx(m,{children:e.jsx(Cs,{})}),e.jsx(m,{children:e.jsx(_,{level:6,className:"auth",children:"Your profile"})})]})}),e.jsxs(I,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(m,{children:e.jsx(ce,{})}),e.jsx(m,{children:e.jsx(_,{style:{cursor:"pointer"},onClick:o,className:"auth",children:"Saved"})})]}),a.user&&((l=a==null?void 0:a.user)==null?void 0:l.role)>=1&&e.jsx(y,{to:"/dashboard",children:e.jsxs(I,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(m,{children:e.jsx(ue,{})}),e.jsx(m,{children:e.jsx(_,{className:"auth",children:"Admin"})})]})}),e.jsxs(I,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(m,{children:e.jsx(ft,{})}),e.jsx(m,{children:e.jsx(_,{style:{cursor:"pointer"},onClick:()=>Ua(n,r),children:"Logout"})})]})]}),title:e.jsx(q,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:(h=a==null?void 0:a.user)==null?void 0:h.username}),placement:"bottomLeft",trigger:"click",children:e.jsx(ot,{className:"text-center",title:(u=a==null?void 0:a.user)==null?void 0:u.name,src:M(50,a.user&&((f=a==null?void 0:a.user)==null?void 0:f.image)),size:"sm"})})}):e.jsx(Ge,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx(Ye,{content:e.jsx(y,{to:"/signin",children:e.jsxs(I,{align:"middle",gutter:[12,12],children:[e.jsx(m,{children:e.jsx(Ns,{})}),e.jsx(m,{children:e.jsx(_,{level:6,className:"auth",children:"Signin"})})]})}),title:e.jsx(q,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:"Hi"}),placement:"bottomLeft",trigger:"click",children:e.jsx(ot,{title:(w=a==null?void 0:a.user)==null?void 0:w.name,src:void 0,style:s,size:40,icon:e.jsx(ue,{})})})})})},{Content:or,Sider:lr,Header:dr,Footer:cr}=Ne,ur=()=>{const t=Ei.map((n,o)=>{var h;const l=String(o+1);return{key:`${l+1}`,icon:n.icon,label:e.jsx(y,{to:n.path,children:n.name}),children:(h=n==null?void 0:n.children)==null?void 0:h.map((u,f)=>{const w=f+1;return{key:`subitem-${l}-${w}`,icon:u.icon,label:e.jsx(y,{to:u.path,children:u.name})}})}}),{isLoggedInState:s}=i.useContext(D)??{},[a,r]=i.useState(!1);return e.jsxs(Ne,{style:{minHeight:"100vh"},children:[e.jsxs(lr,{trigger:null,collapsible:!0,collapsed:a,className:"custom-sider overflow-y-auto",style:{height:"100%",position:"fixed"},children:[e.jsx("div",{className:"p-4 bg-[#fff]",children:e.jsx("div",{className:"h-8 w-full bg-[#ddd] rounded"})}),e.jsx(Se,{style:{height:"calc(100% - 56px)",marginTop:"8px"},theme:"light",mode:"inline",defaultSelectedKeys:["1"],items:t})]}),e.jsxs(Ne,{style:{marginLeft:a?80:200},children:[e.jsx(dr,{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",padding:0},children:e.jsxs(I,{align:"middle",justify:"space-between",children:[e.jsx(m,{children:e.jsx(b,{type:"text",icon:a?e.jsx(jt,{}):e.jsx(vt,{}),onClick:()=>r(!a),style:{fontSize:"16px",width:64,height:64},children:void 0})}),e.jsx(m,{children:e.jsx(y,{to:"/",children:"Home Page"})}),e.jsx(m,{style:{textAlign:"center"},span:1,children:e.jsx($e,{isLoggedInState:s,style:void 0})})]})}),e.jsx(or,{style:{padding:"24px",minHeight:"calc(100vh - 64px)",overflow:"auto"},children:e.jsx(wt,{})}),e.jsx(cr,{children:"© 2023 copyright | PH ANG"})]})]})},xr=t=>{const s=$();try{return s?s.user.role==0?e.jsx(Ke,{to:"/"}):t.children:e.jsx(Ke,{to:"/"})}catch{return e.jsx("div",{className:"text-light container text-center",children:e.jsx(y,{to:"/signin",children:"Đăng nhập"})})}},hr=x.div`
color:#999;
font-weight:500;
`,mr=x.div`
color: rgb(255, 214, 99);
font-weight:500;
`,pr=x.div`
display: flex;
align-items: center;
justify-content: center;
gap:0 5px;
 
&>a{
    color: rgb(255, 214, 99) !important;
    font-weight:500;
}
`;x.div`

`;const gr=i.memo(({data:t,icons:s,id:a,background:r,...n})=>e.jsx(Se,{className:"h-full",style:{background:r},children:t&&t.map((o,l)=>i.createElement(Se.Item,{...n,icon:o.icon?o.icon:s[l],key:l},a==!0?e.jsx(Oe,{to:o.path=="/"?o.path:o.path+`/${o._id}`,children:o.name},l):e.jsx(y,{to:o.path,children:o.name})))})),yr=x.div`
  display: block;
  @media (max-width: 768px) {
    background-color: none;
  }
  @media (min-width: 1024px) {
    color: #fff;
    display: flex;
    justify-content: center;
    position: relative;
  }
`;x.img`
  object-fit: cover;
  @media (max-width: 768px) {
    pading: 5px;
  }
`;const fr=x.div`
  @media (max-width: 768px) {
    display: none;
  }
`,lt=x.input`
  padding: 10px;
  color:#fff;
  width:100%;
  background-color: #1f1f22;
  border-radius: 10px;
  font-size: 14px;
  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1024px) {
    display: block;
  }
  @media (max-width: 768px) {
    display: block;
  }
`,jr=x.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`,vr=x.div`
  font-size: 11px;
  font-weight: 400;
`,wr=x.div`
  padding: 7px;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.37);
  bottom: 0;
  z-index: 9;
  @media (min-width: 768px) {
    padding: 15px;
  }
  @media (min-width: 1024px) {
    padding: 20px;
  }
`,br=x.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
  justify-content: ${t=>t.justify};
`,kr=x.div``,Cr=x.div`
  display: flex;
  padding: 10px 15px;
  margin: 10px 0;
  align-items: end;
  justify-content: ${t=>t.state?"center":"start"};
  gap: 0 10px;
  &:hover {
    background-color: #1f1f22;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
  }
  & > a:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`,Nr=x.div`
  color: #d9d9d9;
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`,Sr=x.div`
  font-size: 13px;
  margin-top: 4px;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,_r=x.div`
  display: block;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`,Re=({data:t})=>t.length>0?e.jsx("div",{className:"absolute top-[50px] left-0 w-full flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:e.jsx("div",{className:"p-4 flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700",children:t.map((s,a)=>e.jsx(y,{to:`/q/${s.slug}`,children:e.jsx("div",{className:"flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:s.name})},s._id))})}):e.jsx(e.Fragment,{}),Ar=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),Tr=[e.jsx(ht,{}),e.jsx(As,{}),e.jsx(ft,{}),e.jsx(kt,{})],Ir=()=>{const{Auth:t,isLoggedInState:s,state:a,handleClick:r}=i.useContext(D)??{},[n,o]=i.useState(!1),[l,h]=i.useState(0),[u,f]=i.useState("20px 10px"),[w,p]=i.useState(!1),g="left",[S,A]=i.useState(""),[L,U]=i.useState([]),je=()=>{p(!0)},ve=()=>{p(!1)};window.addEventListener("scroll",()=>{const T=window.pageYOffset;o(l>T),h(T),window.scrollY>10?f("10px 5px"):f("20px 10px")});const we=ee(),te=()=>{t?we("/cart/user"):E("Bạn cần đăng nhập!")},se=Ss.debounce(async T=>{const{data:J}=await un(T);U(J)},500),ae=async T=>{A(T),se(T)};i.useEffect(()=>()=>{se.cancel()},[S]),i.useEffect(()=>{o(!0)},[]);const ne=s?Li:Ii;return e.jsxs(ye.Fragment,{children:[e.jsxs(I,{align:"middle",justify:"space-between",className:`${a?"w-11/12":"w-10/12"} lg:flex hidden z-[100] fixed right-0`,style:{top:n?"0":"-25%",padding:u,backgroundColor:"#00000038"},children:[e.jsx(m,{span:1,children:e.jsx(_r,{className:"text-[21px] md:text-[23px] lg:text-[25px]",onClick:r,children:a?e.jsx(vt,{}):e.jsx(jt,{})})}),e.jsxs(m,{span:6,className:"relative",children:[e.jsx(lt,{style:{boxShadow:"#333 0px 2px 10px"},onChange:T=>ae(T.target.value),placeholder:"Search..."}),e.jsx(Re,{data:L})]}),e.jsx(m,{span:16,children:e.jsxs(I,{justify:"center",align:"middle",children:[e.jsx(I,{children:ne.map((T,J)=>e.jsx(m,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:e.jsx(y,{style:{color:"#fff",textDecoration:"none",margin:"0 20px"},to:T.path,children:T.name})},J))}),e.jsx(m,{children:e.jsxs(pr,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:[e.jsx(hr,{children:"Liên hệ qc tele: "}),e.jsxs("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:[e.jsx(mr,{}),"@PH ANG"]})]})}),e.jsx(m,{className:"ml-5 text-[15px] lg:text-[17px] md:text[16px]",style:{marginLeft:"50px"},onClick:te,children:e.jsx(ce,{className:"__ text-yellow-500"})})]})}),e.jsx(m,{span:1,className:"text-end",children:e.jsx($e,{isLoggedInState:s,style:{backgroundColor:"#fde3cf",color:"#f56a00",textAlign:"center"}})})]}),e.jsxs("div",{className:"navbar_mb w-10/12 absolute right-0 z-10",children:[e.jsxs(I,{align:"middle",justify:"space-between",className:"navbar bgNav mb",children:[e.jsx(m,{children:e.jsx(_s,{className:"text-white",onClick:je})}),e.jsx(m,{children:e.jsx("div",{className:"ml-5 relative",onClick:te,children:e.jsx(ce,{className:"__ text-yellow-500"})})}),e.jsxs(m,{span:16,className:"relative",children:[e.jsx(lt,{onChange:T=>ae(T.target.value),placeholder:"Search..."}),e.jsx(Re,{data:L})]}),e.jsx(m,{children:e.jsx($e,{isLoggedInState:s,style:{backgroundColor:"#fde3cf",color:"#f56a00",lineHeight:"30px"}})})]}),e.jsx(bt,{width:200,title:"Drawer",placement:"left",closable:!1,onClose:ve,open:w,closeIcon:!0,className:"relative z-10",children:e.jsx(gr,{icons:Tr,id:!1,background:"#fff",data:ne})},g)]})]})},Lr=()=>e.jsx(e.Fragment,{children:e.jsx(ye.Fragment,{children:e.jsxs("div",{className:"ft text-white",children:[e.jsx("link",{rel:"stylesheet",integrity:"sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=",crossOrigin:"anonymous"}),e.jsx("footer",{className:"footer",children:e.jsx("div",{className:"footer-bottom footer-border-top light py-3",children:e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"m-0",children:["© 2023 copyright"," ",e.jsx("a",{href:"#",className:"text-reset",children:"| PH ANG"})]})})})})]})})}),Pr=()=>e.jsx("div",{className:"md:mt-[50px] lg:mt-[50px] lg:flex hidden justify-center text-white ",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"card p-3 ",style:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"d-flex justify-center",children:e.jsx("img",{src:M(80,"https://res.cloudinary.com/daz3lejjo/image/upload/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),alt:"Đấu phá thương khung phần 5",className:"avatar-md rounded-circle img-thumbnail"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-size-16 mb-1 mt-1",children:e.jsx(y,{to:"#",className:"text-light",children:"Admin Contact"})}),e.jsx("span",{className:"badge badge-soft-success mb-0",children:"Web Developer"})]})]}),e.jsxs("div",{className:"mt-3 pt-1 iconContact",children:[e.jsxs("p",{className:"mb-0",children:[e.jsx(Ts,{}),e.jsx("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:"Facebook"})]}),e.jsxs("p",{className:"mb-0 mt-2",children:[e.jsx(Is,{}),e.jsx("a",{href:"https://www.tiktok.com/@tieu_loli",children:"Tiktok"})]})]})]})})})}),Er=()=>{const{seri:t,loadingSeri:s}=i.useContext(X)||{},{state:a}=i.useContext(D)||{},r=a?"w-1/12":"w-2/12";return e.jsx(yr,{className:r,children:e.jsxs(wr,{className:r,children:[e.jsx(br,{justify:a?"center":"start",children:e.jsxs(fr,{className:a?"hiddenn":"block text-white",children:[e.jsx(y,{to:"/",children:e.jsx(jr,{children:"Hhtrungquoc.tv"})}),e.jsx(y,{to:"/",children:e.jsx(vr,{children:"tromphim.netify.app"})})]})}),e.jsx("div",{className:"mt-[50px]",children:s?e.jsx(Pt,{size:"large",children:void 0}):e.jsx(kr,{className:"sideBarActive",children:t&&t.map((n,o)=>e.jsx(Oe,{title:n.name,to:n.path=="/"?n.path:n.path+`/${n._id}`,children:e.jsxs(Cr,{state:a,children:[e.jsx(Nr,{children:Ga[o]}),e.jsx(Sr,{className:a?"hiddenn":"block",children:n.name})]})},o))})}),e.jsx(Pr,{})]})})},$r=x.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    opacity: .2;
    background-image: url(${t=>t.background});
  }
}
`,Rr=({children:t,...s})=>{var r;const{background:a}=i.useContext(X)||{};return e.jsx($r,{background:a&&((r=a==null?void 0:a.data)==null?void 0:r.url),...s,children:t})},zr=()=>{const{state:t}=i.useContext(D)||{};return e.jsxs(Rr,{className:"text-start",children:[e.jsx("div",{children:e.jsx(Ir,{})}),e.jsxs("div",{className:"containers flex",children:[e.jsx("div",{className:t?"w-1/12":"w-2/12",children:e.jsx(Er,{})}),e.jsx("div",{className:`${t?"w-11/12":"w-10/12"} p-2`,children:e.jsx(wt,{})})]}),e.jsx("div",{children:e.jsx(Lr,{})})]})},j=({children:t})=>e.jsx(i.Suspense,{fallback:e.jsx(Lt,{}),children:t});const Or=x(Ct)`
  .ant-table {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .ant-table-thead > tr > th {
    background-color: #f5f5f5;
    color: #333;
    font-weight: 600;
    padding: 16px;
    text-align: center;
  }

  .ant-table-tbody > tr > td {
    background-color: #ffffff;
    padding: 16px;
    text-align: center;
  }

  .ant-table-row:hover {
    background-color: #e6f7ff;
  }

  .ant-table-tbody > tr.ant-table-row {
    transition: background-color 0.3s ease;
  }

  .ant-pagination {
    margin: 16px 0;
    text-align: center;
  }
`,ze=i.memo(({columns:t,dataSource:s,...a})=>e.jsx(Or,{columns:t,dataSource:s,...a,bordered:!0,size:"middle"})),Dr=i.memo(({name:t,label:s,control:a,rules:r,...n})=>e.jsxs("div",{className:"mb-3",children:[e.jsx(_,{htmlFor:t,children:s}),e.jsx(Ls,{name:t,control:a,rules:r,defaultValue:"",render:({field:o})=>e.jsx(Ps,{placeholder:s,...o,...n})})]})),Z=i.memo(({title:t,cancelText:s,okText:a,onConfirm:r,children:n,...o})=>{const l=()=>{E("Hủy")};return e.jsx(Es,{title:t,onCancel:l,onConfirm:r,okText:a,cancelText:s,...o,children:n})}),Br=()=>{const{weeks:t}=i.useContext(X),{handleSubmit:s,control:a}=Nt(),r=async(u,f)=>{const w={categoryId:f};try{(await en(u,w)).data&&(St(R+"/weeks"),z("Delete Success"))}catch{E("Delete Failure")}},n=async u=>{await Ja(u)},o=async u=>{await Za(u)},l=u=>{var p;const f=[{title:"ID",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"operation",render:(g,S)=>e.jsx(e.Fragment,{children:e.jsx(Z,{title:"Delete the category",onConfirm:()=>r(u.key,S._id),okText:"Yes",cancelText:"No",children:e.jsx(b,{type:"text",shape:"circle",className:"ml-2",children:e.jsx(_e,{})})})})}],w=((p=t.find(g=>g._id===u.key))==null?void 0:p.category)||[];return e.jsx(ze,{columns:f,dataSource:w,pagination:!1})},h=t&&t.map((u,f)=>({key:u._id,name:u.name,action:e.jsxs(e.Fragment,{children:[e.jsx(y,{to:`/dashboard/week/edit/${u._id}`,children:e.jsx(b,{type:"primary",children:"Edit"})}),e.jsx(b,{onClick:()=>o(u._id),className:"ml-1",children:"Delete"})]})}));return e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:s(n),children:e.jsxs(I,{gutter:4,align:"middle",justify:"center",children:[e.jsx(m,{span:22,children:e.jsx(Dr,{name:"name",label:"Theo tuần",control:a,rules:void 0})}),e.jsx(m,{span:2,children:e.jsx(b,{htmlType:"submit",className:"mt-3",type:"primary",children:"Thêm"})})]})}),e.jsx(ze,{columns:Ya,dataSource:h,expandable:{expandedRowRender:l,defaultExpandedRowKeys:["0"]}})]})},Mr=()=>e.jsxs("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]",children:[e.jsx("h1",{className:"text-9xl font-extrabold text-white tracking-widest",children:"404"}),e.jsx("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute",children:"Page Not Found"}),e.jsx("button",{className:"mt-5",children:e.jsxs("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring",children:[e.jsx("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),e.jsx("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current",children:e.jsx(y,{to:"/",children:"Go Home"})})]})})]}),Fr=x.button`
background:linear-gradient(to right, #652EEE, #040F75)
`,Vr=x.input`
width: 100%;
padding: 10px;
border-radius: 10px;
background: transparent;
border: 1px solid #999;
font-size: 12px;
outline:none;
color: #fff;
`,Ur=x.form``,Hr=x.div`
padding: 0 20px;
@media (min-width: 768px){
  padding: 0 40px;
}
@media (min-width: 1024ox) {
  padding: 0 60px;
}
`,qr=x.div`
color: #fff;
margin-top:20px;
font-size:25px;
@media (min-width: 768px){
  margin-top:30px;
}
@media (min-width: 1024ox) {
  margin-top:40px;
`,Wr=x.div`
margin: 15px 0;
color: #999;
font-size:13px;
`,Gr=x.div`
cursor: pointer;
`,Yr=x.div`
padding: 15px 5px;
border: 1px solid #fff;
font-style: italic;
`,Kr=x.div`
border-bottom: 1px dashed  #fff;
`,Xr=x.div`

`,Ut=i.memo(({onSubmit:t,formTitle:s,formDescription:a,submitButtonText:r,formIntro:n,formHeader:o,checkedAccount:l,handleMessage:h,redirect:u,array:f,schemaPage:w})=>{const{register:p,handleSubmit:g,formState:{errors:S}}=Nt({resolver:$s(w)});return e.jsx("div",{className:"h-screen relative z-0",children:e.jsxs(Hr,{className:"g-6 flex flex-wrap justify-center w-full items-center absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4",style:{transform:"translate(-50%,-50%)"},children:[e.jsxs("div",{className:"w-8/12 items-center text-white hidden lg:block md:hidden",children:[e.jsx(Xr,{className:"text-[50px] ",children:o}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(Yr,{className:"w-2/12",children:n}),e.jsx(Kr,{className:"w-10/12"})]})]}),e.jsxs("div",{className:"md:w-8/12 lg:w-4/12 w-full lg:p-5 md:p-4 p-3",style:{background:"rgba(248, 248, 248, 0.04)",borderRadius:" 5px"},children:[e.jsxs("div",{children:[e.jsx(qr,{children:s}),e.jsx(Wr,{children:a})]}),e.jsxs(Ur,{onSubmit:g(t),children:[f&&f.map((A,L)=>e.jsx("div",{className:"relative lg:mb-6 md:mb-4 mb-2","data-te-input-wrapper-init":!0,children:e.jsxs("div",{children:[e.jsx(Vr,{disabled:A.disable,style:{background:`${A.disable?"#99979742":""}`},type:A.type,...p(`${A.field}`),placeholder:A.field,className:"placeholder:capitalize"}),S&&S[A.field]&&e.jsx("div",{className:"text-sm text-pink-600 mt-1",children:S[A.field].message})]})},L)),e.jsx("div",{className:"lg:mb-6 md:mb-5 mb-4",children:e.jsx(xt,{to:"/forgot-password",children:e.jsxs("div",{className:"text-center text-white text-sm font-medium text-primary-600 hover:underline text-primary-500",children:["Forgot password?"," "]})})}),e.jsx(Fr,{type:"submit",className:"w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600",children:r}),e.jsx("div",{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:e.jsxs("p",{className:"mx-4 mb-0 text-center text-white text-[12px]",children:[" ","OR"]})}),e.jsx(Gr,{className:"flex justify-center",onClick:h,children:e.jsx(K,{style:{width:"30px",height:"30px"},src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:""})}),e.jsx("div",{className:"lg:mb-6 md:mb-4 mb-2 text-center lg:mt-5 md:mt-3 mt-2 text-slate-400 ",children:e.jsx(y,{to:u,className:"text-sm text-primary-600 hover:underline text-primary-500",children:l})})]})]})]})})}),Jr=[{type:"email",field:"email",disable:!1}],Zr=()=>{const t=ee(),s=_t().shape({email:Ae().required().email()}),a=async n=>{const o=await Na(n);o.data.success?(z(o.data.message),t("/signin")):E(o.data.message)},r=()=>{Y.success("Đang cập nhật!")};return e.jsx(Ut,{onSubmit:a,formTitle:"Forgot Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:r,redirect:"/forgot-password",array:Jr,schemaPage:s})},Qr=[{type:"password",field:"password",disable:!1},{type:"password",field:"repassword",disable:!1}],ei=()=>{const t=ee(),{id:s,token:a}=De(),r=_t().shape({password:Ae().required().min(6,"Password tối thiểu 6 kí tự"),repassword:Ae().required().oneOf([Rs("password"),null],"Passwords must match")}),n=async l=>{const h=await Sa(s,a,l);h.data.success?(z(h.data.message),t("/signin")):E(h.data.message)},o=()=>{Y.success("Đang cập nhật!")};return e.jsx(Ut,{onSubmit:n,formTitle:"Reset Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:o,redirect:"/reset-password",array:Qr,schemaPage:r})},ti=()=>{const t=["#eb2f96","#52c41a","#eba12f"],{data:{data:s}}=O(R+"/category/latest"),a=[{title:"Name",dataIndex:"name",key:"name",render:o=>e.jsx("p",{children:o})},{title:"Action",key:"action",render:(o,l,h)=>e.jsx(b,{type:"text",shape:"circle",className:"ml-2",onClick:()=>r(l.key),children:e.jsx(fe,{type:"success",style:{color:t[h]}})})}],r=async o=>{const l={id:o},{data:h}=await hn(l);h.success===!0&&(z("Success"),St(R+"/category/latest"))},n=s&&s.map((o,l)=>({key:o._id,name:o.name}));return e.jsx(Ct,{columns:a,dataSource:n})},si=()=>{const t=P(Un),{data:s}=O(R+"/most-watched-episodes"),{data:a}=O(R+"/rating/stats"),r={data:s.data,xField:"seri",yField:"view",point:{shapeField:"square",sizeField:4},interaction:{tooltip:{marker:!1}},style:{lineWidth:2}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-around gap-2",children:[e.jsx(re,{className:"w-full",children:e.jsx(ie,{title:"Active Users",prefix:e.jsx(ue,{}),value:t.length})}),e.jsx(re,{bordered:!0,className:"w-full",children:e.jsx(ie,{title:"Comment",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:e.jsx(fe,{}),suffix:"%"})}),e.jsx(re,{bordered:!1,className:"w-full",children:e.jsx(ie,{title:"View",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:e.jsx(zs,{}),suffix:"%"})}),e.jsx(re,{className:"w-full",children:e.jsx(ie,{title:"Rating Video",prefix:e.jsx(Os,{}),value:a.totalRatings})})]}),e.jsx("div",{className:"flex justify-between gap-2",children:e.jsx(Ds,{className:"w-5/12",...r})})]})},dt=i.memo(({defaultValue:t,placeholder:s,style:a,options:r,...n})=>e.jsx(Bs,{placeholder:s,defaultValue:t,style:a,options:r,allowClear:!0,...n})),ai=i.memo(()=>{const t=P(d=>d.product.value),s=P(d=>d.product.isLoading),[a,r]=i.useState(1),n=P(d=>d.category.category),[o,l]=i.useState(!1),{seri:h}=i.useContext(X)||[],{user:u}=i.useContext(D),[f,w]=i.useState(""),[p,g]=i.useState(!1),[S,A]=i.useState([]),L=V();i.useEffect(()=>{L(me(a))},[p]);const U=d=>{L(Bt(d))},je=d=>{L(Mt(d))},ve=d=>{r(d),L(me(d))},we=async()=>{(await An(S)).data.success==!0?(g(!p),B.success("Delete products successfully")):B.error("Error deleting products")},te=async()=>{(await Rn(S)).data.success==!0?(g(!p),B.success("Approved Products Successfully")):B.error("Error deleting products")},se=async()=>{(await zn(S)).data.success==!0?(g(!p),B.success("Edit Products Successfully")):B.error("Error deleting products")},ae=async d=>{(await L(Dt(d))).payload.success?B.success("Delete product successfully"):B.error("Error deleting product")},ne=d=>{w(d)},J={selectedRowKeys:S,onChange:d=>{A(d)}},qt=async d=>{const N=await In(d);N.data.success==!0?(z(N.data.message),g(!p)):E("Lỗi rồi!")},Wt=async d=>{const N=await Ln(d);N.data.success==!0?(z(N.data.message),g(!p)):E("Lỗi rồi!")},Gt=async()=>{const d=await $n();d.data.suscess==!0?z(d.data.message):E(d.data.message)},Yt=()=>{l(!0)},Kt=()=>{l(!1)},Xt=async()=>{(await L(Ft())).meta.requestStatus=="fulfilled"?(g(!p),l(!1),z("Suscess")):E("Error")},Jt=[{title:"Name",dataIndex:"name",key:"name",width:120},{title:"Slug",dataIndex:"slug",key:"slug",width:200},{title:"Category",key:"category",dataIndex:"category",width:150},{title:"View",key:"view",dataIndex:"view",width:100},{title:"Seri",key:"seri",dataIndex:"seri",width:100},{title:"Copyright",key:"copyright",dataIndex:"copyright",width:100},{title:"Active",dataIndex:"isActive",key:"isActive",width:90},{title:"Trailer",dataIndex:"trailer",key:"trailer",width:100},{title:"Country",dataIndex:"country",key:"country",width:100},{title:"Year",dataIndex:"year",key:"year",width:100},{title:"Options",dataIndex:"options",key:"options",width:100},{title:"Sidebar",key:"sidebar",dataIndex:"sidebar",width:100},{title:"Action",key:"action",dataIndex:"action",width:140,fixed:"right",render:(d,N)=>{switch(u==null?void 0:u.role){case 0:return e.jsx(e.Fragment,{children:e.jsx(y,{to:"/",children:e.jsx(b,{type:"text",shape:"circle",children:e.jsx(le,{})})})});case 1:return e.jsxs(e.Fragment,{children:[e.jsx(y,{to:"/",children:e.jsx(b,{type:"text",shape:"circle",children:e.jsx(le,{})})}),e.jsx(y,{to:`/dashboard/product/edit/${N.key}`,children:e.jsx(b,{type:"text",danger:!0,shape:"circle",children:e.jsx(be,{})})})]});case 2:return e.jsxs(e.Fragment,{children:[(N==null?void 0:N.isApproved)==!0?e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"flex items-center mb-2",icon:e.jsx(Us,{}),ghost:!0,type:"text",style:{color:"#000"},disabled:N.isApproved==!0,children:"Approved"}),e.jsx(b,{onClick:()=>Wt(N.key),icon:e.jsx(Hs,{}),className:"flex items-center w-full justify-center mb-2",danger:!0,children:"Approval"})]}):e.jsx(e.Fragment,{children:e.jsx(b,{onClick:()=>qt(N.key),icon:e.jsx(qs,{}),className:"flex items-center w-full justify-center text-white bg-blue-500",children:"Approve"})}),e.jsxs("div",{className:"flex",children:[e.jsx(y,{to:"/d/"+N.slug,children:e.jsx(b,{type:"text",shape:"circle",children:e.jsx(le,{})})}),e.jsx(y,{to:`/dashboard/product/edit/${N.slug}`,children:e.jsx(b,{type:"text",danger:!0,shape:"circle",children:e.jsx(be,{})})}),e.jsx(Z,{title:"Delete the product",onConfirm:()=>ae(N.key),okText:"Yes",cancelText:"No",children:e.jsx(b,{type:"text",shape:"circle",className:"ml-2",children:e.jsx(_e,{})})}),e.jsx(b,{type:"text",shape:"circle",className:"ml-2",children:e.jsx(fe,{type:"success"})})]})]})}}}],Zt=(t==null?void 0:t.data)&&(t==null?void 0:t.data.map(d=>{var N,Me,Fe,Ve,Ue,He;return{key:d._id,name:d.name,slug:d.slug,trailer:d.trailer?"true":"false",category:(N=d==null?void 0:d.category)==null?void 0:N.name,view:e.jsx(F,{color:"#2db7f5",children:d.view}),sidebar:h&&h.map((qe,io)=>qe._id===d.typeId&&qe.name),seri:d.seri,copyright:d.copyright,isActive:d.server2||d.dailyMotionServer?e.jsx(F,{color:"success",children:"Video active"}):e.jsx(F,{color:"error",children:"No video"}),options:(Me=d.category)==null?void 0:Me.lang,country:(Fe=d.category)!=null&&Fe.country?(Ve=d.category)==null?void 0:Ve.country:"null",year:(Ue=d.category)!=null&&Ue.year?(He=d.category)==null?void 0:He.year:"null",isApproved:d.isApproved,idCategory:d.category,option:[e.jsx(b,{children:"Add Option"})]}}));return e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"mb-2 bg-blue-500 text-white",onClick:Yt,children:"Open"}),e.jsx(bt,{title:"Làm gì thì làm đi :))",onClose:Kt,open:o,children:e.jsxs(I,{gutter:[10,10],align:"middle",style:{marginBottom:"10px"},children:[e.jsx(m,{children:e.jsx(Z,{title:"Delete The Movies",onConfirm:we,okText:"Yes",cancelText:"No",children:e.jsx(b,{icon:e.jsx(_e,{}),className:"flex items-center bg-gradient-to-br from-pink-500 to-orange-400 text-white",children:"Delete Multiple Movies"})})}),e.jsx(Z,{title:"Approved Multiple Movies",onConfirm:te,okText:"Yes",cancelText:"No",children:e.jsx(b,{className:"flex items-center bg-amber-500 text-white",children:"Approved Multiple"})}),e.jsx(Z,{title:"Edit Multiple Movies",onConfirm:se,okText:"Yes",cancelText:"No",children:e.jsx(b,{icon:e.jsx(be,{}),className:"flex items-center mx-2 bg-gradient-to-br from-purple-600 to-blue-500 text-white",children:"Edit Multiple"})}),e.jsx(m,{children:e.jsx(y,{to:"/dashboard/product/add",children:e.jsx(b,{icon:e.jsx(ke,{}),className:"flex items-center text-white bg-blue-500",children:"Add Movie"})})}),e.jsx(m,{children:e.jsx(y,{icon:e.jsx(ke,{}),to:"/dashboard/product/creacting",children:e.jsx(b,{className:"bg-green-400 ",children:"Add Multiple Movies"})})}),e.jsx(m,{children:e.jsx(y,{to:"/dashboard/product/add",children:e.jsx(b,{className:"bg-yellow-400",children:"Export PDF"})})}),e.jsx(m,{children:e.jsx(y,{to:"/dashboard/product/add",children:e.jsx(b,{className:"bg-purple-500",shape:"round",children:"Export Excel"})})}),e.jsx(m,{children:e.jsx(dt,{placeholder:"Category",onChange:U,style:{width:300},options:n&&(n==null?void 0:n.data.map((d,N)=>({label:d.name,value:d._id})))})}),e.jsx(m,{children:e.jsx(dt,{placeholder:"Approval",onChange:ne,style:{width:300},options:[{value:!0,label:"Approve"},{value:!1,label:"Approved"}],children:void 0})}),e.jsx(m,{children:e.jsx("div",{className:"form-outline",children:e.jsx("input",{type:"search",placeholder:"search...",className:"form-control p-2 rounded bg-[#fff] shadow-sm",onChange:d=>je(d.target.value)})})}),e.jsx(m,{children:e.jsxs(b,{onClick:()=>Gt(),icon:e.jsx(ke,{}),danger:!0,className:"flex items-center",children:[e.jsx(Ms,{}),"Clear Products Redis"]})}),e.jsx(m,{children:e.jsxs("button",{onClick:()=>Xt(),type:"button",className:"gap-2 flex items-center py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100",children:[e.jsx(Fs,{}),"Generate Episode Movie"]})})]})}),e.jsx(Vs,{spinning:s,delay:void 0,children:e.jsx(ze,{rowSelection:J,expandable:{expandedRowRender:d=>e.jsx(e.Fragment,{children:d.option})},columns:Jt,dataSource:Zt,scroll:{x:1500,y:1e3},pagination:{defaultPageSize:40,showSizeChanger:!0,pageSizeOptions:["40","80","120"],current:a,onChange:ve,total:t==null?void 0:t.totalCount}})})]})}),ni=i.lazy(()=>k(()=>import("./index-3cc45204.js"),["assets/index-3cc45204.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css","assets/index-afadcf53.js"])),ri=i.lazy(()=>k(()=>import("./index-6834daa4.js"),["assets/index-6834daa4.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css","assets/index-afadcf53.js","assets/index-8d119cce.js"])),ii=i.lazy(()=>k(()=>Promise.resolve().then(()=>Ar),void 0)),oi=i.lazy(()=>k(()=>import("./Profile-cc23dc0c.js"),["assets/Profile-cc23dc0c.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),li=i.lazy(()=>k(()=>import("./Sign-in-b4e345e3.js"),["assets/Sign-in-b4e345e3.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),di=i.lazy(()=>k(()=>import("./Sign-up-add46ef5.js"),["assets/Sign-up-add46ef5.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"]));i.lazy(()=>k(()=>import("./list-4ed993c7.js"),[]));const ci=i.lazy(()=>k(()=>import("./index-5d1f6a7f.js"),["assets/index-5d1f6a7f.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),ui=i.lazy(()=>k(()=>import("./add-2ea4f9cc.js"),["assets/add-2ea4f9cc.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),xi=i.lazy(()=>k(()=>import("./edit-91bf2955.js"),["assets/edit-91bf2955.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),hi=i.lazy(()=>k(()=>import("./admin-86d96129.js"),["assets/admin-86d96129.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),mi=i.lazy(()=>k(()=>import("./add-8590b1e2.js"),["assets/add-8590b1e2.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css","assets/index-8b897561.js","assets/index-fb9e1258.js"])),pi=i.lazy(()=>k(()=>import("./edit-c3027d54.js"),["assets/edit-c3027d54.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css","assets/index-8b897561.js","assets/index-fb9e1258.js"])),gi=i.lazy(()=>k(()=>import("./adds-feec641b.js"),["assets/adds-feec641b.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),yi=i.lazy(()=>k(()=>import("./CreatingProducts-e2f52b52.js"),["assets/CreatingProducts-e2f52b52.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css","assets/index-fb9e1258.js"])),fi=i.lazy(()=>k(()=>import("./index-56bcc5bd.js"),["assets/index-56bcc5bd.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css","assets/type-fb7332ef.js","assets/index-8b897561.js","assets/index-fb9e1258.js"])),ji=i.lazy(()=>k(()=>import("./edit-d8158a02.js"),["assets/edit-d8158a02.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css","assets/index-fb9e1258.js","assets/index-8b897561.js"])),vi=i.lazy(()=>k(()=>import("./index-b53f9241.js"),["assets/index-b53f9241.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),wi=i.lazy(()=>k(()=>import("./edit-983847a9.js"),["assets/edit-983847a9.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),bi=i.lazy(()=>k(()=>import("./index-860d0f43.js"),["assets/index-860d0f43.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),ki=i.lazy(()=>k(()=>import("./index-731c87f6.js"),["assets/index-731c87f6.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),Ci=i.lazy(()=>k(()=>import("./index-77ee8dd7.js"),["assets/index-77ee8dd7.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),Ni=i.lazy(()=>k(()=>import("./index-4b175fc9.js"),["assets/index-4b175fc9.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css","assets/index-8d119cce.js","assets/index-afadcf53.js"])),Si=i.lazy(()=>k(()=>import("./index-53040676.js"),["assets/index-53040676.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css","assets/type-fb7332ef.js"])),_i=i.lazy(()=>k(()=>import("./CatemainProduct-2bf9b838.js"),["assets/CatemainProduct-2bf9b838.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),Ai=i.lazy(()=>k(()=>import("./index-8f30c35b.js"),["assets/index-8f30c35b.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),Ti=i.lazy(()=>k(()=>import("./edit-843afb13.js"),["assets/edit-843afb13.js","assets/vendor-0710fd16.js","assets/vendor-528bb3cf.css"])),Ii=[{path:"/",name:"Trang chủ",title:"Trang chủ"},{path:"/signin",name:"Đăng nhập",title:"Đăng nhập"},{path:"/signup",name:"Đăng kí",title:"Đăng kí"},{path:"/complete",name:"Hoàn Thành",title:"Hoàn Thành"}],Li=[{path:"/",name:"Trang chủ"},{path:"/profile",name:"Hồ sơ",title:"Hồ sơ"},{path:"/complete",name:"Hoàn Thành",title:"Hoàn Thành"}],Pi=[{path:"/",element:e.jsx(zr,{}),children:[{path:"/",element:e.jsx(wn,{}),index:!0},{path:"d/:id",element:e.jsx(j,{children:e.jsx(sr,{})})},{path:"q/:id",element:e.jsx(j,{children:e.jsx(ir,{})})},{path:"search/category",element:e.jsx(j,{children:e.jsx(ii,{})})},{path:"cart/user",element:e.jsx(j,{children:e.jsx(ki,{})})},{path:"movie-content/:id",element:e.jsx(j,{children:e.jsx(ri,{})})},{path:"types/h/:id",element:e.jsx(j,{children:e.jsx(ni,{})})},{path:"loadmore",element:e.jsx(j,{children:e.jsx(Ni,{})})},{path:"signup",element:e.jsx(j,{children:e.jsx(di,{})})},{path:"signin",element:e.jsx(j,{children:e.jsx(li,{})})},{path:"forgot-password",element:e.jsx(j,{children:e.jsx(Zr,{})})},{path:"reset-password/:id/:token",element:e.jsx(j,{children:e.jsx(ei,{})})},{path:"profile",element:e.jsx(j,{children:e.jsx(oi,{})})}]},{path:"dashboard",element:e.jsx(xr,{children:e.jsx(ur,{})}),children:[{path:"",element:e.jsx(j,{children:e.jsx(si,{})}),index:!0},{path:"products",element:e.jsx(j,{children:e.jsx(ai,{})})},{path:"users",element:e.jsx(j,{children:e.jsx(ci,{})})},{path:"adminUer",element:e.jsx(j,{children:e.jsx(hi,{})})},{path:"users/:id/edit",element:e.jsx(j,{children:e.jsx(xi,{})})},{path:"user/add",element:e.jsx(j,{children:e.jsx(ui,{})})},{path:"user/creatingUser",element:e.jsx(j,{children:e.jsx(gi,{})})},{path:"product/add",element:e.jsx(j,{children:e.jsx(mi,{})})},{path:"product/edit/:id",element:e.jsx(j,{children:e.jsx(pi,{})})},{path:"product/creacting",element:e.jsx(j,{children:e.jsx(yi,{})})},{path:"category",element:e.jsx(j,{children:e.jsx(fi,{})})},{path:"category/edit/:id",element:e.jsx(j,{children:e.jsx(ji,{})})},{path:"category/latest",element:e.jsx(j,{children:e.jsx(ti,{})})},{path:"trailing",element:e.jsx(j,{children:e.jsx(vi,{})})},{path:"trailerUrl/:id",element:e.jsx(j,{children:e.jsx(wi,{})})},{path:"comments",element:e.jsx(j,{children:e.jsx(bi,{})})},{path:"cart",element:e.jsx(j,{children:e.jsx(Ci,{})})},{path:"types",element:e.jsx(j,{children:e.jsx(Si,{})})},{path:"types/CateMainProduct/:id",element:e.jsx(j,{children:e.jsx(_i,{})})},{path:"background",element:e.jsx(j,{children:e.jsx(Ai,{})})},{path:"background/edit/:id",element:e.jsx(j,{children:e.jsx(Ti,{})})},{path:"weeks",element:e.jsx(j,{children:e.jsx(Br,{})})}]},{path:"/*",element:e.jsx(Mr,{})}],Ei=[{path:"/dashboard",name:"Admin",icon:e.jsx(Ws,{})},{path:"/dashboard/products",name:"Movies",icon:e.jsx(Gs,{})},{name:"User",icon:e.jsx(Xe,{}),children:[{path:"/dashboard/users",name:"Users",icon:e.jsx(ue,{})},{path:"/dashboard/adminUer",name:"Admin",icon:e.jsx(Je,{})}]},{name:"Category",icon:e.jsx(Xe,{}),children:[{path:"/dashboard/category",name:"Category",icon:e.jsx(Ys,{})},{path:"/dashboard/category/latest",name:"Latest",icon:e.jsx(fe,{})}]},{name:"Themes",icon:e.jsx(kt,{}),children:[{path:"/dashboard/trailing",name:"Trailer",icon:e.jsx(Je,{})},{path:"/dashboard/background",name:"Background",icon:e.jsx(Ks,{})}]},{name:"Big Category",icon:e.jsx(mt,{}),children:[{path:"/dashboard/types",name:"Types",icon:e.jsx(Xs,{})}]},{path:"/dashboard/comments",name:"Comments",icon:e.jsx(Js,{})},{path:"/dashboard/cart",name:"Cart",icon:e.jsx(Zs,{})},{path:"/dashboard/weeks",icon:e.jsx(yt,{}),name:"Week"}],$i=Qs`
:root{
  textarea {
    outline: none;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
  
  body{
    position: relative;
    z-index: -2;
  }

  #root {
    background: rgb(41 41 41);
    position: relative;
    z-index: -2;
  }
  
  
  main {
    position: relative;
  }
  
  .containers {
    padding-top: 10.5%;
    min-height:100vh;
  }
  
  .d-flex {
    display: block !important;
  }
  
  .network {
    display: none;
  }
  
  .nav-masthead {
    padding: 10px;
  }
  
  .card-body {
    text-align: center;
  }
  
  .ft {
    background: #00000063;
    display: block;
    margin-top:auto;
  }
  
  .slick-arrow {
    display:none !important;
  }
  
  .navbar_mb {
    display: block;
  }
  
  
  .index{
    width: 83%;
  }
  
  .bgNav {
    background-color: rgb(0 0 0 / 19%);
  }
  
  .card {
    background-color: rgb(28 28 30 / 22%);
  }

  .container-fluid{
    display: flex;
    justify-content: space-between;
  }

  .pl{
    display: none;
  }


  @media(min-width:768px){
    font-size:14px;

    .pl{
      display: block;
    }

    .containers {
      padding-top: 7.5%;
    }
  }


  @media(min-width:1024px) {

    #root{
      background:rgb(41 41 41);
    }

    font-size:16px;
  
    .navbar_mb {
      display: none;
    }
  
    .d-flex {
      display: flex !important;
    }
  
    .navbar {
      display: none;
    }
  
    .ft {
      background: #00000063;
      display: block;
    }

    .cateTitle p {
      margin-top: 7px;
      font-size: 14px;
      font-weight: 500;
    }
  
    .network {
      margin: 20px 10px;
      display: block;
    }
  
    .card {
      position: relative;
      display: flex;
      justify-content: center;
      min-width: 0;
      word-wrap: break-word;
      background-color: rgb(28 28 30 / 22%);
      box-shadow: 0 0 1px #000;
      background-clip: border-box;
      border-radius: 1rem;
    }
  
    .avatar-md {
      height: 4rem;
      width: 4rem;
    }
  
    .rounded-circle {
      border-radius: 50% !important;
    }
  
    .img-thumbnail {
      padding: 0.1rem;
      background-color: #f1f3f7;
      border: 1px solid #eff0f2;
      border-radius: 0.75rem;
    }

    .badge-soft-success {
      color: #63ad6f !important;
      background-color: rgba(99, 173, 111, .1);
    }
  
    .mb-0 {
      margin-bottom: 0 !important;
    }
  
    .badge {
      display: inline-block;
      padding: 0.25em 0.6em;
      font-size: 75%;
      font-weight: 500;
      line-height: 1;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.75rem;
    }
  
    .iconContact p {
      display: flex;
      align-items: center;
      gap: 0 10px;
      justify-content: center;
    }
    
    /* //check */
    .left {
      top: 50%;
      left: -2%;
      transform: translateY(-50%);
    }
  
    .right {
      top: 50%;
      transform: translateY(-50%);
      right: -2%;
    }
  
    .left i,
    .right i {
      font-size: 23px;
      opacity: .2;
      transition: all .2s linear;
    }
  
    .__:hover {
      opacity: 1;
      cursor: pointer;
    }
  
    .nav-masthead {
      padding: 10px;
    }
  
    .card-body {
      text-align: center;
    }
  
    .searhValue {
      display: flex;
      gap: 0 15px;
      align-items: start;
    }
  
    .searhValue a {
      color: #fff;
    }
  
    .searchValueImg {
      width: 180px;
      height: 180px;
    }
  
    .searchValueImg img {
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  
    .auth a {
      color: #000;
    }
  
    .comment {
      height: 100%;
      white-space: nowrap;
      height: 200px;
    }
  
    .comment::-webkit-scrollbar-thumb {
      background-color: #999;
    }
  
    .comment::-webkit-scrollbar {
      width: 5px;
    }
  
    .commentContent {
      border-radius: 5px;
      margin: 10px 0;
    }

    .containers{
      padding-top: 5.5%;
    }
  }

`,ct=t=>{if(!t)return!0;try{const s=ea(t),a=Date.now()/1e3;return s.exp<a}catch(s){return console.error("Error decoding token:",s),!0}};function Ri(){const t=gt(),s="G-0EEY3R7F0S",a=ta(Pi),r=ee(),[n,o]=sa.useNotification(),l=$();return i.useEffect(()=>{Ze.initialize(s),Ze.send({hitType:"pageview",page:t.pathname,title:"User Active"}),(async()=>{if(l){const h=l.token,u=l.refreshToken;if(ct(u))Vt("Token expires-relogin"),localStorage.clear(),r("/signin");else if(ct(h)){const f={refreshToken:l.refreshToken},{data:w}=await _a(f);localStorage.setItem("token",JSON.stringify(w))}}})(),setTimeout(()=>{n.open({message:"Admin Xin Thông Báo!",description:"Xin lỗi, server phim hiện đang quá tải do lượng truy cập lớn. Vui lòng chờ đợi trong 1-2 phút để tiếp tục xem. Chúng tôi đang nỗ lực để cải thiện tình hình và xin thành thật xin lỗi vì sự bất tiện này.Trân trọng!",placement:"topRight"})},2e3)},[]),e.jsxs(e.Fragment,{children:[o,a,e.jsx($i,{}),e.jsx(aa,{}),e.jsx(na.BackTop,{visibilityHeight:200})]})}const zi={value:{data:[],totalCount:0,totalPages:0},isLoading:!1,getOneProduct:{},getAllProductByCategory:[],status:!1},Oi=G({name:"product",initialState:zi,reducers:{},extraReducers:t=>{t.addCase(me.pending,(s,a)=>{s.isLoading=!0}).addCase(me.fulfilled,(s,a)=>{s.isLoading=!1,s.value=a.payload}),t.addCase(Dt.fulfilled,(s,a)=>{s.value.data=s.value.data.filter(r=>r._id!==a.payload.data._id)}),t.addCase(Dn.fulfilled,(s,a)=>{s.value.data.push(a.payload)}),t.addCase(Bn.fulfilled,(s,a)=>{s.value.data.push(a.payload)}),t.addCase(Mn.fulfilled,(s,a)=>{s.value.data=[...s.value.data,a.payload]}),t.addCase(Bt.fulfilled,(s,a)=>{s.value.data=a.payload}),t.addCase(Mt.fulfilled,(s,a)=>{s.value.data=a.payload}),t.addCase(Ee.pending,(s,a)=>{s.isLoading=!0}).addCase(Ee.fulfilled,(s,a)=>{s.isLoading=!1,s.getOneProduct=a.payload}),t.addCase(Fn.fulfilled,(s,a)=>{s.getAllProductByCategory=a.payload}),t.addCase(Ft.fulfilled,(s,a)=>{s.value.data=[...s.value.data,...a.payload.data]})}}),Di=Oi.reducer,Bi={category:{data:[],length:0},isLoading:!1,isError:!1,categoryNotReqId:[],details:{}},Mi=G({name:"category",initialState:Bi,reducers:{},extraReducers:t=>{t.addCase(de.fulfilled,(s,a)=>{s.isLoading=!1,s.category=a.payload}).addCase(de.pending,(s,a)=>{s.isLoading=!0}).addCase(de.rejected,(s,a)=>{s.isError=!0}),t.addCase(rt.fulfilled,(s,a)=>{s.isLoading=!1,s.categoryNotReqId=a.payload}).addCase(rt.pending,(s,a)=>{s.isLoading=!0}),t.addCase(mn.fulfilled,(s,a)=>{s.category.data=s.category.data.concat(a.payload)}),t.addCase(pn.fulfilled,(s,a)=>{s.category.data=s.category.data.filter(r=>r._id!==a.payload._id)}),t.addCase(gn.fulfilled,(s,a)=>{s.category.data.push(a.payload)}),t.addCase(Pe.fulfilled,(s,a)=>{s.details=a.payload,s.isLoading=!1}).addCase(Pe.pending,(s,a)=>{s.isLoading=!0})}}),Fi=Mi.reducer,ko=async()=>await c.get("/trailer"),pe=$(),Vi=async t=>await c.put(`/trailer/${t.get("_id")}/${pe.user._id}`,t,{headers:{Authorization:`Bearer ${pe.token}`}}),Co=async t=>await c.post(`/background/${t.get("_id")}/${pe.user._id}`,t,{headers:{Authorization:`Bearer ${pe.token}`}}),Ui=v("trailer/Trailing",async t=>{const{data:s}=await Vi(t);return s}),Hi=G({name:"post",initialState:{value:[],trailerValues:[]},reducers:{},extraReducers:t=>{t.addCase(Ui.fulfilled,(s,a)=>{s.trailerValues.push(a.payload)})}}),qi=Hi.reducer,ge=$(),Wi=async()=>await c.get("/comments"),Gi=async(t,s)=>await c.post(`/comment/${t}/${ge.user._id}`,s,{headers:{Authorization:`Bearer ${ge.token}`}}),Yi=async t=>await c.post(`/comment/${ge.user._id}`,t,{headers:{Authorization:`Bearer ${ge.token}`}}),Ki=v("getAllCommentSlice",async()=>{const{data:t}=await Wi();return t}),Xi=v("addCommentSlice",async t=>{const{data:s}=await Gi(t.product,t);return s}),Ji=v("deleteComment",async t=>{const{data:s}=await Yi(t);return s}),Zi=G({name:"comment",initialState:{value:[]},reducers:{},extraReducers:t=>{t.addCase(Ki.fulfilled,(s,a)=>{s.value=a.payload}),t.addCase(Xi.fulfilled,(s,a)=>{s.value.push(a.payload)}),t.addCase(Ji.fulfilled,(s,a)=>{s.value=s.value.filter(r=>r._id!==a.payload._id)})}}),Qi=Zi.reducer,eo=G({name:"cart",initialState:{value:[],isLoading:!1,code:null},reducers:{},extraReducers:t=>{t.addCase(et.fulfilled,(s,a)=>{s.isLoading=!1,s.value=a.payload}).addCase(et.pending,(s,a)=>{s.isLoading=!0}),t.addCase(Te.pending,(s,a)=>{s.isLoading=!0}).addCase(Te.fulfilled,(s,a)=>{Array.isArray(s.value)||(s.value=[]),s.isLoading=!1,s.value.push(a.payload.cart)})}}),to=eo.reducer,so={key:"root",storage:da,whitelist:[""],expire:"3600000"},ao=ra({product:Di,user:Oa,category:Fi,trailer:qi,comment:Qi,cart:to}),no=ia(so,ao),Ht=oa({reducer:no,middleware:t=>t({serializableCheck:!1})}),ro=la(Ht);ca.createRoot(document.getElementById("root")).render(e.jsx(ua,{store:Ht,children:e.jsx(xa,{persistor:ro,children:e.jsx(tn,{children:e.jsx(Da,{children:e.jsx(ha,{children:e.jsx(Ri,{})})})})})}));export{po as $,Ut as A,Ea as B,yo as C,X as D,de as E,Dn as F,q as G,K as H,M as I,he as J,Ee as K,Ma as L,Fa as M,Et as N,Bn as O,Ra as P,Mn as Q,wo as R,Pt as S,ho as T,vo as U,mn as V,pn as W,Pe as X,gn as Y,rn as Z,_,an as a,ko as a0,Ui as a1,I as a2,m as a3,xo as a4,jo as a5,$ as a6,c as a7,uo as a8,Co as a9,Ki as aa,Z as ab,mo as ac,Ji as ad,La as ae,$t as af,et as ag,co as ah,go as ai,R as b,y as c,lo as d,V as e,D as f,P as g,Ua as h,ot as i,nt as j,z as k,E as l,Ce as m,Un as n,Pa as o,F as p,b as q,tt as r,ze as s,fo as t,O as u,st as v,Dr as w,Ie as x,$a as y,bo as z};
