import{ae as d,M as c,j as s,as as u}from"./vendor-172e24aa.js";import{a as p,P as i,c as h,H as b}from"./index-5163a13e.js";const j=()=>{const{register:m,handleSubmit:n,control:r}=d(),o=p(),l=c(),t=a=>{const e=new FormData;e.append("image",a.image[0]),e.append("username",a.username),e.append("email",a.email),e.append("password",a.password),o(b(e)),l("/dashboard/users"),u.success("Thêm user thành công",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return s.jsx("div",{children:s.jsxs("form",{onSubmit:n(t),children:[s.jsx("div",{className:"mb-3",children:s.jsx(i,{name:"username",label:"User name",control:r,rules:void 0})}),s.jsx("div",{className:"mb-3",children:s.jsx(i,{name:"email",label:"Email",control:r,rules:void 0})}),s.jsx("div",{className:"mb-3",children:s.jsx(i,{name:"password",label:"Password",control:r,rules:void 0})}),s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{className:"form-label",children:"Image"}),s.jsx("input",{type:"file",...m("image"),className:"form-control",required:!0})]}),s.jsx(h,{className:"btn btn-primary",children:"Submit"})]})})};export{j as default};
