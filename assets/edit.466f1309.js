import{g as y,r as p,k as b,u as g,bJ as h,d as v,j as s,aH as n,C as f,p as S,bK as x,V as l,bL as C}from"./index.326cfc28.js";import{M as k}from"./index.a7e93f2e.js";import"./DeleteOutlined.454bbf8e.js";import"./DownloadOutlined.3aa77366.js";const E=()=>{const r=y(),[i,m]=p.exports.useState({}),{reset:d,handleSubmit:u,control:t}=b(),{id:o}=g(),c=async a=>{const e=new FormData;e.append("_id",a._id),e.append("name",a.name),e.append("des",a.des),e.append("sumSeri",a.sumSeri),e.append("week",a.week),e.append("type",a.type),e.append("file",a.file),e.append("up",a.up),e.append("time",a.time),e.append("isActive",a.isActive),e.append("year",a.year),e.append("anotherName",a.anotherName),(await r(x(e))).payload?l.success("Edit successfully"):l.error("Edit failure")};return p.exports.useEffect(()=>{r(h(o)),(async()=>{const{data:e}=await C(o);d(e),m(e)})()},[]),v("form",{onSubmit:u(c),children:[s(n,{name:"name",label:"Category name",control:t,rules:void 0}),s(n,{name:"anotherName",label:"Another Name",control:t,rules:void 0}),s(n,{name:"des",label:"Category des",control:t,rules:void 0}),s(n,{name:"time",label:"Duration",control:t,rules:void 0}),s(n,{name:"isActive",label:"isActive",control:t,rules:void 0}),s(n,{name:"year",label:"Year",control:t,rules:void 0}),s(n,{name:"type",label:"Type",control:t,rules:void 0}),s(n,{name:"up",label:"Set",control:t,rules:void 0}),s(f,{className:"h-[200px] md:h-[300px] lg:h-[400px] transition-opacity duration-300 group-hover:opacity-40",src:i&&i.linkImg,alt:i.name}),s(n,{name:"linkImg",label:"Link Image",control:t,rules:void 0}),s(k,{name:"file",label:"Image",control:t}),s(S,{htmlType:"submit",className:"btn btn-primary",children:"Click"})]})};export{E as default};