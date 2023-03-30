import{j as i,b as l,u as p,n as x,i as b,o as A,r as g,Q as m,bF as U,L as S,bG as T,bE as Y,c as k,bf as q,q as G,bH as K}from"./index.7633a770.js";import{d as Q,e as W}from"./index.127bbc30.js";import{h as z}from"./moment.9709ab41.js";const D="%[a-f0-9]{2}",E=new RegExp("("+D+")|([^%]+?)","gi"),F=new RegExp("("+D+")+","gi");function f(e,r){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;r=r||1;const t=e.slice(0,r),a=e.slice(r);return Array.prototype.concat.call([],f(t),f(a))}function J(e){try{return decodeURIComponent(e)}catch{let r=e.match(E)||[];for(let t=1;t<r.length;t++)e=f(r,t).join(""),r=e.match(E)||[];return e}}function X(e){const r={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"};let t=F.exec(e);for(;t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{const n=J(t[0]);n!==t[0]&&(r[t[0]]=n)}t=F.exec(e)}r["%C2"]="\uFFFD";const a=Object.keys(r);for(const n of a)e=e.replace(new RegExp(n,"g"),r[n]);return e}function Z(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return X(e)}}function R(e,r){if(!(typeof e=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e===""||r==="")return[];const t=e.indexOf(r);return t===-1?[]:[e.slice(0,t),e.slice(t+r.length)]}function ee(e,r){const t={};if(Array.isArray(r))for(const a of r){const n=Object.getOwnPropertyDescriptor(e,a);n!=null&&n.enumerable&&Object.defineProperty(t,a,n)}else for(const a of Reflect.ownKeys(e)){const n=Object.getOwnPropertyDescriptor(e,a);if(n.enumerable){const d=e[a];r(a,d,e)&&Object.defineProperty(t,a,n)}}return t}const re=e=>e==null,te=e=>encodeURIComponent(e).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`),y=Symbol("encodeFragmentIdentifier");function ae(e){switch(e.arrayFormat){case"index":return r=>(t,a)=>{const n=t.length;return a===void 0||e.skipNull&&a===null||e.skipEmptyString&&a===""?t:a===null?[...t,[o(r,e),"[",n,"]"].join("")]:[...t,[o(r,e),"[",o(n,e),"]=",o(a,e)].join("")]};case"bracket":return r=>(t,a)=>a===void 0||e.skipNull&&a===null||e.skipEmptyString&&a===""?t:a===null?[...t,[o(r,e),"[]"].join("")]:[...t,[o(r,e),"[]=",o(a,e)].join("")];case"colon-list-separator":return r=>(t,a)=>a===void 0||e.skipNull&&a===null||e.skipEmptyString&&a===""?t:a===null?[...t,[o(r,e),":list="].join("")]:[...t,[o(r,e),":list=",o(a,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r=e.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(a,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?a:(n=n===null?"":n,a.length===0?[[o(t,e),r,o(n,e)].join("")]:[[a,o(n,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,a)=>a===void 0||e.skipNull&&a===null||e.skipEmptyString&&a===""?t:a===null?[...t,o(r,e)]:[...t,[o(r,e),"=",o(a,e)].join("")]}}function ne(e){let r;switch(e.arrayFormat){case"index":return(t,a,n)=>{if(r=/\[(\d*)]$/.exec(t),t=t.replace(/\[\d*]$/,""),!r){n[t]=a;return}n[t]===void 0&&(n[t]={}),n[t][r[1]]=a};case"bracket":return(t,a,n)=>{if(r=/(\[])$/.exec(t),t=t.replace(/\[]$/,""),!r){n[t]=a;return}if(n[t]===void 0){n[t]=[a];return}n[t]=[...n[t],a]};case"colon-list-separator":return(t,a,n)=>{if(r=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!r){n[t]=a;return}if(n[t]===void 0){n[t]=[a];return}n[t]=[...n[t],a]};case"comma":case"separator":return(t,a,n)=>{const d=typeof a=="string"&&a.includes(e.arrayFormatSeparator),s=typeof a=="string"&&!d&&h(a,e).includes(e.arrayFormatSeparator);a=s?h(a,e):a;const c=d||s?a.split(e.arrayFormatSeparator).map(u=>h(u,e)):a===null?a:h(a,e);n[t]=c};case"bracket-separator":return(t,a,n)=>{const d=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!d){n[t]=a&&h(a,e);return}const s=a===null?[]:a.split(e.arrayFormatSeparator).map(c=>h(c,e));if(n[t]===void 0){n[t]=s;return}n[t]=[...n[t],...s]};default:return(t,a,n)=>{if(n[t]===void 0){n[t]=a;return}n[t]=[...[n[t]].flat(),a]}}}function j(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function o(e,r){return r.encode?r.strict?te(e):encodeURIComponent(e):e}function h(e,r){return r.decode?Z(e):e}function M(e){return Array.isArray(e)?e.sort():typeof e=="object"?M(Object.keys(e)).sort((r,t)=>Number(r)-Number(t)).map(r=>e[r]):e}function O(e){const r=e.indexOf("#");return r!==-1&&(e=e.slice(0,r)),e}function ie(e){let r="";const t=e.indexOf("#");return t!==-1&&(r=e.slice(t)),r}function C(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):r.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function w(e){e=O(e);const r=e.indexOf("?");return r===-1?"":e.slice(r+1)}function v(e,r){r={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...r},j(r.arrayFormatSeparator);const t=ne(r),a=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return a;for(const n of e.split("&")){if(n==="")continue;const d=r.decode?n.replace(/\+/g," "):n;let[s,c]=R(d,"=");s===void 0&&(s=d),c=c===void 0?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?c:h(c,r),t(h(s,r),c,a)}for(const[n,d]of Object.entries(a))if(typeof d=="object"&&d!==null)for(const[s,c]of Object.entries(d))d[s]=C(c,r);else a[n]=C(d,r);return r.sort===!1?a:(r.sort===!0?Object.keys(a).sort():Object.keys(a).sort(r.sort)).reduce((n,d)=>{const s=a[d];return Boolean(s)&&typeof s=="object"&&!Array.isArray(s)?n[d]=M(s):n[d]=s,n},Object.create(null))}function B(e,r){if(!e)return"";r={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...r},j(r.arrayFormatSeparator);const t=s=>r.skipNull&&re(e[s])||r.skipEmptyString&&e[s]==="",a=ae(r),n={};for(const[s,c]of Object.entries(e))t(s)||(n[s]=c);const d=Object.keys(n);return r.sort!==!1&&d.sort(r.sort),d.map(s=>{const c=e[s];return c===void 0?"":c===null?o(s,r):Array.isArray(c)?c.length===0&&r.arrayFormat==="bracket-separator"?o(s,r)+"[]":c.reduce(a(s),[]).join("&"):o(s,r)+"="+o(c,r)}).filter(s=>s.length>0).join("&")}function P(e,r){var n,d;r={decode:!0,...r};let[t,a]=R(e,"#");return t===void 0&&(t=e),{url:(d=(n=t==null?void 0:t.split("?"))==null?void 0:n[0])!=null?d:"",query:v(w(e),r),...r&&r.parseFragmentIdentifier&&a?{fragmentIdentifier:h(a,r)}:{}}}function H(e,r){r={encode:!0,strict:!0,[y]:!0,...r};const t=O(e.url).split("?")[0]||"",a=w(e.url),n={...v(a,{sort:!1}),...e.query};let d=B(n,r);d&&(d=`?${d}`);let s=ie(e.url);if(e.fragmentIdentifier){const c=new URL(t);c.hash=e.fragmentIdentifier,s=r[y]?c.hash:`#${e.fragmentIdentifier}`}return`${t}${d}${s}`}function L(e,r,t){t={parseFragmentIdentifier:!0,[y]:!1,...t};const{url:a,query:n,fragmentIdentifier:d}=P(e,t);return H({url:a,query:ee(n,r),fragmentIdentifier:d},t)}function de(e,r,t){const a=Array.isArray(r)?n=>!r.includes(n):(n,d)=>!r(n,d);return L(e,a,t)}const se=Object.freeze(Object.defineProperty({__proto__:null,extract:w,parse:v,stringify:B,parseUrl:P,stringifyUrl:H,pick:L,exclude:de},Symbol.toStringTag,{value:"Module"})),le=({getOne:e})=>i("div",{className:"commentContent overflow-hidden mt-3 mb-3",children:i("div",{className:"comment bg-white overflow-y-scroll",children:e.comments&&e.comments.length?e.comments.map((r,t)=>i("div",{className:" commentProducts mt-2 mb-2",children:i("div",{className:"p-3 text-base rounded-lg dark:bg-gray-900 ",children:l("div",{children:[l("footer",{className:"flex justify-between items-center mb-2",children:[l("div",{className:"flex items-center",children:[l("div",{className:"inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white",children:[i("img",{className:"mr-2 w-6 h-6 rounded-full",src:r.user.image,alt:"Michael Gough"}),r.user.username]}),i("div",{className:"text-gray-500 dark:text-gray-400 text-sm",children:z(r.date).format("LTS DD-MM-YYYY")}),i("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:i("time",{dateTime:"2022-02-08",title:"February 8th, 2022",children:r.updatedAt})})]}),l("button",{id:"dropdownComment1Button","data-dropdown-toggle":"dropdownComment1",className:"inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600",type:"button",children:[i("svg",{className:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})}),i("span",{className:"sr-only",children:"Comment settings"})]}),i("div",{id:"dropdownComment1",className:"hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600",children:l("ul",{className:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownMenuIconHorizontalButton",children:[i("li",{children:i("a",{href:"#",className:"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Edit"})}),i("li",{children:i("a",{href:"#",className:"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Remove"})}),i("li",{children:i("a",{href:"#",className:"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Report"})})]})})]}),i("p",{className:"text-gray-500 dark:text-gray-400",children:r.commentContent})]})})},t)):i("div",{className:"mt-5 mb-5 text-muted text-center ",children:"H\xE3y l\xE0 ng\u01B0\u1EDDi comment \u0111\u1EA7u ti\xEAn..."})})}),ce=({setCommentAdded:e})=>{const r=p(),{id:t}=x(),a=b();try{const n=A(a==null?void 0:a.token),[d,s]=g.exports.useState({commentContent:"",user:n._id,product:t}),c=()=>{e(u=>!u),a?m.success("Add Comment Successfully",r(U(d))):m.error("You are not logged in! ")};return l("div",{className:"text-light des",children:[l("div",{className:"w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600",children:[l("div",{className:"flex items-center justify-between px-3 py-2 border-b dark:border-gray-600",children:[l("div",{className:"flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600",children:[l("div",{className:"flex items-center space-x-1 sm:pr-4",children:[l("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[i("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z",clipRule:"evenodd"})}),i("span",{className:"sr-only",children:"Attach file"})]}),l("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[i("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"})}),i("span",{className:"sr-only",children:"Embed map"})]}),l("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[i("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"})}),i("span",{className:"sr-only",children:"Upload image"})]}),l("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[i("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),i("span",{className:"sr-only",children:"Format code"})]}),l("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[i("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",clipRule:"evenodd"})}),i("span",{className:"sr-only",children:"Add emoji"})]})]}),l("div",{className:"flex flex-wrap items-center space-x-1 sm:pl-4",children:[l("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[i("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})}),i("span",{className:"sr-only",children:"Add list"})]}),l("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[i("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})}),i("span",{className:"sr-only",children:"Settings"})]}),l("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[i("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})}),i("span",{className:"sr-only",children:"Timeline"})]}),l("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[i("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),i("span",{className:"sr-only",children:"Download"})]})]})]}),l("button",{type:"button","data-tooltip-target":"tooltip-fullscreen",className:"p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[i("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z",clipRule:"evenodd"})}),i("span",{className:"sr-only",children:"Full screen"})]}),l("div",{id:"tooltip-fullscreen",role:"tooltip",className:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700",children:["Show full screen",i("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]}),l("div",{className:"px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800",children:[i("label",{htmlFor:"editor",className:"sr-only",children:"Publish post"}),i("textarea",{onChange:u=>s({...d,commentContent:u.target.value}),id:"editor",rows:"5",className:"block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400",placeholder:"Write an article...",required:!0})]})]}),i("button",{onClick:()=>c(),className:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800",children:"Publish comment"})]})}catch{return i(S,{to:"/auth/signin",children:i("div",{className:"text-center mt-4 des text-primary",children:"\u0110\u0103ng nh\u1EADp \u0111\u1EC3 b\xECnh lu\u1EADn"})})}},oe=({seriProduct:e})=>{const{id:r}=x();return i("div",{className:"product_seri_item_deltail justify-items-center ",children:e.map(t=>i("div",{className:"mt-2",children:i(S,{to:"/detail/"+t._id+`?category=${t.category}?name=${t.name}/t\u1EADp/${t.seri}`,children:t._id==r?i("button",{className:"btnMovieSeri d-flex text-dark bg-light",children:l("span",{children:["T\u1EADp ",t.seri]})}):l("button",{className:"btnMovieSeri",children:["T\u1EADp ",t.seri]})})},t._id))})},he=({item:e,id:r,categoryId:t})=>{try{const a=b(),[n]=T(),d=A(a.token),s=p(),{data:c=[],error:u,isLoading:N}=Y(),$={user:d._id,product:r},I=()=>{const V=c.find(({product:{_id:_}})=>_===r);a?V?m.warning("\u0110\xE3 t\u1ED3n t\u1EA1i!"):m.success("Th\xEAm th\xE0nh c\xF4ng vui l\xF2ng ki\u1EC3m tra l\u1EA1i m\u1EE5c y\xEAu th\xEDch c\u1EE7a b\u1EA1n ngo\xE0i HomePage",n($)):m.error("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp!")};return l("div",{className:"d-flex align-items-center justify-content-between",children:[i("h4",{className:"mt-4 mb-4",children:e.name+" "+e.seri}),i("div",{className:"ml-5",onClick:I,children:i("i",{className:"fa-solid fa-bookmark text-warning h3 __"})})]})}catch{return l("div",{className:"d-flex align-items-center justify-content-between",children:[i("h4",{className:"mt-4 mb-4",children:e.name+" "+e.seri}),i("div",{className:"ml-5",title:"Save",onClick:()=>{m.error("B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp a!")},children:i("i",{className:"fa-solid fa-bookmark text-warning h3 __"})})]})}},fe=()=>{const e=k(Q),r=k(W),[t,a]=g.exports.useState(!1),n=p(),{id:d}=x();b();const{category:s}=se.parse(window.location.href.split("?")[1]);g.exports.useEffect(()=>{n(q(d)),n(G()),n(K(s))},[d,s,t]);const c=[...e].sort((u,N)=>Number(u.seri)<Number(N.seri)?1:-1);return i("div",{children:i("div",{className:"d-flex justify-content-center",style:{gap:"10px",background:"#00000037"},children:i("div",{style:{margin:"12px 5px"},className:"detailProduct col-md-10",children:r?l("div",{className:"",children:[i("div",{className:"d-flex justify-content-center",children:r.link?i("video",{title:"vimeo-player",controls:!0,autoPlay:!0,muted:!0,src:r.link,style:{width:"100%",height:"100%"},frameBorder:"0",allowFullScreen:!0}):i("iframe",{src:r.trailer})}),i("div",{className:"linkServer mt-3"}),i("div",{children:i("br",{})}),i("div",{className:"des",children:l("p",{children:["Ng\xE0y \u0111\u0103ng: ",z(r.uploadDate).format("LTS DD-MM-YYYY")]})}),i("div",{style:{color:"#fff",margin:"10px 0"},className:"des",children:l("p",{children:[i("i",{className:"fa-solid fa-eye"}),r.price," L\u01B0\u1EE3t xem"]})}),i(he,{item:r,id:d,categoryId:s}),l("h5",{children:[r.trailer?"Trailer "+r.seri:"T\u1EADp "+r.seri," "]}),i(oe,{seriProduct:c}),l("div",{className:"p-3 mt-3 mb-3 text-white rounded",style:{background:"rgb(0 0 0 / 47%)"},children:["Copyright video : ",l("a",{href:r.LinkCopyright,className:"text-primary",children:["  ",r.copyright," "]})]}),l("div",{className:"des mt-5 mb-2",children:[i("h5",{children:"M\xF4 t\u1EA3: "}),i("p",{children:r.descriptions}),i("h4",{className:"",children:"B\xECnh lu\u1EADn"}),i(le,{getOne:r}),i(ce,{setCommentAdded:a})]})]}):""})})})};export{fe as default};
