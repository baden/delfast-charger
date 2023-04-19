var Fn=Object.defineProperty;var Vn=(n,e,t)=>e in n?Fn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ie=(n,e,t)=>(Vn(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
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
 */const zt=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},$n=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],c=n[t++],l=n[t++],g=((r&7)<<18|(s&63)<<12|(c&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const s=n[t++],c=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|c&63)}}return e.join("")},Gt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],c=r+1<n.length,l=c?n[r+1]:0,g=r+2<n.length,I=g?n[r+2]:0,h=s>>2,N=(s&3)<<4|l>>4;let m=(l&15)<<2|I>>6,O=I&63;g||(O=64,c||(m=64)),i.push(t[h],t[N],t[m],t[O])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zt(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$n(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const I=r<n.length?t[n.charAt(r)]:64;++r;const N=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||l==null||I==null||N==null)throw new Hn;const m=s<<2|l>>4;if(i.push(m),I!==64){const O=l<<4&240|I>>2;if(i.push(O),N!==64){const U=I<<6&192|N;i.push(U)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qn=function(n){const e=zt(n);return Gt.encodeByteArray(e,!0)},Kt=function(n){return qn(n).replace(/\./g,"")},Jt=function(n){try{return Gt.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jn=()=>Wn().__FIREBASE_DEFAULTS__,zn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gn=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jt(n[1]);return e&&JSON.parse(e)},dt=()=>{try{return jn()||zn()||Gn()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kn=n=>{var e,t;return(t=(e=dt())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jn=()=>{var n;return(n=dt())===null||n===void 0?void 0:n.config},Qt=n=>{var e;return(e=dt())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Qn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function P(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yn(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(P())}function Xn(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zn(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ei(){const n=P();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ti(){try{return typeof indexedDB=="object"}catch{return!1}}function ni(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const ii="FirebaseError";class ee extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ii,Object.setPrototypeOf(this,ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,be.prototype.create)}}class be{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],c=s?ri(s,i):"Error",l=`${this.serviceName}: ${c} (${r}).`;return new ee(r,l,i)}}function ri(n,e){return n.replace(si,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const si=/\{\$([^}]+)}/g;function oi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ue(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],c=e[r];if(Et(s)&&Et(c)){if(!Ue(s,c))return!1}else if(s!==c)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Et(n){return n!==null&&typeof n=="object"}/**
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
 */function Se(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ai(n,e){const t=new ci(n,e);return t.subscribe.bind(t)}class ci{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");li(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Qe),r.error===void 0&&(r.error=Qe),r.complete===void 0&&(r.complete=Qe);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function li(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qe(){}/**
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
 */function ue(n){return n&&n._delegate?n._delegate:n}class pe{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class ui{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Qn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hi(e))try{this.getOrInitializeService({instanceIdentifier:se})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=se){return this.instances.has(e)}getOptions(e=se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&c.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const c=this.instances.get(r);return c&&e(c,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:di(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=se){return this.component?this.component.multipleInstances?e:se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function di(n){return n===se?void 0:n}function hi(n){return n.instantiationMode==="EAGER"}/**
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
 */class fi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ui(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var k;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(k||(k={}));const gi={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},pi=k.INFO,_i={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},mi=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=_i[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yt{constructor(e){this.name=e,this._logLevel=pi,this._logHandler=mi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const vi=(n,e)=>e.some(t=>n instanceof t);let wt,Tt;function Ii(){return wt||(wt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yi(){return Tt||(Tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xt=new WeakMap,rt=new WeakMap,Zt=new WeakMap,Ye=new WeakMap,ht=new WeakMap;function Ei(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",c)},s=()=>{t(X(n.result)),r()},c=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Xt.set(t,n)}).catch(()=>{}),ht.set(e,n),e}function wi(n){if(rt.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",c),n.removeEventListener("abort",c)},s=()=>{t(),r()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",c),n.addEventListener("abort",c)});rt.set(n,e)}let st={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return rt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zt.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return X(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ti(n){st=n(st)}function bi(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Xe(this),e,...t);return Zt.set(i,e.sort?e.sort():[e]),X(i)}:yi().includes(n)?function(...e){return n.apply(Xe(this),e),X(Xt.get(this))}:function(...e){return X(n.apply(Xe(this),e))}}function Si(n){return typeof n=="function"?bi(n):(n instanceof IDBTransaction&&wi(n),vi(n,Ii())?new Proxy(n,st):n)}function X(n){if(n instanceof IDBRequest)return Ei(n);if(Ye.has(n))return Ye.get(n);const e=Si(n);return e!==n&&(Ye.set(n,e),ht.set(e,n)),e}const Xe=n=>ht.get(n);function Ai(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const c=indexedDB.open(n,e),l=X(c);return i&&c.addEventListener("upgradeneeded",g=>{i(X(c.result),g.oldVersion,g.newVersion,X(c.transaction))}),t&&c.addEventListener("blocked",()=>t()),l.then(g=>{s&&g.addEventListener("close",()=>s()),r&&g.addEventListener("versionchange",()=>r())}).catch(()=>{}),l}const Ci=["get","getKey","getAll","getAllKeys","count"],Ri=["put","add","delete","clear"],Ze=new Map;function bt(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ze.get(e))return Ze.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=Ri.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Ci.includes(t)))return;const s=async function(c,...l){const g=this.transaction(c,r?"readwrite":"readonly");let I=g.store;return i&&(I=I.index(l.shift())),(await Promise.all([I[t](...l),r&&g.done]))[0]};return Ze.set(e,s),s}Ti(n=>({...n,get:(e,t,i)=>bt(e,t)||n.get(e,t,i),has:(e,t)=>!!bt(e,t)||n.has(e,t)}));/**
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
 */class ki{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ni(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ni(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ot="@firebase/app",St="0.9.7";/**
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
 */const ce=new Yt("@firebase/app"),Mi="@firebase/app-compat",Pi="@firebase/analytics-compat",Di="@firebase/analytics",Oi="@firebase/app-check-compat",Li="@firebase/app-check",Ui="@firebase/auth",xi="@firebase/auth-compat",Bi="@firebase/database",Fi="@firebase/database-compat",Vi="@firebase/functions",$i="@firebase/functions-compat",Hi="@firebase/installations",qi="@firebase/installations-compat",Wi="@firebase/messaging",ji="@firebase/messaging-compat",zi="@firebase/performance",Gi="@firebase/performance-compat",Ki="@firebase/remote-config",Ji="@firebase/remote-config-compat",Qi="@firebase/storage",Yi="@firebase/storage-compat",Xi="@firebase/firestore",Zi="@firebase/firestore-compat",er="firebase",tr="9.19.1";/**
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
 */const at="[DEFAULT]",nr={[ot]:"fire-core",[Mi]:"fire-core-compat",[Di]:"fire-analytics",[Pi]:"fire-analytics-compat",[Li]:"fire-app-check",[Oi]:"fire-app-check-compat",[Ui]:"fire-auth",[xi]:"fire-auth-compat",[Bi]:"fire-rtdb",[Fi]:"fire-rtdb-compat",[Vi]:"fire-fn",[$i]:"fire-fn-compat",[Hi]:"fire-iid",[qi]:"fire-iid-compat",[Wi]:"fire-fcm",[ji]:"fire-fcm-compat",[zi]:"fire-perf",[Gi]:"fire-perf-compat",[Ki]:"fire-rc",[Ji]:"fire-rc-compat",[Qi]:"fire-gcs",[Yi]:"fire-gcs-compat",[Xi]:"fire-fst",[Zi]:"fire-fst-compat","fire-js":"fire-js",[er]:"fire-js-all"};/**
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
 */const xe=new Map,ct=new Map;function ir(n,e){try{n.container.addComponent(e)}catch(t){ce.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ye(n){const e=n.name;if(ct.has(e))return ce.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,n);for(const t of xe.values())ir(t,n);return!0}function en(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const rr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Z=new be("app","Firebase",rr);/**
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
 */class sr{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}/**
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
 */const qe=tr;function tn(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Z.create("bad-app-name",{appName:String(r)});if(t||(t=Jn()),!t)throw Z.create("no-options");const s=xe.get(r);if(s){if(Ue(t,s.options)&&Ue(i,s.config))return s;throw Z.create("duplicate-app",{appName:r})}const c=new fi(r);for(const g of ct.values())c.addComponent(g);const l=new sr(t,i,c);return xe.set(r,l),l}function or(n=at){const e=xe.get(n);if(!e&&n===at)return tn();if(!e)throw Z.create("no-app",{appName:n});return e}function he(n,e,t){var i;let r=(i=nr[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),c=e.match(/\s|\//);if(s||c){const l=[`Unable to register library "${r}" with version "${e}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ce.warn(l.join(" "));return}ye(new pe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ar="firebase-heartbeat-database",cr=1,Ee="firebase-heartbeat-store";let et=null;function nn(){return et||(et=Ai(ar,cr,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ee)}}}).catch(n=>{throw Z.create("idb-open",{originalErrorMessage:n.message})})),et}async function lr(n){try{return(await nn()).transaction(Ee).objectStore(Ee).get(rn(n))}catch(e){if(e instanceof ee)ce.warn(e.message);else{const t=Z.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ce.warn(t.message)}}}async function At(n,e){try{const i=(await nn()).transaction(Ee,"readwrite");return await i.objectStore(Ee).put(e,rn(n)),i.done}catch(t){if(t instanceof ee)ce.warn(t.message);else{const i=Z.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ce.warn(i.message)}}}function rn(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ur=1024,dr=30*24*60*60*1e3;class hr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gr(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ct();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=dr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ct(),{heartbeatsToSend:t,unsentEntries:i}=fr(this._heartbeatsCache.heartbeats),r=Kt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ct(){return new Date().toISOString().substring(0,10)}function fr(n,e=ur){const t=[];let i=n.slice();for(const r of n){const s=t.find(c=>c.agent===r.agent);if(s){if(s.dates.push(r.date),Rt(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Rt(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class gr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ti()?ni().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return At(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return At(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rt(n){return Kt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function pr(n){ye(new pe("platform-logger",e=>new ki(e),"PRIVATE")),ye(new pe("heartbeat",e=>new hr(e),"PRIVATE")),he(ot,St,n),he(ot,St,"esm2017"),he("fire-js","")}pr("");var _r="firebase",mr="9.19.1";/**
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
 */he(_r,mr,"app");function ft(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function sn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vr=sn,on=new be("auth","Firebase",sn());/**
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
 */const kt=new Yt("@firebase/auth");function Pe(n,...e){kt.logLevel<=k.ERROR&&kt.error(`Auth (${qe}): ${n}`,...e)}/**
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
 */function V(n,...e){throw gt(n,...e)}function B(n,...e){return gt(n,...e)}function an(n,e,t){const i=Object.assign(Object.assign({},vr()),{[e]:t});return new be("auth","Firebase",i).create(e,{appName:n.name})}function Ir(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&V(n,"argument-error"),an(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gt(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return on.create(n,...e)}function T(n,e,...t){if(!n)throw gt(e,...t)}function H(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Pe(e),new Error(e)}function W(n,e){n||H(e)}/**
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
 */const Nt=new Map;function q(n){W(n instanceof Function,"Expected a class definition");let e=Nt.get(n);return e?(W(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Nt.set(n,e),e)}/**
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
 */function yr(n,e){const t=en(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Ue(s,e??{}))return r;V(r,"already-initialized")}return t.initialize({options:e})}function Er(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(q);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function lt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function wr(){return Mt()==="http:"||Mt()==="https:"}function Mt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Tr(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wr()||Xn()||"connection"in navigator)?navigator.onLine:!0}function br(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ae{constructor(e,t){this.shortDelay=e,this.longDelay=t,W(t>e,"Short delay should be less than long delay!"),this.isMobile=Yn()||Zn()}get(){return Tr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pt(n,e){W(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cn{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;H("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;H("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;H("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Sr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ar=new Ae(3e4,6e4);function Cr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function We(n,e,t,i,r={}){return ln(n,r,async()=>{let s={},c={};i&&(e==="GET"?c=i:s={body:JSON.stringify(i)});const l=Se(Object.assign({key:n.config.apiKey},c)).slice(1),g=await n._getAdditionalHeaders();return g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode),cn.fetch()(un(n,n.config.apiHost,t,l),Object.assign({method:e,headers:g,referrerPolicy:"no-referrer"},s))})}async function ln(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Sr),e);try{const r=new kr(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const c=await s.json();if("needConfirmation"in c)throw Me(n,"account-exists-with-different-credential",c);if(s.ok&&!("errorMessage"in c))return c;{const l=s.ok?c.errorMessage:c.error.message,[g,I]=l.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Me(n,"credential-already-in-use",c);if(g==="EMAIL_EXISTS")throw Me(n,"email-already-in-use",c);if(g==="USER_DISABLED")throw Me(n,"user-disabled",c);const h=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(I)throw an(n,h,I);V(n,h)}}catch(r){if(r instanceof ee)throw r;V(n,"network-request-failed",{message:String(r)})}}async function Rr(n,e,t,i,r={}){const s=await We(n,e,t,i,r);return"mfaPendingCredential"in s&&V(n,"multi-factor-auth-required",{_serverResponse:s}),s}function un(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?pt(n.config,r):`${n.config.apiScheme}://${r}`}class kr{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(B(this.auth,"network-request-failed")),Ar.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Me(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=B(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function Nr(n,e){return We(n,"POST","/v1/accounts:delete",e)}async function Mr(n,e){return We(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ie(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pr(n,e=!1){const t=ue(n),i=await t.getIdToken(e),r=_t(i);T(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,c=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ie(tt(r.auth_time)),issuedAtTime:Ie(tt(r.iat)),expirationTime:Ie(tt(r.exp)),signInProvider:c||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tt(n){return Number(n)*1e3}function _t(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Pe("JWT malformed, contained fewer than 3 sections"),null;try{const r=Jt(t);return r?JSON.parse(r):(Pe("Failed to decode base64 JWT payload"),null)}catch(r){return Pe("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Dr(n){const e=_t(n);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function we(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ee&&Or(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Or({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Lr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ie(this.lastLoginAt),this.creationTime=Ie(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Be(n){var e;const t=n.auth,i=await n.getIdToken(),r=await we(n,Mr(t,{idToken:i}));T(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const c=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Br(s.providerUserInfo):[],l=xr(n.providerData,c),g=n.isAnonymous,I=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),h=g?I:!1,N={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new dn(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,N)}async function Ur(n){const e=ue(n);await Be(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xr(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Br(n){return n.map(e=>{var{providerId:t}=e,i=ft(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Fr(n,e){const t=await ln(n,{},async()=>{const i=Se({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,c=un(n,r,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",cn.fetch()(c,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Te{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Fr(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,c=new Te;return i&&(T(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),r&&(T(typeof r=="string","internal-error",{appName:e}),c.accessToken=r),s&&(T(typeof s=="number","internal-error",{appName:e}),c.expirationTime=s),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Te,this.toJSON())}_performRefresh(){return H("not implemented")}}/**
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
 */function K(n,e){T(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ae{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=ft(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await we(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pr(this,e)}reload(){return Ur(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Be(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await we(this,Nr(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,c,l,g,I,h;const N=(i=t.displayName)!==null&&i!==void 0?i:void 0,m=(r=t.email)!==null&&r!==void 0?r:void 0,O=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,U=(c=t.photoURL)!==null&&c!==void 0?c:void 0,M=(l=t.tenantId)!==null&&l!==void 0?l:void 0,me=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ne=(I=t.createdAt)!==null&&I!==void 0?I:void 0,x=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:j,emailVerified:ke,isAnonymous:D,providerData:de,stsTokenManager:ve}=t;T(j&&ve,e,"internal-error");const Ne=Te.fromJSON(this.name,ve);T(typeof j=="string",e,"internal-error"),K(N,e.name),K(m,e.name),T(typeof ke=="boolean",e,"internal-error"),T(typeof D=="boolean",e,"internal-error"),K(O,e.name),K(U,e.name),K(M,e.name),K(me,e.name),K(ne,e.name),K(x,e.name);const z=new ae({uid:j,auth:e,email:m,emailVerified:ke,displayName:N,isAnonymous:D,photoURL:U,phoneNumber:O,tenantId:M,stsTokenManager:Ne,createdAt:ne,lastLoginAt:x});return de&&Array.isArray(de)&&(z.providerData=de.map(y=>Object.assign({},y))),me&&(z._redirectEventId=me),z}static async _fromIdTokenResponse(e,t,i=!1){const r=new Te;r.updateFromServerResponse(t);const s=new ae({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Be(s),s}}/**
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
 */class hn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hn.type="NONE";const Pt=hn;/**
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
 */function De(n,e,t){return`firebase:${n}:${e}:${t}`}class fe{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=De(this.userKey,r.apiKey,s),this.fullPersistenceKey=De("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new fe(q(Pt),e,i);const r=(await Promise.all(t.map(async I=>{if(await I._isAvailable())return I}))).filter(I=>I);let s=r[0]||q(Pt);const c=De(i,e.config.apiKey,e.name);let l=null;for(const I of t)try{const h=await I._get(c);if(h){const N=ae._fromJSON(e,h);I!==s&&(l=N),s=I;break}}catch{}const g=r.filter(I=>I._shouldAllowMigration);return!s._shouldAllowMigration||!g.length?new fe(s,e,i):(s=g[0],l&&await s._set(c,l.toJSON()),await Promise.all(t.map(async I=>{if(I!==s)try{await I._remove(c)}catch{}})),new fe(s,e,i))}}/**
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
 */function Dt(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mn(e))return"Blackberry";if(vn(e))return"Webos";if(mt(e))return"Safari";if((e.includes("chrome/")||gn(e))&&!e.includes("edge/"))return"Chrome";if(_n(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fn(n=P()){return/firefox\//i.test(n)}function mt(n=P()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gn(n=P()){return/crios\//i.test(n)}function pn(n=P()){return/iemobile/i.test(n)}function _n(n=P()){return/android/i.test(n)}function mn(n=P()){return/blackberry/i.test(n)}function vn(n=P()){return/webos/i.test(n)}function je(n=P()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vr(n=P()){var e;return je(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $r(){return ei()&&document.documentMode===10}function In(n=P()){return je(n)||_n(n)||vn(n)||mn(n)||/windows phone/i.test(n)||pn(n)}function Hr(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function yn(n,e=[]){let t;switch(n){case"Browser":t=Dt(P());break;case"Worker":t=`${Dt(P())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qe}/${i}`}/**
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
 */class qr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((c,l)=>{try{const g=e(s);c(g)}catch(g){l(g)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class Wr{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ot(this),this.idTokenSubscription=new Ot(this),this.beforeStateQueue=new qr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=on,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=q(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await fe.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=r==null?void 0:r._redirectEventId,g=await this.tryRedirectSignIn(e);(!c||c===l)&&(g!=null&&g.user)&&(r=g.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(c){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Be(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=br()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ue(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(q(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new be("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&q(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await fe.create(this,[q(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),c=this._isInitialized?Promise.resolve():this._initializationPromise;return T(c,this,"internal-error"),c.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function ze(n){return ue(n)}class Ot{constructor(e){this.auth=e,this.observer=null,this.addObserver=ai(t=>this.observer=t)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function jr(n,e,t){const i=ze(n);T(i._canInitEmulator,i,"emulator-config-failed"),T(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=En(e),{host:c,port:l}=zr(e),g=l===null?"":`:${l}`;i.config.emulator={url:`${s}//${c}${g}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Gr()}function En(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zr(n){const e=En(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Lt(i.substr(s.length+1))}}else{const[s,c]=i.split(":");return{host:s,port:Lt(c)}}}function Lt(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Gr(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class wn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return H("not implemented")}_getIdTokenResponse(e){return H("not implemented")}_linkToIdToken(e,t){return H("not implemented")}_getReauthenticationResolver(e){return H("not implemented")}}/**
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
 */async function ge(n,e){return Rr(n,"POST","/v1/accounts:signInWithIdp",Cr(n,e))}/**
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
 */const Kr="http://localhost";class le extends wn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):V("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=ft(t,["providerId","signInMethod"]);if(!i||!r)return null;const c=new le(i,r);return c.idToken=s.idToken||void 0,c.accessToken=s.accessToken||void 0,c.secret=s.secret,c.nonce=s.nonce,c.pendingToken=s.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return ge(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ge(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ge(e,t)}buildRequest(){const e={requestUri:Kr,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Se(t)}return e}}/**
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
 */class vt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ce extends vt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class J extends Ce{constructor(){super("facebook.com")}static credential(e){return le._fromParams({providerId:J.PROVIDER_ID,signInMethod:J.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return J.credentialFromTaggedObject(e)}static credentialFromError(e){return J.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return J.credential(e.oauthAccessToken)}catch{return null}}}J.FACEBOOK_SIGN_IN_METHOD="facebook.com";J.PROVIDER_ID="facebook.com";/**
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
 */class $ extends Ce{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return le._fromParams({providerId:$.PROVIDER_ID,signInMethod:$.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $.credentialFromTaggedObject(e)}static credentialFromError(e){return $.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return $.credential(t,i)}catch{return null}}}$.GOOGLE_SIGN_IN_METHOD="google.com";$.PROVIDER_ID="google.com";/**
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
 */class Q extends Ce{constructor(){super("github.com")}static credential(e){return le._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Q.credential(e.oauthAccessToken)}catch{return null}}}Q.GITHUB_SIGN_IN_METHOD="github.com";Q.PROVIDER_ID="github.com";/**
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
 */class Y extends Ce{constructor(){super("twitter.com")}static credential(e,t){return le._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Y.credential(t,i)}catch{return null}}}Y.TWITTER_SIGN_IN_METHOD="twitter.com";Y.PROVIDER_ID="twitter.com";/**
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
 */class _e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await ae._fromIdTokenResponse(e,i,r),c=Ut(i);return new _e({user:s,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Ut(i);return new _e({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Ut(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Fe extends ee{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Fe.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Fe(e,t,i,r)}}function Tn(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fe._fromErrorAndOperation(n,s,e,i):s})}async function Jr(n,e,t=!1){const i=await we(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _e._forOperation(n,"link",i)}/**
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
 */async function Qr(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await we(n,Tn(i,r,e,n),t);T(s.idToken,i,"internal-error");const c=_t(s.idToken);T(c,i,"internal-error");const{sub:l}=c;return T(n.uid===l,i,"user-mismatch"),_e._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&V(i,"user-mismatch"),s}}/**
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
 */async function Yr(n,e,t=!1){const i="signIn",r=await Tn(n,i,e),s=await _e._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function Xr(n,e,t,i){return ue(n).onIdTokenChanged(e,t,i)}function Zr(n,e,t){return ue(n).beforeAuthStateChanged(e,t)}function es(n,e,t,i){return ue(n).onAuthStateChanged(e,t,i)}const Ve="__sak";/**
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
 */class bn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ve,"1"),this.storage.removeItem(Ve),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ts(){const n=P();return mt(n)||je(n)}const ns=1e3,is=10;class Sn extends bn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ts()&&Hr(),this.fallbackToPolling=In(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,g)=>{this.notifyListeners(c,g)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(i);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},s=this.storage.getItem(i);$r()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,is):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ns)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sn.type="LOCAL";const rs=Sn;/**
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
 */class An extends bn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}An.type="SESSION";const Cn=An;/**
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
 */function ss(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ge{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Ge(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,c=this.handlersMap[r];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(c).map(async I=>I(t.origin,s)),g=await ss(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ge.receivers=[];/**
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
 */function It(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class os{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,c;return new Promise((l,g)=>{const I=It("",20);r.port1.start();const h=setTimeout(()=>{g(new Error("unsupported_event"))},i);c={messageChannel:r,onMessage(N){const m=N;if(m.data.eventId===I)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(h),clearTimeout(s),g(new Error("invalid_response"));break}}},this.handlers.add(c),r.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:I,data:t},[r.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function F(){return window}function as(n){F().location.href=n}/**
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
 */function Rn(){return typeof F().WorkerGlobalScope<"u"&&typeof F().importScripts=="function"}async function cs(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ls(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function us(){return Rn()?self:null}/**
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
 */const kn="firebaseLocalStorageDb",ds=1,$e="firebaseLocalStorage",Nn="fbase_key";class Re{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ke(n,e){return n.transaction([$e],e?"readwrite":"readonly").objectStore($e)}function hs(){const n=indexedDB.deleteDatabase(kn);return new Re(n).toPromise()}function ut(){const n=indexedDB.open(kn,ds);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore($e,{keyPath:Nn})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains($e)?e(i):(i.close(),await hs(),e(await ut()))})})}async function xt(n,e,t){const i=Ke(n,!0).put({[Nn]:e,value:t});return new Re(i).toPromise()}async function fs(n,e){const t=Ke(n,!1).get(e),i=await new Re(t).toPromise();return i===void 0?null:i.value}function Bt(n,e){const t=Ke(n,!0).delete(e);return new Re(t).toPromise()}const gs=800,ps=3;class Mn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ut(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>ps)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ge._getInstance(us()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cs(),!this.activeServiceWorker)return;this.sender=new os(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ls()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ut();return await xt(e,Ve,"1"),await Bt(e,Ve),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>xt(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>fs(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Ke(r,!1).getAll();return new Re(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mn.type="LOCAL";const _s=Mn;/**
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
 */function ms(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function vs(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=B("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",ms().appendChild(i)})}function Is(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Ae(3e4,6e4);/**
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
 */function Pn(n,e){return e?q(e):(T(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class yt extends wn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ge(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ge(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ys(n){return Yr(n.auth,new yt(n),n.bypassAuthState)}function Es(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Qr(t,new yt(n),n.bypassAuthState)}async function ws(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Jr(t,new yt(n),n.bypassAuthState)}/**
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
 */class Dn{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:c,type:l}=e;if(c){this.reject(c);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(g))}catch(I){this.reject(I)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ys;case"linkViaPopup":case"linkViaRedirect":return ws;case"reauthViaPopup":case"reauthViaRedirect":return Es;default:V(this.auth,"internal-error")}}resolve(e){W(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){W(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ts=new Ae(2e3,1e4);async function bs(n,e,t){const i=ze(n);Ir(n,e,vt);const r=Pn(i,t);return new oe(i,"signInViaPopup",e,r).executeNotNull()}class oe extends Dn{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,oe.currentPopupAction&&oe.currentPopupAction.cancel(),oe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){W(this.filter.length===1,"Popup operations only handle one event");const e=It();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(B(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(B(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(B(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ts.get())};e()}}oe.currentPopupAction=null;/**
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
 */const Ss="pendingRedirect",Oe=new Map;class As extends Dn{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Oe.get(this.auth._key());if(!e){try{const i=await Cs(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Oe.set(this.auth._key(),e)}return this.bypassAuthState||Oe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cs(n,e){const t=Ns(e),i=ks(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Rs(n,e){Oe.set(n._key(),e)}function ks(n){return q(n._redirectPersistence)}function Ns(n){return De(Ss,n.config.apiKey,n.name)}async function Ms(n,e,t=!1){const i=ze(n),r=Pn(i,e),c=await new As(i,r,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const Ps=10*60*1e3;class Ds{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Os(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!On(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(B(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ps&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ft(e))}saveEventToCache(e){this.cachedEventUids.add(Ft(e)),this.lastProcessedEventTime=Date.now()}}function Ft(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function On({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Os(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return On(n);default:return!1}}/**
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
 */async function Ls(n,e={}){return We(n,"GET","/v1/projects",e)}/**
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
 */const Us=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xs=/^https?/;async function Bs(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ls(n);for(const t of e)try{if(Fs(t))return}catch{}V(n,"unauthorized-domain")}function Fs(n){const e=lt(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!xs.test(t))return!1;if(Us.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Vs=new Ae(3e4,6e4);function Vt(){const n=F().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $s(n){return new Promise((e,t)=>{var i,r,s;function c(){Vt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vt(),t(B(n,"network-request-failed"))},timeout:Vs.get()})}if(!((r=(i=F().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=F().gapi)===null||s===void 0)&&s.load)c();else{const l=Is("iframefcb");return F()[l]=()=>{gapi.load?c():t(B(n,"network-request-failed"))},vs(`https://apis.google.com/js/api.js?onload=${l}`).catch(g=>t(g))}}).catch(e=>{throw Le=null,e})}let Le=null;function Hs(n){return Le=Le||$s(n),Le}/**
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
 */const qs=new Ae(5e3,15e3),Ws="__/auth/iframe",js="emulator/auth/iframe",zs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ks(n){const e=n.config;T(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?pt(e,js):`https://${n.config.authDomain}/${Ws}`,i={apiKey:e.apiKey,appName:n.name,v:qe},r=Gs.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Se(i).slice(1)}`}async function Js(n){const e=await Hs(n),t=F().gapi;return T(t,n,"internal-error"),e.open({where:document.body,url:Ks(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zs,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const c=B(n,"network-request-failed"),l=F().setTimeout(()=>{s(c)},qs.get());function g(){F().clearTimeout(l),r(i)}i.ping(g).then(g,()=>{s(c)})}))}/**
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
 */const Qs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ys=500,Xs=600,Zs="_blank",eo="http://localhost";class $t{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function to(n,e,t,i=Ys,r=Xs){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const g=Object.assign(Object.assign({},Qs),{width:i.toString(),height:r.toString(),top:s,left:c}),I=P().toLowerCase();t&&(l=gn(I)?Zs:t),fn(I)&&(e=e||eo,g.scrollbars="yes");const h=Object.entries(g).reduce((m,[O,U])=>`${m}${O}=${U},`,"");if(Vr(I)&&l!=="_self")return no(e||"",l),new $t(null);const N=window.open(e||"",l,h);T(N,n,"popup-blocked");try{N.focus()}catch{}return new $t(N)}function no(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const io="__/auth/handler",ro="emulator/auth/handler";function Ht(n,e,t,i,r,s){T(n.config.authDomain,n,"auth-domain-config-required"),T(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:qe,eventId:r};if(e instanceof vt){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",oi(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,I]of Object.entries(s||{}))c[g]=I}if(e instanceof Ce){const g=e.getScopes().filter(I=>I!=="");g.length>0&&(c.scopes=g.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const g of Object.keys(l))l[g]===void 0&&delete l[g];return`${so(n)}?${Se(l).slice(1)}`}function so({config:n}){return n.emulator?pt(n,ro):`https://${n.authDomain}/${io}`}/**
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
 */const nt="webStorageSupport";class oo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cn,this._completeRedirectFn=Ms,this._overrideRedirectResult=Rs}async _openPopup(e,t,i,r){var s;W((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const c=Ht(e,t,i,lt(),r);return to(e,c,It())}async _openRedirect(e,t,i,r){return await this._originValidation(e),as(Ht(e,t,i,lt(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(W(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Js(e),i=new Ds(e);return t.register("authEvent",r=>(T(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nt,{type:nt},r=>{var s;const c=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[nt];c!==void 0&&t(!!c),V(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return In()||mt()||je()}}const ao=oo;var qt="@firebase/auth",Wt="0.22.0";/**
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
 */class co{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lo(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uo(n){ye(new pe("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:c}=i.options;return((l,g)=>{T(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),T(!(c!=null&&c.includes(":")),"argument-error",{appName:l.name});const I={apiKey:s,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yn(n)},h=new Wr(l,g,I);return Er(h,t),h})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ye(new pe("auth-internal",e=>{const t=ze(e.getProvider("auth").getImmediate());return(i=>new co(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),he(qt,Wt,lo(n)),he(qt,Wt,"esm2017")}/**
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
 */const ho=5*60,fo=Qt("authIdTokenMaxAge")||ho;let jt=null;const go=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>fo)return;const r=t==null?void 0:t.token;jt!==r&&(jt=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function po(n=or()){const e=en(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yr(n,{popupRedirectResolver:ao,persistence:[_s,rs,Cn]}),i=Qt("authTokenSyncURL");if(i){const s=go(i);Zr(t,s,()=>s(t.currentUser)),Xr(t,c=>s(c))}const r=Kn("auth");return r&&jr(t,`http://${r}`),t}uo("Browser");const _o={apiKey:"AIzaSyC0UMDhVLTX_lhPBdqU3BnHSg6z126F-_o",authDomain:"delfast-chargger-auth.firebaseapp.com",projectId:"delfast-chargger-auth",storageBucket:"delfast-chargger-auth.appspot.com",messagingSenderId:"146029576932",appId:"1:146029576932:web:ed75929b80ef941c11e2f1"},mo=tn(_o),vo=po(mo),Io=new $;class yo{constructor(){this.auth=vo,this.googleProvider=Io}signInWithGoogle(){return bs(this.auth,this.googleProvider)}signOut(){return this.auth.signOut()}onAuthStateChanged(e){return es(this.auth,e)}isInitialized(){return new Promise(e=>{this.auth.onAuthStateChanged(e)})}getCurrentUser(){return this.auth.currentUser}}var it=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},He={},Eo={get exports(){return He},set exports(n){He=n}};(function(n,e){(function(i,r){n.exports=r()})(it,function(){var i=function(r){var s="@VERSION@-@BUILDLEVEL@",c=r.localStorage||function(){var o={};return{setItem:function(a,d){o[a]=d},getItem:function(a){return o[a]},removeItem:function(a){delete o[a]}}}(),l={CONNECT:1,CONNACK:2,PUBLISH:3,PUBACK:4,PUBREC:5,PUBREL:6,PUBCOMP:7,SUBSCRIBE:8,SUBACK:9,UNSUBSCRIBE:10,UNSUBACK:11,PINGREQ:12,PINGRESP:13,DISCONNECT:14},g=function(o,a){for(var d in o)if(o.hasOwnProperty(d))if(a.hasOwnProperty(d)){if(typeof o[d]!==a[d])throw new Error(m(h.INVALID_TYPE,[typeof o[d],d]))}else{var f="Unknown property, "+d+". Valid properties are:";for(var _ in a)a.hasOwnProperty(_)&&(f=f+" "+_);throw new Error(f)}},I=function(o,a){return function(){return o.apply(a,arguments)}},h={OK:{code:0,text:"AMQJSC0000I OK."},CONNECT_TIMEOUT:{code:1,text:"AMQJSC0001E Connect timed out."},SUBSCRIBE_TIMEOUT:{code:2,text:"AMQJS0002E Subscribe timed out."},UNSUBSCRIBE_TIMEOUT:{code:3,text:"AMQJS0003E Unsubscribe timed out."},PING_TIMEOUT:{code:4,text:"AMQJS0004E Ping timed out."},INTERNAL_ERROR:{code:5,text:"AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"},CONNACK_RETURNCODE:{code:6,text:"AMQJS0006E Bad Connack return code:{0} {1}."},SOCKET_ERROR:{code:7,text:"AMQJS0007E Socket error:{0}."},SOCKET_CLOSE:{code:8,text:"AMQJS0008I Socket closed."},MALFORMED_UTF:{code:9,text:"AMQJS0009E Malformed UTF data:{0} {1} {2}."},UNSUPPORTED:{code:10,text:"AMQJS0010E {0} is not supported by this browser."},INVALID_STATE:{code:11,text:"AMQJS0011E Invalid state {0}."},INVALID_TYPE:{code:12,text:"AMQJS0012E Invalid type {0} for {1}."},INVALID_ARGUMENT:{code:13,text:"AMQJS0013E Invalid argument {0} for {1}."},UNSUPPORTED_OPERATION:{code:14,text:"AMQJS0014E Unsupported operation."},INVALID_STORED_DATA:{code:15,text:"AMQJS0015E Invalid data in local storage key={0} value={1}."},INVALID_MQTT_MESSAGE_TYPE:{code:16,text:"AMQJS0016E Invalid MQTT message type {0}."},MALFORMED_UNICODE:{code:17,text:"AMQJS0017E Malformed Unicode string:{0} {1}."},BUFFER_FULL:{code:18,text:"AMQJS0018E Message buffer is full, maximum buffer size: {0}."}},N={0:"Connection Accepted",1:"Connection Refused: unacceptable protocol version",2:"Connection Refused: identifier rejected",3:"Connection Refused: server unavailable",4:"Connection Refused: bad user name or password",5:"Connection Refused: not authorized"},m=function(o,a){var d=o.text;if(a){for(var f,_,p=0;p<a.length;p++)if(f="{"+p+"}",_=d.indexOf(f),_>0){var v=d.substring(0,_),S=d.substring(_+f.length);d=v+a[p]+S}}return d},O=[0,6,77,81,73,115,100,112,3],U=[0,4,77,81,84,84,4],M=function(o,a){this.type=o;for(var d in a)a.hasOwnProperty(d)&&(this[d]=a[d])};M.prototype.encode=function(){var o=(this.type&15)<<4,a=0,d=[],f=0,_;switch(this.messageIdentifier!==void 0&&(a+=2),this.type){case l.CONNECT:switch(this.mqttVersion){case 3:a+=O.length+3;break;case 4:a+=U.length+3;break}a+=D(this.clientId)+2,this.willMessage!==void 0&&(a+=D(this.willMessage.destinationName)+2,_=this.willMessage.payloadBytes,_ instanceof Uint8Array||(_=new Uint8Array(v)),a+=_.byteLength+2),this.userName!==void 0&&(a+=D(this.userName)+2),this.password!==void 0&&(a+=D(this.password)+2);break;case l.SUBSCRIBE:o|=2;for(var p=0;p<this.topics.length;p++)d[p]=D(this.topics[p]),a+=d[p]+2;a+=this.requestedQos.length;break;case l.UNSUBSCRIBE:o|=2;for(var p=0;p<this.topics.length;p++)d[p]=D(this.topics[p]),a+=d[p]+2;break;case l.PUBREL:o|=2;break;case l.PUBLISH:this.payloadMessage.duplicate&&(o|=8),o=o|=this.payloadMessage.qos<<1,this.payloadMessage.retained&&(o|=1),f=D(this.payloadMessage.destinationName),a+=f+2;var v=this.payloadMessage.payloadBytes;a+=v.byteLength,v instanceof ArrayBuffer?v=new Uint8Array(v):v instanceof Uint8Array||(v=new Uint8Array(v.buffer));break}var S=ke(a),w=S.length+1,R=new ArrayBuffer(a+w),E=new Uint8Array(R);if(E[0]=o,E.set(S,1),this.type==l.PUBLISH)w=x(this.payloadMessage.destinationName,f,E,w);else if(this.type==l.CONNECT){switch(this.mqttVersion){case 3:E.set(O,w),w+=O.length;break;case 4:E.set(U,w),w+=U.length;break}var u=0;this.cleanSession&&(u=2),this.willMessage!==void 0&&(u|=4,u|=this.willMessage.qos<<3,this.willMessage.retained&&(u|=32)),this.userName!==void 0&&(u|=128),this.password!==void 0&&(u|=64),E[w++]=u,w=ne(this.keepAliveInterval,E,w)}switch(this.messageIdentifier!==void 0&&(w=ne(this.messageIdentifier,E,w)),this.type){case l.CONNECT:w=x(this.clientId,D(this.clientId),E,w),this.willMessage!==void 0&&(w=x(this.willMessage.destinationName,D(this.willMessage.destinationName),E,w),w=ne(_.byteLength,E,w),E.set(_,w),w+=_.byteLength),this.userName!==void 0&&(w=x(this.userName,D(this.userName),E,w)),this.password!==void 0&&(w=x(this.password,D(this.password),E,w));break;case l.PUBLISH:E.set(v,w);break;case l.SUBSCRIBE:for(var p=0;p<this.topics.length;p++)w=x(this.topics[p],d[p],E,w),E[w++]=this.requestedQos[p];break;case l.UNSUBSCRIBE:for(var p=0;p<this.topics.length;p++)w=x(this.topics[p],d[p],E,w);break}return R};function me(o,a){var d=a,f=o[a],_=f>>4,p=f&=15;a+=1;var v,S=0,w=1;do{if(a==o.length)return[null,d];v=o[a++],S+=(v&127)*w,w*=128}while(v&128);var R=a+S;if(R>o.length)return[null,d];var E=new M(_);switch(_){case l.CONNACK:var u=o[a++];u&1&&(E.sessionPresent=!0),E.returnCode=o[a++];break;case l.PUBLISH:var A=p>>1&3,b=j(o,a);a+=2;var L=ve(o,a,b);a+=b,A>0&&(E.messageIdentifier=j(o,a),a+=2);var C=new G(o.subarray(a,R));(p&1)==1&&(C.retained=!0),(p&8)==8&&(C.duplicate=!0),C.qos=A,C.destinationName=L,E.payloadMessage=C;break;case l.PUBACK:case l.PUBREC:case l.PUBREL:case l.PUBCOMP:case l.UNSUBACK:E.messageIdentifier=j(o,a);break;case l.SUBACK:E.messageIdentifier=j(o,a),a+=2,E.returnCode=o.subarray(a,R);break}return[E,R]}function ne(o,a,d){return a[d++]=o>>8,a[d++]=o%256,d}function x(o,a,d,f){return f=ne(a,d,f),de(o,d,f),f+a}function j(o,a){return 256*o[a]+o[a+1]}function ke(o){var a=new Array(1),d=0;do{var f=o%128;o=o>>7,o>0&&(f|=128),a[d++]=f}while(o>0&&d<4);return a}function D(o){for(var a=0,d=0;d<o.length;d++){var f=o.charCodeAt(d);f>2047?(55296<=f&&f<=56319&&(d++,a++),a+=3):f>127?a+=2:a++}return a}function de(o,a,d){for(var f=d,_=0;_<o.length;_++){var p=o.charCodeAt(_);if(55296<=p&&p<=56319){var v=o.charCodeAt(++_);if(isNaN(v))throw new Error(m(h.MALFORMED_UNICODE,[p,v]));p=(p-55296<<10)+(v-56320)+65536}p<=127?a[f++]=p:p<=2047?(a[f++]=p>>6&31|192,a[f++]=p&63|128):p<=65535?(a[f++]=p>>12&15|224,a[f++]=p>>6&63|128,a[f++]=p&63|128):(a[f++]=p>>18&7|240,a[f++]=p>>12&63|128,a[f++]=p>>6&63|128,a[f++]=p&63|128)}return a}function ve(o,a,d){for(var f="",_,p=a;p<a+d;){var v=o[p++];if(v<128)_=v;else{var S=o[p++]-128;if(S<0)throw new Error(m(h.MALFORMED_UTF,[v.toString(16),S.toString(16),""]));if(v<224)_=64*(v-192)+S;else{var w=o[p++]-128;if(w<0)throw new Error(m(h.MALFORMED_UTF,[v.toString(16),S.toString(16),w.toString(16)]));if(v<240)_=4096*(v-224)+64*S+w;else{var R=o[p++]-128;if(R<0)throw new Error(m(h.MALFORMED_UTF,[v.toString(16),S.toString(16),w.toString(16),R.toString(16)]));if(v<248)_=262144*(v-240)+4096*S+64*w+R;else throw new Error(m(h.MALFORMED_UTF,[v.toString(16),S.toString(16),w.toString(16),R.toString(16)]))}}}_>65535&&(_-=65536,f+=String.fromCharCode(55296+(_>>10)),_=56320+(_&1023)),f+=String.fromCharCode(_)}return f}var Ne=function(o,a){this._client=o,this._keepAliveInterval=a*1e3,this.isReset=!1;var d=new M(l.PINGREQ).encode(),f=function(p){return function(){return _.apply(p)}},_=function(){this.isReset?(this.isReset=!1,this._client._trace("Pinger.doPing","send PINGREQ"),this._client.socket.send(d),this.timeout=setTimeout(f(this),this._keepAliveInterval)):(this._client._trace("Pinger.doPing","Timed out"),this._client._disconnected(h.PING_TIMEOUT.code,m(h.PING_TIMEOUT)))};this.reset=function(){this.isReset=!0,clearTimeout(this.timeout),this._keepAliveInterval>0&&(this.timeout=setTimeout(f(this),this._keepAliveInterval))},this.cancel=function(){clearTimeout(this.timeout)}},z=function(o,a,d,f){a||(a=30);var _=function(p,v,S){return function(){return p.apply(v,S)}};this.timeout=setTimeout(_(d,o,f),a*1e3),this.cancel=function(){clearTimeout(this.timeout)}},y=function(o,a,d,f,_){if(!("WebSocket"in r&&r.WebSocket!==null))throw new Error(m(h.UNSUPPORTED,["WebSocket"]));if(!("ArrayBuffer"in r&&r.ArrayBuffer!==null))throw new Error(m(h.UNSUPPORTED,["ArrayBuffer"]));this._trace("Paho.Client",o,a,d,f,_),this.host=a,this.port=d,this.path=f,this.uri=o,this.clientId=_,this._wsuri=null,this._localKey=a+":"+d+(f!="/mqtt"?":"+f:"")+":"+_+":",this._msg_queue=[],this._buffered_msg_queue=[],this._sentMessages={},this._receivedMessages={},this._notify_msg_sent={},this._message_identifier=1,this._sequence=0;for(var p in c)(p.indexOf("Sent:"+this._localKey)===0||p.indexOf("Received:"+this._localKey)===0)&&this.restore(p)};y.prototype.host=null,y.prototype.port=null,y.prototype.path=null,y.prototype.uri=null,y.prototype.clientId=null,y.prototype.socket=null,y.prototype.connected=!1,y.prototype.maxMessageIdentifier=65536,y.prototype.connectOptions=null,y.prototype.hostIndex=null,y.prototype.onConnected=null,y.prototype.onConnectionLost=null,y.prototype.onMessageDelivered=null,y.prototype.onMessageArrived=null,y.prototype.traceFunction=null,y.prototype._msg_queue=null,y.prototype._buffered_msg_queue=null,y.prototype._connectTimeout=null,y.prototype.sendPinger=null,y.prototype.receivePinger=null,y.prototype._reconnectInterval=1,y.prototype._reconnecting=!1,y.prototype._reconnectTimeout=null,y.prototype.disconnectedPublishing=!1,y.prototype.disconnectedBufferSize=5e3,y.prototype.receiveBuffer=null,y.prototype._traceBuffer=null,y.prototype._MAX_TRACE_ENTRIES=100,y.prototype.connect=function(o){var a=this._traceMask(o,"password");if(this._trace("Client.connect",a,this.socket,this.connected),this.connected)throw new Error(m(h.INVALID_STATE,["already connected"]));if(this.socket)throw new Error(m(h.INVALID_STATE,["already connected"]));this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),this.connectOptions=o,this._reconnectInterval=1,this._reconnecting=!1,o.uris?(this.hostIndex=0,this._doConnect(o.uris[0])):this._doConnect(this.uri)},y.prototype.subscribe=function(o,a){if(this._trace("Client.subscribe",o,a),!this.connected)throw new Error(m(h.INVALID_STATE,["not connected"]));var d=new M(l.SUBSCRIBE);d.topics=o.constructor===Array?o:[o],a.qos===void 0&&(a.qos=0),d.requestedQos=[];for(var f=0;f<d.topics.length;f++)d.requestedQos[f]=a.qos;a.onSuccess&&(d.onSuccess=function(_){a.onSuccess({invocationContext:a.invocationContext,grantedQos:_})}),a.onFailure&&(d.onFailure=function(_){a.onFailure({invocationContext:a.invocationContext,errorCode:_,errorMessage:m(_)})}),a.timeout&&(d.timeOut=new z(this,a.timeout,a.onFailure,[{invocationContext:a.invocationContext,errorCode:h.SUBSCRIBE_TIMEOUT.code,errorMessage:m(h.SUBSCRIBE_TIMEOUT)}])),this._requires_ack(d),this._schedule_message(d)},y.prototype.unsubscribe=function(o,a){if(this._trace("Client.unsubscribe",o,a),!this.connected)throw new Error(m(h.INVALID_STATE,["not connected"]));var d=new M(l.UNSUBSCRIBE);d.topics=o.constructor===Array?o:[o],a.onSuccess&&(d.callback=function(){a.onSuccess({invocationContext:a.invocationContext})}),a.timeout&&(d.timeOut=new z(this,a.timeout,a.onFailure,[{invocationContext:a.invocationContext,errorCode:h.UNSUBSCRIBE_TIMEOUT.code,errorMessage:m(h.UNSUBSCRIBE_TIMEOUT)}])),this._requires_ack(d),this._schedule_message(d)},y.prototype.send=function(o){this._trace("Client.send",o);var a=new M(l.PUBLISH);if(a.payloadMessage=o,this.connected)o.qos>0?this._requires_ack(a):this.onMessageDelivered&&(this._notify_msg_sent[a]=this.onMessageDelivered(a.payloadMessage)),this._schedule_message(a);else if(this._reconnecting&&this.disconnectedPublishing){var d=Object.keys(this._sentMessages).length+this._buffered_msg_queue.length;if(d>this.disconnectedBufferSize)throw new Error(m(h.BUFFER_FULL,[this.disconnectedBufferSize]));o.qos>0?this._requires_ack(a):(a.sequence=++this._sequence,this._buffered_msg_queue.unshift(a))}else throw new Error(m(h.INVALID_STATE,["not connected"]))},y.prototype.disconnect=function(){if(this._trace("Client.disconnect"),this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),!this.socket)throw new Error(m(h.INVALID_STATE,["not connecting or connected"]));var o=new M(l.DISCONNECT);this._notify_msg_sent[o]=I(this._disconnected,this),this._schedule_message(o)},y.prototype.getTraceLog=function(){if(this._traceBuffer!==null){this._trace("Client.getTraceLog",new Date),this._trace("Client.getTraceLog in flight messages",this._sentMessages.length);for(var o in this._sentMessages)this._trace("_sentMessages ",o,this._sentMessages[o]);for(var o in this._receivedMessages)this._trace("_receivedMessages ",o,this._receivedMessages[o]);return this._traceBuffer}},y.prototype.startTrace=function(){this._traceBuffer===null&&(this._traceBuffer=[]),this._trace("Client.startTrace",new Date,s)},y.prototype.stopTrace=function(){delete this._traceBuffer},y.prototype._doConnect=function(o){if(this.connectOptions.useSSL){var a=o.split(":");a[0]="wss",o=a.join(":")}this._wsuri=o,this.connected=!1,this.connectOptions.mqttVersion<4?this.socket=new WebSocket(o,["mqttv3.1"]):this.socket=new WebSocket(o,["mqtt"]),this.socket.binaryType="arraybuffer",this.socket.onopen=I(this._on_socket_open,this),this.socket.onmessage=I(this._on_socket_message,this),this.socket.onerror=I(this._on_socket_error,this),this.socket.onclose=I(this._on_socket_close,this),this.sendPinger=new Ne(this,this.connectOptions.keepAliveInterval),this.receivePinger=new Ne(this,this.connectOptions.keepAliveInterval),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._connectTimeout=new z(this,this.connectOptions.timeout,this._disconnected,[h.CONNECT_TIMEOUT.code,m(h.CONNECT_TIMEOUT)])},y.prototype._schedule_message=function(o){this._msg_queue.unshift(o),this.connected&&this._process_queue()},y.prototype.store=function(o,a){var d={type:a.type,messageIdentifier:a.messageIdentifier,version:1};switch(a.type){case l.PUBLISH:a.pubRecReceived&&(d.pubRecReceived=!0),d.payloadMessage={};for(var f="",_=a.payloadMessage.payloadBytes,p=0;p<_.length;p++)_[p]<=15?f=f+"0"+_[p].toString(16):f=f+_[p].toString(16);d.payloadMessage.payloadHex=f,d.payloadMessage.qos=a.payloadMessage.qos,d.payloadMessage.destinationName=a.payloadMessage.destinationName,a.payloadMessage.duplicate&&(d.payloadMessage.duplicate=!0),a.payloadMessage.retained&&(d.payloadMessage.retained=!0),o.indexOf("Sent:")===0&&(a.sequence===void 0&&(a.sequence=++this._sequence),d.sequence=a.sequence);break;default:throw Error(m(h.INVALID_STORED_DATA,[o+this._localKey+a.messageIdentifier,d]))}c.setItem(o+this._localKey+a.messageIdentifier,JSON.stringify(d))},y.prototype.restore=function(o){var a=c.getItem(o),d=JSON.parse(a),f=new M(d.type,d);switch(d.type){case l.PUBLISH:for(var _=d.payloadMessage.payloadHex,p=new ArrayBuffer(_.length/2),v=new Uint8Array(p),S=0;_.length>=2;){var w=parseInt(_.substring(0,2),16);_=_.substring(2,_.length),v[S++]=w}var R=new G(v);R.qos=d.payloadMessage.qos,R.destinationName=d.payloadMessage.destinationName,d.payloadMessage.duplicate&&(R.duplicate=!0),d.payloadMessage.retained&&(R.retained=!0),f.payloadMessage=R;break;default:throw Error(m(h.INVALID_STORED_DATA,[o,a]))}o.indexOf("Sent:"+this._localKey)===0?(f.payloadMessage.duplicate=!0,this._sentMessages[f.messageIdentifier]=f):o.indexOf("Received:"+this._localKey)===0&&(this._receivedMessages[f.messageIdentifier]=f)},y.prototype._process_queue=function(){for(var o=null;o=this._msg_queue.pop();)this._socket_send(o),this._notify_msg_sent[o]&&(this._notify_msg_sent[o](),delete this._notify_msg_sent[o])},y.prototype._requires_ack=function(o){var a=Object.keys(this._sentMessages).length;if(a>this.maxMessageIdentifier)throw Error("Too many messages:"+a);for(;this._sentMessages[this._message_identifier]!==void 0;)this._message_identifier++;o.messageIdentifier=this._message_identifier,this._sentMessages[o.messageIdentifier]=o,o.type===l.PUBLISH&&this.store("Sent:",o),this._message_identifier===this.maxMessageIdentifier&&(this._message_identifier=1)},y.prototype._on_socket_open=function(){var o=new M(l.CONNECT,this.connectOptions);o.clientId=this.clientId,this._socket_send(o)},y.prototype._on_socket_message=function(o){this._trace("Client._on_socket_message",o.data);for(var a=this._deframeMessages(o.data),d=0;d<a.length;d+=1)this._handleMessage(a[d])},y.prototype._deframeMessages=function(o){var a=new Uint8Array(o),d=[];if(this.receiveBuffer){var f=new Uint8Array(this.receiveBuffer.length+a.length);f.set(this.receiveBuffer),f.set(a,this.receiveBuffer.length),a=f,delete this.receiveBuffer}try{for(var _=0;_<a.length;){var p=me(a,_),v=p[0];if(_=p[1],v!==null)d.push(v);else break}_<a.length&&(this.receiveBuffer=a.subarray(_))}catch(w){var S=w.hasOwnProperty("stack")=="undefined"?w.stack.toString():"No Error Stack Available";this._disconnected(h.INTERNAL_ERROR.code,m(h.INTERNAL_ERROR,[w.message,S]));return}return d},y.prototype._handleMessage=function(o){this._trace("Client._handleMessage",o);try{switch(o.type){case l.CONNACK:if(this._connectTimeout.cancel(),this._reconnectTimeout&&this._reconnectTimeout.cancel(),this.connectOptions.cleanSession){for(var a in this._sentMessages){var u=this._sentMessages[a];c.removeItem("Sent:"+this._localKey+u.messageIdentifier)}this._sentMessages={};for(var a in this._receivedMessages){var R=this._receivedMessages[a];c.removeItem("Received:"+this._localKey+R.messageIdentifier)}this._receivedMessages={}}if(o.returnCode===0)this.connected=!0,this.connectOptions.uris&&(this.hostIndex=this.connectOptions.uris.length);else{this._disconnected(h.CONNACK_RETURNCODE.code,m(h.CONNACK_RETURNCODE,[o.returnCode,N[o.returnCode]]));break}var _=[];for(var d in this._sentMessages)this._sentMessages.hasOwnProperty(d)&&_.push(this._sentMessages[d]);if(this._buffered_msg_queue.length>0)for(var f=null;f=this._buffered_msg_queue.pop();)_.push(f),this.onMessageDelivered&&(this._notify_msg_sent[f]=this.onMessageDelivered(f.payloadMessage));for(var _=_.sort(function(b,L){return b.sequence-L.sequence}),p=0,v=_.length;p<v;p++){var u=_[p];if(u.type==l.PUBLISH&&u.pubRecReceived){var S=new M(l.PUBREL,{messageIdentifier:u.messageIdentifier});this._schedule_message(S)}else this._schedule_message(u)}this.connectOptions.onSuccess&&this.connectOptions.onSuccess({invocationContext:this.connectOptions.invocationContext});var w=!1;this._reconnecting&&(w=!0,this._reconnectInterval=1,this._reconnecting=!1),this._connected(w,this._wsuri),this._process_queue();break;case l.PUBLISH:this._receivePublish(o);break;case l.PUBACK:var u=this._sentMessages[o.messageIdentifier];u&&(delete this._sentMessages[o.messageIdentifier],c.removeItem("Sent:"+this._localKey+o.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(u.payloadMessage));break;case l.PUBREC:var u=this._sentMessages[o.messageIdentifier];if(u){u.pubRecReceived=!0;var S=new M(l.PUBREL,{messageIdentifier:o.messageIdentifier});this.store("Sent:",u),this._schedule_message(S)}break;case l.PUBREL:var R=this._receivedMessages[o.messageIdentifier];c.removeItem("Received:"+this._localKey+o.messageIdentifier),R&&(this._receiveMessage(R),delete this._receivedMessages[o.messageIdentifier]);var E=new M(l.PUBCOMP,{messageIdentifier:o.messageIdentifier});this._schedule_message(E);break;case l.PUBCOMP:var u=this._sentMessages[o.messageIdentifier];delete this._sentMessages[o.messageIdentifier],c.removeItem("Sent:"+this._localKey+o.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(u.payloadMessage);break;case l.SUBACK:var u=this._sentMessages[o.messageIdentifier];u&&(u.timeOut&&u.timeOut.cancel(),o.returnCode[0]===128?u.onFailure&&u.onFailure(o.returnCode):u.onSuccess&&u.onSuccess(o.returnCode),delete this._sentMessages[o.messageIdentifier]);break;case l.UNSUBACK:var u=this._sentMessages[o.messageIdentifier];u&&(u.timeOut&&u.timeOut.cancel(),u.callback&&u.callback(),delete this._sentMessages[o.messageIdentifier]);break;case l.PINGRESP:this.sendPinger.reset();break;case l.DISCONNECT:this._disconnected(h.INVALID_MQTT_MESSAGE_TYPE.code,m(h.INVALID_MQTT_MESSAGE_TYPE,[o.type]));break;default:this._disconnected(h.INVALID_MQTT_MESSAGE_TYPE.code,m(h.INVALID_MQTT_MESSAGE_TYPE,[o.type]))}}catch(b){var A=b.hasOwnProperty("stack")=="undefined"?b.stack.toString():"No Error Stack Available";this._disconnected(h.INTERNAL_ERROR.code,m(h.INTERNAL_ERROR,[b.message,A]));return}},y.prototype._on_socket_error=function(o){this._reconnecting||this._disconnected(h.SOCKET_ERROR.code,m(h.SOCKET_ERROR,[o.data]))},y.prototype._on_socket_close=function(){this._reconnecting||this._disconnected(h.SOCKET_CLOSE.code,m(h.SOCKET_CLOSE))},y.prototype._socket_send=function(o){if(o.type==1){var a=this._traceMask(o,"password");this._trace("Client._socket_send",a)}else this._trace("Client._socket_send",o);this.socket.send(o.encode()),this.sendPinger.reset()},y.prototype._receivePublish=function(o){switch(o.payloadMessage.qos){case"undefined":case 0:this._receiveMessage(o);break;case 1:var a=new M(l.PUBACK,{messageIdentifier:o.messageIdentifier});this._schedule_message(a),this._receiveMessage(o);break;case 2:this._receivedMessages[o.messageIdentifier]=o,this.store("Received:",o);var d=new M(l.PUBREC,{messageIdentifier:o.messageIdentifier});this._schedule_message(d);break;default:throw Error("Invaild qos="+o.payloadMessage.qos)}},y.prototype._receiveMessage=function(o){this.onMessageArrived&&this.onMessageArrived(o.payloadMessage)},y.prototype._connected=function(o,a){this.onConnected&&this.onConnected(o,a)},y.prototype._reconnect=function(){this._trace("Client._reconnect"),this.connected||(this._reconnecting=!0,this.sendPinger.cancel(),this.receivePinger.cancel(),this._reconnectInterval<128&&(this._reconnectInterval=this._reconnectInterval*2),this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri))},y.prototype._disconnected=function(o,a){if(this._trace("Client._disconnected",o,a),o!==void 0&&this._reconnecting){this._reconnectTimeout=new z(this,this._reconnectInterval,this._reconnect);return}if(this.sendPinger.cancel(),this.receivePinger.cancel(),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._msg_queue=[],this._buffered_msg_queue=[],this._notify_msg_sent={},this.socket&&(this.socket.onopen=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket.onclose=null,this.socket.readyState===1&&this.socket.close(),delete this.socket),this.connectOptions.uris&&this.hostIndex<this.connectOptions.uris.length-1)this.hostIndex++,this._doConnect(this.connectOptions.uris[this.hostIndex]);else if(o===void 0&&(o=h.OK.code,a=m(h.OK)),this.connected){if(this.connected=!1,this.onConnectionLost&&this.onConnectionLost({errorCode:o,errorMessage:a,reconnect:this.connectOptions.reconnect,uri:this._wsuri}),o!==h.OK.code&&this.connectOptions.reconnect){this._reconnectInterval=1,this._reconnect();return}}else this.connectOptions.mqttVersion===4&&this.connectOptions.mqttVersionExplicit===!1?(this._trace("Failed to connect V4, dropping back to V3"),this.connectOptions.mqttVersion=3,this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri)):this.connectOptions.onFailure&&this.connectOptions.onFailure({invocationContext:this.connectOptions.invocationContext,errorCode:o,errorMessage:a})},y.prototype._trace=function(){if(this.traceFunction){var o=Array.prototype.slice.call(arguments);for(var a in o)typeof o[a]<"u"&&o.splice(a,1,JSON.stringify(o[a]));var d=o.join("");this.traceFunction({severity:"Debug",message:d})}if(this._traceBuffer!==null)for(var a=0,f=arguments.length;a<f;a++)this._traceBuffer.length==this._MAX_TRACE_ENTRIES&&this._traceBuffer.shift(),a===0?this._traceBuffer.push(arguments[a]):typeof arguments[a]>"u"?this._traceBuffer.push(arguments[a]):this._traceBuffer.push("  "+JSON.stringify(arguments[a]))},y.prototype._traceMask=function(o,a){var d={};for(var f in o)o.hasOwnProperty(f)&&(f==a?d[f]="******":d[f]=o[f]);return d};var xn=function(o,a,d,f){var _;if(typeof o!="string")throw new Error(m(h.INVALID_TYPE,[typeof o,"host"]));if(arguments.length==2){f=a,_=o;var p=_.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);if(p)o=p[4]||p[2],a=parseInt(p[7]),d=p[8];else throw new Error(m(h.INVALID_ARGUMENT,[o,"host"]))}else{if(arguments.length==3&&(f=d,d="/mqtt"),typeof a!="number"||a<0)throw new Error(m(h.INVALID_TYPE,[typeof a,"port"]));if(typeof d!="string")throw new Error(m(h.INVALID_TYPE,[typeof d,"path"]));var v=o.indexOf(":")!==-1&&o.slice(0,1)!=="["&&o.slice(-1)!=="]";_="ws://"+(v?"["+o+"]":o)+":"+a+d}for(var S=0,w=0;w<f.length;w++){var R=f.charCodeAt(w);55296<=R&&R<=56319&&w++,S++}if(typeof f!="string"||S>65535)throw new Error(m(h.INVALID_ARGUMENT,[f,"clientId"]));var E=new y(_,o,a,d,f);Object.defineProperties(this,{host:{get:function(){return o},set:function(){throw new Error(m(h.UNSUPPORTED_OPERATION))}},port:{get:function(){return a},set:function(){throw new Error(m(h.UNSUPPORTED_OPERATION))}},path:{get:function(){return d},set:function(){throw new Error(m(h.UNSUPPORTED_OPERATION))}},uri:{get:function(){return _},set:function(){throw new Error(m(h.UNSUPPORTED_OPERATION))}},clientId:{get:function(){return E.clientId},set:function(){throw new Error(m(h.UNSUPPORTED_OPERATION))}},onConnected:{get:function(){return E.onConnected},set:function(u){if(typeof u=="function")E.onConnected=u;else throw new Error(m(h.INVALID_TYPE,[typeof u,"onConnected"]))}},disconnectedPublishing:{get:function(){return E.disconnectedPublishing},set:function(u){E.disconnectedPublishing=u}},disconnectedBufferSize:{get:function(){return E.disconnectedBufferSize},set:function(u){E.disconnectedBufferSize=u}},onConnectionLost:{get:function(){return E.onConnectionLost},set:function(u){if(typeof u=="function")E.onConnectionLost=u;else throw new Error(m(h.INVALID_TYPE,[typeof u,"onConnectionLost"]))}},onMessageDelivered:{get:function(){return E.onMessageDelivered},set:function(u){if(typeof u=="function")E.onMessageDelivered=u;else throw new Error(m(h.INVALID_TYPE,[typeof u,"onMessageDelivered"]))}},onMessageArrived:{get:function(){return E.onMessageArrived},set:function(u){if(typeof u=="function")E.onMessageArrived=u;else throw new Error(m(h.INVALID_TYPE,[typeof u,"onMessageArrived"]))}},trace:{get:function(){return E.traceFunction},set:function(u){if(typeof u=="function")E.traceFunction=u;else throw new Error(m(h.INVALID_TYPE,[typeof u,"onTrace"]))}}}),this.connect=function(u){if(u=u||{},g(u,{timeout:"number",userName:"string",password:"string",willMessage:"object",keepAliveInterval:"number",cleanSession:"boolean",useSSL:"boolean",invocationContext:"object",onSuccess:"function",onFailure:"function",hosts:"object",ports:"object",reconnect:"boolean",mqttVersion:"number",mqttVersionExplicit:"boolean",uris:"object"}),u.keepAliveInterval===void 0&&(u.keepAliveInterval=60),u.mqttVersion>4||u.mqttVersion<3)throw new Error(m(h.INVALID_ARGUMENT,[u.mqttVersion,"connectOptions.mqttVersion"]));if(u.mqttVersion===void 0?(u.mqttVersionExplicit=!1,u.mqttVersion=4):u.mqttVersionExplicit=!0,u.password!==void 0&&u.userName===void 0)throw new Error(m(h.INVALID_ARGUMENT,[u.password,"connectOptions.password"]));if(u.willMessage){if(!(u.willMessage instanceof G))throw new Error(m(h.INVALID_TYPE,[u.willMessage,"connectOptions.willMessage"]));if(u.willMessage.stringPayload=null,typeof u.willMessage.destinationName>"u")throw new Error(m(h.INVALID_TYPE,[typeof u.willMessage.destinationName,"connectOptions.willMessage.destinationName"]))}if(typeof u.cleanSession>"u"&&(u.cleanSession=!0),u.hosts){if(!(u.hosts instanceof Array))throw new Error(m(h.INVALID_ARGUMENT,[u.hosts,"connectOptions.hosts"]));if(u.hosts.length<1)throw new Error(m(h.INVALID_ARGUMENT,[u.hosts,"connectOptions.hosts"]));for(var A=!1,b=0;b<u.hosts.length;b++){if(typeof u.hosts[b]!="string")throw new Error(m(h.INVALID_TYPE,[typeof u.hosts[b],"connectOptions.hosts["+b+"]"]));if(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(u.hosts[b])){if(b===0)A=!0;else if(!A)throw new Error(m(h.INVALID_ARGUMENT,[u.hosts[b],"connectOptions.hosts["+b+"]"]))}else if(A)throw new Error(m(h.INVALID_ARGUMENT,[u.hosts[b],"connectOptions.hosts["+b+"]"]))}if(A)u.uris=u.hosts;else{if(!u.ports)throw new Error(m(h.INVALID_ARGUMENT,[u.ports,"connectOptions.ports"]));if(!(u.ports instanceof Array))throw new Error(m(h.INVALID_ARGUMENT,[u.ports,"connectOptions.ports"]));if(u.hosts.length!==u.ports.length)throw new Error(m(h.INVALID_ARGUMENT,[u.ports,"connectOptions.ports"]));u.uris=[];for(var b=0;b<u.hosts.length;b++){if(typeof u.ports[b]!="number"||u.ports[b]<0)throw new Error(m(h.INVALID_TYPE,[typeof u.ports[b],"connectOptions.ports["+b+"]"]));var L=u.hosts[b],C=u.ports[b],Bn=L.indexOf(":")!==-1;_="ws://"+(Bn?"["+L+"]":L)+":"+C+d,u.uris.push(_)}}}E.connect(u)},this.subscribe=function(u,A){if(typeof u!="string"&&u.constructor!==Array)throw new Error("Invalid argument:"+u);if(A=A||{},g(A,{qos:"number",invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),A.timeout&&!A.onFailure)throw new Error("subscribeOptions.timeout specified with no onFailure callback.");if(typeof A.qos<"u"&&!(A.qos===0||A.qos===1||A.qos===2))throw new Error(m(h.INVALID_ARGUMENT,[A.qos,"subscribeOptions.qos"]));E.subscribe(u,A)},this.unsubscribe=function(u,A){if(typeof u!="string"&&u.constructor!==Array)throw new Error("Invalid argument:"+u);if(A=A||{},g(A,{invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),A.timeout&&!A.onFailure)throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");E.unsubscribe(u,A)},this.send=function(u,A,b,L){var C;if(arguments.length===0)throw new Error("Invalid argument.length");if(arguments.length==1){if(!(u instanceof G)&&typeof u!="string")throw new Error("Invalid argument:"+typeof u);if(C=u,typeof C.destinationName>"u")throw new Error(m(h.INVALID_ARGUMENT,[C.destinationName,"Message.destinationName"]));E.send(C)}else C=new G(A),C.destinationName=u,arguments.length>=3&&(C.qos=b),arguments.length>=4&&(C.retained=L),E.send(C)},this.publish=function(u,A,b,L){var C;if(arguments.length===0)throw new Error("Invalid argument.length");if(arguments.length==1){if(!(u instanceof G)&&typeof u!="string")throw new Error("Invalid argument:"+typeof u);if(C=u,typeof C.destinationName>"u")throw new Error(m(h.INVALID_ARGUMENT,[C.destinationName,"Message.destinationName"]));E.send(C)}else C=new G(A),C.destinationName=u,arguments.length>=3&&(C.qos=b),arguments.length>=4&&(C.retained=L),E.send(C)},this.disconnect=function(){E.disconnect()},this.getTraceLog=function(){return E.getTraceLog()},this.startTrace=function(){E.startTrace()},this.stopTrace=function(){E.stopTrace()},this.isConnected=function(){return E.connected}},G=function(o){var a;if(typeof o=="string"||o instanceof ArrayBuffer||ArrayBuffer.isView(o)&&!(o instanceof DataView))a=o;else throw m(h.INVALID_ARGUMENT,[o,"newPayload"]);var d,f=0,_=!1,p=!1;Object.defineProperties(this,{payloadString:{enumerable:!0,get:function(){return typeof a=="string"?a:ve(a,0,a.length)}},payloadBytes:{enumerable:!0,get:function(){if(typeof a=="string"){var v=new ArrayBuffer(D(a)),S=new Uint8Array(v);return de(a,S,0),S}else return a}},destinationName:{enumerable:!0,get:function(){return d},set:function(v){if(typeof v=="string")d=v;else throw new Error(m(h.INVALID_ARGUMENT,[v,"newDestinationName"]))}},qos:{enumerable:!0,get:function(){return f},set:function(v){if(v===0||v===1||v===2)f=v;else throw new Error("Invalid argument:"+v)}},retained:{enumerable:!0,get:function(){return _},set:function(v){if(typeof v=="boolean")_=v;else throw new Error(m(h.INVALID_ARGUMENT,[v,"newRetained"]))}},topic:{enumerable:!0,get:function(){return d},set:function(v){d=v}},duplicate:{enumerable:!0,get:function(){return p},set:function(v){p=v}}})};return{Client:xn,Message:G}}(typeof it<"u"?it:typeof self<"u"?self:typeof window<"u"?window:{});return i})})(Eo);class wo{constructor(e){ie(this,"onConnectionLost",e=>{console.log("onConnectionLost (TODO: reconnect?)",e),this.connectStatus="Disconnected",e.errorCode!==0&&console.log("onConnectionLost:"+e.errorMessage),this.onMQTTLost&&this.onMQTTLost(e)});ie(this,"connect",()=>{const e="incharge.one",i="web_"+this.id,r=!0,s=3;this.client=new He.Client(e,443,i),this.client.onConnectionLost=this.onConnectionLost,this.client.onMessageArrived=c=>{console.log("onMessageArrived",c);try{this.data=JSON.parse(c.payloadString),this.onMessageArrived&&this.onMessageArrived(this.data)}catch(l){console.log("error",l)}},console.log("Connecting...."),this.client.connect({useSSL:r,reconnect:!0,onSuccess:()=>{console.log("Connected"),this.connectStatus="Connected",this.client.subscribe("charger/"+this.id+"/status"),this.onMQTTConnect&&this.onMQTTConnect()},onFailure:c=>{console.log("Connection failed",c),this.connectStatus="Connection failed"},timeout:s})});ie(this,"subscribe",(e,t=0)=>{if(!this.client){console.log("client is not connected");return}this.client.subscribe(e,{qos:t})});ie(this,"publish",(e,t,i=0,r=!1)=>{if(!this.client){console.log("client is not connected");return}console.log("publish",e,t,i,r);const s=new He.Message(t);s.destinationName=e,s.qos=i,s.retained=r,this.client.send(s)});ie(this,"disconnect",()=>{if(!this.client){console.log("client is not connected");return}this.client.disconnect(),this.client=null});ie(this,"isConnected",()=>this.client&&this.client.isConnected());this.id=e,this.client=null,this.connectStatus="Disconnected",this.onMQTTConnect=null,this.onMQTTLost=null,this.onMessageArrived=null,this.data={}}}const re=window.location.hash.slice(1);window.onhashchange=function(){window.location.reload()};const To=n=>{n.innerHTML=`
    <div>
      Error. Wrong URL. Rescan the QR code.
    </div>
  `};const te="/vite.svg",bo="/google.svg",So=(n,e)=>{const t=i=>{i.addEventListener("click",()=>{console.log("login clicked"),e.signInWithGoogle().then(r=>{console.log("result=",r)}).catch(r=>{})})};n.innerHTML=`
        <div>
          <img src="${te}" class="logo" alt="Vite logo" />
          <h1>Wellcome to Charger!</h1>
          <h2>You must be logged in to use this app.</h2>
          <div class="card">
            <button id="login" type="button">
                <img src="${bo}" class="login" alt="Google logo" />
                Login with Google
            </button>
          </div>
        </div>
      `,t(document.querySelector("#login"))};class Ao{constructor(){this.charger=null}setCharger(e){this.charger=e}getCharger(){return this.charger}getChargerStatus(){return this.charger.status}addEventListener(e,t){this.charger.addEventListener(e,t)}}const Co=new Ao;const Ro="/giphy.gif",ko="/stop.svg";const No="/logout.svg",Ln=(n,e)=>{const t=i=>{i.addEventListener("click",()=>{console.log("logout clicked"),e.signOut().then(()=>{console.log("signout successful")}).catch(r=>{console.log("signout error=",r)})})};n.innerHTML=`
    <div class="logout">
      <button id="logout_btn" type="button">
        <img src="${No}" alt="Logout logo" />
        <span>Logout</span>
      </button>
    </div>
  `,t(n.querySelector("#logout_btn"))};const Mo="/wallet.svg",Po=(n,e,t)=>{n.innerHTML=`
        <div id="balance">
            <span>Ваш баланс:</span>
            <span id="balance_value">$50</span>
        </div>
        <div>
            <button id="add_balance">
                <img src="${Mo}" alt="Wallet logo" />
                <span>Поповнити рахунок</span>
            </button>
        </div>
    `},Do="/door_opened.svg",Oo="/door_closed.svg",Lo=`
  <div>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
`,Je=(n,e,t,i,r,s)=>{n.innerHTML=`
    <div class="charger">
        <div class="logout top-right-a"></div>
        <img src="${te}" class="logo" alt="Vite logo" />
        <h2>Вітаю, ${t.displayName}!</h2>
        <div id="balance">Loading...</div>
        ${s}        
      </div>
  `,Ln(document.querySelector(".logout"),i),Po(document.querySelector("#balance"))},Un=(n,e,t,i,r,s)=>{n.innerHTML=`
    <div class="header">
      <img src="${te}" alt="Vite logo" />
      <div class="name">${t.displayName}!</div>
      <div class="balance">$50</div>
      <div class="logout p-6"></div>
    </div>
    <div class="charger">
        ${s}
      </div>
  `,Ln(document.querySelector(".logout"),i)},Uo=(n,e,t,i,r)=>{Je(n,e,t,i,r,`<div>Очікую відповідь від станції заряджання...</div>${Lo}`)},xo=(n,e,t,i,r)=>{Je(n,e,t,i,r,"Станція заряджання не відповідає. Зверніться до технічної підтримки. Або скористйтесь іншою станцією заряджання.")},Bo=(n,e,t,i,r)=>{Je(n,e,t,i,r,"Станція заряджання завантажується...")},Fo=(n,e,t,i,r)=>{const s=c=>{console.log("User connected to charger"),r.publish(`charger/${e}/commands`,`connect:${t.uid}`)};Je(n,e,t,i,r,`
    <div>Станція заряджання вільна.</div>
    <button id="start_charging">Розпочати роботу з зарядною станцією</button>
  `),n.querySelector("#start_charging").addEventListener("click",s)},Vo=(n,e,t,i,r,s)=>{const c=g=>{console.log("Stop charging"),r.publish(`charger/${e}/commands`,`stop:${t.uid}`)};Un(n,e,t,i,r,`
    <div class="compact_measures">${(g=>{const I=g!=null&&g.doors_opened?`<img src="${Do}" class="small" alt="Door opened" />`:`<img src="${Oo}" class="small" alt="Door closed" />`;return`
      <span>U:<b>${(g.voltage||0).toFixed(0)}</b>V</span>
      <span>I:<b>${((g.current||0)/1e3).toFixed(3)}</b>A</span>
      <span>P:<b>${(g.power||0).toFixed(0)}</b>W</span>
      <span>E:<b>${(g.energy||0).toFixed(0)}</b>Wh</span>
      <span>${I}</span>
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
  `),n.querySelector("#stop_charging").addEventListener("click",c)},$o=(n,e,t,i,r,s)=>{var l,g,I,h;const c=N=>{console.log("User connected to charger"),r.publish(`charger/${e}/commands`,`stop:${t.uid}`)};Un(n,e,t,i,r,`
    <div>
      <img src="${Ro}" class="giphy" alt="Giphy logo" />
      <div>Триває заряджання...</div>
    </div>
    <div>
      <div><span>Напруга: </span><span id="voltage">${s.voltage.toFixed(0)}</span> <span>В</span></div>
      <div><span>Струм: </span><span id="current">${(l=s.current)==null?void 0:l.toFixed(3)}</span> <span>A</span></div>
      <div><span>Потужність: </span><span id="power">${(g=s.power)==null?void 0:g.toFixed(1)}</span> <span>W</span></div>
      <div><span>pf: </span><span id="pf">${(I=s.pf)==null?void 0:I.toFixed(2)}</span> <span>%</span></div>
      <div><span>Спожито: </span><span id="energy">${(h=s.energy)==null?void 0:h.toFixed(0)}</span> <span>Wh</span></div>
    </div>
    <div>
      <div><span>Час заряджання: </span><span id="time">${((s.time||0)/60).toFixed(0)}</span> <span>хв</span></div>
    </div>
    <div>
      <button id="stop_charging">
        <img src="${ko}" class="stop" alt="Stop logo" />
        Припинити заряджання
      </button>
    </div>
  `),n.querySelector("#stop_charging").addEventListener("click",c)},Ho=(n,e,t,i)=>{n.innerHTML=`
    Стан станції заряджання невідомий. Зверніться до технічної підтримки.
  `},qo=n=>{n.innerHTML=`
  <div class="charger">
    <img src="${te}" class="logo" alt="Vite logo" />
    <h2>Втрачено зв'язок з сервером.</h2>
    <div>Намагаємось перепідключитись...</div>
    <div>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    <div>Якщо це не виправить проблему, перезавантажте сторінку.</div>
  </div>
`},Wo=(n,e,t)=>{n.innerHTML=`
    <div class="charger">
      <img src="${te}" class="logo" alt="Vite logo" />
      <h2>Зарядна станція несправна.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
      <br/>
      <div style="text-align: left">
        <div>Код помилки: <b>${e}</b></div>
        <div>Причина: <b>${t}</b></div>
      </div>
    </div>
  `},jo=n=>{n.innerHTML=`
    <div class="charger">
      <img src="${te}" class="logo" alt="Vite logo" />
      <h2>Зарядна станція використовується іншим користувачем.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
    </div>
  `},zo=(n,e)=>{let t=e;e==="fwupdate"&&(t="Перезавантаження для оновлення ПЗ"),n.innerHTML=`
    <div class="charger">
      <img src="${te}" class="logo" alt="Vite logo" />
      <h2>Вибачте, але зарядна станція вимкнена.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
      <br/>
      <div style="text-align: left">
        <div>Причина: <b>${t}</b></div>
      </div>
    </div>
  `},Go=(n,e,t)=>{let i="Інше";e==="fwupdate"&&(i="Оновлення ПЗ"),n.innerHTML=`
    <div class="charger">
      <img src="${te}" class="logo" alt="Vite logo" />
      <h2>Вибачте, але зарядна станція на технічному обслуговані.</h2>
      <div>Оберіть іншу зарядну станцію.</div>
      <br/>
      <div style="text-align: left">
        <div>Причина: <b>${i}</b></div>
        <div><b>${t}</b></div>
      </div>
      <div>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
      </div>
</div>
  `},Ko=(n,e,t,i,r)=>{const s=t.uid;console.log("---- uid=",s),console.log("charger=",Co);let c=setTimeout(()=>{xo(n,e,t,i,r)},15e3);r.onMessageArrived=l=>{if(console.log("onMessageArrived",l),clearTimeout(c),l.uid&&l.uid!==s)return jo(n);switch(l.status){case"init":Bo(n,e,t,i,r);break;case"ready":Fo(n,e,t,i,r);break;case"busy":Vo(n,e,t,i,r,l);break;case"charging":$o(n,e,t,i,r,l);break;case"error":Wo(n,l.code,l.reason);break;case"off":zo(n,l.reason);break;case"maintenance":Go(n,l.event,l.message);break;case"ignore_me":break;default:Ho(n)}},Uo(n,e,t,i,r)},Jo=document.getElementById("app"),Qo=n=>{if(console.log("App:element",n),!re)return To(n);const e=new yo,t=new wo("charger_"+re);t.onMQTTConnect=()=>{console.log("onMQTTConnect"),t.subscribe("charger/"+re+"/status"),t.subscribe("charger/"+re+"/data");const i=e.getCurrentUser();i&&t.publish("charger/"+re+"/commands",`hello:${i.uid}`)},t.onMQTTLost=()=>(console.log("onMQTTLost. TODO: reconnect"),qo(n)),e.onAuthStateChanged(i=>(console.log("user=",i),i?(t.id="charger_"+re+"_"+i.uid,t.connect(),Ko(n,re,i,e,t)):(t.disconnect(),So(n,e))))};Qo(Jo);