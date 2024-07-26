import{r as s,j as e,a$ as h,s as i,f as d,v as g,F as u}from"./vendor.7a0224e0.js";import{o as l,f,a as m,u as y,X as E,ab as w,af as v}from"./index.7624cc79.js";const C=s.exports.memo(({totalItems:t,pageSize:a,currentPage:n,onChange:p,className:o,defaultCurrent:x})=>e(h,{simple:!0,className:o,total:t,current:n,onChange:p,pageSize:a,defaultCurrent:x}));i.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;i.div``;i.img`
  border-radius: 5px;
`;i.div`
  width: 220px;
  height: 350px;
  @media (1024px) {
    width: 220px;
    height: 350px;
  }
  @media (768px) {
    width: 120px;
    height: 250px;
  }
`;const z=i.div`
  font-weight: 500;
  margin-top: 15px;
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`,c=i.div`
  font-size: 12px;
  color: #999;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;i.div`
  margin: 10px 0;
  font-weight: 500;
`;i.div`
  padding: 20px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 17px;
  }
`;const D=({data:t,children:a,...n})=>d(g.Fragment,{children:[d(c,{children:[e(l,{to:"/",children:"Trang ch\u1EE7"})," - ",t&&t.name]}),e(z,{className:"text-white",children:t&&t.name}),e(c,{className:"mt-3 mb-5",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2024 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."}),a]});function A(){const{setPage:t,page:a}=s.exports.useContext(f),n=m(r=>r.category.category),p=y();return s.exports.useEffect(()=>{p(E(a))},[a]),m(r=>r.category.isLoading)?e(w,{}):e(u,{children:d(D,{data:{name:"Danh m\u1EE5c"},children:[e(v,{type:"category",gutter:[16,16],child:n&&n.data}),e(C,{className:"text-center",currentPage:a,defaultCurrent:1,totalItems:n.length,pageSize:20,onChange:r=>t(r)})]})})}const P=()=>e(A,{});export{P as default};
