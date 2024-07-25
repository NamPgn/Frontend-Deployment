import{u as St,a as _t,b as Xe,c as p,d as F,m as V,r as o,j as e,T as At,e as Tt,s as u,S as It,f as Lt,L as Ze,D as Pt,g as $t,H as Qe,B as Et,A as et,R as Rt,h as zt,F as Ot,W as Dt,i as Bt,k as Ft,l as Vt,P as tt,n as Mt,C as Ut,o as Ht,p as qt,N as we,q as Wt,t as te,v as Gt,E as Yt,w as le,x as Jt,y as be,z as Le,G as Kt,I as q,J as Xt,K as st,M as Zt,O as W,Q as Pe,U as $e,V as Qt,X as se,Y as at,Z as es,_ as ue,$ as xe,a0 as nt,a1 as rt,a2 as it,a3 as Ee,a4 as ts,a5 as ss,a6 as as,a7 as ns,a8 as ot,a9 as rs,aa as is,ab as lt,ac as os,ad as ls,ae as ds,af as dt,ag as cs,ah as us,ai as ct,aj as me,ak as xs,al as ke,am as ms,an as X,ao as Z,ap as hs,aq as ps,ar as gs,as as ys,at as fs,au as Re,av as ze,aw as js,ax as vs,ay as ws,az as bs,aA as ks,aB as Cs,aC as Ns,aD as Ss,aE as Oe,aF as _s,aG as As,aH as Ts,aI as Is,aJ as Ls,aK as Ps,aL as $s,aM as Es,aN as Rs,aO as zs,aP as Os}from"./vendor-6b39dd86.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const Ds="modulepreload",Bs=function(t){return"/"+t},De={},v=function(s,a,r){if(!a||a.length===0)return s();const n=document.getElementsByTagName("link");return Promise.all(a.map(i=>{if(i=Bs(i),i in De)return;De[i]=!0;const l=i.endsWith(".css"),x=l?'[rel="stylesheet"]':"";if(!!r)for(let y=n.length-1;y>=0;y--){const j=n[y];if(j.href===i&&(!l||j.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${x}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":Ds,l||(m.as="script",m.crossOrigin=""),m.href=i,document.head.appendChild(m),l)return new Promise((y,j)=>{m.addEventListener("load",y),m.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>s()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})},L=()=>{const t=localStorage.getItem("token");if(t)return JSON.parse(t||"")},M=()=>St(),I=_t,d=Xe.create({baseURL:"https://node-4-mhqo.onrender.com/api"}),Fs=Xe.create({baseURL:"https://node-3-uodg.onrender.com/api"}),H=L(),Vs=async t=>await d.post("/signup",t),Ms=async t=>await d.post("/signin",t),ut=async()=>await d.get("user"),Us=async t=>await d.get("user_one/"+t),Hs=async t=>await d.delete("removeUser/"+t+`/${H.user._id}`,{headers:{Authorization:`Bearer ${H.token}`}}),qs=async t=>await d.put(`user/${t._id}/${H.user._id}`,t,{headers:{Authorization:`Bearer ${H.token}`}}),Ws=async t=>await d.post("user/creating",t),Gs=async t=>await d.get(`user/cart/${t}`),Ys=async(t,s)=>await d.post(`/user/upload/${t}`,s,{headers:{Authorization:`Bearer ${H.token}`}}),Js=async t=>await d.post("/forgot-password",t),Ks=async(t,s,a)=>await d.post(`/reset-password/${t}/${s}`,a),Xs=async t=>await d.post("/refreshToken",t),ae=L(),Zs=async()=>await d.get("/cart"),Qs=async t=>await d.post(`/cart/${ae.user._id}`,t,{headers:{Authorization:`Bearer ${ae.token}`}}),ea=async(t,s)=>await d.post(`/cart/${t}/${ae.user._id}`,s,{headers:{Authorization:`Bearer ${ae.token}`}}),Be=p("cartSlice",async()=>{const{data:t}=await Zs();return t}),he=p("addCartSlice",async t=>{const{data:s}=await Qs(t);return s}),ta=p("deleteCartSlice",async t=>{const{data:s,status:a}=await ea(t.id,t);return s.data}),Fe=p("user/login",async t=>{const{data:s}=await Vs(t);return s}),ce=p("user/signin",async t=>{const{data:s,status:a}=await Ms(t);return s}),sa=p("user/getAll",async()=>{const{data:t}=await ut();return t.filter(a=>a.role==0)}),pe=p("user/getUser_id",async t=>{const{data:s}=await Us(t);return s}),aa=p("admin/getAdmin",async()=>{const{data:t}=await ut();return t.filter(a=>a.role>=1)}),Ve=p("user/deteleUser",async t=>{const{data:s}=await Hs(t);return s}),na=p("edit/editUser",async t=>{const{data:s}=await qs(t);return s}),ra=p("user/importXlsx",async t=>{const{data:s}=await Ws(t);return s}),Me=p("findcart",async t=>{const{data:s}=await Gs(t);return s.cart}),Ue=p("uploadImage",async({id:t,formData:s})=>{const{data:a,status:r}=await Ys(t,s);return a}),xt=F({name:"user",initialState:{value:[],cartUser:[],isLoading:!1,error:!1,login:{},isLogin:localStorage.getItem("isLogin")==="true",user:{}},reducers:{logout(t){localStorage.removeItem("token"),V.success("Logout successful!"),t.isLogin=!1,localStorage.setItem("isLogin","false"),t.user={}}},extraReducers:t=>{t.addCase(Fe.fulfilled,(s,a)=>{s.error=!1,s.value=a.payload.newUser}).addCase(Fe.rejected,(s,a)=>{s.error=!0}),t.addCase(ce.pending,(s,a)=>{s.isLoading=!0}).addCase(ce.fulfilled,(s,a)=>{localStorage.setItem("token",JSON.stringify(a.payload)),s.login=a.payload,s.error=!1,s.isLogin=!0,s.isLoading=!1,s.user=a.payload.user,localStorage.setItem("isLogin","true")}).addCase(ce.rejected,(s,a)=>{s.error=a.payload,s.isLoading=!1}),t.addCase(sa.fulfilled,(s,a)=>{s.value=a.payload}),t.addCase(Ve.fulfilled,(s,a)=>{s.value=s.value.filter(r=>r._id!==a.payload._id)}).addCase(Ve.rejected,(s,a)=>{}),t.addCase(aa.fulfilled,(s,a)=>{s.value=a.payload}),t.addCase(na.fulfilled,(s,a)=>{s.value.push(a.payload)}),t.addCase(ra.fulfilled,(s,a)=>{s.value.unshift(a.payload)}),t.addCase(Me.pending,(s,a)=>{s.isLoading=!0}).addCase(Me.fulfilled,(s,a)=>{s.isLoading=!1,s.cartUser=a.payload}),t.addCase(pe.fulfilled,(s,a)=>{s.user=a.payload,s.isLoading=!1}).addCase(pe.pending,(s,a)=>{s.isLoading=!0}),t.addCase(Ue.fulfilled,(s,a)=>{s.isLoading=!1,s.user=a.payload.data}).addCase(Ue.pending,(s,a)=>{s.isLoading=!0}),t.addCase(ta.fulfilled,(s,a)=>{const r=s.user.cart.filter(n=>n.product._id!==a.payload.product);s.user.cart=r})}}),{logout:ia}=xt.actions,oa=xt.reducer,Q=L(),$=o.createContext(null),la=t=>{const s=M(),{user:a}=I(j=>j.user),r=localStorage.getItem("isLogin"),n=I(j=>j.user.isLogin),[i,l]=o.useState(!1),[x,c]=o.useState(!1),m=()=>{c(!x)};o.useEffect(()=>{Q&&s(pe(Q.user._id))},[n,s,i]);const y={Auth:Q||"",user:a,isLoggedIn:r,isLoggedInState:n,setReset:l,handleClick:m,state:x};return e.jsx($.Provider,{value:y,children:t.children})},b=o.memo(({level:t,children:s,...a})=>e.jsx(At,{...a,children:s})),ne=({color:t,children:s,...a})=>e.jsx(Tt,{color:t,...a,children:s}),da=u.div`
height: 100vh;
`,mt=u.div`
position: relative;
height: 100vh;
justify-content: center;
display: flex;
&>*{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
`,ht=()=>e.jsx(da,{}),ca=()=>{const{state:t}=o.useContext($)??{};return e.jsx(It,{className:t?"w-11/12":"w-10/12",active:!0,title:{width:"20%"},paragraph:{rows:8,width:[300,200,400,100]},loading:!0,style:{height:"100vh",padding:"0 30px"}})},ua=()=>e.jsx(mt,{children:e.jsx(b,{type:"danger",children:"Lỗi rồi kiểm tra lại mạng của bạn hoặc tải lại trang..."})}),Ce=({size:t,children:s})=>e.jsx(mt,{className:"w-full",children:e.jsxs("div",{role:"status",children:[e.jsxs("svg",{className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]})}),pt=()=>e.jsx(ne,{color:"#108ee9",className:"mx-2",children:"Empty"}),gt=()=>e.jsx("p",{className:"text-white",children:"Trống!"}),xa=async t=>await d.get(t),A=t=>{const{data:s,error:a,mutate:r}=Lt(t,xa);return{data:s?s.data:"",isLoading:!s&&!a,isError:a,mutate:r}},T="https://node-4-mhqo.onrender.com/api",ma=(t,s)=>{t(ia()),s("/")},w=({to:t,children:s,...a})=>e.jsx(Ze,{to:t,...a,className:"link",children:s}),re=o.memo(({textColor:t,orientation:s,children:a,...r})=>e.jsx(Pt,{style:{color:t,borderBlockStartColor:"#999"},className:"text-white",orientation:s,...r,children:a})),U=({src:t,alt:s,style:a,...r})=>e.jsx("img",{loading:"lazy",src:t,className:"m-5 w-full h-full",style:a,alt:s,...r}),E=(t,s)=>{const a=s?s.split("/"):null,r=a==null?void 0:a.indexOf("upload");return r!==-1&&(a==null||a.splice(r+1,0,`w_${t}/f_webp`)),a==null?void 0:a.join("/")},ha=u.div`
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius:10px;
}
::-webkit-scrollbar {
  width: 2px;
}
`,pa=u.div`
background: rgb(28, 28, 30);
border-radius: 10px;
margin: 5px 0px;
`,ga=()=>{const{data:{data:t}}=A("/category/filters");return e.jsxs("div",{className:"rounded des w-3/12 relative overflow-hidden lg:block md:hidden hidden bg-[#0000005e]",children:[e.jsx(re,{className:"m-0",textColor:"#fff",orientation:"left",children:"Xem thêm"}),e.jsx(ha,{className:"absolute h-full w-full px-2 overflow-scroll",children:t&&(t==null?void 0:t.map((s,a)=>e.jsxs(pa,{className:"flex lg:gap-1 my-2 py-2",children:[e.jsx("div",{className:"w-3/12",children:e.jsx(w,{to:"/q/"+s._id,children:e.jsx(U,{className:"m-0 h-full",src:E(100,s.linkImg),alt:s.name})},a)}),e.jsxs("div",{className:"w-9/12",children:[e.jsx(w,{style:{textDecoration:"none",color:"#999",fontSize:"13px"},to:"/q/"+s._id,children:s.name},a),e.jsxs(ne,{color:"#108ee9",className:"text-[12px] text-[#999] my-2 block w-6/12 ",children:[" ",s.sumSeri+" Tập VietSub"]}),e.jsx(ne,{color:"#2db7f5",children:s.type?s.type:"null"}),e.jsx("div",{className:"text-sm text-gray-400 mt-2",children:e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(b,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(b,{className:"mr-2 text-gray-300",children:s.typecm}),e.jsxs(b,{className:"text-gray-400 text-sm",children:["(",s.time,")"]})]})})]})]},a)))})]})},yt=({content:t,settings:s})=>e.jsx($t,{...s,children:t}),_i=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],ya=[e.jsx(Qe,{}),e.jsx(Et,{}),e.jsx(et,{}),e.jsx(Rt,{}),e.jsx(zt,{}),e.jsx(Ot,{}),e.jsx(Dt,{}),e.jsx(Bt,{}),e.jsx(Ft,{})],Ai=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Action",dataIndex:"action",key:"action"}],Ti=[{title:"Url",dataIndex:"url",key:"url"},{title:"Image",dataIndex:"image",key:"image"},{title:"Action",dataIndex:"action",key:"action"}],Ii=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Path",dataIndex:"path",key:"path"},{title:"Product",dataIndex:"product",key:"product"},{title:"Categorymain",dataIndex:"categorymain",key:"categorymain"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"},{title:"Checked",dataIndex:"checked",key:"checked"}],Li=[{title:"Stt",dataIndex:"stt",key:"stt",width:50},{title:"Name",dataIndex:"name",key:"name",width:150},{title:"Image",dataIndex:"image",key:"Image",width:150},{title:"Duration",dataIndex:"duration",key:"duration",width:50},{title:"isActive",dataIndex:"isActive",key:"isActive",width:50},{title:"Year",dataIndex:"year",key:"year",width:50},{title:"Set",dataIndex:"set",key:"set",width:50},{title:"Week",dataIndex:"week",key:"week",width:50},{title:"Action",dataIndex:"action",key:"action",width:100}],Pi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Product",dataIndex:"product",key:"product"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Day",dataIndex:"day",key:"day"},{title:"Action",dataIndex:"action",key:"action"}],$i=[{title:"Id",dataIndex:"_id",key:"_id"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],Ei=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Image",dataIndex:"image",key:"image"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"}],Ri=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Role",dataIndex:"role",key:"role"},{title:"Status",dataIndex:"status",key:"status"},{title:"Image",dataIndex:"image",key:"image"}],zi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Image",dataIndex:"image",key:"image"},{title:"Status",dataIndex:"status",key:"status"},{title:"Role",dataIndex:"role",key:"role"},{title:"Action",key:"action",dataIndex:"action",with:150}],fa=[{title:"Name",dataIndex:"name",key:"name"},{title:"Action",dataIndex:"action",key:"action"}],ja={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},va={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!1,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2,dots:!0}}]},D=L(),wa=async t=>await d.post(`/week/${D.user._id}`,t,{headers:{Authorization:`Bearer ${D.token}`}}),ba=async t=>await d.delete(`/week/${t}/${D.user._id}`,{headers:{Authorization:`Bearer ${D.token}`}}),ka=async t=>await d.get(`/week?w=${t}`),Ca=async(t,s)=>await d.post(`/week/category/${t}/${D.user._id}`,s,{headers:{Authorization:`Bearer ${D.token}`}}),G=o.createContext(null),Na=t=>{const[s,a]=o.useState(1),{data:r}=A(T+"/weeks"),{data:n}=A(T+"/background"),{data:i,isLoading:l}=A(T+"/types"),{data:x,isLoading:c,isError:m}=A(T+"/categorymain"),y={seri:i,loadingSeri:l,categorymain:x,LoadingCateMain:c,isError:m,background:n,weeks:r,setPage:a,page:s};return e.jsx(G.Provider,{value:y,children:t.children})},z=o.memo(({level:t,children:s,...a})=>e.jsx(Vt,{level:t,...a,children:s})),ge=o.memo(({title:t,link:s,image:a,sumSeri:r,time:n,typecm:i,year:l,products:x})=>{const c=x?x[x.length-1]:"";return e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"relative group",children:e.jsxs(w,{to:s,className:"block",children:[e.jsx("div",{className:"relative w-full h-[200px] md:h-[250px] lg:h-[320px]",children:e.jsx(U,{src:E(300,a),alt:t,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-2 py-1 font-medium",children:c?`Tập ${c.seri}`:e.jsx(gt,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(tt,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4",children:e.jsx(w,{to:s,children:e.jsx(z,{level:5,style:{color:"#fff"},className:"text-xl md:text-2xl lg:text-3xl font-bold",children:t})})}),e.jsxs("div",{className:"text-sm text-gray-400 mt-2",children:[e.jsx("div",{className:"font-semibold",children:r?`${r} Tập`:""}),e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(b,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(b,{className:"mr-2 text-gray-300",children:i}),e.jsxs(b,{className:"text-gray-400 text-sm",children:["(",n,")"]})]}),e.jsx("div",{className:"font-semibold mt-2",children:l?`${l}`:""})]})]})});function Sa(){var j;const{weeks:t}=o.useContext(G)||{},s=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],r=new Date().getDay(),[n,i]=o.useState(!0),[l,x]=o.useState(s[r]),[c,m]=o.useState([]),y=f=>{x(f)};return o.useEffect(()=>{const f=async()=>{const{data:C}=await ka(l);m(C),i(!1)};i(!0),f()},[l]),e.jsxs("div",{className:"container mx-auto my-10",children:[e.jsx("div",{className:"px-4 lg:px-[150px] md:px-[100px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0",children:t&&t.map(f=>e.jsx("div",{className:l===f.name?"active border-none":"cursor-pointer",onClick:()=>y(f.name),children:e.jsx("div",{className:"text-[11px] md:text-[12px] lg:text-[14px] flex justify-center items-center px-4 py-2 text-white rounded-lg w-full",children:e.jsx("p",{children:f.name})})},f._id))}),e.jsx("div",{className:"my-5 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full",children:n?e.jsx(ht,{}):e.jsx(yt,{settings:ja,content:(j=c==null?void 0:c.content)==null?void 0:j.map(f=>e.jsx("div",{className:"px-2",children:e.jsx(ge,{title:f.name,link:"/q/"+f._id,image:f.linkImg,time:f.time,sumSeri:f.sumSeri,products:f.products})},f._id))})})]})}const _=o.memo(({gutter:t,justify:s,align:a,children:r,...n})=>e.jsx(Mt,{gutter:t,justify:s,align:a,...n,children:r})),g=({children:t,...s})=>e.jsx(Ut,{...s,children:t}),ft=o.memo(({type:t,gutter:s,child:a,...r})=>e.jsx(_,{gutter:s,children:t==="category"?a&&a.length&&a.map((n,i)=>e.jsx(g,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(ge,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,year:n.year,sumSeri:n.sumSeri,products:n.products})},n._id)):a&&a.length?a.map((n,i)=>e.jsx(g,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(ge,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,sumSeri:n.sumSeri})},n._id)):e.jsx(pt,{})})),B=L(),_a=async t=>await d.get(`/categorys?page=${t}`),Aa=async t=>await d.get(`/category/${t}`),Ta=async t=>await d.post(`/category/${B.user._id}`,t,{headers:{Authorization:`Bearer ${B.token}`}}),Ia=async t=>await d.delete(`/category/${t}/${B.user._id}`,{headers:{Authorization:`Bearer ${B.token}`}}),La=async t=>await d.post(`/category/${t.get("_id")}/${B.user._id}`,t,{headers:{Authorization:`Bearer ${B.token}`}}),Pa=async t=>await d.get("/category/getAllCategoryNotRequest/"+t),$a=async t=>await d.get(`/categorys/search?value=${t}`),Ea=async(t,s)=>await d.post("/rating/"+t,s),Ra=async t=>await d.post("/category/changeLatest",t),ee=p("category/getAllcate",async t=>{const{data:s}=await _a(t);return s}),ye=p("category/getOne",async t=>{const{data:s}=await Aa(t);return s}),He=p("getAll/Category",async t=>{const{data:s}=await Pa(t);return s}),za=p("add/Addcate",async t=>{const{data:s}=await Ta(t);return s}),Oa=p("delete/DeleteCate",async t=>{const{data:s}=await Ia(t);return s}),Da=p("update/Category",async t=>{const{data:s}=await La(t);return s}),jt=()=>{const{data:t}=I(r=>r.category.category),s=I(r=>r.category.isLoading);I(r=>r.category.isError);const a=M();return o.useEffect(()=>{a(ee(1))},[]),s?e.jsx("div",{className:"seriLoading",children:"Loading..."}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(z,{level:2,underline:!0,style:{color:"#fff"},strong:!0,className:"uppercase",children:"Xem Nhiều"}),e.jsx(w,{to:"/loadmore","aria-label":"Tải thêm nội dung",children:e.jsxs("div",{className:"text-[16px] text-[#fff] flex lg:text-[20px] md:text[18px] gap-3",children:[e.jsx("span",{className:"underline",children:"See More"}),e.jsx("span",{children:e.jsx(Ht,{title:"Tải thêm nội dung..."})})]})})]}),e.jsx(ft,{type:"category",gutter:[16,16],child:t})]})},Ba=()=>{const{data:{data:t}}=A(T+"/category/latest");return e.jsxs("div",{children:[e.jsx("h2",{className:"text-white category text-md md:text-md pl-2 mb-2 mx-2 my-3 border-l-4  font-sans font-bold border-teal-400 dark:text-gray-200",children:"Mới Cập Nhật"}),e.jsx(yt,{settings:va,content:t&&t.map((s,a)=>{const r=s.products[s.products.length-1];return e.jsx("div",{children:e.jsxs("div",{className:"w-full ",children:[e.jsx("div",{className:"relative group ",children:e.jsxs(w,{to:`/q/${s._id}`,className:"block mx-2",children:[e.jsx("div",{className:"relative h-[200px] w-[120px] custom-slide md:w-[160px] lg:w-[180px]",children:e.jsx(U,{src:E(100,s.linkImg),alt:s.name,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-1 md:px-2 py-1 font-medium",children:r?`Tập ${r.seri}`:e.jsx(gt,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(tt,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4",children:e.jsx(w,{to:"/q/"+s._id,children:e.jsx("div",{style:{color:"#999"},className:"text-sm md:text-md lg:text-md",children:s.name})})})]})},s._id)})})]})};function Ne({children:t}){const[s,a]=o.useState(!1),r=o.useRef(null);return o.useEffect(()=>{const n=new IntersectionObserver(i=>{i[0].isIntersecting&&a(!0)},{threshold:1});return r.current&&n.observe(r.current),()=>{r.current&&n.unobserve(r.current)}},[]),e.jsxs("div",{children:[s&&t,e.jsx("div",{ref:r,style:{height:"1px"}})]})}const Fa=u.video``,Va=u.div`
  padding-bottom: 60%;
  @media (min-width: 768px) {
    padding-bottom: 50%;
  }
  @media (min-width: 1024px) {
    padding-bottom: 45%;
  }
`,Ma=o.memo(()=>{const{data:t,isError:s}=A(T+"/trailer"),{state:a}=o.useContext($);return s?e.jsx(ua,{}):e.jsxs("div",{className:a?"p-3":"mt-3",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"lg:w-9/12 md:w-12/12 sm:w-full",children:e.jsxs("div",{className:"h-full",children:[e.jsx(Va,{className:"relative md:mx-2",children:e.jsx(Fa,{className:"h-full absolute bg-black rounded",width:"100%",loop:!0,muted:!0,autoPlay:!0,controls:!0,src:t.url})}),e.jsx(Ba,{})]})}),e.jsx(ga,{})]}),e.jsx(Sa,{}),e.jsx(Ne,{children:e.jsx(jt,{})})]})}),Se=({ogTitle:t,description:s,imageUrl:a,mainTitle:r,title:n,...i})=>e.jsxs(qt,{children:[e.jsx("title",{children:n}),e.jsx("meta",{property:"og:title",content:t}),e.jsx("meta",{property:"og:description",content:s}),e.jsx("meta",{property:"og:image",content:a}),Object.keys(i).map(l=>e.jsx("meta",{...i[l]},l))]}),Ua=()=>e.jsxs(e.Fragment,{children:[e.jsx(Se,{ogTitle:"Hoạt Hình Trung Quốc",description:"Đấu Phá Thương Khung Phần 5",imageUrl:E(200,"https://res.cloudinary.com/daz3lejjo/image/upload/w_100/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),title:"Hoạt Hình 3D"}),e.jsx(Ma,{})]}),k=L(),Ha=async t=>await d.get(`products?page=${t}`),qa=async t=>await d.get(`product/${t}`),Wa=async t=>await d.delete(`/product/${t}/${k.user._id}`,{headers:{Authorization:`Bearer ${k.token}`}}),Ga=async t=>await d.post(`/product/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Ya=async t=>await d.put(`/product/${t.get("_id")}/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Ja=async t=>await d.post("/products/creating",t,{}),Oi=async t=>await d.post(`/products/deleteMultiple/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Ka=async t=>await d.get(`/category/products/${t}`),Di=async(t,s)=>await d.post(`/product/pushlist/${t}/${k.user._id}`,s,{headers:{Authorization:`Bearer ${k.token}`}}),Bi=async(t,s)=>await Fs.post(`/product/abyss/${t}/${k.user._id}`,s,{headers:{Authorization:`Bearer ${k.token}`}}),Fi=async t=>await d.post(`/product/approve/${t}/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Vi=async t=>await d.post(`/product/approve/cancel/${t}/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Xa=async t=>await d.get(`/product/filter?c=${t}`),Za=async t=>await d.get(`/product/v?name=${t}`),Mi=async()=>await d.post(`/products/clear/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),qe=p("product/getProducts",async t=>{const{data:s}=await Ha(t);return{product:s.data,length:s.length}}),fe=p("product/getProduct",async t=>{const{data:s}=await qa(t);return s}),Qa=p("product/deleteProduct",async t=>{const{data:s}=await Wa(t);return s}),en=p("product/addProduct",async t=>{const{data:s,status:a}=await Ga(t);return s}),tn=p("product/editProduct",async t=>{const{data:s}=await Ya(t);return s}),sn=p("product/importDataFile",async t=>{const{data:s}=await Ja(t);return s}),vt=p("product/getAllProductDataByCategory",async t=>{const{data:s}=await Ka(t);return s}),an=p("product/filter",async t=>{const{data:s}=await Xa(t);return s}),nn=p("product/Search",async t=>{const{data:s}=await Za(t);return s}),rn=t=>t.product.getOneProduct,on=t=>t.product.getAllProductByCategory,Ui=t=>t.category.category,ln=t=>t.user.value,Hi=t=>t.user.value,dn=u.button`
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
`,We=u.button`
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
`,cn=o.memo(({seriProduct:t})=>e.jsx(_,{gutter:14,items:"center",children:t.map((s,a)=>s.isApproved==!0?e.jsx(g,{xl:3,lg:3,md:4,sm:4,xs:6,className:"mt-2",children:e.jsx(we,{className:({isActive:r,isPending:n})=>r?"activeSeri":"",to:"/d/"+s._id+`?c=${s.category}`,children:e.jsx(dn,{className:s.seri&&"w-full",children:s.seri&&"Tập "+s.seri})})},a):"")})),P=o.memo(({children:t,...s})=>e.jsx(Wt,{...s,children:t})),Y=t=>V.success(t),wt=t=>V.warning(t),O=t=>V.error(t),un=({item:t,id:s})=>{var y;const a=M(),{Auth:r,user:n,isLoggedInState:i}=o.useContext($),[l,x]=o.useState(!1),c={user:r?r.user._id:"",product:s};o.useEffect(()=>{var f,C;const j=(f=n==null?void 0:n.cart)==null?void 0:f.find(N=>N.product._id===s);x(((C=j==null?void 0:j.product)==null?void 0:C._id)===s)},[n.cart,s]);const m=()=>{!r&&i==!1?O("Bạn cần đăng nhập!"):l?wt("Đã tồn tại trong yêu thích!"):(a(he(c)),x(!0),Y("Thêm vào danh sách yêu thích thành công!"))};return e.jsxs("div",{className:"lg:flex md:flex-row items-center @screen md:justify-between flex flex-col",children:[e.jsx(w,{to:"/q/"+((y=t==null?void 0:t.category)==null?void 0:y._id),className:"text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(z,{level:4,style:{color:"#fff"},className:"uppercase",children:t.name})}),e.jsx(P,{style:{color:"#fff"},icon:e.jsx(te,{}),disabled:l,className:"flex items-center justify-center",onClick:()=>m(),children:l?"Đã yêu thích":"Thêm vào yêu thích"})]})},xn=({getOneProductDetail:t})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{color:"#fff",margin:"10px 0"},children:t.seri?t.trailer?"Trailer "+t.seri:"Tập "+t.seri:""}),e.jsx("div",{className:"des text-[#999]",children:e.jsxs("p",{children:["Ngày đăng:"," ",Gt(t.uploadDate).format("LTS DD-MM-YYYY")]})}),e.jsx("div",{style:{color:"#fff",margin:"10px 0"},className:"des",children:e.jsxs("div",{className:"text-[#999] flex items-center gap-2 lg:justify-start @screen justify-center",children:[e.jsx(Yt,{}),t.view*36," Lượt xem"]})}),e.jsxs("div",{className:"p-3 mt-3 mb-3 text-white rounded  flex items-center lg:justify-start @screen justify-center",style:{background:"rgb(0 0 0 / 47%)"},children:["Copyright video:",e.jsx("div",{className:"text-slate-400",children:" "+t.copyright})]})]}),mn=u.div`
display:flex;
gap:0 10px;

@media(max-width:768px){
  display:block;
}
@media(min-width:1024px){
  display:flex;
}
`,hn=u.div`
`,pn=u.div`
font-size:13px;
@media(min-width: 1024px){
  font-size:15px;
}
`,gn=u.div`
padding:5px;
@media(min-width: 1024px){
  padding: 15px;
}
`,yn=u.div`
padding-bottom:62%;

@media(min-width: 768px){
  padding-bottom:52%;
}

@media(min-width: 1024px){
  padding-bottom:42%;
}
`,fn=u.div`
 
`,jn=t=>t.product.isLoading,vn=()=>{var C,N,R,J;const t=I(on),s=I(rn),a=I(jn),[r,n]=o.useState(""),{id:i}=le(),{c:l}=Jt.parse(window.location.href.split("?")[1]),[x,c]=o.useState("dailyMotion"),m=M(),[y,j]=o.useState(""),f=be();return o.useEffect(()=>{window.scrollTo(0,0)},[f]),o.useEffect(()=>{m(fe(i)),m(vt(l));const K=Le.AES.decrypt(s.dailyMotionServer?s.dailyMotionServer:"","24062003").toString(Le.enc.Utf8);j(K),n(K)},[i,s.dailyMotionServer]),e.jsxs(e.Fragment,{children:[e.jsx(Se,{ogTitle:s.name,description:s.category.des,imageUrl:(C=s.category)==null?void 0:C.linkImg}),e.jsx("div",{className:"flex justify-center mt-4",style:{gap:"10px"},children:e.jsx(gn,{className:"col-md-12",children:s&&(a?e.jsx(Ce,{size:"large",children:void 0}):e.jsxs(e.Fragment,{children:[e.jsx(yn,{className:"d-flex justify-content-center relative",children:s.dailyMotionServer!==""&&s.server2!==""?e.jsx("iframe",{allowFullScreen:!0,title:"vimeo-player",className:"absolute",src:r,style:{width:"100%",height:"100%"}}):s.trailer!==""?e.jsx("iframe",{title:"vimeo-player",className:"absolute",style:{width:"100%",height:"100%"},src:s.trailer+"?autoplay=1&mute=1"}):e.jsx(Kt,{icon:"Hiiiii!!",className:"absolute inset-0 text-white mt-5",subTitle:"Phim này đang trong quá trình cập nhật video. Vui lòng quay lại sau."})}),e.jsxs(fn,{className:"mt-4 rounded",children:[e.jsx(re,{textColor:"#fff",orientation:"center",className:"text-white md:text-sm lg:text-base text-sm underline",children:"Chọn server:"}),e.jsxs("div",{className:"md:text-sm lg:text-base text-sm flex items-center justify-center gap-4 px-4 py-3",children:[e.jsx(P,{disabled:s.link==="",onClick:()=>{c("link1"),n(s.link)},className:`text-white cursor-pointer ${x==="link1"?"activeServer":""}`,children:"#S1"}),e.jsx(P,{onClick:()=>{c("server2"),n(s.server2)},disabled:!s.server2,className:`${s.server2?" text-white cursor-pointer":""} ${x==="server2"?"activeServer":""}`,children:"#S2"}),e.jsx(P,{onClick:()=>{c("dailyMotion"),n(y)},disabled:!s.dailyMotionServer,className:`${s.dailyMotionServer?"text-white cursor-pointer":""} ${x==="dailyMotion"?"activeServer":""}`,children:"#S3"})]})]}),e.jsxs(mn,{className:"mt-2",children:[e.jsx(hn,{className:"w-3/12",children:e.jsx(U,{className:"md:block hidden",alt:"Ảnh"+((N=s.category)==null?void 0:N.name),src:E(200,s&&(((R=s.category)==null?void 0:R.linkImg)||s.image))})}),e.jsxs(pn,{className:"lg:w-9/12 md:w-full text-center lg:text-start",children:[e.jsx(un,{item:s,id:i}),e.jsx(xn,{getOneProductDetail:s}),e.jsx(cn,{seriProduct:t}),e.jsxs("div",{className:"text-[#999] lg:text-md sm:text-sm mt-2 mb-2",children:[e.jsx(re,{textColor:"#fff",orientation:"left",children:"Mô tả:"}),s&&((J=s.category)==null?void 0:J.des)]})]})]})]}))})})]})},wn=()=>e.jsxs(q.Fragment,{children:[e.jsx(o.Suspense,{fallback:e.jsx(ca,{}),children:e.jsx(vn,{})}),e.jsx(Ne,{children:e.jsx(jt,{})})]}),bn=({id:t})=>{const{data:s,isLoading:a}=A(T+"/category/getAllCategoryNotRequest/"+t),r=be();return o.useEffect(()=>{window.scrollTo(0,0)},[r]),a?e.jsx(Ce,{size:void 0,children:void 0}):e.jsxs(q.Fragment,{children:[e.jsx(z,{level:3,strong:!0,underline:!0,style:{color:"#fff"},className:"underline my-2",children:"Liên quan"}),e.jsx(ft,{type:"category",gutter:[16,16],child:s})]})},kn=({data:t,isLoading:s})=>{var a;return s?e.jsx("div",{className:"seriLoading",children:"Loading...."}):e.jsx("div",{className:"bg-[#9b9b9b1f] h-[174px] overflow-y-scroll p-3 rounded-sm seriCategory",children:e.jsx(_,{gutter:[16,16],children:((a=t==null?void 0:t.products)==null?void 0:a.length)>0&&(t!=null&&t.products)?t.products.map((r,n)=>r.isApproved==!0?e.jsx(g,{lg:3,md:4,sm:5,xs:6,style:{textAlign:"center"},children:e.jsx(w,{to:"/d/"+r._id+`?c=${r.category}`,children:!r.dailyMotionServer&&r.trailer?e.jsx(We,{children:r.seri}):e.jsx(We,{className:"w-full text-white",variant:"ghost",size:"sm",children:r.seri})})},n):""):e.jsx(pt,{})})})},Cn=o.memo(({id:t,averageRating:s,totalRatings:a})=>{const r=async n=>{const i={rating:n};try{await Ea(t,i)}catch(l){console.error("Lỗi khi lưu đánh giá:",l)}};return e.jsxs("span",{className:"text-white flex items-center gap-2",children:[e.jsx(Xt,{className:"mt-2 mb-2",value:s,onChange:r}),a>0?e.jsx("div",{className:"relative pt-1",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{children:e.jsxs("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200",children:["Vip ",s.toFixed(2),"/",a*115," Tổng số lượt đánh giá"]})})})}):""]})}),Nn=()=>{const{id:t}=le(),s=M(),a=I(n=>n.category.details),r=I(n=>n.category.isLoading);return o.useEffect(()=>{s(ye(t))},[t]),o.useEffect(()=>{a!=null&&a.name&&(document.title=a.name)},[a]),e.jsxs(e.Fragment,{children:[e.jsx(Se,{ogTitle:a.name,description:a==null?void 0:a.des,imageUrl:a==null?void 0:a.linkImg}),a&&e.jsx("div",{children:e.jsxs("div",{style:{color:"#fff"},children:[e.jsxs("div",{className:"md:flex lg:flex block gap-2 ",children:[e.jsx("div",{className:"mb-5 lg:w-3/12 md:w-3/12 md:h-full h-52 ",children:e.jsx("div",{className:"h-full w-full flex justify-center ",children:e.jsx(U,{className:"object-contain w-full h-full flex-grow",src:E(300,a.linkImg),alt:a.name})})}),e.jsxs("div",{className:"lg:w-9/12 md:w-9/12",children:[e.jsx("div",{className:"category text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(w,{to:"/q/"+a._id,children:e.jsx(z,{type:"secondary",level:3,className:"md:text-[18px] lg:text-[20px] sm:text-[15px]",style:{textTransform:"capitalize",color:"#fff"},children:a.name})})}),e.jsxs("div",{className:"loai des text-[12px] md:text-[13px] lg:text-[14px]",children:[e.jsx("b",{children:a.anotherName}),e.jsx("br",{}),e.jsx(b,{style:{color:"#999"},children:"Tác giả :..."}),e.jsx("br",{}),e.jsx(b,{style:{color:"#999"},children:"Quốc gia : Chinese"}),e.jsx("div",{children:e.jsxs(b,{style:{color:"#999"},children:["Thể loại :"," ",e.jsx("span",{className:"p-1 bg-gray-500 rounded-sm",children:a.type})]})}),e.jsx("div",{children:e.jsxs(b,{style:{color:"#999"},children:["Tổng Số tập: ",a._id==t?a.sumSeri:""]})}),e.jsx("div",{children:e.jsx(b,{style:{color:"#999"},children:a.time+" "})}),e.jsx("div",{children:e.jsxs(b,{style:{color:"#999"},children:["Năm phát hành : ",a.year]})}),e.jsx("div",{}),e.jsx(ne,{color:"#2db7f5",className:"my-2",children:a.isActive==0?"Đang chiếu":"Hoàn thành"}),e.jsxs("div",{id:"toast-simple",className:"flex mb-2 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800",role:"alert",children:[e.jsx(st,{}),e.jsx("div",{className:"ps-4 text-sm font-normal",children:"Vietsub lúc 10h00 Thứ 4 hàng tuần"})]})]}),e.jsx(kn,{isLoading:r,data:a}),e.jsx(Cn,{id:t,averageRating:a.averageRating,totalRatings:a.totalRatings})]})]}),e.jsxs("div",{className:"text-[#999] lg:text-[15px] md:text[14px] text-[13px]",children:[e.jsx(re,{textColor:"#fff",orientation:"left",children:"NỘI DUNG PHIM"}),a.des]})]})},a._id)]})},Sn=()=>{const{id:t}=le();return e.jsxs(e.Fragment,{children:[e.jsx(Nn,{}),e.jsx(Ne,{children:e.jsx(bn,{id:t})})]})};const Ge=o.memo(({title:t,src:s,size:a,...r})=>e.jsx("div",{title:t,style:{cursor:"pointer"},children:e.jsx(Zt,{size:a,color:"default",src:s,...r})})),je=({isLoggedInState:t,style:s})=>{var l,x,c,m,y;const a=L(),r=W(),n=M(),i=()=>{a?r("/cart/user"):O("Bạn cần đăng nhập!")};return e.jsx(q.Fragment,{children:a&&t?e.jsx(Pe,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx($e,{content:e.jsxs(e.Fragment,{children:[e.jsx(w,{to:"/profile",children:e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:12,children:[e.jsx(g,{children:e.jsx(Qt,{})}),e.jsx(g,{children:e.jsx(b,{level:6,className:"auth",children:"Your profile"})})]})}),e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(te,{})}),e.jsx(g,{children:e.jsx(b,{style:{cursor:"pointer"},onClick:i,className:"auth",children:"Saved"})})]}),a.user&&((l=a==null?void 0:a.user)==null?void 0:l.role)>=1&&e.jsx(w,{to:"/dashboard",children:e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(se,{})}),e.jsx(g,{children:e.jsx(b,{className:"auth",children:"Admin"})})]})}),e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(at,{})}),e.jsx(g,{children:e.jsx(b,{style:{cursor:"pointer"},onClick:()=>ma(n,r),children:"Logout"})})]})]}),title:e.jsx(z,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:(x=a==null?void 0:a.user)==null?void 0:x.username}),placement:"bottomLeft",trigger:"click",children:e.jsx(Ge,{className:"text-center",title:(c=a==null?void 0:a.user)==null?void 0:c.name,src:E(50,a.user&&((m=a==null?void 0:a.user)==null?void 0:m.image)),size:"sm"})})}):e.jsx(Pe,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx($e,{content:e.jsx(w,{to:"/signin",children:e.jsxs(_,{align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(es,{})}),e.jsx(g,{children:e.jsx(b,{level:6,className:"auth",children:"Signin"})})]})}),title:e.jsx(z,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:"Hi"}),placement:"bottomLeft",trigger:"click",children:e.jsx(Ge,{title:(y=a==null?void 0:a.user)==null?void 0:y.name,src:void 0,style:s,size:40,icon:e.jsx(se,{})})})})})},{Content:_n,Sider:An,Header:Tn,Footer:In}=ue,Ln=()=>{const t=Qr.map((n,i)=>{var x;const l=String(i+1);return{key:`${l+1}`,icon:n.icon,label:e.jsx(w,{to:n.path,children:n.name}),children:(x=n==null?void 0:n.children)==null?void 0:x.map((c,m)=>{const y=m+1;return{key:`subitem-${l}-${y}`,icon:c.icon,label:e.jsx(w,{to:c.path,children:c.name})}})}}),{isLoggedInState:s}=o.useContext($)??{},[a,r]=o.useState(!1);return e.jsxs(ue,{style:{minHeight:"100vh"},children:[e.jsxs(An,{trigger:null,collapsible:!0,collapsed:a,className:"overflow-y-auto ",style:{height:"100%",position:"fixed"},children:[e.jsx("div",{className:"p-4 bg-[#fff]",children:e.jsx("div",{className:"h-8 w-full bg-[#ddd] rounded"})}),e.jsx(xe,{style:{height:"100%"},theme:"light",mode:"inline",defaultSelectedKeys:["1"],items:t})]}),e.jsxs(ue,{style:{marginLeft:a?80:200},children:[e.jsx(Tn,{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",padding:0},children:e.jsxs(_,{align:"middle",justify:"space-between",children:[e.jsx(g,{children:e.jsx(P,{type:"text",icon:a?e.jsx(nt,{}):e.jsx(rt,{}),onClick:()=>r(!a),style:{fontSize:"16px",width:64,height:64},children:void 0})}),e.jsx(g,{children:e.jsx(w,{to:"/",children:"Home Page"})}),e.jsx(g,{style:{textAlign:"center"},span:1,children:e.jsx(je,{isLoggedInState:s,style:void 0})})]})}),e.jsx(_n,{style:{padding:"24px",minHeight:"calc(100vh - 64px)",overflow:"auto"},children:e.jsx(it,{})}),e.jsx(In,{children:"© 2023 copyright | PH ANG"})]})]})},Pn=t=>{const s=L();try{return s?s.user.role==0?e.jsx(Ee,{to:"/"}):t.children:e.jsx(Ee,{to:"/"})}catch{return e.jsx("div",{className:"text-light container text-center",children:e.jsx(w,{to:"/signin",children:"Đăng nhập"})})}},$n=u.div`
color:#999;
font-weight:500;
`,En=u.div`
color: rgb(255, 214, 99);
font-weight:500;
`,Rn=u.div`
display: flex;
align-items: center;
justify-content: center;
gap:0 5px;
 
&>a{
    color: rgb(255, 214, 99) !important;
    font-weight:500;
}
`;u.div`

`;const zn=o.memo(({data:t,icons:s,id:a,background:r,...n})=>e.jsx(xe,{className:"h-full",style:{background:r},children:t&&t.map((i,l)=>o.createElement(xe.Item,{...n,icon:i.icon?i.icon:s[l],key:l},a==!0?e.jsx(we,{to:i.path=="/"?i.path:i.path+`/${i._id}`,children:i.name},l):e.jsx(w,{to:i.path,children:i.name})))})),On=u.div`
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
`;u.img`
  object-fit: cover;
  @media (max-width: 768px) {
    pading: 5px;
  }
`;const Dn=u.div`
  @media (max-width: 768px) {
    display: none;
  }
`,Ye=u.input`
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
`,Bn=u.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`,Fn=u.div`
  font-size: 11px;
  font-weight: 400;
`,Vn=u.div`
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
`,Mn=u.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
  justify-content: ${t=>t.justify};
`,Un=u.div``,Hn=u.div`
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
`,qn=u.div`
  color: #d9d9d9;
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`,Wn=u.div`
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
`,Gn=u.div`
  display: block;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`,ve=({data:t})=>t.length>0?e.jsx("div",{className:"absolute top-[50px] left-0 w-full flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:e.jsx("div",{className:"p-4 flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700",children:t.map((s,a)=>e.jsx(w,{to:`/q/${s._id}`,children:e.jsx("div",{className:"flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:s.name})},s._id))})}):e.jsx(e.Fragment,{}),Yn=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"})),Jn=[e.jsx(Qe,{}),e.jsx(ns,{}),e.jsx(at,{}),e.jsx(ot,{})],Kn=()=>{const{Auth:t,isLoggedInState:s,state:a,handleClick:r}=o.useContext($)??{},[n,i]=o.useState(!1),[l,x]=o.useState(0),[c,m]=o.useState("20px 10px"),[y,j]=o.useState(!1),f="left",[C,N]=o.useState(""),[R,J]=o.useState([]),K=()=>{j(!0)},Ct=()=>{j(!1)};window.addEventListener("scroll",()=>{const S=window.pageYOffset;i(l>S),x(S),window.scrollY>10?m("10px 5px"):m("20px 10px")});const Nt=W(),_e=()=>{t?Nt("/cart/user"):O("Bạn cần đăng nhập!")},Ae=ts.debounce(async S=>{const{data:de}=await $a(S);J(de)},500),Te=async S=>{N(S),Ae(S)};o.useEffect(()=>()=>{Ae.cancel()},[C]),o.useEffect(()=>{i(!0)},[]);const Ie=s?Xr:Kr;return e.jsxs(q.Fragment,{children:[e.jsxs(_,{align:"middle",justify:"space-between",className:`${a?"w-11/12":"w-10/12"} lg:flex hidden z-[100] fixed right-0`,style:{top:n?"0":"-25%",padding:c,backgroundColor:"#00000038"},children:[e.jsx(g,{span:1,children:e.jsx(Gn,{className:"text-[21px] md:text-[23px] lg:text-[25px]",onClick:r,children:a?e.jsx(rt,{}):e.jsx(nt,{})})}),e.jsxs(g,{span:6,className:"relative",children:[e.jsx(Ye,{style:{boxShadow:"#333 0px 2px 10px"},onChange:S=>Te(S.target.value),placeholder:"Search..."}),e.jsx(ve,{data:R})]}),e.jsx(g,{span:16,children:e.jsxs(_,{justify:"center",align:"middle",children:[e.jsx(_,{children:Ie.map((S,de)=>e.jsx(g,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:e.jsx(w,{style:{color:"#fff",textDecoration:"none",margin:"0 20px"},to:S.path,children:S.name})},de))}),e.jsx(g,{children:e.jsxs(Rn,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:[e.jsx($n,{children:"Liên hệ qc tele: "}),e.jsxs("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:[e.jsx(En,{}),"@PH ANG"]})]})}),e.jsx(g,{className:"ml-5 text-[15px] lg:text-[17px] md:text[16px]",style:{marginLeft:"50px"},onClick:_e,children:e.jsx(te,{className:"__ text-yellow-500"})})]})}),e.jsx(g,{span:1,className:"text-end",children:e.jsx(je,{isLoggedInState:s,style:{backgroundColor:"#fde3cf",color:"#f56a00",textAlign:"center"}})})]}),e.jsxs("div",{className:"navbar_mb w-10/12 absolute right-0 z-10",children:[e.jsxs(_,{align:"middle",justify:"space-between",className:"navbar bgNav mb",children:[e.jsx(g,{children:e.jsx(ss,{className:"text-white",onClick:K})}),e.jsx(g,{children:e.jsx("div",{className:"ml-5 relative",onClick:_e,children:e.jsx(te,{className:"__ text-yellow-500"})})}),e.jsxs(g,{span:16,className:"relative",children:[e.jsx(Ye,{onChange:S=>Te(S.target.value),placeholder:"Search..."}),e.jsx(ve,{data:R})]}),e.jsx(g,{children:e.jsx(je,{isLoggedInState:s,style:{backgroundColor:"#fde3cf",color:"#f56a00",lineHeight:"30px"}})})]}),e.jsx(as,{width:200,title:"Drawer",placement:"left",closable:!1,onClose:Ct,open:y,closeIcon:!0,className:"relative z-10",children:e.jsx(zn,{icons:Jn,id:!1,background:"#fff",data:Ie})},f)]})]})},Xn=()=>e.jsx(e.Fragment,{children:e.jsx(q.Fragment,{children:e.jsxs("div",{className:"ft text-white",children:[e.jsx("link",{rel:"stylesheet",integrity:"sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=",crossOrigin:"anonymous"}),e.jsx("footer",{className:"footer",children:e.jsx("div",{className:"footer-bottom footer-border-top light py-3",children:e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"m-0",children:["© 2023 copyright"," ",e.jsx("a",{href:"#",className:"text-reset",children:"| PH ANG"})]})})})})]})})}),Zn=()=>e.jsx("div",{className:"md:mt-[50px] lg:mt-[50px] lg:flex hidden justify-center text-white ",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"card p-3 ",style:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"d-flex justify-center",children:e.jsx("img",{src:E(80,"https://res.cloudinary.com/daz3lejjo/image/upload/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),alt:"Đấu phá thương khung phần 5",className:"avatar-md rounded-circle img-thumbnail"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-size-16 mb-1 mt-1",children:e.jsx(w,{to:"#",className:"text-light",children:"Admin Contact"})}),e.jsx("span",{className:"badge badge-soft-success mb-0",children:"Web Developer"})]})]}),e.jsxs("div",{className:"mt-3 pt-1 iconContact",children:[e.jsxs("p",{className:"mb-0",children:[e.jsx(rs,{}),e.jsx("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:"Facebook"})]}),e.jsxs("p",{className:"mb-0 mt-2",children:[e.jsx(is,{}),e.jsx("a",{href:"https://www.tiktok.com/@tieu_loli",children:"Tiktok"})]})]})]})})})}),Qn=()=>{const{seri:t,loadingSeri:s}=o.useContext(G)||{},{state:a}=o.useContext($)||{},r=a?"w-1/12":"w-2/12";return e.jsx(On,{className:r,children:e.jsxs(Vn,{className:r,children:[e.jsx(Mn,{justify:a?"center":"start",children:e.jsxs(Dn,{className:a?"hiddenn":"block text-white",children:[e.jsx(w,{to:"/",children:e.jsx(Bn,{children:"Hhtrungquoc.tv"})}),e.jsx(w,{to:"/",children:e.jsx(Fn,{children:"tromphim.netify.app"})})]})}),e.jsx("div",{className:"mt-[50px]",children:s?e.jsx(Ce,{size:"large",children:void 0}):e.jsx(Un,{className:"sideBarActive",children:t&&t.map((n,i)=>e.jsx(we,{title:n.name,to:n.path=="/"?n.path:n.path+`/${n._id}`,children:e.jsxs(Hn,{state:a,children:[e.jsx(qn,{children:ya[i]}),e.jsx(Wn,{className:a?"hiddenn":"block",children:n.name})]})},i))})}),e.jsx(Zn,{})]})})},er=u.div`
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
`,tr=({children:t,...s})=>{const{background:a}=o.useContext(G)||{};return e.jsx(er,{background:a&&a.data.url,...s,children:t})},sr=()=>{const{state:t}=o.useContext($)||{};return e.jsxs(tr,{className:"text-start",children:[e.jsx("div",{children:e.jsx(Kn,{})}),e.jsxs("div",{className:"containers flex",children:[e.jsx("div",{className:t?"w-1/12":"w-2/12",children:e.jsx(Qn,{})}),e.jsx("div",{className:`${t?"w-11/12":"w-10/12"} p-2`,children:e.jsx(it,{})})]}),e.jsx("div",{children:e.jsx(Xn,{})})]})},h=({children:t})=>e.jsx(o.Suspense,{fallback:e.jsx(ht,{}),children:t}),Je=o.memo(({columns:t,dataSource:s,...a})=>e.jsx(lt,{columns:t,dataSource:s,...a})),ar=o.memo(({name:t,label:s,control:a,rules:r,...n})=>e.jsxs("div",{className:"mb-3",children:[e.jsx(b,{htmlFor:t,children:s}),e.jsx(os,{name:t,control:a,rules:r,defaultValue:"",render:({field:i})=>e.jsx(ls,{placeholder:s,...i,...n})})]})),nr=o.memo(({title:t,cancelText:s,okText:a,onConfirm:r,children:n,...i})=>{const l=()=>{O("Hủy")};return e.jsx(ds,{title:t,onCancel:l,onConfirm:r,okText:a,cancelText:s,...i,children:n})}),rr=()=>{const{weeks:t}=o.useContext(G),{handleSubmit:s,control:a}=dt(),r=async(c,m)=>{const y={categoryId:m};try{(await Ca(c,y)).data&&Y("Delete Success")}catch{O("Delete Failure")}},n=async c=>{await wa(c)},i=async c=>{await ba(c)},l=c=>{var j;const m=[{title:"ID",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"operation",render:(f,C)=>e.jsx(e.Fragment,{children:e.jsx(nr,{title:"Delete the category",onConfirm:()=>r(c.key,C._id),okText:"Yes",cancelText:"No",children:e.jsx(P,{type:"text",shape:"circle",className:"ml-2",children:e.jsx(cs,{})})})})}],y=((j=t.find(f=>f._id===c.key))==null?void 0:j.category)||[];return e.jsx(Je,{columns:m,dataSource:y,pagination:!1})},x=t&&t.map((c,m)=>({key:c._id,name:c.name,action:e.jsxs(e.Fragment,{children:[e.jsx(w,{to:`/dashboard/week/edit/${c._id}`,children:e.jsx(P,{type:"primary",children:"Edit"})}),e.jsx(P,{onClick:()=>i(c._id),className:"ml-1",children:"Delete"})]})}));return e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:s(n),children:e.jsxs(_,{gutter:4,align:"middle",justify:"center",children:[e.jsx(g,{span:22,children:e.jsx(ar,{name:"name",label:"Theo tuần",control:a,rules:void 0})}),e.jsx(g,{span:2,children:e.jsx(P,{htmlType:"submit",className:"mt-3",type:"primary",children:"Thêm"})})]})}),e.jsx(Je,{columns:fa,dataSource:x,expandable:{expandedRowRender:l,defaultExpandedRowKeys:["0"]}})]})},ir=()=>e.jsxs("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]",children:[e.jsx("h1",{className:"text-9xl font-extrabold text-white tracking-widest",children:"404"}),e.jsx("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute",children:"Page Not Found"}),e.jsx("button",{className:"mt-5",children:e.jsxs("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring",children:[e.jsx("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),e.jsx("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current",children:e.jsx(w,{to:"/",children:"Go Home"})})]})})]}),or=u.button`
background:linear-gradient(to right, #652EEE, #040F75)
`,lr=u.input`
width: 100%;
padding: 10px;
border-radius: 10px;
background: transparent;
border: 1px solid #999;
font-size: 12px;
outline:none;
color: #fff;
`,dr=u.form``,cr=u.div`
padding: 0 20px;
@media (min-width: 768px){
  padding: 0 40px;
}
@media (min-width: 1024ox) {
  padding: 0 60px;
}
`,ur=u.div`
color: #fff;
margin-top:20px;
font-size:25px;
@media (min-width: 768px){
  margin-top:30px;
}
@media (min-width: 1024ox) {
  margin-top:40px;
`,xr=u.div`
margin: 15px 0;
color: #999;
font-size:13px;
`,mr=u.div`
cursor: pointer;
`,hr=u.div`
padding: 15px 5px;
border: 1px solid #fff;
font-style: italic;
`,pr=u.div`
border-bottom: 1px dashed  #fff;
`,gr=u.div`

`,bt=o.memo(({onSubmit:t,formTitle:s,formDescription:a,submitButtonText:r,formIntro:n,formHeader:i,checkedAccount:l,handleMessage:x,redirect:c,array:m,schemaPage:y})=>{const{register:j,handleSubmit:f,formState:{errors:C}}=dt({resolver:us(y)});return e.jsx("div",{className:"h-screen relative z-0",children:e.jsxs(cr,{className:"g-6 flex flex-wrap justify-center w-full items-center absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4",style:{transform:"translate(-50%,-50%)"},children:[e.jsxs("div",{className:"w-8/12 items-center text-white hidden lg:block md:hidden",children:[e.jsx(gr,{className:"text-[50px] ",children:i}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(hr,{className:"w-2/12",children:n}),e.jsx(pr,{className:"w-10/12"})]})]}),e.jsxs("div",{className:"md:w-8/12 lg:w-4/12 w-full lg:p-5 md:p-4 p-3",style:{background:"rgba(248, 248, 248, 0.04)",borderRadius:" 5px"},children:[e.jsxs("div",{children:[e.jsx(ur,{children:s}),e.jsx(xr,{children:a})]}),e.jsxs(dr,{onSubmit:f(t),children:[m&&m.map((N,R)=>e.jsx("div",{className:"relative lg:mb-6 md:mb-4 mb-2","data-te-input-wrapper-init":!0,children:e.jsxs("div",{children:[e.jsx(lr,{disabled:N.disable,style:{background:`${N.disable?"#99979742":""}`},type:N.type,...j(`${N.field}`),placeholder:N.field,className:"placeholder:capitalize"}),C&&C[N.field]&&e.jsx("div",{className:"text-sm text-pink-600 mt-1",children:C[N.field].message})]})},R)),e.jsx("div",{className:"lg:mb-6 md:mb-5 mb-4",children:e.jsx(Ze,{to:"/forgot-password",children:e.jsxs("div",{className:"text-center text-white text-sm font-medium text-primary-600 hover:underline text-primary-500",children:["Forgot password?"," "]})})}),e.jsx(or,{type:"submit",className:"w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600",children:r}),e.jsx("div",{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:e.jsxs("p",{className:"mx-4 mb-0 text-center text-white text-[12px]",children:[" ","OR"]})}),e.jsx(mr,{className:"flex justify-center",onClick:x,children:e.jsx(U,{style:{width:"30px",height:"30px"},src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:""})}),e.jsx("div",{className:"lg:mb-6 md:mb-4 mb-2 text-center lg:mt-5 md:mt-3 mt-2 text-slate-400 ",children:e.jsx(w,{to:c,className:"text-sm text-primary-600 hover:underline text-primary-500",children:l})})]})]})]})})}),yr=[{type:"email",field:"email",disable:!1}],fr=()=>{const t=W(),s=ct().shape({email:me().required().email()}),a=async n=>{const i=await Js(n);i.data.success?(Y(i.data.message),t("/signin")):O(i.data.message)},r=()=>{V.success("Đang cập nhật!")};return e.jsx(bt,{onSubmit:a,formTitle:"Forgot Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:r,redirect:"/forgot-password",array:yr,schemaPage:s})},jr=[{type:"password",field:"password",disable:!1},{type:"password",field:"repassword",disable:!1}],vr=()=>{const t=W(),{id:s,token:a}=le(),r=ct().shape({password:me().required().min(6,"Password tối thiểu 6 kí tự"),repassword:me().required().oneOf([xs("password"),null],"Passwords must match")}),n=async l=>{const x=await Ks(s,a,l);x.data.success?(Y(x.data.message),t("/signin")):O(x.data.message)},i=()=>{V.success("Đang cập nhật!")};return e.jsx(bt,{onSubmit:n,formTitle:"Reset Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:i,redirect:"/reset-password",array:jr,schemaPage:r})},wr=()=>{const t=["#eb2f96","#52c41a","#eba12f"],{data:{data:s}}=A(T+"/category/latest"),a=[{title:"Name",dataIndex:"name",key:"name",render:i=>e.jsx("p",{children:i})},{title:"Action",key:"action",render:(i,l,x)=>e.jsx(P,{type:"text",shape:"circle",className:"ml-2",onClick:()=>r(l.key),children:e.jsx(ke,{type:"success",style:{color:t[x]}})})}],r=async i=>{const l={id:i},{data:x}=await Ra(l);x.success===!0&&(Y("Success"),ms(T+"/category/latest"))},n=s&&s.map((i,l)=>({key:i._id,name:i.name}));return e.jsx(lt,{columns:a,dataSource:n})},br=()=>{const t=I(ln),{data:s}=A(T+"/most-watched-episodes"),{data:a}=A(T+"/rating/stats"),r={data:s.data,xField:"seri",yField:"view",point:{shapeField:"square",sizeField:4},interaction:{tooltip:{marker:!1}},style:{lineWidth:2}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-around gap-2",children:[e.jsx(X,{className:"w-full",children:e.jsx(Z,{title:"Active Users",prefix:e.jsx(se,{}),value:t.length})}),e.jsx(X,{bordered:!0,className:"w-full",children:e.jsx(Z,{title:"Comment",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:e.jsx(ke,{}),suffix:"%"})}),e.jsx(X,{bordered:!1,className:"w-full",children:e.jsx(Z,{title:"View",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:e.jsx(hs,{}),suffix:"%"})}),e.jsx(X,{className:"w-full",children:e.jsx(Z,{title:"Rating Video",prefix:e.jsx(ps,{}),value:a.totalRatings})})]}),e.jsx("div",{className:"flex justify-between gap-2",children:e.jsx(gs,{className:"w-5/12",...r})})]})},kr=o.lazy(()=>v(()=>import("./index-18124006.js"),["assets/index-18124006.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-9c580323.js"])),Cr=o.lazy(()=>v(()=>import("./index-0760b8a7.js"),["assets/index-0760b8a7.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-9c580323.js","assets/index-bf65a008.js"])),Nr=o.lazy(()=>v(()=>Promise.resolve().then(()=>Yn),void 0)),Sr=o.lazy(()=>v(()=>import("./Profile-aaaf6627.js"),["assets/Profile-aaaf6627.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),_r=o.lazy(()=>v(()=>import("./Sign-in-3ffaa323.js"),["assets/Sign-in-3ffaa323.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Ar=o.lazy(()=>v(()=>import("./Sign-up-60ea0e53.js"),["assets/Sign-up-60ea0e53.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Tr=o.lazy(()=>v(()=>import("./list-85e26ab0.js"),["assets/list-85e26ab0.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Ir=o.lazy(()=>v(()=>import("./index-050e45db.js"),["assets/index-050e45db.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Lr=o.lazy(()=>v(()=>import("./add-b65c054d.js"),["assets/add-b65c054d.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Pr=o.lazy(()=>v(()=>import("./edit-32d37649.js"),["assets/edit-32d37649.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),$r=o.lazy(()=>v(()=>import("./admin-440929e5.js"),["assets/admin-440929e5.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Er=o.lazy(()=>v(()=>import("./add-58738e08.js"),["assets/add-58738e08.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-c13dc480.js","assets/index-7112a7aa.js"])),Rr=o.lazy(()=>v(()=>import("./edit-e89ed430.js"),["assets/edit-e89ed430.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-c13dc480.js","assets/index-7112a7aa.js"])),zr=o.lazy(()=>v(()=>import("./adds-e54173b2.js"),["assets/adds-e54173b2.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Or=o.lazy(()=>v(()=>import("./CreatingProducts-a264001c.js"),["assets/CreatingProducts-a264001c.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-7112a7aa.js"])),Dr=o.lazy(()=>v(()=>import("./index-7df3ca9a.js"),["assets/index-7df3ca9a.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/type-ebfc3824.js","assets/index-c13dc480.js","assets/index-7112a7aa.js"])),Br=o.lazy(()=>v(()=>import("./edit-9e5d2a38.js"),["assets/edit-9e5d2a38.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-7112a7aa.js","assets/index-c13dc480.js"])),Fr=o.lazy(()=>v(()=>import("./index-3fee029a.js"),["assets/index-3fee029a.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Vr=o.lazy(()=>v(()=>import("./edit-fa9c51fb.js"),["assets/edit-fa9c51fb.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Mr=o.lazy(()=>v(()=>import("./index-6e723de1.js"),["assets/index-6e723de1.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Ur=o.lazy(()=>v(()=>import("./index-1c2bb739.js"),["assets/index-1c2bb739.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Hr=o.lazy(()=>v(()=>import("./index-665e6715.js"),["assets/index-665e6715.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),qr=o.lazy(()=>v(()=>import("./index-45c4122e.js"),["assets/index-45c4122e.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-bf65a008.js","assets/index-9c580323.js"])),Wr=o.lazy(()=>v(()=>import("./index-14d0b2fb.js"),["assets/index-14d0b2fb.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/type-ebfc3824.js"])),Gr=o.lazy(()=>v(()=>import("./CatemainProduct-2a9de3e0.js"),["assets/CatemainProduct-2a9de3e0.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Yr=o.lazy(()=>v(()=>import("./index-f3c8561f.js"),["assets/index-f3c8561f.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Jr=o.lazy(()=>v(()=>import("./edit-683416c3.js"),["assets/edit-683416c3.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Kr=[{path:"/",name:"Trang chủ",title:"Trang chủ"},{path:"/signin",name:"Đăng nhập",title:"Đăng nhập"},{path:"/signup",name:"Đăng kí",title:"Đăng kí"},{path:"/complete",name:"Hoàn Thành",title:"Hoàn Thành"}],Xr=[{path:"/",name:"Trang chủ"},{path:"/profile",name:"Hồ sơ",title:"Hồ sơ"},{path:"/complete",name:"Hoàn Thành",title:"Hoàn Thành"}],Zr=[{path:"/",element:e.jsx(sr,{}),children:[{path:"/",element:e.jsx(Ua,{}),index:!0},{path:"d/:id",element:e.jsx(h,{children:e.jsx(wn,{})})},{path:"q/:id",element:e.jsx(h,{children:e.jsx(Sn,{})})},{path:"search/category",element:e.jsx(h,{children:e.jsx(Nr,{})})},{path:"cart/user",element:e.jsx(h,{children:e.jsx(Ur,{})})},{path:"movie-content/:id",element:e.jsx(h,{children:e.jsx(Cr,{})})},{path:"types/h/:id",element:e.jsx(h,{children:e.jsx(kr,{})})},{path:"loadmore",element:e.jsx(h,{children:e.jsx(qr,{})})},{path:"signup",element:e.jsx(h,{children:e.jsx(Ar,{})})},{path:"signin",element:e.jsx(h,{children:e.jsx(_r,{})})},{path:"forgot-password",element:e.jsx(h,{children:e.jsx(fr,{})})},{path:"reset-password/:id/:token",element:e.jsx(h,{children:e.jsx(vr,{})})},{path:"profile",element:e.jsx(h,{children:e.jsx(Sr,{})})}]},{path:"dashboard",element:e.jsx(Pn,{children:e.jsx(Ln,{})}),children:[{path:"",element:e.jsx(h,{children:e.jsx(br,{})}),index:!0},{path:"products",element:e.jsx(h,{children:e.jsx(Tr,{})})},{path:"users",element:e.jsx(h,{children:e.jsx(Ir,{})})},{path:"adminUer",element:e.jsx(h,{children:e.jsx($r,{})})},{path:"users/:id/edit",element:e.jsx(h,{children:e.jsx(Pr,{})})},{path:"user/add",element:e.jsx(h,{children:e.jsx(Lr,{})})},{path:"user/creatingUser",element:e.jsx(h,{children:e.jsx(zr,{})})},{path:"product/add",element:e.jsx(h,{children:e.jsx(Er,{})})},{path:"product/edit/:id",element:e.jsx(h,{children:e.jsx(Rr,{})})},{path:"product/creacting",element:e.jsx(h,{children:e.jsx(Or,{})})},{path:"category",element:e.jsx(h,{children:e.jsx(Dr,{})})},{path:"category/edit/:id",element:e.jsx(h,{children:e.jsx(Br,{})})},{path:"category/latest",element:e.jsx(h,{children:e.jsx(wr,{})})},{path:"trailing",element:e.jsx(h,{children:e.jsx(Fr,{})})},{path:"trailerUrl/:id",element:e.jsx(h,{children:e.jsx(Vr,{})})},{path:"comments",element:e.jsx(h,{children:e.jsx(Mr,{})})},{path:"cart",element:e.jsx(h,{children:e.jsx(Hr,{})})},{path:"types",element:e.jsx(h,{children:e.jsx(Wr,{})})},{path:"types/CateMainProduct/:id",element:e.jsx(h,{children:e.jsx(Gr,{})})},{path:"background",element:e.jsx(h,{children:e.jsx(Yr,{})})},{path:"background/edit/:id",element:e.jsx(h,{children:e.jsx(Jr,{})})},{path:"weeks",element:e.jsx(h,{children:e.jsx(rr,{})})}]},{path:"/*",element:e.jsx(ir,{})}],Qr=[{path:"/dashboard",name:"Admin",icon:e.jsx(ys,{})},{path:"/dashboard/products",name:"Products",icon:e.jsx(fs,{})},{name:"User",icon:e.jsx(Re,{}),children:[{path:"/dashboard/users",name:"Users",icon:e.jsx(se,{})},{path:"/dashboard/adminUer",name:"Admin",icon:e.jsx(ze,{})}]},{name:"Category",icon:e.jsx(Re,{}),children:[{path:"/dashboard/category",name:"Category",icon:e.jsx(js,{})},{path:"/dashboard/category/latest",name:"Latest",icon:e.jsx(ke,{})}]},{name:"Themes",icon:e.jsx(ot,{}),children:[{path:"/dashboard/trailing",name:"Trailer",icon:e.jsx(ze,{})},{path:"/dashboard/background",name:"Background",icon:e.jsx(vs,{})}]},{name:"Big Category",icon:e.jsx(et,{}),children:[{path:"/dashboard/types",name:"Types",icon:e.jsx(ws,{})}]},{path:"/dashboard/comments",name:"Comments",icon:e.jsx(bs,{})},{path:"/dashboard/cart",name:"Cart",icon:e.jsx(ks,{})},{path:"/dashboard/weeks",icon:e.jsx(st,{}),name:"Week"}],ei=Cs`
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

`,Ke=t=>{if(!t)return!0;try{const s=Ns(t),a=Date.now()/1e3;return s.exp<a}catch(s){return console.error("Error decoding token:",s),!0}};function ti(){const t=be(),s="G-0EEY3R7F0S",a=Ss(Zr),r=W(),n=L();return o.useEffect(()=>{Oe.initialize(s),Oe.send({hitType:"pageview",page:t.pathname,title:"User Active"}),(async()=>{if(n){const i=n.token,l=n.refreshToken;if(Ke(l))wt("Token expires-relogin"),localStorage.clear(),r("/signin");else if(Ke(i)){const x={refreshToken:n.refreshToken},{data:c}=await Xs(x);localStorage.setItem("token",JSON.stringify(c))}}})(),alert(" Xin lỗi, server phim hiện đang quá tải do lượng truy cập lớn. Vui lòng chờ đợi trong 1-2 phút để tiếp tục xem. Chúng tôi đang nỗ lực để cải thiện tình hình và xin thành thật xin lỗi vì sự bất tiện này.Trân trọng!")},[]),e.jsxs(e.Fragment,{children:[a,e.jsx(ei,{}),e.jsx(_s,{}),e.jsx(As.BackTop,{visibilityHeight:200})]})}const si={value:{product:[],length:0},isLoading:!1,getOneProduct:{},getAllProductByCategory:[],status:!1},ai=F({name:"product",initialState:si,reducers:{},extraReducers:t=>{t.addCase(qe.pending,(s,a)=>{s.isLoading=!0}).addCase(qe.fulfilled,(s,a)=>{s.isLoading=!1,s.value=a.payload}),t.addCase(Qa.fulfilled,(s,a)=>{s.value.product=s.value.product.filter(r=>r._id!==a.payload.data._id)}),t.addCase(en.fulfilled,(s,a)=>{s.value.product.push(a.payload)}),t.addCase(tn.fulfilled,(s,a)=>{s.value.product.push(a.payload)}),t.addCase(sn.fulfilled,(s,a)=>{s.value.product=[...s.value.product,a.payload]}),t.addCase(an.fulfilled,(s,a)=>{s.value.product=a.payload}),t.addCase(nn.fulfilled,(s,a)=>{s.value.product=a.payload}),t.addCase(fe.pending,(s,a)=>{s.isLoading=!0}).addCase(fe.fulfilled,(s,a)=>{s.isLoading=!1,s.getOneProduct=a.payload}),t.addCase(vt.fulfilled,(s,a)=>{s.getAllProductByCategory=a.payload})}}),ni=ai.reducer,ri={category:{data:[],length:0},isLoading:!1,isError:!1,categoryNotReqId:[],details:{}},ii=F({name:"category",initialState:ri,reducers:{},extraReducers:t=>{t.addCase(ee.fulfilled,(s,a)=>{s.isLoading=!1,s.category=a.payload}).addCase(ee.pending,(s,a)=>{s.isLoading=!0}).addCase(ee.rejected,(s,a)=>{s.isError=!0}),t.addCase(He.fulfilled,(s,a)=>{s.isLoading=!1,s.categoryNotReqId=a.payload}).addCase(He.pending,(s,a)=>{s.isLoading=!0}),t.addCase(za.fulfilled,(s,a)=>{s.category.data=s.category.data.concat(a.payload)}),t.addCase(Oa.fulfilled,(s,a)=>{s.category.data=s.category.data.filter(r=>r._id!==a.payload._id)}),t.addCase(Da.fulfilled,(s,a)=>{s.category.data.push(a.payload)}),t.addCase(ye.fulfilled,(s,a)=>{s.details=a.payload,s.isLoading=!1}).addCase(ye.pending,(s,a)=>{s.isLoading=!0})}}),oi=ii.reducer,qi=async()=>await d.get("/trailer"),ie=L(),li=async t=>await d.put(`/trailer/${t.get("_id")}/${ie.user._id}`,t,{headers:{Authorization:`Bearer ${ie.token}`}}),Wi=async t=>await d.post(`/background/${t.get("_id")}/${ie.user._id}`,t,{headers:{Authorization:`Bearer ${ie.token}`}}),di=p("trailer/Trailing",async t=>{const{data:s}=await li(t);return s}),ci=F({name:"post",initialState:{value:[],trailerValues:[]},reducers:{},extraReducers:t=>{t.addCase(di.fulfilled,(s,a)=>{s.trailerValues.push(a.payload)})}}),ui=ci.reducer,oe=L(),xi=async()=>await d.get("/comments"),mi=async(t,s)=>await d.post(`/comment/${t}/${oe.user._id}`,s,{headers:{Authorization:`Bearer ${oe.token}`}}),hi=async t=>await d.post(`/comment/${oe.user._id}`,t,{headers:{Authorization:`Bearer ${oe.token}`}}),pi=p("getAllCommentSlice",async()=>{const{data:t}=await xi();return t}),gi=p("addCommentSlice",async t=>{const{data:s}=await mi(t.product,t);return s}),yi=p("deleteComment",async t=>{const{data:s}=await hi(t);return s}),fi=F({name:"comment",initialState:{value:[]},reducers:{},extraReducers:t=>{t.addCase(pi.fulfilled,(s,a)=>{s.value=a.payload}),t.addCase(gi.fulfilled,(s,a)=>{s.value.push(a.payload)}),t.addCase(yi.fulfilled,(s,a)=>{s.value=s.value.filter(r=>r._id!==a.payload._id)})}}),ji=fi.reducer,vi=F({name:"cart",initialState:{value:[],isLoading:!1,code:null},reducers:{},extraReducers:t=>{t.addCase(Be.fulfilled,(s,a)=>{s.isLoading=!1,s.value=a.payload}).addCase(Be.pending,(s,a)=>{s.isLoading=!0}),t.addCase(he.pending,(s,a)=>{s.isLoading=!0}).addCase(he.fulfilled,(s,a)=>{Array.isArray(s.value)||(s.value=[]),s.isLoading=!1,s.value.push(a.payload.cart)})}}),wi=vi.reducer,bi={key:"root",storage:$s,whitelist:[""],expire:"3600000"},ki=Ts({product:ni,user:oa,category:oi,trailer:ui,comment:ji,cart:wi}),Ci=Is(bi,ki),kt=Ls({reducer:Ci,middleware:t=>t({serializableCheck:!1})}),Ni=Ps(kt);Es.createRoot(document.getElementById("root")).render(e.jsx(Rs,{store:kt,children:e.jsx(zs,{persistor:Ni,children:e.jsx(Na,{children:e.jsx(la,{children:e.jsx(Os,{children:e.jsx(ti,{})})})})})}));export{ra as $,bt as A,Mi as B,Qa as C,Fi as D,Vi as E,ln as F,sa as G,zi as H,Ve as I,ar as J,pe as K,ca as L,ua as M,pt as N,na as O,Hi as P,aa as Q,Ri as R,Ce as S,en as T,z as U,U as V,E as W,re as X,fe as Y,tn as Z,Bi as _,ft as a,sn as a0,Ui as a1,ee as a2,Li as a3,za as a4,Oa as a5,ye as a6,Da as a7,Aa as a8,b as a9,$i as aa,qi as ab,di as ac,pi as ad,Pi as ae,yi as af,ta as ag,gt as ah,Be as ai,Ai as aj,Ii as ak,Di as al,L as am,d as an,Ei as ao,Ti as ap,Wi as aq,T as b,w as c,_i as d,M as e,$ as f,I as g,ma as h,Ge as i,Ue as j,Y as k,O as l,ce as m,G as n,qe as o,ne as p,P as q,Fe as r,_ as s,g as t,A as u,nr as v,Je as w,an as x,nn as y,Oi as z};
