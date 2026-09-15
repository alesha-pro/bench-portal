var wh=Object.defineProperty;var Th=(s,t,e)=>t in s?wh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var E=(s,t,e)=>Th(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="169",Eh=0,Ha=1,Ah=2,_c=1,xc=2,En=3,jn=0,ke=1,Oe=2,Rn=0,fi=1,sn=2,Va=3,Wa=4,Ch=5,li=100,Rh=101,Ph=102,Lh=103,Ih=104,Dh=200,Uh=201,Nh=202,Fh=203,To=204,Eo=205,Oh=206,Bh=207,zh=208,kh=209,Gh=210,Hh=211,Vh=212,Wh=213,Xh=214,Ao=0,Co=1,Ro=2,Gi=3,Po=4,Lo=5,Io=6,Do=7,Mc=0,qh=1,Yh=2,Yn=0,yc=1,Sc=2,bc=3,va=4,jh=5,wc=6,Tc=7,Ec=300,Hi=301,Vi=302,Uo=303,No=304,Er=306,Bi=1e3,ui=1001,Fo=1002,We=1003,$h=1004,Ps=1005,nn=1006,Or=1007,di=1008,Ln=1009,Ac=1010,Cc=1011,xs=1012,_a=1013,pi=1014,dn=1015,Pn=1016,xa=1017,Ma=1018,Wi=1020,Rc=35902,Pc=1021,Lc=1022,fn=1023,Ic=1024,Dc=1025,zi=1026,Xi=1027,Ar=1028,ya=1029,Uc=1030,Sa=1031,ba=1033,cr=33776,hr=33777,ur=33778,dr=33779,Oo=35840,Bo=35841,zo=35842,ko=35843,Go=36196,Ho=37492,Vo=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,jo=37812,$o=37813,Ko=37814,Zo=37815,Jo=37816,Qo=37817,ta=37818,ea=37819,na=37820,ia=37821,fr=36492,sa=36494,ra=36495,Nc=36283,oa=36284,aa=36285,la=36286,Kh=3200,Zh=3201,Fc=0,Jh=1,An="",en="srgb",Kn="srgb-linear",wa="display-p3",Cr="display-p3-linear",gr="linear",ue="srgb",vr="rec709",_r="p3",_i=7680,Xa=519,Qh=512,tu=513,eu=514,Oc=515,nu=516,iu=517,su=518,ru=519,qa=35044,Ya="300 es",Cn=2e3,xr=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,ca=180/Math.PI;function $i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function ou(s,t){return(s%t+t)%t}function zr(s,t,e){return(1-e)*s+e*t}function ts(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],p=i[3],m=i[6],y=i[1],x=i[4],S=i[7],D=i[2],R=i[5],C=i[8];return r[0]=o*v+a*y+l*D,r[3]=o*p+a*x+l*R,r[6]=o*m+a*S+l*C,r[1]=c*v+h*y+d*D,r[4]=c*p+h*x+d*R,r[7]=c*m+h*S+d*C,r[2]=u*v+f*y+g*D,r[5]=u*p+f*x+g*R,r[8]=u*m+f*S+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kr.makeScale(t,e)),this}rotate(t){return this.premultiply(kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new jt;function Bc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function au(){const s=Mr("canvas");return s.style.display="block",s}const ja={};function pr(s){s in ja||(ja[s]=!0,console.warn(s))}function lu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function cu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $a=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ka=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[Kn]:{transfer:gr,primaries:vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[en]:{transfer:ue,primaries:vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Cr]:{transfer:gr,primaries:_r,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Ka),fromReference:s=>s.applyMatrix3($a)},[wa]:{transfer:ue,primaries:_r,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ka),fromReference:s=>s.applyMatrix3($a).convertLinearToSRGB()}},uu=new Set([Kn,Cr]),ee={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!uu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=es[t].toReference,i=es[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return es[s].primaries},getTransfer:function(s){return s===An?gr:es[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(es[t].luminanceCoefficients)}};function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xi;class du{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=Mr("canvas")),xi.width=t.width,xi.height=t.height;const n=xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fu=0;class zc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hr(i[o].image)):r.push(Hr(i[o]))}else r=Hr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Hr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?du.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pu=0;class Be extends ji{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=ui,i=ui,r=nn,o=di,a=fn,l=Ln,c=Be.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=$i(),this.name="",this.source=new zc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Ec;Be.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,i=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(f+1)/2,D=(m+1)/2,R=(h+u)/4,C=(d+v)/4,I=(g+p)/4;return x>S&&x>D?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=C/n):S>D?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=R/i,r=I/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=C/r,i=I/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mu extends ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kc extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gu extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let p=1-a;const m=l*u+c*f+h*g+d*v,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const D=Math.sqrt(x),R=Math.atan2(D,m*y);p=Math.sin(p*R)/D,a=Math.sin(a*R)/D}const S=a*y;if(l=l*p+u*S,c=c*p+f*S,h=h*p+g*S,d=d*p+v*S,p===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Za.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Za.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vr.copy(this).projectOnVector(t),this.sub(Vr)}reflect(t){return this.sub(Vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vr=new T,Za=new Zn;class In{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Is.subVectors(this.max,ns),Mi.subVectors(t.a,ns),yi.subVectors(t.b,ns),Si.subVectors(t.c,ns),Nn.subVectors(yi,Mi),Fn.subVectors(Si,yi),Qn.subVectors(Mi,Si);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!Wr(e,Mi,yi,Si,Is)||(e=[1,0,0,0,1,0,0,0,1],!Wr(e,Mi,yi,Si,Is))?!1:(Ds.crossVectors(Nn,Fn),e=[Ds.x,Ds.y,Ds.z],Wr(e,Mi,yi,Si,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new T,new T,new T,new T,new T,new T,new T,new T],on=new T,Ls=new In,Mi=new T,yi=new T,Si=new T,Nn=new T,Fn=new T,Qn=new T,ns=new T,Is=new T,Ds=new T,ti=new T;function Wr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ti.fromArray(s,r);const a=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const vu=new In,is=new T,Xr=new T;class Ki{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(Xr)),this.expandByPoint(is.copy(t.center).sub(Xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new T,qr=new T,Us=new T,On=new T,Yr=new T,Ns=new T,jr=new T;class Gc{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qr.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),On.copy(this.origin).sub(qr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Us),a=On.dot(this.direction),l=-On.dot(Us),c=On.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(qr).addScaledVector(Us,u),f}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,r){Yr.subVectors(e,t),Ns.subVectors(n,t),jr.crossVectors(Yr,Ns);let o=this.direction.dot(jr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(Ns.crossVectors(On,Ns));if(l<0)return null;const c=a*this.direction.dot(Yr.cross(On));if(c<0||l+c>o)return null;const h=-a*On.dot(jr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,g,v,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,v,p)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/bi.setFromMatrixColumn(t,0).length(),r=1/bi.setFromMatrixColumn(t,1).length(),o=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_u,t,xu)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Bn.crossVectors(n,Ye),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Bn.crossVectors(n,Ye)),Bn.normalize(),Fs.crossVectors(Ye,Bn),i[0]=Bn.x,i[4]=Fs.x,i[8]=Ye.x,i[1]=Bn.y,i[5]=Fs.y,i[9]=Ye.y,i[2]=Bn.z,i[6]=Fs.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],x=n[7],S=n[11],D=n[15],R=i[0],C=i[4],I=i[8],$=i[12],_=i[1],M=i[5],b=i[9],U=i[13],G=i[2],H=i[6],z=i[10],B=i[14],k=i[3],st=i[7],at=i[11],ft=i[15];return r[0]=o*R+a*_+l*G+c*k,r[4]=o*C+a*M+l*H+c*st,r[8]=o*I+a*b+l*z+c*at,r[12]=o*$+a*U+l*B+c*ft,r[1]=h*R+d*_+u*G+f*k,r[5]=h*C+d*M+u*H+f*st,r[9]=h*I+d*b+u*z+f*at,r[13]=h*$+d*U+u*B+f*ft,r[2]=g*R+v*_+p*G+m*k,r[6]=g*C+v*M+p*H+m*st,r[10]=g*I+v*b+p*z+m*at,r[14]=g*$+v*U+p*B+m*ft,r[3]=y*R+x*_+S*G+D*k,r[7]=y*C+x*M+S*H+D*st,r[11]=y*I+x*b+S*z+D*at,r[15]=y*$+x*U+S*B+D*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*f-n*l*f)+v*(+e*l*f-e*c*u+r*o*u-i*o*f+i*c*h-r*l*h)+p*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=d*p*c-v*u*c+v*l*f-a*p*f-d*l*m+a*u*m,x=g*u*c-h*p*c-g*l*f+o*p*f+h*l*m-o*u*m,S=h*v*c-g*d*c+g*a*f-o*v*f-h*a*m+o*d*m,D=g*d*l-h*v*l-g*a*u+o*v*u+h*a*p-o*d*p,R=e*y+n*x+i*S+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=y*C,t[1]=(v*u*r-d*p*r-v*i*f+n*p*f+d*i*m-n*u*m)*C,t[2]=(a*p*r-v*l*r+v*i*c-n*p*c-a*i*m+n*l*m)*C,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*C,t[4]=x*C,t[5]=(h*p*r-g*u*r+g*i*f-e*p*f-h*i*m+e*u*m)*C,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*m-e*l*m)*C,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*f+e*l*f)*C,t[8]=S*C,t[9]=(g*d*r-h*v*r-g*n*f+e*v*f+h*n*m-e*d*m)*C,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*m+e*a*m)*C,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*C,t[12]=D*C,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*p+e*d*p)*C,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*p-e*a*p)*C,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,v=o*h,p=o*d,m=a*d,y=l*c,x=l*h,S=l*d,D=n.x,R=n.y,C=n.z;return i[0]=(1-(v+m))*D,i[1]=(f+S)*D,i[2]=(g-x)*D,i[3]=0,i[4]=(f-S)*R,i[5]=(1-(u+m))*R,i[6]=(p+y)*R,i[7]=0,i[8]=(g+x)*C,i[9]=(p-y)*C,i[10]=(1-(u+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=bi.set(i[0],i[1],i[2]).length();const o=bi.set(i[4],i[5],i[6]).length(),a=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],an.copy(this);const c=1/r,h=1/o,d=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Cn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===Cn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Cn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*c,f=(n+i)*h;let g,v;if(a===Cn)g=(o+r)*d,v=-2*d;else if(a===xr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new T,an=new ce,_u=new T(0,0,0),xu=new T(1,1,1),Bn=new T,Fs=new T,Ye=new T,Ja=new ce,Qa=new Zn;class Pe{constructor(t=0,e=0,n=0,i=Pe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ja,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pe.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mu=0;const tl=new T,wi=new Zn,bn=new ce,Os=new T,ss=new T,yu=new T,Su=new Zn,el=new T(1,0,0),nl=new T(0,1,0),il=new T(0,0,1),sl={type:"added"},bu={type:"removed"},Ti={type:"childadded",child:null},$r={type:"childremoved",child:null};class Te extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new T,e=new Pe,n=new Zn,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new jt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(nl,t)}rotateZ(t){return this.rotateOnAxis(il,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(nl,t)}translateZ(t){return this.translateOnAxis(il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ss,Os,this.up):bn.lookAt(Os,ss,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(bn),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sl),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bu),$r.child=t,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sl),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new T(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new T,wn=new T,Kr=new T,Tn=new T,Ei=new T,Ai=new T,rl=new T,Zr=new T,Jr=new T,Qr=new T,to=new me,eo=new me,no=new me;class hn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),wn.subVectors(n,e),Kr.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(wn),l=ln.dot(Kr),c=wn.dot(wn),h=wn.dot(Kr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return to.setScalar(0),eo.setScalar(0),no.setScalar(0),to.fromBufferAttribute(t,e),eo.fromBufferAttribute(t,n),no.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(to,r.x),o.addScaledVector(eo,r.y),o.addScaledVector(no,r.z),o}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),wn.subVectors(t,e),ln.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),ln.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ei.subVectors(i,n),Ai.subVectors(r,n),Zr.subVectors(t,n);const l=Ei.dot(Zr),c=Ai.dot(Zr);if(l<=0&&c<=0)return e.copy(n);Jr.subVectors(t,i);const h=Ei.dot(Jr),d=Ai.dot(Jr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ei,o);Qr.subVectors(t,r);const f=Ei.dot(Qr),g=Ai.dot(Qr);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ai,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return rl.subVectors(r,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(rl,a);const m=1/(p+v+u);return o=v*m,a=u*m,e.copy(n).addScaledVector(Ei,o).addScaledVector(Ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function io(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=ou(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=io(o,r,t+1/3),this.g=io(o,r,t),this.b=io(o,r,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const n=Vc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ee.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ue(Fe.r*255,0,255))*65536+Math.round(Ue(Fe.g*255,0,255))*256+Math.round(Ue(Fe.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,i=Fe.g,r=Fe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=en){ee.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,i=Fe.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Bs);const n=zr(zn.h,Bs.h,e),i=zr(zn.s,Bs.s,e),r=zr(zn.l,Bs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Gt;Gt.NAMES=Vc;let wu=0;class Zi extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=fi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Eo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==To&&(n.blendSrc=this.blendSrc),this.blendDst!==Eo&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xn extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new T,zs=new ct;class ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class Wc extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xc extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Tu=0;const Je=new ce,so=new Te,Ci=new T,je=new In,rs=new In,Re=new T;class ye extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bc(t)?Xc:Wc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(je.min,rs.min),je.expandByPoint(Re),Re.addVectors(je.max,rs.max),je.expandByPoint(Re)):(je.expandByPoint(rs.min),je.expandByPoint(rs.max))}je.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(Ci.fromBufferAttribute(t,c),Re.add(Ci)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new T,l[I]=new T;const c=new T,h=new T,d=new T,u=new ct,f=new ct,g=new ct,v=new T,p=new T;function m(I,$,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,$),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,$),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const M=1/(f.x*g.y-g.x*f.y);isFinite(M)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(M),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(M),a[I].add(v),a[$].add(v),a[_].add(v),l[I].add(p),l[$].add(p),l[_].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,$=y.length;I<$;++I){const _=y[I],M=_.start,b=_.count;for(let U=M,G=M+b;U<G;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new T,S=new T,D=new T,R=new T;function C(I){D.fromBufferAttribute(i,I),R.copy(D);const $=a[I];x.copy($),x.sub(D.multiplyScalar(D.dot($))).normalize(),S.crossVectors(R,$);const M=S.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,M)}for(let I=0,$=y.length;I<$;++I){const _=y[I],M=_.start,b=_.count;for(let U=M,G=M+b;U<G;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,d=new T;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new ve(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ol=new ce,ei=new Gc,ks=new Ki,al=new T,Gs=new T,Hs=new T,Vs=new T,ro=new T,Ws=new T,ll=new T,Xs=new T;class Zt extends Te{constructor(t=new ye,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(ro.fromBufferAttribute(d,t),o?Ws.addScaledVector(ro,h):Ws.addScaledVector(ro.sub(e),h))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(ks.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ks,al)===null||ei.origin.distanceToSquared(al)>(t.far-t.near)**2))&&(ol.copy(r).invert(),ei.copy(t.ray).applyMatrix4(ol),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,D=x;S<D;S+=3){const R=a.getX(S),C=a.getX(S+1),I=a.getX(S+2);i=qs(this,m,t,n,c,h,d,R,C,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=qs(this,o,t,n,c,h,d,y,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,D=x;S<D;S+=3){const R=S,C=S+1,I=S+2;i=qs(this,m,t,n,c,h,d,R,C,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,x=p+1,S=p+2;i=qs(this,o,t,n,c,h,d,y,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Eu(s,t,e,n,i,r,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===jn,a),l===null)return null;Xs.copy(a),Xs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Xs);return c<e.near||c>e.far?null:{distance:c,point:Xs.clone(),object:s}}function qs(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Gs),s.getVertexPosition(l,Hs),s.getVertexPosition(c,Vs);const h=Eu(s,t,e,n,Gs,Hs,Vs,ll);if(h){const d=new T;hn.getBarycoord(ll,Gs,Hs,Vs,d),i&&(h.uv=hn.getInterpolatedAttribute(i,a,l,c,d,new ct)),r&&(h.uv1=hn.getInterpolatedAttribute(r,a,l,c,d,new ct)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,l,c,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new T,materialIndex:0};hn.getNormal(Gs,Hs,Vs,u.normal),h.face=u,h.barycoord=d}return h}class He extends ye{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function g(v,p,m,y,x,S,D,R,C,I,$){const _=S/C,M=D/I,b=S/2,U=D/2,G=R/2,H=C+1,z=I+1;let B=0,k=0;const st=new T;for(let at=0;at<z;at++){const ft=at*M-U;for(let zt=0;zt<H;zt++){const Dt=zt*_-b;st[v]=Dt*y,st[p]=ft*x,st[m]=G,c.push(st.x,st.y,st.z),st[v]=0,st[p]=0,st[m]=R>0?1:-1,h.push(st.x,st.y,st.z),d.push(zt/C),d.push(1-at/I),B+=1}}for(let at=0;at<I;at++)for(let ft=0;ft<C;ft++){const zt=u+ft+H*at,Dt=u+ft+H*(at+1),tt=u+(ft+1)+H*(at+1),q=u+(ft+1)+H*at;l.push(zt,Dt,q),l.push(Dt,tt,q),k+=6}a.addGroup(f,k,$),f+=k,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const n=qi(s[e]);for(const i in n)t[i]=n[i]}return t}function Au(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function qc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Ms={clone:qi,merge:ze};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Me extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yc extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new T,cl=new ct,hl=new ct;class Ke extends Yc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,cl,hl),e.subVectors(hl,cl)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Pi=1;class Pu extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ke(Ri,Pi,t,e);i.layers=this.layers,this.add(i);const r=new Ke(Ri,Pi,t,e);r.layers=this.layers,this.add(r);const o=new Ke(Ri,Pi,t,e);o.layers=this.layers,this.add(o);const a=new Ke(Ri,Pi,t,e);a.layers=this.layers,this.add(a);const l=new Ke(Ri,Pi,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Ri,Pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jc extends Be{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lu extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new He(5,5,5),r=new Me({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Rn});r.uniforms.tEquirect.value=e;const o=new Zt(i,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=nn),new Pu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const oo=new T,Iu=new T,Du=new jt;class oi{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=oo.subVectors(n,e).cross(Iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Du.getNormalMatrix(t),i=this.coplanarPoint(oo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Ki,Ys=new T;class Ta{constructor(t=new oi,e=new oi,n=new oi,i=new oi,r=new oi,o=new oi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],p=i[11],m=i[12],y=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-r,u-c,p-f,S-m).normalize(),n[1].setComponents(l+r,u+c,p+f,S+m).normalize(),n[2].setComponents(l+o,u+h,p+g,S+y).normalize(),n[3].setComponents(l-o,u-h,p-g,S-y).normalize(),n[4].setComponents(l-a,u-d,p-v,S-x).normalize(),e===Cn)n[5].setComponents(l+a,u+d,p+v,S+x).normalize();else if(e===xr)n[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ys.x=i.normal.x>0?t.max.x:t.min.x,Ys.y=i.normal.y>0?t.max.y:t.min.y,Ys.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $c(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Uu(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class mi extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*u-o;for(let x=0;x<c;x++){const S=x*d-r;g.push(S,-y,0),v.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,S=y+c*(m+1),D=y+1+c*(m+1),R=y+1+c*m;f.push(x,S,R),f.push(S,D,R)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fu=`#ifdef USE_ALPHAHASH
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
#endif`,Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
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
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vu=`#ifdef USE_BATCHING
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
#endif`,Wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ju=`#ifdef USE_IRIDESCENCE
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
#endif`,$u=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sd=`#define PI 3.141592653589793
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
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,od=`vec3 transformedNormal = objectNormal;
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
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`
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
}`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
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
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
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
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,Dd=`struct PhysicalMaterial {
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
}`,Ud=`
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wd=`#if defined( USE_POINTS_UV )
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
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
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
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mf=`float getShadowMask() {
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
}`,yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wf=`#ifdef USE_SKINNING
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
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`#include <common>
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
}`,Hf=`#if DEPTH_PACKING == 3200
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
}`,Vf=`#define DISTANCE
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
}`,Wf=`#define DISTANCE
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
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`uniform float scale;
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
}`,jf=`uniform vec3 diffuse;
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
}`,$f=`#include <common>
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,Jf=`#define LAMBERT
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
}`,Qf=`#define MATCAP
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
}`,tp=`#define MATCAP
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
}`,ep=`#define NORMAL
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
}`,np=`#define NORMAL
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
}`,ip=`#define PHONG
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
}`,sp=`#define PHONG
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
}`,rp=`#define STANDARD
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
}`,op=`#define STANDARD
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
}`,ap=`#define TOON
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
}`,lp=`#define TOON
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
}`,cp=`uniform float size;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,dp=`uniform vec3 color;
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
}`,fp=`uniform float rotation;
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
}`,pp=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Nu,alphahash_pars_fragment:Fu,alphamap_fragment:Ou,alphamap_pars_fragment:Bu,alphatest_fragment:zu,alphatest_pars_fragment:ku,aomap_fragment:Gu,aomap_pars_fragment:Hu,batching_pars_vertex:Vu,batching_vertex:Wu,begin_vertex:Xu,beginnormal_vertex:qu,bsdfs:Yu,iridescence_fragment:ju,bumpmap_pars_fragment:$u,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:Qu,color_fragment:td,color_pars_fragment:ed,color_pars_vertex:nd,color_vertex:id,common:sd,cube_uv_reflection_fragment:rd,defaultnormal_vertex:od,displacementmap_pars_vertex:ad,displacementmap_vertex:ld,emissivemap_fragment:cd,emissivemap_pars_fragment:hd,colorspace_fragment:ud,colorspace_pars_fragment:dd,envmap_fragment:fd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Ad,envmap_vertex:vd,fog_vertex:_d,fog_pars_vertex:xd,fog_fragment:Md,fog_pars_fragment:yd,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:bd,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Td,lights_pars_begin:Ed,lights_toon_fragment:Cd,lights_toon_pars_fragment:Rd,lights_phong_fragment:Pd,lights_phong_pars_fragment:Ld,lights_physical_fragment:Id,lights_physical_pars_fragment:Dd,lights_fragment_begin:Ud,lights_fragment_maps:Nd,lights_fragment_end:Fd,logdepthbuf_fragment:Od,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:kd,map_fragment:Gd,map_pars_fragment:Hd,map_particle_fragment:Vd,map_particle_pars_fragment:Wd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:qd,morphinstance_vertex:Yd,morphcolor_vertex:jd,morphnormal_vertex:$d,morphtarget_pars_vertex:Kd,morphtarget_vertex:Zd,normal_fragment_begin:Jd,normal_fragment_maps:Qd,normal_pars_fragment:tf,normal_pars_vertex:ef,normal_vertex:nf,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:af,iridescence_pars_fragment:lf,opaque_fragment:cf,packing:hf,premultiplied_alpha_fragment:uf,project_vertex:df,dithering_fragment:ff,dithering_pars_fragment:pf,roughnessmap_fragment:mf,roughnessmap_pars_fragment:gf,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:_f,shadowmap_vertex:xf,shadowmask_pars_fragment:Mf,skinbase_vertex:yf,skinning_pars_vertex:Sf,skinning_vertex:bf,skinnormal_vertex:wf,specularmap_fragment:Tf,specularmap_pars_fragment:Ef,tonemapping_fragment:Af,tonemapping_pars_fragment:Cf,transmission_fragment:Rf,transmission_pars_fragment:Pf,uv_pars_fragment:Lf,uv_pars_vertex:If,uv_vertex:Df,worldpos_vertex:Uf,background_vert:Nf,background_frag:Ff,backgroundCube_vert:Of,backgroundCube_frag:Bf,cube_vert:zf,cube_frag:kf,depth_vert:Gf,depth_frag:Hf,distanceRGBA_vert:Vf,distanceRGBA_frag:Wf,equirect_vert:Xf,equirect_frag:qf,linedashed_vert:Yf,linedashed_frag:jf,meshbasic_vert:$f,meshbasic_frag:Kf,meshlambert_vert:Zf,meshlambert_frag:Jf,meshmatcap_vert:Qf,meshmatcap_frag:tp,meshnormal_vert:ep,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:sp,meshphysical_vert:rp,meshphysical_frag:op,meshtoon_vert:ap,meshtoon_frag:lp,points_vert:cp,points_frag:hp,shadow_vert:up,shadow_frag:dp,sprite_vert:fp,sprite_frag:pp},bt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},vn={basic:{uniforms:ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ze([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ze([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ze([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ze([bt.points,bt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ze([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ze([bt.common,bt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ze([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ze([bt.sprite,bt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:ze([bt.common,bt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:ze([bt.lights,bt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};vn.physical={uniforms:ze([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const js={r:0,b:0,g:0},ii=new Pe,mp=new ce;function gp(s,t,e,n,i,r,o){const a=new Gt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const S=g(y);S===null?m(a,l):S&&S.isColor&&(m(S,1),x=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Er)?(h===void 0&&(h=new Zt(new He(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:qi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ii.copy(x.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mp.makeRotationFromEuler(ii)),h.material.toneMapped=ee.getTransfer(S.colorSpace)!==ue,(d!==S||u!==S.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Zt(new mi(2,2),new Me({name:"BackgroundMaterial",uniforms:qi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ee.getTransfer(S.colorSpace)!==ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(js,qc(s)),n.buffers.color.setClear(js.r,js.g,js.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:v,addToRenderList:p}}function vp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(_,M,b,U,G){let H=!1;const z=d(U,b,M);r!==z&&(r=z,c(r.object)),H=f(_,U,b,G),H&&g(_,U,b,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(_,M,b,U),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,M,b){const U=b.wireframe===!0;let G=n[_.id];G===void 0&&(G={},n[_.id]=G);let H=G[M.id];H===void 0&&(H={},G[M.id]=H);let z=H[U];return z===void 0&&(z=u(l()),H[U]=z),z}function u(_){const M=[],b=[],U=[];for(let G=0;G<e;G++)M[G]=0,b[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:b,attributeDivisors:U,object:_,attributes:{},index:null}}function f(_,M,b,U){const G=r.attributes,H=M.attributes;let z=0;const B=b.getAttributes();for(const k in B)if(B[k].location>=0){const at=G[k];let ft=H[k];if(ft===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor)),at===void 0||at.attribute!==ft||ft&&at.data!==ft.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function g(_,M,b,U){const G={},H=M.attributes;let z=0;const B=b.getAttributes();for(const k in B)if(B[k].location>=0){let at=H[k];at===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(at=_.instanceColor));const ft={};ft.attribute=at,at&&at.data&&(ft.data=at.data),G[k]=ft,z++}r.attributes=G,r.attributesNum=z,r.index=U}function v(){const _=r.newAttributes;for(let M=0,b=_.length;M<b;M++)_[M]=0}function p(_){m(_,0)}function m(_,M){const b=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;b[_]=1,U[_]===0&&(s.enableVertexAttribArray(_),U[_]=1),G[_]!==M&&(s.vertexAttribDivisor(_,M),G[_]=M)}function y(){const _=r.newAttributes,M=r.enabledAttributes;for(let b=0,U=M.length;b<U;b++)M[b]!==_[b]&&(s.disableVertexAttribArray(b),M[b]=0)}function x(_,M,b,U,G,H,z){z===!0?s.vertexAttribIPointer(_,M,b,G,H):s.vertexAttribPointer(_,M,b,U,G,H)}function S(_,M,b,U){v();const G=U.attributes,H=b.getAttributes(),z=M.defaultAttributeValues;for(const B in H){const k=H[B];if(k.location>=0){let st=G[B];if(st===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),st!==void 0){const at=st.normalized,ft=st.itemSize,zt=t.get(st);if(zt===void 0)continue;const Dt=zt.buffer,tt=zt.type,q=zt.bytesPerElement,Mt=tt===s.INT||tt===s.UNSIGNED_INT||st.gpuType===_a;if(st.isInterleavedBufferAttribute){const pt=st.data,Rt=pt.stride,Pt=st.offset;if(pt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)m(k.location+Ft,pt.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)p(k.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let Ft=0;Ft<k.locationSize;Ft++)x(k.location+Ft,ft/k.locationSize,tt,at,Rt*q,(Pt+ft/k.locationSize*Ft)*q,Mt)}else{if(st.isInstancedBufferAttribute){for(let pt=0;pt<k.locationSize;pt++)m(k.location+pt,st.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let pt=0;pt<k.locationSize;pt++)p(k.location+pt);s.bindBuffer(s.ARRAY_BUFFER,Dt);for(let pt=0;pt<k.locationSize;pt++)x(k.location+pt,ft/k.locationSize,tt,at,ft*q,ft/k.locationSize*pt*q,Mt)}}else if(z!==void 0){const at=z[B];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(k.location,at);break;case 3:s.vertexAttrib3fv(k.location,at);break;case 4:s.vertexAttrib4fv(k.location,at);break;default:s.vertexAttrib1fv(k.location,at)}}}}y()}function D(){I();for(const _ in n){const M=n[_];for(const b in M){const U=M[b];for(const G in U)h(U[G].object),delete U[G];delete M[b]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const M=n[_.id];for(const b in M){const U=M[b];for(const G in U)h(U[G].object),delete U[G];delete M[b]}delete n[_.id]}function C(_){for(const M in n){const b=n[M];if(b[_.id]===void 0)continue;const U=b[_.id];for(const G in U)h(U[G].object),delete U[G];delete b[_.id]}}function I(){$(),o=!0,r!==i&&(r=i,c(r.object))}function $(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:$,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function _p(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];for(let v=0;v<u.length;v++)e.update(g,n,u[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==fn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ln&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==dn&&!I)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:D,maxSamples:R}}function Mp(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new oi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,x=y*4;let S=m.clippingState||null;l.value=S,S=h(g,u,x,f);for(let D=0;D!==x;++D)S[D]=e[D];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=f;x!==v;++x,S+=4)o.copy(d[x]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function yp(s){let t=new WeakMap;function e(o,a){return a===Uo?o.mapping=Hi:a===No&&(o.mapping=Vi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uo||a===No)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lu(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ea extends Yc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,ul=[.125,.215,.35,.446,.526,.582],ci=20,ao=new Ea,dl=new Gt;let lo=null,co=0,ho=0,uo=!1;const ai=(1+Math.sqrt(5))/2,Li=1/ai,fl=[new T(-ai,Li,0),new T(ai,Li,0),new T(-Li,0,ai),new T(Li,0,ai),new T(0,ai,-Li),new T(0,ai,Li),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,co,ho),this._renderer.xr.enabled=uo,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Pn,format:fn,colorSpace:Kn,depthBuffer:!1},i=ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ml(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sp(r)),this._blurMaterial=bp(r,t,e)}return i}_compileMaterial(t){const e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,ao)}_sceneToCubeUV(t,e,n,i){const a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(dl),h.toneMapping=Yn,h.autoClear=!1;const f=new xn({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Zt(new He,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(dl),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;$s(i,y*x,m>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Hi||t.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;$s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ao)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fl[(i-r-1)%fl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Zt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ci-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):ci;p>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);const m=[];let y=0;for(let C=0;C<ci;++C){const I=C/v,$=Math.exp(-I*I/2);m.push($),C===0?y+=$:C<p&&(y+=2*$)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const S=this._sizeLods[i],D=3*S*(i>x-Fi?i-x+Fi:0),R=4*(this._cubeSize-S);$s(e,D,R,3*S,2*S),l.setRenderTarget(e),l.render(d,ao)}}function Sp(s){const t=[],e=[],n=[];let i=s;const r=s-Fi+1+ul.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Fi?l=ul[o-s+Fi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),x=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,I=R>2?0:-1,$=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set($,v*g*R),x.set(u,p*g*R);const _=[R,R,R,R,R,R];S.set(_,m*g*R)}const D=new ye;D.setAttribute("position",new ve(y,v)),D.setAttribute("uv",new ve(x,p)),D.setAttribute("faceIndex",new ve(S,m)),t.push(D),i>Fi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ml(s,t,e){const n=new pn(s,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function bp(s,t,e){const n=new Float32Array(ci),i=new T(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function gl(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function vl(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function wp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uo||l===No,h=l===Hi||l===Vi;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new pl(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new pl(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ep(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,S=y.length;x<S;x+=3){const D=y[x+0],R=y[x+1],C=y[x+2];u.push(D,R,R,C,C,D)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const D=x+0,R=x+1,C=x+2;u.push(D,R,R,C,C,D)}}else return;const p=new(Bc(u)?Xc:Wc)(u,1);p.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ap(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(u,f,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<v.length;y++)e.update(m,n,v[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Cp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Rp(s,t,e){const n=new WeakMap,i=new me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let _=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var f=_;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let D=a.attributes.position.count*S,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const C=new Float32Array(D*R*4*d),I=new kc(C,D,R,d);I.type=dn,I.needsUpdate=!0;const $=S*4;for(let M=0;M<d;M++){const b=m[M],U=y[M],G=x[M],H=D*R*4*M;for(let z=0;z<b.count;z++){const B=z*$;g===!0&&(i.fromBufferAttribute(b,z),C[H+B+0]=i.x,C[H+B+1]=i.y,C[H+B+2]=i.z,C[H+B+3]=0),v===!0&&(i.fromBufferAttribute(U,z),C[H+B+4]=i.x,C[H+B+5]=i.y,C[H+B+6]=i.z,C[H+B+7]=0),p===!0&&(i.fromBufferAttribute(G,z),C[H+B+8]=i.x,C[H+B+9]=i.y,C[H+B+10]=i.z,C[H+B+11]=G.itemSize===4?i.w:1)}}u={count:d,texture:I,size:new ct(D,R)},n.set(a,u),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Pp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Kc extends Be{constructor(t,e,n,i,r,o,a,l,c,h=zi){if(h!==zi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=pi),n===void 0&&h===Xi&&(n=Wi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zc=new Be,_l=new Kc(1,1),Jc=new kc,Qc=new gu,th=new jc,xl=[],Ml=[],yl=new Float32Array(16),Sl=new Float32Array(9),bl=new Float32Array(4);function Ji(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=xl[i];if(r===void 0&&(r=new Float32Array(i),xl[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Rr(s,t){let e=Ml[t];e===void 0&&(e=new Int32Array(t),Ml[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function Dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function Np(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;bl.set(n),s.uniformMatrix2fv(this.addr,!1,bl),Ce(e,n)}}function Fp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Sl.set(n),s.uniformMatrix3fv(this.addr,!1,Sl),Ce(e,n)}}function Op(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;yl.set(n),s.uniformMatrix4fv(this.addr,!1,yl),Ce(e,n)}}function Bp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function Hp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function Wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function qp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(_l.compareFunction=Oc,r=_l):r=Zc,e.setTexture2D(t||r,i)}function Yp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qc,i)}function jp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||th,i)}function $p(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jc,i)}function Kp(s){switch(s){case 5126:return Lp;case 35664:return Ip;case 35665:return Dp;case 35666:return Up;case 35674:return Np;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return kp;case 35669:case 35673:return Gp;case 5125:return Hp;case 36294:return Vp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return $p}}function Zp(s,t){s.uniform1fv(this.addr,t)}function Jp(s,t){const e=Ji(t,this.size,2);s.uniform2fv(this.addr,e)}function Qp(s,t){const e=Ji(t,this.size,3);s.uniform3fv(this.addr,e)}function tm(s,t){const e=Ji(t,this.size,4);s.uniform4fv(this.addr,e)}function em(s,t){const e=Ji(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function nm(s,t){const e=Ji(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function im(s,t){const e=Ji(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function sm(s,t){s.uniform1iv(this.addr,t)}function rm(s,t){s.uniform2iv(this.addr,t)}function om(s,t){s.uniform3iv(this.addr,t)}function am(s,t){s.uniform4iv(this.addr,t)}function lm(s,t){s.uniform1uiv(this.addr,t)}function cm(s,t){s.uniform2uiv(this.addr,t)}function hm(s,t){s.uniform3uiv(this.addr,t)}function um(s,t){s.uniform4uiv(this.addr,t)}function dm(s,t,e){const n=this.cache,i=t.length,r=Rr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Zc,r[o])}function fm(s,t,e){const n=this.cache,i=t.length,r=Rr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qc,r[o])}function pm(s,t,e){const n=this.cache,i=t.length,r=Rr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||th,r[o])}function mm(s,t,e){const n=this.cache,i=t.length,r=Rr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jc,r[o])}function gm(s){switch(s){case 5126:return Zp;case 35664:return Jp;case 35665:return Qp;case 35666:return tm;case 35674:return em;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return om;case 35669:case 35673:return am;case 5125:return lm;case 36294:return cm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}class vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kp(e.type)}}class _m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gm(e.type)}}class xm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function wl(s,t){s.seq.push(t),s.map[t.id]=t}function Mm(s,t,e){const n=s.name,i=n.length;for(fo.lastIndex=0;;){const r=fo.exec(n),o=fo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){wl(e,c===void 0?new vm(a,s,t):new _m(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new xm(a),wl(e,d)),e=d}}}class mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Mm(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Tl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ym=37297;let Sm=0;function bm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function wm(s){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(s);let n;switch(t===e?n="":t===_r&&e===vr?n="LinearDisplayP3ToLinearSRGB":t===vr&&e===_r&&(n="LinearSRGBToLinearDisplayP3"),s){case Kn:case Cr:return[n,"LinearTransferOETF"];case en:case wa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function El(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+bm(s.getShaderSource(t),o)}else return i}function Tm(s,t){const e=wm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Em(s,t){let e;switch(t){case yc:e="Linear";break;case Sc:e="Reinhard";break;case bc:e="Cineon";break;case va:e="ACESFilmic";break;case wc:e="AgX";break;case Tc:e="Neutral";break;case jh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ks=new T;function Am(){ee.getLuminanceCoefficients(Ks);const s=Ks.x.toFixed(4),t=Ks.y.toFixed(4),e=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function Rm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ps(s){return s!==""}function Al(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(s){return s.replace(Lm,Dm)}const Im=new Map;function Dm(s,t){let e=Yt[t];if(e===void 0){const n=Im.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ha(e)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(s){return s.replace(Um,Nm)}function Nm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Fm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_c?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Om(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hi:case Vi:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function zm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mc:t="ENVMAP_BLENDING_MULTIPLY";break;case qh:t="ENVMAP_BLENDING_MIX";break;case Yh:t="ENVMAP_BLENDING_ADD";break}return t}function km(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gm(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Fm(e),c=Om(e),h=Bm(e),d=zm(e),u=km(e),f=Cm(e),g=Rm(r),v=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`)):(p=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),m=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Em("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Tm("linearToOutputTexel",e.outputColorSpace),Am(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),o=ha(o),o=Al(o,e),o=Cl(o,e),a=ha(a),a=Al(a,e),a=Cl(a,e),o=Rl(o),a=Rl(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+o,S=y+m+a,D=Tl(i,i.VERTEX_SHADER,x),R=Tl(i,i.FRAGMENT_SHADER,S);i.attachShader(v,D),i.attachShader(v,R),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(M){if(s.debug.checkShaderErrors){const b=i.getProgramInfoLog(v).trim(),U=i.getShaderInfoLog(D).trim(),G=i.getShaderInfoLog(R).trim();let H=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,D,R);else{const B=El(i,D,"vertex"),k=El(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+b+`
`+B+`
`+k)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(U===""||G==="")&&(z=!1);z&&(M.diagnostics={runnable:H,programLog:b,vertexShader:{log:U,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(D),i.deleteShader(R),I=new mr(i,v),$=Pm(i,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let $;this.getAttributes=function(){return $===void 0&&C(this),$};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,ym)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}let Hm=0;class Vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wm(t),e.set(t,n)),n}}class Wm{constructor(t){this.id=Hm++,this.code=t,this.usedTimes=0}}function Xm(s,t,e,n,i,r,o){const a=new Hc,l=new Vm,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,M,b,U,G){const H=U.fog,z=G.geometry,B=_.isMeshStandardMaterial?U.environment:null,k=(_.isMeshStandardMaterial?e:t).get(_.envMap||B),st=k&&k.mapping===Er?k.image.height:null,at=v[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,zt=ft!==void 0?ft.length:0;let Dt=0;z.morphAttributes.position!==void 0&&(Dt=1),z.morphAttributes.normal!==void 0&&(Dt=2),z.morphAttributes.color!==void 0&&(Dt=3);let tt,q,Mt,pt;if(at){const ie=vn[at];tt=ie.vertexShader,q=ie.fragmentShader}else tt=_.vertexShader,q=_.fragmentShader,l.update(_),Mt=l.getVertexShaderID(_),pt=l.getFragmentShaderID(_);const Rt=s.getRenderTarget(),Pt=G.isInstancedMesh===!0,Ft=G.isBatchedMesh===!0,It=!!_.map,nt=!!_.matcap,L=!!k,mt=!!_.aoMap,_t=!!_.lightMap,ht=!!_.bumpMap,xt=!!_.normalMap,Et=!!_.displacementMap,gt=!!_.emissiveMap,P=!!_.metalnessMap,w=!!_.roughnessMap,j=_.anisotropy>0,it=_.clearcoat>0,rt=_.dispersion>0,Q=_.iridescence>0,At=_.sheen>0,St=_.transmission>0,wt=j&&!!_.anisotropyMap,Kt=it&&!!_.clearcoatMap,O=it&&!!_.clearcoatNormalMap,N=it&&!!_.clearcoatRoughnessMap,X=Q&&!!_.iridescenceMap,dt=Q&&!!_.iridescenceThicknessMap,ut=At&&!!_.sheenColorMap,Ot=At&&!!_.sheenRoughnessMap,Bt=!!_.specularMap,et=!!_.specularColorMap,F=!!_.specularIntensityMap,ot=St&&!!_.transmissionMap,Y=St&&!!_.thicknessMap,K=!!_.gradientMap,lt=!!_.alphaMap,yt=_.alphaTest>0,Wt=!!_.alphaHash,qt=!!_.extensions;let Jt=Yn;_.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Jt=s.toneMapping);const Ht={shaderID:at,shaderType:_.type,shaderName:_.name,vertexShader:tt,fragmentShader:q,defines:_.defines,customVertexShaderID:Mt,customFragmentShaderID:pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ft,batchingColor:Ft&&G._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&G.instanceColor!==null,instancingMorph:Pt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Kn,alphaToCoverage:!!_.alphaToCoverage,map:It,matcap:nt,envMap:L,envMapMode:L&&k.mapping,envMapCubeUVHeight:st,aoMap:mt,lightMap:_t,bumpMap:ht,normalMap:xt,displacementMap:f&&Et,emissiveMap:gt,normalMapObjectSpace:xt&&_.normalMapType===Jh,normalMapTangentSpace:xt&&_.normalMapType===Fc,metalnessMap:P,roughnessMap:w,anisotropy:j,anisotropyMap:wt,clearcoat:it,clearcoatMap:Kt,clearcoatNormalMap:O,clearcoatRoughnessMap:N,dispersion:rt,iridescence:Q,iridescenceMap:X,iridescenceThicknessMap:dt,sheen:At,sheenColorMap:ut,sheenRoughnessMap:Ot,specularMap:Bt,specularColorMap:et,specularIntensityMap:F,transmission:St,transmissionMap:ot,thicknessMap:Y,gradientMap:K,opaque:_.transparent===!1&&_.blending===fi&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:yt,alphaHash:Wt,combine:_.combine,mapUv:It&&p(_.map.channel),aoMapUv:mt&&p(_.aoMap.channel),lightMapUv:_t&&p(_.lightMap.channel),bumpMapUv:ht&&p(_.bumpMap.channel),normalMapUv:xt&&p(_.normalMap.channel),displacementMapUv:Et&&p(_.displacementMap.channel),emissiveMapUv:gt&&p(_.emissiveMap.channel),metalnessMapUv:P&&p(_.metalnessMap.channel),roughnessMapUv:w&&p(_.roughnessMap.channel),anisotropyMapUv:wt&&p(_.anisotropyMap.channel),clearcoatMapUv:Kt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:O&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&p(_.sheenRoughnessMap.channel),specularMapUv:Bt&&p(_.specularMap.channel),specularColorMapUv:et&&p(_.specularColorMap.channel),specularIntensityMapUv:F&&p(_.specularIntensityMap.channel),transmissionMapUv:ot&&p(_.transmissionMap.channel),thicknessMapUv:Y&&p(_.thicknessMap.channel),alphaMapUv:lt&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xt||j),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(It||lt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&b.length>0,shadowMapType:s.shadowMap.type,toneMapping:Jt,decodeVideoTexture:It&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Oe,flipSided:_.side===ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:qt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&_.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function y(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const b in _.defines)M.push(b),M.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(x(M,_),S(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function x(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function S(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function D(_){const M=v[_.type];let b;if(M){const U=vn[M];b=Ms.clone(U.uniforms)}else b=_.uniforms;return b}function R(_,M){let b;for(let U=0,G=h.length;U<G;U++){const H=h[U];if(H.cacheKey===M){b=H,++b.usedTimes;break}}return b===void 0&&(b=new Gm(s,M,_,r),h.push(b)),b}function C(_){if(--_.usedTimes===0){const M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),_.destroy()}}function I(_){l.remove(_)}function $(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:D,acquireProgram:R,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:$}}function qm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ym(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ll(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Il(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,v,p){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},s[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=p),t++,m}function a(d,u,f,g,v,p){const m=o(d,u,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(d,u,f,g,v,p){const m=o(d,u,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Ym),n.length>1&&n.sort(u||Ll),i.length>1&&i.sort(u||Ll)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function jm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Il,s.set(n,[o])):i>=r.length?(o=new Il,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function $m(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Gt};break;case"SpotLight":e={position:new T,direction:new T,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function Km(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Zm=0;function Jm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Qm(s){const t=new $m,e=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new ce,o=new ce;function a(c){let h=0,d=0,u=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,y=0,x=0,S=0,D=0,R=0,C=0;c.sort(Jm);for(let $=0,_=c.length;$<_;$++){const M=c[$],b=M.color,U=M.intensity,G=M.distance,H=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=b.r*U,d+=b.g*U,u+=b.b*U;else if(M.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(M.sh.coefficients[z],U);C++}else if(M.isDirectionalLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const B=M.shadow,k=e.get(M);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=M.shadow.matrix,y++}n.directional[f]=z,f++}else if(M.isSpotLight){const z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(b).multiplyScalar(U),z.distance=G,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,n.spot[v]=z;const B=M.shadow;if(M.map&&(n.spotLightMap[D]=M.map,D++,B.updateMatrices(M),M.castShadow&&R++),n.spotLightMatrix[v]=B.matrix,M.castShadow){const k=e.get(M);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=H,S++}v++}else if(M.isRectAreaLight){const z=t.get(M);z.color.copy(b).multiplyScalar(U),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),n.rectArea[p]=z,p++}else if(M.isPointLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const B=M.shadow,k=e.get(M);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=M.shadow.matrix,x++}n.point[g]=z,g++}else if(M.isHemisphereLight){const z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(U),z.groundColor.copy(M.groundColor).multiplyScalar(U),n.hemi[m]=z,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==x||I.numSpotShadows!==S||I.numSpotMaps!==D||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=x,I.numSpotShadows=S,I.numSpotMaps=D,I.numLightProbes=C,n.version=Zm++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(x.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Dl(s){const t=new Qm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function t0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Dl(s),t.set(i,[a])):r>=o.length?(a=new Dl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class e0 extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n0 extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
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
}`;function r0(s,t,e){let n=new Ta;const i=new ct,r=new ct,o=new me,a=new e0({depthPacking:Zh}),l=new n0,c={},h=e.maxTextureSize,d={[jn]:ke,[ke]:jn,[Oe]:Oe},u=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:i0,fragmentShader:s0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let m=this.type;this.render=function(R,C,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const $=s.getRenderTarget(),_=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),b=s.state;b.setBlending(Rn),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);const U=m!==En&&this.type===En,G=m===En&&this.type!==En;for(let H=0,z=R.length;H<z;H++){const B=R[H],k=B.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const st=k.getFrameExtents();if(i.multiply(st),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,k.mapSize.y=r.y)),k.map===null||U===!0||G===!0){const ft=this.type!==En?{minFilter:We,magFilter:We}:{};k.map!==null&&k.map.dispose(),k.map=new pn(i.x,i.y,ft),k.map.texture.name=B.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const at=k.getViewportCount();for(let ft=0;ft<at;ft++){const zt=k.getViewport(ft);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),b.viewport(o),k.updateMatrices(B,ft),n=k.getFrustum(),S(C,I,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===En&&y(k,I),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget($,_,M)};function y(R,C){const I=t.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pn(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,I,u,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,I,f,v,null)}function x(R,C,I,$){let _=null;const M=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)_=M;else if(_=I.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const b=_.uuid,U=C.uuid;let G=c[b];G===void 0&&(G={},c[b]=G);let H=G[U];H===void 0&&(H=_.clone(),G[U]=H,C.addEventListener("dispose",D)),_=H}if(_.visible=C.visible,_.wireframe=C.wireframe,$===En?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:d[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const b=s.properties.get(_);b.light=I}return _}function S(R,C,I,$,_){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===En)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const U=t.update(R),G=R.material;if(Array.isArray(G)){const H=U.groups;for(let z=0,B=H.length;z<B;z++){const k=H[z],st=G[k.materialIndex];if(st&&st.visible){const at=x(R,st,$,_);R.onBeforeShadow(s,R,C,I,U,at,k),s.renderBufferDirect(I,null,U,at,R,k),R.onAfterShadow(s,R,C,I,U,at,k)}}}else if(G.visible){const H=x(R,G,$,_);R.onBeforeShadow(s,R,C,I,U,H,null),s.renderBufferDirect(I,null,U,H,R,null),R.onAfterShadow(s,R,C,I,U,H,null)}}const b=R.children;for(let U=0,G=b.length;U<G;U++)S(b[U],C,I,$,_)}function D(R){R.target.removeEventListener("dispose",D);for(const I in c){const $=c[I],_=R.target.uuid;_ in $&&($[_].dispose(),delete $[_])}}}const o0={[Ao]:Co,[Ro]:Io,[Po]:Do,[Gi]:Lo,[Co]:Ao,[Io]:Ro,[Do]:Po,[Lo]:Gi};function a0(s){function t(){let F=!1;const ot=new me;let Y=null;const K=new me(0,0,0,0);return{setMask:function(lt){Y!==lt&&!F&&(s.colorMask(lt,lt,lt,lt),Y=lt)},setLocked:function(lt){F=lt},setClear:function(lt,yt,Wt,qt,Jt){Jt===!0&&(lt*=qt,yt*=qt,Wt*=qt),ot.set(lt,yt,Wt,qt),K.equals(ot)===!1&&(s.clearColor(lt,yt,Wt,qt),K.copy(ot))},reset:function(){F=!1,Y=null,K.set(-1,0,0,0)}}}function e(){let F=!1,ot=!1,Y=null,K=null,lt=null;return{setReversed:function(yt){ot=yt},setTest:function(yt){yt?Mt(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(yt){Y!==yt&&!F&&(s.depthMask(yt),Y=yt)},setFunc:function(yt){if(ot&&(yt=o0[yt]),K!==yt){switch(yt){case Ao:s.depthFunc(s.NEVER);break;case Co:s.depthFunc(s.ALWAYS);break;case Ro:s.depthFunc(s.LESS);break;case Gi:s.depthFunc(s.LEQUAL);break;case Po:s.depthFunc(s.EQUAL);break;case Lo:s.depthFunc(s.GEQUAL);break;case Io:s.depthFunc(s.GREATER);break;case Do:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=yt}},setLocked:function(yt){F=yt},setClear:function(yt){lt!==yt&&(s.clearDepth(yt),lt=yt)},reset:function(){F=!1,Y=null,K=null,lt=null}}}function n(){let F=!1,ot=null,Y=null,K=null,lt=null,yt=null,Wt=null,qt=null,Jt=null;return{setTest:function(Ht){F||(Ht?Mt(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(Ht){ot!==Ht&&!F&&(s.stencilMask(Ht),ot=Ht)},setFunc:function(Ht,ie,Ee){(Y!==Ht||K!==ie||lt!==Ee)&&(s.stencilFunc(Ht,ie,Ee),Y=Ht,K=ie,lt=Ee)},setOp:function(Ht,ie,Ee){(yt!==Ht||Wt!==ie||qt!==Ee)&&(s.stencilOp(Ht,ie,Ee),yt=Ht,Wt=ie,qt=Ee)},setLocked:function(Ht){F=Ht},setClear:function(Ht){Jt!==Ht&&(s.clearStencil(Ht),Jt=Ht)},reset:function(){F=!1,ot=null,Y=null,K=null,lt=null,yt=null,Wt=null,qt=null,Jt=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,v=null,p=null,m=null,y=null,x=null,S=null,D=null,R=new Gt(0,0,0),C=0,I=!1,$=null,_=null,M=null,b=null,U=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=z>=2);let k=null,st={};const at=s.getParameter(s.SCISSOR_BOX),ft=s.getParameter(s.VIEWPORT),zt=new me().fromArray(at),Dt=new me().fromArray(ft);function tt(F,ot,Y,K){const lt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(F,yt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<Y;Wt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(ot+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return yt}const q={};q[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Mt(s.DEPTH_TEST),r.setFunc(Gi),_t(!1),ht(Ha),Mt(s.CULL_FACE),L(Rn);function Mt(F){c[F]!==!0&&(s.enable(F),c[F]=!0)}function pt(F){c[F]!==!1&&(s.disable(F),c[F]=!1)}function Rt(F,ot){return h[F]!==ot?(s.bindFramebuffer(F,ot),h[F]=ot,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ot),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function Pt(F,ot){let Y=u,K=!1;if(F){Y=d.get(ot),Y===void 0&&(Y=[],d.set(ot,Y));const lt=F.textures;if(Y.length!==lt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Wt=lt.length;yt<Wt;yt++)Y[yt]=s.COLOR_ATTACHMENT0+yt;Y.length=lt.length,K=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,K=!0);K&&s.drawBuffers(Y)}function Ft(F){return f!==F?(s.useProgram(F),f=F,!0):!1}const It={[li]:s.FUNC_ADD,[Rh]:s.FUNC_SUBTRACT,[Ph]:s.FUNC_REVERSE_SUBTRACT};It[Lh]=s.MIN,It[Ih]=s.MAX;const nt={[Dh]:s.ZERO,[Uh]:s.ONE,[Nh]:s.SRC_COLOR,[To]:s.SRC_ALPHA,[Gh]:s.SRC_ALPHA_SATURATE,[zh]:s.DST_COLOR,[Oh]:s.DST_ALPHA,[Fh]:s.ONE_MINUS_SRC_COLOR,[Eo]:s.ONE_MINUS_SRC_ALPHA,[kh]:s.ONE_MINUS_DST_COLOR,[Bh]:s.ONE_MINUS_DST_ALPHA,[Hh]:s.CONSTANT_COLOR,[Vh]:s.ONE_MINUS_CONSTANT_COLOR,[Wh]:s.CONSTANT_ALPHA,[Xh]:s.ONE_MINUS_CONSTANT_ALPHA};function L(F,ot,Y,K,lt,yt,Wt,qt,Jt,Ht){if(F===Rn){g===!0&&(pt(s.BLEND),g=!1);return}if(g===!1&&(Mt(s.BLEND),g=!0),F!==Ch){if(F!==v||Ht!==I){if((p!==li||x!==li)&&(s.blendEquation(s.FUNC_ADD),p=li,x=li),Ht)switch(F){case fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sn:s.blendFunc(s.ONE,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,y=null,S=null,D=null,R.set(0,0,0),C=0,v=F,I=Ht}return}lt=lt||ot,yt=yt||Y,Wt=Wt||K,(ot!==p||lt!==x)&&(s.blendEquationSeparate(It[ot],It[lt]),p=ot,x=lt),(Y!==m||K!==y||yt!==S||Wt!==D)&&(s.blendFuncSeparate(nt[Y],nt[K],nt[yt],nt[Wt]),m=Y,y=K,S=yt,D=Wt),(qt.equals(R)===!1||Jt!==C)&&(s.blendColor(qt.r,qt.g,qt.b,Jt),R.copy(qt),C=Jt),v=F,I=!1}function mt(F,ot){F.side===Oe?pt(s.CULL_FACE):Mt(s.CULL_FACE);let Y=F.side===ke;ot&&(Y=!Y),_t(Y),F.blending===fi&&F.transparent===!1?L(Rn):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),i.setMask(F.colorWrite);const K=F.stencilWrite;o.setTest(K),K&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Et(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Mt(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(F){$!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),$=F)}function ht(F){F!==Eh?(Mt(s.CULL_FACE),F!==_&&(F===Ha?s.cullFace(s.BACK):F===Ah?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),_=F}function xt(F){F!==M&&(H&&s.lineWidth(F),M=F)}function Et(F,ot,Y){F?(Mt(s.POLYGON_OFFSET_FILL),(b!==ot||U!==Y)&&(s.polygonOffset(ot,Y),b=ot,U=Y)):pt(s.POLYGON_OFFSET_FILL)}function gt(F){F?Mt(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function P(F){F===void 0&&(F=s.TEXTURE0+G-1),k!==F&&(s.activeTexture(F),k=F)}function w(F,ot,Y){Y===void 0&&(k===null?Y=s.TEXTURE0+G-1:Y=k);let K=st[Y];K===void 0&&(K={type:void 0,texture:void 0},st[Y]=K),(K.type!==F||K.texture!==ot)&&(k!==Y&&(s.activeTexture(Y),k=Y),s.bindTexture(F,ot||q[F]),K.type=F,K.texture=ot)}function j(){const F=st[k];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function it(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function O(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(F){zt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),zt.copy(F))}function ut(F){Dt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Dt.copy(F))}function Ot(F,ot){let Y=l.get(ot);Y===void 0&&(Y=new WeakMap,l.set(ot,Y));let K=Y.get(F);K===void 0&&(K=s.getUniformBlockIndex(ot,F.name),Y.set(F,K))}function Bt(F,ot){const K=l.get(ot).get(F);a.get(ot)!==K&&(s.uniformBlockBinding(ot,K,F.__bindingPointIndex),a.set(ot,K))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},k=null,st={},h={},d=new WeakMap,u=[],f=null,g=!1,v=null,p=null,m=null,y=null,x=null,S=null,D=null,R=new Gt(0,0,0),C=0,I=!1,$=null,_=null,M=null,b=null,U=null,zt.set(0,0,s.canvas.width,s.canvas.height),Dt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Mt,disable:pt,bindFramebuffer:Rt,drawBuffers:Pt,useProgram:Ft,setBlending:L,setMaterial:mt,setFlipSided:_t,setCullFace:ht,setLineWidth:xt,setPolygonOffset:Et,setScissorTest:gt,activeTexture:P,bindTexture:w,unbindTexture:j,compressedTexImage2D:it,compressedTexImage3D:rt,texImage2D:N,texImage3D:X,updateUBOMapping:Ot,uniformBlockBinding:Bt,texStorage2D:Kt,texStorage3D:O,texSubImage2D:Q,texSubImage3D:At,compressedTexSubImage2D:St,compressedTexSubImage3D:wt,scissor:dt,viewport:ut,reset:et}}function Ul(s,t,e,n){const i=l0(n);switch(e){case Pc:return s*t;case Ic:return s*t;case Dc:return s*t*2;case Ar:return s*t/i.components*i.byteLength;case ya:return s*t/i.components*i.byteLength;case Uc:return s*t*2/i.components*i.byteLength;case Sa:return s*t*2/i.components*i.byteLength;case Lc:return s*t*3/i.components*i.byteLength;case fn:return s*t*4/i.components*i.byteLength;case ba:return s*t*4/i.components*i.byteLength;case cr:case hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ur:case dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bo:case ko:return Math.max(s,16)*Math.max(t,8)/4;case Oo:case zo:return Math.max(s,8)*Math.max(t,8)/2;case Go:case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ta:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ea:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case na:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ia:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fr:case sa:case ra:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Nc:case oa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case aa:case la:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l0(s){switch(s){case Ln:case Ac:return{byteLength:1,components:1};case xs:case Cc:case Pn:return{byteLength:2,components:1};case xa:case Ma:return{byteLength:2,components:4};case pi:case _a:case dn:return{byteLength:4,components:1};case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function c0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return f?new OffscreenCanvas(P,w):Mr("canvas")}function v(P,w,j){let it=1;const rt=gt(P);if((rt.width>j||rt.height>j)&&(it=j/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(it*rt.width),At=Math.floor(it*rt.height);d===void 0&&(d=g(Q,At));const St=w?g(Q,At):d;return St.width=Q,St.height=At,St.getContext("2d").drawImage(P,0,0,Q,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Q+"x"+At+")."),St}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==We&&P.minFilter!==nn}function m(P){s.generateMipmap(P)}function y(P,w,j,it,rt=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=w;if(w===s.RED&&(j===s.FLOAT&&(Q=s.R32F),j===s.HALF_FLOAT&&(Q=s.R16F),j===s.UNSIGNED_BYTE&&(Q=s.R8)),w===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(Q=s.R8UI),j===s.UNSIGNED_SHORT&&(Q=s.R16UI),j===s.UNSIGNED_INT&&(Q=s.R32UI),j===s.BYTE&&(Q=s.R8I),j===s.SHORT&&(Q=s.R16I),j===s.INT&&(Q=s.R32I)),w===s.RG&&(j===s.FLOAT&&(Q=s.RG32F),j===s.HALF_FLOAT&&(Q=s.RG16F),j===s.UNSIGNED_BYTE&&(Q=s.RG8)),w===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(Q=s.RG8UI),j===s.UNSIGNED_SHORT&&(Q=s.RG16UI),j===s.UNSIGNED_INT&&(Q=s.RG32UI),j===s.BYTE&&(Q=s.RG8I),j===s.SHORT&&(Q=s.RG16I),j===s.INT&&(Q=s.RG32I)),w===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),j===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),j===s.UNSIGNED_INT&&(Q=s.RGB32UI),j===s.BYTE&&(Q=s.RGB8I),j===s.SHORT&&(Q=s.RGB16I),j===s.INT&&(Q=s.RGB32I)),w===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),j===s.UNSIGNED_INT&&(Q=s.RGBA32UI),j===s.BYTE&&(Q=s.RGBA8I),j===s.SHORT&&(Q=s.RGBA16I),j===s.INT&&(Q=s.RGBA32I)),w===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),w===s.RGBA){const At=rt?gr:ee.getTransfer(it);j===s.FLOAT&&(Q=s.RGBA32F),j===s.HALF_FLOAT&&(Q=s.RGBA16F),j===s.UNSIGNED_BYTE&&(Q=At===ue?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(P,w){let j;return P?w===null||w===pi||w===Wi?j=s.DEPTH24_STENCIL8:w===dn?j=s.DEPTH32F_STENCIL8:w===xs&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===pi||w===Wi?j=s.DEPTH_COMPONENT24:w===dn?j=s.DEPTH_COMPONENT32F:w===xs&&(j=s.DEPTH_COMPONENT16),j}function S(P,w){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==We&&P.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function D(P){const w=P.target;w.removeEventListener("dispose",D),C(w),w.isVideoTexture&&h.delete(w)}function R(P){const w=P.target;w.removeEventListener("dispose",R),$(w)}function C(P){const w=n.get(P);if(w.__webglInit===void 0)return;const j=P.source,it=u.get(j);if(it){const rt=it[w.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&I(P),Object.keys(it).length===0&&u.delete(j)}n.remove(P)}function I(P){const w=n.get(P);s.deleteTexture(w.__webglTexture);const j=P.source,it=u.get(j);delete it[w.__cacheKey],o.memory.textures--}function $(P){const w=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(w.__webglFramebuffer[it]))for(let rt=0;rt<w.__webglFramebuffer[it].length;rt++)s.deleteFramebuffer(w.__webglFramebuffer[it][rt]);else s.deleteFramebuffer(w.__webglFramebuffer[it]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[it])}else{if(Array.isArray(w.__webglFramebuffer))for(let it=0;it<w.__webglFramebuffer.length;it++)s.deleteFramebuffer(w.__webglFramebuffer[it]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let it=0;it<w.__webglColorRenderbuffer.length;it++)w.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[it]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const j=P.textures;for(let it=0,rt=j.length;it<rt;it++){const Q=n.get(j[it]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(j[it])}n.remove(P)}let _=0;function M(){_=0}function b(){const P=_;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),_+=1,P}function U(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function G(P,w){const j=n.get(P);if(P.isVideoTexture&&xt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const it=P.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(j,P,w);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+w)}function H(P,w){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Dt(j,P,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+w)}function z(P,w){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Dt(j,P,w);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+w)}function B(P,w){const j=n.get(P);if(P.version>0&&j.__version!==P.version){tt(j,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+w)}const k={[Bi]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[Fo]:s.MIRRORED_REPEAT},st={[We]:s.NEAREST,[$h]:s.NEAREST_MIPMAP_NEAREST,[Ps]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[Or]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},at={[Qh]:s.NEVER,[ru]:s.ALWAYS,[tu]:s.LESS,[Oc]:s.LEQUAL,[eu]:s.EQUAL,[su]:s.GEQUAL,[nu]:s.GREATER,[iu]:s.NOTEQUAL};function ft(P,w){if(w.type===dn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===nn||w.magFilter===Or||w.magFilter===Ps||w.magFilter===di||w.minFilter===nn||w.minFilter===Or||w.minFilter===Ps||w.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,k[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,k[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,k[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,st[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,st[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,at[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===We||w.minFilter!==Ps&&w.minFilter!==di||w.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function zt(P,w){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",D));const it=w.source;let rt=u.get(it);rt===void 0&&(rt={},u.set(it,rt));const Q=U(w);if(Q!==P.__cacheKey){rt[Q]===void 0&&(rt[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),rt[Q].usedTimes++;const At=rt[P.__cacheKey];At!==void 0&&(rt[P.__cacheKey].usedTimes--,At.usedTimes===0&&I(w)),P.__cacheKey=Q,P.__webglTexture=rt[Q].texture}return j}function Dt(P,w,j){let it=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=s.TEXTURE_3D);const rt=zt(P,w),Q=w.source;e.bindTexture(it,P.__webglTexture,s.TEXTURE0+j);const At=n.get(Q);if(Q.version!==At.__version||rt===!0){e.activeTexture(s.TEXTURE0+j);const St=ee.getPrimaries(ee.workingColorSpace),wt=w.colorSpace===An?null:ee.getPrimaries(w.colorSpace),Kt=w.colorSpace===An||St===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let O=v(w.image,!1,i.maxTextureSize);O=Et(w,O);const N=r.convert(w.format,w.colorSpace),X=r.convert(w.type);let dt=y(w.internalFormat,N,X,w.colorSpace,w.isVideoTexture);ft(it,w);let ut;const Ot=w.mipmaps,Bt=w.isVideoTexture!==!0,et=At.__version===void 0||rt===!0,F=Q.dataReady,ot=S(w,O);if(w.isDepthTexture)dt=x(w.format===Xi,w.type),et&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,dt,O.width,O.height):e.texImage2D(s.TEXTURE_2D,0,dt,O.width,O.height,0,N,X,null));else if(w.isDataTexture)if(Ot.length>0){Bt&&et&&e.texStorage2D(s.TEXTURE_2D,ot,dt,Ot[0].width,Ot[0].height);for(let Y=0,K=Ot.length;Y<K;Y++)ut=Ot[Y],Bt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ut.width,ut.height,N,X,ut.data):e.texImage2D(s.TEXTURE_2D,Y,dt,ut.width,ut.height,0,N,X,ut.data);w.generateMipmaps=!1}else Bt?(et&&e.texStorage2D(s.TEXTURE_2D,ot,dt,O.width,O.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,O.width,O.height,N,X,O.data)):e.texImage2D(s.TEXTURE_2D,0,dt,O.width,O.height,0,N,X,O.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Bt&&et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,dt,Ot[0].width,Ot[0].height,O.depth);for(let Y=0,K=Ot.length;Y<K;Y++)if(ut=Ot[Y],w.format!==fn)if(N!==null)if(Bt){if(F)if(w.layerUpdates.size>0){const lt=Ul(ut.width,ut.height,w.format,w.type);for(const yt of w.layerUpdates){const Wt=ut.data.subarray(yt*lt/ut.data.BYTES_PER_ELEMENT,(yt+1)*lt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,yt,ut.width,ut.height,1,N,Wt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,O.depth,N,ut.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,dt,ut.width,ut.height,O.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,O.depth,N,X,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,dt,ut.width,ut.height,O.depth,0,N,X,ut.data)}else{Bt&&et&&e.texStorage2D(s.TEXTURE_2D,ot,dt,Ot[0].width,Ot[0].height);for(let Y=0,K=Ot.length;Y<K;Y++)ut=Ot[Y],w.format!==fn?N!==null?Bt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ut.width,ut.height,N,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,dt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ut.width,ut.height,N,X,ut.data):e.texImage2D(s.TEXTURE_2D,Y,dt,ut.width,ut.height,0,N,X,ut.data)}else if(w.isDataArrayTexture)if(Bt){if(et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,dt,O.width,O.height,O.depth),F)if(w.layerUpdates.size>0){const Y=Ul(O.width,O.height,w.format,w.type);for(const K of w.layerUpdates){const lt=O.data.subarray(K*Y/O.data.BYTES_PER_ELEMENT,(K+1)*Y/O.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,O.width,O.height,1,N,X,lt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,N,X,O.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,O.width,O.height,O.depth,0,N,X,O.data);else if(w.isData3DTexture)Bt?(et&&e.texStorage3D(s.TEXTURE_3D,ot,dt,O.width,O.height,O.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,N,X,O.data)):e.texImage3D(s.TEXTURE_3D,0,dt,O.width,O.height,O.depth,0,N,X,O.data);else if(w.isFramebufferTexture){if(et)if(Bt)e.texStorage2D(s.TEXTURE_2D,ot,dt,O.width,O.height);else{let Y=O.width,K=O.height;for(let lt=0;lt<ot;lt++)e.texImage2D(s.TEXTURE_2D,lt,dt,Y,K,0,N,X,null),Y>>=1,K>>=1}}else if(Ot.length>0){if(Bt&&et){const Y=gt(Ot[0]);e.texStorage2D(s.TEXTURE_2D,ot,dt,Y.width,Y.height)}for(let Y=0,K=Ot.length;Y<K;Y++)ut=Ot[Y],Bt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,N,X,ut):e.texImage2D(s.TEXTURE_2D,Y,dt,N,X,ut);w.generateMipmaps=!1}else if(Bt){if(et){const Y=gt(O);e.texStorage2D(s.TEXTURE_2D,ot,dt,Y.width,Y.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,N,X,O)}else e.texImage2D(s.TEXTURE_2D,0,dt,N,X,O);p(w)&&m(it),At.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function tt(P,w,j){if(w.image.length!==6)return;const it=zt(P,w),rt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);const Q=n.get(rt);if(rt.version!==Q.__version||it===!0){e.activeTexture(s.TEXTURE0+j);const At=ee.getPrimaries(ee.workingColorSpace),St=w.colorSpace===An?null:ee.getPrimaries(w.colorSpace),wt=w.colorSpace===An||At===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Kt=w.isCompressedTexture||w.image[0].isCompressedTexture,O=w.image[0]&&w.image[0].isDataTexture,N=[];for(let K=0;K<6;K++)!Kt&&!O?N[K]=v(w.image[K],!0,i.maxCubemapSize):N[K]=O?w.image[K].image:w.image[K],N[K]=Et(w,N[K]);const X=N[0],dt=r.convert(w.format,w.colorSpace),ut=r.convert(w.type),Ot=y(w.internalFormat,dt,ut,w.colorSpace),Bt=w.isVideoTexture!==!0,et=Q.__version===void 0||it===!0,F=rt.dataReady;let ot=S(w,X);ft(s.TEXTURE_CUBE_MAP,w);let Y;if(Kt){Bt&&et&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Ot,X.width,X.height);for(let K=0;K<6;K++){Y=N[K].mipmaps;for(let lt=0;lt<Y.length;lt++){const yt=Y[lt];w.format!==fn?dt!==null?Bt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,yt.width,yt.height,dt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Ot,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,yt.width,yt.height,dt,ut,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Ot,yt.width,yt.height,0,dt,ut,yt.data)}}}else{if(Y=w.mipmaps,Bt&&et){Y.length>0&&ot++;const K=gt(N[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Ot,K.width,K.height)}for(let K=0;K<6;K++)if(O){Bt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,N[K].width,N[K].height,dt,ut,N[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,N[K].width,N[K].height,0,dt,ut,N[K].data);for(let lt=0;lt<Y.length;lt++){const Wt=Y[lt].image[K].image;Bt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Wt.width,Wt.height,dt,ut,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Ot,Wt.width,Wt.height,0,dt,ut,Wt.data)}}else{Bt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt,ut,N[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,dt,ut,N[K]);for(let lt=0;lt<Y.length;lt++){const yt=Y[lt];Bt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,dt,ut,yt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Ot,dt,ut,yt.image[K])}}}p(w)&&m(s.TEXTURE_CUBE_MAP),Q.__version=rt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function q(P,w,j,it,rt,Q){const At=r.convert(j.format,j.colorSpace),St=r.convert(j.type),wt=y(j.internalFormat,At,St,j.colorSpace);if(!n.get(w).__hasExternalTextures){const O=Math.max(1,w.width>>Q),N=Math.max(1,w.height>>Q);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,Q,wt,O,N,w.depth,0,At,St,null):e.texImage2D(rt,Q,wt,O,N,0,At,St,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ht(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,rt,n.get(j).__webglTexture,0,_t(w)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,rt,n.get(j).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(P,w,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const it=w.depthTexture,rt=it&&it.isDepthTexture?it.type:null,Q=x(w.stencilBuffer,rt),At=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=_t(w);ht(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,Q,w.width,w.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,Q,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Q,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,P)}else{const it=w.textures;for(let rt=0;rt<it.length;rt++){const Q=it[rt],At=r.convert(Q.format,Q.colorSpace),St=r.convert(Q.type),wt=y(Q.internalFormat,At,St,Q.colorSpace),Kt=_t(w);j&&ht(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,wt,w.width,w.height):ht(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,wt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,wt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const it=n.get(w.depthTexture).__webglTexture,rt=_t(w);if(w.depthTexture.format===zi)ht(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(w.depthTexture.format===Xi)ht(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Rt(P){const w=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const it=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),it){const rt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,it.removeEventListener("dispose",rt)};it.addEventListener("dispose",rt),w.__depthDisposeCallback=rt}w.__boundDepthTexture=it}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");pt(w.__webglFramebuffer,P)}else if(j){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]===void 0)w.__webglDepthbuffer[it]=s.createRenderbuffer(),Mt(w.__webglDepthbuffer[it],P,!1);else{const rt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[it];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Mt(w.__webglDepthbuffer,P,!1);else{const it=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,rt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(P,w,j){const it=n.get(P);w!==void 0&&q(it.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Rt(P)}function Ft(P){const w=P.texture,j=n.get(P),it=n.get(w);P.addEventListener("dispose",R);const rt=P.textures,Q=P.isWebGLCubeRenderTarget===!0,At=rt.length>1;if(At||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=w.version,o.memory.textures++),Q){j.__webglFramebuffer=[];for(let St=0;St<6;St++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[St]=[];for(let wt=0;wt<w.mipmaps.length;wt++)j.__webglFramebuffer[St][wt]=s.createFramebuffer()}else j.__webglFramebuffer[St]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let St=0;St<w.mipmaps.length;St++)j.__webglFramebuffer[St]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(At)for(let St=0,wt=rt.length;St<wt;St++){const Kt=n.get(rt[St]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ht(P)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let St=0;St<rt.length;St++){const wt=rt[St];j.__webglColorRenderbuffer[St]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[St]);const Kt=r.convert(wt.format,wt.colorSpace),O=r.convert(wt.type),N=y(wt.internalFormat,Kt,O,wt.colorSpace,P.isXRRenderTarget===!0),X=_t(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,X,N,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,j.__webglColorRenderbuffer[St])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(j.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),ft(s.TEXTURE_CUBE_MAP,w);for(let St=0;St<6;St++)if(w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)q(j.__webglFramebuffer[St][wt],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,wt);else q(j.__webglFramebuffer[St],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);p(w)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let St=0,wt=rt.length;St<wt;St++){const Kt=rt[St],O=n.get(Kt);e.bindTexture(s.TEXTURE_2D,O.__webglTexture),ft(s.TEXTURE_2D,Kt),q(j.__webglFramebuffer,P,Kt,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,0),p(Kt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let St=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(St,it.__webglTexture),ft(St,w),w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)q(j.__webglFramebuffer[wt],P,w,s.COLOR_ATTACHMENT0,St,wt);else q(j.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,St,0);p(w)&&m(St),e.unbindTexture()}P.depthBuffer&&Rt(P)}function It(P){const w=P.textures;for(let j=0,it=w.length;j<it;j++){const rt=w[j];if(p(rt)){const Q=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,At=n.get(rt).__webglTexture;e.bindTexture(Q,At),m(Q),e.unbindTexture()}}}const nt=[],L=[];function mt(P){if(P.samples>0){if(ht(P)===!1){const w=P.textures,j=P.width,it=P.height;let rt=s.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(P),St=w.length>1;if(St)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),St){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);const Kt=n.get(w[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Kt,0)}s.blitFramebuffer(0,0,j,it,0,0,j,it,rt,s.NEAREST),l===!0&&(nt.length=0,L.length=0,nt.push(s.COLOR_ATTACHMENT0+wt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(nt.push(Q),L.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),St)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);const Kt=n.get(w[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function _t(P){return Math.min(i.maxSamples,P.samples)}function ht(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function xt(P){const w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Et(P,w){const j=P.colorSpace,it=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==Kn&&j!==An&&(ee.getTransfer(j)===ue?(it!==fn||rt!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}function gt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=b,this.resetTextureUnits=M,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=B,this.rebindTextures=Pt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ht}function h0(s,t){function e(n,i=An){let r;const o=ee.getTransfer(i);if(n===Ln)return s.UNSIGNED_BYTE;if(n===xa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ac)return s.BYTE;if(n===Cc)return s.SHORT;if(n===xs)return s.UNSIGNED_SHORT;if(n===_a)return s.INT;if(n===pi)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===Pn)return s.HALF_FLOAT;if(n===Pc)return s.ALPHA;if(n===Lc)return s.RGB;if(n===fn)return s.RGBA;if(n===Ic)return s.LUMINANCE;if(n===Dc)return s.LUMINANCE_ALPHA;if(n===zi)return s.DEPTH_COMPONENT;if(n===Xi)return s.DEPTH_STENCIL;if(n===Ar)return s.RED;if(n===ya)return s.RED_INTEGER;if(n===Uc)return s.RG;if(n===Sa)return s.RG_INTEGER;if(n===ba)return s.RGBA_INTEGER;if(n===cr||n===hr||n===ur||n===dr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===zo||n===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Ho||n===Vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Go||n===Ho)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===$o||n===Ko||n===Zo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ta)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===sa||n===ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===oa||n===aa||n===la)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class u0 extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class le extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d0={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const f0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p0=`
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

}`;class m0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Be,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Me({vertexShader:f0,fragmentShader:p0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g0 extends ji{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=new m0,p=e.getContextAttributes();let m=null,y=null;const x=[],S=[],D=new ct;let R=null;const C=new Ke;C.layers.enable(1),C.viewport=new me;const I=new Ke;I.layers.enable(2),I.viewport=new me;const $=[C,I],_=new u0;_.layers.enable(1),_.layers.enable(2);let M=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let q=x[tt];return q===void 0&&(q=new po,x[tt]=q),q.getTargetRaySpace()},this.getControllerGrip=function(tt){let q=x[tt];return q===void 0&&(q=new po,x[tt]=q),q.getGripSpace()},this.getHand=function(tt){let q=x[tt];return q===void 0&&(q=new po,x[tt]=q),q.getHandSpace()};function U(tt){const q=S.indexOf(tt.inputSource);if(q===-1)return;const Mt=x[q];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,c||o),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function G(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",H);for(let tt=0;tt<x.length;tt++){const q=S[tt];q!==null&&(S[tt]=null,x[tt].disconnect(q))}M=null,b=null,v.reset(),t.setRenderTarget(m),f=null,u=null,d=null,i=null,y=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",G),i.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),i.renderState.layers===void 0){const q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new pn(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,Mt=null,pt=null;p.depth&&(pt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=p.stencil?Xi:zi,Mt=p.stencil?Wi:pi);const Rt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Rt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new pn(u.textureWidth,u.textureHeight,{format:fn,type:Ln,depthTexture:new Kc(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(tt){for(let q=0;q<tt.removed.length;q++){const Mt=tt.removed[q],pt=S.indexOf(Mt);pt>=0&&(S[pt]=null,x[pt].disconnect(Mt))}for(let q=0;q<tt.added.length;q++){const Mt=tt.added[q];let pt=S.indexOf(Mt);if(pt===-1){for(let Pt=0;Pt<x.length;Pt++)if(Pt>=S.length){S.push(Mt),pt=Pt;break}else if(S[Pt]===null){S[Pt]=Mt,pt=Pt;break}if(pt===-1)break}const Rt=x[pt];Rt&&Rt.connect(Mt)}}const z=new T,B=new T;function k(tt,q,Mt){z.setFromMatrixPosition(q.matrixWorld),B.setFromMatrixPosition(Mt.matrixWorld);const pt=z.distanceTo(B),Rt=q.projectionMatrix.elements,Pt=Mt.projectionMatrix.elements,Ft=Rt[14]/(Rt[10]-1),It=Rt[14]/(Rt[10]+1),nt=(Rt[9]+1)/Rt[5],L=(Rt[9]-1)/Rt[5],mt=(Rt[8]-1)/Rt[0],_t=(Pt[8]+1)/Pt[0],ht=Ft*mt,xt=Ft*_t,Et=pt/(-mt+_t),gt=Et*-mt;if(q.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(gt),tt.translateZ(Et),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Rt[10]===-1)tt.projectionMatrix.copy(q.projectionMatrix),tt.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const P=Ft+Et,w=It+Et,j=ht-gt,it=xt+(pt-gt),rt=nt*It/w*P,Q=L*It/w*P;tt.projectionMatrix.makePerspective(j,it,rt,Q,P,w),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function st(tt,q){q===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(q.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let q=tt.near,Mt=tt.far;v.texture!==null&&(v.depthNear>0&&(q=v.depthNear),v.depthFar>0&&(Mt=v.depthFar)),_.near=I.near=C.near=q,_.far=I.far=C.far=Mt,(M!==_.near||b!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,b=_.far);const pt=tt.parent,Rt=_.cameras;st(_,pt);for(let Pt=0;Pt<Rt.length;Pt++)st(Rt[Pt],pt);Rt.length===2?k(_,C,I):_.projectionMatrix.copy(C.projectionMatrix),at(tt,_,pt)};function at(tt,q,Mt){Mt===null?tt.matrix.copy(q.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(q.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(q.projectionMatrix),tt.projectionMatrixInverse.copy(q.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ca*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let ft=null;function zt(tt,q){if(h=q.getViewerPose(c||o),g=q,h!==null){const Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let pt=!1;Mt.length!==_.cameras.length&&(_.cameras.length=0,pt=!0);for(let Pt=0;Pt<Mt.length;Pt++){const Ft=Mt[Pt];let It=null;if(f!==null)It=f.getViewport(Ft);else{const L=d.getViewSubImage(u,Ft);It=L.viewport,Pt===0&&(t.setRenderTargetTextures(y,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(y))}let nt=$[Pt];nt===void 0&&(nt=new Ke,nt.layers.enable(Pt),nt.viewport=new me,$[Pt]=nt),nt.matrix.fromArray(Ft.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ft.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(It.x,It.y,It.width,It.height),Pt===0&&(_.matrix.copy(nt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pt===!0&&_.cameras.push(nt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Pt=d.getDepthInformation(Mt[0]);Pt&&Pt.isValid&&Pt.texture&&v.init(t,Pt,i.renderState)}}for(let Mt=0;Mt<x.length;Mt++){const pt=S[Mt],Rt=x[Mt];pt!==null&&Rt!==void 0&&Rt.update(pt,q,c||o)}ft&&ft(tt,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const Dt=new $c;Dt.setAnimationLoop(zt),this.setAnimationLoop=function(tt){ft=tt},this.dispose=function(){}}}const si=new Pe,v0=new ce;function _0(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,qc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,S=y.envMapRotation;x&&(p.envMap.value=x,si.copy(S),si.x*=-1,si.y*=-1,si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),p.envMapRotation.value.setFromMatrix4(v0.makeRotationFromEuler(si)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function x0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function c(y,x){let S=i[y.id];S===void 0&&(g(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",p));const D=x.program;n.updateUBOMapping(y,D);const R=t.render.frame;r[y.id]!==R&&(u(y),r[y.id]=R)}function h(y){const x=d();y.__bindingPointIndex=x;const S=s.createBuffer(),D=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,D,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=i[y.id],S=y.uniforms,D=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,C=S.length;R<C;R++){const I=Array.isArray(S[R])?S[R]:[S[R]];for(let $=0,_=I.length;$<_;$++){const M=I[$];if(f(M,R,$,D)===!0){const b=M.__offset,U=Array.isArray(M.value)?M.value:[M.value];let G=0;for(let H=0;H<U.length;H++){const z=U[H],B=v(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,b+G,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,G),G+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,b,M.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,S,D){const R=y.value,C=x+"_"+S;if(D[C]===void 0)return typeof R=="number"||typeof R=="boolean"?D[C]=R:D[C]=R.clone(),!0;{const I=D[C];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return D[C]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(y){const x=y.uniforms;let S=0;const D=16;for(let C=0,I=x.length;C<I;C++){const $=Array.isArray(x[C])?x[C]:[x[C]];for(let _=0,M=$.length;_<M;_++){const b=$[_],U=Array.isArray(b.value)?b.value:[b.value];for(let G=0,H=U.length;G<H;G++){const z=U[G],B=v(z),k=S%D,st=k%B.boundary,at=k+st;S+=st,at!==0&&D-at<B.storage&&(S+=D-at),b.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,S+=B.storage}}}const R=S%D;return R>0&&(S+=D-R),y.__size=S,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class M0{constructor(t={}){const{canvas:e=au(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Yn,this.toneMappingExposure=1;const x=this;let S=!1,D=0,R=0,C=null,I=-1,$=null;const _=new me,M=new me;let b=null;const U=new Gt(0);let G=0,H=e.width,z=e.height,B=1,k=null,st=null;const at=new me(0,0,H,z),ft=new me(0,0,H,z);let zt=!1;const Dt=new Ta;let tt=!1,q=!1;const Mt=new ce,pt=new ce,Rt=new T,Pt=new me,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function nt(){return C===null?B:1}let L=n;function mt(A,V){return e.getContext(A,V)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),L===null){const V="webgl2";if(L=mt(V,A),L===null)throw mt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _t,ht,xt,Et,gt,P,w,j,it,rt,Q,At,St,wt,Kt,O,N,X,dt,ut,Ot,Bt,et,F;function ot(){_t=new Tp(L),_t.init(),Bt=new h0(L,_t),ht=new xp(L,_t,t,Bt),xt=new a0(L),ht.reverseDepthBuffer&&xt.buffers.depth.setReversed(!0),Et=new Cp(L),gt=new qm,P=new c0(L,_t,xt,gt,ht,Bt,Et),w=new yp(x),j=new wp(x),it=new Uu(L),et=new vp(L,it),rt=new Ep(L,it,Et,et),Q=new Pp(L,rt,it,Et),dt=new Rp(L,ht,P),O=new Mp(gt),At=new Xm(x,w,j,_t,ht,et,O),St=new _0(x,gt),wt=new jm,Kt=new t0(_t),X=new gp(x,w,j,xt,Q,u,l),N=new r0(x,Q,ht),F=new x0(L,Et,ht,xt),ut=new _p(L,_t,Et),Ot=new Ap(L,_t,Et),Et.programs=At.programs,x.capabilities=ht,x.extensions=_t,x.properties=gt,x.renderLists=wt,x.shadowMap=N,x.state=xt,x.info=Et}ot();const Y=new g0(x,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(H,z,!1))},this.getSize=function(A){return A.set(H,z)},this.setSize=function(A,V,Z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,z=V,e.width=Math.floor(A*B),e.height=Math.floor(V*B),Z===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(H*B,z*B).floor()},this.setDrawingBufferSize=function(A,V,Z){H=A,z=V,B=Z,e.width=Math.floor(A*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(_)},this.getViewport=function(A){return A.copy(at)},this.setViewport=function(A,V,Z,J){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,V,Z,J),xt.viewport(_.copy(at).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,V,Z,J){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,V,Z,J),xt.scissor(M.copy(ft).multiplyScalar(B).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(A){xt.setScissorTest(zt=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(A=!0,V=!0,Z=!0){let J=0;if(A){let W=!1;if(C!==null){const vt=C.texture.format;W=vt===ba||vt===Sa||vt===ya}if(W){const vt=C.texture.type,Tt=vt===Ln||vt===pi||vt===xs||vt===Wi||vt===xa||vt===Ma,Ct=X.getClearColor(),Lt=X.getClearAlpha(),kt=Ct.r,Vt=Ct.g,Ut=Ct.b;Tt?(f[0]=kt,f[1]=Vt,f[2]=Ut,f[3]=Lt,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=kt,g[1]=Vt,g[2]=Ut,g[3]=Lt,L.clearBufferiv(L.COLOR,0,g))}else J|=L.COLOR_BUFFER_BIT}V&&(J|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),wt.dispose(),Kt.dispose(),gt.dispose(),w.dispose(),j.dispose(),Q.dispose(),et.dispose(),F.dispose(),At.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Dn),Y.removeEventListener("sessionend",As),Jn.stop()};function K(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Et.autoReset,V=N.enabled,Z=N.autoUpdate,J=N.needsUpdate,W=N.type;ot(),Et.autoReset=A,N.enabled=V,N.autoUpdate=Z,N.needsUpdate=J,N.type=W}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Wt(A){const V=A.target;V.removeEventListener("dispose",Wt),qt(V)}function qt(A){Jt(A),gt.remove(A)}function Jt(A){const V=gt.get(A).programs;V!==void 0&&(V.forEach(function(Z){At.releaseProgram(Z)}),A.isShaderMaterial&&At.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Z,J,W,vt){V===null&&(V=Ft);const Tt=W.isMesh&&W.matrixWorld.determinant()<0,Ct=Mh(A,V,Z,J,W);xt.setMaterial(J,Tt);let Lt=Z.index,kt=1;if(J.wireframe===!0){if(Lt=rt.getWireframeAttribute(Z),Lt===void 0)return;kt=2}const Vt=Z.drawRange,Ut=Z.attributes.position;let ae=Vt.start*kt,fe=(Vt.start+Vt.count)*kt;vt!==null&&(ae=Math.max(ae,vt.start*kt),fe=Math.min(fe,(vt.start+vt.count)*kt)),Lt!==null?(ae=Math.max(ae,0),fe=Math.min(fe,Lt.count)):Ut!=null&&(ae=Math.max(ae,0),fe=Math.min(fe,Ut.count));const _e=fe-ae;if(_e<0||_e===1/0)return;et.setup(W,J,Ct,Z,Lt);let Xe,se=ut;if(Lt!==null&&(Xe=it.get(Lt),se=Ot,se.setIndex(Xe)),W.isMesh)J.wireframe===!0?(xt.setLineWidth(J.wireframeLinewidth*nt()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(W.isLine){let Nt=J.linewidth;Nt===void 0&&(Nt=1),xt.setLineWidth(Nt*nt()),W.isLineSegments?se.setMode(L.LINES):W.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else W.isPoints?se.setMode(L.POINTS):W.isSprite&&se.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)se.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Nt=W._multiDrawStarts,Le=W._multiDrawCounts,re=W._multiDrawCount,rn=Lt?it.get(Lt).bytesPerElement:1,vi=gt.get(J).currentProgram.getUniforms();for(let qe=0;qe<re;qe++)vi.setValue(L,"_gl_DrawID",qe),se.render(Nt[qe]/rn,Le[qe])}else if(W.isInstancedMesh)se.renderInstances(ae,_e,W.count);else if(Z.isInstancedBufferGeometry){const Nt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Le=Math.min(Z.instanceCount,Nt);se.renderInstances(ae,_e,Le)}else se.render(ae,_e)};function Ht(A,V,Z){A.transparent===!0&&A.side===Oe&&A.forceSinglePass===!1?(A.side=ke,A.needsUpdate=!0,Rs(A,V,Z),A.side=jn,A.needsUpdate=!0,Rs(A,V,Z),A.side=Oe):Rs(A,V,Z)}this.compile=function(A,V,Z=null){Z===null&&(Z=A),p=Kt.get(Z),p.init(V),y.push(p),Z.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==Z&&A.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const J=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const vt=W.material;if(vt)if(Array.isArray(vt))for(let Tt=0;Tt<vt.length;Tt++){const Ct=vt[Tt];Ht(Ct,Z,W),J.add(Ct)}else Ht(vt,Z,W),J.add(vt)}),y.pop(),p=null,J},this.compileAsync=function(A,V,Z=null){const J=this.compile(A,V,Z);return new Promise(W=>{function vt(){if(J.forEach(function(Tt){gt.get(Tt).currentProgram.isReady()&&J.delete(Tt)}),J.size===0){W(A);return}setTimeout(vt,10)}_t.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ie=null;function Ee(A){ie&&ie(A)}function Dn(){Jn.stop()}function As(){Jn.start()}const Jn=new $c;Jn.setAnimationLoop(Ee),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(A){ie=A,Y.setAnimationLoop(A),A===null?Jn.stop():Jn.start()},Y.addEventListener("sessionstart",Dn),Y.addEventListener("sessionend",As),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(V),V=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,V,C),p=Kt.get(A,y.length),p.init(V),y.push(p),pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Dt.setFromProjectionMatrix(pt),q=this.localClippingEnabled,tt=O.init(this.clippingPlanes,q),v=wt.get(A,m.length),v.init(),m.push(v),Y.enabled===!0&&Y.isPresenting===!0){const vt=x.xr.getDepthSensingMesh();vt!==null&&Dr(vt,V,-1/0,x.sortObjects)}Dr(A,V,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(k,st),It=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,It&&X.addToRenderList(v,A),this.info.render.frame++,tt===!0&&O.beginShadows();const Z=p.state.shadowsArray;N.render(Z,A,V),tt===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=v.opaque,W=v.transmissive;if(p.setupLights(),V.isArrayCamera){const vt=V.cameras;if(W.length>0)for(let Tt=0,Ct=vt.length;Tt<Ct;Tt++){const Lt=vt[Tt];Oa(J,W,A,Lt)}It&&X.render(A);for(let Tt=0,Ct=vt.length;Tt<Ct;Tt++){const Lt=vt[Tt];Fa(v,A,Lt,Lt.viewport)}}else W.length>0&&Oa(J,W,A,V),It&&X.render(A),Fa(v,A,V);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,V),et.resetDefaultState(),I=-1,$=null,y.pop(),y.length>0?(p=y[y.length-1],tt===!0&&O.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Dr(A,V,Z,J){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Dt.intersectsSprite(A)){J&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);const Tt=Q.update(A),Ct=A.material;Ct.visible&&v.push(A,Tt,Ct,Z,Pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Dt.intersectsObject(A))){const Tt=Q.update(A),Ct=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Pt.copy(Tt.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(Ct)){const Lt=Tt.groups;for(let kt=0,Vt=Lt.length;kt<Vt;kt++){const Ut=Lt[kt],ae=Ct[Ut.materialIndex];ae&&ae.visible&&v.push(A,Tt,ae,Z,Pt.z,Ut)}}else Ct.visible&&v.push(A,Tt,Ct,Z,Pt.z,null)}}const vt=A.children;for(let Tt=0,Ct=vt.length;Tt<Ct;Tt++)Dr(vt[Tt],V,Z,J)}function Fa(A,V,Z,J){const W=A.opaque,vt=A.transmissive,Tt=A.transparent;p.setupLightsView(Z),tt===!0&&O.setGlobalState(x.clippingPlanes,Z),J&&xt.viewport(_.copy(J)),W.length>0&&Cs(W,V,Z),vt.length>0&&Cs(vt,V,Z),Tt.length>0&&Cs(Tt,V,Z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Oa(A,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new pn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Pn:Ln,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const vt=p.state.transmissionRenderTarget[J.id],Tt=J.viewport||_;vt.setSize(Tt.z,Tt.w);const Ct=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(U),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),It&&X.render(Z);const Lt=x.toneMapping;x.toneMapping=Yn;const kt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),tt===!0&&O.setGlobalState(x.clippingPlanes,J),Cs(A,Z,J),P.updateMultisampleRenderTarget(vt),P.updateRenderTargetMipmap(vt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ut=0,ae=V.length;Ut<ae;Ut++){const fe=V[Ut],_e=fe.object,Xe=fe.geometry,se=fe.material,Nt=fe.group;if(se.side===Oe&&_e.layers.test(J.layers)){const Le=se.side;se.side=ke,se.needsUpdate=!0,Ba(_e,Z,J,Xe,se,Nt),se.side=Le,se.needsUpdate=!0,Vt=!0}}Vt===!0&&(P.updateMultisampleRenderTarget(vt),P.updateRenderTargetMipmap(vt))}x.setRenderTarget(Ct),x.setClearColor(U,G),kt!==void 0&&(J.viewport=kt),x.toneMapping=Lt}function Cs(A,V,Z){const J=V.isScene===!0?V.overrideMaterial:null;for(let W=0,vt=A.length;W<vt;W++){const Tt=A[W],Ct=Tt.object,Lt=Tt.geometry,kt=J===null?Tt.material:J,Vt=Tt.group;Ct.layers.test(Z.layers)&&Ba(Ct,V,Z,Lt,kt,Vt)}}function Ba(A,V,Z,J,W,vt){A.onBeforeRender(x,V,Z,J,W,vt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(x,V,Z,J,A,vt),W.transparent===!0&&W.side===Oe&&W.forceSinglePass===!1?(W.side=ke,W.needsUpdate=!0,x.renderBufferDirect(Z,V,J,W,A,vt),W.side=jn,W.needsUpdate=!0,x.renderBufferDirect(Z,V,J,W,A,vt),W.side=Oe):x.renderBufferDirect(Z,V,J,W,A,vt),A.onAfterRender(x,V,Z,J,W,vt)}function Rs(A,V,Z){V.isScene!==!0&&(V=Ft);const J=gt.get(A),W=p.state.lights,vt=p.state.shadowsArray,Tt=W.state.version,Ct=At.getParameters(A,W.state,vt,V,Z),Lt=At.getProgramCacheKey(Ct);let kt=J.programs;J.environment=A.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(A.isMeshStandardMaterial?j:w).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",Wt),kt=new Map,J.programs=kt);let Vt=kt.get(Lt);if(Vt!==void 0){if(J.currentProgram===Vt&&J.lightsStateVersion===Tt)return ka(A,Ct),Vt}else Ct.uniforms=At.getUniforms(A),A.onBeforeCompile(Ct,x),Vt=At.acquireProgram(Ct,Lt),kt.set(Lt,Vt),J.uniforms=Ct.uniforms;const Ut=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=O.uniform),ka(A,Ct),J.needsLights=Sh(A),J.lightsStateVersion=Tt,J.needsLights&&(Ut.ambientLightColor.value=W.state.ambient,Ut.lightProbe.value=W.state.probe,Ut.directionalLights.value=W.state.directional,Ut.directionalLightShadows.value=W.state.directionalShadow,Ut.spotLights.value=W.state.spot,Ut.spotLightShadows.value=W.state.spotShadow,Ut.rectAreaLights.value=W.state.rectArea,Ut.ltc_1.value=W.state.rectAreaLTC1,Ut.ltc_2.value=W.state.rectAreaLTC2,Ut.pointLights.value=W.state.point,Ut.pointLightShadows.value=W.state.pointShadow,Ut.hemisphereLights.value=W.state.hemi,Ut.directionalShadowMap.value=W.state.directionalShadowMap,Ut.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ut.spotShadowMap.value=W.state.spotShadowMap,Ut.spotLightMatrix.value=W.state.spotLightMatrix,Ut.spotLightMap.value=W.state.spotLightMap,Ut.pointShadowMap.value=W.state.pointShadowMap,Ut.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Vt,J.uniformsList=null,Vt}function za(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=mr.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function ka(A,V){const Z=gt.get(A);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Mh(A,V,Z,J,W){V.isScene!==!0&&(V=Ft),P.resetTextureUnits();const vt=V.fog,Tt=J.isMeshStandardMaterial?V.environment:null,Ct=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Kn,Lt=(J.isMeshStandardMaterial?j:w).get(J.envMap||Tt),kt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Vt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ut=!!Z.morphAttributes.position,ae=!!Z.morphAttributes.normal,fe=!!Z.morphAttributes.color;let _e=Yn;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=x.toneMapping);const Xe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=Xe!==void 0?Xe.length:0,Nt=gt.get(J),Le=p.state.lights;if(tt===!0&&(q===!0||A!==$)){const Ze=A===$&&J.id===I;O.setState(J,A,Ze)}let re=!1;J.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Le.state.version||Nt.outputColorSpace!==Ct||W.isBatchedMesh&&Nt.batching===!1||!W.isBatchedMesh&&Nt.batching===!0||W.isBatchedMesh&&Nt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Nt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Nt.instancing===!1||!W.isInstancedMesh&&Nt.instancing===!0||W.isSkinnedMesh&&Nt.skinning===!1||!W.isSkinnedMesh&&Nt.skinning===!0||W.isInstancedMesh&&Nt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Nt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Nt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Nt.instancingMorph===!1&&W.morphTexture!==null||Nt.envMap!==Lt||J.fog===!0&&Nt.fog!==vt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==O.numPlanes||Nt.numIntersection!==O.numIntersection)||Nt.vertexAlphas!==kt||Nt.vertexTangents!==Vt||Nt.morphTargets!==Ut||Nt.morphNormals!==ae||Nt.morphColors!==fe||Nt.toneMapping!==_e||Nt.morphTargetsCount!==se)&&(re=!0):(re=!0,Nt.__version=J.version);let rn=Nt.currentProgram;re===!0&&(rn=Rs(J,V,W));let vi=!1,qe=!1,Ur=!1;const Se=rn.getUniforms(),Un=Nt.uniforms;if(xt.useProgram(rn.program)&&(vi=!0,qe=!0,Ur=!0),J.id!==I&&(I=J.id,qe=!0),vi||$!==A){ht.reverseDepthBuffer?(Mt.copy(A.projectionMatrix),cu(Mt),hu(Mt),Se.setValue(L,"projectionMatrix",Mt)):Se.setValue(L,"projectionMatrix",A.projectionMatrix),Se.setValue(L,"viewMatrix",A.matrixWorldInverse);const Ze=Se.map.cameraPosition;Ze!==void 0&&Ze.setValue(L,Rt.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Se.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,qe=!0,Ur=!0)}if(W.isSkinnedMesh){Se.setOptional(L,W,"bindMatrix"),Se.setOptional(L,W,"bindMatrixInverse");const Ze=W.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Se.setValue(L,"boneTexture",Ze.boneTexture,P))}W.isBatchedMesh&&(Se.setOptional(L,W,"batchingTexture"),Se.setValue(L,"batchingTexture",W._matricesTexture,P),Se.setOptional(L,W,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",W._indirectTexture,P),Se.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",W._colorsTexture,P));const Nr=Z.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&dt.update(W,Z,rn),(qe||Nt.receiveShadow!==W.receiveShadow)&&(Nt.receiveShadow=W.receiveShadow,Se.setValue(L,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Un.envMap.value=Lt,Un.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(Un.envMapIntensity.value=V.environmentIntensity),qe&&(Se.setValue(L,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&yh(Un,Ur),vt&&J.fog===!0&&St.refreshFogUniforms(Un,vt),St.refreshMaterialUniforms(Un,J,B,z,p.state.transmissionRenderTarget[A.id]),mr.upload(L,za(Nt),Un,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(mr.upload(L,za(Nt),Un,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Se.setValue(L,"center",W.center),Se.setValue(L,"modelViewMatrix",W.modelViewMatrix),Se.setValue(L,"normalMatrix",W.normalMatrix),Se.setValue(L,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ze=J.uniformsGroups;for(let Fr=0,bh=Ze.length;Fr<bh;Fr++){const Ga=Ze[Fr];F.update(Ga,rn),F.bind(Ga,rn)}}return rn}function yh(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Sh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,V,Z){gt.get(A.texture).__webglTexture=V,gt.get(A.depthTexture).__webglTexture=Z;const J=gt.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const Z=gt.get(A);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Z=0){C=A,D=V,R=Z;let J=!0,W=null,vt=!1,Tt=!1;if(A){const Lt=gt.get(A);if(Lt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Lt.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Lt.__hasExternalTextures)P.rebindTextures(A,gt.get(A.texture).__webglTexture,gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ut=A.depthTexture;if(Lt.__boundDepthTexture!==Ut){if(Ut!==null&&gt.has(Ut)&&(A.width!==Ut.image.width||A.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const kt=A.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Tt=!0);const Vt=gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[V])?W=Vt[V][Z]:W=Vt[V],vt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?W=gt.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?W=Vt[Z]:W=Vt,_.copy(A.viewport),M.copy(A.scissor),b=A.scissorTest}else _.copy(at).multiplyScalar(B).floor(),M.copy(ft).multiplyScalar(B).floor(),b=zt;if(xt.bindFramebuffer(L.FRAMEBUFFER,W)&&J&&xt.drawBuffers(A,W),xt.viewport(_),xt.scissor(M),xt.setScissorTest(b),vt){const Lt=gt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,Lt.__webglTexture,Z)}else if(Tt){const Lt=gt.get(A.texture),kt=V||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,Z||0,kt)}I=-1},this.readRenderTargetPixels=function(A,V,Z,J,W,vt,Tt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){xt.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const Lt=A.texture,kt=Lt.format,Vt=Lt.type;if(!ht.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-J&&Z>=0&&Z<=A.height-W&&L.readPixels(V,Z,J,W,Bt.convert(kt),Bt.convert(Vt),vt)}finally{const Lt=C!==null?gt.get(C).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(A,V,Z,J,W,vt,Tt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){const Lt=A.texture,kt=Lt.format,Vt=Lt.type;if(!ht.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-J&&Z>=0&&Z<=A.height-W){xt.bindFramebuffer(L.FRAMEBUFFER,Ct);const Ut=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ut),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(V,Z,J,W,Bt.convert(kt),Bt.convert(Vt),0);const ae=C!==null?gt.get(C).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,ae);const fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await lu(L,fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ut),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.deleteBuffer(Ut),L.deleteSync(fe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,Z=0){A.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const J=Math.pow(2,-Z),W=Math.floor(A.image.width*J),vt=Math.floor(A.image.height*J),Tt=V!==null?V.x:0,Ct=V!==null?V.y:0;P.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Tt,Ct,W,vt),xt.unbindTexture()},this.copyTextureToTexture=function(A,V,Z=null,J=null,W=0){A.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],V=arguments[2],W=arguments[3]||0,Z=null);let vt,Tt,Ct,Lt,kt,Vt;Z!==null?(vt=Z.max.x-Z.min.x,Tt=Z.max.y-Z.min.y,Ct=Z.min.x,Lt=Z.min.y):(vt=A.image.width,Tt=A.image.height,Ct=0,Lt=0),J!==null?(kt=J.x,Vt=J.y):(kt=0,Vt=0);const Ut=Bt.convert(V.format),ae=Bt.convert(V.type);P.setTexture2D(V,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);const fe=L.getParameter(L.UNPACK_ROW_LENGTH),_e=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xe=L.getParameter(L.UNPACK_SKIP_PIXELS),se=L.getParameter(L.UNPACK_SKIP_ROWS),Nt=L.getParameter(L.UNPACK_SKIP_IMAGES),Le=A.isCompressedTexture?A.mipmaps[W]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,kt,Vt,vt,Tt,Ut,ae,Le.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,kt,Vt,Le.width,Le.height,Ut,Le.data):L.texSubImage2D(L.TEXTURE_2D,W,kt,Vt,vt,Tt,Ut,ae,Le),L.pixelStorei(L.UNPACK_ROW_LENGTH,fe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,se),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nt),W===0&&V.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(A,V,Z=null,J=null,W=0){A.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,A=arguments[2],V=arguments[3],W=arguments[4]||0);let vt,Tt,Ct,Lt,kt,Vt,Ut,ae,fe;const _e=A.isCompressedTexture?A.mipmaps[W]:A.image;Z!==null?(vt=Z.max.x-Z.min.x,Tt=Z.max.y-Z.min.y,Ct=Z.max.z-Z.min.z,Lt=Z.min.x,kt=Z.min.y,Vt=Z.min.z):(vt=_e.width,Tt=_e.height,Ct=_e.depth,Lt=0,kt=0,Vt=0),J!==null?(Ut=J.x,ae=J.y,fe=J.z):(Ut=0,ae=0,fe=0);const Xe=Bt.convert(V.format),se=Bt.convert(V.type);let Nt;if(V.isData3DTexture)P.setTexture3D(V,0),Nt=L.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)P.setTexture2DArray(V,0),Nt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);const Le=L.getParameter(L.UNPACK_ROW_LENGTH),re=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),vi=L.getParameter(L.UNPACK_SKIP_ROWS),qe=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vt),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Nt,W,Ut,ae,fe,vt,Tt,Ct,Xe,se,_e.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(Nt,W,Ut,ae,fe,vt,Tt,Ct,Xe,_e.data):L.texSubImage3D(Nt,W,Ut,ae,fe,vt,Tt,Ct,Xe,se,_e),L.pixelStorei(L.UNPACK_ROW_LENGTH,Le),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,vi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qe),W===0&&V.generateMipmaps&&L.generateMipmap(Nt),xt.unbindTexture()},this.initRenderTarget=function(A){gt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),xt.unbindTexture()},this.resetState=function(){D=0,R=0,C=null,xt.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===wa?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Cr?"display-p3":"srgb"}}class Ca{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Ca(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class y0 extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pe,this.environmentIntensity=1,this.environmentRotation=new Pe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eh extends Be{constructor(t=null,e=1,n=1,i,r,o,a,l,c=We,h=We,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nl extends ve{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ii=new ce,Fl=new ce,Zs=[],Ol=new In,S0=new ce,os=new Zt,as=new Ki;class yr extends Zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,S0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),Ol.copy(t.boundingBox).applyMatrix4(Ii),this.boundingBox.union(Ol)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),as.copy(t.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ii),Fl.multiplyMatrices(n,Ii),os.matrixWorld=Fl,os.raycast(t,Zs);for(let o=0,a=Zs.length;o<a;o++){const l=Zs[o];l.instanceId=r,l.object=this,e.push(l)}Zs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new eh(new Float32Array(i*this.count),i,this.count,Ar,dn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class b0 extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bl=new ce,ua=new Gc,Js=new Ki,Qs=new T;class w0 extends Te{constructor(t=new ye,e=new b0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;Bl.copy(i).invert(),ua.copy(t.ray).applyMatrix4(Bl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const p=c.getX(g);Qs.fromBufferAttribute(d,p),zl(Qs,p,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)Qs.fromBufferAttribute(d,g),zl(Qs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zl(s,t,e,n,i,r,o){const a=ua.distanceSqToPoint(s);if(a<e){const l=new T;ua.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class T0 extends Be{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new ct:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],r=[],o=[],a=new T,l=new ce;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ue(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ue(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ra extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class E0 extends Ra{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pa(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const tr=new T,mo=new Pa,go=new Pa,vo=new Pa;class ys extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(tr.subVectors(i[0],i[1]).add(i[0]),c=tr);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(tr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=tr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),mo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,p),go.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,p),vo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(mo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),go.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),vo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(mo.calc(l),go.calc(l),vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kl(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function A0(s,t){const e=1-s;return e*e*t}function C0(s,t){return 2*(1-s)*s*t}function R0(s,t){return s*s*t}function gs(s,t,e,n){return A0(s,t)+C0(s,e)+R0(s,n)}function P0(s,t){const e=1-s;return e*e*e*t}function L0(s,t){const e=1-s;return 3*e*e*s*t}function I0(s,t){return 3*(1-s)*s*s*t}function D0(s,t){return s*s*s*t}function vs(s,t,e,n,i){return P0(s,t)+L0(s,e)+I0(s,n)+D0(s,i)}class nh extends Mn{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,i.x,r.x,o.x,a.x),vs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class U0 extends Mn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,i.x,r.x,o.x,a.x),vs(t,i.y,r.y,o.y,a.y),vs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ih extends Mn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class N0 extends Mn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sh extends Mn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(gs(t,i.x,r.x,o.x),gs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rh extends Mn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(gs(t,i.x,r.x,o.x),gs(t,i.y,r.y,o.y),gs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oh extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(kl(a,l.x,c.x,h.x,d.x),kl(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var Sr=Object.freeze({__proto__:null,ArcCurve:E0,CatmullRomCurve3:ys,CubicBezierCurve:nh,CubicBezierCurve3:U0,EllipseCurve:Ra,LineCurve:ih,LineCurve3:N0,QuadraticBezierCurve:sh,QuadraticBezierCurve3:rh,SplineCurve:oh});class F0 extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Sr[i.type]().fromJSON(i))}return this}}class Gl extends F0{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ih(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new sh(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new nh(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new oh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Ra(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class La extends ye{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ue(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new T,u=new ct,f=new T,g=new T,v=new T;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const x=n+y*h*i,S=Math.sin(x),D=Math.cos(x);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*S,d.y=t[R].y,d.z=t[R].x*D,o.push(d.x,d.y,d.z),u.x=y/e,u.y=R/(t.length-1),a.push(u.x,u.y);const C=l[3*R+0]*S,I=l[3*R+1],$=l[3*R+0]*D;c.push(C,I,$)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const S=x+y*t.length,D=S,R=S+t.length,C=S+t.length+1,I=S+1;r.push(D,R,I),r.push(C,I,R)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.points,t.segments,t.phiStart,t.phiLength)}}class xe extends ye{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],p=n/2;let m=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function y(){const S=new T,D=new T;let R=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const $=[],_=I/r,M=_*(e-t)+t;for(let b=0;b<=i;b++){const U=b/i,G=U*l+a,H=Math.sin(G),z=Math.cos(G);D.x=M*H,D.y=-_*n+p,D.z=M*z,d.push(D.x,D.y,D.z),S.set(H,C,z).normalize(),u.push(S.x,S.y,S.z),f.push(U,1-_),$.push(g++)}v.push($)}for(let I=0;I<i;I++)for(let $=0;$<r;$++){const _=v[$][I],M=v[$+1][I],b=v[$+1][I+1],U=v[$][I+1];t>0&&(h.push(_,M,U),R+=3),e>0&&(h.push(M,b,U),R+=3)}c.addGroup(m,R,0),m+=R}function x(S){const D=g,R=new ct,C=new T;let I=0;const $=S===!0?t:e,_=S===!0?1:-1;for(let b=1;b<=i;b++)d.push(0,p*_,0),u.push(0,_,0),f.push(.5,.5),g++;const M=g;for(let b=0;b<=i;b++){const G=b/i*l+a,H=Math.cos(G),z=Math.sin(G);C.x=$*z,C.y=p*_,C.z=$*H,d.push(C.x,C.y,C.z),u.push(0,_,0),R.x=H*.5+.5,R.y=z*.5*_+.5,f.push(R.x,R.y),g++}for(let b=0;b<i;b++){const U=D+b,G=M+b;S===!0?h.push(G,G+1,U):h.push(G+1,G,U),I+=3}c.addGroup(m,I,S===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wn extends xe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Wn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Es extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new T,S=new T,D=new T;for(let R=0;R<e.length;R+=3)f(e[R+0],x),f(e[R+1],S),f(e[R+2],D),l(x,S,D,y)}function l(y,x,S,D){const R=D+1,C=[];for(let I=0;I<=R;I++){C[I]=[];const $=y.clone().lerp(S,I/R),_=x.clone().lerp(S,I/R),M=R-I;for(let b=0;b<=M;b++)b===0&&I===R?C[I][b]=$:C[I][b]=$.clone().lerp(_,b/M)}for(let I=0;I<R;I++)for(let $=0;$<2*(R-I)-1;$++){const _=Math.floor($/2);$%2===0?(u(C[I][_+1]),u(C[I+1][_]),u(C[I][_])):(u(C[I][_+1]),u(C[I+1][_+1]),u(C[I+1][_]))}}function c(y){const x=new T;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(y),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){const y=new T;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const S=p(y)/2/Math.PI+.5,D=m(y)/Math.PI+.5;o.push(S,1-D)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const x=o[y+0],S=o[y+2],D=o[y+4],R=Math.max(x,S,D),C=Math.min(x,S,D);R>.9&&C<.1&&(x<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),D<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,x){const S=y*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function g(){const y=new T,x=new T,S=new T,D=new T,R=new ct,C=new ct,I=new ct;for(let $=0,_=0;$<r.length;$+=9,_+=6){y.set(r[$+0],r[$+1],r[$+2]),x.set(r[$+3],r[$+4],r[$+5]),S.set(r[$+6],r[$+7],r[$+8]),R.set(o[_+0],o[_+1]),C.set(o[_+2],o[_+3]),I.set(o[_+4],o[_+5]),D.copy(y).add(x).add(S).divideScalar(3);const M=p(D);v(R,_+0,y,M),v(C,_+2,x,M),v(I,_+4,S,M)}}function v(y,x,S,D){D<0&&y.x===1&&(o[x]=y.x-1),S.x===0&&S.z===0&&(o[x]=D/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.vertices,t.indices,t.radius,t.details)}}class br extends Es{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new br(t.radius,t.detail)}}class Ia extends Gl{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Gl().fromJSON(i))}return this}}const O0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=ah(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=H0(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)d=s[g],u=s[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ss(r,o,e,a,l,f,0),o}};function ah(s,t,e,n,i){let r,o;if(i===Q0(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Hl(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Hl(r,s[r],s[r+1],o);return o&&Pr(o,o.next)&&(ws(o),o=o.next),o}function gi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Pr(e,e.next)||ge(e.prev,e,e.next)===0)){if(ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ss(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Y0(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?z0(s,n,i,r):B0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),ws(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=k0(gi(s),t,e),Ss(s,t,e,n,i,r,2)):o===2&&G0(s,t,e,n,i,r):Ss(gi(s),t,e,n,i,r,1);break}}}function B0(s){const t=s.prev,e=s,n=s.next;if(ge(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Oi(i,a,r,l,o,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function z0(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ge(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,v=a>l?a>c?a:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,m=da(f,g,t,e,n),y=da(v,p,t,e,n);let x=s.prevZ,S=s.nextZ;for(;x&&x.z>=m&&S&&S.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Oi(a,h,l,d,c,u,x.x,x.y)&&ge(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=f&&S.x<=v&&S.y>=g&&S.y<=p&&S!==i&&S!==o&&Oi(a,h,l,d,c,u,S.x,S.y)&&ge(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Oi(a,h,l,d,c,u,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=y;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=p&&S!==i&&S!==o&&Oi(a,h,l,d,c,u,S.x,S.y)&&ge(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function k0(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Pr(i,r)&&lh(i,n,n.next,r)&&bs(i,r)&&bs(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ws(n),ws(n.next),n=s=r),n=n.next}while(n!==s);return gi(n)}function G0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K0(o,a)){let l=ch(o,a);o=gi(o,o.next),l=gi(l,l.next),Ss(o,t,e,n,i,r,0),Ss(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function H0(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=ah(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push($0(c));for(i.sort(V0),r=0;r<i.length;r++)e=W0(i[r],e);return e}function V0(s,t){return s.x-t.x}function W0(s,t){const e=X0(s,t);if(!e)return t;const n=ch(e,s);return gi(n,n.next),gi(e,e.next)}function X0(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Oi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),bs(e,s)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&q0(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function q0(s,t){return ge(s.prev,s,t.prev)<0&&ge(t.next,s,s.next)<0}function Y0(s,t,e,n){let i=s;do i.z===0&&(i.z=da(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,j0(i)}function j0(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function da(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function $0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Oi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function K0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Z0(s,t)&&(bs(s,t)&&bs(t,s)&&J0(s,t)&&(ge(s.prev,s,t.prev)||ge(s,t.prev,t))||Pr(s,t)&&ge(s.prev,s,s.next)>0&&ge(t.prev,t,t.next)>0)}function ge(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Pr(s,t){return s.x===t.x&&s.y===t.y}function lh(s,t,e,n){const i=nr(ge(s,t,e)),r=nr(ge(s,t,n)),o=nr(ge(e,n,s)),a=nr(ge(e,n,t));return!!(i!==r&&o!==a||i===0&&er(s,e,t)||r===0&&er(s,n,t)||o===0&&er(e,s,n)||a===0&&er(e,t,n))}function er(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function nr(s){return s>0?1:s<0?-1:0}function Z0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&lh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function bs(s,t){return ge(s.prev,s,s.next)<0?ge(s,t,s.next)>=0&&ge(s,s.prev,t)>=0:ge(s,t,s.prev)<0||ge(s,s.next,t)<0}function J0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ch(s,t){const e=new fa(s.i,s.x,s.y),n=new fa(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hl(s,t,e,n){const i=new fa(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ws(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fa(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class _s{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return _s.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Vl(t),Wl(n,t);let o=t.length;e.forEach(Vl);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Wl(n,e[l]);const a=O0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Vl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Wl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Lr extends ye{constructor(t=new Ia([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Qt(i,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:tg;let x,S=!1,D,R,C,I;m&&(x=m.getSpacedPoints(h),S=!0,u=!1,D=m.computeFrenetFrames(h,!1),R=new T,C=new T,I=new T),u||(p=0,f=0,g=0,v=0);const $=a.extractPoints(c);let _=$.shape;const M=$.holes;if(!_s.isClockWise(_)){_=_.reverse();for(let nt=0,L=M.length;nt<L;nt++){const mt=M[nt];_s.isClockWise(mt)&&(M[nt]=mt.reverse())}}const U=_s.triangulateShape(_,M),G=_;for(let nt=0,L=M.length;nt<L;nt++){const mt=M[nt];_=_.concat(mt)}function H(nt,L,mt){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(L,mt)}const z=_.length,B=U.length;function k(nt,L,mt){let _t,ht,xt;const Et=nt.x-L.x,gt=nt.y-L.y,P=mt.x-nt.x,w=mt.y-nt.y,j=Et*Et+gt*gt,it=Et*w-gt*P;if(Math.abs(it)>Number.EPSILON){const rt=Math.sqrt(j),Q=Math.sqrt(P*P+w*w),At=L.x-gt/rt,St=L.y+Et/rt,wt=mt.x-w/Q,Kt=mt.y+P/Q,O=((wt-At)*w-(Kt-St)*P)/(Et*w-gt*P);_t=At+Et*O-nt.x,ht=St+gt*O-nt.y;const N=_t*_t+ht*ht;if(N<=2)return new ct(_t,ht);xt=Math.sqrt(N/2)}else{let rt=!1;Et>Number.EPSILON?P>Number.EPSILON&&(rt=!0):Et<-Number.EPSILON?P<-Number.EPSILON&&(rt=!0):Math.sign(gt)===Math.sign(w)&&(rt=!0),rt?(_t=-gt,ht=Et,xt=Math.sqrt(j)):(_t=Et,ht=gt,xt=Math.sqrt(j/2))}return new ct(_t/xt,ht/xt)}const st=[];for(let nt=0,L=G.length,mt=L-1,_t=nt+1;nt<L;nt++,mt++,_t++)mt===L&&(mt=0),_t===L&&(_t=0),st[nt]=k(G[nt],G[mt],G[_t]);const at=[];let ft,zt=st.concat();for(let nt=0,L=M.length;nt<L;nt++){const mt=M[nt];ft=[];for(let _t=0,ht=mt.length,xt=ht-1,Et=_t+1;_t<ht;_t++,xt++,Et++)xt===ht&&(xt=0),Et===ht&&(Et=0),ft[_t]=k(mt[_t],mt[xt],mt[Et]);at.push(ft),zt=zt.concat(ft)}for(let nt=0;nt<p;nt++){const L=nt/p,mt=f*Math.cos(L*Math.PI/2),_t=g*Math.sin(L*Math.PI/2)+v;for(let ht=0,xt=G.length;ht<xt;ht++){const Et=H(G[ht],st[ht],_t);pt(Et.x,Et.y,-mt)}for(let ht=0,xt=M.length;ht<xt;ht++){const Et=M[ht];ft=at[ht];for(let gt=0,P=Et.length;gt<P;gt++){const w=H(Et[gt],ft[gt],_t);pt(w.x,w.y,-mt)}}}const Dt=g+v;for(let nt=0;nt<z;nt++){const L=u?H(_[nt],zt[nt],Dt):_[nt];S?(C.copy(D.normals[0]).multiplyScalar(L.x),R.copy(D.binormals[0]).multiplyScalar(L.y),I.copy(x[0]).add(C).add(R),pt(I.x,I.y,I.z)):pt(L.x,L.y,0)}for(let nt=1;nt<=h;nt++)for(let L=0;L<z;L++){const mt=u?H(_[L],zt[L],Dt):_[L];S?(C.copy(D.normals[nt]).multiplyScalar(mt.x),R.copy(D.binormals[nt]).multiplyScalar(mt.y),I.copy(x[nt]).add(C).add(R),pt(I.x,I.y,I.z)):pt(mt.x,mt.y,d/h*nt)}for(let nt=p-1;nt>=0;nt--){const L=nt/p,mt=f*Math.cos(L*Math.PI/2),_t=g*Math.sin(L*Math.PI/2)+v;for(let ht=0,xt=G.length;ht<xt;ht++){const Et=H(G[ht],st[ht],_t);pt(Et.x,Et.y,d+mt)}for(let ht=0,xt=M.length;ht<xt;ht++){const Et=M[ht];ft=at[ht];for(let gt=0,P=Et.length;gt<P;gt++){const w=H(Et[gt],ft[gt],_t);S?pt(w.x,w.y+x[h-1].y,x[h-1].x+mt):pt(w.x,w.y,d+mt)}}}tt(),q();function tt(){const nt=i.length/3;if(u){let L=0,mt=z*L;for(let _t=0;_t<B;_t++){const ht=U[_t];Rt(ht[2]+mt,ht[1]+mt,ht[0]+mt)}L=h+p*2,mt=z*L;for(let _t=0;_t<B;_t++){const ht=U[_t];Rt(ht[0]+mt,ht[1]+mt,ht[2]+mt)}}else{for(let L=0;L<B;L++){const mt=U[L];Rt(mt[2],mt[1],mt[0])}for(let L=0;L<B;L++){const mt=U[L];Rt(mt[0]+z*h,mt[1]+z*h,mt[2]+z*h)}}n.addGroup(nt,i.length/3-nt,0)}function q(){const nt=i.length/3;let L=0;Mt(G,L),L+=G.length;for(let mt=0,_t=M.length;mt<_t;mt++){const ht=M[mt];Mt(ht,L),L+=ht.length}n.addGroup(nt,i.length/3-nt,1)}function Mt(nt,L){let mt=nt.length;for(;--mt>=0;){const _t=mt;let ht=mt-1;ht<0&&(ht=nt.length-1);for(let xt=0,Et=h+p*2;xt<Et;xt++){const gt=z*xt,P=z*(xt+1),w=L+_t+gt,j=L+ht+gt,it=L+ht+P,rt=L+_t+P;Pt(w,j,it,rt)}}}function pt(nt,L,mt){l.push(nt),l.push(L),l.push(mt)}function Rt(nt,L,mt){Ft(nt),Ft(L),Ft(mt);const _t=i.length/3,ht=y.generateTopUV(n,i,_t-3,_t-2,_t-1);It(ht[0]),It(ht[1]),It(ht[2])}function Pt(nt,L,mt,_t){Ft(nt),Ft(L),Ft(_t),Ft(L),Ft(mt),Ft(_t);const ht=i.length/3,xt=y.generateSideWallUV(n,i,ht-6,ht-3,ht-2,ht-1);It(xt[0]),It(xt[1]),It(xt[3]),It(xt[1]),It(xt[2]),It(xt[3])}function Ft(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function It(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return eg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Sr[i.type]().fromJSON(i)),new Lr(n,t.options)}}const tg={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],g=t[i*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-d),new ct(u,1-g),new ct(v,1-m)]:[new ct(a,1-l),new ct(h,1-d),new ct(f,1-g),new ct(p,1-m)]}};function eg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _n extends Es{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _n(t.radius,t.detail)}}class hi extends Es{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hi(t.radius,t.detail)}}class Da extends ye{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new T,g=new ct;for(let v=0;v<=i;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){const p=v*(n+1);for(let m=0;m<n;m++){const y=m+p,x=y,S=y+n+1,D=y+n+2,R=y+1;a.push(x,S,R),a.push(S,D,R)}}this.setIndex(a),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class $n extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new T,u=new T,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let S=0;m===0&&o===0?S=.5/e:m===n&&l===Math.PI&&(S=-.5/e);for(let D=0;D<=e;D++){const R=D/e;d.x=-t*Math.cos(i+R*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(i+R*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(R+S,1-x),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=h[m][y+1],S=h[m][y],D=h[m+1][y],R=h[m+1][y+1];(m!==0||o>0)&&f.push(x,S,R),(m!==n-1||l<Math.PI)&&f.push(S,D,R)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xn extends ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new T,d=new T,u=new T;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,p=f/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(v),d.y=(t+e*Math.cos(p))*Math.sin(v),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(v,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ts extends ye{constructor(t=new rh(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new ct;let h=new T;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function v(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),y(),m()}function p(x){h=t.getPointAt(x/e,h);const S=o.normals[x],D=o.binormals[x];for(let R=0;R<=i;R++){const C=R/i*Math.PI*2,I=Math.sin(C),$=-Math.cos(C);l.x=$*S.x+I*D.x,l.y=$*S.y+I*D.y,l.z=$*S.z+I*D.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let S=1;S<=i;S++){const D=(i+1)*(x-1)+(S-1),R=(i+1)*x+(S-1),C=(i+1)*x+S,I=(i+1)*(x-1)+S;g.push(D,R,I),g.push(R,C,I)}}function y(){for(let x=0;x<=e;x++)for(let S=0;S<=i;S++)c.x=x/e,c.y=S/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ts(new Sr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ng extends Me{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ve extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hh extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ig extends hh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _o=new ce,Xl=new T,ql=new T;class sg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ql),e.updateMatrixWorld(),_o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rg extends sg{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pa extends hh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new rg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class og{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);const uh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ag=new Ea(-1,1,1,-1,0,1);class lg extends ye{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const cg=new lg;class Ua{constructor(t){this._mesh=new Zt(cg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ag)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class hg extends Qi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ms.clone(t.uniforms),this.material=new Me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ua(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jl extends Qi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class ug extends Qi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class dg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ct);this._width=n.width,this._height=n.height,e=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hg(uh),this.copyPass.material.blending=Rn,this.clock=new og}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jl!==void 0&&(o instanceof jl?n=!0:o instanceof ug&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fg extends Qi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Gt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const pg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Yi extends Qi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ct(t.x,t.y):new ct(256,256),this.clearColor=new Gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(r,o,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new pn(r,o,{type:Pn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new pn(r,o,{type:Pn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=pg;this.highPassUniforms=Ms.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Me({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ct(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=uh;this.copyUniforms=Ms.clone(h.uniforms),this.blendMaterial=new Me({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:sn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Gt,this.oldClearAlpha=1,this.basic=new xn,this.fsQuad=new Ua(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ct(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Yi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Yi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Yi.BlurDirectionX=new ct(1,0);Yi.BlurDirectionY=new ct(0,1);const mg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class gg extends Qi{constructor(){super();const t=mg;this.uniforms=Ms.clone(t.uniforms),this.material=new ng({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ua(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===va?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Tc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const $l={KeyW:"accel",ArrowUp:"accel",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",ShiftLeft:"drift",ShiftRight:"drift",Space:"item",KeyE:"item",KeyQ:"look_back",KeyR:"reset",KeyP:"pause",Escape:"pause"},vg=["accel","brake","left","right","drift","item","look_back","reset","pause"];class _g{constructor(){E(this,"held",new Set);E(this,"edge",new Set);E(this,"releasedEdge",new Set);E(this,"pointerAccel",!1);E(this,"interacted",!1);E(this,"captureUI",!1);E(this,"unlockCbs",[]);E(this,"onKeyDown",t=>{const e=$l[t.code];if(this.interacted=!0,e){t.preventDefault(),this.held.has(e)||(this.held.add(e),this.edge.add(e));return}(t.code==="Space"||t.code.startsWith("Arrow"))&&t.preventDefault()});E(this,"onKeyUp",t=>{const e=$l[t.code];e&&(t.preventDefault(),this.held.delete(e)&&this.releasedEdge.add(e))});E(this,"onBlur",()=>{this.held.clear(),this.edge.clear(),this.pointerAccel=!1});E(this,"onVisibility",()=>{document.hidden&&this.onBlur()});E(this,"onPointerDown",t=>{this.interacted=!0,t.button===0&&(this.pointerAccel=!0);for(const e of this.unlockCbs)e()});E(this,"onPointerUp",()=>{this.pointerAccel=!1})}onFirstInteraction(t){this.interacted?t():this.unlockCbs.push(t)}attach(t){window.addEventListener("keydown",this.onKeyDown,{passive:!1}),window.addEventListener("keyup",this.onKeyUp,{passive:!1}),window.addEventListener("blur",this.onBlur),document.addEventListener("visibilitychange",this.onVisibility),window.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),t.addEventListener("contextmenu",e=>e.preventDefault())}detach(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp)}raw(t){return this.held.has(t)}down(t){return this.captureUI&&t!=="pause"?!1:this.held.has(t)}pressed(t){return this.captureUI&&t!=="pause"?!1:this.edge.has(t)}released(t){return this.captureUI&&t!=="pause"?!1:this.releasedEdge.has(t)}steerAxis(){return(this.down("right")?1:0)-(this.down("left")?1:0)}endStep(){this.edge.clear(),this.releasedEdge.clear()}clearHeld(){this.held.clear(),this.edge.clear(),this.releasedEdge.clear(),this.pointerAccel=!1}static allActions(){return vg}}const xo=Math.PI*2;function de(s,t,e){return s<t?t:s>e?e:s}function $t(s){return s<0?0:s>1?1:s}function we(s,t,e){return s+(t-s)*e}function Na(s){const t=$t(s);return t*t*(3-2*t)}function ne(s,t,e,n){return t+(s-t)*Math.exp(-e*n)}function xg(s){let t=s%xo;return t>Math.PI&&(t-=xo),t<=-Math.PI&&(t+=xo),t}function Ir(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function ir(s){const t=Math.sin(s*127.1)*43758.5453123;return t-Math.floor(t)}function Ni(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,o=i*i*(3-2*i),a=r*r*(3-2*r),l=ir(e*57+n*113),c=ir((e+1)*57+n*113),h=ir(e*57+(n+1)*113),d=ir((e+1)*57+(n+1)*113);return l+(c-l)*o+(h-l)*a+(l-c-h+d)*o*a}function wr(s,t,e=4,n=2.03,i=.5){let r=.5,o=1,a=0,l=0;for(let c=0;c<e;c++)a+=r*Ni(s*o,t*o),l+=r,r*=i,o*=n;return a/l}const dh="zephyr-reef-settings-v1",Mo={quality:"high",master:.85,music:.55,sfx:.9,muted:!1,cameraShake:1,lastKart:"nix"};function Mg(){try{const s=localStorage.getItem(dh);if(!s)return{...Mo};const t=JSON.parse(s);return{...Mo,...t}}catch{return{...Mo}}}function sr(s){try{localStorage.setItem(dh,JSON.stringify(s))}catch{}}function yo(s,t){switch(s){case"low":return{level:s,pixelRatioCap:1,shadows:!0,shadowMapSize:1024,bloom:.26,sceneryDensity:.35,particleBudget:700,fancyWater:!1,antialias:!1,anisotropy:2};case"medium":return{level:s,pixelRatioCap:Math.min(1.35,t),shadows:!0,shadowMapSize:2048,bloom:.42,sceneryDensity:.7,particleBudget:1400,fancyWater:!0,antialias:!0,anisotropy:4};default:return{level:"high",pixelRatioCap:Math.min(2,t),shadows:!0,shadowMapSize:2048,bloom:.5,sceneryDensity:1,particleBudget:2400,fancyWater:!0,antialias:!0,anisotropy:8}}}const un=[{id:"nix",name:"Nix Otterly",tagline:"Surfed the reef before it had a road.",archetype:"Wave-Runner",driver:{primary:14262378,secondary:3065014,accent:16765286,body:"otter",eye:731695,glow:.6},kart:{body:1618854,trim:15988464,glow:6746336,tyre:1316636,rim:16765286,shape:"pontoon"},stats:{speed:1.02,accel:1.06,handling:1.06,weight:.92}},{id:"bruno",name:"Bruno Boulderknuckle",tagline:"Stops for nobody. Mostly because he cannot.",archetype:"Landslide",driver:{primary:9277334,secondary:5922150,accent:16742938,body:"golem",eye:16757575,glow:1.4},kart:{body:7172216,trim:4014152,glow:16742938,tyre:1053206,rim:12604970,shape:"chunky"},stats:{speed:1.1,accel:.88,handling:.86,weight:1.24}},{id:"sable",name:"Sable Vex",tagline:"Races the night shift. Never loses it.",archetype:"Nightflyer",driver:{primary:3878738,secondary:10320856,accent:8190463,body:"moth",eye:12189519,glow:1.2},kart:{body:2827072,trim:12167144,glow:8190463,tyre:854804,rim:10320856,shape:"sleek"},stats:{speed:1.05,accel:1,handling:1.12,weight:.9}},{id:"zuzu",name:"Zuzu Frill",tagline:"Bounces off the scenery. On purpose.",archetype:"Drifter",driver:{primary:16751317,secondary:8120575,accent:16773544,body:"jelly",eye:2757184,glow:1.8},kart:{body:15888308,trim:9234943,glow:16763376,tyre:1708064,rim:16773544,shape:"buggy"},stats:{speed:.94,accel:1.12,handling:1.1,weight:.86}},{id:"rustam",name:"Rustam Cog",tagline:"Built his kart. Twice. This is the third.",archetype:"Tinkerer",driver:{primary:13208383,secondary:7031332,accent:9109456,body:"automaton",eye:9109456,glow:1.3},kart:{body:11892015,trim:4995620,glow:9109456,tyre:1446414,rim:15253881,shape:"buggy"},stats:{speed:1,accel:1.04,handling:.98,weight:1}},{id:"marlow",name:"Marlow Reef",tagline:"Retired pirate. Unretired for the trophy.",archetype:"Corsair",driver:{primary:5221978,secondary:15918788,accent:16765286,body:"frog",eye:16731469,glow:.7},kart:{body:3112267,trim:15260064,glow:16765286,tyre:1315855,rim:15777866,shape:"chunky"},stats:{speed:1.06,accel:.96,handling:.96,weight:1.1}}];function So(s){const t=un.find(e=>e.id===s);if(!t)throw new Error(`Unknown kart spec: ${s}`);return t}const yg=`
attribute float aSize;
attribute vec3 aColor;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (420.0 / max(1.0, -mv.z));
  gl_Position = projectionMatrix * mv;
}
`,Sg=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r2 = dot(d, d) * 4.0;
  if (r2 > 1.0) discard;
  float a = (1.0 - r2);
  a *= a;
  gl_FragColor = vec4(vColor, a * vAlpha);
}
`,bg=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r2 = dot(d, d) * 4.0;
  if (r2 > 1.0) discard;
  float a = smoothstep(1.0, 0.15, r2);
  gl_FragColor = vec4(vColor, a * vAlpha);
}
`,ri=new Gt;class Kl{constructor(t,e){E(this,"points");E(this,"n");E(this,"cursor",0);E(this,"px");E(this,"py");E(this,"pz");E(this,"vx");E(this,"vy");E(this,"vz");E(this,"life");E(this,"maxLife");E(this,"size0");E(this,"size1");E(this,"grav");E(this,"drag");E(this,"cr");E(this,"cg");E(this,"cb");E(this,"aPos");E(this,"aSize");E(this,"aColor");E(this,"aAlpha");this.n=t,this.px=new Float32Array(t),this.py=new Float32Array(t),this.pz=new Float32Array(t),this.vx=new Float32Array(t),this.vy=new Float32Array(t),this.vz=new Float32Array(t),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.size0=new Float32Array(t),this.size1=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.cr=new Float32Array(t),this.cg=new Float32Array(t),this.cb=new Float32Array(t),this.aPos=new Float32Array(t*3),this.aSize=new Float32Array(t),this.aColor=new Float32Array(t*3),this.aAlpha=new Float32Array(t);for(let r=0;r<t;r++)this.py[r]=-1e4,this.aSize[r]=0;const n=new ye;n.setAttribute("position",new ve(this.aPos,3)),n.setAttribute("aSize",new ve(this.aSize,1)),n.setAttribute("aColor",new ve(this.aColor,3)),n.setAttribute("aAlpha",new ve(this.aAlpha,1)),n.boundingSphere=null;const i=new Me({vertexShader:yg,fragmentShader:e?Sg:bg,transparent:!0,depthWrite:!1,depthTest:!0,blending:e?sn:fi});this.points=new w0(n,i),this.points.frustumCulled=!1,this.points.renderOrder=10}emit(t,e,n,i,r,o,a,l,c,h,d,u){const f=this.cursor;this.cursor=(this.cursor+1)%this.n,this.px[f]=t,this.py[f]=e,this.pz[f]=n,this.vx[f]=i,this.vy[f]=r,this.vz[f]=o,this.life[f]=c,this.maxLife[f]=c,this.size0[f]=l,this.size1[f]=l*u,this.grav[f]=h,this.drag[f]=d,ri.setHex(a),this.cr[f]=ri.r,this.cg[f]=ri.g,this.cb[f]=ri.b;const g=f*3;this.aPos[g]=t,this.aPos[g+1]=e,this.aPos[g+2]=n,this.aColor[g]=ri.r,this.aColor[g+1]=ri.g,this.aColor[g+2]=ri.b,this.aSize[f]=l,this.aAlpha[f]=1}update(t){const e=this.n;for(let i=0;i<e;i++){let r=this.life[i];if(r<=0){this.aAlpha[i]!==0&&(this.aAlpha[i]=0);continue}if(r-=t,this.life[i]=r,r<=0){this.aAlpha[i]=0,this.aSize[i]=0;continue}const o=Math.exp(-this.drag[i]*t);this.vx[i]*=o,this.vy[i]=this.vy[i]*o-this.grav[i]*t,this.vz[i]*=o,this.px[i]+=this.vx[i]*t,this.py[i]+=this.vy[i]*t,this.pz[i]+=this.vz[i]*t;const a=i*3;this.aPos[a]=this.px[i],this.aPos[a+1]=this.py[i],this.aPos[a+2]=this.pz[i];const l=1-r/this.maxLife[i];this.aSize[i]=this.size0[i]+(this.size1[i]-this.size0[i])*l,this.aAlpha[i]=(1-l)*(1-l*.35)}const n=this.points.geometry;n.getAttribute("position").needsUpdate=!0,n.getAttribute("aSize").needsUpdate=!0,n.getAttribute("aColor").needsUpdate=!0,n.getAttribute("aAlpha").needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}}const wg=`
attribute float aBirth;
attribute float aStrength;
uniform float uTime;
uniform float uFade;
varying float vAlpha;
void main() {
  float age = uTime - aBirth;
  vAlpha = clamp(1.0 - age / uFade, 0.0, 1.0) * aStrength;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Tg=`
varying float vAlpha;
uniform vec3 uColor;
void main() {
  if (vAlpha <= 0.001) discard;
  gl_FragColor = vec4(uColor, vAlpha);
}
`;class Eg{constructor(t,e){E(this,"mesh");E(this,"maxQuads");E(this,"cursor",0);E(this,"time",0);E(this,"pos");E(this,"birth");E(this,"strength");E(this,"geo");E(this,"mat");E(this,"dirty",!1);this.maxQuads=t;const n=t*4;this.pos=new Float32Array(n*3),this.birth=new Float32Array(n),this.strength=new Float32Array(n),this.birth.fill(-1e9);const i=new Uint32Array(t*6);for(let r=0;r<t;r++){const o=r*4,a=r*6;i[a]=o,i[a+1]=o+1,i[a+2]=o+2,i[a+3]=o,i[a+4]=o+2,i[a+5]=o+3}this.geo=new ye,this.geo.setAttribute("position",new ve(this.pos,3)),this.geo.setAttribute("aBirth",new ve(this.birth,1)),this.geo.setAttribute("aStrength",new ve(this.strength,1)),this.geo.setIndex(new ve(i,1)),this.geo.boundingSphere=null,this.mat=new Me({vertexShader:wg,fragmentShader:Tg,uniforms:{uTime:{value:0},uFade:{value:e},uColor:{value:new Gt(856084)}},transparent:!0,depthWrite:!1,side:Oe,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),this.mesh=new Zt(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4}add(t,e,n,i,r,o,a,l){let c=i-t,h=o-n;const d=Math.hypot(c,h);if(d<1e-4)return;c/=d,h/=d;const u=-h*a,f=c*a,g=this.cursor;this.cursor=(this.cursor+1)%this.maxQuads;const v=g*4,p=this.pos;let m=v*3;p[m]=t+u,p[m+1]=e,p[m+2]=n+f,m+=3,p[m]=t-u,p[m+1]=e,p[m+2]=n-f,m+=3,p[m]=i-u,p[m+1]=r,p[m+2]=o-f,m+=3,p[m]=i+u,p[m+1]=r,p[m+2]=o+f;for(let y=0;y<4;y++)this.birth[v+y]=this.time,this.strength[v+y]=l;this.dirty=!0}update(t){this.time+=t,this.mat.uniforms.uTime.value=this.time,this.dirty&&(this.dirty=!1,this.geo.getAttribute("position").needsUpdate=!0,this.geo.getAttribute("aBirth").needsUpdate=!0,this.geo.getAttribute("aStrength").needsUpdate=!0)}clear(){this.birth.fill(-1e9),this.dirty=!0}dispose(){this.geo.dispose(),this.mat.dispose()}}class Ag{constructor(t,e){E(this,"group",new le);E(this,"sparks");E(this,"smoke");E(this,"skid");E(this,"density",1);E(this,"_v",new T);this.scene=t;const n=e.particleBudget;this.sparks=new Kl(Math.max(200,Math.floor(n*.45)),!0),this.smoke=new Kl(Math.max(200,Math.floor(n*.55)),!1),this.skid=new Eg(e.level==="low"?420:1100,9),this.density=e.level==="low"?.5:e.level==="medium"?.75:1,this.group.add(this.sparks.points,this.smoke.points,this.skid.mesh),t.add(this.group)}spark(t,e,n,i,r,o,a,l=.5,c=.5,h=6,d=1.2){this.density<1&&Math.random()>this.density||this.sparks.emit(t,e,n,i,r,o,a,l,c,h,d,.35)}puff(t,e,n,i,r,o,a,l=1.4,c=.9,h=2.4,d=-1.5,u=2.2){this.density<1&&Math.random()>this.density||this.smoke.emit(t,e,n,i,r,o,a,l,c,d,u,h)}exhaust(t,e,n,i,r,o){this.sparks.emit(t,e,n,i*(2+o*6)+(Math.random()-.5)*1.2,.5+Math.random()*1.1+o*1.1,r*(2+o*6)+(Math.random()-.5)*1.2,o>.55?9434879:16757575,o>.55?.42:.3,.16+o*.12,-1.2,3.8,.3)}boostTrail(t,e,n,i,r,o){this.sparks.emit(t+(Math.random()-.5)*.5,e+(Math.random()-.5)*.35,n+(Math.random()-.5)*.5,i*(9+Math.random()*9),1.2+Math.random()*2.2,r*(9+Math.random()*9),Math.random()<.35?16777215:o,.5+Math.random()*.3,.2+Math.random()*.16,-2,3.6,.35),Math.random()<.35&&this.smoke.emit(t,e,n,i*5+(Math.random()-.5)*2,1.2,r*5+(Math.random()-.5)*2,10217471,.9,.42,2,-2.5,2.8)}driftSmoke(t,e,n,i){this.smoke.emit(t,e,n+.1,(Math.random()-.5)*1.6,1.1+Math.random()*1.1,(Math.random()-.5)*1.6,i,1.1,.75,2.6,-1,2)}groundSpray(t,e,n,i,r,o){this.puff(t,e,n,i*3+(Math.random()-.5)*2.5,2.2+Math.random()*2.4,r*3+(Math.random()-.5)*2.5,o,.85,.6,2.2,7,1.6)}burst(t,e,n,i,r,o){const a=Math.max(6,Math.round(r*this.density));for(let l=0;l<a;l++){const c=l/a*Math.PI*2+Math.random()*.5,h=Math.random()*.9,d=o*(.5+Math.random()*.8);this.sparks.emit(t,e,n,Math.cos(c)*d,h*d*.8+1.5,Math.sin(c)*d,l%3===0?16777215:i,.7+Math.random()*.8,.42+Math.random()*.5,9,1.1,.3)}for(let l=0;l<Math.max(3,a>>2);l++){const c=Math.random()*Math.PI*2;this.smoke.emit(t,e,n,Math.cos(c)*3,2+Math.random()*2,Math.sin(c)*3,3816004,1.7,.9,3,-1.5,2)}}splash(t,e,n){for(let i=0;i<10;i++){const r=Math.random()*Math.PI*2;this.puff(t,e,n,Math.cos(r)*3,5+Math.random()*4,Math.sin(r)*3,14219263,1,.7,2,10,1.2)}}miniTurboBurst(t,e,n,i){for(let r=0;r<14;r++){const o=r/14*Math.PI*2;this.sparks.emit(t,e+.2,n,Math.cos(o)*8,1.6+Math.random(),Math.sin(o)*8,i,.75,.42,5,2.2,.3)}}skidMark(t,e,n,i,r,o,a,l){this.skid.add(t,e,n,i,r,o,a,l)}clearSkids(){this.skid.clear()}update(t){this.sparks.update(t),this.smoke.update(t),this.skid.update(t),this._v}dispose(){this.scene.remove(this.group),this.sparks.dispose(),this.smoke.dispose(),this.skid.dispose()}}var $e=(s=>(s[s.Ground=0]="Ground",s[s.Bridge=1]="Bridge",s[s.Tunnel=2]="Tunnel",s))($e||{});const bo=s=>s*Math.PI/180,Zl=.3,cn=-14,qn=2,mn=3.5,Qe=1.25,fh=0,ph=.04,Cg=5.6,Rg=9,Pg=3,ms=48,Jl=[{k:"S",len:183.7},{k:"A",radius:95,sweep:-52},{k:"S",len:50},{k:"A",radius:65,sweep:46},{k:"S",len:50},{k:"A",radius:28,sweep:-125},{k:"S",len:122.8},{k:"A",radius:90,sweep:-34},{k:"S",len:208.7},{k:"A",radius:55,sweep:-42},{k:"S",len:146.8},{k:"A",radius:75,sweep:-60},{k:"S",len:95.7},{k:"A",radius:92,sweep:-93},{k:"S",len:50}],Lg=[[0,10],[.13,10],[.17,11.5],[.22,14.5],[.27,19],[.3,21],[.345,26],[.4,30.5],[.435,29],[.47,30],[.55,33.5],[.62,36],[.66,36],[.74,31],[.8,27],[.86,21],[.93,15],[.965,12.5],[1,10]],Ig=[[0,0],[.42,0],[.47,16],[.52,42],[.56,62],[.66,62],[.7,38],[.73,18],[.76,8],[.8,3],[.845,1.5],[.92,.5],[1,0]],Dg=[[0,13.5],[.13,13],[.2,12.5],[.3,12],[.455,11.5],[.66,11.5],[.745,10.5],[.835,10.5],[.87,12],[.93,13],[1,13.5]],Ug=[[0,.3],[.14,1.2],[.28,.5],[.32,.6],[.42,.4],[.45,1.1],[.62,.9],[.72,.5],[.84,.9],[.9,.4],[.94,1.15],[1,.5]];function rr(s,t){if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){const[n,i]=s[e-1],[r,o]=s[e];let a=(t-n)/Math.max(1e-9,r-n);return a=a*a*(3-2*a),i+(o-i)*a}return s[s.length-1][1]}function Ng(s){return s>=.455&&s<=.737?$e.Bridge:s>=.745&&s<=.838?$e.Tunnel:$e.Ground}function Fg(s){let t=Math.PI/2,e=0,n=0,i=0;const r=[],o=Jl.reduce((l,c)=>l+(c.k==="S"?c.len:Math.abs(c.radius*bo(c.sweep))),0),a=()=>{r.push({x:e,z:n,u:i/o})};a();for(const l of Jl)if(l.k==="S"){const c=Math.max(1,Math.round(l.len/s));for(let h=1;h<=c;h++)e=r[r.length-1].x+Math.cos(t)*(l.len/c),n=r[r.length-1].z+Math.sin(t)*(l.len/c),i+=l.len/c,a()}else{const c=bo(l.sweep),h=c>0?1:-1,d=Math.abs(l.radius*c),u=Math.max(2,Math.round(d/(l.radius*bo(20)))),f=e+l.radius*h*-Math.sin(t),g=n+l.radius*h*Math.cos(t);for(let v=1;v<=u;v++){const p=Math.abs(c)*v/u;h>0?(e=f+l.radius*Math.sin(t+p),n=g-l.radius*Math.cos(t+p)):(e=f-l.radius*Math.sin(t-p),n=g+l.radius*Math.cos(t-p)),i+=d/u,a()}t+=c}return{pts:r,total:o}}function Og(s,t){const e=[];let n=0;for(let l=0;l<s.length-1;l++){const c=Math.hypot(s[l+1].x-s[l].x,s[l+1].z-s[l].z);e.push(c),n+=c}const i=[],r=n/t;let o=0,a=0;for(let l=0;l<t;l++){const c=l*r;for(;o<e.length-1&&a+e[o]<c;)a+=e[o],o++;const h=(c-a)/Math.max(e[o]??1,1e-9),d=s[o],u=s[o+1]??s[o];i.push({x:d.x+(u.x-d.x)*h,z:d.z+(u.z-d.z)*h,u:l/t})}return i}function Bg(){const{pts:s}=Fg(6),t=s[0].x-s[s.length-1].x,e=s[0].z-s[s.length-1].z,n=s.length-1;for(let r=0;r<=n;r++){const o=r/n;s[r].x+=t*o,s[r].z+=e*o}return Og(s,ms).map(r=>{const o=rr(Lg,r.u);return{x:Math.round(r.x*10)/10,z:Math.round(r.z*10)/10,y:Math.round(o*10)/10,groundY:Math.round((o-rr(Ig,r.u))*10)/10,bank:Math.round(rr(Ug,r.u)*100)/100,halfWidth:Math.round(rr(Dg,r.u)*100)/100,kind:Ng(r.u)}})}const zg=Bg();function Xt(s,t){const e=s*ms;return{seg:(Math.floor(e)%ms+ms)%ms,t:Math.round((e-Math.floor(e))*100)/100,lateral:t}}const mh=[{...Xt(.045,-4.6),length:16},{...Xt(.045,0),length:16},{...Xt(.045,4.6),length:16},{...Xt(.4,0),length:14},{...Xt(.53,-3.6),length:14},{...Xt(.53,3.6),length:14},{...Xt(.845,0),length:15}],kg=[{...Xt(.095,0),count:4,spread:15},{...Xt(.235,0),count:3,spread:11},{...Xt(.365,0),count:4,spread:14},{...Xt(.5,0),count:3,spread:10},{...Xt(.66,0),count:3,spread:10},{...Xt(.79,0),count:3,spread:10},{...Xt(.9,0),count:4,spread:14}],Gg=[{...Xt(.055,-7.5),count:6,bow:7.5,spacing:6.5},{...Xt(.16,8),count:5,bow:5.5,spacing:6.5},{...Xt(.25,-6),count:6,bow:6,spacing:6},{...Xt(.335,7),count:4,bow:4,spacing:6.5},{...Xt(.45,-6.5),count:5,bow:5.5,spacing:6},{...Xt(.52,0),count:6,bow:6.5,spacing:6.5},{...Xt(.58,0),count:6,bow:6.5,spacing:6.5},{...Xt(.7,-6),count:4,bow:4.5,spacing:6},{...Xt(.78,6),count:4,bow:4.5,spacing:6},{...Xt(.88,0),count:5,bow:6,spacing:6.5},{...Xt(.95,0),count:5,bow:6,spacing:6.5}],Hg=[{...Xt(.005,0),kind:"arch",scale:1},{...Xt(.005,-24),kind:"beacon",scale:1.1},{...Xt(.115,-30),kind:"flora_cluster",scale:1.1},{...Xt(.19,30),kind:"floatisland",scale:1.3},{...Xt(.3,-34),kind:"arch",scale:1.35},{...Xt(.365,0),kind:"shell",scale:1},{...Xt(.42,34),kind:"rocks",scale:1.2},{...Xt(.47,-40),kind:"waterfall",scale:1},{...Xt(.545,-46),kind:"floatisland",scale:1.6},{...Xt(.56,0),kind:"arch",scale:1.7},{...Xt(.6,90),kind:"floatisland",scale:2.2},{...Xt(.65,-95),kind:"rocks",scale:1.8},{...Xt(.65,80),kind:"wreck",scale:1},{...Xt(.7,-60),kind:"waterfall",scale:1.3},{...Xt(.82,34),kind:"flora_cluster",scale:1.3},{...Xt(.88,-30),kind:"waterfall",scale:1.1},{...Xt(.94,32),kind:"beacon",scale:.8},{...Xt(.98,-28),kind:"flora_cluster",scale:1}];function Vg(s,t,e){return Na(e/55)*((wr(s*.012,t*.012,4)-.43)*26+(wr(s*.045,t*.045,3)-.5)*2.2)}function gh(s,t,e,n){const i=n+Vg(s,t,e),r=Na((e-45)/70);if(r===0)return i;const o=2+(wr(s*.0035+17,t*.0035-9,3)-.5)*52;return we(i,o,r)}const Ql=new T(0,1,0),tc=()=>({index:0,lateral:0,u:0,s:0,roadY:0,groundY:0,onRoad:!1});class Wg{constructor(t=zg,e=100){E(this,"samples",[]);E(this,"totalLength");E(this,"startIndex");E(this,"spacing");E(this,"arc");E(this,"subdivisions");E(this,"nodeCount");E(this,"cells",new Map);E(this,"scratch",tc());E(this,"queryWidth",0);E(this,"startS");this.nodeCount=t.length,this.subdivisions=Math.max(32,Math.floor(e));const n=t.map(u=>new T(u.x,u.y,u.z)),i=new ys(n,!0,"centripetal"),r=t.length*this.subdivisions;this.arc=new Float64Array(r+1);const o=i.getPoint(0),a=new T;for(let u=1;u<=r;u++)i.getPoint(u/r,a),this.arc[u]=this.arc[u-1]+o.distanceTo(a),o.copy(a);this.totalLength=this.arc[r];const l=Math.round(this.totalLength/1.2);this.spacing=this.totalLength/l;const c=new Float64Array(l);let h=0;for(let u=0;u<l;u++){const f=u*this.spacing;for(;this.arc[h+1]<f;)h++;const g=(h+(f-this.arc[h])/(this.arc[h+1]-this.arc[h]))/r,v=g*t.length,p=Math.floor(v),m=v-p,y=t[(p-1+t.length)%t.length],x=t[p],S=t[(p+1)%t.length],D=t[(p+2)%t.length],R=0,C=Math.max(1e-4,Math.sqrt(n[(p-1+t.length)%t.length].distanceTo(n[p]))),I=C+Math.max(1e-4,Math.sqrt(n[p].distanceTo(n[(p+1)%t.length]))),$=I+Math.max(1e-4,Math.sqrt(n[(p+1)%t.length].distanceTo(n[(p+2)%t.length]))),_=we(C,I,m),M=b=>{const U=we(y[b],x[b],(_-R)/(C-R)),G=we(x[b],S[b],(_-C)/(I-C)),H=we(S[b],D[b],(_-I)/($-I));return we(we(U,G,(_-R)/(I-R)),we(G,H,(_-C)/($-C)),m)};c[u]=de(M("bank"),0,1.6),this.samples.push({i:u,u:u/l,s:f,pos:i.getPoint(g),tangent:new T,right:new T,up:new T,halfWidth:M("halfWidth"),bank:0,groundY:M("groundY"),kind:(m<.5?x:S).kind,curvature:0})}for(let u=0;u<l;u++){const f=this.samples[u];f.tangent.subVectors(this.samples[(u+2)%l].pos,this.samples[(u-2+l)%l].pos).normalize(),f.right.crossVectors(f.tangent,Ql).normalize()}const d=new Float64Array(l);for(let u=0;u<l;u++){const f=this.samples[(u-3+l)%l].tangent,g=this.samples[(u+3)%l].tangent,v=Math.atan2(f.x*g.z-f.z*g.x,f.x*g.x+f.z*g.z);this.samples[u].curvature=v/(6*this.spacing),d[u]=de(this.samples[u].curvature*9,-Zl,Zl)*c[u]}for(let u=0;u<l;u++){const f=this.samples[u];let g=0,v=0;for(let m=-15;m<=15;m++){const y=Math.exp(-m*m/98);g+=d[(u+m+l)%l]*y,v+=y}f.bank=g/v,f.up.crossVectors(f.right,f.tangent).normalize().applyAxisAngle(f.tangent,-f.bank);const p=f.halfWidth+6;for(let m=Math.floor((f.pos.x-p)/24);m<=Math.floor((f.pos.x+p)/24);m++)for(let y=Math.floor((f.pos.z-p)/24);y<=Math.floor((f.pos.z+p)/24);y++){const x=m*65536+y,S=this.cells.get(x);S?S.push(u):this.cells.set(x,[u])}}this.startS=this.sAt({seg:fh,t:ph}),this.startIndex=Math.round(this.startS/this.spacing)%l}query(t,e,n,i=tc()){const r=this.samples.length;let o=n===void 0?0:(Math.round(n)%r+r)%r,a=this.samples[o].pos,l=(t-a.x)**2+(e-a.z)**2;const c=this.cells.get(Math.floor(t/24)*65536+Math.floor(e/24));if(c?.length)for(let y=0;y<c.length;y++){const x=c[y];a=this.samples[x].pos;const S=(t-a.x)**2+(e-a.z)**2;S<l&&(l=S,o=x)}else{for(let x=0;x<r;x+=16){a=this.samples[x].pos;const S=(t-a.x)**2+(e-a.z)**2;S<l&&(l=S,o=x)}const y=o;for(let x=-16;x<=16;x++){const S=(y+x+r)%r;a=this.samples[S].pos;const D=(t-a.x)**2+(e-a.z)**2;D<l&&(l=D,o=S)}}let h=o,d=0;l=1/0;for(let y=-1;y<=0;y++){const x=(o+y+r)%r,S=this.samples[x].pos,D=this.samples[(x+1)%r].pos,R=D.x-S.x,C=D.z-S.z,I=de(((t-S.x)*R+(e-S.z)*C)/(R*R+C*C),0,1),$=(t-S.x-R*I)**2+(e-S.z-C*I)**2;$<l&&(l=$,h=x,d=I)}const u=this.samples[h],f=this.samples[(h+1)%r],g=we(u.right.x,f.right.x,d),v=we(u.right.z,f.right.z,d),p=Math.hypot(g,v);i.lateral=((t-we(u.pos.x,f.pos.x,d))*g+(e-we(u.pos.z,f.pos.z,d))*v)/p;const m=i.lateral*Math.tan(we(u.bank,f.bank,d));return i.index=d<.5?h:(h+1)%r,i.s=(h+d)*this.spacing,n!==void 0&&(i.s+=Math.round((n*this.spacing-i.s)/this.totalLength)*this.totalLength),i.u=this.wrapS(i.s)/this.totalLength,i.roadY=we(u.pos.y,f.pos.y,d)+m,i.groundY=we(u.groundY,f.groundY,d)+m,this.queryWidth=we(u.halfWidth,f.halfWidth,d),i.onRoad=Math.abs(i.lateral)<=this.queryWidth,i}surfaceHeight(t,e,n){const i=this.query(t,e,n,this.scratch),r=Math.abs(i.lateral)-this.queryWidth;return r<=0?i.roadY:r<=qn?we(i.roadY,i.groundY,Na(r/qn)):gh(t,e,r-qn,i.groundY)}sAt(t){const e=((t.seg%this.nodeCount+this.nodeCount)%this.nodeCount+de(t.t,0,1))*this.subdivisions,n=Math.min(this.arc.length-2,Math.floor(e));return we(this.arc[n],this.arc[n+1],e-n)}frameAt(t,e){const n=this.wrapS(t)/this.spacing,i=Math.floor(n),r=n-i,o=this.samples[i],a=this.samples[(i+1)%this.samples.length];return e.pos.lerpVectors(o.pos,a.pos,r),e.tangent.lerpVectors(o.tangent,a.tangent,r).normalize(),e.right.crossVectors(e.tangent,Ql).normalize(),e.up.crossVectors(e.right,e.tangent).normalize().applyAxisAngle(e.tangent,-we(o.bank,a.bank,r)),e.halfWidth=we(o.halfWidth,a.halfWidth,r),e}sampleAtS(t){return this.samples[Math.floor(this.wrapS(t)/this.spacing)]}wrapS(t){return(t%this.totalLength+this.totalLength)%this.totalLength}gridSlot(t,e){const n=this.startS-Rg*(Math.floor(t/2)+1);this.frameAt(n,e);const i=(t%2===0?-1:1)*Cg;return e.pos.addScaledVector(e.right,i),e.pos.y=this.query(e.pos.x,e.pos.z,void 0,this.scratch).roadY,e}}class he{constructor(){E(this,"positions",[]);E(this,"uv",[]);E(this,"colors",[]);E(this,"uv1",[])}quad(t,e,n,i,r=0,o=1){this.positions.push(...t,...e,...i,...e,...n,...i),this.uv.push(0,r,1,r,0,o,1,r,1,o,0,o)}box(t,e,n,i,r,o,a=1){const l=[];for(let c=0;c<2;c++)for(let h=-1;h<=1;h+=2)for(let d=-1;d<=1;d+=2){const u=c?a:1;l.push([t.x+u*(d*i*e.x+h*o*n.x)/2,t.y+c*r,t.z+u*(d*i*e.z+h*o*n.z)/2])}this.quad(l[0],l[1],l[3],l[2]),this.quad(l[4],l[6],l[7],l[5]),this.quad(l[0],l[4],l[5],l[1]),this.quad(l[2],l[3],l[7],l[6]),this.quad(l[0],l[2],l[6],l[4]),this.quad(l[1],l[5],l[7],l[3])}beam(t,e,n){const i=new T(e[0]-t[0],e[1]-t[1],e[2]-t[2]).normalize(),r=new T(0,1,0);Math.abs(i.y)>.95&&r.set(1,0,0),r.cross(i).normalize().multiplyScalar(n);const o=new T().crossVectors(i,r).normalize().multiplyScalar(n),a=(l,c)=>[l[0]+r.x*Math.cos(c)+o.x*Math.sin(c),l[1]+r.y*Math.cos(c)+o.y*Math.sin(c),l[2]+r.z*Math.cos(c)+o.z*Math.sin(c)];for(let l=0;l<4;l++)this.quad(a(t,l*Math.PI/2),a(e,l*Math.PI/2),a(e,(l+1)*Math.PI/2),a(t,(l+1)*Math.PI/2))}crystal(t,e,n){const i=r=>[t[0]+Math.cos(r*Math.PI/3)*n,t[1],t[2]+Math.sin(r*Math.PI/3)*n];for(let r=0;r<6;r++)this.quad(i(r),i(r+1),e,e)}mesh(t,e){const n=new ye;n.setAttribute("position",new Qt(this.positions,3)),n.setAttribute("uv",new Qt(this.uv,2)),this.colors.length&&n.setAttribute("color",new Qt(this.colors,3)),this.uv1.length&&n.setAttribute("uv1",new Qt(this.uv1,2)),n.computeVertexNormals();const i=new Zt(n,t);return i.name=e,i}}function Xg(s,t){const e=new le;e.name="zephyr-circuit";const n=[],i=[],r=(O,N=0,X=0)=>{const dt=new Ve({color:O,roughness:.72,side:Oe,emissive:N,emissiveIntensity:X});return i.push(dt),dt},o=(O,N,X)=>{const dt=r(O);return dt.polygonOffset=!0,dt.polygonOffsetFactor=N,dt.polygonOffsetUnits=X,dt},a=(O,N,X)=>{const dt=document.createElement("canvas");dt.width=O,dt.height=N;const ut=dt.getContext("2d");if(!ut)throw new Error("Canvas 2D is required for circuit textures");X(ut);const Ot=new T0(dt);return Ot.wrapT=Bi,Ot.colorSpace=en,Ot.anisotropy=t.anisotropy,n.push(Ot),Ot},l=Ir(7193),c=a(512,512,O=>{const N=O.createImageData(512,512);for(let X=0;X<N.data.length;X+=4){const dt=l(),ut=77+dt*34+(l()>.985?24:0);N.data[X]=ut+3,N.data[X+1]=ut+2,N.data[X+2]=ut,N.data[X+3]=255}O.putImageData(N,0,0)});c.wrapS=Bi;const h=a(256,256,O=>{const N=O.createImageData(256,256);for(let X=0;X<256;X++)for(let dt=0;dt<256;dt++){const ut=(X*256+dt)*4,Ot=184+Ni(dt/27,X/31)*62+l()*9;N.data[ut]=N.data[ut+1]=N.data[ut+2]=Ot,N.data[ut+3]=255}O.putImageData(N,0,0)});h.colorSpace=An,h.wrapS=Bi,h.channel=1;const d=r(16777215);d.map=c,d.vertexColors=!0,d.roughness=.96,d.metalness=0,d.roughnessMap=h,d.bumpMap=c,d.bumpScale=.018;const u=a(256,1024,O=>{for(let N=0;N<1500;N++){const X=l()*256,dt=Math.sin(X/256*Math.PI);O.fillStyle=`rgba(35,34,31,${(.05+l()*.14)*dt*dt})`,O.fillRect(X,l()*1024,.5+l()*2,12+l()*190)}}),f=r(16777215);f.map=u,f.transparent=!0,f.depthWrite=!1,f.roughness=.57,f.metalness=0,f.forceSinglePass=!0;const g=new he,v=new he,p=new he,m=new he,y=new he,x=new he,S=new he,D=new he,R=new he,C=new he,I=new he,$=new he,_=new he,M=new he,b=new he,U=new he,G=new he,H=new he,z=new he,B=new he,k=new he,st=new he,at=new he,ft=new he,zt=new he,Dt=new he,tt=new he,q=(O,N,X=0)=>[O.pos.x+O.right.x*N,O.pos.y+N*Math.tan(O.bank)+X,O.pos.z+O.right.z*N],Mt=(O,N,X,dt,ut,Ot,Bt,et=0)=>{O.quad(q(N,dt,et),q(N,ut,et),q(X,Bt,et),q(X,Ot,et),N.s/24,(X.i===0?s.totalLength:X.s)/24)},pt=s.samples,Rt=pt.length,Pt=t.level==="low"?10:16,Ft=new Float32Array(Rt);for(let O=0;O<Rt;O++){let N=0,X=0;for(let dt=-24;dt<=24;dt++){const ut=25-Math.abs(dt);N+=pt[(O+dt+Rt)%Rt].curvature*ut,X+=ut}Ft[O]=Math.tanh(N/X*100)*pt[O].halfWidth*.44}for(let O=0;O<Rt;O++){const N=pt[O],X=pt[(O+1)%Rt],dt=et=>Math.floor(N.s/et)!==Math.floor(X.s/et)&&X.i!==0;for(let et=0;et<8;et++){const F=et/4-1,ot=(et+1)/4-1,Y=[q(N,F*N.halfWidth),q(N,ot*N.halfWidth),q(X,ot*X.halfWidth),q(X,F*X.halfWidth)];g.quad(Y[0],Y[1],Y[2],Y[3]),g.uv.length-=12;for(const K of[0,1,3,1,2,3]){const lt=Y[K],yt=K<2?N:X,Wt=(K===0||K===3?F:ot)*yt.halfWidth,qt=yt===X&&X.i===0?s.totalLength:yt.s;g.uv.push(qt/5.73,Wt/5.73+Ni(lt[0]*.018,lt[2]*.018)*1.7),g.uv1.push((lt[0]+lt[2]*.31)/137,(lt[2]-lt[0]*.23)/113);const Jt=Ni(lt[0]*.025+31,lt[2]*.025-17),Ht=Ni(lt[0]*.11,lt[2]*.11),ie=.73+Jt*.29+Ht*.08;g.colors.push(ie*(1+Jt*.018),ie,ie*(1-Jt*.025))}}const ut=et=>(.56-Math.min(.3,Math.abs(et.curvature)*10))*(.78+Ni(et.pos.x*.17,et.pos.z*.17)*.3),Ot=ut(N),Bt=ut(X);for(const et of[-1.05,1.05])v.quad(q(N,Ft[O]+et-Ot,.018),q(N,Ft[O]+et+Ot,.018),q(X,Ft[X.i]+et+Bt,.018),q(X,Ft[X.i]+et-Bt,.018),N.s/41.3,(X.i===0?s.totalLength:X.s)/41.3);Math.abs(N.curvature)<.0018&&Math.floor(N.s/7)%2===0&&Mt(m,N,X,-.11,.11,-.11,.11,.035);for(const et of[-1,1]){const F=et*N.halfWidth,ot=et*X.halfWidth;for(let Wt=0;Wt<4;Wt++){const qt=q(N,F+et*qn*Wt/4),Jt=q(N,F+et*qn*(Wt+1)/4),Ht=q(X,ot+et*qn*Wt/4),ie=q(X,ot+et*qn*(Wt+1)/4);for(const Ee of[qt,Jt,Ht,ie])Ee[1]=(N.kind===$e.Bridge||X.kind===$e.Bridge?Ee[1]:s.surfaceHeight(Ee[0],Ee[2]))+.025;p.quad(qt,Jt,ie,Ht)}Mt(m,N,X,F-et*.6,F-et*.28,ot-et*.6,ot-et*.28,.04);const Y=et<0?I:$;if(Math.abs(N.curvature)>.003&&et===-Math.sign(N.curvature)){const Wt=Math.floor(N.s/3.6)%2?y:x,qt=[[.08,.16],[.23,.34],[.85,.34],[1.02,.16]];for(let Jt=0;Jt<qt.length-1;Jt++){const[Ht,ie]=qt[Jt],[Ee,Dn]=qt[Jt+1];Wt.quad(q(N,F+et*Ht,ie),q(N,F+et*Ee,Dn),q(X,ot+et*Ee,Dn),q(X,ot+et*Ht,ie))}Dt.quad(q(N,F+et*.08,.035),q(N,F+et*.08,.16),q(X,ot+et*.08,.16),q(X,ot+et*.08,.035)),Dt.quad(q(N,F+et*1.02,.035),q(X,ot+et*1.02,.035),q(X,ot+et*1.02,.16),q(N,F+et*1.02,.16)),Mt(tt,N,X,F-et*.035,F+et*.12,ot-et*.035,ot+et*.12,.032),dt(7.2)&&Y.box(new T(...q(N,F+et*.64,.35)),N.right,N.tangent,.22,.075,.3)}const K=F+et*mn,lt=ot+et*mn;D.quad(q(N,K),q(X,lt),q(X,lt,.28),q(N,K,.28)),(Math.floor(N.s/9)%3===0?C:S).quad(q(N,K,.28),q(X,lt,.28),q(X,lt,Qe-.22),q(N,K,Qe-.22)),S.quad(q(N,K+et*.65),q(X,lt+et*.65),q(X,lt+et*.65,Qe-.18),q(N,K+et*.65,Qe-.18)),R.quad(q(N,K,Qe-.22),q(X,lt,Qe-.22),q(X,lt+et*.12,Qe),q(N,K+et*.12,Qe)),Mt(R,N,X,K+et*.12,K+et*.56,lt+et*.12,lt+et*.56,Qe),Mt(Y,N,X,K+et*.19,K+et*.32,lt+et*.19,lt+et*.32,Qe+.018),Y.quad(q(N,K-et*.012,.77),q(X,lt-et*.012,.77),q(X,lt-et*.012,.87),q(N,K-et*.012,.87)),dt(18)&&(D.box(new T(...q(N,K+et*.65)),N.right,N.tangent,1.25,Qe,1.35,.75),R.box(new T(...q(N,K+et*.65,Qe)),N.right,N.tangent,1.02,.13,1.18,.87))}if(N.kind===$e.Tunnel||X.kind===$e.Tunnel){const et=(ot,Y,K=0)=>q(ot,Math.cos(Y)*(ot.halfWidth+7-K),1.8+Math.sin(Y)*(17-K)),F=N.kind!==X.kind;for(let ot=0;ot<Pt;ot++){const Y=ot/Pt*Math.PI,K=(ot+1)/Pt*Math.PI;_.quad(et(N,Y),et(X,Y),et(X,K),et(N,K)),M.quad(et(N,Y,.24),et(X,Y,.24),et(X,K,.24),et(N,K,.24)),(dt(16)||F)&&(b.beam(et(N,Y,.65),et(N,K,.65),F?.65:.3),F&&U.beam(et(N,Y,-.4),et(N,K,-.4),1.15)),(ot===3||ot===Pt-4)&&b.beam(et(N,Y,.4),et(X,Y,.4),.07)}if(dt(12))for(const ot of[-1,1])for(let Y=0;Y<3;Y++){const K=ot*(N.halfWidth+5.3+Y*.38),lt=q(N,K,.3+Y*.4),yt=q(N,K-ot*(.4+l()),3.5+l()*5.5);yt[0]+=N.tangent.x*(Y-1)*1.5,yt[2]+=N.tangent.z*(Y-1)*1.5,(Y===1?b:U).crystal(lt,yt,.65+l()*.5)}}if(N.kind===$e.Bridge||X.kind===$e.Bridge){const et=N.halfWidth+mn+1.1,F=X.halfWidth+mn+1.1;Mt(G,N,X,-et,et,-F,F,-1.25);for(const ot of[-1,1])G.quad(q(N,ot*et,-.12),q(X,ot*F,-.12),q(X,ot*F,-1.35),q(N,ot*et,-1.35)),H.beam(q(N,ot*(et-.5),-2.1),q(X,ot*(F-.5),-2.1),.45);if(dt(32)){for(const ot of[-1,1]){const Y=ot*(N.halfWidth+mn+.3),K=new T(...q(N,Y)),lt=Math.min(N.groundY-3,s.surfaceHeight(K.x,K.z)-2),yt=K.y-1.25;K.y=lt,G.box(K,N.right,N.tangent,5.8,Math.max(1,yt-lt),6.2,.48),H.box(new T(K.x,yt-2,K.z),N.right,N.tangent,4.4,1.8,5.1,1.16);for(let qt=0;qt<9;qt++){const Jt=qt*2.4,Ht=Math.min(yt-4,cn+l()*6-3);if(Ht<lt)continue;const ie=[K.x+Math.cos(Jt)*2.35,Ht,K.z+Math.sin(Jt)*2.35];z.crystal(ie,[ie[0]+Math.cos(Jt)*.45,Ht+.7+l(),ie[2]+Math.sin(Jt)*.45],.5+l()*.4)}if(s.sampleAtS(N.s+32).kind===$e.Bridge)for(let qt=0;qt<12;qt++){const Jt=s.sampleAtS(N.s+qt*32/12),Ht=s.sampleAtS(N.s+(qt+1)*32/12),ie=-14+Math.sin(qt/12*Math.PI)*10,Ee=-14+Math.sin((qt+1)/12*Math.PI)*10,Dn=q(Jt,ot*(Jt.halfWidth+mn+.3),ie),As=q(Ht,ot*(Ht.halfWidth+mn+.3),Ee);H.beam(Dn,As,1.1),qt%3===0&&G.beam(Dn,q(Jt,ot*(Jt.halfWidth+mn+.3),-1.4),.45)}}H.beam(q(N,-et,-1.7),q(N,et,-1.7),.7)}}}const It={pos:new T,tangent:new T,right:new T,up:new T,halfWidth:0},nt=(O,N,X=0)=>(s.frameAt(O,It),It.pos.addScaledVector(It.right,N),It.pos.y=s.query(It.pos.x,It.pos.z).roadY+X,[It.pos.x,It.pos.y,It.pos.z]),L=s.sAt({seg:fh,t:ph});s.frameAt(L,It);const mt=It.halfWidth;for(let O=0;O<3;O++)for(let N=0;N<18;N++){const X=-mt+N*mt/9,dt=X+mt/9;((O+N)%2?B:x).quad(nt(L+O*1.05,X,.065),nt(L+O*1.05,dt,.065),nt(L+(O+1)*1.05,dt,.065),nt(L+(O+1)*1.05,X,.065))}s.frameAt(L,It);const _t=It.pos.clone(),ht=It.right.clone(),xt=It.tangent.clone(),Et=mt+mn+3.2,gt=(O,N,X=0)=>[_t.x+ht.x*O+xt.x*X,_t.y+N,_t.z+ht.z*O+xt.z*X];for(const O of[-1,1])k.box(new T(...gt(O*Et,-.2)),ht,xt,4.2,16.7,5,.55),x.box(new T(...gt(O*Et,0)),ht,xt,4.5,1.2,5.3,.88),st.beam(gt(O*Et,2,-2.05),gt(O*Et,15.8,-1.25),.22),y.box(new T(...gt(O*Et,12)),ht,xt,3.2,2,3.8,.85);for(const O of[-1.2,1.2]){for(const N of[13,16])k.beam(gt(-Et,N,O),gt(Et,N,O),.42);for(let N=0;N<12;N++){const X=-Et+N*Et/6,dt=X+Et/6;x.beam(gt(X,13,O),gt(dt,16,O),.13),x.beam(gt(X,16,O),gt(dt,13,O),.13),k.beam(gt(X,16,-1.2),gt(X,16,1.2),.2)}}k.box(new T(...gt(0,9.6)),ht,xt,mt*1.95,3,.5);for(const O of[-mt*.75,mt*.75])st.beam(gt(O,12.5),gt(O,14.9),.1);const P=a(1024,128,O=>{O.fillStyle="#102c38",O.fillRect(0,0,1024,128),O.fillStyle="#f1dbad",O.fillRect(0,0,1024,5),O.fillRect(0,123,1024,5),O.font="900 52px sans-serif",O.textAlign="center",O.fillText("ZEPHYR REEF",512,64),O.font="bold 23px sans-serif",O.fillStyle="#76fff0",O.fillText("G R A N D   P R I X",512,100);for(let N=0;N<4;N++)for(let X=0;X<3;X++)(X+N)%2===0&&(O.fillStyle="#f1dbad",O.fillRect(18+X*25,14+N*25,25,25),O.fillRect(931+X*25,14+N*25,25,25))});at.quad(gt(-mt*.95,9.75,-.27),gt(mt*.95,9.75,-.27),gt(mt*.95,12.4,-.27),gt(-mt*.95,12.4,-.27));const w=r(16777215,16777215,.55);w.map=P,w.emissiveMap=P;const j=a(128,128,O=>{const N=(X,dt)=>{O.fillStyle=dt,O.beginPath(),O.moveTo(8+X,12+X),O.lineTo(64,51-X*.6),O.lineTo(120-X,12+X),O.lineTo(120-X,42),O.lineTo(64,84-X*.6),O.lineTo(8+X,42),O.closePath(),O.fill()};N(0,"#ff2fd0"),N(34,"#ffe9fb"),O.fillStyle="#ffb0ec",O.fillRect(2,0,4,128),O.fillRect(122,0,4,128)});for(const O of mh){const N=s.sAt(O),X=Math.ceil(O.length/1.5);for(let ut=0;ut<X;ut++){const Ot=N-O.length/2+ut*O.length/X,Bt=Ot+O.length/X;zt.quad(nt(Ot,O.lateral-2.1,.14),nt(Ot,O.lateral+2.1,.14),nt(Bt,O.lateral+2.1,.14),nt(Bt,O.lateral-2.1,.14));const et=.165+ut/X*.025,F=.165+(ut+1)/X*.025;ft.quad(nt(Ot,O.lateral-1.9,et),nt(Ot,O.lateral+1.9,et),nt(Bt,O.lateral+1.9,F),nt(Bt,O.lateral-1.9,F),ut/X*3,(ut+1)/X*3)}const dt=N+O.length/2;st.beam(nt(dt,O.lateral-2,.1),nt(dt,O.lateral+2,.1),.035)}const it=new xn({map:j,transparent:!0,blending:sn,depthWrite:!1,depthTest:!0,side:Oe,opacity:.95,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-9,polygonOffsetUnits:-18});i.push(it);const rt=r(9081064,6576089,.8);rt.transparent=!0,rt.opacity=.16,rt.depthWrite=!1,rt.forceSinglePass=!0;const Q=(O,N,X,dt=!1)=>{if(!O.positions.length)return;const ut=O.mesh(N,X);ut.receiveShadow=!0,ut.castShadow=dt&&t.shadows,e.add(ut)};d.polygonOffset=!0,d.polygonOffsetFactor=-3,d.polygonOffsetUnits=-6,f.polygonOffset=!0,f.polygonOffsetFactor=-5,f.polygonOffsetUnits=-10,Q(g,d,"road"),Q(v,f,"racing-line");const At=o(16773838,-6,-12);At.roughness=.43;const St=o(15624806,-6,-12),wt=o(16772035,-6,-12);St.roughness=wt.roughness=.48,Q(p,o(12367005,-2,-4),"sand-verge"),Q(m,At,"edge-lines"),Q(y,St,"coral-curbs"),Q(x,wt,"cream-markings"),Q(B,o(1452850,-6,-12),"start-checkers"),Q(Dt,o(8680806,-6,-12),"curb-faces"),Q(tt,o(4802363,-6,-12),"curb-base-dirt"),Q(S,r(7376018),"walls"),Q(D,r(3559256),"wall-foundation"),Q(R,r(12175032),"wall-caps"),Q(C,r(8691355),"wall-courses"),Q(I,r(7667686,2157257,1.5),"left-glow-rail"),Q($,r(16760200,16747838,1.5),"right-glow-rail"),Q(_,r(3160399),"crystal-bore",!0),Q(M,rt,"crystal-lining"),Q(b,r(10747903,3726569,1.9),"tunnel-ribs");const Kt=r(8550861,5978555,.6);return Kt.roughness=.24,Kt.metalness=.22,Q(U,Kt,"bore-crystals"),Q(G,r(7638926),"viaduct",!0),Q(H,r(11580833),"viaduct-arches",!0),Q(z,r(12953996),"pier-barnacles"),Q(k,r(2112842),"start-gantry",!0),Q(st,r(16773821,16767100,1.8),"gantry-light"),Q(at,w,"race-banner"),Q(zt,r(3805232,16723920,.5),"boost-inlays"),Q(ft,it,"boost-pads"),{group:e,update(O,N){j.offset.y=-N*1.1,it.opacity=.88+Math.sin(N*5)*.1},dispose(){e.traverse(O=>{O instanceof Zt&&O.geometry.dispose()});for(const O of i)O.dispose();for(const O of n)O.dispose()}}}function qg(s,t){const e=new In;for(const R of s.samples)e.expandByPoint(R.pos);const n=t.level==="low"?5:3.2,i=e.min.x-280,r=e.min.z-280,o=Math.ceil((e.max.x-i+280)/n),a=Math.ceil((e.max.z-r+280)/n),l=(o+1)*(a+1),c=new Float32Array(l*3),h=new Float32Array(l*3),d=new Uint32Array(o*a*6);for(let R=0;R<=a;R++)for(let C=0;C<=o;C++){const I=(R*(o+1)+C)*3,$=i+C*n,_=r+R*n,M=s.query($,_),b=Math.abs(M.lateral)-s.sampleAtS(M.s).halfWidth,U=b<=3?.14:b<9?.14*(1-(b-3)/6):0;c[I]=$,c[I+1]=s.surfaceHeight($,_,M.index)-U,c[I+2]=_}let u=0;for(let R=0;R<a;R++)for(let C=0;C<o;C++){const I=R*(o+1)+C,$=I+1,_=I+o+1,M=_+1;d[u++]=I,d[u++]=_,d[u++]=$,d[u++]=$,d[u++]=_,d[u++]=M}const f=new ye;f.setAttribute("position",new ve(c,3)),f.setIndex(new ve(d,1)),f.computeVertexNormals();const g=f.getAttribute("normal"),v=new Gt("#c8b786"),p=new Gt("#388979"),m=new Gt("#d8898c"),y=new Gt("#bfccd0"),x=new Gt;for(let R=0;R<l;R++){const C=R*3,I=c[C+1];x.copy(v).lerp(p,de((I-cn-1)/9,0,1)),x.lerp(m,de((.91-g.getY(R))*3.8,0,1)),x.lerp(y,de((I-34)/27,0,.9)),x.multiplyScalar(.86+wr(c[C]*.038,c[C+2]*.038,3)*.32),h[C]=x.r,h[C+1]=x.g,h[C+2]=x.b}f.setAttribute("color",new ve(h,3));const S=new Ve({vertexColors:!0,roughness:.95}),D=new Zt(f,S);return D.name="reef-terrain",D.receiveShadow=!0,D.castShadow=!1,{mesh:D,dispose(){f.dispose(),S.dispose()}}}function Yg(s,t){const e=new T(-.64,.57,-.51).normalize(),n=s.background,i=s.fog,r=new Gt().setRGB(.46,.31,.23);s.background=r,s.fog=new Ca(r,.00125);const o=new Me({side:ke,depthWrite:!1,uniforms:{uTime:{value:0},uSun:{value:e}},vertexShader:`varying vec3 vDir;
      void main(){vDir=position; vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.); gl_Position=p.xyww;}`,fragmentShader:`varying vec3 vDir; uniform float uTime; uniform vec3 uSun;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
      float fbm(vec2 p){float n=0.,a=.5;for(int i=0;i<5;i++){n+=a*noise(p);p=p*2.03+13.1;a*=.5;}return n;}
      void main(){vec3 d=normalize(vDir);float h=max(d.y,0.);
        vec3 c=mix(vec3(.46,.31,.23),vec3(.045,.27,.34),smoothstep(0.,.23,h));
        c=mix(c,vec3(.022,.045,.19),smoothstep(.18,1.,h));
        c+=vec3(.23,.12,.035)*exp(-pow((h-.045)*22.,2.));
        vec2 p=d.xz/(abs(d.y)+.25);float n=fbm(p*2.3+vec2(uTime*.006,0.));
        float cloud=smoothstep(.58,.73,n+sin(p.y*3.+n*4.)*.08)*smoothstep(.055,.22,h);
        vec3 cloudColor=mix(vec3(.09,.15,.23),vec3(.88,.65,.38),smoothstep(.57,.79,n));
        c=mix(c,cloudColor,cloud*.9);
        float sd=max(dot(d,uSun),0.);c+=vec3(1.,.56,.2)*pow(sd,350.)*.42;
        c+=vec3(1.,.87,.57)*smoothstep(.9991,.99965,sd)*3.;
        gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),a=new Zt(new $n(1900,32,16),o);a.frustumCulled=!1,a.renderOrder=-100,s.add(a);const l=new pa(16770746,3.5);l.castShadow=t.shadows,l.shadow.mapSize.set(t.shadowMapSize,t.shadowMapSize),Object.assign(l.shadow.camera,{left:-90,right:90,top:90,bottom:-90,near:70,far:390}),l.shadow.camera.updateProjectionMatrix(),l.shadow.bias=-6e-4,l.shadow.normalBias=.045;const c=new ig(6662088,2635585,.75),h=new pa(6724836,.22);return h.position.set(90,60,90),l.position.copy(e).multiplyScalar(220),s.add(l,l.target,c,h),{sunDir:e,sunLight:l,update(d,u,f,g){a.position.copy(f.position),o.uniforms.uTime.value=u,l.position.copy(g).addScaledVector(e,220),l.target.position.copy(g),l.target.updateMatrixWorld()},dispose(){s.remove(a,l,l.target,c,h),a.geometry.dispose(),o.dispose(),l.dispose(),s.background=n,s.fog=i}}}function jg(s,t){return new Me({uniforms:{uTime:{value:0},uDetail:{value:1},uLevel:{value:cn},uSeabed:{value:s},uBounds:{value:t},uTexel:{value:new ct(1/s.image.width,1/s.image.height)},uSun:{value:new T(-.64,.57,-.51).normalize()}},vertexShader:`
      uniform float uTime; uniform float uLevel; uniform sampler2D uSeabed; uniform vec4 uBounds;
      varying vec3 vWorld;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.);
        float depth = uLevel - texture2D(uSeabed, (w.xz-uBounds.xy)/uBounds.zw).r;
        // Zero displacement at the real waterline; the lagoon's datum remains sea level.
        float shoreFade = smoothstep(0., 5., depth);
        w.y += shoreFade * (sin(w.x*.095+w.z*.04+uTime*1.2)*.58
          + sin(w.z*.17-w.x*.05-uTime*1.65)*.28);
        vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform float uTime; uniform float uDetail; uniform float uLevel;
      uniform sampler2D uSeabed; uniform vec4 uBounds; uniform vec2 uTexel; uniform vec3 uSun;
      varying vec3 vWorld;
      void main() {
        vec2 p = vWorld.xz, uv = (p-uBounds.xy)/uBounds.zw;
        float bed = texture2D(uSeabed, uv).r;
        float depth = uLevel-bed;
        if (depth <= 0. || bed >= vWorld.y) discard;
        vec2 stepWorld = uTexel*uBounds.zw;
        vec2 gradient = vec2(
          texture2D(uSeabed, uv+vec2(uTexel.x,0.)).r-texture2D(uSeabed, uv-vec2(uTexel.x,0.)).r,
          texture2D(uSeabed, uv+vec2(0.,uTexel.y)).r-texture2D(uSeabed, uv-vec2(0.,uTexel.y)).r
        )/(2.*stepWorld);
        // Depth / terrain slope estimates horizontal distance to the real contour.
        float shoreDistance = depth/max(length(gradient), .12);
        float shoreFade = smoothstep(0., 5., depth);
        float a=p.x*.095+p.y*.04+uTime*1.2, b=p.y*.17-p.x*.05-uTime*1.65;
        vec2 slope = (vec2(.095,.04)*cos(a)*.58 + vec2(-.05,.17)*cos(b)*.28)*shoreFade;
        // Analytic chop normals remain visible when the mesh swells are subpixel.
        float bendA = dot(p,vec2(-.12,.16))+uTime*.31;
        float bendB = dot(p,vec2(.17,.09))-uTime*.27;
        slope += (vec2(.52,.21)+vec2(-.12,.16)*cos(bendA)*1.6)
          *cos(dot(p,vec2(.52,.21))+sin(bendA)*1.6+uTime*1.9)*.32;
        slope += (vec2(-.31,.73)+vec2(.17,.09)*cos(bendB)*1.3)
          *cos(dot(p,vec2(-.31,.73))+sin(bendB)*1.3-uTime*2.3)*.22;
        if (uDetail > .5) {
          slope += vec2(1.43,.62)*cos(dot(p,vec2(1.43,.62))+uTime*2.7)*.075;
          slope += vec2(-.85,1.76)*cos(dot(p,vec2(-.85,1.76))-uTime*3.1)*.055;
        }
        vec3 n = normalize(vec3(-slope.x,1.,-slope.y));
        vec3 viewDir = normalize(cameraPosition-vWorld);
        float fres = .045+.955*pow(1.-max(dot(n,viewDir),0.),4.);
        float shallow = 1.-smoothstep(.6,18.,depth);
        // Blue, not terrain green: turquoise shelves fall into cobalt/navy channels.
        vec3 c = mix(vec3(.003,.028,.115),vec3(.008,.30,.43),shallow);
        vec3 reflection = reflect(-viewDir,n);
        vec3 sky = mix(vec3(.28,.56,.76),vec3(.025,.14,.32),smoothstep(0.,.65,reflection.y));
        c = mix(c,sky,fres*.72);
        float halfDot = max(dot(n,normalize(viewDir+uSun)),0.);
        float glint = pow(halfDot,190.);
        c += vec3(1.,.9,.68)*glint*4.5;
        float breaker = sin(shoreDistance*2.1-uTime*1.35 + sin(p.x*.19+p.y*.23)*.6);
        float rim = 1.-smoothstep(.65,2.5,shoreDistance);
        float wash = (1.-smoothstep(1.5,5.5,shoreDistance))*smoothstep(.35,.85,breaker);
        c = mix(c,vec3(.79,.94,.96),max(rim*.94,wash*.72));
        if (uDetail > .5) {
          float caustic = pow(max(0.,sin(p.x*.57+sin(p.y*.43+uTime*.35))*sin(p.y*.61-uTime*.28)),18.);
          c += vec3(.1,.25,.28)*caustic*shallow*shallow;
        }
        float fog = 1.-exp(-.00125*.00125*dot(cameraPosition-vWorld,cameraPosition-vWorld));
        c = mix(c,vec3(.46,.31,.23),fog);
        gl_FragColor = vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function $g(s,t){const e=new In;for(const f of s.samples)e.expandByPoint(f.pos);e.expandByScalar(260);const n=e.getCenter(new T),i=e.getSize(new T),r=t.fancyWater?160:48,o=new mi(i.x,i.z,r,r);o.rotateX(-Math.PI/2);const a=t.fancyWater?512:256,l=new Float32Array(a*a),c={index:0,lateral:0,u:0,s:0,roadY:0,groundY:0,onRoad:!1};for(let f=0;f<a;f++)for(let g=0;g<a;g++){const v=e.min.x+(g+.5)/a*i.x,p=e.min.z+(f+.5)/a*i.z;s.query(v,p,void 0,c);const m=s.samples[c.index];l[f*a+g]=c.roadY-c.groundY>3?gh(v,p,Math.max(0,Math.abs(c.lateral)-m.halfWidth-qn),c.groundY):s.surfaceHeight(v,p,c.index)}const h=new eh(l,a,a,Ar,dn);h.minFilter=h.magFilter=nn,h.needsUpdate=!0;const d=jg(h,new me(e.min.x,e.min.z,i.x,i.z));d.uniforms.uDetail.value=t.fancyWater?1:0;const u=new Zt(o,d);return u.name="Zephyr lagoon",u.position.set(n.x,cn,n.z),{mesh:u,update(f,g,v){d.uniforms.uTime.value=g},dispose(){o.dispose(),d.dispose(),h.dispose()}}}function vh(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ye;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=ec(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const g=ec(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ec(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new ve(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);a.setComponent(u+d,g,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Kg(s,t){const e=new le;e.name="Reef landmarks";const n=Ir(81037),i=new Ve({color:3165536,roughness:.93,flatShading:!0}),r=new Ve({color:14966086,roughness:.72,flatShading:!0}),o=new Ve({color:14200409,roughness:.75}),a=new Ve({color:2590573,roughness:.8}),l=new Ve({color:5782322,roughness:.9}),c=new Ve({color:7929839,emissive:1826254,emissiveIntensity:1.4,roughness:.35}),h=new Ve({color:16777215,emissive:1527621,emissiveIntensity:.18,roughness:.8}),d=new Map,u=new Te,f={pos:new T,tangent:new T,right:new T,up:new T,halfWidth:12},g=[],v=[],p=(_,M,b,U=new T(1,1,1),G=new Pe)=>{u.position.copy(b),u.scale.copy(U),u.rotation.copy(G),u.updateMatrix(),_.applyMatrix4(u.matrix);const H=_.index?_.toNonIndexed():_;H!==_&&_.dispose(),H.deleteAttribute("uv");const z=d.get(M)??[];z.push(H),d.set(M,z)},m=(_,M,b)=>{const U=s.query(_,M),G=s.samples[U.index];return Math.hypot(_-G.pos.x,M-G.pos.z)>G.halfWidth+4+b},y=(_,M,b,U)=>{s.frameAt(_,f);const G=M<0?-1:1;for(let H=0;H<80;H++){const z=G*(Math.max(Math.abs(M),f.halfWidth+5+b)+H*4),B=f.pos.x+f.right.x*z,k=f.pos.z+f.right.z*z,st=s.surfaceHeight(B,k);if(m(B,k,b)&&(U||st>=cn+1))return new T(B,st,k)}return null},x=new Me({transparent:!0,depthWrite:!1,side:Oe,blending:sn,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float uTime;void main(){float edge=sin(vUv.x*3.14159);float streak=.55+.25*sin(vUv.x*140.+sin(vUv.y*7.-uTime*6.))+.2*sin(vUv.y*80.+uTime*12.);gl_FragColor=vec4(.22,.85,1.,edge*streak*.72);}"}),S=new Me({transparent:!0,depthWrite:!1,side:Oe,blending:sn,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float uTime;void main(){float d=length((vUv-.5)*2.);float a=pow(max(0.,1.-d),2.);gl_FragColor=vec4(.55,1.,.94,a*(.3+.07*sin(uTime*1.3)));}"}),D=new Me({transparent:!0,depthWrite:!1,side:Oe,blending:sn,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),2.);gl_FragColor=vec4(.35,.9,1.,edge*pow(vUv.y,1.8)*.34);}"});for(const _ of Hg){const M=s.sAt(_),b=_.scale;if(s.frameAt(M,f),_.kind==="arch"){let z=!1;for(let Dt=0;Dt<200;Dt++){const tt=Math.ceil(Dt/2)*8*(Dt%2?1:-1);s.frameAt(M+tt,f);const q=f.halfWidth+6+b*5,Mt=f.pos.clone().addScaledVector(f.right,-q),pt=f.pos.clone().addScaledVector(f.right,q);if(s.surfaceHeight(Mt.x,Mt.z)>=cn+1&&s.surfaceHeight(pt.x,pt.z)>=cn+1&&m(Mt.x,Mt.z,4.6*b)&&m(pt.x,pt.z,4.6*b)){z=!0;break}}if(!z)continue;const B=f.halfWidth+6+b*5,k=f.pos.clone(),st=Math.atan2(-f.tangent.x,-f.tangent.z),at=Math.abs(Math.tan(s.samples[s.query(k.x,k.z).index].bank))*B,ft=Math.max(16,15*b)+at;for(const Dt of[-1,1]){const tt=k.clone().addScaledVector(f.right,Dt*B),q=s.surfaceHeight(tt.x,tt.z),Mt=k.y+ft-q,pt=tt.clone();pt.y=q+Mt/2,p(new xe(1.7*b,2.1*b,Mt,6),r,pt);const Rt=tt.clone().addScaledVector(f.right,Dt*b);Rt.y=q+3*b,p(new He(5*b,6*b,5*b),i,Rt,void 0,new Pe(0,st,0));for(let Ft=0;Ft<4;Ft++){const It=tt.clone();It.y=q+5*b+Ft*(Mt-6*b)/4,p(new xe(1.94*b,1.94*b,.45*b,6),o,It),p(new hi(.7*b),c,It.addScaledVector(f.tangent,1.95*b),new T(.6,1.4,.4))}const Pt=pt.clone();Pt.y=k.y+ft,p(new _n(2.8*b,0),o,Pt)}const zt=k.clone();if(zt.y+=ft+1.7*b,zt.y-1.7*b<k.y+11+at)throw new Error("Arch opening clearance");p(new He(B*2+4*b,3.4*b,3*b),r,zt,void 0,new Pe(0,st,0));for(let Dt=-4;Dt<=4;Dt++){const tt=zt.clone().addScaledVector(f.right,Dt*B/5).addScaledVector(f.tangent,1.6*b);p(new hi(.65*b),c,tt,new T(1,1.5,.35),new Pe(0,st,0))}continue}const U=(_.kind==="shell"?18:_.kind==="floatisland"||_.kind==="waterfall"?24:_.kind==="wreck"?23:8)*b,G=["wreck","rocks","waterfall","floatisland"].includes(_.kind),H=y(M,_.lateral,U,G);if(H)if(_.kind==="beacon"){p(new xe(2.2*b,5*b,39*b,8),o,H.clone().add(new T(0,19.5*b,0))),p(new xe(5*b,4*b,2*b,8),r,H.clone().add(new T(0,37*b,0)));const z=new le;z.position.copy(H).y+=42*b,z.add(new Zt(new hi(3.4*b),c));const B=new Zt(new Wn(13*b,95*b,20,1,!0),D);B.rotation.z=Math.PI/2,B.position.x=47.5*b,z.add(B),e.add(z),v.push(z),p(new Wn(6*b,6*b,8),r,H.clone().add(new T(0,49*b,0)))}else if(_.kind==="shell"){const z=[];for(let B=0;B<=150;B++){const k=B/150*Math.PI*5,st=1+B/150*12;z.push(new T(Math.cos(k)*st,Math.sin(k)*st+15,B/150*6))}p(new Ts(new ys(z),150,2.4,8,!1),o,H,new T(b,b,b));for(let B=0;B<14;B++){const k=B/14*Math.PI*2;p(new hi(1.5),r,H.clone().add(new T(Math.cos(k)*14,15+Math.sin(k)*14,5)),new T(1,2,1))}}else if(_.kind==="floatisland"){const z=H.clone();z.y=Math.max(H.y+45,50)+b*9;for(let B=0;B<4;B++){const k=(13-B*2.7)*b,st=z.clone().add(new T(Math.sin(B*2)*b,-B*4*b-2*b,Math.cos(B)*b));p(new xe(k,k*.78,4.5*b,9),B%2?o:i,st)}p(new xe(14*b,13*b,1.3*b,9),a,z),p(new xe(14.3*b,13.3*b,.65*b,9),o,z.clone().add(new T(0,-.8*b,0)));for(let B=0;B<13;B++){const k=B/13*Math.PI*2,st=(3+n()*8)*b,at=z.clone().add(new T(Math.cos(k)*12.5*b,-st/2,Math.sin(k)*12.5*b));if(p(new xe(.28*b,.06*b,st,4),a,at,void 0,new Pe(.12*Math.sin(k),0,.12*Math.cos(k))),B%4===0){const ft=z.clone().add(new T(Math.cos(k)*19*b,(-5-n()*5)*b,Math.sin(k)*19*b));p(new _n(2.5*b,0),i,ft,new T(1.2,.7,1))}}for(let B=0;B<5;B++){const k=z.clone().add(new T((n()-.5)*14*b,2.5*b,(n()-.5)*14*b));p(new _n(2.7*b,1),a,k,new T(1,.7+n(),1)),B===0&&p(new hi(2*b),c,k.add(new T(0,4*b,0)),new T(.6,2,.6))}}else if(_.kind==="waterfall"){const z=Math.max(H.y+26*b,f.pos.y+16),B=Math.max(cn,H.y-14),k=z-B;for(let ft=0;ft<4;ft++)p(new xe((12-ft)*b,(13-ft)*b,k/4+1,7),ft%2?i:a,new T(H.x,B+k*(ft+.5)/4,H.z-7*b),new T(1,1,.55));const st=new Zt(new mi(13*b,k,1,8),x);st.position.set(H.x,B+k/2,H.z),e.add(st);const at=new Zt(new mi(29*b,16*b),S);at.position.set(H.x,B+2,H.z+1),e.add(at),g.push({object:at,y:at.position.y,phase:n()*6,amplitude:.6})}else if(_.kind==="wreck"){H.y=cn+1;const z=new $n(1,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2);p(z,l,H,new T(7*b,8*b,17*b),new Pe(0,0,.13)),p(new He(11*b,.7*b,25*b),l,H.clone().add(new T(0,-.3*b,0)));for(const st of[-1,1]){p(new He(.55*b,.65*b,24*b),o,H.clone().add(new T(st*5.7*b,1.2*b,0)));for(let at=-3;at<=3;at++)p(new He(.35*b,2*b,.35*b),o,H.clone().add(new T(st*5.7*b,.2*b,at*3.4*b)))}p(new He(7*b,4*b,6*b),r,H.clone().add(new T(0,2*b,8*b))),p(new xe(.3*b,.6*b,25*b,6),l,H.clone().add(new T(0,12*b,-2*b)),void 0,new Pe(0,0,-.12)),p(new He(13*b,.5*b,.5*b),o,H.clone().add(new T(1.7*b,17*b,-2*b)));const B=new Ia;B.moveTo(-5,0),B.lineTo(5,0),B.lineTo(3,-4),B.lineTo(4,-7),B.lineTo(-4,-9),B.closePath();const k=new Lr(B,{depth:.12,bevelEnabled:!1});p(k,o,H.clone().add(new T(1.7*b,16.5*b,-2*b)),new T(b,b,b))}else for(let z=0;z<Math.ceil(25*t.sceneryDensity);z++){const B=H.clone().add(new T((n()-.5)*13*b,0,(n()-.5)*13*b));B.y=s.surfaceHeight(B.x,B.z);const k=_.kind==="flora_cluster";!m(B.x,B.z,4*b)||k&&B.y<cn+1||(k?p(new Wn(.9*b,6*b,5),z%2?c:r,B.add(new T(0,3*b,0)),new T(1,.5+n(),1)):p(new _n(2*b),i,B,new T(1+n(),.7+n(),1+n())))}}const R=[.1,.24,.41,.81,.96],C=Math.floor(210*t.sceneryDensity),I=[new _n(1,0),new _n(1,1),new Wn(.45,3,5)],$=[3771509,2390383,7645824,6520721];for(let _=0;_<3;_++){const M=new yr(I[_],_===0?i:h,C);let b=0;for(let U=0;U<C*3&&b<C;U++){const G=U%R.length,H=s.sampleAtS((R[G]+(n()-.5)*.022)*s.totalLength),z=n()<.18,B=z?3+n()*4:.45+n()*1.25,k=(H.halfWidth+13+B*2+n()*(z?110:30))*(G%2?1:-1),st=H.pos.x+H.right.x*k,at=H.pos.z+H.right.z*k;if(!m(st,at,B*2))continue;const ft=s.surfaceHeight(st,at);_!==0&&ft<cn+1||(u.position.set(st,ft+(_===0?.3:B),at),u.scale.set(B,B*(_===1?.6:.8+n()*.3),B),u.rotation.set(0,n()*Math.PI*2,0),u.updateMatrix(),M.setMatrixAt(b,u.matrix),M.setColorAt(b,new Gt($[_===0?3:Math.floor(n()*3)])),b++)}M.count=b,M.instanceMatrix.needsUpdate=!0,M.computeBoundingSphere(),M.castShadow=t.shadows,e.add(M)}for(const[_,M]of d){const b=vh(M);if(M.forEach(U=>U.dispose()),b){const U=new Zt(b,_);U.castShadow=t.shadows,U.receiveShadow=!0,e.add(U)}}return{group:e,update(_,M,b){c.emissiveIntensity=1.15+Math.sin(M*1.4)*.25,h.emissiveIntensity=.16+Math.sin(M*.8)*.03,x.uniforms.uTime.value=M,S.uniforms.uTime.value=M;for(const U of g)U.object.position.y=U.y+Math.sin(M*.45+U.phase)*U.amplitude,U.object instanceof Zt?U.object.quaternion.copy(b.quaternion):U.object.rotation.y=Math.sin(M*.12+U.phase)*.04;for(const U of v)U.rotation.y=M*.7},dispose(){const _=new Set,M=new Set([i,r,o,a,l,c,h,x,S,D]);e.traverse(b=>{b instanceof Zt&&(_.add(b.geometry),Array.isArray(b.material)?b.material.forEach(U=>M.add(U)):M.add(b.material),b instanceof yr&&b.dispose())}),_.forEach(b=>b.dispose()),M.forEach(b=>b.dispose()),e.clear()}}}function Zg(s,t){const e=new le;e.name="world",s.add(e);const n=new Wg,i=Xg(n,t),r=qg(n,t),o=$g(n,t),a=Kg(n,t),l=Yg(s,t);e.add(r.mesh,o.mesh,i.group,a.group);const c=n.samples.filter(f=>f.kind===$e.Tunnel),h=c.length?c[0].s:0,d=c.length?c[c.length-1].s:0,u=new T;return{group:e,spline:n,sunDir:l.sunDir,tunnelBlend(f){if(!c.length)return 0;const v=n.query(f.x,f.z,-1).s;if(!(h<=d?v>=h&&v<=d:v>=h||v<=d))return 0;const m=Math.min(Math.abs(v-h),Math.abs(v-d));return Math.min(1,m/12)},update(f,g,v,p){u.copy(p),i.update(f,g),o.update(f,g,v),a.update(f,g,v),l.update(f,g,v,u)},dispose(){i.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose(),e.removeFromParent()}}}function pe(s,t,e,n=0,i=0,r=0){const o=new Zt(t,e);return o.position.set(n,i,r),o.castShadow=!0,o.receiveShadow=!0,s.add(o),o}function te(s,t,e,n,i=12){const r=pe(s,new $n(1,i,8),t,e[0],e[1],e[2]);return r.scale.set(n[0],n[1],n[2]),r}function De(s,t,e,n,i,r,o,a){return pe(s,new He(r,o,a),t,e,n,i)}function oe(s,t,e,n,i,r=8){const o=new T(e[0],e[1],e[2]),a=new T(n[0],n[1],n[2]),l=a.clone().sub(o),c=pe(s,new xe(i,i,l.length(),r),t);return c.position.copy(o).add(a).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new T(0,1,0),l.normalize()),c}function tn(s,t,e,n,i,r=.06){const o=new Ia;o.moveTo(e[0][0],-e[0][1]);for(let l=1;l<e.length;l++)o.lineTo(e[l][0],-e[l][1]);o.closePath();const a=new Lr(o,{depth:i,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:r,bevelThickness:r,curveSegments:8});return a.rotateX(-Math.PI/2),pe(s,a,t,0,n,0)}function Tr(s){const t=new Map;for(const e of[...s.children])if(e instanceof Zt&&!Array.isArray(e.material)){const n=t.get(e.material)??[];n.push(e),t.set(e.material,n)}else Tr(e);for(const[e,n]of t){if(n.length<2)continue;const i=n.map(a=>{a.updateMatrix();const l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();return l.applyMatrix4(a.matrix),l}),r=vh(i);for(const a of i)a.dispose();if(!r)continue;for(const a of n)a.geometry.dispose(),s.remove(a);const o=new Zt(r,e);o.castShadow=!0,o.receiveShadow=!0,s.add(o)}}function Jg(s){const t=new Set,e=new Set;s.traverse(n=>{if(n instanceof Zt){t.add(n.geometry);for(const i of Array.isArray(n.material)?n.material:[n.material])e.add(i)}});for(const n of t)n.dispose();for(const n of e)n.dispose()}function Qg(s,t){const e=new le;e.name=`driver_${s.body}`;const n=[],i=(v,p=0)=>{const m=new Ve({color:v,roughness:.48,metalness:s.body==="automaton"?.4:.12,emissive:p?v:0,emissiveIntensity:p});return p&&n.push(m),m},r=i(s.primary),o=i(s.secondary),a=i(s.accent,s.body==="golem"||s.body==="moth"?s.glow:0),l=i(s.eye,s.body==="automaton"?s.glow:0),c=i(1647404),h=t.level==="low"?8:12,d=new le;d.position.y=.38,e.add(d),te(d,o,[0,.03,0],[.36,.42,.25],h),De(d,a,0,.05,-.245,.1,.38,.035);for(const v of[-1,1])oe(e,o,[v*.19,.12,0],[v*.2,.05,-.43],.13),te(e,c,[v*.2,.04,-.47],[.15,.1,.23],8);const u=new le;u.name="head",u.position.set(0,1.03,-.035),e.add(u);const f=[],g=[new le,new le];for(let v=0;v<2;v++){const p=v===0?-1:1,m=new le;m.position.set(p*.35,.22,0),d.add(m),oe(m,o,[0,0,0],[p*.07,-.2,-.14],.105),oe(m,r,[p*.07,-.2,-.14],[0,-.18,-.4],.085),g[v].name=v===0?"hand_L":"hand_R",g[v].position.set(0,-.18,-.4),m.add(g[v]),te(g[v],r,[0,0,0],[.11,.1,.12],8),f.push(m)}if(s.body==="otter"){te(u,r,[0,0,0],[.4,.35,.33],h);for(const p of[-1,1]){te(u,r,[p*.34,.23,0],[.14,.14,.09],8),te(u,o,[p*.34,.23,-.075],[.07,.08,.025],8),te(u,a,[p*.13,-.12,-.3],[.17,.12,.1],8),te(u,l,[p*.17,.06,-.306],[.047,.065,.035],8),te(u,c,[p*.16,.28,-.23],[.16,.12,.055],8),te(u,o,[p*.16,.28,-.277],[.115,.08,.023],8);for(let m=0;m<3;m++)oe(u,a,[p*.25,-.11,-.35],[p*.52,-.09+m*.045,-.3],.012,5)}te(u,c,[0,-.1,-.413],[.07,.055,.045],8),oe(d,a,[-.29,.32,0],[.29,.32,0],.13);const v=tn(d,a,[[-.1,.12],[.13,.15],[.26,.87],[.04,.75],[-.13,1.04]],.3,.035,.015);v.rotation.x=-.18}else if(s.body==="golem"){pe(u,new br(.44,0),r).scale.set(1.05,.95,.88);for(const p of[-1,1]){De(u,l,p*.17,.015,-.345,.19,.07,.055);const m=De(u,o,p*.17,.12,-.35,.3,.12,.12);m.rotation.z=p*-.15,pe(d,new br(.23,0),r,p*.4,.2,0);for(let y=0;y<2;y++){const x=pe(d,new Wn(.09,.33,5),a,p*(.36+y*.13),.4,.015);x.rotation.z=-p*(.3+y*.3)}}oe(u,a,[-.1,.32,-.3],[-.04,.13,-.397],.018,5),oe(u,a,[-.04,.13,-.397],[.04,-.1,-.402],.018,5),oe(u,a,[.04,-.1,-.402],[.2,-.27,-.29],.018,5),De(u,c,0,-.21,-.34,.27,.045,.04)}else if(s.body==="moth"){te(u,r,[0,0,0],[.36,.35,.3],h);for(const v of[-1,1]){te(u,l,[v*.19,.025,-.255],[.2,.22,.12],8);for(let p=0;p<3;p++)oe(u,a,[v*(.12+p*.06),-.12,-.36],[v*(.12+p*.06),.16,-.35],.009,4);oe(u,r,[v*.17,.25,0],[v*.34,.76,0],.033);for(let p=0;p<5;p++){const m=.37+p*.075;oe(u,a,[v*(.2+p*.027),m,0],[v*(.39+p*.015),m+.05,0],.022,5)}for(let p=0;p<2;p++){const m=te(d,o,[v*(.43-p*.08),.19-p*.29,.28],[.37,.24,.055],8);m.rotation.z=v*(.7-p*1.3),te(d,a,[v*(.56-p*.1),.22-p*.32,.325],[.11,.11,.025],8)}}for(let v=0;v<8;v++){const p=v*Math.PI/4;te(d,r,[Math.cos(p)*.28,.34,Math.sin(p)*.19],[.13,.13,.12],8)}}else if(s.body==="jelly"){r.transparent=!0,r.opacity=.65,r.depthWrite=!1,r.emissive.setHex(s.primary),r.emissiveIntensity=s.glow*.45,n.push(r);const v=pe(u,new $n(.46,h,8,0,Math.PI*2,0,Math.PI*.61),r,0,-.06,0);v.scale.y=.83;const p=pe(u,new Xn(.43,.045,6,h),a,0,-.2,0);p.rotation.x=Math.PI/2;for(let m=0;m<7;m++){const y=m*Math.PI*2/7,x=Math.cos(y)*.3,S=Math.sin(y)*.27,D=new ys([new T(x,-.18,S),new T(x*1.08,-.38,S),new T(x*.8+.07,-.53,S+.07)]);pe(u,new Ts(D,5,.028,5,!1),r)}for(const m of[-1,1])te(u,l,[m*.14,.025,-.421],[.043,.06,.027],8)}else if(s.body==="automaton"){De(u,r,0,0,0,.67,.55,.51),te(u,c,[0,.035,-.275],[.35,.17,.08],8),te(u,l,[0,.035,-.342],[.29,.11,.035],h);for(const v of[-1,1])for(const p of[-.21,.21])te(u,a,[v*.28,p,-.27],[.032,.032,.025],8);for(let v=0;v<4;v++)De(u,c,-.12+v*.08,-.17,-.267,.035,.06,.025);oe(u,o,[.22,.23,.13],[.22,.57,.13],.072),pe(u,new xe(.1,.1,.06,8),c,.22,.58,.13);for(const v of[-1,1]){const p=pe(d,new xe(.19,.19,.08,12),a,v*.4,.2,0);p.rotation.z=Math.PI/2;for(let m=0;m<8;m++){const y=m*Math.PI/4,x=De(d,r,v*.41,.2+Math.cos(y)*.2,Math.sin(y)*.2,.1,.09,.09);x.rotation.x=-y}}}else{te(u,r,[0,0,-.01],[.49,.25,.33],h);for(const p of[-1,1])te(u,r,[p*.29,.22,-.12],[.18,.2,.16],8),te(u,a,[p*.29,.24,-.257],[.12,.13,.042],8);te(u,l,[.29,.24,-.301],[.04,.085,.02],8),te(u,c,[-.29,.24,-.301],[.135,.14,.035],8),oe(u,c,[-.46,.31,-.16],[.17,.02,-.315],.022);const v=new ys([new T(-.31,-.065,-.275),new T(0,-.14,-.331),new T(.31,-.065,-.275)]);pe(u,new Ts(v,8,.02,5,!1),c),tn(u,c,[[-.53,.21],[0,-.49],[.53,.21]],.4,.075,.035),pe(u,new xe(.21,.31,.22,3),o,0,.55,0),te(u,a,[0,.51,-.22],[.075,.085,.025],8)}return Tr(e),{root:e,hands:g,emissives:n,update(v){const p=Math.sin(v.time*3.8)*.018,m=v.hitTimer>0,y=m?Math.sin(v.time*32)*.3:0,x=v.boosting?-.23:v.airborne?.12:0;d.position.y=.38+p+(v.airborne?.09:0),d.scale.y=1+Math.sin(v.time*2.6)*.018+(v.airborne?.1:0),d.rotation.set(x+(m?.32:0),0,-v.lean*.17+y),u.position.set(-v.lean*.1,1.03+p+(v.airborne?.15:0),-.035+x*.45),u.rotation.set(m?-.18:x*.35,-v.steer*.35,-v.lean*.1-y*.5);for(let S=0;S<2;S++){const D=S===0?-1:1,R=v.drifting&&S===0;f[S].rotation.set(v.airborne||m?2.25+y:v.boosting?-.25:0,v.steer*.12,D*(v.airborne||m?-.65:R?-1.45:0))}}}}function ma(s,t){const e=new le;e.name=`kart_${s.id}`;const n=new le;n.name="chassis",e.add(n);const i=[],r=(M,b=.4,U=.25,G=0)=>{const H=new Ve({color:M,roughness:b,metalness:U,emissive:G?M:0,emissiveIntensity:G});return G&&i.push(H),H},o=r(s.kart.body),a=r(s.kart.trim,.35),l=r(s.kart.tyre,.7,.1),c=r(s.kart.rim,.28,.4),h=r(3425364,.5,.4),d=r(s.kart.glow,.25,.1,1.5),u=r(16774345,.25,.1,2),f=s.kart.shape,g=f==="buggy",v=f==="chunky",p=v?1.03:.99,m=-.94,y=.96,x=v?.46:.42,S=g?.57:v?.54:.5,D=(M,b)=>{const U=b?x:S,G=new T(M*p,U,b?m:y),H=new le;H.name=`${b?"front":"rear"}_${M<0?"left":"right"}_hub`,H.position.copy(G);const z=new le;z.name="spin",H.add(z),e.add(H);const B=b?.3:.38,k=pe(z,new xe(U,U,B,16),l);k.rotation.z=Math.PI/2;for(const st of[-1,1]){const at=pe(z,new xe(U*.6,U*.6,.035,12),h,st*(B/2+.008),0,0);at.rotation.z=Math.PI/2;const ft=pe(z,new Xn(U*.65,.035,4,12),c,st*(B/2+.025),0,0);ft.rotation.y=Math.PI/2;for(let Dt=0;Dt<5;Dt++){const tt=Dt*Math.PI*2/5;oe(z,c,[st*(B/2+.035),0,0],[st*(B/2+.035),Math.cos(tt)*U*.58,Math.sin(tt)*U*.58],.028,5)}const zt=pe(z,new xe(.09,.09,.055,8),c,st*(B/2+.04),0,0);zt.rotation.z=Math.PI/2}if(t.level!=="low")for(const st of[-1,1]){const at=pe(z,new Xn(U-.02,.018,4,16),l,st*B*.29,0,0);at.rotation.y=Math.PI/2}return Tr(z),{pivot:H,spin:z,radius:U,isFront:b,offset:G}},R={fl:D(-1,!0),fr:D(1,!0),rl:D(-1,!1),rr:D(1,!1)};tn(n,h,[[-.66,-1.2],[.66,-1.2],[.72,1.22],[-.72,1.22]],.36,.13);for(const M of[!0,!1]){const b=M?m:y,U=M?x:S;oe(n,h,[-p,U,b],[p,U,b],.065);for(const G of[-1,1])oe(n,c,[G*.52,.7,b+.15],[G*.89,U,b-.1],.042),oe(n,a,[G*.58,.67,b+.1],[G*.77,U+.08,b-.04],.068)}De(n,d,0,.32,-.35,1.2,.045,.085);for(const M of[-1,1])De(n,d,M*.65,.36,.08,.045,.055,1.6);if(f==="sleek"){tn(n,o,[[-.23,-1.65],[.23,-1.65],[.63,-.56],[.55,1.08],[-.55,1.08],[-.63,-.56]],.49,.25);for(const b of[-1,1])tn(n,a,[[b*.53,-1.15],[b*.83,-.55],[b*.85,.67],[b*.5,.92]],.48,.17);te(n,h,[0,.76,.04],[.46,.3,.73],12);const M=r(7922923,.25,.25);M.transparent=!0,M.opacity=.58,te(n,M,[0,.92,-.52],[.43,.3,.23],12),tn(n,c,[[-.06,-1.55],[.06,-1.55],[.09,-.84],[-.09,-.84]],.81,.018,.015);for(const b of[-1,1])oe(n,h,[b*.49,.63,1.1],[b*.55,1.11,1.19],.05);tn(n,o,[[-1,.99],[1,.99],[1,1.4],[-1,1.4]],1.1,.085);for(const b of[-1,1])De(n,a,b*.98,1.18,1.18,.045,.25,.48)}else if(v){tn(n,o,[[-.72,-1.38],[.72,-1.38],[.78,1.2],[-.78,1.2]],.5,.4,.1);for(const M of[-1,1])for(const b of[!0,!1]){const U=b?x:S,G=pe(n,new Xn(U+.1,.115,6,10,Math.PI),o,M*p,U,b?m:y);G.rotation.y=Math.PI/2,G.scale.z=1.7}for(const M of[-1,1])oe(n,h,[M*.58,.42,-1.52],[M*.58,.92,-1.52],.075);oe(n,c,[-.79,.82,-1.53],[.79,.82,-1.53],.09),De(n,h,0,.57,1.4,1.75,.22,.22);for(let M=0;M<5;M++)De(n,h,-.3+M*.15,.72,-1.445,.06,.22,.04);De(n,a,0,.965,-.91,.28,.045,.6)}else if(g){tn(n,o,[[-.45,-1.35],[.45,-1.35],[.64,-.72],[-.64,-.72]],.47,.17);for(const M of[-1,1])oe(n,c,[M*.64,.48,-1.25],[M*.64,.58,1.2],.055),oe(n,c,[M*.64,.52,-.45],[M*.57,1.91,.34],.055),oe(n,c,[M*.57,1.91,.34],[M*.62,.55,1.1],.055),oe(n,a,[M*.65,.52,-.65],[M*.65,.96,.65],.035),tn(n,o,[[M*.55,-.48],[M*.75,-.25],[M*.75,.57],[M*.55,.75]],.55,.13);oe(n,c,[-.57,1.91,.34],[.57,1.91,.34],.055),De(n,h,0,.76,1.03,.72,.4,.52);for(let M=0;M<5;M++)De(n,a,0,.84,.84+M*.095,.82,.06,.035);for(const M of[-1,1])oe(n,c,[M*.17,.92,.98],[M*.32,1.17,1.05],.075)}else{const M=[new ct(.04,-1.42),new ct(.26,-1.25),new ct(.34,-.7),new ct(.34,.7),new ct(.23,1.3),new ct(0,1.62)];for(const b of[-1,1]){const U=pe(n,new La(M,12),o,b*.62,.7,0);U.rotation.x=-Math.PI/2,U.scale.z=.8,oe(n,c,[b*.63,.91,-1.15],[b*.63,.94,1.06],.032)}te(n,a,[0,.64,-.1],[.85,.22,1.22],12),tn(n,o,[[-.43,-.73],[.43,-.73],[.47,.7],[-.47,.7]],.73,.12);for(const b of[-1,1]){const U=tn(n,a,[[b*.57,.67],[b*1.02,1.17],[b*.57,1.38]],.86,.06);U.rotation.z=b*.17}}for(const M of[-1,1])te(n,h,[M*.46,.72,-1.31],[.2,.12,.12],8),te(n,u,[M*.46,.73,-1.41],[.145,.072,.04],8);const C=[];for(const M of[-1,1]){oe(n,h,[M*.43,.49,1.03],[M*.48,.65,1.47],.11);const b=pe(n,new xe(.077,.077,.015,8),d,M*.48,.65,1.48);b.rotation.x=Math.PI/2;const U=new Te;U.name=M<0?"exhaust_L":"exhaust_R",U.position.set(M*.48,.65,1.52),n.add(U),C.push(U)}De(n,l,0,.69,.16,.64,.13,.67);const I=De(n,l,0,.98,.45,.62,.64,.14);I.rotation.x=.12,oe(n,h,[0,.56,-.55],[0,1.03,-.39],.037);const $=pe(n,new Xn(.26,.032,5,12),l,0,1.05,-.43);$.rotation.x=-.6,oe(n,c,[-.22,1.05,-.43],[.22,1.05,-.43],.025);const _=Qg(s.driver,t);return _.root.position.set(0,.76,.02),n.add(_.root),i.push(..._.emissives),Tr(n),{root:e,chassis:n,wheels:R,driver:_,exhaustAnchors:C,boostEmissives:i,radius:v?1.8:1.65,headHeight:1.79,dispose:()=>Jg(e)}}class tv{constructor(t,e=16){E(this,"gates",[]);E(this,"spacing");E(this,"count");E(this,"totalLength");this.count=Math.max(4,e),this.totalLength=t.totalLength,this.spacing=this.totalLength/this.count;const n={pos:new T,tangent:new T,right:new T,up:new T,halfWidth:12};for(let i=0;i<this.count;i++){const r=i*this.spacing;t.frameAt(r,n),this.gates.push({index:i,s:r,center:n.pos.clone().add(new T(0,.1,0)),normal:n.tangent.clone(),halfWidth:n.halfWidth+mn+2,isFinishLine:i===0})}}bandOf(t){return Math.floor(t/this.spacing)}gateOf(t){const e=t%this.count;return e<0?e+this.count:e}bandProgress(t){const e=this.bandOf(t);return(t-e*this.spacing)/this.spacing}gridSlot(t,e,n){t.gridSlot(e,n)}}const ev={gripAccel:34,brakeAccel:30,accel:20,minSpeed:12,maxSpeed:44,apex:.72};class nv{constructor(t,e=ev){E(this,"n");E(this,"spacing");E(this,"totalLength");E(this,"lateral");E(this,"speed");E(this,"curv");E(this,"points");const n=t.samples,i=n.length;this.n=i,this.spacing=t.totalLength/i,this.totalLength=t.totalLength;const r=new Float32Array(i),o=new Float32Array(i),a=new Float32Array(i),l=new Float32Array(i*3),c=new Float32Array(i);for(let v=0;v<i;v++){const p=n[v],m=p.curvature,y=p.halfWidth-2.2,x=de(m*220,-1,1)*y*e.apex;c[v]=x,o[v]=Math.abs(m)}let h=c,d=r;const u=5,f=Math.max(4,Math.round(26/this.spacing));for(let v=0;v<u;v++){for(let m=0;m<i;m++){let y=0;for(let x=-f;x<=f;x++)y+=h[((m+x)%i+i)%i];d[m]=y/(f*2+1)}const p=h;h=d,d=p}for(let v=0;v<i;v++){const p=t.samples[v].halfWidth-2;r[v]=de(h[v],-p,p)}const g=this.spacing;for(let v=0;v<i;v++){const p=Math.max(1e-4,Math.abs(n[v].curvature));a[v]=de(Math.sqrt(e.gripAccel/p),e.minSpeed,e.maxSpeed)}for(let v=0;v<2;v++){for(let p=0;p<i;p++){const m=(p-1+i)%i,y=Math.sqrt(a[m]*a[m]+2*e.accel*g);a[p]>y&&(a[p]=y)}for(let p=i-1;p>=0;p--){const m=(p+1)%i,y=Math.sqrt(a[m]*a[m]+2*e.brakeAccel*g);a[p]>y&&(a[p]=y)}}for(let v=0;v<i;v++){const p=n[v],m=r[v];l[v*3]=p.pos.x+p.right.x*m,l[v*3+1]=p.pos.y+m*Math.tan(p.bank),l[v*3+2]=p.pos.z+p.right.z*m}this.lateral=r,this.curv=o,this.speed=a,this.points=l}indexAt(t){const e=t/this.totalLength*this.n,n=Math.floor(e)%this.n;return n<0?n+this.n:n}speedAt(t){const e=t/this.totalLength*this.n,n=Math.floor(e),i=e-n,r=this.wrap(n),o=this.wrap(n+1);return this.speed[r]+(this.speed[o]-this.speed[r])*i}lateralAt(t){const e=t/this.totalLength*this.n,n=Math.floor(e),i=e-n,r=this.wrap(n),o=this.wrap(n+1);return this.lateral[r]+(this.lateral[o]-this.lateral[r])*i}pointAt(t,e){const n=t/this.totalLength*this.n,i=Math.floor(n),r=n-i,o=this.wrap(i)*3,a=this.wrap(i+1)*3;return e.set(this.points[o]+(this.points[a]-this.points[o])*r,this.points[o+1]+(this.points[a+1]-this.points[o+1])*r,this.points[o+2]+(this.points[a+2]-this.points[o+2])*r),e}wrap(t){const e=t%this.n;return e<0?e+this.n:e}minSpeedAhead(t,e){const n=Math.max(1,Math.round(e/this.spacing));let i=1/0;for(let r=0;r<n;r++){const o=this.speedAt(t+r*this.spacing);o<i&&(i=o)}return i}}const ls=new T;new T;class nc{constructor(t){E(this,"profile");E(this,"smootherThrottle",0);E(this,"smootherBrake",0);E(this,"smootherSteer",0);E(this,"noisePhase",0);E(this,"stuckTimer",0);E(this,"reversing",0);E(this,"driftHold",0);E(this,"controls",{steer:0,throttle:0,brake:0,drift:!1,driftPressed:!1});E(this,"avoid",0);E(this,"rubberBand",1);E(this,"lastSteer",0);this.profile=t,this.noisePhase=t.seed%1e3*.017}reset(){this.smootherThrottle=0,this.smootherBrake=0,this.smootherSteer=0,this.stuckTimer=0,this.reversing=0,this.driftHold=0,this.avoid=0,this.rubberBand=1}update(t,e,n,i,r){const o=this.profile,a=n.line,l=n.spline,c=Math.abs(e.speed),h=e.trackS;if(c<2&&e.spinTimer<=0?this.stuckTimer+=t:this.stuckTimer=Math.max(0,this.stuckTimer-t*2),this.reversing>0)return this.reversing-=t,this.controls.steer=-this.lastSteer*.6,this.controls.throttle=0,this.controls.brake=1,this.controls.drift=!1,this.controls.driftPressed=!1,this.controls;if(this.stuckTimer>1.5)return this.reversing=1.05,this.stuckTimer=0,this.controls.steer=0,this.controls.throttle=0,this.controls.brake=1,this.controls.drift=!1,this.controls.driftPressed=!1,this.controls;const d=1+o.reaction*2,u=de((7+c*.62)*d*(.92+o.aggression*.16),8,36);this.noisePhase+=t*.35;const f=Math.sin(this.noisePhase)*o.lineNoise;let g=0;for(const ft of n.neighbours){const zt=ft.x-e.pos.x,Dt=ft.z-e.pos.z,tt=zt*zt+Dt*Dt;if(tt>400||tt<1e-4)continue;const q=Math.sin(e.yaw),Mt=Math.cos(e.yaw),pt=zt*-q+Dt*-Mt;if(pt<.4)continue;const Rt=zt*Mt+Dt*-q,Pt=1-$t((Math.sqrt(tt)-3)/17);g-=Math.sign(Rt||1)*Pt*3.6,ft.isPlayer&&pt<9&&(g-=Math.sign(Rt||1)*Pt*2.2)}this.avoid=ne(this.avoid,de(g,-4.5,4.5),5,t);const v=a.lateralAt(h+u*.55)+f+this.avoid;a.pointAt(h+u,ls);const p=l.sampleAtS(h+u),m=p.halfWidth-2.4,y=de(v,-m,m);ls.x+=p.right.x*(y-a.lateralAt(h+u)),ls.z+=p.right.z*(y-a.lateralAt(h+u));const x=ls.x-e.pos.x,S=ls.z-e.pos.z,D=Math.atan2(-x,-S),R=xg(e.yaw-D),C=1.75+o.aggression*.5,I=de(R*C,-1,1),$=a.speedAt(h+u*.5);let _=$*o.skill*this.rubberBand;_*=.97-(1-o.aggression)*.05;const M=de(c*c/26,12,60),b=a.minSpeedAhead(h+2,M)*o.skill*this.rubberBand;_=Math.min(_,Math.max(b,$));const U=_-c;let G,H;U>.6?(G=$t(U/7),H=0):U>-1.6?(G=.35,H=0):(G=0,H=$t(-U/9)),a.curv[l.sampleAtS(h+6).i]<.004&&c<_*1.02&&(G=1);const z=l.sampleAtS(h),B=Math.abs(z.curvature);let k=!1,st=!1;o.canDrift&&e.grounded&&(B>.0135&&c>17&&Math.abs(I)>.34&&this.driftHold<=0&&(this.driftHold=.9+o.aggression,st=!0),this.driftHold>0&&(this.driftHold-=t,k=!0,G=Math.max(G,.75))),this.lastSteer=I;const at=8+o.aggression*7;return this.smootherThrottle=ne(this.smootherThrottle,G,at,t),this.smootherBrake=ne(this.smootherBrake,H,at*1.5,t),this.smootherSteer=ne(this.smootherSteer,I,12,t),this.controls.steer=de(this.smootherSteer,-1,1),this.controls.throttle=$t(this.smootherThrottle),this.controls.brake=$t(this.smootherBrake),this.controls.drift=k,this.controls.driftPressed=st,this.controls}}const iv={maxSpeed:41,accel:26,brake:46,reverseAccel:12,reverseMaxSpeed:11,steerRate:1.15,steerRefSpeed:16,grip:9,driftGrip:2.2,driftSteer:1.55,driftSlip:.34,offroadMaxSpeed:.66,offroadDrag:15,weight:1,radius:1.5,boostGrip:6.5},wo=[0,1.05,2.15,3.3],sv=[0,.7,1.15,1.7],_h=[0,12,18,25];function rv(){return{pos:new T,vel:new T,yaw:0,yawRate:0,vy:0,grounded:!0,surfaceY:0,airHeight:0,steer:0,visualSteer:0,drifting:!1,driftDir:0,driftCharge:0,driftTier:0,miniTurbo:0,boostTime:0,boostPower:0,padBoostTime:0,spinTimer:0,spinRate:0,landSquash:0,justLanded:!1,landImpact:0,onRoad:!0,lateral01:0,speed:0,slip:0,trackS:0,trackIndex:0,wallHit:!1,wallHitStrength:0,travelled:0}}const ov=3.5;class av{constructor(t){E(this,"params");E(this,"state");E(this,"_surf",{index:0,lateral:0,halfWidthAt:12,onRoad:!0,s:0,rightX:1,rightZ:0,roadY:0,upX:0,upY:1,upZ:0});this.params=t,this.state=rv()}reset(t,e,n,i){const r=this.state;r.pos.set(t,e,n),r.vel.set(0,0,0),r.yaw=i,r.yawRate=0,r.vy=0,r.grounded=!0,r.airHeight=0,r.steer=0,r.visualSteer=0,r.drifting=!1,r.driftDir=0,r.driftCharge=0,r.driftTier=0,r.miniTurbo=0,r.boostTime=0,r.boostPower=0,r.padBoostTime=0,r.spinTimer=0,r.spinRate=0,r.landSquash=0,r.justLanded=!1,r.speed=0,r.slip=0,r.wallHit=!1,r.wallHitStrength=0}applyBoost(t,e){const n=this.state;n.boostTime=Math.max(n.boostTime,t),n.boostPower=Math.max(n.boostPower,e)}applyPadBoost(t,e){const n=this.state;n.padBoostTime=Math.max(n.padBoostTime,t),n.boostPower=Math.max(n.boostPower,e)}spinOut(t,e){const n=this.state;n.spinTimer=Math.max(n.spinTimer,t),n.spinRate=(e>=0?1:-1)*(7+Math.random()*3.5),n.drifting=!1,n.driftDir=0,n.driftCharge=0,n.driftTier=0,n.boostTime=0,n.padBoostTime=0,n.vel.multiplyScalar(.4)}knockback(t,e,n,i){const r=this.state;r.vel.x+=t*n,r.vel.z+=e*n,r.vy=Math.max(r.vy,i),r.grounded=!1}placeOnTrack(t,e,n,i,r){const o=this.state;o.pos.set(t,e,n),o.yaw=i,o.vy=0,o.grounded=!0,o.airHeight=0,o.spinTimer=0,o.drifting=!1,o.driftDir=0,o.driftCharge=0,o.driftTier=0;const a=Math.sin(i),l=Math.cos(i);o.vel.set(-a*r,0,-l*r),o.speed=r,o.slip=0}step(t,e,n,i=1){const r=this.params,o=this.state,a=o.pos.x,l=o.pos.z;o.justLanded=!1;const c=n.querySurface(a,l,o.trackIndex,this._surf);o.trackIndex=c.index,o.trackS=c.s,o.lateral01=Math.abs(c.lateral)/Math.max(.001,c.halfWidthAt),o.onRoad=c.onRoad;const h=n.surfaceOffsetAt?n.surfaceOffsetAt(a,l):0,d=n.surfaceHeight(a,l,c.index)+h;o.surfaceY=d;const u=Math.sin(o.yaw),f=Math.cos(o.yaw),g=-u,v=-f,p=f,m=-u;let y=o.vel.x*g+o.vel.z*v,x=o.vel.x*p+o.vel.z*m;if(o.spinTimer>0){o.spinTimer-=t,o.yaw+=o.spinRate*t,o.spinRate=ne(o.spinRate,0,1.6,t),y=ne(y,0,1.9,t),x=ne(x,0,3.2,t),o.speed=y,o.slip=Math.abs(x),o.steer=ne(o.steer,0,12,t),o.visualSteer=ne(o.visualSteer,0,10,t),y*=this.settleVertical(t),this.integrate(t,y,x,g,v,p,m),this.resolveWalls(c);return}const S=e.noControl===!0,D=S?0:de(e.steer,-1,1),R=S?0:$t(e.throttle),C=S?0:$t(e.brake),I=Math.abs(y),$=$t(I/r.steerRefSpeed),_=1-.42*$t(I/(r.maxSpeed*1.15)),M=Math.max(.12,$*_)*(y<-.5?-1:1);o.steer=ne(o.steer,D,9.5,t),o.visualSteer=ne(o.visualSteer,o.steer,14,t);const b=o.grounded&&I>r.maxSpeed*.2;if(e.driftPressed&&b&&!o.drifting)o.vy=4.6,o.grounded=!1,o.drifting=!0,o.driftDir=D>.15?1:D<-.15?-1:0,o.driftCharge=0,o.driftTier=0;else if(o.drifting){const B=o.spinTimer<=0&&I>r.maxSpeed*.13&&o.airHeight<4.5;if(!e.drift||!B)o.drifting=!1,o.driftTier>0&&(o.miniTurbo=1,this.applyBoost(sv[o.driftTier],_h[o.driftTier])),o.driftCharge=0,o.driftTier=0,o.driftDir=0;else{o.driftDir===0&&Math.abs(o.steer)>.3&&(o.driftDir=o.steer>0?1:-1),o.driftCharge=Math.min(o.driftCharge+t,4.6);let k=0;o.driftCharge>=wo[3]?k=3:o.driftCharge>=wo[2]?k=2:o.driftCharge>=wo[1]&&(k=1),o.driftTier=k}}let U;if(o.grounded){if(o.drifting){const B=Math.min(1,M+.32*Math.sign(M||1));U=-o.steer*r.steerRate*r.driftSteer*B,U-=o.driftDir*r.driftSlip*(.6+.4*$t(I/r.maxSpeed))}else U=-o.steer*r.steerRate*M;!o.drifting&&Math.abs(x)>2&&Math.abs(D)<.25&&(U-=Math.sign(x)*Math.min(.5,Math.abs(x)*.025)*Math.sign(M||1))}else U=-o.steer*r.steerRate*.34;o.yawRate=U,o.yaw+=U*t;let G=(o.drifting?r.driftGrip:r.grip)*i;(o.boostTime>0||o.padBoostTime>0)&&(G=Math.max(G,r.boostGrip)),o.grounded?o.onRoad||(G*=.72):G*=.08,x*=Math.exp(-G*t);const H=o.boostTime>0||o.padBoostTime>0,z=(r.maxSpeed+(H?o.boostPower:0))*(o.onRoad?1:r.offroadMaxSpeed);if(o.grounded){if(R>0){const B=$t(Math.max(0,y)/Math.max(1,z)),k=1-B*B*.9;y+=R*r.accel*k*(H?1.9:1)*t}C>0&&(y>.4?y-=C*r.brake*t:y-=C*r.reverseAccel*t),o.onRoad||(y-=Math.sign(y)*Math.min(Math.abs(y)/Math.max(t,1e-4),r.offroadDrag*t)),y-=y*.08*t,y-=Math.sign(y)*y*y*9e-4*t,y=de(y,-r.reverseMaxSpeed,z)}else y-=y*.05*t;y*=this.settleVertical(t),this.integrate(t,y,x,g,v,p,m),this.resolveWalls(c)}settleVertical(t){const e=this.state;if(e.grounded){const n=e.surfaceY-e.pos.y;return n<-.4?(e.grounded=!1,e.vy=.5,e.airHeight=-n):(e.pos.y=e.surfaceY,e.airHeight=0),1}else{if(e.vy-=30*t,e.pos.y+=e.vy*t,e.pos.y<=e.surfaceY&&e.vy<=0){const n=$t(Math.abs(e.vy)/18);return e.pos.y=e.surfaceY,e.vy=0,e.grounded=!0,e.airHeight=0,e.landSquash=n,e.landImpact=n,e.justLanded=!0,n>.35?1-.14*n:1}else e.airHeight=e.pos.y-e.surfaceY;return 1}}integrate(t,e,n,i,r,o,a){const l=this.state,c=l.pos.x,h=l.pos.z;l.speed=e,l.slip=Math.abs(n),l.vel.set(i*e+o*n,l.vy,r*e+a*n),l.pos.x+=l.vel.x*t,l.pos.z+=l.vel.z*t;const d=l.pos.x-c,u=l.pos.z-h;l.travelled=Math.sqrt(d*d+u*u),l.boostTime>0&&(l.boostTime=Math.max(0,l.boostTime-t)),l.padBoostTime>0&&(l.padBoostTime=Math.max(0,l.padBoostTime-t)),l.boostTime===0&&l.padBoostTime===0&&(l.boostPower=0),l.landSquash=Math.max(0,l.landSquash-t*3.2),l.wallHit=!1}resolveWalls(t){const e=this.state,n=t.halfWidthAt+ov-this.params.radius,i=Math.abs(t.lateral)-n;if(i<=0)return;const r=t.lateral>=0?1:-1;e.pos.x-=t.rightX*r*i,e.pos.z-=t.rightZ*r*i;const o=(e.vel.x*t.rightX+e.vel.z*t.rightZ)*r;if(o>0){e.vel.x-=t.rightX*r*o*(1+.2),e.vel.z-=t.rightZ*r*o*(1+.2);const l=Math.min(.45,o*.032);e.vel.x*=1-l,e.vel.z*=1-l,e.wallHit=!0,e.wallHitStrength=$t(o/20)}}}const Di=new T,cs=new T,or=new T,ic=new T,sc=new ce,rc=new Zn,oc=new Pe;class lv{constructor(t){E(this,"model");E(this,"nx",0);E(this,"ny",1);E(this,"nz",0);E(this,"wheelSpin",0);E(this,"lean",0);E(this,"pitch",0);E(this,"squash",0);E(this,"boostGlow",1);E(this,"hitShake",0);E(this,"lastSpeed",0);E(this,"emissiveMats",[]);E(this,"emissiveBase",[]);E(this,"exhaustParents",[]);E(this,"extras",{rearWheels:[new T,new T],frontWheels:[new T,new T],exhausts:[],center:new T,head:new T});this.model=t;const e=n=>{this.emissiveMats.includes(n)||(this.emissiveMats.push(n),this.emissiveBase.push(n.emissiveIntensity))};for(const n of t.boostEmissives)e(n);for(const n of t.driver.emissives)e(n);for(const n of t.exhaustAnchors)this.exhaustParents.push(n),this.extras.exhausts.push(new T)}snap(t){this.nx=0,this.ny=1,this.nz=0,this.lean=0,this.pitch=0,this.squash=0,this.boostGlow=1,this.lastSpeed=t.speed,this.updateTransform(t,1,0,1,0)}update(t,e,n,i,r){const o=e.grounded?12:4;this.nx=ne(this.nx,n,o,t),this.ny=ne(this.ny,i,o,t),this.nz=ne(this.nz,r,o,t),cs.set(this.nx,this.ny,this.nz).lengthSq()<1e-6&&(this.nx=0,this.ny=1,this.nz=0),this.updateTransform(e,t,this.nx,this.ny,this.nz)}updateTransform(t,e,n,i,r){const o=this.model,a=o.root;this.squash=ne(this.squash,t.landSquash,9,e),a.position.set(t.pos.x,t.pos.y-.22*this.squash-.02,t.pos.z);const l=Math.sin(t.yaw),c=Math.cos(t.yaw);or.set(-l,0,-c),cs.set(n,i,r).normalize(),Di.crossVectors(or,cs),Di.lengthSq()<1e-6&&Di.set(1,0,0),Di.normalize(),or.crossVectors(cs,Di).normalize(),ic.copy(or).negate(),sc.makeBasis(Di,cs,ic),rc.setFromRotationMatrix(sc),a.quaternion.copy(rc);const h=$t(Math.abs(t.speed)/40),d=de(t.steer*(.09+.13*h)+(t.drifting?t.driftDir*.055:0),-.24,.24);this.lean=ne(this.lean,d,8,e);const u=t.boostTime>0||t.padBoostTime>0,f=(t.speed-this.lastSpeed)/Math.max(e,.001);this.lastSpeed=t.speed;const g=de(-f*.006*(u?1.6:1),-.11,.11);this.pitch=ne(this.pitch,g,6,e),this.hitShake=ne(this.hitShake,0,6,e);const v=Math.max(this.hitShake,t.spinTimer>0?Math.min(.2,t.spinTimer*.06):0),p=v>.001?v*Math.sin(performance.now()*.045):0;oc.set(this.pitch+p,0,this.lean+p*.5),o.chassis.rotation.copy(oc),o.chassis.position.y=-.07*this.squash;const m=o.wheels,y=m.rl.radius||.5;this.wheelSpin+=t.speed/Math.max(.15,y)*e,(this.wheelSpin>1e6||this.wheelSpin<-1e6)&&(this.wheelSpin=0);const x=t.visualSteer*.5;m.fl.pivot.rotation.y=-x,m.fr.pivot.rotation.y=-x,m.fl.spin.rotation.x=this.wheelSpin,m.fr.spin.rotation.x=this.wheelSpin;const S=this.wheelSpin+(t.drifting?Math.min(1.5,t.slip*.08):0);m.rl.spin.rotation.x=S,m.rr.spin.rotation.x=S;const D=this.squash*.18;m.fl.pivot.position.y=m.fl.offset.y+D*.6-this.lean*.4,m.fr.pivot.position.y=m.fr.offset.y+D*.6+this.lean*.4,m.rl.pivot.position.y=m.rl.offset.y+D*.3-this.lean*.3,m.rr.pivot.position.y=m.rr.offset.y+D*.3+this.lean*.3;const R=u?2.4:t.drifting&&t.driftCharge>.5?.75:1;this.boostGlow=ne(this.boostGlow,R,10,e);const C=u?.85+Math.random()*.3:1,I=this.boostGlow*C;for(let $=0;$<this.emissiveMats.length;$++)this.emissiveMats[$].emissiveIntensity=this.emissiveBase[$]*I;this.updateExtras()}updateExtras(){const t=this.model,e=this.extras;t.root.updateWorldMatrix(!0,!1),ar(t.wheels.rl,e.rearWheels[0]),ar(t.wheels.rr,e.rearWheels[1]),ar(t.wheels.fl,e.frontWheels[0]),ar(t.wheels.fr,e.frontWheels[1]);for(let n=0;n<this.exhaustParents.length&&n<e.exhausts.length;n++)this.exhaustParents[n].updateWorldMatrix(!0,!1),e.exhausts[n].setFromMatrixPosition(this.exhaustParents[n].matrixWorld);e.center.setFromMatrixPosition(t.root.matrixWorld),e.center.y+=t.headHeight*.45,e.head.setFromMatrixPosition(t.root.matrixWorld),e.head.y+=t.headHeight}punch(t){this.hitShake=Math.max(this.hitShake,de(t,0,1)*.24)}get rootObject(){return this.model.root}}function ar(s,t){t.setFromMatrixPosition(s.pivot.matrixWorld),t.y-=s.radius*.92}function cv(s,t=iv){const e=s.stats;return{...t,maxSpeed:t.maxSpeed*e.speed,accel:t.accel*e.accel,steerRate:t.steerRate*(.72+.28*e.handling),grip:t.grip*(.78+.22*e.handling),driftGrip:t.driftGrip*(.82+.18*e.handling),weight:e.weight}}class hv{constructor(t,e,n=cv(t)){E(this,"spec");E(this,"physics");E(this,"visual");E(this,"model");E(this,"object");E(this,"groundNormal",{x:0,y:1,z:0});E(this,"baseSpeed");E(this,"coinBoost",1);this.spec=t,this.physics=new av(n),this.baseSpeed=n.maxSpeed,this.model=ma(t,e),this.visual=new lv(this.model),this.object=new le,this.object.name=`kart_${t.id}`,this.object.add(this.model.root)}spawn(t,e,n,i){this.physics.reset(t,e,n,i),this.coinBoost=1,this.physics.params.maxSpeed=this.baseSpeed,this.visual.snap(this.physics.state)}step(t,e,n,i=1){const r=this.physics.params,o=this.baseSpeed*this.coinBoost;r.maxSpeed!==o&&(r.maxSpeed=o),this.physics.step(t,e,n,i)}setGroundNormal(t,e,n){this.groundNormal.x=t,this.groundNormal.y=e,this.groundNormal.z=n}syncVisual(t){this.visual.update(t,this.physics.state,this.groundNormal.x,this.groundNormal.y,this.groundNormal.z)}dispose(){this.model.dispose()}}class ac{constructor(t,e,n,i){E(this,"id");E(this,"kind");E(this,"name");E(this,"isPlayer");E(this,"kart");E(this,"progress",{lap:0,checkpoint:0,distance:0,finished:!1,finishTime:0,finishRank:0,lapTimes:[]});E(this,"rank",1);E(this,"item",null);E(this,"itemRoll",0);E(this,"invuln",0);E(this,"shield",0);E(this,"slickTimer",0);E(this,"coins",0);E(this,"frozen",!0);E(this,"controls",{steer:0,throttle:0,brake:0,drift:!1,driftPressed:!1});E(this,"currentLapTime",0);E(this,"wallSfxCooldown",0);E(this,"recoverTimer",0);E(this,"prevRear",[new T,new T]);E(this,"hasPrev",!1);E(this,"backDir",new T);E(this,"gridPoint",{pos:new T,tangent:new T,right:new T,up:new T,halfWidth:12});E(this,"lastRawS",NaN);E(this,"unwrappedS",0);E(this,"prevBandU",0);this.id=t,this.kind=n,this.isPlayer=n==="player",this.name=e.name,this.kart=new hv(e,i)}get state(){return this.kart.physics.state}get pos(){return this.kart.physics.state.pos}resetOnGrid(t,e){const n=this.gridPoint;t.gridSlot(e,n);const i=Math.atan2(-n.tangent.x,-n.tangent.z);this.kart.spawn(n.pos.x,n.pos.y,n.pos.z,i),this.progress={lap:0,checkpoint:0,distance:0,finished:!1,finishTime:0,finishRank:0,lapTimes:[]},this.item=null,this.itemRoll=0,this.invuln=0,this.shield=0,this.slickTimer=0,this.coins=0,this.frozen=!0,this.currentLapTime=0,this.recoverTimer=0,this.rank=1,this.hasPrev=!1,this.lastRawS=NaN,this.unwrappedS=0,this.controls.steer=0,this.controls.throttle=0,this.controls.brake=0,this.controls.drift=!1,this.controls.driftPressed=!1}step(t,e){if(this.invuln>0&&(this.invuln-=t),this.shield>0&&(this.shield-=t),this.slickTimer>0&&(this.slickTimer-=t),this.wallSfxCooldown>0&&(this.wallSfxCooldown-=t),this.itemRoll>0&&(this.itemRoll-=t),this.frozen){const i=this.kart.physics.state;i.vel.set(0,0,0),i.speed=0,i.slip=0,i.vy=0,i.steer=0,i.visualSteer=0,this.controls.steer=0,this.controls.throttle=0,this.controls.brake=0,this.controls.drift=!1,this.controls.driftPressed=!1,this.kart.physics.step(t,this.controls,e,1),i.vel.set(0,0,0),i.speed=0,this.kart.setGroundNormal(e.lastUp.x,e.lastUp.y,e.lastUp.z);return}const n=this.slickTimer>0?.32:1;this.kart.step(t,this.controls,e,n),this.kart.setGroundNormal(e.lastUp.x,e.lastUp.y,e.lastUp.z),this.currentLapTime+=t}grantLaunchBoost(){this.kart.physics.applyBoost(1.1,_h[2]),this.kart.visual.punch(.25)}updateBackDir(){const t=this.state;this.backDir.set(Math.sin(t.yaw),0,Math.cos(t.yaw))}syncVisual(t,e,n){const i=this.state;this.kart.syncVisual(t);const r=this.kart.visual.extras;if(!n){this.hasPrev=!1;return}const o=i.grounded&&(i.drifting||i.slip>3.4)&&Math.abs(i.speed)>6;if(this.hasPrev){const c=$t(i.slip/12+(i.drifting?.45:0));if(o&&c>.12){for(let h=0;h<2;h++){const d=this.prevRear[h],u=r.rearWheels[h],f=u.x-d.x,g=u.z-d.z;f*f+g*g>9e-4&&e.skidMark(d.x,d.y+.03,d.z,u.x,u.y+.03,u.z,.34,c*.9)}if(Math.random()<.55){const h=r.rearWheels[Math.random()<.5?0:1];e.driftSmoke(h.x,h.y+.25,h.z,13424864)}}}if(this.prevRear[0].copy(r.rearWheels[0]),this.prevRear[1].copy(r.rearWheels[1]),this.hasPrev=!0,!i.onRoad&&i.grounded&&Math.abs(i.speed)>8)for(let c=0;c<2;c++){const h=r.rearWheels[c];e.groundSpray(h.x,h.y+.15,h.z,this.backDir.x,this.backDir.z,13218180)}const a=i.boostTime>0||i.padBoostTime>0,l=a?1:$t(Math.abs(i.speed)/34)*.7;if(i.grounded&&(l>.15||a)){const c=this.kart.spec.kart.glow;for(let h=0;h<r.exhausts.length;h++){const d=r.exhausts[h];e.exhaust(d.x,d.y,d.z,this.backDir.x,this.backDir.z,l),a&&e.boostTrail(d.x,d.y+.1,d.z,-this.backDir.x*.4,-this.backDir.z*.4,c)}}i.justLanded&&i.landImpact>.3&&e.puff(r.center.x,i.pos.y+.15,r.center.z,0,1.4,0,12371660,1.4,.55,2.4,1.5,2.2)}hit(t,e){return this.invuln>0||this.shield>0||this.progress.finished?!1:(this.kart.physics.spinOut(t,e),this.invuln=1.4,this.kart.visual.punch(.85),!0)}addCoin(t){return this.coins>=t?!1:(this.coins++,this.kart.coinBoost=1+this.coins*.0045,!0)}get boostFromCoins(){return this.kart.coinBoost}dropCoins(){this.coins=Math.max(0,this.coins-3),this.kart.coinBoost=1+this.coins*.0045}updateProgress(t){const e=this.state.trackS,n=t.totalLength;if(Number.isNaN(this.lastRawS))this.lastRawS=e,this.unwrappedS=e>n*.5?e-n:e,this.progress.checkpoint=t.count-1;else{let a=e-this.lastRawS;a>n*.5?a-=n:a<-n*.5&&(a+=n),this.unwrappedS+=a,this.lastRawS=e}const i=this.unwrappedS;if(this.progress.finished){this.progress.distance=i;return}const r=t.bandOf(this.prevBandU),o=t.bandOf(i);if(this.prevBandU=i,o>r&&o-r<6)for(let a=r+1;a<=o;a++)this.onGate(t.gateOf(a),t);this.progress.distance=i}onGate(t,e){const n=this.progress;if(t===0){if(n.checkpoint===e.count-1){const i=n.lap===0;n.lap++,i?this.currentLapTime=0:(n.lapTimes.push(this.currentLapTime),this.currentLapTime=0),n.checkpoint=0}return}t===n.checkpoint+1&&(n.checkpoint=t)}displayLap(t){return Math.min(t,Math.max(1,this.progress.lap))}hasCompleted(t){return this.progress.lap>t}dispose(){this.kart.dispose()}}class uv{constructor(t){E(this,"lastUp",new T(0,1,0));E(this,"lastHalfWidth",12);E(this,"scratch",{index:0,lateral:0,u:0,s:0,roadY:0,groundY:0,onRoad:!0});this.spline=t}querySurface(t,e,n,i){const r=this.spline.query(t,e,n,this.scratch),o=this.spline.sampleAtS(r.s);return i.index=r.index,i.lateral=r.lateral,i.halfWidthAt=o.halfWidth,i.onRoad=Math.abs(r.lateral)<=o.halfWidth,i.s=r.s,i.rightX=o.right.x,i.rightZ=o.right.z,i.roadY=r.roadY,i.upX=o.up.x,i.upY=o.up.y,i.upZ=o.up.z,this.lastUp.set(o.up.x,o.up.y,o.up.z),this.lastHalfWidth=o.halfWidth,i}surfaceHeight(t,e,n){return this.spline.surfaceHeight(t,e,n)}}const xh={bolt:{id:"bolt",name:"Seeker Bolt",icon:"➤",color:6547199,weight:10,blurb:"Homes in on the racer ahead and spins them out.",held:!0},mine:{id:"mine",name:"Reef Mine",icon:"✦",color:16739210,weight:9,blurb:"Drop it behind you and let the pack find it.",held:!0},turbo:{id:"turbo",name:"Tide Turbo",icon:"≫",color:16765286,weight:8,blurb:"A hard shove of speed. Fires the moment you take it.",held:!1},blast:{id:"blast",name:"Sonic Bloom",icon:"✹",color:16751317,weight:5,blurb:"A shockwave that knocks everyone nearby sideways.",held:!0},shield:{id:"shield",name:"Pearl Ward",icon:"⬡",color:12189519,weight:4,blurb:"Blocks the next hit and glows while it holds.",held:!0}},lc=["bolt","mine","turbo","blast","shield"];function dv(s,t,e){const n=$t(t<=1?0:(s-1)/(t-1)),i={bolt:12-n*3,mine:10+n*2,turbo:4+n*8,blast:1+n*9,shield:7-n*4};let r=0;for(const a of lc)r+=i[a];let o=e()*r;for(const a of lc)if(o-=i[a],o<=0)return a;return"bolt"}const fv=4;class pv{constructor(t,e,n){E(this,"group",new le);E(this,"slots",[]);E(this,"geom");E(this,"runeGeom");E(this,"shellMat");E(this,"runeMat");this.vfx=n;const i=e.level==="low"?0:1;this.geom=new He(1.5,1.5,1.5),this.runeGeom=new _n(.52,i),this.shellMat=new Ve({color:2830190,emissive:5995775,emissiveIntensity:.55,roughness:.25,metalness:.5,transparent:!0,opacity:.86}),this.runeMat=new xn({color:14086399,blending:sn,transparent:!0});const r={pos:new T,tangent:new T,right:new T,up:new T,halfWidth:12};for(const o of kg){const a=t.sAt(o);t.frameAt(a,r);const l=Math.max(1,o.count);for(let c=0;c<l;c++){const h=l===1?o.lateral:(c/(l-1)-.5)*o.spread+o.lateral,d=new le,u=new Zt(this.geom,this.shellMat),f=new Zt(this.runeGeom,this.runeMat);u.castShadow=e.shadows&&e.level==="high",d.add(u,f),d.position.set(r.pos.x+r.right.x*h,r.pos.y+1.15,r.pos.z+r.right.z*h),this.group.add(d),this.slots.push({object:d,pos:d.position.clone(),alive:!0,timer:0,spin:(c*1.3+o.seg)%6.28})}}}update(t,e,n,i){for(const r of this.slots){if(r.spin+=t*1.4,!r.alive)if(r.timer-=t,r.timer<=0)r.alive=!0,r.object.visible=!0,r.object.scale.setScalar(.01);else continue;const o=1,a=r.object.scale.x;a<o&&r.object.scale.setScalar(Math.min(o,a+t*4.5)),r.object.rotation.y=r.spin,r.object.position.y=r.pos.y+Math.sin(e*1.8+r.spin)*.18;for(const l of n){if(l.progress.finished)continue;const c=l.pos,h=c.x-r.pos.x,d=c.z-r.pos.z,u=c.y+.6-r.object.position.y;if(h*h+d*d<3.6&&Math.abs(u)<2.6){r.alive=!1,r.timer=fv,r.object.visible=!1,this.vfx.burst(r.pos.x,r.pos.y,r.pos.z,10473727,14,7),i(l);break}}}}reset(){for(const t of this.slots)t.alive=!0,t.timer=0,t.object.visible=!0,t.object.scale.setScalar(1)}dispose(){this.geom.dispose(),this.runeGeom.dispose(),this.shellMat.dispose(),this.runeMat.dispose()}}const hs=62,cc=5.5,hc=26,uc=.75,lr=27;class mv{constructor(t,e,n,i){E(this,"group",new le);E(this,"boxes");E(this,"bolts",[]);E(this,"mines",[]);E(this,"blasts",[]);E(this,"shieldViz",new Map);E(this,"boltGeo");E(this,"boltMat");E(this,"mineGeo");E(this,"mineMat");E(this,"spikeGeo");E(this,"spikeMat");E(this,"ringGeo");E(this,"ringMat");E(this,"shieldGeo");E(this,"shieldMat");E(this,"onHit",null);this.vfx=n,this.boxes=new pv(e,i,n),this.group.add(this.boxes.group);const r=i.level==="low";this.boltGeo=new $n(.42,r?8:14,r?6:10),this.boltMat=new xn({color:10351615}),this.mineGeo=new _n(.72,r?0:1),this.mineMat=new Ve({color:13912686,emissive:16726891,emissiveIntensity:1.5,roughness:.4,metalness:.6}),this.spikeGeo=new Wn(.2,.62,6),this.spikeMat=new Ve({color:2756640,roughness:.6}),this.ringGeo=new Da(.6,.85,r?16:32),this.ringMat=new xn({color:16751317,transparent:!0,opacity:.9,blending:sn,side:Oe}),this.shieldGeo=new $n(2.1,r?10:18,r?8:12),this.shieldMat=new xn({color:12189519,transparent:!0,opacity:.19,blending:sn,side:2});for(let o=0;o<10;o++){const a=new le,l=new Zt(this.boltGeo,this.boltMat),c=new Zt(this.mineGeo,this.boltMat);c.scale.setScalar(.7),a.add(l,c),a.visible=!1,this.group.add(a),this.bolts.push({object:a,active:!1,life:0,vel:new T,target:null,owner:null,trailTimer:0})}for(let o=0;o<12;o++){const a=new le,l=new Zt(this.mineGeo,this.mineMat);a.add(l);for(let c=0;c<6;c++){const h=new Zt(this.spikeGeo,this.spikeMat),d=c/6*Math.PI*2;h.position.set(Math.cos(d)*.72,0,Math.sin(d)*.72),h.rotation.z=-Math.PI/2,h.rotation.y=-d,a.add(h)}a.visible=!1,this.group.add(a),this.mines.push({object:a,active:!1,life:0,armTimer:0,owner:null,spin:0})}for(let o=0;o<6;o++){const a=new Zt(this.ringGeo,this.ringMat.clone());a.rotation.x=-Math.PI/2,a.visible=!1,this.group.add(a),this.blasts.push({object:a,active:!1,life:0,radius:0,origin:new T,owner:null})}t.add(this.group)}updateBoxes(t,e,n,i){this.boxes.update(t,e,n,i)}fireBolt(t,e){const n=this.bolts.find(a=>!a.active);if(!n)return;const i=t.state,r=-Math.sin(i.yaw),o=-Math.cos(i.yaw);n.active=!0,n.life=cc,n.owner=t,n.target=this.pickTarget(t,e),n.object.visible=!0,n.object.position.set(i.pos.x+r*2.2,i.pos.y+.85,i.pos.z+o*2.2),n.vel.set(r*hs,0,o*hs),n.trailTimer=0}dropMine(t){const e=this.mines.find(o=>!o.active);if(!e)return;const n=t.state,i=-Math.sin(n.yaw),r=-Math.cos(n.yaw);e.active=!0,e.life=hc,e.armTimer=1.1,e.owner=t,e.spin=0,e.object.visible=!0,e.object.position.set(n.pos.x-i*3,n.pos.y+.85,n.pos.z-r*3)}detonateBlast(t,e){const n=this.blasts.find(r=>!r.active),i=t.state;n&&(n.active=!0,n.life=uc,n.radius=0,n.owner=t,n.origin.set(i.pos.x,i.pos.y+.7,i.pos.z),n.object.visible=!0,n.object.position.copy(n.origin),n.object.scale.setScalar(.6));for(const r of e){if(r===t)continue;const o=r.pos.x-i.pos.x,a=r.pos.z-i.pos.z,l=o*o+a*a;if(l>lr*lr||l<1e-4)continue;const c=-Math.sin(i.yaw),h=-Math.cos(i.yaw);if(o*c+a*h<-6)continue;const d=Math.sqrt(l),u=(1-d/lr)*24;r.hit(.95,Math.sign(o*h-a*c)||1)&&(r.kart.physics.knockback(o/d,a/d,u,5.5+u*.15),r.dropCoins(),this.onHit?.(r,"blast"))}this.vfx.burst(i.pos.x,i.pos.y+.8,i.pos.z,16751317,30,16)}raiseShield(t){t.shield=7.5}update(t,e,n){this.updateBolts(t,e,n),this.updateMines(t,e),this.updateBlasts(t),this.updateShields(t,e)}pickTarget(t,e){let n=null,i=1/0;for(const r of e){if(r===t||r.progress.finished)continue;const o=r.pos.x-t.pos.x,a=r.pos.z-t.pos.z,l=Math.hypot(o,a);if(l>90)continue;const c=-Math.sin(t.state.yaw),h=-Math.cos(t.state.yaw);if(o*c+a*h<-4)continue;const u=l*.5-r.progress.distance*.02;u<i&&(i=u,n=r)}return n}updateBolts(t,e,n){for(const i of this.bolts){if(!i.active)continue;if(i.life-=t,i.life<=0){this.killBolt(i);continue}const r=i.target;if(r&&!r.progress.finished){const a=r.pos.x-i.object.position.x,l=r.pos.y+.8-i.object.position.y,c=r.pos.z-i.object.position.z,h=Math.hypot(a,l,c)||1,d=a/h*hs,u=l/h*hs,f=c/h*hs,g=5.2;i.vel.x=ne(i.vel.x,d,g,t),i.vel.y=ne(i.vel.y,u,g,t),i.vel.z=ne(i.vel.z,f,g,t)}i.object.position.x+=i.vel.x*t,i.object.position.y+=i.vel.y*t,i.object.position.z+=i.vel.z*t;const o=n.surfaceHeight(i.object.position.x,i.object.position.z,-1);i.object.position.y<o+.4&&(i.object.position.y=o+.4),i.object.rotation.y+=t*9,i.object.rotation.x+=t*6,i.trailTimer-=t,i.trailTimer<=0&&(i.trailTimer=.016,this.vfx.spark(i.object.position.x,i.object.position.y,i.object.position.z,-i.vel.x*.12,.4,-i.vel.z*.12,8382207,.85,.4,1,2));for(const a of e){if(a===i.owner&&i.life>cc-.25)continue;const l=a.pos.x-i.object.position.x,c=a.pos.y+.9-i.object.position.y,h=a.pos.z-i.object.position.z;if(l*l+c*c+h*h<5.6){a.hit(1.5,Math.random()<.5?1:-1)?(a.dropCoins(),a.kart.visual.punch(1),this.vfx.burst(i.object.position.x,i.object.position.y,i.object.position.z,8382207,22,13),this.onHit?.(a,"bolt")):this.vfx.burst(i.object.position.x,i.object.position.y,i.object.position.z,12189519,16,10),this.killBolt(i);break}}}}killBolt(t){t.active=!1,t.object.visible=!1,t.target=null,t.owner=null}updateMines(t,e){for(const n of this.mines)if(n.active){if(n.life-=t,n.spin+=t*2.2,n.object.rotation.y=n.spin,n.object.rotation.x=n.spin*.6,n.object.position.y+=Math.sin(n.spin*2)*.004,n.life<=0){n.active=!1,n.object.visible=!1;continue}if(n.armTimer>0){n.armTimer-=t;continue}for(const i of e){if(i.progress.finished||i===n.owner&&n.life>hc-1.4)continue;const r=i.pos.x-n.object.position.x,o=i.pos.z-n.object.position.z,a=i.pos.y+.6-n.object.position.y;if(r*r+o*o<4.4&&Math.abs(a)<2.6){n.active=!1,n.object.visible=!1,this.vfx.burst(n.object.position.x,n.object.position.y,n.object.position.z,16739210,26,14),i.hit(1.4,Math.random()<.5?1:-1)&&(i.dropCoins(),i.kart.visual.punch(1),this.onHit?.(i,"mine"));break}}}}updateBlasts(t){for(const e of this.blasts){if(!e.active)continue;if(e.life-=t,e.life<=0){e.active=!1,e.object.visible=!1;continue}const n=1-e.life/uc;e.radius=n*lr,e.object.scale.setScalar(Math.max(.6,e.radius)),e.object.material.opacity=.9*(1-n)}}updateShields(t,e){for(const n of e){const i=n.shield>0;let r=this.shieldViz.get(n.id);if(i&&!r){const o=new Zt(this.shieldGeo,this.shieldMat.clone());o.position.set(0,.9,0),n.kart.object.add(o),r={object:n.kart.object,mesh:o},this.shieldViz.set(n.id,r)}if(r)if(r.mesh.visible=i,i){const o=r.mesh.material;o.opacity=.14+.1*Math.sin(performance.now()*.008)+.1,r.mesh.rotation.y+=t*1.4}else n.kart.object.remove(r.mesh),r.mesh.material.dispose(),this.shieldViz.delete(n.id)}}clear(){for(const t of this.bolts)this.killBolt(t);for(const t of this.mines)t.active=!1,t.object.visible=!1;for(const t of this.blasts)t.active=!1,t.object.visible=!1}resetBoxes(){this.boxes.reset()}dispose(){this.group.removeFromParent();for(const t of this.blasts)t.object.material.dispose();this.boxes.dispose(),this.boltGeo.dispose(),this.boltMat.dispose(),this.mineGeo.dispose(),this.mineMat.dispose(),this.spikeGeo.dispose(),this.spikeMat.dispose(),this.ringGeo.dispose(),this.ringMat.dispose(),this.shieldGeo.dispose(),this.shieldMat.dispose();for(const t of this.shieldViz.values())t.object.remove(t.mesh),t.mesh.material.dispose();this.shieldViz.clear()}}const gv=14,vv=10;class _v{constructor(t,e,n,i){E(this,"group",new le);E(this,"mesh");E(this,"ring");E(this,"slots",[]);E(this,"tmpM",new ce);E(this,"tmpQ",new Zn);E(this,"tmpP",new T);E(this,"tmpS",new T(1,1,1));E(this,"elapsed",0);this.vfx=i;const r=n.level==="low"?10:16,o=new xe(.55,.55,.14,r),a=new Xn(.72,.09,6,r),l=new xn({color:16766046}),c=new xn({color:16773296,transparent:!0,opacity:.55,blending:sn}),h={pos:new T,tangent:new T,right:new T,up:new T,halfWidth:12};for(const d of Gg){const u=e.sAt(d);for(let f=0;f<d.count;f++){const g=d.count===1?0:f/(d.count-1),v=u+(g-.5)*d.spacing*d.count;e.frameAt(v,h);const p=Math.sin(g*Math.PI)*d.bow,m=d.lateral+p;this.slots.push({pos:new T(h.pos.x+h.right.x*m,h.pos.y+1.25,h.pos.z+h.right.z*m),alive:!0,timer:0,spin:this.slots.length*.7%6.28})}}this.mesh=new yr(o,l,Math.max(1,this.slots.length)),this.ring=new yr(a,c,Math.max(1,this.slots.length)),this.mesh.frustumCulled=!1,this.ring.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(35048),this.ring.instanceMatrix.setUsage(35048),this.group.add(this.mesh,this.ring),t.add(this.group),this.writeMatrices()}writeMatrices(){for(let t=0;t<this.slots.length;t++){const e=this.slots[t];if(!e.alive){this.tmpM.makeScale(1e-4,1e-4,1e-4),this.mesh.setMatrixAt(t,this.tmpM),this.ring.setMatrixAt(t,this.tmpM);continue}this.tmpP.copy(e.pos),this.tmpP.y+=Math.sin(this.elapsed*2.2+e.spin)*.16,this.tmpQ.setFromAxisAngle(Mv,e.spin),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),this.mesh.setMatrixAt(t,this.tmpM),this.tmpQ.setFromAxisAngle(xv,Math.PI/2),this.tmpQ.multiply(Sv.setFromAxisAngle(yv,e.spin*1.4)),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),this.ring.setMatrixAt(t,this.tmpM)}this.mesh.instanceMatrix.needsUpdate=!0,this.ring.instanceMatrix.needsUpdate=!0}update(t,e,n){this.elapsed+=t;let i=!1;for(let r=0;r<this.slots.length;r++){const o=this.slots[r];if(!o.alive){o.timer-=t,o.timer<=0&&(o.alive=!0,i=!0);continue}o.spin+=t*2.6,i=!0;for(const a of e){if(a.progress.finished)continue;const l=a.pos,c=l.x-o.pos.x,h=l.y+.7-o.pos.y,d=l.z-o.pos.z;if(c*c+d*d<4.4&&Math.abs(h)<2.4){o.alive=!1,o.timer=gv,this.vfx.spark(o.pos.x,o.pos.y,o.pos.z,0,3,0,16769162,1.1,.4,4,2),n(a);break}}}i&&this.writeMatrices()}get cap(){return vv}reset(){for(const t of this.slots)t.alive=!0,t.timer=0;this.writeMatrices()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.group.removeFromParent()}}const xv=new T(1,0,0),Mv=new T(0,1,0),yv=new T(0,0,1),Sv=new Zn;class bv{constructor(t){E(this,"zones",[]);for(const e of mh){const n=t.sAt(e);this.zones.push({s:n,halfLen:e.length*.5,lateral:e.lateral,halfWidth:2.6,cooldown:0})}}update(t,e,n,i){for(const r of this.zones)r.cooldown>0&&(r.cooldown-=t);for(const r of e){if(r.progress.finished)continue;const o=r.state.trackS;for(const a of this.zones){if(a.cooldown>0)continue;let l=o-a.s;const c=n.totalLength;if(l>c*.5?l-=c:l<-c*.5&&(l+=c),Math.abs(l)>a.halfLen)continue;const h=n.sampleAtS(o),d=r.pos.x-h.pos.x,u=r.pos.z-h.pos.z,f=d*h.right.x+u*h.right.z;if(!(Math.abs(f-a.lateral)>a.halfWidth)){a.cooldown=.35,i(r,1);break}}}}reset(){for(const t of this.zones)t.cooldown=0}}const wv={distance:6.6,height:2.95,lookAhead:12,positionDamping:6.4,aimDamping:7.6,fovBase:68,fovSpeedGain:14,fovBoostGain:12},Ie=new T,Ui=new T,us=new T;new T;const Gn=new T;class Tv{constructor(t,e=wv){E(this,"camera");E(this,"pos",new T);E(this,"aim",new T);E(this,"fov");E(this,"shake",0);E(this,"shakeSeed",Math.random()*100);E(this,"lookBack",0);E(this,"wantLookBack",!1);E(this,"airLift",0);this.tuning=e,this.camera=new Ke(e.fovBase,t,.35,1600),this.fov=e.fovBase}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setLookBack(t){this.wantLookBack=t}snap(t,e){this.computeDesired(t,e,0),this.pos.copy(Ie),this.aim.copy(Ui),this.camera.position.copy(this.pos),this.camera.lookAt(this.aim)}update(t,e,n,i){this.wantLookBack=this.wantLookBack&&!0,this.lookBack=ne(this.lookBack,this.wantLookBack?1:0,7,t),this.airLift=ne(this.airLift,i.airborne?1:0,4,t),this.computeDesired(e,n,this.airLift),this.pos.distanceToSquared(Ie)>900&&(this.pos.copy(Ie),this.aim.copy(Ui));const r=this.tuning.positionDamping*(i.airborne?.75:1);this.pos.x=ne(this.pos.x,Ie.x,r,t),this.pos.y=ne(this.pos.y,Ie.y,r*1.15,t),this.pos.z=ne(this.pos.z,Ie.z,r,t),this.aim.x=ne(this.aim.x,Ui.x,this.tuning.aimDamping,t),this.aim.y=ne(this.aim.y,Ui.y,this.tuning.aimDamping,t),this.aim.z=ne(this.aim.z,Ui.z,this.tuning.aimDamping,t);const o=n.surfaceHeight(this.pos.x,this.pos.z,e.trackIndex);if(this.pos.y<o+1.1&&(this.pos.y=o+1.1),this.shake=Math.max(0,this.shake-t*2.6),this.shake>.001){this.shakeSeed+=t*37;const l=this.shake*this.shake*.55;Gn.set(Math.sin(this.shakeSeed*1.7)*l,Math.sin(this.shakeSeed*2.3)*l*.8,Math.sin(this.shakeSeed*1.1)*l)}else Gn.set(0,0,0);this.camera.position.set(this.pos.x+Gn.x,this.pos.y+Gn.y,this.pos.z+Gn.z),this.camera.lookAt(this.aim.x+Gn.x*2,this.aim.y+Gn.y*2,this.aim.z+Gn.z*2),i.spin>0&&this.camera.rotateZ(Math.sin(this.shakeSeed*3.1)*this.shake*.35);const a=this.tuning.fovBase+this.tuning.fovSpeedGain*i.speed01+this.tuning.fovBoostGain*(i.boosting?1:0);this.fov=ne(this.fov,a,4.5,t),Math.abs(this.fov-this.camera.fov)>.02&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}computeDesired(t,e,n){const i=Math.sin(t.yaw),r=Math.cos(t.yaw);us.set(-i,0,-r);const a=e.sampleAtS(t.trackS).kind===$e.Tunnel,l=$t(Math.abs(t.speed)/40),c=(a?5.9:this.tuning.distance*(1-this.lookBack*1.85))+l*1.5,h=(a?2.35:this.tuning.height+l*.35)+n*1.2;Ie.set(t.pos.x-us.x*c,t.pos.y+h,t.pos.z-us.z*c);const d=e.query(Ie.x,Ie.z,t.trackIndex),u=e.sampleAtS(d.s),f=a?u.halfWidth-1.2:u.halfWidth+1.6;if(Math.abs(d.lateral)>f){const m=Math.abs(d.lateral)-f,y=Math.sign(d.lateral);Ie.x-=u.right.x*y*m,Ie.z-=u.right.z*y*m}const g=e.surfaceHeight(Ie.x,Ie.z,d.index),v=a?g+3.1:1/0;Ie.y<g+1&&(Ie.y=g+1),Ie.y>v&&(Ie.y=v);const p=this.lookBack>.5?-this.tuning.lookAhead:this.tuning.lookAhead;Ui.set(t.pos.x+us.x*p,t.pos.y+1.15,t.pos.z+us.z*p)}impact(t){this.shake=Math.min(1,this.shake+de(t,0,1))}}const dc=[{skill:1.065,aggression:.85,lineNoise:.7,canDrift:!0,reaction:.05},{skill:1.02,aggression:.62,lineNoise:1.1,canDrift:!0,reaction:.08},{skill:.985,aggression:.5,lineNoise:1.5,canDrift:!0,reaction:.1},{skill:.955,aggression:.42,lineNoise:1.9,canDrift:!1,reaction:.12},{skill:.93,aggression:.34,lineNoise:2.3,canDrift:!1,reaction:.14},{skill:.91,aggression:.28,lineNoise:2.7,canDrift:!1,reaction:.16}];class Ev{constructor(t,e,n,i,r,o,a={}){E(this,"racers",[]);E(this,"adapter");E(this,"gates");E(this,"line");E(this,"items");E(this,"coins");E(this,"pads");E(this,"camera");E(this,"config");E(this,"phase","idle");E(this,"raceTime",0);E(this,"countdown",3.6);E(this,"goTimer",0);E(this,"playerFinished",!1);E(this,"launchWindow",0);E(this,"aiDrivers",[]);E(this,"playerSpectator");E(this,"neighbours",[]);E(this,"rng",Ir(6221086));E(this,"accumulator",0);E(this,"finishCounter",0);E(this,"raceOverTimer",0);E(this,"itemUseCooldown",0);E(this,"aiItemTimers",[]);E(this,"warnWrongWay",0);E(this,"autoPilotPlayer",!1);E(this,"elapsed",0);E(this,"events",{});this.scene=t,this.spline=e,this.vfx=i,this.config={laps:Pg,aiCount:o.length,fixedStep:1/120,maxSubsteps:12,timeScale:1,aiDifficulty:1,itemRespawn:4,...a},this.adapter=new uv(e),this.gates=new tv(e,16),this.line=new nv(e),this.racers.push(new ac(0,r,"player",n));for(let l=0;l<o.length;l++)this.racers.push(new ac(l+1,o[l],"ai",n));for(const l of this.racers)t.add(l.kart.object);this.items=new mv(t,e,i,n),this.items.onHit=(l,c)=>{this.events.sfx?.(c==="mine"?"explode":"hit",{volume:.9}),l.isPlayer&&(this.events.shake?.(.85),this.events.sfx?.("spinout"))},this.coins=new _v(t,e,n,i),this.pads=new bv(e),this.camera=new Tv(16/9);for(let l=0;l<this.racers.length;l++){if(this.racers[l].kind!=="ai")continue;const h=dc[(l-1)%dc.length];this.aiDrivers.push(new nc({skill:h.skill*this.config.aiDifficulty,aggression:h.aggression,lineNoise:h.lineNoise,canDrift:h.canDrift,reaction:h.reaction,seed:1337+l*977}))}this.playerSpectator=new nc({skill:.92,aggression:.4,lineNoise:1,canDrift:!0,reaction:.08,seed:4242});for(const l of this.racers)this.neighbours.push({id:l.id,x:0,z:0,speed:0,isPlayer:l.isPlayer});for(const l of this.racers)this.aiItemTimers[l.id]=0;this.resetRace(r,o)}resetRace(t,e){for(let n=0;n<this.racers.length;n++)this.racers[n].resetOnGrid(this.spline,n),this.racers[n].updateProgress(this.gates);this.items.clear(),this.items.resetBoxes(),this.coins.reset(),this.pads.reset(),this.vfx.clearSkids();for(const n of this.aiDrivers)n.reset();this.playerSpectator.reset(),this.phase="countdown",this.countdown=3.6,this.raceTime=0,this.goTimer=0,this.finishCounter=0,this.raceOverTimer=0,this.playerFinished=!1,this.itemUseCooldown=0,this.accumulator=0,this.warnWrongWay=0;for(const n of this.racers)n.rank=n.id+1,n.kart.setGroundNormal(0,1,0),n.kart.syncVisual(.016);this.computeStandings(),this.camera.snap(this.racers[0].state,this.spline)}get player(){return this.racers[0]}update(t,e){const n=this.config.fixedStep,i=Math.min(t,.1)*this.config.timeScale;this.accumulator+=i;let r=0;for(;this.accumulator>=n&&r<this.config.maxSubsteps;)this.fixedStep(n,e),this.accumulator-=n,r++;return r>=this.config.maxSubsteps&&(this.accumulator=0),this.syncVisual(i,e),this.hud()}fixedStep(t,e){const n=this.player;if(this.elapsed+=t,this.phase==="countdown"){const o=Math.ceil(this.countdown);this.countdown-=t;const a=Math.ceil(this.countdown);if(a!==o&&(a>=1&&this.events.sfx?.("countdown_beep"),a===0&&(this.events.sfx?.("countdown_go"),this.goTimer=1.2)),this.countdown<=0){this.phase="racing",this.launchWindow=.35,e.down("accel")&&n.grantLaunchBoost();for(const l of this.racers)l.frozen=!1}}else(this.phase==="racing"||this.phase==="finished")&&(this.raceTime+=t,this.goTimer>0&&(this.goTimer-=t),this.launchWindow>0&&(this.launchWindow-=t));const i=this.phase==="racing"||this.phase==="finished",r=this.phase==="results";for(const o of this.racers){if(o.updateBackDir(),r){o.controls.steer=0,o.controls.throttle=0,o.controls.brake=.35,o.controls.drift=!1,o.controls.driftPressed=!1;continue}if(i)if(o.kind==="player")this.autoPilotPlayer||o.progress.finished?(this.playerSpectator.rubberBand=1,o.controls=this.playerSpectator.update(t,o.state,this.worldView(),o.state.trackIndex,this.adapter)):this.readPlayerControls(o,e);else{const a=this.aiDrivers[o.id-1];a&&(a.rubberBand=this.rubberBandFor(o),o.controls=a.update(t,o.state,this.worldView(),o.state.trackIndex,this.adapter))}}for(const o of this.racers)o.step(t,this.adapter);this.resolveKartCollisions();for(const o of this.racers){const a=o.progress.lap;o.updateProgress(this.gates),o.progress.lap!==a&&!o.progress.finished&&(o.isPlayer&&(o.progress.lap>=this.config.laps?this.events.sfx?.("final_lap"):o.progress.lap>0&&this.events.sfx?.("lap")),o.hasCompleted(this.config.laps)&&(o.progress.finished=!0,o.progress.finishTime=this.raceTime,o.progress.finishRank=++this.finishCounter,o.isPlayer&&(this.playerFinished=!0,this.phase="finished",this.events.sfx?.("finish",{volume:1}))))}this.coins.update(t,this.racers,o=>this.onCoin(o)),this.pads.update(t,this.racers,this.spline,o=>this.onBoostPad(o)),this.items.updateBoxes(t,this.raceTime,this.racers,o=>this.onItemBox(o)),this.items.update(t,this.racers,this.spline),this.itemUseCooldown>0&&(this.itemUseCooldown-=t);for(const o of this.racers)o.item&&(o.kind==="player"?e.pressed("item")&&o.itemRoll<=0&&this.itemUseCooldown<=0&&(this.useItem(o),this.itemUseCooldown=.25):(this.aiItemTimers[o.id]-=t,this.aiItemTimers[o.id]<=0&&o.itemRoll<=0&&(this.aiShouldUse(o)?this.useItem(o):this.aiItemTimers[o.id]=.4+this.rng()*.5)));this.updateRecovery(t),this.computeStandings(),this.phase==="finished"&&(this.raceOverTimer+=t,(this.racers.every(a=>a.progress.finished)||this.raceOverTimer>7)&&(this.phase="results"))}worldView(){const t=this.neighbours;for(let e=0;e<this.racers.length;e++){const n=this.racers[e];t[e].id=n.id,t[e].x=n.pos.x,t[e].z=n.pos.z,t[e].speed=n.state.speed,t[e].isPlayer=n.isPlayer}return{spline:this.spline,line:this.line,neighbours:t}}readPlayerControls(t,e){const n=t.controls,i=e.steerAxis();n.noControl=!1,n.steer=i,n.throttle=e.down("accel")||e.pointerAccel?1:0,n.brake=e.down("brake")?1:0;const r=e.down("drift");n.driftPressed=e.pressed("drift"),n.drift=r}onItemBox(t){const e=dv(t.rank,this.racers.length,this.rng);if(e==="turbo"){this.applyTurbo(t),t.isPlayer&&this.events.sfx?.("boost_start");return}t.item=e,t.itemRoll=.85,t.isPlayer&&this.events.sfx?.("pickup")}useItem(t){const e=t.item;if(e)switch(t.item=null,e){case"bolt":this.items.fireBolt(t,this.racers),this.events.sfx?.("fire_bolt",{volume:t.isPlayer?1:.5});break;case"mine":this.items.dropMine(t),this.events.sfx?.("drop_mine",{volume:t.isPlayer?1:.45});break;case"blast":this.items.detonateBlast(t,this.racers),this.events.sfx?.("blast",{volume:t.isPlayer?1:.6}),t.isPlayer&&this.events.shake?.(.7);break;case"shield":this.items.raiseShield(t),this.events.sfx?.("shield_up",{volume:t.isPlayer?1:.5});break;case"turbo":this.applyTurbo(t);break}}applyTurbo(t){t.kart.physics.applyBoost(1.5,22),this.events.sfx?.("boost_start",{volume:t.isPlayer?1:.4})}aiShouldUse(t){const e=t.item;if(!e)return!1;const n=-Math.sin(t.state.yaw),i=-Math.cos(t.state.yaw);let r=0,o=0,a=0;for(const l of this.racers){if(l===t||l.progress.finished)continue;const c=l.pos.x-t.pos.x,h=l.pos.z-t.pos.z,d=Math.hypot(c,h);if(d>70)continue;const u=c*n+h*i;u>2?(r++,d<26&&a++):u<-2&&o++}switch(e){case"bolt":return r>0&&t.state.trackS>0;case"mine":return o>0||this.rng()<.02;case"turbo":{const l=this.spline.sampleAtS(t.state.trackS);return Math.abs(l.curvature)<.006}case"blast":return a>0;case"shield":return o>0||this.rng()<.03;default:return!1}}onCoin(t){t.addCoin(this.coins.cap)&&this.events.sfx?.("coin",{volume:t.isPlayer?.7:.22,rate:1+t.coins%5*.06})}onBoostPad(t){t.kart.physics.applyPadBoost(.85,17),this.vfx.miniTurboBurst(t.pos.x,t.pos.y+.2,t.pos.z,8190463),t.isPlayer&&(this.events.sfx?.("boost_start",{volume:.85}),this.events.shake?.(.28))}resolveKartCollisions(){const t=this.racers.length;for(let e=0;e<t;e++){const n=this.racers[e];for(let i=e+1;i<t;i++){const r=this.racers[i],o=r.pos.x-n.pos.x,a=r.pos.z-n.pos.z,l=r.pos.y-n.pos.y;if(Math.abs(l)>1.8)continue;const c=n.kart.model.radius+r.kart.model.radius,h=o*o+a*a;if(h>=c*c||h<1e-6)continue;const d=Math.sqrt(h),u=o/d,f=a/d,g=c-d,v=n.kart.physics.params.weight,p=r.kart.physics.params.weight,m=v+p;n.pos.x-=u*g*(p/m),n.pos.z-=f*g*(p/m),r.pos.x+=u*g*(v/m),r.pos.z+=f*g*(v/m);const y=n.state.vel,x=r.state.vel,S=(x.x-y.x)*u+(x.z-y.z)*f;if(S<0){const D=-1.35*S/(1/v+1/p);y.x-=u*D/v,y.z-=f*D/v,x.x+=u*D/p,x.z+=f*D/p;const R=Math.min(1,Math.abs(S)/18);R>.28&&(n.kart.visual.punch(R*.6),r.kart.visual.punch(R*.6),(n.isPlayer||r.isPlayer)&&(this.events.shake?.(R*.5),this.events.sfx?.("wall_hit",{volume:R*.7})))}}}}updateRecovery(t){for(const n of this.racers){if(n.progress.finished)continue;const i=n.state,r=Math.abs(i.speed)<2.2&&i.spinTimer<=0&&(this.phase==="racing"||this.phase==="finished");n.recoverTimer=r?n.recoverTimer+t:0;const o=!i.onRoad&&i.lateral01>1.45;(n.recoverTimer>3.4||o&&n.recoverTimer>1.6)&&this.rescueRacer(n)}const e=this.player;this.phase!=="racing"||e.progress.finished?this.warnWrongWay=0:e.state.speed<-1.5&&Math.abs(e.state.speed)>2?this.warnWrongWay=1.4:this.warnWrongWay=Math.max(0,this.warnWrongWay-t)}rescueRacer(t){const e=this.spline.wrapS(t.state.trackS+4),n=this.line.lateralAt(e),i=this.spline.sampleAtS(e),r=Math.atan2(-i.tangent.x,-i.tangent.z),o=i.pos.x+i.right.x*n,a=i.pos.z+i.right.z*n,l=this.spline.surfaceHeight(o,a,i.i)+.15;t.kart.physics.placeOnTrack(o,l,a,r,8),t.recoverTimer=0,t.kart.visual.snap(t.state),this.vfx.burst(o,l+.6,a,9427199,16,7),t.isPlayer&&this.events.sfx?.("warn")}computeStandings(){const t=[...this.racers];t.sort((e,n)=>e.progress.finished&&n.progress.finished?e.progress.finishRank-n.progress.finishRank:e.progress.finished?-1:n.progress.finished?1:e.progress.lap!==n.progress.lap?n.progress.lap-e.progress.lap:e.progress.checkpoint!==n.progress.checkpoint?n.progress.checkpoint-e.progress.checkpoint:n.progress.distance-e.progress.distance);for(let e=0;e<t.length;e++)t[e].rank=e+1}rubberBandFor(t){const n=this.player.progress.distance-t.progress.distance;return n>220?1.055:n>110?1.025:n<-260?.955:n<-130?.98:1}syncVisual(t,e){for(const r of this.racers){r.syncVisual(t,this.vfx,this.phase!=="idle");const o=r.state;o.wallHit&&o.wallHitStrength>.25&&r.wallSfxCooldown<=0&&(r.wallSfxCooldown=.28,this.vfx.spark(o.pos.x,o.pos.y+.5,o.pos.z,-o.vel.x*.1,1.5,-o.vel.z*.1,16773312,.6,.3,8,2),r.isPlayer&&(this.events.sfx?.("wall_hit",{volume:.45*o.wallHitStrength}),this.events.shake?.(o.wallHitStrength*.55))),o.justLanded&&r.isPlayer&&o.landImpact>.35&&this.events.sfx?.("land",{volume:.4+o.landImpact*.4})}const i=this.player.state;this.camera.setLookBack(e.down("look_back")),this.camera.update(t,i,this.spline,{boosting:i.boostTime>0||i.padBoostTime>0,speed01:$t(Math.abs(i.speed)/42),airborne:!i.grounded,spin:i.spinTimer})}hud(){const t=this.player,e=t.state,n=this.racers.slice().sort((c,h)=>c.rank-h.rank),i=n[0],r=n.map(c=>({rank:c.rank,name:c.name,kartId:c.kart.spec.id,isPlayer:c.isPlayer,lap:Math.min(this.config.laps,Math.max(1,c.progress.lap)),finished:c.progress.finished,finishTime:c.progress.finishTime,gap:c.progress.finished?c.progress.finishTime-(i.progress.finished?i.progress.finishTime:0):(i.progress.distance-c.progress.distance)/24,bestLap:c.progress.lapTimes.length?Math.min(...c.progress.lapTimes):0})),o=t.progress.lapTimes,a=o.length?o[o.length-1]:0,l=o.length>1?o[o.length-2]:0;return{phase:this.phase,countdown:Math.max(0,this.countdown),countdownActive:this.phase==="countdown",lap:t.displayLap(this.config.laps),laps:this.config.laps,rank:t.rank,total:this.racers.length,speed:Math.abs(e.speed)*3.6,speed01:$t(Math.abs(e.speed)/42),coins:t.coins,coinBoostPct:(t.boostFromCoins-1)*100,item:t.item,itemRolling:t.itemRoll>0,itemBlurb:t.item?xh[t.item].blurb:"",lapTime:t.currentLapTime,raceTime:this.raceTime,bestLap:o.length?Math.min(...o):0,lastLap:a,lastLapDelta:a&&l?a-l:0,driftCharge01:$t(e.driftCharge/3.3),driftTier:e.driftTier,boostTime:Math.max(e.boostTime,e.padBoostTime),showGo:this.goTimer>0,goTimer:this.goTimer,standings:r,finished:t.progress.finished,warnWrongWay:this.warnWrongWay>0}}results(){return this.racers.slice().sort((t,e)=>t.rank-e.rank).map(t=>({rank:t.rank,name:t.name,kartId:t.kart.spec.id,isPlayer:t.isPlayer,lap:this.config.laps,finished:t.progress.finished,finishTime:t.progress.finishTime,gap:t.progress.finished?t.progress.finishTime-(this.racers.find(e=>e.progress.finishRank===1)?.progress.finishTime??t.progress.finishTime):null,bestLap:t.progress.lapTimes.length?Math.min(...t.progress.lapTimes):0}))}manualReset(){const t=this.player;t.progress.finished||(t.kart.physics.state.spinTimer=0,this.rescueRacer(t),this.events.sfx?.("warn"))}get activeCamera(){return this.camera}raceStats(){let t=1/0,e=1/0;for(const n of this.racers)for(const i of n.progress.lapTimes)i<e&&(e=i),n.isPlayer&&i<t&&(t=i);return{bestLapPlayer:Number.isFinite(t)?t:0,bestLapOverall:Number.isFinite(e)?e:0}}dispose(){for(const t of this.racers)this.scene.remove(t.kart.object),t.dispose();this.items.dispose(),this.coins.dispose(),this.racers.length=0}}function fc(s,t){const e=un.filter(i=>i.id!==s),n=[];for(let i=0;i<t;i++)n.push(e[i%e.length]);return n}class Av{constructor(t,e){E(this,"ctx");E(this,"path");E(this,"startX",0);E(this,"startZ",0);E(this,"minX",0);E(this,"minZ",0);E(this,"scale",1);E(this,"pad",12);this.canvas=t,this.ctx=t.getContext("2d"),t.width=384,t.height=384;let n=1/0,i=-1/0,r=1/0,o=-1/0;for(const f of e.samples)f.pos.x<n&&(n=f.pos.x),f.pos.x>i&&(i=f.pos.x),f.pos.z<r&&(r=f.pos.z),f.pos.z>o&&(o=f.pos.z);const a=i-n,l=o-r,c=Math.max(a,l);this.minX=n+a/2-c/2,this.minZ=r+l/2-c/2,this.scale=(t.width-this.pad*2)/c,this.path=new Path2D;const h=e.samples.length;for(let f=0;f<=h;f++){const g=e.samples[f%h],v=this.project(g.pos.x,g.pos.z);f===0?this.path.moveTo(v.x,v.y):this.path.lineTo(v.x,v.y)}const d=e.samples[e.startIndex%h],u=this.project(d.pos.x,d.pos.z);this.startX=u.x,this.startZ=u.y}project(t,e){return{x:this.pad+(t-this.minX)*this.scale,y:this.pad+(e-this.minZ)*this.scale}}draw(t){const e=this.ctx;if(!e)return;const n=this.canvas.width;e.clearRect(0,0,n,n),e.save(),e.lineCap="round",e.lineJoin="round",e.strokeStyle="rgba(6, 22, 38, 0.85)",e.lineWidth=17,e.stroke(this.path),e.strokeStyle="rgba(124, 249, 255, 0.42)",e.lineWidth=12,e.stroke(this.path),e.strokeStyle="rgba(233, 246, 255, 0.28)",e.lineWidth=3.5,e.stroke(this.path),e.restore(),e.save(),e.translate(this.startX,this.startZ),e.fillStyle="#ffc857",e.fillRect(-9,-3,18,6),e.restore();const i=t.slice().sort((r,o)=>Number(r.isPlayer)-Number(o.isPlayer));for(const r of i){const o=this.project(r.x,r.z),a=`#${r.color.toString(16).padStart(6,"0")}`;r.isPlayer&&(e.beginPath(),e.arc(o.x,o.y,10,0,Math.PI*2),e.fillStyle="rgba(255, 200, 87, 0.28)",e.fill()),e.beginPath(),e.arc(o.x,o.y,r.isPlayer?6.5:5,0,Math.PI*2),e.fillStyle=a,e.fill(),e.lineWidth=2,e.strokeStyle=r.isPlayer?"#fff8e1":"rgba(3, 10, 20, 0.8)",e.stroke()}}}function Hn(s){if(!Number.isFinite(s)||s<=0)return"--:--.---";const t=Math.floor(s/60),e=Math.floor(s%60),n=Math.floor(s%1*1e3);return`${t}:${e.toString().padStart(2,"0")}.${n.toString().padStart(3,"0")}`}function Cv(s){if(!Number.isFinite(s))return"--";const t=s>=0?"+":"-",e=Math.abs(s);return`${t}${e.toFixed(2)}`}function pc(s,t=54){const n=`#${xh[s].color.toString(16).padStart(6,"0")}`,i=`drop-shadow(0 0 8px ${n})`,r=`width="${t}" height="${t}" viewBox="0 0 48 48" fill="none" style="filter:${i}"`;switch(s){case"bolt":return`<svg ${r}><path d="M10 24h20M22 14l12 10-12 10" stroke="${n}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="38" cy="24" r="4.5" fill="#ffffff"/></svg>`;case"mine":return`<svg ${r}><circle cx="24" cy="24" r="9" fill="${n}"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4.5 4.5M32.5 32.5L37 37M37 11l-4.5 4.5M15.5 32.5L11 37" stroke="${n}" stroke-width="3.4" stroke-linecap="round"/><circle cx="24" cy="24" r="3.4" fill="#12040a"/></svg>`;case"turbo":return`<svg ${r}><path d="M8 14l13 10-13 10z" fill="${n}"/><path d="M24 14l13 10-13 10z" fill="#ffffff" opacity="0.85"/></svg>`;case"blast":return`<svg ${r}><circle cx="24" cy="24" r="6.5" fill="#ffffff"/><path d="M24 4l4 12 12-6-6 12 12 4-12 4 6 12-12-6-4 12-4-12-12 6 6-12-12-4 12-4-6-12 12 6z" fill="${n}" opacity="0.9"/></svg>`;default:return`<svg ${r}><path d="M24 5l16 9.5v19L24 43 8 33.5v-19z" stroke="${n}" stroke-width="3.6" fill="rgba(255,255,255,0.08)"/><path d="M24 15l9 5.4v10.2L24 36l-9-5.4V20.4z" fill="${n}" opacity="0.55"/></svg>`}}function gn(s){return`#${s.toString(16).padStart(6,"0")}`}function Rv(s,t){const e=s.getContext("2d");if(!e)return;const n=128;s.width=n,s.height=n;const i=t.driver,r=e.createRadialGradient(n*.5,n*.72,4,n*.5,n*.55,n*.72);switch(r.addColorStop(0,gn(t.kart.body)),r.addColorStop(1,"rgba(3,10,20,0.9)"),e.fillStyle=r,e.fillRect(0,0,n,n),e.fillStyle=gn(i.secondary),e.beginPath(),e.ellipse(n*.5,n*.98,n*.44,n*.3,0,0,Math.PI*2),e.fill(),e.fillStyle=gn(i.primary),e.beginPath(),e.ellipse(n*.5,n*.52,n*.29,n*.3,0,0,Math.PI*2),e.fill(),e.fillStyle=gn(i.accent),i.body){case"otter":e.beginPath(),e.ellipse(n*.31,n*.3,n*.08,n*.09,-.4,0,7),e.fill(),e.beginPath(),e.ellipse(n*.69,n*.3,n*.08,n*.09,.4,0,7),e.fill(),e.fillStyle=gn(i.secondary),e.fillRect(n*.2,n*.66,n*.6,n*.1);break;case"golem":e.beginPath(),e.moveTo(n*.22,n*.3),e.lineTo(n*.4,n*.14),e.lineTo(n*.44,n*.34),e.closePath(),e.fill(),e.beginPath(),e.moveTo(n*.78,n*.3),e.lineTo(n*.6,n*.14),e.lineTo(n*.56,n*.34),e.closePath(),e.fill();break;case"moth":e.strokeStyle=gn(i.accent),e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(n*.4,n*.28),e.quadraticCurveTo(n*.24,n*.1,n*.14,n*.16),e.stroke(),e.beginPath(),e.moveTo(n*.6,n*.28),e.quadraticCurveTo(n*.76,n*.1,n*.86,n*.16),e.stroke();break;case"jelly":e.globalAlpha=.55,e.beginPath(),e.ellipse(n*.5,n*.4,n*.34,n*.26,0,Math.PI,0),e.fill(),e.globalAlpha=1;break;case"automaton":e.fillStyle="#0a0f14",e.beginPath(),e.ellipse(n*.5,n*.5,n*.2,n*.11,0,0,Math.PI*2),e.fill(),e.fillStyle=gn(i.eye),e.beginPath(),e.arc(n*.5,n*.5,n*.065,0,Math.PI*2),e.fill();break;default:e.beginPath(),e.moveTo(n*.16,n*.36),e.lineTo(n*.84,n*.36),e.lineTo(n*.5,n*.12),e.closePath(),e.fill();break}e.fillStyle=gn(i.eye);const o=i.body==="frog"?n*.36:n*.5;e.beginPath(),e.arc(n*.4,o,n*.065,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(n*.6,o,n*.065,0,Math.PI*2),e.fill(),e.fillStyle=i.glow>1.2?gn(i.accent):"#ffffff",e.beginPath(),e.arc(n*.415,o-3,n*.022,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(n*.615,o-3,n*.022,0,Math.PI*2),e.fill()}class Pv{constructor(t,e){E(this,"root");E(this,"cb");E(this,"titleScreen");E(this,"selectScreen");E(this,"resultsScreen");E(this,"pauseOverlay");E(this,"hud");E(this,"cards",new Map);E(this,"selectedKart",un[0].id);E(this,"elRank");E(this,"elLap");E(this,"elSpeed");E(this,"elSpeedBar");E(this,"elBoost");E(this,"elBoostBar");E(this,"elCoins");E(this,"elCoinBonus");E(this,"elItem");E(this,"elItemIco");E(this,"elTimers");E(this,"elStandings");E(this,"elCountdown");E(this,"elWarn");E(this,"elDrift");E(this,"elDriftBar");E(this,"elSpeedlines");E(this,"elToast");E(this,"elQuality");E(this,"minimap",null);E(this,"minimapCanvas");E(this,"lastHudSig","");E(this,"lastItem",null);E(this,"lastCountdownToken","");E(this,"toastUntil",0);this.root=t,this.cb=e,this.buildTitle(),this.buildSelect(),this.buildHud(),this.buildPause(),this.buildResults(),this.setScreen("title")}attachMinimap(t){this.minimap=new Av(this.minimapCanvas,t)}button(t,e,n){const i=document.createElement("button");return i.className=e,i.textContent=t,i.addEventListener("click",r=>{r.stopPropagation(),n()}),i.addEventListener("mouseenter",()=>this.cb.onHover()),i}buildTitle(){const t=document.createElement("section");t.className="screen screen--title",t.innerHTML=`
      <div class="title__logo">Zephyr Reef<span>Grand Prix</span></div>
      <p class="title__tag">
        Six racers. Three laps. One reef. Bank the Humpback, ride the viaduct over the
        glowing lagoon, hold your nerve through the Crystal Bore — and take the trophy.
      </p>
      <div class="title__actions"></div>
      <div class="title__foot">
        <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> drive &nbsp;·&nbsp;
        <kbd>Shift</kbd> drift &nbsp;·&nbsp; <kbd>Space</kbd> item &nbsp;·&nbsp;
        <kbd>R</kbd> reset &nbsp;·&nbsp; <kbd>Q</kbd> look back &nbsp;·&nbsp; <kbd>P</kbd> pause
      </div>`;const e=t.querySelector(".title__actions"),n=this.button("Start Race","btn btn--primary",()=>this.cb.onStartRace()),i=this.button("Choose Racer","btn",()=>this.cb.onOpenSelect());e.append(n,i);const r=document.createElement("div");r.className="panel title__settings",r.innerHTML=`
      <label>Quality <button class="chip" data-role="quality">High</button></label>
      <label>Sound <button class="chip" data-role="mute">On</button></label>
      <label>Master <input type="range" min="0" max="1" step="0.02" data-role="vol-master"></label>
      <label>Music <input type="range" min="0" max="1" step="0.02" data-role="vol-music"></label>
      <label>Effects <input type="range" min="0" max="1" step="0.02" data-role="vol-sfx"></label>`;const o=r.querySelector('[data-role="quality"]');o.addEventListener("click",()=>this.cb.onCycleQuality()),o.addEventListener("mouseenter",()=>this.cb.onHover());const a=r.querySelector('[data-role="mute"]');a.addEventListener("click",()=>this.cb.onToggleMute()),a.addEventListener("mouseenter",()=>this.cb.onHover());for(const[l,c]of[["master","vol-master"],["music","vol-music"],["sfx","vol-sfx"]]){const h=r.querySelector(`[data-role="${c}"]`);h.addEventListener("input",()=>this.cb.onVolume(l,Number(h.value)))}t.querySelector(".title__foot")?.before(r),this.titleScreen=t,this.root.appendChild(t)}buildSelect(){const t=document.createElement("section");t.className="screen screen--select";const e=document.createElement("div");e.className="select__head",e.textContent="Choose your racer";const n=document.createElement("div");n.className="select__grid";for(const o of un){const a=document.createElement("div");a.className="card clickable";const l=document.createElement("canvas");l.className="card__swatch",Rv(l,o);const c=document.createElement("div");c.className="card__name",c.textContent=o.name;const h=document.createElement("div");h.className="card__arch",h.textContent=o.archetype,a.append(l,c,h),a.addEventListener("click",()=>{this.cb.onHover(),this.setSelectedKart(o.id),this.cb.onSelectKart(o.id)}),a.addEventListener("mouseenter",()=>{this.setSelectedKart(o.id,!1),this.cb.onSelectKart(o.id)}),this.cards.set(o.id,a),n.appendChild(a)}const i=document.createElement("div");i.className="select__detail",i.dataset.role="detail";const r=document.createElement("div");r.className="select__actions",r.append(this.button("Back","btn btn--ghost",()=>this.cb.onQuitToTitle()),this.button("Race","btn btn--primary",()=>this.cb.onStartRace())),t.append(e,n,i,r),this.selectScreen=t,this.root.appendChild(t),this.setSelectedKart(this.selectedKart)}setSelectedKart(t,e=!0){this.selectedKart=t;const n=un.find(o=>o.id===t)??un[0];if(e)for(const[o,a]of this.cards)a.classList.toggle("selected",o===t);else for(const[o,a]of this.cards)a.classList.toggle("selected",o===t);const i=this.selectScreen.querySelector('[data-role="detail"]');if(!i)return;const r=o=>Math.round(Math.max(0,Math.min(1,(o-.82)/.48))*100);i.innerHTML=`
      <div class="select__tagline">${n.name} — ${n.tagline}</div>
      <div class="stat stat--speed"><span>Speed</span><div class="stat__bar"><div class="stat__fill" style="width:${r(n.stats.speed)}%"></div></div><span class="stat__val">${n.stats.speed.toFixed(2)}</span></div>
      <div class="stat stat--accel"><span>Accel</span><div class="stat__bar"><div class="stat__fill" style="width:${r(n.stats.accel)}%"></div></div><span class="stat__val">${n.stats.accel.toFixed(2)}</span></div>
      <div class="stat stat--handling"><span>Handling</span><div class="stat__bar"><div class="stat__fill" style="width:${r(n.stats.handling)}%"></div></div><span class="stat__val">${n.stats.handling.toFixed(2)}</span></div>
      <div class="stat stat--weight"><span>Weight</span><div class="stat__bar"><div class="stat__fill" style="width:${r(n.stats.weight)}%"></div></div><span class="stat__val">${n.stats.weight.toFixed(2)}</span></div>`}get chosenKart(){return this.selectedKart}buildHud(){const t=document.createElement("div");t.className="hud",t.innerHTML=`
      <div class="hud__pos">
        <div class="panel hud__rank">
          <div class="hud__rank-num" data-role="rank">1<small>/6</small></div>
          <div class="hud__rank-label">Position</div>
        </div>
        <div class="panel hud__lap">
          <div class="hud__lap-num" data-role="lap">1<small>/3</small></div>
          <div class="hud__lap-label">Lap</div>
        </div>
      </div>
      <div class="panel hud__timers" data-role="timers"></div>
      <div class="panel hud__standings" data-role="standings"></div>
      <div class="panel hud__item empty" data-role="item"><div class="hud__item-ico" data-role="itemico"></div></div>
      <div class="panel hud__coins">
        <svg class="coin-glyph" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#ffc857" stroke-width="2.4"/><circle cx="12" cy="12" r="5" fill="#ffc857" opacity="0.55"/></svg>
        <div>
          <div class="hud__coins-num" data-role="coins">0</div>
          <div class="hud__coins-label">Energy</div>
        </div>
        <div class="hud__coins-bonus" data-role="coinbonus"></div>
      </div>
      <div class="panel hud__speed">
        <div class="hud__speed-num" data-role="speed">0<small>km/h</small></div>
        <div class="hud__bar"><i data-role="speedbar"></i></div>
        <div class="hud__boost" data-role="boostwrap"><i data-role="boostbar"></i></div>
      </div>
      <div class="panel hud__drift" data-role="drift"><i data-role="driftbar"></i></div>
      <div class="panel hud__minimap"><canvas data-role="minimap"></canvas></div>
      <div class="hud__quality" data-role="quality"></div>
      <div class="countdown" data-role="countdown"></div>
      <div class="warn" data-role="warn">Wrong Way!</div>
      <div class="speedlines" data-role="speedlines"></div>
      <div class="panel toast" data-role="toast"></div>`,this.hud=t,this.root.appendChild(t);const e=n=>t.querySelector(`[data-role="${n}"]`);this.elRank=e("rank"),this.elLap=e("lap"),this.elSpeed=e("speed"),this.elSpeedBar=e("speedbar"),this.elBoost=e("boostwrap"),this.elBoostBar=e("boostbar"),this.elCoins=e("coins"),this.elCoinBonus=e("coinbonus"),this.elItem=e("item"),this.elItemIco=e("itemico"),this.elTimers=e("timers"),this.elStandings=e("standings"),this.elCountdown=e("countdown"),this.elWarn=e("warn"),this.elDrift=e("drift"),this.elDriftBar=e("driftbar"),this.elSpeedlines=e("speedlines"),this.elToast=e("toast"),this.elQuality=e("quality"),this.minimapCanvas=e("minimap")}buildPause(){const t=document.createElement("section");t.className="overlay overlay--pause";const e=document.createElement("div");e.className="panel overlay__card",e.innerHTML=`
      <div class="overlay__title">Paused</div>
      <div class="overlay__actions"></div>
      <div class="overlay__hint">
        <kbd>P</kbd> or <kbd>Esc</kbd> to resume &nbsp;·&nbsp; <kbd>R</kbd> resets your kart onto the track
      </div>`,e.querySelector(".overlay__actions").append(this.button("Resume","btn btn--primary",()=>this.cb.onResume()),this.button("Restart Race","btn",()=>this.cb.onRestart()),this.button("Quit to Title","btn btn--ghost",()=>this.cb.onQuitToTitle())),t.appendChild(e),this.pauseOverlay=t,this.root.appendChild(t)}buildResults(){const t=document.createElement("section");t.className="screen screen--results",t.innerHTML=`
      <div class="results__head" data-role="rhead">Race Complete</div>
      <div class="results__sub" data-role="rsub"></div>
      <div class="results__podium" data-role="podium"></div>
      <div class="panel results__table" data-role="table"></div>
      <div class="select__actions" data-role="ractions"></div>`,t.querySelector('[data-role="ractions"]').append(this.button("Race Again","btn btn--primary",()=>this.cb.onRestart()),this.button("Change Racer","btn",()=>this.cb.onOpenSelect()),this.button("Title","btn btn--ghost",()=>this.cb.onQuitToTitle())),this.resultsScreen=t,this.root.appendChild(t)}setScreen(t){this.titleScreen.classList.toggle("visible",t==="title"),this.selectScreen.classList.toggle("visible",t==="select"),this.resultsScreen.classList.toggle("visible",t==="results"),this.hud.classList.toggle("visible",t==="race"||t==="results"),this.hud.classList.toggle("dimmed",t==="results")}setPaused(t){this.pauseOverlay.classList.toggle("visible",t)}setQualityLabel(t,e){this.elQuality.textContent=`${t.toUpperCase()}  ·  ${e?"MUTED":"SOUND ON"}  ·  click for audio`}setSettings(t){const e=this.titleScreen.querySelector('[data-role="quality"]'),n=this.titleScreen.querySelector('[data-role="mute"]');e&&(e.textContent=`${t.quality[0].toUpperCase()}${t.quality.slice(1)}`),n&&(n.textContent=t.muted?"Muted":"On");const i=(r,o)=>{const a=this.titleScreen.querySelector(`[data-role="${r}"]`);a&&(a.value=String(o))};i("vol-master",t.master),i("vol-music",t.music),i("vol-sfx",t.sfx),this.setQualityLabel(t.quality,t.muted)}toast(t,e=1.8){this.elToast.textContent=t,this.elToast.classList.add("show"),this.toastUntil=performance.now()+e*1e3}update(t){if(t.countdownActive){const i=t.countdown<=.6?"go":String(Math.ceil(t.countdown));i!==this.lastCountdownToken&&(this.lastCountdownToken=i,this.elCountdown.textContent=i==="go"?"GO!":i,this.elCountdown.classList.toggle("go",i==="go"),this.elCountdown.classList.remove("show"),this.elCountdown.offsetWidth,this.elCountdown.classList.add("show"))}else t.showGo?this.lastCountdownToken!=="go2"&&(this.lastCountdownToken="go2",this.elCountdown.textContent="GO!",this.elCountdown.classList.add("go","show")):this.lastCountdownToken!==""&&(this.lastCountdownToken="",this.elCountdown.classList.remove("show"));this.elWarn.classList.toggle("show",t.warnWrongWay);const e=[t.rank,t.lap,t.laps,Math.round(t.speed),t.coins,t.item??"-",t.itemRolling?1:0,t.rank,t.standings.map(i=>`${i.rank}${i.lap}${(i.gap??0).toFixed(0)}`).join(""),Math.round(t.lapTime*100),Math.round(t.raceTime*100),Math.round(t.driftCharge01*40),t.driftTier,Math.round(t.boostTime*20),t.finished?1:0].join("|");if(e===this.lastHudSig){this.tick(t);return}this.lastHudSig=e,this.elRank.innerHTML=`${t.rank}<small>/${t.total}</small>`,this.elLap.innerHTML=`${t.lap}<small>/${t.laps}</small>`,this.elSpeed.innerHTML=`${Math.round(t.speed)}<small>km/h</small>`,this.elSpeedBar.style.width=`${Math.round(t.speed01*100)}%`;const n=t.boostTime>0;this.elBoost.classList.toggle("active",n),this.elBoostBar.style.width=`${Math.round(Math.min(1,t.boostTime/1.6)*100)}%`,this.elCoins.textContent=String(t.coins),this.elCoinBonus.textContent=t.coins>0?`+${t.coinBoostPct.toFixed(1)}% top speed`:"collect for speed",t.item?(this.lastItem!==t.item&&(this.lastItem=t.item,this.elItemIco.innerHTML=pc(t.item),this.elItem.classList.remove("empty","rolling","flash"),this.elItem.offsetWidth,this.elItem.classList.add("flash")),this.elItem.classList.toggle("rolling",t.itemRolling)):this.lastItem!==null&&(this.lastItem=null,this.elItem.classList.remove("flash","rolling"),this.elItem.classList.add("empty")),this.elItemIco.innerHTML||(this.elItemIco.innerHTML=pc("bolt")),this.elTimers.innerHTML=`
      <div><span>Lap</span><b>${Hn(t.lapTime)}</b></div>
      <div><span>Best</span><b>${Hn(t.bestLap)}</b></div>
      <div><span>Race</span><b>${Hn(t.raceTime)}</b></div>`,this.elStandings.innerHTML="<h4>Field</h4>"+t.standings.map(i=>{const r=un.find(l=>l.id===i.kartId),o=r?gn(r.kart.body):"#888",a=i.finished?Hn(i.finishTime):i.rank===1?"LEADER":Cv(i.gap??0);return`<div class="row ${i.isPlayer?"row--player":""}">
          <span class="row__rank">${i.rank}</span>
          <span class="row__name"><i class="row__dot" style="background:${o}"></i>${i.name.split(" ")[0]}</span>
          <span class="row__gap">${a}</span>
        </div>`}).join(""),this.tick(t)}tick(t){const e=t.driftCharge01>.001;this.elDrift.classList.toggle("active",e),e&&(this.elDrift.className=`panel hud__drift active t${t.driftTier}`,this.elDriftBar.style.width=`${Math.round(t.driftCharge01*100)}%`);const n=Math.min(1,t.boostTime/1.2);this.elSpeedlines.style.opacity=String(Math.min(.85,n*.85+Math.max(0,t.speed01-.82)*.7)),this.toastUntil>0&&performance.now()>=this.toastUntil&&(this.toastUntil=0,this.elToast.classList.remove("show"))}updateMinimap(t){this.minimap?.draw(t)}showResults(t,e,n,i){const r=this.resultsScreen.querySelector('[data-role="rhead"]'),o=this.resultsScreen.querySelector('[data-role="rsub"]'),a=this.resultsScreen.querySelector('[data-role="podium"]'),l=this.resultsScreen.querySelector('[data-role="table"]');r.textContent=i===1?"Victory!":i<=3?"Podium Finish":"Race Complete",o.textContent=`Finished ${i} of ${t.length} · best lap ${Hn(e)} · total ${Hn(n)}`;const c=[1,0,2];a.innerHTML=c.filter(h=>t[h]).map(h=>{const d=t[h];return`<div class="podium__step">
          <div class="podium__name" style="${d.isPlayer?"color:#ffc857;font-weight:800":""}">${d.name.split(" ")[0]}</div>
          <div class="podium__block p${d.rank}"></div>
          <div class="results__rank">${d.rank}</div>
        </div>`}).join(""),l.innerHTML='<div class="results__row head"><span>#</span><span>Racer</span><span class="results__time">Best Lap</span><span class="results__time">Total</span></div>'+t.map(h=>`<div class="results__row ${h.isPlayer?"player":""}">
            <span class="results__rank">${h.rank}</span>
            <span>${h.name}</span>
            <span class="results__time">${Hn(h.bestLap)}</span>
            <span class="results__time">${h.finished?Hn(h.finishTime):"DNF"}</span>
          </div>`).join("")}}const Vn=s=>Math.pow(2,s/12),ds=[0,.18,.38,.62,.84,1.15],mc={menu:[[0,4,7,11],[5,9,12,16],[9,12,16,19],[7,11,14,17]],race:[[9,12,16,19],[5,9,12,16],[0,4,7,11],[7,11,14,17],[9,12,16,21],[2,5,9,12],[5,9,12,16],[7,11,14,19]],results:[[0,4,7,12],[7,11,14,19],[9,12,16,19],[5,9,12,16]]};class Lv{constructor(){E(this,"ctx",null);E(this,"master",null);E(this,"sfxBus",null);E(this,"musicBus",null);E(this,"engineBus",null);E(this,"noiseBuffer",null);E(this,"grit",null);E(this,"graph",[]);E(this,"engines",new Map);E(this,"requestedEngines",new Set);E(this,"shots",new Set);E(this,"musicTimer",null);E(this,"currentMusic",null);E(this,"cueBus",null);E(this,"retiredCues",new Set);E(this,"step",0);E(this,"nextStep",0);E(this,"intensity",.35);E(this,"musicVol",.55);E(this,"sfxVol",.9);E(this,"masterVol",.85);E(this,"muted",!1);E(this,"lastSfx",new Map);E(this,"engine",{attach:t=>{this.requestedEngines.add(t),this.attachEngine(t)},update:(t,e,n,i,r,o)=>{const a=this.engines.get(t),l=this.ctx;if(!a||!l||l.state!=="running")return;const c=l.currentTime,h=$t(e),d=$t(n);let u=a.gear;h>ds[u+1]&&u<4?u++:u>0&&h<ds[u]-.045&&u--,i||(u=0),i&&(u!==a.gear||a.load-d>.32&&h>.12)&&c-a.lastPop>.13&&(a.pop.gain.cancelScheduledValues(c),a.pop.gain.setValueAtTime(.001,c),a.pop.gain.linearRampToValueAtTime(.75,c+.003),a.pop.gain.exponentialRampToValueAtTime(.001,c+.075),a.lastPop=c,u!==a.gear&&(a.shiftUntil=c+.11)),a.gear=u,a.load=d;const f=$t((h-ds[u])/(ds[u+1]-ds[u])),g=37+(h>.03?34:0)+f*92+d*19,v=c<a.shiftUntil,p=h>.985&&d>.85?.6+Math.sin(c*95)*.3:1;a.saw1.frequency.setTargetAtTime(g,c,.045),a.saw2.frequency.setTargetAtTime(g*1.006,c,.045),a.sub.frequency.setTargetAtTime(g*.5,c,.055),a.pulse.frequency.setTargetAtTime(g*.5,c,.05),a.filter.frequency.setTargetAtTime(550+d*1800+f*800,c,.08),a.intake.frequency.setTargetAtTime(280+d*2300+h*650,c,.09),a.combustion.gain.setTargetAtTime((.06+d*.22)*p,c,.035),a.gravel.gain.setTargetAtTime(a.offroad*(.1+h*.4),c,.07),a.tyre.frequency.setTargetAtTime(750+a.slip*1250+h*380,c,.08),a.screech.gain.setTargetAtTime(a.slip*h*.11,c,.08),a.whine.frequency.setTargetAtTime(450+h*1450+a.boosting*700,c,.25),a.boost.gain.setTargetAtTime(a.boosting*.12,c,.14),a.roar.gain.setTargetAtTime(a.boosting*.4,c,.12);const m=1/(1+Math.max(0,o)*Math.max(0,o)/225);a.gain.gain.setTargetAtTime(i?(.105+d*.075)*m*(v?.45:p):0,c,.045),a.pan.pan.setTargetAtTime(de(r,-1,1),c,.07)},detach:t=>{this.requestedEngines.delete(t);const e=this.engines.get(t);if(e){for(const n of e.sources)try{n.stop()}catch{}for(const n of e.nodes)n.disconnect();this.engines.delete(t)}}});E(this,"music",{play:t=>{this.currentMusic===t&&this.cueBus||(this.music.stop(.12),this.currentMusic=t,this.ready&&this.startCue(t))},stop:(t=.4)=>{this.musicTimer!==null&&window.clearInterval(this.musicTimer),this.musicTimer=null,this.currentMusic=null;const e=this.cueBus,n=this.ctx;if(this.cueBus=null,!e||!n||n.state==="closed")return;const i=n.currentTime+de(t,0,8);e.gain.cancelScheduledValues(n.currentTime),e.gain.setValueAtTime(e.gain.value,n.currentTime),e.gain.linearRampToValueAtTime(0,i),this.retiredCues.add(e);for(const r of this.shots)if(r.bus===e)for(const o of r.sources)try{o.stop(i+.01)}catch{}this.cleanCues()}})}get ready(){return this.ctx?.state==="running"}async unlock(){try{if(!this.ctx||this.ctx.state==="closed"){this.releaseGraph();const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=this.ctx=new t,n=this.master=e.createGain();n.gain.value=this.muted?0:this.masterVol;const i=e.createDynamicsCompressor();i.threshold.value=-16,i.knee.value=16,i.ratio.value=5,i.attack.value=.003,i.release.value=.18;const r=e.createBiquadFilter();r.type="highpass",r.frequency.value=28,r.Q.value=.5;const o=e.createBiquadFilter();o.type="highshelf",o.frequency.value=6500,o.gain.value=-2;const a=e.createWaveShaper(),l=new Float32Array(4096),c=this.grit=new Float32Array(1024);for(let f=0;f<l.length;f++){const g=f*2/(l.length-1)-1;l[f]=Math.tanh(g*1.1)*.89}for(let f=0;f<c.length;f++){const g=f*2/(c.length-1)-1;c[f]=Math.tanh(g*2.8)*.72}a.curve=l,a.oversample="2x",r.connect(o),o.connect(i),i.connect(a),a.connect(n),n.connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxVol,this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicVol*.65,this.engineBus=e.createGain(),this.engineBus.gain.value=this.sfxVol*.48,this.sfxBus.connect(r),this.musicBus.connect(r),this.engineBus.connect(r),this.graph=[n,i,r,o,a,this.sfxBus,this.musicBus,this.engineBus];const h=e.createBuffer(1,e.sampleRate*2,e.sampleRate),d=h.getChannelData(0);let u=7562593;for(let f=0;f<d.length;f++)u=Math.imul(u,1664525)+1013904223|0,d[f]=u/2147483648;this.noiseBuffer=h,this.lastSfx.clear()}this.ctx.state!=="running"&&await this.ctx.resume();for(const t of this.requestedEngines)this.attachEngine(t);this.currentMusic&&!this.cueBus&&this.startCue(this.currentMusic)}catch{}}target(t,e){t&&this.ctx&&this.ctx.state!=="closed"&&t.setTargetAtTime(e,this.ctx.currentTime,.025)}setMasterVolume(t){this.masterVol=$t(t),this.target(this.master?.gain,this.muted?0:this.masterVol)}setMusicVolume(t){this.musicVol=$t(t),this.target(this.musicBus?.gain,this.musicVol*.65)}setSfxVolume(t){this.sfxVol=$t(t),this.target(this.sfxBus?.gain,this.sfxVol),this.target(this.engineBus?.gain,this.sfxVol*.48)}mute(t){this.muted=t,this.target(this.master?.gain,t?0:this.masterVol)}setIntensity(t){this.intensity=$t(t)}setEngineState(t,e,n,i){const r=this.engines.get(t);r&&(r.offroad=$t(e),r.slip=$t(Math.abs(n)),r.boosting=$t(i))}play(t,e={}){if(!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;const n=this.ctx.currentTime,i=t==="coin"?.03:.02,r=this.lastSfx.get(t)??-1;if(n-r<i)return;this.lastSfx.set(t,n);const o=de(e.volume??1,0,2)*.7,a=de(e.rate??1,.25,4),l=n;switch(t){case"ui_move":this.tone(660*a,.06,"square",o*.18,l);break;case"ui_accept":this.tone(523*a,.09,"triangle",o*.28,l),this.tone(784*a,.16,"triangle",o*.24,l+.07),this.tone(1046*a,.22,"triangle",o*.2,l+.14);break;case"ui_back":this.tone(392*a,.1,"triangle",o*.24,l),this.tone(294*a,.16,"triangle",o*.2,l+.08);break;case"countdown_beep":this.tone(440,.28,"square",o*.3,l),this.tone(880,.22,"sine",o*.16,l);break;case"countdown_go":this.tone(784,.5,"square",o*.35,l),this.tone(1174,.5,"triangle",o*.26,l),this.tone(1568,.7,"sine",o*.2,l+.02);break;case"engine_start":this.sweep(70,240,.6,"sawtooth",o*.3,l);break;case"pickup":this.tone(880,.1,"triangle",o*.26,l),this.tone(1318,.14,"triangle",o*.2,l+.05);break;case"coin":this.note(1568*a,1568*a,.12,"triangle",o*.24,l,this.sfxBus,-.25,.002,8e3),this.note(2093*a,2093*a,.24,"sine",o*.18,l+.045,this.sfxBus,.25,.002,9500);break;case"item_roll":this.tone(300,.05,"square",o*.14,l);break;case"fire_bolt":this.sweep(1200,320,.28,"sawtooth",o*.26,l),this.noise(.18,2400,o*.18,l),this.note(90,42,.18,"sine",o*.32,l,this.sfxBus,0,.002,900);break;case"drop_mine":this.tone(220,.12,"square",o*.2,l),this.tone(150,.2,"sawtooth",o*.16,l+.05);break;case"boost_start":this.sweep(280,1400,.45,"sawtooth",o*.24,l),this.noise(.4,1200,o*.2,l),this.note(75,105,.55,"sine",o*.32,l,this.sfxBus,0,.015,650);break;case"boost_end":this.sweep(900,300,.25,"sawtooth",o*.14,l);break;case"shield_up":this.tone(523,.3,"sine",o*.24,l),this.tone(1046,.4,"sine",o*.16,l+.04);break;case"blast":this.sweep(200,60,.7,"sawtooth",o*.4,l),this.noise(.6,700,o*.36,l);break;case"hit":this.sweep(420,90,.35,"square",o*.34,l),this.noise(.25,900,o*.3,l);break;case"explode":this.sweep(180,45,.55,"sawtooth",o*.4,l),this.noise(.45,500,o*.34,l),this.note(95,29,.85,"sine",o*.48,l,this.sfxBus,0,.002,850),this.noise(.8,1500,o*.2,l+.035,void 0,-.4),this.noise(.65,950,o*.18,l+.09,void 0,.45);break;case"spinout":this.sweep(900,200,.7,"triangle",o*.24,l);break;case"drift_start":this.noise(.22,3200,o*.16,l);break;case"drift_charge":this.tone(392*a,.12,"sine",o*.14,l);break;case"mini_turbo":this.sweep(500,1600,.35,"square",o*.26,l),this.tone(1046,.3,"triangle",o*.16,l+.03),this.noise(.24,4100,o*.21,l,void 0,.3),this.note(100,65,.22,"sine",o*.22,l,this.sfxBus,0,.003,800);break;case"land":this.noise(.16,420,o*.3,l),this.tone(90,.14,"sine",o*.26,l);break;case"offroad":this.noise(.2,900,o*.1,l);break;case"wall_hit":this.noise(.2,1500,o*.3,l),this.sweep(320,120,.2,"square",o*.22,l);break;case"lap":this.tone(659,.18,"triangle",o*.24,l),this.tone(988,.26,"triangle",o*.2,l+.1);break;case"final_lap":this.tone(659,.18,"square",o*.24,l),this.tone(880,.18,"square",o*.22,l+.14),this.tone(1174,.34,"square",o*.2,l+.28);break;case"finish":this.tone(523,.24,"triangle",o*.3,l),this.tone(659,.24,"triangle",o*.28,l+.16),this.tone(784,.24,"triangle",o*.26,l+.32),this.tone(1046,.7,"triangle",o*.24,l+.48);for(let c=0;c<3;c++)this.note(523*Vn(c===0?0:c===1?4:7),523*Vn(c===0?0:c===1?4:7),1.2,"sawtooth",o*.1,l+.48,this.sfxBus,(c-1)*.45,.04,2600);this.noise(.6,6500,o*.12,l+.48,void 0,.2);break;case"warn":this.tone(330,.16,"square",o*.22,l),this.tone(330,.16,"square",o*.22,l+.22);break}}attachEngine(t){const e=this.ctx;if(!e||e.state==="closed"||!this.engineBus||!this.noiseBuffer||this.engines.has(t))return;const n=[],i=[],r=B=>{const k=e.createGain();return k.gain.value=B,n.push(k),k},o=(B,k,st=.7)=>{const at=e.createBiquadFilter();return at.type=B,at.frequency.value=k,at.Q.value=st,n.push(at),at},a=(B,k,st)=>{const at=e.createOscillator();return at.type=B,at.frequency.value=k,at.connect(st),n.push(at),i.push(at),at},l=r(0),c=e.createStereoPanner();n.push(c),l.connect(c),c.connect(this.engineBus);const h=e.createWaveShaper();h.curve=this.grit,h.oversample="2x",n.push(h);const d=o("lowpass",900),u=r(.3);u.connect(h),h.connect(d),d.connect(l);const f=a("sawtooth",42,u),g=a("sawtooth",42.25,u),v=r(.42);v.connect(u);const p=a("square",21,v),m=r(.06);m.connect(u.gain);const y=a("sine",21,m),x=e.createBufferSource();x.buffer=this.noiseBuffer,x.loop=!0,n.push(x),i.push(x);const S=o("bandpass",650,2.5),D=r(.08);x.connect(S),S.connect(D),D.connect(u);const R=r(0),C=o("lowpass",650);x.connect(C),C.connect(R),R.connect(l);const I=r(0),$=o("bandpass",1800,1.8);I.connect($),$.connect(l);const _=a("sawtooth",1200,I),M=r(0);M.connect(l);const b=a("sine",500,M),U=r(0),G=o("lowpass",260);x.connect(G),G.connect(U),U.connect(l);const H=r(0),z=o("bandpass",180,.65);x.connect(z),z.connect(H),H.connect(l);for(const B of i)B.start();this.engines.set(t,{sources:i,nodes:n,saw1:f,saw2:g,sub:p,tyre:_,whine:b,pulse:y,gain:l,combustion:D,gravel:R,screech:I,boost:M,roar:U,pop:H,filter:d,intake:S,pan:c,gear:0,load:0,shiftUntil:0,lastPop:-1,offroad:0,slip:0,boosting:0})}startCue(t){if(!this.ctx||!this.musicBus)return;const e=this.cueBus=this.ctx.createGain();e.connect(this.musicBus),e.gain.setValueAtTime(0,this.ctx.currentTime),e.gain.linearRampToValueAtTime(1,this.ctx.currentTime+.12),this.step=0,this.nextStep=this.ctx.currentTime+.025,this.scheduleMusic(t),this.musicTimer=window.setInterval(()=>this.scheduleMusic(t),25)}scheduleMusic(t){const e=this.ctx;if(!e||e.state!=="running"||this.currentMusic!==t)return;const n=t==="race"?142:t==="menu"?98:112;for(this.nextStep<e.currentTime-.15&&(this.nextStep=e.currentTime+.025);this.nextStep<e.currentTime+.14;)this.playMusicStep(t,this.step++,n,this.nextStep),this.nextStep+=60/n/4}playMusicStep(t,e,n,i){const r=this.cueBus;if(!this.ctx||!r)return;const o=60/n,a=e<32,l=a?e:e-32,c=Math.floor(l/16),h=l%16,d=mc[t][c%mc[t].length],u=d[0],f=t==="race"?this.intensity:.35;if(h===0)for(let g=0;g<4;g++)this.note(261.63*Vn(d[g]),261.63*Vn(d[g]),o*4.3,"sawtooth",.033,i,r,(g-1.5)*.4,o*.35,1100+f*1800);if((!a||c>0)&&(h===0||h===6||h===8||h===14)){const g=65.407*Vn(u+(h===14?7:0));this.note(g,g,o*(h===0?1.2:.65),"triangle",.22,i,r,0,.008,650)}if(h%(t==="menu"||a?4:2)===0){const g=d[(Math.floor(h/2)+c)%4]+(h>=8?12:0);this.note(523.25*Vn(g),523.25*Vn(g),o*.65,"sine",.075,i,r,Math.sin(h*.8)*.65,.006,4800)}if(!(a&&c===0)){if((h===0||h===8||t==="race"&&f>.6&&h===10)&&this.note(145,43,.22,"sine",.37,i,r,0,.002,1600),(h===4||h===12)&&(this.noise(.16,2100,.2,i,r,-.08),this.note(190,105,.12,"triangle",.11,i,r,0,.002,1800),t==="results"||f>.45))for(let g=0;g<3;g++)this.noise(.08,1400,.09,i+g*.014,r,.3);if((h%2===0||t==="race"&&f>.75)&&this.noise(h===14?.12:.035,7800,.065,i,r,h%4===0?-.35:.35),t==="race"&&!a&&f>.5&&h%4===3){const g=523.25*Vn(d[(c+h)%4]+12);this.note(g,g,o*.4,"triangle",(f-.5)*.12,i,r,-.3,.005,5400)}}}cleanCues(){for(const t of this.retiredCues){let e=!1;for(const n of this.shots)if(n.bus===t){e=!0;break}e||(t.disconnect(),this.retiredCues.delete(t))}}trackShot(t,e,n,i,r){const o={sources:t,nodes:e,bus:n};this.shots.add(o);let a=t.length;for(const l of t)l.onended=()=>{if(l.onended=null,--a===0){for(const c of e)c.disconnect();this.shots.delete(o),this.cleanCues()}},l.start(i),l.stop(i+r+.025)}tone(t,e,n,i,r,o){this.note(t,t,e,n,i,r,o??this.sfxBus,0,.007,5400)}sweep(t,e,n,i,r,o){this.note(t,e,n,i,r,o,this.sfxBus,-.1,.006,4200),this.noise(n*.7,Math.min(6e3,t*3),r*.38,o,void 0,.25)}note(t,e,n,i,r,o,a,l,c,h){const d=this.ctx;if(!d||!a||d.state==="closed"||this.shots.size>=320)return;const u=d.createOscillator(),f=d.createOscillator(),g=d.createGain(),v=d.createGain(),p=d.createBiquadFilter(),m=d.createStereoPanner();u.type=i,f.type="sine",g.gain.value=i==="sawtooth"?.22:.28,u.frequency.setValueAtTime(Math.max(20,t),o),u.frequency.exponentialRampToValueAtTime(Math.max(20,e),o+n),f.frequency.setValueAtTime(Math.max(20,t*2.003),o),f.frequency.exponentialRampToValueAtTime(Math.max(20,e*2.003),o+n),p.type="lowpass",p.Q.value=.65,p.frequency.setValueAtTime(h,o),p.frequency.exponentialRampToValueAtTime(Math.max(220,h*.45),o+n),v.gain.setValueAtTime(0,o),v.gain.linearRampToValueAtTime(r,o+Math.min(c,n*.4)),c>.08&&v.gain.linearRampToValueAtTime(r*.65,o+n*.72),v.gain.exponentialRampToValueAtTime(1e-5,o+n),v.gain.linearRampToValueAtTime(0,o+n+.02),m.pan.value=l,u.connect(p),f.connect(g),g.connect(p),p.connect(v),v.connect(m),m.connect(a),this.trackShot([u,f],[u,f,g,p,v,m],a,o,n)}noise(t,e,n,i,r,o=0){const a=this.ctx,l=r??this.sfxBus;if(!a||!l||!this.noiseBuffer||a.state==="closed"||this.shots.size>=320)return;const c=a.createBufferSource(),h=a.createBiquadFilter(),d=a.createBiquadFilter(),u=a.createGain(),f=a.createGain(),g=a.createStereoPanner();c.buffer=this.noiseBuffer,c.loop=!0,h.type="bandpass",h.frequency.value=e,h.Q.value=.7,d.type="highpass",d.frequency.value=Math.min(1e4,e*2),u.gain.value=.15,f.gain.setValueAtTime(0,i),f.gain.linearRampToValueAtTime(n,i+.003),f.gain.exponentialRampToValueAtTime(1e-5,i+t),f.gain.linearRampToValueAtTime(0,i+t+.02),g.pan.value=o,c.connect(h),c.connect(d),d.connect(u),u.connect(f),h.connect(f),f.connect(g),g.connect(l),this.trackShot([c],[c,h,d,u,f,g],l,i,t)}releaseGraph(){this.musicTimer!==null&&window.clearInterval(this.musicTimer),this.musicTimer=null;for(const t of this.engines.values()){for(const e of t.sources)try{e.stop()}catch{}for(const e of t.nodes)e.disconnect()}this.engines.clear();for(const t of this.shots){for(const e of t.sources){e.onended=null;try{e.stop()}catch{}}for(const e of t.nodes)e.disconnect()}this.shots.clear(),this.cueBus?.disconnect(),this.cueBus=null;for(const t of this.retiredCues)t.disconnect();this.retiredCues.clear();for(const t of this.graph)t.disconnect();this.graph=[],this.master=this.sfxBus=this.musicBus=this.engineBus=null,this.noiseBuffer=null,this.grit=null}shutdown(){this.currentMusic=null,this.requestedEngines.clear(),this.releaseGraph(),this.ctx&&this.ctx.state!=="closed"&&this.ctx.close().catch(()=>{}),this.ctx=null}}function Iv(){return new Lv}const fs=new URLSearchParams(location.search),gc=new T(0,1,0);class Dv{constructor(){E(this,"shots",[]);E(this,"index",0);E(this,"t",0);E(this,"pos",new T);E(this,"look",new T);E(this,"enabled",!0)}build(t){this.shots.length=0;const e={pos:new T,tangent:new T,right:new T,up:new T,halfWidth:12},n=(r,o,a,l,c,h,d,u,f,g)=>{const v=new T,p=new T,m=new T;t.frameAt(t.wrapS(r),e),v.set(e.pos.x+e.right.x*o,e.pos.y+a,e.pos.z+e.right.z*o),t.frameAt(t.wrapS(l),e),p.set(e.pos.x+e.right.x*c,e.pos.y+h,e.pos.z+e.right.z*c),t.frameAt(t.wrapS(d),e),m.set(e.pos.x+e.right.x*u,e.pos.y+f,e.pos.z+e.right.z*u),this.shots.push({from:v,to:p,look:m.clone(),lookTo:m.clone(),duration:g})},i=t.totalLength;n(.56*i,54,30,.615*i,42,24,.585*i,0,2.2,10),n(.945*i,-34,30,.012*i,-22,8.5,.065*i,0,2.4,11),n(.03*i,6,2.6,.095*i,-4,3.4,.15*i,0,2,8),n(.285*i,-30,16,.355*i,-22,10,.335*i,0,3,9),n(.47*i,30,17,.56*i,20,22,.545*i,0,4.5,10),n(.59*i,-34,13,.66*i,-26,8,.632*i,0,2.5,8),n(.72*i,0,7,.8*i,0,5.5,.775*i,0,2,9),n(.88*i,-20,11,.945*i,-15,7,.93*i,0,2.6,9)}hold(t,e){this.enabled=!1,this.pos.copy(t),this.look.copy(e)}track(t){this.enabled||this.look.copy(t)}update(t,e){if(this.enabled&&this.shots.length){const n=this.shots[this.index];this.t+=t/n.duration,this.t>=1&&(this.t=0,this.index=(this.index+1)%this.shots.length);const i=this.shots[this.index],r=this.t*this.t*(3-2*this.t);this.pos.lerpVectors(i.from,i.to,r),this.look.lerpVectors(i.look,i.lookTo,r)}e.position.copy(this.pos),e.lookAt(this.look)}skip(){this.t=1}}class Uv{constructor(t){E(this,"renderer");E(this,"scene",new y0);E(this,"menuCamera");E(this,"composer");E(this,"renderPass");E(this,"bloom");E(this,"input",new _g);E(this,"ui");E(this,"audio",Iv());E(this,"userSettings",Mg());E(this,"quality",yo(this.userSettings.quality,window.devicePixelRatio));E(this,"world",null);E(this,"vfx",null);E(this,"director",null);E(this,"mode","title");E(this,"paused",!1);E(this,"lastTime",0);E(this,"elapsed",0);E(this,"running",!0);E(this,"cine",new Dv);E(this,"stage",new le);E(this,"stagePivot",new le);E(this,"stageModel",null);E(this,"stageLight");E(this,"modelsGroup",null);E(this,"aiSpecsCache",[]);E(this,"playerSpec",un[0]);E(this,"lapOverride",Number(fs.get("laps"))||0);E(this,"hudPhaseSeen","");E(this,"tick",t=>{if(!this.running)return;requestAnimationFrame(this.tick);const e=Math.min(.05,Math.max(5e-4,(t-this.lastTime)/1e3));if(this.lastTime=t,this.mode==="race"?(this.input.pressed("pause")&&this.setPaused(!this.paused),!this.paused&&this.input.pressed("reset")&&this.director?.manualReset()):this.mode==="results"&&this.input.pressed("pause")&&this.quitToTitle(),this.paused){this.input.endStep(),this.render();return}this.elapsed+=e,this.mode==="race"||this.mode==="results"?this.updateRace(e):this.updateMenu(e),this.input.endStep()});this.root=t;const e=document.getElementById("gl");this.renderer=new M0({canvas:e,antialias:this.quality.antialias,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.outputColorSpace=en,this.renderer.toneMapping=va,this.renderer.toneMappingExposure=1.04,this.renderer.shadowMap.enabled=this.quality.shadows,this.renderer.shadowMap.type=xc,this.menuCamera=new Ke(62,16/9,.4,2400),this.composer=new dg(this.renderer),this.renderPass=new fg(this.scene,this.menuCamera),this.composer.addPass(this.renderPass),this.bloom=new Yi(new ct(window.innerWidth,window.innerHeight),this.quality.bloom,.55,.82),this.composer.addPass(this.bloom),this.composer.addPass(new gg),this.stageLight=new pa(16773853,1.35),this.stageLight.position.set(6,12,10),this.stage.add(this.stagePivot),this.scene.add(this.stage,this.stageLight,this.stageLight.target),this.ui=new Pv(this.root,{onStartRace:()=>this.startRace(),onOpenSelect:()=>this.setMode("select"),onSelectKart:i=>this.selectKart(i),onResume:()=>this.setPaused(!1),onRestart:()=>this.restartRace(),onQuitToTitle:()=>this.quitToTitle(),onCycleQuality:()=>this.cycleQuality(),onToggleMute:()=>this.toggleMute(),onVolume:(i,r)=>{i==="master"?(this.userSettings.master=r,this.audio.setMasterVolume(r)):i==="music"?(this.userSettings.music=r,this.audio.setMusicVolume(r)):(this.userSettings.sfx=r,this.audio.setSfxVolume(r)),sr(this.userSettings)},onHover:()=>{this.userSettings.muted||this.audio.play("ui_move",{volume:.45})}}),this.input.attach(e),this.input.onFirstInteraction(()=>this.unlockAudio()),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("blur",()=>this.onBlur()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.onBlur()}),window.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.running=!1,this.ui.toast("Graphics context lost — please reload",30)}),this.playerSpec=So(this.userSettings.lastKart)??un[0],this.aiSpecsCache=fc(this.playerSpec.id,5);const n=fs.get("quality");(n==="low"||n==="medium"||n==="high")&&(this.userSettings.quality=n,this.quality=yo(n,window.devicePixelRatio),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.shadowMap.enabled=this.quality.shadows,this.bloom.strength=this.quality.bloom),fs.get("nobloom")==="1"&&(this.bloom.strength=0),this.buildWorld(),this.ui.attachMinimap(this.world.spline),this.cine.build(this.world.spline),this.ui.setSelectedKart(this.playerSpec.id),this.ui.setSettings(this.userSettings),fs.get("view")==="models"?this.enterModelViewer():fs.get("auto")==="1"?this.setMode("select"):(this.setMode("title"),this.ui.toast("Press START RACE — or click anywhere for sound",4.5)),this.lastTime=performance.now(),requestAnimationFrame(this.tick)}unlockAudio(){this.audio.unlock().then(()=>{this.audio.setMasterVolume(this.userSettings.master),this.audio.setMusicVolume(this.userSettings.music),this.audio.setSfxVolume(this.userSettings.sfx),this.audio.mute(this.userSettings.muted),(this.mode==="title"||this.mode==="select")&&this.audio.music.play("menu")})}toggleMute(){this.userSettings.muted=!this.userSettings.muted,this.audio.mute(this.userSettings.muted),sr(this.userSettings),this.ui.setSettings(this.userSettings),this.userSettings.muted||this.audio.play("ui_accept")}buildWorld(){this.director&&(this.director.dispose(),this.director=null),this.world?.dispose(),this.vfx?.dispose(),this.world=null,this.vfx=null,this.vfx=new Ag(this.scene,this.quality),this.world=Zg(this.scene,this.quality),this.onResize()}buildRace(){!this.world||!this.vfx||(this.director?.dispose(),this.director=new Ev(this.scene,this.world.spline,this.quality,this.vfx,this.playerSpec,this.aiSpecsCache,{laps:this.lapOverride||3,aiDifficulty:1}),this.director.events={sfx:(t,e)=>this.audio.play(t,e),shake:t=>this.director?.camera.impact(t)},this.director.camera.setAspect(Math.max(1,window.innerWidth)/Math.max(1,window.innerHeight)),this.hudPhaseSeen="")}setMode(t){switch(this.mode=t,this.input.clearHeld(),this.paused=!1,this.ui.setPaused(!1),t){case"title":this.ui.setScreen("title"),this.audio.music.play("menu"),this.cine.enabled=!0,this.cine.skip(),this.stage.visible=!1,this.clearModels();break;case"select":this.ui.setScreen("select"),this.audio.music.play("menu"),this.buildStageModel(this.playerSpec.id),this.focusStage();break;case"race":this.ui.setScreen("race"),this.audio.music.play("race"),this.stage.visible=!1,this.clearModels();break;case"results":this.ui.setScreen("results"),this.audio.music.play("results");break}}selectKart(t){this.playerSpec=So(t),this.userSettings.lastKart=t,sr(this.userSettings),this.buildStageModel(t)}startRace(){this.audio.play("ui_accept"),this.hudPhaseSeen="",this.aiSpecsCache=fc(this.playerSpec.id,5),this.buildRace(),this.setMode("race"),this.audio.play("engine_start")}restartRace(){if(this.audio.play("ui_accept"),!this.director){this.startRace();return}this.hudPhaseSeen="",this.director.resetRace(this.playerSpec,this.aiSpecsCache),this.setMode("race")}quitToTitle(){this.audio.play("ui_back");for(const t of this.director?.racers.map(e=>e.id)??[])this.audio.engine.detach(t);this.director?.dispose(),this.director=null,this.vfx?.clearSkids(),this.setMode("title")}cycleQuality(){const t=["low","medium","high"],e=t[(t.indexOf(this.userSettings.quality)+1)%t.length];this.userSettings.quality=e,sr(this.userSettings),this.quality=yo(e,window.devicePixelRatio),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.shadowMap.enabled=this.quality.shadows,this.bloom.strength=this.quality.bloom;const n=this.mode==="race"||this.mode==="results";this.buildWorld(),this.ui.attachMinimap(this.world.spline),this.cine.build(this.world.spline),n?(this.buildRace(),this.setMode("race")):this.mode==="select"&&(this.buildStageModel(this.playerSpec.id),this.focusStage()),this.ui.setSettings(this.userSettings),this.ui.toast(`Quality: ${e.toUpperCase()}`,1.6),this.audio.play("ui_accept")}setPaused(t){if(this.mode==="race"&&this.paused!==t)if(this.paused=t,this.ui.setPaused(t),this.input.clearHeld(),t){this.audio.music.stop(.25);for(const e of this.director?.racers??[])this.audio.engine.detach(e.id)}else this.audio.music.play("race"),this.lastTime=performance.now()}onBlur(){this.mode==="race"&&!this.paused&&this.setPaused(!0)}buildStageModel(t){this.world&&(this.stageModel&&(this.stagePivot.remove(this.stageModel.root),this.stageModel.dispose(),this.stageModel=null),this.stageModel=ma(So(t),this.quality),this.stagePivot.add(this.stageModel.root),this.stage.visible=!0)}focusStage(){if(!this.world)return;const t=this.world.spline,e={pos:new T,tangent:new T,right:new T,up:new T,halfWidth:12};t.frameAt(t.totalLength*.055,e);const n=t.surfaceHeight(e.pos.x,e.pos.z,-1);this.stage.position.set(e.pos.x,n,e.pos.z),this.stage.rotation.y=Math.atan2(-e.tangent.x,-e.tangent.z),this.stageLight.position.set(e.pos.x+e.right.x*8+5,n+11,e.pos.z+e.right.z*8+5),this.stageLight.target.position.set(e.pos.x,n+1.2,e.pos.z),this.stageLight.target.updateMatrixWorld();const i=new T(e.pos.x+e.right.x*7.2-e.tangent.x*6.6,n+3.5,e.pos.z+e.right.z*7.2-e.tangent.z*6.6),r=new T(e.pos.x,n+1,e.pos.z),o=new T().subVectors(r,i).normalize(),a=new T().crossVectors(o,gc).normalize(),l=r.clone().addScaledVector(gc,2.5).addScaledVector(a,-3.1);this.cine.hold(i,l)}clearModels(){this.modelsGroup&&(this.modelsGroup.traverse(t=>{}),this.scene.remove(this.modelsGroup),this.modelsGroup=null)}enterModelViewer(){this.setMode("title"),this.mode="models",this.ui.setScreen("title"),this.cine.enabled=!1;const t=new le,e=Ir(7);for(let n=0;n<un.length;n++){const i=ma(un[n],this.quality),r=n%3,o=Math.floor(n/3);i.root.position.set((r-1)*6.8,0,o*8.2),i.root.rotation.y=.5*(e()-.5),t.add(i.root)}this.modelsGroup=t,this.scene.add(t),this.cine.hold(new T(0,8.5,-14),new T(0,1.1,4))}onResize(){const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight);this.renderer.setSize(t,e,!1),this.composer.setSize(t,e),this.menuCamera.aspect=t/e,this.menuCamera.updateProjectionMatrix();const n=this.director?.camera;n&&n.setAspect(t/e)}activeCamera(){return(this.mode==="race"||this.mode==="results")&&this.director?this.director.camera.camera:this.menuCamera}updateMenu(t){if(!this.world||!this.vfx)return;if(this.cine.update(t,this.menuCamera),this.mode==="models"&&this.menuCamera.lookAt(0,1.1,4),this.mode==="select"&&this.stageModel){this.stagePivot.rotation.y+=t*.5;const n=this.stageModel;n.driver.update({steer:Math.sin(this.elapsed*.85)*.45,lean:Math.sin(this.elapsed*.6)*.12,throttle:.25,drifting:!1,hitTimer:0,airborne:!1,boosting:!1,time:this.elapsed});const i=n.wheels;i.fl.spin.rotation.x+=t*1.6,i.fr.spin.rotation.x+=t*1.6,i.rl.spin.rotation.x+=t*1.6,i.rr.spin.rotation.x+=t*1.6,i.fl.pivot.rotation.y=Math.sin(this.elapsed*.85)*.22,i.fr.pivot.rotation.y=Math.sin(this.elapsed*.85)*.22}const e=Nv.copy(this.menuCamera.position);e.y-=6,this.world.update(t,this.elapsed,this.menuCamera,e),this.vfx.update(t),this.render()}updateRace(t){if(!this.world||!this.vfx||!this.director){this.updateMenu(t);return}const e=this.director.update(t,this.input),n=this.director.camera.camera;if(this.world.update(t,this.elapsed,n,this.director.player.pos),this.vfx.update(t),this.ui.update(e),this.drawMinimap(),this.updateEngineAudio(n),this.mode==="race"&&e.phase==="results"&&this.hudPhaseSeen!=="results"){this.hudPhaseSeen="results";const i=this.director.results(),r=this.director.raceStats(),o=i.find(a=>a.isPlayer);this.ui.showResults(i,r.bestLapPlayer,o?.finishTime??e.raceTime,o?.rank??1),this.setMode("results");for(const a of this.director.racers)this.audio.engine.detach(a.id);this.ui.toast("Race complete",2.4)}this.render()}updateEngineAudio(t){if(!this.audio.ready||!this.director)return;const e=this.director,n=Math.atan2(t.matrixWorld.elements[8],t.matrixWorld.elements[10]);for(const h of e.racers){const d=h.state,u=d.pos.x-t.position.x,f=d.pos.z-t.position.z,g=Math.hypot(u,f),v=Math.cos(n),p=-Math.sin(n),m=g>.5?Fv((u*v+f*p)/g):0,y=$t(Math.max(d.boostTime,d.padBoostTime)/1.6);this.audio.engine.attach(h.id),this.audio.engine.update(h.id,$t(Math.abs(d.speed)/42),$t(h.controls.throttle*(1-$t(Math.abs(d.speed)/46))),!0,m,g),this.audio.setEngineState?.(h.id,d.onRoad?0:1,$t(d.slip/10),y)}const i=e.player,r=e.racers.reduce((h,d)=>d.progress.distance>h.progress.distance?d:h),o=Math.abs(r.progress.distance-i.progress.distance),a=i.progress.lap>=e.config.laps?1:0,l=$t(1-o/90),c=$t(Math.max(i.state.boostTime,i.state.padBoostTime)/1.6);this.audio.setIntensity?.($t(a*.55+l*.4+c*.35))}drawMinimap(){if(!this.director)return;const t=[];for(const e of this.director.racers)t.push({x:e.pos.x,z:e.pos.z,color:e.isPlayer?16762967:e.kart.spec.kart.body,isPlayer:e.isPlayer,rank:e.rank});this.ui.updateMinimap(t)}render(){const t=this.activeCamera();this.renderPass.camera=t,this.composer.render()}debugStartRace(){(!this.director||this.mode==="title"||this.mode==="select")&&this.startRace()}debugSnapshot(){const t=this.director;return t?{mode:this.mode,phase:t.phase,paused:this.paused,player:{rank:t.player.rank,lap:t.player.progress.lap,checkpoint:t.player.progress.checkpoint,finished:t.player.progress.finished,speed:Number(t.player.state.speed.toFixed(2)),coins:t.player.coins,item:t.player.item,onRoad:t.player.state.onRoad,grounded:t.player.state.grounded,drifting:t.player.state.drifting,driftTier:t.player.state.driftTier,driftCharge:Number(t.player.state.driftCharge.toFixed(2)),boostTime:Number(Math.max(t.player.state.boostTime,t.player.state.padBoostTime).toFixed(2)),airborne:!t.player.state.grounded,x:Number(t.player.pos.x.toFixed(1)),y:Number(t.player.pos.y.toFixed(1)),z:Number(t.player.pos.z.toFixed(1))},field:t.racers.map(e=>({id:e.id,name:e.name,rank:e.rank,lap:e.progress.lap,distance:Number(e.progress.distance.toFixed(1)),speed:Number(e.state.speed.toFixed(2)),finished:e.progress.finished})),lapTimes:t.player.progress.lapTimes.map(e=>Number(e.toFixed(3))),raceTime:Number(t.raceTime.toFixed(2))}:{mode:this.mode,director:null}}debugGiveItem(t){this.director&&(this.director.player.item=t,this.director.player.itemRoll=0)}debugFinishRace(){const t=this.director;if(t){for(let e=0;e<t.racers.length;e++){const n=t.racers[e];n.progress.finished||(n.progress.finished=!0,n.progress.finishTime=t.raceTime+e*.9,n.progress.finishRank=e+1,n.progress.lap=4)}t.phase="results"}}debugSimScale(t){if(!this.director)return;const e=Math.max(1,Math.min(40,t));this.director.config.timeScale=e,this.director.config.maxSubsteps=Math.min(4800,Math.ceil(120*e)+24)}debugAutoPilot(t){this.director&&(this.director.autoPilotPlayer=t)}debugRestart(){this.restartRace()}debugTeleport(t){const e=this.director;if(!e||!this.world)return;const n=this.world.spline.wrapS(t*this.world.spline.totalLength),i=this.world.spline.sampleAtS(n),r=Math.atan2(-i.tangent.x,-i.tangent.z);e.player.kart.physics.placeOnTrack(i.pos.x,this.world.spline.surfaceHeight(i.pos.x,i.pos.z,i.i)+.2,i.pos.z,r,14)}}const Nv=new T;function Fv(s){return s<-1?-1:s>1?1:s}function vc(){const s=document.getElementById("ui"),t=document.getElementById("boot");if(!(!s||!t))try{const e=new Uv(s);window.__zephyr=e,t.classList.add("hidden"),setTimeout(()=>t.remove(),700)}catch(e){t.textContent=`Failed to start: ${e.message}`,console.error(e)}}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",vc,{once:!0}):vc();
