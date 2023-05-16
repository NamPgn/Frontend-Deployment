import{s as t,r as u,u as l,a as h,d as p,j as e,L as g,M as v,b,c as y}from"./index.731c63ef.js";const E=t.div``,m=t.div`
font-weight:500;
margin-top:15px;
font-size:25px;
`,s=t.div`
font-size:15px;
color:#999;
`,x=t.div`
padding:15px;
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 15px;
text-align: center;
margin-top: 50px;


`;t.div``;const f=t.div`
padding:20px;
border-radius:5px;
font-size:18px;
font-weight:500;
&:hover{
  cursor:pointer;
}
`,S=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],k=t.div``,D=t.div``,C=()=>{u.exports.useState(!1);const{id:o}=l(),{data:{categorymain:n},isLoading:d,isError:c}=h(p+`/type/${o}`);return d?e(g,{}):c?e(v,{}):e(E,{children:e(k,{children:b(D,{children:[e(s,{children:"Trang ch\u1EE7 - th\u1EC3 lo\u1EA1i"}),e(m,{children:"Th\u1EC3 lo\u1EA1i"}),e(s,{className:"mt-3 mb-4",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."}),e(x,{children:n?n.map((r,i)=>e(y,{to:`/types/h/${r.cates._id}`,children:e(f,{style:S[i],children:r.cates.name})},i)):""})]})})})},a=t.div`
height: 100vh;
color: #fff;
`,T=()=>e(a,{className:"col-md-10",children:e(C,{})}),j=Object.freeze(Object.defineProperty({__proto__:null,TypeStyled:a,default:T},Symbol.toStringTag,{value:"Module"}));export{s as D,a as T,m as a,j as i};
