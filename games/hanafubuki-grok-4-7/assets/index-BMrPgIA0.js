(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="172",Wh=0,$l=1,Xh=2,Eu=1,bu=2,Bn=3,ai=0,We=1,ze=2,Wn=0,cs=1,bi=2,Kl=3,Jl=4,qh=5,vi=100,Yh=101,Zh=102,$h=103,Kh=104,Jh=200,jh=201,Qh=202,tf=203,xa=204,Ma=205,ef=206,nf=207,sf=208,rf=209,of=210,af=211,lf=212,cf=213,uf=214,ya=0,Sa=1,wa=2,ds=3,Ea=4,ba=5,Ta=6,Aa=7,Tu=0,hf=1,ff=2,oi=0,Au=1,Ru=2,Cu=3,Pu=4,df=5,Lu=6,ml=7,Du=300,ps=301,ms=302,Ra=303,Ca=304,xo=306,tr=1e3,yi=1001,Pa=1002,rn=1003,pf=1004,dr=1005,Tn=1006,Ro=1007,Si=1008,qn=1009,Uu=1010,Iu=1011,er=1012,gl=1013,Ti=1014,An=1015,Cn=1016,_l=1017,vl=1018,gs=1020,Nu=35902,Fu=1021,Ou=1022,yn=1023,zu=1024,Bu=1025,us=1026,_s=1027,xl=1028,Ml=1029,ku=1030,yl=1031,Sl=1033,Zr=33776,$r=33777,Kr=33778,Jr=33779,La=35840,Da=35841,Ua=35842,Ia=35843,Na=36196,Fa=37492,Oa=37496,za=37808,Ba=37809,ka=37810,Va=37811,Ha=37812,Ga=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,Za=37818,$a=37819,Ka=37820,Ja=37821,jr=36492,ja=36494,Qa=36495,Vu=36283,tl=36284,el=36285,nl=36286,mf=3200,gf=3201,Hu=0,_f=1,si="",Ge="srgb",vs="srgb-linear",io="linear",ce="srgb",Ni=7680,jl=519,vf=512,xf=513,Mf=514,Gu=515,yf=516,Sf=517,wf=518,Ef=519,il=35044,Ql="300 es",Hn=2e3,so=2001;class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tc=1234567;const qs=Math.PI/180,nr=180/Math.PI;function Pn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function wl(n,t){return(n%t+t)%t}function bf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Tf(n,t,e){return n!==t?(e-n)/(t-n):0}function Ys(n,t,e){return(1-e)*n+e*t}function Af(n,t,e,i){return Ys(n,t,1-Math.exp(-e*i))}function Rf(n,t=1){return t-Math.abs(wl(n,t*2)-t)}function Cf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Pf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Lf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Df(n,t){return n+Math.random()*(t-n)}function Uf(n){return n*(.5-Math.random())}function If(n){n!==void 0&&(tc=n);let t=tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nf(n){return n*qs}function Ff(n){return n*nr}function Of(n){return(n&n-1)===0&&n!==0}function zf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kf(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),u=r((t+i)/2),c=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*c,l*h,l*f,a*u);break;case"YZY":n.set(l*f,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*f,a*c,a*u);break;case"XZX":n.set(a*c,l*m,l*d,a*u);break;case"YXY":n.set(l*d,a*c,l*m,a*u);break;case"ZYZ":n.set(l*m,l*d,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const El={DEG2RAD:qs,RAD2DEG:nr,generateUUID:Pn,clamp:Yt,euclideanModulo:wl,mapLinear:bf,inverseLerp:Tf,lerp:Ys,damp:Af,pingpong:Rf,smoothstep:Cf,smootherstep:Pf,randInt:Lf,randFloat:Df,randFloatSpread:Uf,seededRandom:If,degToRad:Nf,radToDeg:Ff,isPowerOfTwo:Of,ceilPowerOfTwo:zf,floorPowerOfTwo:Bf,setQuaternionFromProperEuler:kf,normalize:ue,denormalize:Mn};class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,i,s,r,o,a,l,u){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u)}set(t,e,i,s,r,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],d=i[5],m=i[8],_=s[0],g=s[3],p=s[6],S=s[1],y=s[4],M=s[7],D=s[2],C=s[5],b=s[8];return r[0]=o*_+a*S+l*D,r[3]=o*g+a*y+l*C,r[6]=o*p+a*M+l*b,r[1]=u*_+c*S+h*D,r[4]=u*g+c*y+h*C,r[7]=u*p+c*M+h*b,r[2]=f*_+d*S+m*D,r[5]=f*g+d*y+m*C,r[8]=f*p+d*M+m*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=c*o-a*u,f=a*l-c*r,d=u*r-o*l,m=e*h+i*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(s*u-c*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(c*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-u*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-s*u,s*l,-s*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Gt;function Wu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vf(){const n=ro("canvas");return n.style.display="block",n}const ec={};function ss(n){n in ec||(ec[n]=!0,console.warn(n))}function Hf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Gf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wf(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const nc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xf(){const n={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?io:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vs]:{primaries:t,whitePoint:i,transfer:io,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}const ne=Xf();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fi;class qf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=ro("canvas")),Fi.width=t.width,Fi.height=t.height;const i=Fi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ro("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yf=0;class Xu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Po(s[o].image)):r.push(Po(s[o]))}else r=Po(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zf=0;class Xe extends Es{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=yi,s=yi,r=Tn,o=Si,a=yn,l=qn,u=Xe.DEFAULT_ANISOTROPY,c=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Pn(),this.name="",this.source=new Xu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Du;Xe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,i=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,u=l[0],c=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,M=(d+1)/2,D=(p+1)/2,C=(c+f)/4,b=(h+_)/4,E=(m+g)/4;return y>M&&y>D?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=C/i,r=b/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=C/s,r=E/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=b/r,s=E/r),this.set(i,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(h-_)/S,this.z=(f-c)/S,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $f extends Es{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Xe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Xu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends $f{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class qu extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kf extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fe{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==f||u!==d||c!==m){let g=1-a;const p=l*f+u*d+c*m+h*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const D=Math.sqrt(y),C=Math.atan2(D,p*S);g=Math.sin(g*C)/D,a=Math.sin(a*C)/D}const M=a*S;if(l=l*g+f*M,u=u*g+d*M,c=c*g+m*M,h=h*g+_*M,g===1-a){const D=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=D,u*=D,c*=D,h*=D}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+c*h+l*d-u*f,t[e+1]=l*m+c*f+u*h-a*d,t[e+2]=u*m+c*d+a*f-l*h,t[e+3]=c*m-a*h-l*f-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*c*h+u*d*m,this._y=u*d*h-f*c*m,this._z=u*c*m+f*d*h,this._w=u*c*h-f*d*m;break;case"YXZ":this._x=f*c*h+u*d*m,this._y=u*d*h-f*c*m,this._z=u*c*m-f*d*h,this._w=u*c*h+f*d*m;break;case"ZXY":this._x=f*c*h-u*d*m,this._y=u*d*h+f*c*m,this._z=u*c*m+f*d*h,this._w=u*c*h-f*d*m;break;case"ZYX":this._x=f*c*h-u*d*m,this._y=u*d*h+f*c*m,this._z=u*c*m-f*d*h,this._w=u*c*h+f*d*m;break;case"YZX":this._x=f*c*h+u*d*m,this._y=u*d*h+f*c*m,this._z=u*c*m-f*d*h,this._w=u*c*h-f*d*m;break;case"XZY":this._x=f*c*h-u*d*m,this._y=u*d*h-f*c*m,this._z=u*c*m+f*d*h,this._w=u*c*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-l)*d,this._y=(r-u)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(c-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+u)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-u)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-e)*c)/u,f=Math.sin(e*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,i=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*s-a*i),c=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*u+o*h-a*c,this.y=i+l*c+a*u-r*h,this.z=s+l*h+r*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new A,sc=new Fe;class Di{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pr.copy(i.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),mr.subVectors(this.max,Cs),Oi.subVectors(t.a,Cs),zi.subVectors(t.b,Cs),Bi.subVectors(t.c,Cs),Zn.subVectors(zi,Oi),$n.subVectors(Bi,zi),hi.subVectors(Oi,Bi);let e=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-hi.z,hi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,hi.z,0,-hi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-hi.y,hi.x,0];return!Do(e,Oi,zi,Bi,mr)||(e=[1,0,0,0,1,0,0,0,1],!Do(e,Oi,zi,Bi,mr))?!1:(gr.crossVectors(Zn,$n),e=[gr.x,gr.y,gr.z],Do(e,Oi,zi,Bi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new A,new A,new A,new A,new A,new A,new A,new A],_n=new A,pr=new Di,Oi=new A,zi=new A,Bi=new A,Zn=new A,$n=new A,hi=new A,Cs=new A,mr=new A,gr=new A,fi=new A;function Do(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fi.fromArray(n,r);const a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),u=e.dot(fi),c=i.dot(fi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Jf=new Di,Ps=new A,Uo=new A;class bs{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Jf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Uo)),this.expandByPoint(Ps.copy(t.center).sub(Uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new A,Io=new A,_r=new A,Kn=new A,No=new A,vr=new A,Fo=new A;class Yu{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Io.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Io);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=Kn.dot(this.direction),l=-Kn.dot(_r),u=Kn.lengthSq(),c=Math.abs(1-o*o);let h,f,d,m;if(c>0)if(h=o*l-a,f=o*a-l,m=r*c,h>=0)if(f>=-m)if(f<=m){const _=1/c;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+u):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+u):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+u);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Io).addScaledVector(_r,f),d}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),c>=0?(r=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,s,r){No.subVectors(e,t),vr.subVectors(i,t),Fo.crossVectors(No,vr);let o=this.direction.dot(Fo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const l=a*this.direction.dot(vr.crossVectors(Kn,vr));if(l<0)return null;const u=a*this.direction.dot(No.cross(Kn));if(u<0||l+u>o)return null;const c=-a*Kn.dot(Fo);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,i,s,r,o,a,l,u,c,h,f,d,m,_,g){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u,c,h,f,d,m,_,g)}set(t,e,i,s,r,o,a,l,u,c,h,f,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*c,d=o*h,m=a*c,_=a*h;e[0]=l*c,e[4]=-l*h,e[8]=u,e[1]=d+m*u,e[5]=f-_*u,e[9]=-a*l,e[2]=_-f*u,e[6]=m+d*u,e[10]=o*l}else if(t.order==="YXZ"){const f=l*c,d=l*h,m=u*c,_=u*h;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*u,e[1]=o*h,e[5]=o*c,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*c,d=l*h,m=u*c,_=u*h;e[0]=f-_*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*c,e[9]=_-f*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*c,d=o*h,m=a*c,_=a*h;e[0]=l*c,e[4]=m*u-d,e[8]=f*u+_,e[1]=l*h,e[5]=_*u+f,e[9]=d*u-m,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*u,m=a*l,_=a*u;e[0]=l*c,e[4]=_-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*h+m,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*u,m=a*l,_=a*u;e[0]=l*c,e[4]=-h,e[8]=u*c,e[1]=f*h+_,e[5]=o*c,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*c,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jf,t,Qf)}lookAt(t,e,i){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Jn.crossVectors(i,nn),Jn.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Jn.crossVectors(i,nn)),Jn.normalize(),xr.crossVectors(nn,Jn),s[0]=Jn.x,s[4]=xr.x,s[8]=nn.x,s[1]=Jn.y,s[5]=xr.y,s[9]=nn.y,s[2]=Jn.z,s[6]=xr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],S=i[3],y=i[7],M=i[11],D=i[15],C=s[0],b=s[4],E=s[8],x=s[12],v=s[1],R=s[5],U=s[9],F=s[13],W=s[2],z=s[6],k=s[10],Y=s[14],H=s[3],B=s[7],$=s[11],j=s[15];return r[0]=o*C+a*v+l*W+u*H,r[4]=o*b+a*R+l*z+u*B,r[8]=o*E+a*U+l*k+u*$,r[12]=o*x+a*F+l*Y+u*j,r[1]=c*C+h*v+f*W+d*H,r[5]=c*b+h*R+f*z+d*B,r[9]=c*E+h*U+f*k+d*$,r[13]=c*x+h*F+f*Y+d*j,r[2]=m*C+_*v+g*W+p*H,r[6]=m*b+_*R+g*z+p*B,r[10]=m*E+_*U+g*k+p*$,r[14]=m*x+_*F+g*Y+p*j,r[3]=S*C+y*v+M*W+D*H,r[7]=S*b+y*R+M*z+D*B,r[11]=S*E+y*U+M*k+D*$,r[15]=S*x+y*F+M*Y+D*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],h=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*h-s*u*h-r*a*f+i*u*f+s*a*d-i*l*d)+_*(+e*l*d-e*u*f+r*o*f-s*o*d+s*u*c-r*l*c)+g*(+e*u*h-e*a*d-r*o*h+i*o*d+r*a*c-i*u*c)+p*(-s*a*c-e*l*h+e*a*f+s*o*h-i*o*f+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],S=h*g*u-_*f*u+_*l*d-a*g*d-h*l*p+a*f*p,y=m*f*u-c*g*u-m*l*d+o*g*d+c*l*p-o*f*p,M=c*_*u-m*h*u+m*a*d-o*_*d-c*a*p+o*h*p,D=m*h*l-c*_*l-m*a*f+o*_*f+c*a*g-o*h*g,C=e*S+i*y+s*M+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=S*b,t[1]=(_*f*r-h*g*r-_*s*d+i*g*d+h*s*p-i*f*p)*b,t[2]=(a*g*r-_*l*r+_*s*u-i*g*u-a*s*p+i*l*p)*b,t[3]=(h*l*r-a*f*r-h*s*u+i*f*u+a*s*d-i*l*d)*b,t[4]=y*b,t[5]=(c*g*r-m*f*r+m*s*d-e*g*d-c*s*p+e*f*p)*b,t[6]=(m*l*r-o*g*r-m*s*u+e*g*u+o*s*p-e*l*p)*b,t[7]=(o*f*r-c*l*r+c*s*u-e*f*u-o*s*d+e*l*d)*b,t[8]=M*b,t[9]=(m*h*r-c*_*r-m*i*d+e*_*d+c*i*p-e*h*p)*b,t[10]=(o*_*r-m*a*r+m*i*u-e*_*u-o*i*p+e*a*p)*b,t[11]=(c*a*r-o*h*r-c*i*u+e*h*u+o*i*d-e*a*d)*b,t[12]=D*b,t[13]=(c*_*s-m*h*s+m*i*f-e*_*f-c*i*g+e*h*g)*b,t[14]=(m*a*s-o*_*s-m*i*l+e*_*l+o*i*g-e*a*g)*b,t[15]=(o*h*s-c*a*s+c*i*l-e*h*l-o*i*f+e*a*f)*b,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,u=r+r,c=o+o,h=a+a,f=r*u,d=r*c,m=r*h,_=o*c,g=o*h,p=a*h,S=l*u,y=l*c,M=l*h,D=i.x,C=i.y,b=i.z;return s[0]=(1-(_+p))*D,s[1]=(d+M)*D,s[2]=(m-y)*D,s[3]=0,s[4]=(d-M)*C,s[5]=(1-(f+p))*C,s[6]=(g+S)*C,s[7]=0,s[8]=(m+y)*b,s[9]=(g-S)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const u=1/r,c=1/o,h=1/a;return vn.elements[0]*=u,vn.elements[1]*=u,vn.elements[2]*=u,vn.elements[4]*=c,vn.elements[5]*=c,vn.elements[6]*=c,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Hn){const l=this.elements,u=2*r/(e-t),c=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,m;if(a===Hn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===so)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Hn){const l=this.elements,u=1/(e-t),c=1/(i-s),h=1/(o-r),f=(e+t)*u,d=(i+s)*c;let m,_;if(a===Hn)m=(o+r)*h,_=-2*h;else if(a===so)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ki=new A,vn=new jt,jf=new A(0,0,0),Qf=new A(1,1,1),Jn=new A,xr=new A,nn=new A,rc=new jt,oc=new Fe;class Sn{constructor(t=0,e=0,i=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let td=0;const ac=new A,Vi=new Fe,Fn=new jt,Mr=new A,Ls=new A,ed=new A,nd=new Fe,lc=new A(1,0,0),cc=new A(0,1,0),uc=new A(0,0,1),hc={type:"added"},id={type:"removed"},Hi={type:"childadded",child:null},Oo={type:"childremoved",child:null};class se extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=se.DEFAULT_UP.clone();const t=new A,e=new Sn,i=new Fe,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Gt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(lc,t)}rotateY(t){return this.rotateOnAxis(cc,t)}rotateZ(t){return this.rotateOnAxis(uc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lc,t)}translateY(t){return this.translateOnAxis(cc,t)}translateZ(t){return this.translateOnAxis(uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mr.copy(t):Mr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ls,Mr,this.up):Fn.lookAt(Mr,Ls,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}se.DEFAULT_UP=new A(0,1,0);se.DEFAULT_MATRIX_AUTO_UPDATE=!0;se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new A,On=new A,zo=new A,zn=new A,Gi=new A,Wi=new A,fc=new A,Bo=new A,ko=new A,Vo=new A,Ho=new ae,Go=new ae,Wo=new ae;class fn{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){xn.subVectors(s,e),On.subVectors(i,e),zo.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(On),l=xn.dot(zo),u=On.dot(On),c=On.dot(zo),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(u*l-a*c)*f,m=(o*c-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ho.setScalar(0),Go.setScalar(0),Wo.setScalar(0),Ho.fromBufferAttribute(t,e),Go.fromBufferAttribute(t,i),Wo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ho,r.x),o.addScaledVector(Go,r.y),o.addScaledVector(Wo,r.z),o}static isFrontFacing(t,e,i,s){return xn.subVectors(i,e),On.subVectors(t,e),xn.cross(On).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Gi.subVectors(s,i),Wi.subVectors(r,i),Bo.subVectors(t,i);const l=Gi.dot(Bo),u=Wi.dot(Bo);if(l<=0&&u<=0)return e.copy(i);ko.subVectors(t,s);const c=Gi.dot(ko),h=Wi.dot(ko);if(c>=0&&h<=c)return e.copy(s);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(Gi,o);Vo.subVectors(t,r);const d=Gi.dot(Vo),m=Wi.dot(Vo);if(m>=0&&d<=m)return e.copy(r);const _=d*u-l*m;if(_<=0&&u>=0&&m<=0)return a=u/(u-m),e.copy(i).addScaledVector(Wi,a);const g=c*m-d*h;if(g<=0&&h-c>=0&&d-m>=0)return fc.subVectors(r,s),a=(h-c)/(h-c+(d-m)),e.copy(s).addScaledVector(fc,a);const p=1/(g+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Xo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=wl(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Xo(o,r,t+1/3),this.g=Xo(o,r,t),this.b=Xo(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const i=$u[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ne.fromWorkingColorSpace(He.copy(this),t),Math.round(Yt(He.r*255,0,255))*65536+Math.round(Yt(He.g*255,0,255))*256+Math.round(Yt(He.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ge){ne.fromWorkingColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(yr);const i=Ys(jn.h,yr.h,e),s=Ys(jn.s,yr.s,e),r=Ys(jn.l,yr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Ut;Ut.NAMES=$u;let sd=0;class Ui extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=cs,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=Ma,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ma&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yn extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new A,Sr=new Q;class Ne{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=il,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==il&&(t.usage=this.usage),t}}class Ku extends Ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ju extends Ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Zt extends Ne{constructor(t,e,i){super(new Float32Array(t),e,i)}}let rd=0;const un=new jt,qo=new se,Xi=new A,sn=new Di,Ds=new Di,De=new A;class _e extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wu(t)?Ju:Ku)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,i){return un.makeTranslation(t,e,i),this.applyMatrix4(un),this}scale(t,e,i){return un.makeScale(t,e,i),this.applyMatrix4(un),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(sn.min,Ds.min),sn.expandByPoint(De),De.addVectors(sn.max,Ds.max),sn.expandByPoint(De)):(sn.expandByPoint(Ds.min),sn.expandByPoint(Ds.max))}sn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)De.fromBufferAttribute(a,u),l&&(Xi.fromBufferAttribute(t,u),De.add(Xi)),s=Math.max(s,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<i.count;E++)a[E]=new A,l[E]=new A;const u=new A,c=new A,h=new A,f=new Q,d=new Q,m=new Q,_=new A,g=new A;function p(E,x,v){u.fromBufferAttribute(i,E),c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,v),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,x),m.fromBufferAttribute(r,v),c.sub(u),h.sub(u),d.sub(f),m.sub(f);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(_.copy(c).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(R),g.copy(h).multiplyScalar(d.x).addScaledVector(c,-m.x).multiplyScalar(R),a[E].add(_),a[x].add(_),a[v].add(_),l[E].add(g),l[x].add(g),l[v].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let E=0,x=S.length;E<x;++E){const v=S[E],R=v.start,U=v.count;for(let F=R,W=R+U;F<W;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new A,M=new A,D=new A,C=new A;function b(E){D.fromBufferAttribute(s,E),C.copy(D);const x=a[E];y.copy(x),y.sub(D.multiplyScalar(D.dot(x))).normalize(),M.crossVectors(C,x);const R=M.dot(l[E])<0?-1:1;o.setXYZW(E,y.x,y.y,y.z,R)}for(let E=0,x=S.length;E<x;++E){const v=S[E],R=v.start,U=v.count;for(let F=R,W=R+U;F<W;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,u=new A,c=new A,h=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)f[m++]=u[d++]}return new Ne(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,i);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const d=u[h];c.push(d.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const r=t.morphAttributes;for(const u in r){const c=[],h=r[u];for(let f=0,d=h.length;f<d;f++)c.push(h[f].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new jt,di=new Yu,wr=new bs,pc=new A,Er=new A,br=new A,Tr=new A,Yo=new A,Ar=new A,mc=new A,Rr=new A;class it extends se{constructor(t=new _e,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],h=r[l];c!==0&&(Yo.fromBufferAttribute(h,t),o?Ar.addScaledVector(Yo,c):Ar.addScaledVector(Yo.sub(e),c))}e.add(Ar)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(wr.containsPoint(di.origin)===!1&&(di.intersectSphere(wr,pc)===null||di.origin.distanceToSquared(pc)>(t.far-t.near)**2))&&(dc.copy(r).invert(),di.copy(t.ray).applyMatrix4(dc),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=S,D=y;M<D;M+=3){const C=a.getX(M),b=a.getX(M+1),E=a.getX(M+2);s=Cr(this,p,t,i,u,c,h,C,b,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const S=a.getX(g),y=a.getX(g+1),M=a.getX(g+2);s=Cr(this,o,t,i,u,c,h,S,y,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=S,D=y;M<D;M+=3){const C=M,b=M+1,E=M+2;s=Cr(this,p,t,i,u,c,h,C,b,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const S=g,y=g+1,M=g+2;s=Cr(this,o,t,i,u,c,h,S,y,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function od(n,t,e,i,s,r,o,a){let l;if(t.side===We?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ai,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Rr);return u<e.near||u>e.far?null:{distance:u,point:Rr.clone(),object:n}}function Cr(n,t,e,i,s,r,o,a,l,u){n.getVertexPosition(a,Er),n.getVertexPosition(l,br),n.getVertexPosition(u,Tr);const c=od(n,t,e,i,Er,br,Tr,mc);if(c){const h=new A;fn.getBarycoord(mc,Er,br,Tr,h),s&&(c.uv=fn.getInterpolatedAttribute(s,a,l,u,h,new Q)),r&&(c.uv1=fn.getInterpolatedAttribute(r,a,l,u,h,new Q)),o&&(c.normal=fn.getInterpolatedAttribute(o,a,l,u,h,new A),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new A,materialIndex:0};fn.getNormal(Er,br,Tr,f.normal),c.face=f,c.barycoord=h}return c}class pe extends _e{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2));function m(_,g,p,S,y,M,D,C,b,E,x){const v=M/b,R=D/E,U=M/2,F=D/2,W=C/2,z=b+1,k=E+1;let Y=0,H=0;const B=new A;for(let $=0;$<k;$++){const j=$*R-F;for(let mt=0;mt<z;mt++){const tt=mt*v-U;B[_]=tt*S,B[g]=j*y,B[p]=W,u.push(B.x,B.y,B.z),B[_]=0,B[g]=0,B[p]=C>0?1:-1,c.push(B.x,B.y,B.z),h.push(mt/b),h.push(1-$/E),Y+=1}}for(let $=0;$<E;$++)for(let j=0;j<b;j++){const mt=f+j+z*$,tt=f+j+z*($+1),q=f+(j+1)+z*($+1),st=f+(j+1)+z*$;l.push(mt,tt,st),l.push(tt,q,st),H+=6}a.addGroup(d,H,x),d+=H,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=xs(n[e]);for(const s in i)t[s]=i[s]}return t}function ad(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ju(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Ai={clone:xs,merge:$e};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Be extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Qu extends se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new A,gc=new Q,_c=new Q;class Ke extends Qu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,gc,_c),e.subVectors(_c,gc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,Yi=1;class ud extends se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(qi,Yi,t,e);s.layers=this.layers,this.add(s);const r=new Ke(qi,Yi,t,e);r.layers=this.layers,this.add(r);const o=new Ke(qi,Yi,t,e);o.layers=this.layers,this.add(o);const a=new Ke(qi,Yi,t,e);a.layers=this.layers,this.add(a);const l=new Ke(qi,Yi,t,e);l.layers=this.layers,this.add(l);const u=new Ke(qi,Yi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const u of e)this.remove(u);if(t===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(h,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class th extends Xe{constructor(t,e,i,s,r,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hd extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new th(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pe(5,5,5),r=new Be({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Wn});r.uniforms.tEquirect.value=e;const o=new it(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Tn),new ud(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class bl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=i}clone(){return new bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class eh extends se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=il,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new A;class oo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new oo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nh extends Ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zi;const Us=new A,$i=new A,Ki=new A,Ji=new Q,Is=new Q,ih=new jt,Pr=new A,Ns=new A,Lr=new A,vc=new Q,Zo=new Q,xc=new Q;class dd extends se{constructor(t=new nh){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fd(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new oo(i,3,0,!1)),Zi.setAttribute("uv",new oo(i,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),ih.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ki.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Dr(Pr.set(-.5,-.5,0),Ki,o,$i,s,r),Dr(Ns.set(.5,-.5,0),Ki,o,$i,s,r),Dr(Lr.set(.5,.5,0),Ki,o,$i,s,r),vc.set(0,0),Zo.set(1,0),xc.set(1,1);let a=t.ray.intersectTriangle(Pr,Ns,Lr,!1,Us);if(a===null&&(Dr(Ns.set(-.5,.5,0),Ki,o,$i,s,r),Zo.set(0,1),a=t.ray.intersectTriangle(Pr,Lr,Ns,!1,Us),a===null))return;const l=t.ray.origin.distanceTo(Us);l<t.near||l>t.far||e.push({distance:l,point:Us.clone(),uv:fn.getInterpolation(Us,Pr,Ns,Lr,vc,Zo,xc,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Dr(n,t,e,i,s,r){Ji.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Is.x=r*Ji.x-s*Ji.y,Is.y=s*Ji.x+r*Ji.y):Is.copy(Ji),n.copy(t),n.x+=Is.x,n.y+=Is.y,n.applyMatrix4(ih)}class pd extends Xe{constructor(t=null,e=1,i=1,s,r,o,a,l,u=rn,c=rn,h,f){super(null,o,a,l,u,c,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends Ne{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ji=new jt,yc=new jt,Ur=[],Sc=new Di,md=new jt,Fs=new it,Os=new bs;class fs extends it{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,md)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ji),Sc.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(Sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ji),Os.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(i),t.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),yc.multiplyMatrices(i,ji),Fs.matrixWorld=yc,Fs.raycast(t,Ur);for(let o=0,a=Ur.length;o<a;o++){const l=Ur[o];l.instanceId=r,l.object=this,e.push(l)}Ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pd(new Float32Array(s*this.count),s,this.count,xl,An));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const $o=new A,gd=new A,_d=new Gt;class ni{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=$o.subVectors(i,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($o),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_d.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new bs,Ir=new A;class Tl{constructor(t=new ni,e=new ni,i=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],h=s[6],f=s[7],d=s[8],m=s[9],_=s[10],g=s[11],p=s[12],S=s[13],y=s[14],M=s[15];if(i[0].setComponents(l-r,f-u,g-d,M-p).normalize(),i[1].setComponents(l+r,f+u,g+d,M+p).normalize(),i[2].setComponents(l+o,f+c,g+m,M+S).normalize(),i[3].setComponents(l-o,f-c,g-m,M-S).normalize(),i[4].setComponents(l-a,f-h,g-_,M-y).normalize(),e===Hn)i[5].setComponents(l+a,f+h,g+_,M+y).normalize();else if(e===so)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sh extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wc=new jt,sl=new Yu,Nr=new bs,Fr=new A;class vd extends se{constructor(t=new _e,e=new sh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;wc.copy(s).invert(),sl.copy(t.ray).applyMatrix4(wc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=u.getX(m);Fr.fromBufferAttribute(h,g),Ec(Fr,g,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Fr.fromBufferAttribute(h,m),Ec(Fr,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ec(n,t,e,i,s,r,o){const a=sl.distanceSqToPoint(n);if(a<e){const l=new A;sl.closestPointToPoint(n,l),l.applyMatrix4(i);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Qe extends se{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Al extends Xe{constructor(t,e,i,s,r,o,a,l,u){super(t,e,i,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rh extends Xe{constructor(t,e,i,s,r,o,a,l,u,c=us){if(c!==us&&c!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===us&&(i=Ti),i===void 0&&c===_s&&(i=gs),super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=i[s]-o,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const c=i[s],f=i[s+1]-c,d=(o-c)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Q:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new A,s=[],r=[],o=[],a=new A,l=new jt;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let u=Number.MAX_VALUE;const c=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Yt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Yt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rl extends Dn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Q){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=u-this.aY;l=f*c-d*h+this.aX,u=f*h+d*c+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class xd extends Rl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cl(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,u){s(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,c,h){let f=(o-r)/u-(a-r)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+h)+(l-a)/h;f*=c,d*=c,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Or=new A,Ko=new Cl,Jo=new Cl,jo=new Cl;class oh extends Dn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new A){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,c;this.closed||a>0?u=s[(a-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),u=Or);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Or),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(c),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Ko.initNonuniformCatmullRom(u.x,h.x,f.x,c.x,m,_,g),Jo.initNonuniformCatmullRom(u.y,h.y,f.y,c.y,m,_,g),jo.initNonuniformCatmullRom(u.z,h.z,f.z,c.z,m,_,g)}else this.curveType==="catmullrom"&&(Ko.initCatmullRom(u.x,h.x,f.x,c.x,this.tension),Jo.initCatmullRom(u.y,h.y,f.y,c.y,this.tension),jo.initCatmullRom(u.z,h.z,f.z,c.z,this.tension));return i.set(Ko.calc(l),Jo.calc(l),jo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bc(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Md(n,t){const e=1-n;return e*e*t}function yd(n,t){return 2*(1-n)*n*t}function Sd(n,t){return n*n*t}function Zs(n,t,e,i){return Md(n,t)+yd(n,e)+Sd(n,i)}function wd(n,t){const e=1-n;return e*e*e*t}function Ed(n,t){const e=1-n;return 3*e*e*n*t}function bd(n,t){return 3*(1-n)*n*n*t}function Td(n,t){return n*n*n*t}function $s(n,t,e,i,s){return wd(n,t)+Ed(n,e)+bd(n,i)+Td(n,s)}class ah extends Dn{constructor(t=new Q,e=new Q,i=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Q){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ad extends Dn{constructor(t=new A,e=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new A){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lh extends Dn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rd extends Dn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ch extends Dn{constructor(t=new Q,e=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Q){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Zs(t,s.x,r.x,o.x),Zs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cd extends Dn{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Zs(t,s.x,r.x,o.x),Zs(t,s.y,r.y,o.y),Zs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],u=s[o],c=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(bc(a,l.x,u.x,c.x,h.x),bc(a,l.y,u.y,c.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Q().fromArray(s))}return this}}var rl=Object.freeze({__proto__:null,ArcCurve:xd,CatmullRomCurve3:oh,CubicBezierCurve:ah,CubicBezierCurve3:Ad,EllipseCurve:Rl,LineCurve:lh,LineCurve3:Rd,QuadraticBezierCurve:ch,QuadraticBezierCurve3:Cd,SplineCurve:uh});class Pd extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new rl[s.type]().fromJSON(s))}return this}}class ol extends Pd{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new lh(this.currentPoint.clone(),new Q(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new ch(this.currentPoint.clone(),new Q(t,e),new Q(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new ah(this.currentPoint.clone(),new Q(t,e),new Q(i,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new uh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+u,e+c,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const u=new Rl(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class lr extends _e{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Yt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],u=[],c=1/e,h=new A,f=new Q,d=new A,m=new A,_=new A;let g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let S=0;S<=e;S++){const y=i+S*c*s,M=Math.sin(y),D=Math.cos(y);for(let C=0;C<=t.length-1;C++){h.x=t[C].x*M,h.y=t[C].y,h.z=t[C].x*D,o.push(h.x,h.y,h.z),f.x=S/e,f.y=C/(t.length-1),a.push(f.x,f.y);const b=l[3*C+0]*M,E=l[3*C+1],x=l[3*C+0]*D;u.push(b,E,x)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const M=y+S*t.length,D=M,C=M+t.length,b=M+t.length+1,E=M+1;r.push(D,C,E),r.push(b,E,C)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.points,t.segments,t.phiStart,t.phiLength)}}class ir extends lr{constructor(t=1,e=1,i=4,s=8){const r=new ol;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new ir(t.radius,t.length,t.capSegments,t.radialSegments)}}class cr extends _e{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],u=new A,c=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;u.x=t*Math.cos(d),u.y=t*Math.sin(d),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[f]/t+1)/2,c.y=(o[f+1]/t+1)/2,l.push(c.x,c.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xe extends _e{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],f=[],d=[];let m=0;const _=[],g=i/2;let p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function S(){const M=new A,D=new A;let C=0;const b=(e-t)/i;for(let E=0;E<=r;E++){const x=[],v=E/r,R=v*(e-t)+t;for(let U=0;U<=s;U++){const F=U/s,W=F*l+a,z=Math.sin(W),k=Math.cos(W);D.x=R*z,D.y=-v*i+g,D.z=R*k,h.push(D.x,D.y,D.z),M.set(z,b,k).normalize(),f.push(M.x,M.y,M.z),d.push(F,1-v),x.push(m++)}_.push(x)}for(let E=0;E<s;E++)for(let x=0;x<r;x++){const v=_[x][E],R=_[x+1][E],U=_[x+1][E+1],F=_[x][E+1];(t>0||x!==0)&&(c.push(v,R,F),C+=3),(e>0||x!==r-1)&&(c.push(R,U,F),C+=3)}u.addGroup(p,C,0),p+=C}function y(M){const D=m,C=new Q,b=new A;let E=0;const x=M===!0?t:e,v=M===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,g*v,0),f.push(0,v,0),d.push(.5,.5),m++;const R=m;for(let U=0;U<=s;U++){const W=U/s*l+a,z=Math.cos(W),k=Math.sin(W);b.x=x*k,b.y=g*v,b.z=x*z,h.push(b.x,b.y,b.z),f.push(0,v,0),C.x=z*.5+.5,C.y=k*.5*v+.5,d.push(C.x,C.y),m++}for(let U=0;U<s;U++){const F=D+U,W=R+U;M===!0?c.push(W,W+1,F):c.push(W+1,W,F),E+=3}u.addGroup(p,E,M===!0?1:2),p+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ms extends xe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ms(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pl extends _e{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),u(i),c(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new A,M=new A,D=new A;for(let C=0;C<e.length;C+=3)d(e[C+0],y),d(e[C+1],M),d(e[C+2],D),l(y,M,D,S)}function l(S,y,M,D){const C=D+1,b=[];for(let E=0;E<=C;E++){b[E]=[];const x=S.clone().lerp(M,E/C),v=y.clone().lerp(M,E/C),R=C-E;for(let U=0;U<=R;U++)U===0&&E===C?b[E][U]=x:b[E][U]=x.clone().lerp(v,U/R)}for(let E=0;E<C;E++)for(let x=0;x<2*(C-E)-1;x++){const v=Math.floor(x/2);x%2===0?(f(b[E][v+1]),f(b[E+1][v]),f(b[E][v])):(f(b[E][v+1]),f(b[E+1][v+1]),f(b[E+1][v]))}}function u(S){const y=new A;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(S),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function c(){const S=new A;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const M=g(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;o.push(M,1-D)}m(),h()}function h(){for(let S=0;S<o.length;S+=6){const y=o[S+0],M=o[S+2],D=o[S+4],C=Math.max(y,M,D),b=Math.min(y,M,D);C>.9&&b<.1&&(y<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),D<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,y){const M=S*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function m(){const S=new A,y=new A,M=new A,D=new A,C=new Q,b=new Q,E=new Q;for(let x=0,v=0;x<r.length;x+=9,v+=6){S.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),M.set(r[x+6],r[x+7],r[x+8]),C.set(o[v+0],o[v+1]),b.set(o[v+2],o[v+3]),E.set(o[v+4],o[v+5]),D.copy(S).add(y).add(M).divideScalar(3);const R=g(D);_(C,v+0,S,R),_(b,v+2,y,R),_(E,v+4,M,R)}}function _(S,y,M,D){D<0&&S.x===1&&(o[y]=S.x-1),M.x===0&&M.z===0&&(o[y]=D/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.vertices,t.indices,t.radius,t.details)}}class Mo extends Pl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mo(t.radius,t.detail)}}class hh extends ol{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ol().fromJSON(s))}return this}}const Ld={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=fh(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,u,c,h,f,d;if(i&&(r=Fd(n,t,r,e)),n.length>80*e){a=u=n[0],l=c=n[1];for(let m=e;m<s;m+=e)h=n[m],f=n[m+1],h<a&&(a=h),f<l&&(l=f),h>u&&(u=h),f>c&&(c=f);d=Math.max(u-a,c-l),d=d!==0?32767/d:0}return sr(r,o,e,a,l,d,0),o}};function fh(n,t,e,i,s){let r,o;if(s===Yd(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Tc(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Tc(r,n[r],n[r+1],o);return o&&yo(o,o.next)&&(or(o),o=o.next),o}function Ri(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(yo(e,e.next)||Me(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function sr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Vd(n,i,s,r);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,r?Ud(n,i,s,r):Dd(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(u.i/e|0),or(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=Id(Ri(n),t,e),sr(n,t,e,i,s,r,2)):o===2&&Nd(n,t,e,i,s,r):sr(Ri(n),t,e,i,s,r,1);break}}}function Dd(n){const t=n.prev,e=n,i=n.next;if(Me(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,u=i.y,c=s<r?s<o?s:o:r<o?r:o,h=a<l?a<u?a:u:l<u?l:u,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>u?a:u:l>u?l:u;let m=i.next;for(;m!==t;){if(m.x>=c&&m.x<=f&&m.y>=h&&m.y<=d&&rs(s,a,r,l,o,u,m.x,m.y)&&Me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ud(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Me(s,r,o)>=0)return!1;const a=s.x,l=r.x,u=o.x,c=s.y,h=r.y,f=o.y,d=a<l?a<u?a:u:l<u?l:u,m=c<h?c<f?c:f:h<f?h:f,_=a>l?a>u?a:u:l>u?l:u,g=c>h?c>f?c:f:h>f?h:f,p=al(d,m,t,e,i),S=al(_,g,t,e,i);let y=n.prevZ,M=n.nextZ;for(;y&&y.z>=p&&M&&M.z<=S;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&rs(a,c,l,h,u,f,y.x,y.y)&&Me(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&rs(a,c,l,h,u,f,M.x,M.y)&&Me(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&rs(a,c,l,h,u,f,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&rs(a,c,l,h,u,f,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Id(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!yo(s,r)&&dh(s,i,i.next,r)&&rr(s,r)&&rr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),or(i),or(i.next),i=n=r),i=i.next}while(i!==n);return Ri(i)}function Nd(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wd(o,a)){let l=ph(o,a);o=Ri(o,o.next),l=Ri(l,l.next),sr(o,t,e,i,s,r,0),sr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Fd(n,t,e,i){const s=[];let r,o,a,l,u;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,u=fh(n,a,l,i,!1),u===u.next&&(u.steiner=!0),s.push(Gd(u));for(s.sort(Od),r=0;r<s.length;r++)e=zd(s[r],e);return e}function Od(n,t){return n.x-t.x}function zd(n,t){const e=Bd(n,t);if(!e)return t;const i=ph(e,n);return Ri(i,i.next),Ri(e,e.next)}function Bd(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,u=s.y;let c=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&rs(o<u?r:i,o,l,u,o<u?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),rr(e,n)&&(h<c||h===c&&(e.x>s.x||e.x===s.x&&kd(s,e)))&&(s=e,c=h)),e=e.next;while(e!==a);return s}function kd(n,t){return Me(n.prev,n,t.prev)<0&&Me(t.next,n,n.next)<0}function Vd(n,t,e,i){let s=n;do s.z===0&&(s.z=al(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Hd(s)}function Hd(n){let t,e,i,s,r,o,a,l,u=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<u&&(a++,i=i.nextZ,!!i);t++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,u*=2}while(o>1);return n}function al(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Gd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function rs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Wd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Xd(n,t)&&(rr(n,t)&&rr(t,n)&&qd(n,t)&&(Me(n.prev,n,t.prev)||Me(n,t.prev,t))||yo(n,t)&&Me(n.prev,n,n.next)>0&&Me(t.prev,t,t.next)>0)}function Me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function yo(n,t){return n.x===t.x&&n.y===t.y}function dh(n,t,e,i){const s=Br(Me(n,t,e)),r=Br(Me(n,t,i)),o=Br(Me(e,i,n)),a=Br(Me(e,i,t));return!!(s!==r&&o!==a||s===0&&zr(n,e,t)||r===0&&zr(n,i,t)||o===0&&zr(e,n,i)||a===0&&zr(e,t,i))}function zr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Br(n){return n>0?1:n<0?-1:0}function Xd(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&dh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function rr(n,t){return Me(n.prev,n,n.next)<0?Me(n,t,n.next)>=0&&Me(n,n.prev,t)>=0:Me(n,t,n.prev)<0||Me(n,n.next,t)<0}function qd(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ph(n,t){const e=new ll(n.i,n.x,n.y),i=new ll(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Tc(n,t,e,i){const s=new ll(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function or(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ll(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yd(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ks{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Ks.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Ac(t),Rc(i,t);let o=t.length;e.forEach(Ac);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Rc(i,e[l]);const a=Ld.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ac(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Rc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ll extends _e{constructor(t=new hh([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const u=t[a];o(u)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){const l=[],u=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Zd;let y,M=!1,D,C,b,E;p&&(y=p.getSpacedPoints(c),M=!0,f=!1,D=p.computeFrenetFrames(c,!1),C=new A,b=new A,E=new A),f||(g=0,d=0,m=0,_=0);const x=a.extractPoints(u);let v=x.shape;const R=x.holes;if(!Ks.isClockWise(v)){v=v.reverse();for(let nt=0,ut=R.length;nt<ut;nt++){const L=R[nt];Ks.isClockWise(L)&&(R[nt]=L.reverse())}}const F=Ks.triangulateShape(v,R),W=v;for(let nt=0,ut=R.length;nt<ut;nt++){const L=R[nt];v=v.concat(L)}function z(nt,ut,L){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ut,L)}const k=v.length,Y=F.length;function H(nt,ut,L){let Pt,ot,wt;const ht=nt.x-ut.x,zt=nt.y-ut.y,vt=L.x-nt.x,P=L.y-nt.y,w=ht*ht+zt*zt,V=ht*P-zt*vt;if(Math.abs(V)>Number.EPSILON){const K=Math.sqrt(w),rt=Math.sqrt(vt*vt+P*P),J=ut.x-zt/K,Ct=ut.y+ht/K,pt=L.x-P/rt,St=L.y+vt/rt,$t=((pt-J)*P-(St-Ct)*vt)/(ht*P-zt*vt);Pt=J+ht*$t-nt.x,ot=Ct+zt*$t-nt.y;const lt=Pt*Pt+ot*ot;if(lt<=2)return new Q(Pt,ot);wt=Math.sqrt(lt/2)}else{let K=!1;ht>Number.EPSILON?vt>Number.EPSILON&&(K=!0):ht<-Number.EPSILON?vt<-Number.EPSILON&&(K=!0):Math.sign(zt)===Math.sign(P)&&(K=!0),K?(Pt=-zt,ot=ht,wt=Math.sqrt(w)):(Pt=ht,ot=zt,wt=Math.sqrt(w/2))}return new Q(Pt/wt,ot/wt)}const B=[];for(let nt=0,ut=W.length,L=ut-1,Pt=nt+1;nt<ut;nt++,L++,Pt++)L===ut&&(L=0),Pt===ut&&(Pt=0),B[nt]=H(W[nt],W[L],W[Pt]);const $=[];let j,mt=B.concat();for(let nt=0,ut=R.length;nt<ut;nt++){const L=R[nt];j=[];for(let Pt=0,ot=L.length,wt=ot-1,ht=Pt+1;Pt<ot;Pt++,wt++,ht++)wt===ot&&(wt=0),ht===ot&&(ht=0),j[Pt]=H(L[Pt],L[wt],L[ht]);$.push(j),mt=mt.concat(j)}for(let nt=0;nt<g;nt++){const ut=nt/g,L=d*Math.cos(ut*Math.PI/2),Pt=m*Math.sin(ut*Math.PI/2)+_;for(let ot=0,wt=W.length;ot<wt;ot++){const ht=z(W[ot],B[ot],Pt);ct(ht.x,ht.y,-L)}for(let ot=0,wt=R.length;ot<wt;ot++){const ht=R[ot];j=$[ot];for(let zt=0,vt=ht.length;zt<vt;zt++){const P=z(ht[zt],j[zt],Pt);ct(P.x,P.y,-L)}}}const tt=m+_;for(let nt=0;nt<k;nt++){const ut=f?z(v[nt],mt[nt],tt):v[nt];M?(b.copy(D.normals[0]).multiplyScalar(ut.x),C.copy(D.binormals[0]).multiplyScalar(ut.y),E.copy(y[0]).add(b).add(C),ct(E.x,E.y,E.z)):ct(ut.x,ut.y,0)}for(let nt=1;nt<=c;nt++)for(let ut=0;ut<k;ut++){const L=f?z(v[ut],mt[ut],tt):v[ut];M?(b.copy(D.normals[nt]).multiplyScalar(L.x),C.copy(D.binormals[nt]).multiplyScalar(L.y),E.copy(y[nt]).add(b).add(C),ct(E.x,E.y,E.z)):ct(L.x,L.y,h/c*nt)}for(let nt=g-1;nt>=0;nt--){const ut=nt/g,L=d*Math.cos(ut*Math.PI/2),Pt=m*Math.sin(ut*Math.PI/2)+_;for(let ot=0,wt=W.length;ot<wt;ot++){const ht=z(W[ot],B[ot],Pt);ct(ht.x,ht.y,h+L)}for(let ot=0,wt=R.length;ot<wt;ot++){const ht=R[ot];j=$[ot];for(let zt=0,vt=ht.length;zt<vt;zt++){const P=z(ht[zt],j[zt],Pt);M?ct(P.x,P.y+y[c-1].y,y[c-1].x+L):ct(P.x,P.y,h+L)}}}q(),st();function q(){const nt=s.length/3;if(f){let ut=0,L=k*ut;for(let Pt=0;Pt<Y;Pt++){const ot=F[Pt];Rt(ot[2]+L,ot[1]+L,ot[0]+L)}ut=c+g*2,L=k*ut;for(let Pt=0;Pt<Y;Pt++){const ot=F[Pt];Rt(ot[0]+L,ot[1]+L,ot[2]+L)}}else{for(let ut=0;ut<Y;ut++){const L=F[ut];Rt(L[2],L[1],L[0])}for(let ut=0;ut<Y;ut++){const L=F[ut];Rt(L[0]+k*c,L[1]+k*c,L[2]+k*c)}}i.addGroup(nt,s.length/3-nt,0)}function st(){const nt=s.length/3;let ut=0;ft(W,ut),ut+=W.length;for(let L=0,Pt=R.length;L<Pt;L++){const ot=R[L];ft(ot,ut),ut+=ot.length}i.addGroup(nt,s.length/3-nt,1)}function ft(nt,ut){let L=nt.length;for(;--L>=0;){const Pt=L;let ot=L-1;ot<0&&(ot=nt.length-1);for(let wt=0,ht=c+g*2;wt<ht;wt++){const zt=k*wt,vt=k*(wt+1),P=ut+Pt+zt,w=ut+ot+zt,V=ut+ot+vt,K=ut+Pt+vt;Dt(P,w,V,K)}}}function ct(nt,ut,L){l.push(nt),l.push(ut),l.push(L)}function Rt(nt,ut,L){Ft(nt),Ft(ut),Ft(L);const Pt=s.length/3,ot=S.generateTopUV(i,s,Pt-3,Pt-2,Pt-1);te(ot[0]),te(ot[1]),te(ot[2])}function Dt(nt,ut,L,Pt){Ft(nt),Ft(ut),Ft(Pt),Ft(ut),Ft(L),Ft(Pt);const ot=s.length/3,wt=S.generateSideWallUV(i,s,ot-6,ot-3,ot-2,ot-1);te(wt[0]),te(wt[1]),te(wt[3]),te(wt[1]),te(wt[2]),te(wt[3])}function Ft(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function te(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return $d(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rl[s.type]().fromJSON(s)),new Ll(i,t.options)}}const Zd={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],u=t[s*3],c=t[s*3+1];return[new Q(r,o),new Q(a,l),new Q(u,c)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],u=t[i*3],c=t[i*3+1],h=t[i*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new Q(o,1-l),new Q(u,1-h),new Q(f,1-m),new Q(_,1-p)]:[new Q(a,1-l),new Q(c,1-h),new Q(d,1-m),new Q(g,1-p)]}};function $d(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ci extends _e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,h=t/a,f=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<c;p++){const S=p*f-o;for(let y=0;y<u;y++){const M=y*h-r;m.push(M,-S,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+u*p,M=S+u*(p+1),D=S+1+u*(p+1),C=S+1+u*p;d.push(y,M,C),d.push(M,D,C)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ue extends _e{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new A,f=new A,d=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const S=[],y=p/i;let M=0;p===0&&o===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let D=0;D<=e;D++){const C=D/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(C+M,1-y),S.push(u++)}c.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const y=c[p][S+1],M=c[p][S],D=c[p+1][S],C=c[p+1][S+1];(p!==0||o>0)&&d.push(y,M,C),(p!==i-1||l<Math.PI)&&d.push(M,D,C)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ys extends _e{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],u=[],c=new A,h=new A,f=new A;for(let d=0;d<=i;d++)for(let m=0;m<=s;m++){const _=m/s*r,g=d/i*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),f.subVectors(h,c).normalize(),l.push(f.x,f.y,f.z),u.push(m/s),u.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=s;m++){const _=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,S=(s+1)*d+m;o.push(_,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Kd extends Be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qt extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jd extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jd extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Dl extends se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qd extends Dl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qo=new jt,Cc=new A,Pc=new A;class mh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lc=new jt,zs=new A,ta=new A;class tp extends mh{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),i.position.copy(zs),ta.copy(i.position),ta.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ta),i.updateMatrixWorld(),s.makeTranslation(-zs.x,-zs.y,-zs.z),Lc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc)}}class gh extends Dl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new tp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ul extends Qu{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ep extends mh{constructor(){super(new Ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _h extends Dl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.target=new se,this.shadow=new ep}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class np extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ip{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Dc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dc(){return performance.now()}function Uc(n,t,e,i){const s=sp(i);switch(e){case Fu:return n*t;case zu:return n*t;case Bu:return n*t*2;case xl:return n*t/s.components*s.byteLength;case Ml:return n*t/s.components*s.byteLength;case ku:return n*t*2/s.components*s.byteLength;case yl:return n*t*2/s.components*s.byteLength;case Ou:return n*t*3/s.components*s.byteLength;case yn:return n*t*4/s.components*s.byteLength;case Sl:return n*t*4/s.components*s.byteLength;case Zr:case $r:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Kr:case Jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Da:case Ia:return Math.max(n,16)*Math.max(t,8)/4;case La:case Ua:return Math.max(n,8)*Math.max(t,8)/2;case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Va:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jr:case ja:case Qa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Vu:case tl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case el:case nl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sp(n){switch(n){case qn:case Uu:return{byteLength:1,components:1};case er:case Iu:case Cn:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case Ti:case gl:case An:return{byteLength:4,components:1};case Nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function rp(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
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
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
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
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,Mp=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cp=`#define PI 3.141592653589793
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
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lp=`vec3 transformedNormal = objectNormal;
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
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
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
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
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
#endif`,s0=`struct PhysicalMaterial {
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
}`,r0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,Sm=`#define LAMBERT
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
}`,wm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,bm=`#define NORMAL
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
}`,Tm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Dm=`#define TOON
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
}`,Um=`uniform float size;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Fm=`uniform vec3 color;
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
}`,Om=`uniform float rotation;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:op,alphahash_pars_fragment:ap,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:up,alphatest_pars_fragment:hp,aomap_fragment:fp,aomap_pars_fragment:dp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:vp,iridescence_fragment:xp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ep,color_fragment:bp,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Up,emissivemap_fragment:Ip,emissivemap_pars_fragment:Np,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:zp,envmap_common_pars_fragment:Bp,envmap_pars_fragment:kp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:jp,envmap_vertex:Hp,fog_vertex:Gp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Zp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Kp,lights_pars_begin:Jp,lights_toon_fragment:Qp,lights_toon_pars_fragment:t0,lights_phong_fragment:e0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:s0,lights_fragment_begin:r0,lights_fragment_maps:o0,lights_fragment_end:a0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:h0,map_fragment:f0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:_0,morphinstance_vertex:v0,morphcolor_vertex:x0,morphnormal_vertex:M0,morphtarget_pars_vertex:y0,morphtarget_vertex:S0,normal_fragment_begin:w0,normal_fragment_maps:E0,normal_pars_fragment:b0,normal_pars_vertex:T0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:D0,opaque_fragment:U0,packing:I0,premultiplied_alpha_fragment:N0,project_vertex:F0,dithering_fragment:O0,dithering_pars_fragment:z0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:V0,shadowmap_pars_vertex:H0,shadowmap_vertex:G0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:Y0,skinnormal_vertex:Z0,specularmap_fragment:$0,specularmap_pars_fragment:K0,tonemapping_fragment:J0,tonemapping_pars_fragment:j0,transmission_fragment:Q0,transmission_pars_fragment:tm,uv_pars_fragment:em,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:om,backgroundCube_vert:am,backgroundCube_frag:lm,cube_vert:cm,cube_frag:um,depth_vert:hm,depth_frag:fm,distanceRGBA_vert:dm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:_m,linedashed_frag:vm,meshbasic_vert:xm,meshbasic_frag:Mm,meshlambert_vert:ym,meshlambert_frag:Sm,meshmatcap_vert:wm,meshmatcap_frag:Em,meshnormal_vert:bm,meshnormal_frag:Tm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Um,points_frag:Im,shadow_vert:Nm,shadow_frag:Fm,sprite_vert:Om,sprite_frag:zm},dt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},En={basic:{uniforms:$e([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:$e([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:$e([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:$e([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:$e([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:$e([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:$e([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:$e([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:$e([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:$e([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:$e([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:$e([dt.common,dt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:$e([dt.lights,dt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};En.physical={uniforms:$e([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const kr={r:0,b:0,g:0},mi=new Sn,Bm=new jt;function km(n,t,e,i,s,r,o){const a=new Ut(0);let l=r===!0?0:1,u,c,h=null,f=0,d=null;function m(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1;const D=m(y);D===null?p(a,l):D&&D.isColor&&(p(D,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,M){const D=m(M);D&&(D.isCubeTexture||D.mapping===xo)?(c===void 0&&(c=new it(new pe(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:xs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),mi.copy(M.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),c.material.uniforms.envMap.value=D,c.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(mi)),c.material.toneMapped=ne.getTransfer(D.colorSpace)!==ce,(h!==D||f!==D.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=D,f=D.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new it(new Ci(2,2),new Be({name:"BackgroundMaterial",uniforms:xs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=ne.getTransfer(D.colorSpace)!==ce,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||f!==D.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=D,f=D.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function p(y,M){y.getRGB(kr,ju(n)),i.buffers.color.setClear(kr.r,kr.g,kr.b,M,o)}function S(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:g,dispose:S}}function Vm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(v,R,U,F,W){let z=!1;const k=h(F,U,R);r!==k&&(r=k,u(r.object)),z=d(v,F,U,W),z&&m(v,F,U,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(v,R,U,F),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function u(v){return n.bindVertexArray(v)}function c(v){return n.deleteVertexArray(v)}function h(v,R,U){const F=U.wireframe===!0;let W=i[v.id];W===void 0&&(W={},i[v.id]=W);let z=W[R.id];z===void 0&&(z={},W[R.id]=z);let k=z[F];return k===void 0&&(k=f(l()),z[F]=k),k}function f(v){const R=[],U=[],F=[];for(let W=0;W<e;W++)R[W]=0,U[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,R,U,F){const W=r.attributes,z=R.attributes;let k=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){const $=W[H];let j=z[H];if(j===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),$===void 0||$.attribute!==j||j&&$.data!==j.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function m(v,R,U,F){const W={},z=R.attributes;let k=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){let $=z[H];$===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&($=v.instanceColor));const j={};j.attribute=$,$&&$.data&&(j.data=$.data),W[H]=j,k++}r.attributes=W,r.attributesNum=k,r.index=F}function _(){const v=r.newAttributes;for(let R=0,U=v.length;R<U;R++)v[R]=0}function g(v){p(v,0)}function p(v,R){const U=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;U[v]=1,F[v]===0&&(n.enableVertexAttribArray(v),F[v]=1),W[v]!==R&&(n.vertexAttribDivisor(v,R),W[v]=R)}function S(){const v=r.newAttributes,R=r.enabledAttributes;for(let U=0,F=R.length;U<F;U++)R[U]!==v[U]&&(n.disableVertexAttribArray(U),R[U]=0)}function y(v,R,U,F,W,z,k){k===!0?n.vertexAttribIPointer(v,R,U,W,z):n.vertexAttribPointer(v,R,U,F,W,z)}function M(v,R,U,F){_();const W=F.attributes,z=U.getAttributes(),k=R.defaultAttributeValues;for(const Y in z){const H=z[Y];if(H.location>=0){let B=W[Y];if(B===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(B=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(B=v.instanceColor)),B!==void 0){const $=B.normalized,j=B.itemSize,mt=t.get(B);if(mt===void 0)continue;const tt=mt.buffer,q=mt.type,st=mt.bytesPerElement,ft=q===n.INT||q===n.UNSIGNED_INT||B.gpuType===gl;if(B.isInterleavedBufferAttribute){const ct=B.data,Rt=ct.stride,Dt=B.offset;if(ct.isInstancedInterleavedBuffer){for(let Ft=0;Ft<H.locationSize;Ft++)p(H.location+Ft,ct.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ft=0;Ft<H.locationSize;Ft++)g(H.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ft=0;Ft<H.locationSize;Ft++)y(H.location+Ft,j/H.locationSize,q,$,Rt*st,(Dt+j/H.locationSize*Ft)*st,ft)}else{if(B.isInstancedBufferAttribute){for(let ct=0;ct<H.locationSize;ct++)p(H.location+ct,B.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ct=0;ct<H.locationSize;ct++)g(H.location+ct);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let ct=0;ct<H.locationSize;ct++)y(H.location+ct,j/H.locationSize,q,$,j*st,j/H.locationSize*ct*st,ft)}}else if(k!==void 0){const $=k[Y];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(H.location,$);break;case 3:n.vertexAttrib3fv(H.location,$);break;case 4:n.vertexAttrib4fv(H.location,$);break;default:n.vertexAttrib1fv(H.location,$)}}}}S()}function D(){E();for(const v in i){const R=i[v];for(const U in R){const F=R[U];for(const W in F)c(F[W].object),delete F[W];delete R[U]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;const R=i[v.id];for(const U in R){const F=R[U];for(const W in F)c(F[W].object),delete F[W];delete R[U]}delete i[v.id]}function b(v){for(const R in i){const U=i[R];if(U[v.id]===void 0)continue;const F=U[v.id];for(const W in F)c(F[W].object),delete F[W];delete U[v.id]}}function E(){x(),o=!0,r!==s&&(r=s,u(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:x,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function Hm(n,t,e){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),e.update(c,i,h))}function a(u,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];e.update(d,i,1)}function l(u,c,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u.length;m++)o(u[m],c[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=c[_]*f[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==yn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const E=b===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==qn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==An&&!E)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:D,maxSamples:C}}function Wm(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ni,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=c(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?c(null):u();else{const S=r?0:i,y=S*4;let M=p.clippingState||null;l.value=M,M=c(m,f,y,d);for(let D=0;D!==y;++D)M[D]=e[D];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,M=d;y!==_;++y,M+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Xm(n){let t=new WeakMap;function e(o,a){return a===Ra?o.mapping=ps:a===Ca&&(o.mapping=ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ra||a===Ca)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new hd(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const os=4,Ic=[.125,.215,.35,.446,.526,.582],xi=20,ea=new Ul,Nc=new Ut;let na=null,ia=0,sa=0,ra=!1;const _i=(1+Math.sqrt(5))/2,Qi=1/_i,Fc=[new A(-_i,Qi,0),new A(_i,Qi,0),new A(-Qi,0,_i),new A(Qi,0,_i),new A(0,_i,-Qi),new A(0,_i,Qi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=ra,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Cn,format:yn,colorSpace:vs,depthBuffer:!1},s=Oc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(r)),this._blurMaterial=Ym(r,t,e)}return s}_compileMaterial(t){const e=new it(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,i,s){const a=new Ke(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Nc),c.toneMapping=oi,c.autoClear=!1;const d=new Yn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new it(new pe,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Nc),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const y=this._cubeSize;Vr(s,S*y,p>2?y:0,y,y),c.setRenderTarget(s),_&&c.render(m,a),c.render(t,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=f,c.autoClear=h,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ps||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Vr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ea)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fc[(s-r-1)%Fc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new it(this._lodPlanes[s],u),f=u.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xi-1),_=r/m,g=isFinite(r)?1+Math.floor(c*_):xi;g>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xi}`);const p=[];let S=0;for(let b=0;b<xi;++b){const E=b/_,x=Math.exp(-E*E/2);p.push(x),b===0?S+=x:b<g&&(S+=2*x)}for(let b=0;b<p.length;b++)p[b]=p[b]/S;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;const M=this._sizeLods[s],D=3*M*(s>y-os?s-y+os:0),C=4*(this._cubeSize-M);Vr(e,D,C,3*M,2*M),l.setRenderTarget(e),l.render(h,ea)}}function qm(n){const t=[],e=[],i=[];let s=n;const r=n-os+1+Ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-os?l=Ic[o-n+os-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,m=6,_=3,g=2,p=1,S=new Float32Array(_*m*d),y=new Float32Array(g*m*d),M=new Float32Array(p*m*d);for(let C=0;C<d;C++){const b=C%3*2/3-1,E=C>2?0:-1,x=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];S.set(x,_*m*C),y.set(f,g*m*C);const v=[C,C,C,C,C,C];M.set(v,p*m*C)}const D=new _e;D.setAttribute("position",new Ne(S,_)),D.setAttribute("uv",new Ne(y,g)),D.setAttribute("faceIndex",new Ne(M,p)),t.push(D),s>os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Oc(n,t,e){const i=new pn(n,t,e);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ym(n,t,e){const i=new Float32Array(xi),s=new A(0,1,0);return new Be({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zc(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Bc(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function Zm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ra||l===Ca,c=l===ps||l===ms;if(u||c){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new cl(n)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&s(d)?(e===null&&(e=new cl(n)),h=u?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function $m(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ss("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Km(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function u(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let y=0,M=S.length;y<M;y+=3){const D=S[y+0],C=S[y+1],b=S[y+2];f.push(D,C,C,b,b,D)}}else if(m!==void 0){const S=m.array;_=m.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const D=y+0,C=y+1,b=y+2;f.push(D,C,C,b,b,D)}}else return;const g=new(Wu(f)?Ju:Ku)(f,1);g.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,g)}function c(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function Jm(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function u(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,f*o,m),e.update(d,i,m))}function c(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function h(f,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)u(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,m);let p=0;for(let S=0;S<m;S++)p+=d[S]*_[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function jm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Qm(n,t,e){const i=new WeakMap,s=new ae;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let v=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let D=a.attributes.position.count*M,C=1;D>t.maxTextureSize&&(C=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const b=new Float32Array(D*C*4*h),E=new qu(b,D,C,h);E.type=An,E.needsUpdate=!0;const x=M*4;for(let R=0;R<h;R++){const U=p[R],F=S[R],W=y[R],z=D*C*4*R;for(let k=0;k<U.count;k++){const Y=k*x;m===!0&&(s.fromBufferAttribute(U,k),b[z+Y+0]=s.x,b[z+Y+1]=s.y,b[z+Y+2]=s.z,b[z+Y+3]=0),_===!0&&(s.fromBufferAttribute(F,k),b[z+Y+4]=s.x,b[z+Y+5]=s.y,b[z+Y+6]=s.z,b[z+Y+7]=0),g===!0&&(s.fromBufferAttribute(W,k),b[z+Y+8]=s.x,b[z+Y+9]=s.y,b[z+Y+10]=s.z,b[z+Y+11]=W.itemSize===4?s.w:1)}}f={count:h,texture:E,size:new Q(D,C)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<u.length;g++)m+=u[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function tg(n,t,e,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,h=t.get(l,c);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const xh=new Xe,kc=new rh(1,1),Mh=new qu,yh=new Kf,Sh=new th,Vc=[],Hc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function Ts(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Vc[s];if(r===void 0&&(r=new Float32Array(s),Vc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Pe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function So(n,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function eg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function rg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;Xc.set(i),n.uniformMatrix2fv(this.addr,!1,Xc),Le(e,i)}}function og(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;Wc.set(i),n.uniformMatrix3fv(this.addr,!1,Wc),Le(e,i)}}function ag(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;Gc.set(i),n.uniformMatrix4fv(this.addr,!1,Gc),Le(e,i)}}function lg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function fg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function mg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function gg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(kc.compareFunction=Gu,r=kc):r=xh,e.setTexture2D(t||r,s)}function _g(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||yh,s)}function vg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Sh,s)}function xg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Mh,s)}function Mg(n){switch(n){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return ug;case 35669:case 35673:return hg;case 5125:return fg;case 36294:return dg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return xg}}function yg(n,t){n.uniform1fv(this.addr,t)}function Sg(n,t){const e=Ts(t,this.size,2);n.uniform2fv(this.addr,e)}function wg(n,t){const e=Ts(t,this.size,3);n.uniform3fv(this.addr,e)}function Eg(n,t){const e=Ts(t,this.size,4);n.uniform4fv(this.addr,e)}function bg(n,t){const e=Ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Tg(n,t){const e=Ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ag(n,t){const e=Ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Rg(n,t){n.uniform1iv(this.addr,t)}function Cg(n,t){n.uniform2iv(this.addr,t)}function Pg(n,t){n.uniform3iv(this.addr,t)}function Lg(n,t){n.uniform4iv(this.addr,t)}function Dg(n,t){n.uniform1uiv(this.addr,t)}function Ug(n,t){n.uniform2uiv(this.addr,t)}function Ig(n,t){n.uniform3uiv(this.addr,t)}function Ng(n,t){n.uniform4uiv(this.addr,t)}function Fg(n,t,e){const i=this.cache,s=t.length,r=So(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xh,r[o])}function Og(n,t,e){const i=this.cache,s=t.length,r=So(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yh,r[o])}function zg(n,t,e){const i=this.cache,s=t.length,r=So(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sh,r[o])}function Bg(n,t,e){const i=this.cache,s=t.length,r=So(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mh,r[o])}function kg(n){switch(n){case 5126:return yg;case 35664:return Sg;case 35665:return wg;case 35666:return Eg;case 35674:return bg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ug;case 36295:return Ig;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Bg}}class Vg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Mg(e.type)}}class Hg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}}class Gg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function qc(n,t){n.seq.push(t),n.map[t.id]=t}function Wg(n,t,e){const i=n.name,s=i.length;for(oa.lastIndex=0;;){const r=oa.exec(i),o=oa.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){qc(e,u===void 0?new Vg(a,n,t):new Hg(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Gg(a),qc(e,h)),e=h}}}class Qr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Wg(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Yc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Xg=37297;let qg=0;function Yg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Zc=new Gt;function Zg(n){ne._getMatrix(Zc,ne.workingColorSpace,n);const t=`mat3( ${Zc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case io:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function $c(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Yg(n.getShaderSource(t),o)}else return s}function $g(n,t){const e=Zg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kg(n,t){let e;switch(t){case Au:e="Linear";break;case Ru:e="Reinhard";break;case Cu:e="Cineon";break;case Pu:e="ACESFilmic";break;case Lu:e="AgX";break;case ml:e="Neutral";break;case df:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hr=new A;function Jg(){ne.getLuminanceCoefficients(Hr);const n=Hr.x.toFixed(4),t=Hr.y.toFixed(4),e=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function Qg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function t_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ws(n){return n!==""}function Kc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(n){return n.replace(e_,i_)}const n_=new Map;function i_(n,t){let e=Xt[t];if(e===void 0){const i=n_.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ul(e)}const s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(n){return n.replace(s_,r_)}function r_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function o_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Eu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function a_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function c_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tu:t="ENVMAP_BLENDING_MULTIPLY";break;case hf:t="ENVMAP_BLENDING_MIX";break;case ff:t="ENVMAP_BLENDING_ADD";break}return t}function u_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function h_(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=o_(e),u=a_(e),c=l_(e),h=c_(e),f=u_(e),d=jg(e),m=Qg(r),_=s.createProgram();let g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ws).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(g=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==oi?Kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,$g("linearToOutputTexel",e.outputColorSpace),Jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=ul(o),o=Kc(o,e),o=Jc(o,e),a=ul(a),a=Kc(a,e),a=Jc(a,e),o=jc(o),a=jc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+g+o,M=S+p+a,D=Yc(s,s.VERTEX_SHADER,y),C=Yc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,D),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(R){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(C).trim();let z=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,C);else{const Y=$c(s,D,"vertex"),H=$c(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Y+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||W==="")&&(k=!1);k&&(R.diagnostics={runnable:z,programLog:U,vertexShader:{log:F,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(D),s.deleteShader(C),E=new Qr(s,_),x=t_(s,_)}let E;this.getUniforms=function(){return E===void 0&&b(this),E};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Xg)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=C,this}let f_=0;class d_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new p_(t),e.set(t,i)),i}}class p_{constructor(t){this.id=f_++,this.code=t,this.usedTimes=0}}function m_(n,t,e,i,s,r,o){const a=new Zu,l=new d_,u=new Set,c=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return u.add(x),x===0?"uv":`uv${x}`}function g(x,v,R,U,F){const W=U.fog,z=F.geometry,k=x.isMeshStandardMaterial?U.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||k),H=Y&&Y.mapping===xo?Y.image.height:null,B=m[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const $=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,j=$!==void 0?$.length:0;let mt=0;z.morphAttributes.position!==void 0&&(mt=1),z.morphAttributes.normal!==void 0&&(mt=2),z.morphAttributes.color!==void 0&&(mt=3);let tt,q,st,ft;if(B){const le=En[B];tt=le.vertexShader,q=le.fragmentShader}else tt=x.vertexShader,q=x.fragmentShader,l.update(x),st=l.getVertexShaderID(x),ft=l.getFragmentShaderID(x);const ct=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,Ft=F.isBatchedMesh===!0,te=!!x.map,nt=!!x.matcap,ut=!!Y,L=!!x.aoMap,Pt=!!x.lightMap,ot=!!x.bumpMap,wt=!!x.normalMap,ht=!!x.displacementMap,zt=!!x.emissiveMap,vt=!!x.metalnessMap,P=!!x.roughnessMap,w=x.anisotropy>0,V=x.clearcoat>0,K=x.dispersion>0,rt=x.iridescence>0,J=x.sheen>0,Ct=x.transmission>0,pt=w&&!!x.anisotropyMap,St=V&&!!x.clearcoatMap,$t=V&&!!x.clearcoatNormalMap,lt=V&&!!x.clearcoatRoughnessMap,bt=rt&&!!x.iridescenceMap,Ot=rt&&!!x.iridescenceThicknessMap,Bt=J&&!!x.sheenColorMap,Tt=J&&!!x.sheenRoughnessMap,Qt=!!x.specularMap,Wt=!!x.specularColorMap,de=!!x.specularIntensityMap,I=Ct&&!!x.transmissionMap,gt=Ct&&!!x.thicknessMap,Z=!!x.gradientMap,et=!!x.alphaMap,Mt=x.alphaTest>0,xt=!!x.alphaHash,Ht=!!x.extensions;let ye=oi;x.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ye=n.toneMapping);const ke={shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:tt,fragmentShader:q,defines:x.defines,customVertexShaderID:st,customFragmentShaderID:ft,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ft,batchingColor:Ft&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:vs,alphaToCoverage:!!x.alphaToCoverage,map:te,matcap:nt,envMap:ut,envMapMode:ut&&Y.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:Pt,bumpMap:ot,normalMap:wt,displacementMap:f&&ht,emissiveMap:zt,normalMapObjectSpace:wt&&x.normalMapType===_f,normalMapTangentSpace:wt&&x.normalMapType===Hu,metalnessMap:vt,roughnessMap:P,anisotropy:w,anisotropyMap:pt,clearcoat:V,clearcoatMap:St,clearcoatNormalMap:$t,clearcoatRoughnessMap:lt,dispersion:K,iridescence:rt,iridescenceMap:bt,iridescenceThicknessMap:Ot,sheen:J,sheenColorMap:Bt,sheenRoughnessMap:Tt,specularMap:Qt,specularColorMap:Wt,specularIntensityMap:de,transmission:Ct,transmissionMap:I,thicknessMap:gt,gradientMap:Z,opaque:x.transparent===!1&&x.blending===cs&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:Mt,alphaHash:xt,combine:x.combine,mapUv:te&&_(x.map.channel),aoMapUv:L&&_(x.aoMap.channel),lightMapUv:Pt&&_(x.lightMap.channel),bumpMapUv:ot&&_(x.bumpMap.channel),normalMapUv:wt&&_(x.normalMap.channel),displacementMapUv:ht&&_(x.displacementMap.channel),emissiveMapUv:zt&&_(x.emissiveMap.channel),metalnessMapUv:vt&&_(x.metalnessMap.channel),roughnessMapUv:P&&_(x.roughnessMap.channel),anisotropyMapUv:pt&&_(x.anisotropyMap.channel),clearcoatMapUv:St&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(x.sheenRoughnessMap.channel),specularMapUv:Qt&&_(x.specularMap.channel),specularColorMapUv:Wt&&_(x.specularColorMap.channel),specularIntensityMapUv:de&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:gt&&_(x.thicknessMap.channel),alphaMapUv:et&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(wt||w),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(te||et),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:mt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:te&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ze,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ht&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&x.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=u.has(1),ke.vertexUv2s=u.has(2),ke.vertexUv3s=u.has(3),u.clear(),ke}function p(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)v.push(R),v.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(S(v,x),y(v,x),v.push(n.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function S(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function y(x,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){const v=m[x.type];let R;if(v){const U=En[v];R=Ai.clone(U.uniforms)}else R=x.uniforms;return R}function D(x,v){let R;for(let U=0,F=c.length;U<F;U++){const W=c[U];if(W.cacheKey===v){R=W,++R.usedTimes;break}}return R===void 0&&(R=new h_(n,v,x,r),c.push(R)),R}function C(x){if(--x.usedTimes===0){const v=c.indexOf(x);c[v]=c[c.length-1],c.pop(),x.destroy()}}function b(x){l.remove(x)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:E}}function g_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function __(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function tu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function eu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,m,_,g){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function u(h,f){e.length>1&&e.sort(h||__),i.length>1&&i.sort(f||tu),s.length>1&&s.sort(f||tu)}function c(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function v_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new eu,n.set(i,[o])):s>=r.length?(o=new eu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function x_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Ut};break;case"SpotLight":e={position:new A,direction:new A,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function M_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let y_=0;function S_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function w_(n){const t=new x_,e=M_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new A);const s=new A,r=new jt,o=new jt;function a(u){let c=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,S=0,y=0,M=0,D=0,C=0,b=0;u.sort(S_);for(let x=0,v=u.length;x<v;x++){const R=u[x],U=R.color,F=R.intensity,W=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=U.r*F,h+=U.g*F,f+=U.b*F;else if(R.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],F);b++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,H=e.get(R);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=z,i.directionalShadowMatrix[d]=R.shadow.matrix,S++}i.directional[d]=k,d++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(U).multiplyScalar(F),k.distance=W,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[_]=k;const Y=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,Y.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[_]=Y.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=z,M++}_++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(U).multiplyScalar(F),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=k,g++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const Y=R.shadow,H=e.get(R);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=R.shadow.matrix,y++}i.point[m]=k,m++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(F),k.groundColor.copy(R.groundColor).multiplyScalar(F),i.hemi[p]=k,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const E=i.hash;(E.directionalLength!==d||E.pointLength!==m||E.spotLength!==_||E.rectAreaLength!==g||E.hemiLength!==p||E.numDirectionalShadows!==S||E.numPointShadows!==y||E.numSpotShadows!==M||E.numSpotMaps!==D||E.numLightProbes!==b)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,E.directionalLength=d,E.pointLength=m,E.spotLength=_,E.rectAreaLength=g,E.hemiLength=p,E.numDirectionalShadows=S,E.numPointShadows=y,E.numSpotShadows=M,E.numSpotMaps=D,E.numLightProbes=b,i.version=y_++)}function l(u,c){let h=0,f=0,d=0,m=0,_=0;const g=c.matrixWorldInverse;for(let p=0,S=u.length;p<S;p++){const y=u[p];if(y.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(y.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function nu(n){const t=new w_(n),e=[],i=[];function s(c){u.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function E_(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new nu(n),t.set(s,[a])):r>=o.length?(a=new nu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function A_(n,t,e){let i=new Tl;const s=new Q,r=new Q,o=new ae,a=new Jd({depthPacking:gf}),l=new jd,u={},c=e.maxTextureSize,h={[ai]:We,[We]:ai,[ze]:ze},f=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:b_,fragmentShader:T_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new _e;m.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let p=this.type;this.render=function(C,b,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const x=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Wn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==Bn&&this.type===Bn,W=p===Bn&&this.type!==Bn;for(let z=0,k=C.length;z<k;z++){const Y=C[z],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const B=H.getFrameExtents();if(s.multiply(B),r.copy(H.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/B.x),s.x=r.x*B.x,H.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/B.y),s.y=r.y*B.y,H.mapSize.y=r.y)),H.map===null||F===!0||W===!0){const j=this.type!==Bn?{minFilter:rn,magFilter:rn}:{};H.map!==null&&H.map.dispose(),H.map=new pn(s.x,s.y,j),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const $=H.getViewportCount();for(let j=0;j<$;j++){const mt=H.getViewport(j);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),U.viewport(o),H.updateMatrices(Y,j),i=H.getFrustum(),M(b,E,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Bn&&S(H,E),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(x,v,R)};function S(C,b){const E=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,E,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,E,d,_,null)}function y(C,b,E,x){let v=null;const R=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)v=R;else if(v=E.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=v.uuid,F=b.uuid;let W=u[U];W===void 0&&(W={},u[U]=W);let z=W[F];z===void 0&&(z=v.clone(),W[F]=z,b.addEventListener("dispose",D)),v=z}if(v.visible=b.visible,v.wireframe=b.wireframe,x===Bn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,E.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=n.properties.get(v);U.light=E}return v}function M(C,b,E,x,v){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===Bn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const F=t.update(C),W=C.material;if(Array.isArray(W)){const z=F.groups;for(let k=0,Y=z.length;k<Y;k++){const H=z[k],B=W[H.materialIndex];if(B&&B.visible){const $=y(C,B,x,v);C.onBeforeShadow(n,C,b,E,F,$,H),n.renderBufferDirect(E,null,F,$,C,H),C.onAfterShadow(n,C,b,E,F,$,H)}}}else if(W.visible){const z=y(C,W,x,v);C.onBeforeShadow(n,C,b,E,F,z,null),n.renderBufferDirect(E,null,F,z,C,null),C.onAfterShadow(n,C,b,E,F,z,null)}}const U=C.children;for(let F=0,W=U.length;F<W;F++)M(U[F],b,E,x,v)}function D(C){C.target.removeEventListener("dispose",D);for(const E in u){const x=u[E],v=C.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const R_={[ya]:Sa,[wa]:Ta,[Ea]:Aa,[ds]:ba,[Sa]:ya,[Ta]:wa,[Aa]:Ea,[ba]:ds};function C_(n,t){function e(){let I=!1;const gt=new ae;let Z=null;const et=new ae(0,0,0,0);return{setMask:function(Mt){Z!==Mt&&!I&&(n.colorMask(Mt,Mt,Mt,Mt),Z=Mt)},setLocked:function(Mt){I=Mt},setClear:function(Mt,xt,Ht,ye,ke){ke===!0&&(Mt*=ye,xt*=ye,Ht*=ye),gt.set(Mt,xt,Ht,ye),et.equals(gt)===!1&&(n.clearColor(Mt,xt,Ht,ye),et.copy(gt))},reset:function(){I=!1,Z=null,et.set(-1,0,0,0)}}}function i(){let I=!1,gt=!1,Z=null,et=null,Mt=null;return{setReversed:function(xt){if(gt!==xt){const Ht=t.get("EXT_clip_control");gt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const ye=Mt;Mt=null,this.setClear(ye)}gt=xt},getReversed:function(){return gt},setTest:function(xt){xt?ct(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(xt){Z!==xt&&!I&&(n.depthMask(xt),Z=xt)},setFunc:function(xt){if(gt&&(xt=R_[xt]),et!==xt){switch(xt){case ya:n.depthFunc(n.NEVER);break;case Sa:n.depthFunc(n.ALWAYS);break;case wa:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case Ea:n.depthFunc(n.EQUAL);break;case ba:n.depthFunc(n.GEQUAL);break;case Ta:n.depthFunc(n.GREATER);break;case Aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=xt}},setLocked:function(xt){I=xt},setClear:function(xt){Mt!==xt&&(gt&&(xt=1-xt),n.clearDepth(xt),Mt=xt)},reset:function(){I=!1,Z=null,et=null,Mt=null,gt=!1}}}function s(){let I=!1,gt=null,Z=null,et=null,Mt=null,xt=null,Ht=null,ye=null,ke=null;return{setTest:function(le){I||(le?ct(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(le){gt!==le&&!I&&(n.stencilMask(le),gt=le)},setFunc:function(le,mn,Un){(Z!==le||et!==mn||Mt!==Un)&&(n.stencilFunc(le,mn,Un),Z=le,et=mn,Mt=Un)},setOp:function(le,mn,Un){(xt!==le||Ht!==mn||ye!==Un)&&(n.stencilOp(le,mn,Un),xt=le,Ht=mn,ye=Un)},setLocked:function(le){I=le},setClear:function(le){ke!==le&&(n.clearStencil(le),ke=le)},reset:function(){I=!1,gt=null,Z=null,et=null,Mt=null,xt=null,Ht=null,ye=null,ke=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,u=new WeakMap;let c={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,y=null,M=null,D=null,C=null,b=new Ut(0,0,0),E=0,x=!1,v=null,R=null,U=null,F=null,W=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=Y>=2);let B=null,$={};const j=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),tt=new ae().fromArray(j),q=new ae().fromArray(mt);function st(I,gt,Z,et){const Mt=new Uint8Array(4),xt=n.createTexture();n.bindTexture(I,xt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<Z;Ht++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,Mt):n.texImage2D(gt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Mt);return xt}const ft={};ft[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(n.DEPTH_TEST),o.setFunc(ds),ot(!1),wt($l),ct(n.CULL_FACE),L(Wn);function ct(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function Rt(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Dt(I,gt){return h[I]!==gt?(n.bindFramebuffer(I,gt),h[I]=gt,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ft(I,gt){let Z=d,et=!1;if(I){Z=f.get(gt),Z===void 0&&(Z=[],f.set(gt,Z));const Mt=I.textures;if(Z.length!==Mt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Ht=Mt.length;xt<Ht;xt++)Z[xt]=n.COLOR_ATTACHMENT0+xt;Z.length=Mt.length,et=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,et=!0);et&&n.drawBuffers(Z)}function te(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const nt={[vi]:n.FUNC_ADD,[Yh]:n.FUNC_SUBTRACT,[Zh]:n.FUNC_REVERSE_SUBTRACT};nt[$h]=n.MIN,nt[Kh]=n.MAX;const ut={[Jh]:n.ZERO,[jh]:n.ONE,[Qh]:n.SRC_COLOR,[xa]:n.SRC_ALPHA,[of]:n.SRC_ALPHA_SATURATE,[sf]:n.DST_COLOR,[ef]:n.DST_ALPHA,[tf]:n.ONE_MINUS_SRC_COLOR,[Ma]:n.ONE_MINUS_SRC_ALPHA,[rf]:n.ONE_MINUS_DST_COLOR,[nf]:n.ONE_MINUS_DST_ALPHA,[af]:n.CONSTANT_COLOR,[lf]:n.ONE_MINUS_CONSTANT_COLOR,[cf]:n.CONSTANT_ALPHA,[uf]:n.ONE_MINUS_CONSTANT_ALPHA};function L(I,gt,Z,et,Mt,xt,Ht,ye,ke,le){if(I===Wn){_===!0&&(Rt(n.BLEND),_=!1);return}if(_===!1&&(ct(n.BLEND),_=!0),I!==qh){if(I!==g||le!==x){if((p!==vi||M!==vi)&&(n.blendEquation(n.FUNC_ADD),p=vi,M=vi),le)switch(I){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bi:n.blendFunc(n.ONE,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,y=null,D=null,C=null,b.set(0,0,0),E=0,g=I,x=le}return}Mt=Mt||gt,xt=xt||Z,Ht=Ht||et,(gt!==p||Mt!==M)&&(n.blendEquationSeparate(nt[gt],nt[Mt]),p=gt,M=Mt),(Z!==S||et!==y||xt!==D||Ht!==C)&&(n.blendFuncSeparate(ut[Z],ut[et],ut[xt],ut[Ht]),S=Z,y=et,D=xt,C=Ht),(ye.equals(b)===!1||ke!==E)&&(n.blendColor(ye.r,ye.g,ye.b,ke),b.copy(ye),E=ke),g=I,x=!1}function Pt(I,gt){I.side===ze?Rt(n.CULL_FACE):ct(n.CULL_FACE);let Z=I.side===We;gt&&(Z=!Z),ot(Z),I.blending===cs&&I.transparent===!1?L(Wn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const et=I.stencilWrite;a.setTest(et),et&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),zt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ct(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function wt(I){I!==Wh?(ct(n.CULL_FACE),I!==R&&(I===$l?n.cullFace(n.BACK):I===Xh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),R=I}function ht(I){I!==U&&(k&&n.lineWidth(I),U=I)}function zt(I,gt,Z){I?(ct(n.POLYGON_OFFSET_FILL),(F!==gt||W!==Z)&&(n.polygonOffset(gt,Z),F=gt,W=Z)):Rt(n.POLYGON_OFFSET_FILL)}function vt(I){I?ct(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function P(I){I===void 0&&(I=n.TEXTURE0+z-1),B!==I&&(n.activeTexture(I),B=I)}function w(I,gt,Z){Z===void 0&&(B===null?Z=n.TEXTURE0+z-1:Z=B);let et=$[Z];et===void 0&&(et={type:void 0,texture:void 0},$[Z]=et),(et.type!==I||et.texture!==gt)&&(B!==Z&&(n.activeTexture(Z),B=Z),n.bindTexture(I,gt||ft[I]),et.type=I,et.texture=gt)}function V(){const I=$[B];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(I){tt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),tt.copy(I))}function Tt(I){q.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Qt(I,gt){let Z=u.get(gt);Z===void 0&&(Z=new WeakMap,u.set(gt,Z));let et=Z.get(I);et===void 0&&(et=n.getUniformBlockIndex(gt,I.name),Z.set(I,et))}function Wt(I,gt){const et=u.get(gt).get(I);l.get(gt)!==et&&(n.uniformBlockBinding(gt,et,I.__bindingPointIndex),l.set(gt,et))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},B=null,$={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,y=null,M=null,D=null,C=null,b=new Ut(0,0,0),E=0,x=!1,v=null,R=null,U=null,F=null,W=null,tt.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Rt,bindFramebuffer:Dt,drawBuffers:Ft,useProgram:te,setBlending:L,setMaterial:Pt,setFlipSided:ot,setCullFace:wt,setLineWidth:ht,setPolygonOffset:zt,setScissorTest:vt,activeTexture:P,bindTexture:w,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:rt,texImage2D:bt,texImage3D:Ot,updateUBOMapping:Qt,uniformBlockBinding:Wt,texStorage2D:$t,texStorage3D:lt,texSubImage2D:J,texSubImage3D:Ct,compressedTexSubImage2D:pt,compressedTexSubImage3D:St,scissor:Bt,viewport:Tt,reset:de}}function P_(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Q,c=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,w){return d?new OffscreenCanvas(P,w):ro("canvas")}function _(P,w,V){let K=1;const rt=vt(P);if((rt.width>V||rt.height>V)&&(K=V/Math.max(rt.width,rt.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(K*rt.width),Ct=Math.floor(K*rt.height);h===void 0&&(h=m(J,Ct));const pt=w?m(J,Ct):h;return pt.width=J,pt.height=Ct,pt.getContext("2d").drawImage(P,0,0,J,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+J+"x"+Ct+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(P,w,V,K,rt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=w;if(w===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),w===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),w===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),w===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),w===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),w===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),w===n.RGBA){const Ct=rt?io:ne.getTransfer(K);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Ct===ce?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(P,w){let V;return P?w===null||w===Ti||w===gs?V=n.DEPTH24_STENCIL8:w===An?V=n.DEPTH32F_STENCIL8:w===er&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ti||w===gs?V=n.DEPTH_COMPONENT24:w===An?V=n.DEPTH_COMPONENT32F:w===er&&(V=n.DEPTH_COMPONENT16),V}function D(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==rn&&P.minFilter!==Tn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function C(P){const w=P.target;w.removeEventListener("dispose",C),E(w),w.isVideoTexture&&c.delete(w)}function b(P){const w=P.target;w.removeEventListener("dispose",b),v(w)}function E(P){const w=i.get(P);if(w.__webglInit===void 0)return;const V=P.source,K=f.get(V);if(K){const rt=K[w.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&x(P),Object.keys(K).length===0&&f.delete(V)}i.remove(P)}function x(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const V=P.source,K=f.get(V);delete K[w.__cacheKey],o.memory.textures--}function v(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let rt=0;rt<w.__webglFramebuffer[K].length;rt++)n.deleteFramebuffer(w.__webglFramebuffer[K][rt]);else n.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)n.deleteFramebuffer(w.__webglFramebuffer[K]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=P.textures;for(let K=0,rt=V.length;K<rt;K++){const J=i.get(V[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[K])}i.remove(P)}let R=0;function U(){R=0}function F(){const P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function W(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function z(P,w){const V=i.get(P);if(P.isVideoTexture&&ht(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,P,w);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function k(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){q(V,P,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function Y(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){q(V,P,w);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function H(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){st(V,P,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}const B={[tr]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[Pa]:n.MIRRORED_REPEAT},$={[rn]:n.NEAREST,[pf]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Ro]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},j={[vf]:n.NEVER,[Ef]:n.ALWAYS,[xf]:n.LESS,[Gu]:n.LEQUAL,[Mf]:n.EQUAL,[wf]:n.GEQUAL,[yf]:n.GREATER,[Sf]:n.NOTEQUAL};function mt(P,w){if(w.type===An&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Tn||w.magFilter===Ro||w.magFilter===dr||w.magFilter===Si||w.minFilter===Tn||w.minFilter===Ro||w.minFilter===dr||w.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,B[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,B[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,B[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,$[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,$[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===rn||w.minFilter!==dr&&w.minFilter!==Si||w.type===An&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function tt(P,w){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",C));const K=w.source;let rt=f.get(K);rt===void 0&&(rt={},f.set(K,rt));const J=W(w);if(J!==P.__cacheKey){rt[J]===void 0&&(rt[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),rt[J].usedTimes++;const Ct=rt[P.__cacheKey];Ct!==void 0&&(rt[P.__cacheKey].usedTimes--,Ct.usedTimes===0&&x(w)),P.__cacheKey=J,P.__webglTexture=rt[J].texture}return V}function q(P,w,V){let K=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=n.TEXTURE_3D);const rt=tt(P,w),J=w.source;e.bindTexture(K,P.__webglTexture,n.TEXTURE0+V);const Ct=i.get(J);if(J.version!==Ct.__version||rt===!0){e.activeTexture(n.TEXTURE0+V);const pt=ne.getPrimaries(ne.workingColorSpace),St=w.colorSpace===si?null:ne.getPrimaries(w.colorSpace),$t=w.colorSpace===si||pt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let lt=_(w.image,!1,s.maxTextureSize);lt=zt(w,lt);const bt=r.convert(w.format,w.colorSpace),Ot=r.convert(w.type);let Bt=y(w.internalFormat,bt,Ot,w.colorSpace,w.isVideoTexture);mt(K,w);let Tt;const Qt=w.mipmaps,Wt=w.isVideoTexture!==!0,de=Ct.__version===void 0||rt===!0,I=J.dataReady,gt=D(w,lt);if(w.isDepthTexture)Bt=M(w.format===_s,w.type),de&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,Bt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Bt,lt.width,lt.height,0,bt,Ot,null));else if(w.isDataTexture)if(Qt.length>0){Wt&&de&&e.texStorage2D(n.TEXTURE_2D,gt,Bt,Qt[0].width,Qt[0].height);for(let Z=0,et=Qt.length;Z<et;Z++)Tt=Qt[Z],Wt?I&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,bt,Ot,Tt.data):e.texImage2D(n.TEXTURE_2D,Z,Bt,Tt.width,Tt.height,0,bt,Ot,Tt.data);w.generateMipmaps=!1}else Wt?(de&&e.texStorage2D(n.TEXTURE_2D,gt,Bt,lt.width,lt.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,bt,Ot,lt.data)):e.texImage2D(n.TEXTURE_2D,0,Bt,lt.width,lt.height,0,bt,Ot,lt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Wt&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Bt,Qt[0].width,Qt[0].height,lt.depth);for(let Z=0,et=Qt.length;Z<et;Z++)if(Tt=Qt[Z],w.format!==yn)if(bt!==null)if(Wt){if(I)if(w.layerUpdates.size>0){const Mt=Uc(Tt.width,Tt.height,w.format,w.type);for(const xt of w.layerUpdates){const Ht=Tt.data.subarray(xt*Mt/Tt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,xt,Tt.width,Tt.height,1,bt,Ht)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Tt.width,Tt.height,lt.depth,bt,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Bt,Tt.width,Tt.height,lt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Tt.width,Tt.height,lt.depth,bt,Ot,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Bt,Tt.width,Tt.height,lt.depth,0,bt,Ot,Tt.data)}else{Wt&&de&&e.texStorage2D(n.TEXTURE_2D,gt,Bt,Qt[0].width,Qt[0].height);for(let Z=0,et=Qt.length;Z<et;Z++)Tt=Qt[Z],w.format!==yn?bt!==null?Wt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,bt,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Bt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?I&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,bt,Ot,Tt.data):e.texImage2D(n.TEXTURE_2D,Z,Bt,Tt.width,Tt.height,0,bt,Ot,Tt.data)}else if(w.isDataArrayTexture)if(Wt){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Bt,lt.width,lt.height,lt.depth),I)if(w.layerUpdates.size>0){const Z=Uc(lt.width,lt.height,w.format,w.type);for(const et of w.layerUpdates){const Mt=lt.data.subarray(et*Z/lt.data.BYTES_PER_ELEMENT,(et+1)*Z/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,lt.width,lt.height,1,bt,Ot,Mt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Ot,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Bt,lt.width,lt.height,lt.depth,0,bt,Ot,lt.data);else if(w.isData3DTexture)Wt?(de&&e.texStorage3D(n.TEXTURE_3D,gt,Bt,lt.width,lt.height,lt.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Ot,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Bt,lt.width,lt.height,lt.depth,0,bt,Ot,lt.data);else if(w.isFramebufferTexture){if(de)if(Wt)e.texStorage2D(n.TEXTURE_2D,gt,Bt,lt.width,lt.height);else{let Z=lt.width,et=lt.height;for(let Mt=0;Mt<gt;Mt++)e.texImage2D(n.TEXTURE_2D,Mt,Bt,Z,et,0,bt,Ot,null),Z>>=1,et>>=1}}else if(Qt.length>0){if(Wt&&de){const Z=vt(Qt[0]);e.texStorage2D(n.TEXTURE_2D,gt,Bt,Z.width,Z.height)}for(let Z=0,et=Qt.length;Z<et;Z++)Tt=Qt[Z],Wt?I&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,bt,Ot,Tt):e.texImage2D(n.TEXTURE_2D,Z,Bt,bt,Ot,Tt);w.generateMipmaps=!1}else if(Wt){if(de){const Z=vt(lt);e.texStorage2D(n.TEXTURE_2D,gt,Bt,Z.width,Z.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Ot,lt)}else e.texImage2D(n.TEXTURE_2D,0,Bt,bt,Ot,lt);g(w)&&p(K),Ct.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function st(P,w,V){if(w.image.length!==6)return;const K=tt(P,w),rt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const J=i.get(rt);if(rt.version!==J.__version||K===!0){e.activeTexture(n.TEXTURE0+V);const Ct=ne.getPrimaries(ne.workingColorSpace),pt=w.colorSpace===si?null:ne.getPrimaries(w.colorSpace),St=w.colorSpace===si||Ct===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const $t=w.isCompressedTexture||w.image[0].isCompressedTexture,lt=w.image[0]&&w.image[0].isDataTexture,bt=[];for(let et=0;et<6;et++)!$t&&!lt?bt[et]=_(w.image[et],!0,s.maxCubemapSize):bt[et]=lt?w.image[et].image:w.image[et],bt[et]=zt(w,bt[et]);const Ot=bt[0],Bt=r.convert(w.format,w.colorSpace),Tt=r.convert(w.type),Qt=y(w.internalFormat,Bt,Tt,w.colorSpace),Wt=w.isVideoTexture!==!0,de=J.__version===void 0||K===!0,I=rt.dataReady;let gt=D(w,Ot);mt(n.TEXTURE_CUBE_MAP,w);let Z;if($t){Wt&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Qt,Ot.width,Ot.height);for(let et=0;et<6;et++){Z=bt[et].mipmaps;for(let Mt=0;Mt<Z.length;Mt++){const xt=Z[Mt];w.format!==yn?Bt!==null?Wt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,0,0,xt.width,xt.height,Bt,xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,Qt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,0,0,xt.width,xt.height,Bt,Tt,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,Qt,xt.width,xt.height,0,Bt,Tt,xt.data)}}}else{if(Z=w.mipmaps,Wt&&de){Z.length>0&&gt++;const et=vt(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Qt,et.width,et.height)}for(let et=0;et<6;et++)if(lt){Wt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,bt[et].width,bt[et].height,Bt,Tt,bt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Qt,bt[et].width,bt[et].height,0,Bt,Tt,bt[et].data);for(let Mt=0;Mt<Z.length;Mt++){const Ht=Z[Mt].image[et].image;Wt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,0,0,Ht.width,Ht.height,Bt,Tt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,Qt,Ht.width,Ht.height,0,Bt,Tt,Ht.data)}}else{Wt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Bt,Tt,bt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Qt,Bt,Tt,bt[et]);for(let Mt=0;Mt<Z.length;Mt++){const xt=Z[Mt];Wt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,0,0,Bt,Tt,xt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,Qt,Bt,Tt,xt.image[et])}}}g(w)&&p(n.TEXTURE_CUBE_MAP),J.__version=rt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ft(P,w,V,K,rt,J){const Ct=r.convert(V.format,V.colorSpace),pt=r.convert(V.type),St=y(V.internalFormat,Ct,pt,V.colorSpace),$t=i.get(w),lt=i.get(V);if(lt.__renderTarget=w,!$t.__hasExternalTextures){const bt=Math.max(1,w.width>>J),Ot=Math.max(1,w.height>>J);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,J,St,bt,Ot,w.depth,0,Ct,pt,null):e.texImage2D(rt,J,St,bt,Ot,0,Ct,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),wt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,rt,lt.__webglTexture,0,ot(w)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,rt,lt.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(P,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const K=w.depthTexture,rt=K&&K.isDepthTexture?K.type:null,J=M(w.stencilBuffer,rt),Ct=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=ot(w);wt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,J,w.width,w.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,J,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,J,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,P)}else{const K=w.textures;for(let rt=0;rt<K.length;rt++){const J=K[rt],Ct=r.convert(J.format,J.colorSpace),pt=r.convert(J.type),St=y(J.internalFormat,Ct,pt,J.colorSpace),$t=ot(w);V&&wt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t,St,w.width,w.height):wt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t,St,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,St,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const rt=K.__webglTexture,J=ot(w);if(w.depthTexture.format===us)wt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0);else if(w.depthTexture.format===_s)wt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Dt(P){const w=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const rt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",rt)};K.addEventListener("dispose",rt),w.__depthDisposeCallback=rt}w.__boundDepthTexture=K}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Rt(w.__webglFramebuffer,P)}else if(V){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=n.createRenderbuffer(),ct(w.__webglDepthbuffer[K],P,!1);else{const rt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ct(w.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(P,w,V){const K=i.get(P);w!==void 0&&ft(K.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Dt(P)}function te(P){const w=P.texture,V=i.get(P),K=i.get(w);P.addEventListener("dispose",b);const rt=P.textures,J=P.isWebGLCubeRenderTarget===!0,Ct=rt.length>1;if(Ct||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=w.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let St=0;St<w.mipmaps.length;St++)V.__webglFramebuffer[pt][St]=n.createFramebuffer()}else V.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<w.mipmaps.length;pt++)V.__webglFramebuffer[pt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let pt=0,St=rt.length;pt<St;pt++){const $t=i.get(rt[pt]);$t.__webglTexture===void 0&&($t.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&wt(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<rt.length;pt++){const St=rt[pt];V.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);const $t=r.convert(St.format,St.colorSpace),lt=r.convert(St.type),bt=y(St.internalFormat,$t,lt,St.colorSpace,P.isXRRenderTarget===!0),Ot=ot(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,bt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),mt(n.TEXTURE_CUBE_MAP,w);for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)ft(V.__webglFramebuffer[pt][St],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,St);else ft(V.__webglFramebuffer[pt],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(w)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let pt=0,St=rt.length;pt<St;pt++){const $t=rt[pt],lt=i.get($t);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),mt(n.TEXTURE_2D,$t),ft(V.__webglFramebuffer,P,$t,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),g($t)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,K.__webglTexture),mt(pt,w),w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)ft(V.__webglFramebuffer[St],P,w,n.COLOR_ATTACHMENT0,pt,St);else ft(V.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,pt,0);g(w)&&p(pt),e.unbindTexture()}P.depthBuffer&&Dt(P)}function nt(P){const w=P.textures;for(let V=0,K=w.length;V<K;V++){const rt=w[V];if(g(rt)){const J=S(P),Ct=i.get(rt).__webglTexture;e.bindTexture(J,Ct),p(J),e.unbindTexture()}}}const ut=[],L=[];function Pt(P){if(P.samples>0){if(wt(P)===!1){const w=P.textures,V=P.width,K=P.height;let rt=n.COLOR_BUFFER_BIT;const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(P),pt=w.length>1;if(pt)for(let St=0;St<w.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let St=0;St<w.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);const $t=i.get(w[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$t,0)}n.blitFramebuffer(0,0,V,K,0,0,V,K,rt,n.NEAREST),l===!0&&(ut.length=0,L.length=0,ut.push(n.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ut.push(J),L.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let St=0;St<w.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);const $t=i.get(w[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,$t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function ot(P){return Math.min(s.maxSamples,P.samples)}function wt(P){const w=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ht(P){const w=o.render.frame;c.get(P)!==w&&(c.set(P,w),P.update())}function zt(P,w){const V=P.colorSpace,K=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==vs&&V!==si&&(ne.getTransfer(V)===ce?(K!==yn||rt!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function vt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Ft,this.setupRenderTarget=te,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=wt}function L_(n,t){function e(i,s=si){let r;const o=ne.getTransfer(s);if(i===qn)return n.UNSIGNED_BYTE;if(i===_l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uu)return n.BYTE;if(i===Iu)return n.SHORT;if(i===er)return n.UNSIGNED_SHORT;if(i===gl)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===Cn)return n.HALF_FLOAT;if(i===Fu)return n.ALPHA;if(i===Ou)return n.RGB;if(i===yn)return n.RGBA;if(i===zu)return n.LUMINANCE;if(i===Bu)return n.LUMINANCE_ALPHA;if(i===us)return n.DEPTH_COMPONENT;if(i===_s)return n.DEPTH_STENCIL;if(i===xl)return n.RED;if(i===Ml)return n.RED_INTEGER;if(i===ku)return n.RG;if(i===yl)return n.RG_INTEGER;if(i===Sl)return n.RGBA_INTEGER;if(i===Zr||i===$r||i===Kr||i===Jr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===La||i===Da||i===Ua||i===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Na||i===Fa||i===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Na||i===Fa)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===za||i===Ba||i===ka||i===Va||i===Ha||i===Ga||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===$a||i===Ka||i===Ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ba)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ha)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ya)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$a)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ja)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jr||i===ja||i===Qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===jr)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vu||i===tl||i===el||i===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===jr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const D_={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(u,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),d=.02,m=.005;u.inputState.pinching&&f>d+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=d-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
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

}`;class N_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Be({vertexShader:U_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F_ extends Es{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,d=null,m=null;const _=new N_,g=e.getContextAttributes();let p=null,S=null;const y=[],M=[],D=new Q;let C=null;const b=new Ke;b.viewport=new ae;const E=new Ke;E.viewport=new ae;const x=[b,E],v=new np;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=y[q];return st===void 0&&(st=new aa,y[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=y[q];return st===void 0&&(st=new aa,y[q]=st),st.getGripSpace()},this.getHand=function(q){let st=y[q];return st===void 0&&(st=new aa,y[q]=st),st.getHandSpace()};function F(q){const st=M.indexOf(q.inputSource);if(st===-1)return;const ft=y[st];ft!==void 0&&(ft.update(q.inputSource,q.frame,u||o),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",z);for(let q=0;q<y.length;q++){const st=M[q];st!==null&&(M[q]=null,y[q].disconnect(st))}R=null,U=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,S=null,tt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let ft=null,ct=null,Rt=null;g.depth&&(Rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=g.stencil?_s:us,ct=g.stencil?gs:Ti);const Dt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new pn(f.textureWidth,f.textureHeight,{format:yn,type:qn,depthTexture:new rh(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const ft={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new pn(d.framebufferWidth,d.framebufferHeight,{format:yn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(q){for(let st=0;st<q.removed.length;st++){const ft=q.removed[st],ct=M.indexOf(ft);ct>=0&&(M[ct]=null,y[ct].disconnect(ft))}for(let st=0;st<q.added.length;st++){const ft=q.added[st];let ct=M.indexOf(ft);if(ct===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=M.length){M.push(ft),ct=Dt;break}else if(M[Dt]===null){M[Dt]=ft,ct=Dt;break}if(ct===-1)break}const Rt=y[ct];Rt&&Rt.connect(ft)}}const k=new A,Y=new A;function H(q,st,ft){k.setFromMatrixPosition(st.matrixWorld),Y.setFromMatrixPosition(ft.matrixWorld);const ct=k.distanceTo(Y),Rt=st.projectionMatrix.elements,Dt=ft.projectionMatrix.elements,Ft=Rt[14]/(Rt[10]-1),te=Rt[14]/(Rt[10]+1),nt=(Rt[9]+1)/Rt[5],ut=(Rt[9]-1)/Rt[5],L=(Rt[8]-1)/Rt[0],Pt=(Dt[8]+1)/Dt[0],ot=Ft*L,wt=Ft*Pt,ht=ct/(-L+Pt),zt=ht*-L;if(st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(zt),q.translateZ(ht),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const vt=Ft+ht,P=te+ht,w=ot-zt,V=wt+(ct-zt),K=nt*te/P*vt,rt=ut*te/P*vt;q.projectionMatrix.makePerspective(w,V,K,rt,vt,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function B(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let st=q.near,ft=q.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),v.near=E.near=b.near=st,v.far=E.far=b.far=ft,(R!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,U=v.far),b.layers.mask=q.layers.mask|2,E.layers.mask=q.layers.mask|4,v.layers.mask=b.layers.mask|E.layers.mask;const ct=q.parent,Rt=v.cameras;B(v,ct);for(let Dt=0;Dt<Rt.length;Dt++)B(Rt[Dt],ct);Rt.length===2?H(v,b,E):v.projectionMatrix.copy(b.projectionMatrix),$(q,v,ct)};function $(q,st,ft){ft===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=nr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let j=null;function mt(q,st){if(c=st.getViewerPose(u||o),m=st,c!==null){const ft=c.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let ct=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let Dt=0;Dt<ft.length;Dt++){const Ft=ft[Dt];let te=null;if(d!==null)te=d.getViewport(Ft);else{const ut=h.getViewSubImage(f,Ft);te=ut.viewport,Dt===0&&(t.setRenderTargetTextures(S,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(S))}let nt=x[Dt];nt===void 0&&(nt=new Ke,nt.layers.enable(Dt),nt.viewport=new ae,x[Dt]=nt),nt.matrix.fromArray(Ft.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ft.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(te.x,te.y,te.width,te.height),Dt===0&&(v.matrix.copy(nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(nt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Dt=h.getDepthInformation(ft[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let ft=0;ft<y.length;ft++){const ct=M[ft],Rt=y[ft];ct!==null&&Rt!==void 0&&Rt.update(ct,st,u||o)}j&&j(q,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),m=null}const tt=new vh;tt.setAnimationLoop(mt),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}}const gi=new Sn,O_=new jt;function z_(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ju(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),c(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,S,y):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===We&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===We&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,M=S.envMapRotation;y&&(g.envMap.value=y,gi.copy(M),gi.x*=-1,gi.y*=-1,gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),g.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(gi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function B_(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const M=y.program;i.uniformBlockBinding(S,M)}function u(S,y){let M=s[S.id];M===void 0&&(m(S),M=c(S),s[S.id]=M,S.addEventListener("dispose",g));const D=y.program;i.updateUBOMapping(S,D);const C=t.render.frame;r[S.id]!==C&&(f(S),r[S.id]=C)}function c(S){const y=h();S.__bindingPointIndex=y;const M=n.createBuffer(),D=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=s[S.id],M=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,b=M.length;C<b;C++){const E=Array.isArray(M[C])?M[C]:[M[C]];for(let x=0,v=E.length;x<v;x++){const R=E[x];if(d(R,C,x,D)===!0){const U=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let z=0;z<F.length;z++){const k=F[z],Y=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,U+W,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,y,M,D){const C=S.value,b=y+"_"+M;if(D[b]===void 0)return typeof C=="number"||typeof C=="boolean"?D[b]=C:D[b]=C.clone(),!0;{const E=D[b];if(typeof C=="number"||typeof C=="boolean"){if(E!==C)return D[b]=C,!0}else if(E.equals(C)===!1)return E.copy(C),!0}return!1}function m(S){const y=S.uniforms;let M=0;const D=16;for(let b=0,E=y.length;b<E;b++){const x=Array.isArray(y[b])?y[b]:[y[b]];for(let v=0,R=x.length;v<R;v++){const U=x[v],F=Array.isArray(U.value)?U.value:[U.value];for(let W=0,z=F.length;W<z;W++){const k=F[W],Y=_(k),H=M%D,B=H%Y.boundary,$=H+B;M+=B,$!==0&&D-$<Y.storage&&(M+=D-$),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Y.storage}}}const C=M%D;return C>0&&(M+=D-C),S.__size=M,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){const y=S.target;y.removeEventListener("dispose",g);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:u,dispose:p}}class k_{constructor(t={}){const{canvas:e=Vf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=oi,this.toneMappingExposure=1;const M=this;let D=!1,C=0,b=0,E=null,x=-1,v=null;const R=new ae,U=new ae;let F=null;const W=new Ut(0);let z=0,k=e.width,Y=e.height,H=1,B=null,$=null;const j=new ae(0,0,k,Y),mt=new ae(0,0,k,Y);let tt=!1;const q=new Tl;let st=!1,ft=!1;this.transmissionResolutionScale=1;const ct=new jt,Rt=new jt,Dt=new A,Ft=new ae,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function ut(){return E===null?H:1}let L=i;function Pt(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),L===null){const N="webgl2";if(L=Pt(N,T),L===null)throw Pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ot,wt,ht,zt,vt,P,w,V,K,rt,J,Ct,pt,St,$t,lt,bt,Ot,Bt,Tt,Qt,Wt,de,I;function gt(){ot=new $m(L),ot.init(),Wt=new L_(L,ot),wt=new Gm(L,ot,t,Wt),ht=new C_(L,ot),wt.reverseDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),zt=new jm(L),vt=new g_,P=new P_(L,ot,ht,vt,wt,Wt,zt),w=new Xm(M),V=new Zm(M),K=new rp(L),de=new Vm(L,K),rt=new Km(L,K,zt,de),J=new tg(L,rt,K,zt),Bt=new Qm(L,wt,P),lt=new Wm(vt),Ct=new m_(M,w,V,ot,wt,de,lt),pt=new z_(M,vt),St=new v_,$t=new E_(ot),Ot=new km(M,w,V,ht,J,d,l),bt=new A_(M,J,wt),I=new B_(L,zt,wt,ht),Tt=new Hm(L,ot,zt),Qt=new Jm(L,ot,zt),zt.programs=Ct.programs,M.capabilities=wt,M.extensions=ot,M.properties=vt,M.renderLists=St,M.shadowMap=bt,M.state=ht,M.info=zt}gt();const Z=new F_(M,L);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(k,Y,!1))},this.getSize=function(T){return T.set(k,Y)},this.setSize=function(T,N,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,Y=N,e.width=Math.floor(T*H),e.height=Math.floor(N*H),G===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(k*H,Y*H).floor()},this.setDrawingBufferSize=function(T,N,G){k=T,Y=N,H=G,e.width=Math.floor(T*G),e.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,N,G,X){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,N,G,X),ht.viewport(R.copy(j).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,N,G,X){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,N,G,X),ht.scissor(U.copy(mt).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(T){ht.setScissorTest(tt=T)},this.setOpaqueSort=function(T){B=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(T=!0,N=!0,G=!0){let X=0;if(T){let O=!1;if(E!==null){const at=E.texture.format;O=at===Sl||at===yl||at===Ml}if(O){const at=E.texture.type,_t=at===qn||at===Ti||at===er||at===gs||at===_l||at===vl,Et=Ot.getClearColor(),At=Ot.getClearAlpha(),kt=Et.r,Vt=Et.g,It=Et.b;_t?(m[0]=kt,m[1]=Vt,m[2]=It,m[3]=At,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=kt,_[1]=Vt,_[2]=It,_[3]=At,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}N&&(X|=L.DEPTH_BUFFER_BIT),G&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Ot.dispose(),St.dispose(),$t.dispose(),vt.dispose(),w.dispose(),V.dispose(),J.dispose(),de.dispose(),I.dispose(),Ct.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Hl),Z.removeEventListener("sessionend",Gl),ci.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const T=zt.autoReset,N=bt.enabled,G=bt.autoUpdate,X=bt.needsUpdate,O=bt.type;gt(),zt.autoReset=T,bt.enabled=N,bt.autoUpdate=G,bt.needsUpdate=X,bt.type=O}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ht(T){const N=T.target;N.removeEventListener("dispose",Ht),ye(N)}function ye(T){ke(T),vt.remove(T)}function ke(T){const N=vt.get(T).programs;N!==void 0&&(N.forEach(function(G){Ct.releaseProgram(G)}),T.isShaderMaterial&&Ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,X,O,at){N===null&&(N=te);const _t=O.isMesh&&O.matrixWorld.determinant()<0,Et=zh(T,N,G,X,O);ht.setMaterial(X,_t);let At=G.index,kt=1;if(X.wireframe===!0){if(At=rt.getWireframeAttribute(G),At===void 0)return;kt=2}const Vt=G.drawRange,It=G.attributes.position;let ee=Vt.start*kt,re=(Vt.start+Vt.count)*kt;at!==null&&(ee=Math.max(ee,at.start*kt),re=Math.min(re,(at.start+at.count)*kt)),At!==null?(ee=Math.max(ee,0),re=Math.min(re,At.count)):It!=null&&(ee=Math.max(ee,0),re=Math.min(re,It.count));const Te=re-ee;if(Te<0||Te===1/0)return;de.setup(O,X,Et,G,At);let Se,ie=Tt;if(At!==null&&(Se=K.get(At),ie=Qt,ie.setIndex(Se)),O.isMesh)X.wireframe===!0?(ht.setLineWidth(X.wireframeLinewidth*ut()),ie.setMode(L.LINES)):ie.setMode(L.TRIANGLES);else if(O.isLine){let Nt=X.linewidth;Nt===void 0&&(Nt=1),ht.setLineWidth(Nt*ut()),O.isLineSegments?ie.setMode(L.LINES):O.isLineLoop?ie.setMode(L.LINE_LOOP):ie.setMode(L.LINE_STRIP)}else O.isPoints?ie.setMode(L.POINTS):O.isSprite&&ie.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ie.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))ie.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Nt=O._multiDrawStarts,Oe=O._multiDrawCounts,oe=O._multiDrawCount,gn=At?K.get(At).bytesPerElement:1,Ii=vt.get(X).currentProgram.getUniforms();for(let en=0;en<oe;en++)Ii.setValue(L,"_gl_DrawID",en),ie.render(Nt[en]/gn,Oe[en])}else if(O.isInstancedMesh)ie.renderInstances(ee,Te,O.count);else if(G.isInstancedBufferGeometry){const Nt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Oe=Math.min(G.instanceCount,Nt);ie.renderInstances(ee,Te,Oe)}else ie.render(ee,Te)};function le(T,N,G){T.transparent===!0&&T.side===ze&&T.forceSinglePass===!1?(T.side=We,T.needsUpdate=!0,fr(T,N,G),T.side=ai,T.needsUpdate=!0,fr(T,N,G),T.side=ze):fr(T,N,G)}this.compile=function(T,N,G=null){G===null&&(G=T),p=$t.get(G),p.init(N),y.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const at=O.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const Et=at[_t];le(Et,G,O),X.add(Et)}else le(at,G,O),X.add(at)}),y.pop(),p=null,X},this.compileAsync=function(T,N,G=null){const X=this.compile(T,N,G);return new Promise(O=>{function at(){if(X.forEach(function(_t){vt.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){O(T);return}setTimeout(at,10)}ot.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let mn=null;function Un(T){mn&&mn(T)}function Hl(){ci.stop()}function Gl(){ci.start()}const ci=new vh;ci.setAnimationLoop(Un),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(T){mn=T,Z.setAnimationLoop(T),T===null?ci.stop():ci.start()},Z.addEventListener("sessionstart",Hl),Z.addEventListener("sessionend",Gl),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,N,E),p=$t.get(T,y.length),p.init(N),y.push(p),Rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Rt),ft=this.localClippingEnabled,st=lt.init(this.clippingPlanes,ft),g=St.get(T,S.length),g.init(),S.push(g),Z.enabled===!0&&Z.isPresenting===!0){const at=M.xr.getDepthSensingMesh();at!==null&&To(at,N,-1/0,M.sortObjects)}To(T,N,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(B,$),nt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,nt&&Ot.addToRenderList(g,T),this.info.render.frame++,st===!0&&lt.beginShadows();const G=p.state.shadowsArray;bt.render(G,T,N),st===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,O=g.transmissive;if(p.setupLights(),N.isArrayCamera){const at=N.cameras;if(O.length>0)for(let _t=0,Et=at.length;_t<Et;_t++){const At=at[_t];Xl(X,O,T,At)}nt&&Ot.render(T);for(let _t=0,Et=at.length;_t<Et;_t++){const At=at[_t];Wl(g,T,At,At.viewport)}}else O.length>0&&Xl(X,O,T,N),nt&&Ot.render(T),Wl(g,T,N);E!==null&&b===0&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(M,T,N),de.resetDefaultState(),x=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],st===!0&&lt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function To(T,N,G,X){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){X&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Rt);const _t=J.update(T),Et=T.material;Et.visible&&g.push(T,_t,Et,G,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const _t=J.update(T),Et=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ft.copy(_t.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(Rt)),Array.isArray(Et)){const At=_t.groups;for(let kt=0,Vt=At.length;kt<Vt;kt++){const It=At[kt],ee=Et[It.materialIndex];ee&&ee.visible&&g.push(T,_t,ee,G,Ft.z,It)}}else Et.visible&&g.push(T,_t,Et,G,Ft.z,null)}}const at=T.children;for(let _t=0,Et=at.length;_t<Et;_t++)To(at[_t],N,G,X)}function Wl(T,N,G,X){const O=T.opaque,at=T.transmissive,_t=T.transparent;p.setupLightsView(G),st===!0&&lt.setGlobalState(M.clippingPlanes,G),X&&ht.viewport(R.copy(X)),O.length>0&&hr(O,N,G),at.length>0&&hr(at,N,G),_t.length>0&&hr(_t,N,G),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Xl(T,N,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new pn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Cn:qn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const at=p.state.transmissionRenderTarget[X.id],_t=X.viewport||R;at.setSize(_t.z*M.transmissionResolutionScale,_t.w*M.transmissionResolutionScale);const Et=M.getRenderTarget();M.setRenderTarget(at),M.getClearColor(W),z=M.getClearAlpha(),z<1&&M.setClearColor(16777215,.5),M.clear(),nt&&Ot.render(G);const At=M.toneMapping;M.toneMapping=oi;const kt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),st===!0&&lt.setGlobalState(M.clippingPlanes,X),hr(T,G,X),P.updateMultisampleRenderTarget(at),P.updateRenderTargetMipmap(at),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let It=0,ee=N.length;It<ee;It++){const re=N[It],Te=re.object,Se=re.geometry,ie=re.material,Nt=re.group;if(ie.side===ze&&Te.layers.test(X.layers)){const Oe=ie.side;ie.side=We,ie.needsUpdate=!0,ql(Te,G,X,Se,ie,Nt),ie.side=Oe,ie.needsUpdate=!0,Vt=!0}}Vt===!0&&(P.updateMultisampleRenderTarget(at),P.updateRenderTargetMipmap(at))}M.setRenderTarget(Et),M.setClearColor(W,z),kt!==void 0&&(X.viewport=kt),M.toneMapping=At}function hr(T,N,G){const X=N.isScene===!0?N.overrideMaterial:null;for(let O=0,at=T.length;O<at;O++){const _t=T[O],Et=_t.object,At=_t.geometry,kt=X===null?_t.material:X,Vt=_t.group;Et.layers.test(G.layers)&&ql(Et,N,G,At,kt,Vt)}}function ql(T,N,G,X,O,at){T.onBeforeRender(M,N,G,X,O,at),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(M,N,G,X,T,at),O.transparent===!0&&O.side===ze&&O.forceSinglePass===!1?(O.side=We,O.needsUpdate=!0,M.renderBufferDirect(G,N,X,O,T,at),O.side=ai,O.needsUpdate=!0,M.renderBufferDirect(G,N,X,O,T,at),O.side=ze):M.renderBufferDirect(G,N,X,O,T,at),T.onAfterRender(M,N,G,X,O,at)}function fr(T,N,G){N.isScene!==!0&&(N=te);const X=vt.get(T),O=p.state.lights,at=p.state.shadowsArray,_t=O.state.version,Et=Ct.getParameters(T,O.state,at,N,G),At=Ct.getProgramCacheKey(Et);let kt=X.programs;X.environment=T.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(T.isMeshStandardMaterial?V:w).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",Ht),kt=new Map,X.programs=kt);let Vt=kt.get(At);if(Vt!==void 0){if(X.currentProgram===Vt&&X.lightsStateVersion===_t)return Zl(T,Et),Vt}else Et.uniforms=Ct.getUniforms(T),T.onBeforeCompile(Et,M),Vt=Ct.acquireProgram(Et,At),kt.set(At,Vt),X.uniforms=Et.uniforms;const It=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=lt.uniform),Zl(T,Et),X.needsLights=kh(T),X.lightsStateVersion=_t,X.needsLights&&(It.ambientLightColor.value=O.state.ambient,It.lightProbe.value=O.state.probe,It.directionalLights.value=O.state.directional,It.directionalLightShadows.value=O.state.directionalShadow,It.spotLights.value=O.state.spot,It.spotLightShadows.value=O.state.spotShadow,It.rectAreaLights.value=O.state.rectArea,It.ltc_1.value=O.state.rectAreaLTC1,It.ltc_2.value=O.state.rectAreaLTC2,It.pointLights.value=O.state.point,It.pointLightShadows.value=O.state.pointShadow,It.hemisphereLights.value=O.state.hemi,It.directionalShadowMap.value=O.state.directionalShadowMap,It.directionalShadowMatrix.value=O.state.directionalShadowMatrix,It.spotShadowMap.value=O.state.spotShadowMap,It.spotLightMatrix.value=O.state.spotLightMatrix,It.spotLightMap.value=O.state.spotLightMap,It.pointShadowMap.value=O.state.pointShadowMap,It.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Vt,X.uniformsList=null,Vt}function Yl(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Qr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Zl(T,N){const G=vt.get(T);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function zh(T,N,G,X,O){N.isScene!==!0&&(N=te),P.resetTextureUnits();const at=N.fog,_t=X.isMeshStandardMaterial?N.environment:null,Et=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:vs,At=(X.isMeshStandardMaterial?V:w).get(X.envMap||_t),kt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!G.morphAttributes.position,ee=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let Te=oi;X.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Te=M.toneMapping);const Se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=Se!==void 0?Se.length:0,Nt=vt.get(X),Oe=p.state.lights;if(st===!0&&(ft===!0||T!==v)){const Ye=T===v&&X.id===x;lt.setState(X,T,Ye)}let oe=!1;X.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Oe.state.version||Nt.outputColorSpace!==Et||O.isBatchedMesh&&Nt.batching===!1||!O.isBatchedMesh&&Nt.batching===!0||O.isBatchedMesh&&Nt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Nt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Nt.instancing===!1||!O.isInstancedMesh&&Nt.instancing===!0||O.isSkinnedMesh&&Nt.skinning===!1||!O.isSkinnedMesh&&Nt.skinning===!0||O.isInstancedMesh&&Nt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Nt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Nt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Nt.instancingMorph===!1&&O.morphTexture!==null||Nt.envMap!==At||X.fog===!0&&Nt.fog!==at||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==lt.numPlanes||Nt.numIntersection!==lt.numIntersection)||Nt.vertexAlphas!==kt||Nt.vertexTangents!==Vt||Nt.morphTargets!==It||Nt.morphNormals!==ee||Nt.morphColors!==re||Nt.toneMapping!==Te||Nt.morphTargetsCount!==ie)&&(oe=!0):(oe=!0,Nt.__version=X.version);let gn=Nt.currentProgram;oe===!0&&(gn=fr(X,N,O));let Ii=!1,en=!1,Rs=!1;const ge=gn.getUniforms(),ln=Nt.uniforms;if(ht.useProgram(gn.program)&&(Ii=!0,en=!0,Rs=!0),X.id!==x&&(x=X.id,en=!0),Ii||v!==T){ht.buffers.depth.getReversed()?(ct.copy(T.projectionMatrix),Gf(ct),Wf(ct),ge.setValue(L,"projectionMatrix",ct)):ge.setValue(L,"projectionMatrix",T.projectionMatrix),ge.setValue(L,"viewMatrix",T.matrixWorldInverse);const Je=ge.map.cameraPosition;Je!==void 0&&Je.setValue(L,Dt.setFromMatrixPosition(T.matrixWorld)),wt.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,en=!0,Rs=!0)}if(O.isSkinnedMesh){ge.setOptional(L,O,"bindMatrix"),ge.setOptional(L,O,"bindMatrixInverse");const Ye=O.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ge.setValue(L,"boneTexture",Ye.boneTexture,P))}O.isBatchedMesh&&(ge.setOptional(L,O,"batchingTexture"),ge.setValue(L,"batchingTexture",O._matricesTexture,P),ge.setOptional(L,O,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",O._indirectTexture,P),ge.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",O._colorsTexture,P));const cn=G.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Bt.update(O,G,gn),(en||Nt.receiveShadow!==O.receiveShadow)&&(Nt.receiveShadow=O.receiveShadow,ge.setValue(L,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ln.envMap.value=At,ln.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(ln.envMapIntensity.value=N.environmentIntensity),en&&(ge.setValue(L,"toneMappingExposure",M.toneMappingExposure),Nt.needsLights&&Bh(ln,Rs),at&&X.fog===!0&&pt.refreshFogUniforms(ln,at),pt.refreshMaterialUniforms(ln,X,H,Y,p.state.transmissionRenderTarget[T.id]),Qr.upload(L,Yl(Nt),ln,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qr.upload(L,Yl(Nt),ln,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(L,"center",O.center),ge.setValue(L,"modelViewMatrix",O.modelViewMatrix),ge.setValue(L,"normalMatrix",O.normalMatrix),ge.setValue(L,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ye=X.uniformsGroups;for(let Je=0,Ao=Ye.length;Je<Ao;Je++){const ui=Ye[Je];I.update(ui,gn),I.bind(ui,gn)}}return gn}function Bh(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function kh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,N,G){vt.get(T.texture).__webglTexture=N,vt.get(T.depthTexture).__webglTexture=G;const X=vt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const G=vt.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const Vh=L.createFramebuffer();this.setRenderTarget=function(T,N=0,G=0){E=T,C=N,b=G;let X=!0,O=null,at=!1,_t=!1;if(T){const At=vt.get(T);if(At.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(At.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(At.__hasExternalTextures)P.rebindTextures(T,vt.get(T.texture).__webglTexture,vt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const It=T.depthTexture;if(At.__boundDepthTexture!==It){if(It!==null&&vt.has(It)&&(T.width!==It.image.width||T.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(_t=!0);const Vt=vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[N])?O=Vt[N][G]:O=Vt[N],at=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?O=vt.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?O=Vt[G]:O=Vt,R.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest}else R.copy(j).multiplyScalar(H).floor(),U.copy(mt).multiplyScalar(H).floor(),F=tt;if(G!==0&&(O=Vh),ht.bindFramebuffer(L.FRAMEBUFFER,O)&&X&&ht.drawBuffers(T,O),ht.viewport(R),ht.scissor(U),ht.setScissorTest(F),at){const At=vt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,At.__webglTexture,G)}else if(_t){const At=vt.get(T.texture),kt=N;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.__webglTexture,G,kt)}else if(T!==null&&G!==0){const At=vt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,At.__webglTexture,G)}x=-1},this.readRenderTargetPixels=function(T,N,G,X,O,at,_t){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){ht.bindFramebuffer(L.FRAMEBUFFER,Et);try{const At=T.texture,kt=At.format,Vt=At.type;if(!wt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-X&&G>=0&&G<=T.height-O&&L.readPixels(N,G,X,O,Wt.convert(kt),Wt.convert(Vt),at)}finally{const At=E!==null?vt.get(E).__webglFramebuffer:null;ht.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(T,N,G,X,O,at,_t){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){const At=T.texture,kt=At.format,Vt=At.type;if(!wt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-X&&G>=0&&G<=T.height-O){ht.bindFramebuffer(L.FRAMEBUFFER,Et);const It=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),L.readPixels(N,G,X,O,Wt.convert(kt),Wt.convert(Vt),0);const ee=E!==null?vt.get(E).__webglFramebuffer:null;ht.bindFramebuffer(L.FRAMEBUFFER,ee);const re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hf(L,re,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at),L.deleteBuffer(It),L.deleteSync(re),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,G=0){T.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-G),O=Math.floor(T.image.width*X),at=Math.floor(T.image.height*X),_t=N!==null?N.x:0,Et=N!==null?N.y:0;P.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,_t,Et,O,at),ht.unbindTexture()};const Hh=L.createFramebuffer(),Gh=L.createFramebuffer();this.copyTextureToTexture=function(T,N,G=null,X=null,O=0,at=null){T.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],N=arguments[2],at=arguments[3]||0,G=null),at===null&&(O!==0?(ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=O,O=0):at=0);let _t,Et,At,kt,Vt,It,ee,re,Te;const Se=T.isCompressedTexture?T.mipmaps[at]:T.image;if(G!==null)_t=G.max.x-G.min.x,Et=G.max.y-G.min.y,At=G.isBox3?G.max.z-G.min.z:1,kt=G.min.x,Vt=G.min.y,It=G.isBox3?G.min.z:0;else{const cn=Math.pow(2,-O);_t=Math.floor(Se.width*cn),Et=Math.floor(Se.height*cn),T.isDataArrayTexture?At=Se.depth:T.isData3DTexture?At=Math.floor(Se.depth*cn):At=1,kt=0,Vt=0,It=0}X!==null?(ee=X.x,re=X.y,Te=X.z):(ee=0,re=0,Te=0);const ie=Wt.convert(N.format),Nt=Wt.convert(N.type);let Oe;N.isData3DTexture?(P.setTexture3D(N,0),Oe=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(P.setTexture2DArray(N,0),Oe=L.TEXTURE_2D_ARRAY):(P.setTexture2D(N,0),Oe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const oe=L.getParameter(L.UNPACK_ROW_LENGTH),gn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ii=L.getParameter(L.UNPACK_SKIP_PIXELS),en=L.getParameter(L.UNPACK_SKIP_ROWS),Rs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,It);const ge=T.isDataArrayTexture||T.isData3DTexture,ln=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const cn=vt.get(T),Ye=vt.get(N),Je=vt.get(cn.__renderTarget),Ao=vt.get(Ye.__renderTarget);ht.bindFramebuffer(L.READ_FRAMEBUFFER,Je.__webglFramebuffer),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ao.__webglFramebuffer);for(let ui=0;ui<At;ui++)ge&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(T).__webglTexture,O,It+ui),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(N).__webglTexture,at,Te+ui)),L.blitFramebuffer(kt,Vt,_t,Et,ee,re,_t,Et,L.DEPTH_BUFFER_BIT,L.NEAREST);ht.bindFramebuffer(L.READ_FRAMEBUFFER,null),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||T.isRenderTargetTexture||vt.has(T)){const cn=vt.get(T),Ye=vt.get(N);ht.bindFramebuffer(L.READ_FRAMEBUFFER,Hh),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,Gh);for(let Je=0;Je<At;Je++)ge?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,cn.__webglTexture,O,It+Je):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,cn.__webglTexture,O),ln?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ye.__webglTexture,at,Te+Je):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ye.__webglTexture,at),O!==0?L.blitFramebuffer(kt,Vt,_t,Et,ee,re,_t,Et,L.COLOR_BUFFER_BIT,L.NEAREST):ln?L.copyTexSubImage3D(Oe,at,ee,re,Te+Je,kt,Vt,_t,Et):L.copyTexSubImage2D(Oe,at,ee,re,kt,Vt,_t,Et);ht.bindFramebuffer(L.READ_FRAMEBUFFER,null),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ln?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Oe,at,ee,re,Te,_t,Et,At,ie,Nt,Se.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Oe,at,ee,re,Te,_t,Et,At,ie,Se.data):L.texSubImage3D(Oe,at,ee,re,Te,_t,Et,At,ie,Nt,Se):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,at,ee,re,_t,Et,ie,Nt,Se.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,at,ee,re,Se.width,Se.height,ie,Se.data):L.texSubImage2D(L.TEXTURE_2D,at,ee,re,_t,Et,ie,Nt,Se);L.pixelStorei(L.UNPACK_ROW_LENGTH,oe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ii),L.pixelStorei(L.UNPACK_SKIP_ROWS,en),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rs),at===0&&N.generateMipmaps&&L.generateMipmap(Oe),ht.unbindTexture()},this.copyTextureToTexture3D=function(T,N,G=null,X=null,O=0){return T.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,T=arguments[2],N=arguments[3],O=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,G,X,O)},this.initRenderTarget=function(T){vt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),ht.unbindTexture()},this.resetState=function(){C=0,b=0,E=null,ht.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class V_ extends eh{constructor(){super();const t=new pe;t.deleteAttribute("uv");const e=new qt({side:We}),i=new qt,s=new gh(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new it(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new it(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new it(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new it(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const u=new it(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);const c=new it(t,i);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const h=new it(t,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new it(t,ts(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new it(t,ts(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const m=new it(t,ts(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new it(t,ts(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new it(t,ts(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const p=new it(t,ts(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ts(n){const t=new Yn;return t.color.setScalar(n),t}const wh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class As{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const H_=new Ul(-1,1,1,-1,0,1);class G_ extends _e{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const W_=new G_;class Nl{constructor(t){this._mesh=new it(W_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,H_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class X_ extends As{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ai.clone(t.uniforms),this.material=new Be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Nl(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class iu extends As{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class q_ extends As{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Y_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Q);this._width=i.width,this._height=i.height,e=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new X_(wh),this.copyPass.material.blending=Wn,this.clock=new ip}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}iu!==void 0&&(o instanceof iu?i=!0:o instanceof q_&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Z_ extends As{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ut}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const $_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ss extends As{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new Ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(r,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new pn(r,o,{type:Cn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new pn(r,o,{type:Cn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=$_;this.highPassUniforms=Ai.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Be({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Q(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=wh;this.copyUniforms=Ai.clone(c.uniforms),this.blendMaterial=new Be({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:bi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ut,this.oldClearAlpha=1,this.basic=new Yn,this.fsQuad=new Nl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ss.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ss.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeparableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ss.BlurDirectionX=new Q(1,0);Ss.BlurDirectionY=new Q(0,1);const K_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class J_ extends As{constructor(){super();const t=K_;this.uniforms=Ai.clone(t.uniforms),this.material=new Kd({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Nl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Au?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ru?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ml&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function j_(){const n=new Set,t=new Set,e={forward:0,strafe:0,lookX:0,lookY:0};function i(){const s=(n.has("KeyW")||n.has("ArrowUp")?1:0)-(n.has("KeyS")||n.has("ArrowDown")?1:0),r=(n.has("KeyD")||n.has("ArrowRight")?1:0)-(n.has("KeyA")||n.has("ArrowLeft")?1:0);e.forward=s,e.strafe=r}return window.addEventListener("keydown",s=>{s.repeat||((s.code==="Space"||s.code==="ArrowUp"||s.code==="ArrowDown")&&s.preventDefault(),n.add(s.code),i(),(s.code==="Space"||s.code==="ShiftLeft"||s.code==="ShiftRight")&&t.add("dash"),(s.code==="KeyJ"||s.code==="KeyF")&&t.add("attack"),(s.code==="KeyK"||s.code==="KeyQ")&&t.add("parry"),(s.code==="Enter"||s.code==="Space")&&t.add("start"),s.code==="KeyR"&&t.add("restart"),s.code==="KeyH"&&t.add("hide"),s.code==="KeyP"&&t.add("pause"),s.code==="KeyM"&&t.add("mute"),s.code==="KeyC"&&t.add("debug"))}),window.addEventListener("keyup",s=>{n.delete(s.code),i()}),window.addEventListener("mousedown",s=>{s.button===0&&t.add("attack"),s.button===2&&t.add("parry")}),window.addEventListener("contextmenu",s=>s.preventDefault()),window.addEventListener("mousemove",s=>{e.lookX=s.clientX/window.innerWidth*2-1,e.lookY=s.clientY/window.innerHeight*2-1}),window.addEventListener("blur",()=>{n.clear(),i()}),{state:e,consume(){const s={attack:t.has("attack"),parry:t.has("parry"),dash:t.has("dash"),start:t.has("start"),restart:t.has("restart"),hide:t.has("hide"),pause:t.has("pause"),mute:t.has("mute"),debug:t.has("debug")};return t.clear(),s},clearEdges(){t.clear()},setHeld(s,r){e.forward=s,e.strafe=r}}}function su(n,t){const e=Math.floor(n.sampleRate*t),i=n.createBuffer(1,e,n.sampleRate),s=i.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return i}function Q_(n,t,e){const i=Math.floor(n.sampleRate*t),s=n.createBuffer(2,i,n.sampleRate);for(let r=0;r<2;r++){const o=s.getChannelData(r);for(let a=0;a<i;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/i,e)}return s}function ti(){}function tv(){let n;try{n=new AudioContext}catch{return{ensure:ti,whoosh:ti,cut:ti,clash:ti,finisher:ti,gust:ti,update(){},toggleMute:ti,muted:!0,setSlow:ti}}const t=n.createGain();t.gain.value=.85;const e=n.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=16,e.ratio.value=2.6,e.attack.value=.004,e.release.value=.18,t.connect(e),e.connect(n.destination);const i=n.createGain();i.gain.value=.2,i.connect(t);const s=n.createBufferSource();s.buffer=su(n,2),s.loop=!0;const r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=380;const o=n.createGain();o.gain.value=.32,s.connect(r),r.connect(o),o.connect(i),s.start();function a(b,E){const x=n.createOscillator();x.type="sine",x.frequency.value=b;const v=n.createGain();v.gain.value=E,x.connect(v),v.connect(i),x.start()}a(110,.045),a(164.81,.028),a(220,.016);const l=n.createConvolver();l.buffer=Q_(n,1.6,2.4);const u=n.createGain();u.gain.value=.28,l.connect(u),u.connect(i);const c=su(n,1.2);let h=!1,f=1.6,d=0;const m=[220,246.94,277.18,329.63,369.99];function _(b,E,x,v){const R=v??n.currentTime,U=n.createGain();return U.gain.setValueAtTime(1e-4,R),U.gain.exponentialRampToValueAtTime(Math.max(2e-4,E),R+b),U.gain.exponentialRampToValueAtTime(1e-4,R+x),{gain:U,t:R}}function g(b=1){const{gain:E,t:x}=_(.03,.22*b,.22),v=n.createBufferSource();v.buffer=c;const R=n.createBiquadFilter();R.type="bandpass",R.Q.value=.7,R.frequency.setValueAtTime(280,x),R.frequency.exponentialRampToValueAtTime(1900,x+.12),v.connect(R),R.connect(E),E.connect(t),v.start(x,Math.random()*.4),v.stop(x+.24)}function p(b,E,x){const v=n.currentTime;for(const R of b){const U=n.createOscillator();U.type="sine",U.frequency.setValueAtTime(R,v),U.frequency.exponentialRampToValueAtTime(R*.97,v+E);const{gain:F}=_(.005,x,E,v);U.connect(F),F.connect(t),U.start(v),U.stop(v+E+.02)}}function S(){p([140,210],.16,.12);const{gain:b,t:E}=_(.004,.18,.09),x=n.createBufferSource();x.buffer=c;const v=n.createBiquadFilter();v.type="highpass",v.frequency.value=900,x.connect(v),v.connect(b),b.connect(t),x.start(E,Math.random()),x.stop(E+.1)}function y(b){p(b?[210,430,860,1568,2093]:[180,360,720,1280],b?.55:.32,b?.1:.08);const{gain:E,t:x}=_(.002,b?.28:.2,.08),v=n.createBufferSource();v.buffer=c;const R=n.createBiquadFilter();R.type="highpass",R.frequency.value=1400,v.connect(R),R.connect(E),E.connect(t),v.start(x,Math.random()),v.stop(x+.09),b&&M(880,.07)}function M(b,E=.05){const x=n.currentTime,v=n.createOscillator();v.type="triangle",v.frequency.setValueAtTime(b,x);const R=n.createBiquadFilter();R.type="lowpass",R.frequency.setValueAtTime(b*5,x),R.frequency.exponentialRampToValueAtTime(Math.max(80,b*1.4),x+.28);const U=n.createGain();U.gain.setValueAtTime(1e-4,x),U.gain.exponentialRampToValueAtTime(E,x+.012),U.gain.exponentialRampToValueAtTime(1e-4,x+1.05),v.connect(R),R.connect(U),U.connect(i),U.connect(l),v.start(x),v.stop(x+1.1)}function D(){p([82,164,330,494],.9,.09),M(220,.08),M(330,.05),g(1.3)}function C(){r.frequency.setTargetAtTime(900,n.currentTime,.15),o.gain.setTargetAtTime(.55,n.currentTime,.1),window.setTimeout(()=>{n&&(r.frequency.setTargetAtTime(380,n.currentTime,.4),o.gain.setTargetAtTime(.32,n.currentTime,.4))},1400)}return{ensure(){n.state==="suspended"&&n.resume()},whoosh:g,cut:S,clash:y,finisher:D,gust:C,update(b){if(d+=b,d<f)return;d=0,f=1.8+Math.random()*2.4;const E=m[Math.random()*m.length|0];M(E,.045),Math.random()<.35&&M(E*1.5,.028)},toggleMute(){return h=!h,t.gain.setTargetAtTime(h?0:.85,n.currentTime,.05),h},setSlow(b){i.gain.setTargetAtTime(b?.08:.2,n.currentTime,.12)},get muted(){return h}}}function Eh(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new _e;let u=0;for(let c=0;c<n.length;++c){const h=n[c];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,d,c),u+=d}}if(e){let c=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+c);c+=n[f].attributes.position.count}l.setIndex(h)}for(const c in r){const h=ru(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[c].length;++_)d.push(o[c][_][f]);const m=ru(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(m)}}return l}function ru(n){let t,e,i,s=-1,r=0;for(let u=0;u<n.length;++u){const c=n[u];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}const o=new t(r),a=new Ne(o,e,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=c.count;f<d;f++)for(let m=0;m<e;m++){const _=c.getComponent(f,m);a.setComponent(f+h,m,_)}}else o.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}class ar extends it{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new Ke;const i=this,s=e.color!==void 0?new Ut(e.color):new Ut(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||ar.ReflectorShader,u=e.multisample!==void 0?e.multisample:4,c=new ni,h=new A,f=new A,d=new A,m=new jt,_=new A(0,0,-1),g=new ae,p=new A,S=new A,y=new ae,M=new jt,D=this.camera,C=new pn(r,o,{samples:u,type:Cn}),b=new Be({name:l.name!==void 0?l.name:"unspecified",uniforms:Ai.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});b.uniforms.tDiffuse.value=C.texture,b.uniforms.color.value=s,b.uniforms.textureMatrix.value=M,this.material=b,this.onBeforeRender=function(E,x,v){if(f.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(v.matrixWorld),m.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(m),p.subVectors(f,d),p.dot(h)>0)return;p.reflect(h).negate(),p.add(f),m.extractRotation(v.matrixWorld),_.set(0,0,-1),_.applyMatrix4(m),_.add(d),S.subVectors(f,_),S.reflect(h).negate(),S.add(f),D.position.copy(p),D.up.set(0,1,0),D.up.applyMatrix4(m),D.up.reflect(h),D.lookAt(S),D.far=v.far,D.updateMatrixWorld(),D.projectionMatrix.copy(v.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(D.projectionMatrix),M.multiply(D.matrixWorldInverse),M.multiply(i.matrixWorld),c.setFromNormalAndCoplanarPoint(h,f),c.applyMatrix4(D.matrixWorldInverse),g.set(c.normal.x,c.normal.y,c.normal.z,c.constant);const R=D.projectionMatrix;y.x=(Math.sign(g.x)+R.elements[8])/R.elements[0],y.y=(Math.sign(g.y)+R.elements[9])/R.elements[5],y.z=-1,y.w=(1+R.elements[10])/R.elements[14],g.multiplyScalar(2/g.dot(y)),R.elements[2]=g.x,R.elements[6]=g.y,R.elements[10]=g.z+1-a,R.elements[14]=g.w,i.visible=!1;const U=E.getRenderTarget(),F=E.xr.enabled,W=E.shadowMap.autoUpdate;E.xr.enabled=!1,E.shadowMap.autoUpdate=!1,E.setRenderTarget(C),E.state.buffers.depth.setMask(!0),E.autoClear===!1&&E.clear(),E.render(x,D),E.xr.enabled=F,E.shadowMap.autoUpdate=W,E.setRenderTarget(U);const z=v.viewport;z!==void 0&&E.state.viewport(z),i.visible=!0},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),i.material.dispose()}}}ar.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function ao(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}const lo=new A(.38,.8,.42).normalize(),co={value:new A},me={time:0,amp:.7,gust:0,dir:new A(.86,0,.22).normalize()},we={x:10.15,z:.15,rx:3.9,rz:3.2,y:.045},he={x0:6.05,x1:14.35,z:.15,half:.95,arch:.38},ev=15.35,li={x:0,z:5.2},nv={player:{hp:120,posture:84,speed:3.6,radius:.5,name:"Aoi"},ronin:{hp:84,posture:50,speed:2.8,radius:.52,reach:2.25,windup:.64,active:.16,recover:.48,damage:12,postureDmg:16,arc:1.9,name:"Ronin",keep:2.25,heavy:!1},spear:{hp:98,posture:58,speed:2.6,radius:.44,reach:3.3,windup:.72,active:.15,recover:.52,damage:15,postureDmg:18,arc:.8,name:"Spear Guard",keep:3.05,heavy:!1},boss:{hp:220,posture:96,speed:3,radius:.46,reach:2.32,windup:.52,active:.15,recover:.36,damage:14,postureDmg:17,arc:1.95,name:"Kuroha",keep:1.9,heavy:!1}},Pi=[];function ii(n,t,e){Pi.push({x:n,z:t,r:e})}function uo(n,t){if(Math.abs(t-he.z)<he.half&&n>he.x0&&n<he.x1){const e=(n-he.x0)/(he.x1-he.x0);return Math.sin(e*Math.PI)*he.arch}return 0}function iv(n,t){const e=(n-we.x)/we.rx,i=(t-we.z)/we.rz;return!(e*e+i*i>1||Math.abs(t-he.z)<he.half+.05&&n>he.x0-.3&&n<he.x1+.15)}function hl(n,t){for(let s=0;s<3;s++){for(let r=0;r<Pi.length;r++){const o=Pi[r],a=n.x-o.x,l=n.z-o.z,u=t+o.r,c=a*a+l*l;if(c<u*u){const h=Math.sqrt(c)||1e-4,f=(u-h)/h;n.x+=a*f,n.z+=l*f}}if(iv(n.x,n.z)){const r=n.x-we.x,o=n.z-we.z,a=Math.hypot(r,o)||1;n.x+=r/a*.22,n.z+=o/a*.22}}const e=ev-t,i=Math.hypot(n.x,n.z);i>e&&(n.x*=e/i,n.z*=e/i),n.y=uo(n.x,n.z)}function sv(n,t){const e=t.x-n.x,i=t.y-n.y,s=t.z-n.z;let r=1;for(let o=0;o<Pi.length;o++){const a=Pi[o],l=n.x-a.x,u=n.z-a.z,c=e*e+s*s;if(c<1e-6)continue;const h=2*(l*e+u*s),f=(a.r+.38)*(a.r+.38),d=l*l+u*u-f,m=h*h-4*c*d;if(m<0)continue;const _=(-h-Math.sqrt(m))/(2*c);_>.08&&_<r&&(r=_)}r<1&&t.set(n.x+e*r,n.y+i*r,n.z+s*r),t.y<.45&&(t.y=.45)}const ou=[{x:-7.6,z:-7.2,seed:3,height:8.6,trunk:.42,depth:4,lean:[.28,.06],weep:!0,flowers:1900,yaw:.35},{x:2.6,z:-13.4,seed:8,height:7.3,trunk:.3,depth:4,lean:[-.06,.14],flowers:1300,yaw:.2},{x:-3.8,z:-13.8,seed:12,height:6.7,trunk:.28,depth:3,lean:[.12,-.04],flowers:1100,yaw:-.4},{x:12.4,z:-3.6,seed:17,height:6.9,trunk:.28,depth:3,lean:[-.2,.02],flowers:1200,yaw:1.1},{x:-12.6,z:1.4,seed:21,height:6.5,trunk:.27,depth:3,lean:[.18,.08],flowers:1100,yaw:-.5},{x:-9.4,z:8.6,seed:28,height:5.9,trunk:.24,depth:3,lean:[.04,-.22],weep:!0,flowers:980,yaw:.7},{x:8.8,z:9.6,seed:33,height:5.5,trunk:.23,depth:3,lean:[-.12,.12],flowers:900,yaw:2.2},{x:14.2,z:4.8,seed:39,height:5.3,trunk:.22,depth:3,lean:[-.1,-.06],flowers:860,yaw:-1.2},{x:-16.5,z:-17.5,seed:44,height:7.6,trunk:.22,depth:3,lean:[.1,.08],flowers:380,yaw:.4,simple:!0},{x:7.5,z:-19.2,seed:49,height:8,trunk:.22,depth:3,lean:[-.04,.1],flowers:400,yaw:.9,simple:!0},{x:18.2,z:-11.5,seed:52,height:6.6,trunk:.18,depth:2,lean:[.02,.08],flowers:260,yaw:.3,simple:!0},{x:-18.4,z:-6.5,seed:57,height:6.9,trunk:.18,depth:2,lean:[.08,0],flowers:260,yaw:-.2,simple:!0}];function ri(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}const rv=`
float gHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float gNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = gHash(i);
  float b = gHash(i + vec2(1.0, 0.0));
  float c = gHash(i + vec2(0.0, 1.0));
  float d = gHash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float gFbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * gNoise(p);
    p *= 2.05;
    a *= 0.5;
  }
  return v;
}
uniform vec2 uCanopy[12];
uniform float uCanopyR[12];
vec3 gardenAlbedo(vec3 world) {
  vec2 p = world.xz;
  float n = gFbm(p * 0.16);
  float grain = gFbm(p * 1.8);
  vec3 moss = vec3(0.30, 0.40, 0.23);
  vec3 earth = vec3(0.38, 0.28, 0.18);
  vec3 gravel = vec3(0.78, 0.74, 0.66);
  vec3 pathCol = vec3(0.66, 0.63, 0.58);
  vec3 col = mix(earth, moss, smoothstep(0.42, 0.74, n));
  float court = 1.0 - smoothstep(6.15, 7.45, length(p));
  col = mix(col, gravel, court);
  float rings = sin(length(p) * 21.0) * 0.5 + 0.5;
  col *= 1.0 - court * rings * 0.045;
  col *= 1.0 + court * 0.08;
  float pathBand = (1.0 - smoothstep(1.15, 1.85, abs(p.x)))
    * smoothstep(4.7, 6.1, p.y) * (1.0 - smoothstep(16.2, 18.4, p.y));
  col = mix(col, pathCol, pathBand * 0.92);
  float blush = court * 0.42;
  float shade = 0.0;
  for (int i = 0; i < 12; i++) {
    float radius = uCanopyR[i];
    if (radius < 0.2) continue;
    float d = distance(p, uCanopy[i]);
    blush += (1.0 - smoothstep(radius * 0.15, radius, d)) * 0.75;
    shade += (1.0 - smoothstep(0.0, radius * 0.92, d)) * 0.2;
  }
  col *= 1.0 - clamp(shade, 0.0, 0.34);
  col = mix(col, vec3(0.90, 0.62, 0.68), clamp(blush, 0.0, 1.0) * 0.38);
  vec2 pond = (p - vec2(10.15, 0.15)) / vec2(4.3, 3.55);
  float shore = 1.0 - smoothstep(0.72, 1.15, dot(pond, pond));
  col = mix(col, col * vec3(0.62, 0.72, 0.7), shore * 0.55);
  col *= 0.92 + grain * 0.12;
  return col;
}
`;function ov(){const i=[],s=[],r=[],o=[];for(let d=0;d<=3;d++){const m=d/3,_=m*.09,g=.02*Math.sin(Math.PI*m)**.8;for(let p=0;p<=2;p++){const S=p/2,y=(S-.5)*2*g,M=y*y*18+Math.sin(m*Math.PI)*.006;i.push(y,_,M);const D=Math.abs(S-.5);s.push(1,.66+m*.3-D*.05,.72+m*.24),r.push(S,m)}}const a=3;for(let d=0;d<3;d++)for(let m=0;m<2;m++){const _=d*a+m;o.push(_,_+1,_+a,_+1,_+a+1,_+a)}const l=new _e;l.setAttribute("position",new Zt(i,3)),l.setAttribute("color",new Zt(s,3)),l.setAttribute("uv",new Zt(r,2)),l.setIndex(o),l.computeVertexNormals();const u=[];for(let d=0;d<5;d++){const m=l.clone();m.applyMatrix4(new jt().makeRotationZ(d/5*Math.PI*2)),u.push(m)}const c=new Ue(.011,8,6),h=c.attributes.position,f=new Float32Array(h.count*3);for(let d=0;d<h.count;d++)f[d*3]=.98,f[d*3+1]=.78,f[d*3+2]=.32;return c.setAttribute("color",new Ne(f,3)),c.translate(0,0,.008),u.push(c),Eh(u)}function av(n,t){const e=n.clone().normalize(),i=Math.abs(e.y)>.92?new A(1,0,0):new A(0,1,0),s=new A().crossVectors(i,e).normalize(),r=new A().crossVectors(e,s).normalize(),o=new Fe().setFromRotationMatrix(new jt().makeBasis(s,r,e));return o.multiply(new Fe().setFromAxisAngle(new A(0,0,1),t)),o}function lv(n,t,e,i){const s=new oh(n),r=Math.max(1,n.length-1),o=s.computeFrenetFrames(r,!1),a=s.getPoints(r),l=[],u=[],c=[],h=[];for(let m=0;m<a.length;m++){const _=m/(a.length-1),g=t+(e-t)*_,p=a[m],S=o.normals[m],y=o.binormals[m];for(let M=0;M<=i;M++){const D=M/i*Math.PI*2,C=Math.cos(D),b=Math.sin(D),E=new A(S.x*C+y.x*b,S.y*C+y.y*b,S.z*C+y.z*b).normalize(),x=Math.sin(p.y*10+D*3)*(.01+g*.045)+Math.sin(p.y*3.2+D)*g*.06,v=p.clone().addScaledVector(E,Math.max(.012,g+x));l.push(v.x,v.y,v.z),u.push(g),c.push(M/i,_)}}const f=i+1;for(let m=0;m<a.length-1;m++)for(let _=0;_<i;_++){const g=m*f+_;h.push(g,g+f,g+1,g+1,g+f,g+f+1)}const d=new _e;return d.setAttribute("position",new Zt(l,3)),d.setAttribute("aRad",new Zt(u,1)),d.setAttribute("uv",new Zt(c,2)),d.setIndex(h),d.computeVertexNormals(),d}function cv(n){const t=ao(n.seed),e=[],i=[],s=[],r=[],o=[];function a(c,h){const f=h<=0?.62:h===1?.38:.18,d=n.simple?2:1;for(let m=Math.floor(f*(c.length-1));m<c.length;m+=d){const _=c[m],g=c[Math.max(0,m-1)],S=c[Math.min(c.length-1,m+1)].clone().sub(g).normalize();let y=new A().crossVectors(S,new A(0,1,0));y.lengthSq()<1e-4&&y.set(1,0,0),y.normalize();const M=new A().crossVectors(S,y).normalize(),D=n.simple?2:3+(t()*4|0);for(let C=0;C<D;C++){if(t()<.08)continue;const b=t()*Math.PI*2,E=.08+t()*(.22+h*.07),x=_.clone().addScaledVector(y,Math.cos(b)*E).addScaledVector(M,Math.sin(b)*E*.9);if(n.weep&&h>=2?x.y-=t()*.12:x.y+=(t()-.35)*.08,x.y<.45)continue;const v=y.clone().multiplyScalar(Math.cos(b)).addScaledVector(M,Math.sin(b));v.y+=n.weep?-.25:.72,v.normalize();const R=(1.15+t()*1.05)*(n.weep?1.08:1),U=new Ut;t()<.4?U.setHSL(.97,.08+t()*.08,.92):t()<.18?U.setHSL(.95,.52,.6):U.setHSL(.96,.38+t()*.22,.74+t()*.12);const F={pos:x,quat:av(v,t()*Math.PI*2),scale:R,tint:U};t()<.12?s.push(F):i.push(F),h>=1&&t()<.34&&r.length<280&&r.push({pos:x.clone().addScaledVector(v,.05),quat:F.quat.clone(),scale:.42+t()*.38})}}}function l(c,h,f,d,m){const _=m===0?6:5,g=[c.clone()];let p=c.clone(),S=h.clone().normalize();for(let M=1;M<=_;M++){const D=M/_;m===0?S.lerp(new A(0,1,0),.14).normalize():m===1?(S.y=S.y*.5+.05,S.normalize()):(S.y*=.8,n.weep&&m>=2&&(S.y-=.14*D),S.normalize()),S.x+=(t()-.5)*(.28+m*.06),S.z+=(t()-.5)*(.28+m*.06),S.normalize(),p=p.clone().addScaledVector(S,f/_),g.push(p.clone())}if(e.push({pts:g,r0:d,r1:d*(m===0?.58:.42),radial:m===0?10:6}),a(g,m),m>=n.depth){o.push(p.clone());return}const y=m===0?n.simple?4:6:m===1?n.simple?2:3:2;for(let M=0;M<y;M++){const D=M/y*Math.PI*2+t()*.55+m,C=new A(Math.cos(D),0,Math.sin(D)),b=S.clone().lerp(C,m===0?.74:.8);b.y+=m===0?.38:.12,n.weep&&m>=1&&(b.y-=.08),b.normalize();const E=m===0?.4+M/y*.42:.28+t()*.5,x=g[Math.min(g.length-1,Math.floor(E*(g.length-1)))],v=f*(m===0?.82:.66)*(.84+t()*.28);l(x,b,v,d*(m===0?.4:.5),m+1)}}const u=new A(n.lean[0],1,n.lean[1]).normalize();l(new A(0,-.15,0),u,n.height*.36,n.trunk,0);for(let c=0;c<5;c++){const h=c/5*Math.PI*2+n.seed,f=new A(Math.cos(h),-.25,Math.sin(h)).normalize(),d=.75+t()*.55,m=new A(0,.18,0),_=m.clone().addScaledVector(f,d*.45);_.y=.1;const g=m.clone().addScaledVector(f,d);g.y=-.02,e.push({pts:[m,_,g],r0:n.trunk*.62,r1:n.trunk*.18,radial:6})}if(i.length>n.flowers){for(let c=i.length-1;c>0;c--){const h=t()*(c+1)|0,f=i[c];i[c]=i[h],i[h]=f}i.length=n.flowers}return{branches:e,flowers:i,buds:s,cards:r,tips:o}}function uv(n){const t=new qt({color:"#6a5c54",roughness:.9,metalness:0});return t.customProgramCacheKey=()=>"bark-sway-v1",t.onBeforeCompile=e=>{e.uniforms.uTime=n.time,e.uniforms.uWindAmp=n.amp,e.vertexShader=`attribute float aRad;
uniform float uTime;
uniform float uWindAmp;
varying float vRad;
varying vec3 vWpos;
${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       vRad = aRad;
       float flex = clamp(1.0 - aRad * 4.2, 0.0, 1.0);
       float sway = sin(uTime * 1.2 + position.y * 0.65) * uWindAmp;
       transformed.x += sway * flex * position.y * 0.014;
       transformed.z += cos(uTime * 1.05 + position.y * 0.5) * uWindAmp * flex * position.y * 0.011;
       vWpos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=`varying float vRad;
varying vec3 vWpos;
${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
       float stripe = sin(vWpos.y * 28.0 + vWpos.x * 4.0) * 0.5 + 0.5;
       diffuseColor.rgb *= mix(0.74, 1.06, stripe);
       float moss = smoothstep(1.15, 0.12, vWpos.y) * smoothstep(0.2, 0.045, vRad);
       diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.27, 0.34, 0.18), moss * 0.7);
       if (vRad < 0.055) diffuseColor.rgb *= vec3(0.62, 0.5, 0.48);`)},t}function hv(){const n=new qt({vertexColors:!0,roughness:.52,metalness:0,side:ze,emissive:new Ut("#ffd0dc"),emissiveIntensity:.08});return n.customProgramCacheKey=()=>"blossom-v1",n.onBeforeCompile=t=>{t.uniforms.uSunView=co,t.fragmentShader=`uniform vec3 uSunView;
${t.fragmentShader}`,t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       {
         float trans = pow(clamp(dot(-normal, normalize(uSunView)), 0.0, 1.0), 0.7);
         totalEmissiveRadiance += diffuseColor.rgb * trans * vec3(1.2, 0.8, 0.78);
       }`)},n}function fv(){const n=document.createElement("canvas");n.width=256,n.height=256;const t=n.getContext("2d"),e=ao(11),i=["#fff7f8","#ffe0e8","#ffc2d0","#fffdfd","#f7b0c0","#fff"];for(let r=0;r<18;r++){const o=28+e()*200,a=24+e()*208,l=11+e()*18;t.save(),t.translate(o,a),t.rotate(e()*Math.PI),t.fillStyle=i[r%i.length];for(let u=0;u<5;u++)t.rotate(Math.PI*2/5),t.beginPath(),t.ellipse(0,l*.52,l*.26,l*.58,0,0,Math.PI*2),t.fill();t.fillStyle="#f0d078",t.beginPath(),t.arc(0,0,l*.16,0,Math.PI*2),t.fill(),t.restore()}const s=new Al(n);return s.colorSpace=Ge,s}function dv(){return new Be({fog:!1,side:We,depthWrite:!1,uniforms:{uSun:{value:lo.clone()},uTime:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vDir = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      varying vec3 vDir;
      uniform vec3 uSun;
      uniform float uTime;
      float hsh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noi(vec2 p){
        vec2 i = floor(p); vec2 f = fract(p);
        float a = hsh(i), b = hsh(i+vec2(1.0,0.0)), c = hsh(i+vec2(0.0,1.0)), d = hsh(i+vec2(1.0,1.0));
        vec2 u = f*f*(3.0-2.0*f);
        return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
      }
      float fbm(vec2 p){
        float v=0.0,a=0.5;
        for(int i=0;i<4;i++){ v+=a*noi(p); p*=2.0; a*=0.5; }
        return v;
      }
      void main() {
        vec3 dir = normalize(vDir);
        float h = clamp(dir.y, 0.0, 1.0);
        vec3 zenith = vec3(0.49, 0.70, 0.90);
        vec3 horizon = vec3(0.95, 0.84, 0.78);
        vec3 col = mix(horizon, zenith, smoothstep(0.0, 0.55, h));
        float glow = pow(max(dot(dir, uSun), 0.0), 7.0);
        float sun = pow(max(dot(dir, uSun), 0.0), 1400.0);
        col += vec3(1.0, 0.93, 0.82) * glow * 0.38;
        col += vec3(1.0, 0.98, 0.94) * sun;
        float cloud = fbm(dir.xz / max(dir.y, 0.12) * 0.35 + vec2(uTime * 0.008, 0.0));
        float mask = smoothstep(0.52, 0.74, cloud) * smoothstep(0.02, 0.22, h);
        col = mix(col, vec3(1.0, 0.97, 0.96), mask * 0.5);
        gl_FragColor = vec4(col, 1.0);
      }`})}function pv(n){const t={time:{value:0},amp:{value:.7}},e=uv(t),i=hv(),s=new qt({color:"#e7899c",roughness:.55,emissive:"#7a3044",emissiveIntensity:.08}),r=ov(),o=new Ue(.018,7,6),a=new Ci(1,1),l=new qt({map:fv(),alphaTest:.35,side:ze,roughness:.62,color:"#fff0f3",emissive:new Ut("#ffd5de"),emissiveIntensity:.06}),u=[],c=[],h=[];let f=0;const d=Array.from({length:12},()=>new Q(0,0)),m=Array.from({length:12},()=>0);ou.forEach((b,E)=>{const x=cv(b),v=x.branches.map(z=>lv(z.pts,z.r0,z.r1,z.radial)),R=Eh(v),U=new Qe;U.position.set(b.x,0,b.z),U.rotation.y=b.yaw||0;const F=new it(R,e);if(F.castShadow=!0,F.receiveShadow=!0,U.add(F),x.flowers.length){const z=new fs(r,i,x.flowers.length);z.castShadow=!1,z.receiveShadow=!0,z.frustumCulled=!1;const k=new se;x.flowers.forEach((Y,H)=>{k.position.copy(Y.pos),k.quaternion.copy(Y.quat),k.scale.setScalar(Y.scale),k.updateMatrix(),z.setMatrixAt(H,k.matrix),z.setColorAt(H,Y.tint)}),z.instanceMatrix.needsUpdate=!0,z.instanceColor.needsUpdate=!0,U.add(z),f+=x.flowers.length}if(x.cards.length){const z=new fs(a,l,x.cards.length);z.frustumCulled=!1,z.castShadow=!1,z.receiveShadow=!0;const k=new se;x.cards.forEach((Y,H)=>{k.position.copy(Y.pos),k.quaternion.copy(Y.quat),k.scale.setScalar(Y.scale),k.updateMatrix(),z.setMatrixAt(H,k.matrix)}),U.add(z)}if(x.buds.length){const z=new fs(o,s,x.buds.length);z.frustumCulled=!1;const k=new se;x.buds.forEach((Y,H)=>{k.position.copy(Y.pos),k.scale.set(.7,1.25,.7),k.updateMatrix(),z.setMatrixAt(H,k.matrix)}),U.add(z)}n.add(U),U.updateMatrixWorld(!0);let W=1.2;for(const z of x.flowers)W=Math.max(W,Math.hypot(z.pos.x,z.pos.z));E<12&&(d[E].set(b.x,b.z),m[E]=W*.95),u.push({x:b.x,z:b.z,r:W*.95});for(const z of x.tips){const k=z.clone();k.applyMatrix4(U.matrixWorld),c.push(k)}ii(b.x,b.z,Math.max(.32,b.trunk*.9)),h.push({obj:U,seed:b.seed*.37,amount:b.simple?.004:.01,baseX:0,baseZ:0,speed:.85})});const _=new qt({color:"#ffffff",roughness:.94,metalness:0});_.customProgramCacheKey=()=>"garden-ground-v1",_.onBeforeCompile=b=>{b.uniforms.uCanopy={value:d},b.uniforms.uCanopyR={value:m},b.vertexShader=`varying vec3 vGardenWorld;
${b.vertexShader}`,b.vertexShader=b.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       vGardenWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),b.fragmentShader=`varying vec3 vGardenWorld;
${rv}
${b.fragmentShader}`,b.fragmentShader=b.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
       diffuseColor.rgb *= gardenAlbedo(vGardenWorld);`)};const g=new it(new Ci(130,130),_);g.rotation.x=-Math.PI/2,g.receiveShadow=!0,n.add(g);const p=dv(),S=new it(new Ue(180,32,20),p);n.add(S);const y=new qt({color:"#8f9a78",roughness:1}),M=new qt({color:"#c4b2a2",roughness:1});[[-28,-16,-42,20],[24,-18,-40,22],[0,-14,-48,18],[40,-12,-24,14]].forEach(([b,E,x,v],R)=>{const U=new it(new Ue(v,24,16),R%2?M:y);U.position.set(b,E,x),U.receiveShadow=!0,n.add(U)}),_v(n,h);const D=gv(n),C=new Qe;return C.visible=!1,n.add(C),{tips:c,canopies:u,pond:D,debug:C,skyMat:p,stats:{trees:ou.length,flowers:f,tips:c.length},update(b){me.time+=b,t.time.value=me.time,t.amp.value=me.amp,p.uniforms.uTime.value=me.time,D.material.uniforms.uTime&&(D.material.uniforms.uTime.value=me.time);for(const E of h){const x=Math.sin(me.time*E.speed+E.seed)*E.amount*me.amp;E.obj.rotation.x=(E.baseX||0)+Math.cos(me.time*.7+E.seed)*E.amount*.65*me.amp,E.obj.rotation.z=(E.baseZ||0)+x,E.baseY!=null&&(E.obj.rotation.y=E.baseY)}mv(b)},showDebug(b){C.clear();for(const E of b){const x=new it(new xe(E.r,E.r,1.4,10),new Yn({color:3794314,wireframe:!0}));x.position.set(E.x,.7,E.z),C.add(x)}C.visible=!0}}}const bh=[];function mv(n){for(const t of bh){t.a+=n*t.speed;const e=we.x+Math.cos(t.a)*t.rx,i=we.z+Math.sin(t.a*.92)*t.rz;t.mesh.position.set(e,.1+Math.sin(me.time*2+t.a)*.02,i),t.mesh.rotation.y=-t.a+Math.PI/2}}function gv(n){const t=ar.ReflectorShader,e={name:"PondShader",uniforms:{...Ai.clone(t.uniforms),uTime:{value:0}},vertexShader:t.vertexShader,fragmentShader:`
      uniform vec3 color;
      uniform sampler2D tDiffuse;
      uniform float uTime;
      varying vec4 vUv;
      #include <logdepthbuf_pars_fragment>
      void main() {
        #include <logdepthbuf_fragment>
        vec4 uv = vUv;
        float ripple = sin(uv.x * 48.0 + uTime * 1.3) * 0.006 + sin(uv.y * 36.0 - uTime) * 0.005;
        uv.xy += vec2(ripple, sin(uv.x * 22.0 + uTime * 0.8) * 0.004) * uv.w;
        vec4 base = texture2DProj(tDiffuse, uv);
        vec3 water = vec3(0.14, 0.32, 0.31);
        vec3 col = mix(water, base.rgb, 0.46);
        col = mix(col, vec3(0.95, 0.74, 0.76), 0.08);
        float glint = pow(max(base.r * 0.6 + base.g * 0.3, 0.0), 12.0);
        col += vec3(1.0, 0.95, 0.86) * glint * 0.18;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`},i=new ar(new cr(1,56),{shader:e,textureWidth:768,textureHeight:768,clipBias:.003,color:16777215,multisample:0});i.scale.set(we.rx,we.rz,1),i.rotation.x=-Math.PI/2,i.position.set(we.x,we.y,we.z),n.add(i);const s=new Mo(1,0),r=new qt({color:"#8d877e",roughness:.86}),o=new qt({color:"#5e6462",roughness:.55});for(let h=0;h<18;h++){const f=h/18*Math.PI*2,d=we.x+Math.cos(f)*(we.rx+.28),m=we.z+Math.sin(f)*(we.rz+.22);if(Math.abs(m-he.z)<1.15&&d<we.x+.4&&d>he.x0-.4)continue;const _=s.clone(),g=_.attributes.position;for(let S=0;S<g.count;S++)g.setXYZ(S,g.getX(S)*(.75+ri(h,S)*.5),g.getY(S)*(.45+ri(S,h)*.4),g.getZ(S)*(.7+ri(h+3,S)*.5));_.computeVertexNormals();const p=new it(_,h%3===0?o:r);p.position.set(d,.08,m),p.scale.setScalar(.28+ri(h,2)*.28),p.castShadow=!0,p.receiveShadow=!0,n.add(p),p.scale.x>.4&&ii(d,m,.32)}const a=new it(s,r);a.position.set(we.x+1.1,.05,we.z+.45),a.scale.set(.55,.32,.42),a.castShadow=!0,n.add(a);const l=new Ue(.16,10,8),u=new Ms(.06,.16,6),c=["#e07a3d","#f2f2f2","#d4543c"];for(let h=0;h<3;h++){const f=new Qe,d=new it(l,new qt({color:c[h],roughness:.4}));d.scale.set(1.7,.55,.7);const m=new it(u,d.material);m.rotation.z=Math.PI/2,m.position.x=-.24,f.add(d,m),n.add(f),bh.push({mesh:f,a:h*2.1,speed:.35+h*.08,rx:1.5+h*.35,rz:1.1+h*.2})}return i}function _v(n,t){const e=new qt({color:"#6d4c34",roughness:.78}),i=new qt({color:"#3c2a22",roughness:.8}),s=new qt({color:"#b7b1a6",roughness:.9}),r=new qt({color:"#7e7a72",roughness:.88}),o=new qt({color:"#b84336",roughness:.58}),a=new qt({color:"#1a1817",roughness:.45}),l=new qt({color:"#c6a15a",metalness:.6,roughness:.35}),u=new qt({color:"#4d6240",roughness:1}),c=(E,x,v,R,U,F,W,z=0,k=0,Y=0)=>{const H=new it(new pe(E,x,v),R);return H.position.set(U,F,W),H.rotation.set(z,k,Y),H.castShadow=!0,H.receiveShadow=!0,n.add(H),H},h=1.85;for(const E of[-1,1]){c(.32,4.7,.32,o,E*h,2.35,-15.6),c(.42,.18,.42,a,E*h,4.78,-15.6);const x=new it(new xe(.46,.5,.08,8),u);x.position.set(E*h,.04,-15.6),n.add(x),ii(E*h,-15.6,.38)}c(4.5,.28,.42,o,0,4.15,-15.6),c(5.15,.22,.55,a,0,4.48,-15.55),c(1.1,.7,.12,o,0,3.55,-15.35),c(.7,.16,.16,l,0,3.95,-15.28);for(let E=0;E<3;E++)c(3.2,.16,1.15,s,0,.08+E*.14,-14.2-E*.15);const f=(E,x)=>{c(.62,.22,.62,s,E,.11,x),c(.28,.7,.28,r,E,.55,x),c(.5,.38,.5,s,E,1.02,x);const v=new it(new pe(.28,.18,.04),new qt({color:"#ffb15a",emissive:"#ff9a3c",emissiveIntensity:1.4,roughness:.4}));v.position.set(E,1.02,x+.24),n.add(v);const R=new it(new Ms(.46,.28,4),r);R.position.set(E,1.36,x),R.rotation.y=Math.PI/4,R.castShadow=!0,n.add(R);const U=new gh("#ffb15a",1.1,5.5,2);U.position.set(E,1.15,x),n.add(U),ii(E,x,.36)};f(-2.35,7.15),f(2.45,6.7),f(6.35,2.15);const d=16;for(let E=0;E<d;E++){const x=(E+.5)/d,v=he.x0+(he.x1-he.x0)*x,R=Math.sin(x*Math.PI)*he.arch;c(.42,.06,1.7,E%2?e:i,v,R+.08,he.z)}for(const E of[-1,1]){const x=he.z+E*.78;for(let v=0;v<8;v++){const R=v/7,U=he.x0+(he.x1-he.x0)*R,F=Math.sin(R*Math.PI)*he.arch+.45;v%2===0&&(c(.08,.42,.08,i,U,F-.1,x),ii(U,x,.12))}c(he.x1-he.x0,.06,.06,e,(he.x0+he.x1)/2,.72,x,0,0,.04*E)}const m=new it(new xe(.34,.4,.28,10),s);m.position.set(2.5,.2,3.35),m.castShadow=!0,m.receiveShadow=!0,n.add(m);const _=new it(new xe(.24,.24,.06,10),new qt({color:"#6f8f8a",roughness:.2,metalness:.1}));_.position.set(2.5,.32,3.35),n.add(_),ii(2.5,3.35,.4);const g=[[-1.7,8.4],[1.5,8.5]];for(const[E,x]of g)c(.12,1.7,.12,i,E,.85,x),ii(E,x,.16);c(3.3,.08,.08,e,-.1,1.6,8.45);const p=new it(new Ci(1.3,.7,1,4),new qt({color:"#f3efe6",side:ze,roughness:.7}));p.position.set(-.1,1.22,8.45),n.add(p);const S=new it(new cr(.08,8),new qt({color:"#9a3d4a"}));S.position.set(-.1,1.22,8.48),n.add(S),t.push({obj:p,seed:2.2,amount:.12,baseX:0,baseZ:0,speed:1.6});const y=i;for(let E=0;E<14;E++){const x=-6+E*.85;x>-16&&x<-14.2||c(.08,.95,.9,y,-14.6,.48,x)}c(.1,.12,12,e,-14.6,.92,-1.2);const M=new qt({color:"#7f9a62",roughness:.55}),D=new qt({color:"#d7d2b2",roughness:.6});for(let E=0;E<34;E++){const x=-17.5+ri(E,4)*3.2,v=2+ri(E,9)*8,R=2.4+ri(E,1)*2.2,U=new it(new xe(.035,.05,R,6),M);U.position.set(x,R/2,v),U.castShadow=!0,n.add(U);const F=new it(new xe(.055,.055,.05,6),D);F.position.set(x,R*.45,v),n.add(F),t.push({obj:U,seed:E,amount:.02,baseX:0,baseZ:0,speed:1.1+ri(E,3)})}const C=ao(99);for(let E=0;E<18;E++){const x=6.2+E*.62,v=(C()-.5)*.7,R=c(.7+C()*.45,.08,.42+C()*.2,E%2?s:r,v,.04,x,0,C()*.4,0);R.castShadow=!1}for(let E=0;E<28;E++){const x=E/28*Math.PI*2,v=7.15;c(.55,.1,.32,r,Math.cos(x)*v,.05,Math.sin(x)*v,0,-x,0)}const b=ao(123);for(let E=0;E<16;E++){const x=b()*Math.PI*2,v=8.5+b()*6,R=Math.cos(x)*v,U=Math.sin(x)*v;if(Math.hypot(R-we.x,U-we.z)<4.2)continue;const F=new Mo(1,0),W=F.attributes.position;for(let Y=0;Y<W.count;Y++)W.setY(Y,W.getY(Y)*.55);F.computeVertexNormals();const z=new it(F,s),k=.25+b()*.45;z.scale.set(k,k*.6,k),z.position.set(R,k*.15,U),z.castShadow=!0,z.receiveShadow=!0,n.add(z),k>.45&&ii(R,U,k*.55)}}const Ce=1500,la=3600,es=140;function vv(){const i=[],s=[],r=[],o=[];for(let u=0;u<=3;u++){const c=u/3,h=c*1,f=.34*Math.sin(c*Math.PI)**.85;for(let d=0;d<=2;d++){const m=d/2,_=(m-.5)*2*f,g=_*_*.85+Math.sin(c*Math.PI)*.12;i.push(_,h-.5,g);const p=1-Math.abs(m-.5)*.35;s.push(1,(.62+c*.34)*p,.68+c*.28),r.push(m,c)}}const a=3;for(let u=0;u<3;u++)for(let c=0;c<2;c++){const h=u*a+c;o.push(h,h+1,h+a,h+1,h+a+1,h+a)}const l=new _e;return l.setAttribute("position",new Zt(i,3)),l.setAttribute("color",new Zt(s,3)),l.setAttribute("uv",new Zt(r,2)),l.setIndex(o),l.computeVertexNormals(),l}function xv(){const n=new qt({vertexColors:!0,roughness:.46,metalness:0,side:ze,emissive:new Ut("#ffd5df"),emissiveIntensity:.1});return n.customProgramCacheKey=()=>"petal-translucent-v1",n.onBeforeCompile=t=>{t.uniforms.uSunView=co,t.fragmentShader=`uniform vec3 uSunView;
${t.fragmentShader}`,t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       {
         float trans = pow(clamp(dot(-normal, normalize(uSunView)), 0.0, 1.0), 0.72);
         totalEmissiveRadiance += diffuseColor.rgb * trans * vec3(1.15, 0.78, 0.74);
       }`)},n}function ca(n,t=!1){const e=new Ut;return t?e.setHSL(.95,.5,.62):n()<.46?e.setHSL(.97,.1,.94):e.setHSL(.96,.42+n()*.2,.74+n()*.1),e}function Mv(n,t,e){const i=new Qe;i.name="petals",n.add(i);const s=vv(),r=xv(),o=new fs(s,r,Ce);o.frustumCulled=!1,o.receiveShadow=!0,o.castShadow=!1,i.add(o);const a=r.clone();a.onBeforeCompile=r.onBeforeCompile,a.customProgramCacheKey=()=>"petal-translucent-v1",a.polygonOffset=!0,a.polygonOffsetFactor=-2,a.polygonOffsetUnits=-2;const l=new fs(s,a,la);l.frustumCulled=!1,l.receiveShadow=!0,i.add(l);const u=new fs(s,r,es);u.frustumCulled=!1,i.add(u);const c=new se;new Ut;const h=()=>Math.random(),f=new Float32Array(Ce),d=new Float32Array(Ce),m=new Float32Array(Ce),_=new Float32Array(Ce),g=new Float32Array(Ce),p=new Float32Array(Ce),S=new Float32Array(Ce),y=new Float32Array(Ce),M=new Float32Array(Ce),D=new Float32Array(Ce),C=new Float32Array(Ce),b=new Uint8Array(Ce);function E(B,$){let j,mt;if(t.length&&h()<.38){const tt=t[h()*t.length|0];j=tt.x+(h()-.5)*2.4,mt=tt.z+(h()-.5)*2.4}else{const tt=h()*Math.PI*2,q=Math.sqrt(h())*15;j=Math.cos(tt)*q,mt=Math.sin(tt)*q}f[B]=j,m[B]=mt,d[B]=$?5.5+h()*7:h()*8,_[B]=(h()-.5)*.25,g[B]=-.25-h()*.35,p[B]=(h()-.5)*.25,S[B]=h()*Math.PI,y[B]=h()*Math.PI,M[B]=h()*Math.PI,D[B]=(h()-.5)*2.4,C[B]=.055+h()*.055,b[B]=0,o.setColorAt(B,ca(h))}for(let B=0;B<Ce;B++)E(B,!1);let x=0;const v=e.length?e:[{x:0,z:0,r:8}];let R=0;for(;x<la&&R<la*8;){R++;const B=h()*Math.PI*2,$=Math.sqrt(h())*16,j=Math.cos(B)*$,mt=Math.sin(B)*$;let tt=.18+(Math.hypot(j,mt)<7?.55:0);for(const st of v){const ft=Math.hypot(j-st.x,mt-st.z);ft<st.r&&(tt+=(1-ft/st.r)*1.1),j>st.x&&ft<st.r*.85&&(tt+=.35)}if(h()>Math.min(.92,tt*.42))continue;const q=uo(j,mt)+.02+h()*.025;c.position.set(j,q,mt),c.rotation.set(-Math.PI/2+(h()-.5)*.5,h()*Math.PI*2,(h()-.5)*.4),c.scale.setScalar(.05+h()*.05),c.updateMatrix(),l.setMatrixAt(x,c.matrix),l.setColorAt(x,ca(h,h()<.2)),x++}l.count=x,l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0;const U=new Float32Array(es),F=new Float32Array(es),W=new Float32Array(es);for(let B=0;B<es;B++){const $=h()*Math.PI*2,j=Math.sqrt(h())*.82;U[B]=Math.cos($)*j,F[B]=Math.sin($)*j,W[B]=h()*Math.PI*2,u.setColorAt(B,ca(h))}u.instanceColor.needsUpdate=!0;let z=0;const k=[{x:-1.2,z:-.4,r:3.2},{x:2.4,z:1.6,r:2.4}];function Y(){for(let B=0;B<Ce;B++)c.position.set(f[B],d[B],m[B]),c.rotation.set(S[B],y[B],M[B]),c.scale.setScalar(C[B]),c.updateMatrix(),o.setMatrixAt(B,c.matrix);o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0)}Y();function H(B,$,j){for(let mt=0;mt<j;mt++){let tt=z;for(let st=0;st<10;st++)if(z=(z+1)%Ce,d[z]<2.2){tt=z;break}f[tt]=B.x+(h()-.5)*.2,d[tt]=B.y+(h()-.5)*.15,m[tt]=B.z+(h()-.5)*.2;const q=.35;_[tt]=$.x*(.75+h()*.5)+(h()-.5)*q,g[tt]=$.y*.35+.4+h()*1.1,p[tt]=$.z*(.75+h()*.5)+(h()-.5)*q,D[tt]=(h()-.5)*8,C[tt]=.06+h()*.06,b[tt]=0}}return{root:i,emit:H,gust(B){for(let $=0;$<220;$++){const j=(z+$)%Ce,mt=t[h()*t.length|0];if(!mt)break;f[j]=mt.x+(h()-.5)*1.6,d[j]=mt.y-h()*.8,m[j]=mt.z+(h()-.5)*1.6,_[j]=B.x*(3.5+h()*3.2),g[j]=.3+h()*1.4,p[j]=B.z*(3.5+h()*3.2),D[j]=(h()-.5)*7,b[j]=0}},stir(B,$,j,mt){const tt=mt*mt;for(let q=0;q<Ce;q++){const st=f[q]-B.x,ft=d[q]-B.y,ct=m[q]-B.z,Rt=st*st+ft*ft+ct*ct;if(Rt>tt||Rt<1e-6)continue;const Dt=1-Math.sqrt(Rt)/mt;_[q]+=$.x*j*Dt,g[q]+=(.8+Math.abs($.y))*j*.28*Dt,p[q]+=$.z*j*Dt,D[q]+=j*.35}},update(B){const $=Math.max(0,me.gust);for(let tt=0;tt<Ce;tt++){const q=Math.sin(me.time*2.2+tt)*.35;_[tt]+=(me.dir.x*(.35+$*3.2)+q)*B,p[tt]+=(me.dir.z*(.35+$*3.2)+Math.cos(me.time*1.7+tt*.3)*.25)*B,g[tt]-=(.85+(1-$)*.25)*B;for(const ft of k){const ct=f[tt]-ft.x,Rt=m[tt]-ft.z,Dt=Math.hypot(ct,Rt);if(Dt>.2&&Dt<ft.r&&d[tt]<3.2&&d[tt]>.3){const Ft=(1-Dt/ft.r)*.55*B;_[tt]+=-Rt/Dt*Ft,p[tt]+=ct/Dt*Ft}}_[tt]*=1-B*.35,p[tt]*=1-B*.35,g[tt]=Math.max(-1.7,g[tt]),f[tt]+=_[tt]*B,d[tt]+=g[tt]*B,m[tt]+=p[tt]*B,S[tt]+=B*(1.2+D[tt]),y[tt]+=B*.7,M[tt]+=B*D[tt]*.35;const st=uo(f[tt],m[tt])+.03;d[tt]<=st&&(Math.abs(_[tt])+Math.abs(p[tt])>2.2&&b[tt]<1?(d[tt]=st+.04,g[tt]=Math.abs(g[tt])*.28+.4,_[tt]*=.55,p[tt]*=.55,b[tt]++):E(tt,!0))}Y();const j=10.15,mt=.15;for(let tt=0;tt<es;tt++){W[tt]+=B*.15;const q=j+U[tt]*3.5+Math.sin(me.time*.4+tt)*.08,st=mt+F[tt]*2.9+Math.cos(me.time*.35+tt)*.06;c.position.set(q,.07,st),c.rotation.set(-Math.PI/2+.15,W[tt],.2),c.scale.setScalar(.055),c.updateMatrix(),u.setMatrixAt(tt,c.matrix)}u.instanceMatrix.needsUpdate=!0}}}function yv(){const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const i=new Al(n);return i.colorSpace=Ge,i}const au={player:new Ut(1,.84,.86),ronin:new Ut(.74,.84,1),spear:new Ut(.7,.9,1),boss:new Ut(1,.84,.52)};function Sv(n){const e=new Float32Array(108),i=new Float32Array(144),s=new _e;s.setAttribute("position",new Ne(e,3)),s.setAttribute("color",new Ne(i,4));const r=[];for(let l=0;l<17;l++){const u=l*2;r.push(u,u+1,u+2,u+2,u+1,u+3)}s.setIndex(r),s.setDrawRange(0,0);const o=new Yn({vertexColors:!0,transparent:!0,blending:bi,depthWrite:!1,side:ze}),a=new it(s,o);return a.frustumCulled=!1,a.renderOrder=6,{mesh:a,geo:s,positions:e,colors:i,max:18,color:n,samples:[]}}function wv(n){const t=new Qe;t.name="effects",n.add(t);const e=72,i=new Float32Array(e*3),s=new Float32Array(e*3),r=new _e;r.setAttribute("position",new Ne(i,3)),r.setAttribute("color",new Ne(s,3));const o=new vd(r,new sh({size:.11,map:yv(),vertexColors:!0,transparent:!0,blending:bi,depthWrite:!1,sizeAttenuation:!0}));o.frustumCulled=!1,o.renderOrder=7,t.add(o);const a=Array.from({length:e},()=>({x:0,y:-20,z:0,vx:0,vy:0,vz:0,life:0,max:1,r:1,g:.8,b:.4})),l=new it(new ys(.55,.02,6,28),new Yn({color:16769442,transparent:!0,opacity:0,blending:bi,depthWrite:!1,side:ze}));l.renderOrder=6,t.add(l);let u=0;const c=new Map,h={amp:0,t:0};function f(m){let _=c.get(m.id);return _||(_=Sv(au[m.kind]||au.ronin),c.set(m.id,_),t.add(_.mesh)),_}function d(m){const _=m.samples,g=m.positions,p=m.colors,S=Math.min(_.length,m.max);for(let y=0;y<S;y++){const M=_[y];g.set([M.tip.x,M.tip.y,M.tip.z],y*6),g.set([M.base.x,M.base.y,M.base.z],y*6+3);const D=M.life*(1-y/Math.max(1,S)),C=m.color,b=y===0?1:.65;p.set([C.r*b,C.g*b,C.b*b,D],y*8),p.set([C.r*b,C.g*b,C.b*b,D*.85],y*8+4)}m.geo.attributes.position.needsUpdate=!0,m.geo.attributes.color.needsUpdate=!0,m.geo.setDrawRange(0,Math.max(0,(S-1)*6))}return{root:t,shake:h,addShake(m){h.amp=Math.min(.12,h.amp+m)},burst(m,_,g=18,p=4.5){const S=new Ut(_);let y=0;for(const M of a){if(M.life>0)continue;const D=Math.random()*Math.PI*2,C=Math.random()*Math.PI,b=p*(.35+Math.random());if(M.x=m.x,M.y=m.y,M.z=m.z,M.vx=Math.sin(C)*Math.cos(D)*b,M.vy=Math.abs(Math.cos(C))*b*.65+.6,M.vz=Math.sin(C)*Math.sin(D)*b,M.life=.18+Math.random()*.22,M.max=M.life,M.r=S.r,M.g=S.g,M.b=S.b,y++,y>=g)break}},ringAt(m,_){l.position.copy(m),_&&l.quaternion.copy(_),u=.32,l.material.opacity=.9,l.scale.setScalar(.4)},sync(m,_){const g=new Set;for(const p of m){if(!p.sword)continue;g.add(p.id);const S=f(p),y=p.swing.on||p.state==="attack"||p.state==="strike"||p.state==="parry"||p.state==="finisher";y&&(S.samples.unshift({tip:p.tip.clone(),base:p.base.clone(),life:1}),S.samples.length>16&&S.samples.pop());const M=y?3.1:7;for(const D of S.samples)D.life-=_*M;S.samples=S.samples.filter(D=>D.life>0),d(S)}for(const[p,S]of c)g.has(p)||(S.samples=[],d(S),t.remove(S.mesh),c.delete(p))},update(m){h.t+=m,h.amp*=Math.exp(-m*7);for(let _=0;_<a.length;_++){const g=a[_];if(g.life<=0){i[_*3+1]=-40,s[_*3]=0,s[_*3+1]=0,s[_*3+2]=0;continue}g.life-=m,g.vy-=9*m,g.x+=g.vx*m,g.y+=g.vy*m,g.z+=g.vz*m;const p=Math.max(0,g.life/g.max);i[_*3]=g.x,i[_*3+1]=g.y,i[_*3+2]=g.z,s[_*3]=g.r*p,s[_*3+1]=g.g*p,s[_*3+2]=g.b*p}if(r.attributes.position.needsUpdate=!0,r.attributes.color.needsUpdate=!0,u>0){u-=m;const _=1-u/.32;l.scale.setScalar(.4+_*2.4),l.material.opacity=Math.max(0,u/.32)*.85}},reset(){for(const[,m]of c)t.remove(m.mesh),m.geo.dispose();c.clear();for(const m of a)m.life=0}}}const ho=new A(0,1,0),lu=new se,ua=new A,cu=new A,ha=new A,uu=new Fe;function ws(n){return Math.atan2(-n.x,-n.z)}function Li(n,t){return t.set(0,0,-1).applyQuaternion(n.quaternion)}function Ev(n,t,e){return n.getWorldDirection(t),t.y=0,t.lengthSq()<1e-8?t.set(0,0,-1):t.normalize(),e.set(-t.z,0,t.x),{forward:t,right:e}}function bv(n,t,e,i){return lu.rotation.set(0,n,0),ua.set(0,0,-1).applyQuaternion(lu.quaternion),cu.crossVectors(ua,ho),ha.copy(ua).negate(),uu.setFromAxisAngle(cu,-t),ha.applyQuaternion(uu),i.copy(ha).multiplyScalar(e)}function Tv(n,t,e,i){return n+(t-n)*(1-Math.exp(-4*i))}function Av(n,t,e,i){let s=t-n;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return n+s*(1-Math.exp(-5.2*i))}function Th(n){const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)}function Rv(n,t,e){return Math.max(t,Math.min(e,n))}const Lt=.085,as=.96,Bs=.44,Gr=.28,ks=.25,Cv=new A(0,-1,0),Pv=new A(0,0,1),Lv=new A,Dv=new A,Uv=new A,Iv=new Fe,Nv=new Fe,fo=new Sn(0,0,0,"XYZ");function wn(n){return fo.set(n[0],n[1],n[2]),new Fe().setFromEuler(fo)}function ns(n,t,e,i){return i.set(n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e),i}const Fv={hilt:[.02,1.04,-.22],dir:[0,.12,-1],chest:[-.14,.1,.02],hips:[0,.02,0],head:[.06,-.06,0],drop:.015,footR:[.1,Lt,-.14],footL:[-.11,Lt,.16],clavR:[0,0,.18],clavL:[0,0,-.16],poleR:[.65,-.25,.2],poleL:[-.65,-.25,.2]};function Kt(n,t){return{t:n,...Fv,...t}}const po={guard:[Kt(0,{})],cut1:[Kt(0,{}),Kt(.045,{hilt:[.16,1.18,-.04],dir:[.32,.42,-.4],chest:[-.06,-.32,.04],hips:[.02,-.18,0],head:[.02,.1,0],drop:.03,footR:[.12,Lt,-.04],footL:[-.13,Lt,.24],clavR:[0,0,.32],poleR:[.7,.02,.4]}),Kt(.09,{hilt:[.28,1.34,.08],dir:[.55,.7,.15],chest:[-.05,-.55,.06],hips:[.04,-.28,0],head:[.02,.2,0],drop:.04,footR:[.1,Lt,-.08],footL:[-.12,Lt,.2],clavR:[0,0,.55],poleR:[.7,.15,.45]}),Kt(.17,{hilt:[-.02,1.02,-.34],dir:[-.25,.02,-1],chest:[-.22,.62,-.04],hips:[.08,.38,0],head:[.04,-.2,0],drop:.07,footR:[.06,Lt+.02,-.36],footL:[-.12,Lt,.42],clavR:[0,0,.05],poleR:[.45,-.35,.15]}),Kt(.28,{hilt:[-.18,.9,-.1],dir:[-.9,-.12,-.35],chest:[-.06,.72,-.05],hips:[.12,.5,0],head:[.08,-.22,0],drop:.09,footR:[.08,Lt,-.42],footL:[-.16,Lt,.3],clavR:[0,0,-.05],poleR:[.15,-.55,.05]}),Kt(.38,{})],cut2:[Kt(0,{}),Kt(.1,{hilt:[.12,1.62,-.06],dir:[.15,1,.05],chest:[-.28,-.2,0],hips:[.02,-.12,0],head:[-.1,.05,0],drop:.05,footR:[.1,Lt,-.1],footL:[-.1,Lt,.22],clavR:[.2,0,.7],clavL:[-.1,0,-.45],poleR:[.25,.7,.35],poleL:[-.35,.45,.3]}),Kt(.2,{hilt:[-.04,.96,-.32],dir:[-.45,-.28,-1],chest:[.05,.5,-.08],hips:[.16,.32,0],head:[.1,-.15,0],drop:.1,footR:[.04,Lt,-.4],footL:[-.14,Lt,.36],poleR:[.55,-.4,.05]}),Kt(.3,{hilt:[-.2,.84,-.06],dir:[-.7,-.45,-.4],chest:[.16,.35,-.06],hips:[.18,.22,0],head:[.12,-.08,0],drop:.11,footR:[.06,Lt,-.38],footL:[-.16,Lt,.32],poleR:[.3,-.55,-.05]}),Kt(.4,{})],cut3:[Kt(0,{}),Kt(.12,{hilt:[0,1.58,.06],dir:[0,1,.12],chest:[-.34,0,0],hips:[-.08,0,0],head:[-.16,0,0],drop:.06,footR:[.1,Lt,-.06],footL:[-.1,Lt,.24],clavR:[.15,0,.85],clavL:[-.15,0,-.75],poleR:[.15,.85,.4],poleL:[-.15,.8,.35]}),Kt(.24,{hilt:[0,.98,-.36],dir:[0,-.22,-1],chest:[.18,.08,0],hips:[.22,.06,0],head:[.12,0,0],drop:.12,footR:[.08,Lt,-.46],footL:[-.12,Lt,.48],clavR:[0,0,.1],clavL:[0,0,-.1],poleR:[.4,-.45,.1],poleL:[-.35,-.2,.15]}),Kt(.36,{hilt:[.04,.86,-.22],dir:[.15,-.55,-.75],chest:[.28,.04,0],hips:[.2,.04,0],head:[.16,0,0],drop:.14,footR:[.1,Lt,-.4],footL:[-.14,Lt,.4],poleR:[.25,-.6,.05]}),Kt(.52,{})],parry:[Kt(0,{}),Kt(.08,{hilt:[0,1.28,-.24],dir:[.05,1,-.08],chest:[-.06,0,0],hips:[0,0,0],head:[-.02,0,0],drop:.03,footR:[.1,Lt,-.12],footL:[-.11,Lt,.18],clavR:[0,0,.7],clavL:[0,0,-.65],poleR:[.85,.15,.25],poleL:[-.85,.15,.25]}),Kt(.22,{hilt:[0,1.28,-.24],dir:[.05,1,-.08],chest:[-.06,0,0],hips:[0,0,0],head:[-.02,0,0],drop:.03,footR:[.1,Lt,-.12],footL:[-.11,Lt,.18],clavR:[0,0,.7],clavL:[0,0,-.65],poleR:[.85,.15,.25],poleL:[-.85,.15,.25]}),Kt(.34,{})],dash:[Kt(0,{}),Kt(.08,{hilt:[.12,1.05,-.08],dir:[.1,.25,-1],chest:[-.62,-.1,.08],hips:[-.2,0,0],head:[.2,0,0],drop:.08,footR:[.12,Lt+.14,-.48],footL:[-.1,Lt,.28],poleR:[.4,-.2,.4]}),Kt(.16,{hilt:[.08,1.02,-.16],dir:[.05,.18,-1],chest:[-.48,0,.04],hips:[-.1,0,0],head:[.12,0,0],drop:.04,footR:[.1,Lt+.04,-.4],footL:[-.1,Lt,.22]})],stagger:[Kt(0,{hilt:[.22,1.02,0],dir:[.4,.2,-.65],chest:[.22,-.3,.08],hips:[.06,-.16,0],head:[.18,-.08,0],drop:.03,footR:[.14,Lt,0],footL:[-.14,Lt,.22],poleR:[.4,-.4,.15]}),Kt(.12,{hilt:[.32,.76,.08],dir:[.75,-.3,-.25],chest:[.5,-.12,.12],hips:[.16,-.06,0],head:[.38,.06,0],drop:.09,footR:[.18,Lt,.1],footL:[-.12,Lt,.32],poleR:[.2,-.7,.08]}),Kt(.4,{})],kneel:[Kt(0,{hilt:[.18,.62,.02],dir:[.35,-.7,-.4],chest:[-.4,.12,0],hips:[.18,.05,0],head:[-.25,0,0],drop:.5,footR:[.16,Lt,.18],footL:[-.12,Lt,-.22],poleR:[.12,-.85,.05],poleL:[-.1,-.15,-.55]})],bow:[Kt(0,{hilt:[.18,.78,-.12],dir:[.15,-.45,-.75],chest:[-.7,.05,0],hips:[-.35,0,0],head:[-.35,0,0],drop:.06,footR:[.1,Lt,-.18],footL:[-.1,Lt,.16]})],thrust:[Kt(0,{hilt:[.08,1.12,-.18],dir:[.04,.28,-1],chest:[-.1,.04,0],hips:[0,0,0],head:[.04,0,0],drop:.02,footR:[.1,Lt,-.18],footL:[-.1,Lt,.16],poleR:[.55,-.1,.35],poleL:[-.4,.05,-.2]}),Kt(.16,{hilt:[.16,1.16,.12],dir:[.06,.42,-1],chest:[-.16,-.25,0],hips:[0,-.12,0],head:[.05,.1,0],drop:.03,footR:[.1,Lt,-.1],footL:[-.1,Lt,.22],clavR:[0,0,.25],poleR:[.6,.1,.5],poleL:[-.2,.2,.2]}),Kt(.3,{hilt:[.05,1.14,-.06],dir:[0,.08,-1],chest:[-.28,.18,0],hips:[.12,.1,0],head:[.02,-.05,0],drop:.05,footR:[.08,Lt,-.42],footL:[-.12,Lt,.3],poleR:[.35,-.15,-.1],poleL:[-.45,.1,-.35]}),Kt(.48,{hilt:[.08,1.12,-.18],dir:[.04,.28,-1],chest:[-.1,.04,0],hips:[0,0,0],head:[.04,0,0],drop:.02,footR:[.1,Lt,-.18],footL:[-.1,Lt,.16]})],finisher:[Kt(0,{hilt:[.02,1.55,.02],dir:[0,1,.05],chest:[-.3,0,0],hips:[-.05,0,0],head:[-.1,0,0],drop:.04,footR:[.1,Lt,-.1],footL:[-.1,Lt,.2],clavR:[.1,0,.8],clavL:[-.1,0,-.7],poleR:[.2,.8,.35],poleL:[-.2,.75,.3]}),Kt(.22,{hilt:[0,1,-.36],dir:[0,-.35,-1],chest:[.2,.15,0],hips:[.28,.1,0],head:[.1,0,0],drop:.1,footR:[.06,Lt,-.5],footL:[-.12,Lt,.45],poleR:[.3,-.5,.05]}),Kt(.42,{hilt:[.02,1,-.36],dir:[0,-.05,-1],chest:[-.05,.05,0],hips:[.06,0,0],head:[.04,0,0],drop:.05,footR:[.08,Lt,-.34],footL:[-.1,Lt,.3]})]},Ov={player:["cut1","cut2","cut3"]};function Ah(n,t){let e=0;for(;e<n.length-2&&n[e+1].t<t;)e+=1;const i=n[e],s=n[Math.min(n.length-1,e+1)],r=i.t===s.t?0:El.smoothstep(t,i.t,s.t),o=wn(i.chest).slerp(wn(s.chest),r),a=wn(i.hips).slerp(wn(s.hips),r),l=wn(i.head).slerp(wn(s.head),r),u=wn(i.clavR).slerp(wn(s.clavR),r),c=wn(i.clavL).slerp(wn(s.clavL),r);return{hilt:ns(i.hilt,s.hilt,r,new A),dir:ns(i.dir,s.dir,r,new A).normalize(),chest:o,hips:a,head:l,clavR:u,clavL:c,drop:i.drop+(s.drop-i.drop)*r,footR:ns(i.footR,s.footR,r,new A),footL:ns(i.footL,s.footL,r,new A),poleR:ns(i.poleR,s.poleR,r,new A),poleL:ns(i.poleL,s.poleL,r,new A)}}function zv(n){if(n.forcePose)return{name:n.forcePose.clip,time:n.forcePose.t,rate:26};const{state:t,stateT:e,kind:i}=n;if(t==="attack")return{name:Ov.player[n.combo]||"cut1",time:e,rate:18};if(t==="parry")return{name:"parry",time:e,rate:22};if(t==="dash")return{name:"dash",time:Math.min(e,.16),rate:20};if(t==="finisher"&&n.team===0)return{name:"finisher",time:e,rate:16};if(t==="windup"){const s=i==="spear"?"thrust":n.heavy?"cut3":"cut1",r=s==="thrust"?.16:s==="cut3"?.12:.09,o=Math.min(1,e/Math.max(.05,n.windupDur||.6));return{name:s,time:o*o*(3-2*o)*r,rate:10}}if(t==="strike"){const s=i==="spear"?"thrust":n.heavy?"cut3":"cut1",r=po[s],o=s==="thrust"?.16:s==="cut3"?.12:.09,a=r[r.length-1].t,l=Math.min(1,e/Math.max(.05,(n.activeDur||.16)+.18));return{name:s,time:o+l*(a-o),rate:20}}return t==="stagger"?{name:"stagger",time:Math.min(e,.4),rate:16}:t==="broken"||t==="dead"||t==="finisher"&&n.team===1?{name:"kneel",time:0,rate:8}:t==="bow"?{name:"bow",time:0,rate:6}:{name:"guard",time:0,rate:8}}function Vs(n,t,e,i){n.slerp(t,1-Math.exp(-e*i))}function is(n,t,e,i){n.lerp(t,1-Math.exp(-e*i))}function Bv(n){if(n.anim)return n.anim;const t=Ah(po.guard,0);return n.anim={hilt:t.hilt.clone(),dir:t.dir.clone(),chest:t.chest.clone(),hips:t.hips.clone(),head:t.head.clone(),clavR:t.clavR.clone(),clavL:t.clavL.clone(),footR:t.footR.clone(),footL:t.footL.clone(),poleR:t.poleR.clone(),poleL:t.poleL.clone(),drop:t.drop,ready:!1},n.anim}function kv(n,t,e,i,s){const r=Lv.subVectors(t,n);let o=r.length();const a=i+s-.001,l=Math.abs(i-s)+.001;o=Math.min(a,Math.max(l,o)),r.multiplyScalar(1/(r.length()||1));const u=(o*o+i*i-s*s)/(2*o),c=Math.sqrt(Math.max(0,i*i-u*u)),h=n.clone().addScaledVector(r,u),f=Dv.subVectors(e,n);return f.addScaledVector(r,-f.dot(r)),f.lengthSq()<1e-8&&f.set(0,1,0),f.normalize(),h.addScaledVector(f,c)}function hu(n,t,e){n.parent.updateWorldMatrix(!0,!1);const i=n.parent.getWorldQuaternion(new Fe),s=n.getWorldPosition(new A),r=t.clone().sub(s);if(r.lengthSq()<1e-8)return;r.normalize();const o=r.clone().negate(),a=e.clone().sub(s);a.addScaledVector(o,-a.dot(o)),a.lengthSq()<1e-8&&a.set(0,0,1),a.normalize();const l=new A().crossVectors(o,a).normalize(),u=new A().crossVectors(l,o).normalize(),c=new Fe().setFromRotationMatrix(new jt().makeBasis(l,o,u));n.quaternion.copy(i.invert().multiply(c))}function Vv(n,t,e,i){const s=n.clone().normalize(),r=e.clone().normalize(),o=new Fe().setFromUnitVectors(s,r),a=t.clone().normalize().applyQuaternion(o),l=r,u=a.addScaledVector(l,-a.dot(l)),c=i.clone().addScaledVector(l,-i.dot(l));if(u.lengthSq()<1e-8||c.lengthSq()<1e-8)return o;u.normalize(),c.normalize();const h=Math.atan2(new A().crossVectors(u,c).dot(l),u.dot(c));return new Fe().setFromAxisAngle(l,h).multiply(o)}function Wr(n,t,e,i,s){n.updateWorldMatrix(!0,!1);const r=n.getWorldPosition(new A),o=t.position.length(),a=e.position.length(),l=kv(r,i,s,o,a);hu(n,l,s),n.updateWorldMatrix(!0,!0),hu(t,i,s),t.updateWorldMatrix(!0,!0)}function fu(n,t,e){n.parent.updateWorldMatrix(!0,!1);const i=n.parent.getWorldQuaternion(new Fe),s=Vv(Cv,Pv,t,e);n.quaternion.copy(i.invert().multiply(s))}function ei(n,t,e,i,s){return s.set(t,e,i).applyMatrix4(n.matrixWorld)}function Hv(n){const e=[],i=[];for(let l=0;l<=12;l++){const u=l/12,c=-.03-u*n,h=Math.sin(u*1.1)*.045,f=.022*(1-u*.9),d=.0055*(1-u*.45);e.push(d,c,h,0,c,h-f,-d,c,h,0,c,h+f*.35)}for(let l=0;l<12;l++)for(let u=0;u<4;u++){const c=l*4+u,h=l*4+(u+1)%4,f=c+4,d=l*4+4+(u+1)%4;i.push(c,f,h,h,f,d)}const s=e.length/3,r=-.03-n-.015;e.push(0,r,Math.sin(1.1)*.045);const o=48;i.push(o,o+1,s,o+1,o+2,s,o+2,o+3,s,o+3,o,s);const a=new _e;return a.setAttribute("position",new Zt(e,3)),a.setIndex(i),a.computeVertexNormals(),a}function Gv(){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=64,n.height=16;const t=n.getContext("2d");t.fillStyle="#1a120e",t.fillRect(0,0,64,16),t.strokeStyle="#6a5344",t.lineWidth=2;for(let i=-16;i<64;i+=8)t.beginPath(),t.moveTo(i,0),t.lineTo(i+16,16),t.moveTo(i,16),t.lineTo(i+16,0),t.stroke();const e=new Al(n);return e.wrapS=tr,e.wrapT=tr,e.colorSpace=Ge,e}const Wv=Gv();function Xr(n,t,e,i=1){const s=new Qe;s.position.y=e,n.add(s);const r=.017*i,o=new it(new pe(.04,.078,.016),t);o.position.set(0,0,-(r+.02)),o.castShadow=!0,s.add(o);for(let l=0;l<4;l++){const u=new it(new ys(r+.011,.008,6,10,Math.PI*1.2),t);u.rotation.x=Math.PI/2,u.position.y=-.032+l*.021,u.castShadow=!0,s.add(u)}const a=new it(new ir(.01,.03,3,6),t);return a.position.set(.03,.018,.004),a.rotation.set(.4,0,1.15),a.castShadow=!0,s.add(a),s}function Re(n,t,e,i,s,r){const o=new Qe;return o.name=e,o.position.set(i,s,r),n.add(o),t[e]=o,o}function qr(n,t,e,i,s){const r=[new Q(e,0),new Q(e*.96,-t*.18),new Q((e+i)*.5,-t*.55),new Q(i,-t*.86),new Q(i*.92,-t)],o=new it(new lr(r,14),s);o.castShadow=!0,o.receiveShadow=!0,n.add(o)}function du(n,t,e,i,s){const r=[[.15,i,.022,0,-.045,0,t],[.13,i*.96,.02,s*.035,0,s*.7,e],[.12,i*.9,.018,0,.04,.15,t]];for(const[o,a,l,u,c,h,f]of r){const d=new it(new pe(o,a,l),f);d.position.set(u,-a*.46,c),d.rotation.y=h,d.castShadow=!0,d.receiveShadow=!0,n.add(d)}}function Xv(n,t){const e={player:{cloth:"#c49a62",hakama:"#1a2748",obi:"#9d2433",hair:"#16120f",skin:"#b86b4c",steel:"#d2d8e0",eri:"#efe4d2"},ronin:{cloth:"#4a453c",hakama:"#2c241e",obi:"#6e3030",hair:"#100e0c",skin:"#a86a4c",steel:"#c5ccd4",eri:"#3a342c"},spear:{cloth:"#b08958",hakama:"#243028",obi:"#5c4632",hair:"#1a120e",skin:"#c48462",steel:"#d8dee6",eri:"#8d6a3e"},boss:{cloth:"#c8bba6",hakama:"#141414",obi:"#b8923f",hair:"#f4f0e8",skin:"#d09270",steel:"#e7edf4",eri:"#1a1a1a"}}[n],i=new qt({color:e.cloth,roughness:.82,side:ze}),s=i.clone();s.color.offsetHSL(0,0,-.08);const r=new qt({color:e.hakama,roughness:.86,side:ze}),o=r.clone();o.color.offsetHSL(0,.02,-.06);const a=new qt({color:e.obi,roughness:.55}),l=new qt({color:e.eri,roughness:.72}),u=new qt({color:e.hair,roughness:.55}),c=new qt({color:e.skin,roughness:.62}),h=new qt({color:e.steel,metalness:.82,roughness:.28,emissive:"#f4f7fb",emissiveIntensity:.05}),f=new qt({color:"#c6a15a",metalness:.7,roughness:.36}),d=new qt({color:"#241910",roughness:.74,map:Wv||null}),m=new qt({color:"#1a1816",roughness:.42,metalness:.18}),_=new qt({color:"#c6ae78",roughness:.9});if(t)for(const p of[h,f])p.envMap=t,p.envMapIntensity=.45;const g=[i,s,r,o,a,l,u,c,m,_];for(const p of g)p.emissive=new Ut("#000000"),p.emissiveIntensity=0,p.userData.baseEmissive=0;return{cloth:i,clothDeep:s,hakama:r,hakamaDeep:o,obi:a,eri:l,hair:u,skin:c,steel:h,gold:f,wrap:d,lacquer:m,straw:_,bodyMats:g}}function qv(){const n=new hh;n.moveTo(0,0),n.lineTo(.055,.1),n.lineTo(.012,.16),n.lineTo(0,.36),n.lineTo(-.012,.16),n.lineTo(-.055,.1);const t=new Ll(n,{depth:.012,bevelEnabled:!1});return t.translate(0,0,-.006),t.rotateX(Math.PI),t}function Yv(n,t,e){const i=new Qe;if(n==="spear"){const d=new it(new xe(.015,.02,2.05,10),t.wrap);d.position.y=-.55,d.castShadow=!0;const m=new it(qv(),t.steel);m.position.y=-1.58,m.castShadow=!0;const _=new it(new xe(.022,.016,.06,8),t.gold);_.position.y=-1.52,i.add(d,m,_);const g=new se;g.position.y=-1.94;const p=new se;p.position.y=-.15;const S=new se;return S.position.y=-.32,i.add(g,p,S),Xr(i,t.skin,.02,1.2),Xr(S,t.skin,0,1.2),e.add(i),{group:i,tip:g,base:p,gripL:S,bladeMat:t.steel}}const r=new it(Hv(.74),t.steel);r.castShadow=!0;const o=new it(new xe(.014,.018,.035,8),t.gold);o.position.y=-.04;const a=new it(new xe(.052,.052,.008,8),t.gold);a.scale.set(1,1,.62),a.position.y=-.012;const l=new it(new xe(.015,.0165,.24,10),t.wrap);l.position.y=.112;const u=new it(new Ue(.02,10,8),t.gold);u.scale.set(1,.75,1),u.position.y=.236,i.add(r,o,a,l,u);const c=new se;c.position.set(0,-.79,.04);const h=new se;h.position.y=-.04;const f=new se;return f.position.y=.168,i.add(c,h,f),Xr(i,t.skin,.07,1),Xr(f,t.skin,0,1),e.add(i),{group:i,tip:c,base:h,gripL:f,bladeMat:t.steel}}function Zv(n,t,e){const i=new it(new Ue(.104,16,14),e.skin);i.scale.set(.92,1.06,.9),i.castShadow=!0,n.add(i);const s=new it(new Ue(.068,12,10),e.skin);s.position.set(0,-.042,-.012),s.scale.set(.92,.58,.82),n.add(s);const r=new it(new Ms(.012,.034,6),e.skin);if(r.rotation.x=Math.PI/2,r.position.set(0,.002,-.098),n.add(r),t!=="ronin"){const h=new it(new pe(.028,.006,.008),new qt({color:"#7a403c",roughness:.7}));h.position.set(0,-.042,-.086),n.add(h)}const o=new it(new Ue(.112,16,12),e.hair);o.position.set(0,.05,.03),o.scale.set(1.02,.58,.92),o.castShadow=!0,n.add(o);const a=new it(new Ue(.04,10,8),e.hair);a.position.set(0,.055,-.055),a.scale.set(1.7,.28,.35),n.add(a);for(const h of[-1,1]){const f=new it(new ir(.016,t==="boss"?.22:.07,3,6),e.hair);f.position.set(h*.078,t==="boss"?-.08:-.01,t==="boss"?.04:.01),f.rotation.z=h*-.18,f.castShadow=!0,n.add(f)}if(t!=="boss"){const h=new it(new xe(.026,.034,.055,8),e.hair);h.position.set(0,.095,.03),n.add(h);const f=new it(new Ue(.04,10,8),e.hair);f.position.set(0,.132,.028),f.castShadow=!0,n.add(f);const d=new it(new xe(.004,.004,.1,5),e.gold);d.rotation.z=Math.PI/2,d.position.set(0,.112,.04),n.add(d)}else{const h=new it(new pe(.12,.014,.028),e.obi);h.position.set(0,.07,.06),n.add(h);const f=new it(new ir(.022,.34,4,6),e.hair);f.position.set(0,-.12,.07),f.castShadow=!0,n.add(f)}const l=new qt({color:"#1a120e",roughness:.4}),u=new Yn({color:"#f6f1e8"});for(const h of[-.034,.034]){const f=new it(new Ue(.014,8,6),l);f.scale.set(1.35,.42,.35),f.position.set(h,.012,-.092),n.add(f);const d=new it(new Ue(.004,4,4),u);d.position.set(h+.006,.018,-.104),n.add(d)}const c=new it(new pe(.086,.008,.01),e.hair);c.position.set(0,.034,-.088),c.rotation.x=.35,n.add(c);for(const h of[-1,1]){const f=new it(new Ue(.018,8,6),e.skin);f.position.set(h*.092,-.004,0),f.scale.set(.5,1.05,.65),n.add(f)}if(t==="ronin"){const h=new it(new Ue(.058,10,8),e.lacquer);h.scale.set(1.15,.55,.48),h.position.set(0,-.04,-.05),h.castShadow=!0,n.add(h);const f=new it(new ys(.05,.006,6,12),e.gold);f.scale.set(1.15,.62,1),f.position.set(0,-.038,-.07),n.add(f);const d=new it(new ys(.1,.01,6,16),e.obi);d.rotation.x=Math.PI/2,d.position.y=.02,n.add(d)}if(t==="spear"){const h=new it(new Ms(.18,.07,12),e.straw);h.position.y=.15,h.castShadow=!0,n.add(h);const f=new it(new xe(.2,.2,.012,14),e.straw);f.position.y=.112,f.castShadow=!0,n.add(f)}}function $v(n,t){const e=Xv(n,t),i={},s=new Qe,r=Re(s,i,"hips",0,as,0),o=Re(r,i,"spine",0,.12,0),a=Re(o,i,"chest",0,.16,0),l=Re(a,i,"head",0,.3,.01),u=Re(a,i,"clavicleR",.05,.14,.01),c=Re(u,i,"shoulderR",.13,-.02,0),h=Re(c,i,"elbowR",0,-Gr,0),f=Re(h,i,"wristR",0,-ks,0),d=Re(a,i,"clavicleL",-.05,.14,.01),m=Re(d,i,"shoulderL",-.13,-.02,0),_=Re(m,i,"elbowL",0,-Gr,0);Re(_,i,"wristL",0,-ks,0);const g=Re(r,i,"thighR",.09,-.04,.01),p=Re(g,i,"kneeR",0,-.46,0),S=Re(p,i,"ankleR",0,-Bs,0);Re(S,i,"footR",0,-.02,-.02);const y=Re(r,i,"thighL",-.09,-.04,.01),M=Re(y,i,"kneeL",0,-.46,0),D=Re(M,i,"ankleL",0,-Bs,0);Re(D,i,"footL",0,-.02,-.02),qr(h,ks,.046,.034,e.skin),qr(_,ks,.046,.034,e.skin),qr(p,Bs,.052,.036,e.skin),qr(M,Bs,.052,.036,e.skin);for(const B of[c,m]){const $=new it(new Ue(.078,12,8),e.cloth);$.scale.set(1.05,.72,.9),$.castShadow=!0,B.add($);const j=new it(new xe(.058,.078,Gr*.62,12,1,!0),e.cloth);j.position.y=-Gr*.28,j.castShadow=!0,B.add(j)}for(const B of[h,_]){const $=new it(new xe(.05,.042,.1,10),n==="boss"||n==="ronin"?e.lacquer:e.clothDeep);$.position.y=-ks*.78,$.castShadow=!0,B.add($)}const C=[new Q(.055,.3),new Q(.12,.22),new Q(.145,.1),new Q(.125,0),new Q(.15,-.08)],b=new it(new lr(C,16),e.cloth);b.position.y=-.02,b.castShadow=!0,b.receiveShadow=!0,a.add(b);const E=new it(new pe(.14,.22,.016),e.clothDeep);E.position.set(-.02,.06,-.12),E.rotation.z=.12,E.castShadow=!0,a.add(E);const x=new it(new pe(.02,.2,.012),e.eri);x.position.set(-.07,.07,-.132),x.rotation.z=.18,a.add(x);const v=new it(new xe(.042,.05,.08,10),e.skin);v.position.set(0,.25,.01),v.castShadow=!0,a.add(v);const R=new it(new xe(.15,.155,.07,14),e.obi);R.position.y=.06,R.castShadow=!0,r.add(R);const U=new it(new pe(.055,.09,.04),e.obi);U.position.set(0,.07,-.15),U.castShadow=!0,r.add(U);const F=new it(new pe(.18,.16,.018),e.hakama);F.position.set(0,-.02,.1),r.add(F);const W=n==="spear"?.4:.55;du(g,e.hakama,e.hakamaDeep,W,1),du(y,e.hakama,e.hakamaDeep,W,-1);for(const B of[p,M]){const $=new it(new xe(.058,.046,.2,10,1,!0),e.hakamaDeep);$.position.y=-Bs*.62,$.castShadow=!0,B.add($)}for(const B of[S,D]){const $=n==="player"?e.eri:n==="spear"?e.straw:e.skin,j=n==="ronin"?e.lacquer:$,mt=new it(new pe(.078,.02,.15),j);mt.position.set(0,-.078,-.04),mt.castShadow=!0,B.add(mt);for(const q of[-.018,.018]){const st=new it(new pe(.026,.014,.04),$);st.position.set(q,-.066,-.115),B.add(st)}const tt=new it(new pe(.07,.008,.014),e.straw);tt.position.set(0,-.052,-.02),B.add(tt)}if(Zv(l,n,e),n==="boss"){const B=new it(new pe(.22,.2,.035),e.lacquer);B.position.set(0,.02,-.13),B.castShadow=!0,a.add(B);for(const $ of[.08,0,-.06]){const j=new it(new pe(.2,.012,.04),e.gold);j.position.set(0,$,-.136),a.add(j)}for(const $ of[u,d]){const j=new it(new pe(.14,.18,.028),e.lacquer);j.position.set($===u?.09:-.09,-.04,0),j.castShadow=!0,$.add(j);const mt=new it(new pe(.15,.016,.032),e.gold);mt.position.set($===u?.09:-.09,.04,0),$.add(mt)}}else if(n==="ronin"){const B=new it(new pe(.13,.16,.026),e.lacquer);B.position.set(-.09,-.03,0),B.castShadow=!0,d.add(B)}else if(n==="spear")for(let B=0;B<7;B++){const $=-1.1+B*.36,j=new it(new pe(.032,.34,.01),e.straw);j.position.set(Math.sin($)*.1,.02,.06),j.rotation.z=Math.sin($)*.2,j.rotation.x=.25,j.castShadow=!0,a.add(j)}const z=new it(new xe(.018,.014,.7,8),e.lacquer);z.position.set(-.14,-.04,.06),z.rotation.z=.4,z.rotation.x=.45,z.castShadow=!0,n!=="spear"&&r.add(z);const k=Yv(n,e,f),Y=new dd(new nh({color:"#ffe2a8",transparent:!0,blending:bi,depthWrite:!1}));Y.visible=!1,Y.scale.setScalar(.001),k.tip.add(Y);const H=new it(new cr(.38,16),new Yn({color:0,transparent:!0,opacity:.26,depthWrite:!1}));return H.rotation.x=-Math.PI/2,H.position.y=.025,r.userData.baseY=as,{body:s,bones:i,shadow:H,sword:k.group,tip:k.tip,base:k.base,gripL:k.gripL,bladeMat:k.bladeMat,glint:Y,bodyMats:e.bodyMats}}function Kv(n){return n.steps||(n.steps={r:new A,l:new A,prev:new A,ready:!1,wasMoving:!1,swing:null,swingT:0,swingDur:.18,swingFrom:new A,swingTo:new A,lift:0}),n.steps}function Jv(n,t,e,i,s,r){const o=Kv(t),a=n.group;a.updateMatrixWorld(!0);const l=s&&(n.state==="idle"||n.state==="approach"||n.state==="strafe"||n.state==="recover"),u=(d,m)=>(m.set(d.x,Lt,d.z),a.localToWorld(m),m.y=a.position.y+(d.y||Lt),m);if(o.ready||(u(e,o.r),u(i,o.l),o.prev.copy(a.position),o.ready=!0),!l){if(o.wasMoving){const d=a.worldToLocal(o.r.clone()),m=a.worldToLocal(o.l.clone());t.footR.copy(d),t.footL.copy(m),e.copy(d),i.copy(m)}return u(e,o.r),u(i,o.l),o.prev.copy(a.position),o.wasMoving=!1,o.swing=null,o.lift=0,o}const c=Uv.subVectors(a.position,o.prev);c.y=0;const h=Math.min(8,c.length()/Math.max(r,1/120));o.prev.copy(a.position),o.wasMoving=!0;const f=El.clamp(.55/Math.max(h,1.6),.14,.24);if(!o.swing){const d=a.worldToLocal(o.r.clone()),m=a.worldToLocal(o.l.clone());if(d.z>.02||m.z>.02){o.swing=d.z>m.z?"r":"l",o.swingT=0,o.swingDur=f,o.swingFrom.copy(o.swing==="r"?o.r:o.l);const _=.28+Math.min(.62,h*f),g=new A(o.swing==="r"?.12:-.12,Lt,-_);a.localToWorld(g),g.y=a.position.y+Lt,o.swingTo.copy(g)}}if(o.lift=0,o.swing){o.swingT+=r;const d=Math.min(1,o.swingT/o.swingDur),m=d*d*(3-2*d),_=o.swing==="r"?o.r:o.l;_.lerpVectors(o.swingFrom,o.swingTo,m),o.lift=Math.sin(Math.min(d,1)*Math.PI)*.12,_.y=a.position.y+Lt+o.lift,d>=1&&(o.swing=null)}return e.copy(o.r),a.worldToLocal(e),i.copy(o.l),a.worldToLocal(i),o}function Rh(n,t,e){const i=Bv(n),s=zv(n),r=Ah(po[s.name]||po.guard,s.time),o=n.forcePose?28:s.rate;if(!i.ready||t<=0)i.hilt.copy(r.hilt),i.dir.copy(r.dir),i.chest.copy(r.chest),i.hips.copy(r.hips),i.head.copy(r.head),i.clavR.copy(r.clavR),i.clavL.copy(r.clavL),i.footR.copy(r.footR),i.footL.copy(r.footL),i.poleR.copy(r.poleR),i.poleL.copy(r.poleL),i.drop=r.drop,i.ready=!0;else{const R=1-Math.exp(-o*t);is(i.hilt,r.hilt,o,t),is(i.dir,r.dir,o,t),i.dir.normalize(),Vs(i.chest,r.chest,o,t),Vs(i.hips,r.hips,o,t),Vs(i.head,r.head,o,t),Vs(i.clavR,r.clavR,o,t),Vs(i.clavL,r.clavL,o,t),is(i.footR,r.footR,o,t),is(i.footL,r.footL,o,t),is(i.poleR,r.poleR,o,t),is(i.poleL,r.poleL,o,t),i.drop+=(r.drop-i.drop)*R}const a=i.footR.clone(),l=i.footL.clone(),u=Jv(n,i,a,l,e,t);u.wasMoving&&(n.phase+=t*7);const{bones:c}=n;c.hips.quaternion.copy(i.hips);const h=El.clamp(l.z-a.z,-.5,.5);u.wasMoving&&c.hips.rotateY(h*.22),c.hips.position.set(u.swing==="r"?-.03:u.swing==="l"?.03:0,as-i.drop,0),c.chest.quaternion.copy(i.chest),u.wasMoving&&c.chest.rotateY(-h*.12);const f=Math.sin(me.time*1.6+(n.phase||0))*.025;c.chest.quaternion.multiply(Iv.setFromEuler(fo.set(f,0,0))),c.spine.quaternion.slerp(Nv.setFromEuler(fo.set(f*.6,0,0)),1),c.head.quaternion.copy(i.head),c.clavicleR.quaternion.copy(i.clavR),c.clavicleL.quaternion.copy(i.clavL);const m=n.state==="broken"||n.state==="dead"||n.state==="finisher"&&n.team===1?Math.max(i.drop,.42):i.drop;c.hips.position.y=as-m-(u.lift||0)*.12,n.group.updateMatrixWorld(!0);const _=ei(n.group,i.hilt.x,i.hilt.y,i.hilt.z,new A),g=i.dir.clone().transformDirection(n.group.matrixWorld).normalize(),p=new A(0,1,0).lerp(ei(n.group,0,1,0,new A).sub(n.group.position),.35).normalize(),S=ei(n.group,i.poleR.x,i.poleR.y+as,i.poleR.z,new A),y=ei(n.group,i.poleL.x,i.poleL.y+as,i.poleL.z,new A);Wr(c.shoulderR,c.elbowR,c.wristR,_,S),fu(c.wristR,g,p),n.group.updateMatrixWorld(!0);const M=n.gripL.getWorldPosition(new A);Wr(c.shoulderL,c.elbowL,c.wristL,M,y),fu(c.wristL,g,p);const D=ei(n.group,a.x,a.y,a.z,new A),C=ei(n.group,l.x,l.y,l.z,new A),b=ei(n.group,.15,.4,-.55,new A),E=ei(n.group,-.15,.4,-.55,new A);Wr(c.thighR,c.kneeR,c.ankleR,D,b),Wr(c.thighL,c.kneeL,c.ankleL,C,E),pu(c.ankleR,n.group),pu(c.ankleL,n.group),n.flash=Math.max(0,n.flash-t*3.2);for(const R of n.bodyMats)R.emissive.set("#ffe9dc"),R.emissiveIntensity=n.flash*.65;const x=n.state==="windup",v=x&&(n.windupDur||.6)-n.stateT<.16;n.bladeMat.emissive.set(v?"#ffd27a":"#f7fbff"),n.bladeMat.emissiveIntensity=v?1.4:x?.2+.5*(n.stateT/(n.windupDur||.6)):.12,n.glint.visible=v,n.glint.scale.setScalar(v?.55:.001)}function pu(n,t){t.updateMatrixWorld(!0);const e=n.parent.getWorldQuaternion(new Fe),i=new A(0,0,-1).transformDirection(t.matrixWorld);i.y=0,i.lengthSq()<1e-6&&i.set(0,0,-1),i.normalize();const s=new A(0,1,0),r=new A().crossVectors(s,i).normalize(),o=i.clone().negate(),a=new Fe().setFromRotationMatrix(new jt().makeBasis(r,s,o));n.quaternion.copy(e.invert().multiply(a))}const to=[{duration:.38,chainAt:.22,lock:.3,active:[.1,.2],lunge:.72,reach:2.2,arc:2,damage:15,posture:13,clip:"cut1"},{duration:.4,chainAt:.24,lock:.32,active:[.12,.23],lunge:.48,reach:2.25,arc:1.75,damage:18,posture:16,clip:"cut2"},{duration:.52,chainAt:.52,lock:.44,active:[.16,.3],lunge:1.4,reach:2.5,arc:2.15,damage:30,posture:26,clip:"cut3"}];let jv=1;function Fl(n,t){const e=nv[n],i=$v(n,t.envMap),s=new Qe;s.name=n,s.add(i.body),s.add(i.shadow),s.position.set(t.x,0,t.z),t.yaw!=null&&(s.rotation.y=t.yaw);const r=n==="boss"?1.07:1;s.scale.setScalar(r);const o={id:jv++,kind:n,team:n==="player"?0:1,name:e.name,hp:e.hp,hpMax:e.hp,posture:0,postureMax:e.posture,speed:e.speed,radius:e.radius,reach:e.reach||2.2,arc:e.arc||1.8,windupDur:e.windup||.6,activeDur:e.active||.16,recoverDur:e.recover||.45,damage:e.damage||12,postureDmg:e.postureDmg||14,keep:e.keep||1.8,heavy:!1,group:s,body:i.body,bones:i.bones,sword:i.sword,weaponTip:i.tip,weaponBase:i.base,gripL:i.gripL,bladeMat:i.bladeMat,bodyMats:i.bodyMats,glint:i.glint,state:n==="boss"?"bow":"approach",stateT:0,combo:0,phase:Math.random()*6,velocity:new A,knock:new A,dashDir:new A(0,0,-1),invuln:0,flash:0,bufferAttack:0,bufferParry:0,bufferDash:0,dashCd:0,sinceHit:10,swing:{on:!1,reach:2,arc:1.8,damage:10,posture:10},didHit:new Set,events:[],alive:!0,fade:0,side:Math.random()<.5?1:-1,think:.35+Math.random()*.4,staggerDur:.4,baseScale:r,force:null,frozen:!1,tip:new A,base:new A,prevTip:new A};return n==="player"&&(o.state="idle"),o}function Ol(n){n.weaponTip.getWorldPosition(n.tip),n.weaponBase.getWorldPosition(n.base)}function Js(n){if(n.state==="attack"){const t=to[n.combo],e=n.stateT>=t.active[0]&&n.stateT<=t.active[1];e&&!n.swing.on&&n.didHit.clear(),n.swing.on=e,n.swing.reach=t.reach,n.swing.arc=t.arc,n.swing.damage=t.damage,n.swing.posture=t.posture;return}if(n.state==="strike"){const t=n.stateT<=n.activeDur;t&&!n.swing.on&&n.didHit.clear(),n.swing.on=t,n.swing.reach=n.reach,n.swing.arc=n.arc,n.swing.damage=n.damage,n.swing.posture=n.postureDmg;return}n.swing.on=!1}function wi(n,t,e){Rh(n,t,e)}function mu(n,t,e){return e.set(0,0,0),e.addScaledVector(t.forward,n.forward),e.addScaledVector(t.right,n.strafe),e.lengthSq()>1&&e.normalize(),e}function Ch(n,t,e,i){if(n.invuln=Math.max(0,n.invuln-i),n.sinceHit+=i,n.dashCd=Math.max(0,n.dashCd-i),n.bufferAttack=Math.max(0,n.bufferAttack-i),n.bufferParry=Math.max(0,n.bufferParry-i),n.bufferDash=Math.max(0,n.bufferDash-i),t.attack&&(n.bufferAttack=.16),t.parry&&(n.bufferParry=.12),t.dash&&(n.bufferDash=.12),!n.alive||n.state==="dead"){n.fade+=i,wi(n,i,!1),Js(n);return}if(n.state==="finisher"){wi(n,i,!1),n.swing.on=!1;return}if(n.state==="stagger"){n.stateT+=i,n.stateT>(n.staggerDur||.7)&&(n.state="idle"),n.group.position.addScaledVector(n.knock,i),n.knock.multiplyScalar(Math.exp(-8*i)),hl(n.group.position,n.radius),wi(n,i,!1),Js(n);return}const s=n.state==="attack"?to[n.combo]:null;if(n.bufferDash>0&&n.dashCd<=0&&n.state!=="attack"&&n.state!=="parry"){const a=mu(t,e,new A);a.lengthSq()<.01&&Li(n.group,a),a.y=0,a.normalize(),n.dashDir.copy(a),n.group.rotation.y=ws(a),n.state="dash",n.stateT=0,n.dashCd=.46,n.invuln=.16,n.bufferDash=0,n.events.push("whoosh")}else n.bufferParry>0&&n.state!=="dash"&&n.state!=="attack"?(n.state="parry",n.stateT=0,n.bufferParry=0):n.bufferAttack>0&&n.state!=="parry"&&n.state!=="dash"&&(n.state==="attack"&&s&&n.stateT>s.chainAt&&n.combo<2?(n.combo+=1,n.stateT=0,n.bufferAttack=0,n.didHit.clear(),n.events.push("whoosh")):n.state!=="attack"&&(n.combo=0,n.state="attack",n.stateT=0,n.bufferAttack=0,n.didHit.clear(),n.velocity.multiplyScalar(.35),n.events.push("whoosh")));let r=!1;if(n.state==="attack"){n.stateT+=i;const a=to[n.combo],l=Li(n.group,new A);l.y=0,l.normalize(),n.group.position.addScaledVector(l,a.lunge/a.duration*i),n.stateT>=a.duration&&(n.state="idle",n.combo=0)}else n.state==="dash"?(n.stateT+=i,n.group.position.addScaledVector(n.dashDir,17*i),n.stateT>=.16&&(n.state="idle")):n.state==="parry"&&(n.stateT+=i,n.stateT>=.34&&(n.state="idle"));if(!(n.state==="attack"&&n.stateT<to[n.combo].lock||n.state==="parry"||n.state==="dash")){const a=mu(t,e,new A);a.lengthSq()>4e-4?(n.group.rotation.y=ws(a),n.velocity.lerp(a.multiplyScalar(n.speed),1-Math.exp(-14*i)),r=!0):n.velocity.multiplyScalar(Math.exp(-12*i)),n.group.position.addScaledVector(n.velocity,i)}n.group.position.addScaledVector(n.knock,i),n.knock.multiplyScalar(Math.exp(-8*i)),hl(n.group.position,n.radius),n.sinceHit>.8&&(n.posture=Math.max(0,n.posture-26*i)),wi(n,i,r),Js(n)}function Qv(n){n.state="strike",n.stateT=0,n.didHit.clear(),n.events.push("whoosh")}function tx(n,t,e){if(n.invuln=Math.max(0,n.invuln-e),n.sinceHit+=e,!n.alive||n.state==="dead"||n.state==="finisher"){if(n.state==="dead"){n.fade+=e;const a=Math.min(.7,n.fade*.55);n.group.position.y=uo(n.group.position.x,n.group.position.z)-a,n.group.scale.setScalar(n.baseScale*Math.max(.15,1-n.fade*.5)),n.fade>.95&&(n.group.visible=!1)}wi(n,e,!1),n.swing.on=!1;return}if(n.frozen){wi(n,e,!1),Js(n);return}const i=t.group.position.x-n.group.position.x,s=t.group.position.z-n.group.position.z,r=Math.hypot(i,s)||1e-4,o=new A(i/r,0,s/r);if(n.state!=="strike"&&n.state!=="stagger"&&n.state!=="broken"&&(n.group.rotation.y=ws(o)),n.state==="stagger"||n.state==="broken"){n.stateT+=e;const a=n.state==="broken"?1.65:n.staggerDur;n.stateT>a&&(n.state==="broken"&&(n.posture=n.postureMax*.36,n.invuln=.25),n.state="recover",n.stateT=0)}else if(n.state==="windup")n.stateT+=e,r>n.keep+.3&&n.group.position.addScaledVector(o,n.speed*.3*e),n.stateT>=n.windupDur&&Qv(n);else if(n.state==="strike"){n.stateT+=e;const a=Li(n.group,new A);a.y=0,a.normalize(),n.group.position.addScaledVector(a,n.speed*(n.kind==="spear"?1.15:.85)*e),n.stateT>n.activeDur+.04&&(n.state="recover",n.stateT=0)}else if(n.state==="recover")n.stateT+=e,n.stateT>n.recoverDur&&(n.state="strafe",n.stateT=0,n.think=.25+Math.random()*(n.kind==="boss"?.32:.62));else if(n.state==="bow")n.stateT+=e,n.stateT>.9&&(n.state="approach",n.stateT=0);else if(r>n.keep+.3)n.state="approach",n.group.position.addScaledVector(o,n.speed*e);else{n.state="strafe",n.stateT+=e;const l=new A(-o.z,0,o.x).multiplyScalar(n.side).multiplyScalar(.7);r>n.keep&&l.addScaledVector(o,.35),r<n.keep-.2&&l.addScaledVector(o,-.45),n.group.position.addScaledVector(l,n.speed*e),n.stateT>n.think&&r<n.keep+1.15&&(n.kind==="boss"&&(n.heavy=!n.heavy,n.heavy?(n.windupDur=.76,n.activeDur=.17,n.damage=20,n.reach=2.55,n.arc=2.15,n.postureDmg=22):(n.windupDur=.46,n.activeDur=.14,n.damage=14,n.reach=2.25,n.arc=1.65,n.postureDmg=16)),n.state="windup",n.stateT=0)}n.group.position.addScaledVector(n.knock,e),n.knock.multiplyScalar(Math.exp(-7*e)),hl(n.group.position,n.radius),n.sinceHit>1.15&&n.state!=="broken"&&(n.posture=Math.max(0,n.posture-8*e)),wi(n,e,n.state==="approach"||n.state==="strafe"),Js(n)}function ex(n){const t=new A,e=new A;return n.bones.shoulderL.getWorldPosition(t),n.bones.shoulderR.getWorldPosition(e),e.sub(t),e.y=0,e.normalize(),new A().crossVectors(new A(0,1,0),e).normalize()}const Hs=new A;function Ph(n,t){if(Li(n.group,Hs),Hs.y=0,Hs.lengthSq()<1e-6)return-1;Hs.normalize();const e=t.group.position.x-n.group.position.x,i=t.group.position.z-n.group.position.z,s=Math.hypot(e,i)||1;return Hs.dot(new A(e/s,0,i/s))}function nx(n,t){const e=t.group.position.x-n.group.position.x,i=t.group.position.z-n.group.position.z,s=Math.hypot(e,i);return s>n.swing.reach||s<.05||Math.abs(n.group.position.y-t.group.position.y)>1.6?!1:Ph(n,t)>Math.cos(n.swing.arc*.5)}function ix(n,t,e){return n.tip&&t.tip?e.copy(n.tip).lerp(t.tip,.5):e.set((n.group.position.x+t.group.position.x)*.5,1.2,(n.group.position.z+t.group.position.z)*.5)}function sx(n){for(let t=0;t<n.length;t++)for(let e=t+1;e<n.length;e++){const i=n[t],s=n[e];if(!i.alive||!s.alive)continue;const r=s.group.position.x-i.group.position.x,o=s.group.position.z-i.group.position.z,a=i.radius+s.radius,l=r*r+o*o;if(l>=a*a||l<1e-6)continue;const u=Math.sqrt(l),c=(a-u)/u,h=i.state==="dash"?.1:.5,f=s.state==="dash"?.1:.5;i.group.position.x-=r*c*h,i.group.position.z-=o*c*h,s.group.position.x+=r*c*f,s.group.position.z+=o*c*f}}function rx(n,t){const e=new A;for(const i of n)if(!(!i.alive||!i.swing.on)){for(const s of n)if(!(s===i||s.team===i.team)&&!(!s.alive||s.state==="finisher"||s.state==="dead")&&!i.didHit.has(s.id)&&nx(i,s)&&(i.didHit.add(s.id),ix(i,s,e),!(s.invuln>0))){if(s.state==="parry"&&s.stateT>=.03&&s.stateT<=.2&&Ph(s,i)>.15){ox(s,i,e,t);continue}ax(i,s,e,t)}}}function ox(n,t,e,i){t.swing.on=!1,t.state="stagger",t.stateT=0,t.staggerDur=.62,t.posture+=32,n.posture=Math.max(0,n.posture-16),n.invuln=.16,n.sinceHit=0;const s=t.group.position.x-n.group.position.x,r=t.group.position.z-n.group.position.z,o=Math.hypot(s,r)||1;t.knock.set(s/o*2.2,0,r/o*2.2);let a=!1;t.team===1&&t.posture>=t.postureMax&&(t.state="broken",t.posture=t.postureMax,a=!0),i.onParry(n,t,e,a)}function ax(n,t,e,i){const s=t.group.position.x-n.group.position.x,r=t.group.position.z-n.group.position.z,o=Math.hypot(s,r)||1;t.hp-=n.swing.damage,t.posture+=n.swing.posture,t.sinceHit=0,t.flash=1;const a=t.team===0?1.3:2.5;if(t.knock.set(s/o*a,0,r/o*a),t.team===1&&t.state==="windup"&&(t.posture+=12),t.team===1&&(t.state==="broken"||t.hp<=0||t.posture>=t.postureMax&&t.hp<=t.hpMax*.34&&n.team===0)&&(t.state==="broken"||t.hp<=0)){i.onFinisher(n,t,e);return}if(t.team===1&&t.hp<=0){i.onFinisher(n,t,e);return}if(t.team===1&&t.posture>=t.postureMax){t.state="broken",t.stateT=0,t.posture=t.postureMax,t.swing.on=!1,i.onBreak(t,e),i.onHit(n,t,e,!1);return}if(t.team===1){const l=t.state==="windup";t.state="stagger",t.stateT=0,t.staggerDur=l?.5:.28,t.swing.on=!1}else t.hp<=0?(t.hp=0,t.alive=!1,t.state="dead",i.onDeath(t)):t.posture>=t.postureMax&&(t.state="stagger",t.stateT=0,t.staggerDur=.72,t.posture=t.postureMax*.22,t.combo=0);i.onHit(n,t,e,!1)}const Gn=new URLSearchParams(location.search),lx=document.getElementById("c"),Ei=document.getElementById("probe"),wo=document.getElementById("title"),Eo=document.getElementById("end"),cx=document.getElementById("hud"),ux=document.getElementById("hint"),fl=document.getElementById("banner"),fa=[],hx=console.error.bind(console);console.error=(...n)=>{fa.push(n.map(t=>t&&t.stack||String(t)).join(" ")),Ei.textContent=`ERROR ${fa[fa.length-1]}`,hx(...n)};window.addEventListener("error",n=>{Ei.textContent=`ERROR ${n.message}`});const on=new k_({canvas:lx,antialias:!0,powerPreference:"high-performance"});on.setPixelRatio(Math.min(devicePixelRatio,1.75));on.setSize(window.innerWidth,window.innerHeight);on.setClearColor(15192260);on.shadowMap.enabled=!0;on.shadowMap.type=bu;on.toneMapping=ml;on.toneMappingExposure=1.05;on.outputColorSpace=Ge;const qe=new eh;qe.fog=new bl(15783368,34,86);const Jt=new Ke(42,window.innerWidth/window.innerHeight,.12,220),da=new Ke(42,1,.12,80),Lh=new cl(on),zl=Lh.fromScene(new V_,.04).texture;Lh.dispose();const fx=new Qd(12967413,9267790,.72);qe.add(fx);const an=new _h(16774373,2.15);an.position.copy(lo).multiplyScalar(38);an.castShadow=!0;an.shadow.mapSize.set(2048,2048);an.shadow.camera.near=8;an.shadow.camera.far=72;an.shadow.camera.left=-22;an.shadow.camera.right=22;an.shadow.camera.top=22;an.shadow.camera.bottom=-22;an.shadow.bias=-35e-5;an.shadow.normalBias=.045;qe.add(an);qe.add(an.target);const Dh=new _h(12177151,.38);Dh.position.set(-16,10,-14);qe.add(Dh);const Ln=pv(qe),tn=Mv(qe,Ln.tips,Ln.canopies),Ie=wv(qe),ls=j_(),je=tv(),dx=Ln.pond.onBeforeRender;Ln.pond.onBeforeRender=function(t,e,i){const s=tn.root.visible,r=Ie.root.visible;tn.root.visible=!1,Ie.root.visible=!1;try{dx(t,e,i)}finally{tn.root.visible=s,Ie.root.visible=r}};let Rn=null;if(!Gn.has("norbloom")){Rn=new Y_(on),Rn.addPass(new Z_(qe,Jt));const n=new Ss(new Q(window.innerWidth,window.innerHeight),.22,.42,.96);Rn.addPass(n),Rn.addPass(new J_)}const Uh=[[{kind:"ronin",x:.2,z:-2.1}],[{kind:"spear",x:4.5,z:-1.5},{kind:"ronin",x:-3.5,z:-2.5}],[{kind:"boss",x:.1,z:-5.5}]],fe={real:0,scale:1,slowUntil:0,hitStop:0},Ee={yaw:0,pitch:.38,dist:7.35,blend:1,from:new A},mo=new A,go=new A,gu=new A,Gs=new A,_u=new A;let ve="title",be=[],yt=null,_o=0,eo=0,dn=null,js=!1,Xs=!1,Mi=0,dl=0,pa=3.5,no=0,vu=60,xu=!1;const Vn=new A,kn=new A,vo=new A,Mu=new se,ma=new A,ga=new A;function Ih(n,t,e){kn.copy(yt.group.position),kn.y+=1.32,Mu.rotation.set(0,n,0),ma.set(0,0,-1).applyQuaternion(Mu.quaternion),ga.crossVectors(ma,ho),kn.addScaledVector(ma,.55),kn.addScaledVector(ga,.48);const i=Vl();i&&kn.lerp(new A(i.group.position.x,1.2,i.group.position.z),.2),bv(n,t,e,_u),vo.copy(kn).add(_u).addScaledVector(ga,.28),sv(kn,vo)}function Qs(n){Ei.textContent=n}function Nh(n,t){fe.scale=n,fe.slowUntil=fe.real+t,je.setSlow(!0)}function yu(n){fl.textContent=n,fl.classList.add("show"),no=2.1}function Bl(n){for(const t of be)t.team===1&&qe.remove(t.group);be=be.filter(t=>t.team===0),_o=n,n>0&&yt&&(yt.hp=Math.min(yt.hpMax,yt.hp+22),yt.posture=0);for(const t of Uh[n]){const e=new A(li.x-t.x,0,li.z-t.z),i=Fl(t.kind,{x:t.x,z:t.z,yaw:ws(e),envMap:zl});qe.add(i.group),i.group.updateMatrixWorld(!0),Ol(i),i.prevTip.copy(i.tip),be.push(i)}document.getElementById("duel").textContent=`Duel ${n+1}  /  3`,n===2?yu("Kuroha"):n===1&&yu("Two enter"),eo=0}function kl(){yt||(yt=Fl("player",{x:li.x,z:li.z,yaw:0,envMap:zl}),qe.add(yt.group),yt.group.updateMatrixWorld(!0),Ol(yt),yt.prevTip.copy(yt.tip),be.push(yt))}function ur(){je.ensure(),kl(),ve="play",document.body.classList.add("playing"),wo.classList.add("hidden"),Eo.hidden=!0,Mi=.2,dl=0,Ee.from.copy(Jt.position),Ee.blend=0,Ee.yaw=yt.group.rotation.y,be.some(n=>n.team===1)||Bl(0)}function px(){yt.hp=yt.hpMax,yt.posture=0,yt.alive=!0,yt.state="idle",yt.stateT=0,yt.fade=0,yt.combo=0,yt.invuln=0,yt.flash=0,yt.group.visible=!0,yt.group.position.set(li.x,0,li.z),yt.group.rotation.y=0,yt.group.scale.setScalar(yt.baseScale),yt.body.position.y=0,yt.velocity.set(0,0,0),yt.knock.set(0,0,0)}function bo(){je.ensure(),dn=null,Xs=!1,fe.scale=1,fe.slowUntil=0,fe.hitStop=0,je.setSlow(!1),document.body.classList.remove("cinematic"),kl(),px(),Bl(0),ve="play",document.body.classList.add("playing"),wo.classList.add("hidden"),Eo.hidden=!0,Ee.blend=1,Mi=.15}function _a(n){ve=n?"victory":"defeat",fe.scale=1,je.setSlow(!1),document.body.classList.remove("cinematic"),document.getElementById("end-title").textContent=n?"The court is still":"Fallen under the branches",document.getElementById("end-body").textContent=n?"Petals cover the ground where the blades met.":"The blossoms do not wait.",Eo.hidden=!1}function mx(n,t){if(dn||n.team!==0)return;const e=new A(t.group.position.x-n.group.position.x,0,t.group.position.z-n.group.position.z);e.lengthSq()<.01&&e.set(0,0,-1),e.normalize(),n.group.rotation.y=ws(e);const i=n.group.position.clone(),s=t.group.position.clone().addScaledVector(e,1.35);dn={attacker:n,victim:t,t:0,dur:.46,start:i,end:s,yaw:n.group.rotation.y,cut:!1},n.state="finisher",n.stateT=0,n.swing.on=!1,n.invuln=1.4,t.state="finisher",t.swing.on=!1,t.hp=Math.max(0,t.hp);for(const r of be)r.team===1&&r!==t&&(r.frozen=!0);Nh(.34,1.25),document.body.classList.add("cinematic"),Ie.addShake(.04)}function gx(n){if(!dn||n<=0)return;const t=dn;t.t+=n;const e=Th(t.t/t.dur);if(t.attacker.group.position.lerpVectors(t.start,t.end,e),t.attacker.group.position.y=0,t.attacker.group.rotation.y=t.yaw,t.attacker.stateT=t.t,!t.cut&&t.t>t.dur*.42){t.cut=!0,t.victim.alive=!1,t.victim.hp=0,t.victim.state="dead";const i=t.victim.group.position.clone();i.y=1.15;const s=Li(t.attacker.group,Vn);for(let r=0;r<28;r++){const o=r/28*Math.PI*2,a=new A(Math.cos(o),.35,Math.sin(o));a.addScaledVector(s,.8).multiplyScalar(4.2),tn.emit(i,a,1)}tn.emit(i,s.multiplyScalar(5),24),Ie.burst(i,"#fff1c9",26,6),je.finisher()}if(t.t>=t.dur){for(const i of be)i.frozen=!1;t.attacker.state="idle",t.attacker.invuln=.25,dn=null,document.body.classList.remove("cinematic")}}function _x(n){if(me.gust>0){me.gust-=n,me.amp=.62+Math.max(0,me.gust)*1.4;return}me.amp=.62,pa-=n,!(pa>0)&&(pa=8.5+Math.random()*4.5,me.gust=1.65,me.dir.set(.5+Math.random()*.9,0,-.35+Math.random()*.7).normalize(),tn.gust(me.dir),je.gust())}function Vl(){let n=null,t=1e9;for(const e of be){if(e.team!==1||!e.alive)continue;const i=e.group.position.distanceTo(yt.group.position);i<t&&(n=e,t=i)}return n}function Fh(){Ih(Ee.yaw,Ee.pitch,Ee.dist),da.position.copy(vo),da.lookAt(kn),Ev(da,mo,go)}function Su(n){if(window.__hana&&window.__hana.lockCamera)return;if(ve==="title"){const i=fe.real;Jt.position.set(6.4+Math.sin(i*.15)*.45,3.7+Math.sin(i*.2)*.12,12.2),Jt.lookAt(-1.6,2.35,-2.4);return}if(ve==="victory"||ve==="defeat"){const i=ve==="victory";Vn.set(i?5.2:1.4,i?5.1:2.2,i?13.2:9),Jt.position.lerp(Vn,1-Math.exp(-.8*n)),Jt.lookAt(i?-1.2:yt.group.position.x,i?2.4:1.3,i?-2:yt.group.position.z);return}if(dn){const i=new A().lerpVectors(dn.attacker.group.position,dn.victim.group.position,.45);i.y=1.25;const s=Li(dn.attacker.group,new A);s.y=0,s.normalize();const r=new A().crossVectors(s,ho);Gs.copy(i).addScaledVector(r,3.35).addScaledVector(ho,1.35).addScaledVector(s,-.7),Jt.position.lerp(Gs,1-Math.exp(-3.2*n)),Jt.lookAt(i);return}const t=Vl();let e=yt.group.rotation.y;t&&(Vn.set(t.group.position.x-yt.group.position.x,0,t.group.position.z-yt.group.position.z),Vn.lengthSq()>.01&&(e=ws(Vn))),e+=ls.state.lookX*.26,Ee.yaw=Av(Ee.yaw,e,5.2,n),Ee.pitch=Tv(Ee.pitch,Rv(.34+ls.state.lookY*.07,.2,.58),4,n),Ih(Ee.yaw,Ee.pitch,Ee.dist),gu.copy(kn),Gs.copy(vo),Ee.blend<1?(Ee.blend=Math.min(1,Ee.blend+n/.75),Jt.position.lerpVectors(Ee.from,Gs,Th(Ee.blend))):Jt.position.copy(Gs),Jt.lookAt(gu),Ie.shake.amp>.001&&(Jt.position.x+=Math.sin(Ie.shake.t*46)*Ie.shake.amp,Jt.position.y+=Math.cos(Ie.shake.t*37)*Ie.shake.amp*.35)}function vx(n){if(!(n<=0))for(const t of be){if(!t.sword||!t.group.visible)continue;const e=t.prevTip.clone();Ol(t);const i=t.tip.clone().sub(e).divideScalar(n);if(t.prevTip.copy(t.tip),i.length()>4.5){const s=i.clone().normalize(),r=Math.min(7.5,i.length()*.32);for(let o=0;o<=4;o++){const a=t.base.clone().lerp(t.tip,o/4);tn.stir(a,s,r,1.15)}if(i.length()>7){const o=t.base.clone().lerp(t.tip,.72);tn.emit(o,s.multiplyScalar(Math.min(6.5,i.length()*.4)),t.combo===2?14:8)}}t.velocity.length()>5.2&&(tn.stir(t.group.position.clone().setY(.45),t.velocity.clone().normalize(),2.4,.85),tn.emit(t.group.position.clone().setY(.3),t.velocity.clone().setY(.6),2))}}function xx(n){const t=document.getElementById("php"),e=document.getElementById("ppost");t.style.transform=`scaleX(${Math.max(0,yt.hp/yt.hpMax)})`,e.style.transform=`scaleX(${Math.max(0,yt.posture/yt.postureMax)})`;const i=Vl(),s=document.getElementById("foe"),r=document.getElementById("chevron");if(!i||js)s.hidden=!0,r.hidden=!0;else{s.hidden=!1,document.getElementById("fname").textContent=i.name,document.getElementById("ehp").style.transform=`scaleX(${Math.max(0,i.hp/i.hpMax)})`,document.getElementById("epost").style.transform=`scaleX(${Math.max(0,i.posture/i.postureMax)})`;const l=i.bones.head.getWorldPosition(Vn);l.y+=.42,l.project(Jt),l.z<1?(r.hidden=!1,r.style.transform=`translate(${(l.x*.5+.5)*window.innerWidth}px, ${(-l.y*.5+.5)*window.innerHeight}px)`):r.hidden=!0}dl+=n,ux.classList.toggle("gone",dl>7),no>0&&(no-=n,no<=0&&fl.classList.remove("show"));const o=document.getElementById("hurt"),a=yt.hp/yt.hpMax<.35?.28:0;o.style.opacity=js?0:Math.max(a,yt.flash*.45)}function Mx(){kl();const n=[],t=[["W",1,0,"forward"],["D",0,1,"right"],["S",-1,0,"forward"],["A",0,-1,"right"]];for(const[i,s,r,o]of t){yt.group.position.set(0,0,0),yt.group.rotation.y=0,Ee.yaw=0,Ee.pitch=.34,yt.velocity.set(0,0,0),yt.knock.set(0,0,0),yt.state="idle",yt.alive=!0,Fh();const a=i==="S"||i==="A"?-1:1,l=yt.group.position.clone();for(let g=0;g<24;g++)Ch(yt,{forward:s,strafe:r,attack:!1,parry:!1,dash:!1},{forward:mo,right:go},1/60);yt.group.updateMatrixWorld(!0);const u=yt.group.position.clone().sub(l);u.y=0;const c=o==="forward"?mo:go,h=u.length()<.05?0:u.clone().normalize().dot(c)*a,f=Li(yt.group,new A);f.y=0,f.normalize();const d=u.length()<.05?0:f.dot(u.clone().normalize()),_=ex(yt).dot(f);h<.85&&n.push(`${i} moved wrong (${h.toFixed(2)})`),d<.85&&n.push(`${i} facing ${d.toFixed(2)}`),_<.8&&n.push(`${i} shoulders ${_.toFixed(2)}`)}yt.group.position.set(li.x,0,li.z),yt.group.rotation.y=0;const e=n.length?`SELFTEST FAIL ${n.join(" | ")}`:"SELFTEST PASS";return Qs(e),n.length&&console.error(e),n.length===0}function yx(n){fe.real+=n;let t=n;if(ve==="play"&&(fe.hitStop>0?(fe.hitStop=Math.max(0,fe.hitStop-n),t=0):fe.real<fe.slowUntil?t=n*fe.scale:fe.scale!==1&&(fe.scale=1,je.setSlow(!1),t=n),Xs&&(t=0)),_x(ve==="play"?t:n),Ln.update(ve==="play"?t:n),tn.update(ve==="play"?t:n),je.update(ve==="play"?t:n),hn){const e=bn==="motion";let i=!1;if(e){const r=[["guard",0],["walk",0],["cut1",.09],["cut1",.17],["cut1",.28],["parry",.12],["dash",.08],["stagger",.12],["cut3",.24],["kneel",0]],o=(Math.floor(fe.real/.55)%r.length+r.length)%r.length,a=r[o][0];i=a==="walk",hn[0].forcePose={clip:i?"guard":a,t:r[o][1]},hn[0].state=a==="kneel"?"dead":"idle",i?(hn[0].group.position.z-=n*3.6,hn[0].velocity.set(0,0,-3.6)):hn[0].group.position.z!==0&&(hn[0].group.position.set(0,0,0),hn[0].velocity.set(0,0,0))}for(const r of hn)Rh(r,n,i&&r===hn[0]);const s=e?hn[0].group.position:null;if(bn==="side"||bn==="profile"){const r=s||new A;Jt.position.set(r.x+2.5,1.15,r.z+.15),Jt.lookAt(r.x,1,r.z)}else bn==="back"?(Jt.position.set(.55,1.85,4.4),Jt.lookAt(0,1,0)):bn==="close"?(Jt.position.set(-1.35,1.2,-2.55),Jt.lookAt(-2.55,1.05,.05)):bn==="hands"?(Jt.position.set(-2.25,1.62,-.72),Jt.lookAt(-2.55,.98,-.22)):e?(Jt.position.set(s.x+1.15,1.2,s.z-2.8),Jt.lookAt(s.x,1,s.z+.05)):(Jt.position.set(.2,1.32,-6.4),Jt.lookAt(0,1.02,0));co.value.copy(lo).transformDirection(Jt.matrixWorldInverse),Rn?Rn.render():on.render(qe,Jt);return}if(ve==="play"&&yt){Mi=Math.max(0,Mi-n);const e=ls.consume();e.restart&&bo(),e.hide&&(js=!js,cx.classList.toggle("off",js)),e.pause&&(Xs=!Xs),e.mute&&je.toggleMute(),e.debug&&Ln.showDebug(Pi);const i={forward:ls.state.forward,strafe:ls.state.strafe,attack:Mi>0?!1:e.attack,parry:Mi>0?!1:e.parry,dash:Mi>0?!1:e.dash};if(Gn.has("combat")&&fe.real>.4&&fe.real<8&&(i.forward=1,Math.floor(fe.real*3)!==Math.floor((fe.real-n)*3)&&(i.attack=!0)),Fh(),!Xs){gx(t),Ch(yt,i,{forward:mo,right:go},t);for(const s of be)s.team===1&&tx(s,yt,t);sx(be);for(const s of be)s.group.updateMatrixWorld(!0);vx(t),rx(be,{onParry(s,r,o){Ie.burst(o,"#ffe1a8",22,5.5),Ie.ringAt(o),tn.emit(o,new A(0,2.2,0),18),je.clash(!0),fe.hitStop=Math.max(fe.hitStop,.055),Nh(.3,.48),Ie.addShake(.045)},onHit(s,r,o){tn.emit(o,Vn.set(0,1.4,0),8),je.cut(),fe.hitStop=Math.max(fe.hitStop,s.combo===2?.05:.032),Ie.addShake(.02),r.team===0&&r.state==="dead"&&_a(!1)},onBreak(s,r){tn.emit(r,Vn.set(0,2,0),14),je.clash(!1)},onFinisher(s,r,o){mx(s,r),Ie.burst(o,"#fff4d2",10,3)},onDeath(){_a(!1)}});for(const s of be)for(;s.events.length;)s.events.shift()==="whoosh"&&je.whoosh(s.kind==="boss"||s.combo===2?1.15:.8);!dn&&ve==="play"&&be.every(s=>s.team===0||!s.alive)?(eo+=t,eo>.85&&(_o>=Uh.length-1?_a(!0):Bl(_o+1))):dn||(eo=0)}Su(t||n*.001),xx(n),Ie.sync(be,t||.001)}else ls.consume(),Su(n),Ie.sync(be,n);Ie.update(ve==="play"&&t||n),co.value.copy(lo).transformDirection(Jt.matrixWorldInverse),Rn?Rn.render():on.render(qe,Jt)}let wu=performance.now(),va=0,Yr=0;function Oh(n){const t=Math.min(.05,Math.max(0,(n-wu)/1e3));wu=n;try{!xu&&(Gn.has("selftest")||Gn.has("combat"))&&(xu=!0,Gn.has("selftest")&&Mx(),ur()),yx(t)}catch(e){Qs(`ERROR ${e.stack||e.message}`);return}if(va++,Yr+=t,Yr>.4){if(vu=va/Yr,va=0,Yr=0,!Ei.textContent.startsWith("SELFTEST")&&!Ei.textContent.startsWith("ERROR")){const e=be.find(i=>i.team===1&&i.alive);Qs([`mode=${ve}`,`fps=${vu.toFixed(0)}`,`flowers=${Ln.stats.flowers}`,yt?`pos=${yt.group.position.x.toFixed(1)},${yt.group.position.z.toFixed(1)} hp=${yt.hp.toFixed(0)}`:"no-player",e?`foe=${e.name}:${e.hp.toFixed(0)}`:"foe=none",`wave=${_o}`].join(" "))}if(Gn.has("combat")&&fe.real>8&&Ei.textContent.indexOf("COMBAT")===-1){const e=be.find(s=>s.kind==="ronin"),i=e&&(e.hp<e.hpMax-10||!e.alive);Qs(`${i?"COMBAT PASS":"COMBAT FAIL"} ${Ei.textContent}`)}}requestAnimationFrame(Oh)}wo.addEventListener("pointerdown",()=>{ve==="title"&&ur()});Eo.addEventListener("pointerdown",()=>{(ve==="victory"||ve==="defeat")&&bo()});window.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&ve==="title"&&ur(),n.code==="KeyR"&&(ve==="victory"||ve==="defeat")&&bo()});window.addEventListener("resize",()=>{Jt.aspect=window.innerWidth/window.innerHeight,Jt.updateProjectionMatrix(),on.setSize(window.innerWidth,window.innerHeight),Rn&&Rn.setSize(window.innerWidth,window.innerHeight)});const bn=Gn.get("gallery");let hn=null;if(bn){wo.classList.add("hidden");const n=bn==="cast"?[["player","guard",0],["ronin","guard",0],["spear","thrust",.3],["boss","cut3",.24]]:bn==="motion"||bn==="profile"?[["player","guard",0]]:[["player","guard",0],["player","cut1",.09],["player","cut1",.17],["player","parry",.12]];hn=n.map(([t,e,i],s)=>{const r=Fl(t,{x:(s-1.5)*1.7,z:0,yaw:0,envMap:zl});return r.forcePose={clip:e,t:i},r.group.position.set((s-(n.length-1)/2)*1.7,0,0),qe.add(r.group),r})}Gn.has("debug")&&Ln.showDebug(Pi);Gn.has("autostart")&&ur();Jt.position.set(6.4,3.7,12.2);Jt.lookAt(-1.6,2.35,-2.4);Qs(`ready trees=${Ln.stats.trees} flowers=${Ln.stats.flowers}`);requestAnimationFrame(Oh);window.__hana={get mode(){return ve},get fighters(){return be},camera:Jt,scene:qe,lockCamera:!1,restart:bo,begin:ur};
