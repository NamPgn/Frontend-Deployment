import{u as Nt,a as St,b as Ge,c as p,d as F,m as M,r as o,j as e,T as _t,e as At,s as c,S as Tt,f as It,L as Ye,D as Lt,g as $t,H as Je,B as Pt,A as Ke,R as Et,h as Rt,F as zt,W as Ot,i as Dt,k as Bt,l as Ft,P as Xe,n as Mt,C as Vt,o as Ut,p as Ht,N as je,q as qt,t as Q,v as Wt,E as Gt,w as ve,x as Ze,y as _e,z as Yt,G as ie,I as Jt,J as Qe,K as Kt,M as q,O as Ae,Q as Te,U as Xt,V as ee,X as et,Y as Zt,Z as de,_ as ce,$ as tt,a0 as at,a1 as st,a2 as Ie,a3 as Qt,a4 as ea,a5 as ta,a6 as aa,a7 as nt,a8 as sa,a9 as na,aa as rt,ab as ra,ac as ia,ad as oa,ae as it,af as la,ag as ot,ah as da,ai as lt,aj as ue,ak as ca,al as we,am as J,an as K,ao as ua,ap as xa,aq as ma,ar as ha,as as pa,at as Le,au as $e,av as ga,aw as ya,ax as fa,ay as ja,az as va,aA as wa,aB as ba,aC as ka,aD as Ca,aE as Pe,aF as Na,aG as Sa,aH as _a,aI as Aa,aJ as Ta,aK as Ia,aL as La,aM as $a,aN as Pa,aO as Ea,aP as Ra}from"./vendor-2321f3a2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const za="modulepreload",Oa=function(t){return"/"+t},Ee={},v=function(a,s,n){if(!s||s.length===0)return a();const r=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=Oa(i),i in Ee)return;Ee[i]=!0;const l=i.endsWith(".css"),x=l?'[rel="stylesheet"]':"";if(!!n)for(let y=r.length-1;y>=0;y--){const j=r[y];if(j.href===i&&(!l||j.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${x}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":za,l||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),l)return new Promise((y,j)=>{h.addEventListener("load",y),h.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>a()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})},A=()=>{const t=localStorage.getItem("token");if(t)return JSON.parse(t||"")},V=()=>Nt(),I=St,d=Ge.create({baseURL:"https://node-6-jbbj.onrender.com/api"}),Da=Ge.create({baseURL:"https://node-6-jbbj.onrender.com/api"}),H=A(),Ba=async t=>await d.post("/signup",t),Fa=async t=>await d.post("/signin",t),dt=async()=>await d.get("user"),Ma=async t=>await d.get("user_one/"+t),Va=async t=>await d.delete("removeUser/"+t+`/${H.user._id}`,{headers:{Authorization:`Bearer ${H.token}`}}),Ua=async t=>await d.put(`user/${t._id}/${H.user._id}`,t,{headers:{Authorization:`Bearer ${H.token}`}}),Ha=async t=>await d.post("user/creating",t),qa=async t=>await d.get(`user/cart/${t}`),Wa=async(t,a)=>await d.post(`/user/upload/${t}`,a,{headers:{Authorization:`Bearer ${H.token}`}}),Ga=async t=>await d.post("/forgot-password",t),Ya=async(t,a,s)=>await d.post(`/reset-password/${t}/${a}`,s),Ja=async t=>await d.post("/refreshToken",t),te=A(),Ka=async()=>await d.get("/cart"),Xa=async t=>await d.post(`/cart/${te.user._id}`,t,{headers:{Authorization:`Bearer ${te.token}`}}),Za=async(t,a)=>await d.post(`/cart/${t}/${te.user._id}`,a,{headers:{Authorization:`Bearer ${te.token}`}}),Re=p("cartSlice",async()=>{const{data:t}=await Ka();return t}),xe=p("addCartSlice",async t=>{const{data:a}=await Xa(t);return a}),Qa=p("deleteCartSlice",async t=>{const{data:a,status:s}=await Za(t.id,t);return a.data}),ze=p("user/login",async t=>{const{data:a}=await Ba(t);return a}),le=p("user/signin",async t=>{const{data:a,status:s}=await Fa(t);return a}),es=p("user/getAll",async()=>{const{data:t}=await dt();return t.filter(s=>s.role==0)}),me=p("user/getUser_id",async t=>{const{data:a}=await Ma(t);return a}),ts=p("admin/getAdmin",async()=>{const{data:t}=await dt();return t.filter(s=>s.role>=1)}),Oe=p("user/deteleUser",async t=>{const{data:a}=await Va(t);return a}),as=p("edit/editUser",async t=>{const{data:a}=await Ua(t);return a}),ss=p("user/importXlsx",async t=>{const{data:a}=await Ha(t);return a}),De=p("findcart",async t=>{const{data:a}=await qa(t);return a.cart}),Be=p("uploadImage",async({id:t,formData:a})=>{const{data:s,status:n}=await Wa(t,a);return s}),ct=F({name:"user",initialState:{value:[],cartUser:[],isLoading:!1,error:!1,login:{},isLogin:localStorage.getItem("isLogin")==="true",user:{}},reducers:{logout(t){localStorage.removeItem("token"),M.success("Logout successful!"),t.isLogin=!1,localStorage.setItem("isLogin","false"),t.user={}}},extraReducers:t=>{t.addCase(ze.fulfilled,(a,s)=>{a.error=!1,a.value=s.payload.newUser}).addCase(ze.rejected,(a,s)=>{a.error=!0}),t.addCase(le.pending,(a,s)=>{a.isLoading=!0}).addCase(le.fulfilled,(a,s)=>{localStorage.setItem("token",JSON.stringify(s.payload)),a.login=s.payload,a.error=!1,a.isLogin=!0,a.isLoading=!1,a.user=s.payload.user,localStorage.setItem("isLogin","true")}).addCase(le.rejected,(a,s)=>{a.error=s.payload,a.isLoading=!1}),t.addCase(es.fulfilled,(a,s)=>{a.value=s.payload}),t.addCase(Oe.fulfilled,(a,s)=>{a.value=a.value.filter(n=>n._id!==s.payload._id)}).addCase(Oe.rejected,(a,s)=>{}),t.addCase(ts.fulfilled,(a,s)=>{a.value=s.payload}),t.addCase(as.fulfilled,(a,s)=>{a.value.push(s.payload)}),t.addCase(ss.fulfilled,(a,s)=>{a.value.unshift(s.payload)}),t.addCase(De.pending,(a,s)=>{a.isLoading=!0}).addCase(De.fulfilled,(a,s)=>{a.isLoading=!1,a.cartUser=s.payload}),t.addCase(me.fulfilled,(a,s)=>{a.user=s.payload,a.isLoading=!1}).addCase(me.pending,(a,s)=>{a.isLoading=!0}),t.addCase(Be.fulfilled,(a,s)=>{a.isLoading=!1,a.user=s.payload.data}).addCase(Be.pending,(a,s)=>{a.isLoading=!0}),t.addCase(Qa.fulfilled,(a,s)=>{const n=a.user.cart.filter(r=>r.product._id!==s.payload.product);a.user.cart=n})}}),{logout:ns}=ct.actions,rs=ct.reducer,X=A(),P=o.createContext(null),is=t=>{const a=V(),{user:s}=I(j=>j.user),n=localStorage.getItem("isLogin"),r=I(j=>j.user.isLogin),[i,l]=o.useState(!1),[x,u]=o.useState(!1),h=()=>{u(!x)};o.useEffect(()=>{X&&a(me(X.user._id))},[r,a,i]);const y={Auth:X||"",user:s,isLoggedIn:n,isLoggedInState:r,setReset:l,handleClick:h,state:x};return e.jsx(P.Provider,{value:y,children:t.children})},k=o.memo(({level:t,children:a,...s})=>e.jsx(_t,{...s,children:a})),ae=({color:t,children:a,...s})=>e.jsx(At,{color:t,...s,children:a}),os=c.div`
height: 100vh;
`,ut=c.div`
position: relative;
height: 100vh;
justify-content: center;
display: flex;
&>*{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
`,xt=()=>e.jsx(os,{}),ls=()=>{const{state:t}=o.useContext(P)??{};return e.jsx(Tt,{className:t?"w-11/12":"w-10/12",active:!0,title:{width:"20%"},paragraph:{rows:8,width:[300,200,400,100]},loading:!0,style:{height:"100vh",padding:"0 30px"}})},ds=()=>e.jsx(ut,{children:e.jsx(k,{type:"danger",children:"Lỗi rồi kiểm tra lại mạng của bạn hoặc tải lại trang..."})}),mt=({size:t,children:a})=>e.jsx(ut,{className:"w-full",children:e.jsxs("div",{role:"status",children:[e.jsxs("svg",{className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]})}),ht=()=>e.jsx(ae,{color:"#108ee9",className:"mx-2",children:"Empty"}),pt=()=>e.jsx("p",{className:"text-white",children:"Trống!"}),cs=async t=>await d.get(t),$=t=>{const{data:a,error:s,mutate:n}=It(t,cs);return{data:a?a.data:"",isLoading:!a&&!s,isError:s,mutate:n}},L="https://node-6-jbbj.onrender.com/api",us=(t,a)=>{t(ns()),a("/")},w=({to:t,children:a,...s})=>e.jsx(Ye,{to:t,...s,className:"link",children:a}),se=o.memo(({textColor:t,orientation:a,children:s,...n})=>e.jsx(Lt,{style:{color:t,borderBlockStartColor:"#999"},className:"text-white",orientation:a,...n,children:s})),U=({src:t,alt:a,style:s,...n})=>e.jsx("img",{loading:"lazy",src:t,className:"m-5 w-full h-full",style:s,alt:a,...n}),E=(t,a)=>{const s=a?a.split("/"):null,n=s==null?void 0:s.indexOf("upload");return n!==-1&&(s==null||s.splice(n+1,0,`w_${t}/f_webp`)),s==null?void 0:s.join("/")},xs=c.div`
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius:10px;
}
::-webkit-scrollbar {
  width: 2px;
}
`,ms=c.div`
background: rgb(28, 28, 30);
border-radius: 10px;
margin: 5px 0px;
`,hs=()=>{const{data:{data:t}}=$("/category/filters");return e.jsxs("div",{className:"rounded des w-3/12 relative overflow-hidden lg:block md:hidden hidden bg-[#0000005e]",children:[e.jsx(se,{className:"m-0",textColor:"#fff",orientation:"left",children:"Xem thêm"}),e.jsx(xs,{className:"absolute h-full w-full px-2 overflow-scroll",children:t&&(t==null?void 0:t.map((a,s)=>e.jsxs(ms,{className:"flex lg:gap-1 my-2 py-2",children:[e.jsx("div",{className:"w-3/12",children:e.jsx(w,{to:"/q/"+a.slug,children:e.jsx(U,{className:"m-0 h-full",src:E(100,a.linkImg),alt:a.name})},s)}),e.jsxs("div",{className:"w-9/12",children:[e.jsx(w,{style:{textDecoration:"none",color:"#999",fontSize:"13px"},to:"/q/"+a._id,children:a.name},s),e.jsxs(ae,{color:"#108ee9",className:"text-[12px] text-[#999] my-2 block w-6/12 ",children:[" ",a.sumSeri+" Tập VietSub"]}),e.jsx(ae,{color:"#2db7f5",children:a.type?a.type:"null"}),e.jsx("div",{className:"text-sm text-gray-400 mt-2",children:e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(k,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(k,{className:"mr-2 text-gray-300",children:a.typecm}),e.jsxs(k,{className:"text-gray-400 text-sm",children:["(",a.time,")"]})]})})]})]},s)))})]})},gt=({content:t,settings:a})=>e.jsx($t,{...a,children:t}),Ai=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],ps=[e.jsx(Je,{}),e.jsx(Pt,{}),e.jsx(Ke,{}),e.jsx(Et,{}),e.jsx(Rt,{}),e.jsx(zt,{}),e.jsx(Ot,{}),e.jsx(Dt,{}),e.jsx(Bt,{})],Ti=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Action",dataIndex:"action",key:"action"}],Ii=[{title:"Url",dataIndex:"url",key:"url"},{title:"Image",dataIndex:"image",key:"image"},{title:"Action",dataIndex:"action",key:"action"}],Li=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Path",dataIndex:"path",key:"path"},{title:"Product",dataIndex:"product",key:"product"},{title:"Categorymain",dataIndex:"categorymain",key:"categorymain"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"},{title:"Checked",dataIndex:"checked",key:"checked"}],$i=[{title:"Stt",dataIndex:"stt",key:"stt",width:100},{title:"Name",dataIndex:"name",key:"name",width:100},{title:"Slug",dataIndex:"slug",key:"slug",width:120},{title:"Image",dataIndex:"image",key:"Image",width:150},{title:"Duration",dataIndex:"duration",key:"duration",width:50},{title:"isActive",dataIndex:"isActive",key:"isActive",width:50},{title:"Year",dataIndex:"year",key:"year",width:50},{title:"Set",dataIndex:"set",key:"set",width:50},{title:"Week",dataIndex:"week",key:"week",width:50},{title:"Action",dataIndex:"action",key:"action",width:100}],Pi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Product",dataIndex:"product",key:"product"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Day",dataIndex:"day",key:"day"},{title:"Action",dataIndex:"action",key:"action"}],Ei=[{title:"Id",dataIndex:"_id",key:"_id"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],Ri=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Image",dataIndex:"image",key:"image"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"}],zi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Role",dataIndex:"role",key:"role"},{title:"Status",dataIndex:"status",key:"status"},{title:"Image",dataIndex:"image",key:"image"}],Oi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Image",dataIndex:"image",key:"image"},{title:"Status",dataIndex:"status",key:"status"},{title:"Role",dataIndex:"role",key:"role"},{title:"Action",key:"action",dataIndex:"action",with:150}],gs=[{title:"Name",dataIndex:"name",key:"name"},{title:"Action",dataIndex:"action",key:"action"}],ys={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},fs={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:3,responsive:[{breakpoint:1440,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}}]},O=A(),js=async t=>await d.post(`/week/${O.user._id}`,t,{headers:{Authorization:`Bearer ${O.token}`}}),vs=async t=>await d.delete(`/week/${t}/${O.user._id}`,{headers:{Authorization:`Bearer ${O.token}`}}),ws=async t=>await d.get(`/week?w=${t}`),bs=async(t,a)=>await d.post(`/week/category/${t}/${O.user._id}`,a,{headers:{Authorization:`Bearer ${O.token}`}}),W=o.createContext(null),ks=t=>{const[a,s]=o.useState(1),{data:n}=$(L+"/weeks"),{data:r}=$(L+"/background"),{data:i,isLoading:l}=$(L+"/types"),x={seri:i,loadingSeri:l,background:r,weeks:n,setPage:s,page:a};return e.jsx(W.Provider,{value:x,children:t.children})},D=o.memo(({level:t,children:a,...s})=>e.jsx(Ft,{level:t,...s,children:a})),he=o.memo(({title:t,link:a,image:s,sumSeri:n,time:r,typecm:i,year:l,products:x})=>{const u=x?x[x.length-1]:"";return e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"relative group",children:e.jsxs(w,{to:a,className:"block",children:[e.jsx("div",{className:"relative w-full h-[200px] md:h-[250px] lg:h-[320px]",children:e.jsx(U,{src:E(300,s),alt:t,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-2 py-1 font-medium",children:u?`Tập ${u.seri}`:e.jsx(pt,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(Xe,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4",children:e.jsx(w,{to:a,children:e.jsx(D,{level:5,style:{color:"#fff"},className:"text-xl md:text-2xl lg:text-3xl font-bold",children:t})})}),e.jsxs("div",{className:"text-sm text-gray-400 mt-2",children:[e.jsx("div",{className:"font-semibold",children:n?`${n} Tập`:""}),e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(k,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(k,{className:"mr-2 text-gray-300",children:i}),e.jsxs(k,{className:"text-gray-400 text-sm",children:["(",r,")"]})]}),e.jsx("div",{className:"font-semibold mt-2",children:l?`${l}`:""})]})]})});function Cs(){var j;const{weeks:t}=o.useContext(W)||{},a=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],n=new Date().getDay(),[r,i]=o.useState(!0),[l,x]=o.useState(a[n]),[u,h]=o.useState([]),y=f=>{x(f)};return o.useEffect(()=>{const f=async()=>{const{data:C}=await ws(l);h(C),i(!1)};i(!0),f()},[l]),e.jsxs("div",{className:"container mx-auto my-10",children:[e.jsx("div",{className:"px-4 lg:px-[150px] md:px-[100px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0",children:t&&t.map(f=>e.jsx("div",{className:l===f.name?"active border-none":"cursor-pointer",onClick:()=>y(f.name),children:e.jsx("div",{className:"text-[11px] md:text-[12px] lg:text-[14px] flex justify-center items-center px-4 py-2 text-white rounded-lg w-full",children:e.jsx("p",{children:f.name})})},f._id))}),e.jsx("div",{className:"my-5 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full",children:r?e.jsx(xt,{}):e.jsx(gt,{settings:ys,content:(j=u==null?void 0:u.content)==null?void 0:j.map(f=>e.jsx("div",{className:"px-2",children:e.jsx(he,{title:f.name,link:"/q/"+f.slug,image:f.linkImg,time:f.time,sumSeri:f.sumSeri,products:f.products})},f._id))})})]})}const _=o.memo(({gutter:t,justify:a,align:s,children:n,...r})=>e.jsx(Mt,{gutter:t,justify:a,align:s,...r,children:n})),g=({children:t,...a})=>e.jsx(Vt,{...a,children:t}),Ns=o.memo(({type:t,gutter:a,child:s,...n})=>e.jsx(_,{gutter:a,children:t==="category"?s&&s.length&&s.map((r,i)=>e.jsx(g,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(he,{title:r.name,link:r.image?"/d/"+r.slug:"/q/"+r.slug,image:r.linkImg||r.image,time:r.time,year:r.year,sumSeri:r.sumSeri,products:r.products})},r._id)):s&&s.length?s.map((r,i)=>e.jsx(g,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(he,{title:r.name,link:r.image?"/d/"+r.slug:"/q/"+r._id,image:r.linkImg||r.image,time:r.time,sumSeri:r.sumSeri})},r._id)):e.jsx(ht,{})})),B=A(),Ss=async t=>await d.get(`/categorys?page=${t}`),_s=async t=>await d.get(`/category/${t}`),As=async t=>await d.post(`/category/${B.user._id}`,t,{headers:{Authorization:`Bearer ${B.token}`}}),Ts=async t=>await d.delete(`/category/${t}/${B.user._id}`,{headers:{Authorization:`Bearer ${B.token}`}}),Is=async t=>await d.post(`/category/${t.get("_id")}/${B.user._id}`,t,{headers:{Authorization:`Bearer ${B.token}`}}),Ls=async t=>await d.get("/category/getAllCategoryNotRequest/"+t),$s=async t=>await d.get(`/categorys/search?value=${t}`),Ps=async(t,a)=>await d.post("/rating/"+t,a),Es=async t=>await d.post("/category/changeLatest",t),Z=p("category/getAllcate",async t=>{const{data:a}=await Ss(t);return a}),pe=p("category/getOne",async t=>{const{data:a}=await _s(t);return a}),Fe=p("getAll/Category",async t=>{const{data:a}=await Ls(t);return a}),Rs=p("add/Addcate",async t=>{const{data:a}=await As(t);return a}),zs=p("delete/DeleteCate",async t=>{const{data:a}=await Ts(t);return a}),Os=p("update/Category",async t=>{const{data:a}=await Is(t);return a}),yt=()=>{const{data:t}=I(n=>n.category.category),a=I(n=>n.category.isLoading);I(n=>n.category.isError);const s=V();return o.useEffect(()=>{s(Z(1))},[]),a?e.jsx("div",{className:"seriLoading",children:"Loading..."}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(D,{level:2,underline:!0,style:{color:"#fff"},strong:!0,className:"uppercase",children:"Xem Nhiều"}),e.jsx(w,{to:"/loadmore","aria-label":"Tải thêm nội dung",children:e.jsxs("div",{className:"text-[16px] text-[#fff] flex lg:text-[20px] md:text[18px] gap-3",children:[e.jsx("span",{className:"underline",children:"See More"}),e.jsx("span",{children:e.jsx(Ut,{title:"Tải thêm nội dung..."})})]})})]}),e.jsx(Ns,{type:"category",gutter:[16,16],child:t})]})},Ds=()=>{const{data:{data:t}}=$(L+"/category/latest");return e.jsxs("div",{children:[e.jsx("h2",{className:"text-white category text-md md:text-md pl-2 mb-2 mx-2 my-3 border-l-4  font-sans font-bold border-teal-400 dark:text-gray-200",children:"Mới Cập Nhật"}),e.jsx(gt,{settings:fs,content:t&&t.map((a,s)=>{const n=a.products[a.products.length-1];return e.jsx("div",{className:"px-2",children:e.jsxs("div",{className:"w-full flex flex-col items-center",children:[e.jsx("div",{className:"relative group",children:e.jsxs(w,{to:`/q/${a.slug}`,className:"block w-full",children:[e.jsx("div",{className:"relative h-[200px] w-[160px] md:w-[180px] lg:w-[200px]",children:e.jsx(U,{src:E(220,a.linkImg),alt:a.name,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-1 md:px-2 py-1 font-medium",children:n?`Tập ${n.seri}`:e.jsx(pt,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(Xe,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(w,{to:"/q/"+a.slug,children:e.jsx("div",{style:{color:"#999"},className:"text-sm md:text-md lg:text-md",children:a.name})})})]})},a._id)})})]})};function ft({children:t}){const[a,s]=o.useState(!1),n=o.useRef(null);return o.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&s(!0)},{threshold:1});return n.current&&r.observe(n.current),()=>{n.current&&r.unobserve(n.current)}},[]),e.jsxs("div",{children:[a&&t,e.jsx("div",{ref:n,style:{height:"1px"}})]})}const Bs=c.video``,Fs=c.div`
  padding-bottom: 60%;
  @media (min-width: 768px) {
    padding-bottom: 50%;
  }
  @media (min-width: 1024px) {
    padding-bottom: 45%;
  }
`,Ms=o.memo(()=>{const{data:t,isError:a}=$(L+"/trailer"),{state:s}=o.useContext(P);return a?e.jsx(ds,{}):e.jsxs("div",{className:s?"p-3":"mt-3",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"lg:w-9/12 md:w-12/12 sm:w-full",children:e.jsxs("div",{className:"h-full",children:[e.jsx(Fs,{className:"relative md:mx-2",children:e.jsx(Bs,{className:"h-full absolute bg-black rounded",width:"100%",loop:!0,muted:!0,autoPlay:!0,controls:!0,src:t==null?void 0:t.url})}),e.jsx(Ds,{})]})}),e.jsx(hs,{})]}),e.jsx(Cs,{}),e.jsx(ft,{children:e.jsx(yt,{})})]})}),be=({ogTitle:t,description:a,imageUrl:s,mainTitle:n,title:r,...i})=>e.jsxs(Ht,{children:[e.jsx("title",{children:r}),e.jsx("meta",{property:"og:title",content:t}),e.jsx("meta",{property:"og:description",content:a}),e.jsx("meta",{property:"og:image",content:s}),Object.keys(i).map(l=>e.jsx("meta",{...i[l]},l))]}),Vs=()=>e.jsxs(e.Fragment,{children:[e.jsx(be,{ogTitle:"Hoạt Hình Trung Quốc",description:"Đấu Phá Thương Khung Phần 5",imageUrl:E(200,"https://res.cloudinary.com/daz3lejjo/image/upload/w_100/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),title:"Hoạt Hình 3D"}),e.jsx(Ms,{})]}),b=A(),Us=async t=>await d.get(`products?page=${t}`),Hs=async t=>await d.get(`product/${t}`),qs=async t=>await d.delete(`/product/${t}/${b.user._id}`,{headers:{Authorization:`Bearer ${b.token}`}}),Ws=async t=>await d.post(`/product/${b.user._id}`,t,{headers:{Authorization:`Bearer ${b.token}`}}),Gs=async t=>await d.put(`/product/${t.get("_id")}/${b.user._id}`,t,{headers:{Authorization:`Bearer ${b.token}`}}),Ys=async t=>await d.post("/products/creating",t,{}),Di=async t=>await d.post(`/products/deleteMultiple/${b.user._id}`,t,{headers:{Authorization:`Bearer ${b.token}`}}),Js=async t=>await d.get(`/category/products/${t}`),Bi=async(t,a)=>await d.post(`/product/pushlist/${t}/${b.user._id}`,a,{headers:{Authorization:`Bearer ${b.token}`}}),Fi=async(t,a)=>await Da.post(`/product/abyss/${t}/${b.user._id}`,a,{headers:{Authorization:`Bearer ${b.token}`}}),Mi=async t=>await d.post(`/product/approve/${t}/${b.user._id}`,null,{headers:{Authorization:`Bearer ${b.token}`}}),Vi=async t=>await d.post(`/product/approve/cancel/${t}/${b.user._id}`,null,{headers:{Authorization:`Bearer ${b.token}`}}),Ks=async t=>await d.get(`/product/filter?c=${t}`),Xs=async t=>await d.get(`/product/v?name=${t}`),Ui=async()=>await d.post(`/products/clear/${b.user._id}`,null,{headers:{Authorization:`Bearer ${b.token}`}}),Hi=async t=>await d.post(`/products/approvedMultiple/${b.user._id}`,t,{headers:{Authorization:`Bearer ${b.token}`}}),qi=async t=>await d.post(`/products/encodeMultipleDailymotionServer/${b.user._id}`,t,{headers:{Authorization:`Bearer ${b.token}`}}),Zs=async()=>await d.post(`/products/autoAddEpisodeMovie/${b.user._id}`,null,{headers:{Authorization:`Bearer ${b.token}`}}),Me=p("product/getProducts",async t=>{const{data:a}=await Us(t);return a}),ge=p("product/getProduct",async t=>{const{data:a}=await Hs(t);return a}),Qs=p("product/deleteProduct",async t=>{const{data:a}=await qs(t);return a}),en=p("product/addProduct",async t=>{const{data:a,status:s}=await Ws(t);return a}),tn=p("product/editProduct",async t=>{const{data:a}=await Gs(t);return a}),an=p("product/importDataFile",async t=>{const{data:a}=await Ys(t);return a}),sn=p("product/getAllProductDataByCategory",async t=>{const{data:a}=await Js(t);return a}),nn=p("product/filter",async t=>{const{data:a}=await Ks(t);return a}),rn=p("product/Search",async t=>{const{data:a}=await Xs(t);return a}),on=p("product/autoAdd",async()=>{const{data:t}=await Zs();return t}),ln=t=>t.product.getOneProduct,Wi=t=>t.category.category,dn=t=>t.user.value,Gi=t=>t.user.value,cn=c.button`
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
`,Ve=c.button`
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
`,un=o.memo(({seriProduct:t})=>{var a,s;return e.jsx(_,{gutter:14,items:"center",children:(s=(a=t==null?void 0:t.category)==null?void 0:a.products)==null?void 0:s.map((n,r)=>n.isApproved==!0?e.jsx(g,{xl:3,lg:3,md:4,sm:4,xs:6,className:"mt-2",children:e.jsx(je,{className:({isActive:i,isPending:l})=>i?"activeSeri":"",to:"/d/"+n.slug,children:e.jsx(cn,{className:n.seri&&"w-full",children:n.seri&&"Tập "+n.seri})})},r):"")})}),T=o.memo(({children:t,...a})=>e.jsx(qt,{...a,children:t})),G=t=>M.success(t),jt=t=>M.warning(t),z=t=>M.error(t),xn=({item:t,id:a})=>{var y;const s=V(),{Auth:n,user:r,isLoggedInState:i}=o.useContext(P),[l,x]=o.useState(!1),u={user:n?n.user._id:"",product:a};o.useEffect(()=>{var f,C;const j=(f=r==null?void 0:r.cart)==null?void 0:f.find(N=>N.product._id===a);x(((C=j==null?void 0:j.product)==null?void 0:C._id)===a)},[r.cart,a]);const h=()=>{!n&&i==!1?z("Bạn cần đăng nhập!"):l?jt("Đã tồn tại trong yêu thích!"):(s(xe(u)),x(!0),G("Thêm vào danh sách yêu thích thành công!"))};return e.jsxs("div",{className:"lg:flex md:flex-row items-center @screen md:justify-between flex flex-col",children:[e.jsx(w,{to:"/q/"+((y=t==null?void 0:t.category)==null?void 0:y._id),className:"text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(D,{level:4,style:{color:"#fff"},className:"uppercase",children:t.name})}),e.jsx(T,{style:{color:"#fff"},icon:e.jsx(Q,{}),disabled:l,className:"flex items-center justify-center",onClick:()=>h(),children:l?"Đã yêu thích":"Thêm vào yêu thích"})]})},mn=({getOneProductDetail:t})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{color:"#fff",margin:"10px 0"},children:t.seri?t.trailer?"Trailer "+t.seri:"Tập "+t.seri:""}),e.jsx("div",{className:"des text-[#999]",children:e.jsxs("p",{children:["Ngày đăng:"," ",Wt(t.uploadDate).format("LTS DD-MM-YYYY")]})}),e.jsx("div",{style:{color:"#fff",margin:"10px 0"},className:"des",children:e.jsxs("div",{className:"text-[#999] flex items-center gap-2 lg:justify-start @screen justify-center",children:[e.jsx(Gt,{}),t.view*36," Lượt xem"]})}),e.jsxs("div",{className:"p-3 mt-3 mb-3 text-white rounded  flex items-center lg:justify-start @screen justify-center",style:{background:"rgb(0 0 0 / 47%)"},children:["Copyright video:",e.jsx("div",{className:"text-slate-400",children:" "+t.copyright})]})]}),hn=c.div`
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
 
`,vn=t=>t.product.isLoading,wn=()=>{var j,f,C,N,R;const t=I(ln),a=I(vn),[s,n]=o.useState(""),{id:r}=ve(),[i,l]=o.useState("dailyMotion"),x=V(),[u,h]=o.useState(""),y=Ze();return o.useEffect(()=>{window.scrollTo(0,0)},[y]),o.useEffect(()=>{x(ge(r));const Y=_e.AES.decrypt(t.dailyMotionServer?t.dailyMotionServer:"","24062003").toString(_e.enc.Utf8);h(Y),n(Y)},[r,t.dailyMotionServer]),console.log(t.server2),e.jsxs(e.Fragment,{children:[e.jsx(be,{ogTitle:t==null?void 0:t.name,description:(j=t.category)==null?void 0:j.des,imageUrl:(f=t.category)==null?void 0:f.linkImg}),e.jsx("div",{className:"flex justify-center mt-4",style:{gap:"10px"},children:e.jsx(yn,{className:"col-md-12",children:t&&(a?e.jsx(mt,{size:"large",children:void 0}):e.jsxs(e.Fragment,{children:[e.jsx(fn,{className:"d-flex justify-content-center relative",children:t.dailyMotionServer!==""?e.jsx("iframe",{allowFullScreen:!0,title:"vimeo-player",className:"absolute",src:s,style:{width:"100%",height:"100%"}}):t.trailer!==""?e.jsx("iframe",{title:"vimeo-player",className:"absolute",style:{width:"100%",height:"100%"},src:t.trailer+"?autoplay=1&mute=1"}):e.jsx(Yt,{icon:"Hiiiii!!",className:"absolute inset-0 text-white mt-5",subTitle:"Phim này đang trong quá trình cập nhật video. Vui lòng quay lại sau."})}),e.jsxs(jn,{className:"mt-4 rounded",children:[e.jsx(se,{textColor:"#fff",orientation:"center",className:"text-white md:text-sm lg:text-base text-sm underline",children:"Chọn server:"}),e.jsxs("div",{className:"md:text-sm lg:text-base text-sm flex items-center justify-center gap-4 px-4 py-3",children:[e.jsx(T,{disabled:t.link==="",onClick:()=>{l("link1"),n(t.link)},className:`text-white cursor-pointer ${i==="link1"?"activeServer":""}`,children:"#S1"}),e.jsx(T,{onClick:()=>{l("server2"),n(t.server2)},disabled:!t.server2,className:`${t.server2?" text-white cursor-pointer":""} ${i==="server2"?"activeServer":""}`,children:"#S2"}),e.jsx(T,{onClick:()=>{l("dailyMotion"),n(u)},disabled:!t.dailyMotionServer,className:`${t.dailyMotionServer?"text-white cursor-pointer":""} ${i==="dailyMotion"?"activeServer":""}`,children:"#S3"})]})]}),e.jsxs(hn,{className:"mt-2",children:[e.jsx(pn,{className:"w-3/12",children:e.jsx(U,{className:"md:block hidden",alt:"Ảnh"+((C=t.category)==null?void 0:C.name),src:E(200,t&&(((N=t.category)==null?void 0:N.linkImg)||t.image))})}),e.jsxs(gn,{className:"lg:w-9/12 md:w-full text-center lg:text-start",children:[e.jsx(xn,{item:t,id:r}),e.jsx(mn,{getOneProductDetail:t}),e.jsx(un,{seriProduct:t}),e.jsxs("div",{className:"text-[#999] lg:text-md sm:text-sm mt-2 mb-2",children:[e.jsx(se,{textColor:"#fff",orientation:"left",children:"Mô tả:"}),t&&((R=t.category)==null?void 0:R.des)]})]})]})]}))})})]})},bn=()=>e.jsxs(ie.Fragment,{children:[e.jsx(o.Suspense,{fallback:e.jsx(ls,{}),children:e.jsx(wn,{})}),e.jsx(ft,{children:e.jsx(yt,{})})]}),kn=({data:t,isLoading:a})=>{var s;return a?e.jsx("div",{className:"seriLoading",children:"Loading...."}):e.jsx("div",{className:"bg-[#9b9b9b1f] h-[174px] overflow-y-scroll p-3 rounded-sm seriCategory",children:e.jsx(_,{gutter:[16,16],children:((s=t==null?void 0:t.products)==null?void 0:s.length)>0&&(t!=null&&t.products)?t.products.map((n,r)=>n.isApproved==!0?e.jsx(g,{lg:3,md:4,sm:5,xs:6,style:{textAlign:"center"},children:e.jsx(w,{to:"/d/"+n.slug,children:!n.dailyMotionServer&&n.trailer?e.jsx(Ve,{children:n.seri}):e.jsx(Ve,{className:"w-full text-white",variant:"ghost",size:"sm",children:n.seri})})},r):""):e.jsx(ht,{})})})},Cn=o.memo(({id:t,averageRating:a,totalRatings:s})=>{const n=async r=>{const i={rating:r};try{await Ps(t,i)}catch(l){console.error("Lỗi khi lưu đánh giá:",l)}};return e.jsxs("span",{className:"text-white flex items-center gap-2",children:[e.jsx(Jt,{className:"mt-2 mb-2",value:a,onChange:n}),s>0?e.jsx("div",{className:"relative pt-1",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{children:e.jsxs("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200",children:["Vip ",a.toFixed(2),"/",s*115," Tổng số lượt đánh giá"]})})})}):""]})}),Nn=()=>{const{id:t}=ve(),a=V(),s=I(r=>r.category.details),n=I(r=>r.category.isLoading);return o.useEffect(()=>{a(pe(t))},[t]),o.useEffect(()=>{s!=null&&s.name&&(document.title=s.name)},[s]),e.jsxs(e.Fragment,{children:[e.jsx(be,{ogTitle:s.name,description:s==null?void 0:s.des,imageUrl:s==null?void 0:s.linkImg}),s&&e.jsx("div",{children:e.jsxs("div",{style:{color:"#fff"},children:[e.jsxs("div",{className:"md:flex lg:flex block gap-2 ",children:[e.jsx("div",{className:"mb-5 lg:w-3/12 md:w-3/12 md:h-full h-52 ",children:e.jsx("div",{className:"h-full w-full flex justify-center ",children:e.jsx(U,{className:"object-contain w-full h-full flex-grow",src:E(300,s.linkImg),alt:s.name})})}),e.jsxs("div",{className:"lg:w-9/12 md:w-9/12",children:[e.jsx("div",{className:"category text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(w,{to:"/q/"+s.slug,children:e.jsx(D,{type:"secondary",level:3,className:"md:text-[18px] lg:text-[20px] sm:text-[15px]",style:{textTransform:"capitalize",color:"#fff"},children:s.name})})}),e.jsxs("div",{className:"loai des text-[12px] md:text-[13px] lg:text-[14px]",children:[e.jsx("b",{children:s.anotherName}),e.jsx("br",{}),e.jsx(k,{style:{color:"#999"},children:"Tác giả :..."}),e.jsx("br",{}),e.jsx(k,{style:{color:"#999"},children:"Quốc gia : Chinese"}),e.jsx("div",{children:e.jsxs(k,{style:{color:"#999"},children:["Thể loại :"," ",e.jsx("span",{className:"p-1 bg-gray-500 rounded-sm",children:s.type})]})}),e.jsx("div",{children:e.jsxs(k,{style:{color:"#999"},children:["Tổng Số tập: ",s._id==t?s.sumSeri:""]})}),e.jsx("div",{children:e.jsx(k,{style:{color:"#999"},children:s.time+" "})}),e.jsx("div",{children:e.jsxs(k,{style:{color:"#999"},children:["Năm phát hành : ",s.year]})}),e.jsx("div",{}),e.jsx(ae,{color:"#2db7f5",className:"my-2",children:s.isActive==0?"Đang chiếu":"Hoàn thành"}),e.jsxs("div",{id:"toast-simple",className:"flex mb-2 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800",role:"alert",children:[e.jsx(Qe,{}),e.jsx("div",{className:"ps-4 text-sm font-normal",children:"Vietsub lúc 10h00 Thứ 4 hàng tuần"})]})]}),e.jsx(kn,{isLoading:n,data:s}),e.jsx(Cn,{id:t,averageRating:s.averageRating,totalRatings:s.totalRatings})]})]}),e.jsxs("div",{className:"text-[#999] lg:text-[15px] md:text[14px] text-[13px]",children:[e.jsx(se,{textColor:"#fff",orientation:"left",children:"NỘI DUNG PHIM"}),s.des]})]})},s._id)]})},Sn=()=>e.jsx(e.Fragment,{children:e.jsx(Nn,{})});const Ue=o.memo(({title:t,src:a,size:s,...n})=>e.jsx("div",{title:t,style:{cursor:"pointer"},children:e.jsx(Kt,{size:s,color:"default",src:a,...n})})),ye=({isLoggedInState:t,style:a})=>{var l,x,u,h,y;const s=A(),n=q(),r=V(),i=()=>{s?n("/cart/user"):z("Bạn cần đăng nhập!")};return e.jsx(ie.Fragment,{children:s&&t?e.jsx(Ae,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx(Te,{content:e.jsxs(e.Fragment,{children:[e.jsx(w,{to:"/profile",children:e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:12,children:[e.jsx(g,{children:e.jsx(Xt,{})}),e.jsx(g,{children:e.jsx(k,{level:6,className:"auth",children:"Your profile"})})]})}),e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(Q,{})}),e.jsx(g,{children:e.jsx(k,{style:{cursor:"pointer"},onClick:i,className:"auth",children:"Saved"})})]}),s.user&&((l=s==null?void 0:s.user)==null?void 0:l.role)>=1&&e.jsx(w,{to:"/dashboard",children:e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(ee,{})}),e.jsx(g,{children:e.jsx(k,{className:"auth",children:"Admin"})})]})}),e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(et,{})}),e.jsx(g,{children:e.jsx(k,{style:{cursor:"pointer"},onClick:()=>us(r,n),children:"Logout"})})]})]}),title:e.jsx(D,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:(x=s==null?void 0:s.user)==null?void 0:x.username}),placement:"bottomLeft",trigger:"click",children:e.jsx(Ue,{className:"text-center",title:(u=s==null?void 0:s.user)==null?void 0:u.name,src:E(50,s.user&&((h=s==null?void 0:s.user)==null?void 0:h.image)),size:"sm"})})}):e.jsx(Ae,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx(Te,{content:e.jsx(w,{to:"/signin",children:e.jsxs(_,{align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(Zt,{})}),e.jsx(g,{children:e.jsx(k,{level:6,className:"auth",children:"Signin"})})]})}),title:e.jsx(D,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:"Hi"}),placement:"bottomLeft",trigger:"click",children:e.jsx(Ue,{title:(y=s==null?void 0:s.user)==null?void 0:y.name,src:void 0,style:a,size:40,icon:e.jsx(ee,{})})})})})},{Content:_n,Sider:An,Header:Tn,Footer:In}=de,Ln=()=>{const t=ei.map((r,i)=>{var x;const l=String(i+1);return{key:`${l+1}`,icon:r.icon,label:e.jsx(w,{to:r.path,children:r.name}),children:(x=r==null?void 0:r.children)==null?void 0:x.map((u,h)=>{const y=h+1;return{key:`subitem-${l}-${y}`,icon:u.icon,label:e.jsx(w,{to:u.path,children:u.name})}})}}),{isLoggedInState:a}=o.useContext(P)??{},[s,n]=o.useState(!1);return e.jsxs(de,{style:{minHeight:"100vh"},children:[e.jsxs(An,{trigger:null,collapsible:!0,collapsed:s,className:"custom-sider overflow-y-auto",style:{height:"100%",position:"fixed"},children:[e.jsx("div",{className:"p-4 bg-[#fff]",children:e.jsx("div",{className:"h-8 w-full bg-[#ddd] rounded"})}),e.jsx(ce,{style:{height:"calc(100% - 56px)",marginTop:"8px"},theme:"light",mode:"inline",defaultSelectedKeys:["1"],items:t})]}),e.jsxs(de,{style:{marginLeft:s?80:200},children:[e.jsx(Tn,{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",padding:0},children:e.jsxs(_,{align:"middle",justify:"space-between",children:[e.jsx(g,{children:e.jsx(T,{type:"text",icon:s?e.jsx(tt,{}):e.jsx(at,{}),onClick:()=>n(!s),style:{fontSize:"16px",width:64,height:64},children:void 0})}),e.jsx(g,{children:e.jsx(w,{to:"/",children:"Home Page"})}),e.jsx(g,{style:{textAlign:"center"},span:1,children:e.jsx(ye,{isLoggedInState:a,style:void 0})})]})}),e.jsx(_n,{style:{padding:"24px",minHeight:"calc(100vh - 64px)",overflow:"auto"},children:e.jsx(st,{})}),e.jsx(In,{children:"© 2023 copyright | PH ANG"})]})]})},$n=t=>{const a=A();try{return a?a.user.role==0?e.jsx(Ie,{to:"/"}):t.children:e.jsx(Ie,{to:"/"})}catch{return e.jsx("div",{className:"text-light container text-center",children:e.jsx(w,{to:"/signin",children:"Đăng nhập"})})}},Pn=c.div`
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

`;const zn=o.memo(({data:t,icons:a,id:s,background:n,...r})=>e.jsx(ce,{className:"h-full",style:{background:n},children:t&&t.map((i,l)=>o.createElement(ce.Item,{...r,icon:i.icon?i.icon:a[l],key:l},s==!0?e.jsx(je,{to:i.path=="/"?i.path:i.path+`/${i._id}`,children:i.name},l):e.jsx(w,{to:i.path,children:i.name})))})),On=c.div`
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
`,He=c.input`
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
`,Mn=c.div`
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
`,Vn=c.div`
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
`,fe=({data:t})=>t.length>0?e.jsx("div",{className:"absolute top-[50px] left-0 w-full flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:e.jsx("div",{className:"p-4 flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700",children:t.map((a,s)=>e.jsx(w,{to:`/q/${a.slug}`,children:e.jsx("div",{className:"flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:a.name})},a._id))})}):e.jsx(e.Fragment,{}),Yn=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"})),Jn=[e.jsx(Je,{}),e.jsx(aa,{}),e.jsx(et,{}),e.jsx(nt,{})],Kn=()=>{const{Auth:t,isLoggedInState:a,state:s,handleClick:n}=o.useContext(P)??{},[r,i]=o.useState(!1),[l,x]=o.useState(0),[u,h]=o.useState("20px 10px"),[y,j]=o.useState(!1),f="left",[C,N]=o.useState(""),[R,Y]=o.useState([]),bt=()=>{j(!0)},kt=()=>{j(!1)};window.addEventListener("scroll",()=>{const S=window.pageYOffset;i(l>S),x(S),window.scrollY>10?h("10px 5px"):h("20px 10px")});const Ct=q(),ke=()=>{t?Ct("/cart/user"):z("Bạn cần đăng nhập!")},Ce=Qt.debounce(async S=>{const{data:oe}=await $s(S);Y(oe)},500),Ne=async S=>{N(S),Ce(S)};o.useEffect(()=>()=>{Ce.cancel()},[C]),o.useEffect(()=>{i(!0)},[]);const Se=a?Zr:Xr;return e.jsxs(ie.Fragment,{children:[e.jsxs(_,{align:"middle",justify:"space-between",className:`${s?"w-11/12":"w-10/12"} lg:flex hidden z-[100] fixed right-0`,style:{top:r?"0":"-25%",padding:u,backgroundColor:"#00000038"},children:[e.jsx(g,{span:1,children:e.jsx(Gn,{className:"text-[21px] md:text-[23px] lg:text-[25px]",onClick:n,children:s?e.jsx(at,{}):e.jsx(tt,{})})}),e.jsxs(g,{span:6,className:"relative",children:[e.jsx(He,{style:{boxShadow:"#333 0px 2px 10px"},onChange:S=>Ne(S.target.value),placeholder:"Search..."}),e.jsx(fe,{data:R})]}),e.jsx(g,{span:16,children:e.jsxs(_,{justify:"center",align:"middle",children:[e.jsx(_,{children:Se.map((S,oe)=>e.jsx(g,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:e.jsx(w,{style:{color:"#fff",textDecoration:"none",margin:"0 20px"},to:S.path,children:S.name})},oe))}),e.jsx(g,{children:e.jsxs(Rn,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:[e.jsx(Pn,{children:"Liên hệ qc tele: "}),e.jsxs("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:[e.jsx(En,{}),"@PH ANG"]})]})}),e.jsx(g,{className:"ml-5 text-[15px] lg:text-[17px] md:text[16px]",style:{marginLeft:"50px"},onClick:ke,children:e.jsx(Q,{className:"__ text-yellow-500"})})]})}),e.jsx(g,{span:1,className:"text-end",children:e.jsx(ye,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",textAlign:"center"}})})]}),e.jsxs("div",{className:"navbar_mb w-10/12 absolute right-0 z-10",children:[e.jsxs(_,{align:"middle",justify:"space-between",className:"navbar bgNav mb",children:[e.jsx(g,{children:e.jsx(ea,{className:"text-white",onClick:bt})}),e.jsx(g,{children:e.jsx("div",{className:"ml-5 relative",onClick:ke,children:e.jsx(Q,{className:"__ text-yellow-500"})})}),e.jsxs(g,{span:16,className:"relative",children:[e.jsx(He,{onChange:S=>Ne(S.target.value),placeholder:"Search..."}),e.jsx(fe,{data:R})]}),e.jsx(g,{children:e.jsx(ye,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",lineHeight:"30px"}})})]}),e.jsx(ta,{width:200,title:"Drawer",placement:"left",closable:!1,onClose:kt,open:y,closeIcon:!0,className:"relative z-10",children:e.jsx(zn,{icons:Jn,id:!1,background:"#fff",data:Se})},f)]})]})},Xn=()=>e.jsx(e.Fragment,{children:e.jsx(ie.Fragment,{children:e.jsxs("div",{className:"ft text-white",children:[e.jsx("link",{rel:"stylesheet",integrity:"sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=",crossOrigin:"anonymous"}),e.jsx("footer",{className:"footer",children:e.jsx("div",{className:"footer-bottom footer-border-top light py-3",children:e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"m-0",children:["© 2023 copyright"," ",e.jsx("a",{href:"#",className:"text-reset",children:"| PH ANG"})]})})})})]})})}),Zn=()=>e.jsx("div",{className:"md:mt-[50px] lg:mt-[50px] lg:flex hidden justify-center text-white ",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"card p-3 ",style:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"d-flex justify-center",children:e.jsx("img",{src:E(80,"https://res.cloudinary.com/daz3lejjo/image/upload/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),alt:"Đấu phá thương khung phần 5",className:"avatar-md rounded-circle img-thumbnail"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-size-16 mb-1 mt-1",children:e.jsx(w,{to:"#",className:"text-light",children:"Admin Contact"})}),e.jsx("span",{className:"badge badge-soft-success mb-0",children:"Web Developer"})]})]}),e.jsxs("div",{className:"mt-3 pt-1 iconContact",children:[e.jsxs("p",{className:"mb-0",children:[e.jsx(sa,{}),e.jsx("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:"Facebook"})]}),e.jsxs("p",{className:"mb-0 mt-2",children:[e.jsx(na,{}),e.jsx("a",{href:"https://www.tiktok.com/@tieu_loli",children:"Tiktok"})]})]})]})})})}),Qn=()=>{const{seri:t,loadingSeri:a}=o.useContext(W)||{},{state:s}=o.useContext(P)||{},n=s?"w-1/12":"w-2/12";return e.jsx(On,{className:n,children:e.jsxs(Mn,{className:n,children:[e.jsx(Vn,{justify:s?"center":"start",children:e.jsxs(Dn,{className:s?"hiddenn":"block text-white",children:[e.jsx(w,{to:"/",children:e.jsx(Bn,{children:"Hhtrungquoc.tv"})}),e.jsx(w,{to:"/",children:e.jsx(Fn,{children:"tromphim.netify.app"})})]})}),e.jsx("div",{className:"mt-[50px]",children:a?e.jsx(mt,{size:"large",children:void 0}):e.jsx(Un,{className:"sideBarActive",children:t&&t.map((r,i)=>e.jsx(je,{title:r.name,to:r.path=="/"?r.path:r.path+`/${r._id}`,children:e.jsxs(Hn,{state:s,children:[e.jsx(qn,{children:ps[i]}),e.jsx(Wn,{className:s?"hiddenn":"block",children:r.name})]})},i))})}),e.jsx(Zn,{})]})})},er=c.div`
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
`,tr=({children:t,...a})=>{var n;const{background:s}=o.useContext(W)||{};return e.jsx(er,{background:s&&((n=s==null?void 0:s.data)==null?void 0:n.url),...a,children:t})},ar=()=>{const{state:t}=o.useContext(P)||{};return e.jsxs(tr,{className:"text-start",children:[e.jsx("div",{children:e.jsx(Kn,{})}),e.jsxs("div",{className:"containers flex",children:[e.jsx("div",{className:t?"w-1/12":"w-2/12",children:e.jsx(Qn,{})}),e.jsx("div",{className:`${t?"w-11/12":"w-10/12"} p-2`,children:e.jsx(st,{})})]}),e.jsx("div",{children:e.jsx(Xn,{})})]})},m=({children:t})=>e.jsx(o.Suspense,{fallback:e.jsx(xt,{}),children:t});const sr=c(rt)`
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
`,qe=o.memo(({columns:t,dataSource:a,...s})=>e.jsx(sr,{columns:t,dataSource:a,...s,bordered:!0,size:"middle"})),nr=o.memo(({name:t,label:a,control:s,rules:n,...r})=>e.jsxs("div",{className:"mb-3",children:[e.jsx(k,{htmlFor:t,children:a}),e.jsx(ra,{name:t,control:s,rules:n,defaultValue:"",render:({field:i})=>e.jsx(ia,{placeholder:a,...i,...r})})]})),rr=o.memo(({title:t,cancelText:a,okText:s,onConfirm:n,children:r,...i})=>{const l=()=>{z("Hủy")};return e.jsx(oa,{title:t,onCancel:l,onConfirm:n,okText:s,cancelText:a,...i,children:r})}),ir=()=>{const{weeks:t}=o.useContext(W),{handleSubmit:a,control:s}=it(),n=async(u,h)=>{const y={categoryId:h};try{(await bs(u,y)).data&&(ot(L+"/weeks"),G("Delete Success"))}catch{z("Delete Failure")}},r=async u=>{await js(u)},i=async u=>{await vs(u)},l=u=>{var j;const h=[{title:"ID",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"operation",render:(f,C)=>e.jsx(e.Fragment,{children:e.jsx(rr,{title:"Delete the category",onConfirm:()=>n(u.key,C._id),okText:"Yes",cancelText:"No",children:e.jsx(T,{type:"text",shape:"circle",className:"ml-2",children:e.jsx(la,{})})})})}],y=((j=t.find(f=>f._id===u.key))==null?void 0:j.category)||[];return e.jsx(qe,{columns:h,dataSource:y,pagination:!1})},x=t&&t.map((u,h)=>({key:u._id,name:u.name,action:e.jsxs(e.Fragment,{children:[e.jsx(w,{to:`/dashboard/week/edit/${u._id}`,children:e.jsx(T,{type:"primary",children:"Edit"})}),e.jsx(T,{onClick:()=>i(u._id),className:"ml-1",children:"Delete"})]})}));return e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:a(r),children:e.jsxs(_,{gutter:4,align:"middle",justify:"center",children:[e.jsx(g,{span:22,children:e.jsx(nr,{name:"name",label:"Theo tuần",control:s,rules:void 0})}),e.jsx(g,{span:2,children:e.jsx(T,{htmlType:"submit",className:"mt-3",type:"primary",children:"Thêm"})})]})}),e.jsx(qe,{columns:gs,dataSource:x,expandable:{expandedRowRender:l,defaultExpandedRowKeys:["0"]}})]})},or=()=>e.jsxs("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]",children:[e.jsx("h1",{className:"text-9xl font-extrabold text-white tracking-widest",children:"404"}),e.jsx("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute",children:"Page Not Found"}),e.jsx("button",{className:"mt-5",children:e.jsxs("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring",children:[e.jsx("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),e.jsx("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current",children:e.jsx(w,{to:"/",children:"Go Home"})})]})})]}),lr=c.button`
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

`,vt=o.memo(({onSubmit:t,formTitle:a,formDescription:s,submitButtonText:n,formIntro:r,formHeader:i,checkedAccount:l,handleMessage:x,redirect:u,array:h,schemaPage:y})=>{const{register:j,handleSubmit:f,formState:{errors:C}}=it({resolver:da(y)});return e.jsx("div",{className:"h-screen relative z-0",children:e.jsxs(ur,{className:"g-6 flex flex-wrap justify-center w-full items-center absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4",style:{transform:"translate(-50%,-50%)"},children:[e.jsxs("div",{className:"w-8/12 items-center text-white hidden lg:block md:hidden",children:[e.jsx(yr,{className:"text-[50px] ",children:i}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(pr,{className:"w-2/12",children:r}),e.jsx(gr,{className:"w-10/12"})]})]}),e.jsxs("div",{className:"md:w-8/12 lg:w-4/12 w-full lg:p-5 md:p-4 p-3",style:{background:"rgba(248, 248, 248, 0.04)",borderRadius:" 5px"},children:[e.jsxs("div",{children:[e.jsx(xr,{children:a}),e.jsx(mr,{children:s})]}),e.jsxs(cr,{onSubmit:f(t),children:[h&&h.map((N,R)=>e.jsx("div",{className:"relative lg:mb-6 md:mb-4 mb-2","data-te-input-wrapper-init":!0,children:e.jsxs("div",{children:[e.jsx(dr,{disabled:N.disable,style:{background:`${N.disable?"#99979742":""}`},type:N.type,...j(`${N.field}`),placeholder:N.field,className:"placeholder:capitalize"}),C&&C[N.field]&&e.jsx("div",{className:"text-sm text-pink-600 mt-1",children:C[N.field].message})]})},R)),e.jsx("div",{className:"lg:mb-6 md:mb-5 mb-4",children:e.jsx(Ye,{to:"/forgot-password",children:e.jsxs("div",{className:"text-center text-white text-sm font-medium text-primary-600 hover:underline text-primary-500",children:["Forgot password?"," "]})})}),e.jsx(lr,{type:"submit",className:"w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600",children:n}),e.jsx("div",{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:e.jsxs("p",{className:"mx-4 mb-0 text-center text-white text-[12px]",children:[" ","OR"]})}),e.jsx(hr,{className:"flex justify-center",onClick:x,children:e.jsx(U,{style:{width:"30px",height:"30px"},src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:""})}),e.jsx("div",{className:"lg:mb-6 md:mb-4 mb-2 text-center lg:mt-5 md:mt-3 mt-2 text-slate-400 ",children:e.jsx(w,{to:u,className:"text-sm text-primary-600 hover:underline text-primary-500",children:l})})]})]})]})})}),fr=[{type:"email",field:"email",disable:!1}],jr=()=>{const t=q(),a=lt().shape({email:ue().required().email()}),s=async r=>{const i=await Ga(r);i.data.success?(G(i.data.message),t("/signin")):z(i.data.message)},n=()=>{M.success("Đang cập nhật!")};return e.jsx(vt,{onSubmit:s,formTitle:"Forgot Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:n,redirect:"/forgot-password",array:fr,schemaPage:a})},vr=[{type:"password",field:"password",disable:!1},{type:"password",field:"repassword",disable:!1}],wr=()=>{const t=q(),{id:a,token:s}=ve(),n=lt().shape({password:ue().required().min(6,"Password tối thiểu 6 kí tự"),repassword:ue().required().oneOf([ca("password"),null],"Passwords must match")}),r=async l=>{const x=await Ya(a,s,l);x.data.success?(G(x.data.message),t("/signin")):z(x.data.message)},i=()=>{M.success("Đang cập nhật!")};return e.jsx(vt,{onSubmit:r,formTitle:"Reset Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:i,redirect:"/reset-password",array:vr,schemaPage:n})},br=()=>{const t=["#eb2f96","#52c41a","#eba12f"],{data:{data:a}}=$(L+"/category/latest"),s=[{title:"Name",dataIndex:"name",key:"name",render:i=>e.jsx("p",{children:i})},{title:"Action",key:"action",render:(i,l,x)=>e.jsx(T,{type:"text",shape:"circle",className:"ml-2",onClick:()=>n(l.key),children:e.jsx(we,{type:"success",style:{color:t[x]}})})}],n=async i=>{const l={id:i},{data:x}=await Es(l);x.success===!0&&(G("Success"),ot(L+"/category/latest"))},r=a&&a.map((i,l)=>({key:i._id,name:i.name}));return e.jsx(rt,{columns:s,dataSource:r})},kr=()=>{const t=I(dn),{data:a}=$(L+"/most-watched-episodes"),{data:s}=$(L+"/rating/stats"),n={data:a.data,xField:"seri",yField:"view",point:{shapeField:"square",sizeField:4},interaction:{tooltip:{marker:!1}},style:{lineWidth:2}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-around gap-2",children:[e.jsx(J,{className:"w-full",children:e.jsx(K,{title:"Active Users",prefix:e.jsx(ee,{}),value:t.length})}),e.jsx(J,{bordered:!0,className:"w-full",children:e.jsx(K,{title:"Comment",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:e.jsx(we,{}),suffix:"%"})}),e.jsx(J,{bordered:!1,className:"w-full",children:e.jsx(K,{title:"View",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:e.jsx(ua,{}),suffix:"%"})}),e.jsx(J,{className:"w-full",children:e.jsx(K,{title:"Rating Video",prefix:e.jsx(xa,{}),value:s.totalRatings})})]}),e.jsx("div",{className:"flex justify-between gap-2",children:e.jsx(ma,{className:"w-5/12",...n})})]})},Cr=o.lazy(()=>v(()=>import("./index-6c10d9ae.js"),["assets/index-6c10d9ae.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Nr=o.lazy(()=>v(()=>import("./index-f06c6775.js"),["assets/index-f06c6775.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css","assets/index-55d65e1a.js"])),Sr=o.lazy(()=>v(()=>import("./index-a47385cf.js"),["assets/index-a47385cf.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css","assets/index-55d65e1a.js","assets/index-45450d70.js"])),_r=o.lazy(()=>v(()=>Promise.resolve().then(()=>Yn),void 0)),Ar=o.lazy(()=>v(()=>import("./Profile-06f3fc11.js"),["assets/Profile-06f3fc11.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Tr=o.lazy(()=>v(()=>import("./Sign-in-abc64076.js"),["assets/Sign-in-abc64076.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Ir=o.lazy(()=>v(()=>import("./Sign-up-23670f43.js"),["assets/Sign-up-23670f43.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Lr=o.lazy(()=>v(()=>import("./index-b0615e20.js"),["assets/index-b0615e20.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),$r=o.lazy(()=>v(()=>import("./add-32377d4a.js"),["assets/add-32377d4a.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Pr=o.lazy(()=>v(()=>import("./edit-faf06a50.js"),["assets/edit-faf06a50.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Er=o.lazy(()=>v(()=>import("./admin-bbfdbd8c.js"),["assets/admin-bbfdbd8c.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Rr=o.lazy(()=>v(()=>import("./add-abc2cb52.js"),["assets/add-abc2cb52.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css","assets/index-a6df6099.js","assets/index-531dfc8e.js"])),zr=o.lazy(()=>v(()=>import("./edit-cecbb41d.js"),["assets/edit-cecbb41d.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css","assets/index-a6df6099.js","assets/index-531dfc8e.js"])),Or=o.lazy(()=>v(()=>import("./adds-43e551d4.js"),["assets/adds-43e551d4.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Dr=o.lazy(()=>v(()=>import("./creatingProducts-5fb16cef.js"),["assets/creatingProducts-5fb16cef.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css","assets/index-531dfc8e.js"])),Br=o.lazy(()=>v(()=>import("./index-c29a0633.js"),["assets/index-c29a0633.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css","assets/type-c2aa69c0.js","assets/index-a6df6099.js","assets/index-531dfc8e.js"])),Fr=o.lazy(()=>v(()=>import("./edit-44003e17.js"),["assets/edit-44003e17.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css","assets/index-531dfc8e.js","assets/index-a6df6099.js"])),Mr=o.lazy(()=>v(()=>import("./index-ceb74da9.js"),["assets/index-ceb74da9.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Vr=o.lazy(()=>v(()=>import("./edit-0bd04bad.js"),["assets/edit-0bd04bad.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Ur=o.lazy(()=>v(()=>import("./index-84110465.js"),["assets/index-84110465.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Hr=o.lazy(()=>v(()=>import("./index-17b3ee0c.js"),["assets/index-17b3ee0c.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),qr=o.lazy(()=>v(()=>import("./index-169ee410.js"),["assets/index-169ee410.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Wr=o.lazy(()=>v(()=>import("./index-30d903f4.js"),["assets/index-30d903f4.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css","assets/index-45450d70.js","assets/index-55d65e1a.js"])),Gr=o.lazy(()=>v(()=>import("./index-e2426875.js"),["assets/index-e2426875.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css","assets/type-c2aa69c0.js"])),Yr=o.lazy(()=>v(()=>import("./CatemainProduct-115c5317.js"),["assets/CatemainProduct-115c5317.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Jr=o.lazy(()=>v(()=>import("./index-7f945abf.js"),["assets/index-7f945abf.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Kr=o.lazy(()=>v(()=>import("./edit-be0d688c.js"),["assets/edit-be0d688c.js","assets/vendor-2321f3a2.js","assets/vendor-a68139d3.css"])),Xr=[{path:"/",name:"Trang chủ",title:"Trang chủ"},{path:"/signin",name:"Đăng nhập",title:"Đăng nhập"},{path:"/signup",name:"Đăng kí",title:"Đăng kí"},{path:"/complete",name:"Hoàn Thành",title:"Hoàn Thành"}],Zr=[{path:"/",name:"Trang chủ"},{path:"/profile",name:"Hồ sơ",title:"Hồ sơ"},{path:"/complete",name:"Hoàn Thành",title:"Hoàn Thành"}],Qr=[{path:"/",element:e.jsx(ar,{}),children:[{path:"/",element:e.jsx(Vs,{}),index:!0},{path:"d/:id",element:e.jsx(m,{children:e.jsx(bn,{})})},{path:"q/:id",element:e.jsx(m,{children:e.jsx(Sn,{})})},{path:"search/category",element:e.jsx(m,{children:e.jsx(_r,{})})},{path:"cart/user",element:e.jsx(m,{children:e.jsx(Hr,{})})},{path:"movie-content/:id",element:e.jsx(m,{children:e.jsx(Sr,{})})},{path:"types/h/:id",element:e.jsx(m,{children:e.jsx(Nr,{})})},{path:"loadmore",element:e.jsx(m,{children:e.jsx(Wr,{})})},{path:"signup",element:e.jsx(m,{children:e.jsx(Ir,{})})},{path:"signin",element:e.jsx(m,{children:e.jsx(Tr,{})})},{path:"forgot-password",element:e.jsx(m,{children:e.jsx(jr,{})})},{path:"reset-password/:id/:token",element:e.jsx(m,{children:e.jsx(wr,{})})},{path:"profile",element:e.jsx(m,{children:e.jsx(Ar,{})})}]},{path:"dashboard",element:e.jsx($n,{children:e.jsx(Ln,{})}),children:[{path:"",element:e.jsx(m,{children:e.jsx(kr,{})}),index:!0},{path:"products",element:e.jsx(m,{children:e.jsx(Cr,{})})},{path:"users",element:e.jsx(m,{children:e.jsx(Lr,{})})},{path:"adminUer",element:e.jsx(m,{children:e.jsx(Er,{})})},{path:"users/:id/edit",element:e.jsx(m,{children:e.jsx(Pr,{})})},{path:"user/add",element:e.jsx(m,{children:e.jsx($r,{})})},{path:"user/creatingUser",element:e.jsx(m,{children:e.jsx(Or,{})})},{path:"product/add",element:e.jsx(m,{children:e.jsx(Rr,{})})},{path:"product/edit/:id",element:e.jsx(m,{children:e.jsx(zr,{})})},{path:"product/creacting",element:e.jsx(m,{children:e.jsx(Dr,{})})},{path:"category",element:e.jsx(m,{children:e.jsx(Br,{})})},{path:"category/edit/:id",element:e.jsx(m,{children:e.jsx(Fr,{})})},{path:"category/latest",element:e.jsx(m,{children:e.jsx(br,{})})},{path:"trailing",element:e.jsx(m,{children:e.jsx(Mr,{})})},{path:"trailerUrl/:id",element:e.jsx(m,{children:e.jsx(Vr,{})})},{path:"comments",element:e.jsx(m,{children:e.jsx(Ur,{})})},{path:"cart",element:e.jsx(m,{children:e.jsx(qr,{})})},{path:"types",element:e.jsx(m,{children:e.jsx(Gr,{})})},{path:"types/CateMainProduct/:id",element:e.jsx(m,{children:e.jsx(Yr,{})})},{path:"background",element:e.jsx(m,{children:e.jsx(Jr,{})})},{path:"background/edit/:id",element:e.jsx(m,{children:e.jsx(Kr,{})})},{path:"weeks",element:e.jsx(m,{children:e.jsx(ir,{})})}]},{path:"/*",element:e.jsx(or,{})}],ei=[{path:"/dashboard",name:"Admin",icon:e.jsx(ha,{})},{path:"/dashboard/products",name:"Movies",icon:e.jsx(pa,{})},{name:"User",icon:e.jsx(Le,{}),children:[{path:"/dashboard/users",name:"Users",icon:e.jsx(ee,{})},{path:"/dashboard/adminUer",name:"Admin",icon:e.jsx($e,{})}]},{name:"Category",icon:e.jsx(Le,{}),children:[{path:"/dashboard/category",name:"Category",icon:e.jsx(ga,{})},{path:"/dashboard/category/latest",name:"Latest",icon:e.jsx(we,{})}]},{name:"Themes",icon:e.jsx(nt,{}),children:[{path:"/dashboard/trailing",name:"Trailer",icon:e.jsx($e,{})},{path:"/dashboard/background",name:"Background",icon:e.jsx(ya,{})}]},{name:"Big Category",icon:e.jsx(Ke,{}),children:[{path:"/dashboard/types",name:"Types",icon:e.jsx(fa,{})}]},{path:"/dashboard/comments",name:"Comments",icon:e.jsx(ja,{})},{path:"/dashboard/cart",name:"Cart",icon:e.jsx(va,{})},{path:"/dashboard/weeks",icon:e.jsx(Qe,{}),name:"Week"}],ti=wa`
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

`,We=t=>{if(!t)return!0;try{const a=ba(t),s=Date.now()/1e3;return a.exp<s}catch(a){return console.error("Error decoding token:",a),!0}};function ai(){const t=Ze(),a="G-0EEY3R7F0S",s=ka(Qr),n=q(),[r,i]=Ca.useNotification(),l=A();return o.useEffect(()=>{Pe.initialize(a),Pe.send({hitType:"pageview",page:t.pathname,title:"User Active"}),(async()=>{if(l){const x=l.token,u=l.refreshToken;if(We(u))jt("Token expires-relogin"),localStorage.clear(),n("/signin");else if(We(x)){const h={refreshToken:l.refreshToken},{data:y}=await Ja(h);localStorage.setItem("token",JSON.stringify(y))}}})(),setTimeout(()=>{r.open({message:"Admin Xin Thông Báo!",description:"Xin lỗi, server phim hiện đang quá tải do lượng truy cập lớn. Vui lòng chờ đợi trong 1-2 phút để tiếp tục xem. Chúng tôi đang nỗ lực để cải thiện tình hình và xin thành thật xin lỗi vì sự bất tiện này.Trân trọng!",placement:"topRight"})},2e3)},[]),e.jsxs(e.Fragment,{children:[i,s,e.jsx(ti,{}),e.jsx(Na,{}),e.jsx(Sa.BackTop,{visibilityHeight:200})]})}const si={value:{data:[],totalCount:0,totalPages:0},isLoading:!1,getOneProduct:{},getAllProductByCategory:[],status:!1},ni=F({name:"product",initialState:si,reducers:{},extraReducers:t=>{t.addCase(Me.pending,(a,s)=>{a.isLoading=!0}).addCase(Me.fulfilled,(a,s)=>{a.isLoading=!1,a.value=s.payload}),t.addCase(Qs.fulfilled,(a,s)=>{a.value.data=a.value.data.filter(n=>n._id!==s.payload.data._id)}),t.addCase(en.fulfilled,(a,s)=>{a.value.data.push(s.payload)}),t.addCase(tn.fulfilled,(a,s)=>{a.value.data.push(s.payload)}),t.addCase(an.fulfilled,(a,s)=>{a.value.data=[...a.value.data,s.payload]}),t.addCase(nn.fulfilled,(a,s)=>{a.value.data=s.payload}),t.addCase(rn.fulfilled,(a,s)=>{a.value.data=s.payload}),t.addCase(ge.pending,(a,s)=>{a.isLoading=!0}).addCase(ge.fulfilled,(a,s)=>{a.isLoading=!1,a.getOneProduct=s.payload}),t.addCase(sn.fulfilled,(a,s)=>{a.getAllProductByCategory=s.payload}),t.addCase(on.fulfilled,(a,s)=>{a.value.data=[...a.value.data,...s.payload.data]})}}),ri=ni.reducer,ii={category:{data:[],length:0},isLoading:!1,isError:!1,categoryNotReqId:[],details:{}},oi=F({name:"category",initialState:ii,reducers:{},extraReducers:t=>{t.addCase(Z.fulfilled,(a,s)=>{a.isLoading=!1,a.category=s.payload}).addCase(Z.pending,(a,s)=>{a.isLoading=!0}).addCase(Z.rejected,(a,s)=>{a.isError=!0}),t.addCase(Fe.fulfilled,(a,s)=>{a.isLoading=!1,a.categoryNotReqId=s.payload}).addCase(Fe.pending,(a,s)=>{a.isLoading=!0}),t.addCase(Rs.fulfilled,(a,s)=>{a.category.data=a.category.data.concat(s.payload)}),t.addCase(zs.fulfilled,(a,s)=>{a.category.data=a.category.data.filter(n=>n._id!==s.payload._id)}),t.addCase(Os.fulfilled,(a,s)=>{a.category.data.push(s.payload)}),t.addCase(pe.fulfilled,(a,s)=>{a.details=s.payload,a.isLoading=!1}).addCase(pe.pending,(a,s)=>{a.isLoading=!0})}}),li=oi.reducer,Yi=async()=>await d.get("/trailer"),ne=A(),di=async t=>await d.put(`/trailer/${t.get("_id")}/${ne.user._id}`,t,{headers:{Authorization:`Bearer ${ne.token}`}}),Ji=async t=>await d.post(`/background/${t.get("_id")}/${ne.user._id}`,t,{headers:{Authorization:`Bearer ${ne.token}`}}),ci=p("trailer/Trailing",async t=>{const{data:a}=await di(t);return a}),ui=F({name:"post",initialState:{value:[],trailerValues:[]},reducers:{},extraReducers:t=>{t.addCase(ci.fulfilled,(a,s)=>{a.trailerValues.push(s.payload)})}}),xi=ui.reducer,re=A(),mi=async()=>await d.get("/comments"),hi=async(t,a)=>await d.post(`/comment/${t}/${re.user._id}`,a,{headers:{Authorization:`Bearer ${re.token}`}}),pi=async t=>await d.post(`/comment/${re.user._id}`,t,{headers:{Authorization:`Bearer ${re.token}`}}),gi=p("getAllCommentSlice",async()=>{const{data:t}=await mi();return t}),yi=p("addCommentSlice",async t=>{const{data:a}=await hi(t.product,t);return a}),fi=p("deleteComment",async t=>{const{data:a}=await pi(t);return a}),ji=F({name:"comment",initialState:{value:[]},reducers:{},extraReducers:t=>{t.addCase(gi.fulfilled,(a,s)=>{a.value=s.payload}),t.addCase(yi.fulfilled,(a,s)=>{a.value.push(s.payload)}),t.addCase(fi.fulfilled,(a,s)=>{a.value=a.value.filter(n=>n._id!==s.payload._id)})}}),vi=ji.reducer,wi=F({name:"cart",initialState:{value:[],isLoading:!1,code:null},reducers:{},extraReducers:t=>{t.addCase(Re.fulfilled,(a,s)=>{a.isLoading=!1,a.value=s.payload}).addCase(Re.pending,(a,s)=>{a.isLoading=!0}),t.addCase(xe.pending,(a,s)=>{a.isLoading=!0}).addCase(xe.fulfilled,(a,s)=>{Array.isArray(a.value)||(a.value=[]),a.isLoading=!1,a.value.push(s.payload.cart)})}}),bi=wi.reducer,ki={key:"root",storage:La,whitelist:[""],expire:"3600000"},Ci=_a({product:ri,user:rs,category:li,trailer:xi,comment:vi,cart:bi}),Ni=Aa(ki,Ci),wt=Ta({reducer:Ni,middleware:t=>t({serializableCheck:!1})}),Si=Ia(wt);$a.createRoot(document.getElementById("root")).render(e.jsx(Pa,{store:wt,children:e.jsx(Ea,{persistor:Si,children:e.jsx(ks,{children:e.jsx(is,{children:e.jsx(Ra,{children:e.jsx(ai,{})})})})})}));export{se as $,W as A,Ai as B,us as C,Ue as D,Be as E,vt as F,le as G,ze as H,dn as I,es as J,Oi as K,ls as L,P as M,ht as N,Oe as O,nr as P,me as Q,as as R,mt as S,Gi as T,ts as U,zi as V,Z as W,en as X,D as Y,U as Z,E as _,V as a,ge as a0,tn as a1,Fi as a2,ss as a3,an as a4,Wi as a5,$i as a6,Rs as a7,zs as a8,pe as a9,Os as aa,_s as ab,k as ac,Ei as ad,Yi as ae,ci as af,gi as ag,Pi as ah,fi as ai,Qa as aj,pt as ak,Re as al,Ti as am,Li as an,Bi as ao,A as ap,d as aq,Ri as ar,Ii as as,Ji as at,ae as b,T as c,_ as d,g as e,rr as f,Me as g,w as h,qe as i,nn as j,Di as k,Hi as l,qi as m,Ui as n,G as o,z as p,on as q,Qs as r,rn as s,Mi as t,I as u,Vi as v,$ as w,ds as x,Ns as y,L as z};
