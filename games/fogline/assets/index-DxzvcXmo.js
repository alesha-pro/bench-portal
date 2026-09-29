const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./combat-rCQfGkg9.js","./loadout-C7bwbrRO.js","./worldsafe-CUS4rDbA.js","./BufferGeometryUtils-Cw5yYU3m.js","./beams-_VhuJA3q.js","./manager-B2Ah0U0L.js","./grenades-DuBBzn7t.js","./director-I8LSHlO3.js","./arena-CZSwJt_x.js","./ui-6U5EyKxt.js","./ui-BRztwW14.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const pm="modulepreload",mm=function(r,t){return new URL(r,t).href},Mu={},Zi=function(t,e,i){let n=Promise.resolve();if(e&&e.length>0){let c=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");n=c(e.map(h=>{if(h=mm(h,i),h in Mu)return;Mu[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(i)for(let p=a.length-1;p>=0;p--){const x=a[p];if(x.href===h&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":pm,d||(f.as="script"),f.crossOrigin="",f.href=h,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((p,x)=>{f.addEventListener("load",p),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};const sl="186",gm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ff=0,Wc=1,pf=2,vm=3,_m=0,Ys=1,mf=2,Hs=3,Pn=0,Ye=1,ei=2,Ji=0,Zs=1,Xc=2,qc=3,Yc=4,rl=5,ym=6,ln=100,gf=101,xf=102,vf=103,_f=104,hh=200,es=201,yf=202,Mf=203,uh=204,dh=205,Sf=206,bf=207,wf=208,Af=209,Tf=210,Ef=211,Cf=212,Rf=213,Pf=214,po=0,mo=1,go=2,Js=3,xo=4,vo=5,_o=6,yo=7,ia=0,If=1,Lf=2,Ri=0,fh=1,ph=2,mh=3,gh=4,xh=5,vh=6,_h=7,Zc="attached",Df="detached",al=300,$i=301,In=302,Pr=303,Ir=304,nr=306,ns=1e3,qe=1001,Gr=1002,we=1003,yh=1004,Mm=1004,Ws=1005,Sm=1005,fe=1006,Lr=1007,bm=1007,xi=1008,wm=1008,Oe=1009,Mh=1010,Sh=1011,$s=1012,ol=1013,Pi=1014,oi=1015,Ai=1016,ll=1017,cl=1018,js=1020,bh=35902,wh=35899,Ah=1021,Th=1022,Le=1023,ji=1026,Cn=1027,hl=1028,na=1029,pn=1030,ul=1031,Am=1032,dl=1033,Dr=33776,Nr=33777,Ur=33778,Fr=33779,Mo=35840,So=35841,bo=35842,wo=35843,Ao=36196,To=37492,Eo=37496,Co=37488,Ro=37489,Hr=37490,Po=37491,Io=37808,Lo=37809,Do=37810,No=37811,Uo=37812,Fo=37813,Oo=37814,Bo=37815,zo=37816,ko=37817,Vo=37818,Go=37819,Ho=37820,Wo=37821,Xo=36492,qo=36494,Yo=36495,Zo=36283,Ko=36284,Wr=36285,Jo=36286,Nf=2200,Uf=2201,Ff=2202,Xr=2300,$o=2301,co=2302,Kc=2303,jn=2400,Qn=2401,qr=2402,fl=2500,Eh=2501,Tm=0,Em=1,Cm=2,Of=3200,Rm=3201,Pm=3202,Im=3203,mn=0,Bf=1,cn="",pi="srgb",ss="srgb-linear",Yr="linear",xe="srgb",Lm="",Dm="rg",Nm="ga",Um=0,ho=7680,Fm=7681,Om=7682,Bm=7683,zm=34055,km=34056,Vm=5386,Gm=512,Hm=513,Wm=514,Xm=515,qm=516,Ym=517,Zm=518,zf=519,kf=512,Vf=513,Gf=514,pl=515,Hf=516,Wf=517,ml=518,Xf=519,gl=35044,Ch=35048,Km=35040,Jm=35045,$m=35049,jm=35041,Qm=35046,t0=35050,e0=35042,i0="100",Jc="300 es",bi=2e3,rs=2001,n0={COMPUTE:"compute",RENDER:"render"},s0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},r0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},a0={TEXTURE_COMPARE:"depthTextureCompare"},o0={NONE:0,SHARED:1,FULL:2};function l0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}const c0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Xs(r,t){return new c0[r](t)}function qf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Zr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yf(){const r=Zr("canvas");return r.style.display="block",r}const Su={};let Ln=null;function h0(r){Ln=r}function u0(){return Ln}function Kr(...r){const t="THREE."+r.shift();Ln?Ln("log",t,...r):console.log(t,...r)}function Zf(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function pt(...r){r=Zf(r);const t="THREE."+r.shift();if(Ln)Ln("warn",t,...r);else{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Nt(...r){r=Zf(r);const t="THREE."+r.shift();if(Ln)Ln("error",t,...r);else{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function dn(...r){const t=r.join(" ");t in Su||(Su[t]=!0,pt(...r))}function d0(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const f0={[po]:mo,[go]:_o,[xo]:yo,[Js]:vo,[mo]:po,[_o]:go,[yo]:xo,[vo]:Js};class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bu=1234567;const is=Math.PI/180,Qs=180/Math.PI;function wi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function Wt(r,t,e){return Math.max(t,Math.min(e,r))}function Rh(r,t){return(r%t+t)%t}function p0(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function m0(r,t,e){return r!==t?(e-r)/(t-r):0}function Or(r,t,e){return(1-e)*r+e*t}function g0(r,t,e,i){return Or(r,t,1-Math.exp(-e*i))}function x0(r,t=1){return t-Math.abs(Rh(r,t*2)-t)}function v0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function _0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function y0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function M0(r,t){return r+Math.random()*(t-r)}function S0(r){return r*(.5-Math.random())}function b0(r){r!==void 0&&(bu=r);let t=bu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function w0(r){return r*is}function A0(r){return r*Qs}function T0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function E0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function C0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function R0(r,t,e,i,n){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),d=s((t-i)/2),u=a((t-i)/2),f=s((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*h,o*c);break;default:pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ai(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function te(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const P0={DEG2RAD:is,RAD2DEG:Qs,generateUUID:wi,clamp:Wt,euclideanModulo:Rh,mapLinear:p0,inverseLerp:m0,lerp:Or,damp:g0,pingpong:x0,smoothstep:v0,smootherstep:_0,randInt:y0,randFloat:M0,randFloatSpread:S0,seededRandom:b0,degToRad:w0,radToDeg:A0,isPowerOfTwo:T0,ceilPowerOfTwo:E0,floorPowerOfTwo:C0,setQuaternionFromProperEuler:R0,normalize:te,denormalize:ai},au=class au{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};au.prototype.isVector2=!0;let Q=au;class li{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),M=Math.sin(v);m=Math.sin(m*v)/M,o=Math.sin(o*v)/M,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ou=class ou{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),d=2*(s*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ou.prototype.isVector3=!0;let C=ou;const Zl=new C,wu=new li,lu=class lu{constructor(t,e,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],v=n[1],M=n[4],_=n[7],S=n[2],w=n[5],E=n[8];return s[0]=a*x+o*v+l*S,s[3]=a*g+o*M+l*w,s[6]=a*m+o*_+l*E,s[1]=c*x+h*v+d*S,s[4]=c*g+h*M+d*w,s[7]=c*m+h*_+d*E,s[2]=u*x+f*v+p*S,s[5]=u*g+f*M+p*w,s[8]=u*m+f*_+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,p=e*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return dn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return dn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return dn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lu.prototype.isMatrix3=!0;let Jt=lu;const Kl=new Jt,Au=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I0(){const r={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xe&&(n.r=fn(n.r),n.g=fn(n.g),n.b=fn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(n.r=Ks(n.r),n.g=Ks(n.g),n.b=Ks(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===cn?Yr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return dn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return dn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ss]:{primaries:t,whitePoint:i,transfer:Yr,toXYZ:Au,fromXYZ:Tu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:Au,fromXYZ:Tu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),r}const oe=I0();function fn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let gs;class Kf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{gs===void 0&&(gs=Zr("canvas")),gs.width=t.width,gs.height=t.height;const n=gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=gs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=fn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fn(e[i]/255)*255):e[i]=fn(e[i]);return{data:e,width:t.width,height:t.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let L0=0;class un{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Jl(n[a].image)):s.push(Jl(n[a]))}else s=Jl(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Jl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}class D0 extends un{constructor(t=null){dn('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}}let N0=0;const $l=new C;class Ce extends Gi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=qe,n=qe,s=fe,a=xi,o=Le,l=Oe,c=Ce.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=wi(),this.name="",this.source=new un(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){pt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case qe:t.x=t.x<0?0:1;break;case Gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case qe:t.y=t.y<0?0:1;break;case Gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=al;Ce.DEFAULT_ANISOTROPY=1;const cu=class cu{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(f+1)/2,S=(m+1)/2,w=(h+u)/4,E=(d+x)/4,y=(p+g)/4;return M>_&&M>S?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=w/i,s=E/i):_>S?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=w/n,s=y/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=E/s,n=y/s),this.set(i,n,s,e),this}let v=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cu.prototype.isVector4=!0;let se=cu;class Ph extends Gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},s=new Ce(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new un(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Ph{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class xl extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=we,this.minFilter=we,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class U0 extends ci{constructor(t=1,e=1,i=1,n={}){super(t,e,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new xl(null,t,e,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class vl extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=we,this.minFilter=we,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class F0 extends ci{constructor(t=1,e=1,i=1,n={}){super(t,e,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new vl(null,t,e,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}const nl=class nl{constructor(t,e,i,n,s,a,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,d,u,f,p,x,g)}set(t,e,i,n,s,a,o,l,c,h,d,u,f,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nl().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/xs.setFromMatrixColumn(t,0).length(),s=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){const u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(O0,t,B0)}lookAt(t,e,i){const n=this.elements;return _i.subVectors(t,e),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Mn.crossVectors(i,_i),Mn.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Mn.crossVectors(i,_i)),Mn.normalize(),ma.crossVectors(_i,Mn),n[0]=Mn.x,n[4]=ma.x,n[8]=_i.x,n[1]=Mn.y,n[5]=ma.y,n[9]=_i.y,n[2]=Mn.z,n[6]=ma.z,n[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],M=i[7],_=i[11],S=i[15],w=n[0],E=n[4],y=n[8],A=n[12],R=n[1],I=n[5],D=n[9],B=n[13],L=n[2],O=n[6],G=n[10],W=n[14],tt=n[3],X=n[7],K=n[11],J=n[15];return s[0]=a*w+o*R+l*L+c*tt,s[4]=a*E+o*I+l*O+c*X,s[8]=a*y+o*D+l*G+c*K,s[12]=a*A+o*B+l*W+c*J,s[1]=h*w+d*R+u*L+f*tt,s[5]=h*E+d*I+u*O+f*X,s[9]=h*y+d*D+u*G+f*K,s[13]=h*A+d*B+u*W+f*J,s[2]=p*w+x*R+g*L+m*tt,s[6]=p*E+x*I+g*O+m*X,s[10]=p*y+x*D+g*G+m*K,s[14]=p*A+x*B+g*W+m*J,s[3]=v*w+M*R+_*L+S*tt,s[7]=v*E+M*I+_*O+S*X,s[11]=v*y+M*D+_*G+S*K,s[15]=v*A+M*B+_*W+S*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*f-c*u,M=o*f-c*d,_=o*u-l*d,S=a*f-c*h,w=a*u-l*h,E=a*d-o*h;return e*(x*v-g*M+m*_)-i*(p*v-g*S+m*w)+n*(p*M-x*S+m*E)-s*(p*_-x*w+g*E)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*o-i*a,M=e*l-n*a,_=e*c-s*a,S=i*l-n*o,w=i*c-s*o,E=n*c-s*l,y=h*x-d*p,A=h*g-u*p,R=h*m-f*p,I=d*g-u*x,D=d*m-f*x,B=u*m-f*g,L=v*B-M*D+_*I+S*R-w*A+E*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return t[0]=(o*B-l*D+c*I)*O,t[1]=(n*D-i*B-s*I)*O,t[2]=(x*E-g*w+m*S)*O,t[3]=(u*w-d*E-f*S)*O,t[4]=(l*R-a*B-c*A)*O,t[5]=(e*B-n*R+s*A)*O,t[6]=(g*_-p*E-m*M)*O,t[7]=(h*E-u*_+f*M)*O,t[8]=(a*D-o*R+c*y)*O,t[9]=(i*R-e*D-s*y)*O,t[10]=(p*w-x*_+m*v)*O,t[11]=(d*_-h*w-f*v)*O,t[12]=(o*A-a*I-l*y)*O,t[13]=(e*I-i*A+n*y)*O,t[14]=(x*M-p*S-g*v)*O,t[15]=(h*S-d*M+u*v)*O,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,p=s*d,x=a*h,g=a*d,m=o*d,v=l*c,M=l*h,_=l*d,S=i.x,w=i.y,E=i.z;return n[0]=(1-(x+m))*S,n[1]=(f+_)*S,n[2]=(p-M)*S,n[3]=0,n[4]=(f-_)*w,n[5]=(1-(u+m))*w,n[6]=(g+v)*w,n[7]=0,n[8]=(p+M)*E,n[9]=(g-v)*E,n[10]=(1-(u+x))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=xs.set(n[0],n[1],n[2]).length();const o=xs.set(n[4],n[5],n[6]).length(),l=xs.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Di.copy(this);const c=1/a,h=1/o,d=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,e.setFromRotationMatrix(Di),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,a,o=bi,l=!1){const c=this.elements,h=2*s/(e-t),d=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n);let p,x;if(l)p=s/(a-s),x=a*s/(a-s);else if(o===bi)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===rs)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=bi,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n);let p,x;if(l)p=1/(a-s),x=a/(a-s);else if(o===bi)p=-2/(a-s),x=-(a+s)/(a-s);else if(o===rs)p=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};nl.prototype.isMatrix4=!0;let Zt=nl;const xs=new C,Di=new Zt,O0=new C(0,0,0),B0=new C(1,1,1),Mn=new C,ma=new C,_i=new C,Eu=new Zt,Cu=new li;class Vi{constructor(t=0,e=0,i=0,n=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let z0=0;const Ru=new C,vs=new li,tn=new Zt,ga=new C,ur=new C,k0=new C,V0=new li,Pu=new C(1,0,0),Iu=new C(0,1,0),Lu=new C(0,0,1),Du={type:"added"},G0={type:"removed"},_s={type:"childadded",child:null},jl={type:"childremoved",child:null};class de extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new C,e=new Vi,i=new li,n=new C(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Jt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(Iu,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(Iu,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ga.copy(t):ga.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(ur,ga,this.up):tn.lookAt(ga,ur,this.up),this.quaternion.setFromRotationMatrix(tn),n&&(tn.extractRotation(n.matrixWorld),vs.setFromRotationMatrix(tn),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Du),_s.child=t,this.dispatchEvent(_s),_s.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(G0),jl.child=t,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Du),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,k0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,V0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}de.DEFAULT_UP=new C(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rn extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H0={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Rn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Ql(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ct{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=oe.workingColorSpace){if(t=Rh(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ql(a,s,t+1/3),this.g=Ql(a,s,t),this.b=Ql(a,s,t-1/3)}return oe.colorSpaceToWorking(this,n),this}setStyle(t,e=pi){function i(s){s!==void 0&&parseFloat(s)<1&&pt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:pt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pi){const i=Jf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fn(t.r),this.g=fn(t.g),this.b=fn(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return oe.workingToColorSpace(je.copy(this),t),Math.round(Wt(je.r*255,0,255))*65536+Math.round(Wt(je.g*255,0,255))*256+Math.round(Wt(je.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(je.copy(this),e);const i=je.r,n=je.g,s=je.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=pi){oe.workingToColorSpace(je.copy(this),t);const e=je.r,i=je.g,n=je.b;return t!==pi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(xa);const i=Or(Sn.h,xa.h,e),n=Or(Sn.s,xa.s,e),s=Or(Sn.l,xa.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new ct;ct.NAMES=Jf;class yl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(t),this.density=e}clone(){return new yl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sa{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=i}clone(){return new sa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ra extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ni=new C,en=new C,tc=new C,nn=new C,ys=new C,Ms=new C,Nu=new C,ec=new C,ic=new C,nc=new C,sc=new se,rc=new se,ac=new se;class gi{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ni.subVectors(t,e),n.cross(Ni);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ni.subVectors(n,e),en.subVectors(i,e),tc.subVectors(t,e);const a=Ni.dot(Ni),o=Ni.dot(en),l=Ni.dot(tc),c=en.dot(en),h=en.dot(tc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,nn.x),l.addScaledVector(a,nn.y),l.addScaledVector(o,nn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return sc.setScalar(0),rc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,i),ac.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(sc,s.x),a.addScaledVector(rc,s.y),a.addScaledVector(ac,s.z),a}static isFrontFacing(t,e,i,n){return Ni.subVectors(i,e),en.subVectors(t,e),Ni.cross(en).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ni.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return gi.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;ys.subVectors(n,i),Ms.subVectors(s,i),ec.subVectors(t,i);const l=ys.dot(ec),c=Ms.dot(ec);if(l<=0&&c<=0)return e.copy(i);ic.subVectors(t,n);const h=ys.dot(ic),d=Ms.dot(ic);if(h>=0&&d<=h)return e.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ys,a);nc.subVectors(t,s);const f=ys.dot(nc),p=Ms.dot(nc);if(p>=0&&f<=p)return e.copy(s);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Ms,o);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Nu.subVectors(s,n),o=(d-h)/(d-h+(f-p)),e.copy(n).addScaledVector(Nu,o);const m=1/(g+x+u);return a=x*m,o=u*m,e.copy(i).addScaledVector(ys,a).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ze{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ui):Ui.fromBufferAttribute(s,a),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),va.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(t.matrixWorld),this.union(va)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),_a.subVectors(this.max,dr),Ss.subVectors(t.a,dr),bs.subVectors(t.b,dr),ws.subVectors(t.c,dr),bn.subVectors(bs,Ss),wn.subVectors(ws,bs),On.subVectors(Ss,ws);let e=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-On.z,On.y,bn.z,0,-bn.x,wn.z,0,-wn.x,On.z,0,-On.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-On.y,On.x,0];return!oc(e,Ss,bs,ws,_a)||(e=[1,0,0,0,1,0,0,0,1],!oc(e,Ss,bs,ws,_a))?!1:(ya.crossVectors(bn,wn),e=[ya.x,ya.y,ya.z],oc(e,Ss,bs,ws,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sn=[new C,new C,new C,new C,new C,new C,new C,new C],Ui=new C,va=new Ze,Ss=new C,bs=new C,ws=new C,bn=new C,wn=new C,On=new C,dr=new C,_a=new C,ya=new C,Bn=new C;function oc(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Bn.fromArray(r,s);const o=n.x*Math.abs(Bn.x)+n.y*Math.abs(Bn.y)+n.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),h=i.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const hn=W0();function W0(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function fi(r){Math.abs(r)>65504&&pt("DataUtils.toHalfFloat(): Value out of range."),r=Wt(r,-65504,65504),hn.floatView[0]=r;const t=hn.uint32View[0],e=t>>23&511;return hn.baseTable[e]+((t&8388607)>>hn.shiftTable[e])}function Tr(r){const t=r>>10;return hn.uint32View[0]=hn.mantissaTable[hn.offsetTable[t]+(r&1023)]+hn.exponentTable[t],hn.floatView[0]}class $c{static toHalfFloat(t){return fi(t)}static fromHalfFloat(t){return Tr(t)}}const Ne=new C,Ma=new Q;let X0=0;class ue extends Gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gl,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ma.fromBufferAttribute(this,e),Ma.applyMatrix3(t),this.setXY(e,Ma.x,Ma.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class q0 extends ue{constructor(t,e,i){super(new Int8Array(t),e,i)}}class Y0 extends ue{constructor(t,e,i){super(new Uint8Array(t),e,i)}}class Z0 extends ue{constructor(t,e,i){super(new Uint8ClampedArray(t),e,i)}}class K0 extends ue{constructor(t,e,i){super(new Int16Array(t),e,i)}}class Ih extends ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class J0 extends ue{constructor(t,e,i){super(new Int32Array(t),e,i)}}class Lh extends ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class $0 extends ue{constructor(t,e,i){super(new Uint16Array(t),e,i),this.isFloat16BufferAttribute=!0}getX(t){let e=Tr(this.array[t*this.itemSize]);return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=fi(e),this}getY(t){let e=Tr(this.array[t*this.itemSize+1]);return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=fi(e),this}getZ(t){let e=Tr(this.array[t*this.itemSize+2]);return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=fi(e),this}getW(t){let e=Tr(this.array[t*this.itemSize+3]);return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=fi(e),this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.array[t+0]=fi(e),this.array[t+1]=fi(i),this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array)),this.array[t+0]=fi(e),this.array[t+1]=fi(i),this.array[t+2]=fi(n),this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=fi(e),this.array[t+1]=fi(i),this.array[t+2]=fi(n),this.array[t+3]=fi(s),this}}class Et extends ue{constructor(t,e,i){super(new Float32Array(t),e,i)}}const j0=new Ze,fr=new C,lc=new C;class We{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):j0.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(fr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(lc)),this.expandByPoint(fr.copy(t.center).sub(lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Q0=0;const Ei=new Zt,cc=new de,As=new C,yi=new Ze,pr=new Ze,Ve=new C;class Kt extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(l0(t)?Lh:Ih)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,i){return Ei.makeTranslation(t,e,i),this.applyMatrix4(Ei),this}scale(t,e,i){return Ei.makeScale(t,e,i),this.applyMatrix4(Ei),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];yi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new We);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(yi.min,pr.min),yi.expandByPoint(Ve),Ve.addVectors(yi.max,pr.max),yi.expandByPoint(Ve)):(yi.expandByPoint(pr.min),yi.expandByPoint(pr.max))}yi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ve.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(t,c),Ve.add(As)),n=Math.max(n,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ue(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new C,l[y]=new C;const c=new C,h=new C,d=new C,u=new Q,f=new Q,p=new Q,x=new C,g=new C;function m(y,A,R){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,R),u.fromBufferAttribute(s,y),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[y].add(x),o[A].add(x),o[R].add(x),l[y].add(g),l[A].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,A=v.length;y<A;++y){const R=v[y],I=R.start,D=R.count;for(let B=I,L=I+D;B<L;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new C,_=new C,S=new C,w=new C;function E(y){S.fromBufferAttribute(n,y),w.copy(S);const A=o[y];M.copy(A),M.sub(S.multiplyScalar(S.dot(A))).normalize(),_.crossVectors(w,A);const I=_.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,I)}for(let y=0,A=v.length;y<A;++y){const R=v[y],I=R.start,D=R.count;for(let B=I,L=I+D;B<L;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new ue(u,h,d)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Kt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ml{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const ni=new C;class as{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=te(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new as(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hc=new C,tg=new C,eg=new Jt;class on{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=hc.subVectors(i,e).cross(tg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||eg.getNormalMatrix(t),n=this.coplanarPoint(hc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let ig=0;class Ke extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Zs,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=dh,this.blendEquation=ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){pt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new on().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Q().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Dh extends Ke{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ts;const mr=new C,Es=new C,Cs=new C,Rs=new Q,gr=new Q,$f=new Zt,Sa=new C,xr=new C,ba=new C,Uu=new Q,uc=new Q,Fu=new Q;class jf extends de{constructor(t=new Dh){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Kt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ml(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new as(i,3,0,!1)),Ts.setAttribute("uv",new as(i,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new Q(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),$f.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Cs.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;wa(Sa.set(-.5,-.5,0),Cs,a,Es,n,s),wa(xr.set(.5,-.5,0),Cs,a,Es,n,s),wa(ba.set(.5,.5,0),Cs,a,Es,n,s),Uu.set(0,0),uc.set(1,0),Fu.set(1,1);let o=t.ray.intersectTriangle(Sa,xr,ba,!1,mr);if(o===null&&(wa(xr.set(-.5,.5,0),Cs,a,Es,n,s),uc.set(0,1),o=t.ray.intersectTriangle(Sa,ba,xr,!1,mr),o===null))return;const l=t.ray.origin.distanceTo(mr);l<t.near||l>t.far||e.push({distance:l,point:mr.clone(),uv:gi.getInterpolation(mr,Sa,xr,ba,Uu,uc,Fu,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function wa(r,t,e,i,n,s){Rs.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(gr.x=s*Rs.x-n*Rs.y,gr.y=n*Rs.x+s*Rs.y):gr.copy(Rs),r.copy(t),r.x+=gr.x,r.y+=gr.y,r.applyMatrix4($f)}const Aa=new C,Ou=new C;class Qf extends de{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let i=0,n=e.length;i<n;i++){const s=e[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,i=0){e=Math.abs(e);const n=this.levels;let s;for(s=0;s<n.length&&!(e<n[s].distance);s++);return n.splice(s,0,{distance:e,hysteresis:i,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let i=0;i<e.length;i++)if(e[i].distance===t){const n=e.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let i,n;for(i=1,n=e.length;i<n;i++){let s=e[i].distance;if(e[i].object.visible&&(s-=s*e[i].hysteresis),t<s)break}return e[i-1].object}return null}raycast(t,e){if(this.levels.length>0){Aa.setFromMatrixPosition(this.matrixWorld);const n=t.ray.origin.distanceTo(Aa);this.getObjectForDistance(n).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Aa.setFromMatrixPosition(t.matrixWorld),Ou.setFromMatrixPosition(this.matrixWorld);const i=Aa.distanceTo(Ou)/t.zoom;e[0].object.visible=!0;let n,s;for(n=1,s=e.length;n<s;n++){let a=e[n].distance;if(e[n].object.visible&&(a-=a*e[n].hysteresis),i>=a)e[n-1].object.visible=!1,e[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<s;n++)e[n].object.visible=!1}}toJSON(t){const e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];const i=this.levels;for(let n=0,s=i.length;n<s;n++){const a=i[n];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const rn=new C,dc=new C,Ta=new C,Ea=new C;class sr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){dc.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),Ea.copy(this.origin).sub(dc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ta),o=Ea.dot(this.direction),l=-Ea.dot(Ta),c=Ea.lengthSq(),h=Math.abs(1-a*a);let d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=s*h,d>=0)if(u>=-p)if(u<=p){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(dc).addScaledVector(Ta,u),f}intersectSphere(t,e){if(t.radius<0)return null;rn.subVectors(t.center,this.origin);const i=rn.dot(this.direction),n=rn.dot(rn)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,i,n,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=i.x-a.x,v=i.y-a.y,M=i.z-a.z,_=Math.abs(l),S=Math.abs(c),w=Math.abs(h);let E,y,A,R,I,D,B,L,O,G,W,tt;if(_>=S&&_>=w?(A=l,D=d,O=p,tt=m,l>=0?(E=c,y=h,R=u,I=f,B=x,L=g,G=v,W=M):(E=h,y=c,R=f,I=u,B=g,L=x,G=M,W=v)):S>=w?(A=c,D=u,O=x,tt=v,c>=0?(E=h,y=l,R=f,I=d,B=g,L=p,G=M,W=m):(E=l,y=h,R=d,I=f,B=p,L=g,G=m,W=M)):(A=h,D=f,O=g,tt=M,h>=0?(E=l,y=c,R=d,I=u,B=p,L=x,G=m,W=v):(E=c,y=l,R=u,I=d,B=x,L=p,G=v,W=m)),A===0)return null;const X=E/A,K=y/A,J=1/A,wt=R-X*D,mt=I-K*D,Yt=B-X*O,kt=L-K*O,le=G-X*tt,Z=W-K*tt,it=le*kt-Z*Yt,gt=wt*Z-mt*le,Vt=Yt*mt-kt*wt;if(n){if(it<0||gt<0||Vt<0)return null}else if((it<0||gt<0||Vt<0)&&(it>0||gt>0||Vt>0))return null;const At=it+gt+Vt;if(At===0)return null;const Xt=J*(it*D+gt*O+Vt*tt);return(At>0?Xt<0:Xt>0)?null:this.at(Xt/At,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn extends Ke{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bu=new Zt,zn=new sr,Ca=new We,zu=new C,Ra=new C,Pa=new C,Ia=new C,fc=new C,La=new C,ku=new C,Da=new C;class ve extends de{constructor(t=new Kt,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){La.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(fc.fromBufferAttribute(d,t),a?La.addScaledVector(fc,h):La.addScaledVector(fc.sub(e),h))}e.add(La)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),zn.copy(t.ray).recast(t.near),!(Ca.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Ca,zu)===null||zn.origin.distanceToSquared(zu)>(t.far-t.near)**2))&&(Bu.copy(s).invert(),zn.copy(t.ray).applyMatrix4(Bu),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,S=M;_<S;_+=3){const w=o.getX(_),E=o.getX(_+1),y=o.getX(_+2);n=Na(this,m,t,i,c,h,d,w,E,y),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const v=o.getX(g),M=o.getX(g+1),_=o.getX(g+2);n=Na(this,a,t,i,c,h,d,v,M,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,S=M;_<S;_+=3){const w=_,E=_+1,y=_+2;n=Na(this,m,t,i,c,h,d,w,E,y),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const v=g,M=g+1,_=g+2;n=Na(this,a,t,i,c,h,d,v,M,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}}function ng(r,t,e,i,n,s,a,o){let l;if(t.side===Ye?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Pn,o),l===null)return null;Da.copy(o),Da.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Da);return c<e.near||c>e.far?null:{distance:c,point:Da.clone(),object:r}}function Na(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Ra),r.getVertexPosition(l,Pa),r.getVertexPosition(c,Ia);const h=ng(r,t,e,i,Ra,Pa,Ia,ku);if(h){const d=new C;gi.getBarycoord(ku,Ra,Pa,Ia,d),n&&(h.uv=gi.getInterpolatedAttribute(n,o,l,c,d,new Q)),s&&(h.uv1=gi.getInterpolatedAttribute(s,o,l,c,d,new Q)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};gi.getNormal(Ra,Pa,Ia,u.normal),h.face=u,h.barycoord=d}return h}const vr=new se,Vu=new se,Gu=new se,sg=new se,Hu=new Zt,Ua=new C,pc=new We,Wu=new Zt,mc=new sr;class tp extends ve{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zc,this.bindMatrix=new Zt,this.bindMatrixInverse=new Zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ze),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new We),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ua),this.boundingSphere.expandByPoint(Ua)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pc.copy(this.boundingSphere),pc.applyMatrix4(n),t.ray.intersectsSphere(pc)!==!1&&(Wu.copy(n).invert(),mc.copy(t.ray).applyMatrix4(Wu),!(this.boundingBox!==null&&mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,mc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new se,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Df?this.bindMatrixInverse.copy(this.bindMatrix).invert():pt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;Vu.fromBufferAttribute(n.attributes.skinIndex,t),Gu.fromBufferAttribute(n.attributes.skinWeight,t),e.isVector4?(vr.copy(e),e.set(0,0,0,0)):(vr.set(...e,1),e.set(0,0,0)),vr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Gu.getComponent(s);if(a!==0){const o=Vu.getComponent(s);Hu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(sg.copy(vr).applyMatrix4(Hu),a)}}return e.isVector4&&(e.w=vr.w),e.applyMatrix4(this.bindMatrixInverse)}}class Nh extends de{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xe extends Ce{constructor(t=null,e=1,i=1,n,s,a,o,l,c=we,h=we,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xu=new Zt,rg=new Zt;class Sl{constructor(t=[],e=[]){this.uuid=wi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){pt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Zt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:rg;Xu.multiplyMatrices(o,e[s]),Xu.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Sl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Xe(e,t,t,Le,oi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const s=t.bones[i];let a=e[s];a===void 0&&(pt("Skeleton: No bone found with UUID:",s),a=new Nh),this.bones.push(a),this.boneInverses.push(new Zt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){const a=e[n];t.bones.push(a.uuid);const o=i[n];t.boneInverses.push(o.toArray())}return t}}class mi extends ue{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ps=new Zt,qu=new Zt,Fa=[],Yu=new Ze,ag=new Zt,_r=new ve,yr=new We;class ep extends ve{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ag)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ps),Yu.copy(t.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Yu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new We),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ps),yr.copy(t.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(i),t.ray.intersectsSphere(yr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Ps),qu.multiplyMatrices(i,Ps),_r.matrixWorld=qu,_r.raycast(t,Fa);for(let a=0,o=Fa.length;a<o;a++){const l=Fa[a];l.instanceId=s,l.object=this,e.push(l)}Fa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xe(new Float32Array(n*this.count),n,this.count,hl,oi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kn=new We,og=new Q(.5,.5),Oa=new C;class os{constructor(t=new on,e=new on,i=new on,n=new on,s=new on,a=new on){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bi,i=!1){const n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],x=s[9],g=s[10],m=s[11],v=s[12],M=s[13],_=s[14],S=s[15];if(n[0].setComponents(c-a,f-h,m-p,S-v).normalize(),n[1].setComponents(c+a,f+h,m+p,S+v).normalize(),n[2].setComponents(c+o,f+d,m+x,S+M).normalize(),n[3].setComponents(c-o,f-d,m-x,S-M).normalize(),i)n[4].setComponents(l,u,g,_).normalize(),n[5].setComponents(c-l,f-u,m-g,S-_).normalize();else if(n[4].setComponents(c-l,f-u,m-g,S-_).normalize(),e===bi)n[5].setComponents(c+l,f+u,m+g,S+_).normalize();else if(e===rs)n[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){kn.center.set(0,0,0);const e=og.distanceTo(t.center);return kn.radius=.7071067811865476+e,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Oa.x=n.normal.x>0?t.max.x:t.min.x,Oa.y=n.normal.y>0?t.max.y:t.min.y,Oa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zu=new Zt;class bl{constructor(){this.coordinateSystem=bi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const s=e[n];Zu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new os),i[n].setFromProjectionMatrix(Zu,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new os),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new bl().copy(this)}}function gc(r,t){return r-t}function lg(r,t){return r.z-t.z}function cg(r,t){return t.z-r.z}class hg{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,i,n){const s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}}const ui=new Zt,ug=new ct(1,1,1),dg=new os,fg=new bl,Ba=new Ze,Vn=new We,Mr=new C,Ku=new C,pg=new C,xc=new hg,Qe=new ve,za=[];function mg(r,t,e=0){const i=t.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==t.array.constructor){const n=r.count;for(let s=0;s<n;s++)for(let a=0;a<i;a++)t.setComponent(s+e,a,r.getComponent(s,a))}else t.array.set(r.array,e*i);t.needsUpdate=!0}function Gn(r,t){if(r.constructor!==t.constructor){const e=Math.min(r.length,t.length);for(let i=0;i<e;i++)t[i]=r[i]}else{const e=Math.min(r.length,t.length);t.set(new r.constructor(r.buffer,0,e))}}class ip extends ve{constructor(t,e,i=e*2,n){super(new Kt,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),i=new Xe(e,t,t,Le,oi);this._matricesTexture=i}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),i=new Xe(e,t,t,na,Pi);this._indirectTexture=i}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),i=new Xe(e,t,t,Le,oi);i.colorSpace=oe.workingColorSpace,this._colorsTexture=i}_initializeGeometry(t){const e=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in t.attributes){const a=t.getAttribute(s),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(i*l),d=new ue(h,l,c);e.setAttribute(s,d)}if(t.getIndex()!==null){const s=i>65535?new Uint32Array(n):new Uint16Array(n);e.setIndex(new ue(s,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in e.attributes){if(!t.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=t.getAttribute(i),s=e.getAttribute(i);if(n.itemSize!==s.itemSize||n.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let i=0,n=e.length;i<n;i++){if(e[i].active===!1)continue;const s=e[i].geometryIndex;this.getMatrixAt(i,ui),this.getBoundingBoxAt(s,Ba).applyMatrix4(ui),t.union(Ba)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new We);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let i=0,n=e.length;i<n;i++){if(e[i].active===!1)continue;const s=e[i].geometryIndex;this.getMatrixAt(i,ui),this.getBoundingSphereAt(s,Vn).applyMatrix4(ui),t.union(Vn)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const i={visible:!0,active:!0,geometryIndex:t};let n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(gc),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=i):(n=this._instanceInfo.length,this._instanceInfo.push(i));const s=this._matricesTexture;ui.identity().toArray(s.image.data,n*16),s.needsUpdate=!0;const a=this._colorsTexture;return a&&(ug.toArray(a.image.data,n*4),a.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(t,e=-1,i=-1){this._initializeGeometry(t),this._validateGeometry(t);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const a=t.getIndex();if(a!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?a.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(gc),l=this._availableGeometryIds.shift(),s[l]=n):(l=this._geometryCount,this._geometryCount++,s.push(n)),this.setGeometryAt(l,t),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const i=this.geometry,n=i.getIndex()!==null,s=i.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(n&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(const h in i.attributes){const d=e.getAttribute(h),u=i.getAttribute(h);mg(d,u,l);const f=d.itemSize;for(let p=d.count,x=c;p<x;p++){const g=l+p;for(let m=0;m<f;m++)u.setComponent(g,m,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(n){const h=o.indexStart,d=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let u=0;u<a.count;u++)s.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)s.setX(h+u,l);s.needsUpdate=!0,s.addUpdateRange(h,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const i=this._instanceInfo;for(let n=0,s=i.length;n<s;n++)i[n].active&&i[n].geometryIndex===t&&this.deleteInstance(n);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const i=this._geometryInfo,n=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),s=this.geometry;for(let a=0,o=i.length;a<o;a++){const l=n[a],c=i[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=s.index,p=f.array,x=t-d;for(let g=h;g<h+u;g++)p[g]=p[g]+x;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:d}=c,u=s.attributes;for(const f in u){const p=u[f],{array:x,itemSize:g}=p;x.copyWithin(t*g,h*g,(h+d)*g),p.addUpdateRange(t*g,d*g),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[t];if(n.boundingBox===null){const s=new Ze,a=i.index,o=i.attributes.position;for(let l=n.start,c=n.start+n.count;l<c;l++){let h=l;a&&(h=a.getX(h)),s.expandByPoint(Mr.fromBufferAttribute(o,h))}n.boundingBox=s}return e.copy(n.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[t];if(n.boundingSphere===null){const s=new We;this.getBoundingBoxAt(t,Ba),Ba.getCenter(s.center);const a=i.index,o=i.attributes.position;let l=0;for(let c=n.start,h=n.start+n.count;c<h;c++){let d=c;a&&(d=a.getX(d)),Mr.fromBufferAttribute(o,d),l=Math.max(l,s.center.distanceToSquared(Mr))}s.radius=Math.sqrt(l),n.boundingSphere=s}return e.copy(n.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const i=this._matricesTexture,n=this._matricesTexture.image.data;return e.toArray(n,t*16),i.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const i=this._geometryInfo[t];return e.vertexStart=i.vertexStart,e.vertexCount=i.vertexCount,e.reservedVertexCount=i.reservedVertexCount,e.indexStart=i.indexStart,e.indexCount=i.indexCount,e.reservedIndexCount=i.reservedIndexCount,e.start=i.start,e.count=i.count,e}setInstanceCount(t){const e=this._availableInstanceIds,i=this._instanceInfo;for(e.sort(gc);e[e.length-1]===i.length-1;)i.pop(),e.pop();if(t<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const n=new Int32Array(t),s=new Int32Array(t);Gn(this._multiDrawCounts,n),Gn(this._multiDrawStarts,s),this._multiDrawCounts=n,this._multiDrawStarts=s,this._maxInstanceCount=t;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Gn(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Gn(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Gn(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Kt,this._initializeGeometry(s));const a=this.geometry;s.index&&Gn(s.index.array,a.index.array);for(const o in s.attributes)Gn(s.attributes[o].array,a.attributes[o].array)}raycast(t,e){const i=this._instanceInfo,n=this._geometryInfo,s=this.matrixWorld,a=this.geometry;Qe.material=this.material,Qe.geometry.index=a.index,Qe.geometry.attributes=a.attributes,Qe.geometry.boundingBox===null&&(Qe.geometry.boundingBox=new Ze),Qe.geometry.boundingSphere===null&&(Qe.geometry.boundingSphere=new We);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,h=n[c];Qe.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Qe.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,Qe.geometry.boundingBox),this.getBoundingSphereAt(c,Qe.geometry.boundingSphere),Qe.raycast(t,za);for(let d=0,u=za.length;d<u;d++){const f=za[d];f.object=this,f.batchId=o,e.push(f)}za.length=0}Qe.material=null,Qe.geometry.index=null,Qe.geometry.attributes={},Qe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,i,n,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=n.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,o=n.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,x=p.image.data,g=i.isArrayCamera?fg:dg;f&&(i.isArrayCamera?g.setFromArrayCamera(i):(ui.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(ui,i.coordinateSystem,i.reversedDepth)));let m=0;if(this.sortObjects){ui.copy(this.matrixWorld).invert(),Mr.setFromMatrixPosition(i.matrixWorld).applyMatrix4(ui),Ku.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(ui);for(let _=0,S=c.length;_<S;_++)if(c[_].visible&&c[_].active){const w=c[_].geometryIndex;this.getMatrixAt(_,ui),this.getBoundingSphereAt(w,Vn).applyMatrix4(ui);let E=!1;if(f&&(E=!g.intersectsSphere(Vn)),!E){const y=u[w],A=pg.subVectors(Vn.center,Mr).dot(Ku);xc.push(y.start,y.count,A,_)}}const v=xc.list,M=this.customSort;M===null?v.sort(s.transparent?cg:lg):M.call(this,v,i);for(let _=0,S=v.length;_<S;_++){const w=v[_];h[m]=w.start*o*l,d[m]=w.count*l,x[m]=w.index,m++}xc.reset()}else for(let v=0,M=c.length;v<M;v++)if(c[v].visible&&c[v].active){const _=c[v].geometryIndex;let S=!1;if(f&&(this.getMatrixAt(v,ui),this.getBoundingSphereAt(_,Vn).applyMatrix4(ui),S=!g.intersectsSphere(Vn)),!S){const w=u[_];h[m]=w.start*o*l,d[m]=w.count*l,x[m]=v,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(t,e,i,n,s,a){this.onBeforeRender(t,null,n,s,a)}}class hi extends Ke{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jo=new C,Qo=new C,Ju=new Zt,Sr=new sr,ka=new We,vc=new C,$u=new C;class Dn extends de{constructor(t=new Kt,e=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)jo.fromBufferAttribute(e,n-1),Qo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=jo.distanceTo(Qo);t.setAttribute("lineDistance",new Et(i,1))}else pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(n),ka.radius+=s,t.ray.intersectsSphere(ka)===!1)return;Ju.copy(n).invert(),Sr.copy(t.ray).applyMatrix4(Ju);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){const m=h.getX(x),v=h.getX(x+1),M=Va(this,t,Sr,l,m,v,x);M&&e.push(M)}if(this.isLineLoop){const x=h.getX(p-1),g=h.getX(f),m=Va(this,t,Sr,l,x,g,p-1);m&&e.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){const m=Va(this,t,Sr,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=Va(this,t,Sr,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Va(r,t,e,i,n,s,a){const o=r.geometry.attributes.position;if(jo.fromBufferAttribute(o,n),Qo.fromBufferAttribute(o,s),e.distanceSqToSegment(jo,Qo,vc,$u)>i)return;vc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(vc);if(!(c<t.near||c>t.far))return{distance:c,point:$u.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const ju=new C,Qu=new C;class Qi extends Dn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)ju.fromBufferAttribute(e,n),Qu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ju.distanceTo(Qu);t.setAttribute("lineDistance",new Et(i,1))}else pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class np extends Dn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Uh extends Ke{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const td=new Zt,jc=new sr,Ga=new We,Ha=new C;class sp extends de{constructor(t=new Kt,e=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(n),Ga.radius+=s,t.ray.intersectsSphere(Ga)===!1)return;td.copy(n).invert(),jc.copy(t.ray).applyMatrix4(td);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){const g=c.getX(p);Ha.fromBufferAttribute(d,g),ed(Ha,g,l,n,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)Ha.fromBufferAttribute(d,p),ed(Ha,p,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ed(r,t,e,i,n,s,a){const o=jc.distanceSqToPoint(r);if(o<e){const l=new C;jc.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class rp extends Ce{constructor(t,e,i,n,s=fe,a=fe,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class gg extends rp{constructor(t,e,i,n,s,a,o,l){super({},t,e,i,n,s,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class xg extends Ce{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=we,this.minFilter=we,this.generateMipmaps=!1,this.needsUpdate=!0}}class wl extends Ce{constructor(t,e,i,n,s,a,o,l,c,h,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isCompressedTexture=!0,this.image={width:e,height:i},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class vg extends wl{constructor(t,e,i,n,s,a){super(t,e,i,s,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=qe,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _g extends wl{constructor(t,e,i){super(void 0,t[0].width,t[0].height,e,i,$i),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class aa extends Ce{constructor(t=[],e=$i,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yg extends Ce{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mg extends Ce{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}}class tr extends Ce{constructor(t,e,i=Pi,n,s,a,o=we,l=we,c,h=ji,d=1){if(h!==ji&&h!==Cn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new un(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class ap extends tr{constructor(t,e=Pi,i=$i,n,s,a=we,o=we,l,c=ji){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fh extends Ce{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cs extends Kt{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2));function p(x,g,m,v,M,_,S,w,E,y,A){const R=_/E,I=S/y,D=_/2,B=S/2,L=w/2,O=E+1,G=y+1;let W=0,tt=0;const X=new C;for(let K=0;K<G;K++){const J=K*I-B;for(let wt=0;wt<O;wt++){const mt=wt*R-D;X[x]=mt*v,X[g]=J*M,X[m]=L,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[m]=w>0?1:-1,h.push(X.x,X.y,X.z),d.push(wt/E),d.push(1-K/y),W+=1}}for(let K=0;K<y;K++)for(let J=0;J<E;J++){const wt=u+J+O*K,mt=u+J+O*(K+1),Yt=u+(J+1)+O*(K+1),kt=u+(J+1)+O*K;l.push(wt,mt,kt),l.push(mt,Yt,kt),tt+=6}o.addGroup(f,tt,A),f+=tt,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Al extends Kt{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=i*2+s,x=n+1,g=new C,m=new C;for(let v=0;v<=p;v++){let M=0,_=0,S=0,w=0;if(v<=i){const A=v/i,R=A*Math.PI/2;_=-h-t*Math.cos(R),S=t*Math.sin(R),w=-t*Math.cos(R),M=A*d}else if(v<=i+s){const A=(v-i)/s;_=-h+A*e,S=t,w=0,M=d+A*u}else{const A=(v-i-s)/i,R=A*Math.PI/2;_=h+t*Math.sin(R),S=t*Math.cos(R),w=t*Math.sin(R),M=d+u+A*d}const E=Math.max(0,Math.min(1,M/f));let y=0;v===0?y=.5/n:v===p&&(y=-.5/n);for(let A=0;A<=n;A++){const R=A/n,I=R*Math.PI*2,D=Math.sin(I),B=Math.cos(I);m.x=-S*B,m.y=_,m.z=S*D,o.push(m.x,m.y,m.z),g.set(-S*B,w,S*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+y,E)}if(v>0){const A=(v-1)*x;for(let R=0;R<n;R++){const I=A+R,D=A+R+1,B=v*x+R,L=v*x+R+1;a.push(I,D,B),a.push(D,L,B)}}}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Tl extends Kt{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new C,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oa extends Kt{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],f=[];let p=0;const x=[],g=i/2;let m=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(f,2));function v(){const _=new C,S=new C;let w=0;const E=(e-t)/i;for(let y=0;y<=s;y++){const A=[],R=y/s,I=R*(e-t)+t;for(let D=0;D<=n;D++){const B=D/n,L=B*l+o,O=Math.sin(L),G=Math.cos(L);S.x=I*O,S.y=-R*i+g,S.z=I*G,d.push(S.x,S.y,S.z),_.set(O,E,G).normalize(),u.push(_.x,_.y,_.z),f.push(B,1-R),A.push(p++)}x.push(A)}for(let y=0;y<n;y++)for(let A=0;A<s;A++){const R=x[A][y],I=x[A+1][y],D=x[A+1][y+1],B=x[A][y+1];(t>0||A!==0)&&(h.push(R,I,B),w+=3),(e>0||A!==s-1)&&(h.push(I,D,B),w+=3)}c.addGroup(m,w,0),m+=w}function M(_){const S=p,w=new Q,E=new C;let y=0;const A=_===!0?t:e,R=_===!0?1:-1;for(let D=1;D<=n;D++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),p++;const I=p;for(let D=0;D<=n;D++){const L=D/n*l+o,O=Math.cos(L),G=Math.sin(L);E.x=A*G,E.y=g*R,E.z=A*O,d.push(E.x,E.y,E.z),u.push(0,R,0),w.x=O*.5+.5,w.y=G*.5*R+.5,f.push(w.x,w.y),p++}for(let D=0;D<n;D++){const B=S+D,L=I+D;_===!0?h.push(L,L+1,B):h.push(L+1,L,B),y+=3}c.addGroup(m,y,_===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class la extends oa{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new la(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nn extends Kt{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const M=new C,_=new C,S=new C;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],_),f(e[w+2],S),l(M,_,S,v)}function l(v,M,_,S){const w=S+1,E=[];for(let y=0;y<=w;y++){E[y]=[];const A=v.clone().lerp(_,y/w),R=M.clone().lerp(_,y/w),I=w-y;for(let D=0;D<=I;D++)D===0&&y===w?E[y][D]=A:E[y][D]=A.clone().lerp(R,D/I)}for(let y=0;y<w;y++)for(let A=0;A<2*(w-y)-1;A++){const R=Math.floor(A/2);A%2===0?(u(E[y][R+1]),u(E[y+1][R]),u(E[y][R])):(u(E[y][R+1]),u(E[y+1][R+1]),u(E[y+1][R]))}}function c(v){const M=new C;for(let _=0;_<s.length;_+=3)M.x=s[_+0],M.y=s[_+1],M.z=s[_+2],M.normalize().multiplyScalar(v),s[_+0]=M.x,s[_+1]=M.y,s[_+2]=M.z}function h(){const v=new C;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];const _=g(v)/2/Math.PI+.5,S=m(v)/Math.PI+.5;a.push(_,1-S)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){const M=a[v+0],_=a[v+2],S=a[v+4],w=Math.max(M,_,S),E=Math.min(M,_,S);w>.9&&E<.1&&(M<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function f(v,M){const _=v*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function p(){const v=new C,M=new C,_=new C,S=new C,w=new Q,E=new Q,y=new Q;for(let A=0,R=0;A<s.length;A+=9,R+=6){v.set(s[A+0],s[A+1],s[A+2]),M.set(s[A+3],s[A+4],s[A+5]),_.set(s[A+6],s[A+7],s[A+8]),w.set(a[R+0],a[R+1]),E.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),S.copy(v).add(M).add(_).divideScalar(3);const I=g(S);x(w,R+0,v,I),x(E,R+2,M,I),x(y,R+4,_,I)}}function x(v,M,_,S){S<0&&v.x===1&&(a[M]=v.x-1),_.x===0&&_.z===0&&(a[M]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.vertices,t.indices,t.radius,t.detail)}}class El extends Nn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new El(t.radius,t.detail)}}const Wa=new C,Xa=new C,_c=new C,qa=new gi;class op extends Kt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),s=Math.cos(is*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:g,c:m}=qa;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),qa.getNormal(_c),d[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,d[1]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,d[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const M=(v+1)%3,_=d[v],S=d[M],w=qa[h[v]],E=qa[h[M]],y=`${_}_${S}`,A=`${S}_${_}`;A in u&&u[A]?(_c.dot(u[A].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(E.x,E.y,E.z)),u[A]=null):y in u||(u[y]={index0:c[v],index1:c[M],normal:_c.clone()})}}for(const p in u)if(u[p]){const{index0:x,index1:g}=u[p];Wa.fromBufferAttribute(o,x),Xa.fromBufferAttribute(o,g),f.push(Wa.x,Wa.y,Wa.z),f.push(Xa.x,Xa.y,Xa.z)}this.setAttribute("position",new Et(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Hi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],u=i[n+1]-h,f=(a-h)/u;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new Q:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new C,n=[],s=[],a=[],o=new C,l=new Zt;for(let f=0;f<=t;f++){const p=f/t;n[f]=this.getTangentAt(p,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Wt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Wt(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cl extends Hi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Q){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lp extends Cl{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Oh(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,n(a,o,u,f)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+i*o}}}const id=new C,nd=new C,yc=new Oh,Mc=new Oh,Sc=new Oh;class cp extends Hi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){const i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(nd.subVectors(n[0],n[1]).add(n[0]),c=nd);const d=n[o%s],u=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(id.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=id),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),yc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),Mc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),Sc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Mc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Sc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(yc.calc(l),Mc.calc(l),Sc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sd(r,t,e,i,n){const s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function Sg(r,t){const e=1-r;return e*e*t}function bg(r,t){return 2*(1-r)*r*t}function wg(r,t){return r*r*t}function Br(r,t,e,i){return Sg(r,t)+bg(r,e)+wg(r,i)}function Ag(r,t){const e=1-r;return e*e*e*t}function Tg(r,t){const e=1-r;return 3*e*e*r*t}function Eg(r,t){return 3*(1-r)*r*r*t}function Cg(r,t){return r*r*r*t}function zr(r,t,e,i,n){return Ag(r,t)+Tg(r,e)+Eg(r,i)+Cg(r,n)}class Bh extends Hi{constructor(t=new Q,e=new Q,i=new Q,n=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new Q){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(zr(t,n.x,s.x,a.x,o.x),zr(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hp extends Hi{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(zr(t,n.x,s.x,a.x,o.x),zr(t,n.y,s.y,a.y,o.y),zr(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zh extends Hi{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class up extends Hi{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends Hi{constructor(t=new Q,e=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Q){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Br(t,n.x,s.x,a.x),Br(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends Hi{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Br(t,n.x,s.x,a.x),Br(t,n.y,s.y,a.y),Br(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gh extends Hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(sd(o,l.x,c.x,h.x,d.x),sd(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new Q().fromArray(n))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:lp,CatmullRomCurve3:cp,CubicBezierCurve:Bh,CubicBezierCurve3:hp,EllipseCurve:Cl,LineCurve:zh,LineCurve3:up,QuadraticBezierCurve:kh,QuadraticBezierCurve3:Vh,SplineCurve:Gh});class dp extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new tl[n.type]().fromJSON(n))}return this}}class Jr extends dp{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new zh(this.currentPoint.clone(),new Q(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new kh(this.currentPoint.clone(),new Q(t,e),new Q(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){const o=new Bh(this.currentPoint.clone(),new Q(t,e),new Q(i,n),new Q(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Gh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){const c=new Cl(t,e,i,n,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ca extends Jr{constructor(t){super(t),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Jr().fromJSON(n))}return this}}function Rg(r,t,e=2){const i=t&&t.length,n=i?t[0]*e:r.length;let s=fp(r,0,n,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Ng(r,t,s,e)),r.length>80*e){o=r[0],l=r[1];let h=o,d=l;for(let u=e;u<n;u+=e){const f=r[u],p=r[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return $r(s,a,e,o,l,c,0),a}function fp(r,t,e,i,n){let s;if(n===Xg(r,t,e,i)>0)for(let a=t;a<e;a+=i)s=rd(a/i|0,r[a],r[a+1],s);else for(let a=e-i;a>=t;a-=i)s=rd(a/i|0,r[a],r[a+1],s);return s&&er(s,s.next)&&(Qr(s),s=s.next),s}function ls(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(er(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Qr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function $r(r,t,e,i,n,s,a){if(!r)return;!a&&s&&zg(r,i,n,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Ig(r,i,n,s):Pg(r)){t.push(l.i,r.i,c.i),Qr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Lg(ls(r),t),$r(r,t,e,i,n,s,2)):a===2&&Dg(r,t,e,i,n,s):$r(ls(r),t,e,i,n,s,1);break}}}function Pg(r){const t=r.prev,e=r,i=r.next;if(Ee(t,e,i)>=0)return!1;const n=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(n,s,a),d=Math.min(o,l,c),u=Math.max(n,s,a),f=Math.max(o,l,c);let p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Er(n,o,s,l,a,c,p.x,p.y)&&Ee(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ig(r,t,e,i){const n=r.prev,s=r,a=r.next;if(Ee(n,s,a)>=0)return!1;const o=n.x,l=s.x,c=a.x,h=n.y,d=s.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),g=Math.max(h,d,u),m=Qc(f,p,t,e,i),v=Qc(x,g,t,e,i);let M=r.prevZ,_=r.nextZ;for(;M&&M.z>=m&&_&&_.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&Er(o,h,l,d,c,u,M.x,M.y)&&Ee(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==n&&_!==a&&Er(o,h,l,d,c,u,_.x,_.y)&&Ee(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&Er(o,h,l,d,c,u,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==n&&_!==a&&Er(o,h,l,d,c,u,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Lg(r,t){let e=r;do{const i=e.prev,n=e.next.next;!er(i,n)&&mp(i,e,e.next,n)&&jr(i,n)&&jr(n,i)&&(t.push(i.i,e.i,n.i),Qr(e),Qr(e.next),e=r=n),e=e.next}while(e!==r);return ls(e)}function Dg(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gg(a,o)){let l=gp(a,o);a=ls(a,a.next),l=ls(l,l.next),$r(a,t,e,i,n,s,0),$r(l,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Ng(r,t,e,i){const n=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*i,l=s<a-1?t[s+1]*i:r.length,c=fp(r,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Vg(c))}n.sort(Ug);for(let s=0;s<n.length;s++)e=Fg(n[s],e);return e}function Ug(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Fg(r,t){const e=Og(r,t);if(!e)return t;const i=gp(e,r);return ls(i,i.next),ls(e,e.next)}function Og(r,t){let e=t;const i=r.x,n=r.y;let s=-1/0,a;if(er(r,e))return e;do{if(er(r,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const d=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>s&&(s=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&pp(n<c?i:s,n,l,c,n<c?s:i,n,e.x,e.y)){const d=Math.abs(n-e.y)/(i-e.x);jr(e,r)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Bg(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Bg(r,t){return Ee(r.prev,r,t.prev)<0&&Ee(t.next,r,r.next)<0}function zg(r,t,e,i){let n=r;do n.z===0&&(n.z=Qc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,kg(n)}function kg(r){let t,e=1;do{let i=r,n;r=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=a}s.nextZ=null,e*=2}while(t>1);return r}function Qc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Vg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function pp(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function Er(r,t,e,i,n,s,a,o){return!(r===a&&t===o)&&pp(r,t,e,i,n,s,a,o)}function Gg(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Hg(r,t)&&(jr(r,t)&&jr(t,r)&&Wg(r,t)&&(Ee(r.prev,r,t.prev)||Ee(r,t.prev,t))||er(r,t)&&Ee(r.prev,r,r.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function er(r,t){return r.x===t.x&&r.y===t.y}function mp(r,t,e,i){const n=Za(Ee(r,t,e)),s=Za(Ee(r,t,i)),a=Za(Ee(e,i,r)),o=Za(Ee(e,i,t));return!!(n!==s&&a!==o||n===0&&Ya(r,e,t)||s===0&&Ya(r,i,t)||a===0&&Ya(e,r,i)||o===0&&Ya(e,t,i))}function Ya(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Za(r){return r>0?1:r<0?-1:0}function Hg(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&mp(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function jr(r,t){return Ee(r.prev,r,r.next)<0?Ee(r,t,r.next)>=0&&Ee(r,r.prev,t)>=0:Ee(r,t,r.prev)<0||Ee(r,r.next,t)<0}function Wg(r,t){let e=r,i=!1;const n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function gp(r,t){const e=th(r.i,r.x,r.y),i=th(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function rd(r,t,e,i){const n=th(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Qr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function th(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xg(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}class qg{static triangulate(t,e,i=2){return Rg(t,e,i)}}class ki{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return ki.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];ad(t),od(i,t);let a=t.length;e.forEach(ad);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,od(i,e[l]);const o=qg.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ad(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function od(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Rl extends Kt{constructor(t=new ca([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Et(n,3)),this.setAttribute("uv",new Et(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Yg;let M,_=!1,S,w,E,y;if(m){M=m.getSpacedPoints(h),_=!0,u=!1;const st=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,st),w=new C,E=new C,y=new C}u||(g=0,f=0,p=0,x=0);const A=o.extractPoints(c);let R=A.shape;const I=A.holes;if(!ki.isClockWise(R)){R=R.reverse();for(let st=0,at=I.length;st<at;st++){const ot=I[st];ki.isClockWise(ot)&&(I[st]=ot.reverse())}}function B(st){const ot=10000000000000001e-36;let lt=st[0];for(let dt=1;dt<=st.length;dt++){const Gt=dt%st.length,zt=st[Gt],qt=zt.x-lt.x,$t=zt.y-lt.y,N=qt*qt+$t*$t,pe=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(lt.x),Math.abs(lt.y)),re=ot*pe*pe;if(N<=re){st.splice(Gt,1),dt--;continue}lt=zt}}B(R),I.forEach(B);const L=I.length,O=R;for(let st=0;st<L;st++){const at=I[st];R=R.concat(at)}function G(st,at,ot){return at||Nt("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(at,ot)}const W=R.length;function tt(st,at,ot){let lt,dt,Gt;const zt=st.x-at.x,qt=st.y-at.y,$t=ot.x-st.x,N=ot.y-st.y,pe=zt*zt+qt*qt,re=zt*N-qt*$t;if(Math.abs(re)>Number.EPSILON){const P=Math.sqrt(pe),b=Math.sqrt($t*$t+N*N),z=at.x-qt/P,H=at.y+zt/P,$=ot.x-N/b,ht=ot.y+$t/b,ut=(($-z)*N-(ht-H)*$t)/(zt*N-qt*$t);lt=z+zt*ut-st.x,dt=H+qt*ut-st.y;const j=lt*lt+dt*dt;if(j<=2)return new Q(lt,dt);Gt=Math.sqrt(j/2)}else{let P=!1;zt>Number.EPSILON?$t>Number.EPSILON&&(P=!0):zt<-Number.EPSILON?$t<-Number.EPSILON&&(P=!0):Math.sign(qt)===Math.sign(N)&&(P=!0),P?(lt=-qt,dt=zt,Gt=Math.sqrt(pe)):(lt=zt,dt=qt,Gt=Math.sqrt(pe/2))}return new Q(lt/Gt,dt/Gt)}const X=[];for(let st=0,at=O.length,ot=at-1,lt=st+1;st<at;st++,ot++,lt++)ot===at&&(ot=0),lt===at&&(lt=0),X[st]=tt(O[st],O[ot],O[lt]);const K=[];let J,wt=X.concat();for(let st=0,at=L;st<at;st++){const ot=I[st];J=[];for(let lt=0,dt=ot.length,Gt=dt-1,zt=lt+1;lt<dt;lt++,Gt++,zt++)Gt===dt&&(Gt=0),zt===dt&&(zt=0),J[lt]=tt(ot[lt],ot[Gt],ot[zt]);K.push(J),wt=wt.concat(J)}let mt;if(g===0)mt=ki.triangulateShape(O,I);else{const st=[],at=[];for(let ot=0;ot<g;ot++){const lt=ot/g,dt=f*Math.cos(lt*Math.PI/2),Gt=p*Math.sin(lt*Math.PI/2)+x;for(let zt=0,qt=O.length;zt<qt;zt++){const $t=G(O[zt],X[zt],Gt);gt($t.x,$t.y,-dt),lt===0&&st.push($t)}for(let zt=0,qt=L;zt<qt;zt++){const $t=I[zt];J=K[zt];const N=[];for(let pe=0,re=$t.length;pe<re;pe++){const P=G($t[pe],J[pe],Gt);gt(P.x,P.y,-dt),lt===0&&N.push(P)}lt===0&&at.push(N)}}mt=ki.triangulateShape(st,at)}const Yt=mt.length,kt=p+x;for(let st=0;st<W;st++){const at=u?G(R[st],wt[st],kt):R[st];_?(E.copy(S.normals[0]).multiplyScalar(at.x),w.copy(S.binormals[0]).multiplyScalar(at.y),y.copy(M[0]).add(E).add(w),gt(y.x,y.y,y.z)):gt(at.x,at.y,0)}for(let st=1;st<=h;st++)for(let at=0;at<W;at++){const ot=u?G(R[at],wt[at],kt):R[at];_?(E.copy(S.normals[st]).multiplyScalar(ot.x),w.copy(S.binormals[st]).multiplyScalar(ot.y),y.copy(M[st]).add(E).add(w),gt(y.x,y.y,y.z)):gt(ot.x,ot.y,d/h*st)}for(let st=g-1;st>=0;st--){const at=st/g,ot=f*Math.cos(at*Math.PI/2),lt=p*Math.sin(at*Math.PI/2)+x;for(let dt=0,Gt=O.length;dt<Gt;dt++){const zt=G(O[dt],X[dt],lt);gt(zt.x,zt.y,d+ot)}for(let dt=0,Gt=I.length;dt<Gt;dt++){const zt=I[dt];J=K[dt];for(let qt=0,$t=zt.length;qt<$t;qt++){const N=G(zt[qt],J[qt],lt);_?gt(N.x,N.y+M[h-1].y,M[h-1].x+ot):gt(N.x,N.y,d+ot)}}}le(),Z();function le(){const st=n.length/3;if(u){let at=0,ot=W*at;for(let lt=0;lt<Yt;lt++){const dt=mt[lt];Vt(dt[2]+ot,dt[1]+ot,dt[0]+ot)}at=h+g*2,ot=W*at;for(let lt=0;lt<Yt;lt++){const dt=mt[lt];Vt(dt[0]+ot,dt[1]+ot,dt[2]+ot)}}else{for(let at=0;at<Yt;at++){const ot=mt[at];Vt(ot[2],ot[1],ot[0])}for(let at=0;at<Yt;at++){const ot=mt[at];Vt(ot[0]+W*h,ot[1]+W*h,ot[2]+W*h)}}i.addGroup(st,n.length/3-st,0)}function Z(){const st=n.length/3;let at=0;it(O,at),at+=O.length;for(let ot=0,lt=I.length;ot<lt;ot++){const dt=I[ot];it(dt,at),at+=dt.length}i.addGroup(st,n.length/3-st,1)}function it(st,at){let ot=st.length;for(;--ot>=0;){const lt=ot;let dt=ot-1;dt<0&&(dt=st.length-1);for(let Gt=0,zt=h+g*2;Gt<zt;Gt++){const qt=W*Gt,$t=W*(Gt+1),N=at+lt+qt,pe=at+dt+qt,re=at+dt+$t,P=at+lt+$t;At(N,pe,re,P)}}}function gt(st,at,ot){l.push(st),l.push(at),l.push(ot)}function Vt(st,at,ot){Xt(st),Xt(at),Xt(ot);const lt=n.length/3,dt=v.generateTopUV(i,n,lt-3,lt-2,lt-1);_e(dt[0]),_e(dt[1]),_e(dt[2])}function At(st,at,ot,lt){Xt(st),Xt(at),Xt(lt),Xt(at),Xt(ot),Xt(lt);const dt=n.length/3,Gt=v.generateSideWallUV(i,n,dt-6,dt-3,dt-2,dt-1);_e(Gt[0]),_e(Gt[1]),_e(Gt[3]),_e(Gt[1]),_e(Gt[2]),_e(Gt[3])}function Xt(st){n.push(l[st*3+0]),n.push(l[st*3+1]),n.push(l[st*3+2])}function _e(st){s.push(st.x),s.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Zg(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new tl[n.type]().fromJSON(n)),new Rl(i,t.options)}}const Yg={generateTopUV:function(r,t,e,i,n){const s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new Q(s,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(r,t,e,i,n,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-d),new Q(u,1-p),new Q(x,1-m)]:[new Q(o,1-l),new Q(h,1-d),new Q(f,1-p),new Q(g,1-m)]}};function Zg(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){const s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Pl extends Nn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pl(t.radius,t.detail)}}class Il extends Kt{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Wt(n,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/e,d=new C,u=new Q,f=new C,p=new C,x=new C;let g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=e;v++){const M=i+v*h*n,_=Math.sin(M),S=Math.cos(M);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*_,d.y=t[w].y,d.z=t[w].x*S,a.push(d.x,d.y,d.z),u.x=v/e,u.y=w/(t.length-1),o.push(u.x,u.y);const E=l[3*w+0]*_,y=l[3*w+1],A=l[3*w+0]*S;c.push(E,y,A)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const _=M+v*t.length,S=_,w=_+t.length,E=_+t.length+1,y=_+1;s.push(S,w,y),s.push(E,y,w)}this.setIndex(s),this.setAttribute("position",new Et(a,3)),this.setAttribute("uv",new Et(o,2)),this.setAttribute("normal",new Et(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.points,t.segments,t.phiStart,t.phiLength)}}class ha extends Nn{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ha(t.radius,t.detail)}}class hs extends Kt{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){const v=m*u-a;for(let M=0;M<c;M++){const _=M*d-s;p.push(_,-v,0),x.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const M=v+c*m,_=v+c*(m+1),S=v+1+c*(m+1),w=v+1+c*m;f.push(M,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ll extends Kt{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/n,f=new C,p=new Q;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){const m=s+g/i*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<n;x++){const g=x*(i+1);for(let m=0;m<i;m++){const v=m+g,M=v,_=v+i+1,S=v+i+2,w=v+1;o.push(M,_,w),o.push(_,S,w)}}this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Dl extends Kt{constructor(t=new ca([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Et(n,3)),this.setAttribute("normal",new Et(s,3)),this.setAttribute("uv",new Et(a,2));function c(h){const d=n.length/3,u=h.extractPoints(e);let f=u.shape;const p=u.holes;ki.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];ki.isClockWise(v)===!0&&(p[g]=v.reverse())}const x=ki.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){const v=f[g];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){const v=x[g],M=v[0]+d,_=v[1]+d,S=v[2]+d;i.push(M,_,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Kg(e,t)}static fromJSON(t,e){const i=[];for(let n=0,s=t.shapes.length;n<s;n++){const a=e[t.shapes[n]];i.push(a)}return new Dl(i,t.curveSegments)}}function Kg(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,i=r.length;e<i;e++){const n=r[e];t.shapes.push(n.uuid)}else t.shapes.push(r.uuid);return t}class us extends Kt{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new C,u=new C,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){const v=[],M=m/i,_=a+M*o,S=t*Math.cos(_),w=Math.sqrt(t*t-S*S);let E=0;m===0&&a===0?E=.5/e:m===i&&l===Math.PI&&(E=-.5/e);for(let y=0;y<=e;y++){const A=y/e,R=n+A*s;d.x=-w*Math.cos(R),d.y=S,d.z=w*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(A+E,1-M),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){const M=h[m][v+1],_=h[m][v],S=h[m+1][v],w=h[m+1][v+1];(m!==0||a>0)&&f.push(M,_,w),(m!==i-1||l<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nl extends Nn{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Nl(t.radius,t.detail)}}class Ul extends Kt{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],d=[],u=new C,f=new C,p=new C;for(let x=0;x<=i;x++){const g=a+x/i*o;for(let m=0;m<=n;m++){const v=m/n*s;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=n;g++){const m=(n+1)*x+g-1,v=(n+1)*(x-1)+g-1,M=(n+1)*(x-1)+g,_=(n+1)*x+g;l.push(m,v,_),l.push(v,M,_)}this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Fl extends Kt{constructor(t=1,e=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],c=[],h=[],d=new C,u=new C,f=new C,p=new C,x=new C,g=new C,m=new C;for(let M=0;M<=i;++M){const _=M/i*s*Math.PI*2;v(_,s,a,t,f),v(_+.01,s,a,t,p),g.subVectors(p,f),m.addVectors(p,f),x.crossVectors(g,m),m.crossVectors(x,g),x.normalize(),m.normalize();for(let S=0;S<=n;++S){const w=S/n*Math.PI*2,E=-e*Math.cos(w),y=e*Math.sin(w);d.x=f.x+(E*m.x+y*x.x),d.y=f.y+(E*m.y+y*x.y),d.z=f.z+(E*m.z+y*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(M/i),h.push(S/n)}}for(let M=1;M<=i;M++)for(let _=1;_<=n;_++){const S=(n+1)*(M-1)+(_-1),w=(n+1)*M+(_-1),E=(n+1)*M+_,y=(n+1)*(M-1)+_;o.push(S,w,y),o.push(w,E,y)}this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2));function v(M,_,S,w,E){const y=Math.cos(M),A=Math.sin(M),R=S/_*M,I=Math.cos(R);E.x=w*(2+I)*.5*y,E.y=w*(2+I)*A*.5,E.z=w*Math.sin(R)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Ol extends Kt{constructor(t=new Vh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new Q;let h=new C;const d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(f,2));function x(){for(let M=0;M<e;M++)g(M);g(s===!1?e:0),v(),m()}function g(M){h=t.getPointAt(M/e,h);const _=a.normals[M],S=a.binormals[M];for(let w=0;w<=n;w++){const E=w/n*Math.PI*2,y=Math.sin(E),A=-Math.cos(E);l.x=A*_.x+y*S.x,l.y=A*_.y+y*S.y,l.z=A*_.z+y*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=e;M++)for(let _=1;_<=n;_++){const S=(n+1)*(M-1)+(_-1),w=(n+1)*M+(_-1),E=(n+1)*M+_,y=(n+1)*(M-1)+_;p.push(S,w,y),p.push(w,E,y)}}function v(){for(let M=0;M<=e;M++)for(let _=0;_<=n;_++)c.x=M/e,c.y=_/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ol(new tl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class xp extends Kt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,n=new C,s=new C;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),v=o.getX(p+(g+1)%3);n.fromBufferAttribute(a,m),s.fromBufferAttribute(a,v),ld(n,s,i)===!0&&(e.push(n.x,n.y,n.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),ld(n,s,i)===!0&&(e.push(n.x,n.y,n.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Et(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function ld(r,t,e){const i=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,n=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(i)===!0||e.has(n)===!0?!1:(e.add(i),e.add(n),!0)}var cd=Object.freeze({__proto__:null,BoxGeometry:cs,CapsuleGeometry:Al,CircleGeometry:Tl,ConeGeometry:la,CylinderGeometry:oa,DodecahedronGeometry:El,EdgesGeometry:op,ExtrudeGeometry:Rl,IcosahedronGeometry:Pl,LatheGeometry:Il,OctahedronGeometry:ha,PlaneGeometry:hs,PolyhedronGeometry:Nn,RingGeometry:Ll,ShapeGeometry:Dl,SphereGeometry:us,TetrahedronGeometry:Nl,TorusGeometry:Ul,TorusKnotGeometry:Fl,TubeGeometry:Ol,WireframeGeometry:xp});class vp extends Ke{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ct(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function ir(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];if(hd(n))n.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(hd(n[0])){const s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ri(r){const t={};for(let e=0;e<r.length;e++){const i=ir(r[e]);for(const n in i)t[n]=i[n]}return t}function hd(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Jg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function _p(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const ua={clone:ir,merge:ri};var $g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ue extends Ke{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$g,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=Jg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ct().setHex(n.value);break;case"v2":this.uniforms[i].value=new Q().fromArray(n.value);break;case"v3":this.uniforms[i].value=new C().fromArray(n.value);break;case"v4":this.uniforms[i].value=new se().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Zt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Hh extends Ue{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bl extends Ke{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mn,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yp extends Bl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Mp extends Ke{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mn,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=ia,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sp extends Ke{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mn,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class bp extends Ke{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mn,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class wp extends Ke{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mn,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=ia,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wh extends Ke{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xh extends Ke{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ap extends Ke{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ct(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mn,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tp extends hi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Bi(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function kr(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Ep(r){function t(n,s){return r[n]-r[s]}const e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function eh(r,t,e){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=e[s]*t;for(let l=0;l!==t;++l)n[a++]=r[o+l]}return n}function Cp(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push(...a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}function Qg(r,t,e,i,n=30){const s=r.clone();s.name=t;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*n;if(!(p<e||p>=i)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=Bi(d,c.times.constructor),c.values=Bi(u,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function tx(r,t=0,e=r,i=30){i<=0&&(i=30);const n=e.tracks.length,s=t/i;for(let a=0;a<n;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=o.times.length-1;let x;if(s<=o.times[0]){const m=h,v=d-h;x=o.values.slice(m,v)}else if(s>=o.times[p]){const m=p*d+h,v=m+d-h;x=o.values.slice(m,v)}else{const m=o.createInterpolant(),v=h,M=d-h;m.evaluate(s),x=m.resultBuffer.slice(v,M)}l==="quaternion"&&new li().fromArray(x).normalize().conjugate().toArray(x);const g=c.times.length;for(let m=0;m<g;++m){const v=m*f+u;if(l==="quaternion")li.multiplyQuaternionsFlat(c.values,v,x,0,c.values,v);else{const M=f-u*2;for(let _=0;_<M;++_)c.values[v+_]-=x[_]}}}return r.blendMode=Eh,r}class ex{static convertArray(t,e){return Bi(t,e)}static isTypedArray(t){return qf(t)}static hasTangents(t){return kr(t)}static getKeyframeOrder(t){return Ep(t)}static sortedArray(t,e,i){return eh(t,e,i)}static flattenJSON(t,e,i,n){Cp(t,e,i,n)}static subclip(t,e,i,n,s=30){return Qg(t,e,i,n,s)}static makeClipAdditive(t,e=0,i=t,n=30){return tx(t,e,i,n)}}class rr{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let a;i:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break e}a=e.length;break i}if(!(t>=s)){const o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break e}a=i,i=0;break i}break t}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Rp extends rr{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jn,endingEnd:jn}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qn:s=t,o=2*e-i;break;case qr:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Qn:a=t,l=2*i-e;break;case qr:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}const c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,M=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let S=0;S!==o;++S)s[S]=m*a[h+S]+v*a[c+S]+M*a[l+S]+_*a[d+S];return s}}class qh extends rr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}}class Pp extends rr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ip extends rr{interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(i-e)/(n-e),x=1-p;for(let g=0;g!==o;++g)s[g]=a[c+g]*x+a[l+g]*p;return s}const u=o*2,f=t-1;for(let p=0;p!==o;++p){const x=a[c+p],g=a[l+p],m=f*u+p*2,v=d[m],M=d[m+1],_=t*u+p*2,S=h[_],w=h[_+1],E=nx(i,e,v,S,n);s[p]=Lp(E,x,M,w,g)}return s}}function Lp(r,t,e,i,n){const s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function ix(r,t,e,i,n){const s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function nx(r,t,e,i,n){let s=(r-t)/(n-t);for(let a=0;a<8;a++){const o=Lp(s,t,e,i,n)-r;if(Math.abs(o)<1e-10)break;const l=ix(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class Ii{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bi(e,this.TimeBufferType),this.values=Bi(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Bi(t.times,Array),values:Bi(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),kr(t.settings)&&(i.settings={inTangents:Bi(t.settings.inTangents,Array),outTangents:Bi(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Pp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Ip(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xr:e=this.InterpolantFactoryMethodDiscrete;break;case $o:e=this.InterpolantFactoryMethodLinear;break;case co:e=this.InterpolantFactoryMethodSmooth;break;case Kc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return pt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return co;case this.InterpolantFactoryMethodBezier:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;kr(this.settings)&&(ud(this.settings.inTangents,t),ud(this.settings.outTangents,t))}return this}trim(t,e){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Nt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&qf(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===co,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{const d=o*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){const x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,kr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}}function ud(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=$o;class ds extends Ii{constructor(t,e,i){super(t,e,i)}}ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Xr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Yh extends Ii{constructor(t,e,i,n){super(t,e,i,n)}}Yh.prototype.ValueTypeName="color";class zl extends Ii{constructor(t,e,i,n){super(t,e,i,n)}}zl.prototype.ValueTypeName="number";class Dp extends rr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e);let c=t*o;for(let h=c+o;c!==h;c+=4)li.slerpFlat(s,0,a,c-o,a,c,l);return s}}class kl extends Ii{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Dp(this.times,this.values,this.getValueSize(),t)}}kl.prototype.ValueTypeName="quaternion";kl.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Ii{constructor(t,e,i){super(t,e,i)}}fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Xr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Zh extends Ii{constructor(t,e,i,n){super(t,e,i,n)}}Zh.prototype.ValueTypeName="vector";class ta{constructor(t="",e=-1,i=[],n=fl){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=wi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(rx(i[a]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,a=i.length;s!==a;++s)e.push(Ii.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Ep(l);l=eh(l,1,h),c=eh(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new zl(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=n[d];u||(n[d]=u=[]),u.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function sx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zl;case"vector":case"vector2":case"vector3":case"vector4":return Zh;case"color":return Yh;case"quaternion":return kl;case"bool":case"boolean":return ds;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function rx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=sx(r.type);if(r.times===void 0){const i=[],n=[];Cp(r.keys,i,n,"value"),r.times=i,r.values=n}let e;return t.parse!==void 0?e=t.parse(r):e=new t(r.name,r.times,r.values,r.interpolation),kr(r.settings)&&(e.settings={inTangents:Bi(r.settings.inTangents,Float32Array),outTangents:Bi(r.settings.outTangents,Float32Array)}),e}const Ki={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(dd(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!dd(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function dd(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Kh{constructor(t,e,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Np=new Kh;class vi{constructor(t){this.manager=t!==void 0?t:Np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}vi.DEFAULT_MATERIAL_NAME="__DEFAULT";const an={};class ax extends Error{constructor(t,e){super(t),this.response=e}}class gn extends vi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ki.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(an[t]!==void 0){an[t].push({onLoad:e,onProgress:i,onError:n});return}an[t]=[],an[t].push({onLoad:e,onProgress:i,onError:n});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&pt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=an[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let x=0;const g=new ReadableStream({start(m){v();function v(){d.read().then(({done:M,value:_})=>{if(M)m.close();else{x+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let w=0,E=h.length;w<E;w++){const y=h[w];y.onProgress&&y.onProgress(S)}m.enqueue(_),v()}},M=>{m.error(M)})}}});return new Response(g)}else throw new ax(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ki.add(`file:${t}`,c);const h=an[t];delete an[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=an[t];if(h===void 0)throw this.manager.itemError(t),c;delete an[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ox extends vi{constructor(t){super(t)}load(t,e,i,n){const s=this,a=new gn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){n?n(l):Nt(l),s.manager.itemError(t)}},i,n)}parse(t){const e=[];for(let i=0;i<t.length;i++){const n=ta.parse(t[i]);e.push(n)}return e}}class lx extends vi{constructor(t){super(t)}load(t,e,i,n){const s=this,a=[],o=new wl,l=new gn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(d){l.load(t[d],function(u){const f=s.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=fe),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},i,n)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else l.load(t,function(d){const u=s.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=fe),o.format=u.format,o.needsUpdate=!0,e&&e(o)},i,n);return o}}const Is=new WeakMap;class ea extends vi{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ki.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let d=Is.get(a);d===void 0&&(d=[],Is.set(a,d)),d.push({onLoad:e,onError:n})}return a}const o=Zr("img");function l(){h(),e&&e(this);const d=Is.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Is.delete(this),s.manager.itemEnd(t)}function c(d){h(),n&&n(d),Ki.remove(`image:${t}`);const u=Is.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}Is.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ki.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class cx extends vi{constructor(t){super(t)}load(t,e,i,n){const s=new aa;s.colorSpace=pi;const a=new ea(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,n)}for(let c=0;c<t.length;++c)l(c);return s}}class hx extends vi{constructor(t){super(t)}load(t,e,i,n){const s=this,a=new Xe,o=new gn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(t,function(l){let c;try{c=s.parse(l)}catch(h){n!==void 0?n(h):Nt(h);return}s._applyTexData(a,c),e&&e(a,c)},i,n),a}createDataTexture(t){const e=new Xe;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:qe,t.wrapT=e.wrapT!==void 0?e.wrapT:qe,t.magFilter=e.magFilter!==void 0?e.magFilter:fe,t.minFilter=e.minFilter!==void 0?e.minFilter:fe,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=xi),e.mipmapCount===1&&(t.minFilter=fe),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class ux extends vi{constructor(t){super(t)}load(t,e,i,n){const s=new Ce,a=new ea(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}class Un extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Jh extends Un{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const bc=new Zt,fd=new C,pd=new C;class Vl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=Oe,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(fd),pd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(bc,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===rs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ka=new C,Ja=new li,qi=new C;class Gl extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ka,Ja,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Ja,qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ka,Ja,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Ja,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const An=new C,md=new Q,gd=new Q;class He extends Gl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,md,gd),e.subVectors(gd,md)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(is*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class dx extends Vl{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Qs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class $h extends Un{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new dx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class fx extends Vl{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0}}class el extends Un{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new fx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ar extends Gl{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class px extends Vl{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jh extends Un{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new px}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Up extends Un{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fp extends Un{constructor(t,e,i=10,n=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Qh{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new C)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const i=t.x,n=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*n),e.addScaledVector(a[2],.488603*s),e.addScaledVector(a[3],.488603*i),e.addScaledVector(a[4],1.092548*(i*n)),e.addScaledVector(a[5],1.092548*(n*s)),e.addScaledVector(a[6],.315392*(3*s*s-1)),e.addScaledVector(a[7],1.092548*(i*s)),e.addScaledVector(a[8],.546274*(i*i-n*n)),e}getIrradianceAt(t,e){const i=t.x,n=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*n),e.addScaledVector(a[2],2*.511664*s),e.addScaledVector(a[3],2*.511664*i),e.addScaledVector(a[4],2*.429043*i*n),e.addScaledVector(a[5],2*.429043*n*s),e.addScaledVector(a[6],.743125*s*s-.247708),e.addScaledVector(a[7],2*.429043*i*s),e.addScaledVector(a[8],.429043*(i*i-n*n)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(t.coefficients[i],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let i=0;i<9;i++)this.coefficients[i].lerp(t.coefficients[i],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(t,e+n*3);return this}toArray(t=[],e=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(t,e+n*3);return t}static getBasisAt(t,e){const i=t.x,n=t.y,s=t.z;e[0]=.282095,e[1]=.488603*n,e[2]=.488603*s,e[3]=.488603*i,e[4]=1.092548*i*n,e[5]=1.092548*n*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*i*s,e[8]=.546274*(i*i-n*n)}}class Op extends Un{constructor(t=new Qh,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}const xd={};class Hl extends vi{constructor(t){super(t),this.textures={}}load(t,e,i,n){const s=this,a=new gn(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){n?n(l):Nt(l),s.manager.itemError(t)}},i,n)}parse(t){const e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Hl.createMaterialFromType(t)}static createMaterialFromType(t){const i={ShadowMaterial:vp,SpriteMaterial:Dh,RawShaderMaterial:Hh,ShaderMaterial:Ue,PointsMaterial:Uh,MeshPhysicalMaterial:yp,MeshStandardMaterial:Bl,MeshPhongMaterial:Mp,MeshToonMaterial:Sp,MeshNormalMaterial:bp,MeshLambertMaterial:wp,MeshDepthMaterial:Wh,MeshDistanceMaterial:Xh,MeshBasicMaterial:xn,MeshMatcapMaterial:Ap,LineDashedMaterial:Tp,LineBasicMaterial:hi,Material:Ke,...xd}[t];let n;return i===void 0?(dn(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),n=new Ke):n=new i,n}static registerMaterial(t,e){xd[t]=e}}class ih{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class da extends Kt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Bp extends vi{constructor(t){super(t)}load(t,e,i,n){const s=this,a=new gn(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){n?n(l):Nt(l),s.manager.itemError(t)}},i,n)}parse(t){const e={},i={};function n(f,p){if(e[p]!==void 0)return e[p];const g=f.interleavedBuffers[p],m=s(f,g.buffer),v=Xs(g.type,m),M=new Ml(v,g.stride);return M.uuid=g.uuid,g.usage!==void 0&&M.setUsage(g.usage),e[p]=M,M}function s(f,p){if(i[p]!==void 0)return i[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return i[p]=m,m}const a=t.isInstancedBufferGeometry?new da:new Kt,o=t.data.index;if(o!==void 0){const f=Xs(o.type,o.array);a.setIndex(new ue(f,1))}const l=t.data.attributes;for(const f in l){const p=l[f];let x;if(p.isInterleavedBufferAttribute){const g=n(t.data,p.data);x=new as(g,p.itemSize,p.offset,p.normalized)}else{const g=Xs(p.type,p.array),m=p.isInstancedBufferAttribute?mi:ue;x=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.gpuType!==void 0&&(x.gpuType=p.gpuType),a.setAttribute(f,x)}const c=t.data.morphAttributes;if(c)for(const f in c){const p=c[f],x=[];for(let g=0,m=p.length;g<m;g++){const v=p[g];let M;if(v.isInterleavedBufferAttribute){const _=n(t.data,v.data);M=new as(_,v.itemSize,v.offset,v.normalized)}else{const _=Xs(v.type,v.array);M=new ue(_,v.itemSize,v.normalized)}v.name!==void 0&&(M.name=v.name),v.usage!==void 0&&M.setUsage(v.usage),v.gpuType!==void 0&&(M.gpuType=v.gpuType),x.push(M)}a.morphAttributes[f]=x}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const x=d[f];a.addGroup(x.start,x.count,x.materialIndex)}const u=t.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new We().fromJSON(u)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}const wc={};class mx extends vi{constructor(t){super(t)}load(t,e,i,n){const s=this,a=this.path===""?ih.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new gn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){n!==void 0&&n(d),Nt("ObjectLoader: Can't parse "+t+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+t)),Nt("ObjectLoader: Can't load "+t);return}s.parse(c,e)},i,n)}async loadAsync(t,e){const i=this,n=this.path===""?ih.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||n;const s=new gn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(t,e);let o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await i.parseAsync(o)}parse(t,e){const i=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,n),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,s,l,o,i),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let d=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),n=this.parseGeometries(t.geometries,i),s=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,s),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,n,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){wc[t]=e}parseShapes(t){const e={};if(t!==void 0)for(let i=0,n=t.length;i<n;i++){const s=new ca().fromJSON(t[i]);e[s.uuid]=s}return e}parseSkeletons(t,e){const i={},n={};if(e.traverse(function(s){s.isBone&&(n[s.uuid]=s)}),t!==void 0)for(let s=0,a=t.length;s<a;s++){const o=new Sl().fromJSON(t[s],n);i[o.uuid]=o}return i}parseGeometries(t,e){const i={};if(t!==void 0){const n=new Bp;for(let s=0,a=t.length;s<a;s++){let o;const l=t[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=n.parse(l);break;default:l.type in cd?o=cd[l.type].fromJSON(l,e):l.type in wc?o=wc[l.type].fromJSON(l,e):pt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(t,e){const i={},n={};if(t!==void 0){const s=new Hl;s.setTextures(e);for(let a=0,o=t.length;a<o;a++){const l=t[a];i[l.uuid]===void 0&&(i[l.uuid]=s.parse(l)),n[l.uuid]=i[l.uuid]}}return n}parseAnimations(t){const e={};if(t!==void 0)for(let i=0;i<t.length;i++){const n=t[i],s=ta.parse(n);e[s.uuid]=s}return e}parseImages(t,e){const i=this,n={};let s;function a(l){return l=i.manager.resolveURL(l),i.manager.itemStart(l),s.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(h)}else return l.data?{data:Xs(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new Kh(e);s=new ea(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const d=t[c],u=d.url;if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const g=u[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new Xe(m.data,m.width,m.height)))}n[d.uuid]=new un(f)}else{const f=o(d.url);n[d.uuid]=new un(f)}}}return n}async parseImagesAsync(t){const e=this,i={};let n;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await n.loadAsync(l)}else return a.data?{data:Xs(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){n=new ea(this.manager),n.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const l=t[a],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=await s(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Xe(p.data,p.width,p.height)))}i[l.uuid]=new un(h)}else{const h=await s(l.url);i[l.uuid]=new un(h)}}}return i}parseTextures(t,e){function i(s,a){return typeof s=="number"?s:(pt("ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const n={};if(t!==void 0)for(let s=0,a=t.length;s<a;s++){const o=t[s];o.image===void 0&&pt('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&pt("ObjectLoader: Undefined image",o.image);const l=e[o.image],c=l.data;let h;Array.isArray(c)?(h=new aa,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Xe:h=new Ce,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,gx)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],vd),h.wrapT=i(o.wrap[1],vd)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,_d)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,_d)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),n[o.uuid]=h}return n}parseObject(t,e,i,n,s){let a;function o(u){return e[u]===void 0&&pt("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const g=u[p];i[g]===void 0&&pt("ObjectLoader: Undefined material",g),f.push(i[g])}return f}return i[u]===void 0&&pt("ObjectLoader: Undefined material",u),i[u]}}function c(u){return n[u]===void 0&&pt("ObjectLoader: Undefined texture",u),n[u]}let h,d;switch(t.type){case"Scene":a=new ra,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new ct(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new sa(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new yl(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new He(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new ar(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new Up(t.color,t.intensity);break;case"DirectionalLight":a=new jh(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new el(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new Fp(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new $h(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new Jh(t.color,t.groundColor,t.intensity);break;case"LightProbe":const u=new Qh().fromArray(t.sh);a=new Op(u,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),d=l(t.material),a=new tp(h,d),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),d=l(t.material),a=new ve(h,d);break;case"InstancedMesh":h=o(t.geometry),d=l(t.material);const f=t.count,p=t.instanceMatrix,x=t.instanceColor;a=new ep(h,d,f),a.instanceMatrix=new mi(new Float32Array(p.array),16),x!==void 0&&(a.instanceColor=new mi(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=o(t.geometry),d=l(t.material),a=new ip(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(g=>{let m=null,v=null;return g.boundingBox!==void 0&&(m=new Ze().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(v=new We().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:v}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t._availableInstanceIds,a._availableGeometryIds=t._availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=c(t.matricesTexture.uuid),a._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new We().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new Ze().fromJSON(t.boundingBox));break;case"LOD":a=new Qf;break;case"Line":a=new Dn(o(t.geometry),l(t.material));break;case"LineLoop":a=new np(o(t.geometry),l(t.material));break;case"LineSegments":a=new Qi(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new sp(o(t.geometry),l(t.material));break;case"Sprite":a=new jf(l(t.material));break;case"Group":a=new Rn;break;case"Bone":a=new Nh;break;default:a=new de}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.pivot!==void 0&&(a.pivot=new C().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(a.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(a.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const u=t.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],e,i,n,s))}if(t.animations!==void 0){const u=t.animations;for(let f=0;f<u.length;f++){const p=u[f];a.animations.push(s[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const u=t.levels;for(let f=0;f<u.length;f++){const p=u[f],x=a.getObjectByProperty("uuid",p.object);x!==void 0&&a.addLevel(x,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=e[i.skeleton];n===void 0?pt("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const i=e.target,n=t.getObjectByProperty("uuid",i);n!==void 0?e.target=n:e.target=new de}})}}const gx={UVMapping:al,CubeReflectionMapping:$i,CubeRefractionMapping:In,EquirectangularReflectionMapping:Pr,EquirectangularRefractionMapping:Ir,CubeUVReflectionMapping:nr},vd={RepeatWrapping:ns,ClampToEdgeWrapping:qe,MirroredRepeatWrapping:Gr},_d={NearestFilter:we,NearestMipmapNearestFilter:yh,NearestMipmapLinearFilter:Ws,LinearFilter:fe,LinearMipmapNearestFilter:Lr,LinearMipmapLinearFilter:xi},Ac=new WeakMap;class xx extends vi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&pt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&pt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ki.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{Ac.has(a)===!0?(n&&n(Ac.get(a)),s.manager.itemError(t),s.manager.itemEnd(t)):(e&&e(c),s.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ki.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){n&&n(c),Ac.set(l,c),Ki.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});Ki.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let $a;class tu{static getContext(){return $a===void 0&&($a=new(window.AudioContext||window.webkitAudioContext)),$a}static setContext(t){$a=t}}class vx extends vi{constructor(t){super(t)}load(t,e,i,n){const s=this,a=new gn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0),h=tu.getContext(),d=t+"#decode";s.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),s.manager.itemEnd(d)}).catch(function(u){o(u),s.manager.itemEnd(d)})}catch(c){o(c)}},i,n);function o(l){n?n(l):Nt(l),s.manager.itemError(t)}}}const yd=new Zt,Md=new Zt,Hn=new Zt;class _x{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new He,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new He,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Hn.copy(t.projectionMatrix);const n=e.eyeSep/2,s=n*e.near/e.focus,a=e.near*Math.tan(is*e.fov*.5)/e.zoom;let o,l;Md.elements[12]=-n,yd.elements[12]=n,o=-a*e.aspect+s,l=a*e.aspect+s,Hn.elements[0]=2*e.near/(l-o),Hn.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Hn),o=-a*e.aspect-s,l=a*e.aspect-s,Hn.elements[0]=2*e.near/(l-o),Hn.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Hn)}this.cameraL.matrix.copy(t.matrixWorld).multiply(Md),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(yd),this.cameraR.matrixWorldNeedsUpdate=!0}}const Ls=-90,Ds=1;class zp extends de{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new He(Ls,Ds,t,e);n.layers=this.layers,this.add(n);const s=new He(Ls,Ds,t,e);s.layers=this.layers,this.add(s);const a=new He(Ls,Ds,t,e);a.layers=this.layers,this.add(a);const o=new He(Ls,Ds,t,e);o.layers=this.layers,this.add(o);const l=new He(Ls,Ds,t,e);l.layers=this.layers,this.add(l);const c=new He(Ls,Ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class kp extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Vp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=yx.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function yx(){this._document.hidden===!1&&this.reset()}const Wn=new C,Tc=new li,Mx=new C,Xn=new C,qn=new C;class Sx extends de{constructor(){super(),this.type="AudioListener",this.context=tu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Vp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Wn,Tc,Mx),Xn.set(0,0,-1).applyQuaternion(Tc),qn.set(0,1,0).applyQuaternion(Tc),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Wn.x,i),e.positionY.linearRampToValueAtTime(Wn.y,i),e.positionZ.linearRampToValueAtTime(Wn.z,i),e.forwardX.linearRampToValueAtTime(Xn.x,i),e.forwardY.linearRampToValueAtTime(Xn.y,i),e.forwardZ.linearRampToValueAtTime(Xn.z,i),e.upX.linearRampToValueAtTime(qn.x,i),e.upY.linearRampToValueAtTime(qn.y,i),e.upZ.linearRampToValueAtTime(qn.z,i)}else e.setPosition(Wn.x,Wn.y,Wn.z),e.setOrientation(Xn.x,Xn.y,Xn.z,qn.x,qn.y,qn.z)}}class Gp extends de{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){pt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){pt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){pt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){pt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){pt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(pt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){pt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(pt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const Yn=new C,Sd=new li,bx=new C,Zn=new C;class wx extends Gp{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,i){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=i,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Yn,Sd,bx),Zn.set(0,0,1).applyQuaternion(Sd);const e=this.panner;if(e.positionX){const i=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Yn.x,i),e.positionY.linearRampToValueAtTime(Yn.y,i),e.positionZ.linearRampToValueAtTime(Yn.z,i),e.orientationX.linearRampToValueAtTime(Zn.x,i),e.orientationY.linearRampToValueAtTime(Zn.y,i),e.orientationZ.linearRampToValueAtTime(Zn.z,i)}else e.setPosition(Yn.x,Yn.y,Yn.z),e.setOrientation(Zn.x,Zn.y,Zn.z)}}class Ax{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let i=0;i<e.length;i++)t+=e[i];return t/e.length}}class Hp{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,a;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(i,n,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(i[l]!==i[l+e]){o.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,a=n;s!==a;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)t[e+a]=t[i+a]}_slerp(t,e,i,n){li.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const a=this._workIndex*s;li.multiplyQuaternionsFlat(t,a,t,e,t,i),li.slerpFlat(t,e,t,e,t,a,n)}_lerp(t,e,i,n,s){const a=1-n;for(let o=0;o!==s;++o){const l=e+o;t[l]=t[l]*a+t[i+o]*n}}_lerpAdditive(t,e,i,n,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[i+a]*n}}}const eu="\\[\\]\\.:\\/",Tx=new RegExp("["+eu+"]","g"),iu="[^"+eu+"]",Ex="[^"+eu.replace("\\.","")+"]",Cx=/((?:WC+[\/:])*)/.source.replace("WC",iu),Rx=/(WCOD+)?/.source.replace("WCOD",Ex),Px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),Lx=new RegExp("^"+Cx+Rx+Px+Ix+"$"),Dx=["material","materials","bones","map"];class Nx{constructor(t,e,i){const n=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class he{constructor(t,e,i){this.path=e,this.parsedPath=i||he.parseTrackName(e),this.node=he.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new he.Composite(t,e,i):new he(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tx,"")}static parseTrackName(t){const e=Lx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Dx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=he.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[n];if(a===void 0){const c=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}he.Composite=Nx;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ux{constructor(){this.isAnimationObjectGroup=!0,this.uuid=wi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let i=0,n=arguments.length;i!==n;++i)t[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,i=this._paths,n=this._parsedPaths,s=this._bindings,a=s.length;let o,l=t.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(u);for(let x=0,g=a;x!==g;++x)s[x].push(new he(u,i[x],n[x]))}else if(p<c){o=t[p];const x=--c,g=t[x];e[g.uuid]=p,t[p]=g,e[f]=x,t[x]=u;for(let m=0,v=a;m!==v;++m){const M=s[m],_=M[x];let S=M[p];M[p]=_,S===void 0&&(S=new he(u,i[m],n[m])),M[x]=S}}else t[p]!==o&&Nt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,i=this._bindings,n=i.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=s){const d=s++,u=t[d];e[u.uuid]=h,t[h]=u,e[c]=d,t[d]=l;for(let f=0,p=n;f!==p;++f){const x=i[f],g=x[d],m=x[h];x[h]=g,x[d]=m}}}this.nCachedObjects_=s}uncache(){const t=this._objects,e=this._indicesByUUID,i=this._bindings,n=i.length;let s=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<s){const u=--s,f=t[u],p=--a,x=t[p];d!==u&&(e[f.uuid]=d),t[d]=f,u!==p&&(e[x.uuid]=u),t[u]=x,t.pop();for(let g=0,m=n;g!==m;++g){const v=i[g],M=v[u],_=v[p];v[d]=M,v[u]=_,v.pop()}}else{const u=--a,f=t[u];d!==u&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,x=n;p!==x;++p){const g=i[p];g[d]=g[u],g.pop()}}}this.nCachedObjects_=s}subscribe_(t,e){const i=this._bindingsIndicesByPath;let n=i[t];const s=this._bindings;if(n!==void 0)return s[n];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);n=s.length,i[t]=n,a.push(t),o.push(e),s.push(d);for(let u=h,f=l.length;u!==f;++u){const p=l[u];d[u]=new he(p,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,i=e[t];if(i!==void 0){const n=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=n[o];e[c]=i,a[i]=l,a.pop(),s[i]=s[o],s.pop(),n[i]=n[o],n.pop()}}}class Wp{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,a=s.length,o=new Array(a),l={endingStart:jn,endingEnd:jn};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Uf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){const n=this._clip.duration,s=t._clip.duration,a=s/n,o=n/s;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*i;l<0||i===0?e=0:(this._startTime=null,e=i*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Eh:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case fl:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const a=i===Ff;if(t===0)return s===-1?n:a&&(s&1)===1?e-n:n;if(i===Nf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=e||n<0){const o=Math.floor(n/e);n-=e*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=n;if(a&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=Qn,n.endingEnd=Qn):(t?n.endingStart=this.zeroSlopeAtStart?Qn:jn:n.endingStart=qr,e?n.endingEnd=this.zeroSlopeAtEnd?Qn:jn:n.endingEnd=qr)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=e,o[1]=s+t,l[1]=i,this}}const Fx=new Float32Array(1);class Ox extends Gi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,a=t._propertyBindings,o=t._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=n[d],f=u.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;p=new Hp(he.create(i,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=n.length,n.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[e];a===void 0&&(a={},n[e]=a),a[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new qh(new Float32Array(2),new Float32Array(2),1,Fx),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let a=typeof t=="string"?ta.findByName(n,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=fl),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Wp(this,a,e,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?ta.findByName(i,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==i;++c)e[c]._update(n,t,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Bx extends Ph{constructor(t=1,e=1,i=1,n={}){super(t,e,n),this.isRenderTarget3D=!0,this.depth=i;for(let s=0;s<this.textures.length;s++){const a=new vl(null,t,e,i);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[s]=a}this._setTextureOptions(n)}}class nu{constructor(t){this.value=t}clone(){return new nu(this.value.clone===void 0?this.value:this.value.clone())}}let zx=0;class kx extends Gi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:zx++}),this.name="",this.usage=gl,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let i=0,n=e.length;i<n;i++){const s=Array.isArray(e[i])?e[i]:[e[i]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Vx extends Ml{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class Gx{constructor(t,e,i,n,s,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=i,this.elementSize=n,this.count=s,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const bd=new Zt;class Hx{constructor(t,e,i=0,n=1/0){this.ray=new sr(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Nt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bd),this}intersectObject(t,e=!0,i=[]){return nh(t,this,i,e),i.sort(wd),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)nh(t[n],this,i,e);return i.sort(wd),i}}function wd(r,t){return r.distance-t.distance}function nh(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)nh(s[a],t,e,!0)}}class Wx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,pt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Xx{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qx{constructor(t=1,e=0,i=0){this.radius=t,this.theta=e,this.y=i}set(t,e,i){return this.radius=t,this.theta=e,this.y=i,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+i*i),this.theta=Math.atan2(t,i),this.y=e,this}clone(){return new this.constructor().copy(this)}}const hu=class hu{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};hu.prototype.isMatrix2=!0;let sh=hu;const Ad=new Q;class Xp{constructor(t=new Q(1/0,1/0),e=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ad.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ad).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Td=new C,ja=new C,Ns=new C,Us=new C,Ec=new C,Yx=new C,Zx=new C;class Kx{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Td.subVectors(t,this.start),ja.subVectors(this.end,this.start);const i=ja.dot(ja);if(i===0)return 0;let s=ja.dot(Td)/i;return e&&(s=Wt(s,0,1)),s}closestPointToPoint(t,e,i){const n=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(t,e=Yx,i=Zx){const n=10000000000000001e-32;let s,a;const o=this.start,l=t.start,c=this.end,h=t.end;Ns.subVectors(c,o),Us.subVectors(h,l),Ec.subVectors(o,l);const d=Ns.dot(Ns),u=Us.dot(Us),f=Us.dot(Ec);if(d<=n&&u<=n)return e.copy(o),i.copy(l),e.sub(i),e.dot(e);if(d<=n)s=0,a=f/u,a=Wt(a,0,1);else{const p=Ns.dot(Ec);if(u<=n)a=0,s=Wt(-p/d,0,1);else{const x=Ns.dot(Us),g=d*u-x*x;g!==0?s=Wt((x*f-p*u)/g,0,1):s=0,a=(x*s+f)/u,a<0?(a=0,s=Wt(-p/d,0,1)):a>1&&(a=1,s=Wt((x-p)/d,0,1))}}return e.copy(o).addScaledVector(Ns,s),i.copy(l).addScaledVector(Us,a),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Ed=new C;class Jx extends de{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const i=new Kt,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;n.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Et(n,3));const s=new hi({fog:!1,toneMapped:!1});this.cone=new Qi(i,s),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Ed.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ed),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Tn=new C,Qa=new Zt,Cc=new Zt;class $x extends Qi{constructor(t){const e=qp(t),i=new Kt,n=[],s=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}i.setAttribute("position",new Et(n,3)),i.setAttribute("color",new Et(s,3));const a=new hi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const o=new ct(255),l=new ct(65280);this.setColors(o,l)}updateMatrixWorld(t){const e=this.bones,i=this.geometry,n=i.getAttribute("position");Cc.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<e.length;s++){const o=e[s];o.parent&&o.parent.isBone&&(Qa.multiplyMatrices(Cc,o.matrixWorld),Tn.setFromMatrixPosition(Qa),n.setXYZ(a,Tn.x,Tn.y,Tn.z),Qa.multiplyMatrices(Cc,o.parent.matrixWorld),Tn.setFromMatrixPosition(Qa),n.setXYZ(a+1,Tn.x,Tn.y,Tn.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const n=this.geometry.getAttribute("color");for(let s=0;s<n.count;s+=2)n.setXYZ(s,t.r,t.g,t.b),n.setXYZ(s+1,e.r,e.g,e.b);return n.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function qp(r){const t=[];r.isBone===!0&&t.push(r);for(let e=0;e<r.children.length;e++)t.push(...qp(r.children[e]));return t}class jx extends ve{constructor(t,e,i){const n=new us(e,4,2),s=new xn({wireframe:!0,fog:!1,toneMapped:!1});super(n,s),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Qx=new C,Cd=new ct,Rd=new ct;class tv extends de{constructor(t,e,i){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new ha(e);n.rotateY(Math.PI*.5),this.material=new xn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=n.getAttribute("position"),a=new Float32Array(s.count*3);n.setAttribute("color",new ue(a,3)),this.add(new ve(n,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Cd.copy(this.light.color),Rd.copy(this.light.groundColor);for(let i=0,n=e.count;i<n;i++){const s=i<n/2?Cd:Rd;e.setXYZ(i,s.r,s.g,s.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(Qx.setFromMatrixPosition(this.light.matrixWorld).negate())}}class ev extends Qi{constructor(t=10,e=10,i=4473924,n=8947848){i=new ct(i),n=new ct(n);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=e;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const x=u===s?i:n;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new Kt;h.setAttribute("position",new Et(l,3)),h.setAttribute("color",new Et(c,3));const d=new hi({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class iv extends Qi{constructor(t=10,e=16,i=8,n=64,s=4473924,a=8947848){s=new ct(s),a=new ct(a);const o=[],l=[];if(e>1)for(let d=0;d<e;d++){const u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;o.push(0,0,0),o.push(f,0,p);const x=d&1?s:a;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<i;d++){const u=d&1?s:a,f=t-t/i*d;for(let p=0;p<n;p++){let x=p/n*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f;o.push(g,0,m),l.push(u.r,u.g,u.b),x=(p+1)/n*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f,o.push(g,0,m),l.push(u.r,u.g,u.b)}}const c=new Kt;c.setAttribute("position",new Et(o,3)),c.setAttribute("color",new Et(l,3));const h=new hi({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const Pd=new C,to=new C,Id=new C;class nv extends de{constructor(t,e,i){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",e===void 0&&(e=1);let n=new Kt;n.setAttribute("position",new Et([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const s=new hi({fog:!1,toneMapped:!1});this.lightPlane=new Dn(n,s),this.add(this.lightPlane),n=new Kt,n.setAttribute("position",new Et([0,0,0,0,0,1],3)),this.targetLine=new Dn(n,s),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Pd.setFromMatrixPosition(this.light.matrixWorld),to.setFromMatrixPosition(this.light.target.matrixWorld),Id.subVectors(to,Pd),this.lightPlane.lookAt(to),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(to),this.targetLine.scale.z=Id.length()}}const eo=new C,Re=new Gl;class sv extends Qi{constructor(t){const e=new Kt,i=new hi({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,x){l(p),l(x)}function l(p){n.push(0,0,0),s.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(n.length/3-1)}e.setAttribute("position",new Et(n,3)),e.setAttribute("color",new Et(s,3)),super(e,i),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new ct(16755200),h=new ct(16711680),d=new ct(43775),u=new ct(16777215),f=new ct(3355443);this.setColors(c,h,d,u,f)}setColors(t,e,i,n,s){const o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,n.r,n.g,n.b),o.setXYZ(39,n.r,n.g,n.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0,this}update(){const t=this.geometry,e=this.pointMap,i=1,n=1;let s,a;if(Re.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,a=0;else if(this.camera.coordinateSystem===bi)s=-1,a=1;else if(this.camera.coordinateSystem===rs)s=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ie("c",e,t,Re,0,0,s),Ie("t",e,t,Re,0,0,a),Ie("n1",e,t,Re,-i,-n,s),Ie("n2",e,t,Re,i,-n,s),Ie("n3",e,t,Re,-i,n,s),Ie("n4",e,t,Re,i,n,s),Ie("f1",e,t,Re,-i,-n,a),Ie("f2",e,t,Re,i,-n,a),Ie("f3",e,t,Re,-i,n,a),Ie("f4",e,t,Re,i,n,a),Ie("u1",e,t,Re,i*.7,n*1.1,s),Ie("u2",e,t,Re,-i*.7,n*1.1,s),Ie("u3",e,t,Re,0,n*2,s),Ie("cf1",e,t,Re,-i,0,a),Ie("cf2",e,t,Re,i,0,a),Ie("cf3",e,t,Re,0,-n,a),Ie("cf4",e,t,Re,0,n,a),Ie("cn1",e,t,Re,-i,0,s),Ie("cn2",e,t,Re,i,0,s),Ie("cn3",e,t,Re,0,-n,s),Ie("cn4",e,t,Re,0,n,s),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Ie(r,t,e,i,n,s,a){eo.set(n,s,a).unproject(i);const o=t[r];if(o!==void 0){const l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],eo.x,eo.y,eo.z)}}const io=new Ze;class rv extends Qi{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),s=new Kt;s.setIndex(new ue(i,1)),s.setAttribute("position",new ue(n,3)),super(s,new hi({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&io.setFromObject(this.object),io.isEmpty())return;const t=io.min,e=io.max,i=this.geometry.attributes.position,n=i.array;n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=t.x,n[4]=e.y,n[5]=e.z,n[6]=t.x,n[7]=t.y,n[8]=e.z,n[9]=e.x,n[10]=t.y,n[11]=e.z,n[12]=e.x,n[13]=e.y,n[14]=t.z,n[15]=t.x,n[16]=e.y,n[17]=t.z,n[18]=t.x,n[19]=t.y,n[20]=t.z,n[21]=e.x,n[22]=t.y,n[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class av extends Qi{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Kt;s.setIndex(new ue(i,1)),s.setAttribute("position",new Et(n,3)),super(s,new hi({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class ov extends Dn{constructor(t,e=1,i=16776960){const n=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Kt;a.setAttribute("position",new Et(s,3)),a.computeBoundingSphere(),super(a,new hi({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Kt;l.setAttribute("position",new Et(o,3)),l.computeBoundingSphere(),this.add(new ve(l,new xn({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Ld=new C;let no,Rc;class lv extends de{constructor(t=new C(0,0,1),e=new C(0,0,0),i=1,n=16776960,s=i*.2,a=s*.2){super(),this.type="ArrowHelper",no===void 0&&(no=new Kt,no.setAttribute("position",new Et([0,0,0,0,1,0],3)),Rc=new la(.5,1,5,1),Rc.translate(0,-.5,0)),this.position.copy(e),this.line=new Dn(no,new hi({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ve(Rc,new xn({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,s,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ld.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ld,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class cv extends Qi{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Kt;n.setAttribute("position",new Et(e,3)),n.setAttribute("color",new Et(i,3));const s=new hi({vertexColors:!0,toneMapped:!1});super(n,s),this.type="AxesHelper"}setColors(t,e,i){const n=new ct,s=this.geometry.attributes.color.array;return n.set(t),n.toArray(s,0),n.toArray(s,3),n.set(e),n.toArray(s,6),n.toArray(s,9),n.set(i),n.toArray(s,12),n.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class hv{constructor(){this.type="ShapePath",this.color=new ct,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Jr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,n){return this.currentPath.quadraticCurveTo(t,e,i,n),this}bezierCurveTo(t,e,i,n,s,a){return this.currentPath.bezierCurveTo(t,e,i,n,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1;const d=c.length;for(let u=0,f=d-1;u<d;f=u++){const p=c[u],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){const h=c.getCenter(new Q);if(t(h,l))return h;const d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){const x=l[p],g=l[(p+1)%f];if(x.y>d!=g.y>d){const m=x.x+(d-x.y)*(g.x-x.x)/(g.y-x.y);u.push(m)}}return u.length>1&&(u.sort((p,x)=>p-x),h.x=(u[0]+u[1])/2),h}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(pt('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");const n=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const h=ki.area(c);if(h===0)continue;const d=new Xp;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);s.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){const c=s[l];let h=0;for(let d=l-1;d>=0;d--){const u=s[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}n(c.winding)===n(h)&&(c.exclude=!0)}for(const l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of s){if(l.exclude||l.role!=="outer")continue;const c=new ca;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of s){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const h=new Jr;h.curves=l.subPath.curves,c.holes.push(h)}return a}}class uv extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function dv(r,t){const e=r.image&&r.image.width?r.image.width/r.image.height:1;return e>t?(r.repeat.x=1,r.repeat.y=e/t,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=t/e,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function fv(r,t){const e=r.image&&r.image.width?r.image.width/r.image.height:1;return e>t?(r.repeat.x=t/e,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=e/t,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function pv(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function rh(r,t,e,i){const n=mv(i);switch(e){case Ah:return r*t;case hl:return r*t/n.components*n.byteLength;case na:return r*t/n.components*n.byteLength;case pn:return r*t*2/n.components*n.byteLength;case ul:return r*t*2/n.components*n.byteLength;case Th:return r*t*3/n.components*n.byteLength;case Le:return r*t*4/n.components*n.byteLength;case dl:return r*t*4/n.components*n.byteLength;case Dr:case Nr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Fr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case So:case wo:return Math.max(r,16)*Math.max(t,8)/4;case Mo:case bo:return Math.max(r,8)*Math.max(t,8)/2;case Ao:case To:case Co:case Ro:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Eo:case Hr:case Po:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Do:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case No:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ko:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Go:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Xo:case qo:case Yo:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Zo:case Ko:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wr:case Jo:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mv(r){switch(r){case Oe:case Mh:return{byteLength:1,components:1};case $s:case Sh:case Ai:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case Pi:case ol:case oi:return{byteLength:4,components:1};case bh:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}class gv{static contain(t,e){return dv(t,e)}static cover(t,e){return fv(t,e)}static fill(t){return pv(t)}static getByteLength(t,e,i,n){return rh(t,e,i,n)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);function Yp(){let r=null,t=!1,e=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function xv(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_v=`#ifdef USE_ALPHAHASH
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
#endif`,yv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wv=`#ifdef USE_AOMAP
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
#endif`,Av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tv=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iv=`#ifdef USE_IRIDESCENCE
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
#endif`,Lv=`#ifdef USE_BUMPMAP
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
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vv=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hv=`vec3 transformedNormal = objectNormal;
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
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
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
}`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,h_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,g_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x_=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,__=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C_=`#if defined( USE_POINTS_UV )
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
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`#ifdef USE_MORPHTARGETS
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
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
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
#endif`,G_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,ny=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dy=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
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
}`,Ty=`#define DISTANCE
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
}`,Ey=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`uniform float scale;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Ny=`#define LAMBERT
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
}`,Uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Fy=`#define MATCAP
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
}`,Oy=`#define MATCAP
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
}`,By=`#define NORMAL
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
}`,zy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ky=`#define PHONG
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
}`,Vy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Gy=`#define STANDARD
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
}`,Hy=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Wy=`#define TOON
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
}`,Xy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,qy=`uniform float size;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,Zy=`#include <common>
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
}`,Ky=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Jy=`uniform float rotation;
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
}`,$y=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:vv,alphahash_pars_fragment:_v,alphamap_fragment:yv,alphamap_pars_fragment:Mv,alphatest_fragment:Sv,alphatest_pars_fragment:bv,aomap_fragment:wv,aomap_pars_fragment:Av,batching_pars_vertex:Tv,batching_vertex:Ev,begin_vertex:Cv,beginnormal_vertex:Rv,bsdfs:Pv,iridescence_fragment:Iv,bumpmap_pars_fragment:Lv,clipping_planes_fragment:Dv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:Uv,clipping_planes_vertex:Fv,color_fragment:Ov,color_pars_fragment:Bv,color_pars_vertex:zv,color_vertex:kv,common:Vv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Hv,displacementmap_pars_vertex:Wv,displacementmap_vertex:Xv,emissivemap_fragment:qv,emissivemap_pars_fragment:Yv,colorspace_fragment:Zv,colorspace_pars_fragment:Kv,envmap_fragment:Jv,envmap_common_pars_fragment:$v,envmap_pars_fragment:jv,envmap_pars_vertex:Qv,envmap_physical_pars_fragment:h_,envmap_vertex:t_,fog_vertex:e_,fog_pars_vertex:i_,fog_fragment:n_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:a_,lights_lambert_fragment:o_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:d_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:x_,lights_fragment_maps:v_,lights_fragment_end:__,lightprobes_pars_fragment:y_,logdepthbuf_fragment:M_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:b_,logdepthbuf_vertex:w_,map_fragment:A_,map_pars_fragment:T_,map_particle_fragment:E_,map_particle_pars_fragment:C_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:P_,morphinstance_vertex:I_,morphcolor_vertex:L_,morphnormal_vertex:D_,morphtarget_pars_vertex:N_,morphtarget_vertex:U_,normal_fragment_begin:F_,normal_fragment_maps:O_,normal_pars_fragment:B_,normal_pars_vertex:z_,normal_vertex:k_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:G_,clearcoat_normal_fragment_maps:H_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:Z_,project_vertex:K_,dithering_fragment:J_,dithering_pars_fragment:$_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:ty,shadowmap_pars_vertex:ey,shadowmap_vertex:iy,shadowmask_pars_fragment:ny,skinbase_vertex:sy,skinning_pars_vertex:ry,skinning_vertex:ay,skinnormal_vertex:oy,specularmap_fragment:ly,specularmap_pars_fragment:cy,tonemapping_fragment:hy,tonemapping_pars_fragment:uy,transmission_fragment:dy,transmission_pars_fragment:fy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:gy,worldpos_vertex:xy,background_vert:vy,background_frag:_y,backgroundCube_vert:yy,backgroundCube_frag:My,cube_vert:Sy,cube_frag:by,depth_vert:wy,depth_frag:Ay,distance_vert:Ty,distance_frag:Ey,equirect_vert:Cy,equirect_frag:Ry,linedashed_vert:Py,linedashed_frag:Iy,meshbasic_vert:Ly,meshbasic_frag:Dy,meshlambert_vert:Ny,meshlambert_frag:Uy,meshmatcap_vert:Fy,meshmatcap_frag:Oy,meshnormal_vert:By,meshnormal_frag:zy,meshphong_vert:ky,meshphong_frag:Vy,meshphysical_vert:Gy,meshphysical_frag:Hy,meshtoon_vert:Wy,meshtoon_frag:Xy,points_vert:qy,points_frag:Yy,shadow_vert:Zy,shadow_frag:Ky,sprite_vert:Jy,sprite_frag:$y},ft={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},zi={basic:{uniforms:ri([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:ri([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:ri([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:ri([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:ri([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new ct(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:ri([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:ri([ft.points,ft.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:ri([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:ri([ft.common,ft.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:ri([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:ri([ft.sprite,ft.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:ri([ft.common,ft.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:ri([ft.lights,ft.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};zi.physical={uniforms:ri([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const so={r:0,b:0,g:0},jy=new Zt,Zp=new Jt;Zp.set(-1,0,0,0,1,0,0,0,1);function Qy(r,t,e,i,n,s){const a=new ct(0);let o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const _=v.backgroundBlurriness>0;M=t.get(M,_)}return M}function p(v){let M=!1;const _=f(v);_===null?g(a,o):_&&_.isColor&&(g(_,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,M){const _=f(M);_&&(_.isCubeTexture||_.mapping===nr)?(c===void 0&&(c=new ve(new cs(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:ir(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jy.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zp),c.material.toneMapped=oe.getTransfer(_.colorSpace)!==xe,(h!==_||d!==_.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ve(new hs(2,2),new Ue({name:"BackgroundMaterial",uniforms:ir(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(so,_p(r)),e.buffers.color.setClear(so.r,so.g,so.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:x,dispose:m}}function tM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,a=!1;function o(I,D,B,L,O){let G=!1;const W=d(I,L,B,D);s!==W&&(s=W,c(s.object)),G=f(I,L,B,O),G&&p(I,L,B,O),O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(I,D,B,L),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function d(I,D,B,L){const O=L.wireframe===!0;let G=i[D.id];G===void 0&&(G={},i[D.id]=G);const W=I.isInstancedMesh===!0?I.id:0;let tt=G[W];tt===void 0&&(tt={},G[W]=tt);let X=tt[B.id];X===void 0&&(X={},tt[B.id]=X);let K=X[O];return K===void 0&&(K=u(l()),X[O]=K),K}function u(I){const D=[],B=[],L=[];for(let O=0;O<e;O++)D[O]=0,B[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,D,B,L){const O=s.attributes,G=D.attributes;let W=0;const tt=B.getAttributes();for(const X in tt)if(tt[X].location>=0){const J=O[X];let wt=G[X];if(wt===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(wt=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(wt=I.instanceColor)),J===void 0||J.attribute!==wt||wt&&J.data!==wt.data)return!0;W++}return s.attributesNum!==W||s.index!==L}function p(I,D,B,L){const O={},G=D.attributes;let W=0;const tt=B.getAttributes();for(const X in tt)if(tt[X].location>=0){let J=G[X];J===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const wt={};wt.attribute=J,J&&J.data&&(wt.data=J.data),O[X]=wt,W++}s.attributes=O,s.attributesNum=W,s.index=L}function x(){const I=s.newAttributes;for(let D=0,B=I.length;D<B;D++)I[D]=0}function g(I){m(I,0)}function m(I,D){const B=s.newAttributes,L=s.enabledAttributes,O=s.attributeDivisors;B[I]=1,L[I]===0&&(r.enableVertexAttribArray(I),L[I]=1),O[I]!==D&&(r.vertexAttribDivisor(I,D),O[I]=D)}function v(){const I=s.newAttributes,D=s.enabledAttributes;for(let B=0,L=D.length;B<L;B++)D[B]!==I[B]&&(r.disableVertexAttribArray(B),D[B]=0)}function M(I,D,B,L,O,G,W){W===!0?r.vertexAttribIPointer(I,D,B,O,G):r.vertexAttribPointer(I,D,B,L,O,G)}function _(I,D,B,L){x();const O=L.attributes,G=B.getAttributes(),W=D.defaultAttributeValues;for(const tt in G){const X=G[tt];if(X.location>=0){let K=O[tt];if(K===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const J=K.normalized,wt=K.itemSize,mt=t.get(K);if(mt===void 0)continue;const Yt=mt.buffer,kt=mt.type,le=mt.bytesPerElement,Z=kt===r.INT||kt===r.UNSIGNED_INT||K.gpuType===ol;if(K.isInterleavedBufferAttribute){const it=K.data,gt=it.stride,Vt=K.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<X.locationSize;At++)m(X.location+At,it.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<X.locationSize;At++)g(X.location+At);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let At=0;At<X.locationSize;At++)M(X.location+At,wt/X.locationSize,kt,J,gt*le,(Vt+wt/X.locationSize*At)*le,Z)}else{if(K.isInstancedBufferAttribute){for(let it=0;it<X.locationSize;it++)m(X.location+it,K.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let it=0;it<X.locationSize;it++)g(X.location+it);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let it=0;it<X.locationSize;it++)M(X.location+it,wt/X.locationSize,kt,J,wt*le,wt/X.locationSize*it*le,Z)}}else if(W!==void 0){const J=W[tt];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(X.location,J);break;case 3:r.vertexAttrib3fv(X.location,J);break;case 4:r.vertexAttrib4fv(X.location,J);break;default:r.vertexAttrib1fv(X.location,J)}}}}v()}function S(){A();for(const I in i){const D=i[I];for(const B in D){const L=D[B];for(const O in L){const G=L[O];for(const W in G)h(G[W].object),delete G[W];delete L[O]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;const D=i[I.id];for(const B in D){const L=D[B];for(const O in L){const G=L[O];for(const W in G)h(G[W].object),delete G[W];delete L[O]}}delete i[I.id]}function E(I){for(const D in i){const B=i[D];for(const L in B){const O=B[L];if(O[I.id]===void 0)continue;const G=O[I.id];for(const W in G)h(G[W].object),delete G[W];delete O[I.id]}}}function y(I){for(const D in i){const B=i[D],L=I.isInstancedMesh===!0?I.id:0,O=B[L];if(O!==void 0){for(const G in O){const W=O[G];for(const tt in W)h(W[tt].object),delete W[tt];delete O[G]}delete B[L],Object.keys(B).length===0&&delete i[D]}}}function A(){R(),a=!0,s!==n&&(s=n,c(s.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function eM(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function iM(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(E){return!(E!==Le&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const y=E===Ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Oe&&E!==oi&&!y&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(pt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:S,samples:w}}function nM(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new on,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=r.get(d);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{const v=s?0:i,M=v*4;let _=m.clippingState||null;l.value=_,_=h(p,u,M,f);for(let S=0;S!==M;++S)_[S]=e[S];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,p!==!0||g===null){const m=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,_=f;M!==x;++M,_+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const qs=4,sM=6,rM=20,aM=256,br=new ar,Dd=new ct;let Pc=null,Ic=0,Lc=0,Dc=!1;const oM=new C,Kn=new C;class il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:o=oM}=s;Pc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pc,Ic,Lc),this._renderer.xr.enabled=Dc,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===In?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fe,minFilter:fe,generateMipmaps:!1,type:Ai,format:Le,colorSpace:ss,depthBuffer:!1},n=Nd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lM(s)),this._blurMaterial=hM(s,t,e),this._ggxMaterial=cM(s,t,e)}return n}_compileMaterial(t){const e=new ve(new Kt,t);this._renderer.compile(e,br)}_sceneToCubeUV(t,e,i,n,s){const l=new He(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Dd),d.toneMapping=Ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new cs,new xn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let m=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(Dd),m=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const S=this._cubeSize;Fs(n,_*S,M>2?S:0,S,S),d.setRenderTarget(n),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===$i||t.mapping===In;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());const s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Fs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,br)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-qs?i-p+qs:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Fs(s,g,m,3*x,2*x),n.setRenderTarget(s),n.render(o,br),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,Fs(t,g,m,3*x,2*x),n.setRenderTarget(t),n.render(o,br)}_blur(t,e,i,n){const s=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,a),this._blurPass(s,t,i,i,a)}_blurPass(t,e,i,n,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[n],d=3*h*(n>this._lodMax-qs?n-this._lodMax+qs:0),u=4*(this._cubeSize-h);Fs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,br)}}function lM(r){const t=[],e=[];let i=r;const n=r-qs+1+sM;for(let s=0;s<n;s++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){const v=m%3*2/3-1,M=m>2?0:-1,_=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];p.set(_,f*u*m);for(let S=0;S<u;S++){const w=h[S*2]*2-1,E=h[S*2+1]*2-1;m===0?Kn.set(1,E,w):m===1?Kn.set(-w,1,-E):m===2?Kn.set(-w,E,1):m===3?Kn.set(-1,E,-w):m===4?Kn.set(-w,-1,E):Kn.set(w,E,-1),Kn.toArray(x,(m*u+S)*f)}}const g=new Kt;g.setAttribute("position",new ue(p,f)),g.setAttribute("outputDirection",new ue(x,f)),e.push(new ve(g,null)),i>qs&&i--}return{lodMeshes:e,sizeLods:t}}function Nd(r,t,e){const i=new ci(r,t,e);return i.texture.mapping=nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function cM(r,t,e){return new Ue({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function hM(r,t,e){return new Ue({name:"SphericalGaussianBlur",defines:{SAMPLES:rM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Ud(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Fd(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Wl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class su extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new aa(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new cs(5,5,5),s=new Ue({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:Ji});s.uniforms.tEquirect.value=e;const a=new ve(n,s),o=e.minFilter;return e.minFilter===xi&&(e.minFilter=fe),new zp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}function uM(r){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Pr||f===Ir)if(t.has(u)){const p=t.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new su(p.height);return x.fromEquirectangularTexture(r,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,p=f===Pr||f===Ir,x=f===$i||f===In;if(p||x){let g=e.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new il(r)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new il(r)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Pr?u.mapping=$i:f===Ir&&(u.mapping=In),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function dM(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&dn("WebGLRenderer: "+i+" extension not supported."),n}}}function fM(r,t,e,i){const n={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete n[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,p=d.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const v=f.array;x=f.version;for(let M=0,_=v.length;M<_;M+=3){const S=v[M+0],w=v[M+1],E=v[M+2];u.push(S,w,w,E,E,S)}}else{const v=p.array;x=p.version;for(let M=0,_=v.length/3-1;M<_;M+=3){const S=M+0,w=M+1,E=M+2;u.push(S,w,w,E,E,S)}}const g=new(p.count>=65535?Lh:Ih)(u,1);g.version=x;const m=s.get(d);m&&t.remove(m),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function pM(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function gM(r,t,e){const i=new WeakMap,n=new se;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let A=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let _=o.attributes.position.count*M,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const w=new Float32Array(_*S*4*d),E=new xl(w,_,S,d);E.type=oi,E.needsUpdate=!0;const y=M*4;for(let R=0;R<d;R++){const I=g[R],D=m[R],B=v[R],L=_*S*4*R;for(let O=0;O<I.count;O++){const G=O*y;f===!0&&(n.fromBufferAttribute(I,O),w[L+G+0]=n.x,w[L+G+1]=n.y,w[L+G+2]=n.z,w[L+G+3]=0),p===!0&&(n.fromBufferAttribute(D,O),w[L+G+4]=n.x,w[L+G+5]=n.y,w[L+G+6]=n.z,w[L+G+7]=0),x===!0&&(n.fromBufferAttribute(B,O),w[L+G+8]=n.x,w[L+G+9]=n.y,w[L+G+10]=n.z,w[L+G+11]=B.itemSize===4?n.w:1)}}u={count:d,texture:E,size:new Q(_,S)},i.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function xM(r,t,e,i,n){let s=new WeakMap;function a(c){const h=n.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const vM={[fh]:"LINEAR_TONE_MAPPING",[ph]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[gh]:"ACES_FILMIC_TONE_MAPPING",[vh]:"AGX_TONE_MAPPING",[_h]:"NEUTRAL_TONE_MAPPING",[xh]:"CUSTOM_TONE_MAPPING"};function _M(r,t,e,i,n,s){const a=new ci(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Kt;c.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Et([0,2,0,0,2,0],2));const h=new Hh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ve(c,h),u=new ar(-1,1,1,-1,0,1);let f=null,p=null,x=!1,g,m=null,v=[],M=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let w=0;w<v.length;w++){const E=v[w];E.setSize&&E.setSize(_,S)}},this.setEffects=function(_){v=_,M=v.length>0&&v[0].isRenderPass===!0;const S=a.width,w=a.height;v.length>0&&o===null&&(o=new ci(S,w,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),l=new ci(S,w,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<v.length;E++){const y=v[E];y.setSize&&y.setSize(S,w)}},this.begin=function(_,S){if(x||_.toneMapping===Ri&&v.length===0)return!1;if(m=S,S!==null){const w=S.width,E=S.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return M===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Ri,!0},this.hasRenderPass=function(){return M},this.end=function(_,S){_.toneMapping=g,x=!0;let w=a,E=o;for(let y=0;y<v.length;y++){const A=v[y];A.enabled!==!1&&(A.render(_,E,w,S),A.needsSwap!==!1&&(w=E,E=E===o?l:o))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},oe.getTransfer(f)===xe&&(h.defines.SRGB_TRANSFER="");const y=vM[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(m),_.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Kp=new Ce,ah=new tr(1,1),Jp=new xl,$p=new vl,jp=new aa,Od=[],Bd=[],zd=new Float32Array(16),kd=new Float32Array(9),Vd=new Float32Array(4);function or(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=Od[n];if(s===void 0&&(s=new Float32Array(n),Od[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ke(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Xl(r,t){let e=Bd[t];e===void 0&&(e=new Int32Array(t),Bd[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function yM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function MM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),ke(e,t)}}function SM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),ke(e,t)}}function bM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),ke(e,t)}}function wM(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Vd.set(i),r.uniformMatrix2fv(this.addr,!1,Vd),ke(e,i)}}function AM(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;kd.set(i),r.uniformMatrix3fv(this.addr,!1,kd),ke(e,i)}}function TM(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;zd.set(i),r.uniformMatrix4fv(this.addr,!1,zd),ke(e,i)}}function EM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function CM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),ke(e,t)}}function RM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),ke(e,t)}}function PM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),ke(e,t)}}function IM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function LM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),ke(e,t)}}function DM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),ke(e,t)}}function NM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),ke(e,t)}}function UM(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(ah.compareFunction=e.isReversedDepthBuffer()?ml:pl,s=ah):s=Kp,e.setTexture2D(t||s,n)}function FM(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||$p,n)}function OM(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||jp,n)}function BM(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Jp,n)}function zM(r){switch(r){case 5126:return yM;case 35664:return MM;case 35665:return SM;case 35666:return bM;case 35674:return wM;case 35675:return AM;case 35676:return TM;case 5124:case 35670:return EM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return PM;case 5125:return IM;case 36294:return LM;case 36295:return DM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return BM}}function kM(r,t){r.uniform1fv(this.addr,t)}function VM(r,t){const e=or(t,this.size,2);r.uniform2fv(this.addr,e)}function GM(r,t){const e=or(t,this.size,3);r.uniform3fv(this.addr,e)}function HM(r,t){const e=or(t,this.size,4);r.uniform4fv(this.addr,e)}function WM(r,t){const e=or(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function XM(r,t){const e=or(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function qM(r,t){const e=or(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function YM(r,t){r.uniform1iv(this.addr,t)}function ZM(r,t){r.uniform2iv(this.addr,t)}function KM(r,t){r.uniform3iv(this.addr,t)}function JM(r,t){r.uniform4iv(this.addr,t)}function $M(r,t){r.uniform1uiv(this.addr,t)}function jM(r,t){r.uniform2uiv(this.addr,t)}function QM(r,t){r.uniform3uiv(this.addr,t)}function tS(r,t){r.uniform4uiv(this.addr,t)}function eS(r,t,e){const i=this.cache,n=t.length,s=Xl(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),ke(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=ah:a=Kp;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function iS(r,t,e){const i=this.cache,n=t.length,s=Xl(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),ke(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||$p,s[a])}function nS(r,t,e){const i=this.cache,n=t.length,s=Xl(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),ke(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||jp,s[a])}function sS(r,t,e){const i=this.cache,n=t.length,s=Xl(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),ke(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Jp,s[a])}function rS(r){switch(r){case 5126:return kM;case 35664:return VM;case 35665:return GM;case 35666:return HM;case 35674:return WM;case 35675:return XM;case 35676:return qM;case 5124:case 35670:return YM;case 35667:case 35671:return ZM;case 35668:case 35672:return KM;case 35669:case 35673:return JM;case 5125:return $M;case 36294:return jM;case 36295:return QM;case 36296:return tS;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return sS}}class aS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zM(e.type)}}class oS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rS(e.type)}}class lS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const Nc=/(\w+)(\])?(\[|\.)?/g;function Gd(r,t){r.seq.push(t),r.map[t.id]=t}function cS(r,t,e){const i=r.name,n=i.length;for(Nc.lastIndex=0;;){const s=Nc.exec(i),a=Nc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Gd(e,c===void 0?new aS(o,r,t):new oS(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new lS(o),Gd(e,d)),e=d}}}class fo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);cS(o,l,this)}const n=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Hd(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const hS=37297;let uS=0;function dS(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Wd=new Jt;function fS(r){oe._getMatrix(Wd,oe.workingColorSpace,r);const t=`mat3( ${Wd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(r)){case Yr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Xd(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+dS(r.getShaderSource(t),o)}else return s}function pS(r,t){const e=fS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const mS={[fh]:"Linear",[ph]:"Reinhard",[mh]:"Cineon",[gh]:"ACESFilmic",[vh]:"AgX",[_h]:"Neutral",[xh]:"Custom"};function gS(r,t){const e=mS[t];return e===void 0?(pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ro=new C;function xS(){oe.getLuminanceCoefficients(ro);const r=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function _S(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function yS(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Cr(r){return r!==""}function qd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MS=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(r){return r.replace(MS,bS)}const SS=new Map;function bS(r,t){let e=Qt[t];if(e===void 0){const i=SS.get(t);if(i!==void 0)e=Qt[i],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return oh(e)}const wS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(r){return r.replace(wS,AS)}function AS(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Kd(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const TS={[Ys]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function ES(r){return TS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CS={[$i]:"ENVMAP_TYPE_CUBE",[In]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE_UV"};function RS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":CS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const PS={[In]:"ENVMAP_MODE_REFRACTION"};function IS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":PS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LS={[ia]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Lf]:"ENVMAP_BLENDING_ADD"};function DS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":LS[r.combine]||"ENVMAP_BLENDING_NONE"}function NS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function US(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ES(e),c=RS(e),h=IS(e),d=DS(e),u=NS(e),f=vS(e),p=_S(s),x=n.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Cr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Cr).join(`
`),m.length>0&&(m+=`
`)):(g=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),m=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?gS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,pS("linearToOutputTexel",e.outputColorSpace),xS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),a=oh(a),a=qd(a,e),a=Yd(a,e),o=oh(o),o=qd(o,e),o=Yd(o,e),a=Zd(a),o=Zd(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+g+a,_=v+m+o,S=Hd(n,n.VERTEX_SHADER,M),w=Hd(n,n.FRAGMENT_SHADER,_);n.attachShader(x,S),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function E(I){if(r.debug.checkShaderErrors){const D=n.getProgramInfoLog(x)||"",B=n.getShaderInfoLog(S)||"",L=n.getShaderInfoLog(w)||"",O=D.trim(),G=B.trim(),W=L.trim();let tt=!0,X=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,S,w);else{const K=Xd(n,S,"vertex"),J=Xd(n,w,"fragment");Nt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+K+`
`+J)}else O!==""?pt("WebGLProgram: Program Info Log:",O):(G===""||W==="")&&(X=!1);X&&(I.diagnostics={runnable:tt,programLog:O,vertexShader:{log:G,prefix:g},fragmentShader:{log:W,prefix:m}})}n.deleteShader(S),n.deleteShader(w),y=new fo(n,x),A=yS(n,x)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(x,hS)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uS++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}let FS=0;class OS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new BS(t),e.set(t,i)),i}}class BS{constructor(t){this.id=FS++,this.code=t,this.usedTimes=0}}function zS(r){return r===pn||r===Hr||r===Wr}function kS(r,t,e,i,n,s){const a=new _l,o=new OS,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,A,R,I,D,B){const L=I.fog,O=D.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,tt=t.get(y.envMap||G,W),X=tt&&tt.mapping===nr?tt.image.height:null,K=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&pt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,wt=J!==void 0?J.length:0;let mt=0;O.morphAttributes.position!==void 0&&(mt=1),O.morphAttributes.normal!==void 0&&(mt=2),O.morphAttributes.color!==void 0&&(mt=3);let Yt,kt,le,Z;if(K){const Se=zi[K];Yt=Se.vertexShader,kt=Se.fragmentShader}else{Yt=y.vertexShader,kt=y.fragmentShader;const Se=o.getVertexShaderStage(y),me=o.getFragmentShaderStage(y);o.update(y,Se,me),le=Se.id,Z=me.id}const it=r.getRenderTarget(),gt=r.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,At=D.isBatchedMesh===!0,Xt=!!y.map,_e=!!y.matcap,st=!!tt,at=!!y.aoMap,ot=!!y.lightMap,lt=!!y.bumpMap&&y.wireframe===!1,dt=!!y.normalMap,Gt=!!y.displacementMap,zt=!!y.emissiveMap,qt=!!y.metalnessMap,$t=!!y.roughnessMap,N=y.anisotropy>0,pe=y.clearcoat>0,re=y.dispersion>0,P=y.retroreflectivity>0,b=y.iridescence>0,z=y.sheen>0,H=y.transmission>0,$=N&&!!y.anisotropyMap,ht=pe&&!!y.clearcoatMap,ut=pe&&!!y.clearcoatNormalMap,j=pe&&!!y.clearcoatRoughnessMap,nt=b&&!!y.iridescenceMap,xt=b&&!!y.iridescenceThicknessMap,Ut=z&&!!y.sheenColorMap,Mt=z&&!!y.sheenRoughnessMap,vt=!!y.specularMap,Ft=!!y.specularColorMap,Ht=!!y.specularIntensityMap,jt=H&&!!y.transmissionMap,F=H&&!!y.thicknessMap,_t=!!y.gradientMap,et=!!y.alphaMap,yt=y.alphaTest>0,Tt=!!y.alphaHash,rt=!!y.extensions;let Bt=Ri;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Bt=r.toneMapping);const Lt={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Yt,fragmentShader:kt,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:At,batchingColor:At&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:_e,envMap:st,envMapMode:st&&tt.mapping,envMapCubeUVHeight:X,aoMap:at,lightMap:ot,bumpMap:lt,normalMap:dt,displacementMap:Gt,emissiveMap:zt,normalMapObjectSpace:dt&&y.normalMapType===Bf,normalMapTangentSpace:dt&&y.normalMapType===mn,packedNormalMap:dt&&y.normalMapType===mn&&zS(y.normalMap.format),metalnessMap:qt,roughnessMap:$t,anisotropy:N,anisotropyMap:$,clearcoat:pe,clearcoatMap:ht,clearcoatNormalMap:ut,clearcoatRoughnessMap:j,dispersion:re,retroreflection:P,iridescence:b,iridescenceMap:nt,iridescenceThicknessMap:xt,sheen:z,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:vt,specularColorMap:Ft,specularIntensityMap:Ht,transmission:H,transmissionMap:jt,thicknessMap:F,gradientMap:_t,opaque:y.transparent===!1&&y.blending===Zs&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:yt,alphaHash:Tt,combine:y.combine,mapUv:Xt&&p(y.map.channel),aoMapUv:at&&p(y.aoMap.channel),lightMapUv:ot&&p(y.lightMap.channel),bumpMapUv:lt&&p(y.bumpMap.channel),normalMapUv:dt&&p(y.normalMap.channel),displacementMapUv:Gt&&p(y.displacementMap.channel),emissiveMapUv:zt&&p(y.emissiveMap.channel),metalnessMapUv:qt&&p(y.metalnessMap.channel),roughnessMapUv:$t&&p(y.roughnessMap.channel),anisotropyMapUv:$&&p(y.anisotropyMap.channel),clearcoatMapUv:ht&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&p(y.sheenRoughnessMap.channel),specularMapUv:vt&&p(y.specularMap.channel),specularColorMapUv:Ft&&p(y.specularColorMap.channel),specularIntensityMapUv:Ht&&p(y.specularIntensityMap.channel),transmissionMapUv:jt&&p(y.transmissionMap.channel),thicknessMapUv:F&&p(y.thicknessMap.channel),alphaMapUv:et&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||N),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Xt||et),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&dt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:mt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===xe,decodeVideoTextureEmissive:zt&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ei,flipSided:y.side===Ye,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&y.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)A.push(R),A.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(A,y),v(A,y),A.push(r.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){const A=f[y.type];let R;if(A){const I=zi[A];R=ua.clone(I.uniforms)}else R=y.uniforms;return R}function _(y,A){let R=h.get(A);return R!==void 0?++R.usedTimes:(R=new US(r,A,y,n),c.push(R),h.set(A,R)),R}function S(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function E(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:_,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:E}}function VS(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function GS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Jd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $d(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let v=r[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},r[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),t++,v}function l(u,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);const M=o(u,f,p,x,g,m);p.transmission>0?i.push(M):p.transparent===!0?n.push(M):e.push(M)}function c(u,f,p,x,g,m){const v=o(u,f,p,x,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||GS),i.length>1&&i.sort(f||Jd),n.length>1&&n.sort(f||Jd)}function d(){for(let u=t,f=r.length;u<f;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function HS(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new $d,r.set(i,[a])):n>=s.length?(a=new $d,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function WS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new ct};break;case"SpotLight":e={position:new C,direction:new C,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function XS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let qS=0;function YS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ZS(r){const t=new WS,e=XS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const n=new C,s=new Zt,a=new Zt;function o(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,M=0,_=0,S=0,w=0,E=0,y=0,A=0,R=0;c.sort(YS);for(let D=0,B=c.length;D<B;D++){const L=c[D],O=L.color,G=L.intensity,W=L.distance;let tt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===pn?tt=L.shadow.map.texture:tt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*G,d+=O.g*G,u+=O.b*G;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],G);R++}else if(L.isSunLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,J=e.get(L);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[p]=J,i.sunShadowMap[p]=tt;const wt=K.getViewportCount();for(let mt=0;mt<wt;mt++)i.sunShadowMatrix[x+mt]=K.getMatrix(mt),i.sunShadowCascade[x+mt]=K._cascadeData[mt];x+=wt,p++}i.sun[f]=X,f++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,J=e.get(L);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=tt,i.directionalShadowMatrix[g]=L.shadow.matrix,S++}i.directional[g]=X,g++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(G),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;const K=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,K.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[v]=K.matrix,L.castShadow){const J=e.get(L);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=tt,E++}v++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(O).multiplyScalar(G),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=X,M++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const K=L.shadow,J=e.get(L);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=tt,i.pointShadowMatrix[m]=L.shadow.matrix,w++}i.point[m]=X,m++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(G),X.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[_]=X,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==M||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==E||I.numSpotMaps!==y||I.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=M,i.point.length=m,i.hemi.length=_,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,I.sunLength=f,I.directionalLength=g,I.pointLength=m,I.spotLength=v,I.rectAreaLength=M,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=E,I.numSpotMaps=y,I.numLightProbes=R,i.version=qS++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const _=c[v];if(_.isSunLight){const S=i.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),d++}else if(_.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),u++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function jd(r){const t=new ZS(r),e=[],i=[],n=[];function s(u){d.camera=u,e.length=0,i.length=0,n.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){n.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function KS(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new jd(r),t.set(n,[o])):s>=a.length?(o=new jd(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const JS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$S=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jS=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],QS=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Qd=new Zt,wr=new C,Uc=new C;function t1(r,t,e){let i=new os;const n=new Q,s=new Q,a=new se,o=new Wh,l=new Xh,c={},h=e.maxTextureSize,d={[Pn]:Ye,[Ye]:Pn,[ei]:ei},u=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:JS,fragmentShader:$S}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Kt;p.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ve(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let m=this.type;this.render=function(w,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===mf&&(pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);const A=r.getRenderTarget(),R=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Ji),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=m!==this.type;B&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=w.length;L<O;L++){const G=w[L],W=G.shadow;if(W===void 0){pt("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const tt=W.getFrameExtents();n.multiply(tt),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/tt.x),n.x=s.x*tt.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/tt.y),n.y=s.y*tt.y,W.mapSize.y=s.y));const X=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Hs){if(G.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ci(n.x,n.y,{format:pn,type:Ai,minFilter:fe,magFilter:fe,generateMipmaps:!1}),W.map.texture.name=G.name+".shadowMap",W.map.depthTexture=new tr(n.x,n.y,oi),W.map.depthTexture.name=G.name+".shadowMapDepth",W.map.depthTexture.format=ji,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=we,W.map.depthTexture.magFilter=we}else G.isPointLight?(W.map=new su(n.x),W.map.depthTexture=new ap(n.x,Pi)):(W.map=new ci(n.x,n.y),W.map.depthTexture=new tr(n.x,n.y,Pi)),W.map.depthTexture.name=G.name+".shadowMap",W.map.depthTexture.format=ji,this.type===Ys?(W.map.depthTexture.compareFunction=X?ml:pl,W.map.depthTexture.minFilter=fe,W.map.depthTexture.magFilter=fe):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=we,W.map.depthTexture.magFilter=we);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==n.x||W.map.height!==n.y)&&W.map.setSize(n.x,n.y);const K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();G.isPointLight!==!0&&W.updateMatrices(G,y);for(let J=0;J<K;J++){const wt=W.getCamera(J);if(G.isPointLight){const mt=W.camera,Yt=W.matrix,kt=G.distance||mt.far;kt!==mt.far&&(mt.far=kt,mt.updateProjectionMatrix()),wr.setFromMatrixPosition(G.matrixWorld),mt.position.copy(wr),Uc.copy(mt.position),Uc.add(jS[J]),mt.up.copy(QS[J]),mt.lookAt(Uc),mt.updateMatrixWorld(),Yt.makeTranslation(-wr.x,-wr.y,-wr.z),Qd.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Qd,mt.coordinateSystem,mt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,J),r.clear();else{J===0&&(r.setRenderTarget(W.map),r.clear());const mt=W.getViewport(J);a.set(s.x*mt.x,s.y*mt.y,s.x*mt.z,s.y*mt.w),D.viewport(a)}i=W.getFrustum(J),_(E,y,wt,G,this.type)}W.isPointLightShadow!==!0&&this.type===Hs&&v(W,y),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(A,R,I)};function v(w,E){const y=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ci(n.x,n.y,{format:pn,type:Ai}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,y,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,y,f,x,null)}function M(w,E,y,A){let R=null;const I=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)R=I;else if(R=y.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const D=R.uuid,B=E.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let O=L[B];O===void 0&&(O=R.clone(),L[B]=O,E.addEventListener("dispose",S)),R=O}if(R.visible=E.visible,R.wireframe=E.wireframe,A===Hs?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:d[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=r.properties.get(R);D.light=y}return R}function _(w,E,y,A,R){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Hs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const B=t.update(w),L=w.material;if(Array.isArray(L)){const O=B.groups;for(let G=0,W=O.length;G<W;G++){const tt=O[G],X=L[tt.materialIndex];if(X&&X.visible){const K=M(w,X,A,R);w.onBeforeShadow(r,w,E,y,B,K,tt),r.renderBufferDirect(y,null,B,K,w,tt),w.onAfterShadow(r,w,E,y,B,K,tt)}}}else if(L.visible){const O=M(w,L,A,R);w.onBeforeShadow(r,w,E,y,B,O,null),r.renderBufferDirect(y,null,B,O,w,null),w.onAfterShadow(r,w,E,y,B,O,null)}}const D=w.children;for(let B=0,L=D.length;B<L;B++)_(D[B],E,y,A,R)}function S(w){w.target.removeEventListener("dispose",S);for(const y in c){const A=c[y],R=w.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function e1(r,t){function e(){let F=!1;const _t=new se;let et=null;const yt=new se(0,0,0,0);return{setMask:function(Tt){et!==Tt&&!F&&(r.colorMask(Tt,Tt,Tt,Tt),et=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,rt,Bt,Lt,Se){Se===!0&&(Tt*=Lt,rt*=Lt,Bt*=Lt),_t.set(Tt,rt,Bt,Lt),yt.equals(_t)===!1&&(r.clearColor(Tt,rt,Bt,Lt),yt.copy(_t))},reset:function(){F=!1,et=null,yt.set(-1,0,0,0)}}}function i(){let F=!1,_t=!1,et=null,yt=null,Tt=null;return{setReversed:function(rt){if(_t!==rt){const Bt=t.get("EXT_clip_control");rt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),_t=rt;const Lt=Tt;Tt=null,this.setClear(Lt)}},getReversed:function(){return _t},setTest:function(rt){rt?it(r.DEPTH_TEST):gt(r.DEPTH_TEST)},setMask:function(rt){et!==rt&&!F&&(r.depthMask(rt),et=rt)},setFunc:function(rt){if(_t&&(rt=f0[rt]),yt!==rt){switch(rt){case po:r.depthFunc(r.NEVER);break;case mo:r.depthFunc(r.ALWAYS);break;case go:r.depthFunc(r.LESS);break;case Js:r.depthFunc(r.LEQUAL);break;case xo:r.depthFunc(r.EQUAL);break;case vo:r.depthFunc(r.GEQUAL);break;case _o:r.depthFunc(r.GREATER);break;case yo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}yt=rt}},setLocked:function(rt){F=rt},setClear:function(rt){Tt!==rt&&(Tt=rt,_t&&(rt=1-rt),r.clearDepth(rt))},reset:function(){F=!1,et=null,yt=null,Tt=null,_t=!1}}}function n(){let F=!1,_t=null,et=null,yt=null,Tt=null,rt=null,Bt=null,Lt=null,Se=null;return{setTest:function(me){F||(me?it(r.STENCIL_TEST):gt(r.STENCIL_TEST))},setMask:function(me){_t!==me&&!F&&(r.stencilMask(me),_t=me)},setFunc:function(me,Li,Wi){(et!==me||yt!==Li||Tt!==Wi)&&(r.stencilFunc(me,Li,Wi),et=me,yt=Li,Tt=Wi)},setOp:function(me,Li,Wi){(rt!==me||Bt!==Li||Lt!==Wi)&&(r.stencilOp(me,Li,Wi),rt=me,Bt=Li,Lt=Wi)},setLocked:function(me){F=me},setClear:function(me){Se!==me&&(r.clearStencil(me),Se=me)},reset:function(){F=!1,_t=null,et=null,yt=null,Tt=null,rt=null,Bt=null,Lt=null,Se=null}}}const s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,M=null,_=null,S=null,w=null,E=null,y=new ct(0,0,0),A=0,R=!1,I=null,D=null,B=null,L=null,O=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,tt=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=tt>=2);let K=null,J={};const wt=r.getParameter(r.SCISSOR_BOX),mt=r.getParameter(r.VIEWPORT),Yt=new se().fromArray(wt),kt=new se().fromArray(mt);function le(F,_t,et,yt){const Tt=new Uint8Array(4),rt=r.createTexture();r.bindTexture(F,rt),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<et;Bt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(_t,0,r.RGBA,1,1,yt,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(_t+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return rt}const Z={};Z[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(r.DEPTH_TEST),a.setFunc(Js),lt(!1),dt(Wc),it(r.CULL_FACE),at(Ji);function it(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function gt(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Vt(F,_t){return u[F]!==_t?(r.bindFramebuffer(F,_t),u[F]=_t,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=_t),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=_t),!0):!1}function At(F,_t){let et=p,yt=!1;if(F){et=f.get(_t),et===void 0&&(et=[],f.set(_t,et));const Tt=F.textures;if(et.length!==Tt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let rt=0,Bt=Tt.length;rt<Bt;rt++)et[rt]=r.COLOR_ATTACHMENT0+rt;et.length=Tt.length,yt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,yt=!0);yt&&r.drawBuffers(et)}function Xt(F){return x!==F?(r.useProgram(F),x=F,!0):!1}const _e={[ln]:r.FUNC_ADD,[gf]:r.FUNC_SUBTRACT,[xf]:r.FUNC_REVERSE_SUBTRACT};_e[vf]=r.MIN,_e[_f]=r.MAX;const st={[hh]:r.ZERO,[es]:r.ONE,[yf]:r.SRC_COLOR,[uh]:r.SRC_ALPHA,[Tf]:r.SRC_ALPHA_SATURATE,[wf]:r.DST_COLOR,[Sf]:r.DST_ALPHA,[Mf]:r.ONE_MINUS_SRC_COLOR,[dh]:r.ONE_MINUS_SRC_ALPHA,[Af]:r.ONE_MINUS_DST_COLOR,[bf]:r.ONE_MINUS_DST_ALPHA,[Ef]:r.CONSTANT_COLOR,[Cf]:r.ONE_MINUS_CONSTANT_COLOR,[Rf]:r.CONSTANT_ALPHA,[Pf]:r.ONE_MINUS_CONSTANT_ALPHA};function at(F,_t,et,yt,Tt,rt,Bt,Lt,Se,me){if(F===Ji){g===!0&&(gt(r.BLEND),g=!1);return}if(g===!1&&(it(r.BLEND),g=!0),F!==rl){if(F!==m||me!==R){if((v!==ln||S!==ln)&&(r.blendEquation(r.FUNC_ADD),v=ln,S=ln),me)switch(F){case Zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xc:r.blendFunc(r.ONE,r.ONE);break;case qc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Nt("WebGLState: Invalid blending: ",F);break}else switch(F){case Zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case qc:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",F);break}M=null,_=null,w=null,E=null,y.set(0,0,0),A=0,m=F,R=me}return}Tt=Tt||_t,rt=rt||et,Bt=Bt||yt,(_t!==v||Tt!==S)&&(r.blendEquationSeparate(_e[_t],_e[Tt]),v=_t,S=Tt),(et!==M||yt!==_||rt!==w||Bt!==E)&&(r.blendFuncSeparate(st[et],st[yt],st[rt],st[Bt]),M=et,_=yt,w=rt,E=Bt),(Lt.equals(y)===!1||Se!==A)&&(r.blendColor(Lt.r,Lt.g,Lt.b,Se),y.copy(Lt),A=Se),m=F,R=!1}function ot(F,_t){F.side===ei?gt(r.CULL_FACE):it(r.CULL_FACE);let et=F.side===Ye;_t&&(et=!et),lt(et),F.blending===Zs&&F.transparent===!1?at(Ji):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const yt=F.stencilWrite;o.setTest(yt),yt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),zt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(F){I!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),I=F)}function dt(F){F!==ff?(it(r.CULL_FACE),F!==D&&(F===Wc?r.cullFace(r.BACK):F===pf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):gt(r.CULL_FACE),D=F}function Gt(F){F!==B&&(W&&r.lineWidth(F),B=F)}function zt(F,_t,et){F?(it(r.POLYGON_OFFSET_FILL),(L!==_t||O!==et)&&(L=_t,O=et,a.getReversed()&&(_t=-_t),r.polygonOffset(_t,et))):gt(r.POLYGON_OFFSET_FILL)}function qt(F){F?it(r.SCISSOR_TEST):gt(r.SCISSOR_TEST)}function $t(F){F===void 0&&(F=r.TEXTURE0+G-1),K!==F&&(r.activeTexture(F),K=F)}function N(F,_t,et){et===void 0&&(K===null?et=r.TEXTURE0+G-1:et=K);let yt=J[et];yt===void 0&&(yt={type:void 0,texture:void 0},J[et]=yt),(yt.type!==F||yt.texture!==_t)&&(K!==et&&(r.activeTexture(et),K=et),r.bindTexture(F,_t||Z[F]),yt.type=F,yt.texture=_t)}function pe(){const F=J[K];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function re(){try{r.compressedTexImage2D(...arguments)}catch(F){Nt("WebGLState:",F)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(F){Nt("WebGLState:",F)}}function b(){try{r.texSubImage2D(...arguments)}catch(F){Nt("WebGLState:",F)}}function z(){try{r.texSubImage3D(...arguments)}catch(F){Nt("WebGLState:",F)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(F){Nt("WebGLState:",F)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(F){Nt("WebGLState:",F)}}function ht(){try{r.texStorage2D(...arguments)}catch(F){Nt("WebGLState:",F)}}function ut(){try{r.texStorage3D(...arguments)}catch(F){Nt("WebGLState:",F)}}function j(){try{r.texImage2D(...arguments)}catch(F){Nt("WebGLState:",F)}}function nt(){try{r.texImage3D(...arguments)}catch(F){Nt("WebGLState:",F)}}function xt(F){return d[F]!==void 0?d[F]:r.getParameter(F)}function Ut(F,_t){d[F]!==_t&&(r.pixelStorei(F,_t),d[F]=_t)}function Mt(F){Yt.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Yt.copy(F))}function vt(F){kt.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),kt.copy(F))}function Ft(F,_t){let et=c.get(_t);et===void 0&&(et=new WeakMap,c.set(_t,et));let yt=et.get(F);yt===void 0&&(yt=r.getUniformBlockIndex(_t,F.name),et.set(F,yt))}function Ht(F,_t){const yt=c.get(_t).get(F);l.get(_t)!==yt&&(r.uniformBlockBinding(_t,yt,F.__bindingPointIndex),l.set(_t,yt))}function jt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,J={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,M=null,_=null,S=null,w=null,E=null,y=new ct(0,0,0),A=0,R=!1,I=null,D=null,B=null,L=null,O=null,Yt.set(0,0,r.canvas.width,r.canvas.height),kt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:it,disable:gt,bindFramebuffer:Vt,drawBuffers:At,useProgram:Xt,setBlending:at,setMaterial:ot,setFlipSided:lt,setCullFace:dt,setLineWidth:Gt,setPolygonOffset:zt,setScissorTest:qt,activeTexture:$t,bindTexture:N,unbindTexture:pe,compressedTexImage2D:re,compressedTexImage3D:P,texImage2D:j,texImage3D:nt,pixelStorei:Ut,getParameter:xt,updateUBOMapping:Ft,uniformBlockBinding:Ht,texStorage2D:ht,texStorage3D:ut,texSubImage2D:b,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:Mt,viewport:vt,reset:jt}}function i1(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return p?new OffscreenCanvas(P,b):Zr("canvas")}function g(P,b,z){let H=1;const $=re(P);if(($.width>z||$.height>z)&&(H=z/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ht=Math.floor(H*$.width),ut=Math.floor(H*$.height);u===void 0&&(u=x(ht,ut));const j=b?x(ht,ut):u;return j.width=ht,j.height=ut,j.getContext("2d").drawImage(P,0,0,ht,ut),pt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ht+"x"+ut+")."),j}else return"data"in P&&pt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function m(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(P,b,z,H,$,ht=!1){if(P!==null){if(r[P]!==void 0)return r[P];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut;H&&(ut=t.get("EXT_texture_norm16"),ut||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=b;if(b===r.RED&&(z===r.FLOAT&&(j=r.R32F),z===r.HALF_FLOAT&&(j=r.R16F),z===r.UNSIGNED_BYTE&&(j=r.R8),z===r.UNSIGNED_SHORT&&ut&&(j=ut.R16_EXT),z===r.SHORT&&ut&&(j=ut.R16_SNORM_EXT)),b===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.R8UI),z===r.UNSIGNED_SHORT&&(j=r.R16UI),z===r.UNSIGNED_INT&&(j=r.R32UI),z===r.BYTE&&(j=r.R8I),z===r.SHORT&&(j=r.R16I),z===r.INT&&(j=r.R32I)),b===r.RG&&(z===r.FLOAT&&(j=r.RG32F),z===r.HALF_FLOAT&&(j=r.RG16F),z===r.UNSIGNED_BYTE&&(j=r.RG8),z===r.UNSIGNED_SHORT&&ut&&(j=ut.RG16_EXT),z===r.SHORT&&ut&&(j=ut.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.RG8UI),z===r.UNSIGNED_SHORT&&(j=r.RG16UI),z===r.UNSIGNED_INT&&(j=r.RG32UI),z===r.BYTE&&(j=r.RG8I),z===r.SHORT&&(j=r.RG16I),z===r.INT&&(j=r.RG32I)),b===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.RGB8UI),z===r.UNSIGNED_SHORT&&(j=r.RGB16UI),z===r.UNSIGNED_INT&&(j=r.RGB32UI),z===r.BYTE&&(j=r.RGB8I),z===r.SHORT&&(j=r.RGB16I),z===r.INT&&(j=r.RGB32I)),b===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),z===r.UNSIGNED_INT&&(j=r.RGBA32UI),z===r.BYTE&&(j=r.RGBA8I),z===r.SHORT&&(j=r.RGBA16I),z===r.INT&&(j=r.RGBA32I)),b===r.RGB&&(z===r.UNSIGNED_SHORT&&ut&&(j=ut.RGB16_EXT),z===r.SHORT&&ut&&(j=ut.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),b===r.RGBA){const nt=ht?Yr:oe.getTransfer($);z===r.FLOAT&&(j=r.RGBA32F),z===r.HALF_FLOAT&&(j=r.RGBA16F),z===r.UNSIGNED_BYTE&&(j=nt===xe?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ut&&(j=ut.RGBA16_EXT),z===r.SHORT&&ut&&(j=ut.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(P,b){let z;return P?b===null||b===Pi||b===js?z=r.DEPTH24_STENCIL8:b===oi?z=r.DEPTH32F_STENCIL8:b===$s&&(z=r.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pi||b===js?z=r.DEPTH_COMPONENT24:b===oi?z=r.DEPTH_COMPONENT32F:b===$s&&(z=r.DEPTH_COMPONENT16),z}function w(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==we&&P.minFilter!==fe?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function E(P){const b=P.target;b.removeEventListener("dispose",E),A(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function y(P){const b=P.target;b.removeEventListener("dispose",y),I(b)}function A(P){const b=i.get(P);if(b.__webglInit===void 0)return;const z=P.source,H=f.get(z);if(H){const $=H[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(P),Object.keys(H).length===0&&f.delete(z)}i.remove(P)}function R(P){const b=i.get(P);r.deleteTexture(b.__webglTexture);const z=P.source,H=f.get(z);delete H[b.__cacheKey],a.memory.textures--}function I(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(b.__webglFramebuffer[H]))for(let $=0;$<b.__webglFramebuffer[H].length;$++)r.deleteFramebuffer(b.__webglFramebuffer[H][$]);else r.deleteFramebuffer(b.__webglFramebuffer[H]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[H])}else{if(Array.isArray(b.__webglFramebuffer))for(let H=0;H<b.__webglFramebuffer.length;H++)r.deleteFramebuffer(b.__webglFramebuffer[H]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let H=0;H<b.__webglColorRenderbuffer.length;H++)b.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[H]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=P.textures;for(let H=0,$=z.length;H<$;H++){const ht=i.get(z[H]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(z[H])}i.remove(P)}let D=0;function B(){D=0}function L(){return D}function O(P){D=P}function G(){const P=D;return P>=n.maxTextures&&pt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+n.maxTextures),D+=1,P}function W(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function tt(P,b){const z=i.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const H=P.image;if(H===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(z,P,b);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+b)}function X(P,b){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){gt(z,P,b);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+b)}function K(P,b){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){gt(z,P,b);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+b)}function J(P,b){const z=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Vt(z,P,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+b)}const wt={[ns]:r.REPEAT,[qe]:r.CLAMP_TO_EDGE,[Gr]:r.MIRRORED_REPEAT},mt={[we]:r.NEAREST,[yh]:r.NEAREST_MIPMAP_NEAREST,[Ws]:r.NEAREST_MIPMAP_LINEAR,[fe]:r.LINEAR,[Lr]:r.LINEAR_MIPMAP_NEAREST,[xi]:r.LINEAR_MIPMAP_LINEAR},Yt={[kf]:r.NEVER,[Xf]:r.ALWAYS,[Vf]:r.LESS,[pl]:r.LEQUAL,[Gf]:r.EQUAL,[ml]:r.GEQUAL,[Hf]:r.GREATER,[Wf]:r.NOTEQUAL};function kt(P,b){if(b.type===oi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===fe||b.magFilter===Lr||b.magFilter===Ws||b.magFilter===xi||b.minFilter===fe||b.minFilter===Lr||b.minFilter===Ws||b.minFilter===xi)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,wt[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,wt[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,wt[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,mt[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,mt[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Yt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===we||b.minFilter!==Ws&&b.minFilter!==xi||b.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function le(P,b){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",E));const H=b.source;let $=f.get(H);$===void 0&&($={},f.set(H,$));const ht=W(b);if(ht!==P.__cacheKey){$[ht]===void 0&&($[ht]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[ht].usedTimes++;const ut=$[P.__cacheKey];ut!==void 0&&($[P.__cacheKey].usedTimes--,ut.usedTimes===0&&R(b)),P.__cacheKey=ht,P.__webglTexture=$[ht].texture}return z}function Z(P,b,z){return Math.floor(Math.floor(P/z)/b)}function it(P,b,z,H){const ht=P.updateRanges;if(ht.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,z,H,b.data);else{ht.sort((Ut,Mt)=>Ut.start-Mt.start);let ut=0;for(let Ut=1;Ut<ht.length;Ut++){const Mt=ht[ut],vt=ht[Ut],Ft=Mt.start+Mt.count,Ht=Z(vt.start,b.width,4),jt=Z(Mt.start,b.width,4);vt.start<=Ft+1&&Ht===jt&&Z(vt.start+vt.count-1,b.width,4)===Ht?Mt.count=Math.max(Mt.count,vt.start+vt.count-Mt.start):(++ut,ht[ut]=vt)}ht.length=ut+1;const j=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),xt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ut=0,Mt=ht.length;Ut<Mt;Ut++){const vt=ht[Ut],Ft=Math.floor(vt.start/4),Ht=Math.ceil(vt.count/4),jt=Ft%b.width,F=Math.floor(Ft/b.width),_t=Ht,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(r.UNPACK_SKIP_ROWS,F),e.texSubImage2D(r.TEXTURE_2D,0,jt,F,_t,et,z,H,b.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,j),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,xt)}}function gt(P,b,z){let H=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(H=r.TEXTURE_3D);const $=le(P,b),ht=b.source;e.bindTexture(H,P.__webglTexture,r.TEXTURE0+z);const ut=i.get(ht);if(ht.version!==ut.__version||$===!0){if(e.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const et=oe.getPrimaries(oe.workingColorSpace),yt=b.colorSpace===cn?null:oe.getPrimaries(b.colorSpace),Tt=b.colorSpace===cn||et===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let nt=g(b.image,!1,n.maxTextureSize);nt=pe(b,nt);const xt=s.convert(b.format,b.colorSpace),Ut=s.convert(b.type);let Mt=_(b.internalFormat,xt,Ut,b.normalized,b.colorSpace,b.isVideoTexture);kt(H,b);let vt;const Ft=b.mipmaps,Ht=b.isVideoTexture!==!0,jt=ut.__version===void 0||$===!0,F=ht.dataReady,_t=w(b,nt);if(b.isDepthTexture)Mt=S(b.format===Cn,b.type),jt&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,Mt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Mt,nt.width,nt.height,0,xt,Ut,null));else if(b.isDataTexture)if(Ft.length>0){Ht&&jt&&e.texStorage2D(r.TEXTURE_2D,_t,Mt,Ft[0].width,Ft[0].height);for(let et=0,yt=Ft.length;et<yt;et++)vt=Ft[et],Ht?F&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,vt.width,vt.height,xt,Ut,vt.data):e.texImage2D(r.TEXTURE_2D,et,Mt,vt.width,vt.height,0,xt,Ut,vt.data);b.generateMipmaps=!1}else Ht?(jt&&e.texStorage2D(r.TEXTURE_2D,_t,Mt,nt.width,nt.height),F&&it(b,nt,xt,Ut)):e.texImage2D(r.TEXTURE_2D,0,Mt,nt.width,nt.height,0,xt,Ut,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ht&&jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Mt,Ft[0].width,Ft[0].height,nt.depth);for(let et=0,yt=Ft.length;et<yt;et++)if(vt=Ft[et],b.format!==Le)if(xt!==null)if(Ht){if(F)if(b.layerUpdates.size>0){const Tt=rh(vt.width,vt.height,b.format,b.type);for(const rt of b.layerUpdates){const Bt=vt.data.subarray(rt*Tt/vt.data.BYTES_PER_ELEMENT,(rt+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,rt,vt.width,vt.height,1,xt,Bt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,vt.width,vt.height,nt.depth,xt,vt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,Mt,vt.width,vt.height,nt.depth,0,vt.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?F&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,vt.width,vt.height,nt.depth,xt,Ut,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,Mt,vt.width,vt.height,nt.depth,0,xt,Ut,vt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ht&&jt&&e.texStorage2D(r.TEXTURE_2D,_t,Mt,Ft[0].width,Ft[0].height);for(let et=0,yt=Ft.length;et<yt;et++)vt=Ft[et],b.format!==Le?xt!==null?Ht?F&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,et,Mt,vt.width,vt.height,0,vt.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?F&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,vt.width,vt.height,xt,Ut,vt.data):e.texImage2D(r.TEXTURE_2D,et,Mt,vt.width,vt.height,0,xt,Ut,vt.data)}else if(b.isDataArrayTexture)if(Ht){if(jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Mt,nt.width,nt.height,nt.depth),F)if(b.layerUpdates.size>0){const et=rh(nt.width,nt.height,b.format,b.type);for(const yt of b.layerUpdates){const Tt=nt.data.subarray(yt*et/nt.data.BYTES_PER_ELEMENT,(yt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,nt.width,nt.height,1,xt,Ut,Tt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,Ut,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Mt,nt.width,nt.height,nt.depth,0,xt,Ut,nt.data);else if(b.isData3DTexture)Ht?(jt&&e.texStorage3D(r.TEXTURE_3D,_t,Mt,nt.width,nt.height,nt.depth),F&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,Ut,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Mt,nt.width,nt.height,nt.depth,0,xt,Ut,nt.data);else if(b.isFramebufferTexture){if(jt)if(Ht)e.texStorage2D(r.TEXTURE_2D,_t,Mt,nt.width,nt.height);else{let et=nt.width,yt=nt.height;for(let Tt=0;Tt<_t;Tt++)e.texImage2D(r.TEXTURE_2D,Tt,Mt,et,yt,0,xt,Ut,null),et>>=1,yt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),d.add(b),et.onpaint=yt=>{const Tt=yt.changedElements;for(const rt of d)Tt.includes(rt.image)&&(rt.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{const Tt=r.RGBA,rt=r.RGBA,Bt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Tt,rt,Bt,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Ht&&jt){const et=re(Ft[0]);e.texStorage2D(r.TEXTURE_2D,_t,Mt,et.width,et.height)}for(let et=0,yt=Ft.length;et<yt;et++)vt=Ft[et],Ht?F&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,xt,Ut,vt):e.texImage2D(r.TEXTURE_2D,et,Mt,xt,Ut,vt);b.generateMipmaps=!1}else if(Ht){if(jt){const et=re(nt);e.texStorage2D(r.TEXTURE_2D,_t,Mt,et.width,et.height)}F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,Ut,nt)}else e.texImage2D(r.TEXTURE_2D,0,Mt,xt,Ut,nt);m(b)&&v(H),ut.__version=ht.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Vt(P,b,z){if(b.image.length!==6)return;const H=le(P,b),$=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+z);const ht=i.get($);if($.version!==ht.__version||H===!0){e.activeTexture(r.TEXTURE0+z);const ut=oe.getPrimaries(oe.workingColorSpace),j=b.colorSpace===cn?null:oe.getPrimaries(b.colorSpace),nt=b.colorSpace===cn||ut===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const xt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ut=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let rt=0;rt<6;rt++)!xt&&!Ut?Mt[rt]=g(b.image[rt],!0,n.maxCubemapSize):Mt[rt]=Ut?b.image[rt].image:b.image[rt],Mt[rt]=pe(b,Mt[rt]);const vt=Mt[0],Ft=s.convert(b.format,b.colorSpace),Ht=s.convert(b.type),jt=_(b.internalFormat,Ft,Ht,b.normalized,b.colorSpace),F=b.isVideoTexture!==!0,_t=ht.__version===void 0||H===!0,et=$.dataReady;let yt=w(b,vt);kt(r.TEXTURE_CUBE_MAP,b);let Tt;if(xt){F&&_t&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,jt,vt.width,vt.height);for(let rt=0;rt<6;rt++){Tt=Mt[rt].mipmaps;for(let Bt=0;Bt<Tt.length;Bt++){const Lt=Tt[Bt];b.format!==Le?Ft!==null?F?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Lt.width,Lt.height,Ft,Lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,jt,Lt.width,Lt.height,0,Lt.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Lt.width,Lt.height,Ft,Ht,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,jt,Lt.width,Lt.height,0,Ft,Ht,Lt.data)}}}else{if(Tt=b.mipmaps,F&&_t){Tt.length>0&&yt++;const rt=re(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ut){F?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Mt[rt].width,Mt[rt].height,Ft,Ht,Mt[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,Mt[rt].width,Mt[rt].height,0,Ft,Ht,Mt[rt].data);for(let Bt=0;Bt<Tt.length;Bt++){const Se=Tt[Bt].image[rt].image;F?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,Se.width,Se.height,Ft,Ht,Se.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,jt,Se.width,Se.height,0,Ft,Ht,Se.data)}}else{F?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ft,Ht,Mt[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,Ft,Ht,Mt[rt]);for(let Bt=0;Bt<Tt.length;Bt++){const Lt=Tt[Bt];F?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,Ft,Ht,Lt.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,jt,Ft,Ht,Lt.image[rt])}}}m(b)&&v(r.TEXTURE_CUBE_MAP),ht.__version=$.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function At(P,b,z,H,$,ht){const ut=s.convert(z.format,z.colorSpace),j=s.convert(z.type),nt=_(z.internalFormat,ut,j,z.normalized,z.colorSpace),xt=i.get(b),Ut=i.get(z);if(Ut.__renderTarget=b,!xt.__hasExternalTextures){const Mt=Math.max(1,b.width>>ht),vt=Math.max(1,b.height>>ht);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,ht,nt,Mt,vt,b.depth,0,ut,j,null):e.texImage2D($,ht,nt,Mt,vt,0,ut,j,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),$t(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,$,Ut.__webglTexture,0,qt(b)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,$,Ut.__webglTexture,ht),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(P,b,z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const H=b.depthTexture,$=H&&H.isDepthTexture?H.type:null,ht=S(b.stencilBuffer,$),ut=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$t(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(b),ht,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(b),ht,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ht,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,P)}else{const H=b.textures;for(let $=0;$<H.length;$++){const ht=H[$],ut=s.convert(ht.format,ht.colorSpace),j=s.convert(ht.type),nt=_(ht.internalFormat,ut,j,ht.normalized,ht.colorSpace);$t(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(b),nt,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(b),nt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,nt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(P,b,z){const H=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(b.depthTexture);if($.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H){if($.__webglInit===void 0&&($.__webglInit=!0,b.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),kt(r.TEXTURE_CUBE_MAP,b.depthTexture);const xt=s.convert(b.depthTexture.format),Ut=s.convert(b.depthTexture.type);let Mt;b.depthTexture.format===ji?Mt=r.DEPTH_COMPONENT24:b.depthTexture.format===Cn&&(Mt=r.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Mt,b.width,b.height,0,xt,Ut,null)}}else tt(b.depthTexture,0);const ht=$.__webglTexture,ut=qt(b),j=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,nt=b.depthTexture.format===Cn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ji)$t(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,j,ht,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,nt,j,ht,0);else if(b.depthTexture.format===Cn)$t(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,j,ht,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,nt,j,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(P){const b=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const H=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),H){const $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=H}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)_e(b.__webglFramebuffer[H],P,H);else{const H=P.texture.mipmaps;H&&H.length>0?_e(b.__webglFramebuffer[0],P,0):_e(b.__webglFramebuffer,P,0)}else if(z){b.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[H]),b.__webglDepthbuffer[H]===void 0)b.__webglDepthbuffer[H]=r.createRenderbuffer(),Xt(b.__webglDepthbuffer[H],P,!1);else{const $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ht)}}else{const H=P.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Xt(b.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ht)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(P,b,z){const H=i.get(P);b!==void 0&&At(H.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&st(P)}function ot(P){const b=P.texture,z=i.get(P),H=i.get(b);P.addEventListener("dispose",y);const $=P.textures,ht=P.isWebGLCubeRenderTarget===!0,ut=$.length>1;if(ut||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=b.version,a.memory.textures++),ht){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let nt=0;nt<b.mipmaps.length;nt++)z.__webglFramebuffer[j][nt]=r.createFramebuffer()}else z.__webglFramebuffer[j]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)z.__webglFramebuffer[j]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ut)for(let j=0,nt=$.length;j<nt;j++){const xt=i.get($[j]);xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&$t(P)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){const nt=$[j];z.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[j]);const xt=s.convert(nt.format,nt.colorSpace),Ut=s.convert(nt.type),Mt=_(nt.internalFormat,xt,Ut,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),vt=qt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,Mt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,z.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),kt(r.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)At(z.__webglFramebuffer[j][nt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt);else At(z.__webglFramebuffer[j],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(b)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let j=0,nt=$.length;j<nt;j++){const xt=$[j],Ut=i.get(xt);let Mt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Mt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Ut.__webglTexture),kt(Mt,xt),At(z.__webglFramebuffer,P,xt,r.COLOR_ATTACHMENT0+j,Mt,0),m(xt)&&v(Mt)}e.unbindTexture()}else{let j=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(j,H.__webglTexture),kt(j,b),b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)At(z.__webglFramebuffer[nt],P,b,r.COLOR_ATTACHMENT0,j,nt);else At(z.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,j,0);m(b)&&v(j),e.unbindTexture()}P.depthBuffer&&st(P)}function lt(P){const b=P.textures;for(let z=0,H=b.length;z<H;z++){const $=b[z];if(m($)){const ht=M(P),ut=i.get($).__webglTexture;e.bindTexture(ht,ut),v(ht),e.unbindTexture()}}}const dt=[],Gt=[];function zt(P){if(P.samples>0){if($t(P)===!1){const b=P.textures,z=P.width,H=P.height;let $=r.COLOR_BUFFER_BIT;const ht=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=i.get(P),j=b.length>1;if(j)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);const nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[xt]);const Ut=i.get(b[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ut,0)}r.blitFramebuffer(0,0,z,H,0,0,z,H,$,r.NEAREST),l===!0&&(dt.length=0,Gt.length=0,dt.push(r.COLOR_ATTACHMENT0+xt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(dt.push(ht),Gt.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Gt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,ut.__webglColorRenderbuffer[xt]);const Ut=i.get(b[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,Ut,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function qt(P){return Math.min(n.maxSamples,P.samples)}function $t(P){const b=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function N(P){const b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function pe(P,b){const z=P.colorSpace,H=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==ss&&z!==cn&&(oe.getTransfer(z)===xe?(H!==Le||$!==Oe)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",z)),b}function re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=tt,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=at,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=At,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qp(r,t){function e(i,n=cn){let s;const a=oe.getTransfer(n);if(i===Oe)return r.UNSIGNED_BYTE;if(i===ll)return r.UNSIGNED_SHORT_4_4_4_4;if(i===cl)return r.UNSIGNED_SHORT_5_5_5_1;if(i===bh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===wh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mh)return r.BYTE;if(i===Sh)return r.SHORT;if(i===$s)return r.UNSIGNED_SHORT;if(i===ol)return r.INT;if(i===Pi)return r.UNSIGNED_INT;if(i===oi)return r.FLOAT;if(i===Ai)return r.HALF_FLOAT;if(i===Ah)return r.ALPHA;if(i===Th)return r.RGB;if(i===Le)return r.RGBA;if(i===ji)return r.DEPTH_COMPONENT;if(i===Cn)return r.DEPTH_STENCIL;if(i===hl)return r.RED;if(i===na)return r.RED_INTEGER;if(i===pn)return r.RG;if(i===ul)return r.RG_INTEGER;if(i===dl)return r.RGBA_INTEGER;if(i===Dr||i===Nr||i===Ur||i===Fr)if(a===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mo||i===So||i===bo||i===wo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===So)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ao||i===To||i===Eo||i===Co||i===Ro||i===Hr||i===Po)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ao||i===To)return a===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eo)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Co)return s.COMPRESSED_R11_EAC;if(i===Ro)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Hr)return s.COMPRESSED_RG11_EAC;if(i===Po)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Io||i===Lo||i===Do||i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===zo||i===ko||i===Vo||i===Go||i===Ho||i===Wo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Io)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lo)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Do)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===No)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uo)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fo)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oo)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bo)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zo)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ko)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vo)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Go)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ho)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wo)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xo||i===qo||i===Yo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Xo)return a===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zo||i===Ko||i===Wr||i===Jo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ko)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const n1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s1=`
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

}`;class r1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Fh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ue({vertexShader:n1,fragmentShader:s1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a1 extends Gi{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",g=new r1,m={},v=e.getContextAttributes();let M=null,_=null;const S=[],w=[],E=new Q;let y=null,A=null;const R=new He;R.viewport=new se;const I=new He;I.viewport=new se;const D=[R,I],B=new kp;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=S[Z];return it===void 0&&(it=new uo,S[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=S[Z];return it===void 0&&(it=new uo,S[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=S[Z];return it===void 0&&(it=new uo,S[Z]=it),it.getHandSpace()};function G(Z){const it=w.indexOf(Z.inputSource);if(it===-1)return;const gt=S[it];gt!==void 0&&(gt.update(Z.inputSource,Z.frame,c||a),gt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",tt);for(let Z=0;Z<S.length;Z++){const it=w[Z];it!==null&&(w[Z]=null,S[Z].disconnect(it))}L=null,O=null,g.reset();for(const Z in m)delete m[Z];if(t.setRenderTarget(M),f=null,u=null,d=null,n=null,_=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),A!==null){const Z=A.camera;Z.fov=A.fov,Z.zoom=A.zoom,Z.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(M=t.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",W),n.addEventListener("inputsourceschange",tt),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Vt=null,At=null;v.depth&&(At=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=v.stencil?Cn:ji,Vt=v.stencil?js:Pi);const Xt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Xt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new ci(u.textureWidth,u.textureHeight,{format:Le,type:Oe,depthTexture:new tr(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const gt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,gt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ci(f.framebufferWidth,f.framebufferHeight,{format:Le,type:Oe,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),le.setContext(n),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(Z){for(let it=0;it<Z.removed.length;it++){const gt=Z.removed[it],Vt=w.indexOf(gt);Vt>=0&&(w[Vt]=null,S[Vt].disconnect(gt))}for(let it=0;it<Z.added.length;it++){const gt=Z.added[it];let Vt=w.indexOf(gt);if(Vt===-1){for(let Xt=0;Xt<S.length;Xt++)if(Xt>=w.length){w.push(gt),Vt=Xt;break}else if(w[Xt]===null){w[Xt]=gt,Vt=Xt;break}if(Vt===-1)break}const At=S[Vt];At&&At.connect(gt)}}const X=new C,K=new C;function J(Z,it,gt){X.setFromMatrixPosition(it.matrixWorld),K.setFromMatrixPosition(gt.matrixWorld);const Vt=X.distanceTo(K),At=it.projectionMatrix.elements,Xt=gt.projectionMatrix.elements,_e=At[14]/(At[10]-1),st=At[14]/(At[10]+1),at=(At[9]+1)/At[5],ot=(At[9]-1)/At[5],lt=(At[8]-1)/At[0],dt=(Xt[8]+1)/Xt[0],Gt=_e*lt,zt=_e*dt,qt=Vt/(-lt+dt),$t=qt*-lt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX($t),Z.translateZ(qt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),At[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const N=_e+qt,pe=st+qt,re=Gt-$t,P=zt+(Vt-$t),b=at*st/pe*N,z=ot*st/pe*N;Z.projectionMatrix.makePerspective(re,P,b,z,N,pe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function wt(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let it=Z.near,gt=Z.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),B.near=I.near=R.near=it,B.far=I.far=R.far=gt,(L!==B.near||O!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,O=B.far),B.layers.mask=Z.layers.mask|6,R.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;const Vt=Z.parent,At=B.cameras;wt(B,Vt);for(let Xt=0;Xt<At.length;Xt++)wt(At[Xt],Vt);At.length===2?J(B,R,I):B.projectionMatrix.copy(R.projectionMatrix),A===null&&Z.isPerspectiveCamera&&(A={camera:Z,fov:Z.fov,zoom:Z.zoom}),mt(Z,B,Vt)};function mt(Z,it,gt){gt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(gt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Z){return m[Z]};let Yt=null;function kt(Z,it){if(h=it.getViewerPose(c||a),p=it,h!==null){const gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Vt=!1;gt.length!==B.cameras.length&&(B.cameras.length=0,Vt=!0);for(let st=0;st<gt.length;st++){const at=gt[st];let ot=null;if(f!==null)ot=f.getViewport(at);else{const dt=d.getViewSubImage(u,at);ot=dt.viewport,st===0&&(t.setRenderTargetTextures(_,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(_))}let lt=D[st];lt===void 0&&(lt=new He,lt.layers.enable(st),lt.viewport=new se,D[st]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),st===0&&(B.matrix.copy(lt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Vt===!0&&B.cameras.push(lt)}const At=n.enabledFeatures;if(At&&At.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const st=d.getDepthInformation(gt[0]);st&&st.isValid&&st.texture&&g.init(st,n.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let st=0;st<gt.length;st++){const at=gt[st].camera;if(at){let ot=m[at];ot||(ot=new Fh,m[at]=ot);const lt=d.getCameraImage(at);ot.sourceTexture=lt}}}}for(let gt=0;gt<S.length;gt++){const Vt=w[gt],At=S[gt];Vt!==null&&At!==void 0&&At.update(Vt,it,c||a)}Yt&&Yt(Z,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),p=null}const le=new Yp;le.setAnimationLoop(kt),this.setAnimationLoop=function(Z){Yt=Z},this.dispose=function(){}}}const o1=new Zt,tm=new Jt;tm.set(-1,0,0,0,1,0,0,0,1);function l1(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,_p(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,v,M,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ye&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ye&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),M=v.envMap,_=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(o1.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ye&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function c1(r,t,e,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){const w=S.program;i.uniformBlockBinding(_,w)}function c(_,S){let w=n[_.id];w===void 0&&(g(_),w=h(_),n[_.id]=w,_.addEventListener("dispose",v));const E=S.program;i.updateUBOMapping(_,E);const y=t.render.frame;s[_.id]!==y&&(u(_),s[_.id]=y)}function h(_){const S=d();_.__bindingPointIndex=S;const w=r.createBuffer(),E=_.__size,y=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,E,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,w),w}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const S=n[_.id],w=_.uniforms,E=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let y=0,A=w.length;y<A;y++){const R=w[y];if(Array.isArray(R))for(let I=0,D=R.length;I<D;I++)f(R[I],y,I,E);else f(R,y,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,S,w,E){if(x(_,S,w,E)===!0){const y=_.__offset,A=_.value;if(Array.isArray(A)){let R=0;for(let I=0;I<A.length;I++){const D=A[I],B=m(D);p(D,_.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,y,_.__data)}}function p(_,S,w){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,w)}function x(_,S,w,E){const y=_.value,A=S+"_"+w;if(E[A]===void 0)return typeof y=="number"||typeof y=="boolean"?E[A]=y:ArrayBuffer.isView(y)?E[A]=y.slice():E[A]=y.clone(),!0;{const R=E[A];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return E[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(_){const S=_.uniforms;let w=0;const E=16;for(let A=0,R=S.length;A<R;A++){const I=Array.isArray(S[A])?S[A]:[S[A]];for(let D=0,B=I.length;D<B;D++){const L=I[D],O=Array.isArray(L.value)?L.value:[L.value];for(let G=0,W=O.length;G<W;G++){const tt=O[G],X=m(tt),K=w%E,J=K%X.boundary,wt=K+J;w+=J,wt!==0&&E-wt<X.storage&&(w+=E-wt),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=X.storage}}}const y=w%E;return y>0&&(w+=E-y),_.__size=w,_.__cache={},this}function m(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",_),S}function v(_){const S=_.target;S.removeEventListener("dispose",v);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function M(){for(const _ in n)r.deleteBuffer(n[_]);a=[],n={},s={}}return{bind:l,update:c,dispose:M}}const h1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function u1(){return Yi===null&&(Yi=new Xe(h1,16,16,pn,Ai),Yi.name="DFG_LUT",Yi.minFilter=fe,Yi.magFilter=fe,Yi.wrapS=qe,Yi.wrapT=qe,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class em{constructor(t={}){const{canvas:e=Yf(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Oe}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=f,g=new Set([dl,ul,na]),m=new Set([Oe,Pi,$s,js,ll,cl]),v=new Uint32Array(4),M=new Int32Array(4),_=new C;let S=null,w=null;const E=[],y=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,D=null,B=null,L=null,O=null;this._outputColorSpace=pi;let G=0,W=0,tt=null,X=-1,K=null;const J=new se,wt=new se;let mt=null;const Yt=new ct(0);let kt=0,le=e.width,Z=e.height,it=1,gt=null,Vt=null;const At=new se(0,0,le,Z),Xt=new se(0,0,le,Z);let _e=!1;const st=new os;let at=!1,ot=!1;const lt=new Zt,dt=new C,Gt=new se,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function $t(){return tt===null?it:1}let N=i;function pe(T,U){return e.getContext(T,U)}let re,P,b,z,H,$,ht,ut,j,nt,xt,Ut,Mt,vt,Ft,Ht,jt,F,_t,et,yt,Tt,rt;try{const T={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sl}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Li,!1),N===null){const U="webgl2";if(N=pe(U,T),N===null)throw pe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(T){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Li,!1),Nt("WebGLRenderer: "+T.message),T}function Bt(){re=new dM(N),re.init(),yt=new Qp(N,re),P=new iM(N,re,t,yt),b=new e1(N,re),P.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),B=N.createFramebuffer(),L=N.createFramebuffer(),O=N.createFramebuffer(),z=new mM(N),H=new VS,$=new i1(N,re,b,H,P,yt,z),ht=new uM(R),ut=new xv(N),Tt=new tM(N,ut),j=new fM(N,ut,z,Tt),nt=new xM(N,j,ut,Tt,z),F=new gM(N,P,$),Ft=new nM(H),xt=new kS(R,ht,re,P,Tt,Ft),Ut=new l1(R,H),Mt=new HS,vt=new KS(re),jt=new Qy(R,ht,b,nt,p,l),Ht=new t1(R,nt,P),rt=new c1(N,z,P,b),_t=new eM(N,re,z),et=new pM(N,re,z),z.programs=xt.programs,R.capabilities=P,R.extensions=re,R.properties=H,R.renderLists=Mt,R.shadowMap=Ht,R.state=b,R.info=z}x!==Oe&&(A=new _M(x,e.width,e.height,o,n,s));const Lt=new a1(R,N);this.xr=Lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(T){T!==void 0&&(it=T,this.setSize(le,Z,!1))},this.getSize=function(T){return T.set(le,Z)},this.setSize=function(T,U,Y=!0){if(Lt.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,Z=U,e.width=Math.floor(T*it),e.height=Math.floor(U*it),Y===!0&&(e.style.width=T+"px",e.style.height=U+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(le*it,Z*it).floor()},this.setDrawingBufferSize=function(T,U,Y){le=T,Z=U,it=Y,e.width=Math.floor(T*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===Oe){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(At)},this.setViewport=function(T,U,Y,k){T.isVector4?At.set(T.x,T.y,T.z,T.w):At.set(T,U,Y,k),b.viewport(J.copy(At).multiplyScalar(it).round())},this.getScissor=function(T){return T.copy(Xt)},this.setScissor=function(T,U,Y,k){T.isVector4?Xt.set(T.x,T.y,T.z,T.w):Xt.set(T,U,Y,k),b.scissor(wt.copy(Xt).multiplyScalar(it).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(T){b.setScissorTest(_e=T)},this.setOpaqueSort=function(T){gt=T},this.setTransparentSort=function(T){Vt=T},this.getClearColor=function(T){return T.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Y=!0){let k=0;if(T){let V=!1;if(tt!==null){const bt=tt.texture.format;V=g.has(bt)}if(V){const bt=tt.texture.type,Rt=m.has(bt),St=jt.getClearColor(),Pt=jt.getClearAlpha(),Dt=St.r,ie=St.g,ae=St.b;Rt?(v[0]=Dt,v[1]=ie,v[2]=ae,v[3]=Pt,N.clearBufferuiv(N.COLOR,0,v)):(M[0]=Dt,M[1]=ie,M[2]=ae,M[3]=Pt,N.clearBufferiv(N.COLOR,0,M))}else k|=N.COLOR_BUFFER_BIT}U&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Li,!1),jt.dispose(),Mt.dispose(),vt.dispose(),H.dispose(),ht.dispose(),nt.dispose(),Tt.dispose(),rt.dispose(),xt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",du),Lt.removeEventListener("sessionend",fu),Fn.stop()};function Se(T){T.preventDefault(),Kr("WebGLRenderer: Context Lost."),I=!0}function me(){Kr("WebGLRenderer: Context Restored."),I=!1;const T=z.autoReset,U=Ht.enabled,Y=Ht.autoUpdate,k=Ht.needsUpdate,V=Ht.type;Bt(),z.autoReset=T,Ht.enabled=U,Ht.autoUpdate=Y,Ht.needsUpdate=k,Ht.type=V}function Li(T){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wi(T){const U=T.target;U.removeEventListener("dispose",Wi),om(U)}function om(T){lm(T),H.remove(T)}function lm(T){const U=H.get(T).programs;U!==void 0&&(U.forEach(function(Y){xt.releaseProgram(Y)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Y,k,V,bt){U===null&&(U=zt);const Rt=V.isMesh&&V.matrixWorld.determinantAffine()<0,St=um(T,U,Y,k,V);b.setMaterial(k,Rt);let Pt=Y.index,Dt=1;if(k.wireframe===!0){if(Pt=j.getWireframeAttribute(Y),Pt===void 0)return;Dt=2}const ie=Y.drawRange,ae=Y.attributes.position;let It=ie.start*Dt,ge=(ie.start+ie.count)*Dt;bt!==null&&(It=Math.max(It,bt.start*Dt),ge=Math.min(ge,(bt.start+bt.count)*Dt)),Pt!==null?(It=Math.max(It,0),ge=Math.min(ge,Pt.count)):ae!=null&&(It=Math.max(It,0),ge=Math.min(ge,ae.count));const De=ge-It;if(De<0||De===1/0)return;Tt.setup(V,k,St,Y,Pt);let Ae,Me=_t;if(Pt!==null&&(Ae=ut.get(Pt),Me=et,Me.setIndex(Ae)),V.isMesh)k.wireframe===!0?(b.setLineWidth(k.wireframeLinewidth*$t()),Me.setMode(N.LINES)):Me.setMode(N.TRIANGLES);else if(V.isLine){let Je=k.linewidth;Je===void 0&&(Je=1),b.setLineWidth(Je*$t()),V.isLineSegments?Me.setMode(N.LINES):V.isLineLoop?Me.setMode(N.LINE_LOOP):Me.setMode(N.LINE_STRIP)}else V.isPoints?Me.setMode(N.POINTS):V.isSprite&&Me.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Je=V._multiDrawStarts,Ct=V._multiDrawCounts,ii=V._multiDrawCount,ce=Pt?ut.get(Pt).bytesPerElement:1,Ti=H.get(k).currentProgram.getUniforms();for(let Xi=0;Xi<ii;Xi++)Ti.setValue(N,"_gl_DrawID",Xi),Me.render(Je[Xi]/ce,Ct[Xi])}else if(V.isInstancedMesh)Me.renderInstances(It,De,V.count);else if(Y.isInstancedBufferGeometry){const Je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ct=Math.min(Y.instanceCount,Je);Me.renderInstances(It,De,Ct)}else Me.render(It,De)};function uu(T,U,Y,k){D!==null&&T.isNodeMaterial&&D.setObject(k,T),at===!0&&Ft.setState(T,Y,!1),T.transparent===!0&&T.side===ei&&T.forceSinglePass===!1?(T.side=Ye,T.needsUpdate=!0,pa(T,U,k),T.side=Pn,T.needsUpdate=!0,pa(T,U,k),T.side=ei):pa(T,U,k)}this.compile=function(T,U,Y=null){Y===null&&(Y=T),D!==null&&D.renderStart(T,U,Y),w=vt.get(Y),w.init(U),y.push(w),Y.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),T!==Y&&T.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,at=Ft.init(this.clippingPlanes,ot),at===!0&&Ft.setGlobalState(this.clippingPlanes,U),D!==null&&Ht.render(w.state.shadowsArray,Y,U);const k=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const bt=V.material;if(bt)if(Array.isArray(bt))for(let Rt=0;Rt<bt.length;Rt++){const St=bt[Rt];uu(St,Y,U,V),k.add(St)}else uu(bt,Y,U,V),k.add(bt)}),w=y.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(T,U,Y=null){const k=this.compile(T,U,Y);return new Promise(V=>{function bt(){if(k.forEach(function(Rt){const Pt=H.get(Rt).currentProgram;(Pt===void 0||Pt.isReady())&&k.delete(Rt)}),k.size===0){V(T);return}setTimeout(bt,10)}re.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ql=null;function cm(T){ql&&ql(T)}function du(){Fn.stop()}function fu(){Fn.start()}const Fn=new Yp;Fn.setAnimationLoop(cm),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(T){ql=T,Lt.setAnimationLoop(T),T===null?Fn.stop():Fn.start()},Lt.addEventListener("sessionstart",du),Lt.addEventListener("sessionend",fu),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(T,U);const Y=Lt.enabled===!0&&Lt.isPresenting===!0,k=A!==null&&(tt===null||Y)&&A.begin(R,tt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(U),U=Lt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,tt),w=vt.get(T,y.length),w.init(U),w.state.textureUnits=$.getTextureUnits(),y.push(w),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),st.setFromProjectionMatrix(lt,bi,U.reversedDepth),ot=this.localClippingEnabled,at=Ft.init(this.clippingPlanes,ot),S=Mt.get(T,E.length),S.init(),E.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){const Rt=R.xr.getDepthSensingMesh();Rt!==null&&Yl(Rt,U,-1/0,R.sortObjects)}Yl(T,U,0,R.sortObjects),S.finish(),D!==null&&D.updateLights(w.state.lightsArray),R.sortObjects===!0&&S.sort(gt,Vt),qt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,qt&&jt.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ft.beginShadows();const V=w.state.shadowsArray;if(Ht.render(V,T,U),at===!0&&Ft.endShadows(),(k&&A.hasRenderPass())===!1){const Rt=S.opaque,St=S.transmissive;if(w.setupLights(),U.isArrayCamera){const Pt=U.cameras;if(St.length>0)for(let Dt=0,ie=Pt.length;Dt<ie;Dt++){const ae=Pt[Dt];mu(Rt,St,T,ae)}qt&&jt.render(T);for(let Dt=0,ie=Pt.length;Dt<ie;Dt++){const ae=Pt[Dt];pu(S,T,ae,ae.viewport)}}else St.length>0&&mu(Rt,St,T,U),qt&&jt.render(T),pu(S,T,U)}tt!==null&&W===0&&($.updateMultisampleRenderTarget(tt),$.updateRenderTargetMipmap(tt)),k&&A.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),Tt.resetDefaultState(),X=-1,K=null,y.pop(),y.length>0?(w=y[y.length-1],$.setTextureUnits(w.state.textureUnits),at===!0&&Ft.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,D!==null&&D.renderEnd()};function Yl(T,U,Y,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(st)){k&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(lt);const Rt=nt.update(T),St=T.material;St.visible&&S.push(T,Rt,St,Y,Gt.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(st))){const Rt=nt.update(T),St=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Gt.copy(Rt.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(lt)),Array.isArray(St)){const Pt=Rt.groups;for(let Dt=0,ie=Pt.length;Dt<ie;Dt++){const ae=Pt[Dt],It=St[ae.materialIndex];It&&It.visible&&S.push(T,Rt,It,Y,Gt.z,ae,U)}}else St.visible&&S.push(T,Rt,St,Y,Gt.z,null,U)}}const bt=T.children;for(let Rt=0,St=bt.length;Rt<St;Rt++)Yl(bt[Rt],U,Y,k)}function pu(T,U,Y,k){const{opaque:V,transmissive:bt,transparent:Rt}=T;w.setupLightsView(Y),at===!0&&Ft.setGlobalState(R.clippingPlanes,Y),k&&b.viewport(J.copy(k)),V.length>0&&fa(V,U,Y),bt.length>0&&fa(bt,U,Y),Rt.length>0&&fa(Rt,U,Y),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function mu(T,U,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const It=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new ci(1,1,{generateMipmaps:!0,type:It?Ai:Oe,minFilter:xi,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const bt=w.state.transmissionRenderTarget[k.id],Rt=k.viewport||J;bt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);const St=R.getRenderTarget(),Pt=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(Yt),kt=R.getClearAlpha(),kt<1&&R.setClearColor(16777215,.5),R.clear(),qt&&jt.render(Y);const ie=R.toneMapping;R.toneMapping=Ri;const ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),at===!0&&Ft.setGlobalState(R.clippingPlanes,k),fa(T,Y,k),$.updateMultisampleRenderTarget(bt),$.updateRenderTargetMipmap(bt),re.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ge=0,De=U.length;ge<De;ge++){const Ae=U[ge],{object:Me,geometry:Je,material:Ct,group:ii}=Ae;if(Ct.side===ei&&Me.layers.test(k.layers)){const ce=Ct.side;Ct.side=Ye,Ct.needsUpdate=!0,gu(Me,Y,k,Je,Ct,ii),Ct.side=ce,Ct.needsUpdate=!0,It=!0}}It===!0&&($.updateMultisampleRenderTarget(bt),$.updateRenderTargetMipmap(bt))}R.setRenderTarget(St,Pt,Dt),R.setClearColor(Yt,kt),ae!==void 0&&(k.viewport=ae),R.toneMapping=ie}function fa(T,U,Y){const k=U.isScene===!0?U.overrideMaterial:null;for(let V=0,bt=T.length;V<bt;V++){const Rt=T[V],{object:St,geometry:Pt,group:Dt}=Rt;let ie=Rt.material;ie.allowOverride===!0&&k!==null&&(ie=k),St.layers.test(Y.layers)&&gu(St,U,Y,Pt,ie,Dt)}}function gu(T,U,Y,k,V,bt){D!==null&&V.isNodeMaterial&&D.setObject(T,V),T.onBeforeRender(R,U,Y,k,V,bt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(R,U,Y,k,T,bt),V.transparent===!0&&V.side===ei&&V.forceSinglePass===!1?(V.side=Ye,V.needsUpdate=!0,R.renderBufferDirect(Y,U,k,V,T,bt),V.side=Pn,V.needsUpdate=!0,R.renderBufferDirect(Y,U,k,V,T,bt),V.side=ei):R.renderBufferDirect(Y,U,k,V,T,bt),T.onAfterRender(R,U,Y,k,V,bt)}function pa(T,U,Y){U.isScene!==!0&&(U=zt);const k=H.get(T),V=w.state.lights,bt=w.state.shadowsArray,Rt=V.state.version,St=xt.getParameters(T,V.state,bt,U,Y,w.state.lightProbeGridArray),Pt=xt.getProgramCacheKey(St);let Dt=k.programs;k.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const ie=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;k.envMap=ht.get(T.envMap||k.environment,ie),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",Wi),Dt=new Map,k.programs=Dt);let ae=Dt.get(Pt);if(ae!==void 0){if(k.currentProgram===ae&&k.lightsStateVersion===Rt)return vu(T,St),ae}else St.uniforms=xt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Y,St),T.onBeforeCompile(St,R),ae=xt.acquireProgram(St,Pt),Dt.set(Pt,ae),k.uniforms=St.uniforms;const It=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=Ft.uniform),vu(T,St),k.needsLights=fm(T),k.lightsStateVersion=Rt,k.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.sunLights.value=V.state.sun,It.sunLightShadows.value=V.state.sunShadow,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.sunShadowMatrix.value=V.state.sunShadowMatrix,It.sunShadowCascade.value=V.state.sunShadowCascade,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=ae,k.uniformsList=null,ae}function xu(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=fo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function vu(T,U){const Y=H.get(T);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function hm(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let Y=0,k=T.length;Y<k;Y++){const V=T[Y];if(V.texture!==null&&V.boundingBox.containsPoint(_))return V}return null}function um(T,U,Y,k,V){U.isScene!==!0&&(U=zt),$.resetTextureUnits();const bt=U.fog,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,St=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:oe.workingColorSpace,Pt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Dt=ht.get(k.envMap||Rt,Pt),ie=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ae=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),It=!!Y.morphAttributes.position,ge=!!Y.morphAttributes.normal,De=!!Y.morphAttributes.color;let Ae=Ri;k.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ae=R.toneMapping);const Me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Je=Me!==void 0?Me.length:0,Ct=H.get(k),ii=w.state.lights;if(at===!0&&(ot===!0||T!==K)){const be=T===K&&k.id===X;Ft.setState(k,T,be)}let ce=!1;k.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ii.state.version||Ct.outputColorSpace!==St||V.isBatchedMesh&&Ct.batching===!1||!V.isBatchedMesh&&Ct.batching===!0||V.isBatchedMesh&&Ct.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ct.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ct.instancing===!1||!V.isInstancedMesh&&Ct.instancing===!0||V.isSkinnedMesh&&Ct.skinning===!1||!V.isSkinnedMesh&&Ct.skinning===!0||V.isInstancedMesh&&Ct.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ct.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ct.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ct.instancingMorph===!1&&V.morphTexture!==null||Ct.envMap!==Dt||k.fog===!0&&Ct.fog!==bt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Ft.numPlanes||Ct.numIntersection!==Ft.numIntersection)||Ct.vertexAlphas!==ie||Ct.vertexTangents!==ae||Ct.morphTargets!==It||Ct.morphNormals!==ge||Ct.morphColors!==De||Ct.toneMapping!==Ae||Ct.morphTargetsCount!==Je||!!Ct.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Ct.__version=k.version);let Ti=Ct.currentProgram;ce===!0&&(Ti=pa(k,U,V),D&&k.isNodeMaterial&&D.onUpdateProgram(k,Ti,Ct));let Xi=!1,vn=!1,ps=!1;const ye=Ti.getUniforms(),Pe=Ct.uniforms;if(b.useProgram(Ti.program)&&(Xi=!0,vn=!0,ps=!0),k.id!==X&&(X=k.id,vn=!0),Ct.needsLights){const be=hm(w.state.lightProbeGridArray,V);Ct.lightProbeGrid!==be&&(Ct.lightProbeGrid=be,vn=!0)}if(Xi||K!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ye.setValue(N,"projectionMatrix",T.projectionMatrix),ye.setValue(N,"viewMatrix",T.matrixWorldInverse);const yn=ye.map.cameraPosition;yn!==void 0&&yn.setValue(N,dt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&ye.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ye.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,vn=!0,ps=!0)}if(Ct.needsLights&&(ii.state.sunShadowMap.length>0&&ye.setValue(N,"sunShadowMap",ii.state.sunShadowMap,$),ii.state.directionalShadowMap.length>0&&ye.setValue(N,"directionalShadowMap",ii.state.directionalShadowMap,$),ii.state.spotShadowMap.length>0&&ye.setValue(N,"spotShadowMap",ii.state.spotShadowMap,$),ii.state.pointShadowMap.length>0&&ye.setValue(N,"pointShadowMap",ii.state.pointShadowMap,$)),V.isSkinnedMesh){ye.setOptional(N,V,"bindMatrix"),ye.setOptional(N,V,"bindMatrixInverse");const be=V.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ye.setValue(N,"boneTexture",be.boneTexture,$))}V.isBatchedMesh&&(ye.setOptional(N,V,"batchingTexture"),ye.setValue(N,"batchingTexture",V._matricesTexture,$),ye.setOptional(N,V,"batchingIdTexture"),ye.setValue(N,"batchingIdTexture",V._indirectTexture,$),ye.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&ye.setValue(N,"batchingColorTexture",V._colorsTexture,$));const _n=Y.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&F.update(V,Y,Ti),(vn||Ct.receiveShadow!==V.receiveShadow)&&(Ct.receiveShadow=V.receiveShadow,ye.setValue(N,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Pe.envMapIntensity.value=U.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=u1()),vn){if(ye.setValue(N,"toneMappingExposure",R.toneMappingExposure),Ct.needsLights&&dm(Pe,ps),bt&&k.fog===!0&&Ut.refreshFogUniforms(Pe,bt),Ut.refreshMaterialUniforms(Pe,k,it,Z,w.state.transmissionRenderTarget[T.id]),Ct.needsLights&&Ct.lightProbeGrid){const be=Ct.lightProbeGrid;Pe.probesSH.value=be.texture,Pe.probesMin.value.copy(be.boundingBox.min),Pe.probesMax.value.copy(be.boundingBox.max),Pe.probesResolution.value.copy(be.resolution)}fo.upload(N,xu(Ct),Pe,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fo.upload(N,xu(Ct),Pe,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ye.setValue(N,"center",V.center),ye.setValue(N,"modelViewMatrix",V.modelViewMatrix),ye.setValue(N,"normalMatrix",V.normalMatrix),ye.setValue(N,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const be=k.uniformsGroups;for(let yn=0,ms=be.length;yn<ms;yn++){const yu=be[yn];rt.update(yu,Ti),rt.bind(yu,Ti)}}return Ti}function dm(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function fm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(T,U,Y){const k=H.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(T.texture).__webglTexture=U,H.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const Y=H.get(T);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Y=0){tt=T,G=U,W=Y;let k=null,V=!1,bt=!1;if(T){const St=H.get(T);if(St.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(N.FRAMEBUFFER,St.__webglFramebuffer),J.copy(T.viewport),wt.copy(T.scissor),mt=T.scissorTest,b.viewport(J),b.scissor(wt),b.setScissorTest(mt),X=-1;return}else if(St.__webglFramebuffer===void 0)$.setupRenderTarget(T);else if(St.__hasExternalTextures)$.rebindTextures(T,H.get(T.texture).__webglTexture,H.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ie=T.depthTexture;if(St.__boundDepthTexture!==ie){if(ie!==null&&H.has(ie)&&(T.width!==ie.image.width||T.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(T)}}const Pt=T.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(bt=!0);const Dt=H.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?k=Dt[U][Y]:k=Dt[U],V=!0):T.samples>0&&$.useMultisampledRTT(T)===!1?k=H.get(T).__webglMultisampledFramebuffer:Array.isArray(Dt)?k=Dt[Y]:k=Dt,J.copy(T.viewport),wt.copy(T.scissor),mt=T.scissorTest}else J.copy(At).multiplyScalar(it).floor(),wt.copy(Xt).multiplyScalar(it).floor(),mt=_e;if(Y!==0&&(k=B),b.bindFramebuffer(N.FRAMEBUFFER,k)&&b.drawBuffers(T,k),b.viewport(J),b.scissor(wt),b.setScissorTest(mt),V){const St=H.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,Y)}else if(bt){const St=U;for(let Pt=0;Pt<T.textures.length;Pt++){const Dt=H.get(T.textures[Pt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,Y,St)}}else if(T!==null&&Y!==0){const St=H.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,St.__webglTexture,Y)}X=-1};function _u(T){const U=H.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=P.textureFormatReadable(T.format),U.__typeReadable=P.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,Y,k,V,bt,Rt,St=0){if(!(T&&T.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){b.bindFramebuffer(N.FRAMEBUFFER,Pt);try{const Dt=T.textures[St],ie=Dt.format,ae=Dt.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+St);const It=_u(Dt);if(It.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&Y>=0&&Y<=T.height-V&&N.readPixels(U,Y,k,V,yt.convert(ie),yt.convert(ae),bt)}finally{const Dt=tt!==null?H.get(tt).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,U,Y,k,V,bt,Rt,St=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt)if(U>=0&&U<=T.width-k&&Y>=0&&Y<=T.height-V){b.bindFramebuffer(N.FRAMEBUFFER,Pt);const Dt=T.textures[St],ie=Dt.format,ae=Dt.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+St);const It=_u(Dt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ge),N.bufferData(N.PIXEL_PACK_BUFFER,bt.byteLength,N.STREAM_READ),N.readPixels(U,Y,k,V,yt.convert(ie),yt.convert(ae),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const De=tt!==null?H.get(tt).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,De);const Ae=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await d0(N,Ae,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ge),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,bt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ge),N.deleteSync(Ae),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Y=0){const k=Math.pow(2,-Y),V=Math.floor(T.image.width*k),bt=Math.floor(T.image.height*k),Rt=U!==null?U.x:0,St=U!==null?U.y:0;$.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Rt,St,V,bt),b.unbindTexture()},this.copyTextureToTexture=function(T,U,Y=null,k=null,V=0,bt=0){let Rt,St,Pt,Dt,ie,ae,It,ge,De;const Ae=T.isCompressedTexture?T.mipmaps[bt]:T.image;if(Y!==null)Rt=Y.max.x-Y.min.x,St=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,Dt=Y.min.x,ie=Y.min.y,ae=Y.isBox3?Y.min.z:0;else{const Pe=Math.pow(2,-V);Rt=Math.floor(Ae.width*Pe),St=Math.floor(Ae.height*Pe),T.isDataArrayTexture?Pt=Ae.depth:T.isData3DTexture?Pt=Math.floor(Ae.depth*Pe):Pt=1,Dt=0,ie=0,ae=0}k!==null?(It=k.x,ge=k.y,De=k.z):(It=0,ge=0,De=0);const Me=yt.convert(U.format),Je=yt.convert(U.type);let Ct;U.isData3DTexture?($.setTexture3D(U,0),Ct=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Ct=N.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Ct=N.TEXTURE_2D),b.activeTexture(N.TEXTURE0),b.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const ii=b.getParameter(N.UNPACK_ROW_LENGTH),ce=b.getParameter(N.UNPACK_IMAGE_HEIGHT),Ti=b.getParameter(N.UNPACK_SKIP_PIXELS),Xi=b.getParameter(N.UNPACK_SKIP_ROWS),vn=b.getParameter(N.UNPACK_SKIP_IMAGES);b.pixelStorei(N.UNPACK_ROW_LENGTH,Ae.width),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ae.height),b.pixelStorei(N.UNPACK_SKIP_PIXELS,Dt),b.pixelStorei(N.UNPACK_SKIP_ROWS,ie),b.pixelStorei(N.UNPACK_SKIP_IMAGES,ae);const ps=T.isDataArrayTexture||T.isData3DTexture,ye=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Pe=H.get(T),_n=H.get(U),be=H.get(Pe.__renderTarget),yn=H.get(_n.__renderTarget);b.bindFramebuffer(N.READ_FRAMEBUFFER,be.__webglFramebuffer),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let ms=0;ms<Pt;ms++)ps&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(T).__webglTexture,V,ae+ms),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(U).__webglTexture,bt,De+ms)),N.blitFramebuffer(Dt,ie,Rt,St,It,ge,Rt,St,N.DEPTH_BUFFER_BIT,N.NEAREST);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||H.has(T)){const Pe=H.get(T),_n=H.get(U);b.bindFramebuffer(N.READ_FRAMEBUFFER,L),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let be=0;be<Pt;be++)ps?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.__webglTexture,V,ae+be):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pe.__webglTexture,V),ye?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_n.__webglTexture,bt,De+be):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_n.__webglTexture,bt),V!==0?N.blitFramebuffer(Dt,ie,Rt,St,It,ge,Rt,St,N.COLOR_BUFFER_BIT,N.NEAREST):ye?N.copyTexSubImage3D(Ct,bt,It,ge,De+be,Dt,ie,Rt,St):N.copyTexSubImage2D(Ct,bt,It,ge,Dt,ie,Rt,St);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ye?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ct,bt,It,ge,De,Rt,St,Pt,Me,Je,Ae.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,bt,It,ge,De,Rt,St,Pt,Me,Ae.data):N.texSubImage3D(Ct,bt,It,ge,De,Rt,St,Pt,Me,Je,Ae):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,bt,It,ge,Rt,St,Me,Je,Ae.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,bt,It,ge,Ae.width,Ae.height,Me,Ae.data):N.texSubImage2D(N.TEXTURE_2D,bt,It,ge,Rt,St,Me,Je,Ae);b.pixelStorei(N.UNPACK_ROW_LENGTH,ii),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce),b.pixelStorei(N.UNPACK_SKIP_PIXELS,Ti),b.pixelStorei(N.UNPACK_SKIP_ROWS,Xi),b.pixelStorei(N.UNPACK_SKIP_IMAGES,vn),bt===0&&U.generateMipmaps&&N.generateMipmap(Ct),b.unbindTexture()},this.initRenderTarget=function(T){H.get(T).__webglFramebuffer===void 0&&$.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$.setTextureCube(T,0):T.isData3DTexture?$.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$.setTexture2DArray(T,0):$.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){G=0,W=0,tt=null,b.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const d1=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:gh,AddEquation:ln,AddOperation:Lf,AdditiveAnimationBlendMode:Eh,AdditiveBlending:Xc,AgXToneMapping:vh,AlphaFormat:Ah,AlwaysCompare:Xf,AlwaysDepth:mo,AlwaysStencilFunc:zf,AmbientLight:Up,AnimationAction:Wp,AnimationClip:ta,AnimationLoader:ox,AnimationMixer:Ox,AnimationObjectGroup:Ux,AnimationUtils:ex,ArcCurve:lp,ArrayCamera:kp,ArrowHelper:lv,AttachedBindMode:Zc,Audio:Gp,AudioAnalyser:Ax,AudioContext:tu,AudioListener:Sx,AudioLoader:vx,AxesHelper:cv,BackSide:Ye,BasicDepthPacking:Of,BasicShadowMap:_m,BatchedMesh:ip,BezierInterpolant:Ip,Bone:Nh,BooleanKeyframeTrack:ds,Box2:Xp,Box3:Ze,Box3Helper:av,BoxGeometry:cs,BoxHelper:rv,BufferAttribute:ue,BufferGeometry:Kt,BufferGeometryLoader:Bp,ByteType:Mh,Cache:Ki,Camera:Gl,CameraHelper:sv,CanvasTexture:yg,CapsuleGeometry:Al,CatmullRomCurve3:cp,CineonToneMapping:mh,CircleGeometry:Tl,ClampToEdgeWrapping:qe,Clock:Wx,Color:ct,ColorKeyframeTrack:Yh,ColorManagement:oe,Compatibility:a0,CompressedArrayTexture:vg,CompressedCubeTexture:_g,CompressedTexture:wl,CompressedTextureLoader:lx,ConeGeometry:la,ConstantAlphaFactor:Rf,ConstantColorFactor:Ef,Controls:uv,CubeCamera:zp,CubeDepthTexture:ap,CubeReflectionMapping:$i,CubeRefractionMapping:In,CubeTexture:aa,CubeTextureLoader:cx,CubeUVReflectionMapping:nr,CubicBezierCurve:Bh,CubicBezierCurve3:hp,CubicInterpolant:Rp,CullFaceBack:Wc,CullFaceFront:pf,CullFaceFrontBack:vm,CullFaceNone:ff,Curve:Hi,CurvePath:dp,CustomBlending:rl,CustomToneMapping:xh,CylinderGeometry:oa,Cylindrical:qx,Data3DTexture:vl,DataArrayTexture:xl,DataTexture:Xe,DataTextureLoader:hx,DataUtils:$c,DecrementStencilOp:Bm,DecrementWrapStencilOp:km,DefaultLoadingManager:Np,DepthFormat:ji,DepthStencilFormat:Cn,DepthTexture:tr,DetachedBindMode:Df,DirectionalLight:jh,DirectionalLightHelper:nv,DiscreteInterpolant:Pp,DodecahedronGeometry:El,DoubleSide:ei,DstAlphaFactor:Sf,DstColorFactor:wf,DynamicCopyUsage:t0,DynamicDrawUsage:Ch,DynamicReadUsage:$m,EdgesGeometry:op,EllipseCurve:Cl,EqualCompare:Gf,EqualDepth:xo,EqualStencilFunc:Wm,EquirectangularReflectionMapping:Pr,EquirectangularRefractionMapping:Ir,Euler:Vi,EventDispatcher:Gi,ExternalTexture:Fh,ExtrudeGeometry:Rl,FileLoader:gn,Float16BufferAttribute:$0,Float32BufferAttribute:Et,FloatType:oi,Fog:sa,FogExp2:yl,FramebufferTexture:xg,FrontSide:Pn,Frustum:os,FrustumArray:bl,GLBufferAttribute:Gx,GLSL1:i0,GLSL3:Jc,GreaterCompare:Hf,GreaterDepth:_o,GreaterEqualCompare:ml,GreaterEqualDepth:vo,GreaterEqualStencilFunc:Zm,GreaterStencilFunc:qm,GridHelper:ev,Group:Rn,HTMLTexture:Mg,HalfFloatType:Ai,HemisphereLight:Jh,HemisphereLightHelper:tv,IcosahedronGeometry:Pl,ImageBitmapLoader:xx,ImageLoader:ea,ImageUtils:Kf,IncrementStencilOp:Om,IncrementWrapStencilOp:zm,InstancedBufferAttribute:mi,InstancedBufferGeometry:da,InstancedInterleavedBuffer:Vx,InstancedMesh:ep,Int16BufferAttribute:K0,Int32BufferAttribute:J0,Int8BufferAttribute:q0,IntType:ol,InterleavedBuffer:Ml,InterleavedBufferAttribute:as,Interpolant:rr,InterpolateBezier:Kc,InterpolateDiscrete:Xr,InterpolateLinear:$o,InterpolateSmooth:co,InterpolationSamplingMode:r0,InterpolationSamplingType:s0,InvertStencilOp:Vm,KeepStencilOp:ho,KeyframeTrack:Ii,LOD:Qf,LatheGeometry:Il,Layers:_l,LessCompare:Vf,LessDepth:go,LessEqualCompare:pl,LessEqualDepth:Js,LessEqualStencilFunc:Xm,LessStencilFunc:Hm,Light:Un,LightProbe:Op,LightShadow:Vl,Line:Dn,Line3:Kx,LineBasicMaterial:hi,LineCurve:zh,LineCurve3:up,LineDashedMaterial:Tp,LineLoop:np,LineSegments:Qi,LinearFilter:fe,LinearInterpolant:qh,LinearMipMapLinearFilter:wm,LinearMipMapNearestFilter:bm,LinearMipmapLinearFilter:xi,LinearMipmapNearestFilter:Lr,LinearSRGBColorSpace:ss,LinearToneMapping:fh,LinearTransfer:Yr,Loader:vi,LoaderUtils:ih,LoadingManager:Kh,LoopOnce:Nf,LoopPingPong:Ff,LoopRepeat:Uf,MOUSE:gm,Material:Ke,MaterialBlending:ym,MaterialLoader:Hl,MathUtils:P0,Matrix2:sh,Matrix3:Jt,Matrix4:Zt,MaxEquation:_f,Mesh:ve,MeshBasicMaterial:xn,MeshDepthMaterial:Wh,MeshDistanceMaterial:Xh,MeshLambertMaterial:wp,MeshMatcapMaterial:Ap,MeshNormalMaterial:bp,MeshPhongMaterial:Mp,MeshPhysicalMaterial:yp,MeshStandardMaterial:Bl,MeshToonMaterial:Sp,MinEquation:vf,MirroredRepeatWrapping:Gr,MixOperation:If,MultiplyBlending:Yc,MultiplyOperation:ia,NearestFilter:we,NearestMipMapLinearFilter:Sm,NearestMipMapNearestFilter:Mm,NearestMipmapLinearFilter:Ws,NearestMipmapNearestFilter:yh,NeutralToneMapping:_h,NeverCompare:kf,NeverDepth:po,NeverStencilFunc:Gm,NoBlending:Ji,NoColorSpace:cn,NoNormalPacking:Lm,NoToneMapping:Ri,NormalAnimationBlendMode:fl,NormalBlending:Zs,NormalGAPacking:Nm,NormalRGPacking:Dm,NotEqualCompare:Wf,NotEqualDepth:yo,NotEqualStencilFunc:Ym,NumberKeyframeTrack:zl,Object3D:de,ObjectLoader:mx,ObjectSpaceNormalMap:Bf,OctahedronGeometry:ha,OneFactor:es,OneMinusConstantAlphaFactor:Pf,OneMinusConstantColorFactor:Cf,OneMinusDstAlphaFactor:bf,OneMinusDstColorFactor:Af,OneMinusSrcAlphaFactor:dh,OneMinusSrcColorFactor:Mf,OrthographicCamera:ar,PCFShadowMap:Ys,PCFSoftShadowMap:mf,PMREMGenerator:il,Path:Jr,PerspectiveCamera:He,Plane:on,PlaneGeometry:hs,PlaneHelper:ov,PointLight:el,PointLightHelper:jx,Points:sp,PointsMaterial:Uh,PolarGridHelper:iv,PolyhedronGeometry:Nn,PositionalAudio:wx,PropertyBinding:he,PropertyMixer:Hp,QuadraticBezierCurve:kh,QuadraticBezierCurve3:Vh,Quaternion:li,QuaternionKeyframeTrack:kl,QuaternionLinearInterpolant:Dp,R11_EAC_Format:Co,RED_GREEN_RGTC2_Format:Wr,RED_RGTC1_Format:Zo,REVISION:sl,RG11_EAC_Format:Hr,RGBADepthPacking:Rm,RGBAFormat:Le,RGBAIntegerFormat:dl,RGBA_ASTC_10x10_Format:Go,RGBA_ASTC_10x5_Format:zo,RGBA_ASTC_10x6_Format:ko,RGBA_ASTC_10x8_Format:Vo,RGBA_ASTC_12x10_Format:Ho,RGBA_ASTC_12x12_Format:Wo,RGBA_ASTC_4x4_Format:Io,RGBA_ASTC_5x4_Format:Lo,RGBA_ASTC_5x5_Format:Do,RGBA_ASTC_6x5_Format:No,RGBA_ASTC_6x6_Format:Uo,RGBA_ASTC_8x5_Format:Fo,RGBA_ASTC_8x6_Format:Oo,RGBA_ASTC_8x8_Format:Bo,RGBA_BPTC_Format:Xo,RGBA_ETC2_EAC_Format:Eo,RGBA_PVRTC_2BPPV1_Format:wo,RGBA_PVRTC_4BPPV1_Format:bo,RGBA_S3TC_DXT1_Format:Nr,RGBA_S3TC_DXT3_Format:Ur,RGBA_S3TC_DXT5_Format:Fr,RGBDepthPacking:Pm,RGBFormat:Th,RGBIntegerFormat:Am,RGB_BPTC_SIGNED_Format:qo,RGB_BPTC_UNSIGNED_Format:Yo,RGB_ETC1_Format:Ao,RGB_ETC2_Format:To,RGB_PVRTC_2BPPV1_Format:So,RGB_PVRTC_4BPPV1_Format:Mo,RGB_S3TC_DXT1_Format:Dr,RGDepthPacking:Im,RGFormat:pn,RGIntegerFormat:ul,RawShaderMaterial:Hh,Ray:sr,Raycaster:Hx,RectAreaLight:Fp,RedFormat:hl,RedIntegerFormat:na,ReinhardToneMapping:ph,RenderObjectRefreshType:o0,RenderTarget:Ph,RenderTarget3D:Bx,RepeatWrapping:ns,ReplaceStencilOp:Fm,ReverseSubtractEquation:xf,RingGeometry:Ll,SIGNED_R11_EAC_Format:Ro,SIGNED_RED_GREEN_RGTC2_Format:Jo,SIGNED_RED_RGTC1_Format:Ko,SIGNED_RG11_EAC_Format:Po,SRGBColorSpace:pi,SRGBTransfer:xe,Scene:ra,ShaderChunk:Qt,ShaderLib:zi,ShaderMaterial:Ue,ShadowMaterial:vp,Shape:ca,ShapeGeometry:Dl,ShapePath:hv,ShapeUtils:ki,ShortType:Sh,Skeleton:Sl,SkeletonHelper:$x,SkinnedMesh:tp,Source:D0,Sphere:We,SphereGeometry:us,Spherical:Xx,SphericalHarmonics3:Qh,SplineCurve:Gh,SpotLight:$h,SpotLightHelper:Jx,Sprite:jf,SpriteMaterial:Dh,SrcAlphaFactor:uh,SrcAlphaSaturateFactor:Tf,SrcColorFactor:yf,StaticCopyUsage:Qm,StaticDrawUsage:gl,StaticReadUsage:Jm,StereoCamera:_x,StreamCopyUsage:e0,StreamDrawUsage:Km,StreamReadUsage:jm,StringKeyframeTrack:fs,SubtractEquation:gf,SubtractiveBlending:qc,TOUCH:xm,TangentSpaceNormalMap:mn,TetrahedronGeometry:Nl,Texture:Ce,TextureLoader:ux,TextureSource:un,TextureUtils:gv,Timer:Vp,TimestampQuery:n0,TorusGeometry:Ul,TorusKnotGeometry:Fl,Triangle:gi,TriangleFanDrawMode:Cm,TriangleStripDrawMode:Em,TrianglesDrawMode:Tm,TubeGeometry:Ol,UVMapping:al,Uint16BufferAttribute:Ih,Uint32BufferAttribute:Lh,Uint8BufferAttribute:Y0,Uint8ClampedBufferAttribute:Z0,Uniform:nu,UniformsGroup:kx,UniformsLib:ft,UniformsUtils:ua,UnsignedByteType:Oe,UnsignedInt101111Type:wh,UnsignedInt248Type:js,UnsignedInt5999Type:bh,UnsignedIntType:Pi,UnsignedShort4444Type:ll,UnsignedShort5551Type:cl,UnsignedShortType:$s,VSMShadowMap:Hs,Vector2:Q,Vector3:C,Vector4:se,VectorKeyframeTrack:Zh,VideoFrameTexture:gg,VideoTexture:rp,WebGL3DRenderTarget:F0,WebGLArrayRenderTarget:U0,WebGLCoordinateSystem:bi,WebGLCubeRenderTarget:su,WebGLRenderTarget:ci,WebGLRenderer:em,WebGLUtils:Qp,WebGPUCoordinateSystem:rs,WebXRController:uo,WireframeGeometry:xp,WrapAroundEnding:qr,ZeroCurvatureEnding:jn,ZeroFactor:hh,ZeroSlopeEnding:Qn,ZeroStencilOp:Um,createCanvasElement:Yf,error:Nt,getConsoleFunction:u0,log:Kr,setConsoleFunction:h0,warn:pt,warnOnce:dn},Symbol.toStringTag,{value:"Module"}));let tf=!1;const f1=`
float foglineTau(vec3 cam, vec3 wp, float d0, float k) {
  vec3 d = wp - cam;
  float L = length(d);
  float dy = d.y;
  float t = k * dy;
  float e0 = exp(-k * cam.y);
  // integral of exp(-k*y) along the ray, divided by L
  float f = abs(t) > 1e-3 ? (e0 - exp(-k * wp.y)) / t : e0;
  return d0 * L * f;
}`;function p1(){if(tf)return;tf=!0;const r=Qt;r.fog_pars_vertex=`
#ifdef USE_FOG
	varying float vFogDepth;
	varying vec3 vFogWPos;
#endif`,r.fog_vertex=`
#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
	vFogWPos = transpose(mat3(viewMatrix)) * mvPosition.xyz + cameraPosition;
#endif`,r.fog_pars_fragment=`
#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	varying vec3 vFogWPos;
	uniform float fogNear;
	uniform float fogFar;
	uniform float fogDensity;
${f1}
#endif`,r.fog_fragment=`
#ifdef USE_FOG
	float fogTau = foglineTau(cameraPosition, vFogWPos, fogNear, fogFar);
	float fogFactor = 1.0 - exp(-fogTau);
	gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
#endif`}const m1=`
varying vec3 vDir;
void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,g1=`
varying vec3 vDir;
uniform vec3 uZenith; uniform vec3 uHorizon; uniform vec3 uGround; uniform vec3 uSunDir; uniform vec3 uSunCol;
void main(){
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 sky = mix(uHorizon, uZenith, pow(clamp(h,0.0,1.0), 0.45));
  vec3 gnd = mix(uHorizon*0.45, uGround, clamp(-h*3.5,0.0,1.0));
  vec3 col = h > 0.0 ? sky : gnd;
  // bright band on the horizon (fog glow) and a soft glow behind the clouds
  col += uHorizon * 0.5 * exp(-abs(h)*9.0);
  col += uSunCol * pow(max(dot(d, normalize(uSunDir)), 0.0), 10.0);
  gl_FragColor = vec4(col, 1.0);
}`;function x1(r,t={}){const{zenith:e=[.045,.058,.078],horizon:i=[.3,.34,.38],ground:n=[.03,.028,.026],sunDir:s=[-.45,.32,-.83],sunCol:a=[.55,.5,.44],panels:o=!0,panelGain:l=1}=t,c=new ra,h=new Ue({vertexShader:m1,fragmentShader:g1,side:Ye,depthWrite:!1,uniforms:{uZenith:{value:new C(...e)},uHorizon:{value:new C(...i)},uGround:{value:new C(...n)},uSunDir:{value:new C(...s)},uSunCol:{value:new C(...a)}}}),d=new ve(new us(50,32,16),h);c.add(d);const u=[d.geometry,h];if(o){const x=(g,m,v,M,_)=>{const S=new hs(g,m),w=new xn({color:new ct(M[0],M[1],M[2]).multiplyScalar(_*l),side:ei}),E=new ve(S,w);E.position.set(...v),E.lookAt(0,0,0),c.add(E),u.push(S,w)};x(34,10,[0,30,-8],[.75,.85,1],2.4),x(6,22,[-28,8,-12],[1,.86,.72],1.6),x(4,16,[30,5,-20],[.65,.78,1],1.3),x(20,3,[0,3,40],[.9,.9,1],.9)}const f=new il(r),p=f.fromScene(c,.035);f.dispose();for(const x of u)x.dispose();return p.texture}const Vr=Math.PI*2,Os=Math.PI/180,Ge=(r,t,e)=>r<t?t:r>e?e:r,im=r=>r<0?0:r>1?1:r,Oi=(r,t,e)=>r+(t-r)*e,Si=(r,t,e)=>{const i=im((e-r)/(t-r));return i*i*(3-2*i)},Cb=(r,t,e)=>{const i=im((e-r)/(t-r));return i*i*i*(i*(i*6-15)+10)},Fe=(r,t,e,i)=>Oi(r,t,1-Math.exp(-e*i)),Rb=r=>(r=(r+Math.PI)%Vr,r<0&&(r+=Vr),r-Math.PI);function v1(r){let t=r>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class lr{constructor(t=1){this.seed=t>>>0,this._f=v1(this.seed)}next(){return this._f()}range(t,e){return t+(e-t)*this._f()}int(t,e){return Math.floor(t+(e-t+1)*this._f())}chance(t){return this._f()<t}pick(t){return t[Math.floor(this._f()*t.length)]}sign(){return this._f()<.5?-1:1}gauss(){return(this._f()+this._f()+this._f()+this._f()-2)*1.7320508}fork(t=0){return new lr(this.seed*2654435761+t*40503+1>>>0)}}function ti(r,t,e=0){let i=r*374761393+t*668265263+e*1442695041|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function ru(r,t,e=0){const i=Math.floor(r),n=Math.floor(t),s=r-i,a=t-n,o=s*s*(3-2*s),l=a*a*(3-2*a),c=ti(i,n,e),h=ti(i+1,n,e),d=ti(i,n+1,e),u=ti(i+1,n+1,e);return c+(h-c)*o+(d-c)*l+(c-h-d+u)*o*l}function Bs(r,t,e=4,i=0,n=2,s=.5){let a=.5,o=1,l=0,c=0;for(let h=0;h<e;h++)l+=a*ru(r*o,t*o,i+h*17),c+=a,a*=s,o*=n;return l/c}class Pb{constructor(t=120,e=14,i=0){this.k=t,this.c=e,this.x=i,this.v=0,this.target=i}kick(t){this.v+=t}update(t){const e=Math.max(1,Math.ceil(t/.008)),i=t/e;for(let n=0;n<e;n++){const s=this.k*(this.target-this.x)-this.c*this.v;this.v+=s*i,this.x+=this.v*i}return this.x}}class Ib{constructor(t=120,e=14){this.k=t,this.c=e,this.x=0,this.y=0,this.z=0,this.vx=0,this.vy=0,this.vz=0,this.tx=0,this.ty=0,this.tz=0}kick(t,e,i){this.vx+=t,this.vy+=e,this.vz+=i}set(t,e,i){this.x=t,this.y=e,this.z=i}update(t){const e=Math.max(1,Math.ceil(t/.008)),i=t/e;for(let n=0;n<e;n++)this.vx+=(this.k*(this.tx-this.x)-this.c*this.vx)*i,this.vy+=(this.k*(this.ty-this.y)-this.c*this.vy)*i,this.vz+=(this.k*(this.tz-this.z)-this.c*this.vz)*i,this.x+=this.vx*i,this.y+=this.vy*i,this.z+=this.vz*i}}const Be={time:{value:0},wet:{value:.85},noise:{value:null}};let Fc=null;function cr(){if(Fc)return Fc;const r=256,t=new Uint8Array(r*r*4),e=(l,c,h,d)=>ti((l%h+h)%h,(c%h+h)%h,d),i=(l,c,h,d)=>{const u=Math.floor(l),f=Math.floor(c),p=l-u,x=c-f,g=p*p*(3-2*p),m=x*x*(3-2*x),v=e(u,f,h,d),M=e(u+1,f,h,d),_=e(u,f+1,h,d),S=e(u+1,f+1,h,d);return v+(M-v)*g+(_-v)*m+(v-M-_+S)*g*m},n=(l,c,h,d,u)=>{let f=.5,p=h,x=0,g=0;for(let m=0;m<d;m++)x+=f*i(l*p,c*p,p,u+m*31),g+=f,f*=.5,p*=2;return x/g},s=12,a=new Float32Array(s*s*2);for(let l=0;l<s;l++)for(let c=0;c<s;c++)a[(l*s+c)*2]=ti(c,l,91),a[(l*s+c)*2+1]=ti(c,l,92);for(let l=0;l<r;l++)for(let c=0;c<r;c++){const h=c/r,d=l/r,u=(l*r+c)*4;t[u]=255*n(h,d,4,5,3),t[u+1]=255*n(h,d,8,4,11),t[u+2]=255*n(h,d,32,3,23);const f=h*s,p=d*s,x=Math.floor(f),g=Math.floor(p);let m=9;for(let v=-1;v<=1;v++)for(let M=-1;M<=1;M++){const _=(x+M+s)%s,S=(g+v+s)%s,w=x+M+a[(S*s+_)*2],E=g+v+a[(S*s+_)*2+1],y=(w-f)*(w-f)+(E-p)*(E-p);y<m&&(m=y)}t[u+3]=255*Math.min(1,Math.sqrt(m))}const o=new Xe(t,r,r,Le,Oe);return o.wrapS=o.wrapT=ns,o.magFilter=fe,o.minFilter=xi,o.generateMipmaps=!0,o.anisotropy=4,o.needsUpdate=!0,Fc=o,Be.noise.value=o,o}function Lb(r,t={}){const e=t.dirt??.55,i=t.wet??1,n=t.mud??.6;cr();const s=r.onBeforeCompile;r.onBeforeCompile=function(l,c){s&&s.call(this,l,c),l.uniforms.uLkTime=Be.time,l.uniforms.uLkWetG=Be.wet,l.uniforms.uLkNoise=Be.noise,l.uniforms.uLkDirt={value:e},l.uniforms.uLkWet={value:i},l.uniforms.uLkMud={value:n},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLkPos;
varying vec3 vLkNrm;`).replace("#include <project_vertex>",`#include <project_vertex>
        { mat3 lkR = transpose(mat3(viewMatrix));
          vLkPos = lkR * mvPosition.xyz + cameraPosition;
          vLkNrm = normalize(lkR * transformedNormal); }`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vLkPos; varying vec3 vLkNrm;
        uniform sampler2D uLkNoise; uniform float uLkDirt; uniform float uLkWet; uniform float uLkMud; uniform float uLkWetG;`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        {
          vec3 lkN = normalize(vLkNrm);
          float lkUp = clamp(lkN.y, 0.0, 1.0);
          vec4 nzA = texture2D(uLkNoise, vLkPos.xz * 0.31 + vLkPos.y * 0.13);
          vec4 nzB = texture2D(uLkNoise, vLkPos.xy * 0.37 + vec2(vLkPos.z * 0.21, 0.37));
          vec4 nzC = texture2D(uLkNoise, vLkPos.zy * 0.37 + vec2(0.61, vLkPos.x * 0.21));
          vec3 lw = pow(abs(lkN), vec3(4.0)); lw /= (lw.x + lw.y + lw.z + 1e-4);
          vec4 nz = nzA * lw.y + nzB * lw.z + nzC * lw.x;
          float grime = nz.g * 0.6 + nz.b * 0.4;
          float mudM = (1.0 - smoothstep(-0.15, 0.85, vLkPos.y + (nz.r - 0.5) * 0.7)) * uLkMud;
          vec3 mudCol = vec3(0.070, 0.054, 0.038) * (0.65 + 0.8 * nz.b);
          diffuseColor.rgb = mix(diffuseColor.rgb, mudCol, mudM * 0.8);
          diffuseColor.rgb *= mix(1.0, 0.50 + 0.65 * grime, uLkDirt * 0.75);
          float wetMask = uLkWetG * uLkWet * mix(0.30, 1.0, lkUp) * (0.55 + 0.45 * nz.r);
          diffuseColor.rgb *= 1.0 - 0.30 * wetMask;
          roughnessFactor = mix(roughnessFactor, min(roughnessFactor, 0.12 + 0.30 * nz.g), wetMask);
          roughnessFactor = mix(roughnessFactor, max(roughnessFactor, 0.85), mudM * 0.6);
        }`)};const a=Object.prototype.hasOwnProperty.call(r,"customProgramCacheKey")?r.customProgramCacheKey:null;return r.customProgramCacheKey=function(){return"wl1|"+(s?s.toString():"")+"|"+(a?a.call(this):"")},r.needsUpdate=!0,r}const _1=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,hr=`
precision highp float;
varying vec2 vUv;
float sstep_(float a, float b, float x){ float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
#define smoothstep(a, b, x) sstep_(a, b, x)
float h11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float h21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 h22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float luma(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
// NaN / Inf guards (bit-level, so they survive fast-math): one bad HDR pixel must never poison bloom or the temporal exposure state
bool isBadF(float x){ return (floatBitsToUint(x) & 0x7F800000u) == 0x7F800000u; }
vec3 sane(vec3 c){ return vec3(isBadF(c.r) ? 0.0 : min(c.r, 60000.0), isBadF(c.g) ? 0.0 : min(c.g, 60000.0), isBadF(c.b) ? 0.0 : min(c.b, 60000.0)); }
vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(max(c, 0.0), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
`,y1=hr+`
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold; uniform float uKnee;
vec3 fetch(vec2 uv){ return sane(texture2D(tSrc, uv).rgb); }
float kw(vec3 c){ return 1.0 / (1.0 + luma(c)); }
void main(){
  vec2 t = uTexel;
  vec3 a = fetch(vUv + t * vec2(-2.,  2.)), b = fetch(vUv + t * vec2(0.,  2.)), c = fetch(vUv + t * vec2(2.,  2.));
  vec3 d = fetch(vUv + t * vec2(-2.,  0.)), e = fetch(vUv),                       f = fetch(vUv + t * vec2(2.,  0.));
  vec3 g = fetch(vUv + t * vec2(-2., -2.)), h = fetch(vUv + t * vec2(0., -2.)), i = fetch(vUv + t * vec2(2., -2.));
  vec3 j = fetch(vUv + t * vec2(-1.,  1.)), k = fetch(vUv + t * vec2(1.,  1.)), l = fetch(vUv + t * vec2(-1., -1.)), m = fetch(vUv + t * vec2(1., -1.));
  // Karis average across the 5 groups to suppress fireflies
  vec3 g0 = (a + b + d + e) * 0.25, g1 = (b + c + e + f) * 0.25, g2 = (d + e + g + h) * 0.25, g3 = (e + f + h + i) * 0.25, g4 = (j + k + l + m) * 0.25;
  vec3 col = g0 * 0.125 * kw(g0) + g1 * 0.125 * kw(g1) + g2 * 0.125 * kw(g2) + g3 * 0.125 * kw(g3) + g4 * 0.5 * kw(g4);
  col /= (0.125 * (kw(g0) + kw(g1) + kw(g2) + kw(g3)) + 0.5 * kw(g4));
  float br = max(col.r, max(col.g, col.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-4);
  float w = max(soft, br - uThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(col * w, 1.0);
}`,M1=hr+`
uniform sampler2D tSrc; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 a = sane(texture2D(tSrc, vUv + t * vec2(-2.,  2.)).rgb), b = sane(texture2D(tSrc, vUv + t * vec2(0.,  2.)).rgb), c = sane(texture2D(tSrc, vUv + t * vec2(2.,  2.)).rgb);
  vec3 d = sane(texture2D(tSrc, vUv + t * vec2(-2.,  0.)).rgb), e = sane(texture2D(tSrc, vUv).rgb),                       f = sane(texture2D(tSrc, vUv + t * vec2(2.,  0.)).rgb);
  vec3 g = sane(texture2D(tSrc, vUv + t * vec2(-2., -2.)).rgb), h = sane(texture2D(tSrc, vUv + t * vec2(0., -2.)).rgb), i = sane(texture2D(tSrc, vUv + t * vec2(2., -2.)).rgb);
  vec3 j = sane(texture2D(tSrc, vUv + t * vec2(-1.,  1.)).rgb), k = sane(texture2D(tSrc, vUv + t * vec2(1.,  1.)).rgb), l = sane(texture2D(tSrc, vUv + t * vec2(-1., -1.)).rgb), m = sane(texture2D(tSrc, vUv + t * vec2(1., -1.)).rgb);
  vec3 col = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  gl_FragColor = vec4(col, 1.0);
}`,S1=hr+`
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uScatter;
void main(){
  vec2 t = uTexel;
  vec3 a = texture2D(tSrc, vUv + t * vec2(-1.,  1.)).rgb, b = texture2D(tSrc, vUv + t * vec2(0.,  1.)).rgb, c = texture2D(tSrc, vUv + t * vec2(1.,  1.)).rgb;
  vec3 d = texture2D(tSrc, vUv + t * vec2(-1.,  0.)).rgb, e = texture2D(tSrc, vUv).rgb,                       f = texture2D(tSrc, vUv + t * vec2(1.,  0.)).rgb;
  vec3 g = texture2D(tSrc, vUv + t * vec2(-1., -1.)).rgb, h = texture2D(tSrc, vUv + t * vec2(0., -1.)).rgb, i = texture2D(tSrc, vUv + t * vec2(1., -1.)).rgb;
  vec3 col = (e * 4.0 + (b + d + f + h) * 2.0 + (a + c + g + i)) / 16.0;
  gl_FragColor = vec4(col * uScatter, 1.0);
}`,b1=hr+`
uniform sampler2D tLum; uniform sampler2D tPrev; uniform float uDt; uniform float uKey; uniform float uMin; uniform float uMax; uniform float uUp; uniform float uDown;
void main(){
  float sum = 0.0; float wsum = 0.0;
  for (int y = 0; y < 6; y++) for (int x = 0; x < 6; x++) {
    vec2 uv = (vec2(float(x), float(y)) + 0.5) / 6.0;
    // centre-weighted metering
    vec2 q = uv - 0.5; float w = exp(-dot(q, q) * 5.0);
    float l = min(luma(sane(texture2D(tLum, uv).rgb)), 3.0);      // a muzzle flash must not drag the whole exposure down
    sum += log(max(l, 1e-4)) * w; wsum += w;
  }
  float avg = exp(sum / wsum);
  float target = clamp(uKey / max(avg, 1e-4), uMin, uMax);
  float prev = texture2D(tPrev, vec2(0.5)).r;
  if (isBadF(prev) || prev <= 0.0001 || prev > 1000.0) prev = 1.0;
  float rate = target > prev ? uUp : uDown;      // eyes/cameras adapt faster to darkness than to brightness (or vice-versa, tuned)
  float e = mix(prev, target, 1.0 - exp(-uDt * rate));
  gl_FragColor = vec4(e, avg, 0.0, 1.0);
}`,w1=hr+`
uniform sampler2D tScene; uniform sampler2D tBloom; uniform sampler2D tBlurA; uniform sampler2D tBlurB; uniform sampler2D tExposure; uniform sampler2D tNoise;
uniform vec2 uRes; uniform float uAspect; uniform float uTime;
uniform float uFisheye; uniform float uCA; uniform float uBloomAmt; uniform float uExposureBias; uniform float uManualExposure;
uniform vec2 uMotion;            // screen-space blur vector (uv units)
uniform float uMotionAmt;
uniform float uRainLens; uniform float uRainTime; uniform float uLensDirt;
uniform float uFlash; uniform float uDamage; uniform float uHurtPulse; uniform float uConcuss;
uniform vec4 uShock;            // xy = centre uv, z = radius, w = strength
uniform float uSaturation; uniform float uContrast; uniform vec3 uTint; uniform vec3 uShadowTint; uniform float uBodycam;
uniform float uFlareAmt; uniform vec2 uFlareDir;
uniform float uMuzzle; uniform vec2 uMuzzleUv;
uniform float uBlur;            // 0..1 extra defocus (damage / concussion / ads-transition)
uniform float uDbgNan;          // debug: paint NaN/Inf HDR pixels magenta (?dbgnan)

// ---- lens water: refracting beads that grow, slide and evaporate, plus a few fast runners (own implementation of the "drops on glass" idea)
vec4 lensDrops(vec2 uv, float t, float amt) {
  // returns xy = refraction offset, z = drop mask, w = rim highlight
  vec2 asp = vec2(uv.x * uAspect, uv.y);
  vec4 res = vec4(0.0);
  for (int L = 0; L < 3; L++) {
    float sc = L == 0 ? 6.0 : (L == 1 ? 11.0 : 19.0);
    float prob = amt * (L == 0 ? 0.10 : (L == 1 ? 0.15 : 0.22));
    vec2 g = asp * sc; vec2 id = floor(g); vec2 f = fract(g) - 0.5;
    vec2 r = h22(id + float(L) * 19.7);
    float pr = h21(id * 1.37 + float(L) * 5.1);
    if (pr > prob) continue;
    float life = fract(t * (0.010 + 0.018 * r.x) + r.y);
    float grow = smoothstep(0.0, 0.06, life);
    float evap = 1.0 - smoothstep(0.72, 1.0, life);
    float slide = smoothstep(0.30, 1.0, life) * (0.10 + 0.32 * r.x) * (L == 2 ? 0.2 : 1.0);
    vec2 pos = (r - 0.5) * 0.5 + vec2(0.0, -slide);
    vec2 d = f - pos; d.y *= 1.0 - slide * 0.9;
    float rad = (L == 0 ? 0.22 : (L == 1 ? 0.17 : 0.12)) * (0.55 + 0.6 * r.y) * grow * evap;
    float dl = length(d);
    float m = smoothstep(rad, rad * 0.84, dl);
    vec2 n = d / max(rad, 1e-3);
    float nl = length(n);
    res.xy += -n * m * (1.0 - nl * 0.3) * rad * 1.7;
    res.w = max(res.w, m * smoothstep(0.55, 1.0, nl));
    res.z = max(res.z, m);
    // trail left by a sliding bead
    float trail = smoothstep(rad * 0.35, 0.0, abs(f.x - pos.x)) * step(f.y, pos.y + rad) * step(pos.y + slide, f.y + 0.001) * step(0.001, slide) * 0.35 * grow * evap;
    res.z = max(res.z, trail);
  }
  // a few fast runners
  for (int S = 0; S < 2; S++) {
    float cols = S == 0 ? 9.0 : 15.0;
    float cx = asp.x * cols; float col = floor(cx); float fx = fract(cx) - 0.5;
    float rr = h21(vec2(col, float(S) * 7.0));
    float spd = 0.04 + 0.08 * rr;
    float y = fract(asp.y * (0.35 + rr * 0.25) + t * spd + rr * 9.0);
    float w = abs(fx + (rr - 0.5) * 0.5);
    float head = smoothstep(0.035, 0.0, y) * smoothstep(0.09, 0.0, w);
    float trail = smoothstep(0.5, 0.0, y) * smoothstep(0.025, 0.0, w) * 0.22;
    float on = step(rr, amt * 0.16);
    res.xy += vec2(fx * 0.035, 0.0) * head * on;
    res.z = max(res.z, (head + trail) * on * 0.7);
  }
  return res;
}

vec3 aces(vec3 x){ const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14; return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0); }

void main(){
  vec2 uv = vUv;
  vec2 q = uv - 0.5;
  // ---- lens distortion (barrel), aspect-corrected so it stays circular. Zoomed so the frame stays filled.
  float rr = dot(vec2(q.x * uAspect, q.y), vec2(q.x * uAspect, q.y));
  float k = 0.30 * uFisheye * uBodycam;
  float zoom = 1.0 / (1.0 + k * 0.25 * (uAspect * uAspect + 1.0));
  vec2 duv = q * (1.0 + k * rr) * zoom;
  // ---- explosion shockwave (screen-space ring refraction)
  if (uShock.w > 0.0) {
    vec2 sq = (uv - uShock.xy); sq.x *= uAspect;
    float sd = length(sq);
    float ring = exp(-pow((sd - uShock.z) * 9.0, 2.0));
    duv += normalize(sq + 1e-5) * ring * uShock.w * 0.03 * vec2(1.0 / uAspect, 1.0);
  }
  // ---- concussion: double-vision wobble
  duv += vec2(sin(uTime * 9.0 + q.y * 12.0), cos(uTime * 7.0 + q.x * 9.0)) * uConcuss * 0.006;
  // ---- drops on the lens
  vec4 drops = vec4(0.0);
  if (uRainLens > 0.001) {
    drops = lensDrops(uv, uRainTime, uRainLens);
    duv += drops.xy * vec2(1.0 / uAspect, 1.0) * 0.55;
  }
  vec2 suv = duv + 0.5;
  vec2 sc = clamp(suv, vec2(0.001), vec2(0.999));

  if (uDbgNan > 0.5) { vec3 raw = texture2D(tScene, sc).rgb; if (isBadF(raw.r) || isBadF(raw.g) || isBadF(raw.b)) { gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0); return; } }
  // ---- scene sample with chromatic aberration + motion blur
  float caAmt = uCA * uBodycam * (0.0004 + 0.0014 * rr * 4.0);
  vec2 caDir = normalize(q + 1e-5);
  vec3 col = vec3(0.0);
  const int MB = 8;
  float mb = uMotionAmt;
  if (mb > 0.0004) {
    for (int i = 0; i < MB; i++) {
      float t = (float(i) / float(MB - 1) - 0.5);
      vec2 o = uMotion * t;
      col.r += sane(texture2D(tScene, clamp(sc + o + caDir * caAmt, 0.001, 0.999)).rgb).r;
      col.g += sane(texture2D(tScene, clamp(sc + o, 0.001, 0.999)).rgb).g;
      col.b += sane(texture2D(tScene, clamp(sc + o - caDir * caAmt, 0.001, 0.999)).rgb).b;
    }
    col /= float(MB);
  } else {
    col.r = sane(texture2D(tScene, clamp(sc + caDir * caAmt, 0.001, 0.999)).rgb).r;
    col.g = sane(texture2D(tScene, sc).rgb).g;
    col.b = sane(texture2D(tScene, clamp(sc - caDir * caAmt, 0.001, 0.999)).rgb).b;
  }
  // defocus inside drops / when damaged: blend toward blurred mip
  vec3 blurA = texture2D(tBlurA, sc).rgb;
  vec3 blurB = texture2D(tBlurB, sc).rgb;
  col = mix(col, blurA, clamp(drops.z * 0.45, 0.0, 0.5));
  col = mix(col, mix(blurA, blurB, 0.6), clamp(uBlur, 0.0, 1.0) * 0.85);
  col *= 1.0 - drops.z * 0.06;
  col += (blurB + 0.02) * drops.w * 0.22;

  // ---- bloom + lens dirt
  vec3 bloom = sane(texture2D(tBloom, sc).rgb);
  float dirt = 0.0;
  if (uLensDirt > 0.0) {
    // smudges (low/mid fbm) + sparse dust specks; the cellular channel made a visible honeycomb over every bright blast
    vec4 nz = texture2D(tNoise, uv * vec2(uAspect, 1.0) * 0.85 + 0.17);
    vec4 nz2 = texture2D(tNoise, uv * vec2(uAspect, 1.0) * 1.7 + 0.43);
    dirt = (smoothstep(0.50, 0.86, nz.r * 0.55 + nz.g * 0.55) * 0.85 + smoothstep(0.80, 0.94, nz2.b) * 0.45) * uLensDirt;
  }
  float bAmt = uBloomAmt * (1.0 + dirt * 1.8 + drops.z * 1.2);
  col += bloom * bAmt;
  // muzzle flash veiling glare (in the lens): a soft radial bloom around the muzzle position
  if (uMuzzle > 0.001) {
    vec2 md = (uv - uMuzzleUv); md.x *= uAspect;
    float mg = exp(-dot(md, md) * 9.0) * uMuzzle;
    col += vec3(1.0, 0.66, 0.34) * mg * 0.55;
    col += vec3(1.0, 0.75, 0.5) * uMuzzle * 0.05;
  }
  col += vec3(0.75, 0.82, 1.0) * uFlash;

  // ---- exposure (auto) & tone map
  float expo = texture2D(tExposure, vec2(0.5)).r;
  if (isBadF(expo) || expo <= 0.0001) expo = 1.0;
  expo = mix(expo, uManualExposure, step(0.0001, uManualExposure));
  col *= expo * uExposureBias;
  // slight highlight desaturation (sensor clip) before the curve
  float l0 = luma(col);
  col = mix(col, vec3(l0), smoothstep(1.0, 4.0, l0) * 0.5);
  vec3 tm = aces(col * 0.85);
  // bodycam grade: shadow lift & cold tint, saturation trim, contrast
  float ll = luma(tm);
  tm = mix(tm, tm * uShadowTint, (1.0 - smoothstep(0.0, 0.5, ll)) * 0.65);
  tm *= uTint;
  tm = mix(vec3(luma(tm)), tm, uSaturation);
  tm = (tm - 0.5) * uContrast + 0.5;
  tm = max(tm, 0.0);
  // damage: desaturate + red edges
  float vig = smoothstep(0.25, 0.95, length(q * vec2(1.0, 0.9)));
  tm = mix(tm, vec3(luma(tm)) * vec3(1.0, 0.85, 0.82), uDamage * 0.75);
  tm += vec3(0.42, 0.02, 0.01) * vig * vig * (uDamage * 0.75 + uHurtPulse);
  tm *= 1.0 - uConcuss * 0.25 * vig;
  // lens flare veil when facing a bright sky/light (very subtle)
  tm += vec3(0.6, 0.72, 0.9) * uFlareAmt * exp(-dot(q - uFlareDir, q - uFlareDir) * 5.0) * 0.08;
  gl_FragColor = vec4(tm, 1.0);
}`,A1=hr+`
uniform sampler2D tA; uniform sampler2D tNoise; uniform vec2 uRes; uniform float uAspect; uniform float uTime; uniform float uFrame;
uniform float uGrain; uniform float uSharpen; uniform float uCompress; uniform float uMotionMag; uniform float uBodycam; uniform float uVignette;
uniform float uScope; uniform float uScopeReticle; uniform vec2 uScopeSway; uniform float uScopeRadius; uniform float uScopeZoom; uniform float uBreath;
uniform float uCA2; uniform float uFade; uniform float uSignalLoss;
uniform float uDamage;

float box(vec2 p, vec2 b){ vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }

void main(){
  vec2 uv = vUv;
  vec2 px = 1.0 / uRes;
  vec2 q = uv - 0.5;
  // signal loss (game over): horizontal tearing
  if (uSignalLoss > 0.0) {
    float band = floor(uv.y * 40.0);
    float tear = (h11(band + floor(uTime * 24.0)) - 0.5) * uSignalLoss * 0.25 * step(0.6, h11(band * 1.7 + floor(uTime * 12.0)));
    uv.x += tear;
  }
  // chromatic (radial) split for the LDR result
  float r2 = dot(q * vec2(uAspect, 1.0), q * vec2(uAspect, 1.0));
  vec2 dir = q * (0.0003 + 0.0016 * r2) * uCA2 * uBodycam;
  vec3 c;
  c.r = texture2D(tA, uv + dir).r; c.g = texture2D(tA, uv).g; c.b = texture2D(tA, uv - dir).b;
  // ---- macroblocking (video compression): quantise chroma per 16px block, and in bursts posterise blocks
  if (uCompress > 0.001) {
    vec2 blk = floor(uv * uRes / 16.0);
    vec2 bc = (blk + 0.5) * 16.0 / uRes;
    vec3 avg = texture2D(tA, bc).rgb;
    float bh = h21(blk + floor(uTime * 12.0));
    float burst = smoothstep(0.55, 1.0, uMotionMag) * step(0.55, bh) * uCompress;
    float dark = (1.0 - smoothstep(0.0, 0.35, luma(c)));
    // chroma subsampling look: keep luma, blend chroma toward the block average
    vec3 chromaKeep = c - vec3(luma(c)) + vec3(luma(c));
    float cs = 0.10 * uCompress * uBodycam + 0.6 * burst;
    vec3 cb = avg - vec3(luma(avg)) + vec3(luma(c));
    c = mix(c, cb, clamp(cs, 0.0, 1.0));
    // low-bitrate banding in the shadows
    float lv = mix(255.0, 42.0, dark * 0.35 * uCompress * uBodycam);
    c = floor(c * lv + 0.5) / lv;
  }
  // ---- sharpen (video over-sharpening halos)
  if (uSharpen > 0.001) {
    vec3 n = texture2D(tA, uv + vec2(px.x, 0.0)).rgb + texture2D(tA, uv - vec2(px.x, 0.0)).rgb + texture2D(tA, uv + vec2(0.0, px.y)).rgb + texture2D(tA, uv - vec2(0.0, px.y)).rgb;
    c += (c - n * 0.25) * uSharpen * uBodycam;
  }
  // ---- scope overlay (screen-space, COD-style)
  if (uScope > 0.001) {
    vec2 sp = q; sp.x *= uAspect;
    sp -= uScopeSway;
    float R = uScopeRadius;
    float d = length(sp);
    float edge = smoothstep(R, R - 0.004, d);
    // zoomed image already rendered via FOV; inside the tube: slight vignette + CA
    float tube = smoothstep(R, R * 0.55, d);
    vec3 inside = c * (0.55 + 0.45 * tube) * mix(1.0, 0.8 + 0.2 * tube, 1.0);
    // reticle
    float ret = 0.0;
    vec2 rp = sp;
    float lw = 0.0009 + 0.0004 * (1.0 - uScopeZoom / 8.0);
    if (uScopeReticle < 0.5) {              // 'acog': chevron + horizontal stadia + bdc ticks
      float ch = abs(rp.x) * 1.0 - (-rp.y * 1.0);
      float chev = smoothstep(lw * 1.6, 0.0, abs(rp.y + abs(rp.x) * 1.15 - 0.018)) * step(abs(rp.x), 0.03) * step(rp.y, 0.0);
      float hor = smoothstep(lw * 1.2, 0.0, abs(rp.y - 0.0)) * step(abs(rp.x), 0.22) * step(0.012, abs(rp.x));
      float ver = smoothstep(lw * 1.2, 0.0, abs(rp.x)) * step(0.012, -rp.y) * step(-rp.y, 0.20);
      float ticks = 0.0;
      for (int i = 1; i < 5; i++) { float ty = -0.036 * float(i); ticks += smoothstep(lw * 1.4, 0.0, abs(rp.y - ty)) * step(abs(rp.x), 0.012 + 0.003 * float(i)); }
      ret = max(max(chev, hor * 0.8), max(ver, ticks));
      inside = mix(inside, vec3(1.0, 0.12, 0.08) * 3.0, clamp(ret, 0.0, 1.0));
    } else {                                 // 'mildot': fine crosshair with dots, thick outer posts
      float h1 = smoothstep(lw, 0.0, abs(rp.y)) * step(0.012, abs(rp.x));
      float v1 = smoothstep(lw, 0.0, abs(rp.x)) * step(0.012, abs(rp.y));
      float thick = step(0.18, max(abs(rp.x), abs(rp.y)));
      float post = (smoothstep(lw * 6.0, 0.0, abs(rp.y)) * step(abs(rp.x), 0.34) * step(0.20, abs(rp.x)) + smoothstep(lw * 6.0, 0.0, abs(rp.x)) * step(abs(rp.y), 0.34) * step(0.20, abs(rp.y)));
      float dots = 0.0;
      for (int i = 1; i < 7; i++) {
        float fi = float(i) * 0.03;
        dots += smoothstep(0.0032, 0.0018, length(rp - vec2(fi, 0.0))) + smoothstep(0.0032, 0.0018, length(rp + vec2(fi, 0.0)));
        dots += smoothstep(0.0032, 0.0018, length(rp - vec2(0.0, fi))) + smoothstep(0.0032, 0.0018, length(rp + vec2(0.0, fi)));
      }
      ret = clamp(max(max(h1, v1) * (1.0 - thick), post) + dots * 0.9, 0.0, 1.0);
      inside = mix(inside, vec3(0.015, 0.015, 0.02), ret);
    }
    // black rim with soft parallax ring
    float ring = smoothstep(R - 0.012, R - 0.002, d) * (1.0 - edge);
    vec3 scoped = mix(vec3(0.0), inside, edge);
    scoped = mix(scoped, vec3(0.02), ring * 0.0);
    c = mix(c, scoped, uScope);
  }
  // ---- vignette (lens shading) + sensor noise
  float vig = 1.0 - uVignette * uBodycam * smoothstep(0.32, 0.98, length(q * vec2(uAspect * 0.62, 1.0)) * 1.2);
  c *= vig;
  if (uGrain > 0.001) {
    float t = floor(uTime * 24.0);
    vec2 gp = uv * uRes;
    float n1 = h21(gp * 0.75 + t * 17.13) - 0.5;
    float n2 = h21(gp * 0.75 + t * 31.7 + 91.0) - 0.5;
    float lum = luma(c);
    float amp = uGrain * uBodycam * (0.010 + 0.034 * (1.0 - smoothstep(0.0, 0.6, lum)));
    c += vec3(n1) * amp + vec3(n1 - n2, n2, -n1) * amp * 0.25;
  }
  // signal loss static
  if (uSignalLoss > 0.0) {
    float st = h21(uv * uRes * 0.5 + floor(uTime * 30.0));
    c = mix(c, vec3(st), uSignalLoss * 0.55);
  }
  c *= uFade;
  vec3 o = toSRGB(clamp(c, 0.0, 1.0));
  // dither (kills banding on the smooth fog gradients)
  o += (h21(gl_FragCoord.xy + uFrame) - 0.5) / 255.0;
  gl_FragColor = vec4(o, 1.0);
}`;function zs(r,t){return new Ue({vertexShader:_1,fragmentShader:r,uniforms:t,depthTest:!1,depthWrite:!1,toneMapped:!1})}class T1{constructor(t,e={}){this.renderer=t,this.msaa=e.msaa??4,this.bloomLevels=e.bloomLevels??6,this.params={fisheye:1,ca:1,bloom:.55,bloomThreshold:1,exposureBias:1,manualExposure:0,motion:new Q,motionAmt:0,rainLens:.8,lensDirt:.6,flash:0,damage:0,hurtPulse:0,concuss:0,shock:new se(.5,.5,0,0),saturation:.8,contrast:1.06,tint:new ct(.96,1,1.05),shadowTint:new ct(.86,1,1.12),bodycam:1,grain:1,sharpen:.55,compress:1,motionMag:0,vignette:.55,scope:0,scopeReticle:0,scopeSway:new Q,scopeRadius:.44,scopeZoom:4,flare:0,flareDir:new Q(0,.2),muzzle:0,muzzleUv:new Q(.62,.72),blur:0,fade:1,signalLoss:0,ca2:1,expKey:.15,expMin:.3,expMax:6},this.time=0,this.frame=0,this.rainTime=0,this._quadGeo=new Kt,this._quadGeo.setAttribute("position",new ue(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this._quadGeo.setAttribute("uv",new ue(new Float32Array([0,0,2,0,0,2]),2)),this._quad=new ve(this._quadGeo,null),this._quad.frustumCulled=!1,this._scene=new ra,this._scene.add(this._quad),this._cam=new ar(-1,1,1,-1,0,1),this._buildMaterials(),this.setNoiseTexture(cr()),this.resize(t.domElement.width,t.domElement.height)}_buildMaterials(){this.matPre=zs(y1,{tSrc:{value:null},uTexel:{value:new Q},uThreshold:{value:1},uKnee:{value:.5}}),this.matDown=zs(M1,{tSrc:{value:null},uTexel:{value:new Q}}),this.matUp=zs(S1,{tSrc:{value:null},uTexel:{value:new Q},uScatter:{value:.7}}),this.matUp.blending=rl,this.matUp.blendEquation=ln,this.matUp.blendSrc=es,this.matUp.blendDst=es,this.matExp=zs(b1,{tLum:{value:null},tPrev:{value:null},uDt:{value:.016},uKey:{value:.28},uMin:{value:.3},uMax:{value:5},uUp:{value:1.6},uDown:{value:.9}});const t={tScene:{value:null},tBloom:{value:null},tBlurA:{value:null},tBlurB:{value:null},tExposure:{value:null},tNoise:{value:null},uRes:{value:new Q(1,1)},uAspect:{value:1.78},uTime:{value:0},uFisheye:{value:1},uCA:{value:1},uBloomAmt:{value:.5},uExposureBias:{value:1},uManualExposure:{value:0},uMotion:{value:new Q},uMotionAmt:{value:0},uRainLens:{value:0},uRainTime:{value:0},uLensDirt:{value:.5},uFlash:{value:0},uDamage:{value:0},uHurtPulse:{value:0},uConcuss:{value:0},uShock:{value:new se},uSaturation:{value:.85},uContrast:{value:1.05},uTint:{value:new ct(1,1,1)},uShadowTint:{value:new ct(1,1,1)},uBodycam:{value:1},uFlareAmt:{value:0},uFlareDir:{value:new Q},uMuzzle:{value:0},uMuzzleUv:{value:new Q(.6,.7)},uBlur:{value:0},uDbgNan:{value:0}};this.matA=zs(w1,t);const e={tA:{value:null},tNoise:{value:null},uRes:{value:new Q(1,1)},uAspect:{value:1.78},uTime:{value:0},uFrame:{value:0},uGrain:{value:1},uSharpen:{value:.5},uCompress:{value:1},uMotionMag:{value:0},uBodycam:{value:1},uVignette:{value:.5},uScope:{value:0},uScopeReticle:{value:0},uScopeSway:{value:new Q},uScopeRadius:{value:.44},uScopeZoom:{value:4},uBreath:{value:0},uCA2:{value:1},uFade:{value:1},uSignalLoss:{value:0},uDamage:{value:0}};this.matB=zs(A1,e)}setNoiseTexture(t){this.matA.uniforms.tNoise.value=t,this.matB.uniforms.tNoise.value=t}_rt(t,e,i={}){return new ci(Math.max(1,t|0),Math.max(1,e|0),Object.assign({type:Ai,format:Le,minFilter:fe,magFilter:fe,depthBuffer:!1,stencilBuffer:!1,colorSpace:ss},i))}resize(t,e){t=Math.max(2,t|0),e=Math.max(2,e|0),this.width=t,this.height=e,this.sceneRT?.dispose(),this.ldrRT?.dispose(),this.down?.forEach(s=>s.dispose()),this.up?.forEach(s=>s.dispose()),this.expRT?.forEach(s=>s.dispose()),this.lum?.forEach(s=>s.dispose()),this.sceneRT=this._rt(t,e,{depthBuffer:!0,samples:this.msaa}),this.ldrRT=this._rt(t,e),this.lum=[],this.lumSizes=[];{let s=Math.max(2,t>>2),a=Math.max(2,e>>2);for(let o=0;o<3;o++)this.lum.push(this._rt(s,a)),this.lumSizes.push([s,a]),s=Math.max(2,s>>2),a=Math.max(2,a>>2)}this.down=[],this.up=[];let i=Math.max(2,t>>1),n=Math.max(2,e>>1);this.bloomSizes=[];for(let s=0;s<this.bloomLevels;s++)this.down.push(this._rt(i,n)),this.bloomSizes.push([i,n]),i=Math.max(2,i>>1),n=Math.max(2,n>>1);this.expRT=[this._rt(1,1,{minFilter:we,magFilter:we}),this._rt(1,1,{minFilter:we,magFilter:we})],this._expIdx=0,this._expInit=!1,this._dbgNan=typeof location<"u"&&/[?&]dbgnan/.test(location.search)?1:0,this.matA.uniforms.uRes.value.set(t,e),this.matB.uniforms.uRes.value.set(t,e),this.matA.uniforms.uAspect.value=this.matB.uniforms.uAspect.value=t/e}setMSAA(t){t!==this.msaa&&(this.msaa=t,this.resize(this.width,this.height))}_pass(t,e,i=!1){const n=this.renderer;this._quad.material=t,n.setRenderTarget(e),i&&n.clear(),n.render(this._scene,this._cam)}render(t,e,i){const n=this.renderer,s=this.params;this.time+=i,this.frame++,this.rainTime+=i;const a=n.autoClear;n.autoClear=!0,n.setRenderTarget(this.sceneRT),n.render(t,e),n.autoClear=!1,this.matPre.uniforms.tSrc.value=this.sceneRT.texture,this.matPre.uniforms.uTexel.value.set(1/this.width,1/this.height),this.matPre.uniforms.uThreshold.value=s.bloomThreshold,this.matPre.uniforms.uKnee.value=s.bloomThreshold*.6+.05,this._pass(this.matPre,this.down[0]);for(let u=1;u<this.bloomLevels;u++)this.matDown.uniforms.tSrc.value=this.down[u-1].texture,this.matDown.uniforms.uTexel.value.set(1/this.bloomSizes[u-1][0],1/this.bloomSizes[u-1][1]),this._pass(this.matDown,this.down[u]);for(let u=this.bloomLevels-1;u>0;u--)this.matUp.uniforms.tSrc.value=this.down[u].texture,this.matUp.uniforms.uTexel.value.set(1/this.bloomSizes[u][0],1/this.bloomSizes[u][1]),this.matUp.uniforms.uScatter.value=.62+u*.045,this._pass(this.matUp,this.down[u-1]);this.matDown.uniforms.tSrc.value=this.sceneRT.texture,this.matDown.uniforms.uTexel.value.set(1/this.width,1/this.height),this._pass(this.matDown,this.lum[0]);for(let u=1;u<3;u++)this.matDown.uniforms.tSrc.value=this.lum[u-1].texture,this.matDown.uniforms.uTexel.value.set(1/this.lumSizes[u-1][0],1/this.lumSizes[u-1][1]),this._pass(this.matDown,this.lum[u]);const o=this.expRT[this._expIdx],l=this.expRT[1-this._expIdx],c=this.matExp.uniforms;c.tLum.value=this.lum[2].texture,c.tPrev.value=o.texture,c.uDt.value=this._expInit?Math.min(i,.1):10,c.uKey.value=s.expKey,c.uMin.value=s.expMin,c.uMax.value=s.expMax,this._pass(this.matExp,l),this._expIdx=1-this._expIdx,this._expInit=!0;const h=this.matA.uniforms;h.tScene.value=this.sceneRT.texture,h.tBloom.value=this.down[0].texture,h.tBlurA.value=this.lum[0].texture,h.tBlurB.value=this.lum[1].texture,h.tExposure.value=l.texture,h.uTime.value=this.time,h.uFisheye.value=s.fisheye*(1-Math.min(1,s.scope*1.5)),h.uCA.value=s.ca,h.uBloomAmt.value=s.bloom,h.uExposureBias.value=s.exposureBias,h.uManualExposure.value=s.manualExposure,h.uMotion.value.copy(s.motion),h.uMotionAmt.value=s.motionAmt,h.uRainLens.value=s.rainLens,h.uRainTime.value=this.rainTime,h.uLensDirt.value=s.lensDirt,h.uFlash.value=s.flash,h.uDamage.value=s.damage,h.uHurtPulse.value=s.hurtPulse,h.uConcuss.value=s.concuss,h.uShock.value.copy(s.shock),h.uSaturation.value=s.saturation,h.uContrast.value=s.contrast,h.uTint.value.copy(s.tint),h.uShadowTint.value.copy(s.shadowTint),h.uBodycam.value=s.bodycam,h.uFlareAmt.value=s.flare,h.uFlareDir.value.copy(s.flareDir),h.uMuzzle.value=s.muzzle,h.uMuzzleUv.value.copy(s.muzzleUv),h.uBlur.value=s.blur,h.uDbgNan.value=this._dbgNan,this._pass(this.matA,this.ldrRT);const d=this.matB.uniforms;d.tA.value=this.ldrRT.texture,d.uTime.value=this.time,d.uFrame.value=this.frame%251,d.uGrain.value=s.grain,d.uSharpen.value=s.sharpen,d.uCompress.value=s.compress,d.uMotionMag.value=s.motionMag,d.uBodycam.value=s.bodycam,d.uVignette.value=s.vignette,d.uScope.value=s.scope,d.uScopeReticle.value=s.scopeReticle,d.uScopeSway.value.copy(s.scopeSway),d.uScopeRadius.value=s.scopeRadius,d.uScopeZoom.value=s.scopeZoom,d.uCA2.value=s.ca2*s.ca,d.uFade.value=s.fade,d.uSignalLoss.value=s.signalLoss,d.uDamage.value=s.damage,this._pass(this.matB,null),n.autoClear=a}getFovScale(){const t=this.params,e=this.width/this.height;return 1+.3*t.fisheye*t.bodycam*(1-Math.min(1,t.scope*1.5))*.25*(e*e+1)}dispose(){this.sceneRT.dispose(),this.ldrRT.dispose(),this.down.forEach(t=>t.dispose()),this.expRT.forEach(t=>t.dispose()),this.lum.forEach(t=>t.dispose()),this._quadGeo.dispose();for(const t of[this.matPre,this.matDown,this.matUp,this.matExp,this.matA,this.matB])t.dispose()}}const ef=new Set(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","ShiftLeft","ControlLeft","AltLeft","KeyQ","KeyE","KeyR","KeyF","KeyG","KeyV","KeyB","KeyT","KeyC","Digit1","Digit2","Digit3","Digit4","Escape"]);class E1{constructor(t){this.canvas=t,this.keys=new Set,this._pressed=new Set,this._released=new Set,this.buttons=0,this._btnPressed=0,this._btnReleased=0,this.dx=0,this.dy=0,this.wheel=0,this.locked=!1,this.enabled=!0,this.fake=typeof location<"u"&&/[?&]nolock/.test(location.search),this.listeners={lock:[],unlock:[],key:[]},this._bind()}on(t,e){this.listeners[t].push(e)}_emit(t,e){for(const i of this.listeners[t])i(e)}_bind(){const t=this.canvas;document.addEventListener("pointerlockchange",()=>{const e=this.locked;this.locked=document.pointerLockElement===t,this.locked&&!e&&this._emit("lock"),!this.locked&&e&&(this.releaseAll(),this._emit("unlock"))}),document.addEventListener("pointerlockerror",()=>{this._emit("unlock")}),window.addEventListener("keydown",e=>{if(e.repeat){this.locked&&ef.has(e.code)&&e.preventDefault();return}this.locked&&ef.has(e.code)&&e.preventDefault(),this.keys.has(e.code)||(this.keys.add(e.code),this._pressed.add(e.code)),this._emit("key",e)}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)&&this._released.add(e.code)}),window.addEventListener("blur",()=>this.releaseAll()),t.addEventListener("mousedown",e=>{this.locked&&(this.buttons|=1<<e.button,this._btnPressed|=1<<e.button,e.preventDefault())}),window.addEventListener("mouseup",e=>{this.buttons&1<<e.button&&(this.buttons&=~(1<<e.button),this._btnReleased|=1<<e.button)}),window.addEventListener("mousemove",e=>{if(!this.locked)return;const i=e.movementX||0,n=e.movementY||0;Math.abs(i)>900||Math.abs(n)>900||(this.dx+=i,this.dy+=n)}),window.addEventListener("wheel",e=>{this.locked&&(this.wheel+=Math.sign(e.deltaY),e.preventDefault())},{passive:!1}),window.addEventListener("contextmenu",e=>{this.locked&&e.preventDefault()})}releaseAll(){this.keys.clear(),this.buttons=0}async lock(){if(this.fake){this.locked||(this.locked=!0,this._emit("lock"));return}try{const t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&await t.catch(()=>{const e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(()=>{})})}catch{try{const e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}}unlock(){if(this.fake){this.locked&&(this.locked=!1,this.releaseAll(),this._emit("unlock"));return}document.pointerLockElement&&document.exitPointerLock()}down(t){return this.enabled&&this.keys.has(t)}pressed(t){return this.enabled&&this._pressed.has(t)}released(t){return this.enabled&&this._released.has(t)}mouseDown(t=0){return this.enabled&&(this.buttons&1<<t)!==0}mousePressed(t=0){return this.enabled&&(this._btnPressed&1<<t)!==0}mouseReleased(t=0){return this.enabled&&(this._btnReleased&1<<t)!==0}endFrame(){this._pressed.clear(),this._released.clear(),this._btnPressed=0,this._btnReleased=0,this.dx=0,this.dy=0,this.wheel=0}}const nf=200,Rr=78,C1=.85,R1=.32,P1=[{id:"ring",closed:!0,nodes:[[-13,-10,1.75],[-9,-10,1.75],[-9,-13,1.75],[-3,-13,1.75],[-3,-10,1.75],[3,-10,1.75],[3,-13,1.75],[9,-13,1.75],[9,-10,1.75],[13,-10,1.75],[13,12,1.75],[-13,12,1.75]]},{id:"north",nodes:[[0,-13,1.75],[0,-21,1.8],[5,-23,1.8],[5,-31,1.8]]},{id:"front",nodes:[[-62,-29,0],[-56,-29.5,1.5],[-42,-33,1.85],[-28,-31,1.85],[-14,-34,1.85],[5,-33,1.85],[22,-31,1.85],[38,-34,1.85],[54,-30,1.5],[60,-29,0]]},{id:"east",nodes:[[13,0,1.75],[30,2,1.8],[40,-6,1.8],[46,-18,1.8],[52,-30,1.8]]},{id:"west",nodes:[[-13,3,1.75],[-28,5,1.8],[-40,13,1.8],[-48,25,1.6],[-54,40,0]]},{id:"south",nodes:[[0,12,1.75],[0,26,1.75],[-6,34,1.6],[-8,46,0]]},{id:"rear",nodes:[[26,33,0],[32,33,1.5],[44,27,1.7],[52,14,1.7],[46,2,1.8]]},{id:"sap",nodes:[[-28,5,1.8],[-30,-12,1.6],[-38,-22,1.5],[-42,-32,1.85]]}],I1=[{type:"rect",cx:0,cz:-5,hx:6.2,hz:4.6,y:0,blend:1.4,yaw:0},{type:"rect",cx:30,cz:-17,hx:7.5,hz:6,y:0,blend:1.6,yaw:.3},{type:"rect",cx:-33,cz:-8,hx:7,hz:6,y:0,blend:1.6,yaw:-.25},{type:"circle",cx:-22,cz:-47,r:5.5,y:0,blend:2},{type:"circle",cx:24,cz:-56,r:4.2,y:0,blend:2},{type:"rect",cx:42,cz:34,hx:9,hz:7,y:0,blend:2,yaw:.1}],L1=[{id:"bunker",kind:"bunker",x:0,z:-5,yaw:0,opts:{w:7,d:5,h:2.6}},{id:"houseNE",kind:"ruinedHouse",x:30,z:-17,yaw:.3,opts:{w:9,d:7,floors:2,seed:4}},{id:"houseW",kind:"ruinedHouse",x:-33,z:-8,yaw:-.25,opts:{w:8,d:6.5,floors:2,seed:9}},{id:"tank",kind:"tankWreck",x:-22,z:-47,yaw:.9,opts:{seed:2,turret:"askew"}},{id:"apc",kind:"apcWreck",x:24,z:-56,yaw:-.5,opts:{seed:3}},{id:"truck",kind:"truckWreck",x:-54,z:-22,yaw:1.9,opts:{seed:5}},{id:"car1",kind:"carWreck",x:-60,z:10,yaw:.4,opts:{seed:6}},{id:"car2",kind:"carWreck",x:-57,z:15,yaw:-.9,opts:{seed:8,colour:6975314}},{id:"cont1",kind:"container",x:38,z:30,yaw:.1,opts:{seed:1,colour:4938312}},{id:"cont2",kind:"container",x:46,z:30.5,yaw:.08,opts:{seed:2,colour:7028524,open:!0}},{id:"cont3",kind:"container",x:42,z:38,yaw:-.05,opts:{seed:3,colour:3754074}},{id:"cont4",kind:"container",x:42,z:34,yaw:1.6,opts:{seed:4,colour:8022586,stacked:2}},{id:"tower1",kind:"watchtower",x:58,z:-38,yaw:.2,opts:{seed:1}},{id:"tower2",kind:"watchtower",x:-58,z:-42,yaw:-.3,opts:{seed:2}}],ks={x:0,z:4.5,yaw:0},Db=[{x:4.6,z:3.5},{x:-3.5,z:-33},{x:22,z:3.4},{x:-20,z:5.2},{x:.8,z:20}];function D1(r=Rr-2){const t=[],e=new lr(99),i=(n,s,a,o)=>{for(let l=0;l<a;l++){const c=n+(s-n)*(l+e.range(.1,.9))/a,h=r+e.range(-2,2);t.push({x:Math.sin(c)*h,z:-Math.cos(c)*h,weight:o,angle:c})}};return i(-1.05,1.05,14,1.6),i(1.05,2.3,8,1),i(-2.3,-1.05,8,1),i(2.3,3.9,8,.55),t}function N1(){const r=new lr(1234),t=[],e=(s,a,o)=>t.some(l=>Math.hypot(l.x-s,l.z-a)<l.r+o+1.2),i=(s,a)=>Math.hypot(s,a)<17&&a>-16;let n=0;for(;t.length<46&&n++<2e3;){const s=r.range(0,Math.PI*2),a=Math.sqrt(r.next())*74,o=Math.sin(s)*a,l=-Math.cos(s)*a,c=l<-34?1:.35;if(!r.chance(c))continue;const h=r.range(1.4,4.6)*(r.chance(.12)?1.7:1);i(o,l)||e(o,l,h)||L1.some(d=>Math.hypot(d.x-o,d.z-l)<h+8)||t.push({x:o,z:l,r:h,depth:h*r.range(.18,.34)})}return t}const U1=N1(),Nb=D1(),ts=(r,t,e,i)=>ti((r%e+e)%e,(t%e+e)%e,i);function F1(r,t,e,i){const n=r*e,s=t*e,a=Math.floor(n),o=Math.floor(s),l=n-a,c=s-o,h=ts(a,o,e,i),d=ts(a+1,o,e,i),u=ts(a,o+1,e,i),f=ts(a+1,o+1,e,i),p=l*l*(3-2*l),x=c*c*(3-2*c);return h+(d-h)*p+(u-h)*x+(h-d-u+f)*p*x}function Vs(r,t,e,i,n){let s=.5,a=0,o=0;for(let l=0;l<i;l++)a+=s*F1(r,t,e,n+l*13),o+=s,s*=.5,e*=2;return a/o}function sf(r,t,e,i){const n=r*e,s=t*e,a=Math.floor(n),o=Math.floor(s);let l=9,c=9,h=0;for(let d=-1;d<=1;d++)for(let u=-1;u<=1;u++){const f=a+u,p=o+d,x=f+ts(f,p,e,i),g=p+ts(f,p,e,i+5),m=Math.hypot(x-n,g-s);m<l?(c=l,l=m,h=ts(f,p,e,i+9)):m<c&&(c=m)}return{f1:l,f2:c,id:h}}function Oc(r,t,e){const i=new Float32Array(r*r);for(let h=0;h<r;h++)for(let d=0;d<r;d++)i[h*r+d]=t(d/r,h/r);let n=1e9,s=-1e9;for(let h=0;h<i.length;h++)i[h]<n&&(n=i[h]),i[h]>s&&(s=i[h]);const a=1/Math.max(1e-6,s-n);for(let h=0;h<i.length;h++)i[h]=(i[h]-n)*a;const o=new Uint8Array(r*r*4),l=(h,d)=>i[(d+r)%r*r+(h+r)%r];for(let h=0;h<r;h++)for(let d=0;d<r;d++){const u=(h*r+d)*4,f=(l(d-1,h)-l(d+1,h))*e,p=(l(d,h-1)-l(d,h+1))*e,x=Math.hypot(f,p,1);o[u]=i[h*r+d]*255,o[u+1]=(f/x*.5+.5)*255,o[u+2]=(p/x*.5+.5)*255;const g=(l(d-2,h)+l(d+2,h)+l(d,h-2)+l(d,h+2)+l(d-3,h-3)+l(d+3,h+3))/6;o[u+3]=Math.max(0,Math.min(255,(.75+(i[h*r+d]-g)*2.2)*255))}const c=new Xe(o,r,r,Le,Oe);return c.wrapS=c.wrapT=ns,c.magFilter=fe,c.minFilter=xi,c.generateMipmaps=!0,c.anisotropy=8,c.needsUpdate=!0,c}let ao=null;function O1(){if(ao)return ao;const r=Oc(512,(i,n)=>{const s=1-Math.abs(2*Vs(i,n,11,3,31)-1);return .5*Vs(i,n,5,5,3)+.32*s*s+.18*Vs(i,n,40,2,7)},5.5),t=Oc(256,(i,n)=>{const s=sf(i,n,22,61);return .5*Vs(i,n,9,5,15)+.3*Math.max(0,1-s.f1*1.6)+.2*Vs(i,n,90,2,41)},5),e=Oc(256,(i,n)=>{const s=sf(i,n,24,81);return Math.pow(Math.max(0,1-s.f1*1.55),.8)*(.5+.5*s.id)*.85+.15*Vs(i,n,60,2,9)},7);return ao={mud:r,dirt:t,gravel:e},ao}const B1=`
attribute vec4 aMask;
varying vec4 vMask;
varying vec3 vWPos;
varying vec3 vGeoN;
`,z1=`
varying vec4 vMask; varying vec3 vWPos; varying vec3 vGeoN;
uniform sampler2D uMud; uniform sampler2D uDirt; uniform sampler2D uGravel; uniform sampler2D uNoise;
uniform float uTime; uniform float uWetG; uniform float uRain;

float th12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

vec2 rippleOffset(vec2 p, float t) {
  vec2 sum = vec2(0.0);
  for (int L = 0; L < 2; L++) {
    float sc = L == 0 ? 3.3 : 6.1;
    vec2 q = p * sc + float(L) * 17.3;
    vec2 id = floor(q); vec2 f = fract(q) - 0.5;
    float h1 = th12(id + float(L) * 3.7);
    vec2 jit = (vec2(th12(id + 1.3), th12(id + 7.1)) - 0.5) * 0.55;
    f -= jit;
    float ph = fract(t * (0.42 + 0.5 * h1) + h1 * 5.0);
    float r = length(f);
    float size = 0.27 + 0.26 * th12(id + 4.4);                       // every drop reaches a different radius
    float d1 = r - ph * size;
    float d2 = r - max(ph - 0.15, 0.0) * size * 0.82;                // trailing second ring
    float a = 1.0 - ph; a = a * a * a;
    float g1 = exp(-d1 * d1 * 420.0), g2 = 0.55 * exp(-d2 * d2 * 420.0) * step(0.15, ph);
    sum += (f / (r + 1e-3)) * ((-d1 * g1 - d2 * g2) * 2.34) * a * step(h1, 0.62) * (L == 0 ? 1.0 : 0.6);
  }
  return sum;
}

struct TSurf { vec3 albedo; float rough; vec3 normal; };

TSurf terrainSurface(vec3 wp, vec3 Ng, vec4 mk) {
  TSurf s;
  float steep = 1.0 - Ng.y;
  float wallW = smoothstep(0.26, 0.55, steep);
  vec4 n1 = texture2D(uNoise, wp.xz * 0.0125);
  vec4 n2 = texture2D(uNoise, wp.xz * 0.047 + 0.31);
  vec4 n3 = texture2D(uNoise, wp.xz * 0.19 + 0.77);
  float macro = n1.r * 0.55 + n2.g * 0.45;

  // ---------------- top mapping (XZ)
  vec2 uA = wp.xz / 3.1, uB = wp.xz / 0.79 + 0.37;
  vec4 mA = texture2D(uMud, uA), mB = texture2D(uMud, uB);
  vec4 dA = texture2D(uDirt, wp.xz / 2.3), dB = texture2D(uDirt, wp.xz / 0.61 + 0.5);
  vec4 gA = texture2D(uGravel, wp.xz / 1.1);
  float mudH = mA.r * 0.65 + mB.r * 0.35;
  float dirtH = dA.r * 0.6 + dB.r * 0.4;
  float gravH = gA.r;
  vec2 mudS = (mA.gb * 2.0 - 1.0) * 0.7 + (mB.gb * 2.0 - 1.0) * 0.55;
  vec2 dirtS = (dA.gb * 2.0 - 1.0) * 0.6 + (dB.gb * 2.0 - 1.0) * 0.55;
  vec2 gravS = (gA.gb * 2.0 - 1.0) * 0.9;

  float trench = mk.z;
  float wMud = mix(0.62, 1.0, trench) * smoothstep(0.1, 0.9, 1.0 - macro * 0.8 + trench * 0.3) + mk.x * 1.5;
  float wDirt = (1.0 - trench * 0.7) * smoothstep(0.25, 0.95, macro) * 0.75;
  float wGrav = smoothstep(0.72, 0.8, n2.b + n1.g * 0.15) * (1.0 - mk.x) * (0.3 + 0.7 * (1.0 - trench));
  float m1 = mudH + wMud, m2 = dirtH + wDirt, m3 = gravH + wGrav * 1.4;
  float mx = max(m1, max(m2, m3)) - 0.34;
  float b1 = max(m1 - mx, 0.0), b2 = max(m2 - mx, 0.0), b3 = max(m3 - mx, 0.0);
  float bs = b1 + b2 + b3 + 1e-4; b1 /= bs; b2 /= bs; b3 /= bs;

  vec3 cMud = vec3(0.052, 0.041, 0.031) * (0.55 + 1.05 * mudH) * mix(0.75, 1.0, mA.a);
  vec3 cDirt = vec3(0.150, 0.118, 0.082) * (0.55 + 0.95 * dirtH) * mix(0.7, 1.0, dA.a);
  vec3 cGrav = vec3(0.105, 0.100, 0.092) * (0.45 + 0.9 * gravH) * (0.8 + 0.4 * n3.b);
  vec3 albTop = cMud * b1 + cDirt * b2 + cGrav * b3;
  float roughTop = 0.62 * b1 + 0.82 * b2 + 0.68 * b3;
  vec2 slopeTop = mudS * b1 + dirtS * b2 + gravS * b3;

  // dead grass patches
  float grass = smoothstep(0.55, 0.72, n1.g + n2.r * 0.35) * (1.0 - trench) * (1.0 - mk.w) * (1.0 - smoothstep(0.1, 0.35, steep)) * (1.0 - mk.x);
  vec3 cGrass = vec3(0.115, 0.100, 0.045) * (0.45 + 1.1 * n3.b) * (0.6 + 0.8 * dirtH);
  albTop = mix(albTop, cGrass, grass * 0.6);
  roughTop = mix(roughTop, 0.78, grass * 0.6);

  // ---------------- wall mapping (trench walls / crater rims): (along, up)
  vec2 hn = normalize(Ng.xz + vec2(1e-4));
  vec2 tw = vec2(hn.y, -hn.x);
  vec2 wuv = vec2(dot(wp.xz, tw), wp.y);
  vec4 wA = texture2D(uDirt, wuv / 1.9), wB = texture2D(uMud, wuv / 1.3 + 0.21);
  vec4 wG = texture2D(uGravel, wuv / 1.1);
  float strata = 0.5 + 0.5 * sin(wp.y * 6.5 + n2.g * 5.0 + n1.r * 3.0);
  float roots = smoothstep(0.86, 0.95, texture2D(uNoise, vec2(wuv.x * 0.9, wuv.y * 0.11)).b) * 0.7;
  float stones = smoothstep(0.62, 0.8, wG.r);
  vec3 cWall = vec3(0.105, 0.080, 0.056) * (0.55 + 0.75 * strata) * (0.5 + 0.9 * wA.r) * mix(0.75, 1.0, wA.a);
  cWall = mix(cWall, vec3(0.13, 0.125, 0.115) * (0.5 + wG.r), stones * 0.55);
  cWall = mix(cWall, vec3(0.03, 0.022, 0.014), roots);
  cWall *= mix(1.0, 0.55, (1.0 - smoothstep(-1.8, -0.2, wp.y)));  // deeper = wetter/darker
  vec2 slopeWall = (wA.gb * 2.0 - 1.0) * 0.8 + (wB.gb * 2.0 - 1.0) * 0.5 + (wG.gb * 2.0 - 1.0) * 0.6 * stones;

  vec3 alb = mix(albTop, cWall, wallW);
  float rough = mix(roughTop, 0.66, wallW);

  // ---------------- normals
  vec3 Nt = normalize(vec3(Ng.x + slopeTop.x * 0.30, Ng.y, Ng.z + slopeTop.y * 0.30));
  vec3 T3 = vec3(tw.x, 0.0, tw.y);
  vec3 Nw = normalize(Ng + T3 * slopeWall.x * 0.42 + vec3(0.0, 1.0, 0.0) * slopeWall.y * 0.42);
  vec3 N = normalize(mix(Nt, Nw, wallW));

  // ---------------- scorch
  float sc = mk.w * (0.55 + 0.45 * n3.g);
  alb = mix(alb, alb * 0.22 + vec3(0.010), clamp(sc, 0.0, 1.0) * 0.9);
  rough = mix(rough, 0.86, sc * 0.7);

  // ---------------- wetness (global rain) darkening + sheen
  float wet = uWetG;
  alb *= mix(1.0, 0.60, wet * (1.0 - wallW * 0.4));
  rough = mix(rough, rough * 0.78, wet);

  // ---------------- puddles
  float pud = smoothstep(0.26, 0.5, mk.x * 1.25 + (n3.g - 0.5) * 0.28 + (macro - 0.5) * 0.2) * (1.0 - wallW);
  float rim = smoothstep(0.0, 0.5, pud) * (1.0 - smoothstep(0.5, 0.95, pud));
  alb = mix(alb, alb * 0.55, rim * 0.6);
  vec3 puddleCol = vec3(0.016, 0.019, 0.021) + vec3(0.010, 0.008, 0.005) * n3.r;
  alb = mix(alb, puddleCol, pud * 0.94);
  rough = mix(rough, 0.03, pud);
  vec2 rp = rippleOffset(wp.xz, uTime);
  float rfade = 1.0 - smoothstep(9.0, 32.0, length(wp - cameraPosition));      // far rings would only alias into bright dots
  rp *= rfade;
  vec3 Np = normalize(vec3(rp.x * uRain * 1.7 + (n3.r - 0.5) * 0.015, 1.0, rp.y * uRain * 1.7 + (n3.b - 0.5) * 0.015));
  // wet open ground gets faint ripples too
  vec2 rp2 = rippleOffset(wp.xz * 0.9 + 3.7, uTime * 1.13) * rfade;
  N = normalize(mix(N + vec3(rp2.x, 0.0, rp2.y) * uRain * 0.18 * wet, Np, pud));

  s.albedo = alb * mix(1.0, mk.y, 0.9);
  s.rough = clamp(rough, 0.025, 1.0);
  s.normal = N;
  return s;
}
`;function k1(){const r=O1(),t=new Bl({color:16777215,roughness:.8,metalness:0}),e={uMud:{value:r.mud},uDirt:{value:r.dirt},uGravel:{value:r.gravel},uNoise:{value:cr()},uTime:Be.time,uWetG:Be.wet,uRain:{value:1}};return t.userData.uniforms=e,t.onBeforeCompile=i=>{Object.assign(i.uniforms,e),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
`+B1).replace("#include <begin_vertex>",`#include <begin_vertex>
 vMask = aMask; vWPos = position; vGeoN = normal;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
`+z1).replace("#include <color_fragment>",`#include <color_fragment>
        TSurf tsf = terrainSurface(vWPos, normalize(vGeoN), vMask);
        diffuseColor.rgb = tsf.albedo;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = tsf.rough;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        normal = normalize((viewMatrix * vec4(tsf.normal, 0.0)).xyz);`)},t.customProgramCacheKey=()=>"terrain-v1",t}const Bc=8;class V1{constructor(t={}){this.size=nf,this.half=nf/2,this.res=t.res??.5,this.n=Math.round(this.size/this.res)+1;const e=this.n*this.n;this.h=new Float32Array(e),this.puddle=new Float32Array(e),this.trench=new Float32Array(e),this.ao=new Float32Array(e),this.scorch=new Float32Array(e),this._segs=[],this._buildTrenchSegments(),this._generate(),this.group=null,this.heightTex=null,this.material=null}_idx(t,e){return e*this.n+t}heightAt(t,e){const i=this.n,n=(t+this.half)/this.res,s=(e+this.half)/this.res;let a=Math.floor(n),o=Math.floor(s);a<0?a=0:a>i-2&&(a=i-2),o<0?o=0:o>i-2&&(o=i-2);let l=n-a,c=s-o;l=l<0?0:l>1?1:l,c=c<0?0:c>1?1:c;const h=this.h,d=o*i+a,u=h[d],f=h[d+1],p=h[d+i],x=h[d+i+1];return u+(f-u)*l+(p-u)*c+(u-f-p+x)*l*c}_sample(t,e,i){const n=this.n,s=(e+this.half)/this.res,a=(i+this.half)/this.res;let o=Math.floor(s),l=Math.floor(a);o<0?o=0:o>n-2&&(o=n-2),l<0?l=0:l>n-2&&(l=n-2);let c=s-o,h=a-l;c=c<0?0:c>1?1:c,h=h<0?0:h>1?1:h;const d=l*n+o,u=t[d],f=t[d+1],p=t[d+n],x=t[d+n+1];return u+(f-u)*c+(p-u)*h+(u-f-p+x)*c*h}puddleAt(t,e){return this._sample(this.puddle,t,e)}trenchAt(t,e){return this._sample(this.trench,t,e)}scorchAt(t,e){return this._sample(this.scorch,t,e)}surfaceAt(t,e){return this.puddleAt(t,e)>.42?"water":this.trenchAt(t,e)>.5?"mud":this.scorchAt(t,e)>.5?"dirt":"mud"}normalAt(t,e,i){const n=this.res,s=this.heightAt(t-n,e),a=this.heightAt(t+n,e),o=this.heightAt(t,e-n),l=this.heightAt(t,e+n);return i.set(s-a,2*n,o-l).normalize(),i}slopeAt(t,e){const i=this.res,n=(this.heightAt(t+i,e)-this.heightAt(t-i,e))/(2*i),s=(this.heightAt(t,e+i)-this.heightAt(t,e-i))/(2*i);return Math.hypot(n,s)}raycast(t,e,i,n,s,a,o,l){let h=0;if(!(e-this.heightAt(t,i)>0))return l.t=0,l.point.set(t,e,i),this.normalAt(t,i,l.normal),!0;for(let u=.5;;u+=.5){u>o&&(u=o);const f=t+n*u,p=e+s*u,x=i+a*u;if(f<-this.half||f>this.half||x<-this.half||x>this.half)return!1;if(!(p-this.heightAt(f,x)>0)){let m=h,v=u;for(let _=0;_<12;_++){const S=(m+v)*.5;e+s*S-this.heightAt(t+n*S,i+a*S)>0?m=S:v=S}const M=(m+v)*.5;return l.t=M,l.point.set(t+n*M,e+s*M,i+a*M),this.normalAt(l.point.x,l.point.z,l.normal),!0}if(h=u,u>=o)return!1}}_buildTrenchSegments(){const t=this._segs;for(const n of P1){const s=n.nodes,a=n.closed?s.length:s.length-1;for(let o=0;o<a;o++){const l=s[o],c=s[(o+1)%s.length];t.push({ax:l[0],az:l[1],bx:c[0],bz:c[1],da:l[2],db:c[2],dx:c[0]-l[0],dz:c[1]-l[1],l2:(c[0]-l[0])**2+(c[1]-l[1])**2})}}const e=8,i=5;this._hashCell=e,this._hashN=Math.ceil(this.size/e)+1,this._hash=Array.from({length:this._hashN*this._hashN},()=>[]),t.forEach((n,s)=>{const a=Math.min(n.ax,n.bx)-i,o=Math.max(n.ax,n.bx)+i,l=Math.min(n.az,n.bz)-i,c=Math.max(n.az,n.bz)+i,h=Math.floor((a+this.half)/e),d=Math.floor((o+this.half)/e),u=Math.floor((l+this.half)/e),f=Math.floor((c+this.half)/e);for(let p=Math.max(0,u);p<=Math.min(this._hashN-1,f);p++)for(let x=Math.max(0,h);x<=Math.min(this._hashN-1,d);x++)this._hash[p*this._hashN+x].push(s)})}trenchInfo(t,e,i){const n=this._hashCell,s=Math.floor((t+this.half)/n),a=Math.floor((e+this.half)/n);let o=1e9,l=0,c=0,h=0,d=0,u=-1;if(s>=0&&a>=0&&s<this._hashN&&a<this._hashN){const f=this._hash[a*this._hashN+s];for(let p=0;p<f.length;p++){const x=this._segs[f[p]];let g=((t-x.ax)*x.dx+(e-x.az)*x.dz)/(x.l2||1);g=g<0?0:g>1?1:g;const m=x.ax+x.dx*g,v=x.az+x.dz*g,M=Math.hypot(t-m,e-v);M<o&&(o=M,l=x.da+(x.db-x.da)*g,c=m,h=v,d=g,u=f[p])}}return i.d=o,i.depth=l,i.px=c,i.pz=h,i.t=d,i.seg=u,i}_baseHeight(t,e){return .42*(Bs(t*.017+40,e*.017+11,4,3)-.5)*2+.15*(Bs(t*.065+13,e*.065+7,3,9)-.5)*2+.035*(Bs(t*.33,e*.33,2,5)-.5)*2}_generate(){const t=this.n,e=this.res,i=this.half,n=this.h,s=this.trench,a=this.scorch,o={d:0,depth:0,px:0,pz:0,t:0,seg:-1},l=C1,c=R1,h=U1,d=h.map((u,f)=>f%3===0?1:.35);for(let u=0;u<t;u++){const f=-i+u*e;for(let p=0;p<t;p++){const x=-i+p*e,g=u*t+p;let m=this._baseHeight(x,f);for(const y of I1){let A;if(y.type==="circle")A=Math.hypot(x-y.cx,f-y.cz)-y.r;else{const I=Math.cos(y.yaw||0),D=Math.sin(y.yaw||0),B=(x-y.cx)*I+(f-y.cz)*D,L=-(x-y.cx)*D+(f-y.cz)*I,O=Math.abs(B)-y.hx,G=Math.abs(L)-y.hz;A=Math.hypot(Math.max(O,0),Math.max(G,0))+Math.min(Math.max(O,G),0)}const R=1-Si(0,y.blend,A);R>0&&(m=Oi(m,y.y,R))}let v=0;for(let y=0;y<h.length;y++){const A=h[y],R=x-A.x,I=f-A.z;if(R>A.r*2||R<-A.r*2||I>A.r*2||I<-A.r*2)continue;const D=Math.hypot(R,I);if(D<A.r*1.9){const B=D/A.r;if(B<1){const O=1-B*B;m-=A.depth*O*O}const L=(D-A.r*1.08)/(A.r*.34);m+=A.depth*.32*Math.exp(-L*L),v=Math.max(v,(1-Si(A.r*.7,A.r*1.9,D))*d[y])}}a[g]=v,this.trenchInfo(x,f,o);let M=0,_=0,S=0;if(o.d<l+c+3.2){_=1-Si(l,l+c,o.d);const y=Math.min(1,o.depth/1.4);M=o.depth*_;const A=(o.d-(l+c+.42))/.7;S=.46*Math.exp(-A*A)*y*(o.d>l?1:0),M+=_*.07*(Bs(x*1.3,f*1.3,2,21)-.5)}m=m-M+S,s[g]=_;const w=Math.hypot(x,f),E=Si(Rr-6,Rr+26,w);m+=E*E*15+E*2.6+E*2.2*(Bs(x*.05,f*.05,3,55)-.3),n[g]=m}}this._deriveMaps()}_boxBlur(t,e){const i=this.n,n=new Float32Array(i*i),s=new Float32Array(i*i),a=2*e+1;for(let o=0;o<i;o++){let l=0;for(let c=-e;c<=e;c++)l+=t[o*i+Ge(c,0,i-1)];for(let c=0;c<i;c++)n[o*i+c]=l/a,l+=t[o*i+Math.min(i-1,c+e+1)]-t[o*i+Math.max(0,c-e)]}for(let o=0;o<i;o++){let l=0;for(let c=-e;c<=e;c++)l+=n[Ge(c,0,i-1)*i+o];for(let c=0;c<i;c++)s[c*i+o]=l/a,l+=n[Math.min(i-1,c+e+1)*i+o]-n[Math.max(0,c-e)*i+o]}return s}_deriveMaps(){const t=this.n,e=this.res,i=this.half,n=this._boxBlur(this.h,Math.round(3/e)),s=this._boxBlur(this.h,Math.round(1.1/e)),a=this._boxBlur(s,Math.round(1.1/e));for(let o=0;o<t;o++){const l=-i+o*e;for(let c=0;c<t;c++){const h=-i+c*e,d=o*t+c,u=this.h[d],f=this.h[o*t+Math.max(0,c-1)],p=this.h[o*t+Math.min(t-1,c+1)],x=this.h[Math.max(0,o-1)*t+c],g=this.h[Math.min(t-1,o+1)*t+c],m=Math.hypot(p-f,g-x)/(2*e),v=n[d]-u;let M=Ge((v-.05)*2.4,0,1);const _=Bs(h*.42+5,l*.42+9,3,77);M*=Si(.34,.6,_+M*.35),M*=1-Si(.1,.32,m),M*=1-Si(Rr-4,Rr+6,Math.hypot(h,l)),this.puddle[d]=M;const S=a[d]-u;this.ao[d]=Ge(1-S*.75-this.trench[d]*.18,.28,1)}}}build(t){const e=this.n,i=this.res,n=this.half,s=new Rn;s.name="terrain";const a=(e-1)/Bc,o=Math.ceil(a),l=k1(),c=new C;this.material=l;for(let h=0;h<Bc;h++)for(let d=0;d<Bc;d++){const u=d*o,f=h*o,p=Math.min(e-1,u+o),x=Math.min(e-1,f+o),g=p-u+1,m=x-f+1;if(g<2||m<2)continue;const v=new Float32Array(g*m*3),M=new Float32Array(g*m*3),_=new Float32Array(g*m*4);let S=1e9,w=-1e9;for(let O=0;O<m;O++)for(let G=0;G<g;G++){const W=(f+O)*e+(u+G),tt=O*g+G,X=-n+(u+G)*i,K=-n+(f+O)*i,J=this.h[W];v[tt*3]=X,v[tt*3+1]=J,v[tt*3+2]=K,J<S&&(S=J),J>w&&(w=J);const wt=this.h[(f+O)*e+Math.max(0,u+G-1)],mt=this.h[(f+O)*e+Math.min(e-1,u+G+1)],Yt=this.h[Math.max(0,f+O-1)*e+u+G],kt=this.h[Math.min(e-1,f+O+1)*e+u+G];c.set(wt-mt,2*i,Yt-kt).normalize(),M[tt*3]=c.x,M[tt*3+1]=c.y,M[tt*3+2]=c.z,_[tt*4]=this.puddle[W],_[tt*4+1]=this.ao[W],_[tt*4+2]=this.trench[W],_[tt*4+3]=this.scorch[W]}const E=new Uint32Array((g-1)*(m-1)*6);let y=0;for(let O=0;O<m-1;O++)for(let G=0;G<g-1;G++){const W=O*g+G,tt=W+1,X=W+g,K=X+1;(G+O+d+h&1)===0?(E[y++]=W,E[y++]=X,E[y++]=tt,E[y++]=tt,E[y++]=X,E[y++]=K):(E[y++]=W,E[y++]=X,E[y++]=K,E[y++]=W,E[y++]=K,E[y++]=tt)}const A=new Kt;A.setAttribute("position",new ue(v,3)),A.setAttribute("normal",new ue(M,3)),A.setAttribute("aMask",new ue(_,4)),A.setIndex(new ue(E,1));const R=-n+u*i,I=-n+p*i,D=-n+f*i,B=-n+x*i;A.boundingBox=new Ze(new C(R,S,D),new C(I,w,B)),A.boundingSphere=new We,A.boundingBox.getBoundingSphere(A.boundingSphere);const L=new ve(A,l);L.receiveShadow=!0,L.castShadow=!1,L.userData.surface="mud",L.matrixAutoUpdate=!1,s.add(L)}return this.group=s,this.heightTex=this._buildHeightTexture(),l.userData.setHeightTex?.(this.heightTex),s}_buildHeightTexture(){const e=new Uint16Array(524288);for(let n=0;n<512;n++)for(let s=0;s<512;s++){const a=-this.half+(s+.5)/512*this.size,o=-this.half+(n+.5)/512*this.size;e[(n*512+s)*2]=$c.toHalfFloat(this.heightAt(a,o)),e[(n*512+s)*2+1]=$c.toHalfFloat(this.puddleAt(a,o))}const i=new Xe(e,512,512,pn,Ai);return i.minFilter=i.magFilter=fe,i.wrapS=i.wrapT=qe,i.needsUpdate=!0,i}dispose(){this.group&&this.group.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.material?.dispose(),this.heightTex?.dispose()}}const G1=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;   // always at the far plane
}`,H1=`
precision highp float;
varying vec3 vDir;
uniform sampler2D uNoise;
uniform float uTime;
uniform vec3 uHorizon; uniform vec3 uZenith; uniform vec3 uSunDir; uniform vec3 uSunCol;
uniform float uFlash; uniform vec3 uFlashDir;
uniform vec4 uGlow[4];
uniform vec2 uWind;

float cloud(vec2 p, float t) {
  vec2 w = uWind * t;
  float a = texture2D(uNoise, p * 0.05 + w * 0.010).r;
  float b = texture2D(uNoise, p * 0.13 + w * 0.022 + 0.37).g;
  float c = texture2D(uNoise, p * 0.41 + w * 0.05 + 0.71).b;
  return a * 0.55 + b * 0.32 + c * 0.13;
}
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.2, 1.0);
  float up = max(d.y, 0.0);
  // base gradient: bright hazy horizon → dark leaden zenith
  float skyT = pow(smoothstep(0.02, 1.05, up), 0.9);
  vec3 col = mix(uHorizon, uZenith, skyT);
  // cloud deck projected on a plane
  vec2 cp = d.xz / (d.y + 0.22);
  float cl = cloud(cp * 1.2, uTime);
  float cl2 = cloud(cp * 2.6 + 8.0, uTime * 1.6);
  float dens = smoothstep(0.34, 0.72, cl * 0.75 + cl2 * 0.35);
  vec3 cloudDark = uZenith * 0.55;
  vec3 cloudLight = mix(uHorizon, uZenith, 0.45) * 1.15;
  vec3 cc = mix(cloudLight, cloudDark, dens);
  col = mix(col, cc, smoothstep(0.12, 0.75, up) * 0.85);
  // warm sunset smear behind the clouds, opposite the cold side
  float sd = max(dot(d, normalize(uSunDir)), 0.0);
  float horizonMask = exp(-abs(d.y) * 5.5);
  vec3 warm = uSunCol * (pow(sd, 4.0) * 0.75 + pow(sd, 28.0) * 1.4) * horizonMask;
  col += warm * (1.0 - dens * 0.55);
  // distant artillery / fire glows
  for (int i = 0; i < 4; i++) {
    vec4 g = uGlow[i];
    float gd = max(dot(d, normalize(g.xyz)), 0.0);
    col += vec3(1.0, 0.52, 0.22) * g.w * (pow(gd, 18.0) * 0.6 + pow(gd, 90.0)) * exp(-abs(d.y) * 7.0);
  }
  // lightning: whole deck lights up, brightest along a bolt direction
  float lf = uFlash * (0.25 + 0.75 * dens + 0.6 * pow(max(dot(d, uFlashDir), 0.0), 6.0));
  col += vec3(0.62, 0.70, 0.95) * lf;
  // below the horizon: fog colour
  col = mix(col, uHorizon * 0.9, 1.0 - smoothstep(-0.12, 0.02, d.y));
  gl_FragColor = vec4(col, 1.0);
}`;class W1{constructor(){this.uniforms={uNoise:{value:cr()},uTime:Be.time,uHorizon:{value:new ct(.3,.335,.365)},uZenith:{value:new ct(.06,.075,.095)},uSunDir:{value:new C(-.72,.06,-.55).normalize()},uSunCol:{value:new ct(1,.55,.3).multiplyScalar(.34)},uFlash:{value:0},uFlashDir:{value:new C(.2,.5,-1).normalize()},uGlow:{value:[new se(0,.05,-1,0),new se(1,.05,-.2,0),new se(-1,.05,.3,0),new se(.3,.05,1,0)]},uWind:{value:new Q(1,.4)}};const t=new Ue({vertexShader:G1,fragmentShader:H1,uniforms:this.uniforms,side:Ye,depthWrite:!1,depthTest:!1,fog:!1});this.mesh=new ve(new us(300,48,24),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3}update(t){this.mesh.position.copy(t.position)}}const X1=`
attribute vec3 aSeed;
attribute vec4 aRnd;
uniform float uTime; uniform vec3 uBox; uniform float uSpeed; uniform vec2 uWind; uniform float uLen; uniform float uWidth; uniform vec2 uRes;
uniform float uAlpha; uniform sampler2D uCover; uniform vec2 uCoverInfo;   // x = half size of cover map (m), y = 1/size
varying float vAlpha; varying float vFlashDist;
#include <fog_pars_vertex>
void main(){
  float spd = uSpeed * (0.85 + 0.3 * aRnd.y);
  vec3 vel = vec3(uWind.x, -spd, uWind.y);
  vec3 p0 = aSeed * uBox;
  vec3 local = mod(p0 + vel * uTime - cameraPosition, uBox) - 0.5 * uBox;
  vec3 head = cameraPosition + local;
  float len = uLen * (0.7 + 0.6 * aRnd.x);
  vec3 tail = head - vel * len / spd * 1.0;       // streak trails back along the fall direction
  // shelter: no rain under roofs (cover map holds the roof underside height; 0 = open sky)
  vec2 cuv = (head.xz + uCoverInfo.x) * uCoverInfo.y;
  float roof = texture2D(uCover, cuv).r * 12.75;
  float sheltered = step(0.5, roof) * step(head.y, roof);
  vec4 mvH = viewMatrix * vec4(head, 1.0);
  vec4 mvT = viewMatrix * vec4(tail, 1.0);
  vec4 ch = projectionMatrix * mvH, ct = projectionMatrix * mvT;
  float dist = length(mvH.xyz);
  float ok = step(0.08, -mvH.z) * step(0.08, -mvT.z) * (1.0 - sheltered);
  vec2 nh = ch.xy / ch.w, nt = ct.xy / ct.w;
  vec2 dpx = (nt - nh) * uRes * 0.5;
  float dl = max(length(dpx), 1e-3);
  vec2 dir = dpx / dl;
  vec2 perp = vec2(-dir.y, dir.x);
  // width in pixels: physical width projected, but never below 0.75 px (alpha compensates)
  float pxPerM = uRes.y * 0.5 * projectionMatrix[1][1] / max(-mvH.z, 0.05);
  float wpx = max(uWidth * pxPerM, 0.8);
  float thin = clamp(uWidth * pxPerM / 0.8, 0.15, 1.0);
  vec2 ndc = mix(nh, nt, position.y) + perp * position.x * wpx / (uRes * 0.5);
  float w = mix(ch.w, ct.w, position.y);
  gl_Position = vec4(ndc * w, mix(ch.z, ct.z, position.y), w);
  // fades
  float edge = 1.0 - smoothstep(0.32, 0.5, max(abs(local.x) / uBox.x, abs(local.z) / uBox.z));
  float vert = 1.0 - smoothstep(0.36, 0.5, abs(local.y) / uBox.y);
  float near = smoothstep(0.7, 3.0, dist);
  float tip = mix(1.0, 0.25, position.y);            // brighter head, fading tail
  vAlpha = uAlpha * aRnd.z * edge * vert * near * thin * tip * ok;
  vFlashDist = dist;
  vec4 mvPosition = mvH;
  #include <fog_vertex>
}`,q1=`
uniform vec3 uColor; uniform float uFlash; uniform float uLight;
varying float vAlpha; varying float vFlashDist;
#include <fog_pars_fragment>
void main(){
  if (vAlpha < 0.004) discard;
  vec3 c = uColor + vec3(1.0, 0.78, 0.5) * uFlash * 6.0 / (1.0 + vFlashDist * vFlashDist * 0.08) + vec3(0.7, 0.8, 1.0) * uLight;
  gl_FragColor = vec4(c, vAlpha);
  #include <fog_fragment>
}`,Y1=`
attribute vec3 aSeed;
attribute vec4 aRnd;
uniform float uTime; uniform vec2 uArea; uniform sampler2D uHeight; uniform float uHalf; uniform float uRate; uniform sampler2D uCover; uniform vec2 uCoverInfo;
varying vec2 vUv; varying float vAlpha; varying float vPud; varying float vT; varying float vRnd;
#include <fog_pars_vertex>
void main(){
  vec2 p0 = aSeed.xy * uArea;
  vec2 local = mod(p0 - cameraPosition.xz, uArea) - 0.5 * uArea;
  vec2 xz = cameraPosition.xz + local;
  vec2 huv = (xz + uHalf) / (2.0 * uHalf);
  vec2 hp = texture2D(uHeight, huv).rg;
  float t = fract(uTime * uRate * (0.7 + 0.6 * aRnd.x) + aSeed.z);
  // re-randomise position each cycle
  float cyc = floor(uTime * uRate * (0.7 + 0.6 * aRnd.x) + aSeed.z);
  vec2 jit = (vec2(fract(sin(cyc * 12.9898 + aSeed.x * 78.233) * 43758.5453), fract(sin(cyc * 39.3468 + aSeed.y * 11.135) * 24634.6345)) - 0.5) * 6.0;
  xz += jit; huv = (xz + uHalf) / (2.0 * uHalf); hp = texture2D(uHeight, huv).rg;
  float roof = texture2D(uCover, (xz + uCoverInfo.x) * uCoverInfo.y).r * 12.75;
  float open = 1.0 - step(0.5, roof);
  float size = mix(0.05, 0.16, aRnd.y) * (0.5 + 0.9 * smoothstep(0.0, 0.35, t)) * (1.0 + hp.g * 0.8);
  vec3 wp = vec3(xz.x, hp.r + 0.02, xz.y) + vec3(position.x, 0.0, position.y) * size;
  vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vUv = position.xy; vT = t; vPud = hp.g; vRnd = aRnd.w;
  float dist = length(mvPosition.xyz);
  vAlpha = open * (1.0 - smoothstep(0.7, 1.0, t)) * (1.0 - smoothstep(0.32, 0.5, length(local) / (uArea.x * 0.5))) * (0.35 + 0.65 * aRnd.z) * smoothstep(0.4, 1.6, dist);
  #include <fog_vertex>
}`,Z1=`
uniform vec3 uColor;
varying vec2 vUv; varying float vAlpha; varying float vPud; varying float vT; varying float vRnd;
#include <fog_pars_fragment>
void main(){
  float r = length(vUv);
  float ringR = 0.25 + vT * 0.7;
  // ripple: the crest widens and dies off as it expands, and is never a perfect circle
  float ring = exp(-pow((r - ringR) * (8.0 - 3.5 * vT), 2.0)) * (0.5 + 0.5 * vPud) * (1.0 - 0.8 * vT);
  vec2 rd = normalize(vUv + vec2(1e-5));               // sin(3θ) without atan (undefined at the exact centre)
  float dy = rd.x * sin(vRnd * 6.2831) + rd.y * cos(vRnd * 6.2831);
  ring *= 0.62 + 0.38 * (3.0 * dy - 4.0 * dy * dy * dy);
  float core = exp(-r * r * 40.0) * (1.0 - vT) * (1.0 - vT) * 0.7;
  float a = (ring * 0.62 + core) * vAlpha * step(r, 1.0);
  if (a < 0.01) discard;
  gl_FragColor = vec4(uColor, a);
  #include <fog_fragment>
}`,K1=`
attribute vec4 aData;       // xyz = centre, w = size
attribute vec4 aRnd;
uniform float uTime; uniform vec2 uWind; uniform float uRadius; uniform float uAlpha; uniform vec3 uColor;
varying vec2 vUv; varying float vAlpha; varying float vSeed;
#include <fog_pars_vertex>
void main(){
  vec3 c = aData.xyz;
  c.xz += uWind * uTime * (0.4 + aRnd.x * 0.6);
  vec2 rel = mod(c.xz - cameraPosition.xz + uRadius, 2.0 * uRadius) - uRadius;
  c.xz = cameraPosition.xz + rel;
  c.y += sin(uTime * 0.1 + aRnd.y * 6.28) * 0.3;
  float size = aData.w * (0.85 + 0.3 * sin(uTime * 0.07 + aRnd.z * 6.0));
  vec4 mv = viewMatrix * vec4(c, 1.0);
  mv.xy += position.xy * size;
  gl_Position = projectionMatrix * mv;
  vUv = position.xy * 0.5 + 0.5; vSeed = aRnd.w;
  float dist = length(mv.xyz);
  float fade = smoothstep(2.0, 9.0, dist) * (1.0 - smoothstep(0.6 * uRadius, uRadius, length(rel)));
  vAlpha = uAlpha * fade * (0.5 + aRnd.x * 0.5);
  vec4 mvPosition = mv;
  #include <fog_vertex>
}`,J1=`
uniform sampler2D uNoise; uniform float uTime; uniform vec3 uColor;
varying vec2 vUv; varying float vAlpha; varying float vSeed;
#include <fog_pars_fragment>
void main(){
  vec2 q = vUv - 0.5;
  float r = length(q) * 2.0;
  float n = texture2D(uNoise, vUv * 0.7 + vSeed * 7.0 + uTime * 0.004).g * 0.6 + texture2D(uNoise, vUv * 1.7 + vSeed * 3.0 - uTime * 0.006).b * 0.4;
  float a = smoothstep(1.0, 0.15, r) * smoothstep(0.25, 0.75, n + (1.0 - r) * 0.35) * vAlpha;
  if (a < 0.002) discard;
  gl_FragColor = vec4(uColor, a);
  #include <fog_fragment>
}`;function zc(r,t={}){const e=ua.merge([ft.fog,r]);for(const i in t)e[i]=t[i];return e}function kc(r=!1){const t=new da,e=r?[-1,0,0,1,0,0,-1,1,0,1,1,0]:[-1,-1,0,1,-1,0,-1,1,0,1,1,0];return t.setAttribute("position",new Et(e,3)),t.setIndex([0,1,2,2,1,3]),t}function rf(r,t,e=3){const i=new lr(t),n=new Float32Array(r*e),s=new Float32Array(r*4);for(let a=0;a<r;a++){for(let o=0;o<e;o++)n[a*e+o]=i.next();for(let o=0;o<4;o++)s[a*4+o]=i.next()}return{s:n,r:s}}class $1{constructor(t,e,i={}){this.scene=t,this.terrain=e,this.intensity=1,this.wind=new Q(1.6,.6),this.windSpeed=2,this.gust=.4,this.time=0,this.lightningT=8+Math.random()*10,this.flash=0,this._bolt=null,this.thunderQueue=[],this.flashDir=new C(0,.4,-1),this.onThunder=null,this.res=new Q(1920,1080),this.coverSize=e.size,this.coverTex=this._makeCover(),this.coverU={value:this.coverTex},this.windU={value:this.wind},this.resU={value:this.res},this.group=new Rn,this.group.name="weather";const n=(o,l,c,h,d,u,f,p)=>{const x=kc(!0),{s:g,r:m}=rf(o,p);x.setAttribute("aSeed",new mi(g,3)),x.setAttribute("aRnd",new mi(m,4)),x.instanceCount=o;const v=new Ue({vertexShader:X1,fragmentShader:q1,transparent:!0,depthWrite:!1,fog:!0,side:ei,uniforms:zc({uBox:{value:new C(...l)},uSpeed:{value:c},uLen:{value:h},uWidth:{value:d},uAlpha:{value:u},uColor:{value:new ct(...f)},uFlash:{value:0},uLight:{value:0},uCoverInfo:{value:new Q(this.coverSize/2,1/this.coverSize)}},{uTime:Be.time,uWind:this.windU,uRes:this.resU,uCover:this.coverU})}),M=new ve(x,v);return M.frustumCulled=!1,M.renderOrder=20,this.group.add(M),M},s=i.rainNear??5e3,a=i.rainFar??9e3;this.rainNear=n(s,[16,14,16],9,.36,.003,.5,[.62,.68,.74],11),this.rainFar=n(a,[70,28,70],9.5,1.1,.01,.3,[.5,.56,.62],12);{const o=i.splashes??1400,l=kc(!1),{s:c,r:h}=rf(o,13);l.setAttribute("aSeed",new mi(c,3)),l.setAttribute("aRnd",new mi(h,4)),l.instanceCount=o,this.splashMat=new Ue({vertexShader:Y1,fragmentShader:Z1,transparent:!0,depthWrite:!1,fog:!0,side:ei,uniforms:zc({uArea:{value:new Q(28,28)},uHalf:{value:e.half},uRate:{value:1.9},uColor:{value:new ct(.55,.6,.66)},uCoverInfo:{value:new Q(this.coverSize/2,1/this.coverSize)}},{uTime:Be.time,uHeight:{value:e.heightTex},uCover:this.coverU})});const d=new ve(l,this.splashMat);d.frustumCulled=!1,d.renderOrder=19,this.group.add(d),this.splashes=d}{const o=i.mist??70,l=kc(!1),c=new lr(21),h=new Float32Array(o*4),d=new Float32Array(o*4),u=55;for(let p=0;p<o;p++){const x=c.range(0,Math.PI*2),g=Math.sqrt(c.next())*u;h[p*4]=Math.cos(x)*g,h[p*4+1]=c.range(.15,1.6),h[p*4+2]=Math.sin(x)*g,h[p*4+3]=c.range(4.5,11);for(let m=0;m<4;m++)d[p*4+m]=c.next()}l.setAttribute("aData",new mi(h,4)),l.setAttribute("aRnd",new mi(d,4)),l.instanceCount=o,this.mistMat=new Ue({vertexShader:K1,fragmentShader:J1,transparent:!0,depthWrite:!1,fog:!0,side:ei,uniforms:zc({uWind:{value:new Q(.7,.25)},uRadius:{value:u},uAlpha:{value:.13},uColor:{value:new ct(.34,.375,.41)}},{uTime:Be.time,uNoise:{value:cr()}})});const f=new ve(l,this.mistMat);f.frustumCulled=!1,f.renderOrder=18,this.group.add(f),this.mist=f}t.add(this.group)}_makeCover(){const t=Math.round(this.coverSize),e=new Uint8Array(t*t*4),i=new Xe(e,t,t,Le,Oe);return i.minFilter=i.magFilter=we,i.wrapS=i.wrapT=qe,i.needsUpdate=!0,this._coverData=e,this._coverS=t,i}addShelter(t,e,i,n,s){const a=this._coverS,o=this.coverSize/2,l=this._coverData,c=Math.max(0,Math.floor(t+o)),h=Math.min(a-1,Math.floor(i+o)),d=Math.max(0,Math.floor(e+o)),u=Math.min(a-1,Math.floor(n+o)),f=Math.min(255,Math.round(s*20));for(let p=d;p<=u;p++)for(let x=c;x<=h;x++)l[(p*a+x)*4]=Math.max(l[(p*a+x)*4],f);this.coverTex.needsUpdate=!0}isSheltered(t,e,i){const n=this._coverS,s=this.coverSize/2,a=Math.floor(t+s),o=Math.floor(i+s);if(a<0||o<0||a>=n||o>=n)return!1;const l=this._coverData[(o*n+a)*4]/20;return l>.5&&e<l}setQuality(t){const e={low:[.35,.3,.3],medium:[.65,.6,.6],high:[1,1,1],ultra:[1,1,1]}[t]||[1,1,1];this.rainNear.geometry.instanceCount=Math.floor(5e3*e[0]),this.rainFar.geometry.instanceCount=Math.floor(9e3*e[1]),this.splashes.geometry.instanceCount=Math.floor(1400*e[1]),this.mist.geometry.instanceCount=Math.floor(70*e[2])}setResolution(t,e){this.res.set(t,e)}strike(t=900,e=1){this._bolt={t:0,dur:.55+Math.random()*.3,seed:Math.random(),big:e};const i=Math.random()*Math.PI*2;this.flashDir.set(Math.sin(i),.35+Math.random()*.4,Math.cos(i)).normalize(),this.thunderQueue.push({t:t/343,distance:t,big:e})}update(t,e){this.time+=t;const i=.5+.5*Math.sin(this.time*.37)*Math.sin(this.time*.11+1.3);this.gust=Fe(this.gust,i,1.5,t);const n=.6+Math.sin(this.time*.05)*.5,s=1.4+this.gust*3.2;this.windSpeed=s,this.wind.set(Math.cos(n)*s,Math.sin(n)*s),this.mistMat.uniforms.uWind.value.set(this.wind.x*.35,this.wind.y*.35),this.lightningT-=t,this.lightningT<=0&&this.intensity>.3&&(this.strike(600+Math.random()*3200),this.lightningT=14+Math.random()*34);let a=0;if(this._bolt){const l=this._bolt;l.t+=t;const c=l.t/l.dur,h=Math.max(Math.exp(-c*7)*(.6+.4*Math.sin(c*60+l.seed*9)),c>.28?Math.exp(-(c-.28)*9)*.7:0,c>.55?Math.exp(-(c-.55)*12)*.5:0);a=Ge(h,0,1)*l.big,c>=1&&(this._bolt=null)}this.flash=a;for(let l=this.thunderQueue.length-1;l>=0;l--){const c=this.thunderQueue[l];c.t-=t,c.t<=0&&(this.thunderQueue.splice(l,1),this.onThunder&&this.onThunder(c.distance,c.big))}const o=this.intensity;this.rainNear.material.uniforms.uAlpha.value=.5*o,this.rainFar.material.uniforms.uAlpha.value=.3*o,this.rainNear.material.uniforms.uFlash.value=0,this.rainFar.material.uniforms.uFlash.value=0,this.mistMat.uniforms.uAlpha.value=.13*(.7+.3*o),Be.wet.value=Fe(Be.wet.value,.55+.4*o,.5,t)}setLocalLight(t){this.rainNear.material.uniforms.uFlash.value=t,this.rainFar.material.uniforms.uFlash.value=t*.3}setAmbientRainLight(t){this.rainNear.material.uniforms.uLight.value=t,this.rainFar.material.uniforms.uLight.value=t*.6}}const Ci=8;class j1{constructor(t){this.terrain=t,this.boxes=[],this.cyls=[],this.n=Math.ceil(t.size/Ci)+1,this.grid=Array.from({length:this.n*this.n},()=>[]),this._stamp=1,this._tmpT={t:0,point:new C,normal:new C},this.all=[]}add(t,e=0,i=0,n=0,s=0){const a=Math.cos(s),o=Math.sin(s),l=e+t.cx*a+t.cz*o,c=n-t.cx*o+t.cz*a,h=i+t.cy;let d;if(t.type==="cyl")d={type:"cyl",id:this.all.length,cx:l,cy:h,cz:c,r:t.r,hy:t.hy,surface:t.surface||"metal",walkable:!!t.walkable,thin:!!t.thin,minx:l-t.r,maxx:l+t.r,minz:c-t.r,maxz:c+t.r,miny:h-t.hy,maxy:h+t.hy},this.cyls.push(d);else{const m=s+(t.yaw||0),v=Math.cos(m),M=Math.sin(m),_=Math.abs(v)*t.hx+Math.abs(M)*t.hz,S=Math.abs(M)*t.hx+Math.abs(v)*t.hz;d={type:"box",id:this.all.length,cx:l,cy:h,cz:c,hx:t.hx,hy:t.hy,hz:t.hz,c:v,s:M,surface:t.surface||"concrete",walkable:!!t.walkable,thin:!!t.thin,minx:l-_,maxx:l+_,minz:c-S,maxz:c+S,miny:h-t.hy,maxy:h+t.hy},this.boxes.push(d)}this.all.push(d);const u=this.terrain.half,f=Math.max(0,Math.floor((d.minx+u)/Ci)),p=Math.min(this.n-1,Math.floor((d.maxx+u)/Ci)),x=Math.max(0,Math.floor((d.minz+u)/Ci)),g=Math.min(this.n-1,Math.floor((d.maxz+u)/Ci));for(let m=x;m<=g;m++)for(let v=f;v<=p;v++)this.grid[m*this.n+v].push(d);return d}forEachNear(t,e,i,n){const s=this.terrain.half,a=++this._stamp,o=Math.max(0,Math.floor((t-i+s)/Ci)),l=Math.min(this.n-1,Math.floor((t+i+s)/Ci)),c=Math.max(0,Math.floor((e-i+s)/Ci)),h=Math.min(this.n-1,Math.floor((e+i+s)/Ci));for(let d=c;d<=h;d++)for(let u=o;u<=l;u++){const f=this.grid[d*this.n+u];for(let p=0;p<f.length;p++){const x=f[p];x._stamp!==a&&(x._stamp=a,n(x))}}}groundY(t,e,i,n=.55,s=0){let a=this.terrain.heightAt(t,e);return this.all.length&&this.forEachNear(t,e,s+.2,o=>{if(!o.walkable)return;const l=o.maxy;if(!(l<=a||l>i+n))if(o.type==="box"){const c=t-o.cx,h=e-o.cz,d=c*o.c-h*o.s,u=c*o.s+h*o.c;Math.abs(d)<=o.hx+s*.5&&Math.abs(u)<=o.hz+s*.5&&(a=l)}else Math.hypot(t-o.cx,e-o.cz)<=o.r+s*.5&&(a=l)}),a}pushOut(t,e,i,n,s=.5){let a=!1;return this.forEachNear(t.x,t.z,e+.1,o=>{if(!(o.maxy<=i+s&&(o.walkable||o.maxy<=i+.15))&&!(o.miny>=n||o.maxy<=i))if(o.type==="box"){const l=t.x-o.cx,c=t.z-o.cz,h=l*o.c-c*o.s,d=l*o.s+c*o.c,u=Math.max(-o.hx,Math.min(o.hx,h)),f=Math.max(-o.hz,Math.min(o.hz,d));let p=h-u,x=d-f,g=p*p+x*x;if(g>=e*e)return;let m,v,M;if(g>1e-8){const _=Math.sqrt(g);m=p/_,v=x/_,M=e-_}else{const _=o.hx-Math.abs(h),S=o.hz-Math.abs(d);_<S?(m=h>=0?1:-1,v=0,M=_+e):(m=0,v=d>=0?1:-1,M=S+e)}t.x+=(m*o.c+v*o.s)*M,t.z+=(-m*o.s+v*o.c)*M,a=!0}else{const l=t.x-o.cx,c=t.z-o.cz,h=Math.hypot(l,c),d=o.r+e;if(h>=d)return;const u=h>1e-6?l/h:1,f=h>1e-6?c/h:0;t.x+=u*(d-h),t.z+=f*(d-h),a=!0}}),a}_rayBox(t,e,i,n,s,a,o,l,c){const h=e-t.cx,d=n-t.cz,u=h*t.c-d*t.s,f=h*t.s+d*t.c,p=i-t.cy,x=s*t.c-o*t.s,g=s*t.s+o*t.c;let m=0,v=l,M=0,_=0,S=0;if(Math.abs(x)<1e-9){if(Math.abs(u)>t.hx)return!1}else{let E=(-t.hx-u)/x,y=(t.hx-u)/x,A=-1;if(E>y){const R=E;E=y,y=R,A=1}if(E>m&&(m=E,M=A,_=0,S=0),y<v&&(v=y),m>v)return!1}if(Math.abs(a)<1e-9){if(Math.abs(p)>t.hy)return!1}else{let E=(-t.hy-p)/a,y=(t.hy-p)/a,A=-1;if(E>y){const R=E;E=y,y=R,A=1}if(E>m&&(m=E,M=0,_=A,S=0),y<v&&(v=y),m>v)return!1}if(Math.abs(g)<1e-9){if(Math.abs(f)>t.hz)return!1}else{let E=(-t.hz-f)/g,y=(t.hz-f)/g,A=-1;if(E>y){const R=E;E=y,y=R,A=1}if(E>m&&(m=E,M=0,_=0,S=A),y<v&&(v=y),m>v)return!1}if(m<=0&&v<=0)return!1;let w=m;if(w<=0){if(w=v,w<=0||w>l)return!1;c.inside=!0}else c.inside=!1;return c.t=w,c.nx=M*t.c+S*t.s,c.ny=_,c.nz=-M*t.s+S*t.c,!0}_rayCyl(t,e,i,n,s,a,o,l,c){const h=e-t.cx,d=n-t.cz,u=s*s+o*o;let f=1/0,p=0,x=0,g=0;if(u>1e-12){const m=h*s+d*o,v=h*h+d*d-t.r*t.r,M=m*m-u*v;if(M>=0){const _=Math.sqrt(M);let S=(-m-_)/u;if(S<0&&(S=(-m+_)/u),S>=0&&S<=l){const w=i+a*S;w>=t.miny&&w<=t.maxy&&(f=S,p=(h+s*S)/t.r,g=(d+o*S)/t.r,x=0)}}}if(Math.abs(a)>1e-9)for(const m of[t.maxy,t.miny]){const v=(m-i)/a;if(v>=0&&v<f&&v<=l){const M=h+s*v,_=d+o*v;M*M+_*_<=t.r*t.r&&(f=v,p=0,g=0,x=m===t.maxy?1:-1)}}return f===1/0?!1:(c.t=f,c.nx=p,c.ny=x,c.nz=g,c.inside=!1,!0)}raycastStatic(t,e,i,n,s,a,o,l,c=null){let h=o,d=!1;const u=this._h||(this._h={t:0,nx:0,ny:0,nz:0,inside:!1}),f=Ci*.5,p=Math.min(200,Math.ceil(o/f)),x=++this._stamp,g=this.terrain.half;for(let m=0;m<=p;m++){const v=Math.min(o,m*f),M=t+n*v,_=i+a*v,S=Math.floor((M+g)/Ci),w=Math.floor((_+g)/Ci);for(let E=-1;E<=1;E++)for(let y=-1;y<=1;y++){const A=S+y,R=w+E;if(A<0||R<0||A>=this.n||R>=this.n)continue;const I=this.grid[R*this.n+A];for(let D=0;D<I.length;D++){const B=I[D];if(B._rstamp===x||(B._rstamp=x,c&&c===B))continue;(B.type==="box"?this._rayBox(B,t,e,i,n,s,a,h,u):this._rayCyl(B,t,e,i,n,s,a,h,u))&&u.t<h&&(h=u.t,d=!0,l.t=u.t,l.nx=u.nx,l.ny=u.ny,l.nz=u.nz,l.surface=B.surface,l.thin=B.thin,l.collider=B,l.inside=u.inside)}}if(v>=o)break}return d&&(l.x=t+n*h,l.y=e+s*h,l.z=i+a*h),d}raycast(t,e,i,n,s,a,o,l,c=null){let h=this.raycastStatic(t,e,i,n,s,a,o,l,c);const d=this._tmpT,u=h?l.t:o;return this.terrain.raycast(t,e,i,n,s,a,u,d)&&(!h||d.t<l.t)?(h=!0,l.t=d.t,l.x=d.point.x,l.y=d.point.y,l.z=d.point.z,l.nx=d.normal.x,l.ny=d.normal.y,l.nz=d.normal.z,l.surface=this.terrain.surfaceAt(l.x,l.z),l.thin=!1,l.collider=null,l.terrain=!0,l.inside=!1,!0):(h&&(l.terrain=!1),h)}blocked(t,e,i,n,s,a,o=!1){const l=n-t,c=s-e,h=a-i,d=Math.hypot(l,c,h);if(d<1e-4)return!1;const u=1/d,f=this._bh||(this._bh={});return this.raycastStatic(t,e,i,l*u,c*u,h*u,d-.05,f)&&!(o&&f.thin)?!0:this.terrain.raycast(t,e,i,l*u,c*u,h*u,d-.05,this._tmpT)}}const Q1=new C;class tb{constructor(t,e){this.world=t,this.terrain=e,this.pos=new C,this.vel=new C,this.yaw=0,this.pitch=0,this.radius=.36,this.heightStand=1.82,this.heightCrouch=1.15,this.eyeStand=1.5,this.eyeCrouch=.98,this.eyeSlide=.7,this.crouchAmt=0,this.slideT=0,this.slideDir=new C,this.wantCrouch=!1,this.onGround=!0,this.groundY=0,this.stepSmooth=0,this.lean=0,this.leanTarget=0,this.sprinting=!1,this.sprintBlend=0,this.moving=0,this.speed=0,this.stamina=100,this.staminaDelay=0,this.exhausted=!1,this.breath=100,this.holdingBreath=!1,this.breathLock=0,this.maxHp=100,this.hp=100,this.lastHurt=-99,this.hurtPulse=0,this.dead=!1,this.stepAcc=0,this.stepSide=1,this.bobPhase=0,this.bobAmp=0,this.mantle=null,this.landImpact=0,this.lastAccel=new Q,this.timeAlive=0,this.onStep=null,this.onLand=null,this.onDamage=null,this.onDeath=null,this.onMantle=null,this.onSlide=null,this.onJump=null,this.gameTime=0}reset(t,e,i=0){this.pos.set(t,this.terrain.heightAt(t,e),e),this.vel.set(0,0,0),this.yaw=i,this.pitch=0,this.hp=this.maxHp,this.dead=!1,this.stamina=100,this.breath=100,this.crouchAmt=0,this.slideT=0,this.wantCrouch=!1,this.mantle=null,this.lean=0,this.leanTarget=0,this.hurtPulse=0,this.lastHurt=-99,this.landImpact=0,this.timeAlive=0}get height(){return Oi(this.heightStand,this.heightCrouch,this.crouchAmt)}get eyeHeight(){const t=this.slideT>0?Si(0,.15,Math.min(this.slideT,.35)):0;return Oi(Oi(this.eyeStand,this.eyeCrouch,this.crouchAmt),this.eyeSlide,t)}chestPos(t){return t.set(this.pos.x,this.pos.y+this.height*.62,this.pos.z)}damage(t,e,i="bullet"){this.dead||t<=0||(this.hp-=t,this.lastHurt=this.gameTime,this.hurtPulse=Math.min(1,this.hurtPulse+.35+t/60),this.onDamage&&this.onDamage(t,e,i),this.hp<=0&&(this.hp=0,this.dead=!0,this.onDeath&&this.onDeath(i)))}update(t,e){if(this.gameTime+=t,this.timeAlive+=t,this.dead){this.vel.multiplyScalar(Math.exp(-6*t)),this._integrate(t);return}if(this.terrain,this.world,this.mantle){this._updateMantle(t),this._staminaBreath(t,e),this.hurtPulse=Math.max(0,this.hurtPulse-t*1.4);return}if(e.crouchPress)if(this.sprinting&&this.speed>4.2&&this.onGround&&this.slideT<=0&&this.stamina>6){this.slideT=.95,this.slideDir.copy(this.vel).setY(0).normalize();const M=Math.max(this.speed*1.12,6.6);this.vel.x=this.slideDir.x*M,this.vel.z=this.slideDir.z*M,this.wantCrouch=!0,this.stamina=Math.max(0,this.stamina-6),this.onSlide&&this.onSlide()}else this.wantCrouch=!this.wantCrouch;e.crouchHold!==void 0&&e.crouchHold!==null&&(this.wantCrouch=e.crouchHold||this.wantCrouch&&e.crouchPress),e.jump&&this.wantCrouch&&this.onGround&&(this.wantCrouch=!1),this.crouchAmt=Fe(this.crouchAmt,this.wantCrouch||this.slideT>0?1:0,11,t);const i=Math.sin(this.yaw),n=Math.cos(this.yaw);let s=0,a=0;const o=e.my,l=e.mx;s=-i*o+n*l,a=-n*o-i*l;let c=Math.hypot(s,a);c>1&&(s/=c,a/=c,c=1);const h=c>.01,d=!this.exhausted&&this.crouchAmt<.4&&o>.2&&e.ads<.3&&this.slideT<=0&&!e.scoped,u=e.sprint&&d&&h;this.sprinting=u&&this.onGround?!0:this.sprinting&&!this.onGround&&u,this.sprintBlend=Fe(this.sprintBlend,this.sprinting?1:0,7,t);let f;const p=o<-.1?.78:1;this.sprinting?f=5.7:this.crouchAmt>.5?f=1.65:f=3.15,f*=p*(Math.abs(l)>.5&&Math.abs(o)<.2?.93:1)*(e.speedMul??1),f*=Oi(1,.62,Ge(e.ads,0,1)),e.holdBreath&&(f*=.6);const x=this.vel.x,g=this.vel.z;if(this.slideT>0){this.slideT-=t;const M=Math.exp(-2.6*t);this.vel.x*=M,this.vel.z*=M,this.vel.x+=s*3*t,this.vel.z+=a*3*t,(Math.hypot(this.vel.x,this.vel.z)<2.2||!this.onGround&&this.slideT<.5)&&(this.slideT=Math.min(this.slideT,0)),this.slideT<=0&&(this.slideT=0)}else{const M=this.onGround,_=M?this.sprinting?20:34:6,S=M?13:1.2,w=s*f,E=a*f,y=w-this.vel.x,A=E-this.vel.z,R=Math.hypot(y,A);if(h){const I=Math.min(R,_*t);R>1e-5&&(this.vel.x+=y/R*I,this.vel.z+=A/R*I)}else{const I=Math.hypot(this.vel.x,this.vel.z);if(I>1e-5){const D=Math.max(0,I-S*t);this.vel.x*=D/I,this.vel.z*=D/I}}}this.lastAccel.set((this.vel.x-x)/Math.max(t,1e-4),(this.vel.z-g)/Math.max(t,1e-4)),e.jump&&this.slideT<=0&&(this._tryMantle()||this.onGround&&this.crouchAmt<.6&&(this.vel.y=4.7,this.onGround=!1,this.pos.y+=.02,this.onJump&&this.onJump())),this.onGround||(this.vel.y-=14.5*t),this._integrate(t),this.leanTarget=e.lean,(this.sprinting||this.slideT>0)&&(this.leanTarget=0),this.lean=Fe(this.lean,this.leanTarget,9,t);const m=Math.hypot(this.vel.x,this.vel.z);this.speed=m,this.moving=Fe(this.moving,Ge(m/3.2,0,1.6)*(this.onGround?1:.15),10,t);const v=this.sprinting?1.35:this.crouchAmt>.5?.8:1;this.onGround&&m>.4&&this.slideT<=0?(this.stepAcc+=m*t,this.bobPhase+=m*t/v*Math.PI,this.stepAcc>=v*.72&&(this.stepAcc=0,this.stepSide=-this.stepSide,this.onStep&&this.onStep(this.sprinting,this.crouchAmt>.5,this.stepSide))):this.stepAcc=Math.min(this.stepAcc,v*.5),this.bobAmp=Fe(this.bobAmp,this.onGround&&this.slideT<=0?Ge(m/3.2,0,1.8):0,9,t),this._staminaBreath(t,e),this.hurtPulse=Math.max(0,this.hurtPulse-t*1.4),this.hp<this.maxHp&&this.gameTime-this.lastHurt>6&&(this.hp=Math.min(this.maxHp,this.hp+14*t)),this.landImpact=Math.max(0,this.landImpact-t*3.2),this.stepSmooth=Fe(this.stepSmooth,0,12,t)}_staminaBreath(t,e){this.sprinting?(this.stamina=Math.max(0,this.stamina-17*t),this.staminaDelay=.9,this.stamina<=0&&(this.exhausted=!0)):(this.staminaDelay-=t,this.staminaDelay<=0&&(this.stamina=Math.min(100,this.stamina+(this.crouchAmt>.5?30:21)*t))),this.exhausted&&this.stamina>28&&(this.exhausted=!1),e.holdBreath&&e.scoped&&this.breathLock<=0&&this.breath>0?(this.holdingBreath=!0,this.breath=Math.max(0,this.breath-24*t),this.breath<=0&&(this.breathLock=2.2,this.holdingBreath=!1)):(this.holdingBreath=!1,this.breathLock-=t,this.breath=Math.min(100,this.breath+20*t))}_integrate(t){const e=this.world;this.terrain;const i=Math.hypot(this.vel.x,this.vel.z),n=Math.max(1,Math.ceil(i*t/.14)),s=t/n,a=this.radius,o=.52,l=this.height;for(let c=0;c<n;c++){if(this.vel.x!==0){const u=this.pos.x+this.vel.x*s;this._walkable(u,this.pos.z,o)?this.pos.x=u:this.vel.x*=.1}if(this.vel.z!==0){const u=this.pos.z+this.vel.z*s;this._walkable(this.pos.x,u,o)?this.pos.z=u:this.vel.z*=.1}e.pushOut(this.pos,a,this.pos.y+.05,this.pos.y+l,o);const h=Math.hypot(this.pos.x,this.pos.z);if(h>84){const u=84/h;this.pos.x*=u,this.pos.z*=u}const d=e.groundY(this.pos.x,this.pos.z,this.pos.y,o,a);if(this.groundY=d,this.onGround&&(this.pos.y-d>.06&&this.vel.y<=.01?this.pos.y-d>.25?this.onGround=!1:(this.stepSmooth+=this.pos.y-d,this.pos.y=d):d>this.pos.y?(this.stepSmooth-=d-this.pos.y,this.pos.y=d):this.pos.y=d,this.vel.y=0),!this.onGround)if(this.pos.y+=this.vel.y*s,this.pos.y<=d&&this.vel.y<=0){const u=-this.vel.y;this.pos.y=d,this.onGround=!0,u>2.5&&(this.landImpact=Math.min(1,u/9),this.onLand&&this.onLand(u),u>6&&(this.vel.x*=.6,this.vel.z*=.6)),this.vel.y=0}else this.vel.y>0&&e.all.length}}_walkable(t,e,i){const n=this.terrain.heightAt(t,e);return this.onGround?n-this.pos.y<=i:n-this.pos.y<=.25}_tryMantle(){const t=-Math.sin(this.yaw),e=-Math.cos(this.yaw),i=this.world,n=this.pos.y;let s=-1;for(let x=.45;x<=1;x+=.15){const g=this.pos.x+t*x,m=this.pos.z+e*x;if(i.groundY(g,m,n+3,4,0)-n>.6){s=x;break}}if(s<0)return!1;let a=-1e9,o=0;for(let x=s;x<=s+1.5;x+=.1){const g=this.pos.x+t*x,m=this.pos.z+e*x,v=i.groundY(g,m,n+3,4,0);(v>a+.02||x===s)&&(a=Math.max(a,v),o=x)}const l=a-n;if(l<.6||l>2.05)return!1;const c=Math.min(o+.2,s+1.1),h=this.pos.x+t*c,d=this.pos.z+e*c,u=i.groundY(h,d,n+3,4,0);if(Math.abs(u-a)>.55||this.terrain.slopeAt(h,d)>.8)return!1;const f=Q1.set(h,u,d),p=f.clone();return i.pushOut(f,this.radius*.9,u+.1,u+1.6,0)&&f.distanceTo(p)>.25?!1:(this.mantle={t:0,dur:.3+l*.2,from:this.pos.clone(),to:new C(h,u,d),rise:l},this.vel.set(0,0,0),this.wantCrouch=!1,this.onMantle&&this.onMantle(l),!0)}_updateMantle(t){const e=this.mantle;e.t+=t;const i=Ge(e.t/e.dur,0,1),n=Si(0,.62,i),s=Si(.3,1,i);this.pos.x=Oi(e.from.x,e.to.x,s),this.pos.z=Oi(e.from.z,e.to.z,s),this.pos.y=Oi(e.from.y,e.to.y,n),this.mantleK=i,i>=1&&(this.pos.copy(e.to),this.mantle=null,this.onGround=!0,this.vel.set(0,0,0),this.landImpact=.35,this.onLand&&this.onLand(3.5))}}const Jn=128,ne={soft:0,smokeA:1,smokeB:2,flash:5,chunk:8,flameA:9,flameB:10,dust:11,streak:12,halo:13,shard:14,puff:15};function Fi(r,t,e,i=4){let n=.5,s=0,a=0,o=1;for(let l=0;l<i;l++)s+=n*ru(r*o,t*o,e+l*7),a+=n,n*=.5,o*=2;return s/a}const di=(r,t,e)=>{const i=Math.max(0,Math.min(1,(e-r)/(t-r)));return i*i*(3-2*i)},eb=new Set([0,1,2,3,5,7,8,11,13,15]);let Vc=null;function ib(){if(Vc)return Vc;const r=Jn*4,t=new Uint8Array(r*r*4),e=(s,a)=>{const o=s%4*Jn,l=Math.floor(s/4)*Jn;for(let c=0;c<Jn;c++)for(let h=0;h<Jn;h++){const d=(h+.5)/Jn*2-1,u=(c+.5)/Jn*2-1,f=Math.hypot(d,u);let[p,x]=a(d,u,f,h,c);const g=eb.has(s)?1-di(.72,1,f):1-di(.86,1,Math.max(Math.abs(d),Math.abs(u)));x=Math.max(0,Math.min(1,x))*g;const m=((l+c)*r+o+h)*4;t[m]=t[m+1]=t[m+2]=Math.max(0,Math.min(255,p*255)),t[m+3]=x*255}};e(0,(s,a,o)=>[1,Math.exp(-o*o*4.2)]),e(1,(s,a,o)=>{const l=Fi(s*2.2+3,a*2.2+1,5);return[.5+.5*Fi(s*3+9,a*3,8),di(1,.15,o+(l-.5)*.95)*.95]}),e(2,(s,a,o)=>{const l=Fi(s*2.6+11,a*2.6+4,13);return[.5+.5*Fi(s*2.5+2,a*2.5+7,21),di(1,.1,o+(l-.5)*1.15)*.9]}),e(3,(s,a,o)=>{const l=Math.hypot(s*.55,a*1.4),c=Fi(s*3+5,a*1.5+2,17);return[.6+.4*c,di(1,.1,l+(c-.5)*.7)*.85]}),e(4,(s,a,o)=>[1,Math.exp(-o*o*34)+.22*Math.exp(-o*o*4)]),e(5,(s,a,o)=>{const l=Math.atan2(a,s);let c=0;for(let h=0;h<5;h++){const d=h*1.2566+.3;let u=Math.abs((l-d+Math.PI*3)%(Math.PI*2)-Math.PI);u=Math.min(u,Math.abs(Math.PI-u)),c+=Math.exp(-u*u*60)*Math.exp(-o*2.4)}return[1,Math.exp(-o*o*9)*.95+c*.75]}),e(6,(s,a,o)=>{const l=Fi(s*3,a*3,33);return[1,Math.exp(-Math.pow((o-.72-(l-.5)*.08)*7.5,2))*.9]}),e(7,(s,a,o)=>[.85+.15*a,di(1,.55,o)]),e(8,(s,a,o)=>{const l=Fi(s*2+20,a*2+20,41,3);return[(.35+.65*Fi(s*6,a*6,43,2))*(.55+.45*(s*.5+.5)),di(.85,.7,o+(l-.5)*.9)]});const i=s=>(a,o,l)=>{const c=o*.5+.5,h=(1-c)*.85*(.55+.45*Math.sin(c*3.1)),d=Fi(a*2.3+s,c*3.2,s+3,4),u=Math.abs(a)/Math.max(h,.05)+(d-.5)*.9;return[1-c*.35,di(1,.15,u)*di(1,.75,c)*di(0,.15,c)*.95]};e(9,i(3)),e(10,i(17)),e(11,(s,a,o)=>{const l=Fi(s*2.4+6,a*2.4+8,51);return[.75+.25*l,di(1,0,o+(l-.5)*.8)*.75]}),e(12,(s,a,o)=>[1,Math.exp(-a*a*60)*di(1,0,Math.abs(s))*(.4+.6*di(-1,.7,s))]),e(13,(s,a,o)=>[1,Math.exp(-o*o*2.4)*.8]),e(14,(s,a,o)=>[.7+.3*s,Math.abs(s)*.9+Math.abs(a*.5-.3+s*.3)<.8?.95:0]),e(15,(s,a,o)=>{const l=Fi(s*1.8+30,a*1.8+30,61,5);return[.6+.4*l,di(1,0,o+(l-.5)*1.2)*.7]});const n=new Xe(t,r,r,Le,Oe);return n.magFilter=fe,n.minFilter=xi,n.generateMipmaps=!0,n.anisotropy=4,n.wrapS=n.wrapT=qe,n.needsUpdate=!0,Vc=n,n}const nm=`
precision highp float;
attribute vec4 aP0; attribute vec4 aV0; attribute vec4 aA; attribute vec4 aC0; attribute vec4 aC1; attribute vec4 aM;
uniform float uTime; uniform vec3 uGravity; uniform vec2 uWind; uniform sampler2D uHeight; uniform float uHalf; uniform vec2 uRes;
uniform vec3 uAmbient; uniform vec4 uL[3]; uniform vec3 uLC[3];
varying vec2 vUv; varying vec4 vCol; varying float vCell;
#include <fog_pars_vertex>
`,nb=nm+`
void main(){
  float age = uTime - aP0.w;
  float life = aV0.w;
  float t = age / life;
  if (age < 0.0 || t >= 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vUv = vec2(0.0); vCol = vec4(0.0); vCell = 0.0; return; }
  float drag = aM.x;
  float k = drag > 0.001 ? (1.0 - exp(-drag * age)) / drag : age;
  vec3 pos = aP0.xyz + aV0.xyz * k + 0.5 * uGravity * aM.y * age * age;
  pos.xz += uWind * (aM.z * age * age * 0.5);                       // wind pushes light particles (aM.z = wind response)
  float size = mix(aA.x, aA.y, 1.0 - (1.0 - t) * (1.0 - t));
  #ifdef GROUND
  float gh = texture2D(uHeight, (pos.xz + uHalf) / (2.0 * uHalf)).r;
  pos.y = max(pos.y, gh + size * 0.32 + 0.01);
  #endif
  float rot = aA.z + aA.w * age;
  float cs = cos(rot), sn = sin(rot);
  vec2 c = position.xy;
  vec2 rc = vec2(c.x * cs - c.y * sn, c.x * sn + c.y * cs);
  vec4 mvPosition = viewMatrix * vec4(pos, 1.0);
  mvPosition.xy += rc * size;
  gl_Position = projectionMatrix * mvPosition;
  vUv = c * 0.5 + 0.5;
  vec4 col = mix(aC0, aC1, t);
  col.a *= smoothstep(0.0, 0.04, t);
  #ifdef LIT
  vec3 lit = uAmbient;
  for (int i = 0; i < 3; i++) { vec3 d = uL[i].xyz - pos; lit += uLC[i] * (uL[i].w / (1.0 + dot(d, d) * 0.22)); }
  col.rgb *= min(lit, vec3(2.4));
  #endif
  vCol = col; vCell = aM.w;
  #include <fog_vertex>
}`,sb=nm+`
void main(){
  float age = uTime - aP0.w;
  float life = aV0.w;
  float t = age / life;
  if (age < 0.0 || t >= 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vUv = vec2(0.0); vCol = vec4(0.0); vCell = 0.0; return; }
  float drag = aM.x;
  float dr = exp(-drag * age);
  float k = drag > 0.001 ? (1.0 - dr) / drag : age;
  vec3 pos = aP0.xyz + aV0.xyz * k + 0.5 * uGravity * aM.y * age * age;
  vec3 vel = aV0.xyz * dr + uGravity * aM.y * age;
  float gh = texture2D(uHeight, (pos.xz + uHalf) / (2.0 * uHalf)).r;
  float grounded = step(pos.y, gh + 0.02);
  pos.y = max(pos.y, gh + 0.02);
  vel *= 1.0 - grounded;
  float width = mix(aA.x, aA.y, t);
  vec3 tail = pos - vel * aA.w - normalize(aV0.xyz + vec3(1e-4)) * width * 0.6;
  vec4 mvH = viewMatrix * vec4(pos, 1.0), mvT = viewMatrix * vec4(tail, 1.0);
  vec4 ch = projectionMatrix * mvH, ct = projectionMatrix * mvT;
  float ok = step(0.05, -mvH.z) * step(0.05, -mvT.z);
  vec2 nh = ch.xy / ch.w, nt = ct.xy / ct.w;
  vec2 dpx = (nt - nh) * uRes * 0.5; float dl = max(length(dpx), 1e-3); vec2 dir = dpx / dl; vec2 perp = vec2(-dir.y, dir.x);
  float pxPerM = uRes.y * 0.5 * projectionMatrix[1][1] / max(-mvH.z, 0.05);
  float wpx = max(width * pxPerM, 0.9);
  vec2 sel = vec2(position.x, position.y * 0.5 + 0.5);            // x = side, y: 0 = head, 1 = tail
  vec2 ndc = mix(nh, nt, sel.y) + perp * sel.x * wpx / (uRes * 0.5);
  float w = mix(ch.w, ct.w, sel.y);
  gl_Position = vec4(ndc * w, mix(ch.z, ct.z, sel.y), w);
  vUv = vec2(1.0 - sel.y, sel.x * 0.5 + 0.5);
  vec4 col = mix(aC0, aC1, t); col.a *= ok;
  col.rgb *= step(0.5, 1.0 - grounded * 0.0);
  vCol = col; vCell = aM.w;
  vec4 mvPosition = mvH;
  #include <fog_vertex>
}`,rb=`
precision highp float;
uniform sampler2D uAtlas;
varying vec2 vUv; varying vec4 vCol; varying float vCell;
#include <fog_pars_fragment>
void main(){
  if (vCol.a < 0.003) discard;
  vec2 cell = vec2(mod(vCell, 4.0), floor(vCell / 4.0));
  vec4 tex = texture2D(uAtlas, (cell + clamp(vUv, 0.0, 1.0)) * 0.25);
  float a = tex.a * vCol.a;
  if (a < 0.003) discard;
  vec3 c = vCol.rgb * tex.rgb;
  #ifdef ADDITIVE
  #ifdef USE_FOG
  float fogK = 1.0 - (1.0 - exp(-foglineTau(cameraPosition, vFogWPos, fogNear, fogFar))) * 0.85;
  c *= fogK;
  #endif
  gl_FragColor = vec4(c * a, 1.0);
  #else
  gl_FragColor = vec4(c, a);
  #include <fog_fragment>
  #endif
}`;function ab(){const r=new da;return r.setAttribute("position",new Et([-1,-1,0,1,-1,0,-1,1,0,1,1,0],3)),r.setIndex([0,1,2,2,1,3]),r}class Ar{constructor(t,{max:e=2e3,additive:i=!1,lit:n=!1,stretch:s=!1,ground:a=!0,renderOrder:o=30}={}){this.max=e,this.cursor=0,this.dirty=!1;const l=this.geometry=ab(),c=f=>{const p=new mi(new Float32Array(e*4),4);return p.setUsage(Ch),l.setAttribute(f,p),p.array};this.P0=c("aP0"),this.V0=c("aV0"),this.A=c("aA"),this.C0=c("aC0"),this.C1=c("aC1"),this.M=c("aM");for(let f=0;f<e;f++)this.P0[f*4+3]=-1e6,this.V0[f*4+3]=1;l.instanceCount=e;const h={};i&&(h.ADDITIVE=1),n&&(h.LIT=1),a&&(h.GROUND=1);const d=ua.merge([ft.fog,{uGravity:{value:new C(0,-9.8,0)},uAmbient:{value:new ct(.3,.32,.35)},uHalf:{value:100}}]);Object.assign(d,{uTime:Be.time,uAtlas:{value:ib()},uHeight:t.heightU,uWind:t.windU,uRes:t.resU,uL:t.lightPosU,uLC:t.lightColU}),d.uAmbient=t.ambientU;const u=this.material=new Ue({vertexShader:s?sb:nb,fragmentShader:rb,uniforms:d,defines:h,transparent:!0,depthWrite:!1,depthTest:!0,side:ei,fog:!0});i&&(u.blending=rl,u.blendEquation=ln,u.blendSrc=es,u.blendDst=es,u.blendSrcAlpha=hh,u.blendDstAlpha=es),this.mesh=new ve(l,u),this.mesh.frustumCulled=!1,this.mesh.renderOrder=o,this.sys=t}spawn(t,e,i,n,s,a,o,l,c,h,d,u,f,p,x,g,m,v,M,_,S,w,E=0){const y=this.cursor;this.cursor=(y+1)%this.max;const A=y*4,R=Be.time.value;this.P0[A]=t,this.P0[A+1]=e,this.P0[A+2]=i,this.P0[A+3]=R,this.V0[A]=n,this.V0[A+1]=s,this.V0[A+2]=a,this.V0[A+3]=o,this.A[A]=l,this.A[A+1]=c,this.A[A+2]=h,this.A[A+3]=d,this.C0[A]=u,this.C0[A+1]=f,this.C0[A+2]=p,this.C0[A+3]=x,this.C1[A]=g,this.C1[A+1]=m,this.C1[A+2]=v,this.C1[A+3]=M,this.M[A]=_,this.M[A+1]=S,this.M[A+2]=E,this.M[A+3]=w,this.dirty=!0}flush(){if(!this.dirty)return;const t=this.geometry.attributes;t.aP0.needsUpdate=t.aV0.needsUpdate=t.aA.needsUpdate=t.aC0.needsUpdate=t.aC1.needsUpdate=t.aM.needsUpdate=!0,this.dirty=!1}clear(){for(let t=0;t<this.max;t++)this.P0[t*4+3]=-1e6;this.dirty=!0}}class ob{constructor(t,e,i={}){this.scene=t,this.terrain=e,this.heightU={value:e.heightTex},this.windU={value:new Q(1,.3)},this.resU={value:new Q(1920,1080)},this.ambientU={value:new ct(.3,.32,.35)},this.lightPosU={value:[new se(0,-999,0,0),new se(0,-999,0,0),new se(0,-999,0,0)]},this.lightColU={value:[new ct(1,.7,.4),new ct(1,.7,.4),new ct(1,.7,.4)]};const n=i.scale??1;this.smoke=new Ar(this,{max:Math.floor(2600*n),lit:!0,renderOrder:31}),this.debris=new Ar(this,{max:Math.floor(1600*n),lit:!0,renderOrder:32}),this.glow=new Ar(this,{max:Math.floor(1800*n),additive:!0,renderOrder:34}),this.sparks=new Ar(this,{max:Math.floor(1600*n),additive:!0,stretch:!0,renderOrder:35}),this.drops=new Ar(this,{max:Math.floor(1400*n),lit:!0,stretch:!0,renderOrder:33}),this.layers=[this.smoke,this.debris,this.glow,this.sparks,this.drops];for(const s of this.layers)s.material.uniforms.uHalf.value=e.half,t.add(s.mesh)}setResolution(t,e){this.resU.value.set(t,e)}setLights(t){for(let e=0;e<3;e++){const i=t[e],n=this.lightPosU.value[e];i?(n.set(i.x,i.y,i.z,i.i),this.lightColU.value[e].set(i.c)):n.set(0,-999,0,0)}}update(){for(const t of this.layers)t.flush()}dispose(){for(const t of this.layers)t.geometry.dispose(),t.material.dispose(),this.scene.remove(t.mesh)}}const si={holeDirt:0,holeConcrete:1,holeMetal:2,holeWood:3,bloodA:4,bloodB:5,bloodC:6,pool:7,scorchA:8,scorchB:9,mud:10,holeSand:11,crater:12,bloodD:14,holeSoft:15},$n=128,Te=(r,t,e)=>{const i=Math.max(0,Math.min(1,(e-r)/(t-r)));return i*i*(3-2*i)};function Mi(r,t,e,i=4){let n=.5,s=0,a=0,o=1;for(let l=0;l<i;l++)s+=n*ru(r*o,t*o,e+l*7),a+=n,n*=.5,o*=2;return s/a}let Gc=null;function lb(){if(Gc)return Gc;const r=$n*4,t=new Uint8Array(r*r*4),e=(s,a)=>{const o=s%4*$n,l=Math.floor(s/4)*$n;for(let c=0;c<$n;c++)for(let h=0;h<$n;h++){const d=(h+.5)/$n*2-1,u=(c+.5)/$n*2-1,f=Math.hypot(d,u);let[p,x]=a(d,u,f);x=Math.max(0,Math.min(1,x))*(1-Te(.88,1,Math.max(Math.abs(d),Math.abs(u))));const g=((l+c)*r+o+h)*4;t[g]=t[g+1]=t[g+2]=Math.max(0,Math.min(255,p*255)),t[g+3]=x*255}},i=(s,a,o,l)=>(c,h,d)=>{const u=Mi(c*a+s,h*a+s,s,4);return[.6+.4*u,Te(o+l,o-l,d+(u-.5)*.9)]};e(0,(s,a,o)=>{const l=Mi(s*3+2,a*3,3,3),c=Te(.28,.16,o+(l-.5)*.12),h=Te(.75,.3,o+(l-.5)*.4)*.5;return[c>.5?.02:.25+.3*l,Math.max(c,h*.7)]}),e(1,(s,a,o)=>{const l=Math.atan2(a,s),c=Mi(s*4+5,a*4,7,3),h=Te(.95,.35,o*(1+.5*Math.abs(Math.sin(l*5+c*3)))),d=Te(.2,.12,o);return[d>.4?.01:.62+.3*c,Math.max(d,h*.55)]}),e(2,(s,a,o)=>{const l=Te(.2,.11,o),c=Te(.36,.2,o)*(1-l),h=Mi(s*6,a*6,9,2);return[l>.5?0:.55+.45*h,Math.max(l,c*.85)*.95]}),e(3,(s,a,o)=>{const l=Math.atan2(a,s),c=Mi(s*5+1,a*5+3,11,3),h=Te(.22,.13,o+(c-.5)*.08),d=Te(.9,.3,o*(1+.6*Math.abs(Math.sin(l*7+c*4))));return[h>.5?.02:.5+.4*c,Math.max(h,d*.5)]}),e(4,i(21,2.4,.55,.22)),e(5,(s,a,o)=>{const l=Mi(s*2+40,a*1.2,15,4),c=Math.hypot(s*1.3,a*.55),h=Te(.12,0,Math.abs(s*6%1-.5)-.32+(a*.5+.5)*.2)*Te(-.1,.9,-a)*.6;return[.5+.5*l,Math.max(Te(.85,.35,c+(l-.5)*.7),h)]}),e(6,(s,a,o)=>{let l=0;for(let c=0;c<26;c++){const h=ti(c,3,5)*1.8-.9,d=ti(c,7,5)*1.8-.9,u=.03+ti(c,9,5)*.08*(1-Math.hypot(h,d)*.7);l=Math.max(l,Te(u,u*.6,Math.hypot(s-h,a-d)))}return[.7,l*.95]}),e(7,(s,a,o)=>{const l=Mi(s*2.5+8,a*2.5+3,25,4);return[.55+.45*l,Te(1,.55,o+(l-.5)*.5)]}),e(8,(s,a,o)=>{const l=Mi(s*2.2+3,a*2.2+3,31,5);return[.05+.15*l,Te(1,.1,o+(l-.5)*.9)*.92]}),e(9,(s,a,o)=>{const l=Mi(s*3+13,a*3+1,35,5),c=Math.atan2(a,s),h=.75+.25*Math.sin(c*9+l*6);return[.06+.12*l,Te(1,.05,o*(1.1-.4*h)+(l-.5)*.7)*.9]}),e(10,(s,a,o)=>{let l=0;for(let h=0;h<34;h++){const d=ti(h,1,9)*6.283,u=Math.pow(ti(h,2,9),.6)*.86,f=Math.cos(d)*u,p=Math.sin(d)*u,x=.03+ti(h,3,9)*.1*(1-u*.6);l=Math.max(l,Te(x,x*.55,Math.hypot(s-f,a-p)))}return[.5+.5*Mi(s*3,a*3,41,3),Math.max(l,Te(.35,.1,o)*.8)]}),e(11,(s,a,o)=>{const l=Mi(s*3+6,a*3+2,45,3);return[.4+.5*l,Te(.7,.2,o+(l-.5)*.4)*.75]}),e(12,(s,a,o)=>{const l=Mi(s*2.6+9,a*2.6+9,51,5),c=Math.exp(-Math.pow((o-.62)*4.5,2))*.55;return[.08+.2*l,Math.max(Te(1,.15,o+(l-.5)*.6)*.75,c)]}),e(13,(s,a,o)=>{const l=Mi(s*2+30,a*2+30,55,4);return[.2,Te(1,.2,o+(l-.5)*.8)*.55]}),e(14,(s,a,o)=>{let l=0;for(let c=0;c<10;c++){const h=ti(c,4,6)*6.283,d=.3+ti(c,5,6)*.6,u=Math.cos(h),f=Math.sin(h),p=Math.max(0,Math.min(d,s*u+a*f)),x=Math.hypot(s-u*p,a-f*p);l=Math.max(l,Te(.09*(1-p/d*.7),.03,x))}return[.6,Math.max(l,Te(.28,.12,o))]}),e(15,(s,a,o)=>[.3,Te(1,0,o)*.5]);const n=new Xe(t,r,r,Le,Oe);return n.magFilter=fe,n.minFilter=xi,n.generateMipmaps=!0,n.anisotropy=8,n.needsUpdate=!0,Gc=n,n}const cb=`
precision highp float;
attribute vec4 aPos;    // xyz, size (half extent)
attribute vec4 aNrm;    // xyz normal, rotation
attribute vec4 aInfo;   // cell, alpha, spawnTime, ground(1)/wall(0)
attribute vec4 aTint;   // rgb, lifetime
uniform float uTime; uniform sampler2D uHeight; uniform float uHalf; uniform vec3 uAmbient; uniform vec4 uL[3]; uniform vec3 uLC[3];
varying vec2 vUv; varying vec4 vCol; varying float vCell;
#include <fog_pars_vertex>
void main(){
  vec3 n = normalize(aNrm.xyz);
  vec3 up = abs(n.y) > 0.98 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
  vec3 t = normalize(cross(up, n)); vec3 b = cross(n, t);
  float cs = cos(aNrm.w), sn = sin(aNrm.w);
  vec3 t2 = t * cs + b * sn, b2 = -t * sn + b * cs;
  vec3 wp = aPos.xyz + (t2 * position.x + b2 * position.y) * aPos.w;
  if (aInfo.w > 0.5) {
    float gh = texture2D(uHeight, (wp.xz + uHalf) / (2.0 * uHalf)).r;
    wp.y = gh + 0.014;
  } else wp += n * 0.012;
  vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vUv = position.xy * 0.5 + 0.5; vCell = aInfo.x;
  float age = uTime - aInfo.z;
  float fade = 1.0 - smoothstep(aTint.w * 0.75, aTint.w, age);
  vec3 lit = uAmbient;
  for (int i = 0; i < 3; i++) { vec3 d = uL[i].xyz - aPos.xyz; lit += uLC[i] * (uL[i].w / (1.0 + dot(d, d) * 0.22)); }
  vCol = vec4(aTint.rgb * lit, aInfo.y * fade * step(0.0, age));
  #include <fog_vertex>
}`,hb=`
precision highp float;
uniform sampler2D uAtlas;
varying vec2 vUv; varying vec4 vCol; varying float vCell;
#include <fog_pars_fragment>
void main(){
  if (vCol.a < 0.004) discard;
  vec2 cell = vec2(mod(vCell, 4.0), floor(vCell / 4.0));
  vec4 tex = texture2D(uAtlas, (cell + clamp(vUv, 0.0, 1.0)) * 0.25);
  float a = tex.a * vCol.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vCol.rgb * (0.35 + 0.9 * tex.r), a);
  #include <fog_fragment>
}`;class ub{constructor(t,e,i,n=700){this.max=n,this.cursor=0,this.scene=t;const s=new da;s.setAttribute("position",new Et([-1,-1,0,1,-1,0,-1,1,0,1,1,0],3)),s.setIndex([0,1,2,2,1,3]);const a=c=>{const h=new mi(new Float32Array(n*4),4);return h.setUsage(Ch),s.setAttribute(c,h),h.array};this.pos=a("aPos"),this.nrm=a("aNrm"),this.info=a("aInfo"),this.tint=a("aTint");for(let c=0;c<n;c++)this.info[c*4+2]=1e6,this.tint[c*4+3]=1;s.instanceCount=n;const o=ua.merge([ft.fog,{uHalf:{value:e.half}}]);Object.assign(o,{uTime:Be.time,uAtlas:{value:lb()},uHeight:i.heightU,uAmbient:i.ambientU,uL:i.lightPosU,uLC:i.lightColU});const l=new Ue({vertexShader:cb,fragmentShader:hb,uniforms:o,transparent:!0,depthWrite:!1,side:ei,fog:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.mesh=new ve(s,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,t.add(this.mesh),this.geometry=s,this.dirty=!1}add(t,e,i,n,s,a,o,l,c=0,h=1,d=1,u=1,f=1,p=120,x=!1){const g=this.cursor;this.cursor=(g+1)%this.max;const m=g*4;this.pos[m]=e,this.pos[m+1]=i,this.pos[m+2]=n,this.pos[m+3]=l,this.nrm[m]=s,this.nrm[m+1]=a,this.nrm[m+2]=o,this.nrm[m+3]=c,this.info[m]=t,this.info[m+1]=h,this.info[m+2]=Be.time.value,this.info[m+3]=x?1:0,this.tint[m]=d,this.tint[m+1]=u,this.tint[m+2]=f,this.tint[m+3]=p,this.dirty=!0}update(){if(!this.dirty)return;const t=this.geometry.attributes;t.aPos.needsUpdate=t.aNrm.needsUpdate=t.aInfo.needsUpdate=t.aTint.needsUpdate=!0,this.dirty=!1}clear(){for(let t=0;t<this.max;t++)this.info[t*4+2]=1e6;this.dirty=!0}}const q=(r,t)=>r+Math.random()*(t-r),ee=()=>Math.random()*2-1,Ot=new C;new ct;class db{constructor(t){this.game=t,t.quality;const e={low:.5,medium:.75,high:1,ultra:1.3}[t.settings.quality]??1;this.scale=e,this.ps=new ob(t.scene,t.terrain,{scale:e}),this.decals=new ub(t.scene,t.terrain,this.ps,Math.floor(700*Math.min(1,e+.2))),this.fires=[],this._lightList=[],this.groundNormal=new C}update(t){const e=this.game,i=this.ps,n=Be.time.value,s=e.scene.fog.color;i.ambientU.value.setRGB(s.r*1.25,s.g*1.25,s.b*1.25),i.windU.value.copy(e.weather.wind).multiplyScalar(.55);const a=e.camera.position;for(const u of this.fires){if(u.dead)continue;const f=u.x-a.x,p=u.z-a.z,x=f*f+p*p;if(u.dist2=x,x>12100)continue;u.acc+=t;const g=x>2025?.09:.045;for(;u.acc>=g;)u.acc-=g,this._flame(u);u.smokeAcc+=t,u.smokeAcc>=(u.big?.1:.16)&&(u.smokeAcc=0,this._fireSmoke(u)),u.emberAcc+=t,u.emberAcc>=.22&&(u.emberAcc=0,this._ember(u))}let o=null,l=null;for(const u of this.fires)u.dead||!u.light||(!o||u.dist2<o.dist2?(l=o,o=u):(!l||u.dist2<l.dist2)&&(l=u));const c=(u,f)=>{const p=e.fxLights[u];p&&(f&&f.dist2<3600?(p.fire=!0,p.life=1e9,p.dur=1e9,p.base=f.light*(.9+.2*Math.sin(n*17+f.x)),p.light.position.set(f.x,f.y+.7*f.size,f.z),p.light.color.setRGB(1,.5,.2),p.light.distance=16+8*f.size):p.fire&&(p.fire=!1,p.life=0,p.light.intensity=0))};c(3,o),c(4,l);const h=this._lightList;h.length=0;const d=(u,f)=>{u.intensity>.5&&h.push({x:u.position.x,y:u.position.y,z:u.position.z,i:Math.min(3.2,u.intensity*f),c:u.color.getHex()})};d(e.muzzleLight,.012);for(const u of e.fxLights)d(u.light,.012);h.sort((u,f)=>f.i-u.i),i.setLights(h),i.update(),this.decals.update()}setResolution(t,e){this.ps.setResolution(t,e)}_smoke(t,e,i,n,s,a,o,l,c,h,d,u,f,p=1.5,x=0,g=ne.smokeA,m=.6){this.ps.smoke.spawn(t,e,i,n,s,a,o,l,c,q(0,6.28),ee()*.6,h,d,u,f,h*.9,d*.9,u*.9,0,p,x,g,m)}_chunk(t,e,i,n,s,a,o,l,c,h,d,u=ne.chunk,f=.25){this.ps.debris.spawn(t,e,i,n,s,a,o,l,l*.8,q(0,6.28),ee()*14,c,h,d,1,c,h,d,0,f,1,u,0)}_spark(t,e,i,n,s,a,o,l,c,h,d,u,f=.8,p=.4){this.ps.sparks.spawn(t,e,i,n,s,a,o,l,l*.4,0,c,h,d,u,1,h*.4,d*.15,u*.05,.4,p,f,ne.streak,0)}_drop(t,e,i,n,s,a,o,l,c,h,d,u=.9,f=1){this.ps.drops.spawn(t,e,i,n,s,a,o,l,l*.8,0,.028,c,h,d,u,c,h,d,.3,.05,f,ne.streak,0)}_glow(t,e,i,n,s,a,o,l,c=ne.halo,h=0,d=0){this.ps.glow.spawn(t,e,i,0,h,0,n,s,s*.5,q(0,6.28),d,a,o,l,1,a*.3,o*.2,l*.1,0,0,0,c,0)}_hemi(t,e,i,n,s){let a=ee(),o=ee(),l=ee();const c=Math.hypot(a,o,l)||1;a/=c,o/=c,l/=c,a+=t*n,o+=e*n,l+=i*n,a*t+o*e+l*i<0&&(a=-a,o=-o,l=-l);const h=Math.hypot(a,o,l)||1;return s.set(a/h,o/h,l/h)}impact(t,e,i,n,s,a,o,l,c,h,d=.6,u=!1){const f=Math.max(.2,d)*this.scale,p=Math.max(1,Math.round(f*1.4));this._hemi(s,a,o,1.2,Ot);const x=l*s+c*a+h*o,g=l-2*x*s,m=c-2*x*a,v=h-2*x*o,M=this.decals,_=.05+d*.05;switch(t){case"mud":case"dirt":case"grass":{for(let S=0;S<p+1;S++)this._hemi(s,a,o,1.6,Ot),this._smoke(e+s*.04,i+a*.04,n+o*.04,Ot.x*q(.5,1.6),Ot.y*q(.6,1.8),Ot.z*q(.5,1.6),q(.7,1.2),.08,q(.35,.6),.2,.155,.11,.5,2.2,-.05,ne.dust);for(let S=0;S<Math.round(6*f)+2;S++){this._hemi(s,a,o,1,Ot);const w=q(2.5,6.5);this._chunk(e,i,n,Ot.x*w+g*.8,Ot.y*w+m*.8,Ot.z*w+v*.8,q(.45,.9),q(.014,.034),.085,.06,.04)}for(let S=0;S<Math.round(4*f)+1;S++){this._hemi(s,a,o,1.6,Ot);const w=q(1.5,4.5);this._drop(e,i,n,Ot.x*w,Ot.y*w,Ot.z*w,q(.4,.8),.011,.07,.05,.035)}M.add(si.holeDirt,e,i,n,s,a,o,_*1.1,q(0,6.28),.9,.5,.42,.35,90,u);break}case"sand":{for(let S=0;S<p+2;S++)this._hemi(s,a,o,1.6,Ot),this._smoke(e,i,n,Ot.x*q(.6,2),Ot.y*q(.6,2),Ot.z*q(.6,2),q(.8,1.4),.1,q(.4,.75),.55,.46,.32,.55,2,-.06,ne.dust);for(let S=0;S<Math.round(9*f)+3;S++){this._hemi(s,a,o,1.2,Ot);const w=q(2,6);this._drop(e,i,n,Ot.x*w+g*.6,Ot.y*w+m*.6,Ot.z*w+v*.6,q(.4,.8),.01,.5,.42,.28,.95)}M.add(si.holeSand,e,i,n,s,a,o,_*1.4,q(0,6.28),.8,.55,.47,.34,90,u);break}case"concrete":case"brick":{for(let S=0;S<p+1;S++)this._hemi(s,a,o,1.5,Ot),this._smoke(e,i,n,Ot.x*q(.4,1.5),Ot.y*q(.4,1.5),Ot.z*q(.4,1.5),q(.9,1.5),.1,q(.45,.8),.46,.46,.44,.5,1.8,-.03,ne.dust);for(let S=0;S<Math.round(6*f)+2;S++){this._hemi(s,a,o,.8,Ot);const w=q(3,8);this._chunk(e,i,n,Ot.x*w+g*.7,Ot.y*w+m*.7,Ot.z*w+v*.7,q(.5,1),q(.012,.03),.42,.42,.4)}for(let S=0;S<Math.round(5*f)+2;S++){this._hemi(s,a,o,.6,Ot);const w=q(4,10);this._spark(e,i,n,Ot.x*w+g,Ot.y*w+m,Ot.z*w+v,q(.12,.3),.01,.022,3.2,1.9,.8)}this._glow(e+s*.03,i+a*.03,n+o*.03,.05,.16,2.8,1.9,1,ne.soft),M.add(si.holeConcrete,e,i,n,s,a,o,_*1.2,q(0,6.28),.95,.8,.8,.78,150,!1);break}case"metal":case"armor":{const S=Math.round(10*f)+4;for(let w=0;w<S;w++){this._hemi(s,a,o,.5,Ot);const E=q(4,14);this._spark(e,i,n,Ot.x*E+g*1.5,Ot.y*E+m*1.5,Ot.z*E+v*1.5,q(.15,.5),.009,.03,4,2.5,1,1)}this._glow(e+s*.03,i+a*.03,n+o*.03,.06,.26,4,2.6,1.2,ne.soft),this._smoke(e,i,n,s*.6,a*.6+.4,o*.6,.6,.05,.3,.42,.44,.48,.3,2.5,-.1,ne.dust),M.add(si.holeMetal,e,i,n,s,a,o,_,q(0,6.28),.95,.85,.85,.9,200,!1);break}case"wood":{for(let S=0;S<Math.round(7*f)+3;S++){this._hemi(s,a,o,.9,Ot);const w=q(2,6);this.ps.debris.spawn(e,i,n,Ot.x*w+g*.5,Ot.y*w+m*.5,Ot.z*w+v*.5,q(.4,.8),q(.014,.04),.01,q(0,6.28),ee()*22,.33,.22,.12,1,.33,.22,.12,0,.3,1,ne.shard,0)}for(let S=0;S<2;S++)this._hemi(s,a,o,1.5,Ot),this._smoke(e,i,n,Ot.x*.8,Ot.y*.8,Ot.z*.8,q(.6,1),.06,.4,.4,.31,.2,.35,2,-.03,ne.dust);M.add(si.holeWood,e,i,n,s,a,o,_*1.1,q(0,6.28),.95,.7,.7,.7,150,!1);break}case"water":{for(let S=0;S<Math.round(9*f)+4;S++){const w=q(2,6.5),E=q(0,6.28),y=q(.2,.8);this._drop(e,i+.02,n,Math.cos(E)*w*y,w*q(.6,1.2),Math.sin(E)*w*y,q(.45,.9),.012,.55,.6,.65,.85,1.4)}this._smoke(e,i+.05,n,0,.4,0,.7,.1,.5,.5,.55,.6,.28,2,-.02,ne.dust),this._glow(e,i+.05,n,.07,.14,.9,1,1.1,ne.soft);break}case"glass":{for(let S=0;S<8;S++){this._hemi(s,a,o,.5,Ot);const w=q(2,6);this.ps.debris.spawn(e,i,n,Ot.x*w,Ot.y*w,Ot.z*w,q(.4,.9),q(.012,.03),.01,q(0,6.28),ee()*25,.7,.8,.85,1,.7,.8,.85,0,.3,1,ne.shard,0)}break}case"flesh":this.bloodHit(e,i,n,s,a,o,l,c,h,d);return;default:this._smoke(e,i,n,s*.8,a*.8,o*.8,q(.6,1),.06,.35,.35,.34,.32,.3,2,-.02,ne.dust),M.add(si.holeSoft,e,i,n,s,a,o,_,q(0,6.28),.6,.2,.2,.2,80,!1)}}bloodHit(t,e,i,n,s,a,o,l,c,h=.6,d=!1){const u=this.scale,f=(.6+h)*u*(d?1.4:1);for(let p=0;p<Math.round(3*f)+1;p++)this._hemi(n,s,a,.8,Ot),this._smoke(t,e,i,Ot.x*q(.3,1.2)+o*q(.5,2),Ot.y*q(.3,1.2)+l*q(.5,2),Ot.z*q(.3,1.2)+c*q(.5,2),q(.45,.8),.05,q(.25,.5),.34,.015,.01,.55,3,.4,ne.smokeB,.2);for(let p=0;p<Math.round(11*f)+3;p++){this._hemi(n,s,a,.5,Ot);const x=q(1.5,6.5);this._drop(t,e,i,Ot.x*x+o*q(1.5,5),Ot.y*x+l*q(1.5,5)+.5,Ot.z*x+c*q(1.5,5),q(.5,1),q(.01,.02),.13,.008,.006,.95,1)}}bloodSplat(t,e,i,n,s,a,o=.5,l=!1){const c=[si.bloodA,si.bloodB,si.bloodC,si.bloodD][Math.random()*4|0];this.decals.add(c,t,e,i,n,s,a,o*q(.7,1.3),q(0,6.28),q(.75,1),.1,.005,.004,240,l)}bloodPool(t,e,i=.9){const n=this.game.terrain;this.decals.add(si.pool,t,n.heightAt(t,e),e,0,1,0,i,q(0,6.28),.85,.08,.004,.003,300,!0)}bloodBurst(t,e,i,n,s,a,o=1){const l=this.scale*o;for(let h=0;h<Math.round(5*l)+2;h++)this._smoke(t,e,i,n*q(.5,3)+ee()*1.2,s*q(.5,3)+ee()*1+.5,a*q(.5,3)+ee()*1.2,q(.6,1.2),.08,q(.4,.9),.32,.012,.008,.5,2.5,.5,ne.smokeB,.2);for(let h=0;h<Math.round(22*l)+4;h++){const d=q(1.5,8);this._drop(t,e,i,n*d*.6+ee()*d*.6,s*d*.6+q(.5,1.4)*d*.6,a*d*.6+ee()*d*.6,q(.6,1.3),q(.012,.028),.14,.008,.006,.95,1)}const c=this.game.terrain;for(let h=0;h<3;h++){const d=t+n*q(.5,2.5)+ee()*.8,u=i+a*q(.5,2.5)+ee()*.8;this.bloodSplat(d,c.heightAt(d,u),u,0,1,0,q(.35,.8)*o,!0)}}muzzle(t,e,i,n,s,a,o=1,l=!1){const c=this.scale;if(l)this._smoke(t+n*.05,e+s*.05,i+a*.05,n*1.5,s*1.5+.2,a*1.5,q(.8,1.4),.02,.16,.5,.5,.52,.1,2.5,-.03,ne.smokeA,.9);else{for(let h=0;h<Math.round(3*c)+1;h++)this._smoke(t+n*.05,e+s*.05,i+a*.05,n*q(1,5)+ee()*.5,s*q(1,5)+q(0,.5),a*q(1,5)+ee()*.5,q(1,1.9),.03*o,q(.18,.34)*o,.55,.55,.56,.2,2.2,-.04,ne.smokeA,.9);for(let h=0;h<Math.round(4*c*o)+1;h++){const d=q(8,22);this._spark(t,e,i,n*d+ee()*3,s*d+ee()*3,a*d+ee()*3,q(.08,.2),.008,.03,4,2.4,.9,.5,.5)}}}enemyMuzzle(t,e,i,n,s,a,o=1,l=!0){return this.ps.glow.spawn(t,e,i,0,0,0,.055,.42*o,.55*o,q(0,6.28),0,5,3.2,1.4,1,1.5,.6,.2,0,0,0,ne.flash,0),this.ps.glow.spawn(t+n*.12,e+s*.12,i+a*.12,0,0,0,.05,.7*o,.9*o,0,0,2.2,1.2,.5,1,.8,.3,.1,0,0,0,ne.halo,0),this.muzzle(t,e,i,n,s,a,.7,!1),l?this.game.allocLight(16754784,90*o,.06,t+n*.4,e+s*.4,i+a*.4,14):null}tracer(t,e,i,n,s,a,o,l,c=0,h=.03,d=5){const u=Math.max(.02,l/o),f=c===0?[5.5,3.6,1.4]:c===1?[6,1.5,.7]:[1.8,4.5,6];this.ps.sparks.spawn(t,e,i,n*o,s*o,a*o,u,h,h*.7,0,d/o,f[0],f[1],f[2],1,f[0]*.5,f[1]*.4,f[2]*.4,.6,0,0,ne.streak,0)}dustPuff(t,e,i,n=1,s=.4){for(let a=0;a<Math.round(3*this.scale)+1;a++)this._smoke(t+ee()*.3,e+.1,i+ee()*.3,ee()*.8,q(.1,.5),ee()*.8,q(.8,1.4),.1*n,q(.4,.8)*n,s*.55,s*.48,s*.38,.35,2,-.02,ne.dust)}footSplash(t,e,i,n,s){const a=Math.round((s?5:3)*this.scale);for(let o=0;o<a;o++){const l=q(0,6.28),c=q(.6,s?2.6:1.6);n?this._drop(t+Math.cos(l)*.1,e+.02,i+Math.sin(l)*.1,Math.cos(l)*c,q(1.2,2.8),Math.sin(l)*c,q(.3,.6),.01,.55,.6,.65,.8,1.2):this._drop(t+Math.cos(l)*.1,e+.02,i+Math.sin(l)*.1,Math.cos(l)*c*.6,q(.8,1.8),Math.sin(l)*c*.6,q(.25,.5),.011,.07,.05,.035,.9,1.2)}s&&this._smoke(t,e+.05,i,0,.2,0,.6,.06,.3,n?.5:.2,n?.55:.16,n?.6:.11,.22,2,-.02,ne.dust)}addFire(t,e,i,n=1,s={}){const a={x:t,y:e,z:i,size:n,acc:Math.random()*.05,smokeAcc:Math.random()*.1,emberAcc:Math.random()*.2,dead:!1,dist2:1e9,big:n>1.4,light:s.light??0,smoke:s.smoke??1,flames:s.flames??1};return this.fires.push(a),a}_flame(t){if(!t.flames)return;const e=t.size;Be.time.value;const i=Math.random()*6.28,n=Math.random()*.22*e,s=Math.random()<.5?ne.flameA:ne.flameB;this.ps.glow.spawn(t.x+Math.cos(i)*n,t.y,t.z+Math.sin(i)*n,ee()*.15,q(.9,1.7)*(.7+.3*e),ee()*.15,q(.45,.8),.16*e,.3*e,ee()*.3,ee()*.6,3.2,1.35,.35,.95,1.1,.22,.04,0,.8,-.2,s,.5)}_fireSmoke(t){if(!t.smoke)return;const e=t.size;this._smoke(t.x+ee()*.2*e,t.y+.5*e,t.z+ee()*.2*e,ee()*.2,q(1.2,2.4),ee()*.2,q(3,5.5)*(.7+.3*e),.25*e,q(1.4,2.6)*e,.055,.055,.06,.55,.5,-.12,Math.random()<.5?ne.smokeA:ne.smokeB,1)}_ember(t){t.size,this.ps.glow.spawn(t.x+ee()*.2,t.y+.3,t.z+ee()*.2,ee()*.5,q(.8,2.2),ee()*.5,q(1.2,2.8),.02,.008,0,0,3,1.1,.25,1,1.5,.3,.05,0,.3,-.05,ne.soft,.7)}addSmoke(t,e,i,n=1.5){return this.addFire(t,e,i,n,{flames:0,smoke:1,light:0})}explosion(t,e,i,n=.5,s={}){const a=this.game,o=.7+n*.9,l=this.scale,c=a.terrain.heightAt(t,i),h=Math.max(0,e-c)<2.5,d=h?Math.max(e,c+.4):e,u=a.camera.position,f=Math.hypot(u.x-t,u.y-d,u.z-i),p=Math.min(1,.3+f/30),x=.5+.5*p;this.ps.glow.spawn(t,d,i,0,0,0,.14,4*o*p,8*o*p,0,0,7*x,4.5*x,2.2*x,1,3*x,1.2*x,.4*x,0,0,0,ne.soft,0);for(let g=0;g<Math.round(9*l)+2;g++){const m=q(0,6.28),v=Math.random()*.9*o;this.ps.glow.spawn(t+Math.cos(m)*v,d+q(0,.8)*o,i+Math.sin(m)*v,Math.cos(m)*q(0,2.5),q(2.5,7),Math.sin(m)*q(0,2.5),q(.45,.8),1.1*o*p,3.2*o*p,q(0,6.28),ee()*.8,6*x,2.6*x,.7*x,1,1.4*x,.28*x,.05*x,0,2.2,-.4,Math.random()<.5?ne.flameA:ne.puff,0)}for(let g=0;g<Math.round(14*l)+4;g++){const m=q(0,6.28),v=Math.random()*1.2*o;this._smoke(t+Math.cos(m)*v,d+q(0,1.2),i+Math.sin(m)*v,Math.cos(m)*q(.5,3.5)*o,q(2.2,6.5),Math.sin(m)*q(.5,3.5)*o,q(2.5,4.8),.9*o,q(2.8,4.8)*o,.08,.08,.085,.85,1.1,-.18,Math.random()<.5?ne.smokeA:ne.smokeB,1)}if(h)for(let g=0;g<Math.round(14*l)+4;g++){const m=g/(14*l+4)*6.28+ee()*.2,v=q(7,15)*o;this._smoke(t,c+.3,i,Math.cos(m)*v,q(.2,1),Math.sin(m)*v,q(1.3,2.2),.6*o,q(1.6,2.8)*o,.3,.25,.19,.5,2.6,0,ne.dust,.3)}for(let g=0;g<Math.round(26*l)+6;g++){const m=q(0,6.28),v=q(.2,1.3),M=q(7,24)*o;this._chunk(t,d,i,Math.cos(m)*Math.cos(v)*M,Math.sin(v)*M,Math.sin(m)*Math.cos(v)*M,q(1.1,2.2),q(.03,.09),.08,.065,.05,ne.chunk,.12)}for(let g=0;g<Math.round(34*l)+6;g++){const m=q(0,6.28),v=q(-.1,1.4),M=q(9,30)*o;this._spark(t,d,i,Math.cos(m)*Math.cos(v)*M,Math.sin(v)*M,Math.sin(m)*Math.cos(v)*M,q(.4,1),.02,.03,4,2,.7,1,.25)}for(let g=0;g<10;g++)this.ps.glow.spawn(t+ee(),d+q(0,2),i+ee(),ee()*2,q(1,4),ee()*2,q(1.5,3),.04,.01,0,0,3,1,.2,1,1,.2,.04,0,.4,-.05,ne.soft,.6);if(a.allocLight(16752720,1400*o*(.35+.65*p),.55+n*.3,t,d+1.5,i,40+n*20),h?a.terrain.normalAt(t,i,this.groundNormal):this.groundNormal.set(0,1,0),h){this.decals.add(si.scorchA,t,c,i,0,1,0,2.6*o,q(0,6.28),.95,1,1,1,400,!0),this.decals.add(si.crater,t,c,i,0,1,0,1.7*o,q(0,6.28),.9,1,1,1,400,!0);for(let g=0;g<7;g++){const m=q(0,6.28),v=q(1.5,6)*o,M=t+Math.cos(m)*v,_=i+Math.sin(m)*v;this.decals.add(si.mud,M,a.terrain.heightAt(M,_),_,0,1,0,q(.5,1.4),q(0,6.28),.85,.45,.36,.28,240,!0)}for(let g=0;g<3;g++){const m=q(0,6.28),v=q(.5,3)*o,M=t+Math.cos(m)*v,_=i+Math.sin(m)*v;this.decals.add(si.scorchB,M,a.terrain.heightAt(M,_),_,0,1,0,q(.9,1.7)*o,q(0,6.28),.8,1,1,1,400,!0)}}}reset(){this.fires.length=0;for(const t of this.ps.layers)t.clear();this.decals.clear()}}const sm=[{group:"GRAPHICS",key:"quality",label:"QUALITY PRESET",type:"select",options:[["low","LOW"],["medium","MEDIUM"],["high","HIGH"],["ultra","ULTRA"]],default:"high",hint:"Shadow, rain, particle and post-processing budgets."},{group:"GRAPHICS",key:"resolutionScale",label:"RESOLUTION SCALE",type:"range",min:.5,max:1.5,step:.05,default:1,fmt:"pct"},{group:"GRAPHICS",key:"adaptive",label:"ADAPTIVE RESOLUTION",type:"toggle",default:!0,hint:"Automatically lowers resolution to hold 60 FPS."},{group:"GRAPHICS",key:"fov",label:"FIELD OF VIEW",type:"range",min:60,max:100,step:1,default:76,fmt:"deg"},{group:"GRAPHICS",key:"showFps",label:"SHOW FPS / STATS",type:"toggle",default:!1},{group:"BODYCAM",key:"bodycam",label:"BODYCAM REALISM",type:"range",min:0,max:1,step:.05,default:1,fmt:"pct",hint:"Master strength of all camera artefacts."},{group:"BODYCAM",key:"fisheye",label:"LENS DISTORTION",type:"range",min:0,max:1.5,step:.05,default:1,fmt:"pct"},{group:"BODYCAM",key:"grain",label:"SENSOR NOISE",type:"range",min:0,max:1.5,step:.05,default:1,fmt:"pct"},{group:"BODYCAM",key:"compression",label:"COMPRESSION ARTEFACTS",type:"range",min:0,max:1.5,step:.05,default:1,fmt:"pct"},{group:"BODYCAM",key:"lensRain",label:"RAIN ON LENS",type:"range",min:0,max:1.5,step:.05,default:1,fmt:"pct"},{group:"BODYCAM",key:"camShake",label:"CAMERA SHAKE / BOB",type:"range",min:0,max:1.5,step:.05,default:1,fmt:"pct"},{group:"BODYCAM",key:"motionBlur",label:"MOTION BLUR",type:"range",min:0,max:1,step:.05,default:.6,fmt:"pct"},{group:"BODYCAM",key:"osd",label:"BODYCAM OVERLAY (REC / TIMESTAMP)",type:"toggle",default:!0},{group:"CONTROLS",key:"sensitivity",label:"MOUSE SENSITIVITY",type:"range",min:.2,max:3,step:.05,default:1,fmt:"x"},{group:"CONTROLS",key:"adsSensitivity",label:"ADS SENSITIVITY",type:"range",min:.2,max:2,step:.05,default:.8,fmt:"x"},{group:"CONTROLS",key:"invertY",label:"INVERT Y AXIS",type:"toggle",default:!1},{group:"CONTROLS",key:"adsMode",label:"AIM MODE",type:"select",options:[["hold","HOLD"],["toggle","TOGGLE"]],default:"hold"},{group:"CONTROLS",key:"crouchMode",label:"CROUCH MODE",type:"select",options:[["toggle","TOGGLE"],["hold","HOLD"]],default:"toggle"},{group:"CONTROLS",key:"sprintMode",label:"SPRINT MODE",type:"select",options:[["hold","HOLD"],["toggle","TOGGLE"]],default:"hold"},{group:"AUDIO",key:"volume",label:"MASTER VOLUME",type:"range",min:0,max:1,step:.05,default:.8,fmt:"pct"},{group:"AUDIO",key:"micRealism",label:"BODYCAM MICROPHONE",type:"range",min:0,max:1,step:.05,default:.7,fmt:"pct",hint:"AGC pumping, wind buffeting, band-limited mic."},{group:"GAMEPLAY",key:"hudMode",label:"HUD",type:"select",options:[["minimal","MINIMAL (REALISM)"],["full","FULL"]],default:"minimal"},{group:"GAMEPLAY",key:"crosshair",label:"CROSSHAIR",type:"select",options:[["dynamic","DYNAMIC"],["dot","DOT"],["off","OFF"]],default:"dynamic"},{group:"GAMEPLAY",key:"difficulty",label:"DIFFICULTY",type:"select",options:[["recruit","RECRUIT"],["veteran","VETERAN"],["nightmare","NIGHTMARE"]],default:"veteran"},{group:"GAMEPLAY",key:"killcam",label:"MARKSMAN KILL SLOW-MO",type:"toggle",default:!0}],lh=Object.fromEntries(sm.map(r=>[r.key,r.default])),rm="fogline.settings.v1";function am(){try{const r=JSON.parse(localStorage.getItem(rm)||"{}");return{...lh,...r}}catch{return{...lh}}}function ch(r){try{localStorage.setItem(rm,JSON.stringify(r))}catch{}}const fb="fogline.loadout.v1",pb="fogline.best.v1",mb=[["W A S D","MOVE"],["SHIFT","SPRINT  /  HOLD BREATH WHEN SCOPED"],["C","CROUCH  /  SLIDE WHILE SPRINTING"],["SPACE","JUMP  /  VAULT LEDGES"],["Q  E","LEAN"],["MOUSE 1","FIRE"],["MOUSE 2","AIM DOWN SIGHTS"],["R","RELOAD  (SHOTGUN: SHELL BY SHELL)"],["1  2  3  4  /  WHEEL","SWITCH WEAPON"],["G","FRAG GRENADE"],["V","MELEE"],["F","WEAPON LIGHT"],["T","LASER"],["B","FIRE MODE"],["TAB","GUNSMITH  (BETWEEN WAVES)"],["ESC","PAUSE"]],gb=Object.freeze(Object.defineProperty({__proto__:null,BEST_KEY:pb,CONTROLS:mb,DEFAULT_SETTINGS:lh,LOADOUT_KEY:fb,SETTINGS_SCHEMA:sm,loadSettings:am,saveSettings:ch},Symbol.toStringTag,{value:"Module"})),xb={setPosition(){},setVolume(){},setPitch(){},setParam(){},stop(){},dead:!0},af=new C,of=new C,lf=new C;class vb{constructor(t){this.game=t,this.audio=null,this.ready=!1,this._promise=null,this._gesture=!1,this.env={rain:.7,wind:.4,enclosure:0,speed:0,sprinting:!1,ads:0,health01:1,stamina01:1,heldBreath:!1,suppression:0,combat:0},this.suppression=0}init(t=()=>{}){return this._promise?this._promise:(this._promise=(async()=>{try{const{GameAudio:e}=await Zi(async()=>{const{GameAudio:a}=await import("./index-Cz0q-cy8.js");return{GameAudio:a}},[],import.meta.url),i=this.game.settings,n=i.quality==="ultra"?"high":i.quality||"high",s=new e({quality:n,bodycam:i.micRealism??.7});await s.init(t),s.setMasterVolume(i.volume??.8),s.resume(),this.audio=s,this.ready=!0}catch(e){console.warn("[sfx] audio init failed:",e),this.ready=!1}})(),this._promise)}armGesture(){if(this._gesture)return;this._gesture=!0;const t=()=>{window.removeEventListener("pointerdown",t,!0),window.removeEventListener("keydown",t,!0),this.init()};window.addEventListener("pointerdown",t,!0),window.addEventListener("keydown",t,!0)}resume(){this.ready&&this.audio.resume()}setMaster(t){this.ready&&this.audio.setMasterVolume(t)}setBodycam(t){this.ready&&this.audio.setBodycam(t)}play(t,e){return this.ready?this.audio.play(t,e):null}gunshot(t,e){return this.ready?this.audio.gunshot(t,e):null}enemyShot(t,e,i){return this.ready?this.audio.enemyShot(t,e,i):null}whiz(t,e,i){return this.ready?this.audio.whiz(t,e,i):null}impact(t,e,i){return this.ready?this.audio.impact(t,e,i):null}step(t,e){return this.ready?this.audio.step(t,e):null}explosion(t,e){return this.ready?this.audio.explosion(t,e):null}blast(t){this.ready&&this.audio.blast(t)}createLoop(t,e){return this.ready?this.audio.createLoop(t,e):xb}update(t,e){if(!this.ready)return;const i=this.game,n=i.camera;af.set(0,0,-1).applyQuaternion(n.quaternion),of.set(0,1,0).applyQuaternion(n.quaternion),lf.copy(i.player.vel),this.audio.setListener(n.position,af,of,lf);const s=Object.assign(this.env,e);try{this.audio.update(t,s)}catch{}}}const oo=(r,t)=>r+Math.random()*(t-r),Gs=new C,cf=new C,hf=new C,_b=new C(0,1,0),uf=new C,yb=new Set(["metal","armor","concrete","brick"]),Mb=new Set(["wood","glass","fabric","rubber"]);class Sb{constructor(t){this.game=t,this.hit={t:0,x:0,y:0,z:0,nx:0,ny:1,nz:0,surface:"mud",thin:!1,collider:null,terrain:!1,inside:!1},this.eh={t:0,x:0,y:0,z:0,nx:0,ny:1,nz:0,enemy:null,part:"",drone:!1},this.result={hits:0,kills:0,head:!1,armor:!1,drone:!1,hitPoint:new C,dist:0},this.shotIndex=0,this._soundBudget=0,this.last={x:0,y:0,z:0,dist:0}}fire(t,e,i,n,s,a={}){const o=this.result;o.hits=0,o.kills=0,o.head=!1,o.armor=!1,o.drone=!1,o.dist=0,Gs.crossVectors(i,_b),Gs.lengthSq()<1e-6&&Gs.set(1,0,0),Gs.normalize(),cf.crossVectors(Gs,i).normalize(),this._soundBudget=t.pellets>1?2:3;const l=t.pellets;for(let c=0;c<l;c++){let h=0,d=0;if(s>0){const f=Math.random()*Math.PI*2,p=s*Math.pow(Math.random(),l>1?.62:.8);h=Math.cos(f)*p,d=Math.sin(f)*p}hf.copy(i).addScaledVector(Gs,h).addScaledVector(cf,d).normalize();const u=a.tracer&&(l===1||c<3);this._trace(t,e,hf,n,u,l>1,a)}return this.shotIndex++,o}_trace(t,e,i,n,s,a,o){const l=this.game,c=l.world,h=l.enemies,d=l.fx,u=this.result;let f=e.x,p=e.y,x=e.z;const g=i.x,m=i.y,v=i.z;let M=600,_=0,S=1,w=t.pen,E=null,y=f+g*M,A=p+m*M,R=x+v*M;const I=this.hit,D=this.eh;let B=!1,L=!1;for(let O=0;O<5&&!L;O++){const G=c.raycast(f,p,x,g,m,v,M,I,E),W=G?I.t:M;if(h?h.raycast(f,p,x,g,m,v,W,D):!1){const X=_+D.t,K=1-(1-t.falloff[2])*Si(t.falloff[0],t.falloff[1],X);let J=1,wt=!1;D.part==="head"?(J=t.headMul,wt=!0):D.part==="arm"?J=t.armMul:D.part==="leg"&&(J=t.legMul);const mt=t.damage*K*J*S,Yt=h.applyBulletHit(D,mt,g,m,v,{weapon:t.id,impulse:t.impulse*(a?.55:1),pellet:a,head:wt,dist:X,power:t.damage/40});if(D.corpse||(u.hits++,Yt.killed&&u.kills++,(Yt.head||wt)&&(u.head=!0),Yt.armor&&(u.armor=!0),Yt.drone&&(u.drone=!0),u.hitPoint.set(D.x,D.y,D.z),u.dist=X),B=!0,y=D.x,A=D.y,R=D.z,w>=.5&&!Yt.drone&&O<3){const kt=D.t+.45;f+=g*kt,p+=m*kt,x+=v*kt,_+=kt,M-=kt,w*=.55,S*=.55,E=null;continue}L=!0;break}if(G){const X=_+I.t,K=I.surface||"dirt",J=I.nx,wt=I.ny,mt=I.nz;y=I.x,A=I.y,R=I.z,B=!0,X>u.dist&&(u.dist=X);const Yt=Math.abs(g*J+m*wt+v*mt),kt=Ge(t.damage/60,.25,1)*(a?.55:1);if(d.impact(K,I.x,I.y,I.z,J,wt,mt,g,m,v,kt,!!I.terrain),this._soundBudget>0&&(this._soundBudget--,l.sfx.impact(K,uf.set(I.x,I.y,I.z),{power:kt,weapon:t.id})),yb.has(K)&&Yt<.3&&!a&&Math.random()<.7){const Z=g*J+m*wt+v*mt,it=g-2*Z*J+oo(-.06,.06),gt=m-2*Z*wt+oo(-.06,.06),Vt=v-2*Z*mt+oo(-.06,.06),At=Math.hypot(it,gt,Vt)||1;d.tracer(I.x,I.y,I.z,it/At,gt/At,Vt/At,260,oo(8,22),0,.02,3),l.sfx.play("ricochet",{pos:uf.set(I.x,I.y,I.z),volume:.8}),L=!0;break}if((I.thin&&w>=.1||w>=.7&&Mb.has(K))&&O<3&&I.collider){E=I.collider;const Z=I.t+.02;f+=g*Z,p+=m*Z,x+=v*Z,_+=Z,M-=Z,S*=.6,w*=.6,d.impact(K,f,p,x,-J,-wt,-mt,g,m,v,kt*.5,!1);continue}L=!0;break}L=!0}s&&this._tracer(t,n,y,A,R,B),this.last.x=y,this.last.y=A,this.last.z=R}_tracer(t,e,i,n,s,a){const o=i-e.x,l=n-e.y,c=s-e.z;let h=Math.hypot(o,l,c);if(h<2.5)return;a||(h=Math.min(h,220));const d=1/h,u=t.tracerEvery;if(u>0&&this.shotIndex%u!==0||u===0&&t.pellets<=1)return;const f=Math.max(320,t.velocity*.9);this.game.fx.tracer(e.x,e.y,e.z,o*d,l*d,c*d,f,h,0,t.pellets>1?.014:.026,t.pellets>1?2.2:5.5)}}const lo={low:{scale:.72,msaa:0,shadowMap:1024,shadows:!0,bloom:5,terrainRes:.7,rain:"low"},medium:{scale:.88,msaa:2,shadowMap:1536,shadows:!0,bloom:5,terrainRes:.55,rain:"medium"},high:{scale:1,msaa:4,shadowMap:2048,shadows:!0,bloom:6,terrainRes:.5,rain:"high"},ultra:{scale:1,msaa:4,shadowMap:4096,shadows:!0,bloom:6,terrainRes:.4,rain:"ultra"}},En=()=>new Promise(r=>setTimeout(r,0));class bb{constructor(t,e){this.canvas=t,this.ui=e,this.settings=am();const i=new URLSearchParams(location.search);this.params=i,i.has("quality")&&(this.settings.quality=i.get("quality")),this.quality=lo[this.settings.quality]||lo.high,this.state="loading",this.time=0,this.realTime=0,this.timeScale=1,this._timeScaleT=0,this.trauma=0,this.shakeSeed=Math.random()*100,this.fps=60,this.frameMs=16,this._fpsAcc=0,this._fpsN=0,this.adaptScale=1,this._adaptT=0,this._slowT=0,this._fastT=0,this.systems=[],this.script=null,this._last=0,this.camBase=new C,this.aimPunch={pitch:0,yaw:0},this.camRoll=0,this.fovBase=76,this.fovNow=76,this.zoom=1,this.listeners={},this.fovPunch=0,this.lookDelta={yaw:0,pitch:0},this.combat=null,this.enemies=null,this.arena=null,this.projectiles=null,this.grenades=null,this.director=null,this.viewmodel=null,this.ballistics=null,this.hudState={},this.stats={kills:0,headshots:0,shots:0,hits:0,score:0,wave:0,longestKill:0,startTime:0}}on(t,e){(this.listeners[t]||=[]).push(e)}emit(t,e,i){const n=this.listeners[t];if(n)for(const s of n)s(e,i)}async init(t=()=>{}){const e=(s,a)=>t(s,a);p1(),e(.02,"INITIALIZING RENDERER");const i=this.canvas,n=this.renderer=new em({canvas:i,antialias:!1,powerPreference:"high-performance",alpha:!1,stencil:!1,depth:!1});n.setClearColor(5002589,1),n.outputColorSpace=ss,n.toneMapping=Ri,n.shadowMap.enabled=!0,n.shadowMap.type=Ys,n.info.autoReset=!1,this.scene=new ra,this.camera=new He(76,16/9,.05,420),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.input=new E1(i),e(.06,"CALIBRATING LENS"),await En(),this.scene.environment=x1(n),this.scene.environmentIntensity=.5,this.fogColor=new ct(.26,.29,.32),this.scene.fog=new sa(this.fogColor.clone(),.048,.17),this._initLights(),e(.12,"SYNC GPS"),await En(),cr(),this.sky=new W1,this.scene.add(this.sky.mesh),this.sky.uniforms.uHorizon.value.copy(this.fogColor).multiplyScalar(1.12),e(.2,"BUILDING TERRAIN"),await En(),this.terrain=new V1({res:this.quality.terrainRes}),this.scene.add(this.terrain.build(n)),this.world=new j1(this.terrain),e(.36,"FOG MACHINE"),await En(),this.weather=new $1(this.scene,this.terrain),this.weather.setQuality(this.quality.rain),this.fx=new db(this),e(.46,"POST PIPELINE"),this.post=new T1(n,{msaa:this.quality.msaa,bloomLevels:this.quality.bloom}),this.resize(),window.addEventListener("resize",()=>this.resize()),this.player=new tb(this.world,this.terrain),this.player.reset(ks.x,ks.z,ks.yaw),this.sfx=new vb(this),this.sfx.armGesture(),this.ballistics=new Sb(this),this._bindPlayerEvents(),this.weather.onThunder=(s,a)=>this.sfx.play("thunder",{volume:Math.min(1,.4+a*.5),delay:0}),e(.55,"ISSUING WEAPONS"),await En(),await this._optional("combat",async()=>{const{PlayerCombat:s}=await Zi(async()=>{const{PlayerCombat:a}=await import("./combat-rCQfGkg9.js");return{PlayerCombat:a}},__vite__mapDeps([0,1,2,3,4]),import.meta.url);this.combat=new s(this),await this.combat.init()}),e(.66,"ENEMY MODELS"),await En(),await this._optional("enemies",async()=>{const{EnemyManager:s}=await Zi(async()=>{const{EnemyManager:c}=await import("./manager-B2Ah0U0L.js");return{EnemyManager:c}},__vite__mapDeps([5,3,4]),import.meta.url);this.enemies=new s(this),await this.enemies.init((c,h)=>e(.66+c*.06,h));const{Projectiles:a}=await Zi(async()=>{const{Projectiles:c}=await import("./projectiles-Bn9qLdaV.js");return{Projectiles:c}},[],import.meta.url);this.projectiles=new a(this);const{Grenades:o}=await Zi(async()=>{const{Grenades:c}=await import("./grenades-DuBBzn7t.js");return{Grenades:c}},__vite__mapDeps([6,2,3]),import.meta.url);this.grenades=new o(this);const{Director:l}=await Zi(async()=>{const{Director:c}=await import("./director-I8LSHlO3.js");return{Director:c}},__vite__mapDeps([7,5,3,4]),import.meta.url);this.director=new l(this)}),e(.74,"BUILDING THE FRONT LINE"),await En(),await this._optional("arena",async()=>{const{Arena:s}=await Zi(async()=>{const{Arena:a}=await import("./arena-CZSwJt_x.js");return{Arena:a}},__vite__mapDeps([8,3]),import.meta.url);this.arena=new s(this),await this.arena.build((a,o)=>e(.74+a*.2,o))});for(const s of this._initHooks||[])await s(this,e);e(.98,"READY"),await En(),this.state="title",this.applySettings(),e(.985,"COMPILING SHADERS");try{await Promise.race([n.compileAsync(this.scene,this.camera),new Promise(s=>setTimeout(s,3e4))])}catch(s){console.warn("compile failed",s)}this.enemies?.afterCompile?.(),this.readyFlag=!0,e(1,"READY")}async _optional(t,e){try{await e()}catch(i){console.error(`[${t}] failed to initialise`,i)}}_bindPlayerEvents(){const t=this.player,e=this,i=()=>{if(e.world.groundY(t.pos.x,t.pos.z,t.pos.y,.6,0)>e.terrain.heightAt(t.pos.x,t.pos.z)+.05)return"concrete";const s=e.terrain.surfaceAt(t.pos.x,t.pos.z);return s==="water"?"puddle":s};t.onStep=(n,s)=>{const a=i();e.sfx.step(a,{run:n,crouch:s,volume:s?.7:1}),(a==="puddle"||a==="mud"&&Math.random()<.5)&&e.fx.footSplash(t.pos.x,t.pos.y,t.pos.z,a==="puddle",n),e.viewmodel?.onStepKick(n),e.enemies?.noise?.(t.pos,n?22:s?4:10)},t.onLand=n=>{e.sfx.play(n>6?"land_hard":"land_soft",{volume:Math.min(1,n/8)}),e.fx.dustPuff(t.pos.x,t.pos.y,t.pos.z,Math.min(1.5,n/6))},t.onJump=()=>{e.viewmodel?.onJumpKick(),e.sfx.play("gear_rattle",{volume:.4})},t.onMantle=()=>e.sfx.play("mantle",{volume:.9}),t.onSlide=()=>e.sfx.play("slide",{volume:.9}),t.onDamage=(n,s,a)=>{const o=s?this._damageAngle(s):0;e.ui?.hud?.damage?.(o,Math.min(1,n/40)),e.sfx.play("hit_grunt",{volume:.9}),e.addTrauma(Math.min(.6,.12+n/80)),e.viewmodel?.flinch(Math.min(1.5,n/25)),e.aimPunch.pitch+=0,e.combat?.punchP&&(e.combat.punchP.v+=(Math.random()-.3)*n*.02)},t.onDeath=n=>e.gameOver(n)}_damageAngle(t){const e=this.player,i=t.x-e.pos.x,n=t.z-e.pos.z,s=-Math.sin(e.yaw),a=-Math.cos(e.yaw),o=Math.cos(e.yaw),l=-Math.sin(e.yaw);return Math.atan2(i*o+n*l,i*s+n*a)}addInitHook(t){(this._initHooks||=[]).push(t)}_initLights(){const t=this.scene;this.hemi=new Jh(9347766,2762274,.62),t.add(this.hemi),this.sun=new jh(16764831,1.25),this.sunDir=new C(-.55,.42,-.72).normalize(),this.sun.castShadow=!0;const e=this.sun.shadow;e.mapSize.set(this.quality.shadowMap,this.quality.shadowMap);const i=38;e.camera.left=-i,e.camera.right=i,e.camera.top=i,e.camera.bottom=-i,e.camera.near=1,e.camera.far=140,e.bias=-4e-4,e.normalBias=.045,e.radius=2.2,t.add(this.sun),t.add(this.sun.target),this.muzzleLight=new el(16757350,0,26,1.7),t.add(this.muzzleLight),this.fxLights=[];for(let n=0;n<5;n++){const s=new el(16752720,0,30,1.6);t.add(s),this.fxLights.push({light:s,life:0,dur:1,base:0,fire:!1})}this.flashlight=new $h(15266047,0,60,.36,.62,1.15),this.flashlight.castShadow=!1,t.add(this.flashlight),t.add(this.flashlight.target),this.lightBaseHemi=this.hemi.intensity,this.lightBaseSun=this.sun.intensity}allocLight(t,e,i,n,s,a,o=30){let l=null;for(const c of this.fxLights){if(c.life<=0){l=c;break}(!l||c.life<l.life)&&(l=c)}return l.light.color.set(t),l.base=e,l.life=i,l.dur=i,l.light.position.set(n,s,a),l.light.distance=o,l}resize(){const t=Math.min(window.devicePixelRatio||1,2),e=this.quality.scale*(this.settings.resolutionScale??1)*this.adaptScale,i=Math.max(2,Math.floor(window.innerWidth)),n=Math.max(2,Math.floor(window.innerHeight));this.renderer.setPixelRatio(Math.max(.35,t*e)),this.renderer.setSize(i,n,!1);const s=this.renderer.domElement.width,a=this.renderer.domElement.height;this.post.resize(s,a),this.weather.setResolution(s,a),this.fx?.setResolution(s,a),this.camera.aspect=i/n,this.camera.updateProjectionMatrix(),this.width=i,this.height=n}applySettings(){const t=this.settings;this.quality=lo[t.quality]||lo.high;const e=this.post.params;e.bodycam=t.bodycam,e.fisheye=t.fisheye,e.grain=t.grain,e.compress=t.compression,this.rainLensSetting=t.lensRain,this.camShakeSetting=t.camShake,e.motionAmt=0,this.post.setMSAA(this.quality.msaa),this.weather.setQuality(this.quality.rain),this.sun.shadow.mapSize.x!==this.quality.shadowMap&&(this.sun.shadow.mapSize.set(this.quality.shadowMap,this.quality.shadowMap),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null),this.fovBase=t.fov,this.resize(),this.emit("settings",t)}setSetting(t,e){this.settings[t]=e,ch(this.settings),t==="volume"||t==="micRealism"?this.emit("settings",this.settings):this.applySettings()}start(){this._last=performance.now();const t=e=>{requestAnimationFrame(t),this.frame(e)};requestAnimationFrame(t)}frame(t){let e=(t-this._last)/1e3;this._last=t,e>0||(e=1/60),e=Math.min(e,.1),this._fpsAcc+=e,this._fpsN++,this._fpsAcc>=.5&&(this.fps=this._fpsN/this._fpsAcc,this.frameMs=1e3*this._fpsAcc/this._fpsN,this._fpsAcc=0,this._fpsN=0,this._adaptTick()),this._timeScaleT>0&&(this._timeScaleT-=e,this._timeScaleT<=0&&(this.timeScale=1));const i=this.state==="paused"?0:Math.min(e,.05)*this.timeScale;this.realTime+=e,this.update(i,e),this.render(i,e),this.input.endFrame()}step(t,e=1){for(let i=0;i<e;i++)this.update(t,t),this.render(t,t),this.input.endFrame()}slowmo(t,e){this.timeScale=t,this._timeScaleT=e}_adaptTick(){!this.settings.adaptive||this.state!=="playing"||(this.frameMs>19.5?(this._slowT++,this._fastT=0):this.frameMs<13.2?(this._fastT++,this._slowT=0):(this._slowT=0,this._fastT=0),this._slowT>=3&&this.adaptScale>.55?(this.adaptScale=Math.max(.55,this.adaptScale*.9),this._slowT=0,this.resize()):this._fastT>=8&&this.adaptScale<1&&(this.adaptScale=Math.min(1,this.adaptScale*1.06),this._fastT=0,this.resize()))}update(t,e){this.time+=t,Be.time.value=this.time;const i=this.state,n=this.combat;i==="playing"?this._updatePlaying(t,e):i==="title"||i==="loading"?this._updateAttract(t):i==="paused"||(i==="gunsmith"?this._updatePlaying(t,e,!0):i==="gameover"&&this._updateGameOver(t)),n&&n.updatePre(t),this.updateCamera(t),n&&n.updatePost(t,i!=="playing"),i==="playing"?(this.enemies?.update(t),this.projectiles?.update(t),this.grenades?.update(t),this.director?.update(t)):i==="gameover"&&(this.enemies?.update(t*.5),this.projectiles?.update(t*.5));for(const s of this.systems)s.update(t,this);this._updateEnvironment(t),this._updateHud(t)}_controls(){const t=this.input;this.settings;const e=this.script;if(e)return e.mx=e.mx??0,e.my=e.my??0,e.lean=e.lean??0,e.dx=e.dx??0,e.dy=e.dy??0,e.wheel=e.wheel??0,e.slot=e.slot??-1,e;const i=this._ctl||(this._ctl={});return i.mx=(t.down("KeyD")?1:0)-(t.down("KeyA")?1:0),i.my=(t.down("KeyW")?1:0)-(t.down("KeyS")?1:0),i.sprint=t.down("ShiftLeft")||t.down("ShiftRight"),i.crouchPress=t.pressed("KeyC")||t.pressed("ControlLeft"),i.jump=t.pressed("Space"),i.lean=(t.down("KeyE")?1:0)-(t.down("KeyQ")?1:0),i.fire=t.mouseDown(0),i.firePress=t.mousePressed(0),i.adsHeld=t.mouseDown(2),i.adsPress=t.mousePressed(2),i.reload=t.pressed("KeyR"),i.grenade=t.pressed("KeyG"),i.melee=t.pressed("KeyV"),i.light=t.pressed("KeyF"),i.laser=t.pressed("KeyT"),i.firemode=t.pressed("KeyB"),i.slot=t.pressed("Digit1")?0:t.pressed("Digit2")?1:t.pressed("Digit3")?2:t.pressed("Digit4")?3:-1,i.wheel=t.wheel,i.holdBreath=t.down("ShiftLeft"),i.dx=t.dx,i.dy=t.dy,i}_updatePlaying(t,e,i=!1){const n=this.player,s=this._controls(),a=.0018*this.settings.sensitivity,o=this.viewmodel?this.viewmodel.ads:0,l=Math.tan(this.fovNow*Os*.5)/Math.tan(this.fovBase*Os*.5),c=Oi(1,this.settings.adsSensitivity*l,Si(0,.7,o)),h=n.yaw,d=n.pitch;if(!i&&!n.dead&&(n.yaw-=s.dx*a*c,n.pitch=Ge(n.pitch-s.dy*a*c*(this.settings.invertY?-1:1),-1.5,1.5)),this.lookDelta.yaw=n.yaw-h,this.lookDelta.pitch=n.pitch-d,Tb(this.script)&&(n.yaw=this.script.yaw??n.yaw,n.pitch=this.script.pitch??n.pitch),this.ctl=s,!i){const u=this._pctl||(this._pctl={});u.mx=n.dead?0:s.mx,u.my=n.dead?0:s.my,u.sprint=s.sprint,u.crouchPress=s.crouchPress,u.crouchHold=null,u.jump=s.jump,u.lean=s.lean,u.sprint=s.sprint&&!s.fire&&!(this.viewmodel&&this.viewmodel.reloading&&!1),u.ads=o,u.speedMul=this.viewmodel?this.viewmodel.moveMul:1,u.holdBreath=s.holdBreath,u.scoped=this.viewmodel?this.viewmodel.scoped:!1,n.update(t,u)}}_updateAttract(t){const e=this.time*.05,i=this.player,n=9+Math.sin(e*.7)*3;i.pos.set(Math.sin(e)*n,0,4+Math.cos(e*.8)*6),i.pos.y=this.terrain.heightAt(i.pos.x,i.pos.z),i.yaw=-e+Math.PI+Math.sin(e*1.3)*.4,i.pitch=-.02+Math.sin(e*.9)*.05,i.bobPhase+=t*2.2,i.bobAmp=.25,i.crouchAmt=.6}_updateGameOver(t){this.player.update(t,{mx:0,my:0,sprint:!1,crouchPress:!1,jump:!1,lean:0,ads:0,speedMul:1,holdBreath:!1,scoped:!1}),this.post.params.signalLoss=Ge(this.post.params.signalLoss+t*.7,0,1)}_updateEnvironment(t){const e=this.camera,i=this.weather;i.update(t,e),this.sky.update(e);const n=i.flash,s=this.sky.uniforms;s.uFlash.value=n*.9,s.uFlashDir.value.copy(i.flashDir),this.scene.fog.color.copy(this.fogColor).lerp(wb,n*.55),this.sun.intensity=this.lightBaseSun+n*5.5,this.hemi.intensity=this.lightBaseHemi+n*2,this.post.params.flash=n*.06;const a=this.player.pos,o=76/this.sun.shadow.mapSize.x,l=Math.round(a.x/o)*o,c=Math.round(a.z/o)*o,h=a.y;this.sun.target.position.set(l,h,c),this.sun.position.set(l+this.sunDir.x*70,h+this.sunDir.y*70,c+this.sunDir.z*70);for(const d of this.fxLights)if(d.life>0){d.life-=t;const u=Math.max(0,d.life/d.dur);d.light.intensity=d.base*(d.fire?.75+.25*Math.sin(this.time*23+d.light.position.x):u*u),d.life<=0&&(d.light.intensity=0)}if(this._gsEnv&&this._updateShowcaseLights(),this.weather.setLocalLight(this.muzzleLight.intensity>0?Math.min(2.2,this.muzzleLight.intensity/150):0),this.fx.update(t),this.sfx.ready){const d=this.player,u=i.isSheltered(e.position.x,e.position.y,e.position.z),f=this.terrain.trenchAt(d.pos.x,d.pos.z)>.5,p=u?.85:f?.4:0;this.sfx.suppression=Math.max(0,this.sfx.suppression-t*.8),this.sfx.update(t,{rain:i.intensity*(u?.6:1),wind:.35+.25*Math.min(1,this.terrain.heightAt(d.pos.x,d.pos.z)>-.2?1:.4),enclosure:p,speed:d.speed,sprinting:d.sprinting,ads:this.viewmodel?this.viewmodel.ads:0,health01:d.hp/d.maxHp,stamina01:d.stamina/100,heldBreath:d.holdingBreath,suppression:this.sfx.suppression,combat:this.director?this.director.intensity:0})}}async startRun({lock:t=!0}={}){if(this._showcaseEnv(!1),this.sfx&&!this.sfx.ready&&!this.script){const i=this.sfx.init((n,s)=>this.ui?.showLoading?.(.9+n*.1,s));this.ui?.showLoading?.(.9,"SYNTHESIZING AUDIO"),await i,this.ui?.hideLoading?.()}const e=this.stats;Object.assign(e,{kills:0,headshots:0,shots:0,hits:0,score:0,wave:0,longestKill:0,startTime:this.time}),this.player.reset(ks.x,ks.z,ks.yaw),this.fx.reset(),this.enemies?.reset(),this.projectiles?.reset(),this.grenades?.reset(),this.combat?.reset(),this.trauma=0,this.aimPunch.pitch=this.aimPunch.yaw=0,this.fovPunch=0,this.post.params.signalLoss=0,this.post.params.damage=0,this.post.params.fade=1,this.state="playing",this.input.enabled=!0,this.ui?.hideAll?.(),this.ui?.hud?.show?.(),this.ui?.hud?.setRecording?.(!0),this.sfx.resume(),this.sfx.play("ui_bodycam_beep",{volume:.7}),this.director?.start(),this.emit("runStart"),t&&this.input.lock()}pause(){this.state==="playing"&&(this.state="paused",this.input.unlock(),this.ui?.showPause?.({canGunsmith:this.canGunsmith()}),this.sfx.play("ui_click",{volume:.6}))}resume(){this.state==="paused"&&(this.state="playing",this.ui?.hideAll?.(),this.input.lock())}canGunsmith(){return!!(this.director&&this.director.intermission)}gameOver(t){if(this.state==="gameover")return;this.state="gameover",this.input.unlock();const e=this.stats,i=this.time-e.startTime,n=this._saveBest();this.sfx.play("ui_warning",{volume:.7}),this.slowmo(.35,1.2),this.ui?.hud?.setRecording?.(!1),this.ui?.hud?.hide?.(),setTimeout(()=>{this.ui?.showGameOver?.({wave:e.wave,kills:e.kills,headshots:e.headshots,accuracy01:e.shots?e.hits/e.shots:0,timeSec:i,score:e.score,longestKill:e.longestKill,best:n})},900),this.emit("gameOver")}_saveBest(){try{const t="fogline.best.v1",e=this.stats,i=JSON.parse(localStorage.getItem(t)||"null"),n=!i||e.score>i.score;return n&&localStorage.setItem(t,JSON.stringify({wave:e.wave,kills:e.kills,score:e.score})),n}catch{return!1}}toTitle(){this.state="title",this.input.unlock(),this.enemies?.reset(),this.projectiles?.reset(),this.grenades?.reset(),this.director?.stop(),this.post.params.signalLoss=0,this.post.params.fade=1,this.player.dead=!1,this.player.hp=this.player.maxHp,this.ui?.hud?.hide?.(),this.ui?.showTitle?.()}testCam(t,e,i=0,n=0,s=0){const a=this.player;return a.pos.set(t,this.terrain.heightAt(t,e),e),a.yaw=i,a.pitch=n,a.vel.set(0,0,0),a.onGround=!0,this.state="playing",this}bindUI(){const t=this.ui;!t||!t.on||(t.on("deploy",()=>this.startRun({lock:!0})),t.on("resume",()=>this.resume()),t.on("quit",()=>this.toTitle()),t.on("uiSound",({name:e})=>this.sfx.play(e,{volume:.7})),t.on("pointerLockRequest",()=>{this.state==="paused"&&this.resume()}),t.on("settingsChanged",({key:e,value:i})=>{this.settings[e]=i,e==="volume"?this.sfx.setMaster(i):e==="micRealism"?this.sfx.setBodycam(i):this.applySettings(),ch(this.settings)}),t.on("openGunsmith",()=>this.openGunsmith()),t.on("gunsmithSelect",({weaponId:e})=>this.gunsmithSelect(e)),t.on("loadoutChanged",({weaponId:e,loadout:i})=>{this.combat?.setLoadout(e,i),this.sfx.play("attach_click",{volume:.7}),this._gunsmithShow(e)}),t.on("gunsmithClose",()=>this.closeGunsmith()),t.on("gunsmithRotate",({dx:e,dy:i})=>{const n=this.combat?.vm.showcase;n&&(n.yaw+=e*.009,n.pitch=Ge(n.pitch+i*.005,-.55,.85))}),t.on("gunsmithZoom",({d:e})=>{const i=this.combat?.vm.showcase;i&&(i.dist=Ge(i.dist*(1+e*9e-4),.42,1.15))}),this.input.on("unlock",()=>{this.state==="playing"&&this.pause()}),this.input.on("key",e=>{e.code==="Tab"&&this.state==="playing"&&this.canGunsmith()&&(e.preventDefault(),this.openGunsmith()),e.code==="Enter"&&this.state==="title"&&this.ui?.current}))}openGunsmith(){if(!this.combat)return;this._gsPrev=this.state==="gunsmith"?this._gsPrev:this.state,this.state="gunsmith",this.input.unlock();const t=this.combat.weaponId;this._gsLast=null,this._showcaseEnv(!0),this.combat.vm.setShowcase(!0),this.ui?.showGunsmith?.({weaponId:t,loadouts:this.combat.loadouts}),this.gunsmithSelect(t)}gunsmithSelect(t){const e=this.combat;if(!e)return;const i=["ar","smg","shotgun","dmr"].indexOf(t),n=e.vm.showcase&&this._gsLast===t?{yaw:e.vm.showcase.yaw,pitch:e.vm.showcase.pitch,dist:e.vm.showcase.dist}:null;i>=0&&(e.curIdx=i,e.ws=e.arsenal[t],e.vm.setWeapon(e.ws,!0),e.vm.setShowcase(!0)),n&&Object.assign(e.vm.showcase,n),this._gsLast=t,this._gunsmithShow(t)}_gunsmithShow(t){const e=this.combat?.vm;e&&!e.showcase&&e.setShowcase(!0)}_showcaseEnv(t){if(t===!!this._gsEnv)return;const e=this.post.params;if(t){const i=this._gsEnv={hidden:[],bg:this.scene.background,fisheye:e.fisheye,bodycam:e.bodycam,manualExposure:e.manualExposure,sunCol:this.sun.color.clone(),hemiSky:this.hemi.color.clone(),hemiGnd:this.hemi.groundColor.clone(),baseSun:this.lightBaseSun,baseHemi:this.lightBaseHemi};for(const n of this.scene.children)n===this.camera||n.isLight||n===this.sun.target||n===this.flashlight.target||n.visible&&(n.visible=!1,i.hidden.push(n));this.scene.background=new ct(395274),e.fisheye=.2,e.bodycam=.4,e.manualExposure=1,this.sun.color.set(15988223),this.hemi.color.set(11846360),this.hemi.groundColor.set(3815996),this.lightBaseSun=5,this.lightBaseHemi=1.4}else{const i=this._gsEnv;this._gsEnv=null;for(const n of i.hidden)n.visible=!0;this.scene.background=i.bg,e.fisheye=i.fisheye,e.bodycam=i.bodycam,e.manualExposure=i.manualExposure,this.sun.color.copy(i.sunCol),this.hemi.color.copy(i.hemiSky),this.hemi.groundColor.copy(i.hemiGnd),this.lightBaseSun=i.baseSun,this.lightBaseHemi=i.baseHemi;for(const n of this.fxLights.slice(0,2))n.life=0,n.light.intensity=0}}_updateShowcaseLights(){const t=this.combat?.vm.showcase,e=this.camera;if(!t)return;e.updateMatrixWorld();const i=Math.tan(e.fov*Os*.5),n=t.dist,s=-.42*n*i*e.aspect;this.sun.target.position.copy(Hc.set(s,0,-n).applyMatrix4(e.matrixWorld)),this.sun.position.copy(this.sun.target.position).addScaledVector(Ab.set(-.75,.8,.5).normalize().transformDirection(e.matrixWorld),30);const a=this.fxLights[0],o=this.fxLights[1];a.light.color.set(10273535),a.light.distance=8,a.base=this._gsRim??20,a.life=a.dur=1e9,a.fire=!1,a.light.position.copy(Hc.set(s+.45,.3,-n-.85).applyMatrix4(e.matrixWorld)),o.light.color.set(16757370),o.light.distance=8,o.base=this._gsKick??4,o.life=o.dur=1e9,o.fire=!1,o.light.position.copy(Hc.set(s-.75,-.38,-n+.25).applyMatrix4(e.matrixWorld))}closeGunsmith(){this._showcaseEnv(!1),this.combat?.vm.setShowcase(!1),this.ui?.hideAll?.();const t=this._gsPrev||"title";t==="playing"||t==="paused"?(this.state="paused",this.ui?.showPause?.({canGunsmith:this.canGunsmith()})):(this.state="title",this.ui?.showTitle?.())}_updateHud(t){const e=this.ui?.hud,i=this.state;if(!e||!e.update||!this.combat||i!=="playing"&&i!=="paused")return;const n=this.combat.hudState(this.hudState);this.player,this.camera,n.wave=this.stats.wave,n.enemiesLeft=this.director?this.director.remaining:0,n.kills=this.stats.kills,n.headshots=this.stats.headshots,n.score=this.stats.score,n.heading=(-this.player.yaw*180/Math.PI%360+360)%360,n.canGunsmith=this.canGunsmith(),n.fps=this.fps,n.ms=this.frameMs,n.drawCalls=this.info?this.info.render.calls:0,n.tris=this.info?this.info.render.triangles:0,e.update(n)}updateCamera(t){const e=this.player,i=this.camera,n=this.time,s=this.settings.camShake??1;this.trauma=Math.max(0,this.trauma-t*1.15);const a=this.trauma*this.trauma*s,o=(Yt,kt)=>Math.sin(n*Yt+kt)*.6+Math.sin(n*Yt*2.3+kt*1.7)*.4,l=a*.055*o(19,this.shakeSeed),c=a*.055*o(17,this.shakeSeed+5),h=a*.06*o(13,this.shakeSeed+9),d=e.bobAmp*s*(1-(this.viewmodel?this.viewmodel.ads*.72:0)),u=1+e.sprintBlend*1.1,f=e.bobPhase,p=Math.sin(f*2)*.0105*d*u,x=Math.cos(f)*.0075*d*u,g=Math.sin(f*2+.9)*.0062*d*u,m=Math.cos(f)*.0075*d*u,v=Math.sin(f)*.0035*d*u,M=1+(1-e.stamina/100)*1.8,_=Math.sin(n*1.55*M),S=Math.sin(n*.83+1.2),w=_*.0018*M*(1-(this.viewmodel?this.viewmodel.ads*.6:0)),E=_*.0011*M+S*6e-4,y=e.lean,A=Math.sin(e.yaw),R=Math.cos(e.yaw),I=y*.34;let D=e.landImpact*.13,B=0,L=0;if(e.mantle){const Yt=e.mantleK||0;B=Math.sin(Yt*Math.PI)*.12,L=-Math.sin(Yt*Math.PI)*.18}const O=Ge((e.lastAccel.x*R-e.lastAccel.y*A)*4e-4,-.02,.02);this.camRoll=Fe(this.camRoll,-O*6-e.vel.x*0+(e.speed>.5,0),8,t);const G=e.eyeHeight-D+B+w+p-e.stepSmooth;i.position.set(e.pos.x+R*(I+x),e.pos.y+G-Math.abs(y)*.05,e.pos.z-A*(I+x));const W=e.yaw+this.aimPunch.yaw+c+v,tt=e.pitch+this.aimPunch.pitch+l+g+E+e.landImpact*-.05+L+e.sprintBlend*-.035,X=-y*.155+h+m+this.camRoll-e.slideT*.02+(e.slideT>0?-.07:0);i.rotation.set(tt,W,X,"YXZ"),this._camYaw=W,this._camPitch=tt;const K=e.sprintBlend*5+(e.slideT>0?4:0),J=this.viewmodel?this.viewmodel.fovTarget:this.fovBase,wt=this.viewmodel&&this.viewmodel.ads>.001?Oi(this.fovBase+K,J,this.viewmodel.adsFovBlend):this.fovBase+K;this.fovPunch=Fe(this.fovPunch,0,12,t),this.fovNow=Fe(this.fovNow,wt+this.fovPunch,16,t);const mt=2*Math.atan(Math.tan(this.fovNow*Os*.5)*this.post.getFovScale())/Os;Math.abs(i.fov-mt)>.001&&(i.fov=mt,i.updateProjectionMatrix()),i.updateMatrixWorld(!0)}addTrauma(t){this.trauma=Math.min(1,this.trauma+t)}render(t,e){this._updatePost(t),this.renderer.info.reset(),this.post.render(this.scene,this.camera,e),this.info=this.renderer.info}_updatePost(t){const e=this.post.params,i=this.player,n=this.camera,s=this._camYaw??0,a=this._camPitch??0,o=((s-(this._lastYaw??s)+Math.PI)%Vr+Vr)%Vr-Math.PI,l=a-(this._lastPitch??a);this._lastYaw=s,this._lastPitch=a;const c=this.fovNow*Os,h=-o/(2*Math.atan(Math.tan(c/2)*n.aspect))*.9,d=l/c*.9,u=this.settings.motionBlur??.6,f=1/Math.max(t,1/240),p=Ge(h*.5*u,-.03,.03),x=Ge(d*.5*u,-.03,.03);e.motion.set(Fe(e.motion.x,p,30,t),Fe(e.motion.y,x,30,t)),e.motionAmt=Math.hypot(e.motion.x,e.motion.y)>8e-4?1:0,e.motionMag=Fe(e.motionMag,Ge(Math.hypot(h,d)*f*.16,0,1),10,t);const g=this.weather.isSheltered(n.position.x,n.position.y,n.position.z)?.35:1;e.rainLens=Fe(e.rainLens,this._gsEnv?0:.9*(this.rainLensSetting??1)*g*this.weather.intensity,2,t),e.lensDirt=.55;const m=1-i.hp/i.maxHp;e.damage=Fe(e.damage,Si(.45,1,m),4,t),e.hurtPulse=i.hurtPulse*.5,e.blur=Fe(e.blur,Math.max(i.hurtPulse*.5,this._concussBlur||0),8,t),e.concuss=Fe(e.concuss,this._concuss||0,3,t),this._concuss=Math.max(0,(this._concuss||0)-t*.25),this._concussBlur=Math.max(0,(this._concussBlur||0)-t*.5),e.shock.w>0&&(e.shock.z+=t*1.4,e.shock.w=Math.max(0,e.shock.w-t*1.3)),e.muzzle=Fe(e.muzzle,0,30,t)}concussion(t){this._concuss=Math.max(this._concuss||0,t),this._concussBlur=Math.max(this._concussBlur||0,t*.7)}shockwave(t,e=1){const i=t.clone().project(this.camera);this.post.params.shock.set(i.x*.5+.5,i.y*.5+.5,.02,e)}}const wb=new ct(.62,.7,.95),Hc=new C,Ab=new C;function Tb(r){return r&&(r.yaw!==void 0||r.pitch!==void 0)}class df{constructor(){this.current=null,this.hud=new Proxy({},{get:()=>()=>{}}),this._h={}}on(t,e){(this._h[t]||=[]).push(e)}off(){}emit(t,e){(this._h[t]||[]).forEach(i=>i(e))}showLoading(t,e){const i=document.getElementById("boot");i&&(i.textContent=`${e||"LOADING"} — ${Math.round((t||0)*100)}%`)}hideLoading(){document.getElementById("boot")?.remove()}showTitle(){}showPause(){}showGameOver(){}showGunsmith(){}showSettings(){}showControls(){}hideAll(){}setSettings(){}getSettings(){return{}}setLoadouts(){}}async function Eb(){const r=document.getElementById("game"),t=document.getElementById("err"),e=a=>{console.error(a),t.style.display="block",t.textContent+=(a&&(a.stack||a.message)||String(a))+`
`};window.addEventListener("error",a=>e(a.error||a.message)),window.addEventListener("unhandledrejection",a=>e(a.reason));let i=new df;const n=new URLSearchParams(location.search);if(!n.has("noui"))try{const a=await Zi(()=>import("./ui-6U5EyKxt.js"),__vite__mapDeps([9,1,10]),import.meta.url),{loadSettings:o}=await Zi(async()=>{const{loadSettings:h}=await Promise.resolve().then(()=>gb);return{loadSettings:h}},void 0,import.meta.url),{cloneLoadouts:l,DEFAULT_LOADOUT:c}=await Zi(async()=>{const{cloneLoadouts:h,DEFAULT_LOADOUT:d}=await import("./loadout-C7bwbrRO.js");return{cloneLoadouts:h,DEFAULT_LOADOUT:d}},[],import.meta.url);i=new a.GameUI(document.getElementById("ui-root"),{settings:o(),loadouts:l(c),best:null})}catch(a){console.warn("[ui] unavailable, using fallback:",a.message),i=new df}const s=new bb(r,i);window.game=s,window.THREE=d1,await s.init((a,o)=>i.showLoading(a,o)),i.hideLoading?.(),document.getElementById("boot")?.remove(),s.start(),s.bindUI?.(),n.has("autostart")?s.startRun?.({lock:!1}):i.showTitle?.()}Eb().catch(r=>{console.error(r);const t=document.getElementById("err");t.style.display="block",t.textContent=String(r&&r.stack||r)});export{yp as $,Xc as A,ue as B,mb as C,lh as D,Vi as E,fe as F,Rn as G,Pb as H,ep as I,cs as J,la as K,Il as L,Zt as M,oa as N,us as O,Et as P,li as Q,ca as R,sm as S,Ul as T,Rl as U,C as V,cp as W,Ol as X,ns as Y,Ue as Z,Pn as _,Bl as a,v1 as a0,Xe as a1,Le as a2,Oe as a3,xi as a4,cn as a5,cr as a6,ti as a7,Jr as a8,Tl as a9,ks as aA,U1 as aB,C1 as aC,Dl as aa,de as ab,Ze as ac,Jt as ad,Ih as ae,Lh as af,lr as ag,Lb as ah,Wh as ai,Rm as aj,se as ak,Df as al,We as am,Rb as an,ru as ao,Rr as ap,sr as aq,Nb as ar,Ye as as,ss as at,Pl as au,qe as av,ki as aw,L1 as ax,P1 as ay,Db as az,Q as b,Sl as c,tp as d,Nh as e,Bs as f,Kt as g,Ch as h,ve as i,Ib as j,jf as k,am as l,Dh as m,ct as n,xn as o,ei as p,Ge as q,Cb as r,ch as s,Si as t,Os as u,Fe as v,Oi as w,Qt as x,yg as y,pi as z};
