import{s as f,r as c,ac as S,g as w,u as A,f as D,j as t,a as e,Y as E,ae as T,a0 as F,af as P,T as V,ag as M}from"./index.925a885c.js";import{u as _}from"./index.esm.10e4c1ef.js";import{r as l}from"./index.ccea7011.js";const o=f.div``,p=f.select``,O=()=>{const{categorymain:u,LoadingCateMain:B,seri:g,loadingSeri:I,isError:L}=c.exports.useContext(S);w();const{id:d}=A(),{handleSubmit:h,reset:N,register:n,control:i}=_(),b=D(),[m,x]=c.exports.useState({}),[y,k]=c.exports.useState([]);c.exports.useEffect(()=>{(async()=>{const{payload:s}=await b(T(d));N(s),x(s)})(),(async()=>{k(await F())})()},[]);const v=a=>{const r=new FormData;r.append("name",a.name),r.append("options",a.options),r.append("seri",a.seri),r.append("category",a.category),r.append("_id",d),r.append("linkVideo",a.linkVideo),r.append("seri",a.seri),r.append("LinkCopyright",a.LinkCopyright),r.append("copyright",a.copyright),r.append("descriptions",a.descriptions),r.append("trailer",a.trailer),r.append("image",a.image[0]),r.append("file",a.file[0]),r.append("year",a.year),r.append("country",a.country),r.append("typeId",a.typeId),r.append("categorymain",a.categorymain),r.append("dailyMotionServer",a.dailyMotionServer),b(P(r)),V.success(`S\u1EEDa ${a.name}} c\xF4ng`,{position:"bottom-right",autoClose:5e3,theme:"light"})},C=async a=>{const r=new FormData;r.append("fileupload",a.fileupload[0]),await M(d,r)};return t(o,{children:[t("form",{onSubmit:h(v),children:[e(o,{className:"mb-3",children:l("name","Product name",i)}),e(o,{className:"mb-3",children:l("seri","Seri",i)}),e(o,{className:"mb-3",children:l("view","View",i)}),e(o,{className:"mb-3",children:l("descriptions","Desciption",i)}),e(o,{className:"mb-3",children:l("copyright","Copyright",i)}),e(o,{className:"mb-3",children:l("LinkCopyright","LinkCopyright",i)}),e(o,{className:"mb-3",children:l("link","Video Url",i)}),e("div",{className:"mb-3",children:l("dailyMotionServer","DailyMotionServer",i)}),e(o,{className:"mb-3",children:l("trailer","Trailer Video",i)}),t(o,{className:"mb-3",children:[e(o,{style:{width:"150px",height:"200px"},children:e("img",{style:{height:"100%",width:"100%"},src:m.image==null?"https://firebasestorage.googleapis.com/v0/b/mystorage-265d8.appspot.com/o/image%2Fdau-pha-thuong-khung-ova-3-hen-uoc-3-nam-856.jpg?alt=media&token=dca80d37-bb85-41a0-9fd5-c6e949e1db54":m.image,alt:""})}),e("br",{}),t("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"New Video Url"}),e("input",{type:"file",name:"file",...n("file"),className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"})]}),t("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"New Image"}),e("input",{type:"file",name:"image",...n("image"),className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"})]})]}),e(o,{className:"mb-3",children:l("year","Year",i)}),e(o,{className:"mb-3",children:l("country","country",i)}),e(o,{className:"mb-3",children:l("options","Options",i)}),e(o,{className:"form-label",children:"Category"}),t(p,{className:"form-select-sm mb-4",...n("category"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim t\u1EADp"}),y?y.map((a,r)=>{var s;return e("option",{value:a._id,selected:((s=m.category)==null?void 0:s._id)==a._id,children:a.name},r)}):""]}),e("br",{}),e(o,{className:"form-label",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim l\u1EBB"}),t(p,{className:"form-select-sm mb-4",...n("typeId"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim l\u1EBB phim b\u1ED9 1 t\u1EADp"}),g?g.map((a,r)=>e("option",{value:a._id,children:a.name},r)):""]}),e("br",{}),e(o,{className:"form-label",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a danh m\u1EE5c th\u1EC3 lo\u1EA1i g\u1ED3m c\xE1c danh m\u1EE5c con"}),t(p,{className:"form-select-sm mb-4",...n("categorymain"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a danh m\u1EE5c th\u1EC3 lo\u1EA1i g\u1ED3m c\xE1c danh m\u1EE5c con"}),u?u.map((a,r)=>e("option",{value:a._id,children:a.name},r)):""]}),e("br",{}),e(E,{htmlType:"submit",className:"btn btn-primary",children:"Submit"})]}),t("form",{onSubmit:h(C),children:[t("div",{className:"mb-3 mt-5",children:[e("label",{className:"form-label",children:"Video Url"}),e("input",{type:"file",name:"file",...n("fileupload"),className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"})]}),e("div",{className:"mt-2",children:e(E,{htmlType:"submit",className:"btn btn-primary",children:"Submit"})})]})]})};export{O as default};
