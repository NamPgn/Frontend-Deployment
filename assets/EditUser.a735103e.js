import{s as l,u as g,h as f,r as d,a as N,j as e,b as r,b7 as y,b8 as E,Q as S}from"./index.49430263.js";import{u as x}from"./index.esm.55a4d311.js";const t=l.div``,w=l.button``,i=l.input``,v=l.form``,D=l.img`
width: 200px; height: 200px; objectFit: cover ;
`,I=()=>{const{register:o,handleSubmit:u,reset:p}=x(),m=g(),{id:n}=f(),[c,h]=d.exports.useState(),b=N();return d.exports.useEffect(()=>{(async()=>{const{payload:s}=await m(y(n));p(s),h(s)})()},[]),e(t,{children:r(v,{onSubmit:u(a=>{const s=new FormData;s.append("image",a.image[0]),s.append("username",a.username),s.append("email",a.email),s.append("password",a.password),s.append("_id",n),m(E(s)),b("/admin/users"),S.success(`S\u1EEDa ${formdata.append("username",a.username)} th\xE0nh c\xF4ng`,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}),children:[r(t,{className:"mb-3",children:[e("label",{className:"form-label",children:"User name"}),e(i,{type:"text",...o("username",{required:!0}),className:"form-control"})]}),r(t,{className:"mb-3",children:[e("label",{className:"form-label",children:"Email"}),e(i,{type:"email",...o("email",{required:!0}),className:"form-control"})]}),r(t,{className:"mb-3",children:[e("label",{className:"form-label",children:"Password"}),e(i,{type:"password",...o("password",{required:!0}),className:"form-control"})]}),e(t,{children:"Image"}),e(D,{src:c?c.image:"",className:"img-radius",alt:"User-Profile-Image"}),r(t,{className:"mb-3",children:[e("label",{className:"form-label",children:"Image"}),e(i,{type:"file",...o("image"),className:"form-control"})]}),e(w,{className:"btn btn-primary",children:"Submit"})]})})};export{I as default};
