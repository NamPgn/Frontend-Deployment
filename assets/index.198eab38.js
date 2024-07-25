import{u as Tt,a as It,b as et,c as x,d as V,m as U,r as l,j as e,T as Lt,e as Dt,s as p,S as Pt,f as s,g as $t,L as tt,D as Rt,h as zt,H as at,B as Bt,A as rt,R as Ot,i as Ft,F as jt,W as Mt,k as Vt,l as Ut,n as Ht,P as nt,o as qt,C as Wt,p as Gt,q as Yt,t as T,N as Ee,v as Jt,w as re,x as Kt,E as Xt,y as ce,z as Zt,G as Ce,I as $e,J as Qt,K as G,M as ea,O as st,Q as ta,U as Y,V as Re,X as ze,Y as aa,Z as ne,_ as it,$ as ra,a0 as me,a1 as he,a2 as ot,a3 as lt,a4 as dt,a5 as Be,a6 as na,a7 as sa,a8 as ia,a9 as oa,aa as ct,ab as la,ac as da,ad as ut,ae as ca,af as ua,ag as pa,ah as pt,ai as ma,aj as ha,ak as mt,al as ge,am as ga,an as Ne,ao as xa,ap as Q,aq as ee,ar as ya,as as fa,at as va,au as wa,av as ba,aw as Oe,ax as Fe,ay as ka,az as Ea,aA as Ca,aB as Na,aC as Aa,aD as Sa,aE as _a,aF as Ta,aG as je,aH as Ia,aI as La,aJ as Da,aK as Pa,aL as $a,aM as Ra,aN as za,aO as Ba,aP as Oa,aQ as Fa,aR as ja}from"./vendor.66f3a2e0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const Ma="modulepreload",Va=function(t){return"/"+t},Me={},b=function(a,r,i){if(!r||r.length===0)return a();const n=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=Va(o),o in Me)return;Me[o]=!0;const d=o.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!i)for(let y=n.length-1;y>=0;y--){const f=n[y];if(f.href===o&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${m}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Ma,d||(h.as="script",h.crossOrigin=""),h.href=o,document.head.appendChild(h),d)return new Promise((y,f)=>{h.addEventListener("load",y),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>a())},P=()=>{const t=localStorage.getItem("token");if(t)return JSON.parse(t||"")},H=()=>Tt(),D=It,c=et.create({baseURL:"https://node-4-mhqo.onrender.com/api"}),Ua=et.create({baseURL:"https://node-3-uodg.onrender.com/api"}),W=P(),Ha=async t=>await c.post("/signup",t),qa=async t=>await c.post("/signin",t),ht=async()=>await c.get("user"),Wa=async t=>await c.get("user_one/"+t),Ga=async t=>await c.delete("removeUser/"+t+`/${W.user._id}`,{headers:{Authorization:`Bearer ${W.token}`}}),Ya=async t=>await c.put(`user/${t._id}/${W.user._id}`,t,{headers:{Authorization:`Bearer ${W.token}`}}),Ja=async t=>await c.post("user/creating",t),Ka=async t=>await c.get(`user/cart/${t}`),Xa=async(t,a)=>await c.post(`/user/upload/${t}`,a,{headers:{Authorization:`Bearer ${W.token}`}}),Za=async t=>await c.post("/forgot-password",t),Qa=async(t,a,r)=>await c.post(`/reset-password/${t}/${a}`,r),er=async t=>await c.post("/refreshToken",t),se=P(),tr=async()=>await c.get("/cart"),ar=async t=>await c.post(`/cart/${se.user._id}`,t,{headers:{Authorization:`Bearer ${se.token}`}}),rr=async(t,a)=>await c.post(`/cart/${t}/${se.user._id}`,a,{headers:{Authorization:`Bearer ${se.token}`}}),Ve=x("cartSlice",async()=>{const{data:t}=await tr();return t}),xe=x("addCartSlice",async t=>{const{data:a}=await ar(t);return a}),nr=x("deleteCartSlice",async t=>{const{data:a,status:r}=await rr(t.id,t);return a.data}),Ue=x("user/login",async t=>{const{data:a}=await Ha(t);return a}),pe=x("user/signin",async t=>{const{data:a,status:r}=await qa(t);return a}),sr=x("user/getAll",async()=>{const{data:t}=await ht();return t.filter(r=>r.role==0)}),ye=x("user/getUser_id",async t=>{const{data:a}=await Wa(t);return a}),ir=x("admin/getAdmin",async()=>{const{data:t}=await ht();return t.filter(r=>r.role>=1)}),He=x("user/deteleUser",async t=>{const{data:a}=await Ga(t);return a}),or=x("edit/editUser",async t=>{const{data:a}=await Ya(t);return a}),lr=x("user/importXlsx",async t=>{const{data:a}=await Ja(t);return a}),qe=x("findcart",async t=>{const{data:a}=await Ka(t);return a.cart}),We=x("uploadImage",async({id:t,formData:a})=>{const{data:r,status:i}=await Xa(t,a);return r}),gt=V({name:"user",initialState:{value:[],cartUser:[],isLoading:!1,error:!1,login:{},isLogin:localStorage.getItem("isLogin")==="true",user:{}},reducers:{logout(t){localStorage.removeItem("token"),U.success("Logout successful!"),t.isLogin=!1,localStorage.setItem("isLogin","false"),t.user={}}},extraReducers:t=>{t.addCase(Ue.fulfilled,(a,r)=>{a.error=!1,a.value=r.payload.newUser}).addCase(Ue.rejected,(a,r)=>{a.error=!0}),t.addCase(pe.pending,(a,r)=>{a.isLoading=!0}).addCase(pe.fulfilled,(a,r)=>{localStorage.setItem("token",JSON.stringify(r.payload)),a.login=r.payload,a.error=!1,a.isLogin=!0,a.isLoading=!1,a.user=r.payload.user,localStorage.setItem("isLogin","true")}).addCase(pe.rejected,(a,r)=>{a.error=r.payload,a.isLoading=!1}),t.addCase(sr.fulfilled,(a,r)=>{a.value=r.payload}),t.addCase(He.fulfilled,(a,r)=>{a.value=a.value.filter(i=>i._id!==r.payload._id)}).addCase(He.rejected,(a,r)=>{}),t.addCase(ir.fulfilled,(a,r)=>{a.value=r.payload}),t.addCase(or.fulfilled,(a,r)=>{a.value.push(r.payload)}),t.addCase(lr.fulfilled,(a,r)=>{a.value.unshift(r.payload)}),t.addCase(qe.pending,(a,r)=>{a.isLoading=!0}).addCase(qe.fulfilled,(a,r)=>{a.isLoading=!1,a.cartUser=r.payload}),t.addCase(ye.fulfilled,(a,r)=>{a.user=r.payload,a.isLoading=!1}).addCase(ye.pending,(a,r)=>{a.isLoading=!0}),t.addCase(We.fulfilled,(a,r)=>{a.isLoading=!1,a.user=r.payload.data}).addCase(We.pending,(a,r)=>{a.isLoading=!0}),t.addCase(nr.fulfilled,(a,r)=>{const i=a.user.cart.filter(n=>n.product._id!==r.payload.product);a.user.cart=i})}}),{logout:dr}=gt.actions,cr=gt.reducer,te=P(),R=l.exports.createContext(null),ur=t=>{const a=H(),{user:r}=D(f=>f.user),i=localStorage.getItem("isLogin"),n=D(f=>f.user.isLogin),[o,d]=l.exports.useState(!1),[m,u]=l.exports.useState(!1),h=()=>{u(!m)};l.exports.useEffect(()=>{te&&a(ye(te.user._id))},[n,a,o]);const y={Auth:te||"",user:r,isLoggedIn:i,isLoggedInState:n,setReset:d,handleClick:h,state:m};return e(R.Provider,{value:y,children:t.children})},E=l.exports.memo(({level:t,children:a,...r})=>e(Lt,{...r,children:a})),ie=({color:t,children:a,...r})=>e(Dt,{color:t,...r,children:a}),pr=p.div`
height: 100vh;
`,xt=p.div`
position: relative;
height: 100vh;
justify-content: center;
display: flex;
&>*{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
`,yt=()=>e(pr,{}),mr=()=>{var a;const{state:t}=(a=l.exports.useContext(R))!=null?a:{};return e(Pt,{className:t?"w-11/12":"w-10/12",active:!0,title:{width:"20%"},paragraph:{rows:8,width:[300,200,400,100]},loading:!0,style:{height:"100vh",padding:"0 30px"}})},hr=()=>e(xt,{children:e(E,{type:"danger",children:"L\u1ED7i r\u1ED3i ki\u1EC3m tra l\u1EA1i m\u1EA1ng c\u1EE7a b\u1EA1n ho\u1EB7c t\u1EA3i l\u1EA1i trang..."})}),Ae=({size:t,children:a})=>e(xt,{className:"w-full",children:s("div",{role:"status",children:[s("svg",{className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e("span",{className:"sr-only",children:"Loading..."})]})}),ft=()=>e(ie,{color:"#108ee9",className:"mx-2",children:"Empty"}),vt=()=>e("p",{className:"text-white",children:"Tr\u1ED1ng!"}),gr=async t=>await c.get(t),I=t=>{const{data:a,error:r,mutate:i}=$t(t,gr);return{data:a?a.data:"",isLoading:!a&&!r,isError:r,mutate:i}},L="https://node-4-mhqo.onrender.com/api",xr=(t,a)=>{t(dr()),a("/")},k=({to:t,children:a,...r})=>e(tt,{to:t,...r,className:"link",children:a}),oe=l.exports.memo(({textColor:t,orientation:a,children:r,...i})=>e(Rt,{style:{color:t,borderBlockStartColor:"#999"},className:"text-white",orientation:a,...i,children:r})),q=({src:t,alt:a,style:r,...i})=>e("img",{loading:"lazy",src:t,className:"m-5 w-full h-full",style:r,alt:a,...i}),z=(t,a)=>{const r=a?a.split("/"):null,i=r==null?void 0:r.indexOf("upload");return i!==-1&&(r==null||r.splice(i+1,0,`w_${t}/f_webp`)),r==null?void 0:r.join("/")},yr=p.div`
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius:10px;
}
::-webkit-scrollbar {
  width: 2px;
}
`,fr=p.div`
background: rgb(28, 28, 30);
border-radius: 10px;
margin: 5px 0px;
`,vr=()=>{const{data:{data:t}}=I("/category/filters");return s("div",{className:"rounded des w-3/12 relative overflow-hidden lg:block md:hidden hidden bg-[#0000005e] min-h-screen",children:[e(oe,{className:"m-0",textColor:"#fff",orientation:"left",children:"Xem th\xEAm"}),e(yr,{className:"absolute h-full w-full px-2 overflow-scroll",children:t&&(t==null?void 0:t.map((a,r)=>s(fr,{className:"flex lg:gap-1 my-2 py-2",children:[e("div",{className:"w-3/12",children:e(k,{to:"/q/"+a._id,children:e(q,{className:"m-0 h-full",src:z(100,a.linkImg),alt:a.name})},r)}),s("div",{className:"w-9/12",children:[e(k,{style:{textDecoration:"none",color:"#999",fontSize:"13px"},to:"/q/"+a._id,children:a.name},r),s(ie,{color:"#108ee9",className:"text-[12px] text-[#999] my-2 block w-6/12 ",children:[" ",a.sumSeri+" T\u1EADp VietSub"]}),e(ie,{color:"#2db7f5",children:a.type?a.type:"null"}),e("div",{className:"text-sm text-gray-400 mt-2",children:s("div",{className:"flex items-center mt-1 justify-between",children:[e(E,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e(E,{className:"mr-2 text-gray-300",children:a.typecm}),s(E,{className:"text-gray-400 text-sm",children:["(",a.time,")"]})]})})]})]},r)))})]})},wt=({content:t,settings:a})=>e(zt,{...a,children:t}),Ii=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],wr=[e(at,{}),e(Bt,{}),e(rt,{}),e(Ot,{}),e(Ft,{}),e(jt,{}),e(Mt,{}),e(Vt,{}),e(Ut,{})],Li=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Action",dataIndex:"action",key:"action"}],Di=[{title:"Url",dataIndex:"url",key:"url"},{title:"Image",dataIndex:"image",key:"image"},{title:"Action",dataIndex:"action",key:"action"}],Pi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Path",dataIndex:"path",key:"path"},{title:"Product",dataIndex:"product",key:"product"},{title:"Categorymain",dataIndex:"categorymain",key:"categorymain"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"},{title:"Checked",dataIndex:"checked",key:"checked"}],$i=[{title:"Stt",dataIndex:"stt",key:"stt",width:50},{title:"Name",dataIndex:"name",key:"name",width:150},{title:"Image",dataIndex:"image",key:"Image",width:150},{title:"Duration",dataIndex:"duration",key:"duration",width:50},{title:"isActive",dataIndex:"isActive",key:"isActive",width:50},{title:"Year",dataIndex:"year",key:"year",width:50},{title:"Set",dataIndex:"set",key:"set",width:50},{title:"Week",dataIndex:"week",key:"week",width:50},{title:"Action",dataIndex:"action",key:"action",width:100}],Ri=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Product",dataIndex:"product",key:"product"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Day",dataIndex:"day",key:"day"},{title:"Action",dataIndex:"action",key:"action"}],zi=[{title:"Id",dataIndex:"_id",key:"_id"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],Bi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Image",dataIndex:"image",key:"image"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"}],Oi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Role",dataIndex:"role",key:"role"},{title:"Status",dataIndex:"status",key:"status"},{title:"Image",dataIndex:"image",key:"image"}],Fi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Image",dataIndex:"image",key:"image"},{title:"Status",dataIndex:"status",key:"status"},{title:"Role",dataIndex:"role",key:"role"},{title:"Action",key:"action",dataIndex:"action",with:150}],br=[{title:"Name",dataIndex:"name",key:"name"},{title:"Action",dataIndex:"action",key:"action"}],kr={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},Er={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!1,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2,dots:!0}}]},j=P(),Cr=async t=>await c.post(`/week/${j.user._id}`,t,{headers:{Authorization:`Bearer ${j.token}`}}),Nr=async t=>await c.delete(`/week/${t}/${j.user._id}`,{headers:{Authorization:`Bearer ${j.token}`}}),Ar=async t=>await c.get(`/week?w=${t}`),Sr=async(t,a)=>await c.post(`/week/category/${t}/${j.user._id}`,a,{headers:{Authorization:`Bearer ${j.token}`}}),J=l.exports.createContext(null),_r=t=>{const[a,r]=l.exports.useState(1),{data:i}=I(L+"/weeks"),{data:n}=I(L+"/background"),{data:o,isLoading:d}=I(L+"/types"),{data:m,isLoading:u,isError:h}=I(L+"/categorymain"),y={seri:o,loadingSeri:d,categorymain:m,LoadingCateMain:u,isError:h,background:n,weeks:i,setPage:r,page:a};return e(J.Provider,{value:y,children:t.children})},O=l.exports.memo(({level:t,children:a,...r})=>e(Ht,{level:t,...r,children:a})),fe=l.exports.memo(({title:t,link:a,image:r,sumSeri:i,time:n,typecm:o,year:d,products:m})=>{const u=m?m[m.length-1]:"";return s("div",{className:"w-full",children:[e("div",{className:"relative group",children:s(k,{to:a,className:"block",children:[e("div",{className:"relative w-full h-[200px] md:h-[250px] lg:h-[320px]",children:e(q,{src:z(300,r),alt:t,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-2 py-1 font-medium",children:u?`T\u1EADp ${u.seri}`:e(vt,{})}),e("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e(nt,{className:"text-white text-5xl"})})]})}),e("div",{className:"mt-4",children:e(k,{to:a,children:e(O,{level:5,style:{color:"#fff"},className:"text-xl md:text-2xl lg:text-3xl font-bold",children:t})})}),s("div",{className:"text-sm text-gray-400 mt-2",children:[e("div",{className:"font-semibold",children:i?`${i} T\u1EADp`:""}),s("div",{className:"flex items-center mt-1 justify-between",children:[e(E,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e(E,{className:"mr-2 text-gray-300",children:o}),s(E,{className:"text-gray-400 text-sm",children:["(",n,")"]})]}),e("div",{className:"font-semibold mt-2",children:d?`${d}`:""})]})]})});function Tr(){var f;const{weeks:t}=l.exports.useContext(J)||{},a=["Ch\u1EE7 nh\u1EADt","Th\u1EE9 2","Th\u1EE9 3","Th\u1EE9 4","Th\u1EE9 5","Th\u1EE9 6","Th\u1EE9 7"],i=new Date().getDay(),[n,o]=l.exports.useState(!0),[d,m]=l.exports.useState(a[i]),[u,h]=l.exports.useState([]),y=w=>{m(w)};return l.exports.useEffect(()=>{const w=async()=>{const{data:N}=await Ar(d);h(N),o(!1)};o(!0),w()},[d]),s("div",{className:"container mx-auto my-10",children:[e("div",{className:"px-4 lg:px-[150px] md:px-[100px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0",children:t&&t.map(w=>e("div",{className:"cursor-pointer",onClick:()=>y(w.name),children:e("div",{className:"text-[11px] md:text-[12px] lg:text-[14px] flex justify-center items-center px-4 py-2 text-white rounded-lg w-full",children:e("p",{children:w.name})})},w._id))}),e("div",{className:"my-5 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full",children:n?e(yt,{}):e(wt,{settings:kr,content:(f=u==null?void 0:u.content)==null?void 0:f.map(w=>e("div",{className:"px-2",children:e(fe,{title:w.name,link:"/q/"+w._id,image:w.linkImg,time:w.time,sumSeri:w.sumSeri,products:w.products})},w._id))})})]})}const _=l.exports.memo(({gutter:t,justify:a,align:r,children:i,...n})=>e(qt,{gutter:t,justify:a,align:r,...n,children:i})),v=({children:t,...a})=>e(Wt,{...a,children:t}),bt=l.exports.memo(({type:t,gutter:a,child:r,...i})=>e(_,{gutter:a,children:t==="category"?r&&r.length&&r.map((n,o)=>e(v,{xs:12,sm:10,md:8,lg:6,xl:4,children:e(fe,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,year:n.year,sumSeri:n.sumSeri,products:n.products})},n._id)):r&&r.length?r.map((n,o)=>e(v,{xs:12,sm:10,md:8,lg:6,xl:4,children:e(fe,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,sumSeri:n.sumSeri})},n._id)):e(ft,{})})),M=P(),Ir=async t=>await c.get(`/categorys?page=${t}`),Lr=async t=>await c.get(`/category/${t}`),Dr=async t=>await c.post(`/category/${M.user._id}`,t,{headers:{Authorization:`Bearer ${M.token}`}}),Pr=async t=>await c.delete(`/category/${t}/${M.user._id}`,{headers:{Authorization:`Bearer ${M.token}`}}),$r=async t=>await c.post(`/category/${t.get("_id")}/${M.user._id}`,t,{headers:{Authorization:`Bearer ${M.token}`}}),Rr=async t=>await c.get("/category/getAllCategoryNotRequest/"+t),zr=async t=>await c.get(`/categorys/search?value=${t}`),Br=async(t,a)=>await c.post("/rating/"+t,a),Or=async t=>await c.post("/category/changeLatest",t),ae=x("category/getAllcate",async t=>{const{data:a}=await Ir(t);return a}),ve=x("category/getOne",async t=>{const{data:a}=await Lr(t);return a}),Ge=x("getAll/Category",async t=>{const{data:a}=await Rr(t);return a}),Fr=x("add/Addcate",async t=>{const{data:a}=await Dr(t);return a}),jr=x("delete/DeleteCate",async t=>{const{data:a}=await Pr(t);return a}),Mr=x("update/Category",async t=>{const{data:a}=await $r(t);return a}),kt=()=>{const{data:t}=D(i=>i.category.category),a=D(i=>i.category.isLoading);D(i=>i.category.isError);const r=H();return l.exports.useEffect(()=>{r(ae(1))},[]),a?e("div",{className:"seriLoading",children:"Loading..."}):s("div",{children:[s("div",{className:"flex justify-between items-center",children:[e(O,{level:2,underline:!0,style:{color:"#fff"},strong:!0,className:"uppercase",children:"Xem Nhi\u1EC1u"}),e(k,{to:"/loadmore","aria-label":"T\u1EA3i th\xEAm n\u1ED9i dung",children:s("div",{className:"text-[16px] text-[#fff] flex lg:text-[20px] md:text[18px] gap-3",children:[e("span",{className:"underline",children:"See More"}),e("span",{children:e(Gt,{title:"T\u1EA3i th\xEAm n\u1ED9i dung..."})})]})})]}),e(bt,{type:"category",gutter:[16,16],child:t})]})},Vr=()=>{const{data:{data:t}}=I(L+"/category/latest");return s("div",{children:[e("h2",{className:"text-white category text-md md:text-md pl-2 mb-2 mx-2 my-3 border-l-4  font-sans font-bold border-teal-400 dark:text-gray-200",children:"M\u1EDBi C\u1EADp Nh\u1EADt"}),e(wt,{settings:Er,content:t&&t.map((a,r)=>{const i=a.products[a.products.length-1];return e("div",{children:s("div",{className:"w-full ",children:[e("div",{className:"relative group ",children:s(k,{to:`/q/${a._id}`,className:"block mx-2",children:[e("div",{className:"relative h-[200px] w-[120px] custom-slide md:w-[160px] lg:w-[180px]",children:e(q,{src:z(150,a.linkImg),alt:a.name,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-1 md:px-2 py-1 font-medium",children:i?`T\u1EADp ${i.seri}`:e(vt,{})}),e("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e(nt,{className:"text-white text-5xl"})})]})}),e("div",{className:"mt-4",children:e(k,{to:"/q/"+a._id,children:e("div",{style:{color:"#999"},className:"text-sm md:text-md lg:text-md",children:a.name})})})]})},a._id)})})]})};function Se({children:t}){const[a,r]=l.exports.useState(!1),i=l.exports.useRef(null);return l.exports.useEffect(()=>{const n=new IntersectionObserver(o=>{o[0].isIntersecting&&r(!0)},{threshold:1});return i.current&&n.observe(i.current),()=>{i.current&&n.unobserve(i.current)}},[]),s("div",{children:[a&&t,e("div",{ref:i,style:{height:"1px"}})]})}const Ur=p.video``,Hr=p.div`
  padding-bottom: 60%;
  @media (min-width: 768px) {
    padding-bottom: 50%;
  }
  @media (min-width: 1024px) {
    padding-bottom: 45%;
  }
