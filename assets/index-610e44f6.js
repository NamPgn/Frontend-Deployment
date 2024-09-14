import{u as Nt,a as St,b as Je,c as p,d as F,m as V,r as o,j as e,T as _t,e as At,s as c,S as Tt,f as It,L as Ke,D as Lt,g as Pt,H as Xe,B as $t,A as Qe,R as Et,h as Rt,F as zt,W as Ot,i as Dt,k as Bt,l as Ft,P as Ze,n as Vt,C as Mt,o as Ut,p as Ht,N as we,q as qt,t as te,v as Wt,E as Gt,w as be,x as Yt,y as et,z as Te,G as Jt,I as le,J as Kt,K as tt,M as Xt,O as q,Q as Ie,U as Le,V as Qt,X as ae,Y as at,Z as Zt,_ as ue,$ as xe,a0 as st,a1 as nt,a2 as rt,a3 as Pe,a4 as ea,a5 as ta,a6 as aa,a7 as sa,a8 as it,a9 as na,aa as ra,ab as ot,ac as ia,ad as oa,ae as la,af as lt,ag as da,ah as ca,ai as dt,aj as me,ak as ua,al as ke,am as xa,an as X,ao as Q,ap as ma,aq as ha,ar as pa,as as ga,at as ya,au as $e,av as Ee,aw as fa,ax as ja,ay as va,az as wa,aA as ba,aB as ka,aC as Ca,aD as Na,aE as Sa,aF as Re,aG as _a,aH as Aa,aI as Ta,aJ as Ia,aK as La,aL as Pa,aM as $a,aN as Ea,aO as Ra,aP as za,aQ as Oa}from"./vendor-5f4444f9.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const Da="modulepreload",Ba=function(t){return"/"+t},ze={},v=function(a,s,r){if(!s||s.length===0)return a();const n=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=Ba(i),i in ze)return;ze[i]=!0;const l=i.endsWith(".css"),x=l?'[rel="stylesheet"]':"";if(!!r)for(let y=n.length-1;y>=0;y--){const j=n[y];if(j.href===i&&(!l||j.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${x}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":Da,l||(m.as="script",m.crossOrigin=""),m.href=i,document.head.appendChild(m),l)return new Promise((y,j)=>{m.addEventListener("load",y),m.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>a()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})},T=()=>{const t=localStorage.getItem("token");if(t)return JSON.parse(t||"")},M=()=>Nt(),A=St,d=Je.create({baseURL:"https://node-6-jbbj.onrender.com/api"}),Fa=Je.create({baseURL:"https://node-6-jbbj.onrender.com/api"}),H=T(),Va=async t=>await d.post("/signup",t),Ma=async t=>await d.post("/signin",t),ct=async()=>await d.get("user"),Ua=async t=>await d.get("user_one/"+t),Ha=async t=>await d.delete("removeUser/"+t+`/${H.user._id}`,{headers:{Authorization:`Bearer ${H.token}`}}),qa=async t=>await d.put(`user/${t._id}/${H.user._id}`,t,{headers:{Authorization:`Bearer ${H.token}`}}),Wa=async t=>await d.post("user/creating",t),Ga=async t=>await d.get(`user/cart/${t}`),Ya=async(t,a)=>await d.post(`/user/upload/${t}`,a,{headers:{Authorization:`Bearer ${H.token}`}}),Ja=async t=>await d.post("/forgot-password",t),Ka=async(t,a,s)=>await d.post(`/reset-password/${t}/${a}`,s),Xa=async t=>await d.post("/refreshToken",t),se=T(),Qa=async()=>await d.get("/cart"),Za=async t=>await d.post(`/cart/${se.user._id}`,t,{headers:{Authorization:`Bearer ${se.token}`}}),es=async(t,a)=>await d.post(`/cart/${t}/${se.user._id}`,a,{headers:{Authorization:`Bearer ${se.token}`}}),Oe=p("cartSlice",async()=>{const{data:t}=await Qa();return t}),he=p("addCartSlice",async t=>{const{data:a}=await Za(t);return a}),ts=p("deleteCartSlice",async t=>{const{data:a,status:s}=await es(t.id,t);return a.data}),De=p("user/login",async t=>{const{data:a}=await Va(t);return a}),ce=p("user/signin",async t=>{const{data:a,status:s}=await Ma(t);return a}),as=p("user/getAll",async()=>{const{data:t}=await ct();return t.filter(s=>s.role==0)}),pe=p("user/getUser_id",async t=>{const{data:a}=await Ua(t);return a}),ss=p("admin/getAdmin",async()=>{const{data:t}=await ct();return t.filter(s=>s.role>=1)}),Be=p("user/deteleUser",async t=>{const{data:a}=await Ha(t);return a}),ns=p("edit/editUser",async t=>{const{data:a}=await qa(t);return a}),rs=p("user/importXlsx",async t=>{const{data:a}=await Wa(t);return a}),Fe=p("findcart",async t=>{const{data:a}=await Ga(t);return a.cart}),Ve=p("uploadImage",async({id:t,formData:a})=>{const{data:s,status:r}=await Ya(t,a);return s}),ut=F({name:"user",initialState:{value:[],cartUser:[],isLoading:!1,error:!1,login:{},isLogin:localStorage.getItem("isLogin")==="true",user:{}},reducers:{logout(t){localStorage.removeItem("token"),V.success("Logout successful!"),t.isLogin=!1,localStorage.setItem("isLogin","false"),t.user={}}},extraReducers:t=>{t.addCase(De.fulfilled,(a,s)=>{a.error=!1,a.value=s.payload.newUser}).addCase(De.rejected,(a,s)=>{a.error=!0}),t.addCase(ce.pending,(a,s)=>{a.isLoading=!0}).addCase(ce.fulfilled,(a,s)=>{localStorage.setItem("token",JSON.stringify(s.payload)),a.login=s.payload,a.error=!1,a.isLogin=!0,a.isLoading=!1,a.user=s.payload.user,localStorage.setItem("isLogin","true")}).addCase(ce.rejected,(a,s)=>{a.error=s.payload,a.isLoading=!1}),t.addCase(as.fulfilled,(a,s)=>{a.value=s.payload}),t.addCase(Be.fulfilled,(a,s)=>{a.value=a.value.filter(r=>r._id!==s.payload._id)}).addCase(Be.rejected,(a,s)=>{}),t.addCase(ss.fulfilled,(a,s)=>{a.value=s.payload}),t.addCase(ns.fulfilled,(a,s)=>{a.value.push(s.payload)}),t.addCase(rs.fulfilled,(a,s)=>{a.value.unshift(s.payload)}),t.addCase(Fe.pending,(a,s)=>{a.isLoading=!0}).addCase(Fe.fulfilled,(a,s)=>{a.isLoading=!1,a.cartUser=s.payload}),t.addCase(pe.fulfilled,(a,s)=>{a.user=s.payload,a.isLoading=!1}).addCase(pe.pending,(a,s)=>{a.isLoading=!0}),t.addCase(Ve.fulfilled,(a,s)=>{a.isLoading=!1,a.user=s.payload.data}).addCase(Ve.pending,(a,s)=>{a.isLoading=!0}),t.addCase(ts.fulfilled,(a,s)=>{const r=a.user.cart.filter(n=>n.product._id!==s.payload.product);a.user.cart=r})}}),{logout:is}=ut.actions,os=ut.reducer,Z=T(),$=o.createContext(null),ls=t=>{const a=M(),{user:s}=A(j=>j.user),r=localStorage.getItem("isLogin"),n=A(j=>j.user.isLogin),[i,l]=o.useState(!1),[x,u]=o.useState(!1),m=()=>{u(!x)};o.useEffect(()=>{Z&&a(pe(Z.user._id))},[n,a,i]);const y={Auth:Z||"",user:s,isLoggedIn:r,isLoggedInState:n,setReset:l,handleClick:m,state:x};return e.jsx($.Provider,{value:y,children:t.children})},b=o.memo(({level:t,children:a,...s})=>e.jsx(_t,{...s,children:a})),ne=({color:t,children:a,...s})=>e.jsx(At,{color:t,...s,children:a}),ds=c.div`
height: 100vh;
`,xt=c.div`
position: relative;
height: 100vh;
justify-content: center;
display: flex;
&>*{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
`,mt=()=>e.jsx(ds,{}),cs=()=>{const{state:t}=o.useContext($)??{};return e.jsx(Tt,{className:t?"w-11/12":"w-10/12",active:!0,title:{width:"20%"},paragraph:{rows:8,width:[300,200,400,100]},loading:!0,style:{height:"100vh",padding:"0 30px"}})},us=()=>e.jsx(xt,{children:e.jsx(b,{type:"danger",children:"Lỗi rồi kiểm tra lại mạng của bạn hoặc tải lại trang..."})}),ht=({size:t,children:a})=>e.jsx(xt,{className:"w-full",children:e.jsxs("div",{role:"status",children:[e.jsxs("svg",{className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]})}),pt=()=>e.jsx(ne,{color:"#108ee9",className:"mx-2",children:"Empty"}),gt=()=>e.jsx("p",{className:"text-white",children:"Trống!"}),xs=async t=>await d.get(t),L=t=>{const{data:a,error:s,mutate:r}=It(t,xs);return{data:a?a.data:"",isLoading:!a&&!s,isError:s,mutate:r}},P="https://node-6-jbbj.onrender.com/api",ms=(t,a)=>{t(is()),a("/")},w=({to:t,children:a,...s})=>e.jsx(Ke,{to:t,...s,className:"link",children:a}),re=o.memo(({textColor:t,orientation:a,children:s,...r})=>e.jsx(Lt,{style:{color:t,borderBlockStartColor:"#999"},className:"text-white",orientation:a,...r,children:s})),U=({src:t,alt:a,style:s,...r})=>e.jsx("img",{loading:"lazy",src:t,className:"m-5 w-full h-full",style:s,alt:a,...r}),E=(t,a)=>{const s=a?a.split("/"):null,r=s==null?void 0:s.indexOf("upload");return r!==-1&&(s==null||s.splice(r+1,0,`w_${t}/f_webp`)),s==null?void 0:s.join("/")},hs=c.div`
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius:10px;
}
::-webkit-scrollbar {
  width: 2px;
}
`,ps=c.div`
background: rgb(28, 28, 30);
border-radius: 10px;
margin: 5px 0px;
`,gs=()=>{const{data:{data:t}}=L("/category/filters");return e.jsxs("div",{className:"rounded des w-3/12 relative overflow-hidden lg:block md:hidden hidden bg-[#0000005e]",children:[e.jsx(re,{className:"m-0",textColor:"#fff",orientation:"left",children:"Xem thêm"}),e.jsx(hs,{className:"absolute h-full w-full px-2 overflow-scroll",children:t&&(t==null?void 0:t.map((a,s)=>e.jsxs(ps,{className:"flex lg:gap-1 my-2 py-2",children:[e.jsx("div",{className:"w-3/12",children:e.jsx(w,{to:"/q/"+a._id,children:e.jsx(U,{className:"m-0 h-full",src:E(100,a.linkImg),alt:a.name})},s)}),e.jsxs("div",{className:"w-9/12",children:[e.jsx(w,{style:{textDecoration:"none",color:"#999",fontSize:"13px"},to:"/q/"+a._id,children:a.name},s),e.jsxs(ne,{color:"#108ee9",className:"text-[12px] text-[#999] my-2 block w-6/12 ",children:[" ",a.sumSeri+" Tập VietSub"]}),e.jsx(ne,{color:"#2db7f5",children:a.type?a.type:"null"}),e.jsx("div",{className:"text-sm text-gray-400 mt-2",children:e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(b,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(b,{className:"mr-2 text-gray-300",children:a.typecm}),e.jsxs(b,{className:"text-gray-400 text-sm",children:["(",a.time,")"]})]})})]})]},s)))})]})},yt=({content:t,settings:a})=>e.jsx(Pt,{...a,children:t}),Ai=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],ys=[e.jsx(Xe,{}),e.jsx($t,{}),e.jsx(Qe,{}),e.jsx(Et,{}),e.jsx(Rt,{}),e.jsx(zt,{}),e.jsx(Ot,{}),e.jsx(Dt,{}),e.jsx(Bt,{})],Ti=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Action",dataIndex:"action",key:"action"}],Ii=[{title:"Url",dataIndex:"url",key:"url"},{title:"Image",dataIndex:"image",key:"image"},{title:"Action",dataIndex:"action",key:"action"}],Li=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Path",dataIndex:"path",key:"path"},{title:"Product",dataIndex:"product",key:"product"},{title:"Categorymain",dataIndex:"categorymain",key:"categorymain"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"},{title:"Checked",dataIndex:"checked",key:"checked"}],Pi=[{title:"Stt",dataIndex:"stt",key:"stt",width:50},{title:"Name",dataIndex:"name",key:"name",width:150},{title:"Image",dataIndex:"image",key:"Image",width:150},{title:"Duration",dataIndex:"duration",key:"duration",width:50},{title:"isActive",dataIndex:"isActive",key:"isActive",width:50},{title:"Year",dataIndex:"year",key:"year",width:50},{title:"Set",dataIndex:"set",key:"set",width:50},{title:"Week",dataIndex:"week",key:"week",width:50},{title:"Action",dataIndex:"action",key:"action",width:100}],$i=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Product",dataIndex:"product",key:"product"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Day",dataIndex:"day",key:"day"},{title:"Action",dataIndex:"action",key:"action"}],Ei=[{title:"Id",dataIndex:"_id",key:"_id"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],Ri=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Image",dataIndex:"image",key:"image"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"}],zi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Role",dataIndex:"role",key:"role"},{title:"Status",dataIndex:"status",key:"status"},{title:"Image",dataIndex:"image",key:"image"}],Oi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Image",dataIndex:"image",key:"image"},{title:"Status",dataIndex:"status",key:"status"},{title:"Role",dataIndex:"role",key:"role"},{title:"Action",key:"action",dataIndex:"action",with:150}],fs=[{title:"Name",dataIndex:"name",key:"name"},{title:"Action",dataIndex:"action",key:"action"}],js={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},vs={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:3,responsive:[{breakpoint:1440,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}}]},O=T(),ws=async t=>await d.post(`/week/${O.user._id}`,t,{headers:{Authorization:`Bearer ${O.token}`}}),bs=async t=>await d.delete(`/week/${t}/${O.user._id}`,{headers:{Authorization:`Bearer ${O.token}`}}),ks=async t=>await d.get(`/week?w=${t}`),Cs=async(t,a)=>await d.post(`/week/category/${t}/${O.user._id}`,a,{headers:{Authorization:`Bearer ${O.token}`}}),W=o.createContext(null),Ns=t=>{const[a,s]=o.useState(1),{data:r}=L(P+"/weeks"),{data:n}=L(P+"/background"),{data:i,isLoading:l}=L(P+"/types"),x={seri:i,loadingSeri:l,background:n,weeks:r,setPage:s,page:a};return e.jsx(W.Provider,{value:x,children:t.children})},D=o.memo(({level:t,children:a,...s})=>e.jsx(Ft,{level:t,...s,children:a})),ge=o.memo(({title:t,link:a,image:s,sumSeri:r,time:n,typecm:i,year:l,products:x})=>{const u=x?x[x.length-1]:"";return e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"relative group",children:e.jsxs(w,{to:a,className:"block",children:[e.jsx("div",{className:"relative w-full h-[200px] md:h-[250px] lg:h-[320px]",children:e.jsx(U,{src:E(300,s),alt:t,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-2 py-1 font-medium",children:u?`Tập ${u.seri}`:e.jsx(gt,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(Ze,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4",children:e.jsx(w,{to:a,children:e.jsx(D,{level:5,style:{color:"#fff"},className:"text-xl md:text-2xl lg:text-3xl font-bold",children:t})})}),e.jsxs("div",{className:"text-sm text-gray-400 mt-2",children:[e.jsx("div",{className:"font-semibold",children:r?`${r} Tập`:""}),e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(b,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(b,{className:"mr-2 text-gray-300",children:i}),e.jsxs(b,{className:"text-gray-400 text-sm",children:["(",n,")"]})]}),e.jsx("div",{className:"font-semibold mt-2",children:l?`${l}`:""})]})]})});function Ss(){var j;const{weeks:t}=o.useContext(W)||{},a=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],r=new Date().getDay(),[n,i]=o.useState(!0),[l,x]=o.useState(a[r]),[u,m]=o.useState([]),y=f=>{x(f)};return o.useEffect(()=>{const f=async()=>{const{data:C}=await ks(l);m(C),i(!1)};i(!0),f()},[l]),e.jsxs("div",{className:"container mx-auto my-10",children:[e.jsx("div",{className:"px-4 lg:px-[150px] md:px-[100px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0",children:t&&t.map(f=>e.jsx("div",{className:l===f.name?"active border-none":"cursor-pointer",onClick:()=>y(f.name),children:e.jsx("div",{className:"text-[11px] md:text-[12px] lg:text-[14px] flex justify-center items-center px-4 py-2 text-white rounded-lg w-full",children:e.jsx("p",{children:f.name})})},f._id))}),e.jsx("div",{className:"my-5 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full",children:n?e.jsx(mt,{}):e.jsx(yt,{settings:js,content:(j=u==null?void 0:u.content)==null?void 0:j.map(f=>e.jsx("div",{className:"px-2",children:e.jsx(ge,{title:f.name,link:"/q/"+f._id,image:f.linkImg,time:f.time,sumSeri:f.sumSeri,products:f.products})},f._id))})})]})}const _=o.memo(({gutter:t,justify:a,align:s,children:r,...n})=>e.jsx(Vt,{gutter:t,justify:a,align:s,...n,children:r})),g=({children:t,...a})=>e.jsx(Mt,{...a,children:t}),_s=o.memo(({type:t,gutter:a,child:s,...r})=>e.jsx(_,{gutter:a,children:t==="category"?s&&s.length&&s.map((n,i)=>e.jsx(g,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(ge,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,year:n.year,sumSeri:n.sumSeri,products:n.products})},n._id)):s&&s.length?s.map((n,i)=>e.jsx(g,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(ge,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,sumSeri:n.sumSeri})},n._id)):e.jsx(pt,{})})),B=T(),As=async t=>await d.get(`/categorys?page=${t}`),Ts=async t=>await d.get(`/category/${t}`),Is=async t=>await d.post(`/category/${B.user._id}`,t,{headers:{Authorization:`Bearer ${B.token}`}}),Ls=async t=>await d.delete(`/category/${t}/${B.user._id}`,{headers:{Authorization:`Bearer ${B.token}`}}),Ps=async t=>await d.post(`/category/${t.get("_id")}/${B.user._id}`,t,{headers:{Authorization:`Bearer ${B.token}`}}),$s=async t=>await d.get("/category/getAllCategoryNotRequest/"+t),Es=async t=>await d.get(`/categorys/search?value=${t}`),Rs=async(t,a)=>await d.post("/rating/"+t,a),zs=async t=>await d.post("/category/changeLatest",t),ee=p("category/getAllcate",async t=>{const{data:a}=await As(t);return a}),ye=p("category/getOne",async t=>{const{data:a}=await Ts(t);return a}),Me=p("getAll/Category",async t=>{const{data:a}=await $s(t);return a}),Os=p("add/Addcate",async t=>{const{data:a}=await Is(t);return a}),Ds=p("delete/DeleteCate",async t=>{const{data:a}=await Ls(t);return a}),Bs=p("update/Category",async t=>{const{data:a}=await Ps(t);return a}),ft=()=>{const{data:t}=A(r=>r.category.category),a=A(r=>r.category.isLoading);A(r=>r.category.isError);const s=M();return o.useEffect(()=>{s(ee(1))},[]),a?e.jsx("div",{className:"seriLoading",children:"Loading..."}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(D,{level:2,underline:!0,style:{color:"#fff"},strong:!0,className:"uppercase",children:"Xem Nhiều"}),e.jsx(w,{to:"/loadmore","aria-label":"Tải thêm nội dung",children:e.jsxs("div",{className:"text-[16px] text-[#fff] flex lg:text-[20px] md:text[18px] gap-3",children:[e.jsx("span",{className:"underline",children:"See More"}),e.jsx("span",{children:e.jsx(Ut,{title:"Tải thêm nội dung..."})})]})})]}),e.jsx(_s,{type:"category",gutter:[16,16],child:t})]})},Fs=()=>{const{data:{data:t}}=L(P+"/category/latest");return e.jsxs("div",{children:[e.jsx("h2",{className:"text-white category text-md md:text-md pl-2 mb-2 mx-2 my-3 border-l-4  font-sans font-bold border-teal-400 dark:text-gray-200",children:"Mới Cập Nhật"}),e.jsx(yt,{settings:vs,content:t&&t.map((a,s)=>{const r=a.products[a.products.length-1];return e.jsx("div",{className:"px-2",children:e.jsxs("div",{className:"w-full flex flex-col items-center",children:[e.jsx("div",{className:"relative group",children:e.jsxs(w,{to:`/q/${a._id}`,className:"block w-full",children:[e.jsx("div",{className:"relative h-[200px] w-[160px] md:w-[180px] lg:w-[200px]",children:e.jsx(U,{src:E(220,a.linkImg),alt:a.name,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-1 md:px-2 py-1 font-medium",children:r?`Tập ${r.seri}`:e.jsx(gt,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(Ze,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(w,{to:"/q/"+a._id,children:e.jsx("div",{style:{color:"#999"},className:"text-sm md:text-md lg:text-md",children:a.name})})})]})},a._id)})})]})};function jt({children:t}){const[a,s]=o.useState(!1),r=o.useRef(null);return o.useEffect(()=>{const n=new IntersectionObserver(i=>{i[0].isIntersecting&&s(!0)},{threshold:1});return r.current&&n.observe(r.current),()=>{r.current&&n.unobserve(r.current)}},[]),e.jsxs("div",{children:[a&&t,e.jsx("div",{ref:r,style:{height:"1px"}})]})}const Vs=c.video``,Ms=c.div`
  padding-bottom: 60%;
  @media (min-width: 768px) {
    padding-bottom: 50%;
  }
  @media (min-width: 1024px) {
    padding-bottom: 45%;
  }
`,Us=o.memo(()=>{const{data:t,isError:a}=L(P+"/trailer"),{state:s}=o.useContext($);return a?e.jsx(us,{}):e.jsxs("div",{className:s?"p-3":"mt-3",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"lg:w-9/12 md:w-12/12 sm:w-full",children:e.jsxs("div",{className:"h-full",children:[e.jsx(Ms,{className:"relative md:mx-2",children:e.jsx(Vs,{className:"h-full absolute bg-black rounded",width:"100%",loop:!0,muted:!0,autoPlay:!0,controls:!0,src:t==null?void 0:t.url})}),e.jsx(Fs,{})]})}),e.jsx(gs,{})]}),e.jsx(Ss,{}),e.jsx(jt,{children:e.jsx(ft,{})})]})}),Ce=({ogTitle:t,description:a,imageUrl:s,mainTitle:r,title:n,...i})=>e.jsxs(Ht,{children:[e.jsx("title",{children:n}),e.jsx("meta",{property:"og:title",content:t}),e.jsx("meta",{property:"og:description",content:a}),e.jsx("meta",{property:"og:image",content:s}),Object.keys(i).map(l=>e.jsx("meta",{...i[l]},l))]}),Hs=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ce,{ogTitle:"Hoạt Hình Trung Quốc",description:"Đấu Phá Thương Khung Phần 5",imageUrl:E(200,"https://res.cloudinary.com/daz3lejjo/image/upload/w_100/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),title:"Hoạt Hình 3D"}),e.jsx(Us,{})]}),k=T(),qs=async t=>await d.get(`products?page=${t}`),Ws=async t=>await d.get(`product/${t}`),Gs=async t=>await d.delete(`/product/${t}/${k.user._id}`,{headers:{Authorization:`Bearer ${k.token}`}}),Ys=async t=>await d.post(`/product/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Js=async t=>await d.put(`/product/${t.get("_id")}/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Ks=async t=>await d.post("/products/creating",t,{}),Di=async t=>await d.post(`/products/deleteMultiple/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Xs=async t=>await d.get(`/category/products/${t}`),Bi=async(t,a)=>await d.post(`/product/pushlist/${t}/${k.user._id}`,a,{headers:{Authorization:`Bearer ${k.token}`}}),Fi=async(t,a)=>await Fa.post(`/product/abyss/${t}/${k.user._id}`,a,{headers:{Authorization:`Bearer ${k.token}`}}),Vi=async t=>await d.post(`/product/approve/${t}/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Mi=async t=>await d.post(`/product/approve/cancel/${t}/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Qs=async t=>await d.get(`/product/filter?c=${t}`),Zs=async t=>await d.get(`/product/v?name=${t}`),Ui=async()=>await d.post(`/products/clear/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Ue=p("product/getProducts",async t=>{const{data:a}=await qs(t);return a}),fe=p("product/getProduct",async t=>{const{data:a}=await Ws(t);return a}),en=p("product/deleteProduct",async t=>{const{data:a}=await Gs(t);return a}),tn=p("product/addProduct",async t=>{const{data:a,status:s}=await Ys(t);return a}),an=p("product/editProduct",async t=>{const{data:a}=await Js(t);return a}),sn=p("product/importDataFile",async t=>{const{data:a}=await Ks(t);return a}),vt=p("product/getAllProductDataByCategory",async t=>{const{data:a}=await Xs(t);return a}),nn=p("product/filter",async t=>{const{data:a}=await Qs(t);return a}),rn=p("product/Search",async t=>{const{data:a}=await Zs(t);return a}),on=t=>t.product.getOneProduct,ln=t=>t.product.getAllProductByCategory,Hi=t=>t.category.category,dn=t=>t.user.value,qi=t=>t.user.value,cn=c.button`
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
`,He=c.button`
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
`,un=o.memo(({seriProduct:t})=>e.jsx(_,{gutter:14,items:"center",children:t.map((a,s)=>a.isApproved==!0?e.jsx(g,{xl:3,lg:3,md:4,sm:4,xs:6,className:"mt-2",children:e.jsx(we,{className:({isActive:r,isPending:n})=>r?"activeSeri":"",to:"/d/"+a._id+`?c=${a.category}`,children:e.jsx(cn,{className:a.seri&&"w-full",children:a.seri&&"Tập "+a.seri})})},s):"")})),I=o.memo(({children:t,...a})=>e.jsx(qt,{...a,children:t})),G=t=>V.success(t),wt=t=>V.warning(t),z=t=>V.error(t),xn=({item:t,id:a})=>{var y;const s=M(),{Auth:r,user:n,isLoggedInState:i}=o.useContext($),[l,x]=o.useState(!1),u={user:r?r.user._id:"",product:a};o.useEffect(()=>{var f,C;const j=(f=n==null?void 0:n.cart)==null?void 0:f.find(N=>N.product._id===a);x(((C=j==null?void 0:j.product)==null?void 0:C._id)===a)},[n.cart,a]);const m=()=>{!r&&i==!1?z("Bạn cần đăng nhập!"):l?wt("Đã tồn tại trong yêu thích!"):(s(he(u)),x(!0),G("Thêm vào danh sách yêu thích thành công!"))};return e.jsxs("div",{className:"lg:flex md:flex-row items-center @screen md:justify-between flex flex-col",children:[e.jsx(w,{to:"/q/"+((y=t==null?void 0:t.category)==null?void 0:y._id),className:"text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(D,{level:4,style:{color:"#fff"},className:"uppercase",children:t.name})}),e.jsx(I,{style:{color:"#fff"},icon:e.jsx(te,{}),disabled:l,className:"flex items-center justify-center",onClick:()=>m(),children:l?"Đã yêu thích":"Thêm vào yêu thích"})]})},mn=({getOneProductDetail:t})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{color:"#fff",margin:"10px 0"},children:t.seri?t.trailer?"Trailer "+t.seri:"Tập "+t.seri:""}),e.jsx("div",{className:"des text-[#999]",children:e.jsxs("p",{children:["Ngày đăng:"," ",Wt(t.uploadDate).format("LTS DD-MM-YYYY")]})}),e.jsx("div",{style:{color:"#fff",margin:"10px 0"},className:"des",children:e.jsxs("div",{className:"text-[#999] flex items-center gap-2 lg:justify-start @screen justify-center",children:[e.jsx(Gt,{}),t.view*36," Lượt xem"]})}),e.jsxs("div",{className:"p-3 mt-3 mb-3 text-white rounded  flex items-center lg:justify-start @screen justify-center",style:{background:"rgb(0 0 0 / 47%)"},children:["Copyright video:",e.jsx("div",{className:"text-slate-400",children:" "+t.copyright})]})]}),hn=c.div`
display:flex;
gap:0 10px;

@media(max-width:768px){
  display:block;
}
@media(min-width:1024px){
  display:flex;
}
`,pn=c.div`
`,gn=c.div`
font-size:13px;
@media(min-width: 1024px){
  font-size:15px;
}
`,yn=c.div`
padding:5px;
@media(min-width: 1024px){
  padding: 15px;
}
`,fn=c.div`
padding-bottom:62%;

@media(min-width: 768px){
  padding-bottom:52%;
}

@media(min-width: 1024px){
  padding-bottom:42%;
}
`,jn=c.div`
 
`,vn=t=>t.product.isLoading,wn=()=>{var C,N,R,Y,J;const t=A(ln),a=A(on),s=A(vn),[r,n]=o.useState(""),{id:i}=be(),{c:l}=Yt.parse(window.location.href.split("?")[1]),[x,u]=o.useState("dailyMotion"),m=M(),[y,j]=o.useState(""),f=et();return o.useEffect(()=>{window.scrollTo(0,0)},[f]),o.useEffect(()=>{m(fe(i)),m(vt(l));const K=Te.AES.decrypt(a.dailyMotionServer?a.dailyMotionServer:"","24062003").toString(Te.enc.Utf8);j(K),n(K)},[i,a.dailyMotionServer]),e.jsxs(e.Fragment,{children:[e.jsx(Ce,{ogTitle:a==null?void 0:a.name,description:(C=a.category)==null?void 0:C.des,imageUrl:(N=a.category)==null?void 0:N.linkImg}),e.jsx("div",{className:"flex justify-center mt-4",style:{gap:"10px"},children:e.jsx(yn,{className:"col-md-12",children:a&&(s?e.jsx(ht,{size:"large",children:void 0}):e.jsxs(e.Fragment,{children:[e.jsx(fn,{className:"d-flex justify-content-center relative",children:a.dailyMotionServer!==""&&a.server2!==""?e.jsx("iframe",{allowFullScreen:!0,title:"vimeo-player",className:"absolute",src:r,style:{width:"100%",height:"100%"}}):a.trailer!==""?e.jsx("iframe",{title:"vimeo-player",className:"absolute",style:{width:"100%",height:"100%"},src:a.trailer+"?autoplay=1&mute=1"}):e.jsx(Jt,{icon:"Hiiiii!!",className:"absolute inset-0 text-white mt-5",subTitle:"Phim này đang trong quá trình cập nhật video. Vui lòng quay lại sau."})}),e.jsxs(jn,{className:"mt-4 rounded",children:[e.jsx(re,{textColor:"#fff",orientation:"center",className:"text-white md:text-sm lg:text-base text-sm underline",children:"Chọn server:"}),e.jsxs("div",{className:"md:text-sm lg:text-base text-sm flex items-center justify-center gap-4 px-4 py-3",children:[e.jsx(I,{disabled:a.link==="",onClick:()=>{u("link1"),n(a.link)},className:`text-white cursor-pointer ${x==="link1"?"activeServer":""}`,children:"#S1"}),e.jsx(I,{onClick:()=>{u("server2"),n(a.server2)},disabled:!a.server2,className:`${a.server2?" text-white cursor-pointer":""} ${x==="server2"?"activeServer":""}`,children:"#S2"}),e.jsx(I,{onClick:()=>{u("dailyMotion"),n(y)},disabled:!a.dailyMotionServer,className:`${a.dailyMotionServer?"text-white cursor-pointer":""} ${x==="dailyMotion"?"activeServer":""}`,children:"#S3"})]})]}),e.jsxs(hn,{className:"mt-2",children:[e.jsx(pn,{className:"w-3/12",children:e.jsx(U,{className:"md:block hidden",alt:"Ảnh"+((R=a.category)==null?void 0:R.name),src:E(200,a&&(((Y=a.category)==null?void 0:Y.linkImg)||a.image))})}),e.jsxs(gn,{className:"lg:w-9/12 md:w-full text-center lg:text-start",children:[e.jsx(xn,{item:a,id:i}),e.jsx(mn,{getOneProductDetail:a}),e.jsx(un,{seriProduct:t}),e.jsxs("div",{className:"text-[#999] lg:text-md sm:text-sm mt-2 mb-2",children:[e.jsx(re,{textColor:"#fff",orientation:"left",children:"Mô tả:"}),a&&((J=a.category)==null?void 0:J.des)]})]})]})]}))})})]})},bn=()=>e.jsxs(le.Fragment,{children:[e.jsx(o.Suspense,{fallback:e.jsx(cs,{}),children:e.jsx(wn,{})}),e.jsx(jt,{children:e.jsx(ft,{})})]}),kn=({data:t,isLoading:a})=>{var s;return a?e.jsx("div",{className:"seriLoading",children:"Loading...."}):e.jsx("div",{className:"bg-[#9b9b9b1f] h-[174px] overflow-y-scroll p-3 rounded-sm seriCategory",children:e.jsx(_,{gutter:[16,16],children:((s=t==null?void 0:t.products)==null?void 0:s.length)>0&&(t!=null&&t.products)?t.products.map((r,n)=>r.isApproved==!0?e.jsx(g,{lg:3,md:4,sm:5,xs:6,style:{textAlign:"center"},children:e.jsx(w,{to:"/d/"+r._id+`?c=${r.category}`,children:!r.dailyMotionServer&&r.trailer?e.jsx(He,{children:r.seri}):e.jsx(He,{className:"w-full text-white",variant:"ghost",size:"sm",children:r.seri})})},n):""):e.jsx(pt,{})})})},Cn=o.memo(({id:t,averageRating:a,totalRatings:s})=>{const r=async n=>{const i={rating:n};try{await Rs(t,i)}catch(l){console.error("Lỗi khi lưu đánh giá:",l)}};return e.jsxs("span",{className:"text-white flex items-center gap-2",children:[e.jsx(Kt,{className:"mt-2 mb-2",value:a,onChange:r}),s>0?e.jsx("div",{className:"relative pt-1",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{children:e.jsxs("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200",children:["Vip ",a.toFixed(2),"/",s*115," Tổng số lượt đánh giá"]})})})}):""]})}),Nn=()=>{const{id:t}=be(),a=M(),s=A(n=>n.category.details),r=A(n=>n.category.isLoading);return o.useEffect(()=>{a(ye(t))},[t]),o.useEffect(()=>{s!=null&&s.name&&(document.title=s.name)},[s]),e.jsxs(e.Fragment,{children:[e.jsx(Ce,{ogTitle:s.name,description:s==null?void 0:s.des,imageUrl:s==null?void 0:s.linkImg}),s&&e.jsx("div",{children:e.jsxs("div",{style:{color:"#fff"},children:[e.jsxs("div",{className:"md:flex lg:flex block gap-2 ",children:[e.jsx("div",{className:"mb-5 lg:w-3/12 md:w-3/12 md:h-full h-52 ",children:e.jsx("div",{className:"h-full w-full flex justify-center ",children:e.jsx(U,{className:"object-contain w-full h-full flex-grow",src:E(300,s.linkImg),alt:s.name})})}),e.jsxs("div",{className:"lg:w-9/12 md:w-9/12",children:[e.jsx("div",{className:"category text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(w,{to:"/q/"+s._id,children:e.jsx(D,{type:"secondary",level:3,className:"md:text-[18px] lg:text-[20px] sm:text-[15px]",style:{textTransform:"capitalize",color:"#fff"},children:s.name})})}),e.jsxs("div",{className:"loai des text-[12px] md:text-[13px] lg:text-[14px]",children:[e.jsx("b",{children:s.anotherName}),e.jsx("br",{}),e.jsx(b,{style:{color:"#999"},children:"Tác giả :..."}),e.jsx("br",{}),e.jsx(b,{style:{color:"#999"},children:"Quốc gia : Chinese"}),e.jsx("div",{children:e.jsxs(b,{style:{color:"#999"},children:["Thể loại :"," ",e.jsx("span",{className:"p-1 bg-gray-500 rounded-sm",children:s.type})]})}),e.jsx("div",{children:e.jsxs(b,{style:{color:"#999"},children:["Tổng Số tập: ",s._id==t?s.sumSeri:""]})}),e.jsx("div",{children:e.jsx(b,{style:{color:"#999"},children:s.time+" "})}),e.jsx("div",{children:e.jsxs(b,{style:{color:"#999"},children:["Năm phát hành : ",s.year]})}),e.jsx("div",{}),e.jsx(ne,{color:"#2db7f5",className:"my-2",children:s.isActive==0?"Đang chiếu":"Hoàn thành"}),e.jsxs("div",{id:"toast-simple",className:"flex mb-2 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800",role:"alert",children:[e.jsx(tt,{}),e.jsx("div",{className:"ps-4 text-sm font-normal",children:"Vietsub lúc 10h00 Thứ 4 hàng tuần"})]})]}),e.jsx(kn,{isLoading:r,data:s}),e.jsx(Cn,{id:t,averageRating:s.averageRating,totalRatings:s.totalRatings})]})]}),e.jsxs("div",{className:"text-[#999] lg:text-[15px] md:text[14px] text-[13px]",children:[e.jsx(re,{textColor:"#fff",orientation:"left",children:"NỘI DUNG PHIM"}),s.des]})]})},s._id)]})},Sn=()=>e.jsx(e.Fragment,{children:e.jsx(Nn,{})});const qe=o.memo(({title:t,src:a,size:s,...r})=>e.jsx("div",{title:t,style:{cursor:"pointer"},children:e.jsx(Xt,{size:s,color:"default",src:a,...r})})),je=({isLoggedInState:t,style:a})=>{var l,x,u,m,y;const s=T(),r=q(),n=M(),i=()=>{s?r("/cart/user"):z("Bạn cần đăng nhập!")};return e.jsx(le.Fragment,{children:s&&t?e.jsx(Ie,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx(Le,{content:e.jsxs(e.Fragment,{children:[e.jsx(w,{to:"/profile",children:e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:12,children:[e.jsx(g,{children:e.jsx(Qt,{})}),e.jsx(g,{children:e.jsx(b,{level:6,className:"auth",children:"Your profile"})})]})}),e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(te,{})}),e.jsx(g,{children:e.jsx(b,{style:{cursor:"pointer"},onClick:i,className:"auth",children:"Saved"})})]}),s.user&&((l=s==null?void 0:s.user)==null?void 0:l.role)>=1&&e.jsx(w,{to:"/dashboard",children:e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(ae,{})}),e.jsx(g,{children:e.jsx(b,{className:"auth",children:"Admin"})})]})}),e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(at,{})}),e.jsx(g,{children:e.jsx(b,{style:{cursor:"pointer"},onClick:()=>ms(n,r),children:"Logout"})})]})]}),title:e.jsx(D,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:(x=s==null?void 0:s.user)==null?void 0:x.username}),placement:"bottomLeft",trigger:"click",children:e.jsx(qe,{className:"text-center",title:(u=s==null?void 0:s.user)==null?void 0:u.name,src:E(50,s.user&&((m=s==null?void 0:s.user)==null?void 0:m.image)),size:"sm"})})}):e.jsx(Ie,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx(Le,{content:e.jsx(w,{to:"/signin",children:e.jsxs(_,{align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(Zt,{})}),e.jsx(g,{children:e.jsx(b,{level:6,className:"auth",children:"Signin"})})]})}),title:e.jsx(D,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:"Hi"}),placement:"bottomLeft",trigger:"click",children:e.jsx(qe,{title:(y=s==null?void 0:s.user)==null?void 0:y.name,src:void 0,style:a,size:40,icon:e.jsx(ae,{})})})})})},{Content:_n,Sider:An,Header:Tn,Footer:In}=ue,Ln=()=>{const t=ei.map((n,i)=>{var x;const l=String(i+1);return{key:`${l+1}`,icon:n.icon,label:e.jsx(w,{to:n.path,children:n.name}),children:(x=n==null?void 0:n.children)==null?void 0:x.map((u,m)=>{const y=m+1;return{key:`subitem-${l}-${y}`,icon:u.icon,label:e.jsx(w,{to:u.path,children:u.name})}})}}),{isLoggedInState:a}=o.useContext($)??{},[s,r]=o.useState(!1);return e.jsxs(ue,{style:{minHeight:"100vh"},children:[e.jsxs(An,{trigger:null,collapsible:!0,collapsed:s,className:"custom-sider overflow-y-auto",style:{height:"100%",position:"fixed"},children:[e.jsx("div",{className:"p-4 bg-[#fff]",children:e.jsx("div",{className:"h-8 w-full bg-[#ddd] rounded"})}),e.jsx(xe,{style:{height:"calc(100% - 56px)",marginTop:"8px"},theme:"light",mode:"inline",defaultSelectedKeys:["1"],items:t})]}),e.jsxs(ue,{style:{marginLeft:s?80:200},children:[e.jsx(Tn,{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",padding:0},children:e.jsxs(_,{align:"middle",justify:"space-between",children:[e.jsx(g,{children:e.jsx(I,{type:"text",icon:s?e.jsx(st,{}):e.jsx(nt,{}),onClick:()=>r(!s),style:{fontSize:"16px",width:64,height:64},children:void 0})}),e.jsx(g,{children:e.jsx(w,{to:"/",children:"Home Page"})}),e.jsx(g,{style:{textAlign:"center"},span:1,children:e.jsx(je,{isLoggedInState:a,style:void 0})})]})}),e.jsx(_n,{style:{padding:"24px",minHeight:"calc(100vh - 64px)",overflow:"auto"},children:e.jsx(rt,{})}),e.jsx(In,{children:"© 2023 copyright | PH ANG"})]})]})},Pn=t=>{const a=T();try{return a?a.user.role==0?e.jsx(Pe,{to:"/"}):t.children:e.jsx(Pe,{to:"/"})}catch{return e.jsx("div",{className:"text-light container text-center",children:e.jsx(w,{to:"/signin",children:"Đăng nhập"})})}},$n=c.div`
color:#999;
font-weight:500;
`,En=c.div`
color: rgb(255, 214, 99);
font-weight:500;
`,Rn=c.div`
display: flex;
align-items: center;
justify-content: center;
gap:0 5px;
 
&>a{
    color: rgb(255, 214, 99) !important;
    font-weight:500;
}
`;c.div`

`;const zn=o.memo(({data:t,icons:a,id:s,background:r,...n})=>e.jsx(xe,{className:"h-full",style:{background:r},children:t&&t.map((i,l)=>o.createElement(xe.Item,{...n,icon:i.icon?i.icon:a[l],key:l},s==!0?e.jsx(we,{to:i.path=="/"?i.path:i.path+`/${i._id}`,children:i.name},l):e.jsx(w,{to:i.path,children:i.name})))})),On=c.div`
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
`;c.img`
  object-fit: cover;
  @media (max-width: 768px) {
    pading: 5px;
  }
`;const Dn=c.div`
  @media (max-width: 768px) {
    display: none;
  }
`,We=c.input`
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
`,Bn=c.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`,Fn=c.div`
  font-size: 11px;
  font-weight: 400;
`,Vn=c.div`
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
`,Mn=c.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
  justify-content: ${t=>t.justify};
`,Un=c.div``,Hn=c.div`
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
`,qn=c.div`
  color: #d9d9d9;
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`,Wn=c.div`
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
`,Gn=c.div`
  display: block;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`,ve=({data:t})=>t.length>0?e.jsx("div",{className:"absolute top-[50px] left-0 w-full flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:e.jsx("div",{className:"p-4 flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700",children:t.map((a,s)=>e.jsx(w,{to:`/q/${a._id}`,children:e.jsx("div",{className:"flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:a.name})},a._id))})}):e.jsx(e.Fragment,{}),Yn=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"})),Jn=[e.jsx(Xe,{}),e.jsx(sa,{}),e.jsx(at,{}),e.jsx(it,{})],Kn=()=>{const{Auth:t,isLoggedInState:a,state:s,handleClick:r}=o.useContext($)??{},[n,i]=o.useState(!1),[l,x]=o.useState(0),[u,m]=o.useState("20px 10px"),[y,j]=o.useState(!1),f="left",[C,N]=o.useState(""),[R,Y]=o.useState([]),J=()=>{j(!0)},K=()=>{j(!1)};window.addEventListener("scroll",()=>{const S=window.pageYOffset;i(l>S),x(S),window.scrollY>10?m("10px 5px"):m("20px 10px")});const Ct=q(),Ne=()=>{t?Ct("/cart/user"):z("Bạn cần đăng nhập!")},Se=ea.debounce(async S=>{const{data:de}=await Es(S);Y(de)},500),_e=async S=>{N(S),Se(S)};o.useEffect(()=>()=>{Se.cancel()},[C]),o.useEffect(()=>{i(!0)},[]);const Ae=a?Qr:Xr;return e.jsxs(le.Fragment,{children:[e.jsxs(_,{align:"middle",justify:"space-between",className:`${s?"w-11/12":"w-10/12"} lg:flex hidden z-[100] fixed right-0`,style:{top:n?"0":"-25%",padding:u,backgroundColor:"#00000038"},children:[e.jsx(g,{span:1,children:e.jsx(Gn,{className:"text-[21px] md:text-[23px] lg:text-[25px]",onClick:r,children:s?e.jsx(nt,{}):e.jsx(st,{})})}),e.jsxs(g,{span:6,className:"relative",children:[e.jsx(We,{style:{boxShadow:"#333 0px 2px 10px"},onChange:S=>_e(S.target.value),placeholder:"Search..."}),e.jsx(ve,{data:R})]}),e.jsx(g,{span:16,children:e.jsxs(_,{justify:"center",align:"middle",children:[e.jsx(_,{children:Ae.map((S,de)=>e.jsx(g,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:e.jsx(w,{style:{color:"#fff",textDecoration:"none",margin:"0 20px"},to:S.path,children:S.name})},de))}),e.jsx(g,{children:e.jsxs(Rn,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:[e.jsx($n,{children:"Liên hệ qc tele: "}),e.jsxs("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:[e.jsx(En,{}),"@PH ANG"]})]})}),e.jsx(g,{className:"ml-5 text-[15px] lg:text-[17px] md:text[16px]",style:{marginLeft:"50px"},onClick:Ne,children:e.jsx(te,{className:"__ text-yellow-500"})})]})}),e.jsx(g,{span:1,className:"text-end",children:e.jsx(je,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",textAlign:"center"}})})]}),e.jsxs("div",{className:"navbar_mb w-10/12 absolute right-0 z-10",children:[e.jsxs(_,{align:"middle",justify:"space-between",className:"navbar bgNav mb",children:[e.jsx(g,{children:e.jsx(ta,{className:"text-white",onClick:J})}),e.jsx(g,{children:e.jsx("div",{className:"ml-5 relative",onClick:Ne,children:e.jsx(te,{className:"__ text-yellow-500"})})}),e.jsxs(g,{span:16,className:"relative",children:[e.jsx(We,{onChange:S=>_e(S.target.value),placeholder:"Search..."}),e.jsx(ve,{data:R})]}),e.jsx(g,{children:e.jsx(je,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",lineHeight:"30px"}})})]}),e.jsx(aa,{width:200,title:"Drawer",placement:"left",closable:!1,onClose:K,open:y,closeIcon:!0,className:"relative z-10",children:e.jsx(zn,{icons:Jn,id:!1,background:"#fff",data:Ae})},f)]})]})},Xn=()=>e.jsx(e.Fragment,{children:e.jsx(le.Fragment,{children:e.jsxs("div",{className:"ft text-white",children:[e.jsx("link",{rel:"stylesheet",integrity:"sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=",crossOrigin:"anonymous"}),e.jsx("footer",{className:"footer",children:e.jsx("div",{className:"footer-bottom footer-border-top light py-3",children:e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"m-0",children:["© 2023 copyright"," ",e.jsx("a",{href:"#",className:"text-reset",children:"| PH ANG"})]})})})})]})})}),Qn=()=>e.jsx("div",{className:"md:mt-[50px] lg:mt-[50px] lg:flex hidden justify-center text-white ",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"card p-3 ",style:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"d-flex justify-center",children:e.jsx("img",{src:E(80,"https://res.cloudinary.com/daz3lejjo/image/upload/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),alt:"Đấu phá thương khung phần 5",className:"avatar-md rounded-circle img-thumbnail"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-size-16 mb-1 mt-1",children:e.jsx(w,{to:"#",className:"text-light",children:"Admin Contact"})}),e.jsx("span",{className:"badge badge-soft-success mb-0",children:"Web Developer"})]})]}),e.jsxs("div",{className:"mt-3 pt-1 iconContact",children:[e.jsxs("p",{className:"mb-0",children:[e.jsx(na,{}),e.jsx("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:"Facebook"})]}),e.jsxs("p",{className:"mb-0 mt-2",children:[e.jsx(ra,{}),e.jsx("a",{href:"https://www.tiktok.com/@tieu_loli",children:"Tiktok"})]})]})]})})})}),Zn=()=>{const{seri:t,loadingSeri:a}=o.useContext(W)||{},{state:s}=o.useContext($)||{},r=s?"w-1/12":"w-2/12";return e.jsx(On,{className:r,children:e.jsxs(Vn,{className:r,children:[e.jsx(Mn,{justify:s?"center":"start",children:e.jsxs(Dn,{className:s?"hiddenn":"block text-white",children:[e.jsx(w,{to:"/",children:e.jsx(Bn,{children:"Hhtrungquoc.tv"})}),e.jsx(w,{to:"/",children:e.jsx(Fn,{children:"tromphim.netify.app"})})]})}),e.jsx("div",{className:"mt-[50px]",children:a?e.jsx(ht,{size:"large",children:void 0}):e.jsx(Un,{className:"sideBarActive",children:t&&t.map((n,i)=>e.jsx(we,{title:n.name,to:n.path=="/"?n.path:n.path+`/${n._id}`,children:e.jsxs(Hn,{state:s,children:[e.jsx(qn,{children:ys[i]}),e.jsx(Wn,{className:s?"hiddenn":"block",children:n.name})]})},i))})}),e.jsx(Qn,{})]})})},er=c.div`
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
`,tr=({children:t,...a})=>{var r;const{background:s}=o.useContext(W)||{};return e.jsx(er,{background:s&&((r=s==null?void 0:s.data)==null?void 0:r.url),...a,children:t})},ar=()=>{const{state:t}=o.useContext($)||{};return e.jsxs(tr,{className:"text-start",children:[e.jsx("div",{children:e.jsx(Kn,{})}),e.jsxs("div",{className:"containers flex",children:[e.jsx("div",{className:t?"w-1/12":"w-2/12",children:e.jsx(Zn,{})}),e.jsx("div",{className:`${t?"w-11/12":"w-10/12"} p-2`,children:e.jsx(rt,{})})]}),e.jsx("div",{children:e.jsx(Xn,{})})]})},h=({children:t})=>e.jsx(o.Suspense,{fallback:e.jsx(mt,{}),children:t});const sr=c(ot)`
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
`,Ge=o.memo(({columns:t,dataSource:a,...s})=>e.jsx(sr,{columns:t,dataSource:a,...s,bordered:!0,size:"middle"})),nr=o.memo(({name:t,label:a,control:s,rules:r,...n})=>e.jsxs("div",{className:"mb-3",children:[e.jsx(b,{htmlFor:t,children:a}),e.jsx(ia,{name:t,control:s,rules:r,defaultValue:"",render:({field:i})=>e.jsx(oa,{placeholder:a,...i,...n})})]})),rr=o.memo(({title:t,cancelText:a,okText:s,onConfirm:r,children:n,...i})=>{const l=()=>{z("Hủy")};return e.jsx(la,{title:t,onCancel:l,onConfirm:r,okText:s,cancelText:a,...i,children:n})}),ir=()=>{const{weeks:t}=o.useContext(W),{handleSubmit:a,control:s}=lt(),r=async(u,m)=>{const y={categoryId:m};try{(await Cs(u,y)).data&&G("Delete Success")}catch{z("Delete Failure")}},n=async u=>{await ws(u)},i=async u=>{await bs(u)},l=u=>{var j;const m=[{title:"ID",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"operation",render:(f,C)=>e.jsx(e.Fragment,{children:e.jsx(rr,{title:"Delete the category",onConfirm:()=>r(u.key,C._id),okText:"Yes",cancelText:"No",children:e.jsx(I,{type:"text",shape:"circle",className:"ml-2",children:e.jsx(da,{})})})})}],y=((j=t.find(f=>f._id===u.key))==null?void 0:j.category)||[];return e.jsx(Ge,{columns:m,dataSource:y,pagination:!1})},x=t&&t.map((u,m)=>({key:u._id,name:u.name,action:e.jsxs(e.Fragment,{children:[e.jsx(w,{to:`/dashboard/week/edit/${u._id}`,children:e.jsx(I,{type:"primary",children:"Edit"})}),e.jsx(I,{onClick:()=>i(u._id),className:"ml-1",children:"Delete"})]})}));return e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:a(n),children:e.jsxs(_,{gutter:4,align:"middle",justify:"center",children:[e.jsx(g,{span:22,children:e.jsx(nr,{name:"name",label:"Theo tuần",control:s,rules:void 0})}),e.jsx(g,{span:2,children:e.jsx(I,{htmlType:"submit",className:"mt-3",type:"primary",children:"Thêm"})})]})}),e.jsx(Ge,{columns:fs,dataSource:x,expandable:{expandedRowRender:l,defaultExpandedRowKeys:["0"]}})]})},or=()=>e.jsxs("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]",children:[e.jsx("h1",{className:"text-9xl font-extrabold text-white tracking-widest",children:"404"}),e.jsx("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute",children:"Page Not Found"}),e.jsx("button",{className:"mt-5",children:e.jsxs("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring",children:[e.jsx("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),e.jsx("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current",children:e.jsx(w,{to:"/",children:"Go Home"})})]})})]}),lr=c.button`
background:linear-gradient(to right, #652EEE, #040F75)
`,dr=c.input`
width: 100%;
padding: 10px;
border-radius: 10px;
background: transparent;
border: 1px solid #999;
font-size: 12px;
outline:none;
color: #fff;
`,cr=c.form``,ur=c.div`
padding: 0 20px;
@media (min-width: 768px){
  padding: 0 40px;
}
@media (min-width: 1024ox) {
  padding: 0 60px;
}
`,xr=c.div`
color: #fff;
margin-top:20px;
font-size:25px;
@media (min-width: 768px){
  margin-top:30px;
}
@media (min-width: 1024ox) {
  margin-top:40px;
`,mr=c.div`
margin: 15px 0;
color: #999;
font-size:13px;
`,hr=c.div`
cursor: pointer;
`,pr=c.div`
padding: 15px 5px;
border: 1px solid #fff;
font-style: italic;
`,gr=c.div`
border-bottom: 1px dashed  #fff;
`,yr=c.div`

`,bt=o.memo(({onSubmit:t,formTitle:a,formDescription:s,submitButtonText:r,formIntro:n,formHeader:i,checkedAccount:l,handleMessage:x,redirect:u,array:m,schemaPage:y})=>{const{register:j,handleSubmit:f,formState:{errors:C}}=lt({resolver:ca(y)});return e.jsx("div",{className:"h-screen relative z-0",children:e.jsxs(ur,{className:"g-6 flex flex-wrap justify-center w-full items-center absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4",style:{transform:"translate(-50%,-50%)"},children:[e.jsxs("div",{className:"w-8/12 items-center text-white hidden lg:block md:hidden",children:[e.jsx(yr,{className:"text-[50px] ",children:i}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(pr,{className:"w-2/12",children:n}),e.jsx(gr,{className:"w-10/12"})]})]}),e.jsxs("div",{className:"md:w-8/12 lg:w-4/12 w-full lg:p-5 md:p-4 p-3",style:{background:"rgba(248, 248, 248, 0.04)",borderRadius:" 5px"},children:[e.jsxs("div",{children:[e.jsx(xr,{children:a}),e.jsx(mr,{children:s})]}),e.jsxs(cr,{onSubmit:f(t),children:[m&&m.map((N,R)=>e.jsx("div",{className:"relative lg:mb-6 md:mb-4 mb-2","data-te-input-wrapper-init":!0,children:e.jsxs("div",{children:[e.jsx(dr,{disabled:N.disable,style:{background:`${N.disable?"#99979742":""}`},type:N.type,...j(`${N.field}`),placeholder:N.field,className:"placeholder:capitalize"}),C&&C[N.field]&&e.jsx("div",{className:"text-sm text-pink-600 mt-1",children:C[N.field].message})]})},R)),e.jsx("div",{className:"lg:mb-6 md:mb-5 mb-4",children:e.jsx(Ke,{to:"/forgot-password",children:e.jsxs("div",{className:"text-center text-white text-sm font-medium text-primary-600 hover:underline text-primary-500",children:["Forgot password?"," "]})})}),e.jsx(lr,{type:"submit",className:"w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600",children:r}),e.jsx("div",{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:e.jsxs("p",{className:"mx-4 mb-0 text-center text-white text-[12px]",children:[" ","OR"]})}),e.jsx(hr,{className:"flex justify-center",onClick:x,children:e.jsx(U,{style:{width:"30px",height:"30px"},src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:""})}),e.jsx("div",{className:"lg:mb-6 md:mb-4 mb-2 text-center lg:mt-5 md:mt-3 mt-2 text-slate-400 ",children:e.jsx(w,{to:u,className:"text-sm text-primary-600 hover:underline text-primary-500",children:l})})]})]})]})})}),fr=[{type:"email",field:"email",disable:!1}],jr=()=>{const t=q(),a=dt().shape({email:me().required().email()}),s=async n=>{const i=await Ja(n);i.data.success?(G(i.data.message),t("/signin")):z(i.data.message)},r=()=>{V.success("Đang cập nhật!")};return e.jsx(bt,{onSubmit:s,formTitle:"Forgot Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:r,redirect:"/forgot-password",array:fr,schemaPage:a})},vr=[{type:"password",field:"password",disable:!1},{type:"password",field:"repassword",disable:!1}],wr=()=>{const t=q(),{id:a,token:s}=be(),r=dt().shape({password:me().required().min(6,"Password tối thiểu 6 kí tự"),repassword:me().required().oneOf([ua("password"),null],"Passwords must match")}),n=async l=>{const x=await Ka(a,s,l);x.data.success?(G(x.data.message),t("/signin")):z(x.data.message)},i=()=>{V.success("Đang cập nhật!")};return e.jsx(bt,{onSubmit:n,formTitle:"Reset Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:i,redirect:"/reset-password",array:vr,schemaPage:r})},br=()=>{const t=["#eb2f96","#52c41a","#eba12f"],{data:{data:a}}=L(P+"/category/latest"),s=[{title:"Name",dataIndex:"name",key:"name",render:i=>e.jsx("p",{children:i})},{title:"Action",key:"action",render:(i,l,x)=>e.jsx(I,{type:"text",shape:"circle",className:"ml-2",onClick:()=>r(l.key),children:e.jsx(ke,{type:"success",style:{color:t[x]}})})}],r=async i=>{const l={id:i},{data:x}=await zs(l);x.success===!0&&(G("Success"),xa(P+"/category/latest"))},n=a&&a.map((i,l)=>({key:i._id,name:i.name}));return e.jsx(ot,{columns:s,dataSource:n})},kr=()=>{const t=A(dn),{data:a}=L(P+"/most-watched-episodes"),{data:s}=L(P+"/rating/stats"),r={data:a.data,xField:"seri",yField:"view",point:{shapeField:"square",sizeField:4},interaction:{tooltip:{marker:!1}},style:{lineWidth:2}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-around gap-2",children:[e.jsx(X,{className:"w-full",children:e.jsx(Q,{title:"Active Users",prefix:e.jsx(ae,{}),value:t.length})}),e.jsx(X,{bordered:!0,className:"w-full",children:e.jsx(Q,{title:"Comment",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:e.jsx(ke,{}),suffix:"%"})}),e.jsx(X,{bordered:!1,className:"w-full",children:e.jsx(Q,{title:"View",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:e.jsx(ma,{}),suffix:"%"})}),e.jsx(X,{className:"w-full",children:e.jsx(Q,{title:"Rating Video",prefix:e.jsx(ha,{}),value:s.totalRatings})})]}),e.jsx("div",{className:"flex justify-between gap-2",children:e.jsx(pa,{className:"w-5/12",...r})})]})},Cr=o.lazy(()=>v(()=>import("./index-5b81fc84.js"),["assets/index-5b81fc84.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css","assets/index-31c42b21.js"])),Nr=o.lazy(()=>v(()=>import("./index-f7b233c8.js"),["assets/index-f7b233c8.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css","assets/index-31c42b21.js","assets/index-df8788fd.js"])),Sr=o.lazy(()=>v(()=>Promise.resolve().then(()=>Yn),void 0)),_r=o.lazy(()=>v(()=>import("./Profile-7c5a16e7.js"),["assets/Profile-7c5a16e7.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Ar=o.lazy(()=>v(()=>import("./Sign-in-099df0fe.js"),["assets/Sign-in-099df0fe.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Tr=o.lazy(()=>v(()=>import("./Sign-up-b61bf29c.js"),["assets/Sign-up-b61bf29c.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Ir=o.lazy(()=>v(()=>import("./list-97a4d7b4.js"),["assets/list-97a4d7b4.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Lr=o.lazy(()=>v(()=>import("./index-a35d6c0a.js"),["assets/index-a35d6c0a.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Pr=o.lazy(()=>v(()=>import("./add-9e1b18f8.js"),["assets/add-9e1b18f8.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),$r=o.lazy(()=>v(()=>import("./edit-abd87b7c.js"),["assets/edit-abd87b7c.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Er=o.lazy(()=>v(()=>import("./admin-2675d9cf.js"),["assets/admin-2675d9cf.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Rr=o.lazy(()=>v(()=>import("./add-3e5618ee.js"),["assets/add-3e5618ee.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css","assets/index-f664c937.js","assets/index-9f9e8a1d.js"])),zr=o.lazy(()=>v(()=>import("./edit-b318477b.js"),["assets/edit-b318477b.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css","assets/index-f664c937.js","assets/index-9f9e8a1d.js"])),Or=o.lazy(()=>v(()=>import("./adds-607e40de.js"),["assets/adds-607e40de.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Dr=o.lazy(()=>v(()=>import("./CreatingProducts-0e84ab9b.js"),["assets/CreatingProducts-0e84ab9b.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css","assets/index-9f9e8a1d.js"])),Br=o.lazy(()=>v(()=>import("./index-ca9d75fa.js"),["assets/index-ca9d75fa.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css","assets/type-3b92be35.js","assets/index-f664c937.js","assets/index-9f9e8a1d.js"])),Fr=o.lazy(()=>v(()=>import("./edit-7b1ea8a3.js"),["assets/edit-7b1ea8a3.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css","assets/index-9f9e8a1d.js","assets/index-f664c937.js"])),Vr=o.lazy(()=>v(()=>import("./index-9a26506b.js"),["assets/index-9a26506b.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Mr=o.lazy(()=>v(()=>import("./edit-7dee7069.js"),["assets/edit-7dee7069.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Ur=o.lazy(()=>v(()=>import("./index-ea5ba9b7.js"),["assets/index-ea5ba9b7.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Hr=o.lazy(()=>v(()=>import("./index-567429b1.js"),["assets/index-567429b1.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),qr=o.lazy(()=>v(()=>import("./index-57da205c.js"),["assets/index-57da205c.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Wr=o.lazy(()=>v(()=>import("./index-c4559da9.js"),["assets/index-c4559da9.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css","assets/index-df8788fd.js","assets/index-31c42b21.js"])),Gr=o.lazy(()=>v(()=>import("./index-7174f01a.js"),["assets/index-7174f01a.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css","assets/type-3b92be35.js"])),Yr=o.lazy(()=>v(()=>import("./CatemainProduct-30c399b8.js"),["assets/CatemainProduct-30c399b8.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Jr=o.lazy(()=>v(()=>import("./index-53e66f1b.js"),["assets/index-53e66f1b.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Kr=o.lazy(()=>v(()=>import("./edit-53bc44b7.js"),["assets/edit-53bc44b7.js","assets/vendor-5f4444f9.js","assets/vendor-20e57f83.css"])),Xr=[{path:"/",name:"Trang chủ",title:"Trang chủ"},{path:"/signin",name:"Đăng nhập",title:"Đăng nhập"},{path:"/signup",name:"Đăng kí",title:"Đăng kí"},{path:"/complete",name:"Hoàn Thành",title:"Hoàn Thành"}],Qr=[{path:"/",name:"Trang chủ"},{path:"/profile",name:"Hồ sơ",title:"Hồ sơ"},{path:"/complete",name:"Hoàn Thành",title:"Hoàn Thành"}],Zr=[{path:"/",element:e.jsx(ar,{}),children:[{path:"/",element:e.jsx(Hs,{}),index:!0},{path:"d/:id",element:e.jsx(h,{children:e.jsx(bn,{})})},{path:"q/:id",element:e.jsx(h,{children:e.jsx(Sn,{})})},{path:"search/category",element:e.jsx(h,{children:e.jsx(Sr,{})})},{path:"cart/user",element:e.jsx(h,{children:e.jsx(Hr,{})})},{path:"movie-content/:id",element:e.jsx(h,{children:e.jsx(Nr,{})})},{path:"types/h/:id",element:e.jsx(h,{children:e.jsx(Cr,{})})},{path:"loadmore",element:e.jsx(h,{children:e.jsx(Wr,{})})},{path:"signup",element:e.jsx(h,{children:e.jsx(Tr,{})})},{path:"signin",element:e.jsx(h,{children:e.jsx(Ar,{})})},{path:"forgot-password",element:e.jsx(h,{children:e.jsx(jr,{})})},{path:"reset-password/:id/:token",element:e.jsx(h,{children:e.jsx(wr,{})})},{path:"profile",element:e.jsx(h,{children:e.jsx(_r,{})})}]},{path:"dashboard",element:e.jsx(Pn,{children:e.jsx(Ln,{})}),children:[{path:"",element:e.jsx(h,{children:e.jsx(kr,{})}),index:!0},{path:"products",element:e.jsx(h,{children:e.jsx(Ir,{})})},{path:"users",element:e.jsx(h,{children:e.jsx(Lr,{})})},{path:"adminUer",element:e.jsx(h,{children:e.jsx(Er,{})})},{path:"users/:id/edit",element:e.jsx(h,{children:e.jsx($r,{})})},{path:"user/add",element:e.jsx(h,{children:e.jsx(Pr,{})})},{path:"user/creatingUser",element:e.jsx(h,{children:e.jsx(Or,{})})},{path:"product/add",element:e.jsx(h,{children:e.jsx(Rr,{})})},{path:"product/edit/:id",element:e.jsx(h,{children:e.jsx(zr,{})})},{path:"product/creacting",element:e.jsx(h,{children:e.jsx(Dr,{})})},{path:"category",element:e.jsx(h,{children:e.jsx(Br,{})})},{path:"category/edit/:id",element:e.jsx(h,{children:e.jsx(Fr,{})})},{path:"category/latest",element:e.jsx(h,{children:e.jsx(br,{})})},{path:"trailing",element:e.jsx(h,{children:e.jsx(Vr,{})})},{path:"trailerUrl/:id",element:e.jsx(h,{children:e.jsx(Mr,{})})},{path:"comments",element:e.jsx(h,{children:e.jsx(Ur,{})})},{path:"cart",element:e.jsx(h,{children:e.jsx(qr,{})})},{path:"types",element:e.jsx(h,{children:e.jsx(Gr,{})})},{path:"types/CateMainProduct/:id",element:e.jsx(h,{children:e.jsx(Yr,{})})},{path:"background",element:e.jsx(h,{children:e.jsx(Jr,{})})},{path:"background/edit/:id",element:e.jsx(h,{children:e.jsx(Kr,{})})},{path:"weeks",element:e.jsx(h,{children:e.jsx(ir,{})})}]},{path:"/*",element:e.jsx(or,{})}],ei=[{path:"/dashboard",name:"Admin",icon:e.jsx(ga,{})},{path:"/dashboard/products",name:"Products",icon:e.jsx(ya,{})},{name:"User",icon:e.jsx($e,{}),children:[{path:"/dashboard/users",name:"Users",icon:e.jsx(ae,{})},{path:"/dashboard/adminUer",name:"Admin",icon:e.jsx(Ee,{})}]},{name:"Category",icon:e.jsx($e,{}),children:[{path:"/dashboard/category",name:"Category",icon:e.jsx(fa,{})},{path:"/dashboard/category/latest",name:"Latest",icon:e.jsx(ke,{})}]},{name:"Themes",icon:e.jsx(it,{}),children:[{path:"/dashboard/trailing",name:"Trailer",icon:e.jsx(Ee,{})},{path:"/dashboard/background",name:"Background",icon:e.jsx(ja,{})}]},{name:"Big Category",icon:e.jsx(Qe,{}),children:[{path:"/dashboard/types",name:"Types",icon:e.jsx(va,{})}]},{path:"/dashboard/comments",name:"Comments",icon:e.jsx(wa,{})},{path:"/dashboard/cart",name:"Cart",icon:e.jsx(ba,{})},{path:"/dashboard/weeks",icon:e.jsx(tt,{}),name:"Week"}],ti=ka`
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

`,Ye=t=>{if(!t)return!0;try{const a=Ca(t),s=Date.now()/1e3;return a.exp<s}catch(a){return console.error("Error decoding token:",a),!0}};function ai(){const t=et(),a="G-0EEY3R7F0S",s=Na(Zr),r=q(),[n,i]=Sa.useNotification(),l=T();return o.useEffect(()=>{Re.initialize(a),Re.send({hitType:"pageview",page:t.pathname,title:"User Active"}),(async()=>{if(l){const x=l.token,u=l.refreshToken;if(Ye(u))wt("Token expires-relogin"),localStorage.clear(),r("/signin");else if(Ye(x)){const m={refreshToken:l.refreshToken},{data:y}=await Xa(m);localStorage.setItem("token",JSON.stringify(y))}}})(),setTimeout(()=>{n.open({message:"Admin Xin Thông Báo!",description:"Xin lỗi, server phim hiện đang quá tải do lượng truy cập lớn. Vui lòng chờ đợi trong 1-2 phút để tiếp tục xem. Chúng tôi đang nỗ lực để cải thiện tình hình và xin thành thật xin lỗi vì sự bất tiện này.Trân trọng!",placement:"topRight"})},2e3)},[]),e.jsxs(e.Fragment,{children:[i,s,e.jsx(ti,{}),e.jsx(_a,{}),e.jsx(Aa.BackTop,{visibilityHeight:200})]})}const si={value:{data:[],totalCount:0,totalPages:0},isLoading:!1,getOneProduct:{},getAllProductByCategory:[],status:!1},ni=F({name:"product",initialState:si,reducers:{},extraReducers:t=>{t.addCase(Ue.pending,(a,s)=>{a.isLoading=!0}).addCase(Ue.fulfilled,(a,s)=>{a.isLoading=!1,a.value=s.payload}),t.addCase(en.fulfilled,(a,s)=>{a.value.data=a.value.data.filter(r=>r._id!==s.payload.data._id)}),t.addCase(tn.fulfilled,(a,s)=>{a.value.data.push(s.payload)}),t.addCase(an.fulfilled,(a,s)=>{a.value.data.push(s.payload)}),t.addCase(sn.fulfilled,(a,s)=>{a.value.data=[...a.value.data,s.payload]}),t.addCase(nn.fulfilled,(a,s)=>{a.value.data=s.payload}),t.addCase(rn.fulfilled,(a,s)=>{a.value.data=s.payload}),t.addCase(fe.pending,(a,s)=>{a.isLoading=!0}).addCase(fe.fulfilled,(a,s)=>{a.isLoading=!1,a.getOneProduct=s.payload}),t.addCase(vt.fulfilled,(a,s)=>{a.getAllProductByCategory=s.payload})}}),ri=ni.reducer,ii={category:{data:[],length:0},isLoading:!1,isError:!1,categoryNotReqId:[],details:{}},oi=F({name:"category",initialState:ii,reducers:{},extraReducers:t=>{t.addCase(ee.fulfilled,(a,s)=>{a.isLoading=!1,a.category=s.payload}).addCase(ee.pending,(a,s)=>{a.isLoading=!0}).addCase(ee.rejected,(a,s)=>{a.isError=!0}),t.addCase(Me.fulfilled,(a,s)=>{a.isLoading=!1,a.categoryNotReqId=s.payload}).addCase(Me.pending,(a,s)=>{a.isLoading=!0}),t.addCase(Os.fulfilled,(a,s)=>{a.category.data=a.category.data.concat(s.payload)}),t.addCase(Ds.fulfilled,(a,s)=>{a.category.data=a.category.data.filter(r=>r._id!==s.payload._id)}),t.addCase(Bs.fulfilled,(a,s)=>{a.category.data.push(s.payload)}),t.addCase(ye.fulfilled,(a,s)=>{a.details=s.payload,a.isLoading=!1}).addCase(ye.pending,(a,s)=>{a.isLoading=!0})}}),li=oi.reducer,Wi=async()=>await d.get("/trailer"),ie=T(),di=async t=>await d.put(`/trailer/${t.get("_id")}/${ie.user._id}`,t,{headers:{Authorization:`Bearer ${ie.token}`}}),Gi=async t=>await d.post(`/background/${t.get("_id")}/${ie.user._id}`,t,{headers:{Authorization:`Bearer ${ie.token}`}}),ci=p("trailer/Trailing",async t=>{const{data:a}=await di(t);return a}),ui=F({name:"post",initialState:{value:[],trailerValues:[]},reducers:{},extraReducers:t=>{t.addCase(ci.fulfilled,(a,s)=>{a.trailerValues.push(s.payload)})}}),xi=ui.reducer,oe=T(),mi=async()=>await d.get("/comments"),hi=async(t,a)=>await d.post(`/comment/${t}/${oe.user._id}`,a,{headers:{Authorization:`Bearer ${oe.token}`}}),pi=async t=>await d.post(`/comment/${oe.user._id}`,t,{headers:{Authorization:`Bearer ${oe.token}`}}),gi=p("getAllCommentSlice",async()=>{const{data:t}=await mi();return t}),yi=p("addCommentSlice",async t=>{const{data:a}=await hi(t.product,t);return a}),fi=p("deleteComment",async t=>{const{data:a}=await pi(t);return a}),ji=F({name:"comment",initialState:{value:[]},reducers:{},extraReducers:t=>{t.addCase(gi.fulfilled,(a,s)=>{a.value=s.payload}),t.addCase(yi.fulfilled,(a,s)=>{a.value.push(s.payload)}),t.addCase(fi.fulfilled,(a,s)=>{a.value=a.value.filter(r=>r._id!==s.payload._id)})}}),vi=ji.reducer,wi=F({name:"cart",initialState:{value:[],isLoading:!1,code:null},reducers:{},extraReducers:t=>{t.addCase(Oe.fulfilled,(a,s)=>{a.isLoading=!1,a.value=s.payload}).addCase(Oe.pending,(a,s)=>{a.isLoading=!0}),t.addCase(he.pending,(a,s)=>{a.isLoading=!0}).addCase(he.fulfilled,(a,s)=>{Array.isArray(a.value)||(a.value=[]),a.isLoading=!1,a.value.push(s.payload.cart)})}}),bi=wi.reducer,ki={key:"root",storage:$a,whitelist:[""],expire:"3600000"},Ci=Ta({product:ri,user:os,category:li,trailer:xi,comment:vi,cart:bi}),Ni=Ia(ki,Ci),kt=La({reducer:Ni,middleware:t=>t({serializableCheck:!1})}),Si=Pa(kt);Ea.createRoot(document.getElementById("root")).render(e.jsx(Ra,{store:kt,children:e.jsx(za,{persistor:Si,children:e.jsx(Ns,{children:e.jsx(ls,{children:e.jsx(Oa,{children:e.jsx(ai,{})})})})})}));export{Fi as $,bt as A,Ui as B,en as C,Vi as D,Mi as E,dn as F,as as G,Oi as H,Be as I,nr as J,pe as K,cs as L,us as M,pt as N,ns as O,qi as P,ss as Q,zi as R,ht as S,ee as T,tn as U,D as V,U as W,E as X,re as Y,fe as Z,an as _,_s as a,rs as a0,sn as a1,Hi as a2,Pi as a3,Os as a4,Ds as a5,ye as a6,Bs as a7,Ts as a8,b as a9,Ei as aa,Wi as ab,ci as ac,gi as ad,$i as ae,fi as af,ts as ag,gt as ah,Oe as ai,Ti as aj,Li as ak,Bi as al,T as am,d as an,Ri as ao,Ii as ap,Gi as aq,P as b,w as c,Ai as d,M as e,$ as f,A as g,ms as h,qe as i,Ve as j,G as k,z as l,ce as m,W as n,Ue as o,ne as p,I as q,De as r,_ as s,g as t,L as u,rr as v,Ge as w,nn as x,rn as y,Di as z};
