import{k as d,g as u,h as c,j as e,d as n,aH as i,p,D as h,V as b}from"./index.326cfc28.js";const f=()=>{const{register:l,handleSubmit:m,control:r}=d(),o=u(),t=c();return e("div",{children:n("form",{onSubmit:m(a=>{const s=new FormData;s.append("image",a.image[0]),s.append("username",a.username),s.append("email",a.email),s.append("password",a.password),o(h(s)),t("/dashboard/users"),b.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}),children:[e("div",{className:"mb-3",children:e(i,{name:"username",label:"User name",control:r,rules:void 0})}),e("div",{className:"mb-3",children:e(i,{name:"email",label:"Email",control:r,rules:void 0})}),e("div",{className:"mb-3",children:e(i,{name:"password",label:"Password",control:r,rules:void 0})}),n("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Image"}),e("input",{type:"file",...l("image"),className:"form-control",required:!0})]}),e(p,{className:"btn btn-primary",children:"Submit"})]})})};export{f as default};