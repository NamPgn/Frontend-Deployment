import{r as t,ae as v,j as e,aT as N,as as p}from"./vendor-172e24aa.js";import{A as w,u as S,a as M,W as k,P as i,c as u,h as C,X as L}from"./index-5163a13e.js";import{M as g}from"./index-38a9f25b.js";import{M as A}from"./index-cde83d89.js";const D=()=>{const{seri:o}=t.useContext(w),{data:d}=S(a=>a.category.category),[y,x]=t.useState(""),n=M(),{handleSubmit:h,control:l}=v();t.useEffect(()=>{n(k(0))},[]);const f=d&&d.map((a,s)=>({label:a.name,value:a._id})),j=o&&(o==null?void 0:o.map((a,s)=>({label:a.name,value:a._id}))),b=async a=>{var c,m;const s=new FormData;s.append("name",a.name),s.append("category",a.category),s.append("seri",a.seri),s.append("LinkCopyright",a.LinkCopyright),s.append("copyright",a.copyright),s.append("trailer",a.trailer),s.append("image",a.image),s.append("typeId",a.typeId),s.append("categorymain",a.categorymain),s.append("dailyMotionServer",a.dailyMotionServer),s.append("imageLink",a.imageLink),s.append("video2",a.video2);const r=await n(L(s));x((m=(c=r==null?void 0:r.payload)==null?void 0:c.data)==null?void 0:m._id),r.payload.success===!0?p.success("Add product Successfully"):p.error("Add product failed")};return e.jsx("div",{children:e.jsxs("form",{onSubmit:h(b),className:"mx-auto p-6 bg-white rounded-lg shadow-md",children:[e.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Episode Create"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(i,{name:"name",label:"Product Name",control:l,rules:void 0,className:"w-full"}),e.jsx(i,{name:"view",label:"View",control:l,rules:void 0,className:"w-full"}),e.jsx(i,{name:"seri",label:"Seri",control:l,rules:void 0,className:"w-full"}),e.jsx(i,{name:"copyright",label:"Copyright",control:l,rules:void 0,className:"w-full"}),e.jsx(i,{name:"LinkCopyright",label:"Link Copyright",control:l,rules:void 0,className:"w-full"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(A,{name:"image",label:"New Image Upload",control:l})}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4",children:[e.jsx(i,{name:"dailyMotionServer",label:"DailyMotion Server",control:l,rules:void 0,className:"w-full"}),e.jsx(i,{name:"trailer",label:"Trailer Video",control:l,rules:void 0,className:"w-full"}),e.jsx(i,{name:"video2",label:"Video Link",control:l,rules:void 0,className:"w-full"}),e.jsx(i,{name:"imageLink",label:"Image Link",control:l,rules:void 0,className:"w-full"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-4",children:[e.jsx(g,{control:l,name:"category",label:"Category",placeholder:"Select a category",options:f,className:"w-full"}),e.jsx(g,{name:"typeId",label:"Cateogory Donghua",control:l,placeholder:"Select a type",options:j,className:"w-full"})]}),e.jsxs("div",{className:"flex items-center gap-4 mt-6",children:[e.jsx(u,{htmlType:"submit",className:"btn btn-primary w-full sm:w-auto",children:"Submit"}),e.jsx(C,{to:`/dashboard/product/edit/${y}`,children:e.jsx(u,{type:"text",danger:!0,shape:"circle",children:e.jsx(N,{})})})]})]})})};export{D as default};
