import{s as y,r as c,V as C,g as k,u as v,f as w,a as e,j as s,B as S,X as A,t as D,Y as P,Q as T}from"./index.eb18c47b.js";import{u as V}from"./index.esm.16921c30.js";import{r as i}from"./index.03e1ad27.js";const o=y.div``,d=y.select``,U=()=>{const{categorymain:p,LoadingCateMain:B,seri:u,loadingSeri:F,isError:_}=c.exports.useContext(C);k();const{id:h}=v(),{handleSubmit:E,reset:f,register:n,control:t}=V(),g=w(),[m,N]=c.exports.useState({}),[b,x]=c.exports.useState([]);return c.exports.useEffect(()=>{(async()=>{const{payload:l}=await g(A(h));f(l),N(l)})(),(async()=>{x(await D())})()},[]),e(o,{children:s("form",{onSubmit:E(a=>{const r=new FormData;r.append("name",a.name),r.append("options",a.options),r.append("seri",a.seri),r.append("category",a.category),r.append("_id",h),r.append("linkVideo",a.linkVideo),r.append("seri",a.seri),r.append("LinkCopyright",a.LinkCopyright),r.append("copyright",a.copyright),r.append("descriptions",a.descriptions),r.append("trailer",a.trailer),r.append("image",a.image[0]),r.append("year",a.year),r.append("country",a.country),r.append("typeId",a.typeId),r.append("categorymain",a.categorymain),g(P(r)),T.success(`S\u1EEDa ${a.name}} c\xF4ng`,{position:"bottom-right",autoClose:5e3,theme:"light"})}),children:[e(o,{className:"mb-3",children:i("name","Product name",t)}),e(o,{className:"mb-3",children:i("seri","Seri",t)}),e(o,{className:"mb-3",children:i("view","View",t)}),e(o,{className:"mb-3",children:i("descriptions","Desciption",t)}),e(o,{className:"mb-3",children:i("copyright","Copyright",t)}),e(o,{className:"mb-3",children:i("LinkCopyright","LinkCopyright",t)}),e(o,{className:"mb-3",children:i("link","Video Url",t)}),e(o,{className:"mb-3",children:i("trailer","Trailer Video",t)}),s(o,{className:"mb-3",children:[e(o,{style:{width:"150px",height:"200px"},children:e("img",{style:{height:"100%",width:"100%"},src:m.image==null?"https://firebasestorage.googleapis.com/v0/b/mystorage-265d8.appspot.com/o/image%2Fdau-pha-thuong-khung-ova-3-hen-uoc-3-nam-856.jpg?alt=media&token=dca80d37-bb85-41a0-9fd5-c6e949e1db54":m.image,alt:""})}),e("br",{}),s("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"New Video Url"}),e("input",{type:"file",name:"file",...n("file"),className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"})]}),s("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"New Image"}),e("input",{type:"file",name:"image",...n("image"),className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"})]})]}),e(o,{className:"mb-3",children:i("year","Year",t)}),e(o,{className:"mb-3",children:i("country","country",t)}),e(o,{className:"mb-3",children:i("options","Options",t)}),e(o,{className:"form-label",children:"Category"}),s(d,{className:"form-select-sm mb-4",...n("category"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim t\u1EADp"}),b?b.map((a,r)=>{var l;return e("option",{value:a._id,selected:((l=m.category)==null?void 0:l._id)==a._id,children:a.name},r)}):""]}),e("br",{}),e(o,{className:"form-label",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim l\u1EBB"}),s(d,{className:"form-select-sm mb-4",...n("typeId"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim l\u1EBB phim b\u1ED9 1 t\u1EADp"}),u?u.map((a,r)=>e("option",{value:a._id,children:a.name},r)):""]}),e("br",{}),e(o,{className:"form-label",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a danh m\u1EE5c th\u1EC3 lo\u1EA1i g\u1ED3m c\xE1c danh m\u1EE5c con"}),s(d,{className:"form-select-sm mb-4",...n("categorymain"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a danh m\u1EE5c th\u1EC3 lo\u1EA1i g\u1ED3m c\xE1c danh m\u1EE5c con"}),p?p.map((a,r)=>e("option",{value:a._id,children:a.name},r)):""]}),e("br",{}),e(S,{htmlType:"submit",className:"btn btn-primary",children:"Submit"})]})})};export{U as default};
