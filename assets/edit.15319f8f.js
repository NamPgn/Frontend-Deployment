import{r as p,i as V,u as w,k as A,g as L,d as m,j as a,b9 as D,e as F,aH as n,C as I,p as v,ba as P,bb as T,bc as U,V as c,bd as N}from"./index.9a3f2aa5.js";import{M as u}from"./index.6f5782e4.js";import{M as f}from"./index.0368f6d5.js";import"./DeleteOutlined.c4aa2cb4.js";import"./DownloadOutlined.947da074.js";const O=()=>{var h;const{categorymain:s,category:l,seri:t}=p.exports.useContext(V),[E,b]=p.exports.useState(!1),{id:d}=w(),{handleSubmit:y,reset:S,control:o}=A(),g=L(),[r,x]=p.exports.useState({});p.exports.useEffect(()=>{(async()=>{const{payload:i}=await g(T(d));S(i),x(i)})()},[]);const k=async e=>{const i=new FormData;i.append("name",e.name),i.append("options",e.options),i.append("seri",e.seri),i.append("category",e.category),i.append("_id",d),i.append("seri",e.seri),i.append("LinkCopyright",e.LinkCopyright),i.append("copyright",e.copyright),i.append("descriptions",e.descriptions),i.append("trailer",e.trailer),i.append("image",e.image),i.append("year",e.year),i.append("country",e.country),i.append("typeId",e.typeId),i.append("categorymain",e.categorymain),i.append("dailyMotionServer",e.dailyMotionServer),i.append("link",e.link),i.append("imageLink",e.image),(await g(U(i))).payload.success==!0&&c.success(`S\u1EEDa ${e.name} c\xF4ng`)},C=async e=>{try{const i=new FormData;i.append("fileupload",e.fileupload),await N(d,i)&&(c.success(`${e.name} Susscessfully Uploaded`),b(!0))}catch{c.success(`${e.name} Failer Uploaded`)}finally{b(!1)}};return m("div",{children:[a(D,{level:4,children:a(F,{to:`/d/${r._id}?c=${(h=r.category)==null?void 0:h._id}`,children:r.name+" t\u1EADp "+r.seri})}),m("form",{onSubmit:y(k),children:[a(n,{name:"name",label:"Product name",control:o,rules:void 0}),a(n,{name:"seri",label:"Seri",control:o,rules:void 0}),a(n,{name:"view",label:"View",control:o,rules:void 0}),a(n,{name:"descriptions",label:"Desciption",control:o,rules:void 0}),a(n,{name:"LinkCopyright",label:"LinkCopyright",control:o,rules:void 0}),a(n,{name:"link",label:"Video Url",control:o,rules:void 0}),a(n,{name:"dailyMotionServer",label:"DailyMotionServer",control:o,rules:void 0}),a(n,{name:"server2",label:"Assb server",control:o,rules:void 0}),a(n,{name:"trailer",label:"Trailer Video",control:o,rules:void 0}),a("div",{style:{width:"150px",height:"200px"},children:a(I,{src:r.image==null?"https://firebasestorage.googleapis.com/v0/b/mystorage-265d8.appspot.com/o/image%2Fdau-pha-thuong-khung-ova-3-hen-uoc-3-nam-856.jpg?alt=media&token=dca80d37-bb85-41a0-9fd5-c6e949e1db54":r.image,className:"w-full h-full"})}),a("br",{}),a(f,{name:"image",label:"New Image Upload",control:o}),a(n,{name:"year",label:"Year",control:o,rules:void 0}),a(n,{name:"country",label:"country",control:o,rules:void 0}),a(n,{name:"options",label:"Options",control:o,rules:void 0}),a(n,{name:"imageLink",label:"Image Link",control:o,rules:void 0}),a(u,{label:"Category",control:o,name:"category",defaultValue:"category",options:l&&(l==null?void 0:l.data.map((e,i)=>({label:e.name,value:e._id})))}),a("br",{}),a(u,{name:"typeId",label:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim l\u1EBB",control:o,defaultValue:"Th\u1EC3 lo\u1EA1i",options:t&&(t==null?void 0:t.map((e,i)=>({label:e.name,value:e._id})))}),a("br",{}),a(u,{control:o,name:"Th\u1EC3 lo\u1EA1i c\u1EE7a danh m\u1EE5c th\u1EC3 lo\u1EA1i g\u1ED3m c\xE1c danh m\u1EE5c con",label:"Categorymain",placeholder:"categorymain",defaultValue:"categorymain",options:s&&(s==null?void 0:s.map((e,i)=>({label:e.name,value:e._id})))}),a("br",{}),a(v,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]}),a(P,{textColor:"#000",orientation:"center",children:"Abyss Server"}),m("form",{onSubmit:y(C),children:[a(f,{name:"fileupload",label:"New Video Upload",control:o}),a("div",{className:"mt-2",children:a(v,{loading:E,htmlType:"submit",className:"btn btn-primary",children:"Submit"})})]})]})};export{O as default};
