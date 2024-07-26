import{u as Nt,a as St,b as Je,c as p,d as F,m as V,r as o,j as e,T as _t,e as At,s as u,S as It,f as Tt,L as Ke,D as Lt,g as Pt,H as Xe,B as $t,A as Ze,R as Et,h as Rt,F as zt,W as Ot,i as Dt,k as Bt,l as Ft,P as Qe,n as Vt,C as Mt,o as Ut,p as Ht,N as we,q as qt,t as te,v as Wt,E as Gt,w as be,x as Yt,y as et,z as Ie,G as Jt,I as le,J as Kt,K as tt,M as Xt,O as q,Q as Te,U as Le,V as Zt,X as se,Y as st,Z as Qt,_ as ue,$ as xe,a0 as at,a1 as nt,a2 as rt,a3 as Pe,a4 as es,a5 as ts,a6 as ss,a7 as as,a8 as it,a9 as ns,aa as rs,ab as ot,ac as is,ad as os,ae as ls,af as lt,ag as ds,ah as cs,ai as dt,aj as me,ak as us,al as ke,am as xs,an as X,ao as Z,ap as ms,aq as hs,ar as ps,as as gs,at as ys,au as $e,av as Ee,aw as fs,ax as js,ay as vs,az as ws,aA as bs,aB as ks,aC as Cs,aD as Ns,aE as Re,aF as Ss,aG as _s,aH as As,aI as Is,aJ as Ts,aK as Ls,aL as Ps,aM as $s,aN as Es,aO as Rs,aP as zs}from"./vendor-6b39dd86.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const Os="modulepreload",Ds=function(t){return"/"+t},ze={},v=function(s,a,r){if(!a||a.length===0)return s();const n=document.getElementsByTagName("link");return Promise.all(a.map(i=>{if(i=Ds(i),i in ze)return;ze[i]=!0;const l=i.endsWith(".css"),x=l?'[rel="stylesheet"]':"";if(!!r)for(let f=n.length-1;f>=0;f--){const j=n[f];if(j.href===i&&(!l||j.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${x}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Os,l||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),l)return new Promise((f,j)=>{h.addEventListener("load",f),h.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>s()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})},I=()=>{const t=localStorage.getItem("token");if(t)return JSON.parse(t||"")},M=()=>Nt(),A=St,d=Je.create({baseURL:"https://node-4-mhqo.onrender.com/api"}),Bs=Je.create({baseURL:"https://node-3-uodg.onrender.com/api"}),H=I(),Fs=async t=>await d.post("/signup",t),Vs=async t=>await d.post("/signin",t),ct=async()=>await d.get("user"),Ms=async t=>await d.get("user_one/"+t),Us=async t=>await d.delete("removeUser/"+t+`/${H.user._id}`,{headers:{Authorization:`Bearer ${H.token}`}}),Hs=async t=>await d.put(`user/${t._id}/${H.user._id}`,t,{headers:{Authorization:`Bearer ${H.token}`}}),qs=async t=>await d.post("user/creating",t),Ws=async t=>await d.get(`user/cart/${t}`),Gs=async(t,s)=>await d.post(`/user/upload/${t}`,s,{headers:{Authorization:`Bearer ${H.token}`}}),Ys=async t=>await d.post("/forgot-password",t),Js=async(t,s,a)=>await d.post(`/reset-password/${t}/${s}`,a),Ks=async t=>await d.post("/refreshToken",t),ae=I(),Xs=async()=>await d.get("/cart"),Zs=async t=>await d.post(`/cart/${ae.user._id}`,t,{headers:{Authorization:`Bearer ${ae.token}`}}),Qs=async(t,s)=>await d.post(`/cart/${t}/${ae.user._id}`,s,{headers:{Authorization:`Bearer ${ae.token}`}}),Oe=p("cartSlice",async()=>{const{data:t}=await Xs();return t}),he=p("addCartSlice",async t=>{const{data:s}=await Zs(t);return s}),ea=p("deleteCartSlice",async t=>{const{data:s,status:a}=await Qs(t.id,t);return s.data}),De=p("user/login",async t=>{const{data:s}=await Fs(t);return s}),ce=p("user/signin",async t=>{const{data:s,status:a}=await Vs(t);return s}),ta=p("user/getAll",async()=>{const{data:t}=await ct();return t.filter(a=>a.role==0)}),pe=p("user/getUser_id",async t=>{const{data:s}=await Ms(t);return s}),sa=p("admin/getAdmin",async()=>{const{data:t}=await ct();return t.filter(a=>a.role>=1)}),Be=p("user/deteleUser",async t=>{const{data:s}=await Us(t);return s}),aa=p("edit/editUser",async t=>{const{data:s}=await Hs(t);return s}),na=p("user/importXlsx",async t=>{const{data:s}=await qs(t);return s}),Fe=p("findcart",async t=>{const{data:s}=await Ws(t);return s.cart}),Ve=p("uploadImage",async({id:t,formData:s})=>{const{data:a,status:r}=await Gs(t,s);return a}),ut=F({name:"user",initialState:{value:[],cartUser:[],isLoading:!1,error:!1,login:{},isLogin:localStorage.getItem("isLogin")==="true",user:{}},reducers:{logout(t){localStorage.removeItem("token"),V.success("Logout successful!"),t.isLogin=!1,localStorage.setItem("isLogin","false"),t.user={}}},extraReducers:t=>{t.addCase(De.fulfilled,(s,a)=>{s.error=!1,s.value=a.payload.newUser}).addCase(De.rejected,(s,a)=>{s.error=!0}),t.addCase(ce.pending,(s,a)=>{s.isLoading=!0}).addCase(ce.fulfilled,(s,a)=>{localStorage.setItem("token",JSON.stringify(a.payload)),s.login=a.payload,s.error=!1,s.isLogin=!0,s.isLoading=!1,s.user=a.payload.user,localStorage.setItem("isLogin","true")}).addCase(ce.rejected,(s,a)=>{s.error=a.payload,s.isLoading=!1}),t.addCase(ta.fulfilled,(s,a)=>{s.value=a.payload}),t.addCase(Be.fulfilled,(s,a)=>{s.value=s.value.filter(r=>r._id!==a.payload._id)}).addCase(Be.rejected,(s,a)=>{}),t.addCase(sa.fulfilled,(s,a)=>{s.value=a.payload}),t.addCase(aa.fulfilled,(s,a)=>{s.value.push(a.payload)}),t.addCase(na.fulfilled,(s,a)=>{s.value.unshift(a.payload)}),t.addCase(Fe.pending,(s,a)=>{s.isLoading=!0}).addCase(Fe.fulfilled,(s,a)=>{s.isLoading=!1,s.cartUser=a.payload}),t.addCase(pe.fulfilled,(s,a)=>{s.user=a.payload,s.isLoading=!1}).addCase(pe.pending,(s,a)=>{s.isLoading=!0}),t.addCase(Ve.fulfilled,(s,a)=>{s.isLoading=!1,s.user=a.payload.data}).addCase(Ve.pending,(s,a)=>{s.isLoading=!0}),t.addCase(ea.fulfilled,(s,a)=>{const r=s.user.cart.filter(n=>n.product._id!==a.payload.product);s.user.cart=r})}}),{logout:ra}=ut.actions,ia=ut.reducer,Q=I(),$=o.createContext(null),oa=t=>{const s=M(),{user:a}=A(j=>j.user),r=localStorage.getItem("isLogin"),n=A(j=>j.user.isLogin),[i,l]=o.useState(!1),[x,c]=o.useState(!1),h=()=>{c(!x)};o.useEffect(()=>{Q&&s(pe(Q.user._id))},[n,s,i]);const f={Auth:Q||"",user:a,isLoggedIn:r,isLoggedInState:n,setReset:l,handleClick:h,state:x};return e.jsx($.Provider,{value:f,children:t.children})},b=o.memo(({level:t,children:s,...a})=>e.jsx(_t,{...a,children:s})),ne=({color:t,children:s,...a})=>e.jsx(At,{color:t,...a,children:s}),la=u.div`
height: 100vh;
`,xt=u.div`
position: relative;
height: 100vh;
justify-content: center;
display: flex;
&>*{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
`,mt=()=>e.jsx(la,{}),da=()=>{const{state:t}=o.useContext($)??{};return e.jsx(It,{className:t?"w-11/12":"w-10/12",active:!0,title:{width:"20%"},paragraph:{rows:8,width:[300,200,400,100]},loading:!0,style:{height:"100vh",padding:"0 30px"}})},ca=()=>e.jsx(xt,{children:e.jsx(b,{type:"danger",children:"Lỗi rồi kiểm tra lại mạng của bạn hoặc tải lại trang..."})}),ht=({size:t,children:s})=>e.jsx(xt,{className:"w-full",children:e.jsxs("div",{role:"status",children:[e.jsxs("svg",{className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]})}),pt=()=>e.jsx(ne,{color:"#108ee9",className:"mx-2",children:"Empty"}),gt=()=>e.jsx("p",{className:"text-white",children:"Trống!"}),ua=async t=>await d.get(t),L=t=>{const{data:s,error:a,mutate:r}=Tt(t,ua);return{data:s?s.data:"",isLoading:!s&&!a,isError:a,mutate:r}},P="https://node-4-mhqo.onrender.com/api",xa=(t,s)=>{t(ra()),s("/")},w=({to:t,children:s,...a})=>e.jsx(Ke,{to:t,...a,className:"link",children:s}),re=o.memo(({textColor:t,orientation:s,children:a,...r})=>e.jsx(Lt,{style:{color:t,borderBlockStartColor:"#999"},className:"text-white",orientation:s,...r,children:a})),U=({src:t,alt:s,style:a,...r})=>e.jsx("img",{loading:"lazy",src:t,className:"m-5 w-full h-full",style:a,alt:s,...r}),E=(t,s)=>{const a=s?s.split("/"):null,r=a==null?void 0:a.indexOf("upload");return r!==-1&&(a==null||a.splice(r+1,0,`w_${t}/f_webp`)),a==null?void 0:a.join("/")},ma=u.div`
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius:10px;
}
::-webkit-scrollbar {
  width: 2px;
}
`,ha=u.div`
background: rgb(28, 28, 30);
border-radius: 10px;
margin: 5px 0px;
`,pa=()=>{const{data:{data:t}}=L("/category/filters");return e.jsxs("div",{className:"rounded des w-3/12 relative overflow-hidden lg:block md:hidden hidden bg-[#0000005e]",children:[e.jsx(re,{className:"m-0",textColor:"#fff",orientation:"left",children:"Xem thêm"}),e.jsx(ma,{className:"absolute h-full w-full px-2 overflow-scroll",children:t&&(t==null?void 0:t.map((s,a)=>e.jsxs(ha,{className:"flex lg:gap-1 my-2 py-2",children:[e.jsx("div",{className:"w-3/12",children:e.jsx(w,{to:"/q/"+s._id,children:e.jsx(U,{className:"m-0 h-full",src:E(100,s.linkImg),alt:s.name})},a)}),e.jsxs("div",{className:"w-9/12",children:[e.jsx(w,{style:{textDecoration:"none",color:"#999",fontSize:"13px"},to:"/q/"+s._id,children:s.name},a),e.jsxs(ne,{color:"#108ee9",className:"text-[12px] text-[#999] my-2 block w-6/12 ",children:[" ",s.sumSeri+" Tập VietSub"]}),e.jsx(ne,{color:"#2db7f5",children:s.type?s.type:"null"}),e.jsx("div",{className:"text-sm text-gray-400 mt-2",children:e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(b,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(b,{className:"mr-2 text-gray-300",children:s.typecm}),e.jsxs(b,{className:"text-gray-400 text-sm",children:["(",s.time,")"]})]})})]})]},a)))})]})},yt=({content:t,settings:s})=>e.jsx(Pt,{...s,children:t}),Si=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],ga=[e.jsx(Xe,{}),e.jsx($t,{}),e.jsx(Ze,{}),e.jsx(Et,{}),e.jsx(Rt,{}),e.jsx(zt,{}),e.jsx(Ot,{}),e.jsx(Dt,{}),e.jsx(Bt,{})],_i=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Action",dataIndex:"action",key:"action"}],Ai=[{title:"Url",dataIndex:"url",key:"url"},{title:"Image",dataIndex:"image",key:"image"},{title:"Action",dataIndex:"action",key:"action"}],Ii=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Path",dataIndex:"path",key:"path"},{title:"Product",dataIndex:"product",key:"product"},{title:"Categorymain",dataIndex:"categorymain",key:"categorymain"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"},{title:"Checked",dataIndex:"checked",key:"checked"}],Ti=[{title:"Stt",dataIndex:"stt",key:"stt",width:50},{title:"Name",dataIndex:"name",key:"name",width:150},{title:"Image",dataIndex:"image",key:"Image",width:150},{title:"Duration",dataIndex:"duration",key:"duration",width:50},{title:"isActive",dataIndex:"isActive",key:"isActive",width:50},{title:"Year",dataIndex:"year",key:"year",width:50},{title:"Set",dataIndex:"set",key:"set",width:50},{title:"Week",dataIndex:"week",key:"week",width:50},{title:"Action",dataIndex:"action",key:"action",width:100}],Li=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Product",dataIndex:"product",key:"product"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Day",dataIndex:"day",key:"day"},{title:"Action",dataIndex:"action",key:"action"}],Pi=[{title:"Id",dataIndex:"_id",key:"_id"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],$i=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Image",dataIndex:"image",key:"image"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"}],Ei=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Role",dataIndex:"role",key:"role"},{title:"Status",dataIndex:"status",key:"status"},{title:"Image",dataIndex:"image",key:"image"}],Ri=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Image",dataIndex:"image",key:"image"},{title:"Status",dataIndex:"status",key:"status"},{title:"Role",dataIndex:"role",key:"role"},{title:"Action",key:"action",dataIndex:"action",with:150}],ya=[{title:"Name",dataIndex:"name",key:"name"},{title:"Action",dataIndex:"action",key:"action"}],fa={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},ja={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!1,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2,dots:!0}}]},O=I(),va=async t=>await d.post(`/week/${O.user._id}`,t,{headers:{Authorization:`Bearer ${O.token}`}}),wa=async t=>await d.delete(`/week/${t}/${O.user._id}`,{headers:{Authorization:`Bearer ${O.token}`}}),ba=async t=>await d.get(`/week?w=${t}`),ka=async(t,s)=>await d.post(`/week/category/${t}/${O.user._id}`,s,{headers:{Authorization:`Bearer ${O.token}`}}),W=o.createContext(null),Ca=t=>{const[s,a]=o.useState(1),{data:r}=L(P+"/weeks"),{data:n}=L(P+"/background"),{data:i,isLoading:l}=L(P+"/types"),x={seri:i,loadingSeri:l,background:n,weeks:r,setPage:a,page:s};return e.jsx(W.Provider,{value:x,children:t.children})},D=o.memo(({level:t,children:s,...a})=>e.jsx(Ft,{level:t,...a,children:s})),ge=o.memo(({title:t,link:s,image:a,sumSeri:r,time:n,typecm:i,year:l,products:x})=>{const c=x?x[x.length-1]:"";return e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"relative group",children:e.jsxs(w,{to:s,className:"block",children:[e.jsx("div",{className:"relative w-full h-[200px] md:h-[250px] lg:h-[320px]",children:e.jsx(U,{src:E(300,a),alt:t,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-2 py-1 font-medium",children:c?`Tập ${c.seri}`:e.jsx(gt,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(Qe,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4",children:e.jsx(w,{to:s,children:e.jsx(D,{level:5,style:{color:"#fff"},className:"text-xl md:text-2xl lg:text-3xl font-bold",children:t})})}),e.jsxs("div",{className:"text-sm text-gray-400 mt-2",children:[e.jsx("div",{className:"font-semibold",children:r?`${r} Tập`:""}),e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(b,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(b,{className:"mr-2 text-gray-300",children:i}),e.jsxs(b,{className:"text-gray-400 text-sm",children:["(",n,")"]})]}),e.jsx("div",{className:"font-semibold mt-2",children:l?`${l}`:""})]})]})});function Na(){var j;const{weeks:t}=o.useContext(W)||{},s=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],r=new Date().getDay(),[n,i]=o.useState(!0),[l,x]=o.useState(s[r]),[c,h]=o.useState([]),f=y=>{x(y)};return o.useEffect(()=>{const y=async()=>{const{data:C}=await ba(l);h(C),i(!1)};i(!0),y()},[l]),e.jsxs("div",{className:"container mx-auto my-10",children:[e.jsx("div",{className:"px-4 lg:px-[150px] md:px-[100px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0",children:t&&t.map(y=>e.jsx("div",{className:l===y.name?"active border-none":"cursor-pointer",onClick:()=>f(y.name),children:e.jsx("div",{className:"text-[11px] md:text-[12px] lg:text-[14px] flex justify-center items-center px-4 py-2 text-white rounded-lg w-full",children:e.jsx("p",{children:y.name})})},y._id))}),e.jsx("div",{className:"my-5 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full",children:n?e.jsx(mt,{}):e.jsx(yt,{settings:fa,content:(j=c==null?void 0:c.content)==null?void 0:j.map(y=>e.jsx("div",{className:"px-2",children:e.jsx(ge,{title:y.name,link:"/q/"+y._id,image:y.linkImg,time:y.time,sumSeri:y.sumSeri,products:y.products})},y._id))})})]})}const _=o.memo(({gutter:t,justify:s,align:a,children:r,...n})=>e.jsx(Vt,{gutter:t,justify:s,align:a,...n,children:r})),g=({children:t,...s})=>e.jsx(Mt,{...s,children:t}),Sa=o.memo(({type:t,gutter:s,child:a,...r})=>e.jsx(_,{gutter:s,children:t==="category"?a&&a.length&&a.map((n,i)=>e.jsx(g,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(ge,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,year:n.year,sumSeri:n.sumSeri,products:n.products})},n._id)):a&&a.length?a.map((n,i)=>e.jsx(g,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(ge,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,sumSeri:n.sumSeri})},n._id)):e.jsx(pt,{})})),B=I(),_a=async t=>await d.get(`/categorys?page=${t}`),Aa=async t=>await d.get(`/category/${t}`),Ia=async t=>await d.post(`/category/${B.user._id}`,t,{headers:{Authorization:`Bearer ${B.token}`}}),Ta=async t=>await d.delete(`/category/${t}/${B.user._id}`,{headers:{Authorization:`Bearer ${B.token}`}}),La=async t=>await d.post(`/category/${t.get("_id")}/${B.user._id}`,t,{headers:{Authorization:`Bearer ${B.token}`}}),Pa=async t=>await d.get("/category/getAllCategoryNotRequest/"+t),$a=async t=>await d.get(`/categorys/search?value=${t}`),Ea=async(t,s)=>await d.post("/rating/"+t,s),Ra=async t=>await d.post("/category/changeLatest",t),ee=p("category/getAllcate",async t=>{const{data:s}=await _a(t);return s}),ye=p("category/getOne",async t=>{const{data:s}=await Aa(t);return s}),Me=p("getAll/Category",async t=>{const{data:s}=await Pa(t);return s}),za=p("add/Addcate",async t=>{const{data:s}=await Ia(t);return s}),Oa=p("delete/DeleteCate",async t=>{const{data:s}=await Ta(t);return s}),Da=p("update/Category",async t=>{const{data:s}=await La(t);return s}),ft=()=>{const{data:t}=A(r=>r.category.category),s=A(r=>r.category.isLoading);A(r=>r.category.isError);const a=M();return o.useEffect(()=>{a(ee(1))},[]),s?e.jsx("div",{className:"seriLoading",children:"Loading..."}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(D,{level:2,underline:!0,style:{color:"#fff"},strong:!0,className:"uppercase",children:"Xem Nhiều"}),e.jsx(w,{to:"/loadmore","aria-label":"Tải thêm nội dung",children:e.jsxs("div",{className:"text-[16px] text-[#fff] flex lg:text-[20px] md:text[18px] gap-3",children:[e.jsx("span",{className:"underline",children:"See More"}),e.jsx("span",{children:e.jsx(Ut,{title:"Tải thêm nội dung..."})})]})})]}),e.jsx(Sa,{type:"category",gutter:[16,16],child:t})]})},Ba=()=>{const{data:{data:t}}=L(P+"/category/latest");return e.jsxs("div",{children:[e.jsx("h2",{className:"text-white category text-md md:text-md pl-2 mb-2 mx-2 my-3 border-l-4  font-sans font-bold border-teal-400 dark:text-gray-200",children:"Mới Cập Nhật"}),e.jsx(yt,{settings:ja,content:t&&t.map((s,a)=>{const r=s.products[s.products.length-1];return e.jsx("div",{children:e.jsxs("div",{className:"w-full ",children:[e.jsx("div",{className:"relative group ",children:e.jsxs(w,{to:`/q/${s._id}`,className:"block mx-2",children:[e.jsx("div",{className:"relative h-[200px] w-[120px] custom-slide md:w-[160px] lg:w-[180px]",children:e.jsx(U,{src:E(220,s.linkImg),alt:s.name,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-1 md:px-2 py-1 font-medium",children:r?`Tập ${r.seri}`:e.jsx(gt,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(Qe,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4",children:e.jsx(w,{to:"/q/"+s._id,children:e.jsx("div",{style:{color:"#999"},className:"text-sm md:text-md lg:text-md",children:s.name})})})]})},s._id)})})]})};function jt({children:t}){const[s,a]=o.useState(!1),r=o.useRef(null);return o.useEffect(()=>{const n=new IntersectionObserver(i=>{i[0].isIntersecting&&a(!0)},{threshold:1});return r.current&&n.observe(r.current),()=>{r.current&&n.unobserve(r.current)}},[]),e.jsxs("div",{children:[s&&t,e.jsx("div",{ref:r,style:{height:"1px"}})]})}const Fa=u.video``,Va=u.div`
  padding-bottom: 60%;
  @media (min-width: 768px) {
    padding-bottom: 50%;
  }
  @media (min-width: 1024px) {
    padding-bottom: 45%;
  }
