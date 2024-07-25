import{u as _t,a as It,b as Ze,c as x,d as M,m as U,r as o,j as e,T as Tt,e as Lt,s as p,S as Dt,f as i,g as Pt,L as Qe,D as $t,h as Rt,H as et,B as zt,A as tt,R as Bt,i as Ot,F as Ft,W as jt,k as Vt,l as Mt,n as Ut,P as at,o as Ht,C as qt,p as Wt,q as I,N as ke,t as Gt,v as ae,w as Yt,E as Jt,x as de,y as Kt,z as Ee,G as De,I as Xt,J as G,K as Zt,M as rt,O as Qt,Q as Y,U as Pe,V as $e,X as ea,Y as re,Z as nt,_ as ta,$ as pe,a0 as me,a1 as st,a2 as it,a3 as ot,a4 as Re,a5 as aa,a6 as ra,a7 as na,a8 as sa,a9 as lt,aa as ia,ab as oa,ac as dt,ad as la,ae as da,af as ca,ag as ct,ah as ua,ai as pa,aj as ut,ak as he,al as ma,am as Ce,an as ha,ao as Z,ap as Q,aq as ga,ar as xa,as as ya,at as fa,au as va,av as ze,aw as Be,ax as wa,ay as ba,az as ka,aA as Ea,aB as Ca,aC as Na,aD as Aa,aE as Sa,aF as Oe,aG as _a,aH as Ia,aI as Ta,aJ as La,aK as Da,aL as Pa,aM as $a,aN as Ra,aO as za,aP as Ba,aQ as Oa}from"./vendor.47cf65fa.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}})();const Fa="modulepreload",ja=function(t){return"/"+t},Fe={},b=function(a,r,s){if(!r||r.length===0)return a();const n=document.getElementsByTagName("link");return Promise.all(r.map(l=>{if(l=ja(l),l in Fe)return;Fe[l]=!0;const d=l.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!s)for(let f=n.length-1;f>=0;f--){const v=n[f];if(v.href===l&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${m}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Fa,d||(h.as="script",h.crossOrigin=""),h.href=l,document.head.appendChild(h),d)return new Promise((f,v)=>{h.addEventListener("load",f),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>a())},P=()=>{const t=localStorage.getItem("token");if(t)return JSON.parse(t||"")},H=()=>_t(),D=It,c=Ze.create({baseURL:"https://node-4-mhqo.onrender.com/api"}),Va=Ze.create({baseURL:"https://node-3-uodg.onrender.com/api"}),W=P(),Ma=async t=>await c.post("/signup",t),Ua=async t=>await c.post("/signin",t),pt=async()=>await c.get("user"),Ha=async t=>await c.get("user_one/"+t),qa=async t=>await c.delete("removeUser/"+t+`/${W.user._id}`,{headers:{Authorization:`Bearer ${W.token}`}}),Wa=async t=>await c.put(`user/${t._id}/${W.user._id}`,t,{headers:{Authorization:`Bearer ${W.token}`}}),Ga=async t=>await c.post("user/creating",t),Ya=async t=>await c.get(`user/cart/${t}`),Ja=async(t,a)=>await c.post(`/user/upload/${t}`,a,{headers:{Authorization:`Bearer ${W.token}`}}),Ka=async t=>await c.post("/forgot-password",t),Xa=async(t,a,r)=>await c.post(`/reset-password/${t}/${a}`,r),Za=async t=>await c.post("/refreshToken",t),ne=P(),Qa=async()=>await c.get("/cart"),er=async t=>await c.post(`/cart/${ne.user._id}`,t,{headers:{Authorization:`Bearer ${ne.token}`}}),tr=async(t,a)=>await c.post(`/cart/${t}/${ne.user._id}`,a,{headers:{Authorization:`Bearer ${ne.token}`}}),je=x("cartSlice",async()=>{const{data:t}=await Qa();return t}),ge=x("addCartSlice",async t=>{const{data:a}=await er(t);return a}),ar=x("deleteCartSlice",async t=>{const{data:a,status:r}=await tr(t.id,t);return a.data}),Ve=x("user/login",async t=>{const{data:a}=await Ma(t);return a}),ue=x("user/signin",async t=>{const{data:a,status:r}=await Ua(t);return a}),rr=x("user/getAll",async()=>{const{data:t}=await pt();return t.filter(r=>r.role==0)}),xe=x("user/getUser_id",async t=>{const{data:a}=await Ha(t);return a}),nr=x("admin/getAdmin",async()=>{const{data:t}=await pt();return t.filter(r=>r.role>=1)}),Me=x("user/deteleUser",async t=>{const{data:a}=await qa(t);return a}),sr=x("edit/editUser",async t=>{const{data:a}=await Wa(t);return a}),ir=x("user/importXlsx",async t=>{const{data:a}=await Ga(t);return a}),Ue=x("findcart",async t=>{const{data:a}=await Ya(t);return a.cart}),He=x("uploadImage",async({id:t,formData:a})=>{const{data:r,status:s}=await Ja(t,a);return r}),mt=M({name:"user",initialState:{value:[],cartUser:[],isLoading:!1,error:!1,login:{},isLogin:localStorage.getItem("isLogin")==="true",user:{}},reducers:{logout(t){localStorage.removeItem("token"),U.success("Logout successful!"),t.isLogin=!1,localStorage.setItem("isLogin","false"),t.user={}}},extraReducers:t=>{t.addCase(Ve.fulfilled,(a,r)=>{a.error=!1,a.value=r.payload.newUser}).addCase(Ve.rejected,(a,r)=>{a.error=!0}),t.addCase(ue.pending,(a,r)=>{a.isLoading=!0}).addCase(ue.fulfilled,(a,r)=>{localStorage.setItem("token",JSON.stringify(r.payload)),a.login=r.payload,a.error=!1,a.isLogin=!0,a.isLoading=!1,a.user=r.payload.user,localStorage.setItem("isLogin","true")}).addCase(ue.rejected,(a,r)=>{a.error=r.payload,a.isLoading=!1}),t.addCase(rr.fulfilled,(a,r)=>{a.value=r.payload}),t.addCase(Me.fulfilled,(a,r)=>{a.value=a.value.filter(s=>s._id!==r.payload._id)}).addCase(Me.rejected,(a,r)=>{}),t.addCase(nr.fulfilled,(a,r)=>{a.value=r.payload}),t.addCase(sr.fulfilled,(a,r)=>{a.value.push(r.payload)}),t.addCase(ir.fulfilled,(a,r)=>{a.value.unshift(r.payload)}),t.addCase(Ue.pending,(a,r)=>{a.isLoading=!0}).addCase(Ue.fulfilled,(a,r)=>{a.isLoading=!1,a.cartUser=r.payload}),t.addCase(xe.fulfilled,(a,r)=>{a.user=r.payload,a.isLoading=!1}).addCase(xe.pending,(a,r)=>{a.isLoading=!0}),t.addCase(He.fulfilled,(a,r)=>{a.isLoading=!1,a.user=r.payload.data}).addCase(He.pending,(a,r)=>{a.isLoading=!0}),t.addCase(ar.fulfilled,(a,r)=>{const s=a.user.cart.filter(n=>n.product._id!==r.payload.product);a.user.cart=s})}}),{logout:or}=mt.actions,lr=mt.reducer,ee=P(),R=o.exports.createContext(null),dr=t=>{const a=H(),{user:r}=D(v=>v.user),s=localStorage.getItem("isLogin"),n=D(v=>v.user.isLogin),[l,d]=o.exports.useState(!1),[m,u]=o.exports.useState(!1),h=()=>{u(!m)};o.exports.useEffect(()=>{ee&&a(xe(ee.user._id))},[n,a,l]);const f={Auth:ee||"",user:r,isLoggedIn:s,isLoggedInState:n,setReset:d,handleClick:h,state:m};return e(R.Provider,{value:f,children:t.children})},E=o.exports.memo(({level:t,children:a,...r})=>e(Tt,{...r,children:a})),se=({color:t,children:a,...r})=>e(Lt,{color:t,...r,children:a}),cr=p.div`
height: 100vh;
`,ht=p.div`
position: relative;
height: 100vh;
justify-content: center;
display: flex;
&>*{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
`,gt=()=>e(cr,{}),ur=()=>{var a;const{state:t}=(a=o.exports.useContext(R))!=null?a:{};return e(Dt,{className:t?"w-11/12":"w-10/12",active:!0,title:{width:"20%"},paragraph:{rows:8,width:[300,200,400,100]},loading:!0,style:{height:"100vh",padding:"0 30px"}})},pr=()=>e(ht,{children:e(E,{type:"danger",children:"L\u1ED7i r\u1ED3i ki\u1EC3m tra l\u1EA1i m\u1EA1ng c\u1EE7a b\u1EA1n ho\u1EB7c t\u1EA3i l\u1EA1i trang..."})}),Ne=({size:t,children:a})=>e(ht,{className:"w-full",children:i("div",{role:"status",children:[i("svg",{className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e("span",{className:"sr-only",children:"Loading..."})]})}),xt=()=>e(se,{color:"#108ee9",className:"mx-2",children:"Empty"}),yt=()=>e("p",{className:"text-white",children:"Tr\u1ED1ng!"}),mr=async t=>await c.get(t),T=t=>{const{data:a,error:r,mutate:s}=Pt(t,mr);return{data:a?a.data:"",isLoading:!a&&!r,isError:r,mutate:s}},L="https://node-4-mhqo.onrender.com/api",hr=(t,a)=>{t(or()),a("/")},k=({to:t,children:a,...r})=>e(Qe,{to:t,...r,className:"link",children:a}),ie=o.exports.memo(({textColor:t,orientation:a,children:r,...s})=>e($t,{style:{color:t,borderBlockStartColor:"#999"},className:"text-white",orientation:a,...s,children:r})),q=({src:t,alt:a,style:r,...s})=>e("img",{loading:"lazy",src:t,className:"m-5 w-full h-full",style:r,alt:a,...s}),O=(t,a)=>{const r=a?a.split("/"):null,s=r==null?void 0:r.indexOf("upload");return s!==-1&&(r==null||r.splice(s+1,0,`w_${t}/f_webp`)),r==null?void 0:r.join("/")},gr=p.div`
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius:10px;
}
::-webkit-scrollbar {
  width: 2px;
}
`,xr=p.div`
background: rgb(28, 28, 30);
border-radius: 10px;
margin: 5px 0px;
`,yr=()=>{const{data:{data:t}}=T("/category/filters");return i("div",{className:"rounded des w-3/12 relative overflow-hidden lg:block md:hidden hidden bg-[#0000005e] min-h-screen",children:[e(ie,{className:"m-0",textColor:"#fff",orientation:"left",children:"Xem th\xEAm"}),e(gr,{className:"absolute h-full w-full px-2 overflow-scroll",children:t&&(t==null?void 0:t.map((a,r)=>i(xr,{className:"flex lg:gap-1 my-2 py-2",children:[e("div",{className:"w-3/12",children:e(k,{to:"/q/"+a._id,children:e(q,{className:"m-0 h-full",src:O(100,a.linkImg),alt:a.name})},r)}),i("div",{className:"w-9/12",children:[e(k,{style:{textDecoration:"none",color:"#999",fontSize:"13px"},to:"/q/"+a._id,children:a.name},r),i(se,{color:"#108ee9",className:"text-[12px] text-[#999] my-2 block w-6/12 ",children:[" ",a.sumSeri+" T\u1EADp VietSub"]}),e(se,{color:"#2db7f5",children:a.type?a.type:"null"}),e("div",{className:"text-sm text-gray-400 mt-2",children:i("div",{className:"flex items-center mt-1 justify-between",children:[e(E,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e(E,{className:"mr-2 text-gray-300",children:a.typecm}),i(E,{className:"text-gray-400 text-sm",children:["(",a.time,")"]})]})})]})]},r)))})]})},ft=({content:t,settings:a})=>e(Rt,{...a,children:t}),_i=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],fr=[e(et,{}),e(zt,{}),e(tt,{}),e(Bt,{}),e(Ot,{}),e(Ft,{}),e(jt,{}),e(Vt,{}),e(Mt,{})],Ii=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Action",dataIndex:"action",key:"action"}],Ti=[{title:"Url",dataIndex:"url",key:"url"},{title:"Image",dataIndex:"image",key:"image"},{title:"Action",dataIndex:"action",key:"action"}],Li=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Path",dataIndex:"path",key:"path"},{title:"Product",dataIndex:"product",key:"product"},{title:"Categorymain",dataIndex:"categorymain",key:"categorymain"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"},{title:"Checked",dataIndex:"checked",key:"checked"}],Di=[{title:"Stt",dataIndex:"stt",key:"stt",width:50},{title:"Name",dataIndex:"name",key:"name",width:150},{title:"Image",dataIndex:"image",key:"Image",width:150},{title:"Duration",dataIndex:"duration",key:"duration",width:50},{title:"isActive",dataIndex:"isActive",key:"isActive",width:50},{title:"Year",dataIndex:"year",key:"year",width:50},{title:"Set",dataIndex:"set",key:"set",width:50},{title:"Week",dataIndex:"week",key:"week",width:50},{title:"Action",dataIndex:"action",key:"action",width:100}],Pi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Product",dataIndex:"product",key:"product"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Day",dataIndex:"day",key:"day"},{title:"Action",dataIndex:"action",key:"action"}],$i=[{title:"Id",dataIndex:"_id",key:"_id"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],Ri=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Image",dataIndex:"image",key:"image"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"}],zi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Role",dataIndex:"role",key:"role"},{title:"Status",dataIndex:"status",key:"status"},{title:"Image",dataIndex:"image",key:"image"}],Bi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Image",dataIndex:"image",key:"image"},{title:"Status",dataIndex:"status",key:"status"},{title:"Role",dataIndex:"role",key:"role"},{title:"Action",key:"action",dataIndex:"action",with:150}],vr=[{title:"Name",dataIndex:"name",key:"name"},{title:"Action",dataIndex:"action",key:"action"}],wr={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},br={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!1,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2,dots:!0}}]},j=P(),kr=async t=>await c.post(`/week/${j.user._id}`,t,{headers:{Authorization:`Bearer ${j.token}`}}),Er=async t=>await c.delete(`/week/${t}/${j.user._id}`,{headers:{Authorization:`Bearer ${j.token}`}}),Cr=async t=>await c.get(`/week?w=${t}`),Nr=async(t,a)=>await c.post(`/week/category/${t}/${j.user._id}`,a,{headers:{Authorization:`Bearer ${j.token}`}}),J=o.exports.createContext(null),Ar=t=>{const[a,r]=o.exports.useState(1),{data:s}=T(L+"/weeks"),{data:n}=T(L+"/background"),{data:l,isLoading:d}=T(L+"/types"),{data:m,isLoading:u,isError:h}=T(L+"/categorymain"),f={seri:l,loadingSeri:d,categorymain:m,LoadingCateMain:u,isError:h,background:n,weeks:s,setPage:r,page:a};return e(J.Provider,{value:f,children:t.children})},B=o.exports.memo(({level:t,children:a,...r})=>e(Ut,{level:t,...r,children:a})),ye=o.exports.memo(({title:t,link:a,image:r,sumSeri:s,time:n,typecm:l,year:d,products:m})=>{const u=m?m[m.length-1]:"";return i("div",{className:"w-full",children:[e("div",{className:"relative group",children:i(k,{to:a,className:"block",children:[e("div",{className:"relative w-full h-[200px] md:h-[250px] lg:h-[320px]",children:e(q,{src:O(300,r),alt:t,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-2 py-1 font-medium",children:u?`T\u1EADp ${u.seri}`:e(yt,{})}),e("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e(at,{className:"text-white text-5xl"})})]})}),e("div",{className:"mt-4",children:e(k,{to:a,children:e(B,{level:5,style:{color:"#fff"},className:"text-xl md:text-2xl lg:text-3xl font-bold",children:t})})}),i("div",{className:"text-sm text-gray-400 mt-2",children:[e("div",{className:"font-semibold",children:s?`${s} T\u1EADp`:""}),i("div",{className:"flex items-center mt-1 justify-between",children:[e(E,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e(E,{className:"mr-2 text-gray-300",children:l}),i(E,{className:"text-gray-400 text-sm",children:["(",n,")"]})]}),e("div",{className:"font-semibold mt-2",children:d?`${d}`:""})]})]})});function Sr(){var v;const{weeks:t}=o.exports.useContext(J)||{},a=["Ch\u1EE7 nh\u1EADt","Th\u1EE9 2","Th\u1EE9 3","Th\u1EE9 4","Th\u1EE9 5","Th\u1EE9 6","Th\u1EE9 7"],s=new Date().getDay(),[n,l]=o.exports.useState(!0),[d,m]=o.exports.useState(a[s]),[u,h]=o.exports.useState([]),f=w=>{m(w)};return o.exports.useEffect(()=>{const w=async()=>{const{data:N}=await Cr(d);h(N),l(!1)};l(!0),w()},[d]),i("div",{className:"container mx-auto my-10",children:[e("div",{className:"px-4 lg:px-[150px] md:px-[100px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0",children:t&&t.map(w=>e("div",{className:d===w.name?"active border-none":"cursor-pointer",onClick:()=>f(w.name),children:e("div",{className:"text-[11px] md:text-[12px] lg:text-[14px] flex justify-center items-center px-4 py-2 text-white rounded-lg w-full",children:e("p",{children:w.name})})},w._id))}),e("div",{className:"my-5 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full",children:n?e(gt,{}):e(ft,{settings:wr,content:(v=u==null?void 0:u.content)==null?void 0:v.map(w=>e("div",{className:"px-2",children:e(ye,{title:w.name,link:"/q/"+w._id,image:w.linkImg,time:w.time,sumSeri:w.sumSeri,products:w.products})},w._id))})})]})}const _=o.exports.memo(({gutter:t,justify:a,align:r,children:s,...n})=>e(Ht,{gutter:t,justify:a,align:r,...n,children:s})),y=({children:t,...a})=>e(qt,{...a,children:t}),vt=o.exports.memo(({type:t,gutter:a,child:r,...s})=>e(_,{gutter:a,children:t==="category"?r&&r.length&&r.map((n,l)=>e(y,{xs:12,sm:10,md:8,lg:6,xl:4,children:e(ye,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,year:n.year,sumSeri:n.sumSeri,products:n.products})},n._id)):r&&r.length?r.map((n,l)=>e(y,{xs:12,sm:10,md:8,lg:6,xl:4,children:e(ye,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,sumSeri:n.sumSeri})},n._id)):e(xt,{})})),V=P(),_r=async t=>await c.get(`/categorys?page=${t}`),Ir=async t=>await c.get(`/category/${t}`),Tr=async t=>await c.post(`/category/${V.user._id}`,t,{headers:{Authorization:`Bearer ${V.token}`}}),Lr=async t=>await c.delete(`/category/${t}/${V.user._id}`,{headers:{Authorization:`Bearer ${V.token}`}}),Dr=async t=>await c.post(`/category/${t.get("_id")}/${V.user._id}`,t,{headers:{Authorization:`Bearer ${V.token}`}}),Pr=async t=>await c.get("/category/getAllCategoryNotRequest/"+t),$r=async t=>await c.get(`/categorys/search?value=${t}`),Rr=async(t,a)=>await c.post("/rating/"+t,a),zr=async t=>await c.post("/category/changeLatest",t),te=x("category/getAllcate",async t=>{const{data:a}=await _r(t);return a}),fe=x("category/getOne",async t=>{const{data:a}=await Ir(t);return a}),qe=x("getAll/Category",async t=>{const{data:a}=await Pr(t);return a}),Br=x("add/Addcate",async t=>{const{data:a}=await Tr(t);return a}),Or=x("delete/DeleteCate",async t=>{const{data:a}=await Lr(t);return a}),Fr=x("update/Category",async t=>{const{data:a}=await Dr(t);return a}),wt=()=>{const{data:t}=D(s=>s.category.category),a=D(s=>s.category.isLoading);D(s=>s.category.isError);const r=H();return o.exports.useEffect(()=>{r(te(1))},[]),a?e("div",{className:"seriLoading",children:"Loading..."}):i("div",{children:[i("div",{className:"flex justify-between items-center",children:[e(B,{level:2,underline:!0,style:{color:"#fff"},strong:!0,className:"uppercase",children:"Xem Nhi\u1EC1u"}),e(k,{to:"/loadmore","aria-label":"T\u1EA3i th\xEAm n\u1ED9i dung",children:i("div",{className:"text-[16px] text-[#fff] flex lg:text-[20px] md:text[18px] gap-3",children:[e("span",{className:"underline",children:"See More"}),e("span",{children:e(Wt,{title:"T\u1EA3i th\xEAm n\u1ED9i dung..."})})]})})]}),e(vt,{type:"category",gutter:[16,16],child:t})]})},jr=()=>{const{data:{data:t}}=T(L+"/category/latest");return i("div",{children:[e("h2",{className:"text-white category text-md md:text-md pl-2 mb-2 mx-2 my-3 border-l-4  font-sans font-bold border-teal-400 dark:text-gray-200",children:"M\u1EDBi C\u1EADp Nh\u1EADt"}),e(ft,{settings:br,content:t&&t.map((a,r)=>{const s=a.products[a.products.length-1];return e("div",{children:i("div",{className:"w-full ",children:[e("div",{className:"relative group ",children:i(k,{to:`/q/${a._id}`,className:"block mx-2",children:[e("div",{className:"relative h-[200px] w-[120px] custom-slide md:w-[180px] lg:w-[220px]",children:e(q,{src:O(280,a.linkImg),alt:a.name,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-1 md:px-2 py-1 font-medium",children:s?`T\u1EADp ${s.seri}`:e(yt,{})}),e("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e(at,{className:"text-white text-5xl"})})]})}),e("div",{className:"mt-4",children:e(k,{to:"/q/"+a._id,children:e("div",{style:{color:"#999"},className:"text-sm md:text-md lg:text-md",children:a.name})})})]})},a._id)})})]})};function Ae({children:t}){const[a,r]=o.exports.useState(!1),s=o.exports.useRef(null);return o.exports.useEffect(()=>{const n=new IntersectionObserver(l=>{l[0].isIntersecting&&r(!0)},{threshold:1});return s.current&&n.observe(s.current),()=>{s.current&&n.unobserve(s.current)}},[]),i("div",{children:[a&&t,e("div",{ref:s,style:{height:"1px"}})]})}const Vr=p.video``,Mr=p.div`
  padding-bottom: 60%;
  @media (min-width: 768px) {
    padding-bottom: 50%;
  }
  @media (min-width: 1024px) {
    padding-bottom: 45%;
  }
