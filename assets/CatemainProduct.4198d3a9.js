import{a7 as l,a8 as u,u as m,c as h,V as y,w as g,ao as p,b}from"./index.45fbee5f.js";import{y as k,j as t,b0 as w,f as r,v as o,t as x}from"./vendor.bb3b024f.js";const c=l(),A=async(n,s)=>await u.post(`/categorymain/${n}/${c.user._id}`,s,{headers:{Authorization:`Bearer ${c.token}`}}),V=()=>{const{id:n}=k(),{data:s}=m(b+"/categorymain/"+n),i=async(a,e)=>{await A(a,{CatemainId:e})},d=s.products&&s.products.map((a,e)=>({key:e,stt:e+1,name:a.name,image:t(w,{style:{height:"200px",width:"150px"},src:a.image}),createdAt:a.createdAt,action:r("span",{children:[t(h,{to:`/dashboard/trailerUrl/${a._id}`,children:t(o,{style:{background:"rgb(22, 119, 255)"},children:"Edit"})}),t(o,{danger:!0,className:"ml-2",onClick:()=>i(a._id,a.categorymain),children:"Del"})]})}));return r(x,{children:[t(y,{level:5,children:s.name}),t(g,{columns:p,dataSource:d})]})};export{V as default};
