import{s as i,e as w,aq as E,u as I,h as D,r as g,ar as j,j as e,b as l,Q as p,as as k,at as v}from"./index.459aa913.js";import{u as A}from"./index.esm.31fec51b.js";const s=i.div``,B=i.button``,o=i.input``,P=()=>{const m=w(E),d=I(),{register:c,reset:h,handleSubmit:y}=A(),{id:u}=D(),[b,f]=g.exports.useState(""),N=a=>{a?(p.success("Edit successfully"),d(k(a))):p.error("Edit failure")};g.exports.useEffect(()=>{d(j(u)),(async()=>{const{data:t}=await v(u);h(t)})()},[]);const x=async a=>{const t=a.target.files[0],n=await C(t);f(n)},C=a=>new Promise((t,n)=>{const r=new FileReader;r.readAsDataURL(a),r.onload=()=>t(r.result),r.onerror=S=>n(S)});return console.log(b),e(s,{children:l("form",{onSubmit:y(N),children:[l(s,{className:"mb-3",children:[e("label",{className:"form-label",children:"Category name"}),e(o,{type:"text",...c("name"),className:"form-control"})]}),l(s,{className:"mb-3",children:[e("label",{className:"form-label",children:"Category des"}),e(o,{type:"text",...c("des"),className:"form-control"})]}),e(s,{className:"mb-2",style:{width:"150px",height:"150px"},children:e("img",{src:m?m.linkImg:"",alt:""})}),l(s,{className:"mb-3",children:[e("label",{className:"form-label",children:"Image"}),e(o,{type:"text",...c("linkImg"),className:"form-control"})]}),e(o,{type:"file",onChange:a=>x(a),placeholder:"Imgae Edit"}),e(B,{className:"btn btn-primary",children:"Click"})]})})};export{P as default};
