import{s as h,r as o,k as x,i as T,b as d,j as e,c as r,p as s,R as k,m as A,o as i,an as f,I as N,b0 as _,b1 as v}from"./index.276f64d2.js";import{d as D}from"./type.3438ea97.js";const E=h.div``,M=h.div`
align-items: center;
`,I=()=>{const[m,p]=o.exports.useState(""),{handleSubmit:P,control:u}=x(),y=async(a,n)=>{await D(a,{typeId:n})},b=a=>{p(a)},g=async a=>{await v(a,{TypeId:m})},{seri:l}=o.exports.useContext(T)||{},C=l?l.map((a,n)=>({key:n,stt:n+1,name:a.name,path:a.path,product:a.products.length?a.products.map((t,c)=>d(M,{className:"d-flex",children:[e(E,{className:"mr-2",children:t.name}),e(r,{to:`/dashboard/product/edit/${t._id}`,children:e(s,{children:"Edit"})}),e(s,{onClick:()=>y(t._id,a._id),className:"ml-2",children:"C\xFAt"}),e(s,{onClick:()=>g(t._id),className:"ml-2",children:"Push"})]},c)):"Tr\u1ED1ng!",categorymain:a.categorymain?a.categorymain.map((t,c)=>e(r,{to:"/dashboard/types/CatemainProduct/"+t.cates._id,children:e("div",{children:t.cates.name})},c)):"Tr\u1ED1ng!",createdAt:a.createdAt,action:e("span",{children:d(r,{to:`/dashboard/type/${a._id}`,children:[e(s,{children:"Edit"}),e(s,{danger:!0,className:"ml-2",children:"C\xFAt"})]})}),checked:e("input",{className:"form-check-input",type:"radio",name:"123",id:"defaultCheck1",onChange:()=>b(a._id)})})):"";return d(k.Fragment,{children:[d(A,{gutter:4,align:"middle",justify:"center",children:[e(i,{span:22,children:e(f,{name:"name",label:"Th\xEAm",control:u,rules:void 0})}),e(i,{span:2,children:e(s,{htmlType:"submit",className:"mt-3",type:"primary",children:"Th\xEAm"})})]}),e(N,{columns:_,dataSource:C})]})};export{I as default};
