import{r as d,af as f,j as e,aQ as S,aV as c}from"./vendor-6b39dd86.js";import{n as M,g as k,e as L,J as i,q as m,c as C,T as I}from"./index-c811195b.js";import{M as u}from"./index-7fc7aa68.js";import{M as V}from"./index-e9f4f802.js";const N=()=>{const{seri:r}=d.useContext(M),{data:t}=k(a=>a.category.category),[y,x]=d.useState(""),g=L(),{handleSubmit:b,control:s}=f(),j=t&&t.map((a,o)=>({label:a.name,value:a._id})),v=r&&(r==null?void 0:r.map((a,o)=>({label:a.name,value:a._id}))),h=async a=>{var l,p;const o=new FormData;o.append("name",a.name),o.append("options",a.options),o.append("category",a.category),o.append("seri",a.seri),o.append("LinkCopyright",a.LinkCopyright),o.append("copyright",a.copyright),o.append("descriptions",a.descriptions),o.append("trailer",a.trailer),o.append("image",a.image),o.append("year",a.year),o.append("country",a.country),o.append("typeId",a.typeId),o.append("categorymain",a.categorymain),o.append("dailyMotionServer",a.dailyMotionServer),o.append("imageLink",a.imageLink),o.append("video2",a.video2);const n=await g(I(o));x((p=(l=n==null?void 0:n.payload)==null?void 0:l.data)==null?void 0:p._id),n.payload.success===!0?c.success("Add product Successfully"):c.error("Add product failed")};return e.jsx("div",{children:e.jsxs("form",{onSubmit:b(h),children:[e.jsx(i,{name:"name",label:"Product name",control:s,rules:void 0}),e.jsx(i,{name:"view",label:"View",control:s,rules:void 0}),e.jsx(i,{name:"seri",label:"Seri",control:s,rules:void 0}),e.jsx(i,{name:"descriptions",label:"Desciption",control:s,rules:void 0}),e.jsx(i,{name:"copyright",label:"Copyright",control:s,rules:void 0}),e.jsx(i,{name:"LinkCopyright",label:"LinkCopyright",control:s,rules:void 0}),e.jsx(V,{name:"image",label:"New Image Upload",control:s}),e.jsx(i,{name:"dailyMotionServer",label:"DailyMotionServer",control:s,rules:void 0}),e.jsx(i,{name:"trailer",label:"Trailer Video",control:s,rules:void 0}),e.jsx(i,{name:"year",label:"Year",control:s,rules:void 0}),e.jsx(i,{name:"country",label:"Country",control:s,rules:void 0}),e.jsx(i,{name:"options",label:"Options",control:s,rules:void 0}),e.jsx(i,{name:"video2",label:"Video Link",control:s,rules:void 0}),e.jsx(i,{name:"imageLink",label:"Image Link",control:s,rules:void 0}),e.jsx(u,{control:s,name:"category",label:"Category",placeholder:"category",defaultValue:"category",options:j}),e.jsx("br",{}),e.jsx(u,{name:"typeId",label:"Thể loại của phim lẻ",control:s,placeholder:"typeId",defaultValue:"typeId",options:v}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"mt-2",children:e.jsx(m,{htmlType:"submit",className:"btn btn-primary",children:"Submit"})}),e.jsx(C,{to:`/dashboard/product/edit/${y}`,children:e.jsx(m,{type:"text",danger:!0,shape:"circle",children:e.jsx(S,{})})})]})]})})};export{N as default};
