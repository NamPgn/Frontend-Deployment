import{r as i,a9 as V,j as a,aU as F,f as d,v as O,aY as j,aZ as I,aQ as p}from"./vendor.7a0224e0.js";import{u as P,a as W,W as z,f as U,X as Y,o as f,i as g,j as r,E as o,p as B,Y as H,Z as Q,_ as Z,d as $,e as q}from"./index.7624cc79.js";import{p as G}from"./type.6f80c147.js";import{M as L}from"./index.b25028e0.js";import{M as R}from"./index.3a70433a.js";const se=()=>{const[b,u]=i.exports.useState(!1),v=()=>{u(!0)},S=()=>{u(!1)},A=()=>{u(!1)},m=P(),h=W(z),{seri:c,weeks:n}=i.exports.useContext(U),{handleSubmit:k,control:l}=V(),[y,w]=i.exports.useState();i.exports.useEffect(()=>{m(Y(1))},[1]);const x=c&&(c==null?void 0:c.map((e,s)=>({label:s+1+" - "+e.name,value:e._id,children:e.categorymain.map((t,E)=>({label:E+1+" - "+t.cates.name,value:t.cates._id}))}))),C=e=>{w(e)},M=async e=>{const s=new FormData;s.append("name",e.name),s.append("des",e.des),s.append("sumSeri",e.sumSeri),s.append("week",e.week),s.append("type",e.type),s.append("file",e.file),s.append("up",e.up),s.append("time",e.time),s.append("isActive",e.isActive),s.append("year",e.year),s.append("anotherName",e.anotherName),s.append("hour",e.hour),(await m(Q(s))).payload.success==!0?p.success("Th\xE0nh c\xF4ng"):p.error("Th\u1EA5t b\u1EA1i")},N=async e=>{(await m(Z(e))).payload?p.success("Delete Success"):p.error("Delete Failure")},D=async e=>{(await G(y,{categoryId:e})).data.success?$("Add category success!"):q("Failure!")},T=n&&(n==null?void 0:n.map((e,s)=>({label:e.name,value:e._id}))),_=h.data&&h.data.map((e,s)=>({key:e._id,stt:s+1,name:a(f,{to:"/q/"+e._id,children:e.name}),image:a(F,{width:150,height:200,style:{objectFit:"cover"},src:e.linkImg}),createAt:e.createdAt,duration:e.time,isActive:e.isActive==0?a(g,{color:"warning",children:"isPending"}):a(g,{color:"success",children:"Done"}),year:e.year,set:e.up,week:n&&n.map(t=>t._id==e.week&&t.name),action:d("div",{className:"flex gap-1",children:[a(f,{to:`/dashboard/category/edit/${e._id}`,children:a(r,{style:{background:"#1677ff"},type:"primary",children:"Edit"})}),a(r,{danger:!0,className:"ml-2",onClick:()=>N(e._id),children:"Delete"}),a(r,{className:"ml-2",onClick:()=>D(e._id),children:"Push"})]})}));return d(O.Fragment,{children:[d("div",{className:"flex gap-1",children:[a(r,{type:"primary",onClick:v,children:"New"}),a(j,{style:{width:"100%"},value:y,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:x,placeholder:"Please select",treeDefaultExpandAll:!0,onChange:C,className:"mb-2"})]}),a(I,{title:"Basic Modal",open:b,onOk:S,onCancel:A,children:d("form",{onSubmit:k(M),children:[a(o,{name:"name",label:"Name",control:l,rules:void 0}),a(o,{name:"anotherName",label:"Another Name",control:l,rules:void 0}),a(o,{name:"des",label:"Description",control:l,rules:void 0}),a(o,{name:"sumSeri",label:"Sum seri",control:l,rules:void 0}),a(o,{name:"type",label:"Type",control:l,rules:void 0}),a(o,{name:"week",label:"Week",control:l,rules:void 0}),a(o,{name:"time",label:"Duration",control:l,rules:void 0}),a(o,{name:"isActive",label:"isActive",control:l,rules:void 0}),a(o,{name:"year",label:"Year",control:l,rules:void 0}),a(o,{name:"up",label:"Set",control:l,rules:void 0}),a(o,{name:"hour",label:"Hour",control:l,rules:void 0}),a(L,{name:"week",label:"Theo tu\u1EA7n",control:l,placeholder:"Week",defaultValue:"Week",options:T}),a(R,{name:"file",label:"Upload",control:l}),a(r,{htmlType:"submit",className:"mt-2",children:"Create"})]})}),a(B,{columns:H,dataSource:_,scroll:{x:1e3,y:1e3},pagination:{defaultPageSize:20,showSizeChanger:!0,pageSizeOptions:["20","40","60"]}})]})};export{se as default};
