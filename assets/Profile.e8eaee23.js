import{r as d,j as e,A as v,_ as c,s as N,f as b,g as w,h as y,i as E,b as a,B as o,k as S,l as L,m as A,S as I,E as O}from"./index.b7fc1dc9.js";import{I as j}from"./index.f2c3dfba.js";var C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const P=C;var u=function(l,n){return e(v,{...c(c({},l),{},{ref:n,icon:P})})};u.displayName="EditOutlined";const k=d.exports.forwardRef(u),z=N.div`

`,M=()=>{const i=b(),l=w(),[n,m]=d.exports.useState(null),{Auth:f,user:s,isLoggedInState:g}=d.exports.useContext(y),h=async()=>{i(L()),l("/")},p=E(t=>t.user.isLoading),x=async()=>{const t=new FormData;t.append("file",n[0]);const r={id:s._id,formData:t};(await i(A(r))).payload.success?I("Image saved successfully"):O("Image saved failed")};return f&&g?a(z,{className:"h-screen containers p-5 w-10/12",children:[e("div",{className:"text-lg text-white underline",children:"Account Setting"}),a("div",{className:"flex justify-between items-center",children:[e("div",{className:"mt-6 text-sm text-[#999]",children:"Your Profile  Picture"}),e(o,{onClick:()=>h(),danger:!0,className:"text-white btn-rounded btn-lg",children:"Logout"})]}),a("div",{className:"flex items-center justify-start w-full mt-3 ",children:[e("input",{type:"file",className:"text-white underline text-sm text-grey-500\r file:mr-5 file:py-2 file:px-6\r file:rounded-full file:border-0\r file:text-sm file:font-medium\r file:bg-blue-50 file:text-blue-700\r hover:file:cursor-pointer hover:file:bg-amber-50\r hover:file:text-amber-700\r ",onChange:t=>{const r=Array.from(t.target.files);m(r)}}),e("div",{className:"w-20 ml-4",children:s.image?e("img",{src:s.image,className:"rounded "}):e("div",{children:"Upload \u1EA3nh"})})]}),e("div",{style:{border:"1px solid #999"},className:"w-full mt-6 mb-6 "}),e("div",{className:"flex gap-2",children:a("div",{className:"lg:w-4/12 md:w-6/12 w-full",children:[e("div",{className:"text-sm text-[#fff]",children:"Full name"}),e(j,{type:"text",disabled:!0,defaultValue:s.username,placeholder:"Full name"})]})}),e(o,{icon:e(k,{}),loading:p,className:"text-white mt-7",onClick:x,children:"Update Profile"})]}):e(S,{to:"/auth/signin"})};export{M as default};