`,qr=l.exports.memo(()=>{const{data:t,isError:a}=I(L+"/trailer"),{state:r}=l.exports.useContext(R);return a?e(hr,{}):s("div",{className:r?"p-3":"mt-3",children:[s("div",{className:"d-flex",children:[e("div",{className:"lg:w-9/12 md:w-12/12 sm:w-full",children:s("div",{className:"h-full",children:[e(Hr,{className:"relative md:mx-2",children:e(Ur,{className:"h-full absolute bg-black rounded",width:"100%",loop:!0,muted:!0,autoPlay:!0,controls:!0,src:t.url})}),e(Vr,{})]})}),e(vr,{})]}),e(Tr,{}),e(Se,{children:e(kt,{})})]})}),_e=({ogTitle:t,description:a,imageUrl:r,mainTitle:i,title:n,...o})=>s(Yt,{children:[e("title",{children:n}),e("meta",{property:"og:title",content:t}),e("meta",{property:"og:description",content:a}),e("meta",{property:"og:image",content:r}),Object.keys(o).map(d=>e("meta",{...o[d]},d))]}),Wr=()=>s(T,{children:[e(_e,{ogTitle:"Ho\u1EA1t H\xECnh Trung Qu\u1ED1c",description:"\u0110\u1EA5u Ph\xE1 Th\u01B0\u01A1ng Khung Ph\u1EA7n 5",imageUrl:z(200,"https://res.cloudinary.com/daz3lejjo/image/upload/w_100/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),title:"Ho\u1EA1t H\xECnh 3D"}),e(qr,{})]}),C=P(),Gr=async t=>await c.get(`products?page=${t}`),Yr=async t=>await c.get(`product/${t}`),Jr=async t=>await c.delete(`/product/${t}/${C.user._id}`,{headers:{Authorization:`Bearer ${C.token}`}}),Kr=async t=>await c.post(`/product/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),Xr=async t=>await c.put(`/product/${t.get("_id")}/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),Zr=async t=>await c.post("/products/creating",t,{}),ji=async t=>await c.post(`/products/deleteMultiple/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),Qr=async t=>await c.get(`/category/products/${t}`),Mi=async(t,a)=>await c.post(`/product/pushlist/${t}/${C.user._id}`,a,{headers:{Authorization:`Bearer ${C.token}`}}),Vi=async(t,a)=>await Ua.post(`/product/abyss/${t}/${C.user._id}`,a,{headers:{Authorization:`Bearer ${C.token}`}}),Ui=async t=>await c.post(`/product/approve/${t}/${C.user._id}`,null,{headers:{Authorization:`Bearer ${C.token}`}}),Hi=async t=>await c.post(`/product/approve/cancel/${t}/${C.user._id}`,null,{headers:{Authorization:`Bearer ${C.token}`}}),en=async t=>await c.get(`/product/filter?c=${t}`),tn=async t=>await c.get(`/product/v?name=${t}`),qi=async()=>await c.post(`/products/clear/${C.user._id}`,null,{headers:{Authorization:`Bearer ${C.token}`}}),Ye=x("product/getProducts",async t=>{const{data:a}=await Gr(t);return{product:a.data,length:a.length}}),we=x("product/getProduct",async t=>{const{data:a}=await Yr(t);return a}),an=x("product/deleteProduct",async t=>{const{data:a}=await Jr(t);return a}),rn=x("product/addProduct",async t=>{const{data:a,status:r}=await Kr(t);return a}),nn=x("product/editProduct",async t=>{const{data:a}=await Xr(t);return a}),sn=x("product/importDataFile",async t=>{const{data:a}=await Zr(t);return a}),Et=x("product/getAllProductDataByCategory",async t=>{const{data:a}=await Qr(t);return a}),on=x("product/filter",async t=>{const{data:a}=await en(t);return a}),ln=x("product/Search",async t=>{const{data:a}=await tn(t);return a}),dn=t=>t.product.getOneProduct,cn=t=>t.product.getAllProductByCategory,Wi=t=>t.category.category,un=t=>t.user.value,Gi=t=>t.user.value,pn=p.button`
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
`,Je=p.button`
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
`,mn=l.exports.memo(({seriProduct:t})=>e(_,{gutter:14,items:"center",children:t.map((a,r)=>a.isApproved==!0?e(v,{xl:3,lg:3,md:4,sm:4,xs:6,className:"mt-2",children:e(Ee,{className:({isActive:i,isPending:n})=>i?"activeSeri":"",to:"/d/"+a._id+`?c=${a.category}`,children:e(pn,{className:a.seri&&"w-full",children:a.seri&&"T\u1EADp "+a.seri})})},r):"")})),$=l.exports.memo(({children:t,...a})=>e(Jt,{...a,children:t})),K=t=>U.success(t),Ct=t=>U.warning(t),F=t=>U.error(t),hn=({item:t,id:a})=>{var y;const r=H(),{Auth:i,user:n,isLoggedInState:o}=l.exports.useContext(R),[d,m]=l.exports.useState(!1),u={user:i?i.user._id:"",product:a};l.exports.useEffect(()=>{var w,N;const f=(w=n==null?void 0:n.cart)==null?void 0:w.find(A=>A.product._id===a);m(((N=f==null?void 0:f.product)==null?void 0:N._id)===a)},[n.cart,a]);const h=()=>{!i&&o==!1?F("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp!"):d?Ct("\u0110\xE3 t\u1ED3n t\u1EA1i trong y\xEAu th\xEDch!"):(r(xe(u)),m(!0),K("Th\xEAm v\xE0o danh s\xE1ch y\xEAu th\xEDch th\xE0nh c\xF4ng!"))};return s("div",{className:"lg:flex md:flex-row items-center @screen md:justify-between flex flex-col",children:[e(k,{to:"/q/"+((y=t==null?void 0:t.category)==null?void 0:y._id),className:"text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e(O,{level:4,style:{color:"#fff"},className:"uppercase",children:t.name})}),e($,{style:{color:"#fff"},icon:e(re,{}),disabled:d,className:"flex items-center justify-center",onClick:()=>h(),children:d?"\u0110\xE3 y\xEAu th\xEDch":"Th\xEAm v\xE0o y\xEAu th\xEDch"})]})},gn=({getOneProductDetail:t})=>s(T,{children:[e("div",{style:{color:"#fff",margin:"10px 0"},children:t.seri?t.trailer?"Trailer "+t.seri:"T\u1EADp "+t.seri:""}),e("div",{className:"des text-[#999]",children:s("p",{children:["Ng\xE0y \u0111\u0103ng:"," ",Kt(t.uploadDate).format("LTS DD-MM-YYYY")]})}),e("div",{style:{color:"#fff",margin:"10px 0"},className:"des",children:s("div",{className:"text-[#999] flex items-center gap-2 lg:justify-start @screen justify-center",children:[e(Xt,{}),t.view*36," L\u01B0\u1EE3t xem"]})}),s("div",{className:"p-3 mt-3 mb-3 text-white rounded  flex items-center lg:justify-start @screen justify-center",style:{background:"rgb(0 0 0 / 47%)"},children:["Copyright video:",e("div",{className:"text-slate-400",children:" "+t.copyright})]})]}),xn=p.div`
display:flex;
gap:0 10px;

@media(max-width:768px){
  display:block;
}
@media(min-width:1024px){
  display:flex;
}
`,yn=p.div`
`,fn=p.div`
font-size:13px;
@media(min-width: 1024px){
  font-size:15px;
}
`,vn=p.div`
padding:5px;
@media(min-width: 1024px){
  padding: 15px;
}
`,wn=p.div`
padding-bottom:62%;

@media(min-width: 768px){
  padding-bottom:52%;
}

@media(min-width: 1024px){
  padding-bottom:42%;
}
`,bn=p.div`
 
`,kn=t=>t.product.isLoading,En=()=>{var N,A,B,X;const t=D(cn),a=D(dn),r=D(kn),[i,n]=l.exports.useState(""),{id:o}=ce(),{c:d}=Zt.parse(window.location.href.split("?")[1]),[m,u]=l.exports.useState("dailyMotion"),h=H(),[y,f]=l.exports.useState(""),w=Ce();return l.exports.useEffect(()=>{window.scrollTo(0,0)},[w]),l.exports.useEffect(()=>{h(we(o)),h(Et(d));const Z=$e.AES.decrypt(a.dailyMotionServer?a.dailyMotionServer:"","24062003").toString($e.enc.Utf8);f(Z),n(Z)},[o,a.dailyMotionServer]),s(T,{children:[e(_e,{ogTitle:a.name,description:a.category.des,imageUrl:(N=a.category)==null?void 0:N.linkImg}),e("div",{className:"flex justify-center mt-4",style:{gap:"10px"},children:e(vn,{className:"col-md-12",children:a&&(r?e(Ae,{size:"large",children:void 0}):s(T,{children:[e(wn,{className:"d-flex justify-content-center relative",children:a.dailyMotionServer!==""&&a.server2!==""?e("iframe",{allowFullScreen:!0,title:"vimeo-player",className:"absolute",src:i,style:{width:"100%",height:"100%"}}):a.trailer!==""?e("iframe",{title:"vimeo-player",className:"absolute",style:{width:"100%",height:"100%"},src:a.trailer+"?autoplay=1&mute=1"}):e(Qt,{icon:"Hiiiii!!",className:"absolute inset-0 text-white mt-5",subTitle:"Phim n\xE0y \u0111ang trong qu\xE1 tr\xECnh c\u1EADp nh\u1EADt video. Vui l\xF2ng quay l\u1EA1i sau."})}),s(bn,{className:"mt-4 rounded",children:[e(oe,{textColor:"#fff",orientation:"center",className:"text-white md:text-sm lg:text-base text-sm underline",children:"Ch\u1ECDn server:"}),s("div",{className:"md:text-sm lg:text-base text-sm flex items-center justify-center gap-4 px-4 py-3",children:[e($,{disabled:a.link==="",onClick:()=>{u("link1"),n(a.link)},className:`text-white cursor-pointer ${m==="link1"?"activeServer":""}`,children:"#S1"}),e($,{onClick:()=>{u("server2"),n(a.server2)},disabled:!a.server2,className:`${a.server2?" text-white cursor-pointer":""} ${m==="server2"?"activeServer":""}`,children:"#S2"}),e($,{onClick:()=>{u("dailyMotion"),n(y)},disabled:!a.dailyMotionServer,className:`${a.dailyMotionServer?"text-white cursor-pointer":""} ${m==="dailyMotion"?"activeServer":""}`,children:"#S3"})]})]}),s(xn,{className:"mt-2",children:[e(yn,{className:"w-3/12",children:e(q,{className:"md:block hidden",alt:"\u1EA2nh"+((A=a.category)==null?void 0:A.name),src:z(200,a&&(((B=a.category)==null?void 0:B.linkImg)||a.image))})}),s(fn,{className:"lg:w-9/12 md:w-full text-center lg:text-start",children:[e(hn,{item:a,id:o}),e(gn,{getOneProductDetail:a}),e(mn,{seriProduct:t}),s("div",{className:"text-[#999] lg:text-md sm:text-sm mt-2 mb-2",children:[e(oe,{textColor:"#fff",orientation:"left",children:"M\xF4 t\u1EA3:"}),a&&((X=a.category)==null?void 0:X.des)]})]})]})]}))})})]})},Cn=()=>s(G.Fragment,{children:[e(l.exports.Suspense,{fallback:e(mr,{}),children:e(En,{})}),e(Se,{children:e(kt,{})})]}),Nn=({id:t})=>{const{data:a,isLoading:r}=I(L+"/category/getAllCategoryNotRequest/"+t),i=Ce();return l.exports.useEffect(()=>{window.scrollTo(0,0)},[i]),r?e(Ae,{size:void 0,children:void 0}):s(G.Fragment,{children:[e(O,{level:3,strong:!0,underline:!0,style:{color:"#fff"},className:"underline my-2",children:"Li\xEAn quan"}),e(bt,{type:"category",gutter:[16,16],child:a})]})},An=({data:t,isLoading:a})=>{var r;return a?e("div",{className:"seriLoading",children:"Loading...."}):e("div",{className:"bg-[#9b9b9b1f] h-[174px] overflow-y-scroll p-3 rounded-sm seriCategory",children:e(_,{gutter:[16,16],children:((r=t==null?void 0:t.products)==null?void 0:r.length)>0&&(t==null?void 0:t.products)?t.products.map((i,n)=>i.isApproved==!0?e(v,{lg:3,md:4,sm:5,xs:6,style:{textAlign:"center"},children:e(k,{to:"/d/"+i._id+`?c=${i.category}`,children:!i.dailyMotionServer&&i.trailer?e(Je,{children:i.seri}):e(Je,{className:"w-full text-white",variant:"ghost",size:"sm",children:i.seri})})},n):""):e(ft,{})})})},Sn=l.exports.memo(({id:t,averageRating:a,totalRatings:r})=>s("span",{className:"text-white flex items-center gap-2",children:[e(ea,{className:"mt-2 mb-2",value:a,onChange:async n=>{const o={rating:n};try{await Br(t,o)}catch(d){console.error("L\u1ED7i khi l\u01B0u \u0111\xE1nh gi\xE1:",d)}}}),r>0?e("div",{className:"relative pt-1",children:e("div",{className:"flex items-center justify-between",children:e("div",{children:s("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200",children:["Vip ",a.toFixed(2),"/",r*115," T\u1ED5ng s\u1ED1 l\u01B0\u1EE3t \u0111\xE1nh gi\xE1"]})})})}):""]})),_n=()=>{const{id:t}=ce(),a=H(),r=D(n=>n.category.details),i=D(n=>n.category.isLoading);return l.exports.useEffect(()=>{a(ve(t))},[t]),l.exports.useEffect(()=>{r!=null&&r.name&&(document.title=r.name)},[r]),s(T,{children:[e(_e,{ogTitle:r.name,description:r==null?void 0:r.des,imageUrl:r==null?void 0:r.linkImg}),r&&e("div",{children:s("div",{style:{color:"#fff"},children:[s("div",{className:"md:flex lg:flex block gap-2 ",children:[e("div",{className:"mb-5 lg:w-3/12 md:w-3/12 md:h-full h-52 ",children:e("div",{className:"h-full w-full flex justify-center ",children:e(q,{className:"object-contain w-full h-full flex-grow",src:z(300,r.linkImg),alt:r.name})})}),s("div",{className:"lg:w-9/12 md:w-9/12",children:[e("div",{className:"category text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e(k,{to:"/q/"+r._id,children:e(O,{type:"secondary",level:3,className:"md:text-[18px] lg:text-[20px] sm:text-[15px]",style:{textTransform:"capitalize",color:"#fff"},children:r.name})})}),s("div",{className:"loai des text-[12px] md:text-[13px] lg:text-[14px]",children:[e("b",{children:r.anotherName}),e("br",{}),e(E,{style:{color:"#999"},children:"T\xE1c gi\u1EA3 :..."}),e("br",{}),e(E,{style:{color:"#999"},children:"Qu\u1ED1c gia : Chinese"}),e("div",{children:s(E,{style:{color:"#999"},children:["Th\u1EC3 lo\u1EA1i :"," ",e("span",{className:"p-1 bg-gray-500 rounded-sm",children:r.type})]})}),e("div",{children:s(E,{style:{color:"#999"},children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",r._id==t?r.sumSeri:""]})}),e("div",{children:e(E,{style:{color:"#999"},children:r.time+" "})}),e("div",{children:s(E,{style:{color:"#999"},children:["N\u0103m ph\xE1t h\xE0nh : ",r.year]})}),e("div",{}),e(ie,{color:"#2db7f5",className:"my-2",children:r.isActive==0?"\u0110ang chi\u1EBFu":"Ho\xE0n th\xE0nh"}),s("div",{id:"toast-simple",className:"flex mb-2 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800",role:"alert",children:[e(st,{}),e("div",{className:"ps-4 text-sm font-normal",children:"Vietsub l\xFAc 10h00 Th\u1EE9 4 h\xE0ng tu\u1EA7n"})]})]}),e(An,{isLoading:i,data:r}),e(Sn,{id:t,averageRating:r.averageRating,totalRatings:r.totalRatings})]})]}),s("div",{className:"text-[#999] lg:text-[15px] md:text[14px] text-[13px]",children:[e(oe,{textColor:"#fff",orientation:"left",children:"N\u1ED8I DUNG PHIM"}),r.des]})]})},r._id)]})},Tn=()=>{const{id:t}=ce();return s(T,{children:[e(_n,{}),e(Se,{children:e(Nn,{id:t})})]})};const Ke=l.exports.memo(({title:t,src:a,size:r,...i})=>e("div",{title:t,style:{cursor:"pointer"},children:e(ta,{size:r,color:"default",src:a,...i})})),be=({isLoggedInState:t,style:a})=>{var d,m,u,h,y;const r=P(),i=Y(),n=H(),o=()=>{r?i("/cart/user"):F("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp!")};return e(G.Fragment,{children:r&&t?e(Re,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e(ze,{content:s(T,{children:[e(k,{to:"/profile",children:s(_,{style:{lineHeight:"0"},align:"middle",gutter:12,children:[e(v,{children:e(aa,{})}),e(v,{children:e(E,{level:6,className:"auth",children:"Your profile"})})]})}),s(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e(v,{children:e(re,{})}),e(v,{children:e(E,{style:{cursor:"pointer"},onClick:o,className:"auth",children:"Saved"})})]}),r.user&&((d=r==null?void 0:r.user)==null?void 0:d.role)>=1&&e(k,{to:"/dashboard",children:s(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e(v,{children:e(ne,{})}),e(v,{children:e(E,{className:"auth",children:"Admin"})})]})}),s(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e(v,{children:e(it,{})}),e(v,{children:e(E,{style:{cursor:"pointer"},onClick:()=>xr(n,i),children:"Logout"})})]})]}),title:e(O,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:(m=r==null?void 0:r.user)==null?void 0:m.username}),placement:"bottomLeft",trigger:"click",children:e(Ke,{className:"text-center",title:(u=r==null?void 0:r.user)==null?void 0:u.name,src:z(50,r.user&&((h=r==null?void 0:r.user)==null?void 0:h.image)),size:"sm"})})}):e(Re,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e(ze,{content:e(k,{to:"/signin",children:s(_,{align:"middle",gutter:[12,12],children:[e(v,{children:e(ra,{})}),e(v,{children:e(E,{level:6,className:"auth",children:"Signin"})})]})}),title:e(O,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:"Hi"}),placement:"bottomLeft",trigger:"click",children:e(Ke,{title:(y=r==null?void 0:r.user)==null?void 0:y.name,src:void 0,style:a,size:40,icon:e(ne,{})})})})})},{Content:In,Sider:Ln,Header:Dn,Footer:Pn}=me,$n=()=>{var n;const t=ai.map((o,d)=>{var u;const m=String(d+1);return{key:`${m+1}`,icon:o.icon,label:e(k,{to:o.path,children:o.name}),children:(u=o==null?void 0:o.children)==null?void 0:u.map((h,y)=>{const f=y+1;return{key:`subitem-${m}-${f}`,icon:h.icon,label:e(k,{to:h.path,children:h.name})}})}}),{isLoggedInState:a}=(n=l.exports.useContext(R))!=null?n:{},[r,i]=l.exports.useState(!1);return s(me,{style:{minHeight:"100vh"},children:[s(Ln,{trigger:null,collapsible:!0,collapsed:r,className:"overflow-y-auto ",style:{height:"100%",position:"fixed"},children:[e("div",{className:"p-4 bg-[#fff]",children:e("div",{className:"h-8 w-full bg-[#ddd] rounded"})}),e(he,{style:{height:"100%"},theme:"light",mode:"inline",defaultSelectedKeys:["1"],items:t})]}),s(me,{style:{marginLeft:r?80:200},children:[e(Dn,{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",padding:0},children:s(_,{align:"middle",justify:"space-between",children:[e(v,{children:e($,{type:"text",icon:r?e(ot,{}):e(lt,{}),onClick:()=>i(!r),style:{fontSize:"16px",width:64,height:64},children:void 0})}),e(v,{children:e(k,{to:"/",children:"Home Page"})}),e(v,{style:{textAlign:"center"},span:1,children:e(be,{isLoggedInState:a,style:void 0})})]})}),e(In,{style:{padding:"24px",minHeight:"calc(100vh - 64px)",overflow:"auto"},children:e(dt,{})}),e(Pn,{children:"\xA9 2023 copyright | PH ANG"})]})]})},Rn=t=>{const a=P();try{return a?a.user.role==0?e(Be,{to:"/"}):t.children:e(Be,{to:"/"})}catch{return e("div",{className:"text-light container text-center",children:e(k,{to:"/signin",children:"\u0110\u0103ng nh\u1EADp"})})}},zn=p.div`
color:#999;
font-weight:500;
`,Bn=p.div`
color: rgb(255, 214, 99);
font-weight:500;
`,On=p.div`
display: flex;
align-items: center;
justify-content: center;
gap:0 5px;
 
&>a{
    color: rgb(255, 214, 99) !important;
    font-weight:500;
}
`;p.div`

`;const Fn=l.exports.memo(({data:t,icons:a,id:r,background:i,...n})=>e(he,{className:"h-full",style:{background:i},children:t&&t.map((o,d)=>l.exports.createElement(he.Item,{...n,icon:o.icon?o.icon:a[d],key:d},r==!0?e(Ee,{to:o.path=="/"?o.path:o.path+`/${o._id}`,children:o.name},d):e(k,{to:o.path,children:o.name})))})),jn=p.div`
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
`;p.img`
  object-fit: cover;
  @media (max-width: 768px) {
    pading: 5px;
  }
`;const Mn=p.div`
  @media (max-width: 768px) {
    display: none;
  }
`,Xe=p.input`
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
`,Vn=p.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`,Un=p.div`
  font-size: 11px;
  font-weight: 400;
`,Hn=p.div`
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
`,qn=p.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
  justify-content: ${t=>t.justify};
`,Wn=p.div``,Gn=p.div`
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
`,Yn=p.div`
  color: #d9d9d9;
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`,Jn=p.div`
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
`,Kn=p.div`
  display: block;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`,ke=({data:t})=>t.length>0?e("div",{className:"absolute top-[50px] left-0 w-full flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:e("div",{className:"p-4 flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700",children:t.map((a,r)=>e(k,{to:`/q/${a._id}`,children:e("div",{className:"flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:a.name})},a._id))})}):e(T,{}),Xn=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),Zn=[e(at,{}),e(oa,{}),e(it,{}),e(ct,{})],Qn=()=>{var Pe;const{Auth:t,isLoggedInState:a,state:r,handleClick:i}=(Pe=l.exports.useContext(R))!=null?Pe:{},[n,o]=l.exports.useState(!1),[d,m]=l.exports.useState(0),[u,h]=l.exports.useState("20px 10px"),[y,f]=l.exports.useState(!1),w="left",[N,A]=l.exports.useState(""),[B,X]=l.exports.useState([]),Z=()=>{f(!0)},St=()=>{f(!1)};window.addEventListener("scroll",()=>{const S=window.pageYOffset;o(d>S),m(S),window.scrollY>10?h("10px 5px"):h("20px 10px")});const _t=Y(),Te=()=>{t?_t("/cart/user"):F("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp!")},Ie=na.exports.debounce(async S=>{const{data:ue}=await zr(S);X(ue)},500),Le=async S=>{A(S),Ie(S)};l.exports.useEffect(()=>()=>{Ie.cancel()},[N]),l.exports.useEffect(()=>{o(!0)},[]);const De=a?ei:Qs;return s(G.Fragment,{children:[s(_,{align:"middle",justify:"space-between",className:`${r?"w-11/12":"w-10/12"} lg:flex hidden z-[100] fixed right-0`,style:{top:n?"0":"-25%",padding:u,backgroundColor:"#00000038"},children:[e(v,{span:1,children:e(Kn,{className:"text-[21px] md:text-[23px] lg:text-[25px]",onClick:i,children:r?e(lt,{}):e(ot,{})})}),s(v,{span:6,className:"relative",children:[e(Xe,{style:{boxShadow:"#333 0px 2px 10px"},onChange:S=>Le(S.target.value),placeholder:"Search..."}),e(ke,{data:B})]}),e(v,{span:16,children:s(_,{justify:"center",align:"middle",children:[e(_,{children:De.map((S,ue)=>e(v,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:e(k,{style:{color:"#fff",textDecoration:"none",margin:"0 20px"},to:S.path,children:S.name})},ue))}),e(v,{children:s(On,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:[e(zn,{children:"Li\xEAn h\u1EC7 qc tele: "}),s("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:[e(Bn,{}),"@PH ANG"]})]})}),e(v,{className:"ml-5 text-[15px] lg:text-[17px] md:text[16px]",style:{marginLeft:"50px"},onClick:Te,children:e(re,{className:"__ text-yellow-500"})})]})}),e(v,{span:1,className:"text-end",children:e(be,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",textAlign:"center"}})})]}),s("div",{className:"navbar_mb w-10/12 absolute right-0 z-10",children:[s(_,{align:"middle",justify:"space-between",className:"navbar bgNav mb",children:[e(v,{children:e(sa,{className:"text-white",onClick:Z})}),e(v,{children:e("div",{className:"ml-5 relative",onClick:Te,children:e(re,{className:"__ text-yellow-500"})})}),s(v,{span:16,className:"relative",children:[e(Xe,{onChange:S=>Le(S.target.value),placeholder:"Search..."}),e(ke,{data:B})]}),e(v,{children:e(be,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",lineHeight:"30px"}})})]}),e(ia,{width:200,title:"Drawer",placement:"left",closable:!1,onClose:St,open:y,closeIcon:!0,className:"relative z-10",children:e(Fn,{icons:Zn,id:!1,background:"#fff",data:De})},w)]})]})},es=()=>e(T,{children:e(G.Fragment,{children:s("div",{className:"ft text-white",children:[e("link",{rel:"stylesheet",integrity:"sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=",crossOrigin:"anonymous"}),e("footer",{className:"footer",children:e("div",{className:"footer-bottom footer-border-top light py-3",children:e("div",{className:"text-center",children:s("p",{className:"m-0",children:["\xA9 2023 copyright"," ",e("a",{href:"#",className:"text-reset",children:"| PH ANG"})]})})})})]})})}),ts=()=>e("div",{className:"md:mt-[50px] lg:mt-[50px] lg:flex hidden justify-center text-white ",children:e("div",{className:"w-full",children:e("div",{className:"card p-3 ",style:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:s("div",{className:"card-body",children:[s("div",{children:[e("div",{className:"d-flex justify-center",children:e("img",{src:z(80,"https://res.cloudinary.com/daz3lejjo/image/upload/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),alt:"\u0110\u1EA5u ph\xE1 th\u01B0\u01A1ng khung ph\u1EA7n 5",className:"avatar-md rounded-circle img-thumbnail"})}),s("div",{className:"flex-1",children:[e("h5",{className:"font-size-16 mb-1 mt-1",children:e(k,{to:"#",className:"text-light",children:"Admin Contact"})}),e("span",{className:"badge badge-soft-success mb-0",children:"Web Developer"})]})]}),s("div",{className:"mt-3 pt-1 iconContact",children:[s("p",{className:"mb-0",children:[e(la,{}),e("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:"Facebook"})]}),s("p",{className:"mb-0 mt-2",children:[e(da,{}),e("a",{href:"https://www.tiktok.com/@tieu_loli",children:"Tiktok"})]})]})]})})})}),as=()=>{const{seri:t,loadingSeri:a}=l.exports.useContext(J)||{},{state:r}=l.exports.useContext(R)||{},i=r?"w-1/12":"w-2/12";return e(jn,{className:i,children:s(Hn,{className:i,children:[e(qn,{justify:r?"center":"start",children:s(Mn,{className:r?"hiddenn":"block text-white",children:[e(k,{to:"/",children:e(Vn,{children:"Hhtrungquoc.tv"})}),e(k,{to:"/",children:e(Un,{children:"tromphim.netify.app"})})]})}),e("div",{className:"mt-[50px]",children:a?e(Ae,{size:"large",children:void 0}):e(Wn,{className:"sideBarActive",children:t&&t.map((n,o)=>e(Ee,{title:n.name,to:n.path=="/"?n.path:n.path+`/${n._id}`,children:s(Gn,{state:r,children:[e(Yn,{children:wr[o]}),e(Jn,{className:r?"hiddenn":"block",children:n.name})]})},o))})}),e(ts,{})]})})},rs=p.div`
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
`,ns=({children:t,...a})=>{const{background:r}=l.exports.useContext(J)||{};return e(rs,{background:r&&r.data.url,...a,children:t})},ss=()=>{const{state:t}=l.exports.useContext(R)||{};return s(ns,{className:"text-start",children:[e("div",{children:e(Qn,{})}),s("div",{className:"containers flex",children:[e("div",{className:t?"w-1/12":"w-2/12",children:e(as,{})}),e("div",{className:`${t?"w-11/12":"w-10/12"} p-2`,children:e(dt,{})})]}),e("div",{children:e(es,{})})]})},g=({children:t})=>e(l.exports.Suspense,{fallback:e(yt,{}),children:t}),Ze=l.exports.memo(({columns:t,dataSource:a,...r})=>e(ut,{columns:t,dataSource:a,...r})),is=l.exports.memo(({name:t,label:a,control:r,rules:i,...n})=>s("div",{className:"mb-3",children:[e(E,{htmlFor:t,children:a}),e(ca,{name:t,control:r,rules:i,defaultValue:"",render:({field:o})=>e(ua,{placeholder:a,...o,...n})})]})),os=l.exports.memo(({title:t,cancelText:a,okText:r,onConfirm:i,children:n,...o})=>e(pa,{title:t,onCancel:()=>{F("H\u1EE7y")},onConfirm:i,okText:r,cancelText:a,...o,children:n})),ls=()=>{const{weeks:t}=l.exports.useContext(J),{handleSubmit:a,control:r}=pt(),i=async(u,h)=>{const y={categoryId:h};try{(await Sr(u,y)).data&&K("Delete Success")}catch{F("Delete Failure")}},n=async u=>{await Cr(u)},o=async u=>{await Nr(u)},d=u=>{var f;const h=[{title:"ID",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"operation",render:(w,N)=>e(T,{children:e(os,{title:"Delete the category",onConfirm:()=>i(u.key,N._id),okText:"Yes",cancelText:"No",children:e($,{type:"text",shape:"circle",className:"ml-2",children:e(ma,{})})})})}],y=((f=t.find(w=>w._id===u.key))==null?void 0:f.category)||[];return e(Ze,{columns:h,dataSource:y,pagination:!1})},m=t&&t.map((u,h)=>({key:u._id,name:u.name,action:s(T,{children:[e(k,{to:`/dashboard/week/edit/${u._id}`,children:e($,{type:"primary",children:"Edit"})}),e($,{onClick:()=>o(u._id),className:"ml-1",children:"Delete"})]})}));return s(T,{children:[e("form",{onSubmit:a(n),children:s(_,{gutter:4,align:"middle",justify:"center",children:[e(v,{span:22,children:e(is,{name:"name",label:"Theo tu\u1EA7n",control:r,rules:void 0})}),e(v,{span:2,children:e($,{htmlType:"submit",className:"mt-3",type:"primary",children:"Th\xEAm"})})]})}),e(Ze,{columns:br,dataSource:m,expandable:{expandedRowRender:d,defaultExpandedRowKeys:["0"]}})]})},ds=()=>s("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]",children:[e("h1",{className:"text-9xl font-extrabold text-white tracking-widest",children:"404"}),e("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute",children:"Page Not Found"}),e("button",{className:"mt-5",children:s("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring",children:[e("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),e("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current",children:e(k,{to:"/",children:"Go Home"})})]})})]}),cs=p.button`
background:linear-gradient(to right, #652EEE, #040F75)
`,us=p.input`
width: 100%;
padding: 10px;
border-radius: 10px;
background: transparent;
border: 1px solid #999;
font-size: 12px;
outline:none;
color: #fff;
`,ps=p.form``,ms=p.div`
padding: 0 20px;
@media (min-width: 768px){
  padding: 0 40px;
}
@media (min-width: 1024ox) {
  padding: 0 60px;
}
`,hs=p.div`
color: #fff;
margin-top:20px;
font-size:25px;
@media (min-width: 768px){
  margin-top:30px;
}
@media (min-width: 1024ox) {
  margin-top:40px;
`,gs=p.div`
margin: 15px 0;
color: #999;
font-size:13px;
`,xs=p.div`
cursor: pointer;
`,ys=p.div`
padding: 15px 5px;
border: 1px solid #fff;
font-style: italic;
`,fs=p.div`
border-bottom: 1px dashed  #fff;
`,vs=p.div`

`,Nt=l.exports.memo(({onSubmit:t,formTitle:a,formDescription:r,submitButtonText:i,formIntro:n,formHeader:o,checkedAccount:d,handleMessage:m,redirect:u,array:h,schemaPage:y})=>{const{register:f,handleSubmit:w,formState:{errors:N}}=pt({resolver:ha(y)});return e("div",{className:"h-screen relative z-0",children:s(ms,{className:"g-6 flex flex-wrap justify-center w-full items-center absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4",style:{transform:"translate(-50%,-50%)"},children:[s("div",{className:"w-8/12 items-center text-white hidden lg:block md:hidden",children:[e(vs,{className:"text-[50px] ",children:o}),s("div",{className:"flex items-center",children:[e(ys,{className:"w-2/12",children:n}),e(fs,{className:"w-10/12"})]})]}),s("div",{className:"md:w-8/12 lg:w-4/12 w-full lg:p-5 md:p-4 p-3",style:{background:"rgba(248, 248, 248, 0.04)",borderRadius:" 5px"},children:[s("div",{children:[e(hs,{children:a}),e(gs,{children:r})]}),s(ps,{onSubmit:w(t),children:[h&&h.map((A,B)=>e("div",{className:"relative lg:mb-6 md:mb-4 mb-2","data-te-input-wrapper-init":!0,children:s("div",{children:[e(us,{disabled:A.disable,style:{background:`${A.disable?"#99979742":""}`},type:A.type,...f(`${A.field}`),placeholder:A.field,className:"placeholder:capitalize"}),N&&N[A.field]&&e("div",{className:"text-sm text-pink-600 mt-1",children:N[A.field].message})]})},B)),e("div",{className:"lg:mb-6 md:mb-5 mb-4",children:e(tt,{to:"/forgot-password",children:s("div",{className:"text-center text-white text-sm font-medium text-primary-600 hover:underline text-primary-500",children:["Forgot password?"," "]})})}),e(cs,{type:"submit",className:"w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600",children:i}),e("div",{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:s("p",{className:"mx-4 mb-0 text-center text-white text-[12px]",children:[" ","OR"]})}),e(xs,{className:"flex justify-center",onClick:m,children:e(q,{style:{width:"30px",height:"30px"},src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:""})}),e("div",{className:"lg:mb-6 md:mb-4 mb-2 text-center lg:mt-5 md:mt-3 mt-2 text-slate-400 ",children:e(k,{to:u,className:"text-sm text-primary-600 hover:underline text-primary-500",children:d})})]})]})]})})}),ws=[{type:"email",field:"email",disable:!1}],bs=()=>{const t=Y(),a=mt().shape({email:ge().required().email()});return e(Nt,{onSubmit:async n=>{const o=await Za(n);o.data.success?(K(o.data.message),t("/signin")):F(o.data.message)},formTitle:"Forgot Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:()=>{U.success("\u0110ang c\u1EADp nh\u1EADt!")},redirect:"/forgot-password",array:ws,schemaPage:a})},ks=[{type:"password",field:"password",disable:!1},{type:"password",field:"repassword",disable:!1}],Es=()=>{const t=Y(),{id:a,token:r}=ce(),i=mt().shape({password:ge().required().min(6,"Password t\u1ED1i thi\u1EC3u 6 k\xED t\u1EF1"),repassword:ge().required().oneOf([ga("password"),null],"Passwords must match")});return e(Nt,{onSubmit:async d=>{const m=await Qa(a,r,d);m.data.success?(K(m.data.message),t("/signin")):F(m.data.message)},formTitle:"Reset Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:()=>{U.success("\u0110ang c\u1EADp nh\u1EADt!")},redirect:"/reset-password",array:ks,schemaPage:i})},Cs=()=>{const t=["#eb2f96","#52c41a","#eba12f"],{data:{data:a}}=I(L+"/category/latest"),r=[{title:"Name",dataIndex:"name",key:"name",render:o=>e("p",{children:o})},{title:"Action",key:"action",render:(o,d,m)=>e($,{type:"text",shape:"circle",className:"ml-2",onClick:()=>i(d.key),children:e(Ne,{type:"success",style:{color:t[m]}})})}],i=async o=>{const d={id:o},{data:m}=await Or(d);m.success===!0&&(K("Success"),xa(L+"/category/latest"))},n=a&&a.map((o,d)=>({key:o._id,name:o.name}));return e(ut,{columns:r,dataSource:n})},Ns=()=>{const t=D(un),{data:a}=I(L+"/most-watched-episodes"),{data:r}=I(L+"/rating/stats"),i={data:a.data,xField:"seri",yField:"view",point:{shapeField:"square",sizeField:4},interaction:{tooltip:{marker:!1}},style:{lineWidth:2}};return s(T,{children:[s("div",{className:"flex justify-around gap-2",children:[e(Q,{className:"w-full",children:e(ee,{title:"Active Users",prefix:e(ne,{}),value:t.length})}),e(Q,{bordered:!0,className:"w-full",children:e(ee,{title:"Comment",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:e(Ne,{}),suffix:"%"})}),e(Q,{bordered:!1,className:"w-full",children:e(ee,{title:"View",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:e(ya,{}),suffix:"%"})}),e(Q,{className:"w-full",children:e(ee,{title:"Rating Video",prefix:e(fa,{}),value:r.totalRatings})})]}),e("div",{className:"flex justify-between gap-2",children:e(va,{className:"w-5/12",...i})})]})},As=l.exports.lazy(()=>b(()=>import("./index.b634c53a.js"),["assets/index.b634c53a.js","assets/index.b4f81725.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Ss=l.exports.lazy(()=>b(()=>import("./index.a460cd4a.js"),["assets/index.a460cd4a.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css","assets/index.b4f81725.js","assets/index.358d72cc.js"])),_s=l.exports.lazy(()=>b(()=>Promise.resolve().then(()=>Xn),void 0)),Ts=l.exports.lazy(()=>b(()=>import("./Profile.e9b47df0.js"),["assets/Profile.e9b47df0.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Is=l.exports.lazy(()=>b(()=>import("./Sign-in.8ad4ea7f.js"),["assets/Sign-in.8ad4ea7f.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Ls=l.exports.lazy(()=>b(()=>import("./Sign-up.64d5c7b9.js"),["assets/Sign-up.64d5c7b9.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Ds=l.exports.lazy(()=>b(()=>import("./list.3ff0a0c3.js"),["assets/list.3ff0a0c3.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Ps=l.exports.lazy(()=>b(()=>import("./index.ae62c34d.js"),["assets/index.ae62c34d.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),$s=l.exports.lazy(()=>b(()=>import("./add.8ea481a3.js"),["assets/add.8ea481a3.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Rs=l.exports.lazy(()=>b(()=>import("./edit.43bd77b7.js"),["assets/edit.43bd77b7.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),zs=l.exports.lazy(()=>b(()=>import("./admin.eb9f9422.js"),["assets/admin.eb9f9422.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Bs=l.exports.lazy(()=>b(()=>import("./add.9b0548e0.js"),["assets/add.9b0548e0.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css","assets/index.9f82397b.js","assets/index.39c098eb.js"])),Os=l.exports.lazy(()=>b(()=>import("./edit.5635e7b3.js"),["assets/edit.5635e7b3.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css","assets/index.9f82397b.js","assets/index.39c098eb.js"])),Fs=l.exports.lazy(()=>b(()=>import("./adds.e4aca744.js"),["assets/adds.e4aca744.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),js=l.exports.lazy(()=>b(()=>import("./CreatingProducts.622c9938.js"),["assets/CreatingProducts.622c9938.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css","assets/index.39c098eb.js"])),Ms=l.exports.lazy(()=>b(()=>import("./index.051d7753.js"),["assets/index.051d7753.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css","assets/type.59d1ad5a.js","assets/index.9f82397b.js","assets/index.39c098eb.js"])),Vs=l.exports.lazy(()=>b(()=>import("./edit.0ff1ca25.js"),["assets/edit.0ff1ca25.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css","assets/index.39c098eb.js","assets/index.9f82397b.js"])),Us=l.exports.lazy(()=>b(()=>import("./index.fd703f8c.js"),["assets/index.fd703f8c.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Hs=l.exports.lazy(()=>b(()=>import("./edit.48e65687.js"),["assets/edit.48e65687.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),qs=l.exports.lazy(()=>b(()=>import("./index.f2e16044.js"),["assets/index.f2e16044.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Ws=l.exports.lazy(()=>b(()=>import("./index.0c8f3e7d.js"),["assets/index.0c8f3e7d.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Gs=l.exports.lazy(()=>b(()=>import("./index.946458b0.js"),["assets/index.946458b0.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Ys=l.exports.lazy(()=>b(()=>import("./index.c1bfaf1f.js"),["assets/index.c1bfaf1f.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css","assets/index.358d72cc.js","assets/index.b4f81725.js"])),Js=l.exports.lazy(()=>b(()=>import("./index.eb70b872.js"),["assets/index.eb70b872.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css","assets/type.59d1ad5a.js"])),Ks=l.exports.lazy(()=>b(()=>import("./CatemainProduct.b45f376d.js"),["assets/CatemainProduct.b45f376d.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Xs=l.exports.lazy(()=>b(()=>import("./index.3ab13967.js"),["assets/index.3ab13967.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Zs=l.exports.lazy(()=>b(()=>import("./edit.b3acdecb.js"),["assets/edit.b3acdecb.js","assets/vendor.66f3a2e0.js","assets/vendor.b238c21b.css"])),Qs=[{path:"/",name:"Trang ch\u1EE7",title:"Trang ch\u1EE7"},{path:"/signin",name:"\u0110\u0103ng nh\u1EADp",title:"\u0110\u0103ng nh\u1EADp"},{path:"/signup",name:"\u0110\u0103ng k\xED",title:"\u0110\u0103ng k\xED"},{path:"/complete",name:"Ho\xE0n Th\xE0nh",title:"Ho\xE0n Th\xE0nh"}],ei=[{path:"/",name:"Trang ch\u1EE7"},{path:"/profile",name:"H\u1ED3 s\u01A1",title:"H\u1ED3 s\u01A1"},{path:"/complete",name:"Ho\xE0n Th\xE0nh",title:"Ho\xE0n Th\xE0nh"}],ti=[{path:"/",element:e(ss,{}),children:[{path:"/",element:e(Wr,{}),index:!0},{path:"d/:id",element:e(g,{children:e(Cn,{})})},{path:"q/:id",element:e(g,{children:e(Tn,{})})},{path:"search/category",element:e(g,{children:e(_s,{})})},{path:"cart/user",element:e(g,{children:e(Ws,{})})},{path:"movie-content/:id",element:e(g,{children:e(Ss,{})})},{path:"types/h/:id",element:e(g,{children:e(As,{})})},{path:"loadmore",element:e(g,{children:e(Ys,{})})},{path:"signup",element:e(g,{children:e(Ls,{})})},{path:"signin",element:e(g,{children:e(Is,{})})},{path:"forgot-password",element:e(g,{children:e(bs,{})})},{path:"reset-password/:id/:token",element:e(g,{children:e(Es,{})})},{path:"profile",element:e(g,{children:e(Ts,{})})}]},{path:"dashboard",element:e(Rn,{children:e($n,{})}),children:[{path:"",element:e(g,{children:e(Ns,{})}),index:!0},{path:"products",element:e(g,{children:e(Ds,{})})},{path:"users",element:e(g,{children:e(Ps,{})})},{path:"adminUer",element:e(g,{children:e(zs,{})})},{path:"users/:id/edit",element:e(g,{children:e(Rs,{})})},{path:"user/add",element:e(g,{children:e($s,{})})},{path:"user/creatingUser",element:e(g,{children:e(Fs,{})})},{path:"product/add",element:e(g,{children:e(Bs,{})})},{path:"product/edit/:id",element:e(g,{children:e(Os,{})})},{path:"product/creacting",element:e(g,{children:e(js,{})})},{path:"category",element:e(g,{children:e(Ms,{})})},{path:"category/edit/:id",element:e(g,{children:e(Vs,{})})},{path:"category/latest",element:e(g,{children:e(Cs,{})})},{path:"trailing",element:e(g,{children:e(Us,{})})},{path:"trailerUrl/:id",element:e(g,{children:e(Hs,{})})},{path:"comments",element:e(g,{children:e(qs,{})})},{path:"cart",element:e(g,{children:e(Gs,{})})},{path:"types",element:e(g,{children:e(Js,{})})},{path:"types/CateMainProduct/:id",element:e(g,{children:e(Ks,{})})},{path:"background",element:e(g,{children:e(Xs,{})})},{path:"background/edit/:id",element:e(g,{children:e(Zs,{})})},{path:"weeks",element:e(g,{children:e(ls,{})})}]},{path:"/*",element:e(ds,{})}],ai=[{path:"/dashboard",name:"Admin",icon:e(wa,{})},{path:"/dashboard/products",name:"Products",icon:e(ba,{})},{name:"User",icon:e(Oe,{}),children:[{path:"/dashboard/users",name:"Users",icon:e(ne,{})},{path:"/dashboard/adminUer",name:"Admin",icon:e(Fe,{})}]},{name:"Category",icon:e(Oe,{}),children:[{path:"/dashboard/category",name:"Category",icon:e(ka,{})},{path:"/dashboard/category/latest",name:"Latest",icon:e(Ne,{})}]},{name:"Themes",icon:e(ct,{}),children:[{path:"/dashboard/trailing",name:"Trailer",icon:e(Fe,{})},{path:"/dashboard/background",name:"Background",icon:e(Ea,{})}]},{name:"Big Category",icon:e(rt,{}),children:[{path:"/dashboard/types",name:"Types",icon:e(Ca,{})}]},{path:"/dashboard/comments",name:"Comments",icon:e(Na,{})},{path:"/dashboard/cart",name:"Cart",icon:e(Aa,{})},{path:"/dashboard/weeks",icon:e(st,{}),name:"Week"}],ri=Sa`
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

`,Qe=t=>{if(!t)return!0;try{const a=_a(t),r=Date.now()/1e3;return a.exp<r}catch(a){return console.error("Error decoding token:",a),!0}};function ni(){const t=Ce(),a="G-0EEY3R7F0S",r=Ta(ti),i=Y(),[n,o]=l.exports.useState(!1),d=P();l.exports.useEffect(()=>{je.initialize(a),je.send({hitType:"pageview",page:t.pathname,title:"User Active"}),(async()=>{if(d){const h=d.token,y=d.refreshToken;if(Qe(y))Ct("Token expires-relogin"),localStorage.clear(),i("/signin");else if(Qe(h)){const f={refreshToken:d.refreshToken},{data:w}=await er(f);localStorage.setItem("token",JSON.stringify(w))}}})();const u=setTimeout(()=>{o(!0)},1e3);return()=>clearTimeout(u)},[]),setTimeout(()=>{o(!1)},5e3);const m=()=>{o(!1)};return s(T,{children:[n&&s("div",{id:"toast-warning",className:"flex transition-all lg:w-[300px] md:w-[250px] w-200px gap-3 custom-toast items-center max-w-lg p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",role:"alert",children:[s("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200",children:[e("svg",{className:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"})}),e("span",{className:"sr-only",children:"Warning icon"})]}),e("div",{className:"ms-3 text-sm font-normal",children:"Xin l\u1ED7i, server phim hi\u1EC7n \u0111ang qu\xE1 t\u1EA3i do l\u01B0\u1EE3ng truy c\u1EADp l\u1EDBn. Vui l\xF2ng ch\u1EDD \u0111\u1EE3i trong 1-2 ph\xFAt \u0111\u1EC3 ti\u1EBFp t\u1EE5c xem. Ch\xFAng t\xF4i \u0111ang n\u1ED7 l\u1EF1c \u0111\u1EC3 c\u1EA3i thi\u1EC7n t\xECnh h\xECnh v\xE0 xin th\xE0nh th\u1EADt xin l\u1ED7i v\xEC s\u1EF1 b\u1EA5t ti\u1EC7n n\xE0y. Tr\xE2n tr\u1ECDng!"}),s("button",{type:"button",className:"ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700","data-dismiss-target":"#toast-warning","aria-label":"Close",onClick:()=>m(),children:[e("span",{className:"sr-only",children:"Close"}),e("svg",{className:"w-3 h-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})]})]}),r,e(ri,{}),e(Ia,{}),e(La.BackTop,{visibilityHeight:200})]})}const si={value:{product:[],length:0},isLoading:!1,getOneProduct:{},getAllProductByCategory:[],status:!1},ii=V({name:"product",initialState:si,reducers:{},extraReducers:t=>{t.addCase(Ye.pending,(a,r)=>{a.isLoading=!0}).addCase(Ye.fulfilled,(a,r)=>{a.isLoading=!1,a.value=r.payload}),t.addCase(an.fulfilled,(a,r)=>{a.value.product=a.value.product.filter(i=>i._id!==r.payload.data._id)}),t.addCase(rn.fulfilled,(a,r)=>{a.value.product.push(r.payload)}),t.addCase(nn.fulfilled,(a,r)=>{a.value.product.push(r.payload)}),t.addCase(sn.fulfilled,(a,r)=>{a.value.product=[...a.value.product,r.payload]}),t.addCase(on.fulfilled,(a,r)=>{a.value.product=r.payload}),t.addCase(ln.fulfilled,(a,r)=>{a.value.product=r.payload}),t.addCase(we.pending,(a,r)=>{a.isLoading=!0}).addCase(we.fulfilled,(a,r)=>{a.isLoading=!1,a.getOneProduct=r.payload}),t.addCase(Et.fulfilled,(a,r)=>{a.getAllProductByCategory=r.payload})}}),oi=ii.reducer,li={category:{data:[],length:0},isLoading:!1,isError:!1,categoryNotReqId:[],details:{}},di=V({name:"category",initialState:li,reducers:{},extraReducers:t=>{t.addCase(ae.fulfilled,(a,r)=>{a.isLoading=!1,a.category=r.payload}).addCase(ae.pending,(a,r)=>{a.isLoading=!0}).addCase(ae.rejected,(a,r)=>{a.isError=!0}),t.addCase(Ge.fulfilled,(a,r)=>{a.isLoading=!1,a.categoryNotReqId=r.payload}).addCase(Ge.pending,(a,r)=>{a.isLoading=!0}),t.addCase(Fr.fulfilled,(a,r)=>{a.category.data=a.category.data.concat(r.payload)}),t.addCase(jr.fulfilled,(a,r)=>{a.category.data=a.category.data.filter(i=>i._id!==r.payload._id)}),t.addCase(Mr.fulfilled,(a,r)=>{a.category.data.push(r.payload)}),t.addCase(ve.fulfilled,(a,r)=>{a.details=r.payload,a.isLoading=!1}).addCase(ve.pending,(a,r)=>{a.isLoading=!0})}}),ci=di.reducer,Yi=async()=>await c.get("/trailer"),le=P(),ui=async t=>await c.put(`/trailer/${t.get("_id")}/${le.user._id}`,t,{headers:{Authorization:`Bearer ${le.token}`}}),Ji=async t=>await c.post(`/background/${t.get("_id")}/${le.user._id}`,t,{headers:{Authorization:`Bearer ${le.token}`}}),pi=x("trailer/Trailing",async t=>{const{data:a}=await ui(t);return a}),mi=V({name:"post",initialState:{value:[],trailerValues:[]},reducers:{},extraReducers:t=>{t.addCase(pi.fulfilled,(a,r)=>{a.trailerValues.push(r.payload)})}}),hi=mi.reducer,de=P(),gi=async()=>await c.get("/comments"),xi=async(t,a)=>await c.post(`/comment/${t}/${de.user._id}`,a,{headers:{Authorization:`Bearer ${de.token}`}}),yi=async t=>await c.post(`/comment/${de.user._id}`,t,{headers:{Authorization:`Bearer ${de.token}`}}),fi=x("getAllCommentSlice",async()=>{const{data:t}=await gi();return t}),vi=x("addCommentSlice",async t=>{const{data:a}=await xi(t.product,t);return a}),wi=x("deleteComment",async t=>{const{data:a}=await yi(t);return a}),bi=V({name:"comment",initialState:{value:[]},reducers:{},extraReducers:t=>{t.addCase(fi.fulfilled,(a,r)=>{a.value=r.payload}),t.addCase(vi.fulfilled,(a,r)=>{a.value.push(r.payload)}),t.addCase(wi.fulfilled,(a,r)=>{a.value=a.value.filter(i=>i._id!==r.payload._id)})}}),ki=bi.reducer,Ei=V({name:"cart",initialState:{value:[],isLoading:!1,code:null},reducers:{},extraReducers:t=>{t.addCase(Ve.fulfilled,(a,r)=>{a.isLoading=!1,a.value=r.payload}).addCase(Ve.pending,(a,r)=>{a.isLoading=!0}),t.addCase(xe.pending,(a,r)=>{a.isLoading=!0}).addCase(xe.fulfilled,(a,r)=>{Array.isArray(a.value)||(a.value=[]),a.isLoading=!1,a.value.push(r.payload.cart)})}}),Ci=Ei.reducer,Ni={key:"root",storage:za,whitelist:[""],expire:"3600000"},Ai=Da({product:oi,user:cr,category:ci,trailer:hi,comment:ki,cart:Ci}),Si=Pa(Ni,Ai),At=$a({reducer:Si,middleware:t=>t({serializableCheck:!1})}),_i=Ra(At);Ba.createRoot(document.getElementById("root")).render(e(Oa,{store:At,children:e(Fa,{persistor:_i,children:e(_r,{children:e(ur,{children:e(ja,{children:e(ni,{})})})})})}));export{Vi as $,Nt as A,qi as B,an as C,Ui as D,Hi as E,un as F,sr as G,Fi as H,He as I,is as J,ye as K,mr as L,hr as M,ft as N,or as O,Gi as P,ir as Q,Oi as R,Ae as S,rn as T,E as U,O as V,q as W,z as X,oe as Y,we as Z,nn as _,bt as a,lr as a0,sn as a1,Wi as a2,ae as a3,$i as a4,Fr as a5,jr as a6,P as a7,c as a8,ve as a9,Mr as aa,Lr as ab,zi as ac,Yi as ad,pi as ae,fi as af,Ri as ag,wi as ah,nr as ai,vt as aj,Ve as ak,Li as al,Pi as am,Mi as an,Bi as ao,Di as ap,Ji as aq,L as b,k as c,Ii as d,H as e,R as f,D as g,xr as h,Ke as i,We as j,K as k,F as l,pe as m,J as n,Ye as o,ie as p,$ as q,Ue as r,_ as s,v as t,I as u,os as v,Ze as w,on as x,ln as y,ji as z};
