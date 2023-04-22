import{s as e,r as u,u as l,a as h,d as p,j as t,L as g,b as v,c as E}from"./index.ab531237.js";import"./CartAdmin.86a97c86.js";const b=e.div``,m=e.div`
font-weight:500;
margin-top:15px;
font-size:25px;
`,o=e.div`
font-size:15px;
color:#999;
`,y=e.div`
padding:15px;
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 15px;
text-align: center;
margin-top: 50px;


`;e.div``;const x=e.div`
padding:20px;
border-radius:5px;
font-size:18px;
font-weight:500;
&:hover{
  cursor:pointer;
}
`,f=[{background:"#101010"},{background:"#dbc100"},{background:"#3040b3"},{background:"#1dc3ed"},{background:"#101010"},{background:"#368c27"},{background:"#d11b1b"},{background:"#101010"},{background:"#101010"}],S=e.div``,D=e.div``,k=()=>{u.exports.useState(!1);const{id:a}=l(),{data:{categorymain:i},isLoading:s,isError:c}=h(p+`/type/${a}`);return s?t(g,{}):c?"L\u1ED7i r\u1ED3i":t(b,{children:t(S,{children:v(D,{children:[t(o,{children:"Trang ch\u1EE7 - th\u1EC3 lo\u1EA1i"}),t(m,{children:"Th\u1EC3 lo\u1EA1i"}),t(o,{className:"mt-3 mb-4",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2022 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."}),t(y,{children:i?i.map((n,r)=>t(E,{to:`/types/h/${n.cates._id}`,children:t(x,{style:f[r],children:n.cates.name})},r)):""})]})})})},d=e.div`
height: 100vh;
color: #fff;
`,C=()=>t(d,{className:"col-md-10",children:t(k,{})}),j=Object.freeze(Object.defineProperty({__proto__:null,TypeStyled:d,default:C},Symbol.toStringTag,{value:"Module"}));export{o as D,d as T,m as a,j as i};
