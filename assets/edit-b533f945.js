import{r as p,w as I,af as L,j as a,aV as d}from"./vendor-fa914f0b.js";import{n as C,g as U,e as A,U as P,c as T,J as n,V as _,W as D,q as v,X as F,Y as N,Z as E,_ as $}from"./index-82c47e67.js";import{M as m}from"./index-5ba002e8.js";import{M as f}from"./index-0fa22155.js";const J=()=>{var g,h;const{categorymain:o,seri:r}=p.useContext(C),[S,u]=p.useState(!1),{data:y}=U(e=>e.category.category),{id:c}=I(),{handleSubmit:x,reset:w,control:i}=L(),b=A(),[l,V]=p.useState({});p.useEffect(()=>{(async()=>{const{payload:s}=await b(N(c));w(s),V(s)})()},[]);const M=async e=>{var j;const s=new FormData;s.append("name",e.name),s.append("options",e.options),s.append("category",e.category),s.append("_id",c),s.append("seri",e.seri),s.append("LinkCopyright",e.LinkCopyright),s.append("copyright",e.copyright),s.append("descriptions",e.descriptions),s.append("trailer",e.trailer),s.append("image",e.image),s.append("year",e.year),s.append("country",e.country),s.append("typeId",e.typeId),s.append("categorymain",e.categorymain),s.append("dailyMotionServer",e.dailyMotionServer),s.append("link",e.link),s.append("imageLink",e.image),s.append("view",e.view);const t=await b(E(s));((j=t==null?void 0:t.meta)==null?void 0:j.requestStatus)=="fulfilled"&&d.success(`Edit ${e.name} Success`)},k=async e=>{try{const s=new FormData;s.append("fileupload",e.fileupload),await $(c,s)&&(d.success(`${e.name} Susscessfully Uploaded`),u(!0))}catch{d.success(`${e.name} Failer Uploaded`)}finally{u(!1)}};return a.jsxs("div",{children:[a.jsx(P,{level:4,children:a.jsx(T,{to:`/d/${l._id}?c=${(g=l.category)==null?void 0:g._id}`,children:l.name+" tập "+l.seri})}),a.jsxs("form",{onSubmit:x(M),children:[a.jsx(n,{name:"name",label:"Product name",control:i,rules:void 0}),a.jsx(n,{name:"seri",label:"Seri",control:i,rules:void 0}),a.jsx(n,{name:"view",label:"View",control:i,rules:void 0}),a.jsx(n,{name:"descriptions",label:"Desciption",control:i,rules:void 0}),a.jsx(n,{name:"LinkCopyright",label:"LinkCopyright",control:i,rules:void 0}),a.jsx(n,{name:"link",label:"Video Url",control:i,rules:void 0}),a.jsx(n,{name:"dailyMotionServer",label:"DailyMotionServer",control:i,rules:void 0}),a.jsx(n,{name:"server2",label:"Assb server",control:i,rules:void 0}),a.jsx(n,{name:"trailer",label:"Trailer Video",control:i,rules:void 0}),a.jsx("div",{style:{width:"150px",height:"200px"},children:a.jsx(_,{src:D(200,(h=l==null?void 0:l.category)==null?void 0:h.linkImg),className:"w-full h-full"})}),a.jsx("br",{}),a.jsx(f,{name:"image",label:"New Image Upload",control:i}),a.jsx(n,{name:"year",label:"Year",control:i,rules:void 0}),a.jsx(n,{name:"country",label:"country",control:i,rules:void 0}),a.jsx(n,{name:"options",label:"Options",control:i,rules:void 0}),a.jsx(n,{name:"imageLink",label:"Image Link",control:i,rules:void 0}),a.jsx(m,{label:"Category",control:i,name:"category",defaultValue:"category",options:y&&y.map((e,s)=>({label:e.name,value:e._id}))}),a.jsx("br",{}),a.jsx(m,{name:"typeId",label:"Thể loại của phim lẻ",control:i,defaultValue:"Thể loại",options:r&&(r==null?void 0:r.map((e,s)=>({label:e.name,value:e._id})))}),a.jsx("br",{}),a.jsx(m,{control:i,name:"Thể loại của danh mục thể loại gồm các danh mục con",label:"Categorymain",placeholder:"categorymain",defaultValue:"categorymain",options:o&&(o==null?void 0:o.map((e,s)=>({label:e.name,value:e._id})))}),a.jsx("br",{}),a.jsx(v,{htmlType:"submit",className:"btn btn-primary mt-2",children:"Submit"})]}),a.jsx(F,{textColor:"#000",orientation:"center",children:"Abyss Server"}),a.jsxs("form",{onSubmit:x(k),children:[a.jsx(f,{name:"fileupload",label:"New Video Upload",control:i}),a.jsx("div",{className:"mt-2",children:a.jsx(v,{loading:S,htmlType:"submit",className:"btn btn-primary",children:"Submit"})})]})]})};export{J as default};
