import{j as e,S as Nt,a as Ze,u as _t,b as St,c as x,d as M,m as U,r as l,T as Tt,e as It,s as p,f as i,g as Lt,h as Dt,L as Qe,i as Pt,P as et,R as $t,C as Rt,A as zt,H as Bt,F as T,N as tt,B as Ot,k as re,l as Ft,E as jt,D as Vt,n as le,q as Mt,o as Ee,p as De,t as Ut,v as W,w as Ht,x as at,y as qt,z as G,G as Pe,I as $e,U as Wt,J as ne,K as rt,M as Gt,O as pe,Q as me,V as nt,W as st,X as it,Y as Re,Z as Yt,_ as Jt,$ as Kt,a0 as Xt,a1 as Zt,a2 as ot,a3 as Qt,a4 as ea,a5 as lt,a6 as ta,a7 as aa,a8 as ra,a9 as dt,aa as na,ab as sa,ac as ct,ad as he,ae as ia,af as Ce,ag as oa,ah as Q,ai as ee,aj as la,ak as da,al as ca,am as ua,an as pa,ao as ze,ap as Be,aq as ma,ar as ha,as as ga,at as xa,au as ya,av as fa,aw as va,ax as wa,ay as ba,az as Oe,aA as ka,aB as Ea,aC as Ca,aD as Aa,aE as Na,aF as _a,aG as Sa,aH as Ta,aI as Ia,aJ as La,aK as Da}from"./vendor.7a0224e0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const Pa="modulepreload",$a=function(t){return"/"+t},Fe={},b=function(a,r,s){if(!r||r.length===0)return a();const n=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=$a(o),o in Fe)return;Fe[o]=!0;const d=o.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!s)for(let w=n.length-1;w>=0;w--){const f=n[w];if(f.href===o&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${m}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Pa,d||(h.as="script",h.crossOrigin=""),h.href=o,document.head.appendChild(h),d)return new Promise((w,f)=>{h.addEventListener("load",w),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>a())},ut=({content:t,settings:a})=>e(Nt,{...a,children:t}),pi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"ProductName",dataIndex:"ProductName",key:"ProductName"},{title:"User",dataIndex:"user",key:"user"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Action",dataIndex:"action",key:"action"}],mi=[{title:"Url",dataIndex:"url",key:"url"},{title:"Image",dataIndex:"image",key:"image"},{title:"Action",dataIndex:"action",key:"action"}],hi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Path",dataIndex:"path",key:"path"},{title:"Product",dataIndex:"product",key:"product"},{title:"Categorymain",dataIndex:"categorymain",key:"categorymain"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"},{title:"Checked",dataIndex:"checked",key:"checked"}],gi=[{title:"Stt",dataIndex:"stt",key:"stt",width:50},{title:"Name",dataIndex:"name",key:"name",width:150},{title:"Image",dataIndex:"image",key:"Image",width:150},{title:"Duration",dataIndex:"duration",key:"duration",width:50},{title:"isActive",dataIndex:"isActive",key:"isActive",width:50},{title:"Year",dataIndex:"year",key:"year",width:50},{title:"Set",dataIndex:"set",key:"set",width:50},{title:"Week",dataIndex:"week",key:"week",width:50},{title:"Action",dataIndex:"action",key:"action",width:100}],xi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"User",dataIndex:"user",key:"user"},{title:"Image",dataIndex:"image",key:"Image"},{title:"Product",dataIndex:"product",key:"product"},{title:"Permission",dataIndex:"permission",key:"permission"},{title:"Day",dataIndex:"day",key:"day"},{title:"Action",dataIndex:"action",key:"action"}],yi=[{title:"Id",dataIndex:"_id",key:"_id"},{title:"Url",dataIndex:"url",key:"url"},{title:"Action",dataIndex:"action",key:"action"}],fi=[{title:"Stt",dataIndex:"stt",key:"stt"},{title:"Name",dataIndex:"name",key:"name"},{title:"Image",dataIndex:"image",key:"image"},{title:"CreatedAt",dataIndex:"createdAt",key:"createdAt"},{title:"Action",dataIndex:"action",key:"action"}],vi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Role",dataIndex:"role",key:"role"},{title:"Status",dataIndex:"status",key:"status"},{title:"Image",dataIndex:"image",key:"image"}],wi=[{title:"Name",dataIndex:"name",key:"name",render:t=>e("p",{children:t})},{title:"Email",dataIndex:"email",key:"email"},{title:"Image",dataIndex:"image",key:"image"},{title:"Status",dataIndex:"status",key:"status"},{title:"Role",dataIndex:"role",key:"role"},{title:"Action",key:"action",dataIndex:"action",with:150}],Ra=[{title:"Name",dataIndex:"name",key:"name"},{title:"Action",dataIndex:"action",key:"action"}],za={dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},Ba={dots:!0,infinite:!0,speed:500,slidesToShow:7,slidesToScroll:2,pauseOnHover:!0,initialSlide:0,autoplay:!1,autoplaySpeed:2e3,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:4,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:2,dots:!0}}]},L=()=>{const t=localStorage.getItem("token");if(t)return JSON.parse(t||"")},c=Ze.create({baseURL:"https://node-4-mhqo.onrender.com/api"}),Oa=Ze.create({baseURL:"https://node-3-uodg.onrender.com/api"}),j=L(),Fa=async t=>await c.post(`/week/${j.user._id}`,t,{headers:{Authorization:`Bearer ${j.token}`}}),ja=async t=>await c.delete(`/week/${t}/${j.user._id}`,{headers:{Authorization:`Bearer ${j.token}`}}),Va=async t=>await c.get(`/week?w=${t}`),Ma=async(t,a)=>await c.post(`/week/category/${t}/${j.user._id}`,a,{headers:{Authorization:`Bearer ${j.token}`}}),H=()=>_t(),I=St,q=L(),Ua=async t=>await c.post("/signup",t),Ha=async t=>await c.post("/signin",t),pt=async()=>await c.get("user"),qa=async t=>await c.get("user_one/"+t),Wa=async t=>await c.delete("removeUser/"+t+`/${q.user._id}`,{headers:{Authorization:`Bearer ${q.token}`}}),Ga=async t=>await c.put(`user/${t._id}/${q.user._id}`,t,{headers:{Authorization:`Bearer ${q.token}`}}),Ya=async t=>await c.post("user/creating",t),Ja=async t=>await c.get(`user/cart/${t}`),Ka=async(t,a)=>await c.post(`/user/upload/${t}`,a,{headers:{Authorization:`Bearer ${q.token}`}}),Xa=async t=>await c.post("/forgot-password",t),Za=async(t,a,r)=>await c.post(`/reset-password/${t}/${a}`,r),Qa=async t=>await c.post("/refreshToken",t),se=L(),er=async()=>await c.get("/cart"),tr=async t=>await c.post(`/cart/${se.user._id}`,t,{headers:{Authorization:`Bearer ${se.token}`}}),ar=async(t,a)=>await c.post(`/cart/${t}/${se.user._id}`,a,{headers:{Authorization:`Bearer ${se.token}`}}),je=x("cartSlice",async()=>{const{data:t}=await er();return t}),ge=x("addCartSlice",async t=>{const{data:a}=await tr(t);return a}),rr=x("deleteCartSlice",async t=>{const{data:a,status:r}=await ar(t.id,t);return a.data}),Ve=x("user/login",async t=>{const{data:a}=await Ua(t);return a}),ue=x("user/signin",async t=>{const{data:a,status:r}=await Ha(t);return a}),nr=x("user/getAll",async()=>{const{data:t}=await pt();return t.filter(r=>r.role==0)}),xe=x("user/getUser_id",async t=>{const{data:a}=await qa(t);return a}),sr=x("admin/getAdmin",async()=>{const{data:t}=await pt();return t.filter(r=>r.role>=1)}),Me=x("user/deteleUser",async t=>{const{data:a}=await Wa(t);return a}),ir=x("edit/editUser",async t=>{const{data:a}=await Ga(t);return a}),or=x("user/importXlsx",async t=>{const{data:a}=await Ya(t);return a}),Ue=x("findcart",async t=>{const{data:a}=await Ja(t);return a.cart}),He=x("uploadImage",async({id:t,formData:a})=>{const{data:r,status:s}=await Ka(t,a);return r}),mt=M({name:"user",initialState:{value:[],cartUser:[],isLoading:!1,error:!1,login:{},isLogin:localStorage.getItem("isLogin")==="true",user:{}},reducers:{logout(t){localStorage.removeItem("token"),U.success("Logout successful!"),t.isLogin=!1,localStorage.setItem("isLogin","false"),t.user={}}},extraReducers:t=>{t.addCase(Ve.fulfilled,(a,r)=>{a.error=!1,a.value=r.payload.newUser}).addCase(Ve.rejected,(a,r)=>{a.error=!0}),t.addCase(ue.pending,(a,r)=>{a.isLoading=!0}).addCase(ue.fulfilled,(a,r)=>{localStorage.setItem("token",JSON.stringify(r.payload)),a.login=r.payload,a.error=!1,a.isLogin=!0,a.isLoading=!1,a.user=r.payload.user,localStorage.setItem("isLogin","true")}).addCase(ue.rejected,(a,r)=>{a.error=r.payload,a.isLoading=!1}),t.addCase(nr.fulfilled,(a,r)=>{a.value=r.payload}),t.addCase(Me.fulfilled,(a,r)=>{a.value=a.value.filter(s=>s._id!==r.payload._id)}).addCase(Me.rejected,(a,r)=>{}),t.addCase(sr.fulfilled,(a,r)=>{a.value=r.payload}),t.addCase(ir.fulfilled,(a,r)=>{a.value.push(r.payload)}),t.addCase(or.fulfilled,(a,r)=>{a.value.unshift(r.payload)}),t.addCase(Ue.pending,(a,r)=>{a.isLoading=!0}).addCase(Ue.fulfilled,(a,r)=>{a.isLoading=!1,a.cartUser=r.payload}),t.addCase(xe.fulfilled,(a,r)=>{a.user=r.payload,a.isLoading=!1}).addCase(xe.pending,(a,r)=>{a.isLoading=!0}),t.addCase(He.fulfilled,(a,r)=>{a.isLoading=!1,a.user=r.payload.data}).addCase(He.pending,(a,r)=>{a.isLoading=!0}),t.addCase(rr.fulfilled,(a,r)=>{const s=a.user.cart.filter(n=>n.product._id!==r.payload.product);a.user.cart=s})}}),{logout:lr}=mt.actions,dr=mt.reducer,te=L(),$=l.exports.createContext(null),cr=t=>{const a=H(),{user:r}=I(f=>f.user),s=localStorage.getItem("isLogin"),n=I(f=>f.user.isLogin),[o,d]=l.exports.useState(!1),[m,u]=l.exports.useState(!1),h=()=>{u(!m)};l.exports.useEffect(()=>{te&&a(xe(te.user._id))},[n,a,o]);const w={Auth:te||"",user:r,isLoggedIn:s,isLoggedInState:n,setReset:d,handleClick:h,state:m};return e($.Provider,{value:w,children:t.children})},A=l.exports.memo(({level:t,children:a,...r})=>e(Tt,{...r,children:a})),ht=({color:t,children:a,...r})=>e(It,{color:t,...r,children:a}),ur=p.div`
height: 100vh;
`,pr=p.div`
position: relative;
height: 100vh;
justify-content: center;
display: flex;
&>*{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
`,gt=()=>e(ur,{}),mr=()=>{var a;const{state:t}=(a=l.exports.useContext($))!=null?a:{};return e(Lt,{className:t?"w-11/12":"w-10/12",active:!0,title:{width:"20%"},paragraph:{rows:8,width:[300,200,400,100]},loading:!0,style:{height:"100vh",padding:"0 30px"}})},xt=({size:t,children:a})=>e(pr,{className:"w-full",children:i("div",{role:"status",children:[i("svg",{className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e("span",{className:"sr-only",children:"Loading..."})]})}),yt=()=>e(ht,{color:"#108ee9",className:"mx-2",children:"Empty"}),ft=()=>e("p",{className:"text-white",children:"Tr\u1ED1ng!"}),hr=async t=>await c.get(t),z=t=>{const{data:a,error:r,mutate:s}=Dt(t,hr);return{data:a?a.data:"",isLoading:!a&&!r,isError:r,mutate:s}},P="https://node-4-mhqo.onrender.com/api",gr=(t,a)=>{t(lr()),a("/")},de=l.exports.createContext(null),xr=t=>{const[a,r]=l.exports.useState(1),{data:s}=z(P+"/weeks"),{data:n}=z(P+"/background"),o={background:n,weeks:s,setPage:r,page:a};return e(de.Provider,{value:o,children:t.children})},k=({to:t,children:a,...r})=>e(Qe,{to:t,...r,className:"link",children:a}),Y=({src:t,alt:a,style:r,...s})=>e("img",{loading:"lazy",src:t,className:"m-5 w-full h-full",style:r,alt:a,...s}),B=l.exports.memo(({level:t,children:a,...r})=>e(Pt,{level:t,...r,children:a})),O=(t,a)=>{const r=a?a.split("/"):null,s=r==null?void 0:r.indexOf("upload");return s!==-1&&(r==null||r.splice(s+1,0,`w_${t}/f_webp`)),r==null?void 0:r.join("/")},ye=l.exports.memo(({title:t,link:a,image:r,sumSeri:s,time:n,typecm:o,year:d,products:m})=>{const u=m?m[m.length-1]:"";return i("div",{className:"w-full",children:[e("div",{className:"relative group",children:i(k,{to:a,className:"block",children:[e("div",{className:"relative w-full h-[200px] md:h-[250px] lg:h-[320px]",children:e(Y,{src:O(300,r),alt:t,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-2 py-1 font-medium",children:u?`T\u1EADp ${u.seri}`:e(ft,{})}),e("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e(et,{className:"text-white text-5xl"})})]})}),e("div",{className:"mt-4",children:e(k,{to:a,children:e(B,{level:5,style:{color:"#fff"},className:"text-xl md:text-2xl lg:text-3xl font-bold",children:t})})}),i("div",{className:"text-sm text-gray-400 mt-2",children:[e("div",{className:"font-semibold",children:s?`${s} T\u1EADp`:""}),i("div",{className:"flex items-center mt-1 justify-between",children:[e(A,{className:"mr-2 text-gray-300",children:"Full HD/Vietsub"}),e(A,{className:"mr-2 text-gray-300",children:o}),i(A,{className:"text-gray-400 text-sm",children:["(",n,")"]})]}),e("div",{className:"font-semibold mt-2",children:d?`${d}`:""})]})]})});function yr(){var f;const{weeks:t}=l.exports.useContext(de)||{},a=["Ch\u1EE7 nh\u1EADt","Th\u1EE9 2","Th\u1EE9 3","Th\u1EE9 4","Th\u1EE9 5","Th\u1EE9 6","Th\u1EE9 7"],s=new Date().getDay(),[n,o]=l.exports.useState(!0),[d,m]=l.exports.useState(a[s]),[u,h]=l.exports.useState([]),w=v=>{m(v)};return l.exports.useEffect(()=>{const v=async()=>{const{data:C}=await Va(d);h(C),o(!1)};o(!0),v()},[d]),i("div",{className:"container mx-auto my-10",children:[e("div",{className:"px-4 lg:px-[150px] md:px-[100px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0",children:t&&t.map(v=>e("div",{className:d===v.name?"active border-none":"cursor-pointer",onClick:()=>w(v.name),children:e("div",{className:"text-[11px] md:text-[12px] lg:text-[14px] flex justify-center items-center px-4 py-2 text-white rounded-lg w-full",children:e("p",{children:v.name})})},v._id))}),e("div",{className:"my-5 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full",children:n?e(gt,{}):e(ut,{settings:za,content:(f=u==null?void 0:u.content)==null?void 0:f.map(v=>e("div",{className:"px-2",children:e(ye,{title:v.name,link:"/q/"+v._id,image:v.linkImg,time:v.time,sumSeri:v.sumSeri,products:v.products})},v._id))})})]})}const S=l.exports.memo(({gutter:t,justify:a,align:r,children:s,...n})=>e($t,{gutter:t,justify:a,align:r,...n,children:s})),y=({children:t,...a})=>e(Rt,{...a,children:t}),vt=l.exports.memo(({type:t,gutter:a,child:r,...s})=>e(S,{gutter:a,children:t==="category"?r&&r.length&&r.map((n,o)=>e(y,{xs:12,sm:10,md:8,lg:6,xl:4,children:e(ye,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,year:n.year,sumSeri:n.sumSeri,products:n.products})},n._id)):r&&r.length?r.map((n,o)=>e(y,{xs:12,sm:10,md:8,lg:6,xl:4,children:e(ye,{title:n.name,link:n.image?"/d/"+n._id:"/q/"+n._id,image:n.linkImg||n.image,time:n.time,sumSeri:n.sumSeri})},n._id)):e(yt,{})})),V=L(),fr=async t=>await c.get(`/categorys?page=${t}`),vr=async t=>await c.get(`/category/${t}`),wr=async t=>await c.post(`/category/${V.user._id}`,t,{headers:{Authorization:`Bearer ${V.token}`}}),br=async t=>await c.delete(`/category/${t}/${V.user._id}`,{headers:{Authorization:`Bearer ${V.token}`}}),kr=async t=>await c.post(`/category/${t.get("_id")}/${V.user._id}`,t,{headers:{Authorization:`Bearer ${V.token}`}}),Er=async t=>await c.get("/category/getAllCategoryNotRequest/"+t),Cr=async t=>await c.get(`/categorys/search?value=${t}`),Ar=async(t,a)=>await c.post("/rating/"+t,a),Nr=async t=>await c.post("/category/changeLatest",t),ae=x("category/getAllcate",async t=>{const{data:a}=await fr(t);return a}),fe=x("category/getOne",async t=>{const{data:a}=await vr(t);return a}),qe=x("getAll/Category",async t=>{const{data:a}=await Er(t);return a}),_r=x("add/Addcate",async t=>{const{data:a}=await wr(t);return a}),Sr=x("delete/DeleteCate",async t=>{const{data:a}=await br(t);return a}),Tr=x("update/Category",async t=>{const{data:a}=await kr(t);return a}),wt=()=>{const{data:t}=I(s=>s.category.category),a=I(s=>s.category.isLoading);I(s=>s.category.isError);const r=H();return l.exports.useEffect(()=>{r(ae(1))},[]),a?e("div",{className:"seriLoading",children:"Loading..."}):i("div",{children:[i("div",{className:"flex justify-between items-center",children:[e(B,{level:2,underline:!0,style:{color:"#fff"},strong:!0,className:"uppercase",children:"Xem Nhi\u1EC1u"}),e(k,{to:"/loadmore","aria-label":"T\u1EA3i th\xEAm n\u1ED9i dung",children:i("div",{className:"text-[16px] text-[#fff] flex lg:text-[20px] md:text[18px] gap-3",children:[e("span",{className:"underline",children:"See More"}),e("span",{children:e(zt,{title:"T\u1EA3i th\xEAm n\u1ED9i dung..."})})]})})]}),e(vt,{type:"category",gutter:[16,16],child:t})]})},Ir=()=>{const{data:{data:t}}=z(P+"/category/latest");return i("div",{children:[e("h2",{className:"text-white category text-md md:text-md pl-2 mb-2 mx-2 my-3 border-l-4  font-sans font-bold border-teal-400 dark:text-gray-200",children:"M\u1EDBi C\u1EADp Nh\u1EADt"}),e(ut,{settings:Ba,content:t&&t.map((a,r)=>{const s=a.products[a.products.length-1];return e("div",{children:i("div",{className:"w-full ",children:[e("div",{className:"relative group ",children:i(k,{to:`/q/${a._id}`,className:"block mx-2",children:[e("div",{className:"relative h-[200px] w-[120px] custom-slide md:w-[180px] lg:w-[220px]",children:e(Y,{src:O(280,a.linkImg),alt:a.name,className:"w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg"})}),e("div",{style:{background:"linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"},className:"absolute top-2 left-2 text-white text-xs rounded-[4px] px-1 md:px-2 py-1 font-medium",children:s?`T\u1EADp ${s.seri}`:e(ft,{})}),e("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e(et,{className:"text-white text-5xl"})})]})}),e("div",{className:"mt-4",children:e(k,{to:"/q/"+a._id,children:e("div",{style:{color:"#999"},className:"text-sm md:text-md lg:text-md",children:a.name})})})]})},a._id)})})]})};function Ae({children:t}){const[a,r]=l.exports.useState(!1),s=l.exports.useRef(null);return l.exports.useEffect(()=>{const n=new IntersectionObserver(o=>{o[0].isIntersecting&&r(!0)},{threshold:1});return s.current&&n.observe(s.current),()=>{s.current&&n.unobserve(s.current)}},[]),i("div",{children:[a&&t,e("div",{ref:s,style:{height:"1px"}})]})}p.video``;p.div`
  padding-bottom: 60%;
  @media (min-width: 768px) {
    padding-bottom: 50%;
  }
  @media (min-width: 1024px) {
    padding-bottom: 45%;
  }
`;const Lr=l.exports.memo(()=>{const{state:t}=l.exports.useContext($);return i("div",{className:t?"p-3":"mt-3",children:[e("div",{className:"d-flex",children:e("div",{className:" sm:w-full",children:i("div",{className:"h-full",children:[e(Ir,{}),e(yr,{})]})})}),e(Ae,{children:e(wt,{})})]})}),Ne=({ogTitle:t,description:a,imageUrl:r,mainTitle:s,title:n,...o})=>i(Bt,{children:[e("title",{children:n}),e("meta",{property:"og:title",content:t}),e("meta",{property:"og:description",content:a}),e("meta",{property:"og:image",content:r}),e("meta",{name:"description",content:a}),Object.keys(o).map(d=>e("meta",{...o[d]},d))]}),Dr=()=>i(T,{children:[e(Ne,{ogTitle:"Ho\u1EA1t H\xECnh Trung Qu\u1ED1c",description:"\u0110\u1EA5u Ph\xE1 Th\u01B0\u01A1ng Khung Ph\u1EA7n 5",imageUrl:O(200,"https://res.cloudinary.com/daz3lejjo/image/upload/w_100/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),title:"Ho\u1EA1t H\xECnh 3D"}),e(Lr,{})]}),E=L(),Pr=async t=>await c.get(`products?page=${t}`),$r=async t=>await c.get(`product/${t}`),Rr=async t=>await c.delete(`/product/${t}/${E.user._id}`,{headers:{Authorization:`Bearer ${E.token}`}}),zr=async t=>await c.post(`/product/${E.user._id}`,t,{headers:{Authorization:`Bearer ${E.token}`}}),Br=async t=>await c.put(`/product/${t.get("_id")}/${E.user._id}`,t,{headers:{Authorization:`Bearer ${E.token}`}}),Or=async t=>await c.post("/products/creating",t,{}),bi=async t=>await c.post(`/products/deleteMultiple/${E.user._id}`,t,{headers:{Authorization:`Bearer ${E.token}`}}),Fr=async t=>await c.get(`/category/products/${t}`),ki=async(t,a)=>await c.post(`/product/pushlist/${t}/${E.user._id}`,a,{headers:{Authorization:`Bearer ${E.token}`}}),Ei=async(t,a)=>await Oa.post(`/product/abyss/${t}/${E.user._id}`,a,{headers:{Authorization:`Bearer ${E.token}`}}),Ci=async t=>await c.post(`/product/approve/${t}/${E.user._id}`,null,{headers:{Authorization:`Bearer ${E.token}`}}),Ai=async t=>await c.post(`/product/approve/cancel/${t}/${E.user._id}`,null,{headers:{Authorization:`Bearer ${E.token}`}}),jr=async t=>await c.get(`/product/filter?c=${t}`),Vr=async t=>await c.get(`/product/v?name=${t}`),Ni=async()=>await c.post(`/products/clear/${E.user._id}`,null,{headers:{Authorization:`Bearer ${E.token}`}}),We=x("product/getProducts",async t=>{const{data:a}=await Pr(t);return{product:a.data,length:a.length}}),ve=x("product/getProduct",async t=>{const{data:a}=await $r(t);return a}),Mr=x("product/deleteProduct",async t=>{const{data:a}=await Rr(t);return a}),Ur=x("product/addProduct",async t=>{const{data:a,status:r}=await zr(t);return a}),Hr=x("product/editProduct",async t=>{const{data:a}=await Br(t);return a}),qr=x("product/importDataFile",async t=>{const{data:a}=await Or(t);return a}),bt=x("product/getAllProductDataByCategory",async t=>{const{data:a}=await Fr(t);return a}),Wr=x("product/filter",async t=>{const{data:a}=await jr(t);return a}),Gr=x("product/Search",async t=>{const{data:a}=await Vr(t);return a}),Yr=t=>t.product.getOneProduct,Jr=t=>t.product.getAllProductByCategory,_i=t=>t.category.category,Kr=t=>t.user.value,Si=t=>t.user.value,Xr=p.button`
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
`,Zr=l.exports.memo(({seriProduct:t})=>e(S,{gutter:14,items:"center",children:t.map((a,r)=>a.isApproved==!0?e(y,{xl:3,lg:3,md:4,sm:4,xs:6,className:"mt-2",children:e(tt,{className:({isActive:s,isPending:n})=>s?"activeSeri":"",to:"/d/"+a._id+`?c=${a.category}`,children:e(Xr,{className:a.seri&&"w-full",children:a.seri&&"T\u1EADp "+a.seri})})},r):"")})),D=l.exports.memo(({children:t,...a})=>e(Ot,{...a,children:t})),J=t=>U.success(t),kt=t=>U.warning(t),F=t=>U.error(t),Qr=({item:t,id:a})=>{var w;const r=H(),{Auth:s,user:n,isLoggedInState:o}=l.exports.useContext($),[d,m]=l.exports.useState(!1),u={user:s?s.user._id:"",product:a};l.exports.useEffect(()=>{var v,C;const f=(v=n==null?void 0:n.cart)==null?void 0:v.find(N=>N.product._id===a);m(((C=f==null?void 0:f.product)==null?void 0:C._id)===a)},[n.cart,a]);const h=()=>{!s&&o==!1?F("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp!"):d?kt("\u0110\xE3 t\u1ED3n t\u1EA1i trong y\xEAu th\xEDch!"):(r(ge(u)),m(!0),J("Th\xEAm v\xE0o danh s\xE1ch y\xEAu th\xEDch th\xE0nh c\xF4ng!"))};return i("div",{className:"lg:flex md:flex-row items-center @screen md:justify-between flex flex-col",children:[e(k,{to:"/q/"+((w=t==null?void 0:t.category)==null?void 0:w._id),className:"text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e(B,{level:4,style:{color:"#fff"},className:"uppercase",children:t.name})}),e(D,{style:{color:"#fff"},icon:e(re,{}),disabled:d,className:"flex items-center justify-center",onClick:()=>h(),children:d?"\u0110\xE3 y\xEAu th\xEDch":"Th\xEAm v\xE0o y\xEAu th\xEDch"})]})},en=({getOneProductDetail:t})=>i(T,{children:[e("div",{style:{color:"#fff",margin:"10px 0"},children:t.seri?t.trailer?"Trailer "+t.seri:"T\u1EADp "+t.seri:""}),e("div",{className:"des text-[#999]",children:i("p",{children:["Ng\xE0y \u0111\u0103ng:"," ",Ft(t.uploadDate).format("LTS DD-MM-YYYY")]})}),e("div",{style:{color:"#fff",margin:"10px 0"},className:"des",children:i("div",{className:"text-[#999] flex items-center gap-2 lg:justify-start @screen justify-center",children:[e(jt,{}),t.view*36," L\u01B0\u1EE3t xem"]})}),i("div",{className:"p-3 mt-3 mb-3 text-white rounded  flex items-center lg:justify-start @screen justify-center",style:{background:"rgb(0 0 0 / 47%)"},children:["Copyright video:",e("div",{className:"text-slate-400",children:" "+t.copyright})]})]}),tn=p.div`
display:flex;
gap:0 10px;

@media(max-width:768px){
  display:block;
}
@media(min-width:1024px){
  display:flex;
}
`,an=p.div`
`,rn=p.div`
font-size:13px;
@media(min-width: 1024px){
  font-size:15px;
}
`,nn=p.div`
padding:5px;
@media(min-width: 1024px){
  padding: 15px;
}
`,sn=p.div`
padding-bottom:62%;

@media(min-width: 768px){
  padding-bottom:52%;
}

@media(min-width: 1024px){
  padding-bottom:42%;
}
`,on=p.div`
 
`,we=l.exports.memo(({textColor:t,orientation:a,children:r,...s})=>e(Vt,{style:{color:t,borderBlockStartColor:"#999"},className:"text-white",orientation:a,...s,children:r})),ln=t=>t.product.isLoading,dn=()=>{var C,N,R,K,X;const t=I(Jr),a=I(Yr),r=I(ln),[s,n]=l.exports.useState(""),{id:o}=le(),{c:d}=Mt.parse(window.location.href.split("?")[1]),[m,u]=l.exports.useState("dailyMotion"),h=H(),[w,f]=l.exports.useState(""),v=Ee();return l.exports.useEffect(()=>{window.scrollTo(0,0)},[v]),l.exports.useEffect(()=>{h(ve(o)),h(bt(d));const Z=De.AES.decrypt(a.dailyMotionServer?a.dailyMotionServer:"","24062003").toString(De.enc.Utf8);f(Z),n(Z)},[o,a.dailyMotionServer]),i(T,{children:[e(Ne,{ogTitle:a.name,description:(C=a.category)==null?void 0:C.des,imageUrl:(N=a.category)==null?void 0:N.linkImg}),e("div",{className:"flex justify-center mt-4",style:{gap:"10px"},children:e(nn,{className:"col-md-12",children:a&&(r?e(xt,{size:"large",children:void 0}):i(T,{children:[e(sn,{className:"d-flex justify-content-center relative",children:a.dailyMotionServer!==""&&a.server2!==""?e("iframe",{allowFullScreen:!0,title:"vimeo-player",className:"absolute",src:s,style:{width:"100%",height:"100%"}}):a.trailer!==""?e("iframe",{title:"vimeo-player",className:"absolute",style:{width:"100%",height:"100%"},src:a.trailer+"?autoplay=1&mute=1"}):e(Ut,{icon:"Hiiiii!!",className:"absolute inset-0 text-white mt-5",subTitle:"Phim n\xE0y \u0111ang trong qu\xE1 tr\xECnh c\u1EADp nh\u1EADt video. Vui l\xF2ng quay l\u1EA1i sau."})}),i(on,{className:"mt-4 rounded",children:[e(we,{textColor:"#fff",orientation:"center",className:"text-white md:text-sm lg:text-base text-sm underline",children:"Ch\u1ECDn server:"}),i("div",{className:"md:text-sm lg:text-base text-sm flex items-center justify-center gap-4 px-4 py-3",children:[e(D,{disabled:a.link==="",onClick:()=>{u("link1"),n(a.link)},className:`text-white cursor-pointer ${m==="link1"?"activeServer":""}`,children:"#S1"}),e(D,{onClick:()=>{u("server2"),n(a.server2)},disabled:!a.server2,className:`${a.server2?" text-white cursor-pointer":""} ${m==="server2"?"activeServer":""}`,children:"#S2"}),e(D,{onClick:()=>{u("dailyMotion"),n(w)},disabled:!a.dailyMotionServer,className:`${a.dailyMotionServer?"text-white cursor-pointer":""} ${m==="dailyMotion"?"activeServer":""}`,children:"#S3"})]})]}),i(tn,{className:"mt-2",children:[e(an,{className:"w-3/12",children:e(Y,{className:"md:block hidden",alt:"\u1EA2nh"+((R=a.category)==null?void 0:R.name),src:O(200,a&&(((K=a.category)==null?void 0:K.linkImg)||a.image))})}),i(rn,{className:"lg:w-9/12 md:w-full text-center lg:text-start",children:[e(Qr,{item:a,id:o}),e(en,{getOneProductDetail:a}),e(Zr,{seriProduct:t}),i("div",{className:"text-[#999] lg:text-md sm:text-sm mt-2 mb-2",children:[e(we,{textColor:"#fff",orientation:"left",children:"M\xF4 t\u1EA3:"}),a&&((X=a.category)==null?void 0:X.des)]})]})]})]}))})})]})},cn=()=>i(W.Fragment,{children:[e(l.exports.Suspense,{fallback:e(mr,{}),children:e(dn,{})}),e(Ae,{children:e(wt,{})})]}),un=({id:t})=>{const{data:a,isLoading:r}=z(P+"/category/getAllCategoryNotRequest/"+t),s=Ee();return l.exports.useEffect(()=>{window.scrollTo(0,0)},[s]),r?e(xt,{size:void 0,children:void 0}):i(W.Fragment,{children:[e(B,{level:3,strong:!0,underline:!0,style:{color:"#fff"},className:"underline my-2",children:"Li\xEAn quan"}),e(vt,{type:"category",gutter:[16,16],child:a})]})},pn=({data:t,isLoading:a})=>{var r;return a?e("div",{className:"seriLoading",children:"Loading...."}):e("div",{className:"bg-[#9b9b9b1f] h-[174px] overflow-y-scroll p-3 rounded-sm seriCategory",children:e(S,{gutter:[16,16],children:((r=t==null?void 0:t.products)==null?void 0:r.length)>0&&(t==null?void 0:t.products)?t.products.map((s,n)=>s.isApproved==!0?e(y,{lg:3,md:4,sm:5,xs:6,style:{textAlign:"center"},children:e(k,{to:"/d/"+s._id+`?c=${s.category}`,children:!s.dailyMotionServer&&s.trailer?e(Ge,{children:s.seri}):e(Ge,{className:"w-full text-white",variant:"ghost",size:"sm",children:s.seri})})},n):""):e(yt,{})})})},mn=l.exports.memo(({id:t,averageRating:a,totalRatings:r})=>i("span",{className:"text-white flex items-center gap-2",children:[e(Ht,{className:"mt-2 mb-2",value:a,onChange:async n=>{const o={rating:n};try{await Ar(t,o)}catch(d){console.error("L\u1ED7i khi l\u01B0u \u0111\xE1nh gi\xE1:",d)}}}),r>0?e("div",{className:"relative pt-1",children:e("div",{className:"flex items-center justify-between",children:e("div",{children:i("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200",children:["Vip ",a.toFixed(2),"/",r*115," T\u1ED5ng s\u1ED1 l\u01B0\u1EE3t \u0111\xE1nh gi\xE1"]})})})}):""]})),hn=()=>{const{id:t}=le(),a=H(),r=I(n=>n.category.details),s=I(n=>n.category.isLoading);return l.exports.useEffect(()=>{a(fe(t))},[t]),l.exports.useEffect(()=>{r!=null&&r.name&&(document.title=r.name)},[r]),i(T,{children:[e(Ne,{ogTitle:r.name,description:r==null?void 0:r.des,imageUrl:r==null?void 0:r.linkImg}),r&&e("div",{children:i("div",{style:{color:"#fff"},children:[i("div",{className:"md:flex lg:flex block gap-2 ",children:[e("div",{className:"mb-5 lg:w-3/12 md:w-3/12 md:h-full h-52 ",children:e("div",{className:"h-full w-full flex justify-center ",children:e(Y,{className:"object-contain w-full h-full flex-grow",src:O(300,r.linkImg),alt:r.name})})}),i("div",{className:"lg:w-9/12 md:w-9/12",children:[e("div",{className:"category text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200",children:e(k,{to:"/q/"+r._id,children:e(B,{type:"secondary",level:3,className:"md:text-[18px] lg:text-[20px] sm:text-[15px]",style:{textTransform:"capitalize",color:"#fff"},children:r.name})})}),i("div",{className:"loai des text-[12px] md:text-[13px] lg:text-[14px]",children:[e("b",{children:r.anotherName}),e("br",{}),e(A,{style:{color:"#999"},children:"T\xE1c gi\u1EA3 :..."}),e("br",{}),e(A,{style:{color:"#999"},children:"Qu\u1ED1c gia : Chinese"}),e("div",{children:i(A,{style:{color:"#999"},children:["Th\u1EC3 lo\u1EA1i :"," ",e("span",{className:"p-1 bg-gray-500 rounded-sm",children:r.type})]})}),e("div",{children:i(A,{style:{color:"#999"},children:["T\u1ED5ng S\u1ED1 t\u1EADp: ",r._id==t?r.sumSeri:""]})}),e("div",{children:e(A,{style:{color:"#999"},children:r.time+" "})}),e("div",{children:i(A,{style:{color:"#999"},children:["N\u0103m ph\xE1t h\xE0nh : ",r.year]})}),e("div",{}),e(ht,{color:"#2db7f5",className:"my-2",children:r.isActive==0?"\u0110ang chi\u1EBFu":"Ho\xE0n th\xE0nh"}),i("div",{id:"toast-simple",className:"flex mb-2 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800",role:"alert",children:[e(at,{}),e("div",{className:"ps-4 text-sm font-normal",children:"Vietsub l\xFAc 10h00 Th\u1EE9 4 h\xE0ng tu\u1EA7n"})]})]}),e(pn,{isLoading:s,data:r}),e(mn,{id:t,averageRating:r.averageRating,totalRatings:r.totalRatings})]})]}),i("div",{className:"text-[#999] lg:text-[15px] md:text[14px] text-[13px]",children:[e(we,{textColor:"#fff",orientation:"left",children:"N\u1ED8I DUNG PHIM"}),r.des]})]})},r._id)]})},gn=()=>{const{id:t}=le();return i(T,{children:[e(hn,{}),e(Ae,{children:e(un,{id:t})})]})};const Ye=l.exports.memo(({title:t,src:a,size:r,...s})=>e("div",{title:t,style:{cursor:"pointer"},children:e(qt,{size:r,color:"default",src:a,...s})})),be=({isLoggedInState:t,style:a})=>{var d,m,u,h,w;const r=L(),s=G(),n=H(),o=()=>{r?s("/cart/user"):F("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp!")};return e(W.Fragment,{children:r&&t?e(Pe,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e($e,{content:i(T,{children:[e(k,{to:"/profile",children:i(S,{style:{lineHeight:"0"},align:"middle",gutter:12,children:[e(y,{children:e(Wt,{})}),e(y,{children:e(A,{level:6,className:"auth",children:"Your profile"})})]})}),i(S,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e(y,{children:e(re,{})}),e(y,{children:e(A,{style:{cursor:"pointer"},onClick:o,className:"auth",children:"Saved"})})]}),r.user&&((d=r==null?void 0:r.user)==null?void 0:d.role)>=1&&e(k,{to:"/dashboard",children:i(S,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e(y,{children:e(ne,{})}),e(y,{children:e(A,{className:"auth",children:"Admin"})})]})}),i(S,{style:{lineHeight:"0"},align:"middle",gutter:[12,12],children:[e(y,{children:e(rt,{})}),e(y,{children:e(A,{style:{cursor:"pointer"},onClick:()=>gr(n,s),children:"Logout"})})]})]}),title:e(B,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:(m=r==null?void 0:r.user)==null?void 0:m.username}),placement:"bottomLeft",trigger:"click",children:e(Ye,{className:"text-center",title:(u=r==null?void 0:r.user)==null?void 0:u.name,src:O(50,r.user&&((h=r==null?void 0:r.user)==null?void 0:h.image)),size:"sm"})})}):e(Pe,{theme:{token:{colorBgBase:"#323232",colorTextBase:"#fff"}},children:e($e,{content:e(k,{to:"/signin",children:i(S,{align:"middle",gutter:[12,12],children:[e(y,{children:e(Gt,{})}),e(y,{children:e(A,{level:6,className:"auth",children:"Signin"})})]})}),title:e(B,{style:{textTransform:"uppercase"},type:"secondary",level:5,children:"Hi"}),placement:"bottomLeft",trigger:"click",children:e(Ye,{title:(w=r==null?void 0:r.user)==null?void 0:w.name,src:void 0,style:a,size:40,icon:e(ne,{})})})})})},{Content:xn,Sider:yn,Header:fn,Footer:vn}=pe,wn=()=>{var n;const t=Os.map((o,d)=>{var u;const m=String(d+1);return{key:`${m+1}`,icon:o.icon,label:e(k,{to:o.path,children:o.name}),children:(u=o==null?void 0:o.children)==null?void 0:u.map((h,w)=>{const f=w+1;return{key:`subitem-${m}-${f}`,icon:h.icon,label:e(k,{to:h.path,children:h.name})}})}}),{isLoggedInState:a}=(n=l.exports.useContext($))!=null?n:{},[r,s]=l.exports.useState(!1);return i(pe,{style:{minHeight:"100vh"},children:[i(yn,{trigger:null,collapsible:!0,collapsed:r,className:"overflow-y-auto ",style:{height:"100%",position:"fixed"},children:[e("div",{className:"p-4 bg-[#fff]",children:e("div",{className:"h-8 w-full bg-[#ddd] rounded"})}),e(me,{style:{height:"100%"},theme:"light",mode:"inline",defaultSelectedKeys:["1"],items:t})]}),i(pe,{style:{marginLeft:r?80:200},children:[e(fn,{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",padding:0},children:i(S,{align:"middle",justify:"space-between",children:[e(y,{children:e(D,{type:"text",icon:r?e(nt,{}):e(st,{}),onClick:()=>s(!r),style:{fontSize:"16px",width:64,height:64},children:void 0})}),e(y,{children:e(k,{to:"/",children:"Home Page"})}),e(y,{style:{textAlign:"center"},span:1,children:e(be,{isLoggedInState:a,style:void 0})})]})}),e(xn,{style:{padding:"24px",minHeight:"calc(100vh - 64px)",overflow:"auto"},children:e(it,{})}),e(vn,{children:"\xA9 2023 copyright | PH ANG"})]})]})},bn=t=>{const a=L();try{return a?a.user.role==0?e(Re,{to:"/"}):t.children:e(Re,{to:"/"})}catch{return e("div",{className:"text-light container text-center",children:e(k,{to:"/signin",children:"\u0110\u0103ng nh\u1EADp"})})}},kn=p.div`
color:#999;
font-weight:500;
`,En=p.div`
color: rgb(255, 214, 99);
font-weight:500;
`,Cn=p.div`
display: flex;
align-items: center;
justify-content: center;
gap:0 5px;
 
&>a{
    color: rgb(255, 214, 99) !important;
    font-weight:500;
}
`;p.div`

`;const An=l.exports.memo(({data:t,icons:a,id:r,background:s,...n})=>e(me,{className:"h-full",style:{background:s},children:t&&t.map((o,d)=>l.exports.createElement(me.Item,{...n,icon:o.icon?o.icon:a[d],key:d},r==!0?e(tt,{to:o.path=="/"?o.path:o.path+`/${o._id}`,children:o.name},d):e(k,{to:o.path,children:o.name})))})),Nn=p.div`
  display: none;
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
`;const _n=p.div`
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
`,Sn=p.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`,Tn=p.div`
  font-size: 11px;
  font-weight: 400;
`,In=p.div`
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
`,Ln=p.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
  justify-content: ${t=>t.justify};
`;p.div``;p.div`
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
`;p.div`
  color: #d9d9d9;
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;p.div`
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
`;const Dn=p.div`
  display: block;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`,ke=({data:t})=>t.length>0?e("div",{className:"absolute top-[50px] left-0 w-full flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border",children:e("div",{className:"p-4 flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700",children:t.map((a,r)=>e(k,{to:`/q/${a._id}`,children:e("div",{className:"flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:a.name})},a._id))})}):e(T,{}),Pn=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),$n=[e(Xt,{}),e(Zt,{}),e(rt,{}),e(ot,{})],Rn=()=>{var Le;const{Auth:t,isLoggedInState:a,state:r,handleClick:s}=(Le=l.exports.useContext($))!=null?Le:{},[n,o]=l.exports.useState(!1),[d,m]=l.exports.useState(0),[u,h]=l.exports.useState("20px 10px"),[w,f]=l.exports.useState(!1),v="left",[C,N]=l.exports.useState(""),[R,K]=l.exports.useState([]),X=()=>{f(!0)},Z=()=>{f(!1)};window.addEventListener("scroll",()=>{const _=window.pageYOffset;o(d>_),m(_),window.scrollY>10?h("10px 5px"):h("20px 10px")});const At=G(),_e=()=>{t?At("/cart/user"):F("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp!")},Se=Yt.exports.debounce(async _=>{const{data:ce}=await Cr(_);K(ce)},500),Te=async _=>{N(_),Se(_)};l.exports.useEffect(()=>()=>{Se.cancel()},[C]),l.exports.useEffect(()=>{o(!0)},[]);const Ie=a?zs:Rs;return i(W.Fragment,{children:[i(S,{align:"middle",justify:"space-between",className:`${r?"w-11/12":"w-10/12"} lg:flex hidden z-[100] fixed right-0`,style:{top:n?"0":"-25%",padding:u,backgroundColor:"#00000038"},children:[e(y,{span:1,children:e(Dn,{className:"text-[21px] md:text-[23px] lg:text-[25px]",onClick:s,children:r?e(st,{}):e(nt,{})})}),i(y,{span:6,className:"relative",children:[e(Je,{style:{boxShadow:"#333 0px 2px 10px"},onChange:_=>Te(_.target.value),placeholder:"Search..."}),e(ke,{data:R})]}),e(y,{span:16,children:i(S,{justify:"center",align:"middle",children:[e(S,{children:Ie.map((_,ce)=>e(y,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:e(k,{style:{color:"#fff",textDecoration:"none",margin:"0 20px"},to:_.path,children:_.name})},ce))}),e(y,{children:i(Cn,{className:"text-[15px] lg:text-[17px] md:text[16px]",children:[e(kn,{children:"Li\xEAn h\u1EC7 qc tele: "}),i("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:[e(En,{}),"@PH ANG"]})]})}),e(y,{className:"ml-5 text-[15px] lg:text-[17px] md:text[16px]",style:{marginLeft:"50px"},onClick:_e,children:e(re,{className:"__ text-yellow-500"})})]})}),e(y,{span:1,className:"text-end",children:e(be,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",textAlign:"center"}})})]}),i("div",{className:"navbar_mb lg:w-10/12 w-full absolute right-0 z-10",children:[i(S,{align:"middle",justify:"space-between",className:"navbar bgNav mb",children:[e(y,{children:e(Jt,{className:"text-white",onClick:X})}),e(y,{children:e("div",{className:"ml-5 relative",onClick:_e,children:e(re,{className:"__ text-yellow-500"})})}),i(y,{span:16,className:"relative",children:[e(Je,{onChange:_=>Te(_.target.value),placeholder:"Search..."}),e(ke,{data:R})]}),e(y,{children:e(be,{isLoggedInState:a,style:{backgroundColor:"#fde3cf",color:"#f56a00",lineHeight:"30px"}})})]}),e(Kt,{width:200,title:"Drawer",placement:"left",closable:!1,onClose:Z,open:w,closeIcon:!0,className:"relative z-10",children:e(An,{icons:$n,id:!1,background:"#fff",data:Ie})},v)]})]})},zn=()=>e(T,{children:e(W.Fragment,{children:i("div",{className:"ft text-white",children:[e("link",{rel:"stylesheet",integrity:"sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=",crossOrigin:"anonymous"}),e("footer",{className:"footer",children:e("div",{className:"footer-bottom footer-border-top light py-3",children:e("div",{className:"text-center",children:i("p",{className:"m-0",children:["\xA9 2023 copyright"," ",e("a",{href:"#",className:"text-reset",children:"| PH ANG"})]})})})})]})})}),Bn=()=>e("div",{className:"md:mt-[50px] lg:mt-[50px] lg:flex hidden justify-center text-white ",children:e("div",{className:"w-full",children:e("div",{className:"card p-3 ",style:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:i("div",{className:"card-body",children:[i("div",{children:[e("div",{className:"d-flex justify-center",children:e("img",{src:O(80,"https://res.cloudinary.com/daz3lejjo/image/upload/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg"),alt:"\u0110\u1EA5u ph\xE1 th\u01B0\u01A1ng khung ph\u1EA7n 5",className:"avatar-md rounded-circle img-thumbnail"})}),i("div",{className:"flex-1",children:[e("h5",{className:"font-size-16 mb-1 mt-1",children:e(k,{to:"#",className:"text-light",children:"Admin Contact"})}),e("span",{className:"badge badge-soft-success mb-0",children:"Web Developer"})]})]}),i("div",{className:"mt-3 pt-1 iconContact",children:[i("p",{className:"mb-0",children:[e(Qt,{}),e("a",{href:"https://www.facebook.com/profile.php?id=61556232330775",children:"Facebook"})]}),i("p",{className:"mb-0 mt-2",children:[e(ea,{}),e("a",{href:"https://www.tiktok.com/@tieu_loli",children:"Tiktok"})]})]})]})})})}),On=()=>{const{state:t}=l.exports.useContext($)||{},a=t?"w-1/12":"w-2/12";return e(Nn,{className:a,children:i(In,{className:a,children:[e(Ln,{justify:t?"center":"start",children:i(_n,{className:t?"hidden":"block text-white",children:[e(k,{to:"/",children:e(Sn,{children:"Hhtrungquoc.tv"})}),e(k,{to:"/",children:e(Tn,{children:"tromphim.netify.app"})})]})}),e(Bn,{})]})})},Fn=p.div`
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
`,jn=({children:t,...a})=>{const{background:r}=l.exports.useContext(de)||{};return e(Fn,{background:r&&r.data.url,...a,children:t})},Vn=()=>{const{state:t}=l.exports.useContext($)||{};return i(jn,{className:"text-start",children:[e("div",{children:e(Rn,{})}),i("div",{className:"containers flex",children:[e("div",{className:t?"md:w-1/12 md:block none":"lg:w-2/12 md:block none",children:e(On,{})}),e("div",{className:`${t?"md:w-11/12 w-full":"lg:w-10/12 w-full"} p-2`,children:e(it,{})})]}),e("div",{children:e(zn,{})})]})},g=({children:t})=>e(l.exports.Suspense,{fallback:e(gt,{}),children:t}),Ke=l.exports.memo(({columns:t,dataSource:a,...r})=>e(lt,{columns:t,dataSource:a,...r})),Mn=l.exports.memo(({name:t,label:a,control:r,rules:s,...n})=>i("div",{className:"mb-3",children:[e(A,{htmlFor:t,children:a}),e(ta,{name:t,control:r,rules:s,defaultValue:"",render:({field:o})=>e(aa,{placeholder:a,...o,...n})})]})),Un=l.exports.memo(({title:t,cancelText:a,okText:r,onConfirm:s,children:n,...o})=>e(ra,{title:t,onCancel:()=>{F("H\u1EE7y")},onConfirm:s,okText:r,cancelText:a,...o,children:n})),Hn=()=>{const{weeks:t}=l.exports.useContext(de),{handleSubmit:a,control:r}=dt(),s=async(u,h)=>{const w={categoryId:h};try{(await Ma(u,w)).data&&J("Delete Success")}catch{F("Delete Failure")}},n=async u=>{await Fa(u)},o=async u=>{await ja(u)},d=u=>{var f;const h=[{title:"ID",dataIndex:"_id",key:"_id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"operation",render:(v,C)=>e(T,{children:e(Un,{title:"Delete the category",onConfirm:()=>s(u.key,C._id),okText:"Yes",cancelText:"No",children:e(D,{type:"text",shape:"circle",className:"ml-2",children:e(na,{})})})})}],w=((f=t.find(v=>v._id===u.key))==null?void 0:f.category)||[];return e(Ke,{columns:h,dataSource:w,pagination:!1})},m=t&&t.map((u,h)=>({key:u._id,name:u.name,action:i(T,{children:[e(k,{to:`/dashboard/week/edit/${u._id}`,children:e(D,{type:"primary",children:"Edit"})}),e(D,{onClick:()=>o(u._id),className:"ml-1",children:"Delete"})]})}));return i(T,{children:[e("form",{onSubmit:a(n),children:i(S,{gutter:4,align:"middle",justify:"center",children:[e(y,{span:22,children:e(Mn,{name:"name",label:"Theo tu\u1EA7n",control:r,rules:void 0})}),e(y,{span:2,children:e(D,{htmlType:"submit",className:"mt-3",type:"primary",children:"Th\xEAm"})})]})}),e(Ke,{columns:Ra,dataSource:m,expandable:{expandedRowRender:d,defaultExpandedRowKeys:["0"]}})]})},qn=()=>i("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]",children:[e("h1",{className:"text-9xl font-extrabold text-white tracking-widest",children:"404"}),e("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute",children:"Page Not Found"}),e("button",{className:"mt-5",children:i("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring",children:[e("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),e("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current",children:e(k,{to:"/",children:"Go Home"})})]})})]}),Wn=p.button`
background:linear-gradient(to right, #652EEE, #040F75)
`,Gn=p.input`
width: 100%;
padding: 10px;
border-radius: 10px;
background: transparent;
border: 1px solid #999;
font-size: 12px;
outline:none;
color: #fff;
`,Yn=p.form``,Jn=p.div`
padding: 0 20px;
@media (min-width: 768px){
  padding: 0 40px;
}
@media (min-width: 1024ox) {
  padding: 0 60px;
}
`,Kn=p.div`
color: #fff;
margin-top:20px;
font-size:25px;
@media (min-width: 768px){
  margin-top:30px;
}
@media (min-width: 1024ox) {
  margin-top:40px;
`,Xn=p.div`
margin: 15px 0;
color: #999;
font-size:13px;
`,Zn=p.div`
cursor: pointer;
`,Qn=p.div`
padding: 15px 5px;
border: 1px solid #fff;
font-style: italic;
`,es=p.div`
border-bottom: 1px dashed  #fff;
`,ts=p.div`

`,Et=l.exports.memo(({onSubmit:t,formTitle:a,formDescription:r,submitButtonText:s,formIntro:n,formHeader:o,checkedAccount:d,handleMessage:m,redirect:u,array:h,schemaPage:w})=>{const{register:f,handleSubmit:v,formState:{errors:C}}=dt({resolver:sa(w)});return e("div",{className:"h-screen relative z-0",children:i(Jn,{className:"g-6 flex flex-wrap justify-center w-full items-center absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4",style:{transform:"translate(-50%,-50%)"},children:[i("div",{className:"w-8/12 items-center text-white hidden lg:block md:hidden",children:[e(ts,{className:"text-[50px] ",children:o}),i("div",{className:"flex items-center",children:[e(Qn,{className:"w-2/12",children:n}),e(es,{className:"w-10/12"})]})]}),i("div",{className:"md:w-8/12 lg:w-4/12 w-full lg:p-5 md:p-4 p-3",style:{background:"rgba(248, 248, 248, 0.04)",borderRadius:" 5px"},children:[i("div",{children:[e(Kn,{children:a}),e(Xn,{children:r})]}),i(Yn,{onSubmit:v(t),children:[h&&h.map((N,R)=>e("div",{className:"relative lg:mb-6 md:mb-4 mb-2","data-te-input-wrapper-init":!0,children:i("div",{children:[e(Gn,{disabled:N.disable,style:{background:`${N.disable?"#99979742":""}`},type:N.type,...f(`${N.field}`),placeholder:N.field,className:"placeholder:capitalize"}),C&&C[N.field]&&e("div",{className:"text-sm text-pink-600 mt-1",children:C[N.field].message})]})},R)),e("div",{className:"lg:mb-6 md:mb-5 mb-4",children:e(Qe,{to:"/forgot-password",children:i("div",{className:"text-center text-white text-sm font-medium text-primary-600 hover:underline text-primary-500",children:["Forgot password?"," "]})})}),e(Wn,{type:"submit",className:"w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600",children:s}),e("div",{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:i("p",{className:"mx-4 mb-0 text-center text-white text-[12px]",children:[" ","OR"]})}),e(Zn,{className:"flex justify-center",onClick:m,children:e(Y,{style:{width:"30px",height:"30px"},src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:""})}),e("div",{className:"lg:mb-6 md:mb-4 mb-2 text-center lg:mt-5 md:mt-3 mt-2 text-slate-400 ",children:e(k,{to:u,className:"text-sm text-primary-600 hover:underline text-primary-500",children:d})})]})]})]})})}),as=[{type:"email",field:"email",disable:!1}],rs=()=>{const t=G(),a=ct().shape({email:he().required().email()});return e(Et,{onSubmit:async n=>{const o=await Xa(n);o.data.success?(J(o.data.message),t("/signin")):F(o.data.message)},formTitle:"Forgot Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:()=>{U.success("\u0110ang c\u1EADp nh\u1EADt!")},redirect:"/forgot-password",array:as,schemaPage:a})},ns=[{type:"password",field:"password",disable:!1},{type:"password",field:"repassword",disable:!1}],ss=()=>{const t=G(),{id:a,token:r}=le(),s=ct().shape({password:he().required().min(6,"Password t\u1ED1i thi\u1EC3u 6 k\xED t\u1EF1"),repassword:he().required().oneOf([ia("password"),null],"Passwords must match")});return e(Et,{onSubmit:async d=>{const m=await Za(a,r,d);m.data.success?(J(m.data.message),t("/signin")):F(m.data.message)},formTitle:"Reset Password",formDescription:"Just some details to get you in.!",submitButtonText:"Send",formIntro:"Skip the lag ?",formHeader:"Roll the Carpet.!",checkedAccount:"Already Registered? Login",handleMessage:()=>{U.success("\u0110ang c\u1EADp nh\u1EADt!")},redirect:"/reset-password",array:ns,schemaPage:s})},is=()=>{const t=["#eb2f96","#52c41a","#eba12f"],{data:{data:a}}=z(P+"/category/latest"),r=[{title:"Name",dataIndex:"name",key:"name",render:o=>e("p",{children:o})},{title:"Action",key:"action",render:(o,d,m)=>e(D,{type:"text",shape:"circle",className:"ml-2",onClick:()=>s(d.key),children:e(Ce,{type:"success",style:{color:t[m]}})})}],s=async o=>{const d={id:o},{data:m}=await Nr(d);m.success===!0&&(J("Success"),oa(P+"/category/latest"))},n=a&&a.map((o,d)=>({key:o._id,name:o.name}));return e(lt,{columns:r,dataSource:n})},os=()=>{const t=I(Kr),{data:a}=z(P+"/most-watched-episodes"),{data:r}=z(P+"/rating/stats"),s={data:a.data,xField:"seri",yField:"view",point:{shapeField:"square",sizeField:4},interaction:{tooltip:{marker:!1}},style:{lineWidth:2}};return i(T,{children:[i("div",{className:"flex justify-around gap-2",children:[e(Q,{className:"w-full",children:e(ee,{title:"Active Users",prefix:e(ne,{}),value:t.length})}),e(Q,{bordered:!0,className:"w-full",children:e(ee,{title:"Comment",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:e(Ce,{}),suffix:"%"})}),e(Q,{bordered:!1,className:"w-full",children:e(ee,{title:"View",value:9.3,precision:2,valueStyle:{color:"#cf1322"},prefix:e(la,{}),suffix:"%"})}),e(Q,{className:"w-full",children:e(ee,{title:"Rating Video",prefix:e(da,{}),value:r.totalRatings})})]}),e("div",{className:"flex justify-between gap-2",children:e(ca,{className:"w-5/12",...s})})]})},ls=l.exports.lazy(()=>b(()=>import("./index.935273ac.js"),[])),ds=l.exports.lazy(()=>b(()=>import("./index.935273ac2.js"),[])),cs=l.exports.lazy(()=>b(()=>Promise.resolve().then(()=>Pn),void 0)),us=l.exports.lazy(()=>b(()=>import("./Profile.4870a75d.js"),["assets/Profile.4870a75d.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),ps=l.exports.lazy(()=>b(()=>import("./Sign-in.6bb93eaf.js"),["assets/Sign-in.6bb93eaf.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),ms=l.exports.lazy(()=>b(()=>import("./Sign-up.9c5757e7.js"),["assets/Sign-up.9c5757e7.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),hs=l.exports.lazy(()=>b(()=>import("./list.2d0c3118.js"),["assets/list.2d0c3118.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),gs=l.exports.lazy(()=>b(()=>import("./index.3162821d.js"),["assets/index.3162821d.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),xs=l.exports.lazy(()=>b(()=>import("./add.e059605c.js"),["assets/add.e059605c.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),ys=l.exports.lazy(()=>b(()=>import("./edit.7aa67c85.js"),["assets/edit.7aa67c85.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),fs=l.exports.lazy(()=>b(()=>import("./admin.d8cbd52d.js"),["assets/admin.d8cbd52d.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),vs=l.exports.lazy(()=>b(()=>import("./add.781165a5.js"),["assets/add.781165a5.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css","assets/index.b25028e0.js","assets/index.3a70433a.js"])),ws=l.exports.lazy(()=>b(()=>import("./edit.9a7c1ab5.js"),["assets/edit.9a7c1ab5.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css","assets/index.b25028e0.js","assets/index.3a70433a.js"])),bs=l.exports.lazy(()=>b(()=>import("./adds.eca4dcf5.js"),["assets/adds.eca4dcf5.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),ks=l.exports.lazy(()=>b(()=>import("./CreatingProducts.4c5774ac.js"),["assets/CreatingProducts.4c5774ac.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css","assets/index.3a70433a.js"])),Es=l.exports.lazy(()=>b(()=>import("./index.f3d161d0.js"),["assets/index.f3d161d0.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css","assets/type.6f80c147.js","assets/index.b25028e0.js","assets/index.3a70433a.js"])),Cs=l.exports.lazy(()=>b(()=>import("./edit.5041f3a9.js"),["assets/edit.5041f3a9.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css","assets/index.3a70433a.js","assets/index.b25028e0.js"])),As=l.exports.lazy(()=>b(()=>import("./index.acd4aca5.js"),["assets/index.acd4aca5.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),Ns=l.exports.lazy(()=>b(()=>import("./edit.8ba59efc.js"),["assets/edit.8ba59efc.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),_s=l.exports.lazy(()=>b(()=>import("./index.0db14fe6.js"),["assets/index.0db14fe6.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),Ss=l.exports.lazy(()=>b(()=>import("./index.c1735910.js"),["assets/index.c1735910.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),Ts=l.exports.lazy(()=>b(()=>import("./index.bb398e02.js"),["assets/index.bb398e02.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),Is=l.exports.lazy(()=>b(()=>import("./index.65b4193a.js"),["assets/index.65b4193a.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),Ls=l.exports.lazy(()=>b(()=>import("./index.7312c4d9.js"),["assets/index.7312c4d9.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css","assets/type.6f80c147.js"])),Ds=l.exports.lazy(()=>b(()=>import("./CatemainProduct.c923fc71.js"),["assets/CatemainProduct.c923fc71.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),Ps=l.exports.lazy(()=>b(()=>import("./index.4a8c04ed.js"),["assets/index.4a8c04ed.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),$s=l.exports.lazy(()=>b(()=>import("./edit.82bde0ad.js"),["assets/edit.82bde0ad.js","assets/vendor.7a0224e0.js","assets/vendor.1fa94a76.css"])),Rs=[{path:"/",name:"Trang ch\u1EE7",title:"Trang ch\u1EE7"},{path:"/signin",name:"\u0110\u0103ng nh\u1EADp",title:"\u0110\u0103ng nh\u1EADp"},{path:"/signup",name:"\u0110\u0103ng k\xED",title:"\u0110\u0103ng k\xED"},{path:"/complete",name:"Ho\xE0n Th\xE0nh",title:"Ho\xE0n Th\xE0nh"}],zs=[{path:"/",name:"Trang ch\u1EE7"},{path:"/profile",name:"H\u1ED3 s\u01A1",title:"H\u1ED3 s\u01A1"},{path:"/complete",name:"Ho\xE0n Th\xE0nh",title:"Ho\xE0n Th\xE0nh"}],Bs=[{path:"/",element:e(Vn,{}),children:[{path:"/",element:e(Dr,{}),index:!0},{path:"d/:id",element:e(g,{children:e(cn,{})})},{path:"q/:id",element:e(g,{children:e(gn,{})})},{path:"search/category",element:e(g,{children:e(cs,{})})},{path:"cart/user",element:e(g,{children:e(Ss,{})})},{path:"movie-content/:id",element:e(g,{children:e(ds,{})})},{path:"types/h/:id",element:e(g,{children:e(ls,{})})},{path:"loadmore",element:e(g,{children:e(Is,{})})},{path:"signup",element:e(g,{children:e(ms,{})})},{path:"signin",element:e(g,{children:e(ps,{})})},{path:"forgot-password",element:e(g,{children:e(rs,{})})},{path:"reset-password/:id/:token",element:e(g,{children:e(ss,{})})},{path:"profile",element:e(g,{children:e(us,{})})}]},{path:"dashboard",element:e(bn,{children:e(wn,{})}),children:[{path:"",element:e(g,{children:e(os,{})}),index:!0},{path:"products",element:e(g,{children:e(hs,{})})},{path:"users",element:e(g,{children:e(gs,{})})},{path:"adminUer",element:e(g,{children:e(fs,{})})},{path:"users/:id/edit",element:e(g,{children:e(ys,{})})},{path:"user/add",element:e(g,{children:e(xs,{})})},{path:"user/creatingUser",element:e(g,{children:e(bs,{})})},{path:"product/add",element:e(g,{children:e(vs,{})})},{path:"product/edit/:id",element:e(g,{children:e(ws,{})})},{path:"product/creacting",element:e(g,{children:e(ks,{})})},{path:"category",element:e(g,{children:e(Es,{})})},{path:"category/edit/:id",element:e(g,{children:e(Cs,{})})},{path:"category/latest",element:e(g,{children:e(is,{})})},{path:"trailing",element:e(g,{children:e(As,{})})},{path:"trailerUrl/:id",element:e(g,{children:e(Ns,{})})},{path:"comments",element:e(g,{children:e(_s,{})})},{path:"cart",element:e(g,{children:e(Ts,{})})},{path:"types",element:e(g,{children:e(Ls,{})})},{path:"types/CateMainProduct/:id",element:e(g,{children:e(Ds,{})})},{path:"background",element:e(g,{children:e(Ps,{})})},{path:"background/edit/:id",element:e(g,{children:e($s,{})})},{path:"weeks",element:e(g,{children:e(Hn,{})})}]},{path:"/*",element:e(qn,{})}],Os=[{path:"/dashboard",name:"Admin",icon:e(ua,{})},{path:"/dashboard/products",name:"Products",icon:e(pa,{})},{name:"User",icon:e(ze,{}),children:[{path:"/dashboard/users",name:"Users",icon:e(ne,{})},{path:"/dashboard/adminUer",name:"Admin",icon:e(Be,{})}]},{name:"Category",icon:e(ze,{}),children:[{path:"/dashboard/category",name:"Category",icon:e(ma,{})},{path:"/dashboard/category/latest",name:"Latest",icon:e(Ce,{})}]},{name:"Themes",icon:e(ot,{}),children:[{path:"/dashboard/trailing",name:"Trailer",icon:e(Be,{})},{path:"/dashboard/background",name:"Background",icon:e(ha,{})}]},{name:"Big Category",icon:e(ga,{}),children:[{path:"/dashboard/types",name:"Types",icon:e(xa,{})}]},{path:"/dashboard/comments",name:"Comments",icon:e(ya,{})},{path:"/dashboard/cart",name:"Cart",icon:e(fa,{})},{path:"/dashboard/weeks",icon:e(at,{}),name:"Week"}],Fs=va`
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

`,Xe=t=>{if(!t)return!0;try{const a=wa(t),r=Date.now()/1e3;return a.exp<r}catch(a){return console.error("Error decoding token:",a),!0}};function js(){const t=Ee(),a="G-0EEY3R7F0S",r=ba(Bs),s=G(),n=L();return l.exports.useEffect(()=>{Oe.initialize(a),Oe.send({hitType:"pageview",page:t.pathname,title:"User Active"}),(async()=>{if(n){const o=n.token,d=n.refreshToken;if(Xe(d))kt("Token expires-relogin"),localStorage.clear(),s("/signin");else if(Xe(o)){const m={refreshToken:n.refreshToken},{data:u}=await Qa(m);localStorage.setItem("token",JSON.stringify(u))}}})(),alert(" Xin l\u1ED7i, server phim hi\u1EC7n \u0111ang qu\xE1 t\u1EA3i do l\u01B0\u1EE3ng truy c\u1EADp l\u1EDBn. Vui l\xF2ng ch\u1EDD \u0111\u1EE3i trong 1-2 ph\xFAt \u0111\u1EC3 ti\u1EBFp t\u1EE5c xem. Ch\xFAng t\xF4i \u0111ang n\u1ED7 l\u1EF1c \u0111\u1EC3 c\u1EA3i thi\u1EC7n t\xECnh h\xECnh v\xE0 xin th\xE0nh th\u1EADt xin l\u1ED7i v\xEC s\u1EF1 b\u1EA5t ti\u1EC7n n\xE0y.Tr\xE2n tr\u1ECDng!")},[]),i(T,{children:[r,e(Fs,{}),e(ka,{}),e(Ea.BackTop,{visibilityHeight:200})]})}const Vs={value:{product:[],length:0},isLoading:!1,getOneProduct:{},getAllProductByCategory:[],status:!1},Ms=M({name:"product",initialState:Vs,reducers:{},extraReducers:t=>{t.addCase(We.pending,(a,r)=>{a.isLoading=!0}).addCase(We.fulfilled,(a,r)=>{a.isLoading=!1,a.value=r.payload}),t.addCase(Mr.fulfilled,(a,r)=>{a.value.product=a.value.product.filter(s=>s._id!==r.payload.data._id)}),t.addCase(Ur.fulfilled,(a,r)=>{a.value.product.push(r.payload)}),t.addCase(Hr.fulfilled,(a,r)=>{a.value.product.push(r.payload)}),t.addCase(qr.fulfilled,(a,r)=>{a.value.product=[...a.value.product,r.payload]}),t.addCase(Wr.fulfilled,(a,r)=>{a.value.product=r.payload}),t.addCase(Gr.fulfilled,(a,r)=>{a.value.product=r.payload}),t.addCase(ve.pending,(a,r)=>{a.isLoading=!0}).addCase(ve.fulfilled,(a,r)=>{a.isLoading=!1,a.getOneProduct=r.payload}),t.addCase(bt.fulfilled,(a,r)=>{a.getAllProductByCategory=r.payload})}}),Us=Ms.reducer,Hs={category:{data:[],length:0},isLoading:!1,isError:!1,categoryNotReqId:[],details:{}},qs=M({name:"category",initialState:Hs,reducers:{},extraReducers:t=>{t.addCase(ae.fulfilled,(a,r)=>{a.isLoading=!1,a.category=r.payload}).addCase(ae.pending,(a,r)=>{a.isLoading=!0}).addCase(ae.rejected,(a,r)=>{a.isError=!0}),t.addCase(qe.fulfilled,(a,r)=>{a.isLoading=!1,a.categoryNotReqId=r.payload}).addCase(qe.pending,(a,r)=>{a.isLoading=!0}),t.addCase(_r.fulfilled,(a,r)=>{a.category.data=a.category.data.concat(r.payload)}),t.addCase(Sr.fulfilled,(a,r)=>{a.category.data=a.category.data.filter(s=>s._id!==r.payload._id)}),t.addCase(Tr.fulfilled,(a,r)=>{a.category.data.push(r.payload)}),t.addCase(fe.fulfilled,(a,r)=>{a.details=r.payload,a.isLoading=!1}).addCase(fe.pending,(a,r)=>{a.isLoading=!0})}}),Ws=qs.reducer,Ti=async()=>await c.get("/trailer"),ie=L(),Gs=async t=>await c.put(`/trailer/${t.get("_id")}/${ie.user._id}`,t,{headers:{Authorization:`Bearer ${ie.token}`}}),Ii=async t=>await c.post(`/background/${t.get("_id")}/${ie.user._id}`,t,{headers:{Authorization:`Bearer ${ie.token}`}}),Ys=x("trailer/Trailing",async t=>{const{data:a}=await Gs(t);return a}),Js=M({name:"post",initialState:{value:[],trailerValues:[]},reducers:{},extraReducers:t=>{t.addCase(Ys.fulfilled,(a,r)=>{a.trailerValues.push(r.payload)})}}),Ks=Js.reducer,oe=L(),Xs=async()=>await c.get("/comments"),Zs=async(t,a)=>await c.post(`/comment/${t}/${oe.user._id}`,a,{headers:{Authorization:`Bearer ${oe.token}`}}),Qs=async t=>await c.post(`/comment/${oe.user._id}`,t,{headers:{Authorization:`Bearer ${oe.token}`}}),ei=x("getAllCommentSlice",async()=>{const{data:t}=await Xs();return t}),ti=x("addCommentSlice",async t=>{const{data:a}=await Zs(t.product,t);return a}),ai=x("deleteComment",async t=>{const{data:a}=await Qs(t);return a}),ri=M({name:"comment",initialState:{value:[]},reducers:{},extraReducers:t=>{t.addCase(ei.fulfilled,(a,r)=>{a.value=r.payload}),t.addCase(ti.fulfilled,(a,r)=>{a.value.push(r.payload)}),t.addCase(ai.fulfilled,(a,r)=>{a.value=a.value.filter(s=>s._id!==r.payload._id)})}}),ni=ri.reducer,si=M({name:"cart",initialState:{value:[],isLoading:!1,code:null},reducers:{},extraReducers:t=>{t.addCase(je.fulfilled,(a,r)=>{a.isLoading=!1,a.value=r.payload}).addCase(je.pending,(a,r)=>{a.isLoading=!0}),t.addCase(ge.pending,(a,r)=>{a.isLoading=!0}).addCase(ge.fulfilled,(a,r)=>{Array.isArray(a.value)||(a.value=[]),a.isLoading=!1,a.value.push(r.payload.cart)})}}),ii=si.reducer,oi={key:"root",storage:Sa,whitelist:[""],expire:"3600000"},li=Ca({product:Us,user:dr,category:Ws,trailer:Ks,comment:ni,cart:ii}),di=Aa(oi,li),Ct=Na({reducer:di,middleware:t=>t({serializableCheck:!1})}),ci=_a(Ct);Ta.createRoot(document.getElementById("root")).render(e(Ia,{store:Ct,children:e(La,{persistor:ci,children:e(xr,{children:e(cr,{children:e(Da,{children:e(js,{})})})})})}));export{L as $,Et as A,nr as B,wi as C,Me as D,Mn as E,xe as F,ir as G,Si as H,sr as I,vi as J,Ur as K,A as L,$ as M,B as N,Y as O,O as P,we as Q,ve as R,Hr as S,or as T,Ei as U,qr as V,_i as W,ae as X,gi as Y,_r as Z,Sr as _,I as a,c as a0,fe as a1,Tr as a2,vr as a3,yi as a4,Ti as a5,Ys as a6,ei as a7,xi as a8,ai as a9,rr as aa,xt as ab,ft as ac,je as ad,pi as ae,vt as af,hi as ag,ki as ah,z as ai,fi as aj,P as ak,mi as al,Ii as am,Ye as b,He as c,J as d,F as e,de as f,We as g,gr as h,ht as i,D as j,S as k,ue as l,y as m,Un as n,k as o,Ke as p,Wr as q,Ve as r,Gr as s,bi as t,H as u,Ni as v,Mr as w,Ci as x,Ai as y,Kr as z};
