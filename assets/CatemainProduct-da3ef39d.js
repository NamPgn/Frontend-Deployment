import{w as d,j as a,b1 as l,q as r}from"./vendor-c6feb40d.js";import{aq as u,ar as m,w as h,h as x,Y as g,i as p,as as y,z as j}from"./index-3a949f9b.js";const o=u(),b=async(n,t)=>await m.post(`/categorymain/${n}/${o.user._id}`,t,{headers:{Authorization:`Bearer ${o.token}`}}),C=()=>{const{id:n}=d(),{data:t}=h(j+"/categorymain/"+n),c=async(s,e)=>{await b(s,{CatemainId:e})},i=t.products&&t.products.map((s,e)=>({key:e,stt:e+1,name:s.name,image:a.jsx(l,{style:{height:"200px",width:"150px"},src:s.image}),createdAt:s.createdAt,action:a.jsxs("span",{children:[a.jsx(x,{to:`/dashboard/trailerUrl/${s._id}`,children:a.jsx(r,{style:{background:"rgb(22, 119, 255)"},children:"Edit"})}),a.jsx(r,{danger:!0,className:"ml-2",onClick:()=>c(s._id,s.categorymain),children:"Del"})]})}));return a.jsxs(a.Fragment,{children:[a.jsx(g,{level:5,children:t.name}),a.jsx(p,{columns:y,dataSource:i})]})};export{C as default};