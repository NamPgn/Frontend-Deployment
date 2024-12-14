import{u as St,a as _t,b as Ge,c as p,d as V,m as U,r as o,j as e,T as At,e as It,s as c,S as Tt,f as Lt,L as Ye,D as $t,g as Pt,P as Je,R as Et,C as Rt,A as zt,H as Ke,B as Dt,h as Xe,i as Ot,k as Bt,F as Ft,W as Mt,l as Vt,n as Ut,o as Ht,p as qt,N as fe,q as Wt,t as Z,v as Gt,E as Yt,w as re,x as Qe,y as _e,z as Jt,G as je,I as Kt,J as Ze,K as Xt,M as W,O as Ae,Q as Ie,U as Qt,V as ee,X as et,Y as Zt,Z as le,_ as de,$ as tt,a0 as at,a1 as st,a2 as Te,a3 as ea,a4 as ta,a5 as aa,a6 as sa,a7 as nt,a8 as na,a9 as ra,aa as rt,ab as ia,ac as oa,ad as la,ae as ve,af as da,ag as it,ah as ca,ai as ot,aj as ce,ak as ua,al as we,am as K,an as X,ao as xa,ap as ma,aq as ha,ar as lt,as as pa,at as ga,au as ya,av as Le,aw as $e,ax as fa,ay as ja,az as va,aA as wa,aB as ba,aC as ka,aD as Ca,aE as Na,aF as Sa,aG as Pe,aH as _a,aI as Aa,aJ as Ia,aK as Ta,aL as La,aM as $a,aN as Pa,aO as Ea,aP as Ra,aQ as za,aR as Da}from"./vendor-c6feb40d.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const Oa="modulepreload",Ba=function(t){return"/"+t},Ee={},w=function(a,s,n){if(!s||s.length===0)return a();const r=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=Ba(i),i in Ee)return;Ee[i]=!0;const l=i.endsWith(".css"),x=l?'[rel="stylesheet"]':"";if(!!n)for(let g=r.length-1;g>=0;g--){const y=r[g];if(y.href===i&&(!l||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${x}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":Oa,l||(m.as="script",m.crossOrigin=""),m.href=i,document.head.appendChild(m),l)return new Promise((g,y)=>{m.addEventListener("load",g),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>a()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})},L=()=>{const t=localStorage.getItem("token");if(t)return JSON.parse(t||"")},D=()=>St(),I=_t,d=Ge.create({baseURL:"https://node-18-cu00.onrender.com/api"}),Fa=Ge.create({baseURL:{}.VITE_DATABASE_RENDER}),q=L(),Ma=async t=>await d.post("/signup",t),Va=async t=>await d.post("/signin",t),dt=async()=>await d.get("user"),Ua=async t=>await d.get("user_one/"+t),Ha=async t=>await d.delete("removeUser/"+t+`/${q.user._id}`,{headers:{Authorization:`Bearer ${q.token}`}}),qa=async t=>await d.put(`user/${t._id}/${q.user._id}`,t,{headers:{Authorization:`Bearer ${q.token}`}}),Wa=async t=>await d.post("user/creating",t),Ga=async t=>await d.get(`user/cart/${t}`),Ya=async(t,a)=>await d.post(`/user/upload/${t}`,a,{headers:{Authorization:`Bearer ${q.token}`}}),Ja=async t=>await d.post("/forgot-password",t),Ka=async(t,a,s)=>await d.post(`/reset-password/${t}/${a}`,s),Xa=async t=>await d.post("/refreshToken",t),te=L(),Qa=async()=>await d.get("/cart"),Za=async t=>await d.post(`/cart/${te.user._id}`,t,{headers:{Authorization:`Bearer ${te.token}`}}),es=async(t,a)=>await d.post(`/cart/${t}/${te.user._id}`,a,{headers:{Authorization:`Bearer ${te.token}`}}),Re=p("cartSlice",async()=>{const{data:t}=await Qa();return t}),ue=p("addCartSlice",async t=>{const{data:a}=await Za(t);return a}),ts=p("deleteCartSlice",async t=>{const{data:a,status:s}=await es(t.id,t);return a.data}),ze=p("user/login",async t=>{const{data:a}=await Ma(t);return a}),oe=p("user/signin",async t=>{const{data:a,status:s}=await Va(t);return a}),as=p("user/getAll",async()=>{const{data:t}=await dt();return t.filter(s=>s.role==0)}),xe=p("user/getUser_id",async t=>{const{data:a}=await Ua(t);return a}),ss=p("admin/getAdmin",async()=>{const{data:t}=await dt();return t.filter(s=>s.role>=1)}),De=p("user/deteleUser",async t=>{const{data:a}=await Ha(t);return a}),ns=p("edit/editUser",async t=>{const{data:a}=await qa(t);return a}),rs=p("user/importXlsx",async t=>{const{data:a}=await Wa(t);return a}),Oe=p("findcart",async t=>{const{data:a}=await Ga(t);return a.cart}),Be=p("uploadImage",async({id:t,formData:a})=>{const{data:s,status:n}=await Ya(t,a);return s}),ct=V({name:"user",initialState:{value:[],cartUser:[],isLoading:!1,error:!1,login:{},isLogin:localStorage.getItem("isLogin")==="true",user:{}},reducers:{logout(t){localStorage.removeItem("token"),U.success("Logout successful!"),t.isLogin=!1,localStorage.setItem("isLogin","false"),t.user={}}},extraReducers:t=>{t.addCase(ze.fulfilled,(a,s)=>{a.error=!1,a.value=s.payload.newUser}).addCase(ze.rejected,(a,s)=>{a.error=!0}),t.addCase(oe.pending,(a,s)=>{a.isLoading=!0}).addCase(oe.fulfilled,(a,s)=>{localStorage.setItem("token",JSON.stringify(s.payload)),a.login=s.payload,a.error=!1,a.isLogin=!0,a.isLoading=!1,a.user=s.payload.user,localStorage.setItem("isLogin","true")}).addCase(oe.rejected,(a,s)=>{a.error=s.payload,a.isLoading=!1}),t.addCase(as.fulfilled,(a,s)=>{a.value=s.payload}),t.addCase(De.fulfilled,(a,s)=>{a.value=a.value.filter(n=>n._id!==s.payload._id)}).addCase(De.rejected,(a,s)=>{}),t.addCase(ss.fulfilled,(a,s)=>{a.value=s.payload}),t.addCase(ns.fulfilled,(a,s)=>{a.value.push(s.payload)}),t.addCase(rs.fulfilled,(a,s)=>{a.value.unshift(s.payload)}),t.addCase(Oe.pending,(a,s)=>{a.isLoading=!0}).addCase(Oe.fulfilled,(a,s)=>{a.isLoading=!1,a.cartUser=s.payload}),t.addCase(xe.fulfilled,(a,s)=>{a.user=s.payload,a.isLoading=!1}).addCase(xe.pending,(a,s)=>{a.isLoading=!0}),t.addCase(Be.fulfilled,(a,s)=>{a.isLoading=!1,a.user=s.payload.data}).addCase(Be.pending,(a,s)=>{a.isLoading=!0}),t.addCase(ts.fulfilled,(a,s)=>{const n=a.user.cart.filter(r=>r.product._id!==s.payload.product);a.user.cart=n})}}),{logout:is}=ct.actions,os=ct.reducer,Q=L(),R=o.createContext(null),ls=t=>{const a=D(),{user:s}=I(y=>y.user),n=localStorage.getItem("isLogin"),r=I(y=>y.user.isLogin),[i,l]=o.useState(!1),[x,u]=o.useState(!1),m=()=>{u(!x)};o.useEffect(()=>{Q&&a(xe(Q.user._id))},[r,a,i]);const g={Auth:Q||"",user:s,isLoggedIn:n,isLoggedInState:r,setReset:l,handleClick:m,state:x};return e.jsx(R.Provider,{value:g,children:t.children})},C=o.memo(({level:t,children:a,...s})=>e.jsx(At,{...s,children:a})),ae=({color:t,children:a,...s})=>e.jsx(It,{color:t,...s,children:a}),ds=c.div`
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
`,xt=()=>e.jsx(ds,{}),cs=()=>{const{state:t}=o.useContext(R)??{};return e.jsx(Tt,{className:t?"w-11/12":"w-10/12",active:!0,title:{width:"20%"},paragraph:{rows:8,width:[300,200,400,100]},loading:!0,style:{height:"100vh",padding:"0 30px"}})},us=()=>e.jsx(ut,{children:e.jsx(C,{type:"danger",children:"Lỗi rồi kiểm tra lại mạng của bạn hoặc tải lại trang..."})}),mt=({size:t,children:a})=>e.jsx(ut,{className:"w-full",children:e.jsxs("div",{role:"status",children:[e.jsxs("svg",{className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]})}),ht=()=>e.jsx(ae,{color:"#108ee9",className:"mx-2",children:"Empty"}),pt=()=>e.jsx("p",{className:"text-white",children:"Trống!"}),xs=async t=>await d.get(t),P=t=>{const{data:a,error:s,mutate:n}=Lt(t,xs);return{data:a?a.data:"",isLoading:!a&&!s,isError:s,mutate:n}},T="https://node-18-cu00.onrender.com/api",ms=(t,a)=>{t(is()),a("/")},b=({to:t,children:a,...s})=>e.jsx(Ye,{to:t,...s,className:"link",children:a}),se=o.memo(({textColor:t,orientation:a,children:s,...n})=>e.jsx($t,{style:{color:t,borderBlockStartColor:"#999"},className:"text-white",orientation:a,...n,children:s})),G=({src:t,alt:a,style:s,...n})=>e.jsx("img",{loading:"lazy",src:t,className:"m-5 w-full h-full",style:s,alt:a,...n}),O=(t,a)=>{const s=a?a.split("/"):null,n=s==null?void 0:s.indexOf("upload");return n!==-1&&(s==null||s.splice(n+1,0,`w_${t}/f_webp`)),s==null?void 0:s.join("/")},hs=c.div`
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
`,gs=()=>{const{data:{data:t}}=P("/category/filters");return e.jsxs("div",{className:"rounded des w-3/12 relative overflow-hidden lg:block md:hidden hidden bg-[#0000005e]",children:[e.jsx(se,{className:"m-0",textColor:"#fff",orientation:"left",children:"Xem thêm"}),e.jsx(hs,{className:"absolute h-full w-full px-2 overflow-scroll",children:t&&(t==null?void 0:t.map((a,s)=>e.jsxs(ps,{className:"flex lg:gap-1 my-2 py-2",children:[e.jsx("div",{className:"w-3/12",children:e.jsx(b,{to:"/q/"+a.slug,children:e.jsx(G,{className:"m-0 h-full",src:O(100,a.linkImg),alt:a.name})},s)}),e.jsxs("div",{className:"w-9/12",children:[e.jsx(b,{style:{textDecoration:"none",color:"#999",fontSize:"13px"},to:"/q/"+a._id,children:a.name},s),e.jsxs(ae,{color:"#108ee9",className:"text-[12px] text-[#999] my-2 block w-6/12 ",children:[" ",a.sumSeri+" Tập VietSub"]}),e.jsx(ae,{color:"#2db7f5",children:a.type?a.type:"null"}),e.jsx("div",{className:"text-sm text-gray-400 mt-2",children:e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(C,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(C,{className:"mr-2 text-gray-300",children:a.typecm}),e.jsxs(C,{className:"text-gray-400 text-sm",children:["(",a.time,")"]})]})})]})]},s)))})]})},E=L(),ys=async t=>await d.post(`/week/${E.user._id}`,t,{headers:{Authorization:`Bearer ${E.token}`}}),fs=async t=>await d.delete(`/week/${t}/${E.user._id}`,{headers:{Authorization:`Bearer ${E.token}`}}),js=async t=>await d.get(`/week?w=${t}`),vs=async(t,a)=>await d.post(`/week/category/${t}/${E.user._id}`,a,{headers:{Authorization:`Bearer ${E.token}`}}),ws=async(t,a)=>await d.post(`/week/insertMany/${t}/${E.user._id}`,a,{headers:{Authorization:`Bearer ${E.token}`}}),Y=o.createContext(null),bs=t=>{const[a,s]=o.useState(1),{data:n}=P(T+"/weeks"),{data:r}=P(T+"/background"),{data:i,isLoading:l}=P(T+"/types"),x={seri:i,loadingSeri:l,background:r,weeks:n,setPage:s,page:a};return e.jsx(Y.Provider,{value:x,children:t.children})},z=o.memo(({level:t,children:a,...s})=>e.jsx(Pt,{level:t,...s,children:a})),me=o.memo(({title:t,link:a,image:s,sumSeri:n,time:r,typecm:i,year:l,products:x})=>{const u=x?x[x.length-1]:"";return e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"relative group",children:e.jsxs(b,{to:a,className:"block",children:[e.jsx("div",{className:"relative w-full h-[200px] md:h-[250px] lg:h-[320px]",children:e.jsx(G,{src:O(300,s),alt:t,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-2 py-1 font-medium",children:u?`Tập ${u.seri}`:e.jsx(pt,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(Je,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4",children:e.jsx(b,{to:a,children:e.jsx(z,{level:5,style:{color:"#fff"},className:"text-xl md:text-2xl lg:text-3xl font-bold",children:t})})}),e.jsxs("div",{className:"text-sm text-gray-400 mt-2",children:[e.jsx("div",{className:"font-semibold",children:n?`${n} Tập`:""}),e.jsxs("div",{className:"flex items-center mt-1 justify-between",children:[e.jsx(C,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e.jsx(C,{className:"mr-2 text-gray-300",children:i}),e.jsxs(C,{className:"text-gray-400 text-sm",children:["(",r,")"]})]}),e.jsx("div",{className:"font-semibold mt-2",children:l?`${l}`:""})]})]})});function ks(){var y;const{weeks:t}=o.useContext(Y)||{},a=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],n=new Date().getDay(),[r,i]=o.useState(!0),[l,x]=o.useState(a[n]),[u,m]=o.useState([]),g=f=>{x(f)};return o.useEffect(()=>{const f=async()=>{const{data:N}=await js(l);m(N),i(!1)};i(!0),f()},[l]),e.jsxs("div",{className:"container mx-auto my-10",children:[e.jsx("div",{className:"px-4 lg:px-[150px] md:px-[100px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0",children:t&&t.map(f=>e.jsx("div",{className:l===f.name?"active border-none":"cursor-pointer",onClick:()=>g(f.name),children:e.jsx("div",{className:"text-[11px] md:text-[12px] lg:text-[14px] flex justify-center items-center px-4 py-2 text-white rounded-lg w-full",children:e.jsx("p",{children:f.name})})},f._id))}),e.jsx("div",{className:"my-5 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full",children:r?e.jsx(xt,{}):e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:(y=u==null?void 0:u.content)==null?void 0:y.map(f=>e.jsx("div",{className:"px-2",children:e.jsx(me,{title:f.name,link:"/q/"+f.slug,image:f.linkImg,time:f.time,sumSeri:f.sumSeri,products:f.products})},f._id))})})]})}const _=o.memo(({gutter:t,justify:a,align:s,children:n,...r})=>e.jsx(Et,{gutter:t,justify:a,align:s,...r,children:n})),j=({children:t,...a})=>e.jsx(Rt,{...a,children:t}),Cs=o.memo(({type:t,gutter:a,child:s,...n})=>e.jsx(_,{gutter:a,children:t==="category"?s&&s.length&&s.map((r,i)=>e.jsx(j,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(me,{title:r.name,link:r.image?"/d/"+r.slug:"/q/"+r.slug,image:r.linkImg||r.image,time:r.time,year:r.year,sumSeri:r.sumSeri,products:r.products})},r._id)):s&&s.length?s.map((r,i)=>e.jsx(j,{xs:12,sm:10,md:8,lg:6,xl:4,children:e.jsx(me,{title:r.name,link:r.image?"/d/"+r.slug:"/q/"+r._id,image:r.linkImg||r.image,time:r.time,sumSeri:r.sumSeri})},r._id)):e.jsx(ht,{})})),F=L(),Ns=async t=>await d.get(`/categorys?page=${t}`),Ss=async t=>await d.get(`/category/${t}`),_s=async t=>await d.post(`/category/${F.user._id}`,t,{headers:{Authorization:`Bearer ${F.token}`}}),As=async t=>await d.delete(`/category/${t}/${F.user._id}`,{headers:{Authorization:`Bearer ${F.token}`}}),Is=async t=>await d.post(`/category/${t.get("_id")}/${F.user._id}`,t,{headers:{Authorization:`Bearer ${F.token}`}}),Ts=async t=>await d.get("/category/getAllCategoryNotRequest/"+t),Ls=async t=>await d.get(`/categorys/search?value=${t}`),$s=async(t,a)=>await d.post("/rating/"+t,a),Ps=async t=>await d.post("/category/changeLatest",t),H=p("category/getAllcate",async t=>{const{data:a}=await Ns(t);return a}),he=p("category/getOne",async t=>{const{data:a}=await Ss(t);return a}),Fe=p("getAll/Category",async t=>{const{data:a}=await Ts(t);return a}),Es=p("add/Addcate",async t=>{const{data:a}=await _s(t);return a}),Rs=p("delete/DeleteCate",async t=>{const{data:a}=await As(t);return a}),zs=p("update/Category",async t=>{const{data:a}=await Is(t);return a}),gt=()=>{const{data:t}=I(n=>n.category.category),a=I(n=>n.category.isLoading);I(n=>n.category.isError);const s=D();return o.useEffect(()=>{s(H(1))},[]),a?e.jsx("div",{className:"seriLoading",children:"Loading..."}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(z,{level:2,underline:!0,style:{color:"#fff"},strong:!0,className:"uppercase",children:"Xem Nhiều"}),e.jsx(b,{to:"/loadmore","aria-label":"Tải thêm nội dung",children:e.jsxs("div",{className:"text-[16px] text-[#fff] flex lg:text-[20px] md:text[18px] gap-3",children:[e.jsx("span",{className:"underline",children:"See More"}),e.jsx("span",{children:e.jsx(zt,{title:"Tải thêm nội dung..."})})]})})]}),e.jsx(Cs,{type:"category",gutter:[16,16],child:t})]})},Pi=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],Ds=[e.jsx(Ke,{}),e.jsx(Dt,{}),e.jsx(Xe,{}),e.jsx(Ot,{}),e.jsx(Bt,{}),e.jsx(Ft,{}),e.jsx(Mt,{}),e.jsx(Vt,{}),e.jsx(Ut,{})],Ei=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Action",dataIndex:"action",key:"action"}],Ri=[{title:"Url",dataIndex:"url",key:"url"},{title:"Image",dataIndex:"image",key:"image"},{title:"Action",dataIndex:"action",key:"action"}],zi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Path",dataIndex:"path",key:"path"},{title:"Product",dataIndex:"product",key:"product"},{title:"Categorymain",dataIndex:"categorymain",key:"categorymain"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"},{title:"Checked",dataIndex:"checked",key:"checked"}],Di=[{title:"Stt",dataIndex:"stt",key:"stt",width:100},{title:"Name",dataIndex:"name",key:"name",width:100},{title:"Slug",dataIndex:"slug",key:"slug",width:120},{title:"Image",dataIndex:"image",key:"Image",width:150},{title:"Duration",dataIndex:"duration",key:"duration",width:50},{title:"isActive",dataIndex:"isActive",key:"isActive",width:50},{title:"Year",dataIndex:"year",key:"year",width:50},{title:"Set",dataIndex:"set",key:"set",width:50},{title:"Week",dataIndex:"week",key:"week",width:50},{title:"Action",dataIndex:"action",key:"action",width:100}],Oi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Category",dataIndex:"category",key:"category"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Day",dataIndex:"day",key:"day"},{title:"Action",dataIndex:"action",key:"action"}],Bi=[{title:"Id",dataIndex:"_id",key:"_id"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],Fi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Image",dataIndex:"image",key:"image"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"}],Mi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Role",dataIndex:"role",key:"role"},{title:"Status",dataIndex:"status",key:"status"},{title:"Image",dataIndex:"image",key:"image"}],Vi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e.jsx("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Image",dataIndex:"image",key:"image"},{title:"Status",dataIndex:"status",key:"status"},{title:"Role",dataIndex:"role",key:"role"},{title:"Action",key:"action",dataIndex:"action",with:150}],Os=[{title:"Name",dataIndex:"name",key:"name"},{title:"Action",dataIndex:"action",key:"action"}],Bs={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:3,responsive:[{breakpoint:1440,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}}]},Fs=({content:t,settings:a})=>e.jsx(Ht,{...a,children:t}),Ms=()=>{const{data:{data:t}}=P(T+"/category/latest");return e.jsxs("div",{children:[e.jsx("h2",{className:"text-white category text-md md:text-md pl-2 mb-2 mx-2 my-3 border-l-4  font-sans font-bold border-teal-400 dark:text-gray-200",children:"Mới Cập Nhật"}),e.jsx(Fs,{settings:Bs,content:t&&t.map((a,s)=>{const n=a.products[a.products.length-1];return e.jsx("div",{className:"px-2",children:e.jsxs("div",{className:"w-full flex flex-col items-center",children:[e.jsx("div",{className:"relative group",children:e.jsxs(b,{to:`/q/${a.slug}`,className:"block w-full",children:[e.jsx("div",{className:"relative h-[200px] w-[160px] md:w-[180px] lg:w-[200px]",children:e.jsx(G,{src:O(220,a.linkImg),alt:a.name,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e.jsx("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-1 md:px-2 py-1 font-medium",children:n?`Tập ${n.seri}`:e.jsx(pt,{})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx(Je,{className:"text-white text-5xl"})})]})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(b,{to:"/q/"+a.slug,children:e.jsx("div",{style:{color:"#999"},className:"text-sm md:text-md lg:text-md",children:a.name})})})]})},a._id)})})]})};function yt({children:t}){const[a,s]=o.useState(!1),n=o.useRef(null);return o.useEffect(()=>{const r=new IntersectionObserver(i=>{i[0].isIntersecting&&s(!0)},{threshold:1});return n.current&&r.observe(n.current),()=>{n.current&&r.unobserve(n.current)}},[]),e.jsxs("div",{children:[a&&t,e.jsx("div",{ref:n,style:{height:"1px"}})]})}const Vs=c.video``,Us=c.div`
  padding-bottom: 60%;
  @media (min-width: 768px) {
    padding-bottom: 50%;
  }
  @media (min-width: 1024px) {
    padding-bottom: 45%;
  }
`,Hs=o.memo(()=>{const{data:t,isError:a}=P(T+"/trailer"),{state:s}=o.useContext(R);return a?e.jsx(us,{}):e.jsxs("div",{className:s?"p-3":"mt-3",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx("div",{className:"lg:w-9/12 md:w-12/12 sm:w-full",children:e.jsxs("div",{className:"h-full",children:[e.jsx(Us,{className:"relative md:mx-2",children:e.jsx(Vs,{className:"h-full absolute bg-black rounded",width:"100%",loop:!0,muted:!0,autoPlay:!0,controls:!0,src:t==null?void 0:t.url})}),e.jsx(Ms,{})]})}),e.jsx(gs,{})]}),e.jsx(ks,{}),e.jsx(yt,{children:e.jsx(gt,{})})]})}),be=({ogTitle:t,description:a,imageUrl:s,mainTitle:n,title:r,...i})=>e.jsxs(qt,{children:[e.jsx("title",{children:r}),e.jsx("meta",{property:"og:title",content:t}),e.jsx("meta",{property:"og:description",content:a}),e.jsx("meta",{property:"og:image",content:s}),Object.keys(i).map(l=>e.jsx("meta",{...i[l]},l))]}),qs=()=>e.jsxs(e.Fragment,{children:[e.jsx(be,{ogTitle:"Hoạt Hình Trung Quốc",description:"Đấu Phá Thương Khung Phần 5",imageUrl:O(200,"https://res.cloudinary.com/daz3lejjo/image/upload/w_100/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),title:"Hoạt Hình 3D"}),e.jsx(Hs,{})]}),k=L(),Ws=async t=>await d.get(`products?page=${t}`),Gs=async t=>await d.get(`product/${t}`),Ys=async t=>await d.delete(`/product/${t}/${k.user._id}`,{headers:{Authorization:`Bearer ${k.token}`}}),Js=async t=>await d.post(`/product/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Ks=async t=>await d.put(`/product/${t.get("_id")}/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Xs=async t=>await d.post("/products/creating",t,{}),Ui=async t=>await d.post(`/products/deleteMultiple/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Qs=async t=>await d.get(`/category/products/${t}`),Hi=async(t,a)=>await d.post(`/product/pushlist/${t}/${k.user._id}`,a,{headers:{Authorization:`Bearer ${k.token}`}}),qi=async(t,a)=>await Fa.post(`/product/abyss/${t}/${k.user._id}`,a,{headers:{Authorization:`Bearer ${k.token}`}}),Wi=async t=>await d.post(`/product/approve/${t}/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Gi=async t=>await d.post(`/product/approve/cancel/${t}/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Zs=async t=>await d.get(`/product/filter?c=${t}`),en=async t=>await d.get(`/product/v?name=${t}`),Yi=async()=>await d.post(`/products/clear/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Ji=async t=>await d.post(`/products/approvedMultiple/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),Ki=async t=>await d.post(`/products/encodeMultipleDailymotionServer/${k.user._id}`,t,{headers:{Authorization:`Bearer ${k.token}`}}),tn=async()=>await d.post(`/products/autoAddEpisodeMovie/${k.user._id}`,null,{headers:{Authorization:`Bearer ${k.token}`}}),Me=p("product/getProducts",async t=>{const{data:a}=await Ws(t);return a}),pe=p("product/getProduct",async t=>{const{data:a}=await Gs(t);return a}),an=p("product/deleteProduct",async t=>{const{data:a}=await Ys(t);return a}),sn=p("product/addProduct",async t=>{const{data:a,status:s}=await Js(t);return a}),nn=p("product/editProduct",async t=>{const{data:a}=await Ks(t);return a}),rn=p("product/importDataFile",async t=>{const{data:a}=await Xs(t);return a}),on=p("product/getAllProductDataByCategory",async t=>{const{data:a}=await Qs(t);return a}),ln=p("product/filter",async t=>{const{data:a}=await Zs(t);return a}),dn=p("product/Search",async t=>{const{data:a}=await en(t);return a}),cn=p("product/autoAdd",async()=>{const{data:t}=await tn();return t}),un=t=>t.product.getOneProduct,Xi=t=>t.category.category,xn=t=>t.user.value,Qi=t=>t.user.value,mn=c.button`
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
`,hn=o.memo(({seriProduct:t})=>{var a,s;return e.jsx(_,{gutter:14,items:"center",className:"overflow-x-auto custom-scrollbar",children:(s=(a=t==null?void 0:t.category)==null?void 0:a.products)==null?void 0:s.map((n,r)=>n.isApproved==!0?e.jsx(j,{xl:3,lg:3,md:4,sm:4,xs:6,className:"mt-2",children:e.jsx(fe,{className:({isActive:i,isPending:l})=>i?"activeSeri":"",to:"/d/"+n.slug,children:e.jsx(mn,{className:n.seri&&"w-full",children:n.seri&&"Tập "+n.seri})})},r):"")})}),A=o.memo(({children:t,...a})=>e.jsx(Wt,{...a,children:t})),J=t=>U.success(t),ft=t=>U.warning(t),B=t=>U.error(t),pn=({item:t,id:a})=>{var g;const s=D(),{Auth:n,user:r,isLoggedInState:i}=o.useContext(R),[l,x]=o.useState(!1),u={user:n?n.user._id:"",product:a};o.useEffect(()=>{var f,N;const y=(f=r==null?void 0:r.cart)==null?void 0:f.find(v=>v.product._id===a);x(((N=y==null?void 0:y.product)==null?void 0:N._id)===a)},[r.cart,a]);const m=()=>{!n&&i==!1?B("Bạn cần đăng nhập!"):l?ft("Đã tồn tại trong yêu thích!"):(s(ue(u)),x(!0),J("Thêm vào danh sách yêu thích thành công!"))};return e.jsxs("div",{className:"lg:flex md:flex-row items-center @screen md:justify-between flex flex-col",children:[e.jsx(b,{to:"/q/"+((g=t==null?void 0:t.category)==null?void 0:g._id),className:"text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(z,{level:4,style:{color:"#fff"},className:"uppercase",children:t.name})}),e.jsx(A,{style:{color:"#fff"},icon:e.jsx(Z,{}),disabled:l,className:"flex items-center justify-center",onClick:()=>m(),children:l?"Đã yêu thích":"Thêm vào yêu thích"})]})},gn=({getOneProductDetail:t})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{color:"#fff",margin:"10px 0"},children:t.seri?t.trailer?"Trailer "+t.seri:"Tập "+t.seri:""}),e.jsx("div",{className:"des text-[#999]",children:e.jsxs("p",{children:["Ngày đăng:"," ",Gt(t.uploadDate).format("LTS DD-MM-YYYY")]})}),e.jsx("div",{style:{color:"#fff",margin:"10px 0"},className:"des",children:e.jsxs("div",{className:"text-[#999] flex items-center gap-2 lg:justify-start @screen justify-center",children:[e.jsx(Yt,{}),t.view*36," Lượt xem"]})}),e.jsxs("div",{className:"p-3 mt-3 mb-3 text-white rounded  flex items-center lg:justify-start @screen justify-center",style:{background:"rgb(0 0 0 / 47%)"},children:["Copyright video:",e.jsx("div",{className:"text-slate-400",children:" "+t.copyright})]})]}),yn=c.div`
display:flex;
gap:0 10px;

@media(max-width:768px){
  display:block;
}
@media(min-width:1024px){
  display:flex;
}
`;c.div`
`;const fn=c.div`
font-size:13px;
@media(min-width: 1024px){
  font-size:15px;
}
`,jn=c.div`
padding:5px;
@media(min-width: 1024px){
  padding: 15px;
}
`,vn=c.div`
padding-bottom:62%;

@media(min-width: 768px){
  padding-bottom:52%;
}

@media(min-width: 1024px){
  padding-bottom:42%;
}
`,wn=c.div`
 
`,bn=t=>t.product.isLoading,kn=()=>{var y,f,N;const t=I(un),a=I(bn),[s,n]=o.useState(""),{id:r}=re(),[i,l]=o.useState("dailyMotion"),x=D(),[u,m]=o.useState(""),g=Qe();return o.useEffect(()=>{window.scrollTo(0,0)},[g]),o.useEffect(()=>{x(pe(r));const v=_e.AES.decrypt(t.dailyMotionServer?t.dailyMotionServer:"","24062003").toString(_e.enc.Utf8);m(v),n(v)},[r,t.dailyMotionServer]),console.log(t.server2),e.jsxs(e.Fragment,{children:[e.jsx(be,{ogTitle:t==null?void 0:t.name,description:(y=t.category)==null?void 0:y.des,imageUrl:(f=t.category)==null?void 0:f.linkImg}),e.jsx("div",{className:"flex justify-center mt-4",style:{gap:"10px"},children:e.jsx(jn,{className:"col-md-12",children:t&&(a?e.jsx(mt,{size:"large",children:void 0}):e.jsxs(e.Fragment,{children:[e.jsx(vn,{className:"d-flex justify-content-center relative",children:t.dailyMotionServer!==""?e.jsx("iframe",{allowFullScreen:!0,title:"vimeo-player",className:"absolute",src:s,style:{width:"100%",height:"100%"}}):t.trailer!==""?e.jsx("iframe",{title:"vimeo-player",className:"absolute",style:{width:"100%",height:"100%"},src:t.trailer+"?autoplay=1&mute=1"}):e.jsx(Jt,{icon:"Hiiiii!!",className:"absolute inset-0 text-white mt-5",subTitle:"Phim này đang trong quá trình cập nhật video. Vui lòng quay lại sau."})}),e.jsxs(wn,{className:"mt-4 rounded",children:[e.jsx(se,{textColor:"#fff",orientation:"center",className:"text-white md:text-sm lg:text-base text-sm underline",children:"Chọn server:"}),e.jsxs("div",{className:"md:text-sm lg:text-base text-sm flex items-center justify-center gap-4 px-4 py-3",children:[e.jsx(A,{disabled:t.link==="",onClick:()=>{l("link1"),n(t.link)},className:`text-white cursor-pointer ${i==="link1"?"activeServer":""}`,children:"#S1"}),e.jsx(A,{onClick:()=>{l("server2"),n(t.server2)},disabled:!t.server2,className:`${t.server2?" text-white cursor-pointer":""} ${i==="server2"?"activeServer":""}`,children:"#S2"}),e.jsx(A,{onClick:()=>{l("dailyMotion"),n(u)},disabled:!t.dailyMotionServer,className:`${t.dailyMotionServer?"text-white cursor-pointer":""} ${i==="dailyMotion"?"activeServer":""}`,children:"#S3"})]})]}),e.jsx(yn,{className:"mt-2",children:e.jsxs(fn,{className:"lg:w-12/12 md:w-full text-center lg:text-start",children:[e.jsx(pn,{item:t,id:r}),e.jsx(gn,{getOneProductDetail:t}),e.jsx(hn,{seriProduct:t}),e.jsxs("div",{className:"text-[#999] lg:text-md sm:text-sm mt-2 mb-2",children:[e.jsx(se,{textColor:"#fff",orientation:"left",children:"Mô tả:"}),t&&((N=t.category)==null?void 0:N.des)]})]})})]}))})})]})},Cn=()=>e.jsxs(je.Fragment,{children:[e.jsx(o.Suspense,{fallback:e.jsx(cs,{}),children:e.jsx(kn,{})}),e.jsx(yt,{children:e.jsx(gt,{})})]}),Nn=({data:t,isLoading:a})=>{var s;return a?e.jsx("div",{className:"seriLoading",children:"Loading...."}):e.jsx("div",{className:"bg-[#9b9b9b1f] h-[174px] overflow-y-scroll p-3 rounded-sm seriCategory",children:e.jsx(_,{gutter:[16,16],children:((s=t==null?void 0:t.products)==null?void 0:s.length)>0&&(t!=null&&t.products)?t.products.map((n,r)=>n.isApproved==!0?e.jsx(j,{lg:3,md:4,sm:5,xs:6,style:{textAlign:"center"},children:e.jsx(b,{to:"/d/"+n.slug,children:!n.dailyMotionServer&&n.trailer?e.jsx(Ve,{children:n.seri}):e.jsx(Ve,{className:"w-full text-white",variant:"ghost",size:"sm",children:n.seri})})},r):""):e.jsx(ht,{})})})},Sn=o.memo(({id:t,averageRating:a,totalRatings:s})=>{const n=async r=>{const i={rating:r};try{await $s(t,i)}catch(l){console.error("Lỗi khi lưu đánh giá:",l)}};return e.jsxs("span",{className:"text-white flex items-center gap-2",children:[e.jsx(Kt,{className:"mt-2 mb-2",value:a,onChange:n}),s>0?e.jsx("div",{className:"relative pt-1",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{children:e.jsxs("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200",children:["Vip ",a.toFixed(2),"/",s*115," Tổng số lượt đánh giá"]})})})}):""]})}),_n=()=>{const{id:t}=re(),a=D(),s=I(r=>r.category.details),n=I(r=>r.category.isLoading);return o.useEffect(()=>{a(he(t))},[t]),o.useEffect(()=>{s!=null&&s.name&&(document.title=s.name)},[s]),e.jsxs(e.Fragment,{children:[e.jsx(be,{ogTitle:s.name,description:s==null?void 0:s.des,imageUrl:s==null?void 0:s.linkImg}),s&&e.jsx("div",{children:e.jsxs("div",{style:{color:"#fff"},children:[e.jsxs("div",{className:"md:flex lg:flex block gap-2 ",children:[e.jsx("div",{className:"mb-5 lg:w-3/12 md:w-3/12 md:h-full h-52 ",children:e.jsx("div",{className:"h-full w-full flex justify-center ",children:e.jsx(G,{className:"object-contain w-full h-full flex-grow",src:O(300,s.linkImg),alt:s.name})})}),e.jsxs("div",{className:"lg:w-9/12 md:w-9/12",children:[e.jsx("div",{className:"category text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e.jsx(b,{to:"/q/"+s.slug,children:e.jsx(z,{type:"secondary",level:3,className:"md:text-[18px] lg:text-[20px] sm:text-[15px]",style:{textTransform:"capitalize",color:"#fff"},children:s.name})})}),e.jsxs("div",{className:"loai des text-[12px] md:text-[13px] lg:text-[14px]",children:[e.jsx("b",{children:s.anotherName}),e.jsx("br",{}),e.jsx(C,{style:{color:"#999"},children:"Tác giả :..."}),e.jsx("br",{}),e.jsx(C,{style:{color:"#999"},children:"Quốc gia : Chinese"}),e.jsx("div",{children:e.jsxs(C,{style:{color:"#999"},children:["Thể loại :"," ",e.jsx("span",{className:"p-1 bg-gray-500 rounded-sm",children:s.type})]})}),e.jsx("div",{children:e.jsxs(C,{style:{color:"#999"},children:["Tổng Số tập: ",s._id==t?s.sumSeri:""]})}),e.jsx("div",{children:e.jsx(C,{style:{color:"#999"},children:s.time+" "})}),e.jsx("div",{children:e.jsxs(C,{style:{color:"#999"},children:["Năm phát hành : ",s.year]})}),e.jsx("div",{}),e.jsx(ae,{color:"#2db7f5",className:"my-2",children:s.isActive==0?"Đang chiếu":"Hoàn thành"}),e.jsxs("div",{id:"toast-simple",className:"flex mb-2 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800",role:"alert",children:[e.jsx(Ze,{}),e.jsx("div",{className:"ps-4 text-sm font-normal",children:"Vietsub lúc 10h00 Thứ 4 hàng tuần"})]})]}),e.jsx(Nn,{isLoading:n,data:s}),e.jsx(Sn,{id:t,averageRating:s.averageRating,totalRatings:s.totalRatings})]})]}),e.jsxs("div",{className:"text-[#999] lg:text-[15px] md:text[14px] text-[13px]",children:[e.jsx(se,{textColor:"#fff",orientation:"left",children:"NỘI DUNG PHIM"}),s.des]})]})},s._id)]})},An=()=>e.jsx(e.Fragment,{children:e.jsx(_n,{})});const Ue=o.memo(({title:t,src:a,size:s,...n})=>e.jsx("div",{title:t,style:{cursor:"pointer"},children:e.jsx(Xt,{size:s,color:"default",src:a,...n})})),ge=({isLoggedInState:t,style:a})=>{var l,x,u,m,g;const s=L(),n=W(),r=D(),i=()=>{s?n("/cart/user"):B("Bạn cần đăng nhập!")};return e.jsx(je.Fragment,{children:s&&t?e.jsx(Ae,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx(Ie,{content:e.jsxs(e.Fragment,{children:[e.jsx(b,{to:"/profile",children:e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:12,children:[e.jsx(j,{children:e.jsx(Qt,{})}),e.jsx(j,{children:e.jsx(C,{level:6,className:"auth",children:"Your profile"})})]})}),e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(j,{children:e.jsx(Z,{})}),e.jsx(j,{children:e.jsx(C,{style:{cursor:"pointer"},onClick:i,className:"auth",children:"Saved"})})]}),s.user&&((l=s==null?void 0:s.user)==null?void 0:l.role)>=1&&e.jsx(b,{to:"/dashboard",children:e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(j,{children:e.jsx(ee,{})}),e.jsx(j,{children:e.jsx(C,{className:"auth",children:"Admin"})})]})}),e.jsxs(_,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e.jsx(j,{children:e.jsx(et,{})}),e.jsx(j,{children:e.jsx(C,{style:{cursor:"pointer"},onClick:()=>ms(r,n),children:"Logout"})})]})]}),title:e.jsx(z,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:(x=s==null?void 0:s.user)==null?void 0:x.username}),placement:"bottomLeft",trigger:"click",children:e.jsx(Ue,{className:"text-center",title:(u=s==null?void 0:s.user)==null?void 0:u.name,src:O(50,s.user&&((m=s==null?void 0:s.user)==null?void 0:m.image)),size:"sm"})})}):e.jsx(Ae,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e.jsx(Ie,{content:e.jsx(b,{to:"/signin",children:e.jsxs(_,{align:"middle",gutter:[12,12],children:[e.jsx(j,{children:e.jsx(Zt,{})}),e.jsx(j,{children:e.jsx(C,{level:6,className:"auth",children:"Signin"})})]})}),title:e.jsx(z,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:"Hi"}),placement:"bottomLeft",trigger:"click",children:e.jsx(Ue,{title:(g=s==null?void 0:s.user)==null?void 0:g.name,src:void 0,style:a,size:40,icon:e.jsx(ee,{})})})})})},{Content:In,Sider:Tn,Header:Ln,Footer:$n}=le,Pn=()=>{const t=si.map((r,i)=>{var x;const l=String(i+1);return{key:`${l+1}`,icon:r.icon,label:e.jsx(b,{to:r.path,children:r.name}),children:(x=r==null?void 0:r.children)==null?void 0:x.map((u,m)=>{const g=m+1;return{key:`subitem-${l}-${g}`,icon:u.icon,label:e.jsx(b,{to:u.path,children:u.name})}})}}),{isLoggedInState:a}=o.useContext(R)??{},[s,n]=o.useState(!1);return e.jsxs(le,{style:{minHeight:"100vh"},children:[e.jsxs(Tn,{trigger:null,collapsible:!0,collapsed:s,className:"custom-sider overflow-y-auto",style:{height:"100%",position:"fixed"},children:[e.jsx("div",{className:"p-4 bg-[#fff]",children:e.jsx("div",{className:"h-8 w-full bg-[#ddd] rounded"})}),e.jsx(de,{style:{height:"calc(100% - 56px)",marginTop:"8px"},theme:"light",mode:"inline",defaultSelectedKeys:["1"],items:t})]}),e.jsxs(le,{style:{marginLeft:s?80:200},children:[e.jsx(Ln,{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",padding:0},children:e.jsxs(_,{align:"middle",justify:"space-between",children:[e.jsx(j,{children:e.jsx(A,{type:"text",icon:s?e.jsx(tt,{}):e.jsx(at,{}),onClick:()=>n(!s),style:{fontSize:"16px",width:64,height:64},children:void 0})}),e.jsx(j,{children:e.jsx(b,{to:"/",children:"Home Page"})}),e.jsx(j,{style:{textAlign:"center"},span:1,children:e.jsx(ge,{isLoggedInState:a,style:void 0})})]})}),e.jsx(In,{style:{padding:"24px",minHeight:"calc(100vh - 64px)",overflow:"auto"},children:e.jsx(st,{})}),e.jsx($n,{children:"© 2023 copyright | PH ANG"})]})]})},En=t=>{const a=L();try{return a?a.user.role==0?e.jsx(Te,{to:"/"}):t.children:e.jsx(Te,{to:"/"})}catch{return e.jsx("div",{className:"text-light container text-center",children:e.jsx(b,{to:"/signin",children:"Đăng nhập"})})}},Rn=c.div`
color:#999;
font-weight:500;
`,zn=c.div`
color: rgb(255, 214, 99);
font-weight:500;
`,Dn=c.div`
display: flex;
align-items: center;
justify-content: center;
gap:0 5px;
 
&>a{
    color: rgb(255, 214, 99) !important;
    font-weight:500;
}
`;c.div`

`;const On=o.memo(({data:t,icons:a,id:s,background:n,...r})=>e.jsx(de,{className:"h-full",style:{background:n},children:t&&t.map((i,l)=>o.createElement(de.Item,{...r,icon:i.icon?i.icon:a[l],key:l},s==!0?e.jsx(fe,{to:i.path=="/"?i.path:i.path+`/${i._id}`,children:i.name},l):e.jsx(b,{to:i.path,children:i.name})))})),Bn=c.div`
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
`;const Fn=c.div`
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
`,Mn=c.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`,Vn=c.div`
  font-size: 11px;
  font-weight: 400;
`,Un=c.div`
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
`,Hn=c.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
  justify-content: ${t=>t.justify};
`,qn=c.div``,Wn=c.div`
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
`,Gn=c.div`
  color: #d9d9d9;
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`,Yn=c.div`
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
`,Jn=c.div`
  display: block;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`,ye=({data:t})=>t.length>0?e.jsx("div",{className:"absolute top-[50px] left-0 w-full flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:e.jsx("div",{className:"p-4 flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700",children:t.map((a,s)=>e.jsx(b,{to:`/q/${a.slug}`,children:e.jsx("div",{className:"flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:a.name})},a._id))})}):e.jsx(e.Fragment,{}),Kn=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"})),Xn=[e.jsx(Ke,{}),e.jsx(sa,{}),e.jsx(et,{}),e.jsx(nt,{})],Qn=()=>{const{Auth:t,isLoggedInState:a,state:s,handleClick:n}=o.useContext(R)??{},[r,i]=o.useState(!1),[l,x]=o.useState(0),[u,m]=o.useState("20px 10px"),[g,y]=o.useState(!1),f="left",[N,v]=o.useState(""),[$,bt]=o.useState([]),kt=()=>{y(!0)},Ct=()=>{y(!1)};window.addEventListener("scroll",()=>{const S=window.pageYOffset;i(l>S),x(S),window.scrollY>10?m("10px 5px"):m("20px 10px")});const Nt=W(),ke=()=>{t?Nt("/cart/user"):B("Bạn cần đăng nhập!")},Ce=ea.debounce(async S=>{const{data:ie}=await Ls(S);bt(ie)},500),Ne=async S=>{v(S),Ce(S)};o.useEffect(()=>()=>{Ce.cancel()},[N]),o.useEffect(()=>{i(!0)},[]);const Se=a?ti:ei;return e.jsxs(je.Fragment,{children:[e.jsxs(_,{align:"middle",justify:"space-between",className:`${s?"w-11/12":"w-10/12"} lg:flex hidden z-[100] fixed right-0`,style:{top:r?"0":"-25%",padding:u,backgroundColor:"#00000038"},children:[e.jsx(j,{span:1,children:e.jsx(Jn,{className:"text-[21px] md:text-[23px] lg:text-[25px]",onClick:n,children:s?e.jsx(at,{}):e.jsx(tt,{})})}),e.jsxs(j,{span:6,className:"relative",children:[e.jsx(He,{style:{boxShadow:"#333 0px 2px 10px"},onChange:S=>Ne(S.target.value),placeholder:"Search..."}),e.jsx(ye,{data:$})]}),e.jsx(j,{span:16,children:e.jsxs(_,{justify:"center",align:"middle",children:[e.jsx(_,{children:Se.map((S,ie)=>e.jsx(j,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:e.jsx(b,{style:{color:"#fff",textDecoration:"none",margin:"0 20px"},to:S.path,children:S.name})},ie))}),e.jsx(j,{children:e.jsxs(Dn,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:[e.jsx(Rn,{children:"Liên hệ qc tele: "}),e.jsxs("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:[e.jsx(zn,{}),"@PH ANG"]})]})}),e.jsx(j,{className:"ml-5 text-[15px] lg:text-[17px] md:text[16px]",style:{marginLeft:"50px"},onClick:ke,children:e.jsx(Z,{className:"__ text-yellow-500"})})]})}),e.jsx(j,{span:1,className:"text-end",children:e.jsx(ge,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",textAlign:"center"}})})]}),e.jsxs("div",{className:"navbar_mb w-10/12 absolute right-0 z-10",children:[e.jsxs(_,{align:"middle",justify:"space-between",className:"navbar bgNav mb",children:[e.jsx(j,{children:e.jsx(ta,{className:"text-white",onClick:kt})}),e.jsx(j,{children:e.jsx("div",{className:"ml-5 relative",onClick:ke,children:e.jsx(Z,{className:"__ text-yellow-500"})})}),e.jsxs(j,{span:16,className:"relative",children:[e.jsx(He,{onChange:S=>Ne(S.target.value),placeholder:"Search..."}),e.jsx(ye,{data:$})]}),e.jsx(j,{children:e.jsx(ge,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",lineHeight:"30px"}})})]}),e.jsx(aa,{width:200,title:"Drawer",placement:"left",closable:!1,onClose:Ct,open:g,closeIcon:!0,className:"relative z-10",children:e.jsx(On,{icons:Xn,id:!1,background:"#fff",data:Se})},f)]})]})},Zn=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-gray-900 text-white py-4",children:[e.jsx("link",{rel:"stylesheet",integrity:"sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=",crossOrigin:"anonymous"}),e.jsx("footer",{className:"footer",children:e.jsx("div",{className:"footer-bottom border-t border-gray-700 py-3",children:e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"m-0 text-sm text-gray-400",children:["© 2023 | Developed by"," ",e.jsx("a",{href:"#",className:"text-blue-400 hover:text-blue-500 underline",children:"PH ANG"})]})})})})]})}),er=()=>e.jsx("div",{className:"md:mt-[50px] lg:mt-[50px] lg:flex hidden justify-center text-white ",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"card p-3 ",style:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"d-flex justify-center",children:e.jsx("img",{src:O(80,"https://res.cloudinary.com/daz3lejjo/image/upload/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),alt:"Đấu phá thương khung phần 5",className:"avatar-md rounded-circle img-thumbnail"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"font-size-16 mb-1 mt-1",children:e.jsx(b,{to:"#",className:"text-light",children:"Admin Contact"})}),e.jsx("span",{className:"badge badge-soft-success mb-0",children:"Web Developer"})]})]}),e.jsxs("div",{className:"mt-3 pt-1 iconContact",children:[e.jsxs("p",{className:"mb-0",children:[e.jsx(na,{}),e.jsx("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:"Facebook"})]}),e.jsxs("p",{className:"mb-0 mt-2",children:[e.jsx(ra,{}),e.jsx("a",{href:"https://www.tiktok.com/@tieu_loli",children:"Tiktok"})]})]})]})})})}),tr=()=>{const{seri:t,loadingSeri:a}=o.useContext(Y)||{},{state:s}=o.useContext(R)||{},n=s?"w-1/12":"w-2/12";return e.jsx(Bn,{className:n,children:e.jsxs(Un,{className:n,children:[e.jsx(Hn,{justify:s?"center":"start",children:e.jsxs(Fn,{className:s?"hiddenn":"block text-white",children:[e.jsx(b,{to:"/",children:e.jsx(Mn,{children:"Hhtrungquoc.tv"})}),e.jsx(b,{to:"/",children:e.jsx(Vn,{children:"tromphim.netify.app"})})]})}),e.jsx("div",{className:"mt-[50px]",children:a?e.jsx(mt,{size:"large",children:void 0}):e.jsx(qn,{className:"sideBarActive",children:t&&t.map((r,i)=>e.jsx(fe,{title:r.name,to:r.path=="/"?r.path:r.path+`/${r._id}`,children:e.jsxs(Wn,{state:s,children:[e.jsx(Gn,{children:Ds[i]}),e.jsx(Yn,{className:s?"hiddenn":"block",children:r.name})]})},i))})}),e.jsx(er,{})]})})},ar=c.div`
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
`,sr=({children:t,...a})=>{var n;const{background:s}=o.useContext(Y)||{};return e.jsx(ar,{background:s&&((n=s==null?void 0:s.data)==null?void 0:n.url),...a,children:t})},nr=()=>{const{state:t}=o.useContext(R)||{};return e.jsxs(sr,{className:"text-start",children:[e.jsx("div",{children:e.jsx(Qn,{})}),e.jsxs("div",{className:"containers flex",children:[e.jsx("div",{className:t?"w-1/12":"w-2/12",children:e.jsx(tr,{})}),e.jsx("div",{className:`${t?"w-11/12":"w-10/12"} p-2`,children:e.jsx(st,{})})]}),e.jsx("div",{children:e.jsx(Zn,{})})]})},h=({children:t})=>e.jsx(o.Suspense,{fallback:e.jsx(xt,{}),children:t});const rr=c(rt)`
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
`,qe=o.memo(({columns:t,dataSource:a,...s})=>e.jsx(rr,{columns:t,dataSource:a,...s,bordered:!0,size:"middle"})),jt=o.memo(({name:t,label:a,control:s,rules:n,...r})=>e.jsxs("div",{className:"mb-3",children:[e.jsx(C,{htmlFor:t,children:a}),e.jsx(ia,{name:t,control:s,rules:n,defaultValue:"",render:({field:i})=>e.jsx(oa,{placeholder:a,...i,...r})})]})),ir=o.memo(({title:t,cancelText:a,okText:s,onConfirm:n,children:r,...i})=>{const l=()=>{B("Hủy")};return e.jsx(la,{title:t,onCancel:l,onConfirm:n,okText:s,cancelText:a,...i,children:r})}),or=()=>{const{weeks:t}=o.useContext(Y),{handleSubmit:a,control:s}=ve(),n=async(u,m)=>{const g={categoryId:m};try{(await vs(u,g)).data&&(it(T+"/weeks"),J("Delete Success"))}catch{B("Delete Failure")}},r=async u=>{await ys(u)},i=async u=>{await fs(u)},l=u=>{var y;const m=[{title:"ID",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"operation",render:(f,N)=>e.jsx(e.Fragment,{children:e.jsx(ir,{title:"Delete the category",onConfirm:()=>n(u.key,N._id),okText:"Yes",cancelText:"No",children:e.jsx(A,{type:"text",shape:"circle",className:"ml-2",children:e.jsx(da,{})})})})}],g=((y=t.find(f=>f._id===u.key))==null?void 0:y.category)||[];return e.jsx(qe,{columns:m,dataSource:g,pagination:!1})},x=t&&t.map((u,m)=>({key:u._id,name:u.name,action:e.jsxs(e.Fragment,{children:[e.jsx(b,{to:`/dashboard/week/edit/${u.name}`,children:e.jsx(A,{type:"primary",children:"Edit"})}),e.jsx(A,{onClick:()=>i(u._id),className:"ml-1",children:"Delete"})]})}));return e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:a(r),children:e.jsxs(_,{gutter:4,align:"middle",justify:"center",children:[e.jsx(j,{span:22,children:e.jsx(jt,{name:"name",label:"Theo tuần",control:s,rules:void 0})}),e.jsx(j,{span:2,children:e.jsx(A,{htmlType:"submit",className:"mt-3",type:"primary",children:"Create"})})]})}),e.jsx(qe,{columns:Os,dataSource:x,expandable:{expandedRowRender:l,defaultExpandedRowKeys:["0"]}})]})},lr=()=>e.jsxs("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]",children:[e.jsx("h1",{className:"text-9xl font-extrabold text-white tracking-widest",children:"404"}),e.jsx("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute",children:"Page Not Found"}),e.jsx("button",{className:"mt-5",children:e.jsxs("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring",children:[e.jsx("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),e.jsx("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current",children:e.jsx(b,{to:"/",children:"Go Home"})})]})})]}),dr=c.button`
background:linear-gradient(to right, #652EEE, #040F75)
`,cr=c.input`
width: 100%;
padding: 10px;
border-radius: 10px;
background: transparent;
border: 1px solid #999;
font-size: 12px;
outline:none;
color: #fff;
`,ur=c.form``,xr=c.div`
padding: 0 20px;
@media (min-width: 768px){
  padding: 0 40px;
}
@media (min-width: 1024ox) {
  padding: 0 60px;
}
`,mr=c.div`
color: #fff;
margin-top:20px;
font-size:25px;
@media (min-width: 768px){
  margin-top:30px;
}
@media (min-width: 1024ox) {
  margin-top:40px;
`,hr=c.div`
margin: 15px 0;
color: #999;
font-size:13px;
`,pr=c.div`
cursor: pointer;
`,gr=c.div`
padding: 15px 5px;
border: 1px solid #fff;
font-style: italic;
`,yr=c.div`
border-bottom: 1px dashed  #fff;
`,fr=c.div`

`,vt=o.memo(({onSubmit:t,formTitle:a,formDescription:s,submitButtonText:n,formIntro:r,formHeader:i,checkedAccount:l,handleMessage:x,redirect:u,array:m,schemaPage:g})=>{const{register:y,handleSubmit:f,formState:{errors:N}}=ve({resolver:ca(g)});return e.jsx("div",{className:"h-screen relative z-0",children:e.jsxs(xr,{className:"g-6 flex flex-wrap justify-center w-full items-center absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4",style:{transform:"translate(-50%,-50%)"},children:[e.jsxs("div",{className:"w-8/12 items-center text-white hidden lg:block md:hidden",children:[e.jsx(fr,{className:"text-[50px] ",children:i}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(gr,{className:"w-2/12",children:r}),e.jsx(yr,{className:"w-10/12"})]})]}),e.jsxs("div",{className:"md:w-8/12 lg:w-4/12 w-full lg:p-5 md:p-4 p-3",style:{background:"rgba(248, 248, 248, 0.04)",borderRadius:" 5px"},children:[e.jsxs("div",{children:[e.jsx(mr,{children:a}),e.jsx(hr,{children:s})]}),e.jsxs(ur,{onSubmit:f(t),children:[m&&m.map((v,$)=>e.jsx("div",{className:"relative lg:mb-6 md:mb-4 mb-2","data-te-input-wrapper-init":!0,children:e.jsxs("div",{children:[e.jsx(cr,{disabled:v.disable,style:{background:`${v.disable?"#99979742":""}`},type:v.type,...y(`${v.field}`),placeholder:v.field,className:"placeholder:capitalize"}),N&&N[v.field]&&e.jsx("div",{className:"text-sm text-pink-600 mt-1",children:N[v.field].message})]})},$)),e.jsx("div",{className:"lg:mb-6 md:mb-5 mb-4",children:e.jsx(Ye,{to:"/forgot-password",children:e.jsxs("div",{className:"text-center text-white text-sm font-medium text-primary-600 hover:underline text-primary-500",children:["Forgot password?"," "]})})}),e.jsx(dr,{type:"submit",className:"w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600",children:n}),e.jsx("div",{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:e.jsxs("p",{className:"mx-4 mb-0 text-center text-white text-[12px]",children:[" ","OR"]})}),e.jsx(pr,{className:"flex justify-center",onClick:x,children:e.jsx(G,{style:{width:"30px",height:"30px"},src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:""})}),e.jsx("div",{className:"lg:mb-6 md:mb-4 mb-2 text-center lg:mt-5 md:mt-3 mt-2 text-slate-400 ",children:e.jsx(b,{to:u,className:"text-sm text-primary-600 hover:underline text-primary-500",children:l})})]})]})]})})}),jr=[{type:"email",field:"email",disable:!1}],vr=()=>{const t=W(),a=ot().shape({email:ce().required().email()}),s=async r=>{const i=await Ja(r);i.data.success?(J(i.data.message),t("/signin")):B(i.data.message)},n=()=>{U.success("Đang cập nhật!")};return e.jsx(vt,{onSubmit:s,formTitle:"Forgot Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:n,redirect:"/forgot-password",array:jr,schemaPage:a})},wr=[{type:"password",field:"password",disable:!1},{type:"password",field:"repassword",disable:!1}],br=()=>{const t=W(),{id:a,token:s}=re(),n=ot().shape({password:ce().required().min(6,"Password tối thiểu 6 kí tự"),repassword:ce().required().oneOf([ua("password"),null],"Passwords must match")}),r=async l=>{const x=await Ka(a,s,l);x.data.success?(J(x.data.message),t("/signin")):B(x.data.message)},i=()=>{U.success("Đang cập nhật!")};return e.jsx(vt,{onSubmit:r,formTitle:"Reset Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:i,redirect:"/reset-password",array:wr,schemaPage:n})},kr=()=>{const t=["#eb2f96","#52c41a","#eba12f"],{data:{data:a}}=P(T+"/category/latest"),s=[{title:"Name",dataIndex:"name",key:"name",render:i=>e.jsx("p",{children:i})},{title:"Action",key:"action",render:(i,l,x)=>e.jsx(A,{type:"text",shape:"circle",className:"ml-2",onClick:()=>n(l.key),children:e.jsx(we,{type:"success",style:{color:t[x]}})})}],n=async i=>{const l={id:i},{data:x}=await Ps(l);x.success===!0&&(J("Success"),it(T+"/category/latest"))},r=a&&a.map((i,l)=>({key:i._id,name:i.name}));return e.jsx(rt,{columns:s,dataSource:r})},Cr=()=>{const t=I(xn),{data:a}=P(T+"/most-watched-episodes"),{data:s}=P(T+"/rating/stats"),n={data:a.data,xField:"seri",yField:"view",point:{shapeField:"square",sizeField:4},interaction:{tooltip:{marker:!1}},style:{lineWidth:2}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-around gap-2",children:[e.jsx(K,{className:"w-full",children:e.jsx(X,{title:"Active Users",prefix:e.jsx(ee,{}),value:t.length})}),e.jsx(K,{bordered:!0,className:"w-full",children:e.jsx(X,{title:"Comment",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:e.jsx(we,{}),suffix:"%"})}),e.jsx(K,{bordered:!1,className:"w-full",children:e.jsx(X,{title:"View",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:e.jsx(xa,{}),suffix:"%"})}),e.jsx(K,{className:"w-full",children:e.jsx(X,{title:"Rating Video",prefix:e.jsx(ma,{}),value:s.totalRatings})})]}),e.jsx("div",{className:"flex justify-between gap-2",children:e.jsx(ha,{className:"w-5/12",...n})})]})},{SHOW_PARENT:Nr}=lt,Sr=()=>{const t=D(),{data:a}=I(v=>v.category.category),[s,n]=o.useState([]),{id:r}=re(),{data:i,isLoading:l}=P(T+"/week?w="+r),{handleSubmit:x,reset:u,control:m}=ve();o.useEffect(()=>{var v;i&&(u(i),n((v=i==null?void 0:i.content)==null?void 0:v.map($=>$._id))),t(H(0))},[i]);const g=v=>{console.log(v),n(v)},y=async v=>{const $=await ws(r,s);$!=null&&$.data&&pa.success(`Edit ${v.name} Success`)},N={treeData:a==null?void 0:a.map(v=>({title:v.name,value:v._id,key:v._id})),value:s,onChange:g,treeCheckable:!0,showCheckedStrategy:Nr,placeholder:"Please select",style:{width:"100%"}};return l?"Loading...":e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[e.jsx(z,{level:4,className:"mb-4 text-lg font-semibold"}),e.jsxs("form",{onSubmit:x(y),className:"space-y-4",children:[e.jsx(jt,{name:"name",label:"Week name",control:m,className:"w-full"}),e.jsx(lt,{...N}),e.jsx(A,{htmlType:"submit",children:"Submit"})]})]})},_r=o.lazy(()=>w(()=>import("./index-00bc8b79.js"),["assets/index-00bc8b79.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css","assets/index-3e4929b2.js"])),Ar=o.lazy(()=>w(()=>import("./index-a47d547a.js"),["assets/index-a47d547a.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css","assets/index-55b39ab7.js"])),Ir=o.lazy(()=>w(()=>import("./index-26214d91.js"),["assets/index-26214d91.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css","assets/index-55b39ab7.js","assets/index-68406cc2.js"])),Tr=o.lazy(()=>w(()=>Promise.resolve().then(()=>Kn),void 0)),Lr=o.lazy(()=>w(()=>import("./Profile-b062848b.js"),["assets/Profile-b062848b.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),$r=o.lazy(()=>w(()=>import("./Sign-in-ee80a2cb.js"),["assets/Sign-in-ee80a2cb.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Pr=o.lazy(()=>w(()=>import("./Sign-up-426b9fea.js"),["assets/Sign-up-426b9fea.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Er=o.lazy(()=>w(()=>import("./index-ac74f90c.js"),["assets/index-ac74f90c.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Rr=o.lazy(()=>w(()=>import("./add-5c29e833.js"),["assets/add-5c29e833.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),zr=o.lazy(()=>w(()=>import("./edit-106120d9.js"),["assets/edit-106120d9.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Dr=o.lazy(()=>w(()=>import("./admin-a99a2c14.js"),["assets/admin-a99a2c14.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Or=o.lazy(()=>w(()=>import("./add-6a7879df.js"),["assets/add-6a7879df.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css","assets/index-8f14c485.js","assets/index-b7f11e4f.js","assets/index-3e4929b2.js"])),Br=o.lazy(()=>w(()=>import("./edit-d6a43ccf.js"),["assets/edit-d6a43ccf.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css","assets/index-8f14c485.js","assets/index-b7f11e4f.js","assets/index-3e4929b2.js"])),Fr=o.lazy(()=>w(()=>import("./adds-4a73b3ab.js"),["assets/adds-4a73b3ab.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Mr=o.lazy(()=>w(()=>import("./CreatingProducts-d68d9583.js"),["assets/CreatingProducts-d68d9583.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css","assets/index-b7f11e4f.js"])),Vr=o.lazy(()=>w(()=>import("./index-d82da395.js"),["assets/index-d82da395.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css","assets/type-4ba3c15f.js","assets/index-8f14c485.js","assets/index-b7f11e4f.js"])),Ur=o.lazy(()=>w(()=>import("./edit-444a9827.js"),["assets/edit-444a9827.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css","assets/index-b7f11e4f.js","assets/index-8f14c485.js"])),Hr=o.lazy(()=>w(()=>import("./index-f7f2d4e3.js"),["assets/index-f7f2d4e3.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),qr=o.lazy(()=>w(()=>import("./edit-a6e2d5c6.js"),["assets/edit-a6e2d5c6.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Wr=o.lazy(()=>w(()=>import("./index-5d1c4f9a.js"),["assets/index-5d1c4f9a.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Gr=o.lazy(()=>w(()=>import("./index-67ef3d8d.js"),["assets/index-67ef3d8d.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Yr=o.lazy(()=>w(()=>import("./index-d3fe75ba.js"),["assets/index-d3fe75ba.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Jr=o.lazy(()=>w(()=>import("./index-c897ae72.js"),["assets/index-c897ae72.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css","assets/index-68406cc2.js","assets/index-55b39ab7.js"])),Kr=o.lazy(()=>w(()=>import("./index-fc0981db.js"),["assets/index-fc0981db.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css","assets/type-4ba3c15f.js"])),Xr=o.lazy(()=>w(()=>import("./CatemainProduct-da3ef39d.js"),["assets/CatemainProduct-da3ef39d.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Qr=o.lazy(()=>w(()=>import("./index-f22507d4.js"),["assets/index-f22507d4.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),Zr=o.lazy(()=>w(()=>import("./edit-82fe5bd8.js"),["assets/edit-82fe5bd8.js","assets/vendor-c6feb40d.js","assets/vendor-eba8d1b3.css"])),ei=[{path:"/",name:"Trang chủ",title:"Trang chủ"},{path:"/signin",name:"Đăng nhập",title:"Đăng nhập"},{path:"/signup",name:"Đăng kí",title:"Đăng kí"}],ti=[{path:"/",name:"Trang chủ"},{path:"/profile",name:"Hồ sơ",title:"Hồ sơ"}],ai=[{path:"/",element:e.jsx(nr,{}),children:[{path:"/",element:e.jsx(qs,{}),index:!0},{path:"d/:id",element:e.jsx(h,{children:e.jsx(Cn,{})})},{path:"q/:id",element:e.jsx(h,{children:e.jsx(An,{})})},{path:"search/category",element:e.jsx(h,{children:e.jsx(Tr,{})})},{path:"cart/user",element:e.jsx(h,{children:e.jsx(Gr,{})})},{path:"movie-content/:id",element:e.jsx(h,{children:e.jsx(Ir,{})})},{path:"types/h/:id",element:e.jsx(h,{children:e.jsx(Ar,{})})},{path:"loadmore",element:e.jsx(h,{children:e.jsx(Jr,{})})},{path:"signup",element:e.jsx(h,{children:e.jsx(Pr,{})})},{path:"signin",element:e.jsx(h,{children:e.jsx($r,{})})},{path:"forgot-password",element:e.jsx(h,{children:e.jsx(vr,{})})},{path:"reset-password/:id/:token",element:e.jsx(h,{children:e.jsx(br,{})})},{path:"profile",element:e.jsx(h,{children:e.jsx(Lr,{})})}]},{path:"dashboard",element:e.jsx(En,{children:e.jsx(Pn,{})}),children:[{path:"",element:e.jsx(h,{children:e.jsx(Cr,{})}),index:!0},{path:"products",element:e.jsx(h,{children:e.jsx(_r,{})})},{path:"users",element:e.jsx(h,{children:e.jsx(Er,{})})},{path:"adminUer",element:e.jsx(h,{children:e.jsx(Dr,{})})},{path:"users/:id/edit",element:e.jsx(h,{children:e.jsx(zr,{})})},{path:"user/add",element:e.jsx(h,{children:e.jsx(Rr,{})})},{path:"user/creatingUser",element:e.jsx(h,{children:e.jsx(Fr,{})})},{path:"product/add",element:e.jsx(h,{children:e.jsx(Or,{})})},{path:"product/edit/:id",element:e.jsx(h,{children:e.jsx(Br,{})})},{path:"product/creacting",element:e.jsx(h,{children:e.jsx(Mr,{})})},{path:"category",element:e.jsx(h,{children:e.jsx(Vr,{})})},{path:"category/edit/:id",element:e.jsx(h,{children:e.jsx(Ur,{})})},{path:"category/latest",element:e.jsx(h,{children:e.jsx(kr,{})})},{path:"trailing",element:e.jsx(h,{children:e.jsx(Hr,{})})},{path:"trailerUrl/:id",element:e.jsx(h,{children:e.jsx(qr,{})})},{path:"comments",element:e.jsx(h,{children:e.jsx(Wr,{})})},{path:"cart",element:e.jsx(h,{children:e.jsx(Yr,{})})},{path:"types",element:e.jsx(h,{children:e.jsx(Kr,{})})},{path:"types/CateMainProduct/:id",element:e.jsx(h,{children:e.jsx(Xr,{})})},{path:"background",element:e.jsx(h,{children:e.jsx(Qr,{})})},{path:"background/edit/:id",element:e.jsx(h,{children:e.jsx(Zr,{})})},{path:"weeks",element:e.jsx(h,{children:e.jsx(or,{})})},{path:"week/edit/:id",element:e.jsx(h,{children:e.jsx(Sr,{})})}]},{path:"/*",element:e.jsx(lr,{})}],si=[{path:"/dashboard",name:"Admin",icon:e.jsx(ga,{})},{path:"/dashboard/products",name:"Movies",icon:e.jsx(ya,{})},{name:"User",icon:e.jsx(Le,{}),children:[{path:"/dashboard/users",name:"Users",icon:e.jsx(ee,{})},{path:"/dashboard/adminUer",name:"Admin",icon:e.jsx($e,{})}]},{name:"Category",icon:e.jsx(Le,{}),children:[{path:"/dashboard/category",name:"Category",icon:e.jsx(fa,{})},{path:"/dashboard/category/latest",name:"Latest",icon:e.jsx(we,{})}]},{name:"Themes",icon:e.jsx(nt,{}),children:[{path:"/dashboard/trailing",name:"Trailer",icon:e.jsx($e,{})},{path:"/dashboard/background",name:"Background",icon:e.jsx(ja,{})}]},{name:"Big Category",icon:e.jsx(Xe,{}),children:[{path:"/dashboard/types",name:"Types",icon:e.jsx(va,{})}]},{path:"/dashboard/comments",name:"Comments",icon:e.jsx(wa,{})},{path:"/dashboard/cart",name:"Cart",icon:e.jsx(ba,{})},{path:"/dashboard/weeks",icon:e.jsx(Ze,{}),name:"Week"}],ni=ka`
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

`,We=t=>{if(!t)return!0;try{const a=Ca(t),s=Date.now()/1e3;return a.exp<s}catch(a){return console.error("Error decoding token:",a),!0}};function ri(){const t=Qe(),a="G-0EEY3R7F0S",s=Na(ai),n=W(),[r,i]=Sa.useNotification(),l=L();return o.useEffect(()=>{Pe.initialize(a),Pe.send({hitType:"pageview",page:t.pathname,title:"User Active"}),(async()=>{if(l){const x=l.token,u=l.refreshToken;if(We(u))ft("Token expires-relogin"),localStorage.clear(),n("/signin");else if(We(x)){const m={refreshToken:l.refreshToken},{data:g}=await Xa(m);localStorage.setItem("token",JSON.stringify(g))}}})(),setTimeout(()=>{r.open({message:"Admin Xin Thông Báo!",description:"Xin lỗi, server phim hiện đang quá tải do lượng truy cập lớn. Vui lòng chờ đợi trong 1-2 phút để tiếp tục xem. Chúng tôi đang nỗ lực để cải thiện tình hình và xin thành thật xin lỗi vì sự bất tiện này.Trân trọng!",placement:"topRight"})},2e3)},[]),e.jsxs(e.Fragment,{children:[i,s,e.jsx(ni,{}),e.jsx(_a,{}),e.jsx(Aa.BackTop,{visibilityHeight:200})]})}const ii={value:{data:[],totalCount:0,totalPages:0},isLoading:!1,getOneProduct:{},getAllProductByCategory:[],status:!1},oi=V({name:"product",initialState:ii,reducers:{},extraReducers:t=>{t.addCase(Me.pending,(a,s)=>{a.isLoading=!0}).addCase(Me.fulfilled,(a,s)=>{a.isLoading=!1,a.value=s.payload}),t.addCase(an.fulfilled,(a,s)=>{a.value.data=a.value.data.filter(n=>n._id!==s.payload.data._id)}),t.addCase(sn.fulfilled,(a,s)=>{a.value.data.push(s.payload)}),t.addCase(nn.fulfilled,(a,s)=>{a.value.data.push(s.payload)}),t.addCase(rn.fulfilled,(a,s)=>{a.value.data=[...a.value.data,s.payload]}),t.addCase(ln.fulfilled,(a,s)=>{a.value.data=s.payload}),t.addCase(dn.fulfilled,(a,s)=>{a.value.data=s.payload}),t.addCase(pe.pending,(a,s)=>{a.isLoading=!0}).addCase(pe.fulfilled,(a,s)=>{a.isLoading=!1,a.getOneProduct=s.payload}),t.addCase(on.fulfilled,(a,s)=>{a.getAllProductByCategory=s.payload}),t.addCase(cn.fulfilled,(a,s)=>{a.value.data=[...a.value.data,...s.payload.data]})}}),li=oi.reducer,di={category:{data:[],length:0},isLoading:!1,isError:!1,categoryNotReqId:[],details:{}},ci=V({name:"category",initialState:di,reducers:{},extraReducers:t=>{t.addCase(H.fulfilled,(a,s)=>{a.isLoading=!1,a.category=s.payload}).addCase(H.pending,(a,s)=>{a.isLoading=!0}).addCase(H.rejected,(a,s)=>{a.isError=!0}),t.addCase(Fe.fulfilled,(a,s)=>{a.isLoading=!1,a.categoryNotReqId=s.payload}).addCase(Fe.pending,(a,s)=>{a.isLoading=!0}),t.addCase(Es.fulfilled,(a,s)=>{a.category.data=a.category.data.concat(s.payload)}),t.addCase(Rs.fulfilled,(a,s)=>{a.category.data=a.category.data.filter(n=>n._id!==s.payload._id)}),t.addCase(zs.fulfilled,(a,s)=>{a.category.data.push(s.payload)}),t.addCase(he.fulfilled,(a,s)=>{a.details=s.payload,a.isLoading=!1}).addCase(he.pending,(a,s)=>{a.isLoading=!0})}}),ui=ci.reducer,Zi=async()=>await d.get("/trailer"),ne=L(),xi=async t=>await d.put(`/trailer/${t.get("_id")}/${ne.user._id}`,t,{headers:{Authorization:`Bearer ${ne.token}`}}),eo=async t=>await d.post(`/background/${t.get("_id")}/${ne.user._id}`,t,{headers:{Authorization:`Bearer ${ne.token}`}}),mi=p("trailer/Trailing",async t=>{const{data:a}=await xi(t);return a}),hi=V({name:"post",initialState:{value:[],trailerValues:[]},reducers:{},extraReducers:t=>{t.addCase(mi.fulfilled,(a,s)=>{a.trailerValues.push(s.payload)})}}),pi=hi.reducer,M=L(),gi=async()=>await d.get("/comments"),yi=async(t,a)=>await d.post(`/comment/${t}/${M.user._id}`,a,{headers:{Authorization:`Bearer ${M.token}`}}),fi=async t=>await d.post(`/comment/${M.user._id}`,t,{headers:{Authorization:`Bearer ${M.token}`}}),ji=async t=>await d.post(`/comments/deleteMultiple/${M.user._id}`,t,{headers:{Authorization:`Bearer ${M.token}`}}),vi=p("getAllCommentSlice",async()=>{const{data:t}=await gi();return t}),wi=p("addCommentSlice",async t=>{const{data:a}=await yi(t.product,t);return a}),bi=p("deleteComment",async t=>{const{data:a}=await fi(t);return a}),ki=p("deleteCommentsMultiple",async t=>{const{data:a}=await ji(t);return a}),Ci=V({name:"comment",initialState:{value:[]},reducers:{},extraReducers:t=>{t.addCase(vi.fulfilled,(a,s)=>{a.value=s.payload}),t.addCase(wi.fulfilled,(a,s)=>{a.value.push(s.payload)}),t.addCase(bi.fulfilled,(a,s)=>{a.value=a.value.filter(n=>n._id!==s.payload._id)}),t.addCase(ki.fulfilled,(a,s)=>{a.value=s.payload.data})}}),Ni=Ci.reducer,Si=V({name:"cart",initialState:{value:[],isLoading:!1,code:null},reducers:{},extraReducers:t=>{t.addCase(Re.fulfilled,(a,s)=>{a.isLoading=!1,a.value=s.payload}).addCase(Re.pending,(a,s)=>{a.isLoading=!0}),t.addCase(ue.pending,(a,s)=>{a.isLoading=!0}).addCase(ue.fulfilled,(a,s)=>{Array.isArray(a.value)||(a.value=[]),a.isLoading=!1,a.value.push(s.payload.cart)})}}),_i=Si.reducer,Ai={key:"root",storage:Pa,whitelist:[""],expire:"3600000"},Ii=Ia({product:li,user:os,category:ui,trailer:pi,comment:Ni,cart:_i}),Ti=Ta(Ai,Ii),wt=La({reducer:Ti,middleware:t=>t({serializableCheck:!1})}),Li=$a(wt);Ea.createRoot(document.getElementById("root")).render(e.jsx(Ra,{store:wt,children:e.jsx(za,{persistor:Li,children:e.jsx(bs,{children:e.jsx(ls,{children:e.jsx(Da,{children:e.jsx(ri,{})})})})})}));export{se as $,Y as A,Pi as B,ms as C,Ue as D,Be as E,vt as F,oe as G,ze as H,xn as I,as as J,Vi as K,cs as L,R as M,ht as N,De as O,jt as P,xe as Q,ns as R,mt as S,Qi as T,ss as U,Mi as V,H as W,sn as X,z as Y,G as Z,O as _,D as a,pe as a0,nn as a1,qi as a2,rs as a3,rn as a4,Xi as a5,Di as a6,Es as a7,Rs as a8,he as a9,zs as aa,Ss as ab,C as ac,Bi as ad,Zi as ae,mi as af,vi as ag,Oi as ah,ki as ai,bi as aj,ts as ak,pt as al,Re as am,Ei as an,zi as ao,Hi as ap,L as aq,d as ar,Fi as as,Ri as at,eo as au,ae as b,A as c,_ as d,j as e,ir as f,Me as g,b as h,qe as i,ln as j,Ui as k,Ji as l,Ki as m,Yi as n,J as o,B as p,cn as q,an as r,dn as s,Wi as t,I as u,Gi as v,P as w,us as x,Cs as y,T as z};
