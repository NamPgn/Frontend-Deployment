import{r as s,V as g,f as y,a as e,j as l,B as E,t as f,W as v,Q as t}from"./index.eb18c47b.js";import{u as x}from"./index.esm.16921c30.js";import{r as n}from"./index.03e1ad27.js";const w=()=>{const{categorymain:c,LoadingCateMain:N,seri:d,loadingSeri:C,isError:m}=s.exports.useContext(g),[p,u]=s.exports.useState([]);s.exports.useEffect(()=>{(async()=>{u(await f())})()},[]);const h=y(),{register:o,handleSubmit:b,control:i}=x();return e("div",{children:l("form",{onSubmit:b(r=>{const a=new FormData;a.append("name",r.name),a.append("options",r.options),a.append("category",r.category),a.append("file",r.file[0]),a.append("seri",r.seri),a.append("LinkCopyright",r.LinkCopyright),a.append("copyright",r.copyright),a.append("descriptions",r.descriptions),a.append("trailer",r.trailer),a.append("image",r.image[0]),a.append("year",r.year),a.append("country",r.country),a.append("typeId",r.typeId),a.append("categorymain",r.categorymain),h(v(a)),m&&t.error("th\u1EA5t b\u1EA1i"),t.success("th\xE0nh c\xF4ng")}),children:[e("div",{className:"mb-3",children:n("name","Product name",i)}),e("div",{className:"mb-3",children:n("view","View",i)}),e("div",{className:"mb-3",children:n("seri","Seri",i)}),e("div",{className:"mb-3",children:n("descriptions","Desciption",i)}),e("div",{className:"mb-3",children:n("copyright","Copyright",i)}),e("div",{className:"mb-3",children:n("LinkCopyright","LinkCopyright",i)}),l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Video Url"}),e("input",{type:"file",name:"file",...o("file"),className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"})]}),l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Image"}),e("input",{type:"file",name:"image",...o("image"),className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"})]}),e("div",{className:"mb-3",children:n("trailer","Trailer Video",i)}),e("div",{className:"mb-3",children:n("year","Year",i)}),e("div",{className:"mb-3",children:n("country","Country",i)}),e("div",{className:"mb-3",children:n("options","Options",i)}),e("div",{className:"form-label",children:"Category"}),l("select",{className:"form-select-sm mb-4",...o("category"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim t\u1EADp"}),p.map((r,a)=>e("option",{value:r._id,children:r.name},a))]}),e("br",{}),e("div",{className:"form-label",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim l\u1EBB"}),l("select",{className:"form-select-sm mb-4",...o("typeId"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a phim l\u1EBB phim b\u1ED9 1 t\u1EADp"}),d.map((r,a)=>e("option",{value:r._id,children:r.name},a))]}),e("br",{}),e("div",{className:"form-label",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a danh m\u1EE5c th\u1EC3 lo\u1EA1i g\u1ED3m c\xE1c danh m\u1EE5c con"}),l("select",{className:"form-select-sm mb-4",...o("categorymain"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Th\u1EC3 lo\u1EA1i c\u1EE7a danh m\u1EE5c th\u1EC3 lo\u1EA1i g\u1ED3m c\xE1c danh m\u1EE5c con"}),c.map((r,a)=>e("option",{value:r._id,children:r.name},a))]}),e("br",{}),e("div",{className:"mt-2",children:e(E,{htmlType:"submit",className:"btn btn-primary",children:"Submit"})})]})})};export{w as default};
