import{s as a,r as g,f,h as b,j as e,b as n,c as x,k as S,Q as u}from"./index.d8c75ef9.js";import{u as v}from"./index.esm.ed617045.js";import{c as y,a as i,o as N}from"./yup.module.cc7e6500.js";const t=a.div``,w=a.button``,m=a.input``,q=a.form``,j=()=>{const[o,E]=g.exports.useState(localStorage.getItem("token")),l=y().shape({username:i().required().test("is-email","Username must not contain @",r=>!r.includes("@")).max(15,"Your Name value must be at most 10 characters long").matches(/^[A-Za-z]+$/),password:i().required().max(15,"Password value must be at most 10 characters long")}).required(),{register:c,handleSubmit:d,formState:{errors:s}}=v({resolver:N(l)}),p=f(),h=b();return e(t,{className:"mb-5 vh-100",children:e(q,{className:"containers formContainer",onSubmit:d(r=>{p(S(r)),o!=null?(u.success("th\xE0nh c\xF4ng"),h("/")):u.error("th\u1EA5t b\u1EA1i")}),children:n(t,{children:[n(t,{className:"inputGroup des",children:[e(m,{type:"text",className:"input",...c("username"),required:"",placeholder:"Username",autoComplete:"off"}),s.username&&e("p",{children:s.username.message})]}),n(t,{className:"inputGroup des",children:[e(m,{type:"password",className:"input",...c("password"),placeholder:"Pass",required:"",autoComplete:"off"}),s.password&&e("p",{children:s.password.message})]}),e(w,{className:"btn btn-primary",children:"\u0110\u0103ng nh\u1EADp"}),e(x,{to:"/auth/signup",style:{margin:"0px 10px",color:"#0d6efd"},children:" \u0110\u0103ng k\xED "})]})})})};export{j as default};
