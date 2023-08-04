import{G as q,H as Q,J as t,K,O as h,U as k,r as f,V as W,W as O,X as E,j as p,Y as ee,Z as re,b as D,$ as oe,a0 as ae,F as le}from"./index.0c8a5872.js";function te(o){if(typeof o!="string")return o;var e=o.charAt(0).toUpperCase()+o.slice(1);return e}var y=function(e,l,r){var a=te(r);return t({},e.componentCls+"-"+l,{color:e["color"+r],background:e["color"+a+"Bg"],borderColor:e["color"+a+"Border"]})},ne=function(e){return K.reduce(function(l,r){var a,g=e[r+"-1"],i=e[r+"-3"],n=e[r+"-6"],C=e[r+"-7"];return h(h({},l),(a={},t(a,e.componentCls+"-"+r,{color:C,background:g,borderColor:i}),t(a,e.componentCls+"-"+r+"-inverse",{color:e.colorTextLightSolid,background:n,borderColor:n}),a))},{})},ie=function(e){var l,r=e.paddingXXS,a=e.lineWidth,g=e.tagPaddingHorizontal,i=g-a,n=r-a;return t({},e.componentCls,h(h({},k(e)),(l={display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:i,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight+"px",whiteSpace:"nowrap",background:e.tagDefaultBg,border:e.lineWidth+"px "+e.lineType+" "+e.colorBorder,borderRadius:e.borderRadiusSM,opacity:1,transition:"all "+e.motionDurationMid,textAlign:"start","&&-rtl":{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor}},t(l,e.componentCls+"-close-icon",{marginInlineStart:n,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:"all "+e.motionDurationMid,"&:hover":{color:e.colorTextHeading}}),t(l,"&&-has-color",t({borderColor:"transparent"},"&, a, a:hover, "+e.iconCls+"-close, "+e.iconCls+"-close:hover",{color:e.colorTextLightSolid})),t(l,"&-checkable",{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer","&:not(&-checked):hover":{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}}),t(l,"&-hidden",{display:"none"}),t(l,"> "+e.iconCls+" + span, > span + "+e.iconCls,{marginInlineStart:i}),l)))};const F=q("Tag",function(o){var e=o.fontSize,l=o.lineHeight,r=o.lineWidth,a=o.fontSizeIcon,g=Math.round(e*l),i=o.fontSizeSM,n=g-r*2,C=o.colorFillAlter,c=o.colorText,s=Q(o,{tagFontSize:i,tagLineHeight:n,tagDefaultBg:C,tagDefaultColor:c,tagIconSize:a-2*r,tagPaddingHorizontal:8});return[ie(s),ne(s),y(s,"success","Success"),y(s,"processing","Info"),y(s,"error","Error"),y(s,"warning","Warning")]});var se=globalThis&&globalThis.__rest||function(o,e){var l={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&e.indexOf(r)<0&&(l[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(o);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(o,r[a])&&(l[r[a]]=o[r[a]]);return l},ce=function(e){var l,r=e.prefixCls,a=e.className,g=e.checked,i=e.onChange,n=e.onClick,C=se(e,["prefixCls","className","checked","onChange","onClick"]),c=f.exports.useContext(W),s=c.getPrefixCls,b=function(x){i==null||i(!g),n==null||n(x)},v=s("tag",r),m=F(v),d=O(m,2),S=d[0],P=d[1],T=E(v,(l={},t(l,v+"-checkable",!0),t(l,v+"-checkable-checked",g),l),a,P);return S(p("span",{...C,className:T,onClick:b}))};const ge=ce;var de=globalThis&&globalThis.__rest||function(o,e){var l={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&e.indexOf(r)<0&&(l[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(o);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(o,r[a])&&(l[r[a]]=o[r[a]]);return l},ue=new RegExp("^("+ee.join("|")+")(-inverse)?$"),Ce=new RegExp("^("+re.join("|")+")$"),ve=function(e,l){var r,a=e.prefixCls,g=e.className,i=e.style,n=e.children,C=e.icon,c=e.color,s=e.onClose,b=e.closeIcon,v=e.closable,m=v===void 0?!1:v,d=de(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),S=f.exports.useContext(W),P=S.getPrefixCls,T=S.direction,z=f.exports.useState(!0),x=O(z,2),M=x[0],N=x[1];f.exports.useEffect(function(){"visible"in d&&N(d.visible)},[d.visible]);var w=function(){return c?ue.test(c)||Ce.test(c):!1},X=h({backgroundColor:c&&!w()?c:void 0},i),H=w(),u=P("tag",a),A=F(u),j=O(A,2),U=j[0],V=j[1],G=E(u,(r={},t(r,u+"-"+c,H),t(r,u+"-has-color",c&&!H),t(r,u+"-hidden",!M),t(r,u+"-rtl",T==="rtl"),r),g,V),R=function(I){I.stopPropagation(),s==null||s(I),!I.defaultPrevented&&N(!1)},J=function(){return m?b?p("span",{className:u+"-close-icon",onClick:R,children:b}):p(ae,{className:u+"-close-icon",onClick:R}):null},Y="onClick"in d||n&&n.type==="a",$=C||null,Z=$?D(le,{children:[$,p("span",{children:n})]}):n,_=D("span",{...d,ref:l,className:G,style:X,children:[Z,J()]});return U(Y?p(oe,{children:_}):_)},L=f.exports.forwardRef(ve);L.CheckableTag=ge;const fe=L;export{fe as T};
