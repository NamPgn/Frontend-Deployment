import{u}from"./index.esm.3fb90449.js";import{s as m,f as d,g as p,a as e,j as r,o as b,Q as h}from"./index.0fbcf04d.js";const a=m.div``,g=m.button``,o=m.input``,q=()=>{const{register:t,handleSubmit:i,reset:f}=u(),n=d(),c=p();return e(a,{children:r("form",{onSubmit:i(l=>{const s=new FormData;s.append("image",l.image[0]),s.append("username",l.username),s.append("email",l.email),s.append("password",l.password),n(b(s)),c("/admin/users"),h.success("Th\xEAm user th\xE0nh c\xF4ng",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}),children:[r(a,{className:"mb-3",children:[e("label",{className:"form-label",children:"User name"}),e(o,{type:"text",...t("username",{required:!0}),className:"form-control",required:!0})]}),r(a,{className:"mb-3",children:[e("label",{className:"form-label",children:"Email"}),e(o,{type:"text",...t("email",{required:!0}),className:"form-control",required:!0})]}),r(a,{className:"mb-3",children:[e("label",{className:"form-label",children:"Password"}),e(o,{type:"password",...t("password",{required:!0}),className:"form-control",required:!0})]}),r(a,{className:"mb-3",children:[e("label",{className:"form-label",children:"Image"}),e(o,{type:"file",...t("image"),className:"form-control",required:!0})]}),e(g,{className:"btn btn-primary",children:"Submit"})]})})};export{q as default};