import{r as s,u as m,j as e,a as l,v as p,bc as d,Q as h}from"./index.e6e2d6f7.js";import"./build.min.b7832ae4.js";import{u as b}from"./index.esm.0902a80d.js";import{u}from"./useDispatch.1cdbc2b0.js";const C=()=>{const[i,n]=s.exports.useState([]);s.exports.useEffect(()=>{(async()=>{n(await p())})()},[]);const o=u();m();const{register:t,reset:f,handleSubmit:c}=b();return e("div",{children:l("form",{onSubmit:c(a=>{const r=new FormData;r.append("name",a.name),r.append("price",a.price),r.append("category",a.category),r.append("file",a.file[0]),r.append("seri",a.seri),r.append("LinkCopyright",a.LinkCopyright),r.append("copyright",a.copyright),r.append("descriptions",a.descriptions),r.append("trailer",a.trailer),o(d(r)),console.log("data",a),h.success("Add Product Success",{position:"bottom-right",autoClose:5e3,theme:"light"})}),children:[l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Product name"}),e("input",{type:"text",name:"name",...t("name"),className:"form-control"})]}),l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"View"}),e("input",{type:"text",name:"price",...t("price"),className:"form-control"})]}),l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Desciption"}),e("input",{type:"text",name:"descriptions",...t("descriptions"),className:"form-control"})]}),l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Seri"}),e("input",{type:"text",name:"seri",...t("seri"),className:"form-control"})]}),l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Copyright"}),e("input",{type:"text",name:"copyright",...t("copyright"),className:"form-control"})]}),l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"LinkCopyright"}),e("input",{type:"text",name:"LinkCopyright",...t("LinkCopyright"),className:"form-control"})]}),l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Video Url"}),e("input",{type:"file",name:"file",...t("file"),className:"form-control"})]}),l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Trailer Video"}),e("input",{type:"text",name:"trailer",...t("trailer"),className:"form-control"})]}),e("div",{className:"form-label",children:"Category"}),l("select",{className:"form-select-sm",...t("category"),style:{border:"none",padding:"10px",outline:"none"},"aria-label":".form-select-sm example",children:[e("option",{value:"",children:"Open this select menu"}),i.map((a,r)=>e("option",{value:a._id,children:a.name},r))]}),e("br",{}),e("div",{children:e("button",{className:"btn btn-primary",children:"Submit"})})]})})};export{C as default};
