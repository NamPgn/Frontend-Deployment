import{r as u,ah as S,j as a,f as m,aT as M,aY as y}from"./vendor.bb3b024f.js";import{n as k,g as L,e as A,J as n,q as g,c as I,T as V}from"./index.45fbee5f.js";import{M as p}from"./index.5b698f89.js";import{M as T}from"./index.b3ac44fe.js";const _=()=>{const{categorymain:r,seri:t}=u.exports.useContext(k),{data:s}=L(e=>e.category.category),[b,h]=u.exports.useState(""),v=A(),{handleSubmit:E,control:i}=S(),f=s&&s.map((e,o)=>({label:e.name,value:e._id})),x=r&&(r==null?void 0:r.map((e,o)=>({label:e.name,value:e._id}))),C=t&&(t==null?void 0:t.map((e,o)=>({label:e.name,value:e._id})));return a("div",{children:m("form",{onSubmit:E(async e=>{var d,c;const o=new FormData;o.append("name",e.name),o.append("options",e.options),o.append("category",e.category),o.append("seri",e.seri),o.append("LinkCopyright",e.LinkCopyright),o.append("copyright",e.copyright),o.append("descriptions",e.descriptions),o.append("trailer",e.trailer),o.append("image",e.image),o.append("year",e.year),o.append("country",e.country),o.append("typeId",e.typeId),o.append("categorymain",e.categorymain),o.append("dailyMotionServer",e.dailyMotionServer),o.append("imageLink",e.imageLink),o.append("video2",e.video2);const l=await v(V(o));h((c=(d=l==null?void 0:l.payload)==null?void 0:d.data)==null?void 0:c._id),l.payload.success===!0?y.success("Add product Successfully"):y.error("Add product failed")}),children:[a(n,{name:"name",label:"Product name",control:i,rules:void 0}),a(n,{name:"view",label:"View",control:i,rules:void 0}),a(n,{name:"seri",label:"Seri",control:i,rules:void 0}),a(n,{name:"descriptions",label:"Desciption",control:i,rules:void 0}),a(n,{name:"copyright",label:"Copyright",control:i,rules:void 0}),a(n,{name:"LinkCopyright",label:"LinkCopyright",control:i,rules:void 0}),a(T,{name:"image",label:"New Image Upload",control:i}),a(n,{name:"dailyMotionServer",label:"DailyMotionServer",control:i,rules:void 0}),a(n,{name:"trailer",label:"Trailer Video",control:i,rules:void 0}),a(n,{name:"year",label:"Year",control:i,rules:void 0}),a(n,{name:"country",label:"Country",control:i,rules:void 0}),a(n,{name:"options",label:"Options",control:i,rules:void 0}),a(n,{name:"video2",label:"Video Link",control:i,rules:void 0}),a(n,{name:"imageLink",label:"Image Link",control:i,rules:void 0}),a(p,{control:i,name:"category",label:"Category",placeholder:"category",defaultValue:"category",options:f}),a("br",{}),a(p,{name:"typeId",label:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim l\u1EBB",control:i,placeholder:"typeId",defaultValue:"typeId",options:C}),a("br",{}),a(p,{name:"categorymain",label:"Th\u1EC3 lo\u1EA1i c\u1EE7a danh m\u1EE5c th\u1EC3 lo\u1EA1i g\u1ED3m c\xE1c danh m\u1EE5c con",control:i,placeholder:"categorymain",defaultValue:"categorymain",options:x}),a("br",{}),m("div",{className:"flex items-center gap-2",children:[a("div",{className:"mt-2",children:a(g,{htmlType:"submit",className:"btn btn-primary",children:"Submit"})}),a(I,{to:`/dashboard/product/edit/${b}`,children:a(g,{type:"text",danger:!0,shape:"circle",children:a(M,{})})})]})]})})};export{_ as default};
