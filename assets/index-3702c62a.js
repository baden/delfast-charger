var Yi=Object.defineProperty;var Xi=(t,e,n)=>e in t?Yi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var le=(t,e,n)=>(Xi(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
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
 */const Nn=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Zi=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],l=t[n++],f=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(f>>10)),e[i++]=String.fromCharCode(56320+(f&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Mn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,l=o?t[r+1]:0,f=r+2<t.length,_=f?t[r+2]:0,u=s>>2,N=(s&3)<<4|l>>4;let v=(l&15)<<2|_>>6,L=_&63;f||(L=64,o||(v=64)),i.push(n[u],n[N],n[v],n[L])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zi(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const _=r<t.length?n[t.charAt(r)]:64;++r;const N=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||l==null||_==null||N==null)throw new er;const v=s<<2|l>>4;if(i.push(v),_!==64){const L=l<<4&240|_>>2;if(i.push(L),N!==64){const x=_<<6&192|N;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class er extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tr=function(t){const e=Nn(t);return Mn.encodeByteArray(e,!0)},Pn=function(t){return tr(t).replace(/\./g,"")},On=function(t){try{return Mn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ir=()=>nr().__FIREBASE_DEFAULTS__,rr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&On(t[1]);return e&&JSON.parse(e)},Mt=()=>{try{return ir()||rr()||sr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},or=t=>{var e,n;return(n=(e=Mt())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ar=()=>{var t;return(t=Mt())===null||t===void 0?void 0:t.config},Dn=t=>{var e;return(e=Mt())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function O(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())}function ur(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hr(){const t=O();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ln(){try{return typeof indexedDB=="object"}catch{return!1}}function Un(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function fr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pr="FirebaseError";class X extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=pr,Object.setPrototypeOf(this,X.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ye.prototype.create)}}class ye{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?gr(s,i):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new X(r,l,i)}}function gr(t,e){return t.replace(mr,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const mr=/\{\$([^}]+)}/g;function _r(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function je(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Qt(s)&&Qt(o)){if(!je(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Qt(t){return t!==null&&typeof t=="object"}/**
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
 */function Pe(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function vr(t,e){const n=new Ir(t,e);return n.subscribe.bind(n)}class Ir{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");yr(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=lt),r.error===void 0&&(r.error=lt),r.complete===void 0&&(r.complete=lt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yr(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lt(){}/**
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
 */function j(t){return t&&t._delegate?t._delegate:t}class q{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const de="[DEFAULT]";/**
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
 */class wr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new cr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Er(e))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=de){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=de){return this.instances.has(e)}getOptions(e=de){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:br(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=de){return this.component?this.component.multipleInstances?e:de:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function br(t){return t===de?void 0:t}function Er(t){return t.instantiationMode==="EAGER"}/**
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
 */class Tr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Sr={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Ar=R.INFO,kr={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Cr=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=kr[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xn{constructor(e){this.name=e,this._logLevel=Ar,this._logHandler=Cr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const Rr=(t,e)=>e.some(n=>t instanceof n);let Yt,Xt;function Nr(){return Yt||(Yt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mr(){return Xt||(Xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bn=new WeakMap,Et=new WeakMap,Fn=new WeakMap,ut=new WeakMap,Pt=new WeakMap;function Pr(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(J(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bn.set(n,t)}).catch(()=>{}),Pt.set(e,t),e}function Or(t){if(Et.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Et.set(t,e)}let Tt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Et.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return J(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dr(t){Tt=t(Tt)}function Lr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(dt(this),e,...n);return Fn.set(i,e.sort?e.sort():[e]),J(i)}:Mr().includes(t)?function(...e){return t.apply(dt(this),e),J(Bn.get(this))}:function(...e){return J(t.apply(dt(this),e))}}function Ur(t){return typeof t=="function"?Lr(t):(t instanceof IDBTransaction&&Or(t),Rr(t,Nr())?new Proxy(t,Tt):t)}function J(t){if(t instanceof IDBRequest)return Pr(t);if(ut.has(t))return ut.get(t);const e=Ur(t);return e!==t&&(ut.set(t,e),Pt.set(e,t)),e}const dt=t=>Pt.get(t);function Xe(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),l=J(o);return i&&o.addEventListener("upgradeneeded",f=>{i(J(o.result),f.oldVersion,f.newVersion,J(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(f=>{s&&f.addEventListener("close",()=>s()),r&&f.addEventListener("versionchange",()=>r())}).catch(()=>{}),l}function ht(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),J(n).then(()=>{})}const xr=["get","getKey","getAll","getAllKeys","count"],Br=["put","add","delete","clear"],ft=new Map;function Zt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ft.get(e))return ft.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Br.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||xr.includes(n)))return;const s=async function(o,...l){const f=this.transaction(o,r?"readwrite":"readonly");let _=f.store;return i&&(_=_.index(l.shift())),(await Promise.all([_[n](...l),r&&f.done]))[0]};return ft.set(e,s),s}Dr(t=>({...t,get:(e,n,i)=>Zt(e,n)||t.get(e,n,i),has:(e,n)=>!!Zt(e,n)||t.has(e,n)}));/**
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
 */class Fr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($r(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function $r(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const St="@firebase/app",en="0.9.7";/**
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
 */const ge=new xn("@firebase/app"),Vr="@firebase/app-compat",qr="@firebase/analytics-compat",Hr="@firebase/analytics",jr="@firebase/app-check-compat",Kr="@firebase/app-check",Wr="@firebase/auth",Gr="@firebase/auth-compat",zr="@firebase/database",Jr="@firebase/database-compat",Qr="@firebase/functions",Yr="@firebase/functions-compat",Xr="@firebase/installations",Zr="@firebase/installations-compat",es="@firebase/messaging",ts="@firebase/messaging-compat",ns="@firebase/performance",is="@firebase/performance-compat",rs="@firebase/remote-config",ss="@firebase/remote-config-compat",os="@firebase/storage",as="@firebase/storage-compat",cs="@firebase/firestore",ls="@firebase/firestore-compat",us="firebase",ds="9.19.1";/**
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
 */const At="[DEFAULT]",hs={[St]:"fire-core",[Vr]:"fire-core-compat",[Hr]:"fire-analytics",[qr]:"fire-analytics-compat",[Kr]:"fire-app-check",[jr]:"fire-app-check-compat",[Wr]:"fire-auth",[Gr]:"fire-auth-compat",[zr]:"fire-rtdb",[Jr]:"fire-rtdb-compat",[Qr]:"fire-fn",[Yr]:"fire-fn-compat",[Xr]:"fire-iid",[Zr]:"fire-iid-compat",[es]:"fire-fcm",[ts]:"fire-fcm-compat",[ns]:"fire-perf",[is]:"fire-perf-compat",[rs]:"fire-rc",[ss]:"fire-rc-compat",[os]:"fire-gcs",[as]:"fire-gcs-compat",[cs]:"fire-fst",[ls]:"fire-fst-compat","fire-js":"fire-js",[us]:"fire-js-all"};/**
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
 */const Ke=new Map,kt=new Map;function fs(t,e){try{t.container.addComponent(e)}catch(n){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Q(t){const e=t.name;if(kt.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;kt.set(e,t);for(const n of Ke.values())fs(n,t);return!0}function Oe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ps={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},oe=new ye("app","Firebase",ps);/**
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
 */class gs{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new q("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oe.create("app-deleted",{appName:this._name})}}/**
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
 */const Ze=ds;function $n(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:At,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw oe.create("bad-app-name",{appName:String(r)});if(n||(n=ar()),!n)throw oe.create("no-options");const s=Ke.get(r);if(s){if(je(n,s.options)&&je(i,s.config))return s;throw oe.create("duplicate-app",{appName:r})}const o=new Tr(r);for(const f of kt.values())o.addComponent(f);const l=new gs(n,i,o);return Ke.set(r,l),l}function Vn(t=At){const e=Ke.get(t);if(!e&&t===At)return $n();if(!e)throw oe.create("no-app",{appName:t});return e}function F(t,e,n){var i;let r=(i=hs[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${r}" with version "${e}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(l.join(" "));return}Q(new q(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ms="firebase-heartbeat-database",_s=1,Ce="firebase-heartbeat-store";let pt=null;function qn(){return pt||(pt=Xe(ms,_s,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ce)}}}).catch(t=>{throw oe.create("idb-open",{originalErrorMessage:t.message})})),pt}async function vs(t){try{return(await qn()).transaction(Ce).objectStore(Ce).get(Hn(t))}catch(e){if(e instanceof X)ge.warn(e.message);else{const n=oe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ge.warn(n.message)}}}async function tn(t,e){try{const i=(await qn()).transaction(Ce,"readwrite");return await i.objectStore(Ce).put(e,Hn(t)),i.done}catch(n){if(n instanceof X)ge.warn(n.message);else{const i=oe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ge.warn(i.message)}}}function Hn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Is=1024,ys=30*24*60*60*1e3;class ws{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Es(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=ys}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nn(),{heartbeatsToSend:n,unsentEntries:i}=bs(this._heartbeatsCache.heartbeats),r=Pn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function nn(){return new Date().toISOString().substring(0,10)}function bs(t,e=Is){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),rn(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),rn(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Es{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ln()?Un().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vs(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return tn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return tn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rn(t){return Pn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ts(t){Q(new q("platform-logger",e=>new Fr(e),"PRIVATE")),Q(new q("heartbeat",e=>new ws(e),"PRIVATE")),F(St,en,t),F(St,en,"esm2017"),F("fire-js","")}Ts("");var Ss="firebase",As="9.19.1";/**
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
 */F(Ss,As,"app");function Ot(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function jn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ks=jn,Kn=new ye("auth","Firebase",jn());/**
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
 */const sn=new xn("@firebase/auth");function $e(t,...e){sn.logLevel<=R.ERROR&&sn.error(`Auth (${Ze}): ${t}`,...e)}/**
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
 */function H(t,...e){throw Dt(t,...e)}function $(t,...e){return Dt(t,...e)}function Wn(t,e,n){const i=Object.assign(Object.assign({},ks()),{[e]:n});return new ye("auth","Firebase",i).create(e,{appName:t.name})}function Cs(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&H(t,"argument-error"),Wn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dt(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Kn.create(t,...e)}function E(t,e,...n){if(!t)throw Dt(e,...n)}function G(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $e(e),new Error(e)}function Y(t,e){t||G(e)}/**
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
 */const on=new Map;function z(t){Y(t instanceof Function,"Expected a class definition");let e=on.get(t);return e?(Y(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,on.set(t,e),e)}/**
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
 */function Rs(t,e){const n=Oe(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(je(s,e??{}))return r;H(r,"already-initialized")}return n.initialize({options:e})}function Ns(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(z);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ct(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ms(){return an()==="http:"||an()==="https:"}function an(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ps(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ms()||ur()||"connection"in navigator)?navigator.onLine:!0}function Os(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class De{constructor(e,n){this.shortDelay=e,this.longDelay=n,Y(n>e,"Short delay should be less than long delay!"),this.isMobile=lr()||dr()}get(){return Ps()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lt(t,e){Y(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gn{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;G("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;G("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;G("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ds={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ls=new De(3e4,6e4);function Us(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function et(t,e,n,i,r={}){return zn(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const l=Pe(Object.assign({key:t.config.apiKey},o)).slice(1),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode),Gn.fetch()(Jn(t,t.config.apiHost,n,l),Object.assign({method:e,headers:f,referrerPolicy:"no-referrer"},s))})}async function zn(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ds),e);try{const r=new Bs(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fe(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[f,_]=l.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fe(t,"credential-already-in-use",o);if(f==="EMAIL_EXISTS")throw Fe(t,"email-already-in-use",o);if(f==="USER_DISABLED")throw Fe(t,"user-disabled",o);const u=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Wn(t,u,_);H(t,u)}}catch(r){if(r instanceof X)throw r;H(t,"network-request-failed",{message:String(r)})}}async function xs(t,e,n,i,r={}){const s=await et(t,e,n,i,r);return"mfaPendingCredential"in s&&H(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Jn(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Lt(t.config,r):`${t.config.apiScheme}://${r}`}class Bs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i($(this.auth,"network-request-failed")),Ls.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fe(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=$(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function Fs(t,e){return et(t,"POST","/v1/accounts:delete",e)}async function $s(t,e){return et(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ke(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vs(t,e=!1){const n=j(t),i=await n.getIdToken(e),r=Ut(i);E(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ke(gt(r.auth_time)),issuedAtTime:ke(gt(r.iat)),expirationTime:ke(gt(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gt(t){return Number(t)*1e3}function Ut(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return $e("JWT malformed, contained fewer than 3 sections"),null;try{const r=On(n);return r?JSON.parse(r):($e("Failed to decode base64 JWT payload"),null)}catch(r){return $e("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function qs(t){const e=Ut(t);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Re(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof X&&Hs(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Hs({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class js{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ke(this.lastLoginAt),this.creationTime=ke(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function We(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Re(t,$s(n,{idToken:i}));E(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Gs(s.providerUserInfo):[],l=Ws(t.providerData,o),f=t.isAnonymous,_=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),u=f?_:!1,N={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Qn(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,N)}async function Ks(t){const e=j(t);await We(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ws(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Gs(t){return t.map(e=>{var{providerId:n}=e,i=Ot(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function zs(t,e){const n=await zn(t,{},async()=>{const i=Pe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Jn(t,r,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Gn.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await zs(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Ne;return i&&(E(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(E(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(E(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ne,this.toJSON())}_performRefresh(){return G("not implemented")}}/**
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
 */function ne(t,e){E(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pe{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Ot(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new js(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Re(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vs(this,e)}reload(){return Ks(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await We(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Re(this,Fs(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,l,f,_,u;const N=(i=n.displayName)!==null&&i!==void 0?i:void 0,v=(r=n.email)!==null&&r!==void 0?r:void 0,L=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(l=n.tenantId)!==null&&l!==void 0?l:void 0,Se=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,ce=(_=n.createdAt)!==null&&_!==void 0?_:void 0,B=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Z,emailVerified:xe,isAnonymous:D,providerData:we,stsTokenManager:Ae}=n;E(Z&&Ae,e,"internal-error");const Be=Ne.fromJSON(this.name,Ae);E(typeof Z=="string",e,"internal-error"),ne(N,e.name),ne(v,e.name),E(typeof xe=="boolean",e,"internal-error"),E(typeof D=="boolean",e,"internal-error"),ne(L,e.name),ne(x,e.name),ne(M,e.name),ne(Se,e.name),ne(ce,e.name),ne(B,e.name);const ee=new pe({uid:Z,auth:e,email:v,emailVerified:xe,displayName:N,isAnonymous:D,photoURL:x,phoneNumber:L,tenantId:M,stsTokenManager:Be,createdAt:ce,lastLoginAt:B});return we&&Array.isArray(we)&&(ee.providerData=we.map(y=>Object.assign({},y))),Se&&(ee._redirectEventId=Se),ee}static async _fromIdTokenResponse(e,n,i=!1){const r=new Ne;r.updateFromServerResponse(n);const s=new pe({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await We(s),s}}/**
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
 */class Yn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yn.type="NONE";const cn=Yn;/**
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
 */function Ve(t,e,n){return`firebase:${t}:${e}:${n}`}class be{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Ve(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ve("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new be(z(cn),e,i);const r=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let s=r[0]||z(cn);const o=Ve(i,e.config.apiKey,e.name);let l=null;for(const _ of n)try{const u=await _._get(o);if(u){const N=pe._fromJSON(e,u);_!==s&&(l=N),s=_;break}}catch{}const f=r.filter(_=>_._shouldAllowMigration);return!s._shouldAllowMigration||!f.length?new be(s,e,i):(s=f[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async _=>{if(_!==s)try{await _._remove(o)}catch{}})),new be(s,e,i))}}/**
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
 */function ln(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ei(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ni(e))return"Blackberry";if(ii(e))return"Webos";if(xt(e))return"Safari";if((e.includes("chrome/")||Zn(e))&&!e.includes("edge/"))return"Chrome";if(ti(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Xn(t=O()){return/firefox\//i.test(t)}function xt(t=O()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zn(t=O()){return/crios\//i.test(t)}function ei(t=O()){return/iemobile/i.test(t)}function ti(t=O()){return/android/i.test(t)}function ni(t=O()){return/blackberry/i.test(t)}function ii(t=O()){return/webos/i.test(t)}function tt(t=O()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Js(t=O()){var e;return tt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qs(){return hr()&&document.documentMode===10}function ri(t=O()){return tt(t)||ti(t)||ii(t)||ni(t)||/windows phone/i.test(t)||ei(t)}function Ys(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function si(t,e=[]){let n;switch(t){case"Browser":n=ln(O());break;case"Worker":n=`${ln(O())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ze}/${i}`}/**
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
 */class Xs{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,l)=>{try{const f=e(s);o(f)}catch(f){l(f)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class Zs{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new un(this),this.idTokenSubscription=new un(this),this.beforeStateQueue=new Xs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=z(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await be.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,f=await this.tryRedirectSignIn(e);(!o||o===l)&&(f!=null&&f.user)&&(r=f.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await We(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Os()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?j(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(z(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ye("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&z(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await be.create(this,[z(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=si(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function nt(t){return j(t)}class un{constructor(e){this.auth=e,this.observer=null,this.addObserver=vr(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eo(t,e,n){const i=nt(t);E(i._canInitEmulator,i,"emulator-config-failed"),E(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=oi(e),{host:o,port:l}=to(e),f=l===null?"":`:${l}`;i.config.emulator={url:`${s}//${o}${f}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||no()}function oi(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function to(t){const e=oi(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:dn(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:dn(o)}}}function dn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function no(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ai{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return G("not implemented")}_getIdTokenResponse(e){return G("not implemented")}_linkToIdToken(e,n){return G("not implemented")}_getReauthenticationResolver(e){return G("not implemented")}}/**
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
 */async function Ee(t,e){return xs(t,"POST","/v1/accounts:signInWithIdp",Us(t,e))}/**
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
 */const io="http://localhost";class me extends ai{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):H("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Ot(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new me(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ee(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ee(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ee(e,n)}buildRequest(){const e={requestUri:io,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pe(n)}return e}}/**
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
 */class Bt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Le extends Bt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ie extends Le{constructor(){super("facebook.com")}static credential(e){return me._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ie.credential(e.oauthAccessToken)}catch{return null}}}ie.FACEBOOK_SIGN_IN_METHOD="facebook.com";ie.PROVIDER_ID="facebook.com";/**
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
 */class W extends Le{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return me._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return W.credential(n,i)}catch{return null}}}W.GOOGLE_SIGN_IN_METHOD="google.com";W.PROVIDER_ID="google.com";/**
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
 */class re extends Le{constructor(){super("github.com")}static credential(e){return me._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return re.credential(e.oauthAccessToken)}catch{return null}}}re.GITHUB_SIGN_IN_METHOD="github.com";re.PROVIDER_ID="github.com";/**
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
 */class se extends Le{constructor(){super("twitter.com")}static credential(e,n){return me._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return se.credential(n,i)}catch{return null}}}se.TWITTER_SIGN_IN_METHOD="twitter.com";se.PROVIDER_ID="twitter.com";/**
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
 */class Te{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await pe._fromIdTokenResponse(e,i,r),o=hn(i);return new Te({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=hn(i);return new Te({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function hn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ge extends X{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ge.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Ge(e,n,i,r)}}function ci(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ge._fromErrorAndOperation(t,s,e,i):s})}async function ro(t,e,n=!1){const i=await Re(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Te._forOperation(t,"link",i)}/**
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
 */async function so(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Re(t,ci(i,r,e,t),n);E(s.idToken,i,"internal-error");const o=Ut(s.idToken);E(o,i,"internal-error");const{sub:l}=o;return E(t.uid===l,i,"user-mismatch"),Te._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&H(i,"user-mismatch"),s}}/**
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
 */async function oo(t,e,n=!1){const i="signIn",r=await ci(t,i,e),s=await Te._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function ao(t,e,n,i){return j(t).onIdTokenChanged(e,n,i)}function co(t,e,n){return j(t).beforeAuthStateChanged(e,n)}function lo(t,e,n,i){return j(t).onAuthStateChanged(e,n,i)}const ze="__sak";/**
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
 */class li{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ze,"1"),this.storage.removeItem(ze),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uo(){const t=O();return xt(t)||tt(t)}const ho=1e3,fo=10;class ui extends li{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uo()&&Ys(),this.fallbackToPolling=ri(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,f)=>{this.notifyListeners(o,f)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Qs()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fo):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},ho)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ui.type="LOCAL";const po=ui;/**
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
 */class di extends li{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}di.type="SESSION";const hi=di;/**
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
 */function go(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class it{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new it(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(o).map(async _=>_(n.origin,s)),f=await go(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}it.receivers=[];/**
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
 */function Ft(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((l,f)=>{const _=Ft("",20);r.port1.start();const u=setTimeout(()=>{f(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(N){const v=N;if(v.data.eventId===_)switch(v.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(u),clearTimeout(s),f(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:_,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function V(){return window}function _o(t){V().location.href=t}/**
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
 */function fi(){return typeof V().WorkerGlobalScope<"u"&&typeof V().importScripts=="function"}async function vo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Io(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yo(){return fi()?self:null}/**
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
 */const pi="firebaseLocalStorageDb",wo=1,Je="firebaseLocalStorage",gi="fbase_key";class Ue{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rt(t,e){return t.transaction([Je],e?"readwrite":"readonly").objectStore(Je)}function bo(){const t=indexedDB.deleteDatabase(pi);return new Ue(t).toPromise()}function Rt(){const t=indexedDB.open(pi,wo);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Je,{keyPath:gi})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Je)?e(i):(i.close(),await bo(),e(await Rt()))})})}async function fn(t,e,n){const i=rt(t,!0).put({[gi]:e,value:n});return new Ue(i).toPromise()}async function Eo(t,e){const n=rt(t,!1).get(e),i=await new Ue(n).toPromise();return i===void 0?null:i.value}function pn(t,e){const n=rt(t,!0).delete(e);return new Ue(n).toPromise()}const To=800,So=3;class mi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>So)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=it._getInstance(yo()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vo(),!this.activeServiceWorker)return;this.sender=new mo(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Io()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rt();return await fn(e,ze,"1"),await pn(e,ze),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>fn(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Eo(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=rt(r,!1).getAll();return new Ue(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),To)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mi.type="LOCAL";const Ao=mi;/**
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
 */function ko(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Co(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=$("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",ko().appendChild(i)})}function Ro(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new De(3e4,6e4);/**
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
 */function _i(t,e){return e?z(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $t extends ai{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ee(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ee(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ee(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function No(t){return oo(t.auth,new $t(t),t.bypassAuthState)}function Mo(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),so(n,new $t(t),t.bypassAuthState)}async function Po(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),ro(n,new $t(t),t.bypassAuthState)}/**
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
 */class vi{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const f={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(f))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return No;case"linkViaPopup":case"linkViaRedirect":return Po;case"reauthViaPopup":case"reauthViaRedirect":return Mo;default:H(this.auth,"internal-error")}}resolve(e){Y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Oo=new De(2e3,1e4);async function Do(t,e,n){const i=nt(t);Cs(t,e,Bt);const r=_i(i,n);return new he(i,"signInViaPopup",e,r).executeNotNull()}class he extends vi{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,he.currentPopupAction&&he.currentPopupAction.cancel(),he.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){Y(this.filter.length===1,"Popup operations only handle one event");const e=Ft();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,he.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Oo.get())};e()}}he.currentPopupAction=null;/**
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
 */const Lo="pendingRedirect",qe=new Map;class Uo extends vi{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=qe.get(this.auth._key());if(!e){try{const i=await xo(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}qe.set(this.auth._key(),e)}return this.bypassAuthState||qe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xo(t,e){const n=$o(e),i=Fo(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Bo(t,e){qe.set(t._key(),e)}function Fo(t){return z(t._redirectPersistence)}function $o(t){return Ve(Lo,t.config.apiKey,t.name)}async function Vo(t,e,n=!1){const i=nt(t),r=_i(i,e),o=await new Uo(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const qo=10*60*1e3;class Ho{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jo(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ii(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError($(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qo&&this.cachedEventUids.clear(),this.cachedEventUids.has(gn(e))}saveEventToCache(e){this.cachedEventUids.add(gn(e)),this.lastProcessedEventTime=Date.now()}}function gn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ii({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jo(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ii(t);default:return!1}}/**
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
 */async function Ko(t,e={}){return et(t,"GET","/v1/projects",e)}/**
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
 */const Wo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Go=/^https?/;async function zo(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ko(t);for(const n of e)try{if(Jo(n))return}catch{}H(t,"unauthorized-domain")}function Jo(t){const e=Ct(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Go.test(n))return!1;if(Wo.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Qo=new De(3e4,6e4);function mn(){const t=V().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Yo(t){return new Promise((e,n)=>{var i,r,s;function o(){mn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mn(),n($(t,"network-request-failed"))},timeout:Qo.get()})}if(!((r=(i=V().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=V().gapi)===null||s===void 0)&&s.load)o();else{const l=Ro("iframefcb");return V()[l]=()=>{gapi.load?o():n($(t,"network-request-failed"))},Co(`https://apis.google.com/js/api.js?onload=${l}`).catch(f=>n(f))}}).catch(e=>{throw He=null,e})}let He=null;function Xo(t){return He=He||Yo(t),He}/**
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
 */const Zo=new De(5e3,15e3),ea="__/auth/iframe",ta="emulator/auth/iframe",na={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ia=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ra(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lt(e,ta):`https://${t.config.authDomain}/${ea}`,i={apiKey:e.apiKey,appName:t.name,v:Ze},r=ia.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Pe(i).slice(1)}`}async function sa(t){const e=await Xo(t),n=V().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:ra(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:na,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=$(t,"network-request-failed"),l=V().setTimeout(()=>{s(o)},Zo.get());function f(){V().clearTimeout(l),r(i)}i.ping(f).then(f,()=>{s(o)})}))}/**
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
 */const oa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aa=500,ca=600,la="_blank",ua="http://localhost";class _n{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function da(t,e,n,i=aa,r=ca){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const f=Object.assign(Object.assign({},oa),{width:i.toString(),height:r.toString(),top:s,left:o}),_=O().toLowerCase();n&&(l=Zn(_)?la:n),Xn(_)&&(e=e||ua,f.scrollbars="yes");const u=Object.entries(f).reduce((v,[L,x])=>`${v}${L}=${x},`,"");if(Js(_)&&l!=="_self")return ha(e||"",l),new _n(null);const N=window.open(e||"",l,u);E(N,t,"popup-blocked");try{N.focus()}catch{}return new _n(N)}function ha(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const fa="__/auth/handler",pa="emulator/auth/handler";function vn(t,e,n,i,r,s){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ze,eventId:r};if(e instanceof Bt){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_r(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries(s||{}))o[f]=_}if(e instanceof Le){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];return`${ga(t)}?${Pe(l).slice(1)}`}function ga({config:t}){return t.emulator?Lt(t,pa):`https://${t.authDomain}/${fa}`}/**
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
 */const mt="webStorageSupport";class ma{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hi,this._completeRedirectFn=Vo,this._overrideRedirectResult=Bo}async _openPopup(e,n,i,r){var s;Y((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=vn(e,n,i,Ct(),r);return da(e,o,Ft())}async _openRedirect(e,n,i,r){return await this._originValidation(e),_o(vn(e,n,i,Ct(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Y(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await sa(e),i=new Ho(e);return n.register("authEvent",r=>(E(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mt,{type:mt},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[mt];o!==void 0&&n(!!o),H(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zo(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ri()||xt()||tt()}}const _a=ma;var In="@firebase/auth",yn="0.22.0";/**
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
 */class va{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ia(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ya(t){Q(new q("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((l,f)=>{E(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),E(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const _={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:si(t)},u=new Zs(l,f,_);return Ns(u,n),u})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Q(new q("auth-internal",e=>{const n=nt(e.getProvider("auth").getImmediate());return(i=>new va(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),F(In,yn,Ia(t)),F(In,yn,"esm2017")}/**
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
 */const wa=5*60,ba=Dn("authIdTokenMaxAge")||wa;let wn=null;const Ea=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>ba)return;const r=n==null?void 0:n.token;wn!==r&&(wn=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ta(t=Vn()){const e=Oe(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Rs(t,{popupRedirectResolver:_a,persistence:[Ao,po,hi]}),i=Dn("authTokenSyncURL");if(i){const s=Ea(i);co(n,s,()=>s(n.currentUser)),ao(n,o=>s(o))}const r=or("auth");return r&&eo(n,`http://${r}`),n}ya("Browser");const yi="@firebase/installations",Vt="0.6.4";/**
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
 */const wi=1e4,bi=`w:${Vt}`,Ei="FIS_v2",Sa="https://firebaseinstallations.googleapis.com/v1",Aa=60*60*1e3,ka="installations",Ca="Installations";/**
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
 */const Ra={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},_e=new ye(ka,Ca,Ra);function Ti(t){return t instanceof X&&t.code.includes("request-failed")}/**
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
 */function Si({projectId:t}){return`${Sa}/projects/${t}/installations`}function Ai(t){return{token:t.token,requestStatus:2,expiresIn:Ma(t.expiresIn),creationTime:Date.now()}}async function ki(t,e){const i=(await e.json()).error;return _e.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ci({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Na(t,{refreshToken:e}){const n=Ci(t);return n.append("Authorization",Pa(e)),n}async function Ri(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ma(t){return Number(t.replace("s","000"))}function Pa(t){return`${Ei} ${t}`}/**
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
 */async function Oa({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Si(t),r=Ci(t),s=e.getImmediate({optional:!0});if(s){const _=await s.getHeartbeatsHeader();_&&r.append("x-firebase-client",_)}const o={fid:n,authVersion:Ei,appId:t.appId,sdkVersion:bi},l={method:"POST",headers:r,body:JSON.stringify(o)},f=await Ri(()=>fetch(i,l));if(f.ok){const _=await f.json();return{fid:_.fid||n,registrationStatus:2,refreshToken:_.refreshToken,authToken:Ai(_.authToken)}}else throw await ki("Create Installation",f)}/**
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
 */function Ni(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Da(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const La=/^[cdef][\w-]{21}$/,Nt="";function Ua(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=xa(t);return La.test(n)?n:Nt}catch{return Nt}}function xa(t){return Da(t).substr(0,22)}/**
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
 */function st(t){return`${t.appName}!${t.appId}`}/**
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
 */const Mi=new Map;function Pi(t,e){const n=st(t);Oi(n,e),Ba(n,e)}function Oi(t,e){const n=Mi.get(t);if(n)for(const i of n)i(e)}function Ba(t,e){const n=Fa();n&&n.postMessage({key:t,fid:e}),$a()}let fe=null;function Fa(){return!fe&&"BroadcastChannel"in self&&(fe=new BroadcastChannel("[Firebase] FID Change"),fe.onmessage=t=>{Oi(t.data.key,t.data.fid)}),fe}function $a(){Mi.size===0&&fe&&(fe.close(),fe=null)}/**
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
 */const Va="firebase-installations-database",qa=1,ve="firebase-installations-store";let _t=null;function qt(){return _t||(_t=Xe(Va,qa,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ve)}}})),_t}async function Qe(t,e){const n=st(t),r=(await qt()).transaction(ve,"readwrite"),s=r.objectStore(ve),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Pi(t,e.fid),e}async function Di(t){const e=st(t),i=(await qt()).transaction(ve,"readwrite");await i.objectStore(ve).delete(e),await i.done}async function ot(t,e){const n=st(t),r=(await qt()).transaction(ve,"readwrite"),s=r.objectStore(ve),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await r.done,l&&(!o||o.fid!==l.fid)&&Pi(t,l.fid),l}/**
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
 */async function Ht(t){let e;const n=await ot(t.appConfig,i=>{const r=Ha(i),s=ja(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===Nt?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ha(t){const e=t||{fid:Ua(),registrationStatus:0};return Li(e)}function ja(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(_e.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Ka(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Wa(t)}:{installationEntry:e}}async function Ka(t,e){try{const n=await Oa(t,e);return Qe(t.appConfig,n)}catch(n){throw Ti(n)&&n.customData.serverCode===409?await Di(t.appConfig):await Qe(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Wa(t){let e=await bn(t.appConfig);for(;e.registrationStatus===1;)await Ni(100),e=await bn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Ht(t);return i||n}return e}function bn(t){return ot(t,e=>{if(!e)throw _e.create("installation-not-found");return Li(e)})}function Li(t){return Ga(t)?{fid:t.fid,registrationStatus:0}:t}function Ga(t){return t.registrationStatus===1&&t.registrationTime+wi<Date.now()}/**
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
 */async function za({appConfig:t,heartbeatServiceProvider:e},n){const i=Ja(t,n),r=Na(t,n),s=e.getImmediate({optional:!0});if(s){const _=await s.getHeartbeatsHeader();_&&r.append("x-firebase-client",_)}const o={installation:{sdkVersion:bi,appId:t.appId}},l={method:"POST",headers:r,body:JSON.stringify(o)},f=await Ri(()=>fetch(i,l));if(f.ok){const _=await f.json();return Ai(_)}else throw await ki("Generate Auth Token",f)}function Ja(t,{fid:e}){return`${Si(t)}/${e}/authTokens:generate`}/**
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
 */async function jt(t,e=!1){let n;const i=await ot(t.appConfig,s=>{if(!Ui(s))throw _e.create("not-registered");const o=s.authToken;if(!e&&Xa(o))return s;if(o.requestStatus===1)return n=Qa(t,e),s;{if(!navigator.onLine)throw _e.create("app-offline");const l=ec(s);return n=Ya(t,l),l}});return n?await n:i.authToken}async function Qa(t,e){let n=await En(t.appConfig);for(;n.authToken.requestStatus===1;)await Ni(100),n=await En(t.appConfig);const i=n.authToken;return i.requestStatus===0?jt(t,e):i}function En(t){return ot(t,e=>{if(!Ui(e))throw _e.create("not-registered");const n=e.authToken;return tc(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ya(t,e){try{const n=await za(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Qe(t.appConfig,i),n}catch(n){if(Ti(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Di(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qe(t.appConfig,i)}throw n}}function Ui(t){return t!==void 0&&t.registrationStatus===2}function Xa(t){return t.requestStatus===2&&!Za(t)}function Za(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Aa}function ec(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function tc(t){return t.requestStatus===1&&t.requestTime+wi<Date.now()}/**
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
 */async function nc(t){const e=t,{installationEntry:n,registrationPromise:i}=await Ht(e);return i?i.catch(console.error):jt(e).catch(console.error),n.fid}/**
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
 */async function ic(t,e=!1){const n=t;return await rc(n),(await jt(n,e)).token}async function rc(t){const{registrationPromise:e}=await Ht(t);e&&await e}/**
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
 */function sc(t){if(!t||!t.options)throw vt("App Configuration");if(!t.name)throw vt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw vt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function vt(t){return _e.create("missing-app-config-values",{valueName:t})}/**
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
 */const xi="installations",oc="installations-internal",ac=t=>{const e=t.getProvider("app").getImmediate(),n=sc(e),i=Oe(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},cc=t=>{const e=t.getProvider("app").getImmediate(),n=Oe(e,xi).getImmediate();return{getId:()=>nc(n),getToken:r=>ic(n,r)}};function lc(){Q(new q(xi,ac,"PUBLIC")),Q(new q(oc,cc,"PRIVATE"))}lc();F(yi,Vt);F(yi,Vt,"esm2017");/**
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
 */const uc="/firebase-messaging-sw.js",dc="/firebase-cloud-messaging-push-scope",Bi="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",hc="https://fcmregistrations.googleapis.com/v1",Fi="google.c.a.c_id",fc="google.c.a.c_l",pc="google.c.a.ts",gc="google.c.a.e";var Tn;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Tn||(Tn={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Me;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Me||(Me={}));/**
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
 */function K(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function mc(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}/**
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
 */const It="fcm_token_details_db",_c=5,Sn="fcm_token_object_Store";async function vc(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(It))return null;let e=null;return(await Xe(It,_c,{upgrade:async(i,r,s,o)=>{var l;if(r<2||!i.objectStoreNames.contains(Sn))return;const f=o.objectStore(Sn),_=await f.index("fcmSenderId").get(t);if(await f.clear(),!!_){if(r===2){const u=_;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(l=u.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:K(u.vapidKey)}}}else if(r===3){const u=_;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:K(u.auth),p256dh:K(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:K(u.vapidKey)}}}else if(r===4){const u=_;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:K(u.auth),p256dh:K(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:K(u.vapidKey)}}}}}})).close(),await ht(It),await ht("fcm_vapid_details_db"),await ht("undefined"),Ic(e)?e:null}function Ic(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const yc="firebase-messaging-database",wc=1,Ie="firebase-messaging-store";let yt=null;function Kt(){return yt||(yt=Xe(yc,wc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ie)}}})),yt}async function $i(t){const e=Gt(t),i=await(await Kt()).transaction(Ie).objectStore(Ie).get(e);if(i)return i;{const r=await vc(t.appConfig.senderId);if(r)return await Wt(t,r),r}}async function Wt(t,e){const n=Gt(t),r=(await Kt()).transaction(Ie,"readwrite");return await r.objectStore(Ie).put(e,n),await r.done,e}async function bc(t){const e=Gt(t),i=(await Kt()).transaction(Ie,"readwrite");await i.objectStore(Ie).delete(e),await i.done}function Gt({appConfig:t}){return t.appId}/**
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
 */const Ec={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},P=new ye("messaging","Messaging",Ec);/**
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
 */async function Tc(t,e){const n=await Jt(t),i=qi(e),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{s=await(await fetch(zt(t.appConfig),r)).json()}catch(o){throw P.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw P.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw P.create("token-subscribe-no-token");return s.token}async function Sc(t,e){const n=await Jt(t),i=qi(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{s=await(await fetch(`${zt(t.appConfig)}/${e.token}`,r)).json()}catch(o){throw P.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw P.create("token-update-failed",{errorInfo:o})}if(!s.token)throw P.create("token-update-no-token");return s.token}async function Vi(t,e){const i={method:"DELETE",headers:await Jt(t)};try{const s=await(await fetch(`${zt(t.appConfig)}/${e}`,i)).json();if(s.error){const o=s.error.message;throw P.create("token-unsubscribe-failed",{errorInfo:o})}}catch(r){throw P.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function zt({projectId:t}){return`${hc}/projects/${t}/registrations`}async function Jt({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function qi({p256dh:t,auth:e,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:e,p256dh:t}};return i!==Bi&&(r.web.applicationPubKey=i),r}/**
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
 */const Ac=7*24*60*60*1e3;async function kc(t){const e=await Nc(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:K(e.getKey("auth")),p256dh:K(e.getKey("p256dh"))},i=await $i(t.firebaseDependencies);if(i){if(Mc(i.subscriptionOptions,n))return Date.now()>=i.createTime+Ac?Rc(t,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await Vi(t.firebaseDependencies,i.token)}catch(r){console.warn(r)}return An(t.firebaseDependencies,n)}else return An(t.firebaseDependencies,n)}async function Cc(t){const e=await $i(t.firebaseDependencies);e&&(await Vi(t.firebaseDependencies,e.token),await bc(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Rc(t,e){try{const n=await Sc(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Wt(t.firebaseDependencies,i),n}catch(n){throw await Cc(t),n}}async function An(t,e){const i={token:await Tc(t,e),createTime:Date.now(),subscriptionOptions:e};return await Wt(t,i),i.token}async function Nc(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:mc(e)})}function Mc(t,e){const n=e.vapidKey===t.vapidKey,i=e.endpoint===t.endpoint,r=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&i&&r&&s}/**
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
 */function kn(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Pc(e,t),Oc(e,t),Dc(e,t),e}function Pc(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const i=e.notification.body;i&&(t.notification.body=i);const r=e.notification.image;r&&(t.notification.image=r);const s=e.notification.icon;s&&(t.notification.icon=s)}function Oc(t,e){e.data&&(t.data=e.data)}function Dc(t,e){var n,i,r,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(r=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&r!==void 0?r:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const f=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;f&&(t.fcmOptions.analyticsLabel=f)}/**
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
 */function Lc(t){return typeof t=="object"&&!!t&&Fi in t}/**
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
 */Hi("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Hi("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Hi(t,e){const n=[];for(let i=0;i<t.length;i++)n.push(t.charAt(i)),i<e.length&&n.push(e.charAt(i));return n.join("")}/**
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
 */function Uc(t){if(!t||!t.options)throw wt("App Configuration Object");if(!t.name)throw wt("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const i of e)if(!n[i])throw wt(i);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function wt(t){return P.create("missing-app-config-values",{valueName:t})}/**
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
 */class xc{constructor(e,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=Uc(e);this.firebaseDependencies={app:e,appConfig:r,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function Bc(t){try{t.swRegistration=await navigator.serviceWorker.register(uc,{scope:dc}),t.swRegistration.update().catch(()=>{})}catch(e){throw P.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function Fc(t,e){if(!e&&!t.swRegistration&&await Bc(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw P.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function $c(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Bi)}/**
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
 */async function ji(t,e){if(!navigator)throw P.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw P.create("permission-blocked");return await $c(t,e==null?void 0:e.vapidKey),await Fc(t,e==null?void 0:e.serviceWorkerRegistration),kc(t)}/**
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
 */async function Vc(t,e,n){const i=qc(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[Fi],message_name:n[fc],message_time:n[pc],message_device_time:Math.floor(Date.now()/1e3)})}function qc(t){switch(t){case Me.NOTIFICATION_CLICKED:return"notification_open";case Me.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Hc(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Me.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(kn(n)):t.onMessageHandler.next(kn(n)));const i=n.data;Lc(i)&&i[gc]==="1"&&await Vc(t,n.messageType,i)}const Cn="@firebase/messaging",Rn="0.12.4";/**
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
 */const jc=t=>{const e=new xc(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Hc(e,n)),e},Kc=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:i=>ji(e,i)}};function Wc(){Q(new q("messaging",jc,"PUBLIC")),Q(new q("messaging-internal",Kc,"PRIVATE")),F(Cn,Rn),F(Cn,Rn,"esm2017")}/**
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
 */async function Gc(){try{await Un()}catch{return!1}return typeof window<"u"&&Ln()&&fr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function zc(t,e){if(!navigator)throw P.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function Jc(t=Vn()){return Gc().then(e=>{if(!e)throw P.create("unsupported-browser")},e=>{throw P.create("indexed-db-unsupported")}),Oe(j(t),"messaging").getImmediate()}async function Qc(t,e){return t=j(t),ji(t,e)}function Yc(t,e){return t=j(t),zc(t,e)}Wc();const Xc={apiKey:"AIzaSyC0UMDhVLTX_lhPBdqU3BnHSg6z126F-_o",authDomain:"delfast-chargger-auth.firebaseapp.com",projectId:"delfast-chargger-auth",storageBucket:"delfast-chargger-auth.appspot.com",messagingSenderId:"146029576932",appId:"1:146029576932:web:ed75929b80ef941c11e2f1"},Ki=$n(Xc),Zc=Ta(Ki),Wi=Jc(Ki);Yc(Wi,t=>{console.log(">>>> Message received. ",t)});const el=new W;class tl{constructor(){this.auth=Zc,this.googleProvider=el,this.token=null}signInWithGoogle(){return Do(this.auth,this.googleProvider)}signOut(){return this.auth.signOut()}onAuthStateChanged(e){return lo(this.auth,e)}isInitialized(){return new Promise(e=>{this.auth.onAuthStateChanged(e)})}getCurrentUser(){return this.auth.currentUser}requestPermission(){Notification.requestPermission().then(e=>{e==="granted"?(console.log("Notification permission granted."),Qc(Wi,{vapidKey:"BAk7JkHVy1Kwi5p_a-bYZCWE6YQYfJKBEpoYJJBTa5QAw4lxfbnLYkNRZMagQOMqukAkmEumO8-VR9sNGOAmtZs"}).then(n=>{n?(console.log("currentToken=",n),this.token=n):console.error("No registration token available. Request permission to generate one.")}).catch(n=>{console.error("An error occurred while retrieving token. ",n)})):console.log("Unable to get permission to notify.")})}}var bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ye={},nl={get exports(){return Ye},set exports(t){Ye=t}};(function(t,e){(function(i,r){t.exports=r()})(bt,function(){var i=function(r){var s="@VERSION@-@BUILDLEVEL@",o=r.localStorage||function(){var a={};return{setItem:function(c,h){a[c]=h},getItem:function(c){return a[c]},removeItem:function(c){delete a[c]}}}(),l={CONNECT:1,CONNACK:2,PUBLISH:3,PUBACK:4,PUBREC:5,PUBREL:6,PUBCOMP:7,SUBSCRIBE:8,SUBACK:9,UNSUBSCRIBE:10,UNSUBACK:11,PINGREQ:12,PINGRESP:13,DISCONNECT:14},f=function(a,c){for(var h in a)if(a.hasOwnProperty(h))if(c.hasOwnProperty(h)){if(typeof a[h]!==c[h])throw new Error(v(u.INVALID_TYPE,[typeof a[h],h]))}else{var p="Unknown property, "+h+". Valid properties are:";for(var m in c)c.hasOwnProperty(m)&&(p=p+" "+m);throw new Error(p)}},_=function(a,c){return function(){return a.apply(c,arguments)}},u={OK:{code:0,text:"AMQJSC0000I OK."},CONNECT_TIMEOUT:{code:1,text:"AMQJSC0001E Connect timed out."},SUBSCRIBE_TIMEOUT:{code:2,text:"AMQJS0002E Subscribe timed out."},UNSUBSCRIBE_TIMEOUT:{code:3,text:"AMQJS0003E Unsubscribe timed out."},PING_TIMEOUT:{code:4,text:"AMQJS0004E Ping timed out."},INTERNAL_ERROR:{code:5,text:"AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"},CONNACK_RETURNCODE:{code:6,text:"AMQJS0006E Bad Connack return code:{0} {1}."},SOCKET_ERROR:{code:7,text:"AMQJS0007E Socket error:{0}."},SOCKET_CLOSE:{code:8,text:"AMQJS0008I Socket closed."},MALFORMED_UTF:{code:9,text:"AMQJS0009E Malformed UTF data:{0} {1} {2}."},UNSUPPORTED:{code:10,text:"AMQJS0010E {0} is not supported by this browser."},INVALID_STATE:{code:11,text:"AMQJS0011E Invalid state {0}."},INVALID_TYPE:{code:12,text:"AMQJS0012E Invalid type {0} for {1}."},INVALID_ARGUMENT:{code:13,text:"AMQJS0013E Invalid argument {0} for {1}."},UNSUPPORTED_OPERATION:{code:14,text:"AMQJS0014E Unsupported operation."},INVALID_STORED_DATA:{code:15,text:"AMQJS0015E Invalid data in local storage key={0} value={1}."},INVALID_MQTT_MESSAGE_TYPE:{code:16,text:"AMQJS0016E Invalid MQTT message type {0}."},MALFORMED_UNICODE:{code:17,text:"AMQJS0017E Malformed Unicode string:{0} {1}."},BUFFER_FULL:{code:18,text:"AMQJS0018E Message buffer is full, maximum buffer size: {0}."}},N={0:"Connection Accepted",1:"Connection Refused: unacceptable protocol version",2:"Connection Refused: identifier rejected",3:"Connection Refused: server unavailable",4:"Connection Refused: bad user name or password",5:"Connection Refused: not authorized"},v=function(a,c){var h=a.text;if(c){for(var p,m,g=0;g<c.length;g++)if(p="{"+g+"}",m=h.indexOf(p),m>0){var I=h.substring(0,m),S=h.substring(m+p.length);h=I+c[g]+S}}return h},L=[0,6,77,81,73,115,100,112,3],x=[0,4,77,81,84,84,4],M=function(a,c){this.type=a;for(var h in c)c.hasOwnProperty(h)&&(this[h]=c[h])};M.prototype.encode=function(){var a=(this.type&15)<<4,c=0,h=[],p=0,m;switch(this.messageIdentifier!==void 0&&(c+=2),this.type){case l.CONNECT:switch(this.mqttVersion){case 3:c+=L.length+3;break;case 4:c+=x.length+3;break}c+=D(this.clientId)+2,this.willMessage!==void 0&&(c+=D(this.willMessage.destinationName)+2,m=this.willMessage.payloadBytes,m instanceof Uint8Array||(m=new Uint8Array(I)),c+=m.byteLength+2),this.userName!==void 0&&(c+=D(this.userName)+2),this.password!==void 0&&(c+=D(this.password)+2);break;case l.SUBSCRIBE:a|=2;for(var g=0;g<this.topics.length;g++)h[g]=D(this.topics[g]),c+=h[g]+2;c+=this.requestedQos.length;break;case l.UNSUBSCRIBE:a|=2;for(var g=0;g<this.topics.length;g++)h[g]=D(this.topics[g]),c+=h[g]+2;break;case l.PUBREL:a|=2;break;case l.PUBLISH:this.payloadMessage.duplicate&&(a|=8),a=a|=this.payloadMessage.qos<<1,this.payloadMessage.retained&&(a|=1),p=D(this.payloadMessage.destinationName),c+=p+2;var I=this.payloadMessage.payloadBytes;c+=I.byteLength,I instanceof ArrayBuffer?I=new Uint8Array(I):I instanceof Uint8Array||(I=new Uint8Array(I.buffer));break}var S=xe(c),b=S.length+1,C=new ArrayBuffer(c+b),w=new Uint8Array(C);if(w[0]=a,w.set(S,1),this.type==l.PUBLISH)b=B(this.payloadMessage.destinationName,p,w,b);else if(this.type==l.CONNECT){switch(this.mqttVersion){case 3:w.set(L,b),b+=L.length;break;case 4:w.set(x,b),b+=x.length;break}var d=0;this.cleanSession&&(d=2),this.willMessage!==void 0&&(d|=4,d|=this.willMessage.qos<<3,this.willMessage.retained&&(d|=32)),this.userName!==void 0&&(d|=128),this.password!==void 0&&(d|=64),w[b++]=d,b=ce(this.keepAliveInterval,w,b)}switch(this.messageIdentifier!==void 0&&(b=ce(this.messageIdentifier,w,b)),this.type){case l.CONNECT:b=B(this.clientId,D(this.clientId),w,b),this.willMessage!==void 0&&(b=B(this.willMessage.destinationName,D(this.willMessage.destinationName),w,b),b=ce(m.byteLength,w,b),w.set(m,b),b+=m.byteLength),this.userName!==void 0&&(b=B(this.userName,D(this.userName),w,b)),this.password!==void 0&&(b=B(this.password,D(this.password),w,b));break;case l.PUBLISH:w.set(I,b);break;case l.SUBSCRIBE:for(var g=0;g<this.topics.length;g++)b=B(this.topics[g],h[g],w,b),w[b++]=this.requestedQos[g];break;case l.UNSUBSCRIBE:for(var g=0;g<this.topics.length;g++)b=B(this.topics[g],h[g],w,b);break}return C};function Se(a,c){var h=c,p=a[c],m=p>>4,g=p&=15;c+=1;var I,S=0,b=1;do{if(c==a.length)return[null,h];I=a[c++],S+=(I&127)*b,b*=128}while(I&128);var C=c+S;if(C>a.length)return[null,h];var w=new M(m);switch(m){case l.CONNACK:var d=a[c++];d&1&&(w.sessionPresent=!0),w.returnCode=a[c++];break;case l.PUBLISH:var A=g>>1&3,T=Z(a,c);c+=2;var U=Ae(a,c,T);c+=T,A>0&&(w.messageIdentifier=Z(a,c),c+=2);var k=new te(a.subarray(c,C));(g&1)==1&&(k.retained=!0),(g&8)==8&&(k.duplicate=!0),k.qos=A,k.destinationName=U,w.payloadMessage=k;break;case l.PUBACK:case l.PUBREC:case l.PUBREL:case l.PUBCOMP:case l.UNSUBACK:w.messageIdentifier=Z(a,c);break;case l.SUBACK:w.messageIdentifier=Z(a,c),c+=2,w.returnCode=a.subarray(c,C);break}return[w,C]}function ce(a,c,h){return c[h++]=a>>8,c[h++]=a%256,h}function B(a,c,h,p){return p=ce(c,h,p),we(a,h,p),p+c}function Z(a,c){return 256*a[c]+a[c+1]}function xe(a){var c=new Array(1),h=0;do{var p=a%128;a=a>>7,a>0&&(p|=128),c[h++]=p}while(a>0&&h<4);return c}function D(a){for(var c=0,h=0;h<a.length;h++){var p=a.charCodeAt(h);p>2047?(55296<=p&&p<=56319&&(h++,c++),c+=3):p>127?c+=2:c++}return c}function we(a,c,h){for(var p=h,m=0;m<a.length;m++){var g=a.charCodeAt(m);if(55296<=g&&g<=56319){var I=a.charCodeAt(++m);if(isNaN(I))throw new Error(v(u.MALFORMED_UNICODE,[g,I]));g=(g-55296<<10)+(I-56320)+65536}g<=127?c[p++]=g:g<=2047?(c[p++]=g>>6&31|192,c[p++]=g&63|128):g<=65535?(c[p++]=g>>12&15|224,c[p++]=g>>6&63|128,c[p++]=g&63|128):(c[p++]=g>>18&7|240,c[p++]=g>>12&63|128,c[p++]=g>>6&63|128,c[p++]=g&63|128)}return c}function Ae(a,c,h){for(var p="",m,g=c;g<c+h;){var I=a[g++];if(I<128)m=I;else{var S=a[g++]-128;if(S<0)throw new Error(v(u.MALFORMED_UTF,[I.toString(16),S.toString(16),""]));if(I<224)m=64*(I-192)+S;else{var b=a[g++]-128;if(b<0)throw new Error(v(u.MALFORMED_UTF,[I.toString(16),S.toString(16),b.toString(16)]));if(I<240)m=4096*(I-224)+64*S+b;else{var C=a[g++]-128;if(C<0)throw new Error(v(u.MALFORMED_UTF,[I.toString(16),S.toString(16),b.toString(16),C.toString(16)]));if(I<248)m=262144*(I-240)+4096*S+64*b+C;else throw new Error(v(u.MALFORMED_UTF,[I.toString(16),S.toString(16),b.toString(16),C.toString(16)]))}}}m>65535&&(m-=65536,p+=String.fromCharCode(55296+(m>>10)),m=56320+(m&1023)),p+=String.fromCharCode(m)}return p}var Be=function(a,c){this._client=a,this._keepAliveInterval=c*1e3,this.isReset=!1;var h=new M(l.PINGREQ).encode(),p=function(g){return function(){return m.apply(g)}},m=function(){this.isReset?(this.isReset=!1,this._client._trace("Pinger.doPing","send PINGREQ"),this._client.socket.send(h),this.timeout=setTimeout(p(this),this._keepAliveInterval)):(this._client._trace("Pinger.doPing","Timed out"),this._client._disconnected(u.PING_TIMEOUT.code,v(u.PING_TIMEOUT)))};this.reset=function(){this.isReset=!0,clearTimeout(this.timeout),this._keepAliveInterval>0&&(this.timeout=setTimeout(p(this),this._keepAliveInterval))},this.cancel=function(){clearTimeout(this.timeout)}},ee=function(a,c,h,p){c||(c=30);var m=function(g,I,S){return function(){return g.apply(I,S)}};this.timeout=setTimeout(m(h,a,p),c*1e3),this.cancel=function(){clearTimeout(this.timeout)}},y=function(a,c,h,p,m){if(!("WebSocket"in r&&r.WebSocket!==null))throw new Error(v(u.UNSUPPORTED,["WebSocket"]));if(!("ArrayBuffer"in r&&r.ArrayBuffer!==null))throw new Error(v(u.UNSUPPORTED,["ArrayBuffer"]));this._trace("Paho.Client",a,c,h,p,m),this.host=c,this.port=h,this.path=p,this.uri=a,this.clientId=m,this._wsuri=null,this._localKey=c+":"+h+(p!="/mqtt"?":"+p:"")+":"+m+":",this._msg_queue=[],this._buffered_msg_queue=[],this._sentMessages={},this._receivedMessages={},this._notify_msg_sent={},this._message_identifier=1,this._sequence=0;for(var g in o)(g.indexOf("Sent:"+this._localKey)===0||g.indexOf("Received:"+this._localKey)===0)&&this.restore(g)};y.prototype.host=null,y.prototype.port=null,y.prototype.path=null,y.prototype.uri=null,y.prototype.clientId=null,y.prototype.socket=null,y.prototype.connected=!1,y.prototype.maxMessageIdentifier=65536,y.prototype.connectOptions=null,y.prototype.hostIndex=null,y.prototype.onConnected=null,y.prototype.onConnectionLost=null,y.prototype.onMessageDelivered=null,y.prototype.onMessageArrived=null,y.prototype.traceFunction=null,y.prototype._msg_queue=null,y.prototype._buffered_msg_queue=null,y.prototype._connectTimeout=null,y.prototype.sendPinger=null,y.prototype.receivePinger=null,y.prototype._reconnectInterval=1,y.prototype._reconnecting=!1,y.prototype._reconnectTimeout=null,y.prototype.disconnectedPublishing=!1,y.prototype.disconnectedBufferSize=5e3,y.prototype.receiveBuffer=null,y.prototype._traceBuffer=null,y.prototype._MAX_TRACE_ENTRIES=100,y.prototype.connect=function(a){var c=this._traceMask(a,"password");if(this._trace("Client.connect",c,this.socket,this.connected),this.connected)throw new Error(v(u.INVALID_STATE,["already connected"]));if(this.socket)throw new Error(v(u.INVALID_STATE,["already connected"]));this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),this.connectOptions=a,this._reconnectInterval=1,this._reconnecting=!1,a.uris?(this.hostIndex=0,this._doConnect(a.uris[0])):this._doConnect(this.uri)},y.prototype.subscribe=function(a,c){if(this._trace("Client.subscribe",a,c),!this.connected)throw new Error(v(u.INVALID_STATE,["not connected"]));var h=new M(l.SUBSCRIBE);h.topics=a.constructor===Array?a:[a],c.qos===void 0&&(c.qos=0),h.requestedQos=[];for(var p=0;p<h.topics.length;p++)h.requestedQos[p]=c.qos;c.onSuccess&&(h.onSuccess=function(m){c.onSuccess({invocationContext:c.invocationContext,grantedQos:m})}),c.onFailure&&(h.onFailure=function(m){c.onFailure({invocationContext:c.invocationContext,errorCode:m,errorMessage:v(m)})}),c.timeout&&(h.timeOut=new ee(this,c.timeout,c.onFailure,[{invocationContext:c.invocationContext,errorCode:u.SUBSCRIBE_TIMEOUT.code,errorMessage:v(u.SUBSCRIBE_TIMEOUT)}])),this._requires_ack(h),this._schedule_message(h)},y.prototype.unsubscribe=function(a,c){if(this._trace("Client.unsubscribe",a,c),!this.connected)throw new Error(v(u.INVALID_STATE,["not connected"]));var h=new M(l.UNSUBSCRIBE);h.topics=a.constructor===Array?a:[a],c.onSuccess&&(h.callback=function(){c.onSuccess({invocationContext:c.invocationContext})}),c.timeout&&(h.timeOut=new ee(this,c.timeout,c.onFailure,[{invocationContext:c.invocationContext,errorCode:u.UNSUBSCRIBE_TIMEOUT.code,errorMessage:v(u.UNSUBSCRIBE_TIMEOUT)}])),this._requires_ack(h),this._schedule_message(h)},y.prototype.send=function(a){this._trace("Client.send",a);var c=new M(l.PUBLISH);if(c.payloadMessage=a,this.connected)a.qos>0?this._requires_ack(c):this.onMessageDelivered&&(this._notify_msg_sent[c]=this.onMessageDelivered(c.payloadMessage)),this._schedule_message(c);else if(this._reconnecting&&this.disconnectedPublishing){var h=Object.keys(this._sentMessages).length+this._buffered_msg_queue.length;if(h>this.disconnectedBufferSize)throw new Error(v(u.BUFFER_FULL,[this.disconnectedBufferSize]));a.qos>0?this._requires_ack(c):(c.sequence=++this._sequence,this._buffered_msg_queue.unshift(c))}else throw new Error(v(u.INVALID_STATE,["not connected"]))},y.prototype.disconnect=function(){if(this._trace("Client.disconnect"),this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),!this.socket)throw new Error(v(u.INVALID_STATE,["not connecting or connected"]));var a=new M(l.DISCONNECT);this._notify_msg_sent[a]=_(this._disconnected,this),this._schedule_message(a)},y.prototype.getTraceLog=function(){if(this._traceBuffer!==null){this._trace("Client.getTraceLog",new Date),this._trace("Client.getTraceLog in flight messages",this._sentMessages.length);for(var a in this._sentMessages)this._trace("_sentMessages ",a,this._sentMessages[a]);for(var a in this._receivedMessages)this._trace("_receivedMessages ",a,this._receivedMessages[a]);return this._traceBuffer}},y.prototype.startTrace=function(){this._traceBuffer===null&&(this._traceBuffer=[]),this._trace("Client.startTrace",new Date,s)},y.prototype.stopTrace=function(){delete this._traceBuffer},y.prototype._doConnect=function(a){if(this.connectOptions.useSSL){var c=a.split(":");c[0]="wss",a=c.join(":")}this._wsuri=a,this.connected=!1,this.connectOptions.mqttVersion<4?this.socket=new WebSocket(a,["mqttv3.1"]):this.socket=new WebSocket(a,["mqtt"]),this.socket.binaryType="arraybuffer",this.socket.onopen=_(this._on_socket_open,this),this.socket.onmessage=_(this._on_socket_message,this),this.socket.onerror=_(this._on_socket_error,this),this.socket.onclose=_(this._on_socket_close,this),this.sendPinger=new Be(this,this.connectOptions.keepAliveInterval),this.receivePinger=new Be(this,this.connectOptions.keepAliveInterval),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._connectTimeout=new ee(this,this.connectOptions.timeout,this._disconnected,[u.CONNECT_TIMEOUT.code,v(u.CONNECT_TIMEOUT)])},y.prototype._schedule_message=function(a){this._msg_queue.unshift(a),this.connected&&this._process_queue()},y.prototype.store=function(a,c){var h={type:c.type,messageIdentifier:c.messageIdentifier,version:1};switch(c.type){case l.PUBLISH:c.pubRecReceived&&(h.pubRecReceived=!0),h.payloadMessage={};for(var p="",m=c.payloadMessage.payloadBytes,g=0;g<m.length;g++)m[g]<=15?p=p+"0"+m[g].toString(16):p=p+m[g].toString(16);h.payloadMessage.payloadHex=p,h.payloadMessage.qos=c.payloadMessage.qos,h.payloadMessage.destinationName=c.payloadMessage.destinationName,c.payloadMessage.duplicate&&(h.payloadMessage.duplicate=!0),c.payloadMessage.retained&&(h.payloadMessage.retained=!0),a.indexOf("Sent:")===0&&(c.sequence===void 0&&(c.sequence=++this._sequence),h.sequence=c.sequence);break;default:throw Error(v(u.INVALID_STORED_DATA,[a+this._localKey+c.messageIdentifier,h]))}o.setItem(a+this._localKey+c.messageIdentifier,JSON.stringify(h))},y.prototype.restore=function(a){var c=o.getItem(a),h=JSON.parse(c),p=new M(h.type,h);switch(h.type){case l.PUBLISH:for(var m=h.payloadMessage.payloadHex,g=new ArrayBuffer(m.length/2),I=new Uint8Array(g),S=0;m.length>=2;){var b=parseInt(m.substring(0,2),16);m=m.substring(2,m.length),I[S++]=b}var C=new te(I);C.qos=h.payloadMessage.qos,C.destinationName=h.payloadMessage.destinationName,h.payloadMessage.duplicate&&(C.duplicate=!0),h.payloadMessage.retained&&(C.retained=!0),p.payloadMessage=C;break;default:throw Error(v(u.INVALID_STORED_DATA,[a,c]))}a.indexOf("Sent:"+this._localKey)===0?(p.payloadMessage.duplicate=!0,this._sentMessages[p.messageIdentifier]=p):a.indexOf("Received:"+this._localKey)===0&&(this._receivedMessages[p.messageIdentifier]=p)},y.prototype._process_queue=function(){for(var a=null;a=this._msg_queue.pop();)this._socket_send(a),this._notify_msg_sent[a]&&(this._notify_msg_sent[a](),delete this._notify_msg_sent[a])},y.prototype._requires_ack=function(a){var c=Object.keys(this._sentMessages).length;if(c>this.maxMessageIdentifier)throw Error("Too many messages:"+c);for(;this._sentMessages[this._message_identifier]!==void 0;)this._message_identifier++;a.messageIdentifier=this._message_identifier,this._sentMessages[a.messageIdentifier]=a,a.type===l.PUBLISH&&this.store("Sent:",a),this._message_identifier===this.maxMessageIdentifier&&(this._message_identifier=1)},y.prototype._on_socket_open=function(){var a=new M(l.CONNECT,this.connectOptions);a.clientId=this.clientId,this._socket_send(a)},y.prototype._on_socket_message=function(a){this._trace("Client._on_socket_message",a.data);for(var c=this._deframeMessages(a.data),h=0;h<c.length;h+=1)this._handleMessage(c[h])},y.prototype._deframeMessages=function(a){var c=new Uint8Array(a),h=[];if(this.receiveBuffer){var p=new Uint8Array(this.receiveBuffer.length+c.length);p.set(this.receiveBuffer),p.set(c,this.receiveBuffer.length),c=p,delete this.receiveBuffer}try{for(var m=0;m<c.length;){var g=Se(c,m),I=g[0];if(m=g[1],I!==null)h.push(I);else break}m<c.length&&(this.receiveBuffer=c.subarray(m))}catch(b){var S=b.hasOwnProperty("stack")=="undefined"?b.stack.toString():"No Error Stack Available";this._disconnected(u.INTERNAL_ERROR.code,v(u.INTERNAL_ERROR,[b.message,S]));return}return h},y.prototype._handleMessage=function(a){this._trace("Client._handleMessage",a);try{switch(a.type){case l.CONNACK:if(this._connectTimeout.cancel(),this._reconnectTimeout&&this._reconnectTimeout.cancel(),this.connectOptions.cleanSession){for(var c in this._sentMessages){var d=this._sentMessages[c];o.removeItem("Sent:"+this._localKey+d.messageIdentifier)}this._sentMessages={};for(var c in this._receivedMessages){var C=this._receivedMessages[c];o.removeItem("Received:"+this._localKey+C.messageIdentifier)}this._receivedMessages={}}if(a.returnCode===0)this.connected=!0,this.connectOptions.uris&&(this.hostIndex=this.connectOptions.uris.length);else{this._disconnected(u.CONNACK_RETURNCODE.code,v(u.CONNACK_RETURNCODE,[a.returnCode,N[a.returnCode]]));break}var m=[];for(var h in this._sentMessages)this._sentMessages.hasOwnProperty(h)&&m.push(this._sentMessages[h]);if(this._buffered_msg_queue.length>0)for(var p=null;p=this._buffered_msg_queue.pop();)m.push(p),this.onMessageDelivered&&(this._notify_msg_sent[p]=this.onMessageDelivered(p.payloadMessage));for(var m=m.sort(function(T,U){return T.sequence-U.sequence}),g=0,I=m.length;g<I;g++){var d=m[g];if(d.type==l.PUBLISH&&d.pubRecReceived){var S=new M(l.PUBREL,{messageIdentifier:d.messageIdentifier});this._schedule_message(S)}else this._schedule_message(d)}this.connectOptions.onSuccess&&this.connectOptions.onSuccess({invocationContext:this.connectOptions.invocationContext});var b=!1;this._reconnecting&&(b=!0,this._reconnectInterval=1,this._reconnecting=!1),this._connected(b,this._wsuri),this._process_queue();break;case l.PUBLISH:this._receivePublish(a);break;case l.PUBACK:var d=this._sentMessages[a.messageIdentifier];d&&(delete this._sentMessages[a.messageIdentifier],o.removeItem("Sent:"+this._localKey+a.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(d.payloadMessage));break;case l.PUBREC:var d=this._sentMessages[a.messageIdentifier];if(d){d.pubRecReceived=!0;var S=new M(l.PUBREL,{messageIdentifier:a.messageIdentifier});this.store("Sent:",d),this._schedule_message(S)}break;case l.PUBREL:var C=this._receivedMessages[a.messageIdentifier];o.removeItem("Received:"+this._localKey+a.messageIdentifier),C&&(this._receiveMessage(C),delete this._receivedMessages[a.messageIdentifier]);var w=new M(l.PUBCOMP,{messageIdentifier:a.messageIdentifier});this._schedule_message(w);break;case l.PUBCOMP:var d=this._sentMessages[a.messageIdentifier];delete this._sentMessages[a.messageIdentifier],o.removeItem("Sent:"+this._localKey+a.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(d.payloadMessage);break;case l.SUBACK:var d=this._sentMessages[a.messageIdentifier];d&&(d.timeOut&&d.timeOut.cancel(),a.returnCode[0]===128?d.onFailure&&d.onFailure(a.returnCode):d.onSuccess&&d.onSuccess(a.returnCode),delete this._sentMessages[a.messageIdentifier]);break;case l.UNSUBACK:var d=this._sentMessages[a.messageIdentifier];d&&(d.timeOut&&d.timeOut.cancel(),d.callback&&d.callback(),delete this._sentMessages[a.messageIdentifier]);break;case l.PINGRESP:this.sendPinger.reset();break;case l.DISCONNECT:this._disconnected(u.INVALID_MQTT_MESSAGE_TYPE.code,v(u.INVALID_MQTT_MESSAGE_TYPE,[a.type]));break;default:this._disconnected(u.INVALID_MQTT_MESSAGE_TYPE.code,v(u.INVALID_MQTT_MESSAGE_TYPE,[a.type]))}}catch(T){var A=T.hasOwnProperty("stack")=="undefined"?T.stack.toString():"No Error Stack Available";this._disconnected(u.INTERNAL_ERROR.code,v(u.INTERNAL_ERROR,[T.message,A]));return}},y.prototype._on_socket_error=function(a){this._reconnecting||this._disconnected(u.SOCKET_ERROR.code,v(u.SOCKET_ERROR,[a.data]))},y.prototype._on_socket_close=function(){this._reconnecting||this._disconnected(u.SOCKET_CLOSE.code,v(u.SOCKET_CLOSE))},y.prototype._socket_send=function(a){if(a.type==1){var c=this._traceMask(a,"password");this._trace("Client._socket_send",c)}else this._trace("Client._socket_send",a);this.socket.send(a.encode()),this.sendPinger.reset()},y.prototype._receivePublish=function(a){switch(a.payloadMessage.qos){case"undefined":case 0:this._receiveMessage(a);break;case 1:var c=new M(l.PUBACK,{messageIdentifier:a.messageIdentifier});this._schedule_message(c),this._receiveMessage(a);break;case 2:this._receivedMessages[a.messageIdentifier]=a,this.store("Received:",a);var h=new M(l.PUBREC,{messageIdentifier:a.messageIdentifier});this._schedule_message(h);break;default:throw Error("Invaild qos="+a.payloadMessage.qos)}},y.prototype._receiveMessage=function(a){this.onMessageArrived&&this.onMessageArrived(a.payloadMessage)},y.prototype._connected=function(a,c){this.onConnected&&this.onConnected(a,c)},y.prototype._reconnect=function(){this._trace("Client._reconnect"),this.connected||(this._reconnecting=!0,this.sendPinger.cancel(),this.receivePinger.cancel(),this._reconnectInterval<128&&(this._reconnectInterval=this._reconnectInterval*2),this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri))},y.prototype._disconnected=function(a,c){if(this._trace("Client._disconnected",a,c),a!==void 0&&this._reconnecting){this._reconnectTimeout=new ee(this,this._reconnectInterval,this._reconnect);return}if(this.sendPinger.cancel(),this.receivePinger.cancel(),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._msg_queue=[],this._buffered_msg_queue=[],this._notify_msg_sent={},this.socket&&(this.socket.onopen=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket.onclose=null,this.socket.readyState===1&&this.socket.close(),delete this.socket),this.connectOptions.uris&&this.hostIndex<this.connectOptions.uris.length-1)this.hostIndex++,this._doConnect(this.connectOptions.uris[this.hostIndex]);else if(a===void 0&&(a=u.OK.code,c=v(u.OK)),this.connected){if(this.connected=!1,this.onConnectionLost&&this.onConnectionLost({errorCode:a,errorMessage:c,reconnect:this.connectOptions.reconnect,uri:this._wsuri}),a!==u.OK.code&&this.connectOptions.reconnect){this._reconnectInterval=1,this._reconnect();return}}else this.connectOptions.mqttVersion===4&&this.connectOptions.mqttVersionExplicit===!1?(this._trace("Failed to connect V4, dropping back to V3"),this.connectOptions.mqttVersion=3,this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri)):this.connectOptions.onFailure&&this.connectOptions.onFailure({invocationContext:this.connectOptions.invocationContext,errorCode:a,errorMessage:c})},y.prototype._trace=function(){if(this.traceFunction){var a=Array.prototype.slice.call(arguments);for(var c in a)typeof a[c]<"u"&&a.splice(c,1,JSON.stringify(a[c]));var h=a.join("");this.traceFunction({severity:"Debug",message:h})}if(this._traceBuffer!==null)for(var c=0,p=arguments.length;c<p;c++)this._traceBuffer.length==this._MAX_TRACE_ENTRIES&&this._traceBuffer.shift(),c===0?this._traceBuffer.push(arguments[c]):typeof arguments[c]>"u"?this._traceBuffer.push(arguments[c]):this._traceBuffer.push("  "+JSON.stringify(arguments[c]))},y.prototype._traceMask=function(a,c){var h={};for(var p in a)a.hasOwnProperty(p)&&(p==c?h[p]="******":h[p]=a[p]);return h};var Ji=function(a,c,h,p){var m;if(typeof a!="string")throw new Error(v(u.INVALID_TYPE,[typeof a,"host"]));if(arguments.length==2){p=c,m=a;var g=m.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);if(g)a=g[4]||g[2],c=parseInt(g[7]),h=g[8];else throw new Error(v(u.INVALID_ARGUMENT,[a,"host"]))}else{if(arguments.length==3&&(p=h,h="/mqtt"),typeof c!="number"||c<0)throw new Error(v(u.INVALID_TYPE,[typeof c,"port"]));if(typeof h!="string")throw new Error(v(u.INVALID_TYPE,[typeof h,"path"]));var I=a.indexOf(":")!==-1&&a.slice(0,1)!=="["&&a.slice(-1)!=="]";m="ws://"+(I?"["+a+"]":a)+":"+c+h}for(var S=0,b=0;b<p.length;b++){var C=p.charCodeAt(b);55296<=C&&C<=56319&&b++,S++}if(typeof p!="string"||S>65535)throw new Error(v(u.INVALID_ARGUMENT,[p,"clientId"]));var w=new y(m,a,c,h,p);Object.defineProperties(this,{host:{get:function(){return a},set:function(){throw new Error(v(u.UNSUPPORTED_OPERATION))}},port:{get:function(){return c},set:function(){throw new Error(v(u.UNSUPPORTED_OPERATION))}},path:{get:function(){return h},set:function(){throw new Error(v(u.UNSUPPORTED_OPERATION))}},uri:{get:function(){return m},set:function(){throw new Error(v(u.UNSUPPORTED_OPERATION))}},clientId:{get:function(){return w.clientId},set:function(){throw new Error(v(u.UNSUPPORTED_OPERATION))}},onConnected:{get:function(){return w.onConnected},set:function(d){if(typeof d=="function")w.onConnected=d;else throw new Error(v(u.INVALID_TYPE,[typeof d,"onConnected"]))}},disconnectedPublishing:{get:function(){return w.disconnectedPublishing},set:function(d){w.disconnectedPublishing=d}},disconnectedBufferSize:{get:function(){return w.disconnectedBufferSize},set:function(d){w.disconnectedBufferSize=d}},onConnectionLost:{get:function(){return w.onConnectionLost},set:function(d){if(typeof d=="function")w.onConnectionLost=d;else throw new Error(v(u.INVALID_TYPE,[typeof d,"onConnectionLost"]))}},onMessageDelivered:{get:function(){return w.onMessageDelivered},set:function(d){if(typeof d=="function")w.onMessageDelivered=d;else throw new Error(v(u.INVALID_TYPE,[typeof d,"onMessageDelivered"]))}},onMessageArrived:{get:function(){return w.onMessageArrived},set:function(d){if(typeof d=="function")w.onMessageArrived=d;else throw new Error(v(u.INVALID_TYPE,[typeof d,"onMessageArrived"]))}},trace:{get:function(){return w.traceFunction},set:function(d){if(typeof d=="function")w.traceFunction=d;else throw new Error(v(u.INVALID_TYPE,[typeof d,"onTrace"]))}}}),this.connect=function(d){if(d=d||{},f(d,{timeout:"number",userName:"string",password:"string",willMessage:"object",keepAliveInterval:"number",cleanSession:"boolean",useSSL:"boolean",invocationContext:"object",onSuccess:"function",onFailure:"function",hosts:"object",ports:"object",reconnect:"boolean",mqttVersion:"number",mqttVersionExplicit:"boolean",uris:"object"}),d.keepAliveInterval===void 0&&(d.keepAliveInterval=60),d.mqttVersion>4||d.mqttVersion<3)throw new Error(v(u.INVALID_ARGUMENT,[d.mqttVersion,"connectOptions.mqttVersion"]));if(d.mqttVersion===void 0?(d.mqttVersionExplicit=!1,d.mqttVersion=4):d.mqttVersionExplicit=!0,d.password!==void 0&&d.userName===void 0)throw new Error(v(u.INVALID_ARGUMENT,[d.password,"connectOptions.password"]));if(d.willMessage){if(!(d.willMessage instanceof te))throw new Error(v(u.INVALID_TYPE,[d.willMessage,"connectOptions.willMessage"]));if(d.willMessage.stringPayload=null,typeof d.willMessage.destinationName>"u")throw new Error(v(u.INVALID_TYPE,[typeof d.willMessage.destinationName,"connectOptions.willMessage.destinationName"]))}if(typeof d.cleanSession>"u"&&(d.cleanSession=!0),d.hosts){if(!(d.hosts instanceof Array))throw new Error(v(u.INVALID_ARGUMENT,[d.hosts,"connectOptions.hosts"]));if(d.hosts.length<1)throw new Error(v(u.INVALID_ARGUMENT,[d.hosts,"connectOptions.hosts"]));for(var A=!1,T=0;T<d.hosts.length;T++){if(typeof d.hosts[T]!="string")throw new Error(v(u.INVALID_TYPE,[typeof d.hosts[T],"connectOptions.hosts["+T+"]"]));if(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(d.hosts[T])){if(T===0)A=!0;else if(!A)throw new Error(v(u.INVALID_ARGUMENT,[d.hosts[T],"connectOptions.hosts["+T+"]"]))}else if(A)throw new Error(v(u.INVALID_ARGUMENT,[d.hosts[T],"connectOptions.hosts["+T+"]"]))}if(A)d.uris=d.hosts;else{if(!d.ports)throw new Error(v(u.INVALID_ARGUMENT,[d.ports,"connectOptions.ports"]));if(!(d.ports instanceof Array))throw new Error(v(u.INVALID_ARGUMENT,[d.ports,"connectOptions.ports"]));if(d.hosts.length!==d.ports.length)throw new Error(v(u.INVALID_ARGUMENT,[d.ports,"connectOptions.ports"]));d.uris=[];for(var T=0;T<d.hosts.length;T++){if(typeof d.ports[T]!="number"||d.ports[T]<0)throw new Error(v(u.INVALID_TYPE,[typeof d.ports[T],"connectOptions.ports["+T+"]"]));var U=d.hosts[T],k=d.ports[T],Qi=U.indexOf(":")!==-1;m="ws://"+(Qi?"["+U+"]":U)+":"+k+h,d.uris.push(m)}}}w.connect(d)},this.subscribe=function(d,A){if(typeof d!="string"&&d.constructor!==Array)throw new Error("Invalid argument:"+d);if(A=A||{},f(A,{qos:"number",invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),A.timeout&&!A.onFailure)throw new Error("subscribeOptions.timeout specified with no onFailure callback.");if(typeof A.qos<"u"&&!(A.qos===0||A.qos===1||A.qos===2))throw new Error(v(u.INVALID_ARGUMENT,[A.qos,"subscribeOptions.qos"]));w.subscribe(d,A)},this.unsubscribe=function(d,A){if(typeof d!="string"&&d.constructor!==Array)throw new Error("Invalid argument:"+d);if(A=A||{},f(A,{invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),A.timeout&&!A.onFailure)throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");w.unsubscribe(d,A)},this.send=function(d,A,T,U){var k;if(arguments.length===0)throw new Error("Invalid argument.length");if(arguments.length==1){if(!(d instanceof te)&&typeof d!="string")throw new Error("Invalid argument:"+typeof d);if(k=d,typeof k.destinationName>"u")throw new Error(v(u.INVALID_ARGUMENT,[k.destinationName,"Message.destinationName"]));w.send(k)}else k=new te(A),k.destinationName=d,arguments.length>=3&&(k.qos=T),arguments.length>=4&&(k.retained=U),w.send(k)},this.publish=function(d,A,T,U){var k;if(arguments.length===0)throw new Error("Invalid argument.length");if(arguments.length==1){if(!(d instanceof te)&&typeof d!="string")throw new Error("Invalid argument:"+typeof d);if(k=d,typeof k.destinationName>"u")throw new Error(v(u.INVALID_ARGUMENT,[k.destinationName,"Message.destinationName"]));w.send(k)}else k=new te(A),k.destinationName=d,arguments.length>=3&&(k.qos=T),arguments.length>=4&&(k.retained=U),w.send(k)},this.disconnect=function(){w.disconnect()},this.getTraceLog=function(){return w.getTraceLog()},this.startTrace=function(){w.startTrace()},this.stopTrace=function(){w.stopTrace()},this.isConnected=function(){return w.connected}},te=function(a){var c;if(typeof a=="string"||a instanceof ArrayBuffer||ArrayBuffer.isView(a)&&!(a instanceof DataView))c=a;else throw v(u.INVALID_ARGUMENT,[a,"newPayload"]);var h,p=0,m=!1,g=!1;Object.defineProperties(this,{payloadString:{enumerable:!0,get:function(){return typeof c=="string"?c:Ae(c,0,c.length)}},payloadBytes:{enumerable:!0,get:function(){if(typeof c=="string"){var I=new ArrayBuffer(D(c)),S=new Uint8Array(I);return we(c,S,0),S}else return c}},destinationName:{enumerable:!0,get:function(){return h},set:function(I){if(typeof I=="string")h=I;else throw new Error(v(u.INVALID_ARGUMENT,[I,"newDestinationName"]))}},qos:{enumerable:!0,get:function(){return p},set:function(I){if(I===0||I===1||I===2)p=I;else throw new Error("Invalid argument:"+I)}},retained:{enumerable:!0,get:function(){return m},set:function(I){if(typeof I=="boolean")m=I;else throw new Error(v(u.INVALID_ARGUMENT,[I,"newRetained"]))}},topic:{enumerable:!0,get:function(){return h},set:function(I){h=I}},duplicate:{enumerable:!0,get:function(){return g},set:function(I){g=I}}})};return{Client:Ji,Message:te}}(typeof bt<"u"?bt:typeof self<"u"?self:typeof window<"u"?window:{});return i})})(nl);class il{constructor(e){le(this,"onConnectionLost",e=>{console.log("onConnectionLost (TODO: reconnect?)",e),this.connectStatus="Disconnected",e.errorCode!==0&&console.log("onConnectionLost:"+e.errorMessage),this.onMQTTLost&&this.onMQTTLost(e)});le(this,"connect",()=>{const e="incharge.one",i=`web_${location.hostname}_${this.id}`,r=!0,s=3;this.client=new Ye.Client(e,443,i),this.client.onConnectionLost=this.onConnectionLost,this.client.onMessageArrived=o=>{try{console.log("onMessageArrived",o.payloadString),this.data=JSON.parse(o.payloadString),this.onMessageArrived&&this.onMessageArrived(this.data)}catch(l){console.log("error",l)}},console.log("Connecting...."),this.client.connect({useSSL:r,reconnect:!0,onSuccess:()=>{console.log("Connected"),this.connectStatus="Connected",this.client.subscribe("charger/"+this.id+"/status"),this.onMQTTConnect&&this.onMQTTConnect()},onFailure:o=>{console.log("Connection failed",o),this.connectStatus="Connection failed"},timeout:s})});le(this,"subscribe",(e,n=0)=>{if(!this.client){console.log("client is not connected");return}this.client.subscribe(e,{qos:n})});le(this,"publish",(e,n,i=0,r=!1)=>{if(!this.client){console.log("client is not connected");return}console.log("publish",e,n,i,r);const s=new Ye.Message(n);s.destinationName=e,s.qos=i,s.retained=r,this.client.send(s)});le(this,"disconnect",()=>{if(!this.client){console.log("client is not connected");return}this.client.disconnect(),this.client=null});le(this,"isConnected",()=>this.client&&this.client.isConnected());this.id=e,this.client=null,this.connectStatus="Disconnected",this.onMQTTConnect=null,this.onMQTTLost=null,this.onMessageArrived=null,this.data={}}}const ue=window.location.hash.slice(1);window.onhashchange=function(){window.location.reload()};const rl=t=>{t.innerHTML=`
    <div>
      Error. Wrong URL. Rescan the QR code.
    </div>
  `};const ae=""+new URL("../vite.svg",import.meta.url).href,sl=""+new URL("../google.svg",import.meta.url).href,ol=(t,e)=>{const n=i=>{i.addEventListener("click",()=>{console.log("login clicked"),e.signInWithGoogle().then(r=>{console.log("result=",r)}).catch(r=>{})})};t.innerHTML=`
        <div>
          <img src="${ae}" class="logo" alt="Vite logo" />
          <h1>Wellcome to Charger!</h1>
          <h2>You must be logged in to use this app.</h2>
          <div class="card">
            <button id="login" type="button">
                <img src="${sl}" class="login" alt="Google logo" />
                Login with Google
            </button>
          </div>
        </div>
      `,n(document.querySelector("#login"))};class al{constructor(){this.charger=null}setCharger(e){this.charger=e}getCharger(){return this.charger}getChargerStatus(){return this.charger.status}addEventListener(e,n){this.charger.addEventListener(e,n)}}const cl=new al;const ll=""+new URL("../giphy.gif",import.meta.url).href,Gi=""+new URL("../stop.svg",import.meta.url).href;const ul=""+new URL("../logout.svg",import.meta.url).href,zi=(t,e)=>{const n=i=>{i.addEventListener("click",()=>{console.log("logout clicked"),e.signOut().then(()=>{console.log("signout successful")}).catch(r=>{console.log("signout error=",r)})})};t.innerHTML=`
    <div class="logout">
      <button id="logout_btn" type="button">
        <img src="${ul}" alt="Logout logo" />
        <span>Logout</span>
      </button>
    </div>
  `,n(t.querySelector("#logout_btn"))};const dl=""+new URL("../wallet.svg",import.meta.url).href,hl=(t,e,n)=>{t.innerHTML=`
        <div id="balance">
            <span>Ваш баланс:</span>
            <span id="balance_value">$50</span>
        </div>
        <div>
            <button id="add_balance">
                <img src="${dl}" alt="Wallet logo" />
                <span>Поповнити рахунок</span>
            </button>
        </div>
    `},fl=""+new URL("../door_opened.svg",import.meta.url).href,pl=""+new URL("../door_closed.svg",import.meta.url).href,gl=`
  <div>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
`,at=(t,e,n,i,r,s)=>{t.innerHTML=`
    <div class="charger">
        <div class="logout top-right-a"></div>
        <img src="${ae}" class="logo" alt="Vite logo" />
        <h2>Вітаю, ${n.displayName}!</h2>
        <div id="balance">Loading...</div>
        ${s}        
      </div>
  `,zi(document.querySelector(".logout"),i),hl(document.querySelector("#balance"))},ct=(t,e,n,i,r,s)=>{t.innerHTML=`
    <div class="header">
      <img src="${ae}" alt="Vite logo" />
      <div class="name">${n.displayName}!</div>
      <div class="balance">$50</div>
      <div class="logout p-6"></div>
    </div>
    <div class="charger">
        ${s}
      </div>
  `,zi(document.querySelector(".logout"),i)},ml=(t,e,n,i,r)=>{at(t,e,n,i,r,`<div>Очікую відповідь від станції заряджання...</div>${gl}`)},_l=(t,e,n,i,r)=>{at(t,e,n,i,r,"Станція заряджання не відповідає. Зверніться до технічної підтримки. Або скористйтесь іншою станцією заряджання.")},vl=(t,e,n,i,r)=>{at(t,e,n,i,r,"Станція заряджання завантажується...")},Il=(t,e,n,i,r)=>{const s=o=>{console.log("User connected to charger");const l="B0:U54.6:P7";r.publish(`charger/${e}/commands`,`connect:${n.uid}:${l}`),r.publish(`charger/${e}/commands`,`token:${i.token}`),r.publish(`charger/${e}/commands`,`url:${location.href}`)};at(t,e,n,i,r,`
    <div>Станція заряджання вільна.</div>
    <button id="start_charging">Розпочати роботу з зарядною станцією</button>
  `),t.querySelector("#start_charging").addEventListener("click",s)},yl=(t,e,n,i,r,s)=>{const o=f=>{console.log("Stop charging"),r.publish(`charger/${e}/commands`,`stop:${n.uid}`)};ct(t,e,n,i,r,`
    <div class="compact_measures">${(f=>{const _=f!=null&&f.doors_opened?`<img src="${fl}" class="small" alt="Door opened" />`:`<img src="${pl}" class="small" alt="Door closed" />`;return`
      <span>U:<b>${(f.voltage||0).toFixed(0)}</b>V</span>
      <span>I:<b>${((f.current||0)/1e3).toFixed(3)}</b>A</span>
      <span>P:<b>${(f.power||0).toFixed(0)}</b>W</span>
      <span>E:<b>${(f.energy||0).toFixed(0)}</b>Wh</span>
      <span>${_}</span>
    `})(s)}</div>
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
  `),t.querySelector("#stop_charging").addEventListener("click",o)},wl=(t,e,n,i,r,s)=>{var l,f,_,u;const o=N=>{console.log("User connected to charger"),r.publish(`charger/${e}/commands`,`stop:${n.uid}`)};ct(t,e,n,i,r,`
    <div>
      <img src="${ll}" class="giphy" alt="Giphy logo" />
      <div>Триває заряджання...</div>
    </div>
    <div>
      <div><span>Напруга: </span><span id="voltage">${s.voltage.toFixed(0)}</span> <span>В</span></div>
      <div><span>Струм: </span><span id="current">${(l=s.current)==null?void 0:l.toFixed(3)}</span> <span>A</span></div>
      <div><span>Потужність: </span><span id="power">${(f=s.power)==null?void 0:f.toFixed(1)}</span> <span>W</span></div>
      <div><span>pf: </span><span id="pf">${(_=s.pf)==null?void 0:_.toFixed(2)}</span> <span>%</span></div>
      <div><span>Спожито: </span><span id="energy">${(u=s.energy)==null?void 0:u.toFixed(0)}</span> <span>Wh</span></div>
    </div>
    <div>
      <div><span>Час заряджання: </span><span id="time">${((s.time||0)/60).toFixed(0)}</span> <span>хв</span></div>
    </div>
    <div>
      <button id="stop_charging">
        <img src="${Gi}" class="stop" alt="Stop logo" />
        Припинити заряджання
      </button>
    </div>
  `),t.querySelector("#stop_charging").addEventListener("click",o)},bl=(t,e,n,i,r,s)=>{var l,f,_,u;const o=N=>{console.log("User connected to charger"),r.publish(`charger/${e}/commands`,`stop:${n.uid}`)};ct(t,e,n,i,r,`
    <div>
      <h2>Ваш прилад зарядився.</h2>
    </div>
    <div>
      <div><span>Напруга: </span><span id="voltage">${s.voltage.toFixed(0)}</span> <span>В</span></div>
      <div><span>Струм: </span><span id="current">${(l=s.current)==null?void 0:l.toFixed(3)}</span> <span>A</span></div>
      <div><span>Потужність: </span><span id="power">${(f=s.power)==null?void 0:f.toFixed(1)}</span> <span>W</span></div>
      <div><span>pf: </span><span id="pf">${(_=s.pf)==null?void 0:_.toFixed(2)}</span> <span>%</span></div>
      <div><span>Спожито: </span><span id="energy">${(u=s.energy)==null?void 0:u.toFixed(0)}</span> <span>Wh</span></div>
    </div>
    <div>
      <div><span>Час заряджання: </span><span id="time">${((s.time||0)/60).toFixed(0)}</span> <span>хв</span></div>
    </div>
    <div>
      <button id="stop_charging">
        <img src="${Gi}" class="stop" alt="Stop logo" />
        Відімкнути замок дверцят.
      </button>
    </div>
  `),t.querySelector("#stop_charging").addEventListener("click",o)},El=(t,e,n,i,r,s)=>{var o;ct(t,e,n,i,r,`
    <div>
      <h2>Заряджання завершено.</h2>
    </div>
    <div>
      <div><span>Спожито: </span><span id="energy">${(o=s.energy)==null?void 0:o.toFixed(0)}</span> <span>Wh</span></div>
    </div>
    <div>
      <div><span>Час заряджання: </span><span id="time">${((s.time||0)/60).toFixed(0)}</span> <span>хв</span></div>
    </div>
    <div>
      Закрийте дверцята.
    </div>
  `)},Tl=(t,e,n,i)=>{t.innerHTML=`
    Стан станції заряджання невідомий. Зверніться до технічної підтримки.
  `},Sl=t=>{t.innerHTML=`
  <div class="charger">
    <img src="${ae}" class="logo" alt="Vite logo" />
    <h2>Втрачено зв'язок з сервером.</h2>
    <div>Намагаємось перепідключитись...</div>
    <div>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    <div>Якщо це не виправить проблему, перезавантажте сторінку.</div>
  </div>
`},Al=(t,e,n)=>{t.innerHTML=`
    <div class="charger">
      <img src="${ae}" class="logo" alt="Vite logo" />
      <h2>Зарядна станція несправна.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
      <br/>
      <div style="text-align: left">
        <div>Код помилки: <b>${e}</b></div>
        <div>Причина: <b>${n}</b></div>
      </div>
    </div>
  `},kl=t=>{t.innerHTML=`
    <div class="charger">
      <img src="${ae}" class="logo" alt="Vite logo" />
      <h2>Зарядна станція використовується іншим користувачем.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
    </div>
  `},Cl=(t,e)=>{let n=e;e==="fwupdate"&&(n="Перезавантаження для оновлення ПЗ"),t.innerHTML=`
    <div class="charger">
      <img src="${ae}" class="logo" alt="Vite logo" />
      <h2>Вибачте, але зарядна станція вимкнена.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
      <br/>
      <div style="text-align: left">
        <div>Причина: <b>${n}</b></div>
      </div>
    </div>
  `},Rl=(t,e,n)=>{let i="Інше";e==="fwupdate"&&(i="Оновлення ПЗ"),t.innerHTML=`
    <div class="charger">
      <img src="${ae}" class="logo" alt="Vite logo" />
      <h2>Вибачте, але зарядна станція на технічному обслуговані.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
      <br/>
      <div style="text-align: left">
        <div>Причина: <b>${i}</b></div>
        <div><b>${n}</b></div>
      </div>
      <div>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
      </div>
</div>
  `},Nl=(t,e,n,i,r)=>{const s=n.uid;console.log("---- uid=",s),console.log("charger=",cl);let o=setTimeout(()=>{_l(t,e,n,i,r)},15e3);r.onMessageArrived=l=>{if(clearTimeout(o),l.uid&&l.uid!==s)return kl(t);switch(l.status){case"init":vl(t,e,n,i,r);break;case"ready":Il(t,e,n,i,r);break;case"busy":yl(t,e,n,i,r,l);break;case"charging":wl(t,e,n,i,r,l);break;case"completed":bl(t,e,n,i,r,l);break;case"done":El(t,e,n,i,r,l);break;case"error":Al(t,l.code,l.reason);break;case"off":Cl(t,l.reason);break;case"maintenance":Rl(t,l.event,l.message);break;case"ignore_me":break;default:Tl(t)}},ml(t,e,n,i,r)},Ml=document.getElementById("app"),Pl=t=>{if(console.log("App:element",t),!ue)return rl(t);const e=new tl;e.requestPermission();const n=new il("charger_"+ue);n.onMQTTConnect=()=>{console.log("onMQTTConnect"),n.subscribe("charger/"+ue+"/status"),n.subscribe("charger/"+ue+"/data");const i=e.getCurrentUser();i&&n.publish("charger/"+ue+"/commands",`hello:${i.uid}`)},n.onMQTTLost=()=>(console.log("onMQTTLost. TODO: reconnect"),Sl(t)),e.onAuthStateChanged(i=>(console.log("user=",i),i?(n.id="charger_"+ue+"_"+i.uid,n.connect(),Nl(t,ue,i,e,n)):(n.disconnect(),ol(t,e))))};Pl(Ml);
