import{s as i,j as t,I as n}from"./vendor-5f4444f9.js";import{c as s}from"./index-e767e9f8.js";const h=i.div`
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
`;const a=i.div`
  font-weight: 500;
  margin-top: 15px;
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`,p=i.div`
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
`;const o=i.div`
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
`,l=({data:e,children:d,...x})=>t.jsxs(n.Fragment,{children:[t.jsxs(p,{children:[t.jsx(s,{to:"/",children:"Trang chủ"})," - ",e&&e.name]}),t.jsx(a,{className:"text-white",children:e&&e.name}),t.jsx(p,{className:"mt-3 mb-5",children:"Tuyển chọn Phim hay nhất chất lượng cao, Phim Chiếu Rạp 2024 chọn lọc có thuyết minh và việt sub."}),d]});export{h as D,l as M,o as a};
