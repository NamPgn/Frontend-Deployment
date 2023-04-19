import{r as u,j as h,A as F,x as i,ai as L,aj as k,ak as v,al as z,am as P,X as U,B as M,a2 as j}from"./index.de18c56b.js";var D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};const V=D;var I=function(e,r){return h(F,{...i(i({},e),{},{ref:r,icon:V})})};I.displayName="CheckCircleFilled";const ae=u.exports.forwardRef(I);var W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};const K=W;var S=function(e,r){return h(F,{...i(i({},e),{},{ref:r,icon:K})})};S.displayName="ExclamationCircleFilled";const le=u.exports.forwardRef(S);var Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const q=Y;var O=function(e,r){return h(F,{...i(i({},e),{},{ref:r,icon:q})})};O.displayName="InfoCircleFilled";const ie=u.exports.forwardRef(O);var f=i({},L),G=f.version,H=f.render,X=f.unmountComponentAtNode,_;try{var J=Number((G||"").split(".")[0]);J>=18&&(_=f.createRoot)}catch{}function x(n){var e=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e&&z(e)==="object"&&(e.usingClientEntryPoint=n)}var C="__rc_react_root__";function Q(n,e){x(!0);var r=e[C]||_(e);x(!1),r.render(n),e[C]=r}function Z(n,e){H(n,e)}function ce(n,e){if(_){Q(n,e);return}Z(n,e)}function ee(n){return g.apply(this,arguments)}function g(){return g=k(v().mark(function n(e){return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve().then(function(){var s;(s=e[C])===null||s===void 0||s.unmount(),delete e[C]}));case 1:case"end":return t.stop()}},n)})),g.apply(this,arguments)}function ne(n){X(n)}function oe(n){return R.apply(this,arguments)}function R(){return R=k(v().mark(function n(e){return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(_===void 0){t.next=2;break}return t.abrupt("return",ee(e));case 2:ne(e);case 3:case"end":return t.stop()}},n)})),R.apply(this,arguments)}function y(n){return!!(n&&!!n.then)}var re=function(e){var r=u.exports.useRef(!1),t=u.exports.useRef(null),s=P(!1),E=U(s,2),A=E[0],p=E[1],d=e.close,m=function(){d==null||d.apply(void 0,arguments)};u.exports.useEffect(function(){var c=null;return e.autoFocus&&(c=setTimeout(function(){var a;(a=t.current)===null||a===void 0||a.focus()})),function(){c&&clearTimeout(c)}},[]);var N=function(a){!y(a)||(p(!0),a.then(function(){p(!1,!0),m.apply(void 0,arguments),r.current=!1},function(l){console.error(l),p(!1,!0),r.current=!1}))},b=function(a){var l=e.actionFn;if(!r.current){if(r.current=!0,!l){m();return}var o;if(e.emitEvent){if(o=l(a),e.quitOnNullishReturnValue&&!y(o)){r.current=!1,m(a);return}}else if(l.length)o=l(d),r.current=!1;else if(o=l(),!o){m();return}N(o)}},w=e.type,T=e.children,B=e.prefixCls,$=e.buttonProps;return h(M,{...j(w),onClick:b,loading:A,prefixCls:B,...$,ref:t,children:T})};const ue=re;export{ue as A,ae as C,le as E,ie as I,ce as r,oe as u};
