import{s as f,r as d,h as S,g as C,u as w,f as A,b as n,j as e,B as E,V as D,W as T,Q as V,X as F}from"./index.78f0544f.js";import{u as P}from"./index.esm.379edad6.js";import{r as i}from"./index.72a16951.js";const l=f.div``,m=f.select``,M=()=>{const{categorymain:p,category:u,seri:h}=d.exports.useContext(S);C();const{id:t}=w(),{handleSubmit:b,reset:N,register:s,control:o}=P(),g=A(),[c,x]=d.exports.useState({});d.exports.useEffect(()=>{(async()=>{const{payload:r}=await g(D(t));N(r),x(r)})()},[]);const v=a=>{const r=new FormData;r.append("name",a.name),r.append("options",a.options),r.append("seri",a.seri),r.append("category",a.category),r.append("_id",t),r.append("linkVideo",a.linkVideo),r.append("seri",a.seri),r.append("LinkCopyright",a.LinkCopyright),r.append("copyright",a.copyright),r.append("descriptions",a.descriptions),r.append("trailer",a.trailer),r.append("image",a.image[0]),r.append("file",a.file[0]),r.append("year",a.year),r.append("country",a.country),r.append("typeId",a.typeId),r.append("categorymain",a.categorymain),r.append("dailyMotionServer",a.dailyMotionServer),g(T(r)),V.success(`S\u1EEDa ${a.name}} c\xF4ng`,{position:"bottom-right",autoClose:5e3,theme:"light"})},k=async a=>{const r=new FormData;r.append("fileupload",a.fileupload[0]),await F(t,r)};return n(l,{children:[n("form",{onSubmit:b(v),children:[e(l,{className:"mb-3",children:i("name","Product name",o)}),e(l,{className:"mb-3",children:i("seri","Seri",o)}),e(l,{className:"mb-3",children:i("view","View",o)}),e(l,{className:"mb-3",children:i("descriptions","Desciption",o)}),e(l,{className:"mb-3",children:i("copyright","Copyright",o)}),e(l,{className:"mb-3",children:i("LinkCopyright","LinkCopyright",o)}),e(l,{className:"mb-3",children:i("link","Video Url",o)}),e("div",{className:"mb-3",children:i("dailyMotionServer","DailyMotionServer",o)}),e(l,{className:"mb-3",children:i("server2","Assb server",o)}),e(l,{className:"mb-3",children:i("trailer","Trailer Video",o)}),n(l,{className:"mb-3",children:[e(l,{style:{width:"150px",height:"200px"},children:e("img",{style:{height:"100%",width:"100%"},src:c.image==null?"https://firebasestorage.googleapis.com/v0/b/mystorage-265d8.appspot.com/o/image%2Fdau-pha-thuong-khung-ova-3-hen-uoc-3-nam-856.jpg?alt=media&token=dca80d37-bb85-41a0-9fd5-c6e949e1db54":c.image,alt:""})}),e("br",{}),n("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"New Video Url"}),e("input",{type:"file",name:"file",...s("file"),className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"})]}),n("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"New Image"}),e("input",{type:"file",name:"image",...s("image"),className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"})]})]}),e(l,{className:"mb-3",children:i("year","Year",o)}),e(l,{className:"mb-3",children:i("country","country",o)}),e(l,{className:"mb-3",children:i("options","Options",o)}),e(l,{className:"form-label",children:"Category"}),n(m,{className:"form-select-sm mb-4",...s("category"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim t\u1EADp"}),u?u.data.map((a,r)=>{var y;return e("option",{value:a._id,selected:((y=c.category)==null?void 0:y._id)==a._id,children:a.name},r)}):""]}),e("br",{}),e(l,{className:"form-label",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim l\u1EBB"}),n(m,{className:"form-select-sm mb-4",...s("typeId"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim l\u1EBB phim b\u1ED9 1 t\u1EADp"}),h?h.map((a,r)=>e("option",{value:a._id,children:a.name},r)):""]}),e("br",{}),e(l,{className:"form-label",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a danh m\u1EE5c th\u1EC3 lo\u1EA1i g\u1ED3m c\xE1c danh m\u1EE5c con"}),n(m,{className:"form-select-sm mb-4",...s("categorymain"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a danh m\u1EE5c th\u1EC3 lo\u1EA1i g\u1ED3m c\xE1c danh m\u1EE5c con"}),p?p.map((a,r)=>e("option",{value:a._id,children:a.name},r)):""]}),e("br",{}),e(E,{htmlType:"submit",className:"btn btn-primary",children:"Submit"})]}),n("form",{onSubmit:b(k),children:[n("div",{className:"mb-3 mt-5",children:[e("label",{className:"form-label",children:"Video Url"}),e("input",{type:"file",name:"file",...s("fileupload"),className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"})]}),e("div",{className:"mt-2",children:e(E,{htmlType:"submit",className:"btn btn-primary",children:"Submit"})})]})]})};export{M as default};
