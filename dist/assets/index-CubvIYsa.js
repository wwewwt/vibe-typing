(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function Jy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Md={exports:{}},Io={};var u_;function $y(){if(u_)return Io;u_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:r,type:a,key:c,ref:o!==void 0?o:null,props:u}}return Io.Fragment=e,Io.jsx=n,Io.jsxs=n,Io}var c_;function eE(){return c_||(c_=1,Md.exports=$y()),Md.exports}var Je=eE(),bd={exports:{}},st={};var f_;function tE(){if(f_)return st;f_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function x(N,Q,ye){this.props=N,this.context=Q,this.refs=y,this.updater=ye||M}x.prototype.isReactComponent={},x.prototype.setState=function(N,Q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Q,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function U(){}U.prototype=x.prototype;function L(N,Q,ye){this.props=N,this.context=Q,this.refs=y,this.updater=ye||M}var D=L.prototype=new U;D.constructor=L,b(D,x.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function V(){}var F={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function w(N,Q,ye){var Ae=ye.ref;return{$$typeof:r,type:N,key:Q,ref:Ae!==void 0?Ae:null,props:ye}}function C(N,Q){return w(N.type,Q,N.props)}function P(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function re(N){var Q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return Q[ye]})}var te=/\/+/g;function se(N,Q){return typeof N=="object"&&N!==null&&N.key!=null?re(""+N.key):Q.toString(36)}function ce(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(V,V):(N.status="pending",N.then(function(Q){N.status==="pending"&&(N.status="fulfilled",N.value=Q)},function(Q){N.status==="pending"&&(N.status="rejected",N.reason=Q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,Q,ye,Ae,Z){var _e=typeof N;(_e==="undefined"||_e==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(_e){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case r:case e:ve=!0;break;case v:return ve=N._init,z(ve(N._payload),Q,ye,Ae,Z)}}if(ve)return Z=Z(N),ve=Ae===""?"."+se(N,0):Ae,I(Z)?(ye="",ve!=null&&(ye=ve.replace(te,"$&/")+"/"),z(Z,Q,ye,"",function(nt){return nt})):Z!=null&&(P(Z)&&(Z=C(Z,ye+(Z.key==null||N&&N.key===Z.key?"":(""+Z.key).replace(te,"$&/")+"/")+ve)),Q.push(Z)),1;ve=0;var He=Ae===""?".":Ae+":";if(I(N))for(var Pe=0;Pe<N.length;Pe++)Ae=N[Pe],_e=He+se(Ae,Pe),ve+=z(Ae,Q,ye,_e,Z);else if(Pe=E(N),typeof Pe=="function")for(N=Pe.call(N),Pe=0;!(Ae=N.next()).done;)Ae=Ae.value,_e=He+se(Ae,Pe++),ve+=z(Ae,Q,ye,_e,Z);else if(_e==="object"){if(typeof N.then=="function")return z(ce(N),Q,ye,Ae,Z);throw Q=String(N),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ve}function W(N,Q,ye){if(N==null)return N;var Ae=[],Z=0;return z(N,Ae,"","",function(_e){return Q.call(ye,_e,Z++)}),Ae}function Y(N){if(N._status===-1){var Q=N._result;Q=Q(),Q.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=Q)}if(N._status===1)return N._result.default;throw N._result}var Se=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},be={map:W,forEach:function(N,Q,ye){W(N,function(){Q.apply(this,arguments)},ye)},count:function(N){var Q=0;return W(N,function(){Q++}),Q},toArray:function(N){return W(N,function(Q){return Q})||[]},only:function(N){if(!P(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return st.Activity=g,st.Children=be,st.Component=x,st.Fragment=n,st.Profiler=o,st.PureComponent=L,st.StrictMode=a,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},st.cache=function(N){return function(){return N.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(N,Q,ye){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ae=b({},N.props),Z=N.key;if(Q!=null)for(_e in Q.key!==void 0&&(Z=""+Q.key),Q)!X.call(Q,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&Q.ref===void 0||(Ae[_e]=Q[_e]);var _e=arguments.length-2;if(_e===1)Ae.children=ye;else if(1<_e){for(var ve=Array(_e),He=0;He<_e;He++)ve[He]=arguments[He+2];Ae.children=ve}return w(N.type,Z,Ae)},st.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},st.createElement=function(N,Q,ye){var Ae,Z={},_e=null;if(Q!=null)for(Ae in Q.key!==void 0&&(_e=""+Q.key),Q)X.call(Q,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Z[Ae]=Q[Ae]);var ve=arguments.length-2;if(ve===1)Z.children=ye;else if(1<ve){for(var He=Array(ve),Pe=0;Pe<ve;Pe++)He[Pe]=arguments[Pe+2];Z.children=He}if(N&&N.defaultProps)for(Ae in ve=N.defaultProps,ve)Z[Ae]===void 0&&(Z[Ae]=ve[Ae]);return w(N,_e,Z)},st.createRef=function(){return{current:null}},st.forwardRef=function(N){return{$$typeof:d,render:N}},st.isValidElement=P,st.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:Y}},st.memo=function(N,Q){return{$$typeof:h,type:N,compare:Q===void 0?null:Q}},st.startTransition=function(N){var Q=F.T,ye={};F.T=ye;try{var Ae=N(),Z=F.S;Z!==null&&Z(ye,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(V,Se)}catch(_e){Se(_e)}finally{Q!==null&&ye.types!==null&&(Q.types=ye.types),F.T=Q}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(N){return F.H.use(N)},st.useActionState=function(N,Q,ye){return F.H.useActionState(N,Q,ye)},st.useCallback=function(N,Q){return F.H.useCallback(N,Q)},st.useContext=function(N){return F.H.useContext(N)},st.useDebugValue=function(){},st.useDeferredValue=function(N,Q){return F.H.useDeferredValue(N,Q)},st.useEffect=function(N,Q){return F.H.useEffect(N,Q)},st.useEffectEvent=function(N){return F.H.useEffectEvent(N)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(N,Q,ye){return F.H.useImperativeHandle(N,Q,ye)},st.useInsertionEffect=function(N,Q){return F.H.useInsertionEffect(N,Q)},st.useLayoutEffect=function(N,Q){return F.H.useLayoutEffect(N,Q)},st.useMemo=function(N,Q){return F.H.useMemo(N,Q)},st.useOptimistic=function(N,Q){return F.H.useOptimistic(N,Q)},st.useReducer=function(N,Q,ye){return F.H.useReducer(N,Q,ye)},st.useRef=function(N){return F.H.useRef(N)},st.useState=function(N){return F.H.useState(N)},st.useSyncExternalStore=function(N,Q,ye){return F.H.useSyncExternalStore(N,Q,ye)},st.useTransition=function(){return F.H.useTransition()},st.version="19.2.4",st}var d_;function uc(){return d_||(d_=1,bd.exports=tE()),bd.exports}var ue=uc();const Mu=Jy(ue);var Td={exports:{}},Ho={},Ad={exports:{}},Rd={};var h_;function nE(){return h_||(h_=1,(function(r){function e(z,W){var Y=z.length;z.push(W);e:for(;0<Y;){var Se=Y-1>>>1,be=z[Se];if(0<o(be,W))z[Se]=W,z[Y]=be,Y=Se;else break e}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var W=z[0],Y=z.pop();if(Y!==W){z[0]=Y;e:for(var Se=0,be=z.length,N=be>>>1;Se<N;){var Q=2*(Se+1)-1,ye=z[Q],Ae=Q+1,Z=z[Ae];if(0>o(ye,Y))Ae<be&&0>o(Z,ye)?(z[Se]=Z,z[Ae]=Y,Se=Ae):(z[Se]=ye,z[Q]=Y,Se=Q);else if(Ae<be&&0>o(Z,Y))z[Se]=Z,z[Ae]=Y,Se=Ae;else break e}}return W}function o(z,W){var Y=z.sortIndex-W.sortIndex;return Y!==0?Y:z.id-W.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var m=[],h=[],v=1,g=null,_=3,E=!1,M=!1,b=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var W=n(h);W!==null;){if(W.callback===null)a(h);else if(W.startTime<=z)a(h),W.sortIndex=W.expirationTime,e(m,W);else break;W=n(h)}}function I(z){if(b=!1,D(z),!M)if(n(m)!==null)M=!0,V||(V=!0,re());else{var W=n(h);W!==null&&ce(I,W.startTime-z)}}var V=!1,F=-1,X=5,w=-1;function C(){return y?!0:!(r.unstable_now()-w<X)}function P(){if(y=!1,V){var z=r.unstable_now();w=z;var W=!0;try{e:{M=!1,b&&(b=!1,U(F),F=-1),E=!0;var Y=_;try{t:{for(D(z),g=n(m);g!==null&&!(g.expirationTime>z&&C());){var Se=g.callback;if(typeof Se=="function"){g.callback=null,_=g.priorityLevel;var be=Se(g.expirationTime<=z);if(z=r.unstable_now(),typeof be=="function"){g.callback=be,D(z),W=!0;break t}g===n(m)&&a(m),D(z)}else a(m);g=n(m)}if(g!==null)W=!0;else{var N=n(h);N!==null&&ce(I,N.startTime-z),W=!1}}break e}finally{g=null,_=Y,E=!1}W=void 0}}finally{W?re():V=!1}}}var re;if(typeof L=="function")re=function(){L(P)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,se=te.port2;te.port1.onmessage=P,re=function(){se.postMessage(null)}}else re=function(){x(P,0)};function ce(z,W){F=x(function(){z(r.unstable_now())},W)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(z){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var Y=_;_=W;try{return z()}finally{_=Y}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=_;_=z;try{return W()}finally{_=Y}},r.unstable_scheduleCallback=function(z,W,Y){var Se=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Se+Y:Se):Y=Se,z){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Y+be,z={id:v++,callback:W,priorityLevel:z,startTime:Y,expirationTime:be,sortIndex:-1},Y>Se?(z.sortIndex=Y,e(h,z),n(m)===null&&z===n(h)&&(b?(U(F),F=-1):b=!0,ce(I,Y-Se))):(z.sortIndex=be,e(m,z),M||E||(M=!0,V||(V=!0,re()))),z},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(z){var W=_;return function(){var Y=_;_=W;try{return z.apply(this,arguments)}finally{_=Y}}}})(Rd)),Rd}var p_;function iE(){return p_||(p_=1,Ad.exports=nE()),Ad.exports}var Cd={exports:{}},Dn={};var m_;function aE(){if(m_)return Dn;m_=1;var r=uc();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,h,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:m,containerInfo:h,implementation:v}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Dn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,v)},Dn.flushSync=function(m){var h=c.T,v=a.p;try{if(c.T=null,a.p=2,m)return m()}finally{c.T=h,a.p=v,a.d.f()}},Dn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(m,h))},Dn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Dn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,g=d(v,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?a.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:E}):v==="script"&&a.d.X(m,{crossOrigin:g,integrity:_,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Dn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=d(h.as,h.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(m)},Dn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,g=d(v,h.crossOrigin);a.d.L(m,v,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Dn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=d(h.as,h.crossOrigin);a.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(m)},Dn.requestFormReset=function(m){a.d.r(m)},Dn.unstable_batchedUpdates=function(m,h){return m(h)},Dn.useFormState=function(m,h,v){return c.H.useFormState(m,h,v)},Dn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var g_;function rE(){if(g_)return Cd.exports;g_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cd.exports=aE(),Cd.exports}var v_;function sE(){if(v_)return Ho;v_=1;var r=iE(),e=uc(),n=rE();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function c(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(a(188))}function h(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),i;p=p.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,A=f.child;A;){if(A===s){S=!0,s=f,l=p;break}if(A===l){S=!0,l=f,s=p;break}A=A.sibling}if(!S){for(A=p.child;A;){if(A===s){S=!0,s=p,l=f;break}if(A===l){S=!0,l=p,s=f;break}A=A.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=P&&t[P]||t["@@iterator"],typeof t=="function"?t:null)}var te=Symbol.for("react.client.reference");function se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===te?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case V:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:se(t.type)||"Memo";case X:i=t._payload,t=t._init;try{return se(t(i))}catch{}}return null}var ce=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Se=[],be=-1;function N(t){return{current:t}}function Q(t){0>be||(t.current=Se[be],Se[be]=null,be--)}function ye(t,i){be++,Se[be]=t.current,t.current=i}var Ae=N(null),Z=N(null),_e=N(null),ve=N(null);function He(t,i){switch(ye(_e,i),ye(Z,t),ye(Ae,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Uv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Uv(i),t=Nv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Ae),ye(Ae,t)}function Pe(){Q(Ae),Q(Z),Q(_e)}function nt(t){t.memoizedState!==null&&ye(ve,t);var i=Ae.current,s=Nv(i,t.type);i!==s&&(ye(Z,t),ye(Ae,s))}function Wt(t){Z.current===t&&(Q(Ae),Q(Z)),ve.current===t&&(Q(ve),Po._currentValue=Y)}var pt,H;function bt(t){if(pt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);pt=i&&i[1]||"",H=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pt+t+H}var $e=!1;function yt(t,i){if(!t||$e)return"";$e=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(oe){var ne=oe}Reflect.construct(t,[],me)}else{try{me.call()}catch(oe){ne=oe}t.call(me.prototype)}}else{try{throw Error()}catch(oe){ne=oe}(me=t())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(oe){if(oe&&ne&&typeof oe.stack=="string")return[oe.stack,ne.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],A=p[1];if(S&&A){var B=S.split(`
`),$=A.split(`
`);for(f=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(l===B.length||f===$.length)for(l=B.length-1,f=$.length-1;1<=l&&0<=f&&B[l]!==$[f];)f--;for(;1<=l&&0<=f;l--,f--)if(B[l]!==$[f]){if(l!==1||f!==1)do if(l--,f--,0>f||B[l]!==$[f]){var de=`
`+B[l].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=l&&0<=f);break}}}finally{$e=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?bt(s):""}function Ke(t,i){switch(t.tag){case 26:case 27:case 5:return bt(t.type);case 16:return bt("Lazy");case 13:return t.child!==i&&i!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return yt(t.type,!1);case 11:return yt(t.type.render,!1);case 1:return yt(t.type,!0);case 31:return bt("Activity");default:return""}}function Gt(t){try{var i="",s=null;do i+=Ke(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Be=Object.prototype.hasOwnProperty,ot=r.unstable_scheduleCallback,Jt=r.unstable_cancelCallback,Zt=r.unstable_shouldYield,O=r.unstable_requestPaint,T=r.unstable_now,ee=r.unstable_getCurrentPriorityLevel,he=r.unstable_ImmediatePriority,Ee=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,Ye=r.unstable_LowPriority,Ce=r.unstable_IdlePriority,We=r.log,qe=r.unstable_setDisableYieldValue,Te=null,we=null;function je(t){if(typeof We=="function"&&qe(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Te,t)}catch{}}var ze=Math.clz32?Math.clz32:k,Le=Math.log,lt=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Le(t)/lt|0)|0}var Re=256,De=262144,Fe=4194304;function Me(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~p,l!==0?f=Me(l):(S&=A,S!==0?f=Me(S):s||(s=A&~t,s!==0&&(f=Me(s))))):(A=l&~p,A!==0?f=Me(A):S!==0?f=Me(S):s||(s=l&~t,s!==0&&(f=Me(s)))),f===0?0:i!==0&&i!==f&&(i&p)===0&&(p=f&-f,s=i&-i,p>=s||p===32&&(s&4194048)!==0)?i:f}function Ie(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function rt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function Tt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function On(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function oi(t,i,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(s=S&~s;0<s;){var de=31-ze(s),me=1<<de;A[de]=0,B[de]=-1;var ne=$[de];if(ne!==null)for($[de]=null,de=0;de<ne.length;de++){var oe=ne[de];oe!==null&&(oe.lane&=-536870913)}s&=~me}l!==0&&js(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~i))}function js(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ze(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function wi(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ze(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function zr(t,i){var s=i&-i;return s=(s&42)!==0?1:Fr(s),(s&(t.suspendedLanes|i))!==0?0:s}function Fr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Br(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function tr(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:n_(t.type))}function Ks(t,i){var s=W.p;try{return W.p=t,i()}finally{W.p=s}}var jn=Math.random().toString(36).slice(2),sn="__reactFiber$"+jn,En="__reactProps$"+jn,ya="__reactContainer$"+jn,Zs="__reactEvents$"+jn,gc="__reactListeners$"+jn,vc="__reactHandles$"+jn,hl="__reactResources$"+jn,nr="__reactMarker$"+jn;function R(t){delete t[sn],delete t[En],delete t[Zs],delete t[gc],delete t[vc]}function q(t){var i=t[sn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ya]||s[sn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Hv(t);t!==null;){if(s=t[sn])return s;t=Hv(t)}return i}t=s,s=t.parentNode}return null}function ie(t){if(t=t[sn]||t[ya]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function ae(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function j(t){var i=t[hl];return i||(i=t[hl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function xe(t){t[nr]=!0}var Ue=new Set,Ge={};function Oe(t,i){Ze(t,i),Ze(t+"Capture",i)}function Ze(t,i){for(Ge[t]=i,t=0;t<i.length;t++)Ue.add(i[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qe={},ht={};function Lt(t){return Be.call(ht,t)?!0:Be.call(Qe,t)?!1:it.test(t)?ht[t]=!0:(Qe[t]=!0,!1)}function kt(t,i,s){if(Lt(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ut(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function mt(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function At(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Mn(t){if(!t._valueTracker){var i=qt(t)?"checked":"value";t._valueTracker=At(t,i,""+t[i])}}function ki(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=qt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function xn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ir=/[\n"\\]/g;function _t(t){return t.replace(ir,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function wn(t,i,s,l,f,p,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ke(i)):t.value!==""+ke(i)&&(t.value=""+ke(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?dn(t,S,ke(i)):s!=null?dn(t,S,ke(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ke(A):t.removeAttribute("name")}function Pn(t,i,s,l,f,p,S,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null)){Mn(t);return}s=s!=null?""+ke(s):"",i=i!=null?""+ke(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Mn(t)}function dn(t,i,s){i==="number"&&xn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function tn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ke(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Ir(t,i,s){if(i!=null&&(i=""+ke(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ke(s):""}function Di(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ce(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ke(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Mn(t)}function Hr(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Yx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wp(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Yx.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Dp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&wp(t,f,l)}else for(var p in i)i.hasOwnProperty(p)&&wp(t,p,i[p])}function _c(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(t){return Kx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var xc=null;function Sc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vr=null,Gr=null;function Lp(t){var i=ie(t);if(i&&(t=i.stateNode)){var s=t[En]||null;e:switch(t=i.stateNode,i.type){case"input":if(wn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+_t(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[En]||null;if(!f)throw Error(a(90));wn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&ki(l)}break e;case"textarea":Ir(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&tn(t,!!s.multiple,i,!1)}}}var yc=!1;function Up(t,i,s){if(yc)return t(i,s);yc=!0;try{var l=t(i);return l}finally{if(yc=!1,(Vr!==null||Gr!==null)&&(tu(),Vr&&(i=Vr,t=Gr,Gr=Vr=null,Lp(i),t)))for(i=0;i<t.length;i++)Lp(t[i])}}function Qs(t,i){var s=t.stateNode;if(s===null)return null;var l=s[En]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ec=!1;if(Wi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Ec=!1}var Ea=null,Mc=null,ml=null;function Np(){if(ml)return ml;var t,i=Mc,s=i.length,l,f="value"in Ea?Ea.value:Ea.textContent,p=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[p-l];l++);return ml=f.slice(t,1<l?1-l:void 0)}function gl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Op(){return!1}function In(t){function i(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?vl:Op,this.isPropagationStopped=Op,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),i}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=In(ar),$s=g({},ar,{view:0,detail:0}),Zx=In($s),bc,Tc,eo,xl=g({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(bc=t.screenX-eo.screenX,Tc=t.screenY-eo.screenY):Tc=bc=0,eo=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),Pp=In(xl),Qx=g({},xl,{dataTransfer:0}),Jx=In(Qx),$x=g({},$s,{relatedTarget:0}),Ac=In($x),eS=g({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=In(eS),nS=g({},ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iS=In(nS),aS=g({},ar,{data:0}),zp=In(aS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=oS[t])?!!i[t]:!1}function Rc(){return lS}var uS=g({},$s,{key:function(t){if(t.key){var i=rS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cS=In(uS),fS=g({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=In(fS),dS=g({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),hS=In(dS),pS=g({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=In(pS),gS=g({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=In(gS),_S=g({},ar,{newState:0,oldState:0}),xS=In(_S),SS=[9,13,27,32],Cc=Wi&&"CompositionEvent"in window,to=null;Wi&&"documentMode"in document&&(to=document.documentMode);var yS=Wi&&"TextEvent"in window&&!to,Bp=Wi&&(!Cc||to&&8<to&&11>=to),Ip=" ",Hp=!1;function Vp(t,i){switch(t){case"keyup":return SS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function ES(t,i){switch(t){case"compositionend":return Gp(i);case"keypress":return i.which!==32?null:(Hp=!0,Ip);case"textInput":return t=i.data,t===Ip&&Hp?null:t;default:return null}}function MS(t,i){if(kr)return t==="compositionend"||!Cc&&Vp(t,i)?(t=Np(),ml=Mc=Ea=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bp&&i.locale!=="ko"?null:i.data;default:return null}}var bS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!bS[t.type]:i==="textarea"}function Xp(t,i,s,l){Vr?Gr?Gr.push(l):Gr=[l]:Vr=l,i=lu(i,"onChange"),0<i.length&&(s=new _l("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var no=null,io=null;function TS(t){Av(t,0)}function Sl(t){var i=ae(t);if(ki(i))return t}function Wp(t,i){if(t==="change")return i}var qp=!1;if(Wi){var wc;if(Wi){var Dc="oninput"in document;if(!Dc){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Dc=typeof Yp.oninput=="function"}wc=Dc}else wc=!1;qp=wc&&(!document.documentMode||9<document.documentMode)}function jp(){no&&(no.detachEvent("onpropertychange",Kp),io=no=null)}function Kp(t){if(t.propertyName==="value"&&Sl(io)){var i=[];Xp(i,io,t,Sc(t)),Up(TS,i)}}function AS(t,i,s){t==="focusin"?(jp(),no=i,io=s,no.attachEvent("onpropertychange",Kp)):t==="focusout"&&jp()}function RS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(io)}function CS(t,i){if(t==="click")return Sl(i)}function wS(t,i){if(t==="input"||t==="change")return Sl(i)}function DS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:DS;function ao(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Be.call(i,f)||!Kn(t[f],i[f]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,i){var s=Zp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Zp(s)}}function Jp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Jp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function $p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=xn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=xn(t.document)}return i}function Lc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var LS=Wi&&"documentMode"in document&&11>=document.documentMode,Xr=null,Uc=null,ro=null,Nc=!1;function em(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Nc||Xr==null||Xr!==xn(l)||(l=Xr,"selectionStart"in l&&Lc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&ao(ro,l)||(ro=l,l=lu(Uc,"onSelect"),0<l.length&&(i=new _l("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Xr)))}function rr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Wr={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},Oc={},tm={};Wi&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function sr(t){if(Oc[t])return Oc[t];if(!Wr[t])return t;var i=Wr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in tm)return Oc[t]=i[s];return t}var nm=sr("animationend"),im=sr("animationiteration"),am=sr("animationstart"),US=sr("transitionrun"),NS=sr("transitionstart"),OS=sr("transitioncancel"),rm=sr("transitionend"),sm=new Map,Pc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pc.push("scrollEnd");function Si(t,i){sm.set(t,i),Oe(i,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],qr=0,zc=0;function El(){for(var t=qr,i=zc=qr=0;i<t;){var s=li[i];li[i++]=null;var l=li[i];li[i++]=null;var f=li[i];li[i++]=null;var p=li[i];if(li[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&om(s,f,p)}}function Ml(t,i,s,l){li[qr++]=t,li[qr++]=i,li[qr++]=s,li[qr++]=l,zc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Fc(t,i,s,l){return Ml(t,i,s,l),bl(t)}function or(t,i){return Ml(t,null,null,i),bl(t)}function om(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&i!==null&&(f=31-ze(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),p):null}function bl(t){if(50<Co)throw Co=0,Yf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Yr={};function PS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,i,s,l){return new PS(t,i,s,l)}function Bc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,i){var s=t.alternate;return s===null?(s=Zn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function lm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Tl(t,i,s,l,f,p){var S=0;if(l=t,typeof t=="function")Bc(t)&&(S=1);else if(typeof t=="string")S=Hy(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Zn(31,s,i,f),t.elementType=w,t.lanes=p,t;case b:return lr(s.children,f,p,i);case y:S=8,f|=24;break;case x:return t=Zn(12,s,i,f|2),t.elementType=x,t.lanes=p,t;case I:return t=Zn(13,s,i,f),t.elementType=I,t.lanes=p,t;case V:return t=Zn(19,s,i,f),t.elementType=V,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case U:S=9;break e;case D:S=11;break e;case F:S=14;break e;case X:S=16,l=null;break e}S=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Zn(S,s,i,f),i.elementType=t,i.type=l,i.lanes=p,i}function lr(t,i,s,l){return t=Zn(7,t,l,i),t.lanes=s,t}function Ic(t,i,s){return t=Zn(6,t,null,i),t.lanes=s,t}function um(t){var i=Zn(18,null,null,0);return i.stateNode=t,i}function Hc(t,i,s){return i=Zn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var cm=new WeakMap;function ui(t,i){if(typeof t=="object"&&t!==null){var s=cm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Gt(i)},cm.set(t,i),i)}return{value:t,source:i,stack:Gt(i)}}var jr=[],Kr=0,Al=null,so=0,ci=[],fi=0,Ma=null,Li=1,Ui="";function Yi(t,i){jr[Kr++]=so,jr[Kr++]=Al,Al=t,so=i}function fm(t,i,s){ci[fi++]=Li,ci[fi++]=Ui,ci[fi++]=Ma,Ma=t;var l=Li;t=Ui;var f=32-ze(l)-1;l&=~(1<<f),s+=1;var p=32-ze(i)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Li=1<<32-ze(i)+f|s<<f|l,Ui=p+t}else Li=1<<p|s<<f|l,Ui=t}function Vc(t){t.return!==null&&(Yi(t,1),fm(t,1,0))}function Gc(t){for(;t===Al;)Al=jr[--Kr],jr[Kr]=null,so=jr[--Kr],jr[Kr]=null;for(;t===Ma;)Ma=ci[--fi],ci[fi]=null,Ui=ci[--fi],ci[fi]=null,Li=ci[--fi],ci[fi]=null}function dm(t,i){ci[fi++]=Li,ci[fi++]=Ui,ci[fi++]=Ma,Li=i.id,Ui=i.overflow,Ma=t}var bn=null,Yt=null,Et=!1,ba=null,di=!1,kc=Error(a(519));function Ta(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(ui(i,t)),kc}function hm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[sn]=t,i[En]=l,s){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(s=0;s<Do.length;s++)vt(Do[s],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":vt("invalid",i),Pn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":vt("invalid",i);break;case"textarea":vt("invalid",i),Di(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Dv(i.textContent,s)?(l.popover!=null&&(vt("beforetoggle",i),vt("toggle",i)),l.onScroll!=null&&vt("scroll",i),l.onScrollEnd!=null&&vt("scrollend",i),l.onClick!=null&&(i.onclick=Xi),i=!0):i=!1,i||Ta(t,!0)}function pm(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:bn=bn.return}}function Zr(t){if(t!==bn)return!1;if(!Et)return pm(t),Et=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||ld(t.type,t.memoizedProps)),s=!s),s&&Yt&&Ta(t),pm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Yt=Iv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Yt=Iv(t)}else i===27?(i=Yt,Ia(t.type)?(t=hd,hd=null,Yt=t):Yt=i):Yt=bn?pi(t.stateNode.nextSibling):null;return!0}function ur(){Yt=bn=null,Et=!1}function Xc(){var t=ba;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),ba=null),t}function oo(t){ba===null?ba=[t]:ba.push(t)}var Wc=N(null),cr=null,ji=null;function Aa(t,i,s){ye(Wc,i._currentValue),i._currentValue=s}function Ki(t){t._currentValue=Wc.current,Q(Wc)}function qc(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Yc(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var A=p;p=f;for(var B=0;B<i.length;B++)if(A.context===i[B]){p.lanes|=s,A=p.alternate,A!==null&&(A.lanes|=s),qc(p.return,s,t),l||(S=null);break e}p=A.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),qc(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Qr(t,i,s,l){t=null;for(var f=i,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=f.type;Kn(f.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(f===ve.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}f=f.return}t!==null&&Yc(i,t,s,l),i.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fr(t){cr=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return mm(cr,t)}function Cl(t,i){return cr===null&&fr(t),mm(t,i)}function mm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ji===null){if(t===null)throw Error(a(308));ji=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ji=ji.next=i;return s}var zS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},FS=r.unstable_scheduleCallback,BS=r.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jc(){return{controller:new zS,data:new Map,refCount:0}}function lo(t){t.refCount--,t.refCount===0&&FS(BS,function(){t.controller.abort()})}var uo=null,Kc=0,Jr=0,$r=null;function IS(t,i){if(uo===null){var s=uo=[];Kc=0,Jr=$f(),$r={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Kc++,i.then(gm,gm),i}function gm(){if(--Kc===0&&uo!==null){$r!==null&&($r.status="fulfilled");var t=uo;uo=null,Jr=0,$r=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function HS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var vm=z.S;z.S=function(t,i){ev=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&IS(t,i),vm!==null&&vm(t,i)};var dr=N(null);function Zc(){var t=dr.current;return t!==null?t:Xt.pooledCache}function wl(t,i){i===null?ye(dr,dr.current):ye(dr,i.pool)}function _m(){var t=Zc();return t===null?null:{parent:on._currentValue,pool:t}}var es=Error(a(460)),Qc=Error(a(474)),Dl=Error(a(542)),Ll={then:function(){}};function xm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Xi,Xi),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Em(t),t;default:if(typeof i.status=="string")i.then(Xi,Xi);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Em(t),t}throw pr=i,es}}function hr(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(pr=s,es):s}}var pr=null;function ym(){if(pr===null)throw Error(a(459));var t=pr;return pr=null,t}function Em(t){if(t===es||t===Dl)throw Error(a(483))}var ts=null,co=0;function Ul(t){var i=co;return co+=1,ts===null&&(ts=[]),Sm(ts,t,i)}function fo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Nl(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Mm(t){function i(K,G){if(t){var J=K.deletions;J===null?(K.deletions=[G],K.flags|=16):J.push(G)}}function s(K,G){if(!t)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function l(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function f(K,G){return K=qi(K,G),K.index=0,K.sibling=null,K}function p(K,G,J){return K.index=J,t?(J=K.alternate,J!==null?(J=J.index,J<G?(K.flags|=67108866,G):J):(K.flags|=67108866,G)):(K.flags|=1048576,G)}function S(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function A(K,G,J,pe){return G===null||G.tag!==6?(G=Ic(J,K.mode,pe),G.return=K,G):(G=f(G,J),G.return=K,G)}function B(K,G,J,pe){var et=J.type;return et===b?de(K,G,J.props.children,pe,J.key):G!==null&&(G.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===X&&hr(et)===G.type)?(G=f(G,J.props),fo(G,J),G.return=K,G):(G=Tl(J.type,J.key,J.props,null,K.mode,pe),fo(G,J),G.return=K,G)}function $(K,G,J,pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Hc(J,K.mode,pe),G.return=K,G):(G=f(G,J.children||[]),G.return=K,G)}function de(K,G,J,pe,et){return G===null||G.tag!==7?(G=lr(J,K.mode,pe,et),G.return=K,G):(G=f(G,J),G.return=K,G)}function me(K,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Ic(""+G,K.mode,J),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case E:return J=Tl(G.type,G.key,G.props,null,K.mode,J),fo(J,G),J.return=K,J;case M:return G=Hc(G,K.mode,J),G.return=K,G;case X:return G=hr(G),me(K,G,J)}if(ce(G)||re(G))return G=lr(G,K.mode,J,null),G.return=K,G;if(typeof G.then=="function")return me(K,Ul(G),J);if(G.$$typeof===L)return me(K,Cl(K,G),J);Nl(K,G)}return null}function ne(K,G,J,pe){var et=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return et!==null?null:A(K,G,""+J,pe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case E:return J.key===et?B(K,G,J,pe):null;case M:return J.key===et?$(K,G,J,pe):null;case X:return J=hr(J),ne(K,G,J,pe)}if(ce(J)||re(J))return et!==null?null:de(K,G,J,pe,null);if(typeof J.then=="function")return ne(K,G,Ul(J),pe);if(J.$$typeof===L)return ne(K,G,Cl(K,J),pe);Nl(K,J)}return null}function oe(K,G,J,pe,et){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return K=K.get(J)||null,A(G,K,""+pe,et);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case E:return K=K.get(pe.key===null?J:pe.key)||null,B(G,K,pe,et);case M:return K=K.get(pe.key===null?J:pe.key)||null,$(G,K,pe,et);case X:return pe=hr(pe),oe(K,G,J,pe,et)}if(ce(pe)||re(pe))return K=K.get(J)||null,de(G,K,pe,et,null);if(typeof pe.then=="function")return oe(K,G,J,Ul(pe),et);if(pe.$$typeof===L)return oe(K,G,J,Cl(G,pe),et);Nl(G,pe)}return null}function Ve(K,G,J,pe){for(var et=null,Rt=null,Xe=G,ct=G=0,St=null;Xe!==null&&ct<J.length;ct++){Xe.index>ct?(St=Xe,Xe=null):St=Xe.sibling;var Ct=ne(K,Xe,J[ct],pe);if(Ct===null){Xe===null&&(Xe=St);break}t&&Xe&&Ct.alternate===null&&i(K,Xe),G=p(Ct,G,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct,Xe=St}if(ct===J.length)return s(K,Xe),Et&&Yi(K,ct),et;if(Xe===null){for(;ct<J.length;ct++)Xe=me(K,J[ct],pe),Xe!==null&&(G=p(Xe,G,ct),Rt===null?et=Xe:Rt.sibling=Xe,Rt=Xe);return Et&&Yi(K,ct),et}for(Xe=l(Xe);ct<J.length;ct++)St=oe(Xe,K,ct,J[ct],pe),St!==null&&(t&&St.alternate!==null&&Xe.delete(St.key===null?ct:St.key),G=p(St,G,ct),Rt===null?et=St:Rt.sibling=St,Rt=St);return t&&Xe.forEach(function(Xa){return i(K,Xa)}),Et&&Yi(K,ct),et}function tt(K,G,J,pe){if(J==null)throw Error(a(151));for(var et=null,Rt=null,Xe=G,ct=G=0,St=null,Ct=J.next();Xe!==null&&!Ct.done;ct++,Ct=J.next()){Xe.index>ct?(St=Xe,Xe=null):St=Xe.sibling;var Xa=ne(K,Xe,Ct.value,pe);if(Xa===null){Xe===null&&(Xe=St);break}t&&Xe&&Xa.alternate===null&&i(K,Xe),G=p(Xa,G,ct),Rt===null?et=Xa:Rt.sibling=Xa,Rt=Xa,Xe=St}if(Ct.done)return s(K,Xe),Et&&Yi(K,ct),et;if(Xe===null){for(;!Ct.done;ct++,Ct=J.next())Ct=me(K,Ct.value,pe),Ct!==null&&(G=p(Ct,G,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return Et&&Yi(K,ct),et}for(Xe=l(Xe);!Ct.done;ct++,Ct=J.next())Ct=oe(Xe,K,ct,Ct.value,pe),Ct!==null&&(t&&Ct.alternate!==null&&Xe.delete(Ct.key===null?ct:Ct.key),G=p(Ct,G,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return t&&Xe.forEach(function(Qy){return i(K,Qy)}),Et&&Yi(K,ct),et}function It(K,G,J,pe){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case E:e:{for(var et=J.key;G!==null;){if(G.key===et){if(et=J.type,et===b){if(G.tag===7){s(K,G.sibling),pe=f(G,J.props.children),pe.return=K,K=pe;break e}}else if(G.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===X&&hr(et)===G.type){s(K,G.sibling),pe=f(G,J.props),fo(pe,J),pe.return=K,K=pe;break e}s(K,G);break}else i(K,G);G=G.sibling}J.type===b?(pe=lr(J.props.children,K.mode,pe,J.key),pe.return=K,K=pe):(pe=Tl(J.type,J.key,J.props,null,K.mode,pe),fo(pe,J),pe.return=K,K=pe)}return S(K);case M:e:{for(et=J.key;G!==null;){if(G.key===et)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){s(K,G.sibling),pe=f(G,J.children||[]),pe.return=K,K=pe;break e}else{s(K,G);break}else i(K,G);G=G.sibling}pe=Hc(J,K.mode,pe),pe.return=K,K=pe}return S(K);case X:return J=hr(J),It(K,G,J,pe)}if(ce(J))return Ve(K,G,J,pe);if(re(J)){if(et=re(J),typeof et!="function")throw Error(a(150));return J=et.call(J),tt(K,G,J,pe)}if(typeof J.then=="function")return It(K,G,Ul(J),pe);if(J.$$typeof===L)return It(K,G,Cl(K,J),pe);Nl(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(s(K,G.sibling),pe=f(G,J),pe.return=K,K=pe):(s(K,G),pe=Ic(J,K.mode,pe),pe.return=K,K=pe),S(K)):s(K,G)}return function(K,G,J,pe){try{co=0;var et=It(K,G,J,pe);return ts=null,et}catch(Xe){if(Xe===es||Xe===Dl)throw Xe;var Rt=Zn(29,Xe,null,K.mode);return Rt.lanes=pe,Rt.return=K,Rt}}}var mr=Mm(!0),bm=Mm(!1),Ra=!1;function Jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $c(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Dt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=bl(t),om(t,null,s),i}return Ml(t,l,i,s),bl(t)}function ho(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,wi(t,s)}}function ef(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=i:p=p.next=i}else f=p=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var tf=!1;function po(){if(tf){var t=$r;if(t!==null)throw t}}function mo(t,i,s,l){tf=!1;var f=t.updateQueue;Ra=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var B=A,$=B.next;B.next=null,S===null?p=$:S.next=$,S=B;var de=t.alternate;de!==null&&(de=de.updateQueue,A=de.lastBaseUpdate,A!==S&&(A===null?de.firstBaseUpdate=$:A.next=$,de.lastBaseUpdate=B))}if(p!==null){var me=f.baseState;S=0,de=$=B=null,A=p;do{var ne=A.lane&-536870913,oe=ne!==A.lane;if(oe?(xt&ne)===ne:(l&ne)===ne){ne!==0&&ne===Jr&&(tf=!0),de!==null&&(de=de.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ve=t,tt=A;ne=i;var It=s;switch(tt.tag){case 1:if(Ve=tt.payload,typeof Ve=="function"){me=Ve.call(It,me,ne);break e}me=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=tt.payload,ne=typeof Ve=="function"?Ve.call(It,me,ne):Ve,ne==null)break e;me=g({},me,ne);break e;case 2:Ra=!0}}ne=A.callback,ne!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=f.callbacks,oe===null?f.callbacks=[ne]:oe.push(ne))}else oe={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},de===null?($=de=oe,B=me):de=de.next=oe,S|=ne;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,f.lastBaseUpdate=oe,f.shared.pending=null}}while(!0);de===null&&(B=me),f.baseState=B,f.firstBaseUpdate=$,f.lastBaseUpdate=de,p===null&&(f.shared.lanes=0),Oa|=S,t.lanes=S,t.memoizedState=me}}function Tm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Am(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Tm(s[t],i)}var ns=N(null),Ol=N(0);function Rm(t,i){t=aa,ye(Ol,t),ye(ns,i),aa=t|i.baseLanes}function nf(){ye(Ol,aa),ye(ns,ns.current)}function af(){aa=Ol.current,Q(ns),Q(Ol)}var Qn=N(null),hi=null;function Da(t){var i=t.alternate;ye(nn,nn.current&1),ye(Qn,t),hi===null&&(i===null||ns.current!==null||i.memoizedState!==null)&&(hi=t)}function rf(t){ye(nn,nn.current),ye(Qn,t),hi===null&&(hi=t)}function Cm(t){t.tag===22?(ye(nn,nn.current),ye(Qn,t),hi===null&&(hi=t)):La()}function La(){ye(nn,nn.current),ye(Qn,Qn.current)}function Jn(t){Q(Qn),hi===t&&(hi=null),Q(nn)}var nn=N(0);function Pl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||fd(s)||dd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zi=0,ut=null,Ft=null,ln=null,zl=!1,is=!1,gr=!1,Fl=0,go=0,as=null,VS=0;function $t(){throw Error(a(321))}function sf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Kn(t[s],i[s]))return!1;return!0}function of(t,i,s,l,f,p){return Zi=p,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=t===null||t.memoizedState===null?fg:Ef,gr=!1,p=s(l,f),gr=!1,is&&(p=Dm(i,s,l,f)),wm(t),p}function wm(t){z.H=xo;var i=Ft!==null&&Ft.next!==null;if(Zi=0,ln=Ft=ut=null,zl=!1,go=0,as=null,i)throw Error(a(300));t===null||un||(t=t.dependencies,t!==null&&Rl(t)&&(un=!0))}function Dm(t,i,s,l){ut=t;var f=0;do{if(is&&(as=null),go=0,is=!1,25<=f)throw Error(a(301));if(f+=1,ln=Ft=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}z.H=dg,p=i(s,l)}while(is);return p}function GS(){var t=z.H,i=t.useState()[0];return i=typeof i.then=="function"?vo(i):i,t=t.useState()[0],(Ft!==null?Ft.memoizedState:null)!==t&&(ut.flags|=1024),i}function lf(){var t=Fl!==0;return Fl=0,t}function uf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function cf(t){if(zl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}zl=!1}Zi=0,ln=Ft=ut=null,is=!1,go=Fl=0,as=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ut.memoizedState=ln=t:ln=ln.next=t,ln}function an(){if(Ft===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var i=ln===null?ut.memoizedState:ln.next;if(i!==null)ln=i,Ft=t;else{if(t===null)throw ut.alternate===null?Error(a(467)):Error(a(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},ln===null?ut.memoizedState=ln=t:ln=ln.next=t}return ln}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var i=go;return go+=1,as===null&&(as=[]),t=Sm(as,t,i),i=ut,(ln===null?i.memoizedState:ln.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?fg:Ef),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===L)return Tn(t)}throw Error(a(438,String(t)))}function ff(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Bl(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=C;return i.index++,s}function Qi(t,i){return typeof i=="function"?i(t):i}function Hl(t){var i=an();return df(i,Ft,t)}function df(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}i.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{i=f.next;var A=S=null,B=null,$=i,de=!1;do{var me=$.lane&-536870913;if(me!==$.lane?(xt&me)===me:(Zi&me)===me){var ne=$.revertLane;if(ne===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),me===Jr&&(de=!0);else if((Zi&ne)===ne){$=$.next,ne===Jr&&(de=!0);continue}else me={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=me,S=p):B=B.next=me,ut.lanes|=ne,Oa|=ne;me=$.action,gr&&s(p,me),p=$.hasEagerState?$.eagerState:s(p,me)}else ne={lane:me,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=ne,S=p):B=B.next=ne,ut.lanes|=me,Oa|=me;$=$.next}while($!==null&&$!==i);if(B===null?S=p:B.next=A,!Kn(p,t.memoizedState)&&(un=!0,de&&(s=$r,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=B,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function hf(t){var i=an(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);Kn(p,i.memoizedState)||(un=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function Lm(t,i,s){var l=ut,f=an(),p=Et;if(p){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!Kn((Ft||f).memoizedState,s);if(S&&(f.memoizedState=s,un=!0),f=f.queue,gf(Om.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,rs(9,{destroy:void 0},Nm.bind(null,l,f,s,i),null),Xt===null)throw Error(a(349));p||(Zi&127)!==0||Um(l,i,s)}return s}function Um(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=Bl(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Nm(t,i,s,l){i.value=s,i.getSnapshot=l,Pm(i)&&zm(t)}function Om(t,i,s){return s(function(){Pm(i)&&zm(t)})}function Pm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Kn(t,s)}catch{return!0}}function zm(t){var i=or(t,2);i!==null&&Xn(i,t,2)}function pf(t){var i=zn();if(typeof t=="function"){var s=t;if(t=s(),gr){je(!0);try{s()}finally{je(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},i}function Fm(t,i,s,l){return t.baseState=s,df(t,Ft,typeof l=="function"?l:Qi)}function kS(t,i,s,l,f){if(kl(t))throw Error(a(485));if(t=i.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};z.T!==null?s(!0):p.isTransition=!1,l(p),s=i.pending,s===null?(p.next=i.pending=p,Bm(i,p)):(p.next=s.next,i.pending=s.next=p)}}function Bm(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var p=z.T,S={};z.T=S;try{var A=s(f,l),B=z.S;B!==null&&B(S,A),Im(t,i,A)}catch($){mf(t,i,$)}finally{p!==null&&S.types!==null&&(p.types=S.types),z.T=p}}else try{p=s(f,l),Im(t,i,p)}catch($){mf(t,i,$)}}function Im(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Hm(t,i,l)},function(l){return mf(t,i,l)}):Hm(t,i,s)}function Hm(t,i,s){i.status="fulfilled",i.value=s,Vm(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Bm(t,s)))}function mf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Vm(i),i=i.next;while(i!==l)}t.action=null}function Vm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Gm(t,i){return i}function km(t,i){if(Et){var s=Xt.formState;if(s!==null){e:{var l=ut;if(Et){if(Yt){t:{for(var f=Yt,p=di;f.nodeType!==8;){if(!p){f=null;break t}if(f=pi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Yt=pi(f.nextSibling),l=f.data==="F!";break e}}Ta(l)}l=!1}l&&(i=s[0])}}return s=zn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gm,lastRenderedState:i},s.queue=l,s=lg.bind(null,ut,l),l.dispatch=s,l=pf(!1),p=yf.bind(null,ut,!1,l.queue),l=zn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=kS.bind(null,ut,f,p,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Xm(t){var i=an();return Wm(i,Ft,t)}function Wm(t,i,s){if(i=df(t,i,Gm)[0],t=Hl(Qi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=vo(i)}catch(S){throw S===es?Dl:S}else l=i;i=an();var f=i.queue,p=f.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,rs(9,{destroy:void 0},XS.bind(null,f,s),null)),[l,p,t]}function XS(t,i){t.action=i}function qm(t){var i=an(),s=Ft;if(s!==null)return Wm(i,s,t);an(),i=i.memoizedState,s=an();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function rs(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ut.updateQueue,i===null&&(i=Bl(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Ym(){return an().memoizedState}function Vl(t,i,s,l){var f=zn();ut.flags|=t,f.memoizedState=rs(1|i,{destroy:void 0},s,l===void 0?null:l)}function Gl(t,i,s,l){var f=an();l=l===void 0?null:l;var p=f.memoizedState.inst;Ft!==null&&l!==null&&sf(l,Ft.memoizedState.deps)?f.memoizedState=rs(i,p,s,l):(ut.flags|=t,f.memoizedState=rs(1|i,p,s,l))}function jm(t,i){Vl(8390656,8,t,i)}function gf(t,i){Gl(2048,8,t,i)}function WS(t){ut.flags|=4;var i=ut.updateQueue;if(i===null)i=Bl(),ut.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Km(t){var i=an().memoizedState;return WS({ref:i,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Zm(t,i){return Gl(4,2,t,i)}function Qm(t,i){return Gl(4,4,t,i)}function Jm(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function $m(t,i,s){s=s!=null?s.concat([t]):null,Gl(4,4,Jm.bind(null,i,t),s)}function vf(){}function eg(t,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&sf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function tg(t,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&sf(i,l[1]))return l[0];if(l=t(),gr){je(!0);try{t()}finally{je(!1)}}return s.memoizedState=[l,i],l}function _f(t,i,s){return s===void 0||(Zi&1073741824)!==0&&(xt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=nv(),ut.lanes|=t,Oa|=t,s)}function ng(t,i,s,l){return Kn(s,i)?s:ns.current!==null?(t=_f(t,s,l),Kn(t,i)||(un=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(xt&261930)===0?(un=!0,t.memoizedState=s):(t=nv(),ut.lanes|=t,Oa|=t,i)}function ig(t,i,s,l,f){var p=W.p;W.p=p!==0&&8>p?p:8;var S=z.T,A={};z.T=A,yf(t,!1,i,s);try{var B=f(),$=z.S;if($!==null&&$(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=HS(B,l);_o(t,i,de,ti(t))}else _o(t,i,l,ti(t))}catch(me){_o(t,i,{then:function(){},status:"rejected",reason:me},ti())}finally{W.p=p,S!==null&&A.types!==null&&(S.types=A.types),z.T=S}}function qS(){}function xf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=ag(t).queue;ig(t,f,i,Y,s===null?qS:function(){return rg(t),s(l)})}function ag(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function rg(t){var i=ag(t);i.next===null&&(i=t.alternate.memoizedState),_o(t,i.next.queue,{},ti())}function Sf(){return Tn(Po)}function sg(){return an().memoizedState}function og(){return an().memoizedState}function YS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ti();t=Ca(s);var l=wa(i,t,s);l!==null&&(Xn(l,i,s),ho(l,i,s)),i={cache:jc()},t.payload=i;return}i=i.return}}function jS(t,i,s){var l=ti();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},kl(t)?ug(i,s):(s=Fc(t,i,s,l),s!==null&&(Xn(s,t,l),cg(s,i,l)))}function lg(t,i,s){var l=ti();_o(t,i,s,l)}function _o(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(kl(t))ug(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var S=i.lastRenderedState,A=p(S,s);if(f.hasEagerState=!0,f.eagerState=A,Kn(A,S))return Ml(t,i,f,0),Xt===null&&El(),!1}catch{}if(s=Fc(t,i,f,l),s!==null)return Xn(s,t,l),cg(s,i,l),!0}return!1}function yf(t,i,s,l){if(l={lane:2,revertLane:$f(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(i)throw Error(a(479))}else i=Fc(t,s,l,2),i!==null&&Xn(i,t,2)}function kl(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function ug(t,i){is=zl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function cg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,wi(t,s)}}var xo={readContext:Tn,use:Il,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};xo.useEffectEvent=$t;var fg={readContext:Tn,use:Il,useCallback:function(t,i){return zn().memoizedState=[t,i===void 0?null:i],t},useContext:Tn,useEffect:jm,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Vl(4194308,4,Jm.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Vl(4194308,4,t,i)},useInsertionEffect:function(t,i){Vl(4,2,t,i)},useMemo:function(t,i){var s=zn();i=i===void 0?null:i;var l=t();if(gr){je(!0);try{t()}finally{je(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=zn();if(s!==void 0){var f=s(i);if(gr){je(!0);try{s(i)}finally{je(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=jS.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var i=zn();return t={current:t},i.memoizedState=t},useState:function(t){t=pf(t);var i=t.queue,s=lg.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:vf,useDeferredValue:function(t,i){var s=zn();return _f(s,t,i)},useTransition:function(){var t=pf(!1);return t=ig.bind(null,ut,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ut,f=zn();if(Et){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Xt===null)throw Error(a(349));(xt&127)!==0||Um(l,i,s)}f.memoizedState=s;var p={value:s,getSnapshot:i};return f.queue=p,jm(Om.bind(null,l,p,t),[t]),l.flags|=2048,rs(9,{destroy:void 0},Nm.bind(null,l,p,s,i),null),s},useId:function(){var t=zn(),i=Xt.identifierPrefix;if(Et){var s=Ui,l=Li;s=(l&~(1<<32-ze(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Fl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=VS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Sf,useFormState:km,useActionState:km,useOptimistic:function(t){var i=zn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=yf.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:ff,useCacheRefresh:function(){return zn().memoizedState=YS.bind(null,ut)},useEffectEvent:function(t){var i=zn(),s={impl:t};return i.memoizedState=s,function(){if((Dt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Ef={readContext:Tn,use:Il,useCallback:eg,useContext:Tn,useEffect:gf,useImperativeHandle:$m,useInsertionEffect:Zm,useLayoutEffect:Qm,useMemo:tg,useReducer:Hl,useRef:Ym,useState:function(){return Hl(Qi)},useDebugValue:vf,useDeferredValue:function(t,i){var s=an();return ng(s,Ft.memoizedState,t,i)},useTransition:function(){var t=Hl(Qi)[0],i=an().memoizedState;return[typeof t=="boolean"?t:vo(t),i]},useSyncExternalStore:Lm,useId:sg,useHostTransitionStatus:Sf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,i){var s=an();return Fm(s,Ft,t,i)},useMemoCache:ff,useCacheRefresh:og};Ef.useEffectEvent=Km;var dg={readContext:Tn,use:Il,useCallback:eg,useContext:Tn,useEffect:gf,useImperativeHandle:$m,useInsertionEffect:Zm,useLayoutEffect:Qm,useMemo:tg,useReducer:hf,useRef:Ym,useState:function(){return hf(Qi)},useDebugValue:vf,useDeferredValue:function(t,i){var s=an();return Ft===null?_f(s,t,i):ng(s,Ft.memoizedState,t,i)},useTransition:function(){var t=hf(Qi)[0],i=an().memoizedState;return[typeof t=="boolean"?t:vo(t),i]},useSyncExternalStore:Lm,useId:sg,useHostTransitionStatus:Sf,useFormState:qm,useActionState:qm,useOptimistic:function(t,i){var s=an();return Ft!==null?Fm(s,Ft,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ff,useCacheRefresh:og};dg.useEffectEvent=Km;function Mf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var bf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ti(),f=Ca(l);f.payload=i,s!=null&&(f.callback=s),i=wa(t,f,l),i!==null&&(Xn(i,t,l),ho(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ti(),f=Ca(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=wa(t,f,l),i!==null&&(Xn(i,t,l),ho(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ti(),l=Ca(s);l.tag=2,i!=null&&(l.callback=i),i=wa(t,l,s),i!==null&&(Xn(i,t,s),ho(i,t,s))}};function hg(t,i,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):i.prototype&&i.prototype.isPureReactComponent?!ao(s,l)||!ao(f,p):!0}function pg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&bf.enqueueReplaceState(i,i.state,null)}function vr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function mg(t){yl(t)}function gg(t){console.error(t)}function vg(t){yl(t)}function Xl(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function _g(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Tf(t,i,s){return s=Ca(s),s.tag=3,s.payload={element:null},s.callback=function(){Xl(t,i)},s}function xg(t){return t=Ca(t),t.tag=3,t}function Sg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){_g(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){_g(i,s,l),typeof f!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function KS(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Qr(i,s,f,!0),s=Qn.current,s!==null){switch(s.tag){case 31:case 13:return hi===null?nu():s.alternate===null&&en===0&&(en=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Ll?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Zf(t,l,f)),!1;case 22:return s.flags|=65536,l===Ll?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Zf(t,l,f)),!1}throw Error(a(435,s.tag))}return Zf(t,l,f),nu(),!1}if(Et)return i=Qn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==kc&&(t=Error(a(422),{cause:l}),oo(ui(t,s)))):(l!==kc&&(i=Error(a(423),{cause:l}),oo(ui(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=ui(l,s),f=Tf(t.stateNode,l,f),ef(t,f),en!==4&&(en=2)),!1;var p=Error(a(520),{cause:l});if(p=ui(p,s),Ro===null?Ro=[p]:Ro.push(p),en!==4&&(en=2),i===null)return!0;l=ui(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Tf(s.stateNode,l,t),ef(s,t),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pa===null||!Pa.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=xg(f),Sg(f,t,s,l),ef(s,f),!1}s=s.return}while(s!==null);return!1}var Af=Error(a(461)),un=!1;function An(t,i,s,l){i.child=t===null?bm(i,null,s,l):mr(i,t.child,s,l)}function yg(t,i,s,l,f){s=s.render;var p=i.ref;if("ref"in l){var S={};for(var A in l)A!=="ref"&&(S[A]=l[A])}else S=l;return fr(i),l=of(t,i,s,S,p,f),A=lf(),t!==null&&!un?(uf(t,i,f),Ji(t,i,f)):(Et&&A&&Vc(i),i.flags|=1,An(t,i,l,f),i.child)}function Eg(t,i,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!Bc(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,Mg(t,i,p,l,f)):(t=Tl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,!Of(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:ao,s(S,l)&&t.ref===i.ref)return Ji(t,i,f)}return i.flags|=1,t=qi(p,l),t.ref=i.ref,t.return=i,i.child=t}function Mg(t,i,s,l,f){if(t!==null){var p=t.memoizedProps;if(ao(p,l)&&t.ref===i.ref)if(un=!1,i.pendingProps=l=p,Of(t,f))(t.flags&131072)!==0&&(un=!0);else return i.lanes=t.lanes,Ji(t,i,f)}return Rf(t,i,s,l,f)}function bg(t,i,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,i.child=null;return Tg(t,i,p,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(i,p!==null?p.cachePool:null),p!==null?Rm(i,p):nf(),Cm(i);else return l=i.lanes=536870912,Tg(t,i,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(wl(i,p.cachePool),Rm(i,p),La(),i.memoizedState=null):(t!==null&&wl(i,null),nf(),La());return An(t,i,f,s),i.child}function So(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Tg(t,i,s,l,f){var p=Zc();return p=p===null?null:{parent:on._currentValue,pool:p},i.memoizedState={baseLanes:s,cachePool:p},t!==null&&wl(i,null),nf(),Cm(i),t!==null&&Qr(t,i,l,!0),i.childLanes=f,null}function Wl(t,i){return i=Yl({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Ag(t,i,s){return mr(i,t.child,null,s),t=Wl(i,i.pendingProps),t.flags|=2,Jn(i),i.memoizedState=null,t}function ZS(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Et){if(l.mode==="hidden")return t=Wl(i,l),i.lanes=536870912,So(null,t);if(rf(i),(t=Yt)?(t=Bv(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ma!==null?{id:Li,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},s=um(t),s.return=i,i.child=s,bn=i,Yt=null)):t=null,t===null)throw Ta(i);return i.lanes=536870912,null}return Wl(i,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(rf(i),f)if(i.flags&256)i.flags&=-257,i=Ag(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(un||Qr(t,i,s,!1),f=(s&t.childLanes)!==0,un||f){if(l=Xt,l!==null&&(S=zr(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,or(t,S),Xn(l,t,S),Af;nu(),i=Ag(t,i,s)}else t=p.treeContext,Yt=pi(S.nextSibling),bn=i,Et=!0,ba=null,di=!1,t!==null&&dm(i,t),i=Wl(i,l),i.flags|=4096;return i}return t=qi(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function ql(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Rf(t,i,s,l,f){return fr(i),s=of(t,i,s,l,void 0,f),l=lf(),t!==null&&!un?(uf(t,i,f),Ji(t,i,f)):(Et&&l&&Vc(i),i.flags|=1,An(t,i,s,f),i.child)}function Rg(t,i,s,l,f,p){return fr(i),i.updateQueue=null,s=Dm(i,l,s,f),wm(t),l=lf(),t!==null&&!un?(uf(t,i,p),Ji(t,i,p)):(Et&&l&&Vc(i),i.flags|=1,An(t,i,s,p),i.child)}function Cg(t,i,s,l,f){if(fr(i),i.stateNode===null){var p=Yr,S=s.contextType;typeof S=="object"&&S!==null&&(p=Tn(S)),p=new s(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=bf,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},Jc(i),S=s.contextType,p.context=typeof S=="object"&&S!==null?Tn(S):Yr,p.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Mf(i,s,S,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&bf.enqueueReplaceState(p,p.state,null),mo(i,l,p,f),po(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){p=i.stateNode;var A=i.memoizedProps,B=vr(s,A);p.props=B;var $=p.context,de=s.contextType;S=Yr,typeof de=="object"&&de!==null&&(S=Tn(de));var me=s.getDerivedStateFromProps;de=typeof me=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,de||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||$!==S)&&pg(i,p,l,S),Ra=!1;var ne=i.memoizedState;p.state=ne,mo(i,l,p,f),po(),$=i.memoizedState,A||ne!==$||Ra?(typeof me=="function"&&(Mf(i,s,me,l),$=i.memoizedState),(B=Ra||hg(i,s,B,l,ne,$,S))?(de||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=$),p.props=l,p.state=$,p.context=S,l=B):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,$c(t,i),S=i.memoizedProps,de=vr(s,S),p.props=de,me=i.pendingProps,ne=p.context,$=s.contextType,B=Yr,typeof $=="object"&&$!==null&&(B=Tn($)),A=s.getDerivedStateFromProps,($=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==me||ne!==B)&&pg(i,p,l,B),Ra=!1,ne=i.memoizedState,p.state=ne,mo(i,l,p,f),po();var oe=i.memoizedState;S!==me||ne!==oe||Ra||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof A=="function"&&(Mf(i,s,A,l),oe=i.memoizedState),(de=Ra||hg(i,s,de,l,ne,oe,B)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?($||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,oe,B),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,oe,B)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=oe),p.props=l,p.state=oe,p.context=B,l=de):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),l=!1)}return p=l,ql(t,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,t!==null&&l?(i.child=mr(i,t.child,null,f),i.child=mr(i,null,s,f)):An(t,i,s,f),i.memoizedState=p.state,t=i.child):t=Ji(t,i,f),t}function wg(t,i,s,l){return ur(),i.flags|=256,An(t,i,s,l),i.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:_m()}}function Df(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=ei),t}function Dg(t,i,s){var l=i.pendingProps,f=!1,p=(i.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Et){if(f?Da(i):La(),(t=Yt)?(t=Bv(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ma!==null?{id:Li,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},s=um(t),s.return=i,i.child=s,bn=i,Yt=null)):t=null,t===null)throw Ta(i);return dd(t)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(La(),f=i.mode,A=Yl({mode:"hidden",children:A},f),l=lr(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=wf(s),l.childLanes=Df(t,S,s),i.memoizedState=Cf,So(null,l)):(Da(i),Lf(i,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(p)i.flags&256?(Da(i),i.flags&=-257,i=Uf(t,i,s)):i.memoizedState!==null?(La(),i.child=t.child,i.flags|=128,i=null):(La(),A=l.fallback,f=i.mode,l=Yl({mode:"visible",children:l.children},f),A=lr(A,f,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,mr(i,t.child,null,s),l=i.child,l.memoizedState=wf(s),l.childLanes=Df(t,S,s),i.memoizedState=Cf,i=So(null,l));else if(Da(i),dd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,l=Error(a(419)),l.stack="",l.digest=S,oo({value:l,source:null,stack:null}),i=Uf(t,i,s)}else if(un||Qr(t,i,s,!1),S=(s&t.childLanes)!==0,un||S){if(S=Xt,S!==null&&(l=zr(S,s),l!==0&&l!==B.retryLane))throw B.retryLane=l,or(t,l),Xn(S,t,l),Af;fd(A)||nu(),i=Uf(t,i,s)}else fd(A)?(i.flags|=192,i.child=t.child,i=null):(t=B.treeContext,Yt=pi(A.nextSibling),bn=i,Et=!0,ba=null,di=!1,t!==null&&dm(i,t),i=Lf(i,l.children),i.flags|=4096);return i}return f?(La(),A=l.fallback,f=i.mode,B=t.child,$=B.sibling,l=qi(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,$!==null?A=qi($,A):(A=lr(A,f,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,So(null,l),l=i.child,A=t.child.memoizedState,A===null?A=wf(s):(f=A.cachePool,f!==null?(B=on._currentValue,f=f.parent!==B?{parent:B,pool:B}:f):f=_m(),A={baseLanes:A.baseLanes|s,cachePool:f}),l.memoizedState=A,l.childLanes=Df(t,S,s),i.memoizedState=Cf,So(t.child,l)):(Da(i),s=t.child,t=s.sibling,s=qi(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function Lf(t,i){return i=Yl({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Yl(t,i){return t=Zn(22,t,null,i),t.lanes=0,t}function Uf(t,i,s){return mr(i,t.child,null,s),t=Lf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Lg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),qc(t.return,i,s)}function Nf(t,i,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function Ug(t,i,s){var l=i.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=nn.current,A=(S&2)!==0;if(A?(S=S&1|2,i.flags|=128):S&=1,ye(nn,S),An(t,i,l,s),l=Et?so:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,s,i);else if(t.tag===19)Lg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Pl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Nf(i,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Pl(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Nf(i,!0,s,null,p,l);break;case"together":Nf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ji(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Oa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Qr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=qi(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=qi(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Of(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function QS(t,i,s){switch(i.tag){case 3:He(i,i.stateNode.containerInfo),Aa(i,on,t.memoizedState.cache),ur();break;case 27:case 5:nt(i);break;case 4:He(i,i.stateNode.containerInfo);break;case 10:Aa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,rf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Da(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Dg(t,i,s):(Da(i),t=Ji(t,i,s),t!==null?t.sibling:null);Da(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Qr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Ug(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ye(nn,nn.current),l)break;return null;case 22:return i.lanes=0,bg(t,i,s,i.pendingProps);case 24:Aa(i,on,t.memoizedState.cache)}return Ji(t,i,s)}function Ng(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)un=!0;else{if(!Of(t,s)&&(i.flags&128)===0)return un=!1,QS(t,i,s);un=(t.flags&131072)!==0}else un=!1,Et&&(i.flags&1048576)!==0&&fm(i,so,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=hr(i.elementType),i.type=t,typeof t=="function")Bc(t)?(l=vr(t,l),i.tag=1,i=Cg(null,i,t,l,s)):(i.tag=0,i=Rf(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===D){i.tag=11,i=yg(null,i,t,l,s);break e}else if(f===F){i.tag=14,i=Eg(null,i,t,l,s);break e}}throw i=se(t)||t,Error(a(306,i,""))}}return i;case 0:return Rf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=vr(l,i.pendingProps),Cg(t,i,l,f,s);case 3:e:{if(He(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var p=i.memoizedState;f=p.element,$c(t,i),mo(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Aa(i,on,l),l!==p.cache&&Yc(i,[on],s,!0),po(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=wg(t,i,l,s);break e}else if(l!==f){f=ui(Error(a(424)),i),oo(f),i=wg(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=pi(t.firstChild),bn=i,Et=!0,ba=null,di=!0,s=bm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ur(),l===f){i=Ji(t,i,s);break e}An(t,i,l,s)}i=i.child}return i;case 26:return ql(t,i),t===null?(s=Xv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Et||(s=i.type,t=i.pendingProps,l=uu(_e.current).createElement(s),l[sn]=i,l[En]=t,Rn(l,s,t),xe(l),i.stateNode=l):i.memoizedState=Xv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return nt(i),t===null&&Et&&(l=i.stateNode=Vv(i.type,i.pendingProps,_e.current),bn=i,di=!0,f=Yt,Ia(i.type)?(hd=f,Yt=pi(l.firstChild)):Yt=f),An(t,i,i.pendingProps.children,s),ql(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Et&&((f=l=Yt)&&(l=Ry(l,i.type,i.pendingProps,di),l!==null?(i.stateNode=l,bn=i,Yt=pi(l.firstChild),di=!1,f=!0):f=!1),f||Ta(i)),nt(i),f=i.type,p=i.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,ld(f,p)?l=null:S!==null&&ld(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=of(t,i,GS,null,null,s),Po._currentValue=f),ql(t,i),An(t,i,l,s),i.child;case 6:return t===null&&Et&&((t=s=Yt)&&(s=Cy(s,i.pendingProps,di),s!==null?(i.stateNode=s,bn=i,Yt=null,t=!0):t=!1),t||Ta(i)),null;case 13:return Dg(t,i,s);case 4:return He(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=mr(i,null,l,s):An(t,i,l,s),i.child;case 11:return yg(t,i,i.type,i.pendingProps,s);case 7:return An(t,i,i.pendingProps,s),i.child;case 8:return An(t,i,i.pendingProps.children,s),i.child;case 12:return An(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Aa(i,i.type,l.value),An(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,fr(i),f=Tn(f),l=l(f),i.flags|=1,An(t,i,l,s),i.child;case 14:return Eg(t,i,i.type,i.pendingProps,s);case 15:return Mg(t,i,i.type,i.pendingProps,s);case 19:return Ug(t,i,s);case 31:return ZS(t,i,s);case 22:return bg(t,i,s,i.pendingProps);case 24:return fr(i),l=Tn(on),t===null?(f=Zc(),f===null&&(f=Xt,p=jc(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),i.memoizedState={parent:l,cache:f},Jc(i),Aa(i,on,f)):((t.lanes&s)!==0&&($c(t,i),mo(i,null,null,s),po()),f=t.memoizedState,p=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Aa(i,on,l)):(l=p.cache,Aa(i,on,l),l!==f.cache&&Yc(i,[on],s,!0))),An(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function $i(t){t.flags|=4}function Pf(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(sv())t.flags|=8192;else throw pr=Ll,Qc}else t.flags&=-16777217}function Og(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Kv(i))if(sv())t.flags|=8192;else throw pr=Ll,Qc}function jl(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Nt():536870912,t.lanes|=i,us|=i)}function yo(t,i){if(!Et)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function jt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function JS(t,i,s){var l=i.pendingProps;switch(Gc(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(i),null;case 1:return jt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ki(on),Pe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Zr(i)?$i(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xc())),jt(i),null;case 26:var f=i.type,p=i.memoizedState;return t===null?($i(i),p!==null?(jt(i),Og(i,p)):(jt(i),Pf(i,f,null,l,s))):p?p!==t.memoizedState?($i(i),jt(i),Og(i,p)):(jt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&$i(i),jt(i),Pf(i,f,t,l,s)),null;case 27:if(Wt(i),s=_e.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&$i(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return jt(i),null}t=Ae.current,Zr(i)?hm(i):(t=Vv(f,l,s),i.stateNode=t,$i(i))}return jt(i),null;case 5:if(Wt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&$i(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return jt(i),null}if(p=Ae.current,Zr(i))hm(i);else{var S=uu(_e.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[sn]=i,p[En]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=p;e:switch(Rn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$i(i)}}return jt(i),Pf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&$i(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=_e.current,Zr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=bn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[sn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Dv(t.nodeValue,s)),t||Ta(i,!0)}else t=uu(t).createTextNode(l),t[sn]=i,i.stateNode=t}return jt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Zr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[sn]=i}else ur(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),t=!1}else s=Xc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Jn(i),i):(Jn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return jt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Zr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[sn]=i}else ur(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),f=!1}else f=Xc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Jn(i),i):(Jn(i),null)}return Jn(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),jl(i,i.updateQueue),jt(i),null);case 4:return Pe(),t===null&&id(i.stateNode.containerInfo),jt(i),null;case 10:return Ki(i.type),jt(i),null;case 19:if(Q(nn),l=i.memoizedState,l===null)return jt(i),null;if(f=(i.flags&128)!==0,p=l.rendering,p===null)if(f)yo(l,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(p=Pl(t),p!==null){for(i.flags|=128,yo(l,!1),t=p.updateQueue,i.updateQueue=t,jl(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)lm(s,t),s=s.sibling;return ye(nn,nn.current&1|2),Et&&Yi(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&T()>$l&&(i.flags|=128,f=!0,yo(l,!1),i.lanes=4194304)}else{if(!f)if(t=Pl(p),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,jl(i,t),yo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Et)return jt(i),null}else 2*T()-l.renderingStartTime>$l&&s!==536870912&&(i.flags|=128,f=!0,yo(l,!1),i.lanes=4194304);l.isBackwards?(p.sibling=i.child,i.child=p):(t=l.last,t!==null?t.sibling=p:i.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=T(),t.sibling=null,s=nn.current,ye(nn,f?s&1|2:s&1),Et&&Yi(i,l.treeForkCount),t):(jt(i),null);case 22:case 23:return Jn(i),af(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(jt(i),i.subtreeFlags&6&&(i.flags|=8192)):jt(i),s=i.updateQueue,s!==null&&jl(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&Q(dr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ki(on),jt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function $S(t,i){switch(Gc(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ki(on),Pe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Wt(i),null;case 31:if(i.memoizedState!==null){if(Jn(i),i.alternate===null)throw Error(a(340));ur()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Jn(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ur()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Q(nn),null;case 4:return Pe(),null;case 10:return Ki(i.type),null;case 22:case 23:return Jn(i),af(),t!==null&&Q(dr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ki(on),null;case 25:return null;default:return null}}function Pg(t,i){switch(Gc(i),i.tag){case 3:Ki(on),Pe();break;case 26:case 27:case 5:Wt(i);break;case 4:Pe();break;case 31:i.memoizedState!==null&&Jn(i);break;case 13:Jn(i);break;case 19:Q(nn);break;case 10:Ki(i.type);break;case 22:case 23:Jn(i),af(),t!==null&&Q(dr);break;case 24:Ki(on)}}function Eo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(A){Pt(i,i.return,A)}}function Ua(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,f=i;var B=s,$=A;try{$()}catch(de){Pt(f,B,de)}}}l=l.next}while(l!==p)}}catch(de){Pt(i,i.return,de)}}function zg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Am(i,s)}catch(l){Pt(t,t.return,l)}}}function Fg(t,i,s){s.props=vr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Pt(t,i,l)}}function Mo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Pt(t,i,f)}}function Ni(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Pt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Pt(t,i,f)}else s.current=null}function Bg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Pt(t,t.return,f)}}function zf(t,i,s){try{var l=t.stateNode;yy(l,t.type,s,i),l[En]=i}catch(f){Pt(t,t.return,f)}}function Ig(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ia(t.type)||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ig(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ia(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Xi));else if(l!==4&&(l===27&&Ia(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Bf(t,i,s),t=t.sibling;t!==null;)Bf(t,i,s),t=t.sibling}function Kl(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Ia(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Kl(t,i,s),t=t.sibling;t!==null;)Kl(t,i,s),t=t.sibling}function Hg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Rn(i,l,s),i[sn]=t,i[En]=s}catch(p){Pt(t,t.return,p)}}var ea=!1,cn=!1,If=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function ey(t,i){if(t=t.containerInfo,sd=gu,t=$p(t),Lc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,A=-1,B=-1,$=0,de=0,me=t,ne=null;t:for(;;){for(var oe;me!==s||f!==0&&me.nodeType!==3||(A=S+f),me!==p||l!==0&&me.nodeType!==3||(B=S+l),me.nodeType===3&&(S+=me.nodeValue.length),(oe=me.firstChild)!==null;)ne=me,me=oe;for(;;){if(me===t)break t;if(ne===s&&++$===f&&(A=S),ne===p&&++de===l&&(B=S),(oe=me.nextSibling)!==null)break;me=ne,ne=me.parentNode}me=oe}s=A===-1||B===-1?null:{start:A,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(od={focusedElem:t,selectionRange:s},gu=!1,Sn=i;Sn!==null;)if(i=Sn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Sn=t;else for(;Sn!==null;){switch(i=Sn,p=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=i,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Ve=vr(s.type,f);t=l.getSnapshotBeforeUpdate(Ve,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Pt(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)cd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":cd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Sn=t;break}Sn=i.return}}function Gg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:na(t,s),l&4&&Eo(5,s);break;case 1:if(na(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){Pt(s,s.return,S)}else{var f=vr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Pt(s,s.return,S)}}l&64&&zg(s),l&512&&Mo(s,s.return);break;case 3:if(na(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Am(t,i)}catch(S){Pt(s,s.return,S)}}break;case 27:i===null&&l&4&&Hg(s);case 26:case 5:na(t,s),i===null&&l&4&&Bg(s),l&512&&Mo(s,s.return);break;case 12:na(t,s);break;case 31:na(t,s),l&4&&Wg(t,s);break;case 13:na(t,s),l&4&&qg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=uy.bind(null,s),wy(t,s))));break;case 22:if(l=s.memoizedState!==null||ea,!l){i=i!==null&&i.memoizedState!==null||cn,f=ea;var p=cn;ea=l,(cn=i)&&!p?ia(t,s,(s.subtreeFlags&8772)!==0):na(t,s),ea=f,cn=p}break;case 30:break;default:na(t,s)}}function kg(t){var i=t.alternate;i!==null&&(t.alternate=null,kg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&R(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,Hn=!1;function ta(t,i,s){for(s=s.child;s!==null;)Xg(t,i,s),s=s.sibling}function Xg(t,i,s){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Te,s)}catch{}switch(s.tag){case 26:cn||Ni(s,i),ta(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:cn||Ni(s,i);var l=Kt,f=Hn;Ia(s.type)&&(Kt=s.stateNode,Hn=!1),ta(t,i,s),Uo(s.stateNode),Kt=l,Hn=f;break;case 5:cn||Ni(s,i);case 6:if(l=Kt,f=Hn,Kt=null,ta(t,i,s),Kt=l,Hn=f,Kt!==null)if(Hn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(s.stateNode)}catch(p){Pt(s,i,p)}else try{Kt.removeChild(s.stateNode)}catch(p){Pt(s,i,p)}break;case 18:Kt!==null&&(Hn?(t=Kt,zv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),vs(t)):zv(Kt,s.stateNode));break;case 4:l=Kt,f=Hn,Kt=s.stateNode.containerInfo,Hn=!0,ta(t,i,s),Kt=l,Hn=f;break;case 0:case 11:case 14:case 15:Ua(2,s,i),cn||Ua(4,s,i),ta(t,i,s);break;case 1:cn||(Ni(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Fg(s,i,l)),ta(t,i,s);break;case 21:ta(t,i,s);break;case 22:cn=(l=cn)||s.memoizedState!==null,ta(t,i,s),cn=l;break;default:ta(t,i,s)}}function Wg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vs(t)}catch(s){Pt(i,i.return,s)}}}function qg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vs(t)}catch(s){Pt(i,i.return,s)}}function ty(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Vg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Vg),i;default:throw Error(a(435,t.tag))}}function Zl(t,i){var s=ty(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=cy.bind(null,t,l);l.then(f,f)}})}function Vn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=i,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Ia(A.type)){Kt=A.stateNode,Hn=!1;break e}break;case 5:Kt=A.stateNode,Hn=!1;break e;case 3:case 4:Kt=A.stateNode.containerInfo,Hn=!0;break e}A=A.return}if(Kt===null)throw Error(a(160));Xg(p,S,f),Kt=null,Hn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Yg(i,t),i=i.sibling}var yi=null;function Yg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(i,t),Gn(t),l&4&&(Ua(3,t,t.return),Eo(3,t),Ua(5,t,t.return));break;case 1:Vn(i,t),Gn(t),l&512&&(cn||s===null||Ni(s,s.return)),l&64&&ea&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=yi;if(Vn(i,t),Gn(t),l&512&&(cn||s===null||Ni(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[nr]||p[sn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Rn(p,l,s),p[sn]=t,xe(p),l=p;break e;case"link":var S=Yv("link","href",f).get(l+(s.href||""));if(S){for(var A=0;A<S.length;A++)if(p=S[A],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(A,1);break t}}p=f.createElement(l),Rn(p,l,s),f.head.appendChild(p);break;case"meta":if(S=Yv("meta","content",f).get(l+(s.content||""))){for(A=0;A<S.length;A++)if(p=S[A],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(A,1);break t}}p=f.createElement(l),Rn(p,l,s),f.head.appendChild(p);break;default:throw Error(a(468,l))}p[sn]=t,xe(p),l=p}t.stateNode=l}else jv(f,t.type,t.stateNode);else t.stateNode=qv(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?jv(f,t.type,t.stateNode):qv(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&zf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Vn(i,t),Gn(t),l&512&&(cn||s===null||Ni(s,s.return)),s!==null&&l&4&&zf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Vn(i,t),Gn(t),l&512&&(cn||s===null||Ni(s,s.return)),t.flags&32){f=t.stateNode;try{Hr(f,"")}catch(Ve){Pt(t,t.return,Ve)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,zf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(If=!0);break;case 6:if(Vn(i,t),Gn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ve){Pt(t,t.return,Ve)}}break;case 3:if(du=null,f=yi,yi=cu(i.containerInfo),Vn(i,t),yi=f,Gn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{vs(i.containerInfo)}catch(Ve){Pt(t,t.return,Ve)}If&&(If=!1,jg(t));break;case 4:l=yi,yi=cu(t.stateNode.containerInfo),Vn(i,t),Gn(t),yi=l;break;case 12:Vn(i,t),Gn(t);break;case 31:Vn(i,t),Gn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zl(t,l)));break;case 13:Vn(i,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Jl=T()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zl(t,l)));break;case 22:f=t.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,$=ea,de=cn;if(ea=$||f,cn=de||B,Vn(i,t),cn=de,ea=$,Gn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||B||ea||cn||_r(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){B=s=i;try{if(p=B.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=B.stateNode;var me=B.memoizedProps.style,ne=me!=null&&me.hasOwnProperty("display")?me.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(Ve){Pt(B,B.return,Ve)}}}else if(i.tag===6){if(s===null){B=i;try{B.stateNode.nodeValue=f?"":B.memoizedProps}catch(Ve){Pt(B,B.return,Ve)}}}else if(i.tag===18){if(s===null){B=i;try{var oe=B.stateNode;f?Fv(oe,!0):Fv(B.stateNode,!1)}catch(Ve){Pt(B,B.return,Ve)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Zl(t,s))));break;case 19:Vn(i,t),Gn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zl(t,l)));break;case 30:break;case 21:break;default:Vn(i,t),Gn(t)}}function Gn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Ig(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,p=Ff(t);Kl(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(Hr(S,""),s.flags&=-33);var A=Ff(t);Kl(t,A,S);break;case 3:case 4:var B=s.stateNode.containerInfo,$=Ff(t);Bf(t,$,B);break;default:throw Error(a(161))}}catch(de){Pt(t,t.return,de)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function jg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;jg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function na(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Gg(t,i.alternate,i),i=i.sibling}function _r(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ua(4,i,i.return),_r(i);break;case 1:Ni(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Fg(i,i.return,s),_r(i);break;case 27:Uo(i.stateNode);case 26:case 5:Ni(i,i.return),_r(i);break;case 22:i.memoizedState===null&&_r(i);break;case 30:_r(i);break;default:_r(i)}t=t.sibling}}function ia(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,p=i,S=p.flags;switch(p.tag){case 0:case 11:case 15:ia(f,p,s),Eo(4,p);break;case 1:if(ia(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){Pt(l,l.return,$)}if(l=p,f=l.updateQueue,f!==null){var A=l.stateNode;try{var B=f.shared.hiddenCallbacks;if(B!==null)for(f.shared.hiddenCallbacks=null,f=0;f<B.length;f++)Tm(B[f],A)}catch($){Pt(l,l.return,$)}}s&&S&64&&zg(p),Mo(p,p.return);break;case 27:Hg(p);case 26:case 5:ia(f,p,s),s&&l===null&&S&4&&Bg(p),Mo(p,p.return);break;case 12:ia(f,p,s);break;case 31:ia(f,p,s),s&&S&4&&Wg(f,p);break;case 13:ia(f,p,s),s&&S&4&&qg(f,p);break;case 22:p.memoizedState===null&&ia(f,p,s),Mo(p,p.return);break;case 30:break;default:ia(f,p,s)}i=i.sibling}}function Hf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&lo(s))}function Vf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&lo(t))}function Ei(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Kg(t,i,s,l),i=i.sibling}function Kg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ei(t,i,s,l),f&2048&&Eo(9,i);break;case 1:Ei(t,i,s,l);break;case 3:Ei(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&lo(t)));break;case 12:if(f&2048){Ei(t,i,s,l),t=i.stateNode;try{var p=i.memoizedProps,S=p.id,A=p.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Pt(i,i.return,B)}}else Ei(t,i,s,l);break;case 31:Ei(t,i,s,l);break;case 13:Ei(t,i,s,l);break;case 23:break;case 22:p=i.stateNode,S=i.alternate,i.memoizedState!==null?p._visibility&2?Ei(t,i,s,l):bo(t,i):p._visibility&2?Ei(t,i,s,l):(p._visibility|=2,ss(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Hf(S,i);break;case 24:Ei(t,i,s,l),f&2048&&Vf(i.alternate,i);break;default:Ei(t,i,s,l)}}function ss(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var p=t,S=i,A=s,B=l,$=S.flags;switch(S.tag){case 0:case 11:case 15:ss(p,S,A,B,f),Eo(8,S);break;case 23:break;case 22:var de=S.stateNode;S.memoizedState!==null?de._visibility&2?ss(p,S,A,B,f):bo(p,S):(de._visibility|=2,ss(p,S,A,B,f)),f&&$&2048&&Hf(S.alternate,S);break;case 24:ss(p,S,A,B,f),f&&$&2048&&Vf(S.alternate,S);break;default:ss(p,S,A,B,f)}i=i.sibling}}function bo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:bo(s,l),f&2048&&Hf(l.alternate,l);break;case 24:bo(s,l),f&2048&&Vf(l.alternate,l);break;default:bo(s,l)}i=i.sibling}}var To=8192;function os(t,i,s){if(t.subtreeFlags&To)for(t=t.child;t!==null;)Zg(t,i,s),t=t.sibling}function Zg(t,i,s){switch(t.tag){case 26:os(t,i,s),t.flags&To&&t.memoizedState!==null&&Vy(s,yi,t.memoizedState,t.memoizedProps);break;case 5:os(t,i,s);break;case 3:case 4:var l=yi;yi=cu(t.stateNode.containerInfo),os(t,i,s),yi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=To,To=16777216,os(t,i,s),To=l):os(t,i,s));break;default:os(t,i,s)}}function Qg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Ao(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Sn=l,$g(l,t)}Qg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jg(t),t=t.sibling}function Jg(t){switch(t.tag){case 0:case 11:case 15:Ao(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:Ao(t);break;case 12:Ao(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ql(t)):Ao(t);break;default:Ao(t)}}function Ql(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Sn=l,$g(l,t)}Qg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ua(8,i,i.return),Ql(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ql(i));break;default:Ql(i)}t=t.sibling}}function $g(t,i){for(;Sn!==null;){var s=Sn;switch(s.tag){case 0:case 11:case 15:Ua(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:lo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Sn=l;else e:for(s=t;Sn!==null;){l=Sn;var f=l.sibling,p=l.return;if(kg(l),l===s){Sn=null;break e}if(f!==null){f.return=p,Sn=f;break e}Sn=p}}}var ny={getCacheForType:function(t){var i=Tn(on),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Tn(on).controller.signal}},iy=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Xt=null,gt=null,xt=0,Ot=0,$n=null,Na=!1,ls=!1,Gf=!1,aa=0,en=0,Oa=0,xr=0,kf=0,ei=0,us=0,Ro=null,kn=null,Xf=!1,Jl=0,ev=0,$l=1/0,eu=null,Pa=null,hn=0,za=null,cs=null,ra=0,Wf=0,qf=null,tv=null,Co=0,Yf=null;function ti(){return(Dt&2)!==0&&xt!==0?xt&-xt:z.T!==null?$f():tr()}function nv(){if(ei===0)if((xt&536870912)===0||Et){var t=De;De<<=1,(De&3932160)===0&&(De=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function Xn(t,i,s){(t===Xt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(fs(t,0),Fa(t,xt,ei,!1)),On(t,s),((Dt&2)===0||t!==Xt)&&(t===Xt&&((Dt&2)===0&&(xr|=s),en===4&&Fa(t,xt,ei,!1)),Oi(t))}function iv(t,i,s){if((Dt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ie(t,i),f=l?sy(t,i):Kf(t,i,!0),p=l;do{if(f===0){ls&&!l&&Fa(t,i,0,!1);break}else{if(s=t.current.alternate,p&&!ay(s)){f=Kf(t,i,!1),p=!1;continue}if(f===2){if(p=i,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var A=t;f=Ro;var B=A.current.memoizedState.isDehydrated;if(B&&(fs(A,S).flags|=256),S=Kf(A,S,!1),S!==2){if(Gf&&!B){A.errorRecoveryDisabledLanes|=p,xr|=p,f=4;break e}p=kn,kn=f,p!==null&&(kn===null?kn=p:kn.push.apply(kn,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){fs(t,0),Fa(t,i,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Fa(l,i,ei,!Na);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Jl+300-T(),10<f)){if(Fa(l,i,ei,!Na),ge(l,0,!0)!==0)break e;ra=i,l.timeoutHandle=Ov(av.bind(null,l,s,kn,eu,Xf,i,ei,xr,us,Na,p,"Throttled",-0,0),f);break e}av(l,s,kn,eu,Xf,i,ei,xr,us,Na,p,null,-0,0)}}break}while(!0);Oi(t)}function av(t,i,s,l,f,p,S,A,B,$,de,me,ne,oe){if(t.timeoutHandle=-1,me=i.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},Zg(i,p,me);var Ve=(p&62914560)===p?Jl-T():(p&4194048)===p?ev-T():0;if(Ve=Gy(me,Ve),Ve!==null){ra=p,t.cancelPendingCommit=Ve(dv.bind(null,t,i,p,s,l,f,S,A,B,de,me,null,ne,oe)),Fa(t,p,S,!$);return}}dv(t,i,p,s,l,f,S,A,B)}function ay(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!Kn(p(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fa(t,i,s,l){i&=~kf,i&=~xr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var p=31-ze(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&js(t,s,i)}function tu(){return(Dt&6)===0?(wo(0),!1):!0}function jf(){if(gt!==null){if(Ot===0)var t=gt.return;else t=gt,ji=cr=null,cf(t),ts=null,co=0,t=gt;for(;t!==null;)Pg(t.alternate,t),t=t.return;gt=null}}function fs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,by(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ra=0,jf(),Xt=t,gt=s=qi(t.current,null),xt=i,Ot=0,$n=null,Na=!1,ls=Ie(t,i),Gf=!1,us=ei=kf=xr=Oa=en=0,kn=Ro=null,Xf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-ze(l),p=1<<f;i|=t[f],l&=~p}return aa=i,El(),s}function rv(t,i){ut=null,z.H=xo,i===es||i===Dl?(i=ym(),Ot=3):i===Qc?(i=ym(),Ot=4):Ot=i===Af?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,$n=i,gt===null&&(en=1,Xl(t,ui(i,t.current)))}function sv(){var t=Qn.current;return t===null?!0:(xt&4194048)===xt?hi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===hi:!1}function ov(){var t=z.H;return z.H=xo,t===null?xo:t}function lv(){var t=z.A;return z.A=ny,t}function nu(){en=4,Na||(xt&4194048)!==xt&&Qn.current!==null||(ls=!0),(Oa&134217727)===0&&(xr&134217727)===0||Xt===null||Fa(Xt,xt,ei,!1)}function Kf(t,i,s){var l=Dt;Dt|=2;var f=ov(),p=lv();(Xt!==t||xt!==i)&&(eu=null,fs(t,i)),i=!1;var S=en;e:do try{if(Ot!==0&&gt!==null){var A=gt,B=$n;switch(Ot){case 8:jf(),S=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(i=!0);var $=Ot;if(Ot=0,$n=null,ds(t,A,B,$),s&&ls){S=0;break e}break;default:$=Ot,Ot=0,$n=null,ds(t,A,B,$)}}ry(),S=en;break}catch(de){rv(t,de)}while(!0);return i&&t.shellSuspendCounter++,ji=cr=null,Dt=l,z.H=f,z.A=p,gt===null&&(Xt=null,xt=0,El()),S}function ry(){for(;gt!==null;)uv(gt)}function sy(t,i){var s=Dt;Dt|=2;var l=ov(),f=lv();Xt!==t||xt!==i?(eu=null,$l=T()+500,fs(t,i)):ls=Ie(t,i);e:do try{if(Ot!==0&&gt!==null){i=gt;var p=$n;t:switch(Ot){case 1:Ot=0,$n=null,ds(t,i,p,1);break;case 2:case 9:if(xm(p)){Ot=0,$n=null,cv(i);break}i=function(){Ot!==2&&Ot!==9||Xt!==t||(Ot=7),Oi(t)},p.then(i,i);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:xm(p)?(Ot=0,$n=null,cv(i)):(Ot=0,$n=null,ds(t,i,p,7));break;case 5:var S=null;switch(gt.tag){case 26:S=gt.memoizedState;case 5:case 27:var A=gt;if(S?Kv(S):A.stateNode.complete){Ot=0,$n=null;var B=A.sibling;if(B!==null)gt=B;else{var $=A.return;$!==null?(gt=$,iu($)):gt=null}break t}}Ot=0,$n=null,ds(t,i,p,5);break;case 6:Ot=0,$n=null,ds(t,i,p,6);break;case 8:jf(),en=6;break e;default:throw Error(a(462))}}oy();break}catch(de){rv(t,de)}while(!0);return ji=cr=null,z.H=l,z.A=f,Dt=s,gt!==null?0:(Xt=null,xt=0,El(),en)}function oy(){for(;gt!==null&&!Zt();)uv(gt)}function uv(t){var i=Ng(t.alternate,t,aa);t.memoizedProps=t.pendingProps,i===null?iu(t):gt=i}function cv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Rg(s,i,i.pendingProps,i.type,void 0,xt);break;case 11:i=Rg(s,i,i.pendingProps,i.type.render,i.ref,xt);break;case 5:cf(i);default:Pg(s,i),i=gt=lm(i,aa),i=Ng(s,i,aa)}t.memoizedProps=t.pendingProps,i===null?iu(t):gt=i}function ds(t,i,s,l){ji=cr=null,cf(i),ts=null,co=0;var f=i.return;try{if(KS(t,f,i,s,xt)){en=1,Xl(t,ui(s,t.current)),gt=null;return}}catch(p){if(f!==null)throw gt=f,p;en=1,Xl(t,ui(s,t.current)),gt=null;return}i.flags&32768?(Et||l===1?t=!0:ls||(xt&536870912)!==0?t=!1:(Na=t=!0,(l===2||l===9||l===3||l===6)&&(l=Qn.current,l!==null&&l.tag===13&&(l.flags|=16384))),fv(i,t)):iu(i)}function iu(t){var i=t;do{if((i.flags&32768)!==0){fv(i,Na);return}t=i.return;var s=JS(i.alternate,i,aa);if(s!==null){gt=s;return}if(i=i.sibling,i!==null){gt=i;return}gt=i=t}while(i!==null);en===0&&(en=5)}function fv(t,i){do{var s=$S(t.alternate,t);if(s!==null){s.flags&=32767,gt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){gt=t;return}gt=t=s}while(t!==null);en=6,gt=null}function dv(t,i,s,l,f,p,S,A,B){t.cancelPendingCommit=null;do au();while(hn!==0);if((Dt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(p=i.lanes|i.childLanes,p|=zc,oi(t,s,p,S,A,B),t===Xt&&(gt=Xt=null,xt=0),cs=i,za=t,ra=s,Wf=p,qf=f,tv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fy(fe,function(){return vv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=W.p,W.p=2,S=Dt,Dt|=4;try{ey(t,i,s)}finally{Dt=S,W.p=f,z.T=l}}hn=1,hv(),pv(),mv()}}function hv(){if(hn===1){hn=0;var t=za,i=cs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=W.p;W.p=2;var f=Dt;Dt|=4;try{Yg(i,t);var p=od,S=$p(t.containerInfo),A=p.focusedElem,B=p.selectionRange;if(S!==A&&A&&A.ownerDocument&&Jp(A.ownerDocument.documentElement,A)){if(B!==null&&Lc(A)){var $=B.start,de=B.end;if(de===void 0&&(de=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(de,A.value.length);else{var me=A.ownerDocument||document,ne=me&&me.defaultView||window;if(ne.getSelection){var oe=ne.getSelection(),Ve=A.textContent.length,tt=Math.min(B.start,Ve),It=B.end===void 0?tt:Math.min(B.end,Ve);!oe.extend&&tt>It&&(S=It,It=tt,tt=S);var K=Qp(A,tt),G=Qp(A,It);if(K&&G&&(oe.rangeCount!==1||oe.anchorNode!==K.node||oe.anchorOffset!==K.offset||oe.focusNode!==G.node||oe.focusOffset!==G.offset)){var J=me.createRange();J.setStart(K.node,K.offset),oe.removeAllRanges(),tt>It?(oe.addRange(J),oe.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),oe.addRange(J))}}}}for(me=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&me.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<me.length;A++){var pe=me[A];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}gu=!!sd,od=sd=null}finally{Dt=f,W.p=l,z.T=s}}t.current=i,hn=2}}function pv(){if(hn===2){hn=0;var t=za,i=cs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=W.p;W.p=2;var f=Dt;Dt|=4;try{Gg(t,i.alternate,i)}finally{Dt=f,W.p=l,z.T=s}}hn=3}}function mv(){if(hn===4||hn===3){hn=0,O();var t=za,i=cs,s=ra,l=tv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?hn=5:(hn=0,cs=za=null,gv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Pa=null),Br(s),i=i.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Te,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,f=W.p,W.p=2,z.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var A=l[S];p(A.value,{componentStack:A.stack})}}finally{z.T=i,W.p=f}}(ra&3)!==0&&au(),Oi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Yf?Co++:(Co=0,Yf=t):Co=0,wo(0)}}function gv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,lo(i)))}function au(){return hv(),pv(),mv(),vv()}function vv(){if(hn!==5)return!1;var t=za,i=Wf;Wf=0;var s=Br(ra),l=z.T,f=W.p;try{W.p=32>s?32:s,z.T=null,s=qf,qf=null;var p=za,S=ra;if(hn=0,cs=za=null,ra=0,(Dt&6)!==0)throw Error(a(331));var A=Dt;if(Dt|=4,Jg(p.current),Kg(p,p.current,S,s),Dt=A,wo(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Te,p)}catch{}return!0}finally{W.p=f,z.T=l,gv(t,i)}}function _v(t,i,s){i=ui(s,i),i=Tf(t.stateNode,i,2),t=wa(t,i,2),t!==null&&(On(t,2),Oi(t))}function Pt(t,i,s){if(t.tag===3)_v(t,t,s);else for(;i!==null;){if(i.tag===3){_v(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Pa===null||!Pa.has(l))){t=ui(s,t),s=xg(2),l=wa(i,s,2),l!==null&&(Sg(s,l,i,t),On(l,2),Oi(l));break}}i=i.return}}function Zf(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new iy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Gf=!0,f.add(s),t=ly.bind(null,t,i,s),i.then(t,t))}function ly(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Xt===t&&(xt&s)===s&&(en===4||en===3&&(xt&62914560)===xt&&300>T()-Jl?(Dt&2)===0&&fs(t,0):kf|=s,us===xt&&(us=0)),Oi(t)}function xv(t,i){i===0&&(i=Nt()),t=or(t,i),t!==null&&(On(t,i),Oi(t))}function uy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),xv(t,s)}function cy(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),xv(t,s)}function fy(t,i){return ot(t,i)}var ru=null,hs=null,Qf=!1,su=!1,Jf=!1,Ba=0;function Oi(t){t!==hs&&t.next===null&&(hs===null?ru=hs=t:hs=hs.next=t),su=!0,Qf||(Qf=!0,hy())}function wo(t,i){if(!Jf&&su){Jf=!0;do for(var s=!1,l=ru;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,A=l.pingedLanes;p=(1<<31-ze(42|t)+1)-1,p&=f&~(S&~A),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Mv(l,p))}else p=xt,p=ge(l,l===Xt?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Ie(l,p)||(s=!0,Mv(l,p));l=l.next}while(s);Jf=!1}}function dy(){Sv()}function Sv(){su=Qf=!1;var t=0;Ba!==0&&My()&&(t=Ba);for(var i=T(),s=null,l=ru;l!==null;){var f=l.next,p=yv(l,i);p===0?(l.next=null,s===null?ru=f:s.next=f,f===null&&(hs=s)):(s=l,(t!==0||(p&3)!==0)&&(su=!0)),l=f}hn!==0&&hn!==5||wo(t),Ba!==0&&(Ba=0)}function yv(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-ze(p),A=1<<S,B=f[S];B===-1?((A&s)===0||(A&l)!==0)&&(f[S]=rt(A,i)):B<=i&&(t.expiredLanes|=A),p&=~A}if(i=Xt,s=xt,s=ge(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Jt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Jt(l),Br(s)){case 2:case 8:s=Ee;break;case 32:s=fe;break;case 268435456:s=Ce;break;default:s=fe}return l=Ev.bind(null,t),s=ot(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Jt(l),t.callbackPriority=2,t.callbackNode=null,2}function Ev(t,i){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(au()&&t.callbackNode!==s)return null;var l=xt;return l=ge(t,t===Xt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(iv(t,l,i),yv(t,T()),t.callbackNode!=null&&t.callbackNode===s?Ev.bind(null,t):null)}function Mv(t,i){if(au())return null;iv(t,i,!0)}function hy(){Ty(function(){(Dt&6)!==0?ot(he,dy):Sv()})}function $f(){if(Ba===0){var t=Jr;t===0&&(t=Re,Re<<=1,(Re&261888)===0&&(Re=256)),Ba=t}return Ba}function bv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pl(""+t)}function Tv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function py(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var p=bv((f[En]||null).action),S=l.submitter;S&&(i=(i=S[En]||null)?bv(i.formAction):S.getAttribute("formAction"),i!==null&&(p=i,S=null));var A=new _l("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ba!==0){var B=S?Tv(f,S):new FormData(f);xf(s,{pending:!0,data:B,method:f.method,action:p},null,B)}}else typeof p=="function"&&(A.preventDefault(),B=S?Tv(f,S):new FormData(f),xf(s,{pending:!0,data:B,method:f.method,action:p},p,B))},currentTarget:f}]})}}for(var ed=0;ed<Pc.length;ed++){var td=Pc[ed],my=td.toLowerCase(),gy=td[0].toUpperCase()+td.slice(1);Si(my,"on"+gy)}Si(nm,"onAnimationEnd"),Si(im,"onAnimationIteration"),Si(am,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(US,"onTransitionRun"),Si(NS,"onTransitionStart"),Si(OS,"onTransitionCancel"),Si(rm,"onTransitionEnd"),Ze("onMouseEnter",["mouseout","mouseover"]),Ze("onMouseLeave",["mouseout","mouseover"]),Ze("onPointerEnter",["pointerout","pointerover"]),Ze("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function Av(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var S=l.length-1;0<=S;S--){var A=l[S],B=A.instance,$=A.currentTarget;if(A=A.listener,B!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=$;try{p(f)}catch(de){yl(de)}f.currentTarget=null,p=B}else for(S=0;S<l.length;S++){if(A=l[S],B=A.instance,$=A.currentTarget,A=A.listener,B!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=$;try{p(f)}catch(de){yl(de)}f.currentTarget=null,p=B}}}}function vt(t,i){var s=i[Zs];s===void 0&&(s=i[Zs]=new Set);var l=t+"__bubble";s.has(l)||(Rv(i,t,2,!1),s.add(l))}function nd(t,i,s){var l=0;i&&(l|=4),Rv(s,t,l,i)}var ou="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[ou]){t[ou]=!0,Ue.forEach(function(s){s!=="selectionchange"&&(vy.has(s)||nd(s,!1,t),nd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ou]||(i[ou]=!0,nd("selectionchange",!1,i))}}function Rv(t,i,s,l){switch(n_(i)){case 2:var f=Wy;break;case 8:f=qy;break;default:f=_d}s=f.bind(null,i,s,t),f=void 0,!Ec||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function ad(t,i,s,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var A=l.stateNode.containerInfo;if(A===f)break;if(S===4)for(S=l.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;A!==null;){if(S=q(A),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){l=p=S;continue e}A=A.parentNode}}l=l.return}Up(function(){var $=p,de=Sc(s),me=[];e:{var ne=sm.get(t);if(ne!==void 0){var oe=_l,Ve=t;switch(t){case"keypress":if(gl(s)===0)break e;case"keydown":case"keyup":oe=cS;break;case"focusin":Ve="focus",oe=Ac;break;case"focusout":Ve="blur",oe=Ac;break;case"beforeblur":case"afterblur":oe=Ac;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=hS;break;case nm:case im:case am:oe=tS;break;case rm:oe=mS;break;case"scroll":case"scrollend":oe=Zx;break;case"wheel":oe=vS;break;case"copy":case"cut":case"paste":oe=iS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Fp;break;case"toggle":case"beforetoggle":oe=xS}var tt=(i&4)!==0,It=!tt&&(t==="scroll"||t==="scrollend"),K=tt?ne!==null?ne+"Capture":null:ne;tt=[];for(var G=$,J;G!==null;){var pe=G;if(J=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||J===null||K===null||(pe=Qs(G,K),pe!=null&&tt.push(Lo(G,pe,J))),It)break;G=G.return}0<tt.length&&(ne=new oe(ne,Ve,null,s,de),me.push({event:ne,listeners:tt}))}}if((i&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ne&&s!==xc&&(Ve=s.relatedTarget||s.fromElement)&&(q(Ve)||Ve[ya]))break e;if((oe||ne)&&(ne=de.window===de?de:(ne=de.ownerDocument)?ne.defaultView||ne.parentWindow:window,oe?(Ve=s.relatedTarget||s.toElement,oe=$,Ve=Ve?q(Ve):null,Ve!==null&&(It=u(Ve),tt=Ve.tag,Ve!==It||tt!==5&&tt!==27&&tt!==6)&&(Ve=null)):(oe=null,Ve=$),oe!==Ve)){if(tt=Pp,pe="onMouseLeave",K="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Fp,pe="onPointerLeave",K="onPointerEnter",G="pointer"),It=oe==null?ne:ae(oe),J=Ve==null?ne:ae(Ve),ne=new tt(pe,G+"leave",oe,s,de),ne.target=It,ne.relatedTarget=J,pe=null,q(de)===$&&(tt=new tt(K,G+"enter",Ve,s,de),tt.target=J,tt.relatedTarget=It,pe=tt),It=pe,oe&&Ve)t:{for(tt=_y,K=oe,G=Ve,J=0,pe=K;pe;pe=tt(pe))J++;pe=0;for(var et=G;et;et=tt(et))pe++;for(;0<J-pe;)K=tt(K),J--;for(;0<pe-J;)G=tt(G),pe--;for(;J--;){if(K===G||G!==null&&K===G.alternate){tt=K;break t}K=tt(K),G=tt(G)}tt=null}else tt=null;oe!==null&&Cv(me,ne,oe,tt,!1),Ve!==null&&It!==null&&Cv(me,It,Ve,tt,!0)}}e:{if(ne=$?ae($):window,oe=ne.nodeName&&ne.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ne.type==="file")var Rt=Wp;else if(kp(ne))if(qp)Rt=wS;else{Rt=RS;var Xe=AS}else oe=ne.nodeName,!oe||oe.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&_c($.elementType)&&(Rt=Wp):Rt=CS;if(Rt&&(Rt=Rt(t,$))){Xp(me,Rt,s,de);break e}Xe&&Xe(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&dn(ne,"number",ne.value)}switch(Xe=$?ae($):window,t){case"focusin":(kp(Xe)||Xe.contentEditable==="true")&&(Xr=Xe,Uc=$,ro=null);break;case"focusout":ro=Uc=Xr=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,em(me,s,de);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":em(me,s,de)}var ct;if(Cc)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else kr?Vp(t,s)&&(St="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(St="onCompositionStart");St&&(Bp&&s.locale!=="ko"&&(kr||St!=="onCompositionStart"?St==="onCompositionEnd"&&kr&&(ct=Np()):(Ea=de,Mc="value"in Ea?Ea.value:Ea.textContent,kr=!0)),Xe=lu($,St),0<Xe.length&&(St=new zp(St,t,null,s,de),me.push({event:St,listeners:Xe}),ct?St.data=ct:(ct=Gp(s),ct!==null&&(St.data=ct)))),(ct=yS?ES(t,s):MS(t,s))&&(St=lu($,"onBeforeInput"),0<St.length&&(Xe=new zp("onBeforeInput","beforeinput",null,s,de),me.push({event:Xe,listeners:St}),Xe.data=ct)),py(me,t,$,s,de)}Av(me,i)})}function Lo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function lu(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Qs(t,s),f!=null&&l.unshift(Lo(t,f,p)),f=Qs(t,i),f!=null&&l.push(Lo(t,f,p))),t.tag===3)return l;t=t.return}return[]}function _y(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Cv(t,i,s,l,f){for(var p=i._reactName,S=[];s!==null&&s!==l;){var A=s,B=A.alternate,$=A.stateNode;if(A=A.tag,B!==null&&B===l)break;A!==5&&A!==26&&A!==27||$===null||(B=$,f?($=Qs(s,p),$!=null&&S.unshift(Lo(s,$,B))):f||($=Qs(s,p),$!=null&&S.push(Lo(s,$,B)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var xy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function wv(t){return(typeof t=="string"?t:""+t).replace(xy,`
`).replace(Sy,"")}function Dv(t,i){return i=wv(i),wv(t)===i}function Bt(t,i,s,l,f,p){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Hr(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Hr(t,""+l);break;case"className":Ut(t,"class",l);break;case"tabIndex":Ut(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ut(t,s,l);break;case"style":Dp(t,l,p);break;case"data":if(i!=="object"){Ut(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=pl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&Bt(t,i,"name",f.name,f,null),Bt(t,i,"formEncType",f.formEncType,f,null),Bt(t,i,"formMethod",f.formMethod,f,null),Bt(t,i,"formTarget",f.formTarget,f,null)):(Bt(t,i,"encType",f.encType,f,null),Bt(t,i,"method",f.method,f,null),Bt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=pl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Xi);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=pl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":vt("beforetoggle",t),vt("toggle",t),kt(t,"popover",l);break;case"xlinkActuate":mt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":mt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":mt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":mt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":mt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":mt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":mt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":mt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":mt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":kt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=jx.get(s)||s,kt(t,s,l))}}function rd(t,i,s,l,f,p){switch(s){case"style":Dp(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Hr(t,l):(typeof l=="number"||typeof l=="bigint")&&Hr(t,""+l);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ge.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),p=t[En]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(i,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):kt(t,s,l)}}}function Rn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Bt(t,i,p,S,s,null)}}f&&Bt(t,i,"srcSet",s.srcSet,s,null),l&&Bt(t,i,"src",s.src,s,null);return;case"input":vt("invalid",t);var A=p=S=f=null,B=null,$=null;for(l in s)if(s.hasOwnProperty(l)){var de=s[l];if(de!=null)switch(l){case"name":f=de;break;case"type":S=de;break;case"checked":B=de;break;case"defaultChecked":$=de;break;case"value":p=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:Bt(t,i,l,de,s,null)}}Pn(t,p,A,B,$,S,f,!1);return;case"select":vt("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":S=A;break;case"multiple":l=A;default:Bt(t,i,f,A,s,null)}i=p,s=S,t.multiple=!!l,i!=null?tn(t,!!l,i,!1):s!=null&&tn(t,!!l,s,!0);return;case"textarea":vt("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(A=s[S],A!=null))switch(S){case"value":l=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Bt(t,i,S,A,s,null)}Di(t,l,f,p);return;case"option":for(B in s)s.hasOwnProperty(B)&&(l=s[B],l!=null)&&(B==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Bt(t,i,B,l,s,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(l=0;l<Do.length;l++)vt(Do[l],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(l=s[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Bt(t,i,$,l,s,null)}return;default:if(_c(i)){for(de in s)s.hasOwnProperty(de)&&(l=s[de],l!==void 0&&rd(t,i,de,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Bt(t,i,A,l,s,null))}function yy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,A=null,B=null,$=null,de=null;for(oe in s){var me=s[oe];if(s.hasOwnProperty(oe)&&me!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":B=me;default:l.hasOwnProperty(oe)||Bt(t,i,oe,null,l,me)}}for(var ne in l){var oe=l[ne];if(me=s[ne],l.hasOwnProperty(ne)&&(oe!=null||me!=null))switch(ne){case"type":p=oe;break;case"name":f=oe;break;case"checked":$=oe;break;case"defaultChecked":de=oe;break;case"value":S=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(a(137,i));break;default:oe!==me&&Bt(t,i,ne,oe,l,me)}}wn(t,S,A,B,$,de,p,f);return;case"select":oe=S=A=ne=null;for(p in s)if(B=s[p],s.hasOwnProperty(p)&&B!=null)switch(p){case"value":break;case"multiple":oe=B;default:l.hasOwnProperty(p)||Bt(t,i,p,null,l,B)}for(f in l)if(p=l[f],B=s[f],l.hasOwnProperty(f)&&(p!=null||B!=null))switch(f){case"value":ne=p;break;case"defaultValue":A=p;break;case"multiple":S=p;default:p!==B&&Bt(t,i,f,p,l,B)}i=A,s=S,l=oe,ne!=null?tn(t,!!s,ne,!1):!!l!=!!s&&(i!=null?tn(t,!!s,i,!0):tn(t,!!s,s?[]:"",!1));return;case"textarea":oe=ne=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Bt(t,i,A,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":ne=f;break;case"defaultValue":oe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==p&&Bt(t,i,S,f,l,p)}Ir(t,ne,oe);return;case"option":for(var Ve in s)ne=s[Ve],s.hasOwnProperty(Ve)&&ne!=null&&!l.hasOwnProperty(Ve)&&(Ve==="selected"?t.selected=!1:Bt(t,i,Ve,null,l,ne));for(B in l)ne=l[B],oe=s[B],l.hasOwnProperty(B)&&ne!==oe&&(ne!=null||oe!=null)&&(B==="selected"?t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol":Bt(t,i,B,ne,l,oe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)ne=s[tt],s.hasOwnProperty(tt)&&ne!=null&&!l.hasOwnProperty(tt)&&Bt(t,i,tt,null,l,ne);for($ in l)if(ne=l[$],oe=s[$],l.hasOwnProperty($)&&ne!==oe&&(ne!=null||oe!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(a(137,i));break;default:Bt(t,i,$,ne,l,oe)}return;default:if(_c(i)){for(var It in s)ne=s[It],s.hasOwnProperty(It)&&ne!==void 0&&!l.hasOwnProperty(It)&&rd(t,i,It,void 0,l,ne);for(de in l)ne=l[de],oe=s[de],!l.hasOwnProperty(de)||ne===oe||ne===void 0&&oe===void 0||rd(t,i,de,ne,l,oe);return}}for(var K in s)ne=s[K],s.hasOwnProperty(K)&&ne!=null&&!l.hasOwnProperty(K)&&Bt(t,i,K,null,l,ne);for(me in l)ne=l[me],oe=s[me],!l.hasOwnProperty(me)||ne===oe||ne==null&&oe==null||Bt(t,i,me,ne,l,oe)}function Lv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ey(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,A=f.duration;if(p&&A&&Lv(S)){for(S=0,A=f.responseEnd,l+=1;l<s.length;l++){var B=s[l],$=B.startTime;if($>A)break;var de=B.transferSize,me=B.initiatorType;de&&Lv(me)&&(B=B.responseEnd,S+=de*(B<A?1:(A-$)/(B-$)))}if(--l,i+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sd=null,od=null;function uu(t){return t.nodeType===9?t:t.ownerDocument}function Uv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function ld(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ud=null;function My(){var t=window.event;return t&&t.type==="popstate"?t===ud?!1:(ud=t,!0):(ud=null,!1)}var Ov=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,Pv=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Pv<"u"?function(t){return Pv.resolve(null).then(t).catch(Ay)}:Ov;function Ay(t){setTimeout(function(){throw t})}function Ia(t){return t==="head"}function zv(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),vs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Uo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Uo(s);for(var p=s.firstChild;p;){var S=p.nextSibling,A=p.nodeName;p[nr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&Uo(t.ownerDocument.body);s=f}while(s);vs(i)}function Fv(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function cd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":cd(s),R(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Ry(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[nr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function Cy(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=pi(t.nextSibling),t===null))return null;return t}function Bv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=pi(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function wy(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function pi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var hd=null;function Iv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return pi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Hv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function Vv(t,i,s){switch(i=uu(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Uo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);R(t)}var mi=new Map,Gv=new Set;function cu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sa=W.d;W.d={f:Dy,r:Ly,D:Uy,C:Ny,L:Oy,m:Py,X:Fy,S:zy,M:By};function Dy(){var t=sa.f(),i=tu();return t||i}function Ly(t){var i=ie(t);i!==null&&i.tag===5&&i.type==="form"?rg(i):sa.r(t)}var ps=typeof document>"u"?null:document;function kv(t,i,s){var l=ps;if(l&&typeof i=="string"&&i){var f=_t(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Gv.has(f)||(Gv.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Rn(i,"link",t),xe(i),l.head.appendChild(i)))}}function Uy(t){sa.D(t),kv("dns-prefetch",t,null)}function Ny(t,i){sa.C(t,i),kv("preconnect",t,i)}function Oy(t,i,s){sa.L(t,i,s);var l=ps;if(l&&t&&i){var f='link[rel="preload"][as="'+_t(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+_t(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+_t(s.imageSizes)+'"]')):f+='[href="'+_t(t)+'"]';var p=f;switch(i){case"style":p=ms(t);break;case"script":p=gs(t)}mi.has(p)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),mi.set(p,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(No(p))||i==="script"&&l.querySelector(Oo(p))||(i=l.createElement("link"),Rn(i,"link",t),xe(i),l.head.appendChild(i)))}}function Py(t,i){sa.m(t,i);var s=ps;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=gs(t)}if(!mi.has(p)&&(t=g({rel:"modulepreload",href:t},i),mi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Oo(p)))return}l=s.createElement("link"),Rn(l,"link",t),xe(l),s.head.appendChild(l)}}}function zy(t,i,s){sa.S(t,i,s);var l=ps;if(l&&t){var f=j(l).hoistableStyles,p=ms(t);i=i||"default";var S=f.get(p);if(!S){var A={loading:0,preload:null};if(S=l.querySelector(No(p)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=mi.get(p))&&pd(t,s);var B=S=l.createElement("link");xe(B),Rn(B,"link",t),B._p=new Promise(function($,de){B.onload=$,B.onerror=de}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,fu(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:A},f.set(p,S)}}}function Fy(t,i){sa.X(t,i);var s=ps;if(s&&t){var l=j(s).hoistableScripts,f=gs(t),p=l.get(f);p||(p=s.querySelector(Oo(f)),p||(t=g({src:t,async:!0},i),(i=mi.get(f))&&md(t,i),p=s.createElement("script"),xe(p),Rn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function By(t,i){sa.M(t,i);var s=ps;if(s&&t){var l=j(s).hoistableScripts,f=gs(t),p=l.get(f);p||(p=s.querySelector(Oo(f)),p||(t=g({src:t,async:!0,type:"module"},i),(i=mi.get(f))&&md(t,i),p=s.createElement("script"),xe(p),Rn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function Xv(t,i,s,l){var f=(f=_e.current)?cu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ms(s.href),s=j(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=ms(s.href);var p=j(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector(No(t)))&&!p._p&&(S.instance=p,S.state.loading=5),mi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},mi.set(t,s),p||Iy(f,t,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=gs(s),s=j(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function ms(t){return'href="'+_t(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function Wv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Iy(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Rn(i,"link",s),xe(i),t.head.appendChild(i))}function gs(t){return'[src="'+_t(t)+'"]'}function Oo(t){return"script[async]"+t}function qv(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+_t(s.href)+'"]');if(l)return i.instance=l,xe(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),xe(l),Rn(l,"style",f),fu(l,s.precedence,t),i.instance=l;case"stylesheet":f=ms(s.href);var p=t.querySelector(No(f));if(p)return i.state.loading|=4,i.instance=p,xe(p),p;l=Wv(s),(f=mi.get(f))&&pd(l,f),p=(t.ownerDocument||t).createElement("link"),xe(p);var S=p;return S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Rn(p,"link",l),i.state.loading|=4,fu(p,s.precedence,t),i.instance=p;case"script":return p=gs(s.src),(f=t.querySelector(Oo(p)))?(i.instance=f,xe(f),f):(l=s,(f=mi.get(p))&&(l=g({},s),md(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),xe(f),Rn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,fu(l,s.precedence,t));return i.instance}function fu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var A=l[S];if(A.dataset.precedence===i)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function pd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function md(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var du=null;function Yv(t,i,s){if(du===null){var l=new Map,f=du=new Map;f.set(s,l)}else f=du,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[nr]||p[sn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(i)||"";S=t+S;var A=l.get(S);A?A.push(p):l.set(S,[p])}}return l}function jv(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Hy(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Kv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Vy(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=ms(l.href),p=i.querySelector(No(f));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=hu.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=p,xe(p);return}p=i.ownerDocument||i,l=Wv(l),(f=mi.get(f))&&pd(l,f),p=p.createElement("link"),xe(p);var S=p;S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Rn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=hu.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var gd=0;function Gy(t,i){return t.stylesheets&&t.count===0&&mu(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&mu(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+i);0<t.imgBytes&&gd===0&&(gd=62500*Ey());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mu(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>gd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function hu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pu=null;function mu(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pu=new Map,i.forEach(ky,t),pu=null,hu.call(t))}function ky(t,i){if(!(i.state.loading&4)){var s=pu.get(t);if(s)var l=s.get(null);else{s=new Map,pu.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=hu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Po={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Xy(t,i,s,l,f,p,S,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Zv(t,i,s,l,f,p,S,A,B,$,de,me){return t=new Xy(t,i,s,S,B,$,de,me,A),i=1,p===!0&&(i|=24),p=Zn(3,null,null,i),t.current=p,p.stateNode=t,i=jc(),i.refCount++,t.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:i},Jc(p),t}function Qv(t){return t?(t=Yr,t):Yr}function Jv(t,i,s,l,f,p){f=Qv(f),l.context===null?l.context=f:l.pendingContext=f,l=Ca(i),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=wa(t,l,i),s!==null&&(Xn(s,t,i),ho(s,t,i))}function $v(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function vd(t,i){$v(t,i),(t=t.alternate)&&$v(t,i)}function e_(t){if(t.tag===13||t.tag===31){var i=or(t,67108864);i!==null&&Xn(i,t,67108864),vd(t,67108864)}}function t_(t){if(t.tag===13||t.tag===31){var i=ti();i=Fr(i);var s=or(t,i);s!==null&&Xn(s,t,i),vd(t,i)}}var gu=!0;function Wy(t,i,s,l){var f=z.T;z.T=null;var p=W.p;try{W.p=2,_d(t,i,s,l)}finally{W.p=p,z.T=f}}function qy(t,i,s,l){var f=z.T;z.T=null;var p=W.p;try{W.p=8,_d(t,i,s,l)}finally{W.p=p,z.T=f}}function _d(t,i,s,l){if(gu){var f=xd(l);if(f===null)ad(t,i,l,vu,s),i_(t,l);else if(jy(f,t,i,s,l))l.stopPropagation();else if(i_(t,l),i&4&&-1<Yy.indexOf(t)){for(;f!==null;){var p=ie(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Me(p.pendingLanes);if(S!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var B=1<<31-ze(S);A.entanglements[1]|=B,S&=~B}Oi(p),(Dt&6)===0&&($l=T()+500,wo(0))}}break;case 31:case 13:A=or(p,2),A!==null&&Xn(A,p,2),tu(),vd(p,2)}if(p=xd(l),p===null&&ad(t,i,l,vu,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else ad(t,i,l,null,s)}}function xd(t){return t=Sc(t),Sd(t)}var vu=null;function Sd(t){if(vu=null,t=q(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=c(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return vu=t,null}function n_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case he:return 2;case Ee:return 8;case fe:case Ye:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var yd=!1,Ha=null,Va=null,Ga=null,zo=new Map,Fo=new Map,ka=[],Yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i_(t,i){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":zo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(i.pointerId)}}function Bo(t,i,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=ie(i),i!==null&&e_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function jy(t,i,s,l,f){switch(i){case"focusin":return Ha=Bo(Ha,t,i,s,l,f),!0;case"dragenter":return Va=Bo(Va,t,i,s,l,f),!0;case"mouseover":return Ga=Bo(Ga,t,i,s,l,f),!0;case"pointerover":var p=f.pointerId;return zo.set(p,Bo(zo.get(p)||null,t,i,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,Fo.set(p,Bo(Fo.get(p)||null,t,i,s,l,f)),!0}return!1}function a_(t){var i=q(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){t.blockedOn=i,Ks(t.priority,function(){t_(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Ks(t.priority,function(){t_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _u(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=xd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);xc=l,s.target.dispatchEvent(l),xc=null}else return i=ie(s),i!==null&&e_(i),t.blockedOn=s,!1;i.shift()}return!0}function r_(t,i,s){_u(t)&&s.delete(i)}function Ky(){yd=!1,Ha!==null&&_u(Ha)&&(Ha=null),Va!==null&&_u(Va)&&(Va=null),Ga!==null&&_u(Ga)&&(Ga=null),zo.forEach(r_),Fo.forEach(r_)}function xu(t,i){t.blockedOn===i&&(t.blockedOn=null,yd||(yd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ky)))}var Su=null;function s_(t){Su!==t&&(Su=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Su===t&&(Su=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Sd(l||s)===null)continue;break}var p=ie(s);p!==null&&(t.splice(i,3),i-=3,xf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function vs(t){function i(B){return xu(B,t)}Ha!==null&&xu(Ha,t),Va!==null&&xu(Va,t),Ga!==null&&xu(Ga,t),zo.forEach(i),Fo.forEach(i);for(var s=0;s<ka.length;s++){var l=ka[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ka.length&&(s=ka[0],s.blockedOn===null);)a_(s),s.blockedOn===null&&ka.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[En]||null;if(typeof p=="function")S||s_(s);else if(S){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[En]||null)A=S.formAction;else if(Sd(f)!==null)continue}else A=S.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),s_(s)}}}function o_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Ed(t){this._internalRoot=t}yu.prototype.render=Ed.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ti();Jv(s,l,t,i,null,null)},yu.prototype.unmount=Ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Jv(t.current,2,null,t,null,null),tu(),i[ya]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var i=tr();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ka.length&&i!==0&&i<ka[s].priority;s++);ka.splice(s,0,t),s===0&&a_(t)}};var l_=e.version;if(l_!=="19.2.4")throw Error(a(527,l_,"19.2.4"));W.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Zy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{Te=Eu.inject(Zy),we=Eu}catch{}}return Ho.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=mg,p=gg,S=vg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=Zv(t,1,!1,null,null,s,l,null,f,p,S,o_),t[ya]=i.current,id(t),new Ed(i)},Ho.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",p=mg,S=gg,A=vg,B=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(B=s.formState)),i=Zv(t,1,!0,i,s??null,l,f,B,p,S,A,o_),i.context=Qv(null),s=i.current,l=ti(),l=Fr(l),f=Ca(l),f.callback=null,wa(s,f,l),s=l,i.current.lanes=s,On(i,s),Oi(i),t[ya]=i.current,id(t),new yu(i)},Ho.version="19.2.4",Ho}var __;function oE(){if(__)return Td.exports;__=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Td.exports=sE(),Td.exports}var lE=oE();var x_="popstate";function S_(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function uE(r={}){function e(a,o){let u=o.state?.masked,{pathname:c,search:d,hash:m}=u||a.location;return gh("",{pathname:c,search:d,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default",u?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function n(a,o){return typeof o=="string"?o:Qo(o)}return fE(e,n,null,r)}function Qt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Vi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cE(){return Math.random().toString(36).substring(2,10)}function y_(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function gh(r,e,n=null,a,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Xs(e):e,state:n,key:e&&e.key||a||cE(),unstable_mask:o}}function Qo({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Xs(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function fE(r,e,n,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,c=o.history,d="POP",m=null,h=v();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function v(){return(c.state||{idx:null}).idx}function g(){d="POP";let y=v(),x=y==null?null:y-h;h=y,m&&m({action:d,location:b.location,delta:x})}function _(y,x){d="PUSH";let U=S_(y)?y:gh(b.location,y,x);h=v()+1;let L=y_(U,h),D=b.createHref(U.unstable_mask||U);try{c.pushState(L,"",D)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(D)}u&&m&&m({action:d,location:b.location,delta:1})}function E(y,x){d="REPLACE";let U=S_(y)?y:gh(b.location,y,x);h=v();let L=y_(U,h),D=b.createHref(U.unstable_mask||U);c.replaceState(L,"",D),u&&m&&m({action:d,location:b.location,delta:0})}function M(y){return dE(y)}let b={get action(){return d},get location(){return r(o,c)},listen(y){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(x_,g),m=y,()=>{o.removeEventListener(x_,g),m=null}},createHref(y){return e(o,y)},createURL:M,encodeLocation(y){let x=M(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:E,go(y){return c.go(y)}};return b}function dE(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(n,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:Qo(r);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function H0(r,e,n="/"){return hE(r,e,n,!1)}function hE(r,e,n,a){let o=typeof e=="string"?Xs(e):e,u=ga(o.pathname||"/",n);if(u==null)return null;let c=V0(r);pE(c);let d=null;for(let m=0;d==null&&m<c.length;++m){let h=TE(u);d=ME(c[m],h,a)}return d}function V0(r,e=[],n=[],a="",o=!1){let u=(c,d,m=o,h)=>{let v={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&m)return;Qt(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let g=Ii([a,v.relativePath]),_=n.concat(v);c.children&&c.children.length>0&&(Qt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),V0(c.children,e,_,g,m)),!(c.path==null&&!c.index)&&e.push({path:g,score:yE(g,c.index),routesMeta:_})};return r.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))u(c,d);else for(let m of G0(c.path))u(c,d,!0,m)}),e}function G0(r){let e=r.split("/");if(e.length===0)return[];let[n,...a]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let c=G0(a.join("/")),d=[];return d.push(...c.map(m=>m===""?u:[u,m].join("/"))),o&&d.push(...c),d.map(m=>r.startsWith("/")&&m===""?"/":m)}function pE(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:EE(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var mE=/^:[\w-]+$/,gE=3,vE=2,_E=1,xE=10,SE=-2,E_=r=>r==="*";function yE(r,e){let n=r.split("/"),a=n.length;return n.some(E_)&&(a+=SE),e&&(a+=vE),n.filter(o=>!E_(o)).reduce((o,u)=>o+(mE.test(u)?gE:u===""?_E:xE),a)}function EE(r,e){return r.length===e.length&&r.slice(0,-1).every((a,o)=>a===e[o])?r[r.length-1]-e[e.length-1]:0}function ME(r,e,n=!1){let{routesMeta:a}=r,o={},u="/",c=[];for(let d=0;d<a.length;++d){let m=a[d],h=d===a.length-1,v=u==="/"?e:e.slice(u.length)||"/",g=ic({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},v),_=m.route;if(!g&&h&&n&&!a[a.length-1].route.index&&(g=ic({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(o,g.params),c.push({params:o,pathname:Ii([u,g.pathname]),pathnameBase:wE(Ii([u,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(u=Ii([u,g.pathnameBase]))}return c}function ic(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,a]=bE(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],c=u.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:a.reduce((h,{paramName:v,isOptional:g},_)=>{if(v==="*"){let M=d[_]||"";c=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const E=d[_];return g&&!E?h[v]=void 0:h[v]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:c,pattern:r}}function bE(r,e=!1,n=!0){Vi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,m,h,v)=>{if(a.push({paramName:d,isOptional:m!=null}),m){let g=v.charAt(h+c.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function TE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ga(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=r.charAt(n);return a&&a!=="/"?null:r.slice(n)||"/"}var AE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function RE(r,e="/"){let{pathname:n,search:a="",hash:o=""}=typeof r=="string"?Xs(r):r,u;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?u=M_(n.substring(1),"/"):u=M_(n,e)):u=e,{pathname:u,search:DE(a),hash:LE(o)}}function M_(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function wd(r,e,n,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function CE(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function k0(r){let e=CE(r);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function dp(r,e,n,a=!1){let o;typeof r=="string"?o=Xs(r):(o={...r},Qt(!o.pathname||!o.pathname.includes("?"),wd("?","pathname","search",o)),Qt(!o.pathname||!o.pathname.includes("#"),wd("#","pathname","hash",o)),Qt(!o.search||!o.search.includes("#"),wd("#","search","hash",o)));let u=r===""||o.pathname==="",c=u?"/":o.pathname,d;if(c==null)d=n;else{let g=e.length-1;if(!a&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),g-=1;o.pathname=_.join("/")}d=g>=0?e[g]:"/"}let m=RE(o,d),h=c&&c!=="/"&&c.endsWith("/"),v=(u||c===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(h||v)&&(m.pathname+="/"),m}var Ii=r=>r.join("/").replace(/\/\/+/g,"/"),wE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),DE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,LE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,UE=class{constructor(r,e,n,a=!1){this.status=r,this.statusText=e||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function NE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function OE(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var X0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function W0(r,e){let n=r;if(typeof n!="string"||!AE.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,o=!1;if(X0)try{let u=new URL(window.location.href),c=n.startsWith("//")?new URL(u.protocol+n):new URL(n),d=ga(c.pathname,e);c.origin===u.origin&&d!=null?n=d+c.search+c.hash:o=!0}catch{Vi(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var q0=["POST","PUT","PATCH","DELETE"];new Set(q0);var PE=["GET",...q0];new Set(PE);var Ws=ue.createContext(null);Ws.displayName="DataRouter";var cc=ue.createContext(null);cc.displayName="DataRouterState";var zE=ue.createContext(!1),Y0=ue.createContext({isTransitioning:!1});Y0.displayName="ViewTransition";var FE=ue.createContext(new Map);FE.displayName="Fetchers";var BE=ue.createContext(null);BE.displayName="Await";var xi=ue.createContext(null);xi.displayName="Navigation";var al=ue.createContext(null);al.displayName="Location";var xa=ue.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var hp=ue.createContext(null);hp.displayName="RouteError";var j0="REACT_ROUTER_ERROR",IE="REDIRECT",HE="ROUTE_ERROR_RESPONSE";function VE(r){if(r.startsWith(`${j0}:${IE}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function GE(r){if(r.startsWith(`${j0}:${HE}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new UE(e.status,e.statusText,e.data)}catch{}}function kE(r,{relative:e}={}){Qt(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=ue.useContext(xi),{hash:o,pathname:u,search:c}=sl(r,{relative:e}),d=u;return n!=="/"&&(d=u==="/"?n:Ii([n,u])),a.createHref({pathname:d,search:c,hash:o})}function rl(){return ue.useContext(al)!=null}function Sa(){return Qt(rl(),"useLocation() may be used only in the context of a <Router> component."),ue.useContext(al).location}var K0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Z0(r){ue.useContext(xi).static||ue.useLayoutEffect(r)}function XE(){let{isDataRoute:r}=ue.useContext(xa);return r?iM():WE()}function WE(){Qt(rl(),"useNavigate() may be used only in the context of a <Router> component.");let r=ue.useContext(Ws),{basename:e,navigator:n}=ue.useContext(xi),{matches:a}=ue.useContext(xa),{pathname:o}=Sa(),u=JSON.stringify(k0(a)),c=ue.useRef(!1);return Z0(()=>{c.current=!0}),ue.useCallback((m,h={})=>{if(Vi(c.current,K0),!c.current)return;if(typeof m=="number"){n.go(m);return}let v=dp(m,JSON.parse(u),o,h.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Ii([e,v.pathname])),(h.replace?n.replace:n.push)(v,h.state,h)},[e,n,u,o,r])}ue.createContext(null);function sl(r,{relative:e}={}){let{matches:n}=ue.useContext(xa),{pathname:a}=Sa(),o=JSON.stringify(k0(n));return ue.useMemo(()=>dp(r,JSON.parse(o),a,e==="path"),[r,o,a,e])}function qE(r,e){return Q0(r,e)}function Q0(r,e,n){Qt(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=ue.useContext(xi),{matches:o}=ue.useContext(xa),u=o[o.length-1],c=u?u.params:{},d=u?u.pathname:"/",m=u?u.pathnameBase:"/",h=u&&u.route;{let y=h&&h.path||"";$0(d,!h||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let v=Sa(),g;if(e){let y=typeof e=="string"?Xs(e):e;Qt(m==="/"||y.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${y.pathname}" was given in the \`location\` prop.`),g=y}else g=v;let _=g.pathname||"/",E=_;if(m!=="/"){let y=m.replace(/^\//,"").split("/");E="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let M=H0(r,{pathname:E});Vi(h||M!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Vi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=QE(M&&M.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:Ii([m,a.encodeLocation?a.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?m:Ii([m,a.encodeLocation?a.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),o,n);return e&&b?ue.createElement(al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...g},navigationType:"POP"}},b):b}function YE(){let r=nM(),e=NE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=ue.createElement(ue.Fragment,null,ue.createElement("p",null,"💿 Hey developer 👋"),ue.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ue.createElement("code",{style:u},"ErrorBoundary")," or"," ",ue.createElement("code",{style:u},"errorElement")," prop on your route.")),ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),n?ue.createElement("pre",{style:o},n):null,c)}var jE=ue.createElement(YE,null),J0=class extends ue.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const n=GE(r.digest);n&&(r=n)}let e=r!==void 0?ue.createElement(xa.Provider,{value:this.props.routeContext},ue.createElement(hp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ue.createElement(KE,{error:r},e):e}};J0.contextType=zE;var Dd=new WeakMap;function KE({children:r,error:e}){let{basename:n}=ue.useContext(xi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=VE(e.digest);if(a){let o=Dd.get(e);if(o)throw o;let u=W0(a.location,n);if(X0&&!Dd.get(e))if(u.isExternal||a.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:a.replace}));throw Dd.set(e,c),c}return ue.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return r}function ZE({routeContext:r,match:e,children:n}){let a=ue.useContext(Ws);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),ue.createElement(xa.Provider,{value:r},n)}function QE(r,e=[],n){let a=n?.state;if(r==null){if(!a)return null;if(a.errors)r=a.matches;else if(e.length===0&&!a.initialized&&a.matches.length>0)r=a.matches;else return null}let o=r,u=a?.errors;if(u!=null){let v=o.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);Qt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,v+1))}let c=!1,d=-1;if(n&&a){c=a.renderFallback;for(let v=0;v<o.length;v++){let g=o[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=v),g.route.id){let{loaderData:_,errors:E}=a,M=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!E||E[g.route.id]===void 0);if(g.route.lazy||M){n.isStatic&&(c=!0),d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}}let m=n?.onError,h=a&&m?(v,g)=>{m(v,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:OE(a.matches),errorInfo:g})}:void 0;return o.reduceRight((v,g,_)=>{let E,M=!1,b=null,y=null;a&&(E=u&&g.route.id?u[g.route.id]:void 0,b=g.route.errorElement||jE,c&&(d<0&&_===0?($0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,y=null):d===_&&(M=!0,y=g.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,_+1)),U=()=>{let L;return E?L=b:M?L=y:g.route.Component?L=ue.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=v,ue.createElement(ZE,{match:g,routeContext:{outlet:v,matches:x,isDataRoute:a!=null},children:L})};return a&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?ue.createElement(J0,{location:a.location,revalidation:a.revalidation,component:b,error:E,children:U(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:h}):U()},null)}function pp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JE(r){let e=ue.useContext(Ws);return Qt(e,pp(r)),e}function $E(r){let e=ue.useContext(cc);return Qt(e,pp(r)),e}function eM(r){let e=ue.useContext(xa);return Qt(e,pp(r)),e}function mp(r){let e=eM(r),n=e.matches[e.matches.length-1];return Qt(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function tM(){return mp("useRouteId")}function nM(){let r=ue.useContext(hp),e=$E("useRouteError"),n=mp("useRouteError");return r!==void 0?r:e.errors?.[n]}function iM(){let{router:r}=JE("useNavigate"),e=mp("useNavigate"),n=ue.useRef(!1);return Z0(()=>{n.current=!0}),ue.useCallback(async(o,u={})=>{Vi(n.current,K0),n.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var b_={};function $0(r,e,n){!e&&!b_[r]&&(b_[r]=!0,Vi(!1,n))}ue.memo(aM);function aM({routes:r,future:e,state:n,isStatic:a,onError:o}){return Q0(r,void 0,{state:n,isStatic:a,onError:o})}function vh(r){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rM({basename:r="/",children:e=null,location:n,navigationType:a="POP",navigator:o,static:u=!1,unstable_useTransitions:c}){Qt(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),m=ue.useMemo(()=>({basename:d,navigator:o,static:u,unstable_useTransitions:c,future:{}}),[d,o,u,c]);typeof n=="string"&&(n=Xs(n));let{pathname:h="/",search:v="",hash:g="",state:_=null,key:E="default",unstable_mask:M}=n,b=ue.useMemo(()=>{let y=ga(h,d);return y==null?null:{location:{pathname:y,search:v,hash:g,state:_,key:E,unstable_mask:M},navigationType:a}},[d,h,v,g,_,E,a,M]);return Vi(b!=null,`<Router basename="${d}"> is not able to match the URL "${h}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:ue.createElement(xi.Provider,{value:m},ue.createElement(al.Provider,{children:e,value:b}))}function sM({children:r,location:e}){return qE(_h(r),e)}function _h(r,e=[]){let n=[];return ue.Children.forEach(r,(a,o)=>{if(!ue.isValidElement(a))return;let u=[...e,o];if(a.type===ue.Fragment){n.push.apply(n,_h(a.props.children,u));return}Qt(a.type===vh,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=_h(a.props.children,u)),n.push(c)}),n}var Ku="get",Zu="application/x-www-form-urlencoded";function fc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function oM(r){return fc(r)&&r.tagName.toLowerCase()==="button"}function lM(r){return fc(r)&&r.tagName.toLowerCase()==="form"}function uM(r){return fc(r)&&r.tagName.toLowerCase()==="input"}function cM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function fM(r,e){return r.button===0&&(!e||e==="_self")&&!cM(r)}var bu=null;function dM(){if(bu===null)try{new FormData(document.createElement("form"),0),bu=!1}catch{bu=!0}return bu}var hM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ld(r){return r!=null&&!hM.has(r)?(Vi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zu}"`),null):r}function pM(r,e){let n,a,o,u,c;if(lM(r)){let d=r.getAttribute("action");a=d?ga(d,e):null,n=r.getAttribute("method")||Ku,o=Ld(r.getAttribute("enctype"))||Zu,u=new FormData(r)}else if(oM(r)||uM(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||d.getAttribute("action");if(a=m?ga(m,e):null,n=r.getAttribute("formmethod")||d.getAttribute("method")||Ku,o=Ld(r.getAttribute("formenctype"))||Ld(d.getAttribute("enctype"))||Zu,u=new FormData(d,r),!dM()){let{name:h,type:v,value:g}=r;if(v==="image"){let _=h?`${h}.`:"";u.append(`${_}x`,"0"),u.append(`${_}y`,"0")}else h&&u.append(h,g)}}else{if(fc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ku,a=null,o=Zu,c=r}return u&&o==="text/plain"&&(c=u,u=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function mM(r,e,n,a){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${a}`:o.pathname=`${o.pathname}.${a}`:o.pathname==="/"?o.pathname=`_root.${a}`:e&&ga(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${a}`,o}async function gM(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function _M(r,e,n){let a=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let c=await gM(u,n);return c.links?c.links():[]}return[]}));return EM(a.flat(1).filter(vM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function T_(r,e,n,a,o,u){let c=(m,h)=>n[h]?m.route.id!==n[h].route.id:!0,d=(m,h)=>n[h].pathname!==m.pathname||n[h].route.path?.endsWith("*")&&n[h].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,h)=>c(m,h)||d(m,h)):u==="data"?e.filter((m,h)=>{let v=a.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(c(m,h)||d(m,h))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function xM(r,e,{includeHydrateFallback:n}={}){return SM(r.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function SM(r){return[...new Set(r)]}function yM(r){let e={},n=Object.keys(r).sort();for(let a of n)e[a]=r[a];return e}function EM(r,e){let n=new Set;return new Set(e),r.reduce((a,o)=>{let u=JSON.stringify(yM(o));return n.has(u)||(n.add(u),a.push({key:u,link:o})),a},[])}function ex(){let r=ue.useContext(Ws);return gp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function MM(){let r=ue.useContext(cc);return gp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var vp=ue.createContext(void 0);vp.displayName="FrameworkContext";function tx(){let r=ue.useContext(vp);return gp(r,"You must render this element inside a <HydratedRouter> element"),r}function bM(r,e){let n=ue.useContext(vp),[a,o]=ue.useState(!1),[u,c]=ue.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:h,onMouseLeave:v,onTouchStart:g}=e,_=ue.useRef(null);ue.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let b=x=>{x.forEach(U=>{c(U.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[r]),ue.useEffect(()=>{if(a){let b=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(b)}}},[a]);let E=()=>{o(!0)},M=()=>{o(!1),c(!1)};return n?r!=="intent"?[u,_,{}]:[u,_,{onFocus:Vo(d,E),onBlur:Vo(m,M),onMouseEnter:Vo(h,E),onMouseLeave:Vo(v,M),onTouchStart:Vo(g,E)}]:[!1,_,{}]}function Vo(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function TM({page:r,...e}){let{router:n}=ex(),a=ue.useMemo(()=>H0(n.routes,r,n.basename),[n.routes,r,n.basename]);return a?ue.createElement(RM,{page:r,matches:a,...e}):null}function AM(r){let{manifest:e,routeModules:n}=tx(),[a,o]=ue.useState([]);return ue.useEffect(()=>{let u=!1;return _M(r,e,n).then(c=>{u||o(c)}),()=>{u=!0}},[r,e,n]),a}function RM({page:r,matches:e,...n}){let a=Sa(),{future:o,manifest:u,routeModules:c}=tx(),{basename:d}=ex(),{loaderData:m,matches:h}=MM(),v=ue.useMemo(()=>T_(r,e,h,u,a,"data"),[r,e,h,u,a]),g=ue.useMemo(()=>T_(r,e,h,u,a,"assets"),[r,e,h,u,a]),_=ue.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let b=new Set,y=!1;if(e.forEach(U=>{let L=u.routes[U.route.id];!L||!L.hasLoader||(!v.some(D=>D.route.id===U.route.id)&&U.route.id in m&&c[U.route.id]?.shouldRevalidate||L.hasClientLoader?y=!0:b.add(U.route.id))}),b.size===0)return[];let x=mM(r,d,o.unstable_trailingSlashAwareDataRequests,"data");return y&&b.size>0&&x.searchParams.set("_routes",e.filter(U=>b.has(U.route.id)).map(U=>U.route.id).join(",")),[x.pathname+x.search]},[d,o.unstable_trailingSlashAwareDataRequests,m,a,u,v,e,r,c]),E=ue.useMemo(()=>xM(g,u),[g,u]),M=AM(g);return ue.createElement(ue.Fragment,null,_.map(b=>ue.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),E.map(b=>ue.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),M.map(({key:b,link:y})=>ue.createElement("link",{key:b,nonce:n.nonce,...y,crossOrigin:y.crossOrigin??n.crossOrigin})))}function CM(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var wM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wM&&(window.__reactRouterVersion="7.13.2")}catch{}function DM({basename:r,children:e,unstable_useTransitions:n,window:a}){let o=ue.useRef();o.current==null&&(o.current=uE({window:a,v5Compat:!0}));let u=o.current,[c,d]=ue.useState({action:u.action,location:u.location}),m=ue.useCallback(h=>{n===!1?d(h):ue.startTransition(()=>d(h))},[n]);return ue.useLayoutEffect(()=>u.listen(m),[u,m]),ue.createElement(rM,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:u,unstable_useTransitions:n})}var nx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ix=ue.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:o,reloadDocument:u,replace:c,unstable_mask:d,state:m,target:h,to:v,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:E,...M},b){let{basename:y,navigator:x,unstable_useTransitions:U}=ue.useContext(xi),L=typeof v=="string"&&nx.test(v),D=W0(v,y);v=D.to;let I=kE(v,{relative:o}),V=Sa(),F=null;if(d){let ce=dp(d,[],V.unstable_mask?V.unstable_mask.pathname:"/",!0);y!=="/"&&(ce.pathname=ce.pathname==="/"?y:Ii([y,ce.pathname])),F=x.createHref(ce)}let[X,w,C]=bM(a,M),P=OM(v,{replace:c,unstable_mask:d,state:m,target:h,preventScrollReset:g,relative:o,viewTransition:_,unstable_defaultShouldRevalidate:E,unstable_useTransitions:U});function re(ce){e&&e(ce),ce.defaultPrevented||P(ce)}let te=!(D.isExternal||u),se=ue.createElement("a",{...M,...C,href:(te?F:void 0)||D.absoluteURL||I,onClick:te?re:e,ref:CM(b,w),target:h,"data-discover":!L&&n==="render"?"true":void 0});return X&&!L?ue.createElement(ue.Fragment,null,se,ue.createElement(TM,{page:I})):se});ix.displayName="Link";var LM=ue.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:o=!1,style:u,to:c,viewTransition:d,children:m,...h},v){let g=sl(c,{relative:h.relative}),_=Sa(),E=ue.useContext(cc),{navigator:M,basename:b}=ue.useContext(xi),y=E!=null&&IM(g)&&d===!0,x=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,U=_.pathname,L=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;n||(U=U.toLowerCase(),L=L?L.toLowerCase():null,x=x.toLowerCase()),L&&b&&(L=ga(L,b)||L);const D=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let I=U===x||!o&&U.startsWith(x)&&U.charAt(D)==="/",V=L!=null&&(L===x||!o&&L.startsWith(x)&&L.charAt(x.length)==="/"),F={isActive:I,isPending:V,isTransitioning:y},X=I?e:void 0,w;typeof a=="function"?w=a(F):w=[a,I?"active":null,V?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(F):u;return ue.createElement(ix,{...h,"aria-current":X,className:w,ref:v,style:C,to:c,viewTransition:d},typeof m=="function"?m(F):m)});LM.displayName="NavLink";var UM=ue.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:o,state:u,method:c=Ku,action:d,onSubmit:m,relative:h,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_,...E},M)=>{let{unstable_useTransitions:b}=ue.useContext(xi),y=FM(),x=BM(d,{relative:h}),U=c.toLowerCase()==="get"?"get":"post",L=typeof d=="string"&&nx.test(d),D=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let V=I.nativeEvent.submitter,F=V?.getAttribute("formmethod")||c,X=()=>y(V||I.currentTarget,{fetcherKey:e,method:F,navigate:n,replace:o,state:u,relative:h,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_});b&&n!==!1?ue.startTransition(()=>X()):X()};return ue.createElement("form",{ref:M,method:U,action:x,onSubmit:a?m:D,...E,"data-discover":!L&&r==="render"?"true":void 0})});UM.displayName="Form";function NM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ax(r){let e=ue.useContext(Ws);return Qt(e,NM(r)),e}function OM(r,{target:e,replace:n,unstable_mask:a,state:o,preventScrollReset:u,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:m,unstable_useTransitions:h}={}){let v=XE(),g=Sa(),_=sl(r,{relative:c});return ue.useCallback(E=>{if(fM(E,e)){E.preventDefault();let M=n!==void 0?n:Qo(g)===Qo(_),b=()=>v(r,{replace:M,unstable_mask:a,state:o,preventScrollReset:u,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:m});h?ue.startTransition(()=>b()):b()}},[g,v,_,n,a,o,e,r,u,c,d,m,h])}var PM=0,zM=()=>`__${String(++PM)}__`;function FM(){let{router:r}=ax("useSubmit"),{basename:e}=ue.useContext(xi),n=tM(),a=r.fetch,o=r.navigate;return ue.useCallback(async(u,c={})=>{let{action:d,method:m,encType:h,formData:v,body:g}=pM(u,e);if(c.navigate===!1){let _=c.fetcherKey||zM();await a(_,n,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:g,formMethod:c.method||m,formEncType:c.encType||h,flushSync:c.flushSync})}else await o(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:g,formMethod:c.method||m,formEncType:c.encType||h,replace:c.replace,state:c.state,fromRouteId:n,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,o,e,n])}function BM(r,{relative:e}={}){let{basename:n}=ue.useContext(xi),a=ue.useContext(xa);Qt(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...sl(r||".",{relative:e})},c=Sa();if(r==null){u.search=c.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(v=>v==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let v=d.toString();u.search=v?`?${v}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Ii([n,u.pathname])),Qo(u)}function IM(r,{relative:e}={}){let n=ue.useContext(Y0);Qt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=ax("useViewTransitionState"),o=sl(r,{relative:e});if(!n.isTransitioning)return!1;let u=ga(n.currentLocation.pathname,a)||n.currentLocation.pathname,c=ga(n.nextLocation.pathname,a)||n.nextLocation.pathname;return ic(o.pathname,c)!=null||ic(o.pathname,u)!=null}const _p="179",HM=0,A_=1,VM=2,rx=1,GM=2,da=3,er=0,Yn=1,ha=2,Ja=0,Os=1,R_=2,C_=3,w_=4,kM=5,wr=100,XM=101,WM=102,qM=103,YM=104,jM=200,KM=201,ZM=202,QM=203,xh=204,Sh=205,JM=206,$M=207,eb=208,tb=209,nb=210,ib=211,ab=212,rb=213,sb=214,yh=0,Eh=1,Mh=2,Bs=3,bh=4,Th=5,Ah=6,Rh=7,sx=0,ob=1,lb=2,$a=0,ub=1,cb=2,fb=3,db=4,hb=5,pb=6,mb=7,ox=300,Is=301,Hs=302,Ch=303,wh=304,dc=306,Dh=1e3,Bn=1001,Lh=1002,ri=1003,gb=1004,Tu=1005,qn=1006,Ud=1007,Ci=1008,va=1009,lx=1010,ux=1011,Jo=1012,xp=1013,Ur=1014,pa=1015,ol=1016,Sp=1017,yp=1018,$o=1020,cx=35902,fx=1021,dx=1022,ai=1023,el=1026,tl=1027,hx=1028,Ep=1029,px=1030,Mp=1031,bp=1033,Qu=33776,Ju=33777,$u=33778,ec=33779,Uh=35840,Nh=35841,Oh=35842,Ph=35843,zh=36196,Fh=37492,Bh=37496,Ih=37808,Hh=37809,Vh=37810,Gh=37811,kh=37812,Xh=37813,Wh=37814,qh=37815,Yh=37816,jh=37817,Kh=37818,Zh=37819,Qh=37820,Jh=37821,tc=36492,$h=36494,ep=36495,mx=36283,tp=36284,np=36285,ip=36286,vb=3200,_b=3201,xb=0,Sb=1,Qa="",Nn="srgb",Vs="srgb-linear",ac="linear",Ht="srgb",_s=7680,D_=519,yb=512,Eb=513,Mb=514,gx=515,bb=516,Tb=517,Ab=518,Rb=519,L_=35044,ap="300 es",zi=2e3,rc=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=Math.PI/180,rp=180/Math.PI;function ll(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]).toLowerCase()}function Mt(r,e,n){return Math.max(e,Math.min(n,r))}function Cb(r,e){return(r%e+e)%e}function Od(r,e,n){return(1-n)*r+n*e}function Go(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class zt{constructor(e=0,n=0){zt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Mt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*a-c*o+e.x,this.y=u*o+c*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,u,c,d){let m=a[o+0],h=a[o+1],v=a[o+2],g=a[o+3];const _=u[c+0],E=u[c+1],M=u[c+2],b=u[c+3];if(d===0){e[n+0]=m,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(d===1){e[n+0]=_,e[n+1]=E,e[n+2]=M,e[n+3]=b;return}if(g!==b||m!==_||h!==E||v!==M){let y=1-d;const x=m*_+h*E+v*M+g*b,U=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const I=Math.sqrt(L),V=Math.atan2(I,x*U);y=Math.sin(y*V)/I,d=Math.sin(d*V)/I}const D=d*U;if(m=m*y+_*D,h=h*y+E*D,v=v*y+M*D,g=g*y+b*D,y===1-d){const I=1/Math.sqrt(m*m+h*h+v*v+g*g);m*=I,h*=I,v*=I,g*=I}}e[n]=m,e[n+1]=h,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,o,u,c){const d=a[o],m=a[o+1],h=a[o+2],v=a[o+3],g=u[c],_=u[c+1],E=u[c+2],M=u[c+3];return e[n]=d*M+v*g+m*E-h*_,e[n+1]=m*M+v*_+h*g-d*E,e[n+2]=h*M+v*E+d*_-m*g,e[n+3]=v*M-d*g-m*_-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,u=e._z,c=e._order,d=Math.cos,m=Math.sin,h=d(a/2),v=d(o/2),g=d(u/2),_=m(a/2),E=m(o/2),M=m(u/2);switch(c){case"XYZ":this._x=_*v*g+h*E*M,this._y=h*E*g-_*v*M,this._z=h*v*M+_*E*g,this._w=h*v*g-_*E*M;break;case"YXZ":this._x=_*v*g+h*E*M,this._y=h*E*g-_*v*M,this._z=h*v*M-_*E*g,this._w=h*v*g+_*E*M;break;case"ZXY":this._x=_*v*g-h*E*M,this._y=h*E*g+_*v*M,this._z=h*v*M+_*E*g,this._w=h*v*g-_*E*M;break;case"ZYX":this._x=_*v*g-h*E*M,this._y=h*E*g+_*v*M,this._z=h*v*M-_*E*g,this._w=h*v*g+_*E*M;break;case"YZX":this._x=_*v*g+h*E*M,this._y=h*E*g+_*v*M,this._z=h*v*M-_*E*g,this._w=h*v*g-_*E*M;break;case"XZY":this._x=_*v*g-h*E*M,this._y=h*E*g-_*v*M,this._z=h*v*M+_*E*g,this._w=h*v*g+_*E*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],u=n[8],c=n[1],d=n[5],m=n[9],h=n[2],v=n[6],g=n[10],_=a+d+g;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-h)*E,this._z=(c-o)*E}else if(a>d&&a>g){const E=2*Math.sqrt(1+a-d-g);this._w=(v-m)/E,this._x=.25*E,this._y=(o+c)/E,this._z=(u+h)/E}else if(d>g){const E=2*Math.sqrt(1+d-a-g);this._w=(u-h)/E,this._x=(o+c)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+g-a-d);this._w=(c-o)/E,this._x=(u+h)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,u=e._z,c=e._w,d=n._x,m=n._y,h=n._z,v=n._w;return this._x=a*v+c*d+o*h-u*m,this._y=o*v+c*m+u*d-a*h,this._z=u*v+c*h+a*m-o*d,this._w=c*v-a*d-o*m-u*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,o=this._y,u=this._z,c=this._w;let d=c*e._w+a*e._x+o*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=a,this._y=o,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const E=1-n;return this._w=E*c+n*this._w,this._x=E*a+n*this._x,this._y=E*o+n*this._y,this._z=E*u+n*this._z,this.normalize(),this}const h=Math.sqrt(m),v=Math.atan2(h,d),g=Math.sin((1-n)*v)/h,_=Math.sin(n*v)/h;return this._w=c*g+this._w*_,this._x=a*g+this._x*_,this._y=o*g+this._y*_,this._z=u*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,n=0,a=0){le.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(U_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(U_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*a+u[6]*o,this.y=u[1]*n+u[4]*a+u[7]*o,this.z=u[2]*n+u[5]*a+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*a+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*a+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,u=e.x,c=e.y,d=e.z,m=e.w,h=2*(c*o-d*a),v=2*(d*n-u*o),g=2*(u*a-c*n);return this.x=n+m*h+c*g-d*v,this.y=a+m*v+d*h-u*g,this.z=o+m*g+u*v-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o,this.y=u[1]*n+u[5]*a+u[9]*o,this.z=u[2]*n+u[6]*a+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,u=e.z,c=n.x,d=n.y,m=n.z;return this.x=o*m-u*d,this.y=u*c-a*m,this.z=a*d-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Mt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pd=new le,U_=new ul;class ft{constructor(e,n,a,o,u,c,d,m,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,u,c,d,m,h)}set(e,n,a,o,u,c,d,m,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=u,v[5]=m,v[6]=a,v[7]=c,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,u=this.elements,c=a[0],d=a[3],m=a[6],h=a[1],v=a[4],g=a[7],_=a[2],E=a[5],M=a[8],b=o[0],y=o[3],x=o[6],U=o[1],L=o[4],D=o[7],I=o[2],V=o[5],F=o[8];return u[0]=c*b+d*U+m*I,u[3]=c*y+d*L+m*V,u[6]=c*x+d*D+m*F,u[1]=h*b+v*U+g*I,u[4]=h*y+v*L+g*V,u[7]=h*x+v*D+g*F,u[2]=_*b+E*U+M*I,u[5]=_*y+E*L+M*V,u[8]=_*x+E*D+M*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],h=e[7],v=e[8];return n*c*v-n*d*h-a*u*v+a*d*m+o*u*h-o*c*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],h=e[7],v=e[8],g=v*c-d*h,_=d*m-v*u,E=h*u-c*m,M=n*g+a*_+o*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=g*b,e[1]=(o*h-v*a)*b,e[2]=(d*a-o*c)*b,e[3]=_*b,e[4]=(v*n-o*m)*b,e[5]=(o*u-d*n)*b,e[6]=E*b,e[7]=(a*m-h*n)*b,e[8]=(c*n-a*u)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,u,c,d){const m=Math.cos(u),h=Math.sin(u);return this.set(a*m,a*h,-a*(m*c+h*d)+c+e,-o*h,o*m,-o*(-h*c+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(zd.makeScale(e,n)),this}rotate(e){return this.premultiply(zd.makeRotation(-e)),this}translate(e,n){return this.premultiply(zd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zd=new ft;function vx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wb(){const r=nl("canvas");return r.style.display="block",r}const N_={};function Ps(r){r in N_||(N_[r]=!0,console.warn(r))}function Db(r,e,n){return new Promise(function(a,o){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}const O_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){const r={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ht&&(o.r=ma(o.r),o.g=ma(o.g),o.b=ma(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ht&&(o.r=zs(o.r),o.g=zs(o.g),o.b=zs(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qa?ac:this.spaces[o].transfer},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return Ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return Ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Vs]:{primaries:e,whitePoint:a,transfer:ac,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:a,transfer:Ht,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),r}const wt=Lb();function ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xs;class Ub{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{xs===void 0&&(xs=nl("canvas")),xs.width=e.width,xs.height=e.height;const o=xs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=xs}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=ma(u[c]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ma(n[a]/255)*255):n[a]=ma(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nb=0;class Tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?u.push(Fd(o[c].image)):u.push(Fd(o[c]))}else u=Fd(o);a.url=u}return n||(e.images[this.uuid]=a),a}}function Fd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ub.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ob=0;const Bd=new le;class Cn extends qs{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,a=Bn,o=Bn,u=qn,c=Ci,d=ai,m=va,h=Cn.DEFAULT_ANISOTROPY,v=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=ll(),this.name="",this.source=new Tp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=ox;Cn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,a=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*a+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*a+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*a+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,u;const m=e.elements,h=m[0],v=m[4],g=m[8],_=m[1],E=m[5],M=m[9],b=m[2],y=m[6],x=m[10];if(Math.abs(v-_)<.01&&Math.abs(g-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+b)<.1&&Math.abs(M+y)<.1&&Math.abs(h+E+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(h+1)/2,D=(E+1)/2,I=(x+1)/2,V=(v+_)/4,F=(g+b)/4,X=(M+y)/4;return L>D&&L>I?L<.01?(a=0,o=.707106781,u=.707106781):(a=Math.sqrt(L),o=V/a,u=F/a):D>I?D<.01?(a=.707106781,o=0,u=.707106781):(o=Math.sqrt(D),a=V/o,u=X/o):I<.01?(a=.707106781,o=.707106781,u=0):(u=Math.sqrt(I),a=F/u,o=X/u),this.set(a,o,u,n),this}let U=Math.sqrt((y-M)*(y-M)+(g-b)*(g-b)+(_-v)*(_-v));return Math.abs(U)<.001&&(U=1),this.x=(y-M)/U,this.y=(g-b)/U,this.z=(_-v)/U,this.w=Math.acos((h+E+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pb extends qs{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const o={width:e,height:n,depth:a.depth},u=new Cn(o);this.textures=[];const c=a.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Tp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends Pb{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class _x extends Cn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=ri,this.minFilter=ri,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zb extends Cn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=ri,this.minFilter=ri,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Mi):Mi.fromBufferAttribute(u,c),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Au.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Au.copy(a.boundingBox)),Au.applyMatrix4(e.matrixWorld),this.union(Au)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Ru.subVectors(this.max,ko),Ss.subVectors(e.a,ko),ys.subVectors(e.b,ko),Es.subVectors(e.c,ko),Wa.subVectors(ys,Ss),qa.subVectors(Es,ys),Sr.subVectors(Ss,Es);let n=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-Sr.z,Sr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,Sr.z,0,-Sr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-Sr.y,Sr.x,0];return!Id(n,Ss,ys,Es,Ru)||(n=[1,0,0,0,1,0,0,0,1],!Id(n,Ss,ys,Es,Ru))?!1:(Cu.crossVectors(Wa,qa),n=[Cu.x,Cu.y,Cu.z],Id(n,Ss,ys,Es,Ru))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oa=[new le,new le,new le,new le,new le,new le,new le,new le],Mi=new le,Au=new cl,Ss=new le,ys=new le,Es=new le,Wa=new le,qa=new le,Sr=new le,ko=new le,Ru=new le,Cu=new le,yr=new le;function Id(r,e,n,a,o){for(let u=0,c=r.length-3;u<=c;u+=3){yr.fromArray(r,u);const d=o.x*Math.abs(yr.x)+o.y*Math.abs(yr.y)+o.z*Math.abs(yr.z),m=e.dot(yr),h=n.dot(yr),v=a.dot(yr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>d)return!1}return!0}const Fb=new cl,Xo=new le,Hd=new le;class Ap{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):Fb.setFromPoints(e).getCenter(a);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,a.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const n=Xo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Xo,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Hd)),this.expandByPoint(Xo.copy(e.center).sub(Hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const la=new le,Vd=new le,wu=new le,Ya=new le,Gd=new le,Du=new le,kd=new le;class Bb{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,la)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=la.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Vd.copy(e).add(n).multiplyScalar(.5),wu.copy(n).sub(e).normalize(),Ya.copy(this.origin).sub(Vd);const u=e.distanceTo(n)*.5,c=-this.direction.dot(wu),d=Ya.dot(this.direction),m=-Ya.dot(wu),h=Ya.lengthSq(),v=Math.abs(1-c*c);let g,_,E,M;if(v>0)if(g=c*m-d,_=c*d-m,M=u*v,g>=0)if(_>=-M)if(_<=M){const b=1/v;g*=b,_*=b,E=g*(g+c*_+2*d)+_*(c*g+_+2*m)+h}else _=u,g=Math.max(0,-(c*_+d)),E=-g*g+_*(_+2*m)+h;else _=-u,g=Math.max(0,-(c*_+d)),E=-g*g+_*(_+2*m)+h;else _<=-M?(g=Math.max(0,-(-c*u+d)),_=g>0?-u:Math.min(Math.max(-u,-m),u),E=-g*g+_*(_+2*m)+h):_<=M?(g=0,_=Math.min(Math.max(-u,-m),u),E=_*(_+2*m)+h):(g=Math.max(0,-(c*u+d)),_=g>0?u:Math.min(Math.max(-u,-m),u),E=-g*g+_*(_+2*m)+h);else _=c>0?-u:u,g=Math.max(0,-(c*_+d)),E=-g*g+_*(_+2*m)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Vd).addScaledVector(wu,_),E}intersectSphere(e,n){la.subVectors(e.center,this.origin);const a=la.dot(this.direction),o=la.dot(la)-a*a,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),d=a-c,m=a+c;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,u,c,d,m;const h=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(a=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(a=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),v>=0?(u=(e.min.y-_.y)*v,c=(e.max.y-_.y)*v):(u=(e.max.y-_.y)*v,c=(e.min.y-_.y)*v),a>c||u>o||((u>a||isNaN(a))&&(a=u),(c<o||isNaN(o))&&(o=c),g>=0?(d=(e.min.z-_.z)*g,m=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,m=(e.min.z-_.z)*g),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,la)!==null}intersectTriangle(e,n,a,o,u){Gd.subVectors(n,e),Du.subVectors(a,e),kd.crossVectors(Gd,Du);let c=this.direction.dot(kd),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Ya.subVectors(this.origin,e);const m=d*this.direction.dot(Du.crossVectors(Ya,Du));if(m<0)return null;const h=d*this.direction.dot(Gd.cross(Ya));if(h<0||m+h>c)return null;const v=-d*Ya.dot(kd);return v<0?null:this.at(v/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gn{constructor(e,n,a,o,u,c,d,m,h,v,g,_,E,M,b,y){gn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,u,c,d,m,h,v,g,_,E,M,b,y)}set(e,n,a,o,u,c,d,m,h,v,g,_,E,M,b,y){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=o,x[1]=u,x[5]=c,x[9]=d,x[13]=m,x[2]=h,x[6]=v,x[10]=g,x[14]=_,x[3]=E,x[7]=M,x[11]=b,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/Ms.setFromMatrixColumn(e,0).length(),u=1/Ms.setFromMatrixColumn(e,1).length(),c=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,u=e.z,c=Math.cos(a),d=Math.sin(a),m=Math.cos(o),h=Math.sin(o),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const _=c*v,E=c*g,M=d*v,b=d*g;n[0]=m*v,n[4]=-m*g,n[8]=h,n[1]=E+M*h,n[5]=_-b*h,n[9]=-d*m,n[2]=b-_*h,n[6]=M+E*h,n[10]=c*m}else if(e.order==="YXZ"){const _=m*v,E=m*g,M=h*v,b=h*g;n[0]=_+b*d,n[4]=M*d-E,n[8]=c*h,n[1]=c*g,n[5]=c*v,n[9]=-d,n[2]=E*d-M,n[6]=b+_*d,n[10]=c*m}else if(e.order==="ZXY"){const _=m*v,E=m*g,M=h*v,b=h*g;n[0]=_-b*d,n[4]=-c*g,n[8]=M+E*d,n[1]=E+M*d,n[5]=c*v,n[9]=b-_*d,n[2]=-c*h,n[6]=d,n[10]=c*m}else if(e.order==="ZYX"){const _=c*v,E=c*g,M=d*v,b=d*g;n[0]=m*v,n[4]=M*h-E,n[8]=_*h+b,n[1]=m*g,n[5]=b*h+_,n[9]=E*h-M,n[2]=-h,n[6]=d*m,n[10]=c*m}else if(e.order==="YZX"){const _=c*m,E=c*h,M=d*m,b=d*h;n[0]=m*v,n[4]=b-_*g,n[8]=M*g+E,n[1]=g,n[5]=c*v,n[9]=-d*v,n[2]=-h*v,n[6]=E*g+M,n[10]=_-b*g}else if(e.order==="XZY"){const _=c*m,E=c*h,M=d*m,b=d*h;n[0]=m*v,n[4]=-g,n[8]=h*v,n[1]=_*g+b,n[5]=c*v,n[9]=E*g-M,n[2]=M*g-E,n[6]=d*v,n[10]=b*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ib,e,Hb)}lookAt(e,n,a){const o=this.elements;return ni.subVectors(e,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ja.crossVectors(a,ni),ja.lengthSq()===0&&(Math.abs(a.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ja.crossVectors(a,ni)),ja.normalize(),Lu.crossVectors(ni,ja),o[0]=ja.x,o[4]=Lu.x,o[8]=ni.x,o[1]=ja.y,o[5]=Lu.y,o[9]=ni.y,o[2]=ja.z,o[6]=Lu.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,u=this.elements,c=a[0],d=a[4],m=a[8],h=a[12],v=a[1],g=a[5],_=a[9],E=a[13],M=a[2],b=a[6],y=a[10],x=a[14],U=a[3],L=a[7],D=a[11],I=a[15],V=o[0],F=o[4],X=o[8],w=o[12],C=o[1],P=o[5],re=o[9],te=o[13],se=o[2],ce=o[6],z=o[10],W=o[14],Y=o[3],Se=o[7],be=o[11],N=o[15];return u[0]=c*V+d*C+m*se+h*Y,u[4]=c*F+d*P+m*ce+h*Se,u[8]=c*X+d*re+m*z+h*be,u[12]=c*w+d*te+m*W+h*N,u[1]=v*V+g*C+_*se+E*Y,u[5]=v*F+g*P+_*ce+E*Se,u[9]=v*X+g*re+_*z+E*be,u[13]=v*w+g*te+_*W+E*N,u[2]=M*V+b*C+y*se+x*Y,u[6]=M*F+b*P+y*ce+x*Se,u[10]=M*X+b*re+y*z+x*be,u[14]=M*w+b*te+y*W+x*N,u[3]=U*V+L*C+D*se+I*Y,u[7]=U*F+L*P+D*ce+I*Se,u[11]=U*X+L*re+D*z+I*be,u[15]=U*w+L*te+D*W+I*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],u=e[12],c=e[1],d=e[5],m=e[9],h=e[13],v=e[2],g=e[6],_=e[10],E=e[14],M=e[3],b=e[7],y=e[11],x=e[15];return M*(+u*m*g-o*h*g-u*d*_+a*h*_+o*d*E-a*m*E)+b*(+n*m*E-n*h*_+u*c*_-o*c*E+o*h*v-u*m*v)+y*(+n*h*g-n*d*E-u*c*g+a*c*E+u*d*v-a*h*v)+x*(-o*d*v-n*m*g+n*d*_+o*c*g-a*c*_+a*m*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],h=e[7],v=e[8],g=e[9],_=e[10],E=e[11],M=e[12],b=e[13],y=e[14],x=e[15],U=g*y*h-b*_*h+b*m*E-d*y*E-g*m*x+d*_*x,L=M*_*h-v*y*h-M*m*E+c*y*E+v*m*x-c*_*x,D=v*b*h-M*g*h+M*d*E-c*b*E-v*d*x+c*g*x,I=M*g*m-v*b*m-M*d*_+c*b*_+v*d*y-c*g*y,V=n*U+a*L+o*D+u*I;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/V;return e[0]=U*F,e[1]=(b*_*u-g*y*u-b*o*E+a*y*E+g*o*x-a*_*x)*F,e[2]=(d*y*u-b*m*u+b*o*h-a*y*h-d*o*x+a*m*x)*F,e[3]=(g*m*u-d*_*u-g*o*h+a*_*h+d*o*E-a*m*E)*F,e[4]=L*F,e[5]=(v*y*u-M*_*u+M*o*E-n*y*E-v*o*x+n*_*x)*F,e[6]=(M*m*u-c*y*u-M*o*h+n*y*h+c*o*x-n*m*x)*F,e[7]=(c*_*u-v*m*u+v*o*h-n*_*h-c*o*E+n*m*E)*F,e[8]=D*F,e[9]=(M*g*u-v*b*u-M*a*E+n*b*E+v*a*x-n*g*x)*F,e[10]=(c*b*u-M*d*u+M*a*h-n*b*h-c*a*x+n*d*x)*F,e[11]=(v*d*u-c*g*u-v*a*h+n*g*h+c*a*E-n*d*E)*F,e[12]=I*F,e[13]=(v*b*o-M*g*o+M*a*_-n*b*_-v*a*y+n*g*y)*F,e[14]=(M*d*o-c*b*o-M*a*m+n*b*m+c*a*y-n*d*y)*F,e[15]=(c*g*o-v*d*o+v*a*m-n*g*m-c*a*_+n*d*_)*F,this}scale(e){const n=this.elements,a=e.x,o=e.y,u=e.z;return n[0]*=a,n[4]*=o,n[8]*=u,n[1]*=a,n[5]*=o,n[9]*=u,n[2]*=a,n[6]*=o,n[10]*=u,n[3]*=a,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),u=1-a,c=e.x,d=e.y,m=e.z,h=u*c,v=u*d;return this.set(h*c+a,h*d-o*m,h*m+o*d,0,h*d+o*m,v*d+a,v*m-o*c,0,h*m-o*d,v*m+o*c,u*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,u,c){return this.set(1,a,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,u=n._x,c=n._y,d=n._z,m=n._w,h=u+u,v=c+c,g=d+d,_=u*h,E=u*v,M=u*g,b=c*v,y=c*g,x=d*g,U=m*h,L=m*v,D=m*g,I=a.x,V=a.y,F=a.z;return o[0]=(1-(b+x))*I,o[1]=(E+D)*I,o[2]=(M-L)*I,o[3]=0,o[4]=(E-D)*V,o[5]=(1-(_+x))*V,o[6]=(y+U)*V,o[7]=0,o[8]=(M+L)*F,o[9]=(y-U)*F,o[10]=(1-(_+b))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let u=Ms.set(o[0],o[1],o[2]).length();const c=Ms.set(o[4],o[5],o[6]).length(),d=Ms.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),e.x=o[12],e.y=o[13],e.z=o[14],bi.copy(this);const h=1/u,v=1/c,g=1/d;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,n.setFromRotationMatrix(bi),a.x=u,a.y=c,a.z=d,this}makePerspective(e,n,a,o,u,c,d=zi,m=!1){const h=this.elements,v=2*u/(n-e),g=2*u/(a-o),_=(n+e)/(n-e),E=(a+o)/(a-o);let M,b;if(m)M=u/(c-u),b=c*u/(c-u);else if(d===zi)M=-(c+u)/(c-u),b=-2*c*u/(c-u);else if(d===rc)M=-c/(c-u),b=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,a,o,u,c,d=zi,m=!1){const h=this.elements,v=2/(n-e),g=2/(a-o),_=-(n+e)/(n-e),E=-(a+o)/(a-o);let M,b;if(m)M=1/(c-u),b=c/(c-u);else if(d===zi)M=-2/(c-u),b=-(c+u)/(c-u);else if(d===rc)M=-1/(c-u),b=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=g,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Ms=new le,bi=new gn,Ib=new le(0,0,0),Hb=new le(1,1,1),ja=new le,Lu=new le,ni=new le,z_=new gn,F_=new ul;class _a{constructor(e=0,n=0,a=0,o=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,u=o[0],c=o[4],d=o[8],m=o[1],h=o[5],v=o[9],g=o[2],_=o[6],E=o[10];switch(n){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return z_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return F_.setFromEuler(this),this.setFromQuaternion(F_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class xx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vb=0;const B_=new le,bs=new ul,ua=new gn,Uu=new le,Wo=new le,Gb=new le,kb=new ul,I_=new le(1,0,0),H_=new le(0,1,0),V_=new le(0,0,1),G_={type:"added"},Xb={type:"removed"},Ts={type:"childadded",child:null},Xd={type:"childremoved",child:null};class si extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const e=new le,n=new _a,a=new ul,o=new le(1,1,1);function u(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new gn},normalMatrix:{value:new ft}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(I_,e)}rotateY(e){return this.rotateOnAxis(H_,e)}rotateZ(e){return this.rotateOnAxis(V_,e)}translateOnAxis(e,n){return B_.copy(e).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(I_,e)}translateY(e){return this.translateOnAxis(H_,e)}translateZ(e){return this.translateOnAxis(V_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Uu.copy(e):Uu.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Wo,Uu,this.up):ua.lookAt(Uu,Wo,this.up),this.quaternion.setFromRotationMatrix(ua),o&&(ua.extractRotation(o.matrixWorld),bs.setFromRotationMatrix(ua),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G_),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Xb),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G_),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const c=this.children[a].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,kb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const g=m[h];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(u(e.materials,this.material[m]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(u(e.animations,m))}}if(n){const d=c(e.geometries),m=c(e.materials),h=c(e.textures),v=c(e.images),g=c(e.shapes),_=c(e.skeletons),E=c(e.animations),M=c(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),h.length>0&&(a.textures=h),v.length>0&&(a.images=v),g.length>0&&(a.shapes=g),_.length>0&&(a.skeletons=_),E.length>0&&(a.animations=E),M.length>0&&(a.nodes=M)}return a.object=o,a;function c(d){const m=[];for(const h in d){const v=d[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}si.DEFAULT_UP=new le(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new le,ca=new le,Wd=new le,fa=new le,As=new le,Rs=new le,k_=new le,qd=new le,Yd=new le,jd=new le,Kd=new rn,Zd=new rn,Qd=new rn;class Ri{constructor(e=new le,n=new le,a=new le){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Ti.subVectors(e,n),o.cross(Ti);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,a,o,u){Ti.subVectors(o,n),ca.subVectors(a,n),Wd.subVectors(e,n);const c=Ti.dot(Ti),d=Ti.dot(ca),m=Ti.dot(Wd),h=ca.dot(ca),v=ca.dot(Wd),g=c*h-d*d;if(g===0)return u.set(0,0,0),null;const _=1/g,E=(h*m-d*v)*_,M=(c*v-d*m)*_;return u.set(1-E-M,M,E)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,n,a,o,u,c,d,m){return this.getBarycoord(e,n,a,o,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,fa.x),m.addScaledVector(c,fa.y),m.addScaledVector(d,fa.z),m)}static getInterpolatedAttribute(e,n,a,o,u,c){return Kd.setScalar(0),Zd.setScalar(0),Qd.setScalar(0),Kd.fromBufferAttribute(e,n),Zd.fromBufferAttribute(e,a),Qd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Kd,u.x),c.addScaledVector(Zd,u.y),c.addScaledVector(Qd,u.z),c}static isFrontFacing(e,n,a,o){return Ti.subVectors(a,n),ca.subVectors(e,n),Ti.cross(ca).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ti.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,u){return Ri.getInterpolation(e,this.a,this.b,this.c,n,a,o,u)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,u=this.c;let c,d;As.subVectors(o,a),Rs.subVectors(u,a),qd.subVectors(e,a);const m=As.dot(qd),h=Rs.dot(qd);if(m<=0&&h<=0)return n.copy(a);Yd.subVectors(e,o);const v=As.dot(Yd),g=Rs.dot(Yd);if(v>=0&&g<=v)return n.copy(o);const _=m*g-v*h;if(_<=0&&m>=0&&v<=0)return c=m/(m-v),n.copy(a).addScaledVector(As,c);jd.subVectors(e,u);const E=As.dot(jd),M=Rs.dot(jd);if(M>=0&&E<=M)return n.copy(u);const b=E*h-m*M;if(b<=0&&h>=0&&M<=0)return d=h/(h-M),n.copy(a).addScaledVector(Rs,d);const y=v*M-E*g;if(y<=0&&g-v>=0&&E-M>=0)return k_.subVectors(u,o),d=(g-v)/(g-v+(E-M)),n.copy(o).addScaledVector(k_,d);const x=1/(y+b+_);return c=b*x,d=_*x,n.copy(a).addScaledVector(As,c).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Nu={h:0,s:0,l:0};function Jd(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Vt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=wt.workingColorSpace){return this.r=e,this.g=n,this.b=a,wt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=wt.workingColorSpace){if(e=Cb(e,1),n=Mt(n,0,1),a=Mt(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,c=2*a-u;this.r=Jd(c,u,e+1/3),this.g=Jd(c,u,e),this.b=Jd(c,u,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,n=Nn){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const a=Sx[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return wt.workingToColorSpace(Un.copy(this),e),Math.round(Mt(Un.r*255,0,255))*65536+Math.round(Mt(Un.g*255,0,255))*256+Math.round(Mt(Un.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(Un.copy(this),n);const a=Un.r,o=Un.g,u=Un.b,c=Math.max(a,o,u),d=Math.min(a,o,u);let m,h;const v=(d+c)/2;if(d===c)m=0,h=0;else{const g=c-d;switch(h=v<=.5?g/(c+d):g/(2-c-d),c){case a:m=(o-u)/g+(o<u?6:0);break;case o:m=(u-a)/g+2;break;case u:m=(a-o)/g+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(Un.copy(this),n),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Nn){wt.workingToColorSpace(Un.copy(this),e);const n=Un.r,a=Un.g,o=Un.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+n,Ka.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Ka),e.getHSL(Nu);const a=Od(Ka.h,Nu.h,n),o=Od(Ka.s,Nu.s,n),u=Od(Ka.l,Nu.l,n);return this.setHSL(a,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*a+u[6]*o,this.g=u[1]*n+u[4]*a+u[7]*o,this.b=u[2]*n+u[5]*a+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Vt;Vt.NAMES=Sx;let Wb=0;class hc extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=Os,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Sh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(a.blending=this.blending),this.side!==er&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==xh&&(a.blendSrc=this.blendSrc),this.blendDst!==Sh&&(a.blendDst=this.blendDst),this.blendEquation!==wr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(a.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(u){const c=[];for(const d in u){const m=u[d];delete m.metadata,c.push(m)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let u=0;u!==o;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yx extends hc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new le,Ou=new zt;let qb=0;class Hi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=L_,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Ou.fromBufferAttribute(this,n),Ou.applyMatrix3(e),this.setXY(n,Ou.x,Ou.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Go(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Go(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Go(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Go(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Go(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array),o=Wn(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,u){return e*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array),o=Wn(o,this.array),u=Wn(u,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==L_&&(e.usage=this.usage),e}}class Ex extends Hi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Mx extends Hi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Lr extends Hi{constructor(e,n,a){super(new Float32Array(e),n,a)}}let Yb=0;const gi=new gn,$d=new si,Cs=new le,ii=new cl,qo=new cl,yn=new le;class Pr extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vx(e)?Mx:Ex)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ft().getNormalMatrix(e);a.applyNormalMatrix(u),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,n,a){return gi.makeTranslation(e,n,a),this.applyMatrix4(gi),this}scale(e,n,a){return gi.makeScale(e,n,a),this.applyMatrix4(gi),this}lookAt(e){return $d.lookAt(e),$d.updateMatrix(),this.applyMatrix4($d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Lr(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const u=n[a];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ap);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const a=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];qo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ii.min,qo.min),ii.expandByPoint(yn),yn.addVectors(ii.max,qo.max),ii.expandByPoint(yn)):(ii.expandByPoint(qo.min),ii.expandByPoint(qo.max))}ii.getCenter(a);let o=0;for(let u=0,c=e.count;u<c;u++)yn.fromBufferAttribute(e,u),o=Math.max(o,a.distanceToSquared(yn));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],m=this.morphTargetsRelative;for(let h=0,v=d.count;h<v;h++)yn.fromBufferAttribute(d,h),m&&(Cs.fromBufferAttribute(e,h),yn.add(Cs)),o=Math.max(o,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<a.count;X++)d[X]=new le,m[X]=new le;const h=new le,v=new le,g=new le,_=new zt,E=new zt,M=new zt,b=new le,y=new le;function x(X,w,C){h.fromBufferAttribute(a,X),v.fromBufferAttribute(a,w),g.fromBufferAttribute(a,C),_.fromBufferAttribute(u,X),E.fromBufferAttribute(u,w),M.fromBufferAttribute(u,C),v.sub(h),g.sub(h),E.sub(_),M.sub(_);const P=1/(E.x*M.y-M.x*E.y);isFinite(P)&&(b.copy(v).multiplyScalar(M.y).addScaledVector(g,-E.y).multiplyScalar(P),y.copy(g).multiplyScalar(E.x).addScaledVector(v,-M.x).multiplyScalar(P),d[X].add(b),d[w].add(b),d[C].add(b),m[X].add(y),m[w].add(y),m[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let X=0,w=U.length;X<w;++X){const C=U[X],P=C.start,re=C.count;for(let te=P,se=P+re;te<se;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new le,D=new le,I=new le,V=new le;function F(X){I.fromBufferAttribute(o,X),V.copy(I);const w=d[X];L.copy(w),L.sub(I.multiplyScalar(I.dot(w))).normalize(),D.crossVectors(V,w);const P=D.dot(m[X])<0?-1:1;c.setXYZW(X,L.x,L.y,L.z,P)}for(let X=0,w=U.length;X<w;++X){const C=U[X],P=C.start,re=C.count;for(let te=P,se=P+re;te<se;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Hi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,E=a.count;_<E;_++)a.setXYZ(_,0,0,0);const o=new le,u=new le,c=new le,d=new le,m=new le,h=new le,v=new le,g=new le;if(e)for(let _=0,E=e.count;_<E;_+=3){const M=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,y),v.subVectors(c,u),g.subVectors(o,u),v.cross(g),d.fromBufferAttribute(a,M),m.fromBufferAttribute(a,b),h.fromBufferAttribute(a,y),d.add(v),m.add(v),h.add(v),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(b,m.x,m.y,m.z),a.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,E=n.count;_<E;_+=3)o.fromBufferAttribute(n,_+0),u.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),v.subVectors(c,u),g.subVectors(o,u),v.cross(g),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)yn.fromBufferAttribute(e,n),yn.normalize(),e.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,m){const h=d.array,v=d.itemSize,g=d.normalized,_=new h.constructor(m.length*v);let E=0,M=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?E=m[b]*d.data.stride+d.offset:E=m[b]*v;for(let x=0;x<v;x++)_[M++]=h[E++]}return new Hi(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pr,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,a);n.setAttribute(d,h)}const u=this.morphAttributes;for(const d in u){const m=[],h=u[d];for(let v=0,g=h.length;v<g;v++){const _=h[v],E=e(_,a);m.push(E)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,m=c.length;d<m;d++){const h=c[d];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const h=a[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let g=0,_=h.length;g<_;g++){const E=h[g];v.push(E.toJSON(e.data))}v.length>0&&(o[m]=v,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(n))}const u=e.morphAttributes;for(const h in u){const v=[],g=u[h];for(let _=0,E=g.length;_<E;_++)v.push(g[_].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,v=c.length;h<v;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const X_=new gn,Er=new Bb,Pu=new Ap,W_=new le,zu=new le,Fu=new le,Bu=new le,eh=new le,Iu=new le,q_=new le,Hu=new le;class Fi extends si{constructor(e=new Pr,n=new yx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){Iu.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const v=d[m],g=u[m];v!==0&&(eh.fromBufferAttribute(g,e),c?Iu.addScaledVector(eh,v):Iu.addScaledVector(eh.sub(n),v))}n.add(Iu)}return n}raycast(e,n){const a=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Pu.copy(a.boundingSphere),Pu.applyMatrix4(u),Er.copy(e.ray).recast(e.near),!(Pu.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Pu,W_)===null||Er.origin.distanceToSquared(W_)>(e.far-e.near)**2))&&(X_.copy(u).invert(),Er.copy(e.ray).applyMatrix4(X_),!(a.boundingBox!==null&&Er.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,a){let o;const u=this.geometry,c=this.material,d=u.index,m=u.attributes.position,h=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,_=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,b=_.length;M<b;M++){const y=_[M],x=c[y.materialIndex],U=Math.max(y.start,E.start),L=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let D=U,I=L;D<I;D+=3){const V=d.getX(D),F=d.getX(D+1),X=d.getX(D+2);o=Vu(this,x,e,a,h,v,g,V,F,X),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,E.start),b=Math.min(d.count,E.start+E.count);for(let y=M,x=b;y<x;y+=3){const U=d.getX(y),L=d.getX(y+1),D=d.getX(y+2);o=Vu(this,c,e,a,h,v,g,U,L,D),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(c))for(let M=0,b=_.length;M<b;M++){const y=_[M],x=c[y.materialIndex],U=Math.max(y.start,E.start),L=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let D=U,I=L;D<I;D+=3){const V=D,F=D+1,X=D+2;o=Vu(this,x,e,a,h,v,g,V,F,X),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,E.start),b=Math.min(m.count,E.start+E.count);for(let y=M,x=b;y<x;y+=3){const U=y,L=y+1,D=y+2;o=Vu(this,c,e,a,h,v,g,U,L,D),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function jb(r,e,n,a,o,u,c,d){let m;if(e.side===Yn?m=a.intersectTriangle(c,u,o,!0,d):m=a.intersectTriangle(o,u,c,e.side===er,d),m===null)return null;Hu.copy(d),Hu.applyMatrix4(r.matrixWorld);const h=n.ray.origin.distanceTo(Hu);return h<n.near||h>n.far?null:{distance:h,point:Hu.clone(),object:r}}function Vu(r,e,n,a,o,u,c,d,m,h){r.getVertexPosition(d,zu),r.getVertexPosition(m,Fu),r.getVertexPosition(h,Bu);const v=jb(r,e,n,a,zu,Fu,Bu,q_);if(v){const g=new le;Ri.getBarycoord(q_,zu,Fu,Bu,g),o&&(v.uv=Ri.getInterpolatedAttribute(o,d,m,h,g,new zt)),u&&(v.uv1=Ri.getInterpolatedAttribute(u,d,m,h,g,new zt)),c&&(v.normal=Ri.getInterpolatedAttribute(c,d,m,h,g,new le),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:h,normal:new le,materialIndex:0};Ri.getNormal(zu,Fu,Bu,_.normal),v.face=_,v.barycoord=g}return v}class fl extends Pr{constructor(e=1,n=1,a=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:u,depthSegments:c};const d=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const m=[],h=[],v=[],g=[];let _=0,E=0;M("z","y","x",-1,-1,a,n,e,c,u,0),M("z","y","x",1,-1,a,n,-e,c,u,1),M("x","z","y",1,1,e,a,n,o,c,2),M("x","z","y",1,-1,e,a,-n,o,c,3),M("x","y","z",1,-1,e,n,a,o,u,4),M("x","y","z",-1,-1,e,n,-a,o,u,5),this.setIndex(m),this.setAttribute("position",new Lr(h,3)),this.setAttribute("normal",new Lr(v,3)),this.setAttribute("uv",new Lr(g,2));function M(b,y,x,U,L,D,I,V,F,X,w){const C=D/F,P=I/X,re=D/2,te=I/2,se=V/2,ce=F+1,z=X+1;let W=0,Y=0;const Se=new le;for(let be=0;be<z;be++){const N=be*P-te;for(let Q=0;Q<ce;Q++){const ye=Q*C-re;Se[b]=ye*U,Se[y]=N*L,Se[x]=se,h.push(Se.x,Se.y,Se.z),Se[b]=0,Se[y]=0,Se[x]=V>0?1:-1,v.push(Se.x,Se.y,Se.z),g.push(Q/F),g.push(1-be/X),W+=1}}for(let be=0;be<X;be++)for(let N=0;N<F;N++){const Q=_+N+ce*be,ye=_+N+ce*(be+1),Ae=_+(N+1)+ce*(be+1),Z=_+(N+1)+ce*be;m.push(Q,ye,Z),m.push(ye,Ae,Z),Y+=6}d.addGroup(E,Y,w),E+=Y,_+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function Fn(r){const e={};for(let n=0;n<r.length;n++){const a=Gs(r[n]);for(const o in a)e[o]=a[o]}return e}function Kb(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function bx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Zb={clone:Gs,merge:Fn};var Qb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends hc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qb,this.fragmentShader=Jb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Tx extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new le,Y_=new zt,j_=new zt;class Ai extends Tx{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(Nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Za.x,Za.y).multiplyScalar(-e/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Za.x,Za.y).multiplyScalar(-e/Za.z)}getViewSize(e,n){return this.getViewBounds(e,Y_,j_),n.subVectors(j_,Y_)}setViewOffset(e,n,a,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nd*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,h=c.fullHeight;u+=c.offsetX*o/m,n-=c.offsetY*a/h,o*=c.width/m,a*=c.height/h}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ws=-90,Ds=1;class $b extends si{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ai(ws,Ds,e,n);o.layers=this.layers,this.add(o);const u=new Ai(ws,Ds,e,n);u.layers=this.layers,this.add(u);const c=new Ai(ws,Ds,e,n);c.layers=this.layers,this.add(c);const d=new Ai(ws,Ds,e,n);d.layers=this.layers,this.add(d);const m=new Ai(ws,Ds,e,n);m.layers=this.layers,this.add(m);const h=new Ai(ws,Ds,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,u,c,d,m]=n;for(const h of n)this.remove(h);if(e===zi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===rc)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,m,h,v]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,u),e.setRenderTarget(a,1,o),e.render(n,c),e.setRenderTarget(a,2,o),e.render(n,d),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,h),a.texture.generateMipmaps=b,e.setRenderTarget(a,5,o),e.render(n,v),e.setRenderTarget(g,_,E),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Ax extends Cn{constructor(e=[],n=Is,a,o,u,c,d,m,h,v){super(e,n,a,o,u,c,d,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eT extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new Ax(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new fl(5,5,5),u=new Gi({name:"CubemapFromEquirect",uniforms:Gs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Yn,blending:Ja});u.uniforms.tEquirect.value=n;const c=new Fi(o,u),d=n.minFilter;return n.minFilter===Ci&&(n.minFilter=qn),new $b(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,a,o);e.setRenderTarget(u)}}class Gu extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tT={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,u=null,c=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const b of e.hand.values()){const y=n.getJointPose(b,a),x=this._getHandJoint(h,b);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=v.position.distanceTo(g.position),E=.02,M=.005;h.inputState.pinching&&_>E+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=E-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,a),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tT)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Gu;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class nT extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class K_ extends Cn{constructor(e=null,n=1,a=1,o,u,c,d,m,h=ri,v=ri,g,_){super(null,c,d,m,h,v,o,u,g,_),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new le,iT=new le,aT=new ft;class Rr{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=nh.subVectors(a,n).cross(iT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(nh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||aT.getNormalMatrix(e),o=this.coplanarPoint(nh).applyMatrix4(e),u=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Ap,rT=new zt(.5,.5),ku=new le;class Rx{constructor(e=new Rr,n=new Rr,a=new Rr,o=new Rr,u=new Rr,c=new Rr){this.planes=[e,n,a,o,u,c]}set(e,n,a,o,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=zi,a=!1){const o=this.planes,u=e.elements,c=u[0],d=u[1],m=u[2],h=u[3],v=u[4],g=u[5],_=u[6],E=u[7],M=u[8],b=u[9],y=u[10],x=u[11],U=u[12],L=u[13],D=u[14],I=u[15];if(o[0].setComponents(h-c,E-v,x-M,I-U).normalize(),o[1].setComponents(h+c,E+v,x+M,I+U).normalize(),o[2].setComponents(h+d,E+g,x+b,I+L).normalize(),o[3].setComponents(h-d,E-g,x-b,I-L).normalize(),a)o[4].setComponents(m,_,y,D).normalize(),o[5].setComponents(h-m,E-_,x-y,I-D).normalize();else if(o[4].setComponents(h-m,E-_,x-y,I-D).normalize(),n===zi)o[5].setComponents(h+m,E+_,x+y,I+D).normalize();else if(n===rc)o[5].setComponents(m,_,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const n=rT.distanceTo(e.center);return Mr.radius=.7071067811865476+n,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(ku.x=o.normal.x>0?e.max.x:e.min.x,ku.y=o.normal.y>0?e.max.y:e.min.y,ku.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ku)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sT extends Cn{constructor(e,n,a,o,u,c,d,m,h){super(e,n,a,o,u,c,d,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cx extends Cn{constructor(e,n,a=Ur,o,u,c,d=ri,m=ri,h,v=el,g=1){if(v!==el&&v!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:g};super(_,o,u,c,d,m,v,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class dl extends Pr{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const u=e/2,c=n/2,d=Math.floor(a),m=Math.floor(o),h=d+1,v=m+1,g=e/d,_=n/m,E=[],M=[],b=[],y=[];for(let x=0;x<v;x++){const U=x*_-c;for(let L=0;L<h;L++){const D=L*g-u;M.push(D,-U,0),b.push(0,0,1),y.push(L/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let U=0;U<d;U++){const L=U+h*x,D=U+h*(x+1),I=U+1+h*(x+1),V=U+1+h*x;E.push(L,D,V),E.push(D,I,V)}this.setIndex(E),this.setAttribute("position",new Lr(M,3)),this.setAttribute("normal",new Lr(b,3)),this.setAttribute("uv",new Lr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.widthSegments,e.heightSegments)}}class oT extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lT extends hc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uT extends hc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ih={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class cT{constructor(e,n,a){const o=this;let u=!1,c=0,d=0,m;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this.abortController=new AbortController,this.itemStart=function(v){d++,u===!1&&o.onStart!==void 0&&o.onStart(v,c,d),u=!0},this.itemEnd=function(v){c++,o.onProgress!==void 0&&o.onProgress(v,c,d),c===d&&(u=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,g){return h.push(v,g),this},this.removeHandler=function(v){const g=h.indexOf(v);return g!==-1&&h.splice(g,2),this},this.getHandler=function(v){for(let g=0,_=h.length;g<_;g+=2){const E=h[g],M=h[g+1];if(E.global&&(E.lastIndex=0),E.test(v))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const fT=new cT;class Rp{constructor(e){this.manager=e!==void 0?e:fT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,u){a.load(e,o,n,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Rp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ls=new WeakMap;class dT extends Rp{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,c=ih.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)u.manager.itemStart(e),setTimeout(function(){n&&n(c),u.manager.itemEnd(e)},0);else{let g=Ls.get(c);g===void 0&&(g=[],Ls.set(c,g)),g.push({onLoad:n,onError:o})}return c}const d=nl("img");function m(){v(),n&&n(this);const g=Ls.get(this)||[];for(let _=0;_<g.length;_++){const E=g[_];E.onLoad&&E.onLoad(this)}Ls.delete(this),u.manager.itemEnd(e)}function h(g){v(),o&&o(g),ih.remove(`image:${e}`);const _=Ls.get(this)||[];for(let E=0;E<_.length;E++){const M=_[E];M.onError&&M.onError(g)}Ls.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function v(){d.removeEventListener("load",m,!1),d.removeEventListener("error",h,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),ih.add(`image:${e}`,d),u.manager.itemStart(e),d.src=e,d}}class hT extends Rp{constructor(e){super(e)}load(e,n,a,o){const u=new Cn,c=new dT(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){u.image=d,u.needsUpdate=!0,n!==void 0&&n(u)},a,o),u}}class wx extends Tx{constructor(e=-1,n=1,a=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=a-e,c=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,c=u+h*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class pT extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Z_(r,e,n,a){const o=gT(a);switch(n){case fx:return r*e;case hx:return r*e/o.components*o.byteLength;case Ep:return r*e/o.components*o.byteLength;case px:return r*e*2/o.components*o.byteLength;case Mp:return r*e*2/o.components*o.byteLength;case dx:return r*e*3/o.components*o.byteLength;case ai:return r*e*4/o.components*o.byteLength;case bp:return r*e*4/o.components*o.byteLength;case Qu:case Ju:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $u:case ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Ph:return Math.max(r,16)*Math.max(e,8)/4;case Uh:case Oh:return Math.max(r,8)*Math.max(e,8)/2;case zh:case Fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case tc:case $h:case ep:return Math.ceil(r/4)*Math.ceil(e/4)*16;case mx:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case np:case ip:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function gT(r){switch(r){case va:case lx:return{byteLength:1,components:1};case Jo:case ux:case ol:return{byteLength:2,components:1};case Sp:case yp:return{byteLength:2,components:4};case Ur:case xp:case pa:return{byteLength:4,components:1};case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);function Dx(){let r=null,e=!1,n=null,a=null;function o(u,c){n(u,c),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){r=u}}}function vT(r){const e=new WeakMap;function n(d,m){const h=d.array,v=d.usage,g=h.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,h,v),d.onUploadCallback();let E;if(h instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=r.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=r.SHORT;else if(h instanceof Uint32Array)E=r.UNSIGNED_INT;else if(h instanceof Int32Array)E=r.INT;else if(h instanceof Int8Array)E=r.BYTE;else if(h instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:g}}function a(d,m,h){const v=m.array,g=m.updateRanges;if(r.bindBuffer(h,d),g.length===0)r.bufferSubData(h,0,v);else{g.sort((E,M)=>E.start-M.start);let _=0;for(let E=1;E<g.length;E++){const M=g[_],b=g[E];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++_,g[_]=b)}g.length=_+1;for(let E=0,M=g.length;E<M;E++){const b=g[E];r.bufferSubData(h,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function c(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,n(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,d,m),h.version=d.version}}return{get:o,remove:u,update:c}}var _T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ST=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,VT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jT="gl_FragColor = linearToOutputTexel( gl_FragColor );",KT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_A=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:_T,alphahash_pars_fragment:xT,alphamap_fragment:ST,alphamap_pars_fragment:yT,alphatest_fragment:ET,alphatest_pars_fragment:MT,aomap_fragment:bT,aomap_pars_fragment:TT,batching_pars_vertex:AT,batching_vertex:RT,begin_vertex:CT,beginnormal_vertex:wT,bsdfs:DT,iridescence_fragment:LT,bumpmap_pars_fragment:UT,clipping_planes_fragment:NT,clipping_planes_pars_fragment:OT,clipping_planes_pars_vertex:PT,clipping_planes_vertex:zT,color_fragment:FT,color_pars_fragment:BT,color_pars_vertex:IT,color_vertex:HT,common:VT,cube_uv_reflection_fragment:GT,defaultnormal_vertex:kT,displacementmap_pars_vertex:XT,displacementmap_vertex:WT,emissivemap_fragment:qT,emissivemap_pars_fragment:YT,colorspace_fragment:jT,colorspace_pars_fragment:KT,envmap_fragment:ZT,envmap_common_pars_fragment:QT,envmap_pars_fragment:JT,envmap_pars_vertex:$T,envmap_physical_pars_fragment:c1,envmap_vertex:e1,fog_vertex:t1,fog_pars_vertex:n1,fog_fragment:i1,fog_pars_fragment:a1,gradientmap_pars_fragment:r1,lightmap_pars_fragment:s1,lights_lambert_fragment:o1,lights_lambert_pars_fragment:l1,lights_pars_begin:u1,lights_toon_fragment:f1,lights_toon_pars_fragment:d1,lights_phong_fragment:h1,lights_phong_pars_fragment:p1,lights_physical_fragment:m1,lights_physical_pars_fragment:g1,lights_fragment_begin:v1,lights_fragment_maps:_1,lights_fragment_end:x1,logdepthbuf_fragment:S1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:M1,map_fragment:b1,map_pars_fragment:T1,map_particle_fragment:A1,map_particle_pars_fragment:R1,metalnessmap_fragment:C1,metalnessmap_pars_fragment:w1,morphinstance_vertex:D1,morphcolor_vertex:L1,morphnormal_vertex:U1,morphtarget_pars_vertex:N1,morphtarget_vertex:O1,normal_fragment_begin:P1,normal_fragment_maps:z1,normal_pars_fragment:F1,normal_pars_vertex:B1,normal_vertex:I1,normalmap_pars_fragment:H1,clearcoat_normal_fragment_begin:V1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:X1,opaque_fragment:W1,packing:q1,premultiplied_alpha_fragment:Y1,project_vertex:j1,dithering_fragment:K1,dithering_pars_fragment:Z1,roughnessmap_fragment:Q1,roughnessmap_pars_fragment:J1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:eA,shadowmap_vertex:tA,shadowmask_pars_fragment:nA,skinbase_vertex:iA,skinning_pars_vertex:aA,skinning_vertex:rA,skinnormal_vertex:sA,specularmap_fragment:oA,specularmap_pars_fragment:lA,tonemapping_fragment:uA,tonemapping_pars_fragment:cA,transmission_fragment:fA,transmission_pars_fragment:dA,uv_pars_fragment:hA,uv_pars_vertex:pA,uv_vertex:mA,worldpos_vertex:gA,background_vert:vA,background_frag:_A,backgroundCube_vert:xA,backgroundCube_frag:SA,cube_vert:yA,cube_frag:EA,depth_vert:MA,depth_frag:bA,distanceRGBA_vert:TA,distanceRGBA_frag:AA,equirect_vert:RA,equirect_frag:CA,linedashed_vert:wA,linedashed_frag:DA,meshbasic_vert:LA,meshbasic_frag:UA,meshlambert_vert:NA,meshlambert_frag:OA,meshmatcap_vert:PA,meshmatcap_frag:zA,meshnormal_vert:FA,meshnormal_frag:BA,meshphong_vert:IA,meshphong_frag:HA,meshphysical_vert:VA,meshphysical_frag:GA,meshtoon_vert:kA,meshtoon_frag:XA,points_vert:WA,points_frag:qA,shadow_vert:YA,shadow_frag:jA,sprite_vert:KA,sprite_frag:ZA},Ne={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Pi={basic:{uniforms:Fn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Fn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Fn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Fn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Fn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Fn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Fn([Ne.points,Ne.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Fn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Fn([Ne.common,Ne.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Fn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Fn([Ne.sprite,Ne.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Fn([Ne.common,Ne.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Fn([Ne.lights,Ne.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Pi.physical={uniforms:Fn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Xu={r:0,b:0,g:0},br=new _a,QA=new gn;function JA(r,e,n,a,o,u,c){const d=new Vt(0);let m=u===!0?0:1,h,v,g=null,_=0,E=null;function M(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?n:e).get(D)),D}function b(L){let D=!1;const I=M(L);I===null?x(d,m):I&&I.isColor&&(x(I,1),D=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?a.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,D){const I=M(D);I&&(I.isCubeTexture||I.mapping===dc)?(v===void 0&&(v=new Fi(new fl(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Gs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(V,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),br.copy(D.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(QA.makeRotationFromEuler(br)),v.material.toneMapped=wt.getTransfer(I.colorSpace)!==Ht,(g!==I||_!==I.version||E!==r.toneMapping)&&(v.material.needsUpdate=!0,g=I,_=I.version,E=r.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new Fi(new dl(2,2),new Gi({name:"BackgroundMaterial",uniforms:Gs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=wt.getTransfer(I.colorSpace)!==Ht,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||_!==I.version||E!==r.toneMapping)&&(h.material.needsUpdate=!0,g=I,_=I.version,E=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function x(L,D){L.getRGB(Xu,bx(r)),a.buffers.color.setClear(Xu.r,Xu.g,Xu.b,D,c)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(d,m)},render:b,addToRenderList:y,dispose:U}}function $A(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=_(null);let u=o,c=!1;function d(C,P,re,te,se){let ce=!1;const z=g(te,re,P);u!==z&&(u=z,h(u.object)),ce=E(C,te,re,se),ce&&M(C,te,re,se),se!==null&&e.update(se,r.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,D(C,P,re,te),se!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function m(){return r.createVertexArray()}function h(C){return r.bindVertexArray(C)}function v(C){return r.deleteVertexArray(C)}function g(C,P,re){const te=re.wireframe===!0;let se=a[C.id];se===void 0&&(se={},a[C.id]=se);let ce=se[P.id];ce===void 0&&(ce={},se[P.id]=ce);let z=ce[te];return z===void 0&&(z=_(m()),ce[te]=z),z}function _(C){const P=[],re=[],te=[];for(let se=0;se<n;se++)P[se]=0,re[se]=0,te[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:re,attributeDivisors:te,object:C,attributes:{},index:null}}function E(C,P,re,te){const se=u.attributes,ce=P.attributes;let z=0;const W=re.getAttributes();for(const Y in W)if(W[Y].location>=0){const be=se[Y];let N=ce[Y];if(N===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),be===void 0||be.attribute!==N||N&&be.data!==N.data)return!0;z++}return u.attributesNum!==z||u.index!==te}function M(C,P,re,te){const se={},ce=P.attributes;let z=0;const W=re.getAttributes();for(const Y in W)if(W[Y].location>=0){let be=ce[Y];be===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(be=C.instanceColor));const N={};N.attribute=be,be&&be.data&&(N.data=be.data),se[Y]=N,z++}u.attributes=se,u.attributesNum=z,u.index=te}function b(){const C=u.newAttributes;for(let P=0,re=C.length;P<re;P++)C[P]=0}function y(C){x(C,0)}function x(C,P){const re=u.newAttributes,te=u.enabledAttributes,se=u.attributeDivisors;re[C]=1,te[C]===0&&(r.enableVertexAttribArray(C),te[C]=1),se[C]!==P&&(r.vertexAttribDivisor(C,P),se[C]=P)}function U(){const C=u.newAttributes,P=u.enabledAttributes;for(let re=0,te=P.length;re<te;re++)P[re]!==C[re]&&(r.disableVertexAttribArray(re),P[re]=0)}function L(C,P,re,te,se,ce,z){z===!0?r.vertexAttribIPointer(C,P,re,se,ce):r.vertexAttribPointer(C,P,re,te,se,ce)}function D(C,P,re,te){b();const se=te.attributes,ce=re.getAttributes(),z=P.defaultAttributeValues;for(const W in ce){const Y=ce[W];if(Y.location>=0){let Se=se[W];if(Se===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),Se!==void 0){const be=Se.normalized,N=Se.itemSize,Q=e.get(Se);if(Q===void 0)continue;const ye=Q.buffer,Ae=Q.type,Z=Q.bytesPerElement,_e=Ae===r.INT||Ae===r.UNSIGNED_INT||Se.gpuType===xp;if(Se.isInterleavedBufferAttribute){const ve=Se.data,He=ve.stride,Pe=Se.offset;if(ve.isInstancedInterleavedBuffer){for(let nt=0;nt<Y.locationSize;nt++)x(Y.location+nt,ve.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let nt=0;nt<Y.locationSize;nt++)y(Y.location+nt);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let nt=0;nt<Y.locationSize;nt++)L(Y.location+nt,N/Y.locationSize,Ae,be,He*Z,(Pe+N/Y.locationSize*nt)*Z,_e)}else{if(Se.isInstancedBufferAttribute){for(let ve=0;ve<Y.locationSize;ve++)x(Y.location+ve,Se.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ve=0;ve<Y.locationSize;ve++)y(Y.location+ve);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let ve=0;ve<Y.locationSize;ve++)L(Y.location+ve,N/Y.locationSize,Ae,be,N*Z,N/Y.locationSize*ve*Z,_e)}}else if(z!==void 0){const be=z[W];if(be!==void 0)switch(be.length){case 2:r.vertexAttrib2fv(Y.location,be);break;case 3:r.vertexAttrib3fv(Y.location,be);break;case 4:r.vertexAttrib4fv(Y.location,be);break;default:r.vertexAttrib1fv(Y.location,be)}}}}U()}function I(){X();for(const C in a){const P=a[C];for(const re in P){const te=P[re];for(const se in te)v(te[se].object),delete te[se];delete P[re]}delete a[C]}}function V(C){if(a[C.id]===void 0)return;const P=a[C.id];for(const re in P){const te=P[re];for(const se in te)v(te[se].object),delete te[se];delete P[re]}delete a[C.id]}function F(C){for(const P in a){const re=a[P];if(re[C.id]===void 0)continue;const te=re[C.id];for(const se in te)v(te[se].object),delete te[se];delete re[C.id]}}function X(){w(),c=!0,u!==o&&(u=o,h(u.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:X,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:V,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:y,disableUnusedAttributes:U}}function eR(r,e,n){let a;function o(h){a=h}function u(h,v){r.drawArrays(a,h,v),n.update(v,a,1)}function c(h,v,g){g!==0&&(r.drawArraysInstanced(a,h,v,g),n.update(v,a,g))}function d(h,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=v[M];n.update(E,a,1)}function m(h,v,g,_){if(g===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let M=0;M<h.length;M++)c(h[M],v[M],_[M]);else{E.multiDrawArraysInstancedWEBGL(a,h,0,v,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b]*_[b];n.update(M,a,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function tR(r,e,n,a){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==ai&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const X=F===ol&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==va&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==pa&&!X)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const v=m(h);v!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const g=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=M>0,V=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:I,maxSamples:V}}function nR(r){const e=this;let n=null,a=0,o=!1,u=!1;const c=new Rr,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const E=g.length!==0||_||a!==0||o;return o=_,a=g.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,_){n=v(g,_,0)},this.setState=function(g,_,E){const M=g.clippingPlanes,b=g.clipIntersection,y=g.clipShadows,x=r.get(g);if(!o||M===null||M.length===0||u&&!y)u?v(null):h();else{const U=u?0:a,L=U*4;let D=x.clippingState||null;m.value=D,D=v(M,_,L,E);for(let I=0;I!==L;++I)D[I]=n[I];x.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(g,_,E,M){const b=g!==null?g.length:0;let y=null;if(b!==0){if(y=m.value,M!==!0||y===null){const x=E+b*4,U=_.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,D=E;L!==b;++L,D+=4)c.copy(g[L]).applyMatrix4(U,d),c.normal.toArray(y,D),y[D+3]=c.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function iR(r){let e=new WeakMap;function n(c,d){return d===Ch?c.mapping=Is:d===wh&&(c.mapping=Hs),c}function a(c){if(c&&c.isTexture){const d=c.mapping;if(d===Ch||d===wh)if(e.has(c)){const m=e.get(c).texture;return n(m,c.mapping)}else{const m=c.image;if(m&&m.height>0){const h=new eT(m.height);return h.fromEquirectangularTexture(r,c),e.set(c,h),c.addEventListener("dispose",o),n(h.texture,c.mapping)}else return null}}return c}function o(c){const d=c.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:a,dispose:u}}const Ns=4,Q_=[.125,.215,.35,.446,.526,.582],Dr=20,ah=new wx,J_=new Vt;let rh=null,sh=0,oh=0,lh=!1;const Cr=(1+Math.sqrt(5))/2,Us=1/Cr,$_=[new le(-Cr,Us,0),new le(Cr,Us,0),new le(-Us,0,Cr),new le(Us,0,Cr),new le(0,Cr,-Us),new le(0,Cr,Us),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)],aR=new le;class e0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,o=100,u={}){const{size:c=256,position:d=aR}=u;rh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,sh,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,Wu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Is||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:ol,format:ai,colorSpace:Vs,depthBuffer:!1},o=t0(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(e,n,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rR(u)),this._blurMaterial=sR(u,e,n)}return o}_compileMaterial(e){const n=new Fi(this._lodPlanes[0],e);this._renderer.compile(n,ah)}_sceneToCubeUV(e,n,a,o,u){const m=new Ai(90,1,n,a),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,E=g.toneMapping;g.getClearColor(J_),g.toneMapping=$a,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null));const b=new yx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),y=new Fi(new fl,b);let x=!1;const U=e.background;U?U.isColor&&(b.color.copy(U),e.background=null,x=!0):(b.color.copy(J_),x=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,h[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[L],u.y,u.z)):D===1?(m.up.set(0,0,h[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[L],u.z)):(m.up.set(0,h[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[L]));const I=this._cubeSize;Wu(o,D*I,L>2?I:0,I,I),g.setRenderTarget(o),x&&g.render(y,m),g.render(e,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=E,g.autoClear=_,e.background=U}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Is||e.mapping===Hs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=i0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n0());const u=o?this._cubemapMaterial:this._equirectMaterial,c=new Fi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Wu(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(c,ah)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=$_[(o-u-1)%$_.length];this._blur(e,u-1,u,c,d)}n.autoClear=a}_blur(e,n,a,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,a,o,"latitudinal",u),this._halfBlur(c,e,a,a,o,"longitudinal",u)}_halfBlur(e,n,a,o,u,c,d){const m=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Fi(this._lodPlanes[o],h),_=h.uniforms,E=this._sizeLods[a]-1,M=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Dr-1),b=u/M,y=isFinite(u)?1+Math.floor(v*b):Dr;y>Dr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Dr}`);const x=[];let U=0;for(let F=0;F<Dr;++F){const X=F/b,w=Math.exp(-X*X/2);x.push(w),F===0?U+=w:F<y&&(U+=2*w)}for(let F=0;F<x.length;F++)x[F]=x[F]/U;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=c==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:L}=this;_.dTheta.value=M,_.mipInt.value=L-a;const D=this._sizeLods[o],I=3*D*(o>L-Ns?o-L+Ns:0),V=4*(this._cubeSize-D);Wu(n,I,V,3*D,2*D),m.setRenderTarget(n),m.render(g,ah)}}function rR(r){const e=[],n=[],a=[];let o=r;const u=r-Ns+1+Q_.length;for(let c=0;c<u;c++){const d=Math.pow(2,o);n.push(d);let m=1/d;c>r-Ns?m=Q_[c-r+Ns-1]:c===0&&(m=0),a.push(m);const h=1/(d-2),v=-h,g=1+h,_=[v,v,g,v,g,g,v,v,g,g,v,g],E=6,M=6,b=3,y=2,x=1,U=new Float32Array(b*M*E),L=new Float32Array(y*M*E),D=new Float32Array(x*M*E);for(let V=0;V<E;V++){const F=V%3*2/3-1,X=V>2?0:-1,w=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];U.set(w,b*M*V),L.set(_,y*M*V);const C=[V,V,V,V,V,V];D.set(C,x*M*V)}const I=new Pr;I.setAttribute("position",new Hi(U,b)),I.setAttribute("uv",new Hi(L,y)),I.setAttribute("faceIndex",new Hi(D,x)),e.push(I),o>Ns&&o--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function t0(r,e,n){const a=new Nr(r,e,n);return a.texture.mapping=dc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Wu(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function sR(r,e,n){const a=new Float32Array(Dr),o=new le(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function n0(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function i0(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function Cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oR(r){let e=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,h=m===Ch||m===wh,v=m===Is||m===Hs;if(h||v){let g=e.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new e0(r)),g=h?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const E=d.image;return h&&E&&E.height>0||v&&E&&o(E)?(n===null&&(n=new e0(r)),g=h?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d){let m=0;const h=6;for(let v=0;v<h;v++)d[v]!==void 0&&m++;return m===h}function u(d){const m=d.target;m.removeEventListener("dispose",u);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function lR(r){const e={};function n(a){if(e[a]!==void 0)return e[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Ps("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function uR(r,e,n,a){const o={},u=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete o[_.id];const E=u.get(_);E&&(e.remove(E),u.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(g,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function m(g){const _=g.attributes;for(const E in _)e.update(_[E],r.ARRAY_BUFFER)}function h(g){const _=[],E=g.index,M=g.attributes.position;let b=0;if(E!==null){const U=E.array;b=E.version;for(let L=0,D=U.length;L<D;L+=3){const I=U[L+0],V=U[L+1],F=U[L+2];_.push(I,V,V,F,F,I)}}else if(M!==void 0){const U=M.array;b=M.version;for(let L=0,D=U.length/3-1;L<D;L+=3){const I=L+0,V=L+1,F=L+2;_.push(I,V,V,F,F,I)}}else return;const y=new(vx(_)?Mx:Ex)(_,1);y.version=b;const x=u.get(g);x&&e.remove(x),u.set(g,y)}function v(g){const _=u.get(g);if(_){const E=g.index;E!==null&&_.version<E.version&&h(g)}else h(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function cR(r,e,n){let a;function o(_){a=_}let u,c;function d(_){u=_.type,c=_.bytesPerElement}function m(_,E){r.drawElements(a,E,u,_*c),n.update(E,a,1)}function h(_,E,M){M!==0&&(r.drawElementsInstanced(a,E,u,_*c,M),n.update(E,a,M))}function v(_,E,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,E,0,u,_,0,M);let y=0;for(let x=0;x<M;x++)y+=E[x];n.update(y,a,1)}function g(_,E,M,b){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)h(_[x]/c,E[x],b[x]);else{y.multiDrawElementsInstancedWEBGL(a,E,0,u,_,0,b,0,M);let x=0;for(let U=0;U<M;U++)x+=E[U]*b[U];n.update(x,a,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function fR(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,d){switch(n.calls++,c){case r.TRIANGLES:n.triangles+=d*(u/3);break;case r.LINES:n.lines+=d*(u/2);break;case r.LINE_STRIP:n.lines+=d*(u-1);break;case r.LINE_LOOP:n.lines+=d*u;break;case r.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function dR(r,e,n){const a=new WeakMap,o=new rn;function u(c,d,m){const h=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=a.get(d);if(_===void 0||_.count!==g){let C=function(){X.dispose(),a.delete(d),d.removeEventListener("dispose",C)};var E=C;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;M===!0&&(D=1),b===!0&&(D=2),y===!0&&(D=3);let I=d.attributes.position.count*D,V=1;I>e.maxTextureSize&&(V=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*V*4*g),X=new _x(F,I,V,g);X.type=pa,X.needsUpdate=!0;const w=D*4;for(let P=0;P<g;P++){const re=x[P],te=U[P],se=L[P],ce=I*V*4*P;for(let z=0;z<re.count;z++){const W=z*w;M===!0&&(o.fromBufferAttribute(re,z),F[ce+W+0]=o.x,F[ce+W+1]=o.y,F[ce+W+2]=o.z,F[ce+W+3]=0),b===!0&&(o.fromBufferAttribute(te,z),F[ce+W+4]=o.x,F[ce+W+5]=o.y,F[ce+W+6]=o.z,F[ce+W+7]=0),y===!0&&(o.fromBufferAttribute(se,z),F[ce+W+8]=o.x,F[ce+W+9]=o.y,F[ce+W+10]=o.z,F[ce+W+11]=se.itemSize===4?o.w:1)}}_={count:g,texture:X,size:new zt(I,V)},a.set(d,_),d.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",c.morphTexture,n);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const b=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:u}}function hR(r,e,n,a){let o=new WeakMap;function u(m){const h=a.render.frame,v=m.geometry,g=e.get(m,v);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==h&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,h))),m.isSkinnedMesh){const _=m.skeleton;o.get(_)!==h&&(_.update(),o.set(_,h))}return g}function c(){o=new WeakMap}function d(m){const h=m.target;h.removeEventListener("dispose",d),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:u,dispose:c}}const Lx=new Cn,a0=new Cx(1,1),Ux=new _x,Nx=new zb,Ox=new Ax,r0=[],s0=[],o0=new Float32Array(16),l0=new Float32Array(9),u0=new Float32Array(4);function Ys(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let u=r0[o];if(u===void 0&&(u=new Float32Array(o),r0[o]=u),e!==0){a.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,r[c].toArray(u,d)}return u}function vn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function _n(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function pc(r,e){let n=s0[e];n===void 0&&(n=new Int32Array(e),s0[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function pR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function mR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;r.uniform2fv(this.addr,e),_n(n,e)}}function gR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vn(n,e))return;r.uniform3fv(this.addr,e),_n(n,e)}}function vR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;r.uniform4fv(this.addr,e),_n(n,e)}}function _R(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),_n(n,e)}else{if(vn(n,a))return;u0.set(a),r.uniformMatrix2fv(this.addr,!1,u0),_n(n,a)}}function xR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),_n(n,e)}else{if(vn(n,a))return;l0.set(a),r.uniformMatrix3fv(this.addr,!1,l0),_n(n,a)}}function SR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),_n(n,e)}else{if(vn(n,a))return;o0.set(a),r.uniformMatrix4fv(this.addr,!1,o0),_n(n,a)}}function yR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function ER(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;r.uniform2iv(this.addr,e),_n(n,e)}}function MR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;r.uniform3iv(this.addr,e),_n(n,e)}}function bR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;r.uniform4iv(this.addr,e),_n(n,e)}}function TR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function AR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;r.uniform2uiv(this.addr,e),_n(n,e)}}function RR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;r.uniform3uiv(this.addr,e),_n(n,e)}}function CR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;r.uniform4uiv(this.addr,e),_n(n,e)}}function wR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let u;this.type===r.SAMPLER_2D_SHADOW?(a0.compareFunction=gx,u=a0):u=Lx,n.setTexture2D(e||u,o)}function DR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||Nx,o)}function LR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||Ox,o)}function UR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||Ux,o)}function NR(r){switch(r){case 5126:return pR;case 35664:return mR;case 35665:return gR;case 35666:return vR;case 35674:return _R;case 35675:return xR;case 35676:return SR;case 5124:case 35670:return yR;case 35667:case 35671:return ER;case 35668:case 35672:return MR;case 35669:case 35673:return bR;case 5125:return TR;case 36294:return AR;case 36295:return RR;case 36296:return CR;case 35678:case 36198:case 36298:case 36306:case 35682:return wR;case 35679:case 36299:case 36307:return DR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return UR}}function OR(r,e){r.uniform1fv(this.addr,e)}function PR(r,e){const n=Ys(e,this.size,2);r.uniform2fv(this.addr,n)}function zR(r,e){const n=Ys(e,this.size,3);r.uniform3fv(this.addr,n)}function FR(r,e){const n=Ys(e,this.size,4);r.uniform4fv(this.addr,n)}function BR(r,e){const n=Ys(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function IR(r,e){const n=Ys(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function HR(r,e){const n=Ys(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function VR(r,e){r.uniform1iv(this.addr,e)}function GR(r,e){r.uniform2iv(this.addr,e)}function kR(r,e){r.uniform3iv(this.addr,e)}function XR(r,e){r.uniform4iv(this.addr,e)}function WR(r,e){r.uniform1uiv(this.addr,e)}function qR(r,e){r.uniform2uiv(this.addr,e)}function YR(r,e){r.uniform3uiv(this.addr,e)}function jR(r,e){r.uniform4uiv(this.addr,e)}function KR(r,e,n){const a=this.cache,o=e.length,u=pc(n,o);vn(a,u)||(r.uniform1iv(this.addr,u),_n(a,u));for(let c=0;c!==o;++c)n.setTexture2D(e[c]||Lx,u[c])}function ZR(r,e,n){const a=this.cache,o=e.length,u=pc(n,o);vn(a,u)||(r.uniform1iv(this.addr,u),_n(a,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||Nx,u[c])}function QR(r,e,n){const a=this.cache,o=e.length,u=pc(n,o);vn(a,u)||(r.uniform1iv(this.addr,u),_n(a,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||Ox,u[c])}function JR(r,e,n){const a=this.cache,o=e.length,u=pc(n,o);vn(a,u)||(r.uniform1iv(this.addr,u),_n(a,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||Ux,u[c])}function $R(r){switch(r){case 5126:return OR;case 35664:return PR;case 35665:return zR;case 35666:return FR;case 35674:return BR;case 35675:return IR;case 35676:return HR;case 5124:case 35670:return VR;case 35667:case 35671:return GR;case 35668:case 35672:return kR;case 35669:case 35673:return XR;case 5125:return WR;case 36294:return qR;case 36295:return YR;case 36296:return jR;case 35678:case 36198:case 36298:case 36306:case 35682:return KR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return QR;case 36289:case 36303:case 36311:case 36292:return JR}}class eC{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=NR(n.type)}}class tC{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$R(n.type)}}class nC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const d=o[u];d.setValue(e,n[d.id],a)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function c0(r,e){r.seq.push(e),r.map[e.id]=e}function iC(r,e,n){const a=r.name,o=a.length;for(uh.lastIndex=0;;){const u=uh.exec(a),c=uh.lastIndex;let d=u[1];const m=u[2]==="]",h=u[3];if(m&&(d=d|0),h===void 0||h==="["&&c+2===o){c0(n,h===void 0?new eC(d,r,e):new tC(d,r,e));break}else{let g=n.map[d];g===void 0&&(g=new nC(d),c0(n,g)),n=g}}}class nc{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const u=e.getActiveUniform(n,o),c=e.getUniformLocation(n,u.name);iC(u,c,this)}}setValue(e,n,a,o){const u=this.map[n];u!==void 0&&u.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let u=0,c=n.length;u!==c;++u){const d=n[u],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&a.push(c)}return a}}function f0(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const aC=37297;let rC=0;function sC(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const d=c+1;a.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return a.join(`
`)}const d0=new ft;function oC(r){wt._getMatrix(d0,wt.workingColorSpace,r);const e=`mat3( ${d0.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(r)){case ac:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function h0(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),u=(r.getShaderInfoLog(e)||"").trim();if(a&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+sC(r.getShaderSource(e),d)}else return u}function lC(r,e){const n=oC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function uC(r,e){let n;switch(e){case ub:n="Linear";break;case cb:n="Reinhard";break;case fb:n="Cineon";break;case db:n="ACESFilmic";break;case pb:n="AgX";break;case mb:n="Neutral";break;case hb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const qu=new le;function cC(){wt.getLuminanceCoefficients(qu);const r=qu.x.toFixed(4),e=qu.y.toFixed(4),n=qu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function dC(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function hC(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const u=r.getActiveAttrib(e,o),c=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:r.getAttribLocation(e,c),locationSize:d}}return n}function jo(r){return r!==""}function p0(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pC=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(r){return r.replace(pC,gC)}const mC=new Map;function gC(r,e){let n=dt[e];if(n===void 0){const a=mC.get(e);if(a!==void 0)n=dt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return sp(n)}const vC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g0(r){return r.replace(vC,_C)}function _C(r,e,n,a){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function v0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xC(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rx?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===GM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function SC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Is:case Hs:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yC(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Hs&&(e="ENVMAP_MODE_REFRACTION"),e}function EC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sx:e="ENVMAP_BLENDING_MULTIPLY";break;case ob:e="ENVMAP_BLENDING_MIX";break;case lb:e="ENVMAP_BLENDING_ADD";break}return e}function MC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function bC(r,e,n,a){const o=r.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const m=xC(n),h=SC(n),v=yC(n),g=EC(n),_=MC(n),E=fC(n),M=dC(u),b=o.createProgram();let y,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(jo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(jo).join(`
`),x.length>0&&(x+=`
`)):(y=[v0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),x=[v0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$a?"#define TONE_MAPPING":"",n.toneMapping!==$a?dt.tonemapping_pars_fragment:"",n.toneMapping!==$a?uC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,lC("linearToOutputTexel",n.outputColorSpace),cC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(jo).join(`
`)),c=sp(c),c=p0(c,n),c=m0(c,n),d=sp(d),d=p0(d,n),d=m0(d,n),c=g0(c),d=g0(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=U+y+c,D=U+x+d,I=f0(o,o.VERTEX_SHADER,L),V=f0(o,o.FRAGMENT_SHADER,D);o.attachShader(b,I),o.attachShader(b,V),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function F(P){if(r.debug.checkShaderErrors){const re=o.getProgramInfoLog(b)||"",te=o.getShaderInfoLog(I)||"",se=o.getShaderInfoLog(V)||"",ce=re.trim(),z=te.trim(),W=se.trim();let Y=!0,Se=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,b,I,V);else{const be=h0(o,I,"vertex"),N=h0(o,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ce+`
`+be+`
`+N)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(z===""||W==="")&&(Se=!1);Se&&(P.diagnostics={runnable:Y,programLog:ce,vertexShader:{log:z,prefix:y},fragmentShader:{log:W,prefix:x}})}o.deleteShader(I),o.deleteShader(V),X=new nc(o,b),w=hC(o,b)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(b,aC)),C},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rC++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=V,this}let TC=0;class AC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(a),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new RC(e),n.set(e,a)),a}}class RC{constructor(e){this.id=TC++,this.code=e,this.usedTimes=0}}function CC(r,e,n,a,o,u,c){const d=new xx,m=new AC,h=new Set,v=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let E=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return h.add(w),w===0?"uv":`uv${w}`}function y(w,C,P,re,te){const se=re.fog,ce=te.geometry,z=w.isMeshStandardMaterial?re.environment:null,W=(w.isMeshStandardMaterial?n:e).get(w.envMap||z),Y=W&&W.mapping===dc?W.image.height:null,Se=M[w.type];w.precision!==null&&(E=o.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const be=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,N=be!==void 0?be.length:0;let Q=0;ce.morphAttributes.position!==void 0&&(Q=1),ce.morphAttributes.normal!==void 0&&(Q=2),ce.morphAttributes.color!==void 0&&(Q=3);let ye,Ae,Z,_e;if(Se){const Tt=Pi[Se];ye=Tt.vertexShader,Ae=Tt.fragmentShader}else ye=w.vertexShader,Ae=w.fragmentShader,m.update(w),Z=m.getVertexShaderID(w),_e=m.getFragmentShaderID(w);const ve=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),Pe=te.isInstancedMesh===!0,nt=te.isBatchedMesh===!0,Wt=!!w.map,pt=!!w.matcap,H=!!W,bt=!!w.aoMap,$e=!!w.lightMap,yt=!!w.bumpMap,Ke=!!w.normalMap,Gt=!!w.displacementMap,Be=!!w.emissiveMap,ot=!!w.metalnessMap,Jt=!!w.roughnessMap,Zt=w.anisotropy>0,O=w.clearcoat>0,T=w.dispersion>0,ee=w.iridescence>0,he=w.sheen>0,Ee=w.transmission>0,fe=Zt&&!!w.anisotropyMap,Ye=O&&!!w.clearcoatMap,Ce=O&&!!w.clearcoatNormalMap,We=O&&!!w.clearcoatRoughnessMap,qe=ee&&!!w.iridescenceMap,Te=ee&&!!w.iridescenceThicknessMap,we=he&&!!w.sheenColorMap,je=he&&!!w.sheenRoughnessMap,ze=!!w.specularMap,Le=!!w.specularColorMap,lt=!!w.specularIntensityMap,k=Ee&&!!w.transmissionMap,Re=Ee&&!!w.thicknessMap,De=!!w.gradientMap,Fe=!!w.alphaMap,Me=w.alphaTest>0,ge=!!w.alphaHash,Ie=!!w.extensions;let rt=$a;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(rt=r.toneMapping);const Nt={shaderID:Se,shaderType:w.type,shaderName:w.name,vertexShader:ye,fragmentShader:Ae,defines:w.defines,customVertexShaderID:Z,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:nt,batchingColor:nt&&te._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&te.instanceColor!==null,instancingMorph:Pe&&te.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Vs,alphaToCoverage:!!w.alphaToCoverage,map:Wt,matcap:pt,envMap:H,envMapMode:H&&W.mapping,envMapCubeUVHeight:Y,aoMap:bt,lightMap:$e,bumpMap:yt,normalMap:Ke,displacementMap:_&&Gt,emissiveMap:Be,normalMapObjectSpace:Ke&&w.normalMapType===Sb,normalMapTangentSpace:Ke&&w.normalMapType===xb,metalnessMap:ot,roughnessMap:Jt,anisotropy:Zt,anisotropyMap:fe,clearcoat:O,clearcoatMap:Ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:We,dispersion:T,iridescence:ee,iridescenceMap:qe,iridescenceThicknessMap:Te,sheen:he,sheenColorMap:we,sheenRoughnessMap:je,specularMap:ze,specularColorMap:Le,specularIntensityMap:lt,transmission:Ee,transmissionMap:k,thicknessMap:Re,gradientMap:De,opaque:w.transparent===!1&&w.blending===Os&&w.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Me,alphaHash:ge,combine:w.combine,mapUv:Wt&&b(w.map.channel),aoMapUv:bt&&b(w.aoMap.channel),lightMapUv:$e&&b(w.lightMap.channel),bumpMapUv:yt&&b(w.bumpMap.channel),normalMapUv:Ke&&b(w.normalMap.channel),displacementMapUv:Gt&&b(w.displacementMap.channel),emissiveMapUv:Be&&b(w.emissiveMap.channel),metalnessMapUv:ot&&b(w.metalnessMap.channel),roughnessMapUv:Jt&&b(w.roughnessMap.channel),anisotropyMapUv:fe&&b(w.anisotropyMap.channel),clearcoatMapUv:Ye&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:je&&b(w.sheenRoughnessMap.channel),specularMapUv:ze&&b(w.specularMap.channel),specularColorMapUv:Le&&b(w.specularColorMap.channel),specularIntensityMapUv:lt&&b(w.specularIntensityMap.channel),transmissionMapUv:k&&b(w.transmissionMap.channel),thicknessMapUv:Re&&b(w.thicknessMap.channel),alphaMapUv:Fe&&b(w.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Ke||Zt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ce.attributes.uv&&(Wt||Fe),fog:!!se,useFog:w.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:He,skinning:te.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:Wt&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:Be&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ha,flipSided:w.side===Yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ie&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&w.extensions.multiDraw===!0||nt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Nt.vertexUv1s=h.has(1),Nt.vertexUv2s=h.has(2),Nt.vertexUv3s=h.has(3),h.clear(),Nt}function x(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)C.push(P),C.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(U(C,w),L(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function U(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=M[w.type];let P;if(C){const re=Pi[C];P=Zb.clone(re.uniforms)}else P=w.uniforms;return P}function I(w,C){let P;for(let re=0,te=v.length;re<te;re++){const se=v[re];if(se.cacheKey===C){P=se,++P.usedTimes;break}}return P===void 0&&(P=new bC(r,C,w,u),v.push(P)),P}function V(w){if(--w.usedTimes===0){const C=v.indexOf(w);v[C]=v[v.length-1],v.pop(),w.destroy()}}function F(w){m.remove(w)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:D,acquireProgram:I,releaseProgram:V,releaseShaderCache:F,programs:v,dispose:X}}function wC(){let r=new WeakMap;function e(c){return r.has(c)}function n(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function a(c){r.delete(c)}function o(c,d,m){r.get(c)[d]=m}function u(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:u}}function DC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function x0(){const r=[];let e=0;const n=[],a=[],o=[];function u(){e=0,n.length=0,a.length=0,o.length=0}function c(g,_,E,M,b,y){let x=r[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:E,groupOrder:M,renderOrder:g.renderOrder,z:b,group:y},r[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=E,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=b,x.group=y),e++,x}function d(g,_,E,M,b,y){const x=c(g,_,E,M,b,y);E.transmission>0?a.push(x):E.transparent===!0?o.push(x):n.push(x)}function m(g,_,E,M,b,y){const x=c(g,_,E,M,b,y);E.transmission>0?a.unshift(x):E.transparent===!0?o.unshift(x):n.unshift(x)}function h(g,_){n.length>1&&n.sort(g||DC),a.length>1&&a.sort(_||_0),o.length>1&&o.sort(_||_0)}function v(){for(let g=e,_=r.length;g<_;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:o,init:u,push:d,unshift:m,finish:v,sort:h}}function LC(){let r=new WeakMap;function e(a,o){const u=r.get(a);let c;return u===void 0?(c=new x0,r.set(a,[c])):o>=u.length?(c=new x0,u.push(c)):c=u[o],c}function n(){r=new WeakMap}return{get:e,dispose:n}}function UC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new Vt};break;case"SpotLight":n={position:new le,direction:new le,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=n,n}}}function NC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let OC=0;function PC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zC(r){const e=new UC,n=NC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new le);const o=new le,u=new gn,c=new gn;function d(h){let v=0,g=0,_=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let E=0,M=0,b=0,y=0,x=0,U=0,L=0,D=0,I=0,V=0,F=0;h.sort(PC);for(let w=0,C=h.length;w<C;w++){const P=h[w],re=P.color,te=P.intensity,se=P.distance,ce=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)v+=re.r*te,g+=re.g*te,_+=re.b*te;else if(P.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(P.sh.coefficients[z],te);F++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,Y=n.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,a.directionalShadow[E]=Y,a.directionalShadowMap[E]=ce,a.directionalShadowMatrix[E]=P.shadow.matrix,U++}a.directional[E]=z,E++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(re).multiplyScalar(te),z.distance=se,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,a.spot[b]=z;const W=P.shadow;if(P.map&&(a.spotLightMap[I]=P.map,I++,W.updateMatrices(P),P.castShadow&&V++),a.spotLightMatrix[b]=W.matrix,P.castShadow){const Y=n.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,a.spotShadow[b]=Y,a.spotShadowMap[b]=ce,D++}b++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(re).multiplyScalar(te),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),a.rectArea[y]=z,y++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const W=P.shadow,Y=n.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,a.pointShadow[M]=Y,a.pointShadowMap[M]=ce,a.pointShadowMatrix[M]=P.shadow.matrix,L++}a.point[M]=z,M++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(te),z.groundColor.copy(P.groundColor).multiplyScalar(te),a.hemi[x]=z,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=g,a.ambient[2]=_;const X=a.hash;(X.directionalLength!==E||X.pointLength!==M||X.spotLength!==b||X.rectAreaLength!==y||X.hemiLength!==x||X.numDirectionalShadows!==U||X.numPointShadows!==L||X.numSpotShadows!==D||X.numSpotMaps!==I||X.numLightProbes!==F)&&(a.directional.length=E,a.spot.length=b,a.rectArea.length=y,a.point.length=M,a.hemi.length=x,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=D+I-V,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=V,a.numLightProbes=F,X.directionalLength=E,X.pointLength=M,X.spotLength=b,X.rectAreaLength=y,X.hemiLength=x,X.numDirectionalShadows=U,X.numPointShadows=L,X.numSpotShadows=D,X.numSpotMaps=I,X.numLightProbes=F,a.version=OC++)}function m(h,v){let g=0,_=0,E=0,M=0,b=0;const y=v.matrixWorldInverse;for(let x=0,U=h.length;x<U;x++){const L=h[x];if(L.isDirectionalLight){const D=a.directional[g];D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),g++}else if(L.isSpotLight){const D=a.spot[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),E++}else if(L.isRectAreaLight){const D=a.rectArea[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),c.identity(),u.copy(L.matrixWorld),u.premultiply(y),c.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const D=a.point[_];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),_++}else if(L.isHemisphereLight){const D=a.hemi[b];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),b++}}}return{setup:d,setupView:m,state:a}}function S0(r){const e=new zC(r),n=[],a=[];function o(v){h.camera=v,n.length=0,a.length=0}function u(v){n.push(v)}function c(v){a.push(v)}function d(){e.setup(n)}function m(v){e.setupView(n,v)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:c}}function FC(r){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let d;return c===void 0?(d=new S0(r),e.set(o,[d])):u>=c.length?(d=new S0(r),c.push(d)):d=c[u],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const BC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HC(r,e,n){let a=new Rx;const o=new zt,u=new zt,c=new rn,d=new lT({depthPacking:_b}),m=new uT,h={},v=n.maxTextureSize,g={[er]:Yn,[Yn]:er,[ha]:ha},_=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:BC,fragmentShader:IC}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const M=new Pr;M.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Fi(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rx;let x=this.type;this.render=function(V,F,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),re=r.state;re.setBlending(Ja),re.buffers.depth.getReversed()?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const te=x!==da&&this.type===da,se=x===da&&this.type!==da;for(let ce=0,z=V.length;ce<z;ce++){const W=V[ce],Y=W.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const Se=Y.getFrameExtents();if(o.multiply(Se),u.copy(Y.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(u.x=Math.floor(v/Se.x),o.x=u.x*Se.x,Y.mapSize.x=u.x),o.y>v&&(u.y=Math.floor(v/Se.y),o.y=u.y*Se.y,Y.mapSize.y=u.y)),Y.map===null||te===!0||se===!0){const N=this.type!==da?{minFilter:ri,magFilter:ri}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Nr(o.x,o.y,N),Y.map.texture.name=W.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const be=Y.getViewportCount();for(let N=0;N<be;N++){const Q=Y.getViewport(N);c.set(u.x*Q.x,u.y*Q.y,u.x*Q.z,u.y*Q.w),re.viewport(c),Y.updateMatrices(W,N),a=Y.getFrustum(),D(F,X,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===da&&U(Y,X),Y.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(w,C,P)};function U(V,F){const X=e.update(b);_.defines.VSM_SAMPLES!==V.blurSamples&&(_.defines.VSM_SAMPLES=V.blurSamples,E.defines.VSM_SAMPLES=V.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Nr(o.x,o.y)),_.uniforms.shadow_pass.value=V.map.texture,_.uniforms.resolution.value=V.mapSize,_.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(F,null,X,_,b,null),E.uniforms.shadow_pass.value=V.mapPass.texture,E.uniforms.resolution.value=V.mapSize,E.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(F,null,X,E,b,null)}function L(V,F,X,w){let C=null;const P=X.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(P!==void 0)C=P;else if(C=X.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const re=C.uuid,te=F.uuid;let se=h[re];se===void 0&&(se={},h[re]=se);let ce=se[te];ce===void 0&&(ce=C.clone(),se[te]=ce,F.addEventListener("dispose",I)),C=ce}if(C.visible=F.visible,C.wireframe=F.wireframe,w===da?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:g[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const re=r.properties.get(C);re.light=X}return C}function D(V,F,X,w,C){if(V.visible===!1)return;if(V.layers.test(F.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===da)&&(!V.frustumCulled||a.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,V.matrixWorld);const te=e.update(V),se=V.material;if(Array.isArray(se)){const ce=te.groups;for(let z=0,W=ce.length;z<W;z++){const Y=ce[z],Se=se[Y.materialIndex];if(Se&&Se.visible){const be=L(V,Se,w,C);V.onBeforeShadow(r,V,F,X,te,be,Y),r.renderBufferDirect(X,null,te,be,V,Y),V.onAfterShadow(r,V,F,X,te,be,Y)}}}else if(se.visible){const ce=L(V,se,w,C);V.onBeforeShadow(r,V,F,X,te,ce,null),r.renderBufferDirect(X,null,te,ce,V,null),V.onAfterShadow(r,V,F,X,te,ce,null)}}const re=V.children;for(let te=0,se=re.length;te<se;te++)D(re[te],F,X,w,C)}function I(V){V.target.removeEventListener("dispose",I);for(const X in h){const w=h[X],C=V.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const VC={[yh]:Eh,[Mh]:Ah,[bh]:Rh,[Bs]:Th,[Eh]:yh,[Ah]:Mh,[Rh]:bh,[Th]:Bs};function GC(r,e){function n(){let k=!1;const Re=new rn;let De=null;const Fe=new rn(0,0,0,0);return{setMask:function(Me){De!==Me&&!k&&(r.colorMask(Me,Me,Me,Me),De=Me)},setLocked:function(Me){k=Me},setClear:function(Me,ge,Ie,rt,Nt){Nt===!0&&(Me*=rt,ge*=rt,Ie*=rt),Re.set(Me,ge,Ie,rt),Fe.equals(Re)===!1&&(r.clearColor(Me,ge,Ie,rt),Fe.copy(Re))},reset:function(){k=!1,De=null,Fe.set(-1,0,0,0)}}}function a(){let k=!1,Re=!1,De=null,Fe=null,Me=null;return{setReversed:function(ge){if(Re!==ge){const Ie=e.get("EXT_clip_control");ge?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Re=ge;const rt=Me;Me=null,this.setClear(rt)}},getReversed:function(){return Re},setTest:function(ge){ge?ve(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(ge){De!==ge&&!k&&(r.depthMask(ge),De=ge)},setFunc:function(ge){if(Re&&(ge=VC[ge]),Fe!==ge){switch(ge){case yh:r.depthFunc(r.NEVER);break;case Eh:r.depthFunc(r.ALWAYS);break;case Mh:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case bh:r.depthFunc(r.EQUAL);break;case Th:r.depthFunc(r.GEQUAL);break;case Ah:r.depthFunc(r.GREATER);break;case Rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=ge}},setLocked:function(ge){k=ge},setClear:function(ge){Me!==ge&&(Re&&(ge=1-ge),r.clearDepth(ge),Me=ge)},reset:function(){k=!1,De=null,Fe=null,Me=null,Re=!1}}}function o(){let k=!1,Re=null,De=null,Fe=null,Me=null,ge=null,Ie=null,rt=null,Nt=null;return{setTest:function(Tt){k||(Tt?ve(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Tt){Re!==Tt&&!k&&(r.stencilMask(Tt),Re=Tt)},setFunc:function(Tt,On,oi){(De!==Tt||Fe!==On||Me!==oi)&&(r.stencilFunc(Tt,On,oi),De=Tt,Fe=On,Me=oi)},setOp:function(Tt,On,oi){(ge!==Tt||Ie!==On||rt!==oi)&&(r.stencilOp(Tt,On,oi),ge=Tt,Ie=On,rt=oi)},setLocked:function(Tt){k=Tt},setClear:function(Tt){Nt!==Tt&&(r.clearStencil(Tt),Nt=Tt)},reset:function(){k=!1,Re=null,De=null,Fe=null,Me=null,ge=null,Ie=null,rt=null,Nt=null}}}const u=new n,c=new a,d=new o,m=new WeakMap,h=new WeakMap;let v={},g={},_=new WeakMap,E=[],M=null,b=!1,y=null,x=null,U=null,L=null,D=null,I=null,V=null,F=new Vt(0,0,0),X=0,w=!1,C=null,P=null,re=null,te=null,se=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=W>=2);let Se=null,be={};const N=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),ye=new rn().fromArray(N),Ae=new rn().fromArray(Q);function Z(k,Re,De,Fe){const Me=new Uint8Array(4),ge=r.createTexture();r.bindTexture(k,ge),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<De;Ie++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Re+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return ge}const _e={};_e[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ve(r.DEPTH_TEST),c.setFunc(Bs),yt(!1),Ke(A_),ve(r.CULL_FACE),bt(Ja);function ve(k){v[k]!==!0&&(r.enable(k),v[k]=!0)}function He(k){v[k]!==!1&&(r.disable(k),v[k]=!1)}function Pe(k,Re){return g[k]!==Re?(r.bindFramebuffer(k,Re),g[k]=Re,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Re),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function nt(k,Re){let De=E,Fe=!1;if(k){De=_.get(Re),De===void 0&&(De=[],_.set(Re,De));const Me=k.textures;if(De.length!==Me.length||De[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,Ie=Me.length;ge<Ie;ge++)De[ge]=r.COLOR_ATTACHMENT0+ge;De.length=Me.length,Fe=!0}}else De[0]!==r.BACK&&(De[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(De)}function Wt(k){return M!==k?(r.useProgram(k),M=k,!0):!1}const pt={[wr]:r.FUNC_ADD,[XM]:r.FUNC_SUBTRACT,[WM]:r.FUNC_REVERSE_SUBTRACT};pt[qM]=r.MIN,pt[YM]=r.MAX;const H={[jM]:r.ZERO,[KM]:r.ONE,[ZM]:r.SRC_COLOR,[xh]:r.SRC_ALPHA,[nb]:r.SRC_ALPHA_SATURATE,[eb]:r.DST_COLOR,[JM]:r.DST_ALPHA,[QM]:r.ONE_MINUS_SRC_COLOR,[Sh]:r.ONE_MINUS_SRC_ALPHA,[tb]:r.ONE_MINUS_DST_COLOR,[$M]:r.ONE_MINUS_DST_ALPHA,[ib]:r.CONSTANT_COLOR,[ab]:r.ONE_MINUS_CONSTANT_COLOR,[rb]:r.CONSTANT_ALPHA,[sb]:r.ONE_MINUS_CONSTANT_ALPHA};function bt(k,Re,De,Fe,Me,ge,Ie,rt,Nt,Tt){if(k===Ja){b===!0&&(He(r.BLEND),b=!1);return}if(b===!1&&(ve(r.BLEND),b=!0),k!==kM){if(k!==y||Tt!==w){if((x!==wr||D!==wr)&&(r.blendEquation(r.FUNC_ADD),x=wr,D=wr),Tt)switch(k){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case R_:r.blendFunc(r.ONE,r.ONE);break;case C_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case w_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case R_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case C_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}U=null,L=null,I=null,V=null,F.set(0,0,0),X=0,y=k,w=Tt}return}Me=Me||Re,ge=ge||De,Ie=Ie||Fe,(Re!==x||Me!==D)&&(r.blendEquationSeparate(pt[Re],pt[Me]),x=Re,D=Me),(De!==U||Fe!==L||ge!==I||Ie!==V)&&(r.blendFuncSeparate(H[De],H[Fe],H[ge],H[Ie]),U=De,L=Fe,I=ge,V=Ie),(rt.equals(F)===!1||Nt!==X)&&(r.blendColor(rt.r,rt.g,rt.b,Nt),F.copy(rt),X=Nt),y=k,w=!1}function $e(k,Re){k.side===ha?He(r.CULL_FACE):ve(r.CULL_FACE);let De=k.side===Yn;Re&&(De=!De),yt(De),k.blending===Os&&k.transparent===!1?bt(Ja):bt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),u.setMask(k.colorWrite);const Fe=k.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Be(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function yt(k){C!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),C=k)}function Ke(k){k!==HM?(ve(r.CULL_FACE),k!==P&&(k===A_?r.cullFace(r.BACK):k===VM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),P=k}function Gt(k){k!==re&&(z&&r.lineWidth(k),re=k)}function Be(k,Re,De){k?(ve(r.POLYGON_OFFSET_FILL),(te!==Re||se!==De)&&(r.polygonOffset(Re,De),te=Re,se=De)):He(r.POLYGON_OFFSET_FILL)}function ot(k){k?ve(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function Jt(k){k===void 0&&(k=r.TEXTURE0+ce-1),Se!==k&&(r.activeTexture(k),Se=k)}function Zt(k,Re,De){De===void 0&&(Se===null?De=r.TEXTURE0+ce-1:De=Se);let Fe=be[De];Fe===void 0&&(Fe={type:void 0,texture:void 0},be[De]=Fe),(Fe.type!==k||Fe.texture!==Re)&&(Se!==De&&(r.activeTexture(De),Se=De),r.bindTexture(k,Re||_e[k]),Fe.type=k,Fe.texture=Re)}function O(){const k=be[Se];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(k){ye.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),ye.copy(k))}function je(k){Ae.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Ae.copy(k))}function ze(k,Re){let De=h.get(Re);De===void 0&&(De=new WeakMap,h.set(Re,De));let Fe=De.get(k);Fe===void 0&&(Fe=r.getUniformBlockIndex(Re,k.name),De.set(k,Fe))}function Le(k,Re){const Fe=h.get(Re).get(k);m.get(Re)!==Fe&&(r.uniformBlockBinding(Re,Fe,k.__bindingPointIndex),m.set(Re,Fe))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Se=null,be={},g={},_=new WeakMap,E=[],M=null,b=!1,y=null,x=null,U=null,L=null,D=null,I=null,V=null,F=new Vt(0,0,0),X=0,w=!1,C=null,P=null,re=null,te=null,se=null,ye.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:ve,disable:He,bindFramebuffer:Pe,drawBuffers:nt,useProgram:Wt,setBlending:bt,setMaterial:$e,setFlipSided:yt,setCullFace:Ke,setLineWidth:Gt,setPolygonOffset:Be,setScissorTest:ot,activeTexture:Jt,bindTexture:Zt,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:ee,texImage2D:qe,texImage3D:Te,updateUBOMapping:ze,uniformBlockBinding:Le,texStorage2D:Ce,texStorage3D:We,texSubImage2D:he,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ye,scissor:we,viewport:je,reset:lt}}function kC(r,e,n,a,o,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,v=new WeakMap;let g;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,T){return E?new OffscreenCanvas(O,T):nl("canvas")}function b(O,T,ee){let he=1;const Ee=Zt(O);if((Ee.width>ee||Ee.height>ee)&&(he=ee/Math.max(Ee.width,Ee.height)),he<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const fe=Math.floor(he*Ee.width),Ye=Math.floor(he*Ee.height);g===void 0&&(g=M(fe,Ye));const Ce=T?M(fe,Ye):g;return Ce.width=fe,Ce.height=Ye,Ce.getContext("2d").drawImage(O,0,0,fe,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+fe+"x"+Ye+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function y(O){return O.generateMipmaps}function x(O){r.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(O,T,ee,he,Ee=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let fe=T;if(T===r.RED&&(ee===r.FLOAT&&(fe=r.R32F),ee===r.HALF_FLOAT&&(fe=r.R16F),ee===r.UNSIGNED_BYTE&&(fe=r.R8)),T===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(fe=r.R8UI),ee===r.UNSIGNED_SHORT&&(fe=r.R16UI),ee===r.UNSIGNED_INT&&(fe=r.R32UI),ee===r.BYTE&&(fe=r.R8I),ee===r.SHORT&&(fe=r.R16I),ee===r.INT&&(fe=r.R32I)),T===r.RG&&(ee===r.FLOAT&&(fe=r.RG32F),ee===r.HALF_FLOAT&&(fe=r.RG16F),ee===r.UNSIGNED_BYTE&&(fe=r.RG8)),T===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(fe=r.RG8UI),ee===r.UNSIGNED_SHORT&&(fe=r.RG16UI),ee===r.UNSIGNED_INT&&(fe=r.RG32UI),ee===r.BYTE&&(fe=r.RG8I),ee===r.SHORT&&(fe=r.RG16I),ee===r.INT&&(fe=r.RG32I)),T===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),ee===r.UNSIGNED_INT&&(fe=r.RGB32UI),ee===r.BYTE&&(fe=r.RGB8I),ee===r.SHORT&&(fe=r.RGB16I),ee===r.INT&&(fe=r.RGB32I)),T===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),ee===r.UNSIGNED_INT&&(fe=r.RGBA32UI),ee===r.BYTE&&(fe=r.RGBA8I),ee===r.SHORT&&(fe=r.RGBA16I),ee===r.INT&&(fe=r.RGBA32I)),T===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),T===r.RGBA){const Ye=Ee?ac:wt.getTransfer(he);ee===r.FLOAT&&(fe=r.RGBA32F),ee===r.HALF_FLOAT&&(fe=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(fe=Ye===Ht?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function D(O,T){let ee;return O?T===null||T===Ur||T===$o?ee=r.DEPTH24_STENCIL8:T===pa?ee=r.DEPTH32F_STENCIL8:T===Jo&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ur||T===$o?ee=r.DEPTH_COMPONENT24:T===pa?ee=r.DEPTH_COMPONENT32F:T===Jo&&(ee=r.DEPTH_COMPONENT16),ee}function I(O,T){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==ri&&O.minFilter!==qn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function V(O){const T=O.target;T.removeEventListener("dispose",V),X(T),T.isVideoTexture&&v.delete(T)}function F(O){const T=O.target;T.removeEventListener("dispose",F),C(T)}function X(O){const T=a.get(O);if(T.__webglInit===void 0)return;const ee=O.source,he=_.get(ee);if(he){const Ee=he[T.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&w(O),Object.keys(he).length===0&&_.delete(ee)}a.remove(O)}function w(O){const T=a.get(O);r.deleteTexture(T.__webglTexture);const ee=O.source,he=_.get(ee);delete he[T.__cacheKey],c.memory.textures--}function C(O){const T=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let Ee=0;Ee<T.__webglFramebuffer[he].length;Ee++)r.deleteFramebuffer(T.__webglFramebuffer[he][Ee]);else r.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)r.deleteFramebuffer(T.__webglFramebuffer[he]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=O.textures;for(let he=0,Ee=ee.length;he<Ee;he++){const fe=a.get(ee[he]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),c.memory.textures--),a.remove(ee[he])}a.remove(O)}let P=0;function re(){P=0}function te(){const O=P;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),P+=1,O}function se(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ce(O,T){const ee=a.get(O);if(O.isVideoTexture&&ot(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ee.__version!==O.version){const he=O.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(ee,O,T);return}}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+T)}function z(O,T){const ee=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){_e(ee,O,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+T)}function W(O,T){const ee=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){_e(ee,O,T);return}n.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+T)}function Y(O,T){const ee=a.get(O);if(O.version>0&&ee.__version!==O.version){ve(ee,O,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+T)}const Se={[Dh]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[Lh]:r.MIRRORED_REPEAT},be={[ri]:r.NEAREST,[gb]:r.NEAREST_MIPMAP_NEAREST,[Tu]:r.NEAREST_MIPMAP_LINEAR,[qn]:r.LINEAR,[Ud]:r.LINEAR_MIPMAP_NEAREST,[Ci]:r.LINEAR_MIPMAP_LINEAR},N={[yb]:r.NEVER,[Rb]:r.ALWAYS,[Eb]:r.LESS,[gx]:r.LEQUAL,[Mb]:r.EQUAL,[Ab]:r.GEQUAL,[bb]:r.GREATER,[Tb]:r.NOTEQUAL};function Q(O,T){if(T.type===pa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===qn||T.magFilter===Ud||T.magFilter===Tu||T.magFilter===Ci||T.minFilter===qn||T.minFilter===Ud||T.minFilter===Tu||T.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,Se[T.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,Se[T.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,Se[T.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,be[T.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,be[T.minFilter]),T.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ri||T.minFilter!==Tu&&T.minFilter!==Ci||T.type===pa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function ye(O,T){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",V));const he=T.source;let Ee=_.get(he);Ee===void 0&&(Ee={},_.set(he,Ee));const fe=se(T);if(fe!==O.__cacheKey){Ee[fe]===void 0&&(Ee[fe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),Ee[fe].usedTimes++;const Ye=Ee[O.__cacheKey];Ye!==void 0&&(Ee[O.__cacheKey].usedTimes--,Ye.usedTimes===0&&w(T)),O.__cacheKey=fe,O.__webglTexture=Ee[fe].texture}return ee}function Ae(O,T,ee){return Math.floor(Math.floor(O/ee)/T)}function Z(O,T,ee,he){const fe=O.updateRanges;if(fe.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,ee,he,T.data);else{fe.sort((Te,we)=>Te.start-we.start);let Ye=0;for(let Te=1;Te<fe.length;Te++){const we=fe[Ye],je=fe[Te],ze=we.start+we.count,Le=Ae(je.start,T.width,4),lt=Ae(we.start,T.width,4);je.start<=ze+1&&Le===lt&&Ae(je.start+je.count-1,T.width,4)===Le?we.count=Math.max(we.count,je.start+je.count-we.start):(++Ye,fe[Ye]=je)}fe.length=Ye+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Te=0,we=fe.length;Te<we;Te++){const je=fe[Te],ze=Math.floor(je.start/4),Le=Math.ceil(je.count/4),lt=ze%T.width,k=Math.floor(ze/T.width),Re=Le,De=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),n.texSubImage2D(r.TEXTURE_2D,0,lt,k,Re,De,ee,he,T.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,qe)}}function _e(O,T,ee){let he=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=r.TEXTURE_3D);const Ee=ye(O,T),fe=T.source;n.bindTexture(he,O.__webglTexture,r.TEXTURE0+ee);const Ye=a.get(fe);if(fe.version!==Ye.__version||Ee===!0){n.activeTexture(r.TEXTURE0+ee);const Ce=wt.getPrimaries(wt.workingColorSpace),We=T.colorSpace===Qa?null:wt.getPrimaries(T.colorSpace),qe=T.colorSpace===Qa||Ce===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Te=b(T.image,!1,o.maxTextureSize);Te=Jt(T,Te);const we=u.convert(T.format,T.colorSpace),je=u.convert(T.type);let ze=L(T.internalFormat,we,je,T.colorSpace,T.isVideoTexture);Q(he,T);let Le;const lt=T.mipmaps,k=T.isVideoTexture!==!0,Re=Ye.__version===void 0||Ee===!0,De=fe.dataReady,Fe=I(T,Te);if(T.isDepthTexture)ze=D(T.format===tl,T.type),Re&&(k?n.texStorage2D(r.TEXTURE_2D,1,ze,Te.width,Te.height):n.texImage2D(r.TEXTURE_2D,0,ze,Te.width,Te.height,0,we,je,null));else if(T.isDataTexture)if(lt.length>0){k&&Re&&n.texStorage2D(r.TEXTURE_2D,Fe,ze,lt[0].width,lt[0].height);for(let Me=0,ge=lt.length;Me<ge;Me++)Le=lt[Me],k?De&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Le.width,Le.height,we,je,Le.data):n.texImage2D(r.TEXTURE_2D,Me,ze,Le.width,Le.height,0,we,je,Le.data);T.generateMipmaps=!1}else k?(Re&&n.texStorage2D(r.TEXTURE_2D,Fe,ze,Te.width,Te.height),De&&Z(T,Te,we,je)):n.texImage2D(r.TEXTURE_2D,0,ze,Te.width,Te.height,0,we,je,Te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Re&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,ze,lt[0].width,lt[0].height,Te.depth);for(let Me=0,ge=lt.length;Me<ge;Me++)if(Le=lt[Me],T.format!==ai)if(we!==null)if(k){if(De)if(T.layerUpdates.size>0){const Ie=Z_(Le.width,Le.height,T.format,T.type);for(const rt of T.layerUpdates){const Nt=Le.data.subarray(rt*Ie/Le.data.BYTES_PER_ELEMENT,(rt+1)*Ie/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,rt,Le.width,Le.height,1,we,Nt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,Te.depth,we,Le.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,ze,Le.width,Le.height,Te.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?De&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,Te.depth,we,je,Le.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Me,ze,Le.width,Le.height,Te.depth,0,we,je,Le.data)}else{k&&Re&&n.texStorage2D(r.TEXTURE_2D,Fe,ze,lt[0].width,lt[0].height);for(let Me=0,ge=lt.length;Me<ge;Me++)Le=lt[Me],T.format!==ai?we!==null?k?De&&n.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Le.width,Le.height,we,Le.data):n.compressedTexImage2D(r.TEXTURE_2D,Me,ze,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?De&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Le.width,Le.height,we,je,Le.data):n.texImage2D(r.TEXTURE_2D,Me,ze,Le.width,Le.height,0,we,je,Le.data)}else if(T.isDataArrayTexture)if(k){if(Re&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,ze,Te.width,Te.height,Te.depth),De)if(T.layerUpdates.size>0){const Me=Z_(Te.width,Te.height,T.format,T.type);for(const ge of T.layerUpdates){const Ie=Te.data.subarray(ge*Me/Te.data.BYTES_PER_ELEMENT,(ge+1)*Me/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Te.width,Te.height,1,we,je,Ie)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,we,je,Te.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,Te.width,Te.height,Te.depth,0,we,je,Te.data);else if(T.isData3DTexture)k?(Re&&n.texStorage3D(r.TEXTURE_3D,Fe,ze,Te.width,Te.height,Te.depth),De&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,we,je,Te.data)):n.texImage3D(r.TEXTURE_3D,0,ze,Te.width,Te.height,Te.depth,0,we,je,Te.data);else if(T.isFramebufferTexture){if(Re)if(k)n.texStorage2D(r.TEXTURE_2D,Fe,ze,Te.width,Te.height);else{let Me=Te.width,ge=Te.height;for(let Ie=0;Ie<Fe;Ie++)n.texImage2D(r.TEXTURE_2D,Ie,ze,Me,ge,0,we,je,null),Me>>=1,ge>>=1}}else if(lt.length>0){if(k&&Re){const Me=Zt(lt[0]);n.texStorage2D(r.TEXTURE_2D,Fe,ze,Me.width,Me.height)}for(let Me=0,ge=lt.length;Me<ge;Me++)Le=lt[Me],k?De&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,we,je,Le):n.texImage2D(r.TEXTURE_2D,Me,ze,we,je,Le);T.generateMipmaps=!1}else if(k){if(Re){const Me=Zt(Te);n.texStorage2D(r.TEXTURE_2D,Fe,ze,Me.width,Me.height)}De&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,we,je,Te)}else n.texImage2D(r.TEXTURE_2D,0,ze,we,je,Te);y(T)&&x(he),Ye.__version=fe.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ve(O,T,ee){if(T.image.length!==6)return;const he=ye(O,T),Ee=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+ee);const fe=a.get(Ee);if(Ee.version!==fe.__version||he===!0){n.activeTexture(r.TEXTURE0+ee);const Ye=wt.getPrimaries(wt.workingColorSpace),Ce=T.colorSpace===Qa?null:wt.getPrimaries(T.colorSpace),We=T.colorSpace===Qa||Ye===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const qe=T.isCompressedTexture||T.image[0].isCompressedTexture,Te=T.image[0]&&T.image[0].isDataTexture,we=[];for(let ge=0;ge<6;ge++)!qe&&!Te?we[ge]=b(T.image[ge],!0,o.maxCubemapSize):we[ge]=Te?T.image[ge].image:T.image[ge],we[ge]=Jt(T,we[ge]);const je=we[0],ze=u.convert(T.format,T.colorSpace),Le=u.convert(T.type),lt=L(T.internalFormat,ze,Le,T.colorSpace),k=T.isVideoTexture!==!0,Re=fe.__version===void 0||he===!0,De=Ee.dataReady;let Fe=I(T,je);Q(r.TEXTURE_CUBE_MAP,T);let Me;if(qe){k&&Re&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,lt,je.width,je.height);for(let ge=0;ge<6;ge++){Me=we[ge].mipmaps;for(let Ie=0;Ie<Me.length;Ie++){const rt=Me[Ie];T.format!==ai?ze!==null?k?De&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,rt.width,rt.height,ze,rt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,lt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?De&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,rt.width,rt.height,ze,Le,rt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,lt,rt.width,rt.height,0,ze,Le,rt.data)}}}else{if(Me=T.mipmaps,k&&Re){Me.length>0&&Fe++;const ge=Zt(we[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,lt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Te){k?De&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,we[ge].width,we[ge].height,ze,Le,we[ge].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,lt,we[ge].width,we[ge].height,0,ze,Le,we[ge].data);for(let Ie=0;Ie<Me.length;Ie++){const Nt=Me[Ie].image[ge].image;k?De&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,Nt.width,Nt.height,ze,Le,Nt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,lt,Nt.width,Nt.height,0,ze,Le,Nt.data)}}else{k?De&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze,Le,we[ge]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,lt,ze,Le,we[ge]);for(let Ie=0;Ie<Me.length;Ie++){const rt=Me[Ie];k?De&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,ze,Le,rt.image[ge]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,lt,ze,Le,rt.image[ge])}}}y(T)&&x(r.TEXTURE_CUBE_MAP),fe.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function He(O,T,ee,he,Ee,fe){const Ye=u.convert(ee.format,ee.colorSpace),Ce=u.convert(ee.type),We=L(ee.internalFormat,Ye,Ce,ee.colorSpace),qe=a.get(T),Te=a.get(ee);if(Te.__renderTarget=T,!qe.__hasExternalTextures){const we=Math.max(1,T.width>>fe),je=Math.max(1,T.height>>fe);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?n.texImage3D(Ee,fe,We,we,je,T.depth,0,Ye,Ce,null):n.texImage2D(Ee,fe,We,we,je,0,Ye,Ce,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),Be(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,Ee,Te.__webglTexture,0,Gt(T)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,Ee,Te.__webglTexture,fe),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(O,T,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,O),T.depthBuffer){const he=T.depthTexture,Ee=he&&he.isDepthTexture?he.type:null,fe=D(T.stencilBuffer,Ee),Ye=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=Gt(T);Be(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,fe,T.width,T.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,fe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,O)}else{const he=T.textures;for(let Ee=0;Ee<he.length;Ee++){const fe=he[Ee],Ye=u.convert(fe.format,fe.colorSpace),Ce=u.convert(fe.type),We=L(fe.internalFormat,Ye,Ce,fe.colorSpace),qe=Gt(T);ee&&Be(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,We,T.width,T.height):Be(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,We,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,We,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function nt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=a.get(T.depthTexture);he.__renderTarget=T,(!he.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const Ee=he.__webglTexture,fe=Gt(T);if(T.depthTexture.format===el)Be(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0);else if(T.depthTexture.format===tl)Be(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Wt(O){const T=a.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const he=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const Ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",Ee)};he.addEventListener("dispose",Ee),T.__depthDisposeCallback=Ee}T.__boundDepthTexture=he}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const he=O.texture.mipmaps;he&&he.length>0?nt(T.__webglFramebuffer[0],O):nt(T.__webglFramebuffer,O)}else if(ee){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=r.createRenderbuffer(),Pe(T.__webglDepthbuffer[he],O,!1);else{const Ee=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,fe)}}else{const he=O.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Pe(T.__webglDepthbuffer,O,!1);else{const Ee=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,fe)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(O,T,ee){const he=a.get(O);T!==void 0&&He(he.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Wt(O)}function H(O){const T=O.texture,ee=a.get(O),he=a.get(T);O.addEventListener("dispose",F);const Ee=O.textures,fe=O.isWebGLCubeRenderTarget===!0,Ye=Ee.length>1;if(Ye||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=T.version,c.memory.textures++),fe){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let We=0;We<T.mipmaps.length;We++)ee.__webglFramebuffer[Ce][We]=r.createFramebuffer()}else ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Ce=0,We=Ee.length;Ce<We;Ce++){const qe=a.get(Ee[Ce]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),c.memory.textures++)}if(O.samples>0&&Be(O)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Ee.length;Ce++){const We=Ee[Ce];ee.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce]);const qe=u.convert(We.format,We.colorSpace),Te=u.convert(We.type),we=L(We.internalFormat,qe,Te,We.colorSpace,O.isXRRenderTarget===!0),je=Gt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,je,we,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(ee.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){n.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Q(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let We=0;We<T.mipmaps.length;We++)He(ee.__webglFramebuffer[Ce][We],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,We);else He(ee.__webglFramebuffer[Ce],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ye){for(let Ce=0,We=Ee.length;Ce<We;Ce++){const qe=Ee[Ce],Te=a.get(qe);let we=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(we,Te.__webglTexture),Q(we,qe),He(ee.__webglFramebuffer,O,qe,r.COLOR_ATTACHMENT0+Ce,we,0),y(qe)&&x(we)}n.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ce,he.__webglTexture),Q(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let We=0;We<T.mipmaps.length;We++)He(ee.__webglFramebuffer[We],O,T,r.COLOR_ATTACHMENT0,Ce,We);else He(ee.__webglFramebuffer,O,T,r.COLOR_ATTACHMENT0,Ce,0);y(T)&&x(Ce),n.unbindTexture()}O.depthBuffer&&Wt(O)}function bt(O){const T=O.textures;for(let ee=0,he=T.length;ee<he;ee++){const Ee=T[ee];if(y(Ee)){const fe=U(O),Ye=a.get(Ee).__webglTexture;n.bindTexture(fe,Ye),x(fe),n.unbindTexture()}}}const $e=[],yt=[];function Ke(O){if(O.samples>0){if(Be(O)===!1){const T=O.textures,ee=O.width,he=O.height;let Ee=r.COLOR_BUFFER_BIT;const fe=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=a.get(O),Ce=T.length>1;if(Ce)for(let qe=0;qe<T.length;qe++)n.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const We=O.texture.mipmaps;We&&We.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let qe=0;qe<T.length;qe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const Te=a.get(T[qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Te,0)}r.blitFramebuffer(0,0,ee,he,0,0,ee,he,Ee,r.NEAREST),m===!0&&($e.length=0,yt.length=0,$e.push(r.COLOR_ATTACHMENT0+qe),O.depthBuffer&&O.resolveDepthBuffer===!1&&($e.push(fe),yt.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,yt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$e))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let qe=0;qe<T.length;qe++){n.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const Te=a.get(T[qe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,Te,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Gt(O){return Math.min(o.maxSamples,O.samples)}function Be(O){const T=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ot(O){const T=c.render.frame;v.get(O)!==T&&(v.set(O,T),O.update())}function Jt(O,T){const ee=O.colorSpace,he=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==Vs&&ee!==Qa&&(wt.getTransfer(ee)===Ht?(he!==ai||Ee!==va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),T}function Zt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=re,this.setTexture2D=ce,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=pt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Be}function XC(r,e){function n(a,o=Qa){let u;const c=wt.getTransfer(o);if(a===va)return r.UNSIGNED_BYTE;if(a===Sp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===yp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===cx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===lx)return r.BYTE;if(a===ux)return r.SHORT;if(a===Jo)return r.UNSIGNED_SHORT;if(a===xp)return r.INT;if(a===Ur)return r.UNSIGNED_INT;if(a===pa)return r.FLOAT;if(a===ol)return r.HALF_FLOAT;if(a===fx)return r.ALPHA;if(a===dx)return r.RGB;if(a===ai)return r.RGBA;if(a===el)return r.DEPTH_COMPONENT;if(a===tl)return r.DEPTH_STENCIL;if(a===hx)return r.RED;if(a===Ep)return r.RED_INTEGER;if(a===px)return r.RG;if(a===Mp)return r.RG_INTEGER;if(a===bp)return r.RGBA_INTEGER;if(a===Qu||a===Ju||a===$u||a===ec)if(c===Ht)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===Qu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===$u)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===Qu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ju)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===$u)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Uh||a===Nh||a===Oh||a===Ph)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Uh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Nh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Oh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ph)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===zh||a===Fh||a===Bh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===zh||a===Fh)return c===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Bh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ih||a===Hh||a===Vh||a===Gh||a===kh||a===Xh||a===Wh||a===qh||a===Yh||a===jh||a===Kh||a===Zh||a===Qh||a===Jh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Ih)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Hh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Vh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Gh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===kh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Xh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Wh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===qh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Yh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===jh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Kh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Zh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Qh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Jh)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===tc||a===$h||a===ep)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===tc)return c===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===$h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ep)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===mx||a===tp||a===np||a===ip)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===tc)return u.COMPRESSED_RED_RGTC1_EXT;if(a===tp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===np)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ip)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===$o?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}class Px extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const WC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Px(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Gi({vertexShader:WC,fragmentShader:qC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fi(new dl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jC extends qs{constructor(e,n){super();const a=this;let o=null,u=1,c=null,d="local-floor",m=1,h=null,v=null,g=null,_=null,E=null,M=null;const b=new YC,y={},x=n.getContextAttributes();let U=null,L=null;const D=[],I=[],V=new zt;let F=null;const X=new Ai;X.viewport=new rn;const w=new Ai;w.viewport=new rn;const C=[X,w],P=new pT;let re=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let _e=D[Z];return _e===void 0&&(_e=new th,D[Z]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Z){let _e=D[Z];return _e===void 0&&(_e=new th,D[Z]=_e),_e.getGripSpace()},this.getHand=function(Z){let _e=D[Z];return _e===void 0&&(_e=new th,D[Z]=_e),_e.getHandSpace()};function se(Z){const _e=I.indexOf(Z.inputSource);if(_e===-1)return;const ve=D[_e];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,h||c),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ce(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",z);for(let Z=0;Z<D.length;Z++){const _e=I[Z];_e!==null&&(I[Z]=null,D[Z].disconnect(_e))}re=null,te=null,b.reset();for(const Z in y)delete y[Z];e.setRenderTarget(U),E=null,_=null,g=null,o=null,L=null,Ae.stop(),a.isPresenting=!1,e.setPixelRatio(F),e.setSize(V.width,V.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(o,n)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,He=null,Pe=null;x.depth&&(Pe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=x.stencil?tl:el,He=x.stencil?$o:Ur);const nt={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:u};_=g.createProjectionLayer(nt),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Nr(_.textureWidth,_.textureHeight,{format:ai,type:va,depthTexture:new Cx(_.textureWidth,_.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(o,n,ve),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Nr(E.framebufferWidth,E.framebufferHeight,{format:ai,type:va,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),h=null,c=await o.requestReferenceSpace(d),Ae.setContext(o),Ae.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function z(Z){for(let _e=0;_e<Z.removed.length;_e++){const ve=Z.removed[_e],He=I.indexOf(ve);He>=0&&(I[He]=null,D[He].disconnect(ve))}for(let _e=0;_e<Z.added.length;_e++){const ve=Z.added[_e];let He=I.indexOf(ve);if(He===-1){for(let nt=0;nt<D.length;nt++)if(nt>=I.length){I.push(ve),He=nt;break}else if(I[nt]===null){I[nt]=ve,He=nt;break}if(He===-1)break}const Pe=D[He];Pe&&Pe.connect(ve)}}const W=new le,Y=new le;function Se(Z,_e,ve){W.setFromMatrixPosition(_e.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);const He=W.distanceTo(Y),Pe=_e.projectionMatrix.elements,nt=ve.projectionMatrix.elements,Wt=Pe[14]/(Pe[10]-1),pt=Pe[14]/(Pe[10]+1),H=(Pe[9]+1)/Pe[5],bt=(Pe[9]-1)/Pe[5],$e=(Pe[8]-1)/Pe[0],yt=(nt[8]+1)/nt[0],Ke=Wt*$e,Gt=Wt*yt,Be=He/(-$e+yt),ot=Be*-$e;if(_e.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ot),Z.translateZ(Be),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Jt=Wt+Be,Zt=pt+Be,O=Ke-ot,T=Gt+(He-ot),ee=H*pt/Zt*Jt,he=bt*pt/Zt*Jt;Z.projectionMatrix.makePerspective(O,T,ee,he,Jt,Zt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function be(Z,_e){_e===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(_e.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let _e=Z.near,ve=Z.far;b.texture!==null&&(b.depthNear>0&&(_e=b.depthNear),b.depthFar>0&&(ve=b.depthFar)),P.near=w.near=X.near=_e,P.far=w.far=X.far=ve,(re!==P.near||te!==P.far)&&(o.updateRenderState({depthNear:P.near,depthFar:P.far}),re=P.near,te=P.far),P.layers.mask=Z.layers.mask|6,X.layers.mask=P.layers.mask&3,w.layers.mask=P.layers.mask&5;const He=Z.parent,Pe=P.cameras;be(P,He);for(let nt=0;nt<Pe.length;nt++)be(Pe[nt],He);Pe.length===2?Se(P,X,w):P.projectionMatrix.copy(X.projectionMatrix),N(Z,P,He)};function N(Z,_e,ve){ve===null?Z.matrix.copy(_e.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(_e.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=rp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(Z){m=Z,_!==null&&(_.fixedFoveation=Z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(P)},this.getCameraTexture=function(Z){return y[Z]};let Q=null;function ye(Z,_e){if(v=_e.getViewerPose(h||c),M=_e,v!==null){const ve=v.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let He=!1;ve.length!==P.cameras.length&&(P.cameras.length=0,He=!0);for(let pt=0;pt<ve.length;pt++){const H=ve[pt];let bt=null;if(E!==null)bt=E.getViewport(H);else{const yt=g.getViewSubImage(_,H);bt=yt.viewport,pt===0&&(e.setRenderTargetTextures(L,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(L))}let $e=C[pt];$e===void 0&&($e=new Ai,$e.layers.enable(pt),$e.viewport=new rn,C[pt]=$e),$e.matrix.fromArray(H.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(H.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(bt.x,bt.y,bt.width,bt.height),pt===0&&(P.matrix.copy($e.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),He===!0&&P.cameras.push($e)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const pt=g.getDepthInformation(ve[0]);pt&&pt.isValid&&pt.texture&&b.init(pt,o.renderState)}if(Pe&&Pe.includes("camera-access")&&(e.state.unbindTexture(),g))for(let pt=0;pt<ve.length;pt++){const H=ve[pt].camera;if(H){let bt=y[H];bt||(bt=new Px,y[H]=bt);const $e=g.getCameraImage(H);bt.sourceTexture=$e}}}for(let ve=0;ve<D.length;ve++){const He=I[ve],Pe=D[ve];He!==null&&Pe!==void 0&&Pe.update(He,_e,h||c)}Q&&Q(Z,_e),_e.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:_e}),M=null}const Ae=new Dx;Ae.setAnimationLoop(ye),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}}const Tr=new _a,KC=new gn;function ZC(r,e){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,bx(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,U,L,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),g(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),_(y,x),x.isMeshPhysicalMaterial&&E(y,x,D)):x.isMeshMatcapMaterial?(u(y,x),M(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),b(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,U,L):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Yn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Yn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const U=e.get(x),L=U.envMap,D=U.envMapRotation;L&&(y.envMap.value=L,Tr.copy(D),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),y.envMapRotation.value.setFromMatrix4(KC.makeRotationFromEuler(Tr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,U,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*U,y.scale.value=L*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,U){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function b(y,x){const U=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function QC(r,e,n,a){let o={},u={},c=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const D=L.program;a.uniformBlockBinding(U,D)}function h(U,L){let D=o[U.id];D===void 0&&(M(U),D=v(U),o[U.id]=D,U.addEventListener("dispose",y));const I=L.program;a.updateUBOMapping(U,I);const V=e.render.frame;u[U.id]!==V&&(_(U),u[U.id]=V)}function v(U){const L=g();U.__bindingPointIndex=L;const D=r.createBuffer(),I=U.__size,V=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,I,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function g(){for(let U=0;U<d;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const L=o[U.id],D=U.uniforms,I=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let V=0,F=D.length;V<F;V++){const X=Array.isArray(D[V])?D[V]:[D[V]];for(let w=0,C=X.length;w<C;w++){const P=X[w];if(E(P,V,w,I)===!0){const re=P.__offset,te=Array.isArray(P.value)?P.value:[P.value];let se=0;for(let ce=0;ce<te.length;ce++){const z=te[ce],W=b(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,re+se,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,se),se+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,re,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(U,L,D,I){const V=U.value,F=L+"_"+D;if(I[F]===void 0)return typeof V=="number"||typeof V=="boolean"?I[F]=V:I[F]=V.clone(),!0;{const X=I[F];if(typeof V=="number"||typeof V=="boolean"){if(X!==V)return I[F]=V,!0}else if(X.equals(V)===!1)return X.copy(V),!0}return!1}function M(U){const L=U.uniforms;let D=0;const I=16;for(let F=0,X=L.length;F<X;F++){const w=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,P=w.length;C<P;C++){const re=w[C],te=Array.isArray(re.value)?re.value:[re.value];for(let se=0,ce=te.length;se<ce;se++){const z=te[se],W=b(z),Y=D%I,Se=Y%W.boundary,be=Y+Se;D+=Se,be!==0&&I-be<W.storage&&(D+=I-be),re.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=D,D+=W.storage}}}const V=D%I;return V>0&&(D+=I-V),U.__size=D,U.__cache={},this}function b(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function y(U){const L=U.target;L.removeEventListener("dispose",y);const D=c.indexOf(L.__bindingPointIndex);c.splice(D,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete u[L.id]}function x(){for(const U in o)r.deleteBuffer(o[U]);c=[],o={},u={}}return{bind:m,update:h,dispose:x}}class JC{constructor(e={}){const{canvas:n=wb(),context:a=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=c;const M=new Uint32Array(4),b=new Int32Array(4);let y=null,x=null;const U=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1;this._outputColorSpace=Nn;let V=0,F=0,X=null,w=-1,C=null;const P=new rn,re=new rn;let te=null;const se=new Vt(0);let ce=0,z=n.width,W=n.height,Y=1,Se=null,be=null;const N=new rn(0,0,z,W),Q=new rn(0,0,z,W);let ye=!1;const Ae=new Rx;let Z=!1,_e=!1;const ve=new gn,He=new le,Pe=new rn,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function pt(){return X===null?Y:1}let H=a;function bt(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_p}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Me,!1),H===null){const q="webgl2";if(H=bt(q,R),H===null)throw bt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $e,yt,Ke,Gt,Be,ot,Jt,Zt,O,T,ee,he,Ee,fe,Ye,Ce,We,qe,Te,we,je,ze,Le,lt;function k(){$e=new lR(H),$e.init(),ze=new XC(H,$e),yt=new tR(H,$e,e,ze),Ke=new GC(H,$e),yt.reversedDepthBuffer&&_&&Ke.buffers.depth.setReversed(!0),Gt=new fR(H),Be=new wC,ot=new kC(H,$e,Ke,Be,yt,ze,Gt),Jt=new iR(D),Zt=new oR(D),O=new vT(H),Le=new $A(H,O),T=new uR(H,O,Gt,Le),ee=new hR(H,T,O,Gt),Te=new dR(H,yt,ot),Ce=new nR(Be),he=new CC(D,Jt,Zt,$e,yt,Le,Ce),Ee=new ZC(D,Be),fe=new LC,Ye=new FC($e),qe=new JA(D,Jt,Zt,Ke,ee,E,m),We=new HC(D,ee,yt),lt=new QC(H,Gt,yt,Ke),we=new eR(H,$e,Gt),je=new cR(H,$e,Gt),Gt.programs=he.programs,D.capabilities=yt,D.extensions=$e,D.properties=Be,D.renderLists=fe,D.shadowMap=We,D.state=Ke,D.info=Gt}k();const Re=new jC(D,H);this.xr=Re,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=$e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(z,W,!1))},this.getSize=function(R){return R.set(z,W)},this.setSize=function(R,q,ie=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,W=q,n.width=Math.floor(R*Y),n.height=Math.floor(q*Y),ie===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(z*Y,W*Y).floor()},this.setDrawingBufferSize=function(R,q,ie){z=R,W=q,Y=ie,n.width=Math.floor(R*ie),n.height=Math.floor(q*ie),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,q,ie,ae){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,q,ie,ae),Ke.viewport(P.copy(N).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Q)},this.setScissor=function(R,q,ie,ae){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,q,ie,ae),Ke.scissor(re.copy(Q).multiplyScalar(Y).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){Ke.setScissorTest(ye=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){be=R},this.getClearColor=function(R){return R.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ie=!0){let ae=0;if(R){let j=!1;if(X!==null){const xe=X.texture.format;j=xe===bp||xe===Mp||xe===Ep}if(j){const xe=X.texture.type,Ue=xe===va||xe===Ur||xe===Jo||xe===$o||xe===Sp||xe===yp,Ge=qe.getClearColor(),Oe=qe.getClearAlpha(),Ze=Ge.r,it=Ge.g,Qe=Ge.b;Ue?(M[0]=Ze,M[1]=it,M[2]=Qe,M[3]=Oe,H.clearBufferuiv(H.COLOR,0,M)):(b[0]=Ze,b[1]=it,b[2]=Qe,b[3]=Oe,H.clearBufferiv(H.COLOR,0,b))}else ae|=H.COLOR_BUFFER_BIT}q&&(ae|=H.DEPTH_BUFFER_BIT),ie&&(ae|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),qe.dispose(),fe.dispose(),Ye.dispose(),Be.dispose(),Jt.dispose(),Zt.dispose(),ee.dispose(),Le.dispose(),lt.dispose(),he.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",oi),Re.removeEventListener("sessionend",js),wi.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=Gt.autoReset,q=We.enabled,ie=We.autoUpdate,ae=We.needsUpdate,j=We.type;k(),Gt.autoReset=R,We.enabled=q,We.autoUpdate=ie,We.needsUpdate=ae,We.type=j}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ge(R){const q=R.target;q.removeEventListener("dispose",ge),Ie(q)}function Ie(R){rt(R),Be.remove(R)}function rt(R){const q=Be.get(R).programs;q!==void 0&&(q.forEach(function(ie){he.releaseProgram(ie)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ie,ae,j,xe){q===null&&(q=nt);const Ue=j.isMesh&&j.matrixWorld.determinant()<0,Ge=ya(R,q,ie,ae,j);Ke.setMaterial(ae,Ue);let Oe=ie.index,Ze=1;if(ae.wireframe===!0){if(Oe=T.getWireframeAttribute(ie),Oe===void 0)return;Ze=2}const it=ie.drawRange,Qe=ie.attributes.position;let ht=it.start*Ze,Lt=(it.start+it.count)*Ze;xe!==null&&(ht=Math.max(ht,xe.start*Ze),Lt=Math.min(Lt,(xe.start+xe.count)*Ze)),Oe!==null?(ht=Math.max(ht,0),Lt=Math.min(Lt,Oe.count)):Qe!=null&&(ht=Math.max(ht,0),Lt=Math.min(Lt,Qe.count));const kt=Lt-ht;if(kt<0||kt===1/0)return;Le.setup(j,ae,Ge,ie,Oe);let Ut,mt=we;if(Oe!==null&&(Ut=O.get(Oe),mt=je,mt.setIndex(Ut)),j.isMesh)ae.wireframe===!0?(Ke.setLineWidth(ae.wireframeLinewidth*pt()),mt.setMode(H.LINES)):mt.setMode(H.TRIANGLES);else if(j.isLine){let ke=ae.linewidth;ke===void 0&&(ke=1),Ke.setLineWidth(ke*pt()),j.isLineSegments?mt.setMode(H.LINES):j.isLineLoop?mt.setMode(H.LINE_LOOP):mt.setMode(H.LINE_STRIP)}else j.isPoints?mt.setMode(H.POINTS):j.isSprite&&mt.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ke=j._multiDrawStarts,qt=j._multiDrawCounts,At=j._multiDrawCount,Mn=Oe?O.get(Oe).bytesPerElement:1,ki=Be.get(ae).currentProgram.getUniforms();for(let xn=0;xn<At;xn++)ki.setValue(H,"_gl_DrawID",xn),mt.render(ke[xn]/Mn,qt[xn])}else if(j.isInstancedMesh)mt.renderInstances(ht,kt,j.count);else if(ie.isInstancedBufferGeometry){const ke=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,qt=Math.min(ie.instanceCount,ke);mt.renderInstances(ht,kt,qt)}else mt.render(ht,kt)};function Nt(R,q,ie){R.transparent===!0&&R.side===ha&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,jn(R,q,ie),R.side=er,R.needsUpdate=!0,jn(R,q,ie),R.side=ha):jn(R,q,ie)}this.compile=function(R,q,ie=null){ie===null&&(ie=R),x=Ye.get(ie),x.init(q),L.push(x),ie.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),R!==ie&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const ae=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const xe=j.material;if(xe)if(Array.isArray(xe))for(let Ue=0;Ue<xe.length;Ue++){const Ge=xe[Ue];Nt(Ge,ie,j),ae.add(Ge)}else Nt(xe,ie,j),ae.add(xe)}),x=L.pop(),ae},this.compileAsync=function(R,q,ie=null){const ae=this.compile(R,q,ie);return new Promise(j=>{function xe(){if(ae.forEach(function(Ue){Be.get(Ue).currentProgram.isReady()&&ae.delete(Ue)}),ae.size===0){j(R);return}setTimeout(xe,10)}$e.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Tt=null;function On(R){Tt&&Tt(R)}function oi(){wi.stop()}function js(){wi.start()}const wi=new Dx;wi.setAnimationLoop(On),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){Tt=R,Re.setAnimationLoop(R),R===null?wi.stop():wi.start()},Re.addEventListener("sessionstart",oi),Re.addEventListener("sessionend",js),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(q),q=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,q,X),x=Ye.get(R,L.length),x.init(q),L.push(x),ve.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ae.setFromProjectionMatrix(ve,zi,q.reversedDepth),_e=this.localClippingEnabled,Z=Ce.init(this.clippingPlanes,_e),y=fe.get(R,U.length),y.init(),U.push(y),Re.enabled===!0&&Re.isPresenting===!0){const xe=D.xr.getDepthSensingMesh();xe!==null&&zr(xe,q,-1/0,D.sortObjects)}zr(R,q,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(Se,be),Wt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Wt&&qe.addToRenderList(y,R),this.info.render.frame++,Z===!0&&Ce.beginShadows();const ie=x.state.shadowsArray;We.render(ie,R,q),Z===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,j=y.transmissive;if(x.setupLights(),q.isArrayCamera){const xe=q.cameras;if(j.length>0)for(let Ue=0,Ge=xe.length;Ue<Ge;Ue++){const Oe=xe[Ue];Br(ae,j,R,Oe)}Wt&&qe.render(R);for(let Ue=0,Ge=xe.length;Ue<Ge;Ue++){const Oe=xe[Ue];Fr(y,R,Oe,Oe.viewport)}}else j.length>0&&Br(ae,j,R,q),Wt&&qe.render(R),Fr(y,R,q);X!==null&&F===0&&(ot.updateMultisampleRenderTarget(X),ot.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(D,R,q),Le.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(x=L[L.length-1],Z===!0&&Ce.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function zr(R,q,ie,ae){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ae.intersectsSprite(R)){ae&&Pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const Ue=ee.update(R),Ge=R.material;Ge.visible&&y.push(R,Ue,Ge,ie,Pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ae.intersectsObject(R))){const Ue=ee.update(R),Ge=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pe.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Pe.copy(Ue.boundingSphere.center)),Pe.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray(Ge)){const Oe=Ue.groups;for(let Ze=0,it=Oe.length;Ze<it;Ze++){const Qe=Oe[Ze],ht=Ge[Qe.materialIndex];ht&&ht.visible&&y.push(R,Ue,ht,ie,Pe.z,Qe)}}else Ge.visible&&y.push(R,Ue,Ge,ie,Pe.z,null)}}const xe=R.children;for(let Ue=0,Ge=xe.length;Ue<Ge;Ue++)zr(xe[Ue],q,ie,ae)}function Fr(R,q,ie,ae){const j=R.opaque,xe=R.transmissive,Ue=R.transparent;x.setupLightsView(ie),Z===!0&&Ce.setGlobalState(D.clippingPlanes,ie),ae&&Ke.viewport(P.copy(ae)),j.length>0&&tr(j,q,ie),xe.length>0&&tr(xe,q,ie),Ue.length>0&&tr(Ue,q,ie),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Br(R,q,ie,ae){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ae.id]===void 0&&(x.state.transmissionRenderTarget[ae.id]=new Nr(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?ol:va,minFilter:Ci,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const xe=x.state.transmissionRenderTarget[ae.id],Ue=ae.viewport||P;xe.setSize(Ue.z*D.transmissionResolutionScale,Ue.w*D.transmissionResolutionScale);const Ge=D.getRenderTarget(),Oe=D.getActiveCubeFace(),Ze=D.getActiveMipmapLevel();D.setRenderTarget(xe),D.getClearColor(se),ce=D.getClearAlpha(),ce<1&&D.setClearColor(16777215,.5),D.clear(),Wt&&qe.render(ie);const it=D.toneMapping;D.toneMapping=$a;const Qe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),x.setupLightsView(ae),Z===!0&&Ce.setGlobalState(D.clippingPlanes,ae),tr(R,ie,ae),ot.updateMultisampleRenderTarget(xe),ot.updateRenderTargetMipmap(xe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Lt=0,kt=q.length;Lt<kt;Lt++){const Ut=q[Lt],mt=Ut.object,ke=Ut.geometry,qt=Ut.material,At=Ut.group;if(qt.side===ha&&mt.layers.test(ae.layers)){const Mn=qt.side;qt.side=Yn,qt.needsUpdate=!0,Ks(mt,ie,ae,ke,qt,At),qt.side=Mn,qt.needsUpdate=!0,ht=!0}}ht===!0&&(ot.updateMultisampleRenderTarget(xe),ot.updateRenderTargetMipmap(xe))}D.setRenderTarget(Ge,Oe,Ze),D.setClearColor(se,ce),Qe!==void 0&&(ae.viewport=Qe),D.toneMapping=it}function tr(R,q,ie){const ae=q.isScene===!0?q.overrideMaterial:null;for(let j=0,xe=R.length;j<xe;j++){const Ue=R[j],Ge=Ue.object,Oe=Ue.geometry,Ze=Ue.group;let it=Ue.material;it.allowOverride===!0&&ae!==null&&(it=ae),Ge.layers.test(ie.layers)&&Ks(Ge,q,ie,Oe,it,Ze)}}function Ks(R,q,ie,ae,j,xe){R.onBeforeRender(D,q,ie,ae,j,xe),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,q,ie,ae,R,xe),j.transparent===!0&&j.side===ha&&j.forceSinglePass===!1?(j.side=Yn,j.needsUpdate=!0,D.renderBufferDirect(ie,q,ae,j,R,xe),j.side=er,j.needsUpdate=!0,D.renderBufferDirect(ie,q,ae,j,R,xe),j.side=ha):D.renderBufferDirect(ie,q,ae,j,R,xe),R.onAfterRender(D,q,ie,ae,j,xe)}function jn(R,q,ie){q.isScene!==!0&&(q=nt);const ae=Be.get(R),j=x.state.lights,xe=x.state.shadowsArray,Ue=j.state.version,Ge=he.getParameters(R,j.state,xe,q,ie),Oe=he.getProgramCacheKey(Ge);let Ze=ae.programs;ae.environment=R.isMeshStandardMaterial?q.environment:null,ae.fog=q.fog,ae.envMap=(R.isMeshStandardMaterial?Zt:Jt).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",ge),Ze=new Map,ae.programs=Ze);let it=Ze.get(Oe);if(it!==void 0){if(ae.currentProgram===it&&ae.lightsStateVersion===Ue)return En(R,Ge),it}else Ge.uniforms=he.getUniforms(R),R.onBeforeCompile(Ge,D),it=he.acquireProgram(Ge,Oe),Ze.set(Oe,it),ae.uniforms=Ge.uniforms;const Qe=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=Ce.uniform),En(R,Ge),ae.needsLights=gc(R),ae.lightsStateVersion=Ue,ae.needsLights&&(Qe.ambientLightColor.value=j.state.ambient,Qe.lightProbe.value=j.state.probe,Qe.directionalLights.value=j.state.directional,Qe.directionalLightShadows.value=j.state.directionalShadow,Qe.spotLights.value=j.state.spot,Qe.spotLightShadows.value=j.state.spotShadow,Qe.rectAreaLights.value=j.state.rectArea,Qe.ltc_1.value=j.state.rectAreaLTC1,Qe.ltc_2.value=j.state.rectAreaLTC2,Qe.pointLights.value=j.state.point,Qe.pointLightShadows.value=j.state.pointShadow,Qe.hemisphereLights.value=j.state.hemi,Qe.directionalShadowMap.value=j.state.directionalShadowMap,Qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Qe.spotShadowMap.value=j.state.spotShadowMap,Qe.spotLightMatrix.value=j.state.spotLightMatrix,Qe.spotLightMap.value=j.state.spotLightMap,Qe.pointShadowMap.value=j.state.pointShadowMap,Qe.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=it,ae.uniformsList=null,it}function sn(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=nc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function En(R,q){const ie=Be.get(R);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function ya(R,q,ie,ae,j){q.isScene!==!0&&(q=nt),ot.resetTextureUnits();const xe=q.fog,Ue=ae.isMeshStandardMaterial?q.environment:null,Ge=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Vs,Oe=(ae.isMeshStandardMaterial?Zt:Jt).get(ae.envMap||Ue),Ze=ae.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,it=!!ie.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Qe=!!ie.morphAttributes.position,ht=!!ie.morphAttributes.normal,Lt=!!ie.morphAttributes.color;let kt=$a;ae.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(kt=D.toneMapping);const Ut=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,mt=Ut!==void 0?Ut.length:0,ke=Be.get(ae),qt=x.state.lights;if(Z===!0&&(_e===!0||R!==C)){const dn=R===C&&ae.id===w;Ce.setState(ae,R,dn)}let At=!1;ae.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==qt.state.version||ke.outputColorSpace!==Ge||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==Oe||ae.fog===!0&&ke.fog!==xe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ce.numPlanes||ke.numIntersection!==Ce.numIntersection)||ke.vertexAlphas!==Ze||ke.vertexTangents!==it||ke.morphTargets!==Qe||ke.morphNormals!==ht||ke.morphColors!==Lt||ke.toneMapping!==kt||ke.morphTargetsCount!==mt)&&(At=!0):(At=!0,ke.__version=ae.version);let Mn=ke.currentProgram;At===!0&&(Mn=jn(ae,q,j));let ki=!1,xn=!1,ir=!1;const _t=Mn.getUniforms(),wn=ke.uniforms;if(Ke.useProgram(Mn.program)&&(ki=!0,xn=!0,ir=!0),ae.id!==w&&(w=ae.id,xn=!0),ki||C!==R){Ke.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_t.setValue(H,"projectionMatrix",R.projectionMatrix),_t.setValue(H,"viewMatrix",R.matrixWorldInverse);const tn=_t.map.cameraPosition;tn!==void 0&&tn.setValue(H,He.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&_t.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&_t.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,xn=!0,ir=!0)}if(j.isSkinnedMesh){_t.setOptional(H,j,"bindMatrix"),_t.setOptional(H,j,"bindMatrixInverse");const dn=j.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),_t.setValue(H,"boneTexture",dn.boneTexture,ot))}j.isBatchedMesh&&(_t.setOptional(H,j,"batchingTexture"),_t.setValue(H,"batchingTexture",j._matricesTexture,ot),_t.setOptional(H,j,"batchingIdTexture"),_t.setValue(H,"batchingIdTexture",j._indirectTexture,ot),_t.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&_t.setValue(H,"batchingColorTexture",j._colorsTexture,ot));const Pn=ie.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Te.update(j,ie,Mn),(xn||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,_t.setValue(H,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(wn.envMap.value=Oe,wn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&q.environment!==null&&(wn.envMapIntensity.value=q.environmentIntensity),xn&&(_t.setValue(H,"toneMappingExposure",D.toneMappingExposure),ke.needsLights&&Zs(wn,ir),xe&&ae.fog===!0&&Ee.refreshFogUniforms(wn,xe),Ee.refreshMaterialUniforms(wn,ae,Y,W,x.state.transmissionRenderTarget[R.id]),nc.upload(H,sn(ke),wn,ot)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(nc.upload(H,sn(ke),wn,ot),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&_t.setValue(H,"center",j.center),_t.setValue(H,"modelViewMatrix",j.modelViewMatrix),_t.setValue(H,"normalMatrix",j.normalMatrix),_t.setValue(H,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const dn=ae.uniformsGroups;for(let tn=0,Ir=dn.length;tn<Ir;tn++){const Di=dn[tn];lt.update(Di,Mn),lt.bind(Di,Mn)}}return Mn}function Zs(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function gc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,ie){const ae=Be.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Be.get(R.texture).__webglTexture=q,Be.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ie,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ie=Be.get(R);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0};const vc=H.createFramebuffer();this.setRenderTarget=function(R,q=0,ie=0){X=R,V=q,F=ie;let ae=!0,j=null,xe=!1,Ue=!1;if(R){const Oe=Be.get(R);if(Oe.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(H.FRAMEBUFFER,null),ae=!1;else if(Oe.__webglFramebuffer===void 0)ot.setupRenderTarget(R);else if(Oe.__hasExternalTextures)ot.rebindTextures(R,Be.get(R.texture).__webglTexture,Be.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(Oe.__boundDepthTexture!==Qe){if(Qe!==null&&Be.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ue=!0);const it=Be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[q])?j=it[q][ie]:j=it[q],xe=!0):R.samples>0&&ot.useMultisampledRTT(R)===!1?j=Be.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[ie]:j=it,P.copy(R.viewport),re.copy(R.scissor),te=R.scissorTest}else P.copy(N).multiplyScalar(Y).floor(),re.copy(Q).multiplyScalar(Y).floor(),te=ye;if(ie!==0&&(j=vc),Ke.bindFramebuffer(H.FRAMEBUFFER,j)&&ae&&Ke.drawBuffers(R,j),Ke.viewport(P),Ke.scissor(re),Ke.setScissorTest(te),xe){const Oe=Be.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,ie)}else if(Ue){const Oe=q;for(let Ze=0;Ze<R.textures.length;Ze++){const it=Be.get(R.textures[Ze]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ze,it.__webglTexture,ie,Oe)}}else if(R!==null&&ie!==0){const Oe=Be.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Oe.__webglTexture,ie)}w=-1},this.readRenderTargetPixels=function(R,q,ie,ae,j,xe,Ue,Ge=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe){Ke.bindFramebuffer(H.FRAMEBUFFER,Oe);try{const Ze=R.textures[Ge],it=Ze.format,Qe=Ze.type;if(!yt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ae&&ie>=0&&ie<=R.height-j&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ge),H.readPixels(q,ie,ae,j,ze.convert(it),ze.convert(Qe),xe))}finally{const Ze=X!==null?Be.get(X).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,q,ie,ae,j,xe,Ue,Ge=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe)if(q>=0&&q<=R.width-ae&&ie>=0&&ie<=R.height-j){Ke.bindFramebuffer(H.FRAMEBUFFER,Oe);const Ze=R.textures[Ge],it=Ze.format,Qe=Ze.type;if(!yt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.bufferData(H.PIXEL_PACK_BUFFER,xe.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ge),H.readPixels(q,ie,ae,j,ze.convert(it),ze.convert(Qe),0);const Lt=X!==null?Be.get(X).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,Lt);const kt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Db(H,kt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xe),H.deleteBuffer(ht),H.deleteSync(kt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ie=0){const ae=Math.pow(2,-ie),j=Math.floor(R.image.width*ae),xe=Math.floor(R.image.height*ae),Ue=q!==null?q.x:0,Ge=q!==null?q.y:0;ot.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ie,0,0,Ue,Ge,j,xe),Ke.unbindTexture()};const hl=H.createFramebuffer(),nr=H.createFramebuffer();this.copyTextureToTexture=function(R,q,ie=null,ae=null,j=0,xe=null){xe===null&&(j!==0?(Ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=j,j=0):xe=0);let Ue,Ge,Oe,Ze,it,Qe,ht,Lt,kt;const Ut=R.isCompressedTexture?R.mipmaps[xe]:R.image;if(ie!==null)Ue=ie.max.x-ie.min.x,Ge=ie.max.y-ie.min.y,Oe=ie.isBox3?ie.max.z-ie.min.z:1,Ze=ie.min.x,it=ie.min.y,Qe=ie.isBox3?ie.min.z:0;else{const Pn=Math.pow(2,-j);Ue=Math.floor(Ut.width*Pn),Ge=Math.floor(Ut.height*Pn),R.isDataArrayTexture?Oe=Ut.depth:R.isData3DTexture?Oe=Math.floor(Ut.depth*Pn):Oe=1,Ze=0,it=0,Qe=0}ae!==null?(ht=ae.x,Lt=ae.y,kt=ae.z):(ht=0,Lt=0,kt=0);const mt=ze.convert(q.format),ke=ze.convert(q.type);let qt;q.isData3DTexture?(ot.setTexture3D(q,0),qt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),qt=H.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const At=H.getParameter(H.UNPACK_ROW_LENGTH),Mn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ki=H.getParameter(H.UNPACK_SKIP_PIXELS),xn=H.getParameter(H.UNPACK_SKIP_ROWS),ir=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ut.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ut.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ze),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qe);const _t=R.isDataArrayTexture||R.isData3DTexture,wn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Pn=Be.get(R),dn=Be.get(q),tn=Be.get(Pn.__renderTarget),Ir=Be.get(dn.__renderTarget);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let Di=0;Di<Oe;Di++)_t&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.get(R).__webglTexture,j,Qe+Di),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.get(q).__webglTexture,xe,kt+Di)),H.blitFramebuffer(Ze,it,Ue,Ge,ht,Lt,Ue,Ge,H.DEPTH_BUFFER_BIT,H.NEAREST);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Be.has(R)){const Pn=Be.get(R),dn=Be.get(q);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,hl),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,nr);for(let tn=0;tn<Oe;tn++)_t?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pn.__webglTexture,j,Qe+tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pn.__webglTexture,j),wn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,dn.__webglTexture,xe,kt+tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,dn.__webglTexture,xe),j!==0?H.blitFramebuffer(Ze,it,Ue,Ge,ht,Lt,Ue,Ge,H.COLOR_BUFFER_BIT,H.NEAREST):wn?H.copyTexSubImage3D(qt,xe,ht,Lt,kt+tn,Ze,it,Ue,Ge):H.copyTexSubImage2D(qt,xe,ht,Lt,Ze,it,Ue,Ge);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else wn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(qt,xe,ht,Lt,kt,Ue,Ge,Oe,mt,ke,Ut.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(qt,xe,ht,Lt,kt,Ue,Ge,Oe,mt,Ut.data):H.texSubImage3D(qt,xe,ht,Lt,kt,Ue,Ge,Oe,mt,ke,Ut):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,xe,ht,Lt,Ue,Ge,mt,ke,Ut.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,xe,ht,Lt,Ut.width,Ut.height,mt,Ut.data):H.texSubImage2D(H.TEXTURE_2D,xe,ht,Lt,Ue,Ge,mt,ke,Ut);H.pixelStorei(H.UNPACK_ROW_LENGTH,At),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ki),H.pixelStorei(H.UNPACK_SKIP_ROWS,xn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ir),xe===0&&q.generateMipmaps&&H.generateMipmap(qt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ie=null,ae=null,j=0){return Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ie,ae,j)},this.initRenderTarget=function(R){Be.get(R).__webglFramebuffer===void 0&&ot.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ot.setTextureCube(R,0):R.isData3DTexture?ot.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ot.setTexture2DArray(R,0):ot.setTexture2D(R,0),Ke.unbindTexture()},this.resetState=function(){V=0,F=0,X=null,Ke.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const $C=`
in vec3 position;
in vec2 uv;
out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,ew=`
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uPrecipitation;
uniform float uBlur;
uniform sampler2D uBackgroundTexture;

in vec2 vUv;
out vec4 fragColor;

#define S(a, b, t) smoothstep(a, b, t)

vec3 N13(float p) {
  vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.11369, 0.13787));
  p3 += dot(p3, p3.yzx + 19.19);
  return fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float N(float t) {
  return fract(sin(t * 12345.564) * 7658.76);
}

float Saw(float b, float t) {
  return S(0.0, b, t) * S(1.0, b, t);
}

float StaticDrops(vec2 uv, float t) {
  uv *= 40.0;
  vec2 id = floor(uv);
  uv = fract(uv) - 0.5;
  vec3 n = N13(id.x * 107.45 + id.y * 3543.654);
  vec2 p = (n.xy - 0.5) * 0.7;
  float d = length(uv - p);
  float fade = Saw(0.025, fract(t + n.z));
  float c = S(0.3, 0.0, d) * fract(n.z * 10.0) * fade;
  return c;
}

vec2 DropLayer(vec2 uv, float t) {
  vec2 UV = uv;
  uv.y += t * 0.75;
  vec2 a = vec2(6.0, 1.0);
  vec2 grid = a * 2.0;
  vec2 id = floor(uv * grid);

  float colShift = N(id.x);
  uv.y += colShift;

  id = floor(uv * grid);
  vec3 n = N13(id.x * 35.2 + id.y * 2376.1);
  vec2 st = fract(uv * grid) - vec2(0.5, 0.0);

  float x = n.x - 0.5;
  float y = UV.y * 20.0;
  float wiggle = sin(y + sin(y));
  x += wiggle * (0.5 - abs(x)) * (n.z - 0.5);
  x *= 0.7;
  float ti = fract(t + n.z);
  y = (Saw(0.85, ti) - 0.5) * 0.9 + 0.5;
  vec2 p = vec2(x, y);

  float d = length((st - p) * a.yx);
  float mainDrop = S(0.4, 0.0, d);

  float r = sqrt(S(1.0, y, st.y));
  float cd = abs(st.x - x);
  float trail = S(0.23 * r, 0.15 * r * r, cd);
  float trailFront = S(-0.02, 0.02, st.y - y);
  trail *= trailFront * r * r;

  y = UV.y;
  float trail2 = S(0.2 * r, 0.0, cd);
  float droplets = max(0.0, (sin(y * (1.0 - y) * 120.0) - st.y)) * trail2 * trailFront * n.z;
  y = fract(y * 10.0) + (st.y - 0.5);
  float dd = length(st - vec2(x, y));
  droplets = S(0.3, 0.0, dd);
  float m = mainDrop + droplets * r * trailFront;

  return vec2(m, trail);
}

vec2 Drops(vec2 uv, float t, float l0, float l1, float l2) {
  float s = StaticDrops(uv, t) * l0;
  vec2 m1 = DropLayer(uv, t) * l1;
  vec2 m2 = DropLayer(uv * 1.85, t) * l2;

  float c = s + m1.x + m2.x;
  c = S(0.3, 1.0, c);

  return vec2(c, max(m1.y * l0, m2.y * l1));
}

void main() {
  vec2 uv = vUv;
  vec2 centeredUv = (uv - 0.5) * 2.0;

  float aspect = uResolution.y > 0.0 ? uResolution.x / uResolution.y : 1.0;
  centeredUv.x *= aspect;

  float t = uTime * 0.2;
  float rainStrength = clamp(uPrecipitation, 0.0, 1.0);

  vec2 rainUv = uv * vec2(aspect, 1.0);

  float staticDrops = S(-0.45, 1.0, rainStrength) * 2.35;
  float layer1 = S(0.18, 0.78, rainStrength);
  float layer2 = S(-0.05, 0.42, rainStrength);

  vec2 c = Drops(rainUv, t, staticDrops, layer1, layer2);

  vec2 e = vec2(0.001, 0.0);
  float cx = Drops(rainUv + e, t, staticDrops, layer1, layer2).x;
  float cy = Drops(rainUv + e.yx, t, staticDrops, layer1, layer2).x;
  vec2 n = vec2(cx - c.x, cy - c.x);

  float heightFade = mix(0.56, 1.0, S(-0.75, 0.55, centeredUv.y));
  vec3 col = texture(uBackgroundTexture, clamp(uv + n * heightFade, vec2(0.001), vec2(0.999))).rgb;
  vec3 blurredCol = textureLod(uBackgroundTexture, clamp(uv, vec2(0.001), vec2(0.999)), 1.5 + uBlur * 4.0).rgb;
  col = mix(col, blurredCol, uBlur * 0.42);

  // 冷色调色：减弱压暗力度，对齐 snow winterTint 的中性区间
  vec3 daytimeTint = vec3(0.90, 0.94, 1.0);
  col = mix(col, col * daytimeTint, 0.25);
  // 去饱和：保留大部分原色，轻微收敛饱和度
  col = mix(vec3(dot(col, vec3(0.299, 0.587, 0.114))), col, 0.92);

  vec3 lightDir = normalize(vec3(-1.0, 1.0, 0.5));
  float spec = max(0.0, dot(normalize(vec3(n, 0.05)), lightDir));
  col += pow(spec, 30.0) * 0.5 * S(0.1, 0.5, c.x);

  float grain = fract(sin(dot(uv + t * 0.01, vec2(12.9898, 78.233))) * 43758.5453);
  col += (grain - 0.5) * 0.03;

  // 边缘暗角：保留底色亮度，避免边缘压黑（对齐 snow vignette 处理）
  float vignette = 1.0 - length(centeredUv * 0.5);
  float vignetteMask = S(0.0, 1.0, vignette);
  col *= mix(0.82, 1.0, vignetteMask);

  fragColor = vec4(col, 1.0);
}
`,tw=`
uniform vec2 uResolution;
uniform float uTime;
uniform float uPrecipitation;
uniform float uBlur;
uniform sampler2D uBackgroundTexture;
varying vec2 vUv;

#define S(a, b, t) smoothstep(a, b, t)
#define LAYERS 30
#define DEPTH 0.52
#define WIDTH 0.30
#define SPEED 0.62

void main() {
  const mat3 p = mat3(
    13.323122, 23.5112, 21.71123,
    21.1212, 28.7312, 11.9312,
    21.8112, 14.7212, 61.3934
  );

  vec2 uv = vUv;
  vec2 centeredUv = (uv - 0.5) * 2.0;
  float aspect = uResolution.y > 0.0 ? uResolution.x / uResolution.y : 1.0;
  centeredUv.x *= aspect;

  float intensity = clamp(uPrecipitation, 0.0, 1.0);
  vec2 snowUv = vec2(1.0, uResolution.y / max(uResolution.x, 1.0)) * uv;
  snowUv += vec2(sin(uTime * 0.07), cos(uTime * 0.05)) * 0.05 * intensity;

  vec3 acc = vec3(0.0);
  float dof = 5.0 * sin(uTime * 0.1);
  float visibleLayers = max(1.0, float(LAYERS) * intensity);

  for (int i = 0; i < LAYERS; i++) {
    float fi = float(i);
    if (fi > visibleLayers) {
      break;
    }

    vec2 q = snowUv * (1.0 + fi * DEPTH);
    q += vec2(
      q.y * (WIDTH * mod(fi * 7.238917, 1.0) - WIDTH * 0.5),
      SPEED * uTime / (1.0 + fi * DEPTH * 0.03)
    );

    vec3 n = vec3(floor(q), 31.189 + fi);
    vec3 m = floor(n) * 0.00001 + fract(n);
    vec3 mp = (31415.9 + m) / fract(p * m);
    vec3 r = fract(mp);
    vec2 s = abs(mod(q, 1.0) - 0.5 + 0.9 * r.xy - 0.45);
    s += 0.01 * abs(2.0 * fract(10.0 * q.yx) - 1.0);
    s *= mix(0.78, 1.08, fi / float(LAYERS - 1));

    float d = 0.6 * max(s.x - s.y, s.x + s.y) + max(s.x, s.y) - 0.01;
    float edge = 0.005 + 0.05 * min(0.5 * abs(fi - 5.0 - dof), 1.0);
    float flake = smoothstep(edge, -edge, d);
    float bigFlake = smoothstep(edge * 1.35, -edge * 1.35, d * 0.78);
    float nearBoost = S(7.0, 0.0, fi);
    flake = max(flake, bigFlake * nearBoost * 0.56);

    float layerWeight = r.x / (1.0 + 0.02 * fi * DEPTH);
    layerWeight *= mix(1.22, 0.84, fi / float(LAYERS - 1));
    acc += vec3(flake * layerWeight);
  }

  vec3 bg = texture2D(uBackgroundTexture, clamp(uv, vec2(0.001), vec2(0.999))).rgb;
  vec2 blurPx = vec2(1.0 / max(uResolution.x, 1.0), 1.0 / max(uResolution.y, 1.0)) * (1.5 + 3.5 * uBlur);
  vec3 bgSoft = bg * 0.5;
  bgSoft += texture2D(uBackgroundTexture, clamp(uv + blurPx * vec2(1.0, 1.0), vec2(0.001), vec2(0.999))).rgb * 0.25;
  bgSoft += texture2D(uBackgroundTexture, clamp(uv - blurPx * vec2(1.0, 1.0), vec2(0.001), vec2(0.999))).rgb * 0.25;
  vec3 color = mix(bg, bgSoft, 0.42 + uBlur * 0.18);

  vec3 winterTint = vec3(0.9, 0.94, 1.0);
  color = mix(color, color * winterTint, 0.28);

  float snowGain = mix(0.52, 0.98, intensity);
  color += acc * snowGain;

  float haze = S(1.2, 0.05, length(centeredUv * vec2(0.72, 0.58)));
  color += vec3(0.06, 0.09, 0.13) * haze * (0.08 + uBlur * 0.16);

  float vignette = 1.0 - length(centeredUv * 0.4);
  float vignetteMask = S(0.0, 1.0, vignette);
  color *= mix(0.78, 1.0, vignetteMask);

  gl_FragColor = vec4(color, 1.0);
}
`,nw=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;function iw(r){return r==="snow"?"SnowField":"RainField"}function aw(r,e){return r==="rain"?new oT({uniforms:e,glslVersion:ap,vertexShader:$C,fragmentShader:ew}):new Gi({uniforms:e,vertexShader:nw,fragmentShader:tw})}const y0=r=>{let e;const n=new Set,a=(h,v)=>{const g=typeof h=="function"?h(e):h;if(!Object.is(g,e)){const _=e;e=v??(typeof g!="object"||g===null)?g:Object.assign({},e,g),n.forEach(E=>E(e,_))}},o=()=>e,d={setState:a,getState:o,getInitialState:()=>m,subscribe:h=>(n.add(h),()=>n.delete(h))},m=e=r(a,o,d);return d},rw=(r=>r?y0(r):y0),sw=r=>r;function ow(r,e=sw){const n=Mu.useSyncExternalStore(r.subscribe,Mu.useCallback(()=>e(r.getState()),[r,e]),Mu.useCallback(()=>e(r.getInitialState()),[r,e]));return Mu.useDebugValue(n),n}const lw=r=>{const e=rw(r),n=a=>ow(e,a);return Object.assign(n,e),n},zx=(r=>lw),E0={content:"",mode:"rain",font:"sans",glassEnabled:!0,precipitationAmount:.55,blur:.42,whiteNoiseVolume:.5,musicMix:0,timerDurationSeconds:null,timerSecondsRemaining:null,timerRunning:!1,timerStyle:"linear"},uw={isUserActive:!0,lastInteractionAt:0,isControlPanelOpen:!1,isTopHoverActive:!1,hoveredZone:null},Fx={writing:"ambient-writing-state"},cw=1,Bx=()=>typeof window<"u"&&typeof window.localStorage<"u";function fw(r,e){if(!Bx())return null;const n=window.localStorage.getItem(r);if(!n)return null;try{return JSON.parse(n)}catch{return null}}function dw(r,e){Bx()&&window.localStorage.setItem(r,JSON.stringify(e))}let ch=null;function op(){return ch||(ch=hw()),ch}function hw(){let r=!1,e=.1,n=0,a=!1,o=null,u=null,c=null;const d="/sounds";function m(g){const _=new Audio(g);return _.loop=!0,_.volume=0,_}function h(){o||(o=m(`${d}/rain.mp3`),u=m(`${d}/snow.mp3`))}function v(g){if(!r||!o||!u)return;const _=c;c=g;const E=e,M=800,b=50,y=M/b;let x=0;const U=setInterval(()=>{x++;const L=x/y;_&&_==="rain"&&o?o.volume=Math.max(0,E*(1-L)):_&&_==="snow"&&u&&(u.volume=Math.max(0,E*(1-L))),g==="rain"&&o?(o.volume=E*L,L===1&&o.paused&&o.play().catch(()=>{})):g==="snow"&&u&&(u.volume=E*L,L===1&&u.paused&&u.play().catch(()=>{})),x>=y&&(clearInterval(U),_==="rain"&&o?o.pause():_==="snow"&&u&&u.pause())},b)}return{enableFromUserGesture(){r||(r=!0,h(),this.activate())},activate(){!r||a||(a=!0,c||(c="rain"),c==="rain"&&o?(o.volume=e,o.play().catch(()=>{})):c==="snow"&&u&&(u.volume=e,u.play().catch(()=>{})))},isReady(){return r},setMode(g){if(!r){c=g;return}v(g)},setWhiteNoiseVolume(g){e=Math.max(0,Math.min(1,g)),r&&(c==="rain"&&o?o.volume=e:c==="snow"&&u&&(u.volume=e))},setMusicMix(g){n=g},getLevels(){return{whiteNoiseVolume:e,musicMix:n}}}}const pw=()=>{const r=fw(Fx.writing);return r?.state?{...E0,...r.state}:E0},vi=r=>{dw(Fx.writing,{state:r,version:cw})},mw=(r,e)=>({setContent:n=>{r(()=>({content:n})),vi(_i(e()))},setMode:n=>{r(()=>({mode:n})),op().setMode(n),vi(_i(e()))},setFont:n=>{r(()=>({font:n})),vi(_i(e()))},setGlassEnabled:n=>{r(()=>({glassEnabled:n})),vi(_i(e()))},setPrecipitationAmount:n=>{r(()=>({precipitationAmount:n})),vi(_i(e()))},setBlur:n=>{r(()=>({blur:n})),vi(_i(e()))},setWhiteNoiseVolume:n=>{r(()=>({whiteNoiseVolume:n})),op().setWhiteNoiseVolume(n),vi(_i(e()))},setMusicMix:n=>{r(()=>({musicMix:n})),vi(_i(e()))},setTimerDurationSeconds:n=>{r(()=>({timerDurationSeconds:n})),vi(_i(e()))},setTimerSecondsRemaining:n=>{r(()=>({timerSecondsRemaining:n})),vi(_i(e()))},setTimerRunning:n=>{r(()=>({timerRunning:n})),vi(_i(e()))},setTimerStyle:n=>{r(()=>({timerStyle:n})),vi(_i(e()))}});function _i(r){return{content:r.content,mode:r.mode,font:r.font,glassEnabled:r.glassEnabled,precipitationAmount:r.precipitationAmount,blur:r.blur,whiteNoiseVolume:r.whiteNoiseVolume,musicMix:r.musicMix,timerDurationSeconds:r.timerDurationSeconds,timerSecondsRemaining:r.timerSecondsRemaining,timerRunning:r.timerRunning,timerStyle:r.timerStyle}}const gw=()=>({...pw(),setContent:()=>{},setMode:()=>{},setFont:()=>{},setGlassEnabled:()=>{},setPrecipitationAmount:()=>{},setBlur:()=>{},setWhiteNoiseVolume:()=>{},setMusicMix:()=>{},setTimerDurationSeconds:()=>{},setTimerSecondsRemaining:()=>{},setTimerRunning:()=>{},setTimerStyle:()=>{}}),pn=zx()((r,e)=>({...gw(),...mw(r,e)}));function vw(){const r=pn(a=>a.mode),e=pn(a=>a.precipitationAmount),n=pn(a=>a.blur);return ue.useMemo(()=>({mode:r,precipitationAmount:e.toFixed(2),precipitationValue:e,blur:n.toFixed(2),blurValue:n}),[n,r,e])}const _w="https://raw.githubusercontent.com/hcicilee-stack/FlowSpace/main/2dbb18289514a179f8c3f9845bde16c7.jpg";function xw(){if(typeof document>"u"){const m=new Uint8Array(576e4);for(let v=0;v<m.length;v+=4)m[v]=32,m[v+1]=44,m[v+2]=60,m[v+3]=255;const h=new K_(m,1200,1200,ai);return h.wrapS=Bn,h.wrapT=Bn,h.generateMipmaps=!0,h.minFilter=Ci,h.magFilter=qn,h.colorSpace=Nn,h.needsUpdate=!0,h}let e=93751;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296),a=document.createElement("canvas");a.width=1200,a.height=1200;const o=a.getContext("2d");if(!o){const m=new Uint8Array(576e4),h=new K_(m,1200,1200,ai);return h.wrapS=Bn,h.wrapT=Bn,h.generateMipmaps=!0,h.minFilter=Ci,h.magFilter=qn,h.colorSpace=Nn,h.needsUpdate=!0,h}const u=o.createLinearGradient(0,0,0,1200);u.addColorStop(0,"#1b1d24"),u.addColorStop(.42,"#2b2f3b"),u.addColorStop(1,"#666b74"),o.fillStyle=u,o.fillRect(0,0,1200,1200);for(let m=0;m<11;m+=1){const h=1200*(.06+n()*.88),v=1200*(.03+n()*.06),g=.06+n()*.14;o.fillStyle=`rgba(245, 248, 255, ${g.toFixed(3)})`,o.fillRect(h,0,v,1200)}const c=[{x:.2,y:.38,r:.22,c:"rgba(192, 142, 94, 0.46)"},{x:.72,y:.3,r:.26,c:"rgba(152, 168, 190, 0.36)"},{x:.55,y:.68,r:.33,c:"rgba(110, 126, 162, 0.44)"},{x:.18,y:.82,r:.18,c:"rgba(102, 116, 88, 0.35)"},{x:.8,y:.78,r:.21,c:"rgba(86, 99, 114, 0.35)"}];for(const m of c){const h=o.createRadialGradient(1200*m.x,1200*m.y,0,1200*m.x,1200*m.y,1200*m.r);h.addColorStop(0,m.c),h.addColorStop(1,"rgba(0, 0, 0, 0)"),o.fillStyle=h,o.beginPath(),o.arc(1200*m.x,1200*m.y,1200*m.r,0,Math.PI*2),o.fill()}for(let m=0;m<22;m+=1){const h=1200*n(),v=1200*(.18+n()*.7),g=1200*(.01+n()*.05),_=o.createRadialGradient(h,v,0,h,v,g),E=.05+n()*.1;_.addColorStop(0,`rgba(255, 248, 230, ${E.toFixed(3)})`),_.addColorStop(1,"rgba(255, 248, 230, 0)"),o.fillStyle=_,o.beginPath(),o.arc(h,v,g,0,Math.PI*2),o.fill()}o.filter="blur(30px)",o.drawImage(a,0,0),o.filter="none";const d=new sT(a);return d.wrapS=Bn,d.wrapT=Bn,d.generateMipmaps=!0,d.minFilter=Ci,d.magFilter=qn,d.colorSpace=Nn,d.needsUpdate=!0,d}function Sw(){const r=vw(),e=ue.useRef(null),n=ue.useMemo(()=>{const a=xw();return{uResolution:{value:new zt(1,1)},uTime:{value:0},uPrecipitation:{value:r.precipitationValue},uBlur:{value:r.blurValue},uBackgroundTexture:{value:a}}},[]);return ue.useEffect(()=>{const a=e.current;if(!a)return;if(!(typeof window<"u"&&typeof window.WebGLRenderingContext<"u")){n.uPrecipitation.value=r.precipitationValue,n.uBlur.value=r.blurValue;return}const u=a.getContext("webgl2")||a.getContext("webgl");if(!u){n.uPrecipitation.value=r.precipitationValue,n.uBlur.value=r.blurValue;return}const c=new JC({canvas:a,context:u,antialias:!1,alpha:!0,powerPreference:"high-performance"}),d=new nT,m=new wx(-1,1,1,-1,0,1),h=new dl(2,2),v=aw(r.mode,n),g=new Fi(h,v);d.add(g);const _=new hT;_.setCrossOrigin("anonymous");let E=!1,M=0;const b=new mT;_.load(_w,U=>{if(E){U.dispose();return}U.wrapS=Bn,U.wrapT=Bn,U.generateMipmaps=!0,U.minFilter=Ci,U.magFilter=qn,U.colorSpace=Nn,n.uBackgroundTexture.value.dispose(),n.uBackgroundTexture.value=U},void 0,()=>{});const y=()=>{const U=a.clientWidth||window.innerWidth,L=a.clientHeight||window.innerHeight;c.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),c.setSize(U,L,!1),n.uResolution.value.set(U,L)},x=()=>{n.uTime.value=b.getElapsedTime(),n.uPrecipitation.value=r.precipitationValue,n.uBlur.value=r.blurValue,c.render(d,m),M=window.requestAnimationFrame(x)};return y(),x(),window.addEventListener("resize",y),()=>{E=!0,window.cancelAnimationFrame(M),window.removeEventListener("resize",y),h.dispose(),v.dispose(),n.uBackgroundTexture.value.dispose(),c.dispose()}},[r.blurValue,r.mode,r.precipitationValue,n]),Je.jsx("div",{"data-testid":"ambient-canvas","data-mode":r.mode,"data-precipitation":r.precipitationAmount,"data-blur":r.blur,"data-material":iw(r.mode),"data-renderer":"shader","data-shader":r.mode,"data-preset":r.mode==="rain"?"rain-glass":"snow-drift",className:"absolute inset-0",children:Je.jsx("canvas",{ref:e,className:"h-full w-full"})})}function yw(){return Je.jsx("div",{className:"absolute inset-0 overflow-hidden","aria-hidden":"true",children:Je.jsx(Sw,{})})}const at=r=>typeof r=="string",Yo=()=>{let r,e;const n=new Promise((a,o)=>{r=a,e=o});return n.resolve=r,n.reject=e,n},M0=r=>r==null?"":String(r),Ew=(r,e,n)=>{r.forEach(a=>{e[a]&&(n[a]=e[a])})},Mw=/###/g,b0=r=>r&&r.includes("###")?r.replace(Mw,"."):r,T0=r=>!r||at(r),Ko=(r,e,n)=>{const a=at(e)?e.split("."):e;let o=0;for(;o<a.length-1;){if(T0(r))return{};const u=b0(a[o]);!r[u]&&n&&(r[u]=new n),Object.prototype.hasOwnProperty.call(r,u)?r=r[u]:r={},++o}return T0(r)?{}:{obj:r,k:b0(a[o])}},A0=(r,e,n)=>{const{obj:a,k:o}=Ko(r,e,Object);if(a!==void 0||e.length===1){a[o]=n;return}let u=e[e.length-1],c=e.slice(0,e.length-1),d=Ko(r,c,Object);for(;d.obj===void 0&&c.length;)u=`${c[c.length-1]}.${u}`,c=c.slice(0,c.length-1),d=Ko(r,c,Object),d?.obj&&typeof d.obj[`${d.k}.${u}`]<"u"&&(d.obj=void 0);d.obj[`${d.k}.${u}`]=n},bw=(r,e,n,a)=>{const{obj:o,k:u}=Ko(r,e,Object);o[u]=o[u]||[],o[u].push(n)},sc=(r,e)=>{const{obj:n,k:a}=Ko(r,e);if(n&&Object.prototype.hasOwnProperty.call(n,a))return n[a]},Tw=(r,e,n)=>{const a=sc(r,n);return a!==void 0?a:sc(e,n)},Ix=(r,e,n)=>{for(const a in e)a!=="__proto__"&&a!=="constructor"&&(a in r?at(r[a])||r[a]instanceof String||at(e[a])||e[a]instanceof String?n&&(r[a]=e[a]):Ix(r[a],e[a],n):r[a]=e[a]);return r},Ar=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),Aw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},Rw=r=>at(r)?r.replace(/[&<>"'\/]/g,e=>Aw[e]):r;class Cw{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const a=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,a),this.regExpQueue.push(e),a}}const ww=[" ",",","?","!",";"],Dw=new Cw(20),Lw=(r,e,n)=>{e=e||"",n=n||"";const a=ww.filter(c=>!e.includes(c)&&!n.includes(c));if(a.length===0)return!0;const o=Dw.getRegExp(`(${a.map(c=>c==="?"?"\\?":c).join("|")})`);let u=!o.test(r);if(!u){const c=r.indexOf(n);c>0&&!o.test(r.substring(0,c))&&(u=!0)}return u},lp=(r,e,n=".")=>{if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const a=e.split(n);let o=r;for(let u=0;u<a.length;){if(!o||typeof o!="object")return;let c,d="";for(let m=u;m<a.length;++m)if(m!==u&&(d+=n),d+=a[m],c=o[d],c!==void 0){if(["string","number","boolean"].includes(typeof c)&&m<a.length-1)continue;u+=m-u+1;break}o=c}return o},il=r=>r?.replace(/_/g,"-"),Uw={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){console?.[r]?.apply?.(console,e)}};class oc{constructor(e,n={}){this.init(e,n)}init(e,n={}){this.prefix=n.prefix||"i18next:",this.logger=e||Uw,this.options=n,this.debug=n.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,a,o){return o&&!this.debug?null:(at(e[0])&&(e[0]=`${a}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new oc(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new oc(this.logger,e)}}var Bi=new oc;class mc{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(n)||0;this.observers[a].set(n,o+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}once(e,n){const a=(...o)=>{n(...o),this.off(e,a)};return this.on(e,a),this}emit(e,...n){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([o,u])=>{for(let c=0;c<u;c++)o(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([o,u])=>{for(let c=0;c<u;c++)o(e,...n)})}}class R0 extends mc{constructor(e,n={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,a,o={}){const u=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,c=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let d;e.includes(".")?d=e.split("."):(d=[e,n],a&&(Array.isArray(a)?d.push(...a):at(a)&&u?d.push(...a.split(u)):d.push(a)));const m=sc(this.data,d);return!m&&!n&&!a&&e.includes(".")&&(e=d[0],n=d[1],a=d.slice(2).join(".")),m||!c||!at(a)?m:lp(this.data?.[e]?.[n],a,u)}addResource(e,n,a,o,u={silent:!1}){const c=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let d=[e,n];a&&(d=d.concat(c?a.split(c):a)),e.includes(".")&&(d=e.split("."),o=n,n=d[1]),this.addNamespaces(n),A0(this.data,d,o),u.silent||this.emit("added",e,n,a,o)}addResources(e,n,a,o={silent:!1}){for(const u in a)(at(a[u])||Array.isArray(a[u]))&&this.addResource(e,n,u,a[u],{silent:!0});o.silent||this.emit("added",e,n,a)}addResourceBundle(e,n,a,o,u,c={silent:!1,skipCopy:!1}){let d=[e,n];e.includes(".")&&(d=e.split("."),o=a,a=n,n=d[1]),this.addNamespaces(n);let m=sc(this.data,d)||{};c.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?Ix(m,a,u):m={...m,...a},A0(this.data,d,m),c.silent||this.emit("added",e,n,a)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var Hx={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,n,a,o){return r.forEach(u=>{e=this.processors[u]?.process(e,n,a,o)??e}),e}};const Vx=Symbol("i18next/PATH_KEY");function Nw(){const r=[],e=Object.create(null);let n;return e.get=(a,o)=>(n?.revoke?.(),o===Vx?r:(r.push(o),n=Proxy.revocable(a,e),n.proxy)),Proxy.revocable(Object.create(null),e).proxy}function Fs(r,e){const{[Vx]:n}=r(Nw()),a=e?.keySeparator??".",o=e?.nsSeparator??":";if(n.length>1&&o){const u=e?.ns,c=Array.isArray(u)?u:null;if(c&&c.length>1&&c.slice(1).includes(n[0]))return`${n[0]}${o}${n.slice(1).join(a)}`}return n.join(a)}const fh=r=>!at(r)&&typeof r!="boolean"&&typeof r!="number";class lc extends mc{constructor(e,n={}){super(),Ew(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Bi.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,n={interpolation:{}}){const a={...n};if(e==null)return!1;const o=this.resolve(e,a);if(o?.res===void 0)return!1;const u=fh(o.res);return!(a.returnObjects===!1&&u)}extractFromKey(e,n){let a=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let u=n.ns||this.options.defaultNS||[];const c=a&&e.includes(a),d=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!Lw(e,a,o);if(c&&!d){const m=e.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:e,namespaces:at(u)?[u]:u};const h=e.split(a);(a!==o||a===o&&this.options.ns.includes(h[0]))&&(u=h.shift()),e=h.join(o)}return{key:e,namespaces:at(u)?[u]:u}}translate(e,n,a){let o=typeof n=="object"?{...n}:n;if(typeof o!="object"&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),typeof o=="object"&&(o={...o}),o||(o={}),e==null)return"";typeof e=="function"&&(e=Fs(e,{...this.options,...o})),Array.isArray(e)||(e=[String(e)]),e=e.map(te=>typeof te=="function"?Fs(te,{...this.options,...o}):String(te));const u=o.returnDetails!==void 0?o.returnDetails:this.options.returnDetails,c=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,{key:d,namespaces:m}=this.extractFromKey(e[e.length-1],o),h=m[m.length-1];let v=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;v===void 0&&(v=":");const g=o.lng||this.language,_=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(g?.toLowerCase()==="cimode")return _?u?{res:`${h}${v}${d}`,usedKey:d,exactUsedKey:d,usedLng:g,usedNS:h,usedParams:this.getUsedParamsDetails(o)}:`${h}${v}${d}`:u?{res:d,usedKey:d,exactUsedKey:d,usedLng:g,usedNS:h,usedParams:this.getUsedParamsDetails(o)}:d;const E=this.resolve(e,o);let M=E?.res;const b=E?.usedKey||d,y=E?.exactUsedKey||d,x=["[object Number]","[object Function]","[object RegExp]"],U=o.joinArrays!==void 0?o.joinArrays:this.options.joinArrays,L=!this.i18nFormat||this.i18nFormat.handleAsObject,D=o.count!==void 0&&!at(o.count),I=lc.hasDefaultValue(o),V=D?this.pluralResolver.getSuffix(g,o.count,o):"",F=o.ordinal&&D?this.pluralResolver.getSuffix(g,o.count,{ordinal:!1}):"",X=D&&!o.ordinal&&o.count===0,w=X&&o[`defaultValue${this.options.pluralSeparator}zero`]||o[`defaultValue${V}`]||o[`defaultValue${F}`]||o.defaultValue;let C=M;L&&!M&&I&&(C=w);const P=fh(C),re=Object.prototype.toString.apply(C);if(L&&C&&P&&!x.includes(re)&&!(at(U)&&Array.isArray(C))){if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const te=this.options.returnedObjectHandler?this.options.returnedObjectHandler(b,C,{...o,ns:m}):`key '${d} (${this.language})' returned an object instead of string.`;return u?(E.res=te,E.usedParams=this.getUsedParamsDetails(o),E):te}if(c){const te=Array.isArray(C),se=te?[]:{},ce=te?y:b;for(const z in C)if(Object.prototype.hasOwnProperty.call(C,z)){const W=`${ce}${c}${z}`;I&&!M?se[z]=this.translate(W,{...o,defaultValue:fh(w)?w[z]:void 0,joinArrays:!1,ns:m}):se[z]=this.translate(W,{...o,joinArrays:!1,ns:m}),se[z]===W&&(se[z]=C[z])}M=se}}else if(L&&at(U)&&Array.isArray(M))M=M.join(U),M&&(M=this.extendTranslation(M,e,o,a));else{let te=!1,se=!1;!this.isValidLookup(M)&&I&&(te=!0,M=w),this.isValidLookup(M)||(se=!0,M=d);const z=(o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&se?void 0:M,W=I&&w!==M&&this.options.updateMissing;if(se||te||W){if(this.logger.log(W?"updateKey":"missingKey",g,h,d,W?w:M),c){const N=this.resolve(d,{...o,keySeparator:!1});N&&N.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Y=[];const Se=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Se&&Se[0])for(let N=0;N<Se.length;N++)Y.push(Se[N]);else this.options.saveMissingTo==="all"?Y=this.languageUtils.toResolveHierarchy(o.lng||this.language):Y.push(o.lng||this.language);const be=(N,Q,ye)=>{const Ae=I&&ye!==M?ye:z;this.options.missingKeyHandler?this.options.missingKeyHandler(N,h,Q,Ae,W,o):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(N,h,Q,Ae,W,o),this.emit("missingKey",N,h,Q,M)};this.options.saveMissing&&(this.options.saveMissingPlurals&&D?Y.forEach(N=>{const Q=this.pluralResolver.getSuffixes(N,o);X&&o[`defaultValue${this.options.pluralSeparator}zero`]&&!Q.includes(`${this.options.pluralSeparator}zero`)&&Q.push(`${this.options.pluralSeparator}zero`),Q.forEach(ye=>{be([N],d+ye,o[`defaultValue${ye}`]||w)})}):be(Y,d,w))}M=this.extendTranslation(M,e,o,E,a),se&&M===d&&this.options.appendNamespaceToMissingKey&&(M=`${h}${v}${d}`),(se||te)&&this.options.parseMissingKeyHandler&&(M=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}${v}${d}`:d,te?M:void 0,o))}return u?(E.res=M,E.usedParams=this.getUsedParamsDetails(o),E):M}extendTranslation(e,n,a,o,u){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const m=at(e)&&(a?.interpolation?.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(m){const g=e.match(this.interpolator.nestingRegexp);h=g&&g.length}let v=a.replace&&!at(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(v={...this.options.interpolation.defaultVariables,...v}),e=this.interpolator.interpolate(e,v,a.lng||this.language||o.usedLng,a),m){const g=e.match(this.interpolator.nestingRegexp),_=g&&g.length;h<_&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(e=this.interpolator.nest(e,(...g)=>u?.[0]===g[0]&&!a.context?(this.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`),null):this.translate(...g,n),a)),a.interpolation&&this.interpolator.reset()}const c=a.postProcess||this.options.postProcess,d=at(c)?[c]:c;return e!=null&&d?.length&&a.applyPostProcessor!==!1&&(e=Hx.handle(d,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),e}resolve(e,n={}){let a,o,u,c,d;return at(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(m=>typeof m=="function"?Fs(m,{...this.options,...n}):m)),e.forEach(m=>{if(this.isValidLookup(a))return;const h=this.extractFromKey(m,n),v=h.key;o=v;let g=h.namespaces;this.options.fallbackNS&&(g=g.concat(this.options.fallbackNS));const _=n.count!==void 0&&!at(n.count),E=_&&!n.ordinal&&n.count===0,M=n.context!==void 0&&(at(n.context)||typeof n.context=="number")&&n.context!=="",b=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);g.forEach(y=>{this.isValidLookup(a)||(d=y,!this.checkedLoadedFor[`${b[0]}-${y}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(d)&&(this.checkedLoadedFor[`${b[0]}-${y}`]=!0,this.logger.warn(`key "${o}" for languages "${b.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),b.forEach(x=>{if(this.isValidLookup(a))return;c=x;const U=[v];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(U,v,x,y,n);else{let D;_&&(D=this.pluralResolver.getSuffix(x,n.count,n));const I=`${this.options.pluralSeparator}zero`,V=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(_&&(n.ordinal&&D.startsWith(V)&&U.push(v+D.replace(V,this.options.pluralSeparator)),U.push(v+D),E&&U.push(v+I)),M){const F=`${v}${this.options.contextSeparator||"_"}${n.context}`;U.push(F),_&&(n.ordinal&&D.startsWith(V)&&U.push(F+D.replace(V,this.options.pluralSeparator)),U.push(F+D),E&&U.push(F+I))}}let L;for(;L=U.pop();)this.isValidLookup(a)||(u=L,a=this.getResource(x,y,L,n))}))})}),{res:a,usedKey:o,exactUsedKey:u,usedLng:c,usedNS:d}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,a,o={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,n,a,o):this.resourceStore.getResource(e,n,a,o)}getUsedParamsDetails(e={}){const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=e.replace&&!at(e.replace);let o=a?e.replace:e;if(a&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const u of n)delete o[u]}return o}static hasDefaultValue(e){const n="defaultValue";for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&a.startsWith(n)&&e[a]!==void 0)return!0;return!1}}class C0{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Bi.create("languageUtils")}getScriptPartFromCode(e){if(e=il(e),!e||!e.includes("-"))return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=il(e),!e||!e.includes("-"))return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(at(e)&&e.includes("-")){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(a=>{if(n)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&e.forEach(a=>{if(n)return;const o=this.getScriptPartFromCode(a);if(this.isSupportedCode(o))return n=o;const u=this.getLanguagePartFromCode(a);if(this.isSupportedCode(u))return n=u;n=this.options.supportedLngs.find(c=>c===u?!0:!c.includes("-")&&!u.includes("-")?!1:!!(c.includes("-")&&!u.includes("-")&&c.slice(0,c.indexOf("-"))===u||c.startsWith(u)&&u.length>1))}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),at(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let a=e[n];return a||(a=e[this.getScriptPartFromCode(n)]),a||(a=e[this.formatLanguageCode(n)]),a||(a=e[this.getLanguagePartFromCode(n)]),a||(a=e.default),a||[]}toResolveHierarchy(e,n){const a=this.getFallbackCodes((n===!1?[]:n)||this.options.fallbackLng||[],e),o=[],u=c=>{c&&(this.isSupportedCode(c)?o.push(c):this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`))};return at(e)&&(e.includes("-")||e.includes("_"))?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(e))):at(e)&&u(this.formatLanguageCode(e)),a.forEach(c=>{o.includes(c)||u(this.formatLanguageCode(c))}),o}}const w0={zero:0,one:1,two:2,few:3,many:4,other:5},D0={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Ow{constructor(e,n={}){this.languageUtils=e,this.options=n,this.logger=Bi.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,n={}){const a=il(e==="dev"?"en":e),o=n.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:a,type:o});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let c;try{c=new Intl.PluralRules(a,{type:o})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),D0;if(!e.match(/-|_/))return D0;const m=this.languageUtils.getLanguagePartFromCode(e);c=this.getRule(m,n)}return this.pluralRulesCache[u]=c,c}needsPlural(e,n={}){let a=this.getRule(e,n);return a||(a=this.getRule("dev",n)),a?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,n,a={}){return this.getSuffixes(e,a).map(o=>`${n}${o}`)}getSuffixes(e,n={}){let a=this.getRule(e,n);return a||(a=this.getRule("dev",n)),a?a.resolvedOptions().pluralCategories.sort((o,u)=>w0[o]-w0[u]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,n,a={}){const o=this.getRule(e,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",n,a))}}const L0=(r,e,n,a=".",o=!0)=>{let u=Tw(r,e,n);return!u&&o&&at(n)&&(u=lp(r,n,a),u===void 0&&(u=lp(e,n,a))),u},dh=r=>r.replace(/\$/g,"$$$$");class U0{constructor(e={}){this.logger=Bi.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(n=>n),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:a,useRawValueToEscape:o,prefix:u,prefixEscaped:c,suffix:d,suffixEscaped:m,formatSeparator:h,unescapeSuffix:v,unescapePrefix:g,nestingPrefix:_,nestingPrefixEscaped:E,nestingSuffix:M,nestingSuffixEscaped:b,nestingOptionsSeparator:y,maxReplaces:x,alwaysFormat:U}=e.interpolation;this.escape=n!==void 0?n:Rw,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=u?Ar(u):c||"{{",this.suffix=d?Ar(d):m||"}}",this.formatSeparator=h||",",this.unescapePrefix=v?"":g||"-",this.unescapeSuffix=this.unescapePrefix?"":v||"",this.nestingPrefix=_?Ar(_):E||Ar("$t("),this.nestingSuffix=M?Ar(M):b||Ar(")"),this.nestingOptionsSeparator=y||",",this.maxReplaces=x||1e3,this.alwaysFormat=U!==void 0?U:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,a)=>n?.source===a?(n.lastIndex=0,n):new RegExp(a,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,n,a,o){let u,c,d;const m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=E=>{if(!E.includes(this.formatSeparator)){const x=L0(n,m,E,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(x,void 0,a,{...o,...n,interpolationkey:E}):x}const M=E.split(this.formatSeparator),b=M.shift().trim(),y=M.join(this.formatSeparator).trim();return this.format(L0(n,m,b,this.options.keySeparator,this.options.ignoreJSONStructure),y,a,{...o,...n,interpolationkey:b})};this.resetRegExp();const v=o?.missingInterpolationHandler||this.options.missingInterpolationHandler,g=o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:E=>dh(E)},{regex:this.regexp,safeValue:E=>this.escapeValue?dh(this.escape(E)):dh(E)}].forEach(E=>{for(d=0;u=E.regex.exec(e);){const M=u[1].trim();if(c=h(M),c===void 0)if(typeof v=="function"){const y=v(e,u,o);c=at(y)?y:""}else if(o&&Object.prototype.hasOwnProperty.call(o,M))c="";else if(g){c=u[0];continue}else this.logger.warn(`missed to pass in variable ${M} for interpolating ${e}`),c="";else!at(c)&&!this.useRawValueToEscape&&(c=M0(c));const b=E.safeValue(c);if(e=e.replace(u[0],b),g?(E.regex.lastIndex+=c.length,E.regex.lastIndex-=u[0].length):E.regex.lastIndex=0,d++,d>=this.maxReplaces)break}}),e}nest(e,n,a={}){let o,u,c;const d=(m,h)=>{const v=this.nestingOptionsSeparator;if(!m.includes(v))return m;const g=m.split(new RegExp(`${Ar(v)}[ ]*{`));let _=`{${g[1]}`;m=g[0],_=this.interpolate(_,c);const E=_.match(/'/g),M=_.match(/"/g);((E?.length??0)%2===0&&!M||(M?.length??0)%2!==0)&&(_=_.replace(/'/g,'"'));try{c=JSON.parse(_),h&&(c={...h,...c})}catch(b){return this.logger.warn(`failed parsing options string in nesting for key ${m}`,b),`${m}${v}${_}`}return c.defaultValue&&c.defaultValue.includes(this.prefix)&&delete c.defaultValue,m};for(;o=this.nestingRegexp.exec(e);){let m=[];c={...a},c=c.replace&&!at(c.replace)?c.replace:c,c.applyPostProcessor=!1,delete c.defaultValue;const h=/{.*}/.test(o[1])?o[1].lastIndexOf("}")+1:o[1].indexOf(this.formatSeparator);if(h!==-1&&(m=o[1].slice(h).split(this.formatSeparator).map(v=>v.trim()).filter(Boolean),o[1]=o[1].slice(0,h)),u=n(d.call(this,o[1].trim(),c),c),u&&o[0]===e&&!at(u))return u;at(u)||(u=M0(u)),u||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),u=""),m.length&&(u=m.reduce((v,g)=>this.format(v,g,a.lng,{...a,interpolationkey:o[1].trim()}),u.trim())),e=e.replace(o[0],u),this.regexp.lastIndex=0}return e}}const Pw=r=>{let e=r.toLowerCase().trim();const n={};if(r.includes("(")){const a=r.split("(");e=a[0].toLowerCase().trim();const o=a[1].slice(0,-1);e==="currency"&&!o.includes(":")?n.currency||(n.currency=o.trim()):e==="relativetime"&&!o.includes(":")?n.range||(n.range=o.trim()):o.split(";").forEach(c=>{if(c){const[d,...m]=c.split(":"),h=m.join(":").trim().replace(/^'+|'+$/g,""),v=d.trim();n[v]||(n[v]=h),h==="false"&&(n[v]=!1),h==="true"&&(n[v]=!0),isNaN(h)||(n[v]=parseInt(h,10))}})}return{formatName:e,formatOptions:n}},N0=r=>{const e={};return(n,a,o)=>{let u=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(u={...u,[o.interpolationkey]:void 0});const c=a+JSON.stringify(u);let d=e[c];return d||(d=r(il(a),o),e[c]=d),d(n)}},zw=r=>(e,n,a)=>r(il(n),a)(e);class Fw{constructor(e={}){this.logger=Bi.create("formatter"),this.options=e,this.init(e)}init(e,n={interpolation:{}}){this.formatSeparator=n.interpolation.formatSeparator||",";const a=n.cacheInBuiltFormats?N0:zw;this.formats={number:a((o,u)=>{const c=new Intl.NumberFormat(o,{...u});return d=>c.format(d)}),currency:a((o,u)=>{const c=new Intl.NumberFormat(o,{...u,style:"currency"});return d=>c.format(d)}),datetime:a((o,u)=>{const c=new Intl.DateTimeFormat(o,{...u});return d=>c.format(d)}),relativetime:a((o,u)=>{const c=new Intl.RelativeTimeFormat(o,{...u});return d=>c.format(d,u.range||"day")}),list:a((o,u)=>{const c=new Intl.ListFormat(o,{...u});return d=>c.format(d)})}}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=N0(n)}format(e,n,a,o={}){if(!n||e==null)return e;const u=n.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&!u[0].includes(")")&&u.find(d=>d.includes(")"))){const d=u.findIndex(m=>m.includes(")"));u[0]=[u[0],...u.splice(1,d)].join(this.formatSeparator)}return u.reduce((d,m)=>{const{formatName:h,formatOptions:v}=Pw(m);if(this.formats[h]){let g=d;try{const _=o?.formatParams?.[o.interpolationkey]||{},E=_.locale||_.lng||o.locale||o.lng||a;g=this.formats[h](d,E,{...v,...o,..._})}catch(_){this.logger.warn(_)}return g}else this.logger.warn(`there was no format function for ${h}`);return d},e)}}const Bw=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class Iw extends mc{constructor(e,n,a,o={}){super(),this.backend=e,this.store=n,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=Bi.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(a,o.backend,o)}queueLoad(e,n,a,o){const u={},c={},d={},m={};return e.forEach(h=>{let v=!0;n.forEach(g=>{const _=`${h}|${g}`;!a.reload&&this.store.hasResourceBundle(h,g)?this.state[_]=2:this.state[_]<0||(this.state[_]===1?c[_]===void 0&&(c[_]=!0):(this.state[_]=1,v=!1,c[_]===void 0&&(c[_]=!0),u[_]===void 0&&(u[_]=!0),m[g]===void 0&&(m[g]=!0)))}),v||(d[h]=!0)}),(Object.keys(u).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(u),pending:Object.keys(c),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(m)}}loaded(e,n,a){const o=e.split("|"),u=o[0],c=o[1];n&&this.emit("failedLoading",u,c,n),!n&&a&&this.store.addResourceBundle(u,c,a,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&a&&(this.state[e]=0);const d={};this.queue.forEach(m=>{bw(m.loaded,[u],c),Bw(m,e),n&&m.errors.push(n),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(h=>{d[h]||(d[h]={});const v=m.loaded[h];v.length&&v.forEach(g=>{d[h][g]===void 0&&(d[h][g]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",d),this.queue=this.queue.filter(m=>!m.done)}read(e,n,a,o=0,u=this.retryTimeout,c){if(!e.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:a,tried:o,wait:u,callback:c});return}this.readingCalls++;const d=(h,v)=>{if(this.readingCalls--,this.waitingReads.length>0){const g=this.waitingReads.shift();this.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(h&&v&&o<this.maxRetries){setTimeout(()=>{this.read(e,n,a,o+1,u*2,c)},u);return}c(h,v)},m=this.backend[a].bind(this.backend);if(m.length===2){try{const h=m(e,n);h&&typeof h.then=="function"?h.then(v=>d(null,v)).catch(d):d(null,h)}catch(h){d(h)}return}return m(e,n,d)}prepareLoading(e,n,a={},o){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();at(e)&&(e=this.languageUtils.toResolveHierarchy(e)),at(n)&&(n=[n]);const u=this.queueLoad(e,n,a,o);if(!u.toLoad.length)return u.pending.length||o(),null;u.toLoad.forEach(c=>{this.loadOne(c)})}load(e,n,a){this.prepareLoading(e,n,{},a)}reload(e,n,a){this.prepareLoading(e,n,{reload:!0},a)}loadOne(e,n=""){const a=e.split("|"),o=a[0],u=a[1];this.read(o,u,"read",void 0,void 0,(c,d)=>{c&&this.logger.warn(`${n}loading namespace ${u} for language ${o} failed`,c),!c&&d&&this.logger.log(`${n}loaded namespace ${u} for language ${o}`,d),this.loaded(e,c,d)})}saveMissing(e,n,a,o,u,c={},d=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${a}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if(this.backend?.create){const m={...c,isUpdate:u},h=this.backend.create.bind(this.backend);if(h.length<6)try{let v;h.length===5?v=h(e,n,a,o,m):v=h(e,n,a,o),v&&typeof v.then=="function"?v.then(g=>d(null,g)).catch(d):d(null,v)}catch(v){d(v)}else h(e,n,a,o,d,m)}!e||!e[0]||this.store.addResource(e[0],n,a,o)}}}const hh=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),at(r[1])&&(e.defaultValue=r[1]),at(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const n=r[3]||r[2];Object.keys(n).forEach(a=>{e[a]=n[a]})}return e},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),O0=r=>(at(r.ns)&&(r.ns=[r.ns]),at(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),at(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs&&!r.supportedLngs.includes("cimode")&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),r),Yu=()=>{},Hw=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(n=>{typeof r[n]=="function"&&(r[n]=r[n].bind(r))})};class Zo extends mc{constructor(e={},n){if(super(),this.options=O0(e),this.services={},this.logger=Bi,this.modules={external:[]},Hw(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(e={},n){this.isInitializing=!0,typeof e=="function"&&(n=e,e={}),e.defaultNS==null&&e.ns&&(at(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const a=hh();this.options={...a,...this.options,...O0(e)},this.options.interpolation={...a.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=a.overloadTranslationOptionHandler);const o=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?Bi.init(o(this.modules.logger),this.options):Bi.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:h=Fw;const v=new C0(this.options);this.store=new R0(this.options.resources,this.options);const g=this.services;g.logger=Bi,g.resourceStore=this.store,g.languageUtils=v,g.pluralResolver=new Ow(v,{prepend:this.options.pluralSeparator}),h&&(g.formatter=o(h),g.formatter.init&&g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new U0(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new Iw(o(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",(_,...E)=>{this.emit(_,...E)}),this.modules.languageDetector&&(g.languageDetector=o(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=o(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new lc(this.services,this.options),this.translator.on("*",(_,...E)=>{this.emit(_,...E)}),this.modules.external.forEach(_=>{_.init&&_.init(this)})}if(this.format=this.options.interpolation.format,n||(n=Yu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=(...v)=>this.store[h](...v)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=(...v)=>(this.store[h](...v),this)});const d=Yo(),m=()=>{const h=(v,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),d.resolve(g),n(v,g)};if(this.languages&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),d}loadResources(e,n=Yu){let a=n;const o=at(e)?e:this.language;if(typeof e=="function"&&(a=e),!this.options.resources||this.options.partialBundledLanguages){if(o?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const u=[],c=d=>{if(!d||d==="cimode")return;this.services.languageUtils.toResolveHierarchy(d).forEach(h=>{h!=="cimode"&&(u.includes(h)||u.push(h))})};o?c(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>c(m)),this.options.preload?.forEach?.(d=>c(d)),this.services.backendConnector.load(u,this.options.ns,d=>{!d&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(d)})}else a(null)}reloadResources(e,n,a){const o=Yo();return typeof e=="function"&&(a=e,e=void 0),typeof n=="function"&&(a=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),a||(a=Yu),this.services.backendConnector.reload(e,n,u=>{o.resolve(),a(u)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Hx.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!["cimode","dev"].includes(e)){for(let n=0;n<this.languages.length;n++){const a=this.languages[n];if(!["cimode","dev"].includes(a)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,n){this.isLanguageChangingTo=e;const a=Yo();this.emit("languageChanging",e);const o=d=>{this.language=d,this.languages=this.services.languageUtils.toResolveHierarchy(d),this.resolvedLanguage=void 0,this.setResolvedLanguage(d)},u=(d,m)=>{m?this.isLanguageChangingTo===e&&(o(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,a.resolve((...h)=>this.t(...h)),n&&n(d,(...h)=>this.t(...h))},c=d=>{!e&&!d&&this.services.languageDetector&&(d=[]);const m=at(d)?d:d&&d[0],h=this.store.hasLanguageSomeTranslations(m)?m:this.services.languageUtils.getBestMatchFromCodes(at(d)?[d]:d);h&&(this.language||o(h),this.translator.language||this.translator.changeLanguage(h),this.services.languageDetector?.cacheUserLanguage?.(h)),this.loadResources(h,v=>{u(v,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?c(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(c):this.services.languageDetector.detect(c):c(e),a}getFixedT(e,n,a){const o=(u,c,...d)=>{let m;typeof c!="object"?m=this.options.overloadTranslationOptionHandler([u,c].concat(d)):m={...c},m.lng=m.lng||o.lng,m.lngs=m.lngs||o.lngs,m.ns=m.ns||o.ns,m.keyPrefix!==""&&(m.keyPrefix=m.keyPrefix||a||o.keyPrefix);const h={...this.options,...m};typeof m.keyPrefix=="function"&&(m.keyPrefix=Fs(m.keyPrefix,h));const v=this.options.keySeparator||".";let g;return m.keyPrefix&&Array.isArray(u)?g=u.map(_=>(typeof _=="function"&&(_=Fs(_,h)),`${m.keyPrefix}${v}${_}`)):(typeof u=="function"&&(u=Fs(u,h)),g=m.keyPrefix?`${m.keyPrefix}${v}${u}`:u),this.t(g,m)};return at(e)?o.lng=e:o.lngs=e,o.ns=n,o.keyPrefix=a,o}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,n={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const c=(d,m)=>{const h=this.services.backendConnector.state[`${d}|${m}`];return h===-1||h===0||h===2};if(n.precheck){const d=n.precheck(this,c);if(d!==void 0)return d}return!!(this.hasResourceBundle(a,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||c(a,e)&&(!o||c(u,e)))}loadNamespaces(e,n){const a=Yo();return this.options.ns?(at(e)&&(e=[e]),e.forEach(o=>{this.options.ns.includes(o)||this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),n&&n(o)}),a):(n&&n(),Promise.resolve())}loadLanguages(e,n){const a=Yo();at(e)&&(e=[e]);const o=this.options.preload||[],u=e.filter(c=>!o.includes(c)&&this.services.languageUtils.isSupportedCode(c));return u.length?(this.options.preload=o.concat(u),this.loadResources(c=>{a.resolve(),n&&n(c)}),a):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const o=new Intl.Locale(e);if(o&&o.getTextInfo){const u=o.getTextInfo();if(u&&u.direction)return u.direction}}catch{}const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=this.services?.languageUtils||new C0(hh());return e.toLowerCase().indexOf("-latn")>1?"ltr":n.includes(a.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},n){const a=new Zo(e,n);return a.createInstance=Zo.createInstance,a}cloneInstance(e={},n=Yu){const a=e.forkResourceStore;a&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},u=new Zo(o);if((e.debug!==void 0||e.prefix!==void 0)&&(u.logger=u.logger.clone(e)),["store","services","language"].forEach(d=>{u[d]=this[d]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},a){const d=Object.keys(this.store.data).reduce((m,h)=>(m[h]={...this.store.data[h]},m[h]=Object.keys(m[h]).reduce((v,g)=>(v[g]={...m[h][g]},v),m[h]),m),{});u.store=new R0(d,o),u.services.resourceStore=u.store}if(e.interpolation){const m={...hh().interpolation,...this.options.interpolation,...e.interpolation},h={...o,interpolation:m};u.services.interpolator=new U0(h)}return u.translator=new lc(u.services,o),u.translator.on("*",(d,...m)=>{u.emit(d,...m)}),u.init(o,n),u.translator.options=o,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const mn=Zo.createInstance();mn.createInstance;mn.dir;mn.init;mn.loadResources;mn.reloadResources;mn.use;mn.changeLanguage;mn.getFixedT;mn.t;mn.exists;mn.setDefaultNamespace;mn.hasLoadedNamespace;mn.loadNamespaces;mn.loadLanguages;const Vw=(r,e,n,a)=>{const o=[n,{code:e,...a||{}}];if(r?.services?.logger?.forward)return r.services.logger.forward(o,"warn","react-i18next::",!0);Or(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),r?.services?.logger?.warn?r.services.logger.warn(...o):console?.warn&&console.warn(...o)},P0={},up=(r,e,n,a)=>{Or(n)&&P0[n]||(Or(n)&&(P0[n]=new Date),Vw(r,e,n,a))},Gx=(r,e)=>()=>{if(r.isInitialized)e();else{const n=()=>{setTimeout(()=>{r.off("initialized",n)},0),e()};r.on("initialized",n)}},cp=(r,e,n)=>{r.loadNamespaces(e,Gx(r,n))},z0=(r,e,n,a)=>{if(Or(n)&&(n=[n]),r.options.preload&&r.options.preload.indexOf(e)>-1)return cp(r,n,a);n.forEach(o=>{r.options.ns.indexOf(o)<0&&r.options.ns.push(o)}),r.loadLanguages(e,Gx(r,a))},Gw=(r,e,n={})=>!e.languages||!e.languages.length?(up(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(r,{lng:n.lng,precheck:(a,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,r))return!1}}),Or=r=>typeof r=="string",kw=r=>typeof r=="object"&&r!==null,Xw=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Ww={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},qw=r=>Ww[r],Yw=r=>r.replace(Xw,qw);let fp={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Yw,transDefaultProps:void 0};const jw=(r={})=>{fp={...fp,...r}},Kw=()=>fp;let kx;const Zw=r=>{kx=r},Qw=()=>kx,Jw={type:"3rdParty",init(r){jw(r.options.react),Zw(r)}},$w=ue.createContext();class e2{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var ph={exports:{}},mh={};var F0;function t2(){if(F0)return mh;F0=1;var r=uc();function e(g,_){return g===_&&(g!==0||1/g===1/_)||g!==g&&_!==_}var n=typeof Object.is=="function"?Object.is:e,a=r.useState,o=r.useEffect,u=r.useLayoutEffect,c=r.useDebugValue;function d(g,_){var E=_(),M=a({inst:{value:E,getSnapshot:_}}),b=M[0].inst,y=M[1];return u(function(){b.value=E,b.getSnapshot=_,m(b)&&y({inst:b})},[g,E,_]),o(function(){return m(b)&&y({inst:b}),g(function(){m(b)&&y({inst:b})})},[g]),c(E),E}function m(g){var _=g.getSnapshot;g=g.value;try{var E=_();return!n(g,E)}catch{return!0}}function h(g,_){return _()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:d;return mh.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:v,mh}var B0;function n2(){return B0||(B0=1,ph.exports=t2()),ph.exports}var i2=n2();const a2=(r,e)=>{if(Or(e))return e;if(kw(e)&&Or(e.defaultValue))return e.defaultValue;if(typeof r=="function")return"";if(Array.isArray(r)){const n=r[r.length-1];return typeof n=="function"?"":n}return r},r2={t:a2,ready:!1},s2=()=>()=>{},Xx=(r,e={})=>{const{i18n:n}=e,{i18n:a,defaultNS:o}=ue.useContext($w)||{},u=n||a||Qw();u&&!u.reportNamespaces&&(u.reportNamespaces=new e2),u||up(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const c=ue.useMemo(()=>({...Kw(),...u?.options?.react,...e}),[u,e]),{useSuspense:d,keyPrefix:m}=c,h=o||u?.options?.defaultNS,v=Or(h)?[h]:h||["translation"],g=ue.useMemo(()=>v,v);u?.reportNamespaces?.addUsedNamespaces?.(g);const _=ue.useRef(0),E=ue.useCallback(w=>{if(!u)return s2;const{bindI18n:C,bindI18nStore:P}=c,re=()=>{_.current+=1,w()};return C&&u.on(C,re),P&&u.store.on(P,re),()=>{C&&C.split(" ").forEach(te=>u.off(te,re)),P&&P.split(" ").forEach(te=>u.store.off(te,re))}},[u,c]),M=ue.useRef(),b=ue.useCallback(()=>{if(!u)return r2;const w=!!(u.isInitialized||u.initializedStoreOnce)&&g.every(ce=>Gw(ce,u,c)),C=e.lng||u.language,P=_.current,re=M.current;if(re&&re.ready===w&&re.lng===C&&re.keyPrefix===m&&re.revision===P)return re;const se={t:u.getFixedT(C,c.nsMode==="fallback"?g:g[0],m),ready:w,lng:C,keyPrefix:m,revision:P};return M.current=se,se},[u,g,m,c,e.lng]),[y,x]=ue.useState(0),{t:U,ready:L}=i2.useSyncExternalStore(E,b,b);ue.useEffect(()=>{if(u&&!L&&!d){const w=()=>x(C=>C+1);e.lng?z0(u,e.lng,g,w):cp(u,g,w)}},[u,e.lng,g,L,d,y]);const D=u||{},I=ue.useRef(null),V=ue.useRef(),F=w=>{const C=Object.getOwnPropertyDescriptors(w);C.__original&&delete C.__original;const P=Object.create(Object.getPrototypeOf(w),C);if(!Object.prototype.hasOwnProperty.call(P,"__original"))try{Object.defineProperty(P,"__original",{value:w,writable:!1,enumerable:!1,configurable:!1})}catch{}return P},X=ue.useMemo(()=>{const w=D,C=w?.language;let P=w;w&&(I.current&&I.current.__original===w?V.current!==C?(P=F(w),I.current=P,V.current=C):P=I.current:(P=F(w),I.current=P,V.current=C));const re=!L&&!d?(...se)=>(up(u,"USE_T_BEFORE_READY","useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."),U(...se)):U,te=[re,P,L];return te.t=re,te.i18n=P,te.ready=L,te},[U,D,L,D.resolvedLanguage,D.language,D.languages]);if(u&&d&&!L)throw new Promise(w=>{const C=()=>w();e.lng?z0(u,e.lng,g,C):cp(u,g,C)});return X};function o2(r){return{filename:`flowspace-${new Date().toISOString().slice(0,10)}.txt`,content:r,mimeType:"text/plain;charset=utf-8"}}const l2=r=>({setUserActive:e=>r(()=>({isUserActive:e})),setLastInteractionAt:e=>r(()=>({lastInteractionAt:e})),setControlPanelOpen:e=>r(()=>({isControlPanelOpen:e})),setTopHoverActive:e=>r(()=>({isTopHoverActive:e})),setHoveredZone:e=>r(()=>({hoveredZone:e}))}),u2=()=>({...uw,setUserActive:()=>{},setLastInteractionAt:()=>{},setControlPanelOpen:()=>{},setTopHoverActive:()=>{},setHoveredZone:()=>{}}),ks=zx()(r=>({...u2(),...l2(r)}));typeof window<"u"&&window.addEventListener("ambient:test-set-inactive",()=>{ks.getState().setUserActive(!1)});function ju({label:r,value:e,onChange:n}){return Je.jsxs("label",{className:"flex flex-col gap-2 text-xs text-white/65",children:[Je.jsx("span",{children:r}),Je.jsx("input",{"aria-label":r,type:"range",min:"0",max:"1",step:"0.01",value:e,onChange:a=>n(Number(a.target.value))})]})}function c2(){const{t:r,i18n:e}=Xx(),n=ks(b=>b.isControlPanelOpen),a=ks(b=>b.setControlPanelOpen),o=ue.useRef(null),u=pn(b=>b.content),c=pn(b=>b.precipitationAmount),d=pn(b=>b.blur),m=pn(b=>b.whiteNoiseVolume),h=pn(b=>b.musicMix),v=pn(b=>b.setPrecipitationAmount),g=pn(b=>b.setBlur),_=pn(b=>b.setWhiteNoiseVolume),E=pn(b=>b.setMusicMix),M=o2(u);return ue.useEffect(()=>{if(!n)return;const b=y=>{o.current&&!o.current.contains(y.target)&&a(!1)};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[n,a]),Je.jsxs("div",{className:"fixed bottom-8 left-1/2 z-30 -translate-x-1/2",children:[Je.jsx("button",{type:"button",className:"flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 backdrop-blur-xl transition-colors hover:bg-white/10 hover:text-white","aria-label":"打开设置",onClick:()=>a(!n),children:Je.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Je.jsx("circle",{cx:"12",cy:"12",r:"3"}),Je.jsx("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]})}),n&&Je.jsxs("div",{ref:o,"data-testid":"floating-control-panel",className:"absolute bottom-14 left-1/2 min-w-[18rem] -translate-x-1/2 rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/70 backdrop-blur-2xl",children:[Je.jsx("div",{className:"mb-3",children:r("controls.mixer")}),Je.jsxs("div",{className:"space-y-3",children:[Je.jsx(ju,{label:r("controls.precipitation"),value:c,onChange:v}),Je.jsx(ju,{label:r("controls.blur"),value:d,onChange:g}),Je.jsx(ju,{label:r("controls.whiteNoise"),value:m,onChange:_}),Je.jsx(ju,{label:r("controls.musicMix"),value:h,onChange:E})]}),Je.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-white/10 pt-3",children:[Je.jsx("span",{className:"text-xs text-white/65",children:r("language.switch")}),Je.jsxs("div",{className:"flex gap-2",children:[Je.jsx("button",{type:"button",className:`rounded-full px-2 py-1 text-xs transition-colors ${e.language==="en"?"bg-white/20 text-white":"text-white/50 hover:text-white"}`,onClick:()=>e.changeLanguage("en"),children:"EN"}),Je.jsx("button",{type:"button",className:`rounded-full px-2 py-1 text-xs transition-colors ${e.language==="zh"?"bg-white/20 text-white":"text-white/50 hover:text-white"}`,onClick:()=>e.changeLanguage("zh"),children:"中文"})]})]}),Je.jsx("button",{type:"button","aria-label":"导出当前文本",className:"mt-4 rounded-full border border-white/10 px-3 py-1",children:r("controls.export")}),Je.jsx("div",{"data-testid":"export-status",className:"mt-2 text-xs text-white/45",children:M.filename})]})]})}function f2(){const r=ks(o=>o.isTopHoverActive),e=ks(o=>o.setTopHoverActive),n=pn(o=>o.mode),a=pn(o=>o.setMode);return Je.jsxs("div",{className:"fixed inset-x-0 top-0 z-30",children:[Je.jsx("div",{"data-testid":"mode-switcher-hotzone",className:"h-[50px] w-full",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1)}),Je.jsxs("div",{"data-testid":"mode-switcher","data-revealed":String(r),className:"pointer-events-none absolute inset-x-0 top-3 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-white/70",children:[Je.jsx("button",{type:"button",className:"pointer-events-auto","aria-pressed":n==="rain",onClick:()=>a("rain"),children:"Rain"}),Je.jsx("button",{type:"button",className:"pointer-events-auto","aria-pressed":n==="snow","aria-label":"切换到 Snow 模式",onClick:()=>a("snow"),children:"Snow"})]})]})}const Wx=[{id:"sans",label:"Sans",buttonLabel:"切换到 Sans 字体",className:"font-sans"},{id:"serif",label:"Serif",buttonLabel:"切换到 Serif 字体",className:"font-serif"},{id:"mono",label:"Mono",buttonLabel:"切换到 Mono 字体",className:"font-mono"}];function d2(){const r=pn(n=>n.font),e=pn(n=>n.setFont);return Je.jsx("div",{className:"flex items-center gap-2","aria-label":"字体切换器",children:Wx.map(n=>Je.jsxs("button",{type:"button","aria-pressed":r===n.id,className:"rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 transition hover:text-white",onClick:()=>e(n.id),children:[Je.jsx("span",{className:"sr-only",children:n.buttonLabel}),n.label]},n.id))})}function h2(){const{t:r}=Xx(),e=pn(u=>u.content),n=pn(u=>u.font),a=pn(u=>u.setContent),o=Wx.find(u=>u.id===n);return Je.jsxs("section",{className:"mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl",children:[Je.jsxs("div",{className:"flex items-center justify-between gap-4",children:[Je.jsx("span",{className:"text-xs uppercase tracking-[0.4em] text-white/40",children:"The Deck"}),Je.jsx(d2,{})]}),Je.jsx("textarea",{value:e,placeholder:r("editor.placeholder"),"data-font":n,spellCheck:!1,className:`min-h-[24rem] w-full resize-none bg-transparent text-lg leading-8 text-white/80 outline-none placeholder:text-white/20 ${o?.className??"font-sans"}`,onChange:u=>a(u.target.value)})]})}function p2({children:r}){const e=ks(n=>n.isUserActive);return Je.jsx("div",{"data-testid":"inactivity-fade-layer","data-active":String(e),style:{opacity:e?1:.06},className:"transition-opacity duration-700",children:r})}function m2({className:r=""}){return ue.useEffect(()=>{const e=op(),n=()=>{e.enableFromUserGesture()};document.addEventListener("click",n,{once:!0}),document.addEventListener("keydown",n,{once:!0});const a=()=>{e.activate()};return document.addEventListener("click",a),document.addEventListener("keydown",a),()=>{document.removeEventListener("click",n),document.removeEventListener("keydown",n),document.removeEventListener("click",a),document.removeEventListener("keydown",a)}},[]),Je.jsxs("main",{"data-testid":"app-shell",className:`relative min-h-screen w-full overflow-hidden bg-stone-950 text-stone-100 ${r}`.trim(),children:[Je.jsx(yw,{}),Je.jsx(f2,{}),Je.jsxs(p2,{children:[Je.jsx("div",{className:"relative z-10 flex min-h-screen items-center justify-center px-6 py-16",children:Je.jsx("div",{className:"w-full max-w-5xl",children:Je.jsx(h2,{})})}),Je.jsx(c2,{})]})]})}const g2={title:"Flow Space",subtitle:"Immersive Writing Environment"},v2={openSettings:"Settings",mixer:"Mixer",precipitation:"Precipitation",blur:"Blur",whiteNoise:"White Noise",musicMix:"Music Mix",export:"Export .txt"},_2={rain:"Rain",snow:"Snow"},x2={placeholder:"Start writing..."},S2={switch:"Language",en:"English",zh:"中文"},y2={app:g2,controls:v2,modes:_2,editor:x2,language:S2},E2={title:"Flow Space",subtitle:"沉浸式写作环境"},M2={openSettings:"设置",mixer:"混音器",precipitation:"雨雪强度",blur:"背景模糊",whiteNoise:"白噪音",musicMix:"音乐融合",export:"导出 .txt"},b2={rain:"雨",snow:"雪"},T2={placeholder:"开始写作..."},A2={switch:"语言",en:"English",zh:"中文"},R2={app:E2,controls:M2,modes:b2,editor:T2,language:A2},C2={en:{translation:y2},zh:{translation:R2}},w2=()=>navigator.language.toLowerCase().startsWith("zh")?"zh":"en";mn.use(Jw).init({resources:C2,lng:w2(),fallbackLng:"en",interpolation:{escapeValue:!1}});function I0(){const r=Sa();return ue.useEffect(()=>{r.pathname.startsWith("/en")?mn.language!=="en"&&mn.changeLanguage("en"):mn.language!=="zh"&&mn.changeLanguage("zh")},[r]),Je.jsx(m2,{})}const qx=document.getElementById("root");if(!qx)throw new Error("Root element #root was not found");lE.createRoot(qx).render(Je.jsx(ue.StrictMode,{children:Je.jsx(DM,{children:Je.jsxs(sM,{children:[Je.jsx(vh,{path:"/",element:Je.jsx(I0,{})}),Je.jsx(vh,{path:"/en",element:Je.jsx(I0,{})})]})})}));