`,Ma=o.memo(()=>{const{data:t,isError:s}=L(P+"/trailer"),{state:a}=o.useContext($);return s?e.jsx(ca,{}):e.jsxs("div",{className:a?"p-3":"mt-3",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"lg:w-9/12 md:w-12/12 sm:w-full",children:e.jsxs("div",{className:"h-full",children:[e.jsx(Va,{className:"relative md:mx-2",children:e.jsx(Fa,{className:"h-full absolute bg-black rounded",width:"100%",loop:!0,muted:!0,autoPlay:!0,controls:!0,src:t.url})}),e.jsx(Ba,{})]})}),e.jsx(pa,{})]}),e.jsx(Na,{}),e.jsx(jt,{children:e.jsx(ft,{})})]})}),Ce=({ogTitle:t,description:s,imageUrl:a,mainTitle:r,title:n,...i})=>e.jsxs(Ht,{children:[e.jsx("title",{children:n}),e.jsx("meta",{property:"og:title",content:t}),e.jsx("meta",{property:"og:description",content:s}),e.jsx("meta",{property:"og:image",content:a}),Object.keys(i).map(l=>e.jsx("meta",{...i[l]},l))]}),Ua=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ce,{ogTitle:"Hoạt Hình Trung Quốc",description:"Đấu Phá Thương Khung Phần 5",imageUrl:E(200,"https://res.cloudinary.com/daz3lejjo/image/upload/w_100/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),title:"Hoạt Hình 3D"}),e.jsx(Ma,{})]}),k=I(),Ha=async t=>await d.get(`products?page=${t}`),qa=async t=>await d.get(`product/${t}`),Wa=async t=>await d.delete(`/product/${t}/${k.user._id}`,{headers:{Authorization:`Bearer ${k.token}`}}),Ga=async t=>await d.post(`/product/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Ya=async t=>await d.put(`/product/${t.get("_id")}/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Ja=async t=>await d.post("/products/creating",t,{}),zi=async t=>await d.post(`/products/deleteMultiple/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Ka=async t=>await d.get(`/category/products/${t}`),Oi=async(t,s)=>await d.post(`/product/pushlist/${t}/${k.user._id}`,s,{headers:{Authorization:`Bearer ${k.token}`}}),Di=async(t,s)=>await Bs.post(`/product/abyss/${t}/${k.user._id}`,s,{headers:{Authorization:`Bearer ${k.token}`}}),Bi=async t=>await d.post(`/product/approve/${t}/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Fi=async t=>await d.post(`/product/approve/cancel/${t}/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Xa=async t=>await d.get(`/product/filter?c=${t}`),Za=async t=>await d.get(`/product/v?name=${t}`),Vi=async()=>await d.post(`/products/clear/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Ue=p("product/getProducts",async t=>{const{data:s}=await Ha(t);return{product:s.data,length:s.length}}),fe=p("product/getProduct",async t=>{const{data:s}=await qa(t);return s}),Qa=p("product/deleteProduct",async t=>{const{data:s}=await Wa(t);return s}),en=p("product/addProduct",async t=>{const{data:s,status:a}=await Ga(t);return s}),tn=p("product/editProduct",async t=>{const{data:s}=await Ya(t);return s}),sn=p("product/importDataFile",async t=>{const{data:s}=await Ja(t);return s}),vt=p("product/getAllProductDataByCategory",async t=>{const{data:s}=await Ka(t);return s}),an=p("product/filter",async t=>{const{data:s}=await Xa(t);return s}),nn=p("product/Search",async t=>{const{data:s}=await Za(t);return s}),rn=t=>t.product.getOneProduct,on=t=>t.product.getAllProductByCategory,Mi=t=>t.category.category,ln=t=>t.user.value,Ui=t=>t.user.value,dn=u.button`
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
`,He=u.button`
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
`,cn=o.memo(({seriProduct:t})=>e.jsx(_,{gutter:14,items:"center",children:t.map((s,a)=>s.isApproved==!0?e.jsx(g,{xl:3,lg:3,md:4,sm:4,xs:6,className:"mt-2",children:e.jsx(we,{className:({isActive:r,isPending:n})=>r?"activeSeri":"",to:"/d/"+s._id+`?c=${s.category}`,children:e.jsx(dn,{className:s.seri&&"w-full",children:s.seri&&"Tập "+s.seri})})},a):"")})),T=o.memo(({children:t,...s})=>e.jsx(qt,{...s,children:t})),G=t=>V.success(t),wt=t=>V.warning(t),z=t=>V.error(t),un=({item:t,id:s})=>{var f;const a=M(),{Auth:r,user:n,isLoggedInState:i}=o.useContext($),[l,x]=o.useState(!1),c={user:r?r.user._id:"",product:s};o.useEffect(()=>{var y,C;const j=(y=n==null?void 0:n.cart)==null?void 0:y.find(N=>N.product._id===s);x(((C=j==null?void 0:j.product)==null?void 0:C._id)===s)},[n.cart,s]);const h=()=>{!r&&i==!1?z("Bạn cần đăng nhập!"):l?wt("Đã tồn tại trong yêu thích!"):(a(he(c)),x(!0),G("Thêm vào danh sách yêu thích thành công!"))};return e.jsxs("div",{className:"lg:flex md:flex-row items-center @screen md:justify-between flex flex-col",children:[e.jsx(w,{to:"/q/"+((f=t==null?void 0:t.category)==null?void 0:f._id),className:"text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(D,{level:4,style:{color:"#fff"},className:"uppercase",children:t.name})}),e.jsx(T,{style:{color:"#fff"},icon:e.jsx(te,{}),disabled:l,className:"flex items-center justify-center",onClick:()=>h(),children:l?"Đã yêu thích":"Thêm vào yêu thích"})]})},xn=({getOneProductDetail:t})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{color:"#fff",margin:"10px 0"},children:t.seri?t.trailer?"Trailer "+t.seri:"Tập "+t.seri:""}),e.jsx("div",{className:"des text-[#999]",children:e.jsxs("p",{children:["Ngày đăng:"," ",Wt(t.uploadDate).format("LTS DD-MM-YYYY")]})}),e.jsx("div",{style:{color:"#fff",margin:"10px 0"},className:"des",children:e.jsxs("div",{className:"text-[#999] flex items-center gap-2 lg:justify-start @screen justify-center",children:[e.jsx(Gt,{}),t.view*36," Lượt xem"]})}),e.jsxs("div",{className:"p-3 mt-3 mb-3 text-white rounded  flex items-center lg:justify-start @screen justify-center",style:{background:"rgb(0 0 0 / 47%)"},children:["Copyright video:",e.jsx("div",{className:"text-slate-400",children:" "+t.copyright})]})]}),mn=u.div`
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
 
`,jn=t=>t.product.isLoading,vn=()=>{var C,N,R,Y,J;const t=A(on),s=A(rn),a=A(jn),[r,n]=o.useState(""),{id:i}=be(),{c:l}=Yt.parse(window.location.href.split("?")[1]),[x,c]=o.useState("dailyMotion"),h=M(),[f,j]=o.useState(""),y=et();return o.useEffect(()=>{window.scrollTo(0,0)},[y]),o.useEffect(()=>{h(fe(i)),h(vt(l));const K=Ie.AES.decrypt(s.dailyMotionServer?s.dailyMotionServer:"","24062003").toString(Ie.enc.Utf8);j(K),n(K)},[i,s.dailyMotionServer]),e.jsxs(e.Fragment,{children:[e.jsx(Ce,{ogTitle:s==null?void 0:s.name,description:(C=s.category)==null?void 0:C.des,imageUrl:(N=s.category)==null?void 0:N.linkImg}),e.jsx("div",{className:"flex justify-center mt-4",style:{gap:"10px"},children:e.jsx(gn,{className:"col-md-12",children:s&&(a?e.jsx(ht,{size:"large",children:void 0}):e.jsxs(e.Fragment,{children:[e.jsx(yn,{className:"d-flex justify-content-center relative",children:s.dailyMotionServer!==""&&s.server2!==""?e.jsx("iframe",{allowFullScreen:!0,title:"vimeo-player",className:"absolute",src:r,style:{width:"100%",height:"100%"}}):s.trailer!==""?e.jsx("iframe",{title:"vimeo-player",className:"absolute",style:{width:"100%",height:"100%"},src:s.trailer+"?autoplay=1&mute=1"}):e.jsx(Jt,{icon:"Hiiiii!!",className:"absolute inset-0 text-white mt-5",subTitle:"Phim này đang trong quá trình cập nhật video. Vui lòng quay lại sau."})}),e.jsxs(fn,{className:"mt-4 rounded",children:[e.jsx(re,{textColor:"#fff",orientation:"center",className:"text-white md:text-sm lg:text-base text-sm underline",children:"Chọn server:"}),e.jsxs("div",{className:"md:text-sm lg:text-base text-sm flex items-center justify-center gap-4 px-4 py-3",children:[e.jsx(T,{disabled:s.link==="",onClick:()=>{c("link1"),n(s.link)},className:`text-white cursor-pointer ${x==="link1"?"activeServer":""}`,children:"#S1"}),e.jsx(T,{onClick:()=>{c("server2"),n(s.server2)},disabled:!s.server2,className:`${s.server2?" text-white cursor-pointer":""} ${x==="server2"?"activeServer":""}`,children:"#S2"}),e.jsx(T,{onClick:()=>{c("dailyMotion"),n(f)},disabled:!s.dailyMotionServer,className:`${s.dailyMotionServer?"text-white cursor-pointer":""} ${x==="dailyMotion"?"activeServer":""}`,children:"#S3"})]})]}),e.jsxs(mn,{className:"mt-2",children:[e.jsx(hn,{className:"w-3/12",children:e.jsx(U,{className:"md:block hidden",alt:"Ảnh"+((R=s.category)==null?void 0:R.name),src:E(200,s&&(((Y=s.category)==null?void 0:Y.linkImg)||s.image))})}),e.jsxs(pn,{className:"lg:w-9/12 md:w-full text-center lg:text-start",children:[e.jsx(un,{item:s,id:i}),e.jsx(xn,{getOneProductDetail:s}),e.jsx(cn,{seriProduct:t}),e.jsxs("div",{className:"text-[#999] lg:text-md sm:text-sm mt-2 mb-2",children:[e.jsx(re,{textColor:"#fff",orientation:"left",children:"Mô tả:"}),s&&((J=s.category)==null?void 0:J.des)]})]})]})]}))})})]})},wn=()=>e.jsxs(le.Fragment,{children:[e.jsx(o.Suspense,{fallback:e.jsx(da,{}),children:e.jsx(vn,{})}),e.jsx(jt,{children:e.jsx(ft,{})})]}),bn=({data:t,isLoading:s})=>{var a;return s?e.jsx("div",{className:"seriLoading",children:"Loading...."}):e.jsx("div",{className:"bg-[#9b9b9b1f] h-[174px] overflow-y-scroll p-3 rounded-sm seriCategory",children:e.jsx(_,{gutter:[16,16],children:((a=t==null?void 0:t.products)==null?void 0:a.length)>0&&(t!=null&&t.products)?t.products.map((r,n)=>r.isApproved==!0?e.jsx(g,{lg:3,md:4,sm:5,xs:6,style:{textAlign:"center"},children:e.jsx(w,{to:"/d/"+r._id+`?c=${r.category}`,children:!r.dailyMotionServer&&r.trailer?e.jsx(He,{children:r.seri}):e.jsx(He,{className:"w-full text-white",variant:"ghost",size:"sm",children:r.seri})})},n):""):e.jsx(pt,{})})})},kn=o.memo(({id:t,averageRating:s,totalRatings:a})=>{const r=async n=>{const i={rating:n};try{await Ea(t,i)}catch(l){console.error("Lỗi khi lưu đánh giá:",l)}};return e.jsxs("span",{className:"text-white flex items-center gap-2",children:[e.jsx(Kt,{className:"mt-2 mb-2",value:s,onChange:r}),a>0?e.jsx("div",{className:"relative pt-1",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{children:e.jsxs("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200",children:["Vip ",s.toFixed(2),"/",a*115," Tổng số lượt đánh giá"]})})})}):""]})}),Cn=()=>{const{id:t}=be(),s=M(),a=A(n=>n.category.details),r=A(n=>n.category.isLoading);return o.useEffect(()=>{s(ye(t))},[t]),o.useEffect(()=>{a!=null&&a.name&&(document.title=a.name)},[a]),e.jsxs(e.Fragment,{children:[e.jsx(Ce,{ogTitle:a.name,description:a==null?void 0:a.des,imageUrl:a==null?void 0:a.linkImg}),a&&e.jsx("div",{children:e.jsxs("div",{style:{color:"#fff"},children:[e.jsxs("div",{className:"md:flex lg:flex block gap-2 ",children:[e.jsx("div",{className:"mb-5 lg:w-3/12 md:w-3/12 md:h-full h-52 ",children:e.jsx("div",{className:"h-full w-full flex justify-center ",children:e.jsx(U,{className:"object-contain w-full h-full flex-grow",src:E(300,a.linkImg),alt:a.name})})}),e.jsxs("div",{className:"lg:w-9/12 md:w-9/12",children:[e.jsx("div",{className:"category text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(w,{to:"/q/"+a._id,children:e.jsx(D,{type:"secondary",level:3,className:"md:text-[18px] lg:text-[20px] sm:text-[15px]",style:{textTransform:"capitalize",color:"#fff"},children:a.name})})}),e.jsxs("div",{className:"loai des text-[12px] md:text-[13px] lg:text-[14px]",children:[e.jsx("b",{children:a.anotherName}),e.jsx("br",{}),e.jsx(b,{style:{color:"#999"},children:"Tác giả :..."}),e.jsx("br",{}),e.jsx(b,{style:{color:"#999"},children:"Quốc gia : Chinese"}),e.jsx("div",{children:e.jsxs(b,{style:{color:"#999"},children:["Thể loại :"," ",e.jsx("span",{className:"p-1 bg-gray-500 rounded-sm",children:a.type})]})}),e.jsx("div",{children:e.jsxs(b,{style:{color:"#999"},children:["Tổng Số tập: ",a._id==t?a.sumSeri:""]})}),e.jsx("div",{children:e.jsx(b,{style:{color:"#999"},children:a.time+" "})}),e.jsx("div",{children:e.jsxs(b,{style:{color:"#999"},children:["Năm phát hành : ",a.year]})}),e.jsx("div",{}),e.jsx(ne,{color:"#2db7f5",className:"my-2",children:a.isActive==0?"Đang chiếu":"Hoàn thành"}),e.jsxs("div",{id:"toast-simple",className:"flex mb-2 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800",role:"alert",children:[e.jsx(tt,{}),e.jsx("div",{className:"ps-4 text-sm font-normal",children:"Vietsub lúc 10h00 Thứ 4 hàng tuần"})]})]}),e.jsx(bn,{isLoading:r,data:a}),e.jsx(kn,{id:t,averageRating:a.averageRating,totalRatings:a.totalRatings})]})]}),e.jsxs("div",{className:"text-[#999] lg:text-[15px] md:text[14px] text-[13px]",children:[e.jsx(re,{textColor:"#fff",orientation:"left",children:"NỘI DUNG PHIM"}),a.des]})]})},a._id)]})},Nn=()=>e.jsx(e.Fragment,{children:e.jsx(Cn,{})});const qe=o.memo(({title:t,src:s,size:a,...r})=>e.jsx("div",{title:t,style:{cursor:"pointer"},children:e.jsx(Xt,{size:a,color:"default",src:s,...r})})),je=({isLoggedInState:t,style:s})=>{var l,x,c,h,f;const a=I(),r=q(),n=M(),i=()=>{a?r("/cart/user"):z("Bạn cần đăng nhập!")};return e.jsx(le.Fragment,{children:a&&t?e.jsx(Te,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx(Le,{content:e.jsxs(e.Fragment,{children:[e.jsx(w,{to:"/profile",children:e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:12,children:[e.jsx(g,{children:e.jsx(Zt,{})}),e.jsx(g,{children:e.jsx(b,{level:6,className:"auth",children:"Your profile"})})]})}),e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(te,{})}),e.jsx(g,{children:e.jsx(b,{style:{cursor:"pointer"},onClick:i,className:"auth",children:"Saved"})})]}),a.user&&((l=a==null?void 0:a.user)==null?void 0:l.role)>=1&&e.jsx(w,{to:"/dashboard",children:e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(se,{})}),e.jsx(g,{children:e.jsx(b,{className:"auth",children:"Admin"})})]})}),e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(st,{})}),e.jsx(g,{children:e.jsx(b,{style:{cursor:"pointer"},onClick:()=>xa(n,r),children:"Logout"})})]})]}),title:e.jsx(D,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:(x=a==null?void 0:a.user)==null?void 0:x.username}),placement:"bottomLeft",trigger:"click",children:e.jsx(qe,{className:"text-center",title:(c=a==null?void 0:a.user)==null?void 0:c.name,src:E(50,a.user&&((h=a==null?void 0:a.user)==null?void 0:h.image)),size:"sm"})})}):e.jsx(Te,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx(Le,{content:e.jsx(w,{to:"/signin",children:e.jsxs(_,{align:"middle",gutter:[12,12],children:[e.jsx(g,{children:e.jsx(Qt,{})}),e.jsx(g,{children:e.jsx(b,{level:6,className:"auth",children:"Signin"})})]})}),title:e.jsx(D,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:"Hi"}),placement:"bottomLeft",trigger:"click",children:e.jsx(qe,{title:(f=a==null?void 0:a.user)==null?void 0:f.name,src:void 0,style:s,size:40,icon:e.jsx(se,{})})})})})},{Content:Sn,Sider:_n,Header:An,Footer:In}=ue,Tn=()=>{const t=Zr.map((n,i)=>{var x;const l=String(i+1);return{key:`${l+1}`,icon:n.icon,label:e.jsx(w,{to:n.path,children:n.name}),children:(x=n==null?void 0:n.children)==null?void 0:x.map((c,h)=>{const f=h+1;return{key:`subitem-${l}-${f}`,icon:c.icon,label:e.jsx(w,{to:c.path,children:c.name})}})}}),{isLoggedInState:s}=o.useContext($)??{},[a,r]=o.useState(!1);return e.jsxs(ue,{style:{minHeight:"100vh"},children:[e.jsxs(_n,{trigger:null,collapsible:!0,collapsed:a,className:"overflow-y-auto ",style:{height:"100%",position:"fixed"},children:[e.jsx("div",{className:"p-4 bg-[#fff]",children:e.jsx("div",{className:"h-8 w-full bg-[#ddd] rounded"})}),e.jsx(xe,{style:{height:"100%"},theme:"light",mode:"inline",defaultSelectedKeys:["1"],items:t})]}),e.jsxs(ue,{style:{marginLeft:a?80:200},children:[e.jsx(An,{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",padding:0},children:e.jsxs(_,{align:"middle",justify:"space-between",children:[e.jsx(g,{children:e.jsx(T,{type:"text",icon:a?e.jsx(at,{}):e.jsx(nt,{}),onClick:()=>r(!a),style:{fontSize:"16px",width:64,height:64},children:void 0})}),e.jsx(g,{children:e.jsx(w,{to:"/",children:"Home Page"})}),e.jsx(g,{style:{textAlign:"center"},span:1,children:e.jsx(je,{isLoggedInState:s,style:void 0})})]})}),e.jsx(Sn,{style:{padding:"24px",minHeight:"calc(100vh - 64px)",overflow:"auto"},children:e.jsx(rt,{})}),e.jsx(In,{children:"© 2023 copyright | PH ANG"})]})]})},Ln=t=>{const s=I();try{return s?s.user.role==0?e.jsx(Pe,{to:"/"}):t.children:e.jsx(Pe,{to:"/"})}catch{return e.jsx("div",{className:"text-light container text-center",children:e.jsx(w,{to:"/signin",children:"Đăng nhập"})})}},Pn=u.div`
color:#999;
font-weight:500;
`,$n=u.div`
color: rgb(255, 214, 99);
font-weight:500;
`,En=u.div`
display: flex;
align-items: center;
justify-content: center;
gap:0 5px;
 
&>a{
    color: rgb(255, 214, 99) !important;
    font-weight:500;
}
`;u.div`

`;const Rn=o.memo(({data:t,icons:s,id:a,background:r,...n})=>e.jsx(xe,{className:"h-full",style:{background:r},children:t&&t.map((i,l)=>o.createElement(xe.Item,{...n,icon:i.icon?i.icon:s[l],key:l},a==!0?e.jsx(we,{to:i.path=="/"?i.path:i.path+`/${i._id}`,children:i.name},l):e.jsx(w,{to:i.path,children:i.name})))})),zn=u.div`
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
`;const On=u.div`
  @media (max-width: 768px) {
    display: none;
  }
`,We=u.input`
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
`,Dn=u.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`,Bn=u.div`
  font-size: 11px;
  font-weight: 400;
`,Fn=u.div`
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
`,Vn=u.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
  justify-content: ${t=>t.justify};
`,Mn=u.div``,Un=u.div`
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
`,Hn=u.div`
  color: #d9d9d9;
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`,qn=u.div`
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
`,Wn=u.div`
  display: block;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`,ve=({data:t})=>t.length>0?e.jsx("div",{className:"absolute top-[50px] left-0 w-full flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:e.jsx("div",{className:"p-4 flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700",children:t.map((s,a)=>e.jsx(w,{to:`/q/${s._id}`,children:e.jsx("div",{className:"flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:s.name})},s._id))})}):e.jsx(e.Fragment,{}),Gn=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"})),Yn=[e.jsx(Xe,{}),e.jsx(as,{}),e.jsx(st,{}),e.jsx(it,{})],Jn=()=>{const{Auth:t,isLoggedInState:s,state:a,handleClick:r}=o.useContext($)??{},[n,i]=o.useState(!1),[l,x]=o.useState(0),[c,h]=o.useState("20px 10px"),[f,j]=o.useState(!1),y="left",[C,N]=o.useState(""),[R,Y]=o.useState([]),J=()=>{j(!0)},K=()=>{j(!1)};window.addEventListener("scroll",()=>{const S=window.pageYOffset;i(l>S),x(S),window.scrollY>10?h("10px 5px"):h("20px 10px")});const Ct=q(),Ne=()=>{t?Ct("/cart/user"):z("Bạn cần đăng nhập!")},Se=es.debounce(async S=>{const{data:de}=await $a(S);Y(de)},500),_e=async S=>{N(S),Se(S)};o.useEffect(()=>()=>{Se.cancel()},[C]),o.useEffect(()=>{i(!0)},[]);const Ae=s?Kr:Jr;return e.jsxs(le.Fragment,{children:[e.jsxs(_,{align:"middle",justify:"space-between",className:`${a?"w-11/12":"w-10/12"} lg:flex hidden z-[100] fixed right-0`,style:{top:n?"0":"-25%",padding:c,backgroundColor:"#00000038"},children:[e.jsx(g,{span:1,children:e.jsx(Wn,{className:"text-[21px] md:text-[23px] lg:text-[25px]",onClick:r,children:a?e.jsx(nt,{}):e.jsx(at,{})})}),e.jsxs(g,{span:6,className:"relative",children:[e.jsx(We,{style:{boxShadow:"#333 0px 2px 10px"},onChange:S=>_e(S.target.value),placeholder:"Search..."}),e.jsx(ve,{data:R})]}),e.jsx(g,{span:16,children:e.jsxs(_,{justify:"center",align:"middle",children:[e.jsx(_,{children:Ae.map((S,de)=>e.jsx(g,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:e.jsx(w,{style:{color:"#fff",textDecoration:"none",margin:"0 20px"},to:S.path,children:S.name})},de))}),e.jsx(g,{children:e.jsxs(En,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:[e.jsx(Pn,{children:"Liên hệ qc tele: "}),e.jsxs("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:[e.jsx($n,{}),"@PH ANG"]})]})}),e.jsx(g,{className:"ml-5 text-[15px] lg:text-[17px] md:text[16px]",style:{marginLeft:"50px"},onClick:Ne,children:e.jsx(te,{className:"__ text-yellow-500"})})]})}),e.jsx(g,{span:1,className:"text-end",children:e.jsx(je,{isLoggedInState:s,style:{backgroundColor:"#fde3cf",color:"#f56a00",textAlign:"center"}})})]}),e.jsxs("div",{className:"navbar_mb w-10/12 absolute right-0 z-10",children:[e.jsxs(_,{align:"middle",justify:"space-between",className:"navbar bgNav mb",children:[e.jsx(g,{children:e.jsx(ts,{className:"text-white",onClick:J})}),e.jsx(g,{children:e.jsx("div",{className:"ml-5 relative",onClick:Ne,children:e.jsx(te,{className:"__ text-yellow-500"})})}),e.jsxs(g,{span:16,className:"relative",children:[e.jsx(We,{onChange:S=>_e(S.target.value),placeholder:"Search..."}),e.jsx(ve,{data:R})]}),e.jsx(g,{children:e.jsx(je,{isLoggedInState:s,style:{backgroundColor:"#fde3cf",color:"#f56a00",lineHeight:"30px"}})})]}),e.jsx(ss,{width:200,title:"Drawer",placement:"left",closable:!1,onClose:K,open:f,closeIcon:!0,className:"relative z-10",children:e.jsx(Rn,{icons:Yn,id:!1,background:"#fff",data:Ae})},y)]})]})},Kn=()=>e.jsx(e.Fragment,{children:e.jsx(le.Fragment,{children:e.jsxs("div",{className:"ft text-white",children:[e.jsx("link",{rel:"stylesheet",integrity:"sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=",crossOrigin:"anonymous"}),e.jsx("footer",{className:"footer",children:e.jsx("div",{className:"footer-bottom footer-border-top light py-3",children:e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"m-0",children:["© 2023 copyright"," ",e.jsx("a",{href:"#",className:"text-reset",children:"| PH ANG"})]})})})})]})})}),Xn=()=>e.jsx("div",{className:"md:mt-[50px] lg:mt-[50px] lg:flex hidden justify-center text-white ",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"card p-3 ",style:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"d-flex justify-center",children:e.jsx("img",{src:E(80,"https://res.cloudinary.com/daz3lejjo/image/upload/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),alt:"Đấu phá thương khung phần 5",className:"avatar-md rounded-circle img-thumbnail"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-size-16 mb-1 mt-1",children:e.jsx(w,{to:"#",className:"text-light",children:"Admin Contact"})}),e.jsx("span",{className:"badge badge-soft-success mb-0",children:"Web Developer"})]})]}),e.jsxs("div",{className:"mt-3 pt-1 iconContact",children:[e.jsxs("p",{className:"mb-0",children:[e.jsx(ns,{}),e.jsx("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:"Facebook"})]}),e.jsxs("p",{className:"mb-0 mt-2",children:[e.jsx(rs,{}),e.jsx("a",{href:"https://www.tiktok.com/@tieu_loli",children:"Tiktok"})]})]})]})})})}),Zn=()=>{const{seri:t,loadingSeri:s}=o.useContext(W)||{},{state:a}=o.useContext($)||{},r=a?"w-1/12":"w-2/12";return e.jsx(zn,{className:r,children:e.jsxs(Fn,{className:r,children:[e.jsx(Vn,{justify:a?"center":"start",children:e.jsxs(On,{className:a?"hiddenn":"block text-white",children:[e.jsx(w,{to:"/",children:e.jsx(Dn,{children:"Hhtrungquoc.tv"})}),e.jsx(w,{to:"/",children:e.jsx(Bn,{children:"tromphim.netify.app"})})]})}),e.jsx("div",{className:"mt-[50px]",children:s?e.jsx(ht,{size:"large",children:void 0}):e.jsx(Mn,{className:"sideBarActive",children:t&&t.map((n,i)=>e.jsx(we,{title:n.name,to:n.path=="/"?n.path:n.path+`/${n._id}`,children:e.jsxs(Un,{state:a,children:[e.jsx(Hn,{children:ga[i]}),e.jsx(qn,{className:a?"hiddenn":"block",children:n.name})]})},i))})}),e.jsx(Xn,{})]})})},Qn=u.div`
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
`,er=({children:t,...s})=>{const{background:a}=o.useContext(W)||{};return e.jsx(Qn,{background:a&&a.data.url,...s,children:t})},tr=()=>{const{state:t}=o.useContext($)||{};return e.jsxs(er,{className:"text-start",children:[e.jsx("div",{children:e.jsx(Jn,{})}),e.jsxs("div",{className:"containers flex",children:[e.jsx("div",{className:t?"w-1/12":"w-2/12",children:e.jsx(Zn,{})}),e.jsx("div",{className:`${t?"w-11/12":"w-10/12"} p-2`,children:e.jsx(rt,{})})]}),e.jsx("div",{children:e.jsx(Kn,{})})]})},m=({children:t})=>e.jsx(o.Suspense,{fallback:e.jsx(mt,{}),children:t}),Ge=o.memo(({columns:t,dataSource:s,...a})=>e.jsx(ot,{columns:t,dataSource:s,...a})),sr=o.memo(({name:t,label:s,control:a,rules:r,...n})=>e.jsxs("div",{className:"mb-3",children:[e.jsx(b,{htmlFor:t,children:s}),e.jsx(is,{name:t,control:a,rules:r,defaultValue:"",render:({field:i})=>e.jsx(os,{placeholder:s,...i,...n})})]})),ar=o.memo(({title:t,cancelText:s,okText:a,onConfirm:r,children:n,...i})=>{const l=()=>{z("Hủy")};return e.jsx(ls,{title:t,onCancel:l,onConfirm:r,okText:a,cancelText:s,...i,children:n})}),nr=()=>{const{weeks:t}=o.useContext(W),{handleSubmit:s,control:a}=lt(),r=async(c,h)=>{const f={categoryId:h};try{(await ka(c,f)).data&&G("Delete Success")}catch{z("Delete Failure")}},n=async c=>{await va(c)},i=async c=>{await wa(c)},l=c=>{var j;const h=[{title:"ID",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"operation",render:(y,C)=>e.jsx(e.Fragment,{children:e.jsx(ar,{title:"Delete the category",onConfirm:()=>r(c.key,C._id),okText:"Yes",cancelText:"No",children:e.jsx(T,{type:"text",shape:"circle",className:"ml-2",children:e.jsx(ds,{})})})})}],f=((j=t.find(y=>y._id===c.key))==null?void 0:j.category)||[];return e.jsx(Ge,{columns:h,dataSource:f,pagination:!1})},x=t&&t.map((c,h)=>({key:c._id,name:c.name,action:e.jsxs(e.Fragment,{children:[e.jsx(w,{to:`/dashboard/week/edit/${c._id}`,children:e.jsx(T,{type:"primary",children:"Edit"})}),e.jsx(T,{onClick:()=>i(c._id),className:"ml-1",children:"Delete"})]})}));return e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:s(n),children:e.jsxs(_,{gutter:4,align:"middle",justify:"center",children:[e.jsx(g,{span:22,children:e.jsx(sr,{name:"name",label:"Theo tuần",control:a,rules:void 0})}),e.jsx(g,{span:2,children:e.jsx(T,{htmlType:"submit",className:"mt-3",type:"primary",children:"Thêm"})})]})}),e.jsx(Ge,{columns:ya,dataSource:x,expandable:{expandedRowRender:l,defaultExpandedRowKeys:["0"]}})]})},rr=()=>e.jsxs("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]",children:[e.jsx("h1",{className:"text-9xl font-extrabold text-white tracking-widest",children:"404"}),e.jsx("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute",children:"Page Not Found"}),e.jsx("button",{className:"mt-5",children:e.jsxs("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring",children:[e.jsx("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),e.jsx("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current",children:e.jsx(w,{to:"/",children:"Go Home"})})]})})]}),ir=u.button`
background:linear-gradient(to right, #652EEE, #040F75)
`,or=u.input`
width: 100%;
padding: 10px;
border-radius: 10px;
background: transparent;
border: 1px solid #999;
font-size: 12px;
outline:none;
color: #fff;
`,lr=u.form``,dr=u.div`
padding: 0 20px;
@media (min-width: 768px){
  padding: 0 40px;
}
@media (min-width: 1024ox) {
  padding: 0 60px;
}
`,cr=u.div`
color: #fff;
margin-top:20px;
font-size:25px;
@media (min-width: 768px){
  margin-top:30px;
}
@media (min-width: 1024ox) {
  margin-top:40px;
`,ur=u.div`
margin: 15px 0;
color: #999;
font-size:13px;
`,xr=u.div`
cursor: pointer;
`,mr=u.div`
padding: 15px 5px;
border: 1px solid #fff;
font-style: italic;
`,hr=u.div`
border-bottom: 1px dashed  #fff;
`,pr=u.div`

`,bt=o.memo(({onSubmit:t,formTitle:s,formDescription:a,submitButtonText:r,formIntro:n,formHeader:i,checkedAccount:l,handleMessage:x,redirect:c,array:h,schemaPage:f})=>{const{register:j,handleSubmit:y,formState:{errors:C}}=lt({resolver:cs(f)});return e.jsx("div",{className:"h-screen relative z-0",children:e.jsxs(dr,{className:"g-6 flex flex-wrap justify-center w-full items-center absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4",style:{transform:"translate(-50%,-50%)"},children:[e.jsxs("div",{className:"w-8/12 items-center text-white hidden lg:block md:hidden",children:[e.jsx(pr,{className:"text-[50px] ",children:i}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(mr,{className:"w-2/12",children:n}),e.jsx(hr,{className:"w-10/12"})]})]}),e.jsxs("div",{className:"md:w-8/12 lg:w-4/12 w-full lg:p-5 md:p-4 p-3",style:{background:"rgba(248, 248, 248, 0.04)",borderRadius:" 5px"},children:[e.jsxs("div",{children:[e.jsx(cr,{children:s}),e.jsx(ur,{children:a})]}),e.jsxs(lr,{onSubmit:y(t),children:[h&&h.map((N,R)=>e.jsx("div",{className:"relative lg:mb-6 md:mb-4 mb-2","data-te-input-wrapper-init":!0,children:e.jsxs("div",{children:[e.jsx(or,{disabled:N.disable,style:{background:`${N.disable?"#99979742":""}`},type:N.type,...j(`${N.field}`),placeholder:N.field,className:"placeholder:capitalize"}),C&&C[N.field]&&e.jsx("div",{className:"text-sm text-pink-600 mt-1",children:C[N.field].message})]})},R)),e.jsx("div",{className:"lg:mb-6 md:mb-5 mb-4",children:e.jsx(Ke,{to:"/forgot-password",children:e.jsxs("div",{className:"text-center text-white text-sm font-medium text-primary-600 hover:underline text-primary-500",children:["Forgot password?"," "]})})}),e.jsx(ir,{type:"submit",className:"w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600",children:r}),e.jsx("div",{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:e.jsxs("p",{className:"mx-4 mb-0 text-center text-white text-[12px]",children:[" ","OR"]})}),e.jsx(xr,{className:"flex justify-center",onClick:x,children:e.jsx(U,{style:{width:"30px",height:"30px"},src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:""})}),e.jsx("div",{className:"lg:mb-6 md:mb-4 mb-2 text-center lg:mt-5 md:mt-3 mt-2 text-slate-400 ",children:e.jsx(w,{to:c,className:"text-sm text-primary-600 hover:underline text-primary-500",children:l})})]})]})]})})}),gr=[{type:"email",field:"email",disable:!1}],yr=()=>{const t=q(),s=dt().shape({email:me().required().email()}),a=async n=>{const i=await Ys(n);i.data.success?(G(i.data.message),t("/signin")):z(i.data.message)},r=()=>{V.success("Đang cập nhật!")};return e.jsx(bt,{onSubmit:a,formTitle:"Forgot Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:r,redirect:"/forgot-password",array:gr,schemaPage:s})},fr=[{type:"password",field:"password",disable:!1},{type:"password",field:"repassword",disable:!1}],jr=()=>{const t=q(),{id:s,token:a}=be(),r=dt().shape({password:me().required().min(6,"Password tối thiểu 6 kí tự"),repassword:me().required().oneOf([us("password"),null],"Passwords must match")}),n=async l=>{const x=await Js(s,a,l);x.data.success?(G(x.data.message),t("/signin")):z(x.data.message)},i=()=>{V.success("Đang cập nhật!")};return e.jsx(bt,{onSubmit:n,formTitle:"Reset Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:i,redirect:"/reset-password",array:fr,schemaPage:r})},vr=()=>{const t=["#eb2f96","#52c41a","#eba12f"],{data:{data:s}}=L(P+"/category/latest"),a=[{title:"Name",dataIndex:"name",key:"name",render:i=>e.jsx("p",{children:i})},{title:"Action",key:"action",render:(i,l,x)=>e.jsx(T,{type:"text",shape:"circle",className:"ml-2",onClick:()=>r(l.key),children:e.jsx(ke,{type:"success",style:{color:t[x]}})})}],r=async i=>{const l={id:i},{data:x}=await Ra(l);x.success===!0&&(G("Success"),xs(P+"/category/latest"))},n=s&&s.map((i,l)=>({key:i._id,name:i.name}));return e.jsx(ot,{columns:a,dataSource:n})},wr=()=>{const t=A(ln),{data:s}=L(P+"/most-watched-episodes"),{data:a}=L(P+"/rating/stats"),r={data:s.data,xField:"seri",yField:"view",point:{shapeField:"square",sizeField:4},interaction:{tooltip:{marker:!1}},style:{lineWidth:2}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-around gap-2",children:[e.jsx(X,{className:"w-full",children:e.jsx(Z,{title:"Active Users",prefix:e.jsx(se,{}),value:t.length})}),e.jsx(X,{bordered:!0,className:"w-full",children:e.jsx(Z,{title:"Comment",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:e.jsx(ke,{}),suffix:"%"})}),e.jsx(X,{bordered:!1,className:"w-full",children:e.jsx(Z,{title:"View",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:e.jsx(ms,{}),suffix:"%"})}),e.jsx(X,{className:"w-full",children:e.jsx(Z,{title:"Rating Video",prefix:e.jsx(hs,{}),value:a.totalRatings})})]}),e.jsx("div",{className:"flex justify-between gap-2",children:e.jsx(ps,{className:"w-5/12",...r})})]})},br=o.lazy(()=>v(()=>import("./index-02e12f31.js"),["assets/index-02e12f31.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-f2ab9bc6.js"])),kr=o.lazy(()=>v(()=>import("./index-5d4ea9d7.js"),["assets/index-5d4ea9d7.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-f2ab9bc6.js","assets/index-bf65a008.js"])),Cr=o.lazy(()=>v(()=>Promise.resolve().then(()=>Gn),void 0)),Nr=o.lazy(()=>v(()=>import("./Profile-a5420cb8.js"),["assets/Profile-a5420cb8.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Sr=o.lazy(()=>v(()=>import("./Sign-in-e7fbf03c.js"),["assets/Sign-in-e7fbf03c.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),_r=o.lazy(()=>v(()=>import("./Sign-up-8075c48d.js"),["assets/Sign-up-8075c48d.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Ar=o.lazy(()=>v(()=>import("./list-059f9269.js"),["assets/list-059f9269.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Ir=o.lazy(()=>v(()=>import("./index-de0e2f18.js"),["assets/index-de0e2f18.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Tr=o.lazy(()=>v(()=>import("./add-ec1a4242.js"),["assets/add-ec1a4242.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Lr=o.lazy(()=>v(()=>import("./edit-2a922ab9.js"),["assets/edit-2a922ab9.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Pr=o.lazy(()=>v(()=>import("./admin-6594fae7.js"),["assets/admin-6594fae7.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),$r=o.lazy(()=>v(()=>import("./add-dd2c54ad.js"),["assets/add-dd2c54ad.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-7fc7aa68.js","assets/index-e9f4f802.js"])),Er=o.lazy(()=>v(()=>import("./edit-0805af1f.js"),["assets/edit-0805af1f.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-7fc7aa68.js","assets/index-e9f4f802.js"])),Rr=o.lazy(()=>v(()=>import("./adds-02876998.js"),["assets/adds-02876998.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),zr=o.lazy(()=>v(()=>import("./CreatingProducts-6ebf3baa.js"),["assets/CreatingProducts-6ebf3baa.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-e9f4f802.js"])),Or=o.lazy(()=>v(()=>import("./index-f28caf87.js"),["assets/index-f28caf87.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/type-199e4117.js","assets/index-7fc7aa68.js","assets/index-e9f4f802.js"])),Dr=o.lazy(()=>v(()=>import("./edit-480dde3d.js"),["assets/edit-480dde3d.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-e9f4f802.js","assets/index-7fc7aa68.js"])),Br=o.lazy(()=>v(()=>import("./index-304507e1.js"),["assets/index-304507e1.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Fr=o.lazy(()=>v(()=>import("./edit-ac69b670.js"),["assets/edit-ac69b670.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Vr=o.lazy(()=>v(()=>import("./index-03baa7e7.js"),["assets/index-03baa7e7.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Mr=o.lazy(()=>v(()=>import("./index-0e50260d.js"),["assets/index-0e50260d.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Ur=o.lazy(()=>v(()=>import("./index-c99dec9c.js"),["assets/index-c99dec9c.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Hr=o.lazy(()=>v(()=>import("./index-4605128c.js"),["assets/index-4605128c.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/index-bf65a008.js","assets/index-f2ab9bc6.js"])),qr=o.lazy(()=>v(()=>import("./index-1fd3ee2c.js"),["assets/index-1fd3ee2c.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css","assets/type-199e4117.js"])),Wr=o.lazy(()=>v(()=>import("./CatemainProduct-ec30520e.js"),["assets/CatemainProduct-ec30520e.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Gr=o.lazy(()=>v(()=>import("./index-412a53ea.js"),["assets/index-412a53ea.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Yr=o.lazy(()=>v(()=>import("./edit-e34b4597.js"),["assets/edit-e34b4597.js","assets/vendor-6b39dd86.js","assets/vendor-d8a7514b.css"])),Jr=[{path:"/",name:"Trang chủ",title:"Trang chủ"},{path:"/signin",name:"Đăng nhập",title:"Đăng nhập"},{path:"/signup",name:"Đăng kí",title:"Đăng kí"},{path:"/complete",name:"Hoàn Thành",title:"Hoàn Thành"}],Kr=[{path:"/",name:"Trang chủ"},{path:"/profile",name:"Hồ sơ",title:"Hồ sơ"},{path:"/complete",name:"Hoàn Thành",title:"Hoàn Thành"}],Xr=[{path:"/",element:e.jsx(tr,{}),children:[{path:"/",element:e.jsx(Ua,{}),index:!0},{path:"d/:id",element:e.jsx(m,{children:e.jsx(wn,{})})},{path:"q/:id",element:e.jsx(m,{children:e.jsx(Nn,{})})},{path:"search/category",element:e.jsx(m,{children:e.jsx(Cr,{})})},{path:"cart/user",element:e.jsx(m,{children:e.jsx(Mr,{})})},{path:"movie-content/:id",element:e.jsx(m,{children:e.jsx(kr,{})})},{path:"types/h/:id",element:e.jsx(m,{children:e.jsx(br,{})})},{path:"loadmore",element:e.jsx(m,{children:e.jsx(Hr,{})})},{path:"signup",element:e.jsx(m,{children:e.jsx(_r,{})})},{path:"signin",element:e.jsx(m,{children:e.jsx(Sr,{})})},{path:"forgot-password",element:e.jsx(m,{children:e.jsx(yr,{})})},{path:"reset-password/:id/:token",element:e.jsx(m,{children:e.jsx(jr,{})})},{path:"profile",element:e.jsx(m,{children:e.jsx(Nr,{})})}]},{path:"dashboard",element:e.jsx(Ln,{children:e.jsx(Tn,{})}),children:[{path:"",element:e.jsx(m,{children:e.jsx(wr,{})}),index:!0},{path:"products",element:e.jsx(m,{children:e.jsx(Ar,{})})},{path:"users",element:e.jsx(m,{children:e.jsx(Ir,{})})},{path:"adminUer",element:e.jsx(m,{children:e.jsx(Pr,{})})},{path:"users/:id/edit",element:e.jsx(m,{children:e.jsx(Lr,{})})},{path:"user/add",element:e.jsx(m,{children:e.jsx(Tr,{})})},{path:"user/creatingUser",element:e.jsx(m,{children:e.jsx(Rr,{})})},{path:"product/add",element:e.jsx(m,{children:e.jsx($r,{})})},{path:"product/edit/:id",element:e.jsx(m,{children:e.jsx(Er,{})})},{path:"product/creacting",element:e.jsx(m,{children:e.jsx(zr,{})})},{path:"category",element:e.jsx(m,{children:e.jsx(Or,{})})},{path:"category/edit/:id",element:e.jsx(m,{children:e.jsx(Dr,{})})},{path:"category/latest",element:e.jsx(m,{children:e.jsx(vr,{})})},{path:"trailing",element:e.jsx(m,{children:e.jsx(Br,{})})},{path:"trailerUrl/:id",element:e.jsx(m,{children:e.jsx(Fr,{})})},{path:"comments",element:e.jsx(m,{children:e.jsx(Vr,{})})},{path:"cart",element:e.jsx(m,{children:e.jsx(Ur,{})})},{path:"types",element:e.jsx(m,{children:e.jsx(qr,{})})},{path:"types/CateMainProduct/:id",element:e.jsx(m,{children:e.jsx(Wr,{})})},{path:"background",element:e.jsx(m,{children:e.jsx(Gr,{})})},{path:"background/edit/:id",element:e.jsx(m,{children:e.jsx(Yr,{})})},{path:"weeks",element:e.jsx(m,{children:e.jsx(nr,{})})}]},{path:"/*",element:e.jsx(rr,{})}],Zr=[{path:"/dashboard",name:"Admin",icon:e.jsx(gs,{})},{path:"/dashboard/products",name:"Products",icon:e.jsx(ys,{})},{name:"User",icon:e.jsx($e,{}),children:[{path:"/dashboard/users",name:"Users",icon:e.jsx(se,{})},{path:"/dashboard/adminUer",name:"Admin",icon:e.jsx(Ee,{})}]},{name:"Category",icon:e.jsx($e,{}),children:[{path:"/dashboard/category",name:"Category",icon:e.jsx(fs,{})},{path:"/dashboard/category/latest",name:"Latest",icon:e.jsx(ke,{})}]},{name:"Themes",icon:e.jsx(it,{}),children:[{path:"/dashboard/trailing",name:"Trailer",icon:e.jsx(Ee,{})},{path:"/dashboard/background",name:"Background",icon:e.jsx(js,{})}]},{name:"Big Category",icon:e.jsx(Ze,{}),children:[{path:"/dashboard/types",name:"Types",icon:e.jsx(vs,{})}]},{path:"/dashboard/comments",name:"Comments",icon:e.jsx(ws,{})},{path:"/dashboard/cart",name:"Cart",icon:e.jsx(bs,{})},{path:"/dashboard/weeks",icon:e.jsx(tt,{}),name:"Week"}],Qr=ks`
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

`,Ye=t=>{if(!t)return!0;try{const s=Cs(t),a=Date.now()/1e3;return s.exp<a}catch(s){return console.error("Error decoding token:",s),!0}};function ei(){const t=et(),s="G-0EEY3R7F0S",a=Ns(Xr),r=q(),n=I();return o.useEffect(()=>{Re.initialize(s),Re.send({hitType:"pageview",page:t.pathname,title:"User Active"}),(async()=>{if(n){const i=n.token,l=n.refreshToken;if(Ye(l))wt("Token expires-relogin"),localStorage.clear(),r("/signin");else if(Ye(i)){const x={refreshToken:n.refreshToken},{data:c}=await Ks(x);localStorage.setItem("token",JSON.stringify(c))}}})(),alert(" Xin lỗi, server phim hiện đang quá tải do lượng truy cập lớn. Vui lòng chờ đợi trong 1-2 phút để tiếp tục xem. Chúng tôi đang nỗ lực để cải thiện tình hình và xin thành thật xin lỗi vì sự bất tiện này.Trân trọng!")},[]),e.jsxs(e.Fragment,{children:[a,e.jsx(Qr,{}),e.jsx(Ss,{}),e.jsx(_s.BackTop,{visibilityHeight:200})]})}const ti={value:{product:[],length:0},isLoading:!1,getOneProduct:{},getAllProductByCategory:[],status:!1},si=F({name:"product",initialState:ti,reducers:{},extraReducers:t=>{t.addCase(Ue.pending,(s,a)=>{s.isLoading=!0}).addCase(Ue.fulfilled,(s,a)=>{s.isLoading=!1,s.value=a.payload}),t.addCase(Qa.fulfilled,(s,a)=>{s.value.product=s.value.product.filter(r=>r._id!==a.payload.data._id)}),t.addCase(en.fulfilled,(s,a)=>{s.value.product.push(a.payload)}),t.addCase(tn.fulfilled,(s,a)=>{s.value.product.push(a.payload)}),t.addCase(sn.fulfilled,(s,a)=>{s.value.product=[...s.value.product,a.payload]}),t.addCase(an.fulfilled,(s,a)=>{s.value.product=a.payload}),t.addCase(nn.fulfilled,(s,a)=>{s.value.product=a.payload}),t.addCase(fe.pending,(s,a)=>{s.isLoading=!0}).addCase(fe.fulfilled,(s,a)=>{s.isLoading=!1,s.getOneProduct=a.payload}),t.addCase(vt.fulfilled,(s,a)=>{s.getAllProductByCategory=a.payload})}}),ai=si.reducer,ni={category:{data:[],length:0},isLoading:!1,isError:!1,categoryNotReqId:[],details:{}},ri=F({name:"category",initialState:ni,reducers:{},extraReducers:t=>{t.addCase(ee.fulfilled,(s,a)=>{s.isLoading=!1,s.category=a.payload}).addCase(ee.pending,(s,a)=>{s.isLoading=!0}).addCase(ee.rejected,(s,a)=>{s.isError=!0}),t.addCase(Me.fulfilled,(s,a)=>{s.isLoading=!1,s.categoryNotReqId=a.payload}).addCase(Me.pending,(s,a)=>{s.isLoading=!0}),t.addCase(za.fulfilled,(s,a)=>{s.category.data=s.category.data.concat(a.payload)}),t.addCase(Oa.fulfilled,(s,a)=>{s.category.data=s.category.data.filter(r=>r._id!==a.payload._id)}),t.addCase(Da.fulfilled,(s,a)=>{s.category.data.push(a.payload)}),t.addCase(ye.fulfilled,(s,a)=>{s.details=a.payload,s.isLoading=!1}).addCase(ye.pending,(s,a)=>{s.isLoading=!0})}}),ii=ri.reducer,Hi=async()=>await d.get("/trailer"),ie=I(),oi=async t=>await d.put(`/trailer/${t.get("_id")}/${ie.user._id}`,t,{headers:{Authorization:`Bearer ${ie.token}`}}),qi=async t=>await d.post(`/background/${t.get("_id")}/${ie.user._id}`,t,{headers:{Authorization:`Bearer ${ie.token}`}}),li=p("trailer/Trailing",async t=>{const{data:s}=await oi(t);return s}),di=F({name:"post",initialState:{value:[],trailerValues:[]},reducers:{},extraReducers:t=>{t.addCase(li.fulfilled,(s,a)=>{s.trailerValues.push(a.payload)})}}),ci=di.reducer,oe=I(),ui=async()=>await d.get("/comments"),xi=async(t,s)=>await d.post(`/comment/${t}/${oe.user._id}`,s,{headers:{Authorization:`Bearer ${oe.token}`}}),mi=async t=>await d.post(`/comment/${oe.user._id}`,t,{headers:{Authorization:`Bearer ${oe.token}`}}),hi=p("getAllCommentSlice",async()=>{const{data:t}=await ui();return t}),pi=p("addCommentSlice",async t=>{const{data:s}=await xi(t.product,t);return s}),gi=p("deleteComment",async t=>{const{data:s}=await mi(t);return s}),yi=F({name:"comment",initialState:{value:[]},reducers:{},extraReducers:t=>{t.addCase(hi.fulfilled,(s,a)=>{s.value=a.payload}),t.addCase(pi.fulfilled,(s,a)=>{s.value.push(a.payload)}),t.addCase(gi.fulfilled,(s,a)=>{s.value=s.value.filter(r=>r._id!==a.payload._id)})}}),fi=yi.reducer,ji=F({name:"cart",initialState:{value:[],isLoading:!1,code:null},reducers:{},extraReducers:t=>{t.addCase(Oe.fulfilled,(s,a)=>{s.isLoading=!1,s.value=a.payload}).addCase(Oe.pending,(s,a)=>{s.isLoading=!0}),t.addCase(he.pending,(s,a)=>{s.isLoading=!0}).addCase(he.fulfilled,(s,a)=>{Array.isArray(s.value)||(s.value=[]),s.isLoading=!1,s.value.push(a.payload.cart)})}}),vi=ji.reducer,wi={key:"root",storage:Ps,whitelist:[""],expire:"3600000"},bi=As({product:ai,user:ia,category:ii,trailer:ci,comment:fi,cart:vi}),ki=Is(wi,bi),kt=Ts({reducer:ki,middleware:t=>t({serializableCheck:!1})}),Ci=Ls(kt);$s.createRoot(document.getElementById("root")).render(e.jsx(Es,{store:kt,children:e.jsx(Rs,{persistor:Ci,children:e.jsx(Ca,{children:e.jsx(oa,{children:e.jsx(zs,{children:e.jsx(ei,{})})})})})}));export{na as $,bt as A,Vi as B,Qa as C,Bi as D,Fi as E,ln as F,ta as G,Ri as H,Be as I,sr as J,pe as K,da as L,ca as M,pt as N,aa as O,Ui as P,sa as Q,Ei as R,ht as S,en as T,D as U,U as V,E as W,re as X,fe as Y,tn as Z,Di as _,Sa as a,sn as a0,Mi as a1,ee as a2,Ti as a3,za as a4,Oa as a5,ye as a6,Da as a7,Aa as a8,b as a9,Pi as aa,Hi as ab,li as ac,hi as ad,Li as ae,gi as af,ea as ag,gt as ah,Oe as ai,_i as aj,Ii as ak,Oi as al,I as am,d as an,$i as ao,Ai as ap,qi as aq,P as b,w as c,Si as d,M as e,$ as f,A as g,xa as h,qe as i,Ve as j,G as k,z as l,ce as m,W as n,Ue as o,ne as p,T as q,De as r,_ as s,g as t,L as u,ar as v,Ge as w,an as x,nn as y,zi as z};
