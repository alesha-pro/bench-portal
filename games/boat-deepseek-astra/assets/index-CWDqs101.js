var Qh=Object.defineProperty;var $h=(s,t,e)=>t in s?Qh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var fl=(s,t,e)=>$h(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oa="169",tu=0,pl=1,eu=2,Oc=1,Bc=2,Di=3,Qi=0,Ge=1,pe=2,Ui=0,wi=1,De=2,ml=3,gl=4,iu=5,un=100,nu=101,su=102,ru=103,ou=104,au=200,lu=201,cu=202,hu=203,Xo=204,qo=205,uu=206,du=207,fu=208,pu=209,mu=210,gu=211,xu=212,vu=213,_u=214,Yo=0,jo=1,Ko=2,jn=3,Zo=4,Jo=5,Qo=6,$o=7,kc=0,Mu=1,yu=2,Zi=0,Hc=1,Gc=2,Vc=3,Ba=4,wu=5,Wc=6,Xc=7,qc=300,Kn=301,Zn=302,ta=303,ea=304,Xr=306,Lr=1e3,fn=1001,ia=1002,He=1003,Su=1004,Bs=1005,ke=1006,so=1007,ji=1008,Ni=1009,Yc=1010,jc=1011,Es=1012,ka=1013,mn=1014,yi=1015,si=1016,Ha=1017,Ga=1018,Jn=1020,Kc=35902,Zc=1021,Jc=1022,_i=1023,Qc=1024,$c=1025,qn=1026,Qn=1027,Va=1028,Wa=1029,th=1030,Xa=1031,qa=1033,yr=33776,wr=33777,Sr=33778,br=33779,na=35840,sa=35841,ra=35842,oa=35843,aa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,xa=37815,va=37816,_a=37817,Ma=37818,ya=37819,wa=37820,Sa=37821,Ar=36492,ba=36494,Aa=36495,eh=36283,Ta=36284,Ea=36285,Ca=36286,bu=3200,Au=3201,ih=0,Tu=1,Yi="",mi="srgb",Fi="srgb-linear",Ya="display-p3",qr="display-p3-linear",Dr="linear",fe="srgb",Ir="rec709",zr="p3",wn=7680,xl=519,Eu=512,Cu=513,Ru=514,nh=515,Pu=516,Lu=517,Du=518,Iu=519,Ra=35044,Ii=35048,vl="300 es",zi=2e3,Ur=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _l=1234567;const ws=Math.PI/180,Cs=180/Math.PI;function Si(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function Le(s,t,e){return Math.max(t,Math.min(e,s))}function ja(s,t){return(s%t+t)%t}function zu(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Uu(s,t,e){return s!==t?(e-s)/(t-s):0}function Ss(s,t,e){return(1-e)*s+e*t}function Nu(s,t,e,i){return Ss(s,t,1-Math.exp(-e*i))}function Fu(s,t=1){return t-Math.abs(ja(s,t*2)-t)}function Ou(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Bu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ku(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Hu(s,t){return s+Math.random()*(t-s)}function Gu(s){return s*(.5-Math.random())}function Vu(s){s!==void 0&&(_l=s);let t=_l+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wu(s){return s*ws}function Xu(s){return s*Cs}function qu(s){return(s&s-1)===0&&s!==0}function Yu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ju(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ku(s,t,e,i,n){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(n){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function gi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Nr={DEG2RAD:ws,RAD2DEG:Cs,generateUUID:Si,clamp:Le,euclideanModulo:ja,mapLinear:zu,inverseLerp:Uu,lerp:Ss,damp:Nu,pingpong:Fu,smoothstep:Ou,smootherstep:Bu,randInt:ku,randFloat:Hu,randFloatSpread:Gu,seededRandom:Vu,degToRad:Wu,radToDeg:Xu,isPowerOfTwo:qu,ceilPowerOfTwo:Yu,floorPowerOfTwo:ju,setQuaternionFromProperEuler:Ku,normalize:le,denormalize:gi};class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,n,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],M=n[1],v=n[4],y=n[7],P=n[2],A=n[5],T=n[8];return r[0]=o*x+a*M+l*P,r[3]=o*m+a*v+l*A,r[6]=o*p+a*y+l*T,r[1]=c*x+h*M+u*P,r[4]=c*m+h*v+u*A,r[7]=c*p+h*y+u*T,r[2]=d*x+f*M+g*P,r[5]=d*m+f*v+g*A,r[8]=d*p+f*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ro.makeScale(t,e)),this}rotate(t){return this.premultiply(ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new Xt;function sh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zu(){const s=Fr("canvas");return s.style.display="block",s}const Ml={};function Tr(s){s in Ml||(Ml[s]=!0,console.warn(s))}function Ju(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Qu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $u(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const yl=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wl=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),as={[Fi]:{transfer:Dr,primaries:Ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[mi]:{transfer:fe,primaries:Ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[qr]:{transfer:Dr,primaries:zr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(wl),fromReference:s=>s.applyMatrix3(yl)},[Ya]:{transfer:fe,primaries:zr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(wl),fromReference:s=>s.applyMatrix3(yl).convertLinearToSRGB()}},td=new Set([Fi,qr]),ne={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!td.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=as[t].toReference,n=as[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return as[s].primaries},getTransfer:function(s){return s===Yi?Dr:as[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(as[t].luminanceCoefficients)}};function Yn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Sn;class ed{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Sn===void 0&&(Sn=Fr("canvas")),Sn.width=t.width,Sn.height=t.height;const i=Sn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Sn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yn(e[i]/255)*255):e[i]=Yn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let id=0;class rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(ao(n[o].image)):r.push(ao(n[o]))}else r=ao(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ed.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nd=0;class Ie extends ns{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=fn,n=fn,r=ke,o=ji,a=_i,l=Ni,c=Ie.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Si(),this.name="",this.source=new rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lr:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lr:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=qc;Ie.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,n=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(f+1)/2,P=(p+1)/2,A=(h+d)/4,T=(u+x)/4,L=(g+m)/4;return v>y&&v>P?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=A/i,r=T/i):y>P?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=A/n,r=L/n):P<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(P),i=T/r,n=L/r),this.set(i,n,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sd extends ns{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ie(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ve extends sd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class oh extends Ie{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=He,this.minFilter=He,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rd extends Ie{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=He,this.minFilter=He,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*x,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,p*M);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const y=a*M;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return lo.copy(this).projectOnVector(t),this.sub(lo)}reflect(t){return this.sub(lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lo=new C,Sl=new xn;class vn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ks.copy(i.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Hs.subVectors(this.max,ls),bn.subVectors(t.a,ls),An.subVectors(t.b,ls),Tn.subVectors(t.c,ls),Bi.subVectors(An,bn),ki.subVectors(Tn,An),en.subVectors(bn,Tn);let e=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-en.z,en.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,en.z,0,-en.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-en.y,en.x,0];return!co(e,bn,An,Tn,Hs)||(e=[1,0,0,0,1,0,0,0,1],!co(e,bn,An,Tn,Hs))?!1:(Gs.crossVectors(Bi,ki),e=[Gs.x,Gs.y,Gs.z],co(e,bn,An,Tn,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new C,new C,new C,new C,new C,new C,new C,new C],ui=new C,ks=new vn,bn=new C,An=new C,Tn=new C,Bi=new C,ki=new C,en=new C,ls=new C,Hs=new C,Gs=new C,nn=new C;function co(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){nn.fromArray(s,r);const a=n.x*Math.abs(nn.x)+n.y*Math.abs(nn.y)+n.z*Math.abs(nn.z),l=t.dot(nn),c=e.dot(nn),h=i.dot(nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const od=new vn,cs=new C,ho=new C;class ss{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):od.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(cs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(ho)),this.expandByPoint(cs.copy(t.center).sub(ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new C,uo=new C,Vs=new C,Hi=new C,fo=new C,Ws=new C,po=new C;class ah{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){uo.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(uo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Vs),a=Hi.dot(this.direction),l=-Hi.dot(Vs),c=Hi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(uo).addScaledVector(Vs,d),f}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const i=Ci.dot(this.direction),n=Ci.dot(Ci)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,n,r){fo.subVectors(e,t),Ws.subVectors(i,t),po.crossVectors(fo,Ws);let o=this.direction.dot(po),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,t);const l=a*this.direction.dot(Ws.crossVectors(Hi,Ws));if(l<0)return null;const c=a*this.direction.dot(fo.cross(Hi));if(c<0||l+c>o)return null;const h=-a*Hi.dot(po);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,n,r,o,a,l,c,h,u,d,f,g,x,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,i,n,r,o,a,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/En.setFromMatrixColumn(t,0).length(),r=1/En.setFromMatrixColumn(t,1).length(),o=1/En.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ad,t,ld)}lookAt(t,e,i){const n=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Gi.crossVectors(i,ti),Gi.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Gi.crossVectors(i,ti)),Gi.normalize(),Xs.crossVectors(ti,Gi),n[0]=Gi.x,n[4]=Xs.x,n[8]=ti.x,n[1]=Gi.y,n[5]=Xs.y,n[9]=ti.y,n[2]=Gi.z,n[6]=Xs.z,n[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],v=i[7],y=i[11],P=i[15],A=n[0],T=n[4],L=n[8],D=n[12],_=n[1],S=n[5],N=n[9],F=n[13],V=n[2],q=n[6],B=n[10],$=n[14],W=n[3],Y=n[7],j=n[11],lt=n[15];return r[0]=o*A+a*_+l*V+c*W,r[4]=o*T+a*S+l*q+c*Y,r[8]=o*L+a*N+l*B+c*j,r[12]=o*D+a*F+l*$+c*lt,r[1]=h*A+u*_+d*V+f*W,r[5]=h*T+u*S+d*q+f*Y,r[9]=h*L+u*N+d*B+f*j,r[13]=h*D+u*F+d*$+f*lt,r[2]=g*A+x*_+m*V+p*W,r[6]=g*T+x*S+m*q+p*Y,r[10]=g*L+x*N+m*B+p*j,r[14]=g*D+x*F+m*$+p*lt,r[3]=M*A+v*_+y*V+P*W,r[7]=M*T+v*S+y*q+P*Y,r[11]=M*L+v*N+y*B+P*j,r[15]=M*D+v*F+y*$+P*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-n*c*u-r*a*d+i*c*d+n*a*f-i*l*f)+x*(+e*l*f-e*c*d+r*o*d-n*o*f+n*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-n*a*h-e*l*u+e*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,P=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,A=e*M+i*v+n*y+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=M*T,t[1]=(x*d*r-u*m*r-x*n*f+i*m*f+u*n*p-i*d*p)*T,t[2]=(a*m*r-x*l*r+x*n*c-i*m*c-a*n*p+i*l*p)*T,t[3]=(u*l*r-a*d*r-u*n*c+i*d*c+a*n*f-i*l*f)*T,t[4]=v*T,t[5]=(h*m*r-g*d*r+g*n*f-e*m*f-h*n*p+e*d*p)*T,t[6]=(g*l*r-o*m*r-g*n*c+e*m*c+o*n*p-e*l*p)*T,t[7]=(o*d*r-h*l*r+h*n*c-e*d*c-o*n*f+e*l*f)*T,t[8]=y*T,t[9]=(g*u*r-h*x*r-g*i*f+e*x*f+h*i*p-e*u*p)*T,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*T,t[12]=P*T,t[13]=(h*x*n-g*u*n+g*i*d-e*x*d-h*i*m+e*u*m)*T,t[14]=(g*a*n-o*x*n-g*i*l+e*x*l+o*i*m-e*a*m)*T,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*d+e*a*d)*T,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,M=l*c,v=l*h,y=l*u,P=i.x,A=i.y,T=i.z;return n[0]=(1-(x+p))*P,n[1]=(f+y)*P,n[2]=(g-v)*P,n[3]=0,n[4]=(f-y)*A,n[5]=(1-(d+p))*A,n[6]=(m+M)*A,n[7]=0,n[8]=(g+v)*T,n[9]=(m-M)*T,n[10]=(1-(d+x))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=En.set(n[0],n[1],n[2]).length();const o=En.set(n[4],n[5],n[6]).length(),a=En.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],di.copy(this);const c=1/r,h=1/o,u=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,e.setFromRotationMatrix(di),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=zi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let f,g;if(a===zi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ur)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=zi){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),d=(e+t)*c,f=(i+n)*h;let g,x;if(a===zi)g=(o+r)*u,x=-2*u;else if(a===Ur)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const En=new C,di=new he,ad=new C(0,0,0),ld=new C(1,1,1),Gi=new C,Xs=new C,ti=new C,bl=new he,Al=new xn;class bi{constructor(t=0,e=0,i=0,n=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Al.setFromEuler(this),this.setFromQuaternion(Al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cd=0;const Tl=new C,Cn=new xn,Ri=new he,qs=new C,hs=new C,hd=new C,ud=new xn,El=new C(1,0,0),Cl=new C(0,1,0),Rl=new C(0,0,1),Pl={type:"added"},dd={type:"removed"},Rn={type:"childadded",child:null},mo={type:"childremoved",child:null};class ee extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ee.DEFAULT_UP.clone();const t=new C,e=new bi,i=new xn,n=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new Xt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.premultiply(Cn),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(Cl,t)}rotateZ(t){return this.rotateOnAxis(Rl,t)}translateOnAxis(t,e){return Tl.copy(t).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(Cl,t)}translateZ(t){return this.translateOnAxis(Rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qs.copy(t):qs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(hs,qs,this.up):Ri.lookAt(qs,hs,this.up),this.quaternion.setFromRotationMatrix(Ri),n&&(Ri.extractRotation(n.matrixWorld),Cn.setFromRotationMatrix(Ri),this.quaternion.premultiply(Cn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pl),Rn.child=t,this.dispatchEvent(Rn),Rn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dd),mo.child=t,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pl),Rn.child=t,this.dispatchEvent(Rn),Rn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ee.DEFAULT_UP=new C(0,1,0);ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new C,Pi=new C,go=new C,Li=new C,Pn=new C,Ln=new C,Ll=new C,xo=new C,vo=new C,_o=new C,Mo=new _e,yo=new _e,wo=new _e;class li{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),fi.subVectors(t,e),n.cross(fi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){fi.subVectors(n,e),Pi.subVectors(i,e),go.subVectors(t,e);const o=fi.dot(fi),a=fi.dot(Pi),l=fi.dot(go),c=Pi.dot(Pi),h=Pi.dot(go),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Mo.setScalar(0),yo.setScalar(0),wo.setScalar(0),Mo.fromBufferAttribute(t,e),yo.fromBufferAttribute(t,i),wo.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Mo,r.x),o.addScaledVector(yo,r.y),o.addScaledVector(wo,r.z),o}static isFrontFacing(t,e,i,n){return fi.subVectors(i,e),Pi.subVectors(t,e),fi.cross(Pi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),fi.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return li.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;Pn.subVectors(n,i),Ln.subVectors(r,i),xo.subVectors(t,i);const l=Pn.dot(xo),c=Ln.dot(xo);if(l<=0&&c<=0)return e.copy(i);vo.subVectors(t,n);const h=Pn.dot(vo),u=Ln.dot(vo);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Pn,o);_o.subVectors(t,r);const f=Pn.dot(_o),g=Ln.dot(_o);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ln,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ll.subVectors(r,n),a=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(Ll,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(i).addScaledVector(Pn,o).addScaledVector(Ln,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function So(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ne.workingColorSpace){if(t=ja(t,1),e=Le(e,0,1),i=Le(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=So(o,r,t+1/3),this.g=So(o,r,t),this.b=So(o,r,t-1/3)}return ne.toWorkingColorSpace(this,n),this}setStyle(t,e=mi){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mi){const i=ch[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=oo(t.r),this.g=oo(t.g),this.b=oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return ne.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Le(Oe.r*255,0,255))*65536+Math.round(Le(Oe.g*255,0,255))*256+Math.round(Le(Oe.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Oe.copy(this),e);const i=Oe.r,n=Oe.g,r=Oe.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=mi){ne.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,n=Oe.b;return t!==mi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Ys);const i=Ss(Vi.h,Ys.h,e),n=Ss(Vi.s,Ys.s,e),r=Ss(Vi.l,Ys.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new ot;ot.NAMES=ch;let fd=0;class _n extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=wi,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wn,this.stencilZFail=wn,this.stencilZPass=wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xo&&(i.blendSrc=this.blendSrc),this.blendDst!==qo&&(i.blendDst=this.blendDst),this.blendEquation!==un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class be extends _n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new C,js=new Q;class Se{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ra,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ra&&(t.usage=this.usage),t}}class hh extends Se{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class uh extends Se{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class zt extends Se{constructor(t,e,i){super(new Float32Array(t),e,i)}}let pd=0;const oi=new he,bo=new ee,Dn=new C,ei=new vn,us=new vn,Pe=new C;class te extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sh(t)?uh:hh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,i){return oi.makeTranslation(t,e,i),this.applyMatrix4(oi),this}scale(t,e,i){return oi.makeScale(t,e,i),this.applyMatrix4(oi),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];us.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(ei.min,us.min),ei.expandByPoint(Pe),Pe.addVectors(ei.max,us.max),ei.expandByPoint(Pe)):(ei.expandByPoint(us.min),ei.expandByPoint(us.max))}ei.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(Dn.fromBufferAttribute(t,c),Pe.add(Dn)),n=Math.max(n,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new C,l[L]=new C;const c=new C,h=new C,u=new C,d=new Q,f=new Q,g=new Q,x=new C,m=new C;function p(L,D,_){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,D),u.fromBufferAttribute(i,_),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[L].add(x),a[D].add(x),a[_].add(x),l[L].add(m),l[D].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,D=M.length;L<D;++L){const _=M[L],S=_.start,N=_.count;for(let F=S,V=S+N;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const v=new C,y=new C,P=new C,A=new C;function T(L){P.fromBufferAttribute(n,L),A.copy(P);const D=a[L];v.copy(D),v.sub(P.multiplyScalar(P.dot(D))).normalize(),y.crossVectors(A,D);const S=y.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,S)}for(let L=0,D=M.length;L<D;++L){const _=M[L],S=_.start,N=_.count;for(let F=S,V=S+N;F<V;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Se(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new te,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new he,sn=new ah,Ks=new ss,Il=new C,Zs=new C,Js=new C,Qs=new C,Ao=new C,$s=new C,zl=new C,tr=new C;class k extends ee{constructor(t=new te,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ao.fromBufferAttribute(u,t),o?$s.addScaledVector(Ao,h):$s.addScaledVector(Ao.sub(e),h))}e.add($s)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),sn.copy(t.ray).recast(t.near),!(Ks.containsPoint(sn.origin)===!1&&(sn.intersectSphere(Ks,Il)===null||sn.origin.distanceToSquared(Il)>(t.far-t.near)**2))&&(Dl.copy(r).invert(),sn.copy(t.ray).applyMatrix4(Dl),!(i.boundingBox!==null&&sn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,sn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,P=v;y<P;y+=3){const A=a.getX(y),T=a.getX(y+1),L=a.getX(y+2);n=er(this,p,t,i,c,h,u,A,T,L),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);n=er(this,o,t,i,c,h,u,M,v,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,P=v;y<P;y+=3){const A=y,T=y+1,L=y+2;n=er(this,p,t,i,c,h,u,A,T,L),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=m,v=m+1,y=m+2;n=er(this,o,t,i,c,h,u,M,v,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function md(s,t,e,i,n,r,o,a){let l;if(t.side===Ge?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Qi,a),l===null)return null;tr.copy(a),tr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(tr);return c<e.near||c>e.far?null:{distance:c,point:tr.clone(),object:s}}function er(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Zs),s.getVertexPosition(l,Js),s.getVertexPosition(c,Qs);const h=md(s,t,e,i,Zs,Js,Qs,zl);if(h){const u=new C;li.getBarycoord(zl,Zs,Js,Qs,u),n&&(h.uv=li.getInterpolatedAttribute(n,a,l,c,u,new Q)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,u,new Q)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};li.getNormal(Zs,Js,Qs,d.normal),h.face=d,h.barycoord=u}return h}class Kt extends te{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function g(x,m,p,M,v,y,P,A,T,L,D){const _=y/T,S=P/L,N=y/2,F=P/2,V=A/2,q=T+1,B=L+1;let $=0,W=0;const Y=new C;for(let j=0;j<B;j++){const lt=j*S-F;for(let It=0;It<q;It++){const qt=It*_-N;Y[x]=qt*M,Y[m]=lt*v,Y[p]=V,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(It/T),u.push(1-j/L),$+=1}}for(let j=0;j<L;j++)for(let lt=0;lt<T;lt++){const It=d+lt+q*j,qt=d+lt+q*(j+1),K=d+(lt+1)+q*(j+1),st=d+(lt+1)+q*j;l.push(It,qt,st),l.push(qt,K,st),W+=6}a.addGroup(f,W,D),f+=W,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $n(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Xe(s){const t={};for(let e=0;e<s.length;e++){const i=$n(s[e]);for(const n in i)t[n]=i[n]}return t}function gd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function dh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Ji={clone:$n,merge:Xe};var xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends _n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$n(t.uniforms),this.uniformsGroups=gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class fh extends ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new C,Ul=new Q,Nl=new Q;class ai extends fh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,Ul,Nl),e.subVectors(Nl,Ul)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ws*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const In=-90,zn=1;class _d extends ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ai(In,zn,t,e);n.layers=this.layers,this.add(n);const r=new ai(In,zn,t,e);r.layers=this.layers,this.add(r);const o=new ai(In,zn,t,e);o.layers=this.layers,this.add(o);const a=new ai(In,zn,t,e);a.layers=this.layers,this.add(a);const l=new ai(In,zn,t,e);l.layers=this.layers,this.add(l);const c=new ai(In,zn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ph extends Ie{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Kn,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Md extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ph(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Kt(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:$n(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:Ui});r.uniforms.tEquirect.value=e;const o=new k(n,r),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=ke),new _d(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}const To=new C,yd=new C,wd=new Xt;class cn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=To.subVectors(i,e).cross(yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(To),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||wd.getNormalMatrix(t),n=this.coplanarPoint(To).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rn=new ss,ir=new C;class Ka{constructor(t=new cn,e=new cn,i=new cn,n=new cn,r=new cn,o=new cn){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zi){const i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],x=n[10],m=n[11],p=n[12],M=n[13],v=n[14],y=n[15];if(i[0].setComponents(l-r,d-c,m-f,y-p).normalize(),i[1].setComponents(l+r,d+c,m+f,y+p).normalize(),i[2].setComponents(l+o,d+h,m+g,y+M).normalize(),i[3].setComponents(l-o,d-h,m-g,y-M).normalize(),i[4].setComponents(l-a,d-u,m-x,y-v).normalize(),e===zi)i[5].setComponents(l+a,d+u,m+x,y+v).normalize();else if(e===Ur)i[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rn)}intersectsSprite(t){return rn.center.set(0,0,0),rn.radius=.7071067811865476,rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(rn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ir.x=n.normal.x>0?t.max.x:t.min.x,ir.y=n.normal.y>0?t.max.y:t.min.y,ir.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mh(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Sd(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}class ni extends te{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let v=0;v<c;v++){const y=v*u-r;g.push(y,-M,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,y=M+c*(p+1),P=M+1+c*(p+1),A=M+1+c*p;f.push(v,y,A),f.push(y,P,A)}this.setIndex(f),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
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
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
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
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
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
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wf=`PhysicalMaterial material;
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
#endif`,Sf=`struct PhysicalMaterial {
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
}`,bf=`
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zf=`#if defined( USE_POINTS_UV )
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
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
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
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cp=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dp=`#define DISTANCE
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
}`,Ip=`#define DISTANCE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,Bp=`uniform vec3 diffuse;
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
}`,kp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,Gp=`#define MATCAP
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
}`,Vp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define PHONG
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
}`,Yp=`#define PHONG
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
}`,jp=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,Zp=`#define TOON
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
}`,Jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,$p=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,nm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:bd,alphahash_pars_fragment:Ad,alphamap_fragment:Td,alphamap_pars_fragment:Ed,alphatest_fragment:Cd,alphatest_pars_fragment:Rd,aomap_fragment:Pd,aomap_pars_fragment:Ld,batching_pars_vertex:Dd,batching_vertex:Id,begin_vertex:zd,beginnormal_vertex:Ud,bsdfs:Nd,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Gd,color_fragment:Vd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,cube_uv_reflection_fragment:jd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Zd,displacementmap_vertex:Jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:$d,colorspace_fragment:tf,colorspace_pars_fragment:ef,envmap_fragment:nf,envmap_common_pars_fragment:sf,envmap_pars_fragment:rf,envmap_pars_vertex:of,envmap_physical_pars_fragment:xf,envmap_vertex:af,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:hf,fog_pars_fragment:uf,gradientmap_pars_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:vf,lights_toon_pars_fragment:_f,lights_phong_fragment:Mf,lights_phong_pars_fragment:yf,lights_physical_fragment:wf,lights_physical_pars_fragment:Sf,lights_fragment_begin:bf,lights_fragment_maps:Af,lights_fragment_end:Tf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Rf,logdepthbuf_vertex:Pf,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:If,map_particle_pars_fragment:zf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Ff,morphcolor_vertex:Of,morphnormal_vertex:Bf,morphtarget_pars_vertex:kf,morphtarget_vertex:Hf,normal_fragment_begin:Gf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:Jf,opaque_fragment:Qf,packing:$f,premultiplied_alpha_fragment:tp,project_vertex:ep,dithering_fragment:ip,dithering_pars_fragment:np,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:op,shadowmap_pars_vertex:ap,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:xp,transmission_fragment:vp,transmission_pars_fragment:_p,uv_pars_fragment:Mp,uv_pars_vertex:yp,uv_vertex:wp,worldpos_vertex:Sp,background_vert:bp,background_frag:Ap,backgroundCube_vert:Tp,backgroundCube_frag:Ep,cube_vert:Cp,cube_frag:Rp,depth_vert:Pp,depth_frag:Lp,distanceRGBA_vert:Dp,distanceRGBA_frag:Ip,equirect_vert:zp,equirect_frag:Up,linedashed_vert:Np,linedashed_frag:Fp,meshbasic_vert:Op,meshbasic_frag:Bp,meshlambert_vert:kp,meshlambert_frag:Hp,meshmatcap_vert:Gp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:jp,meshphysical_frag:Kp,meshtoon_vert:Zp,meshtoon_frag:Jp,points_vert:Qp,points_frag:$p,shadow_vert:tm,shadow_frag:em,sprite_vert:im,sprite_frag:nm},ft={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Mi={basic:{uniforms:Xe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Xe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ot(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Xe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Xe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Xe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new ot(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Xe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Xe([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Xe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Xe([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Xe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Xe([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Xe([ft.common,ft.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Xe([ft.lights,ft.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Mi.physical={uniforms:Xe([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const nr={r:0,b:0,g:0},on=new bi,sm=new he;function rm(s,t,e,i,n,r,o){const a=new ot(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1;const y=g(M);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Xr)?(h===void 0&&(h=new k(new Kt(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:$n(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),on.copy(v.backgroundRotation),on.x*=-1,on.y*=-1,on.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(on.y*=-1,on.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler(on)),h.material.toneMapped=ne.getTransfer(y.colorSpace)!==fe,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new k(new ni(2,2),new $t({name:"BackgroundMaterial",uniforms:$n(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ne.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(nr,dh(s)),i.buffers.color.setClear(nr.r,nr.g,nr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:m}}function om(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,o=!1;function a(_,S,N,F,V){let q=!1;const B=u(F,N,S);r!==B&&(r=B,c(r.object)),q=f(_,F,N,V),q&&g(_,F,N,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(_,S,N,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,S,N){const F=N.wireframe===!0;let V=i[_.id];V===void 0&&(V={},i[_.id]=V);let q=V[S.id];q===void 0&&(q={},V[S.id]=q);let B=q[F];return B===void 0&&(B=d(l()),q[F]=B),B}function d(_){const S=[],N=[],F=[];for(let V=0;V<e;V++)S[V]=0,N[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,S,N,F){const V=r.attributes,q=S.attributes;let B=0;const $=N.getAttributes();for(const W in $)if($[W].location>=0){const j=V[W];let lt=q[W];if(lt===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor)),j===void 0||j.attribute!==lt||lt&&j.data!==lt.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function g(_,S,N,F){const V={},q=S.attributes;let B=0;const $=N.getAttributes();for(const W in $)if($[W].location>=0){let j=q[W];j===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(j=_.instanceColor));const lt={};lt.attribute=j,j&&j.data&&(lt.data=j.data),V[W]=lt,B++}r.attributes=V,r.attributesNum=B,r.index=F}function x(){const _=r.newAttributes;for(let S=0,N=_.length;S<N;S++)_[S]=0}function m(_){p(_,0)}function p(_,S){const N=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;N[_]=1,F[_]===0&&(s.enableVertexAttribArray(_),F[_]=1),V[_]!==S&&(s.vertexAttribDivisor(_,S),V[_]=S)}function M(){const _=r.newAttributes,S=r.enabledAttributes;for(let N=0,F=S.length;N<F;N++)S[N]!==_[N]&&(s.disableVertexAttribArray(N),S[N]=0)}function v(_,S,N,F,V,q,B){B===!0?s.vertexAttribIPointer(_,S,N,V,q):s.vertexAttribPointer(_,S,N,F,V,q)}function y(_,S,N,F){x();const V=F.attributes,q=N.getAttributes(),B=S.defaultAttributeValues;for(const $ in q){const W=q[$];if(W.location>=0){let Y=V[$];if(Y===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor)),Y!==void 0){const j=Y.normalized,lt=Y.itemSize,It=t.get(Y);if(It===void 0)continue;const qt=It.buffer,K=It.type,st=It.bytesPerElement,bt=K===s.INT||K===s.UNSIGNED_INT||Y.gpuType===ka;if(Y.isInterleavedBufferAttribute){const pt=Y.data,Nt=pt.stride,Ut=Y.offset;if(pt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<W.locationSize;Ht++)p(W.location+Ht,pt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ht=0;Ht<W.locationSize;Ht++)m(W.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let Ht=0;Ht<W.locationSize;Ht++)v(W.location+Ht,lt/W.locationSize,K,j,Nt*st,(Ut+lt/W.locationSize*Ht)*st,bt)}else{if(Y.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)p(W.location+pt,Y.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let pt=0;pt<W.locationSize;pt++)v(W.location+pt,lt/W.locationSize,K,j,lt*st,lt/W.locationSize*pt*st,bt)}}else if(B!==void 0){const j=B[$];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(W.location,j);break;case 3:s.vertexAttrib3fv(W.location,j);break;case 4:s.vertexAttrib4fv(W.location,j);break;default:s.vertexAttrib1fv(W.location,j)}}}}M()}function P(){L();for(const _ in i){const S=i[_];for(const N in S){const F=S[N];for(const V in F)h(F[V].object),delete F[V];delete S[N]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const S=i[_.id];for(const N in S){const F=S[N];for(const V in F)h(F[V].object),delete F[V];delete S[N]}delete i[_.id]}function T(_){for(const S in i){const N=i[S];if(N[_.id]===void 0)continue;const F=N[_.id];for(const V in F)h(F[V].object),delete F[V];delete N[_.id]}}function L(){D(),o=!0,r!==n&&(r=n,c(r.object))}function D(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:L,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function am(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)e.update(g,i,d[x])}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lm(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(T){return!(T!==_i&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ni&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yi&&!L)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:P,maxSamples:A}}function cm(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new cn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:i,v=M*4;let y=p.clippingState||null;l.value=y,y=h(g,d,v,f);for(let P=0;P!==v;++P)y[P]=e[P];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function hm(s){let t=new WeakMap;function e(o,a){return a===ta?o.mapping=Kn:a===ea&&(o.mapping=Zn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ta||a===ea)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Md(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Yr extends fh{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wn=4,Fl=[.125,.215,.35,.446,.526,.582],dn=20,Eo=new Yr,Ol=new ot;let Co=null,Ro=0,Po=0,Lo=!1;const hn=(1+Math.sqrt(5))/2,Un=1/hn,Bl=[new C(-hn,Un,0),new C(hn,Un,0),new C(-Un,0,hn),new C(Un,0,hn),new C(0,hn,-Un),new C(0,hn,Un),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Pa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Co=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Co,Ro,Po),this._renderer.xr.enabled=Lo,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Kn||t.mapping===Zn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Co=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:si,format:_i,colorSpace:Fi,depthBuffer:!1},n=kl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=um(r)),this._blurMaterial=dm(r,t,e)}return n}_compileMaterial(t){const e=new k(this._lodPlanes[0],t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,i,n){const a=new ai(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ol),h.toneMapping=Zi,h.autoClear=!1;const f=new be({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new k(new Kt,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Ol),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;sr(n,M*v,p>2?v:0,v,v),h.setRenderTarget(n),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Kn||t.mapping===Zn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;sr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Eo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bl[(n-r-1)%Bl.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new k(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*dn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):dn;m>dn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dn}`);const p=[];let M=0;for(let T=0;T<dn;++T){const L=T/x,D=Math.exp(-L*L/2);p.push(D),T===0?M+=D:T<m&&(M+=2*D)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const y=this._sizeLods[n],P=3*y*(n>v-Wn?n-v+Wn:0),A=4*(this._cubeSize-y);sr(e,P,A,3*y,2*y),l.setRenderTarget(e),l.render(u,Eo)}}function um(s){const t=[],e=[],i=[];let n=s;const r=s-Wn+1+Fl.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>s-Wn?l=Fl[o-s+Wn-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,L=A>2?0:-1,D=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];M.set(D,x*g*A),v.set(d,m*g*A);const _=[A,A,A,A,A,A];y.set(_,p*g*A)}const P=new te;P.setAttribute("position",new Se(M,x)),P.setAttribute("uv",new Se(v,m)),P.setAttribute("faceIndex",new Se(y,p)),t.push(P),n>Wn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kl(s,t,e){const i=new Ve(s,t,e);return i.texture.mapping=Xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sr(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function dm(s,t,e){const i=new Float32Array(dn),n=new C(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Hl(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Gl(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Za(){return`

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
	`}function fm(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ta||l===ea,h=l===Kn||l===Zn;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Pa(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Pa(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function pm(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Tr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function mm(s,t,e,i){const n={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete n[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const M=f.array;x=f.version;for(let v=0,y=M.length;v<y;v+=3){const P=M[v+0],A=M[v+1],T=M[v+2];d.push(P,A,A,T,T,P)}}else if(g!==void 0){const M=g.array;x=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const P=v+0,A=v+1,T=v+2;d.push(P,A,A,T,T,P)}}else return;const m=new(sh(d)?uh:hh)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function gm(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<x.length;M++)e.update(p,i,x[M])}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function vm(s,t,e){const i=new WeakMap,n=new _e;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let _=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let P=a.attributes.position.count*y,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const T=new Float32Array(P*A*4*u),L=new oh(T,P,A,u);L.type=yi,L.needsUpdate=!0;const D=y*4;for(let S=0;S<u;S++){const N=p[S],F=M[S],V=v[S],q=P*A*4*S;for(let B=0;B<N.count;B++){const $=B*D;g===!0&&(n.fromBufferAttribute(N,B),T[q+$+0]=n.x,T[q+$+1]=n.y,T[q+$+2]=n.z,T[q+$+3]=0),x===!0&&(n.fromBufferAttribute(F,B),T[q+$+4]=n.x,T[q+$+5]=n.y,T[q+$+6]=n.z,T[q+$+7]=0),m===!0&&(n.fromBufferAttribute(V,B),T[q+$+8]=n.x,T[q+$+9]=n.y,T[q+$+10]=n.z,T[q+$+11]=V.itemSize===4?n.w:1)}}d={count:u,texture:L,size:new Q(P,A)},i.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function _m(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class gh extends Ie{constructor(t,e,i,n,r,o,a,l,c,h=qn){if(h!==qn&&h!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===qn&&(i=mn),i===void 0&&h===Qn&&(i=Jn),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xh=new Ie,Vl=new gh(1,1),vh=new oh,_h=new rd,Mh=new ph,Wl=[],Xl=[],ql=new Float32Array(16),Yl=new Float32Array(9),jl=new Float32Array(4);function rs(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Wl[n];if(r===void 0&&(r=new Float32Array(n),Wl[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function jr(s,t){let e=Xl[t];e===void 0&&(e=new Int32Array(t),Xl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Mm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function wm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function Sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function bm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;jl.set(i),s.uniformMatrix2fv(this.addr,!1,jl),Re(e,i)}}function Am(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;Yl.set(i),s.uniformMatrix3fv(this.addr,!1,Yl),Re(e,i)}}function Tm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;ql.set(i),s.uniformMatrix4fv(this.addr,!1,ql),Re(e,i)}}function Em(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function Rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function Pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function Lm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function Im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function Um(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Vl.compareFunction=nh,r=Vl):r=xh,e.setTexture2D(t||r,n)}function Nm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||_h,n)}function Fm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Mh,n)}function Om(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||vh,n)}function Bm(s){switch(s){case 5126:return Mm;case 35664:return ym;case 35665:return wm;case 35666:return Sm;case 35674:return bm;case 35675:return Am;case 35676:return Tm;case 5124:case 35670:return Em;case 35667:case 35671:return Cm;case 35668:case 35672:return Rm;case 35669:case 35673:return Pm;case 5125:return Lm;case 36294:return Dm;case 36295:return Im;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}function km(s,t){s.uniform1fv(this.addr,t)}function Hm(s,t){const e=rs(t,this.size,2);s.uniform2fv(this.addr,e)}function Gm(s,t){const e=rs(t,this.size,3);s.uniform3fv(this.addr,e)}function Vm(s,t){const e=rs(t,this.size,4);s.uniform4fv(this.addr,e)}function Wm(s,t){const e=rs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xm(s,t){const e=rs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qm(s,t){const e=rs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ym(s,t){s.uniform1iv(this.addr,t)}function jm(s,t){s.uniform2iv(this.addr,t)}function Km(s,t){s.uniform3iv(this.addr,t)}function Zm(s,t){s.uniform4iv(this.addr,t)}function Jm(s,t){s.uniform1uiv(this.addr,t)}function Qm(s,t){s.uniform2uiv(this.addr,t)}function $m(s,t){s.uniform3uiv(this.addr,t)}function t0(s,t){s.uniform4uiv(this.addr,t)}function e0(s,t,e){const i=this.cache,n=t.length,r=jr(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||xh,r[o])}function i0(s,t,e){const i=this.cache,n=t.length,r=jr(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||_h,r[o])}function n0(s,t,e){const i=this.cache,n=t.length,r=jr(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Mh,r[o])}function s0(s,t,e){const i=this.cache,n=t.length,r=jr(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||vh,r[o])}function r0(s){switch(s){case 5126:return km;case 35664:return Hm;case 35665:return Gm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return jm;case 35668:case 35672:return Km;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return Qm;case 36295:return $m;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return s0}}class o0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Bm(e.type)}}class a0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r0(e.type)}}class l0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const Do=/(\w+)(\])?(\[|\.)?/g;function Kl(s,t){s.seq.push(t),s.map[t.id]=t}function c0(s,t,e){const i=s.name,n=i.length;for(Do.lastIndex=0;;){const r=Do.exec(i),o=Do.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Kl(e,c===void 0?new o0(a,s,t):new a0(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new l0(a),Kl(e,u)),e=u}}}class Er{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);c0(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function Zl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const h0=37297;let u0=0;function d0(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function f0(s){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(s);let i;switch(t===e?i="":t===zr&&e===Ir?i="LinearDisplayP3ToLinearSRGB":t===Ir&&e===zr&&(i="LinearSRGBToLinearDisplayP3"),s){case Fi:case qr:return[i,"LinearTransferOETF"];case mi:case Ya:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Jl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+d0(s.getShaderSource(t),o)}else return n}function p0(s,t){const e=f0(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function m0(s,t){let e;switch(t){case Hc:e="Linear";break;case Gc:e="Reinhard";break;case Vc:e="Cineon";break;case Ba:e="ACESFilmic";break;case Wc:e="AgX";break;case Xc:e="Neutral";break;case wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rr=new C;function g0(){ne.getLuminanceCoefficients(rr);const s=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function v0(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _0(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ms(s){return s!==""}function Ql(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $l(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(s){return s.replace(M0,w0)}const y0=new Map;function w0(s,t){let e=Vt[t];if(e===void 0){const i=y0.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return La(e)}const S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(s){return s.replace(S0,b0)}function b0(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function ec(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function A0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function T0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Kn:case Zn:t="ENVMAP_TYPE_CUBE";break;case Xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zn:t="ENVMAP_MODE_REFRACTION";break}return t}function C0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kc:t="ENVMAP_BLENDING_MULTIPLY";break;case Mu:t="ENVMAP_BLENDING_MIX";break;case yu:t="ENVMAP_BLENDING_ADD";break}return t}function R0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function P0(s,t,e,i){const n=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=A0(e),c=T0(e),h=E0(e),u=C0(e),d=R0(e),f=x0(e),g=v0(r),x=n.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(m=[ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?m0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,p0("linearToOutputTexel",e.outputColorSpace),g0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),o=La(o),o=Ql(o,e),o=$l(o,e),a=La(a),a=Ql(a,e),a=$l(a,e),o=tc(o),a=tc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,y=M+p+a,P=Zl(n,n.VERTEX_SHADER,v),A=Zl(n,n.FRAGMENT_SHADER,y);n.attachShader(x,P),n.attachShader(x,A),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function T(S){if(s.debug.checkShaderErrors){const N=n.getProgramInfoLog(x).trim(),F=n.getShaderInfoLog(P).trim(),V=n.getShaderInfoLog(A).trim();let q=!0,B=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,P,A);else{const $=Jl(n,P,"vertex"),W=Jl(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+$+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||V==="")&&(B=!1);B&&(S.diagnostics={runnable:q,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}n.deleteShader(P),n.deleteShader(A),L=new Er(n,x),D=_0(n,x)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let D;this.getAttributes=function(){return D===void 0&&T(this),D};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(x,h0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=u0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let L0=0;class D0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new I0(t),e.set(t,i)),i}}class I0{constructor(t){this.id=L0++,this.code=t,this.usedTimes=0}}function z0(s,t,e,i,n,r,o){const a=new lh,l=new D0,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.reverseDepthBuffer,f=n.vertexTextures;let g=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,S,N,F,V){const q=F.fog,B=V.geometry,$=_.isMeshStandardMaterial?F.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||$),Y=W&&W.mapping===Xr?W.image.height:null,j=x[_.type];_.precision!==null&&(g=n.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const lt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,It=lt!==void 0?lt.length:0;let qt=0;B.morphAttributes.position!==void 0&&(qt=1),B.morphAttributes.normal!==void 0&&(qt=2),B.morphAttributes.color!==void 0&&(qt=3);let K,st,bt,pt;if(j){const je=Mi[j];K=je.vertexShader,st=je.fragmentShader}else K=_.vertexShader,st=_.fragmentShader,l.update(_),bt=l.getVertexShaderID(_),pt=l.getFragmentShaderID(_);const Nt=s.getRenderTarget(),Ut=V.isInstancedMesh===!0,Ht=V.isBatchedMesh===!0,jt=!!_.map,tt=!!_.matcap,R=!!W,ht=!!_.aoMap,ct=!!_.lightMap,nt=!!_.bumpMap,ut=!!_.normalMap,Pt=!!_.displacementMap,_t=!!_.emissiveMap,E=!!_.metalnessMap,w=!!_.roughnessMap,O=_.anisotropy>0,Z=_.clearcoat>0,et=_.dispersion>0,J=_.iridescence>0,Et=_.sheen>0,dt=_.transmission>0,wt=O&&!!_.anisotropyMap,Zt=Z&&!!_.clearcoatMap,rt=Z&&!!_.clearcoatNormalMap,St=Z&&!!_.clearcoatRoughnessMap,Bt=J&&!!_.iridescenceMap,kt=J&&!!_.iridescenceThicknessMap,At=Et&&!!_.sheenColorMap,Jt=Et&&!!_.sheenRoughnessMap,Gt=!!_.specularMap,de=!!_.specularColorMap,I=!!_.specularIntensityMap,Mt=dt&&!!_.transmissionMap,X=dt&&!!_.thicknessMap,it=!!_.gradientMap,xt=!!_.alphaMap,yt=_.alphaTest>0,Qt=!!_.alphaHash,Ae=!!_.extensions;let Ye=Zi;_.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const ie={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:st,defines:_.defines,customVertexShaderID:bt,customFragmentShaderID:pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ht,batchingColor:Ht&&V._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&V.instanceColor!==null,instancingMorph:Ut&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Nt===null?s.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:Fi,alphaToCoverage:!!_.alphaToCoverage,map:jt,matcap:tt,envMap:R,envMapMode:R&&W.mapping,envMapCubeUVHeight:Y,aoMap:ht,lightMap:ct,bumpMap:nt,normalMap:ut,displacementMap:f&&Pt,emissiveMap:_t,normalMapObjectSpace:ut&&_.normalMapType===Tu,normalMapTangentSpace:ut&&_.normalMapType===ih,metalnessMap:E,roughnessMap:w,anisotropy:O,anisotropyMap:wt,clearcoat:Z,clearcoatMap:Zt,clearcoatNormalMap:rt,clearcoatRoughnessMap:St,dispersion:et,iridescence:J,iridescenceMap:Bt,iridescenceThicknessMap:kt,sheen:Et,sheenColorMap:At,sheenRoughnessMap:Jt,specularMap:Gt,specularColorMap:de,specularIntensityMap:I,transmission:dt,transmissionMap:Mt,thicknessMap:X,gradientMap:it,opaque:_.transparent===!1&&_.blending===wi&&_.alphaToCoverage===!1,alphaMap:xt,alphaTest:yt,alphaHash:Qt,combine:_.combine,mapUv:jt&&m(_.map.channel),aoMapUv:ht&&m(_.aoMap.channel),lightMapUv:ct&&m(_.lightMap.channel),bumpMapUv:nt&&m(_.bumpMap.channel),normalMapUv:ut&&m(_.normalMap.channel),displacementMapUv:Pt&&m(_.displacementMap.channel),emissiveMapUv:_t&&m(_.emissiveMap.channel),metalnessMapUv:E&&m(_.metalnessMap.channel),roughnessMapUv:w&&m(_.roughnessMap.channel),anisotropyMapUv:wt&&m(_.anisotropyMap.channel),clearcoatMapUv:Zt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:At&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&m(_.sheenRoughnessMap.channel),specularMapUv:Gt&&m(_.specularMap.channel),specularColorMapUv:de&&m(_.specularColorMap.channel),specularIntensityMapUv:I&&m(_.specularIntensityMap.channel),transmissionMapUv:Mt&&m(_.transmissionMap.channel),thicknessMapUv:X&&m(_.thicknessMap.channel),alphaMapUv:xt&&m(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ut||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(jt||xt),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:qt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:jt&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pe,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ae&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&_.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function M(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)S.push(N),S.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(v(S,_),y(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function v(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){const S=x[_.type];let N;if(S){const F=Mi[S];N=Ji.clone(F.uniforms)}else N=_.uniforms;return N}function A(_,S){let N;for(let F=0,V=h.length;F<V;F++){const q=h[F];if(q.cacheKey===S){N=q,++N.usedTimes;break}}return N===void 0&&(N=new P0(s,S,_,r),h.push(N)),N}function T(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function L(_){l.remove(_)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:P,acquireProgram:A,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:D}}function U0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function N0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ic(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nc(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||N0),i.length>1&&i.sort(d||ic),n.length>1&&n.sort(d||ic)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function F0(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new nc,s.set(i,[o])):n>=r.length?(o=new nc,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function O0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new ot};break;case"SpotLight":e={position:new C,direction:new C,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function B0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let k0=0;function H0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function G0(s){const t=new O0,e=B0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const n=new C,r=new he,o=new he;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,v=0,y=0,P=0,A=0,T=0;c.sort(H0);for(let D=0,_=c.length;D<_;D++){const S=c[D],N=S.color,F=S.intensity,V=S.distance,q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(S.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(S.sh.coefficients[B],F);T++}else if(S.isDirectionalLight){const B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const $=S.shadow,W=e.get(S);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=S.shadow.matrix,M++}i.directional[f]=B,f++}else if(S.isSpotLight){const B=t.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(N).multiplyScalar(F),B.distance=V,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,i.spot[x]=B;const $=S.shadow;if(S.map&&(i.spotLightMap[P]=S.map,P++,$.updateMatrices(S),S.castShadow&&A++),i.spotLightMatrix[x]=$.matrix,S.castShadow){const W=e.get(S);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=q,y++}x++}else if(S.isRectAreaLight){const B=t.get(S);B.color.copy(N).multiplyScalar(F),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=B,m++}else if(S.isPointLight){const B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),B.distance=S.distance,B.decay=S.decay,S.castShadow){const $=S.shadow,W=e.get(S);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=S.shadow.matrix,v++}i.point[g]=B,g++}else if(S.isHemisphereLight){const B=t.get(S);B.skyColor.copy(S.color).multiplyScalar(F),B.groundColor.copy(S.groundColor).multiplyScalar(F),i.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==v||L.numSpotShadows!==y||L.numSpotMaps!==P||L.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=v,L.numSpotShadows=y,L.numSpotMaps=P,L.numLightProbes=T,i.version=k0++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const v=c[p];if(v.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),u++}else if(v.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function sc(s){const t=new G0(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function V0(s){let t=new WeakMap;function e(n,r=0){const o=t.get(n);let a;return o===void 0?(a=new sc(s),t.set(n,[a])):r>=o.length?(a=new sc(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class W0 extends _n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class X0 extends _n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
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
}`;function j0(s,t,e){let i=new Ka;const n=new Q,r=new Q,o=new _e,a=new W0({depthPacking:Au}),l=new X0,c={},h=e.maxTextureSize,u={[Qi]:Ge,[Ge]:Qi,[pe]:pe},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:q0,fragmentShader:Y0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new te;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new k(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let p=this.type;this.render=function(A,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const D=s.getRenderTarget(),_=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Ui),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==Di&&this.type===Di,V=p===Di&&this.type!==Di;for(let q=0,B=A.length;q<B;q++){const $=A[q],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const Y=W.getFrameExtents();if(n.multiply(Y),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Y.x),n.x=r.x*Y.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Y.y),n.y=r.y*Y.y,W.mapSize.y=r.y)),W.map===null||F===!0||V===!0){const lt=this.type!==Di?{minFilter:He,magFilter:He}:{};W.map!==null&&W.map.dispose(),W.map=new Ve(n.x,n.y,lt),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const j=W.getViewportCount();for(let lt=0;lt<j;lt++){const It=W.getViewport(lt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),N.viewport(o),W.updateMatrices($,lt),i=W.getFrustum(),y(T,L,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Di&&M(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(D,_,S)};function M(A,T){const L=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ve(n.x,n.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,L,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,L,f,x,null)}function v(A,T,L,D){let _=null;const S=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)_=S;else if(_=L.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=_.uuid,F=T.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let q=V[F];q===void 0&&(q=_.clone(),V[F]=q,T.addEventListener("dispose",P)),_=q}if(_.visible=T.visible,_.wireframe=T.wireframe,D===Di?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=s.properties.get(_);N.light=L}return _}function y(A,T,L,D,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Di)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const F=t.update(A),V=A.material;if(Array.isArray(V)){const q=F.groups;for(let B=0,$=q.length;B<$;B++){const W=q[B],Y=V[W.materialIndex];if(Y&&Y.visible){const j=v(A,Y,D,_);A.onBeforeShadow(s,A,T,L,F,j,W),s.renderBufferDirect(L,null,F,j,A,W),A.onAfterShadow(s,A,T,L,F,j,W)}}}else if(V.visible){const q=v(A,V,D,_);A.onBeforeShadow(s,A,T,L,F,q,null),s.renderBufferDirect(L,null,F,q,A,null),A.onAfterShadow(s,A,T,L,F,q,null)}}const N=A.children;for(let F=0,V=N.length;F<V;F++)y(N[F],T,L,D,_)}function P(A){A.target.removeEventListener("dispose",P);for(const L in c){const D=c[L],_=A.target.uuid;_ in D&&(D[_].dispose(),delete D[_])}}}const K0={[Yo]:jo,[Ko]:Qo,[Zo]:$o,[jn]:Jo,[jo]:Yo,[Qo]:Ko,[$o]:Zo,[Jo]:jn};function Z0(s){function t(){let I=!1;const Mt=new _e;let X=null;const it=new _e(0,0,0,0);return{setMask:function(xt){X!==xt&&!I&&(s.colorMask(xt,xt,xt,xt),X=xt)},setLocked:function(xt){I=xt},setClear:function(xt,yt,Qt,Ae,Ye){Ye===!0&&(xt*=Ae,yt*=Ae,Qt*=Ae),Mt.set(xt,yt,Qt,Ae),it.equals(Mt)===!1&&(s.clearColor(xt,yt,Qt,Ae),it.copy(Mt))},reset:function(){I=!1,X=null,it.set(-1,0,0,0)}}}function e(){let I=!1,Mt=!1,X=null,it=null,xt=null;return{setReversed:function(yt){Mt=yt},setTest:function(yt){yt?bt(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(yt){X!==yt&&!I&&(s.depthMask(yt),X=yt)},setFunc:function(yt){if(Mt&&(yt=K0[yt]),it!==yt){switch(yt){case Yo:s.depthFunc(s.NEVER);break;case jo:s.depthFunc(s.ALWAYS);break;case Ko:s.depthFunc(s.LESS);break;case jn:s.depthFunc(s.LEQUAL);break;case Zo:s.depthFunc(s.EQUAL);break;case Jo:s.depthFunc(s.GEQUAL);break;case Qo:s.depthFunc(s.GREATER);break;case $o:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=yt}},setLocked:function(yt){I=yt},setClear:function(yt){xt!==yt&&(s.clearDepth(yt),xt=yt)},reset:function(){I=!1,X=null,it=null,xt=null}}}function i(){let I=!1,Mt=null,X=null,it=null,xt=null,yt=null,Qt=null,Ae=null,Ye=null;return{setTest:function(ie){I||(ie?bt(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(ie){Mt!==ie&&!I&&(s.stencilMask(ie),Mt=ie)},setFunc:function(ie,je,Ti){(X!==ie||it!==je||xt!==Ti)&&(s.stencilFunc(ie,je,Ti),X=ie,it=je,xt=Ti)},setOp:function(ie,je,Ti){(yt!==ie||Qt!==je||Ae!==Ti)&&(s.stencilOp(ie,je,Ti),yt=ie,Qt=je,Ae=Ti)},setLocked:function(ie){I=ie},setClear:function(ie){Ye!==ie&&(s.clearStencil(ie),Ye=ie)},reset:function(){I=!1,Mt=null,X=null,it=null,xt=null,yt=null,Qt=null,Ae=null,Ye=null}}}const n=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,M=null,v=null,y=null,P=null,A=new ot(0,0,0),T=0,L=!1,D=null,_=null,S=null,N=null,F=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,B=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),q=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=B>=2);let W=null,Y={};const j=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),It=new _e().fromArray(j),qt=new _e().fromArray(lt);function K(I,Mt,X,it){const xt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(I,yt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<X;Qt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(Mt+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return yt}const st={};st[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),st[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),st[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),o.setClear(0),bt(s.DEPTH_TEST),r.setFunc(jn),ct(!1),nt(pl),bt(s.CULL_FACE),R(Ui);function bt(I){c[I]!==!0&&(s.enable(I),c[I]=!0)}function pt(I){c[I]!==!1&&(s.disable(I),c[I]=!1)}function Nt(I,Mt){return h[I]!==Mt?(s.bindFramebuffer(I,Mt),h[I]=Mt,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Mt),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Ut(I,Mt){let X=d,it=!1;if(I){X=u.get(Mt),X===void 0&&(X=[],u.set(Mt,X));const xt=I.textures;if(X.length!==xt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Qt=xt.length;yt<Qt;yt++)X[yt]=s.COLOR_ATTACHMENT0+yt;X.length=xt.length,it=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,it=!0);it&&s.drawBuffers(X)}function Ht(I){return f!==I?(s.useProgram(I),f=I,!0):!1}const jt={[un]:s.FUNC_ADD,[nu]:s.FUNC_SUBTRACT,[su]:s.FUNC_REVERSE_SUBTRACT};jt[ru]=s.MIN,jt[ou]=s.MAX;const tt={[au]:s.ZERO,[lu]:s.ONE,[cu]:s.SRC_COLOR,[Xo]:s.SRC_ALPHA,[mu]:s.SRC_ALPHA_SATURATE,[fu]:s.DST_COLOR,[uu]:s.DST_ALPHA,[hu]:s.ONE_MINUS_SRC_COLOR,[qo]:s.ONE_MINUS_SRC_ALPHA,[pu]:s.ONE_MINUS_DST_COLOR,[du]:s.ONE_MINUS_DST_ALPHA,[gu]:s.CONSTANT_COLOR,[xu]:s.ONE_MINUS_CONSTANT_COLOR,[vu]:s.CONSTANT_ALPHA,[_u]:s.ONE_MINUS_CONSTANT_ALPHA};function R(I,Mt,X,it,xt,yt,Qt,Ae,Ye,ie){if(I===Ui){g===!0&&(pt(s.BLEND),g=!1);return}if(g===!1&&(bt(s.BLEND),g=!0),I!==iu){if(I!==x||ie!==L){if((m!==un||v!==un)&&(s.blendEquation(s.FUNC_ADD),m=un,v=un),ie)switch(I){case wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case De:s.blendFunc(s.ONE,s.ONE);break;case ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case De:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,M=null,y=null,P=null,A.set(0,0,0),T=0,x=I,L=ie}return}xt=xt||Mt,yt=yt||X,Qt=Qt||it,(Mt!==m||xt!==v)&&(s.blendEquationSeparate(jt[Mt],jt[xt]),m=Mt,v=xt),(X!==p||it!==M||yt!==y||Qt!==P)&&(s.blendFuncSeparate(tt[X],tt[it],tt[yt],tt[Qt]),p=X,M=it,y=yt,P=Qt),(Ae.equals(A)===!1||Ye!==T)&&(s.blendColor(Ae.r,Ae.g,Ae.b,Ye),A.copy(Ae),T=Ye),x=I,L=!1}function ht(I,Mt){I.side===pe?pt(s.CULL_FACE):bt(s.CULL_FACE);let X=I.side===Ge;Mt&&(X=!X),ct(X),I.blending===wi&&I.transparent===!1?R(Ui):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),n.setMask(I.colorWrite);const it=I.stencilWrite;o.setTest(it),it&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?bt(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(I){D!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),D=I)}function nt(I){I!==tu?(bt(s.CULL_FACE),I!==_&&(I===pl?s.cullFace(s.BACK):I===eu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),_=I}function ut(I){I!==S&&(q&&s.lineWidth(I),S=I)}function Pt(I,Mt,X){I?(bt(s.POLYGON_OFFSET_FILL),(N!==Mt||F!==X)&&(s.polygonOffset(Mt,X),N=Mt,F=X)):pt(s.POLYGON_OFFSET_FILL)}function _t(I){I?bt(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function E(I){I===void 0&&(I=s.TEXTURE0+V-1),W!==I&&(s.activeTexture(I),W=I)}function w(I,Mt,X){X===void 0&&(W===null?X=s.TEXTURE0+V-1:X=W);let it=Y[X];it===void 0&&(it={type:void 0,texture:void 0},Y[X]=it),(it.type!==I||it.texture!==Mt)&&(W!==X&&(s.activeTexture(X),W=X),s.bindTexture(I,Mt||st[I]),it.type=I,it.texture=Mt)}function O(){const I=Y[W];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(I){It.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),It.copy(I))}function At(I){qt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),qt.copy(I))}function Jt(I,Mt){let X=l.get(Mt);X===void 0&&(X=new WeakMap,l.set(Mt,X));let it=X.get(I);it===void 0&&(it=s.getUniformBlockIndex(Mt,I.name),X.set(I,it))}function Gt(I,Mt){const it=l.get(Mt).get(I);a.get(Mt)!==it&&(s.uniformBlockBinding(Mt,it,I.__bindingPointIndex),a.set(Mt,it))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},W=null,Y={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,M=null,v=null,y=null,P=null,A=new ot(0,0,0),T=0,L=!1,D=null,_=null,S=null,N=null,F=null,It.set(0,0,s.canvas.width,s.canvas.height),qt.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),o.reset()}return{buffers:{color:n,depth:r,stencil:o},enable:bt,disable:pt,bindFramebuffer:Nt,drawBuffers:Ut,useProgram:Ht,setBlending:R,setMaterial:ht,setFlipSided:ct,setCullFace:nt,setLineWidth:ut,setPolygonOffset:Pt,setScissorTest:_t,activeTexture:E,bindTexture:w,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:St,texImage3D:Bt,updateUBOMapping:Jt,uniformBlockBinding:Gt,texStorage2D:Zt,texStorage3D:rt,texSubImage2D:J,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:wt,scissor:kt,viewport:At,reset:de}}function rc(s,t,e,i){const n=J0(i);switch(e){case Zc:return s*t;case Qc:return s*t;case $c:return s*t*2;case Va:return s*t/n.components*n.byteLength;case Wa:return s*t/n.components*n.byteLength;case th:return s*t*2/n.components*n.byteLength;case Xa:return s*t*2/n.components*n.byteLength;case Jc:return s*t*3/n.components*n.byteLength;case _i:return s*t*4/n.components*n.byteLength;case qa:return s*t*4/n.components*n.byteLength;case yr:case wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sr:case br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sa:case oa:return Math.max(s,16)*Math.max(t,8)/4;case na:case ra:return Math.max(s,8)*Math.max(t,8)/2;case aa:case la:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _a:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case wa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ar:case ba:case Aa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case eh:case Ta:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ea:case Ca:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J0(s){switch(s){case Ni:case Yc:return{byteLength:1,components:1};case Es:case jc:case si:return{byteLength:2,components:1};case Ha:case Ga:return{byteLength:2,components:4};case mn:case ka:case yi:return{byteLength:4,components:1};case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Q0(s,t,e,i,n,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,w){return f?new OffscreenCanvas(E,w):Fr("canvas")}function x(E,w,O){let Z=1;const et=_t(E);if((et.width>O||et.height>O)&&(Z=O/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const J=Math.floor(Z*et.width),Et=Math.floor(Z*et.height);u===void 0&&(u=g(J,Et));const dt=w?g(J,Et):u;return dt.width=J,dt.height=Et,dt.getContext("2d").drawImage(E,0,0,J,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Et+")."),dt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==He&&E.minFilter!==ke}function p(E){s.generateMipmap(E)}function M(E,w,O,Z,et=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=w;if(w===s.RED&&(O===s.FLOAT&&(J=s.R32F),O===s.HALF_FLOAT&&(J=s.R16F),O===s.UNSIGNED_BYTE&&(J=s.R8)),w===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.R8UI),O===s.UNSIGNED_SHORT&&(J=s.R16UI),O===s.UNSIGNED_INT&&(J=s.R32UI),O===s.BYTE&&(J=s.R8I),O===s.SHORT&&(J=s.R16I),O===s.INT&&(J=s.R32I)),w===s.RG&&(O===s.FLOAT&&(J=s.RG32F),O===s.HALF_FLOAT&&(J=s.RG16F),O===s.UNSIGNED_BYTE&&(J=s.RG8)),w===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RG8UI),O===s.UNSIGNED_SHORT&&(J=s.RG16UI),O===s.UNSIGNED_INT&&(J=s.RG32UI),O===s.BYTE&&(J=s.RG8I),O===s.SHORT&&(J=s.RG16I),O===s.INT&&(J=s.RG32I)),w===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RGB8UI),O===s.UNSIGNED_SHORT&&(J=s.RGB16UI),O===s.UNSIGNED_INT&&(J=s.RGB32UI),O===s.BYTE&&(J=s.RGB8I),O===s.SHORT&&(J=s.RGB16I),O===s.INT&&(J=s.RGB32I)),w===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),O===s.UNSIGNED_INT&&(J=s.RGBA32UI),O===s.BYTE&&(J=s.RGBA8I),O===s.SHORT&&(J=s.RGBA16I),O===s.INT&&(J=s.RGBA32I)),w===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),w===s.RGBA){const Et=et?Dr:ne.getTransfer(Z);O===s.FLOAT&&(J=s.RGBA32F),O===s.HALF_FLOAT&&(J=s.RGBA16F),O===s.UNSIGNED_BYTE&&(J=Et===fe?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(E,w){let O;return E?w===null||w===mn||w===Jn?O=s.DEPTH24_STENCIL8:w===yi?O=s.DEPTH32F_STENCIL8:w===Es&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===mn||w===Jn?O=s.DEPTH_COMPONENT24:w===yi?O=s.DEPTH_COMPONENT32F:w===Es&&(O=s.DEPTH_COMPONENT16),O}function y(E,w){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==He&&E.minFilter!==ke?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function P(E){const w=E.target;w.removeEventListener("dispose",P),T(w),w.isVideoTexture&&h.delete(w)}function A(E){const w=E.target;w.removeEventListener("dispose",A),D(w)}function T(E){const w=i.get(E);if(w.__webglInit===void 0)return;const O=E.source,Z=d.get(O);if(Z){const et=Z[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&L(E),Object.keys(Z).length===0&&d.delete(O)}i.remove(E)}function L(E){const w=i.get(E);s.deleteTexture(w.__webglTexture);const O=E.source,Z=d.get(O);delete Z[w.__cacheKey],o.memory.textures--}function D(E){const w=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let et=0;et<w.__webglFramebuffer[Z].length;et++)s.deleteFramebuffer(w.__webglFramebuffer[Z][et]);else s.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[Z]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const O=E.textures;for(let Z=0,et=O.length;Z<et;Z++){const J=i.get(O[Z]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(O[Z])}i.remove(E)}let _=0;function S(){_=0}function N(){const E=_;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),_+=1,E}function F(E){const w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.colorSpace),w.join()}function V(E,w){const O=i.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(O,E,w);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+w)}function q(E,w){const O=i.get(E);if(E.version>0&&O.__version!==E.version){qt(O,E,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+w)}function B(E,w){const O=i.get(E);if(E.version>0&&O.__version!==E.version){qt(O,E,w);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+w)}function $(E,w){const O=i.get(E);if(E.version>0&&O.__version!==E.version){K(O,E,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+w)}const W={[Lr]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[ia]:s.MIRRORED_REPEAT},Y={[He]:s.NEAREST,[Su]:s.NEAREST_MIPMAP_NEAREST,[Bs]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[so]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},j={[Eu]:s.NEVER,[Iu]:s.ALWAYS,[Cu]:s.LESS,[nh]:s.LEQUAL,[Ru]:s.EQUAL,[Du]:s.GEQUAL,[Pu]:s.GREATER,[Lu]:s.NOTEQUAL};function lt(E,w){if(w.type===yi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ke||w.magFilter===so||w.magFilter===Bs||w.magFilter===ji||w.minFilter===ke||w.minFilter===so||w.minFilter===Bs||w.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,W[w.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,W[w.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,W[w.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,Y[w.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===He||w.minFilter!==Bs&&w.minFilter!==ji||w.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function It(E,w){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",P));const Z=w.source;let et=d.get(Z);et===void 0&&(et={},d.set(Z,et));const J=F(w);if(J!==E.__cacheKey){et[J]===void 0&&(et[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),et[J].usedTimes++;const Et=et[E.__cacheKey];Et!==void 0&&(et[E.__cacheKey].usedTimes--,Et.usedTimes===0&&L(w)),E.__cacheKey=J,E.__webglTexture=et[J].texture}return O}function qt(E,w,O){let Z=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=s.TEXTURE_3D);const et=It(E,w),J=w.source;e.bindTexture(Z,E.__webglTexture,s.TEXTURE0+O);const Et=i.get(J);if(J.version!==Et.__version||et===!0){e.activeTexture(s.TEXTURE0+O);const dt=ne.getPrimaries(ne.workingColorSpace),wt=w.colorSpace===Yi?null:ne.getPrimaries(w.colorSpace),Zt=w.colorSpace===Yi||dt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let rt=x(w.image,!1,n.maxTextureSize);rt=Pt(w,rt);const St=r.convert(w.format,w.colorSpace),Bt=r.convert(w.type);let kt=M(w.internalFormat,St,Bt,w.colorSpace,w.isVideoTexture);lt(Z,w);let At;const Jt=w.mipmaps,Gt=w.isVideoTexture!==!0,de=Et.__version===void 0||et===!0,I=J.dataReady,Mt=y(w,rt);if(w.isDepthTexture)kt=v(w.format===Qn,w.type),de&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,kt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,kt,rt.width,rt.height,0,St,Bt,null));else if(w.isDataTexture)if(Jt.length>0){Gt&&de&&e.texStorage2D(s.TEXTURE_2D,Mt,kt,Jt[0].width,Jt[0].height);for(let X=0,it=Jt.length;X<it;X++)At=Jt[X],Gt?I&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,At.width,At.height,St,Bt,At.data):e.texImage2D(s.TEXTURE_2D,X,kt,At.width,At.height,0,St,Bt,At.data);w.generateMipmaps=!1}else Gt?(de&&e.texStorage2D(s.TEXTURE_2D,Mt,kt,rt.width,rt.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,St,Bt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,kt,rt.width,rt.height,0,St,Bt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Gt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,kt,Jt[0].width,Jt[0].height,rt.depth);for(let X=0,it=Jt.length;X<it;X++)if(At=Jt[X],w.format!==_i)if(St!==null)if(Gt){if(I)if(w.layerUpdates.size>0){const xt=rc(At.width,At.height,w.format,w.type);for(const yt of w.layerUpdates){const Qt=At.data.subarray(yt*xt/At.data.BYTES_PER_ELEMENT,(yt+1)*xt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,yt,At.width,At.height,1,St,Qt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,At.width,At.height,rt.depth,St,At.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,kt,At.width,At.height,rt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,At.width,At.height,rt.depth,St,Bt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,kt,At.width,At.height,rt.depth,0,St,Bt,At.data)}else{Gt&&de&&e.texStorage2D(s.TEXTURE_2D,Mt,kt,Jt[0].width,Jt[0].height);for(let X=0,it=Jt.length;X<it;X++)At=Jt[X],w.format!==_i?St!==null?Gt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,At.width,At.height,St,At.data):e.compressedTexImage2D(s.TEXTURE_2D,X,kt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?I&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,At.width,At.height,St,Bt,At.data):e.texImage2D(s.TEXTURE_2D,X,kt,At.width,At.height,0,St,Bt,At.data)}else if(w.isDataArrayTexture)if(Gt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,kt,rt.width,rt.height,rt.depth),I)if(w.layerUpdates.size>0){const X=rc(rt.width,rt.height,w.format,w.type);for(const it of w.layerUpdates){const xt=rt.data.subarray(it*X/rt.data.BYTES_PER_ELEMENT,(it+1)*X/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,rt.width,rt.height,1,St,Bt,xt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Bt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,rt.width,rt.height,rt.depth,0,St,Bt,rt.data);else if(w.isData3DTexture)Gt?(de&&e.texStorage3D(s.TEXTURE_3D,Mt,kt,rt.width,rt.height,rt.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Bt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,kt,rt.width,rt.height,rt.depth,0,St,Bt,rt.data);else if(w.isFramebufferTexture){if(de)if(Gt)e.texStorage2D(s.TEXTURE_2D,Mt,kt,rt.width,rt.height);else{let X=rt.width,it=rt.height;for(let xt=0;xt<Mt;xt++)e.texImage2D(s.TEXTURE_2D,xt,kt,X,it,0,St,Bt,null),X>>=1,it>>=1}}else if(Jt.length>0){if(Gt&&de){const X=_t(Jt[0]);e.texStorage2D(s.TEXTURE_2D,Mt,kt,X.width,X.height)}for(let X=0,it=Jt.length;X<it;X++)At=Jt[X],Gt?I&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St,Bt,At):e.texImage2D(s.TEXTURE_2D,X,kt,St,Bt,At);w.generateMipmaps=!1}else if(Gt){if(de){const X=_t(rt);e.texStorage2D(s.TEXTURE_2D,Mt,kt,X.width,X.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Bt,rt)}else e.texImage2D(s.TEXTURE_2D,0,kt,St,Bt,rt);m(w)&&p(Z),Et.__version=J.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function K(E,w,O){if(w.image.length!==6)return;const Z=It(E,w),et=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);const J=i.get(et);if(et.version!==J.__version||Z===!0){e.activeTexture(s.TEXTURE0+O);const Et=ne.getPrimaries(ne.workingColorSpace),dt=w.colorSpace===Yi?null:ne.getPrimaries(w.colorSpace),wt=w.colorSpace===Yi||Et===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Zt=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,St=[];for(let it=0;it<6;it++)!Zt&&!rt?St[it]=x(w.image[it],!0,n.maxCubemapSize):St[it]=rt?w.image[it].image:w.image[it],St[it]=Pt(w,St[it]);const Bt=St[0],kt=r.convert(w.format,w.colorSpace),At=r.convert(w.type),Jt=M(w.internalFormat,kt,At,w.colorSpace),Gt=w.isVideoTexture!==!0,de=J.__version===void 0||Z===!0,I=et.dataReady;let Mt=y(w,Bt);lt(s.TEXTURE_CUBE_MAP,w);let X;if(Zt){Gt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,Jt,Bt.width,Bt.height);for(let it=0;it<6;it++){X=St[it].mipmaps;for(let xt=0;xt<X.length;xt++){const yt=X[xt];w.format!==_i?kt!==null?Gt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,0,0,yt.width,yt.height,kt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,Jt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,0,0,yt.width,yt.height,kt,At,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt,Jt,yt.width,yt.height,0,kt,At,yt.data)}}}else{if(X=w.mipmaps,Gt&&de){X.length>0&&Mt++;const it=_t(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,Jt,it.width,it.height)}for(let it=0;it<6;it++)if(rt){Gt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,St[it].width,St[it].height,kt,At,St[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,St[it].width,St[it].height,0,kt,At,St[it].data);for(let xt=0;xt<X.length;xt++){const Qt=X[xt].image[it].image;Gt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,0,0,Qt.width,Qt.height,kt,At,Qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,Jt,Qt.width,Qt.height,0,kt,At,Qt.data)}}else{Gt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,kt,At,St[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,kt,At,St[it]);for(let xt=0;xt<X.length;xt++){const yt=X[xt];Gt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,0,0,kt,At,yt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt+1,Jt,kt,At,yt.image[it])}}}m(w)&&p(s.TEXTURE_CUBE_MAP),J.__version=et.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function st(E,w,O,Z,et,J){const Et=r.convert(O.format,O.colorSpace),dt=r.convert(O.type),wt=M(O.internalFormat,Et,dt,O.colorSpace);if(!i.get(w).__hasExternalTextures){const rt=Math.max(1,w.width>>J),St=Math.max(1,w.height>>J);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,J,wt,rt,St,w.depth,0,Et,dt,null):e.texImage2D(et,J,wt,rt,St,0,Et,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),nt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,et,i.get(O).__webglTexture,0,ct(w)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,et,i.get(O).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(E,w,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),w.depthBuffer){const Z=w.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,J=v(w.stencilBuffer,et),Et=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=ct(w);nt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,J,w.width,w.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,J,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,J,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,E)}else{const Z=w.textures;for(let et=0;et<Z.length;et++){const J=Z[et],Et=r.convert(J.format,J.colorSpace),dt=r.convert(J.type),wt=M(J.internalFormat,Et,dt,J.colorSpace),Zt=ct(w);O&&nt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,wt,w.width,w.height):nt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,wt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,wt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const Z=i.get(w.depthTexture).__webglTexture,et=ct(w);if(w.depthTexture.format===qn)nt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(w.depthTexture.format===Qn)nt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Nt(E){const w=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=Z}if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");pt(w.__webglFramebuffer,E)}else if(O){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=s.createRenderbuffer(),bt(w.__webglDepthbuffer[Z],E,!1);else{const et=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),bt(w.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(E,w,O){const Z=i.get(E);w!==void 0&&st(Z.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Nt(E)}function Ht(E){const w=E.texture,O=i.get(E),Z=i.get(w);E.addEventListener("dispose",A);const et=E.textures,J=E.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=w.version,o.memory.textures++),J){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let wt=0;wt<w.mipmaps.length;wt++)O.__webglFramebuffer[dt][wt]=s.createFramebuffer()}else O.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<w.mipmaps.length;dt++)O.__webglFramebuffer[dt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Et)for(let dt=0,wt=et.length;dt<wt;dt++){const Zt=i.get(et[dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&nt(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const wt=et[dt];O.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);const Zt=r.convert(wt.format,wt.colorSpace),rt=r.convert(wt.type),St=M(wt.internalFormat,Zt,rt,wt.colorSpace,E.isXRRenderTarget===!0),Bt=ct(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,St,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),lt(s.TEXTURE_CUBE_MAP,w);for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)st(O.__webglFramebuffer[dt][wt],E,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,wt);else st(O.__webglFramebuffer[dt],E,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,wt=et.length;dt<wt;dt++){const Zt=et[dt],rt=i.get(Zt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),lt(s.TEXTURE_2D,Zt),st(O.__webglFramebuffer,E,Zt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m(Zt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),lt(dt,w),w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)st(O.__webglFramebuffer[wt],E,w,s.COLOR_ATTACHMENT0,dt,wt);else st(O.__webglFramebuffer,E,w,s.COLOR_ATTACHMENT0,dt,0);m(w)&&p(dt),e.unbindTexture()}E.depthBuffer&&Nt(E)}function jt(E){const w=E.textures;for(let O=0,Z=w.length;O<Z;O++){const et=w[O];if(m(et)){const J=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Et=i.get(et).__webglTexture;e.bindTexture(J,Et),p(J),e.unbindTexture()}}}const tt=[],R=[];function ht(E){if(E.samples>0){if(nt(E)===!1){const w=E.textures,O=E.width,Z=E.height;let et=s.COLOR_BUFFER_BIT;const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=i.get(E),dt=w.length>1;if(dt)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[wt]);const Zt=i.get(w[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,O,Z,0,0,O,Z,et,s.NEAREST),l===!0&&(tt.length=0,R.length=0,tt.push(s.COLOR_ATTACHMENT0+wt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(tt.push(J),R.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[wt]);const Zt=i.get(w[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const w=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ct(E){return Math.min(n.maxSamples,E.samples)}function nt(E){const w=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ut(E){const w=o.render.frame;h.get(E)!==w&&(h.set(E,w),E.update())}function Pt(E,w){const O=E.colorSpace,Z=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Fi&&O!==Yi&&(ne.getTransfer(O)===fe?(Z!==_i||et!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),w}function _t(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=Ut,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=nt}function $0(s,t){function e(i,n=Yi){let r;const o=ne.getTransfer(n);if(i===Ni)return s.UNSIGNED_BYTE;if(i===Ha)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ga)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Kc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Yc)return s.BYTE;if(i===jc)return s.SHORT;if(i===Es)return s.UNSIGNED_SHORT;if(i===ka)return s.INT;if(i===mn)return s.UNSIGNED_INT;if(i===yi)return s.FLOAT;if(i===si)return s.HALF_FLOAT;if(i===Zc)return s.ALPHA;if(i===Jc)return s.RGB;if(i===_i)return s.RGBA;if(i===Qc)return s.LUMINANCE;if(i===$c)return s.LUMINANCE_ALPHA;if(i===qn)return s.DEPTH_COMPONENT;if(i===Qn)return s.DEPTH_STENCIL;if(i===Va)return s.RED;if(i===Wa)return s.RED_INTEGER;if(i===th)return s.RG;if(i===Xa)return s.RG_INTEGER;if(i===qa)return s.RGBA_INTEGER;if(i===yr||i===wr||i===Sr||i===br)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===na||i===sa||i===ra||i===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===aa||i===la||i===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===aa||i===la)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ca)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ha||i===ua||i===da||i===fa||i===pa||i===ma||i===ga||i===xa||i===va||i===_a||i===Ma||i===ya||i===wa||i===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ha)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ua)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===da)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ma)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ga)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===va)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_a)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ma)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ya)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ar||i===ba||i===Aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ar)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eh||i===Ta||i===Ea||i===Ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class tg extends ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ue extends ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
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

}`;class sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Ie,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new $t({vertexShader:ig,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new k(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rg extends ns{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=new sg,m=e.getContextAttributes();let p=null,M=null;const v=[],y=[],P=new Q;let A=null;const T=new ai;T.layers.enable(1),T.viewport=new _e;const L=new ai;L.layers.enable(2),L.viewport=new _e;const D=[T,L],_=new tg;_.layers.enable(1),_.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=v[K];return st===void 0&&(st=new Io,v[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=v[K];return st===void 0&&(st=new Io,v[K]=st),st.getGripSpace()},this.getHand=function(K){let st=v[K];return st===void 0&&(st=new Io,v[K]=st),st.getHandSpace()};function F(K){const st=y.indexOf(K.inputSource);if(st===-1)return;const bt=v[st];bt!==void 0&&(bt.update(K.inputSource,K.frame,c||o),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",q);for(let K=0;K<v.length;K++){const st=y[K];st!==null&&(y[K]=null,v[K].disconnect(st))}S=null,N=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,n=null,M=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",V),n.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),n.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,st),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ve(f.framebufferWidth,f.framebufferHeight,{format:_i,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,bt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Qn:qn,bt=m.stencil?Jn:mn);const Nt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Nt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ve(d.textureWidth,d.textureHeight,{format:_i,type:Ni,depthTexture:new gh(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),qt.setContext(n),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(K){for(let st=0;st<K.removed.length;st++){const bt=K.removed[st],pt=y.indexOf(bt);pt>=0&&(y[pt]=null,v[pt].disconnect(bt))}for(let st=0;st<K.added.length;st++){const bt=K.added[st];let pt=y.indexOf(bt);if(pt===-1){for(let Ut=0;Ut<v.length;Ut++)if(Ut>=y.length){y.push(bt),pt=Ut;break}else if(y[Ut]===null){y[Ut]=bt,pt=Ut;break}if(pt===-1)break}const Nt=v[pt];Nt&&Nt.connect(bt)}}const B=new C,$=new C;function W(K,st,bt){B.setFromMatrixPosition(st.matrixWorld),$.setFromMatrixPosition(bt.matrixWorld);const pt=B.distanceTo($),Nt=st.projectionMatrix.elements,Ut=bt.projectionMatrix.elements,Ht=Nt[14]/(Nt[10]-1),jt=Nt[14]/(Nt[10]+1),tt=(Nt[9]+1)/Nt[5],R=(Nt[9]-1)/Nt[5],ht=(Nt[8]-1)/Nt[0],ct=(Ut[8]+1)/Ut[0],nt=Ht*ht,ut=Ht*ct,Pt=pt/(-ht+ct),_t=Pt*-ht;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_t),K.translateZ(Pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Nt[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const E=Ht+Pt,w=jt+Pt,O=nt-_t,Z=ut+(pt-_t),et=tt*jt/w*E,J=R*jt/w*E;K.projectionMatrix.makePerspective(O,Z,et,J,E,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Y(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let st=K.near,bt=K.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(bt=x.depthFar)),_.near=L.near=T.near=st,_.far=L.far=T.far=bt,(S!==_.near||N!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,N=_.far);const pt=K.parent,Nt=_.cameras;Y(_,pt);for(let Ut=0;Ut<Nt.length;Ut++)Y(Nt[Ut],pt);Nt.length===2?W(_,T,L):_.projectionMatrix.copy(T.projectionMatrix),j(K,_,pt)};function j(K,st,bt){bt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let lt=null;function It(K,st){if(h=st.getViewerPose(c||o),g=st,h!==null){const bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let pt=!1;bt.length!==_.cameras.length&&(_.cameras.length=0,pt=!0);for(let Ut=0;Ut<bt.length;Ut++){const Ht=bt[Ut];let jt=null;if(f!==null)jt=f.getViewport(Ht);else{const R=u.getViewSubImage(d,Ht);jt=R.viewport,Ut===0&&(t.setRenderTargetTextures(M,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(M))}let tt=D[Ut];tt===void 0&&(tt=new ai,tt.layers.enable(Ut),tt.viewport=new _e,D[Ut]=tt),tt.matrix.fromArray(Ht.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Ht.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(jt.x,jt.y,jt.width,jt.height),Ut===0&&(_.matrix.copy(tt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pt===!0&&_.cameras.push(tt)}const Nt=n.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Ut=u.getDepthInformation(bt[0]);Ut&&Ut.isValid&&Ut.texture&&x.init(t,Ut,n.renderState)}}for(let bt=0;bt<v.length;bt++){const pt=y[bt],Nt=v[bt];pt!==null&&Nt!==void 0&&Nt.update(pt,st,c||o)}lt&&lt(K,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const qt=new mh;qt.setAnimationLoop(It),this.setAnimationLoop=function(K){lt=K},this.dispose=function(){}}}const an=new bi,og=new he;function ag(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,dh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,M,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,y=M.envMapRotation;v&&(m.envMap.value=v,an.copy(y),an.x*=-1,an.y*=-1,an.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(an.y*=-1,an.z*=-1),m.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(an)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function lg(s,t,e,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const y=v.program;i.uniformBlockBinding(M,y)}function c(M,v){let y=n[M.id];y===void 0&&(g(M),y=h(M),n[M.id]=y,M.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(M,P);const A=t.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const v=u();M.__bindingPointIndex=v;const y=s.createBuffer(),P=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=n[M.id],y=M.uniforms,P=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,T=y.length;A<T;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let D=0,_=L.length;D<_;D++){const S=L[D];if(f(S,A,D,P)===!0){const N=S.__offset,F=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let q=0;q<F.length;q++){const B=F[q],$=x(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,N+V,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,v,y,P){const A=M.value,T=v+"_"+y;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const L=P[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return P[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(M){const v=M.uniforms;let y=0;const P=16;for(let T=0,L=v.length;T<L;T++){const D=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,S=D.length;_<S;_++){const N=D[_],F=Array.isArray(N.value)?N.value:[N.value];for(let V=0,q=F.length;V<q;V++){const B=F[V],$=x(B),W=y%P,Y=W%$.boundary,j=W+Y;y+=Y,j!==0&&P-j<$.storage&&(y+=P-j),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=$.storage}}}const A=y%P;return A>0&&(y+=P-A),M.__size=y,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function p(){for(const M in n)s.deleteBuffer(n[M]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}class cg{constructor(t={}){const{canvas:e=Zu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=Zi,this.toneMappingExposure=1;const v=this;let y=!1,P=0,A=0,T=null,L=-1,D=null;const _=new _e,S=new _e;let N=null;const F=new ot(0);let V=0,q=e.width,B=e.height,$=1,W=null,Y=null;const j=new _e(0,0,q,B),lt=new _e(0,0,q,B);let It=!1;const qt=new Ka;let K=!1,st=!1;const bt=new he,pt=new he,Nt=new C,Ut=new _e,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function tt(){return T===null?$:1}let R=i;function ht(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oa}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),R===null){const z="webgl2";if(R=ht(z,b),R===null)throw ht(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ct,nt,ut,Pt,_t,E,w,O,Z,et,J,Et,dt,wt,Zt,rt,St,Bt,kt,At,Jt,Gt,de,I;function Mt(){ct=new pm(R),ct.init(),Gt=new $0(R,ct),nt=new lm(R,ct,t,Gt),ut=new Z0(R),nt.reverseDepthBuffer&&ut.buffers.depth.setReversed(!0),Pt=new xm(R),_t=new U0,E=new Q0(R,ct,ut,_t,nt,Gt,Pt),w=new hm(v),O=new fm(v),Z=new Sd(R),de=new om(R,Z),et=new mm(R,Z,Pt,de),J=new _m(R,et,Z,Pt),kt=new vm(R,nt,E),rt=new cm(_t),Et=new z0(v,w,O,ct,nt,de,rt),dt=new ag(v,_t),wt=new F0,Zt=new V0(ct),Bt=new rm(v,w,O,ut,J,d,l),St=new j0(v,J,nt),I=new lg(R,Pt,nt,ut),At=new am(R,ct,Pt),Jt=new gm(R,ct,Pt),Pt.programs=Et.programs,v.capabilities=nt,v.extensions=ct,v.properties=_t,v.renderLists=wt,v.shadowMap=St,v.state=ut,v.info=Pt}Mt();const X=new rg(v,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(q,B,!1))},this.getSize=function(b){return b.set(q,B)},this.setSize=function(b,z,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,B=z,e.width=Math.floor(b*$),e.height=Math.floor(z*$),H===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(q*$,B*$).floor()},this.setDrawingBufferSize=function(b,z,H){q=b,B=z,$=H,e.width=Math.floor(b*H),e.height=Math.floor(z*H),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,z,H,G){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,z,H,G),ut.viewport(_.copy(j).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(lt)},this.setScissor=function(b,z,H,G){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,z,H,G),ut.scissor(S.copy(lt).multiplyScalar($).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(b){ut.setScissorTest(It=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(b=!0,z=!0,H=!0){let G=0;if(b){let U=!1;if(T!==null){const at=T.texture.format;U=at===qa||at===Xa||at===Wa}if(U){const at=T.texture.type,vt=at===Ni||at===mn||at===Es||at===Jn||at===Ha||at===Ga,Tt=Bt.getClearColor(),Ct=Bt.getClearAlpha(),Ft=Tt.r,Ot=Tt.g,Rt=Tt.b;vt?(f[0]=Ft,f[1]=Ot,f[2]=Rt,f[3]=Ct,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=Ft,g[1]=Ot,g[2]=Rt,g[3]=Ct,R.clearBufferiv(R.COLOR,0,g))}else G|=R.COLOR_BUFFER_BIT}z&&(G|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),wt.dispose(),Zt.dispose(),_t.dispose(),w.dispose(),O.dispose(),J.dispose(),de.dispose(),I.dispose(),Et.dispose(),X.dispose(),X.removeEventListener("sessionstart",rl),X.removeEventListener("sessionend",ol),tn.stop()};function it(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Pt.autoReset,z=St.enabled,H=St.autoUpdate,G=St.needsUpdate,U=St.type;Mt(),Pt.autoReset=b,St.enabled=z,St.autoUpdate=H,St.needsUpdate=G,St.type=U}function yt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Qt(b){const z=b.target;z.removeEventListener("dispose",Qt),Ae(z)}function Ae(b){Ye(b),_t.remove(b)}function Ye(b){const z=_t.get(b).programs;z!==void 0&&(z.forEach(function(H){Et.releaseProgram(H)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,H,G,U,at){z===null&&(z=Ht);const vt=U.isMesh&&U.matrixWorld.determinant()<0,Tt=jh(b,z,H,G,U);ut.setMaterial(G,vt);let Ct=H.index,Ft=1;if(G.wireframe===!0){if(Ct=et.getWireframeAttribute(H),Ct===void 0)return;Ft=2}const Ot=H.drawRange,Rt=H.attributes.position;let oe=Ot.start*Ft,me=(Ot.start+Ot.count)*Ft;at!==null&&(oe=Math.max(oe,at.start*Ft),me=Math.min(me,(at.start+at.count)*Ft)),Ct!==null?(oe=Math.max(oe,0),me=Math.min(me,Ct.count)):Rt!=null&&(oe=Math.max(oe,0),me=Math.min(me,Rt.count));const ve=me-oe;if(ve<0||ve===1/0)return;de.setup(U,G,Tt,H,Ct);let Qe,se=At;if(Ct!==null&&(Qe=Z.get(Ct),se=Jt,se.setIndex(Qe)),U.isMesh)G.wireframe===!0?(ut.setLineWidth(G.wireframeLinewidth*tt()),se.setMode(R.LINES)):se.setMode(R.TRIANGLES);else if(U.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),ut.setLineWidth(Lt*tt()),U.isLineSegments?se.setMode(R.LINES):U.isLineLoop?se.setMode(R.LINE_LOOP):se.setMode(R.LINE_STRIP)}else U.isPoints?se.setMode(R.POINTS):U.isSprite&&se.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)se.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))se.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Lt=U._multiDrawStarts,ze=U._multiDrawCounts,re=U._multiDrawCount,hi=Ct?Z.get(Ct).bytesPerElement:1,yn=_t.get(G).currentProgram.getUniforms();for(let $e=0;$e<re;$e++)yn.setValue(R,"_gl_DrawID",$e),se.render(Lt[$e]/hi,ze[$e])}else if(U.isInstancedMesh)se.renderInstances(oe,ve,U.count);else if(H.isInstancedBufferGeometry){const Lt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ze=Math.min(H.instanceCount,Lt);se.renderInstances(oe,ve,ze)}else se.render(oe,ve)};function ie(b,z,H){b.transparent===!0&&b.side===pe&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,Os(b,z,H),b.side=Qi,b.needsUpdate=!0,Os(b,z,H),b.side=pe):Os(b,z,H)}this.compile=function(b,z,H=null){H===null&&(H=b),m=Zt.get(H),m.init(z),M.push(m),H.traverseVisible(function(U){U.isLight&&U.layers.test(z.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),b!==H&&b.traverseVisible(function(U){U.isLight&&U.layers.test(z.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const G=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const at=U.material;if(at)if(Array.isArray(at))for(let vt=0;vt<at.length;vt++){const Tt=at[vt];ie(Tt,H,U),G.add(Tt)}else ie(at,H,U),G.add(at)}),M.pop(),m=null,G},this.compileAsync=function(b,z,H=null){const G=this.compile(b,z,H);return new Promise(U=>{function at(){if(G.forEach(function(vt){_t.get(vt).currentProgram.isReady()&&G.delete(vt)}),G.size===0){U(b);return}setTimeout(at,10)}ct.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let je=null;function Ti(b){je&&je(b)}function rl(){tn.stop()}function ol(){tn.start()}const tn=new mh;tn.setAnimationLoop(Ti),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(b){je=b,X.setAnimationLoop(b),b===null?tn.stop():tn.start()},X.addEventListener("sessionstart",rl),X.addEventListener("sessionend",ol),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(z),z=X.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,z,T),m=Zt.get(b,M.length),m.init(z),M.push(m),pt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),qt.setFromProjectionMatrix(pt),st=this.localClippingEnabled,K=rt.init(this.clippingPlanes,st),x=wt.get(b,p.length),x.init(),p.push(x),X.enabled===!0&&X.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&to(at,z,-1/0,v.sortObjects)}to(b,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,Y),jt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,jt&&Bt.addToRenderList(x,b),this.info.render.frame++,K===!0&&rt.beginShadows();const H=m.state.shadowsArray;St.render(H,b,z),K===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=x.opaque,U=x.transmissive;if(m.setupLights(),z.isArrayCamera){const at=z.cameras;if(U.length>0)for(let vt=0,Tt=at.length;vt<Tt;vt++){const Ct=at[vt];ll(G,U,b,Ct)}jt&&Bt.render(b);for(let vt=0,Tt=at.length;vt<Tt;vt++){const Ct=at[vt];al(x,b,Ct,Ct.viewport)}}else U.length>0&&ll(G,U,b,z),jt&&Bt.render(b),al(x,b,z);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,z),de.resetDefaultState(),L=-1,D=null,M.pop(),M.length>0?(m=M[M.length-1],K===!0&&rt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function to(b,z,H,G){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||qt.intersectsSprite(b)){G&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);const vt=J.update(b),Tt=b.material;Tt.visible&&x.push(b,vt,Tt,H,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||qt.intersectsObject(b))){const vt=J.update(b),Tt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ut.copy(vt.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(Tt)){const Ct=vt.groups;for(let Ft=0,Ot=Ct.length;Ft<Ot;Ft++){const Rt=Ct[Ft],oe=Tt[Rt.materialIndex];oe&&oe.visible&&x.push(b,vt,oe,H,Ut.z,Rt)}}else Tt.visible&&x.push(b,vt,Tt,H,Ut.z,null)}}const at=b.children;for(let vt=0,Tt=at.length;vt<Tt;vt++)to(at[vt],z,H,G)}function al(b,z,H,G){const U=b.opaque,at=b.transmissive,vt=b.transparent;m.setupLightsView(H),K===!0&&rt.setGlobalState(v.clippingPlanes,H),G&&ut.viewport(_.copy(G)),U.length>0&&Fs(U,z,H),at.length>0&&Fs(at,z,H),vt.length>0&&Fs(vt,z,H),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function ll(b,z,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Ve(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?si:Ni,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const at=m.state.transmissionRenderTarget[G.id],vt=G.viewport||_;at.setSize(vt.z,vt.w);const Tt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(F),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),jt&&Bt.render(H);const Ct=v.toneMapping;v.toneMapping=Zi;const Ft=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),K===!0&&rt.setGlobalState(v.clippingPlanes,G),Fs(b,H,G),E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Rt=0,oe=z.length;Rt<oe;Rt++){const me=z[Rt],ve=me.object,Qe=me.geometry,se=me.material,Lt=me.group;if(se.side===pe&&ve.layers.test(G.layers)){const ze=se.side;se.side=Ge,se.needsUpdate=!0,cl(ve,H,G,Qe,se,Lt),se.side=ze,se.needsUpdate=!0,Ot=!0}}Ot===!0&&(E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at))}v.setRenderTarget(Tt),v.setClearColor(F,V),Ft!==void 0&&(G.viewport=Ft),v.toneMapping=Ct}function Fs(b,z,H){const G=z.isScene===!0?z.overrideMaterial:null;for(let U=0,at=b.length;U<at;U++){const vt=b[U],Tt=vt.object,Ct=vt.geometry,Ft=G===null?vt.material:G,Ot=vt.group;Tt.layers.test(H.layers)&&cl(Tt,z,H,Ct,Ft,Ot)}}function cl(b,z,H,G,U,at){b.onBeforeRender(v,z,H,G,U,at),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(v,z,H,G,b,at),U.transparent===!0&&U.side===pe&&U.forceSinglePass===!1?(U.side=Ge,U.needsUpdate=!0,v.renderBufferDirect(H,z,G,U,b,at),U.side=Qi,U.needsUpdate=!0,v.renderBufferDirect(H,z,G,U,b,at),U.side=pe):v.renderBufferDirect(H,z,G,U,b,at),b.onAfterRender(v,z,H,G,U,at)}function Os(b,z,H){z.isScene!==!0&&(z=Ht);const G=_t.get(b),U=m.state.lights,at=m.state.shadowsArray,vt=U.state.version,Tt=Et.getParameters(b,U.state,at,z,H),Ct=Et.getProgramCacheKey(Tt);let Ft=G.programs;G.environment=b.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=(b.isMeshStandardMaterial?O:w).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ft===void 0&&(b.addEventListener("dispose",Qt),Ft=new Map,G.programs=Ft);let Ot=Ft.get(Ct);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===vt)return ul(b,Tt),Ot}else Tt.uniforms=Et.getUniforms(b),b.onBeforeCompile(Tt,v),Ot=Et.acquireProgram(Tt,Ct),Ft.set(Ct,Ot),G.uniforms=Tt.uniforms;const Rt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=rt.uniform),ul(b,Tt),G.needsLights=Zh(b),G.lightsStateVersion=vt,G.needsLights&&(Rt.ambientLightColor.value=U.state.ambient,Rt.lightProbe.value=U.state.probe,Rt.directionalLights.value=U.state.directional,Rt.directionalLightShadows.value=U.state.directionalShadow,Rt.spotLights.value=U.state.spot,Rt.spotLightShadows.value=U.state.spotShadow,Rt.rectAreaLights.value=U.state.rectArea,Rt.ltc_1.value=U.state.rectAreaLTC1,Rt.ltc_2.value=U.state.rectAreaLTC2,Rt.pointLights.value=U.state.point,Rt.pointLightShadows.value=U.state.pointShadow,Rt.hemisphereLights.value=U.state.hemi,Rt.directionalShadowMap.value=U.state.directionalShadowMap,Rt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Rt.spotShadowMap.value=U.state.spotShadowMap,Rt.spotLightMatrix.value=U.state.spotLightMatrix,Rt.spotLightMap.value=U.state.spotLightMap,Rt.pointShadowMap.value=U.state.pointShadowMap,Rt.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function hl(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Er.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function ul(b,z){const H=_t.get(b);H.outputColorSpace=z.outputColorSpace,H.batching=z.batching,H.batchingColor=z.batchingColor,H.instancing=z.instancing,H.instancingColor=z.instancingColor,H.instancingMorph=z.instancingMorph,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function jh(b,z,H,G,U){z.isScene!==!0&&(z=Ht),E.resetTextureUnits();const at=z.fog,vt=G.isMeshStandardMaterial?z.environment:null,Tt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Fi,Ct=(G.isMeshStandardMaterial?O:w).get(G.envMap||vt),Ft=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!H.morphAttributes.position,oe=!!H.morphAttributes.normal,me=!!H.morphAttributes.color;let ve=Zi;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ve=v.toneMapping);const Qe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Qe!==void 0?Qe.length:0,Lt=_t.get(G),ze=m.state.lights;if(K===!0&&(st===!0||b!==D)){const ri=b===D&&G.id===L;rt.setState(G,b,ri)}let re=!1;G.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ze.state.version||Lt.outputColorSpace!==Tt||U.isBatchedMesh&&Lt.batching===!1||!U.isBatchedMesh&&Lt.batching===!0||U.isBatchedMesh&&Lt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Lt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Lt.instancing===!1||!U.isInstancedMesh&&Lt.instancing===!0||U.isSkinnedMesh&&Lt.skinning===!1||!U.isSkinnedMesh&&Lt.skinning===!0||U.isInstancedMesh&&Lt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Lt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Lt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Lt.instancingMorph===!1&&U.morphTexture!==null||Lt.envMap!==Ct||G.fog===!0&&Lt.fog!==at||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==rt.numPlanes||Lt.numIntersection!==rt.numIntersection)||Lt.vertexAlphas!==Ft||Lt.vertexTangents!==Ot||Lt.morphTargets!==Rt||Lt.morphNormals!==oe||Lt.morphColors!==me||Lt.toneMapping!==ve||Lt.morphTargetsCount!==se)&&(re=!0):(re=!0,Lt.__version=G.version);let hi=Lt.currentProgram;re===!0&&(hi=Os(G,z,U));let yn=!1,$e=!1,eo=!1;const Me=hi.getUniforms(),Oi=Lt.uniforms;if(ut.useProgram(hi.program)&&(yn=!0,$e=!0,eo=!0),G.id!==L&&(L=G.id,$e=!0),yn||D!==b){nt.reverseDepthBuffer?(bt.copy(b.projectionMatrix),Qu(bt),$u(bt),Me.setValue(R,"projectionMatrix",bt)):Me.setValue(R,"projectionMatrix",b.projectionMatrix),Me.setValue(R,"viewMatrix",b.matrixWorldInverse);const ri=Me.map.cameraPosition;ri!==void 0&&ri.setValue(R,Nt.setFromMatrixPosition(b.matrixWorld)),nt.logarithmicDepthBuffer&&Me.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Me.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),D!==b&&(D=b,$e=!0,eo=!0)}if(U.isSkinnedMesh){Me.setOptional(R,U,"bindMatrix"),Me.setOptional(R,U,"bindMatrixInverse");const ri=U.skeleton;ri&&(ri.boneTexture===null&&ri.computeBoneTexture(),Me.setValue(R,"boneTexture",ri.boneTexture,E))}U.isBatchedMesh&&(Me.setOptional(R,U,"batchingTexture"),Me.setValue(R,"batchingTexture",U._matricesTexture,E),Me.setOptional(R,U,"batchingIdTexture"),Me.setValue(R,"batchingIdTexture",U._indirectTexture,E),Me.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&Me.setValue(R,"batchingColorTexture",U._colorsTexture,E));const io=H.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&kt.update(U,H,hi),($e||Lt.receiveShadow!==U.receiveShadow)&&(Lt.receiveShadow=U.receiveShadow,Me.setValue(R,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Oi.envMap.value=Ct,Oi.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&z.environment!==null&&(Oi.envMapIntensity.value=z.environmentIntensity),$e&&(Me.setValue(R,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&Kh(Oi,eo),at&&G.fog===!0&&dt.refreshFogUniforms(Oi,at),dt.refreshMaterialUniforms(Oi,G,$,B,m.state.transmissionRenderTarget[b.id]),Er.upload(R,hl(Lt),Oi,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Er.upload(R,hl(Lt),Oi,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Me.setValue(R,"center",U.center),Me.setValue(R,"modelViewMatrix",U.modelViewMatrix),Me.setValue(R,"normalMatrix",U.normalMatrix),Me.setValue(R,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ri=G.uniformsGroups;for(let no=0,Jh=ri.length;no<Jh;no++){const dl=ri[no];I.update(dl,hi),I.bind(dl,hi)}}return hi}function Kh(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Zh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,z,H){_t.get(b.texture).__webglTexture=z,_t.get(b.depthTexture).__webglTexture=H;const G=_t.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const H=_t.get(b);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,H=0){T=b,P=z,A=H;let G=!0,U=null,at=!1,vt=!1;if(b){const Ct=_t.get(b);if(Ct.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(Ct.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Ct.__hasExternalTextures)E.rebindTextures(b,_t.get(b.texture).__webglTexture,_t.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Rt=b.depthTexture;if(Ct.__boundDepthTexture!==Rt){if(Rt!==null&&_t.has(Rt)&&(b.width!==Rt.image.width||b.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Ft=b.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(vt=!0);const Ot=_t.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[z])?U=Ot[z][H]:U=Ot[z],at=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?U=_t.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?U=Ot[H]:U=Ot,_.copy(b.viewport),S.copy(b.scissor),N=b.scissorTest}else _.copy(j).multiplyScalar($).floor(),S.copy(lt).multiplyScalar($).floor(),N=It;if(ut.bindFramebuffer(R.FRAMEBUFFER,U)&&G&&ut.drawBuffers(b,U),ut.viewport(_),ut.scissor(S),ut.setScissorTest(N),at){const Ct=_t.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ct.__webglTexture,H)}else if(vt){const Ct=_t.get(b.texture),Ft=z||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ct.__webglTexture,H||0,Ft)}L=-1},this.readRenderTargetPixels=function(b,z,H,G,U,at,vt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(Tt=Tt[vt]),Tt){ut.bindFramebuffer(R.FRAMEBUFFER,Tt);try{const Ct=b.texture,Ft=Ct.format,Ot=Ct.type;if(!nt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-G&&H>=0&&H<=b.height-U&&R.readPixels(z,H,G,U,Gt.convert(Ft),Gt.convert(Ot),at)}finally{const Ct=T!==null?_t.get(T).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(b,z,H,G,U,at,vt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(Tt=Tt[vt]),Tt){const Ct=b.texture,Ft=Ct.format,Ot=Ct.type;if(!nt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-G&&H>=0&&H<=b.height-U){ut.bindFramebuffer(R.FRAMEBUFFER,Tt);const Rt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Rt),R.bufferData(R.PIXEL_PACK_BUFFER,at.byteLength,R.STREAM_READ),R.readPixels(z,H,G,U,Gt.convert(Ft),Gt.convert(Ot),0);const oe=T!==null?_t.get(T).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,oe);const me=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ju(R,me,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Rt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,at),R.deleteBuffer(Rt),R.deleteSync(me),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,H=0){b.isTexture!==!0&&(Tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-H),U=Math.floor(b.image.width*G),at=Math.floor(b.image.height*G),vt=z!==null?z.x:0,Tt=z!==null?z.y:0;E.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,vt,Tt,U,at),ut.unbindTexture()},this.copyTextureToTexture=function(b,z,H=null,G=null,U=0){b.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],z=arguments[2],U=arguments[3]||0,H=null);let at,vt,Tt,Ct,Ft,Ot;H!==null?(at=H.max.x-H.min.x,vt=H.max.y-H.min.y,Tt=H.min.x,Ct=H.min.y):(at=b.image.width,vt=b.image.height,Tt=0,Ct=0),G!==null?(Ft=G.x,Ot=G.y):(Ft=0,Ot=0);const Rt=Gt.convert(z.format),oe=Gt.convert(z.type);E.setTexture2D(z,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);const me=R.getParameter(R.UNPACK_ROW_LENGTH),ve=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Qe=R.getParameter(R.UNPACK_SKIP_PIXELS),se=R.getParameter(R.UNPACK_SKIP_ROWS),Lt=R.getParameter(R.UNPACK_SKIP_IMAGES),ze=b.isCompressedTexture?b.mipmaps[U]:b.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ze.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ze.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Tt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ct),b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,Ft,Ot,at,vt,Rt,oe,ze.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,Ft,Ot,ze.width,ze.height,Rt,ze.data):R.texSubImage2D(R.TEXTURE_2D,U,Ft,Ot,at,vt,Rt,oe,ze),R.pixelStorei(R.UNPACK_ROW_LENGTH,me),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ve),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Qe),R.pixelStorei(R.UNPACK_SKIP_ROWS,se),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Lt),U===0&&z.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(b,z,H=null,G=null,U=0){b.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,b=arguments[2],z=arguments[3],U=arguments[4]||0);let at,vt,Tt,Ct,Ft,Ot,Rt,oe,me;const ve=b.isCompressedTexture?b.mipmaps[U]:b.image;H!==null?(at=H.max.x-H.min.x,vt=H.max.y-H.min.y,Tt=H.max.z-H.min.z,Ct=H.min.x,Ft=H.min.y,Ot=H.min.z):(at=ve.width,vt=ve.height,Tt=ve.depth,Ct=0,Ft=0,Ot=0),G!==null?(Rt=G.x,oe=G.y,me=G.z):(Rt=0,oe=0,me=0);const Qe=Gt.convert(z.format),se=Gt.convert(z.type);let Lt;if(z.isData3DTexture)E.setTexture3D(z,0),Lt=R.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)E.setTexture2DArray(z,0),Lt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);const ze=R.getParameter(R.UNPACK_ROW_LENGTH),re=R.getParameter(R.UNPACK_IMAGE_HEIGHT),hi=R.getParameter(R.UNPACK_SKIP_PIXELS),yn=R.getParameter(R.UNPACK_SKIP_ROWS),$e=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ve.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ve.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ct),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ft),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ot),b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Lt,U,Rt,oe,me,at,vt,Tt,Qe,se,ve.data):z.isCompressedArrayTexture?R.compressedTexSubImage3D(Lt,U,Rt,oe,me,at,vt,Tt,Qe,ve.data):R.texSubImage3D(Lt,U,Rt,oe,me,at,vt,Tt,Qe,se,ve),R.pixelStorei(R.UNPACK_ROW_LENGTH,ze),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,re),R.pixelStorei(R.UNPACK_SKIP_PIXELS,hi),R.pixelStorei(R.UNPACK_SKIP_ROWS,yn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,$e),U===0&&z.generateMipmaps&&R.generateMipmap(Lt),ut.unbindTexture()},this.initRenderTarget=function(b){_t.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),ut.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,ut.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ya?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===qr?"display-p3":"srgb"}}class Ja{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new Ja(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Or extends ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ra,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new C;class Br{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Br(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yh extends _n{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Nn;const ds=new C,Fn=new C,On=new C,Bn=new Q,fs=new Q,wh=new he,or=new C,ps=new C,ar=new C,oc=new Q,zo=new Q,ac=new Q;class ug extends ee{constructor(t=new yh){if(super(),this.isSprite=!0,this.type="Sprite",Nn===void 0){Nn=new te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hg(e,5);Nn.setIndex([0,1,2,0,2,3]),Nn.setAttribute("position",new Br(i,3,0,!1)),Nn.setAttribute("uv",new Br(i,2,3,!1))}this.geometry=Nn,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fn.setFromMatrixScale(this.matrixWorld),wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),On.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fn.multiplyScalar(-On.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const o=this.center;lr(or.set(-.5,-.5,0),On,o,Fn,n,r),lr(ps.set(.5,-.5,0),On,o,Fn,n,r),lr(ar.set(.5,.5,0),On,o,Fn,n,r),oc.set(0,0),zo.set(1,0),ac.set(1,1);let a=t.ray.intersectTriangle(or,ps,ar,!1,ds);if(a===null&&(lr(ps.set(-.5,.5,0),On,o,Fn,n,r),zo.set(0,1),a=t.ray.intersectTriangle(or,ar,ps,!1,ds),a===null))return;const l=t.ray.origin.distanceTo(ds);l<t.near||l>t.far||e.push({distance:l,point:ds.clone(),uv:li.getInterpolation(ds,or,ps,ar,oc,zo,ac,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function lr(s,t,e,i,n,r){Bn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(fs.x=r*Bn.x-n*Bn.y,fs.y=n*Bn.x+r*Bn.y):fs.copy(Bn),s.copy(t),s.x+=fs.x,s.y+=fs.y,s.applyMatrix4(wh)}class Cr extends Ie{constructor(t=null,e=1,i=1,n,r,o,a,l,c=He,h=He,u,d){super(null,o,a,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Da extends Se{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const kn=new he,lc=new he,cr=[],cc=new vn,dg=new he,ms=new k,gs=new ss;class Ke extends k{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,dg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,kn),cc.copy(t.boundingBox).applyMatrix4(kn),this.boundingBox.union(cc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,kn),gs.copy(t.boundingSphere).applyMatrix4(kn),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(i),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,kn),lc.multiplyMatrices(i,kn),ms.matrixWorld=lc,ms.raycast(t,cr);for(let o=0,a=cr.length;o<a;o++){const l=cr[o];l.instanceId=r,l.object=this,e.push(l)}cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Cr(new Float32Array(n*this.count),n,this.count,Va,yi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class fg extends _n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const hc=new he,Ia=new ah,hr=new ss,ur=new C;class pg extends ee{constructor(t=new te,e=new fg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere),hr.applyMatrix4(n),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;hc.copy(n).invert(),Ia.copy(t.ray).applyMatrix4(hc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);ur.fromBufferAttribute(u,m),uc(ur,m,l,n,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)ur.fromBufferAttribute(u,g),uc(ur,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function uc(s,t,e,i,n,r,o){const a=Ia.distanceSqToPoint(s);if(a<e){const l=new C;Ia.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Sh extends Ie{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new Q:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,n=[],r=[],o=[],a=new C,l=new he;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Le(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Le(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qa extends Ai{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Q){const i=e,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mg extends Qa{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $a(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+i*a}}}const dr=new C,Uo=new $a,No=new $a,Fo=new $a;class Rs extends Ai{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){const i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(dr.subVectors(n[0],n[1]).add(n[0]),c=dr);const u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(dr.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=dr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Uo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),No.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Fo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),No.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Uo.calc(l),No.calc(l),Fo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function dc(s,t,e,i,n){const r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function gg(s,t){const e=1-s;return e*e*t}function xg(s,t){return 2*(1-s)*s*t}function vg(s,t){return s*s*t}function bs(s,t,e,i){return gg(s,t)+xg(s,e)+vg(s,i)}function _g(s,t){const e=1-s;return e*e*e*t}function Mg(s,t){const e=1-s;return 3*e*e*s*t}function yg(s,t){return 3*(1-s)*s*s*t}function wg(s,t){return s*s*s*t}function As(s,t,e,i,n){return _g(s,t)+Mg(s,e)+yg(s,i)+wg(s,n)}class bh extends Ai{constructor(t=new Q,e=new Q,i=new Q,n=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new Q){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(As(t,n.x,r.x,o.x,a.x),As(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sg extends Ai{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(As(t,n.x,r.x,o.x,a.x),As(t,n.y,r.y,o.y,a.y),As(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ah extends Ai{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bg extends Ai{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Th extends Ai{constructor(t=new Q,e=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Q){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(bs(t,n.x,r.x,o.x),bs(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eh extends Ai{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(bs(t,n.x,r.x,o.x),bs(t,n.y,r.y,o.y),bs(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends Ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(dc(a,l.x,c.x,h.x,u.x),dc(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new Q().fromArray(n))}return this}}var kr=Object.freeze({__proto__:null,ArcCurve:mg,CatmullRomCurve3:Rs,CubicBezierCurve:bh,CubicBezierCurve3:Sg,EllipseCurve:Qa,LineCurve:Ah,LineCurve3:bg,QuadraticBezierCurve:Th,QuadraticBezierCurve3:Eh,SplineCurve:Ch});class Ag extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kr[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new kr[n.type]().fromJSON(n))}return this}}class za extends Ag{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ah(this.currentPoint.clone(),new Q(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new Th(this.currentPoint.clone(),new Q(t,e),new Q(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){const a=new bh(this.currentPoint.clone(),new Q(t,e),new Q(i,n),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ch(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){const c=new Qa(t,e,i,n,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kr extends te{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Le(n,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,d=new Q,f=new C,g=new C,x=new C;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let M=0;M<=e;M++){const v=i+M*h*n,y=Math.sin(v),P=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*P,o.push(u.x,u.y,u.z),d.x=M/e,d.y=A/(t.length-1),a.push(d.x,d.y);const T=l[3*A+0]*y,L=l[3*A+1],D=l[3*A+0]*P;c.push(T,L,D)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){const y=v+M*t.length,P=y,A=y+t.length,T=y+t.length+1,L=y+1;r.push(P,A,L),r.push(T,L,A)}this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("uv",new zt(a,2)),this.setAttribute("normal",new zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.points,t.segments,t.phiStart,t.phiLength)}}class Ki extends Kr{constructor(t=1,e=1,i=4,n=8){const r=new za;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new Ki(t.radius,t.length,t.capSegments,t.radialSegments)}}class zs extends te{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yt extends te{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=i/2;let p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function M(){const y=new C,P=new C;let A=0;const T=(e-t)/i;for(let L=0;L<=r;L++){const D=[],_=L/r,S=_*(e-t)+t;for(let N=0;N<=n;N++){const F=N/n,V=F*l+a,q=Math.sin(V),B=Math.cos(V);P.x=S*q,P.y=-_*i+m,P.z=S*B,u.push(P.x,P.y,P.z),y.set(q,T,B).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-_),D.push(g++)}x.push(D)}for(let L=0;L<n;L++)for(let D=0;D<r;D++){const _=x[D][L],S=x[D+1][L],N=x[D+1][L+1],F=x[D][L+1];t>0&&(h.push(_,S,F),A+=3),e>0&&(h.push(S,N,F),A+=3)}c.addGroup(p,A,0),p+=A}function v(y){const P=g,A=new Q,T=new C;let L=0;const D=y===!0?t:e,_=y===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;const S=g;for(let N=0;N<=n;N++){const V=N/n*l+a,q=Math.cos(V),B=Math.sin(V);T.x=D*B,T.y=m*_,T.z=D*q,u.push(T.x,T.y,T.z),d.push(0,_,0),A.x=q*.5+.5,A.y=B*.5*_+.5,f.push(A.x,A.y),g++}for(let N=0;N<n;N++){const F=P+N,V=S+N;y===!0?h.push(V,V+1,F):h.push(V+1,V,F),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $i extends Yt{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new $i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zr extends te{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new C,y=new C,P=new C;for(let A=0;A<e.length;A+=3)f(e[A+0],v),f(e[A+1],y),f(e[A+2],P),l(v,y,P,M)}function l(M,v,y,P){const A=P+1,T=[];for(let L=0;L<=A;L++){T[L]=[];const D=M.clone().lerp(y,L/A),_=v.clone().lerp(y,L/A),S=A-L;for(let N=0;N<=S;N++)N===0&&L===A?T[L][N]=D:T[L][N]=D.clone().lerp(_,N/S)}for(let L=0;L<A;L++)for(let D=0;D<2*(A-L)-1;D++){const _=Math.floor(D/2);D%2===0?(d(T[L][_+1]),d(T[L+1][_]),d(T[L][_])):(d(T[L][_+1]),d(T[L+1][_+1]),d(T[L+1][_]))}}function c(M){const v=new C;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const M=new C;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const y=m(M)/2/Math.PI+.5,P=p(M)/Math.PI+.5;o.push(y,1-P)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const v=o[M+0],y=o[M+2],P=o[M+4],A=Math.max(v,y,P),T=Math.min(v,y,P);A>.9&&T<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),P<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,v){const y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const M=new C,v=new C,y=new C,P=new C,A=new Q,T=new Q,L=new Q;for(let D=0,_=0;D<r.length;D+=9,_+=6){M.set(r[D+0],r[D+1],r[D+2]),v.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),A.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),L.set(o[_+4],o[_+5]),P.copy(M).add(v).add(y).divideScalar(3);const S=m(P);x(A,_+0,M,S),x(T,_+2,v,S),x(L,_+4,y,S)}}function x(M,v,y,P){P<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=P/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.vertices,t.indices,t.radius,t.details)}}class Jr extends za{constructor(t){super(t),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new za().fromJSON(n))}return this}}const Tg={triangulate:function(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=Rh(s,0,n,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=Lg(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<n;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ps(r,o,e,a,l,f,0),o}};function Rh(s,t,e,i,n){let r,o;if(n===Gg(s,t,e,i)>0)for(r=t;r<e;r+=i)o=fc(r,s[r],s[r+1],o);else for(r=e-i;r>=t;r-=i)o=fc(r,s[r],s[r+1],o);return o&&Qr(o,o.next)&&(Ds(o),o=o.next),o}function gn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Qr(e,e.next)||xe(e.prev,e,e.next)===0)){if(Ds(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ps(s,t,e,i,n,r,o){if(!s)return;!o&&r&&Ng(s,i,n,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Cg(s,i,n,r):Eg(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Ds(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Rg(gn(s),t,e),Ps(s,t,e,i,n,r,2)):o===2&&Pg(s,t,e,i,n,r):Ps(gn(s),t,e,i,n,r,1);break}}}function Eg(s){const t=s.prev,e=s,i=s.next;if(xe(t,e,i)>=0)return!1;const n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=n<r?n<o?n:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=n>r?n>o?n:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Xn(n,a,r,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cg(s,t,e,i){const n=s.prev,r=s,o=s.next;if(xe(n,r,o)>=0)return!1;const a=n.x,l=r.x,c=o.x,h=n.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Ua(f,g,t,e,i),M=Ua(x,m,t,e,i);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==n&&v!==o&&Xn(a,h,l,u,c,d,v.x,v.y)&&xe(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&Xn(a,h,l,u,c,d,y.x,y.y)&&xe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==n&&v!==o&&Xn(a,h,l,u,c,d,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&Xn(a,h,l,u,c,d,y.x,y.y)&&xe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Rg(s,t,e){let i=s;do{const n=i.prev,r=i.next.next;!Qr(n,r)&&Ph(n,i,i.next,r)&&Ls(n,r)&&Ls(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Ds(i),Ds(i.next),i=s=r),i=i.next}while(i!==s);return gn(i)}function Pg(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bg(o,a)){let l=Lh(o,a);o=gn(o,o.next),l=gn(l,l.next),Ps(o,t,e,i,n,r,0),Ps(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function Lg(s,t,e,i){const n=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=Rh(s,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Og(c));for(n.sort(Dg),r=0;r<n.length;r++)e=Ig(n[r],e);return e}function Dg(s,t){return s.x-t.x}function Ig(s,t){const e=zg(s,t);if(!e)return t;const i=Lh(e,s);return gn(i,i.next),gn(e,e.next)}function zg(s,t){let e=t,i=-1/0,n;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===r))return n}e=e.next}while(e!==t);if(!n)return null;const a=n,l=n.x,c=n.y;let h=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&Xn(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ls(e,s)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&Ug(n,e)))&&(n=e,h=u)),e=e.next;while(e!==a);return n}function Ug(s,t){return xe(s.prev,s,t.prev)<0&&xe(t.next,s,s.next)<0}function Ng(s,t,e,i){let n=s;do n.z===0&&(n.z=Ua(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Fg(n)}function Fg(s){let t,e,i,n,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,c*=2}while(o>1);return s}function Ua(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Og(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Xn(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function Bg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!kg(s,t)&&(Ls(s,t)&&Ls(t,s)&&Hg(s,t)&&(xe(s.prev,s,t.prev)||xe(s,t.prev,t))||Qr(s,t)&&xe(s.prev,s,s.next)>0&&xe(t.prev,t,t.next)>0)}function xe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Qr(s,t){return s.x===t.x&&s.y===t.y}function Ph(s,t,e,i){const n=pr(xe(s,t,e)),r=pr(xe(s,t,i)),o=pr(xe(e,i,s)),a=pr(xe(e,i,t));return!!(n!==r&&o!==a||n===0&&fr(s,e,t)||r===0&&fr(s,i,t)||o===0&&fr(e,s,i)||a===0&&fr(e,t,i))}function fr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function pr(s){return s>0?1:s<0?-1:0}function kg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Ph(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ls(s,t){return xe(s.prev,s,s.next)<0?xe(s,t,s.next)>=0&&xe(s,s.prev,t)>=0:xe(s,t,s.prev)<0||xe(s,s.next,t)<0}function Hg(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function Lh(s,t){const e=new Na(s.i,s.x,s.y),i=new Na(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function fc(s,t,e,i){const n=new Na(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ds(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Na(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gg(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}class Ts{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return Ts.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];pc(t),mc(i,t);let o=t.length;e.forEach(pc);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,mc(i,e[l]);const a=Tg.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function pc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function mc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Us extends te{constructor(t=new Jr([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new zt(n,3)),this.setAttribute("uv",new zt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Vg;let v,y=!1,P,A,T,L;p&&(v=p.getSpacedPoints(h),y=!0,d=!1,P=p.computeFrenetFrames(h,!1),A=new C,T=new C,L=new C),d||(m=0,f=0,g=0,x=0);const D=a.extractPoints(c);let _=D.shape;const S=D.holes;if(!Ts.isClockWise(_)){_=_.reverse();for(let tt=0,R=S.length;tt<R;tt++){const ht=S[tt];Ts.isClockWise(ht)&&(S[tt]=ht.reverse())}}const F=Ts.triangulateShape(_,S),V=_;for(let tt=0,R=S.length;tt<R;tt++){const ht=S[tt];_=_.concat(ht)}function q(tt,R,ht){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(R,ht)}const B=_.length,$=F.length;function W(tt,R,ht){let ct,nt,ut;const Pt=tt.x-R.x,_t=tt.y-R.y,E=ht.x-tt.x,w=ht.y-tt.y,O=Pt*Pt+_t*_t,Z=Pt*w-_t*E;if(Math.abs(Z)>Number.EPSILON){const et=Math.sqrt(O),J=Math.sqrt(E*E+w*w),Et=R.x-_t/et,dt=R.y+Pt/et,wt=ht.x-w/J,Zt=ht.y+E/J,rt=((wt-Et)*w-(Zt-dt)*E)/(Pt*w-_t*E);ct=Et+Pt*rt-tt.x,nt=dt+_t*rt-tt.y;const St=ct*ct+nt*nt;if(St<=2)return new Q(ct,nt);ut=Math.sqrt(St/2)}else{let et=!1;Pt>Number.EPSILON?E>Number.EPSILON&&(et=!0):Pt<-Number.EPSILON?E<-Number.EPSILON&&(et=!0):Math.sign(_t)===Math.sign(w)&&(et=!0),et?(ct=-_t,nt=Pt,ut=Math.sqrt(O)):(ct=Pt,nt=_t,ut=Math.sqrt(O/2))}return new Q(ct/ut,nt/ut)}const Y=[];for(let tt=0,R=V.length,ht=R-1,ct=tt+1;tt<R;tt++,ht++,ct++)ht===R&&(ht=0),ct===R&&(ct=0),Y[tt]=W(V[tt],V[ht],V[ct]);const j=[];let lt,It=Y.concat();for(let tt=0,R=S.length;tt<R;tt++){const ht=S[tt];lt=[];for(let ct=0,nt=ht.length,ut=nt-1,Pt=ct+1;ct<nt;ct++,ut++,Pt++)ut===nt&&(ut=0),Pt===nt&&(Pt=0),lt[ct]=W(ht[ct],ht[ut],ht[Pt]);j.push(lt),It=It.concat(lt)}for(let tt=0;tt<m;tt++){const R=tt/m,ht=f*Math.cos(R*Math.PI/2),ct=g*Math.sin(R*Math.PI/2)+x;for(let nt=0,ut=V.length;nt<ut;nt++){const Pt=q(V[nt],Y[nt],ct);pt(Pt.x,Pt.y,-ht)}for(let nt=0,ut=S.length;nt<ut;nt++){const Pt=S[nt];lt=j[nt];for(let _t=0,E=Pt.length;_t<E;_t++){const w=q(Pt[_t],lt[_t],ct);pt(w.x,w.y,-ht)}}}const qt=g+x;for(let tt=0;tt<B;tt++){const R=d?q(_[tt],It[tt],qt):_[tt];y?(T.copy(P.normals[0]).multiplyScalar(R.x),A.copy(P.binormals[0]).multiplyScalar(R.y),L.copy(v[0]).add(T).add(A),pt(L.x,L.y,L.z)):pt(R.x,R.y,0)}for(let tt=1;tt<=h;tt++)for(let R=0;R<B;R++){const ht=d?q(_[R],It[R],qt):_[R];y?(T.copy(P.normals[tt]).multiplyScalar(ht.x),A.copy(P.binormals[tt]).multiplyScalar(ht.y),L.copy(v[tt]).add(T).add(A),pt(L.x,L.y,L.z)):pt(ht.x,ht.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const R=tt/m,ht=f*Math.cos(R*Math.PI/2),ct=g*Math.sin(R*Math.PI/2)+x;for(let nt=0,ut=V.length;nt<ut;nt++){const Pt=q(V[nt],Y[nt],ct);pt(Pt.x,Pt.y,u+ht)}for(let nt=0,ut=S.length;nt<ut;nt++){const Pt=S[nt];lt=j[nt];for(let _t=0,E=Pt.length;_t<E;_t++){const w=q(Pt[_t],lt[_t],ct);y?pt(w.x,w.y+v[h-1].y,v[h-1].x+ht):pt(w.x,w.y,u+ht)}}}K(),st();function K(){const tt=n.length/3;if(d){let R=0,ht=B*R;for(let ct=0;ct<$;ct++){const nt=F[ct];Nt(nt[2]+ht,nt[1]+ht,nt[0]+ht)}R=h+m*2,ht=B*R;for(let ct=0;ct<$;ct++){const nt=F[ct];Nt(nt[0]+ht,nt[1]+ht,nt[2]+ht)}}else{for(let R=0;R<$;R++){const ht=F[R];Nt(ht[2],ht[1],ht[0])}for(let R=0;R<$;R++){const ht=F[R];Nt(ht[0]+B*h,ht[1]+B*h,ht[2]+B*h)}}i.addGroup(tt,n.length/3-tt,0)}function st(){const tt=n.length/3;let R=0;bt(V,R),R+=V.length;for(let ht=0,ct=S.length;ht<ct;ht++){const nt=S[ht];bt(nt,R),R+=nt.length}i.addGroup(tt,n.length/3-tt,1)}function bt(tt,R){let ht=tt.length;for(;--ht>=0;){const ct=ht;let nt=ht-1;nt<0&&(nt=tt.length-1);for(let ut=0,Pt=h+m*2;ut<Pt;ut++){const _t=B*ut,E=B*(ut+1),w=R+ct+_t,O=R+nt+_t,Z=R+nt+E,et=R+ct+E;Ut(w,O,Z,et)}}}function pt(tt,R,ht){l.push(tt),l.push(R),l.push(ht)}function Nt(tt,R,ht){Ht(tt),Ht(R),Ht(ht);const ct=n.length/3,nt=M.generateTopUV(i,n,ct-3,ct-2,ct-1);jt(nt[0]),jt(nt[1]),jt(nt[2])}function Ut(tt,R,ht,ct){Ht(tt),Ht(R),Ht(ct),Ht(R),Ht(ht),Ht(ct);const nt=n.length/3,ut=M.generateSideWallUV(i,n,nt-6,nt-3,nt-2,nt-1);jt(ut[0]),jt(ut[1]),jt(ut[3]),jt(ut[1]),jt(ut[2]),jt(ut[3])}function Ht(tt){n.push(l[tt*3+0]),n.push(l[tt*3+1]),n.push(l[tt*3+2])}function jt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Wg(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new kr[n.type]().fromJSON(n)),new Us(i,t.options)}}const Vg={generateTopUV:function(s,t,e,i,n){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],g=t[n*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-u),new Q(d,1-g),new Q(x,1-p)]:[new Q(a,1-l),new Q(h,1-u),new Q(f,1-g),new Q(m,1-p)]}};function Wg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ne extends Zr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ne(t.radius,t.detail)}}class Ee extends te{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const M=[],v=p/i;let y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(n+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(n+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-v),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const v=h[p][M+1],y=h[p][M],P=h[p+1][M],A=h[p+1][M+1];(p!==0||o>0)&&f.push(v,y,A),(p!==i-1||l<Math.PI)&&f.push(y,P,A)}this.setIndex(f),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tl extends Zr{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tl(t.radius,t.detail)}}class Ze extends te{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const x=g/n*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const x=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,M=(n+1)*f+g;o.push(x,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ts extends te{constructor(t=new Eh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new Q;let h=new C;const u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function x(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),M(),p()}function m(v){h=t.getPointAt(v/e,h);const y=o.normals[v],P=o.binormals[v];for(let A=0;A<=n;A++){const T=A/n*Math.PI*2,L=Math.sin(T),D=-Math.cos(T);l.x=D*y.x+L*P.x,l.y=D*y.y+L*P.y,l.z=D*y.z+L*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let y=1;y<=n;y++){const P=(n+1)*(v-1)+(y-1),A=(n+1)*v+(y-1),T=(n+1)*v+y,L=(n+1)*(v-1)+y;g.push(P,A,L),g.push(A,T,L)}}function M(){for(let v=0;v<=e;v++)for(let y=0;y<=n;y++)c.x=v/e,c.y=y/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ts(new kr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Xg extends $t{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ce extends _n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class el extends ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Dh extends el{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Oo=new he,gc=new C,xc=new C;class qg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(gc),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),Oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Yg extends qg{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ih extends el{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.target=new ee,this.shadow=new Yg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jg extends el{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=vc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function vc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oa);const zh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Mn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Zg=new Yr(-1,1,1,-1,0,1);class Jg extends te{constructor(){super(),this.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zt([0,2,0,0,2,0],2))}}const Qg=new Jg;class $r{constructor(t){this._mesh=new k(Qg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Zg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class $g extends Mn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof $t?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ji.clone(t.uniforms),this.material=new $t({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new $r(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _c extends Mn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class tx extends Mn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ex{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Q);this._width=i.width,this._height=i.height,e=new Ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:si}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $g(zh),this.copyPass.material.blending=Ui,this.clock=new Kg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_c!==void 0&&(o instanceof _c?i=!0:o instanceof tx&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ix extends Mn{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}}const nx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class es extends Mn{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ve(r,o,{type:si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Ve(r,o,{type:si});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Ve(r,o,{type:si});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=nx;this.highPassUniforms=Ji.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $t({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=zh;this.copyUniforms=Ji.clone(h.uniforms),this.blendMaterial=new $t({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:De,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new be,this.fsQuad=new $r(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new $t({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new $t({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}es.BlurDirectionX=new Q(1,0);es.BlurDirectionY=new Q(0,1);const sx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class rx extends Mn{constructor(){super();const t=sx;this.uniforms=Ji.clone(t.uniforms),this.material=new Xg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new $r(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const mr={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Q(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},gr={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Q(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Bo={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Q(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class ox extends Mn{constructor(t,e){super(),this.edgesRT=new Ve(t,e,{depthBuffer:!1,type:si}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Ve(t,e,{depthBuffer:!1,type:si}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,n=new Image;n.src=this.getAreaTexture(),n.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Ie,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=n,this.areaTexture.minFilter=ke,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const r=new Image;r.src=this.getSearchTexture(),r.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Ie,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=He,this.searchTexture.minFilter=He,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Ji.clone(mr.uniforms),this.uniformsEdges.resolution.value.set(1/t,1/e),this.materialEdges=new $t({defines:Object.assign({},mr.defines),uniforms:this.uniformsEdges,vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader}),this.uniformsWeights=Ji.clone(gr.uniforms),this.uniformsWeights.resolution.value.set(1/t,1/e),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new $t({defines:Object.assign({},gr.defines),uniforms:this.uniformsWeights,vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader}),this.uniformsBlend=Ji.clone(Bo.uniforms),this.uniformsBlend.resolution.value.set(1/t,1/e),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new $t({uniforms:this.uniformsBlend,vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader}),this.fsQuad=new $r(null)}render(t,e,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,t.setRenderTarget(this.edgesRT),this.clear&&t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialWeights,t.setRenderTarget(this.weightsRT),this.clear&&t.clear(),this.fsQuad.render(t),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.fsQuad.render(t))}setSize(t,e){this.edgesRT.setSize(t,e),this.weightsRT.setSize(t,e),this.materialEdges.uniforms.resolution.value.set(1/t,1/e),this.materialWeights.uniforms.resolution.value.set(1/t,1/e),this.materialBlend.uniforms.resolution.value.set(1/t,1/e)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const Is=Math.PI*2,xi=(s,t,e)=>s<t?t:s>e?e:s,ge=s=>s<0?0:s>1?1:s,qe=(s,t,e)=>s+(t-s)*e,ax=(s,t,e)=>t===s?0:(e-s)/(t-s),Hr=(s,t,e)=>{const i=ge(ax(s,t,e));return i*i*(3-2*i)},we=(s,t,e,i)=>qe(s,t,1-Math.exp(-e*i)),Uh=s=>(s=(s+Math.PI)%Is,s<0&&(s+=Is),s-Math.PI);function Nh(s,t,e,i,n){const r=n*n,o=r*n;return{x:.5*(2*t.x+(-s.x+e.x)*n+(2*s.x-5*t.x+4*e.x-i.x)*r+(-s.x+3*t.x-3*e.x+i.x)*o),z:.5*(2*t.z+(-s.z+e.z)*n+(2*s.z-5*t.z+4*e.z-i.z)*r+(-s.z+3*t.z-3*e.z+i.z)*o)}}const ae={antiFoul:"#eef4f6",boot:"#0b1a22",hullAft:"#123c4f",hullFore:"#1f6f86",stripe:"#3fe4cb",stripeWarm:"#ffd479",gunwale:"#0d1e27",deck:"#cfdde2",deckHi:"#e6eff2",cockpit:"#22333d",rail:"#0a141b",chrome:"#cfdde4",glass:"#2a5f74",engineHood:"#33566a",engineDark:"#16232b",engineMid:"#2b414d",gold:"#ffc65c",suit:"#f2f7f8",vest:"#1d4353",helmet:"#ffd479",visor:"#0f2a36",flag:"#ff7a55",seat:"#c9673f"};function Fh(s){const t=s.index;if(!t)return s;const e=s.attributes.position;s.computeBoundingBox();const i=new C;s.boundingBox.getCenter(i);const n=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C,d=t.array;let f=0,g=0;for(let x=0;x<d.length;x+=3)n.fromBufferAttribute(e,d[x]),r.fromBufferAttribute(e,d[x+1]),o.fromBufferAttribute(e,d[x+2]),a.subVectors(r,n),l.subVectors(o,n),c.crossVectors(a,l),h.copy(n).add(r).add(o).multiplyScalar(1/3),u.subVectors(h,i),c.dot(u)>=0?f++:g++;if(g>f){for(let x=0;x<d.length;x+=3){const m=d[x+1];d[x+1]=d[x+2],d[x+2]=m}t.needsUpdate=!0}return s.computeVertexNormals(),s}function lx(s,t,e,i,n=3,r=0){const o=[];for(let a=0;a<s;a++){const l=a/s*Is+r,c=Math.cos(l),h=Math.sin(l),u=Math.sign(c)*Math.pow(Math.abs(c),2/n)*t,d=Math.sign(h)*Math.pow(Math.abs(h),2/n)*e;o.push([u,i,d])}return o}function cx(s,{capStart:t=!0,capEnd:e=!0}={}){const i=s[0].length,n=[];for(const a of s)for(const l of a)n.push(l[0],l[1],l[2]);const r=[];for(let a=0;a<s.length-1;a++)for(let l=0;l<i;l++){const c=(l+1)%i,h=a*i+l,u=a*i+c,d=(a+1)*i+c,f=(a+1)*i+l;r.push(h,u,d,h,d,f)}if(t)for(let l=1;l<i-1;l++)r.push(0,0+l+1,0+l);if(e){const a=(s.length-1)*i;for(let l=1;l<i-1;l++)r.push(a,a+l,a+l+1)}const o=new te;return o.setAttribute("position",new zt(n,3)),o.setIndex(r),Fh(o)}function ii(s,t=14){return cx(s.map(e=>lx(t,e.w,e.d,e.y,e.p??3,e.phase??0)))}function hx(s){const t=[{t:0,key:"keel",band:0},{t:.5,key:"boot",band:0},{t:.58,key:"chine",band:1},{t:.74,key:"stripeA",band:2},{t:.88,key:"stripeB",band:3},{t:1,key:"sheer",band:4},{t:.88,key:"deckEdge",band:4},{t:0,key:"deckCtr",band:5}],e=t.length,i=[],n=[],r=[],o=[],a=(d,f,g)=>{const x=new ot;if(d===0)f>.44?x.set(ae.boot):x.set(ae.antiFoul);else if(d===1){const m=ge((g+2.6)/4.6+(f-.6)*.75);x.set(ae.hullAft).lerp(new ot(ae.hullFore),Hr(.15,.85,m))}else d===2?x.set(ae.stripe):d===3?x.set(ae.stripeWarm):d===4?x.set(f>.9?ae.gunwale:ae.deck):x.set(g>-1.2&&g<1.5?ae.cockpit:ae.deck);return x};for(let d=0;d<s.length;d++){const f=s[d],g=[];for(let m=0;m<e;m++){const p=t[m];g.push({x:p.t*f.beam,y:f[p.key],band:p.band,t:p.t})}for(let m=e-2;m>=1;m--){const p=t[m];g.push({x:-p.t*f.beam,y:f[p.key],band:p.band,t:p.t})}const x=[];for(const m of g){x.push(i.length/3),i.push(m.x,m.y,f.z);const p=a(m.band,m.t,f.z),M=.9+.1*ge((m.y+1)/1.5);n.push(p.r*M,p.g*M,p.b*M)}o.push(x)}for(let d=0;d<s.length-1;d++){const f=o[d].length;for(let g=0;g<f-1;g++){const x=o[d][g],m=o[d][g+1],p=o[d+1][g+1],M=o[d+1][g];r.push(x,m,p,x,p,M)}}const l=o[0],c=l.length;for(let d=1;d<c-1;d++)r.push(l[0],l[d],l[d+1]);const h=o[o.length-1];for(let d=1;d<c-1;d++)r.push(h[0],h[d+1],h[d]);const u=new te;return u.setAttribute("position",new zt(i,3)),u.setAttribute("color",new zt(n,3)),u.setIndex(r),Fh(u)}function ux(){const s=new Jr;s.moveTo(0,.03),s.bezierCurveTo(.16,.1,.26,.3,.16,.52),s.bezierCurveTo(.1,.64,-.02,.62,-.05,.48),s.bezierCurveTo(-.09,.26,-.07,.09,0,.03);const t=new Us(s,{depth:.022,bevelEnabled:!0,bevelSize:.008,bevelThickness:.006,bevelSegments:1,curveSegments:6});return t.rotateX(-Math.PI/2),t.rotateY(.5),t}function dx(s){const t=new ue,e=new k(new Yt(.085,.075,.2,10),s.chrome);e.rotation.x=Math.PI/2,t.add(e);const i=ux();for(let r=0;r<3;r++){const o=new k(i,s.chrome);o.rotation.z=r/3*Math.PI*2,o.position.z=.02,t.add(o)}const n=new k(new $i(.075,.16,10),s.chrome);return n.rotation.x=Math.PI/2,n.position.z=.14,t.add(n),t.traverse(r=>{r.castShadow=!0}),t}function fx(s){const t=new ue,e=new k(ii([{y:.6,w:.3,d:.32,p:3.4},{y:.76,w:.335,d:.375,p:3.2},{y:.98,w:.345,d:.39,p:3},{y:1.18,w:.325,d:.36,p:2.9},{y:1.33,w:.265,d:.29,p:2.6},{y:1.42,w:.17,d:.19,p:2.2}],22),s.engineHood);e.position.z=-.03,t.add(e);const i=new k(ii([{y:1.06,w:.3,d:.33,p:3.4},{y:1.24,w:.285,d:.315,p:3.2},{y:1.36,w:.2,d:.22,p:2.8}],16),s.deckHi);i.position.z=-.03,t.add(i);for(const x of[-1,1]){const m=new k(new Kt(.02,.1,.5),s.accent);m.position.set(x*.348,.86,-.02),t.add(m);const p=new k(new Kt(.024,.035,.5),s.gold);p.position.set(x*.352,.79,-.02),t.add(p);const M=new k(new zs(.055,12),s.gold);M.position.set(x*.355,1,.1),M.rotation.y=x*Math.PI/2,t.add(M)}const n=new k(new Yt(.075,.09,.05,10),s.engineDark);n.position.set(0,1.45,-.03),t.add(n);const r=new k(new Yt(.055,.062,.13,10),s.chrome);r.rotation.x=Math.PI/2,r.position.set(0,1.02,-.24),t.add(r);const o=new k(ii([{y:.16,w:.2,d:.24,p:3.6},{y:.4,w:.235,d:.27,p:3.4},{y:.62,w:.27,d:.3,p:3.2}],16),s.engineMid);t.add(o);const a=new k(new Kt(.5,.2,.2),s.engineDark);a.position.set(0,.5,.16),t.add(a);for(const x of[-1,1]){const m=new k(new Yt(.045,.045,.62,8),s.chrome);m.rotation.z=Math.PI/2,m.position.set(0,.5,.16+x*0),m.scale.y=1,t.add(m)}const l=new k(new Yt(.032,.032,.34,8),s.chrome);l.rotation.x=Math.PI/2,l.position.set(0,.66,.3),t.add(l);const c=new k(ii([{y:-.34,w:.085,d:.2,p:3.6},{y:-.62,w:.095,d:.235,p:3.4},{y:-.78,w:.085,d:.22,p:3.2}],12),s.engineDark);t.add(c);const h=new k(new Ki(.085,.3,4,10),s.engineMid);h.rotation.z=Math.PI/2,h.position.set(0,-.66,.02),t.add(h);const u=new k(new Kt(.045,.3,.42),s.engineDark);u.position.set(0,-.8,.03),t.add(u);const d=new k(new Kt(.12,.07,.16),s.chrome);d.position.set(0,-.56,.1),t.add(d);const f=new ee;f.position.set(0,-.66,-.3),t.add(f);const g=dx(s);return g.scale.setScalar(.92),f.add(g),t.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),t.userData.propeller=g,t.userData.propMount=f,t}function px(s){const t=new ue,e=new k(new Ki(.225,.34,4,12),s.suit);e.position.y=.32,e.scale.set(1,1,.76);const i=new k(new Ki(.225,.2,4,10),s.vest);i.position.y=.36,i.scale.set(1,1,.7);const n=new k(new Ze(.215,.032,6,14),s.gold);n.rotation.x=Math.PI/2,n.position.y=.3;const r=new k(new Yt(.075,.09,.12,8),s.suit);r.position.y=.56;const o=new k(new Ee(.175,20,14),s.helmet);o.position.y=.7,o.scale.set(1,1.08,1.12);const a=new k(new Kt(.055,.055,.3),s.visor);a.position.set(0,.855,-.03);const l=new k(new Ee(.163,18,12,Math.PI*.7,Math.PI*.6,Math.PI*.3,Math.PI*.36),s.visor);l.position.set(0,.705,.025),l.scale.set(1,1.08,1.14),t.add(e,i,n,r,o,a,l);for(const c of[-1,1]){const h=new k(new Ki(.068,.26,3,8),s.suit);h.position.set(c*.21,.36,.15),h.rotation.set(-.95,0,c*.24);const u=new k(new Ki(.058,.24,3,8),s.suit);u.position.set(c*.165,.25,.38),u.rotation.set(-1.25,0,c*.2);const d=new k(new Ee(.065,8,6),s.engineDark);d.position.set(c*.14,.21,.49),t.add(h,u,d)}return t.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),t}function mx(s){const t=new ue,e=new k(new Yt(.1,.14,.62,10),s.deckHi);e.position.set(0,.24,0),e.rotation.x=-.28;const i=new k(new Kt(.78,.16,.44),s.deckHi);i.position.set(0,.48,.04),i.rotation.x=-.42,t.add(e,i);const n=new k(new ni(.46,.17),s.screen);n.position.set(0,.545,.185),n.rotation.set(-.42,0,0),t.add(n);for(let u=0;u<3;u++){const d=new k(new Yt(.055,.055,.03,12),s.chrome);d.position.set(-.2+u*.2,.585,.135),d.rotation.set(Math.PI/2-.42,0,0);const f=new k(new zs(.043,12),s.screen);f.position.set(-.2+u*.2,.601,.152),f.rotation.set(-.42,0,0),t.add(d,f)}const r=new k(new Ee(.062,12,8,0,Math.PI*2,0,Math.PI/2),s.deckHi);r.position.set(.3,.585,.05);const o=new k(new Ee(.05,12,8,0,Math.PI*2,0,Math.PI/2),s.glass);o.position.set(.3,.591,.05),t.add(r,o);const a=new ue,l=new k(new Ze(.16,.028,8,20),s.engineDark);a.add(l);for(let u=0;u<3;u++){const d=u/3*Is,f=new k(new Kt(.03,.155,.022),s.chrome);f.rotation.z=d,f.position.set(Math.cos(d)*.078,Math.sin(d)*.078,0),a.add(f)}a.position.set(0,.4,.26),a.rotation.x=-.5,t.add(a);const c=new k(new Ki(.03,.22,3,6),s.chrome);c.position.set(.32,.5,.1),c.rotation.z=.4,t.add(c);const h=new k(new Ee(.045,8,6),s.gold);return h.position.set(.37,.6,.12),t.add(h),t.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),t.userData.wheel=a,t}function gx(s){const t=new ue,e=new k(new Yt(.3,.36,.2,14),s.engineMid),i=new k(new Ze(.31,.035,6,18),s.chrome);i.rotation.x=Math.PI/2,i.position.y=.1,t.add(e,i);const n=new ue;n.position.y=.2,t.add(n);const r=new k(ii([{y:0,w:.2,d:.24,p:3.4},{y:.16,w:.21,d:.26,p:3.2},{y:.28,w:.17,d:.21,p:3}],14),s.deckHi);n.add(r);const o=new k(new Kt(.46,.18,.3),s.engineDark);o.position.y=.14,n.add(o);const a=new k(new Yt(.062,.078,1.28,12),s.chrome);a.rotation.x=Math.PI/2,a.position.set(0,.2,.82),n.add(a);const l=new k(new Yt(.1,.1,.44,12),s.engineDark);l.rotation.x=Math.PI/2,l.position.set(0,.2,.42),n.add(l);for(let d=0;d<4;d++){const f=new k(new Kt(.02,.1,.16),s.chrome),g=d/4*Is;f.position.set(Math.cos(g)*.1,.2+Math.sin(g)*.1,.46),f.rotation.z=g,n.add(f)}const c=new ee;c.position.set(0,.2,1.47),n.add(c);const h=new k(new Yt(.088,.088,.14,12),s.engineDark);h.rotation.x=Math.PI/2,h.position.set(0,.2,1.39),n.add(h);const u=new k(new Ee(.1,10,8),s.glow);return u.position.set(0,.2,1.43),u.visible=!1,n.add(u),t.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),t.userData.yoke=n,t.userData.muzzle=c,t.userData.glow=u,t}function xx(){const s=t=>new ce(t);return{hull:s({vertexColors:!0,roughness:.26,metalness:.18,envMapIntensity:1}),deck:s({color:new ot(ae.deck),roughness:.6,metalness:.08}),deckHi:s({color:new ot(ae.deckHi),roughness:.46,metalness:.12}),dark:s({color:new ot(ae.rail),roughness:.7,metalness:.2}),engineDark:s({color:new ot(ae.engineDark),roughness:.48,metalness:.4}),engineMid:s({color:new ot(ae.engineMid),roughness:.42,metalness:.42}),engineHood:s({color:new ot(ae.engineHood),roughness:.34,metalness:.22,envMapIntensity:1.15}),chrome:s({color:new ot(ae.chrome),roughness:.16,metalness:.94,envMapIntensity:1.5}),accent:s({color:new ot(ae.stripe),roughness:.24,metalness:.28,emissive:new ot(ae.stripe).multiplyScalar(.3)}),gold:s({color:new ot(ae.gold),roughness:.28,metalness:.6,emissive:new ot(ae.gold).multiplyScalar(.18)}),glass:s({color:new ot(ae.glass),roughness:.06,metalness:.28,transparent:!0,opacity:.42,envMapIntensity:1.8,side:pe}),suit:s({color:new ot(ae.suit),roughness:.62,metalness:.02}),vest:s({color:new ot(ae.vest),roughness:.52,metalness:.06}),helmet:s({color:new ot(ae.helmet),roughness:.26,metalness:.24,emissive:new ot(ae.helmet).multiplyScalar(.1)}),visor:s({color:new ot(ae.visor),roughness:.05,metalness:.6,side:pe,envMapIntensity:1.8}),flag:s({color:new ot(ae.flag),roughness:.86,metalness:0,side:pe}),seat:s({color:new ot(ae.seat),roughness:.72,metalness:.03}),screen:new be({color:new ot("#5ce9ff"),transparent:!0,opacity:.9,blending:De,depthWrite:!1}),glow:new be({color:new ot("#ffd479"),transparent:!0,opacity:.9,blending:De,depthWrite:!1})}}function vx(){const s=xx(),t=new ue;t.name="PlayerBoat";const e=[{z:-3.55,beam:1.16,keel:-.72,boot:-.58,chine:-.34,stripeA:-.16,stripeB:-.02,sheer:.3,deckEdge:.24,deckCtr:.3},{z:-2.9,beam:1.24,keel:-.8,boot:-.64,chine:-.4,stripeA:-.2,stripeB:-.05,sheer:.36,deckEdge:.28,deckCtr:.34},{z:-2.1,beam:1.27,keel:-.86,boot:-.7,chine:-.44,stripeA:-.23,stripeB:-.07,sheer:.4,deckEdge:.31,deckCtr:.28},{z:-1.2,beam:1.26,keel:-.88,boot:-.72,chine:-.46,stripeA:-.24,stripeB:-.08,sheer:.42,deckEdge:.32,deckCtr:.05},{z:-.3,beam:1.22,keel:-.86,boot:-.7,chine:-.46,stripeA:-.24,stripeB:-.08,sheer:.44,deckEdge:.33,deckCtr:.02},{z:.6,beam:1.15,keel:-.82,boot:-.66,chine:-.46,stripeA:-.25,stripeB:-.09,sheer:.47,deckEdge:.34,deckCtr:.06},{z:1.55,beam:1.03,keel:-.74,boot:-.6,chine:-.44,stripeA:-.26,stripeB:-.11,sheer:.51,deckEdge:.37,deckCtr:.17},{z:2.45,beam:.84,keel:-.62,boot:-.5,chine:-.38,stripeA:-.24,stripeB:-.11,sheer:.56,deckEdge:.42,deckCtr:.27},{z:3.2,beam:.55,keel:-.46,boot:-.36,chine:-.27,stripeA:-.17,stripeB:-.06,sheer:.6,deckEdge:.46,deckCtr:.33},{z:3.72,beam:.26,keel:-.28,boot:-.22,chine:-.15,stripeA:-.09,stripeB:-.01,sheer:.55,deckEdge:.43,deckCtr:.36},{z:4.02,beam:.07,keel:-.14,boot:-.12,chine:-.08,stripeA:-.03,stripeB:.02,sheer:.42,deckEdge:.34,deckCtr:.34}],i=hx(e),n=new k(i,s.hull);n.castShadow=!0,n.receiveShadow=!0,t.add(n);const r=e.map(Y=>new C(Y.beam*1.005,Y.sheer,Y.z));for(const Y of[1,-1]){const j=new Rs(r.map(It=>new C(It.x*Y,It.y,It.z))),lt=new k(new ts(j,28,.042,6,!1),s.engineMid);lt.castShadow=!0,t.add(lt)}const o=new k(new Kt(.62,.1,.52),s.deckHi);o.position.set(0,.4,3.34),o.rotation.x=.22,o.castShadow=!0,t.add(o);const a=new k(new Kt(.66,.06,.1),s.chrome);a.position.set(0,.43,3.58),a.rotation.x=.22,t.add(a);for(const Y of[-1,1]){const j=new k(new Kt(.06,.1,.24),s.chrome);j.position.set(Y*.5,.46,2.6),t.add(j)}const l=new Jr;l.moveTo(-.8,0),l.lineTo(.8,0),l.lineTo(.63,.44),l.lineTo(-.63,.44),l.closePath();const c=new k(new Us(l,{depth:.035,bevelEnabled:!1}),s.glass);c.position.set(0,.22,1.24),c.rotation.x=-.42,t.add(c);const h=new k(new Kt(1.28,.03,.05),s.chrome);h.position.set(0,.62,1.44),h.rotation.x=-.42,t.add(h);for(const Y of[-1,1]){const j=new k(new Kt(.035,.5,.045),s.chrome);j.position.set(Y*.71,.44,1.35),j.rotation.set(-.42,0,Y*.19),t.add(j)}const u=new k(new Kt(1.62,.08,2.72),s.dark);u.position.set(0,.05,-.4),t.add(u);for(const Y of[-1,1]){for(let It=0;It<5;It++){const qt=new k(new Kt(.62,.018,.1),s.engineMid);qt.position.set(Y*.4,.098,-1.55+It*.55),t.add(qt)}const j=new k(ii([{y:.2,w:.075,d:1.42,p:3.6},{y:.34,w:.085,d:1.44,p:3.2},{y:.42,w:.065,d:1.4,p:2.8}],12),s.deckHi);j.position.set(Y*.94,0,-.4),t.add(j);const lt=new k(new Kt(.1,.22,.7),s.engineDark);lt.position.set(Y*1.06,.2,.34),t.add(lt)}const d=new k(new Kt(1.62,.16,.24),s.deckHi);d.position.set(0,.24,1),t.add(d);for(const Y of[-1,1]){const j=new k(ii([{y:.22,w:.27,d:.26,p:3.4},{y:.34,w:.29,d:.28,p:3.2}],12),s.engineDark);j.position.set(Y*.42,-.18,-.3);const lt=new k(ii([{y:.34,w:.27,d:.1,p:3.4},{y:.58,w:.28,d:.105,p:3.2},{y:.86,w:.25,d:.1,p:3}],12),s.engineDark);lt.position.set(Y*.42,-.18,-.56);const It=new k(new Kt(.4,.07,.07),s.accent);It.position.set(Y*.42,.3,-.1),t.add(j,lt,It)}for(const Y of[-1,1]){const j=new k(ii([{y:-.16,w:.24,d:.24,p:3.4},{y:-.02,w:.25,d:.25,p:3.2}],12),s.seat);j.position.set(Y*.42,0,-.3),t.add(j);const lt=new k(ii([{y:.2,w:.24,d:.075,p:3.4},{y:.46,w:.25,d:.08,p:3.2},{y:.68,w:.22,d:.075,p:3}],12),s.seat);lt.position.set(Y*.42,0,-.62),t.add(lt)}const f=mx(s);f.position.set(-.42,.02,.74),t.add(f);const g=f.userData.wheel,x=px(s);x.position.set(-.42,.12,-.34),t.add(x);const m=[new C(-.92,.3,-1.52),new C(-.86,1.06,-1.58),new C(0,1.14,-1.62),new C(.86,1.06,-1.58),new C(.92,.3,-1.52)],p=new k(new ts(new Rs(m),24,.05,8,!1),s.chrome);p.castShadow=!0,t.add(p);for(const Y of[-1,1]){const j=new k(new Yt(.032,.032,.5,6),s.chrome);j.position.set(Y*.64,.74,-1.8),j.rotation.x=.7,t.add(j)}const M=new k(new Kt(1.04,.11,.09),s.engineDark);M.position.set(0,1.18,-1.62),t.add(M);for(let Y=0;Y<4;Y++){const j=new k(new Ee(.042,8,6),s.glow);j.position.set(-.375+Y*.25,1.18,-1.57),t.add(j)}const v=new k(ii([{y:1.14,w:.09,d:.09,p:2.4},{y:1.28,w:.12,d:.12,p:2.2},{y:1.42,w:.09,d:.09,p:2.4}],14),s.deckHi);v.position.set(0,0,-1.64),t.add(v);const y=new k(new Yt(.011,.019,1.15,5),s.chrome);y.position.set(.42,1.62,-1.64),y.rotation.z=.07,t.add(y);const P=new k(new Yt(.01,.01,.72,5),s.chrome);P.position.set(-.76,1.36,-1.6),t.add(P);const A=new ni(.44,.26,5,3),T=new k(A,s.flag);T.position.set(-.54,1.58,-1.6),T.castShadow=!0,t.add(T);const L=gx(s);L.position.set(0,.36,2.02),L.scale.setScalar(.8),t.add(L);const D=[],_=[];for(const Y of[-1,1]){const j=fx(s);j.position.set(Y*.58,-.02,-3.68),j.scale.setScalar(.87),t.add(j),D.push(j),_.push(j.userData.propeller)}const S=new k(ii([{y:.02,w:.96,d:.09,p:3.6},{y:.24,w:1,d:.1,p:3.2},{y:.42,w:.92,d:.085,p:3}],14),s.deckHi);S.position.set(0,0,-3.52),t.add(S);const N=new k(ii([{y:.06,w:.86,d:.17,p:3.6},{y:.11,w:.9,d:.19,p:3.2}],14),s.deck);N.position.set(0,0,-3.76),t.add(N);const F=new k(new Kt(1.94,.14,.03),s.accent);F.position.set(0,.34,-3.44),t.add(F);const V=new k(new Kt(1.94,.05,.03),s.gold);V.position.set(0,.25,-3.44),t.add(V);const q=[];for(const Y of[-1,1])for(let j=0;j<2;j++){const lt=-.3+j*.22,It=new k(new Yt(.082,.092,.2,10,1,!0),s.chrome);It.rotation.x=Math.PI/2,It.position.set(Y*.44,lt,-3.5),t.add(It);const qt=new ee;qt.position.set(Y*.44,lt,-3.66),t.add(qt),q.push(qt)}const B=[];for(const Y of[-1,1]){const j=new k(new Ze(.19,.032,8,18),s.accent);j.position.set(Y*.6,-.62,-3.62),j.visible=!1,t.add(j),B.push(j)}const $=[];for(const Y of[-1,1]){const j=new k(new Kt(.36,.035,.3),s.chrome);j.position.set(Y*.9,-.62,-3.4),t.add(j),$.push(j)}for(const Y of[-1,1]){const j=new k(new Ee(.05,8,6),new be({color:Y<0?16724821:4521881,transparent:!0,opacity:.95}));j.position.set(Y*.36,.5,2.92),t.add(j)}return t.traverse(Y=>{Y.isMesh&&(Y.castShadow=!0,Y.receiveShadow=!0)}),{group:t,dispose:()=>{t.traverse(Y=>{Y.geometry&&Y.geometry.dispose()});for(const Y in s)s[Y].dispose&&s[Y].dispose()},materials:s,parts:{hull:n,wheel:g,driver:x,turret:L,yoke:L.userData.yoke,muzzle:L.userData.muzzle,muzzleGlow:L.userData.glow,engines:D,propellers:_,exhausts:q,boostRings:B,trimTabs:$,flag:T,flagGeo:A,anchors:{bow:new C(0,.22,3.55),mid:new C(0,-.3,0),sternL:new C(-.95,-.55,-3.1),sternR:new C(.95,-.55,-3.1),chineL:new C(-1.2,-.3,1.2),chineR:new C(1.2,-.3,1.2),stern:new C(0,-.38,-3.4),wakeL:new C(-.85,-.42,-3.3),wakeR:new C(.85,-.42,-3.3),hullCentre:new C(0,0,0)}}}}const Wt={startDock:{x:-920,z:760,y:0,name:"Drydock Start"},lagoonWest:{x:-700,z:690,y:0,name:"West Lagoon"},reefShallows:{x:-470,z:592,y:0,name:"Reef Shallows"},arch:{x:-250,z:520,y:0,name:"Reef Arch"},combatOne:{x:-30,z:470,y:0,name:"Patrol Alpha"},channelIn:{x:170,z:420,y:0,name:"Twin Palm Channel"},minefield:{x:350,z:360,y:0,name:"Mine Channel"},caveApproach:{x:520,z:300,y:0,name:"Cave Approach"},caveMouth:{x:640,z:268,y:0,name:"Sea Cave Mouth"},caveMid:{x:790,z:244,y:0,name:"Cave Throat"},caveRamp:{x:900,z:220,y:2.4,name:"Cave Ramp"},caveExit:{x:1002,z:194,y:12,name:"Cave Exit"},basinMid:{x:1096,z:176,y:12,name:"Hidden Lagoon"},fallLip:{x:1192,z:176,y:12,name:"Waterfall Lip"},landing:{x:1292,z:156,y:0,name:"Spray Landing"},combatTwo:{x:1400,z:46,y:0,name:"Patrol Beta"},beaconRun:{x:1462,z:-120,y:0,name:"Beacon Run"},finish:{x:1330,z:-404,y:0,name:"Beacon Finish"}},Oh=[{x:-1010,z:812,w:46},{x:-920,z:760,w:44},{x:-812,z:726,w:42},{x:-700,z:690,w:40},{x:-584,z:638,w:38},{x:-470,z:592,w:32},{x:-362,z:552,w:30},{x:-250,z:520,w:26},{x:-140,z:498,w:34},{x:-30,z:470,w:40},{x:72,z:444,w:36},{x:170,z:420,w:24},{x:258,z:392,w:22},{x:350,z:360,w:26},{x:438,z:330,w:30},{x:520,z:300,w:34},{x:592,z:282,w:30},{x:640,z:268,w:20},{x:716,z:256,w:16},{x:790,z:244,w:15},{x:860,z:230,w:15},{x:900,z:220,w:15},{x:952,z:208,w:17},{x:1002,z:194,w:26},{x:1048,z:186,w:34},{x:1096,z:178,w:38},{x:1148,z:177,w:34},{x:1192,z:176,w:26},{x:1242,z:170,w:26},{x:1292,z:156,w:34},{x:1350,z:110,w:38},{x:1400,z:46,w:40},{x:1442,z:-26,w:42},{x:1456,z:-56,w:40},{x:1462,z:-120,w:38},{x:1440,z:-212,w:38},{x:1400,z:-306,w:40},{x:1330,z:-404,w:44},{x:1258,z:-486,w:46}],pn={mouth:{x:640,z:268},throat:{x:790,z:244},ramp:{x:900,z:220},exit:{x:985,z:198},spine:[{x:596,z:282},{x:640,z:268},{x:700,z:257},{x:790,z:244},{x:866,z:228},{x:928,z:214},{x:985,z:198},{x:1002,z:194}],radius:15.5,rampStart:.36,rampEnd:.92},mt={x:1096,z:176,r:96,rim:48,level:12,spillX:1192,spillZ:176,spillWidth:50,spillLevel:12};function _x(s,t=26){const e=[],i=s.length;for(let o=0;o<i-1;o++){const a=s[Math.max(0,o-1)],l=s[o],c=s[o+1],h=s[Math.min(i-1,o+2)],u=t;for(let d=0;d<u;d++){const f=d/u,g=Nh(a,l,c,h,f),x=qe(l.w??34,c.w??34,f);e.push({x:g.x,z:g.z,w:x})}}const n=s[i-1];e.push({x:n.x,z:n.z,w:n.w??34});const r=[0];for(let o=1;o<e.length;o++){const a=e[o].x-e[o-1].x,l=e[o].z-e[o-1].z;r.push(r[o-1]+Math.hypot(a,l))}for(let o=0;o<e.length;o++){const a=e[Math.max(0,o-1)],l=e[Math.min(e.length-1,o+1)],c=l.x-a.x,h=l.z-a.z,u=Math.hypot(c,h)||1;e[o].tx=c/u,e[o].tz=h/u,e[o].s=r[o]}return{pts:e,total:r[r.length-1]}}const Gr=_x(Oh,26),Bh=Gr.total;function kh(s,t={}){const e=Gr.pts;s=xi(s,0,Gr.total);let i=0,n=e.length-1;for(;i<n-1;){const h=i+n>>1;e[h].s<=s?i=h:n=h}const r=e[i],o=e[n],a=o.s-r.s||1,l=(s-r.s)/a;t.x=qe(r.x,o.x,l),t.z=qe(r.z,o.z,l),t.tx=qe(r.tx,o.tx,l),t.tz=qe(r.tz,o.tz,l);const c=Math.hypot(t.tx,t.tz)||1;return t.tx/=c,t.tz/=c,t.w=qe(r.w,o.w,l),t.d=s,t}const Xi={x:0,z:0,d:0,dist:0,tx:0,tz:0,w:0};function os(s,t){const e=Gr.pts;let i=1/0,n=0;for(let o=0;o<e.length;o+=4){const a=e[o].x-s,l=e[o].z-t,c=a*a+l*l;c<i&&(i=c,n=o)}for(let o=Math.max(0,n-5);o<Math.min(e.length,n+6);o++){const a=e[o].x-s,l=e[o].z-t,c=a*a+l*l;c<i&&(i=c,n=o)}const r=e[n];return Xi.x=r.x,Xi.z=r.z,Xi.d=r.s,Xi.dist=Math.sqrt(i),Xi.tx=r.tx,Xi.tz=r.tz,Xi.w=r.w,Xi}function Mx(s){const t=kh(s,{});return Math.atan2(t.tx,t.tz)}const Hh=(()=>{const s=pn.spine,t=[];for(let n=0;n<s.length-1;n++){const r=s[Math.max(0,n-1)],o=s[n],a=s[n+1],l=s[Math.min(s.length-1,n+2)];for(let c=0;c<20;c++)t.push(Nh(r,o,a,l,c/20))}t.push(s[s.length-1]);const e=[0];for(let n=1;n<t.length;n++)e.push(e[n-1]+Math.hypot(t[n].x-t[n-1].x,t[n].z-t[n-1].z));const i=e[e.length-1];return{pts:t,cum:e,total:i}})();function yx(s,t={}){const{pts:e,cum:i,total:n}=Hh;s=ge(s);const r=s*n;let o=0,a=e.length-1;for(;o<a-1;){const c=o+a>>1;i[c]<=r?o=c:a=c}const l=(r-i[o])/(i[a]-i[o]||1);return t.x=qe(e[o].x,e[a].x,l),t.z=qe(e[o].z,e[a].z,l),t}function il(s,t){const{pts:e}=Hh;let i=1/0,n=0;for(let r=0;r<e.length;r++){const o=e[r].x-s,a=e[r].z-t,l=o*o+a*a;l<i&&(i=l,n=r)}return Math.sqrt(i)>pn.radius*2.6?-1:n/(e.length-1)}const Mc=6;function is(s,t){const e=il(s,t);if(e>=0&&e>pn.rampStart)return mt.level*Hr(pn.rampStart,pn.rampEnd,e);const i=Math.hypot(s-mt.x,t-mt.z);return i<=mt.r-Mc?mt.level:i>=mt.r?0:mt.level*Hr(mt.r,mt.r-Mc,i)}function wx(){return!1}function Sx(s,t){const e=Math.hypot(s-mt.x,t-mt.z);return 1-Hr(mt.r-6,mt.r+mt.rim,e)}const bx=[{at:"startDock",offset:132,name:"Harbour Mouth",sub:"Thread the buoy gates",gate:"buoys"},{at:"reefShallows",offset:0,name:"Reef Shallows",sub:"Watch the coral heads",gate:"buoys"},{at:"arch",offset:0,name:"The Reef Arch",sub:"Full throttle through the arch",gate:"arch"},{at:"combatOne",offset:0,name:"Patrol Alpha",sub:"Clear the hostile boats",gate:"buoys"},{at:"channelIn",offset:0,name:"Twin Palm Channel",sub:"Narrow water — hold the line",gate:"buoys"},{at:"minefield",offset:0,name:"Mine Channel",sub:"Mines ahead — stay off the banks",gate:"buoys"},{at:"caveMouth",offset:0,name:"Sea Cave",sub:"Douse the lights and run",gate:"cave"},{at:"fallLip",offset:-18,name:"The Falls",sub:"Ride the lip — brace for the drop",gate:"lip"},{at:"finish",offset:0,name:"Beacon Finish",sub:"Cross the line",gate:"finish"}],pi=bx.map(s=>{const t=Wt[s.at],e=os(t.x,t.z);return{...s,d:Math.max(0,Math.min(Bh,e.d+(s.offset||0))),y:t.y||0}}),ci=os(Wt.fallLip.x,Wt.fallLip.z).d,Vr=os(Wt.caveMouth.x,Wt.caveMouth.z).d,Rr=os(Wt.caveExit.x,Wt.caveExit.z).d,yc=os(Wt.finish.x,Wt.finish.z).d,Dt={A:Wt,LINE:Oh,CAVE:pn,BASIN:mt,CHECKPOINTS:pi,length:Bh,pointAt:kh,nearestOnRoute:os,headingAt:Mx,cavePointAt:yx,caveParam:il,waterLevelAt:is,waterMask:wx,basinFalloff:Sx},Ax=new C;function Je(s,t,e){const i=is(t,e);return s?s.heightAt(t,e)+i:i}function Tx(s,t,e,i=Ax){return s&&s.normalAt(t,e,i)||i.set(0,1,0)}const Ex=`
attribute float aSize;
attribute float aAlpha;
attribute vec3 aColor;
varying float vAlpha;
varying vec3 vColor;
uniform float uScale;
void main(){
  vAlpha = aAlpha; vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = max(1.0, aSize * uScale / max(0.001, -mv.z));
  gl_Position = projectionMatrix * mv;
}`,Cx=`
varying float vAlpha;
varying vec3 vColor;
uniform float uSoft;
uniform float uGlow;
void main(){
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.5 - uSoft, d);
  // inner hot core for glowing particles
  float core = smoothstep(0.34, 0.0, d) * uGlow;
  vec3 col = vColor + core;
  gl_FragColor = vec4(col, a * vAlpha);
}`;class Gh{constructor(t,e={}){this.max=e.max??1400,this.gravity=e.gravity??-9.8,this.count=0,this.cursor=0;const i=this.max;this.pos=new Float32Array(i*3),this.vel=new Float32Array(i*3),this.col=new Float32Array(i*3),this.endCol=new Float32Array(i*3),this.size=new Float32Array(i),this.endSize=new Float32Array(i),this.alpha=new Float32Array(i),this.baseAlpha=new Float32Array(i),this.life=new Float32Array(i),this.maxLife=new Float32Array(i),this.drag=new Float32Array(i),this.grav=new Float32Array(i),this.alive=new Uint8Array(i);const n=new te;this.aPos=new Se(this.pos,3).setUsage(Ii),this.aCol=new Se(new Float32Array(i*3),3).setUsage(Ii),this.aSize=new Se(new Float32Array(i),1).setUsage(Ii),this.aAlpha=new Se(new Float32Array(i),1).setUsage(Ii),n.setAttribute("position",this.aPos),n.setAttribute("aColor",this.aCol),n.setAttribute("aSize",this.aSize),n.setAttribute("aAlpha",this.aAlpha),n.setDrawRange(0,0),this.geo=n,this.mat=new $t({vertexShader:Ex,fragmentShader:Cx,uniforms:{uScale:{value:520},uSoft:{value:e.soft??.34},uGlow:{value:e.glow??0}},transparent:!0,depthWrite:e.depthWrite??!1,blending:e.blending??De}),this.points=new pg(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=e.renderOrder??6,this.points.name="ParticleSystem",t.add(this.points),this._c=new ot,this._ec=new ot}spawn(t){let e=-1;this.count<this.max?e=this.count++:(e=this.cursor,this.cursor=(this.cursor+1)%this.max);const i=e*3;return this.pos[i]=t.x,this.pos[i+1]=t.y,this.pos[i+2]=t.z,this.vel[i]=t.vx||0,this.vel[i+1]=t.vy||0,this.vel[i+2]=t.vz||0,this._c.set(t.color??16777215),this._ec.set(t.endColor??t.color??16777215),this.col[i]=this._c.r,this.col[i+1]=this._c.g,this.col[i+2]=this._c.b,this.endCol[i]=this._ec.r,this.endCol[i+1]=this._ec.g,this.endCol[i+2]=this._ec.b,this.size[e]=t.size??1.2,this.endSize[e]=t.endSize??(t.size??1.2)*1.6,this.alpha[e]=t.alpha??1,this.baseAlpha[e]=t.alpha??1,this.life[e]=0,this.maxLife[e]=t.life??1,this.drag[e]=t.drag??1.4,this.grav[e]=t.gravity??this.gravity,this.alive[e]=1,e}update(t){const{pos:e,vel:i,life:n,maxLife:r,alive:o,size:a,endSize:l,col:c,endCol:h,alpha:u}=this;let d=0;const f=this.count;for(let p=0;p<f;p++){if(!o[p])continue;n[p]+=t;const M=n[p]/r[p];if(M>=1){o[p]=0,u[p]=0,a[p]=0;continue}const v=p*3,y=Math.exp(-this.drag[p]*t);i[v]*=y,i[v+2]*=y,i[v+1]=i[v+1]*y+this.grav[p]*t,e[v]+=i[v]*t,e[v+1]+=i[v+1]*t,e[v+2]+=i[v+2]*t;const P=M*M*(3-2*M);a[p]+=(l[p]-a[p])*Math.min(1,t*6),c[v]+=(h[v]-c[v])*Math.min(1,t*3),c[v+1]+=(h[v+1]-c[v+1])*Math.min(1,t*3),c[v+2]+=(h[v+2]-c[v+2])*Math.min(1,t*3),u[p]=(1-P)*this.baseAlpha[p],d++}this.liveCount=d;const g=this.aCol.array,x=this.aSize.array,m=this.aAlpha.array;for(let p=0;p<f;p++){const M=p*3;g[M]=c[M],g[M+1]=c[M+1],g[M+2]=c[M+2],x[p]=a[p],m[p]=u[p]}this.geo.setDrawRange(0,f),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0,this.aAlpha.needsUpdate=!0}burst(t,e,i,n={}){const r=n.count??12,o=n.speed??6,a=n.spread??1;for(let l=0;l<r;l++){const c=Math.random()*Math.PI*2,h=n.up??.6,u=o*(.45+Math.random()*.9);this.spawn({x:t+(Math.random()-.5)*(n.jitter??.6),y:e+(Math.random()-.5)*(n.jitter??.6),z:i+(Math.random()-.5)*(n.jitter??.6),vx:Math.cos(c)*u*a,vy:h*u*(.4+Math.random()),vz:Math.sin(c)*u*a,life:(n.life??1)*(.6+Math.random()*.7),size:(n.size??1.2)*(.7+Math.random()*.7),endSize:n.endSize??(n.size??1.2)*2,color:n.color,endColor:n.endColor,alpha:n.alpha??1,drag:n.drag??1.2,gravity:n.gravity})}}clear(){this.alive.fill(0),this.alpha.fill(0),this.baseAlpha.fill(0),this.size.fill(0)}}class ko{constructor(t,{length:e=48,width:i=1,color:n=16777215,additive:r=!0,opacity:o=.9}={}){this.n=e,this.width=i,this.pts=new Float32Array(e*3),this.filled=!1;const a=[];for(let h=0;h<e-1;h++){const u=h*2,d=h*2+1,f=(h+1)*2,g=(h+1)*2+1;a.push(u,d,f,d,g,f)}const l=new te;this.posAttr=new Se(new Float32Array(e*2*3),3).setUsage(Ii),l.setAttribute("position",this.posAttr);const c=new Float32Array(e*2*2);for(let h=0;h<e;h++){const u=h/(e-1);c[h*4]=u,c[h*4+1]=0,c[h*4+2]=u,c[h*4+3]=1}l.setAttribute("uv",new Se(c,2)),l.setIndex(a),this.geo=l,this.mat=new $t({transparent:!0,depthWrite:!1,side:pe,blending:r?De:wi,uniforms:{uColor:{value:new ot(n)},uOpacity:{value:o},uFade:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform vec3 uColor; uniform float uOpacity; uniform float uFade;
        void main(){ float e = pow(1.0-vUv.x, 1.4); float s = smoothstep(0.0,0.32,vUv.y)*smoothstep(1.0,0.68,vUv.y);
          gl_FragColor = vec4(uColor, e*s*uOpacity*uFade); }`}),this.mesh=new k(l,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,t.add(this.mesh)}push(t,e,i,n,r,o=this.width){const a=this.pts;for(let u=this.n-1;u>0;u--)a[u*3]=a[(u-1)*3],a[u*3+1]=a[(u-1)*3+1],a[u*3+2]=a[(u-1)*3+2];a[0]=t,a[1]=e,a[2]=i;const l=-r,c=n,h=this.posAttr.array;for(let u=0;u<this.n;u++){const d=u/(this.n-1),f=o*(1-d*.85);h[u*6]=a[u*3]+l*f,h[u*6+1]=a[u*3+1],h[u*6+2]=a[u*3+2]+c*f,h[u*6+3]=a[u*3]-l*f,h[u*6+4]=a[u*3+1],h[u*6+5]=a[u*3+2]-c*f}this.posAttr.needsUpdate=!0}reset(t,e,i){for(let n=0;n<this.n;n++)this.pts[n*3]=t,this.pts[n*3+1]=e,this.pts[n*3+2]=i}setFade(t){this.mat.uniforms.uFade.value=t}}const Rx=13,xs=33.5,wc=51,Px=-9,Lx=.92,Sc=1.3,Dx=1.22,Ix=.34;class zx{constructor(t,e){this.scene=t,this.ctx=e,this.water=e.world?.water||null,this.model=vx(),this.group=this.model.group,this.parts=this.model.parts,this.mats=this.model.materials,t.add(this.group),this.position=new C(0,0,0),this.velocity=new C,this.heading=0,this.yawRate=0,this.bank=0,this.pitch=0,this.roll=0,this.speed=0,this.forwardSpeed=0,this.radius=2.1,this.maxHp=100,this.hp=this.maxHp,this.boost=1,this.boostActive=!1,this.boostReady=!0,this.shield=0,this.dual=0,this.airborne=!1,this.submerged=!1,this.airTime=0,this.hitFlash=0,this.shake=0,this.shakeRot=0,this.alive=!0,this.invuln=0,this.lastDamageAt=-99,this.landedHard=0,this._steerSmooth=0,this._throttleSmooth=0,this._wakeAcc=0,this._sprayAcc=0,this._propAngle=0,this._wheelAngle=0,this._airTimer=0,this._groundedTimer=0,this._tmpA=new C,this._tmpB=new C,this._samples=[new C,new C,new C,new C],this._sH=[0,0,0,0],this._prevY=0,this.trail=new ko(t,{length:40,width:.34,color:9434879,additive:!0,opacity:.26}),this.trail.setFade(0),this.trailL=new ko(t,{length:30,width:.26,color:16762460,additive:!0,opacity:.24}),this.trailR=new ko(t,{length:30,width:.26,color:16762460,additive:!0,opacity:.24}),this.trailL.setFade(0),this.trailR.setFade(0),this.reset(0,0,0)}reset(t,e,i){const n=is(t,e);this.position.set(t,n+.35,e),this.velocity.set(0,0,0),this.heading=i,this.yawRate=0,this.bank=0,this.pitch=0,this.roll=0,this.speed=0,this.forwardSpeed=0,this.hp=this.maxHp,this.boost=1,this.boostActive=!1,this.boostReady=!0,this.shield=0,this.dual=0,this.airborne=!1,this.submerged=!1,this.airTime=0,this.hitFlash=0,this.shake=0,this.alive=!0,this.invuln=1.2,this._steerSmooth=0,this._throttleSmooth=0,this._wakeAcc=0,this._sprayAcc=0,this._propAngle=0,this._wheelAngle=0,this._airTimer=0,this._groundedTimer=1,this._prevY=this.position.y,this.trail.reset(t,this.position.y,e-4),this.trailL.reset(t,this.position.y,e-4),this.trailR.reset(t,this.position.y,e-4),this.trail.setFade(0),this.trailL.setFade(0),this.trailR.setFade(0),this._syncTransform(0)}applyDamage(t,e=0,i=0,n=0){if(!(!this.alive||this.invuln>0)){if(this.shield>0){this.shield=Math.max(0,this.shield-t*.02),this.hitFlash=Math.max(this.hitFlash,.5),this.ctx.events?.emit("shield:absorbed",{x:this.position.x,y:this.position.y,z:this.position.z}),this.ctx.audio?.impact(),this.impulseFrom(e,i,n,.45);return}this.hp=Math.max(0,this.hp-t),this.hitFlash=Math.max(this.hitFlash,ge(t/22)),this.shake=Math.min(1.6,this.shake+t*.045),this.impulseFrom(e,i,n,ge(t/26)),this.ctx.events?.emit("player:damage",{amount:t,hp:this.hp}),this.ctx.audio?.impact(),this.hp<=0&&(this.alive=!1,this.ctx.events?.emit("player:died",{}))}}impulseFrom(t,e,i,n){const r=this.position.x-t,o=this.position.z-i,a=Math.hypot(r,o)||1;this.velocity.x+=r/a*n*7,this.velocity.z+=o/a*n*7,this.velocity.y+=n*2}applyImpulse(t,e,i){this.velocity.x+=t,this.velocity.y+=e,this.velocity.z+=i}update(t,e,i){t=Math.min(t,1/25);const n=this.ctx.world?.water||null;this.water=n;const r=this.shield>0,o=e.boost&&this.boost>.02&&this.hp>0;this._throttleSmooth=we(this._throttleSmooth,e.throttle,7.5,t),this._steerSmooth=we(this._steerSmooth,e.steer,9,t),this.boostActive=o;const a=Math.sin(this.heading),l=Math.cos(this.heading);let c=this.velocity.x*a+this.velocity.z*l;const h=Math.cos(this.heading),u=-Math.sin(this.heading);let d=this.velocity.x*h+this.velocity.z*u;this.boostActive?(this.boost=Math.max(0,this.boost-t*.34),c+=(wc-c)*Math.min(1,Sc*t)):this.boost=Math.min(1,this.boost+t*.022),this.boostReady=this.boost>.14;const f=!this.airborne,g=this._throttleSmooth;let x;g>=0?x=qe(0,xs,g):x=qe(0,Px,-g),f||(x*=.35);const m=this.boostActive?Sc:Lx,p=(x-c)*m;c+=p*t;const M=f?.0022:6e-4;c-=c*Math.abs(c)*M*t,c-=c*(f?.28:.12)*t;const v=(e.drift?1.1:5.4)*(f?1:.25);d*=Math.exp(-v*t);const y=Math.abs(c),P=Math.min(1,y/7.5)*(1-.4*ge(y/44)),A=f?1:.5,T=-this._steerSmooth*Dx*P*A,L=f?6.5:3;this.yawRate=we(this.yawRate,T,L,t),this.heading=Uh(this.heading+this.yawRate*t),f&&(d+=this.yawRate*y*.055*t);const D=Math.sin(this.heading),_=Math.cos(this.heading),S=Math.cos(this.heading),N=-Math.sin(this.heading);this.velocity.x=D*c+S*d,this.velocity.z=_*c+N*d,this.forwardSpeed=c,this.speed=Math.hypot(this.velocity.x,this.velocity.z);const V=.46-ge(this.speed/xs)*.16,q=Je(n,this.position.x,this.position.z),B=this.position.y-q;if(this.airborne){this.velocity.y-=Rx*t,this.airTime+=t;const $=xi(this._throttleSmooth,-1,1);this.pitch=we(this.pitch,.06+$*.52,2.6,t),this.bank=we(this.bank,0,2,t),B<=V+.22&&this.velocity.y<=.5&&this._land(n)}else this.velocity.y+=(q+V-this.position.y)*82*t,this.velocity.y*=Math.exp(-14*t),B>1.35&&(this.airborne=!0,this.airTime=0);this.position.y+=this.velocity.y*t,this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this._collide(t),this._terrain(t),this._attitude(n,t,i),this.hitFlash=Math.max(0,this.hitFlash-t*2.6),this.shake=Math.max(0,this.shake-t*2.1),this.invuln=Math.max(0,this.invuln-t),this.shield=Math.max(0,this.shield-t),this.dual=Math.max(0,this.dual-t),r&&this.shield<=0&&this.ctx.events?.emit("shield:down",{}),r&&this.ctx.events?.emit("shield:tick",{x:this.position.x,y:this.position.y,z:this.position.z}),this._animate(t,q),this._vfx(t,n,q),this._syncTransform(t)}_land(t){const e=Math.max(0,-this.velocity.y);if(this.airborne=!1,this.airTime=0,this.velocity.y=Math.max(this.velocity.y,-1.5)*.12,this.position.y=Je(t,this.position.x,this.position.z)+.28,this.pitch=-.1,e>3.5){const i=xi(e/12,.5,3.2);this.landedHard=i,this.shake=Math.min(2,this.shake+i*.55),this.ctx.effects?.splash(this.position.x,this.position.y,this.position.z,i*1.15,Math.round(28*i)),this.ctx.audio?.splash(i),this.ctx.events?.emit("boat:landed",{x:this.position.x,y:this.position.y,z:this.position.z,impact:e}),e>20&&this.applyDamage(Math.min(20,(e-20)*1.5),this.position.x,this.position.y,this.position.z)}}_collide(t){const e=this.ctx.world?.colliders;if(!e||!e.length)return;const i=this.radius;for(let n=0;n<e.length;n++){const r=e[n];if(r.top!==void 0&&r.top<Je(this.water,this.position.x,this.position.z)-.5)continue;const o=this.position.x-r.x,a=this.position.z-r.z,l=Math.hypot(o,a),c=r.r+i;if(l<c&&l>1e-4){const h=o/l,u=a/l,d=c-l;this.position.x+=h*d,this.position.z+=u*d;const f=this.velocity.x*h+this.velocity.z*u;if(f<0){this.velocity.x-=h*f*1.55,this.velocity.z-=u*f*1.55;const g=Math.abs(f);g>3&&(this.shake=Math.min(2,this.shake+xi(g/22,0,1.1)),this.ctx.effects?.impact(this.position.x,this.position.y,this.position.z,h,0,u,xi(g/12,.4,2)),this.ctx.audio?.impact(),g>9&&this.applyDamage((g-8)*1.6,r.x,this.position.y,r.z))}}}}_terrain(t){const e=this.ctx.world;if(!e?.heightAt)return;const i=e.heightAt(this.position.x,this.position.z),n=is(this.position.x,this.position.z);if(i<=n+.25)return;const r=i;if(this.position.y<r+.15){const o=r+.15-this.position.y;this.position.y+=o,this.velocity.y=Math.max(0,this.velocity.y);const a=Math.exp(-3.2*t);this.velocity.x*=a,this.velocity.z*=a,this.speed>6&&(this.ctx.effects?.splash(this.position.x,r,this.position.z,.5,6),this.shake=Math.min(1.4,this.shake+.16))}}_attitude(t,e,i){const n=this._samples,r=this._sH,o=Math.cos(this.heading),a=Math.sin(this.heading),l=(M,v,y)=>{n[M].set(this.position.x+v*o+y*a,0,this.position.z-v*a+y*o),r[M]=Je(t,n[M].x,n[M].z)};l(0,0,3.1),l(1,-1.05,-2.9),l(2,1.05,-2.9),l(3,0,0);const c=Math.atan2(r[0]-(r[1]+r[2])*.5,6),h=Math.atan2(r[1]-r[2],2.1),u=ge(this.speed/xs),d=this.airborne?0:(.028+u*.075)*(this.boostActive?1.25:1),f=ge(-this._throttleSmooth)*.09,g=this.airborne?this.pitch:c+d-f,x=this.airborne?this.bank:h-this.yawRate*Ix*(.55+u*.85),m=this.airborne?3.2:7;this.pitch=we(this.pitch,g,m,e),this.bank=we(this.bank,x,m,e),this.roll=this.bank,this.speed<1.2&&!this.airborne&&(this.bank+=Math.sin(i*1.35)*.011);const p=r[3];this.submerged=this.position.y<p+.1}_animate(t,e){const i=this.parts,n=ge(this.speed/wc)*.75+(this.boostActive?.25:0)+(this._throttleSmooth>0?.14:0);this._propAngle+=t*(9+n*46);for(const u of i.propellers)u.rotation.z=this._propAngle;const r=xi(this.pitch*.55+(this.airborne?.1:0),-.3,.35);for(const u of i.engines)u.rotation.x=qe(u.rotation.x,r,Math.min(1,t*5));this._wheelAngle=we(this._wheelAngle,this._steerSmooth*1.9,8,t),i.wheel.rotation.z=this._wheelAngle,i.driver.rotation.z=this._wheelAngle*.1,i.driver.rotation.y=-this._wheelAngle*.06;const o=this._steerSmooth*.22;i.yoke.rotation.y=we(i.yoke.rotation.y,o,5,t);const a=ge(this.speed/xs)*.22;i.trimTabs[0].rotation.x=-a,i.trimTabs[1].rotation.x=-a;const l=this.ctx.time||0;i.flag.rotation.y=Math.sin(l*5.1)*.22+this.yawRate*.35,i.flag.rotation.z=Math.sin(l*7.7+1.2)*.13;const c=this.hitFlash,h=this.mats.hull;if(h&&(h.emissive.setRGB(c*.85,c*.1,c*.08),h.emissiveIntensity=1),this.shield>0){if(!this._shieldMesh){const d=new Ee(3.4,20,14),f=new $t({transparent:!0,depthWrite:!1,side:pe,blending:De,uniforms:{uTime:{value:0},uStrength:{value:1},uHit:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vP; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vP=mv.xyz; gl_Position=projectionMatrix*mv; }",fragmentShader:`varying vec3 vN; varying vec3 vP; uniform float uTime; uniform float uStrength; uniform float uHit;
            void main(){ float f = pow(1.0-abs(dot(normalize(vN), normalize(-vP))), 2.2);
              float hex = 0.55+0.45*sin(vP.y*7.0+uTime*3.0)*sin(vP.x*6.0-uTime*2.0);
              vec3 col = mix(vec3(0.28,0.72,1.0), vec3(0.75,0.96,1.0), f);
              gl_FragColor = vec4(col + uHit*vec3(0.6), (f*0.5 + 0.05)*hex*uStrength); }`});this._shieldMesh=new k(d,f),this._shieldMesh.scale.set(1,.55,1.25),this.group.add(this._shieldMesh)}this._shieldMesh.visible=!0;const u=this._shieldMesh.material;u.uniforms.uTime.value=this.ctx.time||0,u.uniforms.uStrength.value=ge(this.shield/3)*.9+.25,u.uniforms.uHit.value=this.hitFlash}else this._shieldMesh&&(this._shieldMesh.visible=!1)}_vfx(t,e,i){const n=ge(this.speed/xs),r=this.boostActive,o=this.ctx.particles?.spray,a=this.ctx.particles?.smoke;if(e&&!this.airborne){this._wakeAcc+=t*(7+n*58);const c=this.parts.anchors,h=this.velocity.x,u=this.velocity.z,d=Math.hypot(h,u)||1,f=h/d,g=u/d;for(;this._wakeAcc>=1;){this._wakeAcc-=1;const x=ge(this.speed/26);this._localToWorld(c.wakeL,this._tmpA),this._localToWorld(c.wakeR,this._tmpB),e.splatWake(this._tmpA.x,this._tmpA.z,h,u,.3+x*.95,2.1+x*2.6),e.splatWake(this._tmpB.x,this._tmpB.z,h,u,.3+x*.95,2.1+x*2.6),this._localToWorld(c.stern,this._tmpA),e.splatWake(this._tmpA.x,this._tmpA.z,h,u,.45+x*1.15,2.6+x*3),x>.22&&(e.splatFoam(this._tmpA.x-f*1.2,this._tmpA.z-g*1.2,x*.62,3.4+x*2.2),this._localToWorld(c.chineL,this._tmpA),this._localToWorld(c.chineR,this._tmpB),e.splatFoam(this._tmpA.x,this._tmpA.z,x*.3,1.5+x),e.splatFoam(this._tmpB.x,this._tmpB.z,x*.3,1.5+x))}}if(o&&!this.airborne&&this.speed>7){const c=(this.speed-7)*(.55+Math.abs(this.yawRate)*1.5)*(r?1.7:1);this._sprayAcc+=t*c;const h=this.parts.anchors;for(;this._sprayAcc>=1;){this._sprayAcc-=1;const u=Math.random()<.5?h.chineL:h.chineR;this._localToWorld(u,this._tmpA);const d=this.velocity.x*.25+(Math.random()-.5)*3,f=this.velocity.z*.25+(Math.random()-.5)*3;o.spawn({x:this._tmpA.x,y:i+.1,z:this._tmpA.z,vx:d,vy:2.2+Math.random()*2.4+this.speed*.06,vz:f,life:.42+Math.random()*.42,size:.7+Math.random()*.9+n*.4,endSize:1.8+Math.random()*1.5,color:15924735,endColor:11066602,alpha:.22+n*.26,drag:1.9,gravity:-9})}}const l=r?1:0;if(this.trail.setFade(we(this.trail.mat.uniforms.uFade.value,l,6,t)),this.trailL.setFade(we(this.trailL.mat.uniforms.uFade.value,l,6,t)),this.trailR.setFade(we(this.trailR.mat.uniforms.uFade.value,l,6,t)),r){const c=this.parts.anchors;this._localToWorld(c.stern,this._tmpA);const h=Math.sin(this.heading),u=Math.cos(this.heading);if(this.trail.push(this._tmpA.x-h*1.2,this._tmpA.y+.35,this._tmpA.z-u*1.2,h,u,.34),this._localToWorld(c.sternL,this._tmpA),this._localToWorld(c.sternR,this._tmpB),this.trailL.push(this._tmpA.x-h*1,this._tmpA.y+.1,this._tmpA.z-u*1,h,u,.26),this.trailR.push(this._tmpB.x-h*1,this._tmpB.y+.1,this._tmpB.z-u*1,h,u,.26),this.ctx.particles?.glow){const d=this.ctx.particles.glow;for(let f=0;f<3;f++){const g=this.parts.exhausts[f];this._localToWorld(g.position,this._tmpA),d.spawn({x:this._tmpA.x,y:this._tmpA.y,z:this._tmpA.z,vx:-h*(5+Math.random()*6)+(Math.random()-.5)*2,vy:.5+Math.random()*1.4,vz:-u*(5+Math.random()*6)+(Math.random()-.5)*2,life:.16+Math.random()*.16,size:.75+Math.random()*.6,endSize:1.7,color:16766073,endColor:16734771,alpha:.5,drag:3.1,gravity:.4})}}o&&this.speed>12&&(this._localToWorld(this.parts.anchors.stern,this._tmpA),o.spawn({x:this._tmpA.x,y:i+.2,z:this._tmpA.z,vx:-Math.sin(this.heading)*-8+(Math.random()-.5)*4,vy:3.4+Math.random()*3,vz:-Math.cos(this.heading)*-8+(Math.random()-.5)*4,life:.5,size:1,endSize:2.4,color:16777215,endColor:13627126,alpha:.22,drag:1.6,gravity:-8}))}for(const c of this.parts.boostRings)c.visible=r,r&&(c.rotation.z+=t*4);if(a&&this.hp<this.maxHp*.45){const c=1-this.hp/(this.maxHp*.45);Math.random()<t*(2+c*7)&&(this._localToWorld(this.parts.anchors.stern,this._tmpA),a.spawn({x:this._tmpA.x+(Math.random()-.5)*1.5,y:this._tmpA.y+1,z:this._tmpA.z+(Math.random()-.5)*1.5,vx:(Math.random()-.5)*1.6,vy:2.4+Math.random()*1.6,vz:(Math.random()-.5)*1.6,life:1.6+Math.random(),size:1.6,endSize:6.5,color:3356733,endColor:1316892,alpha:.5,drag:.8,gravity:.5}))}}_localToWorld(t,e){const i=Math.cos(this.heading),n=Math.sin(this.heading);return e.set(this.position.x+t.x*i+t.z*n,this.position.y+t.y,this.position.z-t.x*n+t.z*i),e}_syncTransform(t){this.group.position.copy(this.position),this.group.rotation.order="YXZ",this.group.rotation.set(-this.pitch,this.heading,this.roll)}getMuzzleWorld(t=new C,e=null){return this.parts.muzzle.getWorldPosition(t),e&&e.set(0,0,1).applyQuaternion(this.parts.muzzle.getWorldQuaternion(new xn)),t}dispose(){this.scene.remove(this.group),this.model.dispose()}}const bc=["chase","close","far"],Ho={chase:{back:5.4,up:2.18,look:10,fov:58},close:{back:4.2,up:1.62,look:12,fov:62},far:{back:9.2,up:3.55,look:10,fov:53}};class Ux{constructor(t,e){this.camera=t,this.ctx=e,this.mode="chase",this.modeIndex=0,this.attract=!1,this.attractStops=[],this.attractIndex=0,this.attractT=0,this.yaw=0,this.pos=new C(0,6,-12),this.look=new C,this.shakeScale=1,this.shake=0,this.shakeSeed=Math.random()*100,this.fov=62,this.roll=0,this.routeD=0,this.initialised=!1,this._tmp=new C,this._tmp2=new C,this._ideal=new C,this._lookIdeal=new C,this._tmp3=new C}cycleMode(){return this.modeIndex=(this.modeIndex+1)%bc.length,this.mode=bc[this.modeIndex],this.mode}setShakeScale(t){this.shakeScale=t}addShake(t){this.shake=Math.min(2.4,this.shake+t)}setAttractStops(t){this.attractStops=t||[],this.attractIndex=0,this.attractT=0}snapTo(t){if(!t)return;const e=Ho[this.mode];this.yaw=t.heading;const i=Math.sin(this.yaw),n=Math.cos(this.yaw);this.pos.set(t.position.x-i*e.back,t.position.y+e.up,t.position.z-n*e.back),this.look.copy(t.position),this.initialised=!0}update(t,e,i){if(this.attract){this._updateAttract(t,i);return}if(!e)return;this.initialised||this.snapTo(e);const n=Ho[this.mode],r=ge(e.speed/34),o=e.boostActive?1:0,a=il(e.position.x,e.position.z)>=0;let l=e.heading-this.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;const c=qe(4.6,2.9,r);this.yaw+=l*(1-Math.exp(-c*t));const h=this.routeD,u=h>ci-210&&h<ci-6,d=u?ge((h-(ci-210))/190):0,f=h>=ci-6&&h<ci+130;let g=n.back+r*3.1+o*1.6+(e.airborne?2.6:0)+(a?-2.2:0),x=n.up+r*.75+(e.airborne?1.5:0)+(a?-.35:0);u&&(x+=.5+d*5.6,g+=.8+d*3.4),f&&(x+=1.1,g+=2.1);const m=Math.sin(this.yaw),p=Math.cos(this.yaw),M=xi(-e.yawRate*2.1,-2.6,2.6)*(.4+r*.9),v=Math.cos(this.yaw),y=-Math.sin(this.yaw);this._ideal.set(e.position.x-m*g+v*M,e.position.y+x,e.position.z-p*g+y*M);const P=this.ctx.world?.water;if(P){const N=Je(P,this._ideal.x,this._ideal.z);this._ideal.y<N+1.35&&(this._ideal.y=N+1.35)}const A=this.ctx.world?.heightAt?.(this._ideal.x,this._ideal.z)??-99;A>-50&&this._ideal.y<A+1.1&&(this._ideal.y=A+1.1);const T=qe(7.5,10.5,r);this.pos.x=we(this.pos.x,this._ideal.x,T,t),this.pos.y=we(this.pos.y,this._ideal.y,e.airborne?3.2:5.6,t),this.pos.z=we(this.pos.z,this._ideal.z,T,t);const L=xi(-e.yawRate*8.5,-11,11),D=n.look+e.speed*.34;let _=e.position.y+1.55+(e.airborne?-1.7:0);u&&(_-=.5+d*5.2),f&&(_-=2.6),this._lookIdeal.set(e.position.x+m*D+v*L,_,e.position.z+p*D+y*L);const S=qe(6.5,9,r);this.look.x=we(this.look.x,this._lookIdeal.x,S,t),this.look.y=we(this.look.y,this._lookIdeal.y,4,t),this.look.z=we(this.look.z,this._lookIdeal.z,S,t),this._apply(t,e,i,r,o,a,d)}_apply(t,e,i,n,r,o,a=0){const l=Ho[this.mode],c=this.camera;this.shake=Math.max(0,this.shake-t*2.2);const h=e?e.shake:0,u=(this.shake+h*.55)*this.shakeScale,d=i*34+this.shakeSeed,f=Math.sin(d)*.5+Math.sin(d*1.7+1.3)*.5,g=Math.sin(d*1.23+.7)*.5+Math.sin(d*2.11+2.1)*.5,x=Math.sin(d*.91+2.4)*.5;c.position.set(this.pos.x+f*u*.55,this.pos.y+g*u*.42,this.pos.z+x*u*.55),c.up.set(0,1,0),c.lookAt(this.look.x+f*u*.2,this.look.y+g*u*.2,this.look.z+x*u*.2);const m=xi(-e.bank*.42+f*u*.035,-.28,.28);this.roll=we(this.roll,m,5.5,t),c.rotateZ(this.roll);const p=l.fov+n*9.5+r*7.5+(e.airborne?3:0)-(o?4:0)+a*5;this.fov=we(this.fov,p,3.4,t),Math.abs(c.fov-this.fov)>.01&&(c.fov=this.fov,c.updateProjectionMatrix())}_updateAttract(t,e){const i=this.attractStops;if(!i.length)return;const n=i[this.attractIndex%i.length];this.attractT+=t;const r=n.duration||6;this.attractT>r&&(this.attractT=0,this.attractIndex=(this.attractIndex+1)%i.length);const o=i[(this.attractIndex+1)%i.length],a=ge(this.attractT/r),c=a*a*(3-2*a)*.55;this._tmp.set(n.pos[0],n.pos[1],n.pos[2]),this._tmp2.set(o.pos[0],o.pos[1],o.pos[2]),this._tmp.lerp(this._tmp2,c),this._tmp3.set(n.look[0],n.look[1],n.look[2]),this._tmp2.set(o.look[0],o.look[1],o.look[2]),this._tmp3.lerp(this._tmp2,c),this.pos.lerp(this._tmp,1-Math.exp(-3*t)),this.look.lerp(this._tmp3,1-Math.exp(-4.2*t));const h=this.camera;h.position.copy(this.pos),h.up.set(0,1,0),h.lookAt(this.look);const u=Math.sin(e*.13)*.06;h.rotateZ(u),this.fov=we(this.fov,n.fov||52,1.6,t),Math.abs(h.fov-this.fov)>.01&&(h.fov=this.fov,h.updateProjectionMatrix()),this.attractIndex=this.attractIndex%i.length}}class Nx{constructor(t=window){this.keys=new Set,this.pressed=new Set,this.released=new Set,this.mouseDown=!1,this.mousePressed=!1,this.anyKey=!1,this.enabled=!0,this._touch={steer:0,throttle:0,active:!1};const e=n=>n.code||n.key;this._onDown=n=>{const r=e(n);this.keys.has(r)||this.pressed.add(r),this.keys.add(r),this.anyKey=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(r)&&n.preventDefault(),this.enabled},this._onUp=n=>{const r=e(n);this.keys.delete(r),this.released.add(r)},this._onBlur=()=>{this.keys.clear(),this.mouseDown=!1},t.addEventListener("keydown",this._onDown,{passive:!1}),t.addEventListener("keyup",this._onUp),t.addEventListener("blur",this._onBlur),document.addEventListener("visibilitychange",()=>{document.hidden&&this._onBlur()}),(document.getElementById("app")||window).addEventListener("mousedown",n=>{n.button===0&&(this.mouseDown=!0,this.mousePressed=!0,this.anyKey=!0)}),window.addEventListener("mouseup",n=>{n.button===0&&(this.mouseDown=!1)}),window.addEventListener("contextmenu",n=>{this.enabled&&n.preventDefault()})}down(...t){for(const e of t)if(this.keys.has(e))return!0;return!1}hit(...t){for(const e of t)if(this.pressed.has(e))return!0;return!1}up(...t){for(const e of t)if(this.released.has(e))return!0;return!1}endFrame(){this.pressed.clear(),this.released.clear(),this.mousePressed=!1}read(){const t=this.keys;let e=0,i=0;return(t.has("KeyW")||t.has("ArrowUp"))&&(e+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(e-=1),(t.has("KeyA")||t.has("ArrowLeft"))&&(i-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(i+=1),this._touch.active&&(e=Math.max(e,this._touch.throttle),i+=this._touch.steer,i=Math.max(-1,Math.min(1,i))),{throttle:e,steer:i,boost:t.has("Space"),fire:t.has("KeyF")||t.has("KeyJ")||this.mouseDown,drift:t.has("ShiftLeft")||t.has("ShiftRight"),brake:t.has("KeyS")||t.has("ArrowDown")}}}function Wr(s=1){let t=s>>>0||2654435769;const e=()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};for(let n=0;n<12;n++)e();return{get seed(){return s},next:e,range:(n,r)=>n+(r-n)*e(),int:(n,r)=>Math.floor(n+(r-n+1)*e()),pick:n=>n[Math.floor(e()*n.length)%n.length],sign:()=>e()<.5?-1:1,chance:n=>e()<n,gauss(){let n=0,r=0;for(;n===0;)n=e();for(;r===0;)r=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r)},shuffle(n){const r=n.slice();for(let o=r.length-1;o>0;o--){const a=Math.floor(e()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork(n=0){return Wr(s*2654435761+n*40503+12345>>>0)}}}class Fx{constructor(){this.map=new Map}on(t,e){let i=this.map.get(t);return i||(i=[],this.map.set(t,i)),i.push(e),()=>this.off(t,e)}off(t,e){const i=this.map.get(t);if(!i)return;const n=i.indexOf(e);n>=0&&i.splice(n,1)}emit(t,e){const i=this.map.get(t);if(i)for(let n=0;n<i.length;n++)i[n](e)}clear(){this.map.clear()}}class Ox{constructor(){this.ctx=null,this.ready=!1,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.volume=.7,this.muted=!1,this._noiseBuf=null,this._bed=null,this._musicNodes=null,this._engine=null,this._env=null}unlock(){if(this.ready)return this.ctx.state==="suspended"&&this.ctx.resume(),!0;const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;const e=this.ctx=new t({latencyHint:"interactive"});this.masterGain=e.createGain(),this.masterGain.gain.value=this.volume,this.masterGain.connect(e.destination);const i=e.createDynamicsCompressor();i.threshold.value=-10,i.knee.value=10,i.ratio.value=6,i.attack.value=.004,i.release.value=.18,i.connect(this.masterGain),this.bus=i,this.sfxGain=e.createGain(),this.sfxGain.gain.value=.95,this.sfxGain.connect(i),this.musicGain=e.createGain(),this.musicGain.gain.value=.42,this.musicGain.connect(i);const n=e.sampleRate*3,r=e.createBuffer(1,n,e.sampleRate),o=r.getChannelData(0);let a=0;for(let l=0;l<n;l++){const c=Math.random()*2-1;a=(a+.02*c)/1.02,o[l]=c*.7+a*3.2}return this._noiseBuf=r,this._buildEngine(),this._buildBeds(),this.ready=!0,this.startMusic(),e.state==="suspended"&&e.resume(),!0}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&(this.masterGain.gain.value=this.volume)}_noise(t,{gain:e=.2,type:i="lowpass",freq:n=900,q:r=1,sweep:o=0,attack:a=.002,curve:l=1}={}){const c=this.ctx,h=c.createBufferSource();h.buffer=this._noiseBuf,h.loop=!0;const u=Math.random()*2;h.loopStart=u,h.loopEnd=u+.9;const d=c.createBiquadFilter();d.type=i,d.frequency.value=n,d.Q.value=r;const f=c.createGain(),g=c.currentTime;return f.gain.setValueAtTime(0,g),f.gain.linearRampToValueAtTime(e,g+a),f.gain.exponentialRampToValueAtTime(1e-4,g+t),o&&d.frequency.exponentialRampToValueAtTime(Math.max(40,n+o),g+t),h.connect(d),d.connect(f),f.connect(this.sfxGain),h.start(g),h.stop(g+t+.02),{src:h,f:d,g:f}}_tone(t,e,{gain:i=.15,type:n="sine",sweep:r=0,delay:o=0,attack:a=.005,detune:l=0}={}){const c=this.ctx,h=c.currentTime+o,u=c.createOscillator();u.type=n,u.frequency.setValueAtTime(t,h),l&&(u.detune.value=l),r&&u.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),h+e);const d=c.createGain();d.gain.setValueAtTime(0,h),d.gain.linearRampToValueAtTime(i,h+a),d.gain.exponentialRampToValueAtTime(1e-4,h+e),u.connect(d),d.connect(this.sfxGain),u.start(h),u.stop(h+e+.03)}_buildEngine(){const t=this.ctx,e=t.createGain();e.gain.value=0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=420,i.Q.value=5;const n=t.createWaveShaper(),r=new Float32Array(256);for(let c=0;c<256;c++){const h=c/255*2-1;r[c]=Math.tanh(h*1.7)}n.curve=r,i.connect(n),n.connect(e),e.connect(this.sfxGain);const o=[];for(let c=0;c<3;c++){const h=t.createOscillator();h.type=c===2?"square":"sawtooth",h.frequency.value=40+c*3;const u=t.createGain();u.gain.value=c===2?.1:.34,h.connect(u),u.connect(i),h.start(),o.push(h)}const a=t.createOscillator();a.type="triangle",a.frequency.value=700;const l=t.createGain();l.gain.value=0,a.connect(l),l.connect(this.sfxGain),a.start(),this._engine={oscs:o,filt:i,out:e,whine:a,wg:l,load:0}}setEngine(t,e,{inCave:i=!1,submerged:n=!1}={}){if(!this._engine)return;const r=this._engine,o=this.ctx.currentTime,a=42+t*168;for(let c=0;c<r.oscs.length;c++)r.oscs[c].frequency.setTargetAtTime(a*(c===2?2.01:1+c*.006),o,.06);r.filt.frequency.setTargetAtTime(260+t*2100+e*700+(i?500:0),o,.08),r.whine.frequency.setTargetAtTime(560+t*1500,o,.1),r.wg.gain.setTargetAtTime(.006+t*.026,o,.15);const l=(.1+t*.2+e*.1)*(n?.4:1);r.out.gain.setTargetAtTime(l,o,.12)}stopEngine(){this._engine&&this._engine.out.gain.setTargetAtTime(0,this.ctx.currentTime,.2)}_buildBeds(){const t=this.ctx,e=t.createGain();e.gain.value=0,e.connect(this.musicGain);const i=t.createBufferSource();i.buffer=this._noiseBuf,i.loop=!0;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=700,n.Q.value=.7;const r=t.createGain();r.gain.value=.5,i.connect(n),n.connect(r),r.connect(e),i.start();const o=t.createOscillator();o.frequency.value=.07;const a=t.createGain();a.gain.value=.28,o.connect(a),a.connect(r.gain),o.start();const l=t.createBufferSource();l.buffer=this._noiseBuf,l.loop=!0;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=1500,c.Q.value=.6;const h=t.createGain();h.gain.value=.09,l.connect(c),c.connect(h),h.connect(e),l.start(),this._bed={gain:e,lp:n,wg:h,gs:r}}setAmbience({level:t=1,inCave:e=!1,underwater:i=!1,intensity:n=0}={}){if(!this._bed)return;const r=this.ctx.currentTime;this._bed.gain.gain.setTargetAtTime(t*(i?.35:1)*.55,r,.35),this._bed.lp.frequency.setTargetAtTime(e?210:780+n*700,r,.4),this._bed.wg.gain.setTargetAtTime(e?.02:.085,r,.5)}fire(){this.ready&&(this._noise(.14,{gain:.26,type:"bandpass",freq:1500,q:1.1,sweep:-1100}),this._tone(180,.1,{gain:.16,type:"square",sweep:-110}),this._tone(820,.05,{gain:.05,type:"triangle",sweep:-400}))}enemyFire(){this.ready&&(this._noise(.16,{gain:.13,type:"bandpass",freq:900,q:.9,sweep:-600}),this._tone(130,.12,{gain:.09,type:"sawtooth",sweep:-70}))}impact(){this.ready&&(this._noise(.26,{gain:.3,type:"lowpass",freq:1400,sweep:-1150}),this._tone(96,.18,{gain:.22,type:"sine",sweep:-50}))}enemyHit(){this.ready&&(this._noise(.12,{gain:.16,type:"highpass",freq:900,sweep:1400}),this._tone(420,.07,{gain:.09,type:"square",sweep:-260}))}explosion(t=1){this.ready&&(this._noise(.55*t,{gain:.36,type:"lowpass",freq:1700,q:.7,sweep:-1620}),this._tone(72*(1/Math.max(.6,t*.8)),.45*t,{gain:.28,type:"sine",sweep:-46}),this._noise(.9*t,{gain:.12,type:"bandpass",freq:420,q:.5,sweep:-260,attack:.05}))}splash(t=1){this.ready&&(this._noise(.42*t,{gain:.3*Math.min(1.4,t),type:"bandpass",freq:2100,q:.45,sweep:-1500,attack:.01}),this._noise(.9*t,{gain:.13,type:"lowpass",freq:640,sweep:-400,attack:.06}))}pickup(t="boost"){if(!this.ready)return;const e=t==="boost"?620:t==="shield"?520:700;(t==="dual"?[0,4,7,12]:[0,7,12]).forEach((n,r)=>this._tone(e*Math.pow(2,n/12),.2,{gain:.13,type:"triangle",delay:r*.055}))}gate(t=0){if(!this.ready)return;const e=620*Math.pow(2,t%6/12);this._tone(e,.3,{gain:.16,type:"sine"}),this._tone(e*1.5,.42,{gain:.1,type:"triangle",delay:.05}),this._noise(.3,{gain:.06,type:"bandpass",freq:2600,q:1.2})}boost(){this.ready&&(this._noise(.6,{gain:.26,type:"bandpass",freq:700,q:.6,sweep:2400,attack:.05}),this._tone(140,.5,{gain:.14,type:"sawtooth",sweep:340}))}drift(t){!this.ready||!t||this._noise(.35,{gain:.14,type:"bandpass",freq:1700,q:.8,sweep:-800})}warn(){this.ready&&(this._tone(880,.1,{gain:.1,type:"square"}),this._tone(880,.1,{gain:.1,type:"square",delay:.16}))}uiClick(){this.ready&&(this._tone(880,.05,{gain:.07,type:"triangle"}),this._tone(1320,.06,{gain:.05,type:"triangle",delay:.03}))}win(){this.ready&&([0,4,7,12,16,19].forEach((t,e)=>{this._tone(392*Math.pow(2,t/12),.55,{gain:.14,type:"triangle",delay:e*.11}),this._tone(392*Math.pow(2,t/12)*2,.4,{gain:.05,type:"sine",delay:e*.11+.02})}),this._noise(1.4,{gain:.1,type:"bandpass",freq:1200,q:.4,sweep:1800,attack:.2}))}lose(){this.ready&&([0,-3,-7,-12].forEach((t,e)=>this._tone(330*Math.pow(2,t/12),.7,{gain:.16,type:"sawtooth",delay:e*.16})),this._noise(1.6,{gain:.18,type:"lowpass",freq:900,sweep:-780,attack:.05}))}horn(){this.ready&&(this._tone(146,.9,{gain:.18,type:"sawtooth"}),this._tone(220,.9,{gain:.12,type:"sawtooth",detune:8}))}startMusic(){if(!this.ready||this._musicNodes)return;const t=this.ctx,e=t.createGain();e.gain.value=1e-4,e.connect(this.musicGain);const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=900,i.Q.value=3,i.connect(e);const n=[];[55,82.4,110].forEach((h,u)=>{const d=t.createOscillator();d.type=u===2?"triangle":"sawtooth",d.frequency.value=h;const f=t.createGain();f.gain.value=u===2?.09:.2,d.connect(f),f.connect(i),d.start(),n.push(d)});const r=t.createGain();r.gain.value=0,r.connect(this.musicGain);const o=t.createOscillator();o.type="triangle",o.frequency.value=440;const a=t.createGain();a.gain.value=.1,o.connect(a),a.connect(r),o.start();const l=t.createOscillator();l.type="sine",l.frequency.value=.9;const c=t.createGain();c.gain.value=.09,l.connect(c),c.connect(r.gain),l.start(),n.push(o,l),e.gain.setTargetAtTime(.5,t.currentTime,2.5),this._musicNodes={root:e,filt:i,nodes:n,arp:o,arpGain:r}}setMusicIntensity(t){if(!this._musicNodes)return;const e=this.ctx.currentTime;this._musicNodes.filt.frequency.setTargetAtTime(600+t*2600,e,.4),this._musicNodes.root.gain.setTargetAtTime(.3+t*.42,e,.5),this._musicNodes.arpGain&&this._musicNodes.arpGain.gain.setTargetAtTime(t*.16,e,.5)}duckMusic(t=.3,e=.4){if(!this._musicNodes)return;const i=this.ctx.currentTime,n=this._musicNodes.root.gain;n.cancelScheduledValues(i),n.setTargetAtTime(t,i,.06)}}const ye=new Ox,Bx=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,kx=`
varying vec3 vDir;
uniform vec3 uZenith, uHorizon, uSea, uSun;
uniform vec3 uSunDir;
void main(){
  vec3 d = normalize(vDir);
  float up = d.y;
  vec3 sky = mix(uHorizon, uZenith, pow(clamp(up, 0.0, 1.0), 0.55));
  sky = mix(sky, uHorizon * 1.12, pow(clamp(1.0 - abs(up), 0.0, 1.0), 3.0));
  vec3 sea = mix(uSea, uSea * 0.35, clamp(-up * 2.4, 0.0, 1.0));
  vec3 col = up >= 0.0 ? sky : sea;
  float sd = max(dot(d, normalize(uSunDir)), 0.0);
  col += uSun * (pow(sd, 900.0) * 6.0 + pow(sd, 26.0) * 0.30);
  gl_FragColor = vec4(col, 1.0);
}`;function Hx(s,t,e={}){if(t.environment)return t.environment;const i=new Pa(s);i.compileEquirectangularShader();const n=new Or,r=new Ee(50,32,20),o=new $t({vertexShader:Bx,fragmentShader:kx,side:Ge,depthWrite:!1,uniforms:{uZenith:{value:new ot(e.zenith||"#1a6fa8")},uHorizon:{value:new ot(e.horizon||"#bfe6f2")},uSea:{value:new ot(e.sea||"#0d4d63")},uSun:{value:new ot(e.sunColor||"#fff0d2")},uSunDir:{value:(e.sunDir||new C(-.45,.55,-.7)).clone().normalize()}}});n.add(new k(r,o));const a=i.fromScene(n,.04,1,200);return t.environment=a.texture,t.environmentIntensity=e.intensity??.85,r.dispose(),o.dispose(),i.dispose(),a.texture}class Gx{constructor(t,e){this.scene=t,this.sunDir=new C(-.48,.47,-.74).normalize(),this.sunColor=new ot("#ffd093"),this.fogColor=new ot("#659caa"),this.hazeColor=new ot("#8bb8b5"),this.material=new $t({side:Ge,depthWrite:!1,uniforms:{time:{value:0},sun:{value:this.sunDir},cloudDetail:{value:1}},vertexShader:"varying vec3 direction; void main(){direction=position;vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}",fragmentShader:`varying vec3 direction;uniform vec3 sun;uniform float time,cloudDetail;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
      float fbm(vec2 p){float f=0.,a=.5;for(int i=0;i<5;i++){f+=a*noise(p);p=p*2.03+13.1;a*=.5;}return f;}
      void main(){vec3 d=normalize(direction);float y=max(d.y,0.);float s=max(dot(d,sun),0.);
      vec3 col=mix(vec3(.65,.74,.69),vec3(.045,.24,.47),pow(y,.48));
      col+=vec3(.45,.20,.055)*pow(s,7.)*(1.-y*.65);col+=vec3(1.,.69,.31)*pow(s,220.)*.7;
      col+=vec3(3.5,2.5,1.3)*smoothstep(.99935,.99965,s);
      vec2 p=d.xz/max(.14,d.y)*1.4+vec2(time*.004,time*.001);
      float cloud=smoothstep(.51,.72,fbm(p))*smoothstep(.02,.16,d.y)*smoothstep(.85,.4,d.y)*cloudDetail;
      vec3 c=mix(vec3(.39,.53,.61),vec3(1.,.86,.64),fbm(p+1.6));col=mix(col,c,cloud*.74);
      gl_FragColor=vec4(col,1.); #include <tonemapping_fragment>
      #include <colorspace_fragment> }`.replace(" #include",`
#include`)}),this.mesh=new k(new Ee(7e3,32,16),this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-100,t.add(this.mesh),this.sun=new Ih(this.sunColor,3.1),this.sun.position.copy(this.sunDir).multiplyScalar(260),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:1,far:650}),this.sun.shadow.bias=-35e-5,this.sun.shadow.normalBias=.35,t.add(this.sun,this.sun.target),this.fill=new Dh("#8fbacb","#233c32",.92),t.add(this.fill),t.fog=new Ja(this.fogColor,19e-5),this.setQuality(e.quality||"high")}update(t,e,i,n){this.material.uniforms.time.value=e,n&&this.mesh.position.copy(n.position),i&&(this.sun.target.position.copy(i),this.sun.position.copy(i).addScaledVector(this.sunDir,260),this.sun.target.updateMatrixWorld())}setQuality(t){this.sun.castShadow=t!=="low",this.material.uniforms.cloudDetail.value=t==="low"?.65:1}}function Ns(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new te;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Ac(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);const g=Ac(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ac(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Se(o,e,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}const vs=Math.PI*2,Hn=(s,t)=>Math.sin(s*.051+Math.sin(t*.034)*2)*.5+Math.sin(t*.093-s*.021)*.3+Math.sin(s*.19+t*.13)*.2;class Vx{constructor(t,e){this.scene=t,this.ctx=e,this.group=new ue,t.add(this.group),this.colliders=[],this.mounds=[],this.plantSites=[],this.rock=new ce({vertexColors:!0,roughness:.92,side:pe}),this.rock.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 stonePos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
stonePos=position;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 stonePos;
float stoneWaterline(){return length(stonePos.xz-vec2(${mt.x.toFixed(2)},${mt.z.toFixed(2)}))<${mt.r.toFixed(2)}?${mt.level.toFixed(2)}:0.;}
float stoneHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float stoneNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(stoneHash(i),stoneHash(i+vec3(1,0,0)),f.x),mix(stoneHash(i+vec3(0,1,0)),stoneHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(stoneHash(i+vec3(0,0,1)),stoneHash(i+vec3(1,0,1)),f.x),mix(stoneHash(i+vec3(0,1,1)),stoneHash(i+vec3(1,1,1)),f.x),f.y),f.z);}`).replace("#include <color_fragment>",`#include <color_fragment>
float mass=stoneNoise(stonePos*.025),grain=stoneNoise(stonePos*.22);
float strata=stonePos.y*.24+stoneNoise(stonePos*vec3(.018,.008,.018))*3.8;
float beds=smoothstep(-.6,.45,sin(strata))*.16+smoothstep(.65,.87,sin(strata*2.37))*.07;
float seams=pow(1.-stoneNoise(stonePos*vec3(.075,.009,.075)),4.);
float wet=1.-smoothstep(.5,5.5,stonePos.y-stoneWaterline()+mass*1.5);
float stain=smoothstep(.47,.77,stoneNoise(stonePos*vec3(.04,.012,.04)))*smoothstep(3.,12.,stonePos.y-stoneWaterline());
diffuseColor.rgb*=.73+mass*.29+grain*.075+beds-seams*.6;
diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.67,.83,.57),stain*.65);
diffuseColor.rgb*=mix(1.,.48,wet);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.38,1.-smoothstep(.5,5.5,stonePos.y-stoneWaterline()));`)},this.parts=[],this.build()}safeCollider(t,e,i,n,r="rock"){const o=Dt.nearestOnRoute(t,e);return o.dist-i<o.w*.85+2&&r!=="cave-pillar"?!1:(this.colliders.push({x:t,z:e,r:i,top:n,kind:r}),!0)}profile(t,e,i){const n=(e-t.x)/t.rx,r=(i-t.z)/t.rz,o=Math.hypot(n,r),a=1+Hn(e,i)*.11;if(o>a)return-6;const l=Math.max(0,1-o/a);let c=-3+t.h*Math.pow(Math.sin(l*Math.PI*.5),t.cliff?.42:1.55);return t.cliff&&c>3&&(c+=Math.sin(c*.31+Hn(e,i)*2.4)*2.6+Hn(e*.65,i*.65)*Math.min(7,c*.13),c=c*.55+Math.floor(c/8)*8*.45),c}mound(t,e,i,n,r,o=!1){const a={x:t,z:e,rx:i,rz:n,h:r,cliff:o};this.mounds.push(a);const l=64,c=o?28:20,h=[],u=[],d=[],f=new ot;for(let x=0;x<=c;x++){const m=x/c;for(let p=0;p<=l;p++){const M=p/l*vs,v=t+Math.cos(M)*i*m,y=e+Math.sin(M)*n*m;let P=this.profile(a,v,y);x===c&&(P=-5);const T=(o?Math.sin(Math.PI*Nr.clamp(P/(r*.78),0,1)):0)*(Math.sin(P*.28+t*.013)*2.1+Hn(v*.4,y*.4)*2.8);h.push(v+Math.cos(M)*T,P,y+Math.sin(M)*T);const L=Math.sin(P*.22+Hn(v*.3,y*.3)*1.7)*.055;if(P<1.3?f.set("#8c9171"):P<3.5?f.set("#d8c28d"):P>r*(o?.76:.63)?f.set("#455c32"):f.set("#82775e"),f.multiplyScalar(.91+Hn(v*.32,y*.32)*.15+L),u.push(f.r,f.g,f.b),p<l&&x<c){const D=x*(l+1)+p;d.push(D,D+l+1,D+1,D+1,D+l+1,D+l+2)}}}const g=new te;if(g.setAttribute("position",new zt(h,3)),g.setAttribute("color",new zt(u,3)),g.setIndex(d),g.computeVertexNormals(),this.parts.push(g),o)for(let x=0;x<7;x++){const m=x*2.39996+t*.017+e*.009,p=t+Math.cos(m)*i*(.75+.09*Math.sin(x*7.3)),M=e+Math.sin(m)*n*(.75+.09*Math.sin(x*7.3)),v=this.profile(a,p,M);if(v<3)continue;const y=new Ne(1,1);y.deleteAttribute("uv"),y.setIndex(Array.from({length:y.attributes.position.count},(T,L)=>L));const P=2.5+2.8*Math.sin(x*3.1+t)**2;y.scale(P*(1.3+Math.sin(x)*.3),P*.68,P),y.rotateY(m),y.rotateZ(Math.sin(m*3)*.27),y.translate(p,v-P*.25,M);const A=new Float32Array(y.attributes.position.count*3);f.set(x%3===0?"#938771":"#776e59");for(let T=0;T<A.length;T+=3)f.toArray(A,T);y.setAttribute("color",new Se(A,3)),this.parts.push(y)}for(let x=0;x<24;x++){const m=x/24*vs;this.safeCollider(t+Math.cos(m)*i*.75,e+Math.sin(m)*n*.75,Math.min(i,n)*.21,r)}return this.plantSites.push(a),a}beside(t,e,i,n,r,o,a=!1){const l=Dt.nearestOnRoute(t.x,t.z);return this.mound(t.x-l.tz*e*i,t.z+l.tx*e*i,n,r,o,a)}build(){this.beside(Wt.startDock,1,122,150,65,15),this.beside(Wt.lagoonWest,-1,175,220,110,48),this.beside(Wt.reefShallows,1,122,165,65,17),this.beside(Wt.combatOne,-1,170,130,100,53,!0),this.beside(Wt.channelIn,1,103,135,65,42),this.beside(Wt.channelIn,-1,110,130,65,58),this.beside(Wt.minefield,1,118,115,64,55,!0),this.beside(Wt.caveMouth,-1,99,125,67,94,!0),this.beside(Wt.caveMid,1,94,170,67,107,!0),this.beside(Wt.caveMid,-1,99,165,68,121,!0);for(let n=0;n<18;n++){const r=n/18*vs,o=mt.x+Math.cos(r)*(mt.r+10),a=mt.z+Math.sin(r)*(mt.r+10);Dt.nearestOnRoute(o,a).dist<64||this.mound(o,a,48,40,49+18*Math.sin(n*2.3)**2,!0)}this.beside(Wt.landing,1,110,120,65,24),this.beside(Wt.combatTwo,-1,165,115,83,55,!0),this.finishIsland=this.beside(Wt.finish,1,119,76,68,31,!0),this.mound(-500,-1050,550,130,155,!0),this.mound(1900,1100,420,150,200,!0),this.mound(-1550,-520,350,160,130,!0),this.mound(800,-1300,600,150,215,!0),this.arch(),this.tunnel(),this.basinFloor();const t=this.parts.some(n=>!!n.index!=!!this.parts[0].index),e=t?this.parts.map(n=>n.index?n.toNonIndexed():n):this.parts,i=Ns(e,!1);for(const n of i?[i]:this.parts){const r=new k(n,this.rock);r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}if(t)for(let n=0;n<e.length;n++)e[n]!==this.parts[n]&&e[n].dispose();if(i)for(const n of this.parts)n.dispose();this.parts.length=0,this.reefs()}arch(){const t=Wt.arch,e=Dt.nearestOnRoute(t.x,t.z),i=-e.tz,n=e.tx,r=[],o=[],a=[],l=24,c=8,h=new ot;for(let g=0;g<=l;g++){const x=g/l*Math.PI,m=1.1*Math.sin(x*3+.4)+.6*Math.sin(x*7);for(let p=0;p<=c;p++){const M=p/c*vs,v=7.3+m+Math.sin(M*3+x*2)*.7,y=36*Math.cos(x)+Math.cos(x)*Math.cos(M)*v,P=30*Math.sin(x)+Math.sin(x)*Math.cos(M)*v-2+Math.sin(x*5)*.6,A=Math.sin(M)*(v+2)+Math.sin(x*4)*1.8;if(r.push(t.x+i*y+e.tx*A,P,t.z+n*y+e.tz*A),h.set(P<2?"#273f38":P<5?"#49584c":"#847c60"),h.multiplyScalar(.86+.12*Math.sin(x*9+M*2)+.06*Math.sin(P*1.3)),o.push(h.r,h.g,h.b),g<l&&p<c){const T=g*(c+1)+p;a.push(T,T+1,T+c+1,T+1,T+c+2,T+c+1)}}}const u=new te;u.setAttribute("position",new zt(r,3)),u.setAttribute("color",new zt(o,3)),u.setIndex(a);const d=u.toNonIndexed();d.computeVertexNormals(),d.setIndex(Array.from({length:d.attributes.position.count},(g,x)=>x)),this.parts.push(d),u.dispose();const f=(g,x,m,p,M,v,y)=>{const P=new Ne(1,0),A=new ee;P.deleteAttribute("uv"),A.position.set(t.x+i*g+e.tx*m,x,t.z+n*g+e.tz*m),A.scale.set(p,M,v),A.rotation.set(y*.17,Math.atan2(i,n),y*.11),A.updateMatrix(),P.applyMatrix4(A.matrix);const T=[];for(let L=0;L<P.attributes.position.count;L++)h.set(P.attributes.position.getY(L)<2?"#283f35":"#736f53"),h.multiplyScalar(.85+.15*Math.sin(L+y)),T.push(h.r,h.g,h.b);P.setAttribute("color",new zt(T,3)),P.setIndex(Array.from({length:P.attributes.position.count},(L,D)=>D)),this.parts.push(P)};for(const g of[-1,1]){this.safeCollider(t.x+i*36*g,t.z+n*36*g,8,30);for(let x=0;x<8;x++)f(g*(37+x%3*4),.5+x%3,Math.sin(x*2.4)*11,4+x%3,2+x%4,3+x%4,x+g)}for(let g=0;g<13;g++){const x=.16+g/12*2.82;f(36*Math.cos(x),33*Math.sin(x)+.2,Math.sin(g*2)*3,4+g%3,3+g%4,6,g)}}tunnel(){const t=[],e=[],i=[];for(let x=0;x<=110;x++){const m=.085+x/110*.915,p=Dt.cavePointAt(m),M=Dt.cavePointAt(Math.min(1,m+.005));let v=M.x-p.x,y=M.z-p.z;if(x===110){const D=Dt.cavePointAt(m-.005);v=p.x-D.x,y=p.z-D.z}const P=Math.hypot(v,y)||1;v/=P,y/=P;const A=Dt.nearestOnRoute(p.x,p.z),T=Math.max(pn.radius,A.w*.85+5),L=Dt.waterLevelAt(p.x,p.z);for(let D=0;D<=24;D++){const _=D/24*vs,S=T+(Math.sin(x*1.7+D*3.4)+Math.sin(x*.6+D))*1;t.push(p.x-y*Math.cos(_)*S,L+5+Math.sin(_)*S*.96,p.z+v*Math.cos(_)*S);const N=.24+.035*Math.sin(x+D*1.2);if(e.push(N*.65,N,N*.93),x<110&&D<24){const F=x*25+D;i.push(F,F+24+1,F+1,F+1,F+24+1,F+24+2)}}if(x%4===0)for(const D of[-1,1])this.safeCollider(p.x-y*(T+2)*D,p.z+v*(T+2)*D,3,L+30,"cave-wall")}const o=t.length/3;for(let x=0;x<=110;x++){const m=.085+x/110*.915,p=Dt.cavePointAt(m),M=Dt.waterLevelAt(p.x,p.z);for(let v=0;v<=24;v++){const y=x*25+v,P=y*3;if(t.push(p.x+(t[P]-p.x)*1.55,M+5+(t[P+1]-M-5)*1.45,p.z+(t[P+2]-p.z)*1.55),e.push(.32,.4,.35),x<110&&v<24){const A=o+y;i.push(A,A+1,A+24+1,A+1,A+24+2,A+24+1)}if((x===0||x===110)&&v<24){const A=o+y;i.push(y,y+1,A,y+1,A+1,A)}}}const a=new te;a.setAttribute("position",new zt(t,3)),a.setAttribute("color",new zt(e,3)),a.setIndex(i),a.computeVertexNormals(),this.parts.push(a);const l=new ce({color:"#2bcba7",emissive:"#21d9c9",emissiveIntensity:2.5,roughness:.65}),c=new Ne(1,0),h=new Ke(c,l,64),u=new ee;for(let x=0;x<64;x++){const m=.14+x/84,p=Dt.cavePointAt(m),M=x%2?1:-1;u.position.set(p.x,Dt.waterLevelAt(p.x,p.z)+5+x%5*1.4,p.z+M*14),u.scale.set(.5+x%3*.3,.3,.75),u.rotation.set(x,0,x*.3),u.updateMatrix(),h.setMatrixAt(x,u.matrix)}this.group.add(h);const d=new ce({color:"#345d56",roughness:.95});for(let x=0;x<4;x++){const m=Dt.cavePointAt(.27+x*.16),p=Dt.nearestOnRoute(m.x,m.z),M=x%2?1:-1,v=m.x-p.tz*14.7*M,y=m.z+p.tx*14.7*M,P=Dt.waterLevelAt(v,y),A=new k(new Yt(1.1,2,22,7,4),d);A.position.set(v,P+8,y),A.castShadow=!0,this.group.add(A),this.safeCollider(v,y,2,P+22,"cave-pillar")}const f=new Ke(new $i(1.4,5,7),d,52),g=new Ke(new Ne(1,0),d,52);for(let x=0;x<52;x++){const m=5+x*2,p=4+x%5,M=(m*25+p)*3,v=5.5+x%4*1.2;u.position.set(t[M],t[M+1]+2-v*.5,t[M+2]),u.scale.set(1.5+x%3*.25,v/5,1.5+x%3*.25),u.rotation.set(Math.PI,x*1.7,0),u.updateMatrix(),f.setMatrixAt(x,u.matrix),u.position.set(t[M],t[M+1]+1,t[M+2]),u.scale.set(3.4,3,3.4),u.rotation.set(0,x*1.7,0),u.updateMatrix(),g.setMatrixAt(x,u.matrix)}this.group.add(f,g)}basinFloor(){const t=[new Q(0,-14),new Q(mt.r,-14),new Q(mt.r,-6),new Q(mt.r-6,6),new Q(0,6)],e=new Kr(t,112);e.translate(mt.x,0,mt.z),e.deleteAttribute("uv");const i=new Float32Array(e.attributes.position.count*3);for(let l=0;l<i.length;l+=3)i[l]=.34,i[l+1]=.43,i[l+2]=.35;e.setAttribute("color",new Se(i,3)),this.parts.push(e);const n=[],r=[],o=90;for(let l=0;l<=o;l++){const c=.085+l/o*.915,h=Dt.cavePointAt(c),u=Dt.nearestOnRoute(h.x,h.z),d=Dt.waterLevelAt(h.x,h.z)-6;for(const f of[-1,1])n.push(h.x-u.tz*24*f,d,h.z+u.tx*24*f);if(l<o){const f=l*2;r.push(f,f+1,f+2,f+1,f+3,f+2)}}const a=new te;a.setAttribute("position",new zt(n,3)),a.setAttribute("color",new zt(n.map((l,c)=>c%3===1?.39:.3),3)),a.setIndex(r),a.computeVertexNormals(),this.parts.push(a)}reefs(){const t=new Ne(1,1),e=new ce({color:"#799f80",roughness:.9}),i=new Ke(t,e,160),n=new ee,r=new ot;for(let o=0;o<160;o++){const a=o*2.39996,l=30+Math.sqrt(o/160)*220;n.position.set(Wt.reefShallows.x+Math.cos(a)*l,-2.9-Math.sin(o)**2*2,Wt.reefShallows.z+Math.sin(a)*l*.5),n.scale.set(2+o%6,.5+o%3*.5,2+o%4),n.rotation.set(0,o,0),n.updateMatrix(),i.setMatrixAt(o,n.matrix),r.set(o%3===0?"#df927c":o%3===1?"#547f75":"#c1be83"),i.setColorAt(o,r)}i.receiveShadow=!0,this.group.add(i)}heightAt(t,e){let i=-9;for(const r of this.mounds)Math.abs(t-r.x)<r.rx*1.08&&Math.abs(e-r.z)<r.rz*1.08&&(i=Math.max(i,this.profile(r,t,e)));const n=Math.hypot(t-mt.x,e-mt.z);return n<mt.r&&(i=Math.max(i,n<mt.r-6?6:6-(n-mt.r+6)*2)),i}shoreAt(t,e){return Nr.clamp((this.heightAt(t,e)-Dt.waterLevelAt(t,e)+1.5)/3,0,1)}seabedDepthAt(t,e){const i=Dt.waterLevelAt(t,e),n=this.heightAt(t,e);let r=n>-6?n:-25;for(const c of this.mounds){const h=Math.hypot((t-c.x)/c.rx,(e-c.z)/c.rz);h>1&&h<1.55&&(r=Math.max(r,-2-(h-1)*38))}const o=Math.exp(-((t-Wt.reefShallows.x)**2/11e4+(e-Wt.reefShallows.z)**2/19e3)),a=Math.exp(-((t-Wt.startDock.x)**2/22e3+(e-Wt.startDock.z)**2/18e3)),l=Math.sin(t*.023+Math.sin(e*.019)*1.8)*.5+.5;return r=Math.max(r,-25+o*(19+l*4),-22+a*18),t>mt.spillX+3&&t<1340&&e>125&&e<220&&n<0&&(r=Math.min(r,-22)),Math.max(.05,i-r)}}const ys=[[.72,.69,.34,37,1.15],[-.36,.933,.19,21,1.57],[.96,-.28,.105,12,2.06],[.25,.968,.055,6.8,2.7],[-.8,.6,.032,3.7,3.3]],Gn=5200,xr=200,vr=150,Wx=ys.map(([s,t,e,i,n])=>`{float k=${(Math.PI*2/i).toFixed(9)};float p=dot(q,vec2(${s.toFixed(6)},${t.toFixed(6)}))*k-time*${n.toFixed(6)};h+=${e.toFixed(6)}*sin(p);slope+=vec2(${s.toFixed(6)},${t.toFixed(6)})*${e.toFixed(6)}*k*cos(p);}`).join(`
`),Xx=`uniform float time;varying vec3 world;varying vec3 waveNormal;varying vec2 mapUv;
void main(){vec2 q=position.xz;float h=0.;vec2 slope=vec2(0.);${Wx}
vec3 p=position+vec3(0.,h,0.);world=p;waveNormal=normalize(vec3(-slope.x,1.,-slope.y));mapUv=(q-vec2(200.,150.))/5200.+.5;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,qx=`uniform float time,detail;uniform sampler2D depthMap,ripple,wakeMap;uniform vec2 wakeOrigin;uniform vec3 sun,haze;
varying vec3 world,waveNormal;varying vec2 mapUv;
float waterHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float waterNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(waterHash(i),waterHash(i+vec2(1.,0.)),f.x),mix(waterHash(i+vec2(0.,1.)),waterHash(i+1.),f.x),f.y);}
void main(){
vec4 field=texture2D(depthMap,mapUv);float depth=field.r*32.;vec2 wakeUv=(world.xz-wakeOrigin)/384.+.5;
vec4 trail=texture2D(wakeMap,clamp(wakeUv,0.,1.))*step(0.,wakeUv.x)*step(wakeUv.x,1.)*step(0.,wakeUv.y)*step(wakeUv.y,1.);
float distanceToEye=length(cameraPosition-world);
vec2 flow=world.xz+vec2(time*1.4,-time*.65);
float windField=waterNoise(flow*.008+waterNoise(flow*.0027)*2.8);
float wind=smoothstep(.28,.76,windField);
vec2 warp=vec2(waterNoise(flow*.014),waterNoise(flow*.011+73.))*2.1;
vec2 r1=texture2D(ripple,world.xz*.0071+warp*.08+vec2(time*.006,-time*.003)).rg*2.-1.;
vec2 r2=texture2D(ripple,mat2(.8,-.6,.6,.8)*world.xz*.0113+warp*.13+vec2(-time*.004,time*.007)).gb*2.-1.;
// Evaluate broad slopes per fragment: interpolated short vertex waves alias into a regular grid.
vec2 slope=vec2(.72,.69)*.12*cos(dot(world.xz,vec2(.72,.69))*.13-time*1.15+windField*.7);
slope+=vec2(-.36,.933)*.067*cos(dot(world.xz,vec2(-.36,.933))*.21-time*1.57);
slope+=vec2(.87,-.49)*.027*cos(dot(flow,vec2(.87,-.49))*.046+windField*2.);
float micro=(.035+wind*.065)*(1.-smoothstep(100.,750.,distanceToEye));
vec3 n=normalize(vec3(-slope.x,1.,-slope.y)+vec3(r1.x+r2.x,0.,r1.y+r2.y)*(micro+trail.r*.075)*detail);
vec3 v=normalize(cameraPosition-world);float facing=max(dot(n,v),0.);
float fresnel=.025+.975*pow(1.-facing,4.);
// A submerged shelf has an edge, rather than a low-contrast wash over the whole sea.
// Refracted view rays displace the bottom, while reflections stay on the wave surface.
vec3 through=refract(-v,n,1./1.333);
vec2 bed=world.xz+through.xz*min(depth,12.)/max(.35,-through.y);
float geology=waterNoise(bed*.018)+waterNoise(bed*.051)*.22;
// A long scoured channel cuts the reef shelf; its banks expose the sand-to-rock drop-off.
float reefRegion=exp(-dot((bed-vec2(-470.,592.))/vec2(310.,145.),(bed-vec2(-470.,592.))/vec2(310.,145.)));
float channelDistance=abs(bed.y-(603.+sin(bed.x*.013)*27.+sin(bed.x*.031)*6.));
depth+=16.*reefRegion*(1.-smoothstep(11.,19.,channelDistance));
float shelf=1.-smoothstep(9.5,11.5,depth+(geology-.6)*2.2);
float transmission=exp(-depth*.062)*shelf;
float opticalDepth=depth/max(.55,-through.y);
float bedVisibility=exp(-opticalDepth*.24);
float rim=(1.-smoothstep(.0,1.4,abs(depth+(geology-.6)*2.2-10.8)))*.65;
float nearDetail=1.-smoothstep(100.,460.,distanceToEye);
float dunes=sin(bed.x*1.65+bed.y*.53+waterNoise(bed*.11)*3.);
float rippleSand=pow(.5+.5*dunes,4.);
vec3 bottom=vec3(.72,.65,.38)*(.80+.20*rippleSand*nearDetail*exp(-depth*.22));
// Individual elliptical coral heads have lit crowns and offset dark footprints.
vec2 cells=bed/13.;vec2 cell=floor(cells);vec2 local=fract(cells)-.5;
vec2 center=(vec2(waterHash(cell),waterHash(cell+43.))-.5)*.32;
vec2 rock=(local-center)*vec2(1.,1.35);
float radius=.15+waterHash(cell+17.)*.16;
float softness=.025+depth*.014;
float head=1.-smoothstep(radius-softness,radius+softness,length(rock));
float shadow=1.-smoothstep(radius,radius+.13+softness,length(rock-vec2(.10,.08)));
float colony=smoothstep(.30,.57,waterNoise(bed*.026));
float grass=smoothstep(.6,.72,waterNoise(bed*.059+waterNoise(bed*.016)*2.));
bottom*=1.-shadow*colony*.64;
float crown=clamp(.58+dot(normalize(vec3(rock.x,.16,rock.y)),sun)*.7, .22,1.);
bottom=mix(bottom,vec3(.10,.31,.19)*crown,head*colony*.92);
bottom=mix(bottom,vec3(.027,.19,.13),grass*.75);
float causticA=abs(sin(bed.x*.84+sin(bed.y*.69+time*.9)));
float causticB=abs(sin(bed.y*.91+sin(bed.x*.62-time*.7)));
float caustic=pow(1.-min(causticA,causticB),10.);
bottom+=vec3(.07,.12,.05)*caustic*nearDetail*detail*exp(-depth*.25);
vec3 deep=vec3(.002,.032,.057);
// Blue-green in-scattering survives on the shelf; all actual bed features fade together.
vec3 bedLight=bottom*exp(-opticalDepth*vec3(.18,.055,.025));
vec3 submerged=mix(vec3(.008,.29,.27),bedLight,bedVisibility);
vec3 col=mix(deep,submerged,transmission);
col*=1.-rim*.38;
float windShade=waterNoise(flow*.018);
col*=.9+windShade*.16;
vec3 refl=reflect(-v,n);vec3 sky=mix(vec3(.105,.24,.30),vec3(.035,.12,.23),smoothstep(0.,.75,max(refl.y,0.)));
// Soft angular sky variation avoids projecting cloud contours as pale loops on the sea.
float cloud=waterNoise(refl.xz*2.4+vec2(time*.004,time*.001));
sky+=vec3(.055,.065,.067)*cloud;
col=mix(col,sky,fresnel);vec3 halfDir=normalize(sun+v);float shine=pow(max(dot(n,halfDir),0.),150.);
col+=vec3(1.,.88,.65)*shine*(1.2+wind*.8);
col+=vec3(.52,.66,.70)*pow(max(dot(n,halfDir),0.),48.)*.055;
// Only the immediate shoreline breaks. Depth contours offshore are not foam.
float lap=sin(world.x*.14+world.z*.19+time*1.7)*.5+.5;
float shore=(1.-smoothstep(.08,.65+lap*.15,depth))*smoothstep(.45,.65,waterNoise(world.xz*1.8+time*.3));
// Foam is anchored to boat stamps, with sub-metre broken cells rather than a pale atlas wash.
float bubbles=waterNoise(world.xz*7.2+vec2(time*.9,-time*1.3));
float eddies=waterNoise(world.xz*2.1+vec2(sin(world.z*1.7+time),cos(world.x*1.6-time))*.45);
float churn=smoothstep(.07,.5,trail.r);
float fresh=smoothstep(.025,.12,trail.b);
float foam=churn*(.025+.95*smoothstep(.35,.65,eddies)*smoothstep(.23,.63,bubbles));
foam=max(foam,fresh*(.3+.6*smoothstep(.28,.7,bubbles)));
float wet=smoothstep(.008,.09,trail.r)*(1.-foam);
col*=1.-wet*.48;
col=mix(col,vec3(.62,.78,.74),max(shore*.75,foam*.94));
// The depth atlas also records enclosure: suppress daylight, retain local mineral reflections.
float cave=field.g;
float lamp=pow(.5+.5*sin(world.x*.23+world.z*.08+r1.x*.8),9.);
vec3 caveLight=vec3(.006,.032,.038)+vec3(.012,.13,.105)*lamp*(.35+fresnel);
col=mix(col,col*.12+caveLight+vec3(.09,.045,.012)*pow(.5+.5*sin(world.x*.071-world.z*.03),18.),cave);
col=mix(col,haze,1.-exp(-distanceToEye*.000075));
gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;class Vh{constructor(t,e){this.scene=t,this.ctx=e,this.time=0,this.quality=null,this.queueCount=0,this.capacity=1024,this.disabledRT=!1,this.normalScratch=new C,this.clearColor=new ot,this.ripple=this.makeRipple(),this.depthMap=this.makeDepthMap(),this.blank=new Cr(new Uint8Array([0,0,0,255]),1,1),this.blank.needsUpdate=!0,this.material=new $t({uniforms:{time:{value:0},detail:{value:1},depthMap:{value:this.depthMap},ripple:{value:this.ripple},wakeMap:{value:this.blank},wakeOrigin:{value:new Q(xr,vr)},sun:{value:new C(-.48,.47,-.74).normalize()},haze:{value:new ot("#bad6ce")}},vertexShader:Xx,fragmentShader:qx,side:pe}),this.createWakePass(),this.setQuality(e.quality||"high")}makeRipple(){const e=new Uint8Array(262144);for(let n=0;n<256;n++)for(let r=0;r<256;r++){const o=(n*256+r)*4,a=r/256*Math.PI*2,l=n/256*Math.PI*2;e[o]=128+55*Math.sin(a*13+Math.sin(l*7)*2)+25*Math.cos(l*23+a*5),e[o+1]=128+55*Math.cos(l*11+Math.sin(a*9)*2)+25*Math.sin(a*27-l*3),e[o+2]=128+60*Math.sin(a*17+l*19+Math.sin(a*3-l*5)),e[o+3]=255}let i;try{if(typeof document<"u"){const n=document.createElement("canvas");n.width=n.height=256;const r=n.getContext("2d");if(r){const o=r.createImageData(256,256);o.data.set(e),r.putImageData(o,0,0),i=new Sh(n)}}}catch{}return i||(i=new Cr(e,256,256)),i.wrapS=i.wrapT=Lr,i.minFilter=ji,i.magFilter=ke,i.generateMipmaps=!0,i.needsUpdate=!0,i}makeDepthMap(){const e=new Uint8Array(1048576),i=this.ctx.world?.islands||this.ctx.islands;for(let r=0;r<512;r++)for(let o=0;o<512;o++){const a=xr+(o/511-.5)*Gn,l=vr+(r/511-.5)*Gn,c=(r*512+o)*4,h=i?.seabedDepthAt(a,l)??12;e[c]=Math.min(255,h/32*255);const u=Dt.caveParam(a,l);e[c+1]=u<0?0:255*Nr.smoothstep(u,.045,.095)*(1-Nr.smoothstep(u,.91,1)),e[c+2]=Math.max(0,Math.sin(a*.15)*Math.sin(l*.13)*150),e[c+3]=255}const n=new Cr(e,512,512);return n.minFilter=n.magFilter=ke,n.needsUpdate=!0,n}grid(t){const e=[],i=[],n=[];for(let o=0;o<=t;o++)for(let a=0;a<=t;a++){const l=xr+(a/t-.5)*Gn,c=vr+(o/t-.5)*Gn;e.push(l,0,c),i.push(a/t,o/t)}for(let o=0;o<t;o++)for(let a=0;a<t;a++){const l=xr+((a+.5)/t-.5)*Gn,c=vr+((o+.5)/t-.5)*Gn;if(Dt.waterMask(l,c))continue;const h=o*(t+1)+a;n.push(h,h+t+1,h+1,h+1,h+t+1,h+t+2)}const r=new te;return r.setAttribute("position",new zt(e,3)),r.setAttribute("uv",new zt(i,2)),r.setIndex(n),r.computeBoundingSphere(),r}extraSurfaces(){const t=[],e=[],r=mt.r;for(let u=0;u<=32;u++)for(let d=0;d<=112;d++){const f=d/112*Math.PI*2,g=u/32*r,x=mt.x+Math.cos(f)*g,m=mt.z+Math.sin(f)*g;if(t.push(x,mt.level,m),d<112&&u<32){const p=u*113+d;e.push(p,p+112+1,p+1,p+1,p+112+1,p+112+2)}}let o=new te;o.setAttribute("position",new zt(t,3)),o.setIndex(e),this.upperMesh=new k(o,this.material),this.scene.add(this.upperMesh);const a=[],l=[],c=190,h=16;for(let u=0;u<=c;u++){const d=u/c,f=Dt.cavePointAt(d),g=Dt.cavePointAt(Math.min(1,d+.005));let x=g.x-f.x,m=g.z-f.z;if(u===c){const M=Dt.cavePointAt(d-.005);x=f.x-M.x,m=f.z-M.z}const p=Math.hypot(x,m)||1;x/=p,m/=p;for(let M=0;M<=h;M++){const v=(M/h-.5)*60,y=f.x-m*v,P=f.z+x*v;if(a.push(y,Dt.waterLevelAt(y,P),P),M<h&&u<c){const A=u*(h+1)+M;l.push(A,A+h+1,A+1,A+1,A+h+1,A+h+2)}}}o=new te,o.setAttribute("position",new zt(a,3)),o.setIndex(l),this.caveMesh=new k(o,this.material),this.scene.add(this.caveMesh)}createWakePass(){this.passCamera=new Yr(-1,1,1,-1,0,2),this.passCamera.position.z=1,this.fadeScene=new Or,this.fadeMaterial=new $t({depthTest:!1,depthWrite:!1,uniforms:{source:{value:this.blank},fade:{value:1},shift:{value:new Q}},vertexShader:"varying vec2 uv0;void main(){uv0=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 uv0;uniform sampler2D source;uniform float fade;uniform vec2 shift;void main(){vec2 q=uv0+shift;gl_FragColor=texture2D(source,clamp(q,0.,1.))*vec4(fade,fade,pow(fade,4.),fade)*step(0.,q.x)*step(q.x,1.)*step(0.,q.y)*step(q.y,1.);}"}),this.fadeScene.add(new k(new ni(2,2),this.fadeMaterial)),this.stampScene=new Or;const t=new ni(2,2);this.stampData=new Float32Array(this.capacity*2),t.setAttribute("stampData",new Da(this.stampData,2).setUsage(Ii)),this.stampMaterial=new $t({transparent:!0,blending:De,depthWrite:!1,depthTest:!1,vertexShader:"attribute vec2 stampData;varying vec2 local;varying vec2 data;void main(){local=position.xy;data=stampData;gl_Position=instanceMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 local;varying vec2 data;void main(){float f;if(data.y>.5){f=pow(max(0.,1.-length(local)),1.7);}else{float width=.18+(-local.y+1.)*.22;float edge=abs(abs(local.x)-width);f=exp(-edge*edge*85.)*.45;f+=exp(-local.x*local.x*14.)*.85;f*=1.-smoothstep(.35,1.,abs(local.y));}f*=data.x;gl_FragColor=vec4(f,f*.48,f*.2,1.);}"}),this.stamps=new Ke(t,this.stampMaterial,this.capacity),this.stamps.instanceMatrix.setUsage(Ii),this.stamps.frustumCulled=!1,this.stampScene.add(this.stamps),this.stampMatrix=new he}stamp(t,e,i,n,r,o,a){if(this.queueCount>=this.capacity||!Number.isFinite(t+e+r))return;const l=this.queueCount++,c=Math.hypot(i,n)||1;i/=c,n/=c;const h=Math.max(o||1,1.2)*(a?.8:.85)/384*2,u=this.stampMatrix.elements;u[0]=n*h,u[1]=-i*h,u[2]=0,u[3]=0,u[4]=i*h,u[5]=n*h,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=(t-this.material.uniforms.wakeOrigin.value.x)/384*2,u[13]=(e-this.material.uniforms.wakeOrigin.value.y)/384*2,u[14]=0,u[15]=1,this.stamps.setMatrixAt(l,this.stampMatrix),this.stampData[l*2]=Math.min(1,Math.max(0,r))*.28,this.stampData[l*2+1]=a}splatWake(t,e,i,n,r=1,o=3){this.stamp(t,e,i,n,r,o,0)}splatFoam(t,e,i=1,n=3){this.stamp(t,e,0,1,i,n,1)}heightAt(t,e){let i=0;for(let n=0;n<ys.length;n++){const r=ys[n];i+=r[2]*Math.sin((t*r[0]+e*r[1])*Math.PI*2/r[3]-this.time*r[4])}return i}normalAt(t,e,i){i||(i=this.normalScratch);let n=0,r=0;for(let o=0;o<ys.length;o++){const a=ys[o],l=Math.PI*2/a[3],c=a[2]*l*Math.cos((t*a[0]+e*a[1])*l-this.time*a[4]);n+=a[0]*c,r+=a[1]*c}return i.set(-n,1,-r).normalize()}sampleShore(t,e){return(this.ctx.world?.islands||this.ctx.islands)?.shoreAt(t,e)||0}update(t,e,i){this.time=e,this.material.uniforms.time.value=e;const n=this.ctx.renderer;if(!n?.setRenderTarget||!n?.render||this.disabledRT){this.queueCount=0;return}const r=n.getRenderTarget(),o=n.autoClear;try{if(n.autoClear=!1,this.clearTargets){const g=n.getClearAlpha();n.getClearColor(this.clearColor),n.setClearColor(0,0),n.setRenderTarget(this.targetA),n.clearColor(),n.setRenderTarget(this.targetB),n.clearColor(),n.setClearColor(this.clearColor,g),this.clearTargets=!1}const a=this.material.uniforms.wakeOrigin.value,l=this.ctx.getPlayer?.(),c=l?.position.x??i.position.x,h=l?.position.z??i.position.z,u=Math.round((c-a.x)/32)*32,d=Math.round((h-a.y)/32)*32;if(this.fadeMaterial.uniforms.shift.value.set(u/384,d/384),u||d){for(let g=0;g<this.queueCount;g++)this.stamps.instanceMatrix.array[g*16+12]-=u/384*2,this.stamps.instanceMatrix.array[g*16+13]-=d/384*2;a.x+=u,a.y+=d}this.fadeMaterial.uniforms.source.value=this.targetA.texture,this.fadeMaterial.uniforms.fade.value=Math.exp(-Math.min(t,.1)*1.15),n.setRenderTarget(this.targetB),n.render(this.fadeScene,this.passCamera),this.queueCount&&(this.stamps.count=this.queueCount,this.stamps.instanceMatrix.needsUpdate=!0,this.stamps.geometry.attributes.stampData.needsUpdate=!0,n.render(this.stampScene,this.passCamera));const f=this.targetA;this.targetA=this.targetB,this.targetB=f,this.material.uniforms.wakeMap.value=this.targetA.texture}catch(a){this.disabledRT=!0,this.material.uniforms.wakeMap.value=this.blank,console.warn("Wake render target unavailable; ocean remains active.",a)}finally{n.setRenderTarget(r),n.autoClear=o,this.queueCount=0}}setQuality(t){if(this.quality===t)return;this.quality=t;const e=t==="high"?384:t==="medium"?288:192,i=t==="high"?1024:t==="medium"?768:512;this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=this.grid(e)):(this.mesh=new k(this.grid(e),this.material),this.scene.add(this.mesh),this.extraSurfaces()),this.targetA?.dispose(),this.targetB?.dispose();const n={type:si,depthBuffer:!1,stencilBuffer:!1,minFilter:ke,magFilter:ke};this.targetA=new Ve(i,i,n),this.targetB=new Ve(i,i,n),this.clearTargets=!0,this.material.uniforms.wakeMap.value=this.blank,this.material.uniforms.detail.value=t==="low"?.55:1}reset(){this.time=0,this.queueCount=0,this.clearTargets=!0,this.disabledRT=!1,this.material.uniforms.time.value=0}dispose(){for(const t of[this.mesh,this.upperMesh,this.caveMesh])this.scene.remove(t),t.geometry.dispose();this.material.dispose(),this.ripple.dispose(),this.depthMap.dispose(),this.blank.dispose(),this.targetA.dispose(),this.targetB.dispose(),this.fadeScene.children[0].geometry.dispose(),this.fadeMaterial.dispose(),this.stamps.geometry.dispose(),this.stampMaterial.dispose()}}const Wh=[13,7.8,10],Xh=[2.8,.4,3.8];function Yx(s=0){const t=[],e=[],i=[9,15,7][s],n=Wh[s],r=Xh[s];for(let a=0;a<i;a++){const l=a/i*Math.PI*2+.12*Math.sin(a*7),c=t.length/3,h=[8,4.8,7][s]*(.78+.22*Math.sin(a*3+1)**2);for(let u=0;u<=10;u++){const d=u/10,f=d*h,g=n+Math.sin(d*Math.PI)*[1.8,3,1.2][s]-d*d*[4.3,1.4,2.7][s],x=Math.sin(d*Math.PI)*[.62,1.05,.8][s]*(u%2?.63:1);for(const m of[-1,1])t.push(r+Math.cos(l)*f-Math.sin(l)*x*m,g,Math.sin(l)*f+Math.cos(l)*x*m);if(u<10){const m=c+u*2;e.push(m,m+1,m+2,m+1,m+3,m+2)}}}const o=new te;return o.setAttribute("position",new zt(t,3)),o.setIndex(e),o.computeVertexNormals(),o}function jx(s){const t=[];for(let e=0;e<=10;e++){const i=e/10;t.push(new C(i*i*Xh[s],i*Wh[s],Math.sin(i*Math.PI)*.3))}return new ts(new Rs(t),12,[.29,.47,.38][s],6,!1)}function Kx(){const s=[];for(let i=0;i<7;i++){const n=new Ne(1,1),r=i*2.3999;n.scale(1.7+i%3*.3,1.4+i%2*.7,1.6),n.translate(Math.cos(r)*(i?1.7:0),1.5+i%3*.7,Math.sin(r)*(i?1.5:0)),s.push(n)}const e=Ns(s)||s[0];for(const i of s)i!==e&&i.dispose();return e}class Zx{constructor(t,e,i){this.group=new ue,t.add(this.group),this.meshes=[];let n;try{n=typeof e.rng=="function"?e.rng((e.seed||7)+301):e.rng?.fork?.(301)}catch{}n||(n=Wr((e.seed||7)+301));const r=[];for(const f of i.plantSites){if(f.rx>300)continue;const g=Array.from({length:4},()=>{const m=n.next()*Math.PI*2,p=n.range(.15,.66);return{x:f.x+Math.cos(m)*f.rx*p,z:f.z+Math.sin(m)*f.rz*p}}),x=Math.floor(f.rx*f.rz/110);for(let m=0;m<x;m++){const p=g[m%g.length],M=n.next()*Math.PI*2,v=Math.sqrt(n.next())*f.rz*.3,y=p.x+Math.cos(M)*v,P=p.z+Math.sin(M)*v,A=i.heightAt(y,P);if(A<3)continue;let T=!0;for(let L=0;L<8;L++){const D=L*Math.PI/4,_=i.heightAt(y+Math.cos(D)*5,P+Math.sin(D)*5);if(_<2||Math.abs(_-A)>2.6){T=!1;break}}T&&r.push({x:y,y:A-.65,z:P,s:n.range(.55,1.7),a:n.next()*Math.PI*2,tilt:n.range(-.19,.19)})}}const o=new ce({color:"#796b46",roughness:1}),a=new ce({color:"#739449",roughness:.91,side:pe}),l=new ee,c=new ot;for(let f=0;f<3;f++){const g=r.filter((p,M)=>M%5===f);if(!g.length)continue;const x=new Ke(jx(f),o,g.length),m=new Ke(Yx(f),a,g.length);for(let p=0;p<g.length;p++){const M=g[p];l.position.set(M.x,M.y,M.z),l.rotation.set(M.tilt,M.a,M.tilt*.65),l.scale.set(M.s,M.s*(.82+p%4*.12),M.s),l.updateMatrix(),x.setMatrixAt(p,l.matrix),m.setMatrixAt(p,l.matrix),c.setHSL(.2+n.next()*.065,.3+n.next()*.2,.33+n.next()*.15),m.setColorAt(p,c)}for(const p of[x,m])p.castShadow=!0,p.receiveShadow=!0,this.group.add(p),this.meshes.push(p)}const h=new Ke(Kx(),new ce({color:"#466437",roughness:1}),r.length),u=new Ke(new Yt(.18,.38,4,6),o,r.length),d=new Ke(new Ne(1,0),new ce({color:"#74755c",roughness:1}),Math.floor(r.length/3));for(let f=0;f<r.length;f++){const g=r[f],x=f%5>2,m=g.s*(x?1.5:.67);l.position.set(g.x,g.y+(x?2.4:0),g.z),l.rotation.set(0,g.a,0),l.scale.set(m,m*(x?1.1:.8),m*.87),l.updateMatrix(),h.setMatrixAt(f,l.matrix),c.setHSL(.22+n.next()*.075,.35,.27+n.next()*.13),h.setColorAt(f,c),l.position.set(g.x,g.y+1.3,g.z),l.scale.set(x?g.s:0,x?g.s:0,x?g.s:0),l.updateMatrix(),u.setMatrixAt(f,l.matrix),f<d.count&&(l.position.set(g.x,g.y+.15,g.z),l.rotation.set(.2,g.a,.1),l.scale.set(g.s*2.4,g.s*.9,g.s*1.7),l.updateMatrix(),d.setMatrixAt(f,l.matrix))}for(const f of[h,u,d])f.castShadow=!0,f.receiveShadow=!0,this.group.add(f),this.meshes.push(f)}setQuality(t){for(const e of this.meshes)e.castShadow=t!=="low"}}class Jx{constructor(t,e,i){this.group=new ue,t.add(this.group),this.islands=i,this.buoys=[],this.batches=new Map,this.wood=new ce({color:"#826b4a",roughness:.94}),this.darkWood=new ce({color:"#4f4c39",roughness:1}),this.rope=new ce({color:"#b5a67c",roughness:1}),this.iron=new ce({color:"#365553",metalness:.5,roughness:.47}),this.white=new ce({color:"#efdfb0",roughness:.85}),this.coral=new ce({color:"#d77f59",roughness:.7}),this.glow=new ce({color:"#ffcc74",emissive:"#ffb855",emissiveIntensity:2.2}),this.dock(),this.markers(),this.wrecks(),this.lighthouse();for(const[n,r]of this.batches){const o=Ns(r,!1);for(const a of o?[o]:r){const l=new k(a,n);l.castShadow=!0,l.receiveShadow=!0,this.group.add(l)}if(o)for(const a of r)a.dispose()}this.batches.clear()}add(t,e,i,n,r,o=0,a=0,l=0){const c=new ee;c.position.set(i,n,r),c.rotation.set(o,a,l),c.updateMatrix(),t.applyMatrix4(c.matrix),this.batches.has(e)||this.batches.set(e,[]),this.batches.get(e).push(t)}dock(){const t=Wt.startDock,e=Dt.nearestOnRoute(t.x,t.z),i=-e.tz,n=e.tx,r=t.x+i*64,o=t.z+n*64,a=Math.atan2(e.tx,e.tz);for(let l=0;l<32;l++){const c=l*.94-15;this.add(new Kt(10,.35,.83),l%4?this.wood:this.darkWood,r+e.tx*c,2+Math.sin(l*3)*.035,o+e.tz*c,0,a)}for(let l=0;l<8;l++)for(const c of[-1,1]){const h=l*4.1-14,u=r+e.tx*h+i*c*4.3,d=o+e.tz*h+n*c*4.3;this.add(new Yt(.36,.48,7,8),this.darkWood,u,.3,d),this.add(new Ze(.39,.065,4,10),this.rope,u,2.4,d,Math.PI/2),Tc(this.islands,u,d,.7,4),(l===0||l===7)&&(this.add(new Yt(.12,.14,3,6),this.iron,u,3.7,d),this.add(new Ee(.4,8,6),this.glow,u,5.1,d))}for(let l=0;l<5;l++)this.add(new Kt(2,.12,.18),this.iron,r+i*5.1,1.7-l*.6,o+n*5.1,0,a);for(const l of[-1,1])this.add(new Yt(.065,.065,3.4,5),this.iron,r+i*5.1+e.tx*l,0,o+n*5.1+e.tz*l);for(let l of[-1,1]){const c=[];for(let h=0;h<40;h++){const u=h/39,d=u*29-14;c.push(new C(r+e.tx*d+i*l*4.3,3.1-Math.sin(u*Math.PI*7)**2*.5,o+e.tz*d+n*l*4.3))}this.add(new ts(new Rs(c),70,.045,4,!1),this.rope,0,0,0)}}markers(){const t=new Yt(.55,1.1,1.7,10),e=new Ze(.82,.18,6,12);e.rotateX(Math.PI/2);const i=new ce({color:"#49c9a2",emissive:"#1c9c7d",emissiveIntensity:.7});for(let n=90;n<Dt.length-30;n+=145){const r=Dt.pointAt(n);if(!(Dt.caveParam(r.x,r.z)>=0))for(const o of[-1,1]){const a=new ue,l=o<0?this.coral:i;a.add(new k(t,l));const c=new k(e,this.white);c.position.y=.25,a.add(c);const h=new k(new Yt(.07,.07,2,5),this.iron);h.position.y=1.7,a.add(h);const u=new k(new Ee(.23,8,6),this.glow);u.position.y=2.8,a.add(u),a.position.set(r.x-r.tz*(r.w+6)*o,Dt.waterLevelAt(r.x,r.z),r.z+r.tx*(r.w+6)*o),this.buoys.push({group:a,base:a.position.y,phase:n}),this.group.add(a)}}}wrecks(){for(let t=0;t<2;t++){const e=t?Wt.landing:Wt.reefShallows,i=Dt.nearestOnRoute(e.x,e.z),n=e.x-i.tz*75,r=e.z+i.tx*75,o=Math.atan2(i.tx,i.tz)+.45,a=new ue;for(let c=0;c<9;c++){const h=new k(new Ze(3.5*Math.sin((c+1)/10*Math.PI),.14,5,12,Math.PI),this.darkWood);h.rotation.set(0,0,Math.PI),h.position.set(0,.9,c*1.35-5.4),a.add(h)}for(let c=0;c<8;c++){const h=new k(new Kt(.18,.65,13-c%3),c%2?this.wood:this.darkWood);h.position.set((c<4?-1:1)*(2.8-c%4*.2),c%4*.6-1,0),h.rotation.z=(c<4?-1:1)*.22,a.add(h)}const l=new k(new Yt(.12,.27,11,7),this.darkWood);l.rotation.z=.65,l.position.y=4,a.add(l),a.position.set(n,1,r),a.rotation.set(.08,o,.2),this.group.add(a),Tc(this.islands,n,r,7,7)}}lighthouse(){const t=this.islands.finishIsland,e=t.x,i=t.z,n=this.islands.heightAt(e,i);this.add(new Yt(5,7,3,16),this.white,e,n+1,i),this.add(new Yt(2.7,4.5,24,16),this.white,e,n+14,i),this.add(new Yt(3.3,3.65,4,16),this.coral,e,n+16,i),this.add(new Yt(4.2,4.2,.7,16),this.iron,e,n+27,i),this.add(new Yt(2.6,2.6,4,12),this.glow,e,n+29.5,i),this.add(new $i(4,3,16),this.coral,e,n+33,i);for(let a=0;a<8;a++){const l=a/8*Math.PI*2;this.add(new Yt(.11,.11,4.2,5),this.iron,e+Math.cos(l)*2.7,n+29.5,i+Math.sin(l)*2.7)}this.add(new Ze(4,.09,5,24),this.iron,e,n+28.4,i,Math.PI/2),this.beacon=new ue,this.beacon.position.set(e,n+29,i),this.group.add(this.beacon);const r=new $i(16,190,24,1,!0);r.translate(0,-95,0),r.rotateZ(Math.PI/2);const o=new k(r,new be({color:"#fff1a3",transparent:!0,opacity:.045,side:pe,depthWrite:!1,blending:De}));this.beacon.add(o)}update(t,e){for(let i=0;i<this.buoys.length;i++){const n=this.buoys[i];n.group.position.y=n.base+Math.sin(e*1.7+n.phase)*.2,n.group.rotation.z=Math.sin(e*1.2+n.phase)*.07}this.beacon.rotation.y=e*.35}}function Tc(s,t,e,i,n){s.safeCollider(t,e,i,n,"prop")}class Qx{constructor(t,e,i){this.ctx=e,this.water=i,this.group=new ue,t.add(this.group),this.accumulator=0,this.quality=e.quality||"high";const n=Dt.nearestOnRoute(mt.spillX,mt.spillZ);this.tx=n.tx,this.tz=n.tz,this.nx=-n.tz,this.nz=n.tx;const r=[],o=[],a=[],l=72,c=20;for(let D=0;D<3;D++)for(let _=0;_<=c;_++)for(let S=0;S<=l;S++){const N=S/l,F=_/c,V=(N-.5)*mt.spillWidth,q=(1-F)*(1-F)*(7+D*1.7)-D*.8;if(r.push(mt.spillX+this.nx*V+this.tx*q,F*mt.level+.25*Math.sin(N*53)*(1-F),mt.spillZ+this.nz*V+this.tz*q),o.push(N,F),_<c&&S<l){const B=D*(c+1)*(l+1)+_*(l+1)+S;a.push(B,B+1,B+l+1,B+1,B+l+2,B+l+1)}}const h=new te;h.setAttribute("position",new zt(r,3)),h.setAttribute("uv",new zt(o,2)),h.setIndex(a),h.computeVertexNormals(),this.material=new $t({side:pe,uniforms:{time:{value:0}},vertexShader:"uniform float time;varying vec2 tex;void main(){tex=uv;vec3 p=position;p.x+=sin(uv.x*88.+time*2.+uv.y*6.)*.18*(1.-uv.y);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:`uniform float time;varying vec2 tex;void main(){float a=sin(tex.x*227.+sin(tex.x*71.)*2.+tex.y*18.+time*9.);float b=sin(tex.x*119.-tex.y*31.-time*15.);float streak=pow(abs(a),5.)*.5+pow(abs(b),9.)*.3;vec3 c=mix(vec3(.15,.49,.59),vec3(.95,1.,1.),.48+streak);gl_FragColor=vec4(c,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),this.curtain=new k(h,this.material),this.group.add(this.curtain);const u=new ce({color:"#29423b",roughness:.43}),d=new ce({color:"#5c604d",roughness:.73}),f=(D,_,S,N)=>(D.position.set(mt.spillX+this.nx*_+this.tx*S,N,mt.spillZ+this.nz*_+this.tz*S),D.rotation.y=Math.atan2(this.tx,this.tz),D.castShadow=!0,D.receiveShadow=!0,this.group.add(D),D);f(new k(new Kt(58,11,6),u),0,-4,5);for(const D of[-1,1]){const _=f(new k(new Kt(9,12,12),u),D*29,-1,6);_.rotation.z=D*.08;const S=new k(new Ne(1,1),d);S.scale.set(8,17,10),f(S,D*35,-1,13)}for(const D of[-1,1])for(let _=0;_<4;_++){const S=new k(new Ne(1,1),_%2?u:d);S.scale.set(11-_,13-_*1.6,14-_),f(S,D*(37+_*3),-8+_*2,8+_*4),S.rotation.z=D*(.1+_*.06)}for(let D=0;D<15;D++){const _=new k(new Ne(1,0),u);_.scale.set(3,1.2,2.3),f(_,(D/14-.5)*56,-2,10.3+Math.sin(D*2)*.25)}this.foamMaterial=new $t({transparent:!0,depthWrite:!1,side:pe,uniforms:{time:{value:0}},vertexShader:"varying vec2 tex;void main(){tex=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 tex;uniform float time;void main(){vec2 p=tex*2.-1.;float r=length(p);float rings=.5+.5*sin(r*39.-time*4.+sin(p.x*19.)*1.7);float a=(1.-smoothstep(.55,1.,r))*(.28+rings*.48);gl_FragColor=vec4(.82,.97,.96,a);}"});const g=new k(new ni(72,36),this.foamMaterial);g.rotation.x=-Math.PI/2,g.rotation.z=-Math.atan2(this.tx,this.tz),g.position.set(mt.spillX+this.tx*11,.66,mt.spillZ+this.tz*11),this.group.add(g);const x=new $t({side:pe,uniforms:{time:this.material.uniforms.time},vertexShader:"varying vec2 tex;void main(){tex=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;varying vec2 tex;void main(){float broken=.5+.5*sin(tex.x*193.+sin(tex.x*63.)*2.+tex.y*24.-time*10.);float crest=smoothstep(.2,.55,tex.y);vec3 c=mix(vec3(.035,.18,.2),vec3(.83,.98,.96),crest);c+=broken*.12*crest;gl_FragColor=vec4(c,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),m=new k(new ni(52,6),x);m.rotation.x=-Math.PI/2,m.rotation.z=-Math.atan2(this.tx,this.tz),m.position.set(mt.spillX-this.tx*2,12.85,mt.spillZ-this.tz*2),this.group.add(m);const p=new Ke(new Ne(1,0),new be,42),M=new ee,v=new ot;for(let D=0;D<42;D++)M.position.set((D/41-.5)*51,12.7,-.4),M.scale.set(.85,.3+D%4*.12,1.3),M.updateMatrix(),p.setMatrixAt(D,M.matrix),p.setColorAt(D,v.setHex(D%3?15269880:10936027));f(p,0,0,0),p.castShadow=!1;const y=new $t({transparent:!0,depthWrite:!1,side:pe,uniforms:{time:this.material.uniforms.time},vertexShader:"uniform float time;varying vec2 tex;varying float height;varying float phase;void main(){tex=uv;vec3 p=position;p.x+=sin(time*.3+position.y*.17)*.6;vec4 world=modelMatrix*vec4(p,1.);height=world.y;phase=modelMatrix[3].x*.17+modelMatrix[3].z*.21;gl_Position=projectionMatrix*viewMatrix*world;}",fragmentShader:`uniform float time;varying vec2 tex;varying float height;varying float phase;void main(){vec2 p=tex*2.-1.;float billow=sin(p.x*9.+time*.2+phase)*sin(p.y*11.-time*.25)*.085+sin(p.x*17.+p.y*13.)*.04;float shape=1.-dot(p,p)+billow;float lobe=sin(p.x*3.5+phase+time*.13)*sin(p.y*4.-phase-time*.19);float density=.22+.78*smoothstep(-.7,.4,lobe);float a=smoothstep(0.,.45,shape)*.8*density*smoothstep(10.,23.,height);float light=clamp(.4+p.y*.27-p.x*.18+billow*2.,0.,1.);vec3 base=mix(vec3(.06,.13,.17),vec3(.48,.65,.7),smoothstep(5.,49.,height));vec3 col=base+light*.12;gl_FragColor=vec4(col,a);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`});for(let D=0;D<12;D++){const _=Math.floor(D/3),S=D%3,N=13-_,F=new k(new ni(N,18),y);f(F,(S-1)*(8-_)+Math.sin(D*3)*1.2,-5+_*2+Math.sin(D),8+_*11+Math.sin(D*2)*2),F.castShadow=!1}const P=new $t({transparent:!0,depthWrite:!1,side:pe,uniforms:{time:this.material.uniforms.time},vertexShader:"varying vec2 tex;void main(){tex=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float time;varying vec2 tex;void main(){float streak=pow(.5+.5*sin(tex.x*153.+sin(tex.x*67.)*3.),9.);float pulse=.75+.25*sin(tex.y*37.-time*(7.+tex.y*8.));float edge=smoothstep(0.,.1,tex.x)*(1.-smoothstep(.9,1.,tex.x));gl_FragColor=vec4(.78,.95,.88,streak*pulse*edge*.82);}"}),A=new k(new ni(48,44),P);A.rotation.x=-Math.PI/2,A.rotation.z=-Math.atan2(this.tx,this.tz),A.position.set(mt.spillX-this.tx*24,12.75,mt.spillZ-this.tz*24),this.group.add(A);const T=new $t({transparent:!0,depthWrite:!1,uniforms:{time:this.material.uniforms.time},vertexShader:"varying vec2 tex;void main(){tex=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 tex;uniform float time;void main(){vec2 p=tex*2.-1.;float edge=(1.-smoothstep(.6,1.,abs(p.x)))*(1.-smoothstep(.6,1.,abs(p.y)));float wave=sin(p.x*87.+p.y*41.+time)*.015;gl_FragColor=vec4(vec3(.035,.19,.23)+wave,edge*.78);}"}),L=new k(new ni(85,110),T);L.rotation.x=-Math.PI/2,L.rotation.z=-Math.atan2(this.tx,this.tz),L.position.set(mt.spillX+this.tx*55,.48,mt.spillZ+this.tz*55),this.group.add(L),this.particle={x:0,y:1,z:0,vx:0,vy:3,vz:0,life:1.8,size:2.8,endSize:8,color:12708580,endColor:11131089,alpha:.23,drag:1.7,gravity:-.6},this.counter=0}update(t,e,i){if(this.material.uniforms.time.value=e,this.foamMaterial.uniforms.time.value=e,!(i&&Math.hypot(i.x-mt.spillX,i.z-mt.spillZ)>650))for(this.accumulator+=Math.min(t,.1)*(this.quality==="low"?12:35);this.accumulator>=1;){this.accumulator--;const n=this.counter++,r=Math.sin(n*2.3999)*mt.spillWidth*.46,o=7+Math.sin(n*1.73)*3,a=this.particle;a.x=mt.spillX+this.nx*r+this.tx*o,a.z=mt.spillZ+this.nz*r+this.tz*o,a.y=.8+Math.sin(n*3)**2,a.vx=this.tx*2+Math.sin(n)*1.5,a.vz=this.tz*2+Math.cos(n)*1.5,a.vy=2+Math.sin(n*2)**2*3,this.ctx.particles?.spray?.spawn?.(a),this.water?.splatFoam(a.x,a.z,.4,4)}}setQuality(t){this.quality=t}reset(){this.accumulator=0,this.counter=0}}class $x{constructor(t,e){this.scene=t,this.ctx=e,this.built=!1,this.water=null,this.colliders=[],this.sunDir=new C(-.48,.47,-.74).normalize(),this.sunColor=new ot("#ffe3b0"),this.fogColor=new ot("#86bcc1"),this.hazeColor=new ot("#bad6ce")}build(){if(this.built)return this;this.sky=new Gx(this.scene,this.ctx),this.sunDir=this.sky.sunDir,this.sunColor=this.sky.sunColor,this.fogColor=this.sky.fogColor,this.hazeColor=this.sky.hazeColor,this.islands=new Vx(this.scene,this.ctx);const t={...this.ctx,islands:this.islands};return this.water=new Vh(this.scene,t),this.water.material.uniforms.sun.value=this.sunDir,this.water.material.uniforms.haze.value=this.hazeColor,this.vegetation=new Zx(this.scene,this.ctx,this.islands),this.props=new Jx(this.scene,this.ctx,this.islands),this.waterfall=new Qx(this.scene,this.ctx,this.water),this.colliders=this.islands.colliders,this.built=!0,this.setQuality(this.ctx.quality||"high"),this}heightAt(t,e){return this.islands?.heightAt(t,e)??-12}shoreAt(t,e){return this.islands?.shoreAt(t,e)??0}seabedDepthAt(t,e){return this.islands?.seabedDepthAt(t,e)??12}groundNormalAt(t,e,i){return i||(i=new C),i.set(this.heightAt(t-.5,e)-this.heightAt(t+.5,e),1,this.heightAt(t,e-.5)-this.heightAt(t,e+.5)).normalize()}update(t,e,i,n){this.built&&(this.water.update(t,e,n),this.sky.update(t,e,i,n),this.props.update(t,e),this.waterfall.update(t,e,i))}setQuality(t){this.quality=t,this.sky?.setQuality(t),this.water?.setQuality(t),this.vegetation?.setQuality(t),this.waterfall?.setQuality(t)}reset(){this.water?.reset(),this.waterfall?.reset(),this.props?.update(0,0),this.sky&&(this.sky.material.uniforms.time.value=0)}getAttractStops(){const t=[];for(const n of[Wt.startDock,Wt.arch]){const r=Dt.nearestOnRoute(n.x,n.z),o=Dt.waterLevelAt(n.x,n.z);t.push({pos:[n.x-r.tx*70-r.tz*24,o+12,n.z-r.tz*70+r.tx*24],look:[n.x,o+4,n.z],duration:6})}for(const n of[.34,.57,.81]){const r=Dt.cavePointAt(n),o=Dt.cavePointAt(n+.075),a=Dt.waterLevelAt(r.x,r.z);t.push({pos:[r.x,a+5,r.z],look:[o.x,Dt.waterLevelAt(o.x,o.z)+4,o.z],duration:4.5})}t.push({pos:[mt.x-35,mt.level+18,mt.z+22],look:[mt.spillX,mt.level+1,mt.spillZ],duration:6}),t.push({pos:[mt.spillX-38,mt.level+7,mt.spillZ-12],look:[mt.spillX+65,3,mt.spillZ],duration:5}),t.push({pos:[mt.spillX+110,25,mt.spillZ+28],look:[mt.spillX,7,mt.spillZ],duration:6});const e=Wt.finish,i=Dt.nearestOnRoute(e.x,e.z);return t.push({pos:[e.x-i.tx*95,24,e.z-i.tz*95],look:[this.islands?.finishIsland.x??e.x,32,this.islands?.finishIsland.z??e.z],duration:6}),t}dispose(){if(!this.built)return;this.water.dispose();const t=new Set,e=new Set;for(const i of[this.sky.mesh,this.islands.group,this.vegetation.group,this.props.group,this.waterfall.group])i.traverse(n=>{if(n.geometry&&t.add(n.geometry),n.material)if(Array.isArray(n.material))for(const r of n.material)e.add(r);else e.add(n.material)}),this.scene.remove(i);for(const i of t)i.dispose();for(const i of e)i.dispose();this.scene.remove(this.sky.sun,this.sky.sun.target,this.sky.fill),this.sky.sun.shadow.map?.dispose(),this.built=!1,this.water=null,this.colliders=[]}}const vi={hull:new ce({color:1386545,roughness:.46,metalness:.55}),armor:new ce({color:3490634,roughness:.62,metalness:.45}),red:new ce({color:16734742,emissive:16726280,emissiveIntensity:.75,roughness:.5,metalness:.15}),black:new ce({color:1056036,roughness:.45,metalness:.7}),glass:new ce({color:6006964,metalness:.85,roughness:.14}),rail:new ce({color:11123637,metalness:.8,roughness:.35}),glow:new be({color:16732465,toneMapped:!1})},Be=new Kt(1,1,1),nl=new Yt(.17,.23,1,8),tv=new Yt(.78,.95,.5,10),Ec=new Ee(.3,8,5);nl.rotateX(Math.PI/2);const Go=new Map;function ev(s,t){const e=new Jr;e.moveTo(-s*.86,-t*.48),e.lineTo(s*.86,-t*.48),e.lineTo(s,-t*.08),e.lineTo(s*.68,t*.27),e.lineTo(0,t*.61),e.lineTo(-s*.68,t*.27),e.lineTo(-s,-t*.08),e.closePath();const i=new Us(e,{depth:.8,bevelEnabled:!0,bevelThickness:.22,bevelSize:.2,bevelSegments:1,steps:1});return i.rotateX(Math.PI/2),i.translate(0,1,0),i}function iv(s){if(Go.has(s))return Go.get(s);const t=s==="heavy"||s==="turret",e=t?2.65:1.75,i=t?10:8,n=new Map;function r(a,l,c,h,u,d=1,f=1,g=1,x=0){const m=l.index?l.toNonIndexed():l.clone();m.scale(d,f,g),m.rotateY(x),m.translate(c,h,u),n.has(a)||n.set(a,[]),n.get(a).push(m)}r("hull",ev(e,i),0,0,0),r("armor",Be,0,1.15,-1.3,e*1.65,.5,i*.38),r("black",Be,0,1.85,-1.15,e*1.25,1.1,2.1),r("glass",Be,0,2.02,-.06,e*1.05,.36,.08),r("red",Be,0,2.44,-1.15,e*1.4,.24,2.3),r("black",Be,0,2.8,-2.2,.3,1.5,1.1);for(const a of[-1,1]){r("red",Be,a*(e*.94),.85,-1.1,.22,.65,i*.57,a*.04),r("red",Be,a*e*.58,1.08,i*.25,.48,.16,i*.39,-a*.38),r("rail",Be,a*e*.83,.28,i*.09,.14,.12,i*.42,-a*.16),r("rail",Be,a*e*.84,1.53,-1.1,.075,.075,i*.47);for(let l=0;l<3;l++)r("rail",Be,a*e*.84,1.26,-2.6+l*1.5,.075,.55,.075);if(r("black",Be,a*e*.62,.7,-i*.48,.8,1.5,1.1),r("rail",nl,a*e*.62,1.2,-i*.55,1.2,1.2,.8),r("hull",Be,a*e*.8,-.25,-.1,.16,.18,i*.7),t)for(let l=0;l<3;l++)r("armor",Be,a*2.35,1.35,-2+l*1.35,.55,.8,1.05,a*.12)}const o=[];for(const[a,l]of n){const c=Ns(l);l.forEach(h=>h.dispose()),o.push({geometry:c,material:vi[a]})}return Go.set(s,o),o}function nv(s="patrol",t){const e=new ue;for(const h of iv(s)){const u=new k(h.geometry,h.material);u.castShadow=!0,e.add(u)}const i=new ue;i.position.set(0,1.5,1.9),e.add(i);const n=new k(tv,vi.red);n.scale.set(1.25,1.3,1.25),i.add(n);const r=s==="heavy"||s==="turret"?2:1;for(let h=0;h<r;h++){const u=new k(nl,vi.black);u.scale.z=2.5,u.position.set(r===2?(h-.5)*.65:0,.2,1.35),i.add(u)}const o=new ee;o.position.set(0,.2,2.7),i.add(o);const a=new k(Ec,vi.glow);a.position.copy(o.position),a.visible=!1,i.add(a);const l=new k(Ec,vi.glow);l.position.set(0,3.58,-2.2),e.add(l);const c=new k(Be,vi.rail);return c.scale.set(1.4,.12,.18),c.position.set(0,-.35,s==="heavy"?-5.3:-4.4),e.add(c),{group:e,parts:{turret:i,muzzle:o,propeller:c,tell:a,marker:l,driver:null,rotors:[]},dispose(){e.removeFromParent()}}}const Cc=new Ne(1.1,0),sv=new Ze(.85,.055,4,16);function rv(s){const t=new ue,e=[],i=new k(Cc,vi.armor);i.scale.set(1.25,.55,1.5),t.add(i);for(const o of[-1,1])for(const a of[-1,1]){const l=new k(Be,vi.black);l.position.set(o,0,a),l.scale.set(2.6,.15,.18),l.rotation.y=-o*a*Math.PI/4,t.add(l);const c=new k(sv,vi.rail);c.rotation.x=Math.PI/2,c.position.set(o*1.9,.15,a*1.9),t.add(c),e.push(c);const h=new k(Be,vi.black);h.scale.set(1.55,.06,.14),c.add(h)}const n=new k(Cc,vi.glow);n.scale.set(.65,.3,.3),n.position.set(0,0,1.5),t.add(n);const r=new ee;return r.position.set(0,-.25,1.75),t.add(r),{group:t,parts:{rotors:e,muzzle:r,turret:null,tell:n,propeller:null,driver:null},dispose(){t.removeFromParent()}}}const Rc=s=>Math.atan2(Math.sin(s),Math.cos(s)),Pc=new ot(16765322);class ov{constructor(t,e){this.scene=t,this.ctx=e,this.enemies=[],this.activeCount=0,this.waves=new Map,this.landingTimer=-1,this.normal=new C,this.muzzle=new C,e.events?.on("signature:landed",()=>{this.landingTimer=1.5})}build(){if(this.enemies.length)return;const t=this.ctx.route.A,e=[["alpha",t.combatOne,["patrol","patrol"]],["channel",t.minefield,["drone","drone","patrol"]],["landing",t.combatTwo,["heavy","patrol","patrol"]],["beacon",t.beaconRun,["heavy","drone"]]];for(const[i,n,r]of e){const o=this.ctx.route.nearestOnRoute(n.x,n.z).d;this.waves.set(i,{x:n.x,z:n.z,active:!1}),r.forEach((a,l)=>{const c=this.ctx.route.pointAt(o+(l-1)*26),h=(l%2?1:-1)*(12+(this.ctx.rng?.next?.()??.5)*12);this.spawn(a,c.x+c.tz*h,c.z-c.tx*h,{wave:i,d:o+(l-1)*26,phase:l*2.1+(this.ctx.rng?.next?.()??.5)})})}}spawn(t,e,i,n={}){const r=t==="drone"?rv(this.ctx.rng):nv(t,this.ctx.rng),o=t==="heavy"?220:t==="drone"?65:110,a={kind:t,alive:!0,hp:o,maxHp:o,radius:t==="heavy"?4.8:t==="drone"?2.7:3.6,position:r.group.position,velocity:new C,heading:this.ctx.route.headingAt(n.d||0),group:r.group,parts:r.parts,spawnX:e,spawnZ:i,wave:n.wave,d:n.d||0,phase:n.phase||0,cooldown:1.5,tell:0,deadTime:0,wash:0,contact:0};return a.position.set(e,Je(this.ctx.world?.water,e,i)+(t==="drone"?7:.35),i),a.hitTime=0,a.hitMaterials=[],a.group.traverse(l=>{l.isMesh&&l.material.emissive&&(l.material=l.material.clone(),l.material.userData.restEmissive=l.material.emissive.clone(),l.material.userData.restIntensity=l.material.emissiveIntensity,a.hitMaterials.push(l.material))}),a.takeDamage=(l,c=0,h=0)=>{if(a.alive){a.hp-=l,a.velocity.x+=c*1.5,a.velocity.z+=h*1.5,this.ctx.audio?.enemyHit?.(),a.hitTime=.16;for(const u of a.hitMaterials)u.emissive.copy(Pc),u.emissiveIntensity=2.2;a.hp<=0&&(a.alive=!1,a.deadTime=1.2,this.activeCount--,(this.ctx.effects||this.ctx.game?.effects)?.explosion(a.position.x,a.position.y,a.position.z,t==="heavy"?1.6:1),this.ctx.events?.emit("enemy:killed",{kind:t,x:a.position.x,y:a.position.y,z:a.position.z}))}},this.scene.add(a.group),this.enemies.push(a),this.activeCount++,a}triggerWave(t){const e=this.waves.get(t);e&&(e.active=!0,this.ctx.events?.emit("notice",{text:"HOSTILE CONTACT // "+t.toUpperCase(),kind:"danger"}))}update(t,e,i=0){this.landingTimer>=0&&(this.landingTimer-=t,this.landingTimer<0&&this.triggerWave("landing"));const n=this.ctx.world?.water;for(const[r,o]of this.waves)e&&r!=="landing"&&!o.active&&Math.hypot(e.position.x-o.x,e.position.z-o.z)<225&&this.triggerWave(r);for(const r of this.enemies){r.hitTime=Math.max(0,r.hitTime-t);for(const x of r.hitMaterials)if(x.emissive.copy(x.userData.restEmissive),x.emissiveIntensity=x.userData.restIntensity,r.hitTime>0){const m=Math.min(1,r.hitTime/.08);x.emissive.lerp(Pc,m),x.emissiveIntensity+=(2.2-x.emissiveIntensity)*m}if(!r.alive){r.deadTime>0&&(r.deadTime-=t,r.position.y-=t*4,r.group.rotation.z+=t*.7,r.deadTime<=0&&(r.group.visible=!1));continue}r.contact=Math.max(0,r.contact-t);const o=!r.wave||this.waves.get(r.wave)?.active;let a=r.spawnX+Math.sin(i*.18+r.phase)*20,l=r.spawnZ+Math.cos(i*.18+r.phase)*20,c=5,h=1/0;if(e&&o){const x=e.position.x-r.position.x,m=e.position.z-r.position.z;if(h=Math.hypot(x,m),h<350){const p=r.kind==="heavy"?67:46,M=1/Math.max(h,1),v=Math.sin(i*.35+r.phase)*32;a=e.position.x+e.velocity.x*.65-x*M*p+m*M*v,l=e.position.z+e.velocity.z*.65-m*M*p-x*M*v,c=Math.min(r.kind==="heavy"?20:29,7+Math.hypot(a-r.position.x,l-r.position.z)*.4),h<15&&(a=e.position.x,l=e.position.z,c=24)}}let u=Math.atan2(a-r.position.x,l-r.position.z);for(const x of this.ctx.world?.colliders||[]){const m=r.position.x-x.x,p=r.position.z-x.z,M=Math.hypot(m,p);M<x.r+r.radius+18&&r.position.y<(x.top??100)&&(u=Math.atan2(m,p)),M<x.r+r.radius&&M>.01&&r.position.y<(x.top??100)&&(r.position.x=x.x+m/M*(x.r+r.radius),r.position.z=x.z+p/M*(x.r+r.radius))}const d=Math.max(-1.4,Math.min(1.4,Rc(u-r.heading)*2));r.heading+=d*t;const f=1-Math.exp(-t*2);r.velocity.x+=(Math.sin(r.heading)*c-r.velocity.x)*f,r.velocity.z+=(Math.cos(r.heading)*c-r.velocity.z)*f,r.position.x+=r.velocity.x*t,r.position.z+=r.velocity.z*t;const g=Je(n,r.position.x,r.position.z);Tx(n,r.position.x,r.position.z,this.normal),r.position.y=g+(r.kind==="drone"?7+Math.sin(i*2+r.phase)*1.1:.35),r.group.rotation.set(this.normal.z*Math.cos(r.heading)+this.normal.x*Math.sin(r.heading),r.heading,-d*.12-this.normal.x*.3,"YXZ"),r.parts.propeller&&(r.parts.propeller.rotation.z+=t*c*3),r.parts.marker&&r.parts.marker.scale.setScalar(.9+Math.pow(.5+.5*Math.sin(i*5+r.phase),4)*.8);for(const x of r.parts.rotors)x.rotation.z+=t*42;if(r.kind!=="drone"&&(r.wash+=t,r.wash>.08&&(r.wash=0,n?.splatWake?.(r.position.x-Math.sin(r.heading)*4,r.position.z-Math.cos(r.heading)*4,Math.sin(r.heading),Math.cos(r.heading),c/25,r.radius),Math.abs(d)>.6&&n?.splatFoam?.(r.position.x,r.position.z,.3,r.radius),this.ctx.particles?.spray?.spawn({x:r.position.x,y:g+.5,z:r.position.z,vx:-r.velocity.x*.25,vy:2,vz:-r.velocity.z*.25,life:.55,size:.8,endSize:.3,alpha:.35,color:14221311,gravity:-6}))),e&&o&&h<210){const x=Math.atan2(e.position.x-r.position.x,e.position.z-r.position.z);if(r.parts.turret&&(r.parts.turret.rotation.y=Rc(x-r.heading)),r.cooldown-=t,r.cooldown<=0&&r.tell<=0&&(r.tell=.65,this.ctx.audio?.warn?.()),r.tell>0&&(r.tell-=t,r.parts.tell&&(r.parts.tell.visible=!0),r.tell<=0)){r.group.updateWorldMatrix(!0,!0),r.parts.muzzle.getWorldPosition(this.muzzle);const m=e.position.x+e.velocity.x*.25-this.muzzle.x,p=e.position.y+.6-this.muzzle.y,M=e.position.z+e.velocity.z*.25-this.muzzle.z,v=Math.hypot(m,p,M)||1;(this.ctx.weapons||this.ctx.game?.weapons)?.spawnEnemyShot(this.muzzle.x,this.muzzle.y,this.muzzle.z,m/v,p/v,M/v,65,r.kind==="heavy"?18:10,r),r.cooldown=r.kind==="heavy"?1.7:2.4,r.parts.tell&&(r.parts.tell.visible=!1)}if(h<r.radius+(e.radius||3)&&r.contact<=0){const m=(e.position.x-r.position.x)/Math.max(h,.1),p=(e.position.z-r.position.z)/Math.max(h,.1);e.applyDamage(12,r.position.x,r.position.y,r.position.z),e.applyImpulse(m*18,2,p*18),r.takeDamage(18,-m,-p),r.contact=1}}else r.parts.tell&&r.kind!=="drone"&&(r.parts.tell.visible=!1)}}damageArea(t,e,i,n,r,o){let a=0;for(const l of this.enemies)if(l.alive&&l!==o&&Math.hypot(l.position.x-t,l.position.y-e,l.position.z-i)<n+l.radius){const c=Math.hypot(l.position.x-t,l.position.z-i)||1;l.takeDamage(r,(l.position.x-t)/c,(l.position.z-i)/c),a++}return a}findTarget(t,e,i=320,n=.55){let r=null,o=1/0;const a=Math.cos(n);for(const l of this.enemies){if(!l.alive)continue;const c=l.position.x-t.x,h=l.position.y-t.y,u=l.position.z-t.z,d=Math.hypot(c,h,u),f=(c*e.x+h*e.y+u*e.z)/Math.max(.01,d);if(d>i||f<a)continue;let g=!1;for(const m of this.ctx.world?.colliders||[]){const p=((m.x-t.x)*c+(m.z-t.z)*u)/(c*c+u*u);if(p>0&&p<1&&Math.hypot(t.x+c*p-m.x,t.z+u*p-m.z)<m.r&&t.y+h*p<(m.top??100)){g=!0;break}}const x=(1-f)*1e3+d*.015;!g&&x<o&&(r=l,o=x)}return r}allCleared(){return this.activeCount===0}reset(){this.landingTimer=-1,this.activeCount=this.enemies.length;for(const t of this.waves.values())t.active=!1;for(const t of this.enemies){t.hitTime=0,t.wash=0;for(const e of t.hitMaterials)e.emissive.copy(e.userData.restEmissive),e.emissiveIntensity=e.userData.restIntensity}for(const t of this.enemies)t.alive=!0,t.hp=t.maxHp,t.group.visible=!0,t.position.set(t.spawnX,Je(this.ctx.world?.water,t.spawnX,t.spawnZ)+(t.kind==="drone"?7:.35),t.spawnZ),t.velocity.set(0,0,0),t.heading=this.ctx.route.headingAt(t.d),t.cooldown=1.5,t.tell=0,t.contact=0,t.deadTime=0}}function _r(s,t,e,i,n,r,o,a,l){const c=i-s,h=n-t,u=r-e,d=Math.max(0,Math.min(1,((o-s)*c+(a-t)*h+(l-e)*u)/(c*c+h*h+u*u||1)));return Math.hypot(s+c*d-o,t+h*d-a,e+u*d-l)}class av{constructor(t,e){this.ctx=e,this.heat=0,this.cooldown=0,this.overheated=!1,this.twin=!1,this.currentTarget=null,this.forward=new C,this.projected=new C,this.aim=new C,this.axis=new C(0,0,1),this.targetInfo={enemy:null,screenX:0,screenY:0,dist:0,locked:!0,onScreen:!1},this.mesh=new Ke(new Ee(1,6,4),new be({color:16777215,toneMapped:!1}),160),this.mesh.instanceMatrix.setUsage(Ii),this.mesh.frustumCulled=!1,t.add(this.mesh),this.dummy=new ee,this.colorPlayer=new ot(6488023),this.colorEnemy=new ot(16733960),this.glow=new Ke(this.mesh.geometry,new be({color:16777215,transparent:!0,opacity:.32,blending:De,depthWrite:!1,toneMapped:!1}),160),this.glow.instanceMatrix.setUsage(Ii),this.glow.frustumCulled=!1,t.add(this.glow),this.projectiles=Array.from({length:160},()=>({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,damage:0,enemy:!1,target:null,owner:null})),this.clearProjectiles()}setTwin(t){this.twin=!!t}acquire(){for(const t of this.projectiles)if(!t.alive)return t;return null}target(t,e){if(!t||!e)return this.currentTarget=null,null;this.forward.set(Math.sin(t.heading),0,Math.cos(t.heading));const i=e.findTarget(t.position,this.forward,320,.55);if(!i)return this.currentTarget=null,null;const n=this.targetInfo;if(n.enemy=i,n.dist=t.position.distanceTo(i.position),this.ctx.camera){this.projected.copy(i.position),this.projected.y+=1,this.projected.project(this.ctx.camera);const r=globalThis.innerWidth||1920,o=globalThis.innerHeight||1080;n.screenX=(this.projected.x*.5+.5)*r,n.screenY=(-this.projected.y*.5+.5)*o,n.onScreen=this.projected.z<1&&this.projected.z>-1&&Math.abs(this.projected.x)<.95&&Math.abs(this.projected.y)<.9}return this.currentTarget=n,i}tryFire(t,e){if(!t||this.cooldown>0||this.overheated)return!1;const i=this.target(t,e),n=this.twin||t.dual>0?2:1,r=Math.sin(t.heading),o=Math.cos(t.heading);let a=!1;for(let l=0;l<n;l++){const c=this.acquire();if(!c)break;const h=n===2?(l-.5)*1.5:0;if(c.x=t.position.x+r*4+o*h,c.y=t.position.y+1.3,c.z=t.position.z+o*4-r*h,i){const u=t.position.distanceTo(i.position)/240;this.aim.set(i.position.x+i.velocity.x*u-c.x,i.position.y+.6-c.y,i.position.z+i.velocity.z*u-c.z).normalize()}else this.aim.set(r,.018,o).normalize();c.vx=this.aim.x*240,c.vy=this.aim.y*240,c.vz=this.aim.z*240,c.enemy=!1,c.life=1.65,c.damage=26,c.target=i,c.owner=t,c.alive=!0,a=!0,(this.ctx.effects||this.ctx.game?.effects)?.muzzle(c.x,c.y,c.z,this.aim.x,this.aim.y,this.aim.z)}return a&&(this.cooldown=.135,this.heat=Math.min(1,this.heat+.075),this.heat>=1&&(this.overheated=!0),this.ctx.audio?.fire?.()),a}spawnEnemyShot(t,e,i,n,r,o,a=65,l=10,c){const h=this.acquire();h&&(h.x=t,h.y=e,h.z=i,h.vx=n*a,h.vy=r*a,h.vz=o*a,h.life=4,h.damage=l,h.enemy=!0,h.target=null,h.owner=c,h.alive=!0,this.ctx.audio?.enemyFire?.(),(this.ctx.effects||this.ctx.game?.effects)?.muzzle(t,e,i,n,r,o))}update(t,e,i,n,r=0){this.cooldown=Math.max(0,this.cooldown-t),this.heat=Math.max(0,this.heat-t*.24),this.heat<.35&&(this.overheated=!1),this.target(e,i),e&&n?.read?.().fire&&this.tryFire(e,i);const o=this.ctx.effects||this.ctx.game?.effects,a=this.ctx.hazards||this.ctx.game?.hazards;for(let l=0;l<this.projectiles.length;l++){const c=this.projectiles[l];if(c.alive){const h=c.x,u=c.y,d=c.z;if(c.target?.alive&&!c.enemy){this.aim.set(c.target.position.x+c.target.velocity.x*.06-c.x,c.target.position.y+.5-c.y,c.target.position.z+c.target.velocity.z*.06-c.z).normalize().multiplyScalar(240);const f=Math.min(1,t*7);c.vx+=(this.aim.x-c.vx)*f,c.vy+=(this.aim.y-c.vy)*f,c.vz+=(this.aim.z-c.vz)*f}if(!c.target&&!c.enemy&&(c.vy-=12*t),c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.life-=t,c.enemy&&e&&_r(h,u,d,c.x,c.y,c.z,e.position.x,e.position.y+.4,e.position.z)<(e.radius||3)+.6&&(e.applyDamage(c.damage,h,u,d),e.shield>0?o?.shieldHit(c.x,c.y,c.z):o?.impact(c.x,c.y,c.z,0,1,0,1),this.onPlayerHit?.(c.damage),c.alive=!1),!c.enemy&&i){for(const f of i.enemies)if(f.alive&&_r(h,u,d,c.x,c.y,c.z,f.position.x,f.position.y+.5,f.position.z)<f.radius+1.1){const g=Math.hypot(c.vx,c.vy,c.vz)||1;c.x=f.position.x-c.vx/g*f.radius*.6,c.y=f.position.y+1,c.z=f.position.z-c.vz/g*f.radius*.6,f.takeDamage(c.damage,c.vx/240,c.vz/240),o?.impact(c.x,c.y,c.z,-c.vx/g,-c.vy/g,-c.vz/g,1),c.alive=!1;break}}if(c.alive&&!c.enemy&&a){for(const f of a.hazards)if(f.alive&&_r(h,u,d,c.x,c.y,c.z,f.x,f.group?.position.y||0,f.z)<f.r+1){a.damageArea(f.x,f.group?.position.y||0,f.z,2,c.damage),c.alive=!1;break}}if(c.alive){for(const f of this.ctx.world?.colliders||[])if(c.y<(f.top??100)&&_r(h,0,d,c.x,0,c.z,f.x,0,f.z)<f.r){o?.impact(c.x,c.y,c.z,0,1,0,.5),c.alive=!1;break}}c.alive&&c.y<Je(this.ctx.world?.water,c.x,c.z)&&(o?.splash(c.x,Je(this.ctx.world?.water,c.x,c.z),c.z,.8,22),c.alive=!1),c.life<=0&&(c.alive=!1)}c.alive?(this.aim.set(c.vx,c.vy,c.vz).normalize(),this.dummy.position.set(c.x-this.aim.x*2,c.y-this.aim.y*2,c.z-this.aim.z*2),this.dummy.quaternion.setFromUnitVectors(this.axis,this.aim),this.dummy.scale.set(c.enemy?.45:.18,c.enemy?.45:.18,c.enemy?2.4:3.4),this.mesh.setColorAt(l,c.enemy?this.colorEnemy:this.colorPlayer),this.glow.setColorAt(l,c.enemy?this.colorEnemy:this.colorPlayer)):this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(l,this.dummy.matrix),c.alive&&c.enemy?(this.dummy.position.set(c.x-this.aim.x*5.5,c.y-this.aim.y*5.5,c.z-this.aim.z*5.5),this.dummy.scale.set(.62,.62,6)):(this.dummy.scale.x*=1.7,this.dummy.scale.y*=1.7),this.dummy.updateMatrix(),this.glow.setMatrixAt(l,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,this.glow.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.glow.instanceColor&&(this.glow.instanceColor.needsUpdate=!0)}clearProjectiles(){for(let t=0;t<this.projectiles.length;t++)this.projectiles[t].alive=!1,this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix),this.glow.setMatrixAt(t,this.dummy.matrix);this.mesh.instanceMatrix.needsUpdate=!0,this.glow.instanceMatrix.needsUpdate=!0,this.heat=0,this.cooldown=0,this.overheated=!1,this.currentTarget=null}}const Vo={boost:16766073,shield:6348287,dual:16755782,repair:5504943},lv=new Kt(1,1,1),cv=new Ne(1.5,0),hv=new Ze(2.4,.07,5,28),uv=new zs(2.4,24);class dv{constructor(t,e){this.scene=t,this.ctx=e,this.pickups=[],this.materials={};for(const i of Object.keys(Vo))this.materials[i]=new be({color:Vo[i],toneMapped:!1});this.shadowMaterial=new be({color:677728,transparent:!0,opacity:.26,depthWrite:!1})}build(){if(this.pickups.length)return;const t=this.ctx.route,e=t.A;for(let n=170;n<t.length-60;n+=220)this.add("boost",n,((this.ctx.rng?.next?.()??.5)-.5)*10);const i=n=>t.nearestOnRoute(n.x,n.z).d;this.add("shield",i(e.minefield)-105),this.add("shield",i(e.fallLip)-85),this.add("dual",i(e.combatOne)-100),this.add("dual",i(e.combatTwo)-70),this.add("repair",i(e.landing)+35)}add(t,e,i=0){const n=this.ctx.route.pointAt(e),r=new ue,o=new ue,a=this.materials[t];r.position.set(n.x+n.tz*i,0,n.z-n.tx*i),r.add(o);const l=(u,d,f,g,x,m,p=0)=>{const M=new k(lv,a);M.position.set(u,d,f),M.scale.set(g,x,m),M.rotation.z=p,o.add(M)};if(t==="boost")l(-.55,0,0,.4,1.8,.4,-.6),l(.55,0,0,.4,1.8,.4,.6);else if(t==="repair")l(0,0,0,.6,2.3,.5),l(0,0,0,2.3,.6,.5);else if(t==="dual")l(-.65,0,0,.45,2.2,.6),l(.65,0,0,.45,2.2,.6);else{const u=new k(cv,new be({color:Vo.shield,wireframe:!0}));o.add(u)}const c=new k(hv,a);c.rotation.x=Math.PI/2,c.position.y=-1,r.add(c);const h=new k(uv,this.shadowMaterial);h.rotation.x=-Math.PI/2,this.scene.add(h),this.scene.add(r),this.pickups.push({kind:t,group:r,icon:o,halo:c,shadow:h,cooldown:0,phase:this.pickups.length*1.6})}update(t,e,i=0){for(const n of this.pickups){if(n.cooldown>0&&(n.cooldown-=t,n.group.visible=n.cooldown<=0,n.shadow.visible=n.cooldown<=0,n.cooldown>0))continue;const r=n.group.position,o=Je(this.ctx.world?.water,r.x,r.z);r.y=o+2.5+Math.sin(i*2+n.phase)*.5,n.icon.rotation.y=i*1.1+n.phase,n.halo.scale.setScalar(1+Math.sin(i*3+n.phase)*.07),n.shadow.position.set(r.x,o+.12,r.z),e&&Math.hypot(e.position.x-r.x,e.position.z-r.z)<7&&Math.abs(e.position.y-r.y)<8&&(n.kind==="boost"?(e.boost=Math.min(1,e.boost+.55),e.boostReady=e.boost>.14):n.kind==="shield"?e.shield=12:n.kind==="dual"?e.dual=14:e.hp=Math.min(e.maxHp,e.hp+25),n.cooldown=25,n.group.visible=!1,n.shadow.visible=!1,this.ctx.audio?.pickup?.(n.kind),(this.ctx.effects||this.ctx.game?.effects)?.pickupBurst(r.x,r.y,r.z,n.kind),this.ctx.events?.emit("pickup:collected",{kind:n.kind,x:r.x,y:r.y,z:r.z}))}}reset(){for(const t of this.pickups)t.cooldown=0,t.group.visible=!0,t.shadow.visible=!0}}const fv=new Yt(.45,.8,7,8),pv=new Yt(1.7,2.1,.8,10),Wo=new Yt(.16,.16,6,6),Lc=new ce({color:1195588,metalness:.65,roughness:.4});class mv{constructor(t,e){this.scene=t,this.ctx=e,this.gates=[],this.currentIndex=0,this.total=e.route.CHECKPOINTS.length,this.highlight=0,this.lastX=NaN,this.lastZ=NaN}build(){if(this.gates.length)return;const t=this.ctx.route;t.CHECKPOINTS.forEach((e,i)=>{let n=e.d;e.gate==="arch"?n=t.nearestOnRoute(t.A.arch.x,t.A.arch.z).d:e.gate==="cave"?n=t.nearestOnRoute(t.A.caveExit.x,t.A.caveExit.z).d+5:e.gate==="lip"?n=t.nearestOnRoute(t.A.fallLip.x,t.A.fallLip.z).d+5:e.gate==="finish"&&(n=t.nearestOnRoute(t.A.finish.x,t.A.finish.z).d-8);const r=t.pointAt(n),o=e.gate==="cave"?34:e.gate==="arch"?38:44,a=new ue;a.position.set(r.x,t.waterLevelAt(r.x,r.z),r.z),a.rotation.y=Math.atan2(r.tx,r.tz);const l=new be({color:6684640,toneMapped:!1}),c=new be({color:5566413,transparent:!0,opacity:.035,side:pe,depthWrite:!1,blending:De}),h=e.gate==="lip";for(const g of[-1,1]){const x=new k(pv,Lc);x.position.set(g*o/2,.25,0),a.add(x);const m=new k(fv,Lc);m.position.set(g*o/2,h?1.5:3.5,0),h&&(m.scale.y=.4),a.add(m);const p=new k(Wo,l);p.position.set(g*o/2,h?1.5:3.8,0),h&&(p.scale.y=.4),a.add(p)}const u=new ue;u.material=c;for(const g of[-1,1]){const x=new k(Wo,c);x.position.set(g*(o/2-1.5),h?1:3.5,0),x.scale.set(.6,h?.28:1.2,.6),u.add(x)}const d=new k(Wo,c);d.rotation.z=Math.PI/2,d.scale.set(.5,o/6,.5),d.position.y=h?2:7,u.add(d),a.add(u);let f=null;if(globalThis.document){const g=document.createElement("canvas");g.width=128,g.height=128;const x=g.getContext("2d");if(x){x.strokeStyle="#7fffe1",x.lineWidth=3,x.strokeRect(18,18,92,92),x.fillStyle="#b9fff1",x.font="bold 58px Arial",x.textAlign="center",x.textBaseline="middle",x.fillText(String(i+1).padStart(2,"0"),64,66);const m=new Sh(g);f=new ug(new yh({map:m,transparent:!0,depthWrite:!1})),f.position.set(0,h?8:11,0),f.scale.set(5,5,1),a.add(f)}}this.scene.add(a),this.gates.push({cp:e,d:n,x:r.x,z:r.z,tx:r.tx,tz:r.tz,width:o,group:a,glow:l,curtain:u,marker:f})})}update(t,e,i=0){for(let o=0;o<this.gates.length;o++){const a=this.gates[o],l=o<this.currentIndex,c=o===this.highlight;a.glow.color.setHex(l?2325592:c?10485744:3768198);const h=e?Math.hypot(e.position.x-a.x,e.position.z-a.z):100;a.curtain.material.opacity=(l?0:c?.65:.15)*Math.min(1,Math.max(0,(h-12)/40)),a.marker&&(a.marker.material.opacity=l?.25:c?1:.45,a.marker.position.y=(a.cp.gate==="lip"?8:11)+Math.sin(i*2+o)*.35)}if(!e)return;const n=e.position.x,r=e.position.z;if(Number.isFinite(this.lastX)&&this.currentIndex<this.gates.length){const o=this.gates[this.currentIndex],a=(this.lastX-o.x)*o.tx+(this.lastZ-o.z)*o.tz,l=(n-o.x)*o.tx+(r-o.z)*o.tz;if(a<=0&&l>=0&&l-a>1e-6){const c=-a/(l-a),h=this.lastX+(n-this.lastX)*c,u=this.lastZ+(r-this.lastZ)*c,d=(h-o.x)*o.tz-(u-o.z)*o.tx;if(Math.abs(d)<=o.width/2+3){const f=this.currentIndex++;this.highlight=this.currentIndex,this.ctx.audio?.gate?.(f),(this.ctx.effects||this.ctx.game?.effects)?.pickupBurst(n,e.position.y+2,r,"shield"),this.ctx.events?.emit("gate:passed",{index:f,name:o.cp.name,total:this.total})}}}this.lastX=n,this.lastZ=r}setTargetHighlight(t){this.highlight=t}reset(){this.currentIndex=0,this.highlight=0,this.lastX=NaN,this.lastZ=NaN}}const gv=new ce({color:2505275,metalness:.72,roughness:.4}),xv=new be({color:16726060}),vv=new ce({color:5851446,roughness:.95}),sl=[new Ne(1.25,1)];for(let s=0;s<10;s++){const t=s*Math.PI*2/10,e=new $i(.23,.9,5).toNonIndexed();e.rotateZ(-Math.PI/2),e.rotateY(-t),e.translate(Math.cos(t)*1.45,0,Math.sin(t)*1.45),sl.push(e)}const _v=Ns(sl);sl.forEach(s=>s.dispose());const Mv=new Ee(.23,6,4),qh=new Yt(.8,1.1,9,7);qh.rotateZ(Math.PI/2);class yv{constructor(t,e){this.scene=t,this.ctx=e,this.hazards=[],this.stack=[]}build(){if(this.hazards.length)return;const t=this.ctx.route,e=t.nearestOnRoute(t.A.minefield.x,t.A.minefield.z).d;for(let i=0;i<30;i++){const n=t.pointAt(e-135+Math.floor(i/2)*19),r=(i%2?1:-1)*(16+(this.ctx.rng?.next?.()??.5)*3);this.add("mine",n.x+n.tz*r,n.z-n.tx*r)}for(let i=0;i<5;i++){const n=t.pointAt(420+i*365),r=i%2?18:-18;this.add("log",n.x+n.tz*r,n.z-n.tx*r)}for(const i of[-95,65]){const n=t.A.combatOne,r=t.pointAt(t.nearestOnRoute(n.x,n.z).d+i);this.add("mine",r.x+r.tz*21,r.z-r.tx*21)}}add(t,e,i){const n=new ue,r=new k(t==="mine"?_v:qh,t==="mine"?gv:vv);r.castShadow=!0,n.add(r);let o=null;t==="mine"&&(o=new k(Mv,xv),o.position.y=1.35,n.add(o)),n.position.set(e,0,i),this.scene.add(n),this.hazards.push({x:e,z:i,baseX:e,baseZ:i,r:t==="mine"?2:4.5,kind:t,alive:!0,group:n,light:o,phase:this.hazards.length*1.8,cooldown:0})}detonate(t){if(t.alive)for(t.alive=!1,t.group.visible=!1,this.stack.push(t);this.stack.length;){const e=this.stack.pop(),i=e.x,n=e.group.position.y,r=e.z;(this.ctx.effects||this.ctx.game?.effects)?.explosion(i,n,r,1.25);const o=this.ctx.getPlayer?.();if(o){const a=o.position.x-i,l=o.position.z-r,c=Math.hypot(a,l);c<18&&(o.applyDamage(38*(1-c/24),i,n,r),o.applyImpulse(a/Math.max(1,c)*24,8,l/Math.max(1,c)*24))}(this.ctx.enemies||this.ctx.game?.enemies)?.damageArea(i,n,r,14,65,e);for(const a of this.hazards)a.alive&&a.kind==="mine"&&Math.hypot(a.x-i,a.z-r)<18&&(a.alive=!1,a.group.visible=!1,this.stack.push(a))}}damageArea(t,e,i,n,r){let o=0;for(const a of this.hazards)a.alive&&Math.hypot(a.x-t,a.group.position.y-e,a.z-i)<n+a.r&&(a.kind==="mine"?this.detonate(a):r>=20&&(a.alive=!1,a.group.visible=!1,(this.ctx.effects||this.ctx.game?.effects)?.splash(a.x,a.group.position.y,a.z,.5,15)),o++);return o}update(t,e,i=0){for(const n of this.hazards)if(n.alive&&(n.cooldown=Math.max(0,n.cooldown-t),n.kind==="log"&&(n.x=n.baseX+Math.sin(i*.15+n.phase)*2,n.z=n.baseZ+Math.cos(i*.12+n.phase)*2),n.group.position.set(n.x,Je(this.ctx.world?.water,n.x,n.z)+.2,n.z),n.group.rotation.z=Math.sin(i+n.phase)*.08,n.group.rotation.y=n.phase+Math.sin(i*.25)*.2,n.light&&(n.light.visible=Math.sin(i*5+n.phase)>.1),e&&Math.abs(e.position.y-n.group.position.y)<4&&Math.hypot(e.position.x-n.x,e.position.z-n.z)<n.r+(e.radius||3))){if(n.kind==="mine")this.detonate(n);else if(n.cooldown<=0){const r=e.position.x-n.x,o=e.position.z-n.z,a=Math.hypot(r,o)||1;e.applyDamage(7,n.x,n.group.position.y,n.z),e.applyImpulse(r/a*13,1,o/a*13),n.cooldown=1}}}reset(){this.stack.length=0;for(const t of this.hazards)t.alive=!0,t.group.visible=!0,t.x=t.baseX,t.z=t.baseZ,t.cooldown=0}}const Dc=new C(0,1,0),wv=new C(0,0,1),Ue=new C,Vn=new xn;class Sv{constructor(t,{count:e=32}={}){this.scene=t,this.entries=[];const i=new $i(1,2,12,1,!0),n=new Ee(1,12,8),r=new Ze(1,.08,5,24);for(let o=0;o<e;o++){const a=new be({color:16769184,transparent:!0,opacity:0,blending:De,depthWrite:!1,toneMapped:!1,side:pe}),l=new be({color:16776688,transparent:!0,opacity:0,blending:De,depthWrite:!1,toneMapped:!1}),c=new be({color:16767392,transparent:!0,opacity:0,blending:De,depthWrite:!1,toneMapped:!1,side:pe}),h=new k(i,a),u=new k(n,l),d=new k(r,c);h.visible=u.visible=d.visible=!1,h.frustumCulled=u.frustumCulled=d.frustumCulled=!1,h.renderOrder=u.renderOrder=d.renderOrder=9,t.add(h,u,d),this.entries.push({cone:h,core:u,ring:d,coneMat:a,coreMat:l,ringMat:c,life:0,total:1,kind:0,scale:1})}this.cursor=0}_claim(){for(let e=0;e<this.entries.length;e++){const i=this.entries[(this.cursor+e)%this.entries.length];if(i.life<=0)return this.cursor=(this.cursor+e+1)%this.entries.length,i}const t=this.entries[this.cursor];return this.cursor=(this.cursor+1)%this.entries.length,t}muzzle(t,e,i,n,r,o,a=1){const l=this._claim();Ue.set(n,r,o),Ue.lengthSq()<1e-6&&Ue.set(0,0,1),Ue.normalize();const c=1.45*a,h=.27*a;return l.cone.position.set(t+Ue.x*c*.5,e+Ue.y*c*.5,i+Ue.z*c*.5),Vn.setFromUnitVectors(Dc,Ue),l.cone.quaternion.copy(Vn),l.cone.scale.set(h,c*.5,h),l.cone.visible=!0,l.coneMat.color.setHex(16769184),l.coneMat.opacity=.85,l.core.position.set(t,e,i),l.core.quaternion.identity(),l.core.scale.setScalar(.2*a),l.core.visible=!0,l.coreMat.color.setHex(16776688),l.coreMat.opacity=1,l.ring.visible=!1,l.scale=a,l.kind=0,l.life=l.total=.078,l}impact(t,e,i,n=0,r=1,o=0,a=1,l=16773037){a=Math.min(a,1.35);const c=this._claim();Ue.set(n,r,o),Ue.lengthSq()<1e-6&&Ue.set(0,1,0),Ue.normalize();const h=.24*a,u=.66*a;return c.cone.position.set(t+Ue.x*u*.4,e+Ue.y*u*.4,i+Ue.z*u*.4),Vn.setFromUnitVectors(Dc,Ue),c.cone.quaternion.copy(Vn),c.cone.scale.set(h,u*.5,h),c.cone.visible=!0,c.coneMat.color.setHex(l),c.coneMat.opacity=.8,c.core.position.set(t,e,i),c.core.quaternion.identity(),c.core.scale.setScalar(.19*a),c.core.visible=!0,c.coreMat.color.setHex(16776690),c.coreMat.opacity=1,c.ring.position.set(t,e,i),Vn.setFromUnitVectors(wv,Ue),c.ring.quaternion.copy(Vn),c.ring.scale.setScalar(.34*a),c.ring.visible=!0,c.ringMat.color.setHex(l),c.ringMat.opacity=.7,c.scale=a,c.kind=1,c.life=c.total=.13,c}update(t){for(let e=0;e<this.entries.length;e++){const i=this.entries[e];if(i.life<=0)continue;if(i.life-=t,i.life<=0){i.cone.visible=i.core.visible=i.ring.visible=!1,i.coneMat.opacity=i.coreMat.opacity=i.ringMat.opacity=0;continue}const n=1-i.life/i.total,r=1+n*(i.kind===0?.5:1.5),o=(1-n)*(1-n),a=(i.kind===0?.27:.24)*i.scale,l=(i.kind===0?.72:.33)*i.scale;i.cone.scale.set(a*r,l*r,a*r),i.coneMat.opacity=o*(i.kind===0?.85:.8),i.core.scale.setScalar((i.kind===0?.18:.19)*i.scale*(1+n*.5)),i.coreMat.opacity=o,i.ring.visible&&(i.ring.scale.setScalar((.34+n*.7)*i.scale),i.ringMat.opacity=o*.7)}}reset(){for(const t of this.entries)t.life=0,t.cone.visible=t.core.visible=t.ring.visible=!1,t.coneMat.opacity=t.coreMat.opacity=t.ringMat.opacity=0}dispose(){for(const t of this.entries)this.scene.remove(t.cone,t.core,t.ring),t.coneMat.dispose(),t.coreMat.dispose(),t.ringMat.dispose();this.entries.length=0}}const Ic={boost:16766073,shield:7858943,dual:16757578,repair:6619072};class bv{constructor(t,e){this.ctx=e,this.flash=0,this.vignette=globalThis.document?.getElementById("vignette"),this.cursor=0,this.flashes=new Sv(t,{count:32}),this.splashCore=new Gh(t,{max:768,blending:wi,soft:.07,renderOrder:7}),this.splashCore.mat.fragmentShader="varying float vAlpha;varying vec3 vColor;void main(){vec2 p=gl_PointCoord-.5;p.x*=2.8*(1.+p.y*.7);float d=length(p);if(d>.5)discard;float edge=smoothstep(.5,.36,d);float light=.77+.23*smoothstep(.3,-.2,p.x);gl_FragColor=vec4(vColor*light,edge*vAlpha);}";const i=new Ne(1,1),n=new Ze(1,.018,4,40);this.pool=Array.from({length:36},(r,o)=>{const a=new be({color:16757592,transparent:!0,opacity:0,blending:De,depthWrite:!1,toneMapped:!1}),l=new k(o%3===1?n:i,a);return l.visible=!1,t.add(l),{mesh:l,life:0,total:1,size:1,ring:o%3===1}}),this.debrisMesh=new Ke(new tl(.6),new ce({color:3689547,metalness:.6,roughness:.6}),48),this.debrisMesh.frustumCulled=!1,t.add(this.debrisMesh),this.debrisDummy=new ee,this.debris=Array.from({length:48},()=>({life:0,x:0,y:0,z:0,vx:0,vy:0,vz:0,spin:0})),this.debrisCursor=0,this.updateDebris(0),this.boostPhase=0,e.events?.on("player:damage",r=>this.damageFlash(Math.min(1,(r?.amount||10)/25))),this.spawnOptions={x:0,y:0,z:0,vx:0,vy:0,vz:0,life:1,size:1,endSize:.1,color:16777215,endColor:9689309,alpha:.45,drag:.2,gravity:-15}}shell(t,e,i,n,r,o=.6,a=!1){let l=null;for(let c=0;c<this.pool.length;c++){const h=this.pool[(this.cursor+c)%this.pool.length];if(h.ring===a&&h.life<=0){l=h,this.cursor=(this.cursor+c+1)%this.pool.length;break}}l&&(l.life=l.total=o,l.size=n,l.mesh.position.set(t,e,i),l.mesh.material.color.setHex(r),l.mesh.visible=!0,l.mesh.rotation.set(a?Math.PI/2:0,0,0),l.mesh.scale.setScalar(.1))}explosion(t,e,i,n=1){this.shell(t,e,i,3*n,16748854,.3),this.shell(t,e+.2,i,5*n,16767386,.35,!0);for(let r=0;r<6;r++){const o=this.debris[this.debrisCursor++%this.debris.length],a=r*2.399963;o.life=.65,o.x=t,o.y=e+.3,o.z=i,o.vx=Math.cos(a)*(3+r*.3)*n,o.vy=(3+r*.35)*n,o.vz=Math.sin(a)*(3+r*.3)*n,o.spin=a}this.ctx.particles?.glow?.burst(t,e,i,{count:14,speed:10*n,up:.4,life:.4,size:2*n,endSize:0,color:16755513,endColor:15024153,alpha:.8,gravity:-10}),this.ctx.particles?.smoke?.burst(t,e+1,i,{count:12,speed:3*n,up:1,life:1.1,size:2*n,endSize:4*n,color:6314323,endColor:2436656,alpha:.38,gravity:-2}),this.ctx.particles?.spark?.burst(t,e,i,{count:20,speed:15*n,up:.5,life:.55,size:.45,endSize:.05,color:16762240,gravity:-20}),e<Je(this.ctx.world?.water,t,i)+5&&this.splash(t,e,i,n*.8,38),this.ctx.audio?.explosion?.(n),this.ctx.events?.emit("camera:shake",{strength:n*.7,duration:.45})}splash(t,e,i,n=1,r=90){const o=this.spawnOptions,a=this.ctx.getPlayer?.(),l=a?.heading||0,c=Math.sin(l),h=Math.cos(l),u=Je(this.ctx.world?.water,t,i),d=t-c*1.6*n,f=i-h*1.6*n,g=Math.max(6,Math.min(64,r)),x=Math.min(1.8,n),m=a&&Math.hypot(a.position.x-t,a.position.z-i)<8?Math.max(0,a.forwardSpeed)*.95:0;for(let p=0;p<4;p++)for(let M=0;M<(p===0?g*2:g);M++){const v=M*2.399963,y=(M+.5)/(p===0?g*2:g),P=Math.cos(v),A=Math.sin(v);let T;if(o.x=d+P*n*(p===0?y:1.8),o.z=f+A*n*(p===0?y:1.8),o.y=u+.25,o.color=16777215,o.endColor=14939642,o.alpha=.95,o.drag=.16,o.gravity=-18,p===0){const L=M%2?1:-1;T=(.7+y*2.2)*n,o.x+=h*L*(1.8+y*.8)*n,o.z-=c*L*(1.8+y*.8)*n,o.y+=y*2*n,o.vy=(3+y*17)*n,o.life=1.7+y*.5,o.size=(2.7+y)*n,o.endSize=o.size*.85}else p===1?(T=(9+y*6)*n,o.vy=(3+y*5)*n,o.life=.85+y*.4,o.size=(1.2+y*.6)*n,o.endSize=o.size*.65,o.alpha=.72,o.drag=.9):p===2?(T=(3+y*5)*n,o.vy=(10+y*5)*n,o.life=2.1+y*.5,o.size=(.5+y*.65)*n,o.endSize=o.size*.5,o.alpha=.9,o.gravity=-13):(T=7*x,o.x=t+P*2*x,o.z=i+A*2*x,o.y=u+.22,o.vy=0,o.life=1.6,o.size=1.7*x,o.endSize=2.3*x,o.gravity=0,o.drag=.8,o.alpha=.6);o.vx=P*T+(p<3?c*m:0),o.vz=A*T+(p<3?h*m:0),p===0?(o.alpha=.5,this.ctx.particles?.spray?.spawn(o),M%3===0&&(o.size*=.32,o.endSize*=.24,o.alpha=.95,o.life=.8+y*.35,o.gravity=-28,this.splashCore.spawn(o))):p===3?(this.ctx.particles?.spray?.spawn(o),o.size=.3*x,o.endSize=.4*x,o.alpha=.95,this.splashCore.spawn(o)):(o.size*=.7,o.endSize*=.7,this.splashCore.spawn(o))}this.shell(d,u+.3,f,2.6*n,14942207,.18),this.shell(t,u+.2,i,8*x,14286847,1.6,!0);for(let p=0;p<5;p++)o.x=d+Math.cos(p*2.4)*n,o.y=u+n,o.z=f+Math.sin(p*2.4)*n,o.vx=0,o.vy=3*n,o.vz=0,o.life=.48,o.size=3*n,o.endSize=5*n,o.color=11986159,o.endColor=9226197,o.alpha=.1,o.gravity=0,o.drag=.2,this.ctx.particles?.glow?.spawn(o);o.drag=.2,this.ctx.world?.water?.splatFoam?.(t,i,Math.min(.8,n*.4),Math.min(14,8*n)),n>.5&&this.ctx.audio?.splash?.(n),n>1.2&&this.ctx.events?.emit("camera:shake",{strength:Math.min(1.1,n*.7),duration:.5})}impact(t,e,i,n=0,r=1,o=0,a=1){this.flashes?.impact(t,e,i,n,r,o,a,16773037),this.ctx.particles?.spark?.burst(t,e,i,{count:14,speed:13*a,up:.5,life:.45,size:.85,endSize:.05,color:16769440,gravity:-12,alpha:.95}),this.ctx.audio?.impact?.()}muzzle(t,e,i,n,r,o){this.flashes?.muzzle(t,e,i,n,r,o,1),this.ctx.particles?.glow?.burst(t,e,i,{count:2,speed:2.4,life:.07,size:.32,endSize:0,color:16767116,alpha:.7})}shieldHit(t,e,i){this.shell(t,e,i,3,6741503,.25),this.shell(t,e,i,3.8,11597311,.3,!0)}boostTrail(t,e,i,n,r,o=1){if(this.boostPhase++,this.boostPhase%3)return;const a=this.spawnOptions,l=this.boostPhase%2?1:-1,c=.8+this.boostPhase%5*.22;a.x=t-n*1.8+r*l*c,a.y=e-.2,a.z=i-r*1.8-n*l*c,a.vx=-n*3+r*l*2,a.vz=-r*3-n*l*2,a.vy=1.8,a.life=.3+this.boostPhase%4*.045,a.size=.45*o,a.endSize=.12,a.color=12446435,a.endColor=6725023,a.gravity=-8,a.alpha=.35,this.ctx.particles?.spray?.spawn(a)}pickupBurst(t,e,i,n){this.shell(t,e,i,2.5,Ic[n]||9240575,.35,!0),this.ctx.particles?.glow?.burst(t,e,i,{count:12,speed:4,up:.6,life:.45,size:.65,endSize:0,color:Ic[n]||9240575,alpha:.6,gravity:-4})}damageFlash(t=.5){this.flash=Math.max(this.flash,t)}updateDebris(t){for(let e=0;e<this.debris.length;e++){const i=this.debris[e];if(i.life=Math.max(0,i.life-t),i.life>0){i.vy-=30*t;const n=Math.exp(-t*3);i.vx*=n,i.vz*=n,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.spin+=t*6,this.debrisDummy.position.set(i.x,i.y,i.z),this.debrisDummy.rotation.set(i.spin,i.spin*.7,0),this.debrisDummy.scale.setScalar(Math.min(.3,i.life))}else this.debrisDummy.scale.setScalar(0);this.debrisDummy.updateMatrix(),this.debrisMesh.setMatrixAt(e,this.debrisDummy.matrix)}this.debrisMesh.instanceMatrix.needsUpdate=!0}update(t,e=0){this.splashCore.update(t),this.flashes?.update(t),this.updateDebris(t),this.flash=Math.max(0,this.flash-t*1.5),this.vignette&&(this.vignette.style.opacity=String(this.flash));for(const i of this.pool)if(i.life>0){i.life-=t;const n=1-Math.max(0,i.life)/i.total;i.mesh.scale.setScalar(i.size*(.2+n*.8)),i.mesh.material.opacity=(1-n)*(1-n)*(i.ring?.22:.8),i.mesh.visible=i.life>0}}reset(){this.splashCore.clear(),this.flash=0,this.boostPhase=0,this.flashes?.reset(),this.vignette&&(this.vignette.style.opacity="0");for(const t of this.pool)t.life=0,t.mesh.visible=!1;for(const t of this.debris)t.life=0;this.updateDebris(0)}}const ln=s=>Math.max(0,Math.min(1,s)),Av=s=>`${Math.floor(s/60)}:${(s%60).toFixed(2).padStart(5,"0")}`;class Tv{constructor(t){if(this.game=t,this.el={},globalThis.document)for(const e of["hud","hudcanvas","timer","score","objTitle","objSub","progfill","progticks","speedgauge","throttle","gearlbl","boostmeter","boostbar","boostcap","boostval","hullbox","hullbar","hullval","pipshield","pipdual","piprepair","powerlbl","weaponlbl","heatbar","reticle","reticlead","toasts","bigmsg","bm1","bm2","vignette","speedlines","cinema"])this.el[e]=document.getElementById(e);if(this.gauge=this.el.speedgauge?.getContext("2d"),this.canvas=this.el.hudcanvas?.getContext("2d"),this.speed=0,this.messageTime=0,this.toasts=[],this.ticks=[],this.visible=!1,this.width=0,this.height=0,this.el.progticks){this.el.progticks.replaceChildren();for(let e=0;e<9;e++){const i=document.createElement("i");i.className="progtick",i.style.left=(e+1)/9*100+"%",this.el.progticks.append(i),this.ticks.push(i)}}this.bars={};for(const e of["boostbar","hullbar","heatbar"])this.bars[e]=this.el[e]?.querySelector("i");this.reset()}text(t,e){const i=this.el[t];i&&i.textContent!==String(e)&&(i.textContent=String(e))}bar(t,e){this.bars[t]&&(this.bars[t].style.width=ln(e)*100+"%")}update(t,e={}){this.speed+=((e.speed||0)*3.6-this.speed)*(1-Math.exp(-t*8)),this.text("timer",Av(e.time||0)),this.text("score",Math.round(e.score||0).toLocaleString()),this.text("throttle",Math.round(ln(e.throttle||0)*100)+"%"),this.text("gearlbl",e.gear||(e.boostActive?"BOOST":this.speed>95?"FAST":this.speed>8?"CRUISE":"IDLE")),this.text("boostval",Math.round(ln(e.boost||0)*100)+"%"),this.text("boostcap",e.boostActive?"NITRO ACTIVE":e.boostReady?"BOOST READY":"RECHARGING"),this.el.boostmeter?.classList.toggle("ready",!!e.boostReady),this.bar("boostbar",e.boost||0);const i=e.hull01??1;this.bar("hullbar",i),this.text("hullval",Math.round(i*100)+"%"),this.el.hullbox?.classList.toggle("hurt",i<.6&&i>=.3),this.el.hullbox?.classList.toggle("critical",i<.3),this.el.pipshield?.classList.toggle("on",e.shield>0),this.el.pipdual?.classList.toggle("on",e.dual>0),this.el.piprepair?.classList.toggle("on",e.repair>0),this.text("powerlbl",e.shield>0?`SHIELD // ${Math.ceil(e.shield)}s`:e.dual>0?`TWIN SYSTEM // ${Math.ceil(e.dual)}s`:e.repair>0?"HULL RESTORED":"SYSTEMS STANDBY"),this.text("weaponlbl",this.game.weapons?.overheated?"COOLING":e.dual>0?"TWIN CANNON":"AUTO CANNON"),this.el.weaponlbl?.classList.toggle("dual",e.dual>0),this.bar("heatbar",this.game.weapons?.heat||0),this.el.progfill&&(this.el.progfill.style.width=ln((e.gateIndex||0)/(e.gateTotal||9))*100+"%");for(let n=0;n<this.ticks.length;n++)this.ticks[n].classList.toggle("done",n<(e.gateIndex||0));e.objective&&(this.text("objTitle",e.objective.title||""),this.text("objSub",e.objective.sub||"")),this.el.speedlines&&(this.el.speedlines.style.opacity=String(ln((this.speed-100)/100)*.65)),this.el.vignette&&e.damage!==void 0&&(this.el.vignette.style.opacity=String(ln(e.damage))),this.el.cinema?.classList.toggle("on",!!e.cinematics),this.messageTime=Math.max(0,this.messageTime-t),this.el.bigmsg&&(this.el.bigmsg.style.opacity=String(Math.min(1,this.messageTime*2)));for(let n=this.toasts.length-1;n>=0;n--){const r=this.toasts[n];r.life-=t,r.el.style.opacity=String(Math.min(1,r.life)),r.life<=0&&(r.el.remove(),this.toasts.splice(n,1))}this.drawGauge(e.boostActive),this.drawTarget(e.target)}drawGauge(t){const e=this.gauge;if(!e)return;e.clearRect(0,0,372,208);const i=186,n=150,r=125,o=Math.PI*.86,a=Math.PI*2.14,l=o+(a-o)*ln(this.speed/220);e.lineWidth=9,e.strokeStyle="#173f4a",e.beginPath(),e.arc(i,n,r,o,a),e.stroke(),e.strokeStyle=t?"#ffd479":"#38e1c8",e.beginPath(),e.arc(i,n,r,o,l),e.stroke();for(let c=0;c<=11;c++){const h=o+(a-o)*c/11;e.strokeStyle=c>=8?"#ffb264":"#75a6b0",e.lineWidth=c%2?2:3,e.beginPath(),e.moveTo(i+Math.cos(h)*109,n+Math.sin(h)*109),e.lineTo(i+Math.cos(h)*(c%2?101:96),n+Math.sin(h)*(c%2?101:96)),e.stroke()}e.strokeStyle="#efffff",e.lineWidth=3,e.beginPath(),e.moveTo(i+Math.cos(l)*69,n+Math.sin(l)*69),e.lineTo(i+Math.cos(l)*113,n+Math.sin(l)*113),e.stroke(),e.textAlign="center",e.fillStyle=t?"#ffd479":"#edffff",e.font="bold 66px Arial",e.fillText(String(Math.round(this.speed)).padStart(3,"0"),i,150),e.fillStyle="#8fb4c4",e.font="18px Arial",e.fillText("KM / H",i,182)}drawTarget(t){const e=this.canvas,i=globalThis.innerWidth||1920,n=globalThis.innerHeight||1080;if(e&&((this.width!==i||this.height!==n)&&(this.width=i,this.height=n,e.canvas.width=i,e.canvas.height=n),e.clearRect(0,0,i,n)),this.el.reticle?.classList.toggle("on",!!t&&t.onScreen!==!1),this.el.reticle?.classList.toggle("locked",!!t?.locked),!t)return;const r=t.screenX??i*.5,o=t.screenY??n*.5;if(t.onScreen!==!1)this.el.reticle&&(this.el.reticle.style.left=r+"px",this.el.reticle.style.top=o+"px"),this.text("reticlead",`${Math.round(t.dist||0)} M // LOCK`);else if(e){const a=r-i/2,l=o-n/2,c=Math.atan2(l,a),h=Math.min((i*.5-55)/Math.max(1,Math.abs(a)),(n*.5-110)/Math.max(1,Math.abs(l))),u=i/2+a*h,d=n/2+l*h;e.save(),e.translate(u,d),e.rotate(c),e.fillStyle="#ffd479",e.beginPath(),e.moveTo(13,0),e.lineTo(-8,-7),e.lineTo(-4,0),e.lineTo(-8,7),e.closePath(),e.fill(),e.restore()}}toast(t,e="aqua"){if(!this.el.toasts||this.toasts[0]?.kind==="danger"&&e!=="danger")return;for(const r of this.toasts)r.el.remove();this.toasts.length=0;const n=document.createElement("div");n.className="toast "+(["aqua","gold","danger"].includes(e)?e:"aqua"),n.textContent=t,this.el.toasts.append(n),this.toasts.push({el:n,kind:e,life:1.8})}bigMessage(t,e="",i=3){this.text("bm1",t),this.text("bm2",e),this.messageTime=Math.min(i,2),this.el.bigmsg?.classList.add("anim")}setVisible(t){this.visible=!!t,this.el.hud?.classList.toggle("on",this.visible)}reset(){this.speed=0,this.messageTime=0;for(const t of this.toasts)t.el.remove();this.toasts.length=0,this.text("bm1",""),this.text("bm2",""),this.el.reticle?.classList.remove("on")}}const zc=s=>`${Math.floor((s||0)/60)}:${((s||0)%60).toFixed(2).padStart(5,"0")}`;class Ev{constructor(t){if(this.game=t,this.el={},!globalThis.document)return;for(const i of document.querySelectorAll("[id]"))this.el[i.id]=i;const e={btnStart:"onStart",btnAttract:"onAttract",btnSig:"onSignature",btnResume:"onResume",btnRestart2:"onRestart",btnQuit:"onMenu",btnAgain:"onRestart",btnMenu2:"onMenu",btnRetry:"onRestart",btnMenu3:"onMenu"};for(const[i,n]of Object.entries(e))this.el[i]?.addEventListener("click",()=>{t.ctx?.audio?.uiClick?.(),this[n]?.()});this.el.btnSettings?.addEventListener("click",()=>{this.el.settingsPanel?.classList.toggle("hidden"),t.ctx?.audio?.uiClick?.()});for(const i of["segQuality","segQuality2"])for(const n of this.el[i]?.querySelectorAll("button")||[])n.addEventListener("click",()=>{this.setQuality(n.dataset.v),this.onQuality?.(n.dataset.v)});for(const i of this.el.segAuto?.querySelectorAll("button")||[])i.addEventListener("click",()=>{const n=i.dataset.v==="on";this.setAutoplay(n),this.onAutoplay?.(n)});for(const i of["","2"])this.el["rngVol"+i]?.addEventListener("input",n=>{const r=Number(n.target.value)/100;this.setVolume(r),this.onVolume?.(r)}),this.el["rngShake"+i]?.addEventListener("input",n=>{const r=Number(n.target.value)/100;this.setShake(r),this.onShake?.(r)});this.el.rngSeed?.addEventListener("input",i=>{const n=Number(i.target.value);this.setSeed(n),this.onSeed?.(n)}),this.setQuality(t.ctx?.quality||"high"),this.setVolume(.7),this.setShake(1),this.setSeed(t.ctx?.seed||1),this.setAutoplay(!1)}toggle(t,e){this.el[t]?.classList.toggle("hidden",!e)}hideResults(){this.toggle("finished",!1),this.toggle("failed",!1)}showTitle(){this.hideResults(),this.hidePause(),this.toggle("title",!0),this.el.btnStart?.focus()}hideTitle(){this.toggle("title",!1)}showPause(){this.toggle("pause",!0),this.el.btnResume?.focus()}hidePause(){this.toggle("pause",!1)}stats(t,e){const i=this.el[t];if(i){i.replaceChildren();for(const[n,r]of[["RUN TIME",zc(e.time)],["SCORE",Math.round(e.score||0).toLocaleString()],["GATES",`${e.gates??0} / 9`],["HOSTILES DOWN",e.kills??0]]){const o=document.createElement("div");o.className="stat";const a=document.createElement("div"),l=document.createElement("div");a.className="k",l.className="v",a.textContent=n,l.textContent=String(r),o.append(a,l),i.append(o)}}}showFinish(t={}){this.hideTitle(),this.hidePause(),this.hideResults();const e=t.rank||((t.kills||0)>=8?"S":(t.kills||0)>=4?"A":"B");if(this.el.finTitle&&(this.el.finTitle.textContent=`RANK ${e} // CLEARANCE GRANTED`),this.el.finEyebrow&&(this.el.finEyebrow.textContent="BEACON REACHED // TRIAL COMPLETE"),this.stats("finStats",t),this.el.finTable){this.el.finTable.replaceChildren();const i=document.createElement("table");i.className="res";for(const[n,r]of[["Operation","Reef Assault"],["Seed",this.seed],["Best time",typeof t.best=="number"?zc(t.best):"First clearance"],["Result","All checkpoints secured"]]){const o=document.createElement("tr"),a=document.createElement("td"),l=document.createElement("td");a.textContent=n,l.textContent=String(r),o.append(a,l),i.append(o)}this.el.finTable.append(i)}this.toggle("finished",!0),this.el.btnAgain?.focus()}showFail(t={}){this.hideTitle(),this.hidePause(),this.hideResults(),this.el.failTitle&&(this.el.failTitle.textContent=t.reason||"HULL BREACH"),this.el.failHint&&(this.el.failHint.textContent=t.hint||"TIP // Shoot mines to clear a path. Collect cyan shields before the channel and keep moving when enemy guns glow."),this.stats("failStats",t),this.toggle("failed",!0),this.el.btnRetry?.focus()}setQuality(t){this.quality=t;for(const e of["segQuality","segQuality2"])for(const i of this.el[e]?.querySelectorAll("button")||[])i.setAttribute("aria-pressed",String(i.dataset.v===t))}setVolume(t){this.volume=Math.max(0,Math.min(1,t));for(const e of["","2"])this.el["rngVol"+e]&&(this.el["rngVol"+e].value=String(Math.round(this.volume*100))),this.el["volVal"+e]&&(this.el["volVal"+e].textContent=Math.round(this.volume*100)+"%")}setShake(t){this.shake=Math.max(0,Math.min(1.5,t));for(const e of["","2"])this.el["rngShake"+e]&&(this.el["rngShake"+e].value=String(Math.round(this.shake*100))),this.el["shakeVal"+e]&&(this.el["shakeVal"+e].textContent=Math.round(this.shake*100)+"%")}setSeed(t){this.seed=t,this.el.rngSeed&&(this.el.rngSeed.value=String(t)),this.el.seedVal&&(this.el.seedVal.textContent=String(t))}setAutoplay(t){this.autoplay=!!t;for(const e of this.el.segAuto?.querySelectorAll("button")||[])e.setAttribute("aria-pressed",String(e.dataset.v==="on"===this.autoplay))}setLoadProgress(t,e){const i=this.el.loadbar?.querySelector("i");i&&(i.style.width=Math.max(0,Math.min(100,t*100))+"%"),e&&this.el.loadmsg&&(this.el.loadmsg.textContent=e)}hideLoading(){this.el.loading?.classList.add("done")}}const Cv=()=>new Promise(s=>setTimeout(s,0)),_s={low:{dpr:1,shadows:!1,shadowMap:1024,bloom:!1,smaa:!1,samples:0,particles:.45,water:"low"},medium:{dpr:1.25,shadows:!0,shadowMap:1536,bloom:!0,smaa:!1,samples:2,particles:.75,water:"medium"},high:{dpr:2,shadows:!0,shadowMap:2048,bloom:!0,smaa:!0,samples:4,particles:1,water:"high"}},Yh={start:{d:26,speed:20},reef:{d:470,speed:24},arch:{d:760,speed:28},combat1:{d:1010,speed:26},channel:{d:1240,speed:24},mines:{d:1420,speed:26},cave:{d:Vr-70,speed:32},ramp:{d:Vr+200,speed:36},basin:{d:Rr+30,speed:30},lip:{d:ci-62,speed:40},landing:{d:ci+118,speed:24},combat2:{d:ci+210,speed:26},beacon:{d:yc-210,speed:30},finish:{d:yc-30,speed:30}};class Rv{constructor(t){fl(this,"_loop",()=>{this._raf=requestAnimationFrame(this._loop);const t=performance.now();let e=(t-(this._last||t))/1e3;this._last=t,e>1/15&&(e=1/15),e<=0&&(e=1/60),this._fpsAcc+=e,this._fpsFrames++,this._fpsAcc>.5&&(this.fps=this._fpsFrames/this._fpsAcc,this._fpsAcc=0,this._fpsFrames=0);try{this.update(e)}catch(i){this._errOnce||(this._errOnce=!0,console.error("[TIDEBREAKER] update error",i))}this.input.endFrame()});this.container=t||document.getElementById("app"),this.state="title",this.quality="high",this.seedIndex=1,this.seed=1,this.score=0,this.runTime=0,this.kills=0,this.gatesPassed=0,this.airTimeTotal=0,this.bestTime=null,this.hudVisible=!0,this.autoplay=!1,this.time=0,this.frameCount=0,this.fps=60,this._fpsAcc=0,this._fpsFrames=0,this._paused=!1,this._sigStage=0,this._lastD=0,this._shakeScale=1,this._volume=.7,this._finishAt=null,this._titleOrbit=0}async init(t=()=>{}){const e=async(i,n)=>{t(i,n),await Cv()};await e(.04,"Igniting renderer"),this._setupRenderer(),await e(.12,"Seeding the archipelago"),this.rng=Wr(this.seed),this.events=new Fx,this.scene=new Or,this.camera=new ai(64,innerWidth/innerHeight,.22,7e3),this.input=new Nx,this.ctx={scene:this.scene,camera:this.camera,renderer:this.renderer,route:Dt,rng:this.rng,seed:this.seed,quality:this.quality,particles:null,audio:ye,events:this.events,time:0,getPlayer:()=>this.player,world:null,game:this},await e(.22,"Mixing water and spray"),this._setupParticles(),await e(.34,"Raising islands"),this.world=new $x(this.scene,this.ctx);try{this.world.build()}catch(i){if(console.error("[TIDEBREAKER] world build failed — booting with a partial world",i),this._worldBuildError=i,!this.world.water){const n=new Vh(this.scene,{...this.ctx,world:this.world});n.setQuality?.(this.ctx.quality),this.world.water=n}}return this.ctx.world=this.world,this._ensureLights(),Hx(this.renderer,this.scene,{sunDir:this.world.sunDir||new C(-.42,.52,-.74),intensity:this.quality==="low"?.6:.9}),await e(.52,"Launching the Skimmer"),this.player=new zx(this.scene,this.ctx),await e(.62,"Arming hostiles"),this.effects=new bv(this.scene,this.ctx),this.ctx.effects=this.effects,this.enemies=new ov(this.scene,this.ctx),this.ctx.enemies=this.enemies,this.weapons=new av(this.scene,this.ctx),this.ctx.weapons=this.weapons,this.enemies.build(),await e(.74,"Floating the pickups"),this.pickups=new dv(this.scene,this.ctx),this.ctx.pickups=this.pickups,this.pickups.build(),this.hazards=new yv(this.scene,this.ctx),this.ctx.hazards=this.hazards,this.hazards.build(),await e(.86,"Rigging checkpoint gates"),this.gates=new mv(this.scene,this.ctx),this.ctx.gates=this.gates,this.gates.build(),await e(.93,"Calibrating instruments"),this.rig=new Ux(this.camera,this.ctx),this.rig.setAttractStops(this.world.getAttractStops?this.world.getAttractStops():[]),this.hud=new Tv(this),this.ctx.hud=this.hud,this.screens=new Ev(this),this.ctx.screens=this.screens,this._wireEvents(),this._setupPost(),await e(1,"Ready"),this.player.reset(Wt.startDock.x,Wt.startDock.z,Dt.headingAt(26)),this.rig.snapTo(this.player),this._applyQuality(this.quality),this.screens.setLoadProgress(1,"Ready"),this.screens.hideLoading(),this}_setupRenderer(){const t=new cg({antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio||1,_s[this.quality].dpr)),t.setSize(innerWidth,innerHeight),t.outputColorSpace=mi,t.toneMapping=Ba,t.toneMappingExposure=1.06,t.shadowMap.enabled=!0,t.shadowMap.type=Bc,t.setClearColor(666426,1),t.domElement.style.display="block",t.domElement.style.width="100%",t.domElement.style.height="100%",t.domElement.style.touchAction="none",this.container.appendChild(t.domElement),t.info.autoReset=!1,this.renderer=t,addEventListener("resize",()=>this._resize()),addEventListener("orientationchange",()=>setTimeout(()=>this._resize(),220))}_ensureLights(){let t=0;if(this.scene.traverse(e=>{e.isLight&&t++}),!(t>=2)&&!this.scene.getObjectByName("__fallbackSun")){const e=new Ih(16773336,3);e.name="__fallbackSun",e.position.set(-320,280,-160),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);const i=e.shadow.camera;i.near=1,i.far=700,i.left=-70,i.right=70,i.top=70,i.bottom=-70,this.scene.add(e,e.target),this.scene.add(new Dh(13496319,1928054,1.3)),this.scene.add(new jg(10471124,.22)),this._fallbackSun=e}}_setupParticles(){const t=_s[this.quality].particles,e=(i,n)=>new Gh(this.scene,{max:Math.round(i*t),...n});this.ctx.particles={spray:e(4200,{blending:wi,glow:0,soft:.55,renderOrder:6}),smoke:e(1100,{blending:wi,soft:.92,glow:0,renderOrder:5}),glow:e(1800,{blending:De,glow:.75,soft:.3,renderOrder:8}),spark:e(1400,{blending:De,glow:.95,soft:.26,renderOrder:8})}}_setupPost(){const t=_s[this.quality],e=new Ve(innerWidth,innerHeight,{type:si,samples:t.samples,colorSpace:Fi}),i=new ex(this.renderer,e);i.setPixelRatio(this.renderer.getPixelRatio()),i.setSize(innerWidth,innerHeight),i.addPass(new ix(this.scene,this.camera));const n=new es(new Q(innerWidth,innerHeight),.46,.62,.94);if(n.enabled=t.bloom,i.addPass(n),this.bloom=n,t.smaa){const o=new ox(innerWidth,innerHeight);o.enabled=!0,i.addPass(o),this.smaa=o}const r=new rx;i.addPass(r),this.composer=i,this.composerEnabled=this.quality!=="low"}_wireEvents(){const t=this.events;t.on("player:died",()=>this._fail("Hull destroyed")),t.on("gate:passed",({index:e,name:i})=>{this.gatesPassed=e+1,this.addScore(250,"CHECKPOINT"),e>=pi.length-1&&this._finish()}),t.on("enemy:killed",()=>{this.kills++,this.addScore(120,null)}),t.on("pickup:collected",()=>this.addScore(40,null)),t.on("camera:shake",({strength:e=.6,duration:i=.3}={})=>{this.rig?.addShake((e||.6)*(i>.5?1.25:1))}),t.on("notice",({text:e,kind:i})=>this.hud?.toast(e,i||"aqua")),t.on("signature:cave",()=>{this.hud?.bigMessage("SEA CAVE","Hold the line — lights out",2.2)}),t.on("signature:launch",()=>{this.hud?.bigMessage("AIRBORNE","Ride it out",1.6)})}_applyQuality(t,e=!1){const i=_s[t]||_s.high;!e&&this._qualityApplied===t&&this.renderer||(this._qualityApplied=t,this.quality=t,this.ctx.quality=t,this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,i.dpr)),this.renderer.shadowMap.enabled=i.shadows,this.bloom&&(this.bloom.enabled=i.bloom),this.smaa&&(this.smaa.enabled=i.smaa),this.composer&&(this.composerEnabled=t!=="low"),this.world?.setQuality?.(i.water),this.world?.water?.setQuality?.(i.water),this.scene.traverse(n=>{if(n.isLight&&n.castShadow&&n.shadow){const r=n.shadow.mapSize;r.x!==i.shadowMap&&(r.set(i.shadowMap,i.shadowMap),n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null))}}),this._resize())}setQuality(t,e){this._applyQuality(t,e)}_resize(){const t=innerWidth,e=innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer&&(this.composer.setSize(t,e),this.composer.setPixelRatio(this.renderer.getPixelRatio())),this.bloom&&this.bloom.setSize(t,e),this.smaa&&this.smaa.setSize(t,e)}setSeed(t){this.seedIndex=t,this.seed=1e3+t*7919,this.rng=Wr(this.seed),this.ctx&&(this.ctx.seed=this.seed,this.ctx.rng=this.rng)}addScore(t,e){this.score+=t,e&&this.hud?.toast(`+${t} ${e}`,"gold")}_hideOverlays(){const t=this.screens;if(t){if(typeof t.hideResults=="function"){t.hideResults();return}t.hideFinish?.(),t.hideFail?.()}}startRun(t=!1){!this.player||!this.rig||this.state==="playing"&&!t||(ye.unlock(),this.resetRun(),this.state="playing",document.body.classList.add("playing"),this.screens.hideTitle(),this.screens.hidePause(),this._hideOverlays(),this.hud.setVisible(this.hudVisible),this.rig.attract=!1,ye.horn())}resetRun(){if(this.player){this.time=0,this.ctx.time=0,this._flashAmt=0,this._apDodgeUntil=0,this._apDodgeSide=0,this.score=0,this.runTime=0,this.kills=0,this.gatesPassed=0,this.airTimeTotal=0,this._sigStage=0,this._lastD=0,this._finishAt=null,this.setSeed(this.seedIndex),this.world?.reset?.(),this.world?.water?.reset?.(),this.player.reset(Wt.startDock.x,Wt.startDock.z,Dt.headingAt(26)),this.enemies?.reset?.(),this.weapons?.clearProjectiles?.(),this.pickups?.reset?.(),this.hazards?.reset?.(),this.gates?.reset?.(),this.effects?.reset?.(),this.hud?.reset?.();for(const t in this.ctx.particles)this.ctx.particles[t].clear();this.rig.attract=!1,this.rig.snapTo(this.player),this.events.emit("game:start",{seed:this.seed})}}restart(){this.startRun(!0)}toMenu(){this.state="title",document.body.classList.remove("playing"),this.rig.attract=!1,this.screens.showTitle(),this.screens.hidePause(),this._hideOverlays(),this.hud.setVisible(!1),ye.stopEngine()}togglePause(t){const e=t!==void 0?t:this.state==="playing";e&&this.state==="playing"?(this.state="paused",document.body.classList.remove("playing"),this.screens.showPause(),ye.setEngine(0,0)):!e&&this.state==="paused"&&(this.state="playing",document.body.classList.add("playing"),this.screens.hidePause())}toggleHud(t){return this.hudVisible=t!==void 0?t:!this.hudVisible,this.hud.setVisible(this.hudVisible&&this.state==="playing"),this.hudVisible}setAutoplay(t){this.autoplay=!!t,this.autoplay&&this.state==="title"&&this.startRun()}startAttract(){ye.unlock(),this.resetRun(),this.state="attract",this.autoplay=!0,document.body.classList.add("playing"),this.screens.hideTitle(),this.screens.hidePause(),this._hideOverlays(),this.hud.setVisible(!1),this.rig.attract=!0,this.rig.setAttractStops(this.world.getAttractStops?this.world.getAttractStops():[]),document.getElementById("cinema")?.classList.add("on")}stopAttract(){this.autoplay=!1,this.rig.attract=!1,document.getElementById("cinema")?.classList.remove("on"),this.toMenu()}_finish(){if(this.state!=="playing")return;this.state="finished",this._finishAt=this.runTime,document.body.classList.remove("playing"),ye.win();const t=Math.max(0,Math.round((260-this.runTime)*12));this.score+=t+Math.round(this.airTimeTotal*60),(this.bestTime===null||this.runTime<this.bestTime)&&(this.bestTime=this.runTime),this.screens.showFinish({time:this.runTime,score:this.score,gates:this.gatesPassed,total:pi.length,kills:this.kills,best:this.bestTime,bonus:t,seed:this.seedIndex}),this.events.emit("run:finish",{time:this.runTime,score:this.score})}_fail(t){if(this.state!=="playing")return;this.state="failed",document.body.classList.remove("playing"),ye.lose();const e=this.effects;e&&typeof e.explosion=="function"&&e.explosion(this.player.position.x,this.player.position.y+1,this.player.position.z,2.6),this.rig.addShake(1.8),this.screens.showFail({time:this.runTime,score:this.score,gates:this.gatesPassed,total:pi.length,kills:this.kills,reason:t||"Hull destroyed",hint:"Tip: pickups respawn — grab the shield drone before the mine channel and the repair crate after the falls."}),this.events.emit("run:fail",{reason:t})}_screenFlash(t=.4,e=3.2){this._flashAmt=Math.max(this._flashAmt||0,t),this._flashDecay=e,this._flashEl||(this._flashEl=document.getElementById("flash")),this._flashEl&&(this._flashEl.style.transition="none",this._flashEl.style.opacity=String(this._flashAmt*.55))}_tickFlash(t){this._flashAmt&&(this._flashAmt=Math.max(0,this._flashAmt-t*(this._flashDecay||3.2)),this._flashEl&&(this._flashEl.style.opacity=String(this._flashAmt*.55)),this._flashAmt===0&&this._flashEl&&(this._flashEl.style.opacity="0"))}skipTo(t){const e=Yh[t];if(!e)return!1;this.state!=="playing"&&this.state!=="attract"&&(ye.unlock(),this.resetRun(),this.state="playing",document.body.classList.add("playing"),this.screens.hideTitle(),this._hideOverlays(),this.screens.hidePause(),this.hud.setVisible(this.hudVisible),this.rig.attract=!1);const i=Dt.pointAt(e.d,{}),n=Dt.headingAt(e.d);this.player.reset(i.x,i.z,n),this.player.position.y=is(i.x,i.z)+.5,this.player.velocity.set(Math.sin(n)*e.speed,0,Math.cos(n)*e.speed),this.player._throttleSmooth=1,this.player.invuln=2.5;let r=0;for(;r<pi.length&&pi[r].d<e.d;)r++;return this.gates&&(this.gates.currentIndex=r,this.gates.setTargetHighlight?.(r)),this.gatesPassed=r,e.d>ci+40?this._sigStage=3:e.d>Rr?this._sigStage=2:e.d>Vr?this._sigStage=1:this._sigStage=0,this._lastD=e.d,this.rig.snapTo(this.player),this.hud?.toast(`Filming point: ${t}`,"aqua"),!0}start(){this._frozen=!1,this._loop()}freeze(t=!0){return t?(cancelAnimationFrame(this._raf),this._raf=null,this._frozen=!0):this._frozen&&(this._frozen=!1,this._raf||this._loop()),this._frozen}renderOnce(t=0){const e=this._skipRender;this._skipRender=!1,this.update(t),this._skipRender=e}update(t){this.renderer&&this.renderer.info.reset(),this.frameCount++;const e=this.state==="playing"||this.state==="attract";this.state!=="paused"&&(this.time+=t),this.ctx.time=this.time;const i=this.input;i.hit("KeyH")&&this.toggleHud(),i.hit("KeyR")&&(this.state==="playing"||this.state==="paused"||this.state==="finished"||this.state==="failed")&&this.startRun(!0),i.hit("KeyC")&&!this.rig.attract&&this.hud?.toast(`Camera: ${this.rig.cycleMode().toUpperCase()}`,"aqua"),(i.hit("KeyP")||i.hit("Escape"))&&(this.state==="playing"||this.state==="paused")&&this.togglePause(),this.state==="title"&&(i.hit("Enter")||i.hit("Space"))&&this.startRun(),(this.state==="finished"||this.state==="failed")&&i.hit("Enter")&&this.startRun();let n;this.autoplay&&(e||this.state==="title")?n=this._autopilot():e?n=i.read():n={throttle:0,steer:0,boost:!1,fire:!1,drift:!1,brake:!1},e||(n.throttle=0);const r=typeof window<"u"&&window.__TIDAL&&window.__TIDAL._forced;if(r&&e&&(n={...n,...r}),this.state==="playing"&&(this.runTime+=t,is(this.player.position.x,this.player.position.z)<.5&&(this.airTimeTotal+=this.player.airborne?t:0)),this.state!=="paused"){this.player.update(t,n,this.time),this.enemies?.update?.(t,this.player,this.time),this.weapons?.update?.(t,this.player,this.enemies,{read:()=>n,pressed:new Set,hit:()=>!1},this.time),this.pickups?.update?.(t,this.player,this.time),this.hazards?.update?.(t,this.player,this.time),this.gates?.update?.(t,this.player,this.time),this.effects?.update?.(t,this.time),this.world?.update?.(t,this.time,this.player.position,this.camera);for(const o in this.ctx.particles)this.ctx.particles[o].update(t)}this.rig&&this.rig.routeD!==void 0&&(this.rig.routeD=this._routeD||0),this.state==="title"?this._titleCamera(t):this.rig.update(t,this.player,this.time),e&&this._signature(t),this.state==="playing"&&this._checkProgress(),this._updateAudio(t),this._tickFlash(t),this.hud&&this.hud.update(t,this._snapshot()),this._fallbackSun&&(this._fallbackSun.position.set(this.player.position.x-260,300,this.player.position.z-140),this._fallbackSun.target.position.copy(this.player.position),this._fallbackSun.target.updateMatrixWorld()),!this._skipRender&&(this.composer&&this.composerEnabled?this.composer.render(t):this.renderer.render(this.scene,this.camera))}simulate(t,e=1/60){const i=Math.max(1,Math.min(3e4,Math.round(t/e))),n=this._skipRender;this._skipRender=!0;let r=0;for(let o=0;o<i&&(this.update(e),this.input.endFrame(),r++,!(this.state==="finished"||this.state==="failed"));o++);return this._skipRender=n,r}trace(t,e=1/60,i=6){const n=[],r=Math.max(1,Math.min(3e4,Math.round(t/e))),o=this._skipRender;this._skipRender=!0;const a=this.player;for(let l=0;l<r&&(this.update(e),this.input.endFrame(),l%i===0&&n.push({t:+this.runTime.toFixed(2),d:+Dt.nearestOnRoute(a.position.x,a.position.z).d.toFixed(0),x:+a.position.x.toFixed(1),y:+a.position.y.toFixed(2),z:+a.position.z.toFixed(1),air:a.airborne?1:0,sp:+a.speed.toFixed(1),vy:+a.velocity.y.toFixed(2),hp:Math.round(a.hp),sig:this._sigStage}),!(this.state==="finished"||this.state==="failed"));l++);return this._skipRender=o,n}_titleCamera(t){this._titleOrbit+=t*.085;const e=this.player,i=13.5+Math.sin(this._titleOrbit*.7)*1.6,n=this._titleOrbit;this.camera.position.set(e.position.x+Math.sin(n)*i,e.position.y+3.4+Math.sin(this._titleOrbit*.9)*.7,e.position.z+Math.cos(n)*i),this.camera.up.set(0,1,0),this.camera.lookAt(e.position.x,e.position.y+.9,e.position.z),Math.abs(this.camera.fov-44)>.01&&(this.camera.fov=44,this.camera.updateProjectionMatrix()),this.rig.pos.copy(this.camera.position),this.rig.look.copy(e.position),this.rig.fov=44}_signature(t){const e=this.player,n=Dt.nearestOnRoute(e.position.x,e.position.z).d;this._routeD=n,this._sigStage===0&&n>Vr-12&&n<Rr&&(this._sigStage=1,this.events.emit("signature:cave",{}),ye.duckMusic(.22,.6),this._screenFlash(.1)),this._sigStage===1&&n>Rr+8&&(this._sigStage=2,this._screenFlash(.55)),this._sigStage===2&&n>ci-4&&n<ci+34&&(this._sigStage=3,this.events.emit("signature:launch",{}),this.rig.addShake(.32),ye.boost()),this._sigStage===3&&!e.airborne&&n>ci&&(this._sigStage=4,this.events.emit("signature:landed",{d:n}),ye.duckMusic(.6,.8)),this._lastD=n}_checkProgress(){const t=this.player;if(t.position.y<-40){this._fail("Lost at sea");return}if(!Number.isFinite(t.position.x)||!Number.isFinite(t.position.y)){this._fail("Navigation failure");return}this.player.hp<=0&&this.state==="playing"&&this._fail("Hull destroyed"),this.runTime>900&&this._fail("Out of time")}_updateAudio(t){if(!ye.ready)return;const e=this.player,i=ge(e.speed/34),n=ge(i*.9+(e.boostActive?.25:0))*(this.state==="playing"?1:.35),r=Dt.caveParam(e.position.x,e.position.z)>=0;ye.setEngine(n,ge(e._throttleSmooth),{inCave:r,submerged:e.submerged}),ye.setAmbience({level:this.state==="playing"||this.state==="attract"?1:.45,inCave:r,underwater:e.submerged,intensity:i});const o=this.enemies?.activeCount?ge(this.enemies.activeCount/6):0;ye.setMusicIntensity(ge(.25+i*.45+o*.4))}_snapshot(){const t=this.player,e=this._projectTarget(),i=Dt.nearestOnRoute(t.position.x,t.position.z),n=pi[Math.min(this.gates?.currentIndex??0,pi.length-1)],r=t.boostActive?"BOOST":t.speed>24?"FAST":t.speed>6?"CRUISE":"IDLE";return{speed:t.speed,forwardSpeed:t.forwardSpeed,throttle:t._throttleSmooth,gear:r,boost:t.boost,boostReady:t.boostReady,boostActive:t.boostActive,hull01:t.hp/t.maxHp,hp:t.hp,maxHp:t.maxHp,shield:t.shield,dual:t.dual,repair:0,time:this.runTime,score:this.score,gateIndex:this.gates?.currentIndex??0,gateTotal:pi.length,objective:{title:n?n.name:"Finish",sub:n?`${n.sub} — checkpoint ${(this.gates?.currentIndex??0)+1} / ${pi.length}`:""},target:e,damage:ge(t.hitFlash),airborne:t.airborne,progress:ge(i.d/Dt.length),gateDistances:pi.map(o=>o.d/Dt.length),gatesPassed:this.gatesPassed,state:this.state}}_projectTarget(){const e=this.weapons?.currentTarget?.enemy;if(!e||!e.alive)return null;const i=e.position,n=this._projV||(this._projV=new C);n.copy(i).project(this.camera);const r=n.z<1&&n.x>-1&&n.x<1&&n.y>-1&&n.y<1,o=i.x-this.player.position.x,a=i.z-this.player.position.z;return{screenX:(n.x*.5+.5)*innerWidth,screenY:(-n.y*.5+.5)*innerHeight,dist:Math.hypot(o,a),locked:!0,onScreen:r,hp01:e.maxHp?e.hp/e.maxHp:1,kind:e.kind}}_autopilot(){const t=this.player,e=Dt.nearestOnRoute(t.position.x,t.position.z),i=42+t.speed*.62,n=Dt.pointAt(e.d+i,{});let r=Math.atan2(n.x-t.position.x,n.z-t.position.z);const o=Math.sin(t.heading),a=Math.cos(t.heading),l=Math.cos(t.heading),c=-Math.sin(t.heading),h=this.world?.colliders;if(h&&h.length)for(let x=0;x<h.length;x++){const m=h[x],p=m.x-t.position.x,M=m.z-t.position.z,v=p*o+M*a;if(v<4||v>48)continue;const y=p*l+M*c;if(!(Math.abs(y)>m.r+9)){r+=(y>0?-1:1)*(1-v/48)*.75;break}}const u=this.hazards?.hazards;if(u&&u.length){(this._apDodgeUntil===void 0||this.runTime>this._apDodgeUntil)&&(this._apDodgeSide=0);for(let x=0;x<u.length;x++){const m=u[x];if(!m.alive)continue;const p=m.x-t.position.x,M=m.z-t.position.z,v=p*o+M*a;if(v<6||v>62)continue;const y=p*l+M*c;if(Math.abs(y)>m.r+11)continue;this._apDodgeSide||(this._apDodgeSide=y>0?-1:1);const P=(1-v/62)*.95;r+=this._apDodgeSide*P,this._apDodgeUntil=this.runTime+1.1;break}}let d=Uh(r-t.heading);const f=xi(-d*2,-1,1),g=Math.abs(d)<.1;return{throttle:1,steer:f,boost:g&&t.boost>.3&&t.speed>16,fire:!!this.weapons?.currentTarget?.enemy?.alive,drift:!1,brake:!1}}perf(){const t=this.renderer.info;return{fps:Math.round(this.fps*10)/10,calls:t.render.calls,triangles:t.render.triangles,programs:t.programs?t.programs.length:0,geometries:t.memory.geometries,textures:t.memory.textures,particles:Object.values(this.ctx.particles).reduce((e,i)=>e+(i.liveCount||0),0),state:this.state,worldBuildError:this._worldBuildError?String(this._worldBuildError.message||this._worldBuildError):null,enemies:this.enemies?.activeCount??0,routeD:Dt.nearestOnRoute(this.player.position.x,this.player.position.z).d}}dispose(){cancelAnimationFrame(this._raf),this.player?.dispose?.(),this.world?.dispose?.(),this.renderer?.dispose()}}const Uc=document.querySelector("#loadbar > i"),Mr=document.getElementById("loadmsg"),gt=new Rv(document.getElementById("app"));window.game=gt;function Pv(){const s=gt.screens;s&&(s.onStart=()=>{ye.unlock(),gt.startRun()},s.onAttract=()=>{ye.unlock(),gt.startAttract()},s.onSignature=()=>{ye.unlock(),gt.skipTo("cave")},s.onRestart=()=>gt.startRun(),s.onMenu=()=>gt.toMenu(),s.onResume=()=>gt.togglePause(!1),s.onQuality=t=>gt.setQuality(t),s.onVolume=t=>{gt._volume=xi(t,0,1),ye.setVolume(gt._volume)},s.onShake=t=>gt.rig?.setShakeScale(Math.max(0,t)),s.onSeed=t=>gt.setSeed(t),s.onAutoplay=t=>gt.setAutoplay(t))}const qi=new URLSearchParams(location.search),Nc=qi.get("quality"),Fc=parseInt(qi.get("seed")||"1",10),Pr=["low","medium","high"].includes(Nc)?Nc:"high",Fa=Number.isFinite(Fc)?Math.max(1,Math.min(12,Fc)):1;gt.setSeed(Fa);gt.quality=Pr;gt.init((s,t)=>{Uc&&(Uc.style.width=`${Math.round(s*100)}%`),Mr&&t&&(Mr.textContent=t)}).then(()=>{Pv(),gt.setQuality(Pr),gt.screens.setQuality(Pr),gt.screens.setSeed(Fa),gt.screens.showTitle(),gt.hud.setVisible(!1),gt.start(),window.__TIDAL_READY=!0;try{window.__TIDAL_BOOT=Number(sessionStorage.getItem("tidal_boot")||"0")+1,sessionStorage.setItem("tidal_boot",String(window.__TIDAL_BOOT))}catch{window.__TIDAL_BOOT=0}const s=qi.get("skip");s?gt.skipTo(s):qi.get("auto")==="1"||qi.get("attract")==="1"?qi.get("attract")==="1"?gt.startAttract():(gt.startRun(),gt.setAutoplay(!0)):qi.get("play")==="1"&&gt.startRun(),qi.get("hud")==="0"&&gt.toggleHud(!1),window.__TIDAL_URL={quality:Pr,seed:Fa,skip:s||null}}).catch(s=>{console.error("[TIDEBREAKER] init failed",s),Mr&&(Mr.textContent="Init failed — see console"),window.__TIDAL_ERROR=String(s&&s.stack||s)});window.__TIDAL={game:gt,get state(){return gt.state},startRun:()=>gt.startRun(!0),restart:()=>gt.startRun(!0),menu:()=>gt.toMenu(),pause:s=>gt.togglePause(s),attract:s=>s===!1?gt.stopAttract():gt.startAttract(),skipTo:s=>gt.skipTo(s),skipPoints:()=>Object.keys(Yh),teleport:(s,t,e=0,i=0)=>{const n=e*Math.PI/180;return gt.player.reset(s,t,n),gt.player.velocity.set(Math.sin(n)*i,0,Math.cos(n)*i),gt.rig.snapTo(gt.player),gt.player.position.toArray()},setInput:s=>{window.__TIDAL._forced=s},autoplay:s=>gt.setAutoplay(s),clearInput:()=>{window.__TIDAL._forced=null},hud:s=>gt.toggleHud(s),quality:s=>gt.setQuality(s),seed:s=>{gt.setSeed(s),gt.screens.setSeed(s)},player:()=>gt.player,stats:()=>{const s=gt.player;return{state:gt.state,hp:s.hp,boost:+s.boost.toFixed(3),speed:+s.speed.toFixed(2),shield:+s.shield.toFixed(1),dual:+s.dual.toFixed(1),airborne:s.airborne,pos:s.position.toArray().map(t=>+t.toFixed(1)),heading:+s.heading.toFixed(3),bank:+s.bank.toFixed(3),pitch:+s.pitch.toFixed(3),gates:gt.gatesPassed,gateIndex:gt.gates?.currentIndex??-1,score:gt.score,time:+gt.runTime.toFixed(2),kills:gt.kills,enemies:gt.enemies?.activeCount??-1,hazards:gt.hazards?.hazards?.filter(t=>t.alive).length??-1,pickups:gt.pickups?.pickups?.filter(t=>t.alive!==!1).length??-1,target:gt.weapons?.currentTarget?.enemy?gt.weapons.currentTarget.enemy.kind||"enemy":null}},perf:()=>gt.perf(),freeze:s=>gt.freeze(s),renderOnce:s=>gt.renderOnce(s),shot:s=>(gt.freeze(!0),s&&gt.simulate(s),gt.renderOnce(0),!0),simulate:(s,t)=>gt.simulate(s,t),trace:(s,t,e)=>gt.trace(s,t,e),audioReady:()=>ye.ready,reset:()=>(gt.startRun(!0),gt.state)};addEventListener("keydown",s=>{gt.state==="attract"&&(s.code==="Escape"||s.code==="Enter")&&gt.stopAttract()});
