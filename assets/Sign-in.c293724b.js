import{s as o,r as S,f as F,g as j,U as q,a as e,h as C,j as a,k as I,Q as L,n as m}from"./index.0fbcf04d.js";import{u as z}from"./index.esm.3fb90449.js";import{c as A,a as u,o as U}from"./yup.module.4e8e5960.js";const r=o.div``,h=o.button``,n=o.input``,B=o.form`
padding: 20px;
background:#f8f8f80a;
border-radius: 7px;
`,D=o.img`
display: block;
@media (max-width: 768px) {
  display:none;
}

`,G=o.button`
color: #000 ;
font-weight: 400;
`,b=o.p``,M=o.a``,d=o.label``,R=()=>{const[Y,p]=S.exports.useState(null),g=A().shape({username:u().required().test("is-email","Username must not contain @",t=>!t.includes("@")).max(15,"Your Name value must be at most 10 characters long").matches(/^[A-Za-z]+$/),password:u().required().max(15,"Password value must be at most 10 characters long")}).required(),{register:l,handleSubmit:x,formState:{errors:s}}=z({resolver:U(g)}),k=F(),i=j(),w=t=>{k(I(t)),setInterval(()=>{p(localStorage.getItem("token"))},2e3),L.success("th\xE0nh c\xF4ng"),i("/")},{googleSignin:y,user:f,facebookSignin:v}=q(),_=async()=>{try{await v()}catch(t){t.code;const c=t.message;t.customData.email,m.error(c)}},N=async()=>{try{await y(),f&&(localStorage.setItem("token",JSON.stringify(f.accessToken)),i("/"))}catch(t){const c=t.message;m.error(c)}};return e(C,{children:e(r,{className:"h-screen relative",children:e(r,{children:e(r,{className:"g-6 w-full flex flex-wrap items-center justify-center absolute top-1/2 left-1/2 ",style:{transform:"translate(-50%,-50%)"},children:e(r,{className:"md:w-8/12  lg:w-4/12",children:a(B,{onSubmit:x(w),children:[e(r,{className:"relative mb-6","data-te-input-wrapper-init":!0,children:a(r,{children:[e(d,{className:"block mb-2 text-sm font-medium  text-white",children:"Your usename:"}),e(n,{style:{width:"100%"},type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",...l("username"),required:"",placeholder:"Username",autoComplete:"off"}),s.username&&e("p",{children:s.username.message})]})}),e(r,{className:"relative mb-6","data-te-input-wrapper-init":!0,children:a(r,{children:[e(d,{className:"block mb-2 text-sm font-medium  text-white",children:"Your password:"}),e(n,{type:"password",...l("password"),name:"password",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"password"}),s.password&&e(b,{children:s.password.message})]})}),a(r,{className:"mb-6 flex items-center justify-between",children:[a(r,{className:"mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]",children:[e(n,{className:"relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full  before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]",type:"checkbox",value:"",id:"exampleCheck3",defaultChecked:!0}),e(d,{className:"inline-block pl-[0.15rem] hover:cursor-pointe text-white",children:"Remember me"})]}),e(M,{href:"#!",className:"text-sm font-medium text-primary-600 hover:underline text-primary-500",children:"Forgot password?"})]}),e(h,{type:"submit",style:{background:"rgb(37 99 235 )"},className:"w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"Sign in"}),e(r,{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:e(b,{className:"mx-4 mb-0 text-center font-semibold text-neutral-200",children:"OR"})}),a(h,{onClick:_,type:"button",className:"mb-4 py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",children:[e("svg",{width:"20",height:"20",fill:"currentColor",className:"mr-2",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"})}),"Login with Facebook"]}),a(G,{onClick:N,type:"button",className:"gap-2 py-2 px-4 flex justify-center items-center  bg-light w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",children:[e(D,{style:{width:"23px"},className:"w-6 h-6",src:"https://www.svgrepo.com/show/475656/google-color.svg",loading:"lazy",alt:"google logo"}),"Login with Google"]})]})})})})})})};export{R as default};
