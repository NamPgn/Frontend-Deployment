import{s as x,g as y,h as b,r,i as v,k as w,l as N,b as o,j as e,m as i,n as C,C as c,o as d,p as S,q as j,S as E,E as A}from"./index.e09b1868.js";import{I}from"./index.794f2faa.js";import{E as D}from"./EditOutlined.988224c1.js";const L=x.div`
`,U=()=>{const l=y(),u=b(),[m,f]=r.exports.useState(null),{user:s}=r.exports.useContext(v),{handleSubmit:p,control:k,register:F}=w(),g=async()=>{l(S()),u("/")},h=N(t=>t.user.isLoading),n=async()=>{const t=new FormData;t.append("file",m[0]);const a={id:s._id,formData:t};(await l(j(a))).payload.success?E("Image saved successfully"):A("Image saved failed")};return o(L,{className:"containers p-5 ",children:[e(i,{style:{margin:"20px"},justify:"center",children:s.image?e(C,{title:"H\u1ED3 s\u01A1",size:150,src:s.image}):e("div",{children:"Upload \u1EA3nh"})}),e("div",{className:"text-[20px] text-white text-center mb-3 capitalize",children:s.username}),e(i,{gutter:16,justify:"center",align:"middle",children:o(c,{children:[e("form",{onSubmit:p(n)}),e("input",{type:"file",className:"text-white underline text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 ",onChange:t=>{const a=Array.from(t.target.files);f(a)}})]})}),e("div",{className:"text-center mt-5",children:e(d,{onClick:()=>g(),danger:!0,className:"text-white btn-rounded btn-lg",children:"Logout"})}),e(i,{gutter:16,justify:"center",align:"middle",style:{marginTop:"20px"},children:e(c,{className:"lg:w-4/12 md:w-6/12 w-full",children:e(I,{type:"text",disabled:!0,defaultValue:s.username,placeholder:"Full name"})})}),e("div",{className:"flex justify-center",children:e(d,{icon:e(D,{}),loading:h,className:"text-white mt-7",onClick:n,children:"Update Profile"})})]})};export{U as default};
