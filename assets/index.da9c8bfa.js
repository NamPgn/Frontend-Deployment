import{g as A,k as E,aU as D,r as d,i as T,aV as v,j as a,a9 as _,b as o,c as F,l,R as M,aW as h,aX as N,aY as y,x as j,aZ as I,a_ as R,Q as c,a$ as W}from"./index.599ff1bc.js";import{p as z}from"./type.9685e711.js";import{u as G}from"./index.esm.57a8eaf3.js";import{r as n,M as P,a as U}from"./index.904652d6.js";import"./DeleteOutlined.2072956b.js";import"./DownloadOutlined.48f15c52.js";const X=()=>{const i=A(),p=E(D),{seri:u,weeks:r}=d.exports.useContext(T),[m,g]=d.exports.useState(null),{handleSubmit:f,control:s}=G(),x=async e=>{const t=new FormData;t.append("name",e.name),t.append("des",e.des),t.append("sumSeri",e.sumSeri),t.append("week",e.week),t.append("type",e.type),t.append("file",e.file[0]),(await i(R(t))).payload.success?c.success("Th\xE0nh c\xF4ng"):c.error("Th\u1EA5t b\u1EA1i")},C=e=>{e?(c.success("Delete Success"),i(W(e))):c.error("Delete Fail")};d.exports.useEffect(()=>{i(v())},[]);const b=e=>{g(e)},S=async e=>{await z(m,{categoryId:e})},k=r&&(r==null?void 0:r.map((e,t)=>({label:e.name,value:e._id}))),w=p.data&&p.data.map((e,t)=>({key:e._id,stt:t+1,name:e.name,image:a(_,{width:150,height:200,style:{objectFit:"cover"},src:e.linkImg}),createAt:e.createdAt,action:o("div",{className:"flex gap-1",children:[a(F,{to:`/dashboard/category/edit/${e._id}`,children:a(l,{style:{background:"#1677ff"},type:"primary",children:"Edit"})}),a(l,{danger:!0,className:"text-light ml-2",onClick:()=>C(e._id),children:"Delete"}),a(l,{className:"text-light ml-2",onClick:()=>S(e._id),children:"Push"})]})}));return o(M.Fragment,{children:[a("div",{className:"p-2",style:{display:"flex",gap:"0 10px",justifyContent:"center"},children:u&&u.map((e,t)=>a("div",{children:e.path=="/"?"":a(h.Group,{value:m,children:a(h,{name:"aa",onChange:()=>b(e._id),children:e.name})})},t))}),o(N,{gutter:10,children:[a(y,{span:18,children:a(j,{columns:I,dataSource:w,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","20","30"]}})}),a(y,{span:6,children:o("form",{onSubmit:f(x),children:[n("name","Name",s),n("des","Description",s),n("sumSeri","T\u1ED5ng s\u1ED1 t\u1EADp",s),n("type","Ki\u1EC3u",s),n("week","Theo tu\u1EA7n",s),a(P,{name:"week",label:"Theo tu\u1EA7n",control:s,placeholder:"Week",defaultValue:void 0,style:{width:200},options:k}),a(U,{name:"file",label:"Upload",control:s}),a(l,{htmlType:"submit",className:"mt-2",children:"Create"})]})})]})]})};export{X as default};
