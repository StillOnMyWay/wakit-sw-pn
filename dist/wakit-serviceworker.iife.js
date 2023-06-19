var WAKITServiceWorker=function(O){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=window,N=P.ShadowRoot&&(P.ShadyCSS===void 0||P.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Y=new WeakMap;let at=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(N&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Y.set(e,t))}return t}toString(){return this.cssText}};const ct=r=>new at(typeof r=="string"?r:r+"",void 0,J),dt=(r,t)=>{N?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=P.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},K=N?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ct(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const k=window,X=k.trustedTypes,ut=X?X.emptyScript:"",q=k.reactiveElementPolyfillSupport,W={toAttribute(r,t){switch(t){case Boolean:r=r?ut:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},F=(r,t)=>t!==r&&(t==t||r==r),z={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:F};let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(K(s))}else t!==void 0&&e.push(K(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return dt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=z){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:W).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=s.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:W;this._$El=o,this[o]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||F)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},q==null||q({ReactiveElement:g}),((L=k.reactiveElementVersions)!==null&&L!==void 0?L:k.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const R=window,f=R.trustedTypes,G=f?f.createPolicy("lit-html",{createHTML:r=>r}):void 0,B="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,Q="?"+$,pt=`<${Q}>`,A=document,b=()=>A.createComment(""),E=r=>r===null||typeof r!="object"&&typeof r!="function",tt=Array.isArray,vt=r=>tt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",I=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,it=/>/g,_=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,rt=/"/g,nt=/^(?:script|style|textarea|title)$/i,$t=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),_t=$t(1),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ot=new WeakMap,m=A.createTreeWalker(A,129,null,!1),gt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=w;for(let l=0;l<e;l++){const h=r[l];let v,a,d=-1,p=0;for(;p<h.length&&(n.lastIndex=p,a=n.exec(h),a!==null);)p=n.lastIndex,n===w?a[1]==="!--"?n=et:a[1]!==void 0?n=it:a[2]!==void 0?(nt.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=_):a[3]!==void 0&&(n=_):n===_?a[0]===">"?(n=s??w,d=-1):a[1]===void 0?d=-2:(d=n.lastIndex-a[2].length,v=a[1],n=a[3]===void 0?_:a[3]==='"'?rt:st):n===rt||n===st?n=_:n===et||n===it?n=w:(n=_,s=void 0);const M=n===_&&r[l+1].startsWith("/>")?" ":"";o+=n===w?h+pt:d>=0?(i.push(v),h.slice(0,d)+B+h.slice(d)+$+M):h+$+(d===-2?(i.push(void 0),l):M)}const c=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[G!==void 0?G.createHTML(c):c,i]};class C{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const c=t.length-1,l=this.parts,[h,v]=gt(t,e);if(this.el=C.createElement(h,i),m.currentNode=this.el.content,e===2){const a=this.el.content,d=a.firstChild;d.remove(),a.append(...d.childNodes)}for(;(s=m.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const d of s.getAttributeNames())if(d.endsWith(B)||d.startsWith($)){const p=v[n++];if(a.push(d),p!==void 0){const M=s.getAttribute(p.toLowerCase()+B).split($),T=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:T[2],strings:M,ctor:T[1]==="."?At:T[1]==="?"?mt:T[1]==="@"?St:H})}else l.push({type:6,index:o})}for(const d of a)s.removeAttribute(d)}if(nt.test(s.tagName)){const a=s.textContent.split($),d=a.length-1;if(d>0){s.textContent=f?f.emptyScript:"";for(let p=0;p<d;p++)s.append(a[p],b()),m.nextNode(),l.push({type:2,index:++o});s.append(a[d],b())}}}else if(s.nodeType===8)if(s.data===Q)l.push({type:2,index:o});else{let a=-1;for(;(a=s.data.indexOf($,a+1))!==-1;)l.push({type:7,index:o}),a+=$.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function S(r,t,e=r,i){var s,o,n,c;if(t===y)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=E(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,i)),i!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=S(r,l._$AS(r,t.values),l,i)),t}class ft{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);m.currentNode=o;let n=m.nextNode(),c=0,l=0,h=s[0];for(;h!==void 0;){if(c===h.index){let v;h.type===2?v=new U(n,n.nextSibling,this,t):h.type===1?v=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(v=new bt(n,this,t)),this._$AV.push(v),h=s[++l]}c!==(h==null?void 0:h.index)&&(n=m.nextNode(),c++)}return o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),E(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):vt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&E(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=C.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const n=new ft(o,this),c=n.u(this.options);n.v(i),this.$(c),this._$AH=n}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new C(t)),e}T(t){tt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new U(this.k(b()),this.k(b()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class H{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=S(this,t,e,0),n=!E(t)||t!==this._$AH&&t!==y,n&&(this._$AH=t);else{const c=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,c[i+l],e,l),h===y&&(h=this._$AH[l]),n||(n=!E(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class At extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const yt=f?f.emptyScript:"";class mt extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,yt):this.element.removeAttribute(this.name)}}class St extends H{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=S(this,t,e,0))!==null&&i!==void 0?i:u)===y)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class bt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const lt=R.litHtmlPolyfillSupport;lt==null||lt(C,U),((j=R.litHtmlVersions)!==null&&j!==void 0?j:R.litHtmlVersions=[]).push("2.7.3");const Et=(r,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new U(t.insertBefore(b(),c),c,void 0,e??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D,V;class x extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return y}}x.finalized=!0,x._$litElement$=!0,(D=globalThis.litElementHydrateSupport)===null||D===void 0||D.call(globalThis,{LitElement:x});const ht=globalThis.litElementPolyfillSupport;ht==null||ht({LitElement:x}),((V=globalThis.litElementVersions)!==null&&V!==void 0?V:globalThis.litElementVersions=[]).push("3.3.2");class Z extends x{constructor(){super(),this.name="Successful Render",console.log("Registering Service Worker..."),this.baseURL="aHR0cHM6Ly9kZXJyZWxsY2hyaXN0b3BoZXIuZWRpdG9yeC5pby8wb3A0b3YzY3ZraXY2cjBvbzMxMw==",this.registerServiceWorker(),this.swURL}render(){return _t`✔️`}async askPermission(){return new Promise(function(t,e){const i=Notification.requestPermission(function(s){t(s)});i&&i.then(t,e)}).then(function(t){if(t!=="granted")throw new Error("We weren't granted permission.")})}urlBase64ToUint8Array(t){for(var e="=".repeat((4-t.length%4)%4),i=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),s=window.atob(i),o=new Uint8Array(s.length),n=0;n<s.length;++n)o[n]=s.charCodeAt(n);return o}async registerServiceWorker(){if("serviceWorker"in navigator)try{if(console.log("Trying to register service worker"),navigator.userAgent.indexOf("Firefox")==-1&&window.location.ancestorOrigins[0]!=="https://editor.wix.com"){const t=await navigator.serviceWorker.register(this.swURL,{scope:"/"});if("PushManager"in window){const e=await this.askPermission();e&&console.log("perms",e);const i=t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:this.urlBase64ToUint8Array("BAUrxoOTkagpjWPaugdxK1jzozyMQY5N9LIcJYTIcyVpIsCyDa_ZiQosbJ7R1opulGrMr456JpLzkJFALXkUpkY")});console.log("My Subscription: ",i),(await fetch(`${atob(this.baseURL)}/_functions/addSubscription`,{method:"POST",mode:"no-cors",body:i})).ok&&console.log("Subscription Uploaded")}return t}else if(!(navigator.userAgent.indexOf("Firefox")>0))throw new Error("We don't register service workers from the editor")}catch(t){console.error("ServiceWorker registration failed. Sorry about that. Full reason - ",t.toString())}else console.error("No Service Worker Support")}}return Z.properties={name:{type:String},swURL:{type:String}},customElements.define("wakit-sw-install",Z),O.MyServiceWorkerManager=Z,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}),O}({});