`,Ur=o.exports.memo(()=>{const{data:t,isError:a}=T(L+"/trailer"),{state:r}=o.exports.useContext(R);return a?e(pr,{}):i("div",{className:r?"p-3":"mt-3",children:[i("div",{className:"d-flex",children:[e("div",{className:"lg:w-9/12 md:w-12/12 sm:w-full",children:i("div",{className:"h-full",children:[e(Mr,{className:"relative md:mx-2",children:e(Vr,{className:"h-full absolute bg-black rounded",width:"100%",loop:!0,muted:!0,autoPlay:!0,controls:!0,src:t.url})}),e(jr,{})]})}),e(yr,{})]}),e(Sr,{}),e(Ae,{children:e(wt,{})})]})}),Hr=()=>e(I,{children:e(Ur,{})}),C=P(),qr=async t=>await c.get(`products?page=${t}`),Wr=async t=>await c.get(`product/${t}`),Gr=async t=>await c.delete(`/product/${t}/${C.user._id}`,{headers:{Authorization:`Bearer ${C.token}`}}),Yr=async t=>await c.post(`/product/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),Jr=async t=>await c.put(`/product/${t.get("_id")}/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),Kr=async t=>await c.post("/products/creating",t,{}),Oi=async t=>await c.post(`/products/deleteMultiple/${C.user._id}`,t,{headers:{Authorization:`Bearer ${C.token}`}}),Xr=async t=>await c.get(`/category/products/${t}`),Fi=async(t,a)=>await c.post(`/product/pushlist/${t}/${C.user._id}`,a,{headers:{Authorization:`Bearer ${C.token}`}}),ji=async(t,a)=>await Va.post(`/product/abyss/${t}/${C.user._id}`,a,{headers:{Authorization:`Bearer ${C.token}`}}),Vi=async t=>await c.post(`/product/approve/${t}/${C.user._id}`,null,{headers:{Authorization:`Bearer ${C.token}`}}),Mi=async t=>await c.post(`/product/approve/cancel/${t}/${C.user._id}`,null,{headers:{Authorization:`Bearer ${C.token}`}}),Zr=async t=>await c.get(`/product/filter?c=${t}`),Qr=async t=>await c.get(`/product/v?name=${t}`),Ui=async()=>await c.post(`/products/clear/${C.user._id}`,null,{headers:{Authorization:`Bearer ${C.token}`}}),We=x("product/getProducts",async t=>{const{data:a}=await qr(t);return{product:a.data,length:a.length}}),ve=x("product/getProduct",async t=>{const{data:a}=await Wr(t);return a}),en=x("product/deleteProduct",async t=>{const{data:a}=await Gr(t);return a}),tn=x("product/addProduct",async t=>{const{data:a,status:r}=await Yr(t);return a}),an=x("product/editProduct",async t=>{const{data:a}=await Jr(t);return a}),rn=x("product/importDataFile",async t=>{const{data:a}=await Kr(t);return a}),bt=x("product/getAllProductDataByCategory",async t=>{const{data:a}=await Xr(t);return a}),nn=x("product/filter",async t=>{const{data:a}=await Zr(t);return a}),sn=x("product/Search",async t=>{const{data:a}=await Qr(t);return a}),on=t=>t.product.getOneProduct,ln=t=>t.product.getAllProductByCategory,Hi=t=>t.category.category,dn=t=>t.user.value,qi=t=>t.user.value,cn=p.button`
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
`,Ge=p.button`
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
`,un=o.exports.memo(({seriProduct:t})=>e(_,{gutter:14,items:"center",children:t.map((a,r)=>a.isApproved==!0?e(y,{xl:3,lg:3,md:4,sm:4,xs:6,className:"mt-2",children:e(ke,{className:({isActive:s,isPending:n})=>s?"activeSeri":"",to:"/d/"+a._id+`?c=${a.category}`,children:e(cn,{className:a.seri&&"w-full",children:a.seri&&"T\u1EADp "+a.seri})})},r):"")})),$=o.exports.memo(({children:t,...a})=>e(Gt,{...a,children:t})),K=t=>U.success(t),kt=t=>U.warning(t),F=t=>U.error(t),pn=({item:t,id:a})=>{var f;const r=H(),{Auth:s,user:n,isLoggedInState:l}=o.exports.useContext(R),[d,m]=o.exports.useState(!1),u={user:s?s.user._id:"",product:a};o.exports.useEffect(()=>{var w,N;const v=(w=n==null?void 0:n.cart)==null?void 0:w.find(A=>A.product._id===a);m(((N=v==null?void 0:v.product)==null?void 0:N._id)===a)},[n.cart,a]);const h=()=>{!s&&l==!1?F("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp!"):d?kt("\u0110\xE3 t\u1ED3n t\u1EA1i trong y\xEAu th\xEDch!"):(r(ge(u)),m(!0),K("Th\xEAm v\xE0o danh s\xE1ch y\xEAu th\xEDch th\xE0nh c\xF4ng!"))};return i("div",{className:"lg:flex md:flex-row items-center @screen md:justify-between flex flex-col",children:[e(k,{to:"/q/"+((f=t==null?void 0:t.category)==null?void 0:f._id),className:"text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e(B,{level:4,style:{color:"#fff"},className:"uppercase",children:t.name})}),e($,{style:{color:"#fff"},icon:e(ae,{}),disabled:d,className:"flex items-center justify-center",onClick:()=>h(),children:d?"\u0110\xE3 y\xEAu th\xEDch":"Th\xEAm v\xE0o y\xEAu th\xEDch"})]})},mn=({getOneProductDetail:t})=>i(I,{children:[e("div",{style:{color:"#fff",margin:"10px 0"},children:t.seri?t.trailer?"Trailer "+t.seri:"T\u1EADp "+t.seri:""}),e("div",{className:"des text-[#999]",children:i("p",{children:["Ng\xE0y \u0111\u0103ng:"," ",Yt(t.uploadDate).format("LTS DD-MM-YYYY")]})}),e("div",{style:{color:"#fff",margin:"10px 0"},className:"des",children:i("div",{className:"text-[#999] flex items-center gap-2 lg:justify-start @screen justify-center",children:[e(Jt,{}),t.view*36," L\u01B0\u1EE3t xem"]})}),i("div",{className:"p-3 mt-3 mb-3 text-white rounded  flex items-center lg:justify-start @screen justify-center",style:{background:"rgb(0 0 0 / 47%)"},children:["Copyright video:",e("div",{className:"text-slate-400",children:" "+t.copyright})]})]}),hn=p.div`
display:flex;
gap:0 10px;

@media(max-width:768px){
  display:block;
}
@media(min-width:1024px){
  display:flex;
}
`,gn=p.div`
`,xn=p.div`
font-size:13px;
@media(min-width: 1024px){
  font-size:15px;
}
`,yn=p.div`
padding:5px;
@media(min-width: 1024px){
  padding: 15px;
}
`,fn=p.div`
padding-bottom:62%;

@media(min-width: 768px){
  padding-bottom:52%;
}

@media(min-width: 1024px){
  padding-bottom:42%;
}
`,vn=p.div`
 
`,wn=t=>t.product.isLoading,bn=()=>{var N,A,z;const t=D(ln),a=D(on),r=D(wn),[s,n]=o.exports.useState(""),{id:l}=de(),{c:d}=Kt.parse(window.location.href.split("?")[1]),[m,u]=o.exports.useState("dailyMotion"),h=H(),[f,v]=o.exports.useState(""),w=Ee();return o.exports.useEffect(()=>{window.scrollTo(0,0)},[w]),o.exports.useEffect(()=>{h(ve(l)),h(bt(d));const X=De.AES.decrypt(a.dailyMotionServer?a.dailyMotionServer:"","24062003").toString(De.enc.Utf8);v(X),n(X)},[l,a.dailyMotionServer]),e(I,{children:e("div",{className:"flex justify-center mt-4",style:{gap:"10px"},children:e(yn,{className:"col-md-12",children:a&&(r?e(Ne,{size:"large",children:void 0}):i(I,{children:[e(fn,{className:"d-flex justify-content-center relative",children:a.dailyMotionServer!==""&&a.server2!==""?e("iframe",{allowFullScreen:!0,title:"vimeo-player",className:"absolute",src:s,style:{width:"100%",height:"100%"}}):a.trailer!==""?e("iframe",{title:"vimeo-player",className:"absolute",style:{width:"100%",height:"100%"},src:a.trailer+"?autoplay=1&mute=1"}):e(Xt,{icon:"Hiiiii!!",className:"absolute inset-0 text-white mt-5",subTitle:"Phim n\xE0y \u0111ang trong qu\xE1 tr\xECnh c\u1EADp nh\u1EADt video. Vui l\xF2ng quay l\u1EA1i sau."})}),i(vn,{className:"mt-4 rounded",children:[e(ie,{textColor:"#fff",orientation:"center",className:"text-white md:text-sm lg:text-base text-sm underline",children:"Ch\u1ECDn server:"}),i("div",{className:"md:text-sm lg:text-base text-sm flex items-center justify-center gap-4 px-4 py-3",children:[e($,{disabled:a.link==="",onClick:()=>{u("link1"),n(a.link)},className:`text-white cursor-pointer ${m==="link1"?"activeServer":""}`,children:"#S1"}),e($,{onClick:()=>{u("server2"),n(a.server2)},disabled:!a.server2,className:`${a.server2?" text-white cursor-pointer":""} ${m==="server2"?"activeServer":""}`,children:"#S2"}),e($,{onClick:()=>{u("dailyMotion"),n(f)},disabled:!a.dailyMotionServer,className:`${a.dailyMotionServer?"text-white cursor-pointer":""} ${m==="dailyMotion"?"activeServer":""}`,children:"#S3"})]})]}),i(hn,{className:"mt-2",children:[e(gn,{className:"w-3/12",children:e(q,{className:"md:block hidden",alt:"\u1EA2nh"+((N=a.category)==null?void 0:N.name),src:O(200,a&&(((A=a.category)==null?void 0:A.linkImg)||a.image))})}),i(xn,{className:"lg:w-9/12 md:w-full text-center lg:text-start",children:[e(pn,{item:a,id:l}),e(mn,{getOneProductDetail:a}),e(un,{seriProduct:t}),i("div",{className:"text-[#999] lg:text-md sm:text-sm mt-2 mb-2",children:[e(ie,{textColor:"#fff",orientation:"left",children:"M\xF4 t\u1EA3:"}),a&&((z=a.category)==null?void 0:z.des)]})]})]})]}))})})})},kn=()=>i(G.Fragment,{children:[e(o.exports.Suspense,{fallback:e(ur,{}),children:e(bn,{})}),e(Ae,{children:e(wt,{})})]}),En=({id:t})=>{const{data:a,isLoading:r}=T(L+"/category/getAllCategoryNotRequest/"+t),s=Ee();return o.exports.useEffect(()=>{window.scrollTo(0,0)},[s]),r?e(Ne,{size:void 0,children:void 0}):i(G.Fragment,{children:[e(B,{level:3,strong:!0,underline:!0,style:{color:"#fff"},className:"underline my-2",children:"Li\xEAn quan"}),e(vt,{type:"category",gutter:[16,16],child:a})]})},Cn=({data:t,isLoading:a})=>{var r;return a?e("div",{className:"seriLoading",children:"Loading...."}):e("div",{className:"bg-[#9b9b9b1f] h-[174px] overflow-y-scroll p-3 rounded-sm seriCategory",children:e(_,{gutter:[16,16],children:((r=t==null?void 0:t.products)==null?void 0:r.length)>0&&(t==null?void 0:t.products)?t.products.map((s,n)=>s.isApproved==!0?e(y,{lg:3,md:4,sm:5,xs:6,style:{textAlign:"center"},children:e(k,{to:"/d/"+s._id+`?c=${s.category}`,children:!s.dailyMotionServer&&s.trailer?e(Ge,{children:s.seri}):e(Ge,{className:"w-full text-white",variant:"ghost",size:"sm",children:s.seri})})},n):""):e(xt,{})})})},Nn=o.exports.memo(({id:t,averageRating:a,totalRatings:r})=>i("span",{className:"text-white flex items-center gap-2",children:[e(Zt,{className:"mt-2 mb-2",value:a,onChange:async n=>{const l={rating:n};try{await Rr(t,l)}catch(d){console.error("L\u1ED7i khi l\u01B0u \u0111\xE1nh gi\xE1:",d)}}}),r>0?e("div",{className:"relative pt-1",children:e("div",{className:"flex items-center justify-between",children:e("div",{children:i("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200",children:["Vip ",a.toFixed(2),"/",r*115," T\u1ED5ng s\u1ED1 l\u01B0\u1EE3t \u0111\xE1nh gi\xE1"]})})})}):""]})),An=()=>{const{id:t}=de(),a=H(),r=D(n=>n.category.details),s=D(n=>n.category.isLoading);return o.exports.useEffect(()=>{a(fe(t))},[t]),o.exports.useEffect(()=>{r!=null&&r.name&&(document.title=r.name)},[r]),e(I,{children:r&&e("div",{children:i("div",{style:{color:"#fff"},children:[i("div",{className:"md:flex lg:flex block gap-2 ",children:[e("div",{className:"mb-5 lg:w-3/12 md:w-3/12 md:h-full h-52 ",children:e("div",{className:"h-full w-full flex justify-center ",children:e(q,{className:"object-contain w-full h-full flex-grow",src:O(300,r.linkImg),alt:r.name})})}),i("div",{className:"lg:w-9/12 md:w-9/12",children:[e("div",{className:"category text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e(k,{to:"/q/"+r._id,children:e(B,{type:"secondary",level:3,className:"md:text-[18px] lg:text-[20px] sm:text-[15px]",style:{textTransform:"capitalize",color:"#fff"},children:r.name})})}),i("div",{className:"loai des text-[12px] md:text-[13px] lg:text-[14px]",children:[e("b",{children:r.anotherName}),e("br",{}),e(E,{style:{color:"#999"},children:"T\xE1c gi\u1EA3 :..."}),e("br",{}),e(E,{style:{color:"#999"},children:"Qu\u1ED1c gia : Chinese"}),e("div",{children:i(E,{style:{color:"#999"},children:["Th\u1EC3 lo\u1EA1i :"," ",e("span",{className:"p-1 bg-gray-500 rounded-sm",children:r.type})]})}),e("div",{children:i(E,{style:{color:"#999"},children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",r._id==t?r.sumSeri:""]})}),e("div",{children:e(E,{style:{color:"#999"},children:r.time+" "})}),e("div",{children:i(E,{style:{color:"#999"},children:["N\u0103m ph\xE1t h\xE0nh : ",r.year]})}),e("div",{}),e(se,{color:"#2db7f5",className:"my-2",children:r.isActive==0?"\u0110ang chi\u1EBFu":"Ho\xE0n th\xE0nh"}),i("div",{id:"toast-simple",className:"flex mb-2 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800",role:"alert",children:[e(rt,{}),e("div",{className:"ps-4 text-sm font-normal",children:"Vietsub l\xFAc 10h00 Th\u1EE9 4 h\xE0ng tu\u1EA7n"})]})]}),e(Cn,{isLoading:s,data:r}),e(Nn,{id:t,averageRating:r.averageRating,totalRatings:r.totalRatings})]})]}),i("div",{className:"text-[#999] lg:text-[15px] md:text[14px] text-[13px]",children:[e(ie,{textColor:"#fff",orientation:"left",children:"N\u1ED8I DUNG PHIM"}),r.des]})]})},r._id)})},Sn=()=>{const{id:t}=de();return i(I,{children:[e(An,{}),e(Ae,{children:e(En,{id:t})})]})};const Ye=o.exports.memo(({title:t,src:a,size:r,...s})=>e("div",{title:t,style:{cursor:"pointer"},children:e(Qt,{size:r,color:"default",src:a,...s})})),we=({isLoggedInState:t,style:a})=>{var d,m,u,h,f;const r=P(),s=Y(),n=H(),l=()=>{r?s("/cart/user"):F("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp!")};return e(G.Fragment,{children:r&&t?e(Pe,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e($e,{content:i(I,{children:[e(k,{to:"/profile",children:i(_,{style:{lineHeight:"0"},align:"middle",gutter:12,children:[e(y,{children:e(ea,{})}),e(y,{children:e(E,{level:6,className:"auth",children:"Your profile"})})]})}),i(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e(y,{children:e(ae,{})}),e(y,{children:e(E,{style:{cursor:"pointer"},onClick:l,className:"auth",children:"Saved"})})]}),r.user&&((d=r==null?void 0:r.user)==null?void 0:d.role)>=1&&e(k,{to:"/dashboard",children:i(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e(y,{children:e(re,{})}),e(y,{children:e(E,{className:"auth",children:"Admin"})})]})}),i(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e(y,{children:e(nt,{})}),e(y,{children:e(E,{style:{cursor:"pointer"},onClick:()=>hr(n,s),children:"Logout"})})]})]}),title:e(B,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:(m=r==null?void 0:r.user)==null?void 0:m.username}),placement:"bottomLeft",trigger:"click",children:e(Ye,{className:"text-center",title:(u=r==null?void 0:r.user)==null?void 0:u.name,src:O(50,r.user&&((h=r==null?void 0:r.user)==null?void 0:h.image)),size:"sm"})})}):e(Pe,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e($e,{content:e(k,{to:"/signin",children:i(_,{align:"middle",gutter:[12,12],children:[e(y,{children:e(ta,{})}),e(y,{children:e(E,{level:6,className:"auth",children:"Signin"})})]})}),title:e(B,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:"Hi"}),placement:"bottomLeft",trigger:"click",children:e(Ye,{title:(f=r==null?void 0:r.user)==null?void 0:f.name,src:void 0,style:a,size:40,icon:e(re,{})})})})})},{Content:_n,Sider:In,Header:Tn,Footer:Ln}=pe,Dn=()=>{var n;const t=ei.map((l,d)=>{var u;const m=String(d+1);return{key:`${m+1}`,icon:l.icon,label:e(k,{to:l.path,children:l.name}),children:(u=l==null?void 0:l.children)==null?void 0:u.map((h,f)=>{const v=f+1;return{key:`subitem-${m}-${v}`,icon:h.icon,label:e(k,{to:h.path,children:h.name})}})}}),{isLoggedInState:a}=(n=o.exports.useContext(R))!=null?n:{},[r,s]=o.exports.useState(!1);return i(pe,{style:{minHeight:"100vh"},children:[i(In,{trigger:null,collapsible:!0,collapsed:r,className:"overflow-y-auto ",style:{height:"100%",position:"fixed"},children:[e("div",{className:"p-4 bg-[#fff]",children:e("div",{className:"h-8 w-full bg-[#ddd] rounded"})}),e(me,{style:{height:"100%"},theme:"light",mode:"inline",defaultSelectedKeys:["1"],items:t})]}),i(pe,{style:{marginLeft:r?80:200},children:[e(Tn,{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",padding:0},children:i(_,{align:"middle",justify:"space-between",children:[e(y,{children:e($,{type:"text",icon:r?e(st,{}):e(it,{}),onClick:()=>s(!r),style:{fontSize:"16px",width:64,height:64},children:void 0})}),e(y,{children:e(k,{to:"/",children:"Home Page"})}),e(y,{style:{textAlign:"center"},span:1,children:e(we,{isLoggedInState:a,style:void 0})})]})}),e(_n,{style:{padding:"24px",minHeight:"calc(100vh - 64px)",overflow:"auto"},children:e(ot,{})}),e(Ln,{children:"\xA9 2023 copyright | PH ANG"})]})]})},Pn=t=>{const a=P();try{return a?a.user.role==0?e(Re,{to:"/"}):t.children:e(Re,{to:"/"})}catch{return e("div",{className:"text-light container text-center",children:e(k,{to:"/signin",children:"\u0110\u0103ng nh\u1EADp"})})}},$n=p.div`
color:#999;
font-weight:500;
`,Rn=p.div`
color: rgb(255, 214, 99);
font-weight:500;
`,zn=p.div`
display: flex;
align-items: center;
justify-content: center;
gap:0 5px;
 
&>a{
    color: rgb(255, 214, 99) !important;
    font-weight:500;
}
`;p.div`

`;const Bn=o.exports.memo(({data:t,icons:a,id:r,background:s,...n})=>e(me,{className:"h-full",style:{background:s},children:t&&t.map((l,d)=>o.exports.createElement(me.Item,{...n,icon:l.icon?l.icon:a[d],key:d},r==!0?e(ke,{to:l.path=="/"?l.path:l.path+`/${l._id}`,children:l.name},d):e(k,{to:l.path,children:l.name})))})),On=p.div`
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
`;const Fn=p.div`
  @media (max-width: 768px) {
    display: none;
  }
`,Je=p.input`
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
`,jn=p.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`,Vn=p.div`
  font-size: 11px;
  font-weight: 400;
`,Mn=p.div`
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
`,Un=p.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
  justify-content: ${t=>t.justify};
`,Hn=p.div``,qn=p.div`
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
`,Wn=p.div`
  color: #d9d9d9;
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`,Gn=p.div`
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
`,Yn=p.div`
  display: block;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`,be=({data:t})=>t.length>0?e("div",{className:"absolute top-[50px] left-0 w-full flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:e("div",{className:"p-4 flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700",children:t.map((a,r)=>e(k,{to:`/q/${a._id}`,children:e("div",{className:"flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:a.name})},a._id))})}):e(I,{}),Jn=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"})),Kn=[e(et,{}),e(sa,{}),e(nt,{}),e(lt,{})],Xn=()=>{var Le;const{Auth:t,isLoggedInState:a,state:r,handleClick:s}=(Le=o.exports.useContext(R))!=null?Le:{},[n,l]=o.exports.useState(!1),[d,m]=o.exports.useState(0),[u,h]=o.exports.useState("20px 10px"),[f,v]=o.exports.useState(!1),w="left",[N,A]=o.exports.useState(""),[z,X]=o.exports.useState([]),Nt=()=>{v(!0)},At=()=>{v(!1)};window.addEventListener("scroll",()=>{const S=window.pageYOffset;l(d>S),m(S),window.scrollY>10?h("10px 5px"):h("20px 10px")});const St=Y(),Se=()=>{t?St("/cart/user"):F("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp!")},_e=aa.exports.debounce(async S=>{const{data:ce}=await $r(S);X(ce)},500),Ie=async S=>{A(S),_e(S)};o.exports.useEffect(()=>()=>{_e.cancel()},[N]),o.exports.useEffect(()=>{l(!0)},[]);const Te=a?Zs:Xs;return i(G.Fragment,{children:[i(_,{align:"middle",justify:"space-between",className:`${r?"w-11/12":"w-10/12"} lg:flex hidden z-[100] fixed right-0`,style:{top:n?"0":"-25%",padding:u,backgroundColor:"#00000038"},children:[e(y,{span:1,children:e(Yn,{className:"text-[21px] md:text-[23px] lg:text-[25px]",onClick:s,children:r?e(it,{}):e(st,{})})}),i(y,{span:6,className:"relative",children:[e(Je,{style:{boxShadow:"#333 0px 2px 10px"},onChange:S=>Ie(S.target.value),placeholder:"Search..."}),e(be,{data:z})]}),e(y,{span:16,children:i(_,{justify:"center",align:"middle",children:[e(_,{children:Te.map((S,ce)=>e(y,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:e(k,{style:{color:"#fff",textDecoration:"none",margin:"0 20px"},to:S.path,children:S.name})},ce))}),e(y,{children:i(zn,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:[e($n,{children:"Li\xEAn h\u1EC7 qc tele: "}),i("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:[e(Rn,{}),"@PH ANG"]})]})}),e(y,{className:"ml-5 text-[15px] lg:text-[17px] md:text[16px]",style:{marginLeft:"50px"},onClick:Se,children:e(ae,{className:"__ text-yellow-500"})})]})}),e(y,{span:1,className:"text-end",children:e(we,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",textAlign:"center"}})})]}),i("div",{className:"navbar_mb w-10/12 absolute right-0 z-10",children:[i(_,{align:"middle",justify:"space-between",className:"navbar bgNav mb",children:[e(y,{children:e(ra,{className:"text-white",onClick:Nt})}),e(y,{children:e("div",{className:"ml-5 relative",onClick:Se,children:e(ae,{className:"__ text-yellow-500"})})}),i(y,{span:16,className:"relative",children:[e(Je,{onChange:S=>Ie(S.target.value),placeholder:"Search..."}),e(be,{data:z})]}),e(y,{children:e(we,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",lineHeight:"30px"}})})]}),e(na,{width:200,title:"Drawer",placement:"left",closable:!1,onClose:At,open:f,closeIcon:!0,className:"relative z-10",children:e(Bn,{icons:Kn,id:!1,background:"#fff",data:Te})},w)]})]})},Zn=()=>e(I,{children:e(G.Fragment,{children:i("div",{className:"ft text-white",children:[e("link",{rel:"stylesheet",integrity:"sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=",crossOrigin:"anonymous"}),e("footer",{className:"footer",children:e("div",{className:"footer-bottom footer-border-top light py-3",children:e("div",{className:"text-center",children:i("p",{className:"m-0",children:["\xA9 2023 copyright"," ",e("a",{href:"#",className:"text-reset",children:"| PH ANG"})]})})})})]})})}),Qn=()=>e("div",{className:"md:mt-[50px] lg:mt-[50px] lg:flex hidden justify-center text-white ",children:e("div",{className:"w-full",children:e("div",{className:"card p-3 ",style:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:i("div",{className:"card-body",children:[i("div",{children:[e("div",{className:"d-flex justify-center",children:e("img",{src:O(80,"https://res.cloudinary.com/daz3lejjo/image/upload/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),alt:"\u0110\u1EA5u ph\xE1 th\u01B0\u01A1ng khung ph\u1EA7n 5",className:"avatar-md rounded-circle img-thumbnail"})}),i("div",{className:"flex-1",children:[e("h5",{className:"font-size-16 mb-1 mt-1",children:e(k,{to:"#",className:"text-light",children:"Admin Contact"})}),e("span",{className:"badge badge-soft-success mb-0",children:"Web Developer"})]})]}),i("div",{className:"mt-3 pt-1 iconContact",children:[i("p",{className:"mb-0",children:[e(ia,{}),e("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:"Facebook"})]}),i("p",{className:"mb-0 mt-2",children:[e(oa,{}),e("a",{href:"https://www.tiktok.com/@tieu_loli",children:"Tiktok"})]})]})]})})})}),es=()=>{const{seri:t,loadingSeri:a}=o.exports.useContext(J)||{},{state:r}=o.exports.useContext(R)||{},s=r?"w-1/12":"w-2/12";return e(On,{className:s,children:i(Mn,{className:s,children:[e(Un,{justify:r?"center":"start",children:i(Fn,{className:r?"hiddenn":"block text-white",children:[e(k,{to:"/",children:e(jn,{children:"Hhtrungquoc.tv"})}),e(k,{to:"/",children:e(Vn,{children:"tromphim.netify.app"})})]})}),e("div",{className:"mt-[50px]",children:a?e(Ne,{size:"large",children:void 0}):e(Hn,{className:"sideBarActive",children:t&&t.map((n,l)=>e(ke,{title:n.name,to:n.path=="/"?n.path:n.path+`/${n._id}`,children:i(qn,{state:r,children:[e(Wn,{children:fr[l]}),e(Gn,{className:r?"hiddenn":"block",children:n.name})]})},l))})}),e(Qn,{})]})})},ts=p.div`
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
`,as=({children:t,...a})=>{const{background:r}=o.exports.useContext(J)||{};return e(ts,{background:r&&r.data.url,...a,children:t})},rs=()=>{const{state:t}=o.exports.useContext(R)||{};return i(as,{className:"text-start",children:[e("div",{children:e(Xn,{})}),i("div",{className:"containers flex",children:[e("div",{className:t?"w-1/12":"w-2/12",children:e(es,{})}),e("div",{className:`${t?"w-11/12":"w-10/12"} p-2`,children:e(ot,{})})]}),e("div",{children:e(Zn,{})})]})},g=({children:t})=>e(o.exports.Suspense,{fallback:e(gt,{}),children:t}),Ke=o.exports.memo(({columns:t,dataSource:a,...r})=>e(dt,{columns:t,dataSource:a,...r})),ns=o.exports.memo(({name:t,label:a,control:r,rules:s,...n})=>i("div",{className:"mb-3",children:[e(E,{htmlFor:t,children:a}),e(la,{name:t,control:r,rules:s,defaultValue:"",render:({field:l})=>e(da,{placeholder:a,...l,...n})})]})),ss=o.exports.memo(({title:t,cancelText:a,okText:r,onConfirm:s,children:n,...l})=>e(ca,{title:t,onCancel:()=>{F("H\u1EE7y")},onConfirm:s,okText:r,cancelText:a,...l,children:n})),is=()=>{const{weeks:t}=o.exports.useContext(J),{handleSubmit:a,control:r}=ct(),s=async(u,h)=>{const f={categoryId:h};try{(await Nr(u,f)).data&&K("Delete Success")}catch{F("Delete Failure")}},n=async u=>{await kr(u)},l=async u=>{await Er(u)},d=u=>{var v;const h=[{title:"ID",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"operation",render:(w,N)=>e(I,{children:e(ss,{title:"Delete the category",onConfirm:()=>s(u.key,N._id),okText:"Yes",cancelText:"No",children:e($,{type:"text",shape:"circle",className:"ml-2",children:e(ua,{})})})})}],f=((v=t.find(w=>w._id===u.key))==null?void 0:v.category)||[];return e(Ke,{columns:h,dataSource:f,pagination:!1})},m=t&&t.map((u,h)=>({key:u._id,name:u.name,action:i(I,{children:[e(k,{to:`/dashboard/week/edit/${u._id}`,children:e($,{type:"primary",children:"Edit"})}),e($,{onClick:()=>l(u._id),className:"ml-1",children:"Delete"})]})}));return i(I,{children:[e("form",{onSubmit:a(n),children:i(_,{gutter:4,align:"middle",justify:"center",children:[e(y,{span:22,children:e(ns,{name:"name",label:"Theo tu\u1EA7n",control:r,rules:void 0})}),e(y,{span:2,children:e($,{htmlType:"submit",className:"mt-3",type:"primary",children:"Th\xEAm"})})]})}),e(Ke,{columns:vr,dataSource:m,expandable:{expandedRowRender:d,defaultExpandedRowKeys:["0"]}})]})},os=()=>i("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]",children:[e("h1",{className:"text-9xl font-extrabold text-white tracking-widest",children:"404"}),e("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute",children:"Page Not Found"}),e("button",{className:"mt-5",children:i("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring",children:[e("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),e("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current",children:e(k,{to:"/",children:"Go Home"})})]})})]}),ls=p.button`
background:linear-gradient(to right, #652EEE, #040F75)
`,ds=p.input`
width: 100%;
padding: 10px;
border-radius: 10px;
background: transparent;
border: 1px solid #999;
font-size: 12px;
outline:none;
color: #fff;
`,cs=p.form``,us=p.div`
padding: 0 20px;
@media (min-width: 768px){
  padding: 0 40px;
}
@media (min-width: 1024ox) {
  padding: 0 60px;
}
`,ps=p.div`
color: #fff;
margin-top:20px;
font-size:25px;
@media (min-width: 768px){
  margin-top:30px;
}
@media (min-width: 1024ox) {
  margin-top:40px;
`,ms=p.div`
margin: 15px 0;
color: #999;
font-size:13px;
`,hs=p.div`
cursor: pointer;
`,gs=p.div`
padding: 15px 5px;
border: 1px solid #fff;
font-style: italic;
`,xs=p.div`
border-bottom: 1px dashed  #fff;
`,ys=p.div`

`,Et=o.exports.memo(({onSubmit:t,formTitle:a,formDescription:r,submitButtonText:s,formIntro:n,formHeader:l,checkedAccount:d,handleMessage:m,redirect:u,array:h,schemaPage:f})=>{const{register:v,handleSubmit:w,formState:{errors:N}}=ct({resolver:pa(f)});return e("div",{className:"h-screen relative z-0",children:i(us,{className:"g-6 flex flex-wrap justify-center w-full items-center absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4",style:{transform:"translate(-50%,-50%)"},children:[i("div",{className:"w-8/12 items-center text-white hidden lg:block md:hidden",children:[e(ys,{className:"text-[50px] ",children:l}),i("div",{className:"flex items-center",children:[e(gs,{className:"w-2/12",children:n}),e(xs,{className:"w-10/12"})]})]}),i("div",{className:"md:w-8/12 lg:w-4/12 w-full lg:p-5 md:p-4 p-3",style:{background:"rgba(248, 248, 248, 0.04)",borderRadius:" 5px"},children:[i("div",{children:[e(ps,{children:a}),e(ms,{children:r})]}),i(cs,{onSubmit:w(t),children:[h&&h.map((A,z)=>e("div",{className:"relative lg:mb-6 md:mb-4 mb-2","data-te-input-wrapper-init":!0,children:i("div",{children:[e(ds,{disabled:A.disable,style:{background:`${A.disable?"#99979742":""}`},type:A.type,...v(`${A.field}`),placeholder:A.field,className:"placeholder:capitalize"}),N&&N[A.field]&&e("div",{className:"text-sm text-pink-600 mt-1",children:N[A.field].message})]})},z)),e("div",{className:"lg:mb-6 md:mb-5 mb-4",children:e(Qe,{to:"/forgot-password",children:i("div",{className:"text-center text-white text-sm font-medium text-primary-600 hover:underline text-primary-500",children:["Forgot password?"," "]})})}),e(ls,{type:"submit",className:"w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600",children:s}),e("div",{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:i("p",{className:"mx-4 mb-0 text-center text-white text-[12px]",children:[" ","OR"]})}),e(hs,{className:"flex justify-center",onClick:m,children:e(q,{style:{width:"30px",height:"30px"},src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:""})}),e("div",{className:"lg:mb-6 md:mb-4 mb-2 text-center lg:mt-5 md:mt-3 mt-2 text-slate-400 ",children:e(k,{to:u,className:"text-sm text-primary-600 hover:underline text-primary-500",children:d})})]})]})]})})}),fs=[{type:"email",field:"email",disable:!1}],vs=()=>{const t=Y(),a=ut().shape({email:he().required().email()});return e(Et,{onSubmit:async n=>{const l=await Ka(n);l.data.success?(K(l.data.message),t("/signin")):F(l.data.message)},formTitle:"Forgot Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:()=>{U.success("\u0110ang c\u1EADp nh\u1EADt!")},redirect:"/forgot-password",array:fs,schemaPage:a})},ws=[{type:"password",field:"password",disable:!1},{type:"password",field:"repassword",disable:!1}],bs=()=>{const t=Y(),{id:a,token:r}=de(),s=ut().shape({password:he().required().min(6,"Password t\u1ED1i thi\u1EC3u 6 k\xED t\u1EF1"),repassword:he().required().oneOf([ma("password"),null],"Passwords must match")});return e(Et,{onSubmit:async d=>{const m=await Xa(a,r,d);m.data.success?(K(m.data.message),t("/signin")):F(m.data.message)},formTitle:"Reset Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:()=>{U.success("\u0110ang c\u1EADp nh\u1EADt!")},redirect:"/reset-password",array:ws,schemaPage:s})},ks=()=>{const t=["#eb2f96","#52c41a","#eba12f"],{data:{data:a}}=T(L+"/category/latest"),r=[{title:"Name",dataIndex:"name",key:"name",render:l=>e("p",{children:l})},{title:"Action",key:"action",render:(l,d,m)=>e($,{type:"text",shape:"circle",className:"ml-2",onClick:()=>s(d.key),children:e(Ce,{type:"success",style:{color:t[m]}})})}],s=async l=>{const d={id:l},{data:m}=await zr(d);m.success===!0&&(K("Success"),ha(L+"/category/latest"))},n=a&&a.map((l,d)=>({key:l._id,name:l.name}));return e(dt,{columns:r,dataSource:n})},Es=()=>{const t=D(dn),{data:a}=T(L+"/most-watched-episodes"),{data:r}=T(L+"/rating/stats"),s={data:a.data,xField:"seri",yField:"view",point:{shapeField:"square",sizeField:4},interaction:{tooltip:{marker:!1}},style:{lineWidth:2}};return i(I,{children:[i("div",{className:"flex justify-around gap-2",children:[e(Z,{className:"w-full",children:e(Q,{title:"Active Users",prefix:e(re,{}),value:t.length})}),e(Z,{bordered:!0,className:"w-full",children:e(Q,{title:"Comment",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:e(Ce,{}),suffix:"%"})}),e(Z,{bordered:!1,className:"w-full",children:e(Q,{title:"View",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:e(ga,{}),suffix:"%"})}),e(Z,{className:"w-full",children:e(Q,{title:"Rating Video",prefix:e(xa,{}),value:r.totalRatings})})]}),e("div",{className:"flex justify-between gap-2",children:e(ya,{className:"w-5/12",...s})})]})},Cs=o.exports.lazy(()=>b(()=>import("./index.4b454b09.js"),["assets/index.4b454b09.js","assets/index.3b091d2d.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Ns=o.exports.lazy(()=>b(()=>import("./index.b2711018.js"),["assets/index.b2711018.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css","assets/index.3b091d2d.js","assets/index.586fcf74.js"])),As=o.exports.lazy(()=>b(()=>Promise.resolve().then(()=>Jn),void 0)),Ss=o.exports.lazy(()=>b(()=>import("./Profile.fbd3ece6.js"),["assets/Profile.fbd3ece6.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),_s=o.exports.lazy(()=>b(()=>import("./Sign-in.9994c2ff.js"),["assets/Sign-in.9994c2ff.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Is=o.exports.lazy(()=>b(()=>import("./Sign-up.5717d48c.js"),["assets/Sign-up.5717d48c.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Ts=o.exports.lazy(()=>b(()=>import("./list.c6e71479.js"),["assets/list.c6e71479.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Ls=o.exports.lazy(()=>b(()=>import("./index.71905401.js"),["assets/index.71905401.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Ds=o.exports.lazy(()=>b(()=>import("./add.9105422e.js"),["assets/add.9105422e.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Ps=o.exports.lazy(()=>b(()=>import("./edit.25bcd51e.js"),["assets/edit.25bcd51e.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),$s=o.exports.lazy(()=>b(()=>import("./admin.a6ced0d6.js"),["assets/admin.a6ced0d6.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Rs=o.exports.lazy(()=>b(()=>import("./add.7dfab428.js"),["assets/add.7dfab428.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css","assets/index.a5b058cd.js","assets/index.57f2f6cd.js"])),zs=o.exports.lazy(()=>b(()=>import("./edit.bc2992e0.js"),["assets/edit.bc2992e0.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css","assets/index.a5b058cd.js","assets/index.57f2f6cd.js"])),Bs=o.exports.lazy(()=>b(()=>import("./adds.2e1e7062.js"),["assets/adds.2e1e7062.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Os=o.exports.lazy(()=>b(()=>import("./CreatingProducts.4647ddda.js"),["assets/CreatingProducts.4647ddda.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css","assets/index.57f2f6cd.js"])),Fs=o.exports.lazy(()=>b(()=>import("./index.4153378d.js"),["assets/index.4153378d.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css","assets/type.c54a4577.js","assets/index.a5b058cd.js","assets/index.57f2f6cd.js"])),js=o.exports.lazy(()=>b(()=>import("./edit.736f20b3.js"),["assets/edit.736f20b3.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css","assets/index.57f2f6cd.js","assets/index.a5b058cd.js"])),Vs=o.exports.lazy(()=>b(()=>import("./index.c87c82d5.js"),["assets/index.c87c82d5.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Ms=o.exports.lazy(()=>b(()=>import("./edit.abc3d6ec.js"),["assets/edit.abc3d6ec.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Us=o.exports.lazy(()=>b(()=>import("./index.07d26ab1.js"),["assets/index.07d26ab1.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Hs=o.exports.lazy(()=>b(()=>import("./index.28dfb97b.js"),["assets/index.28dfb97b.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),qs=o.exports.lazy(()=>b(()=>import("./index.4a54c89e.js"),["assets/index.4a54c89e.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Ws=o.exports.lazy(()=>b(()=>import("./index.eb4047f8.js"),["assets/index.eb4047f8.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css","assets/index.586fcf74.js","assets/index.3b091d2d.js"])),Gs=o.exports.lazy(()=>b(()=>import("./index.badb84df.js"),["assets/index.badb84df.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css","assets/type.c54a4577.js"])),Ys=o.exports.lazy(()=>b(()=>import("./CatemainProduct.f509c301.js"),["assets/CatemainProduct.f509c301.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Js=o.exports.lazy(()=>b(()=>import("./index.7be3ee2a.js"),["assets/index.7be3ee2a.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Ks=o.exports.lazy(()=>b(()=>import("./edit.269fa226.js"),["assets/edit.269fa226.js","assets/vendor.47cf65fa.js","assets/vendor.2c4dbeea.css"])),Xs=[{path:"/",name:"Trang ch\u1EE7",title:"Trang ch\u1EE7"},{path:"/signin",name:"\u0110\u0103ng nh\u1EADp",title:"\u0110\u0103ng nh\u1EADp"},{path:"/signup",name:"\u0110\u0103ng k\xED",title:"\u0110\u0103ng k\xED"},{path:"/complete",name:"Ho\xE0n Th\xE0nh",title:"Ho\xE0n Th\xE0nh"}],Zs=[{path:"/",name:"Trang ch\u1EE7"},{path:"/profile",name:"H\u1ED3 s\u01A1",title:"H\u1ED3 s\u01A1"},{path:"/complete",name:"Ho\xE0n Th\xE0nh",title:"Ho\xE0n Th\xE0nh"}],Qs=[{path:"/",element:e(rs,{}),children:[{path:"/",element:e(Hr,{}),index:!0},{path:"d/:id",element:e(g,{children:e(kn,{})})},{path:"q/:id",element:e(g,{children:e(Sn,{})})},{path:"search/category",element:e(g,{children:e(As,{})})},{path:"cart/user",element:e(g,{children:e(Hs,{})})},{path:"movie-content/:id",element:e(g,{children:e(Ns,{})})},{path:"types/h/:id",element:e(g,{children:e(Cs,{})})},{path:"loadmore",element:e(g,{children:e(Ws,{})})},{path:"signup",element:e(g,{children:e(Is,{})})},{path:"signin",element:e(g,{children:e(_s,{})})},{path:"forgot-password",element:e(g,{children:e(vs,{})})},{path:"reset-password/:id/:token",element:e(g,{children:e(bs,{})})},{path:"profile",element:e(g,{children:e(Ss,{})})}]},{path:"dashboard",element:e(Pn,{children:e(Dn,{})}),children:[{path:"",element:e(g,{children:e(Es,{})}),index:!0},{path:"products",element:e(g,{children:e(Ts,{})})},{path:"users",element:e(g,{children:e(Ls,{})})},{path:"adminUer",element:e(g,{children:e($s,{})})},{path:"users/:id/edit",element:e(g,{children:e(Ps,{})})},{path:"user/add",element:e(g,{children:e(Ds,{})})},{path:"user/creatingUser",element:e(g,{children:e(Bs,{})})},{path:"product/add",element:e(g,{children:e(Rs,{})})},{path:"product/edit/:id",element:e(g,{children:e(zs,{})})},{path:"product/creacting",element:e(g,{children:e(Os,{})})},{path:"category",element:e(g,{children:e(Fs,{})})},{path:"category/edit/:id",element:e(g,{children:e(js,{})})},{path:"category/latest",element:e(g,{children:e(ks,{})})},{path:"trailing",element:e(g,{children:e(Vs,{})})},{path:"trailerUrl/:id",element:e(g,{children:e(Ms,{})})},{path:"comments",element:e(g,{children:e(Us,{})})},{path:"cart",element:e(g,{children:e(qs,{})})},{path:"types",element:e(g,{children:e(Gs,{})})},{path:"types/CateMainProduct/:id",element:e(g,{children:e(Ys,{})})},{path:"background",element:e(g,{children:e(Js,{})})},{path:"background/edit/:id",element:e(g,{children:e(Ks,{})})},{path:"weeks",element:e(g,{children:e(is,{})})}]},{path:"/*",element:e(os,{})}],ei=[{path:"/dashboard",name:"Admin",icon:e(fa,{})},{path:"/dashboard/products",name:"Products",icon:e(va,{})},{name:"User",icon:e(ze,{}),children:[{path:"/dashboard/users",name:"Users",icon:e(re,{})},{path:"/dashboard/adminUer",name:"Admin",icon:e(Be,{})}]},{name:"Category",icon:e(ze,{}),children:[{path:"/dashboard/category",name:"Category",icon:e(wa,{})},{path:"/dashboard/category/latest",name:"Latest",icon:e(Ce,{})}]},{name:"Themes",icon:e(lt,{}),children:[{path:"/dashboard/trailing",name:"Trailer",icon:e(Be,{})},{path:"/dashboard/background",name:"Background",icon:e(ba,{})}]},{name:"Big Category",icon:e(tt,{}),children:[{path:"/dashboard/types",name:"Types",icon:e(ka,{})}]},{path:"/dashboard/comments",name:"Comments",icon:e(Ea,{})},{path:"/dashboard/cart",name:"Cart",icon:e(Ca,{})},{path:"/dashboard/weeks",icon:e(rt,{}),name:"Week"}],ti=Na`
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

`,Xe=t=>{if(!t)return!0;try{const a=Aa(t),r=Date.now()/1e3;return a.exp<r}catch(a){return console.error("Error decoding token:",a),!0}};function ai(){const t=Ee(),a="G-0EEY3R7F0S",r=Sa(Qs),s=Y(),n=P();return o.exports.useEffect(()=>{Oe.initialize(a),Oe.send({hitType:"pageview",page:t.pathname,title:"User Active"}),(async()=>{if(n){const l=n.token,d=n.refreshToken;if(Xe(d))kt("Token expires-relogin"),localStorage.clear(),s("/signin");else if(Xe(l)){const m={refreshToken:n.refreshToken},{data:u}=await Za(m);localStorage.setItem("token",JSON.stringify(u))}}})(),alert(" Xin l\u1ED7i, server phim hi\u1EC7n \u0111ang qu\xE1 t\u1EA3i do l\u01B0\u1EE3ng truy c\u1EADp l\u1EDBn. Vui l\xF2ng ch\u1EDD \u0111\u1EE3i trong 1-2 ph\xFAt \u0111\u1EC3 ti\u1EBFp t\u1EE5c xem. Ch\xFAng t\xF4i \u0111ang n\u1ED7 l\u1EF1c \u0111\u1EC3 c\u1EA3i thi\u1EC7n t\xECnh h\xECnh v\xE0 xin th\xE0nh th\u1EADt xin l\u1ED7i v\xEC s\u1EF1 b\u1EA5t ti\u1EC7n n\xE0y.Tr\xE2n tr\u1ECDng!")},[]),i(I,{children:[r,e(ti,{}),e(_a,{}),e(Ia.BackTop,{visibilityHeight:200})]})}const ri={value:{product:[],length:0},isLoading:!1,getOneProduct:{},getAllProductByCategory:[],status:!1},ni=M({name:"product",initialState:ri,reducers:{},extraReducers:t=>{t.addCase(We.pending,(a,r)=>{a.isLoading=!0}).addCase(We.fulfilled,(a,r)=>{a.isLoading=!1,a.value=r.payload}),t.addCase(en.fulfilled,(a,r)=>{a.value.product=a.value.product.filter(s=>s._id!==r.payload.data._id)}),t.addCase(tn.fulfilled,(a,r)=>{a.value.product.push(r.payload)}),t.addCase(an.fulfilled,(a,r)=>{a.value.product.push(r.payload)}),t.addCase(rn.fulfilled,(a,r)=>{a.value.product=[...a.value.product,r.payload]}),t.addCase(nn.fulfilled,(a,r)=>{a.value.product=r.payload}),t.addCase(sn.fulfilled,(a,r)=>{a.value.product=r.payload}),t.addCase(ve.pending,(a,r)=>{a.isLoading=!0}).addCase(ve.fulfilled,(a,r)=>{a.isLoading=!1,a.getOneProduct=r.payload}),t.addCase(bt.fulfilled,(a,r)=>{a.getAllProductByCategory=r.payload})}}),si=ni.reducer,ii={category:{data:[],length:0},isLoading:!1,isError:!1,categoryNotReqId:[],details:{}},oi=M({name:"category",initialState:ii,reducers:{},extraReducers:t=>{t.addCase(te.fulfilled,(a,r)=>{a.isLoading=!1,a.category=r.payload}).addCase(te.pending,(a,r)=>{a.isLoading=!0}).addCase(te.rejected,(a,r)=>{a.isError=!0}),t.addCase(qe.fulfilled,(a,r)=>{a.isLoading=!1,a.categoryNotReqId=r.payload}).addCase(qe.pending,(a,r)=>{a.isLoading=!0}),t.addCase(Br.fulfilled,(a,r)=>{a.category.data=a.category.data.concat(r.payload)}),t.addCase(Or.fulfilled,(a,r)=>{a.category.data=a.category.data.filter(s=>s._id!==r.payload._id)}),t.addCase(Fr.fulfilled,(a,r)=>{a.category.data.push(r.payload)}),t.addCase(fe.fulfilled,(a,r)=>{a.details=r.payload,a.isLoading=!1}).addCase(fe.pending,(a,r)=>{a.isLoading=!0})}}),li=oi.reducer,Wi=async()=>await c.get("/trailer"),oe=P(),di=async t=>await c.put(`/trailer/${t.get("_id")}/${oe.user._id}`,t,{headers:{Authorization:`Bearer ${oe.token}`}}),Gi=async t=>await c.post(`/background/${t.get("_id")}/${oe.user._id}`,t,{headers:{Authorization:`Bearer ${oe.token}`}}),ci=x("trailer/Trailing",async t=>{const{data:a}=await di(t);return a}),ui=M({name:"post",initialState:{value:[],trailerValues:[]},reducers:{},extraReducers:t=>{t.addCase(ci.fulfilled,(a,r)=>{a.trailerValues.push(r.payload)})}}),pi=ui.reducer,le=P(),mi=async()=>await c.get("/comments"),hi=async(t,a)=>await c.post(`/comment/${t}/${le.user._id}`,a,{headers:{Authorization:`Bearer ${le.token}`}}),gi=async t=>await c.post(`/comment/${le.user._id}`,t,{headers:{Authorization:`Bearer ${le.token}`}}),xi=x("getAllCommentSlice",async()=>{const{data:t}=await mi();return t}),yi=x("addCommentSlice",async t=>{const{data:a}=await hi(t.product,t);return a}),fi=x("deleteComment",async t=>{const{data:a}=await gi(t);return a}),vi=M({name:"comment",initialState:{value:[]},reducers:{},extraReducers:t=>{t.addCase(xi.fulfilled,(a,r)=>{a.value=r.payload}),t.addCase(yi.fulfilled,(a,r)=>{a.value.push(r.payload)}),t.addCase(fi.fulfilled,(a,r)=>{a.value=a.value.filter(s=>s._id!==r.payload._id)})}}),wi=vi.reducer,bi=M({name:"cart",initialState:{value:[],isLoading:!1,code:null},reducers:{},extraReducers:t=>{t.addCase(je.fulfilled,(a,r)=>{a.isLoading=!1,a.value=r.payload}).addCase(je.pending,(a,r)=>{a.isLoading=!0}),t.addCase(ge.pending,(a,r)=>{a.isLoading=!0}).addCase(ge.fulfilled,(a,r)=>{Array.isArray(a.value)||(a.value=[]),a.isLoading=!1,a.value.push(r.payload.cart)})}}),ki=bi.reducer,Ei={key:"root",storage:$a,whitelist:[""],expire:"3600000"},Ci=Ta({product:si,user:lr,category:li,trailer:pi,comment:wi,cart:ki}),Ni=La(Ei,Ci),Ct=Da({reducer:Ni,middleware:t=>t({serializableCheck:!1})}),Ai=Pa(Ct);Ra.createRoot(document.getElementById("root")).render(e(za,{store:Ct,children:e(Ba,{persistor:Ai,children:e(Ar,{children:e(dr,{children:e(Oa,{children:e(ai,{})})})})})}));export{ji as $,Et as A,Ui as B,en as C,Vi as D,Mi as E,dn as F,rr as G,Bi as H,Me as I,ns as J,xe as K,ur as L,pr as M,xt as N,sr as O,qi as P,nr as Q,zi as R,Ne as S,tn as T,E as U,B as V,q as W,O as X,ie as Y,ve as Z,an as _,vt as a,ir as a0,rn as a1,Hi as a2,te as a3,Di as a4,Br as a5,Or as a6,P as a7,c as a8,fe as a9,Fr as aa,Ir as ab,$i as ac,Wi as ad,ci as ae,xi as af,Pi as ag,fi as ah,ar as ai,yt as aj,je as ak,Ii as al,Li as am,Fi as an,Ri as ao,Ti as ap,Gi as aq,L as b,k as c,_i as d,H as e,R as f,D as g,hr as h,Ye as i,He as j,K as k,F as l,ue as m,J as n,We as o,se as p,$ as q,Ve as r,_ as s,y as t,T as u,ss as v,Ke as w,nn as x,sn as y,Oi as z};
