var cr=Object.defineProperty;var lr=(t,e,n)=>e in t?cr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ie=(t,e,n)=>(lr(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ur=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],c=t[n++],l=t[n++],h=((i&7)<<18|(s&63)<<12|(c&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const s=t[n++],c=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|c&63)}}return e.join("")},un={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],c=i+1<t.length,l=c?t[i+1]:0,h=i+2<t.length,v=h?t[i+2]:0,f=s>>2,M=(s&3)<<4|l>>4;let m=(l&15)<<2|v>>6,U=v&63;h||(U=64,c||(m=64)),r.push(n[f],n[M],n[m],n[U])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ln(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ur(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const v=i<t.length?n[t.charAt(i)]:64;++i;const M=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||v==null||M==null)throw new dr;const m=s<<2|l>>4;if(r.push(m),v!==64){const U=l<<4&240|v>>2;if(r.push(U),M!==64){const B=v<<6&192|M;r.push(B)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hr=function(t){const e=ln(t);return un.encodeByteArray(e,!0)},dn=function(t){return hr(t).replace(/\./g,"")},hn=function(t){try{return un.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=()=>fr().__FIREBASE_DEFAULTS__,gr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_r=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hn(t[1]);return e&&JSON.parse(e)},vt=()=>{try{return pr()||gr()||_r()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mr=t=>{var e,n;return(n=(e=vt())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vr=()=>{var t;return(t=vt())===null||t===void 0?void 0:t.config},fn=t=>{var e;return(e=vt())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ir(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D())}function Er(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tr(){const t=D();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function br(){try{return typeof indexedDB=="object"}catch{return!1}}function Sr(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="FirebaseError";class ne extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ar,Object.setPrototypeOf(this,ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ae.prototype.create)}}class Ae{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],c=s?Cr(s,r):"Error",l=`${this.serviceName}: ${c} (${i}).`;return new ne(i,l,r)}}function Cr(t,e){return t.replace(Rr,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Rr=/\{\$([^}]+)}/g;function kr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qe(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],c=e[i];if(Dt(s)&&Dt(c)){if(!qe(s,c))return!1}else if(s!==c)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nr(t,e){const n=new Mr(t,e);return n.subscribe.bind(n)}class Mr{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pr(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nt),i.error===void 0&&(i.error=nt),i.complete===void 0&&(i.complete=nt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pr(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return t&&t._delegate?t._delegate:t}class _e{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lr(e))try{this.getOrInitializeService({instanceIdentifier:se})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=se){return this.instances.has(e)}getOptions(e=se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&c.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const c=this.instances.get(i);return c&&e(c,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Or(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=se){return this.component?this.component.multipleInstances?e:se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Or(t){return t===se?void 0:t}function Lr(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const xr={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Br=N.INFO,Fr={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Vr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fr[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pn{constructor(e){this.name=e,this._logLevel=Br,this._logHandler=Vr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const $r=(t,e)=>e.some(n=>t instanceof n);let Ot,Lt;function qr(){return Ot||(Ot=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hr(){return Lt||(Lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gn=new WeakMap,dt=new WeakMap,_n=new WeakMap,rt=new WeakMap,yt=new WeakMap;function jr(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",c)},s=()=>{n(ee(t.result)),i()},c=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&gn.set(n,t)}).catch(()=>{}),yt.set(e,t),e}function Wr(t){if(dt.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",c),t.removeEventListener("abort",c)},s=()=>{n(),i()},c=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",c),t.addEventListener("abort",c)});dt.set(t,e)}let ht={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_n.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ee(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zr(t){ht=t(ht)}function Gr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(it(this),e,...n);return _n.set(r,e.sort?e.sort():[e]),ee(r)}:Hr().includes(t)?function(...e){return t.apply(it(this),e),ee(gn.get(this))}:function(...e){return ee(t.apply(it(this),e))}}function Kr(t){return typeof t=="function"?Gr(t):(t instanceof IDBTransaction&&Wr(t),$r(t,qr())?new Proxy(t,ht):t)}function ee(t){if(t instanceof IDBRequest)return jr(t);if(rt.has(t))return rt.get(t);const e=Kr(t);return e!==t&&(rt.set(t,e),yt.set(e,t)),e}const it=t=>yt.get(t);function Jr(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const c=indexedDB.open(t,e),l=ee(c);return r&&c.addEventListener("upgradeneeded",h=>{r(ee(c.result),h.oldVersion,h.newVersion,ee(c.transaction))}),n&&c.addEventListener("blocked",()=>n()),l.then(h=>{s&&h.addEventListener("close",()=>s()),i&&h.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Qr=["get","getKey","getAll","getAllKeys","count"],Yr=["put","add","delete","clear"],st=new Map;function Ut(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(st.get(e))return st.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Yr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qr.includes(n)))return;const s=async function(c,...l){const h=this.transaction(c,i?"readwrite":"readonly");let v=h.store;return r&&(v=v.index(l.shift())),(await Promise.all([v[n](...l),i&&h.done]))[0]};return st.set(e,s),s}zr(t=>({...t,get:(e,n,r)=>Ut(e,n)||t.get(e,n,r),has:(e,n)=>!!Ut(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ft="@firebase/app",xt="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new pn("@firebase/app"),ei="@firebase/app-compat",ti="@firebase/analytics-compat",ni="@firebase/analytics",ri="@firebase/app-check-compat",ii="@firebase/app-check",si="@firebase/auth",oi="@firebase/auth-compat",ai="@firebase/database",ci="@firebase/database-compat",li="@firebase/functions",ui="@firebase/functions-compat",di="@firebase/installations",hi="@firebase/installations-compat",fi="@firebase/messaging",pi="@firebase/messaging-compat",gi="@firebase/performance",_i="@firebase/performance-compat",mi="@firebase/remote-config",vi="@firebase/remote-config-compat",yi="@firebase/storage",Ii="@firebase/storage-compat",Ei="@firebase/firestore",wi="@firebase/firestore-compat",Ti="firebase",bi="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="[DEFAULT]",Si={[ft]:"fire-core",[ei]:"fire-core-compat",[ni]:"fire-analytics",[ti]:"fire-analytics-compat",[ii]:"fire-app-check",[ri]:"fire-app-check-compat",[si]:"fire-auth",[oi]:"fire-auth-compat",[ai]:"fire-rtdb",[ci]:"fire-rtdb-compat",[li]:"fire-fn",[ui]:"fire-fn-compat",[di]:"fire-iid",[hi]:"fire-iid-compat",[fi]:"fire-fcm",[pi]:"fire-fcm-compat",[gi]:"fire-perf",[_i]:"fire-perf-compat",[mi]:"fire-rc",[vi]:"fire-rc-compat",[yi]:"fire-gcs",[Ii]:"fire-gcs-compat",[Ei]:"fire-fst",[wi]:"fire-fst-compat","fire-js":"fire-js",[Ti]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Map,gt=new Map;function Ai(t,e){try{t.container.addComponent(e)}catch(n){ce.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function we(t){const e=t.name;if(gt.has(e))return ce.debug(`There were multiple attempts to register component ${e}.`),!1;gt.set(e,t);for(const n of He.values())Ai(n,t);return!0}function mn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},te=new Ae("app","Firebase",Ci);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=bi;function vn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw te.create("bad-app-name",{appName:String(i)});if(n||(n=vr()),!n)throw te.create("no-options");const s=He.get(i);if(s){if(qe(n,s.options)&&qe(r,s.config))return s;throw te.create("duplicate-app",{appName:i})}const c=new Ur(i);for(const h of gt.values())c.addComponent(h);const l=new Ri(n,r,c);return He.set(i,l),l}function ki(t=pt){const e=He.get(t);if(!e&&t===pt)return vn();if(!e)throw te.create("no-app",{appName:t});return e}function fe(t,e,n){var r;let i=(r=Si[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),c=e.match(/\s|\//);if(s||c){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ce.warn(l.join(" "));return}we(new _e(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="firebase-heartbeat-database",Mi=1,Te="firebase-heartbeat-store";let ot=null;function yn(){return ot||(ot=Jr(Ni,Mi,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Te)}}}).catch(t=>{throw te.create("idb-open",{originalErrorMessage:t.message})})),ot}async function Pi(t){try{return(await yn()).transaction(Te).objectStore(Te).get(In(t))}catch(e){if(e instanceof ne)ce.warn(e.message);else{const n=te.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ce.warn(n.message)}}}async function Bt(t,e){try{const r=(await yn()).transaction(Te,"readwrite");return await r.objectStore(Te).put(e,In(t)),r.done}catch(n){if(n instanceof ne)ce.warn(n.message);else{const r=te.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ce.warn(r.message)}}}function In(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=1024,Oi=30*24*60*60*1e3;class Li{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xi(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ft();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Oi}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ft(),{heartbeatsToSend:n,unsentEntries:r}=Ui(this._heartbeatsCache.heartbeats),i=dn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ft(){return new Date().toISOString().substring(0,10)}function Ui(t,e=Di){const n=[];let r=t.slice();for(const i of t){const s=n.find(c=>c.agent===i.agent);if(s){if(s.dates.push(i.date),Vt(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xi{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return br()?Sr().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pi(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vt(t){return dn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){we(new _e("platform-logger",e=>new Xr(e),"PRIVATE")),we(new _e("heartbeat",e=>new Li(e),"PRIVATE")),fe(ft,xt,t),fe(ft,xt,"esm2017"),fe("fire-js","")}Bi("");var Fi="firebase",Vi="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe(Fi,Vi,"app");function It(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function En(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $i=En,wn=new Ae("auth","Firebase",En());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new pn("@firebase/auth");function Ue(t,...e){$t.logLevel<=N.ERROR&&$t.error(`Auth (${Je}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,...e){throw Et(t,...e)}function V(t,...e){return Et(t,...e)}function Tn(t,e,n){const r=Object.assign(Object.assign({},$i()),{[e]:n});return new Ae("auth","Firebase",r).create(e,{appName:t.name})}function qi(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&q(t,"argument-error"),Tn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Et(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wn.create(t,...e)}function T(t,e,...n){if(!t)throw Et(e,...n)}function j(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ue(e),new Error(e)}function z(t,e){t||j(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Map;function W(t){z(t instanceof Function,"Expected a class definition");let e=qt.get(t);return e?(z(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qt.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e){const n=mn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qe(s,e??{}))return i;q(i,"already-initialized")}return n.initialize({options:e})}function ji(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(W);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wi(){return Ht()==="http:"||Ht()==="https:"}function Ht(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wi()||Er()||"connection"in navigator)?navigator.onLine:!0}function Gi(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.shortDelay=e,this.longDelay=n,z(n>e,"Short delay should be less than long delay!"),this.isMobile=Ir()||wr()}get(){return zi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e){z(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;j("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;j("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;j("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Re(3e4,6e4);function Qi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qe(t,e,n,r,i={}){return Sn(t,i,async()=>{let s={},c={};r&&(e==="GET"?c=r:s={body:JSON.stringify(r)});const l=Ce(Object.assign({key:t.config.apiKey},c)).slice(1),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode),bn.fetch()(An(t,t.config.apiHost,n,l),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},s))})}async function Sn(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ki),e);try{const i=new Xi(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const c=await s.json();if("needConfirmation"in c)throw Oe(t,"account-exists-with-different-credential",c);if(s.ok&&!("errorMessage"in c))return c;{const l=s.ok?c.errorMessage:c.error.message,[h,v]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oe(t,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw Oe(t,"email-already-in-use",c);if(h==="USER_DISABLED")throw Oe(t,"user-disabled",c);const f=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Tn(t,f,v);q(t,f)}}catch(i){if(i instanceof ne)throw i;q(t,"network-request-failed",{message:String(i)})}}async function Yi(t,e,n,r,i={}){const s=await Qe(t,e,n,r,i);return"mfaPendingCredential"in s&&q(t,"multi-factor-auth-required",{_serverResponse:s}),s}function An(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wt(t.config,i):`${t.config.apiScheme}://${i}`}class Xi{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(V(this.auth,"network-request-failed")),Ji.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oe(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=V(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t,e){return Qe(t,"POST","/v1/accounts:delete",e)}async function es(t,e){return Qe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ts(t,e=!1){const n=ue(t),r=await n.getIdToken(e),i=Tt(r);T(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,c=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ee(at(i.auth_time)),issuedAtTime:Ee(at(i.iat)),expirationTime:Ee(at(i.exp)),signInProvider:c||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function at(t){return Number(t)*1e3}function Tt(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ue("JWT malformed, contained fewer than 3 sections"),null;try{const i=hn(n);return i?JSON.parse(i):(Ue("Failed to decode base64 JWT payload"),null)}catch(i){return Ue("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ns(t){const e=Tt(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ne&&rs(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rs({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ee(this.lastLoginAt),this.creationTime=Ee(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(t){var e;const n=t.auth,r=await t.getIdToken(),i=await be(t,es(n,{idToken:r}));T(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const c=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?as(s.providerUserInfo):[],l=os(t.providerData,c),h=t.isAnonymous,v=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=h?v:!1,M={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Cn(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,M)}async function ss(t){const e=ue(t);await je(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function os(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function as(t){return t.map(e=>{var{providerId:n}=e,r=It(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e){const n=await Sn(t,{},async()=>{const r=Ce({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,c=An(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",bn.fetch()(c,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ns(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cs(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,c=new Se;return r&&(T(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(T(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),s&&(T(typeof s=="number","internal-error",{appName:e}),c.expirationTime=s),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Se,this.toJSON())}_performRefresh(){return j("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ae{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=It(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new is(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await be(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ts(this,e)}reload(){return ss(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await je(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await be(this,Zi(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,c,l,h,v,f;const M=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,U=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,B=(c=n.photoURL)!==null&&c!==void 0?c:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,ye=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,re=(v=n.createdAt)!==null&&v!==void 0?v:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:G,emailVerified:Pe,isAnonymous:O,providerData:de,stsTokenManager:Ie}=n;T(G&&Ie,e,"internal-error");const De=Se.fromJSON(this.name,Ie);T(typeof G=="string",e,"internal-error"),Q(M,e.name),Q(m,e.name),T(typeof Pe=="boolean",e,"internal-error"),T(typeof O=="boolean",e,"internal-error"),Q(U,e.name),Q(B,e.name),Q(P,e.name),Q(ye,e.name),Q(re,e.name),Q(F,e.name);const K=new ae({uid:G,auth:e,email:m,emailVerified:Pe,displayName:M,isAnonymous:O,photoURL:B,phoneNumber:U,tenantId:P,stsTokenManager:De,createdAt:re,lastLoginAt:F});return de&&Array.isArray(de)&&(K.providerData=de.map(I=>Object.assign({},I))),ye&&(K._redirectEventId=ye),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new Se;i.updateFromServerResponse(n);const s=new ae({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await je(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rn.type="NONE";const jt=Rn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,e,n){return`firebase:${t}:${e}:${n}`}class pe{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xe(this.userKey,i.apiKey,s),this.fullPersistenceKey=xe("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new pe(W(jt),e,r);const i=(await Promise.all(n.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let s=i[0]||W(jt);const c=xe(r,e.config.apiKey,e.name);let l=null;for(const v of n)try{const f=await v._get(c);if(f){const M=ae._fromJSON(e,f);v!==s&&(l=M),s=v;break}}catch{}const h=i.filter(v=>v._shouldAllowMigration);return!s._shouldAllowMigration||!h.length?new pe(s,e,r):(s=h[0],l&&await s._set(c,l.toJSON()),await Promise.all(n.map(async v=>{if(v!==s)try{await v._remove(c)}catch{}})),new pe(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dn(e))return"Blackberry";if(On(e))return"Webos";if(bt(e))return"Safari";if((e.includes("chrome/")||Nn(e))&&!e.includes("edge/"))return"Chrome";if(Pn(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kn(t=D()){return/firefox\//i.test(t)}function bt(t=D()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nn(t=D()){return/crios\//i.test(t)}function Mn(t=D()){return/iemobile/i.test(t)}function Pn(t=D()){return/android/i.test(t)}function Dn(t=D()){return/blackberry/i.test(t)}function On(t=D()){return/webos/i.test(t)}function Ye(t=D()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ls(t=D()){var e;return Ye(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function us(){return Tr()&&document.documentMode===10}function Ln(t=D()){return Ye(t)||Pn(t)||On(t)||Dn(t)||/windows phone/i.test(t)||Mn(t)}function ds(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e=[]){let n;switch(t){case"Browser":n=Wt(D());break;case"Worker":n=`${Wt(D())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Je}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((c,l)=>{try{const h=e(s);c(h)}catch(h){l(h)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zt(this),this.idTokenSubscription=new zt(this),this.beforeStateQueue=new hs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=W(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===l)&&(h!=null&&h.user)&&(i=h.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await je(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gi()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ue(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(W(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ae("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&W(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[W(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),c=this._isInitialized?Promise.resolve():this._initializationPromise;return T(c,this,"internal-error"),c.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Un(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Xe(t){return ue(t)}class zt{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nr(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ps(t,e,n){const r=Xe(t);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=xn(e),{host:c,port:l}=gs(e),h=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${c}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:c,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_s()}function xn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gs(t){const e=xn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gt(r.substr(s.length+1))}}else{const[s,c]=r.split(":");return{host:s,port:Gt(c)}}}function Gt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _s(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return j("not implemented")}_getIdTokenResponse(e){return j("not implemented")}_linkToIdToken(e,n){return j("not implemented")}_getReauthenticationResolver(e){return j("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ge(t,e){return Yi(t,"POST","/v1/accounts:signInWithIdp",Qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="http://localhost";class le extends Bn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):q("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=It(n,["providerId","signInMethod"]);if(!r||!i)return null;const c=new le(r,i);return c.idToken=s.idToken||void 0,c.accessToken=s.accessToken||void 0,c.secret=s.secret,c.nonce=s.nonce,c.pendingToken=s.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return ge(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ge(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ge(e,n)}buildRequest(){const e={requestUri:ms,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ce(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends St{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends ke{constructor(){super("facebook.com")}static credential(e){return le._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Y.credential(e.oauthAccessToken)}catch{return null}}}Y.FACEBOOK_SIGN_IN_METHOD="facebook.com";Y.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H extends ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return le._fromParams({providerId:H.PROVIDER_ID,signInMethod:H.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return H.credentialFromTaggedObject(e)}static credentialFromError(e){return H.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return H.credential(n,r)}catch{return null}}}H.GOOGLE_SIGN_IN_METHOD="google.com";H.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends ke{constructor(){super("github.com")}static credential(e){return le._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.GITHUB_SIGN_IN_METHOD="github.com";X.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends ke{constructor(){super("twitter.com")}static credential(e,n){return le._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Z.credential(n,r)}catch{return null}}}Z.TWITTER_SIGN_IN_METHOD="twitter.com";Z.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ae._fromIdTokenResponse(e,r,i),c=Kt(r);return new me({user:s,providerId:c,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kt(r);return new me({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends ne{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,We.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new We(e,n,r,i)}}function Fn(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?We._fromErrorAndOperation(t,s,e,r):s})}async function vs(t,e,n=!1){const r=await be(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return me._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await be(t,Fn(r,i,e,t),n);T(s.idToken,r,"internal-error");const c=Tt(s.idToken);T(c,r,"internal-error");const{sub:l}=c;return T(t.uid===l,r,"user-mismatch"),me._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&q(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e,n=!1){const r="signIn",i=await Fn(t,r,e),s=await me._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Es(t,e,n,r){return ue(t).onIdTokenChanged(e,n,r)}function ws(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}function Ts(t,e,n,r){return ue(t).onAuthStateChanged(e,n,r)}const ze="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ze,"1"),this.storage.removeItem(ze),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(){const t=D();return bt(t)||Ye(t)}const Ss=1e3,As=10;class $n extends Vn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bs()&&ds(),this.fallbackToPolling=Ln(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,l,h)=>{this.notifyListeners(c,h)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(r);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const c=this.storage.getItem(r);!n&&this.localCache[r]===c||this.notifyListeners(r,c)},s=this.storage.getItem(r);us()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,As):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ss)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$n.type="LOCAL";const Cs=$n;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Vn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qn.type="SESSION";const Hn=qn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ze(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(c).map(async v=>v(n.origin,s)),h=await Rs(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ze.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,c;return new Promise((l,h)=>{const v=At("",20);i.port1.start();const f=setTimeout(()=>{h(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(M){const m=M;if(m.data.eventId===v)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),h(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:n},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return window}function Ns(t){$().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return typeof $().WorkerGlobalScope<"u"&&typeof $().importScripts=="function"}async function Ms(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ps(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ds(){return jn()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="firebaseLocalStorageDb",Os=1,Ge="firebaseLocalStorage",zn="fbase_key";class Ne{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function et(t,e){return t.transaction([Ge],e?"readwrite":"readonly").objectStore(Ge)}function Ls(){const t=indexedDB.deleteDatabase(Wn);return new Ne(t).toPromise()}function mt(){const t=indexedDB.open(Wn,Os);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ge,{keyPath:zn})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ge)?e(r):(r.close(),await Ls(),e(await mt()))})})}async function Jt(t,e,n){const r=et(t,!0).put({[zn]:e,value:n});return new Ne(r).toPromise()}async function Us(t,e){const n=et(t,!1).get(e),r=await new Ne(n).toPromise();return r===void 0?null:r.value}function Qt(t,e){const n=et(t,!0).delete(e);return new Ne(n).toPromise()}const xs=800,Bs=3;class Gn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Bs)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ze._getInstance(Ds()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ms(),!this.activeServiceWorker)return;this.sender=new ks(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ps()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mt();return await Jt(e,ze,"1"),await Qt(e,ze),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jt(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Us(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qt(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=et(i,!1).getAll();return new Ne(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gn.type="LOCAL";const Fs=Gn;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $s(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=V("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Vs().appendChild(r)})}function qs(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Re(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){return e?W(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Bn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ge(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ge(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hs(t){return Is(t.auth,new Ct(t),t.bypassAuthState)}function js(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),ys(n,new Ct(t),t.bypassAuthState)}async function Ws(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),vs(n,new Ct(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:c,type:l}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hs;case"linkViaPopup":case"linkViaRedirect":return Ws;case"reauthViaPopup":case"reauthViaRedirect":return js;default:q(this.auth,"internal-error")}}resolve(e){z(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){z(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Re(2e3,1e4);async function Gs(t,e,n){const r=Xe(t);qi(t,e,St);const i=Kn(r,n);return new oe(r,"signInViaPopup",e,i).executeNotNull()}class oe extends Jn{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,oe.currentPopupAction&&oe.currentPopupAction.cancel(),oe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){z(this.filter.length===1,"Popup operations only handle one event");const e=At();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(V(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(V(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(V(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,zs.get())};e()}}oe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="pendingRedirect",Be=new Map;class Js extends Jn{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Be.get(this.auth._key());if(!e){try{const r=await Qs(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Be.set(this.auth._key(),e)}return this.bypassAuthState||Be.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qs(t,e){const n=Zs(e),r=Xs(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ys(t,e){Be.set(t._key(),e)}function Xs(t){return W(t._redirectPersistence)}function Zs(t){return xe(Ks,t.config.apiKey,t.name)}async function eo(t,e,n=!1){const r=Xe(t),i=Kn(r,e),c=await new Js(r,i,n).execute();return c&&!n&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=10*60*1e3;class no{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ro(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qn(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(V(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=to&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yt(e))}saveEventToCache(e){this.cachedEventUids.add(Yt(e)),this.lastProcessedEventTime=Date.now()}}function Yt(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qn({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ro(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qn(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e={}){return Qe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oo=/^https?/;async function ao(t){if(t.config.emulator)return;const{authorizedDomains:e}=await io(t);for(const n of e)try{if(co(n))return}catch{}q(t,"unauthorized-domain")}function co(t){const e=_t(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===r}if(!oo.test(n))return!1;if(so.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Re(3e4,6e4);function Xt(){const t=$().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uo(t){return new Promise((e,n)=>{var r,i,s;function c(){Xt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xt(),n(V(t,"network-request-failed"))},timeout:lo.get()})}if(!((i=(r=$().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$().gapi)===null||s===void 0)&&s.load)c();else{const l=qs("iframefcb");return $()[l]=()=>{gapi.load?c():n(V(t,"network-request-failed"))},$s(`https://apis.google.com/js/api.js?onload=${l}`).catch(h=>n(h))}}).catch(e=>{throw Fe=null,e})}let Fe=null;function ho(t){return Fe=Fe||uo(t),Fe}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Re(5e3,15e3),po="__/auth/iframe",go="emulator/auth/iframe",_o={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vo(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wt(e,go):`https://${t.config.authDomain}/${po}`,r={apiKey:e.apiKey,appName:t.name,v:Je},i=mo.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ce(r).slice(1)}`}async function yo(t){const e=await ho(t),n=$().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:vo(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_o,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const c=V(t,"network-request-failed"),l=$().setTimeout(()=>{s(c)},fo.get());function h(){$().clearTimeout(l),i(r)}r.ping(h).then(h,()=>{s(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Eo=500,wo=600,To="_blank",bo="http://localhost";class Zt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function So(t,e,n,r=Eo,i=wo){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h=Object.assign(Object.assign({},Io),{width:r.toString(),height:i.toString(),top:s,left:c}),v=D().toLowerCase();n&&(l=Nn(v)?To:n),kn(v)&&(e=e||bo,h.scrollbars="yes");const f=Object.entries(h).reduce((m,[U,B])=>`${m}${U}=${B},`,"");if(ls(v)&&l!=="_self")return Ao(e||"",l),new Zt(null);const M=window.open(e||"",l,f);T(M,t,"popup-blocked");try{M.focus()}catch{}return new Zt(M)}function Ao(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="__/auth/handler",Ro="emulator/auth/handler";function en(t,e,n,r,i,s){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Je,eventId:i};if(e instanceof St){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",kr(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,v]of Object.entries(s||{}))c[h]=v}if(e instanceof ke){const h=e.getScopes().filter(v=>v!=="");h.length>0&&(c.scopes=h.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];return`${ko(t)}?${Ce(l).slice(1)}`}function ko({config:t}){return t.emulator?wt(t,Ro):`https://${t.authDomain}/${Co}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="webStorageSupport";class No{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hn,this._completeRedirectFn=eo,this._overrideRedirectResult=Ys}async _openPopup(e,n,r,i){var s;z((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const c=en(e,n,r,_t(),i);return So(e,c,At())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Ns(en(e,n,r,_t(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(z(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yo(e),r=new no(e);return n.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ct,{type:ct},i=>{var s;const c=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ct];c!==void 0&&n(!!c),q(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ao(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ln()||bt()||Ye()}}const Mo=No;var tn="@firebase/auth",nn="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Oo(t){we(new _e("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:c}=r.options;return((l,h)=>{T(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),T(!(c!=null&&c.includes(":")),"argument-error",{appName:l.name});const v={apiKey:s,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Un(t)},f=new fs(l,h,v);return ji(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),we(new _e("auth-internal",e=>{const n=Xe(e.getProvider("auth").getImmediate());return(r=>new Po(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fe(tn,nn,Do(t)),fe(tn,nn,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=5*60,Uo=fn("authIdTokenMaxAge")||Lo;let rn=null;const xo=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Uo)return;const i=n==null?void 0:n.token;rn!==i&&(rn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bo(t=ki()){const e=mn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Hi(t,{popupRedirectResolver:Mo,persistence:[Fs,Cs,Hn]}),r=fn("authTokenSyncURL");if(r){const s=xo(r);ws(n,s,()=>s(n.currentUser)),Es(n,c=>s(c))}const i=mr("auth");return i&&ps(n,`http://${i}`),n}Oo("Browser");const Fo={apiKey:"AIzaSyC0UMDhVLTX_lhPBdqU3BnHSg6z126F-_o",authDomain:"delfast-chargger-auth.firebaseapp.com",projectId:"delfast-chargger-auth",storageBucket:"delfast-chargger-auth.appspot.com",messagingSenderId:"146029576932",appId:"1:146029576932:web:ed75929b80ef941c11e2f1"},Vo=vn(Fo),$o=Bo(Vo),qo=new H;class Ho{constructor(){this.auth=$o,this.googleProvider=qo}signInWithGoogle(){return Gs(this.auth,this.googleProvider)}signOut(){return this.auth.signOut()}onAuthStateChanged(e){return Ts(this.auth,e)}isInitialized(){return new Promise(e=>{this.auth.onAuthStateChanged(e)})}getCurrentUser(){return this.auth.currentUser}}var lt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sn={},jo={get exports(){return sn},set exports(t){sn=t}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=Symbol.for("react.element"),Wo=Symbol.for("react.portal"),zo=Symbol.for("react.fragment"),Go=Symbol.for("react.strict_mode"),Ko=Symbol.for("react.profiler"),Jo=Symbol.for("react.provider"),Qo=Symbol.for("react.context"),Yo=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),Zo=Symbol.for("react.memo"),ea=Symbol.for("react.lazy"),on=Symbol.iterator;function ta(t){return t===null||typeof t!="object"?null:(t=on&&t[on]||t["@@iterator"],typeof t=="function"?t:null)}var Yn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xn=Object.assign,Zn={};function ve(t,e,n){this.props=t,this.context=e,this.refs=Zn,this.updater=n||Yn}ve.prototype.isReactComponent={};ve.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ve.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function er(){}er.prototype=ve.prototype;function Rt(t,e,n){this.props=t,this.context=e,this.refs=Zn,this.updater=n||Yn}var kt=Rt.prototype=new er;kt.constructor=Rt;Xn(kt,ve.prototype);kt.isPureReactComponent=!0;var an=Array.isArray,tr=Object.prototype.hasOwnProperty,Nt={current:null},nr={key:!0,ref:!0,__self:!0,__source:!0};function rr(t,e,n){var r,i={},s=null,c=null;if(e!=null)for(r in e.ref!==void 0&&(c=e.ref),e.key!==void 0&&(s=""+e.key),e)tr.call(e,r)&&!nr.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var h=Array(l),v=0;v<l;v++)h[v]=arguments[v+2];i.children=h}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Me,type:t,key:s,ref:c,props:i,_owner:Nt.current}}function na(t,e){return{$$typeof:Me,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mt(t){return typeof t=="object"&&t!==null&&t.$$typeof===Me}function ra(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cn=/\/+/g;function ut(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ra(""+t.key):e.toString(36)}function Ve(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var c=!1;if(t===null)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case Me:case Wo:c=!0}}if(c)return c=t,i=i(c),t=r===""?"."+ut(c,0):r,an(i)?(n="",t!=null&&(n=t.replace(cn,"$&/")+"/"),Ve(i,e,n,"",function(v){return v})):i!=null&&(Mt(i)&&(i=na(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(cn,"$&/")+"/")+t)),e.push(i)),1;if(c=0,r=r===""?".":r+":",an(t))for(var l=0;l<t.length;l++){s=t[l];var h=r+ut(s,l);c+=Ve(s,e,n,h,i)}else if(h=ta(t),typeof h=="function")for(t=h.call(t),l=0;!(s=t.next()).done;)s=s.value,h=r+ut(s,l++),c+=Ve(s,e,n,h,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return c}function Le(t,e,n){if(t==null)return t;var r=[],i=0;return Ve(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ia(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var L={current:null},$e={transition:null},sa={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:$e,ReactCurrentOwner:Nt};b.Children={map:Le,forEach:function(t,e,n){Le(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Le(t,function(){e++}),e},toArray:function(t){return Le(t,function(e){return e})||[]},only:function(t){if(!Mt(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=ve;b.Fragment=zo;b.Profiler=Ko;b.PureComponent=Rt;b.StrictMode=Go;b.Suspense=Xo;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sa;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xn({},t.props),i=t.key,s=t.ref,c=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,c=Nt.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(h in e)tr.call(e,h)&&!nr.hasOwnProperty(h)&&(r[h]=e[h]===void 0&&l!==void 0?l[h]:e[h])}var h=arguments.length-2;if(h===1)r.children=n;else if(1<h){l=Array(h);for(var v=0;v<h;v++)l[v]=arguments[v+2];r.children=l}return{$$typeof:Me,type:t.type,key:i,ref:s,props:r,_owner:c}};b.createContext=function(t){return t={$$typeof:Qo,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Jo,_context:t},t.Consumer=t};b.createElement=rr;b.createFactory=function(t){var e=rr.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:Yo,render:t}};b.isValidElement=Mt;b.lazy=function(t){return{$$typeof:ea,_payload:{_status:-1,_result:t},_init:ia}};b.memo=function(t,e){return{$$typeof:Zo,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=$e.transition;$e.transition={};try{t()}finally{$e.transition=e}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(t,e){return L.current.useCallback(t,e)};b.useContext=function(t){return L.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return L.current.useDeferredValue(t)};b.useEffect=function(t,e){return L.current.useEffect(t,e)};b.useId=function(){return L.current.useId()};b.useImperativeHandle=function(t,e,n){return L.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return L.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return L.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return L.current.useMemo(t,e)};b.useReducer=function(t,e,n){return L.current.useReducer(t,e,n)};b.useRef=function(t){return L.current.useRef(t)};b.useState=function(t){return L.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return L.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return L.current.useTransition()};b.version="18.2.0";(function(t){t.exports=b})(jo);var Ke={},oa={get exports(){return Ke},set exports(t){Ke=t}};(function(t,e){(function(r,i){t.exports=i()})(lt,function(){var r=function(i){var s="@VERSION@-@BUILDLEVEL@",c=i.localStorage||function(){var o={};return{setItem:function(a,d){o[a]=d},getItem:function(a){return o[a]},removeItem:function(a){delete o[a]}}}(),l={CONNECT:1,CONNACK:2,PUBLISH:3,PUBACK:4,PUBREC:5,PUBREL:6,PUBCOMP:7,SUBSCRIBE:8,SUBACK:9,UNSUBSCRIBE:10,UNSUBACK:11,PINGREQ:12,PINGRESP:13,DISCONNECT:14},h=function(o,a){for(var d in o)if(o.hasOwnProperty(d))if(a.hasOwnProperty(d)){if(typeof o[d]!==a[d])throw new Error(m(f.INVALID_TYPE,[typeof o[d],d]))}else{var p="Unknown property, "+d+". Valid properties are:";for(var _ in a)a.hasOwnProperty(_)&&(p=p+" "+_);throw new Error(p)}},v=function(o,a){return function(){return o.apply(a,arguments)}},f={OK:{code:0,text:"AMQJSC0000I OK."},CONNECT_TIMEOUT:{code:1,text:"AMQJSC0001E Connect timed out."},SUBSCRIBE_TIMEOUT:{code:2,text:"AMQJS0002E Subscribe timed out."},UNSUBSCRIBE_TIMEOUT:{code:3,text:"AMQJS0003E Unsubscribe timed out."},PING_TIMEOUT:{code:4,text:"AMQJS0004E Ping timed out."},INTERNAL_ERROR:{code:5,text:"AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"},CONNACK_RETURNCODE:{code:6,text:"AMQJS0006E Bad Connack return code:{0} {1}."},SOCKET_ERROR:{code:7,text:"AMQJS0007E Socket error:{0}."},SOCKET_CLOSE:{code:8,text:"AMQJS0008I Socket closed."},MALFORMED_UTF:{code:9,text:"AMQJS0009E Malformed UTF data:{0} {1} {2}."},UNSUPPORTED:{code:10,text:"AMQJS0010E {0} is not supported by this browser."},INVALID_STATE:{code:11,text:"AMQJS0011E Invalid state {0}."},INVALID_TYPE:{code:12,text:"AMQJS0012E Invalid type {0} for {1}."},INVALID_ARGUMENT:{code:13,text:"AMQJS0013E Invalid argument {0} for {1}."},UNSUPPORTED_OPERATION:{code:14,text:"AMQJS0014E Unsupported operation."},INVALID_STORED_DATA:{code:15,text:"AMQJS0015E Invalid data in local storage key={0} value={1}."},INVALID_MQTT_MESSAGE_TYPE:{code:16,text:"AMQJS0016E Invalid MQTT message type {0}."},MALFORMED_UNICODE:{code:17,text:"AMQJS0017E Malformed Unicode string:{0} {1}."},BUFFER_FULL:{code:18,text:"AMQJS0018E Message buffer is full, maximum buffer size: {0}."}},M={0:"Connection Accepted",1:"Connection Refused: unacceptable protocol version",2:"Connection Refused: identifier rejected",3:"Connection Refused: server unavailable",4:"Connection Refused: bad user name or password",5:"Connection Refused: not authorized"},m=function(o,a){var d=o.text;if(a){for(var p,_,g=0;g<a.length;g++)if(p="{"+g+"}",_=d.indexOf(p),_>0){var y=d.substring(0,_),A=d.substring(_+p.length);d=y+a[g]+A}}return d},U=[0,6,77,81,73,115,100,112,3],B=[0,4,77,81,84,84,4],P=function(o,a){this.type=o;for(var d in a)a.hasOwnProperty(d)&&(this[d]=a[d])};P.prototype.encode=function(){var o=(this.type&15)<<4,a=0,d=[],p=0,_;switch(this.messageIdentifier!==void 0&&(a+=2),this.type){case l.CONNECT:switch(this.mqttVersion){case 3:a+=U.length+3;break;case 4:a+=B.length+3;break}a+=O(this.clientId)+2,this.willMessage!==void 0&&(a+=O(this.willMessage.destinationName)+2,_=this.willMessage.payloadBytes,_ instanceof Uint8Array||(_=new Uint8Array(y)),a+=_.byteLength+2),this.userName!==void 0&&(a+=O(this.userName)+2),this.password!==void 0&&(a+=O(this.password)+2);break;case l.SUBSCRIBE:o|=2;for(var g=0;g<this.topics.length;g++)d[g]=O(this.topics[g]),a+=d[g]+2;a+=this.requestedQos.length;break;case l.UNSUBSCRIBE:o|=2;for(var g=0;g<this.topics.length;g++)d[g]=O(this.topics[g]),a+=d[g]+2;break;case l.PUBREL:o|=2;break;case l.PUBLISH:this.payloadMessage.duplicate&&(o|=8),o=o|=this.payloadMessage.qos<<1,this.payloadMessage.retained&&(o|=1),p=O(this.payloadMessage.destinationName),a+=p+2;var y=this.payloadMessage.payloadBytes;a+=y.byteLength,y instanceof ArrayBuffer?y=new Uint8Array(y):y instanceof Uint8Array||(y=new Uint8Array(y.buffer));break}var A=Pe(a),w=A.length+1,k=new ArrayBuffer(a+w),E=new Uint8Array(k);if(E[0]=o,E.set(A,1),this.type==l.PUBLISH)w=F(this.payloadMessage.destinationName,p,E,w);else if(this.type==l.CONNECT){switch(this.mqttVersion){case 3:E.set(U,w),w+=U.length;break;case 4:E.set(B,w),w+=B.length;break}var u=0;this.cleanSession&&(u=2),this.willMessage!==void 0&&(u|=4,u|=this.willMessage.qos<<3,this.willMessage.retained&&(u|=32)),this.userName!==void 0&&(u|=128),this.password!==void 0&&(u|=64),E[w++]=u,w=re(this.keepAliveInterval,E,w)}switch(this.messageIdentifier!==void 0&&(w=re(this.messageIdentifier,E,w)),this.type){case l.CONNECT:w=F(this.clientId,O(this.clientId),E,w),this.willMessage!==void 0&&(w=F(this.willMessage.destinationName,O(this.willMessage.destinationName),E,w),w=re(_.byteLength,E,w),E.set(_,w),w+=_.byteLength),this.userName!==void 0&&(w=F(this.userName,O(this.userName),E,w)),this.password!==void 0&&(w=F(this.password,O(this.password),E,w));break;case l.PUBLISH:E.set(y,w);break;case l.SUBSCRIBE:for(var g=0;g<this.topics.length;g++)w=F(this.topics[g],d[g],E,w),E[w++]=this.requestedQos[g];break;case l.UNSUBSCRIBE:for(var g=0;g<this.topics.length;g++)w=F(this.topics[g],d[g],E,w);break}return k};function ye(o,a){var d=a,p=o[a],_=p>>4,g=p&=15;a+=1;var y,A=0,w=1;do{if(a==o.length)return[null,d];y=o[a++],A+=(y&127)*w,w*=128}while(y&128);var k=a+A;if(k>o.length)return[null,d];var E=new P(_);switch(_){case l.CONNACK:var u=o[a++];u&1&&(E.sessionPresent=!0),E.returnCode=o[a++];break;case l.PUBLISH:var C=g>>1&3,S=G(o,a);a+=2;var x=Ie(o,a,S);a+=S,C>0&&(E.messageIdentifier=G(o,a),a+=2);var R=new J(o.subarray(a,k));(g&1)==1&&(R.retained=!0),(g&8)==8&&(R.duplicate=!0),R.qos=C,R.destinationName=x,E.payloadMessage=R;break;case l.PUBACK:case l.PUBREC:case l.PUBREL:case l.PUBCOMP:case l.UNSUBACK:E.messageIdentifier=G(o,a);break;case l.SUBACK:E.messageIdentifier=G(o,a),a+=2,E.returnCode=o.subarray(a,k);break}return[E,k]}function re(o,a,d){return a[d++]=o>>8,a[d++]=o%256,d}function F(o,a,d,p){return p=re(a,d,p),de(o,d,p),p+a}function G(o,a){return 256*o[a]+o[a+1]}function Pe(o){var a=new Array(1),d=0;do{var p=o%128;o=o>>7,o>0&&(p|=128),a[d++]=p}while(o>0&&d<4);return a}function O(o){for(var a=0,d=0;d<o.length;d++){var p=o.charCodeAt(d);p>2047?(55296<=p&&p<=56319&&(d++,a++),a+=3):p>127?a+=2:a++}return a}function de(o,a,d){for(var p=d,_=0;_<o.length;_++){var g=o.charCodeAt(_);if(55296<=g&&g<=56319){var y=o.charCodeAt(++_);if(isNaN(y))throw new Error(m(f.MALFORMED_UNICODE,[g,y]));g=(g-55296<<10)+(y-56320)+65536}g<=127?a[p++]=g:g<=2047?(a[p++]=g>>6&31|192,a[p++]=g&63|128):g<=65535?(a[p++]=g>>12&15|224,a[p++]=g>>6&63|128,a[p++]=g&63|128):(a[p++]=g>>18&7|240,a[p++]=g>>12&63|128,a[p++]=g>>6&63|128,a[p++]=g&63|128)}return a}function Ie(o,a,d){for(var p="",_,g=a;g<a+d;){var y=o[g++];if(y<128)_=y;else{var A=o[g++]-128;if(A<0)throw new Error(m(f.MALFORMED_UTF,[y.toString(16),A.toString(16),""]));if(y<224)_=64*(y-192)+A;else{var w=o[g++]-128;if(w<0)throw new Error(m(f.MALFORMED_UTF,[y.toString(16),A.toString(16),w.toString(16)]));if(y<240)_=4096*(y-224)+64*A+w;else{var k=o[g++]-128;if(k<0)throw new Error(m(f.MALFORMED_UTF,[y.toString(16),A.toString(16),w.toString(16),k.toString(16)]));if(y<248)_=262144*(y-240)+4096*A+64*w+k;else throw new Error(m(f.MALFORMED_UTF,[y.toString(16),A.toString(16),w.toString(16),k.toString(16)]))}}}_>65535&&(_-=65536,p+=String.fromCharCode(55296+(_>>10)),_=56320+(_&1023)),p+=String.fromCharCode(_)}return p}var De=function(o,a){this._client=o,this._keepAliveInterval=a*1e3,this.isReset=!1;var d=new P(l.PINGREQ).encode(),p=function(g){return function(){return _.apply(g)}},_=function(){this.isReset?(this.isReset=!1,this._client._trace("Pinger.doPing","send PINGREQ"),this._client.socket.send(d),this.timeout=setTimeout(p(this),this._keepAliveInterval)):(this._client._trace("Pinger.doPing","Timed out"),this._client._disconnected(f.PING_TIMEOUT.code,m(f.PING_TIMEOUT)))};this.reset=function(){this.isReset=!0,clearTimeout(this.timeout),this._keepAliveInterval>0&&(this.timeout=setTimeout(p(this),this._keepAliveInterval))},this.cancel=function(){clearTimeout(this.timeout)}},K=function(o,a,d,p){a||(a=30);var _=function(g,y,A){return function(){return g.apply(y,A)}};this.timeout=setTimeout(_(d,o,p),a*1e3),this.cancel=function(){clearTimeout(this.timeout)}},I=function(o,a,d,p,_){if(!("WebSocket"in i&&i.WebSocket!==null))throw new Error(m(f.UNSUPPORTED,["WebSocket"]));if(!("ArrayBuffer"in i&&i.ArrayBuffer!==null))throw new Error(m(f.UNSUPPORTED,["ArrayBuffer"]));this._trace("Paho.Client",o,a,d,p,_),this.host=a,this.port=d,this.path=p,this.uri=o,this.clientId=_,this._wsuri=null,this._localKey=a+":"+d+(p!="/mqtt"?":"+p:"")+":"+_+":",this._msg_queue=[],this._buffered_msg_queue=[],this._sentMessages={},this._receivedMessages={},this._notify_msg_sent={},this._message_identifier=1,this._sequence=0;for(var g in c)(g.indexOf("Sent:"+this._localKey)===0||g.indexOf("Received:"+this._localKey)===0)&&this.restore(g)};I.prototype.host=null,I.prototype.port=null,I.prototype.path=null,I.prototype.uri=null,I.prototype.clientId=null,I.prototype.socket=null,I.prototype.connected=!1,I.prototype.maxMessageIdentifier=65536,I.prototype.connectOptions=null,I.prototype.hostIndex=null,I.prototype.onConnected=null,I.prototype.onConnectionLost=null,I.prototype.onMessageDelivered=null,I.prototype.onMessageArrived=null,I.prototype.traceFunction=null,I.prototype._msg_queue=null,I.prototype._buffered_msg_queue=null,I.prototype._connectTimeout=null,I.prototype.sendPinger=null,I.prototype.receivePinger=null,I.prototype._reconnectInterval=1,I.prototype._reconnecting=!1,I.prototype._reconnectTimeout=null,I.prototype.disconnectedPublishing=!1,I.prototype.disconnectedBufferSize=5e3,I.prototype.receiveBuffer=null,I.prototype._traceBuffer=null,I.prototype._MAX_TRACE_ENTRIES=100,I.prototype.connect=function(o){var a=this._traceMask(o,"password");if(this._trace("Client.connect",a,this.socket,this.connected),this.connected)throw new Error(m(f.INVALID_STATE,["already connected"]));if(this.socket)throw new Error(m(f.INVALID_STATE,["already connected"]));this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),this.connectOptions=o,this._reconnectInterval=1,this._reconnecting=!1,o.uris?(this.hostIndex=0,this._doConnect(o.uris[0])):this._doConnect(this.uri)},I.prototype.subscribe=function(o,a){if(this._trace("Client.subscribe",o,a),!this.connected)throw new Error(m(f.INVALID_STATE,["not connected"]));var d=new P(l.SUBSCRIBE);d.topics=o.constructor===Array?o:[o],a.qos===void 0&&(a.qos=0),d.requestedQos=[];for(var p=0;p<d.topics.length;p++)d.requestedQos[p]=a.qos;a.onSuccess&&(d.onSuccess=function(_){a.onSuccess({invocationContext:a.invocationContext,grantedQos:_})}),a.onFailure&&(d.onFailure=function(_){a.onFailure({invocationContext:a.invocationContext,errorCode:_,errorMessage:m(_)})}),a.timeout&&(d.timeOut=new K(this,a.timeout,a.onFailure,[{invocationContext:a.invocationContext,errorCode:f.SUBSCRIBE_TIMEOUT.code,errorMessage:m(f.SUBSCRIBE_TIMEOUT)}])),this._requires_ack(d),this._schedule_message(d)},I.prototype.unsubscribe=function(o,a){if(this._trace("Client.unsubscribe",o,a),!this.connected)throw new Error(m(f.INVALID_STATE,["not connected"]));var d=new P(l.UNSUBSCRIBE);d.topics=o.constructor===Array?o:[o],a.onSuccess&&(d.callback=function(){a.onSuccess({invocationContext:a.invocationContext})}),a.timeout&&(d.timeOut=new K(this,a.timeout,a.onFailure,[{invocationContext:a.invocationContext,errorCode:f.UNSUBSCRIBE_TIMEOUT.code,errorMessage:m(f.UNSUBSCRIBE_TIMEOUT)}])),this._requires_ack(d),this._schedule_message(d)},I.prototype.send=function(o){this._trace("Client.send",o);var a=new P(l.PUBLISH);if(a.payloadMessage=o,this.connected)o.qos>0?this._requires_ack(a):this.onMessageDelivered&&(this._notify_msg_sent[a]=this.onMessageDelivered(a.payloadMessage)),this._schedule_message(a);else if(this._reconnecting&&this.disconnectedPublishing){var d=Object.keys(this._sentMessages).length+this._buffered_msg_queue.length;if(d>this.disconnectedBufferSize)throw new Error(m(f.BUFFER_FULL,[this.disconnectedBufferSize]));o.qos>0?this._requires_ack(a):(a.sequence=++this._sequence,this._buffered_msg_queue.unshift(a))}else throw new Error(m(f.INVALID_STATE,["not connected"]))},I.prototype.disconnect=function(){if(this._trace("Client.disconnect"),this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),!this.socket)throw new Error(m(f.INVALID_STATE,["not connecting or connected"]));var o=new P(l.DISCONNECT);this._notify_msg_sent[o]=v(this._disconnected,this),this._schedule_message(o)},I.prototype.getTraceLog=function(){if(this._traceBuffer!==null){this._trace("Client.getTraceLog",new Date),this._trace("Client.getTraceLog in flight messages",this._sentMessages.length);for(var o in this._sentMessages)this._trace("_sentMessages ",o,this._sentMessages[o]);for(var o in this._receivedMessages)this._trace("_receivedMessages ",o,this._receivedMessages[o]);return this._traceBuffer}},I.prototype.startTrace=function(){this._traceBuffer===null&&(this._traceBuffer=[]),this._trace("Client.startTrace",new Date,s)},I.prototype.stopTrace=function(){delete this._traceBuffer},I.prototype._doConnect=function(o){if(this.connectOptions.useSSL){var a=o.split(":");a[0]="wss",o=a.join(":")}this._wsuri=o,this.connected=!1,this.connectOptions.mqttVersion<4?this.socket=new WebSocket(o,["mqttv3.1"]):this.socket=new WebSocket(o,["mqtt"]),this.socket.binaryType="arraybuffer",this.socket.onopen=v(this._on_socket_open,this),this.socket.onmessage=v(this._on_socket_message,this),this.socket.onerror=v(this._on_socket_error,this),this.socket.onclose=v(this._on_socket_close,this),this.sendPinger=new De(this,this.connectOptions.keepAliveInterval),this.receivePinger=new De(this,this.connectOptions.keepAliveInterval),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._connectTimeout=new K(this,this.connectOptions.timeout,this._disconnected,[f.CONNECT_TIMEOUT.code,m(f.CONNECT_TIMEOUT)])},I.prototype._schedule_message=function(o){this._msg_queue.unshift(o),this.connected&&this._process_queue()},I.prototype.store=function(o,a){var d={type:a.type,messageIdentifier:a.messageIdentifier,version:1};switch(a.type){case l.PUBLISH:a.pubRecReceived&&(d.pubRecReceived=!0),d.payloadMessage={};for(var p="",_=a.payloadMessage.payloadBytes,g=0;g<_.length;g++)_[g]<=15?p=p+"0"+_[g].toString(16):p=p+_[g].toString(16);d.payloadMessage.payloadHex=p,d.payloadMessage.qos=a.payloadMessage.qos,d.payloadMessage.destinationName=a.payloadMessage.destinationName,a.payloadMessage.duplicate&&(d.payloadMessage.duplicate=!0),a.payloadMessage.retained&&(d.payloadMessage.retained=!0),o.indexOf("Sent:")===0&&(a.sequence===void 0&&(a.sequence=++this._sequence),d.sequence=a.sequence);break;default:throw Error(m(f.INVALID_STORED_DATA,[o+this._localKey+a.messageIdentifier,d]))}c.setItem(o+this._localKey+a.messageIdentifier,JSON.stringify(d))},I.prototype.restore=function(o){var a=c.getItem(o),d=JSON.parse(a),p=new P(d.type,d);switch(d.type){case l.PUBLISH:for(var _=d.payloadMessage.payloadHex,g=new ArrayBuffer(_.length/2),y=new Uint8Array(g),A=0;_.length>=2;){var w=parseInt(_.substring(0,2),16);_=_.substring(2,_.length),y[A++]=w}var k=new J(y);k.qos=d.payloadMessage.qos,k.destinationName=d.payloadMessage.destinationName,d.payloadMessage.duplicate&&(k.duplicate=!0),d.payloadMessage.retained&&(k.retained=!0),p.payloadMessage=k;break;default:throw Error(m(f.INVALID_STORED_DATA,[o,a]))}o.indexOf("Sent:"+this._localKey)===0?(p.payloadMessage.duplicate=!0,this._sentMessages[p.messageIdentifier]=p):o.indexOf("Received:"+this._localKey)===0&&(this._receivedMessages[p.messageIdentifier]=p)},I.prototype._process_queue=function(){for(var o=null;o=this._msg_queue.pop();)this._socket_send(o),this._notify_msg_sent[o]&&(this._notify_msg_sent[o](),delete this._notify_msg_sent[o])},I.prototype._requires_ack=function(o){var a=Object.keys(this._sentMessages).length;if(a>this.maxMessageIdentifier)throw Error("Too many messages:"+a);for(;this._sentMessages[this._message_identifier]!==void 0;)this._message_identifier++;o.messageIdentifier=this._message_identifier,this._sentMessages[o.messageIdentifier]=o,o.type===l.PUBLISH&&this.store("Sent:",o),this._message_identifier===this.maxMessageIdentifier&&(this._message_identifier=1)},I.prototype._on_socket_open=function(){var o=new P(l.CONNECT,this.connectOptions);o.clientId=this.clientId,this._socket_send(o)},I.prototype._on_socket_message=function(o){this._trace("Client._on_socket_message",o.data);for(var a=this._deframeMessages(o.data),d=0;d<a.length;d+=1)this._handleMessage(a[d])},I.prototype._deframeMessages=function(o){var a=new Uint8Array(o),d=[];if(this.receiveBuffer){var p=new Uint8Array(this.receiveBuffer.length+a.length);p.set(this.receiveBuffer),p.set(a,this.receiveBuffer.length),a=p,delete this.receiveBuffer}try{for(var _=0;_<a.length;){var g=ye(a,_),y=g[0];if(_=g[1],y!==null)d.push(y);else break}_<a.length&&(this.receiveBuffer=a.subarray(_))}catch(w){var A=w.hasOwnProperty("stack")=="undefined"?w.stack.toString():"No Error Stack Available";this._disconnected(f.INTERNAL_ERROR.code,m(f.INTERNAL_ERROR,[w.message,A]));return}return d},I.prototype._handleMessage=function(o){this._trace("Client._handleMessage",o);try{switch(o.type){case l.CONNACK:if(this._connectTimeout.cancel(),this._reconnectTimeout&&this._reconnectTimeout.cancel(),this.connectOptions.cleanSession){for(var a in this._sentMessages){var u=this._sentMessages[a];c.removeItem("Sent:"+this._localKey+u.messageIdentifier)}this._sentMessages={};for(var a in this._receivedMessages){var k=this._receivedMessages[a];c.removeItem("Received:"+this._localKey+k.messageIdentifier)}this._receivedMessages={}}if(o.returnCode===0)this.connected=!0,this.connectOptions.uris&&(this.hostIndex=this.connectOptions.uris.length);else{this._disconnected(f.CONNACK_RETURNCODE.code,m(f.CONNACK_RETURNCODE,[o.returnCode,M[o.returnCode]]));break}var _=[];for(var d in this._sentMessages)this._sentMessages.hasOwnProperty(d)&&_.push(this._sentMessages[d]);if(this._buffered_msg_queue.length>0)for(var p=null;p=this._buffered_msg_queue.pop();)_.push(p),this.onMessageDelivered&&(this._notify_msg_sent[p]=this.onMessageDelivered(p.payloadMessage));for(var _=_.sort(function(S,x){return S.sequence-x.sequence}),g=0,y=_.length;g<y;g++){var u=_[g];if(u.type==l.PUBLISH&&u.pubRecReceived){var A=new P(l.PUBREL,{messageIdentifier:u.messageIdentifier});this._schedule_message(A)}else this._schedule_message(u)}this.connectOptions.onSuccess&&this.connectOptions.onSuccess({invocationContext:this.connectOptions.invocationContext});var w=!1;this._reconnecting&&(w=!0,this._reconnectInterval=1,this._reconnecting=!1),this._connected(w,this._wsuri),this._process_queue();break;case l.PUBLISH:this._receivePublish(o);break;case l.PUBACK:var u=this._sentMessages[o.messageIdentifier];u&&(delete this._sentMessages[o.messageIdentifier],c.removeItem("Sent:"+this._localKey+o.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(u.payloadMessage));break;case l.PUBREC:var u=this._sentMessages[o.messageIdentifier];if(u){u.pubRecReceived=!0;var A=new P(l.PUBREL,{messageIdentifier:o.messageIdentifier});this.store("Sent:",u),this._schedule_message(A)}break;case l.PUBREL:var k=this._receivedMessages[o.messageIdentifier];c.removeItem("Received:"+this._localKey+o.messageIdentifier),k&&(this._receiveMessage(k),delete this._receivedMessages[o.messageIdentifier]);var E=new P(l.PUBCOMP,{messageIdentifier:o.messageIdentifier});this._schedule_message(E);break;case l.PUBCOMP:var u=this._sentMessages[o.messageIdentifier];delete this._sentMessages[o.messageIdentifier],c.removeItem("Sent:"+this._localKey+o.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(u.payloadMessage);break;case l.SUBACK:var u=this._sentMessages[o.messageIdentifier];u&&(u.timeOut&&u.timeOut.cancel(),o.returnCode[0]===128?u.onFailure&&u.onFailure(o.returnCode):u.onSuccess&&u.onSuccess(o.returnCode),delete this._sentMessages[o.messageIdentifier]);break;case l.UNSUBACK:var u=this._sentMessages[o.messageIdentifier];u&&(u.timeOut&&u.timeOut.cancel(),u.callback&&u.callback(),delete this._sentMessages[o.messageIdentifier]);break;case l.PINGRESP:this.sendPinger.reset();break;case l.DISCONNECT:this._disconnected(f.INVALID_MQTT_MESSAGE_TYPE.code,m(f.INVALID_MQTT_MESSAGE_TYPE,[o.type]));break;default:this._disconnected(f.INVALID_MQTT_MESSAGE_TYPE.code,m(f.INVALID_MQTT_MESSAGE_TYPE,[o.type]))}}catch(S){var C=S.hasOwnProperty("stack")=="undefined"?S.stack.toString():"No Error Stack Available";this._disconnected(f.INTERNAL_ERROR.code,m(f.INTERNAL_ERROR,[S.message,C]));return}},I.prototype._on_socket_error=function(o){this._reconnecting||this._disconnected(f.SOCKET_ERROR.code,m(f.SOCKET_ERROR,[o.data]))},I.prototype._on_socket_close=function(){this._reconnecting||this._disconnected(f.SOCKET_CLOSE.code,m(f.SOCKET_CLOSE))},I.prototype._socket_send=function(o){if(o.type==1){var a=this._traceMask(o,"password");this._trace("Client._socket_send",a)}else this._trace("Client._socket_send",o);this.socket.send(o.encode()),this.sendPinger.reset()},I.prototype._receivePublish=function(o){switch(o.payloadMessage.qos){case"undefined":case 0:this._receiveMessage(o);break;case 1:var a=new P(l.PUBACK,{messageIdentifier:o.messageIdentifier});this._schedule_message(a),this._receiveMessage(o);break;case 2:this._receivedMessages[o.messageIdentifier]=o,this.store("Received:",o);var d=new P(l.PUBREC,{messageIdentifier:o.messageIdentifier});this._schedule_message(d);break;default:throw Error("Invaild qos="+o.payloadMessage.qos)}},I.prototype._receiveMessage=function(o){this.onMessageArrived&&this.onMessageArrived(o.payloadMessage)},I.prototype._connected=function(o,a){this.onConnected&&this.onConnected(o,a)},I.prototype._reconnect=function(){this._trace("Client._reconnect"),this.connected||(this._reconnecting=!0,this.sendPinger.cancel(),this.receivePinger.cancel(),this._reconnectInterval<128&&(this._reconnectInterval=this._reconnectInterval*2),this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri))},I.prototype._disconnected=function(o,a){if(this._trace("Client._disconnected",o,a),o!==void 0&&this._reconnecting){this._reconnectTimeout=new K(this,this._reconnectInterval,this._reconnect);return}if(this.sendPinger.cancel(),this.receivePinger.cancel(),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._msg_queue=[],this._buffered_msg_queue=[],this._notify_msg_sent={},this.socket&&(this.socket.onopen=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket.onclose=null,this.socket.readyState===1&&this.socket.close(),delete this.socket),this.connectOptions.uris&&this.hostIndex<this.connectOptions.uris.length-1)this.hostIndex++,this._doConnect(this.connectOptions.uris[this.hostIndex]);else if(o===void 0&&(o=f.OK.code,a=m(f.OK)),this.connected){if(this.connected=!1,this.onConnectionLost&&this.onConnectionLost({errorCode:o,errorMessage:a,reconnect:this.connectOptions.reconnect,uri:this._wsuri}),o!==f.OK.code&&this.connectOptions.reconnect){this._reconnectInterval=1,this._reconnect();return}}else this.connectOptions.mqttVersion===4&&this.connectOptions.mqttVersionExplicit===!1?(this._trace("Failed to connect V4, dropping back to V3"),this.connectOptions.mqttVersion=3,this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri)):this.connectOptions.onFailure&&this.connectOptions.onFailure({invocationContext:this.connectOptions.invocationContext,errorCode:o,errorMessage:a})},I.prototype._trace=function(){if(this.traceFunction){var o=Array.prototype.slice.call(arguments);for(var a in o)typeof o[a]<"u"&&o.splice(a,1,JSON.stringify(o[a]));var d=o.join("");this.traceFunction({severity:"Debug",message:d})}if(this._traceBuffer!==null)for(var a=0,p=arguments.length;a<p;a++)this._traceBuffer.length==this._MAX_TRACE_ENTRIES&&this._traceBuffer.shift(),a===0?this._traceBuffer.push(arguments[a]):typeof arguments[a]>"u"?this._traceBuffer.push(arguments[a]):this._traceBuffer.push("  "+JSON.stringify(arguments[a]))},I.prototype._traceMask=function(o,a){var d={};for(var p in o)o.hasOwnProperty(p)&&(p==a?d[p]="******":d[p]=o[p]);return d};var or=function(o,a,d,p){var _;if(typeof o!="string")throw new Error(m(f.INVALID_TYPE,[typeof o,"host"]));if(arguments.length==2){p=a,_=o;var g=_.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);if(g)o=g[4]||g[2],a=parseInt(g[7]),d=g[8];else throw new Error(m(f.INVALID_ARGUMENT,[o,"host"]))}else{if(arguments.length==3&&(p=d,d="/mqtt"),typeof a!="number"||a<0)throw new Error(m(f.INVALID_TYPE,[typeof a,"port"]));if(typeof d!="string")throw new Error(m(f.INVALID_TYPE,[typeof d,"path"]));var y=o.indexOf(":")!==-1&&o.slice(0,1)!=="["&&o.slice(-1)!=="]";_="ws://"+(y?"["+o+"]":o)+":"+a+d}for(var A=0,w=0;w<p.length;w++){var k=p.charCodeAt(w);55296<=k&&k<=56319&&w++,A++}if(typeof p!="string"||A>65535)throw new Error(m(f.INVALID_ARGUMENT,[p,"clientId"]));var E=new I(_,o,a,d,p);Object.defineProperties(this,{host:{get:function(){return o},set:function(){throw new Error(m(f.UNSUPPORTED_OPERATION))}},port:{get:function(){return a},set:function(){throw new Error(m(f.UNSUPPORTED_OPERATION))}},path:{get:function(){return d},set:function(){throw new Error(m(f.UNSUPPORTED_OPERATION))}},uri:{get:function(){return _},set:function(){throw new Error(m(f.UNSUPPORTED_OPERATION))}},clientId:{get:function(){return E.clientId},set:function(){throw new Error(m(f.UNSUPPORTED_OPERATION))}},onConnected:{get:function(){return E.onConnected},set:function(u){if(typeof u=="function")E.onConnected=u;else throw new Error(m(f.INVALID_TYPE,[typeof u,"onConnected"]))}},disconnectedPublishing:{get:function(){return E.disconnectedPublishing},set:function(u){E.disconnectedPublishing=u}},disconnectedBufferSize:{get:function(){return E.disconnectedBufferSize},set:function(u){E.disconnectedBufferSize=u}},onConnectionLost:{get:function(){return E.onConnectionLost},set:function(u){if(typeof u=="function")E.onConnectionLost=u;else throw new Error(m(f.INVALID_TYPE,[typeof u,"onConnectionLost"]))}},onMessageDelivered:{get:function(){return E.onMessageDelivered},set:function(u){if(typeof u=="function")E.onMessageDelivered=u;else throw new Error(m(f.INVALID_TYPE,[typeof u,"onMessageDelivered"]))}},onMessageArrived:{get:function(){return E.onMessageArrived},set:function(u){if(typeof u=="function")E.onMessageArrived=u;else throw new Error(m(f.INVALID_TYPE,[typeof u,"onMessageArrived"]))}},trace:{get:function(){return E.traceFunction},set:function(u){if(typeof u=="function")E.traceFunction=u;else throw new Error(m(f.INVALID_TYPE,[typeof u,"onTrace"]))}}}),this.connect=function(u){if(u=u||{},h(u,{timeout:"number",userName:"string",password:"string",willMessage:"object",keepAliveInterval:"number",cleanSession:"boolean",useSSL:"boolean",invocationContext:"object",onSuccess:"function",onFailure:"function",hosts:"object",ports:"object",reconnect:"boolean",mqttVersion:"number",mqttVersionExplicit:"boolean",uris:"object"}),u.keepAliveInterval===void 0&&(u.keepAliveInterval=60),u.mqttVersion>4||u.mqttVersion<3)throw new Error(m(f.INVALID_ARGUMENT,[u.mqttVersion,"connectOptions.mqttVersion"]));if(u.mqttVersion===void 0?(u.mqttVersionExplicit=!1,u.mqttVersion=4):u.mqttVersionExplicit=!0,u.password!==void 0&&u.userName===void 0)throw new Error(m(f.INVALID_ARGUMENT,[u.password,"connectOptions.password"]));if(u.willMessage){if(!(u.willMessage instanceof J))throw new Error(m(f.INVALID_TYPE,[u.willMessage,"connectOptions.willMessage"]));if(u.willMessage.stringPayload=null,typeof u.willMessage.destinationName>"u")throw new Error(m(f.INVALID_TYPE,[typeof u.willMessage.destinationName,"connectOptions.willMessage.destinationName"]))}if(typeof u.cleanSession>"u"&&(u.cleanSession=!0),u.hosts){if(!(u.hosts instanceof Array))throw new Error(m(f.INVALID_ARGUMENT,[u.hosts,"connectOptions.hosts"]));if(u.hosts.length<1)throw new Error(m(f.INVALID_ARGUMENT,[u.hosts,"connectOptions.hosts"]));for(var C=!1,S=0;S<u.hosts.length;S++){if(typeof u.hosts[S]!="string")throw new Error(m(f.INVALID_TYPE,[typeof u.hosts[S],"connectOptions.hosts["+S+"]"]));if(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(u.hosts[S])){if(S===0)C=!0;else if(!C)throw new Error(m(f.INVALID_ARGUMENT,[u.hosts[S],"connectOptions.hosts["+S+"]"]))}else if(C)throw new Error(m(f.INVALID_ARGUMENT,[u.hosts[S],"connectOptions.hosts["+S+"]"]))}if(C)u.uris=u.hosts;else{if(!u.ports)throw new Error(m(f.INVALID_ARGUMENT,[u.ports,"connectOptions.ports"]));if(!(u.ports instanceof Array))throw new Error(m(f.INVALID_ARGUMENT,[u.ports,"connectOptions.ports"]));if(u.hosts.length!==u.ports.length)throw new Error(m(f.INVALID_ARGUMENT,[u.ports,"connectOptions.ports"]));u.uris=[];for(var S=0;S<u.hosts.length;S++){if(typeof u.ports[S]!="number"||u.ports[S]<0)throw new Error(m(f.INVALID_TYPE,[typeof u.ports[S],"connectOptions.ports["+S+"]"]));var x=u.hosts[S],R=u.ports[S],ar=x.indexOf(":")!==-1;_="ws://"+(ar?"["+x+"]":x)+":"+R+d,u.uris.push(_)}}}E.connect(u)},this.subscribe=function(u,C){if(typeof u!="string"&&u.constructor!==Array)throw new Error("Invalid argument:"+u);if(C=C||{},h(C,{qos:"number",invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),C.timeout&&!C.onFailure)throw new Error("subscribeOptions.timeout specified with no onFailure callback.");if(typeof C.qos<"u"&&!(C.qos===0||C.qos===1||C.qos===2))throw new Error(m(f.INVALID_ARGUMENT,[C.qos,"subscribeOptions.qos"]));E.subscribe(u,C)},this.unsubscribe=function(u,C){if(typeof u!="string"&&u.constructor!==Array)throw new Error("Invalid argument:"+u);if(C=C||{},h(C,{invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),C.timeout&&!C.onFailure)throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");E.unsubscribe(u,C)},this.send=function(u,C,S,x){var R;if(arguments.length===0)throw new Error("Invalid argument.length");if(arguments.length==1){if(!(u instanceof J)&&typeof u!="string")throw new Error("Invalid argument:"+typeof u);if(R=u,typeof R.destinationName>"u")throw new Error(m(f.INVALID_ARGUMENT,[R.destinationName,"Message.destinationName"]));E.send(R)}else R=new J(C),R.destinationName=u,arguments.length>=3&&(R.qos=S),arguments.length>=4&&(R.retained=x),E.send(R)},this.publish=function(u,C,S,x){var R;if(arguments.length===0)throw new Error("Invalid argument.length");if(arguments.length==1){if(!(u instanceof J)&&typeof u!="string")throw new Error("Invalid argument:"+typeof u);if(R=u,typeof R.destinationName>"u")throw new Error(m(f.INVALID_ARGUMENT,[R.destinationName,"Message.destinationName"]));E.send(R)}else R=new J(C),R.destinationName=u,arguments.length>=3&&(R.qos=S),arguments.length>=4&&(R.retained=x),E.send(R)},this.disconnect=function(){E.disconnect()},this.getTraceLog=function(){return E.getTraceLog()},this.startTrace=function(){E.startTrace()},this.stopTrace=function(){E.stopTrace()},this.isConnected=function(){return E.connected}},J=function(o){var a;if(typeof o=="string"||o instanceof ArrayBuffer||ArrayBuffer.isView(o)&&!(o instanceof DataView))a=o;else throw m(f.INVALID_ARGUMENT,[o,"newPayload"]);var d,p=0,_=!1,g=!1;Object.defineProperties(this,{payloadString:{enumerable:!0,get:function(){return typeof a=="string"?a:Ie(a,0,a.length)}},payloadBytes:{enumerable:!0,get:function(){if(typeof a=="string"){var y=new ArrayBuffer(O(a)),A=new Uint8Array(y);return de(a,A,0),A}else return a}},destinationName:{enumerable:!0,get:function(){return d},set:function(y){if(typeof y=="string")d=y;else throw new Error(m(f.INVALID_ARGUMENT,[y,"newDestinationName"]))}},qos:{enumerable:!0,get:function(){return p},set:function(y){if(y===0||y===1||y===2)p=y;else throw new Error("Invalid argument:"+y)}},retained:{enumerable:!0,get:function(){return _},set:function(y){if(typeof y=="boolean")_=y;else throw new Error(m(f.INVALID_ARGUMENT,[y,"newRetained"]))}},topic:{enumerable:!0,get:function(){return d},set:function(y){d=y}},duplicate:{enumerable:!0,get:function(){return g},set:function(y){g=y}}})};return{Client:or,Message:J}}(typeof lt<"u"?lt:typeof self<"u"?self:typeof window<"u"?window:{});return r})})(oa);class aa{constructor(e){ie(this,"onConnectionLost",e=>{console.log("onConnectionLost (TODO: reconnect?)",e),this.connectStatus="Disconnected",e.errorCode!==0&&console.log("onConnectionLost:"+e.errorMessage),this.onMQTTLost&&this.onMQTTLost(e)});ie(this,"connect",()=>{const e="charger.navi.cc",r="web_"+this.id,i=!0,s=3;this.client=new Ke.Client(e,443,r),this.client.onConnectionLost=this.onConnectionLost,this.client.onMessageArrived=c=>{console.log("onMessageArrived",c);try{this.data=JSON.parse(c.payloadString),this.onMessageArrived&&this.onMessageArrived(this.data)}catch(l){console.log("error",l)}},console.log("Connecting...."),this.client.connect({useSSL:i,onSuccess:()=>{console.log("Connected"),this.connectStatus="Connected",this.client.subscribe("charger/"+this.id+"/status"),this.onMQTTConnect&&this.onMQTTConnect()},onFailure:c=>{console.log("Connection failed",c),this.connectStatus="Connection failed"},timeout:s})});ie(this,"subscribe",(e,n=0)=>{if(!this.client){console.log("client is not connected");return}this.client.subscribe(e,{qos:n})});ie(this,"publish",(e,n,r=0,i=!1)=>{if(!this.client){console.log("client is not connected");return}console.log("publish",e,n,r,i);const s=new Ke.Message(n);s.destinationName=e,s.qos=r,s.retained=i,this.client.send(s)});ie(this,"disconnect",()=>{if(!this.client){console.log("client is not connected");return}this.client.disconnect(),this.client=null});ie(this,"isConnected",()=>this.client&&this.client.isConnected());this.id=e,this.client=null,this.connectStatus="Disconnected",this.onMQTTConnect=null,this.onMQTTLost=null,this.onMessageArrived=null,this.data={}}}const he=window.location.hash.slice(1);window.onhashchange=function(){window.location.reload()};const ca=t=>{t.innerHTML=`
    <div>
      Error. Wrong URL. Rescan the QR code.
    </div>
  `};const Pt="/vite.svg",la="/google.svg",ua=(t,e)=>{const n=r=>{r.addEventListener("click",()=>{console.log("login clicked"),e.signInWithGoogle().then(i=>{console.log("result=",i)}).catch(i=>{})})};t.innerHTML=`
        <div>
          <img src="${Pt}" class="logo" alt="Vite logo" />
          <h1>Wellcome to Charger!</h1>
          <h2>You must be logged in to use this app.</h2>
          <div class="card">
            <button id="login" type="button">
                <img src="${la}" class="login" alt="Google logo" />
                Login with Google
            </button>
          </div>
        </div>
      `,n(document.querySelector("#login"))};class da{constructor(){this.charger=null}setCharger(e){this.charger=e}getCharger(){return this.charger}getChargerStatus(){return this.charger.status}addEventListener(e,n){this.charger.addEventListener(e,n)}}const ha=new da;const fa="/giphy.gif",pa="/stop.svg";const ga="/logout.svg",ir=(t,e)=>{const n=r=>{r.addEventListener("click",()=>{console.log("logout clicked"),e.signOut().then(()=>{console.log("signout successful")}).catch(i=>{console.log("signout error=",i)})})};t.innerHTML=`
    <div class="logout">
      <button id="logout_btn" type="button">
        <img src="${ga}" alt="Logout logo" />
        <span>Logout</span>
      </button>
    </div>
  `,n(t.querySelector("#logout_btn"))};const _a="/wallet.svg",ma=(t,e,n)=>{t.innerHTML=`
        <div id="balance">
            <span>Ваш баланс:</span>
            <span id="balance_value">$50</span>
        </div>
        <div>
            <button id="add_balance">
                <img src="${_a}" alt="Wallet logo" />
                <span>Поповнити рахунок</span>
            </button>
        </div>
    `},tt=(t,e,n,r,i,s)=>{t.innerHTML=`
    <div class="charger">
        <div class="logout top-right-a"></div>
        <img src="${Pt}" class="logo" alt="Vite logo" />
        <h2>Вітаю, ${n.displayName}!</h2>
        <div id="balance">Loading...</div>
        ${s}
        <div>
          <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
  `,ir(document.querySelector(".logout"),r),ma(document.querySelector("#balance"))},sr=(t,e,n,r,i,s)=>{t.innerHTML=`
    <div class="header">
      <img src="${Pt}" alt="Vite logo" />
      <div class="name">${n.displayName}!</div>
      <div class="balance">$50</div>
      <div class="logout p-6"></div>
    </div>
    <div class="charger">
        ${s}
      </div>
  `,ir(document.querySelector(".logout"),r)},va=(t,e,n,r,i)=>{tt(t,e,n,r,i,"Очікую відповідь від станції заряджання...")},ya=(t,e,n,r,i)=>{tt(t,e,n,r,i,"Станція заряджання не відповідає. Зверніться до технічної підтримки. Або скористйтесь іншою станцією заряджання.")},Ia=(t,e,n,r,i)=>{tt(t,e,n,r,i,"Станція заряджання завантажується...")},Ea=(t,e,n,r,i)=>{const s=c=>{console.log("User connected to charger"),i.publish(`charger/${e}/commands`,`connect:${n.uid}`)};tt(t,e,n,r,i,`
    <div>Станція заряджання вільна.</div>
    <button id="start_charging">Розпочати роботу з зарядною станцією</button>
  `),t.querySelector("#start_charging").addEventListener("click",s)},wa=(t,e,n,r,i)=>{sr(t,e,n,r,i,`
    <h3>Початок роботи.</h3>
    <ul>
      <li>Відкрийте дверцята</li>
      <li>Підʼєднайте розʼєм зарядки.</li>
      <li>Переконайтесь шо розпочалось заряджання.</li>
      <li>Закрийте дверцята.</li>
      <li>Почекайте, поки зарядка завершиться.</li>
    </ul>
    <div>Ви можете припинити заряджання у будь яку мить.</div>
    <button id="stop_charging">Припинити заряджання</button>

  `)},Ta=(t,e,n,r,i,s)=>{var l,h,v,f;const c=M=>{console.log("User connected to charger"),i.publish(`charger/${e}/commands`,`stop:${n.uid}`)};sr(t,e,n,r,i,`
    <div>
      <img src="${fa}" class="giphy" alt="Giphy logo" />
      <div>Триває заряджання...</div>
    </div>
    <div>
      <div><span>Напруга: </span><span id="voltage">${s.voltage.toFixed(0)}</span> <span>В</span></div>
      <div><span>Струм: </span><span id="current">${(l=s.current)==null?void 0:l.toFixed(3)}</span> <span>A</span></div>
      <div><span>Потужність: </span><span id="power">${(h=s.power)==null?void 0:h.toFixed(1)}</span> <span>W</span></div>
      <div><span>pf: </span><span id="pf">${(v=s.pf)==null?void 0:v.toFixed(2)}</span> <span>%</span></div>
      <div><span>Спожито: </span><span id="energy">${(f=s.energy)==null?void 0:f.toFixed(0)}</span> <span>Wh</span></div>
    </div>
    <div>
      <div><span>Час заряджання: </span><span id="time">${((s.time||0)/60).toFixed(0)}</span> <span>хв</span></div>
    </div>
    <div>
      <button id="stop_charging">
        <img src="${pa}" class="stop" alt="Stop logo" />
        Припинити заряджання
      </button>
    </div>
  `),t.querySelector("#stop_charging").addEventListener("click",c)},ba=(t,e,n,r)=>{t.innerHTML=`
    Стан станції заряджання невідомий. Зверніться до технічної підтримки.
  `},Sa=(t,e,n,r,i)=>{const s=n.uid;console.log("---- uid=",s),console.log("charger=",ha);let c=setTimeout(()=>{ya(t,e,n,r,i)},15e3);i.onMessageArrived=l=>{switch(console.log("onMessageArrived",l),clearTimeout(c),l.status){case"init":Ia(t,e,n,r,i);break;case"ready":Ea(t,e,n,r,i);break;case"busy":wa(t,e,n,r,i);break;case"charging":Ta(t,e,n,r,i,l);break;default:ba(t)}},va(t,e,n,r,i)},Aa=document.getElementById("app"),Ca=t=>{if(console.log("App:element",t),!he)return ca(t);const e=new Ho,n=new aa("charger_"+he);n.onMQTTConnect=()=>{console.log("onMQTTConnect"),n.subscribe("charger/"+he+"/status"),n.subscribe("charger/"+he+"/data");const r=e.getCurrentUser();r&&n.publish("charger/"+he+"/commands",`hello:${r.uid}`)},n.onMQTTLost=()=>{console.log("onMQTTLost. TODO: reconnect")},e.onAuthStateChanged(r=>(console.log("user=",r),r?(n.connect(),Sa(t,he,r,e,n)):(n.disconnect(),ua(t,e))))};Ca(Aa);
