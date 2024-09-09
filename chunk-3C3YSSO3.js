import{$a as ge,$b as Te,Ba as ae,Bc as N,Ca as z,Cc as Oe,Da as ce,Ea as T,Fa as V,Ga as $,Ha as b,Ia as M,Ja as le,Ka as de,La as ue,Ma as he,Na as fe,Oa as pe,Pa as ye,Qa as E,Wa as D,X as oe,Y as g,Za as me,Zb as ve,_ as p,_b as G,a as A,b as ne,ba as v,c as re,da as l,ea as m,fa as O,fc as Ee,gc as we,hc as Re,ja as _,la as ie,lc as X,mc as be,nc as Me,oc as f,rc as J,t as se,ya as R,za as B,zc as Ae}from"./chunk-WTZ3W42X.js";var C=class s{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(r=>{let t=r.indexOf(":");if(t>0){let n=r.slice(0,t),o=n.toLowerCase(),i=r.slice(t+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((r,t)=>{this.setHeaderEntries(t,r)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([r,t])=>{this.setHeaderEntries(r,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let r=this.headers.get(e.toLowerCase());return r&&r.length>0?r[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,r){return this.clone({name:e,value:r,op:"a"})}set(e,r){return this.clone({name:e,value:r,op:"s"})}delete(e,r){return this.clone({name:e,value:r,op:"d"})}maybeSetNormalizedName(e,r){this.normalizedNames.has(r)||this.normalizedNames.set(r,e)}init(){this.lazyInit&&(this.lazyInit instanceof s?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(r=>{this.headers.set(r,e.headers.get(r)),this.normalizedNames.set(r,e.normalizedNames.get(r))})}clone(e){let r=new s;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof s?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([e]),r}applyUpdate(e){let r=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,r);let n=(e.op==="a"?this.headers.get(r):void 0)||[];n.push(...t),this.headers.set(r,n);break;case"d":let o=e.value;if(!o)this.headers.delete(r),this.normalizedNames.delete(r);else{let i=this.headers.get(r);if(!i)return;i=i.filter(a=>o.indexOf(a)===-1),i.length===0?(this.headers.delete(r),this.normalizedNames.delete(r)):this.headers.set(r,i)}break}}setHeaderEntries(e,r){let t=(Array.isArray(r)?r:[r]).map(o=>o.toString()),n=e.toLowerCase();this.headers.set(n,t),this.maybeSetNormalizedName(e,n)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(r=>e(this.normalizedNames.get(r),this.headers.get(r)))}};var Ce=function(s){return s[s.Sent=0]="Sent",s[s.UploadProgress=1]="UploadProgress",s[s.ResponseHeader=2]="ResponseHeader",s[s.DownloadProgress=3]="DownloadProgress",s[s.Response=4]="Response",s[s.User=5]="User",s}(Ce||{}),K=class{constructor(e,r=200,t="OK"){this.headers=e.headers||new C,this.status=e.status!==void 0?e.status:r,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var x=class s extends K{constructor(e={}){super(e),this.type=Ce.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new s({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var Ye=new v("");var qe=new v(""),De="b",Ne="h",Pe="s",Ie="st",Se="u",Le="rt",k=new v(""),Qe=["GET","HEAD"];function He(s,e){let te=m(k),{isCacheActive:r}=te,t=re(te,["isCacheActive"]),{transferCache:n,method:o}=s;if(!r||n===!1||o==="POST"&&!t.includePostRequests&&!n||o!=="POST"&&!Qe.includes(o)||!t.includeRequestsWithAuthHeaders&&et(s)||t.filter?.(s)===!1)return e(s);let i=m($),a=m(qe,{optional:!0}),c=N(m(T));if(a&&!c)throw new g(2803,!1);let d=c&&a?st(s.url,a):s.url,u=nt(s,d),h=i.get(u,null),w=t.includeHeaders;if(typeof n=="object"&&n.includeHeaders&&(w=n.includeHeaders),h){let{[De]:y,[Le]:$e,[Ne]:Ge,[Pe]:Xe,[Ie]:Je,[Se]:Ke}=h,U=y;switch($e){case"arraybuffer":U=new TextEncoder().encode(y).buffer;break;case"blob":U=new Blob([y]);break}let We=new C(Ge);return se(new x({body:U,headers:We,status:Xe,statusText:Je,url:Ke}))}return e(s).pipe(oe(y=>{y instanceof x&&c&&i.set(u,{[De]:y.body,[Ne]:tt(y.headers,w),[Pe]:y.status,[Ie]:y.statusText,[Se]:d,[Le]:s.responseType})}))}function et(s){return s.headers.has("authorization")||s.headers.has("proxy-authorization")}function tt(s,e){if(!e)return{};let r={};for(let t of e){let n=s.getAll(t);n!==null&&(r[t]=n)}return r}function ke(s){return[...s.keys()].sort().map(e=>`${e}=${s.getAll(e)}`).join("&")}function nt(s,e){let{params:r,method:t,responseType:n}=s,o=ke(r),i=s.serializeBody();i instanceof URLSearchParams?i=ke(i):typeof i!="string"&&(i="");let a=[t,n,e,i,o].join("|"),c=rt(a);return c}function rt(s){let e=0;for(let r of s)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function xe(s){return[{provide:k,useFactory:()=>(ge("NgHttpTransferCache"),A({isCacheActive:!0},s))},{provide:Ye,useValue:He,multi:!0,deps:[$,k]},{provide:ve,multi:!0,useFactory:()=>{let e=m(G),r=m(k);return()=>{Te(e).then(()=>{r.isCacheActive=!1})}}}]}function st(s,e){let r=new URL(s,"resolve://").origin,t=e[r];return t?s.replace(r,t):s}var Y=class extends Me{constructor(){super(...arguments),this.supportsDOMEvents=!0}},q=class s extends Y{static makeCurrent(){be(new s)}onAndCancel(e,r,t){return e.addEventListener(r,t),()=>{e.removeEventListener(r,t)}}dispatchEvent(e,r){e.dispatchEvent(r)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,r){return r=r||this.getDefaultDocument(),r.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,r){return r==="window"?window:r==="document"?e:r==="body"?e.body:null}getBaseHref(e){let r=it();return r==null?null:at(r)}resetBaseElement(){P=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return J(document.cookie,e)}},P=null;function it(){return P=P||document.querySelector("base"),P?P.getAttribute("href"):null}function at(s){return new URL(s,document.baseURI).pathname}var ct=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),j=new v(""),_e=(()=>{let e=class e{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(o=>{o.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,o){return this._findPluginFor(n).addEventListener(t,n,o)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(i=>i.supports(t)),!n)throw new g(5101,!1);return this._eventNameToPlugin.set(t,n),n}};e.\u0275fac=function(n){return new(n||e)(l(j),l(R))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),I=class{constructor(e){this._doc=e}},W="ng-app-id",Be=(()=>{let e=class e{constructor(t,n,o,i={}){this.doc=t,this.appId=n,this.nonce=o,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=N(i),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(o=>o.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${W}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(o=>{o.textContent!=null&&n.set(o.textContent,o)}),n}return null}changeUsageCount(t,n){let o=this.styleRef;if(o.has(t)){let i=o.get(t);return i.usage+=n,i.usage}return o.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let o=this.styleNodesInDOM,i=o?.get(n);if(i?.parentNode===t)return o.delete(n),i.removeAttribute(W),i;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=n,this.platformIsServer&&a.setAttribute(W,this.appId),t.appendChild(a),a}}addStyleToHost(t,n){let o=this.getStyleElement(t,n),i=this.styleRef,a=i.get(n)?.elements;a?a.push(o):i.set(n,{elements:[o],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}};e.\u0275fac=function(n){return new(n||e)(l(f),l(z),l(V,8),l(T))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),Z={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ee=/%COMP%/g,ze="%COMP%",lt=`_nghost-${ze}`,dt=`_ngcontent-${ze}`,ut=!0,ht=new v("",{providedIn:"root",factory:()=>ut});function ft(s){return dt.replace(ee,s)}function pt(s){return lt.replace(ee,s)}function Ve(s,e){return e.map(r=>r.replace(ee,s))}var je=(()=>{let e=class e{constructor(t,n,o,i,a,c,d,u=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=c,this.ngZone=d,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=N(c),this.defaultRenderer=new S(t,a,d,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===O.ShadowDom&&(n=ne(A({},n),{encapsulation:O.Emulated}));let o=this.getOrCreateRenderer(t,n);return o instanceof F?o.applyToHost(t):o instanceof L&&o.applyStyles(),o}getOrCreateRenderer(t,n){let o=this.rendererByCompId,i=o.get(n.id);if(!i){let a=this.doc,c=this.ngZone,d=this.eventManager,u=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,w=this.platformIsServer;switch(n.encapsulation){case O.Emulated:i=new F(d,u,n,this.appId,h,a,c,w);break;case O.ShadowDom:return new Q(d,u,t,n,a,c,this.nonce,w);default:i=new L(d,u,n,h,a,c,w);break}o.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(n){return new(n||e)(l(_e),l(Be),l(z),l(ht),l(f),l(T),l(R),l(V))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),S=class{constructor(e,r,t,n){this.eventManager=e,this.doc=r,this.ngZone=t,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,r){return r?this.doc.createElementNS(Z[r]||r,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,r){(Fe(e)?e.content:e).appendChild(r)}insertBefore(e,r,t){e&&(Fe(e)?e.content:e).insertBefore(r,t)}removeChild(e,r){e&&e.removeChild(r)}selectRootElement(e,r){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new g(-5104,!1);return r||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,r,t,n){if(n){r=n+":"+r;let o=Z[n];o?e.setAttributeNS(o,r,t):e.setAttribute(r,t)}else e.setAttribute(r,t)}removeAttribute(e,r,t){if(t){let n=Z[t];n?e.removeAttributeNS(n,r):e.removeAttribute(`${t}:${r}`)}else e.removeAttribute(r)}addClass(e,r){e.classList.add(r)}removeClass(e,r){e.classList.remove(r)}setStyle(e,r,t,n){n&(D.DashCase|D.Important)?e.style.setProperty(r,t,n&D.Important?"important":""):e.style[r]=t}removeStyle(e,r,t){t&D.DashCase?e.style.removeProperty(r):e.style[r]=""}setProperty(e,r,t){e!=null&&(e[r]=t)}setValue(e,r){e.nodeValue=r}listen(e,r,t){if(typeof e=="string"&&(e=X().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${r}`);return this.eventManager.addEventListener(e,r,this.decoratePreventDefault(t))}decoratePreventDefault(e){return r=>{if(r==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(r)):e(r))===!1&&r.preventDefault()}}};function Fe(s){return s.tagName==="TEMPLATE"&&s.content!==void 0}var Q=class extends S{constructor(e,r,t,n,o,i,a,c){super(e,o,i,c),this.sharedStylesHost=r,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=Ve(n.id,n.styles);for(let u of d){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=u,this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,r){return super.appendChild(this.nodeOrShadowRoot(e),r)}insertBefore(e,r,t){return super.insertBefore(this.nodeOrShadowRoot(e),r,t)}removeChild(e,r){return super.removeChild(this.nodeOrShadowRoot(e),r)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},L=class extends S{constructor(e,r,t,n,o,i,a,c){super(e,o,i,a),this.sharedStylesHost=r,this.removeStylesOnCompDestroy=n,this.styles=c?Ve(c,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},F=class extends L{constructor(e,r,t,n,o,i,a,c){let d=n+"-"+t.id;super(e,r,t,o,i,a,c,d),this.contentAttr=ft(d),this.hostAttr=pt(d)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,r){let t=super.createElement(e,r);return super.setAttribute(t,this.contentAttr,""),t}},yt=(()=>{let e=class e extends I{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,o){return t.addEventListener(n,o,!1),()=>this.removeEventListener(t,n,o)}removeEventListener(t,n,o){return t.removeEventListener(n,o)}};e.\u0275fac=function(n){return new(n||e)(l(f))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),mt=(()=>{let e=class e extends I{constructor(t){super(t),this.delegate=m(we,{optional:!0})}supports(t){return this.delegate?this.delegate.supports(t):!1}addEventListener(t,n,o){return this.delegate.addEventListener(t,n,o)}removeEventListener(t,n,o){return this.delegate.removeEventListener(t,n,o)}};e.\u0275fac=function(n){return new(n||e)(l(f))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),Ue=["alt","control","meta","shift"],gt={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},vt={alt:s=>s.altKey,control:s=>s.ctrlKey,meta:s=>s.metaKey,shift:s=>s.shiftKey},Tt=(()=>{let e=class e extends I{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,o){let i=e.parseEventName(n),a=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>X().onAndCancel(t,i.domEventName,a))}static parseEventName(t){let n=t.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(n.pop()),a="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),a="code."),Ue.forEach(u=>{let h=n.indexOf(u);h>-1&&(n.splice(h,1),a+=u+".")}),a+=i,n.length!=0||i.length===0)return null;let d={};return d.domEventName=o,d.fullKey=a,d}static matchEventFullKeyCode(t,n){let o=gt[t.key]||t.key,i="";return n.indexOf("code.")>-1&&(o=t.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Ue.forEach(a=>{if(a!==o){let c=vt[a];c(t)&&(i+=a+".")}}),i+=o,i===n)}static eventCallback(t,n,o){return i=>{e.matchEventFullKeyCode(i,t)&&o.runGuarded(()=>n(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}};e.\u0275fac=function(n){return new(n||e)(l(f))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})();function bn(s,e){return Ee(A({rootComponent:s},Et(e)))}function Et(s){return{appProviders:[...At,...s?.providers??[]],platformProviders:Mt}}function wt(){q.makeCurrent()}function Rt(){return new B}function bt(){return ae(document),document}var Mt=[{provide:T,useValue:Ae},{provide:ce,useValue:wt,multi:!0},{provide:f,useFactory:bt,deps:[]}];var At=[{provide:ie,useValue:"root"},{provide:B,useFactory:Rt,deps:[]},{provide:j,useClass:yt,multi:!0,deps:[f,R,T]},{provide:j,useClass:Tt,multi:!0,deps:[f]},{provide:j,useClass:mt,multi:!0},je,Be,_e,{provide:me,useExisting:je},{provide:Oe,useClass:ct,deps:[]},[]];var Mn=(()=>{let e=class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}};e.\u0275fac=function(n){return new(n||e)(l(f))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var Ot=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=p({token:e,factory:function(n){let o=null;return n?o=new(n||e):o=l(Dt),o},providedIn:"root"});let s=e;return s})(),Dt=(()=>{let e=class e extends Ot{constructor(t){super(),this._doc=t}sanitize(t,n){if(n==null)return null;switch(t){case E.NONE:return n;case E.HTML:return M(n,"HTML")?b(n):ye(this._doc,String(n)).toString();case E.STYLE:return M(n,"Style")?b(n):n;case E.SCRIPT:if(M(n,"Script"))return b(n);throw new g(5200,!1);case E.URL:return M(n,"URL")?b(n):pe(String(n));case E.RESOURCE_URL:if(M(n,"ResourceURL"))return b(n);throw new g(5201,!1);default:throw new g(5202,!1)}}bypassSecurityTrustHtml(t){return le(t)}bypassSecurityTrustStyle(t){return de(t)}bypassSecurityTrustScript(t){return ue(t)}bypassSecurityTrustUrl(t){return he(t)}bypassSecurityTrustResourceUrl(t){return fe(t)}};e.\u0275fac=function(n){return new(n||e)(l(f))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),H=function(s){return s[s.NoHttpTransferCache=0]="NoHttpTransferCache",s[s.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",s[s.I18nSupport=2]="I18nSupport",s[s.EventReplay=3]="EventReplay",s}(H||{});function An(...s){let e=[],r=new Set,t=r.has(H.HttpTransferCacheOptions);for(let{\u0275providers:n,\u0275kind:o}of s)r.add(o),n.length&&e.push(n);return _([[],Re(),r.has(H.NoHttpTransferCache)||t?[]:xe({}),e])}export{bn as a,Mn as b,Ot as c,An as d};
