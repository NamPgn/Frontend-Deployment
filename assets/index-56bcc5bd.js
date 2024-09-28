import{r as c,d as E,j as a,I as O,R as F,f as I,M as W,Q as p}from"./vendor-0710fd16.js";import{e as q,g as R,R as z,D as B,E as H,c as y,p as g,q as i,w as n,s as U,T as $,V as G,W as L,k as Q,l as Y}from"./index-b2596b2e.js";import{p as J}from"./type-fb7332ef.js";import{M as K}from"./index-8b897561.js";import{M as X}from"./index-fb9e1258.js";const ne=()=>{const[j,u]=c.useState(!1),[m,b]=c.useState(1),f=()=>{u(!0)},v=()=>{u(!1)},S=()=>{u(!1)},h=q(),r=R(z),{seri:d,weeks:o}=c.useContext(B),{handleSubmit:k,control:l}=E(),[x,w]=c.useState();c.useEffect(()=>{h(H(m))},[m]);const C=d&&(d==null?void 0:d.map((e,s)=>({label:s+1+" - "+e.name,value:e._id,children:e.categorymain.map((t,P)=>({label:P+1+" - "+t.cates.name,value:t.cates._id}))}))),M=e=>{w(e)},A=async e=>{const s=new FormData;s.append("name",e.name),s.append("des",e.des),s.append("sumSeri",e.sumSeri),s.append("week",e.week),s.append("type",e.type),s.append("file",e.file),s.append("up",e.up),s.append("time",e.time),s.append("isActive",e.isActive),s.append("year",e.year),s.append("anotherName",e.anotherName),s.append("hour",e.hour),s.append("lang",e.lang),s.append("season",e.season),s.append("quality",e.quality),(await h(G(s))).payload.success==!0?p.success("Thành công"):p.error("Thất bại")},D=async e=>{(await h(L(e))).payload?p.success("Delete Success"):p.error("Delete Failure")},N=async e=>{(await J(x,{categoryId:e})).data.success?Q("Add category success!"):Y("Failure!")},T=e=>{b(e)},V=o&&(o==null?void 0:o.map((e,s)=>({label:e.name,value:e._id}))),_=r.data&&r.data.map((e,s)=>({key:e._id,stt:e._id,name:a.jsx(y,{to:"/q/"+e._id,children:e.name}),slug:e.slug,image:a.jsx(O,{width:150,height:200,style:{objectFit:"cover"},src:e.linkImg}),createAt:e.createdAt,duration:e.time,isActive:e.isActive==0?a.jsx(g,{color:"warning",children:"isPending"}):a.jsx(g,{color:"success",children:"Done"}),year:e.year,set:e.up,week:o&&o.map(t=>t._id==e.week&&t.name),action:a.jsxs("div",{className:"flex gap-1",children:[a.jsx(y,{to:`/dashboard/category/edit/${e.slug}`,children:a.jsx(i,{style:{background:"#1677ff"},type:"primary",children:"Edit"})}),a.jsx(i,{danger:!0,className:"ml-2",onClick:()=>D(e._id),children:"Delete"}),a.jsx(i,{className:"ml-2",onClick:()=>N(e._id),children:"Push"})]})}));return a.jsxs(F.Fragment,{children:[a.jsxs("div",{className:"flex gap-1",children:[a.jsx(i,{type:"primary",onClick:f,children:"New"}),a.jsx(I,{style:{width:"100%"},value:x,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:C,placeholder:"Please select",treeDefaultExpandAll:!0,onChange:M,className:"mb-2"})]}),a.jsx(W,{title:"Basic Modal",open:j,onOk:v,onCancel:S,children:a.jsxs("form",{onSubmit:k(A),children:[a.jsx(n,{name:"name",label:"Name",control:l,rules:void 0}),a.jsx(n,{name:"anotherName",label:"Another Name",control:l,rules:void 0}),a.jsx(n,{name:"des",label:"Description",control:l,rules:void 0}),a.jsx(n,{name:"sumSeri",label:"Sum seri",control:l,rules:void 0}),a.jsx(n,{name:"type",label:"Type",control:l,rules:void 0}),a.jsx(n,{name:"week",label:"Week",control:l,rules:void 0}),a.jsx(n,{name:"time",label:"Duration",control:l,rules:void 0}),a.jsx(n,{name:"isActive",label:"isActive",control:l,rules:void 0}),a.jsx(n,{name:"year",label:"Year",control:l,rules:void 0}),a.jsx(n,{name:"up",label:"Set",control:l,rules:void 0}),a.jsx(n,{name:"hour",label:"Hour",control:l,rules:void 0}),a.jsx(K,{name:"week",label:"Theo tuần",control:l,placeholder:"Week",defaultValue:"Week",options:V}),a.jsx(X,{name:"file",label:"Upload",control:l}),a.jsx(i,{htmlType:"submit",className:"mt-2",children:"Create"})]})}),a.jsx(U,{columns:$,dataSource:_,scroll:{x:1e3,y:1e3},pagination:{defaultPageSize:24,showSizeChanger:!0,pageSizeOptions:["24","44","64"],current:m,onChange:T,total:r==null?void 0:r.totalCount}})]})};export{ne as default};
