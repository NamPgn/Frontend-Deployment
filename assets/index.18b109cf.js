import{s as i,f as p,K as n,j as e}from"./vendor.bb3b024f.js";import{c as m}from"./index.c1f8a243.js";const o=i.div`
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
`;const r=i.div`
  font-weight: 500;
  margin-top: 15px;
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`,d=i.div`
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
`;const l=i.div`
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
`,c=({data:t,children:a,...s})=>p(n.Fragment,{children:[p(d,{children:[e(m,{to:"/",children:"Trang ch\u1EE7"})," - ",t&&t.name]}),e(r,{className:"text-white",children:t&&t.name}),e(d,{className:"mt-3 mb-5",children:"Tuy\u1EC3n ch\u1ECDn Phim hay nh\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao, Phim Chi\u1EBFu R\u1EA1p 2024 ch\u1ECDn l\u1ECDc c\xF3 thuy\u1EBFt minh v\xE0 vi\u1EC7t sub."}),a]});export{o as D,c as M,l as a};
