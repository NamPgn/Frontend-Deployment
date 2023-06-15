import{s as t,u,a as l,d as h,j as e,L as p,M as g,b,c as v}from"./index.fab02c97.js";const y=t.div``,E=t.div`
font-weight:500;
margin-top:15px;
font-size:25px;
`,s=t.div`
font-size:15px;
color:#999;
`,m=t.div`
padding:15px;
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 15px;
text-align: center;
margin-top: 50px;


`,x=t.div`
padding:20px;
border-radius:5px;
font-size:18px;
font-weight:500;
&:hover{
  cursor:pointer;
}
`,f=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],S=t.div``,k=t.div``,D=()=>{const{id:o}=u(),{data:{categorymain:n},isLoading:d,isError:c}=l(h+`/type/${o}`);return d?e(p,{}):c?e(g,{}):e(y,{children:e(S,{className:"p-3",children:b(k,{children:[e(s,{children:"Trang ch\u1EE7 - th\u1EC3 lo\u1EA1i"}),e(E,{children:"Th\u1EC3 lo\u1EA1i"}),e(s,{className:"mt-3 mb-4",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."}),e(m,{children:n?n.map((i,r)=>e(v,{to:`/types/h/${i.cates._id}`,children:e(x,{style:f[r],children:i.cates.name})},r)):""})]})})})},a=t.div`
height: 100vh;
color: #fff;
`,C=()=>e(a,{className:"w-10/12",children:e(D,{})}),A=Object.freeze(Object.defineProperty({__proto__:null,TypeStyled:a,default:C},Symbol.toStringTag,{value:"Module"}));export{s as D,a as T,E as a,A as i};
