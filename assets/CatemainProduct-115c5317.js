import{w as d,j as a,a_ as l,q as r}from"./vendor-2321f3a2.js";import{ap as u,aq as m,w as h,h as x,Y as p,i as g,ar as y,z as j}from"./index-783d9d7f.js";const o=u(),k=async(n,t)=>await m.post(`/categorymain/${n}/${o.user._id}`,t,{headers:{Authorization:`Bearer ${o.token}`}}),C=()=>{const{id:n}=d(),{data:t}=h(j+"/categorymain/"+n),c=async(s,e)=>{await k(s,{CatemainId:e})},i=t.products&&t.products.map((s,e)=>({key:e,stt:e+1,name:s.name,image:a.jsx(l,{style:{height:"200px",width:"150px"},src:s.image}),createdAt:s.createdAt,action:a.jsxs("span",{children:[a.jsx(x,{to:`/dashboard/trailerUrl/${s._id}`,children:a.jsx(r,{style:{background:"rgb(22, 119, 255)"},children:"Edit"})}),a.jsx(r,{danger:!0,className:"ml-2",onClick:()=>c(s._id,s.categorymain),children:"Del"})]})}));return a.jsxs(a.Fragment,{children:[a.jsx(p,{level:5,children:t.name}),a.jsx(g,{columns:y,dataSource:i})]})};export{C as default};
